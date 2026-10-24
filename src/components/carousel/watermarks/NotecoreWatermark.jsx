"use client";

import React from "react";
import { motion } from "framer-motion";

// Marca d'água animada ao fundo da seção do carrossel quando Notecore está ativo
export function NotecoreSectionWatermark() {
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
          src="/projects/notecore/logo.png"
          alt=""
          className="w-full h-full object-contain filter drop-shadow-[0_0_50px_rgba(30,136,229,0.25)]"
        />
      </motion.div>
    </div>
  );
}

// Marca d'água interna do card com elementos de Calendário/Notas Mobile + Logo Notecore [N]
export function NotecoreCardWatermark({ onOpenDetails }) {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden select-none z-0"
      >
        {/* Logo [N] em passagem diagonal suave */}
        <motion.div
          initial={{ x: "-10%", y: "60%", rotate: -6, opacity: 0 }}
          animate={{
            x: ["-10%", "105%"],
            y: ["60%", "-20%"],
            rotate: [-6, 6],
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
            src="/projects/notecore/logo.png"
            alt=""
            className="w-full h-full object-contain filter drop-shadow-[0_0_35px_rgba(30,136,229,0.25)]"
          />
        </motion.div>

        {/* Vetor Minimalista de Smartphone com Calendário e Cards de Notas */}
        <svg
          className="absolute -bottom-6 right-8 w-[380px] h-[195px] text-[#1E88E5] opacity-[0.055] select-none"
          viewBox="0 0 380 180"
          fill="none"
        >
          {/* Contorno do celular smartphone */}
          <rect
            x="130"
            y="10"
            width="140"
            height="180"
            rx="18"
            stroke="currentColor"
            strokeWidth="3"
          />
          {/* Speaker / Câmera frontal */}
          <line x1="180" y1="20" x2="220" y2="20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />

          {/* Barra superior de app */}
          <rect x="135" y="30" width="130" height="24" rx="4" fill="currentColor" opacity="0.3" />

          {/* Grade de calendário minimalista */}
          <circle cx="150" cy="72" r="5" fill="currentColor" opacity="0.4" />
          <circle cx="170" cy="72" r="5" fill="currentColor" opacity="0.4" />
          <circle cx="190" cy="72" r="5" fill="currentColor" opacity="0.8" />
          <circle cx="210" cy="72" r="5" fill="currentColor" opacity="0.4" />
          <circle cx="230" cy="72" r="5" fill="currentColor" opacity="0.4" />
          <circle cx="250" cy="72" r="5" fill="currentColor" opacity="0.4" />

          <circle cx="150" cy="90" r="5" fill="currentColor" opacity="0.4" />
          <circle cx="170" cy="90" r="5" fill="currentColor" opacity="0.4" />
          <circle cx="190" cy="90" r="5" fill="currentColor" opacity="0.4" />
          <circle cx="210" cy="90" r="5" fill="currentColor" opacity="0.4" />
          <circle cx="230" cy="90" r="5" fill="currentColor" opacity="0.4" />
          <circle cx="250" cy="90" r="5" fill="currentColor" opacity="0.4" />

          {/* Cards de notas no celular */}
          <rect x="145" y="112" width="110" height="22" rx="6" fill="currentColor" opacity="0.25" />
          <rect x="145" y="142" width="110" height="22" rx="6" fill="currentColor" opacity="0.25" />

          {/* Checkmark no primeiro card */}
          <path d="M 152 123 L 156 127 L 164 119" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>

        {/* Elementos flutuantes de anotações e produtividade */}
        <motion.span
          initial={{ y: 0 }}
          animate={{ y: [-7, 7, -7], opacity: [0.03, 0.08, 0.03] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-1/4 font-mono text-5xl font-bold text-[#1E88E5]"
        >
          ✓
        </motion.span>

        <motion.span
          initial={{ y: 0 }}
          animate={{ y: [8, -8, 8], opacity: [0.03, 0.07, 0.03] }}
          transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-16 left-1/3 text-4xl text-[#1E88E5]"
        >
          📅
        </motion.span>

        <motion.span
          initial={{ y: 0 }}
          animate={{ y: [-8, 8, -8], opacity: [0.03, 0.08, 0.03] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-8 right-1/3 text-4xl font-bold text-[#1E88E5]"
        >
          ★
        </motion.span>

        <motion.span
          initial={{ y: 0 }}
          animate={{ y: [7, -7, 7], opacity: [0.02, 0.06, 0.02] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-12 right-1/4 text-3xl font-bold text-[#1E88E5]"
        >
          📌
        </motion.span>

        <motion.span
          initial={{ y: 0 }}
          animate={{ y: [-5, 5, -5], opacity: [0.02, 0.06, 0.02] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute top-28 right-1/2 font-sans text-3xl font-bold text-[#1E88E5]"
        >
          #
        </motion.span>
      </div>

      {/* Ícone Oficial do Notecore [N] no Canto Superior Direito do Card */}
      <div className="absolute top-5 right-5 sm:top-7 sm:right-7 z-20">
        <div
          className="relative group/notecore-corner cursor-pointer"
          onClick={onOpenDetails}
        >
          <div className="absolute -inset-1 rounded-2xl bg-[#1E88E5]/25 blur-sm opacity-60 transition-all group-hover/notecore-corner:opacity-100 group-hover/notecore-corner:scale-110" />
          <img
            src="/projects/notecore/logo.png"
            alt="Notecore Logo Icon"
            className="relative h-11 w-11 sm:h-14 sm:w-14 rounded-2xl border border-[#DCE7F5] shadow-md object-contain bg-white p-1.5 transition-transform group-hover/notecore-corner:scale-105"
          />
        </div>
      </div>
    </>
  );
}

