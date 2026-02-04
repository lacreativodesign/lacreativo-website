import { SkeletonPage } from "@/components/Skeleton";

export default function Loading() {
  return (
    <div className="bg-background text-foreground">
      <SkeletonPage />
    </div>
  );
}
