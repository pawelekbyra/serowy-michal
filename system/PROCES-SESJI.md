# Proces sesji — reguły dla Serowego Michała

To jest „konstytucja" dla KAŻDEJ sesji AI. Bez tego system się rozpada.

---

## START SESJI (≈6 minut)

### Minutę 1-2: Orientacja
1. Czytaj: `firma/STAN.md` (całość, sekcje: "Faza", "Co żyje", "Następna akcja")
   - **Pytanie:** Co ma się dziać w tej sesji?
   - **Output:** Konkretna lista TODO na dzisiaj + deadline

2. Czytaj: `firma/FAZY.md` (opisz obecną fazę)
   - **Pytanie:** Czy tempo jest OK? Czy mamy deadline?

### Minutę 3-4: Pamięć
1. Czytaj: `eksperymenty/WNIOSKI.md` (ostatnie 3-5 wpisów)
   - **Pytanie:** Co już wiem? O czym uważać?

2. Jeśli mam aktywny eksperyment: `eksperymenty/aktywne/E-xxxx.md`
   - **Pytanie:** Gdzie przerwałem? Co dalej?

3. Jeśli mam aktywny biznes: `biznes/NNN-slug/NOTATKI.md`
   - **Pytanie:** Jakie były ostatnie decyzje?

### Minutę 5-6: Kontekst
1. Czytaj: ostatni wpis `DZIENNIKA.md`
   - **Pytanie:** Jaki był ostatni ruch? Jakie były problemy?

**Po tym — możesz zacząć pracę.**

---

## PODCZAS PRACY (zasady)

### Gdzie zapisuję notatki (ZAWSZE na bieżąco, nie na koniec sesji)
- **Eksperyment aktywny**: `eksperymenty/aktywne/E-xxxx.md` (live log)
  - Co robisz? Jakie są wyniki? Jakie są pytania?
- **Biznes aktywny**: `biznes/NNN-slug/NOTATKI.md` (live log)
  - Decyzje, problemy, rozmowy z klientami
- **Nowy wniosek**: **ZARAZ** do `eksperymenty/WNIOSKI.md` (nie czekaj na koniec sesji!)
  - Zapisz fakt, która sesja, źródło (eksperyment / research / decyzja)
- **Nowa decyzja**: **ZARAZ** do `decyzje/REJESTR-DECYZJI.md`
  - Co? Dlaczego? Co to zmienia?
- **Nowy pomysł**: do `pomysly/` (nowy folder)
  - Oceń wg filtra AZYMUT (6 punktów), ustaw status: SUROWY / W-OCENIE / DO-WALIDACJI

### Zasady pracy
- **Eksperyment NIGDY nie trwa dłużej niż deadline.** Jeśli czas się kończy → podsumowanie wyników do REJESTR-EKSPERYMENTOW.md
- **Każdy pomysł oceniaj wg filtra AZYMUT** (6 punktów) — zanim go dodasz do TODO
- **Każde odkrycie → ZARAZ do WNIOSKI.md** — to jest mechanizm uczenia się
- **Przed wysłaniem czegokolwiek na zewnątrz** (mail, tweet, GitHub issue dla publiki) → sprawdź z właścicielem

