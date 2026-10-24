"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  CheckCircle2,
  X,
  Info,
} from "lucide-react";

export const ganttStages = [
  {
    id: "iobh",
    company: "IOBH",
    fullName: "IOBH (Instituto de Olhos de Belo Horizonte)",
    role: "Suporte de TI & Desenvolvimento Interno",
    period: "Jan 2022 – Out 2022",
    yearsSpan: "2022",
    isCurrent: false,
    left: "0%",
    width: "16.5%",
    colorBg: "bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-200",
    activeColor: "ring-2 ring-slate-400 bg-slate-200 text-slate-900",
    badgeLabel: "IOBH",
    details:
      "Criação de ferramenta desktop em C# para relatórios operacionais, rotinas em SQL Server e suporte de infraestrutura.",
    achievements: [
      "Desenvolvimento de aplicação desktop interna em C# / .NET para extração e consolidação de relatórios de produtividade.",
      "Elaboração e manutenção de queries em banco de dados SQL Server para sistemas médicos.",
      "Sustentação de infraestrutura de TI, redes internas, Active Directory, DHCP e VPN corporativa.",
    ],
    tags: ["C# / .NET", "SQL Server", "Infraestrutura de TI", "Active Directory"],
  },
  {
    id: "loja-do-sapo",
    company: "Loja do Sapo",
    fullName: "Loja do Sapo",
    role: "Desenvolvedor Full-Stack (Evolução de Estágio a Dev)",
    period: "Out 2022 – Jan 2024",
    yearsSpan: "2022 – 2024",
    isCurrent: false,
    left: "16.5%",
    width: "23.5%",
    colorBg: "bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-200",
    activeColor: "ring-2 ring-amber-400 bg-amber-50 text-amber-950 border-amber-300",
    badgeLabel: "Loja do Sapo",
    details:
      "Integração ERP Zoho + Omie, automações em Python e arquitetura serverless em AWS Lambda + S3 reduzindo em 87,89% o armazenamento de checklists.",
    achievements: [
      "Arquitetura serverless (AWS Lambda + S3 em Python Pillow) gerando redução de 87,89% no custo de armazenamento de imagens.",
      "Integração bidirecional do Zoho Creator com ERP Omie e gateways, automatizando ordens de serviço.",
      "Scripts de automação em JavaScript (Google Apps Script) e dashboards gerenciais no Google Looker Studio.",
    ],
    tags: [
      "AWS (Lambda & S3)",
      "Python",
      "Zoho Creator",
      "ERP Omie",
      "JavaScript",
      "APIs REST",
    ],
  },
  {
    id: "deloitte",
    company: "Deloitte",
    fullName: "Deloitte Touche Tohmatsu Limited",
    role: "Líder Técnico Salesforce & Analista de Sistemas Pleno III",
    period: "Jan 2024 – Presente (Ativo)",
    yearsSpan: "2024 – Presente",
    isCurrent: true,
    left: "40%",
    width: "60%",
    colorBg:
      "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-blue-500 shadow-xs",
    activeColor: "ring-4 ring-blue-200 shadow-sm",
    badgeLabel: "Deloitte",
    details:
      "Atuo na Deloitte com uma equipe de Salesforce na operação de atendimento de uma das maiores varejistas de moda do Brasil. Responsável pela arquitetura de código, qualidade das entregas e resolução de problemas.",
    achievements: [
      "Atuação com equipe técnica de Salesforce na operação de atendimento de grande varejista de moda nacional.",
      "Responsável direto pela arquitetura de código, qualidade técnica das entregas e resolução de problemas complexos.",
      "Desenvolvimento avançado de Lightning Web Components (LWC), automações em Apex e integrações via APIs REST.",
      "Redução comprovada de 20% no Tempo Médio de Atendimento (TMA) com sistema CSC implantado in loco.",
      "Condução técnica de reuniões, alinhamentos e apresentações em inglês com stakeholders internacionais.",
    ],
    tags: [
      "Liderança Técnica",
      "Arquitetura de Software",
      "Salesforce (LWC / Apex)",
      "APIs REST",
      "Redução de TMA",
      "Scrum",
      "Inglês C1",
    ],
  },
];

