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
  {
    slug: "imperial-power-and-court-life",
    title: "Imperial Power and Court Life",
    subtitle: "How objects made authority visible inside the palace",
    category: "theme",
    summary:
      "From bronze cauldrons and jade suits to porcelain vases and court paintings, imperial China turned objects into a language of rank, legitimacy, and ritual performance.",
    longDescription:
      "Chinese imperial power was never abstract. It had weight, color, material, and placement. A ding on an ancestral altar declared the ruler's legitimacy; a jade burial suit promised that elite bodies could be preserved beyond death; a blue-and-white porcelain vase signaled access to imperial kilns; a monumental handscroll turned the capital itself into a possession of the throne.\n\nCourt life was governed by this material grammar. Who could use yellow, who could own a dragon motif, who could present jade, who could stand near the ancestral vessels — every rule transformed an object into politics.\n\nThis theme gathers objects that made power visible, showing how China's courts used art not as decoration but as a working technology of government.",
    heroImage:
      "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1200&q=80",
    artifactSlugs: [
      "simuwu-ding",
      "da-ke-ding",
      "jade-burial-suit",
      "blue-white-porcelain-plum-vase",
      "along-the-river-during-qingming-festival",
    ],
    relatedWorkSlugs: [
      "empresses-in-the-palace",
      "creation-of-the-gods",
      "ne-zha-2",
    ],
    sources: [
      {
        label: "Wikipedia — Chinese ritual bronzes",
        url: "https://en.wikipedia.org/wiki/Chinese_ritual_bronzes",
        type: "wiki",
        license: "CC-BY-SA 3.0",
      },
      {
        label: "Wikipedia — Chinese imperial art",
        url: "https://en.wikipedia.org/wiki/Chinese_art",
        type: "wiki",
        license: "CC-BY-SA 3.0",
      },
    ],
  },
  {
    slug: "warriors-weapons-and-empire",
    title: "Warriors, Weapons, and Empire",
    subtitle: "The material culture of conquest, defense, and military memory",
    category: "theme",
    summary:
      "Chinese military heritage is not only swords and soldiers. It includes bronze technology, mass production, tomb armies, court ritual, and the stories later dynasties told about heroic violence.",
    longDescription:
      "The Sword of Goujian, the Terracotta Army, and the bronze bells of Marquis Yi all belong to the same world: the age when competing states turned metallurgy, logistics, and ritual into military power. A sword was not merely a weapon; it was a claim of royal identity. A tomb army was not merely funerary decoration; it was a promise that imperial command continued after death.\n\nLater Chinese literature and popular culture repeatedly return to this period because it made power tangible. The polished blade, the ranked formation, the bronze inscription, the ceremonial bell — each object teaches us how early empires imagined discipline and destiny.\n\nThis theme follows the objects that turned warfare into memory.",
    heroImage:
      "https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=1200&q=80",
    artifactSlugs: [
      "sword-of-goujian",
      "terracotta-warriors",
      "bianzhong-marquis-yi",
      "da-ke-ding",
      "simuwu-ding",
    ],
    relatedWorkSlugs: [
      "black-myth-wukong",
      "creation-of-the-gods",
      "ne-zha-2",
    ],
    sources: [
      {
        label: "Wikipedia — Warring States period",
        url: "https://en.wikipedia.org/wiki/Warring_States_period",
        type: "wiki",
        license: "CC-BY-SA 3.0",
      },
      {
        label: "Wikipedia — Terracotta Army",
        url: "https://en.wikipedia.org/wiki/Terracotta_Army",
        type: "wiki",
        license: "CC-BY-SA 3.0",
      },
    ],
  },
  {
    slug: "music-ritual-and-performance",
    title: "Music, Ritual, and Performance",
    subtitle: "Sound, ceremony, and spectacle from Bronze Age courts to Tang banquets",
    category: "theme",
    summary:
      "Ancient Chinese performance culture linked music, ritual, drinking, procession, and court display into a single sensory world preserved in bells, cups, paintings, and tomb goods.",
    longDescription:
      "In early China, music was governance. Bronze bells tuned to precise pitches were buried with rulers because sound ordered the cosmos and the court. Banquet vessels carried ritual alcohol not simply for pleasure but for sacrifice, diplomacy, and rank. Later paintings of markets and festivals show performance spreading beyond the court into urban life.\n\nThe artifacts in this theme remind us that Chinese heritage was never silent. Bells, cups, processions, poems, and painted crowds all belonged to a shared culture of performance. To understand the object is to imagine the sound and movement around it.\n\nThis theme follows the ceremonial life of Chinese art from tomb orchestra to palace banquet to public festival.",
    heroImage:
      "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=1200&q=80",
    artifactSlugs: [
      "bianzhong-marquis-yi",
      "beast-head-agate-cup",
      "along-the-river-during-qingming-festival",
      "blue-white-porcelain-plum-vase",
    ],
    relatedWorkSlugs: [
      "empresses-in-the-palace",
      "genshin-impact-liyue",
    ],
    sources: [
      {
        label: "Wikipedia — Bianzhong",
        url: "https://en.wikipedia.org/wiki/Bianzhong",
        type: "wiki",
        license: "CC-BY-SA 3.0",
      },
      {
        label: "Wikipedia — Chinese musicology",
        url: "https://en.wikipedia.org/wiki/Music_of_China",
        type: "wiki",
        license: "CC-BY-SA 3.0",
      },
    ],
  },
  {
    slug: "song-city-life-and-painting",
    title: "Song City Life and Painting",
    subtitle: "Markets, bridges, scrolls, and the invention of urban China",
    category: "dynasty",
    summary:
      "The Song dynasty made everyday life worthy of monumental art. Its scrolls preserve streets, bridges, shops, boats, workers, and festival crowds with astonishing documentary density.",
    longDescription:
      "Before the Song dynasty, court art usually turned toward rulers, ritual, mountains, and gods. Song painters widened the field of vision. They made the city itself an artistic subject: bridges bending under traffic, boats lining the river, peddlers selling small goods, restaurants, temples, and ordinary people moving through a dense urban world.\n\nAlong the River During the Qingming Festival is the supreme example of that transformation. It is not only a masterpiece of painting; it is a map of commerce, engineering, festival life, and social hierarchy. Later dynasties copied it because it offered an image of civilization as movement.\n\nThis theme uses the surviving objects to explore how Chinese art learned to look at the street.",
    heroImage:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1200&q=80",
    artifactSlugs: [
      "along-the-river-during-qingming-festival",
      "blue-white-porcelain-plum-vase",
      "beast-head-agate-cup",
    ],
    relatedWorkSlugs: [
      "empresses-in-the-palace",
      "genshin-impact-liyue",
    ],
    sources: [
      {
        label: "Wikipedia — Along the River During the Qingming Festival",
        url: "https://en.wikipedia.org/wiki/Along_the_River_During_the_Qingming_Festival",
        type: "wiki",
        license: "CC-BY-SA 3.0",
      },
      {
        label: "Wikipedia — Song dynasty",
        url: "https://en.wikipedia.org/wiki/Song_dynasty",
        type: "wiki",
        license: "CC-BY-SA 3.0",
      },
    ],
  },
  {
    slug: "mythic-animals-and-cosmic-order",
    title: "Mythic Animals and Cosmic Order",
    subtitle: "Dragons, beasts, trees, masks, and the invisible structure of the universe",
    category: "theme",
    summary:
      "Chinese art repeatedly turns animals and hybrid beings into maps of the cosmos — from Sanxingdui birds and bronze masks to Shang taotie, jade beasts, and porcelain dragons.",
    longDescription:
      "The animal in Chinese art is rarely just an animal. Birds perch on cosmic trees; dragons mark imperial authority; taotie masks guard ritual vessels; beasts become handles, cups, guardians, and signs of worlds beyond the human. These forms survive because they compress cosmology into shape.\n\nSanxingdui makes this logic visible at its most mysterious. Its masks, trees, and hybrid beings do not match later Chinese iconography, yet they share the same premise: the unseen world can be approached through symbolic animals and supernatural bodies. Shang bronzes, Tang agate cups, and Yuan porcelain all carry that logic forward.\n\nThis theme gathers artifacts where animal imagery becomes a way of thinking about power, protection, and the structure of heaven and earth.",
    heroImage:
      "https://images.unsplash.com/photo-1569587112025-0d460e81a126?w=1200&q=80",
    artifactSlugs: [
      "sacred-bronze-tree",
      "gold-mask-sanxingdui",
      "bronze-standing-figure-sanxingdui",
      "simuwu-ding",
      "beast-head-agate-cup",
      "blue-white-porcelain-plum-vase",
    ],
    relatedWorkSlugs: [
      "black-myth-wukong",
      "ne-zha-2",
      "genshin-impact-liyue",
    ],
    sources: [
      {
        label: "Wikipedia — Taotie",
        url: "https://en.wikipedia.org/wiki/Taotie",
        type: "wiki",
        license: "CC-BY-SA 3.0",
      },
      {
        label: "Wikipedia — Chinese dragon",
        url: "https://en.wikipedia.org/wiki/Chinese_dragon",
        type: "wiki",
        license: "CC-BY-SA 3.0",
      },
    ],
  },
  {
    slug: "dunhuang-cave-art",
    title: "Dunhuang Cave Art & the Silk Road",
    subtitle: "A Millennium of Buddhist Murals at the Edge of the Desert",
    category: "region",
    summary:
      "The Mogao Caves at Dunhuang contain over 45,000 square meters of murals spanning 1,000 years — the world's greatest single collection of Buddhist art and a visual record of Silk Road cultural exchange.",
    longDescription:
      "Carved into desert cliffs beginning in 366 AD, the 735 Mogao Caves document the entire arc of Chinese Buddhist art — from austere Northern Wei figures to the opulent flying apsaras of the High Tang to the eclectic styles of Yuan-Ming patronage. The caves sat at the western end of the Hexi Corridor, where caravans rested before crossing the Taklamakan Desert, making Dunhuang a crossroads of Indian, Central Asian, Tibetan, and Chinese artistic traditions. In 1900, a Taoist monk stumbled upon the sealed 'Library Cave' (Cave 17), revealing 50,000 manuscripts, silk paintings, and printed texts — including the world's oldest dated printed book (the Diamond Sutra, 868 AD). Today, the Dunhuang Research Academy leads digital preservation efforts, creating millimeter-accurate 3D scans to protect murals from tourism damage and sandstorm erosion.",
    heroImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80",
    artifactSlugs: [
      "dunhuang-flying-apsara",
      "beast-head-agate-cup",
      "tang-sancai-camel",
    ],
    relatedWorkSlugs: ["black-myth-wukong", "genshin-impact-liyue"],
    sources: [
      {
        label: "Wikipedia — Mogao Caves",
        url: "https://en.wikipedia.org/wiki/Mogao_Caves",
        type: "wiki",
        license: "CC-BY-SA 3.0",
      },
      {
        label: "UNESCO — Mogao Caves",
        url: "https://whc.unesco.org/en/list/440",
        type: "academic",
      },
    ],
  },
  {
    slug: "forbidden-city-imperial-collection",
    title: "The Forbidden City & Imperial Collections",
    subtitle: "600 Years of Power, Art, and Architecture Behind Vermilion Walls",
    category: "theme",
    summary:
      "The Forbidden City held the imperial throne for 24 emperors across two dynasties and today houses 1.8 million artifacts — the most comprehensive collection of Chinese art and the world's most visited museum.",
    longDescription:
      "Built between 1406 and 1420 by Emperor Yongle of the Ming Dynasty, the Forbidden City was both the political nerve center and cultural warehouse of imperial China for over 500 years. Its 9,999 rooms accumulated centuries of tribute: Song Dynasty Ru ware treasured by Qianlong, calligraphy scrolls passed down since the Tang, jade carvings spanning millennia, and the nine-dragon walls and golden thrones that symbolized cosmic authority. Under the Qing, Emperor Qianlong (r. 1735–1796) became Chinese history's most obsessive collector, acquiring and cataloguing objects on a scale never seen before.\n\nThe Palace Museum, established in 1925 after the last emperor's expulsion, opened this treasury to the public. Today it is the world's most visited museum (17+ million visitors per year), and its artifacts — from Ru ware lotus bowls to the Nine-Dragon Wall — anchor the global understanding of Chinese material culture.",
    heroImage: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=800&q=80",
    artifactSlugs: [
      "nine-dragon-wall-forbidden-city",
      "ru-ware-lotus-bowl",
      "along-the-river-during-qingming-festival",
      "blue-white-porcelain-plum-vase",
    ],
    relatedWorkSlugs: ["story-of-yanxi-palace", "empresses-in-the-palace"],
    sources: [
      {
        label: "Wikipedia — Forbidden City",
        url: "https://en.wikipedia.org/wiki/Forbidden_City",
        type: "wiki",
        license: "CC-BY-SA 3.0",
      },
      {
        label: "Palace Museum Official Site",
        url: "https://en.dpm.org.cn",
        type: "official-cn",
      },
    ],
  },
  {
    slug: "prehistoric-jade-cultures",
    title: "Prehistoric Jade Cultures of China",
    subtitle: "5,000 Years Before the Bronze Age: Jade, Ritual, and the Origins of Chinese Civilization",
    category: "material",
    summary:
      "Long before bronze or writing, Neolithic communities across China carved jade into dragons, discs, and ritual objects — establishing the material's sacred status that would endure for 7,000 years.",
    longDescription:
      "China's jade tradition is the oldest continuous craft tradition in the world. The Hongshan culture of Inner Mongolia (c. 4700–2900 BC) produced C-shaped jade dragons, cloud-form pendants, and ritual bi discs thousands of years before the Shang Dynasty invented writing. Simultaneously, the Liangzhu culture of the Yangtze Delta (c. 3300–2300 BC) created monumental jade cong tubes and bi discs deposited in elite tombs — objects so laboriously made (up to years of grinding with sand abrasives) that they implied a stratified society with dedicated specialist workshops. These two Neolithic jade cultures — one northern, one southern — established jade as China's supreme ritual material. When the Bronze Age arrived, jade did not disappear: it was incorporated into every subsequent dynasty's court ritual, burial practice, and philosophical system. The Confucian equation of jade with virtue ('a gentleman's morality is like jade') merely codified what Neolithic shamans had practiced for millennia.",
    heroImage: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&q=80",
    artifactSlugs: [
      "hongshan-jade-dragon",
      "jade-burial-suit",
    ],
    relatedWorkSlugs: ["black-myth-wukong", "creation-of-the-gods"],
    sources: [
      {
        label: "Wikipedia — Chinese jade",
        url: "https://en.wikipedia.org/wiki/Chinese_jade",
        type: "wiki",
        license: "CC-BY-SA 3.0",
      },
      {
        label: "Wikipedia — Hongshan culture",
        url: "https://en.wikipedia.org/wiki/Hongshan_culture",
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
