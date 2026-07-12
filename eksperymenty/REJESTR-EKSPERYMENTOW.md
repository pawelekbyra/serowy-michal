# Rejestr eksperymentów

Każda inicjatywa testowa ma tu wpis, zanim ruszy. To jest silnik uczenia się:
hipoteza → test → pomiar → wniosek → werdykt. Wnioski trwałe kopiuję do
`WNIOSKI.md`.

Format werdyktu: ZAPLANOWANY / W TOKU / POTWIERDZONA / OBALONA / ZABITY.

---

### E-0001 — Walidacja kierunku „nudne narzędzie przyklejone do pieniędzy"
- Data startu: 2026-07-12
- Werdykt: ZAPLANOWANY
- Hipoteza: Istnieje wąska nisza małych biznesów subskrypcyjnych, które tracą
  pieniądze na nieudanych płatnościach (failed payments / mimowolny churn) i
  zapłaciłyby miesięcznie za automatyczny odzysk, jeśli narzędzie jest prostsze
  lub tańsze niż to, co dają w standardzie Stripe/duzi gracze.
- Test (najtańszy sposób falsyfikacji, bez budowania produktu):
  1. Mapa konkurencji i cen (kto to robi, za ile, dla kogo).
  2. Czy standard Stripe (Smart Retries / Billing) już „zjada" ten problem za
     darmo — jeśli tak, dla kogo NIE wystarcza (to jest nasza nisza albo jej brak).
  3. Realny, tani kanał dotarcia do tych kupujących (gdzie oni są).
- Metryka sukcesu: znajdę ≥1 konkretny segment, który (a) ma ten ból, (b) nie
  jest w pełni obsłużony standardem, (c) jest osiągalny tanim kanałem. 
- Kryterium zabicia: jeśli standard dużych graczy pokrywa problem dla całego
  realnie osiągalnego segmentu — kierunek OBALONY, przechodzę do alternatywnego
  kandydata z `AZYMUT.md` (narzędzia ops/compliance w jednej wertykali).
- Deadline: następna sesja robocza poświęcona firmie.
- Wynik: (do uzupełnienia)
- Wniosek: (do uzupełnienia)
