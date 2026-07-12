# Pomysł 004 — Strażnik RODO (zgodność prawna dla stron/sklepów PL)

- Status: DO-WALIDACJI (kandydat wiodący dla naszej pozycji EU)
- Data dodania: 2026-07-12 (Dzień 1, research 3 pomysłów)
- Powiązany eksperyment: — (do założenia, gdy wejdzie do E2)
- Pitch (1 zdanie): Baner zgód cookie + generator i **automatyczna aktualizacja**
  polityki prywatności/regulaminu/cookie dla polskich stron i sklepów — narzędzie,
  które trzyma małą firmę w zgodzie z RODO, gdy prawo się zmienia, bez prawnika.

## Na czym polega
Właściciel strony wkleja jeden skrypt. Narzędzie: (1) skanuje stronę i wykrywa
cookies/trackery, (2) serwuje zgodny baner zgód (Consent Mode v2), (3) generuje
polityki prawne dopasowane do jego danych, (4) **utrzymuje je aktualnymi**, gdy
zmienia się prawo (np. Digital Omnibus / nowe wytyczne EROD). Rejestr zgód
przechowywany jako dowód zgodności.

## Kto płaci i za co
Małe firmy z witryną/sklepem, które mają obowiązek prawny, ale nie mają
prawnika ani działu compliance. Płacą za **spokój i przerzucenie ryzyka**:
tańsze niż kancelaria, a kara realna.

## Ocena wg filtra AZYMUT
1. Automatyzacja: ✅ skan + generowanie + baner + aktualizacje = w pełni
   automatyzowalne, człowiek tylko przy zmianie prawa (aktualizacja szablonu).
2. Zweryfikowany popyt: ✅ **[FAKT]** — płacący rynek istnieje: CookieYes od
   ~10 USD/mies, iubenda, Cookiebot, Termly, Usercentrics. Enforcement rośnie i
   **schodzi na małe firmy**, kary do €20 mln / 4% obrotu. Źródło: research
   2026 (clym.io, cookieyes.com, usercentrics.com).
3. Dystrybucja: ✅ **najlepsze dopasowanie do naszego kanału** — polski,
   EU‑świadomy odbiorca; do tego **dogfooding**: sami mamy strony prawne w
   HEJKARCIE, więc budujemy z pozycji użytkownika, nie zgadywacza.
4. Retencja: ✅✅ subskrypcja z **naturalnym powodem trwania**: prawo się zmienia,
   więc „jednorazowy generator" nie wystarcza — klient płaci za bycie na bieżąco.
5. Moat: ✅ **[HIPOTEZA]** — utrzymywana baza *polskiego* prawa + rejestr zgód +
   zaufanie marki. Lokalnej wiedzy prawnej nie skopiuje jedno API (to nie jest
   „opakowany LLM"); moat rośnie z każdą aktualizacją.
6. Tania falsyfikacja: ✅ landing „Sprawdź, czy Twoja strona jest zgodna z RODO"
   + darmowy skaner cookies jako lead‑magnet; metryka: ≥20 zapisów w 30 dni.

## Otwarte ryzyko do rozstrzygnięcia
- **Odpowiedzialność:** nie sprzedajemy „porady prawnej" — sprzedajemy narzędzie
  + szablony z disclaimerem. Granicę trzeba ustawić od początku (KONSTYTUCJA).
- **[HIPOTEZA] do obalenia:** czy darmowe wtyczki WordPress + free tier
  CookieYes „zjadają" dolny segment — jeśli tak, gdzie zaczyna się płacący ból
  (własny rejestr zgód? aktualizacje pod PL prawo? sklepy poza WordPress?).

## Werdykt i uzasadnienie
**DO-WALIDACJI, rekomendowany #1 z tej trójki.** Jedyny, którego moat (lokalne
prawo) rośnie z czasem i którego retencja wynika z samej natury problemu (prawo
się zmienia). Dodatkowo dogfooding obniża koszt startu. Nie buduję przed E2.

## Notatki / linki
- Filtr: `../../firma/AZYMUT.md`. Lekcje: `../../eksperymenty/WNIOSKI.md`.
- Research 2026: cookieyes.com, clym.io, usercentrics.com, iubenda.com.
