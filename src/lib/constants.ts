export const WHATSAPP_NUMBER = "229XXXXXXXX";
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
    detail: "Quartier Kpota",
  },
  {
    city: "Cotonou",
    area: "Marché Missebo",
    detail: "Face BOA",
  },
  {
    city: "Porto-Novo",
    area: "Après l'ENS",
    detail: "À proximité de l'ENS",
  },
];
