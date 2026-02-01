import type { ReactNode } from "react";

const variants = {
  default: "bg-card text-card-foreground border border-border",
  dark: "bg-dark text-dark-foreground border border-border",
};

type CardProps = {
  title: string;
  description: string;
  icon?: ReactNode;
  media?: ReactNode;
  cta?: ReactNode;
  variant?: keyof typeof variants;
};

export default function Card({
  title,
  description,
  icon,
  media,
  cta,
  variant = "default",
}: CardProps) {
  return (
    <div
      className={`${variants[variant]} hover-lift flex h-full flex-col gap-4 rounded-3xl p-6 shadow-sm`}
    >
      {media && (
        <div className="overflow-hidden rounded-2xl border border-border/60 bg-muted/60">
          {media}
        </div>
      )}
      {icon && (
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-muted text-xl">
          {icon}
        </div>
      )}
      <div className="flex flex-1 flex-col gap-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
      {cta && <div>{cta}</div>}
    </div>
  );
}
