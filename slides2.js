window.SLIDES=(window.SLIDES||[]).concat([
{id:'billing',min:6,title:'Abrechnungs-Meilensteine',kind:'poll',max:1,
 h:'Warum abrechnungsrelevante Meilensteine <em>das Herz</em> sind',
 lead:'Zwischen zwei Rechnungen finanziert lern.link jede Stunde vor. Ein Meilenstein, der vier Wochen rutscht, ist kein Terminproblem – er ist ein Liquiditätsproblem.',
 body:V.cashflow(),
 q:'Ein Projekt hat drei Rechnungs-Meilensteine à 10.000 €. Der zweite verschiebt sich um sechs Wochen, weil der Kunde Content nicht liefert. Was kostet das lern.link?',
 opts:['Nichts – die Rechnung kommt ja später trotzdem.','Sechs Wochen Vorfinanzierung von 10.000 € plus die Stunden, die weiterlaufen, plus das Risiko, dass sich auch Meilenstein 3 verschiebt.','Nur die Zinsen.','Der Kunde zahlt eine Verzugsgebühr.'],correct:1,
 why:'Verschobene Meilensteine kaskadieren: Die Technik-Kapazität, die für Phase 4 geplant war, ist dann für ein anderes Projekt verplant. Der Verzug wird länger als sechs Wochen.',
 extra:`<div class="block"><h3>Drei Regeln für Abrechnungs-Meilensteine</h3><div class="cards">
 <div class="card g"><h4>Kennen</h4><p>Jede:r im Projekt weiß, welche Meilensteine eine Rechnung auslösen und welche Bedingung daran hängt („vom Kunden bestätigt“).</p></div>
 <div class="card a"><h4>Aktiv herbeiführen</h4><p>Die Aufgaben auf dem kritischen Pfad zum nächsten Abrechnungs-Meilenstein haben Vorrang vor allem anderen – auch vor spannenderen Themen.</p></div>
 <div class="card r"><h4>Sofort auslösen</h4><p>Meilenstein erreicht → Abnahme am selben Tag anfordern → Rechnung in der gleichen Woche. Nicht „beim nächsten Monatslauf“.</p></div></div></div>`,
 notes:{goal:'Den Zusammenhang Meilenstein → Rechnung → Liquidität emotional verankern.',
  steps:['Cashflow-Schaubild erklären: rot = Stunden, grün = Rechnung, gelb = Saldo. Zwischen den grünen Balken geht lern.link in Vorleistung.','Poll 1 Min, freigeben, auflösen.','Drei Regeln. Fragen: „Wie viele Tage liegen bei euch heute zwischen ‚fertig‘ und ‚Rechnung raus‘?“'],
  expert:'Das ist Earned-Value-Denken in einfach: Fertiggestellter Wert gegen angefallene Kosten. Für ein kleines Unternehmen ist der Abstand zwischen Leistung und Rechnung die wichtigste Kennzahl überhaupt – wichtiger als Auslastung. PRINCE2: Jede Phase endet mit einer Managemententscheidung („weitermachen?“) – bei euch ist das die Abnahme mit Rechnung.',
  bg:'Bedingungen für Meilensteine im Angebot präzise formulieren: „Installation abgeschlossen“ ist schwach, „Plattform erreichbar, Admin-Zugang übergeben, Kunde bestätigt per Mail“ ist stark.',
  bridge:'Retro: „Abrechnung abhängig von Kunden-Doing machen“, „Rechnungen können nicht zeitnah gestellt werden“, „Wenig finanzieller Puffer“.',
  ifstuck:'„Wir wollen den Kunden nicht mit Rechnungen nerven“ → Kunden, die bei der Abnahme eine Rechnung bekommen, nehmen Meilensteine ernst. Das hilft beiden Seiten.'}},

{id:'agile',min:6,title:'Agil, klassisch, hybrid',kind:'content',
 h:'Agil heißt nicht „ohne Plan“',
 lead:'Agil heißt: in überschaubaren Etappen planen, regelmäßig prüfen, sichtbar anpassen. Klassisch heißt: Phasen, Meilensteine, Verträge. lern.link braucht beides.',
 body:V.spectrum()+`<div class="block"><div class="cards">
 <div class="card"><h4>Was ihr fixiert</h4><p>Die vier Meilensteine mit Datum, das Budget aus dem Angebot, die Qualitätskriterien je Meilenstein. Das ist eure klassische Seite – und die Grundlage der Abrechnung.</p></div>
 <div class="card"><h4>Was ihr flexibel haltet</h4><p>Welche Aufgaben innerhalb einer Phase wann drankommen, welche Nice-to-haves ins Pilot-Release kommen und welche danach. Das ist eure agile Seite.</p></div>
 <div class="card"><h4>Inspect &amp; Adapt</h4><p>Wöchentlich Plan gegen Realität halten. Was sich verschoben hat, wird sichtbar verschoben, nie stillschweigend.</p></div>
 <div class="card"><h4>Fokus / WIP-Limit</h4><p>Weniger gleichzeitig anfangen, mehr abschließen. Drei Aufgaben in Arbeit pro Person, nicht acht.</p></div></div></div>`+V.kanban()+`<div class="block"><h3>Was agil nicht heißt</h3><ul class="clean"><li>Der Kunde darf jederzeit alles ändern, ohne dass es Folgen hat.</li><li>Wir planen nicht, weil sich ja eh alles ändert.</li><li>Jeder arbeitet, woran er gerade Lust hat.</li></ul></div>`,
 notes:{goal:'Agil im lern.link-Kontext einordnen: hybrid, mit klarem Grund.',
  steps:['Spektrum: Wo seid ihr? Hybrid – und warum.','PRINCE2-Agile-Kästen: Zeit, Kosten, Qualität fix, Umfang flexibel. Beispiel: Pilot in Woche 12 mit den Must-haves, Could-haves danach.','Kanban-Bild: Die Spalte „Warten auf Kunde“ einmal zeigen. Fragen: „Wie voll ist die bei euch gerade?“','„Was agil nicht heißt“ vorlesen.'],
  expert:'PRINCE2 Agile fixiert Zeit und Kosten und flext den Umfang (MoSCoW-Priorisierung). Scrum kennt Sprints mit festem Takt – bei euch sind die Phasen der Takt, zu lang für Sprints, aber der Wochen-Check ist euer Daily/Weekly. Kanban liefert zwei Werkzeuge, die sofort wirken: WIP-Limit (Little’s Law: weniger parallel = kürzere Durchlaufzeit) und das Sichtbarmachen von Warte-Zuständen. Das agile Manifest sagt „Reagieren auf Veränderung über das Befolgen eines Plans“ – das „über“ heißt: beides, das Linke mehr.',
  bg:'MoSCoW: Must (ohne geht Pilot nicht), Should (wichtig, aber Pilot geht), Could (wenn Zeit), Won’t (bewusst nicht in diesem Projekt). Beim Kick-Off mit dem Kunden einmal durchgehen.',
  bridge:'Retro: „Weniger anfangen, mehr abschließen“, „Zu viele gleichzeitige Baustellen“, „Kunde ändert seine Pläne → fehlender Change-Prozess“.',
  ifstuck:'Technik: „Und Sprints?“ → Phasen sind größer als Sprints, der Wochen-Check ist der Sprint-Takt.'}},

{id:'quiz',min:5,title:'Quiz Grundlagen',kind:'quiz',
 h:'Fünf Fragen, kurzer Check',
 lead:'Jeder antwortet für sich. Auflösung, wenn alle durch sind.',
 qs:[
  {q:'Agil heißt bei lern.link vor allem …',opts:['Wir planen nicht, es ändert sich eh alles.','Meilensteine fix, Aufgaben flexibel, wöchentlich prüfen und sichtbar anpassen.','Der Kunde darf jederzeit alles ändern.','Tickets statt Meetings.'],c:1,why:'Hybrid: Was abgerechnet wird, ist fix. Wie ihr dorthin kommt, ist flexibel.'},
  {q:'Ein Meilenstein ist …',opts:['Eine besonders große Aufgabe.','Ein prüfbarer Zustand zu einem Zeitpunkt, z. B. „Plattform installiert und bestätigt“.','Ein Meeting mit dem Kunden.','Das Datum der Rechnung.'],c:1,why:'Zustand, nicht Aktivität. Deshalb kann man daran abrechnen.'},
  {q:'Was ist der kritische Pfad?',opts:['Die Aufgaben, die Technik am schwierigsten findet.','Die längste Kette abhängiger Aufgaben – ohne Puffer bis zum Meilenstein.','Alle Aufgaben, die beim Kunden liegen.','Der Pfad mit den meisten Aufgaben.'],c:1,why:'Verzögerung hier = Verzögerung des Meilensteins, eins zu eins.'},
  {q:'Was gehört nicht ins Übergabe-Paket vom Vertrieb?',opts:['Nicht-Scope','Mündliche Zusagen aus dem Verkaufsgespräch','Zweiter Ansprechpartner beim Kunden','Die Chat-Historie mit dem Kunden'],c:3,why:'Chat-Historie ist Rohmaterial, kein Paket. Das Paket ist das Destillat, das beide unterschreiben.'},
  {q:'Wer ist Owner des Projektplans eines Kundenprojekts?',opts:['Technik, weil sie umsetzt.','Der Kunde, weil er bezahlt.','Die Kundenbetreuung.','Die Geschäftsführung.'],c:2,why:'Technik und Vertrieb liefern zu, der Kunde arbeitet mit – der Plan hat genau einen Owner. Nächster Block.'}],
 notes:{goal:'Sitzen die Grundbegriffe, bevor es ins Führen geht?',steps:['3 Min, dann auflösen.','Nur dort länger bleiben, wo gestreut wurde.','Frage 5 ist die Überleitung zu Ownership.'],bg:'Distraktoren bilden typische Missverständnisse aus der Retro ab.',bridge:'',ifstuck:'Widerspruch bei Frage 5 → genau der Unterschied Arbeitspaket-Verantwortung vs. Projekt-Ownership. Nächste Folie.'}},

{id:'ownership',min:6,title:'Driver Seat',kind:'content',
 h:'Ownership: Im Driver Seat bleiben',
 lead:'Die Kundenbetreuung macht nicht alles. Aber sie weiß zu jedem Zeitpunkt, bei wem der Ball liegt, seit wann, und was passiert, wenn er liegen bleibt.',
 body:V.driver()+`<div class="block"><div class="compare">
 <div class="msg bad"><span class="lbl">Beifahrersitz</span>„Ich hab das an Technik weitergegeben.“ – „Ich warte noch auf den Kunden.“ – „Da hat sich keiner gemeldet.“ – „Das war mal besprochen, ich dachte, das ist klar.“</div>
 <div class="msg good"><span class="lbl">Driver Seat</span>„Die Aufgabe liegt seit Dienstag bei Technik, Fälligkeit Freitag. Wenn ich bis Donnerstag nichts höre, frage ich nach.“ – „Der Kunde schuldet uns die Zugänge bis 24.10., sonst rutscht der Pilotstart. Das weiß er.“</div></div></div>
 <div class="block"><h3>Die vier Fragen eines Owners</h3><div class="cards">
 <div class="card"><h4>Wer hat den Ball?</h4><p>Genau eine Person oder der Kunde. Nie „das Team“.</p></div>
 <div class="card"><h4>Seit wann und bis wann?</h4><p>Jede Übergabe hat ein Datum. In Odoo: Zuständiger + Fälligkeit, sonst existiert die Aufgabe nicht.</p></div>
 <div class="card"><h4>Was passiert, wenn nichts passiert?</h4><p>Konsequenz kennen und benennen: Meilenstein rutscht, Rechnung verschiebt sich, Vertrauen sinkt.</p></div>
 <div class="card"><h4>Wann frage ich nach?</h4><p>Vor der Fälligkeit, nicht danach. Nachfassen ist Teil des Jobs, kein Vorwurf.</p></div></div></div>
 <div class="block"><h3>Rollen in einem lern.link-Projekt</h3><div class="tscroll"><table class="rtable"><tr><th></th><th>Vertrieb</th><th>Kundenbetreuung</th><th>Technik</th><th>Kunde</th></tr>
 <tr><td>Projektplan &amp; Meilensteine</td><td>Erstvorschlag im Angebot</td><td><b>Owner</b></td><td>Aufwand schätzen</td><td>Zustimmen, Termine halten</td></tr>
 <tr><td>Technische Aufgaben</td><td>–</td><td>Beauftragen, nachhalten</td><td><b>Owner</b></td><td>Zugänge liefern</td></tr>
 <tr><td>Kundenkommunikation</td><td>Bis Übergabe</td><td><b>Owner</b> ab Kick-Off</td><td>Über KuBe</td><td>Ansprechpartner stellen</td></tr>
 <tr><td>Änderungswünsche</td><td>Informiert</td><td><b>Owner</b> (bewerten, entscheiden lassen)</td><td>Aufwand</td><td>Entscheiden</td></tr>
 <tr><td>Abrechnung bei Meilenstein</td><td>–</td><td><b>Owner</b> (auslösen)</td><td>Fertigmeldung</td><td>Abnahme</td></tr></table></div></div>`,
 notes:{goal:'Ownership als Haltung: nicht „alles selbst machen“, sondern „nichts aus dem Blick verlieren“.',
  steps:['PDCA-Schaubild: Prüfen ist der Schritt, der bei euch fehlt. Wöchentlich, 15 Min pro Projekt.','Zitat-Blöcke vorlesen lassen. „Welche Sätze habt ihr diese Woche gehört?“','Vier Fragen als Mantra. Vorschlag: Zettel am Monitor.','Rollentabelle: nur Owner-Spalte. „Wo stimmt das heute, wo nicht?“'],
  expert:'RACI-Logik: Für jedes Thema genau ein Accountable (Owner), Responsible kann jemand anderes sein. Der Fehler aus der Retro: Responsible wird mit Accountable verwechselt – „Technik ist dran, also ist Technik verantwortlich, dass es vorangeht“. IPMA nennt die Kompetenz „Führung“ und „Ergebnisorientierung“: Der Projektleiter steuert über Ergebnisse, nicht über Tätigkeiten.',
  bg:'Der Deming-Kreis ist bewusst gewählt statt „Scrum-Zeremonien“: Er passt auf jedes Projekt, jede Größe, jedes Tool.',
  bridge:'Retro: „Unklare Zuständigkeiten (wer gibt was weiter)“, „Projektplanung nicht vollständig durch LL“. Wunsch: „Aufgaben nur über Odoo und zeitnahe Rückmeldung“.',
  ifstuck:'Technik: „Dann werden wir ständig genervt“ → Ja, mit Termin und freundlich. Besser als vorwurfsvolle Chatter-Nachrichten nach zwei Wochen Stille.'}},

{id:'ball',min:10,title:'Wer hat den Ball?',kind:'scenario',
 h:'Übung: Wer hat den Ball?',
 lead:'Vier Situationen aus eurem Alltag. Entscheide: Bei wem liegt der Ball – und was ist der nächste gute Schritt?',
 roles:['Vertrieb','Kundenbetreuung','Technik','Kunde'],
 scen:[
  {t:'Der Kunde schreibt im Chatter: „Wir hätten gern zusätzlich das Zertifikats-Plugin, das hatten wir ja mal besprochen.“ Die Phase Anpassung läuft seit zwei Wochen, im Angebot steht nichts davon.',ball:1,next:['Technik bitten, das Plugin einzubauen – war ja besprochen.','Beim Kunden klären, was genau gemeint ist, Aufwand mit Technik schätzen und dem Kunden Auswirkung auf Termin und Budget zurückspielen.','Vertrieb fragen, ob das zugesagt wurde, und abwarten.','Bis zum Pilotbetrieb liegen lassen.'],c:1,why:'Änderungswunsch = Change-Prozess, Owner ist die Kundenbetreuung. Vertrieb zu fragen ist ein Teilschritt, der Ball bleibt bei KuBe.'},
  {t:'Technik braucht vom Kunden die SSO-Zugangsdaten. Die Aufgabe steht seit neun Tagen auf „Warten auf Kunde“. Der Pilotbetrieb soll in drei Wochen starten – SSO liegt auf dem kritischen Pfad.',ball:1,next:['Nichts – die Aufgabe steht auf „Warten auf Kunde“.','Den Kunden freundlich erinnern, ein konkretes Datum nennen und sagen, was mit dem Pilotstart passiert, wenn die Daten später kommen.','Technik bitten, es ohne SSO zu bauen.','Im Chatter schreiben: „Wir warten seit 9 Tagen!“'],c:1,why:'„Warten auf Kunde“ ist kein Parkplatz, sondern ein Trigger zum Nachfassen. Kritischer Pfad = höchste Priorität.'},
  {t:'Die Hauptansprechpartnerin beim Kunden hat das Unternehmen verlassen. Drei offene Aufgaben hängen an ihr, niemand antwortet mehr.',ball:1,next:['Aufgaben auf „Warten auf Kunde“ lassen.','Den nächsthöheren Kontakt anschreiben, neuen Ansprechpartner anfordern, kurzen Projektstatus mitschicken, die drei Aufgaben neu terminieren.','Vertrieb bitten, sich zu kümmern.','Projekt pausieren, Technik umplanen.'],c:1,why:'Eingetretenes Risiko. Der Owner handelt: neuer Kontakt, Status-Reset, neue Termine. Vertrieb ist Türöffner, führt aber nicht.'},
  {t:'Im Verkaufsgespräch wurde zugesagt, dass der Pilotbetrieb in vier Wochen starten kann. Technik sagt beim Kick-Off: realistisch sind acht.',ball:1,next:['Dem Kunden sagen, dass Vertrieb das falsch zugesagt hat.','Intern mit Vertrieb und Technik einen realistischen Plan abstimmen und dem Kunden proaktiv Optionen anbieten (Pilot mit Must-haves in vier Wochen oder voller Umfang in acht).','Technik bitten, es in vier Wochen zu schaffen.','Termin stehen lassen und hoffen.'],c:1,why:'MoSCoW in Aktion: Zeit fix, Umfang flexibel. Intern lösen, dann mit Optionen zum Kunden. Nie Schuldzuweisung, nie Hoffnung.'}],
 notes:{goal:'Ownership an Fällen durchspielen. Reflex „Ball liegt woanders = ich bin raus“ umdrehen.',
  steps:['6 Min bearbeiten. Timer ansagen.','Fall für Fall auflösen, je eine Person fragen.','In allen vier Fällen liegt der Ball bei KuBe – erst nach Fall 4 aussprechen: „Fällt euch was auf?“','Vertrieb und Technik: „Was braucht ihr von der KuBe, damit das funktioniert?“'],
  bg:'Alle Fälle: Der Ball kann bei anderen liegen, die Verantwortung dafür, dass er zurückkommt, liegt beim Owner.',
  bridge:'Fall 1 ← „fehlender Change-Prozess“. Fall 2 ← „Abrechnung abhängig von Kunden-Doing“. Fall 3 ← „Ansprechpartner wechselt“. Fall 4 ← „Kunde hört im Verkaufsgespräch Dinge, die nicht leistbar sind“.',
  ifstuck:'Zeit knapp → Fall 3 überspringen.'}},

{id:'commit',min:5,title:'Freundliche Verbindlichkeit',kind:'content',
 h:'Freundlich und verbindlich – beides gleichzeitig',
 lead:'Verbindlichkeit entsteht nicht durch Druck, sondern durch Klarheit: Was, bis wann, warum, und was sonst.',
 body:`<div class="cards">
 <div class="card"><h4>Konkret</h4><p>„Logo als SVG und drei Hauptfarben“ statt „die Design-Sachen“.</p></div>
 <div class="card"><h4>Terminiert</h4><p>Ein Datum mit Wochentag, nicht „zeitnah“.</p></div>
 <div class="card"><h4>Begründet</h4><p>„Damit Technik das Design am 28. einbauen kann.“ Der andere versteht die Kette.</p></div>
 <div class="card"><h4>Mit Konsequenz</h4><p>Sachlich: „Dann verschiebt sich der Start der Content-Erstellung entsprechend.“</p></div>
 <div class="card"><h4>Freundlich</h4><p>Danke, Hilfe anbieten, Tür offen lassen. Verbindlich heißt nicht kühl.</p></div>
 <div class="card"><h4>Nachgefasst</h4><p>Zwei Tage vor dem Termin erinnern. Kurz, mit Bezug auf die Zusage.</p></div></div>
 <div class="block"><div class="compare"><div class="msg bad"><span class="lbl">Vorher</span>Hallo Frau Weber, wir bräuchten irgendwann mal noch die Logos und Farben für das Design. Viele Grüße</div>
 <div class="msg good"><span class="lbl">Nachher</span>Hallo Frau Weber, für das Design brauchen wir bis <b>Freitag, 24.10.</b> Ihr Logo (SVG oder PNG) und die drei Hauptfarben. Dann setzt Technik das Design in der Woche darauf um und wir halten den Start der Content-Erstellung am 10.11. Falls etwas davon schwierig ist, sagen Sie mir kurz Bescheid, dann finden wir eine Lösung. Danke und viele Grüße</div></div></div>`,
 notes:{goal:'Verbindlichkeit als Technik, nicht als Charaktereigenschaft.',
  steps:['Vorher/Nachher vorlesen. „Welche der sechs Bausteine findet ihr?“ (alle).','Ton diskutieren: Warum nicht unhöflich, obwohl fordernd?','Überleitung: „Jetzt ihr.“'],
  expert:'Kompatibel mit Gewaltfreier Kommunikation (Rosenberg): Beobachtung = konkret, Bedürfnis = begründet, Bitte = terminiert. Die Konsequenz ist eine Information über das gemeinsame Ziel, keine Drohung gegen die Person – das ist der Unterschied. Verhandlungstechnik (Harvard-Konzept): hart in der Sache, weich zur Person.',
  bg:'',bridge:'Retro: „Vorwurfsvoller Ton im Chatter, insbesondere bei Rückfragen“. Wunsch: „Gewaltfreie Kommunikation“.',ifstuck:'„Kunde fühlt sich gegängelt“ → Kunden schätzen Klarheit. Unklarheit erzeugt die Rückfragen, die als Druck empfunden werden.'}},

{id:'rewrite',min:7,title:'Übung: Umformulieren',kind:'rewrite',
 h:'Übung: Zwei Nachrichten neu schreiben',
 lead:'Konkret, terminiert, begründet, mit Konsequenz, freundlich. Drei Minuten pro Nachricht.',
 msgs:[
  {ctx:'Intern, Chatter an Technik',bad:'Wieso ist das Plugin immer noch nicht installiert? Der Kunde wartet seit zwei Wochen und ich kriege keine Infos!!',model:'Hi Jonas, kurze Frage zum Zertifikats-Plugin für Nordlicht: Der Kunde fragt nach, weil der Pilotstart am 10.11. daran hängt. Schaffst du die Installation bis Donnerstag? Wenn etwas blockiert (Lizenz, Zugang), sag mir kurz Bescheid, dann kläre ich das mit dem Kunden. Danke dir!'},
  {ctx:'An den Kunden, E-Mail',bad:'Hallo Herr Schmidt, wir müssten dann auch mal mit den Schulungen anfangen, wann passt es Ihnen denn so?',model:'Hallo Herr Schmidt, damit Ihr Team vor dem Pilotbetrieb am 10.11. sicher mit Moodle arbeiten kann, möchte ich die zwei Schulungstermine jetzt festlegen. Ich schlage Dienstag, 28.10., und Dienstag, 4.11., jeweils 10–12 Uhr vor. Passt das? Falls nicht, nennen Sie mir bitte bis Freitag zwei Alternativen, dann blocke ich das direkt. Viele Grüße'}],
 notes:{goal:'Sechs Bausteine selbst anwenden.',steps:['6 Min schreiben. Antworten laufen live ein.','Freigeben. Zwei bis drei vorlesen lassen. Pro Antwort: Welche Bausteine drin, welcher fehlt?','Musterlösung zeigen, betonen: viele richtige Varianten.'],
  bg:'Häufigster Fehler: Datum oder Konsequenz fehlt. Zweithäufigster: zu lang.',bridge:'Nachricht 1 ≈ Retro-Karte „Vorwurfsvoller Ton im Chatter“.',ifstuck:'Niemand will vorlesen → zwei anonym vorlesen, konkret loben.'}},

{id:'risks',min:6,title:'Risiken',kind:'content',
 h:'Was ist ein Risiko – und was passiert ohne Management?',
 lead:'Ein Risiko ist ein unsicheres Ereignis, das, wenn es eintritt, Ziel, Termin oder Budget trifft. Ein Problem ist ein eingetretenes Risiko. Der Unterschied ist Zeit – und Zeit ist Geld.',
 body:V.riskcurve()+V.riskmatrix()+`<div class="block"><h3>Risikomanagement in vier Sätzen</h3><ul class="clean"><li><b>Identifizieren:</b> Beim Kick-Off: „Was könnte uns den Pilotstart kosten?“ Drei bis sechs Punkte reichen.</li><li><b>Bewerten:</b> Wahrscheinlichkeit × Auswirkung, je 1–3. Score ab 6 = handeln.</li><li><b>Behandeln:</b> Vermeiden, vermindern, übertragen oder bewusst akzeptieren. Pro Risiko eine Maßnahme und einen Trigger („wenn bis 24.10. kein Logo da ist“).</li><li><b>Überwachen:</b> Wöchentlich zwei Minuten im Projekt-Check. Ist ein Risiko näher gekommen? Ist eins eingetreten → Change-Prozess.</li></ul></div>`,
 notes:{goal:'Risiko als normales, billiges Werkzeug erleben.',
  steps:['Kurve: ungemanagt wird jedes Risiko teurer, bis es als Problem genau dann auftaucht, wenn keine Zeit ist.','Matrix: Score, drei Zonen, vier Strategien.','Vier Sätze vorlesen. „Welches eurer letzten Probleme war vorher ein erkennbares Risiko?“ (Zuruf.)'],
  expert:'IPMA/PMBOK unterscheiden Risiken (unsicher, zukünftig) von Issues (eingetreten, jetzt). Vier Behandlungsstrategien: Avoid, Mitigate, Transfer, Accept. Praxis in kleinen Teams: Nicht die Liste ist der Wert, sondern das Gespräch beim Kick-Off und die Trigger. Ein Trigger ist ein beobachtbares Datum oder Ereignis, bei dem die Maßnahme automatisch startet – das nimmt die Entscheidung „ist es schon schlimm genug?“ aus dem Spiel.',
  bg:'Risikokosten-Kurve: Je später ein Risiko behandelt wird, desto weniger Optionen bleiben (Boehm). Beim Kick-Off: Partner früher bestellen. In der Pilotphase: nur noch Verschieben oder Reduzieren.',
  bridge:'Retro: „Risiken werden nicht frühzeitig erkannt, um gemanagt zu werden“, „Bei Urlauben/Krankheit keine Vertretungsregelung“.',
  ifstuck:'„Wir können nicht alles vorhersehen“ → Müsst ihr nicht. Drei bis sechs Risiken pro Projekt, die bekannten Verdächtigen reichen.'}},

{id:'riskex',min:8,title:'Übung: Risiken',kind:'risk',
 h:'Übung: Risiken bewerten',
 lead:'Projekt „Nordlicht“: Phase Anpassung läuft, Start Pilotbetrieb in sechs Wochen. Bewerte: Wie wahrscheinlich (1–3), wie schlimm (1–3)?',
 risks:[
  {t:'Der Kunde liefert den Content für die ersten Kurse zu spät.',m:'Content-Lieferung als Kundenaufgabe mit Datum; zwei Wochen vorher erinnern; Pilot notfalls mit reduziertem Kursumfang (MoSCoW).'},
  {t:'Der Partnerbetrieb liefert das lizenzpflichtige Plugin nicht termingerecht.',m:'Beim Kick-Off bestellen; Liefertermin schriftlich bestätigen lassen; Ausweichlösung kennen. Strategie: Übertragen + Vermindern.'},
  {t:'Die Hauptansprechpartnerin beim Kunden geht in zwei Monaten in Elternzeit.',m:'Jetzt zweiten Ansprechpartner benennen lassen, in alle Updates aufnehmen. Strategie: Vermeiden.'},
  {t:'Der Technik-Kollege für die Schnittstelle ist zwei Wochen im Urlaub, ohne Vertretung.',m:'Schnittstellen-Aufgabe vor den Urlaub ziehen oder Vertretung beim Kick-Off festlegen.'},
  {t:'Der Kunde hat kein klares Bild, welche Rollen und Rechte seine Nutzer brauchen.',m:'Rollen-Workshop als Aufgabe in der Einführungsphase, Ergebnisdokument zur Freigabe.'},
  {t:'Die Datenschutz-Freigabe durch den DSB des Kunden steht noch aus.',m:'DSB früh einbinden (Stakeholder: zufrieden halten), Unterlagen aus Vorprojekten bereitstellen, Freigabe als Meilenstein-Voraussetzung benennen.'}],
 notes:{goal:'Eine Liste, zwei Zahlen, eine Maßnahme, ein Trigger.',
  steps:['5 Min bewerten.','Freigeben. Team-Mittelwerte. Bei den zwei höchsten: „Was tun wir heute dagegen?“ Dann Tab „Maßnahmen“.','„Welche dieser sechs hattet ihr in echten Projekten?“','Festhalten: Risikoliste beim Kick-Off, wöchentlich zwei Minuten.'],
  bg:'Zahlen weniger wichtig als das Gespräch. Unterschiedliche Bewertungen zwischen Technik und KuBe sind der interessanteste Teil.',
  bridge:'Alle sechs aus Retro-Karten: Kunde liefert nicht, Partner, Ansprechpartner, Vertretung, Rollenkonzept, DSGVO.',ifstuck:'Zeit knapp → nur 1, 2 und 4.'}}
]);
