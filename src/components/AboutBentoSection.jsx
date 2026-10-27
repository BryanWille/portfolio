"use client";

import React from "react";

const comparisonRows = [
  {
    index: "01",
    commonMarket: "Templates pesados e vulneráveis",
    engineeringStandard: "Código sob medida, rápido e com segurança nativa.",
  },
  {
    index: "02",
    commonMarket: "Automações e integrações frágeis",
    engineeringStandard:
      "Arquitetura corporativa estável com redução real de custos.",
  },
  {
    index: "03",
    commonMarket: "Atrasos e sumiço na comunicação",
    engineeringStandard:
      "Postura de liderança técnica: escopo claro, transparência e prazos cumpridos.",
  },
];

export default function AboutBentoSection({ id = "autoridade" }) {
  return (
    <section
      id={id}
      className="scroll-mt-16 bg-[#FAFAF9] py-24 sm:py-32 border-t border-slate-200/60 relative overflow-hidden"
    >
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* 1. CABEÇALHO EDITORIAL DA SEÇÃO */}
        <div className="mb-16 max-w-3xl">
          <span className="block font-mono text-xs tracking-wider uppercase text-slate-500 mb-3">
            03 // DIFERENCIAL DE ENGENHARIA
          </span>

          <h2 className="font-display text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-[1.1]">
            Por que confiar a tecnologia da sua empresa{" "}
            <span className="text-[#064E3B]">a mim?</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Porque aplico no seu negócio o mesmo padrão que uso em consultoria global e no meio acadêmico: código limpo, foco em segurança e arquitetura pensada para a sua empresa crescer sem dores de cabeça.
          </p>
        </div>

        {/* 2. BENTO GRID DE CREDENCIAIS (ASSIMETRIA MODERNA) */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-20">
          {/* Card 1: Ocupa 2 colunas — Destaque Liderança Deloitte */}
          <div className="md:col-span-2 lg:col-span-2 rounded-2xl border border-slate-200/80 bg-white/95 p-7 sm:p-9 shadow-editorial hover:border-slate-300 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-3 pb-4 mb-5 border-b border-slate-200/60">
                <span className="font-mono text-xs tracking-wider uppercase text-slate-500">
                  PADRÃO ENTERPRISE
                </span>
                <span className="font-mono text-xs text-[#064E3B] font-semibold">
                  DELOITTE CONSULTING
                </span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mb-3 tracking-tight leading-[1.15]">
                Arquitetura corporativa e rigor de grandes marcas
              </h3>

              <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                Atuo como líder técnico em uma das maiores consultorias do mundo (Deloitte), desenhando arquiteturas de software para operações de alta escala. O código do seu site ou sistema nasce com o mesmo padrão de segurança, estabilidade e qualidade exigido pelas grandes marcas.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200/60 flex items-center justify-between gap-2 font-mono text-xs text-slate-500">
              <span>Liderança Técnica Corporativa</span>
              <span className="text-slate-900 font-medium">Alta Escala</span>
            </div>
          </div>

          {/* Card 2: 1 coluna — Métrica Financeira */}
          <div className="md:col-span-1 lg:col-span-1 rounded-2xl border border-slate-200/80 bg-white/95 p-7 sm:p-8 shadow-editorial hover:border-slate-300 transition-colors flex flex-col justify-between">
            <div>
              <div className="pb-4 mb-5 border-b border-slate-200/60">
                <span className="font-mono text-xs tracking-wider uppercase text-slate-500">
                  EFICIÊNCIA REAL
                </span>
              </div>

              <div className="font-display text-4xl sm:text-5xl font-bold text-[#064E3B] tracking-tight leading-none mb-3">
                -87,89%
              </div>

              <h3 className="font-display text-lg font-bold text-slate-900 mb-2.5 tracking-tight leading-[1.15]">
                Custo de nuvem reduzido
              </h3>

              <p className="text-sm leading-relaxed text-slate-600">
                Engenharia focada em eficiência. Soluções que rodam consumindo o mínimo de servidor, eliminando desperdícios de infraestrutura.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200/60 font-mono text-xs text-slate-500">
              AWS Serverless Architecture
            </div>
          </div>

          {/* Card 3: 1 coluna — Formação & Pós-graduação */}
          <div className="md:col-span-1 lg:col-span-1 rounded-2xl border border-slate-200/80 bg-white/95 p-7 sm:p-8 shadow-editorial hover:border-slate-300 transition-colors flex flex-col justify-between">
            <div>
              <div className="pb-4 mb-5 border-b border-slate-200/60">
                <span className="font-mono text-xs tracking-wider uppercase text-slate-500">
                  BASE SÓLIDA
                </span>
              </div>

              <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 mb-3 tracking-tight leading-[1.15]">
                Ciência da Computação &amp; Pós-Graduação
              </h3>

              <p className="text-sm leading-relaxed text-slate-600">
                Formação sólida e especialização acadêmica contínua. Modelagem de dados consistente e arquitetura feita para durar anos sem quebrar.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200/60 font-mono text-xs text-slate-500">
              Bacharelado &amp; Especialização PUC
            </div>
          </div>

          {/* Card 4: Largura restante (2 cols no tablet / 4 cols no desktop) — Segurança & Alinhamento */}
          <div className="md:col-span-2 lg:col-span-4 rounded-2xl border border-slate-200/80 bg-white/95 p-7 sm:p-9 shadow-editorial hover:border-slate-300 transition-colors">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:items-center">
              <div className="lg:col-span-7">
                <span className="block font-mono text-xs tracking-wider uppercase text-slate-500 mb-3">
                  SITES SEGUROS &amp; COMUNICAÇÃO
                </span>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mb-3 tracking-tight leading-[1.15]">
                  Aplicações blindadas e alinhamento transparente
                </h3>

                <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                  Proteção contra vulnerabilidades comuns da web, código moderno e contato direto com quem desenvolve. Prazos reais, sem intermediários e sem surpresas no cronograma.
                </p>
              </div>

              <div className="lg:col-span-5 divide-y divide-slate-200/60 border-t lg:border-t-0 lg:border-l border-slate-200/60 pt-5 lg:pt-0 lg:pl-8">
                <div className="py-2.5 first:pt-0 flex items-baseline justify-between gap-4">
                  <span className="font-mono text-xs text-slate-400">01</span>
                  <span className="text-sm font-medium text-slate-800 flex-1">
                    Proteção nativa e código blindado
                  </span>
                </div>
                <div className="py-2.5 flex items-baseline justify-between gap-4">
                  <span className="font-mono text-xs text-slate-400">02</span>
                  <span className="text-sm font-medium text-slate-800 flex-1">
                    Contato direto sem intermediários
                  </span>
                </div>
                <div className="py-2.5 last:pb-0 flex items-baseline justify-between gap-4">
                  <span className="font-mono text-xs text-slate-400">03</span>
                  <span className="text-sm font-medium text-slate-800 flex-1">
                    Cronograma e escopo cumpridos
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. TABELA COMPARATIVA EDITORIAL (SEM CARD-MANIA, PURA LINHA FINA SUÍÇA) */}
        <div className="pt-4">
          {/* Cabeçalho da Tabela Editorial */}
          <div className="grid grid-cols-1 md:grid-cols-12 pb-4 border-b border-slate-300/80 gap-4">
            <div className="md:col-span-6 font-mono text-xs tracking-wider uppercase text-slate-500">
              O que o mercado comum entrega (amadores/agências genéricas)
            </div>

            <div className="md:col-span-6 md:pl-8 font-mono text-xs tracking-wider uppercase text-[#064E3B] font-semibold">
              Meu padrão de engenharia &amp; entrega
            </div>
          </div>

          {/* Linhas Comparativas com Divisórias Ultrafinas */}
          <div className="divide-y divide-slate-200/60 border-b border-slate-200/60">
            {comparisonRows.map((row) => (
              <div
                key={row.index}
                className="grid grid-cols-1 md:grid-cols-12 py-6 gap-4 md:gap-0 items-baseline"
              >
                {/* Coluna 1: Mercado Comum */}
                <div className="md:col-span-6 flex items-baseline gap-4 pr-6 text-sm sm:text-base text-slate-500">
                  <span className="font-mono text-xs text-slate-400 shrink-0">
                    {row.index}
                  </span>
                  <span className="line-through decoration-slate-300/80">
                    {row.commonMarket}
                  </span>
                </div>

                {/* Coluna 2: Meu Padrão de Engenharia */}
                <div className="md:col-span-6 md:border-l md:border-slate-200/60 md:pl-8 flex items-baseline gap-3 text-sm sm:text-base font-medium text-slate-900">
                  <span className="font-mono text-xs text-[#064E3B] shrink-0">
                    →
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
