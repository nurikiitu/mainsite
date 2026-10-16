/* 1-сынып · Математика · 23-сабақ · 10 көлеміндегі сандарды қосу және азайту (оқулық 50–51-бет) */
(function(){
const beads=(a,c)=>`<span style="display:inline-flex;align-items:center;gap:2px;border-bottom:3px solid #555;padding:0 4px">${'<i style="width:18px;height:18px;border-radius:50%;background:#1e63d6;display:inline-block"></i>'.repeat(a)}<span style="width:10px"></span>${'<i style="width:18px;height:18px;border-radius:50%;background:#fb8c00;display:inline-block"></i>'.repeat(c)}</span>`;
function slotP(T,s,vals,want,cb){s.onclick=()=>{if(s.dataset.ok)return;T.picker(s,vals,null,v=>{if(want==null||v===want){s.textContent=v;s.classList.add('f');s.dataset.ok=1;s.dataset.v=v;if(want!=null)T.ok(s);cb&&cb(v)}else T.bad(s)})}}
const V10=[0,1,2,3,4,5,6,7,8,9,10];
LESSON({
goal:'10-ға дейінгі сандардың құрамын қайталайсың, қосып-азайтасың. (Пысықтау)',
introExtra(w){w.append(el('div','',`<div style="display:flex;flex-direction:column;gap:6px;align-items:flex-start">${[[9,1],[8,2],[7,3],[6,4],[5,5]].map(([a,c])=>`<div style="display:flex;gap:14px;align-items:center">${beads(a,c)}<b style="font-size:30px">${a} + ${c} = 10</b></div>`).join('')}</div>`))},
book:[
{num:1,title:'Сандардың құрамын есіңе түсір.',build(b,T){
 const P=[[4,3,1],[5,2,3],[6,4,2],[7,5,2],[8,3,5],[9,6,3],[10,7,3],[10,4,6]];
 K.fillGroups(b,T,{fs:38,gap:16,vals:V10,groups:[P.slice(0,4),P.slice(4)].map(g=>({rows:g.map(([n,a])=>[n,'=',a,'+',null]),ans:g.map(([n,a,c])=>[c])}))});
 [...b.children].forEach((g,gi)=>{[...g.children].forEach((r,ri)=>{const p=P[gi*4+ri];if(p)r.insertAdjacentHTML('afterbegin',`<div style="width:260px;display:flex;justify-content:flex-end">${beads(p[1],p[2])}</div>`)})})}},
{num:2,title:'Мысалдар жазып, оларды есепте.',build(b,T){b.style.justifyContent='center';b.style.alignItems='center';b.style.gap='80px';let left=0;const all=[];
 const grid=(G,ans,col)=>{const t=el('div','');t.style.cssText=`display:grid;grid-template-columns:repeat(5,74px);border:4px solid ${col};background:#fff`;G.flat().forEach(c=>{const d=el('div','');d.style.cssText='height:74px;border:1px solid #ef9a9a;display:grid;place-items:center;font-size:36px;font-weight:900';
   if(c==='?'){const s=el('button','slot','');s.style.cssText+=';width:60px;height:60px;font-size:34px';s.dataset.w=ans.shift();left++;all.push(s);slotP(T,s,V10,+s.dataset.w,()=>{if(--left===0)T.done()});d.append(s)}else if(c==='~'){d.innerHTML='🍃';d.style.background='#ffcc80'}else d.innerHTML=SG(c);t.append(d)});b.append(t)};
 grid([[7,'-',4,'=','?'],['-','~','-','~','+'],[3,'+',1,'=','?'],['=','~','=','~','='],['?','+','?','=','?']],[3,4,4,3,7],'#e53935');
 grid([[9,'+',1,'=','?'],['-','~','+','~','-'],[5,'-',3,'=','?'],['=','~','=','~','='],['?','+','?','=','?']],[10,2,4,4,8],'#e53935');
 T.reveal=()=>all.forEach(s=>{if(!s.dataset.ok){s.textContent=s.dataset.w;s.style.color='#e0a000'}})}},
{num:3,title:'Көрсетілген сандар шығуы үшін әр «қабаттағы» бос орындарға сандар тап.',build(b,T){b.style.justifyContent='center';b.style.alignItems='center';b.style.gap='90px';let left=0;const all=[];
 [[8,'#a5d6a7',[[4,1,3],[null,1,5],[null,null,null]]],[10,'#90caf9',[[5,2,3],[null,1,4],[null,null,null]]]].forEach(([n,c,rows])=>{const h=el('div','');h.style.cssText='display:flex;flex-direction:column;align-items:center';
  h.append(el('div','',`<div style="width:340px;height:70px;background:${c};clip-path:polygon(15% 0,85% 0,100% 100%,0 100%);display:grid;place-items:center;font-size:40px;font-weight:900">${n}</div>`));
  rows.forEach(r=>{const row=el('div','');row.style.cssText='display:flex;gap:12px;margin-top:12px';const free=r.every(x=>x==null);const ss=[];
   r.forEach(x=>{const d=el('div','');d.style.cssText='width:90px;height:80px;background:#ffcc80;border-radius:8px;display:grid;place-items:center;font-size:40px;font-weight:900';
    if(x!=null)d.textContent=x;else{const s=el('button','slot','');s.style.cssText+=';width:70px;height:62px;font-size:36px;background:#fff';ss.push(s);d.append(s)}row.append(d)});
   if(free){left++;const chk=()=>{if(ss.some(s=>s.dataset.v==null))return;const sum=ss.reduce((a,s)=>a+ +s.dataset.v,0);if(sum===n){ss.forEach(T.ok);if(--left===0)T.done()}else{ss.forEach(s=>{T.bad(s);delete s.dataset.v;delete s.dataset.ok;s.textContent='';s.classList.remove('f')});toast(`Үшеуінің қосындысы ${n} болуы керек`,'#c28a00')}};ss.forEach(s=>slotP(T,s,V10,null,chk));all.push([ss,n])}
   else{const want=n-r.filter(x=>x!=null).reduce((a,x)=>a+x,0);left++;ss.forEach(s=>{s.dataset.w=want;slotP(T,s,V10,want,()=>{if(--left===0)T.done()})});all.push([ss,null])}h.append(row)});b.append(h)});
 T.reveal=()=>all.forEach(([ss,n])=>{if(n==null)ss.forEach(s=>{if(!s.dataset.ok){s.textContent=s.dataset.w;s.style.color='#e0a000'}});else if(ss.some(s=>!s.dataset.ok)){const a=rnd(1,n-2),c=rnd(1,n-a-1);[a,c,n-a-c].forEach((v,i)=>{ss[i].textContent=v;ss[i].style.color='#e0a000'})}})}},
{num:4,label:'СЕН ЗЕРТТЕУШІСІҢ',k:'res',title:'Есепте. Арифметикалық пирамиданың қалай құрылғанын анықтап көр.',build(b,T){b.style.justifyContent='center';b.style.alignItems='center';
 const P=el('div','');P.style.cssText='position:relative;width:820px;height:520px';b.append(P);let left=0;const all=[];
 const node=(x,y,v)=>{const d=el('div','');d.style.cssText=`position:absolute;left:${x}px;top:${y}px;width:96px;height:96px;border-radius:50%;border:5px solid #43a047;background:#fff;display:grid;place-items:center;font-size:44px;font-weight:900;transform:translate(-50%,-50%)`;
  if(typeof v==='number')d.textContent=v;else{const s=el('button','slot','');s.style.cssText+=';width:70px;height:70px;font-size:40px;border:none';s.dataset.w=v[0];left++;all.push(s);slotP(T,s,V10,v[0],()=>{if(--left===0)T.done()});d.append(s)}P.append(d)};
 const plus=(x,y)=>P.insertAdjacentHTML('beforeend',`<b style="position:absolute;left:${x}px;top:${y}px;transform:translate(-50%,-50%);font-size:40px">+</b>`);
 P.insertAdjacentHTML('afterbegin','<svg width="820" height="520" style="position:absolute;inset:0"><path d="M410 60 L250 190 M410 60 L570 190 M250 190 L170 320 M250 190 L330 320 M570 190 L490 320 M570 190 L650 320 M170 320 L100 450 M170 320 L240 450 M490 320 L420 450 M490 320 L560 450" stroke="#a5d6a7" stroke-width="4"/></svg>');
 node(410,60,10);node(250,190,[5]);plus(410,190);node(570,190,5);node(170,320,3);plus(250,320);node(330,320,[2]);node(490,320,1);plus(570,320);node(650,320,[4]);node(100,450,2);plus(170,450);node(240,450,[1]);node(420,450,3);plus(490,450);node(560,450,[1]);
 T.reveal=()=>all.forEach(s=>{if(!s.dataset.ok){s.textContent=s.dataset.w;s.style.color='#e0a000'}})}}
],
extra:[
{title:'Өз пирамидаңды құр: жоғарғы сан – екі астыңғы санның қосындысы.',build(b,T){K.fill(b,T,{fs:52,vals:V10,rows:[[9,'=',4,'+',null],[4,'=',1,'+',null],[null,'=',2,'+',3],[10,'=',3,'+',null,'+',4]],ans:[[5],[3],[5],[3]],title:'Әр жоғарғы сан екі астыңғы санның қосындысына тең'})}},
{title:'Сиқырлы шаршы: әр жол бойынша қосынды 10.',build(b,T){K.fill(b,T,{fs:54,vals:V10,rows:[[2,'+',null,'+',5,'=',10],[null,'+',4,'+',3,'=',10],[1,'+',6,'+',null,'=',10],[4,'+',4,'+',null,'=',10]],ans:[[3],[3],[3],[2]]})}},
{title:'Қай сан жасырынған? Белгісізді тап.',build(b,T){K.fill(b,T,{fs:56,vals:V10,rows:[[null,'+',6,'=',9],[10,'-',null,'=',3],[null,'-',4,'=',5],[2,'+',null,'=',10],[null,'-',0,'=',8]],ans:[[3],[7],[9],[8],[8]]})}}
],
duel:{title:'Құрамы: кім жылдам? (10-ға дейін)',gen:DG.compose([5,6,7,8,9,10])},
games:[GM.houses({nums:[6,7,8,9,10]}),GM.quiz({icon:'🧮',title:'🧮 Жасырын сан: ? орнына не тұр?',gen:()=>{const a=rnd(0,10),c=rnd(0,10-a),h=rnd(0,1);return{q:`<div style="font-size:86px;font-weight:900">${h?'?':a} + ${h?c:'?'} = ${a+c}</div>`,o:near(h?a:c,0,10),a:h?a:c}}})]
});
})();
