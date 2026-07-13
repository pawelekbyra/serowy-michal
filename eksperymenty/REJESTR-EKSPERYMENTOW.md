# Rejestr eksperymentów

Każda inicjatywa testowa ma tu **projekt** (hipoteza / test / metryka / kryterium
zabicia). Żywe rozliczenie predykcji-vs-wynik z deadline'em prowadzi
`system/KSIEGA.md` (Bramka rozliczenia) — tu jest projekt, tam jest zakład i jego
werdykt. Wnioski trwałe kopiuję do `WNIOSKI.md`.

Format werdyktu: ZAPLANOWANY / W-TOKU / GOTOWY-DO-PRZEGLĄDU / POTWIERDZONA / OBALONA / ZABITY.

---

## E-0001 — Walidacja kierunku „nudne narzędzie przyklejone do pieniędzy"

**Metadata**
- Data startu: 2026-07-12
- Etap: E2 (Sygnał) — patrz `firma/AZYMUT.md`
- Status: **WSTRZYMANY** (2026-07-12, przebudowa D-0006/D-0007)
- Werdykt: ZAPLANOWANY (wstrzymany)
- Powód wstrzymania: dobry kandydat, zła kolejność. Nie waliduję biznesu przed
  zbudowaniem kanału (E1). Dystrybucja jest wąskim gardłem (L-003) — bez kanału
  nie mam realnego, taniego sposobu dotarcia do prospektów ani sygnału z rynku.
  Wraca do gry na etapie E2. Dawny research konkurencji = busywork (L-007).
- Live notatki: `eksperymenty/aktywne/E-0001-dunning-walidacja.md`
- Biznes: `biznes/001-dunning/` (jeśli POTWIERDZONA)

**Hipoteza**

Istnieje wąska nisza małych biznesów subskrypcyjnych, które tracą pieniądze na
nieudanych płatnościach (failed payments / mimowolny churn) i zapłaciłyby
miesięcznie za automatyczny odzysk, jeśli narzędzie jest prostsze lub tańsze
niż to, co dają w standardzie Stripe/duzi gracze.

**Test (najtańszy sposób falsyfikacji, bez budowania produktu)**

1. Mapa konkurencji i cen (kto to robi, za ile, dla kogo)
2. Czy standard Stripe (Smart Retries / Billing) już „zjada" ten problem za
   darmo — jeśli tak, dla kogo NIE wystarcza (to jest nasza nisza albo jej brak)
3. Realny, tani kanał dotarcia do tych kupujących (gdzie oni są)
4. ≥3-5 rozmów z prospect'ami: czy potwierdzi ból? Czy zapłaciłby?

**Metryka sukcesu**

Znajdę ≥1 konkretny segment, który (a) ma ten ból, (b) nie jest w pełni
obsłużony standardem, (c) jest osiągalny tanim kanałem, (d) ≥2 osoby
potwierdzą „zapłaciłbym".

**Kryterium zabicia**

Jeśli standard dużych graczy pokrywa problem dla całego realnie osiągalnego
segmentu — kierunek OBALONY, przechodzę do E-0002 (alternatywa poniżej).

**ALTERNATYWY (jeśli ten się nie powiedzie)**

- **E-0002** — Narzędzia ops/compliance w wertykali (nieruchomości / gastronomia)
  - Deadline: 2026-07-26
  - Hipoteza: Małe firmy w jednej niszy (np. gastronomia) mają bolesne problemy z compliance/paperwork i zapłaciłyby za automatyzację
  - Metryka: ≥2 potwierdzone rozmowy, kanał dostępu

- **E-0003** — Marketplace specjalistów dla małych firm
  - Deadline: 2026-08-02
  - Hipoteza: Małe firmy szukają levtych freelancerów/konsultantów dla specificznych zadań (not full-time)
  - Metryka: ≥100 organic search'ów/mies. do MVP landing page'u

**Wynik**

(do uzupełnienia po sesji)

**Wniosek**

(do uzupełnienia po sesji)

---

## Instrukcje dla nowych eksperymentów

Dodaj nowy eksperyment w tym formacie:

```
## E-XXXX — [nazwa]

**Metadata**
- Data startu: YYYY-MM-DD
- Faza: [1-4]
- Deadline: YYYY-MM-DD
- Status: ZAPLANOWANY
- Werdykt: (do uzupełnienia)
- Live notatki: `eksperymenty/aktywne/E-XXXX-slug.md`

**Hipoteza**
[Co zakładam i dlaczego]

**Test**
[Najtańszy sposób falsyfikacji, bez budowy produktu]
1. Punkt 1
2. Punkt 2

**Metryka sukcesu**
[Konkretna liczba, którą chcę osiągnąć]

**Kryterium zabicia**
[Przy jakiej liczbie rezygnuję?]

**ALTERNATYWY**
- E-YYYY — [pomysł A]
- E-ZZZZ — [pomysł B]

**Wynik**
(do uzupełnienia po sesji)

**Wniosek**
(do uzupełnienia po sesji)
```
