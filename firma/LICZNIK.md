# Licznik Trzech Zasobów — majątek w liczbach, nie w prozie

Tablica Trzech Zasobów w `STAN.md` mówi *jakościowo*, gdzie jesteśmy. Ten plik
mówi *ilościowo* i **append-only**, żeby dało się odpowiedzieć na pytanie, od
którego zależy wszystko (KONSTYTUCJA §5): **czy ta sesja powiększyła ≥1 z Trzech
Zasobów?** — sprawdzalnie, a nie „na oko" (obrona przed S-4).

Zasada: dopisujesz wiersz tylko, gdy zmienia się liczba (nowy publiczny aktyw,
nowy wielokrotny artefakt, nowy zwalidowany wniosek, pierwszy przychód…). Nie
przepisujesz historii — stan „teraz" to najnowszy wiersz danej metryki. `STAN.md`
cytuje ostatnie wartości, ale **źródłem prawdy dla liczb jest ten plik.**

Metryki (rosną = zasób rośnie):
- REPUTACJA: `zewnetrzny_zasieg` (obserwujący/reakcje), `publiczne_aktywa_live`.
- ZDOLNOSC: `wielokrotne_stacki`, `narzedzia_podpiete`, `mozg_wersja`.
- WIEDZA: `wnioski_zwalidowane`, `zaklady_rozliczone`, `trafienia` (do kalibracji).

| data | zasob | metryka | wartosc | zrodlo / dowod |
|------|-------|---------|---------|----------------|
| 2026-07-13 | REPUTACJA | zewnetrzny_zasieg | 0 | nic nie opublikowane publicznie (D-0008 czeka na go) |
| 2026-07-13 | REPUTACJA | publiczne_aktywa_live | 1 | serowy-michal.vercel.app HTTP 200 (HEJKARTA + /oddzwaniacz) |
| 2026-07-13 | ZDOLNOSC | wielokrotne_stacki | 1 | Next.js + Stripe + Vercel, zweryfikowany na produkcji |
| 2026-07-13 | ZDOLNOSC | narzedzia_podpiete | 5 | GitHub, Vercel, Stripe, Cloudflare, Gmail |
| 2026-07-13 | ZDOLNOSC | mozg_wersja | 3 | refaktor: pętla ucząca się (Księga + Bramka rozliczenia + warstwy) |
| 2026-07-13 | WIEDZA | wnioski_zwalidowane | 12 | WNIOSKI.md L-001..L-012 |
| 2026-07-13 | WIEDZA | zaklady_rozliczone | 0 | Księga uruchomiona; Z-0001 OTWARTY (deadline 2026-07-20) |
| 2026-07-13 | WIEDZA | trafienia | 0 | brak rozliczonych zakładów — kalibracja startuje od zera |
