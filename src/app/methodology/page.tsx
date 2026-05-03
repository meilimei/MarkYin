import { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  XCircle,
  ExternalLink,
  Database,
  ImageIcon,
  Languages,
  AlertTriangle,
} from "lucide-react";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Methodology — How China Heritage Researches and Sources Content",
  description:
    "Our editorial standards: how we cite Wikipedia, Wikidata, and museum primary sources; how we handle pop culture connections; image licensing; and how to report errors.",
  alternates: { canonical: "/methodology" },
  openGraph: {
    title: "Methodology — How China Heritage Sources Content",
    description:
      "Editorial standards, sourcing tiers, and image licensing for China Heritage.",
    url: absoluteUrl("/methodology"),
    type: "article",
  },
};

export default function MethodologyPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-ink-50 to-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-widest text-primary-600 font-semibold mb-3">
            Editorial Standards
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-ink-900 mb-6 leading-tight">
            How We Research and Source
          </h1>
          <p className="text-lg text-ink-600 leading-relaxed">
            China Heritage is a small editorial project. We don&apos;t hold
            artifacts in our hands. What we can do is read carefully, cite
            rigorously, and link you back to the people who do the primary
            scholarship — so you can verify anything we say.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-ink max-w-none">
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-ink-900 mb-5 flex items-center gap-2">
            <Database className="h-6 w-6 text-primary-500" />
            Source tiers
          </h2>
          <p className="text-ink-600 leading-relaxed mb-5">
            Every factual claim on China Heritage draws from at least one of the
            following tiers, in order of preference:
          </p>
          <ol className="space-y-4">
            <li className="bg-white border border-ink-100 rounded-xl p-5">
              <p className="font-bold text-ink-900 mb-1">
                Tier 1 — Museum primary sources
              </p>
              <p className="text-ink-600 text-sm leading-relaxed">
                Official online catalogs of the museum that holds the piece:
                The Palace Museum, National Museum of China, Sanxingdui
                Museum, Shaanxi History Museum, Hubei Provincial Museum, The
                Met, British Museum, Smithsonian, Cleveland Museum of Art.
                Object IDs and inventory numbers (where public) are linked.
              </p>
            </li>
            <li className="bg-white border border-ink-100 rounded-xl p-5">
              <p className="font-bold text-ink-900 mb-1">
                Tier 2 — Wikidata + Wikipedia
              </p>
              <p className="text-ink-600 text-sm leading-relaxed">
                Wikidata Q-IDs anchor each artifact for stable cross-language
                identity. Wikipedia summaries are used for general historical
                context where they cite published academic sources. Wikipedia
                text used directly is licensed under CC-BY-SA 3.0 and credited
                accordingly.
              </p>
            </li>
            <li className="bg-white border border-ink-100 rounded-xl p-5">
              <p className="font-bold text-ink-900 mb-1">
                Tier 3 — Reputable publications
              </p>
              <p className="text-ink-600 text-sm leading-relaxed">
                Smithsonian Magazine, Archaeology Magazine, peer-reviewed
                journals indexed by JSTOR, museum exhibition catalogs, and
                university press monographs.
              </p>
            </li>
          </ol>
          <div className="mt-5 bg-amber-50 border border-amber-200 rounded-lg p-4 flex gap-3">
            <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-amber-900 leading-relaxed">
              We do <strong>not</strong> use unsourced blogs, AI-generated
              content as a primary reference, or social media posts as
              standalone evidence. Every artifact page lists its sources at
              the bottom.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-ink-900 mb-5">
            Pop culture connections
          </h2>
          <p className="text-ink-600 leading-relaxed mb-4">
            When we say a game or film draws on a real artifact, we&apos;re
            making a claim about <em>visual or thematic resemblance</em>, not a
            legal claim about IP origins. Inspirations sections are written
            with care:
          </p>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span className="text-ink-600 text-sm leading-relaxed">
                <strong>Strong evidence</strong> (developer interviews, art
                book references, side-by-side stills) is preferred and cited
                where possible.
              </span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span className="text-ink-600 text-sm leading-relaxed">
                <strong>Visual parallels</strong> are described as such — we
                say &ldquo;clearly inspired by&rdquo; or &ldquo;closely
                resembles,&rdquo; never invented quotes from creators.
              </span>
            </li>
            <li className="flex gap-3">
              <XCircle className="h-5 w-5 text-rose-600 flex-shrink-0 mt-0.5" />
              <span className="text-ink-600 text-sm leading-relaxed">
                <strong>We don&apos;t fabricate</strong> connections to drive
                clicks. If a game uses a generic Tang-dynasty aesthetic
                without referencing a specific artifact, we say so.
              </span>
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-ink-900 mb-5 flex items-center gap-2">
            <ImageIcon className="h-6 w-6 text-primary-500" />
            Images and licensing
          </h2>
          <p className="text-ink-600 leading-relaxed mb-4">
            Every artifact image carries a credit caption with: photographer
            (where attributable), license, and link to the original source.
            We use, in order of preference:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-ink-600 text-sm leading-relaxed">
            <li>
              <strong>CC0 / Public Domain</strong> images from The Met
              Open Access, Smithsonian Open Access, Cleveland Museum of Art
              Open Access, and similar institutions.
            </li>
            <li>
              <strong>Wikimedia Commons</strong> images released under public
              domain or Creative Commons licenses, with author and license
              attributed in the caption.
            </li>
            <li>
              <strong>Decorative photography</strong> (e.g., for hero banners
              that don&apos;t depict a specific catalogued artifact) sourced
              from royalty-free providers like Unsplash with appropriate
              attribution.
            </li>
          </ol>
          <p className="text-ink-600 leading-relaxed mt-4 text-sm">
            We do not use copyrighted museum-owned photography without
            explicit license. If you see an image you believe is misused,
            email{" "}
            <a
              href="mailto:contact@chinaheritageguide.com"
              className="text-primary-600 hover:text-primary-700"
            >
              contact@chinaheritageguide.com
            </a>{" "}
            and we&apos;ll review immediately.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-ink-900 mb-5 flex items-center gap-2">
            <Languages className="h-6 w-6 text-primary-500" />
            Translations and naming
          </h2>
          <p className="text-ink-600 leading-relaxed">
            English artifact names follow the most common usage in
            English-language museum catalogs (e.g., &ldquo;Simuwu Ding&rdquo;
            rather than &ldquo;Houmuwu Ding,&rdquo; while noting the
            scholarly revision). Chinese names are given alongside in
            traditional or simplified script as cited by the holding museum.
            Romanization uses Hanyu Pinyin without tone marks for headings
            and with tone marks where pronunciation matters.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-ink-900 mb-5">
            How updates work
          </h2>
          <p className="text-ink-600 leading-relaxed mb-4">
            Behind the scenes, we run periodic syncs against Wikidata to
            keep cross-collection links and identifiers current. The pipeline
            is open-source and visible in our repository under{" "}
            <code className="text-sm bg-ink-100 px-1.5 py-0.5 rounded">
              scripts/sync/
            </code>
            .
          </p>
          <p className="text-ink-600 leading-relaxed">
            Sync output is treated as <em>reference data</em> — it never
            overwrites our curated narratives automatically. A human editor
            reviews and chooses what to incorporate.
          </p>
        </section>

        <section className="mb-12 bg-ink-50 border border-ink-100 rounded-xl p-6">
          <h2 className="font-display text-xl font-bold text-ink-900 mb-3">
            Found an error?
          </h2>
          <p className="text-ink-600 leading-relaxed mb-3 text-sm">
            We take corrections seriously. Email us with the URL, the error,
            and (if possible) a citation. We update fast and we credit
            contributors who flag substantive issues.
          </p>
          <p className="text-primary-700 font-medium text-sm">
            contact@chinaheritageguide.com
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-ink-900 mb-5">
            External resources we recommend
          </h2>
          <ul className="space-y-2 text-sm">
            {[
              {
                label: "The Palace Museum (Beijing)",
                url: "https://en.dpm.org.cn/",
              },
              {
                label: "National Museum of China",
                url: "https://en.chnmuseum.cn/",
              },
              {
                label: "Sanxingdui Museum",
                url: "http://www.sxd.cn/",
              },
              {
                label: "The Met — Asian Art",
                url: "https://www.metmuseum.org/about-the-met/collection-areas/asian-art",
              },
              {
                label: "British Museum — China",
                url: "https://www.britishmuseum.org/collection/galleries/china-and-south-asia",
              },
              {
                label: "Wikidata — Cultural Heritage",
                url: "https://www.wikidata.org/wiki/Wikidata:WikiProject_Cultural_heritage",
              },
            ].map((r) => (
              <li key={r.url}>
                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-ink-600 hover:text-primary-600"
                >
                  {r.label}
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-12 pt-8 border-t border-ink-100">
          <Link
            href="/about"
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            ← Back to About
          </Link>
        </div>
      </article>
    </>
  );
}
