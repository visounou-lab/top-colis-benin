import { WHATSAPP_URL } from "@/lib/constants";
import WhatsAppLink from "@/components/WhatsAppLink";

const features = [
  {
    title: "Envoyez votre liste depuis l'étranger",
    description:
      "Faites vos courses au Bénin sans bouger. Envoyez votre liste sur WhatsApp et on s'en occupe.",
  },
  {
    title: "Achat sur place, aux meilleurs prix",
    description:
      "Nos équipes achètent directement au marché, en pharmacie ou en boutique pour vous.",
  },
  {
    title: "Expédition internationale",
    description:
      "Envois vers l'Europe, le Canada, les États-Unis et toute l'Afrique — rapide et sécurisé.",
  },
  {
    title: "RD Congo dès 72h",
    description:
      "Livraison express vers la République Démocratique du Congo à partir de 72 heures.",
  },
];

function IconCheck() {
  return (
    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function DiasporaBanner() {
  return (
    <section className="bg-noir px-4 py-16 sm:py-20" aria-labelledby="diaspora-heading">
      <div className="max-w-5xl mx-auto">

        {/* En-tête */}
        <div className="mb-10 sm:mb-14">
          <p className="text-or text-xs font-semibold uppercase tracking-widest mb-3">
            Spécial diaspora
          </p>
          <h2
            id="diaspora-heading"
            className="font-heading text-3xl sm:text-4xl font-bold text-creme leading-tight"
          >
            Vous êtes loin.{" "}
            <span className="text-or">Votre famille est proche.</span>
          </h2>
          <p className="mt-4 text-gris-texte text-base sm:text-lg leading-relaxed max-w-xl">
            De l&apos;Europe au Canada, des États-Unis à l&apos;Afrique — Top Colis Bénin fait le lien
            entre vous et vos proches au Bénin.
          </p>
        </div>

        {/* Grille des fonctionnalités */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 rounded-3xl overflow-hidden mb-10">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-noir p-7 flex gap-4"
            >
              {/* Check */}
              <div className="mt-0.5 w-6 h-6 rounded-full bg-or/20 text-or flex items-center justify-center shrink-0">
                <IconCheck />
              </div>
              {/* Texte */}
              <div>
                <h3 className="font-heading font-semibold text-creme text-base mb-1">
                  {f.title}
                </h3>
                <p className="text-gris-texte text-sm leading-relaxed">
                  {f.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <WhatsAppLink
            href={WHATSAPP_URL}
            service="diaspora"
            location="home_diaspora_banner"
            className="inline-flex items-center gap-2 bg-or text-noir font-semibold px-7 py-3.5 rounded-full text-sm hover:opacity-90 active:scale-95 transition-all"
          >
            Nous contacter pour un envoi diaspora
          </WhatsAppLink>
        </div>
      </div>
    </section>
  );
}
