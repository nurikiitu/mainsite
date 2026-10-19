/* neuroUstaz · 2-сынып · Математика (Оспанов т.б., Атамұра 2022, 2-бөлім) · 3-тоқсан · 30 ойын (65–104-сабақтар). Көмекшілер: games/common.js */
const Q2S=`<span class="slot" style="display:inline-grid;width:96px;height:84px;vertical-align:middle">?</span>`;
const Q2N=(v,lo=0,hi=100,n=4)=>{const s=new Set([v]);const c=[v+1,v-1,v+2,v-2,v+5,v-5,v+10,v-10,v+3,v-3];shuffle(c).forEach(x=>{if(s.size<n&&x>=lo&&x<=hi)s.add(x)});let g=0;while(s.size<n&&g++<200){const x=v+rnd(-12,12);if(x>=lo&&x<=hi)s.add(x)}return shuffle([...s])};
const Q2E=(t,fs=84)=>BIG(t,fs);
const MUL=(lv,tabs)=>{const a=pick(tabs||[2,3,4,5],1)[0],b=rnd(L3(lv,1,1,2),L3(lv,5,10,10));return Math.random()<.5?{a,b,r:a*b}:{a:b,b:a,r:a*b}};
const MO=(r,a,b)=>{const s=new Set([r]);[r+a,r-a,r+b,r-b,a+b,r+1,r-1].forEach(x=>{if(s.size<4&&x>0&&x<=100)s.add(x)});return shuffle([...s])};
/* тең топтар: a топ, әрқайсысында b зат */
const GRP=(a,b,e)=>`<div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center;max-width:1150px">${[...Array(a)].map(()=>`<div style="background:#fff;border:4px solid #c5d4ee;border-radius:20px;padding:6px 10px;font-size:${b>6?30:40}px;max-width:${b>6?170:200}px;line-height:1.15">${e.repeat(b)}</div>`).join('')}</div>`;
/* фигуралар */
const POLY=(n,c='#7a6cf0',s=200)=>{if(n===0)return `<svg width="${s}" height="${s}" viewBox="0 0 200 200"><circle cx="100" cy="100" r="80" fill="${c}33" stroke="${c}" stroke-width="7"/></svg>`;
  const pts=[...Array(n)].map((_,i)=>{const a=-Math.PI/2+i*2*Math.PI/n+(n===4?Math.PI/4:0);return [100+82*Math.cos(a),104+82*Math.sin(a)]});return `<svg width="${s}" height="${s}" viewBox="0 0 200 200"><polygon points="${pts.map(p=>p.join(',')).join(' ')}" fill="${c}33" stroke="${c}" stroke-width="7" stroke-linejoin="round"/></svg>`};
const PN={3:'Үшбұрыш',4:'Төртбұрыш',5:'Бесбұрыш',6:'Алтыбұрыш',7:'Жетібұрыш',8:'Сегізбұрыш',0:'Дөңгелек'};
const ANG=deg=>{const r=deg*Math.PI/180,x=40,y=170,L=170;const ex=x+L*Math.cos(-r),ey=y+L*Math.sin(-r);const mark=deg===90?`<path d="M${x+28} ${y} L${x+28} ${y-28} L${x} ${y-28}" fill="none" stroke="#e53935" stroke-width="5"/>`:`<path d="M${x+40} ${y} A40 40 0 0 0 ${x+40*Math.cos(-r)} ${y+40*Math.sin(-r)}" fill="none" stroke="#e53935" stroke-width="5"/>`;
  return `<svg width="260" height="200" viewBox="0 0 260 200"><line x1="${x}" y1="${y}" x2="${x+190}" y2="${y}" stroke="#1a2a5a" stroke-width="7" stroke-linecap="round"/><line x1="${x}" y1="${y}" x2="${ex}" y2="${ey}" stroke="#1a2a5a" stroke-width="7" stroke-linecap="round"/>${mark}<circle cx="${x}" cy="${y}" r="7" fill="#1a2a5a"/></svg>`};
const COINS2=[1,2,5,10,20,50,100,200];

