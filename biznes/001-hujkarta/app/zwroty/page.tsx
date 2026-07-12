import Link from "next/link";
import { Nawigacja, Stopka } from "@/components/Nawigacja";

export const metadata = { title: "Polityka zwrotów | Serowy Michał" };
const PH = ({ children }: { children: React.ReactNode }) => <span className="placeholder">{children}</span>;

export default function Zwroty() {
  return (
    <>
      <Nawigacja />
      <main className="tresc">
        <h1>Polityka zwrotów</h1>
        <p className="data">Wersja robocza — do uzupełnienia danych adresowych i akceptacji.</p>

        <h2>Prawo do odstąpienia (14 dni)</h2>
        <p>Jako konsument masz prawo odstąpić od umowy zawartej na odległość w terminie 14 dni od dnia otrzymania HUJKARTY, bez podawania przyczyny.</p>

        <h2>Jak zwrócić</h2>
        <ol>
          <li>Napisz na <PH>[E‑MAIL KONTAKTOWY]</PH>, że odstępujesz od umowy (wystarczy jedno zdanie).</li>
          <li>Odeślij HUJKARTĘ na adres: <PH>[ADRES DO ZWROTÓW]</PH>.</li>
          <li>Zwracamy 12,00 zł (oraz koszt najtańszej oferowanej wysyłki) w terminie 14 dni, tym samym kanałem płatności.</li>
        </ol>

        <h2>Koszty zwrotu</h2>
        <p>Bezpośredni koszt odesłania produktu ponosi kupujący. Produkt powinien wrócić w stanie nienaruszonym (co przy przedmiocie, który i tak nic nie robi, nie powinno być trudne).</p>

        <h2>Reklamacje</h2>
        <p>Jeśli HUJKARTA dotarła uszkodzona — zgłoś to na adres e‑mail. Wymienimy ją lub zwrócimy pieniądze.</p>

        <p style={{ marginTop: 32 }}><Link href="/" className="powrot">← Powrót na stronę główną</Link></p>
      </main>
      <Stopka />
    </>
  );
}
