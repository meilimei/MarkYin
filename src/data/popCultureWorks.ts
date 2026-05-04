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
    topicSlugs: [
      "sanxingdui-mysteries",
      "bronze-dings-through-the-ages",
      "mythic-animals-and-cosmic-order",
      "warriors-weapons-and-empire",
    ],
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
      "song-city-life-and-painting",
      "mythic-animals-and-cosmic-order",
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
    topicSlugs: [
      "jade-and-immortality",
      "blue-and-white-porcelain",
      "imperial-power-and-court-life",
      "music-ritual-and-performance",
      "song-city-life-and-painting",
    ],
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
    topicSlugs: [
      "sanxingdui-mysteries",
      "bronze-dings-through-the-ages",
      "mythic-animals-and-cosmic-order",
      "warriors-weapons-and-empire",
    ],
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
      {
        artifactSlug: "oracle-bones-yinxu",
        connection:
          "The film's oracle-bone imagery and divination scenes draw from the real Yinxu inscriptions that record Shang royal questions about war, harvest, weather, and ancestors.",
      },
      {
        artifactSlug: "mawangdui-i-ching-silk-manuscript",
        connection:
          "Although the film is set in the Shang-Zhou transition, modern viewers often read its world of omens, mandate, and cosmic change through later classics such as the I Ching.",
      },
      {
        artifactSlug: "fuhao-owl-zun",
        connection:
          "Lady Fuhao's verified military and ritual status provides a real archaeological counterpart to the film's powerful Shang court figures.",
      },
    ],
    topicSlugs: [
      "bronze-dings-through-the-ages",
      "imperial-power-and-court-life",
      "warriors-weapons-and-empire",
      "oracle-bones-and-shang-writing",
      "i-ching-oracle-bones-chinese-divination",
    ],
    sources: [
      {
        label: "Wikipedia — Creation of the Gods I",
        url: "https://en.wikipedia.org/wiki/Creation_of_the_Gods_I:_Kingdom_of_Storms",
        type: "wiki",
        license: "CC-BY-SA 3.0",
      },
    ],
  },
  {
    slug: "mulan-disney",
    title: "Mulan",
    titleZh: "花木兰",
    medium: "film",
    year: 1998,
    studio: "Walt Disney Feature Animation",
    region: "United States / China",
    summary:
      "Disney's Mulan remains one of the most globally recognized gateways into Chinese legend, turning the Ballad of Mulan into a cross-cultural story of family, disguise, warfare, and imperial service.",
    culturalContext:
      "Mulan's world is visually compressed from many periods of Chinese history rather than reconstructed from one dynasty. The film borrows imperial court ceremony, massed military formations, ancestral tablets, cavalry imagery, and sword symbolism to create a legible China for global audiences.\n\nThat compression makes it especially useful as a museum gateway. The real object record separates what the film blends together: Qin tomb armies for mass military spectacle, Warring States swords for elite weapon culture, Tang luxury goods for cosmopolitan court style, and Song painting for the idea of Chinese cities as dense visual worlds.",
    heroImage:
      "https://images.unsplash.com/photo-1528181304800-259b08848526?w=1200&q=80",
    artifactRefs: [
      {
        artifactSlug: "terracotta-warriors",
        connection:
          "The film's most memorable military images — ranked soldiers, imperial command, mass mobilization — echo the visual power of the Terracotta Army, the ultimate image of Chinese soldiers turned into state spectacle.",
      },
      {
        artifactSlug: "sword-of-goujian",
        connection:
          "Mulan's sword is a moral object as much as a weapon. The Sword of Goujian shows how Chinese blades could function as royal identity, technical marvel, and legendary symbol at once.",
      },
      {
        artifactSlug: "beast-head-agate-cup",
        connection:
          "The film's courtly banquet and gift-giving vocabulary fits the long history of Chinese luxury objects shaped by Silk Road exchange, represented here by the Tang beast-head agate cup.",
      },
    ],
    topicSlugs: [
      "warriors-weapons-and-empire",
      "tang-silk-road-treasures",
      "imperial-power-and-court-life",
    ],
    sources: [
      {
        label: "Wikipedia — Mulan (1998 film)",
        url: "https://en.wikipedia.org/wiki/Mulan_(1998_film)",
        type: "wiki",
        license: "CC-BY-SA 3.0",
      },
      {
        label: "Wikipedia — Hua Mulan",
        url: "https://en.wikipedia.org/wiki/Hua_Mulan",
        type: "wiki",
        license: "CC-BY-SA 3.0",
      },
    ],
  },
  {
    slug: "the-untamed",
    title: "The Untamed",
    titleZh: "陈情令",
    medium: "tv",
    year: 2019,
    studio: "Tencent Penguin Pictures / New Style Media",
    region: "China",
    summary:
      "The Untamed turned xianxia cultivation drama into a global fandom phenomenon, making swords, flutes, ritual objects, sect emblems, and mountain compounds instantly recognizable to viewers far beyond China.",
    culturalContext:
      "Like most xianxia, The Untamed does not recreate a single historical period. It uses a composite visual language built from real Chinese material culture: ritual music, jade tokens, sword prestige, clan halls, funeral rites, painted screens, and mountain hermitage imagery.\n\nThe result is not archaeology, but it is not arbitrary fantasy either. The series works because its props and settings carry recognizable historical weight. Bronze bells help explain why music can be ritual power; jade explains why tokens and pendants matter; ancient swords explain why a blade can stand for lineage and moral identity.",
    heroImage:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80",
    artifactRefs: [
      {
        artifactSlug: "sword-of-goujian",
        connection:
          "The show's named swords inherit the Chinese idea of the blade as biography. The Sword of Goujian is the clearest surviving object that joins technical perfection, royal identity, and legend.",
      },
      {
        artifactSlug: "bianzhong-marquis-yi",
        connection:
          "The Untamed's use of music as spiritual technology fits a much older Chinese belief that tuned bronze sound could order bodies, courts, and the cosmos.",
      },
      {
        artifactSlug: "jade-burial-suit",
        connection:
          "Jade tokens, pendants, and protective objects in cultivation fiction descend from the same belief system that made Han elites wrap their dead in jade.",
      },
      {
        artifactSlug: "along-the-river-during-qingming-festival",
        connection:
          "The show's market towns and bridges use a familiar Chinese pictorial grammar of crowded streets, shops, and river crossings that reaches back to Song urban scrolls.",
      },
    ],
    topicSlugs: [
      "warriors-weapons-and-empire",
      "music-ritual-and-performance",
      "jade-and-immortality",
      "song-city-life-and-painting",
    ],
    sources: [
      {
        label: "Wikipedia — The Untamed",
        url: "https://en.wikipedia.org/wiki/The_Untamed_(TV_series)",
        type: "wiki",
        license: "CC-BY-SA 3.0",
      },
      {
        label: "Wikipedia — Xianxia",
        url: "https://en.wikipedia.org/wiki/Xianxia",
        type: "wiki",
        license: "CC-BY-SA 3.0",
      },
    ],
  },
  {
    slug: "total-war-three-kingdoms",
    title: "Total War: Three Kingdoms",
    titleZh: "全面战争：三国",
    medium: "game",
    year: 2019,
    studio: "Creative Assembly / Sega",
    region: "United Kingdom / China",
    summary:
      "Total War: Three Kingdoms introduced millions of strategy players to Chinese historical warfare, court intrigue, faction legitimacy, and the Romance of the Three Kingdoms heroic tradition.",
    culturalContext:
      "Although set after the Han dynasty, the game depends on a deeper visual memory of ancient Chinese statecraft: bronze legitimacy, weapon prestige, massed formations, court ritual, and the long afterlife of Warring States and Qin military imagery.\n\nThe archaeological record helps separate the game's historical layers. The Terracotta Army shows the disciplined visual grammar of imperial soldiers; the Sword of Goujian shows elite weapon culture before the Han; inscribed bronzes show how political authority was recorded and performed long before the Three Kingdoms period itself.",
    heroImage:
      "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=1200&q=80",
    artifactRefs: [
      {
        artifactSlug: "terracotta-warriors",
        connection:
          "The game's ranked armies and battlefield formations draw on the same visual shock as the Qin Terracotta Army: state power multiplied into thousands of bodies.",
      },
      {
        artifactSlug: "sword-of-goujian",
        connection:
          "Hero weapons in Three Kingdoms storytelling inherit the prestige of earlier named blades like the Sword of Goujian, where metallurgy and legend fuse.",
      },
      {
        artifactSlug: "da-ke-ding",
        connection:
          "Faction legitimacy in the game depends on titles, grants, and ritual authority — exactly the political world documented in Western Zhou bronze inscriptions like the Da Ke Ding.",
      },
      {
        artifactSlug: "bianzhong-marquis-yi",
        connection:
          "Court ceremony, music, and ritual display form the background of elite power; the Marquis Yi bells show the depth of that ceremonial technology.",
      },
    ],
    topicSlugs: [
      "warriors-weapons-and-empire",
      "imperial-power-and-court-life",
      "music-ritual-and-performance",
    ],
    sources: [
      {
        label: "Wikipedia — Total War: Three Kingdoms",
        url: "https://en.wikipedia.org/wiki/Total_War:_Three_Kingdoms",
        type: "wiki",
        license: "CC-BY-SA 3.0",
      },
      {
        label: "Wikipedia — Romance of the Three Kingdoms",
        url: "https://en.wikipedia.org/wiki/Romance_of_the_Three_Kingdoms",
        type: "wiki",
        license: "CC-BY-SA 3.0",
      },
    ],
  },
  {
    slug: "kung-fu-panda",
    title: "Kung Fu Panda",
    titleZh: "功夫熊猫",
    medium: "film",
    year: 2008,
    studio: "DreamWorks Animation",
    region: "United States / China",
    summary:
      "Kung Fu Panda transformed Chinese martial-arts imagery, animal symbolism, temple architecture, food culture, and scroll mythology into one of the world's most recognizable animated franchises.",
    culturalContext:
      "The franchise is playful, but its visual language is built from real Chinese motifs: animal archetypes, sacred scrolls, mountain monasteries, bronze ritual weight, dragon symbolism, and the idea that objects can transmit lineage.\n\nThat makes it a surprisingly effective bridge into museum material. The Dragon Warrior title is not just a joke about animals; it sits inside a long tradition where dragons, beasts, and hybrid forms encode authority. Bronze masks, sacred trees, ritual cauldrons, and animal-shaped luxury objects all explain why the film's animals feel mythic rather than merely cute.",
    heroImage:
      "https://images.unsplash.com/photo-1550418290-a8d86ad674a6?w=1200&q=80",
    artifactRefs: [
      {
        artifactSlug: "sacred-bronze-tree",
        connection:
          "The franchise's sacred mountain and cosmic lineage imagery resonates with the Sanxingdui Bronze Tree, one of China's most powerful surviving images of a world axis.",
      },
      {
        artifactSlug: "gold-mask-sanxingdui",
        connection:
          "The stylized faces and supernatural animal energy of the films fit the same deep tradition of mask, spirit, and ritual presence visible at Sanxingdui.",
      },
      {
        artifactSlug: "simuwu-ding",
        connection:
          "The heavy bronze vessels and temple interiors in the franchise draw from the visual vocabulary of Shang-Zhou ritual bronzes like the Simuwu Ding.",
      },
      {
        artifactSlug: "beast-head-agate-cup",
        connection:
          "Animal-shaped luxury objects such as the Tang beast-head agate cup show how Chinese art repeatedly transformed beasts into vessels of status and story.",
      },
    ],
    topicSlugs: [
      "mythic-animals-and-cosmic-order",
      "sanxingdui-mysteries",
      "bronze-dings-through-the-ages",
      "tang-silk-road-treasures",
    ],
    sources: [
      {
        label: "Wikipedia — Kung Fu Panda",
        url: "https://en.wikipedia.org/wiki/Kung_Fu_Panda",
        type: "wiki",
        license: "CC-BY-SA 3.0",
      },
    ],
  },
  {
    slug: "story-of-yanxi-palace",
    title: "Story of Yanxi Palace",
    titleZh: "延禧攻略",
    medium: "tv",
    year: 2018,
    studio: "Huanyu Film / iQiyi",
    region: "China",
    summary:
      "With over 15 billion views on iQiyi alone, Story of Yanxi Palace became the most-Googled TV show worldwide in 2018 — a Qing Dynasty drama praised for its obsessively accurate reproduction of Forbidden City material culture.",
    culturalContext:
      "Unlike most costume dramas, Story of Yanxi Palace invested extraordinary effort in material accuracy. The production team consulted Palace Museum curators, recreated Qing embroidery techniques (including the lost art of ronghua velvet flowers), sourced historically accurate Suzhou silk for costumes, and modeled props on real imperial collection objects. Viewers worldwide became fascinated by the Qianlong-era material world: jade hairpins, enamelware, dragon robes, Ru ware tea cups, inkstones, and the architectural details of the Forbidden City itself.\n\nThe drama single-handedly drove a measurable increase in Palace Museum tourism and sparked global interest in Qing Dynasty decorative arts — searches for 'Forbidden City artifacts' spiked worldwide during its broadcast.",
    heroImage:
      "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1200&q=80",
    artifactRefs: [
      {
        artifactSlug: "nine-dragon-wall-forbidden-city",
        connection:
          "The drama repeatedly frames characters against the Forbidden City's architectural details — the Nine-Dragon Wall appears in establishing shots and functions as a symbol of imperial cosmological power throughout the series.",
      },
      {
        artifactSlug: "ru-ware-lotus-bowl",
        connection:
          "Qing emperors obsessively collected Song Dynasty Ru ware. In the drama, references to imperial tea ware and celadon bowls reflect the Qianlong court's documented fixation on Song aesthetics.",
      },
      {
        artifactSlug: "changxin-palace-lamp",
        connection:
          "The drama's attention to historical lighting — oil lamps, candle stands, lanterns — connects to a long Chinese tradition of lamp design as both functional art and court status symbol, exemplified by the Han Dynasty Changxin Palace Lamp.",
      },
      {
        artifactSlug: "along-the-river-during-qingming-festival",
        connection:
          "Court painting and calligraphy appear throughout the series as markers of cultivation and political alliance — the tradition of monumental scroll painting as imperial possession reaches back to the Song court.",
      },
    ],
    topicSlugs: [
      "imperial-power-and-court-life",
      "song-city-life-and-painting",
    ],
    sources: [
      {
        label: "Wikipedia — Story of Yanxi Palace",
        url: "https://en.wikipedia.org/wiki/Story_of_Yanxi_Palace",
        type: "wiki",
        license: "CC-BY-SA 3.0",
      },
      {
        label: "SCMP — How authentic are Yanxi Palace accessories",
        url: "https://www.scmp.com/magazines/style/news-trends/article/2166904/story-yanxi-palace-how-authentic-are-accessories-worn",
        type: "academic",
      },
    ],
  },
  {
    slug: "nirvana-in-fire",
    title: "Nirvana in Fire",
    titleZh: "琅琊榜",
    medium: "tv",
    year: 2015,
    studio: "Daylight Entertainment / Shandong TV",
    region: "China",
    summary:
      "Rated 9.4/10 on Douban (China's IMDb), Nirvana in Fire is widely considered the greatest Chinese political drama ever made — a story of court intrigue, loyalty, and justice set during the Northern and Southern Dynasties.",
    culturalContext:
      "Set in a fictionalized version of the Liang Dynasty (502–557 AD), the series drew its visual design from Southern Dynasties material culture: flowing scholar robes, bamboo-strip documents, celadon wares, bronze weaponry, incense rituals, and mountain hermitage architecture. The production design avoids the over-decorated Qing aesthetic common in Chinese TV, favoring an austere scholarly style closer to Six Dynasties painting.\n\nFor global viewers who discovered the show on streaming platforms, it served as an introduction to a less familiar period of Chinese history — a time of fragmented kingdoms, philosophical debate, military rivalries, and the beginnings of Chinese landscape aesthetics that would flower in the Tang and Song.",
    heroImage:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80",
    artifactRefs: [
      {
        artifactSlug: "sword-of-goujian",
        connection:
          "The show's world runs on sword prestige, military honor, and named blades as extensions of a warrior's identity — a tradition stretching back to Spring and Autumn swords like the Sword of Goujian.",
      },
      {
        artifactSlug: "bianzhong-marquis-yi",
        connection:
          "Court ceremony, music, and ritual hierarchy are central to the drama's political architecture — the same world of bronze-bell court music that the Marquis Yi set preserves.",
      },
      {
        artifactSlug: "da-ke-ding",
        connection:
          "Political legitimacy in the show depends on titles, ancestral rites, and imperial grants — the inscribed bronze tradition of recording such authority reaches back to Western Zhou vessels like the Da Ke Ding.",
      },
      {
        artifactSlug: "changxin-palace-lamp",
        connection:
          "The show's meticulous interior design — screen walls, inkstones, oil lamps, incense burners — reflects the material culture of elite Chinese households that the Changxin Lamp exemplifies at its most refined.",
      },
    ],
    topicSlugs: [
      "warriors-weapons-and-empire",
      "imperial-power-and-court-life",
      "music-ritual-and-performance",
    ],
    sources: [
      {
        label: "Wikipedia — Nirvana in Fire",
        url: "https://en.wikipedia.org/wiki/Nirvana_in_Fire",
        type: "wiki",
        license: "CC-BY-SA 3.0",
      },
    ],
  },
  {
    slug: "chinese-zodiac-cz12",
    title: "Chinese Zodiac (CZ12)",
    titleZh: "十二生肖",
    medium: "film",
    year: 2012,
    studio: "JCE Movies / Emperor Motion Pictures",
    region: "China / Hong Kong",
    summary:
      "Jackie Chan's passion project about the hunt for the twelve Yuanmingyuan zodiac bronze heads — a high-budget action-adventure film that brought the story of China's most famous looted treasures to global audiences.",
    culturalContext:
      "Jackie Chan has called CZ12 the most personally meaningful film of his career. The story follows 'Asian Hawk' (a callback to Chan's 1980s Armour of God franchise) as he races across the globe to recover the twelve bronze zodiac animal heads stolen from the Old Summer Palace in 1860. The film dramatizes the real-world repatriation saga — the auction house controversies, patriotic billionaire donors, and ethical debates about cultural heritage — while wrapping it in Chan's signature physical comedy and stunt choreography.\n\nThe film's release coincided with a period of heightened Chinese public attention to repatriation issues (the 2009 Christie's auction of the rat and rabbit heads). It grossed over $140 million and introduced the Yuanmingyuan story to audiences worldwide who had never heard of the Old Summer Palace or the Second Opium War.",
    heroImage:
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&q=80",
    artifactRefs: [
      {
        artifactSlug: "yuanmingyuan-zodiac-bronze-heads",
        connection:
          "The entire film's plot revolves around recovering the twelve zodiac bronze heads looted from the Yuanmingyuan — dramatizing the real-world repatriation saga.",
      },
      {
        artifactSlug: "nine-dragon-wall-forbidden-city",
        connection:
          "The film invokes imperial Chinese architectural and artistic motifs throughout, framing the zodiac heads within the broader context of Qing Dynasty material culture.",
      },
      {
        artifactSlug: "bronze-galloping-horse",
        connection:
          "The horse zodiac head connects to China's broader bronze horse tradition — the film references multiple Chinese bronze masterworks as endangered cultural heritage.",
      },
    ],
    topicSlugs: [
      "treasures-lost-and-returned",
      "imperial-power-and-court-life",
    ],
    sources: [
      {
        label: "Wikipedia — CZ12 (Chinese Zodiac)",
        url: "https://en.wikipedia.org/wiki/CZ12",
        type: "wiki",
        license: "CC-BY-SA 3.0",
      },
    ],
  },
  {
    slug: "wuchang-fallen-feathers",
    title: "Wuchang: Fallen Feathers",
    titleZh: "明末：渊虚之羽",
    medium: "game",
    year: 2025,
    studio: "Leenzee Games",
    region: "China",
    summary:
      "A Chinese soulslike action RPG set in the chaotic final years of the Ming Dynasty, trending again in 2026 through PlayStation Plus and renewed global interest in Chinese-made historical fantasy games.",
    culturalContext:
      "Wuchang: Fallen Feathers builds its dark fantasy world from Sichuan geography, Ming-period collapse, regional folk religion, temple ruins, and the archaeological aura of ancient Shu. Its world of corrupted bodies, mountain shrines, bronze-gold ritual imagery, and monumental Buddhist landscapes makes it a natural bridge between game audiences and real Sichuan heritage sites: Sanxingdui, Jinsha, and Leshan. Unlike generic fantasy China, Wuchang is regionally specific — it uses Shu as a cultural geography rather than a vague aesthetic label.\n\nThe game's 2026 resurgence in PlayStation Plus discussions creates a timely SEO path from 'Wuchang game' searches into museum content: Sanxingdui bronze figures, Jinsha gold foil, Leshan Giant Buddha tourism, and Sichuan's deeper archaeological timeline.",
    heroImage:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80",
    artifactRefs: [
      {
        artifactSlug: "bronze-standing-figure-sanxingdui",
        connection:
          "Wuchang's supernatural Shu atmosphere echoes the ritual stillness and alien monumentality of Sanxingdui bronze figures.",
      },
      {
        artifactSlug: "gold-mask-sanxingdui",
        connection:
          "Gold masks and face-covering ritual imagery help explain the game's fascination with transformed identity, corruption, and sacred power.",
      },
      {
        artifactSlug: "jinsha-sun-bird-gold-foil",
        connection:
          "The Jinsha Sun Bird connects the game's Sichuan setting to the ancient Shu solar-symbol tradition that followed Sanxingdui.",
      },
      {
        artifactSlug: "leshan-giant-buddha",
        connection:
          "The game's Sichuan landscapes and Buddhist ruin atmosphere resonate with the real monumental terrain of Leshan and Mount Emei.",
      },
    ],
    topicSlugs: [
      "ancient-shu-sichuan-heritage",
      "sanxingdui-mysteries",
      "warriors-weapons-and-empire",
      "feng-shui-compass-and-cosmic-orientation",
    ],
    sources: [
      {
        label: "Wikipedia — Wuchang: Fallen Feathers",
        url: "https://en.wikipedia.org/wiki/Wuchang:_Fallen_Feathers",
        type: "wiki",
        license: "CC-BY-SA 3.0",
      },
      {
        label: "PlayStation Blog — May 2026 monthly games",
        url: "https://blog.playstation.com/2026/04/29/playstation-plus-monthly-games-for-may-ea-sports-fc-26-wuchang-fallen-feathers-nine-sols/",
        type: "academic",
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
