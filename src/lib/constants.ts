export const WHATSAPP_NUMBER = "2290167687870";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

/** Génère un lien WhatsApp avec message pré-rempli (optionnel) */
export const getWhatsAppUrl = (message?: string) =>
  message
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    : WHATSAPP_URL;

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Diaspora", href: "/diaspora" },
  { label: "Agences", href: "/agences" },
  { label: "Tarifs", href: "/tarifs" },
];

export const AGENCIES = [
  {
    city: "Abomey-Calavi",
    area: "Kpota",
    detail: "À 200 m du carrefour Kpota en direction de l'église Bakhita",
  },
  {
    city: "Cotonou",
    area: "Marché Missèbo",
    detail: "En face de la banque BOA",
  },
  {
    city: "Porto-Novo",
    area: "Foun-Foun Gbego",
    detail: "Non loin de l'École Normale Supérieure",
  },
];
