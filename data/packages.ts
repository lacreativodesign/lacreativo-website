import { serviceCategories, servicesWithCategory } from "./services";

export type PackageDefinition = {
  slug: string;
  name: string;
  startingPrice: string;
  summary: string;
  timeline: string;
  includes: Array<{ title: string; description: string }>;
};

const threeTierNames = ["Starter", "Growth", "Premium"] as const;
const sixTierNames = [
  "Starter",
  "Growth",
  "Momentum",
  "Scale",
  "Premium",
  "Elite",
] as const;

const threeTierTimelines = ["1-2 weeks", "2-4 weeks", "4-6 weeks"];
const sixTierTimelines = [
  "1-2 weeks",
  "2-3 weeks",
  "3-4 weeks",
  "4-6 weeks",
  "6-8 weeks",
  "8-10 weeks",
];

const formatPrice = (value: number) =>
  `$${value.toLocaleString("en-US")}`;

const createPackageSlug = (name: string) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const buildIncludes = (focus: string, tier: string) => [
  {
    title: "Kickoff alignment",
    description: `We start with a focused kickoff to confirm goals, audience, and success metrics for ${focus}. This removes guesswork early. LA CREATIVO provides a clear recap within one business day so your team knows exactly what happens next.`,
  },
  {
    title: "Scope mapping",
    description: `We define the ${tier.toLowerCase()} scope in plain language so you know what is included. This keeps budgets predictable. LA CREATIVO documents the full scope and confirms each milestone before work begins.`,
  },
  {
    title: "Priority outcomes",
    description: `We identify the outcomes that matter most for ${focus}. This keeps the build focused on business impact. LA CREATIVO structures deliverables around those outcomes so every step stays intentional.`,
  },
  {
    title: "Conversion structure",
    description:
      "We design the flow so visitors reach the right next step fast. This prevents drop off and confusion. LA CREATIVO uses proven patterns and clear calls to action to keep momentum.",
  },
  {
    title: "Brand consistency",
    description:
      "We align visuals, tone, and layout with your existing brand. This builds trust with new buyers. LA CREATIVO keeps every touchpoint cohesive so the experience feels intentional.",
  },
  {
    title: "Responsive layout",
    description:
      "Every screen is designed to feel clean on mobile and desktop. This protects conversion across devices. LA CREATIVO checks key breakpoints and refines spacing for clarity.",
  },
  {
    title: "Content guidance",
    description:
      "We provide clear content direction so your message stays sharp. This reduces delays from unclear copy. LA CREATIVO supplies prompts and structure to keep approvals fast.",
  },
  {
    title: "Launch readiness",
    description:
      "We run a final readiness review before delivery. This prevents last minute surprises. LA CREATIVO validates the handoff checklist so you launch with confidence.",
  },
  {
    title: "Quality review",
    description:
      "We run focused QA checks to confirm the experience works as expected. This protects your reputation. LA CREATIVO verifies functionality and polish before sign off.",
  },
  {
    title: "Handoff support",
    description:
      "You receive organized files and clear next steps at delivery. This makes ownership simple. LA CREATIVO provides a quick walkthrough so your team is comfortable taking over.",
  },
];

const buildSummary = (serviceName: string, tier: string, focus: string) =>
  `${tier} package for ${serviceName.toLowerCase()} focused on ${focus}. Expect clear scope, fast communication, and a polished outcome.`;

const buildPackageSet = (
  serviceName: string,
  focus: string,
  basePrice: number,
  count: 3 | 6
) => {
  const names = count === 6 ? sixTierNames : threeTierNames;
  const timelines = count === 6 ? sixTierTimelines : threeTierTimelines;
  const priceStep = count === 6 ? 650 : 400;

  return names.map((tier, index) => {
    const price = basePrice + priceStep * index;
    const name = `${tier} ${serviceName}`;
    return {
      slug: createPackageSlug(tier),
      name,
      startingPrice: formatPrice(price),
      summary: buildSummary(serviceName, tier, focus),
      timeline: timelines[index] ?? timelines[timelines.length - 1],
      includes: buildIncludes(focus, tier),
    } satisfies PackageDefinition;
  });
};

export const packagesByServiceSlug: Record<string, PackageDefinition[]> =
  servicesWithCategory.reduce((acc, service) => {
    acc[service.slug] = buildPackageSet(
      service.name,
      service.focus,
      service.basePrice,
      service.packageCount
    );
    return acc;
  }, {} as Record<string, PackageDefinition[]>);

const serviceBySlug = new Map(
  servicesWithCategory.map((service) => [service.slug, service])
);

export const getPackageLinksForServices = (
  serviceSlugs: string[],
  limit = 2
) =>
  serviceSlugs
    .map((slug) => {
      const service = serviceBySlug.get(slug);
      const [pkg] = packagesByServiceSlug[slug] ?? [];
      if (!service || !pkg) {
        return null;
      }
      return {
        label: pkg.name,
        href: `/packages/${slug}/${pkg.slug}`,
        description: `A proven starting point for ${service.name.toLowerCase()}.`,
      };
    })
    .filter(
      (
        item
      ): item is { label: string; href: string; description: string } =>
        Boolean(item)
    )
    .slice(0, limit);

export const allPackages = Object.entries(packagesByServiceSlug).flatMap(
  ([serviceSlug, packages]) =>
    packages.map((pkg) => ({ serviceSlug, package: pkg }))
);

export const categoriesWithPackages = serviceCategories.map((category) => ({
  ...category,
  services: category.services.map((service) => ({
    ...service,
    packages: packagesByServiceSlug[service.slug] ?? [],
  })),
}));
