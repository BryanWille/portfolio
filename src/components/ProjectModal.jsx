"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Globe,
  Github,
  BookOpen,
  ArrowUpRight,
  ExternalLink,
  Sparkles,
  Play,
} from "lucide-react";

export default function ProjectModal({ project, isOpen, onClose }) {
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Reset active screen on project change
  useEffect(() => {
    setActiveScreenIndex(0);
  }, [project]);

  if (!isOpen || !project) return null;

  const isNoobie = project.id === "noobie";
  const isBookie = project.id === "bookie";
  const isBr381 = project.id === "br381";
  const isNotecore = project.id === "notecore";
  const isMedusa = project.id === "medusa-bot";
  const isPresp = project.id === "presp";
  const isAws = project.id === "aws-s3";

  const activeScreen =
    project.gallery && project.gallery[activeScreenIndex]
      ? project.gallery[activeScreenIndex]
      : null;

  // ==========================================
  // 1. RENDER BR-381 RISK PIPELINE (PRF / MLOPS)
  // ==========================================
  if (isBr381) {
    const isStory = activeScreen?.type === "story";
    const isDocker = activeScreen?.type === "docker-stack";

    return (
      <AnimatePresence>
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="relative z-10 w-full max-w-4xl max-h-[92vh] flex flex-col overflow-hidden rounded-2xl border border-[#DDE3EA] bg-white text-[#0F172A] shadow-2xl font-sans"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#DDE3EA] bg-white px-6 py-4">
              <div className="flex flex-wrap items-center gap-2.5">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] tracking-tight">
                  BR-381 Risk Pipeline
                </h3>
                <span className="rounded-full px-3 py-1 text-xs font-bold bg-[#000D4B]/10 text-[#000D4B] border border-[#000D4B]/20">
                  Engenharia de Dados &amp; IA • PUC Minas
                </span>
                <span className="rounded-full px-2.5 py-0.5 text-xs font-bold bg-[#FFC900]/25 text-[#735700] border border-[#FFC900]/60">
                  Status: Funcional 🚨
                </span>
              </div>

              <button
                onClick={onClose}
                aria-label="Fechar modal"
                className="rounded-lg p-1.5 text-[#64748B] hover:text-[#0F172A] hover:bg-[#F8FAFC] border border-transparent hover:border-[#DDE3EA] transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Body */}
            <div className="overflow-y-auto p-6 space-y-6 bg-[#F4F6F9]">
              {/* Abas */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {project.gallery.map((screen, idx) => {
                  const isActive = activeScreenIndex === idx;
                  const screenTabLabel = screen.tabTitle || screen.tag || screen.title;

                  return (
                    <button
                      key={screen.id}
                      onClick={() => setActiveScreenIndex(idx)}
                      className={`flex items-center justify-center rounded-xl border py-2.5 px-3 text-center transition-all ${
                        isActive
                          ? "border-[#000D4B] bg-[#000D4B]/10 text-[#000D4B] font-bold shadow-sm ring-1 ring-[#000D4B]"
                          : "border-[#DDE3EA] bg-white text-[#475569] hover:text-[#0F172A] hover:bg-[#F8FAFC] font-medium"
                      }`}
                    >
                      <span className="text-xs sm:text-sm truncate">
                        {screenTabLabel}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Conteúdo */}
              {isStory ? (
                <div className="overflow-hidden rounded-2xl border border-[#DDE3EA] bg-white p-6 sm:p-8 shadow-sm space-y-5">
                  <div className="flex items-center gap-2.5 text-[#000D4B]">
                    <div className="p-2 rounded-xl bg-[#000D4B]/10">
                      <Sparkles className="h-5 w-5 text-[#000D4B]" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#000D4B]">
                      Propósito &amp; Arquitetura
                    </span>
                  </div>

                  <h4 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] tracking-tight">
                    {activeScreen?.title || "Segurança Viária com Engenharia de Dados & MLOps"}
                  </h4>

                  <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[#475569]">
                    {activeScreen?.storyParagraphs?.map((paragraph, pIdx) => (
                      <p key={pIdx} className="text-[#0F172A]/85">
                        {paragraph}
                      </p>
                    )) || (
                      <>
                        <p className="text-[#0F172A]/85">
                          A BR-381 é historicamente uma das rodovias mais perigosas do país. O objetivo deste projeto — desenvolvido na pós-graduação de Engenharia de IA e MLOps na PUC Minas — foi ir muito além de uma análise estática em planilha: construí uma esteira completa e automatizada.
                        </p>
                        <p className="text-[#0F172A]/85">
                          O sistema coleta registros públicos de acidentes da PRF, enriquece cada ocorrência com dados meteorológicos (chuva, vento, visibilidade) e treina um modelo de Machine Learning para calcular a probabilidade de acidente nos trechos mais críticos da estrada. Se o risco atual for alto, ele dispara um alerta imediato no Telegram da equipe operacional.
                        </p>
                      </>
                    )}
                  </div>
                </div>
              ) : isDocker ? (
                <div className="space-y-4">
                  <div className="overflow-hidden rounded-2xl border border-[#DDE3EA] bg-white shadow-md p-6 sm:p-8 space-y-6">
                    <div className="flex items-center justify-between border-b border-[#DDE3EA] pb-4">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-[#000D4B]">
                          Ambiente de Execução
                        </span>
                        <h4 className="text-xl font-bold text-[#0F172A] mt-1">
                          Containers Docker &amp; Orquestração Prefect 3
                        </h4>
                      </div>
                      <span className="rounded-lg bg-[#000D4B]/10 px-3 py-1 text-xs font-bold text-[#000D4B] border border-[#000D4B]/20">
                        100% Reprodutível
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="rounded-xl border border-[#DDE3EA] bg-[#F8FAFC] p-4">
                        <h5 className="font-bold text-sm text-[#0F172A] flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-[#000D4B]" />
                          Prefect Server &amp; Workers
                        </h5>
                        <p className="mt-2 text-xs text-[#475569] leading-relaxed">
                          Agendamento contínuo de jobs, monitoramento de falhas e re-tentativas automáticas sem intervenção manual.
                        </p>
                      </div>

                      <div className="rounded-xl border border-[#DDE3EA] bg-[#F8FAFC] p-4">
                        <h5 className="font-bold text-sm text-[#0F172A] flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-[#0284C7]" />
                          PostgreSQL Medallion
                        </h5>
                        <p className="mt-2 text-xs text-[#475569] leading-relaxed">
                          Armazenamento estruturado em esquemas Bronze, Silver e Gold garantindo linhagem (data lineage) e idempotência.
                        </p>
                      </div>

                      <div className="rounded-xl border border-[#DDE3EA] bg-[#F8FAFC] p-4">
                        <h5 className="font-bold text-sm text-[#0F172A] flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-[#059669]" />
                          Scikit-Learn Random Forest
                        </h5>
                        <p className="mt-2 text-xs text-[#475569] leading-relaxed">
                          Modelo treinado e empacotado para inferência pontual rápida ao receber novos lotes de telemetria climática.
                        </p>
                      </div>

                      <div className="rounded-xl border border-[#DDE3EA] bg-[#F8FAFC] p-4">
                        <h5 className="font-bold text-sm text-[#0F172A] flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-[#FFC900]" />
                          Telegram Bot Dispatcher
                        </h5>
                        <p className="mt-2 text-xs text-[#475569] leading-relaxed">
                          Notificações push em tempo real com mecanismo de cooldown para proteção contra disparo duplicado de alertas.
                        </p>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-[#DDE3EA]">
                      <span className="text-xs font-semibold text-[#64748B] block mb-2">
                        Stack Técnica Utilizada:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Python 3.12",
                          "Prefect 3",
                          "PostgreSQL",
                          "Docker Compose",
                          "scikit-learn (Random Forest)",
                          "Open-Meteo API",
                          "Telegram Bot API",
                          "Pytest",
                        ].map((tech) => (
                          <span
                            key={tech}
                            className="rounded-lg bg-white px-3 py-1 text-xs font-medium text-[#0F172A] border border-[#DDE3EA] shadow-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border border-[#DDE3EA] bg-white p-4 shadow-sm">
                    <p className="text-sm font-bold text-[#0F172A]">
                      {activeScreen?.title}
                    </p>
                    <p className="mt-1 text-xs sm:text-sm text-[#475569] leading-relaxed">
                      {activeScreen?.caption}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="overflow-hidden rounded-2xl border border-[#DDE3EA] bg-white shadow-md">
                    <div className="flex items-center justify-between border-b border-[#DDE3EA] bg-[#F8FAFC] px-4 py-2.5">
                      <div className="flex items-center gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                        <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                      </div>
                      <div className="rounded-md px-3 py-0.5 text-xs font-medium text-[#475569] bg-white border border-[#DDE3EA]">
                        BR-381 Risk Pipeline · PRF + Prefect 3
                      </div>
                      <span className="text-[11px] font-semibold text-[#000D4B]">
                        {activeScreen?.tag}
                      </span>
                    </div>

                    <div className="p-3 sm:p-5 flex flex-col justify-center items-center bg-[#F8FAFC] min-h-[260px] sm:min-h-[340px]">
                      {activeScreen?.image ? (
                        <div className="w-full overflow-hidden rounded-xl border border-[#DDE3EA] shadow-md bg-white">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={activeScreen.image}
                            alt={activeScreen.title}
                            className="w-full h-auto max-h-[460px] object-contain mx-auto"
                            loading="eager"
                          />
                        </div>
                      ) : (
                        <div className="p-8 text-center text-sm text-[#475569]">
                          {activeScreen?.title}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="rounded-xl border border-[#DDE3EA] bg-white p-4 shadow-sm">
                    <p className="text-sm font-bold text-[#0F172A]">
                      {activeScreen?.title}
                    </p>
                    <p className="mt-1 text-xs sm:text-sm text-[#475569] leading-relaxed">
                      {activeScreen?.caption}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Rodapé */}
            <div className="flex flex-col sm:flex-row items-center justify-between border-t border-[#DDE3EA] bg-white px-6 py-4 gap-3">
              <span className="text-xs text-[#64748B] hidden sm:inline">
                Pós-Graduação em Engenharia de IA &amp; MLOps • PUC Minas
              </span>

              <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto justify-end">
                <a
                  href="https://www.youtube.com/watch?v=FdgF0kawJqY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#000D4B] hover:bg-[#000936] px-4 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-[#000D4B]/30 transition-all flex-1 sm:flex-initial"
                >
                  <Play className="h-4 w-4 fill-[#FFC900] text-[#FFC900]" />
                  <span>Assistir Pitch no YouTube ↗</span>
                </a>

                <a
                  href="https://lnkd.in/dxxrM4mw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#DDE3EA] bg-white px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#0F172A] hover:bg-[#F8FAFC] hover:border-[#000D4B] transition-colors shadow-sm flex-1 sm:flex-initial"
                >
                  <ExternalLink className="h-4 w-4 text-[#000D4B]" />
                  <span>Ver Publicação no LinkedIn ↗</span>
                </a>

                <button
                  onClick={onClose}
                  className="rounded-xl border border-[#DDE3EA] bg-white px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#64748B] hover:text-[#0F172A] hover:bg-[#F8FAFC] transition-colors shadow-sm"
                >
                  Fechar
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatePresence>
    );
  }

  // ==========================================
  // 2. RENDER NOTECORE (MOBILE FLUTTER)
  // ==========================================
  if (isNotecore) {
    const isStory = activeScreen?.type === "story";
    const isArch = activeScreen?.type === "mobile-arch";

    return (
      <AnimatePresence>
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="relative z-10 w-full max-w-4xl max-h-[92vh] flex flex-col overflow-hidden rounded-2xl border border-[#DCE7F5] bg-white text-[#0F172A] shadow-2xl font-sans"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#DCE7F5] bg-white px-6 py-4">
              <div className="flex flex-wrap items-center gap-2.5">
                <img
                  src="/projects/notecore/logo.png"
                  alt="Notecore Logo"
                  className="h-7 w-7 object-contain rounded-lg border border-[#DCE7F5] bg-white p-0.5"
                />
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] tracking-tight">
                  Notecore
                </h3>
                <span className="rounded-full px-3 py-1 text-xs font-bold bg-[#1E88E5]/10 text-[#1E88E5] border border-[#1E88E5]/20">
                  Mobile App • Flutter &amp; Firebase
                </span>
                <span className="rounded-full px-2.5 py-0.5 text-xs font-bold bg-[#F1F5F9] text-[#475569] border border-[#DCE7F5]">
                  Graduação Dom Helder Câmara
                </span>
              </div>

              <button
                onClick={onClose}
                aria-label="Fechar modal"
                className="rounded-lg p-1.5 text-[#64748B] hover:text-[#0F172A] hover:bg-[#F8FAFC] border border-transparent hover:border-[#DCE7F5] transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Body */}
            <div className="overflow-y-auto p-6 space-y-6 bg-[#F4F8FD]">
              {/* Abas */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {project.gallery.map((screen, idx) => {
                  const isActive = activeScreenIndex === idx;
                  const screenTabLabel = screen.tabTitle || screen.tag || screen.title;

                  return (
                    <button
                      key={screen.id}
                      onClick={() => setActiveScreenIndex(idx)}
                      className={`flex items-center justify-center rounded-xl border py-2.5 px-3 text-center transition-all ${
                        isActive
                          ? "border-[#1E88E5] bg-[#1E88E5]/10 text-[#1E88E5] font-bold shadow-sm ring-1 ring-[#1E88E5]"
                          : "border-[#DCE7F5] bg-white text-[#475569] hover:text-[#0F172A] hover:bg-[#F8FAFC] font-medium"
                      }`}
                    >
                      <span className="text-xs sm:text-sm truncate">
                        {screenTabLabel}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Conteúdo */}
              {isStory ? (
                <div className="overflow-hidden rounded-2xl border border-[#DCE7F5] bg-white p-6 sm:p-8 shadow-sm space-y-5">
                  <div className="flex items-center gap-2.5 text-[#1E88E5]">
                    <div className="p-2 rounded-xl bg-[#1E88E5]/10">
                      <Sparkles className="h-5 w-5 text-[#1E88E5]" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1E88E5]">
                      Propósito &amp; Conceito
                    </span>
                  </div>

                  <h4 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] tracking-tight">
                    {activeScreen?.title || "Organização Visual de Notas Integrada ao Tempo"}
                  </h4>

                  <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[#475569]">
                    {activeScreen?.storyParagraphs?.map((paragraph, pIdx) => (
                      <p key={pIdx} className="text-[#0F172A]/85">
                        {paragraph}
                      </p>
                    )) || (
                      <>
                        <p className="text-[#0F172A]/85">
                          Desenvolvido como projeto final da disciplina de Desenvolvimento para Dispositivos Móveis na graduação em Ciência da Computação (Dom Helder Câmara).
                        </p>
                        <p className="text-[#0F172A]/85">
                          A proposta do Notecore foi unir a praticidade de um bloco de notas à clareza visual de uma agenda: em vez de uma lista infinita e desorganizada de textos, o usuário navega diretamente pelos dias do mês em um calendário dinâmico, atribuindo cores e lembretes para cada momento, com sincronização em tempo real na nuvem.
                        </p>
                      </>
                    )}
                  </div>
                </div>
              ) : isArch ? (
                <div className="space-y-4">
                  <div className="overflow-hidden rounded-2xl border border-[#DCE7F5] bg-white shadow-md p-6 sm:p-8 space-y-6">
                    <div className="flex items-center justify-between border-b border-[#DCE7F5] pb-4">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-[#1E88E5]">
                          Arquitetura de Software
                        </span>
                        <h4 className="text-xl font-bold text-[#0F172A] mt-1">
                          Stack Híbrida &amp; Nuvem em Tempo Real
                        </h4>
                      </div>
                      <span className="rounded-lg bg-[#1E88E5]/10 px-3 py-1 text-xs font-bold text-[#1E88E5] border border-[#1E88E5]/20">
                        Multiplataforma
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="rounded-xl border border-[#DCE7F5] bg-[#F8FAFC] p-4">
                        <h5 className="font-bold text-sm text-[#0F172A] flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-[#1E88E5]" />
                          Flutter &amp; Dart
                        </h5>
                        <p className="mt-2 text-xs text-[#475569] leading-relaxed">
                          Interface reativa com alta taxa de quadros (60/120 fps) e renderização nativa de componentes Material Design.
                        </p>
                      </div>

                      <div className="rounded-xl border border-[#DCE7F5] bg-[#F8FAFC] p-4">
                        <h5 className="font-bold text-sm text-[#0F172A] flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-[#FFA000]" />
                          Firebase Authentication
                        </h5>
                        <p className="mt-2 text-xs text-[#475569] leading-relaxed">
                          Gerenciamento de credenciais, sessão de login persistente e isolamento seguro de dados por usuário.
                        </p>
                      </div>

                      <div className="rounded-xl border border-[#DCE7F5] bg-[#F8FAFC] p-4">
                        <h5 className="font-bold text-sm text-[#0F172A] flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-[#F57C00]" />
                          Cloud Firestore (NoSQL)
                        </h5>
                        <p className="mt-2 text-xs text-[#475569] leading-relaxed">
                          Banco de dados NoSQL com sincronização em tempo real (listeners de snapshot) e suporte nativo a cache offline.
                        </p>
                      </div>

                      <div className="rounded-xl border border-[#DCE7F5] bg-[#F8FAFC] p-4">
                        <h5 className="font-bold text-sm text-[#0F172A] flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-[#059669]" />
                          Indexação Temporal &amp; Cores
                        </h5>
                        <p className="mt-2 text-xs text-[#475569] leading-relaxed">
                          Estrutura de dados organizada por ano-mês-dia com metadados de cor hexadecimal para categorização visual imediata.
                        </p>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-[#DCE7F5] space-y-4">
                      <div>
                        <span className="text-xs font-semibold text-[#64748B] block mb-2">
                          Ficha Técnica:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {[
                            "Flutter",
                            "Dart",
                            "Firebase Authentication",
                            "Cloud Firestore",
                            "Git / GitHub",
                          ].map((tech) => (
                            <span
                              key={tech}
                              className="rounded-lg bg-white px-3 py-1 text-xs font-medium text-[#0F172A] border border-[#DCE7F5] shadow-xs"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <span className="text-xs font-semibold text-[#64748B] block mb-2">
                          Equipe de Desenvolvimento:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {[
                            "Bryan Wille",
                            "Cauã Henrique",
                            "Nathan Marques",
                          ].map((member) => (
                            <span
                              key={member}
                              className="inline-flex items-center gap-1.5 rounded-lg bg-[#F4F8FD] px-3 py-1 text-xs font-semibold text-[#1E88E5] border border-[#DCE7F5]"
                            >
                              <span className="h-1.5 w-1.5 rounded-full bg-[#1E88E5]" />
                              {member}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border border-[#DCE7F5] bg-white p-4 shadow-sm">
                    <p className="text-sm font-bold text-[#0F172A]">
                      {activeScreen?.title}
                    </p>
                    <p className="mt-1 text-xs sm:text-sm text-[#475569] leading-relaxed">
                      {activeScreen?.caption}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="overflow-hidden rounded-2xl border border-[#DCE7F5] bg-white shadow-md">
                    <div className="flex items-center justify-between border-b border-[#DCE7F5] bg-[#F8FAFC] px-4 py-2.5">
                      <div className="flex items-center gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                        <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                      </div>
                      <div className="rounded-md px-3 py-0.5 text-xs font-medium text-[#475569] bg-white border border-[#DCE7F5]">
                        Notecore · Mobile Flutter
                      </div>
                      <span className="text-[11px] font-semibold text-[#1E88E5]">
                        {activeScreen?.tag}
                      </span>
                    </div>

                    <div className="p-4 sm:p-6 flex flex-col justify-center items-center bg-[#F8FAFC] min-h-[300px] sm:min-h-[420px]">
                      {activeScreen?.image ? (
                        <div className="overflow-hidden rounded-2xl border border-[#DCE7F5] shadow-lg bg-white max-w-sm">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={activeScreen.image}
                            alt={activeScreen.title}
                            className="w-full h-auto max-h-[500px] object-contain mx-auto"
                            loading="eager"
                          />
                        </div>
                      ) : (
                        <div className="p-8 text-center text-sm text-[#475569]">
                          {activeScreen?.title}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="rounded-xl border border-[#DCE7F5] bg-white p-4 shadow-sm">
                    <p className="text-sm font-bold text-[#0F172A]">
                      {activeScreen?.title}
                    </p>
                    <p className="mt-1 text-xs sm:text-sm text-[#475569] leading-relaxed">
                      {activeScreen?.caption}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Rodapé */}
            <div className="flex flex-col sm:flex-row items-center justify-between border-t border-[#DCE7F5] bg-white px-6 py-4 gap-3">
              <span className="text-xs text-[#64748B] hidden sm:inline">
                Graduação em Ciência da Computação • Dom Helder Câmara
              </span>

              <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto justify-end">
                <a
                  href="https://github.com/BryanWille/NOTECORE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1E88E5] hover:bg-[#1565C0] px-4 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-[#1E88E5]/25 transition-all flex-1 sm:flex-initial"
                >
                  <Github className="h-4 w-4" />
                  <span>Repositório no GitHub ↗</span>
                </a>

                <a
                  href="https://www.youtube.com/watch?v=EsYCQFwoYYU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#DCE7F5] bg-white px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#0F172A] hover:bg-[#F8FAFC] hover:border-[#1E88E5] transition-colors shadow-sm flex-1 sm:flex-initial"
                >
                  <Play className="h-4 w-4 text-[#1E88E5]" />
                  <span>Assistir Apresentação no YouTube ↗</span>
                </a>

                <button
                  onClick={onClose}
                  className="rounded-xl border border-[#DCE7F5] bg-white px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#64748B] hover:text-[#0F172A] hover:bg-[#F8FAFC] transition-colors shadow-sm"
                >
                  Fechar
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatePresence>
    );
  }

  // ==========================================
  // 3. RENDER MEDUSA BOT (IOT & VISÃO COMPUTACIONAL)
  // ==========================================
  if (isMedusa) {
    const isStory = activeScreen?.type === "story";
    const isTech = activeScreen?.type === "hardware-arch";

    return (
      <AnimatePresence>
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="relative z-10 w-full max-w-4xl max-h-[92vh] flex flex-col overflow-hidden rounded-2xl border border-[#D1EAEB] bg-white text-[#0F172A] shadow-2xl font-sans"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#D1EAEB] bg-white px-6 py-4">
              <div className="flex flex-wrap items-center gap-2.5">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] tracking-tight">
                  Medusa Bot
                </h3>
                <span className="rounded-full px-3 py-1 text-xs font-bold bg-[#00979D]/10 text-[#00979D] border border-[#00979D]/20">
                  IoT &amp; Visão Computacional • C++ &amp; ESP32
                </span>
                <span className="rounded-full px-2.5 py-0.5 text-xs font-bold bg-[#F1F5F9] text-[#475569] border border-[#D1EAEB]">
                  Hardware &amp; IA
                </span>
              </div>

              <button
                onClick={onClose}
                aria-label="Fechar modal"
                className="rounded-lg p-1.5 text-[#64748B] hover:text-[#0F172A] hover:bg-[#F8FAFC] border border-transparent hover:border-[#D1EAEB] transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Body */}
            <div className="overflow-y-auto p-6 space-y-6 bg-[#F2F9F9]">
              {/* Abas */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {project.gallery.map((screen, idx) => {
                  const isActive = activeScreenIndex === idx;
                  const screenTabLabel = screen.tabTitle || screen.tag || screen.title;

                  return (
                    <button
                      key={screen.id}
                      onClick={() => setActiveScreenIndex(idx)}
                      className={`flex items-center justify-center rounded-xl border py-2.5 px-3 text-center transition-all ${
                        isActive
                          ? "border-[#00979D] bg-[#00979D]/10 text-[#00979D] font-bold shadow-sm ring-1 ring-[#00979D]"
                          : "border-[#D1EAEB] bg-white text-[#475569] hover:text-[#0F172A] hover:bg-[#F8FAFC] font-medium"
                      }`}
                    >
                      <span className="text-xs sm:text-sm truncate">
                        {screenTabLabel}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Conteúdo */}
              {isStory ? (
                <div className="overflow-hidden rounded-2xl border border-[#D1EAEB] bg-white p-6 sm:p-8 shadow-sm space-y-5">
                  <div className="flex items-center gap-2.5 text-[#00979D]">
                    <div className="p-2 rounded-xl bg-[#00979D]/10">
                      <Sparkles className="h-5 w-5 text-[#00979D]" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#00979D]">
                      Propósito &amp; Inovação
                    </span>
                  </div>

                  <h4 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] tracking-tight">
                    {activeScreen?.title || "Indo Além do Básico com Hardware e Inteligência Artificial"}
                  </h4>

                  <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[#475569]">
                    {activeScreen?.storyParagraphs?.map((paragraph, pIdx) => (
                      <p key={pIdx} className="text-[#0F172A]/85">
                        {paragraph}
                      </p>
                    )) || (
                      <>
                        <p className="text-[#0F172A]/85">
                          A proposta original da faculdade era apenas construir um circuito simples de sensores com microcontrolador. Mas eu não queria entregar apenas o básico: tive a ideia de transformar o módulo em um sistema autônomo e interativo.
                        </p>
                        <p className="text-[#0F172A]/85">
                          Integrei o microcontrolador ESP32-CAM a um servo motor e APIs de nuvem. Ao receber um comando no Telegram, o robô rotaciona 90 graus, captura fotos reais do espaço, envia a imagem para o Google Vision identificar o que está presente na cena e traduz os rótulos em português na hora para o usuário.
                        </p>
                      </>
                    )}
                  </div>
                </div>
              ) : isTech ? (
                <div className="space-y-4">
                  <div className="overflow-hidden rounded-2xl border border-[#D1EAEB] bg-white shadow-md p-6 sm:p-8 space-y-6">
                    <div className="flex items-center justify-between border-b border-[#D1EAEB] pb-4">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-[#00979D]">
                          Engenharia de Baixo Nível
                        </span>
                        <h4 className="text-xl font-bold text-[#0F172A] mt-1">
                          Soluções Técnicas em C++ &amp; Embarcados
                        </h4>
                      </div>
                      <span className="rounded-lg bg-[#00979D]/10 px-3 py-1 text-xs font-bold text-[#00979D] border border-[#00979D]/20">
                        Firmware Nativo
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="rounded-xl border border-[#D1EAEB] bg-[#F8FAFC] p-4">
                        <h5 className="font-bold text-sm text-[#0F172A] flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-[#00979D]" />
                          Otimização de RAM no ESP32
                        </h5>
                        <p className="mt-2 text-xs text-[#475569] leading-relaxed">
                          Conversor manual de buffer JPEG para Base64 em C++ para contornar limitações severas de heap sem estourar a pilha de execução.
                        </p>
                      </div>

                      <div className="rounded-xl border border-[#D1EAEB] bg-[#F8FAFC] p-4">
                        <h5 className="font-bold text-sm text-[#0F172A] flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-[#0284C7]" />
                          Atuação Mecânica Servo SG90
                        </h5>
                        <p className="mt-2 text-xs text-[#475569] leading-relaxed">
                          Controle de rotação por modulação PWM que posiciona a lente em 90 graus para fotos panorâmicas antes do disparo do sensor.
                        </p>
                      </div>

                      <div className="rounded-xl border border-[#D1EAEB] bg-[#F8FAFC] p-4">
                        <h5 className="font-bold text-sm text-[#0F172A] flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-[#059669]" />
                          Google Cloud Vision API
                        </h5>
                        <p className="mt-2 text-xs text-[#475569] leading-relaxed">
                          Comunicação HTTPS direta para detecção de múltiplos rótulos na cena com tradução em tempo de execução para o idioma do usuário.
                        </p>
                      </div>

                      <div className="rounded-xl border border-[#D1EAEB] bg-[#F8FAFC] p-4">
                        <h5 className="font-bold text-sm text-[#0F172A] flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-[#F59E0B]" />
                          Telegram Bot Polling
                        </h5>
                        <p className="mt-2 text-xs text-[#475569] leading-relaxed">
                          Recepção contínua do comando /photo com envio instantâneo do frame compactado e das tags de IA devolvidas ao chat.
                        </p>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-[#D1EAEB] space-y-4">
                      <div>
                        <span className="text-xs font-semibold text-[#64748B] block mb-2">
                          Ficha Técnica:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {[
                            "C++",
                            "Arduino IDE",
                            "ESP32-CAM",
                            "Servo Motor SG90",
                            "Google Cloud Vision API",
                            "Telegram Bot API",
                          ].map((tech) => (
                            <span
                              key={tech}
                              className="rounded-lg bg-white px-3 py-1 text-xs font-medium text-[#0F172A] border border-[#D1EAEB] shadow-xs"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <span className="text-xs font-semibold text-[#64748B] block mb-2">
                          Desenvolvedor:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          <span className="inline-flex items-center gap-1.5 rounded-lg bg-[#F2F9F9] px-3 py-1 text-xs font-semibold text-[#00979D] border border-[#D1EAEB]">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#00979D]" />
                            Bryan Wille
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border border-[#D1EAEB] bg-white p-4 shadow-sm">
                    <p className="text-sm font-bold text-[#0F172A]">
                      {activeScreen?.title}
                    </p>
                    <p className="mt-1 text-xs sm:text-sm text-[#475569] leading-relaxed">
                      {activeScreen?.caption}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="overflow-hidden rounded-2xl border border-[#D1EAEB] bg-white shadow-md">
                    <div className="flex items-center justify-between border-b border-[#D1EAEB] bg-[#F8FAFC] px-4 py-2.5">
                      <div className="flex items-center gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                        <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                      </div>
                      <div className="rounded-md px-3 py-0.5 text-xs font-medium text-[#475569] bg-white border border-[#D1EAEB]">
                        Medusa Bot · C++ &amp; ESP32-CAM
                      </div>
                      <span className="text-[11px] font-semibold text-[#00979D]">
                        {activeScreen?.tag}
                      </span>
                    </div>

                    <div className="p-4 sm:p-6 flex flex-col justify-center items-center bg-[#F8FAFC] min-h-[300px] sm:min-h-[420px]">
                      {activeScreen?.image ? (
                        <div className="overflow-hidden rounded-2xl border border-[#D1EAEB] shadow-lg bg-white max-w-md">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={activeScreen.image}
                            alt={activeScreen.title}
                            className="w-full h-auto max-h-[500px] object-contain mx-auto"
                            loading="eager"
                          />
                        </div>
                      ) : (
                        <div className="p-8 text-center text-sm text-[#475569]">
                          {activeScreen?.title}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="rounded-xl border border-[#D1EAEB] bg-white p-4 shadow-sm">
                    <p className="text-sm font-bold text-[#0F172A]">
                      {activeScreen?.title}
                    </p>
                    <p className="mt-1 text-xs sm:text-sm text-[#475569] leading-relaxed">
                      {activeScreen?.caption}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Rodapé */}
            <div className="flex flex-col sm:flex-row items-center justify-between border-t border-[#D1EAEB] bg-white px-6 py-4 gap-3">
              <span className="text-xs text-[#64748B] hidden sm:inline">
                Sistemas Embarcados &amp; Visão Computacional • C++ &amp; ESP32
              </span>

              <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto justify-end">
                <a
                  href="https://github.com/BryanWille/medusa-bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#00979D] hover:bg-[#006F74] px-4 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-[#00979D]/25 transition-all flex-1 sm:flex-initial"
                >
                  <Github className="h-4 w-4" />
                  <span>Repositório no GitHub ↗</span>
                </a>

                <button
                  onClick={onClose}
                  className="rounded-xl border border-[#D1EAEB] bg-white px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#64748B] hover:text-[#0F172A] hover:bg-[#F8FAFC] transition-colors shadow-sm"
                >
                  Fechar
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatePresence>
    );
  }

  // ==========================================
  // 3.5. RENDER PRESP (DESKTOP & STATISTICAL ENGINE)
  // ==========================================
  if (isPresp) {
    const isStory = activeScreen?.type === "story";
    const isTech = activeScreen?.type === "desktop-arch";

    return (
      <AnimatePresence>
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="relative z-10 w-full max-w-4xl max-h-[92vh] flex flex-col overflow-hidden rounded-2xl border border-[#D8E2ED] bg-white text-[#0F172A] shadow-2xl font-sans"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#D8E2ED] bg-white px-6 py-4">
              <div className="flex flex-wrap items-center gap-2.5">
                <img
                  src="/projects/presp/logo.png"
                  alt="Presp Logo"
                  className="h-7 w-7 object-contain"
                />
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] tracking-tight">
                  Presp
                </h3>
                <span className="rounded-full px-3 py-1 text-xs font-bold bg-[#007396]/10 text-[#007396] border border-[#007396]/20">
                  Desktop Software (Java)
                </span>
                <span className="rounded-full px-2.5 py-0.5 text-xs font-bold bg-[#F1F5F9] text-[#475569] border border-[#D8E2ED]">
                  Estatística &amp; POO
                </span>
              </div>

              <button
                onClick={onClose}
                aria-label="Fechar modal"
                className="rounded-lg p-1.5 text-[#64748B] hover:text-[#0F172A] hover:bg-[#F8FAFC] border border-transparent hover:border-[#D8E2ED] transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Body */}
            <div className="overflow-y-auto p-6 space-y-6 bg-[#F4F7FB]">
              {/* Abas */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {project.gallery.map((screen, idx) => {
                  const isActive = activeScreenIndex === idx;
                  const screenTabLabel = screen.tabTitle || screen.tag || screen.title;

                  return (
                    <button
                      key={screen.id}
                      onClick={() => setActiveScreenIndex(idx)}
                      className={`flex items-center justify-center rounded-xl border py-2.5 px-3 text-center transition-all ${
                        isActive
                          ? "border-[#007396] bg-[#007396]/10 text-[#007396] font-bold shadow-sm ring-1 ring-[#007396]"
                          : "border-[#D8E2ED] bg-white text-[#475569] hover:text-[#0F172A] hover:bg-[#F8FAFC] font-medium"
                      }`}
                    >
                      <span className="text-xs sm:text-sm truncate">
                        {screenTabLabel}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Conteúdo */}
              {isStory ? (
                <div className="overflow-hidden rounded-2xl border border-[#D8E2ED] bg-white p-6 sm:p-8 shadow-sm space-y-6">
                  <div className="flex items-center gap-2.5 text-[#007396]">
                    <div className="p-2 rounded-xl bg-[#007396]/10">
                      <Sparkles className="h-5 w-5 text-[#007396]" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#007396]">
                      O Problema &amp; A Ideia
                    </span>
                  </div>

                  <h4 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] tracking-tight">
                    Por que desenvolvemos o Presp?
                  </h4>

                  <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[#475569]">
                    <p className="text-[#0F172A]/85">
                      Durante as aulas práticas de probabilidade e estatística, calcular manualmente distribuições de frequência, separatrizes e desvios para conjuntos com centenas de dados brutos era extremamente lento e suscetível a erros de arredondamento.
                    </p>
                    <p className="text-[#0F172A]/85">
                      Para resolver esse gargalo operacional, desenvolvemos o Presp: uma aplicação desktop robusta em Java puro que faz toda a ingestão, ordenação, geração de classes e cálculo de métricas estatísticas em milissegundos, com confiabilidade matemática absoluta e sem exigir internet ou APIs de IA.
                    </p>
                  </div>

                  {/* 3 Pilares do Projeto */}
                  <div className="pt-2 border-t border-[#D8E2ED] space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#64748B] block">
                      3 Pilares do Projeto
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="rounded-xl border border-[#D8E2ED] bg-[#F8FAFC] p-4 space-y-1.5">
                        <div className="flex items-center gap-2 text-xs font-bold text-[#007396]">
                          <span className="h-2 w-2 rounded-full bg-[#007396]" />
                          Zero Alucinações
                        </div>
                        <p className="text-xs text-[#475569] leading-relaxed">
                          100% Determinístico: cálculos exatos baseados em fórmulas consagradas (Sturges, variância e desvio padrão amostral e populacional).
                        </p>
                      </div>

                      <div className="rounded-xl border border-[#D8E2ED] bg-[#F8FAFC] p-4 space-y-1.5">
                        <div className="flex items-center gap-2 text-xs font-bold text-[#E74C3C]">
                          <span className="h-2 w-2 rounded-full bg-[#E74C3C]" />
                          Processamento Instantâneo
                        </div>
                        <p className="text-xs text-[#475569] leading-relaxed">
                          Ingestão de vetores de dados com centenas de registros em rol, ordenação rápida e agrupamento em classes contínuas ou discretas.
                        </p>
                      </div>

                      <div className="rounded-xl border border-[#D8E2ED] bg-[#F8FAFC] p-4 space-y-1.5">
                        <div className="flex items-center gap-2 text-xs font-bold text-[#F59E0B]">
                          <span className="h-2 w-2 rounded-full bg-[#F59E0B]" />
                          Multiplataforma Nativo
                        </div>
                        <p className="text-xs text-[#475569] leading-relaxed">
                          Independência de SO via JVM. Executável nativamente em Windows, Linux e macOS sem necessidade de dependências complexas.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : isTech ? (
                <div className="space-y-4">
                  <div className="overflow-hidden rounded-2xl border border-[#D8E2ED] bg-white shadow-md p-6 sm:p-8 space-y-6">
                    <div className="flex items-center justify-between border-b border-[#D8E2ED] pb-4">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-[#007396]">
                          Engenharia &amp; POO
                        </span>
                        <h4 className="text-xl font-bold text-[#0F172A] mt-1">
                          Arquitetura Modular e Boas Práticas em Java
                        </h4>
                      </div>
                      <span className="rounded-lg bg-[#007396]/10 px-3 py-1 text-xs font-bold text-[#007396] border border-[#007396]/20">
                        Java SE &amp; Swing
                      </span>
                    </div>

                    <p className="text-sm text-[#475569] leading-relaxed">
                      Separação estrita de responsabilidades entre a camada de lógica matemática (cálculos de separatrizes, quartis, decis e percentis) e a interface gráfica desenvolvida em Java Swing.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="rounded-xl border border-[#D8E2ED] bg-[#F8FAFC] p-4">
                        <h5 className="font-bold text-sm text-[#0F172A] flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-[#007396]" />
                          Java Swing &amp; Desktop GUI
                        </h5>
                        <p className="mt-2 text-xs text-[#475569] leading-relaxed">
                          Interface gráfica desktop tradicional projetada com componentes nativos, formulários de validação e renderização de tabela com paginação visual.
                        </p>
                      </div>

                      <div className="rounded-xl border border-[#D8E2ED] bg-[#F8FAFC] p-4">
                        <h5 className="font-bold text-sm text-[#0F172A] flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-[#E74C3C]" />
                          Algoritmo de Sturges &amp; Dispersão
                        </h5>
                        <p className="mt-2 text-xs text-[#475569] leading-relaxed">
                          Cálculo automatizado do número ótimo de classes (k = 1 + 3.322 log N) e determinação precisa da amplitude h para agrupamento dos intervalos.
                        </p>
                      </div>

                      <div className="rounded-xl border border-[#D8E2ED] bg-[#F8FAFC] p-4">
                        <h5 className="font-bold text-sm text-[#0F172A] flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-[#F59E0B]" />
                          Parser Flexível de Arquivos
                        </h5>
                        <p className="mt-2 text-xs text-[#475569] leading-relaxed">
                          Leitura robusta de arquivos .txt suportando delimitadores por quebra de linha ou espaço, com alternância dinâmica entre ponto e vírgula decimal.
                        </p>
                      </div>

                      <div className="rounded-xl border border-[#D8E2ED] bg-[#F8FAFC] p-4">
                        <h5 className="font-bold text-sm text-[#0F172A] flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-[#059669]" />
                          POO &amp; Tipagem Estática
                        </h5>
                        <p className="mt-2 text-xs text-[#475569] leading-relaxed">
                          Estrutura de dados tipada e orientada a objetos (classes Rol, ClasseEstatistica, Separatrizes) garantindo código reutilizável e manutenível.
                        </p>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-[#D8E2ED] space-y-4">
                      <div>
                        <span className="text-xs font-semibold text-[#64748B] block mb-2">
                          Ficha Técnica:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {[
                            "Java",
                            "Java Swing (GUI)",
                            "Leitura e Parse de Arquivos (.txt)",
                            "Programação Orientada a Objetos (POO)",
                            "Estatística Descritiva",
                          ].map((tech) => (
                            <span
                              key={tech}
                              className="rounded-lg bg-white px-3 py-1 text-xs font-medium text-[#0F172A] border border-[#D8E2ED] shadow-xs"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <span className="text-xs font-semibold text-[#64748B] block mb-2">
                          Desenvolvedores:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {["Bryan Wille Souto Braga", "Pedro Gabriel Sad Rabelo"].map((dev) => (
                            <span
                              key={dev}
                              className="inline-flex items-center gap-1.5 rounded-lg bg-[#F4F7FB] px-3 py-1 text-xs font-semibold text-[#007396] border border-[#D8E2ED]"
                            >
                              <span className="h-1.5 w-1.5 rounded-full bg-[#007396]" />
                              {dev}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border border-[#D8E2ED] bg-white p-4 shadow-sm">
                    <p className="text-sm font-bold text-[#0F172A]">
                      {activeScreen?.title}
                    </p>
                    <p className="mt-1 text-xs sm:text-sm text-[#475569] leading-relaxed">
                      {activeScreen?.caption}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="overflow-hidden rounded-2xl border border-[#D8E2ED] bg-white shadow-md">
                    <div className="flex items-center justify-between border-b border-[#D8E2ED] bg-[#F8FAFC] px-4 py-2.5">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1.5">
                          <span className="h-2.5 w-2.5 rounded-full bg-[#E74C3C]" />
                          <span className="h-2.5 w-2.5 rounded-full bg-[#F59E0B]" />
                          <span className="h-2.5 w-2.5 rounded-full bg-[#0284C7]" />
                        </div>
                        <span className="text-xs font-mono text-[#64748B]">
                          {activeScreen?.title}
                        </span>
                      </div>
                      <span className="rounded bg-[#007396]/10 px-2 py-0.5 text-[11px] font-bold text-[#007396]">
                        {activeScreen?.tag}
                      </span>
                    </div>

                    <div className="p-3 sm:p-5 flex items-center justify-center bg-[#F8FAFC]">
                      <img
                        src={activeScreen?.image}
                        alt={activeScreen?.title}
                        className="max-h-[460px] w-auto max-w-full rounded-xl border border-[#D8E2ED] object-contain shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="rounded-xl border border-[#D8E2ED] bg-white p-4 shadow-sm">
                    <p className="text-sm font-bold text-[#0F172A]">
                      {activeScreen?.title}
                    </p>
                    <p className="mt-1 text-xs sm:text-sm text-[#475569] leading-relaxed">
                      {activeScreen?.caption}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between border-t border-[#D8E2ED] bg-white px-6 py-4">
              <div className="text-xs text-[#64748B] flex items-center gap-2">
                <span>Calculadora Estatística Desktop em Java</span>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto justify-end">
                <button
                  onClick={onClose}
                  className="rounded-xl border border-[#D8E2ED] bg-white px-6 py-2.5 text-xs sm:text-sm font-semibold text-[#64748B] hover:text-[#0F172A] hover:bg-[#F8FAFC] transition-colors shadow-sm"
                >
                  Fechar
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatePresence>
    );
  }

  // ==========================================
  // 3.6. RENDER AWS CLOUD OPTIMIZATION (SERVERLESS & S3)
  // ==========================================
  if (isAws) {
    const isStory = activeScreen?.type === "story";
    const isTech = activeScreen?.type === "cloud-arch";

    return (
      <AnimatePresence>
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="relative z-10 w-full max-w-4xl max-h-[92vh] flex flex-col overflow-hidden rounded-2xl border border-[#F2DEC8] bg-white text-[#0F172A] shadow-2xl font-sans"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#F2DEC8] bg-white px-6 py-4">
              <div className="flex flex-wrap items-center gap-2.5">
                <img
                  src="/projects/aws-s3/lambda.png"
                  alt="AWS Lambda Logo"
                  className="h-7 w-7 object-contain rounded-lg border border-[#F2DEC8] bg-[#FFF8F2] p-0.5"
                />
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] tracking-tight">
                  Otimização Serverless AWS
                </h3>
                <span className="rounded-full px-3 py-1 text-xs font-bold bg-[#FF9900]/12 text-[#D97706] border border-[#FF9900]/25">
                  Cloud &amp; Serverless • AWS S3 &amp; Lambda
                </span>
                <span className="rounded-full px-2.5 py-0.5 text-xs font-bold bg-[#F1F5F9] text-[#232F3E] border border-[#E2E8F0]">
                  Case Corporativo • Loja do Sapo
                </span>
              </div>

              <button
                onClick={onClose}
                aria-label="Fechar modal"
                className="rounded-lg p-1.5 text-[#64748B] hover:text-[#0F172A] hover:bg-[#F8FAFC] border border-transparent hover:border-[#F2DEC8] transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Body */}
            <div className="overflow-y-auto p-6 space-y-6 bg-[#FFF8F2]">
              {/* Abas */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {project.gallery.map((screen, idx) => {
                  const isActive = activeScreenIndex === idx;
                  const screenTabLabel = screen.tabTitle || screen.tag || screen.title;

                  return (
                    <button
                      key={screen.id}
                      onClick={() => setActiveScreenIndex(idx)}
                      className={`flex items-center justify-center rounded-xl border py-2.5 px-3 text-center transition-all ${
                        isActive
                          ? "border-[#FF9900] bg-[#FF9900]/15 text-[#D97706] font-bold shadow-sm ring-1 ring-[#FF9900]"
                          : "border-[#F2DEC8] bg-white text-[#475569] hover:text-[#0F172A] hover:bg-[#FFFBF7] font-medium"
                      }`}
                    >
                      <span className="text-xs sm:text-sm truncate">
                        {screenTabLabel}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Conteúdo */}
              {isStory ? (
                <div className="overflow-hidden rounded-2xl border border-[#F2DEC8] bg-white p-6 sm:p-8 shadow-sm space-y-6">
                  <div className="flex items-center gap-2.5 text-[#D97706]">
                    <div className="p-2 rounded-xl bg-[#FF9900]/15">
                      <Sparkles className="h-5 w-5 text-[#D97706]" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#D97706]">
                      O Problema &amp; A Ideia
                    </span>
                  </div>

                  <h4 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] tracking-tight">
                    Resolvendo Gargalo de Custo e Armazenamento em Nuvem
                  </h4>

                  <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[#475569]">
                    <p className="text-[#0F172A]/85">
                      Na Loja do Sapo, as fotos dos checklists técnicos dos aparelhos estavam consumindo grande parte da franquia de armazenamento do ERP (Zoho), elevando os custos de operação.
                    </p>
                    <p className="text-[#0F172A]/85">
                      Para resolver isso de forma escalável e econômica, desenhamos e implementamos uma solução serverless na AWS: integramos o Zoho a uma função Lambda em Python que faz o download da imagem via requisição HTTP, compacta o arquivo com a biblioteca Pillow (PIL) reduzindo peso sem perder legibilidade e persiste com segurança em um bucket S3, atualizando o link de volta no ERP.
                    </p>
                  </div>

                  {/* 3 Pilares do Projeto */}
                  <div className="pt-2 border-t border-[#F2DEC8] space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#64748B] block">
                      3 Pilares do Case
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="rounded-xl border border-[#F2DEC8] bg-[#FFFBF7] p-4 space-y-1.5">
                        <div className="flex items-center gap-2 text-xs font-bold text-[#D97706]">
                          <span className="h-2 w-2 rounded-full bg-[#FF9900]" />
                          Economia de Escala
                        </div>
                        <p className="text-xs text-[#475569] leading-relaxed">
                          Redução de até 87,89% no consumo de storage do ERP Zoho, evitando upgrades onerosos de licença com alto custo fixo.
                        </p>
                      </div>

                      <div className="rounded-xl border border-[#F2DEC8] bg-[#FFFBF7] p-4 space-y-1.5">
                        <div className="flex items-center gap-2 text-xs font-bold text-[#232F3E]">
                          <span className="h-2 w-2 rounded-full bg-[#232F3E]" />
                          Serverless Sob Demanda
                        </div>
                        <p className="text-xs text-[#475569] leading-relaxed">
                          Função AWS Lambda acionada via eventos em milissegundos, com custo computacional nulo quando ociosa.
                        </p>
                      </div>

                      <div className="rounded-xl border border-[#F2DEC8] bg-[#FFFBF7] p-4 space-y-1.5">
                        <div className="flex items-center gap-2 text-xs font-bold text-[#059669]">
                          <span className="h-2 w-2 rounded-full bg-[#10B981]" />
                          Ciclo de Vida Inteligente
                        </div>
                        <p className="text-xs text-[#475569] leading-relaxed">
                          Retenção garantida no S3 com durabilidade 99.999999999% e rotina de exclusão local no ERP após 14 dias de backup.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : isTech ? (
                <div className="space-y-4">
                  <div className="overflow-hidden rounded-2xl border border-[#F2DEC8] bg-white shadow-md p-6 sm:p-8 space-y-6">
                    <div className="flex items-center justify-between border-b border-[#F2DEC8] pb-4">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-[#D97706]">
                          Engenharia &amp; Stack
                        </span>
                        <h4 className="text-xl font-bold text-[#0F172A] mt-1">
                          Arquitetura Orientada a Eventos
                        </h4>
                      </div>
                      <span className="rounded-lg bg-[#FF9900]/15 px-3 py-1 text-xs font-bold text-[#D97706] border border-[#FF9900]/25">
                        Serverless AWS
                      </span>
                    </div>

                    <p className="text-sm text-[#475569] leading-relaxed">
                      Automação em Python utilizando boto3 para integração nativa com S3, tratamento de exceções para falhas de rede com flag de status no ERP e conversor sob medida para tráfego seguro de arquivos.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="rounded-xl border border-[#F2DEC8] bg-[#FFFBF7] p-4">
                        <h5 className="font-bold text-sm text-[#0F172A] flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-[#FF9900]" />
                          AWS Lambda &amp; Python
                        </h5>
                        <p className="mt-2 text-xs text-[#475569] leading-relaxed">
                          Execução serverless acionada sob demanda via webhook do ERP, garantindo processamento rápido e desacoplado.
                        </p>
                      </div>

                      <div className="rounded-xl border border-[#F2DEC8] bg-[#FFFBF7] p-4">
                        <h5 className="font-bold text-sm text-[#0F172A] flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-[#232F3E]" />
                          Amazon S3 &amp; Retenção
                        </h5>
                        <p className="mt-2 text-xs text-[#475569] leading-relaxed">
                          Armazenamento de alta durabilidade com verificação automática de duplicação e ciclo de vida de expiração.
                        </p>
                      </div>

                      <div className="rounded-xl border border-[#F2DEC8] bg-[#FFFBF7] p-4">
                        <h5 className="font-bold text-sm text-[#0F172A] flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-[#10B981]" />
                          Compressão Pillow (PIL)
                        </h5>
                        <p className="mt-2 text-xs text-[#475569] leading-relaxed">
                          Redução de até 87,89% no tamanho dos arquivos de imagem mantendo excelente legibilidade para laudos técnicos.
                        </p>
                      </div>

                      <div className="rounded-xl border border-[#F2DEC8] bg-[#FFFBF7] p-4">
                        <h5 className="font-bold text-sm text-[#0F172A] flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-[#0284C7]" />
                          Integração Zoho Creator API
                        </h5>
                        <p className="mt-2 text-xs text-[#475569] leading-relaxed">
                          Tratamento de exceções, fallback de status para falhas de rede e atualização instantânea de links de visualização.
                        </p>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-[#F2DEC8] space-y-4">
                      <div>
                        <span className="text-xs font-semibold text-[#64748B] block mb-2">
                          Ficha Técnica:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {[
                            "AWS Lambda",
                            "Amazon S3",
                            "Python",
                            "Boto3",
                            "Pillow (PIL)",
                            "Zoho Creator API",
                            "Amazon CloudWatch",
                          ].map((tech) => (
                            <span
                              key={tech}
                              className="rounded-lg bg-white px-3 py-1 text-xs font-medium text-[#0F172A] border border-[#F2DEC8] shadow-xs"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <span className="text-xs font-semibold text-[#64748B] block mb-2">
                          Equipe de Desenvolvimento:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {["Bryan Wille", "Nathan Marques", "Victor Assis de Oliveira"].map((dev) => (
                            <span
                              key={dev}
                              className="inline-flex items-center gap-1.5 rounded-lg bg-[#FFF8F2] px-3 py-1 text-xs font-semibold text-[#D97706] border border-[#F2DEC8]"
                            >
                              <span className="h-1.5 w-1.5 rounded-full bg-[#FF9900]" />
                              {dev}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border border-[#F2DEC8] bg-white p-4 shadow-sm">
                    <p className="text-sm font-bold text-[#0F172A]">
                      {activeScreen?.title}
                    </p>
                    <p className="mt-1 text-xs sm:text-sm text-[#475569] leading-relaxed">
                      {activeScreen?.caption}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="overflow-hidden rounded-2xl border border-[#F2DEC8] bg-white shadow-md">
                    <div className="flex items-center justify-between border-b border-[#F2DEC8] bg-[#FFFBF7] px-4 py-2.5">
                      <div className="flex items-center gap-2">
                        <span className="flex h-2 w-2 rounded-full bg-[#10B981]" />
                        <span className="text-xs font-mono text-[#64748B]">
                          {activeScreen?.title}
                        </span>
                      </div>
                      <span className="rounded bg-[#FF9900]/15 px-2 py-0.5 text-[11px] font-bold text-[#D97706]">
                        {activeScreen?.tag}
                      </span>
                    </div>

                    <div className="p-3 sm:p-5 flex items-center justify-center bg-[#FFF8F2]">
                      <img
                        src={activeScreen?.image}
                        alt={activeScreen?.title}
                        className="max-h-[480px] w-auto max-w-full rounded-xl border border-[#F2DEC8] object-contain shadow-sm bg-white"
                      />
                    </div>
                  </div>

                  <div className="rounded-xl border border-[#F2DEC8] bg-white p-4 shadow-sm">
                    <p className="text-sm font-bold text-[#0F172A]">
                      {activeScreen?.title}
                    </p>
                    <p className="mt-1 text-xs sm:text-sm text-[#475569] leading-relaxed">
                      {activeScreen?.caption}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="flex flex-col sm:flex-row items-center justify-between border-t border-[#F2DEC8] bg-white px-6 py-4 gap-3">
              <span className="text-xs text-[#64748B] hidden sm:inline">
                Case de Otimização em Nuvem • Loja do Sapo
              </span>

              <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto justify-end">
                <a
                  href="https://lnkd.in/p/dQy-vb3i"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#FF9900] hover:bg-[#E67E00] px-4 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-[#FF9900]/25 transition-all flex-1 sm:flex-initial"
                >
                  <span>Ver Post no LinkedIn ↗</span>
                </a>

                <button
                  onClick={onClose}
                  className="rounded-xl border border-[#F2DEC8] bg-white px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#64748B] hover:text-[#0F172A] hover:bg-[#FFFBF7] transition-colors shadow-sm"
                >
                  Fechar
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatePresence>
    );
  }

  // ==========================================
  // 4. RENDER BOOKIE (EDTECH / SSR)
  // ==========================================
  if (isBookie) {
    const isStory = activeScreen?.type === "story";

    return (
      <AnimatePresence>
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="relative z-10 w-full max-w-4xl max-h-[92vh] flex flex-col overflow-hidden rounded-2xl border border-[#DED4C7] bg-[#FFFCF7] text-[#302720] shadow-2xl font-sans"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#DED4C7] bg-[#FFFCF7] px-6 py-4">
              <div className="flex items-center gap-3">
                <img
                  src="/projects/bookie/logo.png"
                  alt="Bookie Logo"
                  className="h-7 w-7 object-contain rounded-full border border-[#DED4C7]"
                />
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#302720] tracking-tight">
                  Bookie
                </h3>
                <span className="rounded-full px-3 py-1 text-xs font-semibold bg-[#F3E2D6] text-[#9C452B] border border-[#9C452B]/20">
                  SaaS • Gestão Literária &amp; Reflexões
                </span>
              </div>

              <button
                onClick={onClose}
                aria-label="Fechar modal"
                className="rounded-lg p-1.5 text-[#74675C] hover:text-[#302720] hover:bg-[#F6F1E9] border border-transparent hover:border-[#DED4C7] transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Body */}
            <div className="overflow-y-auto p-6 space-y-6 bg-[#F6F1E9]">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {project.gallery.map((screen, idx) => {
                  const isActive = activeScreenIndex === idx;
                  const screenTabLabel = screen.tabTitle || screen.tag || screen.title;

                  return (
                    <button
                      key={screen.id}
                      onClick={() => setActiveScreenIndex(idx)}
                      className={`flex items-center justify-center rounded-xl border py-2.5 px-3 text-center transition-all ${
                        isActive
                          ? "border-[#9C452B] bg-[#F3E2D6] text-[#9C452B] font-bold shadow-sm ring-1 ring-[#9C452B]"
                          : "border-[#DED4C7] bg-[#FFFCF7] text-[#74675C] hover:text-[#302720] hover:bg-white hover:border-[#DED4C7] font-medium"
                      }`}
                    >
                      <span className="text-xs sm:text-sm truncate">
                        {screenTabLabel}
                      </span>
                    </button>
                  );
                })}
              </div>

              {isStory ? (
                <div className="overflow-hidden rounded-2xl border border-[#DED4C7] bg-white p-6 sm:p-8 shadow-sm space-y-5">
                  <div className="flex items-center gap-2.5 text-[#9C452B]">
                    <div className="p-2 rounded-xl bg-[#F3E2D6]">
                      <Sparkles className="h-5 w-5 text-[#9C452B]" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#9C452B]">
                      A História por Trás
                    </span>
                  </div>

                  <h4 className="text-xl sm:text-2xl font-extrabold text-[#302720] tracking-tight">
                    {activeScreen?.title || "Por que decidi criar o Bookie?"}
                  </h4>

                  <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[#74675C]">
                    {activeScreen?.storyParagraphs?.map((paragraph, pIdx) => (
                      <p key={pIdx} className="text-[#302720]/85">
                        {paragraph}
                      </p>
                    )) || (
                      <>
                        <p className="text-[#302720]/85">
                          Eu sempre tive o hábito de ler livros de não-ficção, tecnologia e filosofia, mas sentia uma frustração constante: semanas após terminar uma leitura marcante, grande parte dos conceitos e citações acabava esquecida ou perdida em notas esparsas no celular.
                        </p>
                        <p className="text-[#302720]/85">
                          Para resolver minha própria dor, criei o Bookie. Em vez de uma rede social barulhenta com avaliações de terceiros, construí um refúgio pessoal de leitura com editor Markdown completo, sistema de tags reflexivas e sorteador aleatório de passagens para fixação do conhecimento ao longo do ano.
                        </p>
                      </>
                    )}
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="overflow-hidden rounded-2xl border border-[#DED4C7] bg-white shadow-md">
                    <div className="flex items-center justify-between border-b border-[#DED4C7] bg-[#FFFCF7] px-4 py-2.5">
                      <div className="flex items-center gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                        <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                      </div>
                      <div className="rounded-md px-3 py-0.5 text-xs font-medium text-[#74675C] bg-[#F6F1E9] border border-[#DED4C7]">
                        bookie-lib.netlify.app
                      </div>
                      <span className="text-[11px] font-semibold text-[#9C452B]">
                        {activeScreen?.tag}
                      </span>
                    </div>

                    <div className="p-3 sm:p-5 flex flex-col justify-center items-center bg-[#F6F1E9] min-h-[260px] sm:min-h-[340px]">
                      {activeScreen?.image ? (
                        <div className="w-full overflow-hidden rounded-xl border border-[#DED4C7] shadow-md bg-white">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={activeScreen.image}
                            alt={activeScreen.title}
                            className="w-full h-auto max-h-[460px] object-contain mx-auto"
                            loading="eager"
                          />
                        </div>
                      ) : (
                        <div className="p-8 text-center text-sm text-[#74675C]">
                          {activeScreen?.title}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="rounded-xl border border-[#DED4C7] bg-white p-4 shadow-sm">
                    <p className="text-sm font-bold text-[#302720]">
                      {activeScreen?.title}
                    </p>
                    <p className="mt-1 text-xs sm:text-sm text-[#74675C] leading-relaxed">
                      {activeScreen?.caption}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Rodapé */}
            <div className="flex items-center justify-between border-t border-[#DED4C7] bg-[#FFFCF7] px-6 py-4">
              <span className="text-xs text-[#74675C] hidden sm:inline">
                SaaS em produção contínua
              </span>

              <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                {project.isLive && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#9C452B] hover:bg-[#7E3722] px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-[#9C452B]/25 transition-all flex-1 sm:flex-initial"
                  >
                    <Globe className="h-4 w-4" />
                    <span>Acessar Projeto ao Vivo ↗</span>
                  </a>
                )}

                <button
                  onClick={onClose}
                  className="rounded-xl border border-[#DED4C7] bg-[#FFFCF7] px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#302720] hover:bg-[#F6F1E9] hover:border-[#9C452B]/40 transition-colors shadow-sm"
                >
                  Fechar
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatePresence>
    );
  }

  // ==========================================
  // 5. RENDER NOOBIE (FINTECH SAAS)
  // ==========================================
  if (isNoobie) {
    const isStory = activeScreen?.type === "story";

    return (
      <AnimatePresence>
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="relative z-10 w-full max-w-4xl max-h-[92vh] flex flex-col overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white text-[#14171F] shadow-2xl font-sans"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#E2E8F0] bg-white px-6 py-4">
              <div className="flex items-center gap-3">
                <img
                  src="/projects/noobie/logo.png"
                  alt="Noobie App Icon"
                  className="h-8 w-8 sm:h-9 sm:w-9 rounded-xl border border-[#FF5B00]/30 shadow-sm object-contain bg-black flex-shrink-0"
                />
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#14171F] tracking-tight">
                  Noobie
                </h3>
                <span className="rounded-full px-3 py-1 text-xs font-semibold bg-[rgba(255,91,0,0.10)] text-[#FF5B00] border border-[#FF5B00]/20">
                  Gestão Financeira &amp; Patrimônio
                </span>
              </div>

              <button
                onClick={onClose}
                aria-label="Fechar modal"
                className="rounded-lg p-1.5 text-[#64748B] hover:text-[#14171F] hover:bg-[#F6F8FA] border border-transparent hover:border-[#E2E8F0] transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Body */}
            <div className="overflow-y-auto p-6 space-y-6 bg-[#F0F2F6]">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {project.gallery.map((screen, idx) => {
                  const isActive = activeScreenIndex === idx;
                  const screenTabLabel = screen.tabTitle || screen.tag || screen.title;

                  return (
                    <button
                      key={screen.id}
                      onClick={() => setActiveScreenIndex(idx)}
                      className={`flex items-center justify-center rounded-xl border py-2.5 px-3 text-center transition-all ${
                        isActive
                          ? "border-[#FF5B00] bg-[rgba(255,91,0,0.06)] text-[#FF5B00] font-bold shadow-sm ring-1 ring-[#FF5B00]"
                          : "border-[#E2E8F0] bg-white text-[#64748B] hover:text-[#14171F] hover:bg-[#F6F8FA] hover:border-[#CBD5E1] font-medium"
                      }`}
                    >
                      <span className="text-xs sm:text-sm truncate">
                        {screenTabLabel}
                      </span>
                    </button>
                  );
                })}
              </div>

              {isStory ? (
                <div className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white p-6 sm:p-8 shadow-sm space-y-5">
                  <div className="flex items-center gap-2.5 text-[#FF5B00]">
                    <div className="p-2 rounded-xl bg-[rgba(255,91,0,0.10)]">
                      <Sparkles className="h-5 w-5 text-[#FF5B00]" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#FF5B00]">
                      A História por Trás
                    </span>
                  </div>

                  <h4 className="text-xl sm:text-2xl font-extrabold text-[#14171F] tracking-tight">
                    {activeScreen?.title || "Por que decidi criar o Noobie?"}
                  </h4>

                  <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[#64748B]">
                    {activeScreen?.storyParagraphs?.map((paragraph, pIdx) => (
                      <p key={pIdx} className="text-[#14171F]/85">
                        {paragraph}
                      </p>
                    )) || (
                      <>
                        <p className="text-[#14171F]/85">
                          Eu tinha muita dificuldade em manter o controle financeiro apenas anotando gastos em planilhas manuais. Era trabalhoso registrar tudo no dia a dia, e eu nunca tinha clareza real de quanto ainda podia gastar ou de onde estava vazando dinheiro.
                        </p>
                        <p className="text-[#14171F]/85">
                          Em vez de aceitar o problema, resolvi usar tecnologia e Ciência de Dados/BI na prática: construí uma aplicação web integrada para facilitar o lançamento diário de gastos e gerar dashboards inteligentes com métricas preditivas, calculando exatamente o meu saldo livre real por dia.
                        </p>
                      </>
                    )}
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-md">
                    <div className="flex items-center justify-between border-b border-[#E2E8F0] bg-[#F8FAFC] px-4 py-2.5">
                      <div className="flex items-center gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                        <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                      </div>
                      <div className="rounded-md px-3 py-0.5 text-xs font-medium text-[#64748B] bg-white border border-[#E2E8F0]">
                        noobiefin.netlify.app
                      </div>
                      <span className="text-[11px] font-semibold text-[#FF5B00]">
                        {activeScreen?.tag}
                      </span>
                    </div>

                    <div className="p-3 sm:p-5 flex flex-col justify-center items-center bg-[#F8FAFC] min-h-[260px] sm:min-h-[340px]">
                      {activeScreen?.image ? (
                        <div className="w-full overflow-hidden rounded-xl border border-[#E2E8F0] shadow-md bg-white">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={activeScreen.image}
                            alt={activeScreen.title}
                            className="w-full h-auto max-h-[460px] object-contain mx-auto"
                            loading="eager"
                          />
                        </div>
                      ) : (
                        <div className="p-8 text-center text-sm text-[#64748B]">
                          {activeScreen?.title}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="rounded-xl border border-[#E2E8F0] bg-white p-4 shadow-sm">
                    <p className="text-sm font-bold text-[#14171F]">
                      {activeScreen?.title}
                    </p>
                    <p className="mt-1 text-xs sm:text-sm text-[#64748B] leading-relaxed">
                      {activeScreen?.caption}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Rodapé */}
            <div className="flex items-center justify-between border-t border-[#E2E8F0] bg-white px-6 py-4">
              <span className="text-xs text-[#94A3B8] hidden sm:inline">
                SaaS em produção contínua
              </span>

              <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                {project.isLive && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#FF5B00] hover:bg-[#E04E00] px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-[#FF5B00]/25 transition-all flex-1 sm:flex-initial"
                  >
                    <Globe className="h-4 w-4" />
                    <span>Acessar Projeto ao Vivo ↗</span>
                  </a>
                )}

                <button
                  onClick={onClose}
                  className="rounded-xl border border-[#E2E8F0] bg-white px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#14171F] hover:bg-[#F6F8FA] hover:border-[#CBD5E1] transition-colors shadow-sm"
                >
                  Fechar
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatePresence>
    );
  }

  // ==========================================
  // 6. FALLBACK GENÉRICO
  // ==========================================
  const isDark = project.theme?.isDark;
  const theme = project.theme || {};

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className={`relative z-10 w-full max-w-4xl max-h-[92vh] flex flex-col overflow-hidden rounded-2xl border shadow-2xl ${
            isDark
              ? "bg-[#090A0F] border-[#181A22] text-[#F8FAFC]"
              : "bg-white border-neutral-200 text-neutral-900"
          }`}
        >
          <div
            className={`flex items-center justify-between border-b px-6 py-4 ${
              isDark
                ? "bg-[#111218] border-[#181A22]"
                : "bg-neutral-50 border-neutral-200"
            }`}
          >
            <div className="flex items-center gap-3">
              <span
                className={`rounded-md px-2.5 py-1 text-xs font-bold ${
                  isDark
                    ? "bg-emerald-500/15 text-[#10B981]"
                    : `${theme.badgeBg || "bg-emerald-100"} ${theme.badgeText || "text-emerald-800"}`
                }`}
              >
                {project.status}
              </span>
              <h3 className={`text-xl font-bold ${isDark ? "text-[#F8FAFC]" : "text-neutral-900"}`}>
                {project.name}
              </h3>
            </div>

            <button
              onClick={onClose}
              aria-label="Fechar modal"
              className={`rounded-lg p-1.5 transition-colors ${
                isDark
                  ? "border border-[#2E323E] bg-[#1A1C24] text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#252834]"
                  : "border border-neutral-200 bg-white text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900"
              }`}
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="overflow-y-auto p-6 space-y-6">
            {project.gallery && project.gallery.length > 0 && (
              <div className="space-y-3">
                <div className="overflow-hidden rounded-xl border border-neutral-200 bg-neutral-900 text-white shadow-inner">
                  <div className="p-3 sm:p-5 flex justify-center items-center">
                    {activeScreen?.image ? (
                      <img
                        src={activeScreen.image}
                        alt={activeScreen.title}
                        className="w-full h-auto max-h-[460px] object-contain mx-auto rounded-lg"
                      />
                    ) : (
                      <div className="p-6 text-center text-xs text-neutral-400">
                        {activeScreen?.title}
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2.5 pt-1">
                  {project.gallery.map((screen, idx) => (
                    <button
                      key={screen.id}
                      onClick={() => setActiveScreenIndex(idx)}
                      className={`flex flex-col items-start rounded-xl border p-2.5 text-left transition-all ${
                        activeScreenIndex === idx
                          ? "border-[#FF5B00] bg-orange-50/60 shadow-sm ring-1 ring-[#FF5B00] text-neutral-900"
                          : "border-neutral-200 bg-white hover:bg-neutral-50 text-neutral-700"
                      }`}
                    >
                      <span className="text-xs font-semibold line-clamp-1">
                        {screen.title}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 border-t px-6 py-4 border-neutral-200 bg-[#FAFAFA]">
            <div className="flex items-center gap-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-300 bg-white px-3.5 py-2 text-xs font-medium text-neutral-800 hover:border-neutral-900"
                >
                  <Github className="h-3.5 w-3.5" />
                  <span>GitHub</span>
                </a>
              )}
            </div>

            <div className="flex items-center gap-2">
              {project.isLive && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#FF5B00] hover:bg-[#E04E00] px-4 py-2 text-xs font-bold text-white shadow-sm"
                >
                  <Globe className="h-3.5 w-3.5" />
                  <span>Acessar Projeto ↗</span>
                </a>
              )}
              <button
                onClick={onClose}
                className="rounded-lg border border-neutral-300 bg-white px-4 py-2 text-xs font-medium text-neutral-700 hover:bg-neutral-100"
              >
                Fechar
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
