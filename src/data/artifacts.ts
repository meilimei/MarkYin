export interface SourceCitation {
  label: string;
  url: string;
  type:
    | "wiki"
    | "wikidata"
    | "commons"
    | "met"
    | "smithsonian"
    | "british-museum"
    | "cleveland"
    | "harvard"
    | "mfa-boston"
    | "official-cn"
    | "academic";
  license?: string;
}

export interface ExternalCollectionRef {
  museum: string;
  country: string;
  inventoryNumber?: string;
  collectionUrl: string;
  isPrimaryHolder?: boolean;
  note?: string;
}

export interface PopCultureRef {
  workSlug: string;
  workTitle: string;
  medium: "game" | "film" | "tv" | "anime" | "music" | "book";
  connection: string;
}

export interface ImageCredit {
  author?: string;
  license: string;
  sourceUrl?: string;
  source:
    | "commons"
    | "met"
    | "smithsonian"
    | "british-museum"
    | "cleveland"
    | "harvard"
    | "mfa-boston"
    | "unsplash"
    | "other";
}

export interface Artifact {
  slug: string;
  name: string;
  nameZh?: string;
  dynasty: string;
  period: string;
  museumSlug: string;
  museumName: string;
  category: string;
  material: string;
  description: string;
  story: string;
  significance: string;
  dimensions?: string;
  image: string;
  imageCredit?: ImageCredit;
  funFacts: string[];
  relatedSlugs: string[];
  wikidataId?: string;
  wikipediaUrl?: string;
  externalCollections?: ExternalCollectionRef[];
  popCultureRefs?: PopCultureRef[];
  sources?: SourceCitation[];
  topicSlugs?: string[];
}

