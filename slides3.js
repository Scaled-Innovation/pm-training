window.SLIDES=(window.SLIDES||[]).concat([
{id:'deps',min:5,opt:true,title:'Abhängigkeiten',kind:'content',
 h:'Wie gehe ich mit Abhängigkeiten um?',
 lead:'Interne Abhängigkeiten könnt ihr steuern. Externe nur anfordern, terminieren und nachfassen. Deshalb gehören sie zuerst in den Plan.',
 body:V.dependency()+`<div class="block"><div class="cards">
 <div class="card a"><h4>Kunde</h4><p>Jede Lieferung als Aufgabe im Projekt: Zuständig „Kunde“, Datum, Konsequenz im Kunden-Update. Zwei Tage vorher erinnern. Beim Kick-Off alle Kundenlieferungen auf einmal nennen – nicht nach und nach.</p></div>
 <div class="card r"><h4>Partnerbetrieb</h4><p>Bestellen, sobald der Bedarf bekannt ist (meist Kick-Off). Liefertermin schriftlich. Aufgabe mit Zuständigem KuBe: „Lieferung bestätigt?“</p></div>
 <div class="card v"><h4>Technik intern</h4><p>Kapazität beim Kick-Off blocken, nicht wenn die Aufgabe fällig wird. Urlaub und Vertretung im Steckbrief.</p></div>
 <div class="card"><h4>Andere Projekte</h4><p>Dieselben Leute, dieselbe Woche. Im Weekly einmal über alle Projekte schauen: Wo kollidieren zwei kritische Pfade?</p></div></div></div>
 <div class="block"><h3>Drei Regeln</h3><ul class="clean"><li><b>Früh:</b> Externe Abhängigkeiten in der ersten Woche anfordern, auch wenn sie erst in Woche 8 gebraucht werden.</li><li><b>Sichtbar:</b> Eine Abhängigkeit, die nicht als Aufgabe im Projekt steht, wird vergessen. „Warten auf Kunde“ ist ein Status, kein Ort.</li><li><b>Mit Plan B:</b> Für jede Abhängigkeit auf dem kritischen Pfad einmal fragen: „Und wenn nicht?“</li></ul></div>`,
 notes:{goal:'Abhängigkeiten als Aufgaben mit fremdem Zuständigen begreifen.',
  steps:['Karte erklären: die vier Quellen, außen die gefährlichen.','Drei Regeln.','Fragen: „Welche Abhängigkeit hat euch zuletzt überrascht – und war sie wirklich überraschend?“'],
  expert:'In PM-Standards heißt das „Schnittstellenmanagement“. Praxisregel: Lead Time externer Lieferungen ist immer länger als zugesagt – plant mit der zugesagten Zeit plus 50 % und fasst zum zugesagten Termin nach. Eine Abhängigkeit ohne Plan B ist ein Risiko mit Score 9.',
  bg:'',bridge:'Retro: „Abhängigkeiten zu Partnerbetrieben, die nicht wie geplant performen, bspw. Plugins u. a. lizenzpflichtige Produkte“.',ifstuck:''}},

{id:'control',min:6,title:'Projektcontrolling',kind:'content',
 h:'Im Blick behalten: Was ist Projektcontrolling?',
 lead:'Controlling heißt nicht Kontrolle, sondern Steuern: Plan gegen Ist halten, Abweichung erkennen, handeln. Wöchentlich, 15 Minuten pro Projekt.',
 body:V.mta()+`<div class="block"><h3>Worüber ich als Projektverantwortliche:r jederzeit auskunftsfähig bin</h3><div class="cards">
 <div class="card"><span class="num">1</span><h4>Status je Meilenstein</h4><p>Grün, gelb, rot – mit Datum und Begründung.</p></div>
 <div class="card"><span class="num">2</span><h4>Nächster Abrechnungs-Meilenstein</h4><p>Wann, was fehlt noch, wer hat den Ball.</p></div>
 <div class="card"><span class="num">3</span><h4>Überfällige Aufgaben</h4><p>Welche, seit wann, bei wem, was ich dagegen getan habe.</p></div>
 <div class="card"><span class="num">4</span><h4>Offene Kundenlieferungen</h4><p>Was der Kunde schuldet, bis wann, wann zuletzt erinnert.</p></div>
 <div class="card"><span class="num">5</span><h4>Top-Risiken</h4><p>Die zwei größten, ob sie näher gekommen sind, welche Maßnahme läuft.</p></div>
 <div class="card"><span class="num">6</span><h4>Budget / Stunden</h4><p>Verbraucht gegen geplant, je Phase. Odoo-Zeiterfassung gegen Angebot.</p></div>
 <div class="card"><span class="num">7</span><h4>Offene Änderungen</h4><p>Welche Change-Wünsche liegen vor, in welchem Schritt stehen sie.</p></div>
 <div class="card"><span class="num">8</span><h4>Nächste Entscheidung</h4><p>Was muss der Kunde oder die Geschäftsführung als Nächstes entscheiden – und bis wann.</p></div></div></div>`,
 notes:{goal:'Acht Fragen, auf die der Owner immer antworten kann – ohne nachzuschauen.',
  steps:['Meilenstein-Trendanalyse: Ein Punkt pro Woche pro Meilenstein. Steigt die Linie, wandert der Meilenstein. Zweimal in Folge = Muster, nicht Pech.','Acht Fragen vorlesen. „Welche könntet ihr für euer aktuelles Projekt jetzt beantworten?“ (Hände.)','Hinweis: Alle acht lassen sich aus einem gepflegten Odoo-Projekt in fünf Minuten ablesen.'],
  expert:'Projektcontrolling nach DIN 69901: Soll-Ist-Vergleich, Abweichungsanalyse, Steuerungsmaßnahmen. Die Meilenstein-Trendanalyse ist das einfachste Frühwarnsystem, das es gibt – ein Blatt, eine Linie pro Meilenstein. Earned Value wäre der nächste Schritt, für eure Projektgröße aber nicht nötig. Entscheidend: Controlling ist ein Rhythmus (wöchentlich), kein Ereignis (wenn es brennt).',
  bg:'Die acht Fragen sind die Agenda des internen Weekly. Wer sie in zwei Minuten pro Projekt beantworten kann, ist im Driver Seat.',
  bridge:'Retro: „Noch sehr viele offene Aufgaben (die tw. längst erledigt sind)“ – ein Controlling-Problem: Der Ist-Stand ist nicht gepflegt, also ist jeder Vergleich wertlos.',
  ifstuck:'„Dafür haben wir keine Zeit“ → 15 Minuten pro Woche sparen die Stunden Nachfassen aus der Retro.'}},

{id:'meetings',min:4,title:'Meetings',kind:'content',
 h:'Welche Projektmeetings – und wie organisiere ich sie?',
 lead:'Ein Meeting hat Zweck, Teilnehmer, Dauer und ein Ergebnis-Artefakt. Fehlt eines, ist es ein Gespräch – und Gespräche produzieren die Retro-Karte „Meetings ohne Ergebnis“.',
 body:V.meetings()+`<div class="block"><div class="tscroll"><table class="rtable"><tr><th>Meeting</th><th>Zweck</th><th>Wer</th><th>Dauer</th><th>Ergebnis</th></tr>
 <tr><td><b>Kick-Off</b></td><td>Gemeinsames Bild: Steckbrief, Meilensteine, Risiken, Rollen</td><td>Vertrieb, KuBe, Technik, Kunde</td><td>90 Min, einmal</td><td>Steckbrief in Odoo, Kundenaufgaben angelegt</td></tr>
 <tr><td><b>Weekly intern</b></td><td>Acht Controlling-Fragen über alle Projekte</td><td>KuBe + Technik</td><td>15 Min je Projekt</td><td>Überfällige nachgefasst, Risiken aktualisiert</td></tr>
 <tr><td><b>Kunden-Update</b></td><td>Ampel je Meilenstein, Bitten mit Datum</td><td>KuBe → Kunde</td><td>schriftlich, 10 Min</td><td>Mail oder Odoo-Portal, immer am selben Wochentag</td></tr>
 <tr><td><b>Meilenstein-Review</b></td><td>Zustand erreicht? Abnahme, Rechnung, nächste Phase</td><td>KuBe, Technik, Kunde</td><td>45 Min je Meilenstein</td><td>Abnahmeprotokoll, Rechnung ausgelöst, Plan geprüft</td></tr>
 <tr><td><b>Retro</b></td><td>Was lief gut, was ändern wir</td><td>Alle Teams</td><td>30 Min je Projektende</td><td>Zwei Änderungen am Vorgehen</td></tr>
 <tr><td><b>Health Check</b></td><td>Meilenstein rot: Optionen und Entscheidung</td><td>KuBe, Technik, ggf. GF</td><td>30 Min, ad hoc</td><td>Entscheidung + Kunden-Info am selben Tag</td></tr></table></div></div>
 <div class="block"><h3>Organisation in drei Regeln</h3><ul class="clean"><li><b>Timebox:</b> Ende steht in der Einladung. Nicht fertig = Folgetermin, nicht Überziehen.</li><li><b>Agenda = Fragen:</b> „Status Meilenstein 2?“ statt „Projektstatus“. Fragen zwingen zu Antworten.</li><li><b>Artefakt vor Protokoll:</b> Das Ergebnis landet in Odoo (Aufgabe, Meilenstein, Entscheidung), nicht in einem Protokoll, das niemand liest.</li></ul></div>`,
 notes:{goal:'Eine Meeting-Landkarte haben – und wissen, welches Meeting welches Problem löst.',
  steps:['Zeitstrahl: sechs Meetings, drei davon regelmäßig.','Tabelle nur Spalte „Ergebnis“ durchgehen.','Drei Regeln. Fragen: „Welches eurer Meetings hat heute kein Artefakt?“'],
  expert:'Scrum-Zeremonien übersetzt: Kick-Off ≈ Sprint Planning (einmal pro Projekt), Weekly ≈ Daily (im Wochentakt), Review ≈ Sprint Review, Retro ≈ Retro. Der Health Check kommt aus PRINCE2 (Ausnahmeverfahren: Toleranz überschritten → Eskalation). Meeting-Design: Jedes Meeting braucht einen Owner, der die Agenda stellt und die Timebox hält.',
  bg:'',bridge:'Retro: „Meetings laufen nie in der vorgesehenen Timebox / phasenweise zu viele Meetings / kein klarer Fokus“. Wunsch: „Direkte Kommunikation mit einzelnen Kolleg:innen anstatt Meetings“.',ifstuck:'„Zu viele Meetings“ → Drei regelmäßige, davon eins schriftlich. Das ist weniger als heute.'}},

{id:'rhythmex',min:5,opt:true,title:'Übung: Rhythmus',kind:'multi',
 h:'Übung: Euer Rhythmus',
 lead:'Wie oft sollte das bei lern.link passieren? Entscheidet für euch, dann vergleichen wir.',
 items:[{q:'Status-Update an den Kunden',opts:['Täglich','Wöchentlich','Alle zwei Wochen','Nur bei Meilensteinen','Auf Nachfrage'],rec:1},
  {q:'Interner Projekt-Check (acht Fragen)',opts:['Täglich','Wöchentlich','Alle zwei Wochen','Nur bei Meilensteinen','Auf Nachfrage'],rec:1},
  {q:'Review mit dem Kunden',opts:['Täglich','Wöchentlich','Alle zwei Wochen','Bei jedem Meilenstein','Auf Nachfrage'],rec:3},
  {q:'Kick-Off mit Vertrieb, Kundenbetreuung und Technik',opts:['Bei jedem Projekt','Nur bei großen Projekten','Wenn Zeit ist','Gar nicht'],rec:0}],
 recNote:'Grün markiert: die Empfehlung. Eure Entscheidung zählt – aber sie soll bewusst sein.',
 notes:{goal:'Rhythmus als Team-Vereinbarung.',steps:['2 Min, freigeben.','Einigkeit festhalten, Uneinigkeit kurz entscheiden.','Als Vereinbarung formulieren: „Ab nächster Woche …“ – in den Erfolgsturbo-Plan (Bereich „Controlling & Rhythmus“).'],bg:'',bridge:'Wunsch (3 Punkte): „Interdisziplinäre Kickoffs / Health Checks“.',ifstuck:'Keine Einigung → vier Wochen Probe, dann Retro.'}},

{id:'odoo',min:5,opt:true,title:'Odoo im Zusammenspiel',kind:'content',
 h:'Wie hilft Odoo im internen Zusammenspiel?',
 lead:'Odoo ist nicht das Thema, sondern das Gefäß: Jedes Prinzip von heute hat dort einen Ort. Was nicht in Odoo steht, existiert nicht.',
 body:V.odoo()+`<div class="block"><div class="tscroll"><table class="rtable"><tr><th>Prinzip</th><th>Ort in Odoo</th><th>Regel</th></tr>
 <tr><td>Übergabe vom Vertrieb</td><td>Verkaufsauftrag → Projekt</td><td>Übergabe-Checkliste als Beschreibung; Projekt wird erst angelegt, wenn sie vollständig ist</td></tr>
 <tr><td>Steckbrief</td><td>Projektbeschreibung</td><td>Canvas-Felder als Vorlage; beim Kick-Off ausgefüllt</td></tr>
 <tr><td>Meilensteine</td><td>Projekt-Meilensteine</td><td>Vier Stück, mit Datum, abrechnungsrelevante markiert; Verschiebung nur über Change</td></tr>
 <tr><td>Aufgaben &amp; Ownership</td><td>Aufgabe: Zuständiger + Fälligkeit</td><td>Ohne beides keine Aufgabe; Kundenaufgaben mit Zuständigem „Kunde“ im selben Projekt</td></tr>
 <tr><td>Abhängigkeiten</td><td>„Blockiert durch“ / Status „Warten auf Kunde“</td><td>Status ist ein Trigger zum Nachfassen, kein Parkplatz</td></tr>
 <tr><td>Risiken</td><td>Eigene Aufgabenstufe oder Tag „Risiko“</td><td>Score im Titel, Trigger in der Beschreibung, wöchentlich gesichtet</td></tr>
 <tr><td>Kommunikation</td><td>Chatter + Kundenportal</td><td>Chatter kommentiert die Aufgabe, ersetzt sie nicht; Entscheidungen landen in Aufgabe oder Meilenstein</td></tr>
 <tr><td>Controlling</td><td>Projekt-Dashboard, Zeiterfassung</td><td>Weekly: acht Fragen aus Dashboard ablesen; Stunden gegen Angebot</td></tr>
 <tr><td>Abrechnung</td><td>Meilenstein → Rechnung</td><td>Meilenstein erreicht = Rechnung in derselben Woche</td></tr></table></div></div>`,
 notes:{goal:'Jedes Prinzip hat einen Ort. Das verhindert die Diskussion „brauchen wir ein anderes Tool?“.',
  steps:['Flow-Bild: ein Objekt pro Übergabe.','Tabelle: nur die Spalte „Regel“.','Parken: Konfigurationsdetails in eine Folgeaktion mit Technik.'],
  expert:'Tool-Regel aus der Praxis: Ein Prozess, der nicht im Tool abgebildet ist, lebt im Kopf einer Person – und geht mit ihr in den Urlaub. Die Retro-Karte „Mehrere Systeme: Moodle (Supportforum), Odoo, Dashboard – Doppelarbeit“ löst man nicht mit einem weiteren Tool, sondern mit der Regel „Projekt = Odoo, Support = Forum, Punkt“.',
  bg:'Bei Bedarf: Übergabe-Checkliste und Canvas als Odoo-Projektvorlage anlegen – eine Stunde Arbeit, spart jedes Projekt eine Stunde.',
  bridge:'Retro: „Odoo-Workflow muss weiter kommuniziert und ins Team gebracht werden“, „Workflows vorhanden, aber nicht teamübergreifend abgestimmt“. Wunsch: „Teamabgestimmte Workflows in Odoo“.',ifstuck:'Abdrift in Odoo-Konfiguration → Folgeaktion notieren, weiter.'}},

{id:'change',min:5,title:'Pläne anpassen',kind:'poll',max:1,
 h:'Pläne prüfen und anpassen',
 lead:'Ein Plan ist keine Zusage, dass alles so kommt. Er ist die Grundlage, an der ihr Abweichungen erkennt – und dann handelt.',
 body:V.change(),
 q:'Der Kunde sagt im Pilotbetrieb: „Wir brauchen doch noch eine zweite Zielgruppe vor dem Live-Start.“ Was ist dein erster Schritt?',
 opts:['Technik Bescheid geben, dass noch was dazukommt.','Zusagen, der Kunde ist König.','Auswirkung auf Live-Termin, Aufwand und Budget bewerten und dem Kunden Optionen zurückspielen.','Ablehnen, das steht nicht im Angebot.'],correct:2,
 extra:`<div class="block"><div class="cards">
 <div class="card"><span class="num">1</span><h4>Erkennen</h4><p>Jede Abweichung ist ein Signal: Wunsch, verpasste Fälligkeit, eingetretenes Risiko. Nicht ignorieren, nicht sofort umsetzen.</p></div>
 <div class="card"><span class="num">2</span><h4>Bewerten</h4><p>Was bedeutet das für Meilensteine, Aufwand, Budget? Mit Technik schätzen. Eine Stunde Bewertung spart Wochen Streit.</p></div>
 <div class="card"><span class="num">3</span><h4>Entscheiden lassen</h4><p>Optionen: jetzt mit Terminverschiebung, nach Live-Start, oder gar nicht. Der Kunde entscheidet, ihr führt.</p></div>
 <div class="card"><span class="num">4</span><h4>Kommunizieren</h4><p>Plan anpassen, alle informieren, Odoo nachziehen. Am selben Tag.</p></div></div></div>`,
 notes:{goal:'Veränderung als Normalfall mit Standardweg.',steps:['Poll, freigeben, auflösen (Option 3).','Kreis erklären. Schritt 3 wird am häufigsten übersprungen.','„Was war der letzte Change in eurem Projekt, welchen Schritt habt ihr übersprungen?“'],
  expert:'PRINCE2: Änderungssteuerung mit Toleranzen – innerhalb der Toleranz entscheidet die Projektleitung, darüber eskaliert sie. Für euch: Verschiebung einer Aufgabe innerhalb der Phase = KuBe entscheidet. Verschiebung eines Meilensteins oder Mehraufwand über X Stunden = Kunde (und ggf. GF) entscheidet. Diese Toleranzgrenze beim Kick-Off festlegen.',
  bg:'Agil und Change-Prozess sind kein Widerspruch – der Prozess ist, was Agilität von Chaos unterscheidet.',bridge:'Retro: „Kunde ändert seine Pläne → fehlender Change-Prozess“, „Design ist oft zu sehr überarbeitet“.',ifstuck:'„Dann zahlt der Kunde nie mehr“ → Kunden zahlen für bewertete, sichtbare Änderungen. Nicht für unsichtbaren Mehraufwand.'}},

{id:'turbo',min:10,title:'Mein Erfolgsturbo',kind:'plan',showStatus:false,
 h:'Mein <em>Erfolgsturbo</em>: Stärke, Defizit, die eine Optimierung',
 lead:'Kein Vorsatz, sondern eine Handlung mit Datum und Prüfkriterium. Am Folgetermin schauen wir gemeinsam nach – nicht ob du dich bemüht hast, sondern ob das Kriterium erfüllt ist.',
 body:`<div class="cards"><div class="card"><h4>Was ein Erfolgsturbo ist</h4><p>Eine Änderung in deinem Alltag, die ab dem Tag ihrer Umsetzung dir und mindestens einer anderen Person im Team Arbeit, Nachfragen oder Risiko abnimmt.</p></div><div class="card"><h4>Was keiner ist</h4><p>„Besser kommunizieren“, „Odoo mehr nutzen“, „proaktiver sein“. Nichts davon kann jemand am Folgetermin nachprüfen.</p></div><div class="card"><h4>Der Test</h4><p>Könnte eine Kollegin am Folgetermin in Odoo oder im Postfach nachsehen und mit Ja oder Nein antworten? Dann ist es konkret genug.</p></div></div>`,
 sug:[
  [{a:'Übergabe-Checkliste mit den 7 Punkten als Odoo-Vorlage anlegen und beim nächsten neuen Projekt vollständig einfordern, bevor ich das Projekt anlege.',c:'Vorlage existiert in Odoo; das nächste Projekt hat ein vollständiges Paket; 0 Rückfragen an Vertrieb in den ersten 2 Wochen.'},
   {a:'Für meine 3 laufenden Projekte je einen Projektsteckbrief (Canvas) in der Odoo-Projektbeschreibung nachziehen und dem Kunden schicken.',c:'3 von 3 Projekten haben einen Steckbrief mit Scope, Nicht-Scope, Meilensteinen und Ansprechpartnern.'},
   {a:'Als Vertrieb: Das nächste Projekt mit vollständigem Übergabe-Paket übergeben, inklusive aller mündlichen Zusagen aus dem Verkaufsgespräch.',c:'Die Kundenbetreuung bestätigt im Chatter: „Paket vollständig“, ohne Nachfrage.'}],
  [{a:'In jedem meiner aktiven Projekte eine Stakeholder-Matrix im Steckbrief ausfüllen und bei jedem Kunden einen zweiten Ansprechpartner schriftlich anfordern.',c:'In jedem aktiven Projekt sind 2 Kunden-Ansprechpartner mit Rolle in Odoo hinterlegt.'},
   {a:'Den Datenschutzbeauftragten jedes Kunden in der Phase Anpassung einmal aktiv anschreiben, statt auf die Freigabe vor Live zu warten.',c:'Für alle Projekte vor Pilot: Mail an DSB verschickt und Freigabe-Aufgabe mit Datum angelegt.'}],
  [{a:'In meinen aktiven Projekten den kritischen Pfad markieren und jede Kundenlieferung als Aufgabe mit Zuständigem „Kunde“ und Datum anlegen.',c:'Jede Kundenlieferung ist als Aufgabe sichtbar; keine Aufgabe auf dem kritischen Pfad ohne Fälligkeit.'},
   {a:'Für das nächste Projekt den Plan rückwärts vom Pilotstart bauen und mit Technik vor dem Kick-Off auf Plausibilität prüfen.',c:'Plan liegt vor dem Kick-Off vor; Technik hat die Aufwände im Chatter bestätigt.'}],
  [{a:'In allen Projekten die vier Meilensteine mit Datum eintragen und die abrechnungsrelevanten markieren; jede Abnahme am Tag der Fertigmeldung anfordern.',c:'Abstand zwischen „Meilenstein erreicht“ und „Rechnung gestellt“ bei den nächsten 3 Meilensteinen ≤ 5 Werktage.'},
   {a:'Als Technik: Jede Fertigmeldung, die einen Meilenstein betrifft, am selben Tag im Chatter an die Kundenbetreuung mit dem Satz „Meilenstein X erreicht, bitte Abnahme anfordern“.',c:'Bei allen Meilensteinen der nächsten 4 Wochen gibt es eine Fertigmeldung am Tag der Fertigstellung.'}],
  [{a:'Jede Aufgabe, die ich an Technik oder Kunde übergebe, bekommt eine Fälligkeit; 2 Werktage vorher frage ich im Chatter nach.',c:'Am Folgetermin: 0 Aufgaben von mir älter als Fälligkeit + 2 Tage ohne meinen Nachfass-Eintrag.'},
   {a:'Jeden Montag 15 Minuten: alle Aufgaben auf „Warten auf Kunde“ durchgehen und die älter als 5 Tage nachfassen.',c:'4 Montage in Folge dokumentiert; keine Aufgabe steht länger als 10 Tage auf „Warten auf Kunde“ ohne Nachfass-Eintrag.'}],
  [{a:'Drei Vorlagen für Standard-Kundenbitten (Zugänge, Content, Freigabe) nach den sechs Bausteinen schreiben und für alle Bitten in den nächsten 4 Wochen nutzen.',c:'Stichprobe von 5 Kundenmails durch eine Kollegin: alle 5 enthalten Datum, Begründung und Konsequenz.'},
   {a:'Keine Chatter-Nachricht an Technik mehr ohne Datum und Grund; vor dem Absenden die sechs Bausteine abhaken.',c:'Technik bestätigt am Folgetermin: Rückfragen von mir waren in 4 Wochen immer terminiert und begründet.'}],
  [{a:'In jedem laufenden Projekt eine Risikoliste mit mindestens 3 Risiken, Score und Trigger anlegen und jede Woche im Projekt-Check sichten.',c:'Liste existiert in allen Projekten; Sichtung ist 4× im Chatter oder Weekly-Protokoll dokumentiert.'},
   {a:'Alle externen Lieferungen (Partner, Lizenz, Kunde) für das nächste Projekt beim Kick-Off bestellen bzw. anfordern, nicht erst bei Bedarf.',c:'Alle externen Lieferungen sind in Woche 1 beauftragt und haben einen schriftlich bestätigten Termin.'}],
  [{a:'Festes Weekly mit Technik (dienstags, 15 Min je Projekt, acht Fragen) und Kunden-Update am selben Tag einführen.',c:'4 von 4 Dienstagen: Weekly stattgefunden und Update an alle aktiven Kunden verschickt.'},
   {a:'Meilenstein-Trendanalyse für meine Projekte als einfache Tabelle führen: jede Woche ein Datum je Meilenstein.',c:'Tabelle hat 4 Wochen-Einträge; jede Verschiebung wurde am selben Tag dem Kunden mitgeteilt.'}]],
 notes:{goal:'Jede Person geht mit genau einem geprüften Plan raus: Fokusbereich, Handlung, Datum, Erfolgskriterium, Teamnutzen.',
  steps:['Drei Karten oben vorlesen: Was ein Turbo ist, was nicht, der Test.','7 Min arbeiten lassen. Die Vorschläge sind Starthilfe, nicht Pflicht – anpassen ist erwünscht.','Qualitätscheck: erst weiter, wenn alle vier Haken grün sind. Fragen: „Bei wem ist noch ein Haken grau?“ – dort kurz helfen.','Freigeben. Jede Person stellt ihren Plan in 45 Sekunden vor. Deine einzige Frage: „Wer prüft das am Folgetermin, und wo schaut diese Person nach?“','Folgetermin festlegen (4 Wochen). Vorher „Export CSV“ – dann hast du alle Pläne für die Einladung.'],
  expert:'Das ist eine Implementation Intention (Gollwitzer): Wenn-Dann-Pläne mit konkretem Ort, Zeitpunkt und Verhalten werden zwei- bis dreimal häufiger umgesetzt als Ziele. Die vier Qualitätskriterien sind SMART ohne das Akronym. Der Teamnutzen-Punkt ist bewusst Pflicht: Er filtert Komfort-Vorsätze („ich räume mein Postfach auf“) heraus. Beim Folgetermin: Status abfragen, Erfolgskriterium prüfen, dann die Selbsteinschätzung wiederholen. Nicht umgesetzt ist kein Versagen, sondern Daten – die Frage ist dann „Was stand im Weg?“, und das ist das Thema des nächsten Trainings.',
  bg:'Die Pläne liegen in der Datenbank. Beim Folgetermin öffnet ihr dieselbe Folie: Jeder setzt seinen Status, du gibst frei, das Team sieht Ampeln. Bis dahin nicht „Alle Teilnehmer-Antworten löschen“ drücken – oder vorher exportieren. Die Vorschläge decken alle acht Kompetenzen ab und enthalten je einen Vorschlag für Vertrieb bzw. Technik, damit auch die Nicht-KuBe-Rollen einen echten Turbo finden.',
  bridge:'Rhythmus-Vereinbarungen aus der Vertiefungsübung passen in Bereich „Controlling & Rhythmus“.',
  ifstuck:'Jemand wählt etwas Vages trotz grauer Haken → Frage: „Was würde ich am Folgetermin in Odoo sehen?“ Wenn die Antwort „nichts“ ist, ist es kein Turbo.'}},

{id:'close',min:3,title:'Abschluss',kind:'poll',max:1,
 h:'Das nehmt ihr mit',
 q:'Wie hilfreich war das Training für deinen Alltag?',
 opts:['1 – wenig','2','3 – teilweise','4','5 – sehr'],
 extra:`<div class="block"><div class="cards">
 <div class="card"><h4>Projekt = Phasen + Meilensteine</h4><p>Euer Lebenszyklus steht. Drei Meilensteine lösen Rechnungen aus – sie haben Vorrang.</p></div>
 <div class="card"><h4>Übergabe und Kick-Off</h4><p>Vollständiges Paket, Steckbrief auf einer Seite, Stakeholder einmal eingeordnet.</p></div>
 <div class="card"><h4>Rückwärts planen</h4><p>Kritischen Pfad kennen, Kundenlieferungen als Aufgaben, Puffer am Meilenstein.</p></div>
 <div class="card"><h4>Driver Seat</h4><p>Wer, seit wann, bis wann, was sonst. Freundlich verbindlich, intern und beim Kunden.</p></div>
 <div class="card"><h4>Wöchentlich steuern</h4><p>Acht Fragen, Meilenstein-Trend, Risiken mit Trigger, Kunden-Update am festen Tag.</p></div>
 <div class="card"><h4>Änderungen führen</h4><p>Erkennen, bewerten, entscheiden lassen, kommunizieren. Am selben Tag.</p></div></div></div>`,
 notes:{goal:'Sauber schließen, Feedback, nächster Termin.',steps:['Sechs Takeaways in einem Durchlauf.','Feedback, Ergebnis kurz zeigen.','Folgetermin in 4 Wochen bestätigen: Status der Erfolgsturbos + Selbsteinschätzung erneut. Vertiefungsfolien (★) als Teil 2 anbieten. Danke.'],bg:'',bridge:'',ifstuck:''}}
]);
