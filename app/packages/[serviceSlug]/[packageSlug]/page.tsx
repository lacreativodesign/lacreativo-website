import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Button from "@/components/Button";
import Section from "@/components/Section";
import { getPrimaryIndustryLinkForService } from "@/data/industries";
import { packagesByServiceSlug } from "@/data/packages";
import { servicesWithCategory } from "@/data/services";
import { canonicalUrl } from "@/lib/seo";

type PackagePageProps = {
  params: Promise<{ serviceSlug: string; packageSlug: string }>;
};

export function generateStaticParams() {
  return Object.entries(packagesByServiceSlug).flatMap(
    ([serviceSlug, packages]) =>
      packages.map((pkg) => ({
        serviceSlug,
        packageSlug: pkg.slug,
      }))
  );
}

export async function generateMetadata({
  params,
}: PackagePageProps): Promise<Metadata> {
  const { serviceSlug, packageSlug } = await params;
  const service = servicesWithCategory.find((item) => item.slug === serviceSlug);
  const packages = packagesByServiceSlug[serviceSlug] ?? [];
  const selectedPackage = packages.find(
    (item) => item.slug === packageSlug
  );

  if (!service || !selectedPackage) {
    return {
      title: "Package | LA CREATIVO",
      description:
        "Explore LA CREATIVO packages built for USA small businesses.",
      alternates: {
        canonical: canonicalUrl("/services"),
      },
    };
  }

  return {
    title: `${selectedPackage.name} | ${service.name} | LA CREATIVO`,
    description: `Overview of the ${selectedPackage.name} package for ${service.name}, including inclusions, timeline, and ordering details.`,
    alternates: {
      canonical: canonicalUrl(`/packages/${service.slug}/${selectedPackage.slug}`),
    },
  };
}

export default async function PackagePage({ params }: PackagePageProps) {
  const { serviceSlug, packageSlug } = await params;
  const service = servicesWithCategory.find((item) => item.slug === serviceSlug);
  const packages = packagesByServiceSlug[serviceSlug] ?? [];
  const selectedPackage = packages.find(
    (item) => item.slug === packageSlug
  );

  if (!service || !selectedPackage) {
    notFound();
  }

  const siblings = packages
    .filter((item) => item.slug !== selectedPackage.slug)
    .slice(0, 3);
  const serviceHref = `/services/${service.category.slug}/${service.slug}`;
  const primaryIndustry = getPrimaryIndustryLinkForService(service.slug);

  return (
    <div>
      <Section
        tone="dark"
        padding="lg"
        eyebrow="Package"
        title={selectedPackage.name}
        description={selectedPackage.summary}
      >
        <div className="mt-6 flex flex-wrap gap-4">
          <Button href={`${serviceHref}#lead-capture`} size="lg">
            Order Now
          </Button>
          <Button href={serviceHref} variant="secondary" size="lg">
            Back to {service.name}
          </Button>
        </div>
        <div className="mt-4 flex flex-wrap gap-3 text-xs text-dark-foreground/60">
          <span>100% satisfaction guaranteed</span>
          <span>You own everything we build</span>
          <span>No hidden fees or surprise add-ons</span>
        </div>
      </Section>

      <Section
        eyebrow="Package overview"
        title="What’s included"
        description="A focused scope with everything you need to move forward confidently."
      >
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-4 text-sm text-muted-foreground">
            <p>
              This package keeps the scope clean and delivers a premium result without
              unnecessary delays. You’ll get structured checkpoints, clear communication,
              and a launch-ready outcome tailored to USA small business needs.
            </p>
            <p>
              We stay focused on what matters most: clarity, momentum, and a finished
              deliverable you can use immediately.
            </p>
          </div>
          <div className="card-premium rounded-3xl border border-border bg-card p-6 text-sm">
            <h3 className="text-lg font-semibold">Inclusions</h3>
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

      <Section
        tone="muted"
        eyebrow="Timeline"
        title="Simple, predictable delivery"
        description="We confirm timing after kickoff, but this is the typical range."
      >
        <div className="card-premium rounded-3xl border border-border bg-card p-6 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Estimated timeline
            </span>
            <span className="text-base font-semibold text-accent">
              {selectedPackage.timeline}
            </span>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="What happens after you order"
        title="A short, five-step flow"
        description="Clear checkpoints so you always know what’s next."
      >
        <ol className="grid gap-4 text-sm text-muted-foreground md:grid-cols-2">
          {[
            "Order placed and confirmation sent.",
            "Intake form and kickoff call.",
            "First draft delivered for review.",
            "Revision round(s) based on your feedback.",
            "Final delivery and launch support.",
          ].map((step, index) => (
            <li
              key={step}
              className="card-premium flex flex-col gap-3 rounded-3xl border border-border bg-card p-6"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                Step {index + 1}
              </span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </Section>

      {primaryIndustry && (
        <Section
          eyebrow="Best fit"
          title="This package works best for"
          description="A quick reassurance before you pick the scope."
        >
          <div className="flex flex-col gap-4 text-sm text-muted-foreground">
            <p>
              This package is a strong fit for {primaryIndustry.label.toLowerCase()} teams who
              want {service.name.toLowerCase()} support with a clear, guided scope.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href={primaryIndustry.href} variant="secondary" size="sm">
                Explore {primaryIndustry.label}
              </Button>
              <Button
                href={serviceHref}
                variant="secondary"
                size="sm"
                prefetch={false}
              >
                Back to {service.name}
              </Button>
            </div>
          </div>
        </Section>
      )}

      <Section
        eyebrow="Related packages"
        title="Compare similar options"
        description="Look at a few sibling packages if you want a different scope."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {siblings.map((item) => (
            <div
              key={item.slug}
              className="card-premium flex h-full flex-col gap-3 rounded-3xl border border-border bg-card p-5 text-sm"
            >
              <h3 className="text-base font-semibold">{item.name}</h3>
              <p className="text-muted-foreground">{item.summary}</p>
              <Button
                href={`/packages/${service.slug}/${item.slug}`}
                size="sm"
                prefetch={false}
              >
                View Details
              </Button>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="dark" padding="md">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Ready to move forward?</h2>
            <p className="text-sm text-dark-foreground/70">
              Place your order now or request a recommendation within one business day.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href={`${serviceHref}#lead-capture`}>Order Now</Button>
            <Button href={serviceHref} variant="secondary">
              Back to service
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
