import type { MetadataRoute } from "next";

const BASE_URL = "https://topcolisbenin.vercel.app";

const ROUTES = [
  "",
  "/services",
  "/services/colis",
  "/services/taxi",
  "/services/pharma",
  "/services/marche",
  "/services/food",
  "/devis",
  "/diaspora",
  "/agences",
  "/contact",
  "/tarifs",
  "/top-shopping",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: now,
  }));
}
