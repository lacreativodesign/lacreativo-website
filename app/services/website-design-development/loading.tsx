import {
  SkeletonCard,
  SkeletonPricingCard,
  SkeletonText,
} from "@/components/Skeleton";

export default function Loading() {
  return (
    <div className="space-y-12 px-6 py-12">
      <div className="space-y-6">
        <SkeletonText lines={3} />
        <div className="flex gap-3">
          <div className="skeleton h-10 w-32 rounded-full" />
          <div className="skeleton h-10 w-28 rounded-full" />
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {Array.from({ length: 4 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <SkeletonPricingCard key={index} />
        ))}
      </div>
    </div>
  );
}
