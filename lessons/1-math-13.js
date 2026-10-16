/* 1-сынып · Математика · 13-сабақ · 6 санының құрамы (оқулық 30–31-бет) */
(function(){
const hx=(c,s=40)=>`<svg width="${s}" height="${s}" viewBox="0 0 100 100"><path d="M25 8 H75 L97 50 L75 92 H25 L3 50Z" fill="${c}"/></svg>`;
const sq=(c,s=40)=>`<svg width="${s}" height="${s}" viewBox="0 0 100 100"><rect x="6" y="6" width="88" height="88" fill="${c}"/></svg>`;
const tr=(c,s=40)=>`<svg width="${s}" height="${s}" viewBox="0 0 100 100"><path d="M50 6 L96 92 H4Z" fill="${c}" stroke="#555" stroke-width="${c==='#fff'?5:0}"/></svg>`;
const ball=(c,s=40)=>`<svg width="${s}" height="${s}" viewBox="0 0 100 100"><circle cx="50" cy="50" r="44" fill="${c}"/><circle cx="36" cy="34" r="12" fill="#fff6"/></svg>`;
const row=(f,a,c1,b,c2)=>`<div style="display:flex;gap:6px">${f(c1).repeat(a)}${f(c2).repeat(b)}</div>`;
const grid=(r,bl)=>`<div style="display:grid;grid-template-columns:repeat(6,34px);gap:4px;background:#eaf4ff;padding:6px;border:3px solid #9ec3ee">${[...Array(6)].map((_,i)=>hx(i<r?'#e53935':'#29b6f6',34)).join('')}</div>`;
LESSON({
goal:'6 санының құрамын анықтайтын боласың. (Пысықтау)',
introExtra(w){w.append(el('div','',`<div style="display:flex;gap:50px;align-items:center">${houseView(6,[[1,5],[2,4],[3,3],[4,2],[5,1]])}<div style="display:flex;flex-direction:column;gap:6px">${[1,2,3,4,5].map(r=>grid(r)).join('')}</div></div>`))},
book:[
{num:1,title:'Суретке қара. Заттарды сана. Заттардың санын салыстыр.',build(b,T){
 const board=`<div style="background:#2e6b4a;border:10px solid #8d5a2b;border-radius:8px;padding:14px 20px;display:flex;flex-direction:column;gap:12px;align-items:center">${row(tr,2,'#fff',4,'#ec407a')}${row(sq,3,'#fdd835',3,'#42a5f5')}${row(hx,5,'#e53935',1,'#fdd835')}</div>`;
 const desk=`<div style="display:flex;gap:30px;align-items:flex-end;margin-top:10px"><div style="display:flex;gap:4px">${'<span style="font-size:40px">🟩</span>'.repeat(0)}${[0,1,2].map(()=>tr('#43a047',44)).join('')}${tr('#e53935',44)}</div><div style="display:flex;gap:4px">${ball('#7e57c2',40).repeat(2)}${ball('#1e88e5',40).repeat(4)}</div></div>`;
 const left=el('div','',board+desk);left.style.cssText='display:flex;flex-direction:column;align-items:center;flex:none';b.append(left);
 const r=el('div','');r.style.cssText='flex:1;display:flex;align-items:center;justify-content:center';b.append(r);
 K.fill(r,T,{fs:44,signs:['>','<','='],vals:[0,1,2,3,4,5,6],rows:[[null,'s',null],[null,'s',null],[null,'s',null],[null,'s',null],[null,'s',null]],ans:[[2,'<',4],[3,'=',3],[5,'>',1],[3,'>',1],[2,'<',4]],
  pics:[tr('#fff',44)+' '+tr('#ec407a',44),sq('#fdd835',44)+' '+sq('#42a5f5',44),hx('#e53935',44)+' '+hx('#fdd835',44),tr('#43a047',44)+' '+tr('#e53935',44),ball('#7e57c2',44)+' '+ball('#1e88e5',44)].map(x=>`<div style="width:110px;display:flex;gap:6px">${x}</div>`)})}},
{rem:{title:'6 санының құрамы',build(b,T){col(b,20,'center');b.append(el('div','',`<div style="display:flex;gap:80px;align-items:center">${houseView(6,[[1,5],[2,4],[3,3]])}<div style="font-size:50px;font-weight:900;line-height:1.45">6 = 1 + 5 = 5 + 1<br>6 = 2 + 4 = 4 + 2<br>6 = 3 + 3</div></div>`))}},
 num:2,title:'6 санының құрамын айт.',build(b,T){b.style.justifyContent='center';b.style.alignItems='center';b.style.gap='60px';
 b.append(el('div','',`<div style="display:flex;flex-direction:column;gap:6px">${[5,4,3,2,1].map(r=>grid(r)).join('')}</div>`));const h=el('div','');K.house(h,T,{n:6,pairs:[[5,1,1],[4,2,1],[3,3,1],[2,4,1],[1,5,1]]});b.append(h)}},
{num:3,label:'ӨЗІНДІК ЖҰМЫС',k:'self',title:'Бос орындарға тиісті сандарды ата және жаз.',build(b,T){
 K.fillGroups(b,T,{fs:44,vals:[0,1,2,3,4,5,6],groups:[{pic:grid(3),rows:[[3,'+',null,'=',6],[6,'-',3,'=',null]],ans:[[3],[3]]},
  {pic:grid(4),rows:[[4,'+',null,'=',6],[null,'+',4,'=',6],[6,'-',2,'=',null],[6,'-',4,'=',null]],ans:[[2],[2],[4],[2]]},
  {pic:grid(5),rows:[[5,'+',null,'=',6],[null,'+',5,'=',6],[6,'-',1,'=',null],[6,'-',5,'=',null]],ans:[[1],[1],[5],[1]]}]})}},
{num:4,label:'МАТЕМАТИКА КҮНДЕЛІКТІ ӨМІРДЕ',k:'life',title:'Есепті шығар. Алты қарындашты үш стақанға бөліп салды. Егер стақандардың біреуінде 2 қарындаш болса, онда қалған екі стақанда неше қарындаштан болуы мүмкін?',build(b,T){
 K.split(b,T,{n:6,fixed:2,hint:'Қарындашты бассаң, ол көрші стақанға ауысады (бірінші стақанда әрқашан 2 қарындаш)'})}}
],
extra:[
{title:'Екі ыдысқа бөл: 6 алманы неше тәсілмен бөлуге болады?',build(b,T){K.split(b,T,{n:6,e:'🍎',cols:['#fff','#ffe0b2','#c8e6c9'],hint:'Алманы бассаң, ол екінші табаққа ауысады'})}},
{title:'Жетпейтін санды тап: сиқырлы жұптар.',build(b,T){K.fill(b,T,{fs:56,vals:[0,1,2,3,4,5,6],rows:[[6,'=',2,'+',null],[6,'=',null,'+',1],[6,'=',1,'+',null,'+',2],[6,'-',null,'-',2,'=',1],[null,'-',3,'=',3]],ans:[[4],[5],[3],[3],[6]]})}},
{title:'Қай өрнектің мәні 6? Барлығын тап.',build(b,T){const P=[['3 + 3',1],['5 + 1',1],['2 + 4',1],['6 − 0',1],['1 + 5',1],['4 + 2',1],['6 − 1',0],['3 + 2',0],['4 + 1',0],['6 − 6',0],['2 + 2',0],['5 − 0',0]];
 K.pickAll(b,T,{cols:6,size:180,title:'Мәні 6 болатын өрнектерді бас',tiles:P.map(([t,ok])=>({h:`<span style="font-size:46px;font-weight:900">${t}</span>`,ok}))})}}
],
duel:{title:'6 санының құрамы: кім жылдам?',gen:DG.compose([4,5,6])},
games:[GM.houses({nums:[5,6]}),GM.memory({title:'🧩 6-ны құра: жұбын тап (екеуі бірге 6)',pairs:()=>[[1,5],[2,4],[3,3],[0,6],[6,0]].slice(0,5).map(([a,c])=>[`<div style="text-align:center">${dots(a||0,110)}<div style="font-size:30px;font-weight:900">${a}</div></div>`,`<span style="font-size:80px;font-weight:900;color:#3b7dd8">${c}</span>`])})]
});
})();
