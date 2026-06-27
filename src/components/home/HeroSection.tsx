import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Package, Plane, ShieldCheck } from "lucide-react";

const proofPoints = [
  { icon: ShieldCheck, label: "Colis sécurisés" },
  { icon: Package, label: "Collecte à domicile" },
  { icon: Plane, label: "Envois internationaux" },
];

export default function HeroSection() {
  return (
    <section className="hero-stage relative isolate overflow-hidden bg-creme px-4">
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-45" aria-hidden="true" />
      <div className="hero-orb hero-orb-one pointer-events-none absolute" aria-hidden="true" />
      <div className="hero-orb hero-orb-two pointer-events-none absolute" aria-hidden="true" />

      <div className="relative mx-auto grid min-h-[calc(100svh-4rem)] max-w-7xl items-center gap-10 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-4 lg:py-16">
        <div className="z-10 max-w-2xl hero-copy">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-rouge/15 bg-white/75 px-3 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-rouge shadow-sm backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rouge opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-rouge" />
            </span>
            Livraison active 7j/7 au Bénin
          </div>

          <h1 className="max-w-[780px] text-[clamp(3.25rem,7vw,6.8rem)] font-black leading-[0.86] tracking-[-0.065em] text-noir">
            On prend.
            <br />
            On roule.
            <br />
            <span className="relative inline-block text-rouge">
              On livre.
              <svg className="absolute -bottom-3 left-1 h-4 w-[96%] text-or" viewBox="0 0 320 24" fill="none" aria-hidden="true">
                <path d="M4 17C73 5 184 5 316 14" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="mt-9 max-w-xl text-base font-medium leading-relaxed text-gris-texte sm:text-lg">
            Colis, courses, médicaments ou repas : une équipe locale,
            un suivi WhatsApp et la tranquillité jusqu&apos;à destination.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/devis"
              className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-rouge px-7 text-sm font-bold text-white shadow-[0_14px_35px_rgba(226,35,26,0.25)] transition hover:-translate-y-1 hover:bg-rouge-fonce"
            >
              Demander un devis
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/services"
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-noir/15 bg-white/70 px-7 text-sm font-bold text-noir backdrop-blur transition hover:-translate-y-1 hover:border-noir/30 hover:bg-white"
            >
              Découvrir nos services
            </Link>
          </div>

          <div className="mt-9 flex flex-wrap gap-x-5 gap-y-3">
            {proofPoints.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-xs font-semibold text-noir/70">
                <Icon className="h-4 w-4 text-rouge" />
                {label}
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto flex min-h-[430px] w-full max-w-[760px] items-center justify-center lg:min-h-[660px]">
          <div className="hero-sun absolute h-[78%] w-[78%] rounded-full bg-rouge" aria-hidden="true" />
          <div className="absolute right-[2%] top-[13%] h-20 w-20 rounded-[2rem] border border-white/50 bg-white/25 backdrop-blur-sm sm:h-28 sm:w-28" aria-hidden="true" />

          <div className="hero-rider relative z-10 w-[118%] max-w-none sm:w-[105%] lg:w-[112%]">
            <Image
              src="/images/delivery-rider-3d-v2.png"
              alt="Livreur Top Colis Bénin sur une moto rouge"
              width={1536}
              height={1024}
              priority
              className="h-auto w-full drop-shadow-[0_34px_30px_rgba(26,23,20,0.23)]"
            />
          </div>

          <div className="hero-float-card absolute left-[1%] top-[13%] z-20 rounded-2xl border border-white/70 bg-white/90 p-3 shadow-xl backdrop-blur sm:left-[4%] sm:p-4">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-or/20 text-or">
                <Package className="h-5 w-5" />
              </span>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-gris-texte">Statut</p>
                <p className="text-sm font-extrabold text-noir">Colis en route</p>
              </div>
            </div>
          </div>

          <div className="hero-float-card-delay absolute bottom-[10%] right-[1%] z-20 rounded-2xl border border-white/70 bg-noir p-4 text-creme shadow-2xl sm:right-[4%]">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-8 w-8 text-whatsapp" />
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-creme/50">Promesse</p>
                <p className="text-sm font-extrabold">Rapide. Sûr. Suivi.</p>
              </div>
            </div>
          </div>

          <div className="speed-line speed-line-one" aria-hidden="true" />
          <div className="speed-line speed-line-two" aria-hidden="true" />
          <div className="speed-line speed-line-three" aria-hidden="true" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-5 bg-white [clip-path:polygon(0_70%,8%_20%,18%_75%,31%_15%,44%_68%,57%_18%,70%_75%,84%_22%,100%_65%,100%_100%,0_100%)]" aria-hidden="true" />
    </section>
  );
}
