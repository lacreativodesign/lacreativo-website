"use client";

import { useMemo, useState } from "react";

import Button from "@/components/Button";
import LeadCaptureSection from "@/components/LeadCaptureSection";
import OrderNowButton from "@/components/OrderNowButton";
import Section from "@/components/Section";
import { packagesByServiceSlug } from "@/data/packages";

type ComboTab = "website" | "branding" | "content" | "retainer";

type TabConfig = {
  id: ComboTab;
  label: string;
  serviceSlug: string;
  title: string;
  description: string;
};

const tabConfig: TabConfig[] = [
  {
    id: "website",
    label: "Website",
    serviceSlug: "wordpress",
    title: "Website combo-ready packages",
    description: "Pick a website package and move straight into ordering.",
  },
  {
    id: "branding",
    label: "Branding",
    serviceSlug: "logo-design",
    title: "Branding combo-ready packages",
    description: "Choose your branding scope with clear fixed pricing.",
  },
  {
    id: "content",
    label: "Content",
    serviceSlug: "copywriting",
    title: "Content combo-ready packages",
    description: "Select content support built for launch momentum.",
  },
  {
    id: "retainer",
    label: "Retainer",
    serviceSlug: "bizosto",
    title: "Retainer-style operational packages",
    description: "Ongoing setup support designed for reliable execution.",
  },
];

export default function ComboPackagesPage() {
  const [activeTab, setActiveTab] = useState<ComboTab>("website");

  const activeConfig = useMemo(
    () => tabConfig.find((tab) => tab.id === activeTab) ?? tabConfig[0],
    [activeTab]
  );

  const packages = packagesByServiceSlug[activeConfig.serviceSlug] ?? [];

  return (
    <div>
      <Section
        tone="dark"
        padding="lg"
        eyebrow="Combo packages"
        title="Pick a package and order with confidence"
        description="Use the tabs to compare package options by category without leaving the page."
      >
        <div className="flex flex-wrap gap-3">
          {tabConfig.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  isActive
                    ? "border-accent bg-accent text-accent-foreground"
                    : "border-dark-foreground/20 text-dark-foreground/70 hover:border-dark-foreground/60 hover:text-dark-foreground"
                }`}
                aria-pressed={isActive}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </Section>

      <Section title={activeConfig.title} description={activeConfig.description}>
        <div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {packages.map((item) => (
              <article
                key={item.slug}
                className="card-premium flex h-full flex-col gap-4 rounded-3xl border border-border bg-card p-6 text-sm"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h2 className="text-base font-semibold">{item.name}</h2>
                  <p className="text-base font-semibold text-accent">
                    {item.startingPrice}
                  </p>
                </div>

                <ul className="grid min-h-[250px] grid-rows-10 gap-1 text-[11px] text-muted-foreground">
                  {item.includes.map((include) => (
                    <li key={include.title} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      <span className="truncate whitespace-nowrap">
                        {include.title}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-col gap-2">
                  <Button
                    href={`/packages/${activeConfig.serviceSlug}/${item.slug}`}
                    variant="secondary"
                    size="md"
                  >
                    View Details
                  </Button>
                  <OrderNowButton
                    href="/thank-you/order"
                    packageId={item.slug}
                    service={activeConfig.serviceSlug}
                    size="md"
                  >
                    Order Now
                  </OrderNowButton>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <LeadCaptureSection
        title="Need a tailored package mix?"
        description="Tell us what you are launching and we’ll recommend the leanest combo to hit your goals."
        ctaLabel="Get my combo plan"
      />
    </div>
  );
}
