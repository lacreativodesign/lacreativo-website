import type { Metadata } from "next";

import Button from "@/components/Button";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Client Login | LA CREATIVO",
  description:
    "Access the LA CREATIVO client portal to review updates, files, and next steps.",
};

export default function ClientLoginPage() {
  return (
    <div>
      <Section
        tone="dark"
        padding="lg"
        eyebrow="Client portal"
        title="Client Login"
        description="Use Bizosto to review timelines, approvals, and delivery notes in one place."
      >
        <div className="mt-6 flex flex-wrap gap-4">
          <Button href="https://app.bizosto.com" size="lg">
            Enter Bizosto
          </Button>
          <Button href="/contact" variant="secondary" size="lg">
            Need access?
          </Button>
        </div>
        <div className="mt-4 flex flex-wrap gap-3 text-xs text-dark-foreground/60">
          <span>Secure access for active clients</span>
          <span>Clear approvals and file handoff</span>
          <span>Support within one business day</span>
        </div>
      </Section>
    </div>
  );
}
