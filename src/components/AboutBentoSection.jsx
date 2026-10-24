"use client";

import React from "react";
import { Wrench, BookOpen, Compass, Gamepad2, Sparkles, Heart } from "lucide-react";

export default function AboutBentoSection({ id = "sobre-mim" }) {
  const cards = [
    {
      id: "curiosidade",
      icon: Wrench,
      iconColor: "text-amber-600",
      iconBg: "bg-amber-50 border-amber-200/80",
      pillBadge: "bg-amber-100/60 text-amber-900 border-amber-200/80",
      dotColor: "bg-amber-500",
      tag: "Sede de Aprender",
      title: "Curiosidade que não cabe numa gaveta",
      text: "Sou fascinado por entender como as coisas funcionam por baixo do capô. Da engenharia de um motor automotivo à precisão de máquinas pesadas, da estrutura de uma boa música à imensidão da astronomia. Se tem lógica, engrenagem ou arte envolvida, eu quero aprender a fundo.",
      footerHighlight: "Mecânica · Música · Astronomia · Motores",
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
      text: "Minha estante vai de clássicos da literatura mundial e ficções envolventes a livros de psicologia do comportamento e mercado financeiro. Não leio apenas para absorver teoria, mas para entender como a mente humana toma decisões e como o mundo gira (hábito que inspirou a criação do Bookie).",
      footerHighlight: "Literatura Clássica · Psicologia · Mercado Financeiro",
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
      text: "A vida real acontece longe do computador. No meu tempo livre, minha prioridade é colocar o pé na estrada ao lado da minha namorada: descobrir cidades novas, subir montanhas, curtir cachoeiras e experimentar novos sabores. Viajar e colecionar momentos reais é o que recarrega minha bateria.",
      footerHighlight: "Viagens · Novas Culturas · Parceria",
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
      title: "Risadas com a galera e disciplina",
      text: "Para descontrair e dar boas risadas: uma gameplay no PC ou uma mesa cheia para disputar partidas de cartas e jogos de tabuleiro com os amigos. Para zerar o estresse, manter o foco e cultivar disciplina diária: corrida consistente na esteira e treino na academia.",
      footerHighlight: "Noite de Jogos com Amigos · Corrida & Treino",
      hoverBorder: "hover:border-emerald-400/50",
    },
  ];

  return (
    <section
      id={id}
      className="bg-[#FAFAFA] py-16 sm:py-24 border-b border-neutral-200/70 relative overflow-hidden"
    >
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="mb-12 max-w-3xl">
          <span className="inline-block rounded-full bg-blue-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-700 border border-blue-200/60 mb-3">
            Quem sou eu além do código
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Curiosidade por tudo, boas histórias e vida real.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#475569] leading-relaxed italic">
            &ldquo;Tecnologia é o que eu construo, mas minha mente se alimenta do mundo inteiro.&rdquo;
          </p>
        </div>

        {/* Grid com os 4 Cards de Identidade */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => {
            const IconComponent = card.icon;
            return (
              <div
                key={card.id}
                className={`rounded-2xl border border-neutral-200/80 bg-white p-6 sm:p-7 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between hover:scale-[1.01] ${card.hoverBorder}`}
              >
                <div>
                  {/* Topo do Card com Ícone e Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`h-11 w-11 rounded-xl border flex items-center justify-center shadow-2xs ${card.iconBg} ${card.iconColor}`}
                    >
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider">
                      {card.tag}
                    </span>
                  </div>

                  {/* Título do Card */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] mb-3 tracking-tight">
                    {card.title}
                  </h3>

                  {/* Texto Narrativo */}
                  <p className="text-sm leading-relaxed text-[#475569]">
                    {card.text}
                  </p>
                </div>

                {/* Destaque no Rodapé */}
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
    </section>
  );
}
