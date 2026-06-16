import type { Metadata } from "next";
import ServicePageTemplate from "@/components/service/ServicePageTemplate";
import type { Prestation } from "@/components/service/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Service Food — Top Colis Bénin",
  description:
    "Livraison de repas à moindre coût entre Calavi, Cotonou et Porto-Novo. Charcuteries de Porto-Novo, street food populaire, saveurs béninoises et africaines.",
};

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

const prestations: Prestation[] = [
  {
    title: "Repas à moindre coût",
    description:
      "Des plats savoureux à prix accessibles, livrés entre Abomey-Calavi, Cotonou et Porto-Novo. Bon, frais et abordable — pour un repas quotidien ou une commande en famille.",
    highlights: ["Abomey-Calavi", "Cotonou", "Porto-Novo"],
  },
  {
    title: "Charcuteries de Porto-Novo",
    description:
      "Les charcuteries artisanales réputées de Porto-Novo livrées directement chez vous, même si vous habitez à Cotonou ou à Calavi. Une spécialité locale incontournable.",
  },
  {
    title: "Street food populaire",
    description:
      "Abobo, riz sauce, igname pilée, brochettes, beignets — les spécialités de rue que vous aimez, livrées sans détour depuis vos stands et restaurants préférés.",
  },
  {
    title: "Saveurs béninoises et africaines",
    description:
      "Cuisine du Bénin et d'Afrique de l'Ouest concoctée par des restaurateurs locaux sélectionnés. Du comfort food authentique, livré chaud jusqu'à votre porte.",
  },
];

const WHATSAPP_MESSAGE =
  "Bonjour Top Colis Bénin, Je souhaite commander de la nourriture.\n- Adresse de livraison :\n- Quels plats sont disponibles aujourd'hui ?";

export default function FoodPage() {
  return (
    <ServicePageTemplate
      name="Food"
      tagline="Vos saveurs béninoises et africaines livrées, à prix doux."
      description="Street food, charcuteries de Porto-Novo, plats africains et béninois — Top Colis Bénin vous apporte les saveurs de votre quartier ou d'ailleurs, à petits prix, entre Abomey-Calavi, Cotonou et Porto-Novo."
      icon={<IconFood />}
      prestations={prestations}
      whatsappMessage={WHATSAPP_MESSAGE}
    />
  );
}
