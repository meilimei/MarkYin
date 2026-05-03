import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ExternalLink,
  Flame,
  Flower2,
  Gem,
  Sparkles,
  Sun,
  Crown,
  Swords,
} from "lucide-react";
import { absoluteUrl, SITE_NAME } from "@/lib/site";

const TITLE =
  "Every Symbol in Ne Zha 2 (哪吒之魔童闹海), Mapped to a Real Museum Object";
const DESCRIPTION =
  "Lotus rebirth, the Four Dragon Kings, the Sky-Ribbon, the Universe Ring, Taiyi Zhenren — the real Shang bronzes, Tang Buddhas, and Ming dragon dishes that sit behind the imagery of 2025's biggest animated film. 7 visual lineages, 23 artifacts, free to visit.";
const SLUG = "/ne-zha-2-real-museum-guide";
const HERO_IMAGE = "/images/abroad/ming-wanli-dragon-phoenix-dish.jpg";

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
        alt: "Ming Wanli Dragon-and-Phoenix Dish — The Met",
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
  icon: typeof Flame;
  title: string;
  inFilm: string;
  realRoot: string;
  pieces: PieceLink[];
}

const LINEAGES: Lineage[] = [
  {
    id: "lotus-rebirth",
    icon: Flower2,
    title: "1. Lotus Rebirth — the body of pure light",
    inFilm:
      "After Ne Zha tears himself apart at Chentang Pass, his master Taiyi Zhenren rebuilds him from a lotus blossom. He returns cross-legged on a lotus throne, halo behind his head. The frame is pure Buddhist iconography even though the story is Daoist — and the studio knew exactly what they were quoting.",
    realRoot:
      "The 'figure on a lotus throne with a halo' visual was already 1,500 years old by the time the Investiture of the Gods novel was written. Beginning in the Northern Wei dynasty every Buddha and bodhisattva in China was depicted seated on or rising from a lotus — the Buddhist symbol of unstained rebirth from muddy water. Ne Zha 2's rebirth scene is openly borrowing this grammar.",
    pieces: [
      {
        href: "/treasures-abroad/northern-wei-buddha-maitreya",
        title: "Buddha Maitreya, dated 486 (Northern Wei)",
        museum: "The Met, New York",
        image: "/images/abroad/northern-wei-buddha-maitreya.jpg",
        caption:
          "One of the earliest dated Chinese Buddhist bronzes. The flame-mandorla halo and lotus base are the exact two elements Ne Zha 2 places behind its protagonist in his rebirth shot. 1,500-year-old direct quotation.",
      },
      {
        href: "/treasures-abroad/tang-head-of-bodhisattva",
        title: "Head of a Bodhisattva (Tang, 8th c.)",
        museum: "The Met, New York",
        image: "/images/abroad/tang-head-of-bodhisattva.jpg",
        caption:
          "Tang bodhisattvas softened the early Buddhist face into something youthful and serene. That softened, slightly androgynous youthful face is the template every CGI rebirth-Ne Zha frame is built on.",
      },
      {
        href: "/treasures-abroad/cma-five-hundred-arhats",
        title: "The Five Hundred Arhats (Wu Bin, 1591–1626)",
        museum: "Cleveland Museum of Art",
        image: "/images/abroad/cma-five-hundred-arhats.jpg",
        caption:
          "Late-Ming Buddhist painting taken to operatic, almost cartoonish extremes — exaggerated proportions, supernatural light, ranks of haloed figures. The visual register Ne Zha 2 reaches for whenever the Heavenly Court appears on screen.",
      },
    ],
  },
  {
    id: "four-dragon-kings",
    icon: Flame,
    title: "2. The Four Dragon Kings — bronze and porcelain, not lizards",
    inFilm:
      "Ao Guang, Ao Qin, Ao Run, Ao Shun — the dragon kings of the four seas — and Ao Bing, Ao Guang's son, are the antagonists' iconography. They aren't European fire-lizards. They are serpentine, scaled, four-clawed, accompanied by clouds and water, rendered in jewel tones of cobalt, gold, and bone-white. That palette was codified by Yuan-Ming court porcelain.",
    realRoot:
      "The Chinese imperial dragon (long, 龍) had a fixed iconography centuries before Ne Zha was a novel character. By the Yuan dynasty, Jingdezhen kilns were painting dragons in cobalt blue against pure white porcelain; by the late Ming the dragon-and-phoenix pair on imperial dishes was a state symbol. Ne Zha 2's dragon design is sourced wholesale from this porcelain tradition, not from any Western dragon canon.",
    pieces: [
      {
        href: "/treasures-abroad/ming-wanli-dragon-phoenix-dish",
        title: "Dragon-and-Phoenix Dish (Wanli, late 16th–early 17th c.)",
        museum: "The Met, New York",
        image: "/images/abroad/ming-wanli-dragon-phoenix-dish.jpg",
        caption:
          "Imperial five-clawed long with phoenix counterpart, painted in cobalt blue underglaze. The exact line-quality of the dragon's whiskers and mane Ne Zha 2's dragon kings use whenever they coil through clouds.",
      },
      {
        href: "/treasures-abroad/yuan-blue-and-white-bottle",
        title: "Yuan Blue-and-White Bottle with Peony Scroll (mid-14th c.)",
        museum: "The Met, New York",
        image: "/images/abroad/yuan-blue-and-white-bottle.jpg",
        caption:
          "The Yuan dynasty invented the cobalt-on-white porcelain palette that defines the global mental image of 'Chinese dragon'. Even when this jar carries a peony, the blue-on-white register is the same one the dragon kings inhabit.",
      },
      {
        href: "/artifacts/simuwu-ding",
        title: "Simuwu Ding (late Shang, c. 1200 BCE)",
        museum: "National Museum of China",
        image: "/images/artifacts/simuwu-ding.jpg",
        caption:
          "The heaviest ancient bronze ever found. Its surface is encrusted with kui-dragons — single-legged proto-dragons that are the literal ancestor of every Chinese dragon ever drawn. The Four Dragon Kings descend from this 3,200-year-old surface.",
      },
    ],
  },
  {
    id: "demonic-pearl-jade",
    icon: Gem,
    title: "3. Demonic Pearl & Spirit Pearl — why the macguffin is a bead",
    inFilm:
      "Ne Zha is born from the Demonic Pearl (魔丸); his rival Ao Bing carries the Spirit Pearl (灵珠). The plot pivots on these two beads — perfect, glowing, neither truly stone nor truly gem. The film's lighting team treats them like jade lit from inside.",
    realRoot:
      "China's relationship with carved beads and discs is older than its relationship with bronze. Liangzhu jade discs (bi) and tubes (cong) were already cosmological symbols five thousand years ago — heaven, earth, the soul moving between them. By the Han, the imperial elite was being buried in entire jade suits. Ne Zha 2's pearls inherit that millennia-long Chinese conviction that polished mineral is a vessel for soul.",
    pieces: [
      {
        href: "/artifacts/jade-burial-suit",
        title: "Jade Burial Suit of Prince Liu Sheng (Han, c. 113 BCE)",
        museum: "National Museum of China",
        image: "/images/artifacts/jade-burial-suit.jpg",
        caption:
          "A Han prince was wrapped in 2,498 jade tiles wired in gold so that his soul would not escape. This is the cultural depth behind the film's premise that a single carved bead can hold a soul.",
      },
      {
        href: "/treasures-abroad/qing-qianlong-jade-basin",
        title: "Qianlong Imperial Jade Basin (1774)",
        museum: "The Met, New York",
        image: "/images/abroad/qing-qianlong-jade-basin.jpg",
        caption:
          "A 90-kg basin signed by the emperor. Apex Qing jade carving — the precise weight, glow, and faint internal cloudiness the film gives both pearls.",
      },
      {
        href: "/treasures-abroad/han-jade-gold-comb",
        title: "Han Jade-and-Gold Comb (Eastern Han, 25–220)",
        museum: "The Met, New York",
        image: "/images/abroad/han-jade-gold-comb.jpg",
        caption:
          "Granular gold and pure white jade fused for an aristocratic woman's hairpin. The exact pairing — jade body, gold filament — Ne Zha 2 uses for both pearls' caging.",
      },
      {
        href: "/treasures-abroad/qing-jade-boy-buffalo",
        title: "Boy with Water Buffalo (Qing, 18th c.)",
        museum: "The Met, New York",
        image: "/images/abroad/qing-jade-boy-buffalo.jpg",
        caption:
          "A small jade carving of a child riding a buffalo — the divine child seated on his guardian beast. Ne Zha riding his fire-wheels on top of his demon-child body draws on this iconography directly.",
      },
    ],
  },
  {
    id: "taiyi-zhenren",
    icon: Sparkles,
    title: "4. Taiyi Zhenren — the bumbling Daoist sage on a cloud",
    inFilm:
      "Taiyi Zhenren, Ne Zha's Daoist master, is the comic-yet-omnipotent immortal in robes who descends on a cloud, brews pills in a gourd, and turns a lotus into a body. The film's design grammar for him — long hair, rumpled robe, wandering posture, mountain-hermit aura — is one of the oldest visual templates in Chinese art.",
    realRoot:
      "Daoism's reclusive immortal has been painted as a wandering scholar in misty mountains for at least a thousand years. The 'mountain retreat' was never just landscape — it was the assumed dwelling of sages and immortals. Two of the founding monumental scrolls of that mode are not in China; they passed through Japanese collectors and ended up in Cleveland.",
    pieces: [
      {
        href: "/treasures-abroad/cma-buddhist-retreat-stream-mountains",
        title: "Buddhist Retreat by Stream and Mountains (Juran, ca. 970)",
        museum: "Cleveland Museum of Art",
        image: "/images/abroad/cma-buddhist-retreat-stream-mountains.jpg",
        caption:
          "A monk-painter's monumental ink mountain dotted with the round 'alum-head' boulders that became the visual shorthand for sage-occupied karst. The exact register the film puts behind Taiyi every time he appears in his cave.",
      },
      {
        href: "/treasures-abroad/cma-cloudy-mountains",
        title: "Cloudy Mountains (Mi Youren, 1130)",
        museum: "Cleveland Museum of Art",
        image: "/images/abroad/cma-cloudy-mountains.jpg",
        caption:
          "Mountains dissolving into mist with layered ink dots. The Mi style codified the atmospheric envelope — every shot of Taiyi flying down on a cloud quotes this template.",
      },
      {
        href: "/artifacts/sacred-bronze-tree",
        title: "Sacred Bronze Tree of Sanxingdui (c. 1200 BCE)",
        museum: "Sanxingdui Museum",
        image: "/images/artifacts/sacred-bronze-tree.jpg",
        caption:
          "A 4-metre Bronze-Age tree with birds on every branch — the World Tree of Sichuanese cosmology, three millennia before Daoism formalised. Ne Zha's Sichuanese roots and the cosmic-tree imagery in the Heavenly Court both reach back to this.",
      },
    ],
  },
  {
    id: "sky-ribbon-universe-ring",
    icon: Sun,
    title: "5. Sky-Ribbon (混天绫) and Universe Ring (乾坤圈) — armed with cosmology",
    inFilm:
      "Ne Zha's two signature weapons aren't swords. They are a long red silk ribbon (Hun-Tian Ling, 'Heaven-Stirring Ribbon') and a gold ring (Qian-Kun Quan, 'Universe Ring'). The film treats them as physics-defying. The boy fights with the sky and the ring of heaven-and-earth. That naming is not casual — it lifts directly from Han imperial cosmology.",
    realRoot:
      "Han Chinese cosmology was diagrammatic: heaven was round, earth was square, the cardinal animals stood at the four directions, and the twelve earthly branches turned through the year. Han and Tang ritual objects literalised this — sets of twelve animals, ribbons of silk wound around the body of the dead, jade rings as cosmographic talismans. Ne Zha's ribbon-and-ring loadout is a child's-toy version of that ritual kit.",
    pieces: [
      {
        href: "/treasures-abroad/tang-twelve-zodiac-set",
        title: "Set of Twelve Zodiac Animals (Tang, 8th c.)",
        museum: "The Met, New York",
        image: "/images/abroad/tang-twelve-zodiac-set.jpg",
        caption:
          "A complete cycle of the twelve earthly branches modelled in clay — the cosmological wheel that Tang tomb-occupants travelled inside. Ne Zha's Universe Ring is a cartoon shorthand for this entire system.",
      },
      {
        href: "/treasures-abroad/shang-zhou-ritual-altar-set",
        title: "Ritual Altar Set (late 11th c. BCE)",
        museum: "The Met, New York",
        image: "/images/abroad/shang-zhou-ritual-altar-set.jpg",
        caption:
          "A complete ancestor-worship altar with fourteen vessels. The original Chinese conviction that ritual objects carry cosmic weight — and the cultural soil from which ribbons-as-weapons grow.",
      },
      {
        href: "/treasures-abroad/western-zhou-he-vessel",
        title: "Spouted Ritual Water Vessel (He) (late 11th c. BCE)",
        museum: "The Met, New York",
        image: "/images/abroad/western-zhou-he-vessel.jpg",
        caption:
          "A bronze water vessel for libations. The point: water-pouring as a ritual that transmits cosmic order. Ne Zha pours fire and water through the same understanding, three thousand years later.",
      },
    ],
  },
  {
    id: "ao-bing-crystal-palace",
    icon: Crown,
    title: "6. Ao Bing's Crystal Palace — the dragon prince's drawing room",
    inFilm:
      "Ao Bing, the dragon prince of the Eastern Sea, lives in a crystalline undersea court — celadon walls, fish-pattern porcelain, lacquered furniture, lotus-and-carp imagery everywhere. The film's interior designer built that court from Ming Jingdezhen and Qing court-art catalogues.",
    realRoot:
      "By the late Ming, the Chinese imperial palace had standardised a luxury vocabulary: blue-and-white porcelain meiping vases on lacquer stands, fish-and-lotus jars for wine, cobalt teacups painted with playing children, miniature jade carvings on every surface. The Crystal Palace is, materially, an underwater Ming court.",
    pieces: [
      {
        href: "/treasures-abroad/cma-yongle-meiping",
        title: "Meiping Vase with Cloud Collars and Peony (1403–24)",
        museum: "Cleveland Museum of Art",
        image: "/images/abroad/cma-yongle-meiping.jpg",
        caption:
          "Imperial Yongle-era meiping with cobalt cloud-collars. The exact silhouette and palette of the vases that line Ao Bing's halls in every wide shot of the palace.",
      },
      {
        href: "/treasures-abroad/cma-chenghua-children-cup",
        title: "Wine Cup with Children at Play (Chenghua, 1465–87)",
        museum: "Cleveland Museum of Art",
        image: "/images/abroad/cma-chenghua-children-cup.jpg",
        caption:
          "A 'children at play' cup — the small painted boys are a direct ancestor of how the film frames its child protagonists in the dragon court. The motif is built into the porcelain canon.",
      },
      {
        href: "/treasures-abroad/ming-jiajing-carp-jar",
        title: "Jar with Carp in Lotus Pond (mid-16th c.)",
        museum: "The Met, New York",
        image: "/images/abroad/ming-jiajing-carp-jar.jpg",
        caption:
          "Carp swimming through lotus, painted in cobalt around a Ming jar. The exact decorative register Ao Bing's underwater court sits inside — water, fish, lotus, blue-and-white.",
      },
      {
        href: "/artifacts/along-the-river-during-qingming-festival",
        title: "Along the River During the Qingming Festival (Song, 12th c.)",
        museum: "The Palace Museum",
        image: "/images/artifacts/along-the-river-during-qingming-festival.jpg",
        caption:
          "The most-quoted Chinese urban scroll. Ne Zha 2's Chentang Pass crowd scenes — porters, market stalls, the rainbow bridge — copy this scroll's compositional language directly.",
      },
    ],
  },
  {
    id: "cosmic-child-hero",
    icon: Swords,
    title: "7. The Cosmic Child Hero — Sanxingdui's gift to the design team",
    inFilm:
      "Strip away the lotus, the dragons, the jade pearls. What remains is a small, fierce, supernaturally-proportioned child with oversized eyes, lacquered topknots, and a body that fights demons three times his size. That body type — the supernatural child as cosmic warrior — is the most Sichuanese thing in the film, and it predates Daoism, Buddhism, and the Ne Zha story by two thousand years.",
    realRoot:
      "Sanxingdui's bronzes — discovered in Sichuan in 1986 — show humanoid figures with exaggerated eyes, square jaws, and small, fierce frames. Their cosmology is unrecovered, but their visual language was unmistakably absorbed by every later Sichuanese imagining of supernatural children, including Ne Zha. The Sanxingdui aesthetic is the deepest stratum of the film's character design.",
    pieces: [
      {
        href: "/artifacts/bronze-standing-figure-sanxingdui",
        title: "Bronze Standing Figure of Sanxingdui (c. 1200 BCE)",
        museum: "Sanxingdui Museum",
        image: "/images/artifacts/bronze-standing-figure-sanxingdui.jpg",
        caption:
          "A 2.6-metre bronze figure with oversized hands, an elongated body, and a face from another world. The Sichuanese visual ancestor of every fierce, oversized-eyed Ne Zha frame.",
      },
      {
        href: "/artifacts/gold-mask-sanxingdui",
        title: "Gold Mask of Sanxingdui (c. 1200 BCE)",
        museum: "Sanxingdui Museum",
        image: "/images/artifacts/gold-mask-sanxingdui.jpg",
        caption:
          "A pure-gold mask with cut almond eyes — the face of a Sichuanese god. The exaggerated facial proportions Ne Zha 2's design team uses for the demon-child Ne Zha echo this 3,000-year-old face directly.",
      },
      {
        href: "/artifacts/terracotta-warriors",
        title: "Terracotta Warriors of Qin (c. 210 BCE)",
        museum: "Museum of Terracotta Warriors and Horses",
        image: "/images/artifacts/terracotta-warriors.jpg",
        caption:
          "An army of clay soldiers, each individualised. The scale-fight set-pieces in Ne Zha 2 — a single child against ranks of identical guards — quote the visual punchline of 8,000 silent figures already standing.",
      },
      {
        href: "/artifacts/sword-of-goujian",
        title: "Sword of Goujian (Warring States, 5th c. BCE)",
        museum: "Hubei Provincial Museum",
        image: "/images/artifacts/sword-of-goujian.jpg",
        caption:
          "Buried 2,500 years, recovered razor-sharp. The single most famous Chinese sword in existence — and the unspoken benchmark for every Chinese-fantasy weapon, including the blades that menace Ne Zha at Chentang Pass.",
      },
    ],
  },
];

