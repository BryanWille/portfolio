"use client";

import React from "react";
import {
  MessageCircle,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { profileData } from "@/data/profile";
import CodeToValueBackground from "./CodeToValueBackground";

export default function HeroSection({ id = "inicio" }) {
  const { links, email, hero } = profileData;

  const photoSrc =
    "https://media.licdn.com/dms/image/v2/D4D03AQFNLkguL7Db-A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1706217771950?e=1794441600&v=beta&t=-Tnr_UeLln0R0Jxt3HA9BvE3KGPwCKiZrQM_MU-Nd8U";

  return (
    <section
      id={id}
      className="relative bg-[#FAFAFA] pt-10 pb-16 sm:pt-16 sm:pb-20 overflow-hidden"
    >
      {/* Animação de fundo sutil: Código se transformando em Valor */}
      <CodeToValueBackground />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* 2 Colunas: Proposta Comercial na Esquerda + Foto na Direita */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Coluna Esquerda: Proposta de Alto Impacto */}
          <div className="lg:col-span-7 space-y-5">
            {/* 1. Tagline Superior (Badge) */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200/80 bg-emerald-50/90 px-3.5 py-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-emerald-800 shadow-2xs">
              <span className="h-2 w-2 rounded-full bg-emerald-600 animate-pulse shrink-0" />
              <span>{hero.badge}</span>
            </div>

            {/* 2. Título Principal (H1) - Pergunta Instigante de Negócio */}
            <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl lg:text-[2.65rem] lg:leading-[1.18]">
              Falta de visibilidade, retrabalho manual ou sistemas que{" "}
              <span className="text-emerald-700">não se conversam?</span>
            </h1>

            {/* 3. Subtítulo / Texto de Apoio com Link Corporativo */}
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed max-w-xl">
              Sou Bryan Wille, Cientista da Computação e líder técnico na{" "}
              <a
                href="https://www.deloitte.com/global/en/about/recognition/analyst-relations/deloitte-ranked-number-one-consulting-service-provider-worldwide-by-revenue.html"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-emerald-700 underline decoration-emerald-300 underline-offset-4 hover:text-emerald-900 hover:decoration-emerald-500 transition-colors"
              >
                líder global de consultoria
              </a>
              . Crio sites, automações e integrações sob medida para destravar a eficiência da sua equipe e transformar sua presença online.
            </p>

            {/* 4. Botões de Ação (CTAs) */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <a
                href={profileData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3.5 text-sm sm:text-base font-bold text-white shadow-md transition-all hover:bg-emerald-700 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
              >
                <MessageCircle className="h-5 w-5 shrink-0" />
                <span>Iniciar Projeto via WhatsApp ↗</span>
              </a>

              <a
                href="#solucoes"
                className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-6 py-3.5 text-sm sm:text-base font-semibold text-neutral-800 shadow-sm transition-all hover:bg-neutral-50 hover:border-neutral-400 whitespace-nowrap"
              >
                <span>Ver Soluções na Prática ↓</span>
              </a>
            </div>

            {/* Links Sociais Simples */}
            <div className="pt-3 flex flex-wrap items-center gap-5 text-sm font-medium text-neutral-600">
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-emerald-700 transition-colors"
              >
                <Linkedin className="h-4 w-4 text-blue-600" />
                <span>LinkedIn</span>
              </a>

              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-emerald-700 transition-colors"
              >
                <Github className="h-4 w-4 text-neutral-800" />
                <span>GitHub</span>
              </a>

              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-1.5 hover:text-emerald-700 transition-colors"
              >
                <Mail className="h-4 w-4 text-neutral-500" />
                <span>{email}</span>
              </a>
            </div>
          </div>

          {/* Coluna Direita: Foto Grande e Nítida */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
              <div className="overflow-hidden rounded-3xl bg-neutral-100 shadow-xl border border-neutral-200">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photoSrc}
                  alt="Foto de Bryan Wille"
                  className="w-full h-auto object-cover object-center aspect-square"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