/* ===== 1. Геометриялық фигуралар (65–69) ===== */
GAMES.m3poly=QZ('🔷 Көпбұрыштың атауы',lv=>{const n=pick(lv===1?[3,4,0]:lv===2?[3,4,5,6]:[3,4,5,6,7,8],1)[0];const o=[...new Set([PN[n],...pick(Object.values(PN).filter(x=>x!==PN[n]),3)])].slice(0,L3(lv,3,4,4));return{q:POLY(n,SHC[rnd(0,5)],230),o,a:PN[n],oh:NOs}});
GAMES.m3side=QZ('📐 Неше қабырға, неше бұрыш?',lv=>{const n=rnd(3,L3(lv,5,6,8));const w=Math.random()<.5;return{q:POLY(n,SHC[rnd(0,5)],220)+`<div class="mut" style="font-size:26px">${w?'Неше қабырғасы бар?':'Неше бұрышы бар?'}</div>`,o:near(n,3,9),a:n,oh:NO}});
GAMES.m3ang=QZ('📐 Бұрыштың түрі',lv=>{const t=rnd(0,2),deg=t===0?rnd(25,70):t===1?90:rnd(110,160);const a=['Сүйір бұрыш','Тік бұрыш','Доғал бұрыш'][t];return{q:ANG(deg)+`<div class="mut" style="font-size:24px">Тік бұрыш — 90°, сүйір — одан кіші, доғал — одан үлкен</div>`,o:['Сүйір бұрыш','Тік бұрыш','Доғал бұрыш'],a,oh:NOs}});
GAMES.m3pseq=QZ('🔁 Фигуралар тізбегі',lv=>{const L=L3(lv,2,3,3);const base=pick([3,4,5,6,0],L);const seq=[...Array(L3(lv,5,6,7))].map((_,i)=>base[i%L]);const nx=base[seq.length%L];const o=[...new Set([nx,...pick([3,4,5,6,0].filter(x=>x!==nx),3)])];
  return{q:`<div style="display:flex;gap:6px;align-items:center;flex-wrap:wrap;justify-content:center">${seq.map(n=>POLY(n,'#7a6cf0',110)).join('')}<span class="slot" style="width:100px;height:100px;font-size:50px;display:grid">?</span></div>`,o:o.map(n=>PN[n]),a:PN[nx],oh:NOs}});
GAMES.m3polyd=DU('Неше бұрыш?',lv=>{const n=rnd(3,L3(lv,6,7,8));return{q:POLY(n,SHC[rnd(0,5)],150),o:near(n,3,9,L3(lv,3,4,4)),a:n}});

/* ===== 2. Көбейту — тең топтардың бірігуі (71–72) ===== */
GAMES.m3grp=QZ('🍎 Тең топтар: көбейтуге жаз',lv=>{let a,b;do{a=rnd(2,L3(lv,4,5,5));b=rnd(2,L3(lv,4,5,6))}while(a===b);const e=EM[rnd(0,EM.length-1)];const r=`${b} · ${a}`;const o=[...new Set([r,`${a} + ${b}`,`${a} · ${a}`,`${b} + ${b}`,`${b} · ${b}`])].filter(x=>x!==`${a} · ${b}`).slice(0,4);if(!o.includes(r))o[0]=r;
  return{q:GRP(a,b,e)+`<div class="mut" style="font-size:24px">${a} топ, әрқайсысында ${b} зат. Қай көбейту?</div>`,o,a:r,oh:NOs}});
GAMES.m3rep=QZ('➕➡️✖️ Қосуды көбейтумен алмастыр',lv=>{const a=rnd(2,5),n=rnd(2,L3(lv,4,5,6));const sum=Array(n).fill(a).join(' + ');const ans=`${a} · ${n}`;return{q:Q2E(sum,lv===3?62:74),o:[...new Set([ans,`${a} · ${a}`,`${n} + ${a}`,`${a} · ${n+1}`])],a:ans,oh:NOs}});
GAMES.m3cnt=QZ('🧮 Барлығы неше?',lv=>{const a=rnd(2,5),b=rnd(2,L3(lv,4,5,5)),e=EM[rnd(0,EM.length-1)];return{q:GRP(a,b,e)+Q2E(`${b} · ${a} = ${Q2S}`,64),o:MO(a*b,a,b),a:a*b,oh:NO}});
GAMES.m3comp=QZ('🏷️ Көбейту компоненттері',lv=>{const {a,b,r}=MUL(lv);const t=rnd(0,2);const nm=['1-көбейткіш','2-көбейткіш','көбейтінді'][t],v=[a,b,r][t];return{q:Q2E(`${a} · ${b} = ${r}`,96)+`<div class="mut" style="font-size:28px">${nm} қайсы?</div>`,o:[...new Set([a,b,r,a+b])],a:v,oh:NO}});
GAMES.m3grpd=RC('Тең топтарды сана',lv=>{const a=rnd(2,5),b=rnd(2,5),e=EM[rnd(0,EM.length-1)];return{q:GRP(a,b,e).replace(/font-size:40px/g,'font-size:24px').replace(/max-width:1150px/,'max-width:520px'),o:MO(a*b,a,b),a:a*b}});

