# Growth Plan

## What the site already has

- Strong topic fit: Chinese artifacts, museums, dynasties, and pop-culture field guides.
- Good static architecture: Next.js pages, sitemap, robots, and object-level routes.
- Enough inventory to build topical authority: artifacts, museums, inspirations, themes, and overseas collection pages.

## What was blocking scale

- Ad slots were placeholders, so the site could not monetize in practice.
- Several high-intent museum queries did not have dedicated landing pages.
- The site needed more internal linking from broad hubs to museum-specific and object-specific pages.
- Some pages were rich in visuals but light on search-intent matching.

## Revenue model

Monthly ad revenue is mostly:

`pageviews x ad impressions per page x viewability x RPM`

A rough planning model:

- 250k monthly pageviews at $20 RPM ≈ $5k
- 500k monthly pageviews at $20 RPM ≈ $10k
- 250k monthly pageviews at $40 RPM ≈ $10k

The main lever is not "more ads"; it is more qualified search traffic and more pages per session.

## Content clusters to build next

1. Museum-specific landing pages
   - Chinese artifacts at The Met
   - Chinese artifacts at the British Museum
   - Chinese artifacts at the Cleveland Museum of Art

2. Comparison pages
   - Tang vs Song ceramics
   - Sanxingdui vs Shang bronzes
   - Jade burial suits vs jade ritual objects

3. High-intent explainer pages
   - Chinese artifacts in New York
   - Chinese artifacts in London
   - Chinese Buddhist sculpture guide
   - Chinese blue-and-white porcelain guide

4. Pop-culture bridge pages
   - Black Myth: Wukong to real museum objects
   - Genshin Liyue to real museum objects
   - Ne Zha 2 symbols explained

5. Collection pages that link out to objects
   - Overseas Chinese art by museum
   - Chinese art by dynasty
   - Chinese art by material

## 90-day execution

### Days 1-30

- Finish the collection landing pages.
- Add FAQ blocks to artifact pages.
- Make ad delivery real and measurable.
- Tighten titles and descriptions on the top 20 pages.

### Days 31-60

- Publish comparison pages and dynasty explainers.
- Add a search index page with high-intent filters.
- Add more internal links from every object page to at least one museum page and one theme page.

### Days 61-90

- Grow backlinks through museum-adjacent sharing, social snippets, and newsletter reuse.
- Add an editorial cadence: one new object page or comparison page every week.
- Review Search Console queries and expand the pages that already get impressions.

## SEO checklist

- One clear primary keyword per page.
- Unique title tag and meta description.
- Canonical URL on every indexable page.
- Breadcrumbs on detail pages.
- FAQ content that matches the visible page.
- Descriptive alt text on every important image.
- XML sitemap updated with every new route.
- Fast page loads and clean mobile layout.

Google references worth keeping nearby:

- [SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [FAQPage structured data](https://developers.google.com/search/docs/appearance/structured-data/faqpage)
- [ads.txt guide](https://support.google.com/adsense/answer/12171612?hl=en)

## AdSense checklist

- Set `NEXT_PUBLIC_ADSENSE_PUB_ID`.
- Fill every slot ID in `.env.example`.
- Keep `ads.txt` reachable at the root.
- Only render ads after consent where your policy requires it.
- Watch viewability and ad density, not just raw ad count.

## My call

This site can absolutely grow into a meaningful AdSense asset, but the path is boring and cumulative: better pages, better internal routing, better query match, better repeatability.
