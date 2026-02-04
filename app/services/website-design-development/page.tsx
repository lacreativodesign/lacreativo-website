import ServicePageTemplate from "@/components/templates/ServicePageTemplate";

const packages = [
  {
    name: "Starter Site",
    description: "Perfect for new founders needing a polished online home.",
    features: [
      "1-3 pages",
      "Mobile-first design",
      "Basic SEO setup",
      "Launch checklist",
    ],
  },
  {
    name: "Growth Website",
    description: "Expanded layouts with more storytelling and conversion focus.",
    features: [
      "4-6 pages",
      "Custom visuals",
      "Lead capture setup",
      "Analytics ready",
    ],
  },
  {
    name: "Brand Story",
    description: "For teams that want personality, copy polish, and impact.",
    features: [
      "Messaging support",
      "Visual style guide",
      "Founder spotlight section",
      "Launch assets",
    ],
  },
  {
    name: "Ecommerce Light",
    description: "Simple storefronts for new product lines and launches.",
    features: [
      "Up to 20 products",
      "Checkout configuration",
      "Product templates",
      "Store training",
    ],
  },
  {
    name: "Premium Build",
    description: "Custom interactions and advanced sections for standout brands.",
    features: [
      "Advanced layout system",
      "Custom illustrations",
      "Performance tuning",
      "Priority support",
    ],
  },
  {
    name: "Launch Partner",
    description: "Full-service support with strategy, design, and rollout.",
    features: [
      "Creative direction",
      "Copywriting support",
      "Campaign assets",
      "Post-launch check-ins",
    ],
  },
];

const faqs = [
  {
    question: "How long does a website build take?",
    answer:
      "Most launches happen in 3–6 weeks depending on the scope and how quickly we gather feedback.",
  },
  {
    question: "Do you handle hosting and domains?",
    answer:
      "We guide you through setup and can manage hosting if you want ongoing support.",
  },
  {
    question: "Can we add more pages later?",
    answer:
      "Yes. Every build is structured for growth, so adding sections or pages is easy.",
  },
  {
    question: "Do you offer payment plans?",
    answer:
      "We can split payments across milestones to keep investment comfortable.",
  },
];

export default function WebsiteDesignDevelopmentPage() {
  return (
    <ServicePageTemplate
      hero={{
        serviceName: "Website Design & Development",
        headline:
          "Build a premium website that makes your business feel established.",
        description:
          "We design conversion-ready sites that balance beautiful visuals with clear messaging, so visitors know exactly what to do next.",
        primaryCta: { label: "View Packages", href: "#packages" },
        secondaryCta: { label: "Get Started", href: "/get-started" },
      }}
      whatThisServiceIs={{
        title: "An end-to-end website experience, not just pretty pages",
        description:
          "We combine strategy, copy clarity, and design polish so your website earns trust from the first scroll.",
        paragraphs: [
          "This service is built for business owners who need an online presence that feels premium without the guesswork. We guide you through structure, messaging, and design decisions so you stay focused on your business while we handle the creative heavy lifting.",
          "Expect clear timelines, calm feedback rounds, and a site that feels consistent across every device. The goal is to make your brand feel established and trustworthy the moment someone lands on your homepage.",
        ],
      }}
      whoItsFor={{
        title: "A fit for owners who want a confident online presence",
        description:
          "These builds are made for small teams who want clarity, not complexity.",
        paragraphs: [
          "If you are launching a new business or updating an outdated site, this service gives you a clear, guided path from planning to launch without jargon.",
          "It is also ideal for local businesses and growing teams who need their website to communicate quality, professionalism, and a clear next step for customers.",
          "Founders who want to look established quickly rely on this service to align messaging, visuals, and user flow so visitors feel ready to reach out.",
        ],
      }}
      howWeDeliver={{
        title: "A calm, structured process",
        description:
          "We keep the work transparent so you always know what is happening and why.",
        paragraphs: [
          "We start with a focused discovery call to understand your goals, customers, and the actions you want visitors to take.",
          "Next we map the site structure and messaging so every page flows naturally and supports conversion without overwhelming readers.",
          "Design and build happen with clear checkpoints, and we translate feedback into action while keeping timelines predictable.",
          "Before launch, we test the final experience across devices and make sure you feel confident managing updates going forward.",
        ],
      }}
      packages={{
        title: "Six structured options to match your stage",
        description:
          "Choose a package that fits your goals today and scales with your business tomorrow.",
        items: packages,
      }}
      faqs={faqs}
      internalLinks={{
        industries: [
          { label: "Professional Services", href: "/industries/professional-services" },
          { label: "Hospitality", href: "/industries/hospitality" },
          { label: "Wellness", href: "/industries/wellness" },
        ],
        platforms: [
          { label: "WordPress", href: "/services/wordpress-development" },
          { label: "Webflow", href: "/services/webflow" },
          { label: "Shopify", href: "/services/shopify" },
        ],
        relatedServices: [
          { label: "Brand Identity", href: "/services/brand-identity" },
          { label: "SEO Services", href: "/services/seo-services" },
          { label: "Digital Marketing", href: "/services/digital-marketing" },
        ],
      }}
    />
  );
}
