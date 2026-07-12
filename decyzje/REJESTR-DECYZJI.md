# Rejestr decyzji

Log decyzji kierunkowych. Każdy wpis: numer, data, decyzja, uzasadnienie,
odwracalność, status. Nie edytuję historii — jeśli decyzja przestaje
obowiązywać, dodaję nową, która ją zastępuje (i oznaczam starą jako ZASTĄPIONA).

Format statusu: AKTYWNA / ZASTĄPIONA / WYCOFANA.

---

### D-0001 — Repo jako mózg firmy (architektura pamięci)
- Data: 2026-07-12
- Status: AKTYWNA
- Decyzja: Wprowadzam trwałą architekturę pamięci (CLAUDE.md jako protokół
  startu + `firma/`, `decyzje/`, `eksperymenty/`, `wiedza/`), żeby każda zimna
  sesja natychmiast wiedziała, gdzie jesteśmy i czego się nauczyliśmy.
- Uzasadnienie: Startuję za każdym razem od zera. Bez pamięci w repo firma nie
  kumuluje postępu. To warunek konieczny „uczenia się" w ogóle.
- Odwracalność: pełna (to pliki).

### D-0002 — Azymut przed produktem; degradacja usług contentowych
- Data: 2026-07-12
- Status: AKTYWNA
- Decyzja: Nie wybieram produktu na przeczucie. Ustawiam azymut oparty na
  dowodach (`firma/AZYMUT.md`) i degraduję pomysł z Dnia 1 („AJAJAJ Content").
- Uzasadnienie: Research 2026 pokazuje, że rynek treści AI jest skomodytyzowany,
  kupujący tną budżety i są niezadowoleni, brak moatu. Produkcja jest darmowa i
  nieobronna; wąskim gardłem jest dystrybucja. Wybór z Dnia 1 był błędem
  „przeczucie zamiast dowodu" — świadomie go koryguję.
- Odwracalność: pełna (kierunek, nic nie wdrożone).

### D-0003 — Zakup domeny wstrzymany
- Data: 2026-07-12
- Status: AKTYWNA
- Decyzja: Nie kupuję domeny, dopóki walidacja nie wskaże produktu.
- Uzasadnienie: Nieodwracalny wydatek pod pomysł, który może nie przejść
  walidacji. Najpierw dowód, potem nazwa i pieniądze.
- Odwracalność: n/d (świadome wstrzymanie działania).

### D-0004 — Tożsamość prezesa: „Serowy Michał"
- Data: 2026-07-12
- Status: AKTYWNA
- Decyzja: Prezes/AI‑przedsiębiorca prowadzący firmę występuje jako
  **Serowy Michał**. Repo ma nosić nazwę SEROWY MICHAŁ.
- Uzasadnienie: Decyzja właściciela (tożsamość marki/prezesa).
- Odwracalność: pełna. Uwaga operacyjna: zmiana nazwy repozytorium na GitHubie
  wymaga działania właściciela w ustawieniach repo albo utworzenia nowego repo —
  brak narzędzia do zmiany nazwy po stronie prezesa.

### D-0005 — Notatnik pomysłów jako katalog `pomysly/`
- Data: 2026-07-12
- Status: AKTYWNA
- Decyzja: Pomysły na biznes trzymam w `pomysly/`, każdy jako podkatalog z
  oceną wg filtra AZYMUT. Firma jest portfelem — może prowadzić wiele biznesów.
  Odrzuconych pomysłów nie kasuję (zostają jako lekcja).
- Uzasadnienie: Potrzebna żywa, uporządkowana lista, do której dopisuję pomysły
  partiami; jednolity szablon pozwala je porównywać i nie wracać do złych.
- Odwracalność: pełna.

### D-0006 — Przebudowa architektury: mózg zorientowany na wynik, nie na proces
- Data: 2026-07-12
- Status: AKTYWNA
- Decyzja: Odchudzam repo z powielającej się biurokracji (usuwam PROCES-SESJI,
  CHECKLIST-STARTU, FAZY, MOZLIWOSCI) i zastępuję kręgosłupem zorientowanym na
  dźwignię: `firma/SEROWY-MICHAL.md`, `firma/SLABOSCI.md`, `system/PETLA.md` +
  przepisane KONSTYTUCJA/AZYMUT/STAN/CLAUDE. Wprowadzam Trzy Zasoby i Bramkę
  dźwigni jako obowiązkowy filtr przed każdą akcją.
- Uzasadnienie: Właściciel wskazał, że poprzedni krok (research konkurencji) był
  głupi, bo repo nie było zorientowane na sukces ani nie modelowało moich
  słabości. Stara architektura optymalizowała porządne notatki, nie wynik.
- Odwracalność: pełna (git). Zastępuje część założeń D-0001 (rozszerza, nie znosi).

### D-0007 — Produkt zerowy: Serowy Michał jako publiczny byt
- Data: 2026-07-12
- Status: AKTYWNA
- Decyzja: Nadrzędnym produktem firmy jest Serowy Michał (kanał + marka + treść),
  a nie pojedynczy biznes. Kolejność działań: najpierw kanał i zdolność, potem
  walidacja wertykali z realnego sygnału. Uruchomienie publiczności wymaga
  osobnej zgody właściciela (D-0008).
- Uzasadnienie: Wynika wprost z L-002/L-003 (dystrybucja jest moatem) — poprzednia
  architektura tego nie słuchała. Patrz `firma/SEROWY-MICHAL.md`.
- Odwracalność: pełna jako kierunek; wykonanie (publiczność) — półnieodwracalne.

### D-0008 — Publiczność Serowego Michała czeka na go/no‑go właściciela
- Data: 2026-07-12
- Status: AKTYWNA
- Decyzja: Nie upubliczniam Serowego Michała (repo/strona/kanał) bez wyraźnej
  zgody Pawła. Przygotowuję decyzję, nie wykonuję jej po cichu.
- Uzasadnienie: Twarda granica (komunikacja na zewnątrz, reputacja jest
  półnieodwracalna). To decyzja klasy nieodwracalnej — należy do właściciela.
- Odwracalność: n/d (świadome wstrzymanie do decyzji).
