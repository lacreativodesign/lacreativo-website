"use client";

import dynamic from "next/dynamic";

import type { Testimonial } from "@/components/TestimonialSlider";

const PackagesSection = dynamic(
  () => import("@/components/home/PackagesSection"),
  { ssr: false }
);

const TestimonialSlider = dynamic(
  () => import("@/components/TestimonialSlider"),
  { ssr: false }
);

type HomeClientProps =
  | { section: "packages" }
  | { section: "testimonials"; items: Testimonial[] };

export default function HomeClient(props: HomeClientProps) {
  if (props.section === "packages") {
    return <PackagesSection />;
  }

  return <TestimonialSlider items={props.items} />;
}
