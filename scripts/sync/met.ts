/**
 * Met Museum sync — two modes:
 *
 *   1. Primary (seed-driven): read `scripts/seeds/met.json` of the form
 *      [{ slug, metObjectId }, ...] and fetch each. Intended for curating a
 *      "Chinese treasures abroad" collection.
 *
 *   2. Fallback (wikidata-derived): read generated/wikidata/*.json and pick up
 *      any artifact that carried a P3634 (Met objectID) claim. Kept for
 *      future expansion when Wikidata links a Chinese-museum item to a Met
 *      equivalent.
 *
 * Writes scripts/generated/met/<slug>.json with rich metadata so downstream
 * pages can render without re-hitting the Met API.
 *
 * Run: npm run sync:met
 */

import fs from "node:fs/promises";
import path from "node:path";
import dns from "node:dns";
import { fileURLToPath } from "node:url";

dns.setDefaultResultOrder("ipv4first");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SEEDS_PATH = path.resolve(__dirname, "../seeds/met.json");
const WIKIDATA_DIR = path.resolve(__dirname, "../generated/wikidata");
const OUT_DIR = path.resolve(__dirname, "../generated/met");
const MET_API = "https://collectionapi.metmuseum.org/public/collection/v1";
const USER_AGENT =
  "AncientEchoes/1.0 (https://chinaheritageguide.com; sync-bot)";

interface MetObject {
  objectID: number;
  primaryImage: string;
  primaryImageSmall: string;
  isPublicDomain: boolean;
  title: string;
  artistDisplayName: string;
  objectName: string;
  objectDate: string;
  period: string;
  dynasty: string;
  reign: string;
  dimensions: string;
  creditLine: string;
  accessionNumber: string;
  accessionYear: string;
  medium: string;
  culture: string;
  objectURL: string;
  department: string;
  classification: string;
  additionalImages?: string[];
}

async function fetchMet(objectId: string): Promise<MetObject | null> {
  const url = `${MET_API}/objects/${objectId}`;
  try {
    const res = await fetch(url, { headers: { "User-Agent": USER_AGENT } });
    if (!res.ok) {
      console.warn(`  ! Met ${objectId}: HTTP ${res.status}`);
      return null;
    }
    return (await res.json()) as MetObject;
  } catch (err) {
    console.warn(`  ! Met ${objectId} fetch error:`, err);
    return null;
  }
}

interface SeedEntry {
  slug: string;
  metObjectId: string;
  notes?: string;
}

interface WikidataResult {
  slug: string;
  wikidataId: string;
  claims: {
    metObjectId: string | null;
  };
}

async function readSeedEntries(): Promise<SeedEntry[]> {
  try {
    const raw = await fs.readFile(SEEDS_PATH, "utf-8");
    return JSON.parse(raw) as SeedEntry[];
  } catch {
    return [];
  }
}

async function readWikidataEntries(): Promise<SeedEntry[]> {
  let files: string[];
  try {
    files = await fs.readdir(WIKIDATA_DIR);
  } catch {
    return [];
  }
  const out: SeedEntry[] = [];
  for (const file of files) {
    if (!file.endsWith(".json")) continue;
    const data = JSON.parse(
      await fs.readFile(path.join(WIKIDATA_DIR, file), "utf-8"),
    ) as WikidataResult;
    if (data.claims?.metObjectId) {
      out.push({ slug: data.slug, metObjectId: data.claims.metObjectId });
    }
  }
  return out;
}

async function syncOne(entry: SeedEntry): Promise<boolean> {
  console.log(`  > ${entry.slug} -> Met #${entry.metObjectId}`);
  const met = await fetchMet(entry.metObjectId);
  if (!met) return false;

  const result = {
    slug: entry.slug,
    metObjectId: entry.metObjectId,
    title: met.title,
    objectName: met.objectName,
    artistDisplayName: met.artistDisplayName,
    objectDate: met.objectDate,
    period: met.period,
    dynasty: met.dynasty,
    reign: met.reign,
    culture: met.culture,
    medium: met.medium,
    dimensions: met.dimensions,
    creditLine: met.creditLine,
    accessionNumber: met.accessionNumber,
    accessionYear: met.accessionYear,
    department: met.department,
    classification: met.classification,
    objectURL: met.objectURL,
    image: {
      primary: met.primaryImage,
      small: met.primaryImageSmall,
      additional: met.additionalImages ?? [],
      isPublicDomain: met.isPublicDomain,
      license: met.isPublicDomain ? "CC0" : "All Rights Reserved",
    },
    syncedAt: new Date().toISOString(),
  };

  await fs.mkdir(OUT_DIR, { recursive: true });
  await fs.writeFile(
    path.join(OUT_DIR, `${entry.slug}.json`),
    JSON.stringify(result, null, 2),
    "utf-8",
  );
  console.log(
    `    OK -> ${entry.slug}.json (${
      met.isPublicDomain ? "CC0" : "RIGHTS"
    })`,
  );
  return true;
}

async function main(): Promise<void> {
  const seedEntries = await readSeedEntries();
  const wikidataEntries = await readWikidataEntries();

  // Merge, seed wins on slug collisions
  const bySlug = new Map<string, SeedEntry>();
  for (const e of wikidataEntries) bySlug.set(e.slug, e);
  for (const e of seedEntries) bySlug.set(e.slug, e);
  const all = Array.from(bySlug.values());

  console.log(
    `[sync:met] ${seedEntries.length} seed + ${wikidataEntries.length} wikidata = ${all.length} unique`,
  );

  if (all.length === 0) {
    console.log(
      "[sync:met] Nothing to sync. Add items to scripts/seeds/met.json",
    );
    return;
  }

  let okCount = 0;
  for (const entry of all) {
    const ok = await syncOne(entry);
    if (ok) okCount++;
    await new Promise((r) => setTimeout(r, 500));
  }

  console.log(
    `[sync:met] Done. ${okCount}/${all.length} synced. Output: ${OUT_DIR}`,
  );
}

main().catch((err) => {
  console.error("[sync:met] FAILED:", err);
  process.exit(1);
});
