/* 1-сынып · Математика · 30-сабақ · Ауыр, жеңіл. Килограмм (оқулық 64–65-бет) */
(function(){
/* таразы: tilt=1 сол жақ ауыр (төмен), -1 оң жақ ауыр, 0 тең */
const bal=(L,R,tilt=0,w=440)=>{const h=Math.round(w*.62),cx=w/2,by=h*.42,d=tilt*h*.12,x1=w*.16,x2=w*.84;
 const pan=(x,y,inner)=>`<div style="position:absolute;left:${x}px;top:${y}px;transform:translate(-50%,-100%);display:flex;align-items:flex-end;justify-content:center;gap:2px;white-space:nowrap">${inner}</div>`;
 return `<div style="position:relative;width:${w}px;height:${h}px"><svg width="${w}" height="${h}" style="position:absolute;inset:0">
  <path d="M${cx-60} ${h-8} H${cx+60} L${cx+30} ${h-30} H${cx-30}Z" fill="#455a64"/><rect x="${cx-7}" y="${by}" width="14" height="${h-by-26}" fill="#546e7a"/>
  <line x1="${x1}" y1="${by+d}" x2="${x2}" y2="${by-d}" stroke="#37474f" stroke-width="10" stroke-linecap="round"/><circle cx="${cx}" cy="${by}" r="11" fill="#263238"/>
  <line x1="${x1}" y1="${by+d}" x2="${x1}" y2="${by+d+34}" stroke="#78909c" stroke-width="3"/><line x1="${x2}" y1="${by-d}" x2="${x2}" y2="${by-d+34}" stroke="#78909c" stroke-width="3"/>
  <ellipse cx="${x1}" cy="${by+d+38}" rx="${w*.15}" ry="10" fill="#8bc34a"/><ellipse cx="${x2}" cy="${by-d+38}" rx="${w*.15}" ry="10" fill="#8bc34a"/></svg>
  ${pan(x1,by+d+32,L)}${pan(x2,by-d+32,R)}</div>`};
const kg=(n=1,s=50)=>`<svg width="${s}" height="${s*1.05}" viewBox="0 0 50 52"><path d="M18 12 A7 7 0 1 1 32 12" fill="none" stroke="#424242" stroke-width="4"/><path d="M10 14 H40 L46 50 H4Z" fill="#616161"/><text x="25" y="40" text-anchor="middle" font-size="${n>9?13:16}" font-weight="900" fill="#fff" font-family="Nunito">${n}кг</text></svg>`;
const E=(e,s=64)=>`<span style="font-size:${s}px;line-height:1">${e}</span>`;
const tag=(e,n,s=60)=>`<div style="display:flex;flex-direction:column;align-items:center">${E(e,s)}<b style="font-size:26px">${n} кг</b></div>`;

LESSON({
goal:'Массаның өлшем бірлігі – <b>килограммен</b> танысасың.',
introExtra(w){w.append(el('div','',`<div style="display:flex;gap:40px;align-items:flex-end">${bal(E('🍉',70),kg(1,56),1,380)}${bal(kg(1,56),kg(1,56),0,380)}</div>`))},
book:[
{num:1,title:'Әлия мен Сырым алма жинады. Балалардың қайсысы көп, қайсысы аз жинады?',build(b,T){
 const items=[{e:'🌳',x:16,y:30,s:170},{e:'🌳',x:52,y:26,s:190},{e:'🌳',x:86,y:30,s:170},
  ...[[12,22],[20,32],[46,18],[56,30],[50,40],[82,22],[90,34]].map(([x,y])=>({e:'🍎',x,y,s:30})),
  {e:kid(1,'#ec407a','#5d4037','#fdd835',0,1.5),x:18,y:66},{e:'<div style="display:flex;flex-direction:column;align-items:center;font-size:30px;line-height:.9">🍎🍎🍎<span style="font-size:60px">🪣</span></div>',x:30,y:80},
  {e:kid(0,'#1e88e5','#3e2723','#fdd835',0,1.5),x:44,y:66},{e:'<div style="display:flex;flex-direction:column;align-items:center;font-size:28px;line-height:.9">🍎🍎🍎<br>🍎🍎🍎<span style="font-size:64px">🧺</span></div>',x:58,y:78},
  {e:'<b style="font-size:22px;background:#fff;border-radius:8px;padding:2px 8px">Әлия</b>',x:18,y:93},{e:'<b style="font-size:22px;background:#fff;border-radius:8px;padding:2px 8px">Сырым</b>',x:44,y:93},{e:kid(0,'#3f51b5','#212121',0,1,1.85),x:88,y:58},{e:bal('','',0,200),x:72,y:76}];
 const s=T.scene(b,{w:860,h:540,bg:'linear-gradient(#cfe9ff 0 45%,#9ccc65 45%)',items});
 const side=el('div','side');b.append(side);side.append(el('div','mut','💡 Алмаларды басып санауға болады'));
 T.series(side,[{q:'<div class="qline">Кім көп алма жинады?</div>',o:['Әлия','Сырым'],a:'Сырым'},{q:'<div class="qline">Кім аз жинады?</div>',o:['Әлия','Сырым'],a:'Әлия'},
  {q:'<div class="qline">Кімнің себеті ауыр?</div>',o:['Әлияның шелегі','Сырымның себеті'],a:'Сырымның себеті'},{q:'<div class="qline">Мұны дәл қалай білеміз?</div>',o:['Таразымен өлшеп','Түсіне қарап'],a:'Таразымен өлшеп'}],{onEach:()=>s.resetCount()})}},
{rem:{title:'Масса. Килограмм',build(b,T){col(b,14,'center');
  b.append(el('div','',`<div style="font-size:36px;font-weight:900;text-align:center;line-height:1.4"><span style="color:#d9792b">Масса</span> – бұл шама.<br><span style="color:#3b7dd8">Килограмм (кг)</span> – массаның өлшем бірлігі.</div>`));
  b.append(el('div','mut','Массаны таразының көмегімен өлшейді:'));
  b.append(el('div','',`<div style="display:flex;gap:60px;align-items:flex-end">${bal(E('🍈',72),kg(1,56),1,400)}${bal('<div style="width:52px;height:64px;background:#d7a86e;border-radius:8px;display:grid;place-items:center;font-size:15px;font-weight:900;color:#5d4037">ҰН</div>',kg(1,56),0,400)}</div>`));
  b.append(el('div','',`<div style="font-size:60px;letter-spacing:16px">⚖️ ${kg(1,56)} 🧮</div><div class="mut" style="font-size:24px;text-align:center">Сен мұндай құралдарды қайдан көрдің? Қазір электронды таразылар қолданылады.</div>`));
  T.reveal=()=>toast('Қауын 1 кг-нан ауыр · Ұн 1 кг-ға тең','#d9792b')}},
 num:2,label:'МАТЕМАТИКА КҮНДЕЛІКТІ ӨМІРДЕ',k:'life',title:'Массаларды салыстыр.',build(b,T){
 const P=[['🧺','3 кг','5 кг','🧺','<'],['🍅',10,7,'🥒','>'],['🍊',10,10,'🍇','='],['🍉',10,8,'🍉','>'],['🥦',7,5,'🍇','>']];
 K.fill(b,T,{fs:50,rows:P.map(([e1,a,c,e2])=>[E(e1,58),typeof a==='number'?a+' кг':a,'s',typeof c==='number'?c+' кг':c,E(e2,58)]),ans:P.map(p=>[p[4]])})}},
{num:3,label:'ЖҰПТЫҚ ЖҰМЫС',k:'pair',title:'Заттардың суретін массаларының өсу ретіне қарай геометриялық фигуралардың көмегімен сал.',build(b,T){
 const I=[['🍋',2],['🍉',3],['🧺',4],['🍊',5],['🥒',6],['🍅',8],['🥔',10]];
 K.order(b,T,{title:'Ең жеңілінен бастап ретімен бас (өсу реті)',items:I.map(([e,n])=>({h:tag(e,n,64)}))});
 b.append(el('div','goal','<span>САЛ</span>Әр затты бір фигурамен белгіле (●, ▲, ■…) де, оларды дәптеріңе өсу ретімен сал ✏️'))}},
{num:4,label:'СЕН ЗЕРТТЕУШІСІҢ',k:'res',title:'Тез есепте.',build(b,T){K.chain(b,T,{chains:[[1,[2,-1,-1,3,-2,2,1]]]})}}
],
extra:[
{title:'Таразыға қара: қайсысы ауыр?',build(b,T){col(b,10,'center');b.classList.add('tallopt');
 const R=[['🍉','🍎',1],['🪶','📚',-1],['🧸','🧱',-1],['🍍','🍒',1],['🐘','🐭',1]];
 T.series(b,R.map(([l,r,t])=>({q:bal(E(l,70),E(r,70),t,480)+'<div class="qline">Қайсысы ауыр?</div>',o:[l,r],a:t>0?l:r,optHtml:v=>E(v,70)})))}},
{title:'Таразы тең болу үшін тағы неше кір тас қою керек?',build(b,T){col(b,10,'center');const R=[['🍉',5,2],['🎃',4,1],['🛍️',6,3],['🍍',3,1]];
 T.series(b,R.map(([e,n,k])=>({q:bal(tag(e,n,64),kg(1,46).repeat(k),1,520)+`<div class="qline">Сол жақта ${n} кг. Оң жаққа тағы неше 1 кг-дық кір тас қою керек?</div>`,o:near(n-k,1,6),a:n-k})))}},
{title:'Есепте: килограммдарды қос және азайт.',build(b,T){K.fill(b,T,{fs:54,rows:[[3,'кг','+',4,'кг','=',null,'кг'],[9,'кг','-',5,'кг','=',null,'кг'],[2,'кг','+',null,'кг','=',8,'кг'],[null,'кг','-',3,'кг','=',4,'кг']],ans:[[7],[4],[6],[7]]})}}
],
duel:{title:'Қайсысы ауыр?',gen(){const P=['🍉','🍎','🎃','🍍','🧺','🥔','🍊','🥕'];const [x,y]=shuffle(P);const a=rnd(1,10);let c=rnd(1,10);if(Math.random()<.2)c=a;
 return{q:`<div style="display:flex;gap:40px;align-items:flex-end">${tag(x,a,64)}${tag(y,c,64)}</div>`,o:[x,y,'Тең'],a:a>c?x:a<c?y:'Тең',oh:v=>v==='Тең'?'<b style="font-size:30px;padding:4px 10px">Тең</b>':E(v,52)}}},
games:[
 GM.quiz({icon:'⚖️',title:'⚖️ Таразы: қайсысы ауыр?',gen:()=>{const P=['🪶','🍒','🍓','🍎','🧸','🥥','📚','🍍','🧱','🍉','🎃'];let i=rnd(0,P.length-1),j=rnd(0,P.length-1);while(j===i)j=rnd(0,P.length-1);const l=P[i],r=P[j];const t=i>j?1:-1;
  return{q:bal(E(l,70),E(r,70),t,520),o:[l,r],a:t>0?l:r,oh:v=>E(v,64)}}}),
 GM.quiz({icon:'🧮',title:'🧮 Килограмдарды есепте!',gen:()=>{if(Math.random()<.5){const a=rnd(1,8),c=rnd(1,10-a);return{q:`<div class="qline" style="font-size:60px">${a} кг + ${c} кг = ?</div>`,o:near(a+c,1,10),a:a+c}}
  const a=rnd(3,10),c=rnd(1,a-1);return{q:`<div class="qline" style="font-size:60px">${a} кг − ${c} кг = ?</div>`,o:near(a-c,1,10),a:a-c}}})]
});
})();
