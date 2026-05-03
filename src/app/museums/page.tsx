import { Metadata } from "next";
import { museums } from "@/data/museums";
import MuseumCard from "@/components/MuseumCard";
import AdBanner from "@/components/AdBanner";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Museums — China's Greatest Cultural Institutions",
  description:
    "Explore China's most prestigious museums, from the Forbidden City to Sanxingdui. Plan your visit and discover their most important collections.",
  alternates: {
    canonical: "/museums",
  },
  openGraph: {
    title: "Museums — China's Greatest Cultural Institutions",
    description:
      "Explore China's most prestigious museums, from the Forbidden City to Sanxingdui. Plan your visit and discover their most important collections.",
    url: absoluteUrl("/museums"),
    type: "website",
  },
};

export default function MuseumsPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-ink-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-ink-900 mb-4">
            Museums of China
          </h1>
          <p className="text-lg text-ink-500 max-w-2xl">
            From imperial palaces to modern exhibition halls, these institutions
            safeguard the material legacy of one of the world&apos;s oldest
            civilizations.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <AdBanner slot="museums-top" format="horizontal" />
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {museums.map((museum) => (
            <MuseumCard key={museum.slug} museum={museum} />
          ))}
        </div>
      </section>
    </>
  );
}
