"use client";

import React from "react";
import {
  ShieldCheck,
  TrendingDown,
  GraduationCap,
  MessageSquare,
  Wrench,
  BookOpen,
  Compass,
  Gamepad2,
  Award,
} from "lucide-react";

export default function AboutBentoSection({ id = "autoridade" }) {
  const authorityCards = [
    {
      id: "enterprise-rigor",
      icon: ShieldCheck,
      iconColor: "text-blue-700",
      iconBg: "bg-blue-50 border-blue-200/80",
      pillBadge: "bg-blue-50 text-blue-800 border-blue-200/80",
      dotColor: "bg-blue-600",
      tag: "01 · PADRÃO CORPORATIVO",
      title: "Rigor de Nível Enterprise",
      text: "Atuação e liderança técnica em consultoria global de primeira linha, aplicando boas práticas de arquitetura corporativa diretamente no projeto da sua empresa.",
      footerHighlight: "Liderança Técnica · Deloitte Consulting",
      hoverBorder: "hover:border-blue-400/50",
    },
    {
      id: "proven-efficiency",
      icon: TrendingDown,
      iconColor: "text-emerald-700",
      iconBg: "bg-emerald-50 border-emerald-200/80",
      pillBadge: "bg-emerald-50 text-emerald-800 border-emerald-200/80",
      dotColor: "bg-emerald-600",
      tag: "02 · RESULTADOS AUDITÁVEIS",
      title: "Economia e Eficiência Comprovadas",
      text: "Histórico auditável de otimização de infraestrutura (-87,89% em custos de armazenamento na nuvem) e redução de tempo operacional (-20% de TMA em processos de atendimento).",
      footerHighlight: "-87,89% Custo Cloud · -20% TMA Operacional",
      hoverBorder: "hover:border-emerald-400/50",
    },
    {
      id: "engineering-foundation",
      icon: GraduationCap,
      iconColor: "text-indigo-700",
      iconBg: "bg-indigo-50 border-indigo-200/80",
      pillBadge: "bg-indigo-50 text-indigo-800 border-indigo-200/80",
      dotColor: "bg-indigo-600",
      tag: "03 · SEGURANÇA & ESCALABILIDADE",
      title: "Base Sólida de Engenharia",
      text: "Formação em Ciência da Computação e especialização em Engenharia de IA/MLOps: garantia de software escalável, banco de dados bem desenhado e segurança técnica contra falhas e invasões.",
      footerHighlight: "Ciência da Computação · Pós IA & MLOps (PUC)",
      hoverBorder: "hover:border-indigo-400/50",
    },
    {
      id: "consultative-profile",
      icon: MessageSquare,
      iconColor: "text-amber-700",
      iconBg: "bg-amber-50 border-amber-200/80",
      pillBadge: "bg-amber-50 text-amber-900 border-amber-200/80",
      dotColor: "bg-amber-500",
      tag: "04 · PARCERIA TRANSPARENTE",
      title: "Comunicação Direta & Perfil Consultivo",
      text: "Nível de inglês C1 e experiência com stakeholders corporativos: alinhamento claro de escopo, prazos transparentes e código documentado. Sem jargões confusos e sem abandono de projeto.",
      footerHighlight: "Escopo Claro · Código Documentado · Inglês C1",
      hoverBorder: "hover:border-amber-400/50",
    },
  ];

  const personalCards = [
    {
      id: "curiosidade",
      icon: Wrench,
      iconColor: "text-amber-600",
      iconBg: "bg-amber-50 border-amber-200/80",
      pillBadge: "bg-amber-100/60 text-amber-900 border-amber-200/80",
      dotColor: "bg-amber-500",
      tag: "Sede de Aprender",
      title: "Curiosidade que não cabe numa gaveta",
      text: "Fascinado por entender como as coisas funcionam por baixo do capô: da engenharia de um motor automotivo à precisão de máquinas, da estrutura musical à astronomia.",
      footerHighlight: "Mecânica · Música · Astronomia",
      hoverBorder: "hover:border-amber-400/50",
    },
    {
      id: "leitura",
      icon: BookOpen,
      iconColor: "text-[#9C452B]",
      iconBg: "bg-[#F6F1E9] border-[#DED4C7]",
      pillBadge: "bg-[#F3E2D6] text-[#302720] border-[#DED4C7]",
      dotColor: "bg-[#9C452B]",
      tag: "Repertório & Páginas",
      title: "O hábito diário da leitura",
      text: "De clássicos da literatura mundial a livros de psicologia comportamental e mercado financeiro — entendendo como pessoas tomam decisões e como mercados evoluem.",
      footerHighlight: "Literatura · Psicologia · Finanças",
      hoverBorder: "hover:border-[#9C452B]/40",
    },
    {
      id: "viagens",
      icon: Compass,
      iconColor: "text-sky-600",
      iconBg: "bg-sky-50 border-sky-200/80",
      pillBadge: "bg-sky-100/60 text-sky-900 border-sky-200/80",
      dotColor: "bg-sky-500",
      tag: "Estrada & Conexão",
      title: "Conhecer o mundo com quem importa",
      text: "Fora das telas, minha prioridade é pegar a estrada ao lado da minha namorada: descobrir cidades novas, subir montanhas, curtir cachoeiras e colecionar boas histórias.",
      footerHighlight: "Viagens · Natureza · Parceria",
      hoverBorder: "hover:border-sky-400/50",
    },
    {
      id: "descompressao",
      icon: Gamepad2,
      iconColor: "text-emerald-600",
      iconBg: "bg-emerald-50 border-emerald-200/80",
      pillBadge: "bg-emerald-100/60 text-emerald-900 border-emerald-200/80",
      dotColor: "bg-emerald-500",
      tag: "Descompressão & Foco",
      title: "Risadas com amigos e disciplina",
      text: "Partidas de tabuleiro e jogos com amigos para descontrair, combinadas com corrida consistente e treino diário na academia para manter a mente focada.",
      footerHighlight: "Jogos com Amigos · Corrida & Treino",
      hoverBorder: "hover:border-emerald-400/50",
    },
  ];

  return (
    <section
      id={id}
      className="scroll-mt-16 bg-[#FAFAFA] py-16 sm:py-24 border-b border-neutral-200/70 relative overflow-hidden"
    >
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-20">
        {/* BLOCO 1: AUTORIDADE TÉCNICA & GARANTIA DE QUALIDADE */}
        <div>
          <div className="mb-12 max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-700 border border-blue-200/60 mb-3">
              <Award className="h-3.5 w-3.5" />
              <span>Por Que Contratar Minha Engenharia?</span>
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              Autoridade técnica e garantia de entrega sem riscos.
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#475569] leading-relaxed">
              Minha bagagem acadêmica e atuação em grandes operações corporativas funcionam como o selo de segurança para que o seu projeto nasça rápido, blindado e pronto para crescer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {authorityCards.map((card) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={card.id}
                  className={`rounded-2xl border border-neutral-200/90 bg-white p-6 sm:p-7 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between hover:scale-[1.01] ${card.hoverBorder}`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className={`h-11 w-11 rounded-xl border flex items-center justify-center shadow-2xs ${card.iconBg} ${card.iconColor}`}
                      >
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider">
                        {card.tag}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] mb-3 tracking-tight">
                      {card.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-[#475569]">
                      {card.text}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-100">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-[11px] font-semibold border ${card.pillBadge}`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${card.dotColor}`}
                      />
                      <span>{card.footerHighlight}</span>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* BLOCO 2: BENTO GRID DE FACETAS PESSOAIS (COMPACTO E CLEAN) */}
        <div id="sobre-mim" className="pt-8 border-t border-neutral-200/70">
          <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="inline-block rounded-full bg-neutral-100 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-neutral-600 border border-neutral-200 mb-2">
                Quem sou eu além do código
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] tracking-tight">
                Por trás da engenharia: curiosidade, disciplina e vida real.
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#64748B] italic">
              &ldquo;A consistência nos hábitos diários sustenta entregas técnicas de alto nível.&rdquo;
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {personalCards.map((card) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={card.id}
                  className={`rounded-2xl border border-neutral-200/80 bg-white/90 p-5 shadow-2xs hover:shadow-sm transition-all duration-300 flex flex-col justify-between ${card.hoverBorder}`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3.5">
                      <div
                        className={`h-9 w-9 rounded-xl border flex items-center justify-center ${card.iconBg} ${card.iconColor}`}
                      >
                        <IconComponent className="h-4 w-4" />
                      </div>
                      <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider">
                        {card.tag}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-[#0F172A] mb-2 tracking-tight">
                      {card.title}
                    </h4>

                    <p className="text-xs sm:text-sm leading-relaxed text-[#475569]">
                      {card.text}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-neutral-100">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-lg px-2 py-0.5 text-[11px] font-semibold border ${card.pillBadge}`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${card.dotColor}`}
                      />
                      <span>{card.footerHighlight}</span>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
