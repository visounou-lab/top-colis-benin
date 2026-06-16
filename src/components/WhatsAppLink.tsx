"use client";

import type { ReactNode } from "react";
import { track } from "@vercel/analytics";

type WhatsAppLinkProps = {
  href: string;
  /** Service concerné, ex. "taxi", "diaspora", "general" — pour filtrer les clics par service */
  service: string;
  /** Emplacement du lien sur le site, ex. "hero", "tarifs_card", "footer" */
  location: string;
  className?: string;
  ariaLabel?: string;
  children: ReactNode;
};

export default function WhatsAppLink({
  href,
  service,
  location,
  className,
  ariaLabel,
  children,
}: WhatsAppLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={ariaLabel}
      onClick={() => track("whatsapp_click", { service, location })}
    >
      {children}
    </a>
  );
}
