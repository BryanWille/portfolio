"use client";

import React from "react";
import { motion } from "framer-motion";

// Marca d'água animada ao fundo da seção do carrossel quando Bookie está ativo
export function BookieSectionWatermark() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden select-none z-0"
    >
      <motion.div
        initial={{ x: "-20%", y: "15%", rotate: -10, opacity: 0 }}
        animate={{
          x: ["-20%", "110%"],
          y: ["15%", "55%"],
          rotate: [-10, 10],
          opacity: [0, 0.04, 0.08, 0.04, 0],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -top-10 w-80 h-80 sm:w-[420px] sm:h-[420px]"
      >
        <img
          src="/projects/bookie/logo.png"
          alt=""
          className="w-full h-full object-contain filter drop-shadow-[0_0_50px_rgba(156,69,43,0.25)]"
        />
      </motion.div>
    </div>
  );
}

// Marca d'água interna do card com elementos de Literatura/Livros + Logo Bookie
export function BookieCardWatermark({ onOpenDetails }) {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden select-none z-0"
      >
        {/* Logo Bookie em passagem diagonal suave */}
        <motion.div
          initial={{ x: "-10%", y: "60%", rotate: -8, opacity: 0 }}
          animate={{
            x: ["-10%", "105%"],
            y: ["60%", "-20%"],
            rotate: [-8, 8],
            opacity: [0, 0.04, 0.09, 0.04, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-52 h-52 sm:w-72 sm:h-72"
        >
          <img
            src="/projects/bookie/logo.png"
            alt=""
            className="w-full h-full object-contain filter drop-shadow-[0_0_35px_rgba(156,69,43,0.25)]"
          />
        </motion.div>

        {/* Vetor Minimalista de Livro Aberto com Páginas e Fita Marcadora */}
        <svg
          className="absolute -bottom-4 right-8 w-[400px] h-[190px] text-[#9C452B] opacity-[0.055] select-none"
          viewBox="0 0 400 180"
          fill="none"
        >
          {/* Capa e base do livro */}
          <path
            d="M 40 150 Q 120 160, 200 145 Q 280 160, 360 150"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          {/* Página Esquerda */}
          <path
            d="M 40 145 Q 120 120, 198 128 L 198 48 Q 120 40, 40 65 Z"
            fill="currentColor"
            opacity="0.25"
          />
          {/* Página Direita */}
          <path
            d="M 360 145 Q 280 120, 202 128 L 202 48 Q 280 40, 360 65 Z"
            fill="currentColor"
            opacity="0.25"
          />
          {/* Contorno das Páginas Superiores */}
          <path
            d="M 40 65 Q 120 40, 200 48 Q 280 40, 360 65"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Lombada central */}
          <line
            x1="200"
            y1="48"
            x2="200"
            y2="148"
            stroke="currentColor"
            strokeWidth="3"
          />
          {/* Fita marcadora de página pendente */}
          <path
            d="M 200 50 Q 205 100, 215 155 L 222 170 L 210 165 L 198 170 L 205 155"
            fill="#9C452B"
            opacity="0.8"
          />
          {/* Linhas sutis de texto simulado na página esquerda */}
          <line x1="65" y1="78" x2="175" y2="70" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
          <line x1="65" y1="94" x2="175" y2="86" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
          <line x1="65" y1="110" x2="150" y2="103" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
          {/* Linhas sutis de texto simulado na página direita */}
          <line x1="225" y1="70" x2="335" y2="78" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
          <line x1="225" y1="86" x2="335" y2="94" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
          <line x1="225" y1="103" x2="310" y2="110" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
        </svg>

        {/* Elementos literários flutuantes (Aspas, Parágrafo, Estrela de Destaque) */}
        <motion.span
          initial={{ y: 0 }}
          animate={{ y: [-7, 7, -7], opacity: [0.03, 0.08, 0.03] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-1/4 font-serif text-6xl font-bold text-[#9C452B]"
        >
          “
        </motion.span>

        <motion.span
          initial={{ y: 0 }}
          animate={{ y: [8, -8, 8], opacity: [0.03, 0.07, 0.03] }}
          transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-16 left-1/3 font-serif text-4xl font-bold text-[#9C452B]"
        >
          §
        </motion.span>

        <motion.span
          initial={{ y: 0 }}
          animate={{ y: [-8, 8, -8], opacity: [0.03, 0.08, 0.03] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-8 right-1/3 font-serif text-6xl font-bold text-[#9C452B]"
        >
          ”
        </motion.span>

        <motion.span
          initial={{ y: 0 }}
          animate={{ y: [7, -7, 7], opacity: [0.02, 0.06, 0.02] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-12 right-1/4 font-serif text-3xl font-bold text-[#9C452B]"
        >
          ✦
        </motion.span>

        <motion.span
          initial={{ y: 0 }}
          animate={{ y: [-5, 5, -5], opacity: [0.02, 0.06, 0.02] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute top-28 right-1/2 font-serif text-3xl font-bold text-[#9C452B]"
        >
          ¶
        </motion.span>
      </div>

      {/* Ícone Oficial do Bookie no Canto Superior Direito do Card */}
      <div className="absolute top-5 right-5 sm:top-7 sm:right-7 z-20">
        <div
          className="relative group/bookie-corner cursor-pointer"
          onClick={onOpenDetails}
        >
          <div className="absolute -inset-1 rounded-2xl bg-[#9C452B]/25 blur-sm opacity-60 transition-all group-hover/bookie-corner:opacity-100 group-hover/bookie-corner:scale-110" />
          <img
            src="/projects/bookie/logo.png"
            alt="Bookie Logo Icon"
            className="relative h-11 w-11 sm:h-14 sm:w-14 rounded-2xl border border-[#DED4C7] shadow-md object-contain bg-[#FFFCF7] p-1.5 transition-transform group-hover/bookie-corner:scale-105"
          />
        </div>
      </div>
    </>
  );
}

