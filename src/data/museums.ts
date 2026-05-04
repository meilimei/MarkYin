import type { ImageCredit } from "@/data/artifacts";

export interface Museum {
  slug: string;
  name: string;
  city: string;
  province: string;
  description: string;
  longDescription: string;
  image: string;
  imageCredit?: ImageCredit;
  artifactCount: number;
  highlights: string[];
  visitInfo: {
    hours: string;
    admission: string;
    website: string;
  };
  wikidataId?: string;
}

export const museums: Museum[] = [
  {
    slug: "the-palace-museum",
    name: "The Palace Museum (Forbidden City)",
    city: "Beijing",
    province: "Beijing",
    description:
      "Home to the world's largest collection of preserved ancient wooden structures and imperial treasures spanning 600 years of Chinese history.",
    longDescription:
      "The Palace Museum, nestled within the Forbidden City, stands as the crowning jewel of Chinese imperial architecture. Built between 1406 and 1420, this UNESCO World Heritage Site houses over 1.8 million artifacts, making it one of the most comprehensive museums of Chinese art and culture in the world. Walking through its vermilion walls and golden-roofed halls, visitors traverse the living history of the Ming and Qing dynasties.",
    image: "/images/museums/the-palace-museum.jpg",
    imageCredit: {
      source: "commons",
      author: "User:Kallgan",
      license: "CC BY-SA 3.0",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Forbidden_City_Beijing_Shenwumen_Gate.JPG",
    },
    artifactCount: 1860000,
    highlights: [
      "Along the River During the Qingming Festival",
      "Erta King Jade Carving",
      "Imperial Cloisonné Collection",
    ],
    visitInfo: {
      hours: "8:30 AM - 5:00 PM (Closed Mondays)",
      admission: "CNY 60 (Apr-Oct) / CNY 40 (Nov-Mar)",
      website: "https://www.dpm.org.cn",
    },
    wikidataId: "Q2047427",
  },
  {
    slug: "sanxingdui-museum",
    name: "Sanxingdui Museum",
    city: "Guanghan",
    province: "Sichuan",
    description:
      "A mysterious Bronze Age civilization that rewrites the history of ancient China, featuring enigmatic bronze masks and a towering bronze tree.",
    longDescription:
      "Sanxingdui Museum reveals one of the greatest archaeological discoveries of the 20th century — an advanced Bronze Age civilization that thrived 3,000 to 5,000 years ago in the Sichuan Basin. The artifacts unearthed here, including towering bronze figures, gold masks, and a sacred bronze tree nearly 4 meters tall, challenge everything historians thought they knew about ancient Chinese civilization. This was not the Yellow River culture — this was something entirely different and breathtakingly original.",
    image: "/images/museums/sanxingdui-museum.jpg",
    imageCredit: {
      source: "commons",
      author: "Jason Zou",
      license: "Public domain",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:SanXingDui_Museum.jpg",
    },
    artifactCount: 50000,
    highlights: [
      "Bronze Standing Figure",
      "Gold Mask",
      "Sacred Bronze Tree",
    ],
    visitInfo: {
      hours: "8:30 AM - 6:00 PM",
      admission: "CNY 72",
      website: "https://www.sxd.cn",
    },
    wikidataId: "Q7420771",
  },
  {
    slug: "national-museum-of-china",
    name: "National Museum of China",
    city: "Beijing",
    province: "Beijing",
    description:
      "The world's most visited museum, chronicling 5,000 years of Chinese civilization through over 1 million artifacts.",
    longDescription:
      "Situated on the eastern side of Tiananmen Square, the National Museum of China is the world's largest museum by floor area and one of the most visited globally. Its permanent exhibitions span the entire arc of Chinese history — from primitive societies to the modern era. The museum's collection includes iconic pieces like the Simuwu Ding, the heaviest bronze vessel ever discovered, and exquisite jade burial suits from the Han Dynasty.",
    image: "/images/museums/national-museum-of-china.jpg",
    imageCredit: {
      source: "commons",
      author: "Shujianyang",
      license: "CC0",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Front_of_National_Museum_of_China.jpg",
    },
    artifactCount: 1050000,
    highlights: [
      "Simuwu Ding (Houmuwu Ding)",
      "Jade Burial Suit",
      "Tang Tri-colored Glazed Pottery",
    ],
    visitInfo: {
      hours: "9:00 AM - 5:00 PM (Closed Mondays)",
      admission: "Free (Reservation required)",
      website: "https://www.chnmuseum.cn",
    },
    wikidataId: "Q1074318",
  },
  {
    slug: "shaanxi-history-museum",
    name: "Shaanxi History Museum",
    city: "Xi'an",
    province: "Shaanxi",
    description:
      "Gateway to the ancient Silk Road, housing treasures from 13 dynasties that once called Xi'an their capital.",
    longDescription:
      "Xi'an served as the capital for 13 dynasties across 1,100 years, and the Shaanxi History Museum is the keeper of that extraordinary legacy. From Neolithic pottery to Tang Dynasty gold and silver, from Zhou Dynasty bronze to exquisite Tang murals, this museum offers an unbroken narrative of Chinese civilization at its most dynamic. The Tang Dynasty treasures are particularly spectacular, reflecting the cosmopolitan golden age when Xi'an (then Chang'an) was the world's greatest city.",
    image: "/images/museums/shaanxi-history-museum.jpg",
    imageCredit: {
      source: "commons",
      author: "Liuxingy",
      license: "CC BY-SA 4.0",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:%E9%99%95%E8%A5%BF%E5%8E%86%E5%8F%B2%E5%8D%9A%E7%89%A9%E9%A6%86.jpg",
    },
    artifactCount: 370000,
    highlights: [
      "Beast-Head Agate Cup",
      "Tang Dynasty Murals",
      "Gilded Silver Dancing Horse Cup",
    ],
    visitInfo: {
      hours: "9:00 AM - 5:30 PM (Closed Mondays)",
      admission: "Free (Basic) / CNY 30 (Special exhibitions)",
      website: "https://www.sxhm.com",
    },
    wikidataId: "Q1151210",
  },
  {
    slug: "shanghai-museum",
    name: "Shanghai Museum",
    city: "Shanghai",
    province: "Shanghai",
    description:
      "One of China's finest museums of ancient art, renowned for its bronze, ceramics, calligraphy, and painting collections.",
    longDescription:
      "The Shanghai Museum is a treasure house of ancient Chinese art, celebrated globally for its superlative collections of bronzes, ceramics, paintings, and calligraphy. Its iconic building on People's Square, shaped like an ancient ding bronze vessel, is itself a work of art. The museum's 120,000+ artifacts include masterworks spanning every major period of Chinese civilization, with particular strength in Song and Yuan dynasty paintings and Shang-Zhou bronzes.",
    image: "/images/museums/shanghai-museum.jpg",
    imageCredit: {
      source: "commons",
      author: "Pyzhou",
      license: "GFDL",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:The_shanghai_museum.jpg",
    },
    artifactCount: 120000,
    highlights: [
      "Da Ke Ding (Large Ke Tripod)",
      "Huai Su Calligraphy",
      "Ming Furniture Collection",
    ],
    visitInfo: {
      hours: "9:00 AM - 5:00 PM (Closed Mondays)",
      admission: "Free",
      website: "https://www.shanghaimuseum.net",
    },
    wikidataId: "Q1051293",
  },
  {
    slug: "hubei-provincial-museum",
    name: "Hubei Provincial Museum",
    city: "Wuhan",
    province: "Hubei",
    description:
      "Home to the legendary Bianzhong of Marquis Yi of Zeng — a 2,400-year-old musical instrument that still plays today.",
    longDescription:
      "The Hubei Provincial Museum is best known for one of the most astonishing archaeological finds in history: the tomb of Marquis Yi of Zeng, dating to 433 BC. The tomb yielded over 15,000 artifacts, but its crown jewel is the Bianzhong — a massive set of 65 bronze bells that, after 2,400 years underground, can still produce music across five octaves with astonishing tonal accuracy. This single artifact revolutionized our understanding of ancient Chinese music and metallurgy.",
    image: "/images/museums/hubei-provincial-museum.jpg",
    imageCredit: {
      source: "commons",
      author: "风之清扬",
      license: "CC BY-SA 3.0",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Hubei_Provincial_Museum.JPG",
    },
    artifactCount: 260000,
    highlights: [
      "Bianzhong of Marquis Yi of Zeng",
      "Sword of Goujian",
      "Lacquerware Collection",
    ],
    visitInfo: {
      hours: "9:00 AM - 5:00 PM (Closed Mondays)",
      admission: "Free",
      website: "https://www.hbww.org",
    },
    wikidataId: "Q4391403",
  },
  {
    slug: "terracotta-warriors-museum",
    name: "Museum of Terracotta Warriors and Horses",
    city: "Xi'an",
    province: "Shaanxi",
    description:
      "The legendary underground army of Emperor Qin Shi Huang — 8,000 life-sized warriors guarding China's first emperor for over 2,200 years.",
    longDescription:
      "Discovered accidentally by farmers in 1974, the Terracotta Army is one of the most significant archaeological discoveries in human history. Over 8,000 life-sized warriors, 130 chariots, and 670 horses were crafted and buried to protect Emperor Qin Shi Huang in the afterlife. Every single warrior has unique facial features, reflecting an extraordinary level of individual craftsmanship. The site continues to yield new discoveries, and much of the emperor's actual tomb remains unexcavated.",
    image: "/images/artifacts/terracotta-warriors.jpg",
    imageCredit: {
      source: "commons",
      author: "Jmhullot",
      license: "CC BY 3.0",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Terracotta_Army%2C_View_of_Pit_1.jpg",
    },
    artifactCount: 8000,
    highlights: [
      "Pit 1 - Main Army Formation",
      "Bronze Chariots",
      "Kneeling Archer",
    ],
    visitInfo: {
      hours: "8:30 AM - 6:00 PM (Mar-Nov) / 8:30 AM - 5:30 PM (Dec-Feb)",
      admission: "CNY 120",
      website: "https://www.bmy.com.cn",
    },
    wikidataId: "Q122931722",
  },
  {
    slug: "nanjing-museum",
    name: "Nanjing Museum",
    city: "Nanjing",
    province: "Jiangsu",
    description:
      "One of China's three great museums, blending traditional and modern exhibition spaces across six specialized halls.",
    longDescription:
      "Founded in 1933, the Nanjing Museum is one of China's oldest and most prestigious cultural institutions. With over 430,000 artifacts spread across six themed halls — History, Art, Special Exhibitions, Digital, Republic of China, and Folk Art — it offers the most comprehensive overview of Chinese material culture under one roof. The Republic of China hall uniquely recreates a 1930s Nanjing street scene, complete with period shops and a working post office.",
    image: "/images/museums/nanjing-museum.jpg",
    imageCredit: {
      source: "commons",
      author: "Tevatron",
      license: "CC BY-SA 3.0",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Nanjing_Museum1.jpg",
    },
    artifactCount: 430000,
    highlights: [
      "Gold Beast (Eastern Han)",
      "Blue-and-White Porcelain Plum Vase",
      "Republic Era Street Scene",
    ],
    visitInfo: {
      hours: "9:00 AM - 5:00 PM (Closed Mondays)",
      admission: "Free",
      website: "https://www.njmuseum.com",
    },
    wikidataId: "Q1815891",
  },
  {
    slug: "dunhuang-research-academy",
    name: "Dunhuang Research Academy (Mogao Caves)",
    city: "Dunhuang",
    province: "Gansu",
    description:
      "The guardian institution of the Mogao Caves — 735 rock-cut grottoes containing over 45,000 sq meters of murals and 2,400+ painted sculptures spanning a millennium of Buddhist art along the Silk Road.",
    longDescription:
      "The Mogao Caves (莫高窟), carved into desert cliffs outside Dunhuang beginning in 366 AD, form the world's largest treasury of Buddhist art. Over a thousand years, successive dynasties added caves, murals, and sculptures, creating a visual encyclopedia of Chinese Buddhist belief, Silk Road exchange, and artistic evolution. The Dunhuang Research Academy (founded 1944) manages conservation, digital documentation, and public access. UNESCO designated the site a World Heritage property in 1987. The caves contain paintings ranging from Northern Wei austerity through Tang opulence to Yuan-Ming eclecticism, alongside the famous 'Library Cave' (Cave 17), where 50,000 manuscripts sealed for 900 years were rediscovered in 1900.",
    image: "/images/museums/dunhuang-mogao.jpg",
    imageCredit: {
      source: "commons",
      author: "Dunhuang Research Academy",
      license: "CC BY-SA 4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Mogao_Caves.jpg",
    },
    artifactCount: 45000,
    highlights: [
      "Flying Apsara Murals (Cave 320)",
      "Reclining Buddha (Cave 158)",
      "Library Cave manuscripts (Cave 17)",
    ],
    visitInfo: {
      hours: "8:30 AM - 6:00 PM (varies by season)",
      admission: "238 CNY (peak) / 140 CNY (off-peak)",
      website: "https://www.mogaoku.net",
    },
    wikidataId: "Q913884",
  },
  {
    slug: "hebei-provincial-museum",
    name: "Hebei Provincial Museum",
    city: "Shijiazhuang",
    province: "Hebei",
    description:
      "Home to treasures from the Mancheng Han tombs including the Changxin Palace Lamp and Jade Burial Suit of Prince Liu Sheng — Hebei's premier museum covers 5,000 years from prehistoric Cishan culture to modern times.",
    longDescription:
      "Hebei Provincial Museum's crown jewels are the artifacts from the Mancheng tombs of Prince Liu Sheng and his wife Dou Wan (discovered 1968). These intact Western Han royal burials yielded the famous jade burial suit sewn with gold wire, the Changxin Palace Lamp, the Boshan incense burner, and over 2,800 other objects. The museum also holds major Warring States lacquerware, Northern Dynasties Buddhist sculpture, and Ding ware ceramics from Hebei's own kiln tradition.",
    image: "/images/museums/hebei-museum.jpg",
    imageCredit: {
      source: "commons",
      author: "Hebei Museum",
      license: "CC BY-SA 4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Hebei_Museum.jpg",
    },
    artifactCount: 240000,
    highlights: [
      "Changxin Palace Lamp",
      "Jade Burial Suit of Liu Sheng",
      "Boshan Incense Burner",
    ],
    visitInfo: {
      hours: "9:00 AM - 5:00 PM (Closed Mondays)",
      admission: "Free",
      website: "http://www.hebeimuseum.org.cn",
    },
    wikidataId: "Q10906279",
  },
  {
    slug: "gansu-provincial-museum",
    name: "Gansu Provincial Museum",
    city: "Lanzhou",
    province: "Gansu",
    description:
      "Home of the Bronze Galloping Horse (马踏飞燕) — China's official tourism symbol — plus major Silk Road artifacts, prehistoric painted pottery, and Tibetan Buddhist art from the Hexi Corridor.",
    longDescription:
      "Gansu Provincial Museum's most famous artifact — the Bronze Galloping Horse of Wuwei — is so iconic that its silhouette has represented Chinese tourism since 1983. Beyond this single masterpiece, the museum holds exceptional Silk Road material: Han Dynasty wooden slips from Juyan, Tang silver vessels from Zhangye, Majiayao painted pottery (the finest Neolithic ceramics in Northwest China), and Buddhist art from the cave temples along the Hexi Corridor. The museum offers a comprehensive narrative of how the Silk Road passed through Gansu for over 2,000 years.",
    image: "/images/museums/gansu-museum.jpg",
    imageCredit: {
      source: "commons",
      author: "Gansu Museum",
      license: "CC BY-SA 4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Gansu_Provincial_Museum.jpg",
    },
    artifactCount: 350000,
    highlights: [
      "Bronze Galloping Horse (马踏飞燕)",
      "Majiayao Painted Pottery",
      "Han Wooden Slips from Juyan",
    ],
    visitInfo: {
      hours: "9:00 AM - 5:00 PM (Closed Mondays)",
      admission: "Free",
      website: "http://www.gansumuseum.com",
    },
    wikidataId: "Q6208285",
  },
  {
    slug: "hunan-provincial-museum",
    name: "Hunan Provincial Museum",
    city: "Changsha",
    province: "Hunan",
    description:
      "Home of the legendary Mawangdui Han Tomb treasures — Lady Dai's perfectly preserved body, the T-shaped silk banner, lacquer coffins, and silk manuscripts that rewrote the history of early China.",
    longDescription:
      "Hunan Provincial Museum reopened in 2017 after a major renovation, with the Mawangdui Han Tombs gallery as its crown jewel. The three tombs, excavated in 1972–1974, yielded over 3,000 artifacts from the burial of Lady Dai (Xin Zhui), her husband the Marquis of Dai, and their son. The museum's collection includes the famous T-shaped silk funeral banner, four nested lacquer coffins, over 50 silk manuscripts (including lost versions of the Dao De Jing), musical instruments, food remains, and Lady Dai's astonishingly preserved body. The 2026 CGTN documentary series 'China Crafted' has renewed global interest in the Mawangdui lacquerware and silk collections.",
    image: "/images/museums/hunan-museum.jpg",
    imageCredit: {
      source: "commons",
      author: "Hunan Museum",
      license: "CC BY-SA 4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Hunan_Provincial_Museum.jpg",
    },
    artifactCount: 180000,
    highlights: [
      "T-Shaped Silk Funeral Banner",
      "Nested Lacquer Coffins of Lady Dai",
      "Mawangdui Silk Manuscripts",
    ],
    visitInfo: {
      hours: "9:00 AM - 5:00 PM (Closed Mondays)",
      admission: "Free",
      website: "https://www.hnmuseum.com",
    },
    wikidataId: "Q3783729",
  },
  {
    slug: "famen-temple-museum",
    name: "Famen Temple Museum",
    city: "Baoji",
    province: "Shaanxi",
    description:
      "Built around the Famen Temple crypt discovery, this museum preserves Tang Dynasty imperial Buddhist treasures including the Buddha finger bone relic, secret-color porcelain, silk textiles, and the world's oldest complete tea set.",
    longDescription:
      "Famen Temple, near Xi'an, became world-famous in 1987 when the collapsed pagoda revealed a sealed Tang Dynasty underground crypt. The crypt had been closed in 874 AD and preserved more than 2,000 objects donated by Tang emperors, including four Buddhist finger bone relics, gold and silver vessels, mise (secret-color) celadon, silk textiles, and the gilt silver tea set that transformed the study of Tang tea culture. The Famen Temple Museum presents the site as both an archaeological discovery and a living Buddhist pilgrimage destination.",
    image: "/images/museums/famen-temple-museum.jpg",
    imageCredit: {
      source: "commons",
      author: "Famen Temple Museum",
      license: "CC BY-SA 4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Famen_Temple.jpg",
    },
    artifactCount: 2000,
    highlights: [
      "Buddha Finger Bone Relic",
      "Gilt Silver Tea Set",
      "Secret-Color Celadon Wares",
    ],
    visitInfo: {
      hours: "8:30 AM - 5:30 PM",
      admission: "120 CNY",
      website: "http://www.famensi.com",
    },
    wikidataId: "Q848644",
  },
  {
    slug: "jinsha-site-museum",
    name: "Jinsha Site Museum",
    city: "Chengdu",
    province: "Sichuan",
    description:
      "Built directly over the Jinsha archaeological site, this Chengdu museum preserves the Sun Bird gold foil, jade, ivory, and sacrificial remains of the ancient Shu civilization that followed Sanxingdui.",
    longDescription:
      "Jinsha was discovered in 2001 during urban construction in Chengdu, revealing a major ancient Shu ritual center active roughly 1200–650 BC. The site yielded gold masks, jade weapons, stone figures, ivory deposits, and the famous Sun Bird gold foil that later became China's official cultural heritage symbol. Together with Sanxingdui, Jinsha proves that the Chengdu Plain had a sophisticated Bronze Age civilization with its own ritual system, artistic language, and solar-bird iconography.",
    image: "/images/museums/jinsha-site-museum.jpg",
    imageCredit: {
      source: "commons",
      author: "Jinsha Site Museum",
      license: "CC BY-SA 4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Jinsha_Site_Museum.jpg",
    },
    artifactCount: 6000,
    highlights: [
      "Sun Bird Gold Foil",
      "Gold Mask Fragments",
      "Jade Ritual Objects",
    ],
    visitInfo: {
      hours: "9:00 AM - 6:00 PM",
      admission: "70 CNY",
      website: "https://www.jinshasitemuseum.com",
    },
    wikidataId: "Q6202076",
  },
  {
    slug: "yinxu-museum",
    name: "Yinxu Museum",
    city: "Anyang",
    province: "Henan",
    description:
      "The museum of the last Shang capital, preserving oracle bones, royal tomb finds, bronze ritual vessels, and the archaeological evidence behind China's earliest readable writing.",
    longDescription:
      "Yinxu, near modern Anyang, was the last capital of the Shang Dynasty and one of the foundational sites of Chinese archaeology. Excavations have revealed palace foundations, royal tombs, sacrificial pits, bronze workshops, chariot burials, and more than 150,000 oracle-bone inscriptions. These inscriptions record royal divination and provide the earliest substantial body of Chinese writing. The museum connects the world of Lady Fuhao, Shang bronze ritual, oracle-bone divination, and the historically grounded background behind later mythic works such as Creation of the Gods.",
    image: "/images/museums/yinxu-museum.jpg",
    imageCredit: {
      source: "commons",
      author: "Yinxu Museum",
      license: "CC BY-SA 4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Yinxu_Museum.jpg",
    },
    artifactCount: 4000,
    highlights: [
      "Oracle Bone Inscriptions",
      "Fuhao Tomb Finds",
      "Shang Bronze Ritual Vessels",
    ],
    visitInfo: {
      hours: "8:00 AM - 6:00 PM",
      admission: "70 CNY",
      website: "https://en.wikipedia.org/wiki/Yinxu",
    },
    wikidataId: "Q505831",
  },
  {
    slug: "leshan-giant-buddha-scenic-area",
    name: "Leshan Giant Buddha Scenic Area",
    city: "Leshan",
    province: "Sichuan",
    description:
      "A UNESCO World Heritage landscape centered on the 71-meter Tang Dynasty Leshan Giant Buddha, carved into red sandstone cliffs where three rivers meet.",
    longDescription:
      "The Leshan Giant Buddha Scenic Area is one of China's most visited Buddhist heritage destinations. The colossal seated Maitreya was carved between 713 and 803 AD to calm dangerous river currents at the meeting of the Min, Dadu, and Qingyi rivers. The site combines engineering, pilgrimage, cliff sculpture, river travel, and Mount Emei Buddhist culture. Its monumental landscape has renewed relevance for global audiences interested in Chinese fantasy games and Sichuan heritage routes.",
    image: "/images/museums/leshan-giant-buddha.jpg",
    imageCredit: {
      source: "commons",
      author: "UNESCO / Wikimedia Commons",
      license: "CC BY-SA 4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Leshan_Giant_Buddha.jpg",
    },
    artifactCount: 1,
    highlights: [
      "Leshan Giant Buddha",
      "Hidden Drainage System",
      "Mount Emei Buddhist Landscape",
    ],
    visitInfo: {
      hours: "8:00 AM - 6:00 PM",
      admission: "80 CNY",
      website: "https://whc.unesco.org/en/list/779/",
    },
    wikidataId: "Q19786",
  },
];

export function getMuseumBySlug(slug: string): Museum | undefined {
  return museums.find((m) => m.slug === slug);
}
