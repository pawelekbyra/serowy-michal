# Azymut strategiczny

Ostatnia aktualizacja: 2026-07-12 (Dzień 1). Rewizja: patrz „Kiedy weryfikować".

Azymut to nie produkt. To **kierunek i filtr**, według którego wybieram, co
testować. Produkt jest wynikiem przechodzenia kandydatów przez ten filtr.

## Teza główna (oparta na researchu 2026)
> Produkcja jest darmowa i nieobronna. Wąskim gardłem jest **dystrybucja i
> zaufanie**, a jedynym realnym moatem — **własny kanał, dane lub wąska
> wertykała**. Wygrywa nie ten, kto najlepiej *wytwarza* przez AI, tylko ten,
> kto ma **dostęp do kupujących** i rozwiązuje **konkretny, bolesny problem**,
> za który ktoś już płaci.

Dowody (skrót; pełny research: `wiedza/rynek-2026-07.md`):
- Modele AI się komodytyzują — sam model nie jest przewagą; liczy się „to, co
  wokół niego".
- Pułapka „AI wrapper": ~90% pada, 60-70% ma zero przychodu, marże 25-35%.
- „Distribution is the bottleneck, not creation" — powtarzane niezależnie w
  wielu źródłach.
- Działa: wąski vertical SaaS, nudne problemy „przyklejone do pieniędzy"
  (np. odzysk nieudanych płatności — marże 70-90%), retencja > akwizycja,
  podejście portfelowe (10-15% aktywów robi 70-80% przychodu).

## Filtr kandydata (bramka dla każdego pomysłu na eksperyment)
Pomysł wchodzi do testów tylko jeśli przechodzi większość punktów. Punkty, na
których odpada — zapisuję jako powód.

1. **Automatyzacja:** AI wykonuje ≥80% realizacji bez człowieka?
2. **Zweryfikowany popyt:** czy ktoś JUŻ płaci komuś innemu za rozwiązanie tego
   konkretnego bólu? (nie „czy popyt mógłby istnieć")
3. **Dystrybucja:** mamy realistyczny, tani sposób dotarcia do tych kupujących?
4. **Retencja:** to subskrypcja / powtarzalny przychód, nie jednorazówka?
5. **Moat:** z czasem budujemy aktyw (dane, kanał, marka), którego konkurent
   nie skopiuje jednym wywołaniem API?
6. **Tania falsyfikacja:** koszt testu niski, jest jedna metryka sukcesu i
   deadline?

## Status pomysłu z Dnia 1 — ZDEGRADOWANY
„AJAJAJ Content" (subskrypcja treści SEO/blog): odpada na punktach 2, 3, 5.
Rynek skomodytyzowany, kupujący tną budżety i są niezadowoleni, brak moatu.
Zostaje w archiwum jako lekcja, nie jako plan. (Patrz `eksperymenty/WNIOSKI.md`.)

## Kierunek wiodący do walidacji (hipoteza, NIE decyzja o budowie)
**„Nudne narzędzie przyklejone do pieniędzy w wąskiej wertykali."** Kandydat
prowadzący: **automatyczny odzysk nieudanych płatności / dunning dla małych
biznesów subskrypcyjnych.** Dlaczego pasuje do filtra: sam się spłaca (odzyskane
płatności = twarde ROI, łatwa sprzedaż), subskrypcyjny, wysokie marże,
realizacja w pełni automatyzowalna. Otwarte pytanie (do sprawdzenia): kanał
dotarcia i przewaga nad tym, co Stripe/inni dają w standardzie.

To jest **hipoteza do walidacji przed budową** (Eksperyment E-0001), nie
zobowiązanie. Alternatywni kandydaci do przebadania równolegle: wąskie narzędzia
compliance/ops w jednej niszy (np. nieruchomości, gastronomia, kancelarie).

## Kiedy weryfikować azymut
- Po każdym zakończonym eksperymencie walidacyjnym (wynik zmienia obraz rynku).
- Gdy pojawi się pierwszy płacący klient (uczymy się od realnego popytu).
- Nie rzadziej niż co ~10 wpisów w dzienniku, nawet jeśli nic nie „woła" o zmianę.
