import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  BookOpen,
  GitCompareArrows,
  HelpCircle,
  Sparkles,
} from "lucide-react";
import { comparisonGuides, getComparisonGuideBySlug } from "@/data/comparisons";
import { getArtifactBySlug, type Artifact } from "@/data/artifacts";
import { getTopicBySlug } from "@/data/topics";
import ArtifactCard from "@/components/ArtifactCard";
import TopicCard from "@/components/TopicCard";
import AdBanner from "@/components/AdBanner";
import { absoluteUrl } from "@/lib/site";
import {
  absoluteImageUrl,
  buildBreadcrumbJsonLd,
  buildPublisherJsonLd,
} from "@/lib/seo";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return comparisonGuides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const guide = getComparisonGuideBySlug(params.slug);
  if (!guide) return { title: "Comparison Not Found" };

  return {
    title: guide.title,
    description: guide.summary,
    alternates: { canonical: `/compare/${guide.slug}` },
    openGraph: {
      title: guide.title,
      description: guide.summary,
      url: absoluteUrl(`/compare/${guide.slug}`),
      type: "article",
      images: [
        {
          url:
            absoluteImageUrl(getArtifactBySlug(guide.leftArtifactSlug)?.image) ??
            "",
          alt: guide.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: guide.title,
      description: guide.summary,
      images: absoluteImageUrl(getArtifactBySlug(guide.leftArtifactSlug)?.image)
        ? [absoluteImageUrl(getArtifactBySlug(guide.leftArtifactSlug)?.image)!]
        : undefined,
    },
  };
}

function ArtifactPanel({
  artifact,
  label,
  note,
}: {
  artifact: Artifact;
  label: string;
  note: string;
}) {
  return (
    <Link
      href={`/artifacts/${artifact.slug}`}
      className="group block rounded-3xl overflow-hidden border border-ink-100 bg-white shadow-sm hover:shadow-xl hover:border-primary-200 transition-all"
    >
      <div className="aspect-[4/3] bg-ink-50 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={artifact.image}
          alt={artifact.name}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="inline-flex items-center gap-2 bg-primary-50 px-3 py-1 rounded-full text-xs font-semibold text-primary-700 mb-3">
          {label}
        </div>
        <h3 className="font-display text-2xl font-bold text-ink-900 leading-tight mb-2 group-hover:text-primary-700 transition-colors">
          {artifact.name}
        </h3>
        <p className="text-sm font-semibold text-primary-600 mb-3">
          {artifact.dynasty}
        </p>
        <p className="text-sm text-ink-600 leading-relaxed mb-4">
          {artifact.description}
        </p>
        <p className="text-sm text-ink-500 leading-relaxed">{note}</p>
      </div>
    </Link>
  );
}

export default function ComparisonPage({ params }: PageProps) {
  const guide = getComparisonGuideBySlug(params.slug);
  if (!guide) notFound();

  const left = getArtifactBySlug(guide.leftArtifactSlug);
  const right = getArtifactBySlug(guide.rightArtifactSlug);

  if (!left || !right) notFound();

  const supportingArtifacts = (guide.supportingArtifactSlugs ?? [])
    .map((slug) => getArtifactBySlug(slug))
    .filter((artifact): artifact is Artifact => Boolean(artifact));

  const relatedTopics = guide.relatedTopicSlugs
    .map((slug) => getTopicBySlug(slug))
    .filter((topic) => Boolean(topic));

  const faqs = guide.faqs;
  const pageUrl = absoluteUrl(`/compare/${guide.slug}`);
  const imageUrl = absoluteImageUrl(left.image);

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Compare", path: "/compare" },
    { name: guide.title, path: `/compare/${guide.slug}` },
  ]);

  const itemListJsonLd = {
    "@type": "ItemList",
    name: guide.title,
    numberOfItems: 2,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: left.name,
        url: absoluteUrl(`/artifacts/${left.slug}`),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: right.name,
        url: absoluteUrl(`/artifacts/${right.slug}`),
      },
    ],
  };

  const faqJsonLd = {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const pageJsonLd = {
    "@type": "WebPage",
    name: guide.title,
    description: guide.summary,
    url: pageUrl,
    image: imageUrl,
    publisher: buildPublisherJsonLd(),
    about: {
      "@type": "Thing",
      name: guide.subtitle,
    },
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [breadcrumbJsonLd, pageJsonLd, itemListJsonLd, faqJsonLd],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-ink-50 border-b border-ink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-sm text-ink-500">
            <Link href="/" className="hover:text-primary-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/compare"
              className="hover:text-primary-600 transition-colors"
            >
              Compare
            </Link>
            <span>/</span>
            <span className="text-ink-700 truncate">{guide.title}</span>
          </div>
        </div>
      </div>

      <section className="bg-gradient-to-b from-ink-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/compare"
            className="inline-flex items-center gap-1.5 text-sm text-ink-500 hover:text-primary-600 mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            All comparisons
          </Link>
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-primary-50 px-3 py-1 rounded-full text-xs font-medium text-primary-700 mb-4">
              <GitCompareArrows className="h-3.5 w-3.5" />
              Side-by-side reading
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-ink-900 mb-4 leading-tight">
              {guide.title}
            </h1>
            <p className="text-lg text-primary-700 font-medium mb-5">
              {guide.subtitle}
            </p>
            <p className="text-lg text-ink-600 leading-relaxed max-w-3xl mb-6">
              {guide.summary}
            </p>
            <div className="flex flex-wrap gap-2">
              {guide.searchTerms.map((term) => (
                <span
                  key={term}
                  className="text-xs bg-white border border-ink-100 text-ink-600 rounded-full px-2.5 py-1"
                >
                  {term}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <AdBanner slot="compare-top" format="horizontal" />
      </div>

      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          <ArtifactPanel
            artifact={left}
            label="Left side"
            note="This is the object that opens the comparison."
          />
          <ArtifactPanel
            artifact={right}
            label="Right side"
            note="This is the object that sharpens the contrast."
          />
        </div>

        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-ink-900 mb-4">
            Why this comparison matters
          </h2>
          <p className="text-ink-600 leading-relaxed max-w-4xl whitespace-pre-line">
            {guide.overview}
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-ink-900 mb-4">
            Side-by-side
          </h2>
          <div className="overflow-hidden rounded-2xl border border-ink-100 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-3 bg-ink-50 border-b border-ink-100 text-xs font-semibold uppercase tracking-wider text-ink-500">
              <div className="px-5 py-3">Dimension</div>
              <div className="px-5 py-3">{left.name}</div>
              <div className="px-5 py-3">{right.name}</div>
            </div>
            {guide.axes.map((axis) => (
              <div
                key={axis.label}
                className="grid grid-cols-1 md:grid-cols-3 border-b border-ink-100 last:border-b-0"
              >
                <div className="px-5 py-4 font-semibold text-ink-900 bg-ink-50/50 md:bg-transparent">
                  {axis.label}
                </div>
                <div className="px-5 py-4 text-ink-600 leading-relaxed">
                  {axis.left}
                </div>
                <div className="px-5 py-4 text-ink-600 leading-relaxed">
                  {axis.right}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-ink-900 mb-4 flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary-500" />
            What to remember
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {guide.takeaways.map((takeaway) => (
              <div
                key={takeaway}
                className="rounded-2xl bg-primary-50 border border-primary-100 p-5 text-sm text-ink-700 leading-relaxed"
              >
                {takeaway}
              </div>
            ))}
          </div>
        </section>

        {supportingArtifacts.length > 0 && (
          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold text-ink-900 mb-4">
              Supporting objects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportingArtifacts.map((artifact) => (
                <ArtifactCard key={artifact.slug} artifact={artifact} />
              ))}
            </div>
          </section>
        )}

        {relatedTopics.length > 0 && (
          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold text-ink-900 mb-4 flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-primary-500" />
              Related themes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedTopics.map((topic) => (
                <TopicCard key={topic!.slug} topic={topic!} />
              ))}
            </div>
          </section>
        )}

        <AdBanner
          slot="compare-mid"
          format="horizontal"
          className="mb-12"
        />

        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-ink-900 mb-4 flex items-center gap-2">
            <HelpCircle className="h-6 w-6 text-primary-500" />
            Frequently asked questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
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
        </section>
      </article>
    </>
  );
}
