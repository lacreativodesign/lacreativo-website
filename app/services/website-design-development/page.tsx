import type { Metadata } from "next";
import { notFound } from "next/navigation";

import CategoryPageContent from "@/app/services/categoryPageContent";
import { categoryBySlug } from "@/data/services";
import { canonicalUrl } from "@/lib/seo";

const category = categoryBySlug.get("website-design-development");

export const metadata: Metadata = {
  title: category?.metaTitle ?? "Website Design & Development | LA CREATIVO",
  description:
    category?.metaDescription ??
    "Premium website design and development for USA small businesses with clear scope and fast delivery.",
  alternates: {
    canonical: canonicalUrl("/services/website-design-development"),
  },
};

export default function WebsiteDesignDevelopmentPage() {
  if (!category) {
    notFound();
  }

  return <CategoryPageContent category={category} />;
}
