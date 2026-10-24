"use client";

import React from "react";
import { motion } from "framer-motion";

// Marca d'água animada ao fundo da seção do carrossel quando AWS Cloud está ativo
export function AwsSectionWatermark() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden select-none z-0"
    >
      <motion.div
        initial={{ x: "-20%", y: "15%", rotate: -6, opacity: 0 }}
        animate={{
          x: ["-20%", "110%"],
          y: ["15%", "55%"],
          rotate: [-6, 6],
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
          src="/projects/aws-s3/aws.png"
          alt=""
          className="w-full h-full object-contain filter drop-shadow-[0_0_50px_rgba(255,153,0,0.25)]"
        />
      </motion.div>
    </div>
  );
}

// Marca d'água interna do card com elementos de Nuvem Serverless + Lambda & S3
export function AwsCardWatermark({ onOpenDetails }) {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden select-none z-0"
      >
        {/* Logo Lambda em passagem diagonal suave */}
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
            src="/projects/aws-s3/lambda.png"
            alt=""
            className="w-full h-full object-contain filter drop-shadow-[0_0_35px_rgba(255,153,0,0.3)]"
          />
        </motion.div>

        {/* Vetor Minimalista de Nuvem Serverless & Bucket S3 */}
        <svg
          className="absolute -bottom-6 right-8 w-[400px] h-[195px] text-[#FF9900] opacity-[0.06] select-none"
          viewBox="0 0 400 180"
          fill="none"
        >
          {/* Silhueta de Nuvem Cloud */}
          <path
            d="M 120 120 L 280 120 A 40 40 0 0 0 310 60 A 50 50 0 0 0 230 40 A 45 45 0 0 0 150 50 A 40 40 0 0 0 120 120 Z"
            stroke="currentColor"
            strokeWidth="3"
            fill="currentColor"
            opacity="0.15"
          />

          {/* Bucket S3 Cilíndrico */}
          <ellipse cx="200" cy="80" rx="35" ry="12" stroke="currentColor" strokeWidth="2.5" />
          <path
            d="M 165 80 L 165 110 A 35 12 0 0 0 235 110 L 235 80"
            stroke="currentColor"
            strokeWidth="2.5"
            fill="none"
          />
          <path
            d="M 165 95 A 35 12 0 0 0 235 95"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="3 3"
          />

          {/* Setas de fluxo de eventos Serverless */}
          <path d="M 100 85 L 140 85 M 132 78 L 140 85 L 132 92" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M 260 85 L 300 85 M 292 78 L 300 85 L 292 92" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>

        {/* Elementos flutuantes de Arquitetura em Nuvem */}
        <motion.span
          initial={{ y: 0 }}
          animate={{ y: [-7, 7, -7], opacity: [0.03, 0.08, 0.03] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-1/4 font-serif text-6xl font-bold text-[#FF9900]"
        >
          λ
        </motion.span>

        <motion.span
          initial={{ y: 0 }}
          animate={{ y: [8, -8, 8], opacity: [0.03, 0.07, 0.03] }}
          transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-16 left-1/3 text-4xl text-[#FF9900]"
        >
          ⚡
        </motion.span>

        <motion.span
          initial={{ y: 0 }}
          animate={{ y: [-8, 8, -8], opacity: [0.03, 0.08, 0.03] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-8 right-1/3 text-4xl font-bold text-[#FF9900]"
        >
          ☁
        </motion.span>

        <motion.span
          initial={{ y: 0 }}
          animate={{ y: [7, -7, 7], opacity: [0.02, 0.06, 0.02] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-12 right-1/4 font-mono text-2xl font-black text-[#232F3E]"
        >
          S3
        </motion.span>

        <motion.span
          initial={{ y: 0 }}
          animate={{ y: [-5, 5, -5], opacity: [0.02, 0.06, 0.02] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute top-28 right-1/2 font-mono text-xl font-bold text-[#E67E00]"
        >
          EVENT
        </motion.span>
      </div>

      {/* Ícone Oficial Lambda no Canto Superior Direito do Card */}
      <div className="absolute top-5 right-5 sm:top-7 sm:right-7 z-20">
        <div
          className="relative group/aws-corner cursor-pointer"
          onClick={onOpenDetails}
        >
          <div className="absolute -inset-1 rounded-2xl bg-[#FF9900]/30 blur-sm opacity-60 transition-all group-hover/aws-corner:opacity-100 group-hover/aws-corner:scale-110" />
          <img
            src="/projects/aws-s3/lambda.png"
            alt="AWS Lambda Icon"
            className="relative h-11 w-11 sm:h-14 sm:w-14 rounded-2xl border border-[#F2DEC8] shadow-md object-contain bg-[#FFF8F2] p-1.5 transition-transform group-hover/aws-corner:scale-105"
          />
        </div>
      </div>
    </>
  );
}

