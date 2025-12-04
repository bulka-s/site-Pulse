import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import ValuesSection from "../components/ValuesSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import ProcessSection from "../components/ProcessSection";
import StatsSection from "../components/StatsSection";
import AdvantagesSection from "../components/AdvantagesSection";
import PortfolioSection from "../components/PortfolioSection";
import TeamSection from "../components/TeamSection";
import TestimonialsSection from "../components/TestimonialsSection";
import CTASection from "../components/CTASection";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function HomePage() {
  const location = useLocation();

  const scrollToContactForm = () => {
    const element = document.getElementById("contact-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    } else if (location.state?.scrollToContact) {
      setTimeout(() => {
        scrollToContactForm();
      }, 100);
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <Header />
      <Navigation onContactClick={scrollToContactForm} />
      <HeroSection onCTAClick={scrollToContactForm} />
      <ValuesSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <StatsSection />
      <AdvantagesSection />
      <PortfolioSection />
      <TeamSection />
      <TestimonialsSection />
      <CTASection onCTAClick={scrollToContactForm} />
      <ContactForm />
      <Footer />
    </div>
  );
}