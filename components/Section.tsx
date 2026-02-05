import type { ReactNode } from "react";

const tones = {
  light: "bg-background text-foreground",
  dark: "bg-dark text-dark-foreground section-wash-dark",
  muted: "bg-muted text-foreground section-wash",
  accent: "bg-accent text-accent-foreground",
};

const toneText = {
  light: "text-muted-foreground",
  muted: "text-muted-foreground",
  dark: "text-dark-foreground/70",
  accent: "text-accent-foreground/80",
};

const paddings = {
  sm: "py-16",
  md: "py-24",
  lg: "py-28",
};

type SectionProps = {
  id?: string;
  tone?: keyof typeof tones;
  padding?: keyof typeof paddings;
  eyebrow?: string;
  title?: string;
  description?: string;
  align?: "left" | "center";
  animate?: boolean;
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
  align = "center",
  animate = true,
  background,
  children,
}: SectionProps) {
  const alignment = align === "center" ? "text-center" : "text-left";
  const subText = toneText[tone];

  return (
    <section
      id={id}
      className={`${tones[tone]} ${paddings[padding]} section-shell relative overflow-hidden ${animate ? "section-fade" : "no-reveal"}`}
    >
      {background}
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-14 px-6">
        {(eyebrow || title || description) && (
          <header className={`section-head flex flex-col gap-4 ${alignment} ${align === "center" ? "mx-auto" : ""}`}>
            {eyebrow && (
              <span className={`reveal text-xs font-semibold uppercase tracking-[0.35em] ${subText}`}>
                {eyebrow}
              </span>
            )}
            {title && (
              <h2 className="text-reveal heading-balanced text-3xl font-semibold leading-tight sm:text-4xl lg:text-[2.75rem]">
                {title}
              </h2>
            )}
            {description && (
              <p className={`reveal text-base leading-relaxed sm:text-lg ${subText}`}>
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
