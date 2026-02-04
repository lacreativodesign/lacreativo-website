"use client";

import { useEffect, useRef } from "react";

type ThankYouEventProps = {
  event:
    | "lead_submitted"
    | "lead_submit_success"
    | "order_completed"
    | "order_success";
  pageType: "contact" | "lead" | "order";
};

export default function ThankYouEvent({ event, pageType }: ThankYouEventProps) {
  const hasPushedRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (hasPushedRef.current) {
      return;
    }

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event,
      page_type: pageType,
    });
    hasPushedRef.current = true;
  }, [event, pageType]);

  return null;
}
