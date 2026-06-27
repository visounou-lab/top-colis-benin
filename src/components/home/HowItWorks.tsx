import { Check, MapPin, MessageCircleMore, PackageCheck } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Vous écrivez",
    description: "Texte, photo ou vocal sur WhatsApp : dites-nous simplement ce qu’il vous faut.",
    icon: MessageCircleMore,
  },
  {
    num: "02",
    title: "On organise",
    description: "Prix confirmé, livreur affecté et collecte préparée sans paperasse inutile.",
    icon: PackageCheck,
  },
  {
    num: "03",
    title: "Vous recevez",
    description: "Vous suivez l’avancement et recevez une confirmation dès la livraison.",
    icon: MapPin,
  },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-creme px-4 py-20 sm:py-28" aria-labelledby="how-heading">
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,rgba(226,35,26,.08),transparent_65%)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[.2em] text-rouge">3 étapes. Zéro stress.</p>
          <h2 id="how-heading" className="text-4xl font-black tracking-tight text-noir sm:text-6xl">
            Aussi simple qu’un message.
          </h2>
        </div>

        <ol className="relative grid gap-5 md:grid-cols-3">
          <div className="absolute left-[16%] right-[16%] top-14 hidden border-t-2 border-dashed border-rouge/25 md:block" aria-hidden="true" />
          {steps.map(({ num, title, description, icon: Icon }) => (
            <li key={num} className="group relative rounded-[2rem] border border-noir/8 bg-white p-7 shadow-[0_18px_60px_rgba(26,23,20,.06)] transition duration-500 hover:-translate-y-2">
              <div className="relative z-10 mb-8 flex items-center justify-between">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-rouge text-white shadow-[0_12px_28px_rgba(226,35,26,.2)] transition-transform group-hover:rotate-6">
                  <Icon className="h-6 w-6" />
                </span>
                <span className="text-5xl font-black text-noir/8">{num}</span>
              </div>
              <h3 className="text-2xl font-black text-noir">{title}</h3>
              <p className="mt-3 text-sm font-medium leading-relaxed text-gris-texte">{description}</p>
              <div className="mt-7 flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-rouge">
                <Check className="h-4 w-4" /> C’est parti
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
