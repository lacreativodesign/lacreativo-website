import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Button from "@/components/Button";
import OrderNowButton from "@/components/OrderNowButton";
import Section from "@/components/Section";

import { websiteDesignPackages } from "../../packagesData";

type PackagePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return websiteDesignPackages.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: PackagePageProps): Promise<Metadata> {
  const { slug } = await params;
  const selectedPackage = websiteDesignPackages.find(
    (item) => item.slug === slug
  );

  if (!selectedPackage) {
    return {
      title: "Website Package | LA CREATIVO",
      description:
        "Explore LA CREATIVO website packages designed for USA small businesses.",
    };
  }

  return {
    title: `${selectedPackage.name} | Website Design & Development | LA CREATIVO`,
    description: selectedPackage.summary,
  };
}

export default async function WebsiteDesignPackagePage({
  params,
}: PackagePageProps) {
  const { slug } = await params;
  const selectedPackage = websiteDesignPackages.find(
    (item) => item.slug === slug
  );

  if (!selectedPackage) {
    notFound();
  }

  return (
    <div>
      <Section
        eyebrow="Website package"
        title={selectedPackage.name}
        description={selectedPackage.summary}
      >
        <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-4 text-sm text-muted-foreground">
            <div className="card-premium rounded-3xl border border-border bg-card p-6 text-sm">
              <div className="flex items-baseline justify-between">
                <h2 className="text-lg font-semibold">Starting at</h2>
                <span className="text-base font-semibold text-accent">
                  {selectedPackage.startingPrice}
                </span>
              </div>
              <p className="mt-3 text-muted-foreground">
                Typical timeline: {selectedPackage.timeline}
              </p>
            </div>
            <p>
              This package is built for teams who want a crisp, conversion-ready
              website without delays or scope creep.
            </p>
            <div className="flex flex-wrap gap-3">
              <OrderNowButton
                href="/services/website-design-development#lead-capture"
                packageId={selectedPackage.slug}
                service="website-design-development"
              >
                Order Now
              </OrderNowButton>
              <Button href="/services/website-design-development" variant="secondary" size="sm">
                View Details
              </Button>
            </div>
          </div>
          <div className="card-premium rounded-3xl border border-border bg-card p-6 text-sm">
            <h3 className="text-lg font-semibold">What’s included</h3>
            <ul className="mt-4 flex flex-col gap-4 text-muted-foreground">
              {selectedPackage.includes.map((item) => (
                <li key={item.title} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-foreground">
                      {item.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
}
