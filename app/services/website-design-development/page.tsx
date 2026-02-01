import Button from "@/components/Button";
import PricingCard from "@/components/PricingCard";
import Section from "@/components/Section";
import TestimonialSlider from "@/components/TestimonialSlider";
import type { CSSProperties } from "react";

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

const testimonials = [
  {
    quote:
      "Our site finally reflects the quality of our work. We booked three new clients in the first week.",
    name: "Alina S.",
    role: "Founder, Studio Raye",
  },
  {
    quote:
      "Everything was explained clearly, and the timeline actually made sense.",
    name: "Marcus J.",
    role: "Owner, North Bay Coffee",
  },
  {
    quote:
      "The visuals are stunning and the copy feels so us. We’re proud to share it.",
    name: "Brielle T.",
    role: "Director, Kindred Wellness",
  },
];

const faqs = [
  {
    question: "How long does a website build take?",
    answer:
      "Most projects launch in 3-6 weeks depending on the package and how quickly we gather feedback.",
  },
  {
    question: "Do you handle hosting and domains?",
    answer:
      "We guide you through setup and can manage hosting if you want an ongoing partnership.",
  },
  {
    question: "Can we add more pages later?",
    answer:
      "Absolutely. Every build is structured for future growth and modular updates.",
  },
  {
    question: "Do you offer payment plans?",
    answer:
      "Yes. We can split payments across milestones to keep things comfortable.",
  },
];

