import Button from "@/components/Button";
import Section from "@/components/Section";

type PackagePageTemplateProps = {
  name: string;
  price: string;
  bestFor: string;
  included: string[];
  steps: string[];
  revisions: string;
  faqs: Array<{ question: string; answer: string }>;
  orderCta: { label: string; href: string };
};

export default function PackagePageTemplate({
  name,
  price,
  bestFor,
  included,
  steps,
  revisions,
  faqs,
  orderCta,
}: PackagePageTemplateProps) {
  return (
    <div>
      <Section tone="dark" padding="lg">
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-dark-foreground/70">
              Package
            </span>
            <span className="rounded-full border border-white/20 px-4 py-2 text-xs text-dark-foreground/70">
              {price}
            </span>
          </div>
          <h1 className="text-reveal text-4xl font-semibold leading-tight text-dark-foreground sm:text-5xl">
            {name}
          </h1>
          <p className="reveal text-base leading-relaxed text-dark-foreground/70 sm:text-lg">
            Best for: {bestFor}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href={orderCta.href} size="lg">
              {orderCta.label}
            </Button>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="What’s included"
        title="A clean, outcome-focused scope"
        description="Everything is designed to move your project forward without extra noise."
      >
        <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
          {included.map((item) => (
            <li key={item} className="card-premium rounded-2xl border border-border bg-card px-4 py-3">
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section
        tone="muted"
        eyebrow="How it works"
        title="3–4 simple steps"
        description="Short and predictable so you always know what happens next."
      >
        <ol className="grid gap-4 text-sm text-muted-foreground md:grid-cols-2">
          {steps.map((step, index) => (
            <li
              key={step}
              className="card-premium flex flex-col gap-3 rounded-3xl border border-border bg-card p-6"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                Step {index + 1}
              </span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        eyebrow="Revisions & guarantees"
        title="Clarity without the fine print"
        description={revisions}
      />

      <Section
        eyebrow="FAQs"
        title="Only the last-mile questions"
        description="Quick answers so you can place your order with confidence."
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

      <Section tone="dark" padding="lg">
        <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-3xl font-semibold text-dark-foreground">
            Ready to order?
          </h2>
          <p className="text-sm text-dark-foreground/70 sm:text-base">
            Place your order now and we’ll confirm your timeline within one
            business day.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href={orderCta.href} size="lg">
              {orderCta.label}
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
