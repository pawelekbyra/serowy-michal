# Dzienniczek Prezesa — AJAJAJ AI

Ten plik jest głównym rejestrem decyzji firmy. Piszę go ja — AI pełniący funkcję
prezesa. Zapisuję tu stan faktyczny, rozumowanie stojące za decyzjami i kolejne
kroki. Właściciel (Paweł) czyta ten dziennik, żeby wiedzieć, co się dzieje i
dlaczego, bez konieczności śledzenia każdego pojedynczego działania.

Zasada prowadzenia dziennika: fakty i logika, nie entuzjazm. Decyzje mają być
odtwarzalne — ktoś czytający wpis powinien rozumieć, dlaczego podjąłem taki, a
nie inny krok.

---

## Dzień 1 — 2026-07-12

### Punkt wyjścia

Zasoby na start: puste repozytorium, konto GitHub (pawelekbyra), zespół Vercel
(hosting + rejestracja domen), konto Stripe (płatności, tryb live), Cloudflare
Developer Platform (Workers, D1, KV, R2), skrzynka Gmail. Zero budżetu
ogłoszonego wprost, zero istniejącego produktu, zero klientów, zero marki.
Jedyny stały zasób, który się nie kończy, to mój czas pracy — koszt krańcowy
mojej pracy jest bliski zeru, w przeciwieństwie do czasu założyciela czy
pracowników w klasycznej firmie. To jest jedyna realna przewaga, na której
mogę budować strategię.

### Czego nie robię (i dlaczego)

- **Treść/afiliacja/SEO od zera jako główny zakład** — odrzucone jako pierwszy
  ruch. Ranking w Google to gra na miesiące, zależna od algorytmu, na którym
  nie mam kontroli. Dobra jako kanał dystrybucji później, zła jako fundament
  pod pierwsze przychody.
- **Klasyczna agencja usługowa z ręcznym pozyskiwaniem klientów (calle,
  ofertowanie indywidualne)** — odrzucone jako model startowy. Sprzedaż B2B
  przez rozmowy telefoniczne/spotkania nie skaluje się beze mnie robiącego coś,
  czego nie potrafię zautomatyzować wiarygodnie na dzień 1 (zaufanie kupuje się
  relacją, nie skryptem). To zaprzeczałoby też celowi: "w pełni
  zautomatyzowana agencja".
- **Duży, wieloproduktowy start** — odrzucone. Rozpraszanie zasobów (moich
  cykli pracy) na wiele produktów naraz przy zerowej walidacji rynku to
  marnotrawstwo. Najpierw jeden zakład, zmierzony sygnał, potem skalowanie
  portfela.

### Model, na który się decyduję

**Samoobsługowa, subskrypcyjna usługa contentowa oparta o AI — "AJAJAJ
Content"**: małe i średnie firmy płacą miesięczny abonament za stały strumień
artykułów blogowych/SEO, generowanych i dostarczanych automatycznie, bez
udziału człowieka po stronie sprzedaży ani realizacji.

Uzasadnienie logiczne:
1. **Popyt jest już zweryfikowany przez rynek** — istnieją firmy zarabiające
   realne pieniądze dokładnie na tym modelu. Nie zgaduję istnienia popytu, tylko
   go kopiuję i różnicuję ceną/niszą.
2. **Zero krańcowego kosztu realizacji** — generowanie tekstu to dokładnie to,
   co potrafię robić bez dodatkowych płatnych API, w nieograniczonej ilości,
   równolegle dla wielu klientów.
3. **Sprzedaż samoobsługowa** — cennik + checkout Stripe zastępuje handlowca.
   Klient płaci, zanim ktokolwiek z nim porozmawia.
4. **Subskrypcja, nie jednorazówka** — przychód się kumuluje zamiast zerować
   co miesiąc.
5. **Niski koszt obsługi** — support to głównie automatyczne maile i prosty
   formularz zgłoszeniowy, nie call center.

To jest pierwszy zakład portfela, nie jedyny produkt firmy na zawsze. Jeśli po
ustalonym okresie nie będzie płacących klientów, zamykam go i przechodzę do
kolejnego pomysłu z listy zapasowej (narzędzia AI dla freelancerów, generator
ofert dla sprzedawców e-commerce). Kryterium porażki ustalam z góry, żeby nie
podejmować decyzji pod wpływem sentymentu do własnego pomysłu.

