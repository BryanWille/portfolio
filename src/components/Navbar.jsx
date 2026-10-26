"use client";

import React, { useState } from "react";
import { MessageCircle, Menu, X } from "lucide-react";
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
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-neutral-100 transition-all">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between py-4">
          {/* Esquerda: Identidade Comercial */}
          <a
            href="#inicio"
            className="flex items-center gap-2.5 group transition-colors"
          >
            <span className="text-lg font-bold tracking-tight text-neutral-900 group-hover:text-emerald-700 transition-colors">
              Bryan Wille
            </span>
            <span className="hidden sm:inline-block text-neutral-300 font-light">
              |
            </span>
            <span className="hidden sm:inline-block text-xs font-medium text-neutral-500 tracking-tight">
              Engenharia de Soluções &amp; Software
            </span>
          </a>

          {/* Centro: Links de Navegação B2B */}
          <nav
            aria-label="Navegação Principal"
            className="hidden md:flex items-center gap-7"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Direita: Botão CTA Comercial */}
          <div className="hidden md:flex items-center">
            <a
              href={profileData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-emerald-700 hover:shadow-md"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Solicitar Orçamento ↗</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir menu"
              className="rounded-lg p-2 text-neutral-700 hover:bg-neutral-100"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {mobileMenuOpen && (
        <div className="border-b border-neutral-100 bg-white px-4 pt-3 pb-6 md:hidden">
          <div className="mb-3 pb-2 border-b border-neutral-100">
            <span className="text-xs font-medium text-neutral-500">
              Engenharia de Soluções &amp; Software
            </span>
          </div>
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-neutral-800 hover:text-emerald-700 py-1"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href={profileData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 py-3 text-sm font-semibold text-white shadow-sm"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Solicitar Orçamento ↗</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
