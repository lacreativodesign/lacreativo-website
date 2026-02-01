import type { ReactNode } from "react";

const tones = {
  light: "bg-background text-foreground",
  dark: "bg-dark text-dark-foreground",
  muted: "bg-muted text-foreground",
  accent: "bg-accent text-accent-foreground",
};

const paddings = {
  sm: "py-16",
  md: "py-20",
  lg: "py-24",
};

type SectionProps = {
  id?: string;
  tone?: keyof typeof tones;
  padding?: keyof typeof paddings;
  eyebrow?: string;
  title?: string;
  description?: string;
  align?: "left" | "center";
  background?: ReactNode;
  children?: ReactNode;
};

export default function Section({
  id,
  tone = "light",
  padding = "md",
  eyebrow,
  title,
  description,
  align = "left",
  background,
  children,
}: SectionProps) {
  const alignment = align === "center" ? "text-center" : "text-left";

  return (
    <section
      id={id}
      className={`${tones[tone]} ${paddings[padding]} relative overflow-hidden`}
    >
      {background}
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
        {(eyebrow || title || description) && (
          <header className={`flex flex-col gap-4 ${alignment}`}>
            {eyebrow && (
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
                {eyebrow}
              </span>
            )}
            {title && (
              <h2 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                {description}
              </p>
            )}
          </header>
        )}
        {children}
      </div>
      <div className="section-divider mx-auto mt-16 max-w-6xl px-6" />
    </section>
  );
}
