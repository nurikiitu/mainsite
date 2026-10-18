/* neuroUstaz · 2-сынып · Математика (Оспанов т.б., Атамұра 2022, 1-бөлім) · 1-тоқсан · 30 ойын (1–36-сабақтар). Көмекшілер: games/common.js */
const Q2S=`<span class="slot" style="display:inline-grid;width:96px;height:84px;vertical-align:middle">?</span>`;
const Q2N=(v,lo=0,hi=100,n=4)=>{const s=new Set([v]);const c=[v+1,v-1,v+10,v-10,v+2,v-2,v+9,v-9,v+11,v-11];shuffle(c).forEach(x=>{if(s.size<n&&x>=lo&&x<=hi)s.add(x)});let g=0;while(s.size<n&&g++<200){const x=v+rnd(-15,15);if(x>=lo&&x<=hi)s.add(x)}return shuffle([...s])};
const W1=['','бір','екі','үш','төрт','бес','алты','жеті','сегіз','тоғыз'],W10=['','он','жиырма','отыз','қырық','елу','алпыс','жетпіс','сексен','тоқсан'];
const KW=n=>n===100?'жүз':n===0?'нөл':[W10[Math.floor(n/10)],W1[n%10]].filter(Boolean).join(' ');
const Q2E=(t,fs=84)=>BIG(t,fs);
/* екі таңбалы санның моделі: ондық таяқшалар + бірліктер */
const MOD=n=>`<div style="display:flex;align-items:flex-end;gap:6px;flex-wrap:wrap;justify-content:center;max-width:1100px">${bundles(Math.floor(n/10),n%10,150)}</div>`;
/* ондық/бірлік кестесі (графикалық модель) */
const TBL=(d,u)=>`<div style="display:inline-grid;grid-template-columns:150px 150px;border:4px solid #1a2a5a;border-radius:16px;overflow:hidden;font-weight:900;text-align:center;background:#fff"><div style="background:#ffe0b2;font-size:26px;padding:6px">ондық</div><div style="background:#bbdefb;font-size:26px;padding:6px">бірлік</div><div style="font-size:72px;padding:6px">${d}</div><div style="font-size:72px;padding:6px">${u}</div></div>`;
/* тізбекпен ретке қою */
const SORTN=(title,mk)=>(box,T,lv)=>ROUNDS(box,5,(b,k,hd)=>{const {vals,desc}=uq(()=>mk(lv));const seq=[...vals].sort((x,y)=>desc?y-x:x-y);hd.innerHTML=title(desc);
  b.style.flexDirection='column';b.style.alignItems='center';b.style.justifyContent='space-around';const line=el('div','sline'),sl=seq.map(()=>{const x=el('div','wslot');line.append(x);return x});b.append(line);
  let f=0;const mark=()=>sl.forEach((x,i)=>x.classList.toggle('next',i===f));mark();const tiles=el('div','tiles');
  shuffle(vals).forEach(v=>{const t=el('button','tile',String(v));t.onclick=()=>{if(v!==seq[f])return T.bad(t);beep('tap');sl[f].textContent=v;sl[f].className='wslot filled';t.classList.add('used');f++;mark();if(f>=seq.length)T.done()};tiles.append(t)});b.append(tiles);
  T.reveal=()=>{const t=[...tiles.children].find(x=>x.textContent===String(seq[f])&&!x.classList.contains('used'));t&&t.classList.add('hint')}});

/* ===== 1. Екі таңбалы сандардың құрылуы (1–4) ===== */
GAMES.m1mod=QZ('🧮 Ондықтар мен бірліктерді сана',lv=>{const n=rnd(L3(lv,11,21,41),L3(lv,39,69,99));return{q:MOD(n)+`<div class="mut" style="font-size:24px">🟥 байлам — 1 ондық (10), таяқша — 1 бірлік</div>`,o:Q2N(n,10,99),a:n,oh:NO}});
GAMES.m1read=QZ('📖 Санды оқы',(lv,k)=>{const n=rnd(11,99);if(lv>1&&k%2)return{q:Q2E(n,120)+`<div class="mut" style="font-size:26px">Бұл сан қалай оқылады?</div>`,o:shuffle([...new Set([n,n%10*10+Math.floor(n/10),n+10>99?n-10:n+10,n%10?n+1:n-1].filter(x=>x>=10&&x<=99))]).slice(0,4).map(KW),a:KW(n),oh:v=>`<span style="font-size:32px;font-weight:900;padding:4px 10px">${v}</span>`};
  return{q:Q2E(KW(n),72)+`<div class="mut" style="font-size:26px">Цифрмен жаз</div>`,o:Q2N(n,10,99),a:n,oh:NO}});
