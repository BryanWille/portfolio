"use client";

import React from "react";
import { motion } from "framer-motion";

// Marca d'água animada ao fundo da seção do carrossel
export function PrespSectionWatermark() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden select-none z-0"
    >
      <motion.div
        initial={{ x: "-20%", y: "15%", rotate: -8, opacity: 0 }}
        animate={{
          x: ["-20%", "110%"],
          y: ["15%", "55%"],
          rotate: [-8, 8],
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
          src="/projects/presp/logo.png"
          alt=""
          className="w-full h-full object-contain filter drop-shadow-[0_0_50px_rgba(0,115,150,0.25)]"
        />
      </motion.div>
    </div>
  );
}

// Marca d'água interna do card com elementos de Estatística + Logo Presp
export function PrespCardWatermark({ onOpenDetails }) {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden select-none z-0"
      >
        {/* Logo Presp em passagem diagonal suave */}
        <motion.div
          initial={{ x: "-10%", y: "60%", rotate: -10, opacity: 0 }}
          animate={{
            x: ["-10%", "105%"],
            y: ["60%", "-20%"],
            rotate: [-10, 10],
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
            src="/projects/presp/logo.png"
            alt=""
            className="w-full h-full object-contain filter drop-shadow-[0_0_35px_rgba(0,115,150,0.25)]"
          />
        </motion.div>

        {/* Curva de Gauss (Distribuição Normal) + Histograma Estatístico */}
        <svg
          className="absolute -bottom-4 right-10 w-[420px] h-[190px] text-[#007396] opacity-[0.06] select-none"
          viewBox="0 0 500 200"
          fill="none"
        >
          {/* Barras do histograma de frequência */}
          <rect x="130" y="140" width="30" height="50" fill="currentColor" opacity="0.3" />
          <rect x="165" y="105" width="30" height="85" fill="currentColor" opacity="0.4" />
          <rect x="200" y="65" width="30" height="125" fill="currentColor" opacity="0.5" />
          <rect x="235" y="35" width="30" height="155" fill="currentColor" opacity="0.6" />
          <rect x="270" y="35" width="30" height="155" fill="currentColor" opacity="0.6" />
          <rect x="305" y="65" width="30" height="125" fill="currentColor" opacity="0.5" />
          <rect x="340" y="105" width="30" height="85" fill="currentColor" opacity="0.4" />
          <rect x="375" y="140" width="30" height="50" fill="currentColor" opacity="0.3" />

          {/* Curva Normal Suave (Sino de Gauss) */}
          <path
            d="M 50 190 Q 180 185, 220 80 T 252 25 T 285 80 Q 325 185, 450 190"
            stroke="currentColor"
            strokeWidth="3.5"
            fill="none"
          />

          {/* Linha de base horizontal */}
          <line
            x1="30"
            y1="190"
            x2="470"
            y2="190"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="4 4"
          />

          {/* Linha vertical central (Média / μ) */}
          <line
            x1="252"
            y1="22"
            x2="252"
            y2="190"
            stroke="#E74C3C"
            strokeWidth="2"
            strokeDasharray="3 3"
            opacity="0.8"
          />
        </svg>

        {/* Símbolos estatísticos flutuantes */}
        <motion.span
          initial={{ y: 0 }}
          animate={{ y: [-6, 6, -6], opacity: [0.03, 0.08, 0.03] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-1/4 font-serif text-5xl font-bold text-[#007396]"
        >
          Σ
        </motion.span>

        <motion.span
          initial={{ y: 0 }}
          animate={{ y: [8, -8, 8], opacity: [0.03, 0.07, 0.03] }}
          transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-16 left-1/3 font-serif text-4xl italic font-bold text-[#007396]"
        >
          σ
        </motion.span>

        <motion.span
          initial={{ y: 0 }}
          animate={{ y: [-8, 8, -8], opacity: [0.03, 0.08, 0.03] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-8 right-1/3 font-serif text-3xl font-bold text-[#007396]"
        >
          X̄
        </motion.span>

        <motion.span
          initial={{ y: 0 }}
          animate={{ y: [7, -7, 7], opacity: [0.02, 0.06, 0.02] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-12 right-1/4 font-serif text-3xl italic font-bold text-[#007396]"
        >
          fᵢ
        </motion.span>

        <motion.span
          initial={{ y: 0 }}
          animate={{ y: [-5, 5, -5], opacity: [0.02, 0.06, 0.02] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute top-28 right-1/2 font-serif text-3xl italic font-bold text-[#007396]"
        >
          μ
        </motion.span>
      </div>

      {/* Ícone Oficial do Presp no Canto Superior Direito do Card */}
      <div className="absolute top-5 right-5 sm:top-7 sm:right-7 z-20">
        <div
          className="relative group/presp-corner cursor-pointer"
          onClick={onOpenDetails}
        >
          <div className="absolute -inset-1 rounded-2xl bg-[#007396]/25 blur-sm opacity-60 transition-all group-hover/presp-corner:opacity-100 group-hover/presp-corner:scale-110" />
          <img
            src="/projects/presp/logo.png"
            alt="Presp Logo Icon"
            className="relative h-11 w-11 sm:h-14 sm:w-14 rounded-2xl border border-[#D8E2ED] shadow-md object-contain bg-white p-1.5 transition-transform group-hover/presp-corner:scale-105"
          />
        </div>
      </div>
    </>
  );
}

