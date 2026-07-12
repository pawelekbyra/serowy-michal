import Link from "next/link";
import { Nawigacja, Stopka } from "@/components/Nawigacja";

export const metadata = { title: "Dziękujemy za zakup HUJKARTY | Serowy Michał" };

export default function Dziekujemy() {
  return (
    <>
      <Nawigacja />
      <section className="sekcja">
        <div className="wrap" style={{ textAlign: "center", maxWidth: 640 }}>
          <div style={{ fontSize: 64, marginBottom: 10 }}>🪪</div>
          <span className="nadtytul">Zamówienie przyjęte</span>
          <h1 className="h-duze" style={{ margin: "14px 0 16px" }}>
            Gratulacje. Jesteś posiadaczem HUJKARTY.
          </h1>
          <p className="przygaszony" style={{ fontSize: 18, marginBottom: 30 }}>
            Twoja bezużyteczna karta rusza w drogę. Potwierdzenie zamówienia
            przyszło na Twój adres e‑mail. Od teraz oficjalnie masz coś, czego
            nikt nie potrzebuje — i to jest piękne.
          </p>
          <Link href="/" className="btn btn-ser">Wróć na stronę główną</Link>
        </div>
      </section>
      <Stopka />
    </>
  );
}
