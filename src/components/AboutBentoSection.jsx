"use client";

import React from "react";
import {
  ShieldCheck,
  TrendingDown,
  GraduationCap,
  Lock,
  Building2,
  Check,
  X,
} from "lucide-react";

const comparisonRows = [
  {
    commonMarket: "Templates pesados e vulneráveis",
    engineeringStandard: "Código sob medida, rápido e com segurança nativa.",
  },
  {
    commonMarket: "Automações e integrações frágeis",
    engineeringStandard:
      "Arquitetura corporativa estável com redução real de custos.",
  },
  {
    commonMarket: "Atrasos e sumiço na comunicação",
    engineeringStandard:
      "Postura de liderança técnica: escopo claro, transparência e prazos cumpridos.",
  },
];

export default function AboutBentoSection({ id = "autoridade" }) {
  return (
    <section
      id={id}
      className="scroll-mt-16 bg-[#FAFAFA] py-20 sm:py-24 border-b border-slate-200/80 relative overflow-hidden"
    >
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* 1. CABEÇALHO DA SEÇÃO */}
        <div className="mb-12 max-w-3xl">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800 border border-emerald-200/70 mb-3">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>DIFERENCIAL DE ENGENHARIA</span>
          </span>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Por que confiar a tecnologia da sua empresa{" "}
            <span className="text-emerald-700">a mim?</span>
          </h2>

          <p className="mt-3 text-base sm:text-lg text-[#475569] leading-relaxed">
            Porque aplico no seu negócio o mesmo padrão que uso em consultoria global e no meio acadêmico: código limpo, foco em segurança e arquitetura pensada para a sua empresa crescer sem dores de cabeça.
          </p>
        </div>

        {/* 2. BENTO GRID DE CREDENCIAIS (ASSIMETRIA MODERNA) */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {/* Card 1: Ocupa 2 colunas — Destaque Liderança Deloitte */}
          <div className="md:col-span-2 lg:col-span-2 rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs hover:shadow-md hover:border-blue-300/70 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-blue-800 border border-blue-200/70">
                  PADRÃO ENTERPRISE
                </span>

                <div className="h-11 w-11 rounded-xl border border-blue-200/80 bg-blue-50 text-blue-700 flex items-center justify-center shadow-2xs shrink-0">
                  <Building2 className="h-5 w-5" />
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] mb-3 tracking-tight leading-snug">
                Arquitetura corporativa e rigor de grandes marcas
              </h3>

              <p className="text-sm sm:text-base leading-relaxed text-[#475569]">
                Atuo como líder técnico em uma das maiores consultorias do mundo (Deloitte), desenhando arquiteturas de software para operações de alta escala. O código do seu site ou sistema nasce com o mesmo padrão de segurança, estabilidade e qualidade exigido pelas grandes marcas.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700">
                <span className="h-2 w-2 rounded-full bg-blue-600" />
                <span>Liderança Técnica Corporativa · Deloitte</span>
              </div>
              <span className="text-[11px] font-mono font-semibold text-blue-700 bg-blue-50/80 px-2.5 py-0.5 rounded-md border border-blue-200/60">
                Enterprise Grade
              </span>
            </div>
          </div>

          {/* Card 2: 1 coluna — Métrica Financeira */}
          <div className="md:col-span-1 lg:col-span-1 rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-emerald-300/70 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-5">
                <div className="h-10 w-10 rounded-xl border border-emerald-200/80 bg-emerald-50 text-emerald-700 flex items-center justify-center shadow-2xs">
                  <TrendingDown className="h-5 w-5" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/60">
                  EFICIÊNCIA REAL
                </span>
              </div>

              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600 tracking-tight mb-2">
                -87,89%
              </div>

              <h3 className="text-lg font-bold text-[#0F172A] mb-2.5 tracking-tight">
                Custo de nuvem reduzido
              </h3>

              <p className="text-sm leading-relaxed text-[#475569]">
                Engenharia focada em eficiência. Soluções que rodam consumindo o mínimo de servidor, eliminando desperdícios de infraestrutura.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <span className="text-xs font-semibold text-emerald-800 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                Otimização de infraestrutura
              </span>
            </div>
          </div>

          {/* Card 3: 1 coluna — Formação & Pós-graduação */}
          <div className="md:col-span-1 lg:col-span-1 rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-indigo-300/70 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-5">
                <span className="inline-flex items-center rounded-full bg-indigo-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-indigo-800 border border-indigo-200/70">
                  BASE SÓLIDA
                </span>

                <div className="h-10 w-10 rounded-xl border border-indigo-200/80 bg-indigo-50 text-indigo-700 flex items-center justify-center shadow-2xs shrink-0">
                  <GraduationCap className="h-5 w-5" />
                </div>
              </div>

              <h3 className="text-lg font-bold text-[#0F172A] mb-2.5 tracking-tight leading-snug">
                Ciência da Computação &amp; Pós-Graduação
              </h3>

              <p className="text-sm leading-relaxed text-[#475569]">
                Formação sólida e especialização acadêmica contínua. Modelagem de dados consistente e arquitetura feita para durar anos sem quebrar.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <span className="text-xs font-semibold text-indigo-800 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                Rigor acadêmico e técnico
              </span>
            </div>
          </div>

          {/* Card 4: Ocupa largura restante (2 colunas no tablet / 4 colunas no desktop) — Segurança & Alinhamento */}
          <div className="md:col-span-2 lg:col-span-4 rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs hover:shadow-md hover:border-emerald-300/70 transition-all duration-300">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-xl border border-emerald-200/80 bg-emerald-50 text-emerald-700 flex items-center justify-center shadow-2xs shrink-0">
                    <Lock className="h-5 w-5" />
                  </div>

                  <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-800 border border-emerald-200/70">
                    SITES SEGUROS &amp; COMUNICAÇÃO
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] mb-2.5 tracking-tight">
                  Aplicações blindadas e alinhamento transparente
                </h3>

                <p className="text-sm sm:text-base leading-relaxed text-[#475569]">
                  Proteção contra vulnerabilidades comuns da web, código moderno e contato direto com quem desenvolve. Prazos reais, sem intermediários e sem surpresas no cronograma.
                </p>
              </div>

              <div className="flex flex-wrap lg:flex-col gap-2.5 shrink-0 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-slate-100 lg:pl-8">
                <div className="inline-flex items-center gap-2 rounded-xl bg-slate-50 border border-slate-200/80 px-3.5 py-2 text-xs font-semibold text-slate-800">
                  <Check className="h-4 w-4 text-emerald-600 shrink-0 stroke-[2.5]" />
                  <span>Proteção e código blindado</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-xl bg-slate-50 border border-slate-200/80 px-3.5 py-2 text-xs font-semibold text-slate-800">
                  <Check className="h-4 w-4 text-emerald-600 shrink-0 stroke-[2.5]" />
                  <span>Contato direto sem intermediários</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-xl bg-slate-50 border border-slate-200/80 px-3.5 py-2 text-xs font-semibold text-slate-800">
                  <Check className="h-4 w-4 text-emerald-600 shrink-0 stroke-[2.5]" />
                  <span>Cronograma e escopo cumpridos</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. TABELA COMPARATIVA MINIMALISTA (ABAIXO DO GRID) */}
        <div className="rounded-2xl border border-slate-200/90 bg-white shadow-xs overflow-hidden">
          {/* Cabeçalho da Tabela */}
          <div className="grid grid-cols-1 md:grid-cols-2 border-b border-slate-200 bg-slate-50/80">
            <div className="px-6 py-4 flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-500">
              <span className="h-5 w-5 rounded-full bg-slate-200/80 text-slate-500 flex items-center justify-center shrink-0">
                <X className="h-3.5 w-3.5 stroke-[2.5]" />
              </span>
              <span>
                O que o mercado comum entrega (amadores/agências genéricas)
              </span>
            </div>

            <div className="px-6 py-4 flex items-center gap-2.5 text-xs sm:text-sm font-bold text-[#0F172A] border-t md:border-t-0 md:border-l border-slate-200 bg-emerald-50/40">
              <span className="h-5 w-5 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                <Check className="h-3.5 w-3.5 stroke-[2.5]" />
              </span>
              <span>Meu padrão de engenharia &amp; entrega</span>
            </div>
          </div>

          {/* Linhas Comparativas */}
          <div className="divide-y divide-slate-200/80">
            {comparisonRows.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-2 transition-colors hover:bg-slate-50/40"
              >
                {/* Coluna 1: Mercado Comum */}
                <div className="px-6 py-4 sm:py-5 flex items-start gap-3 text-sm sm:text-base text-slate-500">
                  <span className="mt-0.5 h-5 w-5 rounded-full bg-rose-50 border border-rose-200/70 text-rose-500 flex items-center justify-center shrink-0">
                    <X className="h-3 w-3 stroke-[2.5]" />
                  </span>
                  <span>{row.commonMarket}</span>
                </div>

                {/* Coluna 2: Meu Padrão de Engenharia */}
                <div className="px-6 py-4 sm:py-5 flex items-start gap-3 text-sm sm:text-base font-semibold text-[#0F172A] border-t md:border-t-0 md:border-l border-slate-200/80 bg-emerald-50/15">
                  <span className="mt-0.5 h-5 w-5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center shrink-0">
                    <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                  </span>
                  <span>{row.engineeringStandard}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
