import { ArrowUpRight, ExternalLink } from "lucide-react";
import { projectsData } from "@/data/projects";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const labProjects = projectsData.filter((project) =>
  ["notecore", "medusa-bot", "presp", "java-faculdade"].includes(project.id),
);

export default function EngineeringLabSection() {
  return (
    <section id="laboratorio" className="border-y border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <SectionHeading
          index="03"
          eyebrow="LABORATÓRIO"
          title="Fundamentos, protótipos e pesquisa aplicada."
          description="Projetos acadêmicos e experimentos que atravessam mobile, IoT, computação estatística e estruturas de dados."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {labProjects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.04}>
              <article className="flex h-full flex-col rounded-xl border border-neutral-200 p-5 transition-shadow hover:shadow-editorial-hover sm:p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-[10px] tracking-[0.13em] text-blue-600">
                    PROJETO {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-[10px] text-neutral-600">
                    {project.status}
                  </span>
                </div>
                <p className="mt-6 font-mono text-[10px] tracking-wide text-neutral-500">
                  {project.category}
                </p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight text-neutral-900">
                  {project.name}
                </h3>
                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  {project.summary}
                </p>
                <ul className="mt-4 space-y-2">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-2.5 text-xs leading-5 text-neutral-600"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0F5338]" />
                      {highlight}
                    </li>
                  ))}
                </ul>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <li
                      key={item}
                      className="rounded border border-neutral-200 bg-[#FAFAFA] px-2 py-1 font-mono text-[10px] text-neutral-600"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                  Explorar repositório
                  <ExternalLink size={14} aria-hidden="true" />
                  <ArrowUpRight size={13} aria-hidden="true" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-5 text-xs leading-5 text-neutral-500">
          O repositório Java Faculdade é um acervo de exercícios da graduação;
          os destaques acima refletem os temas identificados no inventário
          disponível.
        </p>
      </div>
    </section>
  );
}