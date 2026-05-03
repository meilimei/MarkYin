import type { SourceCitation, ImageCredit } from "./artifacts";

export type TopicCategory = "dynasty" | "material" | "theme" | "region";

export interface Topic {
  slug: string;
  title: string;
  subtitle?: string;
  category: TopicCategory;
  summary: string;
  longDescription: string;
  heroImage: string;
  imageCredit?: ImageCredit;
  artifactSlugs: string[];
  relatedWorkSlugs?: string[];
  sources?: SourceCitation[];
}

export const topics: Topic[] = [
  {
    slug: "sanxingdui-mysteries",
    title: "Sanxingdui Mysteries",
    subtitle: "A 3,000-year-old civilization that rewrote Chinese history",
    category: "region",
    summary:
      "The bronze masks, gold foil, and towering figures of Sanxingdui belong to a civilization the world did not know existed until 1986 — and many of their secrets remain unsolved.",
    longDescription:
      "Before 1986, most scholars believed that Chinese civilization was born along the Yellow River. Then a team of brickmakers in Sichuan struck a pit containing hundreds of bronze and jade objects unlike anything ever found in China — or anywhere else on Earth. The discovery of Sanxingdui (三星堆) and its successor culture Jinsha shattered the 'single cradle' theory of Chinese civilization.\n\nThe Sanxingdui people built advanced bronze casting 3,000 years ago, worked gold to remarkable purity, and revered supernatural beings with oversized eyes, elongated ears, and enigmatic smiles. They wrote nothing we can read. They vanished. Renewed excavations from 2019 onward have unearthed additional pits, gold masks, ivory, and silk fragments, each find raising new questions rather than answering old ones.\n\nThis theme gathers the most iconic Sanxingdui artifacts and traces what we know, what we suspect, and what we may never discover.",
    heroImage:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80",
    artifactSlugs: [
      "bronze-standing-figure-sanxingdui",
      "gold-mask-sanxingdui",
      "sacred-bronze-tree",
    ],
    relatedWorkSlugs: ["black-myth-wukong"],
    sources: [
      {
        label: "Sanxingdui Museum Official",
        url: "https://www.sxd.cn",
        type: "official-cn",
      },
      {
        label: "Wikipedia — Sanxingdui",
        url: "https://en.wikipedia.org/wiki/Sanxingdui",
        type: "wiki",
        license: "CC-BY-SA 3.0",
      },
    ],
  },
  {
    slug: "bronze-dings-through-the-ages",
    title: "Bronze Dings Through the Ages",
    subtitle: "The ritual cauldrons that embodied Chinese state power",
    category: "material",
    summary:
      "The ding (鼎) — a three- or four-legged bronze cauldron — was not just a cooking vessel. For 2,000 years, it was the political and spiritual symbol of Chinese civilization itself.",
    longDescription:
      "When a Zhou Dynasty king asked a messenger how heavy the Nine Tripods of the Zhou were, he was not asking about metallurgy. He was asking whether the kingdom was his to take. To possess the dings was to possess the Mandate of Heaven.\n\nFrom the monumental Simuwu Ding of the late Shang — the heaviest ancient bronze vessel ever discovered — to the inscription-rich Da Ke Ding of the Western Zhou, dings are among the most concentrated vessels of Chinese political, religious, and artistic evolution. Their inscriptions are primary sources for Bronze Age history; their forms trace the shift from ritual awe to refined aristocratic taste.\n\nThis theme walks through the evolution of the ding across a millennium, from the supernatural heft of Shang ritual to the literary elegance of Zhou court life.",
    heroImage:
      "https://images.unsplash.com/photo-1569587112025-0d460e81a126?w=1200&q=80",
    artifactSlugs: ["simuwu-ding", "da-ke-ding"],
    relatedWorkSlugs: ["creation-of-the-gods", "genshin-impact-liyue"],
    sources: [
      {
        label: "Wikipedia — Ding (vessel)",
        url: "https://en.wikipedia.org/wiki/Ding_(vessel)",
        type: "wiki",
        license: "CC-BY-SA 3.0",
      },
    ],
  },
  {
    slug: "tang-silk-road-treasures",
    title: "Tang Dynasty Silk Road Treasures",
    subtitle: "When Chang'an was the most cosmopolitan city on Earth",
    category: "dynasty",
    summary:
      "For three centuries, the Tang capital of Chang'an absorbed Persian silver, Sogdian music, Indian Buddhism, and Byzantine gold — and produced artifacts that fused them all.",
    longDescription:
      "Tang Dynasty Chang'an (modern Xi'an) was a city of one million people when London had ten thousand. Arabs, Persians, Sogdians, Turks, Koreans, and Japanese lived, traded, prayed, and intermarried in its grid of walled wards. The Silk Road reached its golden age, and the artifacts of the period carry the DNA of that encounter — rhytons in the form of beasts from Persian drinking culture, polo-playing women cast in Chinese tri-colored glaze, dancers on silver vessels in poses borrowed from India.\n\nTang artifacts are unusually joyful compared to the sober ritualism of earlier bronzes. They capture a moment when cultural openness was state policy and craftsmen borrowed freely across continents.\n\nThis theme follows that conversation through the object record, showing how the Silk Road remade Chinese art from the inside out.",
    heroImage:
      "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=1200&q=80",
    artifactSlugs: ["beast-head-agate-cup"],
    relatedWorkSlugs: ["genshin-impact-liyue"],
    sources: [
      {
        label: "Wikipedia — Tang dynasty",
        url: "https://en.wikipedia.org/wiki/Tang_dynasty",
        type: "wiki",
        license: "CC-BY-SA 3.0",
      },
    ],
  },
  {
    slug: "jade-and-immortality",
    title: "Jade and the Quest for Immortality",
    subtitle: "Why emperors were buried in stone suits sewn with gold",
    category: "theme",
    summary:
      "The Chinese believed jade could preserve the body, guide the soul, and command respect from heaven. These beliefs produced some of the most extraordinary funerary art in world history.",
    longDescription:
      "For more than 5,000 years, jade has been the most spiritually charged material in Chinese culture — valued above gold, above diamonds, above any gemstone the rest of the world prized. It was the stone of kings, ritual, and the afterlife.\n\nHan Dynasty princes were buried in full-body suits of jade tiles sewn with gold wire, in the belief that the stone's spiritual power would preserve their bodies for rebirth. The suits did not work as intended — no body survived — but they remain among the most astonishing expressions of belief ever committed to physical form.\n\nThis theme explores the Chinese obsession with jade: its religious meaning, its technical challenges, and its transformation from a Neolithic ritual stone into a symbol of imperial eternity.",
    heroImage:
      "https://images.unsplash.com/photo-1563302111-eab4b145e6c9?w=1200&q=80",
    artifactSlugs: ["jade-burial-suit"],
    relatedWorkSlugs: ["empresses-in-the-palace"],
    sources: [
      {
        label: "Wikipedia — Jade burial suit",
        url: "https://en.wikipedia.org/wiki/Jade_burial_suit",
        type: "wiki",
        license: "CC-BY-SA 3.0",
      },
    ],
  },
  {
    slug: "blue-and-white-porcelain",
    title: "Blue-and-White Porcelain Masterpieces",
    subtitle: "The ceramic tradition that conquered the world",
    category: "material",
    summary:
      "Cobalt blue on white porcelain became the first truly global luxury good — from Yuan China to Ottoman palaces, Dutch still lifes, and Delft kilns.",
    longDescription:
      "Yuan Dynasty potters at Jingdezhen perfected a technique so influential that its vocabulary — blue, white, landscape, figure narrative — became the universal language of fine ceramics for six hundred years. The cobalt pigment originally came from Persia; the designs were often tailored for Middle Eastern markets. When Ming and Qing emperors later claimed blue-and-white as quintessentially Chinese, they were claiming a style that had always been global.\n\nSome of the rarest surviving Yuan narrative meiping vases — only a few dozen exist worldwide — are among the most valuable artifacts in any Chinese museum. Their painted stories draw from opera and history, turning each vase into a theater in miniature.\n\nThis theme traces blue-and-white porcelain from its Yuan Dynasty birth through its transformation of global taste.",
    heroImage:
      "https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=1200&q=80",
    artifactSlugs: ["blue-white-porcelain-plum-vase"],
    relatedWorkSlugs: ["empresses-in-the-palace", "genshin-impact-liyue"],
    sources: [
      {
        label: "Wikipedia — Blue and white pottery",
        url: "https://en.wikipedia.org/wiki/Blue_and_white_pottery",
        type: "wiki",
        license: "CC-BY-SA 3.0",
      },
    ],
  },
];

export const topicCategories: { value: TopicCategory | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "dynasty", label: "Dynasty" },
  { value: "material", label: "Material" },
  { value: "theme", label: "Theme" },
  { value: "region", label: "Region" },
];

export function getTopicBySlug(slug: string): Topic | undefined {
  return topics.find((t) => t.slug === slug);
}

export function getTopicsForArtifact(artifactSlug: string): Topic[] {
  return topics.filter((t) => t.artifactSlugs.includes(artifactSlug));
}
