"use client";

import React, { useState } from "react";
import { Linkedin, Github, Mail, Copy, Check } from "lucide-react";
import { profileData } from "@/data/profile";
import CodeToValueBackground from "./CodeToValueBackground";

export default function HeroSection({ id = "inicio" }) {
  const { links, email, hero } = profileData;
  const [copied, setCopied] = useState(false);

  const photoSrc =
    "https://media.licdn.com/dms/image/v2/D4D03AQFNLkguL7Db-A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1706217771950?e=1794441600&v=beta&t=-Tnr_UeLln0R0Jxt3HA9BvE3KGPwCKiZrQM_MU-Nd8U";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("bryanelliw@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback caso clipboard API não esteja disponível
    }
  };

  return (
    <section
      id={id}
      className="relative bg-[#FAFAF9] pt-16 pb-24 sm:pt-24 sm:pb-32 overflow-hidden"
    >
      {/* Animação de fundo sutil: Código se transformando em Valor */}
      <CodeToValueBackground />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Coluna Esquerda: Hierarquia Editorial Forte */}
          <div className="lg:col-span-7 space-y-7">
            {/* 1. Micro-label em Monospace sem caixinha */}
            <div className="inline-flex items-center gap-2.5 font-mono text-xs tracking-wider uppercase text-slate-500">
              <span className="h-2 w-2 rounded-full bg-[#064E3B]" />
              <span>{hero.badge}</span>
            </div>

            {/* 2. Título Principal (H1) com entrelinha ajustada */}
            <h1 className="font-display text-3xl sm:text-5xl lg:text-[3.2rem] font-bold tracking-tight leading-[1.08] text-slate-900">
              Falta de visibilidade, retrabalho manual ou sistemas que{" "}
              <span className="text-[#064E3B]">não se conversam?</span>
            </h1>

            {/* 3. Subtítulo / Texto de Apoio com Link Corporativo */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              Sou Bryan Wille, Cientista da Computação e líder técnico na{" "}
              <a
                href="https://www.deloitte.com/global/en/about/recognition/analyst-relations/deloitte-ranked-number-one-consulting-service-provider-worldwide-by-revenue.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 dark:text-emerald-400 font-semibold underline decoration-emerald-500/40 hover:decoration-emerald-500 underline-offset-4 transition-colors inline-flex items-center gap-1"
              >
                <span>líder global de consultoria</span>
                <span className="text-xs opacity-70">↗</span>
              </a>
              . Crio sites, automações e integrações sob medida para destravar a eficiência da sua equipe e transformar sua presença online.
            </p>

            {/* 4. Botões de Ação (CTAs) */}
            <div className="pt-1 flex flex-wrap items-center gap-4">
              <a
                href={profileData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#064E3B] px-6 py-3.5 text-sm sm:text-base font-semibold text-white shadow-editorial transition-all hover:bg-[#04392B] whitespace-nowrap"
              >
                <span>Iniciar Projeto via WhatsApp</span>
                <span className="font-mono text-white/75">↗</span>
              </a>

              <a
                href="#solucoes"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300/80 bg-white/80 px-6 py-3.5 text-sm sm:text-base font-medium text-slate-800 shadow-editorial transition-all hover:bg-white hover:border-slate-400 whitespace-nowrap"
              >
                <span>Ver Soluções na Prática</span>
                <span className="font-mono text-slate-400">↓</span>
              </a>
            </div>

            {/* 5. Barra de Redes Sociais & Contato Rápido */}
            <div className="pt-6 border-t border-slate-200/60 flex flex-wrap items-center gap-3 mt-6 text-sm text-slate-600">
              {/* LinkedIn */}
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-medium hover:text-emerald-600 transition-colors"
              >
                <Linkedin className="h-4 w-4 shrink-0" />
                <span>LinkedIn</span>
                <span className="text-xs opacity-70">↗</span>
              </a>

              <span className="text-slate-300 dark:text-slate-700 select-none">
                •
              </span>

              {/* GitHub */}
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-medium hover:text-emerald-600 transition-colors"
              >
                <Github className="h-4 w-4 shrink-0" />
                <span>GitHub</span>
                <span className="text-xs opacity-70">↗</span>
              </a>

              <span className="text-slate-300 dark:text-slate-700 select-none">
                |
              </span>

              {/* E-mail com Ação Direta + Botão Copiar */}
              <div className="inline-flex items-center gap-2">
                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center gap-1.5 font-medium hover:text-emerald-600 transition-colors"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  <span>{email}</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  title="Copiar e-mail"
                  aria-label="Copiar e-mail"
                  className="inline-flex items-center gap-1 rounded-md border border-slate-200/80 bg-white/80 px-2 py-1 text-xs font-mono text-slate-500 hover:text-emerald-600 hover:border-slate-300 transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-600" />
                      <span className="text-emerald-600 font-semibold">
                        Copiado!
                      </span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span className="sr-only sm:not-sr-only">Copiar</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Retrato Editorial Limpo */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
              <div className="overflow-hidden rounded-2xl bg-slate-100 border border-slate-200/80 shadow-editorial-hover">
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