const yearHeaders = [
  { label: "2022", width: "20%" },
  { label: "2023", width: "20%" },
  { label: "2024", width: "20%" },
  { label: "2025", width: "20%" },
  { label: "2026", width: "20%" },
];

export default function HorizontalTimeline() {
  const [selectedId, setSelectedId] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);

  const activeStage = ganttStages.find((s) => s.id === selectedId);
  const hoveredStage = ganttStages.find((s) => s.id === hoveredId);

  const handleToggle = (id) => {
    setSelectedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="mt-12 rounded-2xl border border-[#E2E8F0] bg-white p-5 sm:p-7 shadow-xs">
      {/* Cabeçalho Limpo: Apenas "Cronologia de Carreira" */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-5 border-b border-slate-100">
        <h3 className="text-lg sm:text-xl font-extrabold text-[#0F172A] tracking-tight">
          Cronologia de Carreira
        </h3>

        {/* Indicador de interação */}
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <Info className="h-3.5 w-3.5 text-blue-600" />
          <span>Clique em qualquer barra para abrir detalhes</span>
        </div>
      </div>

      {/* Grid Gantt 100% Fluido (Sem Scrollbar) */}
      <div className="w-full pt-4 pb-2">
        {/* Eixo Superior de Anos */}
        <div className="flex items-center text-xs font-bold text-slate-500 pb-3 border-b border-slate-200">
          {/* Coluna da legenda à esquerda */}
          <div className="w-28 sm:w-36 md:w-44 shrink-0 pl-1 text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
            Empresa / Cargo
          </div>

          {/* Régua de Anos */}
          <div className="flex-1 flex relative">
            {yearHeaders.map((year) => (
              <div
                key={year.label}
                style={{ width: year.width }}
                className="text-left pl-1 sm:pl-2 font-mono text-[11px] sm:text-xs text-slate-600"
              >
                <span className="bg-slate-100 px-1.5 sm:px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-bold text-slate-700">
                  {year.label}
                </span>
              </div>
            ))}

            {/* Marco do Presente */}
            <div className="absolute right-0 top-0 flex items-center gap-1 -translate-y-0.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[10px] sm:text-[11px] font-extrabold uppercase text-emerald-700 bg-emerald-50 px-1.5 sm:px-2 py-0.5 rounded border border-emerald-200/60">
                Presente
              </span>
            </div>
          </div>
        </div>

        {/* Linhas de Duração com Linhas de Grade Verticais no Fundo */}
        <div className="relative pt-4 space-y-4">
          {/* Guias verticais pontilhadas exatamente dentro da área das linhas (sem overflow) */}
          <div className="absolute inset-0 pl-28 sm:pl-36 md:pl-44 pointer-events-none -z-0 flex">
            {yearHeaders.map((year) => (
              <div
                key={year.label}
                style={{ width: year.width }}
                className="h-full border-l border-dashed border-slate-200"
              />
            ))}
            <div className="h-full border-r border-dashed border-slate-200" />
          </div>

          {/* As 3 Linhas em Cascata */}
          {ganttStages.map((stage) => {
            const isSelected = selectedId === stage.id;
            const isHovered = hoveredId === stage.id;

            return (
              <div
                key={stage.id}
                className="flex items-center group cursor-pointer relative z-10"
                onClick={() => handleToggle(stage.id)}
                onMouseEnter={() => setHoveredId(stage.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Coluna da Empresa à Esquerda */}
                <div className="w-28 sm:w-36 md:w-44 shrink-0 pr-2 sm:pr-3">
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`text-xs sm:text-sm font-extrabold transition-colors ${
                        isSelected
                          ? "text-blue-700"
                          : "text-[#0F172A] group-hover:text-blue-600"
                      }`}
                    >
                      {stage.company}
                    </span>
                    {stage.isCurrent && (
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
                    )}
                  </div>
                  <span className="block text-[10px] sm:text-[11px] text-slate-500 truncate">
                    {stage.yearsSpan}
                  </span>
                </div>

                {/* Trilha Horizontal com a Barra */}
                <div className="flex-1 relative h-10 flex items-center">
                  <div className="absolute inset-x-0 h-px bg-slate-100/80 -z-10" />

                  <motion.div
                    style={{
                      left: stage.left,
                      width: stage.width,
                    }}
                    initial={false}
                    animate={{
                      scale: isHovered || isSelected ? 1.015 : 1,
                    }}
                    transition={{ duration: 0.15 }}
                    className={`absolute h-8 rounded-xl border flex items-center justify-between px-2.5 sm:px-3 text-xs font-semibold cursor-pointer transition-all duration-200 ${
                      stage.colorBg
                    } ${isSelected ? stage.activeColor : ""}`}
                  >
                    <span className="truncate pr-1 text-[11px] sm:text-xs">
                      {stage.badgeLabel}
                    </span>

                    {stage.isCurrent ? (
                      <span className="inline-flex items-center gap-1 shrink-0 rounded-full bg-white/20 px-1.5 py-0.5 text-[9px] sm:text-[10px] font-bold text-white tracking-wide">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 animate-pulse" />
                        <span>Ativo</span>
                      </span>
                    ) : (
                      <span className="text-[10px] opacity-75 shrink-0 hidden sm:inline">
                        {stage.period.split("–")[1]?.trim() || stage.period}
                      </span>
                    )}
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Resumo Rápido Flutuante ao Passar o Mouse */}
      <div className="min-h-[28px] mt-2 flex items-center justify-between text-xs text-slate-500 border-t border-slate-100 pt-3">
        {hoveredStage ? (
          <div className="flex items-center gap-2 truncate">
            <span className="font-bold text-[#0F172A]">
              {hoveredStage.company}:
            </span>
            <span className="text-slate-700 truncate">{hoveredStage.role}</span>
            <span className="text-slate-400 shrink-0">({hoveredStage.period})</span>
          </div>
        ) : (
          <span className="text-slate-400 italic">
            Passe o mouse para prévia ou clique para abrir detalhes.
          </span>
        )}

        {selectedId && (
          <button
            type="button"
            onClick={() => setSelectedId(null)}
            className="text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors shrink-0"
          >
            Ocultar detalhes
          </button>
        )}
      </div>

      {/* Gaveta Retrátil com os Detalhes da Experiência */}
      <AnimatePresence mode="wait">
        {activeStage && (
          <motion.div
            key={activeStage.id}
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: 16 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-slate-200/80 pt-5"
          >
            <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-5 sm:p-6 relative">
              <button
                type="button"
                onClick={() => setSelectedId(null)}
                className="absolute top-4 right-4 rounded-lg p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
                aria-label="Fechar detalhes"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="flex flex-wrap items-center gap-2 mb-2 pr-8">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100/80 px-2.5 py-0.5 text-xs font-bold text-blue-800">
                  <Calendar className="h-3 w-3" />
                  {activeStage.period}
                </span>

                <span className="text-sm font-semibold text-slate-600">
                  {activeStage.fullName}
                </span>

                {activeStage.isCurrent && (
                  <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[11px] font-bold text-emerald-800">
                    Posição Atual
                  </span>
                )}
              </div>

              <h4 className="text-lg sm:text-xl font-extrabold text-[#0F172A] mb-2">
                {activeStage.role}
              </h4>

              <p className="text-sm text-slate-700 leading-relaxed mb-4">
                {activeStage.details}
              </p>

              <div className="space-y-2 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Responsabilidades &amp; Impacto:
                </span>
                <div className="grid grid-cols-1 gap-2 pt-1">
                  {activeStage.achievements.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-xs sm:text-sm text-slate-600"
                    >
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  Stack &amp; Competências:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeStage.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-700 shadow-2xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
