import { Metadata } from "next";
import { Sparkles } from "lucide-react";
import { popCultureWorks, mediumLabels } from "@/data/popCultureWorks";
import WorkCard from "@/components/WorkCard";
import AdBanner from "@/components/AdBanner";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Inspirations — Real Artifacts Behind the Games and Films You Love",
  description:
    "From Black Myth: Wukong to Genshin Impact's Liyue, discover the real Chinese artifacts that inspired the games, films, and TV shows captivating global audiences.",
  alternates: {
    canonical: "/inspirations",
  },
  openGraph: {
    title: "Inspirations — Real Artifacts Behind the Games and Films You Love",
    description:
      "The real Chinese cultural heritage behind modern games, films, and TV — traced back to the museum collections that inspired them.",
    url: absoluteUrl("/inspirations"),
    type: "website",
  },
};

export default function InspirationsPage() {
  const [featured, ...rest] = popCultureWorks;

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Inspirations — Real Artifacts Behind the Games and Films You Love",
    description:
      "Curated index of modern Chinese pop culture works mapped to the real artifacts and museum collections that inspired them.",
    numberOfItems: popCultureWorks.length,
    itemListElement: popCultureWorks.map((work, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: absoluteUrl(`/inspirations/${work.slug}`),
      name: work.title,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <section className="bg-gradient-to-b from-ink-950 via-ink-900 to-primary-950 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z' fill='%23ffffff' fill-opacity='0.4'/%3E%3C/svg%3E\")",
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-primary-200 mb-6">
              <Sparkles className="h-3.5 w-3.5" />
              Pop Culture × Real Artifacts
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              The Real Artifacts Behind the Worlds You Love
            </h1>
            <p className="text-lg text-ink-200 leading-relaxed">
              Black Myth: Wukong&apos;s bronze gods. Genshin Impact&apos;s Liyue Harbor.
              The Forbidden City in Empresses in the Palace. Every modern
              Chinese myth is built on real artifacts — and we can show you
              exactly which ones.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10">
          <h2 className="font-display text-2xl font-bold text-ink-900 mb-6">
            Featured
          </h2>
          <WorkCard work={featured} featured />
        </div>

        <AdBanner slot="inspirations-middle" format="horizontal" className="mb-12" />

        <div>
          <h2 className="font-display text-2xl font-bold text-ink-900 mb-6">
            All Inspirations
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((work) => (
              <WorkCard key={work.slug} work={work} />
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {(Object.keys(mediumLabels) as Array<keyof typeof mediumLabels>).map(
            (m) => {
              const count = popCultureWorks.filter((w) => w.medium === m).length;
              if (count === 0) return null;
              return (
                <div
                  key={m}
                  className="bg-ink-50 rounded-xl p-4 border border-ink-100"
                >
                  <p className="font-display text-2xl font-bold text-primary-600">
                    {count}
                  </p>
                  <p className="text-xs text-ink-500 mt-1">
                    {mediumLabels[m]}
                    {count > 1 ? "s" : ""}
                  </p>
                </div>
              );
            },
          )}
        </div>
      </section>
    </>
  );
}
