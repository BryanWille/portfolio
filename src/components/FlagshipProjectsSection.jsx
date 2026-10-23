import {
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Github,
  Play,
} from "lucide-react";
import { projectsData } from "@/data/projects";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const flagshipProjects = projectsData.filter((project) =>
  ["noobie", "bookie", "br381"].includes(project.id),
);

export default function FlagshipProjectsSection() {
  return (
    <section id="produtos" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <SectionHeading
          index="02"
          eyebrow="PRODUTOS & CASES"
          title="Do produto digital à pipeline de dados."
          description="Sistemas com problema, arquitetura e decisões técnicas identificáveis — do uso diário à análise operacional."
        />

        <div className="space-y-5">
          {flagshipProjects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.05}>
              <article className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-editorial">
                <div className="grid md:grid-cols-[0.8fr_1.2fr]">
                  <div className="flex flex-col justify-between border-b border-neutral-200 bg-[#F8F9FA] p-5 sm:p-7 md:border-b-0 md:border-r">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-[10px] tracking-[0.14em] text-blue-600">
                          CASE {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#CFE4D7] bg-[#F1F8F3] px-2.5 py-1 text-[10px] font-medium text-[#0F5338]">
                          <CheckCircle2 size={12} aria-hidden="true" />
                          {project.status}
                        </span>
                      </div>
                      <p className="mt-8 font-mono text-[10px] tracking-wide text-neutral-500">
                        {project.category}
                      </p>
                      <h3 className="mt-2 text-3xl font-semibold tracking-[-0.05em] text-neutral-900">
                        {project.name}
                      </h3>
                      <p className="mt-4 text-sm leading-6 text-neutral-600">
                        {project.summary}
                      </p>
                    </div>
                    <div className="mt-7 flex flex-wrap gap-3">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-md bg-neutral-900 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                      >
                        {project.id === "br381" ? "Ver repositório" : "Visitar produto"}
                        <ExternalLink size={14} aria-hidden="true" />
                      </a>
                      {project.github && project.id !== "br381" ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Abrir código do ${project.name} no GitHub`}
                          className="inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-white px-4 py-2.5 text-sm text-neutral-700 transition-colors hover:border-neutral-300"
                        >
                          <Github size={15} aria-hidden="true" />
                          Código
                        </a>
                      ) : null}
                      {project.video ? (
                        <a
                          href={project.video}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-white px-4 py-2.5 text-sm text-neutral-700 transition-colors hover:border-neutral-300"
                        >
                          <Play size={14} aria-hidden="true" />
                          Vídeo
                        </a>
                      ) : null}
                    </div>
                  </div>
                  <div className="p-5 sm:p-7">
                    <div>
                      <p className="font-mono text-[10px] tracking-[0.14em] text-neutral-500">
                        CONTEXTO & ARQUITETURA
                      </p>
                      <p className="mt-3 text-sm leading-6 text-neutral-700">
                        {project.problem}
                      </p>
                      <p className="mt-3 text-sm leading-6 text-neutral-600">
                        {project.architecture}
                      </p>
                    </div>
                    <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                      {project.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex gap-2.5 rounded-lg border border-neutral-100 bg-[#FAFAFA] p-3 text-xs leading-5 text-neutral-600"
                        >
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <li
                          key={item}
                          className="rounded border border-neutral-200 px-2.5 py-1 font-mono text-[10px] text-neutral-600"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                    {project.github && project.id === "br381" ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-blue-600 hover:text-blue-700"
                      >
                        Abrir repositório no GitHub
                        <ArrowUpRight size={13} aria-hidden="true" />
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}