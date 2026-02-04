import Button from "@/components/Button";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import OrderNowButton from "@/components/OrderNowButton";
import Card from "@/components/Card";
import Section from "@/components/Section";
import type { CSSProperties } from "react";

type IndustryLink = {
  label: string;
  description: string;
  href: string;
};

type IndustryHelpItem = {
  title: string;
  description: string;
};

type IndustryLandingPageProps = {
  name: string;
  heroHeadline: string;
  heroSubtext: string;
  problems: string[];
  helpItems: IndustryHelpItem[];
  recommendedServices: IndustryLink[];
  recommendedPackages: IndustryLink[];
  formCtaLabel: "Order Now" | "Talk to an Expert";
};

export default function IndustryLandingPage({
  name,
  heroHeadline,
  heroSubtext,
  problems,
  helpItems,
  recommendedServices,
  recommendedPackages,
  formCtaLabel,
}: IndustryLandingPageProps) {
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
            {formCtaLabel === "Order Now" ? (
              <OrderNowButton
                href="#lead-capture"
                size="lg"
                packageId="general"
                service={name}
              >
                {formCtaLabel}
              </OrderNowButton>
            ) : (
              <Button href="#lead-capture" size="lg">
                {formCtaLabel}
              </Button>
            )}
            <Button href="/services" variant="secondary" size="lg">
              Browse Services
            </Button>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Common problems"
        title={`What ${name.toLowerCase()} teams struggle with`}
        description="We hear these pain points every week. You’re not alone."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {problems.map((problem, index) => (
            <div
              key={problem}
              className="card-premium reveal rounded-3xl border border-border bg-card p-5 text-sm text-muted-foreground"
              style={{ "--delay": `${index * 120}ms` } as CSSProperties}
            >
              {problem}
            </div>
          ))}
        </div>
      </Section>

      <Section
        tone="muted"
        eyebrow="How LA CREATIVO helps"
        title="Outcome-driven support"
        description="We focus on confidence, clarity, and conversion-ready assets."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {helpItems.map((item, index) => (
            <div
              key={item.title}
              className="card-premium reveal rounded-3xl border border-border bg-card p-6 text-sm"
              style={{ "--delay": `${index * 110}ms` } as CSSProperties}
            >
              <h3 className="text-base font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Recommended services"
        title="Start with the right service"
        description="A curated mix tailored to this industry’s priorities."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recommendedServices.map((service) => (
            <Card
              key={service.href}
              title={service.label}
              description={service.description}
              icon="✦"
              cta={
                <Button href={service.href} variant="secondary" size="sm">
                  View Service
                </Button>
              }
            />
          ))}
        </div>
      </Section>

      <Section
        tone="muted"
        eyebrow="Recommended packages"
        title="Package options that fit"
        description="Choose the package that matches your current momentum."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {recommendedPackages.map((pkg) => (
            <Card
              key={pkg.href}
              title={pkg.label}
              description={pkg.description}
              icon="◆"
              cta={
                <OrderNowButton href={pkg.href} variant="secondary" size="sm">
                  Order Now
                </OrderNowButton>
              }
            />
          ))}
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
          <LeadCaptureForm
            ctaLabel={formCtaLabel}
            formClassName="form-surface grid gap-3 rounded-3xl p-5 text-sm text-muted-foreground"
            inputClassName="input-field"
          />
        </div>
      </Section>
    </div>
  );
}
