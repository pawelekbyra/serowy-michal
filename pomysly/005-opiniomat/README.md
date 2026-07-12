# Pomysł 005 — Opiniomat (zbieranie i obsługa opinii Google dla lokalnych firm)

- Status: DO-WALIDACJI
- Data dodania: 2026-07-12 (Dzień 1, research 3 pomysłów)
- Powiązany eksperyment: — (do założenia, gdy wejdzie do E2)
- Pitch (1 zdanie): Automatyczne zdobywanie nowych opinii Google i **AI‑odpowiadanie**
  na nie za lokalną firmę (gabinet, salon, warsztat, restauracja) — bo opinie
  wprost przekładają się na pozycję w mapach i na to, czy klient wejdzie.

## Na czym polega
Po wizycie/zakupie narzędzie wysyła klientowi prośbę o opinię (SMS/e‑mail) z
linkiem, przechwytuje niezadowolonych zanim trafią publicznie (feedback prywatny),
a na opinie publiczne generuje AI‑odpowiedzi w tonie firmy do akceptacji jednym
kliknięciem. Panel: monitoring opinii z wielu platform + trend oceny.

## Kto płaci i za co
Lokalne firmy usługowe walczące o widoczność w Google Maps. Płacą, bo **opinie
to ~20% czynnika rankingu local pack**, a 82% konsumentów czyta opinie przed
wyborem lokalnej firmy — czyli to bezpośrednio wpływa na liczbę klientów.

## Ocena wg filtra AZYMUT
1. Automatyzacja: ✅ prośby, przechwytywanie feedbacku, AI‑odpowiedzi = ≥80%
   automatu; człowiek tylko akceptuje wrażliwe odpowiedzi.
2. Zweryfikowany popyt: ✅ **[FAKT]** — płacący rynek: średnio 19–99 USD/mies,
   Famewall od 9,99 USD, Shapo, EmbedSocial, GMB API już zarabiają. Źródło:
   research 2026 (famewall.io, wiserreview.com, embedsocial.com).
3. Dystrybucja: ⚠️ **[HIPOTEZA]** — nasz kanał (build‑in‑public, śmieszna marka)
   niekoniecznie trafia w właściciela gabinetu; do sprawdzenia, czy da się tanio
   dotrzeć (lokalne grupy FB, partnerstwa, cold z przeglądem właściciela).
4. Retencja: ✅ subskrypcja; opinie to gra ciągła, nie jednorazowa.
5. Moat: ⚠️ **[HIPOTEZA]** — dane o skuteczności próśb + zgromadzone opinie
   (widget social‑proof) tworzą lock‑in, ale rynek jest **gęsty** i zależny od
   Google Business Profile API (ryzyko regulaminowe/platformowe).
6. Tania falsyfikacja: ✅ landing dla jednej niszy (np. warsztaty samochodowe PL)
   + metryka ≥20 zapisów w 30 dni.

## Otwarte ryzyko do rozstrzygnięcia
- **Zatłoczenie:** wielu graczy, więc trzeba wąskiej wertykali i kąta (np. tylko
  jedna branża PL z językiem i szablonami pod nią), nie „dla wszystkich".
- **Zależność platformowa:** Google GBP API i zasady dot. „gating" opinii
  (przechwytywanie negatywnych bywa na granicy regulaminu) — do rozeznania.
- **Koszt zmienny:** SMS‑prośby generują koszt na klienta (bramka SMS) — e‑mail
  tańszy; policzyć jednostkową ekonomię.

## Werdykt i uzasadnienie
**DO-WALIDACJI, rekomendacja #2.** Popyt najtwardszy [FAKT] z całej trójki, ale
dwa realne minusy: zatłoczony rynek i słabsze dopasowanie naszego kanału do
odbiorcy. Wygrywa tylko z wąską wertykalą + wyraźnym kątem. Nie buduję przed E2.

## Notatki / linki
- Filtr: `../../firma/AZYMUT.md`. Lekcje: `../../eksperymenty/WNIOSKI.md`.
- Research 2026: famewall.io, wiserreview.com, embedsocial.com, shapo.io.
