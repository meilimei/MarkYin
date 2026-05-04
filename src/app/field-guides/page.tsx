import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Film, Gamepad2, Sparkles, Tv } from "lucide-react";
import { fieldGuides, getFieldGuideJsonLd } from "@/data/fieldGuides";
import { absoluteUrl, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: `Field Guides — Pop Culture Mapped to Real Chinese Artifacts | ${SITE_NAME}`,
  description:
    "Long-form China Heritage field guides mapping Black Myth: Wukong, Genshin Impact's Liyue, Ne Zha 2, and Empresses in the Palace to real museum objects.",
  alternates: { canonical: "/field-guides" },
  openGraph: {
    title: "China Heritage Field Guides",
    description:
      "Games, films, and Chinese dramas decoded through real museum objects.",
    url: absoluteUrl("/field-guides"),
    type: "website",
    images: [
      {
        url: "/images/abroad/ming-wanli-dragon-phoenix-dish.jpg",
        alt: "Ming dragon-and-phoenix dish used as a China Heritage field guide hero image",
      },
    ],
  },
};

const mediumIcons = {
  game: Gamepad2,
  film: Film,
  tv: Tv,
};

export default function FieldGuidesPage() {
  const jsonLd = getFieldGuideJsonLd();
  const totalObjects = fieldGuides.reduce((sum, guide) => sum + guide.objects, 0);
  const totalLineages = fieldGuides.reduce(
    (sum, guide) => sum + guide.lineages,
    0,
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden bg-gradient-to-b from-ink-950 via-imperial-950 to-primary-950 text-white">
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23eebb99' fill-opacity='0.45'%3E%3Cpath d='M40 40c0-11.046 8.954-20 20-20V0c-22.091 0-40 17.909-40 40s17.909 40 40 40v-20c-11.046 0-20-8.954-20-20zM0 40c0-11.046 8.954-20 20-20V0C8.954 0 0 8.954 0 20v20zm0 0c0 11.046 8.954 20 20 20v20C8.954 80 0 71.046 0 60V40z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-primary-200 mb-6">
              <BookOpen className="h-3.5 w-3.5" />
              Long-form museum guides
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-6">
              The real artifacts behind the worlds you already love
            </h1>
            <p className="text-lg text-ink-200 leading-relaxed max-w-2xl">
              Each field guide takes one global fandom — a game, film, or
              drama — and maps its recurring visuals to the real Chinese
              museum objects behind them. No vague inspiration lists: every
              claim points to a specific artifact you can visit or study.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-3 max-w-xl text-center">
              <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                <p className="font-display text-3xl font-bold text-primary-300">
                  {fieldGuides.length}
                </p>
                <p className="text-xs text-ink-300 mt-1">Guides</p>
              </div>
              <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                <p className="font-display text-3xl font-bold text-primary-300">
                  {totalLineages}
                </p>
                <p className="text-xs text-ink-300 mt-1">Lineages</p>
              </div>
              <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                <p className="font-display text-3xl font-bold text-primary-300">
                  {totalObjects}
                </p>
                <p className="text-xs text-ink-300 mt-1">Objects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-primary-600 font-semibold mb-2">
                Start here
              </p>
              <h2 className="font-display text-3xl font-bold text-ink-900">
                All field guides
              </h2>
            </div>
            <Link
              href="/inspirations"
              className="inline-flex items-center gap-1 text-sm font-semibold text-primary-600 hover:text-primary-700"
            >
              Browse all inspirations <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
            {fieldGuides.map((guide) => {
              const Icon = mediumIcons[guide.medium];
              return (
                <Link
                  key={guide.slug}
                  href={guide.href}
                  className="group block rounded-3xl overflow-hidden bg-white border border-ink-100 shadow-sm hover:shadow-xl hover:border-primary-200 transition-all"
                >
                  <div className="grid sm:grid-cols-5 h-full">
                    <div className="sm:col-span-2 min-h-[260px] bg-ink-900 relative overflow-hidden">
                      <img
                        src={guide.image}
                        alt={guide.title}
                        loading="lazy"
                        className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
                      <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-xs font-semibold text-ink-800 px-2.5 py-1 rounded-full">
                        <Icon className="h-3.5 w-3.5" />
                        {guide.medium === "tv" ? "TV" : guide.medium === "game" ? "Game" : "Film"}
                      </div>
                    </div>
                    <div className="sm:col-span-3 p-6 flex flex-col">
                      <p className="text-xs text-ink-400 mb-2">
                        {guide.year} · {guide.readTime} · {guide.objects} objects
                      </p>
                      <h3 className="font-display text-2xl font-bold text-ink-900 leading-tight mb-2 group-hover:text-primary-700 transition-colors">
                        {guide.shortTitle}
                      </h3>
                      <p className="text-sm font-semibold text-primary-600 mb-3">
                        {guide.subtitle}
                      </p>
                      <p className="text-sm text-ink-600 leading-relaxed mb-4 flex-1">
                        {guide.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-5">
                        {guide.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs bg-ink-50 border border-ink-100 text-ink-600 rounded-full px-2.5 py-1"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary-600 group-hover:gap-2 transition-all">
                        Read the field guide <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 border-t border-ink-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-primary-50 px-3 py-1 rounded-full text-xs font-semibold text-primary-700 mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              Why these guides exist
            </div>
            <h2 className="font-display text-3xl font-bold text-ink-900 mb-3">
              Pop culture is the gateway. Museums are the destination.
            </h2>
            <p className="text-ink-600 leading-relaxed max-w-3xl mx-auto">
              Millions of people meet Chinese heritage first through games,
              animation, and dramas. These guides make that curiosity useful:
              they translate a familiar visual into a real object, a real
              dynasty, and a real museum collection.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-sm text-ink-600">
            <div className="rounded-2xl bg-ink-50 border border-ink-100 p-5">
              <strong className="block text-ink-900 mb-2">Specific objects</strong>
              Every guide points to named artifacts, not generic mood boards.
            </div>
            <div className="rounded-2xl bg-ink-50 border border-ink-100 p-5">
              <strong className="block text-ink-900 mb-2">Museum routes</strong>
              Most objects link to full records with current museum locations.
            </div>
            <div className="rounded-2xl bg-ink-50 border border-ink-100 p-5">
              <strong className="block text-ink-900 mb-2">Reusable research</strong>
              The same objects connect across games, films, dramas, and themes.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
