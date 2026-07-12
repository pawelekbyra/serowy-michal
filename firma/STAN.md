# STAN — wznów tutaj

Czytam na początku sesji, aktualizuję na końcu. Ma odpowiadać na jedno pytanie:
**jaka jest jedna następna najlepsza akcja?**

Ostatnia aktualizacja: 2026-07-12 (Dzień 1, wieczór — HEJKARTA live na Vercel,
sklepikFront PR #14 czeka na merge właściciela).

## Etap
**E1 — Kanał (w toku).** Właściciel wyznaczył pierwszy produkt (HEJKARTA), który
jest jednocześnie publicznym debiutem Serowego Michała. E0 (mózg) domknięte.
Etapy są bramkowane dowodem, nie datą — patrz `firma/AZYMUT.md`.

## Tablica Trzech Zasobów (jedyny majątek, który się liczy)
- **REPUTACJA:** wciąż 0 zewnętrznego zasięgu (nic nie opublikowane publicznie),
  ale pierwszy publiczny aktyw **żyje pod adresem** `serowy-michal.vercel.app`
  (HTTP 200, zweryfikowane). Drugi front (sklepikFront → dom marki Serowy
  Michał) gotowy jako PR #14, czeka na merge właściciela.
- **ZDOLNOŚĆ:** ⬆️ wielokrotny stack e‑commerce (Next.js + Stripe + Vercel),
  zweryfikowany na produkcji (nie tylko lokalnie). + mózg repo. + doświadczenie
  z debugowania Vercel monorepo (patrz WNIOSKI L-011).
- **WIEDZA:** research 2026 + 10 lekcji w WNIOSKI.md (L-009/L-010 o
  współpracy wieloagentowej i hierarchii marka>biznes; L-011 o Vercel).

## Co żyje (realne aktywa)
- ✅ **HEJKARTA jest LIVE**: `serowy-michal.vercel.app` zwraca HTTP 200 z
  realną stroną (Next.js 14 + Stripe, `biznes/001-hejkarta/`). Sprzedaż
  pozostaje wyłączona (brak `STRIPE_SECRET_KEY` na produkcji — celowo).
- 🔶 **sklepikFront PR #14** (osobne repo, żywy sklep Kakałowy Sklepik →
  przebudowany na dom marki Serowy Michał przez Codexa): otwarty, mergeable,
  czeka na review i merge właściciela — NIE mergowany autonomicznie (zmiana
  na produkcyjnym, żywym sklepie z realnym checkoutem, poza granicą
  autonomicznej pracy). **Zweryfikowane lokalnie (2026-07-12, wieczór):**
  `npm run build` ✅, `npm run check` (Biome) ✅, `npm run test` (97/97) ✅.
  Błąd builda w opisie PR (fetch fonta Google) był problemem środowiska
  Codexa, nie realnym bugiem — potwierdzone, PR jest technicznie gotowy do
  merge, brakuje tylko decyzji właściciela.
- ✅ Przebudowany mózg: `SEROWY-MICHAL.md`, `SLABOSCI.md`, `AZYMUT.md`, `PETLA.md`.
- ✅ Podpięte narzędzia (GitHub, Vercel, Stripe, Cloudflare, Gmail).
- Brak przychodu i zasięgu (OCZEKIWANE — sprzedaż celowo wyłączona, zasięg
  czeka na zgodę właściciela na publiczną komunikację).

## Blokady przed sprzedażą HEJKARTY (wymagają właściciela)
1. **Dane sprzedawcy** do stron prawnych (nazwa, adres, NIP, e‑mail, adres
   zwrotów) — bez tego nie wolno pobierać płatności (twarda granica).
2. **`STRIPE_SECRET_KEY`** w env Vercel (gdy ruszamy sprzedaż).
3. **Realizacja fizyczna** kart (druk + wysyłka) — do ustalenia.
4. **Akceptacja** treści publicznej i uruchomienia płatności.
5. **Merge PR #14** w sklepikFront (właściciel — dotyczy żywego, produkcyjnego
   sklepu z realnym checkoutem, nie robię tego bez przeglądu).

## Następna najlepsza akcja
**Właściciel: review + merge PR #14 (sklepikFront) i decyzja o 4 blokadach
sprzedaży HEJKARTY powyżej.**
- Bramka dźwigni: HEJKARTA powiększa **Zdolność** (szablon e‑commerce,
  zweryfikowany na produkcji) i **Reputację** (pierwszy żywy publiczny aktyw).
  Przechodzi.
- Po decyzji o sprzedaży: test Checkoutu w trybie testowym Stripe, potem
  ewentualny webhook (potwierdzenie zamówienia → e‑mail).
- Dunning (E-0001) pozostaje **wstrzymany** do E2.
- W tle: hourly trigger (`trig_019aVhT2Vund3gALRK5z1VQN`) kontynuuje pracę
  autonomicznie w granicach z `CLAUDE.md`, dopóki właściciel nie wróci.

## Zaktualizuj na koniec sesji
- [ ] `firma/STAN.md` — etap, tablica Zasobów, jedna następna akcja.
- [ ] `DZIENNIK.md` — wpis (co ZBUDOWANO, rozumowanie, następny krok).
- [ ] Warunkowo: WNIOSKI / REJESTR-DECYZJI / REJESTR-EKSPERYMENTOW / pomysly.
- [ ] Test sesji: czy powiększyła ≥1 z Trzech Zasobów?
