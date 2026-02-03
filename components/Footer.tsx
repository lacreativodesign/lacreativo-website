import Button from "@/components/Button";

const footerLinks = [
  {
    title: "Company",
    items: ["About", "Careers", "Press", "Contact"],
  },
  {
    title: "Services",
    items: [
      "Website Design",
      "Branding",
      "Social Media",
      "Creative Retainers",
    ],
  },
  {
    title: "Resources",
    items: ["Guides", "Pricing", "FAQs", "Support"],
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
            <Button href="/get-started" variant="primary">
              Book a Free Intro
            </Button>
          </div>
          <form className="form-surface grid gap-3 rounded-2xl p-4 text-xs sm:grid-cols-2 lg:grid-cols-4">
            <input
              type="text"
              placeholder="Your name"
              className="input-field input-field-dark"
            />
            <input
              type="email"
              placeholder="Email address"
              className="input-field input-field-dark"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="input-field input-field-dark"
            />
            <input
              type="text"
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
          <div className="grid gap-8 sm:grid-cols-3">
            {footerLinks.map((group) => (
              <div key={group.title} className="flex flex-col gap-3">
                <h4 className="text-sm font-semibold">{group.title}</h4>
                <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                  {group.items.map((item) => (
                    <li key={item}>
                      <span className="transition hover:text-foreground">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© 2024 LA CREATIVO. All rights reserved.</span>
          <span>Privacy · Terms · Accessibility</span>
        </div>
      </div>
    </footer>
  );
}
