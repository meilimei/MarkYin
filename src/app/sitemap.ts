import type { MetadataRoute } from "next";
import { artifacts } from "@/data/artifacts";
import { museums } from "@/data/museums";
import { popCultureWorks } from "@/data/popCultureWorks";
import { topics } from "@/data/topics";
import { abroadArtifacts } from "@/data/abroadArtifacts";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/inspirations"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: absoluteUrl("/topics"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: absoluteUrl("/artifacts"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/museums"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/treasures-abroad"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/dynasties"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/about"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: absoluteUrl("/methodology"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  const inspirationRoutes: MetadataRoute.Sitemap = popCultureWorks.map(
    (work) => ({
      url: absoluteUrl(`/inspirations/${work.slug}`),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    }),
  );

  const topicRoutes: MetadataRoute.Sitemap = topics.map((topic) => ({
    url: absoluteUrl(`/topics/${topic.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const artifactRoutes: MetadataRoute.Sitemap = artifacts.map((artifact) => ({
    url: absoluteUrl(`/artifacts/${artifact.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const museumRoutes: MetadataRoute.Sitemap = museums.map((museum) => ({
    url: absoluteUrl(`/museums/${museum.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const abroadRoutes: MetadataRoute.Sitemap = abroadArtifacts.map((art) => ({
    url: absoluteUrl(`/treasures-abroad/${art.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  return [
    ...staticRoutes,
    ...inspirationRoutes,
    ...topicRoutes,
    ...artifactRoutes,
    ...museumRoutes,
    ...abroadRoutes,
  ];
}
