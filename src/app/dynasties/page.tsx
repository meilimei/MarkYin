import { Metadata } from "next";
import Link from "next/link";
import { artifacts } from "@/data/artifacts";
import { Clock, ArrowRight, HelpCircle, Sparkles } from "lucide-react";
import AdBanner from "@/components/AdBanner";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Chinese Dynasties — A Timeline of Civilization",
  description:
    "Explore the major dynasties of Chinese history through their most significant cultural artifacts. From the Shang Dynasty to the Qing.",
  alternates: {
    canonical: "/dynasties",
  },
  openGraph: {
    title: "Chinese Dynasties — A Timeline of Civilization",
    description:
      "Explore the major dynasties of Chinese history through their most significant cultural artifacts. From the Shang Dynasty to the Qing.",
    url: absoluteUrl("/dynasties"),
    type: "website",
  },
};

const dynastyInfo = [
  {
    name: "Late Shang Dynasty",
    period: "c. 1600–1046 BC",
    description:
      "The Shang Dynasty mastered bronze casting to an unprecedented level, creating ritual vessels and weapons of extraordinary sophistication. The discovery of Sanxingdui proved that advanced civilizations thrived far beyond the Yellow River heartland.",
    color: "from-amber-50 to-amber-100",
    borderColor: "border-amber-200",
  },
  {
    name: "Western Zhou Dynasty",
    period: "c. 1046–771 BC",
    description:
      "The Zhou established the feudal system and the Mandate of Heaven concept. Their bronze vessels carry the longest inscriptions of the ancient world, serving as primary historical records.",
    color: "from-emerald-50 to-emerald-100",
    borderColor: "border-emerald-200",
  },
  {
    name: "Spring and Autumn Period",
    period: "c. 770–476 BC",
    description:
      "An era of philosophical flourishing — Confucius, Laozi, and Sun Tzu all lived during this time. Metallurgy reached new heights with anti-corrosion technologies not reinvented until the 20th century.",
    color: "from-cyan-50 to-cyan-100",
    borderColor: "border-cyan-200",
  },
  {
    name: "Warring States Period",
    period: "c. 475–221 BC",
    description:
      "Seven kingdoms battled for supremacy in an age of military innovation and cultural brilliance. The Bianzhong bells demonstrate acoustic science 2,000 years ahead of Europe.",
    color: "from-violet-50 to-violet-100",
    borderColor: "border-violet-200",
  },
  {
    name: "Qin Dynasty",
    period: "221–206 BC",
    description:
      "China's first unified empire under Qin Shi Huang standardized writing, currency, and measurements. The Terracotta Army — 8,000 unique warriors — remains one of humanity's greatest archaeological discoveries.",
    color: "from-red-50 to-red-100",
    borderColor: "border-red-200",
  },
  {
    name: "Western Han Dynasty",
    period: "206 BC – 9 AD",
    description:
      "The Han Dynasty opened the Silk Road and established Chinese cultural identity. The aristocracy's pursuit of immortality produced extraordinary jade burial suits stitched with gold.",
    color: "from-blue-50 to-blue-100",
    borderColor: "border-blue-200",
  },
  {
    name: "Eastern Han Dynasty",
    period: "25-220 AD",
    description:
      "The Eastern Han carried forward Han institutions while luxury crafts, scientific instruments, tomb art, and regional workshops became more elaborate. It is a key bridge between early imperial China and the Buddhist, aristocratic, and transregional worlds that followed.",
    color: "from-sky-50 to-sky-100",
    borderColor: "border-sky-200",
  },
  {
    name: "Tang Dynasty",
    period: "618–907 AD",
    description:
      "China's cosmopolitan golden age. Chang'an was the world's largest city, and Silk Road trade brought Persian, Indian, and Central Asian influences into Chinese art and culture.",
    color: "from-orange-50 to-orange-100",
    borderColor: "border-orange-200",
  },
  {
    name: "Northern Song Dynasty",
    period: "960–1127 AD",
    description:
      "A renaissance of art, science, and commerce. Song Dynasty China had the world's most advanced economy, and its paintings remain among the most celebrated in art history.",
    color: "from-teal-50 to-teal-100",
    borderColor: "border-teal-200",
  },
  {
    name: "Yuan Dynasty",
    period: "1271–1368 AD",
    description:
      "Founded by Kublai Khan, the Yuan connected China to the wider Mongol Empire. Blue-and-white porcelain — originally made for Middle Eastern markets — became China's most iconic export.",
    color: "from-indigo-50 to-indigo-100",
    borderColor: "border-indigo-200",
  },
  {
    name: "Ming Dynasty",
    period: "1368-1644 AD",
    description:
      "The Ming restored Han Chinese rule after the Yuan, built the Forbidden City, sponsored Zheng He's voyages, and pushed porcelain, lacquer, painting, and printed culture into new global circulation.",
    color: "from-rose-50 to-rose-100",
    borderColor: "border-rose-200",
  },
  {
    name: "Qing Dynasty",
    period: "1644-1912 AD",
    description:
      "The Qing court assembled one of the largest imperial collections in world history. Jade carving, palace painting, porcelain collecting, and the Forbidden City itself became central symbols of late imperial authority.",
    color: "from-purple-50 to-purple-100",
    borderColor: "border-purple-200",
  },
];

