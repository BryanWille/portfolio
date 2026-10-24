"use client";

import React, { useState, useEffect } from "react";
import { Maximize2, ArrowUpRight } from "lucide-react";

// Função para gerar 2 semanas contínuas e sequenciais ao redor da data atual
function generateCalendarData() {
  const now = new Date();
  const currentDay = now.getDate();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();
  const todayDayOfWeek = now.getDay(); // 0 = Domingo, 6 = Sábado

  // Nome do mês em português
  const monthName = now.toLocaleDateString("pt-BR", { month: "long" });
  const capitalizedMonth = monthName.charAt(0).toUpperCase() + monthName.slice(1);

  // Início no Domingo da semana atual
  const startSunday = new Date(currentYear, currentMonth, currentDay - todayDayOfWeek);

  const days = [];
  for (let i = 0; i < 14; i++) {
    const d = new Date(startSunday);
    d.setDate(startSunday.getDate() + i);

    const isToday =
      d.getDate() === currentDay &&
      d.getMonth() === currentMonth &&
      d.getFullYear() === currentYear;

    const isCurrentMonth = d.getMonth() === currentMonth;

    // Notas e lembretes coloridos estilo Notecore (organização por cores)
    let note = null;
    if (isToday) {
      note = { text: "Hoje", color: "bg-[#1E88E5] text-white" };
    } else if (i === 2) {
      note = { text: "Notas", color: "bg-emerald-600 text-white" };
    } else if (i === 5) {
      note = { text: "Reunião", color: "bg-amber-600 text-white" };
    } else if (i === 10) {
      note = { text: "Sprint", color: "bg-purple-600 text-white" };
    }

    days.push({
      dateNumber: d.getDate(),
      isToday,
      isCurrentMonth,
      dayOfWeek: d.getDay(),
      note,
    });
  }

  return {
    days,
    monthTitle: `${capitalizedMonth} de ${currentYear}`,
    todayLabel: now.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
    }),
    todayDayOfWeek,
  };
}

export default function NotecorePreview({ project, onOpenDetails }) {
  // Inicialização estável
  const [calData, setCalData] = useState(() => generateCalendarData());

  useEffect(() => {
    setCalData(generateCalendarData());
  }, []);

  const weekDayNames = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

  return (
    <div
      onClick={() => onOpenDetails(project)}
      className="group cursor-pointer overflow-hidden rounded-3xl border border-[#DCE7F5] bg-white shadow-xl transition-all hover:border-[#1E88E5]/50 hover:shadow-2xl hover:scale-[1.01] h-[385px] flex flex-col justify-between"
    >
      {/* Top bar estilo mobile smartphone */}
      <div className="flex items-center justify-between border-b border-[#DCE7F5] bg-[#1E88E5] px-4 py-2.5 text-white flex-shrink-0">
        <div className="flex items-center gap-2">
          {/* Logo [N] no topo do app */}
          <img
            src="/projects/notecore/logo.png"
            alt="Notecore Logo"
            className="h-5 w-5 object-contain rounded-md bg-white p-0.5 shadow-xs"
          />
          <span className="text-xs font-bold tracking-wide">
            Notecore
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-semibold text-white">
            Flutter Mobile
          </span>
          <Maximize2 className="h-3.5 w-3.5 text-white/80 group-hover:text-white transition-colors" />
        </div>
      </div>

      {/* Subheader com Mês e Data Atual */}
      <div className="flex items-center justify-between px-4 py-1.5 border-b border-[#F1F5F9] bg-[#F8FAFC] flex-shrink-0">
        <div className="flex items-center gap-1.5 text-xs font-bold text-[#0F172A]">
          <span className="text-[#1E88E5]">📅</span>
          <span>{calData.monthTitle}</span>
        </div>
        <span className="rounded-full bg-[#1E88E5]/10 px-2.5 py-0.5 text-[10px] font-bold text-[#1E88E5] border border-[#1E88E5]/20">
          Hoje: {calData.todayLabel}
        </span>
      </div>

      {/* Calendário & Interface Mobile */}
      <div className="p-4 sm:p-5 space-y-3 bg-[#FFFFFF] flex-1 flex flex-col justify-between">
        {/* Dias da semana */}
        <div className="grid grid-cols-7 text-center text-[10px] font-bold text-[#64748B] border-b border-[#E2E8F0] pb-2">
          {weekDayNames.map((name, idx) => (
            <span
              key={name}
              className={idx === calData.todayDayOfWeek ? "text-[#1E88E5] font-extrabold" : ""}
            >
              {name}
            </span>
          ))}
        </div>

        {/* Grade de calendário sequencial e contínua sem pular dias */}
        <div className="grid grid-cols-7 gap-1.5 text-center text-xs">
          {calData.days.map((item, dIdx) => (
            <div
              key={dIdx}
              className={`rounded-lg border p-1 min-h-[46px] flex flex-col justify-between items-center transition-all ${
                item.isToday
                  ? "border-[#1E88E5] bg-[#F4F8FD] ring-2 ring-[#1E88E5]/30 shadow-xs"
                  : item.note
                  ? "border-[#DCE7F5] bg-[#F8FAFC]"
                  : "border-[#F1F5F9] bg-[#FFFFFF]"
              } ${!item.isCurrentMonth ? "opacity-35" : ""}`}
            >
              <div className="flex items-center justify-center w-full">
                <span
                  className={`text-[11px] font-semibold ${
                    item.isToday
                      ? "bg-[#1E88E5] text-white w-5 h-5 rounded-full flex items-center justify-center font-bold shadow-xs text-[10px]"
                      : "text-[#0F172A]"
                  }`}
                >
                  {item.dateNumber}
                </span>
              </div>

              {item.note ? (
                <span
                  className={`text-[8px] font-bold px-1 py-0.5 rounded truncate w-full shadow-xs ${item.note.color}`}
                >
                  {item.note.text}
                </span>
              ) : (
                <span className="h-2" />
              )}
            </div>
          ))}
        </div>

        {/* Floating Action Button (FAB) + Rodapé */}
        <div className="pt-2 border-t border-[#DCE7F5] flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-[#1E88E5]">
            <span>Ver menu lateral &amp; telas reais</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </div>
          {/* Botão flutuante estilo Material Design */}
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1E88E5] text-white shadow-md shadow-[#1E88E5]/30 group-hover:scale-110 transition-transform">
            <span className="text-lg font-bold leading-none mb-0.5">+</span>
          </div>
        </div>
      </div>
    </div>
  );
}
