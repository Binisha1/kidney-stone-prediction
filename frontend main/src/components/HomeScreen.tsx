import Faq from "./Faq";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Navigation from "./Navigation";
import StoneDetect from "./StoneDetect";

export function HomeScreen() {
  return (
    <div>
      <Navigation />
      <HeroSection />
      <Faq />
      <StoneDetect />
      <Footer />
    </div>
  );
}