GAMES.m1razr=QZ('🏗️ Разрядтық құрам',(lv,k)=>{const n=rnd(11,99),d=Math.floor(n/10),u=n%10;const t=lv===1?0:k%3;
  if(t===0)return{q:Q2E(`${d} онд. ${u} бірл. = ${Q2S}`,74),o:Q2N(n,10,99),a:n,oh:NO};
  if(t===1)return{q:Q2E(`${n} = ${d*10} + ${Q2S}`,84),o:near(u,0,9),a:u,oh:NO};
  return{q:Q2E(`${n} = ${Q2S} + ${u}`,84),o:[...new Set([d*10,d,u*10||90,(d+1)*10>90?(d-1)*10:(d+1)*10])].slice(0,4),a:d*10,oh:NO}});
GAMES.m1tbl=QZ('📊 Графикалық модель',lv=>{const n=rnd(11,99),d=Math.floor(n/10),u=n%10;if(lv<3)return{q:TBL(d,u)+`<div class="mut" style="font-size:24px">Кестеде қандай сан жазылған?</div>`,o:Q2N(n,10,99),a:n,oh:NO};
  return{q:Q2E(n,110)+`<div class="mut" style="font-size:24px">Бұл санда неше ондық бар?</div>`,o:near(d,1,9),a:d,oh:NO}});
GAMES.m1place=DU('Ондық па, бірлік пе?',lv=>{let n,d,u;do{n=rnd(11,99);d=Math.floor(n/10);u=n%10}while(d===u);const w=Math.random()<.5;return{q:Q2E(n,74)+`<div style="font-size:22px;font-weight:800">${w?'Неше ондық?':'Неше бірлік?'}</div>`,o:[...new Set([d,u,...near(w?d:u,0,9)])].slice(0,lv===1?2:4),a:w?d:u}});

/* ===== 2. Оқу, жазу, салыстыру (2, 5–6) ===== */
GAMES.m1cmp=QZ('⚖️ Салыстыр: >, <, =',lv=>{let a=rnd(10,99),b;if(lv===1)b=rnd(10,99);else if(lv===2)b=Math.floor(a/10)*10+rnd(0,9);else b=a%10*10+Math.floor(a/10);if(b<10)b=a;if(Math.random()<.15)b=a;
  return{q:Q2E(`${a} ◻ ${b}`,100),o:['>','<','='],a:cmp(a,b),oh:optBig}});
GAMES.m1max=QZ(lv=>'🏆 Ең үлкен санды тап',lv=>{const s=new Set();const d=rnd(1,9);while(s.size<L3(lv,3,4,4))s.add(lv===3?d*10+rnd(0,9):rnd(10,99));const v=[...s];return{q:Q2E(v.join('   '),76)+`<div class="mut" style="font-size:26px">Ең үлкені қайсы?</div>`,o:v,a:Math.max(...v),oh:NO}});
GAMES.m1sort=SORTN(desc=>desc?'⬇️ Кемуі бойынша ретімен қой':'⬆️ Өсуі бойынша ретімен қой',lv=>{const s=new Set();const d=rnd(1,8);while(s.size<L3(lv,3,4,5))s.add(lv===3?d*10+rnd(0,15):rnd(10,99));return{vals:[...s].filter(x=>x<=99),desc:lv>1&&Math.random()<.5}});
GAMES.m1cmpd=RC('Қай сан үлкен?',lv=>{const a=rnd(10,99);let b=lv===3?a%10*10+Math.floor(a/10):rnd(10,99);if(b===a||b<10)b=a<99?a+1:a-1;return{q:Q2E(`${a} ? ${b}`,60),o:['>','<'],a:cmp(a,b),oh:optBig}});
GAMES.m1nbr=TQ('🏘️ Көрші сандар',lv=>{const n=rnd(11,98);const t=lv===1?1:rnd(0,1);const a=t?n+1:n-1;if(lv===3){const s=rnd(1,8)*10+rnd(0,5),st=Math.random()<.5?10:2,i=rnd(0,3);const seq=[0,1,2,3].map(j=>s+st*j).filter(x=>x<=99);if(seq.length===4)return{q:Q2E(seq.map((x,j)=>j===i?'?':x).join(', '),76),o:Q2N(seq[i],0,99),a:seq[i],oh:NO}}
  return{q:Q2E(t?`${n} , ?`:`? , ${n}`,100)+`<div class="mut" style="font-size:26px">${t?'Кейінгі сан':'Алдыңғы сан'}</div>`,o:Q2N(a,0,99),a,oh:NO}});

