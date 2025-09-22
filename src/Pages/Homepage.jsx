import React from "react";
import HeroSection from "../components/home/HeroSection";
import PitchHireSection from "../components/home/PitchHireSection";
import CoachingSection from "../components/home/CoachingSection";
import FeaturesGrid from "../components/home/FeaturesGrid";
import FacilityMapSection from "../components/home/FacilityMapSection";
import GoogleMapSection from '../components/home/GoogleMapSection.jsx';
import KidsPartiesHero from "../components/home/KidsPartiesHero";
import AboutSection from "../components/home/AboutSection";
import ContactSection from "../components/home/ContactSection";

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