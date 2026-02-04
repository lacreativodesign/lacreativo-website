"use client";

import { useState } from "react";

import Button from "@/components/Button";
import Section from "@/components/Section";

type PackageTab = "website" | "ecommerce" | "branding" | "marketing";

const tabs: Array<{ id: PackageTab; label: string }> = [
  { id: "website", label: "Website" },
  { id: "ecommerce", label: "E-Commerce" },
  { id: "branding", label: "Branding" },
  { id: "marketing", label: "Marketing" },
];

const packageLinks: Record<PackageTab, string> = {
  website: "/services/website-design-development",
  ecommerce: "/services/ecommerce",
  branding: "/services/branding",
  marketing: "/services/marketing",
};

const packageData: Record<
  PackageTab,
  {
    title: string;
    description: string;
    packages: Array<{
      name: string;
      price: string;
      summary: string;
      highlights: string[];
    }>;
  }
> = {
  website: {
    title: "Website design packages",
    description:
      "Polished sites for small businesses that need a clear, conversion-ready home.",
    packages: [
      {
        name: "Starter Site",
        price: "$499",
        summary: "Single-page site with focused sections.",
        highlights: ["Launch-ready structure", "Mobile-first layout", "Copy guidance"],
      },
      {
        name: "Growth Site",
        price: "$1,499",
        summary: "Multi-page build with conversion flow.",
        highlights: ["Up to 5 pages", "Custom visuals", "SEO-ready setup"],
      },
      {
        name: "Premium Site",
        price: "$2,499",
        summary: "Full storytelling site with launch support.",
        highlights: ["Strategy session", "Custom animations", "Launch support"],
      },
    ],
  },
  ecommerce: {
    title: "E-commerce packages",
    description:
      "Conversion-ready storefronts for confident online selling.",
    packages: [
      {
        name: "Starter Store",
        price: "$1,200",
        summary: "Clean storefront with streamlined checkout.",
        highlights: ["Product setup", "Checkout configuration", "Launch support"],
      },
      {
        name: "Growth Store",
        price: "$2,400",
        summary: "Mid-size catalog with merchandising help.",
        highlights: ["Up to 50 products", "Collection structure", "Analytics ready"],
      },
      {
        name: "Premium Store",
        price: "$3,900",
        summary: "Advanced build with custom flows.",
        highlights: ["Custom layouts", "Performance tuning", "Priority support"],
      },
    ],
  },
  branding: {
    title: "Branding packages",
    description:
      "Cohesive identity systems that make your business feel established.",
    packages: [
      {
        name: "Logo Starter",
        price: "$450",
        summary: "Professional logo with core marks.",
        highlights: ["Primary logo", "Alternate marks", "Color palette"],
      },
      {
        name: "Identity Suite",
        price: "$900",
        summary: "Full visual identity and type pairing.",
        highlights: ["Logo system", "Typography", "Usage guidance"],
      },
      {
        name: "Brand Toolkit",
        price: "$1,300",
        summary: "Expanded identity with launch assets.",
        highlights: ["Brand guide", "Social templates", "Print-ready files"],
      },
    ],
  },
  marketing: {
    title: "Marketing packages",
    description:
      "Clear marketing plans designed to keep leads flowing.",
    packages: [
      {
        name: "Marketing Starter",
        price: "$650",
        summary: "Quick-start roadmap with priority channels.",
        highlights: ["Channel plan", "Messaging map", "Action checklist"],
      },
      {
        name: "Growth Strategy",
        price: "$1,050",
        summary: "Deeper strategy with funnel guidance.",
        highlights: ["Lead funnel", "Campaign plan", "Timeline guidance"],
      },
      {
        name: "Lead Accelerator",
        price: "$1,450",
        summary: "Lead gen setup with conversion flow.",
        highlights: ["Offer positioning", "Lead capture", "Reporting setup"],
      },
    ],
  },
};

export default function PackagesSection() {
  const [activeTab, setActiveTab] = useState<PackageTab>("website");
  const activeContent = packageData[activeTab];
  const activeLink = packageLinks[activeTab];

  return (
    <Section
      id="packages"
      tone="muted"
      eyebrow="Packages"
      title="Pick your starting package"
      description="Switch service types to see simple packages with clear next steps."
    >
      <div className="flex flex-wrap gap-3">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`tab-button rounded-full border px-4 py-2 text-sm transition ${
                isActive
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border bg-card text-muted-foreground hover:border-accent/50"
              }`}
              data-active={isActive}
              aria-pressed={isActive}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <p className="text-xs text-muted-foreground">
        All packages are flexible starting points. Upgrade anytime.
      </p>
      <p className="text-xs text-muted-foreground">
        Need help choosing? We’ll recommend the best fit within 24 hours.
      </p>

      <div key={activeTab} className="tab-panel rounded-3xl border border-border bg-card p-6 text-sm">
        <h3 className="text-lg font-semibold">{activeContent.title}</h3>
        <p className="mt-2 text-muted-foreground">
          {activeContent.description}
        </p>
      </div>

      <div key={`${activeTab}-grid`} className="tab-panel grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {activeContent.packages.map((item) => (
          <div
            key={item.name}
            className="card-premium hover-lift flex h-full flex-col gap-4 rounded-3xl border border-border bg-card p-6 text-sm"
          >
            <div className="flex items-baseline justify-between">
              <h4 className="text-base font-semibold">{item.name}</h4>
              <span className="text-sm font-semibold text-accent">
                {item.price}
              </span>
            </div>
            <p className="text-muted-foreground">{item.summary}</p>
            <ul className="reveal-stagger flex flex-1 flex-col gap-2 text-xs text-muted-foreground">
              {item.highlights.map((highlight) => (
                <li key={highlight} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            <Button href="/get-started" size="sm">
              Start this package
            </Button>
            <a
              href={activeLink}
              className="text-xs font-semibold text-muted-foreground transition hover:text-foreground"
            >
              View what’s included →
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
}
