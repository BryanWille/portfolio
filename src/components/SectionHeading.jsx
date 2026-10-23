export default function SectionHeading({ index, eyebrow, title, description }) {
  return (
    <div className="mb-10 grid gap-4 border-b border-neutral-200 pb-6 md:grid-cols-[150px_1fr] md:gap-8">
      <div className="font-mono text-xs tracking-[0.16em] text-neutral-500">
        <span className="text-blue-600">{index}</span>
        <span className="mx-2 text-neutral-300">/</span>
        {eyebrow}
      </div>
      <div className="max-w-3xl">
        <h2 className="text-3xl font-semibold tracking-[-0.045em] text-neutral-900 sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-600">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
