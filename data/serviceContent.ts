import { packagesByServiceSlug } from "./packages";
import type { ServiceCategory, ServiceDefinition } from "./services";

export type ServiceCardItem = {
  name: string;
  startingPrice: string;
  href: string;
};

const defaultAudienceIdeal = (serviceName: string) => [
  `${serviceName} for small business owners ready to grow in the U.S. market.`,
  "Teams who want a clear scope and a dependable partner.",
  "Businesses that need measurable progress, not endless experimentation.",
  "Founders who want premium quality without agency-level overhead.",
];

const defaultAudienceNotFor = [
  "Projects without a decision maker or timeline.",
  "Teams looking for the cheapest possible option.",
  "Unlimited scope changes without clear milestones.",
  "Brands that are not ready to act on feedback.",
];

const defaultWhatYouGet = (focus: string) => [
  {
    title: "Strategy & Direction",
    items: [
      "Focused discovery with goals and priorities.",
      `Clear roadmap for ${focus}.`,
      "Conversion-first messaging guidance.",
    ],
  },
  {
    title: "Design & Build",
    items: [
      "Premium visual direction aligned to your brand.",
      `Execution that keeps ${focus} clean and structured.`,
      "Quality checks across devices and channels.",
    ],
  },
  {
    title: "Launch & Support",
    items: [
      "Launch readiness review and final polish.",
      "Simple handoff so your team feels confident.",
      "Optional ongoing support if you want it.",
    ],
  },
  {
    title: "Performance & Confidence",
    items: [
      "Clarity on next steps and quick wins.",
      "Friendly guidance in plain language.",
      "Assets organized and ready to use.",
    ],
  },
];

export const buildCategoryTemplate = (category: ServiceCategory) => ({
  hero: {
    serviceName: category.name,
    headline: category.heroHeadline,
    description: category.heroDescription,
    primaryCta: { label: "Order Now", href: "#lead-capture" },
    secondaryCta: { label: "Talk to an Expert", href: "#lead-capture" },
  },
  audience: {
    title: `Who ${category.name} is built for`,
    description:
      "If you want clarity, consistent execution, and a reliable partner, you’re in the right place.",
    ideal: [
      `USA small businesses who need ${category.name.toLowerCase()} that feels polished.`,
      "Teams who want a guided process and clear milestones.",
      "Founders looking for premium results without agency fluff.",
      "Owners ready to move quickly with a defined scope.",
    ],
    notFor: defaultAudienceNotFor,
  },
  whatYouGet: {
    title: "What this category delivers",
    description:
      "We combine strategy, clean execution, and launch-ready assets so you can move forward with confidence.",
    groups: defaultWhatYouGet(category.description),
  },
  packages: {
    title: "Explore the services in this category",
    description:
      "Each service includes clear packages and a guided path to launch.",
    items: category.services.map((service) => ({
      name: service.name,
      startingPrice: "View Details",
      href: `/services/${category.slug}/${service.slug}`,
    })),
  },
  leadCapture: {
    title: "Get a clear scope and timeline",
    description:
      "Share a few details and we’ll reply with the best service match, package options, and next steps.",
    benefits: [
      "24-hour response window",
      "Clear package recommendations",
      "No-pressure guidance",
    ],
    formCtaLabel: "Send my request",
  },
  conversionCta: {
    title: "Ready to pick the right service?",
    description:
      "We’ll help you choose the best option, align the scope, and keep the process calm and focused.",
    primaryCta: { label: "Order Now", href: "#lead-capture" },
  },
  faqs: [
    {
      question: "How fast can we get started?",
      answer:
        "Most projects can start within one week after we align on scope and package.",
    },
    {
      question: "Do you work with USA-based small businesses?",
      answer:
        "Yes. Our process is designed for USA small business owners who want clear guidance and fast execution.",
    },
    {
      question: "Can I combine services?",
      answer:
        "Absolutely. We can bundle complementary services if you want a more complete launch plan.",
    },
    {
      question: "Will I own the final assets?",
      answer:
        "Yes. You’ll receive full access to files, accounts, and final deliverables.",
    },
  ],
});

export const buildServiceTemplate = (
  service: ServiceDefinition,
  category: ServiceCategory
) => {
  const packages = packagesByServiceSlug[service.slug] ?? [];

  return {
    hero: {
      serviceName: service.name,
      headline: `A ${service.name.toLowerCase()} experience built for modern small businesses.`,
      description: service.description,
      primaryCta: { label: "Order Now", href: "#lead-capture" },
      secondaryCta: { label: "View Packages", href: "#packages" },
    },
    audience: {
      title: "Is this the right fit?",
      description:
        "We keep the scope focused, the communication clear, and the results premium.",
      ideal: defaultAudienceIdeal(service.name),
      notFor: defaultAudienceNotFor,
    },
    whatYouGet: {
      title: "What you get with this service",
      description:
        "Every package includes strategy, execution, and a launch-ready finish — without the chaos.",
      groups: defaultWhatYouGet(service.focus),
    },
    packages: {
      title: "Choose a package that matches your momentum",
      description:
        "Pick a starting point and we’ll guide you through the rest.",
      items: packages.map((item) => ({
        name: item.name,
        startingPrice: item.startingPrice,
        href: `/packages/${service.slug}/${item.slug}`,
      })),
    },
    leadCapture: {
      title: "Get a clear plan in one business day",
      description:
        "Share the basics and we’ll respond with scope, timeline, and the right package fit.",
      benefits: [
        "24-hour response window",
        "Recommended package fit",
        "Clear next steps",
      ],
      formCtaLabel: "Send my request",
    },
    conversionCta: {
      title: "Ready to move forward?",
      description:
        "We keep the process simple, aligned, and focused on outcomes that matter to your business.",
      primaryCta: { label: "Order Now", href: "#lead-capture" },
    },
    faqs: [
      {
        question: "How soon can we launch?",
        answer:
          "Timelines depend on package size, but most projects move from kickoff to launch in 2–6 weeks.",
      },
      {
        question: "Do you offer payment plans?",
        answer:
          "Yes. We offer flexible payment options so you can move forward without added stress.",
      },
      {
        question: "Can I upgrade later?",
        answer:
          "Absolutely. We can scale the package if your needs expand.",
      },
      {
        question: "Will I have ownership of the work?",
        answer:
          "Yes. You receive full ownership and access to the final assets.",
      },
    ],
  };
};
