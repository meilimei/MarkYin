# Sync Scripts

Trusted-source sync pipeline for AncientEchoes. Pulls structured data from
Wikidata + The Met API + Wikimedia Commons into `scripts/generated/`. Output is
**read-only reference data** — manual review still decides what lands in the
canonical content under `src/data/`.

## Quick start

```bash
npm install        # ensure tsx is installed
npm run sync       # run all steps in sequence
```

Or per step:

```bash
npm run sync:wikidata    # writes scripts/generated/wikidata/<slug>.json
npm run sync:met         # writes scripts/generated/met/<slug>.json
npm run sync:commons     # writes scripts/generated/commons/<slug>.json
```

## How it works

1. **`scripts/seeds/artifacts.json`** — the entry list. Each seed has a
   `slug` and optional `wikidataId`. Add new artifacts here.

2. **`scripts/sync/wikidata.ts`** — for each seed with a `wikidataId`:
   - Fetches multilingual labels (en/zh/ja/ko/fr/es)
   - Extracts P195 (collection), P217 (inventory number), P3634 (Met
     objectID), P3563 (Smithsonian object ID), P186 (material), P625
     (coordinates), P1435 (heritage status)

3. **`scripts/sync/met.ts`** — for each seed where Wikidata returned a Met
   `objectID` (P3634):
   - Fetches the Met collection record
   - Captures CC0 status, primary image URL, museum object URL
   - Most Chinese-museum artifacts WILL NOT have Met records — that's
     expected. Misses are logged.

4. **`scripts/sync/commons.ts`** — fallback image source:
   - Reads Wikidata P18 (image) for slugs not covered by Met
   - Resolves the Commons file's full URL + license + author

## What sync does NOT do

- **Does not modify `src/data/artifacts.ts` automatically.** Sync output is
  reference data. Curated content (story, funFacts, significance) stays
  hand-written. To use sync output, manually copy fields like `imageCredit`
  or new `externalCollections` entries into the relevant artifact.
- **Does not scrape Chinese museums.** Future `sync/cn-museums.ts` is a
  scaffold only.
- **Does not download images to `public/`.** The current pipeline records
  URLs and licenses; image downloading is a future enhancement to add CDN
  caching and offline reliability.

## Image source priority (when adopting sync output)

1. Met / Smithsonian / Cleveland CC0 (commercial use OK)
2. British Museum
3. Wikimedia Commons Public Domain
4. Wikimedia Commons CC-BY-SA (with author + license caption on page)
5. **Never use:** Chinese museum official photos (©), random web scrapes

## Adding new seeds

1. Add to `scripts/seeds/artifacts.json`:
   ```json
   { "slug": "new-artifact-slug", "wikidataId": "Q12345" }
   ```
2. Run `npm run sync`.
3. Inspect `scripts/generated/wikidata/new-artifact-slug.json`.
4. Manually port useful fields into `src/data/artifacts.ts` (with the
   slug already added there as a curated entry).

## Troubleshooting

- **Wikidata 404**: double-check the Q-ID exists.
- **Met no match**: most Chinese artifacts are not in Met's collection.
  This is expected; the Wikidata-to-Met linkage exists for shared items
  only.
- **Rate limits**: scripts sleep 0.5–1s between calls. Run on stable
  network. Wikidata occasionally returns 429; just re-run.

## Future workstreams

- `sync/smithsonian.ts` — uses Wikidata P3563
- `sync/cleveland.ts` — Cleveland Museum of Art Open Access
- `sync/british-museum.ts`
- `sync/cn-museums.ts` — official Chinese museum URLs only (facts, not
  images), respecting robots.txt
- Image downloader to `public/images/artifacts/` with content-addressed
  filenames
- GitHub Action to run sync weekly and open a PR with the diff
