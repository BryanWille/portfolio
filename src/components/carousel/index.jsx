"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData } from "@/data/projects";
import ProjectModal from "../ProjectModal";
import CarouselHeader from "./CarouselHeader";
import CarouselPills from "./CarouselPills";
import ProjectCardInfo from "./ProjectCardInfo";
import ProjectPreviewDispatcher from "./previews/ProjectPreviewDispatcher";
import {
  NoobieSectionWatermark,
  NoobieCardWatermark,
} from "./watermarks/NoobieWatermark";
import {
  BookieSectionWatermark,
  BookieCardWatermark,
} from "./watermarks/BookieWatermark";
import {
  NotecoreSectionWatermark,
  NotecoreCardWatermark,
} from "./watermarks/NotecoreWatermark";
import {
  PrespSectionWatermark,
  PrespCardWatermark,
} from "./watermarks/PrespWatermark";
import {
  AwsSectionWatermark,
  AwsCardWatermark,
} from "./watermarks/AwsWatermark";
import {
  getSectionStyle,
  getRadialGlow,
  getCardContainerStyle,
} from "./carouselThemes";

export default function ProjectsCarousel({ id = "projetos" }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const activeProject = projectsData[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projectsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);
  };

  const openDetails = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  // Transição automática a cada 10 segundos com pausa no hover e modal aberto
  useEffect(() => {
    if (isPaused || modalOpen) return;
    const timer = setInterval(() => {
      handleNext();
    }, 10000);
    return () => clearInterval(timer);
  }, [currentIndex, isPaused, modalOpen]);

  return (
    <section
      id={id}
      className={`relative py-16 sm:py-24 border-b transition-colors duration-700 ease-in-out overflow-hidden ${getSectionStyle(
        activeProject.id
      )}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Glow radial dinâmico sutil no fundo */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 transition-opacity duration-700 ease-in-out ${getRadialGlow(
          activeProject.id
        )}`}
      />

      {/* Marcas d'água animadas ao fundo da seção */}
      {activeProject.id === "noobie" && <NoobieSectionWatermark />}
      {activeProject.id === "bookie" && <BookieSectionWatermark />}
      {activeProject.id === "notecore" && <NotecoreSectionWatermark />}
      {activeProject.id === "presp" && <PrespSectionWatermark />}
      {activeProject.id === "aws-s3" && <AwsSectionWatermark />}

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <CarouselHeader
          projectId={activeProject.id}
          currentIndex={currentIndex}
          total={projectsData.length}
          onPrev={handlePrev}
          onNext={handleNext}
        />

        {/* Card do Carrossel com Altura Padronizada e Estável */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className={`rounded-3xl border transition-all p-7 sm:p-10 shadow-xl relative overflow-hidden min-h-[580px] sm:min-h-[540px] lg:min-h-[490px] flex flex-col justify-center ${getCardContainerStyle(
              activeProject.id
            )}`}
          >
            {/* Marcas d'água e elementos animados temáticos internos do card */}
            {activeProject.id === "noobie" && (
              <NoobieCardWatermark
                onOpenDetails={() => openDetails(activeProject)}
              />
            )}
            {activeProject.id === "bookie" && (
              <BookieCardWatermark
                onOpenDetails={() => openDetails(activeProject)}
              />
            )}
            {activeProject.id === "notecore" && (
              <NotecoreCardWatermark
                onOpenDetails={() => openDetails(activeProject)}
              />
            )}
            {activeProject.id === "presp" && (
              <PrespCardWatermark
                onOpenDetails={() => openDetails(activeProject)}
              />
            )}
            {activeProject.id === "aws-s3" && (
              <AwsCardWatermark
                onOpenDetails={() => openDetails(activeProject)}
              />
            )}

            <div className="relative z-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
              <ProjectCardInfo
                project={activeProject}
                onOpenDetails={openDetails}
              />
              <div className="lg:col-span-5">
                <ProjectPreviewDispatcher
                  project={activeProject}
                  onOpenDetails={openDetails}
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <CarouselPills
          projects={projectsData}
          currentIndex={currentIndex}
          onSelect={setCurrentIndex}
        />
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
}
