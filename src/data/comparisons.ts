export interface ComparisonAxis {
  label: string;
  left: string;
  right: string;
}

export interface ComparisonFaq {
  q: string;
  a: string;
}

export interface ComparisonGuide {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  overview: string;
  leftArtifactSlug: string;
  rightArtifactSlug: string;
  searchTerms: string[];
  axes: ComparisonAxis[];
  takeaways: string[];
  faqs: ComparisonFaq[];
  relatedTopicSlugs: string[];
  supportingArtifactSlugs?: string[];
}

export const comparisonGuides: ComparisonGuide[] = [
  {
    slug: "sanxingdui-vs-shang-bronzes",
    title: "Sanxingdui vs Shang Bronzes",
    subtitle: "Two Bronze Age powers, two different ritual languages",
    summary:
      "Sanxingdui gives us a mysterious regional bronze culture of masks, trees, and oversized eyes. Shang bronzes give us inscribed ritual vessels tied to a documented royal state. Together they prove that early Chinese civilization had more than one center.",
    overview:
      "If you know only one Chinese bronze tradition, it is probably Shang. But Sanxingdui shows that the Bronze Age of China was never a single story. The Shang world at Anyang gave us huge ritual vessels, ancestor worship, and inscriptions that record royal authority. Sanxingdui, by contrast, produced gold masks, towering figures, and cosmic trees with a visual language that still resists simple explanation.\n\nThat contrast is the point. One culture is heavily documented in text and inscription. The other is vivid, spectacular, and partly mute. Put them side by side and you get a better map of Bronze Age China: not one civilization radiating from one center, but several powerful regional traditions using bronze to speak to the dead, the divine, and the state.",
    leftArtifactSlug: "bronze-standing-figure-sanxingdui",
    rightArtifactSlug: "simuwu-ding",
    searchTerms: [
      "Sanxingdui vs Shang bronzes",
      "difference between Sanxingdui and Shang bronzes",
      "ancient Chinese bronze comparison",
    ],
    axes: [
      {
        label: "Center of power",
        left: "The Chengdu Plain and the ancient Shu world",
        right: "The Shang royal heartland at Anyang",
      },
      {
        label: "Visual language",
        left: "Gold foil, bulging eyes, long faces, trees, and masks",
        right: "Massive ritual vessels, geometric weight, and inscribed authority",
      },
      {
        label: "What bronze did",
        left: "Created sacrificial, ceremonial, and possibly divine images we still cannot fully explain",
        right: "Held food and wine for ancestor worship and court ritual",
      },
      {
        label: "Text record",
        left: "No surviving writing we can read",
        right: "Oracle bones and bronze inscriptions that name kings, rites, and events",
      },
    ],
    takeaways: [
      "Sanxingdui is not a fringe copy of Shang. It is a separate and extraordinary bronze tradition.",
      "Shang bronzes show how ritual objects could become state archives.",
      "The pair is the fastest way to understand why Chinese archaeology is about multiple origins, not one origin story.",
    ],
    faqs: [
      {
        q: "Which is older, Sanxingdui or Shang bronzes?",
        a: "The major Sanxingdui pits and the late Shang bronze world are close in date. What matters more than strict age is that they belong to different cultural systems.",
      },
      {
        q: "Why does Sanxingdui look so strange?",
        a: "Because it is not a Shang copy. The masks, trees, and figures come from a regional visual language that developed on its own.",
      },
      {
        q: "What should I notice first on the Simuwu Ding?",
        a: "Its sheer mass, its rectangular form, and its ritual authority. It is bronze as state power.",
      },
    ],
    relatedTopicSlugs: [
      "sanxingdui-mysteries",
      "bronze-dings-through-the-ages",
      "mythic-animals-and-cosmic-order",
    ],
    supportingArtifactSlugs: [
      "gold-mask-sanxingdui",
      "sacred-bronze-tree",
      "da-ke-ding",
      "bianzhong-marquis-yi",
    ],
  },
  {
    slug: "jade-through-the-dynasties",
    title: "Jade Through the Dynasties",
    subtitle: "From Han immortality to Qing imperial mastery",
    summary:
      "Han jade suits tried to preserve the body after death. Qing jade objects turned a single stone into a poem, a basin, and a statement of imperial control.",
    overview:
      "Jade is one of the longest-running ideas in Chinese material culture. In the Han dynasty, it was associated with preservation, status, and the afterlife. In the Qing dynasty, it became a material of imperial virtuosity: enormous, carefully carved, and often tied to the emperor's own taste for collecting and inscription.\n\nThe shift is not from sacred to secular. It is from one kind of sacred use to another. The Han jade burial suit turns the body into a ritual object meant to survive death. The Qianlong jade basin turns raw stone into a palace-level display of technical and literary power. Same material. Different politics.",
    leftArtifactSlug: "jade-burial-suit",
    rightArtifactSlug: "qing-qianlong-jade-basin",
    searchTerms: [
      "jade burial suit meaning",
      "Chinese jade history",
      "Qianlong jade basin",
    ],
    axes: [
      {
        label: "Primary purpose",
        left: "Protect the body and support immortality in the afterlife",
        right: "Show imperial control, connoisseurship, and workshop mastery",
      },
      {
        label: "Scale of making",
        left: "2,498 jade tiles sewn together with gold wire",
        right: "A single massive boulder carved into a basin with an imperial poem",
      },
      {
        label: "Belief system",
        left: "Jade as a preservative and spiritually charged funerary material",
        right: "Jade as court luxury, literary object, and symbol of conquest",
      },
      {
        label: "Who could own it",
        left: "Only the highest nobles and royals",
        right: "The emperor and the palace workshops around him",
      },
    ],
    takeaways: [
      "Jade is not one symbol. It changes meaning with the dynasty.",
      "Han jade is about burial and immortality; Qing jade is about scale and command.",
      "If bronze shows state ritual, jade shows how Chinese elites imagined purity, power, and continuity.",
    ],
    faqs: [
      {
        q: "Did jade actually preserve the body?",
        a: "No. The suit survived, but the body did not. The belief was powerful even when the result was not.",
      },
      {
        q: "Why did Qianlong care so much about jade?",
        a: "Because jade let the Qing court combine material mastery, collecting, poetry, and imperial self-image in one object.",
      },
      {
        q: "Is jade always about virtue in Chinese culture?",
        a: "Often, but not always. It can stand for virtue, immortality, rank, and technical perfection depending on context.",
      },
    ],
    relatedTopicSlugs: [
      "jade-and-immortality",
      "imperial-power-and-court-life",
      "prehistoric-jade-cultures",
    ],
    supportingArtifactSlugs: [
      "han-jade-gold-comb",
      "qing-jade-boy-buffalo",
      "qing-zhanyinbao-portrait",
    ],
  },
  {
    slug: "song-vs-yuan-painting",
    title: "Song vs Yuan Painting",
    subtitle: "From urban documentary detail to literati atmosphere",
    summary:
      "Along the River During the Qingming Festival captures the city in motion. Cloudy Mountains turns landscape into mood. Together they show how Chinese painting moved from detailed public world-making to private brushwork and atmosphere.",
    overview:
      "Chinese painting changed dramatically between the Song and Yuan periods. The Song court favored pictures that could describe a city, a festival, a bridge, a market, or a riverbank with astonishing density. By the Yuan, many scholar-painters were less interested in visual inventory and more interested in brush texture, mood, and the inner life of landscape.\n\nThat does not mean one style replaced the other. It means Chinese painting expanded. One side gives us the city as a full social scene. The other gives us landscape as memory, distance, and a cultivated visual language. If you want to understand why Chinese painting became so influential, this is one of the cleanest contrasts to study.",
    leftArtifactSlug: "along-the-river-during-qingming-festival",
    rightArtifactSlug: "cma-cloudy-mountains",
    searchTerms: [
      "Song vs Yuan painting",
      "Chinese painting styles",
      "Qingming scroll meaning",
    ],
    axes: [
      {
        label: "Subject matter",
        left: "Urban life, commerce, transport, and festival activity",
        right: "Mist, mountains, and the emotional space of landscape",
      },
      {
        label: "Technique",
        left: "Dense narrative detail and encyclopedic composition",
        right: "Layered wet dots, ink atmosphere, and brush texture",
      },
      {
        label: "Social setting",
        left: "Courtly and documentary, tied to a thriving capital city",
        right: "Literati, exile, memory, and personal expression",
      },
      {
        label: "What to notice",
        left: "Bridges, boats, shops, and hundreds of figures",
        right: "How Mi-style dots build mist and recession",
      },
    ],
    takeaways: [
      "Song painting makes the world readable; Yuan painting makes the world felt.",
      "The shift is less about better or worse and more about different cultural needs.",
      "Together they explain why Chinese painting is both documentary and poetic.",
    ],
    faqs: [
      {
        q: "Why is the Qingming scroll so famous?",
        a: "Because it records a whole urban world in one long composition and has become a defining image of Song social life.",
      },
      {
        q: "What is Mi-style painting?",
        a: "A Yuan landscape style built from ink dots and soft atmosphere, associated with Mi Fu and his son Mi Youren.",
      },
      {
        q: "Did Yuan painters stop caring about detail?",
        a: "No. They cared about different details: brushwork, mood, and the structure of the painted surface.",
      },
    ],
    relatedTopicSlugs: [
      "song-city-life-and-painting",
      "lost-masterpieces-of-chinese-painting",
      "blue-and-white-porcelain",
    ],
    supportingArtifactSlugs: [
      "cma-quails-sparrows-autumn",
      "cma-five-hundred-arhats",
      "beast-head-agate-cup",
    ],
  },
];

export function getComparisonGuideBySlug(slug: string) {
  return comparisonGuides.find((guide) => guide.slug === slug);
}
