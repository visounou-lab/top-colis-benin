import type { Metadata } from "next";
import Link from "next/link";
import DevisForm from "@/components/devis/DevisForm";

export const metadata: Metadata = {
  title: "Demande de devis colis — TopColis Bénin",
  description:
    "Obtenez un devis personnalisé pour votre envoi de colis en quelques secondes. Remplissez le formulaire et recevez une réponse directement sur WhatsApp.",
};

export default function DevisPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="bg-creme px-4 pt-10 pb-10 sm:pt-14 sm:pb-12">
        <div className="max-w-2xl mx-auto">

          {/* Fil d'Ariane */}
          <nav aria-label="Fil d'Ariane" className="mb-8 text-sm text-gris-texte">
            <Link href="/" className="hover:text-rouge transition-colors">Accueil</Link>
            <span className="mx-2" aria-hidden="true">›</span>
            <span className="text-noir font-medium" aria-current="page">Devis colis</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-rouge/10 text-rouge text-xs font-semibold tracking-wide px-4 py-1.5 rounded-full mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-rouge shrink-0" aria-hidden="true" />
            Réponse en moins de 5 minutes
          </div>

          {/* Titre */}
          <h1 className="font-heading text-3xl sm:text-5xl font-bold text-noir leading-tight mb-4">
            Demandez votre devis colis.
          </h1>
          <p className="text-gris-texte text-base sm:text-lg leading-relaxed max-w-lg">
            Remplissez le formulaire ci-dessous — nous générons automatiquement
            un message récapitulatif et vous le transmettons via WhatsApp pour
            une réponse rapide.
          </p>
        </div>
      </section>

      {/* ── Formulaire ───────────────────────────────────────────────────── */}
      <section className="bg-creme px-4 pb-16 sm:pb-24">
        <div className="max-w-2xl mx-auto">
          <DevisForm />
        </div>
      </section>

      {/* ── Rassurance ───────────────────────────────────────────────────── */}
      <section className="bg-white border-t border-border px-4 py-10 sm:py-12">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-lg font-bold text-noir mb-6">
            Ce qui se passe ensuite
          </h2>
          <ol className="space-y-4">
            {[
              {
                num: "1",
                text: "Votre récapitulatif s'ouvre dans WhatsApp, pré-rempli avec toutes vos informations.",
              },
              {
                num: "2",
                text: "Envoyez le message — notre équipe vous répond en moins de 5 minutes.",
              },
              {
                num: "3",
                text: "Nous confirmons le tarif, la date de ramassage et les modalités de paiement.",
              },
            ].map((s) => (
              <li key={s.num} className="flex items-start gap-4">
                <span className="w-7 h-7 rounded-full bg-rouge/10 text-rouge text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {s.num}
                </span>
                <p className="text-gris-texte text-sm leading-relaxed">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
