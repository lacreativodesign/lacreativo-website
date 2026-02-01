import type { ReactNode } from "react";

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  rating?: number;
  highlight?: ReactNode;
};

const stars = (count: number) =>
  Array.from({ length: count }).map((_, index) => (
    <span key={index} aria-hidden="true">
      ★
    </span>
  ));

export default function TestimonialSlider({
  items,
}: {
  items: Testimonial[];
}) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>Real words from real owners</span>
        <span className="hidden sm:block">Swipe to explore →</span>
      </div>
      <div className="flex gap-6 overflow-x-auto pb-4">
        {items.map((item) => (
          <article
            key={item.name}
            className="min-w-[260px] flex-1 rounded-3xl border border-border bg-card p-6 shadow-sm"
          >
            <div className="flex items-center gap-1 text-accent">
              {stars(item.rating ?? 5)}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              “{item.quote}”
            </p>
            <div className="mt-6 text-sm font-semibold">{item.name}</div>
            <div className="text-xs text-muted-foreground">{item.role}</div>
            {item.highlight && (
              <div className="mt-4 text-xs font-semibold text-accent">
                {item.highlight}
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
