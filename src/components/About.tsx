import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20">
      <p className="font-mono text-sm text-[var(--accent)]">~/about</p>
      <h2 className="mt-3 text-3xl font-bold text-[var(--text)] md:text-4xl">{t.about.title}</h2>
      <p className="mt-6 max-w-3xl text-base leading-relaxed text-[var(--text-muted)] md:text-lg">
        {t.about.text}
      </p>
    </section>
  );
}
