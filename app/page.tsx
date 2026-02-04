import Button from "@/components/Button";
import Card from "@/components/Card";
import Section from "@/components/Section";
import TestimonialSlider from "@/components/TestimonialSlider";
import dynamic from "next/dynamic";
import { SkeletonPricingCard, SkeletonTabRow } from "@/components/Skeleton";
import type { CSSProperties } from "react";

const PackagesSection = dynamic(() => import("@/components/PackagesSection"), {
  loading: () => (
    <div className="grid gap-6">
      <SkeletonTabRow />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <SkeletonPricingCard key={index} />
        ))}
      </div>
    </div>
  ),
});

const approachPillars = [
  {
    title: "Brand & Identity",
    description:
      "A clear visual system that feels premium, familiar, and ready to grow.",
    icon: "✺",
  },
  {
    title: "Web Design & Build",
    description:
      "Streamlined sites that guide visitors with calm, confident clarity.",
    icon: "⌂",
  },
  {
    title: "Content & Social",
    description:
      "Simple content systems that keep you consistent without chaos.",
    icon: "✎",
  },
  {
    title: "Launch Strategy",
    description:
      "Clear launch roadmaps so you always know what happens next.",
    icon: "➤",
  },
];

const services = [
  {
    title: "Website Design & Development",
    description: "Full site experiences for new brands and rebrands.",
    icon: "🖥️",
    visual: "Website preview",
    href: "/services/website-design-development",
  },
  {
    title: "Brand Refresh Kits",
    description: "Logo, palette, messaging, and launch assets.",
    icon: "🎨",
    visual: "Brand board",
    href: "/services/brand-refresh",
  },
  {
    title: "Social Media Systems",
    description: "Templates, content planning, and visual direction.",
    icon: "📣",
    visual: "Content planner",
    href: "/services/social-media",
  },
  {
    title: "Ecommerce Setup",
    description: "Storefront-ready design + checkout polish.",
    icon: "🛍️",
    visual: "Storefront mockup",
    href: "/services/ecommerce",
  },
  {
    title: "Creative Retainers",
    description: "Ongoing design support without full-time costs.",
    icon: "🧩",
    visual: "Creative queue",
    href: "/services/retainers",
  },
  {
    title: "Launch Campaigns",
    description: "Short-burst creative for major moments.",
    icon: "🚀",
    visual: "Campaign toolkit",
    href: "/services/launch-campaigns",
  },
];

const steps = [
  {
    title: "01 · Discovery",
    description: "We learn your goals, audience, and vibe in one focused call.",
  },
  {
    title: "02 · Direction",
    description: "We share a clear plan with timelines, scope, and visual cues.",
  },
  {
    title: "03 · Design",
    description: "We craft the visuals and messaging, then refine with you.",
  },
  {
    title: "04 · Build & Test",
    description: "We assemble the final assets and test everything together.",
  },
  {
    title: "05 · Launch",
    description: "We go live and stay available for early growth support.",
  },
];

const industries = [
  {
    label: "Small & Local Businesses",
    icon: "🏡",
    href: "/industries/small-local",
  },
  {
    label: "Startups & Entrepreneurs",
    icon: "✨",
    href: "/industries/startups",
  },
  {
    label: "E-Commerce Businesses",
    icon: "🛒",
    href: "/industries/ecommerce",
  },
  {
    label: "Professional Services",
    icon: "🗂️",
    href: "/industries/professional-services",
  },
  {
    label: "Healthcare & Medical",
    icon: "🩺",
    href: "/industries/healthcare",
  },
  {
    label: "Real Estate",
    icon: "🏘️",
    href: "/industries/real-estate",
  },
  {
    label: "Beauty & Lifestyle",
    icon: "💅",
    href: "/industries/beauty",
  },
  {
    label: "Technology & SaaS",
    icon: "💻",
    href: "/industries/technology",
  },
];

const portfolio = [
  "Retail Studio",
  "Wellness Collective",
  "Cafe Studio",
  "Fitness Boutique",
  "Creative Office",
  "Local Events",
];

