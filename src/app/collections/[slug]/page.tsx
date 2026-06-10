import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Building2,
  ExternalLink,
  HelpCircle,
  MapPin,
  Search,
  Sparkles,
} from "lucide-react";
import {
  collectionGuides,
  getCollectionArtifacts,
  getCollectionGuideBySlug,
} from "@/data/collectionGuides";
import AbroadCard from "@/components/AbroadCard";
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

interface Faq {
  q: string;
  a: string;
}

export async function generateStaticParams() {
  return collectionGuides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const guide = getCollectionGuideBySlug(params.slug);
  if (!guide) return { title: "Collection Guide Not Found" };

  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical: `/collections/${guide.slug}` },
    openGraph: {
      title: guide.title,
      description: guide.description,
      url: absoluteUrl(`/collections/${guide.slug}`),
      type: "article",
      images: [
        {
          url: "/images/abroad/night-shining-white.jpg",
          alt: guide.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: guide.title,
      description: guide.description,
    },
  };
}

function buildFaqs(
  guide: NonNullable<ReturnType<typeof getCollectionGuideBySlug>>,
  items: ReturnType<typeof getCollectionArtifacts>,
): Faq[] {
  const topItems = items.slice(0, 4).map((item) => item.title).join(", ");

  return [
    {
      q: `What is the ${guide.shortTitle} Chinese collection best known for?`,
      a:
        guide.whyItMatters +
        ` The strongest themes here are ${guide.highlights
          .slice(0, 3)
          .join(", ")}.`,
    },
    {
      q: `Which objects should I start with?`,
      a:
        items.length > 0
          ? `Start with ${topItems}. These pieces give you the fastest read on the collection's core strengths.`
          : "This guide is still being assembled.",
    },
    {
      q: `Can I use this page to plan a visit?`,
      a:
        "Yes. It is designed as a quick orientation page before you check the museum's current hours, gallery numbers, and ticket rules.",
    },
    {
      q: `Why does this page focus on search intent?`,
      a:
        "Museum-name searches are some of the highest-intent queries in heritage SEO. This page gives those searches a direct answer and then sends readers into object-level detail.",
    },
    {
      q: `Are the object records connected to source catalogs?`,
      a:
        "Yes. Every object card links to the underlying record or collection page, and the surrounding context is written to help you read those records faster.",
    },
  ];
}

