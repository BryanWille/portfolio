"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, ArrowUpRight, BookOpen } from "lucide-react";

const BOOKIE_QUOTES = [
  {
    quote: "Quem não lê, mal fala, mal ouve, mal vê.",
    author: "Malba Tahan",
    work: "",
  },
  {
    quote: "Tarde te amei, ó beleza tão antiga e tão nova, tarde te amei!",
    author: "Santo Agostinho",
    work: "Confissões",
  },
  {
    quote: "A leitura de todos os bons livros é uma conversação com as mais distintas pessoas dos séculos passados.",
    author: "René Descartes",
    work: "Discurso do Método",
  },
];

export default function BookiePreview({ project, onOpenDetails }) {
  const [quoteIndex, setQuoteIndex] = useState(0);

  // Rotação automática suave das citações literárias
  useEffect(() => {
    const timer = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % BOOKIE_QUOTES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentQuote = BOOKIE_QUOTES[quoteIndex];

  return (
    <div
      onClick={() => onOpenDetails(project)}
      className="group cursor-pointer overflow-hidden rounded-2xl border border-[#DED4C7] bg-[#FFFCF7] shadow-xl transition-all hover:border-[#9C452B]/50 hover:shadow-2xl hover:scale-[1.01] h-[385px] flex flex-col justify-between"
    >
      {/* Top bar minimalista estilo Bookie */}
      <div className="flex items-center justify-between border-b border-[#DED4C7] bg-[#F6F1E9] px-4 py-2.5 flex-shrink-0">
        <div className="flex items-center gap-2">
          <img
            src="/projects/bookie/logo.png"
            alt="Bookie Logo"
            className="h-4 w-4 object-contain rounded-full"
          />
          <span className="text-[11px] font-bold text-[#302720] tracking-wide">
            Bookie · Biblioteca &amp; Caderno
          </span>
        </div>
        <span className="rounded bg-[#FFFCF7] px-2 py-0.5 text-[10px] text-[#74675C] border border-[#DED4C7] font-medium">
          bookie-lib.netlify.app
        </span>
        <Maximize2 className="h-3.5 w-3.5 text-[#74675C] group-hover:text-[#9C452B] transition-colors" />
      </div>

      {/* Content Preview */}
      <div className="p-5 space-y-3.5 bg-[#FFFCF7] flex-1 flex flex-col justify-between">
        {/* Bloco de Leitura Atual */}
        <div className="rounded-xl border border-[#DED4C7] bg-[#F6F1E9]/70 p-3.5 flex items-center gap-3.5">
          <div className="w-12 h-16 rounded-md bg-[#302720] text-[#FFFCF7] flex flex-col justify-between p-1.5 shadow-sm border border-[#DED4C7] flex-shrink-0">
            <span className="text-[7px] uppercase font-bold tracking-wider text-[#F3E2D6]">Lendo</span>
            <span className="text-[8px] font-serif leading-tight font-bold line-clamp-2">Confissões</span>
            <span className="text-[6px] text-[#DED4C7] truncate">S. Agostinho</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-1">
              <span className="text-[10px] font-bold text-[#9C452B] uppercase tracking-wider">
                Sua Leitura Atual
              </span>
              <span className="text-[10px] font-medium text-[#865B16]">
                ★★★★★
              </span>
            </div>
            <h5 className="text-sm font-bold text-[#302720] truncate mt-0.5">
              Confissões
            </h5>
            <p className="text-[11px] text-[#74675C] truncate">
              Santo Agostinho · 6 registros no diário
            </p>
          </div>
        </div>

        {/* Citação Rotativa Dinâmica (Entre as páginas) */}
        <div className="rounded-xl border border-[#9C452B]/25 bg-[#F3E2D6]/35 p-4 relative overflow-hidden">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5 text-[#9C452B]">
              <BookOpen className="h-3.5 w-3.5" />
              <span className="text-[10px] font-bold uppercase tracking-wider">
                Entre as páginas · Citação
              </span>
            </div>
            <span className="text-[10px] text-[#74675C] font-mono">
              {quoteIndex + 1}/3
            </span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={quoteIndex}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.3 }}
              className="min-h-[64px] flex flex-col justify-between"
            >
              <p className="text-xs sm:text-[13px] italic leading-relaxed text-[#302720] font-serif">
                &ldquo;{currentQuote.quote}&rdquo;
              </p>
              <p className="mt-2 text-[11px] font-semibold text-[#9C452B] text-right">
                — {currentQuote.author} {currentQuote.work && `(${currentQuote.work})`}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Indicadores de citação */}
          <div className="mt-3 flex items-center justify-center gap-1.5">
            {BOOKIE_QUOTES.map((_, qIdx) => (
              <button
                key={qIdx}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setQuoteIndex(qIdx);
                }}
                aria-label={`Ver citação ${qIdx + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  quoteIndex === qIdx
                    ? "w-5 bg-[#9C452B]"
                    : "w-1.5 bg-[#DED4C7] hover:bg-[#9C452B]/60"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Barra de Ação da Galeria */}
        <div className="pt-2 border-t border-[#DED4C7] flex items-center justify-between text-xs font-semibold text-[#9C452B]">
          <span>Ver estante &amp; 3 telas reais</span>
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </div>
      </div>
    </div>
  );
}

