type SkeletonBlockProps = {
  className?: string;
};

export function SkeletonBlock({ className = "" }: SkeletonBlockProps) {
  return <div className={`skeleton rounded-2xl ${className}`} />;
}

export function SkeletonText({ lines = 3 }: { lines?: number }) {
  return (
    <div className="flex flex-col gap-2">
      {Array.from({ length: lines }).map((_, index) => (
        <SkeletonBlock
          key={index}
          className={`h-3 ${index === lines - 1 ? "w-3/4" : "w-full"}`}
        />
      ))}
    </div>
  );
}

export function SkeletonCard() {
  return (
    <div className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-card/70 p-6">
      <SkeletonBlock className="h-32 w-full rounded-2xl" />
      <SkeletonBlock className="h-10 w-12 rounded-2xl" />
      <SkeletonText lines={3} />
      <SkeletonBlock className="h-9 w-28 rounded-full" />
    </div>
  );
}

export function SkeletonPricingCard() {
  return (
    <div className="flex h-full flex-col gap-5 rounded-3xl border border-border/60 bg-card/70 p-6">
      <SkeletonText lines={2} />
      <div className="flex flex-col gap-2">
        <SkeletonBlock className="h-3 w-full" />
        <SkeletonBlock className="h-3 w-5/6" />
        <SkeletonBlock className="h-3 w-4/6" />
      </div>
      <div className="flex gap-3">
        <SkeletonBlock className="h-9 w-24 rounded-full" />
        <SkeletonBlock className="h-9 w-20 rounded-full" />
      </div>
    </div>
  );
}

export function SkeletonPage() {
  return (
    <div className="space-y-12 px-6 py-12">
      <div className="space-y-6">
        <SkeletonBlock className="h-4 w-32 rounded-full" />
        <SkeletonBlock className="h-10 w-3/4" />
        <SkeletonText lines={3} />
        <div className="flex gap-3">
          <SkeletonBlock className="h-10 w-32 rounded-full" />
          <SkeletonBlock className="h-10 w-28 rounded-full" />
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {Array.from({ length: 4 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    </div>
  );
}
