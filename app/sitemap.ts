import type { MetadataRoute } from "next";
import { industries } from "@/data/industries";
import { packagesByServiceSlug } from "@/data/packages";
import { serviceCategories, servicesWithCategory } from "@/data/services";
import { websiteDesignPackages } from "@/app/services/website-design-development/packagesData";

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
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";
  const lastModified = new Date();

  const urls: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/services`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/privacy-policy`, lastModified, changeFrequency: "yearly", priority: 0.4 },
    { url: `${siteUrl}/terms-and-conditions`, lastModified, changeFrequency: "yearly", priority: 0.4 },
    { url: `${siteUrl}/work-with-us`, lastModified, changeFrequency: "yearly", priority: 0.5 },
    { url: `${siteUrl}/client-login`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    ...staticSlugs.map((slug) => ({
      url: `${siteUrl}/${slug}`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
    })),
    ...serviceCategories.map((category) => ({
      url: `${siteUrl}/services/${category.slug}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    })),
    ...servicesWithCategory.map((service) => ({
      url: `${siteUrl}/services/${service.category.slug}/${service.slug}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    })),
    ...Object.entries(packagesByServiceSlug).flatMap(([serviceSlug, packages]) =>
      packages.map((pkg) => ({
        url: `${siteUrl}/packages/${serviceSlug}/${pkg.slug}`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.6,
      }))
    ),
    ...websiteDesignPackages.map((pkg) => ({
      url: `${siteUrl}/services/website-design-development/packages/${pkg.slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    })),
    ...industries.map((industry) => ({
      url: `${siteUrl}/industries/${industry.slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    })),
  ];

  return urls;
}
