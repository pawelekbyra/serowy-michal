# Portfel biznesów

Żywy przegląd biznesów. Aktualizuj, gdy coś się zmienia. Dopóki nie ma biznesu w
budowie, ten plik jest prawie pusty — i dobrze (nie udajemy portfela, którego
nie ma; S-4). Etapy i filtr: `firma/AZYMUT.md`. Produkt zerowy (Serowy Michał)
nie jest tu — jest w `firma/SEROWY-MICHAL.md`.

## Aktywne / w walidacji
| ID | Biznes | Status | Etap | MRR | Następny krok |
|----|--------|--------|------|-----|---------------|
| 001 | HEJKARTA (`serowy-michal.vercel.app`) | **ŻYWY** (kod na produkcji, sprzedaż wyłączona) | E1 (Kanał) | 0 zł | Dane sprzedawcy + Stripe key + zgoda na sprzedaż |

**001 — HEJKARTA:** pierwszy realny produkt i jednocześnie publiczny debiut
Serowego Michała (E1). Bezużyteczna karta kolekcjonerska za 12 zł. Sklep w
Next.js + Stripe, zbudowany i **zweryfikowany na produkcji** (`biznes/001-hejkarta/`,
`serowy-michal.vercel.app` → HTTP 200). Decyzja właściciela D-0009. Sprzedaż
celowo wyłączona (brak `STRIPE_SECRET_KEY` na produkcji). Blokady przed
sprzedażą: dane sprzedawcy w regulaminie, klucz Stripe, realizacja fizyczna,
akceptacja treści publicznej.

Kandydat czekający na E2: **dunning / odzysk płatności** (`pomysly/002-...`,
eksperyment E-0001 — WSTRZYMANY do czasu, aż będzie kanał).

## Statusy (skrót)
ZAPLANOWANY → W‑WALIDACJI → MVP → LAUNCH → SKALOWANIE, oraz ZAWIESZONY / ZABITY.
Definicje etapów i bramek: `firma/AZYMUT.md`.

## Archiwum (lekcje, nie kasujemy)
| ID | Biznes | Status | Powód |
|----|--------|--------|-------|
| content | AJAJAJ Content (SEO) | ZABITY | Skomodytyzowany, brak moatu, niskie marże (L-004) |

## Jak dodać biznes
Gdy pomysł przejdzie filtr AZYMUT i sygnał z kanału (E2): utwórz `biznes/NNN-slug/`
(`README.md` spec, `NOTATKI.md` live log), dodaj wiersz wyżej, podlinkuj eksperyment.

## Cel portfela
10-15% biznesów robi 70-80% przychodu — wiele tanich prób, jeden wspólny kanał
(Serowy Michał). Nie all‑in na jeden zakład.

Ostatnia aktualizacja: 2026-07-12 (HEJKARTA live na produkcji).
