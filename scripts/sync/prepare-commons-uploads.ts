/**
 * Prepare Wikimedia Commons upload payloads for our CC0 / Public-Domain
 * artifact images.
 *
 * Why prepare, not auto-upload?
 *   Wikimedia Commons reviews each upload manually for licence accuracy,
 *   filename quality, and duplicate detection. A bot uploading 28 files in
 *   a row without prior community trust will be reverted and possibly
 *   blocked. The right pattern is:
 *     1. This script generates a per-file `.wikitext` + a manifest of
 *        candidate uploads, all human-readable.
 *     2. You upload the first 2–3 manually via Commons Upload Wizard
 *        (https://commons.wikimedia.org/wiki/Special:UploadWizard) using
 *        the generated wikitext.
 *     3. After your account has a few accepted uploads, you can wire
 *        in API auto-upload if desired (see COMMONS_UPLOAD.md).
 *
 * What this script does:
 *   - Reads scripts/generated/met/*.json and scripts/generated/cleveland/*.json
 *   - Filters to license === "CC0" (only safe-to-upload class)
 *   - Skips british-museum/* (those images already came from Commons)
 *   - For each candidate writes:
 *       scripts/generated/commons-uploads/<slug>.wikitext   ← paste into Upload Wizard
 *       scripts/generated/commons-uploads/<slug>.meta.json  ← human-readable metadata
 *   - Writes scripts/generated/commons-uploads/_manifest.json with the full list.
 */

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const GENERATED_ROOT = path.resolve(__dirname, "../generated");
const MET_DIR = path.join(GENERATED_ROOT, "met");
const CMA_DIR = path.join(GENERATED_ROOT, "cleveland");
const OUT_DIR = path.join(GENERATED_ROOT, "commons-uploads");

interface MetRecord {
  slug: string;
  metObjectId: string;
  title: string;
  artistDisplayName: string;
  objectDate: string;
  period: string;
  culture: string;
  medium: string;
  dimensions: string;
  creditLine: string;
  accessionNumber: string;
  department: string;
  classification: string;
  objectURL: string;
  image: { primary: string; license: string; isPublicDomain: boolean };
}

interface CmaCreator {
  description: string;
  role?: string;
}

interface CmaRecord {
  slug: string;
  accessionNumber: string;
  title: string;
  type: string;
  technique: string;
  culture: string[];
  creationDate: string;
  creators: CmaCreator[];
  url: string;
  measurements: string;
  description: string;
  department: string;
  collection: string;
  image: { full: string; print: string; web: string; license: string };
}

interface UploadCandidate {
  slug: string;
  source: "met" | "cleveland";
  proposedFilename: string;
  sourceImageUrl: string;
  sourceRecordUrl: string;
  license: string;
  wikitext: string;
}

async function readJsonDir<T>(dir: string): Promise<T[]> {
  let entries: string[];
  try {
    entries = await fs.readdir(dir);
  } catch {
    return [];
  }
  const out: T[] = [];
  for (const name of entries) {
    if (!name.endsWith(".json")) continue;
    const full = path.join(dir, name);
    const txt = await fs.readFile(full, "utf-8");
    out.push(JSON.parse(txt) as T);
  }
  return out;
}

/**
 * Sanitise a string for use in a Commons filename. Commons forbids:
 *   # < > [ ] { } | : / \ * ? " ' ~
 * and treats consecutive whitespace as a single space.
 */