export default function WebsiteDesignDevelopmentPage() {
  return (
    <div>
      <Section
        tone="dark"
        padding="lg"
        background={<div className="absolute inset-0 gradient-hero opacity-90" />}
      >
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-6">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-dark-foreground/70">
              Website Design & Development
            </span>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              Build a website that looks premium and makes your business feel
              established.
            </h1>
            <p className="text-base leading-relaxed text-dark-foreground/70 sm:text-lg">
              We create conversion-ready websites that balance beautiful design
              with clear messaging. Everything is built for small business
              owners who need to launch fast and look credible.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/get-started" size="lg">
                Start My Website
              </Button>
              <Button href="#packages" variant="secondary" size="lg">
                View Packages
              </Button>
            </div>
            <div className="flex flex-wrap gap-4 text-xs text-dark-foreground/70">
              <span>No jargon, just clear guidance</span>
              <span>Launch-ready in weeks</span>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-[32px] border border-white/10 bg-white/5 p-6 text-sm text-dark-foreground/70">
            <h3 className="text-lg font-semibold text-dark-foreground">
              Service Highlights
            </h3>
            <ul className="mt-2 flex flex-col gap-3">
              <li>✓ Custom design tailored to your audience</li>
              <li>✓ Mobile-first structure and performance</li>
              <li>✓ Conversion-focused storytelling</li>
              <li>✓ Launch support and handoff</li>
            </ul>
            <div className="mt-2 flex h-40 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-xs text-dark-foreground/60">
              Website preview placeholder
            </div>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="What this service is"
        title="An end-to-end website experience, not just pretty pages"
        description="We combine creative direction, copy polish, and build-ready design so your website feels cohesive from the first scroll to the final click."
      >
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="flex flex-col gap-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              This service is designed for small business owners who need a
              reliable online presence without the guesswork. We guide you
              through messaging, layout, and design decisions so you can focus
              on your business while we handle the creative heavy lifting.
            </p>
            <p>
              Expect clear timelines, structured feedback rounds, and a site
              that feels premium on every device. Our goal is to make your brand
              feel established and trustworthy the moment someone visits.
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 text-sm">
            <h3 className="text-lg font-semibold">Best for</h3>
            <p className="mt-3 text-muted-foreground">
              New businesses, rebrands, local teams, and founders ready to level
              up from DIY templates.
            </p>
          </div>
        </div>
      </Section>

      <Section
        tone="muted"
        eyebrow="Project inquiry"
        title="Tell us a little about your website goals"
        description="Share the basics and we’ll recommend the right package, timeline, and next steps."
      >
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-4 text-sm text-muted-foreground">
            <p>
              We respond within one business day with a tailored roadmap. No
              pressure, just clear next steps.
            </p>
            <div className="rounded-3xl border border-border bg-card p-5 text-sm">
              <h3 className="text-lg font-semibold">What we’ll send back</h3>
              <ul className="mt-3 flex flex-col gap-2 text-muted-foreground">
                <li>✓ Recommended package fit</li>
                <li>✓ Timeline estimate</li>
                <li>✓ Budget range</li>
                <li>✓ Prep checklist</li>
              </ul>
            </div>
          </div>
          <form className="grid gap-3 rounded-3xl border border-border bg-card p-6 text-sm">
            <input
              type="text"
              placeholder="Full name"
              className="h-11 rounded-full border border-border bg-muted/40 px-4 text-sm"
            />
            <input
              type="email"
              placeholder="Email address"
              className="h-11 rounded-full border border-border bg-muted/40 px-4 text-sm"
            />
            <input
              type="text"
              placeholder="Business name"
              className="h-11 rounded-full border border-border bg-muted/40 px-4 text-sm"
            />
            <textarea
              placeholder="What do you need your site to do?"
              className="min-h-[120px] rounded-3xl border border-border bg-muted/40 px-4 py-3 text-sm"
            />
            <Button type="submit">Request a plan</Button>
          </form>
        </div>
      </Section>

      <Section
        tone="muted"
        eyebrow="Who it’s for"
        title="A fit for businesses that want to look established, fast"
        description="We built this service for owners who want a premium presence but need everything explained in real-world terms."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Founders & startups",
              description:
                "Launch a site that makes investors, partners, and customers take you seriously.",
            },
            {
              title: "Local businesses",
              description:
                "Show the quality of your service with a site that feels polished and welcoming.",
            },
            {
              title: "Growing teams",
              description:
                "Upgrade your presence to match your momentum and new offerings.",
            },
            {
              title: "Product launches",
              description:
                "Put a polished face on your next release and generate early trust.",
            },
          ].map((item, index) => (
            <div
              key={item.title}
              className="reveal rounded-3xl border border-border bg-card p-6 text-sm"
              style={{ "--delay": `${index * 120}ms` } as CSSProperties}
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Platforms supported"
        title="Modern platforms, ready for your customers"
        description="We design with flexibility in mind so you can scale without rebuilding later."
      >
        <div className="flex flex-wrap items-center gap-4 rounded-3xl border border-border bg-card p-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span className="rounded-full border border-border px-4 py-2">
            Shopify
          </span>
          <span className="rounded-full border border-border px-4 py-2">
            Squarespace
          </span>
          <span className="rounded-full border border-border px-4 py-2">
            Webflow
          </span>
          <span className="rounded-full border border-border px-4 py-2">
            WordPress
          </span>
          <span className="rounded-full border border-border px-4 py-2">
            Custom Build
          </span>
        </div>
      </Section>

      <Section
        tone="dark"
        eyebrow="Portfolio"
        title="Preview the styles we can adapt for you"
        description="No stock templates — just curated direction to inspire your build."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {["Wellness", "Hospitality", "Creative"].map((item, index) => (
            <div
              key={item}
              className="reveal flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-dark-foreground/70"
              style={{ "--delay": `${index * 120}ms` } as CSSProperties}
            >
              <div className="flex h-40 items-center justify-center rounded-2xl bg-white/10 text-xs">
                Portfolio placeholder
              </div>
              <span className="text-sm font-semibold text-dark-foreground">
                {item} Launch
              </span>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="packages"
        eyebrow="Packages"
        title="Six structured options to match your stage"
        description="Choose a package that fits your goals today and scales for tomorrow."
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {packages.map((item, index) => (
            <div
              key={item.name}
              className="reveal"
              style={{ "--delay": `${index * 120}ms` } as CSSProperties}
            >
              <PricingCard
                name={item.name}
                description={item.description}
                features={item.features}
              />
            </div>
          ))}
        </div>
      </Section>

      <Section
        tone="muted"
        eyebrow="Testimonials"
        title="Website clients who launched with confidence"
        description="Proof that clear communication and premium design can coexist."
      >
        <TestimonialSlider items={testimonials} />
      </Section>

      <Section
        eyebrow="FAQs"
        title="Common questions, answered honestly"
        description="If you’re unsure about the process, this should help."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="rounded-3xl border border-border bg-card p-6 text-sm"
            >
              <summary className="cursor-pointer font-semibold">
                {faq.question}
              </summary>
              <p className="mt-3 text-muted-foreground">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Section>

      <Section tone="dark" padding="lg">
        <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-3xl font-semibold text-dark-foreground">
            Ready to build your website with a partner you trust?
          </h2>
          <p className="text-sm text-dark-foreground/70 sm:text-base">
            We’ll map your timeline, review your goals, and recommend the right
            package in one quick conversation.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/get-started" size="lg">
              Schedule a Call
            </Button>
            <Button href="/services" variant="secondary" size="lg">
              Explore Other Services
            </Button>
          </div>
          <div className="flex flex-wrap gap-3 text-xs text-dark-foreground/70">
            <span>Internal link: Brand refresh</span>
            <span>Internal link: Social media systems</span>
            <span>Internal link: Pricing guide</span>
          </div>
        </div>
      </Section>
    </div>
  );
}
