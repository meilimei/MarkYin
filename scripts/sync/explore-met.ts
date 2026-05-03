/**
 * One-shot helper: explore Met Asian Art department for high-profile
 * Chinese objects with public-domain images. Prints top candidates.
 *
 * Met API docs: https://metmuseum.github.io/
 *   Search:  https://collectionapi.metmuseum.org/public/collection/v1/search?...
 *   Object:  https://collectionapi.metmuseum.org/public/collection/v1/objects/{id}
 *
 * No API key needed. Department 6 = Asian Art.
 */

import dns from "node:dns";
dns.setDefaultResultOrder("ipv4first");

const USER_AGENT =
  "AncientEchoes/1.0 (https://chinaheritageguide.com; sync-bot)";

const SEARCH_URL = "https://collectionapi.metmuseum.org/public/collection/v1/search";
const OBJECT_URL = "https://collectionapi.metmuseum.org/public/collection/v1/objects";

interface SearchResp {
  total: number;
  objectIDs: number[] | null;
}

interface ObjectResp {
  objectID: number;
  isPublicDomain: boolean;
  primaryImage: string;
  primaryImageSmall: string;
  title: string;
  culture: string;
  period: string;
  dynasty: string;
  reign: string;
  medium: string;
  dimensions: string;
  classification: string;
  objectName: string;
  objectDate: string;
  objectURL: string;
  department: string;
}

const QUERIES: { label: string; q: string }[] = [
  { label: "Tang horse", q: "tang dynasty horse" },
  { label: "Tang figurine", q: "tang dynasty figure" },
  { label: "Bodhisattva Tang", q: "bodhisattva tang" },
  { label: "Buddha Northern Wei", q: "buddha northern wei" },
  { label: "Yuan blue-and-white", q: "yuan blue and white" },
  { label: "Ming porcelain dragon", q: "ming dynasty dragon porcelain" },
  { label: "Shang Zhou bronze", q: "shang zhou bronze ritual vessel" },
  { label: "Song landscape", q: "song dynasty landscape painting" },
  { label: "Qing imperial", q: "qing dynasty imperial" },
  { label: "Jade Han Dynasty", q: "han dynasty jade" },
];

async function search(q: string): Promise<number[]> {
  const url =
    `${SEARCH_URL}?departmentId=6&hasImages=true&q=${encodeURIComponent(q)}`;
  const res = await fetch(url, { headers: { "User-Agent": USER_AGENT } });
  if (!res.ok) {
    console.warn(`  ! search "${q}" HTTP ${res.status}`);
    return [];
  }
  const data = (await res.json()) as SearchResp;
  return data.objectIDs ?? [];
}

async function getObject(id: number): Promise<ObjectResp | null> {
  const res = await fetch(`${OBJECT_URL}/${id}`, {
    headers: { "User-Agent": USER_AGENT },
  });
  if (!res.ok) return null;
  return (await res.json()) as ObjectResp;
}

async function main(): Promise<void> {
  console.log("Searching Met Asian Art department for Chinese objects...\n");

  const seen = new Set<number>();

  for (const { label, q } of QUERIES) {
    console.log(`=== ${label} (q="${q}") ===`);
    const ids = await search(q);
    if (ids.length === 0) {
      console.log("  (no results)");
      continue;
    }

    let printed = 0;
    for (const id of ids) {
      if (printed >= 5) break;
      if (seen.has(id)) continue;
      const obj = await getObject(id);
      await new Promise((r) => setTimeout(r, 200));
      if (!obj) continue;
      // Filter: must be Chinese culture + public domain + has image
      const culture = (obj.culture ?? "").toLowerCase();
      if (!culture.includes("china") && !culture.includes("chinese")) continue;
      if (!obj.isPublicDomain) continue;
      if (!obj.primaryImage) continue;
      seen.add(id);
      printed++;
      console.log(
        `  ${obj.objectID.toString().padEnd(7)} | ${
          (obj.objectName ?? "").padEnd(20).slice(0, 20)
        } | ${(obj.title ?? "").slice(0, 60)}`,
      );
      console.log(
        `         dynasty="${obj.dynasty}" period="${obj.period}" date="${obj.objectDate}"`,
      );
      console.log(`         medium="${(obj.medium ?? "").slice(0, 80)}"`);
      console.log(`         url=${obj.objectURL}`);
    }
    console.log("");
    await new Promise((r) => setTimeout(r, 500));
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
