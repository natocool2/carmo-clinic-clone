import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ClinicSection from "@/components/ClinicSection";
import TrustSection from "@/components/TrustSection";
import HealthStepsSection from "@/components/HealthStepsSection";
import ServicesSection from "@/components/ServicesSection";
import HealthCTASection from "@/components/HealthCTASection";
import MedicalGallery from "@/components/MedicalGallery";
import CTASection from "@/components/CTASection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ClinicSection />
      <TrustSection />
      <HealthStepsSection />
      <ServicesSection />
      <HealthCTASection />
      <CTASection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
