import { artifacts } from "@/data/artifacts";
import { museums } from "@/data/museums";
import { topics } from "@/data/topics";
import { popCultureWorks } from "@/data/popCultureWorks";
import { abroadArtifacts } from "@/data/abroadArtifacts";

export type SearchEntryKind =
  | "artifact"
  | "museum"
  | "topic"
  | "inspiration"
  | "abroad";

export interface SearchEntry {
  id: string; // "artifact:terracotta-warriors"
  kind: SearchEntryKind;
  title: string;
  subtitle: string; // short label shown under the title
  url: string;
  // lowercased haystack of searchable fields
  haystack: string;
}

const KIND_LABEL: Record<SearchEntryKind, string> = {
  artifact: "Artifact",
  museum: "Museum",
  topic: "Theme",
  inspiration: "Inspiration",
  abroad: "Abroad",
};

export function getKindLabel(kind: SearchEntryKind): string {
  return KIND_LABEL[kind];
}

function norm(...parts: Array<string | undefined | null>): string {
  return parts
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

export const searchIndex: SearchEntry[] = [
  ...artifacts.map<SearchEntry>((a) => ({
    id: `artifact:${a.slug}`,
    kind: "artifact",
    title: a.name,
    subtitle: `${a.dynasty} · ${a.museumName}`,
    url: `/artifacts/${a.slug}`,
    haystack: norm(
      a.name,
      a.dynasty,
      a.category,
      a.period,
      a.museumName,
      a.description,
      ...(a.funFacts ?? []),
    ),
  })),
  ...museums.map<SearchEntry>((m) => ({
    id: `museum:${m.slug}`,
    kind: "museum",
    title: m.name,
    subtitle: `${m.city}, ${m.province}`,
    url: `/museums/${m.slug}`,
    haystack: norm(m.name, m.city, m.province, m.description),
  })),
  ...topics.map<SearchEntry>((t) => ({
    id: `topic:${t.slug}`,
    kind: "topic",
    title: t.title,
    subtitle: t.subtitle ?? "Theme",
    url: `/topics/${t.slug}`,
    haystack: norm(t.title, t.subtitle, t.summary, t.longDescription),
  })),
  ...popCultureWorks.map<SearchEntry>((w) => ({
    id: `inspiration:${w.slug}`,
    kind: "inspiration",
    title: w.title,
    subtitle: `${w.year}${w.studio ? " · " + w.studio : ""}`,
    url: `/inspirations/${w.slug}`,
    haystack: norm(w.title, w.studio, w.summary, w.medium),
  })),
  ...abroadArtifacts.map<SearchEntry>((a) => ({
    id: `abroad:${a.slug}`,
    kind: "abroad",
    title: a.title,
    subtitle: `${a.period.split("(")[0].trim()} · ${a.sourceMuseum.shortName}`,
    url: `/treasures-abroad/${a.slug}`,
    haystack: norm(
      a.title,
      a.chineseTitle,
      a.period,
      a.medium,
      a.classification,
      a.summary,
      a.sourceMuseum.name,
      ...a.tags,
    ),
  })),
];

/**
 * Naive substring-AND search: every whitespace-separated token must appear
 * somewhere in the haystack. Results ranked by: exact title prefix match
 * first, then title contains, then body hit.
 */
export function search(query: string, limit = 12): SearchEntry[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const tokens = q.split(/\s+/).filter(Boolean);
  if (tokens.length === 0) return [];

  const scored: Array<{ entry: SearchEntry; score: number }> = [];
  for (const entry of searchIndex) {
    const titleLower = entry.title.toLowerCase();
    let ok = true;
    for (const t of tokens) {
      if (!entry.haystack.includes(t)) {
        ok = false;
        break;
      }
    }
    if (!ok) continue;

    let score = 0;
    if (titleLower.startsWith(q)) score += 100;
    if (titleLower.includes(q)) score += 40;
    for (const t of tokens) {
      if (titleLower.includes(t)) score += 10;
    }
    // prefer shorter titles slightly, as they tend to be more canonical hits
    score -= Math.min(20, entry.title.length / 5);
    scored.push({ entry, score });
  }

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((s) => s.entry);
}
