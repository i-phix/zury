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
import ChatWidget     from "../../components/ChatWidget/ChatWidget";
import BlogPostsSection from "../../components/BlogPostsSection/BlogPostsSection";
export default function Home() {
  return (
    <div className="home">
      <NavBar />
      <HeroSection />
      <PricingSection />
      <TestimonialSection />
      <CTASection />
      <BlogPostsSection/>
      <FeaturesSection />
      <PortalsSection />
      <Footer />
      <ChatWidget />
    </div>
  );
}
