/* 1-сынып · Математика · 14-сабақ · 7 саны және цифры (оқулық 32–33-бет) */
(function(){
LESSON({
goal:'7 саны және цифрымен танысасың.',
introExtra(w,T){K.introNum(w,T,7,'📘')},
book:[
{num:1,title:'Суретте қай заттар жетіден бейнеленген? Әртүрлі заттарды санап, оларды салыстыр.',build(b,T){
 const items=[...[0,1,2,3,4,5,6].map(i=>({e:'🌷',x:10+i*13,y:8,s:42,t:'fl'})),...[0,1,2,3,4,5,6].map(i=>({e:'📚',x:10+i*13,y:28,s:56,t:'sh'})),
  ...[0,1,2,3,4,5,6].map(i=>({e:'🪑',x:12+(i%4)*24+(i>3?12:0),y:i>3?82:62,s:52,t:'ch'})),
  {e:'🖥️',x:8,y:84,s:70,t:'pc'},{e:kid(1,'#29b6f6','#3e2723',0,0,.7),x:4,y:52,t:'kg'},{e:kid(0,'#1e2a8a','#3e2723',0,1,.7),x:95,y:52,t:'kb'},{e:'🌈',x:92,y:86,s:60,t:'rb'}];
 K.findTypes(b,T,{bg:'linear-gradient(#cfe9ff 0 18%,#e8d5b0 18% 44%,#cfd8dc 44%)',items,good:['fl','sh','ch'],q:'Қай заттар жетіден? Соларды бас!',msgBad:t=>({pc:'Компьютер – біреу',kg:'Қыз – біреу',kb:'Ұл – біреу',rb:'Кемпірқосақ – біреу'}[t]),
  after:side=>T.series(side,[{q:'<div class="qline">Неше гүл бар?</div>',o:[5,6,7,8],a:7},{q:'<div class="qline">Неше орындық бар?</div>',o:[5,6,7,8],a:7},
   {q:'<div class="qline">Гүлдер мен балаларды салыстыр: 7 ? 2</div>',o:['>','<','='],a:'>',optHtml:v=>`<span style="font-size:54px">${SG(v)}</span>`},
   {q:'<div class="qline">Кітапхана аптаның жетінші күні жұмыс істемейді. Ол күн қалай аталады?</div>',o:['Сенбі','Жексенбі','Дүйсенбі'],a:'Жексенбі',optHtml:v=>`<span style="font-size:30px">${v}</span>`}])})}},
{num:2,label:'СЕН ЗЕРТТЕУШІСІҢ',k:'res',title:'7 санын қалай алғаныңды айт.',build(b,T){
 const bk=(a)=>`<div style="width:470px;display:flex;justify-content:flex-end;font-size:46px;letter-spacing:-4px">${'📘'.repeat(a)}${'📕'.repeat(7-a)}</div>`;
 K.fill(b,T,{fs:44,vals:[0,1,2,3,4,5,6,7],rows:[6,5,4,3,2,1].map(()=>[null,'+',null,'=',null]),ans:[6,5,4,3,2,1].map(a=>[a,7-a,7]),pics:[6,5,4,3,2,1].map(bk)})}},
{num:3,label:'МАТЕМАТИКА КҮНДЕЛІКТІ ӨМІРДЕ',k:'life',title:'Көрсетілген сандар шығу үшін, әр сөреге неше кітаптан қою керек?',build(b,T){
 const S=[[6,4],[4,3],[5,2],[3,1]];const g=el('div','');g.style.cssText='display:grid;grid-template-columns:1fr 1fr;gap:26px 50px';b.style.justifyContent='center';b.style.alignItems='center';b.append(g);let left=4;const ss=[];
 S.forEach(([t,h])=>{const c=el('div','',`<div style="text-align:center;font-size:60px;font-weight:900;color:#1e63d6">${t}</div><div class="sh" style="height:120px;width:460px;background:#f3e2c6;border:8px solid #c49a6c;border-top-width:6px;display:flex;align-items:flex-end;padding:0 10px;font-size:62px;letter-spacing:-8px">${'📗'.repeat(h)}</div>`);
  const r=el('div','',`<span style="font-size:36px;font-weight:900">${h} + </span>`);r.style.cssText='display:flex;align-items:center;justify-content:center;gap:8px;margin-top:6px';const s=el('button','slot','');s.style.cssText+=';width:60px;height:60px;font-size:36px';s.dataset.w=t-h;ss.push(s);
  r.append(s);r.insertAdjacentHTML('beforeend',`<span style="font-size:36px;font-weight:900">= ${t}</span>`);c.append(r);
  s.onclick=()=>{if(s.dataset.ok)return;T.picker(s,[0,1,2,3,4,5,6,7],null,v=>{if(v===t-h){s.textContent=v;s.classList.add('f');s.dataset.ok=1;T.ok(s);c.querySelector('.sh').insertAdjacentHTML('beforeend',`<span style="opacity:.6">${'📙'.repeat(v)}</span>`);if(--left===0)T.done()}else T.bad(s)})};g.append(c)});
 T.reveal=()=>ss.forEach(s=>{if(!s.dataset.ok){s.textContent=s.dataset.w;s.style.color='#e0a000'}})}}
],
extra:[
{title:'7 санының үйін толтыр.',build(b,T){b.style.justifyContent='center';const h=el('div','');K.house(h,T,{n:7,pairs:[[1,6,1],[2,5,0],[3,4,1],[4,3,0],[5,2,1],[6,1,0]]});b.append(h)}},
{title:'Апта күндері: жеті күнді ретімен қой.',build(b,T){const D=['Дүйсенбі','Сейсенбі','Сәрсенбі','Бейсенбі','Жұма','Сенбі','Жексенбі'];
 K.order(b,T,{title:'Апта күндерін бірінші күннен бастап ретімен бас',items:D.map((d,i)=>({h:`<div style="font-size:26px;font-weight:900;padding:0 6px">${d}</div>`}))})}},
{title:'Есепте: 7-ге дейін.',build(b,T){K.fill(b,T,{fs:56,vals:[0,1,2,3,4,5,6,7],rows:[[6,'+',1,'=',null],[5,'+',2,'=',null],[7,'-',3,'=',null],[7,'-',null,'=',7],[null,'+',4,'=',7],[7,'-',6,'=',null]],ans:[[7],[7],[4],[0],[3],[1]]})}}
],
duel:{title:'7-ге дейін: қосу мен азайту',gen:DG.add(7)},
games:[GM.houses({nums:[6,7]}),GM.train({max:7,len:6})]
});
})();
