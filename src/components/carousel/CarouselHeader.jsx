"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  getSectionTagColor,
  getSectionTitleColor,
  getNavButtonStyle,
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
    <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
      <div>
        <span
          className={`text-xs font-bold uppercase tracking-wider transition-colors duration-500 ${getSectionTagColor(
            projectId
          )}`}
        >
          Projetos &amp; Criações
        </span>
        <h2
          className={`mt-1 text-2xl sm:text-3xl font-extrabold transition-colors duration-500 ${getSectionTitleColor(
            projectId
          )}`}
        >
          Produtos que eu construí e coloquei no ar
        </h2>
      </div>

      {/* Controles de Navegação */}
      <div className="flex items-center gap-2">
        <button
          onClick={onPrev}
          aria-label="Projeto anterior"
          className={`flex h-11 w-11 items-center justify-center rounded-full border shadow-sm transition-all active:scale-95 ${getNavButtonStyle(
            projectId
          )}`}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <span
          className={`text-xs font-semibold px-2 font-mono transition-colors duration-500 ${getCounterColor(
            projectId
          )}`}
        >
          {currentIndex + 1} de {total}
        </span>
        <button
          onClick={onNext}
          aria-label="Próximo projeto"
          className={`flex h-11 w-11 items-center justify-center rounded-full border shadow-sm transition-all active:scale-95 ${getNavButtonStyle(
            projectId
          )}`}
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

