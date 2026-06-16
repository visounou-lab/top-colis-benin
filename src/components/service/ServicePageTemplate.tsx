import type { ReactNode } from "react";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/constants";
import WhatsAppLink from "@/components/WhatsAppLink";

/* ─── Types ─────────────────────────────────────────────────────────────── */

export type Prestation = {
  title: string;
  description: string;
  /** Petits tags affichés sous la description (villes, jours, etc.) */
  highlights?: string[];
};

export type ServicePageProps = {
  /** Nom court du service, ex. "Colis" */
  name: string;
  /** Accroche affichée comme sous-titre du hero */
  tagline: string;
  /** Paragraphe de présentation du service */
  description: string;
  /** Icône JSX (SVG) — sera rendue en grand dans le hero et en miniature ailleurs */
  icon: ReactNode;
  /** Liste des prestations proposées */
  prestations: Prestation[];
  /** Texte pré-rempli du message WhatsApp (sans encodage) */
  whatsappMessage: string;
  /** Slug du service dans la grille tarifaire, ex. "taxi" — sert à lier vers /tarifs#taxi */
  tarifSlug: string;
};

/* ─── Icônes internes ────────────────────────────────────────────────────── */

function IconCheck() {
  return (
    <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function IconWhatsApp() {
  return (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/* ─── Composant gabarit ───────────────────────────────────────────────────── */

export default function ServicePageTemplate({
  name,
  tagline,
  description,
  icon,
  prestations,
  whatsappMessage,
  tarifSlug,
}: ServicePageProps) {
  const waUrl = getWhatsAppUrl(whatsappMessage);

  return (
    <>
      {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
      <section className="bg-creme px-4 pt-10 pb-16 sm:pt-14 sm:pb-20">
        <div className="max-w-3xl mx-auto">

          {/* Fil d'Ariane */}
          <nav aria-label="Fil d'Ariane" className="mb-8 text-sm text-gris-texte">
            <Link href="/" className="hover:text-rouge transition-colors">Accueil</Link>
            <span className="mx-2" aria-hidden="true">›</span>
            <Link href="/services" className="hover:text-rouge transition-colors">Services</Link>
            <span className="mx-2" aria-hidden="true">›</span>
            <span className="text-noir font-medium" aria-current="page">{name}</span>
          </nav>

          {/* Icône + titre */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-6">
            <div
              className="w-16 h-16 rounded-2xl bg-rouge/10 text-rouge flex items-center justify-center shrink-0"
              aria-hidden="true"
            >
              <div className="w-8 h-8">{icon}</div>
            </div>
            <div>
              <p className="text-rouge text-xs font-semibold uppercase tracking-widest mb-1">
                Service
              </p>
              <h1 className="font-heading text-3xl sm:text-5xl font-bold text-noir leading-tight">
                {name}
              </h1>
            </div>
          </div>

          {/* Accroche + description */}
          <p className="text-xl sm:text-2xl font-heading font-semibold text-noir mb-3 leading-snug">
            {tagline}
          </p>
          <p className="text-gris-texte text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
            {description}
          </p>

          {/* CTA hero */}
          <div className="flex flex-wrap items-center gap-4">
            <WhatsAppLink
              href={waUrl}
              service={tarifSlug}
              location="service_hero"
              className="inline-flex items-center gap-2.5 bg-rouge text-white font-semibold px-7 py-3.5 rounded-full text-sm hover:bg-rouge-fonce active:scale-95 transition-all"
            >
              <IconWhatsApp />
              Commander {name} sur WhatsApp
            </WhatsAppLink>
            <Link
              href={`/tarifs#${tarifSlug}`}
              className="text-sm font-semibold text-noir underline decoration-noir/30 hover:decoration-noir transition-colors"
            >
              Voir les tarifs {name} →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. PRESTATIONS ──────────────────────────────────────────────── */}
      <section className="bg-white px-4 py-16 sm:py-20" aria-labelledby="prestations-heading">
        <div className="max-w-5xl mx-auto">

          <div className="mb-10 sm:mb-12">
            <p className="text-rouge text-xs font-semibold uppercase tracking-widest mb-3">
              Ce que nous proposons
            </p>
            <h2 id="prestations-heading" className="font-heading text-3xl sm:text-4xl font-bold text-noir">
              Nos prestations {name}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {prestations.map((p) => (
              <div
                key={p.title}
                className="bg-creme rounded-3xl border border-border p-6 flex flex-col gap-3"
              >
                {/* Titre */}
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 w-6 h-6 rounded-full bg-rouge/10 text-rouge flex items-center justify-center shrink-0">
                    <IconCheck />
                  </div>
                  <h3 className="font-heading font-bold text-noir text-base leading-snug">
                    {p.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gris-texte text-sm leading-relaxed pl-9">
                  {p.description}
                </p>

                {/* Highlights / tags */}
                {p.highlights && p.highlights.length > 0 && (
                  <div className="pl-9 flex flex-wrap gap-1.5 mt-1">
                    {p.highlights.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium bg-rouge/10 text-rouge px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. COMMENT COMMANDER ────────────────────────────────────────── */}
      <section className="bg-creme px-4 py-16 sm:py-20" aria-labelledby="comment-heading">
        <div className="max-w-4xl mx-auto">

          <div className="text-center mb-10 sm:mb-14">
            <p className="text-rouge text-xs font-semibold uppercase tracking-widest mb-3">
              En 3 étapes
            </p>
            <h2 id="comment-heading" className="font-heading text-3xl sm:text-4xl font-bold text-noir">
              Comment commander {name} ?
            </h2>
          </div>

          {/* Étapes */}
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                num: "01",
                title: "Envoyez votre demande",
                body: `Décrivez votre besoin ${name.toLowerCase()} en message WhatsApp — texte ou vocal. Nous répondons en quelques minutes.`,
              },
              {
                num: "02",
                title: "On confirme et s'organise",
                body: "Nous vous communiquons le tarif, la disponibilité et les modalités de ramassage ou de dépôt en agence.",
              },
              {
                num: "03",
                title: "Livraison & confirmation",
                body: "Votre commande est traitée et livrée. Vous recevez une confirmation WhatsApp et payez à la réception.",
              },
            ].map((step) => (
              <li
                key={step.num}
                className="bg-white rounded-3xl border border-border p-7 flex flex-col gap-4"
              >
                <span
                  className="font-heading text-4xl font-bold text-rouge/20 leading-none select-none"
                  aria-hidden="true"
                >
                  {step.num}
                </span>
                <div>
                  <h3 className="font-heading font-bold text-noir text-base mb-2">{step.title}</h3>
                  <p className="text-gris-texte text-sm leading-relaxed">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>

          {/* Bouton WhatsApp centré */}
          <div className="text-center">
            <WhatsAppLink
              href={waUrl}
              service={tarifSlug}
              location="service_comment_commander"
              className="inline-flex items-center gap-3 bg-whatsapp text-white font-bold px-8 py-4 rounded-full text-base hover:opacity-90 active:scale-95 transition-all shadow-md"
            >
              <IconWhatsApp />
              Passer commande sur WhatsApp
            </WhatsAppLink>
            <p className="mt-3 text-gris-texte text-xs">
              Réponse en moins de 5 min · 7j/7 · 24h/24
            </p>
          </div>
        </div>
      </section>

      {/* ── 4. CTA FINAL ────────────────────────────────────────────────── */}
      <section className="bg-noir px-4 py-14 sm:py-16" aria-labelledby="cta-service-heading">
        <div className="max-w-2xl mx-auto text-center">
          <h2
            id="cta-service-heading"
            className="font-heading text-2xl sm:text-3xl font-bold text-creme mb-3"
          >
            Un doute sur votre commande ?
          </h2>
          <p className="text-gris-texte text-sm sm:text-base mb-7">
            Notre équipe est disponible pour répondre à toutes vos questions,
            vous donner un devis précis ou organiser un enlèvement.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <WhatsAppLink
              href={waUrl}
              service={tarifSlug}
              location="service_cta_final"
              className="inline-flex items-center justify-center gap-2.5 bg-whatsapp text-white font-semibold px-7 py-3.5 rounded-full text-sm hover:opacity-90 active:scale-95 transition-all"
            >
              <IconWhatsApp />
              Écrire sur WhatsApp
            </WhatsAppLink>
            <Link
              href="/agences"
              className="inline-flex items-center justify-center border-2 border-white/20 text-creme font-semibold px-7 py-3.5 rounded-full text-sm hover:border-white/50 transition-colors"
            >
              Voir nos agences
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
