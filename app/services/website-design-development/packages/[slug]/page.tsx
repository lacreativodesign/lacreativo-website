import { notFound } from "next/navigation";

import Button from "@/components/Button";
import Section from "@/components/Section";

import { websiteDesignPackages } from "../../packagesData";

type PackagePageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return websiteDesignPackages.map((item) => ({ slug: item.slug }));
}

export default function WebsiteDesignPackagePage({ params }: PackagePageProps) {
  const selectedPackage = websiteDesignPackages.find(
    (item) => item.slug === params.slug
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
            <Button href="/services/website-design-development#lead-capture">
              Order Now
            </Button>
          </div>
          <div className="card-premium rounded-3xl border border-border bg-card p-6 text-sm">
            <h3 className="text-lg font-semibold">What’s included</h3>
            <ul className="mt-4 flex flex-col gap-3 text-muted-foreground">
              {selectedPackage.includes.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
}