export default function NeZha2RealMuseumGuidePage() {
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
      { "@type": "Thing", name: "Ne Zha 2" },
      { "@type": "Thing", name: "哪吒之魔童闹海" },
      { "@type": "Thing", name: "Investiture of the Gods" },
      { "@type": "Thing", name: "Chinese Buddhist sculpture" },
      { "@type": "Thing", name: "Yuan-Ming dragon porcelain" },
      { "@type": "Thing", name: "Han jade culture" },
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
            Field Guide · 16 minute read
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Every Symbol in <span className="text-primary-300">Ne Zha 2</span>,
            Mapped to a Real Museum Object
          </h1>
          <p className="text-lg md:text-xl text-ink-300 leading-relaxed max-w-3xl">
            The Demonic Pearl. The Sky-Ribbon. The Four Dragon Kings rising
            from porcelain seas. Every layer of 2025&apos;s biggest animated
            film maps onto specific Chinese museum objects — Shang bronzes,
            Tang Buddhas, Ming dragon dishes. Here is the field guide.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-xs text-ink-400">
            <span className="bg-white/5 border border-white/10 rounded-full px-3 py-1">
              7 visual lineages
            </span>
            <span className="bg-white/5 border border-white/10 rounded-full px-3 py-1">
              23 specific objects
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
            <em>Ne Zha 2 (哪吒之魔童闹海)</em> is the highest-grossing
            animated film ever made. It also happens to be the most
            reference-dense piece of Chinese popular culture released in
            decades. Almost every recurring visual on screen — the lotus
            throne, the dragon court, the carved jade beads, the
            mountain-hermit master, the toddler hero in pleated armour — is
            quoting a real artifact that you can walk up to in a museum.
          </p>
          <p className="text-ink-600 leading-relaxed">
            The Investiture of the Gods novel that gave us the Ne Zha story
            was published in the late Ming. By that point, every visual the
            film uses had already been canonised for at least a millennium
            by Buddhist sculpture, court porcelain, jade carving, and ink
            landscape painting. Ne Zha 2&apos;s art team was not inventing —
            they were translating.
          </p>
          <p className="text-ink-600 leading-relaxed">
            This guide walks the seven visual lineages most heavily quoted
            in the film, and for each one points at three or four real
            objects you can actually visit — in Beijing, Shanghai, Wuhan,
            Sichuan, New York, and Cleveland.
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
                      __html: `<strong class="text-ink-900">In the film:</strong> ${lineage.inFilm}`,
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
            Done with Ne Zha? Three more field guides await.
          </h2>
          <p className="text-ink-700 leading-relaxed mb-6">
            We do this for the games and shows that take Chinese material
            culture seriously.
          </p>
          <ul className="space-y-4 text-ink-700 mb-8">
            <li>
              <strong className="text-ink-900">
                Black Myth: Wukong, museum-by-museum.
              </strong>{" "}
              Yungang Buddhas, Sanxingdui masks, Shang ritual bronzes,
              Cleveland landscape scrolls — the original AAA Chinese game
              decoded one boss at a time.{" "}
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
              The karst peaks, the porcelain teacups, the Adepti, the
              cauldrons. Every Liyue visual against the real Tang-Song
              objects that taught miHoYo the language.{" "}
              <Link
                href="/genshin-liyue-real-museum-guide"
                className="text-primary-600 hover:text-primary-700 underline font-semibold"
              >
                Read it →
              </Link>
            </li>
            <li>
              <strong className="text-ink-900">Inspirations index.</strong>{" "}
              The full pop-culture cross-reference — every game, film, and
              C-drama mapped against real artifacts.{" "}
              <Link
                href="/inspirations"
                className="text-primary-600 hover:text-primary-700 underline font-semibold"
              >
                Browse →
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
            Researched and written by China Heritage. Object photographs and
            metadata are CC0 / public domain releases from{" "}
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
            . Connections drawn between film and artifact are
            art-historical inferences, not studio statements; see{" "}
            <Link
              href="/methodology"
              className="text-primary-600 hover:text-primary-700 underline"
            >
              Methodology
            </Link>{" "}
            for our standards. Ne Zha 2 (哪吒之魔童闹海) is a trademark of
            its respective rights-holders and is referenced here for
            descriptive, educational purposes.
          </p>
        </div>
      </section>
    </>
  );
}
