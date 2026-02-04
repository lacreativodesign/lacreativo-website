import { servicesWithCategory } from "./services";

type Industry = {
  slug: string;
  name: string;
  icon: string;
  descriptor: string;
  heroHeadline: string;
  heroSubtext: string;
  challenges: string[];
  serviceSlugs: string[];
  formCtaLabel: "Order Now" | "Talk to an Expert";
};

type IndustryServiceCard = {
  label: string;
  description: string;
  href: string;
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
    slug: "startups-saas",
    name: "Startups & SaaS",
    icon: "◆",
    descriptor: "Launch fast with investor-ready positioning and crisp product storytelling.",
    heroHeadline: "Startup and SaaS marketing that earns trust fast.",
    heroSubtext:
      "We help founders communicate value clearly, launch quickly, and stay credible with investors, partners, and early customers.",
    challenges: [
      "Explaining complex products without losing non-technical buyers.",
      "Landing pages that don’t drive demo requests or sign-ups.",
      "Releases that move fast but feel inconsistent or rushed.",
      "Brand credibility that doesn’t match the vision yet.",
    ],
    serviceSlugs: ["nextjs", "marketing-strategy", "copywriting", "product-video"],
    formCtaLabel: "Talk to an Expert",
  },
  {
    slug: "small-businesses",
    name: "Small Businesses",
    icon: "✦",
    descriptor: "Keep your brand consistent and visible without the agency overhead.",
    heroHeadline: "Small business marketing that feels premium, not overwhelming.",
    heroSubtext:
      "Lean teams need clarity, speed, and a creative partner who understands real-world budgets and timelines.",
    challenges: [
      "Inconsistent brand presentation across platforms.",
      "Websites that feel dated or hard to update quickly.",
      "Marketing priorities that change faster than the plan.",
      "Limited time to manage freelancers and vendors.",
    ],
    serviceSlugs: ["webflow", "brand-identity", "local-seo", "social-media-content"],
    formCtaLabel: "Order Now",
  },
  {
    slug: "ecommerce-dtc",
    name: "E-Commerce & DTC Brands",
    icon: "⬢",
    descriptor: "Increase conversion rates and repeat orders with polished storefronts.",
    heroHeadline: "E-commerce experiences that turn browsers into buyers.",
    heroSubtext:
      "We build storefronts, content, and lifecycle marketing that help you sell confidently at scale.",
    challenges: [
      "Low conversion rates despite steady traffic.",
      "Storefronts that feel generic or untrustworthy.",
      "Email and SEO efforts that are disconnected from the purchase journey.",
      "Campaigns that are slow to launch or inconsistent.",
    ],
    serviceSlugs: ["shopify", "ecommerce-seo", "email-marketing", "meta-ads"],
    formCtaLabel: "Order Now",
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    icon: "⬡",
    descriptor: "Premium listing experiences that help agents win qualified leads.",
    heroHeadline: "Real estate marketing that elevates listings and agents.",
    heroSubtext:
      "We help brokers and agents look premium, stay visible, and capture higher-intent inquiries.",
    challenges: [
      "Listings and agent sites that feel outdated or hard to navigate.",
      "Branding that doesn’t match premium pricing expectations.",
      "Lead capture flows that don’t filter for qualified buyers.",
      "Marketing assets that vary across teams and listings.",
    ],
    serviceSlugs: ["webflow", "brochure-design", "local-seo", "google-business-profile"],
    formCtaLabel: "Talk to an Expert",
  },
  {
    slug: "healthcare-clinics",
    name: "Healthcare & Clinics",
    icon: "✚",
    descriptor: "Build patient trust with calm, compliant, easy-to-navigate experiences.",
    heroHeadline: "Healthcare experiences built on trust and clarity.",
    heroSubtext:
      "Patients need confidence fast. We create clean, reassuring digital experiences that keep care accessible.",
    challenges: [
      "Websites that feel cold, confusing, or outdated.",
      "Inconsistent reputation signals across platforms.",
      "Messaging that doesn’t reflect modern care standards.",
      "Limited internal time to manage marketing.",
    ],
    serviceSlugs: ["wordpress", "reputation-management", "local-seo", "website-content"],
    formCtaLabel: "Order Now",
  },
  {
    slug: "law-firms",
    name: "Law Firms",
    icon: "⚖",
    descriptor: "Communicate authority, professionalism, and clear next steps.",
    heroHeadline: "Legal marketing that communicates authority and trust.",
    heroSubtext:
      "Clients expect clarity and professionalism. We make sure your firm looks established and credible.",
    challenges: [
      "Prospects struggle to understand services quickly.",
      "Websites that lack trust signals or a premium look.",
      "Local visibility that doesn’t match your expertise.",
      "Marketing materials that feel inconsistent across practice areas.",
    ],
    serviceSlugs: ["wordpress", "local-seo", "reputation-management", "copywriting"],
    formCtaLabel: "Talk to an Expert",
  },
  {
    slug: "coaches-consultants",
    name: "Coaches & Consultants",
    icon: "✺",
    descriptor: "Position your expertise and convert more discovery calls.",
    heroHeadline: "Personal brands that feel premium and persuasive.",
    heroSubtext:
      "We help you package your expertise into a brand that inspires confidence and bookings.",
    challenges: [
      "Messaging that doesn’t clearly communicate your value.",
      "Inconsistent presentation across platforms and funnels.",
      "Lead magnets and offers that feel disconnected.",
      "Limited time to manage design and content.",
    ],
    serviceSlugs: ["brand-identity", "copywriting", "webflow", "email-marketing"],
    formCtaLabel: "Order Now",
  },
  {
    slug: "restaurants-hospitality",
    name: "Restaurants & Hospitality",
    icon: "🍽",
    descriptor: "Drive reservations with clear menus and local visibility.",
    heroHeadline: "Restaurant marketing that fills tables fast.",
    heroSubtext:
      "We help you show up locally, showcase your menu, and capture reservations without friction.",
    challenges: [
      "Menus and hours that are hard to find online.",
      "Inconsistent branding across delivery platforms.",
      "Low visibility in local search results.",
      "Social content that takes too much time to produce.",
    ],
    serviceSlugs: ["wix", "local-seo", "social-media-content", "review-generation"],
    formCtaLabel: "Order Now",
  },
  {
    slug: "construction-trades",
    name: "Construction & Trades",
    icon: "🛠",
    descriptor: "Win more qualified jobs with trust-first local marketing.",
    heroHeadline: "Construction marketing that keeps the schedule full.",
    heroSubtext:
      "We help contractors and trade businesses look professional, show up locally, and book more jobs.",
    challenges: [
      "Websites that don’t build trust quickly.",
      "Low review volume compared to competitors.",
      "Disconnected lead capture and follow-up.",
      "Marketing assets that feel outdated or inconsistent.",
    ],
    serviceSlugs: ["wix", "review-generation", "local-seo", "google-business-profile"],
    formCtaLabel: "Talk to an Expert",
  },
  {
    slug: "education-training",
    name: "Education & Training",
    icon: "🎓",
    descriptor: "Guide students from interest to enrollment with clarity.",
    heroHeadline: "Education marketing that feels credible and clear.",
    heroSubtext:
      "From programs to enrollment, we help you communicate value and guide students to the next step.",
    challenges: [
      "Program details scattered across too many pages.",
      "Enrollment journeys that feel confusing or slow.",
      "Branding that varies across courses and cohorts.",
      "Limited time to create content regularly.",
    ],
    serviceSlugs: ["wordpress", "website-content", "email-marketing", "lead-generation"],
    formCtaLabel: "Talk to an Expert",
  },
  {
    slug: "finance-professional-services",
    name: "Finance & Professional Services",
    icon: "◆",
    descriptor: "Communicate trust, compliance, and clarity for high-value clients.",
    heroHeadline: "Professional services marketing built for credibility.",
    heroSubtext:
      "We help advisory firms, accountants, and professional services teams look established and easy to trust.",
    challenges: [
      "Complex offerings that are hard to explain quickly.",
      "Websites that don’t communicate authority or stability.",
      "Lead forms that don’t qualify the right clients.",
      "Outdated visuals that undercut trust.",
    ],
    serviceSlugs: ["brand-identity", "webflow", "copywriting", "brand-guidelines"],
    formCtaLabel: "Talk to an Expert",
  },
  {
    slug: "creators-personal-brands",
    name: "Creators & Personal Brands",
    icon: "✪",
    descriptor: "Turn audience attention into partnerships and revenue.",
    heroHeadline: "Creator brands that turn audiences into opportunities.",
    heroSubtext:
      "We help you monetize your platform with sleek branding, content, and digital experiences.",
    challenges: [
      "Media kits and landing pages that feel inconsistent.",
      "Limited time to create on-brand content regularly.",
      "Sponsors need clearer proof of value.",
      "Brand assets scattered across tools and platforms.",
    ],
    serviceSlugs: ["webflow", "social-media-reels", "social-media-content", "brand-identity"],
    formCtaLabel: "Order Now",
  },
];

