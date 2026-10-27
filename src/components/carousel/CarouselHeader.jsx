"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  getSectionTagColor,
  getSectionTitleColor,
  getCounterColor,
} from "./carouselThemes";

export default function CarouselHeader({
  projectId,
  currentIndex,
  total,
  onPrev,
  onNext,
}) {
  return (
    <div className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
      <div>
        <span
          className={`block font-mono text-xs uppercase tracking-wider mb-3 transition-colors duration-500 ${getSectionTagColor(
            projectId
          )}`}
        >
          02 // Portfólio de Engenharia &amp; Produtos
        </span>
        <h2
          className={`font-display text-3xl sm:text-5xl font-bold tracking-tight leading-[1.1] transition-colors duration-500 ${getSectionTitleColor(
            projectId
          )}`}
        >
          Sistemas, plataformas e automações em produção
        </h2>
      </div>

      {/* Controles de Navegação Alinhados na Mesma Linha Horizontal */}
      <div className="flex items-center gap-2 shrink-0">
        <button
          type="button"
          onClick={onPrev}
          aria-label="Projeto anterior"
          className="w-8 h-8 shrink-0 rounded-full flex items-center justify-center border border-slate-200 dark:border-slate-800 bg-white/80 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 transition-colors active:scale-95"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <span
          className={`whitespace-nowrap font-mono text-xs tracking-wider min-w-[3.5rem] text-center select-none font-semibold transition-colors duration-500 ${getCounterColor(
            projectId
          )}`}
        >
          {String(currentIndex + 1).padStart(2, "0")} /{" "}
          {String(total).padStart(2, "0")}
        </span>

        <button
          type="button"
          onClick={onNext}
          aria-label="Próximo projeto"
          className="w-8 h-8 shrink-0 rounded-full flex items-center justify-center border border-slate-200 dark:border-slate-800 bg-white/80 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 transition-colors active:scale-95"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
