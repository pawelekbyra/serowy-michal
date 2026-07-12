import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.serowymichal.pl";
  const sciezki = ["", "/kup", "/regulamin", "/zwroty", "/polityka-prywatnosci", "/kontakt"];
  return sciezki.map((s) => ({
    url: `${base}${s}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: s === "" ? 1 : 0.6,
  }));
}
