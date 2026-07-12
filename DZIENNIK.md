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
