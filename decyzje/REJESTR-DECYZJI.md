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
