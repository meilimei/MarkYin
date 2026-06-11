import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ExternalLink,
  Eye,
  Flame,
  HelpCircle,
  Landmark,
  Mountain,
  Sparkles,
} from "lucide-react";
import AdBanner from "@/components/AdBanner";
import { absoluteUrl, SITE_NAME } from "@/lib/site";

const TITLE =
  "Every Visual in Wuchang: Fallen Feathers, Mapped to Real Sichuan Heritage";
const DESCRIPTION =
  "Sanxingdui bronze figures, Jinsha's Sun Bird, and the Leshan Giant Buddha - the real Sichuan heritage behind Wuchang: Fallen Feathers.";
const SLUG = "/wuchang-fallen-feathers-real-museum-guide";
const HERO_IMAGE = "/images/artifacts/gold-mask-sanxingdui.jpg";

export const metadata: Metadata = {
  title: `${TITLE} | ${SITE_NAME}`,
  description: DESCRIPTION,
  alternates: { canonical: SLUG },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: absoluteUrl(SLUG),
    type: "article",
    images: [
      {
        url: HERO_IMAGE,
        alt: "Gold Mask of Sanxingdui, a key Sichuan heritage reference for Wuchang: Fallen Feathers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [HERO_IMAGE],
  },
};

interface PieceLink {
  href: string;
  title: string;
  museum: string;
  image: string;
  caption: string;
}

interface Lineage {
  id: string;
  icon: typeof Eye;
  title: string;
  inGame: string;
  realRoot: string;
  pieces: PieceLink[];
}

const LINEAGES: Lineage[] = [
  {
    id: "sanxingdui-body",
    icon: Eye,
    title: "1. Sanxingdui bodies - Sichuan myth has its own anatomy",
    inGame:
      "Wuchang's strongest visual move is not generic dark fantasy. Its supernatural bodies feel elongated, ceremonial, and regionally specific: figures that stand too still, faces that read as masks, hands held as if gripping a missing ritual object.",
    realRoot:
      "That body language belongs to Sanxingdui, the Bronze Age culture of the Chengdu Plain. Its figures do not look like Shang bronzes from the Yellow River world. They speak a different ritual language - one that makes Sichuan feel ancient, separate, and uncanny.",
    pieces: [
      {
        href: "/artifacts/bronze-standing-figure-sanxingdui",
        title: "Bronze Standing Figure of Sanxingdui",
        museum: "Sanxingdui Museum, Sichuan",
        image: "/images/artifacts/bronze-standing-figure-sanxingdui.jpg",
        caption:
          "A 2.6-meter bronze figure with enormous hands and an unrecovered ritual object. This is the deepest visual ancestor for Wuchang's solemn, transformed bodies.",
      },
      {
        href: "/artifacts/gold-mask-sanxingdui",
        title: "Gold Mask of Sanxingdui",
        museum: "Sanxingdui Museum, Sichuan",
        image: "/images/artifacts/gold-mask-sanxingdui.jpg",
        caption:
          "Paper-thin gold, almond eyes, and a face meant to cover another face. Wuchang's obsession with identity, corruption, and altered bodies lands naturally in this mask tradition.",
      },
    ],
  },
  {
    id: "jinsha-sun",
    icon: Flame,
    title: "2. Jinsha's Sun Bird - gold, rotation, and rebirth",
    inGame:
      "The game's feather imagery turns the body into a cycle: wound, corruption, mutation, and possible rebirth. That cycle feels modern, but Sichuan archaeology already had a compact symbol for birds, sun, and cosmic turning.",
    realRoot:
      "Jinsha succeeded Sanxingdui as a major ancient Shu center. Its most famous object is the Sun Bird Gold Foil: four birds circling a radiant sun, later adopted as the official logo of China Cultural Heritage. It is small enough to hold in the hand, but large enough to summarize a civilization.",
    pieces: [
      {
        href: "/artifacts/jinsha-sun-bird-gold-foil",
        title: "Sun Bird Gold Foil of Jinsha",
        museum: "Jinsha Site Museum, Chengdu",
        image:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80",
        caption:
          "Four birds circle a twelve-rayed sun. For Wuchang readers, it turns feather imagery away from pure horror and back toward ancient Shu ideas of cosmic motion.",
      },
    ],
  },
  {
    id: "leshan-mountain-buddha",
    icon: Mountain,
    title: "3. Leshan and Mount Emei - Buddhism at mountain scale",
    inGame:
      "Wuchang's temple ruins and vertical landscapes work because they treat the mountain itself as sacred architecture. The game does not need to invent that scale. Sichuan already has it.",
    realRoot:
      "The Leshan Giant Buddha was carved into a cliff between 713 and 803. At 71 meters high, it turns a river confluence into a Buddhist body. Together with Mount Emei, it gives Sichuan one of the clearest examples of landscape, pilgrimage, engineering, and belief fused into a single visual system.",
    pieces: [
      {
        href: "/artifacts/leshan-giant-buddha",
        title: "Leshan Giant Buddha",
        museum: "Leshan Giant Buddha Scenic Area",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80",
        caption:
          "A 71-meter Tang-dynasty Maitreya carved into red sandstone. When Wuchang makes cliffs feel like shrines and shrines feel like terrain, this is the real heritage logic behind it.",
      },
    ],
  },
  {
    id: "sichuan-route",
    icon: Landmark,
    title: "4. The Sichuan route - from screen mood to real places",
    inGame:
      "The best Wuchang follow-up is not another lore video. It is a route: Chengdu for Jinsha, Guanghan for Sanxingdui, Leshan for the Giant Buddha, and the broader Emei landscape for the mountain-temple atmosphere.",
    realRoot:
      "These are not isolated references. They are a compact Sichuan heritage circuit. A player can move from Bronze Age ritual to Tang Buddhism in the same region, and suddenly the game's geography stops feeling like a fantasy backdrop and starts reading as an edited memory of real places.",
    pieces: [
      {
        href: "/museums/sanxingdui-museum",
        title: "Sanxingdui Museum",
        museum: "Guanghan, Sichuan",
        image: "/images/museums/sanxingdui-museum.jpg",
        caption:
          "Start here for bronze masks, the standing figure, the sacred tree, and the visual shock that made ancient Shu famous worldwide.",
      },
      {
        href: "/museums/jinsha-site-museum",
        title: "Jinsha Site Museum",
        museum: "Chengdu, Sichuan",
        image: "/images/museums/jinsha-site-museum.jpg",
        caption:
          "The best next stop after Sanxingdui: smaller in scale, more urban, and essential for understanding how ancient Shu imagery survived in Chengdu.",
      },
      {
        href: "/museums/leshan-giant-buddha-scenic-area",
        title: "Leshan Giant Buddha Scenic Area",
        museum: "Leshan, Sichuan",
        image: "/images/museums/leshan-giant-buddha.jpg",
        caption:
          "The real-world destination for Wuchang's mountain-Buddhist atmosphere: cliff, river, pilgrimage, and monumental sculpture in one place.",
      },
    ],
  },
];

const FAQS = [
  {
    q: "What real Chinese heritage is behind Wuchang: Fallen Feathers?",
    a: "Wuchang: Fallen Feathers is a fictional dark-fantasy game, but its strongest heritage connections run through Sichuan: Sanxingdui bronze figures and gold masks, the Jinsha Sun Bird, and the Leshan Giant Buddha landscape.",
  },
  {
    q: "Why does Sanxingdui matter for Wuchang?",
    a: "Sanxingdui gives Sichuan a visual language that is older and stranger than the usual imperial China imagery: elongated bronze bodies, enormous eyes, gold masks, and ritual objects whose exact meanings remain debated. That makes it a natural bridge for Wuchang's transformed bodies and haunted shrine imagery.",
  },
  {
    q: "Can I visit the real places connected to Wuchang?",
    a: "Yes. Sanxingdui Museum is in Guanghan, Jinsha Site Museum is in Chengdu, and the Leshan Giant Buddha Scenic Area is in Leshan. They form a realistic Sichuan heritage route for travelers who want to move from the game's atmosphere to real archaeology and Buddhist landscape.",
  },
  {
    q: "Is Wuchang historically accurate?",
    a: "No game like Wuchang should be treated as a documentary. It uses the final years of the Ming dynasty as a creative frame and blends that with fantasy. The useful question is not whether every scene is accurate, but which real objects and places taught the game its visual grammar.",
  },
];

export default function WuchangFallenFeathersRealMuseumGuidePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: TITLE,
    description: DESCRIPTION,
    image: absoluteUrl(HERO_IMAGE),
    mainEntityOfPage: absoluteUrl(SLUG),
    datePublished: "2026-06-11",
    dateModified: "2026-06-11",
    author: { "@type": "Organization", name: SITE_NAME },
    publisher: { "@type": "Organization", name: SITE_NAME },
    about: [
      { "@type": "Thing", name: "Wuchang: Fallen Feathers" },
      { "@type": "Thing", name: "Sanxingdui" },
      { "@type": "Thing", name: "Jinsha Site" },
      { "@type": "Thing", name: "Leshan Giant Buddha" },
      { "@type": "Thing", name: "Sichuan heritage" },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="relative overflow-hidden bg-gradient-to-b from-ink-950 via-ink-900 to-primary-950 text-white">
        <div className="absolute inset-0 opacity-20">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={HERO_IMAGE}
            alt="Gold Mask of Sanxingdui"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/90 via-ink-900/70 to-primary-950/60" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <p className="text-xs uppercase tracking-widest text-primary-300 font-semibold mb-4">
            Field Guide | 11 minute read
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Every Visual in{" "}
            <span className="text-primary-300">Wuchang: Fallen Feathers</span>,
            Mapped to Real Sichuan Heritage
          </h1>
          <p className="text-lg md:text-xl text-ink-200 leading-relaxed max-w-3xl">
            The game is set in the dying Ming world, but its deepest visual
            charge comes from older Sichuan: Sanxingdui bronze bodies, Jinsha
            gold, and the mountain-scale Buddhism of Leshan.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
              <p className="font-display text-3xl font-bold text-primary-300">
                4
              </p>
              <p className="text-xs text-ink-300 mt-1">visual lineages</p>
            </div>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
              <p className="font-display text-3xl font-bold text-primary-300">
                7
              </p>
              <p className="text-xs text-ink-300 mt-1">objects and sites</p>
            </div>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
              <p className="font-display text-3xl font-bold text-primary-300">
                3
              </p>
              <p className="text-xs text-ink-300 mt-1">Sichuan stops</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-ink max-w-none">
          <p className="text-lg text-ink-700 leading-relaxed">
            <em>Wuchang: Fallen Feathers</em> works because it refuses to
            flatten China into a generic fantasy skin. Its best images are
            regional. The mountains, masks, shrines, and transformed bodies
            point toward Sichuan, and Sichuan has one of the richest
            archaeological backstories in the world.
          </p>
          <p className="text-ink-600 leading-relaxed">
            This guide follows the route a curious player should take after
            finishing the game: first ancient Shu, then Jinsha, then Leshan.
            It treats the game as a gateway into real museums and sites, not
            as a replacement for them.
          </p>
          <p className="text-ink-600 leading-relaxed">
            The connections below are art-historical inferences. They do not
            claim that every asset was copied from a single object. The point
            is stronger: Wuchang's world becomes legible once you know the
            material culture that Sichuan already carries.
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <AdBanner slot="field-guide-mid" format="horizontal" />
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {LINEAGES.map((lineage) => (
            <article key={lineage.id} id={lineage.id}>
              <header className="mb-8">
                <div className="inline-flex items-center gap-2 text-primary-600 mb-3">
                  <lineage.icon className="h-5 w-5" />
                  <span className="text-xs font-semibold uppercase tracking-widest">
                    Visual lineage
                  </span>
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-ink-900 mb-4 leading-tight">
                  {lineage.title}
                </h2>
                <div className="prose prose-ink max-w-none">
                  <p className="text-ink-700 leading-relaxed">
                    <strong className="text-ink-900">In the game:</strong>{" "}
                    {lineage.inGame}
                  </p>
                  <p className="text-ink-700 leading-relaxed">
                    <strong className="text-ink-900">The real root:</strong>{" "}
                    {lineage.realRoot}
                  </p>
                </div>
              </header>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {lineage.pieces.map((piece) => (
                  <Link
                    key={piece.href}
                    href={piece.href}
                    className="group block bg-white border border-ink-100 rounded-2xl overflow-hidden hover:shadow-lg hover:border-primary-200 transition-all"
                  >
                    <div className="aspect-[4/3] bg-ink-900 overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={piece.image}
                        alt={piece.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <p className="text-xs font-semibold text-primary-600 uppercase tracking-wider mb-1">
                        {piece.museum}
                      </p>
                      <h3 className="font-display text-lg font-bold text-ink-900 mb-2 group-hover:text-primary-700 transition-colors">
                        {piece.title}
                      </h3>
                      <p className="text-sm text-ink-600 leading-relaxed">
                        {piece.caption}
                      </p>
                      <p className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary-600 group-hover:gap-2 transition-all">
                        Open the full page
                        <ArrowRight className="h-4 w-4" />
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-ink-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-ink-900 mb-4">
            What to read after Wuchang
          </h2>
          <p className="text-ink-700 leading-relaxed mb-6">
            If the game pulled you into Sichuan, keep the path narrow and
            useful:
          </p>
          <ul className="space-y-4 text-ink-700 mb-8">
            <li>
              <strong className="text-ink-900">Start with ancient Shu.</strong>{" "}
              Read our{" "}
              <Link
                href="/topics/ancient-shu-sichuan-heritage"
                className="text-primary-600 hover:text-primary-700 underline font-semibold"
              >
                Ancient Shu and Sichuan Heritage
              </Link>{" "}
              theme for the bigger map across Sanxingdui, Jinsha, and Leshan.
            </li>
            <li>
              <strong className="text-ink-900">
                Compare Sanxingdui to Shang bronzes.
              </strong>{" "}
              The contrast explains why Sichuan Bronze Age objects feel so
              different from the central-plains ritual tradition.{" "}
              <Link
                href="/compare/sanxingdui-vs-shang-bronzes"
                className="text-primary-600 hover:text-primary-700 underline font-semibold"
              >
                Open the comparison
              </Link>
              .
            </li>
            <li>
              <strong className="text-ink-900">
                Keep the game-to-museum trail going.
              </strong>{" "}
              Try the companion{" "}
              <Link
                href="/black-myth-real-museum-guide"
                className="text-primary-600 hover:text-primary-700 underline font-semibold"
              >
                Black Myth: Wukong field guide
              </Link>{" "}
              for a broader map of Buddhist sculpture, bronzes, porcelain, and
              jade across Chinese games.
            </li>
          </ul>
          <Link
            href="/field-guides"
            className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-full font-semibold transition-colors"
          >
            Browse all field guides
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="bg-white py-14 border-t border-ink-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-ink-900 mb-5 flex items-center gap-2">
            <HelpCircle className="h-6 w-6 text-primary-500" />
            Frequently asked questions
          </h2>
          <div className="space-y-3">
            {FAQS.map((faq) => (
              <details
                key={faq.q}
                className="group bg-white border border-ink-100 rounded-xl px-5 py-4 open:shadow-sm transition-shadow"
              >
                <summary className="cursor-pointer list-none flex items-start justify-between gap-3">
                  <span className="font-display text-base font-semibold text-ink-900">
                    {faq.q}
                  </span>
                  <span className="text-ink-400 group-open:rotate-45 transition-transform select-none text-xl leading-none mt-0.5">
                    +
                  </span>
                </summary>
                <p className="text-ink-600 leading-relaxed text-sm mt-3">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 border-t border-ink-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-ink-500 mb-3 uppercase tracking-widest font-semibold">
            About this guide
          </p>
          <p className="text-ink-600 leading-relaxed">
            Researched and written by China Heritage. Object pages cite the
            relevant museum and heritage sources, including{" "}
            <a
              href="https://www.sxd.cn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 underline inline-flex items-center gap-1"
            >
              Sanxingdui Museum
              <ExternalLink className="h-3 w-3" />
            </a>
            ,{" "}
            <a
              href="https://www.jinshasitemuseum.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 underline inline-flex items-center gap-1"
            >
              Jinsha Site Museum
              <ExternalLink className="h-3 w-3" />
            </a>
            , and{" "}
            <a
              href="https://whc.unesco.org/en/list/779/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 underline inline-flex items-center gap-1"
            >
              UNESCO
              <ExternalLink className="h-3 w-3" />
            </a>
            . Connections drawn between game and heritage object are
            art-historical inferences; see{" "}
            <Link
              href="/methodology"
              className="text-primary-600 hover:text-primary-700 underline"
            >
              Methodology
            </Link>{" "}
            for our standards.
          </p>
        </div>
      </section>
    </>
  );
}
