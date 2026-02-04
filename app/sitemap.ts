import { MetadataRoute } from "next";

import { industries } from "@/data/industries";
import { packagesByServiceSlug } from "@/data/packages";
import { serviceCategories } from "@/data/services";
import { websiteDesignPackages } from "@/app/services/website-design-development/packagesData";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.lacreativo.com";

const staticSlugs = [
  "about-us",
  "how-it-works",
  "portfolio",
  "testimonials",
  "contact",
  "combo-packages",
  "resources",
  "reseller-program",
  "affiliate-program",
  "careers",
  "get-started",
  "guarantees",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified, changeFrequency: "yearly", priority: 1.0 },
    {
      url: `${siteUrl}/services`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/industries`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/work-with-us`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${siteUrl}/privacy-policy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${siteUrl}/terms-and-conditions`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];

  const staticPageRoutes = staticSlugs.map((slug) => ({
    url: `${siteUrl}/${slug}`,
    lastModified,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  const industryRoutes = industries.map((industry) => ({
    url: `${siteUrl}/industries/${industry.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const categoryRoutes = serviceCategories.map((category) => ({
    url: `${siteUrl}/services/${category.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const serviceRoutes = serviceCategories.flatMap((category) =>
    category.services.map((service) => ({
      url: `${siteUrl}/services/${category.slug}/${service.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  );

  const packageRoutes = Object.entries(packagesByServiceSlug).flatMap(
    ([serviceSlug, packages]) =>
      packages.map((pkg) => ({
        url: `${siteUrl}/packages/${serviceSlug}/${pkg.slug}`,
        lastModified,
        changeFrequency: "monthly" as const,
        priority: 0.6,
      }))
  );

  const websitePackageRoutes = websiteDesignPackages.map((pkg) => ({
    url: `${siteUrl}/services/website-design-development/packages/${pkg.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...staticPageRoutes,
    ...industryRoutes,
    ...categoryRoutes,
    ...serviceRoutes,
    ...packageRoutes,
    ...websitePackageRoutes,
  ];
}
