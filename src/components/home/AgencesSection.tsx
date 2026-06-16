import { AGENCIES, WHATSAPP_URL } from "@/lib/constants";
import WhatsAppLink from "@/components/WhatsAppLink";

function IconPin() {
  return (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2C8.686 2 6 4.686 6 8c0 4.5 6 12 6 12s6-7.5 6-12c0-3.314-2.686-6-6-6z" />
      <circle cx="12" cy="8" r="2" />
    </svg>
  );
}

function IconClock() {
  return (
    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export default function AgencesSection() {
  return (
    <section className="bg-creme px-4 py-16 sm:py-20" aria-labelledby="agences-heading">
      <div className="max-w-5xl mx-auto">

        {/* En-tête */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-rouge text-xs font-semibold uppercase tracking-widest mb-3">
            Où nous trouver
          </p>
          <h2 id="agences-heading" className="font-heading text-3xl sm:text-4xl font-bold text-noir">
            Nos agences au Bénin
          </h2>
          <p className="mt-3 text-gris-texte text-base max-w-md mx-auto">
            Trois points de présence pour vous servir au plus proche.
          </p>
        </div>

        {/* Cartes agences */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {AGENCIES.map(({ city, area, detail }) => (
            <div
              key={city}
              className="bg-white rounded-3xl border border-border p-7 flex flex-col gap-4"
            >
              {/* Icône */}
              <div className="w-10 h-10 rounded-xl bg-rouge/10 text-rouge flex items-center justify-center">
                <IconPin />
              </div>

              {/* Contenu */}
              <div>
                <h3 className="font-heading font-bold text-noir text-xl mb-1">{city}</h3>
                <p className="font-semibold text-rouge text-sm mb-0.5">{area}</p>
                <p className="text-gris-texte text-sm">{detail}</p>
              </div>

              {/* Horaires */}
              <div className="mt-auto pt-4 border-t border-border flex items-center gap-2 text-gris-texte text-xs">
                <IconClock />
                <span>Ouvert tous les jours · 8h–20h</span>
              </div>
            </div>
          ))}
        </div>

        {/* Contact 24/7 */}
        <div className="bg-noir/5 rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-noir text-sm">Contact client disponible 24h/24 — 7j/7</p>
            <p className="text-gris-texte text-xs mt-0.5">
              Hors horaires d&apos;agence, joignez-nous directement sur WhatsApp.
            </p>
          </div>
          <WhatsAppLink
            href={WHATSAPP_URL}
            service="general"
            location="home_agences"
            className="shrink-0 inline-flex items-center gap-2 bg-whatsapp text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
          >
            Écrire maintenant
          </WhatsAppLink>
        </div>
      </div>
    </section>
  );
}
