import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ExternalLink,
  Eye,
  Hammer,
  Mountain,
  Sparkles,
  Crown,
  Flame,
  Gem,
} from "lucide-react";
import { absoluteUrl, SITE_NAME } from "@/lib/site";

const TITLE =
  "Every Visual in Black Myth: Wukong, Mapped to a Real Museum You Can Visit";
const DESCRIPTION =
  "The Buddha statues, bronze cauldrons, jade ornaments, and Tang ceramics that inspired Black Myth: Wukong are real — and most of them are in museums you can visit. A 7-lineage field guide.";
const SLUG = "/black-myth-real-museum-guide";

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
        url: "/images/abroad/bm-yixian-luohan.jpg",
        alt: "Yixian luohan, Liao dynasty, British Museum",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/abroad/bm-yixian-luohan.jpg"],
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
  icon: typeof Eye;
  title: string;
  inGame: string;
  realRoot: string;
  pieces: PieceLink[];
}

const LINEAGES: Lineage[] = [
  {
    id: "buddhas",
    icon: Sparkles,
    title: "1. The Buddhas — Yungang, Longmen, and the body of compassion",
    inGame:
      "Many of Black Myth: Wukong's most awe-inspiring environments are temple chambers carved straight into living rock — gilded Buddhas stories tall, faces softened by a millennium of incense smoke. The Game Science art team has said publicly that they 3D-scanned and photographed the Yungang and Longmen Grottoes for these scenes.",
    realRoot:
      "From the 5th century onward, Buddhism re-shaped the Chinese landscape one cliff face at a time. Yungang (Shanxi) and Longmen (Henan) are the two greatest survivals of that era — but you can also meet their cousins in museums around the world, where individual heads and figures travelled in the early 20th century.",
    pieces: [
      {
        href: "/treasures-abroad/northern-wei-buddha-maitreya",
        title: "Buddha Maitreya, dated 486 CE",
        museum: "The Met, New York",
        image: "/images/abroad/northern-wei-buddha-maitreya.jpg",
        caption:
          "One of only a handful of dated 5th-century Chinese Buddhist sculptures in the world. Same Northern Wei generation as the early Yungang colossi.",
      },
      {
        href: "/treasures-abroad/tang-head-of-bodhisattva",
        title: "Head of a Bodhisattva, 7th c",
        museum: "The Met, New York",
        image: "/images/abroad/tang-head-of-bodhisattva.jpg",
        caption:
          "A Tang-dynasty head, almost certainly removed from a cave-temple wall. The half-smile, slim eyes, and downcast gaze are the same vocabulary you see on Black Myth's bodhisattva NPCs.",
      },
      {
        href: "/treasures-abroad/bm-sui-amitabha-buddha",
        title: "Marble Amitabha, dated 585 CE",
        museum: "British Museum, London",
        image: "/images/abroad/bm-sui-amitabha-buddha.jpg",
        caption:
          "Almost six metres tall. The Sui dynasty re-unified China and built monumental Buddhas like this one as state propaganda — the same imperial Buddhist scale Black Myth evokes in its hub temples.",
      },
      {
        href: "/treasures-abroad/bm-yixian-luohan",
        title: "Yixian Luohan, 11th c",
        museum: "British Museum, London",
        image: "/images/abroad/bm-yixian-luohan.jpg",
        caption:
          "A life-size glazed-ceramic arhat, one of about ten survivors from a single Hebei cave. Their hyper-realistic faces feel closer to portrait sculpture than icon — exactly the unsettling realism Black Myth uses on its monk-bosses.",
      },
    ],
  },
  {
    id: "bronzes",
    icon: Hammer,
    title: "2. Ritual bronzes — the cauldron at the centre of every shrine",
    inGame:
      "Across the game's chapters, you keep seeing the same prop: a three- or four-legged bronze cauldron, surface crawling with horned beasts and spirals, looming behind altars and bosses. That is the ding (鼎) — and in real Chinese history, the ding wasn't decoration. It was the political symbol of the state itself.",
    realRoot:
      "From around 1500 BCE through the early empires, bronze ritual vessels were the technology of Chinese kingship. The Shang and Zhou kings cast them in clay piece-moulds; their surfaces wear the taotie animal mask that has decorated everything from Sanxingdui to Black Myth.",
    pieces: [
      {
        href: "/artifacts/simuwu-ding",
        title: "Simuwu Ding (832 kg)",
        museum: "National Museum of China, Beijing",
        image: "/images/artifacts/simuwu-ding.jpg",
        caption:
          "The heaviest ancient bronze ever found. When Black Myth shows a colossal cauldron in a ritual hall, this is the silhouette its art team is reaching for.",
      },
      {
        href: "/artifacts/da-ke-ding",
        title: "Da Ke Ding, Western Zhou",
        museum: "Shanghai Museum",
        image: "/images/artifacts/da-ke-ding.jpg",
        caption:
          "290 characters of inscription on the inside — a primary historical document for early Chinese government, packaged as a sacred vessel.",
      },
      {
        href: "/treasures-abroad/shang-zhou-ritual-altar-set",
        title: "Western Zhou Ritual Altar Set",
        museum: "The Met, New York",
        image: "/images/abroad/shang-zhou-ritual-altar-set.jpg",
        caption:
          "A complete fourteen-piece altar group as it would have stood in a Western Zhou ancestral temple. The closest a Western museum can get you to a real Bronze Age ritual.",
      },
      {
        href: "/treasures-abroad/cma-shang-fangyou",
        title: "Shang square fangyou",
        museum: "Cleveland Museum of Art",
        image: "/images/abroad/cma-shang-fangyou.jpg",
        caption:
          "The square-section bronze body wraps in a band of crested birds against a spiral leiwen ground — the precise visual grammar of Black Myth's ritual props.",
      },
    ],
  },
  {
    id: "sanxingdui",
    icon: Eye,
    title: "3. Sanxingdui — the bronze masks that look like aliens",
    inGame:
      "Black Myth's most uncanny imagery — bulging eyes, ear-stretching grins, towering figures wrapped in geometric ornament — points at one specific source: Sanxingdui. Game Science has acknowledged the influence directly, and you can recognise specific masks recurring in shrine motifs and supernatural set-pieces.",
    realRoot:
      "In 1986 a brick factory crew in Sichuan accidentally dug into a 3,000-year-old sacrificial pit and pulled out objects that did not match anything in the existing canon of Chinese art. Sanxingdui rewrote the textbook. Three decades on, fresh excavations from 2019 onward keep adding pieces.",
    pieces: [
      {
        href: "/artifacts/bronze-standing-figure-sanxingdui",
        title: "Bronze Standing Figure",
        museum: "Sanxingdui Museum, Sichuan",
        image: "/images/artifacts/bronze-standing-figure-sanxingdui.jpg",
        caption:
          "2.6 m tall, hands clasped around an absent ritual object. The exaggerated eyes and silhouette are the genetic ancestor of Black Myth's most enigmatic supernatural designs.",
      },
      {
        href: "/artifacts/gold-mask-sanxingdui",
        title: "Sanxingdui Gold Mask",
        museum: "Sanxingdui Museum, Sichuan",
        image: "/images/artifacts/gold-mask-sanxingdui.jpg",
        caption:
          "Hammered gold leaf, paper-thin, with the same elongated eyes as the bronzes. Excavated 2021. The Black Myth art direction explicitly references this style of mask in altar set-dressing.",
      },
      {
        href: "/artifacts/sacred-bronze-tree",
        title: "Sacred Bronze Tree",
        museum: "Sanxingdui Museum, Sichuan",
        image: "/images/artifacts/sacred-bronze-tree.jpg",
        caption:
          "A bronze cosmic tree nearly four metres tall, with birds perched on each tier. The same world-tree iconography you see in Black Myth's spiritual realms.",
      },
    ],
  },
  {
    id: "sancai",
    icon: Flame,
    title: "4. Tang sancai — the colour-glazed afterlife",
    inGame:
      "The pack horses, camels, and tomb-guard beasts that line Black Myth's roadways and mausoleums are stylised descendants of a real Tang-dynasty mortuary tradition. Their characteristic colour palette — amber, green, cream, splashed and flowing — is the signature of sancai (三彩) glazed earthenware.",
    realRoot:
      "Tang aristocrats were buried with whole staffs of glazed-ceramic figures: civil officials, military officials, exotic horses, two-humped camels, fearsome guardian kings, and the twelve zodiac animals to keep the cosmic clock ticking. Several intact assemblages survive — most exported in the 1920s rail-laying boom near Luoyang.",
    pieces: [
      {
        href: "/treasures-abroad/tang-sancai-horse",
        title: "Tang Sancai Horse",
        museum: "The Met, New York",
        image: "/images/abroad/tang-sancai-horse.jpg",
        caption:
          "The flagship Tang horse: muscular Ferghana stallion, glazed white-amber-green. The single most-photographed Chinese tomb figure in the West.",
      },
      {
        href: "/treasures-abroad/bm-liu-tingxun-tomb-figures",
        title: "Liu Tingxun Tomb Group, 728 CE",
        museum: "British Museum, London",
        image: "/images/abroad/bm-liu-tingxun-tomb-figures.jpg",
        caption:
          "A complete 13-figure assemblage from one Tang general's tomb. This is what Black Myth's tomb scenes are aiming for — a spirit-court ready to escort the dead into eternity.",
      },
      {
        href: "/treasures-abroad/tang-twelve-zodiac-set",
        title: "Tang Twelve-Zodiac Set",
        museum: "The Met, New York",
        image: "/images/abroad/tang-twelve-zodiac-set.jpg",
        caption:
          "Twelve human-bodied figures, each topped with the head of a zodiac animal. Tang ritual cosmology rendered as ceramic — direct ancestors of every fantastical animal-headed Chinese boss in modern media.",
      },
    ],
  },
  {
    id: "paintings",
    icon: Mountain,
    title: "5. The painted scrolls — landscape, horses, and atmosphere",
    inGame:
      "Black Myth's wide environmental shots — misty peaks, lone scholars on bridges, horses against pale paper — are not just screenshots. They are camera blocking that has been borrowed, almost frame-for-frame, from a thousand years of Chinese landscape painting. The art team explicitly cites Song-dynasty hanging scrolls as reference.",
    realRoot:
      "By the 11th century, Chinese painters had perfected ink-on-silk landscape and animal portrait techniques that the West would take eight more centuries to invent. Many of the most important surviving works are not in China — they left during the dispersal that followed the fall of the Qing.",
    pieces: [
      {
        href: "/treasures-abroad/night-shining-white",
        title: "Night-Shining White (Han Gan, ca. 750)",
        museum: "The Met, New York",
        image: "/images/abroad/night-shining-white.jpg",
        caption:
          "The single most famous Chinese horse painting in the world — a tethered Tang stallion screaming against the post. The visual ancestor of every wild-horse scene in Chinese cinema and games.",
      },
      {
        href: "/treasures-abroad/cma-buddhist-retreat-stream-mountains",
        title: "Buddhist Retreat by Stream and Mountains (Juran, ca. 970)",
        museum: "Cleveland Museum of Art",
        image: "/images/abroad/cma-buddhist-retreat-stream-mountains.jpg",
        caption:
          "A monk-painter's vision of mountains so vast the human hermitage at the foot is almost invisible. Black Myth's environmental scale is reaching for exactly this register.",
      },
      {
        href: "/treasures-abroad/cma-cloudy-mountains",
        title: "Cloudy Mountains (Mi Youren, 1130)",
        museum: "Cleveland Museum of Art",
        image: "/images/abroad/cma-cloudy-mountains.jpg",
        caption:
          "Mountains dissolving into mist with layered ink dots. The 'Mi style' set the template for atmospheric landscape — and Black Myth's most painterly skybox shots run on the same engine.",
      },
    ],
  },
  {
    id: "porcelain",
    icon: Crown,
    title: "6. Imperial porcelain — what the gods drink from",
    inGame:
      "Whenever a courtly NPC offers Wukong wine or tea, look at the cup. The decorative vocabulary is unmistakably Yuan and Ming imperial porcelain — the most globally consequential Chinese craft tradition, and the one that taught the world the words 'china' and 'porcelain'.",
    realRoot:
      "From the early 14th century, the Jingdezhen kilns turned underglaze cobalt and overglaze enamel into the most prestigious commodity on the Eurasian trade routes. The masterpieces of the tradition are scattered across the world's museums; many of the very best left through the Beijing dealer markets in the 1900s–1930s.",
    pieces: [
      {
        href: "/treasures-abroad/bm-david-vases",
        title: "The David Vases, dated 1351",
        museum: "British Museum, London",
        image: "/images/abroad/bm-david-vases.jpg",
        caption:
          "The pair of dated Yuan blue-and-white temple vases that single-handedly redrew the chronology of Chinese porcelain. Without them, art historians would still be off by 50 years.",
      },
      {
        href: "/treasures-abroad/cma-yongle-meiping",
        title: "Yongle 'Sweet White' Meiping",
        museum: "Cleveland Museum of Art",
        image: "/images/abroad/cma-yongle-meiping.jpg",
        caption:
          "A milky white Yongle imperial vase so pure the emperor used these vessels for state ritual. Decoration is incised so faintly it only appears when light catches it.",
      },
      {
        href: "/treasures-abroad/cma-chenghua-children-cup",
        title: "Chenghua doucai children-at-play cup",
        museum: "Cleveland Museum of Art",
        image: "/images/abroad/cma-chenghua-children-cup.jpg",
        caption:
          "Two inches tall and arguably the most expensive class of Chinese porcelain ever made — a 2014 sale of a sister cup hit HK$281 million.",
      },
    ],
  },
  {
    id: "jade",
    icon: Gem,
    title: "7. Jade — the stone that lets a body live forever",
    inGame:
      "The pendants and amulets Black Myth's NPCs wear, the carved buckles on Wukong's robe, the small ritual objects that drop from defeated enemies — these draw from China's longest unbroken decorative tradition: jade carving, 7,000 years and counting.",
    realRoot:
      "More valuable than gold, more spiritually potent than any gemstone, jade was the material of immortality. The Chinese aristocratic body was lapped in it — at the wrist, at the waist, at the funeral. Some of the most extraordinary jade survivals are imperial Qing pieces, scattered to Western museums after the Boxer Rebellion and the fall of the dynasty.",
    pieces: [
      {
        href: "/artifacts/jade-burial-suit",
        title: "Jade Burial Suit (Han)",
        museum: "Hebei Provincial Museum",
        image: "/images/artifacts/jade-burial-suit.jpg",
        caption:
          "A full-body suit of 2,498 jade tiles sewn with gold wire, made to encase a Han prince in spiritual armour for eternity.",
      },
      {
        href: "/treasures-abroad/qing-qianlong-jade-basin",
        title: "Qianlong Jade Basin (1774)",
        museum: "The Met, New York",
        image: "/images/abroad/qing-qianlong-jade-basin.jpg",
        caption:
          "A 90-kg jade basin signed by the Qianlong emperor himself. The peak of imperial jade carving, only made possible by the Qing conquest of the Khotan jade fields.",
      },
      {
        href: "/treasures-abroad/han-jade-gold-comb",
        title: "Han Jade-and-Gold Comb",
        museum: "The Met, New York",
        image: "/images/abroad/han-jade-gold-comb.jpg",
        caption:
          "Granulated gold tracery framing a slip of pale jade — the moment Han China started speaking the visual language of the Silk Road.",
      },
    ],
  },
];

export default function BlackMythRealMuseumGuidePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: TITLE,
    description: DESCRIPTION,
    image: absoluteUrl("/images/abroad/bm-yixian-luohan.jpg"),
    mainEntityOfPage: absoluteUrl(SLUG),
    datePublished: "2026-05-03",
    dateModified: "2026-05-03",
    author: { "@type": "Organization", name: SITE_NAME },
    publisher: { "@type": "Organization", name: SITE_NAME },
    about: [
      { "@type": "Thing", name: "Black Myth: Wukong" },
      { "@type": "Thing", name: "Chinese art history" },
      { "@type": "Thing", name: "Buddhist sculpture" },
      { "@type": "Thing", name: "Sanxingdui" },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-ink-900 via-ink-800 to-ink-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <p className="text-xs uppercase tracking-widest text-primary-300 font-semibold mb-4">
            Field Guide · 12 minute read
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Every Visual in{" "}
            <span className="text-primary-300">Black Myth: Wukong</span>,
            Mapped to a Real Museum You Can Visit
          </h1>
          <p className="text-lg md:text-xl text-ink-300 leading-relaxed max-w-3xl">
            The Buddhist colossi, the bronze cauldrons, the painted scrolls,
            the porcelain wine cups — the visual world of Black Myth was
            built from real Chinese artifacts, and most of them are sitting
            in museums you can walk into. Here is the field guide.
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
            When <em>Black Myth: Wukong</em> launched in August 2024 it did
            something no Chinese game had done before: it pulled tens of
            millions of Western players, with no prior context for Chinese
            material culture, into a world made out of it. Within a week,
            search queries like &ldquo;black myth wukong real temples&rdquo;
            and &ldquo;sanxingdui mask in black myth&rdquo; were spiking
            globally on Google.
          </p>
          <p className="text-ink-600 leading-relaxed">
            Game Science was unusually open about the research. Their art
            teams spent years scanning real sites — Yungang, Longmen, and
            dozens of regional temples — and built the game&apos;s asset
            library on top of that documentation. The result is the most
            historically literate AAA game ever made about Chinese
            civilisation.
          </p>
          <p className="text-ink-600 leading-relaxed">
            This guide walks the seven visual lineages most heavily quoted
            in the game, and for each one points at three or four real
            objects you can actually visit — in Beijing, Shanghai, New York,
            Cleveland, or London. No single museum holds the whole story;
            the diaspora of Chinese art across the 20th century guarantees
            that.
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

      {/* Pilgrimage CTA */}
      <section className="bg-ink-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-ink-900 mb-4">
            Planning a Black Myth pilgrimage?
          </h2>
          <p className="text-ink-700 leading-relaxed mb-6">
            If the game lit a fuse, you have three realistic itineraries:
          </p>
          <ul className="space-y-4 text-ink-700">
            <li>
              <strong className="text-ink-900">A China loop.</strong> The
              Sanxingdui Museum (Sichuan), Yungang Grottoes (Shanxi), and
              Longmen Grottoes (Henan) are all reachable on a 7–10 day rail
              circuit out of Beijing. The{" "}
              <Link
                href="/museums/sanxingdui-museum"
                className="text-primary-600 hover:text-primary-700 underline"
              >
                Sanxingdui Museum
              </Link>{" "}
              alone is worth the flight.
            </li>
            <li>
              <strong className="text-ink-900">A US east-coast loop.</strong>{" "}
              The Met (New York) and the Cleveland Museum of Art are 8 hours
              apart by car, and between them they hold most of the Chinese
              objects flagged in this guide. Cleveland is free entry every
              day.
            </li>
            <li>
              <strong className="text-ink-900">A London single.</strong> The
              British Museum collection alone covers Buddhist sculpture,
              Yuan porcelain, and Tang ceramics — see our{" "}
              <Link
                href="/treasures-abroad?museum=british-museum"
                className="text-primary-600 hover:text-primary-700 underline"
              >
                British Museum guide
              </Link>{" "}
              for a self-guided one-day route.
            </li>
          </ul>
          <p className="text-ink-700 leading-relaxed mt-6">
            Already finished Black Myth? Try the companion field guides:{" "}
            <Link
              href="/genshin-liyue-real-museum-guide"
              className="text-primary-600 hover:text-primary-700 underline font-semibold"
            >
              Every Liyue Visual in Genshin Impact
            </Link>
            ,{" "}
            <Link
              href="/ne-zha-2-real-museum-guide"
              className="text-primary-600 hover:text-primary-700 underline font-semibold"
            >
              Every Symbol in Ne Zha 2 (哪吒之魔童闹海)
            </Link>
            , and{" "}
            <Link
              href="/empresses-in-the-palace-real-museum-guide"
              className="text-primary-600 hover:text-primary-700 underline font-semibold"
            >
              Every Visual in Empresses in the Palace (甄嬛传)
            </Link>
            , all mapped to real museum objects.
          </p>
          <p className="text-ink-700 leading-relaxed mt-4">
            For the full inventory of Chinese masterpieces in Western
            museums, see our{" "}
            <Link
              href="/treasures-abroad"
              className="text-primary-600 hover:text-primary-700 underline font-semibold"
            >
              Treasures Abroad index
            </Link>
            . For a wider tour of the games, films, and dramas drawing on
            Chinese material culture, see{" "}
            <Link
              href="/inspirations"
              className="text-primary-600 hover:text-primary-700 underline font-semibold"
            >
              Inspirations
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Sharing footer */}
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
              Cleveland Museum Open Access
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
            . Connections drawn between game and artifact are art-historical
            inferences, not Game Science statements unless noted; see{" "}
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
