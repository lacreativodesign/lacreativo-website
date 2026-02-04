"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "@/components/Button";

const serviceGroups = [
  {
    title: "Core Services",
    items: [
      {
        label: "Website Design & Development",
        href: "/services/website-design-development",
        description: "Premium websites built for conversion.",
        icon: "◨",
      },
      {
        label: "E-Commerce",
        href: "/services/ecommerce",
        description: "Online stores built to sell.",
        icon: "⬡",
      },
      {
        label: "Branding",
        href: "/services/branding",
        description: "Identity systems that feel cohesive.",
        icon: "◎",
      },
      {
        label: "Marketing",
        href: "/services/marketing",
        description: "Strategy and lead generation support.",
        icon: "⬟",
      },
    ],
  },
  {
    title: "Growth Channels",
    items: [
      {
        label: "SEO",
        href: "/services/seo",
        description: "Search visibility with clear priorities.",
        icon: "↗",
      },
      {
        label: "Social Media",
        href: "/services/social-media",
        description: "Consistent content and community care.",
        icon: "✦",
      },
      {
        label: "Advertising",
        href: "/services/advertising",
        description: "Paid campaigns with measurable ROI.",
        icon: "⬣",
      },
      {
        label: "Content",
        href: "/services/content",
        description: "Persuasive copy and brand content.",
        icon: "✎",
      },
    ],
  },
  {
    title: "Specialty",
    items: [
      {
        label: "Video",
        href: "/services/video",
        description: "Video content that clarifies your offer.",
        icon: "▶",
      },
      {
        label: "Reputation",
        href: "/services/reputation",
        description: "Review and trust-building support.",
        icon: "★",
      },
      {
        label: "Automation & Tools",
        href: "/services/automation-tools",
        description: "Workflows that save time.",
        icon: "⚙",
      },
      {
        label: "Printing",
        href: "/services/printing",
        description: "Print collateral for in-person trust.",
        icon: "▣",
      },
    ],
  },
];

const industries = [
  { label: "Startups & SaaS", href: "/industries/startups-saas" },
  { label: "Small Businesses", href: "/industries/small-businesses" },
  { label: "E-Commerce & DTC Brands", href: "/industries/ecommerce-dtc" },
  { label: "Real Estate", href: "/industries/real-estate" },
  { label: "Healthcare & Clinics", href: "/industries/healthcare-clinics" },
  { label: "Law Firms", href: "/industries/law-firms" },
  { label: "Coaches & Consultants", href: "/industries/coaches-consultants" },
  {
    label: "Restaurants & Hospitality",
    href: "/industries/restaurants-hospitality",
  },
  { label: "Construction & Trades", href: "/industries/construction-trades" },
  { label: "Education & Training", href: "/industries/education-training" },
  {
    label: "Finance & Professional Services",
    href: "/industries/finance-professional-services",
  },
  {
    label: "Creators & Personal Brands",
    href: "/industries/creators-personal-brands",
  },
];

