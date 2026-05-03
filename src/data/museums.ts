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
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a7/Forbidden_City_Beijing_Shenwumen_Gate.JPG",
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
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/91/SanXingDui_Museum.jpg",
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
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/95/Front_of_National_Museum_of_China.jpg",
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
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/35/%E9%99%95%E8%A5%BF%E5%8E%86%E5%8F%B2%E5%8D%9A%E7%89%A9%E9%A6%86.jpg",
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
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2d/The_shanghai_museum.jpg",
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
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/0b/Hubei_Provincial_Museum.JPG",
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
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/49/Terracotta_Army%2C_View_of_Pit_1.jpg",
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
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/31/Nanjing_Museum1.jpg",
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
];

export function getMuseumBySlug(slug: string): Museum | undefined {
  return museums.find((m) => m.slug === slug);
}
