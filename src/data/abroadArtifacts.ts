/**
 * Chinese treasures housed in museums outside China.
 *
 * Source of record: scripts/generated/met/<slug>.json (synced from The Met
 * Open Access API). Curated narratives are added on top so the page is not
 * merely a Met mirror but a contextualised view of the diaspora story.
 */

export type AbroadSource = "met" | "british-museum" | "guimet" | "freer-sackler";

export interface AbroadArtifact {
  slug: string;
  title: string;
  chineseTitle?: string;
  objectName: string;
  date: string;
  period: string;
  medium: string;
  dimensions: string;
  classification: string;
  image: string;
  sourceMuseum: {
    id: AbroadSource;
    name: string;
    shortName: string;
    city: string;
    country: string;
  };
  sourceUrl: string;
  license: "CC0" | "Public domain" | "CC BY" | "CC BY-SA" | "Other";
  artist?: string;
  creditLine: string;
  accessionNumber: string;
  // Our curated narrative
  summary: string;
  significance: string;
  journey: string; // how / when it left China, briefly
  tags: string[];
}

const MET_MUSEUM = {
  id: "met" as const,
  name: "The Metropolitan Museum of Art",
  shortName: "The Met",
  city: "New York",
  country: "USA",
};

export const abroadArtifacts: AbroadArtifact[] = [
  {
    slug: "night-shining-white",
    title: "Night-Shining White",
    chineseTitle: "照夜白图",
    artist: "Han Gan (韩干)",
    objectName: "Handscroll",
    date: "ca. 750",
    period: "Tang dynasty (618–907)",
    medium: "Handscroll; ink on paper",
    dimensions: "30.8 × 34 cm (image); 35.4 cm × 11.4 m with mounting",
    classification: "Paintings",
    image: "/images/abroad/night-shining-white.jpg",
    sourceMuseum: MET_MUSEUM,
    sourceUrl: "https://www.metmuseum.org/art/collection/search/39901",
    license: "CC0",
    creditLine: "Purchase, The Dillon Fund Gift, 1977",
    accessionNumber: "1977.78",
    summary:
      "The single most celebrated painting of a horse in Chinese art. Han Gan's ink drawing of Emperor Xuanzong's favourite charger, 'Night-Shining White', has been treasured by collectors for over 1,270 years — its scroll is covered end to end in colophons and seals of the emperors, scholars, and dealers through whose hands it passed.",
    significance:
      "A founding document of Chinese figurative painting. Han Gan's refusal to flatter the horse — his insistence that animals be observed from life — redirected the entire tradition of Chinese equine art.",
    journey:
      "The scroll was in the imperial collection of the Qing emperors and recorded in the 1745 Shiqu Baoji catalogue. It left the Forbidden City with the deposed Puyi in 1924, passed through Japan, and was bought on the London art market by Sir Percival David. The Met acquired it in 1977.",
    tags: ["Tang", "Painting", "Imperial", "Han Gan"],
  },
  {
    slug: "tang-sancai-horse",
    title: "Sancai-Glazed Horse",
    chineseTitle: "唐三彩马",
    objectName: "Tomb figure",
    date: "late 7th – first half of the 8th century",
    period: "Tang dynasty (618–907)",
    medium: "Earthenware with three-colour (sancai) glaze and pigment",
    dimensions: "H. 73.7 cm; W. 81.3 cm; D. 30.5 cm",
    classification: "Tomb Pottery",
    image: "/images/abroad/tang-sancai-horse.jpg",
    sourceMuseum: MET_MUSEUM,
    sourceUrl: "https://www.metmuseum.org/art/collection/search/42189",
    license: "CC0",
    creditLine: "Gift of Stanley Herzman, in memory of Adele Herzman, 1991",
    accessionNumber: "1991.253.12",
    summary:
      "A nearly life-size ceramic horse glazed in the signature amber, green, and cream of Tang sancai ware. Its powerful stance and flared nostrils capture the Ferghana chargers that Tang emperors imported at ruinous expense along the Silk Road.",
    significance:
      "Sancai horses were buried with aristocrats as spiritual mounts for the afterlife. This example is among the largest and finest outside China — a direct echo of the Tang obsession with horse culture immortalised in Han Gan's paintings.",
    journey:
      "Uncovered in early-20th-century Luoyang or Xi'an tomb excavations during the rail-building boom, exported through Shanghai, and gifted to the Met by the Herzman family in 1991.",
    tags: ["Tang", "Sancai", "Tomb", "Silk Road"],
  },
  {
    slug: "northern-wei-buddha-maitreya",
    title: "Buddha Maitreya (Mile)",
    chineseTitle: "弥勒佛立像",
    objectName: "Gilt-bronze figure",
    date: "dated 486 (10th year of the Taihe reign)",
    period: "Northern Wei dynasty (386–534)",
    medium: "Gilt bronze with traces of pigment; piece-mould cast",
    dimensions: "H. 140.3 cm; W. 62.2 cm; D. 48.9 cm",
    classification: "Sculpture",
    image: "/images/abroad/northern-wei-buddha-maitreya.jpg",
    sourceMuseum: MET_MUSEUM,
    sourceUrl: "https://www.metmuseum.org/art/collection/search/42733",
    license: "CC0",
    creditLine: "John Stewart Kennedy Fund, 1926",
    accessionNumber: "26.123",
    summary:
      "The earliest precisely-dated monumental Chinese Buddhist bronze known to survive anywhere. An inscription on the base tells us it was cast in 486 CE by a nun named Fayi and 66 of her fellow devotees.",
    significance:
      "Proves that by the late 5th century Chinese foundries could cast Buddhas at life-size scale — a technical feat that reframes our understanding of early Buddhist patronage in North China.",
    journey:
      "Almost certainly looted from a Shanxi province temple during the late Qing / early Republican upheavals. Acquired by the Met via the Kennedy Fund in 1926, the peak year of Western collecting of Chinese sculpture.",
    tags: ["Northern Wei", "Buddhist", "Sculpture", "Bronze"],
  },
  {
    slug: "tang-head-of-bodhisattva",
    title: "Head of a Bodhisattva",
    chineseTitle: "菩萨石刻头像",
    objectName: "Sandstone head",
    date: "ca. early 8th century",
    period: "Tang dynasty (618–907)",
    medium: "Sandstone with pigment",
    dimensions: "H. 40 cm; W. 20.3 cm; D. 19.1 cm",
    classification: "Sculpture",
    image: "/images/abroad/tang-head-of-bodhisattva.jpg",
    sourceMuseum: MET_MUSEUM,
    sourceUrl: "https://www.metmuseum.org/art/collection/search/39640",
    license: "CC0",
    creditLine: "Gift of Abby Aldrich Rockefeller, 1942",
    accessionNumber: "42.25.12",
    summary:
      "A serene Tang-dynasty bodhisattva head, sliced clean from a once-colossal cave-temple statue. Its softly downcast eyes and jewelled crown represent the mature classical style that spread from Longmen across East Asia.",
    significance:
      "Embodies the 'international style' of the Tang court — a synthesis of Indian Gupta, Central Asian, and Chinese forms that became the template for Buddhist art in Korea, Japan, and Vietnam.",
    journey:
      "Severed heads like this flooded the Western market in the 1910s–30s after the great cave temples at Longmen, Tianlongshan, and Xiangtangshan were stripped by dealers. Abby Rockefeller purchased it for her Chinese art collection and gifted it to the Met in 1942.",
    tags: ["Tang", "Buddhist", "Sculpture", "Cave Temple"],
  },
  {
    slug: "yuan-blue-and-white-bottle",
    title: "Bottle with Peony Scroll",
    chineseTitle: "青花缠枝牡丹纹梅瓶",
    objectName: "Meiping bottle",
    date: "mid-14th century",
    period: "Yuan dynasty (1271–1368)",
    medium: "Porcelain painted with cobalt blue under a transparent glaze (Jingdezhen ware)",
    dimensions: "H. 44.5 cm",
    classification: "Ceramics",
    image: "/images/abroad/yuan-blue-and-white-bottle.jpg",
    sourceMuseum: MET_MUSEUM,
    sourceUrl: "https://www.metmuseum.org/art/collection/search/49216",
    license: "CC0",
    creditLine: "Rogers Fund, 1926",
    accessionNumber: "26.271.1a, b",
    summary:
      "A quintessential Yuan blue-and-white meiping, its shoulders wrapped in a dense peony scroll painted in cobalt imported from Persia via the Silk Road. Early blue-and-whites were made first for export to the Islamic world — only later did Chinese collectors embrace the palette.",
    significance:
      "Yuan blue-and-white is the pivot point of world ceramic history: the moment Jingdezhen invented the aesthetic that would dominate European and Middle Eastern tables for the next 600 years.",
    journey:
      "Acquired by the Met via the Rogers Fund in 1926. Yuan blue-and-whites surfaced in the West chiefly through Ottoman and Persian palace dispersals in the 19th–20th centuries, supplemented by tomb finds in North China.",
    tags: ["Yuan", "Blue-and-white", "Jingdezhen", "Silk Road"],
  },
  {
    slug: "ming-wanli-dragon-phoenix-dish",
    title: "Dish with Dragon and Phoenix",
    chineseTitle: "明万历五彩龙凤纹大盘",
    objectName: "Porcelain dish",
    date: "late 16th – early 17th century",
    period: "Ming dynasty, Wanli mark and period (1573–1620)",
    medium: "Porcelain painted in underglaze cobalt blue and overglaze polychrome enamels (Jingdezhen ware)",
    dimensions: "Diam. 37.5 cm",
    classification: "Ceramics",
    image: "/images/abroad/ming-wanli-dragon-phoenix-dish.jpg",
    sourceMuseum: MET_MUSEUM,
    sourceUrl: "https://www.metmuseum.org/art/collection/search/42543",
    license: "CC0",
    creditLine: "Rogers Fund, 1917",
    accessionNumber: "17.118.17",
    summary:
      "An imperial Wanli wucai ('five-colour') dish, bearing the reign mark of one of the Ming dynasty's most profligate emperors. A five-clawed dragon (the emperor) and a phoenix (the empress) circle one another in a conventional symbol of imperial harmony.",
    significance:
      "The Wanli kilns pushed Chinese porcelain to its polychromatic peak — and then nearly bankrupted the treasury doing so. Dishes like this were used in palace banquets and sent to tributary courts as diplomatic gifts.",
    journey:
      "Left Beijing almost certainly via the 1860 sacking of the Summer Palace or the 1900 Boxer-era looting. Circulated through the Parisian and London markets before entering the Met via the Rogers Fund in 1917.",
    tags: ["Ming", "Wanli", "Imperial", "Wucai"],
  },
  {
    slug: "shang-zhou-ritual-altar-set",
    title: "Ritual Altar Set",
    chineseTitle: "商周青铜礼器祭祀组",
    objectName: "Altar with 13 ritual vessels",
    date: "late 11th century BCE",
    period: "Shang–Western Zhou transition (1046–771 BCE)",
    medium: "Bronze",
    dimensions: "Table: H. 18.1 cm; W. 46.4 cm; D. 89.9 cm",
    classification: "Metalwork",
    image: "/images/abroad/shang-zhou-ritual-altar-set.jpg",
    sourceMuseum: MET_MUSEUM,
    sourceUrl: "https://www.metmuseum.org/art/collection/search/76974",
    license: "CC0",
    creditLine: "Munsey Fund, 1931",
    accessionNumber: "24.72.1–.14",
    summary:
      "The only complete Western Zhou ritual altar set known outside China: a bronze table plus thirteen wine and food vessels used together in ancestor worship. Together they tell us exactly how a Zhou aristocratic family communicated with their dead.",
    significance:
      "Individual Shang-Zhou bronzes exist in many collections, but an intact set preserves something singular: the choreography of ritual. Without the full ensemble the grammar of early Chinese religion is lost.",
    journey:
      "Reportedly unearthed at Baoji, Shaanxi in the 1900s. It passed through the dealer C. T. Loo in Paris and reached the Met in 1931, funded by the Munsey bequest — at a time when Western institutions were actively competing for Chinese bronzes.",
    tags: ["Shang", "Western Zhou", "Bronze", "Ritual"],
  },
  {
    slug: "tang-twelve-zodiac-set",
    title: "Set of Twelve Zodiac Animals",
    chineseTitle: "唐十二生肖俑",
    objectName: "Tomb figures",
    date: "8th century",
    period: "Tang dynasty (618–907)",
    medium: "Earthenware with white slip",
    dimensions: "Each approx. H. 30.5 cm",
    classification: "Ceramics",
    image: "/images/abroad/tang-twelve-zodiac-set.jpg",
    sourceMuseum: MET_MUSEUM,
    sourceUrl: "https://www.metmuseum.org/art/collection/search/49381",
    license: "CC0",
    creditLine: "Gift of Charlotte C. Weber, 2000",
    accessionNumber: "2000.662.7a–l",
    summary:
      "A complete set of the twelve Chinese zodiac animals, each modelled on a human body — rat, ox, tiger, rabbit, dragon, snake, horse, goat, monkey, rooster, dog, pig. They stood guard in the four directions around a Tang tomb.",
    significance:
      "The twelve-zodiac system itself is ancient, but this astonishing idea — fusing each creature onto a courtier's body — is pure Tang iconographic invention and the direct ancestor of every twelve-zodiac artwork since.",
    journey:
      "Acquired by the American collector Charlotte C. Weber and gifted to the Met in 2000. Full surviving sets are exceedingly rare; this one probably came from a single undisturbed tomb excavated in mid-20th-century Henan or Shaanxi.",
    tags: ["Tang", "Tomb", "Zodiac", "Ceramics"],
  },
];

export function getAbroadArtifactBySlug(
  slug: string,
): AbroadArtifact | undefined {
  return abroadArtifacts.find((a) => a.slug === slug);
}
