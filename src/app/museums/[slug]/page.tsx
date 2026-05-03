import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MapPin,
  Clock,
  Ticket,
  ExternalLink,
  ArrowLeft,
  Archive,
  Star,
} from "lucide-react";
import { museums, getMuseumBySlug } from "@/data/museums";
import { getArtifactsByMuseum } from "@/data/artifacts";
import ArtifactCard from "@/components/ArtifactCard";
import AdBanner from "@/components/AdBanner";
import { absoluteUrl } from "@/lib/site";
import { getImageSourceLabel } from "@/lib/content";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return museums.map((museum) => ({
    slug: museum.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const museum = getMuseumBySlug(params.slug);
  if (!museum) return { title: "Museum Not Found" };

  return {
    title: `${museum.name} — Visitor Guide & Collections`,
    description: museum.description,
    alternates: {
      canonical: `/museums/${museum.slug}`,
    },
    openGraph: {
      title: `${museum.name} | AncientEchoes`,
      description: museum.description,
      url: absoluteUrl(`/museums/${museum.slug}`),
      type: "article",
      images: [
        {
          url: museum.image,
          alt: museum.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${museum.name} — Visitor Guide & Collections`,
      description: museum.description,
      images: [museum.image],
    },
  };
}

export default function MuseumDetailPage({ params }: PageProps) {
  const museum = getMuseumBySlug(params.slug);
  if (!museum) notFound();

  const museumArtifacts = getArtifactsByMuseum(museum.slug);
  const museumJsonLd = {
    "@context": "https://schema.org",
    "@type": "Museum",
    name: museum.name,
    description: museum.description,
    image: museum.image,
    url: absoluteUrl(`/museums/${museum.slug}`),
    address: {
      "@type": "PostalAddress",
      addressLocality: museum.city,
      addressRegion: museum.province,
      addressCountry: "CN",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      description: museum.visitInfo.hours,
    },
    isAccessibleForFree: museum.visitInfo.admission.toLowerCase().includes("free"),
    sameAs: museum.visitInfo.website,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(museumJsonLd) }}
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
              href="/museums"
              className="hover:text-primary-600 transition-colors"
            >
              Museums
            </Link>
            <span>/</span>
            <span className="text-ink-700 truncate">{museum.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Back */}
        <Link
          href="/museums"
          className="inline-flex items-center gap-1.5 text-sm text-ink-500 hover:text-primary-600 transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          All Museums
        </Link>

        {/* Hero image */}
        <figure className="mb-10 rounded-2xl overflow-hidden border border-ink-100 bg-ink-50 shadow-sm">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={museum.image}
            alt={museum.name}
            className="w-full h-[280px] md:h-[420px] object-cover"
          />
          {museum.imageCredit && (
            <figcaption className="px-4 py-2 text-xs text-ink-400 bg-white border-t border-ink-100">
              {museum.imageCredit.author
                ? `${museum.imageCredit.author} · `
                : ""}
              <span className="font-medium text-ink-500">
                {museum.imageCredit.license}
              </span>
              {" · "}
              {museum.imageCredit.sourceUrl ? (
                <a
                  href={museum.imageCredit.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-600"
                >
                  {getImageSourceLabel(museum.imageCredit.source)}
                </a>
              ) : (
                getImageSourceLabel(museum.imageCredit.source)
              )}
            </figcaption>
          )}
        </figure>

        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="h-4 w-4 text-primary-600" />
              <span className="text-sm text-ink-500">
                {museum.city}, {museum.province}
              </span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ink-900 leading-tight mb-6">
              {museum.name}
            </h1>
            <p className="text-lg text-ink-600 leading-relaxed mb-6">
              {museum.longDescription}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <Archive className="h-5 w-5 text-primary-500" />
                <div>
                  <p className="text-sm font-bold text-ink-800">
                    {museum.artifactCount.toLocaleString()}
                  </p>
                  <p className="text-xs text-ink-400">Collection items</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visit Info Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-ink-100 rounded-xl p-6 shadow-sm sticky top-20">
              <h3 className="font-display text-lg font-bold text-ink-900 mb-4">
                Visit Information
              </h3>
              <dl className="space-y-4">
                <div>
                  <dt className="text-xs text-ink-400 uppercase tracking-wider flex items-center gap-1">
                    <Clock className="h-3 w-3" /> Opening Hours
                  </dt>
                  <dd className="text-sm font-medium text-ink-800 mt-0.5">
                    {museum.visitInfo.hours}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-ink-400 uppercase tracking-wider flex items-center gap-1">
                    <Ticket className="h-3 w-3" /> Admission
                  </dt>
                  <dd className="text-sm font-medium text-ink-800 mt-0.5">
                    {museum.visitInfo.admission}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-ink-400 uppercase tracking-wider">
                    Website
                  </dt>
                  <dd className="mt-0.5">
                    <a
                      href={museum.visitInfo.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      Official Site
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </dd>
                </div>
              </dl>

              {/* Highlights */}
              <div className="mt-6 pt-6 border-t border-ink-100">
                <h4 className="text-xs text-ink-400 uppercase tracking-wider mb-3 flex items-center gap-1">
                  <Star className="h-3 w-3" /> Must-See Highlights
                </h4>
                <ul className="space-y-2">
                  {museum.highlights.map((h) => (
                    <li
                      key={h}
                      className="text-sm text-ink-700 flex items-start gap-2"
                    >
                      <span className="text-primary-500 mt-1">•</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Ad */}
        <AdBanner slot="museum-detail" format="horizontal" className="mb-10" />

        {/* Artifacts from this museum */}
        {museumArtifacts.length > 0 && (
          <section>
            <h2 className="font-display text-2xl font-bold text-ink-900 mb-6">
              Notable Artifacts at This Museum
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {museumArtifacts.map((artifact) => (
                <ArtifactCard key={artifact.slug} artifact={artifact} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
