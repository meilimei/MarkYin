import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, GitCompareArrows, Sparkles } from "lucide-react";
import { comparisonGuides } from "@/data/comparisons";
import { getArtifactBySlug } from "@/data/artifacts";
import AdBanner from "@/components/AdBanner";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Compare Chinese Artifacts",
  description:
    "Side-by-side comparisons that explain how Chinese artifacts, dynasties, and visual traditions differ across time.",
  alternates: { canonical: "/compare" },
  openGraph: {
    title: "Compare Chinese Artifacts",
    description:
      "Compare Sanxingdui and Shang bronzes, jade across dynasties, and Song versus Yuan painting.",
    url: absoluteUrl("/compare"),
    type: "website",
  },
};

export default function ComparePage() {
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Compare Chinese Artifacts",
    numberOfItems: comparisonGuides.length,
    itemListElement: comparisonGuides.map((guide, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: guide.title,
      url: absoluteUrl(`/compare/${guide.slug}`),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      <section className="bg-gradient-to-b from-ink-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary-50 px-3 py-1 rounded-full text-xs font-medium text-primary-700 mb-4">
              <GitCompareArrows className="h-3.5 w-3.5" />
              Comparison hub
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-ink-900 mb-4 leading-tight">
              Compare Chinese artifacts across dynasties and traditions
            </h1>
            <p className="text-lg text-ink-600 leading-relaxed max-w-2xl">
              These pages answer the kind of searches that want a direct contrast
              and then keep readers moving through the rest of the site.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-ink-600">
              <span className="inline-flex items-center gap-1.5">
                <strong className="text-ink-900">{comparisonGuides.length}</strong>
                comparisons
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1.5">
                <Sparkles className="h-4 w-4 text-primary-500" />
                Built for high-intent search
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <AdBanner slot="compare-top" format="horizontal" />
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {comparisonGuides.map((guide) => {
            const left = getArtifactBySlug(guide.leftArtifactSlug);
            const right = getArtifactBySlug(guide.rightArtifactSlug);

            return (
              <Link
                key={guide.slug}
                href={`/compare/${guide.slug}`}
                className="group rounded-3xl border border-ink-100 bg-white shadow-sm hover:shadow-xl hover:border-primary-200 transition-all overflow-hidden"
              >
                <div className="grid grid-cols-2">
                  <div className="aspect-[4/3] bg-ink-50 overflow-hidden">
                    {left ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={left.image}
                        alt={left.name}
                        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : null}
                  </div>
                  <div className="aspect-[4/3] bg-ink-100 overflow-hidden">
                    {right ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={right.image}
                        alt={right.name}
                        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : null}
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-xs uppercase tracking-widest text-primary-600 font-semibold mb-2">
                    Compare
                  </p>
                  <h2 className="font-display text-2xl font-bold text-ink-900 leading-tight mb-2 group-hover:text-primary-700 transition-colors">
                    {guide.title}
                  </h2>
                  <p className="text-sm font-semibold text-primary-600 mb-3">
                    {guide.subtitle}
                  </p>
                  <p className="text-sm text-ink-600 leading-relaxed mb-4">
                    {guide.summary}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {guide.searchTerms.map((term) => (
                      <span
                        key={term}
                        className="text-xs bg-ink-50 border border-ink-100 text-ink-600 rounded-full px-2.5 py-1"
                      >
                        {term}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary-600 group-hover:gap-2 transition-all">
                    Open the comparison <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="bg-white py-14 border-t border-ink-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-sm text-ink-600">
            <div className="rounded-2xl bg-ink-50 border border-ink-100 p-5">
              <strong className="block text-ink-900 mb-2">Contrast first</strong>
              Each page focuses on a single pair, so the user gets a fast answer.
            </div>
            <div className="rounded-2xl bg-ink-50 border border-ink-100 p-5">
              <strong className="block text-ink-900 mb-2">Deep links</strong>
              Every comparison sends readers to the exact artifact pages and themes.
            </div>
            <div className="rounded-2xl bg-ink-50 border border-ink-100 p-5">
              <strong className="block text-ink-900 mb-2">Monetizable depth</strong>
              Longer sessions, more pageviews, and better matched ad inventory.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
