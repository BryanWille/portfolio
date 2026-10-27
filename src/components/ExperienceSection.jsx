"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { profileData } from "@/data/profile";
import SolutionSectionBackground from "./SolutionSectionBackground";

export default function ExperienceSection({ id = "solucoes" }) {
  const [selectedId, setSelectedId] = useState("process-automation");

  const solutions = [
    {
      id: "process-automation",
      index: "01",
      title: "Automação de Processos & Rotinas",
      navTitle: "Automação de Processos",
      tag: "Eficiência Operacional",
      shortSummary: "Eliminação de tarefas manuais repetitivas da sua equipe.",
      featuredHighlight:
        "Rotinas inteligentes em nuvem e scripts serverless. Automatize leitura de dados, notificações no WhatsApp e rotinas operacionais sem intervenção humana.",
      keyPoints: [
        "Eliminação de tarefas manuais repetitivas da equipe",
        "Rotinas serverless autônomas em nuvem (AWS Lambda)",
        "Alertas e notificações em tempo real (WhatsApp / E-mail)",
      ],
      caseProject: {
        id: "aws-s3",
        name: "Otimização Serverless AWS",
        category: "Automação em Nuvem & Redução de Custos",
        logo: "/projects/aws-s3/lambda.png",
        logoBg: "bg-[#FFF8F2]",
        logoBorder: "border-slate-200",
        badge: "-87,89% Custo Cloud",
        highlight:
          "Processamento e compressão serverless sob demanda sem servidores ociosos.",
      },
      whatsappMsg:
        "Olá, Bryan! Vi seu portfólio e gostaria de conversar sobre automação de rotinas e processos para o meu negócio.",
    },
    {
      id: "api-integration",
      index: "02",
      title: "Integração de Sistemas & APIs",
      navTitle: "Integração de Sistemas & APIs",
      tag: "Ecossistema Conectado",
      shortSummary: "Conexão fluida entre CRM, ERP, gateways e seu site.",
      featuredHighlight:
        "Sincronização segura de dados em tempo real. Elimine a digitação manual entre planilhas e plataformas com integrações robustas que nunca quebram.",
      keyPoints: [
        "Sincronização segura em tempo real (zero retrabalho)",
        "Conexão nativa entre CRM, ERP e gateways de pagamento",
        "Fim da digitação manual de planilhas entre sistemas",
      ],
      caseProject: {
        id: "noobie",
        name: "Noobie",
        category: "Sincronização Automática via API",
        logo: "/projects/noobie/logo.png",
        logoBg: "bg-black",
        logoBorder: "border-slate-800",
        badge: "API & Webhooks",
        highlight:
          "Sincronização contínua com Google Sheets e banco de dados relacional Supabase.",
      },
      whatsappMsg:
        "Olá, Bryan! Vi seu portfólio e gostaria de conversar sobre a integração de APIs e sistemas da minha operação.",
    },
    {
      id: "custom-saas",
      index: "03",
      title: "Sistemas Web & SaaS Sob Medida",
      navTitle: "Sistemas Web & SaaS",
      tag: "Gestão & Escala",
      shortSummary: "Painéis administrativos e dashboards sob medida.",
      featuredHighlight:
        "Plataformas completas desenhadas para a regra de negócio da sua empresa. Banco de dados relacional, controle de acessos e escalabilidade garantida.",
      keyPoints: [
        "Painéis administrativos e dashboards sob medida",
        "Autenticação blindada e controle de acessos",
        "Banco de dados relacional desenhado para escalar",
      ],
      caseProject: {
        id: "noobie",
        name: "Noobie SaaS",
        category: "Arquitetura SaaS & Governança em Tempo Real",
        logo: "/projects/noobie/logo.png",
        logoBg: "bg-black",
        logoBorder: "border-slate-800",
        badge: "SaaS Completo",
        highlight:
          "Modelagem relacional em PostgreSQL com regras estritas de segurança e RLS.",
      },
      whatsappMsg:
        "Olá, Bryan! Vi seu portfólio e gostaria de conversar sobre o desenvolvimento de um sistema web sob medida para a minha empresa.",
    },
    {
      id: "web-performance",
      index: "04",
      title: "Sites & Aplicações Web de Alta Performance",
      navTitle: "Sites & Aplicações Web",
      tag: "Presença Digital & Conversão",
      shortSummary:
        "Páginas ultrarrápidas pensadas para converter visitantes em clientes.",
      featuredHighlight:
        "Construção sob medida sem templates lentos. Foco em velocidade máxima, SEO estruturado e design responsivo que transmite autoridade imediata.",
      keyPoints: [
        "Carregamento instantâneo (95+ Google PageSpeed)",
        "SEO técnico estruturado para buscas orgânicas",
        "Design 100% responsivo e focado em conversão",
      ],
      caseProject: {
        id: "noobie",
        name: "Noobie",
        category: "Aplicação Web Full-Stack em Next.js",
        logo: "/projects/noobie/logo.png",
        logoBg: "bg-black",
        logoBorder: "border-slate-800",
        badge: "Next.js & Supabase",
        highlight:
          "Plataforma web de alta performance com arquitetura moderna e responsiva.",
      },
      whatsappMsg:
        "Olá, Bryan! Vi seu portfólio e gostaria de conversar sobre o desenvolvimento de um site ou aplicação web de alta performance para a minha empresa.",
    },
  ];

  const activeSolution =
    solutions.find((s) => s.id === selectedId) || solutions[0];

  const scrollToProjects = () => {
    const el = document.getElementById("projetos");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id={id}
      className="relative overflow-hidden scroll-mt-16 py-24 sm:py-32 border-t border-slate-200/60 bg-[#FAFAF9]"
    >
      {/* Camada Sutil de Background */}
      <SolutionSectionBackground theme={selectedId} />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho Editorial da Seção */}
        <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <span className="block font-mono text-xs tracking-wider uppercase text-slate-500 mb-3">
              01 // Arquitetura &amp; Soluções
            </span>

            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight leading-[1.1] text-slate-900">
              Soluções que Desenvolvo
            </h2>

            <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
              Engenharia sob medida para acelerar vendas, integrar ferramentas e eliminar gargalos operacionais.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href={profileData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-slate-700 hover:text-[#064E3B] border-b border-slate-300 hover:border-[#064E3B] pb-1 transition-colors"
            >
              <span>Consultar viabilidade de projeto</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* Grid Interativo de Soluções (620px estável no Desktop) */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch lg:h-[620px]">
          {/* Painel Principal em Destaque (7 colunas) */}
          <div className="lg:col-span-7 h-full flex flex-col relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSolution.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="h-full flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white/95 backdrop-blur-md p-7 sm:p-9 shadow-editorial"
              >
                <div className="space-y-5">
                  {/* Topo: Micro-label Monospace sem caixinha */}
                  <div className="flex items-center justify-between gap-3 border-b border-slate-200/60 pb-4">
                    <span className="font-mono text-xs tracking-wider uppercase text-slate-500">
                      {activeSolution.index} // {activeSolution.tag}
                    </span>
                    <span className="font-mono text-xs text-[#064E3B] font-semibold">
                      ENGENHARIA SOB MEDIDA
                    </span>
                  </div>

                  {/* Título da Solução */}
                  <div className="min-h-[4rem] flex items-center">
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-[1.12]">
                      {activeSolution.title}
                    </h3>
                  </div>

                  {/* Parágrafo Direto */}
                  <div className="min-h-[3.5rem] flex items-start">
                    <p className="text-base text-slate-600 leading-relaxed">
                      {activeSolution.featuredHighlight}
                    </p>
                  </div>

                  {/* 3 Entregas Estruturadas em Alinhamento Editorial */}
                  <div className="pt-2 divide-y divide-slate-200/60 border-t border-b border-slate-200/60">
                    {activeSolution.keyPoints.map((point, i) => (
                      <div
                        key={i}
                        className="py-2.5 flex items-baseline gap-3 text-sm sm:text-base font-medium text-slate-800"
                      >
                        <span className="font-mono text-xs text-[#064E3B] shrink-0">
                          0{i + 1}
                        </span>
                        <span className="leading-snug">{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* Referência de Sistema Real em Produção */}
                  <div className="pt-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
                      <div className="flex items-center gap-3.5 min-w-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={activeSolution.caseProject.logo}
                          alt={activeSolution.caseProject.name}
                          className={`h-10 w-10 rounded-lg border ${activeSolution.caseProject.logoBorder} ${activeSolution.caseProject.logoBg} p-1.5 object-contain shrink-0`}
                        />
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500">
                              Em produção:
                            </span>
                            <span className="font-bold text-sm text-slate-900 truncate">
                              {activeSolution.caseProject.name}
                            </span>
                            <span className="font-mono text-[11px] text-[#064E3B] font-semibold">
                              [{activeSolution.caseProject.badge}]
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 truncate mt-0.5">
                            {activeSolution.caseProject.highlight}
                          </p>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={scrollToProjects}
                        className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider font-semibold text-[#064E3B] hover:text-[#04392B] transition-colors shrink-0 group self-start sm:self-auto"
                      >
                        <span>Ver sistema</span>
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Rodapé: CTA em Verde Floresta Profundo */}
                <div className="pt-5 mt-4 border-t border-slate-200/60 flex flex-wrap items-center justify-between gap-3">
                  <a
                    href={`https://api.whatsapp.com/send?phone=5531998191723&text=${encodeURIComponent(
                      activeSolution.whatsappMsg
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#064E3B] hover:bg-[#04392B] px-6 py-3.5 text-sm sm:text-base font-semibold text-white shadow-editorial transition-all"
                  >
                    <span>Falar sobre este projeto no WhatsApp</span>
                    <span className="font-mono text-white/75">↗</span>
                  </a>

                  <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400 hidden sm:inline">
                    Escopo &amp; Alinhamento Direto
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Seletor Lateral (5 colunas - 4 linhas de altura idêntica) */}
          <div className="lg:col-span-5 grid grid-rows-4 gap-3.5 h-full relative z-10">
            {solutions.map((item) => {
              const isActive = item.id === selectedId;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedId(item.id)}
                  onMouseEnter={() => setSelectedId(item.id)}
                  className={`group relative w-full h-full flex items-center gap-4 rounded-2xl px-5 py-4 text-left transition-all duration-200 cursor-pointer focus:outline-none border ${
                    isActive
                      ? "bg-white border-slate-900 shadow-editorial-hover"
                      : "bg-white/70 border-slate-200/80 hover:bg-white hover:border-slate-300"
                  }`}
                  aria-label={`Selecionar ${item.title}`}
                >
                  {/* Índice Monospace */}
                  <span
                    className={`font-mono text-xs tracking-wider shrink-0 transition-colors ${
                      isActive
                        ? "text-[#064E3B] font-bold"
                        : "text-slate-400 group-hover:text-slate-600"
                    }`}
                  >
                    {item.index}
                  </span>

                  {/* Informações Resumidas */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h4
                        className={`font-display text-sm sm:text-base font-bold tracking-tight truncate transition-colors ${
                          isActive ? "text-slate-900" : "text-slate-700"
                        }`}
                      >
                        {item.navTitle}
                      </h4>

                      <ChevronRight
                        className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
                          isActive
                            ? "translate-x-0.5 text-[#064E3B]"
                            : "text-slate-400 group-hover:translate-x-0.5"
                        }`}
                      />
                    </div>

                    <p className="mt-1 text-xs text-slate-500 leading-relaxed line-clamp-2">
                      {item.shortSummary}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
