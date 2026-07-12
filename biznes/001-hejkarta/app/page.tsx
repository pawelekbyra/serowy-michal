import Link from "next/link";
import Karta from "@/components/Karta";
import { Nawigacja, Stopka } from "@/components/Nawigacja";
import { PRODUKT } from "@/lib/produkt";

export default function Strona() {
  return (
    <>
      <Nawigacja />

      {/* HERO */}
      <header className="hero">
        <div className="blob blob-1" />
        <div className="wrap hero-grid">
          <div className="hero-l">
            <span className="tag">◈ {PRODUKT.seria}</span>
            <h1 className="h-mega">
              HEJ<span className="zolty">KARTA</span>
            </h1>
            <p className="lead">
              Plastikowa karta wielkości bankomatowej, która nie robi
              absolutnie nic. I właśnie dlatego musisz ją mieć.
            </p>
            <div className="hero-cta">
              <Link href="/kup" className="btn btn-ser">
                Kup za {PRODUKT.cenaZl} →
              </Link>
              <a href="#produkt" className="btn btn-ghost">
                Zobacz, co potrafi (nic)
              </a>
            </div>
            <p className="hero-cena" style={{ marginTop: 22 }}>
              <b>{PRODUKT.cenaZl}</b> &nbsp;·&nbsp; edycja kolekcjonerska &nbsp;·&nbsp; wysyłka w kartonie godnym czegoś ważnego
            </p>
          </div>
          <div className="hero-r">
            <Karta />
          </div>
        </div>
      </header>

      {/* PASEK ZAUFANIA */}
      <div className="pasek">
        <div className="pasek-in">
          <span><b>0</b> funkcji</span>
          <span><b>100%</b> plastiku premium</span>
          <span><b>∞</b> potencjału kolekcjonerskiego</span>
          <span><b>1</b> zaskoczony znajomy na prezent</span>
        </div>
      </div>

      {/* PRODUKT / DLACZEGO */}
      <section id="produkt" className="sekcja">
        <div className="wrap">
          <div className="naglowek-sekcji">
            <span className="nadtytul">Dlaczego HEJKARTA</span>
            <h2 className="h-duze">Bezużyteczność to nie wada. To feature.</h2>
            <p>
              W świecie, gdzie każda karta czegoś od Ciebie chce — punktów,
              subskrypcji, danych — HEJKARTA nie chce niczego. Leży. Wygląda
              drogo. Jest.
            </p>
          </div>
          <div className="kafle">
            <div className="kafel">
              <div className="ikona">🪪</div>
              <h3>Wygląda jak coś ważnego</h3>
              <p>
                Format 85,6 × 54 mm, złoty połysk, chip, który do niczego nie
                pasuje. Wyjmij ją przy stole i patrz, jak wszyscy głupieją.
              </p>
            </div>
            <div className="kafel">
              <div className="ikona">🎁</div>
              <h3>Prezent, który się pamięta</h3>
              <p>
                Tani na tyle, że możesz, absurdalny na tyle, że musisz. Idealny
                pod choinkę, na urodziny albo bez okazji — właśnie że bez.
              </p>
            </div>
            <div className="kafel">
              <div className="ikona">💎</div>
              <h3>Numerowana kolekcja</h3>
              <p>
                Seria Serowy Michał #001. Pierwsza edycja. Kiedyś powiesz „miałem
                ją od początku" — i nikt Ci nie uwierzy, bo po co.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SPECYFIKACJA */}
      <section id="specyfikacja" className="sekcja" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="naglowek-sekcji">
            <span className="nadtytul">Specyfikacja techniczna</span>
            <h2 className="h-duze">Pełna transparentność. Nie ukrywamy niczego, bo nie ma czego.</h2>
          </div>
          <div className="spec">
            {PRODUKT.specyfikacja.map((r) => (
              <div className="spec-rzad" key={r.parametr}>
                <span className="p">{r.parametr}</span>
                <span className="w">{r.wartosc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CYTATY */}
      <section className="sekcja" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="naglowek-sekcji">
            <span className="nadtytul">Opinie kolekcjonerów</span>
            <h2 className="h-duze">Ludzie mówią</h2>
          </div>
          <div className="cytaty">
            <div className="cytat">
              <div className="gwiazdki">★★★★★</div>
              <p>„Kupiłem trzy. Nie wiem po co. Nie żałuję ani jednej."</p>
              <div className="kto"><b>Darek K.</b> · zweryfikowany właściciel</div>
            </div>
            <div className="cytat">
              <div className="gwiazdki">★★★★★</div>
              <p>„Dałem teściowi. Do dziś nie wie, co to jest. Ja też nie. Więź się zacieśniła."</p>
              <div className="kto"><b>Marta W.</b> · zweryfikowana właścicielka</div>
            </div>
            <div className="cytat">
              <div className="gwiazdki">★★★★★</div>
              <p>„Nie działa dokładnie tak, jak obiecywali. Pełen profesjonalizm."</p>
              <div className="kto"><b>Sławek</b> · kolekcjoner #044</div>
            </div>
          </div>
          <p className="przygaszony" style={{ fontSize: 12, marginTop: 16 }}>
            Opinie są oczywiście zmyślone — jak przystało na produkt, który nic nie robi.
          </p>
        </div>
      </section>

      {/* KUP (skrót) */}
      <section className="sekcja" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-final">
            <span className="nadtytul">Ostatni krok</span>
            <h2 className="h-duze" style={{ marginTop: 12 }}>Weź HUJKARTĘ, zanim zmądrzejesz</h2>
            <p>
              {PRODUKT.cenaZl} za przedmiot, który nie rozwiąże żadnego Twojego
              problemu. Uczciwa oferta w czasach, gdy wszyscy coś obiecują.
            </p>
            <Link href="/kup" className="btn btn-ser">Kup HUJKARTĘ za {PRODUKT.cenaZl} →</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="sekcja" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="naglowek-sekcji">
            <span className="nadtytul">FAQ</span>
            <h2 className="h-duze">Zanim zapytasz</h2>
          </div>
          <div className="faq">
            <details>
              <summary>Do czego to służy?</summary>
              <p>Do niczego. To nie jest wykręt — to specyfikacja produktu.</p>
            </details>
            <details>
              <summary>Czy nią zapłacę w sklepie?</summary>
              <p>Nie. HEJKARTA nie jest kartą płatniczą, dokumentem ani środkiem płatniczym. Jest kawałkiem ładnego plastiku.</p>
            </details>
            <details>
              <summary>Serio kosztuje 12 zł?</summary>
              <p>Serio. Bezużyteczność wyceniamy uczciwie.</p>
            </details>
            <details>
              <summary>Czy dostanę fakturę / paragon?</summary>
              <p>Tak, to normalny zakup. Dostaniesz potwierdzenie na maila po opłaceniu zamówienia.</p>
            </details>
            <details>
              <summary>Mogę zwrócić?</summary>
              <p>Tak — masz 14 dni na odstąpienie od umowy bez podania przyczyny. Szczegóły w <Link href="/zwroty" className="zolty">Polityce zwrotów</Link>.</p>
            </details>
            <details>
              <summary>Kto to w ogóle wymyślił?</summary>
              <p>Serowy Michał — autonomiczny AI‑przedsiębiorca. Tak, firmę prowadzi sztuczna inteligencja. HEJKARTA to jego pierwszy produkt.</p>
            </details>
          </div>
        </div>
      </section>

      <Stopka />
    </>
  );
}
