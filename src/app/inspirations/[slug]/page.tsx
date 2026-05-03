import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ExternalLink,
  Gamepad2,
  Tv,
  Film,
  Clapperboard,
  Music,
  BookOpen,
  Sparkles,
  Layers,
  HelpCircle,
} from "lucide-react";
import type { PopCultureWork } from "@/data/popCultureWorks";
import {
  popCultureWorks,
  getWorkBySlug,
  mediumLabels,
} from "@/data/popCultureWorks";
import { getArtifactsForWork, getTopicsForWork } from "@/lib/content";
import type { Artifact } from "@/data/artifacts";
import ArtifactCard from "@/components/ArtifactCard";
import TopicCard from "@/components/TopicCard";
import AdBanner from "@/components/AdBanner";
import { absoluteUrl, SITE_NAME } from "@/lib/site";

interface PageProps {
  params: { slug: string };
}

const mediumIcons = {
  game: Gamepad2,
  film: Film,
  tv: Tv,
  anime: Clapperboard,
  music: Music,
  book: BookOpen,
};

export async function generateStaticParams() {
  return popCultureWorks.map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const work = getWorkBySlug(params.slug);
  if (!work) return { title: "Inspiration Not Found" };

  const title = `${work.title} — Real Artifacts Behind the ${mediumLabels[work.medium]}`;
  return {
    title,
    description: work.summary,
    alternates: { canonical: `/inspirations/${work.slug}` },
    openGraph: {
      title,
      description: work.summary,
      url: absoluteUrl(`/inspirations/${work.slug}`),
      type: "article",
      images: [{ url: work.heroImage, alt: work.title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: work.summary,
      images: [work.heroImage],
    },
  };
}

export default function InspirationDetailPage({ params }: PageProps) {
  const work = getWorkBySlug(params.slug);
  if (!work) notFound();

  const Icon = mediumIcons[work.medium];
  const artifactRefs = getArtifactsForWork(work);
  const topics = getTopicsForWork(work);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: work.title,
    description: work.summary,
    url: absoluteUrl(`/inspirations/${work.slug}`),
    datePublished: `${work.year}-01-01`,
    ...(work.studio && {
      creator: { "@type": "Organization", name: work.studio },
    }),
    image: work.heroImage,
    isBasedOn: artifactRefs.map((ref) => ({
      "@type": "CreativeWork",
      name: ref.artifact.name,
      url: absoluteUrl(`/artifacts/${ref.artifact.slug}`),
    })),
    publisher: { "@type": "Organization", name: SITE_NAME },
  };

  const faqs = buildFaqs(
    work,
    artifactRefs.map((r) => r.artifact),
  );

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Breadcrumb */}
      <div className="bg-ink-50 border-b border-ink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-sm text-ink-500">
            <Link href="/" className="hover:text-primary-600">
              Home
            </Link>
            <span>/</span>
            <Link href="/inspirations" className="hover:text-primary-600">
              Inspirations
            </Link>
            <span>/</span>
            <span className="text-ink-700 truncate">{work.title}</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-b from-ink-950 via-ink-900 to-primary-950 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {work.heroImage && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={work.heroImage}
              alt={work.title}
              className="object-cover w-full h-full"
            />
          )}
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/inspirations"
            className="inline-flex items-center gap-1.5 text-sm text-ink-300 hover:text-white mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            All Inspirations
          </Link>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-primary-200 mb-4">
              <Icon className="h-3.5 w-3.5" />
              {mediumLabels[work.medium]} · {work.year}
              {work.studio && ` · ${work.studio}`}
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              {work.title}
            </h1>
            {work.titleZh && (
              <p className="text-xl text-ink-300 mb-6">{work.titleZh}</p>
            )}
            <p className="text-lg text-ink-200 leading-relaxed">
              {work.summary}
            </p>
          </div>
        </div>
      </section>

      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            {/* Cultural Context */}
            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-ink-900 mb-4">
                Cultural Context
              </h2>
              <div className="prose prose-ink max-w-none">
                <p className="text-ink-600 leading-relaxed whitespace-pre-line">
                  {work.culturalContext}
                </p>
              </div>
            </section>

            <AdBanner
              slot="inspiration-middle"
              format="horizontal"
              className="mb-10"
            />

            {/* Real Artifacts Behind */}
            <section className="mb-10">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-ink-900 mb-2 flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-primary-500" />
                Real Artifacts Behind the Work
              </h2>
              <p className="text-sm text-ink-500 mb-6">
                {artifactRefs.length} direct connection
                {artifactRefs.length === 1 ? "" : "s"} to Chinese cultural
                heritage.
              </p>
              <div className="space-y-8">
                {artifactRefs.map(({ artifact, connection }) => (
                  <div
                    key={artifact.slug}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-white border border-ink-100 rounded-xl p-6"
                  >
                    <div className="sm:col-span-1">
                      <ArtifactCard artifact={artifact} />
                    </div>
                    <div className="sm:col-span-2 flex flex-col justify-center">
                      <p className="text-xs uppercase tracking-wider text-primary-600 font-semibold mb-2">
                        The Connection
                      </p>
                      <p className="text-base text-ink-700 leading-relaxed">
                        {connection}
                      </p>
                      <Link
                        href={`/artifacts/${artifact.slug}`}
                        className="mt-4 text-sm font-medium text-primary-600 hover:text-primary-700"
                      >
                        Read the full story →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Related Topics */}
            {topics.length > 0 && (
              <section className="mb-10">
                <h2 className="font-display text-2xl font-bold text-ink-900 mb-6 flex items-center gap-2">
                  <Layers className="h-6 w-6 text-primary-500" />
                  Related Themes
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {topics.map((topic) => (
                    <TopicCard key={topic.slug} topic={topic} />
                  ))}
                </div>
              </section>
            )}

            {/* Long-form bait spotlight (Black Myth / Liyue only) */}
            {work.slug === "black-myth-wukong" && (
              <section className="mb-10">
                <Link
                  href="/black-myth-real-museum-guide"
                  className="block bg-gradient-to-br from-imperial-950 via-ink-900 to-primary-900 text-white rounded-2xl p-7 md:p-9 hover:shadow-xl transition-shadow"
                >
                  <p className="text-xs uppercase tracking-widest text-primary-300 font-semibold mb-3">
                    Field guide · 12 min read
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl font-bold mb-3 leading-tight">
                    Want every Black Myth visual mapped, boss by boss?
                  </h3>
                  <p className="text-ink-300 leading-relaxed mb-4">
                    7 visual lineages, 23 specific objects, 5 museums on 3
                    continents — the full field guide to Black Myth&apos;s
                    real-world references.
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary-300">
                    Read the field guide →
                  </span>
                </Link>
              </section>
            )}
            {work.slug === "genshin-impact-liyue" && (
              <section className="mb-10">
                <Link
                  href="/genshin-liyue-real-museum-guide"
                  className="block bg-gradient-to-br from-imperial-950 via-ink-900 to-primary-900 text-white rounded-2xl p-7 md:p-9 hover:shadow-xl transition-shadow"
                >
                  <p className="text-xs uppercase tracking-widest text-primary-300 font-semibold mb-3">
                    Field guide · 14 min read
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl font-bold mb-3 leading-tight">
                    Want every Liyue visual decoded, harbor to karst?
                  </h3>
                  <p className="text-ink-300 leading-relaxed mb-4">
                    7 visual lineages — the karst peaks, the Song-dynasty
                    harbour, the bronze cauldron of Rex Lapis, the Adepti,
                    the Ming porcelain — mapped to specific museum objects.
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary-300">
                    Read the field guide →
                  </span>
                </Link>
              </section>
            )}

            {/* FAQ — visible HTML matched 1:1 with FAQPage JSON-LD */}
            {faqs.length > 0 && (
              <section className="mb-10">
                <h2 className="font-display text-2xl font-bold text-ink-900 mb-5 flex items-center gap-2">
                  <HelpCircle className="h-6 w-6 text-primary-500" />
                  Frequently asked questions
                </h2>
                <div className="space-y-3">
                  {faqs.map((f) => (
                    <details
                      key={f.q}
                      className="group bg-white border border-ink-100 rounded-xl px-5 py-4 open:shadow-sm transition-shadow"
                    >
                      <summary className="cursor-pointer list-none flex items-start justify-between gap-3">
                        <span className="font-display text-base font-semibold text-ink-900">
                          {f.q}
                        </span>
                        <span className="text-ink-400 group-open:rotate-45 transition-transform select-none text-xl leading-none mt-0.5">
                          +
                        </span>
                      </summary>
                      <p className="text-ink-600 leading-relaxed text-sm mt-3 whitespace-pre-line">
                        {f.a}
                      </p>
                    </details>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-20 space-y-6">
              {work.externalLinks && work.externalLinks.length > 0 && (
                <div className="bg-white border border-ink-100 rounded-xl p-6 shadow-sm">
                  <h3 className="font-display text-lg font-bold text-ink-900 mb-4">
                    Official Links
                  </h3>
                  <ul className="space-y-2">
                    {work.externalLinks.map((link) => (
                      <li key={link.url}>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm text-primary-600 hover:text-primary-700"
                        >
                          {link.label}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {work.sources && work.sources.length > 0 && (
                <div className="bg-ink-50 border border-ink-100 rounded-xl p-6">
                  <h3 className="font-display text-sm font-bold text-ink-700 uppercase tracking-wider mb-3">
                    Sources
                  </h3>
                  <ul className="space-y-2 text-sm">
                    {work.sources.map((src) => (
                      <li key={src.url}>
                        <a
                          href={src.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-ink-600 hover:text-primary-600 inline-flex items-center gap-1"
                        >
                          {src.label}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                        {src.license && (
                          <span className="text-xs text-ink-400 ml-1">
                            ({src.license})
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <AdBanner slot="inspiration-sidebar" format="rectangle" />
            </div>
          </aside>
        </div>
      </article>
    </>
  );
}

/**
 * Build 4–5 frequently-asked questions per inspiration page from the work's
 * structured data + the artifacts it references. The strings are emitted both
 * as visible HTML (for users) and as FAQPage JSON-LD (for Google rich
 * results) — Google requires the two to match.
 */
function buildFaqs(
  work: PopCultureWork,
  artifacts: Artifact[],
): { q: string; a: string }[] {
  const faqs: { q: string; a: string }[] = [];
  const mediumWord = mediumLabels[work.medium].toLowerCase();

  // What artifacts inspired the work
  if (artifacts.length > 0) {
    const list = artifacts.map((a) => a.name).join(", ");
    faqs.push({
      q: `What real Chinese artifacts inspired ${work.title}?`,
      a: `${work.title} draws on multiple real Chinese artifacts and traditions, most notably: ${list}. Each is documented in a Chinese museum and many are visible to the public today. See the connections section above for specific scene-by-scene references.`,
    });
  }

  // Where to see them
  const museums = Array.from(
    new Set(artifacts.map((a) => a.museumName).filter(Boolean)),
  );
  if (museums.length > 0) {
    faqs.push({
      q: `Where can I see the artifacts that inspired ${work.title}?`,
      a: `The artifacts referenced by ${work.title} are held by: ${museums.join(", ")}. Most have public galleries with regular visitor hours; a few have travelled to international exhibitions.`,
    });
  }

  // Year + studio context
  if (work.studio) {
    faqs.push({
      q: `Who created ${work.title}?`,
      a: `${work.title} was developed by ${work.studio} and released in ${work.year}. It is a ${mediumWord} produced in ${work.region}.`,
    });
  }

  // Historical accuracy framing
  faqs.push({
    q: `Is ${work.title} historically accurate?`,
    a: `${work.title} is a creative work, not a documentary. It draws inspiration from real Chinese material culture but adapts and dramatises freely. Our role at China Heritage is to identify which historical references the work is drawing on, with citations to museum primary sources, so curious viewers can separate the historical core from the creative invention.`,
  });

  // What to read next — bait page cross-link if applicable
  if (work.slug === "black-myth-wukong") {
    faqs.push({
      q: `Where can I learn more about Chinese material culture after Black Myth: Wukong?`,
      a: `Start with our long-form field guide, "Every Visual in Black Myth: Wukong, Mapped to a Real Museum You Can Visit" — it walks the seven major visual lineages in the game (Buddhist sculpture, ritual bronzes, Sanxingdui, Tang sancai, painted scrolls, imperial porcelain, jade) and points at 23 specific objects you can visit in Beijing, Shanghai, New York, Cleveland, and London.`,
    });
  } else if (work.slug === "genshin-impact-liyue") {
    faqs.push({
      q: `Where can I learn more about Chinese material culture after Liyue?`,
      a: `Start with our long-form field guide, "Every Liyue Visual in Genshin Impact, Mapped to a Real Museum Object" — it walks the seven major visual lineages of Liyue (karst landscape painting, Song urban culture, the bronze cauldron, the Adepti, costumes, porcelain, jade) and points at 23 specific objects you can visit.`,
    });
  } else {
    faqs.push({
      q: `Where can I learn more about Chinese material culture beyond ${work.title}?`,
      a: `Browse our Topics index for cross-museum themes (bronze ritual, jade and immortality, blue-and-white porcelain) and our Treasures Abroad index for the 28 great Chinese masterpieces in Western museum collections. Each theme links back to specific artifacts you can read about in detail.`,
    });
  }

  return faqs;
}
