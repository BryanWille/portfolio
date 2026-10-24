"use client";

import React from "react";
import { Maximize2, ArrowUpRight } from "lucide-react";

export default function NoobiePreview({ project, onOpenDetails }) {
  return (
    <div
      onClick={() => onOpenDetails(project)}
      className="group cursor-pointer overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-xl transition-all hover:border-[#FF5B00]/50 hover:shadow-2xl hover:scale-[1.01] h-[385px] flex flex-col justify-between"
    >
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-[#E2E8F0] bg-[#F6F8FA] px-4 py-2.5 flex-shrink-0">
        <div className="flex items-center gap-2">
          <img
            src="/projects/noobie/logo.png"
            alt="Noobie Logo"
            className="h-5 w-5 rounded-md object-contain bg-black shadow-xs border border-[#FF5B00]/25"
          />
          <span className="text-[11px] font-bold text-[#14171F]">
            Noobie
          </span>
        </div>
        <span className="rounded bg-white px-2 py-0.5 text-[10px] text-[#64748B] border border-[#E2E8F0] font-medium">
          noobiefin.netlify.app
        </span>
        <Maximize2 className="h-3.5 w-3.5 text-[#64748B] group-hover:text-[#FF5B00] transition-colors" />
      </div>

      {/* Content Preview */}
      <div className="p-5 space-y-3.5 bg-white flex-1 flex flex-col justify-between">
        <div className="rounded-xl border border-[#FF5B00]/30 bg-[rgba(255,91,0,0.03)] p-4 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold tracking-wider text-[#FF5B00] uppercase">
              LIMITE RECOMENDADO / DIA
            </span>
            <span className="text-[10px] rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 font-bold">
              Ritmo Confortável
            </span>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#14171F]">
              R$ 252,38
            </span>
            <span className="text-xs text-[#64748B]">/dia</span>
          </div>
          <p className="mt-1 text-xs text-[#64748B]">
            Você tem R$ 2.271,38 livres para gastar nos próximos 9 dias do ciclo.
          </p>
          <div className="mt-3 space-y-1">
            <div className="flex justify-between text-[11px] text-[#64748B]">
              <span>Orçamento Consumido</span>
              <span className="text-[#FF5B00] font-bold">50.1% de R$ 4.552,00</span>
            </div>
            <div className="h-2 w-full rounded-full bg-[#F1F5F9] overflow-hidden">
              <div className="h-full bg-[#FF5B00] rounded-full" style={{ width: "50.1%" }} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-3">
            <span className="text-[#64748B] text-[10px] font-semibold uppercase">RENDA LÍQUIDA</span>
            <p className="text-emerald-700 font-bold text-sm mt-0.5">R$ 8.000,00</p>
          </div>
          <div className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-3">
            <span className="text-[#64748B] text-[10px] font-semibold uppercase">TETO DE GASTOS</span>
            <p className="text-[#FF5B00] font-bold text-sm mt-0.5">R$ 4.552,00</p>
          </div>
        </div>

        <div className="pt-2 border-t border-[#E2E8F0] flex items-center justify-between text-xs font-semibold text-[#FF5B00]">
          <span>Ver galeria com 3 telas reais</span>
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </div>
      </div>
    </div>
  );
}

