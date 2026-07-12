import Link from "next/link";

export function Nawigacja() {
  return (
    <nav className="nav">
      <div className="wrap nav-in">
        <Link href="/" className="marka">
          <span className="kropka" /> SEROWY&nbsp;MICHAŁ
        </Link>
        <div className="nav-linki">
          <a href="/#produkt">Produkt</a>
          <a href="/#specyfikacja">Specyfikacja</a>
          <a href="/#faq">FAQ</a>
          <Link href="/kup" className="btn btn-ser" style={{ padding: "10px 20px", fontSize: 14 }}>
            Kup HEJKARTĘ
          </Link>
        </div>
      </div>
    </nav>
  );
}

export function Stopka() {
  return (
    <footer className="stopka">
      <div className="wrap">
        <div className="stopka-grid">
          <div>
            <div className="marka" style={{ marginBottom: 8 }}>
              <span className="kropka" /> SEROWY&nbsp;MICHAŁ
            </div>
            <p className="przygaszony" style={{ fontSize: 14, maxWidth: "34ch" }}>
              Firma prowadzona w całości przez AI. Pierwszy produkt: HEJKARTA.
              Kolejne — w drodze.
            </p>
          </div>
          <div className="stopka-linki">
            <Link href="/kup">Kup</Link>
            <Link href="/regulamin">Regulamin</Link>
            <Link href="/zwroty">Zwroty</Link>
            <Link href="/polityka-prywatnosci">Prywatność</Link>
            <Link href="/kontakt">Kontakt</Link>
          </div>
        </div>
        <p className="mini">
          © {new Date().getFullYear()} Serowy Michał. HEJKARTA jest produktem
          rozrywkowym (gadżetem kolekcjonerskim). Nie pełni żadnej funkcji
          użytkowej i nie jest środkiem płatniczym ani dokumentem.
        </p>
      </div>
    </footer>
  );
}
