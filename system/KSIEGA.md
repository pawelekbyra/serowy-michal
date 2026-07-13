# Księga zakładów — pamięć, która się rozlicza

To jest różnica między **pamiętaniem** a **uczeniem się**. Reszta repo pamięta.
Ten plik domyka pętlę: każdy zakład (eksperyment, decyzja kierunkowa, „następna
akcja" z metryką) zapisuje **predykcję + metrykę + deadline + próg zabicia**, a
potem — po terminie — jest **rozliczany** na TRAFIENIE / PUDŁO / NIEJASNE.
Każde PUDŁO musi wyprodukować wniosek. Bez tego notatki rosną, a mózg głupieje
tak samo pewny siebie.

Plik jest **append-only** i **maszynowo-parsowalny** (blok `yaml` na zakład), żeby
zimna sesja ORAZ automatyzacja (trigger) mogły odczytać, co jest przeterminowane.

---

## Bramka rozliczenia (pierwsza rzecz w każdej sesji, przed orientacją)

Zanim zrobisz cokolwiek nowego:
1. Przejrzyj zakłady o `status: OTWARTY`. Dla każdego, którego `deadline` minął
   (dziś ≥ deadline): **rozlicz go** — ustaw `status` na TRAFIENIE / PUDŁO /
   NIEJASNE na podstawie zmierzonej metryki, wpisz **Rozliczenie** i datę.
2. Każde **PUDŁO** i każde **NIEJASNE** → dopisz wniosek do `eksperymenty/WNIOSKI.md`
   (co założyłem, co wyszło, czego to uczy). To nie jest opcjonalne.
3. Dopiero po opróżnieniu przeterminowanych zakładów wolno wybierać nową akcję
   (przez Bramkę dźwigni).

Zakład zamknięty nie znika (append-only) — zmienia tylko `status` i zyskuje sekcję
Rozliczenie. Historia predykcji-vs-wynik to majątek: z niej liczy się kalibracja
(`pewnosc` w chwili otwarcia vs realny wynik). Pewność bez rekordu trafień to S-3.

## Jak dodać zakład
Kopiuj strukturę istniejącego zakładu (Z-0001 niżej), nadaj kolejny numer
`Z-XXXX`. Pola bloku `yaml`: `id, otwarty, deadline, metryka, prog_trafienia,
prog_zabicia, status, pewnosc, zrodlo`. `pewnosc` = subiektywne P(trafienie) w
chwili otwarcia (0–1); to ziarno kalibracji, nie ozdoba. Zakład BEZ metryki i
deadline'u nie jest zakładem — to intencja; nie wpisuj go tutaj. Po bloku `yaml`
zawsze dwie sekcje: **Predykcja (w chwili otwarcia)** i **Rozliczenie** (myślnik,
dopóki nie minie deadline).

---

## Zakłady

## Z-0001 — Oddzwaniacz: walidacja popytu (7 dni)
```yaml
id: Z-0001
otwarty: 2026-07-13
deadline: 2026-07-20
metryka: "liczba e-maili zebranych w localStorage na /oddzwaniacz"
prog_trafienia: ">= 20"
prog_zabicia: "< 5"
status: OTWARTY
pewnosc: 0.30
zrodlo: STAN.md — Następna najlepsza akcja (Dzień 2); landing LIVE, HTTP 200
```
**Predykcja (w chwili otwarcia):** landing missed-call (kalkulator strat +
formularz e-mail) zbierze ≥20 e-maili w 7 dni z naturalnego ruchu, bez budowania
publiczności (limit AI — brak zgody na komunikację zewnętrzną). Pewność niska
(0.30): zero kanału, zero zasięgu, ruch tylko organiczny/cross-sell z HEJKARTY.
Trafienie → Faza 2 (e-mail sequence). Pudło (<5) → KILL, pivot na 004 (Strażnik RODO).
**Rozliczenie:** — (rozlicz 2026-07-20: odczytaj localStorage, wpisz wartość i werdykt)
