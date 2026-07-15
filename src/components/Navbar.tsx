import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import logoMask from '../assets/logo-w-mask.png';

export default function Navbar() {
  const { t, lang, toggleLang } = useLanguage();
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#about', label: t.nav.about },
    { href: '#experience', label: t.nav.experience },
    { href: '#projects', label: t.nav.projects },
    { href: '#skills', label: t.nav.skills },
    { href: '#education', label: t.nav.education },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/85 backdrop-blur-md">
      <nav className="mx-auto flex w-[80%] items-center justify-between py-4">
        <a href="#top" className="flex items-center gap-2 font-mono text-sm font-semibold tracking-tight text-[var(--text)]">
          <span
            className="block h-[18px] w-[28px] shrink-0 bg-[var(--accent-strong)]"
            style={{
              WebkitMaskImage: `url(${logoMask})`,
              maskImage: `url(${logoMask})`,
              WebkitMaskSize: 'contain',
              maskSize: 'contain',
              WebkitMaskRepeat: 'no-repeat',
              maskRepeat: 'no-repeat',
              WebkitMaskPosition: 'left center',
              maskPosition: 'left center',
            }}
            aria-hidden="true"
          />
          wilmer@monterrozo<span className="text-[var(--text-muted)]">:~$</span>
          <span className="cursor-block ml-1" />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group font-mono text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
              >
                <span className="text-[var(--accent)] opacity-0 transition-opacity group-hover:opacity-100">
                  &gt;{' '}
                </span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="flex items-center overflow-hidden rounded-md border border-[var(--border)] font-mono text-xs font-medium"
            aria-label="Toggle language"
          >
            <span
              className={`px-2.5 py-1.5 transition-colors ${lang === 'en' ? 'bg-[var(--accent-soft)] text-[var(--accent)]' : 'text-[var(--text-muted)]'}`}
            >
              en
            </span>
            <span className="text-[var(--border-strong)]">|</span>
            <span
              className={`px-2.5 py-1.5 transition-colors ${lang === 'es' ? 'bg-[var(--accent-soft)] text-[var(--accent)]' : 'text-[var(--text-muted)]'}`}
            >
              es
            </span>
          </button>
          <button
            className="text-[var(--text)] md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="mx-auto flex w-[80%] flex-col gap-1 border-t border-[var(--border)] py-4 md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 font-mono text-sm text-[var(--text-muted)] hover:text-[var(--text)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
