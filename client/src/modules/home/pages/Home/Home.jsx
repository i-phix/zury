/* ═══════════════════════════════════════════════════════════════
   Zuri — Home Page
   src/modules/home/pages/Home/Home.jsx
═══════════════════════════════════════════════════════════════ */
import NavBar             from "../../components/NavBar/NavBar";
import HeroSection        from "../../components/HeroSection/HeroSection";
import FeaturesSection    from "../../components/FeaturesSection/FeaturesSection";
import PortalsSection     from "../../components/PortalsSection/PortalsSection";
import TestimonialSection from "../../components/TestimonialSection/TestimonialSection";
import CTASection         from "../../components/CTASection/CTASection";
import Footer             from "../../components/Footer/Footer";
import PricingSection     from "../../components/PricingSection/PricingSection";

export default function Home() {
  return (
    <div className="home">
      <NavBar />
      <HeroSection />
      <PricingSection />
      <FeaturesSection />
      <PortalsSection />
      <TestimonialSection />
      <CTASection />
      <Footer />
    </div>
  );
}