/* ===== 3. Бөлу және кері амал (73–77) ===== */
GAMES.m3share=QZ('🍬 Тең бөліп бер',lv=>{const k=rnd(2,L3(lv,3,4,5)),b=rnd(2,L3(lv,4,5,6)),n=k*b,e=EM[rnd(0,EM.length-1)];return{q:`<div style="font-size:${n>20?36:50}px;max-width:1000px">${e.repeat(n)}</div><div style="font-size:34px;font-weight:900">${n} затты ${k} балаға тең бөлсе, әрқайсысына нешеден?</div>`,o:near(b,1,10),a:b,oh:NO}});
GAMES.m3div=QZ('➗ Бөлу',lv=>{const {a,b,r}=MUL(lv);return{q:Q2E(`${r} : ${a} = ${Q2S}`,96),o:near(b,1,10),a:b,oh:NO}});
GAMES.m3dcomp=QZ('🏷️ Бөлу компоненттері',lv=>{const {a,b,r}=MUL(lv);const t=rnd(0,2);const nm=['бөлінгіш','бөлгіш','бөлінді'][t],v=[r,a,b][t];return{q:Q2E(`${r} : ${a} = ${b}`,96)+`<div class="mut" style="font-size:28px">${nm} қайсы?</div>`,o:[...new Set([r,a,b,r+1])],a:v,oh:NO}});
GAMES.m3inv=QZ('🔄 Көбейту мен бөлу — кері амалдар',lv=>{const {a,b,r}=MUL(lv);const t=lv===1?0:rnd(0,1);if(t===0)return{q:Q2E(`${a} · ${b} = ${r}`,80)+Q2E(`${r} : ${a} = ${Q2S}`,80),o:near(b,1,10),a:b,oh:NO};
  return{q:Q2E(`${r} : ${b} = ${a}`,80)+Q2E(`${a} · ${Q2S} = ${r}`,80),o:near(b,1,10),a:b,oh:NO}});
GAMES.m3divd=DU('Бөлу жарысы',lv=>{const {a,b,r}=MUL(lv);return{q:Q2E(`${r} : ${a}`,64),o:near(b,1,10,L3(lv,3,4,4)),a:b}});

/* ===== 4. 2, 3, 4, 5-ке көбейту кестесі, монеталар (78–82) ===== */
GAMES.m3tab=QZ('✖️ Көбейту кестесі (2, 3, 4, 5)',lv=>{const t=pick(lv===1?[2,3]:lv===2?[2,3,4]:[2,3,4,5],1)[0],b=rnd(1,10);return{q:Q2E(`${t} · ${b} = ${Q2S}`,100),o:MO(t*b,t,b),a:t*b,oh:NO}});
GAMES.m3miss=QZ('🔍 Жетпейтін көбейткіш',lv=>{const t=pick(lv===1?[2,3]:[2,3,4,5],1)[0],b=rnd(1,10);return Math.random()<.5?{q:Q2E(`${t} · ${Q2S} = ${t*b}`,96),o:near(b,1,10),a:b,oh:NO}:{q:Q2E(`${Q2S} · ${t} = ${t*b}`,96),o:near(b,1,10),a:b,oh:NO}});
GAMES.m3pairs=(box,T,lv)=>GM.memory({title:'🧩 Көбейту мен жауабын жұпта!',pairs:()=>{const s=new Set(),P=[];let g=0;while(P.length<L3(lv,4,6,8)&&g++<300){const {a,b,r}=MUL(Math.min(lv+1,3));if(s.has(r))continue;s.add(r);P.push([`<div style="font-size:44px;font-weight:900">${a} · ${b}</div>`,`<div style="font-size:50px;font-weight:900;color:#e53935">${r}</div>`])}return P}}).build(box,T);
GAMES.m3coin=QZ('🪙 Монеталар мен қағаз ақшалар',lv=>{const n=rnd(2,L3(lv,3,4,5));let L;do{L=[...Array(n)].map(()=>pick(lv===1?[1,2,5,10]:[1,2,5,10,20,50],1)[0])}while(L.reduce((s,v)=>s+v,0)>100);const s=L.reduce((x,v)=>x+v,0);
  return{q:coins(L)+`<div class="mut" style="font-size:26px">Барлығы неше теңге?</div>`,o:Q2N(s,1,100).map(x=>x+' ₸'),a:s+' ₸',oh:NOs}});
