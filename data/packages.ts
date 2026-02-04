import { serviceCategories, servicesWithCategory } from "./services";

export type PackageDefinition = {
  slug: string;
  name: string;
  startingPrice: string;
  summary: string;
  timeline: string;
  includes: string[];
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
  `Strategy kickoff aligned to ${focus}.`,
  `${tier} scope delivery with clear milestones.`,
  "Conversion-focused structure and messaging guidance.",
  "Launch readiness review and handoff summary.",
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
