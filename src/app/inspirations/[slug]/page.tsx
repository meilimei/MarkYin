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
} from "lucide-react";
import {
  popCultureWorks,
  getWorkBySlug,
  mediumLabels,
} from "@/data/popCultureWorks";
import { getArtifactsForWork, getTopicsForWork } from "@/lib/content";
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
          {work.heroImage.startsWith("http") && (
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
