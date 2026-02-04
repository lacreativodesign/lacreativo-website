import type { Metadata } from "next";
import Link from "next/link";
import ThankYouEvent from "../_components/ThankYouEvent";
import { canonicalUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Thank You — Order Confirmed",
  description: "We have received your order.",
  alternates: {
    canonical: canonicalUrl("/thank-you/order"),
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function OrderThankYouPage() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-start justify-center px-6 py-16">
      <ThankYouEvent event="order_success" pageType="order" />
      <h1 className="text-3xl font-semibold text-foreground">
        Order confirmed
      </h1>
      <p className="mt-4 text-base text-muted-foreground">
        Thank you for your order. We&apos;ll send the next steps shortly.
      </p>
      <div className="mt-6 flex flex-col gap-3 text-sm text-muted-foreground">
        <p className="font-semibold text-foreground">What happens next</p>
        <ol className="list-decimal space-y-2 pl-5">
          <li>We verify the order details and prep your project brief.</li>
          <li>You&apos;ll receive a confirmation email with timelines.</li>
          <li>We start work after your kickoff details are confirmed.</li>
        </ol>
      </div>
      <p className="mt-6 text-sm text-muted-foreground">
        If you need to update anything, reply to the confirmation email or log
        in to your client portal.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/"
          prefetch={false}
          className="inline-flex items-center justify-center rounded-full border border-foreground px-5 py-2 text-sm font-medium text-foreground transition hover:bg-foreground hover:text-background"
        >
          Back to Home
        </Link>
        <Link
          href="/client-login"
          prefetch={false}
          className="inline-flex items-center justify-center rounded-full border border-foreground px-5 py-2 text-sm font-medium text-foreground transition hover:bg-foreground hover:text-background"
        >
          Client Login
        </Link>
      </div>
    </section>
  );
}
