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
    if (isDark) {
      return "bg-[#090A0F] text-[#F8FAFC] border-[#181A22]";
    }
    if (activeProject.id === "br381") {
      return "bg-[#F5F7FD] text-neutral-900 border-[#E2E8F0]";
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
            : isDark
            ? "opacity-100 bg-[radial-gradient(ellipse_80%_60%_at_50%_20%,rgba(255,91,0,0.08),transparent_70%)]"
            : activeProject.id === "br381"
            ? "opacity-100 bg-[radial-gradient(ellipse_80%_60%_at_50%_20%,rgba(99,102,241,0.05),transparent_70%)]"
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
                  : isDark
                  ? "text-[#F8FAFC]"
                  : "text-neutral-900"
              }`}
            >
              Produtos que eu construí e coloquei no ar
            </h2>
            <p
              className={`mt-2 max-w-xl text-sm leading-relaxed transition-colors duration-500 ${
                activeProject.id === "noobie"
                  ? "text-[#64748B]"
                  : activeProject.id === "bookie"
                  ? "text-[#74675C]"
                  : isDark
                  ? "text-[#94A3B8]"
                  : "text-neutral-600"
              }`}
            >
              Navegue pelos sistemas desenvolvidos. Transição automática a cada 10 segundos com cores próprias de cada projeto.
            </p>
          </div>

          {/* Controles de Navegação */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              aria-label="Projeto anterior"
              className={`flex h-11 w-11 items-center justify-center rounded-full border shadow-sm transition-all active:scale-95 ${
                activeProject.id === "bookie"
                  ? "border-[#DED4C7] bg-[#FFFCF7] text-[#302720] hover:bg-[#F6F1E9] hover:border-[#9C452B]"
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
                : isDark
                ? "bg-[#090A0F] border-[#181A22] text-[#F8FAFC] hover:border-[#FF5B00]/40"
                : `${theme.border || "border-neutral-200"} ${theme.bgSoft || "bg-white"} text-neutral-900`
            }`}
          >
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
              {/* Esquerda: Informações Ultra-Enxutas (Sem excessos) */}
              <div className="lg:col-span-7 space-y-4">
                {/* 3. Badge simples */}
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

                {/* 3. Título */}
                <h3
                  className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
                    activeProject.id === "noobie"
                      ? "text-[#14171F]"
                      : activeProject.id === "bookie"
                      ? "text-[#302720]"
                      : isDark
                      ? "text-[#F8FAFC]"
                      : "text-neutral-900"
                  }`}
                >
                  {activeProject.name}
                </h3>

                {/* 3. Descrição: Uma única frase direta */}
                <p
                  className={`text-base sm:text-lg leading-relaxed ${
                    activeProject.id === "noobie"
                      ? "text-[#64748B]"
                      : activeProject.id === "bookie"
                      ? "text-[#74675C]"
                      : isDark
                      ? "text-[#94A3B8]"
                      : "text-neutral-600"
                  }`}
                >
                  {activeProject.shortPitch || activeProject.summary}
                </p>

                {/* 3. Apenas os 2 Botões Claros */}
                <div className="flex flex-wrap items-center gap-3 pt-3">
                  <button
                    onClick={() => openDetails(activeProject)}
                    className={`inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold shadow transition-all ${
                      activeProject.id === "noobie"
                        ? "bg-[#F6F8FA] border border-[#E2E8F0] text-[#14171F] hover:bg-[#F1F5F9] hover:border-[#CBD5E1]"
                        : activeProject.id === "bookie"
                        ? "bg-[#FFFCF7] border border-[#DED4C7] text-[#302720] hover:bg-white hover:border-[#9C452B]"
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
                        : isDark
                        ? "text-[#FF5B00]"
                        : "text-neutral-300"
                    }`} />
                    <span>Ver Detalhes &amp; Telas</span>
                  </button>

                  {activeProject.isLive ? (
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
                      : projectIsDark
                      ? "bg-[#090A0F] text-[#FF5B00] border border-[#FF5B00] font-bold shadow-md scale-105"
                      : "bg-neutral-900 text-white font-bold shadow-sm scale-105"
                    : activeProject.id === "noobie"
                    ? "bg-white text-[#64748B] border border-[#E2E8F0] hover:bg-[#F6F8FA]"
                    : activeProject.id === "bookie"
                    ? "bg-[#FFFCF7] text-[#74675C] border border-[#DED4C7] hover:bg-white"
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
