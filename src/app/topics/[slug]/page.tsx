import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ExternalLink,
  Layers,
  MapPin,
  Sparkles,
} from "lucide-react";
import { topics, getTopicBySlug } from "@/data/topics";
import {
  getArtifactsForTopic,
  getWorksForTopic,
  getMuseumsForTopic,
} from "@/lib/content";
import ArtifactCard from "@/components/ArtifactCard";
import WorkCard from "@/components/WorkCard";
import AdBanner from "@/components/AdBanner";
import { absoluteUrl, SITE_NAME } from "@/lib/site";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return topics.map((topic) => ({ slug: topic.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const topic = getTopicBySlug(params.slug);
  if (!topic) return { title: "Theme Not Found" };

  return {
    title: `${topic.title} — ${topic.subtitle ?? "Chinese Heritage Theme"}`,
    description: topic.summary,
    alternates: { canonical: `/topics/${topic.slug}` },
    openGraph: {
      title: `${topic.title} — Cross-Museum Chinese Heritage`,
      description: topic.summary,
      url: absoluteUrl(`/topics/${topic.slug}`),
      type: "article",
      images: [{ url: topic.heroImage, alt: topic.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: topic.title,
      description: topic.summary,
      images: [topic.heroImage],
    },
  };
}

export default function TopicDetailPage({ params }: PageProps) {
  const topic = getTopicBySlug(params.slug);
  if (!topic) notFound();

  const artifacts = getArtifactsForTopic(topic);
  const works = getWorksForTopic(topic);
  const museums = getMuseumsForTopic(topic);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: topic.title,
    description: topic.summary,
    url: absoluteUrl(`/topics/${topic.slug}`),
    image: topic.heroImage,
    hasPart: artifacts.map((a) => ({
      "@type": "CreativeWork",
      name: a.name,
      url: absoluteUrl(`/artifacts/${a.slug}`),
    })),
    publisher: { "@type": "Organization", name: SITE_NAME },
  };

  const artifactsByMuseum = artifacts.reduce<Record<string, typeof artifacts>>(
    (acc, a) => {
      if (!acc[a.museumName]) acc[a.museumName] = [];
      acc[a.museumName].push(a);
      return acc;
    },
    {},
  );

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
            <Link href="/topics" className="hover:text-primary-600">
              Themes
            </Link>
            <span>/</span>
            <span className="text-ink-700 truncate">{topic.title}</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-b from-ink-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/topics"
            className="inline-flex items-center gap-1.5 text-sm text-ink-500 hover:text-primary-600 mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            All Themes
          </Link>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3">
              <div className="inline-flex items-center gap-2 bg-primary-50 px-3 py-1 rounded-full text-xs font-medium text-primary-700 mb-4">
                <Layers className="h-3.5 w-3.5" />
                {topic.category.charAt(0).toUpperCase() + topic.category.slice(1)}
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-ink-900 mb-4 leading-tight">
                {topic.title}
              </h1>
              {topic.subtitle && (
                <p className="text-lg text-primary-700 font-medium mb-6">
                  {topic.subtitle}
                </p>
              )}
              <div className="flex flex-wrap gap-4 text-sm text-ink-500">
                <span className="flex items-center gap-1">
                  <Sparkles className="h-4 w-4 text-primary-500" />
                  {artifacts.length} artifact{artifacts.length === 1 ? "" : "s"}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4 text-primary-500" />
                  {museums.length} museum{museums.length === 1 ? "" : "s"}
                </span>
              </div>
            </div>
            <div className="md:col-span-2 aspect-[4/3] bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl overflow-hidden">
              {topic.heroImage && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={topic.heroImage}
                  alt={topic.title}
                  className="object-cover w-full h-full"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-ink-900 mb-4">
                The Story
              </h2>
              <div className="prose prose-ink max-w-none">
                <p className="text-ink-600 leading-relaxed whitespace-pre-line">
                  {topic.longDescription}
                </p>
              </div>
            </section>

            <AdBanner
              slot="topic-middle"
              format="horizontal"
              className="mb-10"
            />

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-ink-900 mb-6">
                Artifacts in This Theme
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {artifacts.map((artifact) => (
                  <ArtifactCard key={artifact.slug} artifact={artifact} />
                ))}
              </div>
            </section>

            {Object.keys(artifactsByMuseum).length > 1 && (
              <section className="mb-10">
                <h2 className="font-display text-2xl font-bold text-ink-900 mb-6">
                  Where to See Them
                </h2>
                <div className="space-y-4">
                  {Object.entries(artifactsByMuseum).map(
                    ([museum, items]) => (
                      <div
                        key={museum}
                        className="bg-ink-50 border border-ink-100 rounded-xl p-5"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <MapPin className="h-4 w-4 text-primary-600" />
                          <p className="font-display text-lg font-bold text-ink-900">
                            {museum}
                          </p>
                        </div>
                        <ul className="space-y-1 text-sm text-ink-600">
                          {items.map((a) => (
                            <li key={a.slug}>
                              <Link
                                href={`/artifacts/${a.slug}`}
                                className="hover:text-primary-600"
                              >
                                · {a.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ),
                  )}
                </div>
              </section>
            )}

            {works.length > 0 && (
              <section className="mb-10">
                <h2 className="font-display text-2xl font-bold text-ink-900 mb-6 flex items-center gap-2">
                  <Sparkles className="h-6 w-6 text-primary-500" />
                  In Popular Culture
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {works.map((work) => (
                    <WorkCard key={work.slug} work={work} />
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-20 space-y-6">
              <div className="bg-white border border-ink-100 rounded-xl p-6 shadow-sm">
                <h3 className="font-display text-lg font-bold text-ink-900 mb-4">
                  At a Glance
                </h3>
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="text-xs text-ink-400 uppercase tracking-wider">
                      Artifacts
                    </dt>
                    <dd className="text-ink-800 font-medium mt-0.5">
                      {artifacts.length}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-ink-400 uppercase tracking-wider">
                      Museums
                    </dt>
                    <dd className="text-ink-800 font-medium mt-0.5">
                      {museums.length}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-ink-400 uppercase tracking-wider">
                      Category
                    </dt>
                    <dd className="text-ink-800 font-medium mt-0.5 capitalize">
                      {topic.category}
                    </dd>
                  </div>
                </dl>
              </div>

              {topic.sources && topic.sources.length > 0 && (
                <div className="bg-ink-50 border border-ink-100 rounded-xl p-6">
                  <h3 className="font-display text-sm font-bold text-ink-700 uppercase tracking-wider mb-3">
                    Sources
                  </h3>
                  <ul className="space-y-2 text-sm">
                    {topic.sources.map((src) => (
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

              <AdBanner slot="topic-sidebar" format="rectangle" />
            </div>
          </aside>
        </div>
      </article>
    </>
  );
}
