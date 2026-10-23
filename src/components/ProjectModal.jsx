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
  const activeScreen =
    project.gallery && project.gallery[activeScreenIndex]
      ? project.gallery[activeScreenIndex]
      : null;

  // Render simplificado e limpo em Modo Claro Oficial para o Bookie
  if (isBookie) {
    const isStory = activeScreen?.type === "story";

    return (
      <AnimatePresence>
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop com blur sutil */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
          />

          {/* Modal Container: Modo Claro #FFFCF7 com borda #DED4C7 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="relative z-10 w-full max-w-4xl max-h-[92vh] flex flex-col overflow-hidden rounded-2xl border border-[#DED4C7] bg-[#FFFCF7] text-[#302720] shadow-2xl font-sans"
          >
            {/* Cabeçalho Enxuto */}
            <div className="flex items-center justify-between border-b border-[#DED4C7] bg-[#FFFCF7] px-6 py-4">
              <div className="flex items-center gap-3">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#302720] tracking-tight">
                  Bookie
                </h3>
                <span className="rounded-full px-3 py-1 text-xs font-semibold bg-[#F3E2D6] text-[#9C452B] border border-[#9C452B]/20">
                  SaaS • Gestão Literária &amp; Reflexões
                </span>
              </div>

              {/* Botão de fechar (X) */}
              <button
                onClick={onClose}
                aria-label="Fechar modal"
                className="rounded-lg p-1.5 text-[#74675C] hover:text-[#302720] hover:bg-[#F6F1E9] border border-transparent hover:border-[#DED4C7] transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto p-6 space-y-6 bg-[#F6F1E9]">
              {/* Navegação por Abas Limpas (Apenas títulos curtos, sem duplicação de texto) */}
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

              {/* Conteúdo Principal da Aba Selecionada */}
              {isStory ? (
                /* Aba 1: História / Por que criei o Bookie */
                <div className="overflow-hidden rounded-2xl border border-[#DED4C7] bg-[#FFFCF7] p-6 sm:p-8 shadow-sm space-y-5">
                  <div className="flex items-center gap-2.5 text-[#9C452B]">
                    <div className="p-2 rounded-xl bg-[#F3E2D6]">
                      <BookOpen className="h-5 w-5 text-[#9C452B]" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider">
                      O Problema &amp; A Ideia
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
                          Eu sempre tive o hábito de ler com frequência, mas com o passar do tempo percebia um problema frustrante: acabava esquecendo partes fundamentais do conteúdo ou tinha enorme dificuldade para consultar anotações antigas.
                        </p>
                        <p className="text-[#302720]/85">
                          Criei o Bookie para ser o meu segundo cérebro literário: um espaço limpo onde catalogo minha estante, salvo trechos marcantes enquanto leio e mantenho cadernos de reflexão estruturados para fixar o aprendizado de cada obra.
                        </p>
                      </>
                    )}
                  </div>
                </div>
              ) : (
                /* Abas 2, 3 e 4: Prints em Moldura Limpa de Navegador */
                <div className="space-y-4">
                  {/* Moldura de Janela Minimalista */}
                  <div className="overflow-hidden rounded-2xl border border-[#DED4C7] bg-[#FFFCF7] shadow-md">
                    {/* Barra de Janela */}
                    <div className="flex items-center justify-between border-b border-[#DED4C7] bg-[#F6F1E9] px-4 py-2.5">
                      <div className="flex items-center gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                        <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                      </div>
                      <div className="rounded-md px-3 py-0.5 text-xs font-medium text-[#74675C] bg-[#FFFCF7] border border-[#DED4C7]">
                        {project.url}
                      </div>
                      <span className="text-[11px] font-semibold text-[#9C452B]">
                        {activeScreen?.tag}
                      </span>
                    </div>

                    {/* Exibição da Imagem com fundo limpo */}
                    <div className="p-3 sm:p-5 flex flex-col justify-center items-center bg-[#F6F1E9]/60 min-h-[260px] sm:min-h-[340px]">
                      {activeScreen?.image ? (
                        <div className="w-full overflow-hidden rounded-xl border border-[#DED4C7] shadow-md bg-[#FFFCF7]">
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

                  {/* Card Explicativo com Título e Descrição (Apenas aqui, sem redundância nas miniaturas) */}
                  <div className="rounded-xl border border-[#DED4C7] bg-[#FFFCF7] p-4 shadow-sm">
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

            {/* Rodapé de Ações: Apenas "Acessar Projeto ao Vivo" e "Fechar" */}
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

  // Render simplificado e limpo em Modo Claro Oficial para o Noobie
  if (isNoobie) {
    const isStory = activeScreen?.type === "story";

    return (
      <AnimatePresence>
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop com blur sutil */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
          />

          {/* Modal Container: Modo Claro #FFFFFF com borda #E2E8F0 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="relative z-10 w-full max-w-4xl max-h-[92vh] flex flex-col overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white text-[#14171F] shadow-2xl font-sans"
          >
            {/* Cabeçalho Enxuto */}
            <div className="flex items-center justify-between border-b border-[#E2E8F0] bg-white px-6 py-4">
              <div className="flex items-center gap-3">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#14171F] tracking-tight">
                  Noobie
                </h3>
                <span className="rounded-full px-3 py-1 text-xs font-semibold bg-[rgba(255,91,0,0.10)] text-[#FF5B00] border border-[#FF5B00]/20">
                  Gestão Financeira &amp; Patrimônio
                </span>
              </div>

              {/* Botão de fechar (X) discreto em cinza neutro */}
              <button
                onClick={onClose}
                aria-label="Fechar modal"
                className="rounded-lg p-1.5 text-[#64748B] hover:text-[#14171F] hover:bg-[#F6F8FA] border border-transparent hover:border-[#E2E8F0] transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto p-6 space-y-6 bg-[#F0F2F6]">
              {/* Navegação por Abas Limpas (Apenas títulos curtos, sem duplicação de texto) */}
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

              {/* Conteúdo Principal da Aba Selecionada */}
              {isStory ? (
                /* Aba 1: História / Por que criei o Noobie */
                <div className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white p-6 sm:p-8 shadow-sm space-y-5">
                  <div className="flex items-center gap-2.5 text-[#FF5B00]">
                    <div className="p-2 rounded-xl bg-[rgba(255,91,0,0.10)]">
                      <Sparkles className="h-5 w-5 text-[#FF5B00]" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider">
                      O Problema &amp; A Ideia
                    </span>
                  </div>

                  <h4 className="text-xl sm:text-2xl font-extrabold text-[#14171F] tracking-tight">
                    {activeScreen?.title || "Por que decidi criar o Noobie?"}
                  </h4>

                  <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[#64748B]">
                    {activeScreen?.storyParagraphs?.map((paragraph, pIdx) => (
                      <p key={pIdx} className="text-[#14171F]/80">
                        {paragraph}
                      </p>
                    )) || (
                      <>
                        <p className="text-[#14171F]/80">
                          Eu tinha muita dificuldade em manter o controle financeiro apenas anotando gastos em planilhas manuais. Era trabalhoso registrar tudo no dia a dia, e eu nunca tinha clareza real de quanto ainda podia gastar ou de onde estava vazando dinheiro.
                        </p>
                        <p className="text-[#14171F]/80">
                          Em vez de aceitar o problema, resolvi usar tecnologia e Ciência de Dados/BI na prática: construí uma aplicação web integrada para facilitar o lançamento diário de gastos e gerar dashboards inteligentes com métricas preditivas, calculando exatamente o meu saldo livre real por dia.
                        </p>
                      </>
                    )}
                  </div>
                </div>
              ) : (
                /* Abas 2, 3 e 4: Prints em Moldura Leve de Navegador */
                <div className="space-y-4">
                  {/* Moldura de Janela Minimalista */}
                  <div className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-md">
                    {/* Barra de Janela */}
                    <div className="flex items-center justify-between border-b border-[#E2E8F0] bg-[#F8FAFC] px-4 py-2.5">
                      <div className="flex items-center gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                        <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                      </div>
                      <div className="rounded-md px-3 py-0.5 text-xs font-medium text-[#64748B] bg-white border border-[#E2E8F0]">
                        {project.url}
                      </div>
                      <span className="text-[11px] font-semibold text-[#FF5B00]">
                        {activeScreen?.tag}
                      </span>
                    </div>

                    {/* Exibição da Imagem com fundo limpo */}
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

                  {/* Card Explicativo com Título e Descrição (Apenas aqui, sem redundância nas miniaturas) */}
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

            {/* Rodapé de Ações: Apenas "Acessar Projeto ao Vivo" e "Fechar" */}
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

  // Fallback padrão para outros projetos da plataforma (mantendo compatibilidade)
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

