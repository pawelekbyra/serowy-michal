# Możliwości systemu — co potrafię robić TERAZ

Dokument dla właściciela i AI. Odpowiada na pytanie: **„co mogę prosić Serowego Michała, żeby zrobić w tej sesji bez czekania na dodatkową budowę?"**

**Aktualizuj ten plik co Fazę.** Gdy system się rozwijał, możliwości rosną.

---

## ✅ GOTOWE (mogę zrobić TERAZ — to nie blokuje mnie nic)

### Analiza i research
- ✅ Zbierać i analizować research rynkowy (konkurencja, ceny, trendy)
- ✅ Oceniać pomysły biznesowe przez filtr AZYMUT (6 punktów)
- ✅ Pisać spec produktu na podstawie researchu
- ✅ Mapować segmenty kupujących
- ✅ Analizować strategie konkurencji

### Operacje
- ✅ Planować eksperymenty (hipoteza, test, metryka, deadline)
- ✅ Prowadzić rozmowy z potencjalnymi klientami (jeśli właściciel poda kontakty)
- ✅ Pisać emails/outreach (draft — do akceptacji właściciela przed wysłaniem)
- ✅ Pisać dokumentację produktu (regulamin, polityka zwrotów, FAQ)

### Kodowanie
- ✅ Pisać kod (landing page, API handler, DB schema, automation)
- ✅ Testować kod, debugować
- ✅ Wdrażać na Vercel (jeśli mam dostęp)
- ✅ Zarządzać GitHub Issues (to repo)

### Dokumentacja
- ✅ Zarządzać tym repo (czytać, pisać, aktualizować rejestry)
- ✅ Prowadzić DZIENNIK (notatki, logi, decyzje)
- ✅ Pisać notatki do WNIOSKI.md (destylować lekcje)

---

## ❌ DO-BUDOWY (będą gotowe jako dzieje się Faza 0, 1, 2)

### Funkcjonalności prodaktu (będzie po MVP)
- ❌ Automatyczne wysyłanie maili (potrzeba webhook'u Stripe → Gmail lub SendGrid)
- ❌ Generowanie treści (potrzeba pipeline'u: D1 + Worker + API Claude)
- ❌ Integracja CRM (Zapier / Make / własne API)
- ❌ Monitoring i alerting (własny dashboard)

### Infrastruktura
- ❌ Własna domena (czeka na MVP)
- ❌ Stripe webhook'i (na razie konfigurujemy ręcznie)
- ❌ Database (D1) — gotowo do konfigu, ale bez live danych
- ❌ KV Store (Cloudflare) — gotów, ale nie używany

### Integracje
- ❌ Discord notifications (gdy klient zapłacił, gdy deadline bliska)
- ❌ Google Sheets integration (live metryki)
- ❌ Slack notifications (dla właściciela)

---

## 🔄 OBSZARY KTÓRE ROZWIJAM RÓWNOLEGLE

- **🔄 System pamięci** (ETAP 1) — ZAWSZE (każda sesja uczy się i wzbogaca WNIOSKI.md, REJESTR-DECYZJI.md)
- **🔄 Biznes** (ETAP 2) — POD WARUNKIEM, że system jest stabilny (Faza 0 skończona)

---

## Jak to używać

### Właściciel pyta "Czy mogę prosić Serowego, żeby...?"
1. Sprawdź czy jest na liście ✅ GOTOWE
2. Jeśli tak → prośba OK, może się zaraz zrobić
3. Jeśli nie (❌ DO-BUDOWY) → powiedz "będzie gotowe w Fazie X, teraz nie"

### Serowy Michał pyta siebie "Co mogę robić TERAZ?"
1. Przeczytaj sekcję ✅ GOTOWE
2. Wybierz z TODO, co pasuje do obecnego eksperymentu/biznesu
3. Jeśli nic nie pasuje → pracuj nad Fazą 0 (system)

---

## Tempo dodawania możliwości

- **Faza 0** (koniec): ✅ Kod (landing page, API), automatyzacja (D1+Worker)
- **Faza 1** (koniec): ✅ Email outreach, webhook'i Stripe
- **Faza 2** (koniec): ✅ CRM integracja, monitoring
- **Faza 3** (koniec): ✅ Full automation pipeline, multi-biznes
- **Faza 4** (continuous): ✅ Portfolio management, parallel experiments

---

## "Co by było super do zbudowania?"

Jeśli masz pomysł na funkcjonalność, która by ułatwiła pracę:
1. Dodaj do `system/ROADMAP-SYSTEMU.md` (sekcja "Idee")
2. Oceń: czy to blocks obecne TODO? (HIGH) czy nice-to-have? (LOW)
3. Zaproponuj w DZIENNIKU (dla właściciela + następna sesja)