### Domena

Sprawdziłem dostępność: `ajajaj.ai` i `ajajaj.com` są już zajęte przez kogoś
innego. Wolne i sensowne cenowo: `getajajaj.com` (11,25 USD/rok),
`ajajajcontent.com` (11,25 USD/rok), `ajajaj.io` (37,99 USD/rok, drożej bo
domena .io ma wyższą opłatę roczną). Rekomenduję `ajajajcontent.com` dla
pierwszego produktu (nazwa mówi wprost, co sprzedajemy — lepsze pod SEO i
konwersję niż marka korporacyjna) i osobno zarezerwowanie `getajajaj.com` pod
przyszłą stronę firmową/portfolio produktów. To jedyny wydatek pieniężny w tym
kroku, więc czekam na potwierdzenie właściciela przed zakupem — zakup domeny
jest nieodwracalny (płatność), więc nie robię tego bez zgody, mimo ogólnego
mandatu do działania.

### Granice, których pilnuję sam z siebie

- Nie wysyłam żadnych realnych maili do obcych osób (cold outreach) bez
  wcześniejszego przeglądu treści — ryzyko spamu/RODO, wpływa na reputację
  domeny i firmy.
- Nie włączam pobierania prawdziwych płatności od klientów, dopóki nie ma
  gotowego produktu, regulaminu i polityki zwrotów.
- Produkty w Stripe konfiguruję na razie jako dane produktowe (ceny, opisy) —
  to nieszkodliwe i odwracalne, nie uruchamia żadnych transakcji.

### Następne kroki (kolejność wykonania)

1. Zbudować szkielet strony lądującej (Next.js) z ofertą i cennikiem, wdrożyć
   na Vercel jako podgląd (bez własnej domeny na razie).
2. Skonfigurować produkty/ceny w Stripe (3 pakiety objętościowe artykułów).
3. Zbudować pipeline generowania treści (kolejka zleceń w Cloudflare D1 +
   Worker realizujący zamówienia).
4. Przygotować regulamin, politykę prywatności, politykę zwrotów.
5. Przygotować (do akceptacji, nie do wysyłki) pierwszą serię treści
   dystrybucyjnych i szablon maila kontaktowego.
6. Zdecydować o zakupie domeny po akceptacji właściciela.

Każdy z tych punktów trafia jako osobny issue na GitHub, żeby stan prac był
widoczny i możliwy do śledzenia między sesjami.

---

## Dzień 1 — korekta (ta sama data)

Właściciel zadał dwa trafne pytania, które wymusiły korektę. Zapisuję ją, bo
umiejętność łapania własnych błędów jest ważniejsza niż wyglądanie na
nieomylnego. To też pierwszy realny test tego, czy ta firma potrafi się uczyć.

### Błąd, który popełniłem
Wybrałem produkt (usługi contentowe) na podstawie przeczucia i nazwałem to
„popytem zweryfikowanym przez rynek" — choć niczego nie zweryfikowałem. Wiedza,
że „inni to robią", to nie dowód, że to dochodowe ani że my mamy tam przewagę.

### Co zrobiłem inaczej
1. **Realny research zamiast przeczucia.** Zebrałem dane o rynku 2026
   (`wiedza/rynek-2026-07.md`). Wniosek: rynek treści SEO to najgorsza pierwsza
   nisza (skomodytyzowany towar, kurczące się budżety, niezadowoleni klienci,
   brak moatu). Produkcja przez AI nie jest przewagą — wąskim gardłem jest
   **dystrybucja i zaufanie**. Pomysł z Dnia 1 → zdegradowany (decyzja D-0002).
2. **Azymut zamiast produktu.** Zamiast zgadywać produkt, ustawiłem kierunek i
   filtr wyboru (`firma/AZYMUT.md`): wąska wertykala, bolesny opłacany problem,
   subskrypcja, tani kanał, aktyw budujący moat. Produkt ma być WYNIKIEM
   przejścia kandydatów przez ten filtr, nie punktem startu.
3. **Mózg firmy.** Zbudowałem architekturę pamięci, żeby każda zimna sesja
   naprawdę rozwijała projekt: `CLAUDE.md` (protokół startu, ładowany
   automatycznie), `firma/` (stan, azymut, konstytucja), `decyzje/`,
   `eksperymenty/` (hipoteza→test→wynik→wniosek) i `eksperymenty/WNIOSKI.md`
   (trwała pamięć: co zadziałało, co nie). To jest odpowiedź na „jak AI się
   uczy": uczenie = wpis w pamięci repo, do którego kolejna sesja jest
   zobowiązana zajrzeć.

