"use client";

import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import { profileData } from "@/data/profile";

export default function WhatsAppFloatingButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <aside
      aria-label="Atendimento rápido"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2"
    >
      {/* Floating Tooltip */}
      <div
        className={`pointer-events-none rounded-xl border border-emerald-200 bg-white px-3.5 py-1.5 font-mono text-xs font-semibold text-emerald-950 shadow-lg transition-all duration-200 ${
          hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
        }`}
      >
        Falar com Bryan no WhatsApp 💬
      </div>

      {/* Floating Action Button */}
      <a
        href={profileData.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com Bryan no WhatsApp"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#0F5338] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[#0B3E2A] hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-emerald-400"
      >
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500 opacity-40 animate-ping pointer-events-none" />

        {/* WhatsApp Icon */}
        <MessageCircle className="relative h-7 w-7 text-white transition-transform group-hover:scale-110" />
      </a>
    </aside>
  );
}

