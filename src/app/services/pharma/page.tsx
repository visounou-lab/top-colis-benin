import type { Metadata } from "next";
import ServicePageTemplate from "@/components/service/ServicePageTemplate";
import type { Prestation } from "@/components/service/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Service Pharma — Top Colis Bénin",
  description:
    "Achat et livraison express de médicaments en urgence à domicile ou à l'hôpital entre Calavi et Cotonou. Envoyez la photo de l'ordonnance sur WhatsApp, nous validons le prix avant d'acheter.",
};

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

const prestations: Prestation[] = [
  {
    title: "Livraison express en urgence",
    description:
      "Dès réception de votre demande, nous localisons les médicaments en pharmacie et les livrons dans les plus brefs délais. Nuits difficiles, weekend ou jour férié — nous répondons.",
  },
  {
    title: "Domicile ou hôpital",
    description:
      "Vous êtes chez vous ou un proche est hospitalisé ? Nous livrons directement à l'adresse indiquée, entre Abomey-Calavi et Cotonou.",
    highlights: ["Abomey-Calavi", "Cotonou"],
  },
  {
    title: "Sur simple photo de l'ordonnance",
    description:
      "Prenez votre ordonnance en photo et envoyez-la sur WhatsApp. Pas besoin de vous déplacer — nous gérons la lecture, l'achat et la livraison.",
  },
  {
    title: "Validation du prix avant achat",
    description:
      "Avant de procéder à tout achat, nous vous communiquons le montant exact des médicaments. Vous donnez votre accord — nous achetons. Aucune dépense sans votre confirmation.",
  },
];

const WHATSAPP_MESSAGE =
  "Bonjour Top Colis Bénin, J'ai besoin d'une livraison urgente de médicaments.\n- Adresse de livraison :\n- Je vous envoie la photo de l'ordonnance.";

export default function PharmaPage() {
  return (
    <ServicePageTemplate
      name="Pharma"
      tagline="Vos médicaments en urgence, livrés sans que vous bougez."
      description="Nuit difficile, urgence médicale, parent hospitalisé ? Envoyez simplement la photo de votre ordonnance sur WhatsApp. Nous vérifions le prix avec vous avant tout achat, puis nous livrons entre Calavi et Cotonou — à domicile ou directement à l'hôpital."
      icon={<IconPharma />}
      prestations={prestations}
      whatsappMessage={WHATSAPP_MESSAGE}
      tarifSlug="pharma"
    />
  );
}
