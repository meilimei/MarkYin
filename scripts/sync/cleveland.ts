/**
 * Cleveland Museum of Art sync — fetches CC0 imagery + metadata via the
 * Cleveland Open Access API.
 *
 * Reads scripts/seeds/cleveland.json:
 *   [{ slug, accessionNumber, notes? }, ...]
 *
 * Writes scripts/generated/cleveland/<slug>.json with normalized fields.
 *
 * Run: npm run sync:cleveland
 */

import fs from "node:fs/promises";
import path from "node:path";
import dns from "node:dns";
import { fileURLToPath } from "node:url";

dns.setDefaultResultOrder("ipv4first");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SEEDS_PATH = path.resolve(__dirname, "../seeds/cleveland.json");
const OUT_DIR = path.resolve(__dirname, "../generated/cleveland");
const API = "https://openaccess-api.clevelandart.org/api/artworks";
const USER_AGENT =
  "ChinaHeritage/1.0 (https://chinaheritageguide.com; sync-bot)";

interface CmaArtwork {
  id: number;
  accession_number: string;
  title: string;
  type?: string;
  technique?: string;
  culture?: string[];
  creation_date?: string;
  creators?: { description?: string; role?: string }[];
  url?: string;
  measurements?: string;
  fun_fact?: string;
  description?: string;
  did_you_know?: string;
  citations?: { citation: string }[];
  images?: {
    web?: { url: string };
    print?: { url: string };
    full?: { url: string };
  };
  share_license_status?: string;
  collection?: string;
  department?: string;
}

interface CmaResponse {
  data: CmaArtwork;
}

interface SeedEntry {
  slug: string;
  accessionNumber: string;
  notes?: string;
}

async function fetchOne(accession: string): Promise<CmaArtwork | null> {
  const url = `${API}/${encodeURIComponent(accession)}`;
  try {
    const res = await fetch(url, { headers: { "User-Agent": USER_AGENT } });
    if (!res.ok) {
      console.warn(`  ! CMA ${accession}: HTTP ${res.status}`);
      return null;
    }
    const data = (await res.json()) as CmaResponse;
    return data.data;
  } catch (err) {
    console.warn(`  ! CMA ${accession} fetch error:`, err);
    return null;
  }
}

async function readSeed(): Promise<SeedEntry[]> {
  try {
    return JSON.parse(await fs.readFile(SEEDS_PATH, "utf-8")) as SeedEntry[];
  } catch {
    return [];
  }
}

async function syncOne(entry: SeedEntry): Promise<boolean> {
  console.log(`  > ${entry.slug} -> CMA ${entry.accessionNumber}`);
  const art = await fetchOne(entry.accessionNumber);
  if (!art) return false;

  // Skip if not CC0 (defensive — seed should already filter)
  if (art.share_license_status !== "CC0") {
    console.warn(`    ! not CC0 (${art.share_license_status}); skipping`);
    return false;
  }

  const result = {
    slug: entry.slug,
    accessionNumber: art.accession_number,
    title: art.title,
    type: art.type,
    technique: art.technique,
    culture: art.culture ?? [],
    creationDate: art.creation_date,
    creators: art.creators ?? [],
    url: art.url ?? `https://clevelandart.org/art/${art.accession_number}`,
    measurements: art.measurements,
    funFact: art.fun_fact,
    description: art.description,
    didYouKnow: art.did_you_know,
    department: art.department,
    collection: art.collection,
    image: {
      web: art.images?.web?.url,
      print: art.images?.print?.url,
      full: art.images?.full?.url,
      license: art.share_license_status ?? "CC0",
    },
    syncedAt: new Date().toISOString(),
  };

  await fs.mkdir(OUT_DIR, { recursive: true });
  await fs.writeFile(
    path.join(OUT_DIR, `${entry.slug}.json`),
    JSON.stringify(result, null, 2),
    "utf-8",
  );
  console.log(`    OK -> ${entry.slug}.json (CC0)`);
  return true;
}

async function main(): Promise<void> {
  const seeds = await readSeed();
  if (seeds.length === 0) {
    console.log("[sync:cleveland] No seeds. Add to scripts/seeds/cleveland.json");
    return;
  }
  console.log(`[sync:cleveland] ${seeds.length} candidates`);

  let okCount = 0;
  for (const entry of seeds) {
    const ok = await syncOne(entry);
    if (ok) okCount++;
    await new Promise((r) => setTimeout(r, 500));
  }

  console.log(
    `[sync:cleveland] Done. ${okCount}/${seeds.length} synced. Output: ${OUT_DIR}`,
  );
}

main().catch((err) => {
  console.error("[sync:cleveland] FAILED:", err);
  process.exit(1);
});
