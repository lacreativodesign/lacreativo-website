"use client";

import { useState } from "react";

import Button from "@/components/Button";
import Section from "@/components/Section";

type PackageTab = "website" | "brand" | "content" | "retain";

const tabs: Array<{ id: PackageTab; label: string }> = [
  { id: "website", label: "Website" },
  { id: "brand", label: "Brand" },
  { id: "content", label: "Content" },
  { id: "retain", label: "Retainers" },
];

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
      "Full-site builds for small businesses that want a polished, conversion-ready home online.",
    packages: [
      {
        name: "Starter Site",
        price: "$499",
        summary: "Single-page layout with strategic sections and clear calls to action.",
        highlights: ["Launch-ready structure", "Mobile-first layout", "Copy guidance"],
      },
      {
        name: "Growth Site",
        price: "$1,499",
        summary: "Multi-page build with custom sections and conversion-focused flow.",
        highlights: ["Up to 5 pages", "Custom visuals", "SEO-ready setup"],
      },
      {
        name: "Premium Site",
        price: "$2,499",
        summary: "Full brand storytelling with advanced layout and launch support.",
        highlights: ["Strategy session", "Custom animations", "Launch support"],
      },
    ],
  },
  brand: {
    title: "Brand refresh kits",
    description:
      "Elevate your identity with cohesive visuals and messaging foundations.",
    packages: [
      {
        name: "Logo Refresh",
        price: "$399",
        summary: "Update your logo and core brand marks for a cleaner look.",
        highlights: ["Primary + alternate logos", "Color palette", "Brand files"],
      },
      {
        name: "Brand Suite",
        price: "$899",
        summary: "Full identity with typography, palette, and visual direction.",
        highlights: ["Logo system", "Typography pairing", "Brand guide"],
      },
      {
        name: "Launch Identity",
        price: "$1,499",
        summary: "Complete brand story with visuals and messaging touchpoints.",
        highlights: ["Brand strategy", "Messaging prompts", "Launch assets"],
      },
    ],
  },
  content: {
    title: "Content + social systems",
    description:
      "Stay consistent with ready-to-post templates and content structure.",
    packages: [
      {
        name: "Content Starter",
        price: "$299",
        summary: "Template pack with ready-to-use layouts for social posts.",
        highlights: ["10 templates", "Content prompts", "Story layouts"],
      },
      {
        name: "Social Suite",
        price: "$699",
        summary: "Full template library with content planning support.",
        highlights: ["30 templates", "Brand visuals", "Posting guide"],
      },
      {
        name: "Campaign Kit",
        price: "$1,099",
        summary: "Launch-focused creative with ad, email, and social assets.",
        highlights: ["Campaign visuals", "Email graphics", "Launch checklist"],
      },
    ],
  },
  retain: {
    title: "Creative retainers",
    description:
      "Ongoing design support for teams that need consistent creative.",
    packages: [
      {
        name: "Light Support",
        price: "$499/mo",
        summary: "Monthly design hours for quick updates and new assets.",
        highlights: ["10 hours", "48-hour responses", "Priority queue"],
      },
      {
        name: "Growth Support",
        price: "$1,299/mo",
        summary: "Strategic design partnership with ongoing creative direction.",
        highlights: ["25 hours", "Weekly check-ins", "Campaign support"],
      },
      {
        name: "Full Partner",
        price: "$2,499/mo",
        summary: "Full creative coverage for launches, sites, and content.",
        highlights: ["40 hours", "Dedicated lead", "Quarterly planning"],
      },
    ],
  },
};

export default function PackagesSection() {
  const [activeTab, setActiveTab] = useState<PackageTab>("website");
  const activeContent = packageData[activeTab];

  return (
    <Section
      id="packages"
      tone="muted"
      eyebrow="Packages"
      title="Pick a package that fits your momentum"
      description="Switch between service types to preview simple, transparent package options."
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
            <ul className="flex flex-1 flex-col gap-2 text-xs text-muted-foreground">
              {item.highlights.map((highlight) => (
                <li key={highlight} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            <Button href="/get-started" size="sm">
              Order Now
            </Button>
          </div>
        ))}
      </div>
    </Section>
  );
}
