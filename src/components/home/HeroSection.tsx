import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section className="bg-creme px-4 pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div className="max-w-3xl mx-auto text-center">

        {/* Badge géographique */}
        <div
          className="inline-flex items-center gap-2 bg-rouge/10 text-rouge text-xs font-semibold tracking-wide px-4 py-1.5 rounded-full mb-8"
          aria-label="Zones de livraison"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-rouge shrink-0" aria-hidden="true" />
          Calavi&nbsp;·&nbsp;Cotonou&nbsp;·&nbsp;Porto-Novo&nbsp;·&nbsp;Diaspora
        </div>

        {/* Titre éditorial */}
        <h1 className="font-heading text-4xl sm:text-6xl font-bold text-noir leading-[1.1] tracking-tight mb-6">
          La livraison qui<br />
          comprend{" "}
          <span className="text-rouge">le Bénin.</span>
        </h1>

        {/* Sous-titre */}
        <p className="text-gris-texte text-lg sm:text-xl leading-relaxed max-w-xl mx-auto mb-10">
          Colis, courses, médicaments, taxi — tout ce dont vous avez besoin,
          livré rapidement dans votre quartier ou expédié à travers le monde.
        </p>

        {/* Boutons d'action */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-rouge text-white font-semibold px-7 py-3.5 rounded-full text-sm hover:bg-rouge-fonce active:scale-95 transition-all"
          >
            Demander un devis colis
          </a>
          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center border-2 border-noir text-noir font-semibold px-7 py-3.5 rounded-full text-sm hover:bg-noir hover:text-creme active:scale-95 transition-all"
          >
            Voir les services
          </Link>
        </div>
      </div>
    </section>
  );
}
