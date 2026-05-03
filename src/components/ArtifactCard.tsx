import Link from "next/link";
import { type Artifact } from "@/data/artifacts";
import { MapPin, Clock, Sparkles } from "lucide-react";

interface ArtifactCardProps {
  artifact: Artifact;
  featured?: boolean;
}

function ArtifactImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  if (src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} className={`object-cover w-full h-full ${className}`} loading="lazy" />;
  }
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <Sparkles className="h-10 w-10 text-primary-200" />
    </div>
  );
}

export default function ArtifactCard({
  artifact,
  featured = false,
}: ArtifactCardProps) {
  if (featured) {
    return (
      <Link
        href={`/artifacts/${artifact.slug}`}
        className="group block card-hover rounded-2xl overflow-hidden bg-white border border-ink-100 shadow-sm"
      >
        <div className="grid md:grid-cols-2 gap-0">
          <div className="aspect-[4/3] md:aspect-auto bg-gradient-to-br from-primary-100 to-primary-200 relative overflow-hidden min-h-[280px]">
            <ArtifactImage src={artifact.image} alt={artifact.name} className="group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="p-8 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-3">
              <span className="dynasty-tag text-xs font-medium text-primary-800 px-2.5 py-1 rounded-full">
                {artifact.dynasty}
              </span>
              <span className="text-xs text-ink-400">{artifact.category}</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-ink-900 mb-3 group-hover:text-primary-700 transition-colors leading-tight">
              {artifact.name}
            </h3>
            <p className="text-sm text-ink-500 mb-4 line-clamp-3 leading-relaxed">
              {artifact.description}
            </p>
            <div className="flex items-center gap-4 text-xs text-ink-400">
              <span className="flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5" />
                {artifact.museumName}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {artifact.period}
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/artifacts/${artifact.slug}`}
      className="group block card-hover rounded-xl overflow-hidden bg-white border border-ink-100 shadow-sm"
    >
      <div className="aspect-[4/3] bg-gradient-to-br from-primary-50 to-primary-100 relative overflow-hidden">
        <ArtifactImage src={artifact.image} alt={artifact.name} className="group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute top-3 left-3 z-10">
          <span className="dynasty-tag text-xs font-medium text-primary-800 px-2 py-0.5 rounded-full backdrop-blur-sm">
            {artifact.dynasty}
          </span>
        </div>
      </div>
      <div className="p-5">
        <p className="text-xs text-ink-400 mb-1.5">{artifact.category}</p>
        <h3 className="font-display text-lg font-bold text-ink-900 mb-2 group-hover:text-primary-700 transition-colors leading-snug line-clamp-2">
          {artifact.name}
        </h3>
        <p className="text-sm text-ink-500 line-clamp-2 leading-relaxed mb-3">
          {artifact.description}
        </p>
        <div className="flex items-center gap-1.5 text-xs text-ink-400">
          <MapPin className="h-3 w-3" />
          <span className="truncate">{artifact.museumName}</span>
        </div>
      </div>
    </Link>
  );
}