export const artifacts: Artifact[] = [
  {
    slug: "along-the-river-during-qingming-festival",
    name: "Along the River During the Qingming Festival",
    dynasty: "Northern Song Dynasty",
    period: "12th century (c. 1085–1145)",
    museumSlug: "the-palace-museum",
    museumName: "The Palace Museum",
    category: "Painting",
    material: "Ink and color on silk handscroll",
    description:
      "One of the most celebrated paintings in the entire history of Chinese art — a panoramic masterpiece capturing daily life along the Bian River during the Qingming Festival in the Song Dynasty capital of Kaifeng.",
    story:
      "Painted by Zhang Zeduan, this extraordinary 5.28-meter-long scroll is a time machine to 12th-century China. It captures over 800 people, 28 boats, 60 animals, 30 buildings, 20 vehicles, 9 sedan chairs, and 170 trees in painstaking detail. From bustling marketplaces to serene riverbanks, from laboring porters to leisurely scholars, the painting presents an encyclopedic portrait of Song Dynasty urban life. The rainbow bridge at its center — a marvel of wooden engineering — has become one of the most iconic images in Chinese art. The painting was lost and rediscovered multiple times across a millennium, surviving wars, thefts, and imperial collapses.",
    significance:
      "Considered the Chinese equivalent of the Mona Lisa in cultural importance, it provides the most detailed visual record of everyday life, commerce, and architecture in Song Dynasty China.",
    dimensions: "24.8 cm × 528.7 cm",
    image: "/images/artifacts/along-the-river-during-qingming-festival.jpg",
    imageCredit: {
      source: "commons",
      author: "Zhang Zeduan",
      license: "Public domain",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Alongtheriver_QingMing.jpg",
    },
    funFacts: [
      "Contains over 800 individually painted human figures",
      "The painting has been copied, forged, and reimagined more than any other Chinese artwork",
      "It was stolen at least 5 times throughout history",
      "Modern scholars have used it to study Song Dynasty economics and urban planning",
    ],
    relatedSlugs: ["da-ke-ding", "jade-burial-suit"],
    nameZh: "清明上河图",
    wikidataId: "Q714802",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Along_the_River_During_the_Qingming_Festival",
    topicSlugs: [],
    externalCollections: [
      {
        museum: "The Palace Museum, Beijing",
        country: "China",
        collectionUrl: "https://www.dpm.org.cn/collection/paint/228226.html",
        isPrimaryHolder: true,
        note: "Original Zhang Zeduan scroll",
      },
      {
        museum: "National Palace Museum, Taipei",
        country: "Taiwan",
        collectionUrl: "https://www.npm.gov.tw",
        isPrimaryHolder: false,
        note: "Qing Court reproduction (Qingyuan version)",
      },
    ],
    sources: [
      {
        label: "Wikipedia",
        url: "https://en.wikipedia.org/wiki/Along_the_River_During_the_Qingming_Festival",
        type: "wiki",
        license: "CC-BY-SA 3.0",
      },
      {
        label: "Palace Museum Official",
        url: "https://www.dpm.org.cn",
        type: "official-cn",
      },
    ],
  },
  {
    slug: "bronze-standing-figure-sanxingdui",
    name: "Bronze Standing Figure",
    dynasty: "Late Shang Dynasty",
    period: "c. 1200–1050 BC",
    museumSlug: "sanxingdui-museum",
    museumName: "Sanxingdui Museum",
    category: "Bronze",
    material: "Bronze with gold leaf",
    description:
      "The tallest and oldest known bronze statue in the world — a 2.62-meter enigmatic figure with enormous hands, seemingly grasping something now lost to time.",
    story:
      "Standing at 2.62 meters tall (including its base), this figure towers over all other known ancient bronze statues. Its oversized hands, held in a circular grasp as though holding a ceremonial object — perhaps a jade cong or elephant tusk — remain one of archaeology's greatest unsolved mysteries. The figure's elongated face, angular features, and elaborate crown bear no resemblance to artifacts from the contemporary Shang Dynasty civilization along the Yellow River, suggesting that the Sanxingdui people developed a completely independent artistic and religious tradition. Was this a priest, a king, or a deity? After 3,000 years, the figure keeps its secrets.",
    significance:
      "This artifact fundamentally changed our understanding of ancient Chinese civilization, proving that sophisticated bronze cultures existed far beyond the Yellow River heartland.",
    dimensions: "Height: 262 cm (including 80 cm base)",
    image: "/images/artifacts/bronze-standing-figure-sanxingdui.jpg",
    imageCredit: {
      source: "commons",
      author: "Siyuwj",
      license: "CC BY-SA 4.0",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:%E4%B8%89%E6%98%9F%E5%A0%86%E5%87%BA%E5%9C%9F%E9%9D%92%E9%93%9C%E5%A4%A7%E7%AB%8B%E4%BA%BA%E5%83%8F,_2017-09-17.jpg",
    },
    funFacts: [
      "It is the tallest bronze figure ever discovered from the ancient world",
      "The statue was found in two pieces in separate sacrificial pits",
      "Scientists still cannot determine what the figure was holding",
      "The bronze-casting technique used was more advanced than contemporary Shang methods",
    ],
    relatedSlugs: ["gold-mask-sanxingdui", "sacred-bronze-tree"],
    nameZh: "青铜大立人像",
    wikidataId: "Q10565984",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Sanxingdui",
    topicSlugs: ["sanxingdui-mysteries"],
    externalCollections: [
      {
        museum: "Sanxingdui Museum",
        country: "China",
        collectionUrl: "https://www.sxd.cn",
        isPrimaryHolder: true,
      },
    ],
    sources: [
      {
        label: "Wikipedia — Sanxingdui",
        url: "https://en.wikipedia.org/wiki/Sanxingdui",
        type: "wiki",
        license: "CC-BY-SA 3.0",
      },
      {
        label: "Sanxingdui Museum Official",
        url: "https://www.sxd.cn",
        type: "official-cn",
      },
    ],
  },
  {
    slug: "gold-mask-sanxingdui",
    name: "Gold Mask of Sanxingdui",
    dynasty: "Late Shang Dynasty",
    period: "c. 1200–1050 BC",
    museumSlug: "sanxingdui-museum",
    museumName: "Sanxingdui Museum",
    category: "Gold",
    material: "Gold foil (approximately 84% pure gold)",
    description:
      "A hauntingly beautiful gold mask weighing about 280 grams, with protruding eyes and an enigmatic smile that has captivated the modern world.",
    story:
      "When archaeologists lifted this gold mask from Pit No. 5 in 2021, it immediately became a global sensation. The half-mask, made from a single sheet of hammered gold, was likely designed to cover the face of a bronze head or statue. Its exaggerated features — wide-set protruding eyes, a broad nose, and a serene, almost alien expression — match the aesthetic of other Sanxingdui bronzes but in luminous gold. The mask speaks of a civilization that venerated the divine through art of stunning sophistication, yet left behind no written records to explain their beliefs.",
    significance:
      "The mask became a symbol of China's archaeological renaissance and one of the most shared cultural artifacts on global social media in 2021.",
    dimensions: "28 cm × 23 cm, weight ~280g",
    image: "/images/artifacts/gold-mask-sanxingdui.jpg",
    imageCredit: {
      source: "commons",
      author: "G41rn8",
      license: "CC BY-SA 4.0",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Sanxingdui_Oct_2007_585.jpg",
    },
    funFacts: [
      "It went viral worldwide when discovered in 2021, becoming a meme and cultural icon",
      "The gold is approximately 84% pure — remarkably high for 3,000-year-old metalwork",
      "It may have originally covered a bronze statue's face",
      "No writing has ever been found at Sanxingdui, deepening the mystery",
    ],
    relatedSlugs: ["bronze-standing-figure-sanxingdui", "sacred-bronze-tree"],
    nameZh: "三星堆金面具",
    wikidataId: "Q11178546",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Sanxingdui",
    topicSlugs: ["sanxingdui-mysteries"],
    externalCollections: [
      {
        museum: "Sanxingdui Museum",
        country: "China",
        collectionUrl: "https://www.sxd.cn",
        isPrimaryHolder: true,
      },
    ],
    sources: [
      {
        label: "Wikipedia — Sanxingdui",
        url: "https://en.wikipedia.org/wiki/Sanxingdui",
        type: "wiki",
        license: "CC-BY-SA 3.0",
      },
    ],
  },
  {
    slug: "sacred-bronze-tree",
    name: "Sacred Bronze Tree",
    dynasty: "Late Shang Dynasty",
    period: "c. 1200–1050 BC",
    museumSlug: "sanxingdui-museum",
    museumName: "Sanxingdui Museum",
    category: "Bronze",
    material: "Bronze",
    description:
      "A nearly 4-meter tall bronze tree with birds, flowers, and a dragon — possibly representing the mythical Fusang Tree connecting heaven and earth.",
    story:
      "Rising 3.96 meters, this is the tallest bronze artifact ever discovered from the ancient world. The tree has three levels of branches, each bearing three clusters of fruit and perching birds — nine birds in total. A sinuous dragon coils down the trunk. Many scholars believe this represents the mythical Fusang Tree (扶桑树) described in the ancient text 'Shan Hai Jing' (Classic of Mountains and Seas), upon which ten suns would rest. The tree was found smashed into over 200 fragments in a sacrificial pit and painstakingly restored over years. One branch remains missing, suggesting the tree may have originally been even taller.",
    significance:
      "The tree connects Sanxingdui's unknown civilization to pan-Asian mythology of the World Tree, suggesting cultural exchanges across vast distances in the Bronze Age.",
    dimensions: "Height: 396 cm",
    image: "/images/artifacts/sacred-bronze-tree.jpg",
    imageCredit: {
      source: "commons",
      author: "Tyg728",
      license: "CC BY-SA 4.0",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:%E2%85%A0%E5%8F%B7%E5%A4%A7%E5%9E%8B%E9%9D%92%E9%93%9C%E7%A5%9E%E6%A0%91.jpg",
    },
    funFacts: [
      "It was reconstructed from over 200 broken fragments",
      "One branch is still missing — the complete tree may have been taller",
      "The 9 birds may represent the 9 of 10 suns from Chinese mythology",
      "Similar 'world tree' concepts exist in Norse, Mesoamerican, and Indian mythologies",
    ],
    relatedSlugs: [
      "bronze-standing-figure-sanxingdui",
      "gold-mask-sanxingdui",
    ],
    nameZh: "青铜神树",
    wikidataId: "Q17029249",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Sanxingdui",
    topicSlugs: ["sanxingdui-mysteries"],
    externalCollections: [
      {
        museum: "Sanxingdui Museum",
        country: "China",
        collectionUrl: "https://www.sxd.cn",
        isPrimaryHolder: true,
      },
    ],
    sources: [
      {
        label: "Wikipedia — Sanxingdui",
        url: "https://en.wikipedia.org/wiki/Sanxingdui",
        type: "wiki",
        license: "CC-BY-SA 3.0",
      },
    ],
  },
  {
    slug: "simuwu-ding",
    name: "Simuwu Ding (Houmuwu Ding)",
    dynasty: "Late Shang Dynasty",
    period: "c. 1300–1046 BC",
    museumSlug: "national-museum-of-china",
    museumName: "National Museum of China",
    category: "Bronze",
    material: "Bronze",
    description:
      "The heaviest piece of bronze work ever found in the ancient world — a monumental ritual vessel weighing 832.84 kg that required the coordinated effort of hundreds of craftsmen.",
    story:
      "This colossal rectangular ding (鼎) was cast as a ritual vessel for royal ancestor worship during the late Shang Dynasty. At 832.84 kg, it remains the heaviest ancient bronze vessel ever discovered anywhere in the world. Creating it required an estimated 1,000 kg of raw materials and the coordinated labor of 200-300 craftsmen working simultaneously. The inscription inside reads 'Si Mu Wu' (later reinterpreted as 'Hou Mu Wu'), believed to reference a queen of the Shang royal house. It was discovered by a farmer in 1939 in Anyang, Henan Province, and locals buried it again to prevent Japanese troops from seizing it during WWII. It was finally recovered in 1946.",
    significance:
      "Represents the absolute pinnacle of Bronze Age metallurgy and demonstrates the extraordinary organizational capability of the Shang state.",
    dimensions: "133 cm tall, 110 cm long, 79 cm wide",
    image: "/images/artifacts/simuwu-ding.jpg",
    imageCredit: {
      source: "commons",
      author: "Mlogic",
      license: "CC BY-SA 3.0",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:HouMuWuDingFullView.jpg",
    },
    funFacts: [
      "It weighs 832.84 kg — heavier than a grand piano",
      "Villagers hid it underground to prevent Japanese looting during WWII",
      "Making it required about 1,000 kg of copper, tin, and lead",
      "The casting process needed 200-300 workers operating simultaneously",
    ],
    relatedSlugs: ["da-ke-ding", "bianzhong-marquis-yi"],
    nameZh: "司母戊鼎（后母戊鼎）",
    wikidataId: "Q10917916",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Houmuwu_ding",
    topicSlugs: ["bronze-dings-through-the-ages"],
    externalCollections: [
      {
        museum: "National Museum of China",
        country: "China",
        collectionUrl: "https://www.chnmuseum.cn",
        isPrimaryHolder: true,
      },
    ],
    sources: [
      {
        label: "Wikipedia — Houmuwu ding",
        url: "https://en.wikipedia.org/wiki/Houmuwu_ding",
        type: "wiki",
        license: "CC-BY-SA 3.0",
      },
      {
        label: "National Museum of China",
        url: "https://www.chnmuseum.cn",
        type: "official-cn",
      },
    ],
  },
  {
    slug: "jade-burial-suit",
    name: "Jade Burial Suit of Prince Liu Sheng",
    dynasty: "Western Han Dynasty",
    period: "c. 113 BC",
    museumSlug: "national-museum-of-china",
    museumName: "National Museum of China",
    category: "Jade",
    material: "Jade tiles with gold wire",
    description:
      "An entire suit made of 2,498 jade tiles sewn together with 1,100 grams of gold wire — built to grant immortality to a Han prince.",
    story:
      "Prince Liu Sheng, brother of Emperor Wu of Han, believed that jade could preserve the body and grant immortality. Upon his death around 113 BC, he was buried in this extraordinary full-body suit crafted from 2,498 individual jade tiles, each meticulously cut to shape and connected with 1,100 grams of gold wire. The crafting is estimated to have taken over 10 years. Tragically for the prince, jade did not preserve his body — only fragments of bone remained when the tomb was opened in 1968. But the suit itself survived 2,000 years in pristine condition, becoming one of the most iconic symbols of Han Dynasty belief in the afterlife.",
    significance:
      "One of the finest examples of Han Dynasty funerary art, revealing the ancient Chinese aristocracy's obsession with immortality and the extraordinary lengths they pursued it.",
    dimensions: "Full body length: approximately 188 cm",
    image: "/images/artifacts/jade-burial-suit.jpg",
    imageCredit: {
      source: "commons",
      author: "Zcm11",
      license: "CC BY-SA 3.0",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Xihan_Tomb_1_Jade_Burial_Suit.JPG",
    },
    funFacts: [
      "It took an estimated 10+ years for skilled artisans to make",
      "Only royals and the highest nobles were permitted gold-wire jade suits",
      "Despite the jade, Liu Sheng's body completely decomposed",
      "The practice was eventually banned by later emperors as too extravagant",
    ],
    relatedSlugs: ["simuwu-ding", "along-the-river-during-qingming-festival"],
    nameZh: "金缕玉衣",
    wikidataId: "Q2568517",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Jade_burial_suit",
    topicSlugs: ["jade-and-immortality"],
    externalCollections: [
      {
        museum: "National Museum of China",
        country: "China",
        collectionUrl: "https://www.chnmuseum.cn",
        isPrimaryHolder: true,
      },
      {
        museum: "Hebei Museum",
        country: "China",
        collectionUrl: "https://www.hebeimuseum.org",
        isPrimaryHolder: false,
        note: "Other jade burial suits from Mancheng tombs",
      },
    ],
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
    slug: "bianzhong-marquis-yi",
    name: "Bianzhong of Marquis Yi of Zeng",
    dynasty: "Warring States Period",
    period: "433 BC",
    museumSlug: "hubei-provincial-museum",
    museumName: "Hubei Provincial Museum",
    category: "Bronze / Musical Instrument",
    material: "Bronze with gold inlay",
    description:
      "A set of 65 bronze bells that, after 2,400 years underground, can still produce music spanning five octaves with perfect tonal accuracy.",
    story:
      "Discovered in 1978 in the tomb of Marquis Yi of Zeng in Suizhou, Hubei Province, this set of 65 bronze bells is arguably the most important musical artifact in world history. Arranged on an L-shaped wooden frame spanning 7.48 meters, each bell can produce two distinct musical notes depending on where it is struck — a feature unique to Chinese bells. Together, they cover a range of five octaves. When researchers played them for the first time in 2,400 years, the bells produced hauntingly beautiful music with tonal accuracy that stunned musicologists worldwide. The smallest bell weighs 2.4 kg; the largest weighs 203.6 kg. Inscriptions totaling 3,755 characters record musical theory, proving that ancient Chinese understanding of acoustics was far more advanced than previously believed.",
    significance:
      "Revolutionized our understanding of ancient Chinese music, metallurgy, and acoustic science, proving the existence of a 12-tone musical system 2,000 years before Europe.",
    dimensions: "Frame: 748 cm long, 265 cm high; Total weight: 4,421 kg",
    image: "/images/artifacts/bianzhong-marquis-yi.jpg",
    imageCredit: {
      source: "commons",
      author: "Windmemories",
      license: "CC BY-SA 4.0",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:20230208_Chime_bells_of_Marquis_Yi_of_Zeng.jpg",
    },
    funFacts: [
      "Each bell produces TWO different notes depending on where you strike it",
      "The complete set weighs over 4.4 tons",
      "Contains 3,755 characters of inscribed musical theory",
      "China demonstrated a 12-tone musical system 2,000 years before Europe",
    ],
    relatedSlugs: ["sword-of-goujian", "simuwu-ding"],
    nameZh: "曾侯乙编钟",
    wikidataId: "Q4902549",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Bianzhong_of_Marquis_Yi_of_Zeng",
    topicSlugs: [],
    externalCollections: [
      {
        museum: "Hubei Provincial Museum",
        country: "China",
        collectionUrl: "https://www.hbww.org",
        isPrimaryHolder: true,
      },
    ],
    sources: [
      {
        label: "Wikipedia — Bianzhong of Marquis Yi of Zeng",
        url: "https://en.wikipedia.org/wiki/Bianzhong_of_Marquis_Yi_of_Zeng",
        type: "wiki",
        license: "CC-BY-SA 3.0",
      },
    ],
  },
  {
    slug: "sword-of-goujian",
    name: "Sword of Goujian",
    dynasty: "Spring and Autumn Period",
    period: "c. 510–465 BC",
    museumSlug: "hubei-provincial-museum",
    museumName: "Hubei Provincial Museum",
    category: "Weapons",
    material: "Bronze with turquoise and blue crystal inlay",
    description:
      "A 2,500-year-old sword found still razor-sharp and untarnished — a testament to ancient Chinese metallurgical genius.",
    story:
      "When archaeologists discovered this sword in a waterlogged tomb in Jiangling, Hubei in 1965, they were stunned: after 2,500 years underground, the blade was still razor-sharp and virtually free of corrosion. A test-cut through 20 layers of paper confirmed its edge. The eight-character inscription on the blade reads: 'King of Yue' and 'made this sword for his personal use,' identifying it as the personal weapon of Goujian — the legendary king who endured humiliation, slept on brushwood, and tasted gall to motivate himself before ultimately conquering the rival state of Wu. The blade's incredible preservation is attributed to a chromium-rich oxide layer — a form of anti-corrosion technology that would not be 'reinvented' in the West until the 20th century.",
    significance:
      "Demonstrates that ancient Chinese metallurgists had mastered chromium-based anti-corrosion technology 2,000+ years before modern science.",
    dimensions: "55.7 cm long, 4.6 cm wide",
    image: "/images/artifacts/sword-of-goujian.jpg",
    imageCredit: {
      source: "commons",
      author: "Windmemories",
      license: "CC BY-SA 4.0",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:20230208_Bronze_sword_used_by_King_Goujian_of_Yue_01.jpg",
    },
    funFacts: [
      "Still sharp enough to cut paper after 2,500 years",
      "Contains a chromium oxide anti-corrosion layer — technology 're-discovered' in the 1900s",
      "King Goujian's story of perseverance is one of China's most famous legends",
      "The sword was found alongside 20+ other weapons, but only this one was pristine",
    ],
    relatedSlugs: ["bianzhong-marquis-yi", "simuwu-ding"],
    nameZh: "越王勾践剑",
    wikidataId: "Q836117",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Sword_of_Goujian",
    topicSlugs: [],
    externalCollections: [
      {
        museum: "Hubei Provincial Museum",
        country: "China",
        collectionUrl: "https://www.hbww.org",
        isPrimaryHolder: true,
      },
    ],
    sources: [
      {
        label: "Wikipedia — Sword of Goujian",
        url: "https://en.wikipedia.org/wiki/Sword_of_Goujian",
        type: "wiki",
        license: "CC-BY-SA 3.0",
      },
    ],
  },
  {
    slug: "beast-head-agate-cup",
    name: "Beast-Head Agate Cup",
    dynasty: "Tang Dynasty",
    period: "618–907 AD",
    museumSlug: "shaanxi-history-museum",
    museumName: "Shaanxi History Museum",
    category: "Jade & Gemstone",
    material: "Banded agate with gold fitting",
    description:
      "An exquisite agate rhyton carved into a bull's head — a masterpiece reflecting the cultural fusion of the Silk Road's golden age.",
    story:
      "This extraordinary cup, carved from a single piece of rare banded agate, takes the form of a rhyton — a drinking vessel ending in an animal head, a form that originated in ancient Persia and Greece. The bull's head at the base features a removable gold stopper in its mouth, through which wine could be poured. The cup embodies the Tang Dynasty at its most cosmopolitan: Chinese craftsmanship meeting Central Asian design through the cultural superhighway of the Silk Road. Its flawless execution — exploiting the natural color banding of the agate to create the illusion of fur — represents the pinnacle of Tang lapidary art. It is one of the eight treasures prohibited from leaving China.",
    significance:
      "A tangible symbol of Silk Road cultural exchange, and one of only a handful of Chinese artifacts permanently banned from overseas exhibition due to its irreplaceable value.",
    dimensions: "15.6 cm long, 6.8 cm tall",
    image: "/images/artifacts/beast-head-agate-cup.jpg",
    imageCredit: {
      source: "commons",
      author: "Kougo",
      license: "CC BY-SA 4.0",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:%E5%94%90-%E7%8E%9B%E7%91%99%E5%85%BD%E9%A6%96%E6%9D%AF.jpg",
    },
    funFacts: [
      "It is one of China's national treasures permanently banned from leaving the country",
      "Carved from a single piece of natural banded agate",
      "The rhyton form originated in Persia/Greece — proving Silk Road cultural exchange",
      "The gold bull nose doubles as a functional wine stopper",
    ],
    relatedSlugs: [
      "dancing-horse-cup",
      "along-the-river-during-qingming-festival",
    ],
    nameZh: "镶金兽首玛瑙杯",
    wikidataId: "Q10894661",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Shaanxi_History_Museum",
    topicSlugs: ["tang-silk-road-treasures"],
    externalCollections: [
      {
        museum: "Shaanxi History Museum",
        country: "China",
        collectionUrl: "https://www.sxhm.com",
        isPrimaryHolder: true,
      },
      {
        museum: "The Metropolitan Museum of Art (comparative Tang rhyton)",
        country: "USA",
        collectionUrl: "https://www.metmuseum.org/art/collection/search#!?material=Agate",
        isPrimaryHolder: false,
        note: "The Met holds related Tang-era silver rhyta for comparison",
      },
    ],
    sources: [
      {
        label: "Shaanxi History Museum",
        url: "https://www.sxhm.com",
        type: "official-cn",
      },
    ],
  },
  {
    slug: "da-ke-ding",
    name: "Da Ke Ding (Large Ke Tripod)",
    dynasty: "Western Zhou Dynasty",
    period: "c. 10th century BC",
    museumSlug: "shanghai-museum",
    museumName: "Shanghai Museum",
    category: "Bronze",
    material: "Bronze",
    description:
      "One of the most important inscribed bronze vessels of the Western Zhou Dynasty, bearing 290 characters that document a key moment in Chinese feudal history.",
    story:
      "The Da Ke Ding is a monumental bronze tripod cast during the Western Zhou Dynasty, approximately 3,000 years ago. Its interior bears an inscription of 290 characters — one of the longest and most historically significant bronze inscriptions known — recording the deeds of a nobleman named Ke and the royal grants he received. The vessel survived millennia of turmoil. In the late Qing Dynasty, it was acquired by the Pan family of Suzhou, who buried it during the Taiping Rebellion and later hid it during the Japanese invasion. Three generations of the Pan family protected this national treasure at great personal risk before donating it to the Shanghai Museum in 1951.",
    significance:
      "Its inscription is a primary historical source for understanding Western Zhou political structure, and the vessel's survival story embodies Chinese dedication to cultural preservation.",
    dimensions: "93.1 cm tall, weight 201.5 kg",
    image: "/images/artifacts/da-ke-ding.jpg",
    imageCredit: {
      source: "commons",
      license: "CC BY-SA 3.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Da_Ke_ding.jpg",
    },
    funFacts: [
      "The Pan family protected it for over 80 years through war, rebellion, and occupation",
      "Its 290-character inscription is one of the longest ever found on a bronze vessel",
      "The Pan family buried it underground TWICE to protect it from invaders",
      "It was voluntarily donated to the Shanghai Museum in 1951",
    ],
    relatedSlugs: [
      "simuwu-ding",
      "along-the-river-during-qingming-festival",
    ],
    nameZh: "大克鼎",
    wikidataId: "Q10933601",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Da_Ke_ding",
    topicSlugs: ["bronze-dings-through-the-ages"],
    externalCollections: [
      {
        museum: "Shanghai Museum",
        country: "China",
        collectionUrl: "https://www.shanghaimuseum.net",
        isPrimaryHolder: true,
      },
    ],
    sources: [
      {
        label: "Wikipedia — Da Ke ding",
        url: "https://en.wikipedia.org/wiki/Da_Ke_ding",
        type: "wiki",
        license: "CC-BY-SA 3.0",
      },
    ],
  },
  {
    slug: "terracotta-warriors",
    name: "Terracotta Warriors",
    dynasty: "Qin Dynasty",
    period: "c. 210–209 BC",
    museumSlug: "terracotta-warriors-museum",
    museumName: "Museum of Terracotta Warriors and Horses",
    category: "Sculpture",
    material: "Terracotta (fired clay)",
    description:
      "An army of over 8,000 life-sized clay soldiers, each with unique facial features, built to guard China's first emperor in the afterlife.",
    story:
      "In 1974, farmers digging a well near Xi'an stumbled upon one of the most spectacular archaeological discoveries in human history. Buried for over 2,200 years, the Terracotta Army was commissioned by Qin Shi Huang, China's first emperor, to accompany him in the afterlife. Over 8,000 soldiers, 130 chariots, 520 horses, and 150 cavalry horses have been unearthed so far. The most remarkable feature: every single warrior has a unique face. No two are identical. They originally bore vivid paint — red, green, blue, purple — most of which faded within minutes of exposure to air upon excavation. Ancient records suggest the full tomb complex covers 98 square kilometers, and the emperor's actual burial chamber — rumored to contain rivers of mercury — remains sealed and unexcavated.",
    significance:
      "The greatest archaeological discovery of the 20th century, revealing the military organization, artistry, and imperial ambition of China's first unified dynasty.",
    dimensions: "Average soldier height: 180-197 cm",
    image: "/images/artifacts/terracotta-warriors.jpg",
    imageCredit: {
      source: "commons",
      author: "Jmhullot",
      license: "CC BY 3.0",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Terracotta_Army%2C_View_of_Pit_1.jpg",
    },
    funFacts: [
      "No two warriors have the same face — over 8,000 unique portraits",
      "They were originally painted in vivid colors that faded upon exposure to air",
      "The emperor's actual tomb has never been opened",
      "Ancient texts claim the tomb contains rivers of liquid mercury — soil tests confirm elevated mercury levels",
    ],
    relatedSlugs: ["qin-bronze-chariot", "simuwu-ding", "sword-of-goujian"],
    nameZh: "秦始皇陵兵马俑",
    wikidataId: "Q47672",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Terracotta_Army",
    topicSlugs: ["qin-empire-terracotta-army", "warriors-weapons-and-empire"],
    externalCollections: [
      {
        museum: "Emperor Qinshihuang's Mausoleum Site Museum",
        country: "China",
        collectionUrl: "https://www.bmy.com.cn",
        isPrimaryHolder: true,
      },
      {
        museum: "The Metropolitan Museum of Art",
        country: "USA",
        collectionUrl: "https://www.metmuseum.org",
        isPrimaryHolder: false,
        note: "Tours and loans of select warriors",
      },
      {
        museum: "British Museum",
        country: "UK",
        collectionUrl: "https://www.britishmuseum.org",
        isPrimaryHolder: false,
        note: "Hosted major Terracotta Army exhibitions (2007-2008, 2018)",
      },
    ],
    sources: [
      {
        label: "Wikipedia — Terracotta Army",
        url: "https://en.wikipedia.org/wiki/Terracotta_Army",
        type: "wiki",
        license: "CC-BY-SA 3.0",
      },
      {
        label: "UNESCO World Heritage: Mausoleum of the First Qin Emperor",
        url: "https://whc.unesco.org/en/list/441/",
        type: "academic",
      },
    ],
  },
  {
    slug: "blue-white-porcelain-plum-vase",
    name: "Blue-and-White Porcelain Plum Vase (Xiao He Chases Han Xin)",
    dynasty: "Yuan Dynasty",
    period: "c. 1271–1368 AD",
    museumSlug: "nanjing-museum",
    museumName: "Nanjing Museum",
    category: "Ceramics",
    material: "Porcelain with cobalt blue underglaze",
    description:
      "The crown jewel of Yuan Dynasty porcelain — a meiping vase depicting the dramatic story of Xiao He's midnight chase to retrieve the brilliant general Han Xin.",
    story:
      "This meiping (plum vase) is universally regarded as the finest piece of Yuan Dynasty blue-and-white porcelain in existence. Its surface tells a complete narrative: the story of Xiao He, prime minister of the early Han Dynasty, racing on horseback through the moonlit night to catch Han Xin, a military genius who was leaving in frustration. Xiao He's successful persuasion of Han Xin to return proved pivotal — Han Xin went on to lead the Han armies to decisive victories, establishing the Han Dynasty. The vase's painting is extraordinarily dynamic, with flowing robes, galloping horses, and a landscape rendered in masterful brushwork that rivals the finest scroll paintings. Only three Yuan blue-and-white meiping vases with narrative scenes are known to exist worldwide.",
    significance:
      "Considered the single most valuable piece of Yuan Dynasty porcelain, it represents the birth of the blue-and-white aesthetic that would dominate world ceramics for centuries.",
    dimensions: "44.1 cm tall, 13 cm mouth diameter",
    image: "https://images.unsplash.com/photo-1530968831187-a937ade4d6cf?w=800&q=80",
    funFacts: [
      "One of only 3 known Yuan narrative blue-and-white meiping vases in the world",
      "Estimated insurance value exceeds hundreds of millions of RMB",
      "The story it depicts helped establish the 400-year Han Dynasty",
      "Yuan blue-and-white porcelain was originally made primarily for Middle Eastern export markets",
    ],
    relatedSlugs: ["beast-head-agate-cup", "da-ke-ding"],
    nameZh: "青花萧何月下追韩信梅瓶",
    wikidataId: "Q3854013",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Blue_and_white_pottery",
    topicSlugs: ["blue-and-white-porcelain"],
    externalCollections: [
      {
        museum: "Nanjing Museum",
        country: "China",
        collectionUrl: "https://www.njmuseum.com",
        isPrimaryHolder: true,
      },
      {
        museum: "The Metropolitan Museum of Art",
        country: "USA",
        collectionUrl: "https://www.metmuseum.org/art/collection/search?department=6&q=Yuan+blue+white",
        isPrimaryHolder: false,
        note: "Extensive Yuan-Ming blue-and-white collection",
      },
      {
        museum: "British Museum",
        country: "UK",
        collectionUrl: "https://www.britishmuseum.org/collection/search?material=porcelain&place=China",
        isPrimaryHolder: false,
        note: "Percival David Foundation Chinese ceramics collection",
      },
    ],
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
    slug: "hongshan-jade-dragon",
    name: "Hongshan Culture C-Shaped Jade Dragon",
    dynasty: "Neolithic (Hongshan Culture)",
    period: "c. 4700–2900 BC",
    museumSlug: "national-museum-of-china",
    museumName: "National Museum of China",
    category: "Jade",
    material: "Nephrite jade (dark green)",
    description:
      "Often called China's first dragon, this 26-cm C-shaped jade figure is the most iconic artifact of the Hongshan Culture and a symbol of the prehistoric origins of dragon worship.",
    story:
      "Discovered in 1971 in Ongniud Banner, Inner Mongolia, this jade carving predates Chinese civilization's written record by millennia. Its elegant C-curve, boar-like snout, flowing mane, and smooth polish demonstrate astonishing Neolithic lapidary skill. The figure's form — coiled, toothless, with an open mouth — became the template for every later Chinese dragon. For decades after discovery it was mistakenly called a 'pig dragon'; only in the 1980s did scholars recognize it as a dragon, pushing the origin of dragon symbolism back over 5,000 years. The Hongshan culture's jade ritual tradition shows that complex beliefs about heaven, authority, and the spirit world existed long before the Bronze Age dynasties.",
    significance:
      "Proof that dragon worship — China's central mythological motif — is not a Bronze Age invention but a Neolithic one, with roots older than any written Chinese text.",
    dimensions: "26 cm height, body diameter approximately 2.3–2.9 cm",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&q=80",
    funFacts: [
      "Predates written Chinese by at least 2,000 years",
      "The drill hole at the curve shows it was worn suspended — likely a shaman's pendant",
      "Hongshan jade-working technology required sand abrasives and bamboo drills — no metal tools existed",
      "Featured on a Chinese postage stamp as a national treasure icon",
    ],
    relatedSlugs: ["jade-burial-suit", "gold-mask-sanxingdui"],
    nameZh: "红山文化玉龙",
    wikidataId: "Q1076844",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Hongshan_culture",
    topicSlugs: ["jade-and-immortality", "mythic-animals-and-cosmic-order", "prehistoric-jade-cultures"],
    externalCollections: [
      {
        museum: "National Museum of China",
        country: "China",
        collectionUrl: "https://en.chnmuseum.cn",
        isPrimaryHolder: true,
      },
    ],
    sources: [
      {
        label: "Wikipedia — Hongshan culture",
        url: "https://en.wikipedia.org/wiki/Hongshan_culture",
        type: "wiki",
        license: "CC-BY-SA 3.0",
      },
    ],
  },
  {
    slug: "fuhao-owl-zun",
    name: "Owl-Shaped Zun of Lady Fuhao",
    dynasty: "Late Shang Dynasty",
    period: "c. 1200 BC",
    museumSlug: "national-museum-of-china",
    museumName: "National Museum of China",
    category: "Bronze",
    material: "Bronze with intaglio decoration",
    description:
      "A pair of owl-shaped bronze ritual wine vessels from the tomb of Lady Fuhao, the only archaeologically verified female military commander in Chinese history.",
    story:
      "Lady Fuhao (妇好) was a consort of King Wu Ding of the Shang Dynasty and one of China's earliest known military leaders. Oracle bone inscriptions record that she commanded up to 13,000 troops in battle. Her undisturbed tomb, discovered in 1976 at Yinxu (Anyang), contained over 1,900 objects — the most intact Shang royal burial ever found. Among them, this pair of owl zun (尊) stands out for its artistic power: a fierce, stocky owl with alert ears, wide eyes, tail forming a third support leg, and surface covered in thunder-pattern (leiwen) motifs. The owl was a protective spirit in Shang belief, associated with night warfare and ancestral guardianship. The vessel's interior bears the inscription '妇好' confirming ownership.",
    significance:
      "The most famous object from the only archaeologically confirmed tomb of a Shang Dynasty royal woman, linking women's military power, bronze ritual art, and ancestor worship.",
    dimensions: "45.9 cm height, weight 16.7 kg",
    image: "https://images.unsplash.com/photo-1569587112025-0d460e81a126?w=800&q=80",
    funFacts: [
      "Lady Fuhao's tomb contained 468 bronzes — more than any other Shang burial",
      "Oracle bones record that she led a successful military campaign against the Tu Fang people",
      "The owl was considered an auspicious battle spirit in Shang culture",
      "Her tomb was the only unlooted Shang royal burial ever discovered",
    ],
    relatedSlugs: ["simuwu-ding", "bronze-standing-figure-sanxingdui"],
    nameZh: "妇好鸮尊",
    wikidataId: "Q10921803",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Fu_Hao",
    topicSlugs: ["bronze-dings-through-the-ages", "warriors-weapons-and-empire", "mythic-animals-and-cosmic-order"],
    externalCollections: [
      {
        museum: "National Museum of China",
        country: "China",
        collectionUrl: "https://en.chnmuseum.cn",
        isPrimaryHolder: true,
      },
    ],
    sources: [
      {
        label: "Wikipedia — Fu Hao",
        url: "https://en.wikipedia.org/wiki/Fu_Hao",
        type: "wiki",
        license: "CC-BY-SA 3.0",
      },
    ],
  },
  {
    slug: "dunhuang-flying-apsara",
    name: "Dunhuang Flying Apsara Mural (Cave 320)",
    dynasty: "Tang Dynasty",
    period: "c. 705–781 AD (High Tang)",
    museumSlug: "dunhuang-research-academy",
    museumName: "Dunhuang Research Academy (Mogao Caves)",
    category: "Painting",
    material: "Mineral pigment on plaster wall",
    description:
      "The iconic flying apsara (feitian 飞天) murals of the Mogao Caves — bodiless celestial figures trailing ribbons through clouds — represent the pinnacle of Buddhist cave art and China's most recognized mural tradition.",
    story:
      "The Mogao Caves (Dunhuang) contain over 4,500 square meters of mural paintings spanning a millennium (4th–14th century). Among them, the 'flying apsara' figures — celestial musicians and dancers who scatter flowers and play instruments while soaring without wings — became Dunhuang's visual signature. Cave 320's High Tang apsaras are widely considered the finest: weightless bodies curve in S-shaped arabesques, trailing scarves draw flowing lines across the plaster sky, and faces carry the full-fleshed Tang ideal of beauty. These figures synthesize Indian Buddhist iconography, Central Asian decorative arts, and Chinese line-drawing (baimiao) technique into something entirely new. The apsaras became so iconic that the Chinese space program named its first commercial rocket 'Feitian' (Flying Apsara) after them.",
    significance:
      "The most globally recognized symbol of the Dunhuang Mogao Caves, designated a UNESCO World Heritage Site in 1987 — and one of the most searched terms in Chinese art globally.",
    dimensions: "Wall section approximately 3.2 × 1.8 meters",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80",
    funFacts: [
      "There are 4,500+ flying apsara figures across 270 caves at Dunhuang",
      "The Chinese space program's first crewed mission patch featured the flying apsara motif",
      "Dunhuang apsaras are wingless — they fly by spiritual force alone, unlike Western angels",
      "The caves were sealed and lost for nearly 900 years before rediscovery in 1900",
    ],
    relatedSlugs: ["beast-head-agate-cup", "along-the-river-during-qingming-festival"],
    nameZh: "敦煌飞天壁画",
    wikidataId: "Q913884",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Mogao_Caves",
    topicSlugs: ["tang-silk-road-treasures", "dunhuang-cave-art"],
    externalCollections: [
      {
        museum: "Dunhuang Research Academy (Mogao Caves)",
        country: "China",
        collectionUrl: "https://www.mogaoku.net",
        isPrimaryHolder: true,
      },
      {
        museum: "The British Museum",
        country: "UK",
        collectionUrl: "https://www.britishmuseum.org/collection/search?keyword=dunhuang",
        isPrimaryHolder: false,
        note: "Stein Collection: manuscripts and silk paintings from Cave 17",
      },
    ],
    sources: [
      {
        label: "Wikipedia — Mogao Caves",
        url: "https://en.wikipedia.org/wiki/Mogao_Caves",
        type: "wiki",
        license: "CC-BY-SA 3.0",
      },
    ],
  },
  {
    slug: "tang-sancai-camel",
    name: "Tang Sancai Three-Color Glazed Camel with Musicians",
    dynasty: "Tang Dynasty",
    period: "c. 723 AD",
    museumSlug: "national-museum-of-china",
    museumName: "National Museum of China",
    category: "Ceramics",
    material: "Earthenware with lead-fluxed sancai (three-color) glaze",
    description:
      "A tomb figurine depicting a Bactrian camel carrying a musical troupe — a masterpiece of Tang funerary art that captures the cosmopolitan energy of Silk Road trade in a single object.",
    story:
      "This tomb figure shows a Bactrian (two-humped) camel standing tall, carrying a platform of musicians between its humps. The musicians — some with Central Asian features — play instruments while one figure sings with raised face. The piece is a perfect time capsule of Tang Dynasty internationalism: Sogdian and Persian merchants, Central Asian musicians, caravans loaded with luxury goods, and a court culture fascinated by 'exotic' entertainment from the West. Tang sancai pottery was made for burial, not daily use — its soft lead glaze cannot hold water. The dripped amber, green, and cream glazes run together in controlled randomness, a technique admired worldwide. This particular piece, excavated from a Tang tomb near Xi'an, is considered the finest known sancai camel with musicians.",
    significance:
      "The single most iconic image of Tang Dynasty Silk Road cosmopolitanism — a visual shorthand for the most globally connected period in pre-modern Chinese history.",
    dimensions: "48.5 cm height",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    funFacts: [
      "Tang sancai was a funerary ware — too fragile for daily use",
      "The musicians include figures playing pipa (lute), flute, and harp",
      "Bactrian camels could carry 250 kg across the Gobi Desert",
      "Tang Xi'an had over 1 million residents and 10,000+ foreign merchants",
    ],
    relatedSlugs: ["beast-head-agate-cup", "terracotta-warriors"],
    nameZh: "唐三彩骆驼载乐俑",
    wikidataId: "Q7682683",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Tang_sancai",
    topicSlugs: ["tang-silk-road-treasures", "music-ritual-and-performance"],
    externalCollections: [
      {
        museum: "National Museum of China",
        country: "China",
        collectionUrl: "https://en.chnmuseum.cn",
        isPrimaryHolder: true,
      },
      {
        museum: "The Metropolitan Museum of Art",
        country: "USA",
        collectionUrl: "https://www.metmuseum.org/art/collection/search?q=Tang+sancai",
        isPrimaryHolder: false,
        note: "Multiple sancai tomb figures in Chinese galleries",
      },
    ],
    sources: [
      {
        label: "Wikipedia — Tang sancai",
        url: "https://en.wikipedia.org/wiki/Tang_sancai",
        type: "wiki",
        license: "CC-BY-SA 3.0",
      },
    ],
  },
  {
    slug: "nine-dragon-wall-forbidden-city",
    name: "Nine-Dragon Wall of the Forbidden City",
    dynasty: "Qing Dynasty (Qianlong era)",
    period: "1771 AD",
    museumSlug: "the-palace-museum",
    museumName: "The Palace Museum (Forbidden City)",
    category: "Sculpture",
    material: "Glazed ceramic tiles (liuli) on brick wall",
    description:
      "A monumental wall of 270 glazed tiles depicting nine writhing dragons amid clouds and waves — one of only three surviving nine-dragon walls in China and the most visited architectural artwork in the Forbidden City.",
    story:
      "Built in 1771 during Emperor Qianlong's reign, the wall stands 3.5 meters tall and 29.4 meters long, facing the entrance of the Palace of Tranquil Longevity (Ningshou Gong). Nine coiling dragons — each in a different color and posture — chase flaming pearls against a background of stylized clouds, mountains, and sea waves. The number nine was reserved exclusively for the emperor: as the highest single yang digit, it symbolized supreme sovereign power. In Qing dynasty protocol, only the emperor could use nine-dragon imagery on architectural screens, robes, and ritual objects. The wall functions both as spirit screen (yingbi) to ward off evil and as political billboard — a permanent declaration of imperial cosmological authority visible to all who approached the inner court.",
    significance:
      "The supreme example of dragon imagery as state power — the most photographed architectural detail in the Forbidden City and a globally searched icon of Chinese imperial symbolism.",
    dimensions: "3.5 m height × 29.4 m length × 1.2 m thickness",
    image: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=800&q=80",
    funFacts: [
      "Contains exactly 270 glazed ceramic tiles",
      "One tile was secretly replaced with wood (now visible by its paint) after a craftsman broke the original during construction",
      "Only three nine-dragon walls survive in China (the others are in Datong and Beihai Park)",
      "The nine colors represent the completeness of the imperial cosmos",
    ],
    relatedSlugs: ["along-the-river-during-qingming-festival", "blue-white-porcelain-plum-vase"],
    nameZh: "故宫九龙壁",
    wikidataId: "Q3512015",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Nine-Dragon_Wall",
    topicSlugs: ["imperial-power-and-court-life", "mythic-animals-and-cosmic-order", "forbidden-city-imperial-collection"],
    externalCollections: [
      {
        museum: "The Palace Museum (Forbidden City)",
        country: "China",
        collectionUrl: "https://en.dpm.org.cn",
        isPrimaryHolder: true,
      },
    ],
    sources: [
      {
        label: "Wikipedia — Nine-Dragon Wall",
        url: "https://en.wikipedia.org/wiki/Nine-Dragon_Wall",
        type: "wiki",
        license: "CC-BY-SA 3.0",
      },
    ],
  },
  {
    slug: "ru-ware-lotus-bowl",
    name: "Ru Ware Sky-Blue Lotus Bowl",
    dynasty: "Northern Song Dynasty",
    period: "c. 1086–1106 AD",
    museumSlug: "the-palace-museum",
    museumName: "The Palace Museum (Forbidden City)",
    category: "Ceramics",
    material: "Stoneware with sky-blue (tianqing) crackled glaze",
    description:
      "A nearly flawless example of Ru ware — the rarest and most prized ceramic type in all of Chinese art. Fewer than 90 pieces survive worldwide.",
    story:
      "Ru ware was produced for less than 20 years (c. 1086–1106) exclusively for the Northern Song imperial court before the kilns were destroyed during the Jurchen invasion. Its sky-blue crackled glaze, applied razor-thin over a dark body, has been compared to 'the sky after rain' — a phrase attributed to Emperor Huizong himself. The lotus-petal form (lianhua) adds Buddhist symbolism to what is already the most restrained, intellectual ceramic glaze in Chinese history. Because so few pieces survived the fall of Northern Song, Ru ware has been obsessively collected by every subsequent dynasty. A single Ru ware brush washer sold at auction in 2017 for USD 37.7 million — the highest price ever achieved for Chinese ceramics.",
    significance:
      "The rarest imperial ceramic in Chinese art — fewer than 90 authenticated pieces exist — representing the ultimate Song Dynasty aesthetic of 'less is more.'",
    dimensions: "10.4 cm diameter, 3.5 cm height",
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80",
    funFacts: [
      "Fewer than 90 pieces of Ru ware survive — about 21 are in the Palace Museum",
      "A Ru ware brush washer sold for USD 37.7 million at Sotheby's in 2017",
      "Emperor Huizong reportedly described the ideal color as 'sky after rain'",
      "The glaze contains trace amounts of agate powder for its unique light-scattering effect",
    ],
    relatedSlugs: ["blue-white-porcelain-plum-vase", "along-the-river-during-qingming-festival"],
    nameZh: "汝窑天青釉莲花碗",
    wikidataId: "Q3452441",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Ru_ware",
    topicSlugs: ["song-city-life-and-painting", "imperial-power-and-court-life", "forbidden-city-imperial-collection"],
    externalCollections: [
      {
        museum: "The Palace Museum (Forbidden City)",
        country: "China",
        collectionUrl: "https://en.dpm.org.cn",
        isPrimaryHolder: true,
      },
      {
        museum: "National Palace Museum (Taipei)",
        country: "Taiwan",
        collectionUrl: "https://www.npm.gov.tw",
        isPrimaryHolder: false,
        note: "Holds 21 pieces — the largest public collection of Ru ware",
      },
    ],
    sources: [
      {
        label: "Wikipedia — Ru ware",
        url: "https://en.wikipedia.org/wiki/Ru_ware",
        type: "wiki",
        license: "CC-BY-SA 3.0",
      },
    ],
  },
  {
    slug: "changxin-palace-lamp",
    name: "Changxin Palace Lamp",
    dynasty: "Western Han Dynasty",
    period: "c. 172 BC",
    museumSlug: "hebei-provincial-museum",
    museumName: "Hebei Provincial Museum",
    category: "Bronze",
    material: "Gilt bronze",
    description:
      "A gilt-bronze lamp shaped as a kneeling court lady holding a lantern — simultaneously a functional smoke-filtering lamp, a portrait sculpture, and a masterpiece of Han Dynasty engineering and art.",
    story:
      "Discovered in 1968 in the tomb of Dou Wan (wife of Prince Liu Sheng) at Mancheng, Hebei, this lamp is both a technical marvel and a work of art. The figure of a palace maid kneels with one arm raised, her wide sleeve forming a windshield and smoke channel. The hollow arm conducts lamp smoke downward into the figure's body cavity, which held water to dissolve soot — an ancient pollution-control system. The lamp can be disassembled into components for cleaning. An inscription reveals the piece was made for the Changxin Palace (長信宮), residence of Empress Dowager Dou, grandmother of Emperor Wu of Han. The lamp passed through at least three owners before burial.",
    significance:
      "The most famous example of Han Dynasty functional art — celebrated as both green engineering (smoke filtration) and portraiture that anticipates naturalism by centuries.",
    dimensions: "48 cm height, weight 15.85 kg",
    image: "https://images.unsplash.com/photo-1589556763013-39f7e7c4e1b2?w=800&q=80",
    funFacts: [
      "Functions as an ancient air purifier — smoke travels through the sleeve and dissolves in water inside the body",
      "Can be completely disassembled into 6 parts for cleaning",
      "Bears inscriptions from three successive owners before burial",
      "Buried with the same prince (Liu Sheng) whose jade burial suit is another national treasure",
    ],
    relatedSlugs: ["jade-burial-suit", "simuwu-ding"],
    nameZh: "长信宫灯",
    wikidataId: "Q3672474",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Changxin_Palace_lamp",
    topicSlugs: ["imperial-power-and-court-life", "jade-and-immortality"],
    externalCollections: [
      {
        museum: "Hebei Provincial Museum",
        country: "China",
        collectionUrl: "http://www.hebeimuseum.org.cn",
        isPrimaryHolder: true,
      },
    ],
    sources: [
      {
        label: "Wikipedia — Changxin Palace lamp",
        url: "https://en.wikipedia.org/wiki/Changxin_Palace_lamp",
        type: "wiki",
        license: "CC-BY-SA 3.0",
      },
    ],
  },
  {
    slug: "bronze-galloping-horse",
    name: "Bronze Galloping Horse (Horse Treading on a Flying Swallow)",
    dynasty: "Eastern Han Dynasty",
    period: "c. 25–220 AD",
    museumSlug: "gansu-provincial-museum",
    museumName: "Gansu Provincial Museum",
    category: "Bronze",
    material: "Bronze",
    description:
      "A galloping horse balanced on one hoof atop a flying swallow — China's official tourism logo since 1983 and one of the most dynamically engineered bronzes in world art history.",
    story:
      "Discovered in 1969 in a Eastern Han tomb at Wuwei, Gansu Province, this 34.5 cm bronze captures the impossible instant when a horse at full gallop overtakes a swallow in flight, pressing its rear hoof onto the bird's back. The entire sculpture balances on that single point of contact — a feat of bronze casting, weight distribution, and artistic imagination. The horse's three airborne legs, flying mane, open mouth, and tail streaming behind create a snapshot of pure velocity. The identity of the bird beneath is debated — swallow, hawk, or mythical creature — but the aerodynamic metaphor is clear: this horse is faster than flight itself. In 1983, the National Tourism Administration adopted the silhouette as China's official tourism symbol, making it one of the most reproduced artworks in the country.",
    significance:
      "China's official tourism logo since 1983 — a 2,000-year-old sculpture that achieves through balance and illusion what photography would later capture through shutter speed.",
    dimensions: "34.5 cm height, 45 cm length, weight 7.15 kg",
    image: "https://images.unsplash.com/photo-1582560475093-04d21d4747f4?w=800&q=80",
    funFacts: [
      "Has been China's official tourism symbol since 1983",
      "The entire sculpture balances on one hoof touching a swallow — a single contact point",
      "Nicknamed 'Bronze Running Horse' or 'Flying Horse of Gansu'",
      "Found in the tomb of a Han Dynasty general at Leitai, Wuwei",
    ],
    relatedSlugs: ["terracotta-warriors", "beast-head-agate-cup"],
    nameZh: "铜奔马（马踏飞燕）",
    wikidataId: "Q1155597",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Flying_Horse_of_Gansu",
    topicSlugs: ["warriors-weapons-and-empire", "mythic-animals-and-cosmic-order"],
    externalCollections: [
      {
        museum: "Gansu Provincial Museum",
        country: "China",
        collectionUrl: "http://www.gansumuseum.com",
        isPrimaryHolder: true,
      },
    ],
    sources: [
      {
        label: "Wikipedia — Flying Horse of Gansu",
        url: "https://en.wikipedia.org/wiki/Flying_Horse_of_Gansu",
        type: "wiki",
        license: "CC-BY-SA 3.0",
      },
    ],
  },
  {
    slug: "mawangdui-silk-banner",
    name: "T-Shaped Silk Funeral Banner of Lady Dai",
    dynasty: "Western Han Dynasty",
    period: "c. 168 BC",
    museumSlug: "hunan-provincial-museum",
    museumName: "Hunan Provincial Museum",
    category: "Painting",
    material: "Mineral pigment and ink on silk",
    description:
      "A 2,200-year-old painted silk banner from the tomb of Lady Dai (Xin Zhui) at Mawangdui — the finest surviving example of Han Dynasty painting and a cosmological map of heaven, earth, and the underworld.",
    story:
      "Draped over the innermost coffin of Lady Dai, this T-shaped silk banner (feiyi 非衣) is a visual guide for the soul's journey after death. Reading from top to bottom, it depicts three realms: the heavenly world (sun, moon, dragons, celestial gates), the earthly realm (Lady Dai herself, attended by servants, receiving ritual offerings), and the underworld (a giant figure standing on intertwined fish, supporting the earth above). The painting is executed with extraordinary finesse — flowing brushwork, vibrant mineral pigments (cinnabar red, azurite blue, malachite green), and a compositional sophistication that rivals anything in Western art for another thousand years. Discovered in 1972 when the Mawangdui tombs were excavated during a Cold War bomb-shelter construction project, the banner's near-perfect preservation shocked archaeologists.",
    significance:
      "The most important surviving painting from pre-imperial and early imperial China — a cosmological masterpiece that redefined understanding of Han Dynasty art, religion, and afterlife beliefs.",
    dimensions: "205 cm length, 92 cm width at top",
    image: "https://images.unsplash.com/photo-1580130379624-3a069adbffc5?w=800&q=80",
    funFacts: [
      "Discovered during a Cold War bomb-shelter excavation in 1972",
      "Lady Dai's body was so well preserved that her skin was still elastic and blood type could be determined",
      "The banner's three-realm cosmology matches descriptions in the Chu Ci (Songs of the South)",
      "Over 1,400 objects were found in Lady Dai's tomb including silk manuscripts, lacquerware, and food",
    ],
    relatedSlugs: [
      "mawangdui-i-ching-silk-manuscript",
      "mawangdui-silk-manuscripts",
      "changxin-palace-lamp",
      "jade-burial-suit",
    ],
    nameZh: "马王堆一号汉墓T形帛画",
    wikidataId: "Q6003476",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Mawangdui",
    topicSlugs: [
      "jade-and-immortality",
      "imperial-power-and-court-life",
      "feng-shui-compass-and-cosmic-orientation",
    ],
    externalCollections: [
      {
        museum: "Hunan Provincial Museum",
        country: "China",
        collectionUrl: "https://www.hnmuseum.com",
        isPrimaryHolder: true,
      },
    ],
    sources: [
      {
        label: "Wikipedia — Mawangdui",
        url: "https://en.wikipedia.org/wiki/Mawangdui",
        type: "wiki",
        license: "CC-BY-SA 3.0",
      },
      {
        label: "Smarthistory — Tomb of Lady Dai",
        url: "https://smarthistory.org/tomb-of-lady-dai/",
        type: "academic",
      },
    ],
  },
  {
    slug: "mawangdui-lacquer-coffins",
    name: "Mawangdui Nested Lacquer Coffins of Lady Dai",
    dynasty: "Western Han Dynasty",
    period: "c. 168 BC",
    museumSlug: "hunan-provincial-museum",
    museumName: "Hunan Provincial Museum",
    category: "Sculpture",
    material: "Wood with polychrome lacquer, silk, and feather appliqué",
    description:
      "Four nested coffins — each more lavishly decorated than the last — that preserved Lady Dai's body for over 2,100 years in near-perfect condition, representing the pinnacle of Han Dynasty lacquer craftsmanship.",
    story:
      "Lady Dai (Xin Zhui), wife of the Marquis of Dai, died around 163 BC. Her body was placed inside four nested coffins, each sealed with lacquer. The outermost is plain black lacquer; the second features swirling cloud and mythical beast motifs in red and black; the third shows feathered immortals and auspicious animals against black lacquer; the innermost is wrapped in embroidered silk and adorned with feather appliqué. This layered system, combined with charcoal and white clay packing, created an airtight micro-environment that preserved her body so perfectly that when discovered in 1972, her skin was still elastic, joints still movable, and Type A blood was still identifiable. The lacquer technique — building up dozens of thin coats over months — demonstrates industrial-scale craft specialization in the Han Dynasty.",
    significance:
      "The world's most famous ancient preservation case and the supreme example of Chinese lacquer art — trending again in 2026 as Li Ziqi's viral lacquerware videos reignite global interest in this 7,000-year-old craft tradition.",
    dimensions: "Outermost coffin: 256 cm length, 118 cm width",
    image: "https://images.unsplash.com/photo-1569587112025-0d460e81a126?w=800&q=80",
    funFacts: [
      "Lady Dai's last meal (melon seeds) was still identifiable in her stomach after 2,100 years",
      "The lacquer coffins required hundreds of coats applied over months — each coat needs 24+ hours to cure",
      "Chinese lacquer tradition is 7,000 years old — older than ceramics or bronze",
      "Li Ziqi's 2024 lacquerware comeback video got tens of millions of views, reigniting global interest",
    ],
    relatedSlugs: ["mawangdui-silk-banner", "changxin-palace-lamp", "jade-burial-suit"],
    nameZh: "马王堆汉墓漆棺",
    wikidataId: "Q6003476",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Xin_Zhui",
    topicSlugs: ["jade-and-immortality", "chinese-lacquer-art"],
    externalCollections: [
      {
        museum: "Hunan Provincial Museum",
        country: "China",
        collectionUrl: "https://www.hnmuseum.com",
        isPrimaryHolder: true,
      },
    ],
    sources: [
      {
        label: "Wikipedia — Xin Zhui (Lady Dai)",
        url: "https://en.wikipedia.org/wiki/Xin_Zhui",
        type: "wiki",
        license: "CC-BY-SA 3.0",
      },
    ],
  },
  {
    slug: "yuanmingyuan-zodiac-bronze-heads",
    name: "Yuanmingyuan Zodiac Bronze Fountain Heads",
    dynasty: "Qing Dynasty (Qianlong era)",
    period: "c. 1760 AD",
    museumSlug: "national-museum-of-china",
    museumName: "National Museum of China (various holders)",
    category: "Bronze",
    material: "Cast bronze (European-Chinese hybrid technique)",
    description:
      "Twelve bronze animal heads from the zodiac fountain of the Old Summer Palace (Yuanmingyuan) — looted during the 1860 Anglo-French sacking and now the world's most famous symbols of Chinese cultural heritage repatriation.",
    story:
      "Designed by Jesuit missionary Giuseppe Castiglione for Emperor Qianlong, the Haiyantang (Sea of Calm) fountain featured 12 bronze zodiac animal heads that spouted water in sequence, each marking a two-hour period of the traditional Chinese clock. In 1860, British and French troops burned the Yuanmingyuan during the Second Opium War and looted its treasures. The zodiac heads scattered across private collections worldwide. Over the following 160 years, seven heads have been recovered — through auction purchases (some for tens of millions of dollars), donations by patriotic businessmen (notably the Poly Group and the Macau casino magnate Stanley Ho), and government negotiations. Five heads remain missing. The repatriation saga has become China's most emotionally charged cultural heritage story, referenced in films (Jackie Chan's Chinese Zodiac, 2012), government policy, and school textbooks.",
    significance:
      "The single most recognizable symbol of cultural heritage loss and repatriation worldwide — a story that connects the Opium Wars, imperial plunder, auction house ethics, and modern Chinese national identity.",
    dimensions: "Each head approximately 50 cm height",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80",
    funFacts: [
      "7 of 12 heads have been recovered; 5 (dragon, snake, goat, rooster, dog) remain missing",
      "The rat and rabbit heads sold for €15.7 million each at Christie's in 2009 before being donated back",
      "Jackie Chan's 2012 film Chinese Zodiac (CZ12) was directly inspired by the zodiac heads saga",
      "The heads were designed by an Italian Jesuit — a rare East-West collaborative artwork",
    ],
    relatedSlugs: ["nine-dragon-wall-forbidden-city", "bronze-galloping-horse"],
    nameZh: "圆明园十二生肖兽首铜像",
    wikidataId: "Q2671234",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Old_Summer_Palace_Zodiac",
    topicSlugs: ["imperial-power-and-court-life", "treasures-lost-and-returned"],
    externalCollections: [
      {
        museum: "Poly Art Museum (Beijing)",
        country: "China",
        collectionUrl: "https://www.polypm.com.cn",
        isPrimaryHolder: true,
        note: "Holds the ox, tiger, and monkey heads",
      },
      {
        museum: "National Museum of China",
        country: "China",
        collectionUrl: "https://en.chnmuseum.cn",
        isPrimaryHolder: false,
        note: "Holds the pig head (donated by Stanley Ho, 2003)",
      },
    ],
    sources: [
      {
        label: "Wikipedia — Old Summer Palace zodiac heads",
        url: "https://en.wikipedia.org/wiki/Old_Summer_Palace#Zodiac_heads",
        type: "wiki",
        license: "CC-BY-SA 3.0",
      },
    ],
  },
  {
    slug: "mawangdui-silk-manuscripts",
    name: "Mawangdui Silk Manuscripts (Boshu)",
    dynasty: "Western Han Dynasty",
    period: "c. 168 BC",
    museumSlug: "hunan-provincial-museum",
    museumName: "Hunan Provincial Museum",
    category: "Painting",
    material: "Ink on silk",
    description:
      "Over 50 texts written on silk — including lost versions of the Dao De Jing, medical treatises, astronomical charts, and military maps — the single most important manuscript discovery in Chinese archaeology.",
    story:
      "From Tomb 3 at Mawangdui (burial of Lady Dai's son) came a library written on silk: two previously unknown versions of Laozi's Dao De Jing (with chapters in reverse order from all known editions), detailed medical texts describing acupuncture meridians and herbal formulas, the oldest known Chinese astronomical chart (showing 29 comet forms), military maps of Changsha kingdom territory, and philosophical texts by schools of thought that had been lost for 2,000 years. The Mawangdui manuscripts revolutionized scholarship on early Chinese philosophy, science, and cartography. They proved that the intellectual world of the early Han was far richer and more diverse than the received Confucian canon suggested. The discovery is often compared in significance to the Dead Sea Scrolls.",
    significance:
      "China's Dead Sea Scrolls — manuscript discoveries that rewrote the history of Chinese philosophy, medicine, astronomy, and cartography, trending again with CGTN's 2026 'China Crafted' series on Mawangdui.",
    dimensions: "Various; largest map approximately 96 × 96 cm",
    image: "https://images.unsplash.com/photo-1580130379624-3a069adbffc5?w=800&q=80",
    funFacts: [
      "Contains two versions of the Dao De Jing older than any previously known text",
      "The astronomical chart shows 29 forms of comets — the world's earliest systematic comet catalog",
      "Medical texts describe acupuncture meridians centuries before the canonical Huangdi Neijing",
      "Often called 'China's Dead Sea Scrolls' for their impact on scholarship",
    ],
    relatedSlugs: [
      "mawangdui-i-ching-silk-manuscript",
      "mawangdui-silk-banner",
      "mawangdui-lacquer-coffins",
    ],
    nameZh: "马王堆帛书",
    wikidataId: "Q6003476",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Mawangdui_Silk_Texts",
    topicSlugs: [
      "imperial-power-and-court-life",
      "i-ching-oracle-bones-chinese-divination",
    ],
    externalCollections: [
      {
        museum: "Hunan Provincial Museum",
        country: "China",
        collectionUrl: "https://www.hnmuseum.com",
        isPrimaryHolder: true,
      },
    ],
    sources: [
      {
        label: "Wikipedia — Mawangdui Silk Texts",
        url: "https://en.wikipedia.org/wiki/Mawangdui_Silk_Texts",
        type: "wiki",
        license: "CC-BY-SA 3.0",
      },
    ],
  },
  {
    slug: "mawangdui-i-ching-silk-manuscript",
    name: "Mawangdui Silk Manuscript of the I Ching",
    dynasty: "Western Han Dynasty",
    period: "c. 168 BC",
    museumSlug: "hunan-provincial-museum",
    museumName: "Hunan Provincial Museum",
    category: "Silk / Textile",
    material: "Ink on silk",
    description:
      "One of the earliest surviving manuscript witnesses to the I Ching, copied on silk and buried in the Mawangdui Han tombs before later received editions became canonical.",
    story:
      "The Mawangdui silk manuscripts were excavated from Tomb 3 at Mawangdui in Changsha in 1973. Among their philosophical, medical, astronomical, and military texts was a version of the Zhouyi — the core text later known in English as the I Ching or Book of Changes. Unlike a modern printed classic, the Mawangdui text preserves an early manuscript world in which divination, cosmology, politics, and self-cultivation were still being actively organized. Its silk format, character variants, and textual sequence give scholars a rare view of how the Changes circulated in the Western Han, before later commentarial traditions fixed the book's shape for imperial education and global divination culture.",
    significance:
      "A museum-grounded entry point into the worldwide fascination with the I Ching, connecting modern searches for Chinese divination with a real Han Dynasty manuscript discovery.",
    dimensions: "Fragmentary silk manuscript leaves; dimensions vary",
    image: "https://images.unsplash.com/photo-1580130379624-3a069adbffc5?w=800&q=80",
    funFacts: [
      "The manuscript was buried roughly two centuries before the I Ching became one of the Five Classics of imperial learning",
      "Mawangdui also preserved early Laozi texts, medical manuscripts, maps, and astronomical records",
      "The I Ching's 64 hexagrams are built from six yin or yang lines",
      "The Mawangdui discovery is often compared to the Dead Sea Scrolls for Chinese intellectual history",
    ],
    relatedSlugs: [
      "mawangdui-silk-manuscripts",
      "oracle-bones-yinxu",
      "mawangdui-silk-banner",
    ],
    nameZh: "马王堆帛书《周易》",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Mawangdui_Silk_Texts",
    topicSlugs: ["i-ching-oracle-bones-chinese-divination"],
    externalCollections: [
      {
        museum: "Hunan Provincial Museum",
        country: "China",
        collectionUrl: "https://www.hnmuseum.com",
        isPrimaryHolder: true,
      },
    ],
    sources: [
      {
        label: "Wikipedia — Mawangdui Silk Texts",
        url: "https://en.wikipedia.org/wiki/Mawangdui_Silk_Texts",
        type: "wiki",
        license: "CC-BY-SA 3.0",
      },
      {
        label: "Wikipedia — I Ching",
        url: "https://en.wikipedia.org/wiki/I_Ching",
        type: "wiki",
        license: "CC-BY-SA 3.0",
      },
      {
        label: "Hunan Museum — Bamboo and Silk Manuscripts of Mawangdui",
        url: "https://www.hnmuseum.com/en/aboutus/new-book-launch-complete-works-bamboo-and-silk-manuscripts-mawangdui-han-tombs-changsha",
        type: "official-cn",
      },
    ],
  },
  {
    slug: "dwelling-in-fuchun-mountains",
    name: "Dwelling in the Fuchun Mountains",
    dynasty: "Yuan Dynasty",
    period: "1348–1350 AD",
    museumSlug: "the-palace-museum",
    museumName: "National Palace Museum (Taipei) / Zhejiang Provincial Museum",
    category: "Painting",
    material: "Ink on paper (handscroll)",
    description:
      "The greatest Chinese landscape painting ever created — a 7-meter handscroll by Yuan master Huang Gongwang that was burned in two in 1650 and remains divided between Taipei and Hangzhou to this day.",
    story:
      "Huang Gongwang (1269–1354) began painting at age 50 and spent his last years wandering the Fuchun River valley south of Hangzhou. Between 1348 and 1350, he distilled this experience into a single handscroll: a continuous journey through misty peaks, gentle riverbanks, fishermen's huts, and groves of pine and bamboo. The painting became the most treasured work in Chinese art history, collected by emperor after emperor. In 1650, its owner — a dying collector named Wu Hongyu — ordered it burned as a funeral offering. His nephew snatched it from the flames, but not before it broke in two. The shorter piece ('Remaining Mountain') is now in Zhejiang Provincial Museum; the longer piece ('Master Wuyong Scroll') is in Taipei's National Palace Museum. In 2011, a historic joint exhibition briefly reunited the two halves for the first time in 361 years.",
    significance:
      "The single most revered Chinese painting in existence — its 1650 burning and cross-strait division make it a symbol of China's divided cultural heritage, with enormous search volume among art enthusiasts.",
    dimensions: "Total original: approximately 33 × 689 cm; surviving scrolls: 31.8 × 51.4 cm and 33 × 636.9 cm",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=800&q=80",
    funFacts: [
      "Huang Gongwang didn't start painting until age 50 — and created this at 80",
      "The painting was literally snatched from a funeral pyre in 1650",
      "The two surviving halves were reunited in a 2011 exhibition after 361 years apart",
      "Emperor Qianlong wrote over 50 inscriptions on his copy — which turned out to be a forgery",
    ],
    relatedSlugs: ["along-the-river-during-qingming-festival", "ru-ware-lotus-bowl"],
    nameZh: "富春山居图",
    wikidataId: "Q2326858",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Dwelling_in_the_Fuchun_Mountains",
    topicSlugs: ["song-city-life-and-painting", "forbidden-city-imperial-collection", "lost-masterpieces-of-chinese-painting"],
    externalCollections: [
      {
        museum: "National Palace Museum (Taipei)",
        country: "Taiwan",
        collectionUrl: "https://www.npm.gov.tw",
        isPrimaryHolder: true,
        note: "Holds the 'Master Wuyong Scroll' (longer portion)",
      },
      {
        museum: "Zhejiang Provincial Museum",
        country: "China",
        collectionUrl: "https://www.zhejiangmuseum.com",
        isPrimaryHolder: false,
        note: "Holds the 'Remaining Mountain' (shorter portion)",
      },
    ],
    sources: [
      {
        label: "Wikipedia — Dwelling in the Fuchun Mountains",
        url: "https://en.wikipedia.org/wiki/Dwelling_in_the_Fuchun_Mountains",
        type: "wiki",
        license: "CC-BY-SA 3.0",
      },
    ],
  },
  {
    slug: "admonitions-scroll",
    name: "Admonitions of the Instructress to the Court Ladies",
    dynasty: "Eastern Jin Dynasty (Tang copy)",
    period: "Original c. 380 AD; surviving copy c. 6th–8th century",
    museumSlug: "the-palace-museum",
    museumName: "The British Museum",
    category: "Painting",
    material: "Ink and color on silk (handscroll)",
    description:
      "Attributed to Gu Kaizhi, this is the most important early Chinese figure painting in existence — a political allegory on virtue and female conduct that has been in the British Museum since 1903.",
    story:
      "The Admonitions Scroll illustrates a 3rd-century text by Zhang Hua advising court ladies on proper conduct. Attributed to Gu Kaizhi (c. 344–406), the greatest painter of the Eastern Jin, the surviving copy is likely a faithful Tang Dynasty reproduction of his lost original. Its graceful 'spring silkworm spitting silk' brush line — thin, even, and flowing — defined Chinese figure painting for a millennium. The scroll entered the Qing imperial collection and bears seals of emperors including Qianlong. In 1900, during the Boxer Rebellion, British officer Captain Clarence Johnson acquired it (circumstances disputed). It entered the British Museum in 1903 and has remained there ever since, making it one of the most debated objects in the Chinese repatriation conversation.",
    significance:
      "The oldest surviving Chinese figure painting and a central object in the global debate over museum repatriation — permanently searched by art historians, China scholars, and cultural heritage advocates.",
    dimensions: "24.8 × 348.2 cm",
    image: "https://images.unsplash.com/photo-1580130379624-3a069adbffc5?w=800&q=80",
    funFacts: [
      "The painting's 'spring silkworm' brush line influenced Chinese figure painting for 1,000 years",
      "Acquired by a British officer during the Boxer Rebellion — circumstances remain controversial",
      "Emperor Qianlong added seals and inscriptions, believing it to be Gu Kaizhi's original",
      "The British Museum and Palace Museum in Beijing each claim the most important version",
    ],
    relatedSlugs: ["along-the-river-during-qingming-festival", "dwelling-in-fuchun-mountains"],
    nameZh: "女史箴图",
    wikidataId: "Q2609118",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Admonitions_Scroll",
    topicSlugs: ["imperial-power-and-court-life", "treasures-lost-and-returned", "lost-masterpieces-of-chinese-painting"],
    externalCollections: [
      {
        museum: "The British Museum",
        country: "UK",
        collectionUrl: "https://www.britishmuseum.org/collection/object/A_1903-0408-0-1",
        isPrimaryHolder: true,
      },
      {
        museum: "The Palace Museum (Forbidden City)",
        country: "China",
        collectionUrl: "https://en.dpm.org.cn",
        isPrimaryHolder: false,
        note: "Holds a Song Dynasty copy",
      },
    ],
    sources: [
      {
        label: "Wikipedia — Admonitions Scroll",
        url: "https://en.wikipedia.org/wiki/Admonitions_Scroll",
        type: "wiki",
        license: "CC-BY-SA 3.0",
      },
    ],
  },
  {
    slug: "nymph-of-luo-river",
    name: "Nymph of the Luo River (Luo Shen Fu Tu)",
    dynasty: "Eastern Jin Dynasty (Song copies)",
    period: "Original c. 380 AD; surviving copies 11th–12th century",
    museumSlug: "the-palace-museum",
    museumName: "The Palace Museum (Forbidden City)",
    category: "Painting",
    material: "Ink and color on silk (handscroll)",
    description:
      "A narrative scroll depicting the tragic love between the poet Cao Zhi and the goddess of the Luo River — one of the most romantic stories in Chinese literature and one of the most copied paintings in history.",
    story:
      "Based on the prose poem 'Rhapsody on the Nymph of the Luo River' by Cao Zhi (192–232 AD), this scroll tells a story of impossible love: the prince encounters a divine beauty by the river, they are drawn together, but she must return to the spirit world. The original painting is attributed to Gu Kaizhi; multiple Song Dynasty copies survive (in the Palace Museum, the Freer Gallery, and the Liaoning Provincial Museum). The Beijing Palace Museum version is considered finest — its continuous narrative unrolls across the silk like a film storyboard, with Cao Zhi appearing multiple times as the story progresses. The painting became the template for all subsequent Chinese narrative handscroll painting and continues to inspire modern adaptations in anime, games, and dance performances.",
    significance:
      "The foundation work of Chinese narrative painting — a love story that has been continuously reimagined for 1,800 years, from Song Dynasty silk to 2024 viral dance performances.",
    dimensions: "27.1 × 572.8 cm (Palace Museum version)",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=800&q=80",
    funFacts: [
      "The poet Cao Zhi wrote the original rhapsody after being denied the throne by his brother",
      "Some scholars believe the 'nymph' was actually Cao Zhi's sister-in-law — a forbidden love allegory",
      "At least 4 major Song Dynasty copies survive — the painting was endlessly reproduced",
      "A 2021 Chinese dance performance 'Luo Shen Shui Fu' based on this painting went viral with 2+ billion views",
    ],
    relatedSlugs: ["along-the-river-during-qingming-festival", "admonitions-scroll"],
    nameZh: "洛神赋图",
    wikidataId: "Q7298523",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Nymph_of_the_Luo_River_(painting)",
    topicSlugs: ["song-city-life-and-painting", "forbidden-city-imperial-collection", "lost-masterpieces-of-chinese-painting"],
    externalCollections: [
      {
        museum: "The Palace Museum (Forbidden City)",
        country: "China",
        collectionUrl: "https://en.dpm.org.cn",
        isPrimaryHolder: true,
      },
      {
        museum: "Freer Gallery of Art (Smithsonian)",
        country: "USA",
        collectionUrl: "https://asia.si.edu",
        isPrimaryHolder: false,
        note: "Holds a Song Dynasty copy",
      },
    ],
    sources: [
      {
        label: "Wikipedia — Nymph of the Luo River (painting)",
        url: "https://en.wikipedia.org/wiki/Nymph_of_the_Luo_River_(painting)",
        type: "wiki",
        license: "CC-BY-SA 3.0",
      },
    ],
  },
  {
    slug: "famen-temple-gilt-silver-tea-set",
    name: "Famen Temple Gilt Silver Tea Set",
    dynasty: "Tang Dynasty",
    period: "c. 869 AD (Xiantong era)",
    museumSlug: "famen-temple-museum",
    museumName: "Famen Temple Museum",
    category: "Gold",
    material: "Gilt silver with chased and repoussé decoration",
    description:
      "The world's oldest and most complete surviving tea set — a gilt silver service including grinder, sieve, container, salt cellar, and bowls — sealed in the Famen Temple crypt in 874 AD as an offering to the Buddha's finger bone relic.",
    story:
      "In 1987, after a rainstorm collapsed part of the Famen Temple pagoda near Xi'an, archaeologists discovered a sealed underground crypt containing treasures donated by Tang emperors to the temple's most sacred relic: a finger bone of the Buddha. Among over 2,000 objects were four sets of Buddhist finger bone relics, hundreds of silk textiles, celadon secret-color (mise) porcelain wares, gold and silver vessels, and this extraordinary tea service — a complete set for grinding, sieving, measuring, and drinking tea according to the Lu Yu method described in the Classic of Tea (Cha Jing, 760 AD). The set proves that by the late Tang, tea culture had reached imperial-level sophistication, with dedicated luxury equipment rivaling modern fine tableware.",
    significance:
      "The single most important archaeological discovery for the history of tea — proving Tang Dynasty imperial tea culture's extraordinary sophistication and directly connecting to today's global tea trend.",
    dimensions: "Tea grinder: 28.3 cm length; storage jar: 24.7 cm height",
    image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800&q=80",
    funFacts: [
      "Sealed underground in 874 AD as a Buddhist offering — undisturbed for 1,113 years",
      "Contains the world's oldest known tea grinder (chamo) and sieve",
      "The crypt also held 'secret-color' (mise) celadon — a legendary porcelain type thought to be mythical until this discovery",
      "The finger bone of the Buddha is now China's most sacred Buddhist relic",
    ],
    relatedSlugs: ["beast-head-agate-cup", "tang-sancai-camel"],
    nameZh: "法门寺鎏金银茶具",
    wikidataId: "Q848644",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Famen_Temple",
    topicSlugs: ["tang-silk-road-treasures"],
    externalCollections: [
      {
        museum: "Famen Temple Museum",
        country: "China",
        collectionUrl: "http://www.famensi.com",
        isPrimaryHolder: true,
      },
    ],
    sources: [
      {
        label: "Wikipedia — Famen Temple",
        url: "https://en.wikipedia.org/wiki/Famen_Temple",
        type: "wiki",
        license: "CC-BY-SA 3.0",
      },
    ],
  },
  {
    slug: "qin-bronze-chariot",
    name: "Bronze Chariot and Horses of Qin Shi Huang",
    dynasty: "Qin Dynasty",
    period: "c. 210 BC",
    museumSlug: "terracotta-warriors-museum",
    museumName: "Emperor Qinshihuang's Mausoleum Site Museum",
    category: "Bronze",
    material: "Cast bronze with gold and silver fittings",
    description:
      "Two half-life-size bronze chariots excavated near Qin Shi Huang's mausoleum — the most complex bronze vehicles ever found in ancient China, assembled from thousands of individually cast parts.",
    story:
      "In 1980, archaeologists working 20 meters west of Qin Shi Huang's tomb mound uncovered two collapsed bronze chariots buried in a wooden coffin-like pit. After eight years of restoration, the vehicles emerged as masterpieces of Qin engineering: chariots, horses, drivers, reins, umbrellas, crossbow fittings, and decorative harnesses all cast in bronze and detailed with gold and silver. Chariot No. 1 is an open inspection carriage; Chariot No. 2 is a covered imperial carriage, possibly representing the emperor's soul vehicle for the afterlife. The construction required extraordinary modular casting precision — one carriage contains more than 3,000 separate components, with moving parts such as hinges, axles, and umbrella mechanisms still intelligible after 2,200 years.",
    significance:
      "The bronze chariots reveal the First Emperor's afterlife not as a static army but as a complete imperial procession, making them essential companions to the Terracotta Warriors and a high-search Xi'an tourism highlight.",
    dimensions: "Chariot No. 2: approximately 3.17 m length; horses about 65–67 cm high",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&q=80",
    funFacts: [
      "Each chariot is roughly half life-size but contains thousands of separate cast components",
      "The reins are made from tiny bronze links that imitate leather straps",
      "The covered carriage includes a working umbrella-like canopy structure",
      "They were restored from more than 1,500 broken fragments",
    ],
    relatedSlugs: ["terracotta-warriors", "bronze-galloping-horse"],
    nameZh: "秦始皇陵铜车马",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Terracotta_Army#Bronze_chariots",
    topicSlugs: ["qin-empire-terracotta-army", "warriors-weapons-and-empire"],
    externalCollections: [
      {
        museum: "Emperor Qinshihuang's Mausoleum Site Museum",
        country: "China",
        collectionUrl: "https://www.bmy.com.cn",
        isPrimaryHolder: true,
      },
    ],
    sources: [
      {
        label: "Wikipedia — Terracotta Army: Bronze chariots",
        url: "https://en.wikipedia.org/wiki/Terracotta_Army#Bronze_chariots",
        type: "wiki",
        license: "CC-BY-SA 3.0",
      },
    ],
  },
  {
    slug: "jinsha-sun-bird-gold-foil",
    name: "Sun Bird Gold Foil of Jinsha",
    dynasty: "Ancient Shu (Jinsha culture)",
    period: "c. 1200–650 BC",
    museumSlug: "jinsha-site-museum",
    museumName: "Jinsha Site Museum",
    category: "Gold",
    material: "Hammered gold foil",
    description:
      "A paper-thin gold ornament from the Jinsha site in Chengdu: four birds fly around a rotating sun, now adopted as the official logo of China Cultural Heritage.",
    story:
      "Discovered in 2001 at the Jinsha archaeological site in Chengdu, this circular gold foil weighs only about 20 grams yet carries immense symbolic power. The design shows four birds revolving around a sun with twelve rays — an image usually interpreted as a solar worship emblem of the ancient Shu people. Jinsha succeeded Sanxingdui as a major Bronze Age center in the Chengdu Plain, inheriting its gold-working, jade, ivory, and sacrificial traditions but expressing them in a more compact, refined visual language. In 2005, China's State Administration of Cultural Heritage selected the Sun Bird as the official symbol of Chinese cultural heritage, making it one of the most widely reproduced archaeological images in the country.",
    significance:
      "The bridge between Sanxingdui and later Sichuan culture — and a perfect SEO connector for Chengdu travel, Jinsha Museum, ancient Shu civilization, and games set in Sichuan such as Wuchang: Fallen Feathers.",
    dimensions: "12.5 cm diameter; 0.02 cm thickness",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80",
    funFacts: [
      "It is only about 0.2 mm thick — thinner than a credit card by a wide margin",
      "The four birds and twelve rays are often linked to calendrical or solar symbolism",
      "It became the official logo of China Cultural Heritage in 2005",
      "Jinsha was discovered accidentally during real estate construction in Chengdu",
    ],
    relatedSlugs: ["gold-mask-sanxingdui", "sacred-bronze-tree"],
    nameZh: "金沙太阳神鸟金饰",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Jinsha_site",
    topicSlugs: ["ancient-shu-sichuan-heritage", "sanxingdui-mysteries", "mythic-animals-and-cosmic-order"],
    externalCollections: [
      {
        museum: "Jinsha Site Museum",
        country: "China",
        collectionUrl: "https://www.jinshasitemuseum.com",
        isPrimaryHolder: true,
      },
    ],
    sources: [
      {
        label: "Wikipedia — Jinsha site",
        url: "https://en.wikipedia.org/wiki/Jinsha_site",
        type: "wiki",
        license: "CC-BY-SA 3.0",
      },
    ],
  },
  {
    slug: "oracle-bones-yinxu",
    name: "Oracle Bones of Yinxu",
    dynasty: "Late Shang Dynasty",
    period: "c. 1250–1046 BC",
    museumSlug: "yinxu-museum",
    museumName: "Yinxu Museum",
    category: "Bone / Writing",
    material: "Inscribed ox scapulae and turtle plastrons",
    description:
      "The earliest substantial corpus of Chinese writing: divination inscriptions carved into bones and turtle shells at the Shang capital of Yinxu, recording royal questions about war, harvest, childbirth, weather, and ancestors.",
    story:
      "Oracle bones were first recognized in 1899 when scholar Wang Yirong noticed strange carved marks on 'dragon bones' sold in Beijing pharmacies. The trail led to Anyang, Henan — the last capital of the Shang Dynasty. There, archaeologists uncovered more than 150,000 inscribed bones and shells used in royal divination. Shang kings asked ancestors and high gods about everything from military campaigns and hunting trips to toothaches and eclipses. A diviner drilled hollows into the bone, applied heat until cracks formed, then interpreted the cracks as answers. The inscriptions preserve names of kings, queens, enemies, places, rituals, and calendars, making them the bedrock source for early Chinese history. They also prove that modern Chinese characters descend from an unbroken writing tradition more than 3,000 years old.",
    significance:
      "The birth certificate of Chinese writing — essential for understanding Shang Dynasty culture, Creation of the Gods, and the archaeological reality behind mythic Bronze Age China.",
    dimensions: "Various; many fragments 5–30 cm",
    image: "https://images.unsplash.com/photo-1455885666463-9b28f591265b?w=800&q=80",
    funFacts: [
      "They were sold as medicinal 'dragon bones' before scholars recognized the writing",
      "Many inscriptions name Lady Fuhao, the Shang queen and military commander",
      "The script is directly ancestral to modern Chinese characters",
      "Oracle bones helped prove that the Shang Dynasty was historical, not legendary",
    ],
    relatedSlugs: [
      "mawangdui-i-ching-silk-manuscript",
      "simuwu-ding",
      "fuhao-owl-zun",
    ],
    nameZh: "殷墟甲骨文",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Oracle_bone",
    topicSlugs: [
      "oracle-bones-and-shang-writing",
      "i-ching-oracle-bones-chinese-divination",
      "bronze-dings-through-the-ages",
    ],
    externalCollections: [
      {
        museum: "Yinxu Museum",
        country: "China",
        collectionUrl: "https://en.wikipedia.org/wiki/Yinxu",
        isPrimaryHolder: true,
      },
      {
        museum: "National Museum of China",
        country: "China",
        collectionUrl: "https://en.chnmuseum.cn",
        isPrimaryHolder: false,
      },
    ],
    sources: [
      {
        label: "Wikipedia — Oracle bone",
        url: "https://en.wikipedia.org/wiki/Oracle_bone",
        type: "wiki",
        license: "CC-BY-SA 3.0",
      },
      {
        label: "Wikipedia — Yinxu",
        url: "https://en.wikipedia.org/wiki/Yinxu",
        type: "wiki",
        license: "CC-BY-SA 3.0",
      },
    ],
  },
  {
    slug: "leshan-giant-buddha",
    name: "Leshan Giant Buddha",
    dynasty: "Tang Dynasty",
    period: "713–803 AD",
    museumSlug: "leshan-giant-buddha-scenic-area",
    museumName: "Leshan Giant Buddha Scenic Area",
    category: "Sculpture",
    material: "Carved red sandstone cliff",
    description:
      "A 71-meter seated Maitreya Buddha carved into a Sichuan cliff at the confluence of three rivers — the largest pre-modern stone Buddha in the world and a UNESCO World Heritage site.",
    story:
      "The Leshan Giant Buddha was initiated by the monk Haitong in 713 AD, who hoped that carving a colossal Buddha at the meeting point of the Min, Dadu, and Qingyi rivers would calm dangerous waters that threatened passing boats. Construction continued for 90 years through the Tang Dynasty. The builders removed so much stone from the cliff that river currents reportedly changed, reducing turbulence as intended. The sculpture is not just huge: it includes an ingenious drainage system hidden in the hair curls, ears, chest, and arms, channeling rainwater away from the body and slowing erosion. Today, it anchors one of China's most popular heritage tourism routes and increasingly appears in game and fantasy discussions about Sichuan landscapes.",
    significance:
      "A monumental bridge between Buddhist art, Sichuan travel, and game-world environment design — especially relevant to Wuchang: Fallen Feathers and broader interest in Chinese heritage tourism.",
    dimensions: "71 m height; head 14.7 m high; shoulders 28 m wide",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80",
    funFacts: [
      "Its ears are about 7 meters long — taller than a two-story house",
      "The hidden drainage system is one reason the sculpture survived for over 1,200 years",
      "The excavated stone altered the riverbed and may have reduced dangerous currents",
      "It faces Mount Emei across the river, forming a major Buddhist pilgrimage landscape",
    ],
    relatedSlugs: ["dunhuang-flying-apsara", "jinsha-sun-bird-gold-foil"],
    nameZh: "乐山大佛",
    wikidataId: "Q19786",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Leshan_Giant_Buddha",
    topicSlugs: ["ancient-shu-sichuan-heritage"],
    externalCollections: [
      {
        museum: "Leshan Giant Buddha Scenic Area",
        country: "China",
        collectionUrl: "https://en.wikipedia.org/wiki/Leshan_Giant_Buddha",
        isPrimaryHolder: true,
      },
    ],
    sources: [
      {
        label: "Wikipedia — Leshan Giant Buddha",
        url: "https://en.wikipedia.org/wiki/Leshan_Giant_Buddha",
        type: "wiki",
        license: "CC-BY-SA 3.0",
      },
      {
        label: "UNESCO — Mount Emei Scenic Area, including Leshan Giant Buddha",
        url: "https://whc.unesco.org/en/list/779/",
        type: "academic",
      },
    ],
  },
  {
    slug: "luopan-feng-shui-compass",
    name: "Luopan Feng Shui Compass",
    dynasty: "Qing Dynasty",
    period: "18th–19th century AD",
    museumSlug: "science-museum-london",
    museumName: "Science Museum, London",
    category: "Scientific Instrument",
    material: "Wood, lacquer, ink, and magnetic needle",
    description:
      "A Chinese geomantic compass whose concentric rings encode directions, trigrams, heavenly stems, earthly branches, lunar mansions, and feng shui formulas.",
    story:
      "A luopan looks like a compass, but it is also a map of the cosmos. At its center sits the magnetic needle; around it are dense rings of Chinese characters and symbols used by geomancers to align houses, graves, temples, and city spaces with patterns of qi, direction, time, and landscape. Unlike a navigation compass, the luopan is designed for interpretation. Its rings may include the Eight Trigrams, the Twenty-Four Mountains, the Heavenly Stems and Earthly Branches, and stellar divisions. Museum luopan examples from the 18th and 19th centuries show how a scientific invention — the magnetic compass — became a ritual and spatial technology at the heart of feng shui.",
    significance:
      "A high-SEO bridge between global interest in feng shui and the material history of Chinese instruments, architecture, orientation, and cosmology.",
    dimensions: "Varies by example; often palm-sized to tabletop format",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80",
    funFacts: [
      "The Chinese word for compass can be translated as 'south-pointing needle'",
      "Some luopan have dozens of concentric rings of formulas",
      "Early Chinese compasses were used for divination and geomancy before maritime navigation",
      "The Eight Trigrams on a luopan connect feng shui practice to I Ching cosmology",
    ],
    relatedSlugs: [
      "mawangdui-i-ching-silk-manuscript",
      "mawangdui-silk-banner",
      "jinsha-sun-bird-gold-foil",
    ],
    nameZh: "风水罗盘",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Luopan",
    topicSlugs: [
      "feng-shui-compass-and-cosmic-orientation",
      "i-ching-oracle-bones-chinese-divination",
      "mythic-animals-and-cosmic-order",
    ],
    externalCollections: [
      {
        museum: "Science Museum, London",
        country: "United Kingdom",
        collectionUrl:
          "https://collection.sciencemuseumgroup.org.uk/objects/co55384/chinese-geomancers-compass",
        isPrimaryHolder: true,
      },
      {
        museum: "Royal Museums Greenwich",
        country: "United Kingdom",
        collectionUrl: "https://www.rmg.co.uk/collections/objects/rmgc-object-42660",
        isPrimaryHolder: false,
      },
    ],
    sources: [
      {
        label: "Science Museum Group — Chinese Geomancer's Compass",
        url: "https://collection.sciencemuseumgroup.org.uk/objects/co55384/chinese-geomancers-compass",
        type: "academic",
      },
      {
        label: "Royal Museums Greenwich — Geomantic Compass",
        url: "https://www.rmg.co.uk/collections/objects/rmgc-object-42660",
        type: "academic",
      },
      {
        label: "Wikipedia — Luopan",
        url: "https://en.wikipedia.org/wiki/Luopan",
        type: "wiki",
        license: "CC-BY-SA 3.0",
      },
    ],
  },
];

