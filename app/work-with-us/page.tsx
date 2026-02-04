import type { Metadata } from "next";

import Button from "@/components/Button";
import Section from "@/components/Section";
import { canonicalUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Work With Us | LA CREATIVO",
  description:
    "Explore partner programs, affiliate opportunities, and career paths with LA CREATIVO.",
  alternates: {
    canonical: canonicalUrl("/work-with-us"),
  },
};

export default function WorkWithUsPage() {
  return (
    <div>
      <Section
        tone="dark"
        padding="lg"
        eyebrow="Work with us"
        title="Partner with LA CREATIVO"
        description="Choose the path that fits your agency, referral network, or creative career."
      />

      <Section
        eyebrow="Partners"
        title="Reseller program"
        description="Support your clients with a reliable delivery team behind the scenes."
      >
        <div className="flex flex-col gap-4 text-sm text-muted-foreground">
          <p>
            Ideal for agencies, consultants, and studios that want premium execution with clear
            timelines and dependable communication.
          </p>
          <Button href="/reseller-program" variant="secondary" size="sm">
            View reseller program
          </Button>
        </div>
      </Section>

      <Section
        eyebrow="Partners"
        title="Affiliate program"
        description="Refer founders and teams who need design and launch support."
      >
        <div className="flex flex-col gap-4 text-sm text-muted-foreground">
          <p>
            We keep referrals organized, responsive, and transparent so you always know the status
            of your introduction.
          </p>
          <Button href="/affiliate-program" variant="secondary" size="sm">
            View affiliate program
          </Button>
        </div>
      </Section>

      <Section
        eyebrow="Careers"
        title="Join the team"
        description="Work with a small, focused team that values calm delivery and premium output."
      >
        <div className="flex flex-col gap-4 text-sm text-muted-foreground">
          <p>
            If you thrive on clarity, collaboration, and thoughtful design, we’d love to hear from you.
          </p>
          <Button href="/careers" variant="secondary" size="sm">
            Explore careers
          </Button>
        </div>
      </Section>
    </div>
  );
}
