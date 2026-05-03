export interface Artifact {
  slug: string;
  name: string;
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
  funFacts: string[];
  relatedSlugs: string[];
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
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=800&q=80",
    funFacts: [
      "Contains over 800 individually painted human figures",
      "The painting has been copied, forged, and reimagined more than any other Chinese artwork",
      "It was stolen at least 5 times throughout history",
      "Modern scholars have used it to study Song Dynasty economics and urban planning",
    ],
    relatedSlugs: ["da-ke-ding", "jade-burial-suit"],
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
    image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=800&q=80",
    funFacts: [
      "It is the tallest bronze figure ever discovered from the ancient world",
      "The statue was found in two pieces in separate sacrificial pits",
      "Scientists still cannot determine what the figure was holding",
      "The bronze-casting technique used was more advanced than contemporary Shang methods",
    ],
    relatedSlugs: ["gold-mask-sanxingdui", "sacred-bronze-tree"],
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
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    funFacts: [
      "It went viral worldwide when discovered in 2021, becoming a meme and cultural icon",
      "The gold is approximately 84% pure — remarkably high for 3,000-year-old metalwork",
      "It may have originally covered a bronze statue's face",
      "No writing has ever been found at Sanxingdui, deepening the mystery",
    ],
    relatedSlugs: ["bronze-standing-figure-sanxingdui", "sacred-bronze-tree"],
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
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1569587112025-0d460e81a126?w=800&q=80",
    funFacts: [
      "It weighs 832.84 kg — heavier than a grand piano",
      "Villagers hid it underground to prevent Japanese looting during WWII",
      "Making it required about 1,000 kg of copper, tin, and lead",
      "The casting process needed 200-300 workers operating simultaneously",
    ],
    relatedSlugs: ["da-ke-ding", "bianzhong-marquis-yi"],
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
    image: "https://images.unsplash.com/photo-1563302111-eab4b145e6c9?w=800&q=80",
    funFacts: [
      "It took an estimated 10+ years for skilled artisans to make",
      "Only royals and the highest nobles were permitted gold-wire jade suits",
      "Despite the jade, Liu Sheng's body completely decomposed",
      "The practice was eventually banned by later emperors as too extravagant",
    ],
    relatedSlugs: ["simuwu-ding", "along-the-river-during-qingming-festival"],
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
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    funFacts: [
      "Each bell produces TWO different notes depending on where you strike it",
      "The complete set weighs over 4.4 tons",
      "Contains 3,755 characters of inscribed musical theory",
      "China demonstrated a 12-tone musical system 2,000 years before Europe",
    ],
    relatedSlugs: ["sword-of-goujian", "simuwu-ding"],
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
    image: "https://images.unsplash.com/photo-1582142839970-2b9e04b60f65?w=800&q=80",
    funFacts: [
      "Still sharp enough to cut paper after 2,500 years",
      "Contains a chromium oxide anti-corrosion layer — technology 're-discovered' in the 1900s",
      "King Goujian's story of perseverance is one of China's most famous legends",
      "The sword was found alongside 20+ other weapons, but only this one was pristine",
    ],
    relatedSlugs: ["bianzhong-marquis-yi", "simuwu-ding"],
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
    image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1591122947157-26bad3a117d2?w=800&q=80",
    funFacts: [
      "No two warriors have the same face — over 8,000 unique portraits",
      "They were originally painted in vivid colors that faded upon exposure to air",
      "The emperor's actual tomb has never been opened",
      "Ancient texts claim the tomb contains rivers of liquid mercury — soil tests confirm elevated mercury levels",
    ],
    relatedSlugs: ["simuwu-ding", "sword-of-goujian"],
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
];

export const dynasties = [
  "All",
  "Late Shang Dynasty",
  "Western Zhou Dynasty",
  "Spring and Autumn Period",
  "Warring States Period",
  "Qin Dynasty",
  "Western Han Dynasty",
  "Northern Song Dynasty",
  "Tang Dynasty",
  "Yuan Dynasty",
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
