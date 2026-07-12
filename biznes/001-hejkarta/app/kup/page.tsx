"use client";

import { useState } from "react";
import Link from "next/link";
import Karta from "@/components/Karta";
import { Nawigacja, Stopka } from "@/components/Nawigacja";
import { PRODUKT } from "@/lib/produkt";

export default function Kup() {
  const [ilosc, setIlosc] = useState(1);
  const [laduje, setLaduje] = useState(false);
  const [blad, setBlad] = useState<string | null>(null);

  async function kup() {
    setLaduje(true);
    setBlad(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ilosc }),
      });
      const dane = await res.json();
      if (res.ok && dane.url) {
        window.location.href = dane.url;
      } else {
        setBlad(dane.blad || "Nie udało się rozpocząć płatności. Spróbuj za chwilę.");
      }
    } catch {
      setBlad("Problem z połączeniem. Spróbuj ponownie.");
    } finally {
      setLaduje(false);
    }
  }

  const razem = ((PRODUKT.cenaGrosze * ilosc) / 100).toFixed(2).replace(".", ",");

  return (
    <>
      <Nawigacja />
      <section className="sekcja">
        <div className="wrap kup-box">
          <div>
            <Karta />
          </div>
          <div className="cena-panel">
            <span className="nadtytul">{PRODUKT.seria}</span>
            <h1 className="h-duze" style={{ margin: "10px 0 6px" }}>HEJKARTA</h1>
            <p className="przygaszony" style={{ marginBottom: 18 }}>{PRODUKT.podtytul}</p>
            <div className="cena">
              {PRODUKT.cenaZl.split(",")[0]}<small>,{PRODUKT.cenaZl.split(",")[1]}</small>
            </div>

            <ul className="lista-check">
              <li>Karta w formacie bankomatowym (85,6 × 54 mm)</li>
              <li>Złoty połysk premium i chip do niczego</li>
              <li>Numerowana edycja kolekcjonerska</li>
              <li>14 dni na zwrot bez podania przyczyny</li>
            </ul>

            <div className="ilosc">
              <button aria-label="mniej" onClick={() => setIlosc((n) => Math.max(1, n - 1))}>−</button>
              <span className="n">{ilosc}</span>
              <button aria-label="więcej" onClick={() => setIlosc((n) => Math.min(99, n + 1))}>+</button>
              <span className="przygaszony" style={{ marginLeft: 10 }}>Razem: <b style={{ color: "var(--tekst)" }}>{razem} zł</b></span>
            </div>

            <button className="btn btn-ser" style={{ width: "100%" }} onClick={kup} disabled={laduje}>
              {laduje ? "Przekierowuję do płatności…" : `Kupuję — zapłać ${razem} zł`}
            </button>

            {blad && <div className="alert alert-info" style={{ marginTop: 16 }}>{blad}</div>}

            <p className="info-mini">
              Płatność obsługuje Stripe. Po opłaceniu dostaniesz potwierdzenie na
              maila. Kupując, akceptujesz <Link href="/regulamin" className="zolty">Regulamin</Link>.
            </p>
          </div>
        </div>
      </section>
      <Stopka />
    </>
  );
}
