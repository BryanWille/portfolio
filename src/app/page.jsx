import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import AboutBentoSection from "@/components/AboutBentoSection";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-[#111827]">
      <Navbar />
      <main className="flex-1">
        <HeroSection id="inicio" />
        <ExperienceSection id="solucoes" />
        <ProjectsCarousel id="projetos" />
        <AboutBentoSection id="autoridade" />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}
