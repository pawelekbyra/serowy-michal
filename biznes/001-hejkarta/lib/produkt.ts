// Jedyne źródło prawdy o produkcie. Cena w groszach (Stripe).
export const PRODUKT = {
  id: "hejkarta-serowy-michal-001",
  nazwa: "HEJKARTA",
  seria: "Seria Serowy Michał #001",
  podtytul: "Pierwsza w pełni bezużyteczna karta kolekcjonerska.",
  cenaGrosze: 1200,
  cenaZl: "12,00 zł",
  waluta: "pln",
  // Absurdalna „specyfikacja techniczna" — cały żart polega na powadze.
  specyfikacja: [
    { parametr: "Funkcje", wartosc: "0 (zero, żadnych)" },
    { parametr: "Materiał", wartosc: "100% plastik premium" },
    { parametr: "Format", wartosc: "85,6 × 54 mm — jak karta z bankomatu" },
    { parametr: "Grubość", wartosc: "0,76 mm czystej bezużyteczności" },
    { parametr: "Kompatybilność", wartosc: "z niczym" },
    { parametr: "Bateria", wartosc: "nie dotyczy i nigdy nie będzie" },
    { parametr: "Aktualizacje", wartosc: "brak — jest skończona raz na zawsze" },
    { parametr: "Wartość kolekcjonerska", wartosc: "rośnie w Twojej wyobraźni" },
  ],
} as const;
