import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, MapPin, Search, Sparkles } from "lucide-react";
import {
  collectionGuides,
  getCollectionArtifacts,
} from "@/data/collectionGuides";
import AdBanner from "@/components/AdBanner";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Chinese Artifacts in World Museums",
  description:
    "Explore Chinese artifacts at The Met, the British Museum, and the Cleveland Museum of Art, with direct links into each collection and object record.",
  alternates: { canonical: "/collections" },
  openGraph: {
    title: "Chinese Artifacts in World Museums",
    description:
      "A museum-by-museum route through Chinese objects held outside China.",
    url: absoluteUrl("/collections"),
    type: "website",
  },
};

export default function CollectionsPage() {
  const totalObjects = collectionGuides.reduce(
    (sum, guide) => sum + getCollectionArtifacts(guide.sourceMuseumId).length,
    0,
  );

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Chinese Artifacts in World Museums",
    numberOfItems: collectionGuides.length,
    itemListElement: collectionGuides.map((guide, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: guide.title,
      url: absoluteUrl(`/collections/${guide.slug}`),
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
              <Building2 className="h-3.5 w-3.5" />
              Museum collection pages
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-ink-900 mb-4 leading-tight">
              Chinese artifacts in the world's great museums
            </h1>
            <p className="text-lg text-ink-600 leading-relaxed max-w-2xl">
              Start with the museum people already search for, then move into
              the objects, accession numbers, and provenance stories that make
              each collection worth reading.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-ink-600">
              <span className="inline-flex items-center gap-1.5">
                <strong className="text-ink-900">{collectionGuides.length}</strong>
                museum guides
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1.5">
                <strong className="text-ink-900">{totalObjects}</strong>
                objects
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <AdBanner slot="collection-guide-top" format="horizontal" />
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {collectionGuides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/collections/${guide.slug}`}
              className="group rounded-3xl border border-ink-100 bg-white p-6 shadow-sm hover:shadow-xl hover:border-primary-200 transition-all"
            >
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="inline-flex items-center gap-2 bg-primary-50 px-3 py-1 rounded-full text-xs font-semibold text-primary-700">
                  <MapPin className="h-3.5 w-3.5" />
                  {guide.city}
                </div>
                <span className="text-xs text-ink-400">
                  {getCollectionArtifacts(guide.sourceMuseumId).length} items
                </span>
              </div>
              <h2 className="font-display text-2xl font-bold text-ink-900 mb-2 group-hover:text-primary-700 transition-colors">
                {guide.title}
              </h2>
              <p className="text-sm font-semibold text-primary-600 mb-3">
                {guide.museumName}
              </p>
              <p className="text-sm text-ink-600 leading-relaxed mb-4">
                {guide.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {guide.searchIntent.slice(0, 3).map((item) => (
                  <span
                    key={item}
                    className="text-xs bg-ink-50 border border-ink-100 text-ink-600 rounded-full px-2.5 py-1"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary-600 group-hover:gap-2 transition-all">
                Open the museum guide <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white py-14 border-t border-ink-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-sm text-ink-600">
            <div className="rounded-2xl bg-ink-50 border border-ink-100 p-5">
              <strong className="block text-ink-900 mb-2">
                Search intent first
              </strong>
              Build pages around the museum name people already type into Google.
            </div>
            <div className="rounded-2xl bg-ink-50 border border-ink-100 p-5">
              <strong className="block text-ink-900 mb-2">
                Object depth second
              </strong>
              Every guide points into accession records and object-level pages.
            </div>
            <div className="rounded-2xl bg-ink-50 border border-ink-100 p-5">
              <strong className="block text-ink-900 mb-2">
                Revenue friendly
              </strong>
              These pages naturally fit mid-page and sidebar ad placements.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
