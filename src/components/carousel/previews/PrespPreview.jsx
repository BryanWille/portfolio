"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function PrespPreview({ project, onOpenDetails }) {
  return (
    <div
      onClick={() => onOpenDetails(project)}
      className="group cursor-pointer overflow-hidden rounded-2xl border border-[#D8E2ED] bg-white shadow-xl transition-all hover:border-[#007396]/50 hover:shadow-2xl hover:scale-[1.01] h-[385px] flex flex-col justify-between"
    >
      {/* Top Window Bar */}
      <div className="flex items-center justify-between border-b border-[#D8E2ED] bg-[#F8FAFC] px-4 py-2.5 flex-shrink-0">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#E74C3C]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#F59E0B]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#0284C7]" />
          </div>
          <div className="flex items-center gap-1.5 ml-2 border-l border-[#D8E2ED] pl-2">
            <img
              src="/projects/presp/logo.png"
              alt="Presp Logo"
              className="h-4 w-4 object-contain"
            />
            <span className="text-[11px] font-bold text-[#0F172A]">
              Presp • Calculadora Estatística v1.0
            </span>
          </div>
        </div>
        <span className="rounded bg-[#007396]/10 px-1.5 py-0.5 text-[9px] font-bold font-mono text-[#007396]">
          Java SE
        </span>
      </div>

      <div className="p-4 sm:p-5 bg-gradient-to-br from-white via-[#F8FAFC] to-[#F4F7FB] space-y-3.5 flex-1 flex flex-col justify-between">
        {/* Mini Stat Badges */}
        <div className="grid grid-cols-3 gap-2">
          <div className="rounded-lg bg-white p-2 border border-[#D8E2ED] shadow-xs text-center">
            <span className="text-[10px] font-bold text-[#64748B] block uppercase tracking-wider">Média</span>
            <span className="text-xs font-mono font-extrabold text-[#007396]">2708.44</span>
          </div>
          <div className="rounded-lg bg-white p-2 border border-[#D8E2ED] shadow-xs text-center">
            <span className="text-[10px] font-bold text-[#64748B] block uppercase tracking-wider">Mediana</span>
            <span className="text-xs font-mono font-extrabold text-[#0F172A]">2807.00</span>
          </div>
          <div className="rounded-lg bg-white p-2 border border-[#D8E2ED] shadow-xs text-center">
            <span className="text-[10px] font-bold text-[#64748B] block uppercase tracking-wider">Desvio Pad.</span>
            <span className="text-xs font-mono font-extrabold text-[#E74C3C]">1433.83</span>
          </div>
        </div>

        {/* Mini Tabela de Frequência */}
        <div className="rounded-lg border border-[#D8E2ED] bg-white overflow-hidden shadow-xs">
          <div className="bg-[#F1F5F9] px-2.5 py-1.5 border-b border-[#D8E2ED] flex items-center justify-between text-[10px] font-bold text-[#475569]">
            <span>Classes &amp; Intervalo</span>
            <span>Xi (Méd)</span>
            <span>Fi (Freq)</span>
          </div>
          <div className="divide-y divide-[#F1F5F9] font-mono text-[10px] text-[#334155]">
            <div className="px-2.5 py-1 flex items-center justify-between">
              <span className="text-[#007396] font-semibold">1 | 343.0 |-- 805.0</span>
              <span className="text-neutral-500">574.0</span>
              <span className="font-bold text-[#0F172A]">18 (18%)</span>
            </div>
            <div className="px-2.5 py-1 flex items-center justify-between">
              <span className="text-[#007396] font-semibold">2 | 805.0 |-- 1267.0</span>
              <span className="text-neutral-500">1036.0</span>
              <span className="font-bold text-[#0F172A]">14 (14%)</span>
            </div>
            <div className="px-2.5 py-1 flex items-center justify-between">
              <span className="text-[#007396] font-semibold">3 | 1267.0 |-- 1729.0</span>
              <span className="text-neutral-500">1498.0</span>
              <span className="font-bold text-[#0F172A]">12 (12%)</span>
            </div>
          </div>
        </div>

        {/* Rodapé da Janela */}
        <div className="pt-2 border-t border-[#D8E2ED] flex items-center justify-between text-xs font-semibold text-[#007396]">
          <span>Ver tabela completa &amp; entrada de dados</span>
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </div>
      </div>
    </div>
  );
}

