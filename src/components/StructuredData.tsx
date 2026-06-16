import { AGENCIES } from "@/lib/constants";

const TELEPHONE = "+229 01 67 68 78 70";

const OPENING_HOURS = {
  "@type": "OpeningHoursSpecification",
  dayOfWeek: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  opens: "08:00",
  closes: "20:00",
};

export default function StructuredData() {
  const data = AGENCIES.map((agency) => ({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Top Colis Bénin",
    telephone: TELEPHONE,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${agency.area} — ${agency.detail}`,
      addressLocality: agency.city,
      addressCountry: "BJ",
    },
    openingHoursSpecification: OPENING_HOURS,
  }));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
