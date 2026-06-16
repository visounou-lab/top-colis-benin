import type { Metadata } from "next";
import ServicePageTemplate from "@/components/service/ServicePageTemplate";
import type { Prestation } from "@/components/service/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Service Marché — Top Colis Bénin",
  description:
    "Courses dans n'importe quel marché, poissonnerie ou magasin au Bénin. Offre spéciale diaspora : envoyez votre liste, nous achetons au pays et expédions vers votre pays de résidence.",
};

function IconMarche() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 01-8 0" />
    </svg>
  );
}

const prestations: Prestation[] = [
  {
    title: "Courses dans n'importe quel marché",
    description:
      "Dantokpa, Missebo, marché de Calavi, Ouando, Tokpa — envoyez votre liste et nous faisons vos emplettes dans le marché de votre choix, au meilleur prix du moment.",
  },
  {
    title: "Poissonnerie et magasin",
    description:
      "Poisson frais, viande, produits d'épicerie, condiments — nous sélectionnons vos articles avec soin selon vos instructions et vos préférences.",
  },
  {
    title: "Livraison à domicile",
    description:
      "Vos courses sont livrées directement chez vous, soigneusement conditionnées. Vous payez à la réception et n'avancez rien.",
  },
  {
    title: "Offre diaspora — liste, achat et expédition",
    description:
      "Depuis l'étranger, envoyez votre liste sur WhatsApp. Nous achetons au Bénin et expédions vers votre pays de résidence — sauces, épices, ingrédients introuvables ailleurs.",
    highlights: ["Europe", "Canada", "USA", "Afrique"],
  },
];

const WHATSAPP_MESSAGE =
  "Bonjour Top Colis Bénin, Je souhaite passer une commande de courses.\n- Marché ou magasin souhaité :\n- Adresse de livraison :\n- Voici ma liste :";

export default function MarchePage() {
  return (
    <ServicePageTemplate
      name="Marché"
      tagline="Le marché vient à vous, ici au Bénin ou depuis l'étranger."
      description="Restez chez vous pendant que nous faisons vos courses dans n'importe quel marché, poissonnerie ou magasin du Bénin. Et pour la diaspora — envoyez votre liste depuis l'étranger : nous achetons au pays et expédions directement vers votre pays de résidence."
      icon={<IconMarche />}
      prestations={prestations}
      whatsappMessage={WHATSAPP_MESSAGE}
    />
  );
}
