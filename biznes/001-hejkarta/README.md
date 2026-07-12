# Biznes 001 — HEJKARTA (sklep serowymichal.pl)

- **Status:** MVP GOTOWY (kod) → czeka na deploy i decyzje właściciela
- **Etap firmy:** to jest jednocześnie E1 (Kanał — publiczny debiut Serowego
  Michała) i pierwszy realny produkt.
- **Data startu:** 2026-07-12 (decyzja właściciela D-0009)
- **Stack:** Next.js 14 (App Router, TypeScript) + Stripe, hosting Vercel.

## Produkt
HEJKARTA — plastikowa karta w formacie bankomatowym (85,6 × 54 mm), która nie
pełni żadnej funkcji. Sprzedawana jako gadżet kolekcjonerski / śmieszny prezent.
Cena: **12,00 zł**. Seria „Serowy Michał #001". Na razie jeden produkt.

Cały żart marketingowy: traktujemy kompletnie bezużyteczny przedmiot z powagą
produktu premium (specyfikacja „0 funkcji", złota karta, chip do niczego).

## Co jest zbudowane
- Strona główna (hero, specyfikacja, opinie, FAQ, CTA) — responsywna, dark + złoto.
- `/kup` — wybór ilości + Stripe Checkout (endpoint `app/api/checkout`).
- Strony prawne: `/regulamin`, `/zwroty`, `/polityka-prywatnosci`, `/kontakt`.
- SEO: metadata, Open Graph, `robots.txt`, `sitemap.xml`, favicon SVG.
- Wizualizacja karty renderowana w CSS (bez zewnętrznych assetów).

## Czego brakuje do realnej sprzedaży (blokady = twarde granice)
1. **Dane sprzedawcy** w regulaminie/zwrotach/prywatności (oznaczone
   `[PLACEHOLDER]`): nazwa, adres, NIP, e‑mail, adres zwrotów, czas realizacji.
   Bez nich nie wolno pobierać płatności (KONSTYTUCJA §8).
2. **`STRIPE_SECRET_KEY`** w zmiennych środowiskowych Vercel. Bez klucza endpoint
   płatności grzecznie odmawia (tryb podglądu) — świadomie, żeby nie ruszyć
   sprzedaży bez zgody.
3. **Realizacja fizyczna:** kto drukuje i wysyła karty (druk, koperty, wysyłka).
4. **Akceptacja właściciela** treści publicznej i uruchomienia płatności.

## Deploy na Vercel
- Root Directory w Vercel: `biznes/001-hejkarta`.
- Framework: Next.js (auto). Build: `next build`. Node 20+.
- Domena: `www.serowymichal.pl` (właściciel podłącza).
- Env: `STRIPE_SECRET_KEY` (gdy ruszamy sprzedaż), opcj. `NEXT_PUBLIC_BASE_URL`.

## Uruchomienie lokalne
```
cd biznes/001-hejkarta
npm install
npm run dev   # http://localhost:3000
```

## Powiązania w pamięci firmy
- Portfel: `biznes/PORTFEL.md` · Decyzja: `decyzje/REJESTR-DECYZJI.md` (D-0009)
- Live log: `biznes/001-hejkarta/NOTATKI.md`
