/* 1-сынып · Математика · 15-сабақ · 7 санының құрамы (оқулық 34–35-бет) */
(function(){
const bk=(a,n=7)=>`<div style="display:flex;font-size:40px;letter-spacing:-6px">${'📘'.repeat(a)}${'📕'.repeat(n-a)}</div>`;
LESSON({
goal:'7 санының құрамын анықтайсың. (Пысықтау)',
introExtra(w){w.append(el('div','',`<div style="display:flex;gap:50px;align-items:center">${houseView(7,[[1,6],[2,5],[3,4],[4,3],[5,2],[6,1]])}<div style="display:flex;flex-direction:column;gap:6px">${[6,5,4,3,2,1].map(a=>bk(a)).join('')}</div></div>`))},
book:[
{num:1,label:'ЖҰПТЫҚ ЖҰМЫС',k:'pair',title:'Суретке қара. Әр сөредегі кітаптарды сана. Әр сөреде 7 кітаптан болу үшін неше кітаптан қою керек?',build(b,T){
 const S=[2,6,3,5,4,1];const g=el('div','');g.style.cssText='display:grid;grid-template-columns:1fr 1fr;gap:12px 60px';b.style.justifyContent='center';b.style.alignItems='center';b.append(g);let left=6;const ss=[];
 S.forEach(h=>{const c=el('div','');c.style.cssText='display:flex;align-items:center;gap:14px';const sh=el('div','',`<span style="font-size:50px;letter-spacing:-8px">${'📕'.repeat(h)}</span>`);sh.style.cssText='height:84px;width:430px;background:#efe3cf;border:7px solid #b58b5c;display:flex;align-items:flex-end;padding:0 8px';
  const s=el('button','slot','');s.style.cssText+=';width:60px;height:60px;font-size:36px';s.dataset.w=7-h;ss.push(s);c.append(sh,el('span','',`<b style="font-size:34px">${h} +</b>`),s,el('span','','<b style="font-size:34px">= 7</b>'));
  s.onclick=()=>{if(s.dataset.ok)return;T.picker(s,[0,1,2,3,4,5,6,7],null,v=>{if(v===7-h){s.textContent=v;s.classList.add('f');s.dataset.ok=1;T.ok(s);sh.insertAdjacentHTML('beforeend',`<span style="font-size:50px;letter-spacing:-8px;opacity:.55">${'📗'.repeat(v)}</span>`);if(--left===0)T.done()}else T.bad(s)})};g.append(c)});
 T.reveal=()=>ss.forEach(s=>{if(!s.dataset.ok){s.textContent=s.dataset.w;s.style.color='#e0a000'}})}},
{rem:{title:'7 санының құрамы',build(b,T){col(b,20,'center');b.append(el('div','',`<div style="display:flex;gap:80px;align-items:center">${houseView(7,[[1,6],[2,5],[3,4]])}<div style="font-size:50px;font-weight:900;line-height:1.45">7 = 1 + 6 = 6 + 1<br>7 = 2 + 5 = 5 + 2<br>7 = 3 + 4 = 4 + 3</div></div>`))}},
 num:2,title:'7 санының құрамын айт.',build(b,T){b.style.justifyContent='center';b.style.alignItems='center';b.style.gap='60px';
 b.append(el('div','',`<div style="display:flex;flex-direction:column;gap:6px">${[6,5,4,3,2,1].map(a=>bk(a)).join('')}</div>`));const h=el('div','');K.house(h,T,{n:7,pairs:[[6,1,1],[5,2,1],[4,3,1],[3,4,1],[2,5,1],[1,6,1]]});b.append(h)}},
{num:3,label:'ӨЗІНДІК ЖҰМЫС',k:'self',title:'Бос орындарға тиісті сандарды ата және жаз.',build(b,T){
 K.fillGroups(b,T,{fs:40,gap:30,vals:[0,1,2,3,4,5,6,7],groups:[[6,1],[5,2],[4,3]].map(([a,c])=>({pic:bk(a),rows:[[a,'+',null,'=',7],[null,'+',a,'=',7],[7,'-',c,'=',null],[7,'-',a,'=',null]],ans:[[c],[c],[a],[c]]}))})}},
{num:4,label:'ЖҰПТЫҚ ЖҰМЫС',k:'pair',title:'Оқушылар кітапқа арналған бетбелгілер жасады. Олардың әрқайсысында көрсетілген санға сәйкес суреттер болуы тиіс. Тағы неше сурет желімдеу керек?',build(b,T){
 const S=[[7,'🌸',3,'#cfe3ff'],[6,'〰️',3,'#ffe57f'],[5,'⭐',4,'#b9e6a3']];const g=el('div','');g.style.cssText='display:flex;flex-direction:column;gap:22px';b.style.justifyContent='center';b.style.alignItems='center';b.append(el('div','',em('📖',150)),g);let left=3;const ss=[];
 S.forEach(([t,e,h,c])=>{const r=el('div','');r.style.cssText='display:flex;align-items:center;gap:16px';const bm=el('div','',`<span style="font-size:44px">${e.repeat(h)}</span>`);bm.style.cssText=`width:560px;height:80px;background:${c};border-radius:10px;display:flex;align-items:center;padding:0 14px`;
  const s=el('button','slot','');s.style.cssText+=';width:62px;height:62px;font-size:36px';s.dataset.w=t-h;ss.push(s);r.append(el('b','',`<span style="font-size:56px;color:#1e63d6">${t}</span>`),bm,el('b','',`<span style="font-size:34px">${h} +</span>`),s);
  s.onclick=()=>{if(s.dataset.ok)return;T.picker(s,[0,1,2,3,4,5,6,7],null,v=>{if(v===t-h){s.textContent=v;s.classList.add('f');s.dataset.ok=1;T.ok(s);bm.insertAdjacentHTML('beforeend',`<span style="font-size:44px;opacity:.6">${e.repeat(v)}</span>`);if(--left===0)T.done()}else T.bad(s)})};g.append(r)});
 T.reveal=()=>ss.forEach(s=>{if(!s.dataset.ok){s.textContent=s.dataset.w;s.style.color='#e0a000'}})}},
{num:5,label:'СЕН ЗЕРТТЕУШІСІҢ',k:'res',title:'Жазуларды түсіндір.',build(b,T){col(b,10,'center');T.series(b,[
 {q:`<div>${nline(7,[1,1,1],4)}</div><div class="qline" style="font-size:46px">4 + 3 = 4 + 1 + 1 + 1 = ?</div>`,o:[5,6,7],a:7},
 {q:`<div>${nline(7,[2,1],4)}</div><div class="qline" style="font-size:46px">4 + 3 = 4 + 2 + 1 = ?</div>`,o:[5,6,7],a:7},
 {q:`<div>${nline(7,[-1,-1,-1],7)}</div><div class="qline" style="font-size:46px">7 − 3 = 7 − 1 − 1 − 1 = ?</div>`,o:[3,4,5],a:4},
 {q:`<div>${nline(7,[-1,-2],7)}</div><div class="qline" style="font-size:46px">7 − 3 = 7 − 1 − 2 = ?</div>`,o:[3,4,5],a:4}])}}
],
extra:[
{title:'Екі табаққа бөл: 7 алманы неше тәсілмен бөлуге болады?',build(b,T){K.split(b,T,{n:7,e:'🍎',cols:['#fff','#ffe0b2','#c8e6c9'],hint:'Алманы бассаң, ол екінші табаққа ауысады'})}},
{title:'Мәні 7 болатын өрнектерді тап.',build(b,T){const P=[['3 + 4',1],['6 + 1',1],['5 + 2',1],['7 − 0',1],['2 + 5',1],['4 + 3',1],['6 − 1',0],['3 + 3',0],['5 + 1',0],['7 − 7',0],['2 + 4',0],['7 − 1',0]];
 K.pickAll(b,T,{cols:6,size:180,title:'Мәні 7 болатын өрнектерді бас',tiles:P.map(([t,ok])=>({h:`<span style="font-size:46px;font-weight:900">${t}</span>`,ok}))})}},
{title:'Салыстыр: > < =',build(b,T){K.fill(b,T,{fs:54,rows:[[4,'+',3,'s',6],[7,'-',2,'s',5],[2,'+',4,'s',7],[7,'-',0,'s',7],[1,'+',5,'s',3,'+',4]],ans:[['>'],['='],['<'],['='],['<']],title:'Алдымен есепте, сосын белгіні қой'})}}
],
duel:{title:'7 санының құрамы: кім жылдам?',gen:DG.compose([5,6,7])},
games:[GM.houses({nums:[6,7]}),GM.memory({title:'🧩 7-ні құра: екеуі бірге 7 болатын жұпты тап',pairs:()=>[[1,6],[2,5],[3,4],[0,7],[6,1]].map(([a,c])=>[`<div style="text-align:center">${dots(a,110)}<div style="font-size:30px;font-weight:900">${a}</div></div>`,`<span style="font-size:80px;font-weight:900;color:#3b7dd8">${c}</span>`])})]
});
})();
