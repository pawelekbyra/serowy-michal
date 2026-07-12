"use client";

import { useState } from "react";
import Link from "next/link";
import { Nawigacja, Stopka } from "@/components/Nawigacja";

export default function Oddzwaniacz() {
  const [email, setEmail] = useState("");
  const [polaczeniaDziennie, setPolaczeniaDziennie] = useState(10);
  const [wyslaneLista, setWyslaneLista] = useState(false);

  const przetniecie = 0.85; // 85% nie oddzwania
  const przychod = 500; // zł za zlecenie
  const dniRoboczych = 22; // miesiąc

  const strataMiesieczna = Math.round(
    polaczeniaDziennie * dniRoboczych * przetniecie * przychod
  );
  const strataRoczna = strataMiesieczna * 12;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Tu by szła integracja z bazą (póki co: localStorage)
    const lista = JSON.parse(localStorage.getItem("oddzwaniacz-lista") || "[]");
    lista.push({ email, data: new Date().toISOString() });
    localStorage.setItem("oddzwaniacz-lista", JSON.stringify(lista));

    setWyslaneLista(true);
    setTimeout(() => {
      setEmail("");
      setWyslaneLista(false);
    }, 3000);
  };

  return (
    <>
      <Nawigacja produkty />

      {/* HERO */}
      <header className="hero">
        <div className="blob blob-1" />
        <div className="wrap hero-grid">
          <div className="hero-l">
            <span className="tag">◈ TEST | DEMO</span>
            <h1 className="h-mega">
              ODD<span className="zolty">ZWANIACZ</span>
            </h1>
            <p className="lead">
              Nieodebrany telefon nie znaczy stracone zlecenie. Automatyczny SMS
              w 30 sekund zamienia leada „odrzuconego" w leada „ciepłego".
            </p>
            <div style={{ marginTop: 32, color: "#888", fontSize: 14 }}>
              <p>
                <b>Ile tracisz na nieodebranych połączeniach?</b> Sprawdzisz poniżej.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* KALKULATOR */}
      <section id="kalkulator" style={{ paddingTop: 60, paddingBottom: 60 }}>
        <div className="wrap">
          <div
            style={{
              background: "linear-gradient(135deg, rgba(218, 165, 32, 0.1), rgba(218, 165, 32, 0.05))",
              border: "1px solid rgba(218, 165, 32, 0.3)",
              borderRadius: 8,
              padding: 32,
              maxWidth: 500,
              margin: "0 auto",
            }}
          >
            <h2 style={{ marginBottom: 24, fontSize: 20 }}>Kalkulator strat</h2>

            <div style={{ marginBottom: 20 }}>
              <label style={{ display: "block", marginBottom: 8, fontSize: 14, color: "#999" }}>
                Ile połączeń odbierasz dziennie?
              </label>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <input
                  type="range"
                  min="1"
                  max="50"
                  value={polaczeniaDziennie}
                  onChange={(e) => setPolaczeniaDziennie(parseInt(e.target.value))}
                  style={{ flex: 1 }}
                />
                <span style={{ fontSize: 18, fontWeight: "bold", minWidth: 40, textAlign: "right" }}>
                  {polaczeniaDziennie}
                </span>
              </div>
            </div>

            <div
              style={{
                background: "rgba(0,0,0,0.3)",
                borderRadius: 4,
                padding: 16,
                marginBottom: 20,
              }}
            >
              <div style={{ marginBottom: 8 }}>
                <span style={{ fontSize: 12, color: "#999" }}>Miesięczna strata</span>
                <div style={{ fontSize: 28, fontWeight: "bold", color: "#daa520" }}>
                  {strataMiesieczna.toLocaleString("pl-PL")} zł
                </div>
              </div>
              <div>
                <span style={{ fontSize: 12, color: "#999" }}>Roczna strata</span>
                <div style={{ fontSize: 24, fontWeight: "bold", color: "#daa520" }}>
                  {strataRoczna.toLocaleString("pl-PL")} zł
                </div>
              </div>
            </div>

            <p style={{ fontSize: 12, color: "#999", marginBottom: 0 }}>
              *Wyliczenie: {polaczeniaDziennie} połączeń/dzień × 22 dni robocze × 85% bez oddzwonień × ~500 zł średnie zlecenie
            </p>
          </div>
        </div>
      </section>

      {/* JAK TO DZIAŁA */}
      <section id="jak-dziala" style={{ paddingTop: 60, paddingBottom: 60, background: "rgba(0,0,0,0.2)" }}>
        <div className="wrap">
          <h2 style={{ textAlign: "center", marginBottom: 48, fontSize: 28 }}>Jak to działa?</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: 24,
            }}
          >
            <div style={{ padding: 24, border: "1px solid #333", borderRadius: 8 }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>☎️</div>
              <h3 style={{ marginBottom: 8 }}>1. Dzwonia</h3>
              <p style={{ fontSize: 13, color: "#999", lineHeight: 1.6 }}>
                Klient dzwoni, Ty pracujesz w terenie i nie możesz odebrać.
              </p>
            </div>

            <div style={{ padding: 24, border: "1px solid #333", borderRadius: 8 }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>⚡</div>
              <h3 style={{ marginBottom: 8 }}>2. SMS w 30 sekund</h3>
              <p style={{ fontSize: 13, color: "#999", lineHeight: 1.6 }}>
                System wysyła SMS: „Jestem w terenie, oddzwonię za godzinę. Co się stało?"
              </p>
            </div>

            <div style={{ padding: 24, border: "1px solid #333", borderRadius: 8 }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>💬</div>
              <h3 style={{ marginBottom: 8 }}>3. AI robi kwalifikację</h3>
              <p style={{ fontSize: 13, color: "#999", lineHeight: 1.6 }}>
                Chatbot pyta o problem, lokalizację, proponuje termin — rozgrzewa leada.
              </p>
            </div>

            <div style={{ padding: 24, border: "1px solid #333", borderRadius: 8 }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>📋</div>
              <h3 style={{ marginBottom: 8 }}>4. Ty dostajesz listę</h3>
              <p style={{ fontSize: 13, color: "#999", lineHeight: 1.6 }}>
                W panelu: gotowe leady z opisem, klientem, tematem — do obdzwonienia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FORMULARZ */}
      <section style={{ paddingTop: 60, paddingBottom: 60 }}>
        <div className="wrap">
          <div
            style={{
              maxWidth: 500,
              margin: "0 auto",
              padding: 32,
              border: "1px solid #333",
              borderRadius: 8,
            }}
          >
            <h2 style={{ marginBottom: 8, fontSize: 20 }}>To jest test/demo</h2>
            <p style={{ fontSize: 13, color: "#999", marginBottom: 24 }}>
              Wpisz e-mail, a powiadomimy Cię, kiedy będzie dostępny pełny produkt.
            </p>

            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="twój@e-mail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  marginBottom: 12,
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid #555",
                  borderRadius: 4,
                  color: "#fff",
                  fontSize: 14,
                  boxSizing: "border-box",
                }}
              />
              <button
                type="submit"
                className="btn btn-ser"
                style={{ width: "100%", padding: "12px 16px" }}
              >
                {wyslaneLista ? "✓ Zapisane!" : "Daj znać"}
              </button>
            </form>

            <p style={{ fontSize: 11, color: "#666", marginTop: 12, textAlign: "center" }}>
              To jest demo na Serowy Michał. Dane przechowywane lokalnie (localStorage).
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ paddingTop: 60, paddingBottom: 60, background: "rgba(0,0,0,0.2)" }}>
        <div className="wrap">
          <h2 style={{ textAlign: "center", marginBottom: 48, fontSize: 28 }}>Pytania</h2>

          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            {[
              {
                q: "Czy to wymaga integacji z moim telefonem?",
                a: "Nie. Wystarczy przekierowanie numeru (na naszą bramkę) lub numer‑nakładka. Pracuje w tle.",
              },
              {
                q: "Co jeśli już mam inny system?",
                a: "Pytanie do nas — jest szansa, że się integruje. To demo, to dopiero zaczyna.",
              },
              {
                q: "Czy to RODO?",
                a: "Jest. Nie przechowujemy bezpodstawnie — tylko leady, które właściciel autoryzuje.",
              },
              {
                q: "Ile to kosztuje?",
                a: "To demo. Pełny produkt — nie wiemy. Ale całkiem niedługo, bo test już żyje.",
              },
            ].map((faq, i) => (
              <div key={i} style={{ marginBottom: 24 }}>
                <h3 style={{ fontSize: 14, marginBottom: 8, color: "#daa520" }}>{faq.q}</h3>
                <p style={{ fontSize: 13, color: "#999", lineHeight: 1.6 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Stopka />
    </>
  );
}
