import { Mail } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa6';
import { useLanguage } from '../context/LanguageContext';
import { personal } from '../data/content';

export default function Hero() {
  const { t } = useLanguage();

  const lines = [
    { cmd: 'whoami' },
    { out: t.hero.name },
    { cmd: 'role --current' },
    { out: t.hero.roleShort },
    { cmd: 'location --remote' },
    { out: t.hero.location },
    { cmd: 'status' },
  ];

  return (
    <section id="top" className="mx-auto grid max-w-5xl gap-12 px-6 pb-24 pt-16 md:grid-cols-2 md:items-center md:pt-24">
      <div>
        <p className="font-mono text-sm text-[var(--accent)]">~/home</p>
        <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-[var(--text)] md:text-5xl">
          {t.hero.name}
        </h1>
        <h2 className="mt-4 max-w-md text-lg font-medium text-[var(--text-muted)]">{t.hero.role}</h2>

        <p className="mt-6 max-w-md text-base leading-relaxed text-[var(--text-muted)]">
          {t.hero.summary}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#experience"
            className="flex items-center gap-2 rounded-md bg-[var(--accent)] px-5 py-2.5 font-mono text-sm font-semibold text-[var(--accent-ink)] transition-transform hover:scale-[1.03]"
          >
            <span aria-hidden="true">▸</span>
            {t.hero.ctaPrimary}
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 rounded-md border border-[var(--border-strong)] px-5 py-2.5 font-mono text-sm font-semibold text-[var(--text)] transition-colors hover:border-[var(--accent)]"
          >
            <span aria-hidden="true">▸</span>
            {t.hero.ctaSecondary}
          </a>
        </div>

        <div className="mt-8 flex items-center gap-4">
          <a
            href={`mailto:${personal.email}`}
            aria-label="Email"
            className="rounded-md border border-[var(--border)] p-2.5 text-[var(--text-muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--text)]"
          >
            <Mail size={18} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-md border border-[var(--border)] p-2.5 text-[var(--text-muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--text)]"
          >
            <FaLinkedin size={18} />
          </a>
        </div>
      </div>

      <div className="terminal-window">
        <div className="terminal-titlebar">
          <span className="terminal-dot bg-[#ff5f57]" />
          <span className="terminal-dot bg-[#febc2e]" />
          <span className="terminal-dot bg-[#28c840]" />
          <span className="ml-2 font-mono text-xs text-[var(--text-muted)]">
            wilmer@monterrozo — zsh
          </span>
        </div>
        <div className="space-y-2 p-5 font-mono text-sm">
          {lines.map((line, i) =>
            'cmd' in line ? (
              <p
                key={i}
                className="reveal-line text-[var(--text)]"
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                <span className="text-[var(--accent)]">$</span> {line.cmd}
              </p>
            ) : (
              <p
                key={i}
                className="reveal-line pl-4 text-[var(--text-muted)]"
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                {line.out}
              </p>
            ),
          )}
          <p className="reveal-line pl-4 text-[var(--success)]" style={{ animationDelay: `${lines.length * 0.12}s` }}>
            <span className="status-dot mr-2 align-middle" /> {t.hero.statusText}
          </p>
          <p
            className="reveal-line text-[var(--text)]"
            style={{ animationDelay: `${(lines.length + 1) * 0.12}s` }}
          >
            <span className="text-[var(--accent)]">$</span> <span className="cursor-block" />
          </p>
        </div>
      </div>
    </section>
  );
}
