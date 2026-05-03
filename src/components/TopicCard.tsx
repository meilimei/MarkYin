import Link from "next/link";
import { Layers } from "lucide-react";
import { type Topic } from "@/data/topics";

interface TopicCardProps {
  topic: Topic;
  featured?: boolean;
}

export default function TopicCard({ topic, featured = false }: TopicCardProps) {
  const isExternal = topic.heroImage.startsWith("http");

  if (featured) {
    return (
      <Link
        href={`/topics/${topic.slug}`}
        className="group block card-hover rounded-2xl overflow-hidden bg-white border border-ink-100 shadow-sm"
      >
        <div className="grid md:grid-cols-5 gap-0">
          <div className="md:col-span-2 aspect-[4/3] md:aspect-auto bg-gradient-to-br from-primary-100 to-primary-200 relative overflow-hidden min-h-[280px]">
            {isExternal && (
              <img
                src={topic.heroImage}
                alt={topic.title}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            )}
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-xs font-semibold text-primary-800 px-2.5 py-1 rounded-full">
                <Layers className="h-3.5 w-3.5" />
                Theme
              </span>
            </div>
          </div>
          <div className="md:col-span-3 p-8 flex flex-col justify-center">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-ink-900 mb-2 group-hover:text-primary-700 transition-colors leading-tight">
              {topic.title}
            </h3>
            {topic.subtitle && (
              <p className="text-sm text-primary-600 font-medium mb-4">
                {topic.subtitle}
              </p>
            )}
            <p className="text-base text-ink-600 mb-5 line-clamp-3 leading-relaxed">
              {topic.summary}
            </p>
            <p className="text-sm font-medium text-primary-600">
              {topic.artifactSlugs.length} artifact
              {topic.artifactSlugs.length === 1 ? "" : "s"} across museums →
            </p>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/topics/${topic.slug}`}
      className="group block card-hover rounded-xl overflow-hidden bg-white border border-ink-100 shadow-sm"
    >
      <div className="aspect-[16/9] bg-gradient-to-br from-primary-100 to-primary-200 relative overflow-hidden">
        {isExternal && (
          <img
            src={topic.heroImage}
            alt={topic.title}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        )}
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-flex items-center gap-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-primary-800 px-2 py-0.5 rounded-full">
            <Layers className="h-3 w-3" />
            Theme
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-bold text-ink-900 mb-1.5 group-hover:text-primary-700 transition-colors leading-snug line-clamp-2">
          {topic.title}
        </h3>
        {topic.subtitle && (
          <p className="text-xs text-primary-600 font-medium mb-2 line-clamp-1">
            {topic.subtitle}
          </p>
        )}
        <p className="text-sm text-ink-500 line-clamp-2 leading-relaxed mb-3">
          {topic.summary}
        </p>
        <p className="text-xs font-medium text-primary-600">
          {topic.artifactSlugs.length} artifact
          {topic.artifactSlugs.length === 1 ? "" : "s"} →
        </p>
      </div>
    </Link>
  );
}
