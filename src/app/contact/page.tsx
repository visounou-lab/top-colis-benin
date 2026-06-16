import type { Metadata } from "next";
import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/constants";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Top Colis Bénin",
  description:
    "Contactez Top Colis Bénin par WhatsApp au +229 01 67 68 78 70. Réponse en moins de 5 minutes. 3 agences à Abomey-Calavi, Cotonou et Porto-Novo.",
};

/* ─── Icônes ──────────────────────────────────────────────────────────────── */

function IconWhatsApp() {
  return (
    <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.05 2.21 2 2 0 012 .04h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function IconPin() {
  return (
    <svg className="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2C8.686 2 6 4.686 6 8c0 4.5 6 12 6 12s6-7.5 6-12c0-3.314-2.686-6-6-6z" />
      <circle cx="12" cy="8" r="2" />
    </svg>
  );
}

function IconClock() {
  return (
    <svg className="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

/* ─── Données agences (résumé) ────────────────────────────────────────────── */

const agencies = [
  { city: "Abomey-Calavi", area: "Kpota", address: "À 200 m du carrefour Kpota en direction de l'église Bakhita" },
  { city: "Cotonou", area: "Marché Missèbo", address: "En face de la banque BOA" },
  { city: "Porto-Novo", area: "Foun-Foun Gbego", address: "Non loin de l'École Normale Supérieure" },
];

/* ─── Page ────────────────────────────────────────────────────────────────── */

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="bg-creme px-4 pt-12 pb-14 sm:pt-16 sm:pb-16">
        <div className="max-w-5xl mx-auto">
          <nav aria-label="Fil d'Ariane" className="mb-8 text-sm text-gris-texte">
            <Link href="/" className="hover:text-rouge transition-colors">Accueil</Link>
            <span className="mx-2" aria-hidden="true">›</span>
            <span className="text-noir font-medium" aria-current="page">Contact</span>
          </nav>

          <p className="text-rouge text-xs font-semibold uppercase tracking-widest mb-3">
            On vous répond
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-noir leading-tight mb-4">
            Une question ? Écrivez-nous.
          </h1>
          <p className="text-gris-texte text-lg leading-relaxed max-w-xl">
            Notre équipe répond en moins de 5 minutes sur WhatsApp. Utilisez le formulaire
            ci-dessous ou appelez-nous directement.
          </p>
        </div>
      </section>

      {/* ── Contenu principal ────────────────────────────────────────────── */}
      <section className="bg-white px-4 py-14 sm:py-18">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Colonne gauche — coordonnées */}
          <div className="space-y-8">

            {/* Gros bouton WhatsApp */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-whatsapp text-white font-bold px-7 py-5 rounded-2xl hover:opacity-90 active:scale-95 transition-all shadow-md"
            >
              <span className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                <IconWhatsApp />
              </span>
              <div>
                <p className="text-base font-bold leading-tight">Écrire sur WhatsApp</p>
                <p className="text-white/80 text-sm font-normal">Réponse en moins de 5 minutes</p>
              </div>
            </a>

            {/* Numéro de téléphone */}
            <div className="bg-creme rounded-2xl border border-border px-6 py-5 flex items-center gap-4">
              <span className="w-10 h-10 rounded-full bg-rouge/10 text-rouge flex items-center justify-center shrink-0">
                <IconPhone />
              </span>
              <div>
                <p className="text-xs font-semibold text-gris-texte uppercase tracking-widest mb-0.5">
                  Téléphone / WhatsApp
                </p>
                <a
                  href="tel:+2290167687870"
                  className="font-heading text-xl font-bold text-noir hover:text-rouge transition-colors"
                >
                  +229 01 67 68 78 70
                </a>
              </div>
            </div>

            {/* Horaires */}
            <div className="bg-creme rounded-2xl border border-border px-6 py-5 space-y-3">
              <h2 className="font-heading text-base font-bold text-noir">Disponibilité</h2>
              <div className="flex items-start gap-3 text-sm text-gris-texte">
                <span className="text-rouge mt-0.5"><IconClock /></span>
                <span>
                  Agences ouvertes <strong className="text-noir">tous les jours de 8h à 20h</strong>
                </span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gris-texte">
                <span className="text-or mt-0.5"><IconClock /></span>
                <span>
                  Contact client <strong className="text-noir">disponible 24h/24 · 7j/7</strong>
                </span>
              </div>
            </div>

            {/* Agences résumé */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-heading text-base font-bold text-noir">Nos agences</h2>
                <Link
                  href="/agences"
                  className="text-xs font-semibold text-rouge hover:underline"
                >
                  Voir les adresses détaillées →
                </Link>
              </div>
              <ul className="space-y-3">
                {agencies.map((ag) => (
                  <li
                    key={ag.city}
                    className="flex items-start gap-3 bg-creme rounded-2xl border border-border px-4 py-3"
                  >
                    <span className="text-rouge"><IconPin /></span>
                    <div>
                      <p className="text-sm font-semibold text-noir">{ag.city}</p>
                      <p className="text-xs text-gris-texte leading-snug">
                        {ag.area} — {ag.address}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Colonne droite — formulaire */}
          <ContactForm />
        </div>
      </section>
    </>
  );
}
