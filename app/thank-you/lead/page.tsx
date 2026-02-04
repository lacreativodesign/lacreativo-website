import type { Metadata } from "next";
import Link from "next/link";
import ThankYouEvent from "../_components/ThankYouEvent";

export const metadata: Metadata = {
  title: "Thank You — Request Received",
  description: "We have received your request and will be in touch shortly.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function LeadThankYouPage() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-start justify-center px-6 py-16">
      <ThankYouEvent event="lead_submit_success" pageType="lead" />
      <h1 className="text-3xl font-semibold text-foreground">
        Thanks — we received your request
      </h1>
      <p className="mt-4 text-base text-muted-foreground">
        Your details are safe with us. We&apos;ll review them and respond within
        one business day.
      </p>
      <div className="mt-6 flex flex-col gap-3 text-sm text-muted-foreground">
        <p className="font-semibold text-foreground">What happens next</p>
        <ol className="list-decimal space-y-2 pl-5">
          <li>We confirm the right package and timeline for your goals.</li>
          <li>You&apos;ll receive a clear recommendation and next steps.</li>
          <li>If needed, we&apos;ll schedule a quick call to finalize details.</li>
        </ol>
      </div>
      <p className="mt-6 text-sm text-muted-foreground">
        Need to add context? Reply to our confirmation email or reach us through
        Client Login.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full border border-foreground px-5 py-2 text-sm font-medium text-foreground transition hover:bg-foreground hover:text-background"
        >
          Back to Home
        </Link>
        <Link
          href="/client-login"
          className="inline-flex items-center justify-center rounded-full border border-foreground px-5 py-2 text-sm font-medium text-foreground transition hover:bg-foreground hover:text-background"
        >
          Client Login
        </Link>
      </div>
    </section>
  );
}
