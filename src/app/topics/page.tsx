import { Metadata } from "next";
import { Layers } from "lucide-react";
import { topics } from "@/data/topics";
import TopicCard from "@/components/TopicCard";
import AdBanner from "@/components/AdBanner";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Themes — Explore China's Cultural Heritage Across Museums",
  description:
    "Curated themes that connect Chinese artifacts across dynasties, materials, and museums. From Sanxingdui mysteries to blue-and-white porcelain masterpieces.",
  alternates: {
    canonical: "/topics",
  },
  openGraph: {
    title: "Themes — Explore China's Cultural Heritage Across Museums",
    description:
      "Curated themes connecting Chinese artifacts across dynasties, materials, and museums worldwide.",
    url: absoluteUrl("/topics"),
    type: "website",
  },
};

export default function TopicsPage() {
  const [featured, ...rest] = topics;

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "China Heritage — Themes",
    description:
      "Curated cross-museum themes that connect Chinese artifacts across dynasties, materials, and regions.",
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    numberOfItems: topics.length,
    itemListElement: topics.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: absoluteUrl(`/topics/${t.slug}`),
      name: t.title,
      description: t.summary,
      image: t.heroImage,
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
              <Layers className="h-3.5 w-3.5" />
              Cross-Museum Collections
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-ink-900 mb-4 leading-tight">
              Themes That Span Dynasties and Museums
            </h1>
            <p className="text-lg text-ink-600 leading-relaxed">
              No single museum holds the full story of Chinese civilization.
              Each theme here connects masterpieces scattered across institutions
              to reveal evolutions, mysteries, and global journeys.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10">
          <h2 className="font-display text-2xl font-bold text-ink-900 mb-6">
            Featured Theme
          </h2>
          <TopicCard topic={featured} featured />
        </div>

        <AdBanner slot="topics-middle" format="horizontal" className="mb-12" />

        <div>
          <h2 className="font-display text-2xl font-bold text-ink-900 mb-6">
            All Themes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((topic) => (
              <TopicCard key={topic.slug} topic={topic} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