/* ===== 3. Жақшалы өрнектер, разрядтан аттамай (7–11) ===== */
const NOCARRY=lv=>{const op=Math.random()<.5?'+':'-';if(lv===1){const a=rnd(1,8)*10,b=rnd(1,9-a/10)*10;return op==='+'?{a,b,op,r:a+b}:{a:a+b,b,op:'-',r:a}}
  if(op==='+'){const a=rnd(11,88),u=a%10,d=Math.floor(a/10);const b=lv===2?rnd(1,9-u):rnd(1,9-d)*10+rnd(0,9-u);return{a,b,op,r:a+b}}
  const a=rnd(21,99),u=a%10,d=Math.floor(a/10);const b=lv===2?rnd(0,u):rnd(1,d-1)*10+rnd(0,u);return{a,b,op,r:a-b}};
GAMES.m1nc=QZ('➕ Разрядтан аттамай қосу, азайту',lv=>{const e=NOCARRY(lv);return{q:Q2E(`${e.a} ${SG(e.op)} ${e.b} = ${Q2S}`,90),o:Q2N(e.r,0,100),a:e.r,oh:NO}});
GAMES.m1br=QZ('( ) Жақшалы өрнек',lv=>{let a,b,c,r,t;do{a=rnd(L3(lv,5,10,20),L3(lv,20,40,60));b=rnd(1,L3(lv,9,20,30));c=rnd(1,L3(lv,9,20,30));t=rnd(0,1)}while(t?(b<c||a+b-c<0):(a<b+c));
  if(t){r=a+(b-c);return{q:Q2E(`${a} + (${b} − ${c}) = ${Q2S}`,80),o:Q2N(r,0,100),a:r,oh:NO}}r=a-(b+c);return{q:Q2E(`${a} − (${b} + ${c}) = ${Q2S}`,80),o:Q2N(r,0,100),a:r,oh:NO}});
GAMES.m1first=QZ('🥇 Қай амал бірінші орындалады?',lv=>{const a=rnd(20,60),b=rnd(1,15),c=rnd(1,9);const T=[[`${a} − (${b} + ${c})`,`${b} + ${c}`,[`${a} − ${b}`]],[`(${a} − ${b}) + ${c}`,`${a} − ${b}`,[`${b} + ${c}`]],[`${a} + ${b} − ${c}`,`${a} + ${b}`,[`${b} − ${c}`]],[`${a} − ${b} + ${c}`,`${a} − ${b}`,[`${b} + ${c}`]]];
  const [q,ans,w]=T[rnd(0,lv===1?1:3)];return{q:Q2E(q,80)+`<div class="mut" style="font-size:26px">Қай амал бірінші орындалады?</div>`,o:[ans,...w],a:ans,oh:NOs}});
GAMES.m1ncd=DU('Ауызша есепте',lv=>{const e=NOCARRY(lv);return{q:Q2E(`${e.a} ${SG(e.op)} ${e.b}`,62),o:Q2N(e.r,0,100,L3(lv,3,4,4)),a:e.r}});
GAMES.m1brc=TQ('( ) Жақшаны аш, есепте!',lv=>{let a,b,c;do{a=rnd(30,70);b=rnd(5,25);c=rnd(1,9)}while(b<c);const t=rnd(0,1),q=t?`${a} − (${b} − ${c})`:`(${a} + ${b}) − ${c}`,r=t?a-(b-c):a+b-c;return{q:Q2E(q,80),o:Q2N(r,0,100),a:r,oh:NO}});

