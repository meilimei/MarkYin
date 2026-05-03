import { Metadata } from "next";
import Link from "next/link";
import { Landmark, Sparkles, Layers, Globe, ArrowRight } from "lucide-react";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "About China Heritage — Pop Culture Meets Real Artifacts",
  description:
    "China Heritage connects modern Chinese myths — Black Myth: Wukong, Genshin Impact, blockbuster films — to the real museum artifacts that inspired them.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About China Heritage — Pop Culture Meets Real Artifacts",
    description:
      "Connecting Black Myth: Wukong, Genshin Liyue, and Chinese cinema to the real artifacts in museums worldwide.",
    url: absoluteUrl("/about"),
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-ink-50 to-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Landmark className="h-12 w-12 text-primary-500 mx-auto mb-6" />
          <h1 className="font-display text-4xl md:text-5xl font-bold text-ink-900 mb-6">
            Where Modern Myths Meet Ancient Stones
          </h1>
          <p className="text-lg text-ink-500 leading-relaxed">
            We take the games, films, and TV that drew you to Chinese culture
            in the first place — and trace them back to the real artifacts in
            real museums that made them possible.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          <div>
            <h2 className="font-display text-2xl font-bold text-ink-900 mb-4">
              The Problem
            </h2>
            <p className="text-ink-600 leading-relaxed">
              Hundreds of millions of people fell in love with Chinese culture
              through <em>Black Myth: Wukong</em>&apos;s bronze gods,{" "}
              <em>Genshin Impact</em>&apos;s Liyue Harbor, and films like{" "}
              <em>Empresses in the Palace</em>. They want to know more — but
              there&apos;s no good bridge between &ldquo;the game I love&rdquo;
              and &ldquo;the artifact in a Beijing museum.&rdquo;
            </p>
            <p className="text-ink-600 leading-relaxed mt-4">
              Wikipedia is too dense. Museum websites are language-locked.
              YouTube essays are scattered. Travel guides skip the why. So
              curiosity dies somewhere between &ldquo;cool game&rdquo; and
              &ldquo;...wait, is that real?&rdquo;
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-ink-900 mb-4">
              Our Bridge
            </h2>
            <p className="text-ink-600 leading-relaxed">
              Every page on China Heritage does one of three things:
            </p>
            <ul className="mt-4 space-y-3">
              <li className="flex gap-3">
                <Sparkles className="h-5 w-5 text-primary-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-ink-800">Inspiration pages</strong>
                  <span className="text-ink-600">
                    {" "}
                    start with a work you already know (a game, a film, a TV
                    show) and list the real artifacts that inspired it, with
                    photos, dates, and where to see them.
                  </span>
                </div>
              </li>
              <li className="flex gap-3">
                <Layers className="h-5 w-5 text-primary-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-ink-800">Theme pages</strong>
                  <span className="text-ink-600">
                    {" "}
                    take a thread — Sanxingdui mysteries, blue-and-white
                    porcelain, jade burials — and trace it across multiple
                    museums and dynasties as one connected story.
                  </span>
                </div>
              </li>
              <li className="flex gap-3">
                <Landmark className="h-5 w-5 text-primary-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-ink-800">Artifact pages</strong>
                  <span className="text-ink-600">
                    {" "}
                    go deep on one object: history, significance, fun facts,
                    every museum that holds a piece of it, and every modern
                    work that drew on it.
                  </span>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-ink-900 mb-4">
              How We Source
            </h2>
            <p className="text-ink-600 leading-relaxed">
              Every artifact page links to its Wikipedia entry, Wikidata
              record, and the official collection pages of museums that hold
              the piece. Image attribution is on every photo. Sources are at
              the bottom of every artifact page. Where Wikipedia text is used
              under CC-BY-SA 3.0, we say so.
            </p>
            <p className="text-ink-600 leading-relaxed mt-4">
              Read more about our sourcing standards on our{" "}
              <Link
                href="/methodology"
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                Methodology page
              </Link>
              .
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Link
              href="/inspirations"
              className="group bg-ink-950 text-white rounded-xl p-6 hover:bg-ink-900 transition-colors"
            >
              <Sparkles className="h-6 w-6 text-primary-400 mb-3" />
              <h3 className="font-display text-lg font-bold mb-2">
                Start with a game or film
              </h3>
              <p className="text-sm text-ink-300 mb-3">
                Browse inspirations →
              </p>
              <span className="inline-flex items-center gap-1 text-sm text-primary-400 group-hover:gap-2 transition-all">
                Inspirations <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
            <Link
              href="/topics"
              className="group bg-primary-50 border border-primary-100 rounded-xl p-6 hover:bg-primary-100 transition-colors"
            >
              <Layers className="h-6 w-6 text-primary-600 mb-3" />
              <h3 className="font-display text-lg font-bold text-ink-900 mb-2">
                Start with a theme
              </h3>
              <p className="text-sm text-ink-600 mb-3">
                Cross-museum collections →
              </p>
              <span className="inline-flex items-center gap-1 text-sm text-primary-700 group-hover:gap-2 transition-all">
                Themes <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          </div>

          <div className="bg-ink-50 border border-ink-100 rounded-xl p-8">
            <Globe className="h-6 w-6 text-primary-500 mb-3" />
            <h2 className="font-display text-xl font-bold text-ink-900 mb-3">
              For everyone, in plain English
            </h2>
            <p className="text-ink-600 leading-relaxed">
              We write for the curious — not for academics. No paywalls, no
              required logins, no PhD required. If you can play{" "}
              <em>Black Myth</em>, you can read China Heritage.
            </p>
          </div>

          <div className="bg-primary-50 border border-primary-100 rounded-xl p-8 text-center">
            <h2 className="font-display text-2xl font-bold text-ink-900 mb-3">
              Spot an error? Want to suggest an artifact?
            </h2>
            <p className="text-ink-600 mb-4">
              We welcome corrections, source recommendations, and ideas for
              works to feature. Cultural accuracy matters to us.
            </p>
            <p className="text-primary-700 font-medium">
              contact@chinaheritageguide.com
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
