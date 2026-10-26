"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SolutionBackground({ theme }) {
  if (theme === "process-automation") {
    // Automação: Diagrama de Pipeline / Fluxo em Nuvem, nós operacionais e linhas pontilhadas de execução contínua
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none [mask-image:radial-gradient(circle_at_top_right,black_45%,transparent_75%)]">
        <svg
          className="w-full h-full opacity-25"
          viewBox="0 0 620 460"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Servidor / Nuvem Emissora */}
          <g transform="translate(420, 45)">
            {/* Silhueta de Nuvem com borda técnica */}
            <path
              d="M 28 50 A 22 22 0 0 1 65 32 A 28 28 0 0 1 114 36 A 22 22 0 0 1 140 58 A 16 16 0 0 1 134 88 L 32 88 A 18 18 0 0 1 28 50 Z"
              stroke="#D97706"
              strokeWidth="1.5"
              fill="#FEF3C7"
              fillOpacity="0.25"
            />
            {/* Servidor interno da nuvem */}
            <rect
              x="52"
              y="52"
              width="50"
              height="14"
              rx="3"
              stroke="#B45309"
              strokeWidth="1"
              fill="white"
            />
            <circle cx="58" cy="59" r="1.5" fill="#10B981" />
            <circle cx="63" cy="59" r="1.5" fill="#F59E0B" />
            <line x1="72" y1="59" x2="94" y2="59" stroke="#CBD5E1" strokeWidth="1" />
            
            <rect
              x="52"
              y="68"
              width="50"
              height="14"
              rx="3"
              stroke="#B45309"
              strokeWidth="1"
              fill="white"
            />
            <circle cx="58" cy="75" r="1.5" fill="#10B981" />
            <circle cx="63" cy="75" r="1.5" fill="#F59E0B" />
            <line x1="72" y1="75" x2="94" y2="75" stroke="#CBD5E1" strokeWidth="1" />
          </g>

          {/* Nós Operacionais em Pipeline */}
          {/* Nó 1: Trigger / Cron */}
          <rect
            x="455"
            y="175"
            width="100"
            height="34"
            rx="8"
            stroke="#D97706"
            strokeWidth="1.4"
            fill="#FFFBEB"
            fillOpacity="0.5"
          />
          <circle cx="475" cy="192" r="4.5" fill="#F59E0B" />
          <line x1="490" y1="189" x2="538" y2="189" stroke="#B45309" strokeWidth="1.5" />
          <line x1="490" y1="195" x2="522" y2="195" stroke="#F59E0B" strokeWidth="1" />

          {/* Nó 2: Processamento Serverless (Lambda) */}
          <rect
            x="320"
            y="250"
            width="115"
            height="38"
            rx="8"
            stroke="#B45309"
            strokeWidth="1.4"
            fill="#FFFBEB"
            fillOpacity="0.6"
          />
          <polygon
            points="338,260 348,272 342,272 345,282 334,269 340,269"
            fill="#D97706"
          />
          <line x1="358" y1="265" x2="415" y2="265" stroke="#78350F" strokeWidth="1.5" />
          <line x1="358" y1="273" x2="395" y2="273" stroke="#D97706" strokeWidth="1" />

          {/* Nó 3: Dispatcher / Notificação WhatsApp */}
          <rect
            x="465"
            y="330"
            width="105"
            height="34"
            rx="8"
            stroke="#D97706"
            strokeWidth="1.4"
            fill="#FFFBEB"
            fillOpacity="0.5"
          />
          <circle cx="485" cy="347" r="4" fill="#10B981" />
          <line x1="498" y1="344" x2="550" y2="344" stroke="#059669" strokeWidth="1.5" />
          <line x1="498" y1="350" x2="535" y2="350" stroke="#10B981" strokeWidth="1" />

          {/* Linhas de Fluxo com Setas e Linhas Pontilhadas */}
          <path
            d="M 500 135 L 500 175"
            stroke="#D97706"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <path
            d="M 455 192 L 380 192 L 380 250"
            stroke="#D97706"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <path
            d="M 435 270 L 515 270 L 515 330"
            stroke="#D97706"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />

          {/* Partículas animadas de execução contínua */}
          <motion.circle
            r="3.5"
            fill="#D97706"
            filter="drop-shadow(0 0 5px #F59E0B)"
            animate={{
              cx: [500, 500, 455, 380, 380, 435, 515, 515],
              cy: [135, 175, 192, 192, 250, 270, 270, 330],
              opacity: [0, 1, 1, 1, 1, 1, 1, 0],
            }}
            transition={{
              duration: 5.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Pulso radial no Nó Lambda */}
          <motion.circle
            cx="377"
            cy="269"
            r="16"
            stroke="#D97706"
            strokeWidth="1"
            fill="none"
            animate={{ scale: [0.7, 1.6], opacity: [0.7, 0] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeOut" }}
          />
        </svg>
      </div>
    );
  }

  if (theme === "api-integration") {
    // Integração de APIs: Dois servidores/sistemas conectados com chaves JSON e barramento central com pulsos
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none [mask-image:radial-gradient(circle_at_top_right,black_45%,transparent_75%)]">
        <svg
          className="w-full h-full opacity-25"
          viewBox="0 0 620 460"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Servidor / Sistema A (Origem - Ex: ERP / CRM) */}
          <g transform="translate(230, 70)">
            <rect
              width="105"
              height="80"
              rx="8"
              stroke="#2563EB"
              strokeWidth="1.4"
              fill="#EFF6FF"
              fillOpacity="0.5"
            />
            {/* Rack de servidores */}
            <line x1="12" y1="28" x2="93" y2="28" stroke="#BFDBFE" strokeWidth="1" />
            <line x1="12" y1="54" x2="93" y2="54" stroke="#BFDBFE" strokeWidth="1" />
            <circle cx="22" cy="18" r="2.5" fill="#3B82F6" />
            <circle cx="22" cy="41" r="2.5" fill="#10B981" />
            <circle cx="22" cy="67" r="2.5" fill="#3B82F6" />
            {/* Bloco de Código / JSON Symbol */}
            <text
              x="52"
              y="46"
              fill="#1E40AF"
              fontSize="14"
              fontFamily="monospace"
              fontWeight="bold"
            >
              {"{ API }"}
            </text>
          </g>

          {/* Servidor / Sistema B (Destino - Ex: Gateway / Banco) */}
          <g transform="translate(485, 230)">
            <rect
              width="110"
              height="85"
              rx="8"
              stroke="#1D4ED8"
              strokeWidth="1.4"
              fill="#EFF6FF"
              fillOpacity="0.5"
            />
            <line x1="12" y1="30" x2="98" y2="30" stroke="#BFDBFE" strokeWidth="1" />
            <line x1="12" y1="58" x2="98" y2="58" stroke="#BFDBFE" strokeWidth="1" />
            <circle cx="22" cy="19" r="2.5" fill="#10B981" />
            <circle cx="22" cy="44" r="2.5" fill="#3B82F6" />
            <circle cx="22" cy="71" r="2.5" fill="#10B981" />
            <text
              x="48"
              y="50"
              fill="#1E40AF"
              fontSize="14"
              fontFamily="monospace"
              fontWeight="bold"
            >
              {"[ DB ]"}
            </text>
          </g>

          {/* Barramento Central / Cabo de Conexão com Curva Bezier Suave */}
          <path
            d="M 335 110 C 430 110, 400 270, 485 270"
            stroke="#2563EB"
            strokeWidth="2"
            strokeDasharray="5 5"
            strokeOpacity="0.5"
          />
          <path
            d="M 335 125 C 410 125, 410 255, 485 255"
            stroke="#60A5FA"
            strokeWidth="1.2"
            strokeOpacity="0.35"
          />

          {/* Endpoints / Webhooks Intermediários */}
          <g transform="translate(370, 175)">
            <rect
              width="82"
              height="28"
              rx="6"
              stroke="#3B82F6"
              strokeWidth="1.2"
              fill="#DBEAFE"
              fillOpacity="0.7"
            />
            <text
              x="12"
              y="18"
              fill="#1E40AF"
              fontSize="10"
              fontFamily="monospace"
              fontWeight="bold"
            >
              POST 200 OK
            </text>
          </g>

          {/* Pulsos de Dados Trafegando pelo Barramento Central */}
          <motion.circle
            r="4.5"
            fill="#3B82F6"
            filter="drop-shadow(0 0 6px #60A5FA)"
            animate={{
              cx: [335, 410, 485],
              cy: [110, 190, 270],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.circle
            r="4"
            fill="#1D4ED8"
            filter="drop-shadow(0 0 5px #3B82F6)"
            animate={{
              cx: [485, 410, 335],
              cy: [255, 190, 125],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3.8,
              delay: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </svg>
      </div>
    );
  }

  if (theme === "custom-saas") {
    // SaaS: Painel de Controle / Dashboard com gráfico de linha ascendente, silhueta de métricas e cartões modulares
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none [mask-image:radial-gradient(circle_at_top_right,black_45%,transparent_75%)]">
        <svg
          className="w-full h-full opacity-25"
          viewBox="0 0 620 460"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Card Flutuante 1: Métricas de Usuários & Receita */}
          <g transform="translate(390, 50)">
            <rect
              width="180"
              height="80"
              rx="10"
              stroke="#4F46E5"
              strokeWidth="1.4"
              fill="#EEF2FF"
              fillOpacity="0.45"
            />
            <rect x="14" y="14" width="22" height="22" rx="5" fill="#818CF8" fillOpacity="0.4" />
            <line x1="45" y1="20" x2="95" y2="20" stroke="#4F46E5" strokeWidth="2" strokeOpacity="0.8" />
            <line x1="45" y1="29" x2="135" y2="29" stroke="#818CF8" strokeWidth="1" strokeOpacity="0.6" />
            {/* Indicador de badge ascendente (+24%) */}
            <rect x="125" y="14" width="42" height="16" rx="4" fill="#10B981" fillOpacity="0.2" />
            <text x="131" y="25" fill="#047857" fontSize="9" fontWeight="bold">
              +24.8%
            </text>
            {/* Mini barra de progresso */}
            <line x1="14" y1="56" x2="166" y2="56" stroke="#C7D2FE" strokeWidth="4" strokeLinecap="round" />
            <line x1="14" y1="56" x2="128" y2="56" stroke="#4F46E5" strokeWidth="4" strokeLinecap="round" />
          </g>

          {/* Card Flutuante 2: Dashboard com Gráfico de Linha Ascendente */}
          <g transform="translate(260, 160)">
            <rect
              width="270"
              height="150"
              rx="12"
              stroke="#4338CA"
              strokeWidth="1.4"
              fill="#EEF2FF"
              fillOpacity="0.4"
            />
            {/* Header do mini dashboard */}
            <line x1="16" y1="24" x2="80" y2="24" stroke="#4F46E5" strokeWidth="2" />
            <rect x="210" y="15" width="46" height="16" rx="4" fill="#C7D2FE" fillOpacity="0.4" />

            {/* Linhas de Grade do Gráfico */}
            <line x1="20" y1="55" x2="250" y2="55" stroke="#E0E7FF" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="20" y1="85" x2="250" y2="85" stroke="#E0E7FF" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="20" y1="115" x2="250" y2="115" stroke="#E0E7FF" strokeWidth="1" strokeDasharray="3 3" />

            {/* Curva de Tendência Ascendente (SaaS Growth) */}
            <path
              d="M 24 118 Q 70 110, 105 85 T 180 65 T 246 38"
              fill="none"
              stroke="#4F46E5"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* Área sob a curva */}
            <path
              d="M 24 118 Q 70 110, 105 85 T 180 65 T 246 38 L 246 130 L 24 130 Z"
              fill="#818CF8"
              fillOpacity="0.12"
            />

            {/* Pontos de Dados da Curva */}
            <circle cx="105" cy="85" r="3.5" fill="#4F46E5" />
            <circle cx="180" cy="65" r="3.5" fill="#4F46E5" />
            <motion.circle
              cx="246"
              cy="38"
              r="4.5"
              fill="#4338CA"
              filter="drop-shadow(0 0 6px #6366F1)"
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            />
          </g>

          {/* Card Flutuante 3: Wireframe de Tabela Relacional */}
          <g transform="translate(370, 335)">
            <rect
              width="200"
              height="80"
              rx="8"
              stroke="#6366F1"
              strokeWidth="1.2"
              fill="#F5F3FF"
              fillOpacity="0.45"
            />
            {/* Linhas da tabela */}
            <line x1="12" y1="26" x2="188" y2="26" stroke="#DDD6FE" strokeWidth="1" />
            <line x1="12" y1="50" x2="188" y2="50" stroke="#DDD6FE" strokeWidth="1" />
            <circle cx="24" cy="14" r="3" fill="#818CF8" />
            <circle cx="24" cy="38" r="3" fill="#A78BFA" />
            <circle cx="24" cy="62" r="3" fill="#C4B5FD" />
            <line x1="38" y1="14" x2="110" y2="14" stroke="#4F46E5" strokeWidth="1.5" />
            <line x1="38" y1="38" x2="130" y2="38" stroke="#6D28D9" strokeWidth="1.5" />
            <line x1="38" y1="62" x2="95" y2="62" stroke="#7C3AED" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    );
  }

  // Sites & Aplicações Web: Moldura de Janela de Navegador Web com 3 bolinhas, barra de endereço, cadeado e colunas rápidas
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none [mask-image:radial-gradient(circle_at_top_right,black_45%,transparent_75%)]">
      <svg
        className="w-full h-full opacity-25"
        viewBox="0 0 620 460"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Moldura da Janela do Navegador Web */}
        <g transform="translate(260, 45)">
          {/* Caixa Principal do Navegador */}
          <rect
            width="320"
            height="230"
            rx="12"
            stroke="#059669"
            strokeWidth="1.5"
            fill="#ECFDF5"
            fillOpacity="0.4"
          />

          {/* Barra Superior / Header do Browser */}
          <rect
            width="320"
            height="34"
            rx="12"
            fill="#D1FAE5"
            fillOpacity="0.6"
          />
          <line x1="0" y1="34" x2="320" y2="34" stroke="#A7F3D0" strokeWidth="1" />

          {/* 3 Bolinhas clássicas (Fechar, Minimizar, Maximizar) */}
          <circle cx="16" cy="17" r="4" fill="#EF4444" fillOpacity="0.75" />
          <circle cx="28" cy="17" r="4" fill="#F59E0B" fillOpacity="0.75" />
          <circle cx="40" cy="17" r="4" fill="#10B981" fillOpacity="0.75" />

          {/* Barra de Endereço com Cadeado */}
          <rect
            x="60"
            y="7"
            width="200"
            height="20"
            rx="6"
            fill="white"
            stroke="#A7F3D0"
            strokeWidth="1"
          />
          {/* Ícone de Cadeado de Segurança (SSL / HTTPS) */}
          <path
            d="M 72 17 L 72 15 A 3 3 0 0 1 78 15 L 78 17 M 70 17 L 80 17 L 80 23 L 70 23 Z"
            stroke="#059669"
            strokeWidth="1"
            fill="none"
          />
          {/* URL text line */}
          <line x1="86" y1="17" x2="175" y2="17" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" />

          {/* Conteúdo Interno do Site (Wireframe Rápido & Hero) */}
          {/* Hero Banner interno */}
          <rect
            x="16"
            y="48"
            width="288"
            height="62"
            rx="8"
            fill="#A7F3D0"
            fillOpacity="0.3"
          />
          <line x1="32" y1="65" x2="160" y2="65" stroke="#047857" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="32" y1="76" x2="210" y2="76" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" />
          <rect x="32" y="86" width="55" height="14" rx="4" fill="#059669" />

          {/* 3 Colunas de Conteúdo do Site */}
          <rect x="16" y="122" width="88" height="88" rx="8" stroke="#A7F3D0" strokeWidth="1" fill="white" />
          <rect x="24" y="132" width="72" height="36" rx="4" fill="#D1FAE5" fillOpacity="0.6" />
          <line x1="24" y1="178" x2="68" y2="178" stroke="#047857" strokeWidth="2" strokeLinecap="round" />
          <line x1="24" y1="188" x2="84" y2="188" stroke="#6EE7B7" strokeWidth="1.5" strokeLinecap="round" />

          <rect x="116" y="122" width="88" height="88" rx="8" stroke="#A7F3D0" strokeWidth="1" fill="white" />
          <rect x="124" y="132" width="72" height="36" rx="4" fill="#D1FAE5" fillOpacity="0.6" />
          <line x1="124" y1="178" x2="168" y2="178" stroke="#047857" strokeWidth="2" strokeLinecap="round" />
          <line x1="124" y1="188" x2="184" y2="188" stroke="#6EE7B7" strokeWidth="1.5" strokeLinecap="round" />

          <rect x="216" y="122" width="88" height="88" rx="8" stroke="#A7F3D0" strokeWidth="1" fill="white" />
          <rect x="224" y="132" width="72" height="36" rx="4" fill="#D1FAE5" fillOpacity="0.6" />
          <line x1="224" y1="178" x2="268" y2="178" stroke="#047857" strokeWidth="2" strokeLinecap="round" />
          <line x1="224" y1="188" x2="284" y2="188" stroke="#6EE7B7" strokeWidth="1.5" strokeLinecap="round" />
        </g>

        {/* Selo 99 PageSpeed Flutuante */}
        <g transform="translate(470, 305)">
          <rect
            width="120"
            height="46"
            rx="10"
            stroke="#10B981"
            strokeWidth="1.2"
            fill="#ECFDF5"
            fillOpacity="0.9"
            filter="drop-shadow(0 2px 8px rgba(16, 185, 129, 0.15))"
          />
          {/* Círculo com medidor 99 */}
          <circle cx="28" cy="23" r="14" stroke="#10B981" strokeWidth="2" strokeDasharray="60 15" fill="none" />
          <text x="21" y="27" fill="#047857" fontSize="10" fontWeight="bold">99</text>
          <text x="50" y="21" fill="#065F46" fontSize="10" fontWeight="bold">PageSpeed</text>
          <text x="50" y="32" fill="#059669" fontSize="8">Ultra-rápido</text>
        </g>
      </svg>
    </div>
  );
}
