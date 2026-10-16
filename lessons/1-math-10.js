/* 1-сынып · Математика · 10-сабақ · 5-ке дейін санау (оқулық 24–25-бет) */
(function(){
const plate=n=>`<span style="display:inline-flex;align-items:center;justify-content:center;width:${Math.max(110,n*36+40)}px;height:66px;border-radius:50%;background:radial-gradient(#f3e0b5 55%,#d9b77a 57%);font-size:30px;letter-spacing:-4px">${'🍎'.repeat(n)}</span>`;
LESSON({
goal:'5-ке дейін санайсың, қосасың және азайтасың. (Пысықтау)',
introExtra(w){const r=el('div','ncards');for(let i=0;i<=5;i++){const c=ncard(i);if(!i)c.style.setProperty('--c','#e3e7ef');r.append(c)}w.append(r)},
book:[
{num:1,title:'2, 3, 4, 5 сандарының құрамын айт.',build(b,T){K.houseRow(b,T,[{n:2,pairs:[[1,1,1]]},{n:3,pairs:[[1,2,0],[2,1,1]]},{n:4,pairs:[[1,3,1],[2,2,0],[3,1,1]]},{n:5,pairs:[[1,4,0],[2,3,1],[3,2,0],[4,1,1]]}])}},
{num:2,label:'ӨЗІНДІК ЖҰМЫС',k:'self',title:'Ауызша есепте. Кез келген 4 мысалды жаз.',build(b,T){
 const A=[[1,'+',1],[2,'+',1],[3,'+',1],[4,'+',1],[1,'+',2],[2,'+',2],[3,'+',2],[1,'+',3],[2,'+',3],[1,'+',4]],S=[[2,'-',1],[3,'-',1],[4,'-',1],[5,'-',1],[3,'-',2],[4,'-',2],[5,'-',2],[4,'-',3],[5,'-',3],[5,'-',4]];
 const P=[...pick(A,4),...pick(S,4)];K.notebook(b,T,{cols:4,fs:50,vals:[0,1,2,3,4,5],rows:P.map(([a,o,c])=>[a,o,c,'=',null]),ans:P.map(([a,o,c])=>[o==='+'?a+c:a-c])});}},
{num:3,label:'МАТЕМАТИКА КҮНДЕЛІКТІ ӨМІРДЕ',k:'life',title:'Сурет бойынша мысалдар құрастыр және жаз.',build(b,T){
 K.fill(b,T,{fs:46,vals:[0,1,2,3,4,5],rows:[[null,'+',null,'=',5],[null,'+',null,'=',5],[null,'+',null,'=',5],[null,'+',null,'=',5],[null,'+',null,'+',null,'=',5],[null,'+',null,'+',null,'=',5]],
  ans:[[4,1],[1,4],[3,2],[2,3],[2,1,2],[1,2,2]],pics:[[4,1],[1,4],[3,2],[2,3],[2,1,2],[1,2,2]].map(a=>`<div style="width:470px;display:flex;gap:8px;justify-content:flex-end">${a.map(plate).join('')}</div>`)})}},
{num:4,label:'ЖҰПТЫҚ ЖҰМЫС',k:'pair',title:'5 қарындашты бос 2 қаламсауытқа сал. Әр қаламсауытта неше қарындаштан болуы мүмкін?',build(b,T){col(b,14,'center');
 const cases=el('div','');cases.style.cssText='display:flex;gap:60px';const L=el('div',''),R=el('div','');[L,R].forEach((x,i)=>{x.style.cssText=`width:430px;height:170px;border-radius:85px;background:${i?'#ef9a9a':'#aed581'};display:flex;align-items:center;justify-content:center;gap:4px;font-size:56px;box-shadow:inset 0 -12px 0 #0002`});cases.append(L,R);
 const eq=el('div','qline','');eq.style.fontSize='60px';const btn=el('button','btn','✔ Жазып қой');const found=el('div','');found.style.cssText='display:flex;gap:14px;flex-wrap:wrap;justify-content:center;min-height:70px';
 b.append(el('div','mut','Қарындашты бассаң, ол басқа қаламсауытқа ауысады ✏️'),cases,eq,btn,found);
 const P=[...Array(5)].map((_,i)=>{const p=el('button','','✏️');p.style.cssText='font-size:60px';p.dataset.s=i<3?0:1;p.onclick=()=>{p.dataset.s=1-p.dataset.s;beep('tap');draw()};return p});
 const got=new Set();const draw=()=>{P.forEach(p=>(p.dataset.s==='0'?L:R).append(p));const a=P.filter(p=>p.dataset.s==='0').length;eq.textContent=`${a} + ${5-a} = 5`};draw();
 const add=a=>{if(got.has(a))return false;got.add(a);found.append(el('div','goal',`${a} + ${5-a}`));return true};
 btn.onclick=()=>{const a=P.filter(p=>p.dataset.s==='0').length;if(add(a)){T.ok(btn);if(got.size===6)T.done('Барлық 6 тәсілді таптың! ✓')}else{T.bad(btn);toast('Бұл тәсіл бұрын жазылған 🙂','#c28a00')}};
 T.reveal=()=>{[0,1,2,3,4,5].forEach(add);T.done()}}}
],
extra:[
{title:'Үш санмен есепте: бос ұяшықты толтыр.',build(b,T){K.fill(b,T,{fs:56,vals:[0,1,2,3,4,5],rows:[[1,'+',null,'+',2,'=',5],[null,'+',1,'+',3,'=',5],[2,'+',2,'+',null,'=',5],[5,'-',null,'-',1,'=',2],[null,'-',2,'-',2,'=',0]],ans:[[2],[1],[1],[2],[4]],title:'Үш санды қосамыз немесе азайтамыз'})}},
{title:'Салыстыр: > < =',build(b,T){K.fill(b,T,{fs:56,signs:['>','<','='],rows:[[2,'+',3,'s',4],[5,'-',1,'s',4],[1,'+',1,'s',3],[4,'-',2,'s',1],[3,'+',2,'s',5,'-',0]],ans:[['>'],['='],['<'],['>'],['=']],title:'Алдымен есепте, сосын белгіні қой'})}},
{title:'Жетпейтін санды тап.',build(b,T){K.seq(b,T,{rounds:[{q:'0-ден 5-ке дейін',seq:[0,1,2,3,4,5],miss:[1,3,4],from:0,to:5},{q:'5-тен 0-ге дейін',seq:[5,4,3,2,1,0],miss:[0,2,4],from:0,to:5},{q:'Екі-екіден секір: 0, 2, 4',seq:[0,2,4],miss:[1],from:0,to:5},{q:'Екі-екіден: 1, 3, 5',seq:[1,3,5],miss:[1,2],from:0,to:5}]})}}
],
duel:{title:'5-ке дейін: қосу мен азайту',gen:DG.add(5)},
games:[GM.balloons({from:0,to:5}),GM.croc({max:5})]
});
})();
