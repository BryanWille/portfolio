"use client";

import React from "react";
import { Lock, CheckCircle2, Zap } from "lucide-react";

export default function MacWindowMockup({ theme }) {
  if (theme === "process-automation") {
    // Janela Terminal / Mac Console com execução de pipeline / cron job
    return (
      <div className="w-[340px] sm:w-[420px] rounded-2xl border border-slate-700/80 bg-[#0F172A] text-slate-200 shadow-2xl shadow-slate-900/20 overflow-hidden font-mono text-xs">
        {/* Barra superior macOS */}
        <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#1E293B] border-b border-slate-700/70">
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-[#FF5F56] shadow-xs" />
            <span className="h-3 w-3 rounded-full bg-[#FFBD2E] shadow-xs" />
            <span className="h-3 w-3 rounded-full bg-[#27C93F] shadow-xs" />
          </div>
          <span className="text-[11px] font-sans font-medium text-slate-400">
            pipeline-worker — bash
          </span>
          <div className="w-10" />
        </div>

        {/* Linhas de comando minimalistas */}
        <div className="p-4 space-y-2 text-[11px] leading-relaxed">
          <div className="text-slate-400">
            <span className="text-amber-400">$</span> run pipeline --target=aws-lambda
          </div>
          <div className="text-slate-400 flex items-center gap-1.5">
            <span className="text-blue-400">ℹ</span> Ingesting records... [1,420 items]
          </div>
          <div className="text-slate-400 flex items-center gap-1.5">
            <span className="text-amber-400">⚡</span> Executing serverless compression
          </div>
          <div className="flex items-center gap-1.5 text-emerald-400 font-semibold pt-1">
            <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
            <span>status: success 200 · 87.89% optimized</span>
          </div>
        </div>
      </div>
    );
  }

  if (theme === "api-integration") {
    // Janela Editor / Code Inspector com payload JSON limpo
    return (
      <div className="w-[340px] sm:w-[420px] rounded-2xl border border-slate-300 bg-white text-slate-800 shadow-2xl shadow-blue-900/10 overflow-hidden font-mono text-xs">
        {/* Barra superior macOS */}
        <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#F8FAFC] border-b border-slate-200">
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-[#FF5F56] shadow-xs" />
            <span className="h-3 w-3 rounded-full bg-[#FFBD2E] shadow-xs" />
            <span className="h-3 w-3 rounded-full bg-[#27C93F] shadow-xs" />
          </div>
          <span className="text-[11px] font-sans font-medium text-slate-500">
            webhook-response.json
          </span>
          <span className="text-[10px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200">
            REST API
          </span>
        </div>

        {/* Payload JSON elegante */}
        <div className="p-4 text-[11px] leading-relaxed bg-[#FAFAFA]">
          <pre className="text-slate-700">
            <code>
              {`{
  `}<span className="text-blue-600 font-semibold">"status"</span>{`: `}<span className="text-emerald-600 font-semibold">"synced"</span>{`,
  `}<span className="text-blue-600 font-semibold">"api"</span>{`: `}<span className="text-emerald-600 font-semibold">"connected"</span>{`,
  `}<span className="text-blue-600 font-semibold">"latency"</span>{`: `}<span className="text-amber-600 font-semibold">"42ms"</span>{`,
  `}<span className="text-blue-600 font-semibold">"endpoints"</span>{`: [`}<span className="text-slate-500">"CRM"</span>{`, `}<span className="text-slate-500">"ERP"</span>{`, `}<span className="text-slate-500">"Gateway"</span>{`]
}`}
            </code>
          </pre>
        </div>
      </div>
    );
  }

  if (theme === "custom-saas") {
    // Janela Desktop App com mini gráfico e cartões de métricas
    return (
      <div className="w-[340px] sm:w-[420px] rounded-2xl border border-slate-300 bg-white text-slate-800 shadow-2xl shadow-indigo-900/10 overflow-hidden text-xs">
        {/* Barra superior macOS */}
        <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#F8FAFC] border-b border-slate-200">
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-[#FF5F56] shadow-xs" />
            <span className="h-3 w-3 rounded-full bg-[#FFBD2E] shadow-xs" />
            <span className="h-3 w-3 rounded-full bg-[#27C93F] shadow-xs" />
          </div>
          <span className="text-[11px] font-sans font-medium text-slate-500">
            Control Panel — Analytics
          </span>
          <div className="w-10" />
        </div>

        {/* Dashboard minimalista */}
        <div className="p-4 space-y-3 bg-[#FAFAFA]">
          <div className="grid grid-cols-2 gap-2.5">
            <div className="rounded-xl bg-white border border-slate-200/80 p-2.5 shadow-2xs">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">
                Receita Operacional
              </span>
              <span className="text-sm font-extrabold text-[#0F172A] block mt-0.5">
                R$ 148.920
              </span>
            </div>
            <div className="rounded-xl bg-white border border-slate-200/80 p-2.5 shadow-2xs">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">
                Eficiência Ativa
              </span>
              <span className="text-sm font-extrabold text-indigo-600 block mt-0.5">
                +38.4%
              </span>
            </div>
          </div>

          {/* Mini gráfico vetorial ascendente */}
          <div className="rounded-xl bg-white border border-slate-200/80 p-2.5 shadow-2xs">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-bold text-slate-500">
                Escala Mensal
              </span>
              <span className="text-[10px] font-semibold text-emerald-600">
                99.98% uptime
              </span>
            </div>
            <svg viewBox="0 0 300 55" className="w-full h-9 overflow-visible" fill="none">
              <path
                d="M 10 45 Q 60 40, 100 30 T 180 22 T 290 8"
                stroke="#6366F1"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M 10 45 Q 60 40, 100 30 T 180 22 T 290 8 L 290 55 L 10 55 Z"
                fill="#818CF8"
                fillOpacity="0.15"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  }

  // Padrão: Sites & Aplicações Web (Navegador Mac com 99 PageSpeed)
  return (
    <div className="w-[340px] sm:w-[420px] rounded-2xl border border-slate-300 bg-white text-slate-800 shadow-2xl shadow-emerald-900/10 overflow-hidden text-xs">
      {/* Barra superior macOS */}
      <div className="flex items-center justify-between px-3.5 py-2 bg-[#F8FAFC] border-b border-slate-200">
        <div className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[#FF5F56] shadow-xs" />
          <span className="h-3 w-3 rounded-full bg-[#FFBD2E] shadow-xs" />
          <span className="h-3 w-3 rounded-full bg-[#27C93F] shadow-xs" />
        </div>

        {/* Barra de endereço com cadeado HTTPS */}
        <div className="flex items-center gap-1.5 rounded-md bg-white border border-slate-200/80 px-3 py-1 text-[11px] text-slate-600 shadow-2xs">
          <Lock className="h-3 w-3 text-emerald-600 shrink-0" />
          <span className="font-mono text-[10px] text-slate-700">https://empresa.com</span>
        </div>

        {/* Badge 99 PageSpeed */}
        <div className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded-md font-bold text-[10px]">
          <Zap className="h-3 w-3 fill-emerald-600 text-emerald-600" />
          <span>99</span>
        </div>
      </div>

      {/* Wireframe simplificado do site */}
      <div className="p-3.5 space-y-2.5 bg-[#FAFAFA]">
        <div className="rounded-xl bg-white border border-slate-200/80 p-3 shadow-2xs space-y-1.5">
          <div className="h-2.5 w-32 bg-emerald-700/80 rounded-full" />
          <div className="h-2 w-48 bg-slate-300 rounded-full" />
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="h-10 rounded-lg bg-white border border-slate-200/80 shadow-2xs" />
          <div className="h-10 rounded-lg bg-white border border-slate-200/80 shadow-2xs" />
          <div className="h-10 rounded-lg bg-white border border-slate-200/80 shadow-2xs" />
        </div>
      </div>
    </div>
  );
}

