import { Mail, MapPin, Phone } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa6';
import { useLanguage } from '../context/LanguageContext';
import { personal } from '../data/content';

export default function Contact() {
  const { t } = useLanguage();

  const items = [
    { icon: Mail, label: t.contact.emailLabel, value: personal.email, href: `mailto:${personal.email}` },
    { icon: Phone, label: t.contact.phoneLabel, value: personal.phone, href: `tel:${personal.phone.replace(/[^+\d]/g, '')}` },
    {
      icon: FaLinkedin,
      label: t.contact.linkedinLabel,
      value: personal.linkedinDisplay,
      href: personal.linkedin,
      external: true,
    },
    { icon: MapPin, label: t.contact.locationLabel, value: 'Guatemala City', href: undefined },
  ];

  return (
    <section id="contact" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20">
      <p className="font-mono text-sm text-[var(--accent)]">~/contact</p>
      <h2 className="mt-3 text-3xl font-bold text-[var(--text)] md:text-4xl">{t.contact.title}</h2>
      <p className="mt-2 font-mono text-xs text-[var(--text-muted)]">$ contact --wilmer</p>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--text-muted)]">{t.contact.text}</p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {items.map((item) => {
          const Icon = item.icon;
          const content = (
            <>
              <span className="rounded-md border border-[var(--border)] p-2.5 text-[var(--accent)] group-hover:border-[var(--accent)]">
                <Icon size={18} />
              </span>
              <span>
                <span className="block text-xs text-[var(--text-muted)]">{item.label}</span>
                <span className="block text-sm font-medium text-[var(--text)]">{item.value}</span>
              </span>
            </>
          );

          const className =
            'group flex items-center gap-4 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4 transition-colors hover:border-[var(--accent)]';

          return item.href ? (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noreferrer' : undefined}
              className={className}
            >
              {content}
            </a>
          ) : (
            <div key={item.label} className={className}>
              {content}
            </div>
          );
        })}
      </div>
    </section>
  );
}
