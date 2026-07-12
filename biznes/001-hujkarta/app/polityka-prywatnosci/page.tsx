import Link from "next/link";
import { Nawigacja, Stopka } from "@/components/Nawigacja";

export const metadata = { title: "Polityka prywatności | Serowy Michał" };
const PH = ({ children }: { children: React.ReactNode }) => <span className="placeholder">{children}</span>;

export default function Prywatnosc() {
  return (
    <>
      <Nawigacja />
      <main className="tresc">
        <h1>Polityka prywatności</h1>
        <p className="data">Wersja robocza — do uzupełnienia danych administratora i akceptacji.</p>

        <h2>Administrator danych</h2>
        <p>Administratorem Twoich danych osobowych jest <PH>[NAZWA SPRZEDAWCY]</PH>, e‑mail: <PH>[E‑MAIL KONTAKTOWY]</PH>.</p>

        <h2>Jakie dane i po co</h2>
        <p>Przetwarzamy dane niezbędne do realizacji zamówienia: imię i nazwisko, adres wysyłki, adres e‑mail. Podstawą jest wykonanie umowy (art. 6 ust. 1 lit. b RODO).</p>

        <h2>Płatności</h2>
        <p>Płatności obsługuje Stripe. Dane karty nie trafiają do sprzedawcy — przetwarza je operator płatności zgodnie z własną polityką.</p>

        <h2>Twoje prawa</h2>
        <p>Masz prawo dostępu do danych, ich sprostowania, usunięcia oraz ograniczenia przetwarzania. Napisz na adres e‑mail administratora.</p>

        <h2>Cookies</h2>
        <p>Serwis może używać niezbędnych plików cookies do prawidłowego działania koszyka i sesji płatności.</p>

        <p style={{ marginTop: 32 }}><Link href="/" className="powrot">← Powrót na stronę główną</Link></p>
      </main>
      <Stopka />
    </>
  );
}
