import Link from "next/link";
import { type Museum } from "@/data/museums";
import { MapPin, Archive, Landmark } from "lucide-react";

interface MuseumCardProps {
  museum: Museum;
}

export default function MuseumCard({ museum }: MuseumCardProps) {
  return (
    <Link
      href={`/museums/${museum.slug}`}
      className="group block card-hover rounded-xl overflow-hidden bg-white border border-ink-100 shadow-sm"
    >
      <div className="aspect-[16/9] bg-gradient-to-br from-ink-50 to-ink-100 relative overflow-hidden">
        {museum.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={museum.image} alt={museum.name} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" loading="lazy" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <Landmark className="h-12 w-12 text-ink-200" />
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-bold text-ink-900 mb-2 group-hover:text-primary-700 transition-colors leading-snug">
          {museum.name}
        </h3>
        <p className="text-sm text-ink-500 line-clamp-2 leading-relaxed mb-4">
          {museum.description}
        </p>
        <div className="flex items-center justify-between text-xs text-ink-400">
          <span className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" />
            {museum.city}, {museum.province}
          </span>
          <span className="flex items-center gap-1.5">
            <Archive className="h-3.5 w-3.5" />
            {museum.artifactCount.toLocaleString()} items
          </span>
        </div>
      </div>
    </Link>
  );
}