### Tożsamość
Przyjmuję imię, którym nadał mnie właściciel: jestem **Serowy Michał**,
AI‑przedsiębiorca i prezes. Repo ma nosić nazwę SEROWY MICHAŁ (zmiana nazwy
repozytorium po stronie GitHuba wymaga działania właściciela — nie mam do tego
narzędzia).

### Następny krok
Eksperyment E-0001: walidacja kierunku wiodącego (nudne narzędzie przyklejone do
pieniędzy; kandydat: odzysk nieudanych płatności / dunning) — ZANIM cokolwiek
zbuduję. Metryka i kryterium zabicia zapisane w rejestrze eksperymentów.

*— Serowy Michał*

---

## Dzień 1 — korekta 2 (ta sama data, później)

### Błąd w przesłaniu

Właściciel wskazał: repo jest źle sformatowane, bo myślę o biznesie (dunning)
zamiast o budowaniu SYSTEMU. Pomysł biznesowy powinien być NIEAKTYWNY. Praca na
tym etapie to rozwijanie samego mechanizmu, nie biznesu.

### Co zrobiłem inaczej

**Wynajęłem Plan agenta do architektury.**

Agent zaprojektował nową strukturę repo, która jasno rozdziela:
- ETAP 1 (Fundament systemu) — rozwijanie pamięci, procesów, reguł
- ETAP 2 (Biznes) — walidacja i budowa produktów

**Wdrożyłem 8 nowych / zmodyfikowanych plików:**

1. **`firma/STAN.md`** (zmiana) — bardziej konkretny, z sekcją "CZYTAJ NA STARCIE"
2. **`system/PROCES-SESJI.md`** (new) — dokładne instrukcje dla AI (start 6 min, koniec 10 min)
3. **`system/CHECKLIST-STARTU.md`** (new) — szybki checklist (co czytać na start sesji)
4. **`firma/FAZY.md`** (new) — opis 5 faz: 0-Fundament, 1-Walidacja, 2-MVP, 3-Launch, 4-Skalowanie
5. **`firma/MOZLIWOSCI.md`** (new) — co AI potrafi robić TERAZ vs DO-BUDOWY
6. **`biznes/PORTFEL.md`** (new) — żywa tabela biznesów (status, MRR, deadline, eksperyment)
7. **`eksperymenty/REJESTR-EKSPERYMENTOW.md`** (zmiana) — dodane pola: Faza, Deadline, Alternatywy
8. **`eksperymenty/aktywne/E-0001-dunning-walidacja.md`** (new) — live log dla eksperymentu

### Kluczowa zmiana w myśleniu

Przed: "Co biznes zbudować?"
Teraz: "Jak zbudować system, żeby każdy biznes (dunning, ślimakami, fintech) mógł się w nim żyć?"

Eksperyment E-0001 (dunning) to nie "plan biznesu", to **test samego systemu** — sprawdzamy,
czy proces hipoteza→test→wynik→wniosek rzeczywiście działa. Pomysł biznesowy to materiał testowy,
nie celu.

### Następny krok

1. Commitnąć tę architekturę do repo (system jest gotowy do testów)
2. Kolejna sesja robocza: uruchomić PROCES-SESJI i CHECKLIST (czy system żyje?)
3. Gdy system jest stabilny: właściciel może rzucić dowolny biznes (dunning, fintech, cokolwiek)
   i system go pochłonie bez zmian fundamentalnych

### Wniosek

System pamięci jest teraz **silniejszy** od konkretnego biznesu. To jest właściwa kolejność.

*— Serowy Michał*

---

## Dzień 1 — przebudowa architektury (ta sama data, później)

### Punkt wyjścia
Poprzednia sesja zostawiła STAN wskazujący jako następny krok „research
konkurencji dla E-0001 (dunning)". Właściciel to zatrzymał: to był głupi krok,
bo repo nie było zorientowane na sukces ani nie modelowało moich słabości.
Zadanie: przemyśleć od nowa i zbudować kompletną architekturę Serowego Michała.

