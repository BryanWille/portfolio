import { skillsMatrixData } from "@/data/skills";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function SkillsMatrixSection() {
  return (
    <section id="competencias" className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <SectionHeading
          index="05"
          eyebrow="COMPETÊNCIAS"
          title="Amplitude técnica, organizada por domínio."
          description="Ferramentas e práticas aplicadas em produtos, sistemas corporativos e projetos acadêmicos."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {skillsMatrixData.map((domain, index) => (
            <Reveal
              key={domain.id}
              delay={(index % 2) * 0.05}
              className={index === skillsMatrixData.length - 1 ? "md:col-span-2" : ""}
            >
              <article className="h-full rounded-xl border border-neutral-200 p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="max-w-md text-lg font-semibold tracking-tight text-neutral-900">
                    {domain.category}
                  </h3>
                  <span className="shrink-0 font-mono text-[10px] tracking-[0.12em] text-blue-600">
                    {domain.index}
                  </span>
                </div>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-600">
                  {domain.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {domain.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md border border-neutral-200 bg-[#FAFAFA] px-2.5 py-1.5 font-mono text-[10px] text-neutral-700"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}