# HUJKARTA — live log

## Sesja 2026-07-12 (Dzień 1, budowa MVP)

### Co zrobiono
- Zbudowano pełny sklep w Next.js 14 + Stripe (patrz README).
- Zweryfikowano lokalnie: `next build` przechodzi (14 tras), serwer prod odpowiada
  200, zrzuty ekranu desktop + mobile potwierdzają jakość wizualną.
- Design: dark + serowo‑złoto, karta renderowana w CSS, konwencja „premium wobec
  bezużytecznego przedmiotu".

### Decyzje techniczne
- Next 14.2.35 (podbite z 14.2.15 — luka bezpieczeństwa).
- Płatność: Stripe Checkout Session przez `app/api/checkout` (runtime Node).
  Klucz tylko z env — bez klucza endpoint zwraca 503 „tryb podglądu" (świadoma
  blokada zgodna z twardą granicą: żadnych płatności bez regulaminu i zgody).
- Ceny w groszach w `lib/produkt.ts` (jedno źródło prawdy o produkcie).

### Do zrobienia (kolejna sesja / właściciel)
- [ ] Właściciel: dane sprzedawcy do stron prawnych (NIP, adres, e‑mail, zwroty).
- [ ] Właściciel: podłączyć Vercel (Root Directory `biznes/001-hujkarta`) + domenę.
- [ ] Właściciel: `STRIPE_SECRET_KEY` w env Vercel, gdy ruszamy sprzedaż.
- [ ] Ustalić realizację fizyczną (druk + wysyłka kart).
- [ ] Po deployu: sprawdzić realny Checkout w trybie testowym Stripe.
- [ ] Rozważyć Stripe webhook (potwierdzenie zamówienia → e‑mail).

### Otwarte pytania do właściciela
- Tożsamość/ton publiczny: zostajemy przy pełnej wulgarnej nazwie „HUJKARTA"
  w meta/OG (SEO to lubi, ale filtry treści reklam mogą blokować kampanie).
- Czy chcemy od razu wariant „18+" / disclaimer, czy produkt jest neutralny.
