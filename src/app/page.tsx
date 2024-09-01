"use client";
import { HeroSection } from "../presentation/modules/HeroSection/HeroSection";
import { GlobalStyle } from "../presentation/external/global";
import { FormSection } from "@/presentation/modules/FormSection/FormSection";

export default function Home() {
  return (
    <main>
      <GlobalStyle />
      <HeroSection />
      <FormSection />
    </main>
  );
}
