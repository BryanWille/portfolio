"use client";

import React, { useState } from "react";
import { MessageCircle, Menu, X, ArrowUpRight } from "lucide-react";
import { profileData } from "@/data/profile";

const navLinks = [
  { label: "Sobre mim", href: "#sobre-mim" },
  { label: "Meus Projetos", href: "#meus-projetos" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Publicações", href: "#publicacoes" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-neutral-100 transition-all">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between py-4">
          {/* Esquerda: Apenas Bryan Wille limpo */}
          <a
            href="#inicio"
            className="text-lg font-bold tracking-tight text-neutral-900 hover:text-emerald-700 transition-colors"
          >
            Bryan Wille
          </a>

          {/* Centro: Links simples e humanos */}
          <nav
            aria-label="Navegação Principal"
            className="hidden md:flex items-center gap-8"
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

          {/* Direita: Botão WhatsApp limpo e claro */}
          <div className="hidden md:flex items-center">
            <a
              href={profileData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-emerald-700 hover:shadow-md"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp</span>
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
                <span>Conversar no WhatsApp</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
