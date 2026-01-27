import React from "react";
import "./styles.css";

import Navbar from "./components/Navbar";
import HeroCarousel from "./components/HeroCarousel";
import AboutSection from "./components/AboutSection";
import PortfolioSection from "./components/PortfolioSection";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import PricingSection from "./components/PricingSection";
import GalleryStrip from "./components/GalleryStrip";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="main-content">
        <HeroCarousel />
        <AboutSection />
        <PortfolioSection />
        <ServicesSection />
        <TestimonialsSection />
        <PricingSection />
        <GalleryStrip />
        <Footer />
      </div>
    </>
  );
}

export default App;
