/* 1-сынып · Математика · 5-сабақ · 3 саны және цифры. 3 санының құрамы (оқулық 14–15-бет) */
(function(){
LESSON({
goal:'3 саны және цифрымен танысасың.',
introExtra(w,T){const r=el('div','');r.style.cssText='display:flex;gap:40px;align-items:center';
 r.append(el('div','',`<svg width="150" height="190" viewBox="0 0 100 130" style="background:#fff;border:3px solid #c9def6;border-radius:18px"><line x1="0" y1="20" x2="100" y2="20" stroke="#c9def6" stroke-dasharray="4"/><line x1="0" y1="110" x2="100" y2="110" stroke="#c9def6" stroke-dasharray="4"/>
 <path d="M26 30 Q50 6 70 26 Q78 50 48 60 Q82 64 74 92 Q58 118 26 102" fill="none" stroke="#3b7dd8" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="280" stroke-dashoffset="280"><animate attributeName="stroke-dashoffset" from="280" to="0" dur="1.8s" begin="0.3s;w3.end+1s" id="w3" fill="freeze"/></path></svg>`));
 r.append(el('div','',`<div style="display:flex;gap:26px;align-items:center;font-size:70px">🍎🍎🍎 ${hand(3,90)} ${dots(3,90)} <b style="color:#3b7dd8">3</b></div><div class="mut" style="font-size:26px;margin-top:6px">үш алма · үш саусақ · үш нүкте · үш</div>`));
 w.append(r);w.append(el('div','',nline(3,[1,1,1])));const b=el('button','btn alt','✍️ Тақтаға 3 цифрын жазып көр');b.onclick=()=>T.pen();w.append(b)},
book:[
{num:1,title:'Суретке қара. Балалардың немен айналысып жатқанын айт. Әр топта неше баладан бар?',build(b,T){
 const items=[
  {e:kid(0,'#5c6bc0','#3e2723',0,1,.8),x:12,y:45},{e:kid(0,'#42a5f5','#212121',0,0,.8),x:21,y:50},{e:kid(0,'#7986cb','#4e342e',0,0,.8),x:29,y:50},
  {e:kid(0,'#fdd835','#3e2723',0,1,.75),x:55,y:30},{e:kid(0,'#ffca28','#212121',0,1,.75),x:68,y:26},{e:kid(0,'#ffb300','#4e342e',0,1,.75),x:81,y:30},
  {e:kid(1,'#e53935','#3e2723',0,0,.85),x:42,y:76},{e:kid(1,'#ef5350','#212121',0,0,.85),x:60,y:78},{e:kid(1,'#f44336','#4e342e',0,0,.85),x:78,y:76},
  {e:'🏀',x:47,y:70,s:40},{e:'🔵',x:65,y:70,s:36},{e:'🏀',x:83,y:70,s:40},{e:'🌳',x:46,y:12,s:90}];
 const deco='<div style="position:absolute;left:6%;top:16%;width:30%;height:2.5%;background:#8d6e63;border-radius:4px"></div><div style="position:absolute;left:6%;top:16%;width:1.4%;height:48%;background:#8d6e63"></div><div style="position:absolute;left:34.6%;top:16%;width:1.4%;height:48%;background:#8d6e63"></div>';
 const s=T.scene(b,{w:900,h:540,bg:'linear-gradient(#cfe9ff 0 38%,#f3e2b3 38%)',items});s.insertAdjacentHTML('afterbegin',deco);
 const side=el('div','side');b.append(side);side.append(el('div','mut','💡 Балаларды басып санауға болады'));
 T.series(side,[
  {q:'<div class="qline">Турникте неше бала бар?</div>',o:[1,2,3,4],a:3},
  {q:'<div class="qline">Неше бала жүгіріп жүр?</div>',o:[1,2,3,4],a:3},
  {q:'<div class="qline">Неше қыз доп ойнап жүр?</div>',o:[1,2,3,4],a:3},
  {q:'<div style="font-size:64px">🔴🔴 ➕ 🔵</div><div class="qline">Екі дөңгелек ал. Тағы біреуін қос. Неше болды?</div>',o:[1,2,3,4],a:3},
  {q:'<div class="qline" style="font-size:56px">3 = 2 + <span class="slot" style="display:inline-grid;width:76px;height:76px;vertical-align:middle">?</span></div>',o:[0,1,2,3],a:1},
  {q:'<div class="qline" style="font-size:56px">3 = 1 + <span class="slot" style="display:inline-grid;width:76px;height:76px;vertical-align:middle">?</span></div>',o:[0,1,2,3],a:2},
  {q:'<div style="font-size:64px">🔵🔵<s style="opacity:.4">🔵</s></div><div class="qline">Үш дөңгелектің біреуін алдық. Неше қалды?</div>',o:[0,1,2,3],a:2}],{onEach:()=>s.resetCount()})}},
{num:2,label:'ЖҰПТЫҚ ЖҰМЫС',k:'pair',title:'Сана. Қай заттар үштен кем? Салыстыр.',build(b,T){col(b,14,'center');
 const B=[['🏸',3],['🏀',5],['🏐',1],['⚽',2]];const g=el('div','');g.style.cssText='display:grid;grid-template-columns:repeat(4,300px);gap:18px';b.append(g);
 const msg=el('div','qline','Үштен КЕМ заттарды бас');msg.style.fontSize='30px';b.append(msg);let left=2;const cs=[];
 const f=el('div','');f.style.cssText='display:flex;gap:40px;opacity:.3;pointer-events:none';b.append(f);
 B.forEach(([e,n])=>{const c=cellBtn(`<div style="font-size:${n>3?54:70}px;line-height:1.15">${e.repeat(n)}</div>`,'width:300px;height:220px;border-color:#c9def6');c.dataset.n=n;
  c.onclick=()=>{if(c.dataset.ok)return;if(n<3){c.dataset.ok=1;T.ok(c);c.style.borderColor='#22b07d';if(--left===0){msg.textContent='Енді салыстыр: бос ұяшықтарды толтыр';f.style.opacity='1';f.style.pointerEvents='auto'}}else{T.bad(c);msg.textContent=n===3?'Бұл – дәл үшеу, кем емес':'Бұл – үштен көп'}};g.append(c);cs.push(c)});
 const rows=[['🏐',1],['⚽',2],['🏀',5]];let l2=3;rows.forEach(([e,n])=>{const r=el('div','');r.style.cssText='display:flex;align-items:center;gap:10px;font-size:46px;font-weight:900';r.innerHTML=`<span>${e}</span><span>${n}</span>`;
  const s=el('button','slot','');s.style.cssText+=';width:70px;height:70px';s.onclick=()=>{if(s.dataset.ok)return;T.picker(s,['>','<','='],SG,v=>{if(v===cmp(n,3)){s.innerHTML=SG(v);s.classList.add('f');s.dataset.ok=1;T.ok(s);if(--l2===0)T.done()}else T.bad(s)})};r.append(s);r.insertAdjacentHTML('beforeend','<span>3</span><span>🏸</span>');f.append(r)});
 T.reveal=()=>{cs.forEach(c=>{if(+c.dataset.n<3&&!c.dataset.ok)c.classList.add('hint')});f.querySelectorAll('.slot').forEach((s,i)=>{if(!s.dataset.ok){s.innerHTML=SG(cmp(rows[i][1],3));s.style.color='#e0a000'}})}}},
{num:3,label:'СЕН ЗЕРТТЕУШІСІҢ',k:'res',title:'Бос орынға қандай фигура қажет екенін досыңа түсіндір. Олар қайда орналасқан?',build(b,T){
 const O=[{k:'c',h:SHP('circle',0,90)},{k:'s',h:SHP('square',0,90)},{k:'t',h:SHP('triangle',0,90)},{k:'fb',h:SHP('flag','#1e88e5',96)},{k:'fg',h:SHP('flag','#43a047',96)},{k:'fy',h:SHP('flag','#fdd835',96)}];
 K.latin(b,T,{opts:O,grids:[[['c','s','t'],['t','c','s'],['s','?t','c']],[['fb','fg','fy'],['fy','fb','fg'],['?fg','?fy','?fb']]]});
 b.append(el('div','mut','💡 Әр жолда және әр бағанда әр фигура бір реттен ғана болады'))}}
],
extra:[
{title:'3 санының құрамы: бос ұяшықты толтыр.',build(b,T){K.fill(b,T,{fs:66,vals:[0,1,2,3],rows:[[3,'=',2,'+',null],[3,'=',null,'+',2],[3,'=',3,'+',null],[2,'+',1,'=',null],[3,'-',1,'=',null]],ans:[[1],[1],[0],[3],[2]],
 pics:['🌸🌸🌸','🐟🐟🐟','⭐⭐⭐','🍎🍎🍎','🎈🎈🎈'].map(x=>`<div style="width:190px;font-size:46px;white-space:nowrap">${x}</div>`)})}},
{title:'Сан сәулесі бойынша секір: қай санға келдік?',build(b,T){col(b,10,'center');T.series(b,[
 {q:`<div>${nline(3,[1,2])}</div><div class="qline">0-ден 1 қадам, сосын тағы 2 қадам. Қай санға келдік?</div>`,o:[1,2,3],a:3},
 {q:`<div>${nline(3,[2,1])}</div><div class="qline">0-ден 2 қадам, сосын тағы 1 қадам. Қай сан?</div>`,o:[1,2,3],a:3},
 {q:`<div>${nline(3,[-1],3)}</div><div class="qline">3-тен 1 қадам артқа. Қай сан?</div>`,o:[0,1,2,3],a:2},
 {q:`<div>${nline(3,[-2],3)}</div><div class="qline">3-тен 2 қадам артқа. Қай сан?</div>`,o:[0,1,2,3],a:1},
 {q:`<div>${nline(3,[1,1,1])}</div><div class="qline">Барлығы неше қадам жасадық?</div>`,o:[1,2,3],a:3}])}},
{title:'Дәл ҮШ заты бар карточкаларды тап.',build(b,T){const E=shuffle(EM);const tiles=[];for(let i=0;i<6;i++)tiles.push({h:`<div style="font-size:50px;line-height:1.1">${E[i].repeat(3)}</div>`,ok:1});
 [2,4,1,2,4,5].forEach((n,i)=>tiles.push({h:`<div style="font-size:${n>3?40:52}px;line-height:1.1">${E[6+i].repeat(n)}</div>`,ok:0}));K.pickAll(b,T,{tiles,cols:6,size:190,title:'Тек ҮШ заты бар карточкаларды бас'})}}
],
duel:{title:'Нешеу? 1, 2 әлде 3?',gen(){const n=rnd(1,3),k=rnd(0,2),e=EM[rnd(0,19)];const q=k===0?dots(n,170):k===1?`<div style="display:flex">${hand(n,150)}</div>`:`<div style="font-size:90px">${e.repeat(n)}</div>`;return{q,o:[0,1,2,3],a:n}}},
games:[
 GM.houses({nums:[2,3]}),
 GM.catcher({title:'🎯 Тек «3»-ті аула! Басқасын баспа.',good:()=>[big(3,'#3b7dd8',110),dots(3,140),hand(3,140),'<span style="font-size:60px;font-weight:900">үш</span>',em('🍎🍎🍎',64)][rnd(0,4)],
  bad:()=>[big(1,'#8a8fa3',110),big(2,'#8a8fa3',110),big(5,'#8a8fa3',110),big(8,'#8a8fa3',110),dots(2,140),dots(4,140),hand(2,140),'<span style="font-size:60px;font-weight:900">екі</span>',em('🍎🍎',70)][rnd(0,8)]})
]});
})();
