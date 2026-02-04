import Button from "@/components/Button";
import PricingCard from "@/components/PricingCard";
import Section from "@/components/Section";
import type { CSSProperties } from "react";

type ServicePackage = {
  name: string;
  description: string;
  features: string[];
};

type ServicePageTemplateProps = {
  hero: {
    serviceName: string;
    headline: string;
    description: string;
    primaryCta: LinkItem;
    secondaryCta: LinkItem;
  };
  whatThisServiceIs: {
    title: string;
    description: string;
    paragraphs: string[];
  };
  whoItsFor: {
    title: string;
    description: string;
    paragraphs: string[];
  };
  howWeDeliver: {
    title: string;
    description: string;
    paragraphs: string[];
  };
  packages: {
    title: string;
    description: string;
    items: ServicePackage[];
  };
  faqs: Array<{ question: string; answer: string }>;
  internalLinks: {
    packages: string[];
    industries: string[];
    platforms: string[];
  };
};

export default function ServicePageTemplate({
  hero,
  whatThisServiceIs,
  whoItsFor,
  howWeDeliver,
  packages,
  faqs,
  internalLinks,
}: ServicePageTemplateProps) {
  const createAnchorId = (prefix: string, label: string) =>
    `${prefix}-${label
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")}`;

  return (
    <div>
      <Section
        tone="dark"
        padding="lg"
        background={
          <>
            <div className="absolute inset-0 gradient-hero opacity-90" />
            <div className="absolute inset-0 hero-ambient opacity-80" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_0%,rgba(255,255,255,0.08),transparent_55%)]" />
          </>
        }
      >
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-6">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-dark-foreground/70">
              {hero.serviceName}
            </span>
            <h1 className="text-reveal text-4xl font-semibold leading-tight sm:text-5xl">
              {hero.headline}
            </h1>
            <p className="reveal text-base leading-relaxed text-dark-foreground/70 sm:text-lg">
              {hero.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href={hero.primaryCta.href} size="lg">
                {hero.primaryCta.label}
              </Button>
              <Button href={hero.secondaryCta.href} variant="secondary" size="lg">
                {hero.secondaryCta.label}
              </Button>
            </div>
          </div>
          <div className="hero-panel flex flex-col gap-4 rounded-[32px] p-6 text-sm text-dark-foreground/70">
            <h3 className="text-lg font-semibold text-dark-foreground">
              Service Focus
            </h3>
            <p className="text-sm text-dark-foreground/70">
              Every service page keeps one clear goal, with calm guidance and
              just the details needed to decide.
            </p>
            <div
              role="img"
              aria-label="Service highlight preview placeholder"
              className="mt-2 flex h-40 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-xs text-dark-foreground/60"
            >
              Visual highlight placeholder
            </div>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="What this service is"
        title={whatThisServiceIs.title}
        description={whatThisServiceIs.description}
      >
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="flex flex-col gap-4 text-sm leading-relaxed text-muted-foreground">
            {whatThisServiceIs.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="card-premium rounded-3xl border border-border bg-card p-6 text-sm">
            <h3 className="text-lg font-semibold">What you can expect</h3>
            <p className="mt-3 text-muted-foreground">
              Clear timelines, friendly guidance, and deliverables built to
              convert without overwhelming your audience.
            </p>
          </div>
        </div>
      </Section>

      <Section
        tone="muted"
        eyebrow="Who it’s for"
        title={whoItsFor.title}
        description={whoItsFor.description}
      >
        <div className="flex flex-col gap-4 text-sm leading-relaxed text-muted-foreground">
          {whoItsFor.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="How LA CREATIVO delivers this"
        title={howWeDeliver.title}
        description={howWeDeliver.description}
      >
        <div className="grid gap-6 md:grid-cols-2">
          {howWeDeliver.paragraphs.map((paragraph, index) => (
            <div
              key={paragraph}
              className="card-premium reveal rounded-3xl border border-border bg-card p-6 text-sm"
              style={{ "--delay": `${index * 120}ms` } as CSSProperties}
            >
              <p className="text-muted-foreground">{paragraph}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="packages"
        eyebrow="Packages"
        title={packages.title}
        description={packages.description}
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {packages.items.map((item, index) => (
            <div
              key={item.name}
              id={createAnchorId("package", item.name)}
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
        id="industries"
        tone="muted"
        eyebrow="Industries"
        title="Industries we support with this service"
        description="Focused website builds for the industries we know best."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {internalLinks.industries.map((industry, index) => (
            <div
              key={industry}
              id={createAnchorId("industry", industry)}
              className="card-premium reveal rounded-3xl border border-border bg-card p-5 text-sm"
              style={{ "--delay": `${index * 100}ms` } as CSSProperties}
            >
              <h3 className="text-base font-semibold">{industry}</h3>
              <p className="mt-2 text-muted-foreground">
                Tailored structure, messaging, and calls to action for your
                audience.
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="platforms"
        eyebrow="Platforms"
        title="Platform-ready builds"
        description="We’ll recommend the best-fit platform based on your goals and team."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {internalLinks.platforms.map((platform, index) => (
            <div
              key={platform}
              id={createAnchorId("platform", platform)}
              className="card-premium reveal rounded-3xl border border-border bg-card p-5 text-sm"
              style={{ "--delay": `${index * 100}ms` } as CSSProperties}
            >
              <h3 className="text-base font-semibold">{platform}</h3>
              <p className="mt-2 text-muted-foreground">
                Clear editing workflows with performance and SEO in mind.
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="FAQs"
        title="Answers for the last-mile questions"
        description="Short, clear answers to help you move forward confidently."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="card-premium rounded-3xl border border-border bg-card p-6 text-sm"
            >
              <summary className="cursor-pointer font-semibold">
                {faq.question}
              </summary>
              <p className="mt-3 text-muted-foreground">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Section>

      <Section
        tone="dark"
        eyebrow="Internal links"
        title="Keep exploring with purpose"
        description="Jump to the packages, industries, and platforms most relevant to you."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-dark-foreground/70">
            <h3 className="text-lg font-semibold text-dark-foreground">
              Packages
            </h3>
            <div className="flex flex-col gap-3">
              {internalLinks.packages.map((item) => (
                <Button
                  key={item}
                  href={`#${createAnchorId("package", item)}`}
                  variant="secondary"
                >
                  {item}
                </Button>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-dark-foreground/70">
            <h3 className="text-lg font-semibold text-dark-foreground">
              Industries
            </h3>
            <div className="flex flex-col gap-3">
              {internalLinks.industries.map((item) => (
                <Button
                  key={item}
                  href={`#${createAnchorId("industry", item)}`}
                  variant="secondary"
                >
                  {item}
                </Button>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-dark-foreground/70">
            <h3 className="text-lg font-semibold text-dark-foreground">
              Platforms
            </h3>
            <div className="flex flex-col gap-3">
              {internalLinks.platforms.map((item) => (
                <Button
                  key={item}
                  href={`#${createAnchorId("platform", item)}`}
                  variant="secondary"
                >
                  {item}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
