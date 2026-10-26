import React from "react";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { profileData } from "@/data/profile";

export default function Footer() {
  const { fullName, location, email, phone, links, whatsappUrl } = profileData;

  return (
    <footer
      id="contato"
      className="scroll-mt-16 bg-white text-[#111827] border-t border-[#E5E7EB]"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 border-b border-[#E5E7EB] pb-14">
          {/* Call-to-Action Comercial Principal */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 font-mono text-xs font-semibold text-[#0F5338]">
              <span className="h-2 w-2 rounded-full bg-[#0F5338] animate-pulse" />
              DISPONÍVEL PARA NOVOS PROJETOS &amp; CONSULTORIA
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#111827] leading-tight">
              Pronto para levar a tecnologia da sua empresa a outro nível?
            </h2>

            <p className="text-sm sm:text-base leading-relaxed text-[#4B5563] max-w-2xl">
              Seja para criar um novo site, automatizar uma rotina interna ou integrar os sistemas do seu negócio: conte com engenharia de verdade para tirar o projeto do papel.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              {/* Botão Primário WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition-all hover:bg-emerald-700 hover:shadow-md"
              >
                <MessageCircle className="h-4 w-4 text-white" />
                <span>Chamar no WhatsApp agora ↗</span>
              </a>

              {/* Canais Secundários */}
              <a
                href={links.email}
                className="inline-flex items-center gap-1.5 rounded-xl border border-[#E5E7EB] bg-[#FAFAFA] px-4 py-3 font-mono text-xs font-semibold text-[#111827] transition-colors hover:border-emerald-600 hover:text-emerald-700"
              >
                <Mail className="h-3.5 w-3.5 text-emerald-700" />
                <span>E-mail Profissional</span>
              </a>

              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl border border-[#E5E7EB] bg-[#FAFAFA] px-4 py-3 font-mono text-xs font-semibold text-[#111827] transition-colors hover:border-[#2563EB] hover:text-[#2563EB]"
              >
                <Linkedin className="h-3.5 w-3.5 text-[#2563EB]" />
                <span>LinkedIn</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>

              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl border border-[#E5E7EB] bg-[#FAFAFA] px-4 py-3 font-mono text-xs font-semibold text-[#111827] transition-colors hover:border-neutral-900 hover:text-neutral-900"
              >
                <Github className="h-3.5 w-3.5" />
                <span>GitHub</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Canais Diretos */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#111827]">
              Canais Diretos
            </h3>
            <ul className="space-y-2.5 font-mono text-xs text-[#4B5563]">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-emerald-700 shrink-0" />
                <span>{location}</span>
              </li>
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-emerald-800 font-semibold hover:underline transition-colors"
                >
                  <MessageCircle className="h-4 w-4 text-[#0F5338] shrink-0" />
                  <span>WhatsApp: {phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={links.email}
                  className="flex items-center gap-2 hover:text-emerald-700 transition-colors"
                >
                  <Mail className="h-4 w-4 text-emerald-700 shrink-0" />
                  <span>{email}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Navegação Rápida */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#111827]">
              Navegação
            </h3>
            <ul className="space-y-2 font-mono text-xs">
              <li>
                <a
                  href="#inicio"
                  className="text-neutral-600 hover:text-emerald-700 transition-colors"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#solucoes"
                  className="text-neutral-600 hover:text-emerald-700 transition-colors"
                >
                  Soluções
                </a>
              </li>
              <li>
                <a
                  href="#projetos"
                  className="text-neutral-600 hover:text-emerald-700 transition-colors"
                >
                  Projetos
                </a>
              </li>
              <li>
                <a
                  href="#autoridade"
                  className="text-neutral-600 hover:text-emerald-700 transition-colors"
                >
                  Por Que Eu?
                </a>
              </li>
              <li>
                <a
                  href={links.noobie}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#4B5563] hover:text-emerald-700 transition-colors"
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
                  className="inline-flex items-center gap-1 text-[#4B5563] hover:text-emerald-700 transition-colors"
                >
                  <span>Bookie Web</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Colophon */}
        <div className="mt-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center font-mono text-xs text-[#4B5563]">
          <p>
            © {new Date().getFullYear()} {fullName} · Engenharia de Soluções &amp; Software. Todos os direitos reservados.
          </p>
          <p className="text-[11px]">
            NEXT.JS APP ROUTER · ALTA PERFORMANCE · ARQUITETURA ESCALÁVEL
          </p>
        </div>
      </div>
    </footer>
  );
}
