import type { Metadata } from "next";
import ServicePageTemplate from "@/components/service/ServicePageTemplate";
import type { Prestation } from "@/components/service/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Service Colis — TopColis Bénin",
  description:
    "Envoi, livraison, ramassage et expédition internationale de colis au Bénin. Livraison RD Congo dès 72h. Livraisons groupées Calavi-Cotonou-Porto-Novo.",
};

/* ─── Icône du service ────────────────────────────────────────────────────── */

function IconColis() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16.5 9.4l-9-5.19M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  );
}

/* ─── Contenu de la page ──────────────────────────────────────────────────── */

const prestations: Prestation[] = [
  {
    title: "Livraison et envoi de colis",
    description:
      "Nous collectons votre colis à domicile ou en agence et le livrons à destination — en ville ou entre les villes du Bénin. Suivi confirmé sur WhatsApp.",
  },
  {
    title: "Achats et courses",
    description:
      "Commandez sans vous déplacer. Nous effectuons vos achats au marché, en boutique ou en supermarché et vous les livrons directement chez vous.",
  },
  {
    title: "Ramassage et stockage",
    description:
      "Besoin de récupérer plusieurs articles avant expédition ? Nous gérons le ramassage et la mise en stock temporaire dans nos agences.",
  },
  {
    title: "Expédition internationale",
    description:
      "Envois sécurisés vers l'Europe, le Canada, les États-Unis et toute l'Afrique. Tarifs compétitifs, emballage soigné, suivi garanti.",
  },
  {
    title: "Livraison RD Congo dès 72h",
    description:
      "Service express vers la République Démocratique du Congo. Délai à partir de 72 heures pour les principales villes desservies.",
    highlights: ["Lubumbashi", "Kinshasa", "Goma", "Bukavu"],
  },
  {
    title: "Livraisons groupées",
    description:
      "Circuit Abomey-Calavi — Cotonou — Porto-Novo quatre jours par semaine pour des tarifs réduits sur les envois réguliers.",
    highlights: ["Mardi", "Jeudi", "Vendredi", "Samedi"],
  },
];

const WHATSAPP_MESSAGE =
  "Bonjour TopColis 👋 Je souhaite envoyer un colis. Pouvez-vous me donner un devis (destination, poids approximatif) ?";

/* ─── Page ────────────────────────────────────────────────────────────────── */

export default function ColisPage() {
  return (
    <ServicePageTemplate
      name="Colis"
      tagline="Votre colis livré rapidement, partout au Bénin et dans le monde."
      description="De la livraison locale en ville à l'expédition internationale, TopColis prend en charge votre colis de A à Z — ramassage, emballage, livraison et confirmation."
      icon={<IconColis />}
      prestations={prestations}
      whatsappMessage={WHATSAPP_MESSAGE}
    />
  );
}
