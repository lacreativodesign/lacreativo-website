"use client";

import { useEffect } from "react";

type ThankYouEventProps = {
  event:
    | "lead_submitted"
    | "lead_submit_success"
    | "order_completed"
    | "order_success";
  pageType: "contact" | "lead" | "order";
};

export default function ThankYouEvent({ event, pageType }: ThankYouEventProps) {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event,
      page_type: pageType,
    });
  }, [event, pageType]);

  return null;
}
