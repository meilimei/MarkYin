/**
 * sync-all — orchestrates: wikidata -> met -> commons.
 *
 * Each child script is run in sequence, sharing the scripts/generated/ tree.
 *
 * Run: npm run sync
 */

import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const STEPS = [
  { name: "wikidata", file: "sync/wikidata.ts" },
  { name: "met", file: "sync/met.ts" },
  { name: "commons", file: "sync/commons.ts" },
];

function run(file: string): number {
  const fullPath = path.resolve(__dirname, file);
  const result = spawnSync("npx", ["tsx", fullPath], {
    stdio: "inherit",
    shell: true,
  });
  return result.status ?? 1;
}

console.log("=".repeat(60));
console.log("sync-all: starting");
console.log("=".repeat(60));

for (const step of STEPS) {
  console.log(`\n--- step: ${step.name} ---`);
  const code = run(step.file);
  if (code !== 0) {
    console.error(`\nsync-all: step '${step.name}' failed with code ${code}`);
    console.error("(continuing to next step anyway)\n");
  }
}

console.log("\n" + "=".repeat(60));
console.log("sync-all: complete. Output in scripts/generated/");
console.log("Next: review JSON, copy useful fields into");
console.log("      src/data/artifacts.ts overrides as needed.");
console.log("=".repeat(60));
