import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { getWhatsAppUrl, SERVICE_WHATSAPP_MESSAGES } from "@/lib/constants";
import WhatsAppLink from "@/components/WhatsAppLink";

export const metadata: Metadata = {
  title: "Tarifs — Top Colis Bénin",
  description:
    "Tarifs indicatifs de Top Colis Bénin : colis local et international, taxi, pharma, marché et food. Devis exact gratuit sur WhatsApp.",
};

/* ══════════════════════════════════════════════════════════════════════════════
   TARIFS — Modifiez uniquement les valeurs dans cette section
   ══════════════════════════════════════════════════════════════════════════════ */

type PriceRow = {
  label: string;
  price: string;
  note?: string;
  highlight?: boolean;
};

type ServiceTarif = {
  slug: string;
  name: string;
  tagline: string;
  icon: ReactNode;
  accentBg: string;
  accentText: string;
  accentBadge: string;
  rows: PriceRow[];
  footer?: string;
};

const TARIFS: ServiceTarif[] = [
  {
    slug: "colis",
    name: "Colis",
    tagline: "Livraison locale et inter-villes",
    icon: <IconColis />,
    accentBg: "bg-rouge/8",
    accentText: "text-rouge",
    accentBadge: "bg-rouge/10 text-rouge",
    rows: [
      { label: "Livraison dans la même ville", price: "1 500 FCFA" },
      { label: "Inter-villes (Calavi ↔ Cotonou ↔ Porto-Novo)", price: "2 000 FCFA" },
      { label: "Ramassage à domicile", price: "500 FCFA" },
      { label: "Circuit groupé hebdomadaire (par colis)", price: "1 000 FCFA" },
      { label: "Emballage soigné (sur demande)", price: "500 FCFA" },
    ],
    footer:
      "Tarifs pour colis de moins de 5 kg. Au-delà, supplément au poids — devis sur demande.",
  },
  {
    slug: "taxi",
    name: "Taxi",
    tagline: "Zem et voiture à tarif unique",
    icon: <IconTaxi />,
    accentBg: "bg-or/8",
    accentText: "text-or",
    accentBadge: "bg-or/15 text-or",
    rows: [
      { label: "Zem — tarif unique (courte distance)", price: "700 FCFA" },
      { label: "Voiture — tarif unique (courte distance)", price: "2 500 FCFA" },
      { label: "Transfert aéroport (Cotonou)", price: "5 000 FCFA" },
      { label: "Mise à disposition demi-journée", price: "15 000 FCFA" },
      { label: "Mise à disposition journée complète", price: "Sur devis" },
    ],
    footer:
      "Tarif unique sans négociation. Pour les longues distances ou les séjours, contactez-nous.",
  },
  {
    slug: "pharma",
    name: "Pharma",
    tagline: "Livraison express de médicaments",
    icon: <IconPharma />,
    accentBg: "bg-rouge/8",
    accentText: "text-rouge",
    accentBadge: "bg-rouge/10 text-rouge",
    rows: [
      { label: "Frais de service (livraison + démarche)", price: "1 500 FCFA" },
      { label: "Livraison à l'hôpital (supplément)", price: "500 FCFA" },
      { label: "Prix des médicaments", price: "Tarif pharmacie", note: "Communiqué avant achat, sans majoration" },
    ],
    footer:
      "Le prix exact des médicaments vous est confirmé avant tout achat. Aucune surprise.",
  },
  {
    slug: "marche",
    name: "Marché",
    tagline: "Courses et achats au marché",
    icon: <IconMarche />,
    accentBg: "bg-or/8",
    accentText: "text-or",
    accentBadge: "bg-or/15 text-or",
    rows: [
      { label: "Frais de service (course + livraison)", price: "2 000 FCFA" },
      { label: "Commande volumineuse (> 10 articles)", price: "3 000 FCFA" },
      { label: "Prix des articles", price: "Prix marché du jour", note: "Photo du ticket fournie à réception" },
    ],
    footer:
      "Vous payez les articles au prix réel du marché, photo à l'appui. Pas de marge cachée.",
  },
  {
    slug: "food",
    name: "Food",
    tagline: "Livraison de repas à prix doux",
    icon: <IconFood />,
    accentBg: "bg-rouge/8",
    accentText: "text-rouge",
    accentBadge: "bg-rouge/10 text-rouge",
    rows: [
      { label: "Frais de livraison (même ville)", price: "1 500 FCFA" },
      { label: "Frais de livraison (inter-villes)", price: "2 000 FCFA" },
      { label: "Prix des plats", price: "Tarif restaurateur", note: "Variable selon le plat et le restaurant" },
      { label: "Commande minimum", price: "2 000 FCFA", note: "Montant des plats, hors livraison" },
    ],
    footer:
      "Street food, charcuteries de Porto-Novo et plats africains — les prix sont ceux du commerçant, sans surcharge.",
  },
];