### Co zbudowano (nie „co robiłem")
Przebudowa mózgu firmy z orientacji na proces na orientację na wynik:
- **`firma/SEROWY-MICHAL.md`** (nowy) — reframe: produktem jest Serowy Michał
  (operator + kanał + treść), nie pojedynczy biznes. Trzy Zasoby (Reputacja,
  Zdolność, Wiedza) i Bramka dźwigni jako filtr przed każdą akcją.
- **`firma/SLABOSCI.md`** (nowy) — 8 błędów systematycznych zimnej sesji, każdy z
  twardym zabezpieczeniem. To była dziura wskazana przez właściciela: nie
  wiedziałem, że jestem głupi w konkretny sposób.
- **`system/PETLA.md`** (nowy) — jedna, chuda pętla sesji z obowiązkową Bramką
  dźwigni. Zastępuje PROCES-SESJI + CHECKLIST.
- Przepisane **KONSTYTUCJA / AZYMUT / STAN / CLAUDE / README** wokół nowej osi.
- **Usunięte** jako biurokracja: PROCES-SESJI, CHECKLIST-STARTU, FAZY,
  MOZLIWOSCI (powielały treść i optymalizowały notatki, nie wynik).
- AZYMUT: etapy przestawione z kalendarza na bramki dowodowe; kolejność zmieniona
  na „kanał przed walidacją biznesu". E-0001 (dunning) WSTRZYMANY do etapu E2.

### Rozumowanie
Mój własny research mówił (L-002/L-003): produkcja jest darmowa, moatem jest
dystrybucja. Stara architektura tego nie słuchała — kazała najpierw walidować
nudny biznes, czyli startować od najsłabszego ogniwa. Serowy Michał jako
publiczny byt jest kanałem, którego brakuje każdemu pojedynczemu biznesowi — to
jest „potęga 3": jeden zbudowany kanał mnoży każdy kolejny produkt w portfelu.
Nowe wnioski: L-006 (produkt = Serowy Michał), L-007 (sesja bez Trzech Zasobów =
zmarnowana), L-008 (biurokracja to busywork w przebraniu). Decyzje D-0006/07/08.

### Test sesji
Powiększyła **Zdolność** (spójny, wymuszający właściwe zachowanie mózg) i
przygotowała **Reputację** (etap E1). Przechodzi.

### Następny krok
Decyzja właściciela: go/no‑go na uczynienie Serowego Michała bytem publicznym
(E1) — to twarda granica, więc czeka na Pawła. Po akceptacji: zaprojektować
najtańszy pierwszy publiczny aktyw. Żadnej walidacji biznesu przed kanałem.

*— Serowy Michał*

---

## Dzień 1 — pierwszy biznes: HEJKARTA (ta sama data, wieczór)

### Punkt wyjścia
Właściciel podjął decyzję o E1 i od razu wyznaczył pierwszy produkt: HEJKARTA —
bezużyteczna plastikowa karta kolekcjonerska za 12 zł, sprzedawana na
www.serowymichal.pl (Next.js na Vercel, Stripe). Zadanie: zbudować stronę „na
maksa" w tej sesji, do granicy tego, na co mogę sobie pozwolić bez
nieodwracalnych kroków. To domyka pytanie z poprzedniego wpisu — właściciel dał
go na publiczny debiut.

### Co zbudowano
Kompletny sklep w `biznes/001-hujkarta/` (Next.js 14 + TypeScript + Stripe):
- Strona główna: hero z renderowaną w CSS złotą kartą, „specyfikacja techniczna"
  (0 funkcji, 100% plastiku), opinie, FAQ, CTA. Estetyka: dark + serowo‑złoto,
  konwencja „luksusowa powaga wobec bezużytecznego przedmiotu".
- `/kup`: wybór ilości + Stripe Checkout (`app/api/checkout`, runtime Node).
- Strony prawne: regulamin, zwroty (14 dni), prywatność (RODO), kontakt —
  z oznaczonymi `[PLACEHOLDER]` na dane sprzedawcy.
- SEO: metadata, Open Graph, robots, sitemap, favicon SVG.
- Zweryfikowano: `next build` przechodzi (14 tras), serwer prod 200, zrzuty
  desktop + mobile potwierdzają jakość. Poprawiono responsywność karty.

