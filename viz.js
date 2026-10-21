/* Schaubilder als Inline-SVG, Farben über CSS-Variablen der SI-CI */
window.V=(()=>{
const F='font-family:Open Sans,sans-serif';
const box=(x,y,w,h,fill,stroke,r=8)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}" stroke="${stroke||'none'}" stroke-width="1"/>`;
const txt=(x,y,t,o={})=>`<text x="${x}" y="${y}" fill="${o.c||'var(--offwhite)'}" font-size="${o.s||13}" font-weight="${o.w||400}" text-anchor="${o.a||'middle'}" style="${F}">${t}</text>`;
const arrow=(x1,y1,x2,y2,c='var(--violet-l)',dash)=>`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="2" ${dash?'stroke-dasharray="5 4"':''} marker-end="url(#ah)"/>`;
const defs=`<defs><marker id="ah" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="var(--violet-l)"/></marker></defs>`;
const wrap=(vb,inner,cap)=>`<figure class="fig" style="margin:14px 0 0"><svg viewBox="${vb}" xmlns="http://www.w3.org/2000/svg" role="img">${defs}${inner}</svg>${cap?`<figcaption>${cap}</figcaption>`:''}</figure>`;
const chev=(x,y,w,h,fill)=>`<path d="M${x},${y} h${w-12} l12,${h/2} l-12,${h/2} h-${w-12} l12,-${h/2} z" fill="${fill}"/>`;

function lifecycle(){let s='';const G=['Initiierung','Planung','Durchführung','Abschluss'];const gw=[120,120,420,120];let x=20;
 G.forEach((g,i)=>{s+=box(x,20,gw[i]-6,34,'var(--navy-3)','var(--border-v)');s+=txt(x+(gw[i]-6)/2,42,g,{w:700,c:'var(--violet-l)'});x+=gw[i];});
 const P=['Kick-Off','Einführung','Anpassung','Content','Pilotbetrieb','Live-Betrieb'];x=20;
 P.forEach((p,i)=>{s+=chev(x,80,130,36,i<1?'var(--violet-d)':'var(--navy-3)');s+=txt(x+62,103,(i+1)+'. '+p,{s:12,w:700});x+=130;});
 const M=[['Installation Standardplattform',150],['Start Content-Erstellung',410],['Start Pilotbetrieb',540],['Start Live-Betrieb',670]];
 M.forEach(([m,mx])=>{s+=`<path d="M${mx},126 l8,10 l-8,10 l-8,-10 z" fill="var(--amber)"/>`;s+=txt(mx,166,m.split(' ').slice(0,2).join(' '),{s:11,c:'var(--dim)'});s+=txt(mx,180,m.split(' ').slice(2).join(' '),{s:11,c:'var(--dim)'});});
 s+=txt(20,215,'Generischer Lebenszyklus (IPMA/PRINCE2) oben, lern.link-Phasen unten, Meilensteine als Rauten.',{s:11,a:'start',c:'var(--dim2)'});
 return wrap('0 0 820 225',s);}

function handover(){let s='';s+=box(20,30,200,150,'var(--navy-3)','var(--border)');s+=txt(120,55,'Vertrieb',{w:700,s:15});
 ['Angebot & Scope','Zusagen im Gespräch','Ansprechpartner','Wunschtermine','Besonderheiten'].forEach((t,i)=>s+=txt(120,80+i*20,t,{s:12,c:'var(--dim)'}));
 s+=box(310,20,200,170,'var(--navy)','var(--violet)',10);s+=txt(410,45,'Übergabe-Paket',{w:700,s:14,c:'var(--violet-l)'});
 ['Scope + Nicht-Scope','Meilensteine mit Datum','Kunden-Ansprechpartner (2)','Bekannte Risiken','Offene Zusagen','Abrechnungsplan','Übergabetermin'].forEach((t,i)=>s+=txt(410,68+i*18,t,{s:11.5}));
 s+=box(600,30,200,150,'var(--navy-3)','var(--border)');s+=txt(700,55,'Kundenbetreuung',{w:700,s:15});
 ['Kick-Off einberufen','Projekt in Odoo anlegen','Plan verifizieren','Risiken ergänzen','Kunde begrüßen'].forEach((t,i)=>s+=txt(700,80+i*20,t,{s:12,c:'var(--dim)'}));
 s+=arrow(222,105,306,105);s+=arrow(512,105,596,105);
 s+=txt(264,95,'befüllt',{s:11,c:'var(--dim2)'});s+=txt(554,95,'prüft',{s:11,c:'var(--dim2)'});
 return wrap('0 0 820 205',s,'Die Übergabe ist ein Meilenstein, kein Chat-Hinweis: Das Paket ist vollständig oder die Übergabe ist nicht erfolgt.');}

function canvas(){const C=[['Zweck','Warum macht der Kunde das? Welches Problem löst Moodle für ihn?'],['Ziele & Erfolgskriterien','Woran erkennt der Kunde am Ende, dass es gut war? Messbar.'],['Scope / Nicht-Scope','Was ist drin, was ausdrücklich nicht (z. B. Content-Erstellung).'],['Meilensteine','Die vier Start-Marker mit Datum, abrechnungsrelevant markiert.'],['Team & Rollen','Owner, Technik, Vertrieb, Kunden-Ansprechpartner und Vertretung.'],['Stakeholder','Wer entscheidet, wer wird betroffen, wer kann blockieren?'],['Risiken','Top 3 beim Start. Wird wöchentlich gepflegt.'],['Abhängigkeiten','Was muss der Kunde, was Partner liefern – bis wann.'],['Kommunikation','Rhythmus: Update-Tag, Review-Termine, Kanal.']];
 let s='';C.forEach(([t,d],i)=>{const x=20+(i%3)*265,y=15+Math.floor(i/3)*95;s+=box(x,y,250,85,'var(--navy-3)','var(--border)');s+=txt(x+12,y+22,t,{a:'start',w:700,s:13,c:'var(--violet-l)'});
  const words=d.split(' ');let line='',ly=y+42;words.forEach(w=>{if((line+w).length>40){s+=txt(x+12,ly,line,{a:'start',s:11,c:'var(--dim)'});line='';ly+=15;}line+=w+' ';});s+=txt(x+12,ly,line,{a:'start',s:11,c:'var(--dim)'});});
 return wrap('0 0 820 305',s,'Projektsteckbrief auf einer Seite. Beim Kick-Off gemeinsam ausfüllen, danach im Odoo-Projekt als Beschreibung hinterlegen.');}

function stakeholder(){let s='';const ox=90,oy=20,w=680,h=240;
 s+=box(ox,oy,w/2,h/2,'rgba(245,166,35,.12)','var(--border)',4);s+=box(ox+w/2,oy,w/2,h/2,'rgba(224,82,82,.14)','var(--border)',4);
 s+=box(ox,oy+h/2,w/2,h/2,'var(--navy-3)','var(--border)',4);s+=box(ox+w/2,oy+h/2,w/2,h/2,'rgba(29,188,138,.12)','var(--border)',4);
 s+=txt(ox+w/4,oy+22,'ZUFRIEDEN HALTEN',{s:11,w:700,c:'var(--amber)'});s+=txt(ox+w/4,oy+40,'Geschäftsführung des Kunden',{s:11,c:'var(--dim)'});
 s+=txt(ox+3*w/4,oy+22,'ENG EINBINDEN',{s:11,w:700,c:'var(--red)'});s+=txt(ox+3*w/4,oy+40,'Projektleitung Kunde, eure Technik',{s:11,c:'var(--dim)'});
 s+=txt(ox+w/4,oy+h/2+22,'BEOBACHTEN',{s:11,w:700,c:'var(--dim2)'});s+=txt(ox+w/4,oy+h/2+40,'IT-Abteilung ohne Rolle',{s:11,c:'var(--dim)'});
 s+=txt(ox+3*w/4,oy+h/2+22,'INFORMIERT HALTEN',{s:11,w:700,c:'var(--green)'});s+=txt(ox+3*w/4,oy+h/2+40,'Trainer:innen, Pilot-Nutzer',{s:11,c:'var(--dim)'});
 s+=`<text transform="translate(40,${oy+h/2}) rotate(-90)" fill="var(--violet-l)" font-size="12" font-weight="700" text-anchor="middle" style="${F}">EINFLUSS / MACHT →</text>`;
 s+=txt(ox+w/2,oy+h+28,'INTERESSE / BETROFFENHEIT →',{s:12,w:700,c:'var(--violet-l)'});
 return wrap('0 0 820 300',s,'Einfluss-Interesse-Matrix. Pro Feld eine andere Kommunikationsstrategie – nicht alle brauchen das Wochen-Update.');}

function gantt(){const T=[['Kick-Off',0,1,1],['Installation Plattform',1,2,1],['Design-Vorgaben vom Kunden',1,3,0],['Design umsetzen',3,2,1],['Rollenkonzept',2,2,0],['Schnittstelle SSO (Zugänge Kunde)',2,3,0],['Content erstellen (Kunde)',5,4,1],['Schulungen',6,2,0],['Pilotbetrieb',9,3,1]];
 let s='';const x0=250,wk=55;for(let w=0;w<=12;w++){s+=`<line x1="${x0+w*wk}" y1="12" x2="${x0+w*wk}" y2="${20+T.length*26}" stroke="var(--border)"/>`;if(w%2===0)s+=txt(x0+w*wk,10,'W'+w,{s:10,c:'var(--dim2)'});}
 T.forEach(([t,st,d,crit],i)=>{const y=20+i*26;s+=txt(x0-10,y+15,t,{a:'end',s:11.5,c:crit?'var(--offwhite)':'var(--dim)',w:crit?700:400});s+=box(x0+st*wk,y+3,d*wk-3,18,crit?'var(--violet)':'var(--navy-3)',crit?'none':'var(--border-v)',4);});
 s+=`<path d="M${x0+12*wk},${20+T.length*26-8} l8,-10 l8,10 l-8,10 z" fill="var(--amber)"/>`;s+=txt(x0+12*wk,20+T.length*26+22,'Start Pilotbetrieb',{s:10,c:'var(--amber)'});
 s+=box(20,20+T.length*26+8,14,10,'var(--violet)','none',2);s+=txt(40,20+T.length*26+17,'kritischer Pfad – jede Verzögerung hier verschiebt den Meilenstein',{a:'start',s:11,c:'var(--dim)'});
 return wrap('0 0 920 '+(20+T.length*26+40),s,'Meilensteinplan rückwärts gedacht: Vom Pilotstart in Woche 12 zurück zu den Aufgaben, die dafür fertig sein müssen.');}

function network(){const N=[['A','Kick-Off',1,60,100],['B','Installation',2,190,40],['C','Design-Vorgaben Kunde',3,190,160],['D','Design umsetzen',2,340,160],['E','SSO-Zugänge Kunde',2,340,40],['F','Content (Kunde)',4,490,100],['G','Pilot',3,640,100]];
 const E=[['A','B'],['A','C'],['C','D'],['B','E'],['D','F'],['E','F'],['F','G']];const crit=['A','C','D','F','G'];let s='';
 const pos={};N.forEach(n=>pos[n[0]]=[n[3],n[4]]);
 E.forEach(([a,b])=>{const c=crit.includes(a)&&crit.includes(b);s+=`<line x1="${pos[a][0]+55}" y1="${pos[a][1]+20}" x2="${pos[b][0]-5}" y2="${pos[b][1]+20}" stroke="${c?'var(--violet)':'var(--border-v)'}" stroke-width="${c?3:1.5}" marker-end="url(#ah)"/>`;});
 N.forEach(([id,t,d,x,y])=>{const c=crit.includes(id);s+=box(x-55,y,110,40,c?'var(--violet-d)':'var(--navy-3)',c?'var(--violet)':'var(--border)',8);s+=txt(x,y+17,t,{s:10.5,w:700});s+=txt(x,y+32,d+' Wo',{s:10,c:'var(--dim)'});});
 s+=txt(60,225,'Pfad A–C–D–F–G: 1+3+2+4+3 = 13 Wochen → kritisch.   Pfad A–B–E–F–G: 1+2+2+4+3 = 12 Wochen → 1 Woche Puffer. Verzögert sich die SSO-Zugangslieferung um 2 Wochen, wird dieser Pfad kritisch.',{a:'start',s:10.5,c:'var(--dim)'});
 return wrap('0 0 800 240',s,'Netzplan: Aufgaben als Knoten, Pfeile als Abhängigkeiten. Der längste Weg vom Start zum Ziel ist der kritische Pfad.');}

function cashflow(){const P=['Kick-Off','Einführung','Anpassung','Content','Pilot','Live'];const cost=[8,14,22,10,12,6];const inv=[0,30,0,35,0,35];let s='';const x0=60,y0=180,bw=90;
 s+=`<line x1="${x0}" y1="${y0}" x2="${x0+P.length*bw+20}" y2="${y0}" stroke="var(--border)"/>`;
 P.forEach((p,i)=>{const x=x0+i*bw+10;s+=box(x,y0-cost[i]*4,32,cost[i]*4,'var(--red)','none',3);if(inv[i])s+=box(x+36,y0-inv[i]*4,32,inv[i]*4,'var(--green)','none',3);s+=txt(x+34,y0+16,p,{s:11,c:'var(--dim)'});});
 let cum=0,path='';[0,1,2,3,4,5].forEach(i=>{cum+=inv[i]-cost[i];const x=x0+i*bw+44,y=y0-60-cum*2;path+=(i?'L':'M')+x+','+y+' ';s+=`<circle cx="${x}" cy="${y}" r="4" fill="var(--amber)"/>`;});
 s+=`<path d="${path}" fill="none" stroke="var(--amber)" stroke-width="2" stroke-dasharray="5 4"/>`;
 s+=box(620,20,14,10,'var(--red)','none',2);s+=txt(640,29,'Aufwand (Stunden)',{a:'start',s:11,c:'var(--dim)'});
 s+=box(620,38,14,10,'var(--green)','none',2);s+=txt(640,47,'Rechnung am Meilenstein',{a:'start',s:11,c:'var(--dim)'});
 s+=`<line x1="620" y1="61" x2="634" y2="61" stroke="var(--amber)" stroke-width="2" stroke-dasharray="5 4"/>`;s+=txt(640,65,'Saldo (vorfinanziert ↓)',{a:'start',s:11,c:'var(--dim)'});
 return wrap('0 0 820 210',s,'Bis zum nächsten abrechenbaren Meilenstein finanziert lern.link die Arbeit vor. Jede Woche Verzug kostet Liquidität – nicht erst am Ende.');}

function spectrum(){let s='';s+=`<line x1="60" y1="60" x2="760" y2="60" stroke="var(--border-v)" stroke-width="3"/>`;
 s+=txt(60,40,'Klassisch / Wasserfall',{a:'start',w:700,s:12,c:'var(--dim)'});s+=txt(760,40,'Agil / Scrum',{a:'end',w:700,s:12,c:'var(--dim)'});
 s+=`<circle cx="410" cy="60" r="12" fill="var(--violet)"/>`;s+=txt(410,92,'lern.link: hybrid',{w:700,s:13,c:'var(--violet-l)'});
 s+=txt(410,110,'Feste Phasen und Meilensteine (Vertrag, Abrechnung) + wöchentlich prüfen und anpassen (Inhalt, Reihenfolge)',{s:11,c:'var(--dim)'});
 const T=[['Zeit','fix'],['Kosten','fix'],['Qualität','fix'],['Umfang','flexibel']];T.forEach(([t,v],i)=>{const x=110+i*160;s+=box(x,140,140,52,v==='fix'?'var(--navy-3)':'rgba(117,112,255,.2)',v==='fix'?'var(--border)':'var(--violet)');s+=txt(x+70,161,t,{w:700,s:13});s+=txt(x+70,181,v,{s:11,c:v==='fix'?'var(--dim)':'var(--violet-l)'});});
 s+=txt(410,215,'PRINCE2 Agile: Zeit und Kosten fixieren, Umfang flexibel halten (MoSCoW: Must / Should / Could / Won’t)',{s:11,c:'var(--dim2)'});
 return wrap('0 0 820 230',s);}

function kanban(){let s='';const C=[['Backlog',5],['In Arbeit (WIP 3)',3],['Warten auf Kunde',4],['Erledigt',6]];C.forEach(([t,n],i)=>{const x=20+i*200;s+=box(x,15,185,180,'var(--navy-3)','var(--border)');s+=txt(x+92,38,t,{w:700,s:12,c:i===2?'var(--amber)':'var(--violet-l)'});for(let k=0;k<n;k++)s+=box(x+12,52+k*22,160,16,i===2?'rgba(245,166,35,.35)':i===3?'rgba(29,188,138,.3)':'var(--navy)','none',3);});
 s+=txt(410,218,'Kanban-Blick auf ein Projekt: Die Spalte „Warten auf Kunde“ ist eure Risikospalte – sie füllt sich still.',{s:11,c:'var(--dim2)'});
 return wrap('0 0 820 230',s);}

function riskcurve(){let s='';const x0=60,y0=190;s+=`<line x1="${x0}" y1="${y0}" x2="760" y2="${y0}" stroke="var(--border)"/><line x1="${x0}" y1="20" x2="${x0}" y2="${y0}" stroke="var(--border)"/>`;
 s+=`<path d="M${x0},${y0-10} C 300,${y0-15} 520,${y0-40} 760,30" fill="none" stroke="var(--red)" stroke-width="3"/>`;
 s+=`<path d="M${x0},${y0-10} C 300,${y0-20} 520,${y0-60} 760,${y0-70}" fill="none" stroke="var(--green)" stroke-width="3" stroke-dasharray="6 4"/>`;
 ['Kick-Off','Anpassung','Content','Pilot','Live'].forEach((p,i)=>s+=txt(x0+40+i*165,y0+18,p,{s:11,c:'var(--dim2)'}));
 s+=`<text transform="translate(30,105) rotate(-90)" fill="var(--violet-l)" font-size="11" font-weight="700" text-anchor="middle" style="${F}">KOSTEN DER BEHEBUNG</text>`;
 s+=txt(745,50,'ungemanagt: Risiko wird Problem',{a:'end',s:11,c:'var(--red)',w:700});s+=txt(745,y0-78,'früh erkannt & behandelt',{a:'end',s:11,c:'var(--green)',w:700});
 return wrap('0 0 820 220',s,'Ein Risiko, das keiner anschaut, verschwindet nicht. Es wird teurer – und taucht als Problem genau dann auf, wenn am wenigsten Zeit ist.');}

function riskmatrix(){let s='';const L=['gering','mittel','hoch'];for(let w=0;w<3;w++)for(let a=0;a<3;a++){const sc=(w+1)*(a+1);const c=sc>=6?'rgba(224,82,82,.45)':sc>=4?'rgba(245,166,35,.4)':'rgba(29,188,138,.3)';s+=box(120+a*120,20+(2-w)*60,115,55,c,'var(--border)',4);s+=txt(177+a*120,52+(2-w)*60,sc,{w:800,s:16});}
 L.forEach((l,i)=>{s+=txt(177+i*120,215,l,{s:11,c:'var(--dim)'});s+=txt(105,55+(2-i)*60,l,{a:'end',s:11,c:'var(--dim)'});});
 s+=txt(300,235,'AUSWIRKUNG →',{s:11,w:700,c:'var(--violet-l)'});s+=`<text transform="translate(40,110) rotate(-90)" fill="var(--violet-l)" font-size="11" font-weight="700" text-anchor="middle" style="${F}">WAHRSCHEINLICHKEIT →</text>`;
 s+=txt(520,50,'Score ≥ 6: Maßnahme jetzt',{a:'start',s:12,w:700,c:'var(--red)'});s+=txt(520,80,'4–5: beobachten, Trigger definieren',{a:'start',s:12,w:700,c:'var(--amber)'});s+=txt(520,110,'≤ 3: akzeptieren',{a:'start',s:12,w:700,c:'var(--green)'});
 s+=txt(520,150,'Vier Strategien (IPMA):',{a:'start',s:12,w:700,c:'var(--violet-l)'});['Vermeiden – Ursache beseitigen','Vermindern – Wahrscheinlichkeit oder Wirkung senken','Übertragen – Vertrag, Partner, Versicherung','Akzeptieren – bewusst, mit Puffer'].forEach((t,i)=>s+=txt(520,172+i*17,t,{a:'start',s:11,c:'var(--dim)'}));
 return wrap('0 0 820 250',s);}

function dependency(){let s='';s+=box(300,90,220,70,'var(--navy)','var(--violet)',10);s+=txt(410,118,'Projekt Nordlicht',{w:700,s:14});s+=txt(410,140,'Owner: Kundenbetreuung',{s:11,c:'var(--dim)'});
 const D=[['Kunde',60,30,'Zugänge, Content, Freigaben, Entscheidungen','var(--amber)'],['Partnerbetrieb',60,180,'Lizenz-Plugin, Hosting-Termin','var(--red)'],['Technik intern',640,30,'Kapazität, Urlaub, Vertretung','var(--violet-l)'],['Andere Projekte',640,180,'Teilen sich dieselben Leute','var(--dim2)']];
 D.forEach(([t,x,y,d,c])=>{s+=box(x,y,200,60,'var(--navy-3)',c,8);s+=txt(x+100,y+24,t,{w:700,s:13,c});s+=txt(x+100,y+44,d,{s:10.5,c:'var(--dim)'});s+=`<line x1="${x<300?x+200:x}" y1="${y+30}" x2="${x<300?300:520}" y2="125" stroke="${c}" stroke-width="2" stroke-dasharray="5 4"/>`;});
 return wrap('0 0 820 260',s,'Abhängigkeiten nach außen sind die gefährlichsten: Ihr könnt sie nicht erzwingen, nur früh anfordern, terminieren und nachfassen.');}

function mta(){let s='';const x0=90,y0=200,w=600,h=170;s+=`<line x1="${x0}" y1="${y0}" x2="${x0+w}" y2="${y0}" stroke="var(--border)"/><line x1="${x0}" y1="${y0-h}" x2="${x0}" y2="${y0}" stroke="var(--border)"/>`;
 for(let i=0;i<=8;i++){s+=txt(x0+i*w/8,y0+16,'W'+(i*2),{s:10,c:'var(--dim2)'});s+=txt(x0-8,y0-i*h/8+4,'W'+(i*2),{a:'end',s:10,c:'var(--dim2)'});}
 s+=`<line x1="${x0}" y1="${y0}" x2="${x0+w}" y2="${y0-h}" stroke="var(--border-v)" stroke-dasharray="4 4"/>`;
 const M=[['Content-Start',[6,6,6,7,8,8],'var(--green)'],['Pilotstart',[12,12,12,12,13,14],'var(--amber)'],['Live',[16,16,16,16,16,16],'var(--violet-l)']];
 M.forEach(([t,v,c])=>{let p='';v.forEach((y,i)=>{const px=x0+i*2*w/16,py=y0-y*h/16;p+=(i?'L':'M')+px+','+py+' ';s+=`<circle cx="${px}" cy="${py}" r="3.5" fill="${c}"/>`;});s+=`<path d="${p}" fill="none" stroke="${c}" stroke-width="2"/>`;s+=txt(x0+5*2*w/16+12,y0-v[5]*h/16+4,t,{a:'start',s:11,c,w:700});});
 s+=txt(x0+w/2,y0+34,'BERICHTSZEITPUNKT →',{s:11,w:700,c:'var(--violet-l)'});s+=`<text transform="translate(28,${y0-h/2}) rotate(-90)" fill="var(--violet-l)" font-size="11" font-weight="700" text-anchor="middle" style="${F}">GEPLANTER TERMIN</text>`;
 return wrap('0 0 820 245',s,'Meilenstein-Trendanalyse: Eine Linie, die steigt, ist ein Meilenstein, der wandert. Zwei Verschiebungen in Folge sind kein Zufall, sondern ein Muster.');}

function meetings(){let s='';const x0=40;s+=`<line x1="${x0}" y1="110" x2="780" y2="110" stroke="var(--border-v)" stroke-width="2"/>`;
 const M=[['Kick-Off',60,'einmal · 90 Min · alle Teams + Kunde','var(--violet)'],['Weekly intern',200,'wöchentlich · 15 Min · KuBe + Technik','var(--green)'],['Kunden-Update',330,'wöchentlich · schriftlich · 10 Min','var(--green)'],['Meilenstein-Review',470,'je Meilenstein · 45 Min · mit Kunde','var(--amber)'],['Retro',620,'je Phase oder Projektende · 30 Min','var(--violet-l)'],['Health Check',740,'bei Rot · ad hoc · 30 Min','var(--red)']];
 M.forEach(([t,x,d,c],i)=>{const up=i%2===0;s+=`<circle cx="${x}" cy="110" r="7" fill="${c}"/>`;s+=txt(x,up?60:150,t,{w:700,s:12,c});s+=txt(x,up?78:168,d.split(' · ')[0]+' · '+d.split(' · ')[1],{s:10.5,c:'var(--dim)'});s+=txt(x,up?93:183,d.split(' · ')[2],{s:10.5,c:'var(--dim2)'});});
 return wrap('0 0 820 200',s,'Jedes Meeting hat Zweck, Teilnehmer, Dauer und ein Ergebnis-Artefakt. Fehlt eines davon, ist es kein Meeting, sondern ein Gespräch.');}

function odoo(){let s='';const S=[['Vertrieb',20,['Lead','Angebot','Verkaufsauftrag']],['Kundenbetreuung',290,['Projekt','Meilensteine','Kundenaufgaben','Rechnung auslösen']],['Technik',560,['Aufgaben','Status','Zeiterfassung']]];
 S.forEach(([t,x,items])=>{s+=box(x,15,240,170,'var(--navy-3)','var(--border)');s+=txt(x+120,40,t,{w:700,s:14,c:'var(--violet-l)'});items.forEach((it,i)=>{s+=box(x+20,55+i*30,200,24,'var(--navy)','var(--border-v)',6);s+=txt(x+120,72+i*30,it,{s:12});});});
 s+=arrow(262,100,286,100);s+=arrow(532,100,556,100);s+=`<path d="M660,185 Q410,230 410,185" fill="none" stroke="var(--green)" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#ah)"/>`;s+=txt(530,222,'Fertigmeldung → Meilenstein → Rechnung',{s:11,c:'var(--green)'});
 return wrap('0 0 820 240',s,'Ein Objekt pro Übergabe. Der Verkaufsauftrag wird zum Projekt, das Projekt hat Meilensteine, Meilensteine lösen Rechnungen aus. Chatter kommentiert, ersetzt aber nichts davon.');}

function change(){let s='';const C=[['Erkennen',410,40],['Bewerten',640,130],['Entscheiden lassen',410,220],['Kommunizieren',180,130]];C.forEach(([t,x,y],i)=>{s+=`<circle cx="${x}" cy="${y}" r="38" fill="${i===2?'var(--violet-d)':'var(--navy-3)'}" stroke="var(--violet)" stroke-width="2"/>`;s+=txt(x,y+4,t,{s:10.5,w:700});});
 s+=`<path d="M448,55 Q600,70 630,92" fill="none" stroke="var(--violet-l)" stroke-width="2" marker-end="url(#ah)"/><path d="M630,168 Q600,210 448,215" fill="none" stroke="var(--violet-l)" stroke-width="2" marker-end="url(#ah)"/><path d="M372,215 Q220,210 190,168" fill="none" stroke="var(--violet-l)" stroke-width="2" marker-end="url(#ah)"/><path d="M190,92 Q220,70 372,55" fill="none" stroke="var(--violet-l)" stroke-width="2" marker-end="url(#ah)"/>`;
 s+=txt(410,130,'Plan + Odoo',{s:11,c:'var(--dim2)'});s+=txt(410,146,'am selben Tag nachziehen',{s:11,c:'var(--dim2)'});
 return wrap('0 0 820 270',s,'Der Kreis schließt sich: Jede kommunizierte Änderung ist der neue Plan, an dem die nächste Abweichung erkannt wird.');}

function driver(){let s='';const C=[['PLANEN',120],['TUN',300],['PRÜFEN',480],['ANPASSEN',660]];C.forEach(([t,x],i)=>{s+=chev(x-80,40,170,44,i===2?'var(--violet)':'var(--navy-3)');s+=txt(x,67,t,{w:800,s:13});});
 const Q=['Wo stehen wir gegen den Plan?','Was ist überfällig, seit wann?','Welches Risiko ist näher gekommen?','Was braucht der Kunde als Nächstes von uns – und wir von ihm?'];Q.forEach((q,i)=>s+=txt(60,120+i*20,'• '+q,{a:'start',s:12,c:'var(--dim)'}));
 s+=`<path d="M700,90 Q760,140 410,150 Q60,160 60,95" fill="none" stroke="var(--violet-l)" stroke-width="1.5" stroke-dasharray="5 4" marker-end="url(#ah)"/>`;
 s+=txt(500,135,'wöchentlich, 15 Minuten pro Projekt',{a:'start',s:11,c:'var(--violet-l)',w:700});
 return wrap('0 0 820 205',s,'Deming-Kreis (PDCA) als Wochenroutine. Wer prüft, sitzt am Steuer. Wer nur tut, wird gefahren.');}

return {lifecycle,handover,canvas,stakeholder,gantt,network,cashflow,spectrum,kanban,riskcurve,riskmatrix,dependency,mta,meetings,odoo,change,driver};
})();
