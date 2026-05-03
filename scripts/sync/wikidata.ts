/**
 * Wikidata sync — fetches structured fields for each seeded artifact.
 *
 * For each artifact with a wikidataId in scripts/seeds/artifacts.json:
 *   - Fetch labels in en/zh/ja/ko/fr/es
 *   - Fetch descriptions
 *   - Fetch claims for: P195 (collection), P217 (inventory number),
 *     P3634 (Met objectID), P3563 (Smithsonian object ID)
 *   - Save to scripts/generated/wikidata/<slug>.json
 *
 * Run: npm run sync:wikidata
 */

import fs from "node:fs/promises";
import path from "node:path";
import dns from "node:dns";
import { fileURLToPath } from "node:url";

// Force IPv4 first — many networks (esp. China) have flaky IPv6 routing to
// wikidata.org and Node's default dual-stack lookup hangs on AAAA records.
dns.setDefaultResultOrder("ipv4first");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SEEDS_PATH = path.resolve(__dirname, "../seeds/artifacts.json");
const OUT_DIR = path.resolve(__dirname, "../generated/wikidata");
const USER_AGENT =
  "ChinaHeritage/1.0 (https://chinaheritageguide.com; sync-bot)";

type Seed = { slug: string; wikidataId?: string };

interface WikidataEntity {
  id: string;
  labels?: Record<string, { language: string; value: string }>;
  descriptions?: Record<string, { language: string; value: string }>;
  claims?: Record<
    string,
    Array<{
      mainsnak?: {
        datavalue?: {
          value: unknown;
          type: string;
        };
      };
    }>
  >;
}

const LANGS = ["en", "zh", "ja", "ko", "fr", "es"];

async function fetchEntity(qid: string): Promise<WikidataEntity | null> {
  const url = `https://www.wikidata.org/wiki/Special:EntityData/${qid}.json`;
  try {
    const res = await fetch(url, { headers: { "User-Agent": USER_AGENT } });
    if (!res.ok) {
      console.warn(`  ! Wikidata ${qid}: HTTP ${res.status}`);
      return null;
    }
    const data = (await res.json()) as { entities: Record<string, WikidataEntity> };
    return data.entities[qid] ?? null;
  } catch (err) {
    console.warn(`  ! Wikidata ${qid} fetch error:`, err);
    return null;
  }
}

function extractClaim(
  entity: WikidataEntity,
  property: string,
): string | null {
  const claim = entity.claims?.[property]?.[0]?.mainsnak?.datavalue?.value;
  if (!claim) return null;
  if (typeof claim === "string") return claim;
  if (typeof claim === "object" && "id" in (claim as Record<string, unknown>))
    return (claim as { id: string }).id;
  return null;
}

async function syncOne(seed: Seed): Promise<void> {
  if (!seed.wikidataId) {
    console.log(`  - ${seed.slug}: no wikidataId, skipping`);
    return;
  }
  console.log(`  > ${seed.slug} (${seed.wikidataId})`);
  const entity = await fetchEntity(seed.wikidataId);
  if (!entity) return;

  const labels: Record<string, string> = {};
  for (const lang of LANGS) {
    const label = entity.labels?.[lang]?.value;
    if (label) labels[lang] = label;
  }

  const descriptions: Record<string, string> = {};
  for (const lang of LANGS) {
    const desc = entity.descriptions?.[lang]?.value;
    if (desc) descriptions[lang] = desc;
  }

  const result = {
    slug: seed.slug,
    wikidataId: seed.wikidataId,
    labels,
    descriptions,
    claims: {
      collection: extractClaim(entity, "P195"),
      inventoryNumber: extractClaim(entity, "P217"),
      metObjectId: extractClaim(entity, "P3634"),
      smithsonianObjectId: extractClaim(entity, "P3563"),
      coordinateLocation: extractClaim(entity, "P625"),
      material: extractClaim(entity, "P186"),
      heritageStatus: extractClaim(entity, "P1435"),
    },
    syncedAt: new Date().toISOString(),
  };

  await fs.mkdir(OUT_DIR, { recursive: true });
  await fs.writeFile(
    path.join(OUT_DIR, `${seed.slug}.json`),
    JSON.stringify(result, null, 2),
    "utf-8",
  );
  console.log(`    OK -> ${seed.slug}.json`);
}

async function main(): Promise<void> {
  console.log("[sync:wikidata] Reading seeds...");
  const raw = await fs.readFile(SEEDS_PATH, "utf-8");
  const seeds = JSON.parse(raw) as Seed[];
  console.log(`[sync:wikidata] ${seeds.length} seeds, syncing...`);

  for (const seed of seeds) {
    await syncOne(seed);
    // Be polite: 1 request per second
    await new Promise((r) => setTimeout(r, 1000));
  }

  console.log(`[sync:wikidata] Done. Output: ${OUT_DIR}`);
}

main().catch((err) => {
  console.error("[sync:wikidata] FAILED:", err);
  process.exit(1);
});
