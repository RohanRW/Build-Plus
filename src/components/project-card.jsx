import Image from "next/image";

/**
 * A single development. Fields with no value on record are skipped rather
 * than padded — nothing is invented to keep the cards uniform.
 */
export default function ProjectCard({ project, developerLabel, developer }) {
  const details = [
    ["Development Type", project.developmentType],
    ["Configuration", project.configuration],
    ["Land Area", project.landArea],
    ["Typical Unit / Floor Area", project.unitArea],
  ].filter(([, value]) => Boolean(value));

  const cover = project.images?.[0];

  return (
    <article className="group flex h-full flex-col border border-line bg-canvas transition-colors duration-300 hover:border-ink">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-mist">
        {cover ? (
          <Image
            src={cover.src}
            alt={cover.alt || project.name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-xs uppercase tracking-[0.18em] text-slate">
            Imagery pending
          </div>
        )}

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        {project.status && (
          <span className="absolute left-0 top-0 bg-black px-3 py-2 text-[0.6rem] font-bold uppercase tracking-[0.18em] text-white">
            {project.status}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        {developerLabel && (
          <p className="eyebrow !text-[0.58rem]">{developerLabel}</p>
        )}

        <h3 className="mt-3 text-2xl font-extrabold uppercase tracking-tight">
          {project.name}
        </h3>
        <p className="mt-1 text-sm text-slate">{project.location}</p>

        {project.summary && (
          <p className="mt-4 text-sm leading-relaxed text-slate">
            {project.summary}
          </p>
        )}

        <dl className="mt-6 flex-1 space-y-2.5 text-sm">
          {details.map(([label, value]) => (
            <div
              key={label}
              className="flex justify-between gap-4 border-t border-line pt-2.5"
            >
              <dt className="text-slate">{label}</dt>
              <dd className="text-right font-semibold text-ink">{value}</dd>
            </div>
          ))}
        </dl>

        {developer && (
          <p className="mt-6 border-t border-line pt-4 text-xs uppercase tracking-[0.14em] text-slate">
            Developer <span className="text-ink">{developer}</span>
          </p>
        )}
      </div>
    </article>
  );
}
