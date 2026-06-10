# China Heritage (MarkYin)

Multilingual Chinese cultural artifact & museum encyclopedia. Next.js 14 + Tailwind CSS + TypeScript. SEO-first, AdSense-ready.

5,000 years of heritage, one click away.

## Features

- **35+ Iconic Artifacts** — Sanxingdui bronze masks, Terracotta Warriors, Sword of Goujian, and more
- **17 Major Museums** — Palace Museum, Sanxingdui, National Museum of China, and more
- **Dynasty Timeline** — Interactive timeline from Shang to Yuan
- **SEO Optimized** — SSR/SSG with Next.js, structured metadata, static params
- **Google AdSense Ready** — Configurable ad slots throughout the site
- **Multilingual** — Designed for EN/JA/KO/FR/ES (language selector included)
- **Modern UI** — Tailwind CSS with gold & ink cultural theme
- **Museum Collection Pages** — Museum-level landing pages for high-intent search traffic

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Lucide Icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Monetization Setup

Copy `.env.example` to `.env.local` and fill:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- `NEXT_PUBLIC_ADSENSE_PUB_ID`
- the AdSense slot IDs for each placement

Then replace the placeholder in `public/ads.txt` with your real publisher ID after AdSense approval.

## License

MIT
