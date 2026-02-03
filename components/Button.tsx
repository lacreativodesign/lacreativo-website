import Link from "next/link";
import type { ReactNode } from "react";

const baseStyles =
  "button-sheen inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const variants = {
  primary:
    "gradient-primary text-accent-foreground shadow-md hover:shadow-xl",
  secondary:
    "border border-border bg-card text-foreground hover:bg-muted/80",
  ghost: "text-foreground hover:bg-muted/70",
};

const sizes = {
  sm: "text-xs px-4 py-2",
  md: "text-sm px-6 py-3",
  lg: "text-base px-8 py-4",
};

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
  type?: "button" | "submit" | "reset";
};

export default function Button({
  href,
  onClick,
  children,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
}: ButtonProps) {
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
