/**
 * Cleveland Museum of Art exploration helper.
 *
 * The CMA Open Access API exposes free, deeply-tagged metadata. We hit the
 * search endpoint with a few well-targeted queries to surface plausible
 * candidates for our "Treasures Abroad" curation.
 *
 * Run: tsx scripts/sync/explore-cleveland.ts
 */

import dns from "node:dns";

dns.setDefaultResultOrder("ipv4first");

const API = "https://openaccess-api.clevelandart.org/api/artworks";
const USER_AGENT =
  "ChinaHeritage/1.0 (https://chinaheritageguide.com; sync-bot)";

interface CmaArtwork {
  id: number;
  accession_number: string;
  title: string;
  type?: string;
  technique?: string;
  culture?: string[];
  creation_date?: string;
  creators?: { description?: string }[];
  url?: string;
  images?: {
    web?: { url: string };
    print?: { url: string };
  };
  share_license_status?: string;
}

interface CmaResponse {
  data: CmaArtwork[];
  info: { total: number };
}

const QUERIES: { label: string; params: Record<string, string> }[] = [
  {
    label: "Tang ceramics",
    params: { q: "Tang dynasty", culture: "China", has_image: "1", cc0: "1", limit: "5" },
  },
  {
    label: "Song painting",
    params: { q: "Song dynasty painting", culture: "China", has_image: "1", cc0: "1", limit: "5" },
  },
  {
    label: "Ming Qing porcelain",
    params: { q: "porcelain", culture: "China", has_image: "1", cc0: "1", limit: "5" },
  },
  {
    label: "Buddhist sculpture",
    params: { q: "Buddha bodhisattva", culture: "China", has_image: "1", cc0: "1", limit: "5" },
  },
  {
    label: "Bronze ritual vessels",
    params: { q: "bronze ritual", culture: "China", has_image: "1", cc0: "1", limit: "5" },
  },
  {
    label: "Yuan blue and white",
    params: { q: "Yuan dynasty", culture: "China", has_image: "1", cc0: "1", limit: "5" },
  },
  {
    label: "Calligraphy and scrolls",
    params: { q: "handscroll", culture: "China", has_image: "1", cc0: "1", limit: "5" },
  },
];

async function main(): Promise<void> {
  for (const q of QUERIES) {
    const url = new URL(API);
    for (const [k, v] of Object.entries(q.params)) url.searchParams.set(k, v);
    console.log(`\n=== ${q.label} (${url.toString()}) ===`);
    try {
      const res = await fetch(url, { headers: { "User-Agent": USER_AGENT } });
      if (!res.ok) {
        console.warn(`  HTTP ${res.status}`);
        continue;
      }
      const data = (await res.json()) as CmaResponse;
      for (const art of data.data) {
        const title = art.title.length > 60 ? art.title.slice(0, 57) + "..." : art.title;
        const culture = (art.culture ?? []).join(", ");
        const date = art.creation_date ?? "";
        const license = art.share_license_status ?? "?";
        console.log(
          `  ${art.accession_number.padEnd(15)} | ${title.padEnd(60)} | ${culture} | ${date} | ${license}`,
        );
        console.log(`         ${art.url ?? ""}`);
      }
    } catch (err) {
      console.warn(`  fetch error:`, err);
    }
    await new Promise((r) => setTimeout(r, 400));
  }
}

main().catch((err) => {
  console.error("[explore-cleveland] FAILED:", err);
  process.exit(1);
});
