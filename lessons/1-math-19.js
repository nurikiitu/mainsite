/* 1-сынып · Математика · 19-сабақ · 9 санының құрамы (оқулық 42–43-бет) */
(function(){
const VW='АӘЕЁИІОӨУҰҮЫЭЮЯ';
const word=w=>`<div style="text-align:center"><div style="font-size:40px;font-weight:900;letter-spacing:4px">${w}</div><div style="display:flex;justify-content:center;margin-top:4px">${[...w].map(c=>`<span style="width:30px;height:24px;border:2px solid #333;background:${VW.includes(c)?'#e53935':'#1e63d6'}"></span>`).join('')}</div></div>`;
const cnt=w=>{const v=[...w].filter(c=>VW.includes(c)).length;return[w.length-v,v]};
const xe=(e,fs=46)=>`<span style="position:relative;display:inline-block;font-size:${fs}px"><span style="opacity:.45">${e}</span><b style="position:absolute;left:44%;top:-14%;width:6px;height:128%;background:#222;transform:rotate(-45deg);border-radius:3px"></b></span>`;
LESSON({
goal:'9 санының құрамын анықтайсың. (Пысықтау)',
introExtra(w){w.append(el('div','',`<div style="display:flex;gap:50px;align-items:center">${houseView(9,[[1,8],[2,7],[3,6],[4,5],[5,4],[6,3],[7,2],[8,1]],'#66bb6a')}<div style="font-size:44px;font-weight:900;line-height:1.4">9 = 1 + 8<br>9 = 2 + 7<br>9 = 3 + 6<br>9 = 4 + 5</div></div>`))},
book:[
{num:1,title:'Сөздердің қалай айтылатынын тыңда. Дауысты, дауыссыз дыбыстарды сана. Жазуларды түсіндір.',build(b,T){
 const W=['ҚАЗАҚСТАН','ДОСТЫҚ','ДРУЖБА','ХАЛЫҚ','НАРОД'];
 K.fill(b,T,{fs:40,vals:[0,1,2,3,4,5,6,7,8,9],rows:W.map(()=>[null,'+',null,'=',null]),ans:W.map(w=>{const [c,v]=cnt(w);return[c,v,c+v]}),pics:W.map(w=>`<div style="width:420px;display:flex;justify-content:flex-end">${word(w)}</div>`),
  title:'🔵 дауыссыз + 🔴 дауысты = барлық әріп'})}},
{rem:{title:'9 санының құрамы',build(b,T){col(b,20,'center');b.append(el('div','',`<div style="display:flex;gap:80px;align-items:center">${houseView(9,[[1,8],[2,7],[3,6],[4,5]],'#66bb6a')}<div style="font-size:50px;font-weight:900;line-height:1.45">9 = 1 + 8 = 8 + 1<br>9 = 2 + 7 = 7 + 2<br>9 = 3 + 6 = 6 + 3<br>9 = 4 + 5 = 5 + 4</div></div>`))}},
 num:2,label:'ЖҰПТЫҚ ЖҰМЫС',k:'pair',title:'Досыңа сандардың құрамы бойынша сұрақтар қой.',build(b,T){K.houseRow(b,T,[{n:7,pairs:[1,2,3,4,5,6].map(a=>[a,7-a,1])},{n:8,pairs:[1,2,3,4,5,6,7].map(a=>[a,8-a,1])},{n:9,pairs:[1,2,3,4,5,6,7,8].map(a=>[a,9-a,1])}])}},
{num:3,label:'ӨЗІНДІК ЖҰМЫС',k:'self',title:'Әр суретке сәйкес сандардың қосындысы мен айырмасын таңда. Оны есептеп, жаз.',build(b,T){
 const ex=t=>`<span style="font-size:42px;font-weight:900">${t}</span>`;
 K.match(b,T,{title:'Суретті бас, сосын оның өрнегін бас (бір өрнек артық)',cw:520,cw2:320,ch:120,gap:14,side:true,
  L:[{h:`<div style="display:flex">${'<span style="font-size:42px">🍎</span>'.repeat(6)}${xe('🍎',42).repeat(3)}</div>`,k:'a'},{h:`<div style="display:flex">${'<span style="font-size:46px">🧊</span>'.repeat(3)}${xe('🧊').repeat(3)}</div>`,k:'b'},{h:`<div style="font-size:42px;line-height:1.1">🔵🔵🔵🔵🔵🔵<br>🔴🔴🔴</div>`,k:'c'}],
  R:[{h:ex('9 − 3 = 6'),k:'a'},{h:ex('6 − 3 = 3'),k:'b'},{h:ex('6 + 3 = 9'),k:'c'},{h:ex('9 − 2 = 7'),k:'x'}]})}},
{num:4,label:'СЕН ЗЕРТТЕУШІСІҢ',k:'res',title:'3 санын қалай қосуға және азайтуға болады? Жазуларды түсіндір.',build(b,T){col(b,10,'center');T.series(b,[
 {q:`<div>${nline(9,[1,1,1],6)}</div><div class="qline" style="font-size:46px">6 + 3 = 6 + 1 + 1 + 1 = ?</div>`,o:[7,8,9],a:9},
 {q:`<div>${nline(9,[2,1],6)}</div><div class="qline" style="font-size:46px">6 + 3 = 6 + 2 + 1 = ?</div>`,o:[7,8,9],a:9},
 {q:`<div>${nline(9,[-1,-1,-1],9)}</div><div class="qline" style="font-size:46px">9 − 3 = 9 − 1 − 1 − 1 = ?</div>`,o:[5,6,7],a:6},
 {q:`<div>${nline(9,[-1,-2],9)}</div><div class="qline" style="font-size:46px">9 − 3 = 9 − 1 − 2 = ?</div>`,o:[5,6,7],a:6}])}}
],
extra:[
{title:'Өз атыңдағы дыбыстарды сана: дауысты мен дауыссыз.',build(b,T){
 const W=['АЙГҮЛ','ЕРЛАН','НҰРЛАН','АРУЖАН'];K.fill(b,T,{fs:40,vals:[0,1,2,3,4,5,6,7,8,9],rows:W.map(()=>[null,'+',null,'=',null]),ans:W.map(w=>{const [c,v]=cnt(w);return[c,v,c+v]}),pics:W.map(w=>`<div style="width:380px;display:flex;justify-content:flex-end">${word(w)}</div>`),title:'🔵 дауыссыз + 🔴 дауысты = барлық әріп. Тақтаға өз атыңды жазып, санап көр!'})}},
{title:'3-ті бөліктеп қос және азайт.',build(b,T){K.fill(b,T,{fs:52,vals:[0,1,2,3,4,5,6,7,8,9],rows:[[5,'+',3,'=',5,'+',2,'+',null,'=',null],[7,'-',3,'=',7,'-',1,'-',null,'=',null],[4,'+',3,'=',4,'+',null,'+',1,'=',null],[8,'-',3,'=',8,'-',null,'-',1,'=',null]],ans:[[1,8],[2,4],[2,7],[2,5]]})}},
{title:'Мәні 9 болатын өрнектерді тап.',build(b,T){const P=[['4 + 5',1],['6 + 3',1],['7 + 2',1],['8 + 1',1],['9 − 0',1],['3 + 6',1],['4 + 4',0],['9 − 1',0],['5 + 3',0],['7 + 1',0],['6 + 2',0],['9 − 9',0]];
 K.pickAll(b,T,{cols:6,size:180,title:'Мәні 9 болатын өрнектерді бас',tiles:P.map(([t,ok])=>({h:`<span style="font-size:46px;font-weight:900">${t}</span>`,ok}))})}}
],
duel:{title:'9 санының құрамы: кім жылдам?',gen:DG.compose([7,8,9])},
games:[GM.houses({nums:[8,9]}),GM.quiz({icon:'🔤',title:'🔤 Сөздегі дауысты дыбыстарды сана!',gen:()=>{const W=['АТА','ӘЖЕ','МЕКТЕП','ДОП','ҚАЛАМ','КІТАП','БАЛА','ДӘПТЕР','АСЫҚ','ОРЫНДЫҚ','ТАҚТА','ҚАРЫНДАШ'];const w=W[rnd(0,W.length-1)],v=cnt(w)[1];
 return{q:`<div style="text-align:center"><div style="font-size:90px;font-weight:900;letter-spacing:8px">${w}</div><div class="qline">Неше дауысты дыбыс бар?</div></div>`,o:near(v,1,5),a:v}}})]
});
})();
