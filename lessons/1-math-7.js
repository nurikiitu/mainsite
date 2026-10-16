/* 1-сынып · Математика · 7-сабақ · Қосу және азайту, пысықтау (оқулық 18–19-бет) */
(function(){
const KC=['#1e2a8a','#1e2a8a','#29b6f6','#1e2a8a'];
LESSON({
goal:'Қосу және азайтуды орындайсың. (Пысықтау)',
introExtra(w){w.append(el('div','',`<div style="display:flex;gap:40px">${nline(3,[1,1])}${nline(3,[-1,-1],3)}</div>`))},
book:[
{num:1,title:'Тақтадағы жазуларға қара. Түсіндір.',build(b,T){K.chalk(b,T,{vals:[0,1,2,3],pics:['🍄 🍄🍄','<s style="opacity:.6">🌷</s>🌷🌷','🍎🍎 🍎','<s style="opacity:.6">🍌🍌</s>🍌'],
 rows:[[1,'+',2,'=',null],[3,'-',1,'=',null],[2,'+',1,'=',null],[3,'-',2,'=',null]],ans:[[3],[2],[3],[1]]})}},
{rem:{title:'2 санын бөліктеп қосуға, азайтуға болады.',build(b,T){col(b,20,'center');
 b.append(el('div','',`<div style="display:flex;gap:60px;align-items:center"><div style="text-align:center"><div style="font-size:54px;font-weight:900">1 + <span style="color:#e53935">2</span> = 1 + <span style="color:#e53935">1</span> + <span style="color:#e53935">1</span> = 3</div>${nline(3,[1,1],1)}</div></div>`));
 b.append(el('div','',`<div style="text-align:center"><div style="font-size:54px;font-weight:900">3 − <span style="color:#1e63d6">2</span> = 3 − <span style="color:#1e63d6">1</span> − <span style="color:#1e63d6">1</span> = 1</div>${nline(3,[-1,-1],3)}</div>`))}},
 num:2,title:'Балалардың қалай есептегенін айт.',build(b,T){col(b,10,'center');T.series(b,[
 {q:`<div>${nline(3,[1,1],1)}</div><div class="qline" style="font-size:48px">1 + 2 = 1 + 1 + 1 = ?</div><div class="mut" style="font-size:24px">Қыз 2-ні бөліктеп қосты: алдымен 1, сосын тағы 1</div>`,o:[1,2,3],a:3},
 {q:`<div>${nline(3,[-1,-1],3)}</div><div class="qline" style="font-size:48px">3 − 2 = 3 − 1 − 1 = ?</div><div class="mut" style="font-size:24px">Ұл 2-ні бөліктеп азайтты: алдымен 1, сосын тағы 1</div>`,o:[0,1,2],a:1},
 {q:`<div>${nline(3,[1,1],0)}</div><div class="qline" style="font-size:48px">0 + 1 + 1 = ?</div>`,o:[1,2,3],a:2},
 {q:`<div>${nline(3,[-1,-1],2)}</div><div class="qline" style="font-size:48px">2 − 1 − 1 = ?</div>`,o:[0,1,2],a:0}])}},
{num:3,label:'ӨЗІНДІК ЖҰМЫС',k:'self',title:'Сандардың қосындысы мен айырмасының мәнін есепте.',build(b,T){K.notebook(b,T,{cols:3,vals:[0,1,2,3],rows:[[1,'+',1,'=',null],[2,'-',1,'=',null],[3,'-',1,'=',null],[2,'+',1,'=',null],[3,'-',3,'=',null],[1,'+',2,'=',null]],ans:[[2],[1],[2],[3],[0],[3]]})}},
{num:4,label:'ЖҰПТЫҚ ЖҰМЫС',k:'pair',title:'Суретке қара. Неше жеңіл машина, неше автобус, неше шырша бар? Цифрлар мен таңбалардың көмегімен жаз.',build(b,T){
 const items=[{e:'🚗',x:22,y:62,s:64},{e:'🚙',x:52,y:70,s:64},{e:'🚌',x:78,y:62,s:84},{e:'🌲',x:10,y:20,s:70},{e:'🌲',x:40,y:16,s:70},{e:'🌲',x:88,y:22,s:70},{e:'🏫',x:22,y:28,s:110},{e:'🎪',x:66,y:24,s:100}];
 const s=T.scene(b,{w:860,h:520,bg:'linear-gradient(#9ccc65 0 48%,#78909c 48% 82%,#9ccc65 82%)',items});
 s.insertAdjacentHTML('afterbegin','<div style="position:absolute;left:0;right:0;top:64%;height:2%;background:repeating-linear-gradient(90deg,#fff 0 40px,transparent 40px 80px)"></div>');
 const side=el('div','side');b.append(side);
 T.series(side,[{q:'<div class="qline">Неше жеңіл машина бар?</div>',o:[1,2,3],a:2},{q:'<div class="qline">Неше автобус бар?</div>',o:[1,2,3],a:1},{q:'<div class="qline">Неше шырша бар?</div>',o:[1,2,3],a:3},
  {q:'<div class="qline">Барлық көлік нешеу? 2 + 1 = ?</div>',o:[1,2,3],a:3},{q:'<div class="qline">Шыршадан машиналарды азайт: 3 − 2 = ?</div>',o:[0,1,2],a:1}],{onEach:()=>s.resetCount()})}},
{num:5,label:'СЕН ЗЕРТТЕУШІСІҢ',k:'res',title:'Суреттер мен жазуларды салыстыр.',build(b,T){
 const p1=`<div style="display:flex;align-items:flex-end">${kid(0,'#1e2a8a','#3e2723',0,0,.9)}${kid(0,'#1e2a8a','#212121',0,0,.9)}<span style="width:16px"></span>${kid(1,'#29b6f6','#3e2723',0,0,.9)}</div>`;
 const p2=`<div style="display:flex;align-items:flex-end">${kid(1,'#29b6f6','#3e2723',0,0,.9)}<span style="width:16px"></span>${kid(0,'#1e2a8a','#3e2723',0,0,.9)}${kid(0,'#1e2a8a','#212121',0,0,.9)}</div>`;
 K.match(b,T,{title:'Суретті бас, сосын оның жазуын бас',cw:380,ch:190,L:[{h:p1,k:'a'},{h:p2,k:'b'}],R:[{h:'<span style="font-size:56px;font-weight:900"><span style="color:#1e63d6">2</span> + <span style="color:#e53935">1</span> = 3</span>',k:'a'},{h:'<span style="font-size:56px;font-weight:900"><span style="color:#e53935">1</span> + <span style="color:#1e63d6">2</span> = 3</span>',k:'b'}]});
 b.append(el('div','goal','<span>БАЙҚАДЫҢ БА?</span>Қосылғыштардың орнын ауыстырсақ та, қосынды өзгермейді: 2 + 1 = 1 + 2'))}}
],
extra:[
{title:'Бөліктеп есепте: бос ұяшықтарды толтыр.',build(b,T){K.fill(b,T,{fs:58,vals:[0,1,2,3],rows:[[1,'+',2,'=',1,'+',1,'+',1,'=',null],[3,'-',2,'=',3,'-',null,'-',1,'=',null],[0,'+',3,'=',0,'+',1,'+',null,'=',null]],ans:[[3],[1,1],[2,3]]})}},
{title:'Қай өрнектің мәні 3-ке тең? Барлығын тап.',build(b,T){const P=[['1 + 2',1],['2 + 1',1],['3 − 0',1],['1 + 1 + 1',1],['0 + 3',1],['3 − 1',0],['1 + 1',0],['3 − 2',0],['2 − 1',0],['2 + 0',0],['3 − 3',0],['1 + 0',0]];
 K.pickAll(b,T,{cols:6,size:190,title:'Мәні 3 болатын өрнектерді бас',tiles:P.map(([t,ok])=>({h:`<span style="font-size:${t.length>6?38:46}px;font-weight:900">${t}</span>`,ok}))})}},
{title:'Сиқырлы таразы: екі жақ тең болуы керек.',build(b,T){K.fill(b,T,{fs:60,vals:[0,1,2,3],rows:[[2,'+',1,'=',1,'+',null],[3,'-',1,'=',1,'+',null],[1,'+',null,'=',3,'-',0],[3,'-',null,'=',2,'-',1]],ans:[[2],[1],[2],[2]],title:'⚖️ Сол жақ пен оң жақтың мәні бірдей болсын'})}}
],
duel:{title:'Кім жылдам есептейді? (3-ке дейін)',gen:DG.add(3)},
games:[
 GM.quiz({icon:'🐸',title:'🐸 Бақа секіреді: сан сәулесімен есепте!',gen:()=>{const a=rnd(0,3),j=rnd(-a,3-a)||1;const t=a+j;if(t<0||t>3)return{q:`<div>${nline(3,[1],0)}</div><div class="qline">0 + 1 = ?</div>`,o:[0,1,2,3],a:1};
  return{q:`<div>${nline(3,[j],a)}</div><div class="qline" style="font-size:56px">${a} ${j>0?'+':'−'} ${Math.abs(j)} = ?</div>`,o:[0,1,2,3],a:t}}}),
 GM.catcher({icon:'🎯',title:'🎯 Мәні 3 болатын өрнекті ғана аула!',good:()=>`<span style="font-size:48px;font-weight:900">${['1 + 2','2 + 1','3 + 0','0 + 3','1 + 1 + 1','3 − 0'][rnd(0,5)]}</span>`,bad:()=>`<span style="font-size:48px;font-weight:900;color:#8a8fa3">${['1 + 1','3 − 1','2 − 1','3 − 2','2 + 0','1 + 0','3 − 3'][rnd(0,6)]}</span>`})
]});
})();
