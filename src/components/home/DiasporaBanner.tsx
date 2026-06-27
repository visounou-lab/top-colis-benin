import { ArrowRight, Globe2, PackageCheck, Plane, ShoppingBag } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";
import WhatsAppLink from "@/components/WhatsAppLink";

const features = [
  { icon: ShoppingBag, title: "Achats au Bénin", text: "Marché, boutique ou pharmacie pour vos proches." },
  { icon: PackageCheck, title: "Collecte & stockage", text: "Nous regroupons et préparons vos marchandises." },
  { icon: Plane, title: "Expédition mondiale", text: "Afrique, Europe, Canada et États-Unis." },
];

export default function DiasporaBanner() {
  return (
    <section className="relative overflow-hidden bg-noir px-4 py-20 text-creme sm:py-28" aria-labelledby="diaspora-heading">
      <div className="diaspora-grid pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />
      <div className="absolute -right-32 -top-32 h-[34rem] w-[34rem] rounded-full border-[5rem] border-rouge/10" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_.9fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[.2em] text-or">
            <Globe2 className="h-4 w-4" /> Spécial diaspora
          </div>
          <h2 id="diaspora-heading" className="max-w-3xl text-4xl font-black leading-[.95] tracking-tight sm:text-6xl">
            Loin des yeux.
            <br />
            <span className="text-or">Jamais loin des vôtres.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base font-medium leading-relaxed text-creme/60 sm:text-lg">
            Depuis l’étranger, commandez, faites collecter ou expédiez. Notre équipe devient vos yeux et vos bras au Bénin.
          </p>

          <div className="mt-9 grid gap-3 sm:grid-cols-3">
            {features.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/[.04] p-5 transition hover:bg-white/[.08]">
                <Icon className="mb-5 h-6 w-6 text-or" />
                <h3 className="text-sm font-extrabold text-creme">{title}</h3>
                <p className="mt-2 text-xs font-medium leading-relaxed text-creme/45">{text}</p>
              </div>
            ))}
          </div>

          <WhatsAppLink
            href={WHATSAPP_URL}
            service="diaspora"
            location="home_diaspora_banner"
            className="group mt-8 inline-flex min-h-14 items-center gap-3 rounded-full bg-or px-7 text-sm font-extrabold text-noir transition hover:-translate-y-1"
          >
            Organiser un envoi
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </WhatsAppLink>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-[510px]">
          <div className="absolute inset-[9%] rounded-full border border-white/10" />
          <div className="absolute inset-[20%] rounded-full border border-dashed border-or/35 diaspora-spin" />
          <div className="absolute inset-[31%] flex items-center justify-center rounded-full bg-rouge shadow-[0_0_90px_rgba(226,35,26,.35)]">
            <Globe2 className="h-24 w-24 text-white sm:h-32 sm:w-32" strokeWidth={1.25} />
          </div>
          <div className="diaspora-plane absolute left-[7%] top-[45%] flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-rouge shadow-2xl">
            <Plane className="h-8 w-8 rotate-45" />
          </div>
          <div className="hero-float-card absolute right-[4%] top-[13%] rounded-2xl bg-or p-4 text-noir shadow-2xl">
            <p className="text-[9px] font-black uppercase tracking-widest opacity-60">Express RDC</p>
            <p className="mt-1 text-2xl font-black">Dès 72h</p>
          </div>
          <div className="hero-float-card-delay absolute bottom-[9%] right-[10%] rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
            <p className="text-[9px] font-black uppercase tracking-widest text-creme/50">Suivi</p>
            <p className="mt-1 text-sm font-extrabold text-white">WhatsApp 24/7</p>
          </div>
        </div>
      </div>
    </section>
  );
}
