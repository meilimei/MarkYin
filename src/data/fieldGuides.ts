import { absoluteUrl } from "@/lib/site";

export interface FieldGuide {
  slug: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  description: string;
  href: string;
  image: string;
  fandom: string;
  medium: "game" | "film" | "tv";
  year: number;
  readTime: string;
  lineages: number;
  objects: number;
  tags: string[];
  highlights: string[];
}

export const fieldGuides: FieldGuide[] = [
  {
    slug: "black-myth-real-museum-guide",
    title: "Every Visual in Black Myth: Wukong, Mapped to a Real Museum Object",
    shortTitle: "Black Myth: Wukong",
    subtitle: "The AAA game as museum gateway",
    description:
      "Yungang Buddhas, Sanxingdui masks, Shang ritual bronzes, Tang sancai, and Cleveland landscape scrolls — the real objects behind Game Science's breakout hit.",
    href: "/black-myth-real-museum-guide",
    image: "/images/abroad/bm-yixian-luohan.jpg",
    fandom: "Black Myth: Wukong",
    medium: "game",
    year: 2024,
    readTime: "12 minute read",
    lineages: 7,
    objects: 23,
    tags: ["Buddhist sculpture", "Sanxingdui", "Bronze ritual", "Tang sancai"],
    highlights: [
      "Buddhist colossi and luohan sculpture",
      "Sanxingdui masks and cosmic trees",
      "Shang-Zhou bronze cauldrons",
      "Tang and Song painting traditions",
    ],
  },
  {
    slug: "wuchang-fallen-feathers-real-museum-guide",
    title:
      "Every Visual in Wuchang: Fallen Feathers, Mapped to Real Sichuan Heritage",
    shortTitle: "Wuchang: Fallen Feathers",
    subtitle: "Sanxingdui, Jinsha, and Leshan behind the dark fantasy world",
    description:
      "Sanxingdui bronze bodies, gold masks, Jinsha's Sun Bird, and the Leshan Giant Buddha - the real Sichuan heritage route behind Leenzee's soulslike RPG.",
    href: "/wuchang-fallen-feathers-real-museum-guide",
    image: "/images/artifacts/gold-mask-sanxingdui.jpg",
    fandom: "Wuchang: Fallen Feathers",
    medium: "game",
    year: 2025,
    readTime: "11 minute read",
    lineages: 4,
    objects: 7,
    tags: ["Wuchang", "Sanxingdui", "Jinsha", "Leshan"],
    highlights: [
      "Sanxingdui bronze bodies and gold masks",
      "Jinsha's Sun Bird and ancient Shu solar imagery",
      "Leshan Giant Buddha and mountain-scale Buddhism",
      "A practical Sichuan route from game mood to real places",
    ],
  },
  {
    slug: "genshin-liyue-real-museum-guide",
    title: "Every Liyue Visual in Genshin Impact, Mapped to a Real Museum Object",
    shortTitle: "Genshin Impact — Liyue",
    subtitle: "How HoYoverse built a playable museum of Chinese forms",
    description:
      "Karst mountains, Adepti, porcelain teacups, ritual cauldrons, jade ornaments, and Song city life — the real Tang-Song objects behind Liyue's visual language.",
    href: "/genshin-liyue-real-museum-guide",
    image: "/images/abroad/cma-cloudy-mountains.jpg",
    fandom: "Genshin Impact",
    medium: "game",
    year: 2020,
    readTime: "14 minute read",
    lineages: 7,
    objects: 23,
    tags: ["Liyue", "Porcelain", "Landscape painting", "Ritual bronze"],
    highlights: [
      "Mi-style misty mountains",
      "Jingdezhen blue-and-white porcelain",
      "Adepti and Daoist immortal imagery",
      "Bronze ding authority and contracts",
    ],
  },
  {
    slug: "ne-zha-2-real-museum-guide",
    title: "Every Symbol in Ne Zha 2, Mapped to a Real Museum Object",
    shortTitle: "Ne Zha 2",
    subtitle: "Lotus rebirth, dragon kings, jade pearls, and Sanxingdui bodies",
    description:
      "The Demonic Pearl, the Spirit Pearl, the Four Dragon Kings, the Sky-Ribbon, the Universe Ring, and the cosmic child hero — decoded through real museum pieces.",
    href: "/ne-zha-2-real-museum-guide",
    image: "/images/abroad/ming-wanli-dragon-phoenix-dish.jpg",
    fandom: "Ne Zha 2",
    medium: "film",
    year: 2025,
    readTime: "16 minute read",
    lineages: 7,
    objects: 23,
    tags: ["Ne Zha", "Dragons", "Lotus rebirth", "Sanxingdui"],
    highlights: [
      "Northern Wei and Tang Buddhist rebirth imagery",
      "Ming dragon porcelain and proto-dragon bronzes",
      "Han jade soul vessels and Qing imperial jade",
      "Sichuan's Sanxingdui child-hero design layer",
    ],
  },
  {
    slug: "empresses-in-the-palace-real-museum-guide",
    title: "Every Visual in Empresses in the Palace, Mapped to a Real Museum Object",
    shortTitle: "Empresses in the Palace",
    subtitle: "Qing court drama through robes, jade, tea, and ritual",
    description:
      "Dragon robes, jade hairpins, cobalt tea cups, Buddhist altars, ancestor bronzes, and painted screens — the museum record behind 甄嬛传.",
    href: "/empresses-in-the-palace-real-museum-guide",
    image: "/images/abroad/qing-zhanyinbao-portrait.jpg",
    fandom: "Empresses in the Palace",
    medium: "tv",
    year: 2011,
    readTime: "15 minute read",
    lineages: 7,
    objects: 22,
    tags: ["Qing court", "Jade", "Porcelain", "Forbidden City"],
    highlights: [
      "Qing court dress and dragon-phoenix symbolism",
      "Jade hairpins, pendants, and Qianlong workshop culture",
      "Ming porcelain forms on the palace tea table",
      "Buddhist devotion and ancestral bronze ritual",
    ],
  },
];

export function getFieldGuideJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "China Heritage Field Guides",
    description:
      "Long-form museum guides mapping games, films, and Chinese dramas to real Chinese artifacts.",
    numberOfItems: fieldGuides.length,
    itemListElement: fieldGuides.map((guide, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: guide.title,
      url: absoluteUrl(guide.href),
      image: absoluteUrl(guide.image),
    })),
  };
}
