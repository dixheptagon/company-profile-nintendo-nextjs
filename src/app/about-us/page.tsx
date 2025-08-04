import AboutHero from "@/components/aboutUs/about-hero";
import CompanyHistory from "@/components/aboutUs/company-history";
import CSRSection from "@/components/aboutUs/csr-section";
import TeamsPreview from "@/components/aboutUs/teams-preview";
import VisionMission from "@/components/aboutUs/vision-mision";
import React from "react";

export default function page() {
  return (
    <main className="bg-white">
      <AboutHero />
      <VisionMission />
      <CSRSection />
      <CompanyHistory />
      <TeamsPreview />
    </main>
  );
}
