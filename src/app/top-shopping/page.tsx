import type { Metadata } from "next";
import Link from "next/link";
import NotifyForm from "@/components/top-shopping/NotifyForm";

export const metadata: Metadata = {
  title: "Top Shopping (bientôt) — Top Colis Bénin",
  description:
    "Top Shopping arrive bientôt : la marketplace où des vendeurs ouvrent leur boutique en ligne, où les clients commandent en toute confiance, et où Top Colis Bénin assure la livraison — au Bénin comme vers la diaspora.",
};

/* ─── Icônes ──────────────────────────────────────────────────────────────── */

function IconShop() {
  return (
    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 9l1.5-5h15L21 9" />
      <path d="M3 9a2 2 0 004 0 2 2 0 004 0 2 2 0 004 0 2 2 0 004 0" />
      <path d="M5 9v9a1 1 0 001 1h12a1 1 0 001-1V9" />
      <path d="M9 19v-5a1 1 0 011-1h4a1 1 0 011 1v5" />
    </svg>
  );
}

function IconClockSmall() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function IconStorefront() {
  return (
    <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 9l1.5-5h15L21 9v2a2 2 0 01-2 2 2 2 0 01-2-2 2 2 0 01-2 2 2 2 0 01-2-2 2 2 0 01-2 2 2 2 0 01-2-2 2 2 0 01-2 2 2 2 0 01-2-2V9z" />
      <path d="M5 13v6a1 1 0 001 1h12a1 1 0 001-1v-6" />
    </svg>
  );
}

function IconCart() {
  return (
    <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="9" cy="20" r="1.3" />
      <circle cx="18" cy="20" r="1.3" />
      <path d="M2.5 3h2l2.6 12.4a1.5 1.5 0 001.47 1.2h9.46a1.5 1.5 0 001.47-1.16L21.5 8H6" />
    </svg>
  );
}

function IconTruck() {
  return (
    <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="1.5" y="7" width="13" height="10" rx="1.2" />
      <path d="M14.5 10h3.5l3 3.5V17h-6.5z" />
      <circle cx="6" cy="19" r="1.6" />
      <circle cx="17.5" cy="19" r="1.6" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2l8 3.5v6c0 5-3.5 8.5-8 10.5-4.5-2-8-5.5-8-10.5v-6L12 2z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function IconGlobeSmall() {
  return (
    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
    </svg>
  );
}

/* ─── Données : étapes du concept ───────────────────────────────────────────── */

const ETAPES = [
  {
    icon: <IconStorefront />,
    accentBg: "bg-rouge/8",
    accentText: "text-rouge",
    title: "Le vendeur ouvre sa boutique",
    text: "Commerçants et artisans présentent leurs produits dans une boutique en ligne, prête à recevoir des commandes.",
  },
  {
    icon: <IconCart />,
    accentBg: "bg-or/8",
    accentText: "text-or",
    title: "Le client commande en confiance",
    text: "Achat sécurisé : vendeur vérifié, paiement protégé jusqu'à la réception du produit.",
  },
  {
    icon: <IconTruck />,
    accentBg: "bg-rouge/8",
    accentText: "text-rouge",
    title: "Top Colis Bénin assure la livraison",
    text: "Livraison locale au Bénin, ou expédition vers la diaspora grâce à notre service international.",
  },
];

/* ─── Page ────────────────────────────────────────────────────────────────── */

export default function TopShoppingPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="bg-creme px-4 pt-12 pb-14 sm:pt-16 sm:pb-18">
        <div className="max-w-5xl mx-auto">
          <nav aria-label="Fil d'Ariane" className="mb-8 text-sm text-gris-texte">
            <Link href="/" className="hover:text-rouge transition-colors">Accueil</Link>
            <span className="mx-2" aria-hidden="true">›</span>
            <span className="text-noir font-medium" aria-current="page">Top Shopping</span>
          </nav>

          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 bg-or/15 border border-or/30 text-noir text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <IconClockSmall />
              Bientôt disponible
            </span>

            {/* Visuel d'attente */}
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 mx-auto mb-8">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-or/40" />
              <div className="absolute inset-3 rounded-full bg-noir text-creme flex items-center justify-center">
                <IconShop />
              </div>
              <div className="absolute -bottom-1 -right-1 w-12 h-12 rounded-full bg-or text-noir flex items-center justify-center border-4 border-creme">
                <IconClockSmall />
              </div>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-noir leading-tight mb-5">
              Top Shopping arrive bientôt.
            </h1>
            <p className="text-gris-texte text-lg leading-relaxed">
              Une marketplace où des vendeurs ouvrent leur boutique en ligne, où les clients
              commandent en toute confiance, et où Top Colis Bénin s&apos;occupe de la livraison —
              au Bénin comme vers la diaspora, avec un achat toujours sécurisé.
            </p>
          </div>
        </div>
      </section>

      {/* ── Comment ça marche ────────────────────────────────────────────── */}
      <section className="bg-white px-4 py-14 sm:py-18 border-t border-border" aria-labelledby="etapes-heading">
        <div className="max-w-5xl mx-auto">
          <h2 id="etapes-heading" className="font-heading text-2xl sm:text-3xl font-bold text-noir text-center mb-10">
            Le concept en 3 étapes.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {ETAPES.map((etape, i) => (
              <div key={etape.title} className="bg-creme rounded-3xl border border-border p-6 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className={`w-11 h-11 rounded-2xl ${etape.accentBg} ${etape.accentText} flex items-center justify-center`}>
                    {etape.icon}
                  </span>
                  <span className={`font-heading text-3xl font-bold opacity-20 ${etape.accentText}`} aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-heading text-lg font-bold text-noir leading-snug">
                  {etape.title}
                </h3>
                <p className="text-gris-texte text-sm leading-relaxed">{etape.text}</p>
              </div>
            ))}
          </div>

          {/* Garanties */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <span className="inline-flex items-center gap-2 text-sm text-noir bg-creme rounded-full border border-border px-4 py-2">
              <IconShield />
              Achat sécurisé
            </span>
            <span className="inline-flex items-center gap-2 text-sm text-noir bg-creme rounded-full border border-border px-4 py-2">
              <IconGlobeSmall />
              Option expédition diaspora
            </span>
          </div>
        </div>
      </section>

      {/* ── Formulaire d'alerte ──────────────────────────────────────────── */}
      <section className="bg-creme px-4 py-14 sm:py-18 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <NotifyForm />
        </div>
      </section>
    </>
  );
}
