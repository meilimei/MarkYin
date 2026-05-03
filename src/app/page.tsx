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
      <section className="relative bg-imperial-950 text-white overflow-hidden">
        {/* Background Gradients & Patterns */}
        <div className="absolute inset-0 bg-gradient-to-br from-imperial-950 via-ink-950 to-primary-950 opacity-95" />
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full mix-blend-overlay"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23eebb99' fill-opacity='1'%3E%3Cpath d='M40 40c0-11.046 8.954-20 20-20V0c-22.091 0-40 17.909-40 40s17.909 40 40 40v-20c-11.046 0-20-8.954-20-20zM0 40c0-11.046 8.954-20 20-20V0C8.954 0 0 8.954 0 20v20zm0 0c0 11.046 8.954 20 20 20v20C8.954 80 0 71.046 0 60V40zm80 0c0-11.046-8.954-20-20-20V0c11.046 0 20 8.954 20 20v20zm0 0c0 11.046-8.954 20-20 20v20c11.046 0 20-8.954 20-20V40z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-40">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-primary-400 font-medium text-sm md:text-base tracking-[0.2em] uppercase mb-6 flex items-center justify-center gap-3">
              <span className="w-12 h-px bg-primary-500/50 hidden sm:block"></span>
              From Myth to Museum
              <span className="w-12 h-px bg-primary-500/50 hidden sm:block"></span>
            </p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8 text-transparent bg-clip-text bg-gradient-to-b from-paper to-paper-dark drop-shadow-sm">
              Discover the Soul of
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 via-primary-400 to-primary-500">
                China&apos;s Heritage
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-ink-200 leading-relaxed mb-12 max-w-3xl mx-auto font-light">
              Journey through millennia of civilization. Uncover the real stories behind the majestic artifacts, legendary dynasties, and the world-class museums that preserve them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/artifacts"
                className="inline-flex items-center gap-2 bg-imperial-600 hover:bg-imperial-500 text-white px-8 py-4 rounded-full font-medium transition-all hover:scale-105 shadow-lg shadow-imperial-900/50"
              >
                Explore Artifacts
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/museums"
                className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/20 text-white px-8 py-4 rounded-full font-medium transition-all hover:scale-105 backdrop-blur-md"
              >
                Browse Museums
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-12 border-t border-white/10 max-w-4xl mx-auto">
            {[
              { icon: Sparkles, label: "Artifacts", value: "12+" },
              { icon: Layers, label: "Themes", value: `${topics.length}` },
              { icon: BookOpen, label: "Inspirations", value: `${popCultureWorks.length}` },
              { icon: Landmark, label: "Museums", value: `${museums.length}+` },
            ].map((stat) => (
              <div key={stat.label} className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/5 mb-4 group-hover:bg-primary-500/20 transition-colors">
                  <stat.icon className="h-5 w-5 text-primary-400" />
                </div>
                <p className="font-display text-3xl md:text-4xl font-bold text-white mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-ink-300 font-medium tracking-wide uppercase">{stat.label}</p>
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
      <section className="bg-imperial-950 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-imperial-950 to-transparent opacity-80" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-paper to-primary-200">
            Where Modern Myths Meet Ancient Stones
          </h2>
          <p className="text-ink-200 text-lg md:text-xl mb-10 leading-relaxed font-light">
            Every game, film, and story above is built on real artifacts you can
            still visit today. Start with the inspirations you know, end with
            the museums you didn&apos;t.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/inspirations"
              className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-500 text-white px-8 py-4 rounded-full font-medium transition-all hover:scale-105 shadow-lg shadow-primary-900/50"
            >
              Start with Inspirations
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/topics"
              className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/20 text-white px-8 py-4 rounded-full font-medium transition-all hover:scale-105 backdrop-blur-md"
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
