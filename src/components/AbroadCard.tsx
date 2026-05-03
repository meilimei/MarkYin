import Link from "next/link";
import { Globe, Landmark } from "lucide-react";
import { type AbroadArtifact } from "@/data/abroadArtifacts";

interface AbroadCardProps {
  artifact: AbroadArtifact;
}

export default function AbroadCard({ artifact }: AbroadCardProps) {
  return (
    <Link
      href={`/treasures-abroad/${artifact.slug}`}
      className="group block card-hover rounded-xl overflow-hidden bg-white border border-ink-100 shadow-sm"
    >
      <div className="aspect-[4/3] bg-gradient-to-br from-ink-50 to-primary-50 relative overflow-hidden">
        {artifact.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={artifact.image}
            alt={artifact.title}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <Landmark className="h-10 w-10 text-primary-200" />
          </div>
        )}
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-flex items-center gap-1 bg-white/95 backdrop-blur-sm text-xs font-semibold text-ink-800 px-2 py-0.5 rounded-full">
            <Globe className="h-3 w-3" />
            {artifact.sourceMuseum.shortName}
          </span>
        </div>
      </div>
      <div className="p-5">
        <p className="text-xs text-ink-400 mb-1.5">
          {artifact.period.split("(")[0].trim()}
          {" · "}
          {artifact.classification}
        </p>
        <h3 className="font-display text-lg font-bold text-ink-900 mb-1 group-hover:text-primary-700 transition-colors leading-snug line-clamp-2">
          {artifact.title}
        </h3>
        {artifact.chineseTitle && (
          <p className="text-sm text-ink-400 mb-2 font-display">
            {artifact.chineseTitle}
          </p>
        )}
        <p className="text-sm text-ink-500 line-clamp-3 leading-relaxed">
          {artifact.summary}
        </p>
      </div>
    </Link>
  );
}
