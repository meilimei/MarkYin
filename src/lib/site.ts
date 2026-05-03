export const SITE_URL = "https://chinaheritageguide.netlify.app";
export const SITE_NAME = "AncientEchoes";

export function absoluteUrl(path = "/") {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
