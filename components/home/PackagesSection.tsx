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
        highlights: [
          "Single page",
          "Core sections",
          "Lead capture",
          "Mobile first",
          "Brand styling",
          "Basic SEO",
          "Copy guidance",
          "Launch checklist",
          "QA review",
          "Handoff support",
        ],
      },
      {
        name: "Growth Site",
        price: "$1,499",
        summary: "Multi-page build with conversion flow.",
        highlights: [
          "Five pages",
          "Custom visuals",
          "Lead capture",
          "Conversion flow",
          "Mobile first",
          "Basic SEO",
          "Analytics setup",
          "Content guidance",
          "QA review",
          "Handoff support",
        ],
      },
      {
        name: "Premium Site",
        price: "$2,499",
        summary: "Full storytelling site with launch support.",
        highlights: [
          "Story pages",
          "Custom visuals",
          "Conversion flow",
          "Mobile first",
          "Advanced polish",
          "Content guidance",
          "Basic SEO",
          "Launch support",
          "QA review",
          "Handoff support",
        ],
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
        highlights: [
          "Product setup",
          "Checkout setup",
          "Mobile first",
          "Homepage layout",
          "Payment setup",
          "Shipping setup",
          "Basic SEO",
          "QA review",
          "Launch support",
          "Handoff support",
        ],
      },
      {
        name: "Growth Store",
        price: "$2,400",
        summary: "Mid-size catalog with merchandising help.",
        highlights: [
          "50 products",
          "Collection structure",
          "Merchandising layout",
          "Mobile first",
          "Checkout setup",
          "Payment setup",
          "Shipping setup",
          "Analytics setup",
          "QA review",
          "Handoff support",
        ],
      },
      {
        name: "Premium Store",
        price: "$3,900",
        summary: "Advanced build with custom flows.",
        highlights: [
          "Custom layouts",
          "Advanced filters",
          "Performance tuning",
          "Mobile first",
          "Conversion flow",
          "Checkout setup",
          "Payment setup",
          "Shipping setup",
          "QA review",
          "Priority support",
        ],
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
        highlights: [
          "Primary logo",
          "Alternate marks",
          "Color palette",
          "Type pairing",
          "Usage notes",
          "File formats",
          "Social avatar",
          "Icon set",
          "QA review",
          "Handoff support",
        ],
      },
      {
        name: "Identity Suite",
        price: "$900",
        summary: "Full visual identity and type pairing.",
        highlights: [
          "Logo system",
          "Color palette",
          "Type pairing",
          "Brand patterns",
          "Icon set",
          "Usage guide",
          "Social avatar",
          "Print specs",
          "QA review",
          "Handoff support",
        ],
      },
      {
        name: "Brand Toolkit",
        price: "$1,300",
        summary: "Expanded identity with launch assets.",
        highlights: [
          "Brand guide",
          "Logo system",
          "Color palette",
          "Type pairing",
          "Social templates",
          "Print specs",
          "Asset library",
          "Usage guide",
          "QA review",
          "Handoff support",
        ],
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
        highlights: [
          "Channel plan",
          "Messaging map",
          "Offer positioning",
          "Priority tactics",
          "Lead capture",
          "Content prompts",
          "Budget guidance",
          "Timeline plan",
          "QA review",
          "Handoff support",
        ],
      },
      {
        name: "Growth Strategy",
        price: "$1,050",
        summary: "Deeper strategy with funnel guidance.",
        highlights: [
          "Growth roadmap",
          "Funnel stages",
          "Campaign themes",
          "Channel mix",
          "Offer positioning",
          "Content prompts",
          "Budget guidance",
          "Timeline plan",
          "QA review",
          "Handoff support",
        ],
      },
      {
        name: "Lead Accelerator",
        price: "$1,450",
        summary: "Lead gen setup with conversion flow.",
        highlights: [
          "Lead funnel",
          "Offer positioning",
          "Landing flow",
          "Lead capture",
          "Nurture plan",
          "Campaign assets",
          "Budget guidance",
          "Reporting setup",
          "QA review",
          "Handoff support",
        ],
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
