export const WHATSAPP_NUMBER = "2290167687870";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

/** Génère un lien WhatsApp avec message pré-rempli (optionnel) */
export const getWhatsAppUrl = (message?: string) =>
  message
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    : WHATSAPP_URL;

export const NAV_LINKS: { label: string; href: string; badge?: string }[] = [
  { label: "Services", href: "/services" },
  { label: "Diaspora", href: "/diaspora" },
  { label: "Agences", href: "/agences" },
  { label: "Tarifs", href: "/tarifs" },
  { label: "FAQ", href: "/faq" },
  { label: "Top Shopping", href: "/top-shopping", badge: "Bientôt" },
];

export const SERVICE_WHATSAPP_MESSAGES: Record<string, string> = {
  colis:
    "Bonjour Top Colis Bénin, Je souhaite envoyer un colis. Pouvez-vous me donner un devis (destination, poids approximatif) ?",
  taxi:
    "Bonjour Top Colis Bénin, Je souhaite réserver un taxi ou un zem. Voici ma demande :\n- Heure souhaitée :\n- Lieu de départ :\n- Destination :",
  pharma:
    "Bonjour Top Colis Bénin, J'ai besoin d'une livraison urgente de médicaments.\n- Adresse de livraison :\n- Je vous envoie la photo de l'ordonnance.",
  marche:
    "Bonjour Top Colis Bénin, Je souhaite passer une commande de courses.\n- Marché ou magasin souhaité :\n- Adresse de livraison :\n- Voici ma liste :",
  food:
    "Bonjour Top Colis Bénin, Je souhaite commander de la nourriture.\n- Adresse de livraison :\n- Quels plats sont disponibles aujourd'hui ?",
};

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
