export type ServiceDefinition = {
  slug: string;
  name: string;
  description: string;
  focus: string;
  metaTitle: string;
  metaDescription: string;
  packageCount: 3 | 6;
  basePrice: number;
};

export type ServiceCategory = {
  slug: string;
  name: string;
  description: string;
  heroHeadline: string;
  heroDescription: string;
  metaTitle: string;
  metaDescription: string;
  services: ServiceDefinition[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "website-design-development",
    name: "Website Design & Development",
    description:
      "Premium, conversion-ready websites built for clarity, speed, and confident customer action.",
    heroHeadline: "Launch a modern website that earns trust and drives revenue.",
    heroDescription:
      "We guide USA-based small businesses through strategy, design, and development so every page feels intentional and ready to convert.",
    metaTitle: "Website Design & Development Services | LA CREATIVO",
    metaDescription:
      "Conversion-ready website design and development for USA small businesses. Clear scope, fast delivery, and launch-ready builds.",
    services: [
      {
        slug: "wordpress",
        name: "WordPress Development",
        description:
          "Flexible WordPress sites that are easy to update and built to convert.",
        focus: "a WordPress experience that is easy for your team to manage",
        metaTitle: "WordPress Development Services | LA CREATIVO",
        metaDescription:
          "WordPress development for USA small businesses that want a fast, easy-to-edit website with conversion-first structure.",
        packageCount: 6,
        basePrice: 750,
      },
      {
        slug: "react",
        name: "React Website Development",
        description:
          "High-performance React sites with sleek UI and scalable structure.",
        focus: "a fast, interactive React site that stays performant",
        metaTitle: "React Website Development Services | LA CREATIVO",
        metaDescription:
          "React website development for USA businesses ready for speed, interactivity, and a polished digital experience.",
        packageCount: 6,
        basePrice: 1200,
      },
      {
        slug: "nextjs",
        name: "Next.js Website Development",
        description:
          "Next.js builds that combine speed, SEO clarity, and future-proof structure.",
        focus: "a Next.js build optimized for SEO and speed",
        metaTitle: "Next.js Website Development Services | LA CREATIVO",
        metaDescription:
          "Next.js development for USA small businesses that need a future-proof site with strong SEO and performance.",
        packageCount: 6,
        basePrice: 1400,
      },
      {
        slug: "webflow",
        name: "Webflow Website Design",
        description:
          "Design-forward Webflow sites you can launch and edit fast.",
        focus: "a Webflow site your team can update without code",
        metaTitle: "Webflow Website Design Services | LA CREATIVO",
        metaDescription:
          "Webflow website design for USA businesses that want premium visuals with easy content updates.",
        packageCount: 6,
        basePrice: 900,
      },
      {
        slug: "wix",
        name: "Wix Website Design",
        description:
          "Clean, polished Wix sites for teams who want speed and simplicity.",
        focus: "a Wix site that looks custom while staying simple",
        metaTitle: "Wix Website Design Services | LA CREATIVO",
        metaDescription:
          "Wix website design for USA small businesses that want a clean, easy-to-manage site without complexity.",
        packageCount: 6,
        basePrice: 600,
      },
      {
        slug: "custom-html",
        name: "Custom HTML Website Development",
        description:
          "Lightweight custom HTML builds for total control and performance.",
        focus: "a custom HTML site with total control and speed",
        metaTitle: "Custom HTML Website Development | LA CREATIVO",
        metaDescription:
          "Custom HTML website development for USA businesses needing speed, control, and a lean footprint.",
        packageCount: 6,
        basePrice: 1100,
      },
    ],
  },
  {
    slug: "ecommerce",
    name: "E-Commerce",
    description:
      "Online stores designed to sell, keep customers confident, and scale smoothly.",
    heroHeadline: "Build an online store that converts browsers into repeat buyers.",
    heroDescription:
      "We create USA-ready ecommerce experiences that feel polished, trustworthy, and easy to manage for small business teams.",
    metaTitle: "E-Commerce Development Services | LA CREATIVO",
    metaDescription:
      "E-commerce development for USA small businesses. Launch conversion-ready online stores with clear scopes and timelines.",
    services: [
      {
        slug: "shopify",
        name: "Shopify Store Design",
        description:
          "Shopify storefronts that feel premium and drive faster checkouts.",
        focus: "a Shopify store optimized for conversion and clarity",
        metaTitle: "Shopify Store Design Services | LA CREATIVO",
        metaDescription:
          "Shopify store design for USA small businesses that need a premium storefront with clear conversion flow.",
        packageCount: 6,
        basePrice: 1200,
      },
      {
        slug: "woocommerce",
        name: "WooCommerce Development",
        description:
          "WooCommerce builds that pair WordPress flexibility with ecommerce power.",
        focus: "a WooCommerce store that is easy to manage",
        metaTitle: "WooCommerce Development Services | LA CREATIVO",
        metaDescription:
          "WooCommerce development for USA businesses that want ecommerce power with WordPress flexibility.",
        packageCount: 6,
        basePrice: 1400,
      },
      {
        slug: "magento",
        name: "Magento Commerce Development",
        description:
          "Robust Magento builds for high-SKU stores and complex needs.",
        focus: "a Magento store that can scale with your catalog",
        metaTitle: "Magento Commerce Development Services | LA CREATIVO",
        metaDescription:
          "Magento development for USA ecommerce brands needing enterprise-grade structure and scalability.",
        packageCount: 6,
        basePrice: 2400,
      },
      {
        slug: "bigcommerce",
        name: "BigCommerce Development",
        description:
          "BigCommerce stores built for speed, stability, and growth.",
        focus: "a BigCommerce storefront built for stable growth",
        metaTitle: "BigCommerce Development Services | LA CREATIVO",
        metaDescription:
          "BigCommerce development for USA businesses that need a powerful and dependable online store.",
        packageCount: 6,
        basePrice: 1900,
      },
      {
        slug: "wix-ecommerce",
        name: "Wix Ecommerce Setup",
        description:
          "Wix ecommerce builds for small catalogs and quick launches.",
        focus: "a Wix ecommerce site that is fast to launch",
        metaTitle: "Wix Ecommerce Setup Services | LA CREATIVO",
        metaDescription:
          "Wix ecommerce setup for USA small businesses that want a simple, sell-ready storefront quickly.",
        packageCount: 6,
        basePrice: 950,
      },
      {
        slug: "custom-commerce",
        name: "Custom Commerce Builds",
        description:
          "Custom ecommerce builds tailored to unique workflows.",
        focus: "a custom commerce solution tailored to your workflows",
        metaTitle: "Custom Commerce Development | LA CREATIVO",
        metaDescription:
          "Custom commerce development for USA businesses needing a tailored ecommerce experience.",
        packageCount: 6,
        basePrice: 2600,
      },
    ],
  },
  {
    slug: "branding",
    name: "Branding",
    description:
      "Brand foundations that help you look established, consistent, and ready to grow.",
    heroHeadline: "Create a brand identity that feels cohesive and instantly trustworthy.",
    heroDescription:
      "We help USA small businesses translate their vision into a consistent visual system that customers recognize.",
    metaTitle: "Branding Services | LA CREATIVO",
    metaDescription:
      "Branding services for USA small businesses including identity, logo design, and brand guidelines.",
    services: [
      {
        slug: "logo-design",
        name: "Logo Design",
        description:
          "Distinctive logos designed to feel timeless and flexible.",
        focus: "a logo system that feels professional everywhere",
        metaTitle: "Logo Design Services | LA CREATIVO",
        metaDescription:
          "Logo design for USA small businesses that need a mark built for trust and longevity.",
        packageCount: 3,
        basePrice: 450,
      },
      {
        slug: "brand-identity",
        name: "Brand Identity",
        description:
          "Full identity systems that connect your visuals and messaging.",
        focus: "a full brand identity that stays consistent across channels",
        metaTitle: "Brand Identity Services | LA CREATIVO",
        metaDescription:
          "Brand identity services for USA small businesses ready to align visuals, voice, and messaging.",
        packageCount: 3,
        basePrice: 900,
      },
      {
        slug: "brand-guidelines",
        name: "Brand Guidelines",
        description:
          "Clear brand rules that keep your team aligned.",
        focus: "guidelines that keep your brand consistent",
        metaTitle: "Brand Guidelines Services | LA CREATIVO",
        metaDescription:
          "Brand guidelines for USA businesses that want clarity on how to apply their identity.",
        packageCount: 3,
        basePrice: 650,
      },
      {
        slug: "business-cards",
        name: "Business Cards",
        description:
          "Premium business card design that feels memorable.",
        focus: "business cards that feel premium and intentional",
        metaTitle: "Business Card Design Services | LA CREATIVO",
        metaDescription:
          "Business card design for USA small businesses that want premium, print-ready collateral.",
        packageCount: 3,
        basePrice: 280,
      },
      {
        slug: "brochure-design",
        name: "Brochure Design",
        description:
          "Brochures that tell your story clearly and confidently.",
        focus: "brochures that explain your offer with clarity",
        metaTitle: "Brochure Design Services | LA CREATIVO",
        metaDescription:
          "Brochure design for USA businesses needing clear, persuasive print collateral.",
        packageCount: 3,
        basePrice: 550,
      },
      {
        slug: "social-media-kit",
        name: "Social Media Kit",
        description:
          "Social media visuals that keep your brand consistent.",
        focus: "social media visuals that feel on-brand",
        metaTitle: "Social Media Kit Design | LA CREATIVO",
        metaDescription:
          "Social media kit design for USA small businesses that want consistent branded visuals.",
        packageCount: 3,
        basePrice: 350,
      },
    ],
  },
  {
    slug: "marketing",
    name: "Marketing",
    description:
      "Marketing systems that keep your pipeline active and your message consistent.",
    heroHeadline: "Build a marketing system that keeps leads coming in.",
    heroDescription:
      "We help USA small businesses create clear marketing plans and campaigns that feel human and credible.",
    metaTitle: "Marketing Services | LA CREATIVO",
    metaDescription:
      "Marketing services for USA small businesses including digital marketing, strategy, and lead generation.",
    services: [
      {
        slug: "digital-marketing",
        name: "Digital Marketing",
        description:
          "Multi-channel marketing plans that stay focused on revenue.",
        focus: "a digital marketing plan that builds steady visibility",
        metaTitle: "Digital Marketing Services | LA CREATIVO",
        metaDescription:
          "Digital marketing services for USA small businesses needing a clear, revenue-focused plan.",
        packageCount: 3,
        basePrice: 650,
      },
      {
        slug: "marketing-strategy",
        name: "Marketing Strategy",
        description:
          "Strategic roadmaps that align messaging, channels, and timing.",
        focus: "a marketing strategy that makes every channel purposeful",
        metaTitle: "Marketing Strategy Services | LA CREATIVO",
        metaDescription:
          "Marketing strategy for USA small businesses that want a clear, confident roadmap.",
        packageCount: 3,
        basePrice: 800,
      },
      {
        slug: "lead-generation",
        name: "Lead Generation",
        description:
          "Lead capture campaigns that turn interest into conversations.",
        focus: "lead generation funnels that convert interest",
        metaTitle: "Lead Generation Services | LA CREATIVO",
        metaDescription:
          "Lead generation services for USA small businesses ready for predictable inquiry flow.",
        packageCount: 3,
        basePrice: 900,
      },
    ],
  },
  {
    slug: "seo",
    name: "SEO",
    description:
      "Search visibility built on clean structure, helpful content, and real-world results.",
    heroHeadline: "Earn search visibility that brings customers to you.",
    heroDescription:
      "Our SEO services help USA small businesses show up in the right searches with a plan that stays clear and achievable.",
    metaTitle: "SEO Services | LA CREATIVO",
    metaDescription:
      "SEO services for USA small businesses including technical, local, and ecommerce SEO.",
    services: [
      {
        slug: "on-page-seo",
        name: "On-Page SEO",
        description:
          "Optimize your pages for clarity, relevance, and ranking.",
        focus: "on-page updates that make content search-ready",
        metaTitle: "On-Page SEO Services | LA CREATIVO",
        metaDescription:
          "On-page SEO for USA small businesses that need clear, optimized content and structure.",
        packageCount: 3,
        basePrice: 500,
      },
      {
        slug: "technical-seo",
        name: "Technical SEO",
        description:
          "Technical fixes that improve speed, crawlability, and trust.",
        focus: "technical SEO that keeps your site healthy",
        metaTitle: "Technical SEO Services | LA CREATIVO",
        metaDescription:
          "Technical SEO for USA small businesses that want faster, cleaner, more crawlable sites.",
        packageCount: 3,
        basePrice: 700,
      },
      {
        slug: "local-seo",
        name: "Local SEO",
        description:
          "Local visibility that helps nearby customers find you first.",
        focus: "local SEO that wins map pack visibility",
        metaTitle: "Local SEO Services | LA CREATIVO",
        metaDescription:
          "Local SEO for USA small businesses that need to stand out in local search results.",
        packageCount: 3,
        basePrice: 650,
      },
      {
        slug: "ecommerce-seo",
        name: "Ecommerce SEO",
        description:
          "Product and category SEO tuned for ecommerce sales.",
        focus: "ecommerce SEO that drives product discovery",
        metaTitle: "Ecommerce SEO Services | LA CREATIVO",
        metaDescription:
          "Ecommerce SEO for USA online stores that want more qualified product traffic.",
        packageCount: 3,
        basePrice: 850,
      },
      {
        slug: "seo-audits",
        name: "SEO Audits",
        description:
          "Clear SEO audits that highlight exactly what to fix next.",
        focus: "SEO audits that turn data into an action plan",
        metaTitle: "SEO Audit Services | LA CREATIVO",
        metaDescription:
          "SEO audits for USA businesses that want a clear, prioritized search improvement plan.",
        packageCount: 3,
        basePrice: 450,
      },
    ],
  },
  {
    slug: "social-media",
    name: "Social Media",
    description:
      "Social media systems that keep your brand active without the daily stress.",
    heroHeadline: "Stay consistent on social without the constant scramble.",
    heroDescription:
      "We help USA small businesses show up on social with clear content direction and steady community care.",
    metaTitle: "Social Media Services | LA CREATIVO",
    metaDescription:
      "Social media services for USA small businesses including management, content, and community care.",
    services: [
      {
        slug: "social-media-management",
        name: "Social Media Management",
        description:
          "Full-service social management to keep you visible and consistent.",
        focus: "social media management that keeps your feed active",
        metaTitle: "Social Media Management Services | LA CREATIVO",
        metaDescription:
          "Social media management for USA small businesses ready for consistent, branded posting.",
        packageCount: 3,
        basePrice: 650,
      },
      {
        slug: "social-media-content",
        name: "Social Media Content",
        description:
          "Content creation and templates for a cohesive feed.",
        focus: "content creation that keeps your brand consistent",
        metaTitle: "Social Media Content Services | LA CREATIVO",
        metaDescription:
          "Social media content services for USA businesses that want scroll-stopping, on-brand visuals.",
        packageCount: 3,
        basePrice: 450,
      },
      {
        slug: "community-management",
        name: "Community Management",
        description:
          "Friendly, prompt engagement that builds loyalty.",
        focus: "community management that keeps conversations warm",
        metaTitle: "Community Management Services | LA CREATIVO",
        metaDescription:
          "Community management for USA small businesses that want consistent engagement and trust.",
        packageCount: 3,
        basePrice: 550,
      },
    ],
  },
  {
    slug: "advertising",
    name: "Advertising",
    description:
      "Paid advertising with clear targeting, creative, and measurable ROI.",
    heroHeadline: "Run ads that feel smart, intentional, and trackable.",
    heroDescription:
      "We help USA small businesses build paid campaigns that are simple to understand and easy to scale.",
    metaTitle: "Advertising Services | LA CREATIVO",
    metaDescription:
      "Advertising services for USA small businesses including Meta, Google, LinkedIn, and retargeting ads.",
    services: [
      {
        slug: "meta-ads",
        name: "Meta Ads",
        description:
          "Meta campaigns built for attention and conversions.",
        focus: "Meta ads that connect with real buyers",
        metaTitle: "Meta Ads Services | LA CREATIVO",
        metaDescription:
          "Meta ads for USA small businesses ready to grow through paid social.",
        packageCount: 3,
        basePrice: 800,
      },
      {
        slug: "google-ads",
        name: "Google Ads",
        description:
          "Search campaigns that capture high-intent traffic.",
        focus: "Google Ads that capture ready-to-buy searches",
        metaTitle: "Google Ads Services | LA CREATIVO",
        metaDescription:
          "Google Ads for USA small businesses that want measurable search-driven leads.",
        packageCount: 3,
        basePrice: 900,
      },
      {
        slug: "linkedin-ads",
        name: "LinkedIn Ads",
        description:
          "LinkedIn campaigns designed for B2B credibility.",
        focus: "LinkedIn ads that build B2B pipelines",
        metaTitle: "LinkedIn Ads Services | LA CREATIVO",
        metaDescription:
          "LinkedIn ads for USA businesses that want B2B awareness and lead flow.",
        packageCount: 3,
        basePrice: 950,
      },
      {
        slug: "retargeting",
        name: "Retargeting",
        description:
          "Retargeting campaigns that bring visitors back to convert.",
        focus: "retargeting that turns interest into action",
        metaTitle: "Retargeting Ads Services | LA CREATIVO",
        metaDescription:
          "Retargeting ads for USA small businesses that want to convert warm traffic.",
        packageCount: 3,
        basePrice: 700,
      },
    ],
  },
  {
    slug: "content",
    name: "Content",
    description:
      "Content that educates, builds trust, and keeps your brand voice consistent.",
    heroHeadline: "Publish content that makes customers feel informed and ready.",
    heroDescription:
      "We help USA small businesses keep content fresh and strategic without sounding robotic.",
    metaTitle: "Content Services | LA CREATIVO",
    metaDescription:
      "Content services for USA businesses including copywriting, website content, blogs, and email marketing.",
    services: [
      {
        slug: "copywriting",
        name: "Copywriting",
        description:
          "Clear, persuasive copy that sounds human and confident.",
        focus: "copy that clarifies your offer and builds trust",
        metaTitle: "Copywriting Services | LA CREATIVO",
        metaDescription:
          "Copywriting for USA small businesses that want clear, persuasive brand messaging.",
        packageCount: 3,
        basePrice: 500,
      },
      {
        slug: "website-content",
        name: "Website Content",
        description:
          "Website copy that turns visitors into inquiries.",
        focus: "website content that answers buyer questions",
        metaTitle: "Website Content Services | LA CREATIVO",
        metaDescription:
          "Website content services for USA businesses that need clear, conversion-focused pages.",
        packageCount: 3,
        basePrice: 650,
      },
      {
        slug: "blog-writing",
        name: "Blog Writing",
        description:
          "Helpful blogs that build authority and visibility.",
        focus: "blog content that builds authority and SEO",
        metaTitle: "Blog Writing Services | LA CREATIVO",
        metaDescription:
          "Blog writing services for USA businesses that want consistent, SEO-friendly content.",
        packageCount: 3,
        basePrice: 450,
      },
      {
        slug: "email-marketing",
        name: "Email Marketing",
        description:
          "Email campaigns that nurture leads into customers.",
        focus: "email marketing that keeps your list engaged",
        metaTitle: "Email Marketing Services | LA CREATIVO",
        metaDescription:
          "Email marketing services for USA businesses that want stronger customer retention.",
        packageCount: 3,
        basePrice: 550,
      },
    ],
  },
  {
    slug: "video",
    name: "Video",
    description:
      "Video content that simplifies your message and keeps attention.",
    heroHeadline: "Tell your story with video that feels clear and confident.",
    heroDescription:
      "We create video content for USA small businesses that need clarity, polish, and steady engagement.",
    metaTitle: "Video Services | LA CREATIVO",
    metaDescription:
      "Video services for USA small businesses including explainer videos, product videos, and social reels.",
    services: [
      {
        slug: "animated-explainer",
        name: "Animated Explainer Videos",
        description:
          "Explainers that simplify complex offers in minutes.",
        focus: "animated explainers that make your offer easy to grasp",
        metaTitle: "Animated Explainer Videos | LA CREATIVO",
        metaDescription:
          "Animated explainer videos for USA businesses that want clear, engaging storytelling.",
        packageCount: 3,
        basePrice: 900,
      },
      {
        slug: "product-video",
        name: "Product Videos",
        description:
          "Product videos that show features and benefits fast.",
        focus: "product videos that drive confident buying",
        metaTitle: "Product Video Services | LA CREATIVO",
        metaDescription:
          "Product video services for USA ecommerce brands that want more confident buyers.",
        packageCount: 3,
        basePrice: 850,
      },
      {
        slug: "social-media-reels",
        name: "Social Media Reels",
        description:
          "Short-form videos built for attention and shares.",
        focus: "short-form video content that feels on-brand",
        metaTitle: "Social Media Reels Services | LA CREATIVO",
        metaDescription:
          "Social media reels for USA businesses that want more engagement and brand recall.",
        packageCount: 3,
        basePrice: 650,
      },
    ],
  },
  {
    slug: "reputation",
    name: "Reputation",
    description:
      "Reputation systems that earn trust and keep your reviews strong.",
    heroHeadline: "Build a reputation that makes customers feel safe choosing you.",
    heroDescription:
      "We help USA small businesses protect their reputation, collect reviews, and look credible everywhere online.",
    metaTitle: "Reputation Management Services | LA CREATIVO",
    metaDescription:
      "Reputation management services for USA businesses including review generation and Google Business Profile support.",
    services: [
      {
        slug: "reputation-management",
        name: "Reputation Management",
        description:
          "Ongoing reputation support to keep trust high.",
        focus: "reputation management that keeps trust steady",
        metaTitle: "Reputation Management Services | LA CREATIVO",
        metaDescription:
          "Reputation management for USA small businesses that want consistent trust signals.",
        packageCount: 3,
        basePrice: 700,
      },
      {
        slug: "google-business-profile",
        name: "Google Business Profile",
        description:
          "Google Business Profile optimization for local visibility.",
        focus: "a Google Business Profile that ranks locally",
        metaTitle: "Google Business Profile Services | LA CREATIVO",
        metaDescription:
          "Google Business Profile services for USA businesses that want stronger local visibility.",
        packageCount: 3,
        basePrice: 450,
      },
      {
        slug: "review-generation",
        name: "Review Generation",
        description:
          "Review workflows that help customers share feedback.",
        focus: "review generation that feels authentic",
        metaTitle: "Review Generation Services | LA CREATIVO",
        metaDescription:
          "Review generation services for USA businesses that want more customer feedback and social proof.",
        packageCount: 3,
        basePrice: 500,
      },
    ],
  },
  {
    slug: "automation-tools",
    name: "Automation & Tools",
    description:
      "Automation and tool setup that saves time and keeps your business organized.",
    heroHeadline: "Simplify your workflows with smart automation and tools.",
    heroDescription:
      "We help USA small businesses set up tools that reduce busywork and keep your team aligned.",
    metaTitle: "Automation & Tools Services | LA CREATIVO",
    metaDescription:
      "Automation and tools services for USA small businesses including CRM setup and Zapier automation.",
    services: [
      {
        slug: "bizosto",
        name: "Bizosto Setup",
        description:
          "Bizosto onboarding and setup for streamlined operations.",
        focus: "Bizosto workflows that keep operations organized",
        metaTitle: "Bizosto Setup Services | LA CREATIVO",
        metaDescription:
          "Bizosto setup for USA small businesses that need a clear, organized operations hub.",
        packageCount: 3,
        basePrice: 650,
      },
      {
        slug: "crm-setup",
        name: "CRM Setup",
        description:
          "CRM configuration to keep leads, clients, and follow-ups tidy.",
        focus: "CRM setup that keeps your pipeline organized",
        metaTitle: "CRM Setup Services | LA CREATIVO",
        metaDescription:
          "CRM setup for USA small businesses that want a clean, organized sales pipeline.",
        packageCount: 3,
        basePrice: 750,
      },
      {
        slug: "zapier-automation",
        name: "Zapier Automation",
        description:
          "Automations that connect your tools and save hours each week.",
        focus: "Zapier automations that reduce manual work",
        metaTitle: "Zapier Automation Services | LA CREATIVO",
        metaDescription:
          "Zapier automation for USA small businesses looking to connect tools and save time.",
        packageCount: 3,
        basePrice: 600,
      },
    ],
  },
  {
    slug: "printing",
    name: "Printing",
    description:
      "Print-ready collateral that keeps your brand professional in the real world.",
    heroHeadline: "Print materials that feel consistent and premium.",
    heroDescription:
      "We design print assets for USA small businesses that want to look established in every handoff.",
    metaTitle: "Printing Design Services | LA CREATIVO",
    metaDescription:
      "Printing design services for USA small businesses needing premium collateral and print-ready files.",
    services: [
      {
        slug: "print-collateral",
        name: "Print Collateral",
        description:
          "Print materials designed for clarity and credibility.",
        focus: "print collateral that feels consistent and polished",
        metaTitle: "Print Collateral Design | LA CREATIVO",
        metaDescription:
          "Print collateral design for USA businesses needing brochures, flyers, and premium print assets.",
        packageCount: 3,
        basePrice: 400,
      },
      {
        slug: "event-materials",
        name: "Event Materials",
        description:
          "Event assets that keep your brand consistent in person.",
        focus: "event materials that help you stand out",
        metaTitle: "Event Materials Design | LA CREATIVO",
        metaDescription:
          "Event materials design for USA businesses that want premium branded assets for events.",
        packageCount: 3,
        basePrice: 550,
      },
      {
        slug: "packaging-design",
        name: "Packaging Design",
        description:
          "Packaging that makes your product feel shelf-ready.",
        focus: "packaging design that feels premium",
        metaTitle: "Packaging Design Services | LA CREATIVO",
        metaDescription:
          "Packaging design for USA small businesses that want polished, shelf-ready product presentation.",
        packageCount: 3,
        basePrice: 750,
      },
    ],
  },
];

export const categoryBySlug = new Map(
  serviceCategories.map((category) => [category.slug, category])
);

export const servicesBySlug = new Map(
  serviceCategories.flatMap((category) =>
    category.services.map((service) => [service.slug, service])
  )
);

export const servicesWithCategory = serviceCategories.flatMap((category) =>
  category.services.map((service) => ({ ...service, category }))
);
