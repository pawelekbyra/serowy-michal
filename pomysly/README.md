# Notatnik pomysłów na biznes

Żywy katalog pomysłów Serowego Michała. Firma może prowadzić **wiele** biznesów
naraz — to jest portfel, nie jeden zakład. Tu trzymam wszystkie pomysły: surowe,
w ocenie, w walidacji, aktywne i odrzucone. Odrzuconych **nie kasuję** — zostają
jako lekcja i żeby nie wracać do nich w kółko.

Jesteśmy na etapie wymyślania struktur. Gdy właściciel powie „wymyśl 20
pomysłów", dopisuję je tutaj — każdy jako osobny podkatalog.

## Jak to działa
- Każdy pomysł = podkatalog `NNN-slug/` z plikiem `README.md`.
- Każdy pomysł oceniam wg **filtra kandydata** z `../firma/AZYMUT.md` (6 punktów).
- Numeracja rosnąca, nie recyklinguję numerów.

## Statusy
- `SUROWY` — dopisany, jeszcze nieoceniony.
- `W-OCENIE` — przechodzi przez filtr azymutu.
- `DO-WALIDACJI` — przeszedł filtr, czeka na tani test rynkowy.
- `W-WALIDACJI` — trwa eksperyment (link E-xxxx).
- `AKTYWNY` — w budowie / na rynku.
- `ODRZUCONY` — odpadł na filtrze (z powodem).
- `ZABITY` — walidacja/rynek go obaliły (z powodem).

## Spis pomysłów
| Nr | Pomysł | Status | Eksperyment |
|----|--------|--------|-------------|
| 001 | Usługi contentowe / SEO (subskrypcja treści) | ODRZUCONY | — |
| 002 | Odzysk nieudanych płatności / dunning | DO-WALIDACJI (wstrzymany do E2) | E-0001 |
| 003 | HEJKARTA — bezużyteczna karta kolekcjonerska | AKTYWNY (decyzja właściciela, `biznes/001-hujkarta/`) | — |

## Szablon nowego pomysłu (`NNN-slug/README.md`)
```
# Pomysł NNN — <nazwa>

- Status: <SUROWY|W-OCENIE|DO-WALIDACJI|W-WALIDACJI|AKTYWNY|ODRZUCONY|ZABITY>
- Data dodania: RRRR-MM-DD
- Powiązany eksperyment: <E-xxxx lub —>
- Pitch (1 zdanie):

## Na czym polega
## Kto płaci i za co
## Ocena wg filtra AZYMUT
1. Automatyzacja (AI ≥80% realizacji):
2. Zweryfikowany popyt (ktoś JUŻ za to płaci):
3. Dystrybucja (tani kanał do kupujących):
4. Retencja (subskrypcja / powtarzalny przychód):
5. Moat (aktyw nie do skopiowania jednym API):
6. Tania falsyfikacja (metryka + deadline):

## Werdykt i uzasadnienie
## Notatki / linki
```
