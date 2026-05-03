import { Metadata } from "next";
import { artifacts, categories, dynasties } from "@/data/artifacts";
import ArtifactCard from "@/components/ArtifactCard";
import AdBanner from "@/components/AdBanner";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Artifacts — Explore China's Cultural Treasures",
  description:
    "Browse a curated collection of China's most extraordinary cultural artifacts, from Sanxingdui bronze masks to Song Dynasty masterpiece paintings.",
  alternates: {
    canonical: "/artifacts",
  },
  openGraph: {
    title: "Artifacts — Explore China's Cultural Treasures",
    description:
      "Browse a curated collection of China's most extraordinary cultural artifacts, from Sanxingdui bronze masks to Song Dynasty masterpiece paintings.",
    url: absoluteUrl("/artifacts"),
    type: "website",
  },
};

export default function ArtifactsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-b from-ink-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-ink-900 mb-4">
            Cultural Artifacts
          </h1>
          <p className="text-lg text-ink-500 max-w-2xl">
            Each artifact tells a story that spans thousands of years. Explore
            the masterworks that define Chinese civilization.
          </p>

          {/* Filter Tags */}
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.slice(0, 8).map((cat) => (
              <span
                key={cat}
                className={`px-4 py-1.5 rounded-full text-sm font-medium cursor-pointer transition-colors ${
                  cat === "All"
                    ? "bg-primary-600 text-white"
                    : "bg-white border border-ink-200 text-ink-600 hover:border-primary-300 hover:text-primary-700"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Ad */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <AdBanner slot="artifacts-top" format="horizontal" />
      </div>

      {/* Artifacts Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {artifacts.map((artifact, index) => (
            <div key={artifact.slug}>
              <ArtifactCard artifact={artifact} />
              {/* Insert ad after every 6th card */}
              {(index + 1) % 6 === 0 && index < artifacts.length - 1 && (
                <div className="mt-6">
                  <AdBanner
                    slot={`artifacts-grid-${index}`}
                    format="horizontal"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