function sanitiseFilename(s: string): string {
  return s
    .replace(/[#<>[\]{}|:\/\\*?"'~]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function metToCandidate(rec: MetRecord): UploadCandidate | null {
  if (!rec.image.isPublicDomain || rec.image.license !== "CC0") return null;
  if (!rec.image.primary) return null;

  // Filename style: "<Title>, <objectDate or period>, Met <accession>.jpg"
  const dateBit = rec.objectDate || rec.period || "";
  const namePieces = [
    rec.title,
    dateBit,
    `Met ${rec.accessionNumber}`,
  ].filter(Boolean);
  const filename = `${sanitiseFilename(namePieces.join(", "))}.jpg`;

  const description = [
    rec.title,
    rec.artistDisplayName ? `by ${rec.artistDisplayName}` : null,
    dateBit,
    rec.culture,
    rec.medium,
    rec.dimensions,
  ]
    .filter(Boolean)
    .join(". ");

  const wikitext = `=={{int:filedesc}}==
{{Artwork
 |artist             = ${rec.artistDisplayName || "Unknown / unattributed"}
 |title              = {{en|${rec.title}}}
 |description        = {{en|${escapeWikitext(description)}}}
 |date               = ${rec.objectDate || rec.period || ""}
 |medium             = {{en|${escapeWikitext(rec.medium)}}}
 |dimensions         = ${escapeWikitext(rec.dimensions)}
 |institution        = {{Institution:Metropolitan Museum of Art}}
 |department         = ${rec.department}
 |accession number   = ${rec.accessionNumber}
 |credit line        = {{en|${escapeWikitext(rec.creditLine)}}}
 |source             = ${rec.objectURL}
 |permission         =
 |other_versions     =
}}

=={{int:license-header}}==
{{cc-zero}}
{{Metropolitan Museum of Art Open Access}}

[[Category:${rec.classification || "Chinese art"}]]
[[Category:Chinese art in the Metropolitan Museum of Art]]
`;

  return {
    slug: rec.slug,
    source: "met",
    proposedFilename: filename,
    sourceImageUrl: rec.image.primary,
    sourceRecordUrl: rec.objectURL,
    license: rec.image.license,
    wikitext,
  };
}

function cmaToCandidate(rec: CmaRecord): UploadCandidate | null {
  if (rec.image.license !== "CC0") return null;
  if (!rec.image.full && !rec.image.print) return null;

  const sourceImage = rec.image.full || rec.image.print;
  const artist = rec.creators?.find((c) => c.role === "artist")?.description;
  const namePieces = [
    rec.title,
    rec.creationDate,
    `CMA ${rec.accessionNumber}`,
  ].filter(Boolean);
  const filename = `${sanitiseFilename(namePieces.join(", "))}.jpg`;

  const description = [
    rec.title,
    artist ? `by ${artist}` : null,
    rec.creationDate,
    rec.culture?.[0],
    rec.technique,
    rec.measurements,
  ]
    .filter(Boolean)
    .join(". ");

  const cleanedHtml = stripHtml(rec.description);

  const wikitext = `=={{int:filedesc}}==
{{Artwork
 |artist             = ${artist || "Unknown / unattributed"}
 |title              = {{en|${rec.title}}}
 |description        = {{en|${escapeWikitext(description)}${
   cleanedHtml ? `<br/>${escapeWikitext(cleanedHtml)}` : ""
 }}}
 |date               = ${rec.creationDate}
 |medium             = {{en|${escapeWikitext(rec.technique)}}}
 |dimensions         = ${escapeWikitext(rec.measurements)}
 |institution        = {{Institution:Cleveland Museum of Art}}
 |department         = ${rec.department}
 |accession number   = ${rec.accessionNumber}
 |source             = ${rec.url}
 |permission         =
 |other_versions     =
}}

=={{int:license-header}}==
{{cc-zero}}
{{Cleveland Museum of Art Open Access}}

[[Category:Chinese art in the Cleveland Museum of Art]]
`;

  return {
    slug: rec.slug,
    source: "cleveland",
    proposedFilename: filename,
    sourceImageUrl: sourceImage,
    sourceRecordUrl: rec.url,
    license: rec.image.license,
    wikitext,
  };
}

function escapeWikitext(s: string | undefined | null): string {
  if (!s) return "";
  return s
    .replace(/\|/g, "&#124;")
    .replace(/\{\{/g, "&#123;&#123;")
    .replace(/\}\}/g, "&#125;&#125;");
}

function stripHtml(s: string | undefined | null): string {
  if (!s) return "";
  return s
    .replace(/<br\s*\/?\s*>/gi, " ")
    .replace(/<\/?[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

async function main() {
  await fs.mkdir(OUT_DIR, { recursive: true });

  const met = await readJsonDir<MetRecord>(MET_DIR);
  const cma = await readJsonDir<CmaRecord>(CMA_DIR);

  const candidates: UploadCandidate[] = [];

  for (const rec of met) {
    const c = metToCandidate(rec);
    if (c) candidates.push(c);
  }
  for (const rec of cma) {
    const c = cmaToCandidate(rec);
    if (c) candidates.push(c);
  }

  candidates.sort((a, b) => a.slug.localeCompare(b.slug));

  // Write per-candidate wikitext + meta.
  for (const c of candidates) {
    await fs.writeFile(
      path.join(OUT_DIR, `${c.slug}.wikitext`),
      c.wikitext,
      "utf-8",
    );
    await fs.writeFile(
      path.join(OUT_DIR, `${c.slug}.meta.json`),
      JSON.stringify(
        {
          slug: c.slug,
          source: c.source,
          proposedFilename: c.proposedFilename,
          sourceImageUrl: c.sourceImageUrl,
          sourceRecordUrl: c.sourceRecordUrl,
          license: c.license,
        },
        null,
        2,
      ),
      "utf-8",
    );
  }

  // Manifest.
  await fs.writeFile(
    path.join(OUT_DIR, "_manifest.json"),
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        count: candidates.length,
        items: candidates.map((c) => ({
          slug: c.slug,
          source: c.source,
          proposedFilename: c.proposedFilename,
          sourceRecordUrl: c.sourceRecordUrl,
        })),
      },
      null,
      2,
    ),
    "utf-8",
  );

  console.log(
    `[prepare-commons-uploads] ${candidates.length} candidate(s) prepared in ${OUT_DIR}`,
  );
  console.log(
    "  Met:        " + candidates.filter((c) => c.source === "met").length,
  );
  console.log(
    "  Cleveland:  " + candidates.filter((c) => c.source === "cleveland").length,
  );
  console.log("");
  console.log(
    "Next step: open Commons Upload Wizard, paste each <slug>.wikitext,",
  );
  console.log("upload the corresponding image, review filename, publish.");
  console.log("Full guide: scripts/COMMONS_UPLOAD.md");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
