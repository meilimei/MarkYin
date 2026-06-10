import { absoluteUrl, SITE_NAME } from "@/lib/site";

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export function absoluteImageUrl(image?: string): string | undefined {
  if (!image) return undefined;
  if (image.startsWith("http://") || image.startsWith("https://")) {
    return image;
  }
  return absoluteUrl(image);
}

export function buildBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function buildPublisherJsonLd() {
  return {
    "@type": "Organization",
    name: SITE_NAME,
    url: absoluteUrl("/"),
  };
}
