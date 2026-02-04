import type { Metadata } from "next";
import Link from "next/link";
import ThankYouEvent from "../_components/ThankYouEvent";

export const metadata: Metadata = {
  title: "Thank You — Order Confirmed",
  description: "We have received your order.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function OrderThankYouPage() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-start justify-center px-6 py-16">
      <ThankYouEvent event="order_completed" pageType="order" />
      <h1 className="text-3xl font-semibold text-foreground">
        Order confirmed
      </h1>
      <p className="mt-4 text-base text-muted-foreground">
        Thanks for your order. We&apos;ll send the next steps shortly.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-full border border-foreground px-5 py-2 text-sm font-medium text-foreground transition hover:bg-foreground hover:text-background"
      >
        Back to Home
      </Link>
    </section>
  );
}
