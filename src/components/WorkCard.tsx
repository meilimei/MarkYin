import Link from "next/link";
import { Clapperboard, Gamepad2, Tv, BookOpen, Music, Film } from "lucide-react";
import { mediumLabels, type PopCultureWork } from "@/data/popCultureWorks";

const mediumIcons = {
  game: Gamepad2,
  film: Film,
  tv: Tv,
  anime: Clapperboard,
  music: Music,
  book: BookOpen,
};

interface WorkCardProps {
  work: PopCultureWork;
  featured?: boolean;
}

export default function WorkCard({ work, featured = false }: WorkCardProps) {
  const Icon = mediumIcons[work.medium];
  const isExternal = work.heroImage.startsWith("http");

  if (featured) {
    return (
      <Link
        href={`/inspirations/${work.slug}`}
        className="group block card-hover rounded-2xl overflow-hidden bg-white border border-ink-100 shadow-sm"
      >
        <div className="grid md:grid-cols-2 gap-0">
          <div className="aspect-[4/3] md:aspect-auto bg-gradient-to-br from-ink-900 to-primary-900 relative overflow-hidden min-h-[280px]">
            {isExternal && (
              <img
                src={work.heroImage}
                alt={work.title}
                className="object-cover w-full h-full opacity-90 group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            )}
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-xs font-semibold text-ink-800 px-2.5 py-1 rounded-full">
                <Icon className="h-3.5 w-3.5" />
                {mediumLabels[work.medium]}
              </span>
            </div>
          </div>
          <div className="p-8 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-3 text-xs text-ink-400">
              <span>{work.year}</span>
              {work.studio && (
                <>
                  <span>·</span>
                  <span>{work.studio}</span>
                </>
              )}
            </div>
            <h3 className="font-display text-2xl font-bold text-ink-900 mb-3 group-hover:text-primary-700 transition-colors leading-tight">
              {work.title}
            </h3>
            <p className="text-sm text-ink-500 mb-4 line-clamp-3 leading-relaxed">
              {work.summary}
            </p>
            <p className="text-sm font-medium text-primary-600">
              {work.artifactRefs.length} real artifacts referenced →
            </p>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/inspirations/${work.slug}`}
      className="group block card-hover rounded-xl overflow-hidden bg-white border border-ink-100 shadow-sm"
    >
      <div className="aspect-[4/3] bg-gradient-to-br from-ink-900 to-primary-900 relative overflow-hidden">
        {isExternal && (
          <img
            src={work.heroImage}
            alt={work.title}
            className="object-cover w-full h-full opacity-90 group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        )}
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-flex items-center gap-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-ink-800 px-2 py-0.5 rounded-full">
            <Icon className="h-3 w-3" />
            {mediumLabels[work.medium]}
          </span>
        </div>
      </div>
      <div className="p-5">
        <p className="text-xs text-ink-400 mb-1.5">
          {work.year}
          {work.studio && ` · ${work.studio}`}
        </p>
        <h3 className="font-display text-lg font-bold text-ink-900 mb-2 group-hover:text-primary-700 transition-colors leading-snug line-clamp-2">
          {work.title}
        </h3>
        <p className="text-sm text-ink-500 line-clamp-2 leading-relaxed mb-3">
          {work.summary}
        </p>
        <p className="text-xs font-medium text-primary-600">
          {work.artifactRefs.length} artifact{work.artifactRefs.length === 1 ? "" : "s"} →
        </p>
      </div>
    </Link>
  );
}
