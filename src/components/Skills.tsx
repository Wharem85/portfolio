import { useLanguage } from '../context/LanguageContext';

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20">
      <p className="font-mono text-sm text-[var(--accent)]">~/skills</p>
      <h2 className="mt-3 text-3xl font-bold text-[var(--text)] md:text-4xl">{t.skills.title}</h2>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {t.skills.groups.map((group) => (
          <div
            key={group.title}
            className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 transition-colors hover:border-[var(--border-strong)]"
          >
            <h3 className="font-mono text-xs text-[var(--text-muted)]">
              <span className="text-[var(--accent)]">//</span> {group.title}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-[var(--border)] bg-[var(--bg-elevated)] px-2.5 py-1 font-mono text-xs text-[var(--text)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
