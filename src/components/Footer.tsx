import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 font-mono text-xs text-[var(--text-muted)] sm:flex-row">
        <p>
          © {year} Wilmer Monterrozo. {t.footer.rights}
        </p>
        <p className="italic text-[var(--text-muted)]">
          <span className="text-[var(--accent)]">//</span> {t.footer.builtWith}
        </p>
      </div>
    </footer>
  );
}