export const industryBySlug = new Map(
  industries.map((industry) => [industry.slug, industry])
);

export const industryRecommendationsByCategory: Record<
  string,
  { slug: string; reason: string }[]
> = {
  "website-design-development": [
    {
      slug: "small-businesses",
      reason: "Owners need a modern site that builds trust fast.",
    },
    {
      slug: "startups-saas",
      reason: "Teams need launch-ready pages that explain the product clearly.",
    },
    {
      slug: "healthcare-clinics",
      reason: "Patients want a calm, easy-to-navigate experience.",
    },
  ],
  ecommerce: [
    {
      slug: "ecommerce-dtc",
      reason: "Shops need faster checkouts and stronger product storytelling.",
    },
    {
      slug: "creators-personal-brands",
      reason: "Creators need a store that feels premium and simple to manage.",
    },
    {
      slug: "small-businesses",
      reason: "Local teams want a storefront that’s easy to keep updated.",
    },
  ],
  branding: [
    {
      slug: "coaches-consultants",
      reason: "Personal brands need clarity and a premium first impression.",
    },
    {
      slug: "finance-professional-services",
      reason: "Professional firms need consistent, trust-first visuals.",
    },
    {
      slug: "startups-saas",
      reason: "Founders want credibility to match fast growth.",
    },
  ],
  marketing: [
    {
      slug: "startups-saas",
      reason: "Growth teams need a focused plan and fast iterations.",
    },
    {
      slug: "small-businesses",
      reason: "Lean teams need consistent execution without the overhead.",
    },
    {
      slug: "restaurants-hospitality",
      reason: "Hospitality teams need quick campaigns that drive traffic.",
    },
  ],
  seo: [
    {
      slug: "restaurants-hospitality",
      reason: "Local discovery drives reservations and walk-ins.",
    },
    {
      slug: "construction-trades",
      reason: "Trade businesses rely on local visibility to book jobs.",
    },
    {
      slug: "law-firms",
      reason: "Firms need trust signals and local rankings to win cases.",
    },
  ],
  "social-media": [
    {
      slug: "creators-personal-brands",
      reason: "Creators need consistent content and a premium look.",
    },
    {
      slug: "restaurants-hospitality",
      reason: "Restaurants need steady posts that fill tables.",
    },
    {
      slug: "ecommerce-dtc",
      reason: "Brands need short-form content that drives product clicks.",
    },
  ],
  advertising: [
    {
      slug: "ecommerce-dtc",
      reason: "Paid ads need tight creative and clear conversion paths.",
    },
    {
      slug: "startups-saas",
      reason: "Startups need crisp positioning to earn trial sign-ups.",
    },
    {
      slug: "real-estate",
      reason: "Listings need targeted ads that filter high-intent leads.",
    },
  ],
  content: [
    {
      slug: "education-training",
      reason: "Programs need clear content that guides enrollment.",
    },
    {
      slug: "coaches-consultants",
      reason: "Expert brands need messaging that explains value fast.",
    },
    {
      slug: "finance-professional-services",
      reason: "Firms need precise, trust-building copy.",
    },
  ],
  video: [
    {
      slug: "creators-personal-brands",
      reason: "Creators need short video that keeps audiences engaged.",
    },
    {
      slug: "ecommerce-dtc",
      reason: "Product videos increase confidence before checkout.",
    },
    {
      slug: "startups-saas",
      reason: "Explainers help teams communicate complex value quickly.",
    },
  ],
  reputation: [
    {
      slug: "law-firms",
      reason: "Reviews and trust signals influence case inquiries.",
    },
    {
      slug: "healthcare-clinics",
      reason: "Patients choose providers who feel credible and consistent.",
    },
    {
      slug: "construction-trades",
      reason: "Homeowners check reviews before booking jobs.",
    },
  ],
  "automation-tools": [
    {
      slug: "startups-saas",
      reason: "Fast-moving teams need workflows that scale.",
    },
    {
      slug: "finance-professional-services",
      reason: "Firms need reliable handoffs and clean data.",
    },
    {
      slug: "ecommerce-dtc",
      reason: "Stores need automations that reduce manual work.",
    },
  ],
  printing: [
    {
      slug: "real-estate",
      reason: "Listings need premium print to stand out.",
    },
    {
      slug: "construction-trades",
      reason: "Trade teams need durable collateral for bids.",
    },
    {
      slug: "restaurants-hospitality",
      reason: "Menus and promos need clean, on-brand print.",
    },
  ],
};

