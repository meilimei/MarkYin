import { Metadata } from "next";
import { Globe } from "lucide-react";
import { abroadArtifacts } from "@/data/abroadArtifacts";
import AbroadCard from "@/components/AbroadCard";
import AdBanner from "@/components/AdBanner";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Treasures Abroad — Chinese Heritage in World Museums",
  description:
    "Curated Chinese artworks held by The Met and other major museums outside China, with the story of how each piece made its journey abroad.",
  alternates: {
    canonical: "/treasures-abroad",
  },
  openGraph: {
    title: "Treasures Abroad — Chinese Heritage in World Museums",
    description:
      "Curated Chinese artworks held by The Met and other major museums outside China, with the story of how each piece made its journey abroad.",
    url: absoluteUrl("/treasures-abroad"),
    type: "website",
  },
};

export default function TreasuresAbroadPage() {
  // Group by source museum for a clearer information architecture.
  const byMuseum = new Map<string, typeof abroadArtifacts>();
  for (const art of abroadArtifacts) {
    const key = art.sourceMuseum.name;
    const arr = byMuseum.get(key) ?? [];
    arr.push(art);
    byMuseum.set(key, arr);
  }

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-b from-ink-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-white border border-ink-100 text-xs font-semibold text-primary-700 px-3 py-1 rounded-full mb-4">
            <Globe className="h-3.5 w-3.5" />
            Diaspora Collection
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-ink-900 mb-4">
            Treasures Abroad
          </h1>
          <p className="text-lg text-ink-500 max-w-3xl leading-relaxed">
            Chinese cultural heritage lives not only in Beijing, Xi&apos;an, and
            Shanghai. Millions of artefacts left China during the turmoils of
            the 19th and 20th centuries, and the best of them are now anchors
            of the world&apos;s great museums. Each piece below is drawn from
            the open-access collection of its holding institution, with a short
            account of how it crossed oceans.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-ink-600">
            <span className="inline-flex items-center gap-1.5">
              <strong className="text-ink-900">
                {abroadArtifacts.length}
              </strong>
              pieces
            </span>
            <span>·</span>
            <span className="inline-flex items-center gap-1.5">
              <strong className="text-ink-900">{byMuseum.size}</strong>
              museum{byMuseum.size === 1 ? "" : "s"}
            </span>
            <span>·</span>
            <span className="inline-flex items-center gap-1.5">
              Public-domain / CC0 imagery
            </span>
          </div>
        </div>
      </section>

      {/* Ad */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <AdBanner slot="abroad-top" format="horizontal" />
      </div>

      {/* Sections per source museum */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-14">
        {Array.from(byMuseum.entries()).map(([museumName, items]) => (
          <div key={museumName}>
            <div className="mb-6 flex items-baseline justify-between gap-4 flex-wrap">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-ink-900">
                {museumName}
              </h2>
              <p className="text-sm text-ink-500">
                {items[0].sourceMuseum.city}, {items[0].sourceMuseum.country}
                {" · "}
                {items.length} piece{items.length === 1 ? "" : "s"}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((art) => (
                <AbroadCard key={art.slug} artifact={art} />
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
