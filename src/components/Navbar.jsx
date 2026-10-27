"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { profileData } from "@/data/profile";

const navLinks = [
  { label: "Soluções", href: "#solucoes" },
  { label: "Projetos", href: "#projetos" },
  { label: "Por Que Eu?", href: "#autoridade" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FAFAF9]/85 backdrop-blur-md border-b border-slate-200/60 transition-colors">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Esquerda: Identidade Tipográfica Editorial */}
          <a
            href="#inicio"
            className="flex items-baseline gap-3 group transition-colors"
          >
            <span className="font-display text-base font-bold tracking-tight text-slate-900 group-hover:text-[#064E3B] transition-colors">
              Bryan Wille
            </span>
            <span className="hidden sm:inline-block text-slate-300 font-light">
              /
            </span>
            <span className="hidden sm:inline-block font-mono text-[11px] uppercase tracking-wider text-slate-500">
              Engenharia de Software
            </span>
          </a>

          {/* Centro: Links de Navegação Limpos */}
          <nav
            aria-label="Navegação Principal"
            className="hidden md:flex items-center gap-8"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Direita: Botão CTA em Verde Floresta Profundo */}
          <div className="hidden md:flex items-center">
            <a
              href={profileData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#064E3B] px-4 py-2 text-xs font-semibold tracking-wide text-white shadow-editorial transition-all hover:bg-[#04392B]"
            >
              <span>Solicitar Orçamento</span>
              <span className="font-mono text-white/75">↗</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir menu"
              className="rounded-lg p-2 text-slate-700 hover:bg-slate-200/50"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {mobileMenuOpen && (
        <div className="border-b border-slate-200/60 bg-[#FAFAF9] px-4 pt-3 pb-6 md:hidden">
          <div className="mb-3 pb-2 border-b border-slate-200/60">
            <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500">
              Engenharia de Soluções &amp; Software
            </span>
          </div>
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-800 hover:text-[#064E3B] py-1"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href={profileData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#064E3B] py-3 text-sm font-semibold text-white"
              >
                <span>Solicitar Orçamento ↗</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
