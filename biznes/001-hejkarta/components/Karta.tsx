// Wizualizacja HEJKARTY renderowana w CSS — bez zewnętrznych assetów.
export default function Karta() {
  return (
    <div className="karta-scena">
      <div className="karta" role="img" aria-label="HEJKARTA — złota plastikowa karta kolekcjonerska">
        <div className="karta-gora">
          <span className="karta-marka">Serowy Michał</span>
          <span className="karta-marka">◈ PREMIUM</span>
        </div>
        <div className="karta-chip" />
        <div className="karta-nazwa">HEJKARTA</div>
        <div className="karta-dol">
          <span>Bezużyteczna od 2026</span>
          <span className="nr">#001 / ∞</span>
        </div>
      </div>
    </div>
  );
}
