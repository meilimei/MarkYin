import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ExternalLink,
  Globe,
  MapPin,
  Clock,
  Ruler,
  Palette,
  Info,
  ScrollText,
  HelpCircle,
} from "lucide-react";
import type { AbroadArtifact } from "@/data/abroadArtifacts";
import {
  abroadArtifacts,
  getAbroadArtifactBySlug,
} from "@/data/abroadArtifacts";
import AbroadCard from "@/components/AbroadCard";
import AdBanner from "@/components/AdBanner";
import { absoluteUrl } from "@/lib/site";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return abroadArtifacts.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const art = getAbroadArtifactBySlug(params.slug);
  if (!art) return { title: "Not found" };
  const title = `${art.title} — ${art.sourceMuseum.shortName}`;
  return {
    title,
    description: art.summary,
    alternates: {
      canonical: `/treasures-abroad/${art.slug}`,
    },
    openGraph: {
      title,
      description: art.summary,
      url: absoluteUrl(`/treasures-abroad/${art.slug}`),
      type: "article",
      images: [{ url: art.image, alt: art.title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: art.summary,
      images: [art.image],
    },
  };
}

export default function AbroadArtifactPage({ params }: PageProps) {
  const art = getAbroadArtifactBySlug(params.slug);
  if (!art) notFound();

  // Same museum: deepens topical authority (`Treasures at the Met`, etc.).
  const sameMuseum = abroadArtifacts
    .filter(
      (a) => a.slug !== art.slug && a.sourceMuseum.id === art.sourceMuseum.id,
    )
    .slice(0, 3);

  // Same era / theme: anything sharing at least one tag, excluding pieces
  // already shown in the same-museum block.
  const sameMuseumSlugs = new Set(sameMuseum.map((a) => a.slug));
  const sameEra = abroadArtifacts
    .filter(
      (a) =>
        a.slug !== art.slug &&
        !sameMuseumSlugs.has(a.slug) &&
        a.tags.some((t) => art.tags.includes(t)),
    )
    .slice(0, 3);

  const faqs = buildFaqs(art);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VisualArtwork",
    name: art.title,
    alternateName: art.chineseTitle,
    creator: art.artist
      ? { "@type": "Person", name: art.artist }
      : undefined,
    dateCreated: art.date,
    artMedium: art.medium,
    artform: art.classification,
    image: absoluteUrl(art.image),
    description: art.summary,
    locationCreated: { "@type": "Country", name: "China" },
    isHeldBy: {
      "@type": "Museum",
      name: art.sourceMuseum.name,
      address: {
        "@type": "PostalAddress",
        addressLocality: art.sourceMuseum.city,
        addressCountry: art.sourceMuseum.country,
      },
    },
    sameAs: art.sourceUrl,
    license:
      art.license === "CC0"
        ? "https://creativecommons.org/publicdomain/zero/1.0/"
        : undefined,
  };

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
            <Link href="/" className="hover:text-primary-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/treasures-abroad"
              className="hover:text-primary-600 transition-colors"
            >
              Treasures Abroad
            </Link>
            <span>/</span>
            <span className="text-ink-700 truncate">{art.title}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Link
          href="/treasures-abroad"
          className="inline-flex items-center gap-1.5 text-sm text-ink-500 hover:text-primary-600 transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          All Treasures Abroad
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-12">
          <div className="lg:col-span-2">
            <div className="inline-flex items-center gap-1.5 bg-ink-50 text-xs font-semibold text-ink-600 px-2.5 py-1 rounded-full mb-3">
              <Globe className="h-3 w-3" />
              {art.sourceMuseum.name}
            </div>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ink-900 leading-tight mb-3">
              {art.title}
            </h1>
            {art.chineseTitle && (
              <p className="font-display text-xl text-ink-500 mb-4">
                {art.chineseTitle}
              </p>
            )}
            <p className="text-lg text-ink-600 leading-relaxed">
              {art.summary}
            </p>
          </div>

          {/* Sidebar: Facts */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-ink-100 rounded-xl p-6 shadow-sm sticky top-20">
              <h3 className="font-display text-lg font-bold text-ink-900 mb-4">
                Object Facts
              </h3>
              <dl className="space-y-4 text-sm">
                <FactRow icon={<Clock className="h-3 w-3" />} label="Period">
                  {art.period}
                </FactRow>
                <FactRow
                  icon={<Info className="h-3 w-3" />}
                  label="Date"
                >
                  {art.date}
                </FactRow>
                {art.artist && (
                  <FactRow icon={<Info className="h-3 w-3" />} label="Artist">
                    {art.artist}
                  </FactRow>
                )}
                <FactRow
                  icon={<Palette className="h-3 w-3" />}
                  label="Medium"
                >
                  {art.medium}
                </FactRow>
                <FactRow
                  icon={<Ruler className="h-3 w-3" />}
                  label="Dimensions"
                >
                  {art.dimensions}
                </FactRow>
                <FactRow
                  icon={<MapPin className="h-3 w-3" />}
                  label="Held by"
                >
                  {art.sourceMuseum.name}
                  <br />
                  <span className="text-ink-400">
                    {art.sourceMuseum.city}, {art.sourceMuseum.country}
                  </span>
                </FactRow>
                <FactRow
                  icon={<ScrollText className="h-3 w-3" />}
                  label="Accession"
                >
                  {art.accessionNumber}
                  <br />
                  <span className="text-ink-400">{art.creditLine}</span>
                </FactRow>
              </dl>
              <a
                href={art.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
              >
                View on {art.sourceMuseum.shortName}
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <figure className="mb-10 rounded-2xl overflow-hidden border border-ink-100 bg-ink-50 shadow-sm">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={art.image}
            alt={art.title}
            className="w-full max-h-[720px] object-contain bg-ink-900"
          />
          <figcaption className="px-4 py-2 text-xs text-ink-400 bg-white border-t border-ink-100">
            <span className="font-medium text-ink-500">{art.license}</span>
            {" · "}
            Image courtesy of {art.sourceMuseum.name}
            {" · "}
            <a
              href={art.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-600"
            >
              source record
            </a>
          </figcaption>
        </figure>

        {/* Significance */}
        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold text-ink-900 mb-3">
            Why it matters
          </h2>
          <p className="text-ink-600 leading-relaxed">{art.significance}</p>
        </section>

        {/* Ad */}
        <AdBanner
          slot="abroad-detail-mid"
          format="horizontal"
          className="mb-10"
        />

        {/* Journey */}
        <section className="mb-10">
          <h2 className="font-display text-2xl font-bold text-ink-900 mb-3">
            How it travelled
          </h2>
          <p className="text-ink-600 leading-relaxed">{art.journey}</p>
        </section>

        {/* FAQ — visible HTML matched 1:1 with FAQPage JSON-LD above */}
        {faqs.length > 0 && (
          <section className="mb-12">
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
                  <p className="text-ink-600 leading-relaxed text-sm mt-3">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* Tags */}
        <div className="mb-12 flex flex-wrap gap-2">
          {art.tags.map((t) => (
            <span
              key={t}
              className="bg-ink-50 text-ink-600 text-xs font-medium px-2.5 py-1 rounded-full"
            >
              #{t}
            </span>
          ))}
        </div>

        {/* Same-museum block — keeps users browsing within {museum} */}
        {sameMuseum.length > 0 && (
          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold text-ink-900 mb-2">
              More Chinese pieces at {art.sourceMuseum.shortName}
            </h2>
            <p className="text-sm text-ink-500 mb-6">
              Other Chinese works in the {art.sourceMuseum.name} collection.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sameMuseum.map((r) => (
                <AbroadCard key={r.slug} artifact={r} />
              ))}
            </div>
          </section>
        )}

        {/* Same-era / same-tag block — encourages dynastic browsing */}
        {sameEra.length > 0 && (
          <section className="mb-4">
            <h2 className="font-display text-2xl font-bold text-ink-900 mb-2">
              From the same era
            </h2>
            <p className="text-sm text-ink-500 mb-6">
              Other treasures abroad sharing themes or period with this work.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sameEra.map((r) => (
                <AbroadCard key={r.slug} artifact={r} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}

/**
 * Build 4–5 frequently-asked questions from the artifact's structured data.
 * The strings are emitted both as visible HTML (for users) and as FAQPage
 * JSON-LD (for Google rich results). Per Google's guidelines, both must
 * match — that is why we generate them in one place.
 */
function buildFaqs(art: AbroadArtifact): { q: string; a: string }[] {
  const faqs: { q: string; a: string }[] = [];

  faqs.push({
    q: `Where can I see ${art.title}?`,
    a: `${art.title} is held by the ${art.sourceMuseum.name} in ${art.sourceMuseum.city}, ${art.sourceMuseum.country}. Accession number ${art.accessionNumber}. Online catalogue record: ${art.sourceUrl}.`,
  });

  faqs.push({
    q: `When was ${art.title} created?`,
    a: `${art.title} dates to ${art.date}, during the ${art.period}.`,
  });

  if (art.artist) {
    faqs.push({
      q: `Who made ${art.title}?`,
      a: `${art.title} is attributed to ${art.artist}. The work is a ${art.objectName.toLowerCase()} executed in ${art.medium.toLowerCase()}.`,
    });
  } else {
    faqs.push({
      q: `What is ${art.title} made of?`,
      a: `${art.title} is a ${art.objectName.toLowerCase()} executed in ${art.medium.toLowerCase()}, measuring ${art.dimensions}.`,
    });
  }

  faqs.push({
    q: `How did ${art.title} end up at the ${art.sourceMuseum.shortName}?`,
    a: art.journey,
  });

  faqs.push({
    q: `Can I reuse the photograph of ${art.title}?`,
    a:
      art.license === "CC0"
        ? `Yes. The ${art.sourceMuseum.shortName} has released the image under Creative Commons Zero (CC0), so it is free for any use, commercial or non-commercial, with no attribution required (though attribution is appreciated).`
        : art.license.startsWith("CC BY-SA")
          ? `Yes, with conditions. The image is licensed ${art.license}: free to share and adapt with attribution to the ${art.sourceMuseum.shortName}, and any derivative works must use the same licence.`
          : `The image is in the public domain and free for any use. Crediting the ${art.sourceMuseum.shortName} is encouraged but not required.`,
  });

  return faqs;
}

function FactRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <dt className="text-xs text-ink-400 uppercase tracking-wider flex items-center gap-1">
        {icon}
        {label}
      </dt>
      <dd className="text-sm font-medium text-ink-800 mt-0.5">{children}</dd>
    </div>
  );
}
