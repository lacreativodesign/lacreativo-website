import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Button from "@/components/Button";
import Card from "@/components/Card";
import Section from "@/components/Section";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { buildServiceTemplate } from "@/data/serviceContent";
import { categoryBySlug } from "@/data/services";
import { canonicalUrl } from "@/lib/seo";

type ServicePageProps = {
  params: Promise<{ service: string }>;
};

const category = categoryBySlug.get("website-design-development");

export function generateStaticParams() {
  if (!category) {
    return [];
  }

  return category.services.map((service) => ({ service: service.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { service: serviceSlug } = await params;
  const service = category?.services.find((item) => item.slug === serviceSlug);

  if (!category || !service) {
    return {
      title: "Website Service | LA CREATIVO",
      description:
        "Explore LA CREATIVO website services built for USA small businesses.",
      alternates: {
        canonical: canonicalUrl("/services/website-design-development"),
      },
    };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: canonicalUrl(`/services/website-design-development/${service.slug}`),
    },
  };
}

export default async function WebsiteServicePage({ params }: ServicePageProps) {
  if (!category) {
    notFound();
  }

  const { service: serviceSlug } = await params;
  const service = category.services.find((item) => item.slug === serviceSlug);

  if (!service) {
    notFound();
  }

  const templateData = buildServiceTemplate(service);
  const relatedServices = category.services
    .filter((item) => item.slug !== service.slug)
    .slice(0, 4);

  return (
    <div>
      <ServicePageTemplate {...templateData} />

      <Section
        tone="muted"
        eyebrow="Related services"
        title="Need something adjacent?"
        description="These related services pair well if you want a more complete launch plan."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {relatedServices.map((item) => (
            <Card
              key={item.slug}
              title={item.name}
              description={item.description}
              icon="✦"
              cta={
                <Button
                  href={`/services/${category.slug}/${item.slug}`}
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

      <Section tone="dark" padding="md">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">
              Back to {category.name}
            </h2>
            <p className="text-sm text-dark-foreground/70">
              Compare all {category.name.toLowerCase()} options before you decide.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href={`/services/${category.slug}`} variant="secondary">
              View Category
            </Button>
            <Button href="/services" variant="ghost">
              Browse all services
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
