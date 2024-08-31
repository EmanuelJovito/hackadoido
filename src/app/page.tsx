import { HeroSection } from "../presentation/modules/HeroSection/HeroSection";
import { GlobalStyle } from "../presentation/external/global";

export default function Home() {
  return (
    <main>
      <GlobalStyle />
      <HeroSection></HeroSection>
    </main>
  );
}
