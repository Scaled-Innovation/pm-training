window.SLIDES=(window.SLIDES||[]).concat([
{id:'checkin',min:5,title:'Ankommen',kind:'poll',max:1,
 h:'Willkommen. <em>Im Driver Seat</em> statt auf dem Beifahrersitz.',
 lead:'Zwei Stunden Kern, dazu Vertiefungen. Ein Ziel: Projekte bei lern.link so führen, dass nichts liegen bleibt, Meilensteine pünktlich kommen und jeder weiß, wer gerade den Ball hat.',
 q:'Mit welchem Gefühl kommst du aus deinem letzten Kundenprojekt?',
 opts:['Entspannt – lief rund','Okay – ein paar Stolpersteine','Angespannt – viel Nachfassen nötig','Erschöpft – zu viele Baustellen gleichzeitig'],
 extra:`<div class="block"><h3>Spielregeln</h3><ul class="clean"><li>Kamera an, Mikro frei. Das ist ein Workshop.</li><li>Trage unten in der Leiste deinen Namen ein. Jede Übung läuft auf deinem Gerät, ohne Anmeldung.</li><li>Deine Antworten laufen live beim Trainer ein. Das Teambild erscheint, sobald er es freigibt.</li><li>Alle Beispiele stammen aus eurer Retro und euren Projekten.</li></ul></div>`,
 notes:{goal:'Technik-Check durch einen Klick, Stimmung sichtbar machen.',
  steps:['Link posten. Jeder trägt unten seinen Namen ein und klickt beim Check-in eine Antwort an.','Prüfen, dass unter „Ergebnisse“ rechts die Antworten eintreffen (Zähler rechts nur für Leute ohne Gerät).','Freigeben, Ergebnis in einem Satz spiegeln.','Agenda in einem Satz: Grundlagen → Übergabe & Einstieg → Planung → Führen → Steuern → Erfolgsturbo.','Erklären: Folien mit ★ sind Vertiefung – kommen dran, wenn Zeit ist, sonst in Teil 2.'],
  bg:'Teilnehmer brauchen keinen Account. Jede Antwort wird sofort übertragen; du siehst sie unter „Ergebnisse“, die Teilnehmer erst nach Freigabe.',
  bridge:'Retro: „Zu viele gleichzeitige Baustellen“, „Noch sehr viele offene Aufgaben“.',ifstuck:'Jemand kann nicht abstimmen → Zuruf, rechts unter „Zählen“ eintragen.'}},

{id:'why',min:5,title:'Warum sind wir hier',kind:'poll',max:3,
 h:'Was eure Retro gesagt hat',
 lead:'Die Probleme sind benannt. Heute werden sie zu Handwerk.',
 q:'Welche drei Punkte treffen deinen Alltag am stärksten? (bis zu 3)',
 opts:['Aufgaben bleiben liegen, keine Rückmeldung','Unklar, wer gerade zuständig ist','Kunde liefert nicht oder ändert seine Pläne','Vorwurfsvoller Ton bei Rückfragen','Zu viele gleichzeitige Baustellen','Übergabe Kundenbetreuung ↔ Technik dauert','Rechnung kann nicht zeitnah gestellt werden','Meetings ohne Ergebnis oder Timebox'],
 extra:`<div class="block"><h3>Drei Muster hinter den Zetteln</h3><div class="cards"><div class="card a"><h4>Der Ball liegt im Niemandsland</h4><p>„Wer gibt was weiter?“, „KuBe bekommt keine Rückmeldung“, „Themen verlaufen im Sande“.</p></div><div class="card r"><h4>Verbindlichkeit fehlt nach außen</h4><p>„Kunde ändert seine Pläne“, „Abrechnung abhängig von Kunden-Doing“, „Ansprechpartner plötzlich weg“.</p></div><div class="card v"><h4>Pläne werden nicht gepflegt</h4><p>„Terminplanung nicht vollständig“, „Risiken werden nicht frühzeitig erkannt“, „Zu wenig feste Zeiten“.</p></div></div></div>`,
 notes:{goal:'Betroffenheit: Das Training ist aus ihrer Retro gebaut.',
  steps:['2 Min abstimmen, freigeben.','Top 3 den drei Mustern zuordnen.','Brücke: „Alle drei Muster haben einen Nenner – jemand muss das Projekt aktiv führen.“'],
  bg:'Blaue Karten (intern, beeinflussbar) sind heute Thema. Pinke Karten (Markt, Personal, DSGVO) parken: Rahmenbedingungen.',
  bridge:'Gelbe Karten: „Workflows vorhanden, aber nicht teamübergreifend abgestimmt“ – die Diagnose, auf der alles aufsetzt.',ifstuck:'Schuldzuweisung → zurück auf Muster-Ebene.'}},

{id:'goals',min:3,title:'Fahrplan',kind:'content',
 h:'Was ihr heute mitnehmt',
 body:`<div class="cards">
 <div class="card"><span class="num">Start</span><h4>Standortbestimmung</h4><p>Acht Kompetenzen, Skala 1–4. Daraus entsteht am Ende dein Profil: Stärke, Defizit, Turbo.</p></div>
 <div class="card"><span class="num">Grundlagen</span><h4>Projekt, Phasen, Meilensteine</h4><p>Was ein Projekt ist, wie euer Lebenszyklus aussieht, warum abrechnungsrelevante Meilensteine das Herz sind.</p></div>
 <div class="card"><span class="num">Einstieg</span><h4>Übergabe und Einstieg</h4><p>Wie ihr ein Projekt vom Vertrieb übernehmt, wen ihr einbindet, wie der Projektsteckbrief aussieht.</p></div>
 <div class="card"><span class="num">Planung</span><h4>Plan, kritischer Pfad, Abhängigkeiten</h4><p>Rückwärts vom Meilenstein planen, den kritischen Pfad kennen, Risiken benennen.</p></div>
 <div class="card"><span class="num">Führen</span><h4>Ownership und Verbindlichkeit</h4><p>Im Driver Seat bleiben, freundlich verbindlich sein – intern und beim Kunden.</p></div>
 <div class="card"><span class="num">Steuern</span><h4>Controlling, Meetings, Odoo</h4><p>Worüber ihr jederzeit auskunftsfähig seid, welche Meetings es braucht, wie Odoo das trägt.</p></div>
 <div class="card"><span class="num">Anpassen</span><h4>Change und Erfolgsturbo</h4><p>Änderungen erkennen, bewerten, entscheiden lassen, kommunizieren. Und: dein persönlicher Plan aus Stärke, Defizit und der einen Optimierung.</p></div></div>`,
 notes:{goal:'Orientierung. Nur ankündigen.',steps:['Sechs Blöcke in 30 Sekunden.','„Zu fast jedem Block gibt es ein Schaubild und eine Übung mit euren Fällen.“'],bg:'Reihenfolge folgt dem Projektlebenszyklus: Start → Planen → Führen → Steuern → Anpassen.',bridge:'',ifstuck:''}},

{id:'selfcheck',min:4,title:'Standortbestimmung',kind:'selfcheck',
 h:'Standortbestimmung: Wo stehe ich heute?',
 lead:'Ehrlich, für dich selbst. Am Ende leitet sich daraus dein Profil ab: deine Stärke, dein größtes Defizit, dein Erfolgsturbo. Einzelwerte sieht nur der Trainer; das Team sieht Durchschnitte.',
 q:'Wie routiniert bin ich heute bei …',
 scale:['mache ich nicht','gelegentlich, unsystematisch','meistens, mit Lücken','routiniert, jedes Projekt'],
 items:[{t:'Übergabe & Einstieg',d:'Vollständiges Paket vom Vertrieb einfordern, Steckbrief, Kick-Off in der ersten Woche'},
  {t:'Stakeholder einbinden',d:'Entscheider, Umsetzer, Blockierer kennen und passend informieren'},
  {t:'Planung & kritischer Pfad',d:'Rückwärts vom Meilenstein planen, Kundenaufgaben als Aufgaben, kritischen Pfad kennen'},
  {t:'Abrechnungs-Meilensteine treiben',d:'Wissen, welcher Meilenstein Geld bringt; Abnahme und Rechnung in derselben Woche'},
  {t:'Ownership & Nachfassen',d:'Immer wissen, wer den Ball hat; vor der Fälligkeit nachfragen'},
  {t:'Verbindlich kommunizieren',d:'Konkret, terminiert, begründet, mit Konsequenz – intern und beim Kunden'},
  {t:'Risiken & Abhängigkeiten',d:'Risikoliste mit Score und Trigger; externe Lieferungen früh anfordern'},
  {t:'Controlling & Rhythmus',d:'Wöchentlicher Projekt-Check, Kunden-Update am festen Tag, acht Fragen beantworten können'}],
 revNote:'Team-Durchschnitt unter 2,5 markiert die Bereiche mit dem größten Hebel – eure Prioritätenliste für die Folgetermine.',
 notes:{goal:'Baseline für jede Person und für das Team. Das Abschlussprofil (Stärke/Defizit/Turbo) wird daraus berechnet.',
  steps:['3 Min ausfüllen lassen. Betonen: Einzelwerte sieht nur der Trainer, das Team sieht den Durchschnitt.','Freigeben: Team-Ø je Kompetenz. Die zwei niedrigsten benennen: „Da liegt heute der Schwerpunkt.“ Hohe Werte: „Wer hat hier eine 4? Ihr seid die Ansprechpartner.“','Ansagen: „Am Ende kommt ihr zu dieser Einschätzung zurück und baut euren persönlichen Plan daraus.“'],
  expert:'Selbsteinschätzung vor dem Training (Pre-Assessment) erhöht den Transfer messbar: Die Teilnehmenden hören mit einer Frage im Kopf zu („das ist mein Defizit“), statt alles gleich zu gewichten. Für den Folgetermin: dieselbe Skala erneut abfragen – die Differenz ist der Trainingseffekt. Die acht Kompetenzen entsprechen den acht Blöcken des Trainings, sodass jedes Defizit einen Block hat, in dem es behandelt wird.',
  bg:'Die Skala ist bewusst verhaltensbezogen (mache ich / mache ich nicht), nicht wissensbezogen. Transfer entsteht durch Verhalten.',
  bridge:'',ifstuck:'Jemand bewertet sich überall mit 4 → freundlich fragen: „Welche davon würde deine Technik-Kollegin bestätigen?“'}},

{id:'project',min:6,title:'Was ist ein Projekt?',kind:'content',
 h:'Was ist ein Projekt – und was ist es bei lern.link?',
 lead:'Ein Projekt ist ein einmaliges Vorhaben mit klarem Ziel, Anfang und Ende, begrenzten Mitteln und mehreren Beteiligten. Alles andere ist Betrieb.',
 body:V.lifecycle()+`<div class="block"><div class="cards">
 <div class="card"><h4>Initiierung</h4><p>Auftrag klären, Übergabe vom Vertrieb, Beteiligte identifizieren, Projekt anlegen. Bei euch: Kick-Off.</p></div>
 <div class="card"><h4>Planung</h4><p>Scope, Meilensteine, Aufgaben, Abhängigkeiten, Risiken, Kommunikation. Einmal gründlich, dann laufend gepflegt.</p></div>
 <div class="card"><h4>Durchführung &amp; Steuerung</h4><p>Einführung bis Pilot. Arbeiten, prüfen, anpassen – im Wochenrhythmus.</p></div>
 <div class="card"><h4>Abschluss</h4><p>Live-Start, Abnahme, Schlussrechnung, Retro, Übergabe in den Betrieb (Support, Begleitkurs).</p></div></div></div>
 <div class="block"><h3>Drei Begriffe für heute</h3><div class="cards"><div class="card v"><h4>Meilenstein</h4><p>Ein prüfbarer Zustand zu einem Zeitpunkt. Kein Datum im Kalender, sondern: „Plattform installiert und vom Kunden bestätigt.“ Eure vier Start-Marker sind Meilensteine – und drei davon lösen Rechnungen aus.</p></div><div class="card v"><h4>Abhängigkeit</h4><p>Etwas, das fertig sein muss, bevor etwas anderes starten kann. Bei euch meist beim Kunden oder Partner.</p></div><div class="card v"><h4>Risiko</h4><p>Ein mögliches Ereignis, das den Plan gefährdet. Noch kein Problem – aber eins, das ihr kommen seht.</p></div></div></div>`,
 notes:{goal:'Gemeinsames Vokabular und das Bild: Euer Phasenmodell ist ein vollständiger Projektlebenszyklus.',
  steps:['Schaubild erklären: oben generisch, unten eure Phasen, Rauten = Meilensteine.','Fragen: „Wo in diesen Phasen hakt es am häufigsten?“ Erfahrungsgemäß: Übergang Anpassung → Content und Pilot.','Drei Begriffe vorlesen. Betonen: Meilenstein = Zustand, nicht Termin.'],
  expert:'Projektdefinition nach DIN 69901 / IPMA: Einmaligkeit der Bedingungen, Zielvorgabe, zeitliche/finanzielle/personelle Begrenzung, Abgrenzung gegenüber anderen Vorhaben, projektspezifische Organisation. PRINCE2 fügt hinzu: Ein Projekt existiert nur, solange ein Business Case besteht – für euch: solange der Kunde einen Nutzen erwartet, für den er bezahlt.',
  bg:'Der Projektbegleitungskurs, Beratung, Dokumentation und Support laufen als Begleitleistungen parallel. Sie sind Betrieb, kein Projekt – das erklärt, warum sie sich anders „anfühlen“.',
  bridge:'Retro: „Kein Kick-Off mit allen beteiligten Teams → Risiken werden nicht frühzeitig erkannt.“ Initiierung ist genau die Phase, die bei euch heute übersprungen wird.',
  ifstuck:'„Meilenstein = Rechnungsdatum“ → Ja, das ist die Folge. Meilenstein ist der Zustand, die Rechnung das Ergebnis.'}},

{id:'handover',min:8,title:'Übergabe vom Vertrieb',kind:'check',
 h:'Wie erhalte ich ein Projekt vom Vertrieb?',
 lead:'Die Übergabe ist der erste Meilenstein des Projekts. Was hier fehlt, holt ihr später mit Zinsen nach – im Chatter, beim Kunden, beim Kick-Off.',
 body:V.handover(),
 q:'Vertrieb übergibt „Nordlicht“ mit: Angebot, Ansprechpartnerin Frau Weber, Wunsch Live-Start Januar, Hinweis „die wollen auch Zertifikate“. Was fehlt im Übergabe-Paket?',
 opts:['Nicht-Scope: Was ist ausdrücklich nicht enthalten?','Datum und Inhalt der vier Meilensteine','Ein zweiter Ansprechpartner beim Kunden','Was genau zu „Zertifikate“ zugesagt wurde (Angebot oder Wunsch?)','Bekannte Risiken aus dem Verkaufsgespräch','Die Rechnungsnummer','Abrechnungsplan: welcher Meilenstein löst welche Rechnung aus','Der Firmensitz des Kunden'],
 correct:[0,1,2,3,4,6],
 why:'Alles außer Rechnungsnummer und Firmensitz gehört ins Paket. Die „Zertifikate“ sind der Klassiker: eine Zusage im Gespräch, die im Angebot nicht steht, und in Phase 3 zum Konflikt wird.',
 notes:{goal:'Die Übergabe als Qualitätsschranke verstehen: Vollständig oder nicht erfolgt.',
  steps:['Schaubild: Vertrieb befüllt, KuBe prüft. Fehlt etwas, geht das Paket zurück – freundlich, mit Liste.','Übung 3 Min, freigeben, auflösen.','Diskussion: „Was davon bekommt ihr heute, was nie?“ Vertrieb einbeziehen: „Was braucht ihr von der KuBe, damit ihr das liefern könnt?“','Vereinbarung anbieten: Übergabe-Checkliste als Odoo-Vorlage im Verkaufsauftrag.'],
  expert:'PRINCE2 nennt das „Projektauftrag“ (Project Brief) und erlaubt keinen Start ohne ihn. In kleinen Unternehmen reicht eine Seite – entscheidend ist, dass Vertrieb und Projektleitung dasselbe Dokument unterschreiben. Die häufigste Ursache für Scope-Konflikte ist nicht der Kunde, sondern die Lücke zwischen Verkaufsgespräch und Übergabe.',
  bg:'Zwei Ansprechpartner beim Kunden sind kein Luxus: In eurer Retro steht „Ansprechpartner plötzlich nicht mehr da“. Das Risiko wird bei der Übergabe behandelt, nicht wenn es eintritt.',
  bridge:'Retro: „Kunde hört im Verkaufsgespräch Dinge, die nicht leistbar sind“, „Kunde hat keinen richtigen Plan → Einkauf ungleich Implementierer auf Kundenseite“.',
  ifstuck:'Vertrieb fühlt sich angegriffen → Rahmen: Die Checkliste schützt den Vertrieb, weil Zusagen dokumentiert und nicht später bestritten werden.'}},

{id:'onboarding',min:6,title:'Einstieg ins Projekt',kind:'content',
 h:'Wie steige ich in ein neues Projekt ein?',
 lead:'Die ersten fünf Arbeitstage entscheiden über die nächsten fünf Monate. Ziel: Ein Steckbrief, den alle Beteiligten kennen.',
 body:V.canvas()+`<div class="block"><h3>Die ersten fünf Tage</h3><div class="cards">
 <div class="card"><span class="num">Tag 1</span><h4>Paket prüfen</h4><p>Übergabe-Paket lesen, Lücken an Vertrieb zurückspielen, Projekt in Odoo anlegen.</p></div>
 <div class="card"><span class="num">Tag 2</span><h4>Kunde begrüßen</h4><p>Erste Mail: Ihr seid ab jetzt Ansprechpartner. Kick-Off-Termin vorschlagen, zweiten Ansprechpartner anfordern.</p></div>
 <div class="card"><span class="num">Tag 3</span><h4>Intern vorbereiten</h4><p>Mit Technik Aufwände und Kapazität prüfen. Steckbrief-Entwurf.</p></div>
 <div class="card"><span class="num">Tag 4–5</span><h4>Kick-Off</h4><p>Alle Teams + Kunde. Steckbrief gemeinsam fertigstellen. Ergebnis am selben Tag ins Odoo-Projekt.</p></div></div></div>`,
 notes:{goal:'Einen festen Einstiegsablauf haben, statt jedes Projekt anders zu beginnen.',
  steps:['Canvas Feld für Feld (je ein Satz).','Fünf-Tage-Plan vorstellen. Fragen: „Wie viele Tage dauert das heute bei euch?“','Hinweis: Der Steckbrief ist später die Grundlage für jedes Kunden-Update und jede Rückfrage.'],
  expert:'Der Project Canvas ist die Kurzform des PRINCE2-Projektleitdokuments. Erfahrung aus kleinen Teams: Was nicht auf eine Seite passt, wird nicht gepflegt. Das Feld „Nicht-Scope“ ist das wichtigste – es verhindert 80 % der späteren Diskussionen.',
  bg:'Die Kick-Off-Agenda folgt dem Canvas: Zweck → Ziele → Scope → Meilensteine → Rollen → Risiken → Kommunikation. 90 Minuten reichen, wenn der Entwurf vorher steht.',
  bridge:'Retro-Wunsch (3 Punkte): „Interdisziplinäre Kickoffs / Health Checks“. Wunsch: „Ausführliche Projektbeschreibung mit allen wichtigen Infos“.',
  ifstuck:'„Der Kunde hat keine Zeit für Kick-Offs“ → 60 Minuten remote, mit vorbereitetem Entwurf. Kunden, die keine Stunde investieren, kosten später zehn.'}},

{id:'stake',min:6,title:'Stakeholder',kind:'quad',
 h:'Wer ist beteiligt – und wie binde ich wen ein?',
 lead:'Stakeholder sind alle, die das Projekt beeinflussen oder von ihm betroffen sind. Nicht alle brauchen dasselbe von euch.',
 body:V.stakeholder(),
 q:'Ordne die Beteiligten im Projekt „Nordlicht“ dem passenden Feld zu.',
 fields:[{t:'Zufrieden halten',d:'Viel Einfluss, wenig Tagesinteresse'},{t:'Eng einbinden',d:'Viel Einfluss, viel Interesse'},{t:'Beobachten',d:'Wenig Einfluss, wenig Interesse'},{t:'Informiert halten',d:'Wenig Einfluss, viel Interesse'}],
 items:[{t:'Geschäftsführerin des Kunden',c:0},{t:'Projektleiterin Kunde (Frau Weber)',c:1},{t:'Euer Technik-Kollege',c:1},{t:'Datenschutzbeauftragter des Kunden',c:0},{t:'Trainer:innen, die Kurse bauen',c:3},{t:'IT-Abteilung des Kunden ohne Rolle',c:2},{t:'Pilot-Nutzer',c:3},{t:'Euer Vertrieb nach Übergabe',c:3}],
 why:'Der DSB ist der unterschätzte Fall: wenig Tagesinteresse, aber er kann den Live-Start blockieren. Einmal früh einbinden, dann zufrieden halten. Vertrieb nach Übergabe: informiert, nicht eingebunden.',
 notes:{goal:'Stakeholder bewusst einordnen und daraus die Kommunikation ableiten.',
  steps:['Matrix erklären, je Feld die Strategie.','Übung 3 Min, freigeben.','Beim DSB und bei der Geschäftsführung länger bleiben: „Wann habt ihr die zuletzt gesehen?“','Regel: Beim Kick-Off die Matrix einmal ausfüllen, in Steckbrief übernehmen.'],
  expert:'Einfluss-Interesse-Matrix nach Mendelow. IPMA-Kompetenz „Stakeholder“: identifizieren, analysieren, Strategie festlegen, Beziehung pflegen. Das Feld „Zufrieden halten“ ist das gefährlichste: Diese Personen melden sich nicht – bis sie blockieren. Ein kurzes Status-Mail pro Meilenstein reicht meist.',
  bg:'Für jedes Feld eine Kommunikationsregel: Eng einbinden = Wochen-Update + Reviews. Zufrieden halten = Meilenstein-Mail. Informiert halten = Newsletter-artiges Update bei Phasenwechsel. Beobachten = nichts aktiv.',
  bridge:'Retro: „Kunde hat keinen richtigen Plan → Einkauf ungleich Implementierer“. Das ist ein Stakeholder-Problem: Der Entscheider und der Umsetzer sind zwei Personen in zwei Feldern.',
  ifstuck:'Zeit knapp → nur vier Items besprechen (GF, Weber, DSB, Vertrieb).'}},

{id:'plan',min:7,title:'Planung',kind:'content',
 h:'Wie plane ich ein Projekt?',
 lead:'Rückwärts. Vom letzten Meilenstein zurück zu den Aufgaben, die dafür fertig sein müssen – und zu dem, was der Kunde dafür liefern muss.',
 body:V.gantt()+`<div class="block"><h3>In fünf Schritten zum Plan</h3><div class="cards">
 <div class="card"><span class="num">1</span><h4>Meilensteine setzen</h4><p>Die vier Start-Marker mit Datum. Mit Technik auf Plausibilität prüfen, bevor der Kunde sie sieht.</p></div>
 <div class="card"><span class="num">2</span><h4>Aufgaben rückwärts ableiten</h4><p>Pro Meilenstein: Was muss fertig sein? Jede Aufgabe mit Zuständigem und Dauer.</p></div>
 <div class="card"><span class="num">3</span><h4>Abhängigkeiten markieren</h4><p>Was wartet worauf? Kundenaufgaben ins Projekt – mit Zuständigem „Kunde“.</p></div>
 <div class="card"><span class="num">4</span><h4>Kritischen Pfad erkennen</h4><p>Die Kette ohne Puffer. Hier liegt eure Aufmerksamkeit.</p></div>
 <div class="card"><span class="num">5</span><h4>Puffer einplanen</h4><p>10–20 % vor jedem Meilenstein. Nicht pro Aufgabe – die werden still verbraucht.</p></div></div></div>`,
 notes:{goal:'Rückwärtsplanung als Methode, Odoo als Ort.',
  steps:['Balkenplan erklären: violett = kritisch.','Fünf Schritte durchgehen. Schritt 5 betonen: Puffer am Meilenstein, nicht pro Aufgabe (Parkinson).','Fragen: „Welche Aufgaben in eurem letzten Projekt standen nicht im Plan, aber im Chatter?“'],
  expert:'Klassische Planung in PM-Standards: Projektstrukturplan → Ablaufplan → Terminplan. Für euch reicht die Mittelebene: Meilensteine + Aufgaben + Abhängigkeiten. Goldratt (Critical Chain): Puffer gehören ans Ende der Kette, nicht in jede Aufgabe – sonst werden sie nach dem Studentensyndrom verbraucht. Agiler Zusatz: Aufgaben innerhalb einer Phase dürfen umsortiert werden, Meilensteine nicht ohne Change-Prozess.',
  bg:'Odoo: Meilensteine sind ein eigenes Objekt im Projekt. Aufgaben können Abhängigkeiten tragen („blockiert durch“). Das reicht für diesen Plan.',
  bridge:'Retro: „Projekt- und Terminplanung mit den Kunden nicht vollständig“, „Aufgaben, die durchrutschen oder bei denen der Stand nicht ordentlich kommuniziert wird“.',
  ifstuck:'„Wir wissen am Anfang nicht alles“ → Richtig. Plan mit dem, was ihr wisst, und ein Risiko für das, was ihr nicht wisst.'}},

{id:'critpath',min:6,title:'Kritischer Pfad',kind:'quiz',
 h:'Der kritische Pfad',
 lead:'Der längste Weg vom Start zum Meilenstein. Jede Verzögerung auf diesem Pfad verschiebt den Meilenstein eins zu eins. Alles andere hat Puffer.',
 body:V.network(),
 qs:[{q:'Die SSO-Zugänge vom Kunden kommen zwei Wochen zu spät. Was passiert mit dem Pilotstart?',opts:['Nichts, SSO liegt nicht auf dem kritischen Pfad.','Er verschiebt sich um eine Woche – der Puffer des Pfads ist eine Woche.','Er verschiebt sich um zwei Wochen.','Technik kann das aufholen.'],c:1,why:'Pfad A–B–E hat eine Woche Puffer gegenüber A–C–D. Zwei Wochen Verzug verbrauchen den Puffer und verschieben um eine Woche. Ab jetzt sind beide Pfade kritisch.'},
  {q:'Die Design-Vorgaben vom Kunden kommen eine Woche zu spät. Was passiert?',opts:['Nichts, der Kunde hat Zeit.','Pilotstart verschiebt sich um eine Woche.','Pilotstart verschiebt sich, nur wenn auch SSO spät kommt.','Design kann parallel gebaut werden.'],c:1,why:'Design-Vorgaben liegen auf dem kritischen Pfad. Kein Puffer. Deshalb ist diese Kundenaufgabe die wichtigste Nachfass-Aufgabe der Kundenbetreuung.'}],
 notes:{goal:'Verstehen, warum nicht alle Verzögerungen gleich sind – und wo Nachfassen Priorität hat.',
  steps:['Netzplan erklären: Knoten = Aufgabe mit Dauer, Pfeile = Abhängigkeit. Violett = kritischer Pfad.','Zwei Quizfragen, 2 Min, freigeben.','Pointe: Die beiden kritischsten Aufgaben sind Kundenaufgaben. Das ist bei euch fast immer so.'],
  expert:'Critical Path Method (Kelley/Walker, 1957). Kritischer Pfad = Pfad mit Gesamtpuffer null. Praktische Regel für kleine Projekte: Ihr müsst ihn nicht berechnen, nur kennen. Fragt bei jeder Aufgabe: „Wenn das eine Woche später kommt – verschiebt sich der Meilenstein?“ Wenn ja: kritisch. Nachfassen in Reihenfolge der Kritikalität, nicht in Reihenfolge des Eingangs.',
  bg:'',bridge:'Retro: „Abhängigkeiten zu Partnerbetrieben, die nicht wie geplant performen“. Partnerlieferungen liegen oft auf dem kritischen Pfad – deshalb beim Kick-Off bestellen.',
  ifstuck:'Rechenfrage verwirrt → am Beispiel bleiben: „Welche Kette hat keinen Spielraum?“'}}
]);
