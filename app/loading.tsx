import { SkeletonPage, SkeletonPricingCard, SkeletonText } from "@/components/Skeleton";

export default function Loading() {
  return (
    <div className="bg-background text-foreground">
      <SkeletonPage />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 pb-16">
        <div className="rounded-3xl border border-border/60 bg-card/70 p-6">
          <SkeletonText lines={4} />
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <SkeletonPricingCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
