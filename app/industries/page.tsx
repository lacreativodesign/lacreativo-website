import type { Metadata } from "next";

import Button from "@/components/Button";
import Card from "@/components/Card";
import LeadCaptureSection from "@/components/LeadCaptureSection";
import Section from "@/components/Section";
import { industries } from "@/data/industries";

export const metadata: Metadata = {
  title: "Industries We Serve | LA CREATIVO",
  description:
    "Explore industry-specific solutions built for USA small businesses, including dedicated creative support for fast-growing teams.",
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
                >
                  View Industry
                </Button>
              }
            />
          ))}
        </div>
      </Section>

      <LeadCaptureSection
        title="Need help choosing the right industry path?"
        description="Share your business type and goals, and we’ll point you to the best-fit services and packages."
        ctaLabel="Get my recommendation"
      />
    </div>
  );
}
