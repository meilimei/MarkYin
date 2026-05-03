/**
 * Image downloader — pulls all Commons-licensed photos to public/images
 * so the site can self-host them via Netlify's CDN.
 *
 * Reads:
 *   - scripts/generated/commons/<slug>.json   (artifact images)
 *   - scripts/generated/museums/<slug>.json   (museum images)
 *
 * Writes:
 *   - public/images/artifacts/<slug>.<ext>
 *   - public/images/museums/<slug>.<ext>
 *   - public/images/manifest.json   (slug → local path + credit)
 *
 * Idempotent: skips files that already exist on disk.
 *
 * Run: npm run sync:download-images
 */

import fs from "node:fs/promises";
import path from "node:path";
import dns from "node:dns";
import { fileURLToPath } from "node:url";

dns.setDefaultResultOrder("ipv4first");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const COMMONS_DIR = path.resolve(__dirname, "../generated/commons");
const MUSEUMS_DIR = path.resolve(__dirname, "../generated/museums");
const PUBLIC_IMG_DIR = path.resolve(__dirname, "../../public/images");
const ARTIFACT_OUT = path.join(PUBLIC_IMG_DIR, "artifacts");
const MUSEUM_OUT = path.join(PUBLIC_IMG_DIR, "museums");
const MANIFEST_PATH = path.join(PUBLIC_IMG_DIR, "manifest.json");
const USER_AGENT =
  "AncientEchoes/1.0 (https://chinaheritageguide.com; sync-bot)";

interface CommonsArtifactJson {
  slug: string;
  url: string;
  descriptionUrl?: string;
  author?: string;
  license?: string;
}

interface MuseumJson {
  slug: string;
  image?: {
    url: string;
    descriptionUrl?: string;
    author?: string;
    license?: string;
  } | null;
}

interface ManifestEntry {
  slug: string;
  kind: "artifact" | "museum";
  localPath: string;
  remoteUrl: string;
  descriptionUrl?: string;
  author?: string;
  license?: string;
}

function pickExtension(remoteUrl: string): string {
  const url = new URL(remoteUrl);
  const ext = path.extname(url.pathname).toLowerCase();
  if (!ext) return ".jpg";
  // Normalize uppercase JPG to .jpg for cleaner URLs
  if (ext === ".jpg" || ext === ".jpeg") return ".jpg";
  if (ext === ".png") return ".png";
  if (ext === ".gif") return ".gif";
  if (ext === ".webp") return ".webp";
  if (ext === ".svg") return ".svg";
  return ".jpg";
}

async function fileExists(p: string): Promise<boolean> {
  try {
    await fs.stat(p);
    return true;
  } catch {
    return false;
  }
}

const THUMB_WIDTH = 1600;

/**
 * Convert a Commons original-image URL to a thumbnail URL of the requested
 * width. Wikimedia URL shape:
 *   https://upload.wikimedia.org/wikipedia/commons/<a>/<ab>/Filename.jpg
 *   https://upload.wikimedia.org/wikipedia/commons/thumb/<a>/<ab>/Filename.jpg/<W>px-Filename.jpg
 * We don't upscale: if the original is smaller than `width`, Commons just
 * returns the original.
 */
function toThumbnailUrl(originalUrl: string, width: number): string {
  const clean = originalUrl.split("?")[0];
  const marker = "/wikipedia/commons/";
  const idx = clean.indexOf(marker);
  if (idx === -1) return clean;
  const base = clean.slice(0, idx + marker.length);
  const tail = clean.slice(idx + marker.length); // <a>/<ab>/Filename.ext
  const segs = tail.split("/");
  if (segs.length !== 3) return clean;
  const [a, ab, filename] = segs;
  return `${base}thumb/${a}/${ab}/${filename}/${width}px-${filename}`;
}

