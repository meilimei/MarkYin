/**
 * Helper: list Commons files matching a query (to help pick seed commonsFile).
 * Run: npx tsx scripts/sync/lookup-commons.ts
 */
import dns from "node:dns";
dns.setDefaultResultOrder("ipv4first");

const USER_AGENT =
  "ChinaHeritage/1.0 (https://chinaheritageguide.com; sync-bot)";

const QUERIES = [
  "Yixian luohan British Museum",
  "Liao luohan British Museum",
  "Amitabha Hancuicun",
  "Sui Amitabha British Museum",
  "Tang tomb figurines British Museum",
  "Liu Tingxun",
];

async function search(q: string): Promise<string[]> {
  const url = new URL("https://commons.wikimedia.org/w/api.php");
  url.searchParams.set("action", "query");
  url.searchParams.set("list", "search");
  url.searchParams.set("srsearch", `${q} filetype:bitmap`);
  url.searchParams.set("srnamespace", "6"); // File namespace
  url.searchParams.set("srlimit", "8");
  url.searchParams.set("format", "json");
  url.searchParams.set("origin", "*");
  const res = await fetch(url, { headers: { "User-Agent": USER_AGENT } });
  const data = (await res.json()) as {
    query?: { search?: Array<{ title: string }> };
  };
  return (data.query?.search ?? []).map((s) => s.title);
}

async function main(): Promise<void> {
  for (const q of QUERIES) {
    console.log(`\n== "${q}" ==`);
    const hits = await search(q);
    for (const t of hits) console.log(`  ${t}`);
    await new Promise((r) => setTimeout(r, 300));
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
