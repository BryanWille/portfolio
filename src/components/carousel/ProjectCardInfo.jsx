"use client";

import React from "react";
import {
  Eye,
  Play,
  Github,
  Layers,
  ArrowUpRight,
  Globe,
} from "lucide-react";

export default function ProjectCardInfo({ project, onOpenDetails }) {
  if (!project) return null;

  const isNoobie = project.id === "noobie";
  const isBookie = project.id === "bookie";
  const isBr381 = project.id === "br381";
  const isNotecore = project.id === "notecore";
  const isMedusa = project.id === "medusa-bot";
  const isPresp = project.id === "presp";
  const isAws = project.id === "aws-s3";

  // Badges com termos de mercado
  const renderBadges = () => {
    if (isBr381) {
      return (
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-block rounded-full px-3 py-1 text-xs font-bold bg-[#000D4B]/10 text-[#000D4B] border border-[#000D4B]/20">
            {project.simpleBadge || "Engenharia de Dados & IA/MLOps"}
          </span>
          <span className="inline-block rounded-full px-3 py-1 text-xs font-bold bg-[#FFC900]/25 text-[#735700] border border-[#FFC900]/60">
            Status: Funcional 🚨
          </span>
        </div>
      );
    }

    if (isNotecore) {
      return (
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-block rounded-full px-3 py-1 text-xs font-bold bg-[#1E88E5]/10 text-[#1E88E5] border border-[#1E88E5]/20">
            {project.simpleBadge || "App Mobile & Sincronização Cloud"}
          </span>
          <span className="inline-block rounded-full px-3 py-1 text-xs font-bold bg-[#F1F5F9] text-[#475569] border border-[#DCE7F5]">
            Flutter &amp; Firebase
          </span>
        </div>
      );
    }

    if (isMedusa) {
      return (
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-block rounded-full px-3 py-1 text-xs font-bold bg-[#00979D]/10 text-[#00979D] border border-[#00979D]/20">
            {project.simpleBadge || "IoT & Visão Computacional"}
          </span>
          <span className="inline-block rounded-full px-3 py-1 text-xs font-bold bg-[#F1F5F9] text-[#475569] border border-[#D1EAEB]">
            C++ &amp; Cloud Vision API
          </span>
        </div>
      );
    }

    if (isPresp) {
      return (
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-block rounded-full px-3 py-1 text-xs font-bold bg-[#007396]/10 text-[#007396] border border-[#007396]/20">
            {project.simpleBadge || "Software Desktop & Algoritmos"}
          </span>
          <span className="inline-block rounded-full px-3 py-1 text-xs font-bold bg-[#F1F5F9] text-[#475569] border border-[#D8E2ED]">
            Java &amp; POO
          </span>
        </div>
      );
    }

    if (isAws) {
      return (
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-block rounded-full px-3 py-1 text-xs font-bold bg-[#FF9900]/12 text-[#D97706] border border-[#FF9900]/25">
            {project.simpleBadge || "Automação Cloud & Eficiência"}
          </span>
          <span className="inline-block rounded-full px-3 py-1 text-xs font-bold bg-[#F1F5F9] text-[#232F3E] border border-[#E2E8F0]">
            AWS Lambda &amp; S3 • -87,89% Custo
          </span>
        </div>
      );
    }

    return (
      <div>
        <span
          className={`inline-block rounded-full px-3 py-1 text-xs font-bold ${
            isNoobie
              ? "bg-[rgba(255,91,0,0.10)] text-[#FF5B00] border border-[#FF5B00]/20"
              : isBookie
              ? "bg-[#F3E2D6] text-[#9C452B] border border-[#9C452B]/20"
              : "bg-emerald-100 text-emerald-800"
          }`}
        >
          {project.simpleBadge || "Plataforma Web & SaaS"}
        </span>
      </div>
    );
  };

  // Título e Estilos
  const titleColor =
    isNoobie
      ? "text-[#14171F]"
      : isBookie
      ? "text-[#302720]"
      : "text-[#0F172A]";

  const descColor =
    isNoobie
      ? "text-[#64748B]"
      : isBookie
      ? "text-[#74675C]"
      : "text-[#475569]";

  const detailsBtnClass = isNoobie
    ? "bg-[#F6F8FA] border border-[#E2E8F0] text-[#14171F] hover:bg-[#F1F5F9] hover:border-[#CBD5E1]"
    : isBookie
    ? "bg-[#FFFCF7] border border-[#DED4C7] text-[#302720] hover:bg-white hover:border-[#9C452B]"
    : isBr381
    ? "bg-white border border-[#DDE3EA] text-[#0F172A] hover:bg-[#F8FAFC] hover:border-[#000D4B]"
    : isNotecore
    ? "bg-white border border-[#DCE7F5] text-[#0F172A] hover:bg-[#F4F8FD] hover:border-[#1E88E5]"
    : isMedusa
    ? "bg-white border border-[#D1EAEB] text-[#0F172A] hover:bg-[#F2F9F9] hover:border-[#00979D]"
    : isPresp
    ? "bg-white border border-[#D8E2ED] text-[#0F172A] hover:bg-[#F4F7FB] hover:border-[#007396]"
    : isAws
    ? "bg-white border border-[#E2E8F0] text-[#0F172A] hover:bg-[#FFF8F2] hover:border-[#FF9900]"
    : "bg-neutral-900 text-white hover:bg-neutral-800";

  const eyeIconClass = isNoobie
    ? "text-[#FF5B00]"
    : isBookie
    ? "text-[#9C452B]"
    : isBr381
    ? "text-[#000D4B]"
    : isNotecore
    ? "text-[#1E88E5]"
    : isMedusa
    ? "text-[#00979D]"
    : isPresp
    ? "text-[#007396]"
    : isAws
    ? "text-[#FF9900]"
    : "text-neutral-300";

  return (
    <div className="lg:col-span-7 space-y-4 flex flex-col justify-center">
      {/* Badges com altura reservada */}
      <div className="min-h-[26px] flex items-center">
        {renderBadges()}
      </div>

      {/* Título com ícone dos projetos */}
      <div className="flex items-center gap-3 min-h-[48px]">
        {isNoobie && (
          <img
            src="/projects/noobie/logo.png"
            alt="Noobie Logo"
            className="h-10 w-10 sm:h-12 sm:w-12 rounded-2xl border border-[#FF5B00]/30 shadow-md object-contain bg-black flex-shrink-0"
          />
        )}
        {isBookie && (
          <img
            src="/projects/bookie/logo.png"
            alt="Bookie Logo"
            className="h-10 w-10 sm:h-12 sm:w-12 rounded-2xl border border-[#DED4C7] shadow-sm object-contain bg-[#FFFCF7] p-1 flex-shrink-0"
          />
        )}
        {isNotecore && (
          <img
            src="/projects/notecore/logo.png"
            alt="Notecore Logo"
            className="h-10 w-10 sm:h-12 sm:w-12 rounded-2xl border border-[#DCE7F5] shadow-sm object-contain bg-white p-1 flex-shrink-0"
          />
        )}
        {isPresp && (
          <img
            src="/projects/presp/logo.png"
            alt="Presp Logo"
            className="h-10 w-10 sm:h-12 sm:w-12 rounded-2xl border border-[#D8E2ED] shadow-sm object-contain bg-white p-1 flex-shrink-0"
          />
        )}
        {isAws && (
          <img
            src="/projects/aws-s3/lambda.png"
            alt="AWS Lambda Logo"
            className="h-10 w-10 sm:h-12 sm:w-12 rounded-2xl border border-[#F2DEC8] shadow-sm object-contain bg-[#FFF8F2] p-1 flex-shrink-0"
          />
        )}
        <h3 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${titleColor}`}>
          {project.name}
        </h3>
      </div>

      {/* Descrição: Frase única e direta com altura reservada fixa para evitar saltos */}
      <p className={`text-base sm:text-lg leading-relaxed min-h-[52px] sm:min-h-[56px] flex items-center ${descColor}`}>
        {project.shortPitch || project.summary}
      </p>

      {/* Ações / Botões */}
      <div className="flex flex-wrap items-center gap-3 pt-2">
        <button
          onClick={() => onOpenDetails(project)}
          className={`inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold shadow transition-all ${detailsBtnClass}`}
        >
          <Eye className={`h-4 w-4 ${eyeIconClass}`} />
          <span>Ver Detalhes &amp; Telas</span>
        </button>

        {isBr381 ? (
          <a
            href="https://www.youtube.com/watch?v=FdgF0kawJqY"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold text-white shadow transition-all bg-[#000D4B] hover:bg-[#000936] shadow-[#000D4B]/30"
          >
            <Play className="h-4 w-4 fill-[#FFC900] text-[#FFC900]" />
            <span>Assistir Pitch no YouTube ↗</span>
          </a>
        ) : isNotecore ? (
          <a
            href="https://github.com/BryanWille/NOTECORE"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold text-white shadow transition-all bg-[#1E88E5] hover:bg-[#1565C0] shadow-[#1E88E5]/25"
          >
            <Github className="h-4 w-4" />
            <span>Ver no GitHub ↗</span>
          </a>
        ) : isMedusa ? (
          <a
            href="https://github.com/BryanWille/medusa-bot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold text-white shadow transition-all bg-[#00979D] hover:bg-[#006F74] shadow-[#00979D]/25"
          >
            <Github className="h-4 w-4" />
            <span>Ver no GitHub ↗</span>
          </a>
        ) : isPresp ? (
          <button
            onClick={() => onOpenDetails(project)}
            className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold text-white shadow transition-all bg-[#007396] hover:bg-[#005A75] shadow-[#007396]/25"
          >
            <Layers className="h-4 w-4" />
            <span>Código Fonte &amp; Arquitetura</span>
          </button>
        ) : isAws ? (
          <a
            href="https://lnkd.in/p/dQy-vb3i"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold text-white shadow transition-all bg-[#FF9900] hover:bg-[#E67E00] shadow-[#FF9900]/25"
          >
            <ArrowUpRight className="h-4 w-4" />
            <span>Ver Publicação no LinkedIn ↗</span>
          </a>
        ) : project.isLive ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold text-white shadow transition-all ${
              isNoobie
                ? "bg-[#FF5B00] hover:bg-[#E04E00] shadow-[#FF5B00]/25"
                : isBookie
                ? "bg-[#9C452B] hover:bg-[#7E3722] shadow-[#9C452B]/25"
                : "bg-emerald-600 hover:bg-emerald-700"
            }`}
          >
            <Globe className="h-4 w-4" />
            <span>Acessar Projeto ao Vivo ↗</span>
          </a>
        ) : (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold shadow transition-all border border-neutral-300 bg-white text-neutral-800 hover:border-neutral-900"
          >
            <span>Ver Código ↗</span>
          </a>
        )}
      </div>
    </div>
  );
}