export const getIndustryLinksForService = (serviceSlug: string) => {
  const service = serviceBySlug.get(serviceSlug);
  if (!service) {
    return [];
  }
  const recommendations =
    industryRecommendationsByCategory[service.category.slug] ?? [
      { slug: "small-businesses", reason: "A reliable fit for most small teams." },
    ];
  return recommendations
    .map((item) => industryBySlug.get(item.slug))
    .filter((industry): industry is Industry => Boolean(industry))
    .map((industry) => ({
      label: industry.name,
      href: `/industries/${industry.slug}`,
    }))
    .slice(0, 2);
};

export const getIndustryRecommendationsForService = (serviceSlug: string) => {
  const service = serviceBySlug.get(serviceSlug);
  if (!service) {
    return [];
  }
  const recommendations =
    industryRecommendationsByCategory[service.category.slug] ?? [
      { slug: "small-businesses", reason: "A reliable fit for most small teams." },
    ];
  return recommendations
    .map((item) => {
      const industry = industryBySlug.get(item.slug);
      if (!industry) {
        return null;
      }
      return {
        label: industry.name,
        href: `/industries/${industry.slug}`,
        description: item.reason,
      };
    })
    .filter(
      (
        item
      ): item is {
        label: string;
        href: string;
        description: string;
      } => Boolean(item)
    )
    .slice(0, 5);
};

export const getPrimaryIndustryLinkForService = (serviceSlug: string) => {
  const [primary] = getIndustryLinksForService(serviceSlug);
  return primary;
};

export const buildIndustryServiceCards = (
  serviceSlugs: string[]
): IndustryServiceCard[] =>
  serviceSlugs
    .map((slug) => serviceBySlug.get(slug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service))
    .map((service) => ({
      label: service.name,
      description: service.description,
      href: serviceLinkBySlug.get(service.slug) ?? `/services/${service.slug}`,
    }));
