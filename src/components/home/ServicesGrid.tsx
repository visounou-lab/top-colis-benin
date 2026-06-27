import Link from "next/link";
import { ArrowUpRight, Bike, CookingPot, PackageOpen, Pill, ShoppingBasket } from "lucide-react";

const services = [
  {
    href: "/services/colis",
    title: "Colis",
    kicker: "Bénin & international",
    description: "Collecte, emballage, suivi et livraison jusqu’à destination.",
    icon: PackageOpen,
    className: "md:col-span-2 lg:col-span-3 bg-rouge text-white",
    iconClass: "bg-white/15 text-white",
  },
  {
    href: "/services/taxi",
    title: "Taxi & Zem",
    kicker: "Déplacez-vous",
    description: "Un conducteur fiable, quand vous en avez besoin.",
    icon: Bike,
    className: "lg:col-span-3 bg-noir text-white",
    iconClass: "bg-or text-noir",
  },
  {
    href: "/services/pharma",
    title: "Pharma",
    kicker: "Priorité santé",
    description: "Vos médicaments récupérés et livrés rapidement.",
    icon: Pill,
    className: "lg:col-span-2 bg-[#F4E8E6] text-noir",
    iconClass: "bg-rouge text-white",
  },
  {
    href: "/services/marche",
    title: "Marché",
    kicker: "Votre liste, notre mission",
    description: "Les bonnes courses, sans quitter votre maison.",
    icon: ShoppingBasket,
    className: "lg:col-span-2 bg-[#F7E8B9] text-noir",
    iconClass: "bg-or text-noir",
  },
  {
    href: "/services/food",
    title: "Food",
    kicker: "Bon et encore chaud",
    description: "Vos plats préférés livrés directement à domicile.",
    icon: CookingPot,
    className: "lg:col-span-2 bg-[#E7E0D5] text-noir",
    iconClass: "bg-white text-rouge",
  },
];

export default function ServicesGrid() {
  return (
    <section className="overflow-hidden bg-white px-4 py-20 sm:py-28" aria-labelledby="services-heading">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-5 sm:mb-14 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.2em] text-rouge">Tout roule avec nous</p>
            <h2 id="services-heading" className="max-w-2xl text-4xl font-black leading-[.95] tracking-tight text-noir sm:text-6xl">
              Un seul contact.
              <br />
              <span className="text-rouge">Tous vos besoins.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm font-medium leading-relaxed text-gris-texte sm:text-base">
            Pas besoin de cinq applications. Écrivez-nous sur WhatsApp et notre équipe prend le relais.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6">
          {services.map(({ href, title, kicker, description, icon: Icon, className, iconClass }, index) => (
            <Link
              key={href}
              href={href}
              className={`service-card group relative min-h-[255px] overflow-hidden rounded-[2rem] p-7 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl ${className}`}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full border-[28px] border-current opacity-[.06] transition-transform duration-700 group-hover:scale-125" />
              <div className={`mb-10 flex h-14 w-14 items-center justify-center rounded-2xl shadow-sm transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110 ${iconClass}`}>
                <Icon className="h-7 w-7" strokeWidth={1.8} />
              </div>
              <p className="mb-2 text-[10px] font-extrabold uppercase tracking-[.18em] opacity-60">{kicker}</p>
              <h3 className="text-3xl font-black tracking-tight">{title}</h3>
              <p className="mt-2 max-w-xs text-sm font-medium leading-relaxed opacity-70">{description}</p>
              <span className="absolute bottom-7 right-7 flex h-11 w-11 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="h-5 w-5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
