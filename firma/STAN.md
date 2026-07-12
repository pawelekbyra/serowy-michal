# STAN — wznów tutaj

Czytam na początku sesji, aktualizuję na końcu. Ma odpowiadać na jedno pytanie:
**jaka jest jedna następna najlepsza akcja?**

Ostatnia aktualizacja: 2026-07-12 (Dzień 1, przebudowa + budowa MVP HEJKARTA).

## Etap
**E1 — Kanał (w toku).** Właściciel wyznaczył pierwszy produkt (HEJKARTA), który
jest jednocześnie publicznym debiutem Serowego Michała. E0 (mózg) domknięte.
Etapy są bramkowane dowodem, nie datą — patrz `firma/AZYMUT.md`.

## Tablica Trzech Zasobów (jedyny majątek, który się liczy)
- **REPUTACJA:** wciąż 0 publicznego zasięgu, ale mamy gotowy pierwszy publiczny
  aktyw — sklep HEJKARTA. Zasięg ruszy po deployu i akceptacji treści.
- **ZDOLNOŚĆ:** ⬆️ wielokrotny stack e‑commerce (Next.js + Stripe + Vercel),
  sprawdzony lokalnie build. Szablon dla każdego kolejnego produktu. + mózg repo.
- **WIEDZA:** research 2026 + 8 lekcji w WNIOSKI.md.

## Co żyje (realne aktywa)
- ✅ MVP sklepu **HEJKARTA** — `biznes/001-hujkarta/` (Next.js 14 + Stripe).
  Build przechodzi, zweryfikowany lokalnie (desktop + mobile).
- ✅ Przebudowany mózg: `SEROWY-MICHAL.md`, `SLABOSCI.md`, `AZYMUT.md`, `PETLA.md`.
- ✅ Podpięte narzędzia (GitHub, Vercel, Stripe, Cloudflare, Gmail).
- Brak przychodu i zasięgu (OCZEKIWANE — czekamy na deploy + zgodę).

## Blokady przed sprzedażą HUJKARTY (wymagają właściciela)
1. **Dane sprzedawcy** do stron prawnych (nazwa, adres, NIP, e‑mail, adres
   zwrotów) — bez tego nie wolno pobierać płatności (twarda granica).
2. **Vercel** — podłączenie repo (Root Directory `biznes/001-hujkarta`) + domena
   `www.serowymichal.pl`.
3. **`STRIPE_SECRET_KEY`** w env Vercel (gdy ruszamy sprzedaż).
4. **Realizacja fizyczna** kart (druk + wysyłka) — do ustalenia.
5. **Akceptacja** treści publicznej (wulgarna nazwa) i uruchomienia płatności.

## Następna najlepsza akcja
**Oddać właścicielowi 5 blokad powyżej i po jego decyzji dokończyć launch.**
- Bramka dźwigni: HEJKARTA powiększa **Zdolność** (szablon e‑commerce) i
  uruchamia **Reputację** (pierwszy publiczny aktyw). Przechodzi.
- Po deployu: test Checkoutu w trybie testowym Stripe, potem ewentualny webhook
  (potwierdzenie zamówienia → e‑mail).
- Dunning (E-0001) pozostaje **wstrzymany** do E2.

## Zaktualizuj na koniec sesji
- [ ] `firma/STAN.md` — etap, tablica Zasobów, jedna następna akcja.
- [ ] `DZIENNIK.md` — wpis (co ZBUDOWANO, rozumowanie, następny krok).
- [ ] Warunkowo: WNIOSKI / REJESTR-DECYZJI / REJESTR-EKSPERYMENTOW / pomysly.
- [ ] Test sesji: czy powiększyła ≥1 z Trzech Zasobów?
