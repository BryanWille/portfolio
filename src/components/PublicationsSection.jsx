import { ArrowUpRight, Linkedin } from "lucide-react";
import { publicationsData } from "@/data/publications";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function PublicationsSection() {
  return (
    <section id="publicacoes" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <SectionHeading
          index="04"
          eyebrow="PUBLICAÇÕES"
          title="Artigos, projetos e bastidores técnicos."
          description="Registros públicos que complementam os projetos com contexto, processo e aprendizados."
        />

        <div className="divide-y divide-neutral-200 border-y border-neutral-200">
          {publicationsData.map((publication, index) => (
            <Reveal key={publication.id} delay={index * 0.025}>
              <article className="grid gap-4 py-6 sm:grid-cols-[72px_1fr_auto] sm:items-start sm:gap-6">
                <p className="font-mono text-xs text-neutral-400">
                  {publication.index}
                </p>
                <div>
                  <p className="font-mono text-[10px] tracking-[0.1em] text-blue-600">
                    {publication.tag}
                  </p>
                  <h3 className="mt-2 max-w-3xl text-lg font-semibold leading-6 tracking-tight text-neutral-900">
                    {publication.title}
                  </h3>
                  <p className="mt-2 max-w-3xl text-sm leading-6 text-neutral-600">
                    {publication.summary}
                  </p>
                </div>
                <a
                  href={publication.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Ler publicação: ${publication.title}`}
                  className="inline-flex w-fit items-center gap-2 rounded-md border border-neutral-200 bg-white px-3.5 py-2.5 text-xs font-medium text-neutral-700 transition-colors hover:border-blue-200 hover:text-blue-700"
                >
                  <Linkedin size={14} aria-hidden="true" />
                  Ler no LinkedIn
                  <ArrowUpRight size={13} aria-hidden="true" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}