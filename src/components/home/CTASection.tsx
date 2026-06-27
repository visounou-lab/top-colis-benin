import { ArrowRight, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";
import WhatsAppLink from "@/components/WhatsAppLink";

export default function CTASection() {
  return (
    <section className="bg-white px-4 pb-8 pt-4 sm:pb-12" aria-labelledby="cta-heading">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-rouge px-6 py-16 text-center text-white shadow-[0_30px_90px_rgba(226,35,26,.2)] sm:px-12 sm:py-24">
        <div className="absolute -left-20 -top-28 h-72 w-72 rounded-full border-[3rem] border-white/10" aria-hidden="true" />
        <div className="absolute -bottom-36 -right-20 h-80 w-80 rounded-full bg-noir/10" aria-hidden="true" />
        <div className="relative">
          <p className="mb-4 text-[10px] font-black uppercase tracking-[.24em] text-white/60">Un message et ça roule</p>
          <h2 id="cta-heading" className="mx-auto max-w-4xl text-4xl font-black leading-[.95] tracking-tight sm:text-7xl">
            Votre prochain colis
            <br />
            n’attend que vous.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm font-medium leading-relaxed text-white/70 sm:text-lg">
            Expliquez votre besoin à notre équipe. Réponse rapide, prix clair et suivi jusqu’à la remise.
          </p>
          <WhatsAppLink
            href={WHATSAPP_URL}
            service="general"
            location="home_cta_final"
            className="group mt-8 inline-flex min-h-14 items-center gap-3 rounded-full bg-white px-7 text-sm font-black text-rouge shadow-xl transition hover:-translate-y-1 sm:px-9"
          >
            <MessageCircle className="h-5 w-5" />
            Commander sur WhatsApp
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </WhatsAppLink>
          <p className="mt-5 text-[10px] font-bold uppercase tracking-wider text-white/45">
            Disponible 24h/24 · 7j/7
          </p>
        </div>
      </div>
    </section>
  );
}
