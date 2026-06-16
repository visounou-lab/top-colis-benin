import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFAB from "@/components/layout/WhatsAppFAB";
import StructuredData from "@/components/StructuredData";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://topcolisbenin.vercel.app"),
  title: "Top Colis Benin — Livraison express au Bénin",
  description:
    "Envoi et réception de colis partout au Bénin. Agences à Cotonou, Abomey-Calavi et Porto-Novo. Disponible 24h/24.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Top Colis Bénin",
    title: "Top Colis Benin — Livraison express au Bénin",
    description:
      "Envoi et réception de colis partout au Bénin. Agences à Cotonou, Abomey-Calavi et Porto-Novo. Disponible 24h/24.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Colis Benin — Livraison express au Bénin",
    description:
      "Envoi et réception de colis partout au Bénin. Agences à Cotonou, Abomey-Calavi et Porto-Novo. Disponible 24h/24.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${fraunces.variable} ${inter.variable} antialiased flex flex-col min-h-screen`}>
        <StructuredData />
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  );
}