/* Tarifs internationaux — modifiez les lignes ci-dessous */

type DestinationRow = { label: string; price: string; isContact?: boolean };

type Region = {
  name: string;
  badge: string;
  accentBg: string;
  accentText: string;
  rows: DestinationRow[];
  delai: string;
};

const REGIONS_INTERNATIONAL: Region[] = [
  {
    name: "RD Congo",
    badge: "USD / kg",
    accentBg: "bg-rouge/8",
    accentText: "text-rouge",
    rows: [
      { label: "Kinshasa", price: "9 $/kg" },
      { label: "Lubumbashi", price: "11 $/kg" },
      { label: "Kolwezi", price: "12 $/kg" },
      { label: "Bukavu", price: "13 $/kg" },
      { label: "Likasi", price: "13 $/kg" },
      { label: "Goma", price: "13 $/kg" },
      { label: "Autre ville en RDC", price: "Contactez le service client", isContact: true },
    ],
    delai: "Délai : dès 72 h",
  },
  {
    name: "Afrique",
    badge: "USD ou FCFA / kg",
    accentBg: "bg-or/8",
    accentText: "text-or",
    rows: [
      { label: "Afrique du Sud", price: "22 $/kg" },
      { label: "Brazzaville (Congo)", price: "4 000 FCFA/kg" },
      { label: "Pointe-Noire (Congo)", price: "4 000 FCFA/kg" },
      { label: "Reste de l'Afrique", price: "4 000 FCFA/kg" },
    ],
    delai: "Délai communiqué à la commande",
  },
  {
    name: "Europe",
    badge: "EUR / kg",
    accentBg: "bg-rouge/8",
    accentText: "text-rouge",
    rows: [
      { label: "France", price: "15 €/kg" },
      { label: "Allemagne", price: "20 €/kg" },
      { label: "Belgique", price: "20 €/kg" },
      { label: "Autre destination en Europe", price: "Contactez le service client", isContact: true },
    ],
    delai: "Délai communiqué à la commande",
  },
];

const POIDS_MIN_INTERNATIONAL = "1 kg";
const FRAIS_EMBALLAGE_INTERNATIONAL = "1 000 FCFA";

/* ══════════════════════════════════════════════════════════════════════════════
   FIN DE LA SECTION TARIFS
   ══════════════════════════════════════════════════════════════════════════════ */

/* ─── Icônes ──────────────────────────────────────────────────────────────── */

function IconColis() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16.5 9.4l-9-5.19M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  );
}

function IconTaxi() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 17H3a2 2 0 01-2-2V9a2 2 0 012-2h11l4 4v4a2 2 0 01-2 2h-1" />
      <path d="M14 17H9" />
      <circle cx="7.5" cy="17.5" r="2.5" />
      <circle cx="16.5" cy="17.5" r="2.5" />
      <polyline points="5 9 5 5 13 5 16 9" />
    </svg>
  );
}

function IconPharma() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10.5 20H4a2 2 0 01-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 011.66.9l.82 1.2a2 2 0 001.66.9H20a2 2 0 012 2v3" />
      <circle cx="18" cy="18" r="4" />
      <line x1="18" y1="16" x2="18" y2="20" />
      <line x1="16" y1="18" x2="20" y2="18" />
    </svg>
  );
}

function IconMarche() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 01-8 0" />
    </svg>
  );
}

function IconFood() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 8h1a4 4 0 010 8h-1" />
      <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" />
      <line x1="6" y1="1" x2="6" y2="4" />
      <line x1="10" y1="1" x2="10" y2="4" />
      <line x1="14" y1="1" x2="14" y2="4" />
    </svg>
  );
}

