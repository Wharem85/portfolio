import { GraduationCap, Languages as LangIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Education() {
  const { t } = useLanguage();

  return (
    <section id="education" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20">
      <p className="font-mono text-sm text-[var(--accent)]">~/education</p>
      <h2 className="mt-3 text-3xl font-bold text-[var(--text)] md:text-4xl">{t.education.title}</h2>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6">
          <div className="flex items-center gap-2 text-[var(--accent)]">
            <GraduationCap size={20} />
            <h3 className="text-sm font-semibold uppercase tracking-wide">{t.education.degreeTitle}</h3>
          </div>
          <p className="mt-4 text-lg font-semibold text-[var(--text)]">{t.education.degree}</p>
          <p className="text-sm text-[var(--text-muted)]">{t.education.school}</p>

          <div className="mt-6 flex items-center gap-2 border-t border-[var(--border)] pt-4 text-sm text-[var(--text-muted)]">
            <LangIcon size={16} className="text-[var(--accent)]" />
            {t.education.english}
          </div>
        </div>

        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--accent)]">
            {t.education.leadershipTitle}
          </h3>
          <ul className="mt-4 space-y-4">
            {t.education.leadership.map((item) => (
              <li key={item.title}>
                <p className="text-sm font-semibold text-[var(--text)]">{item.title}</p>
                <p className="text-sm text-[var(--text-muted)]">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
