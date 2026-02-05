import LeadCaptureForm from "@/components/LeadCaptureForm";
import Section from "@/components/Section";

type LeadCaptureSectionProps = {
  eyebrow?: string;
  title: string;
  description: string;
  ctaLabel?: string;
  bullets?: string[];
};

export default function LeadCaptureSection({
  eyebrow = "Ready to move",
  title,
  description,
  ctaLabel = "Send my request",
  bullets = [
    "24-hour response window",
    "Clear recommendation",
    "No-pressure guidance",
  ],
}: LeadCaptureSectionProps) {
  return (
    <Section
      tone="muted"
      padding="sm"
      eyebrow={eyebrow}
      title={title}
      description={description}
    >
      <div className="grid items-center gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col gap-4 text-sm text-muted-foreground">
          <p>
            Share four details and we’ll send the best next step for your goals,
            timeline, and current stage.
          </p>
          <div className="grid gap-2 text-xs text-muted-foreground sm:grid-cols-2">
            {bullets.map((bullet) => (
              <span key={bullet}>✓ {bullet}</span>
            ))}
          </div>
        </div>
        <LeadCaptureForm
          ctaLabel={ctaLabel}
          formClassName="form-surface grid gap-3 rounded-3xl p-5 text-sm text-muted-foreground"
          inputClassName="input-field"
        />
      </div>
    </Section>
  );
}
