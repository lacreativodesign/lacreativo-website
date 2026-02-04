import Button from "@/components/Button";
import Section from "@/components/Section";
import type { CSSProperties } from "react";

type IndustryServiceCard = {
  label: string;
  description: string;
  href: string;
};

type IndustryPageTemplateProps = {
  name: string;
  heroHeadline: string;
  heroSubtext: string;
  challenges: string[];
  serviceCards: IndustryServiceCard[];
  formCtaLabel: "Order Now" | "Talk to an Expert";
};

export default function IndustryPageTemplate({
  name,
  heroHeadline,
  heroSubtext,
  challenges,
  serviceCards,
  formCtaLabel,
}: IndustryPageTemplateProps) {
  return (
    <div>
      <Section tone="dark" padding="lg">
        <div className="flex flex-col gap-6">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-dark-foreground/70">
            Industry
          </span>
          <h1 className="text-reveal text-4xl font-semibold leading-tight text-dark-foreground sm:text-5xl">
            {heroHeadline}
          </h1>
          <p className="reveal text-base leading-relaxed text-dark-foreground/70 sm:text-lg">
            {heroSubtext}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="#lead-capture" size="lg">
              {formCtaLabel}
            </Button>
            <Button href="/services" variant="secondary" size="lg">
              Browse Services
            </Button>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Challenges we solve"
        title={`What ${name.toLowerCase()} teams are up against`}
        description="Short, common pain points we hear every week."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {challenges.map((challenge, index) => (
            <div
              key={challenge}
              className="card-premium reveal rounded-3xl border border-border bg-card p-5 text-sm text-muted-foreground"
              style={{ "--delay": `${index * 120}ms` } as CSSProperties}
            >
              <div className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                <p>{challenge}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        tone="muted"
        eyebrow="How LA CREATIVO helps"
        title="Services aligned to this industry"
        description="Each service is mapped to the outcomes you care about most."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {serviceCards.map((service, index) => (
            <div
              key={service.href}
              className="card-premium reveal rounded-3xl border border-border bg-card p-6 text-sm"
              style={{ "--delay": `${index * 110}ms` } as CSSProperties}
            >
              <p className="text-base font-semibold text-foreground">
                {service.label}
              </p>
              <p className="mt-2 text-muted-foreground">
                {service.description}
              </p>
              <div className="mt-4">
                <Button href={service.href} variant="secondary" size="sm">
                  View Service
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Packages"
        title="Ready for the full scope?"
        description="Compare packages and choose the pace that fits your timeline."
      >
        <div className="flex flex-wrap items-center gap-4">
          <Button href="/packages" size="lg">
            View Packages
          </Button>
          <p className="text-sm text-muted-foreground">
            Every package includes clear scope, timelines, and launch-ready delivery.
          </p>
        </div>
      </Section>

      <Section
        id="lead-capture"
        tone="muted"
        padding="sm"
        eyebrow="Start with a quick request"
        title={`Tell us about your ${name.toLowerCase()} goals`}
        description="Share four details and we’ll respond within one business day."
      >
        <div className="grid items-center gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-4 text-sm text-muted-foreground">
            <p>
              You’ll receive a tailored recommendation, clear timeline, and the
              best-fit package to move forward confidently.
            </p>
            <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
              <span>✓ 24-hour response window</span>
              <span>✓ Clear next steps</span>
              <span>✓ Friendly, expert guidance</span>
            </div>
          </div>
          <form className="form-surface grid gap-3 rounded-3xl p-5 text-sm text-muted-foreground">
            <input type="text" placeholder="Full name" className="input-field" />
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
            <Button type="submit">{formCtaLabel}</Button>
          </form>
        </div>
      </Section>
    </div>
  );
}
