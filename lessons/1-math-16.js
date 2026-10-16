/* 1-сынып · Математика · 16-сабақ · 8 саны және цифры (оқулық 36–37-бет) */
(function(){
const V=['🍎','🍐','🍌','🍉','🍅','🥒','🥕','🍆'];
const PL='<svg width="1em" height="0.7em" viewBox="0 0 100 70" style="vertical-align:middle"><ellipse cx="50" cy="35" rx="48" ry="32" fill="#eceff1" stroke="#90a4ae" stroke-width="4"/><ellipse cx="50" cy="35" rx="30" ry="19" fill="#fff" stroke="#cfd8dc" stroke-width="3"/></svg>';
const ex=t=>`<span style="font-size:40px;font-weight:900">${t}</span>`;
LESSON({
goal:'8 саны және цифрымен танысасың.',
introExtra(w,T){K.introNum(w,T,8,'🍓')},
book:[
{num:1,title:'Сурет бойынша «неше», «реті бойынша нешінші» сөздерімен сұрақтар құрастыр. Үстелдегі әртүрлі заттарды сана. Оларды салыстыр.',build(b,T){
 const items=[...V.map((e,i)=>({e,x:8+i*12,y:12,s:54})),...[0,1,2,3,4,5,6,7].map(i=>({e:PL,x:22+(i%4)*15,y:i<4?52:74,s:46})),...[0,1,2,3,4,5].map(i=>({e:'☕',x:30+(i%3)*12,y:i<3?60:66,s:34})),
  {e:kid(0,'#1e2a8a','#3e2723',0,0,1),x:8,y:66},{e:kid(1,'#29b6f6','#3e2723',0,0,1),x:92,y:66}];
 const s=T.scene(b,{w:900,h:540,bg:'linear-gradient(#7fb7c9 0 70%,#b0bec5 70%)',items});
 s.insertAdjacentHTML('afterbegin','<div style="position:absolute;left:16%;top:46%;width:68%;height:40%;background:#f5c26b;border-radius:14px;box-shadow:0 14px 0 #c58b3c"></div>');
 const side=el('div','side');b.append(side);side.append(el('div','mut','💡 Басып санауға болады'));
 T.series(side,[{q:'<div class="qline">Сөреде неше жеміс-көкөніс бар?</div>',o:[6,7,8,9],a:8},{q:'<div class="qline">Қызанақ (🍅) реті бойынша нешінші тұр?</div>',o:[3,4,5,6],a:5,optHtml:v=>ORDS[v]},
  {q:'<div class="qline">Үстелде неше тәрелке бар?</div>',o:[6,7,8,9],a:8},{q:'<div class="qline">Неше кесе бар?</div>',o:[5,6,7,8],a:6},
  {q:'<div class="qline">Тәрелке мен кесені салыстыр: 8 ? 6</div>',o:['>','<','='],a:'>',optHtml:v=>`<span style="font-size:54px">${SG(v)}</span>`},
  {q:'<div class="qline">Әр тәрелкеге кесе жетуі үшін тағы неше кесе керек?</div>',o:[1,2,3],a:2}],{onEach:()=>s.resetCount()})}},
{num:2,label:'ӨЗІНДІК ЖҰМЫС',k:'self',title:'Әр суретке сәйкес сандардың қосындысын немесе айырмасын таңда. Есепте.',build(b,T){
 let parts=0;const T2=Object.create(T);T2.done=()=>{if(++parts===2)T.done()};const R=[];
 K.match(b,T2,{title:'Суретті бас, сосын оның өрнегін бас',cw:400,ch:150,gap:20,
  L:[{h:`<div style="font-size:44px;line-height:1.1"><span style="filter:hue-rotate(180deg)">☕☕☕</span><br>☕☕☕☕☕</div>`,k:'a'},{h:`<div style="font-size:44px;line-height:1.1">${PL.repeat(2)}<br><span style="filter:hue-rotate(320deg) saturate(4) sepia(.6)">${PL.repeat(6)}</span></div>`,k:'b'},{h:`<div style="font-size:44px;line-height:1.1">🥄🥄🥄🥄<br>🍴🍴🍴🍴</div>`,k:'c'}],
  R:[{h:ex('3 + 5 = 8'),k:'a'},{h:ex('2 + 6 = 8'),k:'b'},{h:ex('4 + 4 = 8'),k:'c'}]});R.push(T2.reveal);
 const r=el('div','');r.style.cssText='margin-top:8px';b.append(r);
 K.fill(r,T2,{fs:40,vals:[0,1,2,3,4,5,6,7,8],rows:[[8,'-',6,'=',null],[8,'-',3,'=',null],[8,'-',2,'=',null],[8,'-',5,'=',null],[8,'-',4,'=',null]],ans:[[2],[5],[6],[3],[4]]});
 r.style.display='grid';r.style.gridTemplateColumns='repeat(5,auto)';r.style.gap='10px 40px';
 R.push(T2.reveal);T.reveal=()=>R.forEach(f=>f())}},
{num:3,label:'ЖҰПТЫҚ ЖҰМЫС',k:'pair',title:'Салыстыр.',build(b,T){
 const g=(e,n)=>`<div class="grp" style="width:200px;font-size:42px">${e.repeat(n)}</div>`;
 K.fill(b,T,{fs:54,vals:[0,1,2,3,4,5,6,7,8],rows:[[null,'s',null],[null,'s',null],[null,'s',null]],ans:[[8,'>',3],[3,'<',4],[4,'=',4]],
  pics:[g('🥄',8)+g('☕',3),g(PL,3)+g('🥣',4),g('🥣',4)+g(PL,4)].map(x=>`<div style="display:flex;gap:10px;margin-right:16px">${x}</div>`)})}},
{num:4,label:'СЕН ЗЕРТТЕУШІСІҢ',k:'res',title:'Тізбек бойынша есепте.',build(b,T){K.chain(b,T,{chains:[[3,[1,-1,2,1]],[4,[-1,-1,2,1,-2]]]})}}
],
extra:[
{title:'8 санының үйін толтыр.',build(b,T){b.style.justifyContent='center';const h=el('div','');K.house(h,T,{n:8,pairs:[[1,7,1],[2,6,0],[3,5,1],[4,4,0],[5,3,1],[6,2,0],[7,1,1]]});b.append(h)}},
{title:'Қиынырақ тізбек: есепте.',build(b,T){K.chain(b,T,{chains:[[8,[-2,-3,1,4,-1]],[0,[3,2,-4,6,-2]],[5,[3,-6,2,-1]]]})}},
{title:'Реті бойынша нешінші? Сөредегі көкөністер.',build(b,T){col(b,16,'center');b.append(el('div','',`<div style="display:flex;gap:16px">${V.map(e=>`<div style="width:110px;height:110px;background:#fff;border:3px solid var(--line);border-radius:18px;display:grid;place-items:center;font-size:66px">${e}</div>`).join('')}</div>`));b.append(el('div','mut','Сол жақтан санаймыз →'));
 const box=el('div','');box.style.cssText='flex:1;display:flex;flex-direction:column;align-items:center;width:100%';b.append(box);
 T.series(box,[{q:'<div class="qline">🍉 Қарбыз нешінші тұр?</div>',a:4},{q:'<div class="qline">🥕 Сәбіз нешінші тұр?</div>',a:7},{q:'<div class="qline">Сегізінші орында не тұр?</div>',o:['🥕','🍆','🥒'],a:'🍆',optHtml:v=>`<span style="font-size:60px">${v}</span>`},{q:'<div class="qline">🍐 Алмұрт пен 🍅 қызанақтың арасында неше зат бар?</div>',o:[1,2,3],a:2}].map(x=>({...x,o:x.o||[3,4,5,6,7,8],optHtml:x.optHtml||(v=>ORDS[v])})))}}
],
duel:{title:'8-ге дейін санау: кім жылдам?',gen:DG.digit(8)},
games:[GM.balloons({from:1,to:8}),GM.croc({max:8})]
});
})();