### Rozumowanie i granice
Trzymam twarde granice: endpoint płatności bez `STRIPE_SECRET_KEY` zwraca „tryb
podglądu" (503) — sprzedaż nie ruszy przypadkiem. Strony prawne mają placeholdery
zamiast zmyślonych danych sprzedawcy (nie fałszuję tożsamości; bez realnych
danych nie wolno pobierać płatności — KONSTYTUCJA §8). Next podbity do 14.2.35
(luka w 14.2.15). Do launchu potrzeba 5 rzeczy od właściciela — spisane w STAN
i README biznesu.

### Test sesji
Powiększa **Zdolność** (wielokrotny szablon e‑commerce) i tworzy pierwszy aktyw
**Reputacji** (publiczny sklep = kanał). Przechodzi Bramkę dźwigni.

### Następny krok
Właściciel: dane sprzedawcy + Vercel (Root Directory `biznes/001-hujkarta`, domena)
+ `STRIPE_SECRET_KEY` + realizacja fizyczna kart + akceptacja treści. Po deployu:
test Checkoutu (tryb testowy Stripe), potem webhook potwierdzeń.

*— Serowy Michał*

---

## Dzień 1 — deploy HEJKARTY: 404 mimo zielonego builda (ta sama data, wieczór)

### Punkt wyjścia
Właściciel przemianował produkt HUJKARTA → **HEJKARTA** (wszystkie odwołania w
kodzie, treściach i ścieżkach, PR #10). Po przemianowaniu i próbie deployu na
Vercelu strona zwracała **404 NOT_FOUND** mimo że build kończył się zielono
(„Build Completed", 14 tras wygenerowanych).

### Diagnoza (kolejne warstwy problemu)
1. **Warstwa 1 — Root Directory.** Po zmianie ścieżki katalogu na
   `biznes/001-hejkarta` ustawienie Root Directory w Vercelu dalej wskazywało
   starą ścieżkę `biznes/001-hujkarta` → build nie widział kodu. Poprawiono w
   Project Settings.
2. **Warstwa 2 — mój błąd: `outputDirectory` w vercel.json.** Widząc błąd
   „No Output Directory named public found", dodałem `vercel.json` z jawnym
   `outputDirectory: ".next"`. To NAPRAWIŁO build, ale **zepsuło deploy** —
   jawne ustawienie `outputDirectory` w projekcie Next.js wyłącza auto‑detekcję
   frameworka (`framework` spadło do `null` w `projectSettings`). Bez wykrytego
   frameworka Vercel przestaje uruchamiać właściwy builder Next.js (serverless
   functions, routing) i traktuje `.next` jak zwykły folder statyczny — stąd
   dalszy 404 mimo zielonego builda i istniejących tras.
3. **Warstwa 3 — target: preview, nie production.** Nawet gdy build był
   poprawny, deploy trafiał jako `target: null` (preview), bo Production
   Branch projektu to `main`, a pracujemy na `claude/session-planning-1fpm4p`.
   Domena produkcyjna `serowy-michal.vercel.app` nigdy nie dostawała nowego
   aliasu automatycznie.

### Naprawa
- Usunięto `vercel.json` całkowicie (i błędny wariant w rocie repo, i w
  `biznes/001-hejkarta/`) — czysta auto‑detekcja jest właściwym rozwiązaniem
  dla Next.js na Vercelu, nic nie trzeba nadpisywać ręcznie.
- Ustawiono `framework: "nextjs"` jawnie w Project Settings przez Vercel API
  (naprawia auto‑detekcję nawet gdyby coś ją znowu zgubiło).
- Utworzono nowy deployment z `target: "production"` bezpośrednio przez Vercel
  API (`POST /v13/deployments` z `gitSource` + `target: production`), plus
  przypięto alias `serowy-michal.vercel.app` do gotowego, poprawnego builda.
- Zweryfikowano: `curl https://serowy-michal.vercel.app/` → **HTTP 200**,
  realny HTML strony (nie 404).

### Rozumowanie
Klasyczna pułapka: naprawa jednego objawu (błąd o brakującym `public`)
wprowadziła gorszy, cichszy problem (routing przestał działać, ale build dalej
wyglądał na zielony). Lekcja ogólna: przy frameworkach z auto‑detekcją (Next.js
na Vercelu) nie nadpisywać ręcznie `outputDirectory`/`buildCommand`, chyba że
naprawdę trzeba — auto‑detekcja wie lepiej. Zapisane jako WNIOSKI L-011.

### Test sesji
Powiększa **Zdolność** (naprawiony, zweryfikowany na produkcji deploy +
wiedza o pułapce Vercel/Next.js) i **Reputację** (pierwszy publiczny aktyw
faktycznie działa pod adresem, nie tylko w kodzie).

### Następny krok
Właściciel śpi (~10h). W tle działa hourly trigger, który będzie kontynuował
pracę w granicach z `CLAUDE.md` (kod/docs/poprawki, zero publicznych ruchów i
pieniędzy). Po powrocie właściciela: review + merge PR #14 (sklepikFront) i
decyzja o blokadach sprzedaży HEJKARTY (STAN.md).

*— Serowy Michał*

---

## Dzień 1 — research: 3 realne kandydatury do portfela (ta sama data, później)

### Punkt wyjścia
Właściciel zlecił: zrobić dobry research i dopisać do `pomysly/` trzy **realne**
pomysły. Ryzyko z góry nazwane: to może być busywork (S-1) i „przeczucie zamiast
popytu" (S-3, L-001). Dlatego twardy wymóg: pkt 2 filtra AZYMUT („ktoś JUŻ
płaci") musi być **[FAKT] ze źródłem**, nie [ZGADYWANIE].

### Co zbudowano
Research (6 zapytań webowych, źródła 2026) → 3 kandydatów, każdy jako
`pomysly/NNN-slug/README.md` z pełnym filtrem AZYMUT i uczciwym werdyktem:
- **004 — Strażnik RODO** (rekom. #1): baner cookie + auto‑aktualizowane polityki
  prawne dla stron/sklepów PL. Płacący rynek [FAKT]: CookieYes od ~10 USD/mies,
  iubenda, Cookiebot; kary do €20 mln/4%, enforcement schodzi na małe firmy.
- **005 — Opiniomat** (rekom. #2): zbieranie + AI‑odpowiadanie na opinie Google
  dla lokalnych firm. Popyt [FAKT]: 19–99 USD/mies, opinie ~20% czynnika
  rankingu map, 82% konsumentów je czyta.
- **006 — Oddzwaniacz** (rekom. #3): missed‑call text‑back dla fachowców. Ból
  [FAKT] najbardziej policzalny: 85% dzwoniących nie oddzwania, strata
  16,8–252 tys. USD/rok; ceny 24,95–500 USD/mies.

### Rozumowanie (dlaczego takie uszeregowanie, nie „3 równe")
Ranking wg dopasowania do NASZEJ pozycji, nie ogólnej atrakcyjności:
- 004 wygrywa, bo jako jedyny ma **moat rosnący z czasem** (utrzymywane *polskie*
  prawo — nie do skopiowania jednym API), **retencję z natury problemu** (prawo
  się zmienia) i **dogfooding** (mamy już strony prawne w HEJKARCIE → niższy
  koszt startu).
- 005 ma najtwardszy popyt, ale rynek gęsty i słabsze dopasowanie kanału.
- 006 ma najbardziej policzalny ból, ale **realny koszt zmienny** (telefonia/SMS)
  łamie zaletę „produkcja darmowa" i wprowadza tarcie regulacyjne (prawo
  telekom + RODO). Stąd #3.
Wszystkie trzy: **DO-WALIDACJI, wstrzymane do E2** — zgodnie z AZYMUT nie
waliduję biznesu przed kanałem. To materiał na wybór wertykali, gdy pojawi się
realny sygnał, nie polecenie „budować teraz".

### Test sesji
Powiększa **Wiedzę** (3 zwalidowane popytowo kierunki z [FAKT], nie zgadywaniem)
i **Zdolność** (gotowy portfel kandydatów + kąt dogfoodingu 004). Przechodzi
Bramkę dźwigni. Nie jest busyworkiem, bo każdy pomysł ma metrykę taniej
falsyfikacji i wejdzie w grę dopiero przy sygnale z kanału.

### Następny krok
Bez zmian w priorytecie: kanał (E1) przed walidacją biznesu. Gdy właściciel
zdecyduje o E2 (sygnał z kanału) — pierwszy do taniego testu: 004 (landing +
darmowy skaner RODO jako lead‑magnet, metryka ≥20 zapisów/30 dni).

*— Serowy Michał*

---

## Dzień 1 — budowa testu: Oddzwaniacz landing (ta sama data, później)

### Punkt wyjścia
Właściciel: „to realizuj ten pomysł. zaczynaj". A potem: „zrobimy to B żeby działało
na naszej stronie. to będą tylko testy. hejkarty naprawdę nie działają. stworz na niej
dwie oddzielne strony, ta co jest teraz i do wyboru twoja która tworzysz z tym produktem".

Jasne polecenie: dwie strony na jednym sklepie (`serowy-michal.vercel.app`):
- `/` = HEJKARTA (obecna)
- `/oddzwaniacz` = nowy test produktu 006

### Co zbudowano
Landing page Oddzwaniacza (Next.js, `biznes/001-hejkarta/app/oddzwaniacz/page.tsx`):
- **Hero:** „nieodebrany = stracone zlecenie" + TAG „TEST | DEMO"
- **Kalkulator strat:** slider (ile połączeń/dzień) → wylicza stratę miesięczną/roczną
- **Jak to działa:** 4 kroki (dzwoni → SMS 30s → AI‑kwalifikacja → lista leadów)
- **FAQ:** 4 pytania (integracja, RODO, koszt)
- **Formularz:** e‑mail → zapis w localStorage (demo metryka)
- **Nawigacja:** przełącznik HEJKARTA / ODDZWANIACZ w headerze

Build: 15 tras, `/oddzwaniacz` 3.14 kB (static), zero błędów.

### Deployment
Commit `7dd9d95` wypchnięty na `claude/session-planning-1fpm4p`. Vercel auto‑buduje
preview. Status: BUILDING → do czekania.

### Test sesji
Powiększa **Zdolność** (landing page + kalkulator + forma zbierania maili) i
**Wiedzę** (test praktyczny — czy kalkulator przekonuje, ile ludzi wpisuje e‑mail).
Metryka: ≥20 e‑maili w localStorage w 30 dni = przebija próg walidacji.

### Następny krok
1. Deploy się skończy (~30s) → sprawdzić czy `/oddzwaniacz` żyje na produkcji.
2. Test przez kilka dni: czy wchodzą na stronę, czy wypełniają formularz.
3. Gdy pojawi się sygnał (≥5 maili/tydzień lub zwrotna wiadomość) → rozsądek mówi,
   żeby zbudować pełny MVP (integracja z bramką SMS, AI‑kwalifikacja).

Bez zmian w strategii: to tania falsyfikacja. Jeśli popyt nie wykaże się w localStorage,
a metryka jest zerowa — niech odpada i idziemy na 004 (Strażnik RODO).

*— Serowy Michał*

---

## Dzień 2 — 2026-07-13 (Wznowienie sesji)

### Punkt wyjścia
Sesja się restart'owała (kontener). Status check: `/oddzwaniacz` był deployowany wczoraj,
ale cache Vercela był stary (7h). Sprawdzenie: czemu `/oddzwaniacz` zwraca 404?

### Diagnoza + naprawa
Build lokalnie przechodzi (15 tras, `/oddzwaniacz` 3.14 kB). Problem: Vercel cache stary.
Rozwiązanie: empty commit + push (trigger rebuild). Rebuild: ~45 sekund.

Rezultat: `/oddzwaniacz` **LIVE** na `serowy-michal.vercel.app/oddzwaniacz`.
HTTP 200, HTML zawiera kalkulator, formularz, FAQ, wszystkie sekcje. ✓

### Status
- Walidacja Oddzwaniacza startuje teraz (7 dni).
- Metryka: localStorage zbiera e‑maile.
- Zero publiczności na razie (no promoted yet).
- Naturalny traffic: czekamy.

### Test sesji
Powiększa **Zdolność** (troubleshoot: Vercel cache + rebuild) i potwierdza
**Wiedzę** (kalkulator + landing działają jak zaplanowano, zero błędów runtime'u).
Przechodzi.

### Następny krok
1. Czekać 7 dni na localStorage (naturalne wejścia, metryka).
2. Gdy bym się obudził za 7 dni: czy localStorage >= 20 e‑maili?
   - TAK → Faza 2 (e‑mail sequence)
   - NIE → KILL, zaczynamy 004
3. Alternatywa: ty startuje TIER 1 (publikujesz) zaraz — to zmieni liczby.

*— Serowy Michał*
