import CompanyOverview from "@/components/hero/company-overview";
import HeroSection from "@/components/hero/hero-section";
import TestimonialSection from "@/components/hero/testimonial-section";
import React from "react";

export default function Page() {
  return (
    <main>
      <HeroSection />
      <CompanyOverview />
      <TestimonialSection />
    </main>
  );
}
