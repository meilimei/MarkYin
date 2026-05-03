# Wikimedia Commons Upload Workflow

Why we contribute images to Commons:

- **Free, permanent reverse-link** to our site from every Wikipedia article that uses the image (the file description page can link to our deep page).
- **Authority signal** — Google indexes Commons heavily. Our site appearing in image attribution gets crawled.
- **Public service** — many of these CC0 / PD images are not yet on Commons in a clean, well-described form.

This document walks the **manual review-friendly** path. Auto-upload is intentionally not enabled by default — Commons reviewers ban accounts that mass-upload without prior community trust.

---

## Step 0 — Once-only setup

1. Create a Wikimedia account: https://commons.wikimedia.org/wiki/Special:CreateAccount
2. Confirm your email.
3. Read the upload policy: https://commons.wikimedia.org/wiki/Commons:Upload
4. Optional but recommended: make 3–5 minor edits to existing Commons files to establish account history before uploading anything new.

---

## Step 1 — Generate upload candidates

```bash
npx tsx scripts/sync/prepare-commons-uploads.ts
```

This reads `scripts/generated/met/*.json` and `scripts/generated/cleveland/*.json`, filters to **CC0-licensed** records only, and writes per-file payloads to `scripts/generated/commons-uploads/`:

```
scripts/generated/commons-uploads/
  _manifest.json                          ← summary index
  <slug>.wikitext                          ← paste this into Upload Wizard
  <slug>.meta.json                         ← human-readable metadata
```

British Museum images are skipped because most of them already came from Commons.

---

## Step 2 — Manual upload (first 2–3 files)

1. Open https://commons.wikimedia.org/wiki/Special:UploadWizard
2. **Source**: For Met / Cleveland, download the original full-resolution image directly from the museum's open-access endpoint (the URL is in `<slug>.meta.json` → `sourceImageUrl`). Do NOT re-upload our resized 1600px web copy.
3. **Filename**: use the value from `proposedFilename` in `.meta.json`, or improve it. Commons prefers descriptive English filenames.
4. **Description**: paste the entire contents of `<slug>.wikitext` into the description field on the "Add information" step.
5. Add the predicted categories suggested by the wikitext, plus any others Commons suggests.
6. Verify the licence template (`{{cc-zero}}` for Met / Cleveland) is detected.
7. Publish.

After each upload, paste the new Commons file URL back into your project notes so you can later reference it from Wikipedia article body text or external-link sections.

---

## Step 3 — Add a back-link from Commons file pages

After upload, edit the Commons file description page to add an "Other versions / further reading" line under the `{{Artwork}}` template:

```wikitext
* Curated narrative: [https://chinaheritageguide.com/treasures-abroad/<slug> China Heritage]
```

This is a soft link, not a hard reverse-link, but it appears on every Wikipedia article that uses the image. That is the actual SEO mechanism.

---

## Step 4 — Use the new Commons file in Wikipedia

For each artifact that has a corresponding Wikipedia article (e.g. `Night-Shining White`, `Yongle emperor`), edit the article and:

- Add the Commons image to the article body if it lacks one.
- Add a reference to our deep page in the "External links" section, framed as a guide rather than a citation:

```wikitext
* {{cite web | url=https://chinaheritageguide.com/treasures-abroad/<slug> | title=<artifact>: provenance and journey | publisher=China Heritage }}
```

This is the traffic-driving mechanism. Wikipedia external links pass real PageRank and yield steady trickle traffic.

---

## When to escalate to API auto-upload

**Not yet.** After your account has 50+ accepted uploads and 6+ months of clean history, you can wire `prepare-commons-uploads.ts` to actually POST to the MediaWiki API. The endpoints to use:

```
POST https://commons.wikimedia.org/w/api.php
  action=login
  action=query&meta=tokens
  action=upload  (multipart, send file + wikitext)
```

You will need a [BotPassword](https://commons.wikimedia.org/wiki/Special:BotPasswords) (not your main password). Store credentials in env vars:

```
WIKIMEDIA_USERNAME=YourAccount
WIKIMEDIA_BOT_PASSWORD=...   # generated at Special:BotPasswords
```

Ping us if you reach that stage and we will add the actual upload code.

---

## Recap

- **Day 1**: run `prepare-commons-uploads.ts`, manually upload 2 files via Upload Wizard.
- **Day 7**: if no rollbacks, manually upload 5 more.
- **Day 30**: keep the cadence at 2–3 per week. Edit Wikipedia articles to use the new images and add external-link entries.
- **Day 90**: ~30 Commons files live, ~15 Wikipedia articles linked. Trickle traffic begins.
