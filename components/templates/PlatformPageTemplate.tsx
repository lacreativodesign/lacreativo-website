import Button from "@/components/Button";
import Section from "@/components/Section";

type LinkItem = {
  label: string;
  href: string;
};

type PlatformPageTemplateProps = {
  platform: string;
  summary: string;
  bestFor: string[];
  pros: string[];
  cons: string[];
  howWeUseIt: string[];
  relatedServices: LinkItem[];
  packagesUsingPlatform: LinkItem[];
  internalLinks: LinkItem[];
};

export default function PlatformPageTemplate({
  platform,
  summary,
  bestFor,
  pros,
  cons,
  howWeUseIt,
  relatedServices,
  packagesUsingPlatform,
  internalLinks,
}: PlatformPageTemplateProps) {
  return (
    <div>
      <Section tone="dark" padding="lg">
        <div className="flex flex-col gap-6">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-dark-foreground/70">
            Platform
          </span>
          <h1 className="text-reveal text-4xl font-semibold leading-tight text-dark-foreground sm:text-5xl">
            {platform}
          </h1>
          <p className="reveal text-base leading-relaxed text-dark-foreground/70 sm:text-lg">
            {summary}
          </p>
        </div>
      </Section>

      <Section
        eyebrow="What this platform is"
        title={`A quick overview of ${platform}`}
        description="Just the essentials, explained clearly."
      >
        <p className="text-sm leading-relaxed text-muted-foreground">{summary}</p>
      </Section>

      <Section
        tone="muted"
        eyebrow="Who it’s best for"
        title="Best-fit businesses"
        description="Straightforward guidance for business owners."
      >
        <div className="flex flex-col gap-3 text-sm text-muted-foreground">
          {bestFor.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Pros & cons"
        title="Balanced clarity"
        description="A simple snapshot before you commit."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card-premium rounded-3xl border border-border bg-card p-6 text-sm">
            <h3 className="text-lg font-semibold">Pros</h3>
            <ul className="mt-3 flex flex-col gap-2 text-muted-foreground">
              {pros.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="card-premium rounded-3xl border border-border bg-card p-6 text-sm">
            <h3 className="text-lg font-semibold">Cons</h3>
            <ul className="mt-3 flex flex-col gap-2 text-muted-foreground">
              {cons.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section
        tone="muted"
        eyebrow="How LA CREATIVO uses it"
        title="Built for real client outcomes"
        description="We focus on performance, clarity, and scale."
      >
        <div className="flex flex-col gap-3 text-sm text-muted-foreground">
          {howWeUseIt.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Related services"
        title="Services that pair well"
        description="Link directly to the service pages that use this platform."
      >
        <div className="flex flex-wrap gap-3">
          {relatedServices.map((item) => (
            <Button key={item.href} href={item.href} variant="secondary">
              {item.label}
            </Button>
          ))}
        </div>
      </Section>

      <Section
        tone="muted"
        eyebrow="Packages using this platform"
        title="Package options"
        description="Curated packages that include this platform."
      >
        <div className="flex flex-wrap gap-3">
          {packagesUsingPlatform.map((item) => (
            <Button key={item.href} href={item.href} variant="secondary">
              {item.label}
            </Button>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Internal links"
        title="Keep the journey focused"
        description="Helpful next steps without distractions."
      >
        <div className="flex flex-wrap gap-3">
          {internalLinks.map((item) => (
            <Button key={item.href} href={item.href} variant="secondary">
              {item.label}
            </Button>
          ))}
        </div>
      </Section>
    </div>
  );
}
