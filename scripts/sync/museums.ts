/**
 * Museums sync — combined Wikidata entity + Commons P18 image fetch.
 *
 * For each museum in scripts/seeds/museums.json:
 *   - Fetch Wikidata labels (en/zh/ja/ko/fr/es) and key claims
 *     (P17 country, P625 coordinates, P18 image, P856 official website)
 *   - Resolve P18 → Commons file → image URL + license + author
 *   - Save to scripts/generated/museums/<slug>.json
 *
 * Run: npm run sync:museums
 */

import fs from "node:fs/promises";
import path from "node:path";
import dns from "node:dns";
import { fileURLToPath } from "node:url";

dns.setDefaultResultOrder("ipv4first");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SEEDS_PATH = path.resolve(__dirname, "../seeds/museums.json");
const OUT_DIR = path.resolve(__dirname, "../generated/museums");
const USER_AGENT =
  "ChinaHeritage/1.0 (https://chinaheritageguide.com; sync-bot)";

const LANGS = ["en", "zh", "ja", "ko", "fr", "es"];

type Seed = { slug: string; wikidataId: string };

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

interface CommonsImageInfo {
  url: string;
  descriptionurl: string;
  extmetadata?: {
    Artist?: { value: string };
    LicenseShortName?: { value: string };
    UsageTerms?: { value: string };
  };
}

async function fetchEntity(qid: string): Promise<WikidataEntity | null> {
  const url = `https://www.wikidata.org/wiki/Special:EntityData/${qid}.json`;
  try {
    const res = await fetch(url, { headers: { "User-Agent": USER_AGENT } });
    if (!res.ok) {
      console.warn(`  ! Wikidata ${qid}: HTTP ${res.status}`);
      return null;
    }
    const data = (await res.json()) as {
      entities: Record<string, WikidataEntity>;
    };
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

async function fetchCommonsImage(
  filename: string,
): Promise<CommonsImageInfo | null> {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&titles=File:${
    encodeURIComponent(filename)
  }&prop=imageinfo&iiprop=url|extmetadata&format=json&origin=*`;
  try {
    const res = await fetch(url, { headers: { "User-Agent": USER_AGENT } });
    if (!res.ok) return null;
    const data = (await res.json()) as {
      query?: {
        pages?: Record<string, { imageinfo?: CommonsImageInfo[] }>;
      };
    };
    const pages = data.query?.pages ?? {};
    for (const page of Object.values(pages)) {
      const info = page.imageinfo?.[0];
      if (info) return info;
    }
    return null;
  } catch {
    return null;
  }
}

function stripHtml(s: string): string {
  let cleaned = s.replace(/<[^>]+>/g, "").trim();
  // Commons templates often wrap an unknown author like:
  //   "No machine-readable author provided. <Name> assumed (based on copyright claims)."
  // Extract just <Name> when present.
  const noAuthorMatch = cleaned.match(
    /No machine-readable author provided\.\s+(.+?)\s+assumed/i,
  );
  if (noAuthorMatch) cleaned = noAuthorMatch[1];
  return cleaned;
}

async function syncOne(seed: Seed): Promise<void> {
  console.log(`  > ${seed.slug} (${seed.wikidataId})`);
  const entity = await fetchEntity(seed.wikidataId);
  if (!entity) return;

  const labels: Record<string, string> = {};
  const descriptions: Record<string, string> = {};
  for (const lang of LANGS) {
    const lab = entity.labels?.[lang]?.value;
    if (lab) labels[lang] = lab;
    const desc = entity.descriptions?.[lang]?.value;
    if (desc) descriptions[lang] = desc;
  }

  const filename = extractClaim(entity, "P18");
  let image: {
    filename: string;
    url: string;
    descriptionUrl: string;
    author: string;
    license: string;
  } | null = null;

  if (filename) {
    await new Promise((r) => setTimeout(r, 300));
    const info = await fetchCommonsImage(filename);
    if (info) {
      image = {
        filename,
        url: info.url,
        descriptionUrl: info.descriptionurl,
        author: info.extmetadata?.Artist?.value
          ? stripHtml(info.extmetadata.Artist.value)
          : "Unknown",
        license:
          info.extmetadata?.LicenseShortName?.value ??
          info.extmetadata?.UsageTerms?.value ??
          "Unknown",
      };
    }
  }

  const result = {
    slug: seed.slug,
    wikidataId: seed.wikidataId,
    labels,
    descriptions,
    claims: {
      country: extractClaim(entity, "P17"),
      coordinateLocation: extractClaim(entity, "P625"),
      officialWebsite: extractClaim(entity, "P856"),
    },
    image,
    syncedAt: new Date().toISOString(),
  };

  await fs.mkdir(OUT_DIR, { recursive: true });
  await fs.writeFile(
    path.join(OUT_DIR, `${seed.slug}.json`),
    JSON.stringify(result, null, 2),
    "utf-8",
  );
  console.log(
    `    OK -> ${seed.slug}.json${image ? ` (${image.license})` : " (no image)"}`,
  );
}

async function main(): Promise<void> {
  console.log("[sync:museums] Reading seeds...");
  const raw = await fs.readFile(SEEDS_PATH, "utf-8");
  const seeds = JSON.parse(raw) as Seed[];
  console.log(`[sync:museums] ${seeds.length} seeds, syncing...`);

  for (const seed of seeds) {
    await syncOne(seed);
    await new Promise((r) => setTimeout(r, 1000));
  }

  console.log(`[sync:museums] Done. Output: ${OUT_DIR}`);
}

main().catch((err) => {
  console.error("[sync:museums] FAILED:", err);
  process.exit(1);
});
