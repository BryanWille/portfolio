import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutBentoSection from "@/components/AboutBentoSection";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import ExperienceSection from "@/components/ExperienceSection";
import PublicationsSection from "@/components/PublicationsSection";
import SkillsMatrixSection from "@/components/SkillsMatrixSection";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-[#111827]">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutBentoSection />
        <ProjectsCarousel />
        <ExperienceSection />
        <PublicationsSection />
        <SkillsMatrixSection />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}
