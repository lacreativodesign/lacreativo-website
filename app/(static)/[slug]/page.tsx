import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Button from "@/components/Button";
import Section from "@/components/Section";
import { canonicalUrl } from "@/lib/seo";

type StaticSection = {
  title: string;
  body: string[];
  list?: string[];
  cta?: { label: string; href: string };
};

type StaticPage = {
  title: string;
  description: string;
  eyebrow: string;
  sections: StaticSection[];
};

const staticPages: Record<string, StaticPage> = {
  "about-us": {
    title: "About LA CREATIVO",
    description:
      "We’re a design-first studio helping USA small businesses launch with clarity, calm timelines, and premium output.",
    eyebrow: "About us",
    sections: [
      {
        title: "Our focus",
        body: [
          "We help founders and local teams build a credible brand presence without agency overhead.",
          "Our process stays lean: clear scopes, honest timelines, and communication that keeps you in control.",
        ],
      },
      {
        title: "How we work",
        body: [
          "Every engagement starts with a focused kickoff to align goals, audience, and priorities.",
          "You’ll always know what’s happening next, what’s included, and how to approve each step.",
        ],
        cta: { label: "See how it works", href: "/how-it-works" },
      },
    ],
  },
  "how-it-works": {
    title: "How It Works",
    description:
      "A straightforward process built to remove uncertainty, keep you informed, and deliver on time.",
    eyebrow: "Process",
    sections: [
      {
        title: "Kickoff & alignment",
        body: [
          "We gather essentials fast so there’s no delay in getting started.",
          "You’ll receive a timeline, milestones, and a clear checklist before work begins.",
        ],
      },
      {
        title: "Drafts & refinement",
        body: [
          "We deliver early drafts quickly so you can react with confidence.",
          "Revisions are structured and time-boxed to keep momentum without surprises.",
        ],
      },
      {
        title: "Delivery & support",
        body: [
          "Final files are packaged neatly with handoff notes and launch guidance.",
          "We stay available after delivery so you never feel left alone.",
        ],
        cta: { label: "Browse packages", href: "/services" },
      },
    ],
  },
  portfolio: {
    title: "Portfolio",
    description:
      "A curated look at the types of brands, websites, and launches we support.",
    eyebrow: "Portfolio",
    sections: [
      {
        title: "Recent launch snapshots",
        body: [
          "We build across industries, but every project is grounded in clarity and conversion.",
          "Ask for a sample set tailored to your category during your discovery call.",
        ],
        cta: { label: "Request a walkthrough", href: "/get-started" },
      },
    ],
  },
  testimonials: {
    title: "Client Testimonials",
    description:
      "Founders and local teams share how the process felt calm, clear, and reliable.",
    eyebrow: "Testimonials",
    sections: [
      {
        title: "What clients notice most",
        body: [
          "Clear communication, structured steps, and deliverables that feel premium.",
          "We keep the experience human and the outcomes polished.",
        ],
        cta: { label: "See packages", href: "/services" },
      },
    ],
  },
  contact: {
    title: "Contact",
    description:
      "Tell us what you’re building and we’ll respond within one business day.",
    eyebrow: "Contact",
    sections: [
      {
        title: "Start the conversation",
        body: [
          "Share your goals, timeline, and budget range so we can point you to the right package.",
          "We keep conversations short, useful, and focused on next steps.",
        ],
        cta: { label: "Get started", href: "/get-started" },
      },
    ],
  },
  "combo-packages": {
    title: "Combo Packages",
    description:
      "Combine services when you need a faster, more complete launch plan.",
    eyebrow: "Packages",
    sections: [
      {
        title: "Why bundle",
        body: [
          "Bundled scopes simplify coordination and keep timelines aligned.",
          "We’ll recommend the simplest combination that hits your goals without extra noise.",
        ],
        cta: { label: "Browse services", href: "/services" },
      },
    ],
  },
  resources: {
    title: "Resources",
    description:
      "Short, useful guides to help you make smarter decisions before you buy.",
    eyebrow: "Resources",
    sections: [
      {
        title: "Use what you need",
        body: [
          "We share launch checklists, timelines, and scope tips to keep you informed.",
          "Ask us for a tailored roadmap if you want a personalized starting point.",
        ],
        cta: { label: "Get a roadmap", href: "/get-started" },
      },
    ],
  },
  "reseller-program": {
    title: "Reseller Program",
    description:
      "A structured way for agencies and consultants to resell LA CREATIVO services.",
    eyebrow: "Work with us",
    sections: [
      {
        title: "Who it’s for",
        body: [
          "Best for partners who want a reliable delivery team behind their client relationships.",
          "We keep communication clear and timelines realistic so you can stay confident.",
        ],
        cta: { label: "Talk to the team", href: "/contact" },
      },
    ],
  },
  "affiliate-program": {
    title: "Affiliate Program",
    description:
      "Refer founders and small teams who need premium creative support.",
    eyebrow: "Work with us",
    sections: [
      {
        title: "Simple, trackable referrals",
        body: [
          "We’ll provide clear terms, tracked referrals, and honest communication throughout.",
          "You’ll always know the status of the leads you send.",
        ],
        cta: { label: "Get details", href: "/contact" },
      },
    ],
  },
  careers: {
    title: "Careers",
    description:
      "Join a small, focused team delivering premium creative work for growing businesses.",
    eyebrow: "Work with us",
    sections: [
      {
        title: "What we value",
        body: [
          "Clear communication, thoughtful design, and a calm, dependable workflow.",
          "Share your portfolio and let us know how you like to work.",
        ],
        cta: { label: "Send your CV", href: "/contact" },
      },
    ],
  },
  "get-started": {
    title: "Get Started",
    description:
      "Request a clear recommendation, timeline, and package fit within one business day.",
    eyebrow: "Get started",
    sections: [
      {
        title: "What to share",
        body: [
          "Your goals, timeline, and current brand stage help us recommend the right scope.",
          "We’ll reply with a focused plan, not a sales pitch.",
        ],
        cta: { label: "Browse services", href: "/services" },
      },
    ],
  },
  guarantees: {
    title: "Guarantees",
    description:
      "Short reassurance lines are here. Full guarantee terms live on the Terms & Conditions page.",
    eyebrow: "Trust",
    sections: [
      {
        title: "Where to find full terms",
        body: [
          "We keep guarantee details in one place so you always know exactly what’s covered.",
          "Review the official terms for the full explanation of each guarantee.",
        ],
        cta: { label: "View Terms & Conditions", href: "/terms-and-conditions" },
      },
    ],
  },
};

type StaticPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: StaticPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = staticPages[slug];

  if (!page) {
    return {
      title: "LA CREATIVO",
      description: "Premium creative services for USA small businesses.",
      alternates: {
        canonical: canonicalUrl("/"),
      },
    };
  }

  return {
    title: `${page.title} | LA CREATIVO`,
    description: page.description,
    alternates: {
      canonical: canonicalUrl(`/${slug}`),
    },
  };
}

export default async function StaticPage({ params }: StaticPageProps) {
  const { slug } = await params;
  const page = staticPages[slug];

  if (!page) {
    notFound();
  }

  return (
    <div>
      <Section
        tone="dark"
        padding="lg"
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
      />

      {page.sections.map((section) => (
        <Section key={section.title} title={section.title} description={section.body[0]}>
          <div className="flex flex-col gap-4 text-sm text-muted-foreground">
            {section.body.slice(1).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.list && (
              <ul className="grid gap-2">
                {section.list.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
            {section.cta && (
              <div>
                <Button href={section.cta.href} variant="secondary" size="sm">
                  {section.cta.label}
                </Button>
              </div>
            )}
          </div>
        </Section>
      ))}
    </div>
  );
}
