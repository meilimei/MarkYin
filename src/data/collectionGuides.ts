import {
  abroadArtifacts,
  type AbroadSource,
  type AbroadArtifact,
} from "@/data/abroadArtifacts";

export interface CollectionGuide {
  slug: string;
  title: string;
  shortTitle: string;
  museumName: string;
  sourceMuseumId: AbroadSource;
  city: string;
  country: string;
  description: string;
  intro: string;
  whyItMatters: string;
  searchIntent: string[];
  highlights: string[];
  visitorTips: string[];
}

export const collectionGuides: CollectionGuide[] = [
  {
    slug: "chinese-artifacts-at-the-met",
    title: "Chinese Artifacts at The Met",
    shortTitle: "The Met",
    museumName: "The Metropolitan Museum of Art",
    sourceMuseumId: "met",
    city: "New York",
    country: "USA",
    description:
      "A curator-style guide to The Met's Chinese collection, from Tang horses and Yuan blue-and-white to Qing jade, Buddhist sculpture, and literati painting.",
    intro:
      "The Metropolitan Museum of Art holds one of the strongest Chinese art collections outside Asia. Its open-access records make it a perfect entry point for readers who want to move from search curiosity to serious object study. The pieces below are not random highlights; they are a compact route through the collection's core strengths.",
    whyItMatters:
      "The Met is a search magnet because it combines authority, open images, and strong object metadata. A single collection page can satisfy visitors looking for Chinese artifacts at The Met, Chinese ceramics in New York, or Chinese Buddhist sculpture in an American museum.",
    searchIntent: [
      "Chinese artifacts at The Met",
      "The Metropolitan Museum of Art Chinese collection",
      "Met Chinese art highlights",
      "Chinese ceramics New York museum",
    ],
    highlights: [
      "Night-Shining White and Tang horse culture",
      "Yuan and Ming porcelain chronology",
      "Qing jade and court portraiture",
      "Buddhist sculpture from North China",
    ],
    visitorTips: [
      "Use the accession numbers and source links to jump into the museum catalog.",
      "Pair this page with the object pages to compare period, medium, and provenance.",
      "The collection changes slowly, but gallery placement can shift, so verify before visiting.",
    ],
  },
  {
    slug: "chinese-artifacts-at-the-british-museum",
    title: "Chinese Artifacts at the British Museum",
    shortTitle: "British Museum",
    museumName: "The British Museum",
    sourceMuseumId: "british-museum",
    city: "London",
    country: "United Kingdom",
    description:
      "A focused route through the British Museum's Chinese objects, including the Diamond Sutra, Tang sculpture, Yuan porcelain, and early Buddhist masterpieces.",
    intro:
      "The British Museum is one of the most important places to study Chinese art outside China, especially for viewers interested in manuscripts, sculpture, and the history of collecting. Its holdings also make the provenance story visible, because many of the pieces entered the museum during the age of imperial collecting and expeditionary archaeology.",
    whyItMatters:
      "This page answers a high-intent query with a single, structured path into the museum's Chinese collection. It is ideal for travelers, students, and readers trying to understand how Chinese heritage is represented in London.",
    searchIntent: [
      "Chinese artifacts at the British Museum",
      "British Museum Chinese collection",
      "Diamond Sutra British Museum",
      "Chinese sculpture London museum",
    ],
    highlights: [
      "Diamond Sutra and the history of printing",
      "Liao sancai sculpture",
      "Yuan blue-and-white porcelain",
      "Sui and Tang Buddhist works",
    ],
    visitorTips: [
      "This collection is strongest for Buddhist art, ceramics, and manuscript history.",
      "Read the object histories closely, because many entries are tied to excavation and export history.",
      "The museum's online collection is a good first stop before an in-person visit.",
    ],
  },
  {
    slug: "chinese-artifacts-at-the-cleveland-museum-of-art",
    title: "Chinese Artifacts at the Cleveland Museum of Art",
    shortTitle: "Cleveland Museum",
    museumName: "The Cleveland Museum of Art",
    sourceMuseumId: "cleveland",
    city: "Cleveland",
    country: "USA",
    description:
      "A practical guide to the Cleveland Museum of Art's Chinese holdings, with strong painting, ceramics, and ritual bronze material.",
    intro:
      "Cleveland is a quieter search target than New York or London, which makes it a surprisingly strong SEO opportunity. The museum's Chinese collection is especially rich in literati painting, Song and Yuan ceramics, and ritual bronzes that reward close reading.",
    whyItMatters:
      "For visitors searching a second-tier American museum with first-rate Chinese art, Cleveland gives a precise answer. It also creates a strong internal link path between museum pages and object detail pages.",
    searchIntent: [
      "Chinese artifacts at the Cleveland Museum of Art",
      "Cleveland Museum of Art Chinese collection",
      "Chinese painting Cleveland museum",
      "Song and Ming ceramics Cleveland",
    ],
    highlights: [
      "Song and Yuan landscape painting",
      "Ming doucai and imperial ceramics",
      "Shang and Zhou bronze ritual vessels",
      "Long-format handscrolls and bird-and-flower painting",
    ],
    visitorTips: [
      "Use this page if you want a museum visit route with fewer crowds and more room for object study.",
      "The collection is especially good for comparing painting styles across the Song, Yuan, and Ming.",
      "The museum's open access records make it useful for classroom and research use.",
    ],
  },
];

export function getCollectionGuideBySlug(slug: string) {
  return collectionGuides.find((guide) => guide.slug === slug);
}

export function getCollectionArtifacts(
  sourceMuseumId: AbroadSource,
): AbroadArtifact[] {
  return abroadArtifacts.filter(
    (artifact) => artifact.sourceMuseum.id === sourceMuseumId,
  );
}
