import { useLanguage } from '../context/LanguageContext';

function pseudoHash(seed: string): string {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash).toString(16).padStart(7, '0').slice(0, 7);
}

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20">
      <p className="font-mono text-sm text-[var(--accent)]">~/experience</p>
      <h2 className="mt-3 text-3xl font-bold text-[var(--text)] md:text-4xl">{t.experience.title}</h2>
      <p className="mt-2 font-mono text-xs text-[var(--text-muted)]">$ git log --oneline --graph</p>

      <div className="mt-10 space-y-10 border-l border-[var(--border)] pl-8">
        {t.experience.jobs.map((job, index) => {
          const isCurrent = index === 0;
          return (
            <div key={`${job.company}-${job.date}`} className="relative">
              <span
                className={`absolute -left-[41px] top-1.5 h-3 w-3 rounded-full border-2 ${
                  isCurrent ? 'border-[var(--success)] bg-[var(--success)]' : 'border-[var(--accent)] bg-[var(--bg)]'
                }`}
              />

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="font-mono text-xs text-[var(--text-muted)]">{pseudoHash(job.company + job.date)}</span>
                {isCurrent && (
                  <span className="rounded-md border border-[var(--success)] bg-[var(--success-soft)] px-1.5 py-0.5 font-mono text-[10px] font-semibold text-[var(--success)]">
                    HEAD -&gt; main
                  </span>
                )}
              </div>

              <div className="mt-1.5 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold text-[var(--text)]">{job.role}</h3>
                <span className="font-mono text-xs text-[var(--text-muted)]">{job.date}</span>
              </div>
              <p className="text-sm font-medium text-[var(--accent)]">
                {job.company} <span className="text-[var(--text-muted)]">· {job.location}</span>
              </p>

              {job.summary && (
                <p className="mt-3 text-sm italic leading-relaxed text-[var(--text-muted)]">{job.summary}</p>
              )}

              <ul className="mt-3 space-y-2">
                {job.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-2 text-sm leading-relaxed text-[var(--text-muted)]">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--text-muted)]" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
