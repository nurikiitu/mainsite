/* 1-сынып · Математика · 17-сабақ · 8 санының құрамы (оқулық 38–39-бет) */
(function(){
const dg=(r,n=8)=>`<div style="display:flex;gap:4px">${[...Array(n)].map((_,i)=>`<span style="width:26px;height:26px;border-radius:50%;background:${i<r?'#e53935':'#29b6f6'}"></span>`).join('')}</div>`;
const pa=(p,a)=>`<div style="font-size:30px;letter-spacing:-4px">${'🍐'.repeat(p)}<br>${'🍎'.repeat(a)}</div>`;
const tree=(n,w)=>({n,w});
LESSON({
goal:'8 санының құрамын анықтайсың. (Пысықтау)',
introExtra(w){w.append(el('div','',`<div style="display:flex;gap:50px;align-items:center">${houseView(8,[[1,7],[2,6],[3,5],[4,4],[5,3],[6,2],[7,1]],'#6f7fd0')}<div style="display:flex;flex-direction:column;gap:8px">${[7,6,5,4,3,2,1].map(r=>dg(r)).join('')}</div></div>`))},
book:[
{num:1,title:'Суретке қара. 8 санының құрамына мысалдар ойластыр.',build(b,T){
 const P=[['<span style="font-size:42px">🍏🍎🍎🍎🍎🍎🍎🍎</span>',1,7,'Неше алма бар?'],['<span style="font-size:42px;letter-spacing:-6px"><span style="filter:hue-rotate(-30deg)">🟧🟧🟧🟧</span><span>🟪🟪🟪🟪</span></span>',4,4,'Барлығы неше қағаз сүлгі бар?'],
  ['<span style="font-size:42px"><span style="filter:hue-rotate(80deg)">🥣🥣</span>🥣🥣🥣🥣🥣🥣</span>',2,6,'Барлығы неше кесе бар?'],['<span style="font-size:42px">🧁🧁🧁<span style="filter:hue-rotate(90deg)">🧁🧁🧁🧁🧁</span></span>',3,5,'Барлығы неше тоқаш бар?']];
 K.fill(b,T,{fs:44,vals:[0,1,2,3,4,5,6,7,8],rows:P.map(()=>[null,'+',null,'=',null]),ans:P.map(p=>[p[1],p[2],8]),pics:P.map(p=>`<div style="width:560px;text-align:right"><div class="mut" style="font-size:20px">${p[3]}</div>${p[0]}</div>`)})}},
{rem:{title:'8 санының құрамы',build(b,T){col(b,20,'center');b.append(el('div','',`<div style="display:flex;gap:80px;align-items:center">${houseView(8,[[1,7],[2,6],[3,5],[4,4]],'#6f7fd0')}<div style="font-size:50px;font-weight:900;line-height:1.45">8 = 1 + 7 = 7 + 1<br>8 = 2 + 6 = 6 + 2<br>8 = 3 + 5 = 5 + 3<br>8 = 4 + 4</div></div>`))}},
 num:2,label:'ЖҰПТЫҚ ЖҰМЫС',k:'pair',title:'8 санының құрамын айт.',build(b,T){b.style.justifyContent='center';b.style.alignItems='center';b.style.gap='60px';
 b.append(el('div','',`<div style="display:flex;flex-direction:column;gap:12px">${[7,6,5,4,3,2,1].map(r=>dg(r)).join('')}</div>`));const h=el('div','');K.house(h,T,{n:8,pairs:[7,6,5,4,3,2,1].map(a=>[a,8-a,1])});b.append(h)}},
{num:3,label:'ӨЗІНДІК ЖҰМЫС',k:'self',title:'Сурет бойынша сандардың қосындысы мен айырмасын құрастыр.',build(b,T){
 K.fillGroups(b,T,{fs:36,gap:18,vals:[0,1,2,3,4,5,6,7,8],groups:[[7,1],[6,2],[5,3],[4,4]].map(([p,a])=>({pic:pa(p,a),rows:p===a?[[p,'+',null,'=',8],[8,'-',p,'=',null]]:[[p,'+',null,'=',8],[a,'+',null,'=',8],[8,'-',p,'=',null],[8,'-',a,'=',null]],ans:p===a?[[a],[a]]:[[a],[p],[a],[p]]}))})}},
{num:4,label:'СЕН ЗЕРТТЕУШІСІҢ',k:'res',title:'Бос орындарға тиісті сандарды ата. Өзің 1-ден 10-ға дейінгі сандар қатарын құрастыр.',build(b,T){K.seq(b,T,{rounds:[{q:'1-ден 10-ға дейін',seq:[1,2,3,4,5,6,7,8,9,10],miss:[2,5,8],from:0,to:10},{q:'Енді өзің: 1-ден 10-ға дейінгі қатарды толық құрастыр',seq:[1,2,3,4,5,6,7,8,9,10],miss:[0,1,2,3,4,5,6,7,8,9],from:1,to:10}]})}}
],
extra:[
{title:'Екі себетке бөл: 8 алмұртты неше тәсілмен бөлуге болады?',build(b,T){K.split(b,T,{n:8,e:'🍐',cols:['#fff','#ffe0b2','#c8e6c9'],hint:'Алмұртты бассаң, ол екінші табаққа ауысады'})}},
{title:'Бос ұяшықты толтыр (8-ге дейін).',build(b,T){K.fill(b,T,{fs:54,vals:[0,1,2,3,4,5,6,7,8],rows:[[8,'=',5,'+',null],[8,'-',null,'=',2],[null,'+',4,'=',8],[8,'=',1,'+',null,'+',4],[8,'-',null,'-',3,'=',0]],ans:[[3],[6],[4],[3],[5]]})}},
{title:'Мәні 8 болатын өрнектерді тап.',build(b,T){const P=[['4 + 4',1],['5 + 3',1],['6 + 2',1],['7 + 1',1],['8 − 0',1],['2 + 6',1],['4 + 3',0],['8 − 1',0],['5 + 2',0],['6 + 1',0],['3 + 3',0],['8 − 8',0]];
 K.pickAll(b,T,{cols:6,size:180,title:'Мәні 8 болатын өрнектерді бас',tiles:P.map(([t,ok])=>({h:`<span style="font-size:46px;font-weight:900">${t}</span>`,ok}))})}}
],
duel:{title:'8 санының құрамы: кім жылдам?',gen:DG.compose([6,7,8])},
games:[GM.houses({nums:[7,8]}),GM.quiz({icon:'🧮',title:'🧮 8-ге дейін есепте!',gen:()=>DG.add(8)()})]
});
})();