/* ===== 4. Бір таңбалы сандарды разрядтан аттап қосу, азайту (12–15) ===== */
const CARRY1=lv=>{const op=Math.random()<.5?'+':'-';if(lv===1){if(op==='+'){const a=rnd(2,9),b=rnd(11-a,9);return{a,b,op,r:a+b}}const a=rnd(11,18),b=rnd(a-9,9);return{a,b,op,r:a-b}}
  if(op==='+'){const a=rnd(1,8)*10+rnd(2,9),b=rnd(11-a%10,9);return{a,b,op,r:a+b}}const a=rnd(2,9)*10+rnd(0,8),b=rnd(a%10+1,9);return{a,b,op,r:a-b}};
GAMES.m1c1=QZ('🔟 Ондыққа толтырып қос',lv=>{const e=CARRY1(lv);if(e.op==='+'&&lv<3){const need=10-e.a%10;return{q:Q2E(`${e.a} + ${e.b} = ${e.a} + ${need} + ${e.b-need} = ${Q2S}`,62)+`<div class="mut" style="font-size:24px">Алдымен ондыққа дейін толтыр</div>`,o:Q2N(e.r,0,100),a:e.r,oh:NO}}
  return{q:Q2E(`${e.a} ${SG(e.op)} ${e.b} = ${Q2S}`,90),o:Q2N(e.r,0,100),a:e.r,oh:NO}});
GAMES.m1tab=QZ('📋 Қосу кестесі',lv=>{const a=rnd(2,9),b=rnd(Math.max(2,11-a),9),s=a+b;const t=lv===1?0:rnd(0,lv===3?2:1);
  if(t===0)return{q:Q2E(`${a} + ${b} = ${Q2S}`,100),o:near(s,10,18),a:s,oh:NO};if(t===1)return{q:Q2E(`${s} − ${a} = ${Q2S}`,100),o:near(b,1,9),a:b,oh:NO};return{q:Q2E(`${a} + ${Q2S} = ${s}`,100),o:near(b,1,9),a:b,oh:NO}});
GAMES.m1c1d=RC('Кім жылдам есептейді?',lv=>{const e=CARRY1(lv);return{q:Q2E(`${e.a} ${SG(e.op)} ${e.b}`,62),o:Q2N(e.r,0,100,L3(lv,3,4,4)),a:e.r}});
GAMES.m1pair=(box,T,lv)=>GM.memory({title:'🧩 Өрнек пен жауабын жұпта!',pairs:()=>{const s=new Set(),P=[];let g=0;while(P.length<L3(lv,4,6,8)&&g++<200){const e=CARRY1(Math.min(lv,2));if(s.has(e.r))continue;s.add(e.r);P.push([`<div style="font-size:36px;font-weight:900">${e.a} ${SG(e.op)} ${e.b}</div>`,`<div style="font-size:50px;font-weight:900;color:#1e63d6">${e.r}</div>`])}return P}}).build(box,T);
GAMES.m1mil1=(box,T,lv)=>MILLION(box,T,[k=>{const n=rnd(11,99);return{q:`${Math.floor(n/10)} онд. ${n%10} бірл. = ?`,o:Q2N(n,10,99),a:n}},k=>{const e=CARRY1(k<5?1:2);return{q:`${e.a} ${SG(e.op)} ${e.b} = ?`,o:Q2N(e.r,0,100),a:e.r}},
  k=>{const e=NOCARRY(k<5?2:3);return{q:`${e.a} ${SG(e.op)} ${e.b} = ?`,o:Q2N(e.r,0,100),a:e.r}},k=>{const n=rnd(11,99);return{q:`«${KW(n)}» — цифрмен?`,o:Q2N(n,10,99),a:n}}]);

