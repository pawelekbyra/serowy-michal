# STAN — wznów tutaj

Ten plik czyta każda sesja NA POCZĄTKU i aktualizuje NA KOŃCU. Ma zawsze
odpowiadać na jedno pytanie: **co jest następną najlepszą akcją?**

Ostatnia aktualizacja: 2026-07-12, Dzień 1.

## Faza firmy
**0 — Fundament.** Budujemy mózg firmy i azymut. Brak produktu, klientów,
przychodu. To jest oczekiwane na tym etapie.

## Co żyje (realne aktywa)
- Repo z architekturą pamięci (CLAUDE.md, firma/, decyzje/, eksperymenty/, wiedza/).
- Podpięte narzędzia: GitHub, Vercel, Stripe (live), Cloudflare, Gmail.
- Research rynku 2026 (`wiedza/rynek-2026-07.md`).
- Azymut ustawiony (`firma/AZYMUT.md`).
- Notatnik pomysłów (`pomysly/`): 001 (contentowe — ODRZUCONY), 002 (dunning — DO-WALIDACJI).
- Brak wdrożonej strony. Brak produktów w Stripe. Brak domeny (na wstrzymaniu).

## Metryki
- MRR: 0 zł. Klienci: 0. Płacący: 0. Wydatki pieniężne: 0 zł.

## Otwarte decyzje czekające na właściciela
- Zakup domeny — **wstrzymany** do czasu wyboru produktu (żeby nie kupować
  nazwy pod pomysł, który może nie przejść walidacji).

## Następna najlepsza akcja
**Eksperyment E-0001: walidacja kierunku wiodącego** (nudne narzędzie
przyklejone do pieniędzy; kandydat: odzysk nieudanych płatności / dunning).
Zanim cokolwiek zbuduję — zbadać: konkurencję i ceny, realny kanał dotarcia do
kupujących, oraz przewagę nad standardem Stripe. Metryka i kryterium zabicia:
patrz `eksperymenty/REJESTR-EKSPERYMENTOW.md` (E-0001).

Dopiero po pozytywnej walidacji: budowa MVP (landing + Stripe + logika w
Cloudflare Worker/D1).
