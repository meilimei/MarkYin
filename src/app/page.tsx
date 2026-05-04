import Link from "next/link";
import {
  ArrowRight,
  Landmark,
  BookOpen,
  Sparkles,
  Layers,
  Gamepad2,
  Mountain,
  Flower2,
  Crown,
} from "lucide-react";
import { artifacts } from "@/data/artifacts";
import { museums } from "@/data/museums";
import { popCultureWorks } from "@/data/popCultureWorks";
import { topics } from "@/data/topics";
import ArtifactCard from "@/components/ArtifactCard";
import MuseumCard from "@/components/MuseumCard";
import WorkCard from "@/components/WorkCard";
import TopicCard from "@/components/TopicCard";
import AdBanner from "@/components/AdBanner";
import Newsletter from "@/components/Newsletter";
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

      {/* Black Myth flagship spotlight — drives traffic to the long-form bait
          guide that maps every game visual back to a real museum object. */}
      <section className="relative overflow-hidden bg-gradient-to-br from-imperial-950 via-ink-900 to-primary-950 text-white">
        <div
          className="absolute inset-0 opacity-30 mix-blend-overlay"
          style={{
            backgroundImage:
              "url('/images/abroad/bm-yixian-luohan.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/80 via-ink-900/60 to-primary-950/40" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary-500/15 border border-primary-400/30 px-3 py-1 rounded-full text-xs font-semibold text-primary-200 mb-5 backdrop-blur-sm">
              <Gamepad2 className="h-3.5 w-3.5" />
              Field Guide · 12 minute read
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight mb-5">
              Every Visual in{" "}
              <span className="text-primary-300">Black Myth: Wukong</span>,
              Mapped to a Real Museum
            </h2>
            <p className="text-base md:text-lg text-ink-200 leading-relaxed mb-7 max-w-2xl">
              The Buddhist colossi, bronze cauldrons, and painted scrolls in
              Game Science&apos;s breakout hit are real — and most of them
              are sitting in museums you can walk into. 7 visual lineages,
              23 specific objects, 5 museums on 3 continents.
            </p>
            <div className="flex flex-wrap items-center gap-3 mb-8 text-xs text-ink-300">
              <span className="bg-white/5 border border-white/10 rounded-full px-3 py-1">
                Yungang &amp; Longmen Buddhas
              </span>
              <span className="bg-white/5 border border-white/10 rounded-full px-3 py-1">
                Sanxingdui masks
              </span>
              <span className="bg-white/5 border border-white/10 rounded-full px-3 py-1">
                Tang sancai
              </span>
              <span className="bg-white/5 border border-white/10 rounded-full px-3 py-1">
                Ming porcelain
              </span>
            </div>
            <Link
              href="/black-myth-real-museum-guide"
              className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-400 text-white px-7 py-3.5 rounded-full font-semibold transition-all hover:scale-105 shadow-lg shadow-primary-900/50"
            >
              Read the field guide
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Companion field guides — two more pop-culture-to-museum guides
          that share the same format as Black Myth, surfaced right after
          the flagship spotlight. */}
      <section className="bg-ink-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-widest text-primary-600 font-semibold mb-2">
                More field guides
              </p>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-ink-900 leading-tight">
                Same format. Different fandom.
              </h3>
            </div>
            <Link
              href="/field-guides"
              className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-primary-600 hover:text-primary-700"
            >
              All field guides <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <Link
              href="/genshin-liyue-real-museum-guide"
              className="group relative block rounded-2xl overflow-hidden bg-gradient-to-br from-primary-900 via-ink-900 to-imperial-950 text-white p-6 hover:shadow-xl transition-shadow"
            >
              <div
                className="absolute inset-0 opacity-15 mix-blend-overlay"
                style={{
                  backgroundImage:
                    "url('/images/abroad/cma-cloudy-mountains.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                aria-hidden
              />
              <div className="relative">
                <div className="inline-flex items-center gap-2 text-primary-200 mb-3 text-xs font-semibold uppercase tracking-widest">
                  <Mountain className="h-4 w-4" />
                  Genshin · Liyue
                </div>
                <h4 className="font-display text-lg md:text-xl font-bold leading-tight mb-3">
                  Every Liyue Visual, Mapped to a Real Museum
                </h4>
                <p className="text-sm text-ink-300 leading-relaxed mb-4">
                  Karst peaks, porcelain teacups, the Adepti — the Tang
                  &amp; Song objects that taught miHoYo the visual
                  language.
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary-200 group-hover:gap-2 transition-all">
                  Read the guide <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>

            <Link
              href="/ne-zha-2-real-museum-guide"
              className="group relative block rounded-2xl overflow-hidden bg-gradient-to-br from-imperial-950 via-ink-900 to-primary-900 text-white p-6 hover:shadow-xl transition-shadow"
            >
              <div
                className="absolute inset-0 opacity-15 mix-blend-overlay"
                style={{
                  backgroundImage:
                    "url('/images/abroad/ming-wanli-dragon-phoenix-dish.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                aria-hidden
              />
              <div className="relative">
                <div className="inline-flex items-center gap-2 text-primary-200 mb-3 text-xs font-semibold uppercase tracking-widest">
                  <Flower2 className="h-4 w-4" />
                  Ne Zha 2 · 哪吒
                </div>
                <h4 className="font-display text-lg md:text-xl font-bold leading-tight mb-3">
                  Every Symbol in Ne Zha 2, Mapped
                </h4>
                <p className="text-sm text-ink-300 leading-relaxed mb-4">
                  Lotus rebirth, the Four Dragon Kings, the Sky-Ribbon —
                  the real artifacts behind 2025&apos;s biggest animated
                  film.
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary-200 group-hover:gap-2 transition-all">
                  Read the guide <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>

            <Link
              href="/empresses-in-the-palace-real-museum-guide"
              className="group relative block rounded-2xl overflow-hidden bg-gradient-to-br from-ink-900 via-primary-900 to-imperial-950 text-white p-6 hover:shadow-xl transition-shadow"
            >
              <div
                className="absolute inset-0 opacity-15 mix-blend-overlay"
                style={{
                  backgroundImage:
                    "url('/images/abroad/qing-zhanyinbao-portrait.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                aria-hidden
              />
              <div className="relative">
                <div className="inline-flex items-center gap-2 text-primary-200 mb-3 text-xs font-semibold uppercase tracking-widest">
                  <Crown className="h-4 w-4" />
                  C-drama · 甄嬛传
                </div>
                <h4 className="font-display text-lg md:text-xl font-bold leading-tight mb-3">
                  Every Visual in Empresses in the Palace
                </h4>
                <p className="text-sm text-ink-300 leading-relaxed mb-4">
                  Dragon robes, jade hairpins, cobalt tea cups — every
                  recurring object in 2011&apos;s Qing palace
                  mega-drama, traced back to a real museum piece.
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary-200 group-hover:gap-2 transition-all">
                  Read the guide <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </div>
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
          <p className="text-primary-300 font-medium text-xs tracking-[0.2em] uppercase mb-4">
            Artifact of the Week · Free
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-paper to-primary-200">
            One Chinese Treasure, Every Sunday
          </h2>
          <p className="text-ink-200 text-lg md:text-xl mb-10 leading-relaxed font-light max-w-2xl mx-auto">
            Short. Visual. Always one real artifact, plus the modern game,
            film, or drama it shows up in. Unsubscribe anytime — we never
            sell your email.
          </p>

          <div className="mb-10">
            <Newsletter variant="dark" />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
            <Link
              href="/inspirations"
              className="inline-flex items-center justify-center gap-1 text-ink-300 hover:text-white transition-colors"
            >
              Or start with Inspirations
              <ArrowRight className="h-4 w-4" />
            </Link>
            <span className="hidden sm:inline text-ink-600">·</span>
            <Link
              href="/topics"
              className="inline-flex items-center justify-center gap-1 text-ink-300 hover:text-white transition-colors"
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
