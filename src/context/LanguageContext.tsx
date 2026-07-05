import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';
import { content, type ContentShape, type Lang } from '../data/content';

interface LanguageContextValue {
  lang: Lang;
  toggleLang: () => void;
  t: ContentShape;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

function detectDefaultLang(): Lang {
  if (typeof navigator === 'undefined') return 'en';
  return navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(detectDefaultLang);

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      toggleLang: () => setLang((prev) => (prev === 'en' ? 'es' : 'en')),
      t: content[lang],
    }),
    [lang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
}