/* ===== 5. 100 көлемінде разрядтан аттап қосу, азайту; тиімді тәсіл (16–22) ===== */
const CARRY2=lv=>{const op=Math.random()<.5?'+':'-';if(op==='+'){let a,b;do{a=rnd(11,L3(lv,59,79,89));b=lv===1?rnd(2,9):rnd(11,99-a)}while(a%10+b%10<10||a+b>100);return{a,b,op,r:a+b}}
  let a,b;do{a=rnd(21,99);b=lv===1?rnd(2,9):rnd(11,a-1)}while(a%10>=b%10);return{a,b,op,r:a-b}};
GAMES.m1c2=QZ('🔁 Разрядтан аттап қосу, азайту',lv=>{const e=CARRY2(lv);return{q:Q2E(`${e.a} ${SG(e.op)} ${e.b} = ${Q2S}`,90),o:Q2N(e.r,0,100),a:e.r,oh:NO}});
GAMES.m1smart=QZ('💡 Тиімді тәсілмен есепте',lv=>{if(lv===1){let a,b;do{a=rnd(1,8)*10+rnd(1,9);b=rnd(1,8)*10+(10-a%10)}while(a+b>100);const r=a+b;return{q:Q2E(`${a} + ${b} = ${Q2S}`,90)+`<div class="mut" style="font-size:24px">Бірліктер қосылып, ондық шығады</div>`,o:Q2N(r,0,100),a:r,oh:NO}}
  let x=rnd(11,39),y=rnd(11,39);const z=10-x%10+rnd(0,2)*10;if(x+y+z>100)return{q:Q2E(`${x} + ${z} + ${y%10}`,84),o:Q2N(x+z+y%10,0,100),a:x+z+y%10,oh:NO};
  return{q:Q2E(`${x} + ${y} + ${z} = ${Q2S}`,80)+`<div class="mut" style="font-size:24px">Ыңғайлы қосылғыштарды топта</div>`,o:Q2N(x+y+z,0,100),a:x+y+z,oh:NO}});
GAMES.m1way=QZ('🧠 Қалай есептеген ыңғайлы?',lv=>{let a,b;do{a=rnd(2,8)*10+rnd(1,9);b=rnd(1,4)*10+9}while(a+b>100);const r=a+b;const o=[`${a} + ${b+1} − 1`,`${a} + ${b} − 1`,`${a} − ${b+1} + 1`];
  return lv===1?{q:Q2E(`${a} + ${b} = ${Q2S}`,90),o:Q2N(r,0,100),a:r,oh:NO}:{q:Q2E(`${a} + ${b}`,90)+`<div class="mut" style="font-size:24px">Қай тәсіл дұрыс?</div>`,o,a:o[0],oh:NOs}});
GAMES.m1c2d=DU('Аттап есепте',lv=>{const e=CARRY2(lv);return{q:Q2E(`${e.a} ${SG(e.op)} ${e.b}`,60),o:Q2N(e.r,0,100,L3(lv,3,4,4)),a:e.r}});
GAMES.m1c2t=TQ('🔁 Топпен есептейік',lv=>{const e=CARRY2(lv);return{q:Q2E(`${e.a} ${SG(e.op)} ${e.b} = ?`,90),o:Q2N(e.r,0,100),a:e.r,oh:NO}});

/* ===== 6. Есептер (23–27) және шамалар (28–36) ===== */
const PR=[lv=>{const a=rnd(10,40),b=rnd(5,40);return{q:`Себетте ${a} алма, ал екінші себетте ${b} алма бар. Барлығы неше алма?`,a:a+b}},
 lv=>{const s=rnd(30,90),a=rnd(10,s-5);return{q:`Барлығы ${s} кітап. Оның ${a} кітабы — ертегі, қалғаны өлең кітабы. Неше өлең кітабы бар?`,a:s-a}},
 lv=>{const a=rnd(30,90),b=rnd(5,a-5);return{q:`Бақшада ${a} гүл өсті. ${b} гүлді үзіп алды. Неше гүл қалды?`,a:a-b}},
 lv=>{const a=rnd(10,60),b=rnd(5,30);return{q:`Асанда ${a} қарындаш бар. Әсемде одан ${b} қарындаш артық. Әсемде неше қарындаш бар?`,a:a+b}},
 lv=>{const a=rnd(30,90),b=rnd(5,25);return{q:`Арманда ${a} марка бар. Бекзатта одан ${b} марка кем. Бекзатта неше марка бар?`,a:a-b}},
 lv=>{const a=rnd(40,90),b=rnd(10,a-5);return{q:`Бір жәшікте ${a} кг, екіншісінде ${b} кг алма бар. Бірінші жәшікте неше кг артық?`,a:a-b}},
 lv=>{const a=rnd(10,40),r=rnd(a+5,90);return{q:`Автобуста бірнеше жолаушы болды. Аялдамада ${a} адам түсті, ${r-a} адам қалды. Басында неше жолаушы болды?`,a:r}}];
