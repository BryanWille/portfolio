"use client";

import React from "react";
import { Maximize2, ArrowUpRight } from "lucide-react";

export default function BR381Preview({ project, onOpenDetails }) {
  return (
    <div
      onClick={() => onOpenDetails(project)}
      className="group cursor-pointer overflow-hidden rounded-2xl border border-[#DDE3EA] bg-[#FFFFFF] shadow-xl transition-all hover:border-[#000D4B]/50 hover:shadow-2xl hover:scale-[1.01] h-[385px] flex flex-col justify-between"
    >
      {/* Top bar minimalista estilo PRF */}
      <div className="flex items-center justify-between border-b border-[#DDE3EA] bg-[#F8FAFC] px-4 py-2.5 flex-shrink-0">
        <div className="flex items-center gap-2">
          <span className="flex h-2.5 w-2.5 rounded-full bg-[#000D4B]" />
          <span className="text-[11px] font-bold text-[#0F172A] tracking-wide">
            Monitor Rodoviário · BR-381
          </span>
        </div>
        <span className="rounded bg-[#000D4B]/10 px-2 py-0.5 text-[10px] text-[#000D4B] border border-[#000D4B]/20 font-bold">
          PRF Lakehouse · Prefect 3
        </span>
        <Maximize2 className="h-3.5 w-3.5 text-[#64748B] group-hover:text-[#000D4B] transition-colors" />
      </div>

      {/* Content Preview */}
      <div className="p-5 space-y-3.5 bg-white flex-1 flex flex-col justify-between">
        {/* Badge Alerta Real do Telegram */}
        <div className="rounded-xl border border-[#FFC900]/60 bg-[#FFC900]/15 p-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 rounded-full bg-[#DC2626] animate-ping" />
            <span className="text-xs font-black text-[#856400] tracking-tight">
              🚨 ALERTA BR-381 — KM 360-370
            </span>
          </div>
          <span className="text-[10px] font-mono font-bold text-[#000D4B] bg-white px-2 py-0.5 rounded border border-[#FFC900]/40">
            Classificação: ALTO
          </span>
        </div>

        {/* 3 Indicadores Reais da Telemetria */}
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="rounded-xl border border-[#FCA5A5] bg-[#FEF2F2] p-2.5">
            <span className="text-[10px] font-bold text-[#991B1B] uppercase block">
              Probabilidade
            </span>
            <p className="text-sm font-black text-[#DC2626] mt-1">57.8%</p>
            <span className="text-[9px] font-bold text-[#DC2626]">Risco Elevado</span>
          </div>

          <div className="rounded-xl border border-[#DDE3EA] bg-[#F8FAFC] p-2.5">
            <span className="text-[10px] font-semibold text-[#64748B] uppercase block">
              Temperatura
            </span>
            <p className="text-sm font-black text-[#0F172A] mt-1">23.1°C</p>
            <span className="text-[9px] text-[#64748B]">Chuva: Não</span>
          </div>

          <div className="rounded-xl border border-[#DDE3EA] bg-[#F8FAFC] p-2.5">
            <span className="text-[10px] font-semibold text-[#64748B] uppercase block">
              Vento
            </span>
            <p className="text-sm font-black text-[#334155] mt-1">10.4 km/h</p>
            <span className="text-[9px] text-[#64748B]">Hora: 19:00</span>
          </div>
        </div>

        {/* Info esteira MLOps */}
        <div className="rounded-xl border border-[#DDE3EA] bg-[#F8FAFC] p-3 text-xs text-[#475569] space-y-1">
          <div className="flex justify-between items-center text-[11px]">
            <span className="font-semibold text-[#0F172A]">Classificador Random Forest:</span>
            <span className="font-mono text-[#000D4B] font-bold">Recall 81.4%</span>
          </div>
          <p className="text-[11px] text-[#64748B]">
            Alerta enviado automaticamente no Telegram da base operacional.
          </p>
        </div>

        {/* Barra de Ação da Galeria */}
        <div className="pt-2 border-t border-[#DDE3EA] flex items-center justify-between text-xs font-semibold text-[#000D4B]">
          <span>Ver alertas reais do Telegram &amp; esteira Prefect</span>
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </div>
      </div>
    </div>
  );
}

