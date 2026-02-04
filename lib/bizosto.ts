type BizostoLeadPayload = {
  name: string;
  email: string;
  phone: string;
  business_name: string;
  source_page: string;
  tenantSlug: string;
};

type BizostoOrderIntentPayload = {
  package_id: string;
  service: string;
  tenantSlug: string;
  timestamp: string;
};

const tenantSlug = process.env.NEXT_PUBLIC_TENANT_SLUG;
const leadEndpoint = process.env.NEXT_PUBLIC_BIZOSTO_LEAD_ENDPOINT;
const orderIntentEndpoint = process.env.NEXT_PUBLIC_BIZOSTO_ORDER_ENDPOINT;

const sendBizostoPayload = async (
  endpoint: string | undefined,
  payload: BizostoLeadPayload | BizostoOrderIntentPayload
) => {
  if (!endpoint) {
    return;
  }

  const body = JSON.stringify(payload);

  if (typeof navigator !== "undefined" && "sendBeacon" in navigator) {
    try {
      const blob = new Blob([body], { type: "application/json" });
      const queued = navigator.sendBeacon(endpoint, blob);
      if (queued) {
        return;
      }
    } catch {
      // Fallback to fetch below.
    }
  }

  try {
    await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
      keepalive: true,
    });
  } catch {
    // Fail-safe: ignore ingest errors to avoid blocking UX.
  }
};

export const sendBizostoLead = async (
  payload: Omit<BizostoLeadPayload, "tenantSlug">
) => {
  if (!tenantSlug) {
    return;
  }

  await sendBizostoPayload(leadEndpoint, { ...payload, tenantSlug });
};

export const sendBizostoOrderIntent = async (
  payload: Omit<BizostoOrderIntentPayload, "tenantSlug">
) => {
  if (!tenantSlug) {
    return;
  }

  await sendBizostoPayload(orderIntentEndpoint, { ...payload, tenantSlug });
};