function IconGlobe() {
  return (
    <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
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

function IconInfo() {
  return (
    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}

/* ─── Page ────────────────────────────────────────────────────────────────── */

export default function TarifsPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="bg-creme px-4 pt-12 pb-10 sm:pt-16 sm:pb-12">
        <div className="max-w-5xl mx-auto">
          <nav aria-label="Fil d'Ariane" className="mb-8 text-sm text-gris-texte">
            <Link href="/" className="hover:text-rouge transition-colors">Accueil</Link>
            <span className="mx-2" aria-hidden="true">›</span>
            <span className="text-noir font-medium" aria-current="page">Tarifs</span>
          </nav>

          <p className="text-rouge text-xs font-semibold uppercase tracking-widest mb-3">
            Grille tarifaire
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-noir leading-tight mb-4">
            Des prix clairs,<br />sans mauvaise surprise.
          </h1>
          <p className="text-gris-texte text-lg leading-relaxed max-w-xl mb-6">
            Retrouvez ci-dessous les tarifs indicatifs pour chacun de nos services.
            Votre devis exact est gratuit et disponible en quelques minutes sur WhatsApp.
          </p>

          {/* Bandeau avertissement */}
          <div className="inline-flex items-center gap-2.5 bg-or/15 text-noir border border-or/30 rounded-2xl px-5 py-3 text-sm font-semibold">
            <IconInfo />
            Tarifs indicatifs — devis exact sur demande, sans engagement
          </div>
        </div>
      </section>

      {/* ── Sections par service ──────────────────────────────────────────── */}
      <section className="bg-white px-4 py-14 sm:py-18">
        <div className="max-w-5xl mx-auto space-y-10">
          {TARIFS.map((service) => (
            <article
              key={service.slug}
              id={service.slug}
              className="rounded-3xl border border-border overflow-hidden scroll-mt-24"
            >

              {/* En-tête de la carte */}
              <div className={`${service.accentBg} border-b border-border px-6 py-5 flex items-center gap-4`}>
                <div className={`w-10 h-10 rounded-xl ${service.accentBadge} flex items-center justify-center shrink-0`}>
                  <div className="w-5 h-5">{service.icon}</div>
                </div>
                <div>
                  <h2 className={`font-heading text-lg font-bold ${service.accentText}`}>
                    {service.name}
                  </h2>
                  <p className="text-gris-texte text-xs">{service.tagline}</p>
                </div>
                <span className={`ml-auto text-xs font-semibold px-3 py-1 rounded-full border ${service.accentBadge} border-current/20 whitespace-nowrap`}>
                  Indicatif
                </span>
              </div>

              {/* Lignes de tarif */}
              <div className="divide-y divide-border">
                {service.rows.map((row, i) => (
                  <div
                    key={i}
                    className="flex items-start justify-between gap-4 px-6 py-4 bg-white hover:bg-creme/40 transition-colors"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-noir leading-snug">{row.label}</p>
                      {row.note && (
                        <p className="text-xs text-gris-texte mt-0.5 leading-snug">{row.note}</p>
                      )}
                    </div>
                    <span className={`text-sm font-bold shrink-0 ${service.accentText}`}>
                      {row.price}
                    </span>
                  </div>
                ))}
              </div>

              {/* Note de bas de carte */}
              {service.footer && (
                <div className="bg-creme/60 border-t border-border px-6 py-3 flex items-start gap-2">
                  <span className="text-gris-texte mt-0.5"><IconInfo /></span>
                  <p className="text-xs text-gris-texte leading-relaxed">{service.footer}</p>
                </div>
              )}

              {/* CTA de commande directe */}
              <div className="border-t border-border px-6 py-4">
                <WhatsAppLink
                  href={getWhatsAppUrl(SERVICE_WHATSAPP_MESSAGES[service.slug])}
                  service={service.slug}
                  location="tarifs_card"
                  className="inline-flex items-center gap-2 bg-whatsapp text-white font-semibold px-5 py-2.5 rounded-full text-sm hover:opacity-90 active:scale-95 transition-all"
                >
                  <IconWhatsApp />
                  Commander {service.name} sur WhatsApp
                </WhatsAppLink>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Expédition internationale & Diaspora ─────────────────────────── */}
      <section className="bg-creme px-4 py-14 sm:py-18 border-t border-border" aria-labelledby="international-heading">
        <div className="max-w-5xl mx-auto">

          {/* En-tête */}
          <div className="flex flex-col sm:flex-row sm:items-end gap-4 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-noir text-creme flex items-center justify-center shrink-0">
                  <IconGlobe />
                </div>
                <p className="text-rouge text-xs font-semibold uppercase tracking-widest">
                  Expédition internationale · Diaspora
                </p>
              </div>
              <h2 id="international-heading" className="font-heading text-3xl sm:text-4xl font-bold text-noir leading-tight">
                Tarifs d&apos;envoi vers l&apos;étranger.
              </h2>
            </div>
            <div className="sm:ml-auto">
              <span className="inline-flex items-center gap-2 bg-or/15 border border-or/30 text-noir text-xs font-semibold px-4 py-2 rounded-full">
                <IconInfo />
                Prix au kilogramme · indicatifs
              </span>
            </div>
          </div>

          {/* Grille des régions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {REGIONS_INTERNATIONAL.map((region) => (
              <article
                key={region.name}
                className="rounded-3xl border border-border overflow-hidden bg-white flex flex-col"
              >
                {/* En-tête région */}
                <div className={`px-6 py-4 ${region.accentBg} border-b border-border flex items-center justify-between gap-3`}>
                  <h3 className="font-heading text-lg font-bold text-noir">{region.name}</h3>
                  <span className={`text-xs font-semibold ${region.accentText}`}>{region.badge}</span>
                </div>
                {/* Lignes destinations */}
                <div className="divide-y divide-border flex-1">
                  {region.rows.map((row) => (
                    <div
                      key={row.label}
                      className="flex items-center justify-between gap-3 px-6 py-3"
                    >
                      <span className="text-sm text-noir">{row.label}</span>
                      <span
                        className={`text-sm font-bold shrink-0 text-right ${row.isContact ? "text-gris-texte text-xs" : region.accentText}`}
                      >
                        {row.price}
                      </span>
                    </div>
                  ))}
                </div>
                {/* Délai région */}
                <div className="px-6 py-3 bg-creme/60 border-t border-border">
                  <p className="text-xs text-gris-texte font-medium">{region.delai}</p>
                </div>
              </article>
            ))}
          </div>

          {/* Mention destinations non listées */}
          <div className="bg-rouge/8 border border-rouge/20 rounded-2xl px-5 py-4 flex items-start gap-3 mb-6">
            <span className="text-rouge mt-0.5"><IconInfo /></span>
            <p className="text-sm text-noir leading-relaxed">
              <strong>Autre destination non listée</strong> (Canada, États-Unis, etc.) : contactez
              notre service client pour un devis.
            </p>
          </div>

          {/* Notes international */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-white rounded-2xl border border-border px-5 py-4 flex items-start gap-3">
              <span className="text-gris-texte mt-0.5"><IconInfo /></span>
              <div>
                <p className="text-sm font-semibold text-noir mb-0.5">Poids minimum</p>
                <p className="text-sm text-gris-texte">{POIDS_MIN_INTERNATIONAL} par expédition internationale</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-border px-5 py-4 flex items-start gap-3">
              <span className="text-gris-texte mt-0.5"><IconInfo /></span>
              <div>
                <p className="text-sm font-semibold text-noir mb-0.5">Emballage renforcé</p>
                <p className="text-sm text-gris-texte">Forfait {FRAIS_EMBALLAGE_INTERNATIONAL} pour les expéditions internationales</p>
              </div>
            </div>
          </div>

          {/* Offre Diaspora */}
          <div className="bg-noir rounded-3xl p-7 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="flex-1">
                <p className="text-or text-xs font-semibold uppercase tracking-widest mb-2">
                  Offre spéciale diaspora
                </p>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-creme mb-3 leading-snug">
                  Commandez depuis l&apos;étranger pour vos proches au Bénin.
                </h3>
                <ul className="space-y-1.5">
                  {[
                    "Achats au marché sur liste WhatsApp",
                    "Livraison de repas et cadeaux",
                    "Médicaments sur ordonnance photo",
                    "Paiement par Mobile Money ou virement",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-creme/70 text-sm">
                      <span className="w-1 h-1 rounded-full bg-or shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="shrink-0">
                <Link
                  href="/diaspora"
                  className="inline-flex items-center gap-2 bg-or text-noir font-bold px-6 py-3.5 rounded-full text-sm hover:opacity-90 active:scale-95 transition-all"
                >
                  Voir l&apos;espace diaspora →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Rappel indicatif + CTA WhatsApp ──────────────────────────────── */}
      <section className="bg-white px-4 py-14 sm:py-16 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-or/15 border border-or/30 text-noir rounded-full px-5 py-2.5 text-sm font-semibold mb-7">
            <IconInfo />
            Tarifs indicatifs — devis exact sur demande, sans engagement
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-noir mb-3">
            Besoin d&apos;un tarif précis ?
          </h2>
          <p className="text-gris-texte text-base mb-8 max-w-md mx-auto leading-relaxed">
            Décrivez votre besoin sur WhatsApp — nous vous répondons avec un devis
            exact et sans frais cachés en moins de 5 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <WhatsAppLink
              href={getWhatsAppUrl(
                "Bonjour Top Colis Bénin, je souhaite obtenir un devis précis pour l'un de vos services. Pouvez-vous m'aider ?"
              )}
              service="general"
              location="tarifs_bottom"
              className="inline-flex items-center justify-center gap-2.5 bg-whatsapp text-white font-bold px-7 py-4 rounded-full text-base hover:opacity-90 active:scale-95 transition-all shadow-sm"
            >
              <IconWhatsApp />
              Demander un devis sur WhatsApp
            </WhatsAppLink>
            <Link
              href="/devis"
              className="inline-flex items-center justify-center border-2 border-noir text-noir font-semibold px-7 py-4 rounded-full text-base hover:bg-noir hover:text-creme active:scale-95 transition-all"
            >
              Formulaire de devis colis
            </Link>
          </div>
          <p className="mt-4 text-gris-texte text-xs">
            Réponse en moins de 5 min · 7j/7 · Contact 24h/24
          </p>
        </div>
      </section>
    </>
  );
}
