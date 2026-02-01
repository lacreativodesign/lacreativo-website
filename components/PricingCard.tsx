import Button from "@/components/Button";

type PricingCardProps = {
  name: string;
  description: string;
  features: string[];
};

export default function PricingCard({
  name,
  description,
  features,
}: PricingCardProps) {
  return (
    <div className="flex h-full flex-col gap-5 rounded-3xl border border-border bg-card p-6 shadow-sm">
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
        <Button size="sm" href="#order">
          Order Now
        </Button>
      </div>
    </div>
  );
}
