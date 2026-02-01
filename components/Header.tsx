"use client";

import { useEffect, useState } from "react";
import Button from "@/components/Button";

const navItems = [
  { label: "Services", href: "/#services" },
  { label: "How It Works", href: "/#process" },
  { label: "Portfolio", href: "/#work" },
  { label: "Pricing", href: "/#pricing" },
];

export default function Header() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const shouldUseDark = stored
      ? stored === "dark"
      : prefersDark;

    document.documentElement.classList.toggle("dark", shouldUseDark);
    setIsDark(shouldUseDark);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-6">
          <span className="text-lg font-semibold tracking-[0.2em]">
            LA CREATIVO
          </span>
          <span className="hidden rounded-full border border-border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground sm:inline-flex">
            Small Biz Studio
          </span>
        </div>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-1 text-muted-foreground transition hover:text-foreground"
            >
              {item.label}
              <span className="text-xs text-muted-foreground">+</span>
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-sm"
            aria-label="Toggle color theme"
          >
            {isDark ? "☾" : "☀"}
          </button>
          <Button href="/get-started">Get Started</Button>
        </div>
      </div>
    </header>
  );
}
