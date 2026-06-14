import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Espace Diaspora — TopColis Bénin",
  description:
    "Depuis la France, la Belgique, le Canada ou ailleurs — envoyez des colis, commandez des repas et faites vos courses pour vos proches au Bénin via WhatsApp.",
};

/* ─── Icônes ──────────────────────────────────────────────────────────────── */

function IconColis() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16.5 9.4l-9-5.19M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  );
}

function IconMarche() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 01-8 0" />
    </svg>
  );
}

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

function IconWhatsApp() {
  return (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function IconGlobe() {
  return (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  );
}

/* ─── Données ─────────────────────────────────────────────────────────────── */

type Usage = {
  icon: ReactNode;
  iconBg: string;
  iconColor: string;
  title: string;
  description: string;
  href: string;
  waMessage: string;
  cta: string;
};

const usages: Usage[] = [
  {
    icon: <IconColis />,
    iconBg: "bg-rouge/10",
    iconColor: "text-rouge",
    title: "Envoi de colis",
    description:
      "Vous avez des affaires, des vêtements ou des documents à envoyer à vos proches au Bénin ? Confiez-nous votre colis : on réceptionne, on emballe et on livre à domicile.",
    href: "/services/colis",
    waMessage:
      "Bonjour TopColis, Je suis de la diaspora et souhaite envoyer un colis au Bénin. Pouvez-vous me donner plus d'informations ?",
    cta: "En savoir plus sur les colis",
  },
  {
    icon: <IconMarche />,
    iconBg: "bg-or/15",
    iconColor: "text-or",
    title: "Courses au marché",
    description:
      "Envoyez votre liste de courses depuis l'étranger : légumes, poissons, produits locaux… Nous achetons au marché et livrons directement à votre famille.",
    href: "/services/marche",
    waMessage:
      "Bonjour TopColis, Je suis en dehors du Bénin et voudrais commander des courses au marché pour ma famille. Comment ça marche ?",
    cta: "Voir le service marché",
  },
  {
    icon: <IconFood />,
    iconBg: "bg-rouge/10",
    iconColor: "text-rouge",
    title: "Repas & cadeaux",
    description:
      "Offrez un repas chaud à vos parents, un plat de fête ou un cadeau depuis l&apos;étranger. On se charge de la commande et de la livraison.",
    href: "/services/food",
    waMessage:
      "Bonjour TopColis, Je voudrais envoyer un repas ou un cadeau à un proche au Bénin depuis l&apos;étranger. Pouvez-vous m'aider ?",
    cta: "Voir le service food",
  },
  {
    icon: <IconPharma />,
    iconBg: "bg-or/15",
    iconColor: "text-or",
    title: "Médicaments pour vos proches",
    description:
      "Un parent malade au Bénin ? Envoyez-nous l'ordonnance sur WhatsApp — nous achetons et livrons les médicaments à leur domicile ou à l'hôpital.",
    href: "/services/pharma",
    waMessage:
      "Bonjour TopColis, Je suis en dehors du Bénin et veux faire livrer des médicaments à un proche. Comment ça marche ?",
    cta: "Voir le service pharma",
  },
];

const avantages = [
  "Commande 100 % par WhatsApp, aucune app à installer",
  "Paiement par Mobile Money, transfert ou virement",
  "Confirmation photo à chaque étape",
  "Réponse en moins de 5 minutes",
  "Livraison à Calavi, Cotonou et Porto-Novo",
  "Service disponible 7j/7 de 8h à 20h",
];

const pays = [
  "France", "Belgique", "Canada", "États-Unis",
  "Italie", "Allemagne", "Gabon", "Côte d'Ivoire",
];

/* ─── Page ────────────────────────────────────────────────────────────────── */

export default function DiasporaPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="bg-creme px-4 pt-12 pb-16 sm:pt-20 sm:pb-24">
        <div className="max-w-3xl mx-auto">
          {/* Fil d'Ariane */}
          <nav aria-label="Fil d'Ariane" className="mb-8 text-sm text-gris-texte">
            <Link href="/" className="hover:text-rouge transition-colors">Accueil</Link>
            <span className="mx-2" aria-hidden="true">›</span>
            <span className="text-noir font-medium" aria-current="page">Diaspora</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-rouge/10 text-rouge text-xs font-semibold tracking-wide px-4 py-1.5 rounded-full mb-6">
            <IconGlobe />
            Depuis la France, la Belgique, le Canada…
          </div>

          {/* Titre */}
          <h1 className="font-heading text-4xl sm:text-6xl font-bold text-noir leading-[1.1] tracking-tight mb-6">
            Vos proches au Bénin,<br />
            <span className="text-rouge">pris en charge depuis l&apos;étranger.</span>
          </h1>

          <p className="text-gris-texte text-lg sm:text-xl leading-relaxed max-w-2xl mb-10">
            Envoi de colis, courses au marché, repas chauds, médicaments — gérez
            tout depuis votre canapé à Paris ou Montréal. Un simple message WhatsApp
            suffit.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={getWhatsAppUrl(
                "Bonjour TopColis, Je suis de la diaspora et aimerais en savoir plus sur vos services."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-whatsapp text-white font-bold px-7 py-4 rounded-full text-base hover:opacity-90 active:scale-95 transition-all shadow-sm"
            >
              <IconWhatsApp />
              Nous écrire sur WhatsApp
            </a>
            <Link
              href="/devis"
              className="inline-flex items-center justify-center border-2 border-noir text-noir font-semibold px-7 py-4 rounded-full text-base hover:bg-noir hover:text-creme active:scale-95 transition-all"
            >
              Demander un devis colis
            </Link>
          </div>
        </div>
      </section>

      {/* ── Pays desservis ───────────────────────────────────────────────── */}
      <section className="bg-rouge px-4 py-5">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <span className="text-white/70 text-xs font-semibold uppercase tracking-widest shrink-0">
            Commandes reçues depuis
          </span>
          {pays.map((p) => (
            <span key={p} className="text-white text-sm font-medium">
              {p}
            </span>
          ))}
          <span className="text-white/70 text-sm">et plus…</span>
        </div>
      </section>

      {/* ── Avantages ────────────────────────────────────────────────────── */}
      <section className="bg-white px-4 py-14 sm:py-18">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Texte */}
            <div>
              <p className="text-rouge text-xs font-semibold uppercase tracking-widest mb-3">
                Pourquoi nous choisir
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-noir mb-6 leading-tight">
                Simple, fiable,<br />sans stress.
              </h2>
              <p className="text-gris-texte text-base leading-relaxed mb-8">
                Pas besoin d&apos;appeler un cousin pour qu&apos;il gère vos courses.
                TopColis est votre relais de confiance au Bénin — vous commandez,
                on s&apos;occupe du reste.
              </p>
              <ul className="space-y-3">
                {avantages.map((a) => (
                  <li key={a} className="flex items-start gap-3 text-sm text-noir">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-rouge/10 text-rouge flex items-center justify-center shrink-0">
                      <IconCheck />
                    </span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            {/* Carte visuelle */}
            <div className="bg-creme rounded-3xl border border-border p-8 space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-whatsapp flex items-center justify-center text-white">
                  <IconWhatsApp />
                </div>
                <div>
                  <p className="text-sm font-bold text-noir">TopColis Bénin</p>
                  <p className="text-xs text-gris-texte">+229 01 67 68 78 70</p>
                </div>
                <span className="ml-auto text-xs bg-whatsapp/10 text-whatsapp font-semibold px-2.5 py-1 rounded-full">
                  En ligne
                </span>
              </div>

              {[
                { from: "vous", text: "Bonjour, je voudrais faire livrer des courses à ma maman à Cotonou 🛒" },
                { from: "tc", text: "Bonjour ! Avec plaisir 😊 Envoyez-nous votre liste, l'adresse de livraison et votre mode de paiement." },
                { from: "vous", text: "Voici la liste… Elle habite à Missebo." },
                { from: "tc", text: "✅ Reçu ! Nous partons au marché maintenant. Photo de confirmation dans 30 min." },
              ].map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.from === "vous" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-snug ${
                      msg.from === "vous"
                        ? "bg-whatsapp/15 text-noir rounded-br-sm"
                        : "bg-white border border-border text-noir rounded-bl-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4 usages diaspora ────────────────────────────────────────────── */}
      <section className="bg-creme px-4 py-14 sm:py-18" aria-labelledby="usages-heading">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-rouge text-xs font-semibold uppercase tracking-widest mb-3">
              Ce que vous pouvez commander
            </p>
            <h2 id="usages-heading" className="font-heading text-3xl sm:text-4xl font-bold text-noir">
              Tout ce dont votre famille a besoin.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {usages.map((u) => (
              <div
                key={u.title}
                className="bg-white rounded-3xl border border-border p-7 flex flex-col gap-5"
              >
                {/* Icône */}
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${u.iconBg}`}>
                  <div className={`w-6 h-6 ${u.iconColor}`}>{u.icon}</div>
                </div>

                {/* Contenu */}
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-noir text-xl mb-2">
                    {u.title}
                  </h3>
                  <p className="text-gris-texte text-sm leading-relaxed">
                    {u.description}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-2 pt-1">
                  <a
                    href={getWhatsAppUrl(u.waMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-whatsapp text-white text-xs font-semibold px-4 py-2.5 rounded-full hover:opacity-90 active:scale-95 transition-all"
                  >
                    <IconWhatsApp />
                    Commander
                  </a>
                  <Link
                    href={u.href}
                    className="inline-flex items-center justify-center text-xs font-semibold text-rouge border border-rouge/30 px-4 py-2.5 rounded-full hover:bg-rouge/5 transition-all"
                  >
                    {u.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comment commander depuis l'étranger ──────────────────────────── */}
      <section className="bg-white px-4 py-14 sm:py-18 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-rouge text-xs font-semibold uppercase tracking-widest mb-3">
              Processus
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-noir">
              Commander en 3 étapes.
            </h2>
          </div>

          <ol className="space-y-6">
            {[
              {
                num: "1",
                title: "Écrivez-nous sur WhatsApp",
                desc: "Décrivez votre besoin : colis, courses, repas ou médicaments. Notre équipe vous répond en moins de 5 minutes.",
              },
              {
                num: "2",
                title: "On confirme et vous payez",
                desc: "Nous vous communiquons le prix total. Paiement par Mobile Money (MTN, Moov), virement ou Western Union.",
              },
              {
                num: "3",
                title: "Votre famille est livrée",
                desc: "Nous livrons à l'adresse de vos proches et vous envoyons une photo de confirmation à chaque étape.",
              },
            ].map((step) => (
              <li key={step.num} className="flex items-start gap-5">
                <span className="w-10 h-10 rounded-full bg-rouge text-white font-heading font-bold text-lg flex items-center justify-center shrink-0">
                  {step.num}
                </span>
                <div className="pt-1.5">
                  <h3 className="font-heading font-bold text-noir text-lg mb-1">
                    {step.title}
                  </h3>
                  <p className="text-gris-texte text-sm leading-relaxed">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── CTA final ────────────────────────────────────────────────────── */}
      <section className="bg-noir px-4 py-16 sm:py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-creme mb-4 leading-tight">
            Vos proches méritent<br />le meilleur.
          </h2>
          <p className="text-creme/60 text-base mb-8 max-w-md mx-auto leading-relaxed">
            Quel que soit votre pays, un message WhatsApp suffit pour prendre
            soin de ceux que vous aimez au Bénin.
          </p>
          <a
            href={getWhatsAppUrl(
              "Bonjour TopColis, Je suis de la diaspora et voudrais utiliser vos services pour mes proches au Bénin."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-whatsapp text-white font-bold px-8 py-4 rounded-full text-base hover:opacity-90 active:scale-95 transition-all shadow-lg"
          >
            <IconWhatsApp />
            Écrire à TopColis maintenant
          </a>
          <p className="mt-4 text-creme/40 text-xs">
            Réponse en moins de 5 minutes · 7j/7 · 8h–20h
          </p>
        </div>
      </section>
    </>
  );
}