export const categories = [
  "All",
  "Bronze",
  "Painting",
  "Jade",
  "Ceramics",
  "Gold",
  "Weapons",
  "Sculpture",
  "Jade & Gemstone",
  "Bronze / Musical Instrument",
  "Lacquer",
  "Silk / Textile",
  "Bone / Writing",
  "Scientific Instrument",
];

export const dynasties = [
  "All",
  "Neolithic (Hongshan Culture)",
  "Ancient Shu (Jinsha culture)",
  "Late Shang Dynasty",
  "Western Zhou Dynasty",
  "Spring and Autumn Period",
  "Warring States Period",
  "Qin Dynasty",
  "Western Han Dynasty",
  "Eastern Han Dynasty",
  "Tang Dynasty",
  "Northern Song Dynasty",
  "Yuan Dynasty",
  "Qing Dynasty",
  "Qing Dynasty (Qianlong era)",
];

export function getArtifactBySlug(slug: string): Artifact | undefined {
  return artifacts.find((a) => a.slug === slug);
}

export function getArtifactsByMuseum(museumSlug: string): Artifact[] {
  return artifacts.filter((a) => a.museumSlug === museumSlug);
}

export function getRelatedArtifacts(slugs: string[]): Artifact[] {
  return artifacts.filter((a) => slugs.includes(a.slug));
}
