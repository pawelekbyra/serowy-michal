# Pomysł 006 — Oddzwaniacz (odzysk nieodebranych połączeń dla firm usługowych)

- Status: DO-WALIDACJI
- Data dodania: 2026-07-12 (Dzień 1, research 3 pomysłów)
- Powiązany eksperyment: — (do założenia, gdy wejdzie do E2)
- Pitch (1 zdanie): Gdy fachowiec (hydraulik, elektryk, ekipa remontowa) nie
  odbierze telefonu, narzędzie w kilka sekund wysyła SMS‑a, który ratuje leada
  i umawia go — bo nieodebrany telefon to najczęściej stracone zlecenie.

## Na czym polega
Numer firmy przekierowany przez naszą warstwę. Nieodebrane połączenie →
automatyczny SMS w 30–60 s („Oddzwonimy, a w czym możemy pomóc?") → AI prowadzi
krótką kwalifikację i proponuje termin/wycenę. Panel: lista przechwyconych
leadów, statusy, konwersja. Wariant lżejszy: sam „missed‑call text‑back".

## Kto płaci i za co
Jednoosobowe i małe firmy usługowe, które pracują „w terenie" i nie mogą odbierać
w trakcie roboty. Płacą, bo ROI jest brutalnie policzalne.

## Ocena wg filtra AZYMUT
1. Automatyzacja: ✅ wykrycie nieodebranego + SMS + AI‑kwalifikacja = ≥80% automatu.
2. Zweryfikowany popyt: ✅ **[FAKT]** — płacący rynek: AIRA od 24,95 USD/mies,
   NextPhone 199 USD, pełne „AI receptionist" 300–500 USD/mies; **85% dzwoniących
   nie oddzwania**, a przy typowym wolumenie fachowiec traci 16,8–252 tys. USD/rok
   na nieodebranych. Źródło: research 2026 (getnextphone.com, getaira.io).
3. Dystrybucja: ⚠️ **[HIPOTEZA]** — fachowcy PL to duży, ale trudny do taniego
   dotarcia segment; nasz kanał nie trafia w nich wprost (grupy branżowe,
   polecenia — do sprawdzenia).
4. Retencja: ✅ subskrypcja; działa w tle, odejście = powrót do tracenia leadów.
5. Moat: ⚠️ **[HIPOTEZA]** — integracja + dane leadów/konwersji; średni.
6. Tania falsyfikacja: ✅ landing „Ile leadów tracisz na nieodebranych?" +
   kalkulator; metryka ≥20 zapisów w 30 dni.

## Otwarte ryzyko do rozstrzygnięcia
- **Koszt zmienny i telekom:** wymaga numeru/bramki SMS (Twilio i in.) — to
  **łamie zaletę „produkcja darmowa"**: każdy SMS/minuta kosztuje, marża niższa
  niż w 004/005. Do policzenia ekonomia jednostkowa.
- **Regulacje PL:** przekierowania i SMS marketingowe dotykają prawa
  telekomunikacyjnego i zgód (RODO) — do rozeznania przed budową.

## Werdykt i uzasadnienie
**DO-WALIDACJI, rekomendacja #3.** Najtwardszy, najbardziej policzalny ból
[FAKT] z całej trójki — ale też jedyny z **realnym kosztem zmiennym** (telefonia)
i tarciem regulacyjnym, co obniża marżę i tempo taniej falsyfikacji. Kandydat,
gdyby 004/005 odpadły. Nie buduję przed E2.

## Notatki / linki
- Filtr: `../../firma/AZYMUT.md`. Lekcje: `../../eksperymenty/WNIOSKI.md`.
- Research 2026: getnextphone.com, getaira.io, withallo.com.
