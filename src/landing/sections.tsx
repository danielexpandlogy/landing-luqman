import type { ReactNode } from "react";
import type { LandingContent, SectionKey } from "./content";

type P = { content: LandingContent };

const wrap = "mx-auto w-full max-w-6xl px-4 sm:px-6";

/** Botón de agendar: lleva al calendario y cuenta el clic. */
export function CtaButton({ content, onClick, className = "" }: P & { onClick?: () => void; className?: string }) {
  return (
    <a
      href="#reservar"
      onClick={onClick}
      className={`inline-flex flex-col items-center rounded-xl bg-cta px-7 py-4 text-center text-white shadow-lg shadow-black/10 transition hover:bg-cta-hover ${className}`}
    >
      <span className="text-base font-bold">{content.cta.label}</span>
      {content.cta.sub && <span className="mt-0.5 text-[11px] font-semibold uppercase tracking-wider opacity-85">{content.cta.sub}</span>}
    </a>
  );
}

export function Header({ content }: P) {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className={`${wrap} flex h-16 items-center`}>
        {content.brand.logo ? (
          <img src={content.brand.logo.src} alt={content.brand.logo.alt} className="h-9 w-auto" />
        ) : (
          <span className="text-lg font-extrabold tracking-tight">{content.brand.name}</span>
        )}
      </div>
    </header>
  );
}

export function Hero({ content, booking, cta }: P & { booking: ReactNode; cta: ReactNode }) {
  const { hero } = content;
  return (
    <section className="bg-slate-50">
      <div className={`${wrap} grid gap-10 py-12 md:py-20 lg:grid-cols-[1.1fr_1fr] lg:items-start`}>
        <div className="space-y-6">
          {hero.badge && (
            <span className="inline-block rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent shadow-sm">
              {hero.badge}
            </span>
          )}
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl">
            {hero.title.before}
            <span className="text-accent">{hero.title.highlight}</span>
            {hero.title.after}
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-slate-600">{hero.lead}</p>
          {cta}
          {hero.trust.length > 0 && (
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-slate-600">
              {hero.trust.map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
          )}
          {hero.image ? (
            <img src={hero.image.src} alt={hero.image.alt} className="aspect-[16/10] w-full rounded-2xl object-cover shadow-md" />
          ) : (
            <div className="grid aspect-[16/10] w-full place-items-center rounded-2xl border-2 border-dashed border-slate-300 text-sm text-slate-400">
              [Pendiente] Imagen del hero
            </div>
          )}
        </div>
        {booking}
      </div>
    </section>
  );
}

export function Booking({ content }: P) {
  const { booking } = content;
  return (
    <div id="reservar" className="scroll-mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-black/5">
      <h2 className="text-xl font-bold text-slate-900">{booking.title}</h2>
      <p className="mt-1 text-sm text-slate-600">{booking.text}</p>
      <div className="mt-5">
        {booking.embedUrl ? (
          <iframe src={booking.embedUrl} title={booking.title} className="h-[640px] w-full border-0" />
        ) : (
          <div className="grid h-80 place-items-center rounded-xl border-2 border-dashed border-slate-300 text-center text-sm text-slate-400">
            [Pendiente] Calendario o formulario
            <br />
            (debe redirigir a /gracias al agendar)
          </div>
        )}
      </div>
    </div>
  );
}

function SectionTitle({ children }: { children: ReactNode }) {
  return <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">{children}</h2>;
}

const SECTIONS: Record<SectionKey, (props: P & { cta: ReactNode }) => ReactNode> = {
  benefits: ({ content }) => (
    <section className="py-16">
      <div className={`${wrap} space-y-8`}>
        <SectionTitle>{content.benefits.title}</SectionTitle>
        <div className="grid gap-5 md:grid-cols-3">
          {content.benefits.items.map((b) => (
            <div key={b.title} className="rounded-2xl border border-slate-200 p-6">
              <h3 className="font-bold text-slate-900">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  ),
  process: ({ content }) => (
    <section className="bg-slate-50 py-16">
      <div className={`${wrap} space-y-8`}>
        <SectionTitle>{content.process.title}</SectionTitle>
        <ol className="grid gap-5 md:grid-cols-3">
          {content.process.steps.map((s, i) => (
            <li key={s.title} className="rounded-2xl bg-white p-6 shadow-sm">
              <span className="grid size-9 place-items-center rounded-full bg-accent font-bold text-white">{i + 1}</span>
              <h3 className="mt-4 font-bold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  ),
  testimonials: ({ content }) => (
    <section className="py-16">
      <div className={`${wrap} space-y-8`}>
        <SectionTitle>{content.testimonials.title}</SectionTitle>
        <div className="grid gap-5 md:grid-cols-2">
          {content.testimonials.items.map((t, i) => (
            <figure key={i} className="rounded-2xl border border-slate-200 p-6">
              <blockquote className="leading-relaxed text-slate-700">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm">
                <span className="font-bold text-slate-900">{t.name}</span> <span className="text-slate-500">· {t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  ),
  faq: ({ content }) => (
    <section className="bg-slate-50 py-16">
      <div className={`${wrap} max-w-3xl space-y-8`}>
        <SectionTitle>{content.faq.title}</SectionTitle>
        <div className="divide-y divide-slate-200 rounded-2xl bg-white shadow-sm">
          {content.faq.items.map((f) => (
            <details key={f.q} className="group p-5">
              <summary className="cursor-pointer list-none font-semibold text-slate-900">{f.q}</summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  ),
  ctaBand: ({ content, cta }) => (
    <section className="bg-slate-900 py-16 text-white">
      <div className={`${wrap} flex flex-col items-center gap-6 text-center`}>
        <h2 className="text-3xl font-extrabold tracking-tight">{content.ctaBand.title}</h2>
        <p className="max-w-xl text-slate-300">{content.ctaBand.text}</p>
        {cta}
      </div>
    </section>
  ),
};

/** Las secciones debajo del hero, en el orden de la variante. */
export function OrderedSections({ content, cta }: P & { cta: ReactNode }) {
  return (
    <>
      {content.sectionOrder.map((key) => {
        const Section = SECTIONS[key];
        return <Section key={key} content={content} cta={cta} />;
      })}
    </>
  );
}

export function Footer({ content }: P) {
  return (
    <footer className="border-t border-slate-200 py-8">
      <p className={`${wrap} text-sm text-slate-500`}>{content.footer}</p>
    </footer>
  );
}
