"use client";

import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import { profileData } from "@/data/profile";

export default function WhatsAppFloatingButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <aside
      aria-label="Atendimento rápido"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5"
    >
      {/* Floating Tooltip Editorial */}
      <div
        className={`pointer-events-none rounded-lg border border-slate-200/80 bg-white/95 backdrop-blur-md px-3.5 py-2 font-mono text-xs font-medium text-slate-800 shadow-editorial-hover transition-all duration-200 ${
          hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
        }`}
      >
        Iniciar conversa no WhatsApp ↗
      </div>

      {/* Floating Action Button em Verde Floresta Profundo */}
      <a
        href={profileData.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com Bryan no WhatsApp"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="group relative flex h-13 w-13 p-3.5 items-center justify-center rounded-full bg-[#064E3B] text-white shadow-editorial-hover transition-all duration-200 hover:scale-105 hover:bg-[#04392B] focus:outline-none"
      >
        <MessageCircle className="relative h-6 w-6 text-white" />
      </a>
    </aside>
  );
}
