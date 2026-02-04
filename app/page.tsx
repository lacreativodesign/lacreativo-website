import Button from "@/components/Button";
import Card from "@/components/Card";
import Section from "@/components/Section";
import TestimonialSlider from "@/components/TestimonialSlider";
import PackagesSection from "@/components/home/PackagesSection";
import type { CSSProperties } from "react";

const whatWeDo = [
  {
    title: "Brand & Identity",
    description:
      "Visual identities that feel premium, personal, and ready for growth across every touchpoint.",
    icon: "✺",
    visual: "Logo kit preview",
  },
  {
    title: "Web Design & Build",
    description:
      "Conversion-ready sites built for clarity, speed, and the confidence to click now.",
    icon: "⌂",
    visual: "Homepage wireframe",
  },
  {
    title: "Content & Social",
    description:
      "Story-driven content systems that keep your brand consistent and active without the overwhelm.",
    icon: "✎",
    visual: "Social grid sample",
  },
  {
    title: "Launch Strategy",
    description:
      "Straightforward roadmaps so you know exactly what happens before, during, and after launch.",
    icon: "➤",
    visual: "Launch checklist",
  },
];

const services = [
  {
    title: "Website Design & Development",
    description: "Premium website builds with clear scope and fast delivery.",
    icon: "🖥️",
    visual: "Website preview",
    href: "/services/website-design-development",
  },
  {
    title: "E-Commerce",
    description: "Conversion-ready online stores built to scale.",
    icon: "🛍️",
    visual: "Storefront mockup",
    href: "/services/ecommerce",
  },
  {
    title: "Branding",
    description: "Logo, identity, and guidelines that feel cohesive.",
    icon: "🎨",
    visual: "Brand board",
    href: "/services/branding",
  },
  {
    title: "Marketing",
    description: "Strategy and lead generation to keep growth steady.",
    icon: "📈",
    visual: "Marketing plan",
    href: "/services/marketing",
  },
  {
    title: "SEO",
    description: "Search visibility with clear priorities and wins.",
    icon: "🔎",
    visual: "SEO snapshot",
    href: "/services/seo",
  },
  {
    title: "Social Media",
    description: "Content and community systems that stay consistent.",
    icon: "📣",
    visual: "Content planner",
    href: "/services/social-media",
  },
  {
    title: "Browse all services",
    description: "Explore every category and package in one place.",
    icon: "🧭",
    visual: "Services directory",
    href: "/services",
  },
];

