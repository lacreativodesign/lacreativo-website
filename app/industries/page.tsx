import type { Metadata } from "next";

import Button from "@/components/Button";
import Card from "@/components/Card";
import Section from "@/components/Section";
import { industries } from "@/data/industries";
import { canonicalUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Industries We Serve | LA CREATIVO",
  description:
    "Explore industry-specific solutions built for USA small businesses, including dedicated creative support for fast-growing teams.",
  alternates: {
    canonical: canonicalUrl("/industries"),
  },
};

export default function IndustriesPage() {
  return (
    <div>
      <Section
        tone="dark"
        padding="lg"
        eyebrow="Industries"
        title="Industries we serve"
        description="Explore industry-specific guidance, recommended services, and a direct path to request support."
      />

      <Section
        eyebrow="Browse industries"
        title="Find your industry"
        description="Each industry page includes challenges, mapped services, and a direct path to request support."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <Card
              key={industry.slug}
              title={industry.name}
              description={industry.descriptor}
              icon={industry.icon}
              cta={
                <Button
                  href={`/industries/${industry.slug}`}
                  variant="secondary"
                  size="sm"
                  prefetch={false}
                >
                  View Industry
                </Button>
              }
            />
          ))}
        </div>
      </Section>

      <Section tone="muted" padding="sm">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Explore all services</h2>
            <p className="text-sm text-muted-foreground">
              Review every service category before choosing a package.
            </p>
          </div>
          <Button href="/services">Browse Services</Button>
        </div>
      </Section>
    </div>
  );
}
