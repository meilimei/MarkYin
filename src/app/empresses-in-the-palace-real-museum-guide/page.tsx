import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ExternalLink,
  Crown,
  Gem,
  Wine,
  Mountain,
  Flower2,
  Building2,
  ScrollText,
} from "lucide-react";
import { absoluteUrl, SITE_NAME } from "@/lib/site";

const TITLE =
  "Every Visual in Empresses in the Palace (甄嬛传), Mapped to a Real Museum Object";
const DESCRIPTION =
  "The dragon robes, the jade hairpins, the cobalt tea service, the Buddhist devotion behind the throne — every recurring visual in the Qing palace mega-drama maps onto specific museum pieces. 7 visual lineages, 22 artifacts, free to visit.";
const SLUG = "/empresses-in-the-palace-real-museum-guide";
const HERO_IMAGE = "/images/abroad/qing-zhanyinbao-portrait.jpg";

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
        alt: "Portrait of Zhanyinbao (Qing imperial portraiture) — The Met",
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
  caption?: string;
}

interface Lineage {
  id: string;
  icon: typeof Crown;
  title: string;
  inShow: string;
  realRoot: string;
  pieces: PieceLink[];
}

const LINEAGES: Lineage[] = [
  {
    id: "dragon-robes",
    icon: Crown,
    title: "1. The Dragon Robe — what Yongzheng actually looked like on duty",
    inShow:
      "Empresses in the Palace shows the Yongzheng emperor and his concubines on screen for 76 episodes — and almost every appearance is a costume change. Yellow for the emperor. Coral-and-cobalt for senior consorts. Dragons coiling around the chest. Phoenixes paired with dragons on the empress's gowns. The wardrobe team didn't invent the rules; they followed a centuries-old protocol.",
    realRoot:
      "Qing court dress was codified in the 1759 Illustrations of Imperial Ritual Paraphernalia. Yellow was reserved for the emperor; the dragon-and-phoenix pair was reserved for emperor-and-empress; the five-clawed dragon could not appear on a non-imperial body. That codification was itself the inheritance of Ming porcelain iconography — cobalt-blue dragons on imperial dishes were already state symbols a hundred years earlier.",
    pieces: [
      {
        href: "/treasures-abroad/qing-zhanyinbao-portrait",
        title: "Portrait of the Imperial Bodyguard Zhanyinbao (mid-18th c.)",
        museum: "The Met, New York",
        image: "/images/abroad/qing-zhanyinbao-portrait.jpg",
        caption:
          "An exact-period Qing portrait — Yongzheng-Qianlong era — of an imperial bodyguard in court robe. The face, the posture, the gold-thread embroidery: the photographic source for every static court frame in the show.",
      },
      {
        href: "/treasures-abroad/ming-wanli-dragon-phoenix-dish",
        title: "Dragon-and-Phoenix Dish (Wanli, late 16th–early 17th c.)",
        museum: "The Met, New York",
        image: "/images/abroad/ming-wanli-dragon-phoenix-dish.jpg",
        caption:
          "Imperial five-clawed dragon paired with phoenix — the exact iconographic pair the show reserves for the empress. The dish predates Yongzheng by 130 years; the symbolism is what he inherited.",
      },
      {
        href: "/treasures-abroad/yuan-blue-and-white-bottle",
        title: "Yuan Blue-and-White Bottle (mid-14th c.)",
        museum: "The Met, New York",
        image: "/images/abroad/yuan-blue-and-white-bottle.jpg",
        caption:
          "The cobalt-on-white palette that became the global mental image of Chinese imperial luxury. The empress's gown borders, the painted screens behind her throne — the same chromatic register, four centuries later.",
      },
    ],
  },
  {
    id: "jade-adornment",
    icon: Gem,
    title: "2. Concubine in Jade — the body as jewel-case",
    inShow:
      "Every consort in the show wears jade. Hairpins, earrings, finger-rings, the long fingernail-protectors that flag rank, the carved pendants that drift over the chest. Jade is both decoration and code: it identifies your rank, your faction, the emperor's current favour. Lose your jade and you have lost the court.",
    realRoot:
      "Chinese jade culture is older than Chinese bronze. By the Han dynasty, the imperial elite was buried in entire suits of jade. By the Tang, polished agate and jade had become luxury vessels. By the Qing, the Qianlong court was carving jade boulders weighing nearly a hundred kilograms. The hairpins on a Yongzheng consort sat at the top of three thousand years of mineral status.",
    pieces: [
      {
        href: "/treasures-abroad/han-jade-gold-comb",
        title: "Han Jade-and-Gold Comb (Eastern Han, 25–220)",
        museum: "The Met, New York",
        image: "/images/abroad/han-jade-gold-comb.jpg",
        caption:
          "An aristocratic woman's hairpin: a slip of pure white jade, granular gold across the back. The direct ancestor of every Qing 钿子 hairpiece on screen — and the design DNA the show's stylists drew from.",
      },
      {
        href: "/treasures-abroad/qing-jade-boy-buffalo",
        title: "Boy with Water Buffalo (Qing, 18th c.)",
        museum: "The Met, New York",
        image: "/images/abroad/qing-jade-boy-buffalo.jpg",
        caption:
          "A small jade carving from the exact Qianlong period the show steps into. The genre — small jade keepsake of an auspicious motif — is what the consorts in the drama would have actually owned.",
      },
      {
        href: "/treasures-abroad/qing-qianlong-jade-basin",
        title: "Qianlong Imperial Jade Basin (1774)",
        museum: "The Met, New York",
        image: "/images/abroad/qing-qianlong-jade-basin.jpg",
        caption:
          "A 90-kg basin signed by the emperor. The peak of Qing imperial jade carving — the same workshop tradition that produced every hairpin and pendant the imperial women on screen wear.",
      },
      {
        href: "/artifacts/beast-head-agate-cup",
        title: "Beast-Head Agate Cup (Tang)",
        museum: "Shaanxi History Museum",
        image: "/images/artifacts/beast-head-agate-cup.jpg",
        caption:
          "A drinking horn carved from a single agate boulder, gold-mounted. The Persian rhyton form, naturalised into Chinese luxury — the deeper Silk Road root of the precious-stone vocabulary the Yongzheng court still used.",
      },
    ],
  },
  {
    id: "tea-service",
    icon: Wine,
    title: "3. The Daily Tea — porcelain on the empress's table",
    inShow:
      "Tea is the engine of palace politics in this show. A poisoning happens in a teacup. A reconciliation happens over a pot. Eunuchs ferry trays through corridors. The cups, the saucers, the tall blue-and-white vases on the side tables — every object on screen has a real prototype in a Ming-Qing kiln archive.",
    realRoot:
      "By the early Qing, Jingdezhen was producing porcelain in industrial quantities for the imperial household. The shapes the show uses — the meiping vase on the side cabinet, the small wine cup with painted children, the round-bellied storage jar — were already standard Ming forms by 1500. The Yongzheng imperial workshop did not invent them; it perfected them.",
    pieces: [
      {
        href: "/treasures-abroad/cma-chenghua-children-cup",
        title: "Wine Cup with Children at Play (Chenghua, 1465–87)",
        museum: "Cleveland Museum of Art",
        image: "/images/abroad/cma-chenghua-children-cup.jpg",
        caption:
          "A small Ming cup with children playing in a garden. The exact silhouette of the cups the show puts in the empress's hands when she receives a guest. Chenghua-style cups remained a Yongzheng-court obsession.",
      },
      {
        href: "/treasures-abroad/cma-yongle-meiping",
        title: "Meiping Vase with Cloud Collars (Yongle, 1403–24)",
        museum: "Cleveland Museum of Art",
        image: "/images/abroad/cma-yongle-meiping.jpg",
        caption:
          "An imperial Ming meiping. The exact vase silhouette and cobalt cloud-collar pattern the show puts on every side cabinet, every corridor niche, every gift between concubines.",
      },
      {
        href: "/treasures-abroad/ming-jiajing-carp-jar",
        title: "Jar with Carp in Lotus Pond (Jiajing, mid-16th c.)",
        museum: "The Met, New York",
        image: "/images/abroad/ming-jiajing-carp-jar.jpg",
        caption:
          "A Ming wine jar painted with carp swimming through lotus. The decorative register — water creatures, plant motifs, cobalt narrative — the empress's tea service quietly inhabits.",
      },
    ],
  },
  {
    id: "painted-walls",
    icon: Mountain,
    title: "4. Painted Walls — what hung in the imperial study",
    inShow:
      "Behind every confrontation in the show, a painted screen. Behind every poetry session, a hanging scroll. Behind every plot twist, a landscape — usually a misty Song-style mountain that signals the literati education the consort is performing. The set decorators were quoting a fixed Qing-court visual canon.",
    realRoot:
      "By the Qing, the imperial collection had absorbed almost every great painting still circulating. Yongzheng and Qianlong were obsessive collectors and copyists. The walls of the Forbidden City were hung with — or with copies of — Song landscapes, Yuan ink paintings, and late-Ming genre scenes. Many of those originals later left China and now hang in Cleveland.",
    pieces: [
      {
        href: "/treasures-abroad/cma-buddhist-retreat-stream-mountains",
        title: "Buddhist Retreat by Stream and Mountains (Juran, ca. 970)",
        museum: "Cleveland Museum of Art",
        image: "/images/abroad/cma-buddhist-retreat-stream-mountains.jpg",
        caption:
          "A 10th-century monumental ink mountain that defined the literati landscape canon for the next thousand years. Exactly the kind of painting Yongzheng would have hung in his study — and the kind the show drops behind every poetry-circle scene.",
      },
      {
        href: "/treasures-abroad/cma-cloudy-mountains",
        title: "Cloudy Mountains (Mi Youren, 1130)",
        museum: "Cleveland Museum of Art",
        image: "/images/abroad/cma-cloudy-mountains.jpg",
        caption:
          "Mountains dissolving into mist. The Mi-style ink dot is the visual register the show borrows whenever a scene wants to whisper: this consort reads, this consort paints, this consort cannot be dismissed.",
      },
      {
        href: "/treasures-abroad/cma-knickknack-peddler",
        title: "The Knickknack Peddler (Li Song, ca. 1210)",
        museum: "Cleveland Museum of Art",
        image: "/images/abroad/cma-knickknack-peddler.jpg",
        caption:
          "A Song genre painting of a peddler surrounded by women and children. The visual ancestor of every interior crowd-shot in the drama — the empress receiving a gift, the consorts gathered around an object.",
      },
    ],
  },
  {
    id: "buddhist-devotion",
    icon: Flower2,
    title: "5. Concubines at Prayer — Buddhist devotion at the Qing court",
    inShow:
      "When a consort cannot win in the open court, she goes to the small Buddhist hall behind her quarters and prays. The show treats these scenes with extreme visual care: oil-lamps, low altars, small bronze Buddhas, the recitation of sutras. Buddhist devotion is the emotional engine of the second half of the drama.",
    realRoot:
      "The Qing court was deeply Buddhist. The Yongzheng emperor was a serious Chan practitioner; his mother and consorts were patrons of Tibetan and Han Buddhist temples. The small bronzes, the lacquered altars, the painted sutra-cabinet doors all sat at the end of fifteen hundred years of Chinese Buddhist sculpture and painting. Every devotional frame in the show inherits that long lineage.",
    pieces: [
      {
        href: "/treasures-abroad/northern-wei-buddha-maitreya",
        title: "Buddha Maitreya, dated 486 (Northern Wei)",
        museum: "The Met, New York",
        image: "/images/abroad/northern-wei-buddha-maitreya.jpg",
        caption:
          "One of the earliest dated Chinese Buddhist bronzes. The flame-mandorla halo and lotus base set the visual grammar a Yongzheng-era consort kneeling at her private altar would have recognised instantly.",
      },
      {
        href: "/treasures-abroad/tang-head-of-bodhisattva",
        title: "Head of a Bodhisattva (Tang, 8th c.)",
        museum: "The Met, New York",
        image: "/images/abroad/tang-head-of-bodhisattva.jpg",
        caption:
          "The softened, youthful, slightly androgynous Tang bodhisattva face — the Guanyin the consorts in the show are praying to. This face has been the standard for a thousand years.",
      },
      {
        href: "/treasures-abroad/cma-five-hundred-arhats",
        title: "The Five Hundred Arhats (Wu Bin, 1591–1626)",
        museum: "Cleveland Museum of Art",
        image: "/images/abroad/cma-five-hundred-arhats.jpg",
        caption:
          "Late-Ming Buddhist painting taken to operatic, almost cartoonish heights. The visual register a wealthy consort would have hung in her devotion hall, signalling both piety and taste.",
      },
    ],
  },
  {
    id: "ancestral-bronzes",
    icon: Building2,
    title: "6. Ancestor Bronzes — why Yongzheng still made offerings to Shang ghosts",
    inShow:
      "Twice in the show the emperor performs an ancestral rite — bronze vessels arranged on an altar, wine poured, incense lit. The drama treats these scenes as state ceremony, not personal piety. The continuity is the point: the Qing emperor is borrowing the legitimacy of three thousand years of Chinese ritual.",
    realRoot:
      "The Chinese ancestral rite is the longest-running unbroken ritual in human history. It begins with Shang oracle-bone divinations, codifies under Western Zhou with the ding-and-gui set, and is still being performed by Qing emperors three millennia later. The vessels in the show — round-bodied dings, spouted hes, square-mouth altars — quote the Bronze Age vocabulary directly.",
    pieces: [
      {
        href: "/treasures-abroad/shang-zhou-ritual-altar-set",
        title: "Ritual Altar Set (late 11th c. BCE)",
        museum: "The Met, New York",
        image: "/images/abroad/shang-zhou-ritual-altar-set.jpg",
        caption:
          "A complete ancestor-worship altar with fourteen vessels — ding, gui, jue, zhi, the entire Bronze Age sacrificial kit. The visual ancestor of every imperial-rite tableau the Qing court still performed.",
      },
      {
        href: "/artifacts/simuwu-ding",
        title: "Simuwu Ding (late Shang, c. 1200 BCE)",
        museum: "National Museum of China",
        image: "/images/artifacts/simuwu-ding.jpg",
        caption:
          "The heaviest ancient Chinese bronze — 832.84 kg of cast metal honouring a queen-consort named Wu. The deep historical proof that imperial women already had monumental ritual bronzes named for them, three thousand years before the show.",
      },
      {
        href: "/artifacts/da-ke-ding",
        title: "Da Ke Ding (Western Zhou, 10th c. BCE)",
        museum: "Shanghai Museum",
        image: "/images/artifacts/da-ke-ding.jpg",
        caption:
          "An imperial cooking-vessel with a 290-character inscription about a court official's promotion. The exact ritual-and-political object the Qing court was citing every time a court promotion was performed on screen.",
      },
    ],
  },
  {
    id: "city-beyond-walls",
    icon: ScrollText,
    title: "7. The City Beyond the Walls — Qingming as palace fantasy",
    inShow:
      "The empress never leaves the Forbidden City. Her one window onto the rest of China is a painted scroll on a wall — a market scene, a river, a bridge of porters and donkeys. The show uses these scrolls as a quiet metaphor: the woman who runs the empire has never seen it. The scroll she stares at is the most-quoted Chinese painting ever made.",
    realRoot:
      "<em>Along the River During the Qingming Festival</em> is the most-copied Chinese painting in history. By the Qing, palace workshops had produced multiple imperial copies of the original Song scroll. Yongzheng, Qianlong, and their consorts stared at versions of this exact painting. The Tang aristocratic objects — sancai horses, zodiac figurines — were the deeper soil from which Qing imperial life still drew its metaphors.",
    pieces: [
      {
        href: "/artifacts/along-the-river-during-qingming-festival",
        title: "Along the River During the Qingming Festival (Northern Song, 12th c.)",
        museum: "The Palace Museum",
        image: "/images/artifacts/along-the-river-during-qingming-festival.jpg",
        caption:
          "The scroll. 5.28 metres of 12th-century urban panorama — the painting Qing emperors and their consorts stared at, the painting the show puts behind every set when a consort dreams of escape.",
      },
      {
        href: "/treasures-abroad/tang-sancai-horse",
        title: "Sancai-Glazed Horse (Tang, 8th c.)",
        museum: "The Met, New York",
        image: "/images/abroad/tang-sancai-horse.jpg",
        caption:
          "A Tang aristocratic tomb-horse, glazed in three colours. The exact ancestor of the Qing equestrian-luxury vocabulary — and the deeper layer of cosmopolitan court life the Qing imperial collection was steeped in.",
      },
      {
        href: "/treasures-abroad/tang-twelve-zodiac-set",
        title: "Set of Twelve Zodiac Animals (Tang, 8th c.)",
        museum: "The Met, New York",
        image: "/images/abroad/tang-twelve-zodiac-set.jpg",
        caption:
          "A complete cycle of the twelve earthly branches. The cosmological wheel inside which a Qing imperial woman's life — pregnancy, illness, promotion, exile — was always being read. The show's astrology subplots descend from this kit.",
      },
    ],
  },
];

