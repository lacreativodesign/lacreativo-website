import type { Metadata } from "next";
import { notFound } from "next/navigation";

import CategoryPageContent from "@/app/services/categoryPageContent";
import { categoryBySlug, serviceCategories } from "@/data/services";
import { canonicalUrl } from "@/lib/seo";

type CategoryPageProps = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return serviceCategories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = categoryBySlug.get(categorySlug);

  if (!category) {
    return {
      title: "Service Category | LA CREATIVO",
      description:
        "Explore LA CREATIVO service categories designed for USA small businesses.",
      alternates: {
        canonical: canonicalUrl("/services"),
      },
    };
  }

  return {
    title: category.metaTitle,
    description: category.metaDescription,
    alternates: {
      canonical: canonicalUrl(`/services/${category.slug}`),
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params;
  const category = categoryBySlug.get(categorySlug);

  if (!category) {
    notFound();
  }

  return <CategoryPageContent category={category} />;
}
