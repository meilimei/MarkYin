import { Metadata } from "next";
import Link from "next/link";
import { artifacts } from "@/data/artifacts";
import { Clock, ArrowRight } from "lucide-react";
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
];

export default function DynastiesPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-ink-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-ink-900 mb-4">
            Dynasties of China
          </h1>
          <p className="text-lg text-ink-500 max-w-2xl">
            A journey through time — explore 5,000 years of civilization through
            the dynasties that shaped it.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-20">
        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-ink-200" />

          <div className="space-y-10">
            {dynastyInfo.map((dynasty) => {
              const dynastyArtifacts = artifacts.filter(
                (a) => a.dynasty === dynasty.name
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
    </>
  );
}
