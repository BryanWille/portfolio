"use client";

import React from "react";
import {
  MessageCircle,
  ArrowDown,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { profileData } from "@/data/profile";
import CodeToValueBackground from "./CodeToValueBackground";

export default function HeroSection() {
  const { links, email } = profileData;

  const photoSrc =
    "https://media.licdn.com/dms/image/v2/D4D03AQFNLkguL7Db-A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1706217771950?e=1794441600&v=beta&t=-Tnr_UeLln0R0Jxt3HA9BvE3KGPwCKiZrQM_MU-Nd8U";

  return (
    <section
      id="inicio"
      className="relative bg-[#FAFAFA] pt-12 pb-16 sm:pt-20 sm:pb-24 overflow-hidden"
    >
      {/* Animação de fundo sutil: Código se transformando em Valor */}
      <CodeToValueBackground />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* 2 Colunas Limpas: Apresentação na Esquerda + Foto na Direita */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Coluna Esquerda: Texto Claro, Humano e Direto */}
          <div className="lg:col-span-7 space-y-6">
            {/* H1 Principal */}
            <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
              Olá, eu sou{" "}
              <span className="text-emerald-700">Bryan Wille</span>.
            </h1>

            {/* Subtítulo principal enxuto */}
            <p className="text-xl md:text-2xl font-medium text-neutral-800 leading-snug">
              Cientista da Computação e desenvolvedor numa das maiores consultorias do mundo. 
              Acima de tudo, movido por{" "}
              <span className="text-emerald-700 font-bold">
                fazer a diferença
              </span>.
            </p>

            {/* Chamada única e direta antes dos botões */}
            <div className="text-neutral-600 text-base md:text-lg space-y-1">
              <p>Uso tecnologia para resolver problemas e automatizar processos.</p>
              <p className="text-emerald-700 font-bold">
                Quer ver isso na prática ou conversar sobre um projeto?
              </p>
            </div>

            {/* Apenas 2 Botões Claros */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href={profileData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-emerald-600 px-7 py-4 text-base font-bold text-white shadow-md transition-all hover:bg-emerald-700 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Conversar no WhatsApp</span>
              </a>

              <a
                href="#meus-projetos"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300 bg-white px-7 py-4 text-base font-semibold text-neutral-800 shadow-sm transition-all hover:bg-neutral-50 hover:border-neutral-400"
              >
                <span>Conhecer meus projetos</span>
                <ArrowDown className="h-4 w-4 text-neutral-500" />
              </a>
            </div>

            {/* Links Sociais Simples */}
            <div className="pt-4 flex flex-wrap items-center gap-5 text-sm font-medium text-neutral-600">
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

          {/* Coluna Direita: Minha Foto Grande, Nítida e Sem Poluição */}
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
