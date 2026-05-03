import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MapPin,
  Clock,
  Ruler,
  ArrowLeft,
  Lightbulb,
  Landmark,
  Share2,
  BookOpen,
} from "lucide-react";
import {
  artifacts,
  getArtifactBySlug,
  getRelatedArtifacts,
} from "@/data/artifacts";
import ArtifactCard from "@/components/ArtifactCard";
import AdBanner from "@/components/AdBanner";
import { absoluteUrl } from "@/lib/site";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return artifacts.map((artifact) => ({
    slug: artifact.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const artifact = getArtifactBySlug(params.slug);
  if (!artifact) return { title: "Artifact Not Found" };

  return {
    title: `${artifact.name} — ${artifact.dynasty}`,
    description: artifact.description,
    alternates: {
      canonical: `/artifacts/${artifact.slug}`,
    },
    openGraph: {
      title: `${artifact.name} — ${artifact.dynasty} | AncientEchoes`,
      description: artifact.description,
      url: absoluteUrl(`/artifacts/${artifact.slug}`),
      type: "article",
      images: [
        {
          url: artifact.image,
          alt: artifact.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${artifact.name} — ${artifact.dynasty}`,
      description: artifact.description,
      images: [artifact.image],
    },
  };
}

export default function ArtifactDetailPage({ params }: PageProps) {
  const artifact = getArtifactBySlug(params.slug);
  if (!artifact) notFound();

  const relatedArtifacts = getRelatedArtifacts(artifact.relatedSlugs);
  const artifactJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${artifact.name} — ${artifact.dynasty}`,
    description: artifact.description,
    image: artifact.image,
    mainEntityOfPage: absoluteUrl(`/artifacts/${artifact.slug}`),
    author: {
      "@type": "Organization",
      name: "AncientEchoes",
    },
    publisher: {
      "@type": "Organization",
      name: "AncientEchoes",
    },
    about: {
      "@type": "Thing",
      name: artifact.name,
      description: artifact.significance,
    },
    keywords: [
      artifact.name,
      artifact.dynasty,
      artifact.category,
      artifact.material,
      artifact.museumName,
      "Chinese artifact",
      "Chinese cultural heritage",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(artifactJsonLd) }}
      />
      {/* Breadcrumb */}
      <div className="bg-ink-50 border-b border-ink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-sm text-ink-500">
            <Link href="/" className="hover:text-primary-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/artifacts"
              className="hover:text-primary-600 transition-colors"
            >
              Artifacts
            </Link>
            <span>/</span>
            <span className="text-ink-700 truncate">{artifact.name}</span>
          </div>
        </div>
      </div>

      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Back Link */}
            <Link
              href="/artifacts"
              className="inline-flex items-center gap-1.5 text-sm text-ink-500 hover:text-primary-600 transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              All Artifacts
            </Link>

            {/* Header */}
            <div className="mb-8">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="dynasty-tag text-sm font-medium text-primary-800 px-3 py-1 rounded-full">
                  {artifact.dynasty}
                </span>
                <span className="text-sm text-ink-400">
                  {artifact.category}
                </span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ink-900 leading-tight mb-4">
                {artifact.name}
              </h1>
              <p className="text-lg text-ink-600 leading-relaxed">
                {artifact.description}
              </p>
            </div>

            {/* Artifact Image */}
            <div className="aspect-[16/10] bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl mb-10 overflow-hidden relative">
              {artifact.image.startsWith("http") ? (
                <img src={artifact.image} alt={artifact.name} className="object-cover w-full h-full" />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <BookOpen className="h-16 w-16 text-primary-200 mx-auto mb-3" />
                  <p className="text-sm text-primary-400">Artifact Illustration</p>
                </div>
              )}
            </div>

            {/* Ad */}
            <AdBanner
              slot="artifact-detail-top"
              format="horizontal"
              className="mb-10"
            />

            {/* Story Section */}
            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-ink-900 mb-4">
                The Story
              </h2>
              <div className="prose prose-ink max-w-none">
                <p className="text-ink-600 leading-relaxed text-base whitespace-pre-line">
                  {artifact.story}
                </p>
              </div>
            </section>

            {/* Significance */}
            <section className="mb-10 bg-primary-50 rounded-xl p-6 border border-primary-100">
              <h2 className="font-display text-xl font-bold text-ink-900 mb-3">
                Why It Matters
              </h2>
              <p className="text-ink-700 leading-relaxed">
                {artifact.significance}
              </p>
            </section>

            {/* Fun Facts */}
            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-ink-900 mb-4 flex items-center gap-2">
                <Lightbulb className="h-6 w-6 text-primary-500" />
                Fun Facts
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {artifact.funFacts.map((fact, i) => (
                  <div
                    key={i}
                    className="bg-white border border-ink-100 rounded-lg p-4 flex gap-3"
                  >
                    <span className="text-primary-500 font-bold text-lg leading-none mt-0.5">
                      {i + 1}
                    </span>
                    <p className="text-sm text-ink-600 leading-relaxed">
                      {fact}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Ad */}
            <AdBanner
              slot="artifact-detail-bottom"
              format="horizontal"
              className="mb-10"
            />

            {/* Related Artifacts */}
            {relatedArtifacts.length > 0 && (
              <section>
                <h2 className="font-display text-2xl font-bold text-ink-900 mb-6">
                  Related Artifacts
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {relatedArtifacts.map((related) => (
                    <ArtifactCard key={related.slug} artifact={related} />
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-20 space-y-6">
              {/* Quick Info Card */}
              <div className="bg-white border border-ink-100 rounded-xl p-6 shadow-sm">
                <h3 className="font-display text-lg font-bold text-ink-900 mb-4">
                  Quick Facts
                </h3>
                <dl className="space-y-4">
                  <div>
                    <dt className="text-xs text-ink-400 uppercase tracking-wider">
                      Dynasty / Period
                    </dt>
                    <dd className="text-sm font-medium text-ink-800 mt-0.5">
                      {artifact.dynasty}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-ink-400 uppercase tracking-wider flex items-center gap-1">
                      <Clock className="h-3 w-3" /> Date
                    </dt>
                    <dd className="text-sm font-medium text-ink-800 mt-0.5">
                      {artifact.period}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-ink-400 uppercase tracking-wider">
                      Material
                    </dt>
                    <dd className="text-sm font-medium text-ink-800 mt-0.5">
                      {artifact.material}
                    </dd>
                  </div>
                  {artifact.dimensions && (
                    <div>
                      <dt className="text-xs text-ink-400 uppercase tracking-wider flex items-center gap-1">
                        <Ruler className="h-3 w-3" /> Dimensions
                      </dt>
                      <dd className="text-sm font-medium text-ink-800 mt-0.5">
                        {artifact.dimensions}
                      </dd>
                    </div>
                  )}
                  <div>
                    <dt className="text-xs text-ink-400 uppercase tracking-wider">
                      Category
                    </dt>
                    <dd className="text-sm font-medium text-ink-800 mt-0.5">
                      {artifact.category}
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Museum Card */}
              <Link
                href={`/museums/${artifact.museumSlug}`}
                className="block bg-ink-50 border border-ink-100 rounded-xl p-6 hover:bg-ink-100 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Landmark className="h-5 w-5 text-primary-600" />
                  <span className="text-xs text-ink-400 uppercase tracking-wider">
                    Museum
                  </span>
                </div>
                <p className="font-display font-bold text-ink-900">
                  {artifact.museumName}
                </p>
                <p className="text-sm text-primary-600 mt-1">
                  Visit museum page →
                </p>
              </Link>

              {/* Share */}
              <div className="bg-white border border-ink-100 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Share2 className="h-4 w-4 text-ink-500" />
                  <span className="text-sm font-medium text-ink-700">
                    Share this artifact
                  </span>
                </div>
                <div className="flex gap-2">
                  {["Twitter", "Facebook", "Pinterest"].map((platform) => (
                    <button
                      key={platform}
                      className="flex-1 text-xs bg-ink-50 hover:bg-ink-100 text-ink-600 py-2 rounded-lg transition-colors"
                    >
                      {platform}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sidebar Ad */}
              <AdBanner slot="artifact-sidebar" format="rectangle" />
            </div>
          </aside>
        </div>
      </article>
    </>
  );
}
