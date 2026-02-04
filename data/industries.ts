import { packagesByServiceSlug } from "./packages";
import { servicesWithCategory } from "./services";

type IndustryHelpItem = {
  title: string;
  description: string;
};

type IndustryPackageRef = {
  serviceSlug: string;
  packageSlug: string;
};

export type Industry = {
  slug: string;
  name: string;
  icon: string;
  heroHeadline: string;
  heroSubtext: string;
  problems: string[];
  helpItems: IndustryHelpItem[];
  recommendedServices: string[];
  recommendedPackages: IndustryPackageRef[];
  formCtaLabel: "Order Now" | "Talk to an Expert";
};

const serviceLinkBySlug = new Map(
  servicesWithCategory.map((service) => [
    service.slug,
    `/services/${service.category.slug}/${service.slug}`,
  ])
);

const serviceBySlug = new Map(
  servicesWithCategory.map((service) => [service.slug, service])
);

export const industries: Industry[] = [
  {
    slug: "small-business",
    name: "Small Business",
    icon: "✦",
    heroHeadline: "Small business marketing that feels premium, not overwhelming.",
    heroSubtext:
      "You need clarity, speed, and a creative partner who understands lean teams and real-world budgets.",
    problems: [
      "Inconsistent brand presentation across channels.",
      "Websites that feel dated or hard to update.",
      "Marketing tasks piling up without a clear roadmap.",
      "Limited time to manage vendors and freelancers.",
    ],
    helpItems: [
      {
        title: "A focused brand presence",
        description:
          "We align your visuals, messaging, and digital footprint so customers instantly trust you.",
      },
      {
        title: "Conversion-ready web experiences",
        description:
          "Your site becomes a sales tool that guides visitors toward action.",
      },
      {
        title: "Clear next-step guidance",
        description:
          "You get a simple, prioritized plan that keeps marketing momentum steady.",
      },
    ],
    recommendedServices: ["webflow", "brand-identity", "local-seo"],
    recommendedPackages: [
      { serviceSlug: "webflow", packageSlug: "starter" },
      { serviceSlug: "brand-identity", packageSlug: "growth" },
    ],
    formCtaLabel: "Order Now",
  },
  {
    slug: "startups",
    name: "Startups",
    icon: "◆",
    heroHeadline: "Launch-ready creative support for ambitious startups.",
    heroSubtext:
      "Move fast without cutting corners. We help you look credible from day one and stay investor-ready.",
    problems: [
      "Too many priorities, not enough clarity.",
      "Pitching before your brand looks established.",
      "Needing fast iteration without messy handoffs.",
      "Marketing assets living in too many places.",
    ],
    helpItems: [
      {
        title: "Credibility from the first impression",
        description:
          "We design experiences that make new brands feel instantly established.",
      },
      {
        title: "Launch systems that scale",
        description:
          "Build with structure now so growth doesn’t break the foundation later.",
      },
      {
        title: "Aligned messaging for every channel",
        description:
          "We turn your vision into copy and visuals that stay consistent across teams.",
      },
    ],
    recommendedServices: ["nextjs", "marketing-strategy", "brand-identity"],
    recommendedPackages: [
      { serviceSlug: "nextjs", packageSlug: "starter" },
      { serviceSlug: "marketing-strategy", packageSlug: "growth" },
    ],
    formCtaLabel: "Order Now",
  },
  {
    slug: "ecommerce",
    name: "Ecommerce",
    icon: "⬢",
    heroHeadline: "Ecommerce experiences that turn browsers into buyers.",
    heroSubtext:
      "We build storefronts, content, and marketing flows that help you sell confidently at scale.",
    problems: [
      "Low conversion rates despite solid traffic.",
      "Storefronts that feel generic or untrustworthy.",
      "Email flows and SEO disconnected from the purchase journey.",
      "Need to launch promotions quickly without delays.",
    ],
    helpItems: [
      {
        title: "Higher-converting storefronts",
        description:
          "We optimize layout, messaging, and flow so shoppers keep moving to checkout.",
      },
      {
        title: "Retention-first marketing",
        description:
          "Campaigns and email automation keep customers coming back.",
      },
      {
        title: "Scalable creative systems",
        description:
          "Your product drops and campaigns stay consistent and easy to launch.",
      },
    ],
    recommendedServices: ["shopify", "ecommerce-seo", "email-marketing"],
    recommendedPackages: [
      { serviceSlug: "shopify", packageSlug: "starter" },
      { serviceSlug: "ecommerce-seo", packageSlug: "growth" },
    ],
    formCtaLabel: "Order Now",
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    icon: "⬡",
    heroHeadline: "Real estate marketing that elevates listings and agents.",
    heroSubtext:
      "We help brokers and agents look premium, stay visible, and win more qualified leads.",
    problems: [
      "Listings and agent sites that feel outdated.",
      "Branding that doesn’t match premium pricing.",
      "Lead capture that doesn’t filter for fit.",
      "Marketing assets that aren’t cohesive across teams.",
    ],
    helpItems: [
      {
        title: "Polished digital experiences",
        description:
          "We design sites and assets that reflect the quality of your listings.",
      },
      {
        title: "Lead capture that qualifies",
        description:
          "We guide prospects toward high-intent inquiries and scheduled calls.",
      },
      {
        title: "Consistent listing marketing",
        description:
          "Templates and assets keep every listing looking premium and on-brand.",
      },
    ],
    recommendedServices: ["webflow", "brochure-design", "local-seo"],
    recommendedPackages: [
      { serviceSlug: "webflow", packageSlug: "starter" },
      { serviceSlug: "brochure-design", packageSlug: "growth" },
    ],
    formCtaLabel: "Talk to an Expert",
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    icon: "✚",
    heroHeadline: "Healthcare experiences built on trust and clarity.",
    heroSubtext:
      "Patients need confidence fast. We create clean, compliant, and reassuring digital experiences.",
    problems: [
      "Websites that feel cold or confusing to patients.",
      "Reputation management spread across too many platforms.",
      "Outdated messaging that doesn’t reflect modern care.",
      "Limited time to coordinate marketing internally.",
    ],
    helpItems: [
      {
        title: "Patient-first messaging",
        description:
          "We keep your language clear, calming, and action-oriented.",
      },
      {
        title: "Reputation-building touchpoints",
        description:
          "We strengthen reviews, profiles, and trust signals that patients look for.",
      },
      {
        title: "Reliable digital infrastructure",
        description:
          "A modern, secure site keeps information easy to find and update.",
      },
    ],
    recommendedServices: ["wordpress", "reputation-management", "local-seo"],
    recommendedPackages: [
      { serviceSlug: "wordpress", packageSlug: "starter" },
      { serviceSlug: "reputation-management", packageSlug: "growth" },
    ],
    formCtaLabel: "Order Now",
  },
  {
    slug: "law-firms",
    name: "Law Firms",
    icon: "⚖",
    heroHeadline: "Legal marketing that communicates authority and trust.",
    heroSubtext:
      "Clients expect clarity and professionalism. We make sure your firm looks established and credible.",
    problems: [
      "Potential clients struggle to understand services quickly.",
      "Websites that lack trust signals or professionalism.",
      "Local visibility that doesn’t match your expertise.",
      "Marketing content that feels inconsistent.",
    ],
    helpItems: [
      {
        title: "Authority-driven positioning",
        description:
          "We highlight your expertise with clean messaging and premium design.",
      },
      {
        title: "Local trust signals",
        description:
          "SEO and reputation assets build credibility with prospective clients.",
      },
      {
        title: "Conversion-focused contact flows",
        description:
          "We guide serious prospects toward consultations and intake forms.",
      },
    ],
    recommendedServices: ["wordpress", "local-seo", "reputation-management"],
    recommendedPackages: [
      { serviceSlug: "wordpress", packageSlug: "starter" },
      { serviceSlug: "local-seo", packageSlug: "growth" },
    ],
    formCtaLabel: "Talk to an Expert",
  },
  {
    slug: "restaurants",
    name: "Restaurants",
    icon: "🍽",
    heroHeadline: "Restaurant marketing that fills tables fast.",
    heroSubtext:
      "We help you show up locally, showcase your menu, and capture reservations without friction.",
    problems: [
      "Menus and hours are hard to find online.",
      "Inconsistent branding across delivery platforms.",
      "Low visibility in local search results.",
      "Social content takes too much time to produce.",
    ],
    helpItems: [
      {
        title: "Easy-to-update online menus",
        description:
          "We keep your site current so customers always see the latest offer.",
      },
      {
        title: "Local search dominance",
        description:
          "Optimized profiles and SEO keep you visible when people search nearby.",
      },
      {
        title: "Campaign-ready social content",
        description:
          "We deliver on-brand content that supports launches and promotions.",
      },
    ],
    recommendedServices: ["wix", "local-seo", "social-media-content"],
    recommendedPackages: [
      { serviceSlug: "wix", packageSlug: "starter" },
      { serviceSlug: "local-seo", packageSlug: "growth" },
    ],
    formCtaLabel: "Order Now",
  },
  {
    slug: "fitness-gyms",
    name: "Fitness & Gyms",
    icon: "🏋️",
    heroHeadline: "Fitness marketing that keeps classes and memberships full.",
    heroSubtext:
      "We help studios and gyms present premium experiences and keep leads engaged.",
    problems: [
      "Membership offers buried in cluttered websites.",
      "Inconsistent messaging across promotions.",
      "Low engagement on social channels.",
      "Difficulty tracking leads and inquiries.",
    ],
    helpItems: [
      {
        title: "Membership-focused positioning",
        description:
          "We highlight your best programs with clear calls to action.",
      },
      {
        title: "Content that energizes",
        description:
          "We produce social and email content that keeps your community active.",
      },
      {
        title: "Lead capture that converts",
        description:
          "We optimize forms and landing pages so prospects book faster.",
      },
    ],
    recommendedServices: ["wordpress", "social-media-management", "email-marketing"],
    recommendedPackages: [
      { serviceSlug: "wordpress", packageSlug: "starter" },
      { serviceSlug: "social-media-management", packageSlug: "growth" },
    ],
    formCtaLabel: "Order Now",
  },
  {
    slug: "education",
    name: "Education",
    icon: "🎓",
    heroHeadline: "Education marketing that feels credible and clear.",
    heroSubtext:
      "From programs to enrollment, we help you communicate value and guide students to the next step.",
    problems: [
      "Program details scattered across multiple pages.",
      "Enrollment journeys that feel confusing.",
      "Lack of consistent branding for courses.",
      "Limited time to create content regularly.",
    ],
    helpItems: [
      {
        title: "Structured, student-friendly messaging",
        description:
          "We organize your programs so prospects instantly understand the value.",
      },
      {
        title: "Enrollment-focused web flows",
        description:
          "Clear CTAs guide students toward applications and inquiries.",
      },
      {
        title: "Content systems that scale",
        description:
          "We build reusable templates so new programs launch quickly.",
      },
    ],
    recommendedServices: ["wordpress", "website-content", "email-marketing"],
    recommendedPackages: [
      { serviceSlug: "wordpress", packageSlug: "starter" },
      { serviceSlug: "website-content", packageSlug: "growth" },
    ],
    formCtaLabel: "Talk to an Expert",
  },
  {
    slug: "coaches-consultants",
    name: "Coaches & Consultants",
    icon: "✺",
    heroHeadline: "Personal brands that feel premium and persuasive.",
    heroSubtext:
      "We help you package your expertise into a brand that inspires confidence and bookings.",
    problems: [
      "Messaging that doesn’t clearly express your value.",
      "Inconsistent brand presentation across platforms.",
      "Lead magnets and funnels that feel disjointed.",
      "Limited time to manage design and content.",
    ],
    helpItems: [
      {
        title: "Signature positioning",
        description:
          "We clarify your offer and present it with premium visual direction.",
      },
      {
        title: "High-converting messaging",
        description:
          "Copy and content guide prospects toward calls and programs.",
      },
      {
        title: "Premium web presence",
        description:
          "Your site reflects authority and makes booking feel effortless.",
      },
    ],
    recommendedServices: ["brand-identity", "copywriting", "webflow"],
    recommendedPackages: [
      { serviceSlug: "brand-identity", packageSlug: "starter" },
      { serviceSlug: "copywriting", packageSlug: "growth" },
    ],
    formCtaLabel: "Order Now",
  },
  {
    slug: "saas",
    name: "SaaS",
    icon: "⟁",
    heroHeadline: "SaaS marketing that explains value fast.",
    heroSubtext:
      "We translate complex products into clear messaging, sleek design, and conversion-ready experiences.",
    problems: [
      "Product value propositions feel too technical.",
      "Landing pages don’t speak to specific use cases.",
      "Low demo conversions despite traffic.",
      "Launches that need more polish and speed.",
    ],
    helpItems: [
      {
        title: "Clear product storytelling",
        description:
          "We simplify the narrative so buyers understand benefits quickly.",
      },
      {
        title: "Conversion-first experiences",
        description:
          "Landing pages and demos are optimized for qualified leads.",
      },
      {
        title: "Launch-ready asset systems",
        description:
          "We deliver assets you can reuse across campaigns and releases.",
      },
    ],
    recommendedServices: ["react", "lead-generation", "product-video"],
    recommendedPackages: [
      { serviceSlug: "react", packageSlug: "starter" },
      { serviceSlug: "lead-generation", packageSlug: "growth" },
    ],
    formCtaLabel: "Talk to an Expert",
  },
  {
    slug: "nonprofits",
    name: "Nonprofits",
    icon: "❤",
    heroHeadline: "Nonprofit marketing that inspires action.",
    heroSubtext:
      "We help mission-driven teams build trust, attract donors, and communicate impact clearly.",
    problems: [
      "Donor journeys feel disjointed or unclear.",
      "Impact stories aren’t showcased effectively.",
      "Limited internal resources for marketing.",
      "Branding looks inconsistent across campaigns.",
    ],
    helpItems: [
      {
        title: "Impact-first storytelling",
        description:
          "We help you communicate outcomes that move donors to action.",
      },
      {
        title: "Fundraising-ready digital presence",
        description:
          "Your site and assets guide supporters toward giving.",
      },
      {
        title: "Consistent campaign assets",
        description:
          "We deliver templates that keep campaigns on-brand and fast to launch.",
      },
    ],
    recommendedServices: ["wordpress", "brand-guidelines", "email-marketing"],
    recommendedPackages: [
      { serviceSlug: "wordpress", packageSlug: "starter" },
      { serviceSlug: "brand-guidelines", packageSlug: "growth" },
    ],
    formCtaLabel: "Order Now",
  },
  {
    slug: "local-services",
    name: "Local Services",
    icon: "⌂",
    heroHeadline: "Local service marketing that drives phone calls.",
    heroSubtext:
      "We keep your business visible locally and convert searchers into booked jobs.",
    problems: [
      "Low visibility on local search and maps.",
      "Websites that don’t drive calls or requests.",
      "Inconsistent reviews and reputation signals.",
      "Need for quick updates without tech bottlenecks.",
    ],
    helpItems: [
      {
        title: "Local visibility that sticks",
        description:
          "We optimize your presence for searches that drive immediate leads.",
      },
      {
        title: "Websites built to convert",
        description:
          "Clear CTAs make it easy for customers to request service.",
      },
      {
        title: "Reputation support",
        description:
          "We strengthen reviews and trust signals for faster decision making.",
      },
    ],
    recommendedServices: ["wix", "local-seo", "google-business-profile"],
    recommendedPackages: [
      { serviceSlug: "wix", packageSlug: "starter" },
      { serviceSlug: "local-seo", packageSlug: "growth" },
    ],
    formCtaLabel: "Order Now",
  },
  {
    slug: "home-services",
    name: "Home Services",
    icon: "⌂",
    heroHeadline: "Home service marketing that keeps the schedule full.",
    heroSubtext:
      "We help contractors and trades show up locally, look professional, and book more jobs.",
    problems: [
      "Websites that don’t build trust quickly.",
      "Low review volume compared to competitors.",
      "Disconnected lead capture and follow-up.",
      "Marketing assets that feel outdated.",
    ],
    helpItems: [
      {
        title: "Trust-first digital presence",
        description:
          "We showcase credibility so homeowners feel confident booking you.",
      },
      {
        title: "Review growth support",
        description:
          "We build systems that consistently generate positive reviews.",
      },
      {
        title: "Booking-ready experiences",
        description:
          "Sites and landing pages guide customers to request service fast.",
      },
    ],
    recommendedServices: ["wix", "review-generation", "local-seo"],
    recommendedPackages: [
      { serviceSlug: "wix", packageSlug: "starter" },
      { serviceSlug: "review-generation", packageSlug: "growth" },
    ],
    formCtaLabel: "Talk to an Expert",
  },
  {
    slug: "creators-influencers",
    name: "Creators & Influencers",
    icon: "✪",
    heroHeadline: "Creator brands that turn audiences into opportunities.",
    heroSubtext:
      "We help you monetize your platform with sleek branding, content, and digital experiences.",
    problems: [
      "Media kits and landing pages look inconsistent.",
      "Limited time to create on-brand content regularly.",
      "Sponsors need clearer proof of value.",
      "Branding assets scattered across tools.",
    ],
    helpItems: [
      {
        title: "Premium media presence",
        description:
          "We deliver a branded hub that makes collaborations feel effortless.",
      },
      {
        title: "Content systems that scale",
        description:
          "Templates and creative direction keep your content consistent.",
      },
      {
        title: "Clear monetization pathways",
        description:
          "We structure offers and CTAs so brands know how to work with you.",
      },
    ],
    recommendedServices: ["webflow", "social-media-reels", "social-media-content"],
    recommendedPackages: [
      { serviceSlug: "webflow", packageSlug: "starter" },
      { serviceSlug: "social-media-reels", packageSlug: "growth" },
    ],
    formCtaLabel: "Order Now",
  },
];

