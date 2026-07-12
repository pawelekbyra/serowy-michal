# Portfel biznesów

Żywy przegląd aktywnych i walidowanych produktów. Zaktualizuj po każdej sesji.

---

## Status biznesów

| ID | Biznes | Status | Faza | MRR | Klienci | Deadline | Eksperyment | Link |
|----|----|--------|------|-----|---------|----------|-------------|------|
| 001 | Odzysk nieudanych płatności (Dunning) | WALIDACJA | 1 | $0 | 0 | 2026-07-19 | E-0001 | `biznes/001-dunning/` |

---

## Stany biznesów

### ✏️ ZAPLANOWANY
Pomysł przeszedł filtr AZYMUT, czeka na eksperyment walidacyjny.

### 🔍 WALIDACJA (ETAP 1)
Trwa eksperyment — badamy czy rynek istnieje, czy ktoś zapłaci, czy kanał jest osiągalny.
- **Deadline:** konkretna data (patrz REJESTR-EKSPERYMENTOW.md)
- **Co się liczy:** rozmowy z prospect'ami, feedback, liczby z researchu

### 🛠️ MVP (ETAP 2)
Rynek potwierdził popyt. Budujemy minimalny działający produkt.
- **Deadline:** data deployment'u do production
- **Co się liczy:** landing page live, Stripe działa, ≥1 beta-klient testuje

### 🚀 LAUNCH (ETAP 3)
MVP gotowy. Wdrażamy i pozyskujemy pierwszych płacących klientów.
- **Deadline:** data zakupu domeny i pierwszej kampanii
- **Co się liczy:** pierwszy płacący klient, feedback klientów

### 📈 SKALOWANIE (ETAP 4)
Klienci płacą, MRR rośnie. Optymalizujemy retention i akwizycję.
- **Metryka:** MRR, churn, CAC, LTV
- **Co się liczy:** rosnący MRR, utrzymanie churn'u poniżej 20%/mies.

### ⏸️ ZAWIESZONY
Na hold — może wrócić, ale teraz nie pracujemy.

### ☠️ ZMORDOWANY / ARCHIWUM
Rynek obaliło hipotezę. Uczenie się + archiwum.
- **Link:** `biznes/archiwum/`

---

## MRR (Monthly Recurring Revenue)

- **Liczba:** ile faktycznie wpływa co miesiąc (w zł)
- **Update:** raz na 2 tygodnie LUB na koniec sesji (jeśli były zmiany)
- **Format:** $XXX (jeśli brak przychodu: $0)

---

## Klienci

- **Liczba:** ile aktywnych, płacących abonentów
- **Update:** każda sesja (zaraz gdy nowy klient lub churn)

---

## Deadline

- **Format:** YYYY-MM-DD (konkretna data, nie „niedługo")
- **Znaczenie:** deadline aktualnej fazy (np. jeśli WALIDACJA — deadline eksperymentu)

---

## Eksperyment

- **Link:** do rejestracyjnego eksperymentu (E-0001, E-0002, itd.)
- **Znaczenie:** który eksperyment waliduje ten biznes

---

## Archiwum

Biznesu, które nie proszły walidacji lub były wycofane.

| ID | Biznes | Status | Powód | Link |
|----|----|--------|-------|------|
| 001-content | AJAJAJ Content (content SEO) | ZMORDOWANY | Rynek skomodytyzowany, brak moatu, niskie marże | `biznes/archiwum/001-content/` |

---

## Portfel jako całość

**Cele dla portfela:**
- Faza 1 (Walidacja): ≥1 biznes POTWIERDZONA (E-0001 OK)
- Faza 2-3 (MVP + Launch): 1 biznes w LAUNCH, przygotowanie E-0002
- Faza 4 (Skalowanie): 2-3 biznesu równolegle (jeden SKALOWANIE, jeden MVP, jeden WALIDACJA)
- **Długoterminowo:** 10-15% biznesów robi 70-80% przychodu (portfel z dużymi outliers'ami)

---

## Jak dodać nowy biznes

1. Stwórz folder: `biznes/NNN-slug/`
2. Dodaj pliki:
   - `README.md` (spec produktu)
   - `ROADMAP.md` (fazy)
   - `METRYKI.md` (co mierzymy)
   - `NOTATKI.md` (live log)
3. Dodaj wiersz do tabeli powyżej (Status: ZAPLANOWANY)
4. Link eksperyment w REJESTR-EKSPERYMENTOW.md

---

## Ostatnia aktualizacja
2026-07-12 (początek)
