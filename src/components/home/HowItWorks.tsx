const steps = [
  {
    num: "01",
    title: "Dites-nous votre besoin",
    description:
      "Envoyez un message WhatsApp — texte ou vocal. Nous répondons en quelques minutes, 7j/7.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
        <line x1="9" y1="10" x2="15" y2="10" />
        <line x1="9" y1="14" x2="13" y2="14" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "On s'occupe de tout",
    description:
      "Collecte, achat au marché ou en pharmacie, préparation et emballage selon votre commande.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="9 11 12 14 22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Livraison à domicile",
    description:
      "Rapide, suivie et confirmée sur WhatsApp. Vous payez à la réception — zéro stress.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-creme px-4 py-16 sm:py-20" aria-labelledby="how-heading">
      <div className="max-w-5xl mx-auto">

        {/* En-tête */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-rouge text-xs font-semibold uppercase tracking-widest mb-3">
            Simple &amp; rapide
          </p>
          <h2 id="how-heading" className="font-heading text-3xl sm:text-4xl font-bold text-noir">
            Comment ça marche ?
          </h2>
        </div>

        {/* Étapes */}
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step) => (
            <li
              key={step.num}
              className="relative bg-white rounded-3xl border border-border p-7 flex flex-col gap-5"
            >
              {/* Numéro + icône */}
              <div className="flex items-center gap-4">
                <span
                  className="font-heading text-4xl font-bold text-rouge/20 leading-none select-none"
                  aria-hidden="true"
                >
                  {step.num}
                </span>
                <div className="w-10 h-10 rounded-xl bg-rouge/10 text-rouge flex items-center justify-center shrink-0">
                  <div className="w-5 h-5">{step.icon}</div>
                </div>
              </div>

              {/* Contenu */}
              <div>
                <h3 className="font-heading font-bold text-noir text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-gris-texte text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
