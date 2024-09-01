import { HeroSection } from "../presentation/modules/HeroSection/HeroSection";
import { AboutStation  } from "../presentation/modules/AboutStations/AboutStations";
import { GlobalStyle } from "../presentation/external/global";

export default function Home() {
  return (
    <main>
      <GlobalStyle />
      <AboutStation />
    </main>
  );
}
