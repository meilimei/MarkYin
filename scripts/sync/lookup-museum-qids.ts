/**
 * One-shot helper: search Wikidata for each museum's correct Q-ID.
 * Prints suggestions; you copy correct ones into seeds/museums.json.
 */

import dns from "node:dns";
dns.setDefaultResultOrder("ipv4first");

const USER_AGENT =
  "ChinaHeritage/1.0 (https://chinaheritageguide.com; sync-bot)";

interface Candidate {
  id: string;
  label: string;
  description: string;
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
  }));
}

const QUERIES: { slug: string; queries: string[] }[] = [
  {
    slug: "the-palace-museum",
    queries: ["Palace Museum Beijing", "故宫博物院", "Forbidden City museum"],
  },
  {
    slug: "sanxingdui-museum",
    queries: ["Sanxingdui Museum", "三星堆博物馆"],
  },
  {
    slug: "national-museum-of-china",
    queries: ["National Museum of China", "中国国家博物馆"],
  },
  {
    slug: "shaanxi-history-museum",
    queries: ["Shaanxi History Museum", "陕西历史博物馆"],
  },
  {
    slug: "shanghai-museum",
    queries: ["Shanghai Museum", "上海博物馆"],
  },
  {
    slug: "hubei-provincial-museum",
    queries: ["Hubei Provincial Museum", "湖北省博物馆"],
  },
  {
    slug: "terracotta-warriors-museum",
    queries: [
      "Emperor Qinshihuang's Mausoleum Site Museum",
      "Museum of the Terracotta Army",
      "秦始皇帝陵博物院",
    ],
  },
  {
    slug: "nanjing-museum",
    queries: ["Nanjing Museum", "南京博物院"],
  },
];

async function main() {
  console.log("Searching Wikidata for correct museum Q-IDs...\n");
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
