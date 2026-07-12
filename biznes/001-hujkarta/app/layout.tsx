import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.serowymichal.pl"),
  title: "HUJKARTA — bezużyteczna karta kolekcjonerska | Serowy Michał",
  description:
    "HUJKARTA z serii Serowy Michał. Plastikowa karta wielkości bankomatowej, która nie robi absolutnie nic. Kolekcjonerska. Bezużyteczna. Twoja za 12 zł.",
  keywords: ["hujkarta", "serowy michał", "gadżet", "prezent", "karta kolekcjonerska", "śmieszny prezent"],
  openGraph: {
    title: "HUJKARTA — najbardziej bezużyteczna karta świata",
    description: "Nie robi nic. Kosztuje 12 zł. Musisz ją mieć. Seria Serowy Michał.",
    url: "https://www.serowymichal.pl",
    siteName: "Serowy Michał",
    locale: "pl_PL",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
