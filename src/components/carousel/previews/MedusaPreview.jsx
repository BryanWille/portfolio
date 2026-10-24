"use client";

import React from "react";
import { Maximize2, ArrowUpRight } from "lucide-react";

export default function MedusaPreview({ project, onOpenDetails }) {
  return (
    <div
      onClick={() => onOpenDetails(project)}
      className="group cursor-pointer overflow-hidden rounded-2xl border border-[#D1EAEB] bg-white shadow-xl transition-all hover:border-[#00979D]/50 hover:shadow-2xl hover:scale-[1.01] h-[385px] flex flex-col justify-between"
    >
      {/* Top bar minimalista estilo Telegram/Arduino */}
      <div className="flex items-center justify-between border-b border-[#D1EAEB] bg-[#F8FAFC] px-4 py-2.5 flex-shrink-0">
        <div className="flex items-center gap-2">
          <span className="flex h-2.5 w-2.5 rounded-full bg-[#00979D]" />
          <span className="text-[11px] font-bold text-[#0F172A] tracking-wide">
            Medusa Bot · ESP32-CAM
          </span>
        </div>
        <span className="rounded bg-[#00979D]/10 px-2 py-0.5 text-[10px] text-[#00979D] border border-[#00979D]/20 font-bold">
          Google Cloud Vision
        </span>
        <Maximize2 className="h-3.5 w-3.5 text-[#64748B] group-hover:text-[#00979D] transition-colors" />
      </div>

      {/* Chat do Telegram simulado */}
      <div className="p-4 sm:p-5 space-y-3 bg-[#FFFFFF] flex-1 flex flex-col justify-between">
        {/* Comando do usuário enviado */}
        <div className="flex justify-end">
          <div className="rounded-2xl rounded-tr-xs bg-[#00979D] text-white px-3.5 py-1.5 shadow-xs flex items-center gap-1.5">
            <span className="font-mono text-xs font-bold">/photo</span>
            <span className="text-[9px] text-white/75">18:57</span>
          </div>
        </div>

        {/* Resposta do Bot com miniatura da foto e rótulos */}
        <div className="flex justify-start">
          <div className="max-w-[88%] rounded-2xl rounded-tl-xs border border-[#D1EAEB] bg-[#F8FAFC] p-3 space-y-2.5 shadow-xs">
            {/* Foto capturada com flash */}
            <div className="relative overflow-hidden rounded-xl border border-[#D1EAEB] bg-slate-900">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/projects/medusa-bot/telegram-result.png"
                alt="Captura real do Medusa Bot"
                className="w-full h-28 object-cover object-center"
              />
              <span className="absolute top-1.5 right-1.5 rounded-md bg-black/60 px-1.5 py-0.5 font-mono text-[9px] text-white font-semibold backdrop-blur-xs">
                ESP32 · 90°
              </span>
            </div>

            {/* Rótulos traduzidos detectados pela IA */}
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#00979D] block">
                🏷️ Detecção Google Vision:
              </span>
              <div className="flex flex-wrap gap-1">
                {[
                  "Evento",
                  "Cotovelo",
                  "Diversão",
                  "Entretenimento",
                  "Sala",
                ].map((label) => (
                  <span
                    key={label}
                    className="rounded-md bg-white px-1.5 py-0.5 text-[10px] font-semibold text-[#0F172A] border border-[#D1EAEB]"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Rodapé da Galeria */}
        <div className="pt-2 border-t border-[#D1EAEB] flex items-center justify-between text-xs font-semibold text-[#00979D]">
          <span>Ver circuito na protoboard &amp; C++</span>
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </div>
      </div>
    </div>
  );
}

