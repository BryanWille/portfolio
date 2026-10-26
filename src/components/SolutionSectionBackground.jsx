"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SolutionSectionBackground({ theme = "process-automation" }) {
  const themeConfigs = {
    "process-automation": {
      // Tom suave, pastel, ultra-limpo (sem saturação amarelada pesada)
      sectionBg:
        "linear-gradient(180deg, rgba(254, 243, 199, 0.42) 0%, rgba(255, 251, 235, 0.22) 35%, rgba(250, 250, 250, 0.95) 100%)",
      glow1: "rgba(245, 158, 11, 0.16)", // Amber suave
      glow2: "rgba(217, 119, 6, 0.10)",
      glow3: "rgba(251, 191, 36, 0.08)",
      primary: "#D97706",
      accent: "#F59E0B",
    },
    "api-integration": {
      sectionBg:
        "linear-gradient(180deg, rgba(219, 234, 254, 0.42) 0%, rgba(239, 246, 255, 0.22) 35%, rgba(250, 250, 250, 0.95) 100%)",
      glow1: "rgba(59, 130, 246, 0.16)", // Blue suave
      glow2: "rgba(6, 182, 212, 0.10)",
      glow3: "rgba(37, 99, 235, 0.08)",
      primary: "#2563EB",
      accent: "#0284C7",
    },
    "custom-saas": {
      sectionBg:
        "linear-gradient(180deg, rgba(237, 233, 254, 0.42) 0%, rgba(245, 243, 255, 0.22) 35%, rgba(250, 250, 250, 0.95) 100%)",
      glow1: "rgba(99, 102, 241, 0.16)", // Indigo suave
      glow2: "rgba(168, 85, 247, 0.10)",
      glow3: "rgba(124, 58, 237, 0.08)",
      primary: "#4F46E5",
      accent: "#7C3AED",
    },
    "web-performance": {
      sectionBg:
        "linear-gradient(180deg, rgba(209, 250, 229, 0.42) 0%, rgba(236, 253, 245, 0.22) 35%, rgba(250, 250, 250, 0.95) 100%)",
      glow1: "rgba(16, 185, 129, 0.16)", // Emerald suave
      glow2: "rgba(5, 150, 105, 0.10)",
      glow3: "rgba(52, 211, 153, 0.08)",
      primary: "#059669",
      accent: "#10B981",
    },
  };

  const currentConfig = themeConfigs[theme] || themeConfigs["process-automation"];

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* 1. Transição de Fundo Suave e Elegante (Degradê Pastel Suave) */}
      <motion.div
        key={`bg-wash-${theme}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="absolute inset-0"
        style={{ background: currentConfig.sectionBg }}
      />

      {/* 2. Orbes de Luz Difusa Macia (Blur Alto, sem Mancha Pesada) */}
      <motion.div
        animate={{
          x: [0, 30, -25, 0],
          y: [0, -25, 20, 0],
          scale: [1, 1.08, 0.94, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 18,
          ease: "easeInOut",
        }}
        className="absolute -top-24 left-[10%] w-[600px] h-[600px] rounded-full blur-[130px]"
        style={{ backgroundColor: currentConfig.glow1 }}
      />

      <motion.div
        animate={{
          x: [0, -25, 25, 0],
          y: [0, 25, -20, 0],
          scale: [1, 0.94, 1.06, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 16,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 right-[5%] w-[560px] h-[560px] rounded-full blur-[120px]"
        style={{ backgroundColor: currentConfig.glow2 }}
      />

      {/* 3. Animações Ilustradas Personalizadas por Solução */}
      <AnimatePresence mode="wait">
        {/* TEMA 1: PROCESSO ANIMADO DE FUNDO (Fluxo completo: Entrada -> Processamento AWS -> Ação WhatsApp) */}
        {theme === "process-automation" && (
          <motion.div
            key="scene-automation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full"
          >
            <svg
              className="w-full h-full"
              viewBox="0 0 1440 700"
              preserveAspectRatio="xMidYMid slice"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Trilhas do Processo em Linhas Finas e Elegantes */}
              <path
                d="M 120 220 L 320 220 L 460 360 L 720 360 L 860 220 L 1100 220 L 1320 340"
                stroke="#D97706"
                strokeWidth="1.8"
                strokeOpacity="0.35"
                strokeDasharray="6 6"
              />
              <path
                d="M 200 480 L 400 480 L 520 360 L 920 360 L 1040 480 L 1280 480"
                stroke="#F59E0B"
                strokeWidth="1.5"
                strokeOpacity="0.28"
                strokeDasharray="8 6"
              />

              {/* Etapa 1: Gatilho / Evento (Esquerda) */}
              <g opacity="0.6">
                <rect x="140" y="180" width="130" height="70" rx="14" fill="white" stroke="#F59E0B" strokeWidth="1.4" strokeOpacity="0.5" />
                <circle cx="165" cy="215" r="8" fill="#FDE68A" />
                <path d="M 162 215 L 168 215" stroke="#D97706" strokeWidth="2" strokeLinecap="round" />
                <rect x="182" y="206" width="65" height="6" rx="3" fill="#D97706" fillOpacity="0.4" />
                <rect x="182" y="218" width="45" height="5" rx="2.5" fill="#F59E0B" fillOpacity="0.3" />
              </g>

              {/* Etapa 2: Nó Central de Processamento Serverless (AWS / Nuvem) */}
              <g opacity="0.65">
                <circle cx="720" cy="360" r="42" fill="white" stroke="#D97706" strokeWidth="1.8" strokeOpacity="0.5" />
                <circle cx="720" cy="360" r="30" fill="#FEF3C7" fillOpacity="0.6" />
                {/* Ícone de Engrenagem / Processo */}
                <path
                  d="M 720 345 L 720 375 M 705 360 L 735 360 M 709 349 L 731 371 M 709 371 L 731 349"
                  stroke="#D97706"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </g>

              {/* Etapa 3: Conclusão & Ação Automatizada (Direita) */}
              <g opacity="0.6">
                <rect x="1110" y="185" width="140" height="70" rx="14" fill="white" stroke="#D97706" strokeWidth="1.4" strokeOpacity="0.5" />
                <circle cx="1135" cy="220" r="10" fill="#D1FAE5" />
                <path d="M 1130 220 L 1134 224 L 1141 216" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="1155" y="211" width="75" height="6" rx="3" fill="#059669" fillOpacity="0.4" />
                <rect x="1155" y="223" width="50" height="5" rx="2.5" fill="#10B981" fillOpacity="0.3" />
              </g>
            </svg>

            {/* Pulsos de Dados em Movimento Fluido ao longo das Linhas */}
            <motion.div
              animate={{
                x: [120, 720, 1320],
                y: [220, 360, 340],
                opacity: [0, 0.9, 0],
              }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute w-4 h-4 rounded-full bg-amber-500 shadow-lg shadow-amber-500/50"
            />
            <motion.div
              animate={{
                x: [200, 720, 1280],
                y: [480, 360, 480],
                opacity: [0, 0.9, 0],
              }}
              transition={{ repeat: Infinity, duration: 6, delay: 2.5, ease: "easeInOut" }}
              className="absolute w-3.5 h-3.5 rounded-full bg-amber-400 shadow-md shadow-amber-400/50"
            />
          </motion.div>
        )}

        {/* TEMA 2: SITES & APLICAÇÕES WEB (Ícone Web -> Linhas de alta velocidade -> Chegando nos Clientes) */}
        {theme === "web-performance" && (
          <motion.div
            key="scene-web"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full"
          >
            <svg
              className="w-full h-full"
              viewBox="0 0 1440 700"
              preserveAspectRatio="xMidYMid slice"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Feixes de Velocidade saindo do Ícone Web e chegando nos Clientes */}
              <path
                d="M 240 320 Q 560 160, 1180 180"
                stroke="#10B981"
                strokeWidth="2"
                strokeOpacity="0.4"
                strokeDasharray="6 6"
              />
              <path
                d="M 240 350 Q 640 350, 1200 350"
                stroke="#059669"
                strokeWidth="2.4"
                strokeOpacity="0.45"
              />
              <path
                d="M 240 380 Q 560 540, 1180 500"
                stroke="#10B981"
                strokeWidth="2"
                strokeOpacity="0.4"
                strokeDasharray="6 6"
              />

              {/* Origem: ÍCONE WEB / SERVIDOR DE ALTA PERFORMANCE (Esquerda) */}
              <g opacity="0.75">
                <circle cx="220" cy="350" r="50" fill="white" stroke="#10B981" strokeWidth="2" strokeOpacity="0.6" />
                <circle cx="220" cy="350" r="38" fill="#D1FAE5" fillOpacity="0.7" />
                {/* Globo / Ícone Web clássico */}
                <circle cx="220" cy="350" r="22" stroke="#059669" strokeWidth="2" />
                <ellipse cx="220" cy="350" rx="10" ry="22" stroke="#059669" strokeWidth="1.6" />
                <line x1="198" y1="350" x2="242" y2="350" stroke="#059669" strokeWidth="1.6" />
              </g>

              {/* Destino 1: Cliente Desktop / Monitor (Direita Topo) */}
              <g opacity="0.65">
                <rect x="1160" y="145" width="80" height="52" rx="8" fill="white" stroke="#059669" strokeWidth="1.6" strokeOpacity="0.6" />
                <rect x="1166" y="151" width="68" height="38" rx="4" fill="#ECFDF5" />
                <path d="M 1195 197 L 1205 197 M 1200 197 L 1200 205" stroke="#059669" strokeWidth="1.8" />
                <circle cx="1200" cy="170" r="5" fill="#10B981" />
              </g>

              {/* Destino 2: Cliente Mobile / Smartphone (Direita Centro) */}
              <g opacity="0.7">
                <rect x="1185" y="315" width="42" height="72" rx="9" fill="white" stroke="#059669" strokeWidth="1.8" strokeOpacity="0.6" />
                <rect x="1190" y="323" width="32" height="52" rx="4" fill="#D1FAE5" fillOpacity="0.7" />
                <circle cx="1206" cy="380" r="2.5" fill="#059669" />
              </g>

              {/* Destino 3: Clientes / Conversão e Visitantes (Direita Base) */}
              <g opacity="0.65">
                <circle cx="1190" cy="495" r="14" fill="white" stroke="#10B981" strokeWidth="1.6" />
                <circle cx="1190" cy="490" r="5" fill="#059669" />
                <path d="M 1182 503 Q 1190 497, 1198 503" stroke="#059669" strokeWidth="1.5" />
                {/* Check de conversão em verde */}
                <circle cx="1215" cy="485" r="9" fill="#10B981" />
                <path d="M 1211 485 L 1214 488 L 1219 482" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
              </g>
            </svg>

            {/* Feixes de Luz Ultrarrápidos saindo da Web e atingindo os Clientes */}
            <motion.div
              animate={{
                x: [240, 1180],
                y: [320, 180],
                opacity: [0, 1, 0],
              }}
              transition={{ repeat: Infinity, duration: 2.8, ease: "easeOut" }}
              className="absolute w-3.5 h-3.5 rounded-full bg-emerald-500 shadow-md shadow-emerald-500/60"
            />
            <motion.div
              animate={{
                x: [240, 1200],
                y: [350, 350],
                opacity: [0, 1, 0],
              }}
              transition={{ repeat: Infinity, duration: 2.2, delay: 0.7, ease: "easeOut" }}
              className="absolute w-4 h-4 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/70"
            />
            <motion.div
              animate={{
                x: [240, 1180],
                y: [380, 500],
                opacity: [0, 1, 0],
              }}
              transition={{ repeat: Infinity, duration: 3, delay: 1.4, ease: "easeOut" }}
              className="absolute w-3.5 h-3.5 rounded-full bg-emerald-500 shadow-md shadow-emerald-500/60"
            />
          </motion.div>
        )}

        {/* TEMA 3: INTEGRAÇÃO DE APIS & SISTEMAS (Sincronização bidirecional entre CRM e ERP) */}
        {theme === "api-integration" && (
          <motion.div
            key="scene-api"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full"
          >
            <svg
              className="w-full h-full"
              viewBox="0 0 1440 700"
              preserveAspectRatio="xMidYMid slice"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Canais de sincronização bidirecional */}
              <path
                d="M 220 310 L 1220 310"
                stroke="#2563EB"
                strokeWidth="2"
                strokeOpacity="0.38"
                strokeDasharray="8 6"
              />
              <path
                d="M 1220 380 L 220 380"
                stroke="#0284C7"
                strokeWidth="2"
                strokeOpacity="0.38"
                strokeDasharray="8 6"
              />

              {/* Sistema A: CRM / Banco (Esquerda) */}
              <g opacity="0.7">
                <rect x="140" y="280" width="110" height="130" rx="16" fill="white" stroke="#2563EB" strokeWidth="1.8" strokeOpacity="0.5" />
                <rect x="155" y="300" width="80" height="20" rx="6" fill="#DBEAFE" />
                <rect x="155" y="330" width="80" height="20" rx="6" fill="#EFF6FF" stroke="#93C5FD" strokeWidth="1" />
                <rect x="155" y="360" width="80" height="20" rx="6" fill="#DBEAFE" />
              </g>

              {/* Sistema B: ERP / Gateways de Pagamento (Direita) */}
              <g opacity="0.7">
                <rect x="1190" y="280" width="110" height="130" rx="16" fill="white" stroke="#0284C7" strokeWidth="1.8" strokeOpacity="0.5" />
                <rect x="1205" y="300" width="80" height="20" rx="6" fill="#CFFAFE" />
                <rect x="1205" y="330" width="80" height="20" rx="6" fill="#ECFEFF" stroke="#A5F3FC" strokeWidth="1" />
                <rect x="1205" y="360" width="80" height="20" rx="6" fill="#CFFAFE" />
              </g>

              {/* Nó de Gateway / Webhook Central */}
              <g opacity="0.65">
                <circle cx="720" cy="345" r="32" fill="white" stroke="#2563EB" strokeWidth="1.6" strokeOpacity="0.5" />
                <circle cx="720" cy="345" r="22" fill="#DBEAFE" />
                <path d="M 712 345 L 728 345 M 724 340 L 728 345 L 724 350" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
              </g>
            </svg>

            {/* Pacotes JSON fluindo nos dois sentidos */}
            <motion.div
              animate={{ x: [220, 1220], opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              className="absolute top-[303px] w-4 h-4 rounded-md bg-blue-600 shadow-md shadow-blue-500/50"
            />
            <motion.div
              animate={{ x: [1220, 220], opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, delay: 1.8, ease: "linear" }}
              className="absolute top-[373px] w-4 h-4 rounded-md bg-cyan-600 shadow-md shadow-cyan-500/50"
            />
          </motion.div>
        )}

        {/* TEMA 4: SISTEMAS WEB & SAAS (Dashboard de Controle, Métricas & Escala) */}
        {theme === "custom-saas" && (
          <motion.div
            key="scene-saas"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full"
          >
            <svg
              className="w-full h-full"
              viewBox="0 0 1440 700"
              preserveAspectRatio="xMidYMid slice"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Curva de Escala Ascendente */}
              <path
                d="M 120 520 Q 420 460, 720 340 T 1320 160"
                stroke="#6366F1"
                strokeWidth="2.4"
                strokeOpacity="0.4"
              />
              <path
                d="M 120 520 Q 420 460, 720 340 T 1320 160 L 1320 620 L 120 620 Z"
                fill="url(#saas-chart-gradient)"
                opacity="0.12"
              />

              <defs>
                <linearGradient id="saas-chart-gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6366F1" />
                  <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Indicadores de Métricas Flutuantes */}
              <g opacity="0.6">
                <circle cx="720" cy="340" r="8" fill="#6366F1" />
                <circle cx="720" cy="340" r="16" stroke="#6366F1" strokeWidth="1.5" strokeOpacity="0.5" />
                <circle cx="1020" cy="240" r="7" fill="#8B5CF6" />
                <circle cx="1320" cy="160" r="9" fill="#10B981" />
              </g>
            </svg>

            {/* Pulso crescendo ao longo da curva de escala */}
            <motion.div
              animate={{
                x: [120, 720, 1320],
                y: [520, 340, 160],
                opacity: [0, 1, 0],
              }}
              transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut" }}
              className="absolute w-4 h-4 rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/60"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
