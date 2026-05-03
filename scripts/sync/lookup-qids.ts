/**
 * One-shot helper: search Wikidata for each artifact's correct Q-ID.
 * Prints suggestions; you copy correct ones into seeds/artifacts.json.
 */

import dns from "node:dns";
dns.setDefaultResultOrder("ipv4first");

const USER_AGENT =
  "AncientEchoes/1.0 (https://chinaheritageguide.com; sync-bot)";

interface Candidate {
  id: string;
  label: string;
  description: string;
  url: string;
}

interface SearchResult {
  search: Array<{
    id: string;
    label?: string;
    description?: string;
    concepturi: string;
  }>;
}

async function search(term: string): Promise<Candidate[]> {
  const url =
    `https://www.wikidata.org/w/api.php?action=wbsearchentities&search=${
      encodeURIComponent(term)
    }&language=en&format=json&limit=5&origin=*`;
  const res = await fetch(url, { headers: { "User-Agent": USER_AGENT } });
  if (!res.ok) {
    console.warn(`  ! search "${term}" HTTP ${res.status}`);
    return [];
  }
  const data = (await res.json()) as SearchResult;
  return data.search.map((s) => ({
    id: s.id,
    label: s.label ?? "",
    description: s.description ?? "",
    url: s.concepturi,
  }));
}

const QUERIES: { slug: string; queries: string[] }[] = [
  {
    slug: "terracotta-warriors",
    queries: ["Terracotta Army", "兵马俑"],
  },
  {
    slug: "along-the-river-during-qingming-festival",
    queries: ["Along the River During the Qingming Festival", "清明上河图"],
  },
  {
    slug: "bronze-standing-figure-sanxingdui",
    queries: [
      "Sanxingdui bronze standing figure",
      "三星堆青铜大立人",
      "Large Standing Figure Sanxingdui",
    ],
  },
  {
    slug: "sacred-bronze-tree",
    queries: ["Sanxingdui bronze tree", "三星堆青铜神树"],
  },
  {
    slug: "simuwu-ding",
    queries: ["Houmuwu ding", "司母戊鼎", "Simuwu ding"],
  },
  {
    slug: "jade-burial-suit",
    queries: ["jade burial suit", "金缕玉衣"],
  },
  {
    slug: "bianzhong-marquis-yi",
    queries: ["Bianzhong of Marquis Yi of Zeng", "曾侯乙编钟"],
  },
  {
    slug: "sword-of-goujian",
    queries: ["Sword of Goujian", "越王勾践剑"],
  },
  {
    slug: "gold-mask-sanxingdui",
    queries: ["Sanxingdui gold mask", "三星堆金面具"],
  },
  {
    slug: "beast-head-agate-cup",
    queries: [
      "Agate cup with beast head",
      "兽首玛瑙杯",
      "Tang dynasty agate cup",
    ],
  },
  {
    slug: "da-ke-ding",
    queries: ["Da Ke ding", "大克鼎"],
  },
  {
    slug: "blue-white-porcelain-plum-vase",
    queries: ["meiping vase", "blue and white meiping", "梅瓶"],
  },
];

async function main() {
  console.log("Searching Wikidata for correct Q-IDs...\n");
  for (const { slug, queries } of QUERIES) {
    console.log(`=== ${slug} ===`);
    for (const q of queries) {
      const results = await search(q);
      if (results.length === 0) {
        console.log(`  (no results for "${q}")`);
        continue;
      }
      console.log(`  query: "${q}"`);
      for (const r of results.slice(0, 3)) {
        console.log(
          `    ${r.id}  |  ${r.label}  |  ${r.description.slice(0, 80)}`,
        );
      }
      await new Promise((r) => setTimeout(r, 400));
    }
    console.log("");
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
