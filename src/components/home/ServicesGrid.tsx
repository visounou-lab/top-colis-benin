import Link from "next/link";
import type { ReactNode } from "react";

type Service = {
  slug: string;
  href: string;
  title: string;
  description: string;
  iconBg: string;
  iconColor: string;
  icon: ReactNode;
};

const services: Service[] = [
  {
    slug: "colis",
    href: "/services#colis",
    title: "Colis",
    description: "Envoi et réception entre villes ou vers l'étranger.",
    iconBg: "bg-rouge/10",
    iconColor: "text-rouge",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16.5 9.4l-9-5.19M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    slug: "taxi",
    href: "/services#taxi",
    title: "Taxi",
    description: "Transport sécurisé de personnes et de biens.",
    iconBg: "bg-or/15",
    iconColor: "text-or",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 17H3a2 2 0 01-2-2V9a2 2 0 012-2h11l4 4v4a2 2 0 01-2 2h-1" />
        <path d="M14 17H9" />
        <circle cx="7.5" cy="17.5" r="2.5" />
        <circle cx="16.5" cy="17.5" r="2.5" />
        <polyline points="5 9 5 5 13 5 16 9" />
      </svg>
    ),
  },
  {
    slug: "pharma",
    href: "/services#pharma",
    title: "Pharma",
    description: "Vos médicaments livrés depuis la pharmacie.",
    iconBg: "bg-rouge/10",
    iconColor: "text-rouge",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M10.5 20H4a2 2 0 01-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 011.66.9l.82 1.2a2 2 0 001.66.9H20a2 2 0 012 2v3" />
        <circle cx="18" cy="18" r="4" />
        <line x1="18" y1="16" x2="18" y2="20" />
        <line x1="16" y1="18" x2="20" y2="18" />
      </svg>
    ),
  },
  {
    slug: "marche",
    href: "/services#marche",
    title: "Marché",
    description: "Vos courses au marché sans vous déplacer.",
    iconBg: "bg-or/15",
    iconColor: "text-or",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 01-8 0" />
      </svg>
    ),
  },
  {
    slug: "food",
    href: "/services#food",
    title: "Food",
    description: "Vos plats préférés livrés chauds à domicile.",
    iconBg: "bg-rouge/10",
    iconColor: "text-rouge",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 8h1a4 4 0 010 8h-1" />
        <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
  },
];

export default function ServicesGrid() {
  return (
    <section className="bg-white px-4 py-16 sm:py-20" aria-labelledby="services-heading">
      <div className="max-w-6xl mx-auto">

        {/* En-tête de section */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-rouge text-xs font-semibold uppercase tracking-widest mb-3">
            Nos univers
          </p>
          <h2 id="services-heading" className="font-heading text-3xl sm:text-4xl font-bold text-noir">
            Une app, tous vos besoins.
          </h2>
        </div>

        {/* Grille des services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {services.map((service, i) => (
            <Link
              key={service.slug}
              href={service.href}
              className={[
                "group flex flex-col gap-4 p-6 rounded-3xl border border-border bg-creme",
                "hover:border-rouge/30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200",
                /* Centre le 5e élément sur sm (grille 2 col) */
                i === 4 ? "sm:col-span-2 lg:col-span-1 sm:max-w-sm sm:mx-auto sm:w-full lg:max-w-none lg:mx-0" : "",
              ].join(" ")}
              aria-label={`Service ${service.title} — ${service.description}`}
            >
              {/* Icône */}
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${service.iconBg}`}>
                <div className={`w-6 h-6 ${service.iconColor}`}>{service.icon}</div>
              </div>

              {/* Contenu */}
              <div>
                <h3 className="font-heading font-bold text-noir text-lg mb-1 group-hover:text-rouge transition-colors">
                  {service.title}
                </h3>
                <p className="text-gris-texte text-sm leading-snug">
                  {service.description}
                </p>
              </div>

              {/* Flèche */}
              <div className="mt-auto">
                <span className="text-xs font-semibold text-rouge opacity-0 group-hover:opacity-100 transition-opacity">
                  En savoir plus →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
