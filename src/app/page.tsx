import { HeroSection } from "../presentation/modules/HeroSection/HeroSection";
import { AboutStation  } from "../presentation/modules/AboutStations/AboutStations";
import { GlobalStyle } from "../presentation/external/global";
import { WorkshopsSection } from "@/presentation/modules/WorkshopsSection/WorkshopsSection";

export default function Home() {
  return (
    <main>
      <GlobalStyle />
      <AboutStation />
      <WorkshopsSection />
    </main>
  );
}
