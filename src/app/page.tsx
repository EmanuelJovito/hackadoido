"use client";
import { HeroSection } from "../presentation/modules/HeroSection/HeroSection";
import { AboutStation } from "../presentation/modules/AboutStations/AboutStations";
import { GlobalStyle } from "../presentation/external/global";
import { FormSection } from "@/presentation/modules/FormSection/FormSection";

export default function Home() {
  return (
    <main>
      <GlobalStyle />
      <HeroSection />
      <FormSection />
      <AboutStation />
    </main>
  );
}
