import type { Metadata } from "next";
import Link from "next/link";
import ThankYouEvent from "../_components/ThankYouEvent";
import { canonicalUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Thank You — Contact Request Received",
  description: "We have received your contact request.",
  alternates: {
    canonical: canonicalUrl("/thank-you/contact"),
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function ContactThankYouPage() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-start justify-center px-6 py-16">
      <ThankYouEvent event="lead_submitted" pageType="contact" />
      <h1 className="text-3xl font-semibold text-foreground">
        Thanks for reaching out
      </h1>
      <p className="mt-4 text-base text-muted-foreground">
        Your message is on its way. We&apos;ll review it and get back to you soon.
      </p>
      <Link
        href="/"
        prefetch={false}
        className="mt-8 inline-flex items-center justify-center rounded-full border border-foreground px-5 py-2 text-sm font-medium text-foreground transition hover:bg-foreground hover:text-background"
      >
        Back to Home
      </Link>
    </section>
  );
}
