/* 1-сынып · Математика · 24-сабақ · Фигуралар. Нүкте. Сызықтар (оқулық 52–53-бет) */
(function(){
const LN={
 str:'<path d="M15 50 H185" stroke="#1e63d6" stroke-width="7" stroke-linecap="round" fill="none"/>',
 cc:'<path d="M30 60 C10 30 60 20 100 32 C150 10 190 40 160 66 C120 90 50 86 30 60Z" stroke="#1e63d6" stroke-width="7" fill="none"/>',
 co:'<path d="M10 60 C40 10 70 90 100 50 C130 10 160 90 190 30" stroke="#1e63d6" stroke-width="7" fill="none" stroke-linecap="round"/>',
 bc:'<path d="M20 50 L60 15 L150 15 L110 50 L170 85 L60 85Z" stroke="#1e63d6" stroke-width="7" fill="none" stroke-linejoin="round"/>',
 bo:'<path d="M10 25 L55 80 L100 30 L145 80 L190 20" stroke="#1e63d6" stroke-width="7" fill="none" stroke-linejoin="round" stroke-linecap="round"/>',
 dots:[[40,30],[90,60],[60,75],[130,40],[160,70],[110,20]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="7" fill="#1e63d6"/>`).join('')};
const ls=(k,w=200)=>`<svg width="${w}" height="${w/2}" viewBox="0 0 200 100">${LN[k]}</svg>`;
const S=(t,c,s=70)=>SHP(t,{r:'#e53935',b:'#1e88e5',g:'#43a047',y:'#fdd835'}[c],s);
LESSON({
goal:'Геометриялық фигуралармен танысасың.',
introExtra(w){w.append(el('div','',`<div style="display:flex;gap:30px;align-items:center">${ls('dots',180)}${ls('str',180)}${ls('cc',180)}${ls('bo',180)}</div>`))},
book:[
{rem:{title:'Нүкте, түзу, қисық және сынық сызықтар',build(b,T){b.style.flexDirection='column';b.style.gap='10px';
 const row=(h,items)=>`<div style="background:#fff6ea;border:3px solid #f5cfa6;border-radius:20px;padding:8px 20px"><div style="font-size:30px;font-weight:900;color:#d9792b;text-align:center">${h}</div><div style="display:flex;justify-content:space-around">${items.map(([k,t])=>`<div style="text-align:center">${ls(k,240)}<div style="font-size:26px;font-weight:900">${t}</div></div>`).join('')}</div></div>`;
 b.insertAdjacentHTML('beforeend',row('',[['dots','Нүктелер'],['str','Түзу сызық']])+row('Қисық сызықтар',[['cc','Тұйықталған'],['co','Тұйықталмаған']])+row('Сынық сызықтар',[['bc','Тұйықталған'],['bo','Тұйықталмаған']]))}},
 num:1,title:'Қағаз бен қарындаш ал. Әртүрлі сызықтар жүргіз. Оларды ата.',build(b,T){
 const items=[['str','s'],['cc','c'],['co','c'],['bc','b'],['bo','b'],['str','s']].map(([k,bin])=>({h:ls(k,170),bin}));
 items.push({h:'<svg width="170" height="85" viewBox="0 0 200 100"><path d="M20 80 L180 20" stroke="#1e63d6" stroke-width="7" stroke-linecap="round"/></svg>',bin:'s'},{h:'<svg width="170" height="85" viewBox="0 0 200 100"><circle cx="100" cy="50" r="38" stroke="#1e63d6" stroke-width="7" fill="none"/></svg>',bin:'c'},{h:'<svg width="170" height="85" viewBox="0 0 200 100"><path d="M100 10 L170 85 L30 85Z" stroke="#1e63d6" stroke-width="7" fill="none"/></svg>',bin:'b'});
 K.bins(b,T,{title:'Сызықты бас, сосын оның тобын бас. Тақтаға өзің де сызып көр ✏️',items,bins:[{id:'s',h:'Түзу',c:'#e3f2fd'},{id:'c',h:'Қисық',c:'#fce4ec'},{id:'b',h:'Сынық',c:'#e8f5e9'}]})}},
{num:2,title:'Суретте көрсетілгендей торкөз парақтың бетіне нүктелер қой. Оларды сызып қос. Қандай фигуралар шықты?',build(b,T){b.style.justifyContent='center';b.style.gap='60px';let done=0;
 const G=(pts,name,opts)=>{const w=el('div','');w.style.cssText='display:flex;flex-direction:column;align-items:center;gap:12px';const st=600;
  const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');svg.setAttribute('width',st);svg.setAttribute('height',st*.7);svg.setAttribute('viewBox','0 0 10 7');svg.style.cssText='background:#fff;border:4px solid #222';
  let h='';for(let i=0;i<=10;i++)h+=`<line x1="${i}" y1="0" x2="${i}" y2="7" stroke="#7fb3e8" stroke-width=".05"/>`;for(let i=0;i<=7;i++)h+=`<line x1="0" y1="${i}" x2="10" y2="${i}" stroke="#7fb3e8" stroke-width=".05"/>`;svg.innerHTML=h+'<polyline id="pl" fill="rgba(67,160,71,.15)" stroke="#e53935" stroke-width=".12"/>';
  const pl=svg.querySelector('polyline');let seq=[];
  pts.forEach(([x,y])=>{const c=document.createElementNS('http://www.w3.org/2000/svg','circle');c.setAttribute('cx',x);c.setAttribute('cy',y);c.setAttribute('r','.32');c.setAttribute('fill','#1e63d6');c.style.cursor='pointer';
   c.onclick=()=>{if(w.dataset.closed)return;if(seq.length===pts.length&&seq[0]===c){seq.push(c);w.dataset.closed=1;beep('ok');ask()}else if(!seq.includes(c)){seq.push(c);c.setAttribute('fill','#e53935');beep('tap');if(seq.length===pts.length)toast('Енді бірінші нүктені бас – фигураны тұйықта','#6b7590')}
    pl.setAttribute('points',seq.map(q=>q.getAttribute('cx')+','+q.getAttribute('cy')).join(' '))};svg.append(c)});
  w.append(svg);const qa=el('div','');w.append(qa);
  const ask=()=>{qa.innerHTML='<div class="qline" style="font-size:28px">Қандай фигура шықты?</div>';const ob=el('div','');ob.style.cssText='display:flex;gap:10px;justify-content:center';qa.append(ob);
   opts.forEach(o=>{const x=el('button','opt',o);x.style.fontSize='26px';x.onclick=()=>{if(o===name){T.ok(x);ob.querySelectorAll('button').forEach(y=>y.disabled=true);if(++done===2)T.done()}else T.bad(x)};ob.append(x)})};
  w.reveal=()=>{if(!w.dataset.closed){seq=[...svg.querySelectorAll('circle')];seq.push(seq[0]);pl.setAttribute('points',seq.map(q=>q.getAttribute('cx')+','+q.getAttribute('cy')).join(' '));w.dataset.closed=1;ask()}qa.querySelectorAll('button').forEach(x=>{if(x.textContent===name)x.classList.add('hint')})};return w};
 const g1=G([[2,1],[7,1],[7,5],[2,5]],'Төртбұрыш',['Үшбұрыш','Төртбұрыш','Дөңгелек']),g2=G([[5,1],[2,6],[8,6]],'Үшбұрыш',['Үшбұрыш','Төртбұрыш','Дөңгелек']);b.append(g1,g2);
 b.parentElement.querySelector('.tbody')||0;T.reveal=()=>{g1.reveal();g2.reveal()};
 b.insertAdjacentHTML('beforeend','')}},
{num:3,label:'ЖҰПТЫҚ ЖҰМЫС',k:'pair',title:'Фигуралар қораптарға қандай белгілері бойынша орналастырылған?',build(b,T){
 const items=[];['r','b','y'].forEach(c=>['square','circle','triangle'].forEach(t=>items.push({h:S(t,c,70),bin:t==='triangle'?'tri':c==='b'?'blue':'x'})));
 const real=items.filter(i=>i.bin!=='x');col(b,10);
 b.append(el('div','qline','<span style="font-size:28px">1-қорап: тек <b>үшбұрыштар</b>. 2-қорап: тек <b>көк</b> фигуралар. Фигураны дұрыс қорапқа сал!</span>'));
 const tmp=el('div','');tmp.style.cssText='width:100%;flex:1;display:flex;flex-direction:column;align-items:center;gap:14px';b.append(tmp);
 K.bins(tmp,T,{items:real,bins:[{id:'tri',h:'🔺 Пішіні: үшбұрыш',c:'#e8f5e9'},{id:'blue',h:'🔵 Түсі: көк',c:'#e3f2fd'}]});
 b.append(el('div','mut','💡 Көк үшбұрыш қайда барады? Досыңмен талқыла: ол екі қорапқа да сәйкес келеді!'))}},
{num:4,label:'СЕН ЗЕРТТЕУШІСІҢ',k:'res',title:'Тиісті фигураны тап.',build(b,T){
 const O=['b','g','r'].flatMap(c=>['circle','triangle','square'].map(t=>({k:c+t,h:S(t,c,80)})));
 K.latin(b,T,{opts:O,grids:[[['bcircle','gtriangle','rsquare'],['rtriangle','bsquare','gcircle'],['gsquare','rcircle','?btriangle']],[['bsquare','gcircle','rtriangle'],['gsquare','?rcircle','btriangle'],['rsquare','bcircle','gtriangle']]]});
 b.append(el('div','mut','💡 Әр жолда және бағанда әр түс пен әр пішін бір реттен'))}}
],
extra:[
{title:'Тұйықталған сызықтарды ғана тап.',build(b,T){const t=[['cc',1],['bc',1],['co',0],['bo',0],['str',0]].map(([k,ok])=>({h:ls(k,160),ok}));
 t.push({h:'<svg width="160" height="80" viewBox="0 0 200 100"><rect x="40" y="15" width="120" height="70" stroke="#1e63d6" stroke-width="7" fill="none"/></svg>',ok:1},{h:'<svg width="160" height="80" viewBox="0 0 200 100"><path d="M40 85 L40 15 L160 15 L160 85" stroke="#1e63d6" stroke-width="7" fill="none"/></svg>',ok:0},{h:'<svg width="160" height="80" viewBox="0 0 200 100"><ellipse cx="100" cy="50" rx="70" ry="35" stroke="#1e63d6" stroke-width="7" fill="none"/></svg>',ok:1});
 K.pickAll(b,T,{tiles:t,cols:4,size:230,title:'Ұшы жоқ, жабық сызықтарды бас'})}},
{title:'Нүктелерді сана.',build(b,T){col(b,10,'center');const R=[5,8,3,10].map(n=>{let h='';const P=[];while(P.length<n){const x=rnd(20,380),y=rnd(20,200);if(P.every(([a,c])=>Math.hypot(a-x,c-y)>40))P.push([x,y])}P.forEach(([x,y])=>h+=`<circle cx="${x}" cy="${y}" r="10" fill="#1e63d6"/>`);
  return{q:`<svg width="400" height="220" style="background:#fff;border:3px solid var(--line);border-radius:16px">${h}</svg><div class="qline">Неше нүкте бар?</div>`,o:near(n),a:n}});T.series(b,R)}},
{title:'Қай сызық түрі артық?',build(b,T){col(b,10,'center');T.series(b,[
 {q:`<div style="display:flex;gap:20px">${ls('cc',180)}${ls('co',180)}${ls('bo',180)}</div><div class="qline">Қайсысы қисық сызық емес?</div>`,o:['1-ші','2-ші','3-ші'],a:'3-ші'},
 {q:`<div style="display:flex;gap:20px">${ls('bc',180)}${ls('str',180)}${ls('bo',180)}</div><div class="qline">Қайсысы сынық сызық емес?</div>`,o:['1-ші','2-ші','3-ші'],a:'2-ші'},
 {q:`<div style="display:flex;gap:20px">${ls('cc',180)}${ls('bc',180)}${ls('co',180)}</div><div class="qline">Қайсысы тұйықталмаған?</div>`,o:['1-ші','2-ші','3-ші'],a:'3-ші'}],{optHtml:v=>`<span style="font-size:32px">${v}</span>`})}}
],
duel:{title:'Сызықтың атын тап!',gen(){const K2=[['str','Түзу'],['cc','Қисық'],['co','Қисық'],['bc','Сынық'],['bo','Сынық']];const [k,a]=K2[rnd(0,4)];return{q:ls(k,320),o:['Түзу','Қисық','Сынық'],a,oh:v=>`<span style="font-size:30px;padding:6px 10px">${v}</span>`}}},
games:[GM.memory({title:'🧩 Бірдей фигураларды тап',pairs:()=>shuffle(['circle','square','triangle','rect']).flatMap(t=>[t]).slice(0,4).map((t,i)=>{const c=['r','b','g','y'][i];return[S(t,c,90),S(t,c,90)]}).concat([[ls('cc',150),ls('cc',150)]])}),
 GM.catcher({icon:'🎯',title:'🎯 Тек ҮШБҰРЫШТЫ аула!',good:()=>S('triangle',['r','b','g','y'][rnd(0,3)],120),bad:()=>S(['circle','square','rect'][rnd(0,2)],['r','b','g','y'][rnd(0,3)],110)})]
});
})();
