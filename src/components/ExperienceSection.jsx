"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cpu,
  Workflow,
  LayoutDashboard,
  Globe,
  Layers,
  ArrowUpRight,
  Check,
  ChevronRight,
  MessageCircle,
  Eye,
} from "lucide-react";
import { profileData } from "@/data/profile";
import SolutionSectionBackground from "./SolutionSectionBackground";

export default function ExperienceSection({ id = "solucoes" }) {
  const [selectedId, setSelectedId] = useState("process-automation");

  const solutions = [
    {
      id: "process-automation",
      icon: Cpu,
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
        logoBorder: "border-[#F2DEC8]",
        badge: "-87,89% Custo Cloud",
        highlight: "Processamento e compressão serverless sob demanda sem servidores ociosos.",
      },
      colorTheme: "amber",
      iconColor: "text-amber-700 bg-amber-500/10 border-amber-300/80",
      badgePill: "bg-amber-50 text-amber-900 border-amber-200/80",
      mainCardClasses:
        "border-amber-200/90 shadow-lg shadow-amber-500/[0.05] bg-gradient-to-b from-amber-500/[0.03] via-white/95 to-white/90",
      cardDefault:
        "bg-white/85 backdrop-blur-md border border-amber-200/40 hover:bg-white hover:border-amber-300/80 shadow-2xs hover:shadow-amber-500/10",
      cardActive:
        "bg-gradient-to-r from-amber-500/[0.04] to-white backdrop-blur-md border-amber-500 ring-2 ring-amber-500/20 shadow-lg shadow-amber-500/10",
      whatsappMsg:
        "Olá, Bryan! Vi seu portfólio e gostaria de conversar sobre automação de rotinas e processos para o meu negócio.",
    },
    {
      id: "api-integration",
      icon: Workflow,
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
        logoBorder: "border-[#FF5B00]/30",
        badge: "API & Webhooks",
        highlight: "Sincronização contínua com Google Sheets e banco de dados relacional Supabase.",
      },
      colorTheme: "blue",
      iconColor: "text-blue-700 bg-blue-500/10 border-blue-300/80",
      badgePill: "bg-blue-50 text-blue-900 border-blue-200/80",
      mainCardClasses:
        "border-blue-200/90 shadow-lg shadow-blue-500/[0.05] bg-gradient-to-b from-blue-500/[0.03] via-white/95 to-white/90",
      cardDefault:
        "bg-white/85 backdrop-blur-md border border-blue-200/40 hover:bg-white hover:border-blue-300/80 shadow-2xs hover:shadow-blue-500/10",
      cardActive:
        "bg-gradient-to-r from-blue-500/[0.04] to-white backdrop-blur-md border-blue-500 ring-2 ring-blue-500/20 shadow-lg shadow-blue-500/10",
      whatsappMsg:
        "Olá, Bryan! Vi seu portfólio e gostaria de conversar sobre a integração de APIs e sistemas da minha operação.",
    },
    {
      id: "custom-saas",
      icon: LayoutDashboard,
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
        logoBorder: "border-[#FF5B00]/30",
        badge: "SaaS Completo",
        highlight: "Modelagem relacional em PostgreSQL com regras estritas de segurança e RLS.",
      },
      colorTheme: "indigo",
      iconColor: "text-indigo-700 bg-indigo-500/10 border-indigo-300/80",
      badgePill: "bg-indigo-50 text-indigo-900 border-indigo-200/80",
      mainCardClasses:
        "border-indigo-200/90 shadow-lg shadow-indigo-500/[0.05] bg-gradient-to-b from-indigo-500/[0.03] via-white/95 to-white/90",
      cardDefault:
        "bg-white/85 backdrop-blur-md border border-indigo-200/40 hover:bg-white hover:border-indigo-300/80 shadow-2xs hover:shadow-indigo-500/10",
      cardActive:
        "bg-gradient-to-r from-indigo-500/[0.04] to-white backdrop-blur-md border-indigo-500 ring-2 ring-indigo-500/20 shadow-lg shadow-indigo-500/10",
      whatsappMsg:
        "Olá, Bryan! Vi seu portfólio e gostaria de conversar sobre o desenvolvimento de um sistema web sob medida para a minha empresa.",
    },
    {
      id: "web-performance",
      icon: Globe,
      title: "Sites & Aplicações Web de Alta Performance",
      navTitle: "Sites & Aplicações Web",
      tag: "Presença Digital & Conversão",
      shortSummary: "Páginas ultrarrápidas pensadas para converter visitantes em clientes.",
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
        logoBorder: "border-[#FF5B00]/30",
        badge: "Next.js & Supabase",
        highlight: "Plataforma web de alta performance com arquitetura moderna e responsiva.",
      },
      colorTheme: "emerald",
      iconColor: "text-emerald-700 bg-emerald-500/10 border-emerald-300/80",
      badgePill: "bg-emerald-50 text-emerald-900 border-emerald-200/80",
      mainCardClasses:
        "border-emerald-200/90 shadow-lg shadow-emerald-500/[0.05] bg-gradient-to-b from-emerald-500/[0.03] via-white/95 to-white/90",
      cardDefault:
        "bg-white/85 backdrop-blur-md border border-emerald-200/40 hover:bg-white hover:border-emerald-300/80 shadow-2xs hover:shadow-emerald-500/10",
      cardActive:
        "bg-gradient-to-r from-emerald-500/[0.04] to-white backdrop-blur-md border-emerald-500 ring-2 ring-emerald-500/20 shadow-lg shadow-emerald-500/10",
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
      className="relative overflow-hidden scroll-mt-16 py-20 sm:py-24 border-t border-slate-200/80 transition-colors"
    >
      {/* Camada Global de Background Animado cobrindo a seção inteira com fluxo ilustrado */}
      <SolutionSectionBackground theme={selectedId} />

      {/* Linha divisória sutil com gradiente fade no topo */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300/80 to-transparent pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="mb-10 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800 border border-emerald-200/70 mb-3">
              <Layers className="h-3.5 w-3.5" />
              <span>Soluções</span>
            </span>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Soluções que Desenvolvo
            </h2>

            <p className="mt-2 text-base sm:text-lg text-slate-600 leading-relaxed">
              Engenharia sob medida para acelerar vendas, integrar ferramentas e eliminar gargalos operacionais.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href={profileData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/95 backdrop-blur-xs px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-800 shadow-2xs transition-all hover:border-emerald-600 hover:text-emerald-700"
            >
              <span>Consultar viabilidade de projeto</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Bento Grid com Altura Padronizada e Consistente (640px no Desktop) */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch lg:h-[640px]">
          {/* Card Principal em Destaque (Esquerda - 7 cols) - Altura e Espaçamento Estáveis com Toque de Cor Suave */}
          <div className="lg:col-span-7 h-full flex flex-col relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSolution.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.24, ease: "easeInOut" }}
                className={`h-full flex flex-col justify-between rounded-3xl border backdrop-blur-md p-7 sm:p-8 transition-all duration-300 ${activeSolution.mainCardClasses}`}
              >
                {/* Conteúdo com Dimensões Internas Padronizadas para Evitar Saltos de Tamanho */}
                <div className="space-y-4">
                  {/* Topo: Categoria + Ícone temático */}
                  <div className="flex items-center justify-between gap-3 h-11">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider border ${activeSolution.badgePill}`}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-current" />
                      {activeSolution.tag}
                    </span>

                    <div
                      className={`h-11 w-11 rounded-2xl border flex items-center justify-center shadow-xs ${activeSolution.iconColor}`}
                    >
                      {React.createElement(activeSolution.icon, {
                        className: "h-5 w-5",
                      })}
                    </div>
                  </div>

                  {/* Título da Solução com Altura Mínima Fixa (2 linhas reservadas) */}
                  <div className="min-h-[4.25rem] flex items-center">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                      {activeSolution.title}
                    </h3>
                  </div>

                  {/* Parágrafo direto com Altura Mínima Fixa */}
                  <div className="min-h-[3.75rem] flex items-start">
                    <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                      {activeSolution.featuredHighlight}
                    </p>
                  </div>

                  {/* 3 Bullets com checks verdes */}
                  <div className="pt-1 flex flex-col gap-2.5">
                    {activeSolution.keyPoints.map((point, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 text-sm sm:text-base font-medium text-slate-800"
                      >
                        <div className="h-5 w-5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                          <Check className="h-3.5 w-3.5 text-emerald-600 stroke-[3]" />
                        </div>
                        <span className="leading-snug">{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bloco Limpo de Exemplo Real com métrica (Altura Fixa) */}
                  <div className="pt-2">
                    <div className="rounded-2xl border border-slate-200/80 bg-white/80 backdrop-blur-xs p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors hover:border-slate-300 shadow-2xs min-h-[76px]">
                      <div className="flex items-center gap-3 min-w-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={activeSolution.caseProject.logo}
                          alt={activeSolution.caseProject.name}
                          className={`h-10 w-10 rounded-xl border ${activeSolution.caseProject.logoBorder} ${activeSolution.caseProject.logoBg} p-1 object-contain shadow-2xs shrink-0`}
                        />
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                              Exemplo Real:
                            </span>
                            <span className="font-bold text-sm text-slate-900 truncate">
                              {activeSolution.caseProject.name}
                            </span>
                            <span className="rounded-md bg-white border border-slate-200 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 shadow-2xs">
                              {activeSolution.caseProject.badge}
                            </span>
                          </div>
                          <p className="text-xs text-slate-600 truncate mt-0.5">
                            {activeSolution.caseProject.highlight}
                          </p>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={scrollToProjects}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors shrink-0 group self-start sm:self-auto"
                      >
                        <Eye className="h-3.5 w-3.5" />
                        <span>Ver telas</span>
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Rodapé: Botão Verde do WhatsApp */}
                <div className="pt-5 mt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                  <a
                    href={`https://api.whatsapp.com/send?phone=5531998191723&text=${encodeURIComponent(
                      activeSolution.whatsappMsg
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 px-6 py-3.5 text-sm sm:text-base font-bold text-white shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Falar sobre este projeto no WhatsApp ↗</span>
                  </a>

                  <span className="text-xs text-slate-400 font-medium hidden sm:inline">
                    Alinhamento e escopo direto
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Cards Secundários Selecionáveis (Direita - 5 cols) - Grid de 4 Linhas com Alturas RIGOROSAMENTE Idênticas */}
          <div className="lg:col-span-5 grid grid-rows-4 gap-3.5 h-full relative z-10">
            {solutions.map((item) => {
              const IconComponent = item.icon;
              const isActive = item.id === selectedId;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedId(item.id)}
                  onMouseEnter={() => setSelectedId(item.id)}
                  className={`group relative w-full h-full flex items-center gap-3.5 rounded-2xl p-4 sm:p-4.5 text-left transition-all duration-300 ease-out cursor-pointer focus:outline-none ${
                    isActive ? item.cardActive : item.cardDefault
                  }`}
                  aria-label={`Selecionar ${item.title}`}
                >
                  {/* Ícone com cor própria por solução */}
                  <div
                    className={`h-11 w-11 rounded-xl border flex items-center justify-center shrink-0 shadow-2xs transition-transform duration-300 group-hover:scale-105 ${item.iconColor}`}
                  >
                    <IconComponent className="h-5 w-5" />
                  </div>

                  {/* Informações Resumidas Padronizadas */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1.5">
                      <h4
                        className={`text-sm sm:text-base font-bold tracking-tight truncate transition-colors ${
                          isActive
                            ? "text-slate-900"
                            : "text-slate-800 group-hover:text-slate-900"
                        }`}
                      >
                        {item.navTitle}
                      </h4>

                      <ChevronRight
                        className={`h-4 w-4 shrink-0 transition-transform duration-300 ${
                          isActive
                            ? "translate-x-1 font-bold text-current"
                            : "text-slate-400 group-hover:text-slate-600 group-hover:translate-x-0.5"
                        }`}
                      />
                    </div>

                    <p className="mt-1 text-xs text-slate-600 leading-relaxed line-clamp-2">
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
