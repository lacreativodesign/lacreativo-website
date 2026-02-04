"use client";

import { useCallback } from "react";
import type { ReactNode } from "react";

import Button from "@/components/Button";
import { sendBizostoOrderIntent } from "@/lib/bizosto";

type OrderNowButtonProps = {
  href: string;
  packageId?: string;
  service?: string;
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "ghost";
};

const parsePackageFromHref = (href: string) => {
  const match = href.match(/\/packages\/([^/]+)\/([^/?#]+)/);
  if (!match) {
    return null;
  }
  return { service: match[1], packageId: match[2] };
};

export default function OrderNowButton({
  href,
  packageId,
  service,
  children,
  className,
  size = "md",
  variant = "primary",
}: OrderNowButtonProps) {
  const handleClick = useCallback(() => {
    const parsed = parsePackageFromHref(href);
    const payload = {
      package_id: packageId ?? parsed?.packageId ?? "unknown",
      service: service ?? parsed?.service ?? "unknown",
      timestamp: new Date().toISOString(),
    };

    void sendBizostoOrderIntent(payload);
  }, [href, packageId, service]);

  return (
    <Button
      href={href}
      onClick={handleClick}
      className={className}
      size={size}
      variant={variant}
    >
      {children}
    </Button>
  );
}
