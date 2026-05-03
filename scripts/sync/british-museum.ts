/**
 * British Museum sync — the BM has no clean public REST API, so we route
 * imagery through Wikimedia Commons (PD/CC images of BM-held items) and
 * link the BM record via its Wikidata Q-ID.
 *
 * Reads scripts/seeds/british-museum.json:
 *   [{ slug, wikidataQid, commonsFile, bmAccession?, bmUrl?, notes? }, ...]
 *
 * For each entry:
 *   - Fetch Wikimedia Commons file metadata (URL, license, author).
 *   - Optionally fetch Wikidata label / English description.
 *   - Save to scripts/generated/british-museum/<slug>.json so the image
 *     downloader and the listing page can consume it.
 *
 * Run: npm run sync:british-museum
 */

import fs from "node:fs/promises";
import path from "node:path";
import dns from "node:dns";
import { fileURLToPath } from "node:url";

dns.setDefaultResultOrder("ipv4first");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SEEDS_PATH = path.resolve(__dirname, "../seeds/british-museum.json");
const OUT_DIR = path.resolve(__dirname, "../generated/british-museum");
const COMMONS_API = "https://commons.wikimedia.org/w/api.php";
const WIKIDATA_API = "https://www.wikidata.org/w/api.php";
const USER_AGENT =
  "ChinaHeritage/1.0 (https://chinaheritageguide.com; sync-bot)";

interface SeedEntry {
  slug: string;
  wikidataQid?: string;
  commonsFile?: string;
  bmAccession?: string;
  bmUrl?: string;
  notes?: string;
}

interface CommonsImageInfo {
  url?: string;
  thumburl?: string;
  descriptionurl?: string;
  extmetadata?: {
    LicenseShortName?: { value: string };
    Artist?: { value: string };
    ImageDescription?: { value: string };
    DateTime?: { value: string };
    Credit?: { value: string };
  };
}

async function fetchCommonsImage(
  fileName: string,
): Promise<CommonsImageInfo | null> {
  const url = new URL(COMMONS_API);
  url.searchParams.set("action", "query");
  url.searchParams.set("titles", `File:${fileName}`);
  url.searchParams.set("prop", "imageinfo");
  url.searchParams.set("iiprop", "url|extmetadata");
  url.searchParams.set("iiurlwidth", "1600");
  url.searchParams.set("format", "json");
  url.searchParams.set("origin", "*");

  try {
    const res = await fetch(url, { headers: { "User-Agent": USER_AGENT } });
    if (!res.ok) {
      console.warn(`  ! Commons ${fileName}: HTTP ${res.status}`);
      return null;
    }
    const data = (await res.json()) as {
      query?: { pages?: Record<string, { imageinfo?: CommonsImageInfo[] }> };
    };
    const pages = data.query?.pages ?? {};
    const first = Object.values(pages)[0];
    return first?.imageinfo?.[0] ?? null;
  } catch (err) {
    console.warn(`  ! Commons ${fileName} fetch error:`, err);
    return null;
  }
}

interface WikidataLite {
  label?: string;
  description?: string;
  imageFile?: string; // P18
}

async function fetchWikidataLite(qid: string): Promise<WikidataLite> {
  const url = new URL(WIKIDATA_API);
  url.searchParams.set("action", "wbgetentities");
  url.searchParams.set("ids", qid);
  url.searchParams.set("props", "labels|descriptions|claims");
  url.searchParams.set("languages", "en");
  url.searchParams.set("format", "json");
  url.searchParams.set("origin", "*");
  try {
    const res = await fetch(url, { headers: { "User-Agent": USER_AGENT } });
    if (!res.ok) return {};
    const data = (await res.json()) as {
      entities?: Record<
        string,
        {
          labels?: { en?: { value: string } };
          descriptions?: { en?: { value: string } };
          claims?: {
            P18?: Array<{ mainsnak?: { datavalue?: { value?: string } } }>;
          };
        }
      >;
    };
    const ent = data.entities?.[qid];
    const imageFile = ent?.claims?.P18?.[0]?.mainsnak?.datavalue?.value;
    return {
      label: ent?.labels?.en?.value,
      description: ent?.descriptions?.en?.value,
      imageFile: typeof imageFile === "string" ? imageFile : undefined,
    };
  } catch {
    return {};
  }
}

async function readSeed(): Promise<SeedEntry[]> {
  try {
    return JSON.parse(await fs.readFile(SEEDS_PATH, "utf-8")) as SeedEntry[];
  } catch {
    return [];
  }
}

function stripHtml(s?: string): string {
  if (!s) return "";
  return s.replace(/<[^>]+>/g, "").trim();
}

async function syncOne(entry: SeedEntry): Promise<boolean> {
  console.log(
    `  > ${entry.slug} (${entry.commonsFile ?? `P18 via ${entry.wikidataQid ?? "—"}`})`,
  );

  const wd: WikidataLite = entry.wikidataQid
    ? await fetchWikidataLite(entry.wikidataQid)
    : {};

  // Try seed commonsFile first, then Wikidata P18 fallback.
  let file = entry.commonsFile;
  let img = file ? await fetchCommonsImage(file) : null;
  if (!img && wd.imageFile) {
    file = wd.imageFile;
    console.log(`    (fallback via Wikidata P18 -> ${file})`);
    img = await fetchCommonsImage(file);
  }
  if (!img || !file) {
    console.warn(`    ! No image resolved for ${entry.slug}`);
    return false;
  }

  const result = {
    slug: entry.slug,
    wikidataQid: entry.wikidataQid,
    bmAccession: entry.bmAccession,
    bmUrl:
      entry.bmUrl ??
      (entry.bmAccession
        ? `https://www.britishmuseum.org/collection/object/${entry.bmAccession}`
        : undefined),
    title: wd.label,
    description: wd.description,
    image: {
      commonsFile: file,
      url: img.url,
      descriptionUrl: img.descriptionurl,
      author: stripHtml(img.extmetadata?.Artist?.value) || undefined,
      credit: stripHtml(img.extmetadata?.Credit?.value) || undefined,
      license: img.extmetadata?.LicenseShortName?.value ?? "Unknown",
    },
    syncedAt: new Date().toISOString(),
  };

  await fs.mkdir(OUT_DIR, { recursive: true });
  await fs.writeFile(
    path.join(OUT_DIR, `${entry.slug}.json`),
    JSON.stringify(result, null, 2),
    "utf-8",
  );
  console.log(`    OK -> ${entry.slug}.json (${result.image.license})`);
  return true;
}

async function main(): Promise<void> {
  const seeds = await readSeed();
  if (seeds.length === 0) {
    console.log(
      "[sync:british-museum] No seeds. Add to scripts/seeds/british-museum.json",
    );
    return;
  }
  console.log(`[sync:british-museum] ${seeds.length} candidates`);

  let okCount = 0;
  for (const entry of seeds) {
    const ok = await syncOne(entry);
    if (ok) okCount++;
    await new Promise((r) => setTimeout(r, 400));
  }

  console.log(
    `[sync:british-museum] Done. ${okCount}/${seeds.length} synced. Output: ${OUT_DIR}`,
  );
}

main().catch((err) => {
  console.error("[sync:british-museum] FAILED:", err);
  process.exit(1);
});