const testimonials = [
  {
    quote:
      "They made our brand feel like a real company overnight. Clean, friendly, and actually affordable.",
    name: "Maria L.",
    role: "Founder, Bloom Pop",
  },
  {
    quote: "The process was easy to understand. We never felt lost or upsold.",
    name: "Devon K.",
    role: "Owner, Harbor House Cafe",
  },
  {
    quote:
      "Fast turnaround, premium design. Our new site booked clients in week one.",
    name: "Jordan P.",
    role: "Studio Lead, Nova Pilates",
  },
  {
    quote:
      "We loved the honesty. They explained what mattered and kept the scope tight.",
    name: "Kendra R.",
    role: "Marketing, Grayline Fitness",
  },
  {
    quote:
      "Feels like having a design partner without the agency overhead.",
    name: "Chris M.",
    role: "Founder, Field Supply",
  },
];

export default function Home() {
  return (
    <div>
      <Section
        tone="dark"
        padding="lg"
        background={
          <>
            <div className="absolute inset-0 gradient-hero opacity-90 hero-motion" />
            <div className="absolute inset-0 hero-ambient opacity-80 hero-motion-slow" />
          </>
        }
      >
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col gap-6">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-dark-foreground/70">
              Creative & Digital Studio
            </span>
            <h1 className="text-reveal text-4xl font-semibold leading-tight sm:text-5xl lg:text-[3.6rem]">
              Launch a premium brand presence that earns trust in the first
              scroll.
            </h1>
            <p className="reveal text-base leading-relaxed text-dark-foreground/70 sm:text-lg">
              LA CREATIVO blends editorial design, strategic messaging, and
              launch-ready systems so your customers feel calm, confident, and
              ready to say yes.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="#packages" size="lg">
                View Packages
              </Button>
              <Button href="#services" variant="secondary" size="lg">
                Explore Services
              </Button>
            </div>
            <form className="form-surface grid gap-3 rounded-2xl p-4 text-sm text-dark-foreground/80 sm:grid-cols-2 lg:grid-cols-4">
              <input
                type="text"
                placeholder="Your name"
                className="input-field input-field-dark"
              />
              <input
                type="email"
                placeholder="Work email"
                className="input-field input-field-dark"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="input-field input-field-dark"
              />
              <input
                type="text"
                placeholder="Business name"
                className="input-field input-field-dark"
              />
              <Button
                type="submit"
                size="sm"
                className="sm:col-span-2 lg:col-span-4"
              >
                Get the free roadmap
              </Button>
            </form>
            <div className="flex flex-wrap items-center gap-4 text-xs text-dark-foreground/70">
              <span className="flex items-center gap-2 text-accent">
                ★★★★★ <span className="text-dark-foreground/70">4.9/5</span>
              </span>
              <span>
                Launch-ready in{" "}
                <span className="numeric-editorial text-sm font-semibold text-dark-foreground">
                  3–6
                </span>{" "}
                weeks
              </span>
              <span>
                Packages from{" "}
                <span className="numeric-editorial text-sm font-semibold text-dark-foreground">
                  $499
                </span>
              </span>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-white/10 via-transparent to-dark/80" />
            <div className="relative flex h-[360px] w-full flex-col items-center justify-center gap-4 rounded-[32px] border border-white/10 bg-white/5 text-center text-sm text-dark-foreground/70">
              <div className="text-xs uppercase tracking-[0.3em]">
                Showcase space
              </div>
              <div className="text-lg font-semibold text-dark-foreground">
                Website + Brand preview
              </div>
              <div className="rounded-full border border-white/20 px-4 py-2 text-xs">
                Editorial layout spotlight
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                id: "satisfaction",
                title: (
                  <>
                    <span className="numeric-editorial text-xl font-semibold">
                      4.9/5
                    </span>{" "}
                    client satisfaction
                  </>
                ),
                description: (
                  <>
                    Based on{" "}
                    <span className="numeric-editorial font-semibold">
                      120+
                    </span>{" "}
                    small business reviews.
                  </>
                ),
              },
              {
                id: "support",
                title: (
                  <>
                    <span className="numeric-editorial text-xl font-semibold">
                      30
                    </span>
                    -day launch support
                  </>
                ),
                description: "Post-launch check-ins and priority fixes.",
              },
              {
                id: "delivery",
                title: (
                  <>
                    <span className="numeric-editorial text-xl font-semibold">
                      98%
                    </span>{" "}
                    on-time delivery
                  </>
                ),
                description: "Timelines you can actually plan around.",
              },
              {
                id: "pricing",
                title: "No-surprise pricing",
                description: "Clear scopes, milestones, and deliverables.",
              },
            ].map((item, index) => (
              <div
                key={item.id}
                className="reveal rounded-3xl border border-white/10 bg-white/5 p-6 text-sm"
                style={{ "--delay": `${index * 120}ms` } as CSSProperties}
              >
                <h3 className="text-lg font-semibold text-dark-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-dark-foreground/70">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-dark-foreground/70">
            <h3 className="text-lg font-semibold text-dark-foreground">
              Trusted by teams who need clarity fast
            </h3>
            <div className="flex flex-wrap gap-3 text-xs">
              <span className="rounded-full border border-white/20 px-3 py-1">
                Clutch ★★★★★
              </span>
              <span className="rounded-full border border-white/20 px-3 py-1">
                Google ★★★★★
              </span>
              <span className="rounded-full border border-white/20 px-3 py-1">
                <span className="numeric-editorial font-semibold">300+</span>{" "}
                small business launches
              </span>
              <span className="rounded-full border border-white/20 px-3 py-1">
                Zero-pressure consults
              </span>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-xs">
              “They felt like an in-house team, but the process was smooth and
              affordable.”
            </div>
          </div>
        </div>
      </Section>

      <Section
        tone="muted"
        eyebrow="The before + after"
        title="From scattered marketing to calm momentum"
        description="If your brand feels inconsistent, every channel becomes a new scramble. We replace that scramble with a clear plan, so your next move feels steady and intentional."
        background={<div className="absolute inset-0 gradient-surface opacity-70" />}
      >
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-4 text-sm leading-relaxed text-muted-foreground">
            <p className="reveal">
              Most small businesses are juggling sales, operations, and marketing
              all at once. The result is a patchwork brand that doesn’t quite
              match how good the business really is.
            </p>
            <p className="reveal" style={{ "--delay": "120ms" } as CSSProperties}>
              LA CREATIVO brings structure without the stress: a clear direction,
              consistent visuals, and a launch rhythm that feels calm instead of
              chaotic.
            </p>
            <div className="reveal rounded-3xl border border-border bg-card p-5 text-sm">
              <h3 className="text-base font-semibold text-foreground">
                The shift we create
              </h3>
              <p className="mt-2 text-muted-foreground">
                Replace guesswork with clarity, and watch every touchpoint feel
                aligned.
              </p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {approachPillars.map((item, index) => (
              <div
                key={item.title}
                className="reveal rounded-3xl border border-border bg-card p-5 text-sm"
                style={{ "--delay": `${index * 120}ms` } as CSSProperties}
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-xs">
                    {item.icon}
                  </span>
                  <h3 className="font-semibold">{item.title}</h3>
                </div>
                <p className="mt-3 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section
        id="services"
        eyebrow="Services snapshot"
        title="A menu of creative services built for momentum"
        description="Pick a single category or stack services as you grow. Every option is designed to feel simple, premium, and ready to launch."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="reveal"
              style={{ "--delay": `${index * 110}ms` } as CSSProperties}
            >
              <Card
                title={service.title}
                description={service.description}
                icon={service.icon}
                media={
                  <div className="flex h-24 items-center justify-center bg-muted/60 text-xs text-muted-foreground">
                    {service.visual}
                  </div>
                }
                cta={
                  <Button variant="secondary" size="sm" href={service.href}>
                    View Service
                  </Button>
                }
              />
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="packages"
        tone="muted"
        eyebrow="Packages"
        title="Pricing that stays clear at a glance"
        description="Choose a category, scan the options, and order when you’re ready."
      >
        <PackagesSection />
      </Section>

      <Section
        tone="dark"
        eyebrow="Industries + process"
        title="Built for the industries that move fast"
        description="We tailor every package to your space and keep the process refreshingly simple."
      >
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-semibold text-dark-foreground">
              Industries we serve
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {industries.map((industry, index) => (
                <a
                  key={industry.label}
                  href={industry.href}
                  className="reveal flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-dark-foreground/80 hover:border-accent/50"
                  style={{ "--delay": `${index * 80}ms` } as CSSProperties}
                >
                  <span className="text-lg">{industry.icon}</span>
                  <span>{industry.label}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-semibold text-dark-foreground">
              How it works
            </h3>
            <div className="grid gap-4">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="reveal rounded-3xl border border-white/10 bg-white/5 p-5"
                  style={{ "--delay": `${index * 120}ms` } as CSSProperties}
                >
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-dark-foreground/60">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-xs">
                      {index + 1}
                    </span>
                    {step.title.split("·")[1]}
                  </div>
                  <h3 className="mt-3 text-sm font-semibold text-dark-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs text-dark-foreground/70">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="proof"
        eyebrow="Proof + guarantees"
        title="Work that feels premium and partnerships that feel calm"
        description="Preview the style, then trust the safeguards. Everything is designed to feel clear, steady, and supportive."
      >
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {portfolio.map((item, index) => (
              <div
                key={item}
                className="reveal hover-lift group flex h-full flex-col gap-4 rounded-3xl border border-border bg-card p-6"
                style={{ "--delay": `${index * 100}ms` } as CSSProperties}
              >
                <div className="flex h-36 items-center justify-center rounded-2xl bg-muted text-xs text-muted-foreground transition group-hover:bg-accent/20">
                  Image placeholder
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold">{item}</span>
                  <span className="text-xs text-muted-foreground">View →</span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-6 text-sm">
            <h3 className="text-lg font-semibold">Guarantees you can trust</h3>
            <ul className="flex flex-col gap-3 text-muted-foreground">
              <li>Clear scope and deliverables before we start.</li>
              <li>Transparent pricing with no surprise add-ons.</li>
              <li>Post-launch support to make sure everything sticks.</li>
              <li>Friendly, human communication all the way through.</li>
            </ul>
            <div className="rounded-2xl border border-border bg-muted/40 p-4 text-xs text-muted-foreground">
              Calm, collaborative, and focused on helping your business feel
              established fast.
            </div>
          </div>
        </div>
        <div className="mt-12">
          <TestimonialSlider items={testimonials} />
        </div>
        <div className="mt-12">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-dark p-8 text-dark-foreground">
            <div className="absolute inset-0 gradient-hero opacity-80" />
            <div className="absolute inset-0 hero-ambient opacity-70" />
            <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="flex flex-col gap-4">
                <h2 className="text-3xl font-semibold sm:text-4xl">
                  Ready to move from idea to order?
                </h2>
                <p className="text-sm text-dark-foreground/70 sm:text-base">
                  Share a few details and we’ll send a tailored roadmap with the
                  best-fit package, timeline, and next steps.
                </p>
                <div className="flex flex-wrap gap-3 text-xs text-dark-foreground/70">
                  <span>
                    ✓ Delivered in{" "}
                    <span className="numeric-editorial font-semibold text-dark-foreground">
                      1
                    </span>{" "}
                    business day
                  </span>
                  <span>✓ Recommended package fit</span>
                  <span>✓ Quick wins included</span>
                </div>
              </div>
              <form className="form-surface grid gap-3 rounded-3xl p-5 text-sm text-dark-foreground/70 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Full name"
                  className="input-field input-field-dark"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  className="input-field input-field-dark"
                />
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="input-field input-field-dark"
                />
                <input
                  type="text"
                  placeholder="Business name"
                  className="input-field input-field-dark"
                />
                <Button type="submit" className="sm:col-span-2">
                  Send my roadmap
                </Button>
              </form>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
