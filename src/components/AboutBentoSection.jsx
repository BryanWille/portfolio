"use client";

import React from "react";
import { Code2, Building2, Heart } from "lucide-react";

export default function AboutBentoSection() {
  return (
    <section id="sobre-mim" className="bg-white py-16 sm:py-20 border-b border-neutral-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center sm:text-left">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
            Quem sou eu além do código
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-neutral-900">
            Mais do que tecnologia: foco nas pessoas e no resultado.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="rounded-2xl border border-emerald-100 bg-emerald-50/40 p-7 flex flex-col justify-between">
            <div>
              <div className="h-10 w-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-5">
                <Code2 className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">
                Criando para resolver dores reais
              </h3>
              <p className="text-sm leading-relaxed text-neutral-600">
                Eu não programo apenas para cumprir tarefas. Gosto de criar sistemas do zero que resolvem problemas reais — foi assim que criei o <strong>Noobie</strong> para gerenciar minhas finanças e investimentos, e o <strong>Bookie</strong> para organizar minhas leituras e anotações.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-emerald-100 text-xs font-semibold text-emerald-800">
              Produtos com propósito e foco no usuário
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl border border-blue-100 bg-blue-50/40 p-7 flex flex-col justify-between">
            <div>
              <div className="h-10 w-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-5">
                <Building2 className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">
                Grandes Empresas + Inteligência Artificial
              </h3>
              <p className="text-sm leading-relaxed text-neutral-600">
                Na Deloitte, trabalho no coração de grandes operações corporativas (Varejo, Saúde e Energia), garantindo estabilidade e eficiência. Conecto essa experiência à minha pós-graduação em Engenharia de IA na PUC Minas, trazendo inovação prática para o dia a dia.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-blue-100 text-xs font-semibold text-blue-800">
              Solidez corporativa com inovação contínua
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl border border-amber-100 bg-amber-50/40 p-7 flex flex-col justify-between">
            <div>
              <div className="h-10 w-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-5">
                <Heart className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">
                Leitura, disciplina e consistência
              </h3>
              <p className="text-sm leading-relaxed text-neutral-600">
                Minha rotina é guiada pelo aprendizado constante e pela disciplina da corrida. Adoro literatura clássica e moderna (a centelha do Bookie) e acompanho o mercado financeiro (a base do Noobie). Essa curiosidade diária se reflete em tudo o que construo.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-amber-100 text-xs font-semibold text-amber-900">
              Disciplina diária e aprendizado sem fim
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
