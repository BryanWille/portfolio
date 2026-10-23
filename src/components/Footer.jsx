import React from "react";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { profileData } from "@/data/profile";

export default function Footer() {
  const { fullName, role, company, location, email, phone, links, whatsappUrl } =
    profileData;

  return (
    <footer
      id="contato"
      className="scroll-mt-16 bg-white text-[#111827] border-t border-[#E5E7EB]"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 border-b border-[#E5E7EB] pb-12">
          {/* Identity & Direct Call-to-Action */}
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 font-mono text-xs font-semibold text-[#0F5338]">
              <span className="h-2 w-2 rounded-full bg-[#0F5338] animate-pulse" />
              DISPONÍVEL PARA CONEXÕES &amp; NOVOS PROJETOS
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-[#111827]">
              {fullName}
            </h2>

            <p className="text-sm leading-relaxed text-[#4B5563] max-w-xl">
              {role} na {company}. Bacharel em Ciência da Computação (Dom Helder)
              e Pós-graduando em Engenharia de IA e MLOps pela PUC Minas.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              {/* WhatsApp Primary Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#0F5338] px-4 py-2.5 font-mono text-xs font-bold text-white shadow-sm transition-all hover:bg-[#0B3E2A] hover:shadow"
              >
                <MessageCircle className="h-4 w-4 text-emerald-300" />
                <span>Chamar no WhatsApp</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>

              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl border border-[#E5E7EB] bg-[#FAFAFA] px-4 py-2.5 font-mono text-xs font-semibold text-[#111827] transition-colors hover:border-[#2563EB] hover:text-[#2563EB]"
              >
                <Linkedin className="h-3.5 w-3.5 text-[#2563EB]" />
                <span>LinkedIn</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>

              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl border border-[#E5E7EB] bg-[#FAFAFA] px-4 py-2.5 font-mono text-xs font-semibold text-[#111827] transition-colors hover:border-[#2563EB] hover:text-[#2563EB]"
              >
                <Github className="h-3.5 w-3.5" />
                <span>GitHub</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>

              <a
                href={links.email}
                className="inline-flex items-center gap-1.5 rounded-xl border border-[#E5E7EB] bg-[#FAFAFA] px-4 py-2.5 font-mono text-xs font-semibold text-[#111827] transition-colors hover:border-[#2563EB] hover:text-[#2563EB]"
              >
                <Mail className="h-3.5 w-3.5 text-[#2563EB]" />
                <span>E-mail</span>
              </a>
            </div>
          </div>

          {/* Direct Channels */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#111827]">
              Canais Diretos
            </h3>
            <ul className="space-y-2.5 font-mono text-xs text-[#4B5563]">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#2563EB] shrink-0" />
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
                  className="flex items-center gap-2 hover:text-[#2563EB] transition-colors"
                >
                  <Mail className="h-4 w-4 text-[#2563EB] shrink-0" />
                  <span>{email}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#111827]">
              Projetos em Destaque
            </h3>
            <ul className="space-y-2 font-mono text-xs">
              <li>
                <a
                  href={links.noobie}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#4B5563] hover:text-[#2563EB] transition-colors"
                >
                  <span>Noobie (Gestão Financeira)</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </li>
              <li>
                <a
                  href={links.bookie}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#4B5563] hover:text-[#2563EB] transition-colors"
                >
                  <span>Bookie (Biblioteca &amp; Leitura)</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </li>
              <li>
                <a
                  href="#sobre-mim"
                  className="text-neutral-600 hover:text-emerald-700 transition-colors"
                >
                  Sobre mim
                </a>
              </li>
              <li>
                <a
                  href="#meus-projetos"
                  className="text-neutral-600 hover:text-emerald-700 transition-colors"
                >
                  Meus Projetos
                </a>
              </li>
              <li>
                <a
                  href="#experiencia"
                  className="text-neutral-600 hover:text-emerald-700 transition-colors"
                >
                  Experiência
                </a>
              </li>
              <li>
                <a
                  href="#publicacoes"
                  className="text-neutral-600 hover:text-emerald-700 transition-colors"
                >
                  Publicações
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Colophon */}
        <div className="mt-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center font-mono text-xs text-[#4B5563]">
          <p>
            © {new Date().getFullYear()} {fullName}. Todos os direitos reservados.
          </p>
          <p className="text-[11px]">
            NEXT.JS APP ROUTER · JAVASCRIPT ES6+ (ZERO TYPESCRIPT) · EDITORIAL LIGHT MODE
          </p>
        </div>
      </div>
    </footer>
  );
}
