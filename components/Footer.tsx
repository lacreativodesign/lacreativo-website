import Link from "next/link";
import Button from "@/components/Button";

const footerLinks = [
  {
    title: "Company",
    items: [
      { label: "About Us", href: "/#about" },
      { label: "How It Works", href: "/#process" },
      { label: "Portfolio", href: "/#work" },
      { label: "Testimonials", href: "/#testimonials" },
      { label: "Contact", href: "/#contact" },
    ],
  },
  {
    title: "Services",
    items: [
      { label: "Branding & Identity", href: "/services/website-design-development" },
      {
        label: "Websites & Development",
        href: "/services/website-design-development",
      },
      { label: "E-Commerce", href: "/services/website-design-development" },
      { label: "Marketing & Growth", href: "/services/website-design-development" },
      { label: "SEO & Organic Growth", href: "/services/website-design-development" },
      { label: "Video & Creative", href: "/services/website-design-development" },
    ],
  },
  {
    title: "Industries",
    items: [
      { label: "Small & Local Businesses", href: "/services/website-design-development#industries" },
      { label: "Startups & Entrepreneurs", href: "/services/website-design-development#industries" },
      { label: "Healthcare & Medical", href: "/services/website-design-development#industries" },
      { label: "Real Estate", href: "/services/website-design-development#industries" },
      { label: "Technology & SaaS", href: "/services/website-design-development#industries" },
      { label: "Explore Industries", href: "/services/website-design-development#industries" },
    ],
  },
  {
    title: "Work With Us",
    items: [
      { label: "Reseller Program", href: "/#contact" },
      { label: "Affiliate Program", href: "/#contact" },
      { label: "Careers (Talent / CV Upload)", href: "/#contact" },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Request Privacy Policy", href: "/#contact" },
      { label: "Request Terms & Conditions", href: "/#contact" },
      { label: "Request Guarantees", href: "/#contact" },
    ],
  },
];

const social = ["Instagram", "LinkedIn", "Behance", "Dribbble"];

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
            <Button href="/#contact" variant="primary">
              Book a Free Intro
            </Button>
          </div>
          <form className="form-surface hero-form grid gap-3 rounded-2xl p-4 text-xs sm:grid-cols-2 lg:grid-cols-4">
            <label className="sr-only" htmlFor="footer-name">
              Full name
            </label>
            <input
              type="text"
              id="footer-name"
              name="name"
              placeholder="Your name"
              className="input-field input-field-dark"
            />
            <label className="sr-only" htmlFor="footer-email">
              Email address
            </label>
            <input
              type="email"
              id="footer-email"
              name="email"
              placeholder="Email address"
              className="input-field input-field-dark"
            />
            <label className="sr-only" htmlFor="footer-phone">
              Phone number
            </label>
            <input
              type="tel"
              id="footer-phone"
              name="phone"
              placeholder="Phone"
              className="input-field input-field-dark"
            />
            <label className="sr-only" htmlFor="footer-business">
              Business name
            </label>
            <input
              type="text"
              id="footer-business"
              name="business"
              placeholder="Business name"
              className="input-field input-field-dark"
            />
            <Button
              type="submit"
              size="sm"
              className="sm:col-span-2 lg:col-span-4"
            >
              Get the roadmap
            </Button>
          </form>
          <p className="text-xs text-dark-foreground/70">
            We’ll follow up within one business day with a clear next step.
          </p>
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
                <span
                  key={item}
                  className="rounded-full border border-border px-3 py-1"
                >
                  {item}
                </span>
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
              href="/#contact"
              className="transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Request Privacy Policy
            </Link>
            <Link
              href="/#contact"
              className="transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Request Terms
            </Link>
            <Link
              href="/#contact"
              className="transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Request Guarantees
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
