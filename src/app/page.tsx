const palette = [
  { name: "rouge", hex: "#C8102E", label: "Principal", textClass: "text-white" },
  { name: "rouge-fonce", hex: "#A0152A", label: "Rouge foncé", textClass: "text-white" },
  { name: "creme", hex: "#FBF6EE", label: "Fond crème", textClass: "text-noir" },
  { name: "noir", hex: "#1A1714", label: "Texte noir", textClass: "text-white" },
  { name: "or", hex: "#E3A21A", label: "Accent or", textClass: "text-noir" },
  { name: "whatsapp", hex: "#25D366", label: "WhatsApp", textClass: "text-white" },
  { name: "gris-texte", hex: "#6B655C", label: "Gris texte", textClass: "text-white" },
];

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-creme text-noir px-8 py-12 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-2">Top Colis Benin</h1>
      <p className="text-gris-texte mb-12 text-lg">
        Identité visuelle — démonstration des polices et de la palette.
      </p>

      {/* Polices */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-rouge">Typographie</h2>

        <div className="mb-6 p-6 rounded-xl border border-border bg-white/40">
          <p className="text-xs uppercase tracking-widest text-gris-texte mb-3 font-sans">
            Fraunces — Titres (font-heading)
          </p>
          <h3 className="text-5xl font-bold leading-tight font-heading">
            Livraison rapide
          </h3>
          <h3 className="text-3xl font-light mt-1 font-heading">
            partout au Bénin
          </h3>
        </div>

        <div className="p-6 rounded-xl border border-border bg-white/40">
          <p className="text-xs uppercase tracking-widest text-gris-texte mb-3 font-sans">
            Inter — Corps de texte (font-sans)
          </p>
          <p className="font-sans text-base leading-relaxed">
            Top Colis Benin est votre partenaire de confiance pour l'envoi et la
            réception de colis au Bénin. Rapide, fiable et accessible, notre service
            couvre Cotonou et toutes les villes du pays.
          </p>
          <p className="font-sans text-sm text-gris-texte mt-3">
            Texte secondaire — taille sm — couleur grisTexte (#6B655C)
          </p>
        </div>
      </section>

      {/* Palette */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-rouge">Palette de couleurs</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {palette.map(({ name, hex, label, textClass }) => (
            <div
              key={name}
              className={`rounded-xl p-5 flex flex-col justify-between min-h-28 ${textClass}`}
              style={{ backgroundColor: hex }}
            >
              <span className="text-xs font-medium opacity-80 font-sans">
                {label}
              </span>
              <div className="font-sans">
                <div className="font-bold">{hex}</div>
                <div className="text-xs opacity-70">bg-{name}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
