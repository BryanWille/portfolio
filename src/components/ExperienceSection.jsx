"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  Users,
  TrendingUp,
  Cloud,
  Globe2,
  Plus,
  X,
  ExternalLink,
} from "lucide-react";
import HorizontalTimeline from "@/components/HorizontalTimeline";

export default function ExperienceSection({ id = "trajetoria" }) {
  const [selectedMetric, setSelectedMetric] = useState(null);

  // Fechar modal ao pressionar tecla ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedMetric(null);
    };
    if (selectedMetric) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedMetric]);

  const metrics = [
    {
      id: "lideranca",
      icon: Users,
      highlight: "Líder Técnico",
      badgeColor: "text-blue-700 bg-blue-50 border-blue-200",
      modalTitle: "Líder Técnico na Deloitte",
      description:
        "Atuo na Deloitte com uma equipe de Salesforce na operação de atendimento de uma das maiores varejistas de moda do Brasil. Responsável pela arquitetura de código, qualidade das entregas e resolução de problemas.",
    },
    {
      id: "tma",
      icon: TrendingUp,
      highlight: "-20% no TMA",
      badgeColor: "text-emerald-700 bg-emerald-50 border-emerald-200",
      modalTitle: "-20% no TMA (Tempo Médio de Atendimento)",
      description:
        "Desenvolvimento e implementação in loco de sistema CSC na Deloitte, gerando uma redução comprovada de 20% no Tempo Médio de Atendimento da operação.",
    },
    {
      id: "cloud",
      icon: Cloud,
      highlight: "-87,89% Armazenamento",
      badgeColor: "text-amber-700 bg-amber-50 border-amber-200",
      modalTitle: "-87,89% em Custo & Armazenamento Cloud",
      description:
        "Arquitetura serverless desenvolvida na AWS (Lambda + S3 com biblioteca Pillow em Python) que reduziu em quase 88% o custo e volume de imagens no ERP Zoho da Loja do Sapo.",
    },
    {
      id: "ingles",
      icon: Globe2,
      highlight: "Inglês C1 Avançado",
      badgeColor: "text-indigo-700 bg-indigo-50 border-indigo-200",
      modalTitle: "Inglês C1 Avançado (EF SET Certified)",
      description:
        "Certificação oficial EF SET (Proficiência Eficaz C1), com fluência conversacional para alinhamentos técnicos e condução de projetos com stakeholders e clientes internacionais.",
    },
  ];

  return (
    <section
      id={id}
      className="scroll-mt-16 border-b border-neutral-200/80 bg-[#FAFAFA] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho & Introdução Direta com Link Estendido */}
        <div className="mb-10 max-w-3xl">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-700 border border-blue-200/60 mb-3">
            <Briefcase className="h-3.5 w-3.5" />
            <span>Autoridade &amp; Impacto</span>
          </span>

          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A]">
            Liderança técnica e resultados comprovados.
          </h2>

          <p className="mt-3 text-base sm:text-lg text-[#475569] leading-relaxed">
            Atuo na{" "}
            <a
              href="https://www.deloitte.com/global/en/about/recognition/analyst-relations/deloitte-ranked-number-one-consulting-service-provider-worldwide-by-revenue.html"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-blue-700 underline decoration-blue-300 underline-offset-4 hover:text-blue-900 transition-colors"
            >
              Deloitte
            </a>{" "}
            com uma equipe de Salesforce na operação de atendimento de uma das maiores varejistas de moda do Brasil. Responsável pela arquitetura de código, qualidade das entregas e resolução de problemas.
          </p>
        </div>

        {/* 4 Cards de Métricas Ultra-Enxutos (Apenas Métrica + Indicador de Clique) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((card, idx) => {
            const IconComponent = card.icon;

            return (
              <motion.button
                key={card.id}
                type="button"
                onClick={() => setSelectedMetric(card)}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-xs hover:border-slate-300 hover:shadow-md hover:scale-[1.02] transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                aria-label={`Ver detalhes de ${card.highlight}`}
              >
                {/* Linha superior: Ícone sutil + indicador discreto de clique */}
                <div className="flex items-center justify-between w-full">
                  <div
                    className={`h-9 w-9 rounded-xl border flex items-center justify-center ${card.badgeColor}`}
                  >
                    <IconComponent className="h-4 w-4" />
                  </div>

                  <span className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-semibold text-slate-400 group-hover:text-blue-600 group-hover:bg-blue-50 transition-colors">
                    <span>Detalhes</span>
                    <Plus className="h-3 w-3 stroke-[2.5]" />
                  </span>
                </div>

                {/* Métrica em Destaque (Sem subtítulo poluído) */}
                <div className="mt-4">
                  <h3 className="text-xl font-extrabold text-[#0F172A] tracking-tight group-hover:text-blue-700 transition-colors">
                    {card.highlight}
                  </h3>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Linha do Tempo Horizontal Interativa sob demanda */}
        <HorizontalTimeline />
      </div>

      {/* Modal Interativo da Métrica */}
      <AnimatePresence>
        {selectedMetric && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop com blur suave */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedMetric(null)}
              className="fixed inset-0 bg-neutral-900/40 backdrop-blur-xs"
            />

            {/* Conteúdo do Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 8 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="relative w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl z-10"
              role="dialog"
              aria-modal="true"
            >
              {/* Botão fechar (X) */}
              <button
                type="button"
                onClick={() => setSelectedMetric(null)}
                className="absolute top-4 right-4 rounded-xl p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Fechar"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Cabeçalho do Modal */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`h-11 w-11 rounded-xl border flex items-center justify-center shrink-0 ${selectedMetric.badgeColor}`}
                >
                  <selectedMetric.icon className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Métrica de Impacto
                  </span>
                  <h3 className="text-xl font-extrabold text-[#0F172A] leading-tight">
                    {selectedMetric.highlight}
                  </h3>
                </div>
              </div>

              {/* Descrição Detalhada */}
              <div className="rounded-xl bg-slate-50 border border-slate-100 p-4 mt-2">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {selectedMetric.description}
                </p>
              </div>

              {/* Botão de Fechar no rodapé */}
              <div className="mt-6 flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedMetric(null)}
                  className="rounded-xl bg-slate-900 px-5 py-2 text-sm font-semibold text-white shadow-xs hover:bg-slate-800 transition-colors"
                >
                  Fechar
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
