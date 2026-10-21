# lern.link PM-Training – Web-App

**Live:** https://pm-training-scaled-innovation.vercel.app
**Trainer:** https://pm-training-scaled-innovation.vercel.app/#trainer (Login mit Supabase-Auth-Konto)

Stack: statische Seite (Vercel, Auto-Deploy aus `main`) · Supabase-Projekt `pm-training` (Datenbank, Realtime, Auth) · GitHub `Scaled-Innovation/pm-training`.

## Betrieb

- **Teilnehmer-Link**: die Live-URL ohne `#trainer`. Kein Login. Name unten eintragen, loslegen. Antworten laufen live beim Trainer ein.
- **Trainer**: `#trainer` anhängen → Anmeldung. Regie-Spalte rechts: Folie für alle öffnen, Ergebnisse freigeben, Zähler, Zurufe, Export, Reset. Oben „Abmelden“.
- **Mehrere Gruppen**: Gruppenname eintragen → nach dem Training *Export CSV/JSON* → *Alle Teilnehmer-Antworten löschen* + *Sitzung zurücksetzen*.
- **Folgetermin**: vorher nicht löschen (oder exportieren). Teilnehmer öffnen denselben Link auf demselben Gerät; Antworten und Erfolgsturbo-Pläne sind wieder da.

## Änderungen

Dateien in `main` ändern (Folieninhalte in `slides1-3.js`, Schaubilder in `viz.js`, Logik in `index.html`) → Vercel deployt automatisch.

## Supabase

- Tabellen, Zugriffsregeln (RLS), Grants und Realtime: `supabase-setup.sql` (bereits ausgeführt).
- Zugangsdaten in `config.js`: Project URL + Publishable Key (öffentlich; RLS begrenzt den Zugriff).
- Trainer-Konten: Supabase → Authentication → Users. Jedes Konto dort darf die Trainer-Ansicht nutzen.
- Teilnehmer werden am Gerät erkannt (zufällige ID im Browser). Anderes Gerät = neuer Teilnehmer.
- Fällt Realtime aus, aktualisiert die Seite alle 2,5 s per Abfrage.
