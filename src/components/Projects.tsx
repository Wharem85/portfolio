import { ExternalLink, FolderGit2, Trophy } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import learniIcon from '../assets/learni-icon.png';

const logos: Record<string, string> = {
  Learniapp: learniIcon,
};

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20">
      <p className="font-mono text-sm text-[var(--accent)]">~/projects</p>
      <h2 className="mt-3 text-3xl font-bold text-[var(--text)] md:text-4xl">{t.projects.title}</h2>
      <p className="mt-2 max-w-2xl text-base leading-relaxed text-[var(--text-muted)]">
        {t.projects.subtitle}
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {t.projects.items.map((project) => {
          const logo = logos[project.name];
          return (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 transition-colors hover:border-[var(--accent)]"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  {logo ? (
                    <img
                      src={logo}
                      alt=""
                      className="h-7 w-7 rounded-md border border-[var(--border)] object-cover"
                    />
                  ) : (
                    <FolderGit2 size={20} className="text-[var(--accent)]" />
                  )}
                  <h3 className="font-mono text-base font-semibold text-[var(--text)]">
                    {project.name}
                  </h3>
                </div>
                <ExternalLink
                  size={16}
                  className="mt-1 shrink-0 text-[var(--text-muted)] transition-colors group-hover:text-[var(--accent)]"
                />
              </div>

              <p className="mt-1 font-mono text-xs text-[var(--text-muted)]">{project.role}</p>

              <p className="mt-4 text-sm leading-relaxed text-[var(--text-muted)]">
                {project.description}
              </p>

              {project.badge && (
                <div className="mt-4 flex items-center gap-1.5 self-start rounded-md border border-[var(--accent)] bg-[var(--accent-soft)] px-2.5 py-1 font-mono text-xs font-semibold text-[var(--accent)]">
                  <Trophy size={13} />
                  {project.badge}
                </div>
              )}

              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-[var(--border)] bg-[var(--bg-elevated)] px-2.5 py-1 font-mono text-xs text-[var(--text)]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <p className="mt-5 font-mono text-xs text-[var(--text-muted)] transition-colors group-hover:text-[var(--accent)]">
                ▸ {t.projects.visitLabel} — {project.urlDisplay}
              </p>
            </a>
          );
        })}
      </div>
    </section>
  );
}
