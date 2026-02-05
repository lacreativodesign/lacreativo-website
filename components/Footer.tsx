import Link from "next/link";
import Button from "@/components/Button";
import LeadCaptureForm from "@/components/LeadCaptureForm";

const footerLinks = [
  {
    title: "Company",
    items: [
      { label: "About Us", href: "/about-us" },
      { label: "Work With Us", href: "/work-with-us" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    items: [
      { label: "Branding", href: "/services/branding" },
      {
        label: "Website Design & Development",
        href: "/services/website-design-development",
      },
      { label: "E-Commerce", href: "/services/ecommerce" },
      { label: "Marketing", href: "/services/marketing" },
      { label: "SEO", href: "/services/seo" },
      { label: "Video", href: "/services/video" },
    ],
  },
  {
    title: "Industries",
    items: [
      { label: "Startups & SaaS", href: "/industries/startups-saas" },
      { label: "Small Businesses", href: "/industries/small-businesses" },
      { label: "Healthcare & Clinics", href: "/industries/healthcare-clinics" },
      { label: "Real Estate", href: "/industries/real-estate" },
      {
        label: "Finance & Professional Services",
        href: "/industries/finance-professional-services",
      },
      { label: "View All Industries", href: "/industries" },
    ],
  },
  {
    title: "Careers",
    items: [
      { label: "Reseller Program", href: "/reseller-program" },
      { label: "Affiliate Program", href: "/affiliate-program" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms-and-conditions" },
      { label: "Guarantees", href: "/guarantees" },
      { label: "Client Login", href: "/client-login" },
    ],
  },
];

const social = [
  { label: "Facebook", href: "https://facebook.com/lacreativo" },
  { label: "Instagram", href: "https://instagram.com/lacreativo" },
  { label: "LinkedIn", href: "https://linkedin.com/company/lacreativo" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-16">
        <div className="gradient-hero flex flex-col gap-6 rounded-3xl border border-white/10 p-8 text-dark-foreground shadow-lg">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="text-reveal text-2xl font-semibold">
                Ready for a brand that feels like you?
              </h3>
              <p className="reveal mt-2 text-sm text-dark-foreground/80">
                Start with a free creative roadmap and launch with confidence.
              </p>
            </div>
            <Button href="/get-started" variant="primary">
              Book a Free Intro
            </Button>
          </div>
          <LeadCaptureForm
            ctaLabel="Get the roadmap"
            formClassName="form-surface hero-form grid gap-3 rounded-2xl p-4 text-xs sm:grid-cols-2 lg:grid-cols-4"
            inputClassName="input-field input-field-dark"
            buttonClassName="sm:col-span-2 lg:col-span-4"
            buttonSize="sm"
            namePlaceholder="Your name"
            phonePlaceholder="Phone"
          />
          <div className="flex flex-wrap gap-4 text-xs text-dark-foreground/70">
            <span>
              Trusted by{" "}
              <span className="numeric-editorial font-semibold">300+</span> US
              small businesses
            </span>
            <span>Clutch ★★★★★</span>
            <span>Trustpilot ★★★★☆</span>
          </div>
        </div>
        <div className="grid gap-10 md:grid-cols-[1.4fr_2fr]">
          <div className="flex flex-col gap-4">
            <span className="text-lg font-semibold tracking-[0.2em]">
              LA CREATIVO
            </span>
            <p className="text-sm text-muted-foreground">
              Creative and digital services crafted for founders, local shops,
              and teams who need premium work without the big-agency price tag.
            </p>
            <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
              {social.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/70 text-foreground transition hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
                >
                  <span className="text-sm font-semibold">{item.label.slice(0, 1)}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {footerLinks.map((group) => (
              <div key={group.title} className="flex flex-col gap-3">
                <h4 className="text-sm font-semibold">{group.title}</h4>
                <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                  {group.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© 2024 LA CREATIVO. All rights reserved.</span>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/privacy-policy"
              className="transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/guarantees"
              className="transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Guarantees
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
