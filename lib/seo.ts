const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.lacreativo.com";

export const metadataBase = new URL(siteUrl);

export const canonicalUrl = (path: string) => {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalizedPath, siteUrl).toString();
};
