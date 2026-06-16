import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import ServicesGrid from "@/components/home/ServicesGrid";
import HowItWorks from "@/components/home/HowItWorks";
import DiasporaBanner from "@/components/home/DiasporaBanner";
import AgencesSection from "@/components/home/AgencesSection";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Top Colis Bénin — Livraison de colis, taxi, pharmacie, marché et repas",
  description:
    "Top Colis Bénin livre vos colis, taxis, médicaments, courses au marché et repas à Cotonou, Abomey-Calavi et Porto-Novo. Commande simple sur WhatsApp, disponible 24h/24, avec option d'envoi vers la diaspora.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesGrid />
      <HowItWorks />
      <DiasporaBanner />
      <AgencesSection />
      <CTASection />
    </>
  );
}
