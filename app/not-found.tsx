import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-start justify-center px-6 py-20">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
        404
      </p>
      <h1 className="mt-4 text-3xl font-semibold text-foreground">
        We couldn&apos;t find that page.
      </h1>
      <p className="mt-3 text-base text-muted-foreground">
        Double-check the link or head back to the core pages below.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full border border-foreground px-5 py-2 text-sm font-medium text-foreground transition hover:bg-foreground hover:text-background"
        >
          Back to home
        </Link>
        <Link
          href="/services"
          className="inline-flex items-center justify-center rounded-full border border-border px-5 py-2 text-sm font-medium text-muted-foreground transition hover:border-foreground hover:text-foreground"
        >
          Browse services
        </Link>
      </div>
    </section>
  );
}
