"use client";

import { useMemo, useState } from "react";

import Button from "@/components/Button";

const packageTabs = [
  {
    id: "website",
    label: "Website",
    description: "Conversion-ready web experiences.",
    packages: [
      {
        name: "Launch Site",
        price: "$899",
        summary: "Single-page experience with clear messaging and bookings.",
        includes: ["1-page build", "Mobile-ready layout", "Lead capture setup"],
        detailsHref: "/services/website-design-development",
      },
      {
        name: "Growth Site",
        price: "$1,499",
        summary: "Multi-page site that scales with your offers.",
        includes: ["Up to 5 pages", "On-brand UI kit", "Speed + SEO setup"],
        badge: "Most Popular",
        detailsHref: "/services/website-design-development",
      },
      {
        name: "Commerce Site",
        price: "$2,499",
        summary: "Launch-ready storefront with checkout polish.",
        includes: ["Storefront setup", "Product templates", "Checkout flow"],
        badge: "Best Value",
        detailsHref: "/services/ecommerce",
      },
    ],
  },
  {
    id: "brand",
    label: "Brand",
    description: "Identity systems that feel premium.",
    packages: [
      {
        name: "Brand Starter",
        price: "$499",
        summary: "Core identity kit to look established fast.",
        includes: ["Logo suite", "Color system", "Typography pairing"],
        detailsHref: "/services/brand-refresh",
      },
      {
        name: "Brand Refresh",
        price: "$999",
        summary: "Full visual refresh plus messaging direction.",
        includes: ["Brand guide", "Social kit", "Launch assets"],
        badge: "Most Popular",
        detailsHref: "/services/brand-refresh",
      },
      {
        name: "Brand Suite",
        price: "$1,599",
        summary: "Comprehensive system for multi-channel growth.",
        includes: ["Extended assets", "Campaign templates", "Usage rules"],
        badge: "Best Value",
        detailsHref: "/services/brand-refresh",
      },
    ],
  },
  {
    id: "content",
    label: "Content",
    description: "Social systems that stay consistent.",
    packages: [
      {
        name: "Content Sprint",
        price: "$699",
        summary: "Short burst of templates and launch copy.",
        includes: ["Template set", "Caption prompts", "Style guide"],
        detailsHref: "/services/social-media",
      },
      {
        name: "Social System",
        price: "$1,199",
        summary: "Full content planning with visuals and cadence.",
        includes: ["30-day plan", "Story templates", "Content calendar"],
        badge: "Most Popular",
        detailsHref: "/services/social-media",
      },
      {
        name: "Launch Campaign",
        price: "$1,899",
        summary: "Campaign assets for announcements and launches.",
        includes: ["Campaign kit", "Ad creative", "Launch checklist"],
        badge: "Best Value",
        detailsHref: "/services/launch-campaigns",
      },
    ],
  },
  {
    id: "retain",
    label: "Retainer",
    description: "Monthly creative support.",
    packages: [
      {
        name: "Creative Essentials",
        price: "$699/mo",
        summary: "On-call design help for consistent updates.",
        includes: ["Monthly design queue", "48-hr responses", "Brand keeper"],
        detailsHref: "/services/retainers",
      },
      {
        name: "Growth Partner",
        price: "$1,299/mo",
        summary: "Ongoing creative + light strategy support.",
        includes: ["Priority queue", "Campaign support", "Quarterly refresh"],
        badge: "Most Popular",
        detailsHref: "/services/retainers",
      },
      {
        name: "Launch Partner",
        price: "$1,899/mo",
        summary: "Full-service creative direction and execution.",
        includes: ["Dedicated lead", "Multi-channel assets", "Launch planning"],
        badge: "Best Value",
        detailsHref: "/services/retainers",
      },
    ],
  },
] as const;

export default function PackagesSection() {
  const [activeTab, setActiveTab] = useState(packageTabs[0].id);
  const currentTab = useMemo(
    () => packageTabs.find((tab) => tab.id === activeTab) ?? packageTabs[0],
    [activeTab]
  );

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap gap-3">
        {packageTabs.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              type="button"
              aria-pressed={isActive}
              aria-controls={`packages-panel-${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-full border px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] transition ${
                isActive
                  ? "border-foreground bg-foreground text-background shadow-sm"
                  : "border-border bg-card/80 text-foreground hover:border-accent/50 hover:text-accent"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <div
        id={`packages-panel-${currentTab.id}`}
        key={currentTab.id}
        className="tab-panel grid gap-6 md:grid-cols-2 xl:grid-cols-3"
      >
        {currentTab.packages.map((item) => (
          <article
            key={item.name}
            className="flex h-full flex-col gap-4 rounded-3xl border border-border bg-card p-6 shadow-[0_18px_45px_rgba(12,10,16,0.06)] transition hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_22px_50px_rgba(12,10,16,0.12)]"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.summary}
                </p>
              </div>
              {item.badge && (
                <span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                  {item.badge}
                </span>
              )}
            </div>
            <div className="text-3xl font-semibold text-foreground">
              <span className="numeric-editorial">{item.price}</span>
            </div>
            <ul className="flex flex-col gap-2 text-xs text-muted-foreground">
              {item.includes.map((detail) => (
                <li key={detail}>• {detail}</li>
              ))}
            </ul>
            <div className="mt-auto flex flex-wrap gap-3">
              <Button href="/get-started" size="sm">
                Order Now
              </Button>
              <Button href={item.detailsHref} variant="secondary" size="sm">
                View Details
              </Button>
            </div>
          </article>
        ))}
      </div>
      <p className="text-xs text-muted-foreground">
        Simple pricing. Clear deliverables. Flexible payment plans available.
      </p>
    </div>
  );
}
