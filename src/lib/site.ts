export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://chinaheritageguide.com";
export const SITE_NAME = "China Heritage";

export function absoluteUrl(path = "/") {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
