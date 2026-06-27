"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, MessageCircle, X } from "lucide-react";
import { NAV_LINKS, WHATSAPP_URL } from "@/lib/constants";
import WhatsAppLink from "@/components/WhatsAppLink";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-noir/8 bg-creme/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center"
          onClick={() => setOpen(false)}
          aria-label="Top Colis Bénin — Accueil"
        >
          <Image
            src="/images/top-colis-logo.png"
            alt="Top Colis Bénin"
            width={881}
            height={558}
            priority
            className="h-11 w-auto object-contain sm:h-12"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigation principale">
          {NAV_LINKS.map(({ label, href, badge }) => (
            <Link
              key={href}
              href={href}
              className="group relative inline-flex items-center gap-1.5 py-2 text-sm font-semibold text-noir/75 transition-colors hover:text-rouge"
            >
              {label}
              <span className="absolute inset-x-0 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-rouge transition-transform group-hover:scale-x-100" />
              {badge && (
                <span className="rounded-full bg-or/15 px-1.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wide text-or">
                  {badge}
                </span>
              )}
            </Link>
          ))}
        </nav>

        <WhatsAppLink
          href={WHATSAPP_URL}
          service="general"
          location="header_desktop"
          className="hidden items-center gap-2 rounded-full bg-whatsapp px-5 py-2.5 text-sm font-bold text-white shadow-[0_8px_24px_rgba(37,211,102,.2)] transition hover:-translate-y-0.5 hover:shadow-lg lg:flex"
        >
          <MessageCircle className="h-4 w-4" />
          Commander
        </WhatsAppLink>

        <button
          onClick={() => setOpen((value) => !value)}
          className="rounded-full border border-noir/10 bg-white/70 p-2.5 text-noir transition hover:bg-white lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-noir/8 bg-creme/98 px-4 pb-5 pt-2 shadow-xl lg:hidden">
          <nav className="flex flex-col" aria-label="Navigation mobile">
            {NAV_LINKS.map(({ label, href, badge }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-noir/8 py-3.5 text-base font-bold text-noir last:border-0"
              >
                {label}
                {badge && (
                  <span className="rounded-full bg-or/15 px-2 py-1 text-[9px] font-extrabold uppercase text-or">
                    {badge}
                  </span>
                )}
              </Link>
            ))}
          </nav>
          <WhatsAppLink
            href={WHATSAPP_URL}
            service="general"
            location="header_mobile"
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp py-3.5 text-sm font-bold text-white"
          >
            <MessageCircle className="h-4 w-4" />
            Commander via WhatsApp
          </WhatsAppLink>
        </div>
      )}
    </header>
  );
}
