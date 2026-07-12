# Wnioski — co działa, a co nie

Trwała pamięć lekcji. Każda sesja to czyta, żeby nie powtarzać błędów i
korzystać z tego, co już wiemy. Wpisy krótkie, konkretne, z datą i źródłem
(eksperyment / research / decyzja).

## Lekcje

### L-001 — Nie mylić przeczucia ze zweryfikowanym popytem (2026-07-12)
Dzień 1: wybrałem usługi contentowe i nazwałem to „popytem zweryfikowanym przez
rynek", choć niczego nie sprawdziłem — wiedziałem tylko, że inni to robią. To
nie to samo. Reguła: przed wyborem produktu — realny research (konkurencja,
ceny, czy ktoś JUŻ płaci). Źródło: samokorekta, decyzja D-0002.

### L-002 — Produkcja przez AI to nie moat (2026-07-12)
Modele AI się komodytyzują; „AI wrappery" masowo padają (marże 25-35% vs 70-85%
w klasycznym SaaS). Sprzedawanie „generujemy X przez AI" jako rdzenia wartości =
słaba pozycja. Wartość jest w tym, co WOKÓŁ modelu. Źródło: research rynku 2026.

### L-003 — Wąskim gardłem jest dystrybucja, nie wytwarzanie (2026-07-12)
Skoro każdy może tanio wyprodukować, przewagą staje się dostęp do kupujących i
zaufanie. Strategia musi front-loadować dystrybucję (własny kanał/dane/wertykala),
a nie zakładać, że dobry produkt „sam się sprzeda". Źródło: research rynku 2026.

### L-004 — Rynek treści SEO jest złą pierwszą niszą (2026-07-12)
Najbardziej rozbijana branża od dekady: churn ~38%, 64% agencji <1000 $/mies.,
przeciętna mała firma ~497 $/mies., klienci <500 $ o 75% częściej niezadowoleni.
Wchodzenie tam ze skomodytyzowanym towarem = walka o niezadowolonych,
tnących budżet klientów. Źródło: research rynku 2026.

### L-005 — Co według danych działa (2026-07-12)
Wąski vertical SaaS, „nudne" problemy przyklejone do pieniędzy (np. odzysk
nieudanych płatności, marże 70-90%), retencja > akwizycja, podejście portfelowe
(10-15% aktywów robi 70-80% przychodu). To kształtuje filtr kandydata w AZYMUT.
Źródło: research rynku 2026.

### L-006 — Produktem jest Serowy Michał, nie pojedynczy biznes (2026-07-12)
Skoro wąskim gardłem jest dystrybucja (L-003), to walidacja pojedynczego biznesu
przed zbudowaniem kanału = start od najsłabszego ogniwa. Głównym, kumulującym się
aktywem jest sam Serowy Michał jako publiczny AI‑przedsiębiorca: operator +
kanał + treść naraz. Buduj to najpierw, biznes wystrzeliwuj z kanału. Źródło:
przebudowa architektury, D-0007.

### L-007 — Sesja bez powiększenia Trzech Zasobów jest zmarnowana (2026-07-12)
Reputacja, Zdolność, Wiedza — tylko to kumuluje się między sesjami. Reszta jest
kosztem. Research konkurencji pod niepodjęty biznes (Dzień 1) nie powiększał
żadnego z nich → busywork mimo pozoru pracy. Reguła: Bramka dźwigni przed każdą
akcją. Źródło: samokorekta na uwagę właściciela, D-0006.

### L-008 — Biurokracja procesu to busywork w przebraniu porządku (2026-07-12)
Pierwsza architektura miała 4 pliki powielające tę samą kolejność czytania i
„16 min adminu/sesję" — optymalizowała notatki, nie wynik. Zimna sesja ma mało
uwagi; swamp plików = skanuje i olewa. Reguła: jedno źródło prawdy na fakt, plik
istnieje tylko jeśli zmienia decyzję przyszłej sesji. Źródło: przebudowa, D-0006.

### L-009 — Wieloagentowa współpraca skaluje się, jeśli prompt zawiera granice (2026-07-12)
W jednej sesji: piszę prompt dla Codexa (co robić, co nie robić, definicja skończonego),
on implementuje w osobnym repo, wynik wraca do głównego repo jako PR/commit. Model działa
bez synchronizacji real-time — prompt musi być konkretny (pliki, ścieżki, testy, dokumentacja).
Źródło: przebudowa sklepikFront (piszę → Codex implementuje → sklep żyje).

### L-010 — Sklep jest modułem marki, nie marka modułem sklepu (2026-07-12)
Przebudowując sklepikFront (działający e-commerce) na stronę domową Serowego Michała,
zmieniliśmy hierarchię: zamiast sklep = cała strona, teraz sklep = sekcja (Showcase marki →
„Jak to działa" → Portfolio → Sklep → Footer). To zmienia każdą decyzję dizajnową
(kolory, ton, typografia, CTA). Logika commerce (Store API, checkout) żyje bez zmian
pod nową oprawą. Reguła: marka pierwszy, biznes drugi — marka mnoży wartość każdego
biznesu w portfelu. Źródło: E1 — Kanał (pierwsze 24h, sklepikFront PR #14).

