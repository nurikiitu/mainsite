/* 1-сынып · Математика · 27-сабақ · Ұзын, қысқа, кең, тар (оқулық 58–59-бет) */
(function(){
const segBar=(n,c,u=110)=>{const cell=`<div style="width:${u}px;height:30px;background:${c};border-right:2px solid #0004"></div>`;return `<div style="display:flex;flex-direction:column;gap:6px"><svg width="${n*u}" height="16"><line x1="6" y1="8" x2="${n*u-6}" y2="8" stroke="${c}" stroke-width="4"/><circle cx="6" cy="8" r="6" fill="${c}"/><circle cx="${n*u-6}" cy="8" r="6" fill="${c}"/></svg><div style="display:flex">${cell.repeat(n)}</div></div>`};
const bar=(w,h,c)=>`<div style="width:${w}px;height:${h}px;background:${c};border-radius:6px"></div>`;
LESSON({
goal:'Шамалар арасындағы қатынасты анықтайсың.',
introExtra(w){w.append(el('div','',`<div style="display:flex;gap:40px;align-items:flex-end;font-size:26px;font-weight:900;text-align:center"><div>${bar(260,30,'#1e88e5')}<div>ұзын</div></div><div>${bar(110,30,'#e53935')}<div>қысқа</div></div><div>${bar(120,120,'#43a047')}<div>кең</div></div><div>${bar(40,120,'#fdd835')}<div>тар</div></div></div>`))},
book:[
{num:1,title:'Мағынасы бойынша қарама-қарсы сөздерді ата.',build(b,T){
 const P=[['ауыр','жеңіл'],['ұзын','қысқа'],['алыс','жақын'],['қымбат','арзан'],['қалың','жұқа'],['үлкен','кіші'],['биік','аласа'],['артық','кем']];
 K.match(b,T,{title:'Сөзді бас, сосын оның қарама-қарсы мағыналы сөзін бас',cw:200,ch:90,gap:14,L:P.map(([a],i)=>({h:`<b style="font-size:30px">${a}</b>`,k:i})),R:P.map(([,c],i)=>({h:`<b style="font-size:30px;color:#1e63d6">${c}</b>`,k:i}))});
 b.append(el('div','goal','<span>ОЙЛАН</span>Сыныпта кімнің бойы сенен биік және сенен аласа? Оны қалай анықтадың?'))}},
{num:2,title:'Заттарды ұзындығы және ені бойынша қалай салыстыруға болады? Олардың беттестіру және қатар қою арқылы салыстыр.',build(b,T){
 const A=el('div','');A.style.cssText='display:flex;gap:80px;align-items:flex-end';A.innerHTML=`<div style="text-align:center"><div class="mut" style="font-size:24px">Беттестір</div><div style="position:relative;width:300px;height:340px"><div style="position:absolute;left:0;bottom:0;width:300px;height:340px;background:#c0504d"></div><div style="position:absolute;left:70px;bottom:0;width:230px;height:240px;background:#4f81bd"></div></div></div>
  <div style="text-align:center"><div class="mut" style="font-size:24px">Қатар қой</div><div style="display:flex;gap:20px;align-items:flex-end">${bar(110,340,'#4f81bd')}${bar(110,270,'#c0504d')}</div></div>`;
 const L=el('div','');L.style.cssText='display:flex;flex-direction:column;align-items:center;gap:10px;flex:none';L.append(A);b.append(L);
 const side=el('div','side');b.append(side);T.series(side,[{q:'<div class="qline">Беттестіргенде: қай тіктөртбұрыш кең?</div>',o:['Қызыл','Көк'],a:'Қызыл'},{q:'<div class="qline">Беттестіргенде: қайсысы ұзын (биік)?</div>',o:['Қызыл','Көк'],a:'Қызыл'},{q:'<div class="qline">Қатар қойғанда: қайсысы ұзын?</div>',o:['Қызыл','Көк'],a:'Көк'},{q:'<div class="qline">Қатар қойғанда: ендері қандай?</div>',o:['Көгі кең','Қызылы кең','Бірдей'],a:'Бірдей'}],{optHtml:v=>`<span style="font-size:30px">${v}</span>`})}},
{num:3,label:'ЖҰПТЫҚ ЖҰМЫС',k:'pair',title:'Кесінділердің әрбір жұбында неше бөлік барын сана. Бұл кесінділер ұзындығы бойынша бірдей ме?',build(b,T){
 const P=[[4,'#fb8c00',2,'#ec407a'],[2,'#43a047',1,'#a0522d'],[3,'#26c6da',2,'#1e63d6']];col(b,10,'center');
 T.series(b,P.flatMap(([a,c1,z,c2])=>{const pic=`<div style="display:flex;flex-direction:column;gap:20px">${segBar(a,c1,120)}${segBar(z,c2,120)}</div>`;return[{q:pic+'<div class="qline">Жоғарғы кесіндіде неше бөлік?</div>',o:[1,2,3,4,5],a},{q:pic+'<div class="qline">Төменгісінде неше бөлік?</div>',o:[1,2,3,4,5],a:z},{q:pic+'<div class="qline">Ұзындықтары бірдей ме?</div>',o:['Иә','Жоқ, жоғарғысы ұзын','Жоқ, төменгісі ұзын'],a:'Жоқ, жоғарғысы ұзын',optHtml:v=>`<span style="font-size:26px">${v}</span>`}]}))}},
{num:4,label:'СЕН ЗЕРТТЕУШІСІҢ',k:'res',title:'Берілген фигуралардан аппликация жаса. Әр түрінен неше фигура пайдаланғаныңды сана. Олардың санын салыстыр.',build(b,T){
 const F=[SHP('circle','#1e63d6',90),SHP('square','#ef6c00',90),SHP('triangle','#fdd835',90),SHP('rect','#e53935',70),SHP('rect','#66bb6a',50),SHP('triangle','#a0352d',70),SHP('square','#5aa9e6',70),SHP('circle','#7e57c2',70)];
 const L=el('div','',`<div class="grp" style="width:640px;gap:30px;align-items:center">${F.join('').replace(/width="(\d+)" height="(\d+)"/g,(m,w,h)=>`width="${w*1.5}" height="${h*1.5}"`)}</div>`);b.append(L);const side=el('div','side');b.append(side);
 T.series(side,[{q:'<div class="qline">Неше дөңгелек бар?</div>',a:2},{q:'<div class="qline">Неше үшбұрыш?</div>',a:2},{q:'<div class="qline">Неше шаршы?</div>',a:2},{q:'<div class="qline">Неше тіктөртбұрыш?</div>',a:2}].map(x=>({...x,o:[1,2,3,4]})),{end:()=>{T.done();side.append(el('div','goal','<span>САЛЫСТЫР</span>Әр түрінен 2 фигурадан: саны тең! Енді осылардан аппликация құрастыр ✂️'))}})}}
],
extra:[
{title:'Ұзынынан қысқасына қарай ретте.',build(b,T){const C=['#e53935','#fb8c00','#fdd835','#43a047','#1e88e5'];K.order(b,T,{title:'Ең ұзыннан бастап ретімен бас',items:[480,380,280,180,90].map((w,i)=>({h:bar(w,40,C[i])}))})}},
{title:'Кең бе, тар ма? Таңда.',build(b,T){col(b,10,'center');b.classList.add('tallopt');const R=[[[bar(200,120,'#43a047'),bar(60,120,'#43a047')],'кең',0],[[bar(160,80,'#1e88e5'),bar(300,80,'#1e88e5')],'кең',1],[[bar(50,160,'#e53935'),bar(140,160,'#e53935')],'тар',0],[[em('🛣️',140),'<span style="font-size:140px;display:inline-block;transform:scaleX(.4)">🛣️</span>'],'тар',1]];
 T.series(b,R.map(([p,w,k])=>({q:`<div class="qline">Қайсысы ${w.toUpperCase()}?</div>`,o:[0,1],a:k,optHtml:i=>p[i]})))}},
{title:'Ұзындықты бөліктермен өлше.',build(b,T){col(b,10,'center');const R=[[5,'#43a047'],[3,'#ec407a'],[6,'#1e88e5'],[4,'#fb8c00']];T.series(b,R.map(([n,c])=>({q:`<div style="display:flex;flex-direction:column;align-items:flex-start;gap:10px">${segBar(n,c,90)}<div style="display:flex;gap:6px">${'<span style="font-size:40px">📎</span>'.repeat(0)}</div></div><div class="qline">Бұл кесінді неше бөліктен тұрады?</div>`,o:near(n,1,8),a:n})))}}
],
duel:{title:'Қайсысы ұзын?',gen(){const a=rnd(2,9),c=rnd(2,9)===a?a+1:rnd(1,9);const C=['#e53935','#1e88e5'];return{q:`<div style="display:flex;flex-direction:column;gap:14px;align-items:flex-start">${[a,c].map((n,i)=>`<div style="display:flex;align-items:center;gap:8px"><b style="font-size:30px">${i+1}</b>${bar(n*40,26,C[i])}</div>`).join('')}</div>`,o:['1-ші','2-ші','Бірдей'],a:a>c?'1-ші':a<c?'2-ші':'Бірдей',oh:v=>`<span style="font-size:28px;padding:6px">${v}</span>`}}},
games:[GM.memory({title:'🧩 Қарама-қарсы сөздерді жұпта',pairs:()=>shuffle([['ұзын','қысқа'],['кең','тар'],['биік','аласа'],['ауыр','жеңіл'],['үлкен','кіші'],['қалың','жұқа']]).slice(0,5).map(([a,c])=>[`<b style="font-size:30px">${a}</b>`,`<b style="font-size:30px;color:#1e63d6">${c}</b>`])}),
 GM.quiz({icon:'📏',title:'📏 Ең ұзынын тап!',gen:()=>{const L=shuffle([...new Set([rnd(2,10),rnd(2,10),rnd(2,10)])]).slice(0,3);while(L.length<3)L.push(L[0]+L.length);const C=['#e53935','#1e88e5','#43a047'];const mx=Math.max(...L);
  return{q:`<div style="display:flex;flex-direction:column;gap:16px;align-items:flex-start">${L.map((n,i)=>`<div style="display:flex;align-items:center;gap:10px"><b style="font-size:32px">${i+1}</b>${bar(n*50,30,C[i])}</div>`).join('')}</div>`,o:[1,2,3],a:L.indexOf(mx)+1}}})]
});
})();