async function downloadOne(
  remoteUrl: string,
  destPath: string,
): Promise<boolean> {
  if (await fileExists(destPath)) {
    console.log(`    skip (exists): ${path.basename(destPath)}`);
    return true;
  }
  const thumbUrl = toThumbnailUrl(remoteUrl, THUMB_WIDTH);
  const res = await fetch(thumbUrl, { headers: { "User-Agent": USER_AGENT } });
  if (!res.ok) {
    console.warn(`    ! HTTP ${res.status} for ${thumbUrl}`);
    return false;
  }
  const buf = Buffer.from(await res.arrayBuffer());
  await fs.mkdir(path.dirname(destPath), { recursive: true });
  await fs.writeFile(destPath, buf);
  const sizeKb = (buf.length / 1024).toFixed(0);
  console.log(`    OK: ${path.basename(destPath)} (${sizeKb} KB)`);
  return true;
}

async function processCommonsArtifacts(): Promise<ManifestEntry[]> {
  const entries: ManifestEntry[] = [];
  let files: string[];
  try {
    files = await fs.readdir(COMMONS_DIR);
  } catch {
    console.warn(
      `[download-images] No commons output dir; run 'npm run sync:commons' first.`,
    );
    return entries;
  }

  for (const file of files) {
    if (!file.endsWith(".json")) continue;
    const data = JSON.parse(
      await fs.readFile(path.join(COMMONS_DIR, file), "utf-8"),
    ) as CommonsArtifactJson;
    if (!data.url) continue;
    console.log(`  > artifact: ${data.slug}`);
    const ext = pickExtension(data.url);
    const fileName = `${data.slug}${ext}`;
    const destPath = path.join(ARTIFACT_OUT, fileName);
    const ok = await downloadOne(data.url, destPath);
    if (!ok) continue;
    entries.push({
      slug: data.slug,
      kind: "artifact",
      localPath: `/images/artifacts/${fileName}`,
      remoteUrl: data.url.split("?")[0],
      descriptionUrl: data.descriptionUrl,
      author: data.author,
      license: data.license,
    });
    await new Promise((r) => setTimeout(r, 200));
  }
  return entries;
}

async function processMuseums(): Promise<ManifestEntry[]> {
  const entries: ManifestEntry[] = [];
  let files: string[];
  try {
    files = await fs.readdir(MUSEUMS_DIR);
  } catch {
    console.warn(
      `[download-images] No museums output dir; run 'npm run sync:museums' first.`,
    );
    return entries;
  }

  for (const file of files) {
    if (!file.endsWith(".json")) continue;
    const data = JSON.parse(
      await fs.readFile(path.join(MUSEUMS_DIR, file), "utf-8"),
    ) as MuseumJson;
    if (!data.image?.url) {
      console.log(`  - museum: ${data.slug} (no image, skip)`);
      continue;
    }
    console.log(`  > museum: ${data.slug}`);
    const ext = pickExtension(data.image.url);
    const fileName = `${data.slug}${ext}`;
    const destPath = path.join(MUSEUM_OUT, fileName);
    const ok = await downloadOne(data.image.url, destPath);
    if (!ok) continue;
    entries.push({
      slug: data.slug,
      kind: "museum",
      localPath: `/images/museums/${fileName}`,
      remoteUrl: data.image.url.split("?")[0],
      descriptionUrl: data.image.descriptionUrl,
      author: data.image.author,
      license: data.image.license,
    });
    await new Promise((r) => setTimeout(r, 200));
  }
  return entries;
}

async function main() {
  console.log("[download-images] Starting...");
  const artifacts = await processCommonsArtifacts();
  const museums = await processMuseums();
  const manifest = [...artifacts, ...museums];

  await fs.mkdir(PUBLIC_IMG_DIR, { recursive: true });
  await fs.writeFile(MANIFEST_PATH, JSON.stringify(manifest, null, 2), "utf-8");

  console.log(
    `[download-images] Done. ${artifacts.length} artifacts + ${museums.length} museums. Manifest: ${MANIFEST_PATH}`,
  );
}

main().catch((err) => {
  console.error("[download-images] FAILED:", err);
  process.exit(1);
});
