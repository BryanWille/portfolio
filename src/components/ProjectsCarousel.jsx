"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Globe,
  ArrowUpRight,
  Maximize2,
  Eye,
  BookOpen,
  Play,
  Github,
  Layers,
} from "lucide-react";
import { projectsData } from "@/data/projects";
import ProjectModal from "./ProjectModal";

export default function ProjectsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const activeProject = projectsData[currentIndex];
  const isDark = activeProject?.theme?.isDark;

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

  // 2. Transição automática a cada 10 segundos com pausa no hover e modal aberto
  useEffect(() => {
    if (isPaused || modalOpen) return;

    const timer = setInterval(() => {
      handleNext();
    }, 10000);

    return () => clearInterval(timer);
  }, [currentIndex, isPaused, modalOpen]);

  // Citações rotativas oficiais do Bookie
  const [bookieQuoteIndex, setBookieQuoteIndex] = useState(0);

  const bookieQuotes = [
    {
      quote: "Um livro é a prova de que os humanos são capazes de fazer magia.",
      author: "Carl Sagan",
      work: "Cosmos",
    },
    {
      quote: "Um leitor vive mil vidas antes de morrer. O homem que nunca lê vive apenas uma.",
      author: "George R.R. Martin",
      work: "A Dança dos Dragões",
    },
    {
      quote: "E onde estava eu, quando te procurava? Tu estavas diante de mim, mas eu me afastara até de mim mesmo...",
      author: "Santo Agostinho",
      work: "Confissões",
    },
  ];

  // Alterna citação rotativa do Bookie a cada 4.5 segundos
  useEffect(() => {
    if (activeProject.id !== "bookie") return;
    const quoteTimer = setInterval(() => {
      setBookieQuoteIndex((prev) => (prev + 1) % bookieQuotes.length);
    }, 4500);
    return () => clearInterval(quoteTimer);
  }, [activeProject.id, bookieQuotes.length]);

  const theme = activeProject.theme || {};

  // 1. Fundo dinâmico da seção de acordo com o projeto ativo
  const getSectionBgStyle = () => {
    if (activeProject.id === "noobie") {
      return "bg-[#F0F2F6] text-[#14171F] border-[#E2E8F0]";
    }
    if (activeProject.id === "bookie") {
      return "bg-[#F6F1E9] text-[#302720] border-[#DED4C7]";
    }
    if (activeProject.id === "br381") {
      return "bg-[#F4F6F9] text-[#0F172A] border-[#DDE3EA]";
    }
    if (activeProject.id === "notecore") {
      return "bg-[#F4F8FD] text-[#0F172A] border-[#DCE7F5]";
    }
    if (activeProject.id === "medusa-bot") {
      return "bg-[#F2F9F9] text-[#0F172A] border-[#D1EAEB]";
    }
    if (activeProject.id === "presp") {
      return "bg-[#F4F7FB] text-[#0F172A] border-[#D8E2ED]";
    }
    if (activeProject.id === "aws-s3") {
      return "bg-[#FFF8F2] text-[#0F172A] border-[#F2DEC8]";
    }
    if (isDark) {
      return "bg-[#090A0F] text-[#F8FAFC] border-[#181A22]";
    }
    return "bg-[#FAFAFA] text-neutral-900 border-neutral-100";
  };

  return (
    <section
      id="meus-projetos"
      className={`relative py-16 sm:py-24 border-b transition-colors duration-700 ease-in-out overflow-hidden ${getSectionBgStyle()}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Glow radial dinâmico sutil no fundo */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 transition-opacity duration-700 ease-in-out ${
          activeProject.id === "noobie"
            ? "opacity-100 bg-[radial-gradient(ellipse_80%_60%_at_50%_20%,rgba(255,91,0,0.06),transparent_70%)]"
            : activeProject.id === "bookie"
            ? "opacity-100 bg-[radial-gradient(ellipse_80%_60%_at_50%_20%,rgba(156,69,43,0.08),transparent_70%)]"
            : activeProject.id === "br381"
            ? "opacity-100 bg-[radial-gradient(ellipse_80%_60%_at_50%_20%,rgba(0,13,75,0.09),transparent_70%)]"
            : activeProject.id === "notecore"
            ? "opacity-100 bg-[radial-gradient(ellipse_80%_60%_at_50%_20%,rgba(30,136,229,0.08),transparent_70%)]"
            : activeProject.id === "medusa-bot"
            ? "opacity-100 bg-[radial-gradient(ellipse_80%_60%_at_50%_20%,rgba(0,151,157,0.08),transparent_70%)]"
            : activeProject.id === "presp"
            ? "opacity-100 bg-[radial-gradient(ellipse_80%_60%_at_50%_20%,rgba(0,115,150,0.08),transparent_70%)]"
            : activeProject.id === "aws-s3"
            ? "opacity-100 bg-[radial-gradient(ellipse_80%_60%_at_50%_20%,rgba(255,153,0,0.08),transparent_70%)]"
            : isDark
            ? "opacity-100 bg-[radial-gradient(ellipse_80%_60%_at_50%_20%,rgba(255,91,0,0.08),transparent_70%)]"
            : "opacity-0"
        }`}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span
              className={`text-xs font-bold uppercase tracking-wider transition-colors duration-500 ${
                activeProject.id === "noobie"
                  ? "text-[#FF5B00]"
                  : activeProject.id === "bookie"
                  ? "text-[#9C452B]"
                  : activeProject.id === "br381"
                  ? "text-[#000D4B]"
                  : activeProject.id === "notecore"
                  ? "text-[#1E88E5]"
                  : activeProject.id === "medusa-bot"
                  ? "text-[#00979D]"
                  : activeProject.id === "presp"
                  ? "text-[#007396]"
                  : activeProject.id === "aws-s3"
                  ? "text-[#E67E00]"
                  : isDark
                  ? "text-[#FF5B00]"
                  : "text-emerald-700"
              }`}
            >
              Projetos &amp; Criações
            </span>
            <h2
              className={`mt-1 text-2xl sm:text-3xl font-extrabold transition-colors duration-500 ${
                activeProject.id === "noobie"
                  ? "text-[#14171F]"
                  : activeProject.id === "bookie"
                  ? "text-[#302720]"
                  : activeProject.id === "br381"
                  ? "text-[#000D4B]"
                  : activeProject.id === "notecore"
                  ? "text-[#0F172A]"
                  : activeProject.id === "medusa-bot"
                  ? "text-[#0F172A]"
                  : activeProject.id === "presp"
                  ? "text-[#0F172A]"
                  : activeProject.id === "aws-s3"
                  ? "text-[#0F172A]"
                  : isDark
                  ? "text-[#F8FAFC]"
                  : "text-neutral-900"
              }`}
            >
              Produtos que eu construí e coloquei no ar
            </h2>
          </div>

          {/* Controles de Navegação */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              aria-label="Projeto anterior"
              className={`flex h-11 w-11 items-center justify-center rounded-full border shadow-sm transition-all active:scale-95 ${
                activeProject.id === "bookie"
                  ? "border-[#DED4C7] bg-[#FFFCF7] text-[#302720] hover:bg-[#F6F1E9] hover:border-[#9C452B]"
                  : activeProject.id === "br381"
                  ? "border-[#DDE3EA] bg-white text-[#000D4B] hover:bg-[#F8FAFC] hover:border-[#000D4B]"
                  : activeProject.id === "notecore"
                  ? "border-[#DCE7F5] bg-white text-[#1E88E5] hover:bg-[#F4F8FD] hover:border-[#1E88E5]"
                  : activeProject.id === "medusa-bot"
                  ? "border-[#D1EAEB] bg-white text-[#00979D] hover:bg-[#F2F9F9] hover:border-[#00979D]"
                  : activeProject.id === "presp"
                  ? "border-[#D8E2ED] bg-white text-[#007396] hover:bg-[#F4F7FB] hover:border-[#007396]"
                  : activeProject.id === "aws-s3"
                  ? "border-[#F2DEC8] bg-white text-[#E67E00] hover:bg-[#FFF8F2] hover:border-[#FF9900]"
                  : isDark
                  ? "border-[#2E323E] bg-[#161820] text-[#F8FAFC] hover:border-[#FF5B00] hover:text-[#FF5B00]"
                  : "border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300"
              }`}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <span
              className={`text-xs font-semibold px-2 font-mono transition-colors duration-500 ${
                activeProject.id === "bookie"
                  ? "text-[#74675C]"
                  : activeProject.id === "br381"
                  ? "text-[#000D4B]"
                  : activeProject.id === "notecore"
                  ? "text-[#1E88E5]"
                  : activeProject.id === "medusa-bot"
                  ? "text-[#00979D]"
                  : activeProject.id === "presp"
                  ? "text-[#007396]"
                  : activeProject.id === "aws-s3"
                  ? "text-[#E67E00]"
                  : isDark
                  ? "text-[#94A3B8]"
                  : "text-neutral-500"
              }`}
            >
              {currentIndex + 1} de {projectsData.length}
            </span>
            <button
              onClick={handleNext}
              aria-label="Próximo projeto"
              className={`flex h-11 w-11 items-center justify-center rounded-full border shadow-sm transition-all active:scale-95 ${
                activeProject.id === "bookie"
                  ? "border-[#DED4C7] bg-[#FFFCF7] text-[#302720] hover:bg-[#F6F1E9] hover:border-[#9C452B]"
                  : activeProject.id === "br381"
                  ? "border-[#DDE3EA] bg-white text-[#000D4B] hover:bg-[#F8FAFC] hover:border-[#000D4B]"
                  : activeProject.id === "notecore"
                  ? "border-[#DCE7F5] bg-white text-[#1E88E5] hover:bg-[#F4F8FD] hover:border-[#1E88E5]"
                  : activeProject.id === "medusa-bot"
                  ? "border-[#D1EAEB] bg-white text-[#00979D] hover:bg-[#F2F9F9] hover:border-[#00979D]"
                  : activeProject.id === "presp"
                  ? "border-[#D8E2ED] bg-white text-[#007396] hover:bg-[#F4F7FB] hover:border-[#007396]"
                  : activeProject.id === "aws-s3"
                  ? "border-[#F2DEC8] bg-white text-[#E67E00] hover:bg-[#FFF8F2] hover:border-[#FF9900]"
                  : isDark
                  ? "border-[#2E323E] bg-[#161820] text-[#F8FAFC] hover:border-[#FF5B00] hover:text-[#FF5B00]"
                  : "border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300"
              }`}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Card do Carrossel (Ultra-Enxuto: Máxima Simplicidade) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className={`rounded-3xl border transition-all p-7 sm:p-10 shadow-xl ${
              activeProject.id === "noobie"
                ? "bg-white border-[#E2E8F0] text-[#14171F] hover:border-[#FF5B00]/40"
                : activeProject.id === "bookie"
                ? "bg-[#F6F1E9] border-[#DED4C7] text-[#302720] hover:border-[#9C452B]/40"
                : activeProject.id === "br381"
                ? "bg-[#F4F6F9] border-[#DDE3EA] text-[#0F172A] hover:border-[#000D4B]/50"
                : activeProject.id === "notecore"
                ? "bg-[#F4F8FD] border-[#DCE7F5] text-[#0F172A] hover:border-[#1E88E5]/50"
                : activeProject.id === "medusa-bot"
                ? "bg-[#F2F9F9] border-[#D1EAEB] text-[#0F172A] hover:border-[#00979D]/50"
                : activeProject.id === "presp"
                ? "bg-[#F4F7FB] border-[#D8E2ED] text-[#0F172A] hover:border-[#007396]/50"
                : activeProject.id === "aws-s3"
                ? "bg-[#FFF8F2] border-[#F2DEC8] text-[#0F172A] hover:border-[#FF9900]/50"
                : isDark
                ? "bg-[#090A0F] border-[#181A22] text-[#F8FAFC] hover:border-[#FF5B00]/40"
                : `${theme.border || "border-neutral-200"} ${theme.bgSoft || "bg-white"} text-neutral-900`
            }`}
          >
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
              {/* Esquerda: Informações Ultra-Enxutas (Sem excessos) */}
              <div className="lg:col-span-7 space-y-4">
                {/* Badges do Projeto */}
                {activeProject.id === "br381" ? (
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-block rounded-full px-3 py-1 text-xs font-bold bg-[#000D4B]/10 text-[#000D4B] border border-[#000D4B]/20">
                      Engenharia de Dados &amp; IA • PUC Minas
                    </span>
                    <span className="inline-block rounded-full px-3 py-1 text-xs font-bold bg-[#FFC900]/25 text-[#735700] border border-[#FFC900]/60">
                      Status: Funcional 🚨
                    </span>
                  </div>
                ) : activeProject.id === "notecore" ? (
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-block rounded-full px-3 py-1 text-xs font-bold bg-[#1E88E5]/10 text-[#1E88E5] border border-[#1E88E5]/20">
                      Mobile App • Flutter &amp; Firebase
                    </span>
                    <span className="inline-block rounded-full px-3 py-1 text-xs font-bold bg-[#F1F5F9] text-[#475569] border border-[#DCE7F5]">
                      Graduação Dom Helder Câmara
                    </span>
                  </div>
                ) : activeProject.id === "medusa-bot" ? (
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-block rounded-full px-3 py-1 text-xs font-bold bg-[#00979D]/10 text-[#00979D] border border-[#00979D]/20">
                      IoT &amp; Visão Computacional • C++ &amp; ESP32
                    </span>
                    <span className="inline-block rounded-full px-3 py-1 text-xs font-bold bg-[#F1F5F9] text-[#475569] border border-[#D1EAEB]">
                      Hardware &amp; IA
                    </span>
                  </div>
                ) : activeProject.id === "presp" ? (
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-block rounded-full px-3 py-1 text-xs font-bold bg-[#007396]/10 text-[#007396] border border-[#007396]/20">
                      Software Desktop • Java &amp; POO
                    </span>
                    <span className="inline-block rounded-full px-3 py-1 text-xs font-bold bg-[#F1F5F9] text-[#475569] border border-[#D8E2ED]">
                      Estatística Descritiva
                    </span>
                  </div>
                ) : activeProject.id === "aws-s3" ? (
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-block rounded-full px-3 py-1 text-xs font-bold bg-[#FF9900]/12 text-[#D97706] border border-[#FF9900]/25">
                      Cloud &amp; Serverless • AWS S3 &amp; Lambda
                    </span>
                    <span className="inline-block rounded-full px-3 py-1 text-xs font-bold bg-[#F1F5F9] text-[#232F3E] border border-[#E2E8F0]">
                      Case Corporativo • Loja do Sapo
                    </span>
                  </div>
                ) : (
                  <div>
                    <span
                      className={`inline-block rounded-full px-3 py-1 text-xs font-bold ${
                        activeProject.id === "noobie"
                          ? "bg-[rgba(255,91,0,0.10)] text-[#FF5B00] border border-[#FF5B00]/20"
                          : activeProject.id === "bookie"
                          ? "bg-[#F3E2D6] text-[#9C452B] border border-[#9C452B]/20"
                          : isDark
                          ? "bg-[#FF5B00]/12 text-[#FF5B00] border border-[#FF5B00]/20"
                          : "bg-emerald-100 text-emerald-800"
                      }`}
                    >
                      {activeProject.simpleBadge || "Gestão Financeira & Patrimônio"}
                    </span>
                  </div>
                )}

                {/* Título */}
                <h3
                  className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
                    activeProject.id === "noobie"
                      ? "text-[#14171F]"
                      : activeProject.id === "bookie"
                      ? "text-[#302720]"
                      : activeProject.id === "br381"
                      ? "text-[#0F172A]"
                      : activeProject.id === "notecore"
                      ? "text-[#0F172A]"
                      : activeProject.id === "medusa-bot"
                      ? "text-[#0F172A]"
                      : activeProject.id === "presp"
                      ? "text-[#0F172A]"
                      : activeProject.id === "aws-s3"
                      ? "text-[#0F172A]"
                      : isDark
                      ? "text-[#F8FAFC]"
                      : "text-neutral-900"
                  }`}
                >
                  {activeProject.name}
                </h3>

                {/* Descrição: Uma única frase direta */}
                <p
                  className={`text-base sm:text-lg leading-relaxed ${
                    activeProject.id === "noobie"
                      ? "text-[#64748B]"
                      : activeProject.id === "bookie"
                      ? "text-[#74675C]"
                      : activeProject.id === "br381"
                      ? "text-[#475569]"
                      : activeProject.id === "notecore"
                      ? "text-[#475569]"
                      : activeProject.id === "medusa-bot"
                      ? "text-[#475569]"
                      : activeProject.id === "presp"
                      ? "text-[#475569]"
                      : activeProject.id === "aws-s3"
                      ? "text-[#475569]"
                      : isDark
                      ? "text-[#94A3B8]"
                      : "text-neutral-600"
                  }`}
                >
                  {activeProject.shortPitch || activeProject.summary}
                </p>

                {/* Apenas os 2 Botões Claros */}
                <div className="flex flex-wrap items-center gap-3 pt-3">
                  <button
                    onClick={() => openDetails(activeProject)}
                    className={`inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold shadow transition-all ${
                      activeProject.id === "noobie"
                        ? "bg-[#F6F8FA] border border-[#E2E8F0] text-[#14171F] hover:bg-[#F1F5F9] hover:border-[#CBD5E1]"
                        : activeProject.id === "bookie"
                        ? "bg-[#FFFCF7] border border-[#DED4C7] text-[#302720] hover:bg-white hover:border-[#9C452B]"
                        : activeProject.id === "br381"
                        ? "bg-white border border-[#DDE3EA] text-[#0F172A] hover:bg-[#F8FAFC] hover:border-[#000D4B]"
                        : activeProject.id === "notecore"
                        ? "bg-white border border-[#DCE7F5] text-[#0F172A] hover:bg-[#F4F8FD] hover:border-[#1E88E5]"
                        : activeProject.id === "medusa-bot"
                        ? "bg-white border border-[#D1EAEB] text-[#0F172A] hover:bg-[#F2F9F9] hover:border-[#00979D]"
                        : activeProject.id === "presp"
                        ? "bg-white border border-[#D8E2ED] text-[#0F172A] hover:bg-[#F4F7FB] hover:border-[#007396]"
                        : activeProject.id === "aws-s3"
                        ? "bg-white border border-[#E2E8F0] text-[#0F172A] hover:bg-[#FFF8F2] hover:border-[#FF9900]"
                        : isDark
                        ? "bg-[#1A1C24] border border-[#2E323E] text-[#F8FAFC] hover:bg-[#252834]"
                        : "bg-neutral-900 text-white hover:bg-neutral-800"
                    }`}
                  >
                    <Eye className={`h-4 w-4 ${
                      activeProject.id === "noobie"
                        ? "text-[#FF5B00]"
                        : activeProject.id === "bookie"
                        ? "text-[#9C452B]"
                        : activeProject.id === "br381"
                        ? "text-[#000D4B]"
                        : activeProject.id === "notecore"
                        ? "text-[#1E88E5]"
                        : activeProject.id === "medusa-bot"
                        ? "text-[#00979D]"
                        : activeProject.id === "presp"
                        ? "text-[#007396]"
                        : activeProject.id === "aws-s3"
                        ? "text-[#FF9900]"
                        : isDark
                        ? "text-[#FF5B00]"
                        : "text-neutral-300"
                    }`} />
                    <span>Ver Detalhes &amp; Telas</span>
                  </button>

                  {activeProject.id === "br381" ? (
                    <a
                      href="https://www.youtube.com/watch?v=FdgF0kawJqY"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold text-white shadow transition-all bg-[#000D4B] hover:bg-[#000936] shadow-[#000D4B]/30"
                    >
                      <Play className="h-4 w-4 fill-[#FFC900] text-[#FFC900]" />
                      <span>Assistir Pitch no YouTube ↗</span>
                    </a>
                  ) : activeProject.id === "notecore" ? (
                    <a
                      href="https://github.com/BryanWille/NOTECORE"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold text-white shadow transition-all bg-[#1E88E5] hover:bg-[#1565C0] shadow-[#1E88E5]/25"
                    >
                      <Github className="h-4 w-4" />
                      <span>Ver no GitHub ↗</span>
                    </a>
                  ) : activeProject.id === "medusa-bot" ? (
                    <a
                      href="https://github.com/BryanWille/medusa-bot"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold text-white shadow transition-all bg-[#00979D] hover:bg-[#006F74] shadow-[#00979D]/25"
                    >
                      <Github className="h-4 w-4" />
                      <span>Ver no GitHub ↗</span>
                    </a>
                  ) : activeProject.id === "presp" ? (
                    <button
                      onClick={() => openDetails(activeProject)}
                      className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold text-white shadow transition-all bg-[#007396] hover:bg-[#005A75] shadow-[#007396]/25"
                    >
                      <Layers className="h-4 w-4" />
                      <span>Código Fonte &amp; Arquitetura</span>
                    </button>
                  ) : activeProject.id === "aws-s3" ? (
                    <a
                      href="https://lnkd.in/p/dQy-vb3i"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold text-white shadow transition-all bg-[#FF9900] hover:bg-[#E67E00] shadow-[#FF9900]/25"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                      <span>Ver Publicação no LinkedIn ↗</span>
                    </a>
                  ) : activeProject.isLive ? (
                    <a
                      href={activeProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold text-white shadow transition-all ${
                        activeProject.id === "noobie"
                          ? "bg-[#FF5B00] hover:bg-[#E04E00] shadow-[#FF5B00]/25"
                          : activeProject.id === "bookie"
                          ? "bg-[#9C452B] hover:bg-[#7E3722] shadow-[#9C452B]/25"
                          : isDark
                          ? "bg-[#FF5B00] hover:bg-[#E04E00] shadow-[#FF5B00]/25"
                          : `${theme.buttonBg || "bg-emerald-600"} ${theme.buttonHover || "hover:bg-emerald-700"}`
                      }`}
                    >
                      <Globe className="h-4 w-4" />
                      <span>Acessar Projeto ao Vivo ↗</span>
                    </a>
                  ) : (
                    <a
                      href={activeProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold shadow transition-all border ${
                        isDark
                          ? "border-[#2E323E] bg-[#161820] text-[#F8FAFC] hover:border-[#FF5B00]"
                          : "border-neutral-300 bg-white text-neutral-800 hover:border-neutral-900"
                      }`}
                    >
                      <span>Ver Código ↗</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Direita: Preview Lateral do Card */}
              <div className="lg:col-span-5">
                {activeProject.id === "noobie" ? (
                  /* Noobie FinTech Light Preview with Asiimov Orange Accent */
                  <div
                    onClick={() => openDetails(activeProject)}
                    className="group cursor-pointer overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-xl transition-all hover:border-[#FF5B00]/50 hover:shadow-2xl hover:scale-[1.01]"
                  >
                    {/* Top bar */}
                    <div className="flex items-center justify-between border-b border-[#E2E8F0] bg-[#F6F8FA] px-4 py-2.5">
                      <div className="flex items-center gap-2">
                        <span className="flex h-2.5 w-2.5 rounded-full bg-[#FF5B00]" />
                        <span className="text-[11px] font-bold text-[#14171F]">
                          Noobie
                        </span>
                      </div>
                      <span className="rounded bg-white px-2 py-0.5 text-[10px] text-[#64748B] border border-[#E2E8F0] font-medium">
                        noobiefin.netlify.app
                      </span>
                      <Maximize2 className="h-3.5 w-3.5 text-[#64748B] group-hover:text-[#FF5B00] transition-colors" />
                    </div>

                    {/* Content Preview */}
                    <div className="p-5 space-y-4 bg-white">
                      <div className="rounded-xl border border-[#FF5B00]/30 bg-[rgba(255,91,0,0.03)] p-4 relative overflow-hidden">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-bold tracking-wider text-[#FF5B00] uppercase">
                            LIMITE RECOMENDADO / DIA
                          </span>
                          <span className="text-[10px] rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 font-bold">
                            Ritmo Confortável
                          </span>
                        </div>
                        <div className="mt-2 flex items-baseline gap-2">
                          <span className="text-2xl sm:text-3xl font-extrabold text-[#14171F]">
                            R$ 252,38
                          </span>
                          <span className="text-xs text-[#64748B]">/dia</span>
                        </div>
                        <p className="mt-1 text-xs text-[#64748B]">
                          Você tem R$ 2.271,38 livres para gastar nos próximos 9 dias do ciclo.
                        </p>
                        <div className="mt-3 space-y-1">
                          <div className="flex justify-between text-[11px] text-[#64748B]">
                            <span>Orçamento Consumido</span>
                            <span className="text-[#FF5B00] font-bold">50.1% de R$ 4.552,00</span>
                          </div>
                          <div className="h-2 w-full rounded-full bg-[#F1F5F9] overflow-hidden">
                            <div className="h-full bg-[#FF5B00] rounded-full" style={{ width: "50.1%" }} />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-3">
                          <span className="text-[#64748B] text-[10px] font-semibold uppercase">RENDA LÍQUIDA</span>
                          <p className="text-emerald-700 font-bold text-sm mt-0.5">R$ 8.000,00</p>
                        </div>
                        <div className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-3">
                          <span className="text-[#64748B] text-[10px] font-semibold uppercase">TETO DE GASTOS</span>
                          <p className="text-[#FF5B00] font-bold text-sm mt-0.5">R$ 4.552,00</p>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-[#E2E8F0] flex items-center justify-between text-xs font-semibold text-[#FF5B00]">
                        <span>Ver galeria com 3 telas reais</span>
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                ) : isDark ? (
                  /* Noobie FinTech Dark Preview with Asiimov Orange Accent */
                  <div
                    onClick={() => openDetails(activeProject)}
                    className="group cursor-pointer overflow-hidden rounded-2xl border border-[#181A22] bg-[#111218] shadow-2xl transition-all hover:border-[#FF5B00]/50 hover:scale-[1.01]"
                  >
                    {/* Top bar */}
                    <div className="flex items-center justify-between border-b border-[#181A22] bg-[#161820] px-4 py-2.5">
                      <div className="flex items-center gap-2">
                        <span className="flex h-2.5 w-2.5 rounded-full bg-[#FF5B00]" />
                        <span className="font-mono text-[11px] font-bold text-[#F8FAFC]">
                          NoobieFin
                        </span>
                      </div>
                      <span className="rounded bg-[#1A1C24] px-2 py-0.5 font-mono text-[10px] text-[#94A3B8] border border-[#2E323E]">
                        noobiefin.netlify.app
                      </span>
                      <Maximize2 className="h-3.5 w-3.5 text-[#94A3B8] group-hover:text-[#FF5B00] transition-colors" />
                    </div>

                    {/* Content Preview */}
                    <div className="p-5 space-y-4 bg-gradient-to-br from-[#111218] via-[#0D0E13] to-[#090A0F]">
                      <div className="rounded-xl border border-[#FF5B00]/30 bg-[#171922] p-4 relative overflow-hidden">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[10px] font-bold tracking-wider text-[#FF5B00] uppercase">
                            LIMITE RECOMENDADO / DIA
                          </span>
                          <span className="text-[10px] rounded-full bg-emerald-500/20 text-[#10B981] px-2 py-0.5 font-mono font-bold">
                            Ritmo Confortável
                          </span>
                        </div>
                        <div className="mt-2 flex items-baseline gap-2">
                          <span className="font-mono text-2xl sm:text-3xl font-extrabold text-[#F8FAFC]">
                            R$ 252,38
                          </span>
                          <span className="font-mono text-xs text-[#94A3B8]">/dia</span>
                        </div>
                        <p className="mt-1 text-[11px] text-[#94A3B8]">
                          Você tem R$ 2.271,38 livres para gastar nos próximos 9 dias do ciclo.
                        </p>
                        <div className="mt-3 space-y-1">
                          <div className="flex justify-between text-[10px] font-mono text-[#94A3B8]">
                            <span>Orçamento Consumido</span>
                            <span className="text-[#FF5B00] font-bold">50.1% de R$ 4.552,00</span>
                          </div>
                          <div className="h-1.5 w-full rounded-full bg-[#252834] overflow-hidden">
                            <div className="h-full bg-[#FF5B00] rounded-full" style={{ width: "50.1%" }} />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                        <div className="rounded-lg border border-[#1E212B] bg-[#13151D] p-2.5">
                          <span className="text-[#94A3B8] text-[10px]">RENDA LÍQUIDA</span>
                          <p className="text-[#10B981] font-bold text-sm mt-0.5">R$ 8.000,00</p>
                        </div>
                        <div className="rounded-lg border border-[#1E212B] bg-[#13151D] p-2.5">
                          <span className="text-[#94A3B8] text-[10px]">TETO DE GASTOS</span>
                          <p className="text-[#FF5B00] font-bold text-sm mt-0.5">R$ 4.552,00</p>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-[#181A22] flex items-center justify-between text-xs font-semibold text-[#FF5B00]">
                        <span>Ver galeria com 3 telas reais</span>
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                ) : activeProject.id === "bookie" ? (
                  /* Bookie Literary Editorial Preview with Rotating Quotes */
                  <div
                    onClick={() => openDetails(activeProject)}
                    className="group cursor-pointer overflow-hidden rounded-2xl border border-[#DED4C7] bg-[#FFFCF7] shadow-xl transition-all hover:border-[#9C452B]/50 hover:shadow-2xl hover:scale-[1.01]"
                  >
                    {/* Top bar minimalista estilo Bookie */}
                    <div className="flex items-center justify-between border-b border-[#DED4C7] bg-[#F6F1E9] px-4 py-2.5">
                      <div className="flex items-center gap-2">
                        <span className="flex h-2.5 w-2.5 rounded-full bg-[#9C452B]" />
                        <span className="text-[11px] font-bold text-[#302720] tracking-wide">
                          Bookie · Biblioteca &amp; Caderno
                        </span>
                      </div>
                      <span className="rounded bg-[#FFFCF7] px-2 py-0.5 text-[10px] text-[#74675C] border border-[#DED4C7] font-medium">
                        bookie-lib.netlify.app
                      </span>
                      <Maximize2 className="h-3.5 w-3.5 text-[#74675C] group-hover:text-[#9C452B] transition-colors" />
                    </div>

                    {/* Content Preview */}
                    <div className="p-5 space-y-4 bg-[#FFFCF7]">
                      {/* Bloco de Leitura Atual */}
                      <div className="rounded-xl border border-[#DED4C7] bg-[#F6F1E9]/70 p-3.5 flex items-center gap-3.5">
                        <div className="w-12 h-16 rounded-md bg-[#302720] text-[#FFFCF7] flex flex-col justify-between p-1.5 shadow-sm border border-[#DED4C7] flex-shrink-0">
                          <span className="text-[7px] uppercase font-bold tracking-wider text-[#F3E2D6]">Lendo</span>
                          <span className="text-[8px] font-serif leading-tight font-bold line-clamp-2">Confissões</span>
                          <span className="text-[6px] text-[#DED4C7] truncate">S. Agostinho</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-1">
                            <span className="text-[10px] font-bold text-[#9C452B] uppercase tracking-wider">
                              Sua Leitura Atual
                            </span>
                            <span className="text-[10px] font-medium text-[#865B16]">
                              ★★★★★
                            </span>
                          </div>
                          <h5 className="text-sm font-bold text-[#302720] truncate mt-0.5">
                            Confissões
                          </h5>
                          <p className="text-[11px] text-[#74675C] truncate">
                            Santo Agostinho · 6 registros no diário
                          </p>
                        </div>
                      </div>

                      {/* Citação Rotativa Dinâmica (Entre as páginas) */}
                      <div className="rounded-xl border border-[#9C452B]/25 bg-[#F3E2D6]/35 p-4 relative overflow-hidden">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-1.5 text-[#9C452B]">
                            <BookOpen className="h-3.5 w-3.5" />
                            <span className="text-[10px] font-bold uppercase tracking-wider">
                              Entre as páginas · Citação
                            </span>
                          </div>
                          <span className="text-[10px] text-[#74675C] font-mono">
                            {bookieQuoteIndex + 1}/3
                          </span>
                        </div>

                        <AnimatePresence mode="wait">
                          <motion.div
                            key={bookieQuoteIndex}
                            initial={{ opacity: 0, y: 4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            transition={{ duration: 0.3 }}
                            className="min-h-[64px] flex flex-col justify-between"
                          >
                            <p className="text-xs sm:text-[13px] italic leading-relaxed text-[#302720] font-serif">
                              &ldquo;{bookieQuotes[bookieQuoteIndex].quote}&rdquo;
                            </p>
                            <p className="mt-2 text-[11px] font-semibold text-[#9C452B] text-right">
                              — {bookieQuotes[bookieQuoteIndex].author} {bookieQuotes[bookieQuoteIndex].work && `(${bookieQuotes[bookieQuoteIndex].work})`}
                            </p>
                          </motion.div>
                        </AnimatePresence>

                        {/* Indicadores de citação */}
                        <div className="mt-3 flex items-center justify-center gap-1.5">
                          {bookieQuotes.map((_, qIdx) => (
                            <button
                              key={qIdx}
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setBookieQuoteIndex(qIdx);
                              }}
                              aria-label={`Ver citação ${qIdx + 1}`}
                              className={`h-1.5 rounded-full transition-all ${
                                bookieQuoteIndex === qIdx
                                  ? "w-5 bg-[#9C452B]"
                                  : "w-1.5 bg-[#DED4C7] hover:bg-[#9C452B]/60"
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Barra de Ação da Galeria */}
                      <div className="pt-2 border-t border-[#DED4C7] flex items-center justify-between text-xs font-semibold text-[#9C452B]">
                        <span>Ver estante &amp; 3 telas reais</span>
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                ) : activeProject.id === "br381" ? (
                  /* BR-381 Road Risk & MLOps Monitor Preview */
                  <div
                    onClick={() => openDetails(activeProject)}
                    className="group cursor-pointer overflow-hidden rounded-2xl border border-[#DDE3EA] bg-[#FFFFFF] shadow-xl transition-all hover:border-[#000D4B]/50 hover:shadow-2xl hover:scale-[1.01]"
                  >
                    {/* Top bar minimalista estilo PRF */}
                    <div className="flex items-center justify-between border-b border-[#DDE3EA] bg-[#F8FAFC] px-4 py-2.5">
                      <div className="flex items-center gap-2">
                        <span className="flex h-2.5 w-2.5 rounded-full bg-[#000D4B]" />
                        <span className="text-[11px] font-bold text-[#0F172A] tracking-wide">
                          Monitor Rodoviário · BR-381
                        </span>
                      </div>
                      <span className="rounded bg-[#000D4B]/10 px-2 py-0.5 text-[10px] text-[#000D4B] border border-[#000D4B]/20 font-bold">
                        PRF Lakehouse · Prefect 3
                      </span>
                      <Maximize2 className="h-3.5 w-3.5 text-[#64748B] group-hover:text-[#000D4B] transition-colors" />
                    </div>

                    {/* Content Preview */}
                    <div className="p-5 space-y-3.5 bg-white">
                      {/* Badge Alerta Real do Telegram */}
                      <div className="rounded-xl border border-[#FFC900]/60 bg-[#FFC900]/15 p-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="flex h-2.5 w-2.5 rounded-full bg-[#DC2626] animate-ping" />
                          <span className="text-xs font-black text-[#856400] tracking-tight">
                            🚨 ALERTA BR-381 — KM 360-370
                          </span>
                        </div>
                        <span className="text-[10px] font-mono font-bold text-[#000D4B] bg-white px-2 py-0.5 rounded border border-[#FFC900]/40">
                          Classificação: ALTO
                        </span>
                      </div>

                      {/* 3 Indicadores Reais da Telemetria */}
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div className="rounded-xl border border-[#FCA5A5] bg-[#FEF2F2] p-2.5">
                          <span className="text-[10px] font-bold text-[#991B1B] uppercase block">
                            Probabilidade
                          </span>
                          <p className="text-sm font-black text-[#DC2626] mt-1">57.8%</p>
                          <span className="text-[9px] font-bold text-[#DC2626]">Risco Elevado</span>
                        </div>

                        <div className="rounded-xl border border-[#DDE3EA] bg-[#F8FAFC] p-2.5">
                          <span className="text-[10px] font-semibold text-[#64748B] uppercase block">
                            Temperatura
                          </span>
                          <p className="text-sm font-black text-[#0F172A] mt-1">23.1°C</p>
                          <span className="text-[9px] text-[#64748B]">Chuva: Não</span>
                        </div>

                        <div className="rounded-xl border border-[#DDE3EA] bg-[#F8FAFC] p-2.5">
                          <span className="text-[10px] font-semibold text-[#64748B] uppercase block">
                            Vento
                          </span>
                          <p className="text-sm font-black text-[#334155] mt-1">10.4 km/h</p>
                          <span className="text-[9px] text-[#64748B]">Hora: 19:00</span>
                        </div>
                      </div>

                      {/* Info esteira MLOps */}
                      <div className="rounded-xl border border-[#DDE3EA] bg-[#F8FAFC] p-3 text-xs text-[#475569] space-y-1">
                        <div className="flex justify-between items-center text-[11px]">
                          <span className="font-semibold text-[#0F172A]">Classificador Random Forest:</span>
                          <span className="font-mono text-[#000D4B] font-bold">Recall 81.4%</span>
                        </div>
                        <p className="text-[11px] text-[#64748B]">
                          Alerta enviado automaticamente no Telegram da base operacional.
                        </p>
                      </div>

                      {/* Barra de Ação da Galeria */}
                      <div className="pt-2 border-t border-[#DDE3EA] flex items-center justify-between text-xs font-semibold text-[#000D4B]">
                        <span>Ver alertas reais do Telegram &amp; esteira Prefect</span>
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                ) : activeProject.id === "notecore" ? (
                  /* Notecore Smartphone Mobile Preview */
                  <div
                    onClick={() => openDetails(activeProject)}
                    className="group cursor-pointer overflow-hidden rounded-3xl border border-[#DCE7F5] bg-white shadow-xl transition-all hover:border-[#1E88E5]/50 hover:shadow-2xl hover:scale-[1.01]"
                  >
                    {/* Top bar estilo mobile smartphone */}
                    <div className="flex items-center justify-between border-b border-[#DCE7F5] bg-[#1E88E5] px-4 py-3 text-white">
                      <div className="flex items-center gap-2">
                        {/* Hamburger icon */}
                        <div className="space-y-1">
                          <span className="block h-0.5 w-3.5 bg-white" />
                          <span className="block h-0.5 w-3.5 bg-white" />
                          <span className="block h-0.5 w-3.5 bg-white" />
                        </div>
                        <span className="text-xs font-bold tracking-wide">
                          Notecore
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-semibold text-white">
                          Flutter Mobile
                        </span>
                        <Maximize2 className="h-3.5 w-3.5 text-white/80 group-hover:text-white transition-colors" />
                      </div>
                    </div>

                    {/* Calendário & Interface Mobile */}
                    <div className="p-4 sm:p-5 space-y-3.5 bg-[#FFFFFF]">
                      {/* Dias da semana */}
                      <div className="grid grid-cols-7 text-center text-[10px] font-bold text-[#64748B] border-b border-[#E2E8F0] pb-2">
                        <span>Dom</span>
                        <span>Seg</span>
                        <span>Ter</span>
                        <span>Qua</span>
                        <span>Qui</span>
                        <span className="text-[#1E88E5]">Sex</span>
                        <span>Sab</span>
                      </div>

                      {/* Mini grade de calendário */}
                      <div className="grid grid-cols-7 gap-1.5 text-center text-xs">
                        {[
                          { day: "4", note: false },
                          { day: "5", note: false },
                          { day: "11", note: false },
                          { day: "12", note: false },
                          { day: "18", note: true, noteText: "9h", noteColor: "bg-red-500 text-white" },
                          { day: "19", note: false },
                          { day: "20", note: false },
                          { day: "25", note: true, noteText: "CC", noteColor: "bg-[#1E88E5] text-white" },
                          { day: "26", note: false },
                          { day: "27", note: false },
                          { day: "2", note: false, muted: true },
                          { day: "3", note: false, muted: true },
                          { day: "9", note: false, muted: true },
                          { day: "10", note: false, muted: true },
                        ].map((item, dIdx) => (
                          <div
                            key={dIdx}
                            className={`rounded-lg border p-1 min-h-[44px] flex flex-col justify-between items-center transition-colors ${
                              item.note
                                ? "border-[#1E88E5]/30 bg-[#F4F8FD]"
                                : "border-[#F1F5F9] bg-[#F8FAFC]/60"
                            } ${item.muted ? "opacity-35" : ""}`}
                          >
                            <span className="text-[10px] font-semibold text-[#0F172A]">
                              {item.day}
                            </span>
                            {item.note ? (
                              <span className={`text-[8px] font-bold px-1 py-0.5 rounded truncate w-full ${item.noteColor}`}>
                                {item.noteText}
                              </span>
                            ) : (
                              <span className="h-2" />
                            )}
                          </div>
                        ))}
                      </div>

                      {/* Floating Action Button (FAB) + Rodapé */}
                      <div className="pt-2 border-t border-[#DCE7F5] flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-[#1E88E5]">
                          <span>Ver menu lateral &amp; telas reais</span>
                          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                        </div>
                        {/* Botão flutuante estilo Material Design */}
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1E88E5] text-white shadow-md shadow-[#1E88E5]/30 group-hover:scale-110 transition-transform">
                          <span className="text-lg font-bold leading-none mb-0.5">+</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : activeProject.id === "medusa-bot" ? (
                  /* Medusa Bot IoT & Vision Preview */
                  <div
                    onClick={() => openDetails(activeProject)}
                    className="group cursor-pointer overflow-hidden rounded-2xl border border-[#D1EAEB] bg-white shadow-xl transition-all hover:border-[#00979D]/50 hover:shadow-2xl hover:scale-[1.01]"
                  >
                    {/* Top bar minimalista estilo Telegram/Arduino */}
                    <div className="flex items-center justify-between border-b border-[#D1EAEB] bg-[#F8FAFC] px-4 py-2.5">
                      <div className="flex items-center gap-2">
                        <span className="flex h-2.5 w-2.5 rounded-full bg-[#00979D]" />
                        <span className="text-[11px] font-bold text-[#0F172A] tracking-wide">
                          Medusa Bot · ESP32-CAM
                        </span>
                      </div>
                      <span className="rounded bg-[#00979D]/10 px-2 py-0.5 text-[10px] text-[#00979D] border border-[#00979D]/20 font-bold">
                        Google Cloud Vision
                      </span>
                      <Maximize2 className="h-3.5 w-3.5 text-[#64748B] group-hover:text-[#00979D] transition-colors" />
                    </div>

                    {/* Chat do Telegram simulado */}
                    <div className="p-4 sm:p-5 space-y-3 bg-[#FFFFFF]">
                      {/* Comando do usuário enviado */}
                      <div className="flex justify-end">
                        <div className="rounded-2xl rounded-tr-xs bg-[#00979D] text-white px-3.5 py-1.5 shadow-xs flex items-center gap-1.5">
                          <span className="font-mono text-xs font-bold">/photo</span>
                          <span className="text-[9px] text-white/75">18:57</span>
                        </div>
                      </div>

                      {/* Resposta do Bot com miniatura da foto e rótulos */}
                      <div className="flex justify-start">
                        <div className="max-w-[88%] rounded-2xl rounded-tl-xs border border-[#D1EAEB] bg-[#F8FAFC] p-3 space-y-2.5 shadow-xs">
                          {/* Foto capturada com flash */}
                          <div className="relative overflow-hidden rounded-xl border border-[#D1EAEB] bg-slate-900">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src="/projects/medusa-bot/telegram-result.png"
                              alt="Captura real do Medusa Bot"
                              className="w-full h-28 object-cover object-center"
                            />
                            <span className="absolute top-1.5 right-1.5 rounded-md bg-black/60 px-1.5 py-0.5 font-mono text-[9px] text-white font-semibold backdrop-blur-xs">
                              ESP32 · 90°
                            </span>
                          </div>

                          {/* Rótulos traduzidos detectados pela IA */}
                          <div className="space-y-1">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-[#00979D] block">
                              🏷️ Detecção Google Vision:
                            </span>
                            <div className="flex flex-wrap gap-1">
                              {[
                                "Evento",
                                "Cotovelo",
                                "Diversão",
                                "Entretenimento",
                                "Sala",
                              ].map((label) => (
                                <span
                                  key={label}
                                  className="rounded-md bg-white px-1.5 py-0.5 text-[10px] font-semibold text-[#0F172A] border border-[#D1EAEB]"
                                >
                                  {label}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Rodapé da Galeria */}
                      <div className="pt-2 border-t border-[#D1EAEB] flex items-center justify-between text-xs font-semibold text-[#00979D]">
                        <span>Ver circuito na protoboard &amp; C++</span>
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                ) : activeProject.id === "presp" ? (
                  /* Presp Desktop Window Light Preview */
                  <div
                    onClick={() => openDetails(activeProject)}
                    className="group cursor-pointer overflow-hidden rounded-2xl border border-[#D8E2ED] bg-white shadow-xl transition-all hover:border-[#007396]/50 hover:shadow-2xl hover:scale-[1.01]"
                  >
                    {/* Top Window Bar */}
                    <div className="flex items-center justify-between border-b border-[#D8E2ED] bg-[#F8FAFC] px-4 py-2.5">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1.5">
                          <span className="h-2.5 w-2.5 rounded-full bg-[#E74C3C]" />
                          <span className="h-2.5 w-2.5 rounded-full bg-[#F59E0B]" />
                          <span className="h-2.5 w-2.5 rounded-full bg-[#0284C7]" />
                        </div>
                        <div className="flex items-center gap-1.5 ml-2 border-l border-[#D8E2ED] pl-2">
                          <img
                            src="/projects/presp/logo.png"
                            alt="Presp Logo"
                            className="h-4 w-4 object-contain"
                          />
                          <span className="text-[11px] font-bold text-[#0F172A]">
                            Presp • Calculadora Estatística v1.0
                          </span>
                        </div>
                      </div>
                      <span className="rounded bg-[#007396]/10 px-1.5 py-0.5 text-[9px] font-bold font-mono text-[#007396]">
                        Java SE
                      </span>
                    </div>

                    <div className="p-4 sm:p-5 bg-gradient-to-br from-white via-[#F8FAFC] to-[#F4F7FB] space-y-3.5">
                      {/* Mini Stat Badges */}
                      <div className="grid grid-cols-3 gap-2">
                        <div className="rounded-lg bg-white p-2 border border-[#D8E2ED] shadow-xs text-center">
                          <span className="text-[10px] font-bold text-[#64748B] block uppercase tracking-wider">Média</span>
                          <span className="text-xs font-mono font-extrabold text-[#007396]">2708.44</span>
                        </div>
                        <div className="rounded-lg bg-white p-2 border border-[#D8E2ED] shadow-xs text-center">
                          <span className="text-[10px] font-bold text-[#64748B] block uppercase tracking-wider">Mediana</span>
                          <span className="text-xs font-mono font-extrabold text-[#0F172A]">2807.00</span>
                        </div>
                        <div className="rounded-lg bg-white p-2 border border-[#D8E2ED] shadow-xs text-center">
                          <span className="text-[10px] font-bold text-[#64748B] block uppercase tracking-wider">Desvio Pad.</span>
                          <span className="text-xs font-mono font-extrabold text-[#E74C3C]">1433.83</span>
                        </div>
                      </div>

                      {/* Mini Tabela de Frequência */}
                      <div className="rounded-lg border border-[#D8E2ED] bg-white overflow-hidden shadow-xs">
                        <div className="bg-[#F1F5F9] px-2.5 py-1.5 border-b border-[#D8E2ED] flex items-center justify-between text-[10px] font-bold text-[#475569]">
                          <span>Classes &amp; Intervalo</span>
                          <span>Xi (Méd)</span>
                          <span>Fi (Freq)</span>
                        </div>
                        <div className="divide-y divide-[#F1F5F9] font-mono text-[10px] text-[#334155]">
                          <div className="px-2.5 py-1 flex items-center justify-between">
                            <span className="text-[#007396] font-semibold">1 | 343.0 |-- 805.0</span>
                            <span className="text-neutral-500">574.0</span>
                            <span className="font-bold text-[#0F172A]">18 (18%)</span>
                          </div>
                          <div className="px-2.5 py-1 flex items-center justify-between">
                            <span className="text-[#007396] font-semibold">2 | 805.0 |-- 1267.0</span>
                            <span className="text-neutral-500">1036.0</span>
                            <span className="font-bold text-[#0F172A]">14 (14%)</span>
                          </div>
                          <div className="px-2.5 py-1 flex items-center justify-between">
                            <span className="text-[#007396] font-semibold">3 | 1267.0 |-- 1729.0</span>
                            <span className="text-neutral-500">1498.0</span>
                            <span className="font-bold text-[#0F172A]">12 (12%)</span>
                          </div>
                        </div>
                      </div>

                      {/* Rodapé da Janela */}
                      <div className="pt-2 border-t border-[#D8E2ED] flex items-center justify-between text-xs font-semibold text-[#007396]">
                        <span>Ver tabela completa &amp; entrada de dados</span>
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                ) : activeProject.id === "aws-s3" ? (
                  /* AWS Cloud Optimization Light Preview */
                  <div
                    onClick={() => openDetails(activeProject)}
                    className="group cursor-pointer overflow-hidden rounded-2xl border border-[#F2DEC8] bg-white shadow-xl transition-all hover:border-[#FF9900]/50 hover:shadow-2xl hover:scale-[1.01]"
                  >
                    {/* Top Window Bar */}
                    <div className="flex items-center justify-between border-b border-[#F2DEC8] bg-[#FFF8F2] px-4 py-2.5">
                      <div className="flex items-center gap-2">
                        <span className="flex h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
                        <span className="text-xs font-bold text-[#232F3E]">
                          AWS Cloud Architecture • Loja do Sapo
                        </span>
                      </div>
                      <span className="rounded-full bg-emerald-100 border border-emerald-200 px-2.5 py-0.5 text-[11px] font-extrabold text-emerald-800 shadow-xs">
                        -87.89% Armazenamento
                      </span>
                    </div>

                    <div className="p-4 sm:p-5 bg-gradient-to-br from-white via-[#FFFBF7] to-[#FFF8F2] space-y-4">
                      {/* Três blocos de serviço conectados: Zoho ERP ➔ AWS Lambda ➔ S3 Bucket */}
                      <div className="rounded-xl border border-[#F2DEC8] bg-white p-3 shadow-xs">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#D97706] block mb-2">
                          Pipeline Serverless Automatizada
                        </span>
                        <div className="grid grid-cols-11 items-center text-center">
                          {/* Zoho ERP */}
                          <div className="col-span-3 rounded-lg border border-slate-200 bg-[#F8FAFC] p-2">
                            <span className="text-[9px] font-bold uppercase text-slate-500 block">Origem</span>
                            <span className="text-xs font-bold text-[#232F3E]">Zoho ERP</span>
                          </div>

                          {/* Arrow 1 */}
                          <div className="col-span-1 flex justify-center text-[#FF9900] font-bold text-xs">
                            ➔
                          </div>

                          {/* AWS Lambda */}
                          <div className="col-span-3 rounded-lg border border-[#FF9900]/30 bg-[#FFF8F2] p-2">
                            <span className="text-[9px] font-bold uppercase text-[#D97706] block">Processamento</span>
                            <span className="text-xs font-extrabold text-[#E67E00]">AWS Lambda</span>
                          </div>

                          {/* Arrow 2 */}
                          <div className="col-span-1 flex justify-center text-[#FF9900] font-bold text-xs">
                            ➔
                          </div>

                          {/* S3 Bucket */}
                          <div className="col-span-3 rounded-lg border border-emerald-200 bg-emerald-50/60 p-2">
                            <span className="text-[9px] font-bold uppercase text-emerald-700 block">Destino</span>
                            <span className="text-xs font-bold text-emerald-900">S3 Bucket</span>
                          </div>
                        </div>
                      </div>

                      {/* Mini Indicadores de CloudWatch */}
                      <div className="grid grid-cols-2 gap-2.5">
                        <div className="rounded-xl border border-[#F2DEC8] bg-white p-2.5 shadow-xs">
                          <span className="text-[10px] font-bold text-[#64748B] block uppercase tracking-wider">
                            Compressão PIL
                          </span>
                          <span className="text-sm font-mono font-extrabold text-[#232F3E]">
                            ~8x Menor
                          </span>
                          <span className="text-[10px] text-emerald-600 block mt-0.5">
                            Sem perda de nitidez
                          </span>
                        </div>

                        <div className="rounded-xl border border-[#F2DEC8] bg-white p-2.5 shadow-xs">
                          <span className="text-[10px] font-bold text-[#64748B] block uppercase tracking-wider">
                            Ciclo de Vida
                          </span>
                          <span className="text-sm font-mono font-extrabold text-[#232F3E]">
                            14 Dias
                          </span>
                          <span className="text-[10px] text-slate-500 block mt-0.5">
                            Expiração automática
                          </span>
                        </div>
                      </div>

                      {/* Rodapé da Janela */}
                      <div className="pt-2 border-t border-[#F2DEC8] flex items-center justify-between text-xs font-semibold text-[#D97706]">
                        <span>Ver diagrama no Miro &amp; métricas CloudWatch</span>
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Standard Light Preview for other projects */
                  <div
                    onClick={() => openDetails(activeProject)}
                    className="group cursor-pointer overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-md transition-all hover:shadow-xl hover:scale-[1.01]"
                  >
                    <div className="flex items-center justify-between border-b border-neutral-100 bg-neutral-50 px-4 py-2.5">
                      <div className="flex items-center gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                        <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                      </div>
                      <span className="text-[11px] font-mono text-neutral-500">
                        {activeProject.name}
                      </span>
                      <Maximize2 className="h-3.5 w-3.5 text-neutral-400 group-hover:text-blue-600 transition-colors" />
                    </div>

                    <div className="p-6 bg-gradient-to-br from-white to-neutral-50 min-h-[190px] flex flex-col justify-between">
                      <div>
                        <span className="text-xs font-bold text-emerald-700 uppercase tracking-wide">
                          Visão Geral
                        </span>
                        <h4 className="mt-2 text-xl font-bold text-neutral-900">
                          {activeProject.name}
                        </h4>
                        <p className="mt-2 text-xs text-neutral-600 line-clamp-3 leading-relaxed">
                          {activeProject.problem}
                        </p>
                      </div>

                      <div className="mt-5 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-emerald-700">
                        <span>Clique para ver telas e galeria</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Indicadores / Pontos do Carrossel */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {projectsData.map((project, idx) => {
            const isCurrent = currentIndex === idx;
            const isNoobie = project.id === "noobie";
            const isBookie = project.id === "bookie";
            const isBr381 = project.id === "br381";
            const isNotecore = project.id === "notecore";
            const isMedusa = project.id === "medusa-bot";
            const isPresp = project.id === "presp";
            const isAws = project.id === "aws-s3";
            const projectIsDark = project.theme?.isDark;
            return (
              <button
                key={project.id}
                onClick={() => setCurrentIndex(idx)}
                className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium transition-all ${
                  isCurrent
                    ? isNoobie
                      ? "bg-white text-[#FF5B00] border border-[#FF5B00] font-bold shadow-md scale-105"
                      : isBookie
                      ? "bg-[#FFFCF7] text-[#9C452B] border border-[#9C452B] font-bold shadow-md scale-105"
                      : isBr381
                      ? "bg-white text-[#000D4B] border border-[#000D4B] font-bold shadow-md scale-105"
                      : isNotecore
                      ? "bg-white text-[#1E88E5] border border-[#1E88E5] font-bold shadow-md scale-105"
                      : isMedusa
                      ? "bg-white text-[#00979D] border border-[#00979D] font-bold shadow-md scale-105"
                      : isPresp
                      ? "bg-white text-[#007396] border border-[#007396] font-bold shadow-md scale-105"
                      : isAws
                      ? "bg-white text-[#D97706] border border-[#FF9900] font-bold shadow-md scale-105"
                      : projectIsDark
                      ? "bg-[#090A0F] text-[#FF5B00] border border-[#FF5B00] font-bold shadow-md scale-105"
                      : "bg-neutral-900 text-white font-bold shadow-sm scale-105"
                    : activeProject.id === "noobie"
                    ? "bg-white text-[#64748B] border border-[#E2E8F0] hover:bg-[#F6F8FA]"
                    : activeProject.id === "bookie"
                    ? "bg-[#FFFCF7] text-[#74675C] border border-[#DED4C7] hover:bg-white"
                    : activeProject.id === "br381"
                    ? "bg-white text-[#475569] border border-[#DDE3EA] hover:bg-[#F8FAFC]"
                    : activeProject.id === "notecore"
                    ? "bg-white text-[#475569] border border-[#DCE7F5] hover:bg-[#F4F8FD]"
                    : activeProject.id === "medusa-bot"
                    ? "bg-white text-[#475569] border border-[#D1EAEB] hover:bg-[#F2F9F9]"
                    : activeProject.id === "presp"
                    ? "bg-white text-[#475569] border border-[#D8E2ED] hover:bg-[#F4F7FB]"
                    : activeProject.id === "aws-s3"
                    ? "bg-white text-[#475569] border border-[#F2DEC8] hover:bg-[#FFF8F2]"
                    : isDark
                    ? "bg-[#161820] text-[#94A3B8] border border-[#2E323E] hover:bg-[#1E212B]"
                    : "bg-white text-neutral-600 border border-neutral-200 hover:bg-neutral-50"
                }`}
              >
                <span
                  className={`h-2 w-2 rounded-full ${
                    isNoobie
                      ? "bg-[#FF5B00]"
                      : isBookie
                      ? "bg-[#9C452B]"
                      : isBr381
                      ? "bg-[#000D4B]"
                      : isNotecore
                      ? "bg-[#1E88E5]"
                      : isMedusa
                      ? "bg-[#00979D]"
                      : isPresp
                      ? "bg-[#007396]"
                      : isAws
                      ? "bg-[#FF9900]"
                      : projectIsDark
                      ? "bg-[#FF5B00]"
                      : isCurrent
                      ? "bg-white"
                      : "bg-neutral-300"
                  }`}
                />
                <span>{project.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
}
