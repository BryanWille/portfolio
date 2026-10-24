"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function AwsPreview({ project, onOpenDetails }) {
  return (
    <div
      onClick={() => onOpenDetails(project)}
      className="group cursor-pointer overflow-hidden rounded-2xl border border-[#F2DEC8] bg-white shadow-xl transition-all hover:border-[#FF9900]/50 hover:shadow-2xl hover:scale-[1.01] h-[385px] flex flex-col justify-between"
    >
      {/* Top Window Bar */}
      <div className="flex items-center justify-between border-b border-[#F2DEC8] bg-[#FFF8F2] px-4 py-2.5 flex-shrink-0">
        <div className="flex items-center gap-2">
          <img
            src="/projects/aws-s3/lambda.png"
            alt="AWS Lambda Logo"
            className="h-4 w-4 object-contain rounded-xs"
          />
          <span className="text-xs font-bold text-[#232F3E]">
            AWS Cloud Architecture • Loja do Sapo
          </span>
        </div>
        <span className="rounded-full bg-emerald-100 border border-emerald-200 px-2.5 py-0.5 text-[11px] font-extrabold text-emerald-800 shadow-xs">
          -87.89% Armazenamento
        </span>
      </div>

      <div className="p-4 sm:p-5 bg-gradient-to-br from-white via-[#FFFBF7] to-[#FFF8F2] space-y-3.5 flex-1 flex flex-col justify-between">
        {/* Três blocos de serviço conectados: Zoho ERP ➔ AWS Lambda ➔ S3 Bucket */}
        <div className="rounded-xl border border-[#F2DEC8] bg-white p-3 shadow-xs">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#D97706] block mb-2">
            Pipeline Serverless Automatizada
          </span>
          <div className="grid grid-cols-11 items-center text-center">
            {/* Zoho ERP */}
            <div className="col-span-3 rounded-lg border border-slate-200 bg-[#F8FAFC] p-2">
              <span className="text-[9px] font-bold uppercase text-slate-500 block">Origem</span>
              <span className="text-xs font-bold text-[#232F3E]">Zoho ERP</span>
            </div>

            {/* Arrow 1 */}
            <div className="col-span-1 flex justify-center text-[#FF9900] font-bold text-xs">
              ➔
            </div>

            {/* AWS Lambda */}
            <div className="col-span-3 rounded-lg border border-[#FF9900]/30 bg-[#FFF8F2] p-2">
              <span className="text-[9px] font-bold uppercase text-[#D97706] block">Processamento</span>
              <span className="text-xs font-extrabold text-[#E67E00]">AWS Lambda</span>
            </div>

            {/* Arrow 2 */}
            <div className="col-span-1 flex justify-center text-[#FF9900] font-bold text-xs">
              ➔
            </div>

            {/* S3 Bucket */}
            <div className="col-span-3 rounded-lg border border-emerald-200 bg-emerald-50/60 p-2">
              <span className="text-[9px] font-bold uppercase text-emerald-700 block">Destino</span>
              <span className="text-xs font-bold text-emerald-900">S3 Bucket</span>
            </div>
          </div>
        </div>

        {/* Mini Indicadores de CloudWatch */}
        <div className="grid grid-cols-2 gap-2.5">
          <div className="rounded-xl border border-[#F2DEC8] bg-white p-2.5 shadow-xs">
            <span className="text-[10px] font-bold text-[#64748B] block uppercase tracking-wider">
              Compressão PIL
            </span>
            <span className="text-sm font-mono font-extrabold text-[#232F3E]">
              ~8x Menor
            </span>
            <span className="text-[10px] text-emerald-600 block mt-0.5">
              Sem perda de nitidez
            </span>
          </div>

          <div className="rounded-xl border border-[#F2DEC8] bg-white p-2.5 shadow-xs">
            <span className="text-[10px] font-bold text-[#64748B] block uppercase tracking-wider">
              Ciclo de Vida
            </span>
            <span className="text-sm font-mono font-extrabold text-[#232F3E]">
              14 Dias
            </span>
            <span className="text-[10px] text-slate-500 block mt-0.5">
              Expiração automática
            </span>
          </div>
        </div>

        {/* Rodapé da Janela */}
        <div className="pt-2 border-t border-[#F2DEC8] flex items-center justify-between text-xs font-semibold text-[#D97706]">
          <span>Ver diagrama no Miro &amp; métricas CloudWatch</span>
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </div>
      </div>
    </div>
  );
}

