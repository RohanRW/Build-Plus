/**
 * A single development. Fields with no value on record are skipped rather
 * than padded — nothing is invented to keep the cards uniform.
 */
export default function ProjectCard({ project, developerLabel, developer }) {
  const details = [
    ["Development Type", project.developmentType],
    ["Building Configuration", project.configuration],
    ["Land Area", project.landArea],
    ["Typical Unit / Floor Area", project.unitArea],
    ["Project Status", project.status],
  ].filter(([, value]) => Boolean(value));

  const cover = project.images?.[0];

  return (
    <article className="flex flex-col border border-line">
      {cover ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={cover.src}
          alt={cover.alt || project.name}
          className="aspect-[4/3] w-full object-cover"
        />
      ) : (
        <div className="flex aspect-[4/3] items-center justify-center bg-mist text-xs uppercase tracking-[0.18em] text-slate">
          Imagery pending
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        {developerLabel && (
          <p className="eyebrow !text-[0.6rem]">{developerLabel}</p>
        )}

        <h3 className="mt-3 font-display text-2xl font-bold uppercase">
          {project.name}
        </h3>
        <p className="mt-1 text-sm text-slate">{project.location}</p>

        <dl className="mt-5 flex-1 space-y-2 text-sm">
          {details.map(([label, value]) => (
            <div
              key={label}
              className="flex justify-between gap-4 border-t border-line pt-2"
            >
              <dt className="text-slate">{label}</dt>
              <dd className="text-right font-medium text-ink">{value}</dd>
            </div>
          ))}
        </dl>

        {developer && (
          <p className="mt-5 border-t border-line pt-4 text-sm text-slate">
            Developer: <span className="text-ink">{developer}</span>
          </p>
        )}
      </div>
    </article>
  );
}
