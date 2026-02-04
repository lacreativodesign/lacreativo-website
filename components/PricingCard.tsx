import Button from "@/components/Button";
import OrderNowButton from "@/components/OrderNowButton";

type PricingCardProps = {
  name: string;
  description: string;
  features: string[];
  orderPackageId?: string;
  orderService?: string;
};

export default function PricingCard({
  name,
  description,
  features,
  orderPackageId,
  orderService,
}: PricingCardProps) {
  return (
    <div className="card-premium hover-lift flex h-full flex-col gap-5 rounded-3xl border border-border bg-card p-6 shadow-[0_20px_50px_rgba(15,11,20,0.08)] transition hover:border-accent/40 hover:shadow-[0_28px_60px_rgba(15,11,20,0.16)]">
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
      <ul className="flex flex-1 flex-col gap-2 text-sm text-muted-foreground">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-3">
        <Button variant="secondary" size="sm" href="#details">
          View Details
        </Button>
        <OrderNowButton
          size="sm"
          href="#order"
          packageId={orderPackageId ?? "general"}
          service={orderService ?? "pricing"}
        >
          Order Now
        </OrderNowButton>
      </div>
    </div>
  );
}