GAMES.m3tabd=RC('Кесте жарысы',lv=>{const {a,b,r}=MUL(lv);return{q:Q2E(`${a} · ${b}`,64),o:[r,...MO(r,a,b).filter(x=>x!==r).slice(0,L3(lv,2,3,3))],a:r}});

/* ===== 5. Өрнектер, қасиеттер, теңдеулер (84–90) ===== */
GAMES.m3ord=QZ('🥇 Амалдардың орындалу реті',lv=>{const a=rnd(2,5),b=rnd(2,6),c=rnd(1,20);const t=rnd(0,lv===1?1:3);const E=[[`${c} + ${a} · ${b}`,c+a*b],[`${a} · ${b} − ${Math.min(c,a*b)}`,a*b-Math.min(c,a*b)],[`(${c} + ${a}) · 2`,(c+a)*2],[`${a*b} : ${a} + ${c}`,b+c]][t];if(E[1]>100)return{q:Q2E(`${a} · ${b} + 1`,84),o:Q2N(a*b+1,0,100),a:a*b+1,oh:NO};
  return{q:Q2E(`${E[0]} = ${Q2S}`,80)+`<div class="mut" style="font-size:24px">Алдымен көбейту мен бөлу, сосын қосу мен азайту (жақша — ең бірінші)</div>`,o:Q2N(E[1],0,100),a:E[1],oh:NO}});
GAMES.m3let=QZ('🔤 Әріпті өрнек',lv=>{const a=rnd(2,L3(lv,9,10,10));const T=[[`a + 15`,a+15],[`40 − a`,40-a],[`a · 3`,a*3],[`a · 5 + 2`,a*5+2],[`(a + 4) · 2`,(a+4)*2]];const [e,v]=T[rnd(0,L3(lv,1,2,4))];
  return{q:Q2E(`a = ${a}`,70)+Q2E(`${e} = ${Q2S}`,80),o:Q2N(v,0,100),a:v,oh:NO}});
GAMES.m3prop=QZ('🔀 Қосу мен көбейтудің қасиеттері',lv=>{const a=rnd(2,9),b=rnd(2,9);const T=[{q:`${a} · ${b} = ${b} · ${Q2S}`,a:a,o:near(a,1,10)},{q:`${a} + ${b} = ${b} + ${Q2S}`,a:a,o:near(a,1,10)},{q:`${a} · 1 = ${Q2S}`,a:a,o:[a,1,0,a+1]},{q:`${a} · 0 = ${Q2S}`,a:0,o:[0,a,1,a+1]},{q:`${a*2} : 1 = ${Q2S}`,a:a*2,o:[a*2,1,0,a]},{q:`${a} : ${a} = ${Q2S}`,a:1,o:[1,0,a,a*a>100?2:a*a]}];
  const t=T[rnd(0,L3(lv,1,3,5))];return{q:Q2E(t.q,90),o:[...new Set(t.o)],a:t.a,oh:NO}});
GAMES.m3eq=QZ('⚖️ Теңдеуді шеш',lv=>{const T=[()=>{const x=rnd(5,40),a=rnd(5,40);return{q:`x + ${a} = ${x+a}`,a:x}},()=>{const x=rnd(20,90),a=rnd(5,x-5);return{q:`x − ${a} = ${x-a}`,a:x}},()=>{const {a,b,r}=MUL(2);return{q:`x · ${a} = ${r}`,a:b}},()=>{const {a,b,r}=MUL(2);return{q:`x : ${a} = ${b}`,a:r}},()=>{const x=rnd(5,30),a=rnd(x+5,90);return{q:`${a} − x = ${a-x}`,a:x}}];
  const t=T[rnd(0,L3(lv,1,3,4))]();return{q:Q2E(t.q,96)+`<div class="mut" style="font-size:26px">x неге тең?</div>`,o:Q2N(t.a,0,100),a:t.a,oh:NO}});
GAMES.m3eqd=DU('Теңдеу жарысы',lv=>{const x=rnd(2,9),a=pick([2,3,4,5],1)[0];return Math.random()<.5?{q:Q2E(`x · ${a} = ${x*a}`,54),o:near(x,1,10,L3(lv,3,4,4)),a:x}:{q:Q2E(`x + ${a*5} = ${x+a*5}`,54),o:near(x,1,10,L3(lv,3,4,4)),a:x}});

