import React from "react";
import { ArrowUpRight } from "lucide-react";
import { profileData } from "@/data/profile";

export default function Footer() {
  const { fullName, location, email, phone, links, whatsappUrl } = profileData;

  return (
    <footer
      id="contato"
      className="scroll-mt-16 bg-[#FAFAF9] text-slate-900 border-t border-slate-200/60"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:py-28 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 border-b border-slate-200/60 pb-16">
          {/* Call-to-Action Comercial Principal */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2.5 font-mono text-xs tracking-wider uppercase text-slate-500">
              <span className="h-2 w-2 rounded-full bg-[#064E3B]" />
              <span>04 // DISPONÍVEL PARA NOVOS PROJETOS &amp; CONSULTORIA</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              Pronto para levar a tecnologia da sua empresa a outro nível?
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-slate-600 max-w-2xl">
              Seja para criar um novo site, automatizar uma rotina interna ou integrar os sistemas do seu negócio: conte com engenharia de verdade para tirar o projeto do papel.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              {/* Botão Primário WhatsApp em Verde Floresta */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-xl bg-[#064E3B] px-6 py-3.5 text-sm font-semibold text-white shadow-editorial transition-all hover:bg-[#04392B]"
              >
                <span>Chamar no WhatsApp agora</span>
                <span className="font-mono text-white/75">↗</span>
              </a>

              {/* Canais Secundários Editorial */}
              <a
                href={links.email}
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-300/80 bg-white/80 px-4 py-3.5 font-mono text-xs uppercase tracking-wider text-slate-700 transition-colors hover:border-slate-900 hover:text-slate-900"
              >
                <span>E-mail Profissional</span>
              </a>

              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-300/80 bg-white/80 px-4 py-3.5 font-mono text-xs uppercase tracking-wider text-slate-700 transition-colors hover:border-slate-900 hover:text-slate-900"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>

              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-300/80 bg-white/80 px-4 py-3.5 font-mono text-xs uppercase tracking-wider text-slate-700 transition-colors hover:border-slate-900 hover:text-slate-900"
              >
                <span>GitHub</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Canais Diretos */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-wider text-slate-400">
              Canais Diretos
            </h3>
            <ul className="space-y-3 font-mono text-xs text-slate-600">
              <li>{location}</li>
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#064E3B] font-semibold hover:underline transition-colors"
                >
                  WhatsApp: {phone}
                </a>
              </li>
              <li>
                <a
                  href={links.email}
                  className="hover:text-slate-900 transition-colors"
                >
                  {email}
                </a>
              </li>
            </ul>
          </div>

          {/* Navegação Rápida */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-wider text-slate-400">
              Navegação
            </h3>
            <ul className="space-y-2.5 font-mono text-xs">
              <li>
                <a
                  href="#inicio"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#solucoes"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Soluções
                </a>
              </li>
              <li>
                <a
                  href="#projetos"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Projetos
                </a>
              </li>
              <li>
                <a
                  href="#autoridade"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Por Que Eu?
                </a>
              </li>
              <li>
                <a
                  href={links.noobie}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-slate-600 hover:text-slate-900 transition-colors"
                >
                  <span>Noobie SaaS</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </li>
              <li>
                <a
                  href={links.bookie}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-slate-600 hover:text-slate-900 transition-colors"
                >
                  <span>Bookie Web</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Colophon */}
        <div className="mt-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center font-mono text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {fullName} · Engenharia de Soluções &amp; Software. Todos os direitos reservados.
          </p>
          <p className="text-[11px] uppercase tracking-wider">
            NEXT.JS APP ROUTER · ALTA PERFORMANCE · ARQUITETURA ESCALÁVEL
          </p>
        </div>
      </div>
    </footer>
  );
}