export const industryBySlug = new Map(
  industries.map((industry) => [industry.slug, industry])
);

export const industryLinksByCategory: Record<string, string[]> = {
  "website-design-development": ["small-business", "startups"],
  ecommerce: ["ecommerce", "creators-influencers"],
  branding: ["small-business", "coaches-consultants"],
  marketing: ["startups", "local-services"],
  seo: ["local-services", "ecommerce"],
  "social-media": ["creators-influencers", "restaurants"],
  advertising: ["saas", "ecommerce"],
  content: ["coaches-consultants", "education"],
  video: ["creators-influencers", "saas"],
  reputation: ["local-services", "healthcare"],
  "automation-tools": ["saas", "startups"],
  printing: ["real-estate", "home-services"],
};

export const getIndustryLinksForService = (serviceSlug: string) => {
  const service = serviceBySlug.get(serviceSlug);
  if (!service) {
    return [];
  }
  const slugs = industryLinksByCategory[service.category.slug] ?? [
    "small-business",
  ];
  return slugs
    .map((slug) => industryBySlug.get(slug))
    .filter((industry): industry is Industry => Boolean(industry))
    .map((industry) => ({ label: industry.name, href: `/industries/${industry.slug}` }))
    .slice(0, 2);
};

export const buildIndustryServiceCards = (serviceSlugs: string[]) =>
  serviceSlugs
    .map((slug) => serviceBySlug.get(slug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service))
    .map((service) => ({
      label: service.name,
      description: service.description,
      href: serviceLinkBySlug.get(service.slug) ?? `/services/${service.slug}`,
    }));

export const buildIndustryPackageCards = (packageRefs: IndustryPackageRef[]) =>
  packageRefs.map(({ serviceSlug, packageSlug }) => {
    const pkg = (packagesByServiceSlug[serviceSlug] ?? []).find(
      (item) => item.slug === packageSlug
    );
    return {
      label:
        pkg?.name ?? `${packageSlug} ${serviceBySlug.get(serviceSlug)?.name ?? "Package"}`,
      description: pkg?.summary ?? "A focused scope with fast delivery.",
      href: `/packages/${serviceSlug}/${packageSlug}`,
    };
  });
