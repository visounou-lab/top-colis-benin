import Link from "next/link";
import { AGENCIES, NAV_LINKS, WHATSAPP_URL } from "@/lib/constants";

function IconPin({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2C8.686 2 6 4.686 6 8c0 4.5 6 12 6 12s6-7.5 6-12c0-3.314-2.686-6-6-6z" />
      <circle cx="12" cy="8" r="2" />
    </svg>
  );
}

function IconClock({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-noir text-creme mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-12">

        {/* Grille principale : empilée mobile, 3 colonnes desktop */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">

          {/* Colonne 1 — Logo + tagline */}
          <div>
            <Link href="/" className="font-heading text-2xl font-bold text-creme">
              Top <span className="text-rouge">Colis</span> Bénin
            </Link>
            <p className="mt-3 text-sm text-gris-texte leading-relaxed">
              Votre partenaire de livraison express au Bénin. Rapide, fiable et accessible.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 bg-whatsapp text-white text-sm font-semibold px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
            >
              Commander
            </a>
          </div>

          {/* Colonne 2 — Nos agences */}
          <div>
            <h3 className="font-heading text-base font-semibold text-or mb-4">Nos agences</h3>
            <ul className="space-y-4">
              {AGENCIES.map(({ city, area, detail }) => (
                <li key={city} className="flex gap-3">
                  <IconPin className="w-4 h-4 shrink-0 mt-0.5 text-rouge" />
                  <div>
                    <span className="text-sm font-semibold text-creme">{city}</span>
                    <br />
                    <span className="text-sm text-gris-texte">
                      {area} — {detail}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 — Horaires + Navigation */}
          <div className="space-y-8">
            {/* Horaires */}
            <div>
              <h3 className="font-heading text-base font-semibold text-or mb-4">Horaires</h3>
              <ul className="space-y-2">
                <li className="flex gap-3 items-start">
                  <IconClock className="w-4 h-4 shrink-0 mt-0.5 text-rouge" />
                  <span className="text-sm text-gris-texte">
                    Agences ouvertes <strong className="text-creme">tous les jours</strong> de <strong className="text-creme">8h à 20h</strong>
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <IconClock className="w-4 h-4 shrink-0 mt-0.5 text-or" />
                  <span className="text-sm text-gris-texte">
                    Contact client <strong className="text-creme">24h/24 — 7j/7</strong>
                  </span>
                </li>
              </ul>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="font-heading text-base font-semibold text-or mb-4">Pages</h3>
              <nav aria-label="Liens du pied de page">
                <ul className="space-y-2">
                  {NAV_LINKS.map(({ label, href }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className="text-sm text-gris-texte hover:text-creme transition-colors"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>

        {/* Séparateur + copyright */}
        <div className="mt-10 pt-6 border-t border-white/10 text-center text-xs text-gris-texte">
          © {year} Top Colis Bénin. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
