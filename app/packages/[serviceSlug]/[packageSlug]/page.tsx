import type { Metadata } from "next";
import { notFound } from "next/navigation";

import OrderNowButton from "@/components/OrderNowButton";
import Section from "@/components/Section";
import { packagesByServiceSlug } from "@/data/packages";
import { servicesWithCategory } from "@/data/services";

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
    };
  }

  return {
    title: `${selectedPackage.name} | ${service.name} | LA CREATIVO`,
    description: `Overview of the ${selectedPackage.name} package for ${service.name}, including inclusions, timeline, and ordering details.`,
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

  return (
    <div>
      <Section
        tone="dark"
        padding="lg"
        eyebrow="Package decision"
        title={selectedPackage.name}
        description={selectedPackage.summary}
      >
        <div className="mt-5 flex items-end gap-4">
          <span className="text-sm uppercase tracking-[0.25em] text-dark-foreground/60">
            Starting at
          </span>
          <p className="text-4xl font-semibold text-accent sm:text-5xl">
            {selectedPackage.startingPrice}
          </p>
        </div>
        <p className="mt-4 max-w-2xl text-sm text-dark-foreground/70">
          You are one step away from a clean scope, predictable timeline, and
          a delivery process built for confident execution.
        </p>
        <div className="mt-6">
          <OrderNowButton
            href="/thank-you/order"
            size="md"
            packageId={selectedPackage.slug}
            service={service.slug}
          >
            Order Now
          </OrderNowButton>
        </div>
      </Section>

      <Section
        eyebrow="What you get"
        title="10 included deliverables"
        description="Everything below is included in this package with no distractions and no hidden add-ons."
      >
        <div className="card-premium rounded-3xl border border-border bg-card p-6 text-sm">
          <ul className="grid gap-4 lg:grid-cols-2">
            {selectedPackage.includes.map((item) => (
              <li key={item.title} className="rounded-2xl border border-border/60 p-4">
                <p className="text-sm font-semibold text-foreground">{item.title}</p>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section
        eyebrow="After payment"
        title="Simple process, clear milestones"
        description={`Typical timeline: ${selectedPackage.timeline}. You always know the next step.`}
      >
        <ol className="grid gap-4 text-sm text-muted-foreground md:grid-cols-5">
          {[
            "Order is confirmed.",
            "Kickoff details collected.",
            "First delivery prepared.",
            "Revisions completed.",
            "Final files delivered.",
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

      <Section tone="dark" padding="md" title="Ready to order this package?">
        <OrderNowButton
          href="/thank-you/order"
          packageId={selectedPackage.slug}
          service={service.slug}
          size="md"
        >
          Order Now
        </OrderNowButton>
      </Section>
    </div>
  );
}
