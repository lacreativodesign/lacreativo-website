import type { Metadata } from "next";

import Button from "@/components/Button";
import Card from "@/components/Card";
import Section from "@/components/Section";
import { serviceCategories } from "@/data/services";
import { canonicalUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "All Services | LA CREATIVO",
  description:
    "Browse every LA CREATIVO service category built for USA small businesses, from websites to marketing, SEO, and automation.",
  alternates: {
    canonical: canonicalUrl("/services"),
  },
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
                <Button
                  href={`/services/${category.slug}`}
                  variant="secondary"
                  size="sm"
                  prefetch={false}
                >
                  View Details
                </Button>
              }
            />
          ))}
        </div>
      </Section>

      <Section tone="muted" padding="sm">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Not sure where to start?</h2>
            <p className="text-sm text-muted-foreground">
              Tell us your goals and we’ll recommend the best service category within one business day.
            </p>
          </div>
          <Button href="/get-started">Get My Recommendation</Button>
        </div>
      </Section>
    </div>
  );
}
