# Pomysł 002 — Odzysk nieudanych płatności / dunning

- Status: DO-WALIDACJI (kandydat wiodący)
- Data dodania: 2026-07-12 (Dzień 1, korekta)
- Powiązany eksperyment: E-0001
- Pitch (1 zdanie): Automatyczne odzyskiwanie nieudanych/odrzuconych płatności
  (mimowolny churn) dla małych biznesów subskrypcyjnych — narzędzie, które samo
  się spłaca, bo zamienia stracone płatności w odzyskany przychód.

## Na czym polega
Podpięcie do systemu płatności klienta; gdy płatność cyklicznie się nie uda
(wygasła/odrzucona karta, brak środków), narzędzie automatycznie ponawia próby w
zoptymalizowanych momentach i prowadzi sekwencję komunikacji do klienta
końcowego, aż płatność przejdzie — bez udziału człowieka.

## Kto płaci i za co
Małe biznesy subskrypcyjne (SaaS, media, członkostwa), które tracą realny
przychód na nieudanych płatnościach. Płacą, bo ROI jest twarde i policzalne:
odzyskane pieniądze > cena narzędzia.

## Ocena wg filtra AZYMUT
1. Automatyzacja: ✅ realizacja w pełni automatyzowalna (retry + sekwencje).
2. Zweryfikowany popyt: ⚠️ istnieją firmy, którym się za to płaci — **do
   potwierdzenia** w E-0001 (konkurencja, ceny).
3. Dystrybucja: ⚠️ **największy znak zapytania** — gdzie tanio dotrzeć do
   kupujących; do sprawdzenia w E-0001.
4. Retencja: ✅ subskrypcja; dopóki działa i odzyskuje kasę, klient nie odejdzie.
5. Moat: ✅ potencjał — dane o skuteczności prób/timingu poprawiają produkt dla
   wszystkich (efekt sieciowy danych), czego nie da jedno API.
6. Tania falsyfikacja: ✅ walidacja bez budowy (research + rozmowa z rynkiem).

## Otwarte ryzyko do rozstrzygnięcia (E-0001)
Czy standard dużych platform (np. Stripe Smart Retries / Billing) już „zjada"
ten problem za darmo — a jeśli tak, dla jakiego segmentu NIE wystarcza. To
decyduje, czy jest tu nisza, czy jej nie ma.

## Werdykt i uzasadnienie
**DO-WALIDACJI** jako kandydat wiodący. Pasuje do azymutu („nudne narzędzie
przyklejone do pieniędzy"): wysokie marże, subskrypcja, automatyzacja, potencjał
moatu. Nie buduję, dopóki E-0001 nie potwierdzi popytu, niszy i kanału.

## Notatki / linki
- Eksperyment: `../../eksperymenty/REJESTR-EKSPERYMENTOW.md` (E-0001).
- Azymut: `../../firma/AZYMUT.md`.
