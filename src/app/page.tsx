import Link from "next/link";
import { ArrowRight, Landmark, BookOpen, Globe, Sparkles } from "lucide-react";
import { artifacts } from "@/data/artifacts";
import { museums } from "@/data/museums";
import ArtifactCard from "@/components/ArtifactCard";
import MuseumCard from "@/components/MuseumCard";
import AdBanner from "@/components/AdBanner";
import { SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/site";

export default function HomePage() {
  const featuredArtifact = artifacts[0];
  const popularArtifacts = artifacts.slice(1, 5);
  const featuredMuseums = museums.slice(0, 4);
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "A multilingual guide to China's cultural artifacts, museums, dynasties, and heritage stories.",
    inLanguage: "en",
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/artifacts?search={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    sameAs: [absoluteUrl("/")],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      {/* Hero Section */}
      <section className="relative bg-ink-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ink-950 via-ink-900 to-primary-950 opacity-90" />
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="max-w-3xl">
            <p className="text-primary-400 font-medium text-sm tracking-widest uppercase mb-4">
              5,000 Years of Heritage
            </p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Stories Behind
              <br />
              China&apos;s Greatest
              <br />
              <span className="text-gradient">Cultural Treasures</span>
            </h1>
            <p className="text-lg md:text-xl text-ink-300 leading-relaxed mb-10 max-w-2xl">
              From the enigmatic bronze masks of Sanxingdui to the Terracotta
              Army&apos;s 8,000 unique faces — explore the world&apos;s oldest
              continuous civilization through its most extraordinary artifacts.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/artifacts"
                className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Explore Artifacts
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/museums"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-medium transition-colors backdrop-blur-sm"
              >
                Browse Museums
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-white/10">
            {[
              { icon: Sparkles, label: "Artifacts", value: "12+" },
              { icon: Landmark, label: "Museums", value: "8+" },
              { icon: BookOpen, label: "Dynasties", value: "10+" },
              { icon: Globe, label: "Languages", value: "5" },
            ].map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <stat.icon className="h-5 w-5 text-primary-400 mb-2 mx-auto md:mx-0" />
                <p className="text-2xl md:text-3xl font-bold text-white">
                  {stat.value}
                </p>
                <p className="text-sm text-ink-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <AdBanner slot="home-top" format="horizontal" />
      </div>

      {/* Featured Artifact */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-display text-3xl font-bold text-ink-900">
              Featured Artifact
            </h2>
            <p className="text-ink-500 mt-1">
              A masterpiece that defined an era
            </p>
          </div>
        </div>
        <ArtifactCard artifact={featuredArtifact} featured />
      </section>

      {/* Popular Artifacts Grid */}
      <section className="bg-ink-50/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-display text-3xl font-bold text-ink-900">
                Popular Artifacts
              </h2>
              <p className="text-ink-500 mt-1">
                Most visited treasures from across China
              </p>
            </div>
            <Link
              href="/artifacts"
              className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
            >
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularArtifacts.map((artifact) => (
              <ArtifactCard key={artifact.slug} artifact={artifact} />
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/artifacts"
              className="inline-flex items-center gap-1 text-sm font-medium text-primary-600"
            >
              View all artifacts <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Ad Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <AdBanner slot="home-mid" format="horizontal" />
      </div>

      {/* Museums Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-display text-3xl font-bold text-ink-900">
              Explore Museums
            </h2>
            <p className="text-ink-500 mt-1">
              World-class institutions preserving millennia of history
            </p>
          </div>
          <Link
            href="/museums"
            className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
          >
            All museums <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredMuseums.map((museum) => (
            <MuseumCard key={museum.slug} museum={museum} />
          ))}
        </div>
      </section>

      {/* CTA / Newsletter Section */}
      <section className="bg-ink-950 text-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Journey Through Time
          </h2>
          <p className="text-ink-300 text-lg mb-8 leading-relaxed">
            New artifacts and stories added regularly. Bookmark us and return to
            discover more treasures from 5,000 years of Chinese civilization.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/artifacts"
              className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Start Exploring
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/dynasties"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Browse by Dynasty
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom Ad */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <AdBanner slot="home-bottom" format="horizontal" />
      </div>
    </>
  );
}
