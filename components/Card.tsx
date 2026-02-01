import type { ReactNode } from "react";

const variants = {
  default: "bg-card text-card-foreground border border-border",
  dark: "bg-dark text-dark-foreground border border-border",
};

type CardProps = {
  title: string;
  description: string;
  icon?: ReactNode;
  cta?: ReactNode;
  variant?: keyof typeof variants;
};

export default function Card({
  title,
  description,
  icon,
  cta,
  variant = "default",
}: CardProps) {
  return (
    <div
      className={`${variants[variant]} flex h-full flex-col gap-4 rounded-3xl p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg`}
    >
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
