import Button from "@/components/Button";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import OrderNowButton from "@/components/OrderNowButton";
import Card from "@/components/Card";
import Section from "@/components/Section";
import type { ServiceCategory } from "@/data/services";

type CategoryPageContentProps = {
  category: ServiceCategory;
};

export default function CategoryPageContent({ category }: CategoryPageContentProps) {
  const orderSteps = [
    "Order placed and confirmation sent.",
    "Intake form and kickoff call.",
    "First draft delivered for review.",
    "Revision round(s) based on your feedback.",
    "Final delivery and launch support.",
  ];

  return (
    <div>
      <Section
        tone="dark"
        padding="lg"
        eyebrow="Service category"
        title={category.name}
        description={category.heroDescription}
      >
        <div className="mt-6 flex flex-wrap gap-4">
          <OrderNowButton
            href="#lead-capture"
            size="lg"
            packageId="general"
            service={category.name}
          >
            Order Now
          </OrderNowButton>
          <Button href="/services" variant="secondary" size="lg">
            Browse all services
          </Button>
        </div>
        <div className="mt-4 flex flex-wrap gap-3 text-xs text-dark-foreground/60">
          <span>100% satisfaction guaranteed</span>
          <span>You own everything we build</span>
          <span>No hidden fees or surprise add-ons</span>
        </div>
      </Section>

      <Section
        eyebrow="What it is"
        title={`What ${category.name} includes`}
        description={category.description}
      >
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-4 text-sm text-muted-foreground">
            <p>
              {category.name} is designed to help USA small businesses build trust quickly and
              move customers toward a clear next step. We keep the scope focused, communicate in
              plain language, and deliver polished assets your team can use right away.
            </p>
            <p>
              Every engagement includes a clear roadmap, steady updates, and a launch-ready finish
              so you never feel stuck wondering what happens next.
            </p>
          </div>
          <div className="card-premium rounded-3xl border border-border bg-card p-6 text-sm">
            <h3 className="text-lg font-semibold">What makes this different</h3>
            <ul className="mt-4 flex flex-col gap-3 text-muted-foreground">
              <li className="flex gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                <span>Clear scope and timelines from day one.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                <span>Human guidance built for USA small business owners.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                <span>Premium delivery without agency-level friction.</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {category.slug === "website-design-development" && (
        <Section
          tone="muted"
          eyebrow="What happens after you order"
          title="A clear, five-step handoff"
          description="Short, predictable steps so you know what happens next."
        >
          <ol className="grid gap-4 text-sm text-muted-foreground md:grid-cols-2">
            {orderSteps.map((step, index) => (
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
      )}

      <Section
        eyebrow="Who it’s for"
        title="A great fit for focused teams"
        description="We work best with owners who want clarity, momentum, and a premium result without the confusion."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="card-premium rounded-3xl border border-border bg-card p-6 text-sm">
            <h3 className="text-lg font-semibold">Ideal for</h3>
            <ul className="mt-4 flex flex-col gap-3 text-muted-foreground">
              <li>USA small businesses ready to upgrade their brand experience.</li>
              <li>Founders who want a clean scope and reliable communication.</li>
              <li>Teams that need fast delivery with premium quality.</li>
              <li>Owners who value clarity over endless experimentation.</li>
            </ul>
          </div>
          <div className="card-premium rounded-3xl border border-border bg-card p-6 text-sm">
            <h3 className="text-lg font-semibold">Not for</h3>
            <ul className="mt-4 flex flex-col gap-3 text-muted-foreground">
              <li>Projects without a clear decision maker or timeline.</li>
              <li>Teams seeking the lowest-cost option only.</li>
              <li>Unlimited-scope projects without defined milestones.</li>
              <li>Brands not ready to act on feedback quickly.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Sub-services"
        title="Choose the service that fits your goals"
        description="Each sub-service includes clear packages, timelines, and a guided path to launch."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {category.services.map((service) => (
            <Card
              key={service.slug}
              title={service.name}
              description={service.description}
              icon="✦"
              cta={
                <Button
                  href={`/services/${category.slug}/${service.slug}`}
                  variant="secondary"
                  size="sm">
                  View Details
                </Button>
              }
            />
          ))}
        </div>
      </Section>

      <Section
        id="lead-capture"
        tone="muted"
        padding="sm"
        eyebrow="Ready to move"
        title="Get a scoped recommendation"
        description="Share a few details and we’ll reply within one business day with the best-fit service and package options."
      >
        <div className="grid items-center gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-4 text-sm text-muted-foreground">
            <p>
              Tell us what you’re building and we’ll provide a clear scope, timeline, and next
              steps so you can move forward with confidence.
            </p>
            <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
              <span>✓ 24-hour response window</span>
              <span>✓ Recommended package fit</span>
              <span>✓ Friendly, no-pressure guidance</span>
            </div>
          </div>
          <LeadCaptureForm
            ctaLabel="Send my request"
            formClassName="form-surface grid gap-3 rounded-3xl p-5 text-sm text-muted-foreground"
            inputClassName="input-field"
          />
        </div>
      </Section>

      <Section
        eyebrow="FAQs"
        title="Answers to the most common questions"
        description="Short, clear answers so you can choose the right service with confidence."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              question: "How quickly can we get started?",
              answer:
                "Most projects can begin within one week once we align on the right package and scope.",
            },
            {
              question: "Do you only work with USA-based businesses?",
              answer:
                "We focus on USA small businesses, so our timelines and communication are built for that market.",
            },
            {
              question: "Can I combine multiple services?",
              answer:
                "Yes. We can bundle services when it makes sense and keep one clear project timeline.",
            },
            {
              question: "Will I own the final assets?",
              answer:
                "Absolutely. You receive full ownership of the deliverables and files at handoff.",
            },
          ].map((faq) => (
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
