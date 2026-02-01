import Button from "@/components/Button";
import Card from "@/components/Card";
import Section from "@/components/Section";
import TestimonialSlider from "@/components/TestimonialSlider";

const whatWeDo = [
  {
    title: "Brand & Identity",
    description:
      "Visual identities that feel premium, personal, and ready for growth across every touchpoint.",
    icon: "✺",
  },
  {
    title: "Web Design & Build",
    description:
      "Conversion-ready sites built for clarity, speed, and the confidence to click now.",
    icon: "⌂",
  },
  {
    title: "Content & Social",
    description:
      "Story-driven content systems that keep your brand consistent and active without the overwhelm.",
    icon: "✎",
  },
  {
    title: "Launch Strategy",
    description:
      "Straightforward roadmaps so you know exactly what happens before, during, and after launch.",
    icon: "➤",
  },
];

const services = [
  {
    title: "Website Design & Development",
    description: "Full site experiences for new brands and rebrands.",
    href: "/services/website-design-development",
  },
  {
    title: "Brand Refresh Kits",
    description: "Logo, palette, messaging, and launch assets.",
    href: "/services/brand-refresh",
  },
  {
    title: "Social Media Systems",
    description: "Templates, content planning, and visual direction.",
    href: "/services/social-media",
  },
  {
    title: "Ecommerce Setup",
    description: "From storefront to checkout, ready to sell.",
    href: "/services/ecommerce",
  },
  {
    title: "Creative Retainers",
    description: "Ongoing design support without full-time costs.",
    href: "/services/retainers",
  },
  {
    title: "Launch Campaigns",
    description: "Short-burst creative for major moments.",
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

const portfolio = ["Retail Studio", "Wellness Collective", "Cafe Studio"];

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
      <Section tone="dark" padding="lg">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-6">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-dark-foreground/70">
              Creative & Digital Studio
            </span>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              Premium design and web experiences built for growing small
              businesses.
            </h1>
            <p className="text-base leading-relaxed text-dark-foreground/70 sm:text-lg">
              We help founders, local brands, and startups launch with confidence
              — clear messaging, bold visuals, and a process that feels honest
              from day one.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/get-started" size="lg">
                Start Your Project
              </Button>
              <Button href="#services" variant="secondary" size="lg">
                Explore Services
              </Button>
            </div>
            <div className="flex flex-wrap gap-4 text-xs text-dark-foreground/70">
              <span>Launch-ready in 3-6 weeks</span>
              <span>Packages from $499</span>
              <span>US-based creative team</span>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-accent/40 via-transparent to-dark" />
            <div className="relative flex h-[360px] w-full items-center justify-center rounded-[32px] border border-white/10 bg-white/5 text-center text-sm text-dark-foreground/70">
              Background visual placeholder
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
          {whatWeDo.map((item) => (
            <Card
              key={item.title}
              title={item.title}
              description={item.description}
              icon={item.icon}
              cta={
                <Button variant="ghost" size="sm" href="/services">
                  Learn More →
                </Button>
              }
            />
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
          <div className="flex flex-col gap-4 text-sm leading-relaxed text-muted-foreground">
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
          </div>
          <div className="grid gap-4">
            <div className="rounded-3xl border border-border bg-card p-5 text-sm">
              <h3 className="font-semibold">Straightforward Scope</h3>
              <p className="mt-2 text-muted-foreground">
                Clear packages with predictable timelines and deliverables.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-card p-5 text-sm">
              <h3 className="font-semibold">Human Collaboration</h3>
              <p className="mt-2 text-muted-foreground">
                We communicate like people, not agencies — fast, friendly, and
                clear.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-card p-5 text-sm">
              <h3 className="font-semibold">Affordable Excellence</h3>
              <p className="mt-2 text-muted-foreground">
                Premium creative without the premium overhead.
              </p>
            </div>
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
          {services.map((service) => (
            <Card
              key={service.title}
              title={service.title}
              description={service.description}
              cta={
                <Button variant="secondary" size="sm" href={service.href}>
                  View Service
                </Button>
              }
            />
          ))}
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
          {steps.map((step) => (
            <div
              key={step.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-5"
            >
              <h3 className="text-sm font-semibold text-dark-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-xs text-dark-foreground/70">
                {step.description}
              </p>
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
        <div className="grid gap-6 md:grid-cols-3">
          {portfolio.map((item) => (
            <div
              key={item}
              className="group flex h-full flex-col gap-4 rounded-3xl border border-border bg-card p-6"
            >
              <div className="flex h-40 items-center justify-center rounded-2xl bg-muted text-xs text-muted-foreground transition group-hover:bg-accent/20">
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
              Our most popular projects fall between $499 and $2,499, with clear
              upgrades available as you grow. You’ll always know what’s
              included, what’s optional, and why.
            </p>
            <p>
              We also offer flexible payment plans, so you can launch now and
              spread out the investment.
            </p>
          </div>
          <div className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-6 text-sm">
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
          <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-dark-foreground/70">
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
