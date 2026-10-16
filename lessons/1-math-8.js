/* 1-сынып · Математика · 8-сабақ · 4 саны және цифры. 4 санының құрамы (оқулық 20–21-бет) */
(function(){
LESSON({
goal:'4 саны және цифрымен танысасың.',
introExtra(w,T){K.introNum(w,T,4,'🍎')},
book:[
{num:1,title:'Суретте қай заттар төрт-төрттен берілген? «Неше» сөзін пайдаланып, сұрақтар құрастыр.',build(b,T){
 const items=[
  {e:kid(0,'#e53935','#3e2723',0,0,.75),x:8,y:46,t:'bo'},{e:kid(0,'#1e88e5','#212121',0,1,.75),x:17,y:40,t:'bo'},{e:kid(0,'#43a047','#4e342e',0,0,.75),x:27,y:44,t:'bo'},{e:kid(0,'#8e24aa','#212121',0,0,.75),x:22,y:72,t:'bo'},
  {e:kid(1,'#ec407a','#3e2723',0,0,.75),x:52,y:52,t:'gi'},{e:kid(1,'#fdd835','#212121',0,1,.75),x:63,y:44,t:'gi'},{e:kid(1,'#26a69a','#4e342e',0,0,.75),x:74,y:52,t:'gi'},{e:kid(1,'#ff7043','#3e2723',0,0,.75),x:86,y:44,t:'gi'},
  {e:'🚗',x:30,y:90,s:42,t:'car'},{e:'🚕',x:40,y:88,s:42,t:'car'},{e:'🚗',x:10,y:92,s:42,t:'car'},{e:'🚕',x:44,y:76,s:42,t:'car'},
  {e:'🪆',x:58,y:76,s:40,t:'doll'},{e:'🪆',x:66,y:80,s:40,t:'doll'},{e:'🪆',x:74,y:78,s:40,t:'doll'},{e:'🪆',x:82,y:80,s:40,t:'doll'},
  {e:'🌳',x:46,y:12,s:80,t:'tree'},{e:'🌳',x:92,y:12,s:80,t:'tree'},{e:'🏙️',x:20,y:10,s:80,t:'city'}];
 K.findTypes(b,T,{bg:'linear-gradient(#cfe9ff 0 26%,#a5d6a7 26% 62%,#9e9e9e 62%)',items,good:['bo','gi','car','doll'],q:'Қай заттар төрт-төрттен? Соларды бас!',
  msgBad:t=>({tree:'Ағаш – екеу',city:'Бұл – қала'}[t]||'Бұл төртеу емес'),
  after:side=>T.series(side,[{q:'<div class="qline">Неше ұл бар?</div>',o:[2,3,4,5],a:4},{q:'<div class="qline">Неше ойыншық машина бар?</div>',o:[2,3,4,5],a:4},{q:'<div class="qline">Неше қуыршақ бар?</div>',o:[2,3,4,5],a:4},{q:'<div class="qline">Неше ағаш бар?</div>',o:[1,2,3,4],a:2}])})}},
{num:2,label:'МАТЕМАТИКА КҮНДЕЛІКТІ ӨМІРДЕ',k:'life',title:'Асықтарды сана. Сандарды сан сәулесінде көрсет. Оларды салыстыр.',build(b,T){col(b,14,'center');
 const r1=el('div','',`<div style="display:flex;gap:12px">${ASYQ('#7cc576',90).repeat(4)}</div>`),r2=el('div','',`<div style="display:flex;gap:12px">${ASYQ('#f06292',90).repeat(3)}</div>`);
 const g=el('div','');g.style.cssText='display:grid;grid-template-columns:auto auto;gap:18px 60px;align-items:center';b.append(g);
 const tmp1=el('div',''),tmp2=el('div','');K.fill(tmp1,T,{fs:60,vals:[0,1,2,3,4,5],rows:[[null,'s',null],[null,'s',null]],ans:[[4,'>',3],[3,'<',4]]});
 const lines=[...tmp1.children].filter(x=>x.querySelector('.slot'));g.append(r1,lines[0],r2,lines[1]);const fr=T.reveal;
 b.append(el('div','',nline(5,[],0)));b.append(el('div','mut','💡 4 пен 3-ті сан сәулесінен тауып, қаламмен белгіле ✏️'));T.reveal=fr}},
{rem:{title:'4 санының құрамы',build(b,T){col(b,20,'center');b.append(el('div','',`<div style="display:flex;gap:80px;align-items:center">${houseView(4,[[1,3],[2,2],[3,1]])}<div style="font-size:52px;font-weight:900;line-height:1.5">4 = 1 + 3<br>4 = 2 + 2<br>4 = 3 + 1</div></div>`))}},
 num:3,label:'ТОПТЫҚ ЖҰМЫС',k:'pair',title:'4 санының құрамын айт. Мысалдар құрастыр.',build(b,T){
 K.fill(b,T,{fs:50,vals:[0,1,2,3,4],rows:[[null,'+',null,'=',null],[null,'+',null,'=',null],[1,'+',3,'=',null],[4,'-',3,'=',null],[4,'-',1,'=',null],[4,'-',2,'=',null]],ans:[[3,1,4],[2,2,4],[4],[1],[3],[2]],
  pics:[`<div style="display:flex;gap:4px">${ASYQ('#7cc576',60).repeat(3)}${ASYQ('#fdd835',60)}</div>`,`<div style="font-size:52px">🪆🪆<span style="filter:hue-rotate(160deg)">🪆🪆</span></div>`,bar(3,1,40),bar(3,1,40),bar(3,1,40),bar(2,2,40)].map(x=>`<div style="width:300px;display:flex;justify-content:flex-end">${x}</div>`)})}},
{num:4,label:'ЖҰПТЫҚ ЖҰМЫС',k:'pair',title:'Балалардың қалай есептегенін айт.',build(b,T){col(b,10,'center');T.series(b,[
 {q:`<div>${nline(4,[1,1],2)}</div><div class="qline" style="font-size:48px">2 + 2 = 2 + 1 + 1 = ?</div>`,o:[2,3,4],a:4},
 {q:`<div>${nline(4,[-1,-1],4)}</div><div class="qline" style="font-size:48px">4 − 2 = 4 − 1 − 1 = ?</div>`,o:[1,2,3],a:2},
 {q:`<div>${nline(4,[2,1],1)}</div><div class="qline" style="font-size:48px">1 + 3 = 1 + 2 + 1 = ?</div>`,o:[2,3,4],a:4},
 {q:`<div>${nline(4,[-1,-2],4)}</div><div class="qline" style="font-size:48px">4 − 3 = 4 − 1 − 2 = ?</div>`,o:[0,1,2],a:1},
 {q:`<div>${nline(4,[1,1,1],1)}</div><div class="qline" style="font-size:48px">1 + 1 + 1 + 1 = ?</div>`,o:[2,3,4],a:4}])}}
],
extra:[
{title:'4 санының үйін толтыр.',build(b,T){b.style.justifyContent='center';const h1=el('div','');K.house(h1,T,{n:4,pairs:[[0,4,1],[1,3,0],[2,2,1],[3,1,0],[4,0,1]]});b.append(h1)}},
{title:'Бөліктеп есепте.',build(b,T){K.fill(b,T,{fs:56,vals:[0,1,2,3,4],rows:[[3,'+',1,'=',null],[2,'+',2,'=',2,'+',1,'+',null,'=',null],[4,'-',2,'=',4,'-',null,'-',1,'=',null],[4,'-',4,'=',null],[0,'+',4,'=',null]],ans:[[4],[1,4],[1,2],[0],[4]]})}},
{title:'Дәл ТӨРТ заты бар карточкаларды тап.',build(b,T){const E=shuffle(EM);const tiles=[];for(let i=0;i<5;i++)tiles.push({h:`<div style="font-size:44px;line-height:1.1;max-width:120px">${E[i].repeat(4)}</div>`,ok:1});
 tiles.push({h:dots(4,130),ok:1},{h:`<div style="display:flex">${hand(4,120)}</div>`,ok:1});[3,5,2,3,5].forEach((n,i)=>tiles.push({h:`<div style="font-size:40px;line-height:1.1;max-width:130px">${E[6+i].repeat(n)}</div>`,ok:0}));
 K.pickAll(b,T,{tiles,cols:6,size:180,title:'Тек ТӨРТ заты бар карточкаларды бас'})}}
],
duel:{title:'4-ке дейін жылдам есептейік!',gen:DG.add(4)},
games:[
 GM.houses({nums:[3,4]}),
 GM.balloons({from:0,to:4,title:'Шарларды'})
]});
})();
