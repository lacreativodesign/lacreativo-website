import { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.lacreativo.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes = [
    { url: siteUrl, lastModified, changeFrequency: "yearly" as const, priority: 1.0 },
    {
      url: `${siteUrl}/services`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${siteUrl}/industries`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${siteUrl}/packages`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${siteUrl}/work-with-us`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    },
  ];

  return staticRoutes;
}
