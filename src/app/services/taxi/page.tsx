import type { Metadata } from "next";
import ServicePageTemplate from "@/components/service/ServicePageTemplate";
import type { Prestation } from "@/components/service/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Service Taxi — Top Colis Bénin",
  description:
    "Zem ou voiture sur appel à tarif unique. Réservation depuis l'étranger, prise en charge à l'aéroport et déplacements pendant tout votre séjour au Bénin.",
};

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

const prestations: Prestation[] = [
  {
    title: "Zem ou voiture sur appel",
    description:
      "Transport disponible à tout moment, à tarif unique et prévisible. Choisissez le zem pour les déplacements rapides ou la voiture pour plus de confort — sans négociation, sans mauvaise surprise.",
  },
  {
    title: "Tarif unique — aucune négociation",
    description:
      "Le prix est fixé avant le départ. Vous savez exactement ce que vous payez, que vous soyez un habitué ou un touriste de passage.",
  },
  {
    title: "Réservation depuis l'étranger",
    description:
      "Organisez le transport de vos proches depuis n'importe où dans le monde. Envoyez votre demande sur WhatsApp et nous confirmons l'heure et le lieu de prise en charge.",
  },
  {
    title: "Prise en charge à l'aéroport",
    description:
      "Arrivée à Cotonou ? Votre chauffeur vous attend à la sortie de l'aéroport Cardinal Bernardin Gantin pour un transfert direct vers votre destination.",
  },
  {
    title: "Déplacements pendant tout le séjour",
    description:
      "Visites en famille, rendez-vous administratifs, sorties shopping — nous assurons votre mobilité sur l'ensemble de la durée de votre séjour au Bénin.",
  },
];

const WHATSAPP_MESSAGE =
  "Bonjour Top Colis Bénin, Je souhaite réserver un taxi ou un zem. Voici ma demande :\n- Heure souhaitée :\n- Lieu de départ :\n- Destination :";

export default function TaxiPage() {
  return (
    <ServicePageTemplate
      name="Taxi"
      tagline="Zem ou voiture, à votre porte en quelques minutes."
      description="Besoin d'un transport rapide ou d'une prise en charge depuis l'aéroport ? Top Colis Bénin met à votre disposition des zems et des voitures à tarif unique, réservables sur WhatsApp — depuis le Bénin ou depuis l'étranger."
      icon={<IconTaxi />}
      prestations={prestations}
      whatsappMessage={WHATSAPP_MESSAGE}
    />
  );
}
