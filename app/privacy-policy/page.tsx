import type { Metadata } from "next";

import Section from "@/components/Section";
import { canonicalUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Privacy Policy | LA CREATIVO",
  description:
    "Learn how LA CREATIVO collects, uses, and protects your information with a clear, simple privacy policy.",
  alternates: {
    canonical: canonicalUrl("/privacy-policy"),
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div>
      <Section
        tone="dark"
        padding="lg"
        eyebrow="Privacy"
        title="Privacy Policy"
        description="We collect only the information needed to respond, deliver services, and keep you informed."
      />

      <Section
        eyebrow="Information we collect"
        title="What we gather"
        description="Information you share in forms or during a project helps us provide accurate recommendations."
      >
        <div className="flex flex-col gap-4 text-sm text-muted-foreground">
          <p>
            We collect contact details, project requirements, and any assets you provide. This may
            include names, emails, phone numbers, and business details.
          </p>
          <p>
            We do not sell or trade your information. Data is used only to deliver services and
            communicate updates.
          </p>
        </div>
      </Section>

      <Section
        eyebrow="How we use data"
        title="Purposeful, minimal use"
        description="Your information is used to respond quickly and keep projects organized."
      >
        <div className="flex flex-col gap-4 text-sm text-muted-foreground">
          <p>
            We use your data to send project updates, confirm timelines, and request approvals.
            Communications remain relevant and limited to your engagement with us.
          </p>
        </div>
      </Section>

      <Section
        eyebrow="Protection"
        title="How we protect your information"
        description="We use secure tools and limit access to the team members working on your project."
      >
        <div className="flex flex-col gap-4 text-sm text-muted-foreground">
          <p>
            Access to sensitive information is restricted to authorized staff and trusted vendors
            required for delivery.
          </p>
          <p>
            If you need your data updated or removed, contact us and we’ll respond promptly.
          </p>
        </div>
      </Section>
    </div>
  );
}
