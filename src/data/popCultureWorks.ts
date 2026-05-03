import type { SourceCitation, ImageCredit } from "./artifacts";

export type Medium = "game" | "film" | "tv" | "anime" | "music" | "book";

export interface ArtifactReference {
  artifactSlug: string;
  connection: string;
  inWorkName?: string;
  evidence?: string;
}

export interface PopCultureWork {
  slug: string;
  title: string;
  titleZh?: string;
  medium: Medium;
  year: number;
  studio?: string;
  region: string;
  summary: string;
  culturalContext: string;
  heroImage: string;
  imageCredit?: ImageCredit;
  artifactRefs: ArtifactReference[];
  topicSlugs?: string[];
  sources?: SourceCitation[];
  externalLinks?: { label: string; url: string }[];
}

export const popCultureWorks: PopCultureWork[] = [
  {
    slug: "black-myth-wukong",
    title: "Black Myth: Wukong",
    titleZh: "黑神话：悟空",
    medium: "game",
    year: 2024,
    studio: "Game Science",
    region: "China",
    summary:
      "The first AAA action RPG from a Chinese studio, Black Myth: Wukong became the fastest-selling single-player game of 2024 with over 25 million units sold in its first month.",
    culturalContext:
      "Drawing from the 16th-century novel Journey to the West, the game went further than any previous adaptation in grounding its visuals in real Chinese heritage. Game Science sent art teams to photograph and 3D-scan over 30 historical sites, temples, and museum collections across China. The Buddha statues of Yungang Grottoes, the bronze aesthetics of Sanxingdui, the temple architecture of Shanxi, and the ritual vessels of Shang and Zhou dynasties all appear in the game's environments and enemy designs.\n\nFor millions of players outside China, it was the first time they encountered the visual vocabulary of ancient Chinese ritual art — bronze masks with bulging eyes, cauldrons with taotie motifs, elongated Buddha figures — as a living, interactive aesthetic rather than a museum label.",
    heroImage:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&q=80",
    artifactRefs: [
      {
        artifactSlug: "bronze-standing-figure-sanxingdui",
        connection:
          "The enigmatic Sanxingdui bronze aesthetic — bulging eyes, elongated features, ritual stillness — directly inspired several boss and enemy designs in the game's supernatural realm.",
        evidence: "Game Science art direction interviews, 2024",
      },
      {
        artifactSlug: "simuwu-ding",
        connection:
          "Monumental bronze cauldrons with taotie (animal-mask) motifs appear as ritual objects in multiple chapters, clearly modeled after Shang-Zhou dings like the Simuwu Ding.",
      },
      {
        artifactSlug: "gold-mask-sanxingdui",
        connection:
          "The haunting gold-mask silhouette of Sanxingdui is a recurring visual motif in the game's ritual and shrine environments.",
      },
    ],
    topicSlugs: ["sanxingdui-mysteries", "bronze-dings-through-the-ages"],
    sources: [
      {
        label: "Official Black Myth: Wukong site",
        url: "https://heishenhua.com/",
        type: "academic",
      },
      {
        label: "Wikipedia — Black Myth: Wukong",
        url: "https://en.wikipedia.org/wiki/Black_Myth:_Wukong",
        type: "wiki",
        license: "CC-BY-SA 3.0",
      },
    ],
    externalLinks: [
      { label: "Official site", url: "https://heishenhua.com/" },
      {
        label: "Steam page",
        url: "https://store.steampowered.com/app/2358720/Black_Myth_Wukong/",
      },
    ],
  },
  {
    slug: "genshin-impact-liyue",
    title: "Genshin Impact — Liyue",
    titleZh: "原神 · 璃月",
    medium: "game",
    year: 2020,
    studio: "miHoYo / HoYoverse",
    region: "China",
    summary:
      "Liyue is the Chinese-inspired region of Genshin Impact, a free-to-play open-world RPG with over 60 million monthly active players worldwide.",
    culturalContext:
      "Rather than a generic 'East Asian fantasy' pastiche, Liyue draws specifically from Tang and Song dynasty architecture, Shang-Zhou bronze iconography, traditional Chinese mountain landscape painting, and Jingdezhen blue-and-white porcelain. The character designs reference Tang tri-color figurines (唐三彩), jade ornaments, and literati aesthetics. The region's patron deity Rex Lapis (Morax) is explicitly framed around the ding as a symbol of governance.\n\nFor tens of millions of non-Chinese players, Liyue has become an accidental gateway to Chinese material culture — searches for 'real-life inspiration for Liyue' have been among the most popular Chinese-culture queries on Google since 2020.",
    heroImage:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&q=80",
    artifactRefs: [
      {
        artifactSlug: "simuwu-ding",
        connection:
          "Rex Lapis (the Geo Archon) is thematically tied to the ding as the symbol of state authority — a concept inherited directly from the real-world role of vessels like the Simuwu Ding in Shang-Zhou political ritual.",
      },
      {
        artifactSlug: "blue-white-porcelain-plum-vase",
        connection:
          "Liyue Harbor's household decor, vendor items, and event rewards are saturated with blue-and-white porcelain patterns descended from Yuan-Ming Jingdezhen traditions.",
      },
      {
        artifactSlug: "beast-head-agate-cup",
        connection:
          "Liyue's fusion of Chinese and Central Asian visual motifs echoes real Tang Silk Road artifacts — the beast-head agate rhyton being one of the most iconic surviving examples.",
      },
    ],
    topicSlugs: [
      "tang-silk-road-treasures",
      "blue-and-white-porcelain",
      "bronze-dings-through-the-ages",
    ],
    sources: [
      {
        label: "Wikipedia — Genshin Impact",
        url: "https://en.wikipedia.org/wiki/Genshin_Impact",
        type: "wiki",
        license: "CC-BY-SA 3.0",
      },
    ],
    externalLinks: [
      { label: "Official site", url: "https://genshin.hoyoverse.com/" },
    ],
  },
  {
    slug: "empresses-in-the-palace",
    title: "Empresses in the Palace",
    titleZh: "甄嬛传",
    medium: "tv",
    year: 2011,
    studio: "Ruyi Xinxin / Dragon TV",
    region: "China",
    summary:
      "A 76-episode Qing Dynasty palace drama that became one of the most-watched Chinese television shows of all time and a global cultural phenomenon on Netflix.",
    culturalContext:
      "Filmed partly on location at the Forbidden City, the show is obsessively detailed in its use of real Qing Dynasty material culture — cloisonné enamel, jade ruyi scepters, blue-and-white porcelain, Qing-style furniture, and embroidered silk robes. Entire Weibo communities have sprung up to identify the real artifacts and imperial decor recreated in each scene.\n\nFor international viewers, the show serves as an extended visual introduction to Qing imperial aesthetics — far more immersive than any museum label — and has been credited with driving a wave of interest in Forbidden City tourism and Chinese decorative arts.",
    heroImage:
      "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1200&q=80",
    artifactRefs: [
      {
        artifactSlug: "along-the-river-during-qingming-festival",
        connection:
          "Multiple scenes reference Song and later dynasty paintings in the Palace Museum collection, with court art scenes directly modeled on historical scroll compositions.",
      },
      {
        artifactSlug: "jade-burial-suit",
        connection:
          "The show's recurring emphasis on jade as spiritually protective — worn at funerals, given at births, exchanged at crises — echoes the Han Dynasty belief system that produced jade burial suits.",
      },
      {
        artifactSlug: "blue-white-porcelain-plum-vase",
        connection:
          "Blue-and-white porcelain appears as tableware, decor, and gift items throughout the series, consistent with the Qing imperial passion for Yuan and Ming porcelain.",
      },
    ],
    topicSlugs: ["jade-and-immortality", "blue-and-white-porcelain"],
    sources: [
      {
        label: "Wikipedia — Empresses in the Palace",
        url: "https://en.wikipedia.org/wiki/Empresses_in_the_Palace",
        type: "wiki",
        license: "CC-BY-SA 3.0",
      },
    ],
  },
  {
    slug: "ne-zha-2",
    title: "Ne Zha 2",
    titleZh: "哪吒之魔童闹海",
    medium: "film",
    year: 2025,
    studio: "Coco Cartoon / Beijing Enlight",
    region: "China",
    summary:
      "The highest-grossing animated film in world history, Ne Zha 2 reached over USD 2 billion at the global box office by mixing classic Chinese mythology with cutting-edge animation.",
    culturalContext:
      "The film adapts the legend of Ne Zha from the Ming Dynasty novel Fengshen Yanyi (Investiture of the Gods). Its visual design pulls from traditional Chinese temple sculpture, Shang-Zhou bronze ritual vessels, and folk art iconography. Sea palaces are modeled on Qing-era porcelain and imperial architecture; demonic characters echo the taotie masks of ancient bronzes.\n\nThe film's unprecedented global reach means that hundreds of millions of viewers encountered Ming-era mythology and Shang-Zhou ritual aesthetics for the first time — often with no prior Chinese cultural context.",
    heroImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80",
    artifactRefs: [
      {
        artifactSlug: "simuwu-ding",
        connection:
          "The film's depiction of ancestral and ritual spaces features massive bronze cauldrons with taotie motifs, evoking Shang-Zhou ritual dings like the Simuwu Ding.",
      },
      {
        artifactSlug: "sacred-bronze-tree",
        connection:
          "The mythological 'world tree' imagery in the film's cosmic scenes resonates with the Sanxingdui Sacred Bronze Tree — both drawing from an ancient pan-Chinese cosmology of a tree connecting heaven and earth.",
      },
    ],
    topicSlugs: ["sanxingdui-mysteries", "bronze-dings-through-the-ages"],
    sources: [
      {
        label: "Wikipedia — Ne Zha 2",
        url: "https://en.wikipedia.org/wiki/Ne_Zha_2",
        type: "wiki",
        license: "CC-BY-SA 3.0",
      },
    ],
  },
  {
    slug: "creation-of-the-gods",
    title: "Creation of the Gods I: Kingdom of Storms",
    titleZh: "封神第一部",
    medium: "film",
    year: 2023,
    studio: "Beijing Culture",
    region: "China",
    summary:
      "An epic adaptation of the Ming Dynasty mythological novel Fengshen Yanyi, set during the fall of the Shang Dynasty — the same historical moment as the Simuwu Ding and Sanxingdui civilization.",
    culturalContext:
      "Director Wuershan consulted archaeologists and museum curators to reconstruct the material culture of the late Shang Dynasty. The film's costume design, ritual vessels, architectural details, and oracle bone imagery are grounded in archaeological finds rather than later-dynasty stereotypes. Bronze ritual vessels, jade ornaments, and chariot reconstructions were all based on excavated originals.\n\nFor viewers, the film functions as the most historically grounded depiction of Shang Dynasty material culture yet produced on screen — effectively a visual companion to the bronze galleries of the National Museum of China.",
    heroImage:
      "https://images.unsplash.com/photo-1569587112025-0d460e81a126?w=1200&q=80",
    artifactRefs: [
      {
        artifactSlug: "simuwu-ding",
        connection:
          "Shang court rituals in the film prominently feature massive bronze dings modeled directly on the Simuwu Ding and other major Anyang-period vessels.",
      },
      {
        artifactSlug: "da-ke-ding",
        connection:
          "The inscribed ritual vessels passed between noble houses in the film mirror the real function of inscribed bronze vessels like the Da Ke Ding in Zhou Dynasty political life.",
      },
    ],
    topicSlugs: ["bronze-dings-through-the-ages"],
    sources: [
      {
        label: "Wikipedia — Creation of the Gods I",
        url: "https://en.wikipedia.org/wiki/Creation_of_the_Gods_I:_Kingdom_of_Storms",
        type: "wiki",
        license: "CC-BY-SA 3.0",
      },
    ],
  },
];

export const mediumLabels: Record<Medium, string> = {
  game: "Game",
  film: "Film",
  tv: "TV Series",
  anime: "Anime",
  music: "Music",
  book: "Book",
};

export const mediumFilters: { value: Medium | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "game", label: "Games" },
  { value: "film", label: "Films" },
  { value: "tv", label: "TV" },
  { value: "anime", label: "Anime" },
];

export function getWorkBySlug(slug: string): PopCultureWork | undefined {
  return popCultureWorks.find((w) => w.slug === slug);
}

export function getWorksForArtifact(artifactSlug: string): PopCultureWork[] {
  return popCultureWorks.filter((w) =>
    w.artifactRefs.some((ref) => ref.artifactSlug === artifactSlug),
  );
}

export function getArtifactConnectionFromWork(
  work: PopCultureWork,
  artifactSlug: string,
): string | undefined {
  return work.artifactRefs.find((r) => r.artifactSlug === artifactSlug)
    ?.connection;
}