const steps = [
  {
    title: "01 · Discovery",
    description: "We learn your goals, audience, and vibe in one focused call.",
  },
  {
    title: "02 · Direction",
    description: "We present a creative plan with timelines, scope, and visual cues.",
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
    quote:
      "The process was easy to understand. We never felt lost or upsold.",
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
            <div className="absolute inset-0 gradient-hero opacity-90" />
            <div className="absolute inset-0 hero-ambient opacity-80" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_0%,rgba(255,255,255,0.08),transparent_55%)]" />
          </>
        }
      >
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col gap-6">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-dark-foreground/70">
              Creative & Digital Studio
            </span>
            <h1 className="text-reveal text-4xl font-semibold leading-tight sm:text-5xl lg:text-[3.6rem]">
              Build a premium brand presence that feels human, confident, and
              ready to earn trust fast.
            </h1>
            <p className="reveal text-base leading-relaxed text-dark-foreground/70 sm:text-lg">
              LA CREATIVO blends editorial design, strategic messaging, and
              launch-ready systems so your customers feel clarity and care from
              the first scroll.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="#lead-capture" size="lg">
                Get My 24-Hr Roadmap
              </Button>
              <Button href="#packages" variant="secondary" size="lg">
                Browse Packages First
              </Button>
            </div>
            <p className="text-xs text-dark-foreground/60">
              Roadmap arrives within one business day. Compare packages before
              you commit.
            </p>
            <form className="form-surface hero-form grid gap-3 rounded-2xl p-4 text-sm text-dark-foreground/80 sm:grid-cols-2 lg:grid-cols-4">
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
              <Button type="submit" size="sm" className="sm:col-span-2 lg:col-span-4">
                Get my roadmap
              </Button>
            </form>
            <div className="flex flex-wrap gap-4 text-xs text-dark-foreground/70">
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
              <span>US-based creative team</span>
              <span>Rated 4.9/5 by 120+ small business owners</span>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-white/10 via-transparent to-dark/80" />
            <div className="hero-panel relative flex h-[360px] w-full flex-col items-center justify-center gap-4 rounded-[32px] text-center text-sm text-dark-foreground/70">
              <div className="text-xs uppercase tracking-[0.3em] text-dark-foreground/60">
                Showcase space
              </div>
              <div className="text-lg font-semibold text-dark-foreground">
                Website + Brand preview
              </div>
              <div className="rounded-full border border-white/20 px-4 py-2 text-xs text-dark-foreground/70">
                Editorial layout spotlight
              </div>
              <div className="mt-2 h-28 w-48 rounded-3xl border border-white/15 bg-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]" />
            </div>
          </div>
        </div>
      </Section>

      <Section
        tone="muted"
        eyebrow="Trusted by growing teams"
        title="A creative partner built for small business momentum"
        description="We combine agency-level polish with startup-speed timelines, so you can launch confidently without the overhead."
      >
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
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
                className="card-premium reveal rounded-3xl border border-border bg-card p-6 text-sm"
                style={{ "--delay": `${index * 120}ms` } as CSSProperties}
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="card-premium flex flex-col gap-4 rounded-3xl border border-border bg-card p-6 text-sm">
            <h3 className="text-lg font-semibold">Trust indicators</h3>
            <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
              <span className="rounded-full border border-border px-3 py-1">
                Clutch ★★★★★
              </span>
              <span className="rounded-full border border-border px-3 py-1">
                Google ★★★★★
              </span>
              <span className="rounded-full border border-border px-3 py-1">
                <span className="numeric-editorial font-semibold">300+</span>{" "}
                small business launches
              </span>
              <span className="rounded-full border border-border px-3 py-1">
                Zero-pressure consults
              </span>
            </div>
            <div className="rounded-2xl border border-border bg-muted/40 p-4 text-xs text-muted-foreground">
              “They felt like an in-house team, but the process was smooth and
              affordable.”
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="what-we-do"
        eyebrow="What we do"
        title="Design-first services that keep things simple and premium"
        description="From brand foundations to full websites, our studio delivers everything you need to look credible, feel confident, and convert customers."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {whatWeDo.map((item, index) => (
            <div
              key={item.title}
              className="reveal"
              style={{ "--delay": `${index * 120}ms` } as CSSProperties}
            >
              <Card
                title={item.title}
                description={item.description}
                icon={item.icon}
                media={
                  <div className="flex h-28 items-center justify-center bg-muted/60 text-xs text-muted-foreground">
                    {item.visual}
                  </div>
                }
                cta={
                  <Button variant="ghost" size="sm" href="/services">
                    Learn More →
                  </Button>
                }
                variant="default"
              />
            </div>
          ))}
        </div>
      </Section>

      <Section
        tone="muted"
        eyebrow="Why LA CREATIVO"
        title="Clarity, trust, and a process that respects your budget"
        description="We built this studio for business owners who want premium results without agency confusion. Everything is explained in plain language, timelines are realistic, and we stay with you through launch."
      >
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-6 text-sm leading-relaxed text-muted-foreground">
            <p>
              We believe good design should feel accessible. That means honest
              guidance, streamlined options, and visuals that make your brand
              feel established — even if you’re just getting started.
            </p>
            <p>
              Our team pairs design expertise with startup-friendly structure,
              so you always know what’s included, what’s next, and what you’re
              paying for.
            </p>
            <div className="gradient-surface rounded-3xl border border-border p-5 text-sm text-muted-foreground">
              <h3 className="text-base font-semibold text-foreground">
                What makes us different
              </h3>
              <p className="mt-2">
                Hands-on strategy, calm timelines, and visuals that feel
                premium without the agency fluff.
              </p>
            </div>
          </div>
          <div className="grid gap-4">
            {[
              {
                title: "Straightforward Scope",
                description:
                  "Clear packages with predictable timelines and deliverables.",
                icon: "✓",
              },
              {
                title: "Human Collaboration",
                description:
                  "We communicate like people, not agencies — fast, friendly, and clear.",
                icon: "✦",
              },
              {
                title: "Affordable Excellence",
                description:
                  "Premium creative without the premium overhead.",
                icon: "◆",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="card-premium reveal rounded-3xl border border-border bg-card p-5 text-sm"
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
        eyebrow="Services overview"
        title="Everything you need to launch, grow, and stay consistent"
        description="Pick a single service or build a full creative stack. Each offering is tailored to small business momentum."
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
                  <div className="flex h-32 items-center justify-center bg-muted/60 text-xs text-muted-foreground">
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

      <PackagesSection />

      <Section
        id="lead-capture"
        tone="muted"
        padding="sm"
        eyebrow="Ready when you are"
        title="Start with a quick project roadmap"
        description="Share four details and we’ll reply with a timeline, fit, and next steps within one business day."
      >
        <div className="grid items-center gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-3 text-sm text-muted-foreground">
            <p>
              Quick, clear, and zero pressure. You’ll know the best package
              path before you make a decision.
            </p>
            <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
              <span>✓ Delivered in 24 hours</span>
              <span>✓ Recommended starting point</span>
              <span>✓ Trusted by 300+ small business launches</span>
            </div>
          </div>
          <form className="form-surface grid gap-3 rounded-3xl p-5 text-sm text-muted-foreground">
            <input
              type="text"
              placeholder="Full name"
              className="input-field"
            />
            <input
              type="email"
              placeholder="Email address"
              className="input-field"
            />
            <input
              type="tel"
              placeholder="Phone number"
              className="input-field"
            />
            <input
              type="text"
              placeholder="Business name"
              className="input-field"
            />
            <Button type="submit">Send my starter plan</Button>
          </form>
        </div>
      </Section>

      <Section
        id="process"
        tone="dark"
        eyebrow="How it works"
        title="A smooth, step-by-step process that keeps you in control"
        description="We keep the workflow clear so you always know what’s happening and what comes next."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="reveal rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_18px_40px_rgba(6,4,9,0.35)]"
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
              <div className="mt-4 h-16 rounded-2xl border border-white/10 bg-white/5 text-[10px] text-dark-foreground/60 flex items-center justify-center">
                Process visual
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="work"
        eyebrow="Featured work"
        title="Preview the looks we love to build"
        description="Curated examples of the visual direction we can craft for your brand."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((item, index) => (
            <div
              key={item}
              className="card-premium reveal hover-lift group flex h-full flex-col gap-4 rounded-3xl border border-border bg-card p-6"
              style={{ "--delay": `${index * 100}ms` } as CSSProperties}
            >
              <div className="flex h-44 items-center justify-center rounded-2xl bg-muted text-xs text-muted-foreground transition group-hover:bg-accent/20">
                Image placeholder
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="font-semibold">{item}</span>
                <span className="text-xs text-muted-foreground">View →</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="pricing"
        tone="muted"
        eyebrow="Pricing philosophy"
        title="Premium creative, honest pricing"
        description="We keep things transparent so you can invest with confidence. Our packages are built around real business needs — not inflated retainers."
      >
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="flex flex-col gap-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              Our most popular projects fall between{" "}
              <span className="numeric-editorial font-semibold text-foreground">
                $499
              </span>{" "}
              and{" "}
              <span className="numeric-editorial font-semibold text-foreground">
                $2,499
              </span>
              , with clear upgrades available as you grow. You’ll always know
              what’s included, what’s optional, and why.
            </p>
            <p>
              We also offer flexible payment plans, so you can launch now and
              spread out the investment.
            </p>
            <div className="gradient-surface rounded-3xl border border-border p-5 text-sm">
              <h3 className="text-base font-semibold text-foreground">
                Pricing reassurance
              </h3>
              <p className="mt-2 text-muted-foreground">
                Transparent scopes, fair milestones, and optional add-ons you
                can say yes or no to.
              </p>
            </div>
          </div>
          <div className="card-premium flex flex-col gap-4 rounded-3xl border border-border bg-card p-6 text-sm">
            <h3 className="text-lg font-semibold">What’s always included</h3>
            <ul className="flex flex-col gap-2 text-muted-foreground">
              <li>Creative direction and kickoff session</li>
              <li>Clear deliverables and timeline</li>
              <li>Two rounds of revisions built in</li>
              <li>Launch support and post-launch check-in</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Testimonials"
        title="Small business owners who felt the difference"
        description="Five-star results, delivered with clarity and care."
        align="center"
      >
        <TestimonialSlider items={testimonials} />
      </Section>

      <Section tone="dark" padding="lg">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Ready to turn your vision into a brand people trust?
            </h2>
            <p className="text-sm text-dark-foreground/70 sm:text-base">
              We’ll help you pick the right package, clarify the timeline, and
              map out the next steps in one short conversation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/get-started" size="lg">
                Get Started
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                Browse Packages
              </Button>
            </div>
          </div>
          <div className="hero-panel flex flex-col gap-4 rounded-3xl p-6 text-sm text-dark-foreground/70">
            <h3 className="text-lg font-semibold text-dark-foreground">
              What you get next
            </h3>
            <ul className="flex flex-col gap-3">
              <li>✓ A tailored creative roadmap</li>
              <li>✓ A realistic timeline and budget</li>
              <li>✓ Zero pressure, just clarity</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="accent" padding="md">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">
              Let’s build something unforgettable.
            </h2>
            <p className="text-sm text-accent-foreground/80">
              Launch your next chapter with a team that gets small business.
            </p>
          </div>
          <Button href="/get-started" variant="secondary">
            Book My Intro Call
          </Button>
        </div>
      </Section>
    </div>
  );
}
