import Button from "@/components/Button";
import Section from "@/components/Section";
import type { CSSProperties } from "react";

type LinkItem = {
  label: string;
  href: string;
};

type IndustryPageTemplateProps = {
  industry: string;
  heroDescription: string;
  challenges: string[];
  helpMap: Array<{ challenge: string; solution: string }>;
  recommendedServices: LinkItem[];
  recommendedPackages: LinkItem[];
  whyChooseUs: string[];
  faqs: Array<{ question: string; answer: string }>;
};

export default function IndustryPageTemplate({
  industry,
  heroDescription,
  challenges,
  helpMap,
  recommendedServices,
  recommendedPackages,
  whyChooseUs,
  faqs,
}: IndustryPageTemplateProps) {
  return (
    <div>
      <Section tone="dark" padding="lg">
        <div className="flex flex-col gap-6">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-dark-foreground/70">
            Industry
          </span>
          <h1 className="text-reveal text-4xl font-semibold leading-tight text-dark-foreground sm:text-5xl">
            Solutions for {industry} Businesses
          </h1>
          <p className="reveal text-base leading-relaxed text-dark-foreground/70 sm:text-lg">
            {heroDescription}
          </p>
        </div>
      </Section>

      <Section
        eyebrow="Industry challenges"
        title="We start with empathy"
        description="Business realities come first, so your solutions stay focused."
      >
        <div className="flex flex-col gap-4 text-sm leading-relaxed text-muted-foreground">
          {challenges.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Section>

      <Section
        tone="muted"
        eyebrow="How LA CREATIVO helps"
        title="Challenges mapped to real solutions"
        description="Each recommendation ties back to a business outcome."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {helpMap.map((item, index) => (
            <div
              key={item.challenge}
              className="card-premium reveal rounded-3xl border border-border bg-card p-6 text-sm"
              style={{ "--delay": `${index * 120}ms` } as CSSProperties}
            >
              <p className="font-semibold text-foreground">{item.challenge}</p>
              <p className="mt-3 text-muted-foreground">{item.solution}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Recommended services"
        title="Start with the right service"
        description="A curated mix that matches your industry needs."
      >
        <div className="flex flex-wrap gap-3">
          {recommendedServices.map((service) => (
            <Button key={service.href} href={service.href} variant="secondary">
              {service.label}
            </Button>
          ))}
        </div>
      </Section>

      <Section
        tone="muted"
        eyebrow="Recommended packages"
        title="Curated packages"
        description="Only the packages that make sense for this industry."
      >
        <div className="flex flex-wrap gap-3">
          {recommendedPackages.map((pkg) => (
            <Button key={pkg.href} href={pkg.href} variant="secondary">
              {pkg.label}
            </Button>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Why choose us"
        title={`Why ${industry} businesses stay with LA CREATIVO`}
        description="Trust is earned through clarity, consistency, and calm delivery."
      >
        <div className="grid gap-4 text-sm text-muted-foreground md:grid-cols-2">
          {whyChooseUs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="FAQs"
        title="Industry-specific answers"
        description="Objections handled in plain language."
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