export default function Header() {
  const [isDark, setIsDark] = useState(false);
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState<
    "services" | "industries" | null
  >(null);

  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const shouldUseDark = stored
      ? stored === "dark"
      : prefersDark;

    document.documentElement.classList.toggle("dark", shouldUseDark);
    setIsDark(shouldUseDark);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem("theme", next ? "dark" : "light");
  };

  const handleMegaToggle = () => {
    setIsMegaOpen((prev) => !prev);
  };

  const handleMobileToggle = () => {
    setIsMobileOpen((prev) => !prev);
    setOpenMobileSection(null);
  };

  const handleMobileSectionToggle = (section: "services" | "industries") => {
    setOpenMobileSection((prev) => (prev === section ? null : section));
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-6">
          <span className="text-lg font-semibold tracking-[0.2em]">
            LA CREATIVO
          </span>
          <span className="hidden rounded-full border border-border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground sm:inline-flex">
            Small Biz Studio
          </span>
        </div>
        <nav
          className="hidden items-center gap-6 text-sm font-medium md:flex"
          onMouseLeave={() => setIsMegaOpen(false)}
        >
          <Link
            href="/"
            className="text-muted-foreground transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Home
          </Link>
          <Link
            href="/about-us"
            className="text-muted-foreground transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            About Us
          </Link>
          <Link
            href="/work-with-us"
            className="text-muted-foreground transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Work With Us
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setIsMegaOpen(true)}
          >
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={isMegaOpen}
              aria-controls="services-mega"
              onClick={handleMegaToggle}
              onKeyDown={(event) => {
                if (event.key === "Escape") {
                  setIsMegaOpen(false);
                }
              }}
              className="flex items-center gap-2 text-muted-foreground transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Services
              <span className="text-xs text-muted-foreground">▾</span>
            </button>
            {isMegaOpen && (
              <div
                id="services-mega"
                role="menu"
                className="absolute left-0 top-10 z-50 w-[860px] rounded-3xl border border-border bg-background p-6 shadow-2xl"
                onMouseLeave={() => setIsMegaOpen(false)}
              >
                <div className="grid gap-6 lg:grid-cols-3">
                  {serviceGroups.map((group) => (
                    <div key={group.title} className="flex flex-col gap-4">
                      <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                        {group.title}
                      </h4>
                      <div className="flex flex-col gap-3">
                        {group.items.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="group flex items-start gap-3 rounded-2xl border border-transparent p-3 transition hover:border-border hover:bg-muted/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                          >
                            <span
                              aria-hidden="true"
                              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-xs text-muted-foreground"
                            >
                              {item.icon}
                            </span>
                            <span className="flex flex-col gap-1">
                              <span className="text-sm font-semibold text-foreground">
                                {item.label}
                              </span>
                              <span className="text-xs text-muted-foreground">
                                {item.description}
                              </span>
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex items-center justify-between rounded-2xl border border-border bg-muted/40 px-4 py-3 text-xs text-muted-foreground">
                  <span>
                    Explore by industry for tailored recommendations.
                  </span>
                  <Link
                    href="/industries"
                    className="text-xs font-semibold text-foreground transition hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    View Industries
                  </Link>
                </div>
              </div>
            )}
          </div>
          <Link
            href="/combo-packages"
            className="text-muted-foreground transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Combo Packages
          </Link>
          <Link
            href="/resources"
            className="text-muted-foreground transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Resources
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleMobileToggle}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-sm md:hidden"
            aria-label={isMobileOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isMobileOpen ? "✕" : "☰"}
          </button>
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-sm"
            aria-label="Toggle color theme"
          >
            {isDark ? "☾" : "☀"}
          </button>
          <Link
            href="/client-login"
            className="hidden rounded-full border border-accent bg-accent/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent transition hover:bg-accent/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background md:inline-flex"
          >
            Client Login
          </Link>
          <Button href="/get-started" className="hidden md:inline-flex">
            Get Started
          </Button>
        </div>
      </div>
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur md:hidden">
          <div className="mx-auto flex h-full w-full max-w-6xl flex-col gap-6 px-6 py-6">
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold tracking-[0.2em]">
                LA CREATIVO
              </span>
              <button
                type="button"
                onClick={handleMobileToggle}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-sm"
                aria-label="Close navigation menu"
              >
                ✕
              </button>
            </div>
            <nav className="flex flex-1 flex-col gap-6 text-sm font-medium">
              <Link
                href="/"
                className="text-base text-foreground transition hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                onClick={handleMobileToggle}
              >
                Home
              </Link>
              <Link
                href="/about-us"
                className="text-base text-foreground transition hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                onClick={handleMobileToggle}
              >
                About Us
              </Link>
              <Link
                href="/work-with-us"
                className="text-base text-foreground transition hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                onClick={handleMobileToggle}
              >
                Work With Us
              </Link>
              <button
                type="button"
                className="flex items-center justify-between text-base text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-expanded={openMobileSection === "services"}
                aria-controls="mobile-services"
                onClick={() => handleMobileSectionToggle("services")}
              >
                Services
                <span className="text-xs">
                  {openMobileSection === "services" ? "–" : "+"}
                </span>
              </button>
              {openMobileSection === "services" && (
                <div id="mobile-services" className="flex flex-col gap-4 pl-3">
                  {serviceGroups.map((group) => (
                    <div key={group.title} className="flex flex-col gap-2">
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                        {group.title}
                      </span>
                      <div className="flex flex-col gap-2">
                        {group.items.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="text-sm text-foreground transition hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                            onClick={handleMobileToggle}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <button
                type="button"
                className="flex items-center justify-between text-base text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-expanded={openMobileSection === "industries"}
                aria-controls="mobile-industries"
                onClick={() => handleMobileSectionToggle("industries")}
              >
                Industries
                <span className="text-xs">
                  {openMobileSection === "industries" ? "–" : "+"}
                </span>
              </button>
              {openMobileSection === "industries" && (
                <div
                  id="mobile-industries"
                  className="grid gap-3 pl-3 text-sm"
                >
                  {industries.map((industry) => (
                    <Link
                      key={industry.label}
                      href={industry.href}
                      className="text-sm text-foreground transition hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      onClick={handleMobileToggle}
                    >
                      {industry.label}
                    </Link>
                  ))}
                </div>
              )}
              <Link
                href="/combo-packages"
                className="text-base text-foreground transition hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                onClick={handleMobileToggle}
              >
                Combo Packages
              </Link>
              <Link
                href="/resources"
                className="text-base text-foreground transition hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                onClick={handleMobileToggle}
              >
                Resources
              </Link>
            </nav>
            <div className="mt-auto flex flex-col gap-3">
              <Link
                href="/client-login"
                className="inline-flex items-center justify-center rounded-full border border-accent bg-accent/10 px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent transition hover:bg-accent/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                onClick={handleMobileToggle}
              >
                Client Login
              </Link>
              <Button href="/get-started" onClick={handleMobileToggle}>
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
