/* 1-сынып · Математика · 21-сабақ · 10 санының құрамы (оқулық 46–47-бет) */
(function(){
const ring=r=>`<svg width="110" height="110" viewBox="0 0 100 100">${[...Array(10)].map((_,i)=>{const a=-Math.PI/2+i*Math.PI/5;return `<circle cx="${50+38*Math.cos(a)}" cy="${50+38*Math.sin(a)}" r="9" fill="${i<r?'#e53935':'#29b6f6'}"/>`}).join('')}</svg>`;
LESSON({
goal:'10 санының құрамын анықтайсың. (Пысықтау)',
introExtra(w){w.append(el('div','',`<div style="display:flex;gap:50px;align-items:center">${houseView(10,[[1,9],[2,8],[3,7],[4,6],[5,5]],'#e57373')}<div style="display:flex;flex-wrap:wrap;gap:6px;width:420px">${[9,8,7,6,5,4,3,2,1].map(ring).join('')}</div></div>`))},
book:[
{num:1,title:'Заттарды сана. Әр зат 10-нан болу үшін неше заттан қосу керек? Бос орындарға тиісті сандарды ата.',build(b,T){
 const S=[['🧒',10],['⭕',4],['⚽',7],['🏀',4],['🎳',9],['🏸',5],['🧊',6]];
 const g=el('div','');g.style.cssText='display:grid;grid-template-columns:repeat(4,1fr);gap:12px;width:100%';b.style.flexDirection='column';b.style.gap='10px';b.append(g);let left=S.length;const ss=[];
 S.forEach(([e,n])=>{const c=el('div','',`<div style="height:70px;display:flex;flex-wrap:wrap;align-content:center;justify-content:center;font-size:${n>6?26:32}px;line-height:1.05">${e.repeat(n)}</div>`);c.style.cssText='background:#f1f8e9;border:3px solid #c5e1a5;border-radius:16px;padding:6px 10px';
  const r=el('div','',`<span style="font-size:30px;font-weight:900">${n} + </span>`);r.style.cssText='display:flex;align-items:center;justify-content:center;gap:6px';const s=el('button','slot','');s.style.cssText+=';width:54px;height:54px;font-size:32px';s.dataset.w=10-n;ss.push(s);r.append(s);r.insertAdjacentHTML('beforeend','<span style="font-size:30px;font-weight:900">= 10</span>');c.append(r);
  s.onclick=()=>{if(s.dataset.ok)return;T.picker(s,[0,1,2,3,4,5,6,7,8,9,10],null,v=>{if(v===10-n){s.textContent=v;s.classList.add('f');s.dataset.ok=1;T.ok(s);if(--left===0)T.done()}else T.bad(s)})};g.append(c)});
 const sq=el('div','');sq.style.cssText='display:flex;flex-direction:column;gap:8px';b.append(sq);
 const mk=(seq,miss)=>{const r=el('div','');r.style.cssText='display:flex;gap:6px';seq.forEach((n,i)=>{if(miss.includes(i)){const s=el('button','slot','');s.style.cssText+=';width:66px;height:66px;font-size:36px';s.dataset.w=n;ss.push(s);left++;
   s.onclick=()=>{if(s.dataset.ok)return;T.picker(s,[0,1,2,3,4,5,6,7,8,9,10],null,v=>{if(v===n){s.textContent=v;s.classList.add('f');s.dataset.ok=1;T.ok(s);if(--left===0)T.done()}else T.bad(s)})};r.append(s)}else{const c=ncard(n,'sm');c.style.cssText+=';width:66px;height:66px;pointer-events:none';r.append(c)}});sq.append(r)};
 mk([1,2,3,4,5,6,7,8,9,10],[1,3,4,5,7,8,9]);mk([10,9,8,7,6,5,4,3,2,1],[1,2,4,5,7,8]);
 T.reveal=()=>ss.forEach(s=>{if(!s.dataset.ok){s.textContent=s.dataset.w;s.style.color='#e0a000'}})}},
{num:2,label:'ӨЗІНДІК ЖҰМЫС',k:'self',title:'10 саны қалай алынды?',build(b,T){
 K.fillGroups(b,T,{fs:38,gap:20,vals:[0,1,2,3,4,5,6,7,8,9,10],groups:[[9,8],[7,6],[5,4],[3,2]].map(p=>({pic:`<div class="mut" style="font-size:18px">🔴 қызыл + 🔵 көк</div><div style="display:flex;gap:10px">${p.map(ring).join('')}</div>`,rows:p.flatMap(r=>[[10,'=',null,'+',null]]),ans:p.map(r=>[r,10-r])}))})}},
{rem:{title:'10 санының құрамы',build(b,T){col(b,20,'center');b.append(el('div','',`<div style="display:flex;gap:80px;align-items:center">${houseView(10,[[1,9],[2,8],[3,7],[4,6],[5,5]],'#e57373')}<div style="font-size:48px;font-weight:900;line-height:1.4">10 = 1 + 9 = 9 + 1<br>10 = 2 + 8 = 8 + 2<br>10 = 3 + 7 = 7 + 3<br>10 = 4 + 6 = 6 + 4<br>10 = 5 + 5</div></div>`))}},
 num:3,label:'ЖҰПТЫҚ ЖҰМЫС',k:'pair',title:'Сандардың құрамын есіңе түсір. Досыңа сандардың құрамы бойынша сұрақтар қой.',build(b,T){K.houseRow(b,T,[{n:5,pairs:[1,2,3,4].map(a=>[a,5-a,1])},{n:6,pairs:[1,2,3,4,5].map(a=>[a,6-a,1])},{n:8,pairs:[1,2,3,4,5,6,7].map(a=>[a,8-a,1])}])}},
{num:4,label:'МАТЕМАТИКА КҮНДЕЛІКТІ ӨМІРДЕ',k:'life',title:'Он қарындашты үш стақанға бөліп сал. Егер бір стақанда 3 қарындаш болса, онда қалған екеуінде неше қарындаштан болуы мүмкін? Өз нұсқаңды ұсын.',build(b,T){K.split(b,T,{n:10,fixed:3,hint:'Қарындашты бассаң, ол көрші стақанға ауысады (бірінші стақанда әрқашан 3 қарындаш)'})}}
],
extra:[
{title:'10 санының үйін толтыр.',build(b,T){b.style.justifyContent='center';const h=el('div','');K.house(h,T,{n:10,pairs:[1,2,3,4,5,6,7,8,9].map((a,i)=>[a,10-a,(i+1)%2])});b.append(h)}},
{title:'Үш санмен 10-ды құра.',build(b,T){K.fill(b,T,{fs:54,vals:[0,1,2,3,4,5,6,7,8,9,10],rows:[[10,'=',2,'+',3,'+',null],[10,'=',4,'+',null,'+',4],[10,'=',null,'+',1,'+',1],[10,'-',3,'-',null,'=',5],[10,'-',null,'-',4,'=',0]],ans:[[5],[2],[8],[2],[6]]})}},
{title:'Мәні 10 болатын өрнектерді тап.',build(b,T){const P=[['5 + 5',1],['6 + 4',1],['7 + 3',1],['8 + 2',1],['9 + 1',1],['10 − 0',1],['4 + 4',0],['10 − 1',0],['5 + 4',0],['7 + 2',0],['6 + 3',0],['10 − 10',0]];
 K.pickAll(b,T,{cols:6,size:180,title:'Мәні 10 болатын өрнектерді бас',tiles:P.map(([t,ok])=>({h:`<span style="font-size:44px;font-weight:900">${t}</span>`,ok}))})}}
],
duel:{title:'10 санының құрамы: кім жылдам?',gen:DG.compose([8,9,10])},
games:[GM.houses({nums:[9,10]}),GM.catcher({icon:'🎯',title:'🎯 Мәні 10 болатын өрнекті ғана аула!',good:()=>`<span style="font-size:48px;font-weight:900">${['5 + 5','6 + 4','7 + 3','8 + 2','9 + 1','4 + 6','3 + 7'][rnd(0,6)]}</span>`,bad:()=>`<span style="font-size:48px;font-weight:900;color:#8a8fa3">${['5 + 4','6 + 3','7 + 2','8 + 1','4 + 4','3 + 6','2 + 7'][rnd(0,6)]}</span>`})]
});
})();