GAMES.m1prob=QZ('📝 Есептер',lv=>{const p=PR[rnd(0,lv===1?2:lv===2?4:6)](lv);return{q:`<div style="font-size:38px;font-weight:800;max-width:1100px;line-height:1.35">${p.q}</div>`,o:Q2N(p.a,0,100),a:p.a,oh:NO}});
GAMES.m1pw=QZ('🔵 Бөлік және бүтін',lv=>{const w=rnd(20,90),a=rnd(5,w-5),b=w-a,h=rnd(0,lv===1?1:2);return{q:partWhole(h===2?null:w,h===0?null:a,h===1?null:b),o:Q2N(h===2?w:h===0?a:b,0,100),a:h===2?w:h===0?a:b,oh:NO}});
GAMES.m1len=QZ('📏 Шамалар: ұзындық, масса, көлем',lv=>{const T=[()=>{const n=rnd(1,9);return{q:`${n} дм = ? см`,o:[n*10,n,n*100,n+10].map(x=>x+' см'),a:n*10+' см'}},()=>{const n=rnd(1,9);return{q:`${n} м = ? дм`,o:[n*10,n,n*100,n+10].map(x=>x+' дм'),a:n*10+' дм'}},
   ()=>{const d=rnd(1,9),c=rnd(1,9);return{q:`${d} дм ${c} см = ? см`,o:[...new Set([d*10+c,d+c,c*10+d,d*100+c,d*10+c+10])].slice(0,4).map(x=>x+' см'),a:(d*10+c)+' см'}},()=>{const n=rnd(1,5);return{q:`${n} ц = ? кг`,o:[n*100,n*10,n,n*1000].map(x=>x+' кг'),a:n*100+' кг'}},
   ()=>{const a=rnd(10,60),b=rnd(5,30);return{q:`${a} л + ${b} л = ?`,o:Q2N(a+b,0,100).map(x=>x+' л'),a:(a+b)+' л'}},()=>{const a=rnd(30,90),b=rnd(5,25);return{q:`${a} кг − ${b} кг = ?`,o:Q2N(a-b,0,100).map(x=>x+' кг'),a:(a-b)+' кг'}}];
  const t=T[rnd(0,lv===1?1:lv===2?3:5)]();return{q:Q2E(t.q,70),o:t.o,a:t.a,oh:NOs}});
GAMES.m1probd=DU('Есепті шығар',lv=>{const p=PR[rnd(0,lv===1?2:6)](lv);return{q:`<div style="font-size:22px;font-weight:800;line-height:1.3">${p.q}</div>`,o:Q2N(p.a,0,100,L3(lv,3,4,4)),a:p.a}});
GAMES.m1mil2=(box,T,lv)=>MILLION(box,T,[k=>{const p=PR[rnd(0,6)](2);return{q:p.q,o:Q2N(p.a,0,100),a:p.a}},k=>{const e=CARRY2(k<5?1:2);return{q:`${e.a} ${SG(e.op)} ${e.b} = ?`,o:Q2N(e.r,0,100),a:e.r}},
  k=>{const n=rnd(1,9);return{q:`${n} дм = ? см`,o:[n*10,n,n*100,n+10].map(x=>x+' см'),a:n*10+' см'}},k=>{const n=rnd(1,5);return{q:`${n} ц = ? кг`,o:[n*100,n*10,n,n*1000].map(x=>x+' кг'),a:n*100+' кг'}}]);
