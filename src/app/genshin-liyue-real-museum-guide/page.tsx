import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ExternalLink,
  Mountain,
  Building2,
  Crown,
  Eye,
  Shirt,
  Wine,
  Swords,
} from "lucide-react";
import { absoluteUrl, SITE_NAME } from "@/lib/site";

const TITLE =
  "Every Liyue Visual in Genshin Impact, Mapped to a Real Museum Object";
const DESCRIPTION =
  "Liyue Harbor, Jueyun Karst, Rex Lapis, the Adepti — the real Tang, Song, and Ming objects that taught miHoYo the visual language of Liyue. 7 visual lineages, 23 artifacts, free to visit.";
const SLUG = "/genshin-liyue-real-museum-guide";

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
        url: "/images/abroad/cma-cloudy-mountains.jpg",
        alt: "Cloudy Mountains by Mi Youren, 1130 — Cleveland Museum of Art",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/abroad/cma-cloudy-mountains.jpg"],
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
    id: "karst",
    icon: Mountain,
    title: "1. Jueyun Karst — the painted-mountain skyline",
    inGame:
      "Liyue's most iconic silhouette — vertical limestone peaks rising out of mist, with a tiny pavilion clinging to a ledge — is not invented. It is a region of southern China called karst country (Guilin, Zhangjiajie, Huangshan), filtered through nine centuries of Chinese landscape painting. miHoYo borrowed both the geology and the way painters had already framed it.",
    realRoot:
      "From the 10th century onward, the dominant Chinese landscape mode was 'high distance' (高远): a vertical hanging-scroll composition with mountains stacked vertically, mist between layers, and a human figure tiny against the rock. Two of the founding scrolls of that mode are not in China — they passed through Japanese collectors and ended up in Cleveland.",
    pieces: [
      {
        href: "/treasures-abroad/cma-buddhist-retreat-stream-mountains",
        title: "Buddhist Retreat by Stream and Mountains (Juran, ca. 970)",
        museum: "Cleveland Museum of Art",
        image: "/images/abroad/cma-buddhist-retreat-stream-mountains.jpg",
        caption:
          "A monk-painter's monumental ink mountain dotted with the round 'alum-head' boulders that became the visual shorthand for Chinese karst. The Liyue skybox is reaching for exactly this register.",
      },
      {
        href: "/treasures-abroad/cma-cloudy-mountains",
        title: "Cloudy Mountains (Mi Youren, 1130)",
        museum: "Cleveland Museum of Art",
        image: "/images/abroad/cma-cloudy-mountains.jpg",
        caption:
          "Mountains dissolving into mist with layered ink dots. The Mi style codified the atmospheric envelope — every piece of Liyue concept art that 'looks like a Chinese painting' is descended from this template.",
      },
      {
        href: "/treasures-abroad/cma-quails-sparrows-autumn",
        title: "Quails and Sparrows in an Autumn Scene (Wang Yuan, 1347)",
        museum: "Cleveland Museum of Art",
        image: "/images/abroad/cma-quails-sparrows-autumn.jpg",
        caption:
          "Pure-ink monochrome was the literati badge of taste. Liyue's autumn vistas — quiet, monochromatic, slightly melancholy — quote this Yuan-dynasty mode directly.",
      },
    ],
  },
  {
    id: "harbor",
    icon: Building2,
    title: "2. Liyue Harbor — Song-dynasty urbanism resurrected",
    inGame:
      "Liyue Harbor is the most lovingly detailed urban environment in any Chinese game: stone quays, multi-storey wooden buildings, hanging market signs, vendors shouting prices, courier offices. The visual reference is unambiguous — it is Song-dynasty Hangzhou or Quanzhou, the most cosmopolitan harbour cities of the medieval world.",
    realRoot:
      "We know what Song-dynasty urban life looked like because of one painting: Zhang Zeduan's <em>Along the River During the Qingming Festival</em>. It is a five-metre handscroll inventory of Northern Song daily life — every shop sign, every porter's load, every bridge bottleneck. It is also the visual canon every later Chinese reconstruction of historical city life draws from.",
    pieces: [
      {
        href: "/artifacts/along-the-river-during-qingming-festival",
        title: "Along the River During the Qingming Festival",
        museum: "The Palace Museum, Beijing",
        image: "/images/artifacts/along-the-river-during-qingming-festival.jpg",
        caption:
          "The single most important documentation of medieval Chinese urban life. Liyue Harbor is essentially the Genshin team's loving translation of this scroll into 3D.",
      },
      {
        href: "/treasures-abroad/cma-knickknack-peddler",
        title: "The Knickknack Peddler (Li Song, 1212)",
        museum: "Cleveland Museum of Art",
        image: "/images/abroad/cma-knickknack-peddler.jpg",
        caption:
          "A Song court painter's portrait of a travelling peddler whose baskets bristle with toys, fans, and trinkets. Liyue's vendor NPCs and inventory clutter come straight from this tradition.",
      },
    ],
  },
  {
    id: "rex-lapis",
    icon: Crown,
    title: "3. Rex Lapis — the Geo Archon and the bronze cauldron",
    inGame:
      "Rex Lapis (Morax / Zhongli) is Liyue's god of contracts, commerce, and stone. The character's ceremonial visuals — golden geometric ornament, dragon iconography, the recurring three-legged ritual vessel — point at one specific Chinese object: the ding (鼎), a ritual bronze cauldron. In the Geo Archon's quest line the ding is treated as the symbol of governance itself.",
    realRoot:
      "That treatment is not artistic licence. For 2,000 years of Chinese history, the ding was the political symbol of the state. Whoever held the Nine Tripods of the Zhou held the Mandate of Heaven. The phrase &ldquo;to ask the weight of the tripods&rdquo; (问鼎) still means &ldquo;to make a play for power&rdquo; in modern Chinese.",
    pieces: [
      {
        href: "/artifacts/simuwu-ding",
        title: "Simuwu Ding (832 kg, late Shang)",
        museum: "National Museum of China, Beijing",
        image: "/images/artifacts/simuwu-ding.jpg",
        caption:
          "The heaviest ancient bronze ever found. The visual ancestor of every ceremonial cauldron Rex Lapis is associated with.",
      },
      {
        href: "/artifacts/da-ke-ding",
        title: "Da Ke Ding (Western Zhou)",
        museum: "Shanghai Museum",
        image: "/images/artifacts/da-ke-ding.jpg",
        caption:
          "290 characters of inscription on the inside — a primary historical document for early Chinese government, packaged as a sacred vessel. This is the political-spiritual hybrid Genshin's Geo Archon embodies.",
      },
      {
        href: "/treasures-abroad/shang-zhou-ritual-altar-set",
        title: "Western Zhou Ritual Altar Set",
        museum: "The Met, New York",
        image: "/images/abroad/shang-zhou-ritual-altar-set.jpg",
        caption:
          "A complete fourteen-piece altar group: ding, gui, you, zun, jue. The full grammar of bronze ritual that Genshin compresses into a single Archon's iconography.",
      },
      {
        href: "/treasures-abroad/western-zhou-he-vessel",
        title: "Western Zhou He Vessel",
        museum: "The Met, New York",
        image: "/images/abroad/western-zhou-he-vessel.jpg",
        caption:
          "A spouted ritual He, body wrapped in taotie, handle a coiled dragon, lid topped with a bird. The exact decorative vocabulary Genshin applies to its golden ceremonial props.",
      },
    ],
  },
  {
    id: "adepti",
    icon: Eye,
    title: "4. The Adepti — Tang tomb spirits and Liao luohans",
    inGame:
      "Liyue's Adepti — Cloud Retainer the crane, Mountain Shaper, Moon Carver, Madame Ping — are immortal beings part-human, part-animal, drawn into vows that bind them to the land. They are visualised somewhere between Tang tomb guardians and Buddhist arhats: too dignified to be cartoons, too uncanny to be human.",
    realRoot:
      "That register has a real pedigree. Tang aristocrats were buried with sancai-glazed earth-spirit guardians, half-human half-beast. Liao monasteries built life-size ceramic luohans (arhats) with portrait-realistic faces. Both traditions push past human likeness toward something hieratic and supernatural. Genshin's Adepti are the spiritual descendants.",
    pieces: [
      {
        href: "/treasures-abroad/bm-yixian-luohan",
        title: "Yixian Luohan (Liao dynasty, 11th c)",
        museum: "British Museum, London",
        image: "/images/abroad/bm-yixian-luohan.jpg",
        caption:
          "Life-size, portrait-realistic, hieratically composed. The Adepti's particular kind of dignity — neither cute nor monstrous — comes from this lineage.",
      },
      {
        href: "/treasures-abroad/bm-liu-tingxun-tomb-figures",
        title: "Tomb Figures of General Liu Tingxun",
        museum: "British Museum, London",
        image: "/images/abroad/bm-liu-tingxun-tomb-figures.jpg",
        caption:
          "A complete Tang tomb assemblage: civil officials, military officials, earth-spirits, guardian kings. The choreography of an idealised supernatural court — exactly the world the Adepti inhabit.",
      },
      {
        href: "/treasures-abroad/tang-twelve-zodiac-set",
        title: "Tang Twelve-Zodiac Set",
        museum: "The Met, New York",
        image: "/images/abroad/tang-twelve-zodiac-set.jpg",
        caption:
          "Twelve human-bodied figurines, each topped with the head of a zodiac animal. The single most direct iconographic ancestor of every animal-headed immortal in Chinese-inspired media.",
      },
      {
        href: "/artifacts/sacred-bronze-tree",
        title: "Sanxingdui Sacred Bronze Tree",
        museum: "Sanxingdui Museum, Sichuan",
        image: "/images/artifacts/sacred-bronze-tree.jpg",
        caption:
          "A bronze cosmic tree nearly four metres tall, with birds perched on each tier. The same world-tree iconography Liyue invokes in its ascended-being sequences.",
      },
    ],
  },
  {
    id: "costumes",
    icon: Shirt,
    title: "5. Liyue costumes — silk, jade, and a Qing court portrait",
    inGame:
      "Beidou's pirate captain coat, Yun Jin's Peking opera robes, Hu Tao's mortuary fortune-teller hat, Zhongli's scholar suit — Genshin Liyue did not just borrow 'East Asian fantasy' clothes. Each costume points at a specific Chinese sartorial tradition. The historical reference points span from Han jade ornaments to Qing court regalia.",
    realRoot:
      "Chinese costume history has the longest unbroken record of any global tradition: jade pendants from 5,000-year-old burials, Tang silk from desert tombs, Qing court portraits in full regalia. The most rewarding way into Liyue's wardrobe is through the specific museum objects that taught the artists what each layer should look like.",
    pieces: [
      {
        href: "/treasures-abroad/han-jade-gold-comb",
        title: "Han Jade-and-Gold Comb",
        museum: "The Met, New York",
        image: "/images/abroad/han-jade-gold-comb.jpg",
        caption:
          "A miniature jade-set gold ornament for an aristocratic Han woman's hair. The genetic ancestor of Liyue's intricate jade-and-metal hair pieces.",
      },
      {
        href: "/treasures-abroad/qing-zhanyinbao-portrait",
        title: "Portrait of the Imperial Guard Zhanyinbao (1760)",
        museum: "The Met, New York",
        image: "/images/abroad/qing-zhanyinbao-portrait.jpg",
        caption:
          "A life-size Qianlong-era court portrait of an imperial bodyguard in full ceremonial armour. Beidou and other Liyue military costumes draw on this specific Qing-court visual idiom.",
      },
      {
        href: "/artifacts/jade-burial-suit",
        title: "Han Jade Burial Suit",
        museum: "Hebei Provincial Museum",
        image: "/images/artifacts/jade-burial-suit.jpg",
        caption:
          "Full-body armour of jade tiles sewn with gold wire. Liyue's recurring association of jade with armoured eternity has roots 2,000 years deep.",
      },
    ],
  },
  {
    id: "porcelain",
    icon: Wine,
    title: "6. Tea, wine, and the porcelain that built a global empire",
    inGame:
      "Walk into a Liyue restaurant and look at the table. The plates, the wine cups, the tea bowls — they speak fluent Yuan-Ming Jingdezhen. Cobalt-blue dragon scrolls; pale tianbai monochromes; tiny doucai cups painted with children at play. miHoYo did its homework, and the homework is shelved in the ceramic galleries of the world's great museums.",
    realRoot:
      "From the early 14th century, the Jingdezhen kilns turned underglaze cobalt and overglaze enamel into the most prestigious commodity on the planet. Yuan blue-and-white re-routed Eurasian trade. Yongle tianbai redefined what 'imperial' meant. Chenghua doucai sets auction records that make headlines. Each is a complete decorative-arts world Liyue can reach into.",
    pieces: [
      {
        href: "/treasures-abroad/bm-david-vases",
        title: "The David Vases, dated 1351",
        museum: "British Museum, London",
        image: "/images/abroad/bm-david-vases.jpg",
        caption:
          "The pair of dated Yuan blue-and-white temple vases that single-handedly redrew the chronology of Chinese porcelain. Liyue Harbor's altar offerings sit in this lineage.",
      },
      {
        href: "/treasures-abroad/cma-yongle-meiping",
        title: "Yongle 'Sweet White' Meiping",
        museum: "Cleveland Museum of Art",
        image: "/images/abroad/cma-yongle-meiping.jpg",
        caption:
          "A milky-white Ming imperial vase so pure the emperor used these vessels for ritual offerings to heaven. Liyue's most refined teahouse settings echo exactly this restraint.",
      },
      {
        href: "/treasures-abroad/cma-chenghua-children-cup",
        title: "Chenghua Doucai Children-at-Play Cup",
        museum: "Cleveland Museum of Art",
        image: "/images/abroad/cma-chenghua-children-cup.jpg",
        caption:
          "Two inches tall, painted with children at play, made for the Ming Chenghua emperor. A 2014 sister-cup sold at Sotheby's for HK$281 million. The ultimate luxury miniature.",
      },
      {
        href: "/treasures-abroad/ming-jiajing-carp-jar",
        title: "Ming Jiajing Carp-and-Lotus Jar",
        museum: "The Met, New York",
        image: "/images/abroad/ming-jiajing-carp-jar.jpg",
        caption:
          "Five-colour wucai porcelain at full polychromatic maturity — the densest auspicious-symbol painting in the entire Ming repertoire. Liyue's celebratory feasts borrow this exact festive register.",
      },
    ],
  },
  {
    id: "weapons",
    icon: Swords,
    title: "7. Weapons & wonders — bronze, jade, and the Silk Road",
    inGame:
      "Liyue's weapon visuals are eclectic on purpose: Zhongli's polearm carries dragon ornament; Beidou's claymore wears Ming-style fittings; the jade and bronze trinket items scattered across the world reference everything from Warring States ritual to Tang Silk Road luxury. The unifying thread is craft: every weapon and every collectible says <em>this is something Chinese craftsmen had already mastered 2,500 years ago</em>.",
    realRoot:
      "The Sword of Goujian (Warring States) survived 2,500 years buried in a swamp without rusting — partly because of a chromium-oxide coating Chinese metallurgists had figured out two millennia before the West. Tang craftsmen welded jade onto granulated gold using techniques borrowed from the Hellenistic world. Qing jade carvers turned 90-kilo nephrite boulders into imperial basins. Liyue's collectibles compress all of this into pickup loot.",
    pieces: [
      {
        href: "/artifacts/sword-of-goujian",
        title: "Sword of Goujian (Warring States, 5th c BCE)",
        museum: "Hubei Provincial Museum",
        image: "/images/artifacts/sword-of-goujian.jpg",
        caption:
          "Buried 2,500 years and recovered razor-sharp. The single most famous Chinese sword in existence — and the unspoken benchmark for every Chinese-fantasy game's blade design, including Liyue's.",
      },
      {
        href: "/treasures-abroad/qing-qianlong-jade-basin",
        title: "Qianlong Imperial Jade Basin (1774)",
        museum: "The Met, New York",
        image: "/images/abroad/qing-qianlong-jade-basin.jpg",
        caption:
          "A 90-kg jade basin signed by the Qianlong emperor. The peak of Qing imperial jade carving — a sense of weight and luxury that Liyue's most ornate set-pieces try to evoke.",
      },
      {
        href: "/artifacts/beast-head-agate-cup",
        title: "Beast-Head Agate Cup (Tang)",
        museum: "Shaanxi History Museum",
        image: "/images/artifacts/beast-head-agate-cup.jpg",
        caption:
          "A drinking horn carved from a single agate boulder, fitted with a gold-mounted beast head. The Persian rhyton form, naturalised into Chinese luxury — the pure Tang Silk Road moment Liyue venerates.",
      },
    ],
  },
];

export default function GenshinLiyueRealMuseumGuidePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: TITLE,
    description: DESCRIPTION,
    image: absoluteUrl("/images/abroad/cma-cloudy-mountains.jpg"),
    mainEntityOfPage: absoluteUrl(SLUG),
    datePublished: "2026-05-03",
    dateModified: "2026-05-03",
    author: { "@type": "Organization", name: SITE_NAME },
    publisher: { "@type": "Organization", name: SITE_NAME },
    about: [
      { "@type": "Thing", name: "Genshin Impact" },
      { "@type": "Thing", name: "Liyue" },
      { "@type": "Thing", name: "Chinese landscape painting" },
      { "@type": "Thing", name: "Song dynasty" },
      { "@type": "Thing", name: "Jingdezhen porcelain" },
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
            Field Guide · 14 minute read
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Every Liyue Visual in{" "}
            <span className="text-primary-300">Genshin Impact</span>, Mapped
            to a Real Museum Object
          </h1>
          <p className="text-lg md:text-xl text-ink-300 leading-relaxed max-w-3xl">
            Liyue Harbor wasn&apos;t invented from scratch. The karst peaks,
            the porcelain teacups, the Adepti, the bronze ceremonial cauldrons
            — every layer of Liyue maps onto a specific Chinese museum
            tradition. Here is the field guide.
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
            Since 2020, <em>Genshin Impact</em>&apos;s Liyue region has been
            the single most-played introduction to Chinese material culture
            for non-Chinese audiences. Tens of millions of players who had
            never heard of the Song dynasty know what a Liyue sky looks like.
            That sky is borrowed.
          </p>
          <p className="text-ink-600 leading-relaxed">
            miHoYo&apos;s art team studied the canon. Liyue&apos;s mountains
            are quoted from 11th-century painted scrolls. Its harbour
            recreates a specific Northern Song urban scroll. Its god of
            commerce wears the symbolism of a 3,200-year-old bronze
            cauldron. Its porcelain dishes are direct descendants of
            Yuan-Ming Jingdezhen kilns. The references are not subtle once
            you know what to look for.
          </p>
          <p className="text-ink-600 leading-relaxed">
            This guide walks the seven visual lineages most heavily quoted
            in Liyue, and for each one points at three or four real objects
            you can actually visit — in Beijing, Shanghai, Wuhan, New York,
            Cleveland, or London.
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
                      __html: `<strong class="text-ink-900">In the game:</strong> ${lineage.inGame}`,
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
            Already a Liyue scholar? Try the next field guide.
          </h2>
          <p className="text-ink-700 leading-relaxed mb-6">
            We do this for the games and shows that take Chinese material
            culture seriously. Two more after this one:
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
                Inspirations index.
              </strong>{" "}
              The full pop-culture cross-reference: every game, film, and
              C-drama we have mapped against real artifacts.{" "}
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
            . Connections drawn between game and artifact are
            art-historical inferences, not miHoYo statements; see{" "}
            <Link
              href="/methodology"
              className="text-primary-600 hover:text-primary-700 underline"
            >
              Methodology
            </Link>{" "}
            for our standards. Genshin Impact and Liyue are trademarks of
            HoYoverse / miHoYo and are used here for descriptive,
            educational purposes.
          </p>
        </div>
      </section>
    </>
  );
}
