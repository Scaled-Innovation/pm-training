# lern.link PM-Training – Web-App (Supabase)

## Einmalige Einrichtung (ca. 10 Minuten)

1. **Datenbank**: Supabase → Projekt `pm-training` → *SQL Editor* → Inhalt von `supabase-setup.sql` einfügen → *Run*.
2. **Trainer-Login**: *Authentication → Users → Add user* → deine E-Mail + Passwort (Auto-Confirm anhaken).
3. **Zugangsdaten**: *Project Settings → API* → `Project URL` und `anon public` Key in `config.js` eintragen.
4. **Hochladen**: Den kompletten Ordner auf einen statischen Host legen, z. B.
   - https://app.netlify.com/drop (Ordner ins Fenster ziehen, fertig, kostenlos) oder
   - ein Unterverzeichnis eurer Website (`scaled-innovation.com/pm-training/`).
   Alle Dateien müssen nebeneinander liegen: `index.html`, `config.js`, `shim.js`, `viz.js`, `slides1-3.js`.

## Betrieb

- **Teilnehmer-Link**: `https://…/index.html` – kein Login, Name unten eintragen, loslegen. Antworten laufen live beim Trainer ein.
- **Trainer**: `https://…/index.html#trainer` → Anmeldung mit E-Mail/Passwort. Danach Regie-Spalte rechts, „Abmelden“ oben.
- **Mehrere Gruppen**: Gruppenname eintragen → nach dem Training *Export CSV/JSON* → *Alle Teilnehmer-Antworten löschen* und *Sitzung zurücksetzen*.
- **Folgetermin**: Vorher nicht löschen (oder exportieren). Teilnehmer öffnen denselben Link auf demselben Gerät; ihre Antworten und Pläne sind wieder da.

## Hinweise

- Der `anon`-Key darf öffentlich sein; die Zugriffsregeln (RLS) in der SQL-Datei begrenzen, was damit geht.
- Teilnehmer werden am Gerät erkannt (zufällige ID im Browser). Anderes Gerät = neuer Teilnehmer.
- Ohne Realtime-Freischaltung aktualisiert die Seite alle 2,5 Sekunden per Abfrage – funktioniert ebenfalls.
