import { artifacts, type Artifact } from "@/data/artifacts";
import {
  popCultureWorks,
  type PopCultureWork,
} from "@/data/popCultureWorks";
import { topics, type Topic } from "@/data/topics";

export function getArtifactsForWork(
  work: PopCultureWork,
): { artifact: Artifact; connection: string }[] {
  return work.artifactRefs
    .map((ref) => {
      const artifact = artifacts.find((a) => a.slug === ref.artifactSlug);
      if (!artifact) return null;
      return { artifact, connection: ref.connection };
    })
    .filter(
      (x): x is { artifact: Artifact; connection: string } => x !== null,
    );
}

export function getArtifactsForTopic(topic: Topic): Artifact[] {
  return topic.artifactSlugs
    .map((slug) => artifacts.find((a) => a.slug === slug))
    .filter((x): x is Artifact => x !== undefined);
}

export function getWorksForTopic(topic: Topic): PopCultureWork[] {
  if (!topic.relatedWorkSlugs) return [];
  return topic.relatedWorkSlugs
    .map((slug) => popCultureWorks.find((w) => w.slug === slug))
    .filter((x): x is PopCultureWork => x !== undefined);
}

export function getTopicsForWork(work: PopCultureWork): Topic[] {
  if (!work.topicSlugs) return [];
  return work.topicSlugs
    .map((slug) => topics.find((t) => t.slug === slug))
    .filter((x): x is Topic => x !== undefined);
}

export function getWorksForArtifactSlug(slug: string): PopCultureWork[] {
  return popCultureWorks.filter((w) =>
    w.artifactRefs.some((r) => r.artifactSlug === slug),
  );
}

export function getTopicsForArtifactSlug(slug: string): Topic[] {
  return topics.filter((t) => t.artifactSlugs.includes(slug));
}

export function getMuseumsForTopic(topic: Topic): string[] {
  const museumNames = new Set<string>();
  for (const slug of topic.artifactSlugs) {
    const artifact = artifacts.find((a) => a.slug === slug);
    if (artifact) museumNames.add(artifact.museumName);
  }
  return Array.from(museumNames);
}
