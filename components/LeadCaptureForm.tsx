"use client";

import { useCallback } from "react";
import type { FormEvent, ReactNode } from "react";

import Button from "@/components/Button";
import { sendBizostoLead } from "@/lib/bizosto";

type LeadCaptureFormProps = {
  ctaLabel: string;
  formClassName?: string;
  inputClassName?: string;
  buttonClassName?: string;
  buttonSize?: "sm" | "md" | "lg";
  buttonVariant?: "primary" | "secondary" | "ghost";
  namePlaceholder?: string;
  emailPlaceholder?: string;
  phonePlaceholder?: string;
  businessPlaceholder?: string;
  footer?: ReactNode;
};

const getLeadValue = (form: HTMLFormElement, field: string) => {
  const input = form.querySelector<HTMLInputElement>(
    `[data-lead-field="${field}"]`
  );
  return input?.value.trim() ?? "";
};

export default function LeadCaptureForm({
  ctaLabel,
  formClassName,
  inputClassName = "input-field",
  buttonClassName,
  buttonSize = "md",
  buttonVariant = "primary",
  namePlaceholder = "Full name",
  emailPlaceholder = "Email address",
  phonePlaceholder = "Phone number",
  businessPlaceholder = "Business name",
  footer,
}: LeadCaptureFormProps) {
  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      const form = event.currentTarget;
      const payload = {
        name: getLeadValue(form, "name"),
        email: getLeadValue(form, "email"),
        phone: getLeadValue(form, "phone"),
        business_name: getLeadValue(form, "business_name"),
        source_page:
          typeof window !== "undefined" ? window.location.pathname : "",
      };

      void sendBizostoLead(payload);
    },
    []
  );

  return (
    <form
      action="/thank-you/lead"
      method="get"
      className={formClassName}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder={namePlaceholder}
        className={inputClassName}
        data-lead-field="name"
      />
      <input
        type="email"
        placeholder={emailPlaceholder}
        className={inputClassName}
        data-lead-field="email"
      />
      <input
        type="tel"
        placeholder={phonePlaceholder}
        className={inputClassName}
        data-lead-field="phone"
      />
      <input
        type="text"
        placeholder={businessPlaceholder}
        className={inputClassName}
        data-lead-field="business_name"
      />
      <Button
        type="submit"
        size={buttonSize}
        variant={buttonVariant}
        className={buttonClassName}
      >
        {ctaLabel}
      </Button>
      {footer}
    </form>
  );
}
