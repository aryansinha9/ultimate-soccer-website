import React from "react";
import HeroSection from "../components/home/HeroSection.jsx";
import PitchHireSection from "../components/home/PitchHireSection.jsx";
import CoachingSection from "../components/home/CoachingSection.jsx";
import FeaturesGrid from "../components/home/FeaturesGrid.jsx";
import FacilityMapSection from "../components/home/FacilityMapSection.jsx";
import GoogleMapSection from '../components/home/GoogleMapSection.jsx';
import KidsPartiesHero from "../components/home/KidsPartiesHero.jsx";
import AboutSection from "../components/home/AboutSection.jsx";
import ContactSection from "../components/home/ContactSection.jsx";

export default function Homepage() {
  return (
    <div className="bg-gray-900">
      <HeroSection />
      <PitchHireSection />
      <CoachingSection />
      <FeaturesGrid />
      <FacilityMapSection />
      <GoogleMapSection />
      <KidsPartiesHero />
      <AboutSection />
      <ContactSection />
    </div>
  );
}