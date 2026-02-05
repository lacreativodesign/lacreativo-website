import type { Metadata } from "next";

import Button from "@/components/Button";
import Card from "@/components/Card";
import LeadCaptureSection from "@/components/LeadCaptureSection";
import Section from "@/components/Section";
import { serviceCategories } from "@/data/services";

export const metadata: Metadata = {
  title: "All Services | LA CREATIVO",
  description:
    "Browse every LA CREATIVO service category built for USA small businesses, from websites to marketing, SEO, and automation.",
};

export default function ServicesPage() {
  return (
    <div>
      <Section
        tone="dark"
        padding="lg"
        eyebrow="Services"
        title="Browse every service category"
        description="Explore our full menu of services for USA small businesses. Each category has clear packages, friendly guidance, and fast delivery."
      />

      <Section
        eyebrow="Categories"
        title="Pick the area you want to improve"
        description="Every category includes sub-services, pricing tiers, and a clear path to launch."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {serviceCategories.map((category) => (
            <Card
              key={category.slug}
              title={category.name}
              description={category.description}
              icon="✦"
              cta={
                <Button href={`/services/${category.slug}`} variant="secondary" size="sm">
                  View Details
                </Button>
              }
            />
          ))}
        </div>
      </Section>

      <LeadCaptureSection
        title="Not sure where to start?"
        description="Tell us your goals and we’ll recommend the best service category within one business day."
        ctaLabel="Get my recommendation"
      />
    </div>
  );
}
