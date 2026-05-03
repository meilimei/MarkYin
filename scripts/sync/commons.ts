/**
 * Wikimedia Commons sync — fallback image source.
 *
 * For each artifact with a wikidataId but no Met match:
 *   - Wikidata P18 (image) gives a Commons filename
 *   - Query Commons API for the file's full image URL + license + author
 *   - Save to scripts/generated/commons/<slug>.json
 *
 * Run: npm run sync:commons
 */

import fs from "node:fs/promises";
import path from "node:path";
import dns from "node:dns";
import { fileURLToPath } from "node:url";

dns.setDefaultResultOrder("ipv4first");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const WIKIDATA_DIR = path.resolve(__dirname, "../generated/wikidata");
const MET_DIR = path.resolve(__dirname, "../generated/met");
const OUT_DIR = path.resolve(__dirname, "../generated/commons");
const USER_AGENT =
  "ChinaHeritage/1.0 (https://chinaheritageguide.com; sync-bot)";

interface CommonsImageInfo {
  url: string;
  descriptionurl: string;
  extmetadata?: {
    Artist?: { value: string };
    LicenseShortName?: { value: string };
    UsageTerms?: { value: string };
  };
}

async function fetchEntityImage(qid: string): Promise<string | null> {
  // Use Wikidata API to get P18 (image) claim
  const url = `https://www.wikidata.org/w/api.php?action=wbgetentities&ids=${qid}&props=claims&format=json&origin=*`;
  try {
    const res = await fetch(url, { headers: { "User-Agent": USER_AGENT } });
    if (!res.ok) return null;
    const data = (await res.json()) as {
      entities: Record<
        string,
        {
          claims?: {
            P18?: Array<{ mainsnak?: { datavalue?: { value?: string } } }>;
          };
        }
      >;
    };
    const filename = data.entities[qid]?.claims?.P18?.[0]?.mainsnak?.datavalue
      ?.value;
    return filename ?? null;
  } catch {
    return null;
  }
}

async function fetchCommonsImage(
  filename: string,
): Promise<CommonsImageInfo | null> {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&titles=File:${encodeURIComponent(
    filename,
  )}&prop=imageinfo&iiprop=url|extmetadata&format=json&origin=*`;
  try {
    const res = await fetch(url, { headers: { "User-Agent": USER_AGENT } });
    if (!res.ok) return null;
    const data = (await res.json()) as {
      query?: {
        pages?: Record<
          string,
          { imageinfo?: CommonsImageInfo[] }
        >;
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
  const noAuthorMatch = cleaned.match(
    /No machine-readable author provided\.\s+(.+?)\s+assumed/i,
  );
  if (noAuthorMatch) cleaned = noAuthorMatch[1];
  return cleaned;
}

interface WikidataResult {
  slug: string;
  wikidataId: string;
}

async function main(): Promise<void> {
  console.log("[sync:commons] Reading wikidata results...");
  let files: string[];
  try {
    files = await fs.readdir(WIKIDATA_DIR);
  } catch {
    console.error(
      `[sync:commons] No wikidata output. Run 'npm run sync:wikidata' first.`,
    );
    process.exit(1);
  }

  // Build set of slugs already covered by Met
  const metCovered = new Set<string>();
  try {
    const metFiles = await fs.readdir(MET_DIR);
    for (const f of metFiles)
      if (f.endsWith(".json")) metCovered.add(f.replace(".json", ""));
  } catch {
    // No Met output yet — that's fine, fall through
  }

  await fs.mkdir(OUT_DIR, { recursive: true });

  for (const file of files) {
    if (!file.endsWith(".json")) continue;
    const data = JSON.parse(
      await fs.readFile(path.join(WIKIDATA_DIR, file), "utf-8"),
    ) as WikidataResult;

    if (metCovered.has(data.slug)) {
      console.log(`  - ${data.slug}: covered by Met, skipping Commons`);
      continue;
    }

    console.log(`  > ${data.slug} (${data.wikidataId})`);
    const filename = await fetchEntityImage(data.wikidataId);
    if (!filename) {
      console.log(`    no P18 image on Wikidata`);
      continue;
    }

    const info = await fetchCommonsImage(filename);
    if (!info) {
      console.log(`    Commons fetch failed for ${filename}`);
      continue;
    }

    const result = {
      slug: data.slug,
      wikidataId: data.wikidataId,
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
      syncedAt: new Date().toISOString(),
    };

    await fs.writeFile(
      path.join(OUT_DIR, `${data.slug}.json`),
      JSON.stringify(result, null, 2),
      "utf-8",
    );
    console.log(`    OK -> ${data.slug}.json (${result.license})`);

    await new Promise((r) => setTimeout(r, 1000));
  }

  console.log(`[sync:commons] Done. Output: ${OUT_DIR}`);
}

main().catch((err) => {
  console.error("[sync:commons] FAILED:", err);
  process.exit(1);
});
