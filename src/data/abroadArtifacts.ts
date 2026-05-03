/**
 * Chinese treasures housed in museums outside China.
 *
 * Source of record:
 *   - scripts/generated/met/<slug>.json          (Met Open Access API)
 *   - scripts/generated/cleveland/<slug>.json    (CMA Open Access API)
 *   - scripts/generated/british-museum/<slug>.json (Wikimedia Commons + Wikidata)
 *
 * Curated narratives are layered on top so the page is not just a mirror
 * of museum metadata but a contextualised view of the diaspora story.
 */

export type AbroadSource =
  | "met"
  | "cleveland"
  | "british-museum"
  | "guimet"
  | "freer-sackler";

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

const CMA_MUSEUM = {
  id: "cleveland" as const,
  name: "The Cleveland Museum of Art",
  shortName: "Cleveland Museum",
  city: "Cleveland",
  country: "USA",
};

const BM_MUSEUM = {
  id: "british-museum" as const,
  name: "The British Museum",
  shortName: "British Museum",
  city: "London",
  country: "United Kingdom",
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
  {
    slug: "ming-jiajing-carp-jar",
    title: "Jar with Carp in a Lotus Pond",
    chineseTitle: "明嘉靖五彩鱼藻纹罐",
    objectName: "Lidded jar",
    date: "mid-16th century",
    period: "Ming dynasty, Jiajing mark and period (1522–1566)",
    medium:
      "Porcelain painted in underglaze cobalt blue and overglaze polychrome enamels (Jingdezhen ware)",
    dimensions: "H. 23.2 cm",
    classification: "Ceramics",
    image: "/images/abroad/ming-jiajing-carp-jar.jpg",
    sourceMuseum: MET_MUSEUM,
    sourceUrl: "https://www.metmuseum.org/art/collection/search/42549",
    license: "CC0",
    creditLine: "Rogers Fund, 1917",
    accessionNumber: "17.127.2",
    summary:
      "A masterpiece of Jiajing wucai porcelain: carp gliding through tangled lotus stems, painted in five overglaze enamels above an underglaze cobalt outline. The carp (鲤, lǐ) puns on profit (利) and is one of the densest auspicious symbols in Chinese decorative art.",
    significance:
      "Jiajing emperor was a Daoist mystic, and his kilns experimented endlessly with chromatic effects to please him. This carp jar shows the Jingdezhen palette at its full polychrome maturity — a generation before the Wanli reign pushed the same techniques to extravagant excess.",
    journey:
      "Acquired by the Met via the Rogers Fund in 1917, when systematic Western collecting of Ming polychrome porcelain was at its height. Many such pieces left China through the Beijing dealer markets after the 1900 Boxer-era looting.",
    tags: ["Ming", "Jiajing", "Wucai", "Imperial"],
  },
  {
    slug: "qing-zhanyinbao-portrait",
    title: "Portrait of the Imperial Guard Zhanyinbao",
    chineseTitle: "占音保画像",
    objectName: "Hanging scroll",
    date: "dated 1760",
    period: "Qing dynasty, Qianlong reign (1735–1796)",
    medium: "Hanging scroll; ink and color on silk",
    dimensions: "188.6 × 95.1 cm (image)",
    classification: "Paintings",
    image: "/images/abroad/qing-zhanyinbao-portrait.jpg",
    sourceMuseum: MET_MUSEUM,
    sourceUrl: "https://www.metmuseum.org/art/collection/search/49249",
    license: "CC0",
    artist: "Unidentified Qing court artist",
    creditLine: "Purchase, The Dillon Fund Gift, 1986",
    accessionNumber: "1986.206",
    summary:
      "A life-size formal portrait of Zhanyinbao, an imperial bodyguard rewarded for distinguished service in the Qianlong emperor's western campaigns. He stands in full-length court armor, sabre drawn, with a Manchu-language inscription enumerating his exploits.",
    significance:
      "One of fifty heroic portraits Qianlong commissioned for the Ziguang Pavilion (紫光阁) in 1760. The series fused European chiaroscuro brought to court by the Jesuit painter Castiglione with traditional Chinese full-length figure conventions — a pivotal experiment in 18th-century cross-cultural portraiture.",
    journey:
      "The Ziguang Pavilion portraits were dispersed during the Boxer Rebellion of 1900, when the eight-nation alliance occupied Beijing. Most surviving examples are now in Berlin, Paris, and a handful in North America. The Met acquired this one in 1986.",
    tags: ["Qing", "Qianlong", "Portrait", "Court"],
  },
  {
    slug: "qing-qianlong-jade-basin",
    title: "Imperial Jade Basin",
    chineseTitle: "清乾隆御制玉海",
    objectName: "Basin",
    date: "dated 1774",
    period: "Qing dynasty, Qianlong reign (1735–1796)",
    medium: "Nephrite jade",
    dimensions: "H. 19.3 cm; W. 76.1 cm; D. 43 cm; weight ca. 90 kg",
    classification: "Jade",
    image: "/images/abroad/qing-qianlong-jade-basin.jpg",
    sourceMuseum: MET_MUSEUM,
    sourceUrl: "https://www.metmuseum.org/art/collection/search/42060",
    license: "CC0",
    creditLine: "Gift of Heber R. Bishop, 1902",
    accessionNumber: "02.18.689",
    summary:
      "A monumental jade basin carved from a single Khotan nephrite boulder for the Qianlong emperor in 1774. The exterior bears a long imperial poem in the emperor's own hand, recording his pride in the artisans who could turn a stone into a vessel.",
    significance:
      "Demonstrates the Qing imperial workshops' mastery of jade carving at colossal scale — only possible after the conquest of Xinjiang in 1759 brought Khotan's jade fields into direct imperial control. The piece is signed and dated by the emperor himself.",
    journey:
      "Part of the Heber Bishop jade collection, the largest single donation of Chinese jade ever made to a Western museum. Bishop assembled it through Beijing dealers in the 1880s–90s, when many imperial pieces were leaking out of the palace storerooms; he gave the entire collection to the Met in 1902.",
    tags: ["Qing", "Qianlong", "Jade", "Imperial"],
  },
  {
    slug: "han-jade-gold-comb",
    title: "Jade-and-Gold Comb",
    chineseTitle: "东汉嵌玉金梳",
    objectName: "Hair comb",
    date: "1st–2nd century",
    period: "Eastern Han dynasty (25–220)",
    medium: "Nephrite jade and gold",
    dimensions: "H. 5.1 cm; L. 7.6 cm",
    classification: "Jade",
    image: "/images/abroad/han-jade-gold-comb.jpg",
    sourceMuseum: MET_MUSEUM,
    sourceUrl: "https://www.metmuseum.org/art/collection/search/72544",
    license: "CC0",
    creditLine:
      "Purchase, The Rosenkranz Foundation and Shelby White Gifts, 2004",
    accessionNumber: "2004.322",
    summary:
      "A miniature Eastern Han hair comb: a slab of pale nephrite jade clipped into a tracery of granulated gold work depicting two confronted dragons among clouds. A jewel built for an aristocratic woman's coiffure.",
    significance:
      "Shows the moment when Han luxury arts fused two craft traditions: indigenous jade carving and the granulation gold-work that arrived along the Silk Road from the Hellenistic world. The pairing is uncharacteristic of pre-Han China and characteristically Han in its outward-looking syncretism.",
    journey:
      "Surfaced on the international market in the late 20th century, almost certainly from a tomb excavation in Hebei or Henan. Acquired by the Met in 2004 with funding from the Rosenkranz Foundation and the collector Shelby White.",
    tags: ["Han", "Jade", "Gold", "Silk Road"],
  },
  {
    slug: "qing-jade-boy-buffalo",
    title: "Boy with Water Buffalo",
    chineseTitle: "清玉雕牧童与水牛",
    objectName: "Figurine",
    date: "18th century",
    period: "Qing dynasty (1644–1911)",
    medium: "Nephrite jade",
    dimensions: "H. 13.2 cm; W. 10.6 cm; L. 18.5 cm",
    classification: "Jade",
    image: "/images/abroad/qing-jade-boy-buffalo.jpg",
    sourceMuseum: MET_MUSEUM,
    sourceUrl: "https://www.metmuseum.org/art/collection/search/41918",
    license: "CC0",
    creditLine: "Gift of Heber R. Bishop, 1902",
    accessionNumber: "02.18.438",
    summary:
      "A pale-celadon nephrite carving of a small boy reclining on the back of a docile water buffalo. The motif draws on the Chan Buddhist parable of the herder taming the bull, and on the broader Confucian ideal of pastoral simplicity.",
    significance:
      "Eighteenth-century Qing jade carving turned almost any motif into a vehicle for technical bravura — note how the carver has used the slight color variation of the original boulder to differentiate the boy from the beast. A miniature masterpiece of subtractive sculpture.",
    journey:
      "Like the Qianlong jade basin above, this came to the Met as part of the Heber Bishop bequest in 1902 — assembled in Beijing in the 1890s when imperial-quality jades were entering the international market.",
    tags: ["Qing", "Jade", "Pastoral", "Buddhist"],
  },
  {
    slug: "western-zhou-he-vessel",
    title: "Bronze Spouted Ritual Water Vessel (He)",
    chineseTitle: "西周青铜盉",
    objectName: "Water vessel",
    date: "late 11th century BCE",
    period: "Western Zhou dynasty (1046–771 BCE)",
    medium: "Bronze, lost-wax cast",
    dimensions: "H. 28.6 cm; W. (handle to spout) 23.5 cm",
    classification: "Metalwork",
    image: "/images/abroad/western-zhou-he-vessel.jpg",
    sourceMuseum: MET_MUSEUM,
    sourceUrl: "https://www.metmuseum.org/art/collection/search/42168",
    license: "CC0",
    creditLine: "Munsey Fund, 1931",
    accessionNumber: "24.72.5a, b",
    summary:
      "A spouted ritual He vessel for pouring water in the ceremonies of ancestor worship. The body wears the classic Western Zhou taotie mask, the handle is a coiled dragon, and the lid is finialed with a small bird.",
    significance:
      "Part of the Met's complete Western Zhou ritual altar set (24.72.1–.14) — a once-in-a-millennium archaeological grouping. Without the He, the choreography of the ritual would be incomplete: it is the vessel that mediates between the food and wine vessels in the offering sequence.",
    journey:
      "Reportedly excavated at Baoji, Shaanxi in the early 20th century. Sold by the Paris-based dealer C. T. Loo and acquired by the Met as part of the altar group in 1931, supported by the Munsey Fund.",
    tags: ["Western Zhou", "Bronze", "Ritual", "Set"],
  },
  {
    slug: "cma-buddhist-retreat-stream-mountains",
    title: "Buddhist Retreat by Stream and Mountains",
    chineseTitle: "溪山兰若图",
    artist: "Juran (巨然)",
    objectName: "Hanging scroll",
    date: "ca. 960–985",
    period: "Northern Song dynasty (960–1127)",
    medium: "Hanging scroll; ink on silk",
    dimensions: "Painting: 184.5 × 56.1 cm",
    classification: "Paintings",
    image: "/images/abroad/cma-buddhist-retreat-stream-mountains.jpg",
    sourceMuseum: CMA_MUSEUM,
    sourceUrl: "https://clevelandart.org/art/1959.348",
    license: "CC0",
    creditLine:
      "Cleveland Museum of Art — Gift of Katharine Holden Thayer, 1959",
    accessionNumber: "1959.348",
    summary:
      "A towering ink mountain dominates the composition, capped with the round 'alum-head' boulders and wet ink dots that became Juran's signature. The Buddhist hermitage at the foot of the cliff is almost hidden — the point is the immensity of nature, not the human dwelling.",
    significance:
      "Juran was a Buddhist monk-painter who served the Southern Tang court before the Song unification. This scroll fuses the misty Jiangnan southern style with the monumental Northern Song landscape mode — a hinge moment in the entire Chinese landscape tradition.",
    journey:
      "Held by Chinese collectors through Ming and Qing, then dispersed in the early Republican era. It passed through Japanese collections before being acquired by the heiress Katharine Holden Thayer, who gifted it to Cleveland in 1959.",
    tags: ["Northern Song", "Painting", "Landscape", "Juran"],
  },
  {
    slug: "cma-knickknack-peddler",
    title: "The Knickknack Peddler",
    chineseTitle: "货郎图",
    artist: "Li Song (李嵩)",
    objectName: "Album leaf",
    date: "1212",
    period: "Southern Song dynasty (1127–1279)",
    medium: "Album leaf; ink and color on silk",
    dimensions: "24.1 × 26 cm",
    classification: "Paintings",
    image: "/images/abroad/cma-knickknack-peddler.jpg",
    sourceMuseum: CMA_MUSEUM,
    sourceUrl: "https://clevelandart.org/art/1963.582",
    license: "CC0",
    creditLine: "Cleveland Museum of Art — Severance and Greta Millikin Purchase Fund",
    accessionNumber: "1963.582",
    summary:
      "A tiny silk album leaf packed with detail: a peddler's two enormous baskets bristling with hundreds of toys, fans, brushes, and skull-shaped trinkets, while children attack a snake nearby. Painted in 1212 for the Southern Song court of Emperor Ningzong.",
    significance:
      "Li Song's peddler scenes are the earliest surviving Chinese paintings to inventory the material culture of ordinary urban life. Look at the upper-left basket and you can find an upside-down skull — a memento mori hidden in a children's painting.",
    journey:
      "Passed through Ming and Qing literati collections (with their characteristic seals) before entering the Tokyo dealer market in the early 20th century. Cleveland acquired it in 1963 with the Severance Millikin fund, established expressly for masterpiece-level Asian acquisitions.",
    tags: ["Southern Song", "Painting", "Genre", "Li Song"],
  },
  {
    slug: "cma-cloudy-mountains",
    title: "Cloudy Mountains",
    chineseTitle: "云山图",
    artist: "Mi Youren (米友仁)",
    objectName: "Handscroll",
    date: "1130",
    period: "Southern Song dynasty (1127–1279)",
    medium: "Handscroll; ink and color on silk",
    dimensions: "43.7 × 192.6 cm (image)",
    classification: "Paintings",
    image: "/images/abroad/cma-cloudy-mountains.jpg",
    sourceMuseum: CMA_MUSEUM,
    sourceUrl: "https://clevelandart.org/art/1933.220",
    license: "CC0",
    creditLine: "Cleveland Museum of Art — Gift of Mrs. A. Dean Perry",
    accessionNumber: "1933.220",
    summary:
      "Mi Youren painted this handscroll in 1130 to thank a host who had sheltered him after the Jurchen invasion drove the Song court south. The mountains dissolve into mist; the brushwork is built almost entirely from layered wet dots — the famous 'Mi-dots' pioneered by his father, Mi Fu.",
    significance:
      "One of Cleveland's earliest dated Chinese paintings and one of the few authentic Mi family works anywhere. The 'Mi style' would become the template for every literati landscape that wanted to evoke moisture, distance, and spiritual ambiguity for the next 800 years.",
    journey:
      "Recorded in successive Ming and Qing literati colophons before passing through Japanese collections. Bought by the Cleveland Museum in 1933 with funds from the Perry family — at the time the most expensive Chinese painting Cleveland had ever acquired.",
    tags: ["Southern Song", "Painting", "Mi Family", "Literati"],
  },
  {
    slug: "cma-chenghua-children-cup",
    title: "Wine Cup with Children at Play",
    chineseTitle: "明成化斗彩婴戏纹杯",
    objectName: "Wine cup",
    date: "1465–1487",
    period: "Ming dynasty, Chenghua mark and period (1465–1487)",
    medium:
      "Porcelain with underglaze blue and overglaze enamel (doucai 'joined colors')",
    dimensions: "H. 4.8 cm",
    classification: "Ceramics",
    image: "/images/abroad/cma-chenghua-children-cup.jpg",
    sourceMuseum: CMA_MUSEUM,
    sourceUrl: "https://clevelandart.org/art/1957.61",
    license: "CC0",
    creditLine: "Cleveland Museum of Art — Severance and Greta Millikin Collection",
    accessionNumber: "1957.61",
    summary:
      "Just two inches tall, this Chenghua doucai cup is the rarest of all classic Chinese porcelains. The body is paper-thin and translucent; the children at play are outlined in cobalt under the glaze, then completed in red, green, and yellow enamels above it — a two-firing technique perfected only at Chenghua's kilns.",
    significance:
      "Chenghua doucai cups have sold at auction for the price of skyscrapers. Sotheby's Hong Kong sold a related 'chicken cup' in 2014 for HK$281M. They define the apex of Chinese imperial porcelain technique.",
    journey:
      "Probably exported from the Qing palace through Beijing dealers in the late 19th century, passing through Japanese tea-ware collectors. Cleveland acquired it via the Millikin fund in 1957 — recognised even then as a once-in-a-lifetime opportunity.",
    tags: ["Ming", "Chenghua", "Doucai", "Imperial"],
  },
  {
    slug: "cma-yongle-meiping",
    title: "'Sweet White' Meiping with Cloud Collars",
    chineseTitle: "明永乐甜白釉暗花梅瓶",
    objectName: "Meiping vase",
    date: "1403–1424",
    period: "Ming dynasty, Yongle reign (1403–1424)",
    medium:
      "Porcelain with incised 'hidden decoration' (anhua) under tianbai 'sweet white' glaze",
    dimensions: "H. 32.1 cm; D. 20.3 cm",
    classification: "Ceramics",
    image: "/images/abroad/cma-yongle-meiping.jpg",
    sourceMuseum: CMA_MUSEUM,
    sourceUrl: "https://clevelandart.org/art/1964.167",
    license: "CC0",
    creditLine: "Cleveland Museum of Art — John L. Severance Fund",
    accessionNumber: "1964.167",
    summary:
      "A Yongle imperial meiping in tianbai (甜白, 'sweet white') glaze: a milky white porcelain so pure that the Yongle emperor used it for ritual offerings on the imperial altar. The decoration is incised into the body so faintly you only see it when light catches the surface — the so-called anhua, 'hidden decoration'.",
    significance:
      "Tianbai is one of the most demanding glazes ever fired at Jingdezhen, requiring a refined kaolin body and exact reduction firing. The Yongle emperor — patron of Zheng He's voyages and of the Forbidden City itself — made these vessels the symbol of his dynasty's purity.",
    journey:
      "Likely exported through Beijing in the early 20th century. Acquired by the Cleveland Museum in 1964 via the John L. Severance Fund.",
    tags: ["Ming", "Yongle", "Tianbai", "Imperial"],
  },
  {
    slug: "cma-shang-fangyou",
    title: "Square Wine Container (Fangyou)",
    chineseTitle: "商方卣",
    objectName: "Ritual wine vessel",
    date: "ca. 1250–1046 BCE",
    period: "Late Shang dynasty, Anyang phase (ca. 1250–1046 BCE)",
    medium: "Bronze, piece-mould cast",
    dimensions: "H. 26.7 cm; W. 13.4 cm",
    classification: "Metalwork",
    image: "/images/abroad/cma-shang-fangyou.jpg",
    sourceMuseum: CMA_MUSEUM,
    sourceUrl: "https://clevelandart.org/art/1963.103",
    license: "CC0",
    creditLine: "Cleveland Museum of Art — John L. Severance Fund",
    accessionNumber: "1963.103",
    summary:
      "A rare squared-section ritual wine container from the late Shang capital at Anyang. The body is wrapped in bands of crested birds (kuifeng) silhouetted against a dense ground of spiral leiwen — and the perfectly squared profile is itself a technical brag, far harder to cast than the standard rounded shape.",
    significance:
      "The square fangyou form is among the rarest survivals from Shang ritual bronze production. Most Shang bronzes use the dragon/taotie repertoire; this vessel's bird-only program belongs to a distinct workshop tradition that may be linked to the Shang royal lineage's totemic ancestor cult.",
    journey:
      "Surfaced on the New York market in the mid-20th century. Cleveland acquired it via the Severance Fund in 1963 — at the height of an Anglo-American Shang-bronze collecting wave that built virtually every Western collection's bronze gallery.",
    tags: ["Shang", "Bronze", "Ritual", "Anyang"],
  },
  {
    slug: "cma-quails-sparrows-autumn",
    title: "Quails and Sparrows in an Autumn Scene",
    chineseTitle: "秋景禽雀图",
    artist: "Wang Yuan (王渊)",
    objectName: "Hanging scroll",
    date: "1347",
    period: "Yuan dynasty (1271–1368)",
    medium: "Hanging scroll; ink on paper",
    dimensions: "Painting: 114.3 × 56 cm",
    classification: "Paintings",
    image: "/images/abroad/cma-quails-sparrows-autumn.jpg",
    sourceMuseum: CMA_MUSEUM,
    sourceUrl: "https://clevelandart.org/art/1997.91",
    license: "CC0",
    creditLine: "Cleveland Museum of Art — John L. Severance Fund",
    accessionNumber: "1997.91",
    summary:
      "A flower-and-bird painting executed entirely in ink — no color — by Wang Yuan, who studied as a child under the great Yuan scholar-official Zhao Mengfu. Quails crouch beneath autumn millet while sparrows perch on the dry stalks above; every leaf, feather, and seed is rendered with academic precision.",
    significance:
      "Wang Yuan adapted the meticulous polychrome 'academic' style of the Song court bird-and-flower painters into pure monochrome ink — turning a courtly genre into a literati one. This 1347 painting is the earliest dated example of his mature style anywhere.",
    journey:
      "Recorded in Qing imperial collection seals before leaving the Forbidden City in the 20th century. Acquired by Cleveland in 1997 via the Severance Fund — among the most significant Chinese painting purchases of the 1990s.",
    tags: ["Yuan", "Painting", "Bird-and-Flower", "Wang Yuan"],
  },
  {
    slug: "cma-five-hundred-arhats",
    title: "The Five Hundred Arhats",
    chineseTitle: "五百罗汉图",
    artist: "Wu Bin (吴彬)",
    objectName: "Handscroll",
    date: "1591–1626",
    period: "Late Ming dynasty (1368–1644)",
    medium: "Handscroll; ink and color on paper",
    dimensions: "Image: 39.5 × 2646.5 cm (over 26 metres long)",
    classification: "Paintings",
    image: "/images/abroad/cma-five-hundred-arhats.jpg",
    sourceMuseum: CMA_MUSEUM,
    sourceUrl: "https://clevelandart.org/art/1971.16",
    license: "CC0",
    creditLine: "Cleveland Museum of Art — John L. Severance Fund",
    accessionNumber: "1971.16",
    summary:
      "A handscroll over 26 metres long depicting 447 luohans (arhats), 72 attendants, and the bodhisattva of compassion at the very end. The luohans are climbing trees, riding tigers, walking on water, conjuring dragons — every supernatural ability the texts ascribe to them, all on one continuous strip of paper.",
    significance:
      "Wu Bin was a lay Buddhist who made painting itself a form of spiritual exercise. His luohan scrolls are simultaneously religious icons and visionary fantasias, and this Cleveland scroll is the longest, most ambitious of them all.",
    journey:
      "Held in private Chinese collections through Qing, exported via Shanghai in the early 20th century. Cleveland purchased it in 1971 via the Severance Fund.",
    tags: ["Ming", "Painting", "Buddhist", "Wu Bin"],
  },
  {
    slug: "bm-admonitions-scroll",
    title: "Admonitions of the Court Instructress",
    chineseTitle: "女史箴图",
    artist: "Attributed to Gu Kaizhi (顾恺之)",
    objectName: "Handscroll",
    date: "Tang-period copy (6th–8th c) of a 4th c original",
    period: "Original: Eastern Jin (265–420); copy: early Tang (618–907)",
    medium: "Handscroll; ink and color on silk",
    dimensions: "25 × 348.5 cm",
    classification: "Paintings",
    image: "/images/abroad/bm-admonitions-scroll.jpg",
    sourceMuseum: BM_MUSEUM,
    sourceUrl: "https://www.britishmuseum.org/collection/object/A_1903-0408-0-1",
    license: "Public domain",
    creditLine: "The British Museum — purchased 1903",
    accessionNumber: "1903,0408,0.1",
    summary:
      "The earliest surviving Chinese narrative figure painting on silk — illustrations to a 3rd-century Confucian text instructing palace women on proper conduct. The Eastern Jin master Gu Kaizhi is the painter of record; the surviving handscroll is a faithful Tang-dynasty copy.",
    significance:
      "Often called the 'Mona Lisa of Chinese painting'. The scroll bears collector seals from every imperial Chinese collection from the Tang to the Qianlong emperor and is the foundational document of the entire Chinese figure-painting tradition.",
    journey:
      "Last documented in the Qianlong imperial collection. Looted from the Summer Palace (Yuanmingyuan) by a British officer during the second Opium War sack of 1860; sold to the British Museum in 1903 for £25 — the most consequential single Chinese-art transaction in BM history.",
    tags: ["Eastern Jin", "Tang", "Painting", "Imperial", "Looted"],
  },
  {
    slug: "bm-david-vases",
    title: "The David Vases",
    chineseTitle: "至正型青花云龙象耳瓶",
    objectName: "Pair of temple vases",
    date: "dated 1351",
    period: "Yuan dynasty, Zhizheng era (1341–1368)",
    medium:
      "Porcelain painted in underglaze cobalt blue (Jingdezhen ware)",
    dimensions: "H. 63.6 cm (each)",
    classification: "Ceramics",
    image: "/images/abroad/bm-david-vases.jpg",
    sourceMuseum: BM_MUSEUM,
    sourceUrl: "https://www.britishmuseum.org/collection/object/A_PDF-B-613",
    license: "Public domain",
    creditLine:
      "The British Museum — Sir Percival David Collection (PDF.B.613–614)",
    accessionNumber: "PDF.B.613-614",
    summary:
      "A pair of cobalt-blue temple vases dated by inscription to 1351 — the rosetta stone of blue-and-white porcelain. Until Sir Percival David identified these in 1929, scholars wrongly assumed blue-and-white only began in the Ming dynasty.",
    significance:
      "The David Vases single-handedly redrew the chronology of Chinese porcelain. Their dedicatory inscription to a Daoist temple in Yushan, complete with the donor's name and the precise date, proved that Yuan Jingdezhen was already producing fully developed cobalt-painted porcelain — fifty years earlier than anyone had thought.",
    journey:
      "Removed from the Yushan temple in the Republican era. Acquired in two halves by Sir Percival David in 1927–35 — he matched up the pair himself. His collection went on long-term loan to the British Museum in 2009.",
    tags: ["Yuan", "Blue-and-white", "Jingdezhen", "Dated"],
  },
  {
    slug: "bm-diamond-sutra",
    title: "Diamond Sutra (868 CE)",
    chineseTitle: "金刚经",
    objectName: "Printed scroll",
    date: "dated 11 May 868",
    period: "Tang dynasty (618–907)",
    medium: "Woodblock-printed ink on paper, in seven sheets joined to a scroll",
    dimensions: "H. 27.6 cm; L. 499.5 cm",
    classification: "Books / Prints",
    image: "/images/abroad/bm-diamond-sutra.jpg",
    sourceMuseum: BM_MUSEUM,
    sourceUrl: "https://www.britishmuseum.org/collection/object/A_1919-0101-0-249",
    license: "Public domain",
    creditLine:
      "The British Library / British Museum — Stein Collection (Or.8210/P.2)",
    accessionNumber: "Or.8210/P.2",
    summary:
      "The world's earliest complete dated printed book. The colophon names the donor, Wang Jie, and dates the printing to the 13th day of the 4th month, 9th year of the Xiantong reign — 11 May 868 — almost 600 years before Gutenberg.",
    significance:
      "Foundational object in the history of printing as a human technology. The frontispiece woodcut of the Buddha preaching to Subhuti is also one of the earliest surviving printed pictures in any tradition.",
    journey:
      "Sealed inside Cave 17 at Dunhuang for nearly a thousand years. Sir Aurel Stein purchased it from the cave's discoverer, the Daoist priest Wang Yuanlu, in 1907 for the equivalent of about £130 — a transaction that remains historically and ethically contested.",
    tags: ["Tang", "Printing", "Buddhist", "Dunhuang"],
  },
  {
    slug: "bm-yixian-luohan",
    title: "Yixian Luohan",
    chineseTitle: "易县三彩罗汉",
    objectName: "Life-size sculpture",
    date: "907–1125",
    period: "Liao dynasty (907–1125)",
    medium: "Stoneware with sancai three-color glaze",
    dimensions: "H. 103 cm",
    classification: "Sculpture",
    image: "/images/abroad/bm-yixian-luohan.jpg",
    sourceMuseum: BM_MUSEUM,
    sourceUrl: "https://www.britishmuseum.org/collection/object/A_1913-1221-1",
    license: "CC BY-SA",
    creditLine: "The British Museum — purchased 1913",
    accessionNumber: "1913,1221.1",
    summary:
      "A life-size glazed-ceramic luohan from a set of about sixteen discovered in 1912 in caves near Yixian, Hebei. He sits cross-legged in meditation, his hands holding a sutra, his face modelled with the unsparing realism of an actual portrait — likely of a senior Liao monk.",
    significance:
      "The Yixian luohans are technical and artistic miracles: life-size figures fired whole at sancai temperatures, modelled with portrait-level individuation. They redefined what 11th-century Chinese ceramic sculpture could do.",
    journey:
      "Of the Yixian set, ten survive in Western museums (BM, Met, Penn, Boston, Paris, Berlin, Toronto, Kansas City, Sezon, and one private). They were stripped from their cave temple in 1912 and exported through Beijing dealer Friedrich Perzyński in 1913.",
    tags: ["Liao", "Sancai", "Buddhist", "Sculpture"],
  },
  {
    slug: "bm-sui-amitabha-buddha",
    title: "Marble Amitabha Buddha (585 CE)",
    chineseTitle: "隋开皇五年汉白玉阿弥陀佛立像",
    objectName: "Colossal statue",
    date: "dated 585 CE (5th year of the Kaihuang reign)",
    period: "Sui dynasty (581–618)",
    medium: "White marble (so-called 'Han white jade')",
    dimensions: "H. 5.78 m (over 19 feet)",
    classification: "Sculpture",
    image: "/images/abroad/bm-sui-amitabha-buddha.jpg",
    sourceMuseum: BM_MUSEUM,
    sourceUrl: "https://www.britishmuseum.org/collection/object/A_1938-0715-1",
    license: "Public domain",
    creditLine: "The British Museum — purchased 1938",
    accessionNumber: "1938,0715.1",
    summary:
      "A colossal marble Amitabha standing 5.78 m tall — among the largest free-standing early Buddhist sculptures anywhere. The dedicatory inscription on the pedestal precisely dates the consecration to 585 CE, the 5th year of the first Sui emperor's Kaihuang reign.",
    significance:
      "The Sui dynasty re-unified China after three centuries of division and adopted Buddhism as a state religion. This Amitabha, made for the Chongguangsi monastery in Hebei, embodies that Sui imperial Buddhism at its most ambitious scale.",
    journey:
      "Removed from the ruined Chongguangsi monastery in Hancuicun, Hebei in the 1930s, reassembled and exported through Beijing. Purchased by the British Museum in 1938; it has stood inside the museum's Great Court ever since.",
    tags: ["Sui", "Buddhist", "Sculpture", "Dated"],
  },
  {
    slug: "bm-liu-tingxun-tomb-figures",
    title: "Tomb Figures of General Liu Tingxun",
    chineseTitle: "唐刘廷洵墓三彩俑组",
    objectName: "Set of 13 tomb figures",
    date: "ca. 728 CE",
    period: "Tang dynasty (618–907)",
    medium: "Earthenware with sancai three-color glaze",
    dimensions: "Tallest: H. 110.5 cm",
    classification: "Tomb Pottery",
    image: "/images/abroad/bm-liu-tingxun-tomb-figures.jpg",
    sourceMuseum: BM_MUSEUM,
    sourceUrl: "https://www.britishmuseum.org/collection/object/A_1936-1012-220",
    license: "CC BY-SA",
    creditLine: "The British Museum — gift of P. T. Brooke Sewell, 1936",
    accessionNumber: "1936,1012.220-232",
    summary:
      "A complete tomb assemblage of 13 sancai-glazed figures buried with the Tang general Liu Tingxun in 728 CE: two horses, two camels, two civil officials, two military officials, two earth spirits, two guardian kings, and a single tomb attendant. Together they form the choreography of an idealised afterlife court.",
    significance:
      "Most Tang sancai tomb groups in Western museums are reconstructions of mismatched pieces. The Liu Tingxun set is one of the few intact archaeological assemblages — every figure unearthed from the same chamber, providing a rare grammar of how Tang aristocrats wanted to be remembered.",
    journey:
      "Excavated near Luoyang during the 1920s rail-laying boom, when many Tang tombs were exposed and stripped. The set was purchased by the British collector P. T. Brooke Sewell, who donated it to the British Museum in 1936.",
    tags: ["Tang", "Sancai", "Tomb", "Set"],
  },
];

export function getAbroadArtifactBySlug(
  slug: string,
): AbroadArtifact | undefined {
  return abroadArtifacts.find((a) => a.slug === slug);
}
