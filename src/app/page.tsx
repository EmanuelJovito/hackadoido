"use client";
import { HeroSection } from "../presentation/modules/HeroSection/HeroSection";
import { AboutStation } from "../presentation/modules/AboutStations/AboutStations";
import { GlobalStyle } from "../presentation/external/global";
import { FormSection } from "@/presentation/modules/FormSection/FormSection";
import { WorkshopsSection } from "@/presentation/modules/WorkshopsSection/WorkshopsSection";

export default function Home() {
  return (
    <main>
      <GlobalStyle />
      <HeroSection />
      <AboutStation />
      <WorkshopsSection />
      <FormSection />
    </main>
  );
}
