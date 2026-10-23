"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Award,
  CheckCircle2,
  Building2,
  Calendar,
  Sparkles,
  Zap,
  TrendingUp,
  Server,
  Cloud,
} from "lucide-react";
import { experienceData } from "@/data/experience";
import { profileData } from "@/data/profile";

export default function ExperienceSection() {
  return (
    <section
      id="experiencia"
      className="scroll-mt-16 border-b border-[#E5E7EB] bg-white py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 border-b border-[#E5E7EB] pb-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#2563EB]">
                03 / TRAJETÓRIA &amp; FORMAÇÃO ACADÊMICA
              </span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#111827] sm:text-3xl">
                A Jornada de Engenharia: Da Base Acadêmica à Escala Corporativa
              </h2>
            </div>
            <span className="inline-flex items-center gap-2 rounded-lg border border-[#E5E7EB] bg-[#FAFAFA] px-3.5 py-1.5 font-mono text-xs font-medium text-[#111827]">
              <Briefcase className="h-3.5 w-3.5 text-[#2563EB]" />
              TIMELINE EXECUTIVA AUDITADA
            </span>
          </div>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#4B5563] sm:text-base">
            Como construí minha experiência atuando em projetos críticos de clientes globais na Deloitte,
            automações em nuvem AWS na Loja do Sapo e infraestrutura hospitalar no IOBH.
          </p>
        </div>

        {/* 2-Column Layout: Storyline Timeline (7 cols) + Academic & Certifications (5 cols) */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Left Column: Vertical Storyline Timeline */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-emerald-600" />
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-900">
                Linha do Tempo Profissional (2022 – Presente)
              </h3>
            </div>

            <div className="relative space-y-8 before:absolute before:top-4 before:bottom-4 before:left-4 before:w-0.5 before:bg-gradient-to-b before:from-emerald-500 before:via-blue-500 before:to-neutral-300">
              {experienceData.map((job, idx) => (
                <motion.article
                  key={job.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="relative pl-11"
                >
                  {/* Timeline Icon Node */}
                  <span
                    className={`absolute top-1 left-2 flex h-5 w-5 items-center justify-center rounded-full border-2 bg-white shadow-sm ${
                      job.current ? "border-emerald-600" : "border-blue-600"
                    }`}
                  >
                    <span
                      className={`h-2 w-2 rounded-full ${
                        job.current ? "bg-emerald-600" : "bg-blue-600"
                      }`}
                    />
                  </span>

                  {/* Company Box */}
                  <div className="rounded-2xl border border-neutral-200 bg-[#FAFAFA] p-6 shadow-sm transition-all hover:border-blue-300 hover:bg-white hover:shadow-md">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-3 border-b border-neutral-200 pb-4">
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className="text-xl font-bold text-neutral-900">
                            {job.company}
                          </h4>
                          {job.current && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-0.5 font-mono text-[10px] font-bold text-emerald-800">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-pulse" />
                              CARGO ATUAL
                            </span>
                          )}
                        </div>
                        <p className="mt-1 font-mono text-xs text-neutral-500">
                          {job.location}
                        </p>
                      </div>

                      <div className="flex flex-col items-start sm:items-end gap-1">
                        <span className="inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-white px-2.5 py-1 font-mono text-xs font-semibold text-neutral-800">
                          <Calendar className="h-3 w-3 text-blue-600" />
                          {job.period}
                        </span>
                        {job.impactBadge && (
                          <span className="font-mono text-xs font-bold text-emerald-700">
                            ★ {job.impactBadge}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Deloitte 4-Level Progress Ladder or Roles */}
                    <div className="mt-4 rounded-xl border border-neutral-200 bg-white p-3.5">
                      <p className="mb-2.5 font-mono text-[11px] font-bold uppercase tracking-wider text-neutral-500">
                        {job.id === "deloitte"
                          ? "Progressão de 4 Níveis na Deloitte"
                          : `Cargos Ocupados (${job.roles.length})`}
                      </p>
                      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                        {job.roles.map((role) => (
                          <div
                            key={role.title}
                            className={`flex flex-col justify-between rounded-lg border px-3 py-2 ${
                              role.current
                                ? "border-emerald-300 bg-emerald-50/50 shadow-sm"
                                : "border-neutral-200 bg-neutral-50/60"
                            }`}
                          >
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-xs font-bold text-neutral-900">
                                {role.title}
                              </span>
                              {role.current && (
                                <span className="rounded bg-emerald-200/70 px-1.5 py-0.5 font-mono text-[9px] font-bold text-emerald-900">
                                  ATUAL
                                </span>
                              )}
                            </div>
                            <span className="mt-1 font-mono text-[10px] text-neutral-500">
                              {role.period}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Summary Narrative */}
                    <p className="mt-4 text-sm leading-relaxed text-neutral-600">
                      {job.summary}
                    </p>

                    {/* Technical Highlights with Checkmarks */}
                    <div className="mt-4">
                      <p className="mb-2 font-mono text-[11px] font-bold uppercase tracking-wider text-neutral-800">
                        Resultados &amp; Entregas Auditadas
                      </p>
                      <ul className="space-y-2">
                        {job.highlights.map((h, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed text-neutral-700"
                          >
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Stack Badges */}
                    <div className="mt-5 flex flex-wrap gap-1.5 border-t border-neutral-200 pt-4">
                      {job.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-neutral-200 bg-white px-2 py-0.5 font-mono text-[11px] font-medium text-neutral-800"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Right Column: Academic Foundation & Certifications */}
          <div className="lg:col-span-5 space-y-8">
            {/* Academic Education */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-blue-600" />
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-900">
                  Formação Acadêmica
                </h3>
              </div>

              {profileData.education.map((edu, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-neutral-200 bg-[#FAFAFA] p-6 shadow-sm transition-all hover:border-blue-300 hover:bg-white"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`rounded-full px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase ${
                        edu.status === "Em andamento"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-emerald-100 text-emerald-800"
                      }`}
                    >
                      {edu.status}
                    </span>
                    <span className="font-mono text-xs text-neutral-500">
                      {edu.period}
                    </span>
                  </div>

                  <h4 className="mt-3 text-base font-bold text-neutral-900 leading-snug">
                    {edu.credential}
                  </h4>
                  <p className="mt-1 text-xs font-semibold text-blue-600">
                    {edu.institution}
                  </p>
                  <p className="mt-3 border-t border-neutral-200 pt-3 text-xs leading-relaxed text-neutral-600">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Certifications & Complementary Courses */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-emerald-600" />
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-900">
                  Certificações Oficiais
                </h3>
              </div>

              <div className="rounded-2xl border border-neutral-200 bg-[#FAFAFA] p-6 shadow-sm">
                <ul className="divide-y divide-neutral-200">
                  {profileData.certifications.map((cert, i) => (
                    <li
                      key={i}
                      className="py-3 first:pt-0 last:pb-0 flex flex-col gap-1"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-xs font-bold text-neutral-900 leading-snug">
                          {cert.title}
                        </span>
                        {cert.featured && (
                          <span className="shrink-0 rounded bg-emerald-100 px-2 py-0.5 font-mono text-[10px] font-bold text-emerald-800">
                            C1 ADVANCED
                          </span>
                        )}
                      </div>
                      <div className="flex items-center justify-between font-mono text-[11px] text-neutral-500">
                        <span>{cert.issuer}</span>
                        <span>{cert.date}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
