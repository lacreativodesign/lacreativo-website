import Button from "@/components/Button";
import Section from "@/components/Section";

type LinkItem = {
  label: string;
  href: string;
};

type ServicePageTemplateProps = {
  hero: {
    serviceName: string;
    headline: string;
    description: string;
    primaryCta: LinkItem;
    secondaryCta: LinkItem;
  };
  audience: {
    title: string;
    description: string;
    ideal: string[];
    notFor: string[];
  };
  whatYouGet: {
    title: string;
    description: string;
    groups: Array<{
      title: string;
      items: string[];
    }>;
  };
  packages: {
    title: string;
    description: string;
    items: Array<{
      name: string;
      startingPrice: string;
      href: string;
    }>;
  };
  leadCapture: {
    title: string;
    description: string;
    benefits: string[];
    formCtaLabel: string;
  };
  conversionCta: {
    title: string;
    description: string;
    primaryCta: LinkItem;
  };
  faqs: Array<{ question: string; answer: string }>;
};

export default function ServicePageTemplate({
  hero,
  audience,
  whatYouGet,
  packages,
  leadCapture,
  conversionCta,
  faqs,
}: ServicePageTemplateProps) {
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
              Trusted delivery
            </h3>
            <p className="text-sm text-dark-foreground/70">
              Clear scope, direct guidance, and a launch-ready site built to
              convert.
            </p>
            <div className="mt-2 grid gap-2 text-xs text-dark-foreground/70">
              <span>• Strategy-led structure</span>
              <span>• 24-hour response window</span>
              <span>• Ownership of every asset</span>
            </div>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Fit check"
        title={audience.title}
        description={audience.description}
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="card-premium rounded-3xl border border-border bg-card p-6 text-sm">
            <h3 className="text-lg font-semibold">Ideal for</h3>
            <ul className="mt-4 flex flex-col gap-3 text-muted-foreground">
              {audience.ideal.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="font-semibold text-accent">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card-premium rounded-3xl border border-border bg-card p-6 text-sm">
            <h3 className="text-lg font-semibold">Not for</h3>
            <ul className="mt-4 flex flex-col gap-3 text-muted-foreground">
              {audience.notFor.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="font-semibold text-destructive">✕</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="What you get"
        title={whatYouGet.title}
        description={whatYouGet.description}
      >
        <div className="grid gap-6 md:grid-cols-2">
          {whatYouGet.groups.map((group) => (
            <div
              key={group.title}
              className="card-premium rounded-3xl border border-border bg-card p-6 text-sm"
            >
              <h3 className="text-lg font-semibold">{group.title}</h3>
              <ul className="mt-4 flex flex-col gap-3 text-muted-foreground">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="packages"
        eyebrow="Packages snapshot"
        title={packages.title}
        description={packages.description}
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {packages.items.map((item) => (
            <div
              key={item.name}
              className="card-premium flex h-full flex-col gap-4 rounded-3xl border border-border bg-card p-6 text-sm"
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <span className="text-sm font-semibold text-accent">
                  {item.startingPrice}
                </span>
              </div>
              <Button href={item.href} variant="secondary" size="sm">
                View Package Details
              </Button>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="lead-capture"
        tone="muted"
        padding="sm"
        eyebrow="Ready to move"
        title={leadCapture.title}
        description={leadCapture.description}
      >
        <div className="grid items-center gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-4 text-sm text-muted-foreground">
            <p>
              Share four details and we’ll reply with the best package fit,
              timeline, and next steps.
            </p>
            <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
              {leadCapture.benefits.map((benefit) => (
                <span key={benefit}>✓ {benefit}</span>
              ))}
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
            <Button type="submit">{leadCapture.formCtaLabel}</Button>
          </form>
        </div>
      </Section>

      <Section tone="dark" eyebrow="Next step" title={conversionCta.title}>
        <div className="flex flex-col gap-4 text-sm text-dark-foreground/70 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl text-sm text-dark-foreground/70">
            {conversionCta.description}
          </p>
          <Button href={conversionCta.primaryCta.href} size="lg">
            {conversionCta.primaryCta.label}
          </Button>
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
    </div>
  );
}
