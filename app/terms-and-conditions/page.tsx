import type { Metadata } from "next";

import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Terms & Conditions | LA CREATIVO",
  description:
    "Review LA CREATIVO terms, timelines, ownership, and the full guarantee details in one place.",
};

export default function TermsAndConditionsPage() {
  return (
    <div>
      <Section
        tone="dark"
        padding="lg"
        eyebrow="Terms"
        title="Terms & Conditions"
        description="Clear, straightforward terms for how projects, payments, and guarantees work."
      />

      <Section
        eyebrow="Overview"
        title="Project scope and communication"
        description="We keep scopes focused, timelines realistic, and communication clear so you always know what to expect."
      >
        <div className="flex flex-col gap-4 text-sm text-muted-foreground">
          <p>
            Each project is delivered based on the package or custom scope agreed to in writing.
            Any change requests outside that scope are discussed and approved before work begins.
          </p>
          <p>
            We provide status updates at key milestones and respond to inquiries within one business
            day whenever possible.
          </p>
        </div>
      </Section>

      <Section
        eyebrow="Payments"
        title="Deposits, milestones, and final delivery"
        description="Payments are structured to protect both parties and keep projects moving forward."
      >
        <div className="flex flex-col gap-4 text-sm text-muted-foreground">
          <p>
            Projects begin once the initial payment is received and the kickoff details are submitted.
            Remaining balances are due at the milestone(s) defined in your agreement.
          </p>
          <p>
            Final files are delivered after the last payment clears and all approval steps are complete.
          </p>
        </div>
      </Section>

      <Section
        eyebrow="Ownership"
        title="You own the final deliverables"
        description="Once the project is paid in full, ownership transfers to you."
      >
        <div className="flex flex-col gap-4 text-sm text-muted-foreground">
          <p>
            You receive full rights to the final, approved deliverables. Working files are included
            when specified in your scope.
          </p>
          <p>
            We may showcase final work in our portfolio unless a confidentiality agreement is in place.
          </p>
        </div>
      </Section>

      <Section
        eyebrow="Guarantees"
        title="Our guarantees"
        description="These guarantees apply to active, in-scope projects completed under the agreed timeline."
      >
        <div className="grid gap-6 text-sm text-muted-foreground lg:grid-cols-3">
          <div className="card-premium rounded-3xl border border-border bg-card p-6">
            <h3 className="text-base font-semibold text-foreground">
              100% Satisfaction Guarantee
            </h3>
            <p className="mt-3">
              We collaborate through the included revision rounds to reach an outcome that aligns
              with the approved scope and your feedback.
            </p>
          </div>
          <div className="card-premium rounded-3xl border border-border bg-card p-6">
            <h3 className="text-base font-semibold text-foreground">
              100% Money-Back Guarantee
            </h3>
            <p className="mt-3">
              If we miss the agreed scope or fail to deliver the approved outcome, we will provide a
              full refund for the portion of work not delivered.
            </p>
          </div>
          <div className="card-premium rounded-3xl border border-border bg-card p-6">
            <h3 className="text-base font-semibold text-foreground">
              100% Unique Design Guarantee
            </h3>
            <p className="mt-3">
              Every project is built from scratch. We do not reuse templates or resell design assets
              from other client projects.
            </p>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Timelines"
        title="Scheduling and client responsibilities"
        description="Timelines stay on track when feedback and approvals are provided on time."
      >
        <div className="flex flex-col gap-4 text-sm text-muted-foreground">
          <p>
            Timelines are estimates based on the package scope and the speed of client approvals.
            Delays in feedback or missing materials can extend delivery dates.
          </p>
          <p>
            If you need to pause a project, we’ll document the status and resume when the required
            inputs are available.
          </p>
        </div>
      </Section>
    </div>
  );
}
