/* 1-сынып · Математика · 26-сабақ · Заттар мен фигуралардың қасиеті (оқулық 56–57-бет) */
(function(){
const SOL={
 ball:'<svg width="80" height="80" viewBox="0 0 100 100"><defs><radialGradient id="gb" cx="35%" cy="30%"><stop offset="0" stop-color="#ff8a80"/><stop offset="1" stop-color="#b71c1c"/></radialGradient></defs><circle cx="50" cy="50" r="44" fill="url(#gb)"/></svg>',
 cube:'<svg width="80" height="80" viewBox="0 0 100 100"><path d="M20 35 L55 35 L55 85 L20 85Z" fill="#fdd835"/><path d="M20 35 L40 18 L78 18 L55 35Z" fill="#fff59d"/><path d="M55 35 L78 18 L78 68 L55 85Z" fill="#f9a825"/></svg>',
 cyl:'<svg width="80" height="80" viewBox="0 0 100 100"><path d="M25 20 V80 A25 9 0 0 0 75 80 V20Z" fill="#1e88e5"/><ellipse cx="50" cy="20" rx="25" ry="9" fill="#90caf9"/></svg>',
 cone:'<svg width="80" height="80" viewBox="0 0 100 100"><path d="M50 8 L80 80 A30 10 0 0 1 20 80Z" fill="#29b6f6"/><ellipse cx="50" cy="80" rx="30" ry="10" fill="#0288d1"/></svg>'};
const FL=[SHP('square','#29b6f6',60),SHP('circle','#ec407a',60),SHP('triangle','#fdd835',60),SHP('rect','#43a047',50)].join('');
LESSON({
goal:'Фигуралар мен заттардың қасиетін ажыратасың, салыстырасың. (Пысықтау)',
introExtra(w){w.append(el('div','',`<div style="display:flex;gap:60px"><div class="goal" style="text-align:center"><span>ЖАЗЫҚ ФИГУРАЛАР</span><div style="display:flex;gap:12px">${FL}</div></div><div class="goal" style="text-align:center"><span>КЕҢІСТІКТІК ФИГУРАЛАР</span><div style="display:flex;gap:12px">${Object.values(SOL).join('')}</div></div></div>`))},
book:[
{num:1,title:'Жазық фигураларға ұқсас заттарды ата. Кеңістіктік фигураларға ұқсас заттарды ата.',build(b,T){
 const it=[['⚽','ball'],['🏀','ball'],['🍊','ball'],['🌍','ball'],['🎲','cube'],['🧊','cube'],['🎁','cube'],['🥫','cyl'],['🥁','cyl'],['🕯️','cyl'],['🍦','cone'],['🎉','cone']];
 K.bins(b,T,{title:'Затты бас, сосын ол ұқсайтын кеңістіктік фигураны бас',items:it.map(([e,bin])=>({h:em(e,70),bin})),bins:[{id:'ball',h:SOL.ball+'<br>Шар',c:'#ffebee'},{id:'cube',h:SOL.cube+'<br>Текше',c:'#fffde7'},{id:'cyl',h:SOL.cyl+'<br>Цилиндр',c:'#e3f2fd'},{id:'cone',h:SOL.cone+'<br>Конус',c:'#e1f5fe'}]})}},
{num:2,label:'ӨЗІНДІК ЖҰМЫС',k:'self',title:'Геометриялық фигуралар қиып ал. Олардан аппликация құрастыр.',build(b,T){
 const app=`<svg width="460" height="500" viewBox="0 0 460 500"><path d="M230 20 L330 120 L130 120Z" fill="#c8e6c9" stroke="#43a047" stroke-width="3"/><path d="M130 120 L230 220 L330 120Z" fill="#c8e6c9" stroke="#43a047" stroke-width="3"/>
 ${[[30,220],[130,220],[230,220],[330,220]].map(([x,y])=>`<rect x="${x}" y="${y}" width="100" height="90" fill="#c8e6c9" stroke="#43a047" stroke-width="3"/>`).join('')}<rect x="180" y="310" width="100" height="90" fill="#c8e6c9" stroke="#43a047" stroke-width="3"/>
 <path d="M180 400 L230 480 L130 480Z" fill="#c8e6c9" stroke="#43a047" stroke-width="3"/><path d="M280 400 L330 480 L230 480Z" fill="#c8e6c9" stroke="#43a047" stroke-width="3"/></svg>`;
 b.append(el('div','',app));const side=el('div','side');b.append(side);
 T.series(side,[{q:'<div class="qline">Аппликацияда неше шаршы бар?</div>',o:[3,4,5,6],a:5},{q:'<div class="qline">Неше үшбұрыш бар?</div>',o:[2,3,4,5],a:4},{q:'<div class="qline">Барлығы неше фигура?</div>',o:[7,8,9,10],a:9}],{end:()=>{T.done();side.append(el('div','goal','<span>ҚИЫП АЛ</span>Түсті қағаздан 5 шаршы мен 4 үшбұрыш қиып ал да, осы суретті құрастыр ✂️'))}})}},
{num:3,label:'ЖҰПТЫҚ ЖҰМЫС',k:'pair',title:'Досыңмен ойна. Кез келген затты таңда. Оның орнын сөздермен сипатта: алдында – артында, сол жақта – оң жақта, жоғарыда – төменде, арасында, жанында, үстінде, астында, ішінде, сыртында, ортасында.',build(b,T){
 const items=[{e:'🛏️',x:20,y:32,s:90},{e:'🧸',x:22,y:24,s:40},{e:'🚪',x:72,y:30,s:110},{e:'👕',x:84,y:24,s:40},{e:'🛋️',x:28,y:76,s:100},{e:'🖼️',x:28,y:58,s:50},{e:'🍳',x:72,y:76,s:60},{e:'🍽️',x:84,y:66,s:40},{e:'⚽',x:6,y:92,s:50},{e:'🌷',x:50,y:94,s:36}];
 const s=T.scene(b,{w:880,h:540,bg:'linear-gradient(#cfe9ff 0 14%,#fce4ec 14% 50%,#fff3e0 50% 88%,#a5d6a7 88%)',items,count:false});
 s.insertAdjacentHTML('afterbegin','<div style="position:absolute;left:4%;right:4%;top:2%;height:13%;background:#b5533c;clip-path:polygon(8% 0,92% 0,100% 100%,0 100%)"></div><div style="position:absolute;left:50%;top:14%;width:4px;height:74%;background:#8d6e63"></div><div style="position:absolute;left:4%;right:4%;top:50%;height:4px;background:#8d6e63"></div>');
 const side=el('div','side');b.append(side);const O=['жоғарыда','төменде','сол жақта','оң жақта','үстінде','астында','сыртында','арасында'];
 T.series(side,[{q:'<div class="qline">🧸 аю қайда?</div>',o:['төсектің үстінде','төсектің астында','есіктің артында'],a:'төсектің үстінде'},{q:'<div class="qline">⚽ доп үйдің ...?</div>',o:['ішінде','сыртында','ортасында'],a:'сыртында'},
  {q:'<div class="qline">Асүй (🍳) қай жақта?</div>',o:['жоғарыда, сол жақта','төменде, оң жақта','жоғарыда, оң жақта'],a:'төменде, оң жақта'},{q:'<div class="qline">🖼️ сурет диванның ...?</div>',o:['үстінде (жоғарыда)','астында','оң жағында'],a:'үстінде (жоғарыда)'}],{optHtml:v=>`<span style="font-size:26px">${v}</span>`,end:()=>{T.done();side.append(el('div','goal','<span>ЕНДІ ДОСЫҢМЕН</span>Бір затты ойыңа ал да, орнын сипатта. Досың тапсын!'))}})}},
{num:4,label:'СЕН ЗЕРТТЕУШІСІҢ',k:'res',title:'Мұқият бол. Не өзгерді?',build(b,T){col(b,10,'center');const ar='<span style="font-size:60px;color:#1e88e5">➡</span>';
 T.series(b,[{q:`<div style="display:flex;align-items:center;gap:30px">${em('🔴',50)}${ar}${em('🔴',120)}</div>`,a:'Өлшемі'},{q:`<div style="display:flex;align-items:center;gap:30px">${SOL.cube.replace(/80/g,'110')}${ar}${SOL.ball.replace(/80/g,'110')}</div>`,a:'Пішіні'},
  {q:`<div style="display:flex;align-items:center;gap:30px">${em('🎒',100)}${ar}<span style="font-size:100px;filter:hue-rotate(120deg)">🎒</span></div>`,a:'Түсі'},{q:`<div style="display:flex;align-items:center;gap:30px"><div style="width:160px;height:70px;background:#5c6bc0;border-radius:8px"></div>${ar}<div style="width:160px;height:20px;background:#5c6bc0;border-radius:4px"></div></div>`,a:'Өлшемі'}].map(x=>({...x,q:x.q+'<div class="qline">Не өзгерді?</div>',o:['Пішіні','Түсі','Өлшемі']})),{optHtml:v=>`<span style="font-size:32px">${v}</span>`})}}
],
extra:[
{title:'Жазық па, кеңістіктік пе? Топтарға бөл.',build(b,T){const it=[...['square','circle','triangle','rect'].map((t,i)=>({h:SHP(t,['#29b6f6','#ec407a','#fdd835','#43a047'][i],70),bin:'f'})),...Object.values(SOL).map(h=>({h,bin:'s'})),{h:em('🖼️',64),bin:'f'},{h:em('🎲',64),bin:'s'}];
 K.bins(b,T,{items:it,bins:[{id:'f',h:'Жазық',c:'#fce4ec'},{id:'s',h:'Кеңістіктік',c:'#e3f2fd'}],title:'Қағаз бетіндей жалпақ па, әлде көлемді ме?'})}},
{title:'Екі белгісі бойынша тап.',build(b,T){const C={r:'#e53935',b:'#1e88e5',g:'#43a047'};const tiles=[];['r','b','g'].forEach(c=>['circle','square','triangle'].forEach(t=>tiles.push({h:SHP(t,C[c],90),ok:(c==='r'&&t!=='circle')||(c!=='r'&&t==='circle')?0:0,c,t})));
 const Q=[['Қызыл үшбұрыш','r','triangle'],['Көк дөңгелек','b','circle'],['Жасыл шаршы','g','square']];col(b,10,'center');
 T.series(b,Q.map(([n,c,t])=>({q:`<div class="qline">${n} қайсы?</div>`,o:shuffle(shuffle(tiles).filter(x=>x.c+x.t!==c+t).slice(0,4).map(x=>x.c+x.t).concat(c+t)),a:c+t,optHtml:k=>SHP(['circle','square','triangle'].find(t=>k.endsWith(t)),C[k[0]],80)})))}},
{title:'Қай зат артық? Неге?',build(b,T){col(b,10,'center');T.series(b,[{q:`<div style="display:flex;gap:20px;font-size:90px">⚽🏀🎲🍊</div>`,o:['⚽','🏀','🎲','🍊'],a:'🎲'},{q:`<div style="display:flex;gap:20px;font-size:90px">🥫🕯️🥁🎁</div>`,o:['🥫','🕯️','🥁','🎁'],a:'🎁'},{q:`<div style="display:flex;gap:20px;font-size:90px">🧊🎲🎁🌍</div>`,o:['🧊','🎲','🎁','🌍'],a:'🌍'}].map(x=>({...x,q:x.q+'<div class="qline">Қай зат артық?</div>'})),{optHtml:v=>`<span style="font-size:60px">${v}</span>`})}}
],
duel:{title:'Қай фигураға ұқсайды?',gen(){const it=[['⚽','Шар'],['🌍','Шар'],['🎲','Текше'],['🎁','Текше'],['🥫','Цилиндр'],['🕯️','Цилиндр'],['🍦','Конус']];const [e,a]=it[rnd(0,it.length-1)];return{q:em(e,140),o:['Шар','Текше','Цилиндр','Конус'],a,oh:v=>`<span style="font-size:26px;padding:6px 6px">${v}</span>`}}},
games:[GM.memory({title:'🧩 Затты оның фигурасымен жұпта',pairs:()=>[['⚽',SOL.ball],['🎲',SOL.cube],['🥫',SOL.cyl],['🍦',SOL.cone],['🖼️',SHP('rect','#43a047',70)]].map(([e,s])=>[em(e,80),s])}),
 GM.quiz({icon:'👀',title:'👀 Не өзгерді: пішіні, түсі ме, өлшемі ме?',gen:()=>{const C=['#e53935','#1e88e5','#43a047','#fdd835'],Ts=['circle','square','triangle'];const k=rnd(0,2),t=Ts[rnd(0,2)],c=C[rnd(0,3)];
  const t2=k===0?Ts.filter(x=>x!==t)[rnd(0,1)]:t,c2=k===1?C.filter(x=>x!==c)[rnd(0,2)]:c,s2=k===2?140:90;
  return{q:`<div style="display:flex;align-items:center;gap:40px">${SHP(t,c,90)}<span style="font-size:60px;color:#1e88e5">➡</span>${SHP(t2,c2,s2)}</div>`,o:['Пішіні','Түсі','Өлшемі'],a:['Пішіні','Түсі','Өлшемі'][k],oh:v=>`<span style="font-size:30px">${v}</span>`}}})]
});
})();