/* ===== 6. Есептер (92–101) ===== */
const P3=[lv=>{const p=pick([5,10,20],1)[0],n=rnd(2,5);return{q:`Бір дәптердің бағасы ${p} теңге. ${n} дәптер неше теңге тұрады?`,a:p*n,u:'₸'}},
 lv=>{const a=rnd(2,9),k=pick([2,3,4,5],1)[0];return{q:`Асанда ${a} алма бар. Әсемде одан ${k} есе көп. Әсемде неше алма бар?`,a:a*k,u:''}},
 lv=>{const k=pick([2,3,4,5],1)[0],b=rnd(2,9);return{q:`Бақшада ${k*b} қызғалдақ, раушан одан ${k} есе аз. Неше раушан бар?`,a:b,u:''}},
 lv=>{const k=pick([2,3,4,5],1)[0],b=rnd(2,9);return{q:`Апада ${k*b} кәмпит, інісінде ${b} кәмпит. Апада інісінен неше есе көп кәмпит бар?`,a:k,u:'есе'}},
 lv=>{const k=pick([2,3,4,5],1)[0],b=rnd(2,9);return{q:`${k*b} қарындашты ${k} қорапқа тең салды. Әр қорапта неше қарындаш?`,a:b,u:''}},
 lv=>{const k=pick([2,3,4,5],1)[0],b=rnd(2,9),c=rnd(1,20);return{q:`Әр сөреде ${k} кітаптан, ${b} сөре бар. Тағы ${c} кітап әкелді. Барлығы неше кітап?`,a:k*b+c,u:''}},
 lv=>{const k=pick([2,3,4,5],1)[0],b=rnd(2,9);return{q:`Бір қорапта ${k} қалам бар. ${k*b} қалам неше қорапқа сыяды?`,a:b,u:''}}];
GAMES.m3prob=QZ('📝 Көбейту мен бөлуге есептер',lv=>{const p=P3[rnd(0,L3(lv,2,4,6))](lv);const fm=x=>p.u==='₸'?x+' ₸':p.u==='есе'?x+' есе':x;return{q:`<div style="font-size:36px;font-weight:800;max-width:1150px;line-height:1.35">${p.q}</div>`,o:Q2N(p.a,1,100).map(fm),a:fm(p.a),oh:NOs}});
GAMES.m3times=QZ('📈 Есе арттыр, есе кемит',lv=>{const k=pick([2,3,4,5],1)[0],a=rnd(2,L3(lv,5,9,10));const up=Math.random()<.5;return up?{q:Q2E(`${a} санын ${k} есе арттыр`,64),o:[a*k,a+k,a*k+1,Math.max(1,a-1)*k].filter((v,i,s)=>s.indexOf(v)===i),a:a*k,oh:NO}:{q:Q2E(`${a*k} санын ${k} есе кеміт`,64),o:[...new Set([a,a*k-k,a+1,a*k+k])],a,oh:NO}});
GAMES.m3cost=QZ('🛒 Баға · саны = құны',lv=>{const p=pick([2,3,4,5,10],1)[0],n=rnd(2,L3(lv,5,9,9));const t=lv===1?0:rnd(0,2);if(t===0)return{q:Q2E(`Баға: ${p} ₸ · Саны: ${n} · Құны: ?`,56),o:Q2N(p*n,1,100).map(x=>x+' ₸'),a:p*n+' ₸',oh:NOs};
  if(t===1)return{q:Q2E(`Құны: ${p*n} ₸ · Саны: ${n} · Бағасы: ?`,56),o:near(p,1,10).map(x=>x+' ₸'),a:p+' ₸',oh:NOs};return{q:Q2E(`Құны: ${p*n} ₸ · Бағасы: ${p} ₸ · Саны: ?`,56),o:near(n,1,10).map(x=>x+' дана'),a:n+' дана',oh:NOs}});
GAMES.m3probd=DU('Есеп жарысы',lv=>{const p=P3[rnd(0,6)](lv);return{q:`<div style="font-size:21px;font-weight:800;line-height:1.3">${p.q}</div>`,o:Q2N(p.a,1,100,L3(lv,3,4,4)),a:p.a}});
GAMES.m3mil=(box,T,lv)=>MILLION(box,T,[k=>{const {a,b,r}=MUL(k<4?1:2);return{q:`${a} · ${b} = ?`,o:MO(r,a,b),a:r}},k=>{const {a,b,r}=MUL(2);return{q:`${r} : ${a} = ?`,o:near(b,1,10),a:b}},k=>{const n=rnd(3,6);return{q:`${PN[n]} — неше бұрышы бар?`,o:near(n,3,9),a:n}},
  k=>{const p=P3[rnd(0,6)](2);return{q:p.q,o:Q2N(p.a,1,100),a:p.a}},k=>({q:'Тік бұрыш неше градус?',o:[90,60,100,180],a:90})]);
/* 1–3 сынып сайттарынан қосылған */
GAMES.coldiv=COLDIV;
