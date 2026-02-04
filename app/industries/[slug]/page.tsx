import type { Metadata } from "next";
import { notFound } from "next/navigation";

import IndustryLandingPage from "@/components/templates/IndustryLandingPage";
import {
  buildIndustryPackageCards,
  buildIndustryServiceCards,
  industryBySlug,
  industries,
} from "@/data/industries";

type IndustryPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({
  params,
}: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = industryBySlug.get(slug);

  if (!industry) {
    return {
      title: "Industry | LA CREATIVO",
      description:
        "Industry-specific creative services for USA small businesses.",
    };
  }

  return {
    title: `${industry.name} Solutions | LA CREATIVO`,
    description: industry.heroSubtext,
  };
}

export default async function IndustryPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = industryBySlug.get(slug);

  if (!industry) {
    notFound();
  }

  return (
    <IndustryLandingPage
      name={industry.name}
      heroHeadline={industry.heroHeadline}
      heroSubtext={industry.heroSubtext}
      problems={industry.problems}
      helpItems={industry.helpItems}
      recommendedServices={buildIndustryServiceCards(
        industry.recommendedServices
      )}
      recommendedPackages={buildIndustryPackageCards(
        industry.recommendedPackages
      )}
      formCtaLabel={industry.formCtaLabel}
    />
  );
}
