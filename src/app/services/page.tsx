import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Nos Services — Top Colis Bénin",
  description:
    "Livraison de colis, taxi, médicaments, courses au marché et food — Top Colis Bénin couvre tous vos besoins au quotidien entre Calavi, Cotonou et Porto-Novo.",
};

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

function IconArrow() {
  return (
    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

/* ─── Données des services ────────────────────────────────────────────────── */

type ServiceCard = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: ReactNode;
  iconBg: string;
  iconColor: string;
};

const services: ServiceCard[] = [
  {
    slug: "colis",
    name: "Colis",
    tagline: "Votre colis livré partout au Bénin et dans le monde.",
    description:
      "Envoi et réception, achats, ramassage, expédition internationale et livraisons groupées Calavi-Cotonou-Porto-Novo. Livraison RD Congo dès 72h.",
    icon: <IconColis />,
    iconBg: "bg-rouge/10",
    iconColor: "text-rouge",
  },
  {
    slug: "taxi",
    name: "Taxi",
    tagline: "Zem ou voiture, à votre porte en quelques minutes.",
    description:
      "Transport sur appel à tarif unique, réservation depuis l'étranger, prise en charge à l'aéroport et déplacements pendant tout votre séjour.",
    icon: <IconTaxi />,
    iconBg: "bg-or/15",
    iconColor: "text-or",
  },
  {
    slug: "pharma",
    name: "Pharma",
    tagline: "Vos médicaments en urgence, livrés sans que vous bougez.",
    description:
      "Photo de l'ordonnance sur WhatsApp, validation du prix, achat et livraison express à domicile ou à l'hôpital entre Calavi et Cotonou.",
    icon: <IconPharma />,
    iconBg: "bg-rouge/10",
    iconColor: "text-rouge",
  },
  {
    slug: "marche",
    name: "Marché",
    tagline: "Le marché vient à vous, ici ou depuis l'étranger.",
    description:
      "Courses dans n'importe quel marché, poissonnerie ou magasin. Offre diaspora : envoyez votre liste, on achète et on expédie vers votre pays.",
    icon: <IconMarche />,
    iconBg: "bg-or/15",
    iconColor: "text-or",
  },
  {
    slug: "food",
    name: "Food",
    tagline: "Vos saveurs béninoises et africaines livrées, à prix doux.",
    description:
      "Street food populaire, charcuteries de Porto-Novo et plats africains livrés entre Abomey-Calavi, Cotonou et Porto-Novo à moindre coût.",
    icon: <IconFood />,
    iconBg: "bg-rouge/10",
    iconColor: "text-rouge",
  },
];

/* ─── Composant carte service ─────────────────────────────────────────────── */

function ServiceCard({ service }: { service: ServiceCard }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col gap-5 bg-creme rounded-3xl border border-border p-7 hover:border-rouge/30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
    >
      {/* Icône */}
      <div
        className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${service.iconBg}`}
      >
        <div className={`w-6 h-6 ${service.iconColor}`}>{service.icon}</div>
      </div>

      {/* Contenu */}
      <div className="flex-1">
        <h2 className="font-heading font-bold text-noir text-xl mb-1 group-hover:text-rouge transition-colors">
          {service.name}
        </h2>
        <p className="text-gris-texte text-sm font-medium mb-3 leading-snug">
          {service.tagline}
        </p>
        <p className="text-gris-texte text-sm leading-relaxed">
          {service.description}
        </p>
      </div>

      {/* Lien */}
      <div className="flex items-center gap-1.5 text-rouge text-sm font-semibold mt-auto">
        Découvrir ce service
        <IconArrow />
      </div>
    </Link>
  );
}

/* ─── Page ────────────────────────────────────────────────────────────────── */

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-creme px-4 pt-12 pb-14 sm:pt-16 sm:pb-18">
        <div className="max-w-5xl mx-auto">
          {/* Fil d'Ariane */}
          <nav aria-label="Fil d'Ariane" className="mb-8 text-sm text-gris-texte">
            <Link href="/" className="hover:text-rouge transition-colors">
              Accueil
            </Link>
            <span className="mx-2" aria-hidden="true">›</span>
            <span className="text-noir font-medium" aria-current="page">Services</span>
          </nav>

          <p className="text-rouge text-xs font-semibold uppercase tracking-widest mb-3">
            5 univers
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-noir leading-tight mb-4">
            Tous nos services
          </h1>
          <p className="text-gris-texte text-lg sm:text-xl leading-relaxed max-w-xl">
            De la livraison de colis au repas chaud, en passant par vos médicaments
            et vos courses — Top Colis Bénin couvre tous vos besoins du quotidien.
          </p>
        </div>
      </section>

      {/* Grille des services */}
      <section className="bg-white px-4 py-14 sm:py-18" aria-labelledby="services-grid-heading">
        <div className="max-w-5xl mx-auto">
          <h2 id="services-grid-heading" className="sr-only">Liste des services</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <div
                key={service.slug}
                className={
                  /* Centre le 5e élément sur sm (2 col) */
                  i === 4
                    ? "sm:col-span-2 lg:col-span-1 sm:max-w-sm sm:mx-auto sm:w-full lg:max-w-none lg:mx-0"
                    : ""
                }
              >
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bandeau CTA */}
      <section className="bg-creme px-4 py-12 sm:py-16 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-noir mb-3">
            Pas sûr du bon service ?
          </h2>
          <p className="text-gris-texte text-base mb-7 max-w-md mx-auto">
            Décrivez votre besoin sur WhatsApp — on vous oriente vers la bonne
            option et on s&apos;occupe du reste.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-whatsapp text-white font-semibold px-7 py-3.5 rounded-full text-sm hover:opacity-90 active:scale-95 transition-all"
          >
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Nous écrire sur WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