export default function EmpressesInThePalaceRealMuseumGuidePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: TITLE,
    description: DESCRIPTION,
    image: absoluteUrl(HERO_IMAGE),
    mainEntityOfPage: absoluteUrl(SLUG),
    datePublished: "2026-05-03",
    dateModified: "2026-05-03",
    author: { "@type": "Organization", name: SITE_NAME },
    publisher: { "@type": "Organization", name: SITE_NAME },
    about: [
      { "@type": "Thing", name: "Empresses in the Palace" },
      { "@type": "Thing", name: "甄嬛传" },
      { "@type": "Thing", name: "Yongzheng emperor" },
      { "@type": "Thing", name: "Qing imperial dress" },
      { "@type": "Thing", name: "Jingdezhen porcelain" },
      { "@type": "Thing", name: "Chinese jade carving" },
      { "@type": "Thing", name: "Forbidden City" },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-imperial-950 via-ink-800 to-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <p className="text-xs uppercase tracking-widest text-primary-300 font-semibold mb-4">
            Field Guide · 15 minute read
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Every Visual in{" "}
            <span className="text-primary-300">Empresses in the Palace</span>,
            Mapped to a Real Museum Object
          </h1>
          <p className="text-lg md:text-xl text-ink-300 leading-relaxed max-w-3xl">
            The dragon robes. The jade hairpins. The cobalt tea cups in
            every poisoning scene. Every recurring visual in 2011&apos;s
            Qing palace mega-drama maps onto specific museum pieces — most
            of them sitting in Beijing, Shanghai, Cleveland, and New York.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-xs text-ink-400">
            <span className="bg-white/5 border border-white/10 rounded-full px-3 py-1">
              7 visual lineages
            </span>
            <span className="bg-white/5 border border-white/10 rounded-full px-3 py-1">
              22 specific objects
            </span>
            <span className="bg-white/5 border border-white/10 rounded-full px-3 py-1">
              5 museums on 3 continents
            </span>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-paper py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-ink max-w-none">
          <p className="text-lg text-ink-700 leading-relaxed">
            <em>Empresses in the Palace (甄嬛传)</em> is the most
            internationally-watched Qing palace drama ever made. Tens of
            millions of non-Chinese viewers know what a Yongzheng-era
            consort&apos;s gown looks like — many of them have never read
            a single line about the Qing dynasty in a textbook.
          </p>
          <p className="text-ink-600 leading-relaxed">
            The show&apos;s set designers were rigorous. Almost every
            recurring visual on screen — the imperial yellow robe, the
            jade hairpin, the blue-and-white wine cup, the literati
            landscape behind the throne — comes from a real museum object.
            Many of those objects left China during the late Qing and now
            sit in Cleveland or New York. They are quietly the missing
            half of the show.
          </p>
          <p className="text-ink-600 leading-relaxed">
            This guide walks the seven visual lineages most heavily quoted
            by the production design, and for each one points at three or
            four real objects you can actually visit.
          </p>
        </div>
      </section>

      {/* Lineages */}
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
                  <p
                    className="text-ink-700 leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: `<strong class="text-ink-900">In the show:</strong> ${lineage.inShow}`,
                    }}
                  />
                  <p
                    className="text-ink-700 leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: `<strong class="text-ink-900">The real root:</strong> ${lineage.realRoot}`,
                    }}
                  />
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
                      {piece.caption && (
                        <p className="text-sm text-ink-600 leading-relaxed">
                          {piece.caption}
                        </p>
                      )}
                      <p className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary-600 group-hover:gap-2 transition-all">
                        Read the full story
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

      {/* Cross-link CTA */}
      <section className="bg-ink-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-ink-900 mb-4">
            Done with the palace? Three more field guides await.
          </h2>
          <p className="text-ink-700 leading-relaxed mb-6">
            We do this for the games, films, and dramas that take Chinese
            material culture seriously.
          </p>
          <ul className="space-y-4 text-ink-700 mb-8">
            <li>
              <strong className="text-ink-900">
                Black Myth: Wukong, museum-by-museum.
              </strong>{" "}
              Yungang Buddhas, Sanxingdui masks, Shang ritual bronzes,
              Cleveland landscape scrolls.{" "}
              <Link
                href="/black-myth-real-museum-guide"
                className="text-primary-600 hover:text-primary-700 underline font-semibold"
              >
                Read it →
              </Link>
            </li>
            <li>
              <strong className="text-ink-900">
                Genshin Impact — Liyue, mapped.
              </strong>{" "}
              The karst peaks, porcelain teacups, the Adepti, the
              cauldrons.{" "}
              <Link
                href="/genshin-liyue-real-museum-guide"
                className="text-primary-600 hover:text-primary-700 underline font-semibold"
              >
                Read it →
              </Link>
            </li>
            <li>
              <strong className="text-ink-900">
                Ne Zha 2 (哪吒之魔童闹海), decoded.
              </strong>{" "}
              Lotus rebirth, the Four Dragon Kings, the Sky-Ribbon —
              every symbol in 2025&apos;s biggest animated film.{" "}
              <Link
                href="/ne-zha-2-real-museum-guide"
                className="text-primary-600 hover:text-primary-700 underline font-semibold"
              >
                Read it →
              </Link>
            </li>
          </ul>
          <p className="text-ink-700 leading-relaxed">
            For the full inventory of Chinese masterpieces in Western
            museums, see our{" "}
            <Link
              href="/treasures-abroad"
              className="text-primary-600 hover:text-primary-700 underline font-semibold"
            >
              Treasures Abroad index
            </Link>
            .
          </p>
        </div>
      </section>

      {/* About / sources */}
      <section className="bg-white py-12 border-t border-ink-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-ink-500 mb-3 uppercase tracking-widest font-semibold">
            About this guide
          </p>
          <p className="text-ink-600 leading-relaxed">
            Researched and written by China Heritage. Object photographs
            and metadata are CC0 / public domain releases from{" "}
            <a
              href="https://www.metmuseum.org/art/collection/search-the-collection"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 underline inline-flex items-center gap-1"
            >
              The Met Open Access
              <ExternalLink className="h-3 w-3" />
            </a>
            ,{" "}
            <a
              href="https://www.clevelandart.org/open-access"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 underline inline-flex items-center gap-1"
            >
              Cleveland Open Access
              <ExternalLink className="h-3 w-3" />
            </a>
            , and{" "}
            <a
              href="https://commons.wikimedia.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 underline inline-flex items-center gap-1"
            >
              Wikimedia Commons
              <ExternalLink className="h-3 w-3" />
            </a>
            . Connections drawn between drama and artifact are
            art-historical inferences, not studio statements; see{" "}
            <Link
              href="/methodology"
              className="text-primary-600 hover:text-primary-700 underline"
            >
              Methodology
            </Link>{" "}
            for our standards. Empresses in the Palace (甄嬛传) is a
            trademark of its respective rights-holders and is referenced
            here for descriptive, educational purposes.
          </p>
        </div>
      </section>
    </>
  );
}