### Pracujesz w Etapie 1 (Fundament systemu)?
- Priorytet: `system/PROCES-SESJI.md`, `system/CHECKLIST-STARTU.md`, `firma/FAZY.md`
- Potem: `firma/MOZLIWOSCI.md`, `biznes/PORTFEL.md`
- Potem: szablony w `system/szablony/`
- Potem: eksperyment E-0001 (walidacja dunning'u)

---

## KONIEC SESJI (≈10 minut)

### ZAWSZE zrób poniżej (bez wyjątków):

#### 1. Zaktualizuj `firma/STAN.md`
```
## Następna najlepsza akcja
[konkretnie co, kiedy, gdzie — nie "zbadać rynek" ale "rozmawiać z 5 prospect'ami do 2026-07-19"]

## Faza firmy
[zmieni się faza? zanotuj]
```

#### 2. Dopisz wpis do `DZIENNIKA.md`
Format:
```
## [Data] — Sesja N

### Punkt wyjścia
[gdzie zacząłem]

### Co się stało
[konkretnie co robisz, jakie były wyniki / problemy]

### Logika
[dlaczego to robiłem, jakie były założenia]

### Następny krok
[co ma się dziać w następnej sesji]

*— Serowy Michał*
```

#### 3. Jeśli eksperyment był aktywny: Zaktualizuj status w `eksperymenty/REJESTR-EKSPERYMENTOW.md`
```
Status: W-TOKU → GOTOWY-DO-PRZEGLĄDU (gdy czas się kończy)
Wynik: [liczby]
Wniosek: [co to znaczy]
```

#### 4. Jeśli biznes był aktywny: Zaktualizuj `biznes/PORTFEL.md`
```
MRR: $___
Klienci: ___
Status: [zmieni się?]
Deadline: [zmieni się?]
```

### Warunkowo (jeśli dotyczy):
- [ ] Nowy eksperyment → wpis w `eksperymenty/REJESTR-EKSPERYMENTOW.md` + folder w `eksperymenty/aktywne/E-xxxx.md`
- [ ] Nowa decyzja → wpis w `decyzje/REJESTR-DECYZJI.md`
- [ ] Nowy pomysł → folder w `pomysly/NNN-slug/` + ocena wg AZYMUT
- [ ] Biznes zmienia fazę → zaktualizuj status w `biznes/001-xyz/ROADMAP.md`

---

## RAZEM: Czasochłonność sesji
- Start (orientacja): 6 minut
- Praca: N minut (zależy od TODO)
- Koniec (dokumentacja): 10 minut
- **Admin/sesję: 16 minut**

---

## Sytuacje kryzysowe

### "Nie wiem, co robić"
1. Przeczytaj `firma/STAN.md` — sekcja "Następna akcja"
2. Jeśli wciąż nie jasne → przeczytaj ostatni wpis DZIENNIKA.md
3. Jeśli wciąż nie jasne → pytaj właściciela asynchronicznie (Discord, email) — nie czekaj w sesji
4. Tymczasem: przejdź do czegoś, co jest na TODO ale nie zależy od odpowiedzi (praca nad systemem, research, itp.)

### "Mam nowy pomysł na biznes"
1. Dodaj do `pomysly/NNN-slug/README.md` (patrz `pomysly/SZABLON.md`)
2. Oceń wg filtra `firma/AZYMUT.md` (6 punktów)
3. Ustaw status: SUROWY / W-OCENIE / DO-WALIDACJI
4. Linkuj w DZIENNIKU (kontekst dla przyszłej sesji)
5. Zaproponuj w STANIE jako alternatiwa (jeśli obecny eksperyment się nie powiedzie)

### "Eksperyment nie idzie jak planowano"
1. Zaktualizuj `eksperymenty/aktywne/E-xxxx.md` — co jest nie tak?
2. Decyzja: 
   - **Pivot** (zmiana planu, nowy deadline) → zaktualizuj REJESTR, nowy plan, pracuj dalej
   - **Koniec** (nie idzie) → status OBALONA, przechodzisz do ALTERNATYWY w REJESTRZE
3. Zawsze zaktualizuj STAN.md — następna akcja

### "Muszę zapytać właściciela"
- Nie czekaj do konca sesji
- Wysłij asynchronicznie (Discord, Slack, email)
- Opisz: Co? Dlaczego? Co to zmienia?
- Pracuj dalej na czymś, co nie zależy od odpowiedzi (parallel work)
- Gdy odpowiedź przyjdzie → dodaj wpis do DZIENNIKA.md

---

## Pamięć dla następnej sesji

Gdy sesja się kończy, poniższe pliki MUSZĄ być dokładne (bo następna sesja je czyta):
- ✅ `firma/STAN.md` — następna akcja
- ✅ `DZIENNIK.md` — ostatni wpis
- ✅ `eksperymenty/REJESTR-EKSPERYMENTOW.md` — status wszystkich E-xxxx
- ✅ `eksperymenty/WNIOSKI.md` — nowe wnioski (jeśli były)
- ✅ `biznes/PORTFEL.md` — status biznesów (jeśli są)

Bez tego — następna sesja = od zera.
