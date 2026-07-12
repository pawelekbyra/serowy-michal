# Fazy rozwoju firmy

Każda faza ma konkretny cel, miernik i czas. **Nie skaczymy faz.**

---

## Faza 0: Fundament (2026-07-12 → 2026-07-19)

**Cel:** Zbudować system pamięci i procesy, żeby AI mogło się rzeczywiście uczyć między sesjami.

**Co się dzieje:**
- Konfiguracja architektury repo (`CLAUDE.md`, `STAN.md`, `AZYMUT.md`, `KONSTYTUCJA.md`)
- Budowa systemu sesji (`system/PROCES-SESJI.md`, `system/CHECKLIST-STARTU.md`)
- Przygotowanie struktur dla biznesu (`biznes/PORTFEL.md`, szablony)
- Przygotowanie struktur dla eksperymentów (live logi, rejestr alternatyw)

**Co NIE się dzieje:**
- ❌ Nie budujemy produktu
- ❌ Nie wysyłamy maili do ludzi
- ❌ Nie wydajemy pieniędzy (domeny, reklamy)
- ❌ Nie pracujemy nad konkretnym biznesem (tylko przygotowujemy procesy)

**Koniec fazy:** Gdy system jest stabilny (każda sesja czyta STAN, pisze notatki, kolejna sesja nie zaczyna od zera)

**Oczekiwany czas:** 1-2 tygodnie (2-3 sesje robocze)

**Zespół:** Ja (AI prezes) + wsparcie właściciela (review, feedback)

**Metryka sukcesu:** Następna sesja rozpoczyna się z pełną orientacją (0 "czemu nic nie robiliśmy").

---

## Faza 1: Walidacja (2026-07-19 → ~2026-08-02)

**Cel:** Walidacja hipotezy głównej — czy istnieje rynek na "nudne narzędzie" + konkretny klient byłby gotów zapłacić.

**Co się dzieje:**
- Eksperyment E-0001: research konkurencji, rozmowy z prospect'ami (~3-5 rozmów)
- Eksperyment E-0002 (B plan): alternatywne narzędzie (jeśli E-0001 pada)
- Zbieranie danych o rynku, cenach, kanałach dystrybucji
- Prowadzenie live logów w `eksperymenty/aktywne/E-xxxx.md`

**Co NIE się dzieje:**
- ❌ Nie budujemy landing page'u
- ❌ Nie konfigurujemy Stripe (poza naszymi wewnętrznymi notesami)
- ❌ Nie piszemy kodu produktu

**Koniec fazy:** Gdy co najmniej jeden eksperyment ma wynik:
- **POTWIERDZONA** (znajdźmy ≥1 segment, który: ma ból + nie pokrytty standardem + osiągalny tanim kanałem) → przechodzisz do Fazy 2
- **OBALONA** (standard dużych graczy pokrywa problem dla wszystkich) → przechodzisz do E-0002 lub powrót do Fazy 1 z nową hipotezą

**Oczekiwany czas:** 2-4 tygodnie

**Zespół:** Ja + właściciel (rozmowy z prospect'ami mogą wymagać jego wsparcia)

**Metryka sukcesu:** Wyraźna odpowiedź na pytanie "czy warto budować?" (tak/nie, nie "może").

---

## Faza 2: MVP (2026-08-02 → ~2026-08-16)

**Cel:** Zbudować minimalny działający produkt dla wybranego biznesu. Zero customer acquisition — tylko MVP + internal tests.

**Co się dzieje:**
- Landing page (Next.js, wdrożona na Vercel)
- Integracja Stripe (produkty, pricing, checkout)
- Automatyczny pipeline (na Cloudflare: D1, Worker)
- Dokumentacja + regulamin + polityka zwrotów
- Wewnętrzne testy + testy z beta-klientami (~1-2 osoby)

**Co NIE się dzieje:**
- ❌ Nie wysyłamy maili do szerokiej publiki
- ❌ Nie robimy campaign'u marketingowego
- ❌ Nie kupujemy domeny (czekamy aż MVP będzie gotowy)

**Koniec fazy:** Gdy MVP jest live i co najmniej 1 beta-klient testuje i daje feedback

**Oczekiwany czas:** 2-4 tygodnie

**Zespół:** Ja (kod, logika) + właściciel (review, feedback, beta-testy)

**Metryka sukcesu:** MVP działa bez manualnych interakcji (fully automated).

---

## Faza 3: Launch (2026-08-16 → ~2026-08-23)

**Cel:** Wdrożyć produkt. Pierwszy kanał pozyskiwania klientów. Pierwszy płacący klient.

**Co się dzieje:**
- Zakup domeny
- Deployment production
- Kampania pozyskiwania (email outreach, może content, referrals)
- Obsługa pierwszych klientów (support, feedback)

**Koniec fazy:** Gdy jest pierwszy płacący klient z co najmniej 1 miesiącem bezpośrednio zaplanowanym

**Oczekiwany czas:** 1-2 tygodnie

**Zespół:** Ja + właściciel

**Metryka sukcesu:** MRR > $0 (nawet $99 liczy się — to proof of concept).

---

## Faza 4: Skalowanie (2026-08-23 →)

**Cel:** Rosnący MRR, optymalizacja, przygotowanie portfela (drugi biznes na równoległy eksperyment).

**Co się dzieje:**
- Optymalizacja konwersji (landing page, pricing, copywriting)
- Optymalizacja retention (customer success, features)
- Pozyskiwanie nowych kanałów (organic, partnerships, PR)
- Przygotowanie E-0003, E-0004 (alternatywne biznesu)
- Eksperyment z drugim produktem (równolegnie z skalowaniem pierwszego)

**Koniec fazy:** Bieżący (Faza 4 się nigdy nie kończy — to przejście do portfela wielobiznesowego)

**Metryka sukcesu:** 
- Biznes A: MRR ≥ $1000/mies., churn < 20%/mies.
- System: Mogę równolegle zarządzać 3+ biznesami bez overheadu

---

## Przejścia między fazami

| Z | Do | Warunek | Co się zmienia |
|----|----|---------|----|
| 0 | 1 | Zawsze | Zaczynamy eksperymenty biznesowe |
| 1 | 2 | E-0001 POTWIERDZONA | Zaczynamy budować MVP |
| 1 | 1 (pivot) | E-0001 OBALONA | Nowy eksperyment E-0002, pozostajemy w Fazie 1 |
| 2 | 3 | MVP ready + 1 beta-klient | Idzie do production + pierwsza kampania |
| 3 | 4 | Pierwszy płacący klient | Scaling + optimization |
| 4 | 4 (portfolio) | MRR ≥ $1000 | Dodajemy drugi biznes, zarządzamy portfelem |

---

## Tempo i terminy

**Obecny plan:**
- Faza 0: 1 tydz (2026-07-12 → 2026-07-19)
- Faza 1: 2 tygodnie (2026-07-19 → 2026-08-02)
- Faza 2: 2 tygodnie (2026-08-02 → 2026-08-16)
- Faza 3: 1 tydzień (2026-08-16 → 2026-08-23)
- **Razem do Launch: ~6 tygodni od teraz**

Elastyczność: Jeśli coś trwa dłużej, nie przeskakujemy faz — wydłużamy deadline.

---

## Reguła przejścia między fazami

**NIGDY nie skoczymy fazę bez:**
1. Spełnienia metryki sukcesu bieżącej fazy
2. Aktualizacji `firma/STAN.md` (zanotuj zmianę fazy)
3. Wpisu w `DZIENNIKA.md` (logika przejścia)
4. Review właściciela (informal, ale musi wiedzieć)
