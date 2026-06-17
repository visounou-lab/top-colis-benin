import type { Metadata } from "next";
import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/constants";
import FaqAccordion, { type FaqCategory } from "@/components/faq/FaqAccordion";
import WhatsAppLink from "@/components/WhatsAppLink";

export const metadata: Metadata = {
  title: "FAQ — Questions fréquentes · Top Colis Bénin",
  description:
    "Toutes les réponses à vos questions sur Top Colis Bénin : comment commander, délais, zones de livraison, tarifs, paiement et plus encore.",
};

const FAQ_CATEGORIES: FaqCategory[] = [
  {
    title: "Passer commande",
    items: [
      {
        question: "Comment passer une commande ?",
        answer:
          "Il suffit d'envoyer un message WhatsApp au +229 01 67 68 78 70 en décrivant votre besoin (type de service, adresse, heure souhaitée…). Notre équipe vous répond en moins de 5 minutes et prend en charge votre demande.",
      },
      {
        question: "Faut-il créer un compte ou s'inscrire ?",
        answer:
          "Non. Aucun compte n'est nécessaire. Un simple message WhatsApp suffit pour passer commande — aucune application à télécharger.",
      },
      {
        question: "Puis-je passer commande depuis l'étranger (diaspora) ?",
        answer:
          "Oui, absolument. Nous travaillons beaucoup avec la diaspora béninoise. Depuis la France, la Belgique, le Canada ou ailleurs, vous pouvez commander pour vos proches au Bénin via WhatsApp, que ce soit pour un colis, des courses ou un repas.",
      },
      {
        question: "Quels sont vos horaires ?",
        answer:
          "Nos agences sont ouvertes tous les jours de 8h à 20h. Le contact client WhatsApp est disponible 24h/24, 7j/7 — même les jours fériés.",
      },
    ],
  },
  {
    title: "Livraison",
    items: [
      {
        question: "Quelles zones couvrez-vous ?",
        answer:
          "Nous livrons principalement à Abomey-Calavi, Cotonou et Porto-Novo et leurs environs. Pour les envois de colis, nous couvrons également d'autres villes du Bénin ainsi que l'international (Afrique, Europe). Contactez-nous pour confirmer la disponibilité sur votre zone.",
      },
      {
        question: "Quel est le délai de livraison ?",
        answer:
          "Pour les courses, repas et médicaments, la livraison est généralement effectuée dans la même journée, souvent en moins de 2 heures. Pour les colis locaux, le délai varie selon la destination — nous vous communiquons une estimation au moment de la commande.",
      },
      {
        question: "Livrez-vous à domicile ?",
        answer:
          "Oui. La livraison à domicile est disponible pour tous nos services. Précisez simplement votre adresse lors de votre commande WhatsApp.",
      },
    ],
  },
  {
    title: "Tarifs & paiement",
    items: [
      {
        question: "Comment connaître le prix de ma commande ?",
        answer:
          "Consultez notre page Tarifs pour les grilles indicatives par service. Pour un devis précis (poids du colis, distance, quantité), envoyez votre demande sur WhatsApp — nous vous répondons avec un tarif exact en quelques minutes.",
      },
      {
        question: "Quand est-ce que je paie ?",
        answer:
          "Le paiement s'effectue à la livraison ou lors du dépôt en agence, après que vous avez reçu votre commande et que vous êtes satisfait.",
      },
      {
        question: "Quels modes de paiement acceptez-vous ?",
        answer:
          "Nous acceptons les espèces ainsi que le Mobile Money (MTN MoMo, Moov Money). D'autres modes peuvent être arrangés sur demande.",
      },
    ],
  },
  {
    title: "Colis & services",
    items: [
      {
        question: "Y a-t-il un poids ou une taille maximum pour les colis ?",
        answer:
          "Il n'y a pas de limite fixe — nous gérons des colis de toutes tailles. Précisez le poids et les dimensions approximatifs dans votre message WhatsApp et nous vous confirmons la faisabilité ainsi que le tarif.",
      },
      {
        question: "Que faire si mon colis est endommagé ou perdu ?",
        answer:
          "Contactez-nous immédiatement sur WhatsApp avec une photo et le numéro de votre commande. Nous traitons chaque réclamation en priorité et cherchons une solution rapide.",
      },
      {
        question: "Proposez-vous la livraison de médicaments sur ordonnance ?",
        answer:
          "Oui. Envoyez simplement la photo de votre ordonnance via WhatsApp. Nous nous chargeons de récupérer les médicaments en pharmacie et de les livrer à l'adresse souhaitée.",
      },
      {
        question: "Peut-on commander plusieurs services en même temps ?",
        answer:
          "Oui. Par exemple, vous pouvez demander des courses au marché et la livraison d'un colis dans le même message. Notre équipe coordonne tout.",
      },
    ],
  },
];

function IconWhatsApp() {
  return (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function FaqPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="bg-creme px-4 pt-10 pb-14 sm:pt-14 sm:pb-18">
        <div className="max-w-3xl mx-auto">

          {/* Fil d'Ariane */}
          <nav aria-label="Fil d'Ariane" className="mb-8 text-sm text-gris-texte">
            <Link href="/" className="hover:text-rouge transition-colors">Accueil</Link>
            <span className="mx-2" aria-hidden="true">›</span>
            <span className="text-noir font-medium" aria-current="page">FAQ</span>
          </nav>

          <p className="text-rouge text-xs font-semibold uppercase tracking-widest mb-3">
            Questions fréquentes
          </p>
          <h1 className="font-heading text-3xl sm:text-5xl font-bold text-noir leading-tight mb-4">
            On répond à tout.
          </h1>
          <p className="text-gris-texte text-base sm:text-lg leading-relaxed max-w-xl">
            Retrouvez ici les réponses aux questions les plus courantes.
            Vous ne trouvez pas ce que vous cherchez ?{" "}
            <WhatsAppLink
              href={WHATSAPP_URL}
              service="general"
              location="faq_hero_inline"
              className="font-semibold text-rouge hover:underline"
            >
              Écrivez-nous sur WhatsApp
            </WhatsAppLink>
            , on répond en moins de 5 minutes.
          </p>
        </div>
      </section>

      {/* ── Accordion ─────────────────────────────────────────────────────── */}
      <section className="bg-white px-4 py-14 sm:py-18">
        <div className="max-w-3xl mx-auto">
          <FaqAccordion categories={FAQ_CATEGORIES} />
        </div>
      </section>

      {/* ── CTA final ─────────────────────────────────────────────────────── */}
      <section className="bg-noir px-4 py-14 sm:py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-creme mb-3">
            Votre question n&apos;est pas là ?
          </h2>
          <p className="text-gris-texte text-sm sm:text-base mb-7">
            Notre équipe est disponible 24h/24 sur WhatsApp pour répondre
            à toutes vos demandes.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <WhatsAppLink
              href={WHATSAPP_URL}
              service="general"
              location="faq_cta_final"
              className="inline-flex items-center justify-center gap-2.5 bg-whatsapp text-white font-semibold px-7 py-3.5 rounded-full text-sm hover:opacity-90 active:scale-95 transition-all"
            >
              <IconWhatsApp />
              Poser ma question sur WhatsApp
            </WhatsAppLink>
            <Link
              href="/devis"
              className="inline-flex items-center justify-center border-2 border-white/20 text-creme font-semibold px-7 py-3.5 rounded-full text-sm hover:border-white/50 transition-colors"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
