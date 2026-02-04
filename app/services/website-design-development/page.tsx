import type { Metadata } from "next";

import ServicePageTemplate from "@/components/templates/ServicePageTemplate";

import { websiteDesignPackages } from "./packagesData";

export const metadata: Metadata = {
  title: "Website Design & Development Services | LA CREATIVO",
  description:
    "Premium website design and development for businesses ready to convert. Clear scope, fast timelines, and launch-ready builds tailored to your goals.",
};

const faqs = [
  {
    question: "What does pricing start at?",
    answer:
      "Packages start at $499 with clear scopes and upgrade paths based on your goals.",
  },
  {
    question: "How long will my website take?",
    answer:
      "Most projects launch in 2–6 weeks depending on package size and feedback timing.",
  },
  {
    question: "Will I own the site and assets?",
    answer:
      "Yes. You receive full ownership of design files, content, and your site build.",
  },
  {
    question: "How many revision rounds are included?",
    answer:
      "Each package includes structured feedback rounds with clear checkpoints.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Yes. You can add ongoing support or request updates as needed.",
  },
];

export default function WebsiteDesignDevelopmentPage() {
  return (
    <ServicePageTemplate
      hero={{
        serviceName: "Website Design & Development",
        headline: "Launch a premium website that turns visitors into clients.",
        description:
          "Conversion-focused strategy, standout design, and a clear path to launch — built for businesses ready to grow now.",
        primaryCta: { label: "Order Now", href: "#lead-capture" },
        secondaryCta: { label: "Talk to an Expert", href: "#lead-capture" },
      }}
      audience={{
        title: "Know if this is the right fit before you commit",
        description:
          "We work best with teams who want a premium, guided website build — not endless experimentation.",
        ideal: [
          "Founders who need a polished site quickly",
          "Brands ready to upgrade an outdated website",
          "Local businesses that need clear calls-to-action",
          "Teams who want a trusted partner to handle the details",
        ],
        notFor: [
          "DIY builders looking for templates",
          "Projects without clear decision makers",
          "Endless scope changes without timeline control",
          "Businesses seeking the lowest-cost option",
        ],
      }}
      whatYouGet={{
        title: "A complete website build, minus the chaos",
        description:
          "Everything you need for a confident launch — structured, streamlined, and conversion-ready.",
        groups: [
          {
            title: "Strategy",
            items: [
              "Discovery session with clear goals",
              "Site architecture and page flow",
              "Messaging direction and CTA planning",
            ],
          },
          {
            title: "Design",
            items: [
              "Custom visual direction",
              "Mobile-first layouts",
              "Brand-aligned typography and imagery",
            ],
          },
          {
            title: "Development",
            items: [
              "Responsive build",
              "Performance-focused setup",
              "Basic SEO essentials",
            ],
          },
          {
            title: "Launch & Support",
            items: [
              "QA across devices",
              "Launch checklist + handoff",
              "Optional ongoing support",
            ],
          },
        ],
      }}
      packages={{
        title: "Pick the starting point that fits your momentum",
        description:
          "Simple packages with clear starting prices and fast ramp-up times.",
        items: websiteDesignPackages.map((item) => ({
          name: item.name,
          startingPrice: item.startingPrice,
          href: `/services/website-design-development/packages/${item.slug}`,
        })),
      }}
      leadCapture={{
        title: "Get a clear plan in one business day",
        description:
          "Share the basics and we’ll respond with scope, timeline, and the right package fit.",
        benefits: [
          "24-hour response window",
          "Recommended package fit",
          "Clear next steps",
        ],
        formCtaLabel: "Send my website plan",
      }}
      conversionCta={{
        title: "You’re one step away from a launch-ready website",
        description:
          "We keep projects clean, fast, and conversion-focused so you can start booking clients quickly.",
        primaryCta: { label: "Order Now", href: "#lead-capture" },
      }}
      faqs={faqs}
    />
  );
}
