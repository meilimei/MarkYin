import Link from "next/link";
import { ArrowRight, Landmark, BookOpen, Sparkles, Layers } from "lucide-react";
import { artifacts } from "@/data/artifacts";
import { museums } from "@/data/museums";
import { popCultureWorks } from "@/data/popCultureWorks";
import { topics } from "@/data/topics";
import ArtifactCard from "@/components/ArtifactCard";
import MuseumCard from "@/components/MuseumCard";
import WorkCard from "@/components/WorkCard";
import TopicCard from "@/components/TopicCard";
import AdBanner from "@/components/AdBanner";
import { SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/site";

export default function HomePage() {
  const featuredArtifact = artifacts[0];
  const popularArtifacts = artifacts.slice(1, 5);
  const featuredMuseums = museums.slice(0, 4);
  const heroWorks = popCultureWorks.slice(0, 4);
  const featuredTopic = topics[0];
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
              From Black Myth to the Forbidden City
            </p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              The Real Artifacts
              <br />
              Behind the
              <br />
              <span className="text-gradient">Worlds You Love</span>
            </h1>
            <p className="text-lg md:text-xl text-ink-300 leading-relaxed mb-10 max-w-2xl">
              From the bronze gods of Black Myth: Wukong to the porcelain of
              Genshin&apos;s Liyue — trace the modern myths back to the museum
              treasures that inspired them. Across 8 collections worldwide.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/inspirations"
                className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Explore Inspirations
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/topics"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-medium transition-colors backdrop-blur-sm"
              >
                Browse Themes
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-white/10">
            {[
              { icon: Sparkles, label: "Artifacts", value: "12" },
              { icon: Layers, label: "Themes", value: `${topics.length}` },
              { icon: BookOpen, label: "Inspirations", value: `${popCultureWorks.length}` },
              { icon: Landmark, label: "Museums", value: `${museums.length}+` },
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

      {/* Inspirations Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="inline-flex items-center gap-2 bg-primary-50 px-3 py-1 rounded-full text-xs font-medium text-primary-700 mb-3">
              <Sparkles className="h-3.5 w-3.5" />
              Pop Culture × Real Artifacts
            </div>
            <h2 className="font-display text-3xl font-bold text-ink-900">
              Inspirations
            </h2>
            <p className="text-ink-500 mt-1">
              The real Chinese artifacts behind the games and films you love
            </p>
          </div>
          <Link
            href="/inspirations"
            className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
          >
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {heroWorks.map((work) => (
            <WorkCard key={work.slug} work={work} />
          ))}
        </div>
      </section>

      {/* Featured Topic */}
      <section className="bg-ink-50/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-white px-3 py-1 rounded-full text-xs font-medium text-primary-700 mb-3 border border-ink-100">
                <Layers className="h-3.5 w-3.5" />
                Cross-Museum Theme
              </div>
              <h2 className="font-display text-3xl font-bold text-ink-900">
                Featured Theme
              </h2>
              <p className="text-ink-500 mt-1">
                One story told across multiple museums
              </p>
            </div>
            <Link
              href="/topics"
              className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
            >
              All themes <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <TopicCard topic={featuredTopic} featured />
        </div>
      </section>

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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div>
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
            Where Modern Myths Meet Ancient Stones
          </h2>
          <p className="text-ink-300 text-lg mb-8 leading-relaxed">
            Every game, film, and story above is built on real artifacts you can
            still visit today. Start with the inspirations you know, end with
            the museums you didn&apos;t.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/inspirations"
              className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Start with Inspirations
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/topics"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Explore Themes
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