export default function CollectionGuidePage({ params }: PageProps) {
  const guide = getCollectionGuideBySlug(params.slug);
  if (!guide) notFound();

  const items = getCollectionArtifacts(guide.sourceMuseumId);
  const faqs = buildFaqs(guide, items);
  const pageUrl = absoluteUrl(`/collections/${guide.slug}`);
  const imageUrl = absoluteImageUrl("/images/abroad/night-shining-white.jpg");

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Collections", path: "/collections" },
    { name: guide.title, path: `/collections/${guide.slug}` },
  ]);

  const itemListJsonLd = {
    "@type": "ItemList",
    name: guide.title,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.title,
      url: absoluteUrl(`/treasures-abroad/${item.slug}`),
    })),
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
    "@type": "CollectionPage",
    name: guide.title,
    description: guide.description,
    url: pageUrl,
    image: imageUrl,
    publisher: buildPublisherJsonLd(),
    about: {
      "@type": "Museum",
      name: guide.museumName,
      address: {
        "@type": "PostalAddress",
        addressLocality: guide.city,
        addressCountry: guide.country,
      },
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
              href="/collections"
              className="hover:text-primary-600 transition-colors"
            >
              Collections
            </Link>
            <span>/</span>
            <span className="text-ink-700 truncate">{guide.title}</span>
          </div>
        </div>
      </div>

      <section className="bg-gradient-to-b from-ink-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/collections"
            className="inline-flex items-center gap-1.5 text-sm text-ink-500 hover:text-primary-600 mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            All collection guides
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            <div className="lg:col-span-3">
              <div className="inline-flex items-center gap-2 bg-primary-50 px-3 py-1 rounded-full text-xs font-medium text-primary-700 mb-4">
                <Building2 className="h-3.5 w-3.5" />
                {guide.museumName}
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-ink-900 mb-4 leading-tight">
                {guide.title}
              </h1>
              <p className="text-lg text-ink-600 leading-relaxed mb-6">
                {guide.intro}
              </p>
              <p className="text-base text-ink-600 leading-relaxed mb-6">
                {guide.whyItMatters}
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-ink-500">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-primary-500" />
                  {guide.city}, {guide.country}
                </span>
                <span>•</span>
                <span className="inline-flex items-center gap-1.5">
                  <Search className="h-4 w-4 text-primary-500" />
                  {guide.searchIntent.join(" | ")}
                </span>
              </div>
            </div>
            <div className="lg:col-span-2 rounded-3xl overflow-hidden bg-gradient-to-br from-imperial-950 via-ink-900 to-primary-950 text-white p-6 shadow-xl">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-3 py-1 text-xs font-semibold text-primary-200 mb-4">
                <Sparkles className="h-3.5 w-3.5" />
                Quick route
              </div>
              <h2 className="font-display text-2xl font-bold mb-4">
                Start here, then drill into objects
              </h2>
              <ul className="space-y-3 text-sm text-ink-200">
                {guide.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-primary-300 mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <AdBanner slot="collection-guide-top" format="horizontal" />
      </div>

      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-ink-900 mb-4">
                Why this collection pulls search traffic
              </h2>
              <p className="text-ink-600 leading-relaxed">
                {guide.whyItMatters}
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-ink-900 mb-4">
                Search intent this page covers
              </h2>
              <div className="flex flex-wrap gap-2">
                {guide.searchIntent.map((term) => (
                  <span
                    key={term}
                    className="text-xs bg-ink-50 border border-ink-100 text-ink-600 rounded-full px-2.5 py-1"
                  >
                    {term}
                  </span>
                ))}
              </div>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-ink-900 mb-4">
                Objects in this guide
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {items.map((item) => (
                  <AbroadCard key={item.slug} artifact={item} />
                ))}
              </div>
            </section>

            <AdBanner
              slot="collection-guide-sidebar"
              format="horizontal"
              className="mb-10"
            />

            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-ink-900 mb-4 flex items-center gap-2">
                <HelpCircle className="h-6 w-6 text-primary-500" />
                Frequently Asked Questions
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
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-20 space-y-6">
              <div className="bg-white border border-ink-100 rounded-xl p-6 shadow-sm">
                <h3 className="font-display text-lg font-bold text-ink-900 mb-4">
                  Guide at a glance
                </h3>
                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="text-xs text-ink-400 uppercase tracking-wider">
                      Museum
                    </dt>
                    <dd className="text-ink-800 font-medium mt-0.5">
                      {guide.museumName}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-ink-400 uppercase tracking-wider">
                      City
                    </dt>
                    <dd className="text-ink-800 font-medium mt-0.5">
                      {guide.city}, {guide.country}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-ink-400 uppercase tracking-wider">
                      Objects
                    </dt>
                    <dd className="text-ink-800 font-medium mt-0.5">
                      {items.length}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="bg-ink-50 border border-ink-100 rounded-xl p-6">
                <h3 className="font-display text-sm font-bold text-ink-700 uppercase tracking-wider mb-3">
                  Visitor tips
                </h3>
                <ul className="space-y-2 text-sm text-ink-600">
                  {guide.visitorTips.map((tip) => (
                    <li key={tip} className="flex items-start gap-2">
                      <span className="text-primary-500 mt-0.5">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl bg-gradient-to-br from-imperial-950 via-ink-900 to-primary-950 text-white p-6">
                <h3 className="font-display text-lg font-bold mb-3">
                  Next step
                </h3>
                <p className="text-sm text-ink-200 leading-relaxed mb-4">
                  Use the object pages to move from museum-level discovery to
                  item-level research.
                </p>
                <Link
                  href="/treasures-abroad"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-primary-200 hover:text-white transition-colors"
                >
                  Browse all abroad treasures
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </article>
    </>
  );
}