const dynastyFaqs = [
  {
    q: "Which Chinese dynasty should beginners start with?",
    a: "Start with Shang bronzes, Qin terracotta warriors, Han jade, Tang Silk Road art, Song painting, Yuan blue-and-white porcelain, and Qing palace collections. Those dynasties give the fastest overview through real objects.",
  },
  {
    q: "Which dynasty created the Terracotta Army?",
    a: "The Terracotta Army belongs to the Qin dynasty, the first unified empire of China under Qin Shi Huang.",
  },
  {
    q: "Which dynasty is most important for Chinese porcelain?",
    a: "The Yuan, Ming, and Qing dynasties are central for porcelain history. Yuan blue-and-white established the global language, Ming kilns refined imperial styles, and Qing workshops pushed scale and technical variety.",
  },
  {
    q: "Why study dynasties through artifacts instead of dates?",
    a: "Artifacts make dynasties concrete. A bronze vessel, jade suit, painting, or porcelain vase shows how power, belief, technology, and daily life actually looked.",
  },
];

export default function DynastiesPage() {
  const itemListJsonLd = {
    "@type": "ItemList",
    name: "Chinese Dynasties Timeline",
    numberOfItems: dynastyInfo.length,
    itemListElement: dynastyInfo.map((dynasty, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: dynasty.name,
      description: dynasty.description,
    })),
  };

  const faqJsonLd = {
    "@type": "FAQPage",
    mainEntity: dynastyFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [itemListJsonLd, faqJsonLd],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="bg-gradient-to-b from-ink-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-ink-900 mb-4">
            Dynasties of China
          </h1>
          <p className="text-lg text-ink-500 max-w-3xl">
            A journey through time — explore 5,000 years of civilization through
            the dynasties that shaped it.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
            <div className="rounded-2xl bg-white border border-ink-100 p-5">
              <p className="font-display text-3xl font-bold text-primary-600">
                {dynastyInfo.length}
              </p>
              <p className="text-sm text-ink-500 mt-1">major periods</p>
            </div>
            <div className="rounded-2xl bg-white border border-ink-100 p-5">
              <p className="font-display text-3xl font-bold text-primary-600">
                {artifacts.length}
              </p>
              <p className="text-sm text-ink-500 mt-1">linked artifacts</p>
            </div>
            <div className="rounded-2xl bg-white border border-ink-100 p-5">
              <p className="font-display text-3xl font-bold text-primary-600">
                5k+
              </p>
              <p className="text-sm text-ink-500 mt-1">
                years of material culture
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <AdBanner slot="dynasties-top" format="horizontal" />
      </div>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-20">
        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-ink-200" />

          <div className="space-y-10">
            {dynastyInfo.map((dynasty) => {
              const dynastyArtifacts = artifacts.filter(
                (a) =>
                  a.dynasty === dynasty.name ||
                  a.dynasty.startsWith(`${dynasty.name} (`),
              );

              return (
                <div key={dynasty.name} className="relative pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-3 w-5 h-5 rounded-full bg-primary-500 border-4 border-white shadow-sm" />

                  <div
                    className={`bg-gradient-to-br ${dynasty.color} border ${dynasty.borderColor} rounded-xl p-6`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="h-4 w-4 text-ink-400" />
                      <span className="text-sm text-ink-500">
                        {dynasty.period}
                      </span>
                    </div>
                    <h2 className="font-display text-2xl font-bold text-ink-900 mb-3">
                      {dynasty.name}
                    </h2>
                    <p className="text-ink-600 leading-relaxed mb-4">
                      {dynasty.description}
                    </p>

                    {dynastyArtifacts.length > 0 && (
                      <div className="border-t border-ink-200/50 pt-4">
                        <p className="text-xs text-ink-400 uppercase tracking-wider mb-2">
                          Featured Artifacts
                        </p>
                        <div className="space-y-1.5">
                          {dynastyArtifacts.map((artifact) => (
                            <Link
                              key={artifact.slug}
                              href={`/artifacts/${artifact.slug}`}
                              className="flex items-center gap-2 text-sm text-primary-700 hover:text-primary-900 transition-colors group"
                            >
                              <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                              {artifact.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-ink-50 py-14 border-t border-ink-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-ink-900 mb-6 flex items-center gap-2">
            <HelpCircle className="h-6 w-6 text-primary-500" />
            Frequently asked questions
          </h2>
          <div className="space-y-3">
            {dynastyFaqs.map((faq) => (
              <details
                key={faq.q}
                className="group bg-white border border-ink-100 rounded-xl overflow-hidden transition-shadow hover:shadow-sm open:shadow-sm"
              >
                <summary className="cursor-pointer list-none px-5 py-4 flex items-start justify-between gap-3">
                  <span className="font-display text-base font-semibold text-ink-900 leading-snug">
                    {faq.q}
                  </span>
                  <span
                    aria-hidden="true"
                    className="mt-1 text-ink-400 group-open:rotate-45 transition-transform text-xl leading-none"
                  >
                    +
                  </span>
                </summary>
                <p className="px-5 pb-5 text-sm text-ink-600 leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-imperial-950 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-3 py-1 rounded-full text-xs font-semibold text-primary-200 mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            Keep exploring
          </div>
          <h2 className="font-display text-3xl font-bold mb-4">
            Dates are only the skeleton. Objects are the body.
          </h2>
          <p className="text-ink-200 leading-relaxed mb-6 max-w-3xl">
            Use the timeline to orient yourself, then compare the objects that
            made each dynasty visible: bronze, jade, painting, porcelain, and
            palace architecture.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/compare"
              className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-400 text-white px-5 py-3 rounded-full font-semibold transition-colors"
            >
              Compare artifacts <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/topics"
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/15 text-white px-5 py-3 rounded-full font-semibold transition-colors"
            >
              Browse themes
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
