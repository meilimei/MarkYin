/**
 * Met Museum sync — fetches CC0 image and metadata for artifacts that have
 * a Met objectID (from Wikidata P3634, written by sync:wikidata).
 *
 * For each artifact with a metObjectId:
 *   - GET https://collectionapi.metmuseum.org/public/collection/v1/objects/{id}
 *   - Save: title, dynasty, medium, primaryImage URL, isPublicDomain, objectURL
 *   - Output to scripts/generated/met/<slug>.json
 *
 * Run: npm run sync:met
 *
 * NOTE: Many seeded Chinese artifacts WILL NOT have a Met record (they're in
 * Chinese museums). The script logs misses and continues. To get usable Met
 * coverage, the seeds need to include Met-collection items (e.g., Tang horses,
 * blue-and-white wares held by The Met). This script is the foundation; seed
 * expansion is a separate workstream.
 */

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
  objectDate: string;
  medium: string;
  culture: string;
  objectURL: string;
  department: string;
  classification: string;
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

interface WikidataResult {
  slug: string;
  wikidataId: string;
  claims: {
    metObjectId: string | null;
  };
}

async function main(): Promise<void> {
  console.log("[sync:met] Reading wikidata results...");
  let files: string[];
  try {
    files = await fs.readdir(WIKIDATA_DIR);
  } catch {
    console.error(
      `[sync:met] No wikidata output found at ${WIKIDATA_DIR}. Run 'npm run sync:wikidata' first.`,
    );
    process.exit(1);
  }

  const candidates: WikidataResult[] = [];
  for (const file of files) {
    if (!file.endsWith(".json")) continue;
    const data = JSON.parse(
      await fs.readFile(path.join(WIKIDATA_DIR, file), "utf-8"),
    ) as WikidataResult;
    if (data.claims?.metObjectId) candidates.push(data);
  }

  console.log(`[sync:met] ${candidates.length} candidates with Met objectID`);

  if (candidates.length === 0) {
    console.log(
      "[sync:met] No matches. (Most Chinese museum holdings are not in Met.)",
    );
    console.log(
      "[sync:met] To enable: add seeds that have known Met objectIDs.",
    );
    return;
  }

  await fs.mkdir(OUT_DIR, { recursive: true });

  for (const cand of candidates) {
    const objectId = cand.claims.metObjectId!;
    console.log(`  > ${cand.slug} -> Met #${objectId}`);
    const met = await fetchMet(objectId);
    if (!met) continue;

    const result = {
      slug: cand.slug,
      metObjectId: objectId,
      title: met.title,
      objectDate: met.objectDate,
      culture: met.culture,
      medium: met.medium,
      department: met.department,
      classification: met.classification,
      objectURL: met.objectURL,
      image: {
        primary: met.primaryImage,
        small: met.primaryImageSmall,
        isPublicDomain: met.isPublicDomain,
        license: met.isPublicDomain ? "CC0" : "All Rights Reserved",
      },
      syncedAt: new Date().toISOString(),
    };

    await fs.writeFile(
      path.join(OUT_DIR, `${cand.slug}.json`),
      JSON.stringify(result, null, 2),
      "utf-8",
    );
    console.log(
      `    OK -> ${cand.slug}.json (${met.isPublicDomain ? "CC0" : "RIGHTS"})`,
    );

    // Be polite
    await new Promise((r) => setTimeout(r, 500));
  }

  console.log(`[sync:met] Done. Output: ${OUT_DIR}`);
}

main().catch((err) => {
  console.error("[sync:met] FAILED:", err);
  process.exit(1);
});
