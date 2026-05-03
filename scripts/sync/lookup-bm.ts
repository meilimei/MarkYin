/**
 * Helper: look up Wikidata candidates + their P18 images for given queries.
 * Used to find correct Q-IDs for the British Museum seed file.
 * Run: npx tsx scripts/sync/lookup-bm.ts
 */
import dns from "node:dns";
dns.setDefaultResultOrder("ipv4first");

const USER_AGENT =
  "ChinaHeritage/1.0 (https://chinaheritageguide.com; sync-bot)";

const QUERIES = [
  "Admonitions Scroll",
  "Admonitions of the Instructress",
  "Gu Kaizhi Admonitions",
  "Diamond Sutra 868",
  "Liu Tingxun",
  "Yixian luohans",
];

interface SearchHit {
  id: string;
  label?: string;
  description?: string;
}

async function search(q: string): Promise<SearchHit[]> {
  const url = new URL("https://www.wikidata.org/w/api.php");
  url.searchParams.set("action", "wbsearchentities");
  url.searchParams.set("search", q);
  url.searchParams.set("language", "en");
  url.searchParams.set("format", "json");
  url.searchParams.set("limit", "5");
  url.searchParams.set("origin", "*");
  const res = await fetch(url, { headers: { "User-Agent": USER_AGENT } });
  const data = (await res.json()) as { search?: SearchHit[] };
  return data.search ?? [];
}

async function getP18(qid: string): Promise<string | undefined> {
  const url = new URL("https://www.wikidata.org/w/api.php");
  url.searchParams.set("action", "wbgetentities");
  url.searchParams.set("ids", qid);
  url.searchParams.set("props", "claims|labels|descriptions");
  url.searchParams.set("languages", "en");
  url.searchParams.set("format", "json");
  url.searchParams.set("origin", "*");
  const res = await fetch(url, { headers: { "User-Agent": USER_AGENT } });
  const data = (await res.json()) as {
    entities?: Record<
      string,
      {
        claims?: {
          P18?: Array<{ mainsnak?: { datavalue?: { value?: string } } }>;
        };
      }
    >;
  };
  const img = data.entities?.[qid]?.claims?.P18?.[0]?.mainsnak?.datavalue
    ?.value;
  return typeof img === "string" ? img : undefined;
}

async function main(): Promise<void> {
  for (const q of QUERIES) {
    console.log(`\n== "${q}" ==`);
    const hits = await search(q);
    for (const h of hits) {
      const img = await getP18(h.id);
      console.log(
        `  ${h.id} ${h.label ?? ""} — ${h.description ?? ""}${img ? ` [P18: ${img}]` : ""}`,
      );
      await new Promise((r) => setTimeout(r, 250));
    }
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
