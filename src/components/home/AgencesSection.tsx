import { Clock3, MapPin, MessageCircle, Navigation } from "lucide-react";
import { AGENCIES, WHATSAPP_URL } from "@/lib/constants";
import WhatsAppLink from "@/components/WhatsAppLink";

export default function AgencesSection() {
  return (
    <section className="overflow-hidden bg-white px-4 py-20 sm:py-28" aria-labelledby="agences-heading">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div>
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[.2em] text-rouge">Toujours près de vous</p>
            <h2 id="agences-heading" className="text-4xl font-black leading-[.95] tracking-tight text-noir sm:text-6xl">
              Trois agences.
              <br />
              <span className="text-rouge">Une même vitesse.</span>
            </h2>
            <p className="mt-5 max-w-lg text-base font-medium leading-relaxed text-gris-texte">
              Déposez un colis, récupérez une commande ou parlez directement à notre équipe.
            </p>
            <div className="mt-7 inline-flex items-center gap-3 rounded-2xl bg-creme px-5 py-4">
              <Clock3 className="h-5 w-5 text-rouge" />
              <div>
                <p className="text-xs font-extrabold text-noir">Agences ouvertes 8h–20h</p>
                <p className="text-[11px] font-medium text-gris-texte">Contact client disponible 24h/24</p>
              </div>
            </div>
          </div>

          <div className="relative rounded-[2.5rem] bg-creme p-5 sm:p-8">
            <div className="agency-route absolute bottom-[15%] left-[12%] right-[12%] top-[15%] rounded-[45%] border-2 border-dashed border-rouge/20" aria-hidden="true" />
            <div className="relative grid gap-4 sm:grid-cols-3">
              {AGENCIES.map(({ city, area, detail }, index) => (
                <article
                  key={city}
                  className={`agency-card relative rounded-[1.7rem] border border-noir/8 bg-white p-6 shadow-[0_16px_40px_rgba(26,23,20,.07)] ${index === 1 ? "sm:translate-y-8" : ""}`}
                >
                  <span className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl bg-rouge text-white shadow-[0_10px_24px_rgba(226,35,26,.18)]">
                    <MapPin className="h-6 w-6" />
                  </span>
                  <p className="text-[9px] font-black uppercase tracking-[.18em] text-rouge">Agence 0{index + 1}</p>
                  <h3 className="mt-2 text-xl font-black text-noir">{city}</h3>
                  <p className="mt-1 text-xs font-extrabold text-rouge">{area}</p>
                  <p className="mt-3 text-xs font-medium leading-relaxed text-gris-texte">{detail}</p>
                  <Navigation className="absolute right-5 top-5 h-4 w-4 text-noir/20" />
                </article>
              ))}
            </div>
            <div className="relative mt-6 flex justify-center sm:mt-14">
              <WhatsAppLink
                href={WHATSAPP_URL}
                service="general"
                location="home_agences"
                className="inline-flex items-center gap-2 rounded-full bg-noir px-6 py-3 text-sm font-extrabold text-white transition hover:-translate-y-1"
              >
                <MessageCircle className="h-4 w-4 text-whatsapp" /> Écrire à une agence
              </WhatsAppLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
