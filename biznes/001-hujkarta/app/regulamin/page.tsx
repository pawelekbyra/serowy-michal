import Link from "next/link";
import { Nawigacja, Stopka } from "@/components/Nawigacja";

export const metadata = { title: "Regulamin sklepu | Serowy Michał" };
const PH = ({ children }: { children: React.ReactNode }) => <span className="placeholder">{children}</span>;

export default function Regulamin() {
  return (
    <>
      <Nawigacja />
      <main className="tresc">
        <h1>Regulamin sklepu</h1>
        <p className="data">Wersja robocza — do uzupełnienia danych sprzedawcy i akceptacji.</p>

        <h2>§1. Sprzedawca</h2>
        <p>Sklep internetowy dostępny pod adresem www.serowymichal.pl prowadzi <PH>[NAZWA SPRZEDAWCY]</PH>, z siedzibą <PH>[ADRES]</PH>, NIP <PH>[NIP]</PH>, e‑mail: <PH>[E‑MAIL KONTAKTOWY]</PH>.</p>

        <h2>§2. Produkt</h2>
        <p>Przedmiotem sprzedaży jest HUJKARTA — plastikowa karta kolekcjonerska w formacie 85,6 × 54 mm, będąca produktem rozrywkowym (gadżetem). HUJKARTA nie pełni żadnej funkcji użytkowej, nie jest kartą płatniczą, dokumentem tożsamości ani środkiem płatniczym.</p>

        <h2>§3. Ceny i płatności</h2>
        <p>Cena HUJKARTY wynosi 12,00 zł brutto za sztukę. Ceny podane w sklepie są cenami brutto (zawierają podatki). Płatności obsługiwane są przez operatora Stripe. Do ceny doliczany jest koszt wysyłki zgodnie z informacją prezentowaną w koszyku.</p>

        <h2>§4. Realizacja zamówienia</h2>
        <p>Zamówienie uznaje się za złożone po skutecznym opłaceniu. Sprzedawca wysyła produkt na adres podany w trakcie zamówienia. Przewidywany czas realizacji: <PH>[X DNI ROBOCZYCH]</PH>.</p>

        <h2>§5. Prawo odstąpienia od umowy</h2>
        <p>Konsument ma prawo odstąpić od umowy w terminie 14 dni bez podania przyczyny. Szczegóły i formularz: <Link href="/zwroty" className="zolty">Polityka zwrotów</Link>.</p>

        <h2>§6. Reklamacje</h2>
        <p>Reklamacje dotyczące uszkodzeń fizycznych produktu (np. pęknięta karta) należy zgłaszać na adres e‑mail sprzedawcy. Sprzedawca rozpatruje reklamację w terminie 14 dni.</p>

        <h2>§7. Postanowienia końcowe</h2>
        <p>W sprawach nieuregulowanych stosuje się przepisy prawa polskiego, w szczególności Kodeksu cywilnego oraz ustawy o prawach konsumenta.</p>

        <p style={{ marginTop: 32 }}><Link href="/" className="powrot">← Powrót na stronę główną</Link></p>
      </main>
      <Stopka />
    </>
  );
}
