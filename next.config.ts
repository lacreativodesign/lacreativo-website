import type { NextConfig } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
let canonicalHost: string | null = null;

if (siteUrl) {
  try {
    canonicalHost = new URL(siteUrl).host;
  } catch {
    canonicalHost = null;
  }
}

const strippedCanonicalHost = canonicalHost?.replace(/^www\./, "") ?? null;
const prefersWww = canonicalHost?.startsWith("www.") ?? false;
const shouldRedirectHosts =
  canonicalHost &&
  strippedCanonicalHost &&
  !canonicalHost.includes("localhost") &&
  !canonicalHost.endsWith(".vercel.app");

const nextConfig: NextConfig = {
  async redirects() {
    if (!shouldRedirectHosts) {
      return [];
    }

    const sourceHost = prefersWww ? strippedCanonicalHost : `www.${strippedCanonicalHost}`;
    const destinationHost = canonicalHost;

    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: sourceHost }],
        destination: `https://${destinationHost}/:path*`,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
