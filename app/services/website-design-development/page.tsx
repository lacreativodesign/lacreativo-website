import type { Metadata } from "next";
import { notFound } from "next/navigation";

import CategoryPageContent from "@/app/services/categoryPageContent";
import { categoryBySlug } from "@/data/services";

const category = categoryBySlug.get("website-design-development");

export const metadata: Metadata = {
  title: category?.metaTitle ?? "Website Design & Development | LA CREATIVO",
  description:
    category?.metaDescription ??
    "Premium website design and development for USA small businesses with clear scope and fast delivery.",
};

export default function WebsiteDesignDevelopmentPage() {
  if (!category) {
    notFound();
  }

  return <CategoryPageContent category={category} />;
}
