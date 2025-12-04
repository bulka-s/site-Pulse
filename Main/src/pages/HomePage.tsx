import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Info from "../components/Info";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import Steps from "../components/Steps";
import WhyChoose from "../components/WhyChoose";
import Team from "../components/Team";
import Feedback from "../components/Feedback";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import AuthPage from "./AuthPage";

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
      <TopBar />
      <Header />
      <Hero />
      <Info />
      <AboutUs />
      <Services />
      <Steps />
      <WhyChoose />
      <Team />
      <Feedback />
      <ContactForm />
      <Footer />
    </div>
  );
}
