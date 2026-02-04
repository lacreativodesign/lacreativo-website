export type WebsiteDesignPackage = {
  slug: string;
  name: string;
  startingPrice: string;
  summary: string;
  timeline: string;
  includes: string[];
};

export const websiteDesignPackages: WebsiteDesignPackage[] = [
  {
    slug: "starter-site",
    name: "Starter Site",
    startingPrice: "$499",
    summary: "A focused, conversion-ready site for new or lean teams.",
    timeline: "1-2 weeks",
    includes: [
      "Single-page layout",
      "Conversion-focused sections",
      "Mobile-first design",
      "Launch checklist",
    ],
  },
  {
    slug: "growth-website",
    name: "Growth Website",
    startingPrice: "$1,499",
    summary: "Multi-page structure for brands ready to scale visibility.",
    timeline: "3-4 weeks",
    includes: [
      "Up to 5 pages",
      "Custom visual system",
      "Lead capture setup",
      "Analytics-ready handoff",
    ],
  },
  {
    slug: "brand-story",
    name: "Brand Story",
    startingPrice: "$2,499",
    summary: "A premium presence with elevated storytelling and polish.",
    timeline: "4-6 weeks",
    includes: [
      "Messaging support",
      "Visual style guide",
      "Founder or team spotlight",
      "Launch assets",
    ],
  },
  {
    slug: "ecommerce-light",
    name: "Ecommerce Light",
    startingPrice: "$2,999",
    summary: "Streamlined storefront for new product lines and launches.",
    timeline: "4-6 weeks",
    includes: [
      "Up to 20 products",
      "Checkout configuration",
      "Product templates",
      "Store walkthrough",
    ],
  },
  {
    slug: "premium-build",
    name: "Premium Build",
    startingPrice: "$4,200",
    summary: "Custom interaction design for standout brands and teams.",
    timeline: "6-8 weeks",
    includes: [
      "Advanced layout system",
      "Custom illustrations",
      "Performance tuning",
      "Priority support",
    ],
  },
  {
    slug: "launch-partner",
    name: "Launch Partner",
    startingPrice: "$6,500",
    summary: "Full-service partnership for strategy, design, and rollout.",
    timeline: "6-10 weeks",
    includes: [
      "Creative direction",
      "Copywriting support",
      "Campaign assets",
      "Post-launch check-ins",
    ],
  },
];
