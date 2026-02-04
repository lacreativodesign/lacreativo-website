export type WebsiteDesignPackage = {
  slug: string;
  name: string;
  startingPrice: string;
  summary: string;
  timeline: string;
  includes: Array<{ title: string; description: string }>;
};

export const websiteDesignPackages: WebsiteDesignPackage[] = [
  {
    slug: "starter-site",
    name: "Starter Site",
    startingPrice: "$499",
    summary: "A focused, conversion-ready site for new or lean teams.",
    timeline: "1-2 weeks",
    includes: [
      {
        title: "Single page layout",
        description:
          "A single focused page presents the full offer without distractions. LA CREATIVO structures the flow so visitors move from intro to action fast.",
      },
      {
        title: "Conversion sections",
        description:
          "Key sections are ordered for clarity and action. This keeps visitors from getting lost. LA CREATIVO maps the sections to your primary goal.",
      },
      {
        title: "Mobile first design",
        description:
          "Layouts are built for mobile speed and readability. This protects conversion on the devices most customers use. LA CREATIVO checks spacing and tap targets.",
      },
      {
        title: "Launch checklist",
        description:
          "A clear checklist confirms every launch item is complete. This removes last minute uncertainty. LA CREATIVO runs the checklist before handoff.",
      },
      {
        title: "Brand styling",
        description:
          "We translate your logo and colors into a consistent look. This builds trust quickly. LA CREATIVO applies styling across every section.",
      },
      {
        title: "Basic SEO",
        description:
          "Baseline SEO fields and page structure are set up. This helps your site get found. LA CREATIVO follows clean, indexable structure.",
      },
      {
        title: "Lead capture",
        description:
          "A clear lead capture action is placed where it counts. This makes it easy to contact you. LA CREATIVO connects the form to your inbox.",
      },
      {
        title: "Content guidance",
        description:
          "We provide prompts for the copy you need. This keeps approvals fast. LA CREATIVO edits for clarity and tone.",
      },
      {
        title: "Quality review",
        description:
          "We test the page for layout and readability. This prevents visual errors. LA CREATIVO fixes issues before launch.",
      },
      {
        title: "Handoff support",
        description:
          "You receive a quick walkthrough for updates. This removes dependency. LA CREATIVO stays available for small questions after delivery.",
      },
    ],
  },
  {
    slug: "growth-website",
    name: "Growth Website",
    startingPrice: "$1,499",
    summary: "Multi-page structure for brands ready to scale visibility.",
    timeline: "3-4 weeks",
    includes: [
      {
        title: "Up to 5 pages",
        description:
          "A multi-page structure gives each offer room to breathe. This helps visitors find the right path faster. LA CREATIVO plans the page flow around your goals.",
      },
      {
        title: "Custom visual system",
        description:
          "We expand your visuals into a cohesive system. This makes the brand feel established. LA CREATIVO defines layout rules, type, and color usage.",
      },
      {
        title: "Lead capture setup",
        description:
          "We configure a lead capture form tied to your inbox. This turns visits into inquiries. LA CREATIVO tests submissions before launch.",
      },
      {
        title: "Analytics ready handoff",
        description:
          "We prepare the site for analytics tracking. This keeps performance visible from day one. LA CREATIVO supplies setup guidance at handoff.",
      },
      {
        title: "Conversion layout",
        description:
          "Page structure is designed to guide attention to the next step. This keeps the experience focused. LA CREATIVO uses proven layouts for clarity.",
      },
      {
        title: "Mobile first design",
        description:
          "Every page is designed for mobile readability and speed. This protects conversion on small screens. LA CREATIVO checks layouts across breakpoints.",
      },
      {
        title: "Basic SEO",
        description:
          "We configure the essentials for search visibility. This makes pages easier to index. LA CREATIVO keeps titles and structure search ready.",
      },
      {
        title: "Content guidance",
        description:
          "We give you structured copy prompts for each page. This reduces revision cycles. LA CREATIVO reviews content for clarity.",
      },
      {
        title: "Quality review",
        description:
          "We check the build for layout consistency and functionality. This prevents launch day surprises. LA CREATIVO resolves issues before delivery.",
      },
      {
        title: "Handoff support",
        description:
          "We provide a clear handoff with update notes. This makes it easy to own the site. LA CREATIVO stays available for final questions.",
      },
    ],
  },
  {
    slug: "brand-story",
    name: "Brand Story",
    startingPrice: "$2,499",
    summary: "A premium presence with elevated storytelling and polish.",
    timeline: "4-6 weeks",
    includes: [
      {
        title: "Messaging support",
        description:
          "We help refine the story and key messages. This keeps your offer clear and confident. LA CREATIVO edits for tone and simplicity.",
      },
      {
        title: "Visual style guide",
        description:
          "A lightweight style guide keeps visuals consistent. This helps your team stay on brand. LA CREATIVO defines usage for colors and type.",
      },
      {
        title: "Founder spotlight",
        description:
          "We create a focused section that highlights the people behind the brand. This builds trust quickly. LA CREATIVO shapes the narrative with your input.",
      },
      {
        title: "Launch assets",
        description:
          "We supply a small set of launch assets to support rollout. This keeps momentum after launch. LA CREATIVO formats assets for easy use.",
      },
      {
        title: "Story driven pages",
        description:
          "Page flow is built to move visitors through your story. This makes the brand feel intentional. LA CREATIVO aligns each page with the narrative arc.",
      },
      {
        title: "Custom visuals",
        description:
          "We create custom visual elements to elevate the experience. This makes the site feel premium. LA CREATIVO designs visuals around your positioning.",
      },
      {
        title: "Mobile first design",
        description:
          "Layouts are optimized for mobile readability. This protects the story on every screen. LA CREATIVO refines spacing and hierarchy for small devices.",
      },
      {
        title: "Basic SEO",
        description:
          "Search essentials are built in from the start. This keeps the site discoverable. LA CREATIVO follows clean SEO structure.",
      },
      {
        title: "Quality review",
        description:
          "We verify layout, links, and interactions before launch. This prevents surprises. LA CREATIVO resolves issues before handoff.",
      },
      {
        title: "Handoff support",
        description:
          "We provide a clear walkthrough and update notes. This keeps your team confident. LA CREATIVO answers final questions after delivery.",
      },
    ],
  },
  {
    slug: "ecommerce-light",
    name: "Ecommerce Light",
    startingPrice: "$2,999",
    summary: "Streamlined storefront for new product lines and launches.",
    timeline: "4-6 weeks",
    includes: [
      {
        title: "20 products",
        description:
          "We set up a focused catalog for up to 20 products. This keeps the launch lean and manageable. LA CREATIVO structures products for clean browsing.",
      },
      {
        title: "Checkout configuration",
        description:
          "Checkout is configured for a smooth buying flow. This reduces cart drop off. LA CREATIVO tests the end to end purchase path.",
      },
      {
        title: "Product templates",
        description:
          "We build a reusable product layout template. This keeps the catalog consistent. LA CREATIVO applies clear hierarchy for details and CTAs.",
      },
      {
        title: "Store walkthrough",
        description:
          "We provide a guided walkthrough of store management. This makes updates simple. LA CREATIVO answers setup questions during handoff.",
      },
      {
        title: "Homepage merchandising",
        description:
          "The homepage is structured to highlight key products. This focuses attention on best sellers. LA CREATIVO sets up clear product groupings.",
      },
      {
        title: "Mobile first design",
        description:
          "The storefront is optimized for mobile browsing. This protects conversion on small screens. LA CREATIVO tests layouts across devices.",
      },
      {
        title: "Basic SEO",
        description:
          "Search basics are configured for products and pages. This helps shoppers find you. LA CREATIVO keeps structure clean for indexing.",
      },
      {
        title: "Shipping setup",
        description:
          "Shipping rules are configured for your products. This prevents checkout surprises. LA CREATIVO sets up clear options and rates.",
      },
      {
        title: "Quality review",
        description:
          "We test the storefront for usability and accuracy. This prevents launch day errors. LA CREATIVO checks product pages and checkout flow.",
      },
      {
        title: "Handoff support",
        description:
          "You receive clear handoff notes and update guidance. This makes ownership easy. LA CREATIVO stays available for final questions.",
      },
    ],
  },
  {
    slug: "premium-build",
    name: "Premium Build",
    startingPrice: "$4,200",
    summary: "Custom interaction design for standout brands and teams.",
    timeline: "6-8 weeks",
    includes: [
      {
        title: "Advanced layout system",
        description:
          "We create a flexible layout system for complex content. This keeps the site consistent as it grows. LA CREATIVO documents layout rules for reuse.",
      },
      {
        title: "Custom illustrations",
        description:
          "Custom illustrations add a distinctive visual layer. This helps the brand stand out. LA CREATIVO designs artwork that matches your tone.",
      },
      {
        title: "Performance tuning",
        description:
          "We optimize the build for speed and stability. This protects conversion and search visibility. LA CREATIVO runs performance checks before launch.",
      },
      {
        title: "Priority support",
        description:
          "You receive prioritized communication during the build. This keeps feedback cycles short. LA CREATIVO responds quickly to keep momentum.",
      },
      {
        title: "Conversion strategy",
        description:
          "We map the user journey to remove friction. This keeps visitors moving toward action. LA CREATIVO aligns sections to conversion goals.",
      },
      {
        title: "Responsive build",
        description:
          "We refine layouts across mobile and desktop. This keeps the experience polished everywhere. LA CREATIVO adjusts spacing and hierarchy by breakpoint.",
      },
      {
        title: "Interactive elements",
        description:
          "We add interactions that make the site feel premium. This improves engagement without distraction. LA CREATIVO keeps animations intentional and smooth.",
      },
      {
        title: "Content guidance",
        description:
          "We provide content prompts for each section. This speeds up approvals. LA CREATIVO reviews copy for clarity and tone.",
      },
      {
        title: "Quality review",
        description:
          "We run deep QA across pages and interactions. This reduces launch risk. LA CREATIVO fixes issues before delivery.",
      },
      {
        title: "Handoff support",
        description:
          "We provide structured handoff notes and training. This makes updates easy. LA CREATIVO stays available for final questions.",
      },
    ],
  },
  {
    slug: "launch-partner",
    name: "Launch Partner",
    startingPrice: "$6,500",
    summary: "Full-service partnership for strategy, design, and rollout.",
    timeline: "6-10 weeks",
    includes: [
      {
        title: "Creative direction",
        description:
          "We lead the creative direction across the entire experience. This keeps every touchpoint aligned. LA CREATIVO guides decisions and approvals.",
      },
      {
        title: "Copywriting support",
        description:
          "We help craft key pages and messaging. This keeps the story crisp and persuasive. LA CREATIVO edits for clarity and tone.",
      },
      {
        title: "Campaign assets",
        description:
          "We create supporting assets for launch campaigns. This keeps your rollout cohesive. LA CREATIVO formats assets for easy use.",
      },
      {
        title: "Post launch checkins",
        description:
          "We schedule short checkins after launch to confirm performance. This keeps momentum steady. LA CREATIVO addresses early feedback quickly.",
      },
      {
        title: "Full site build",
        description:
          "We build the complete site experience from strategy through launch. This removes coordination stress. LA CREATIVO manages the full delivery timeline.",
      },
      {
        title: "Conversion strategy",
        description:
          "We align each page to a clear conversion goal. This keeps visitors moving forward. LA CREATIVO maps the journey and optimizes the flow.",
      },
      {
        title: "Responsive build",
        description:
          "Every screen is refined for mobile and desktop. This keeps the experience premium everywhere. LA CREATIVO tests layouts across breakpoints.",
      },
      {
        title: "Launch planning",
        description:
          "We build a detailed launch plan with clear steps. This removes last minute surprises. LA CREATIVO confirms timing and responsibilities.",
      },
      {
        title: "Quality review",
        description:
          "We run comprehensive QA before launch. This protects your reputation. LA CREATIVO fixes issues before the final handoff.",
      },
      {
        title: "Handoff support",
        description:
          "We provide training and organized files at delivery. This makes ownership simple. LA CREATIVO stays available for final questions.",
      },
    ],
  },
];
