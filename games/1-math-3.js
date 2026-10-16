/* neuroUstaz · 1-сынып · Математика · 3-тоқсан · 30 ойын (65–100 сабақтар). Көмекшілер: games/common.js */
const SL=`<span class="slot" style="display:inline-grid;width:80px;height:80px;vertical-align:middle">?</span>`;
const exq=(a,op,b,r,hide=3)=>BIG([hide===0?SL:a,SG(op),hide===1?SL:b,'=',hide===3?SL:r].join(' '),84);
/* сандар: 1-деңгей — 10 көлемінде, 2–3 — ондықтар 100-ге дейін */
const pairN=(lv)=>{if(lv===1){const w=rnd(2,10),a=rnd(1,w-1);return[w,a,w-a,1]}const w=rnd(2,10)*10,a=rnd(1,w/10-1)*10;return[w,a,w-a,10]};
const opt=(v,st)=>st===10?nearS(v,0,100,10):near(v,0,10);

/* ===== 1. Қосу мен азайту — өзара кері амалдар ===== */
GAMES.inverse=QZ('🔁 Қосудан азайтуға: бір мысалдан екіншісін тап',(lv)=>{const [w,a,b,st]=pairN(lv);const k=rnd(0,1);
 return{q:BIG(`${a} + ${b} = ${w}`,70,'#1e88e5')+'<div style="font-size:40px">⬇</div>'+BIG(`${w} − ${k?a:b} = ${SL}`,80),o:opt(k?b:a,st),a:k?b:a,oh:NO}});
GAMES.partwhole=QZ('🧩 Бүтін мен бөліктер: жетпейтін санды тап',(lv)=>{const [w,a,b,st]=pairN(lv);const h=rnd(0,2);
 return{q:partWhole(h===0?null:w,h===1?null:a,h===2?null:b),o:opt([w,a,b][h],st),a:[w,a,b][h],oh:NO}});
GAMES.check=QZ('✅ Мысал дұрыс шешілген бе?',(lv)=>{const [w,a,b,st]=pairN(lv);const ok=Math.random()<.5;const r=ok?w:w+(Math.random()<.5?st:-st);const sub=Math.random()<.5;
 const q=sub?`${r} − ${a} = ${b}`:`${a} + ${b} = ${r}`;return{q:BIG(q,84)+(lv===3?`<div class="mut" style="font-size:24px">Кері амалмен тексер</div>`:''),o:['✅ Дұрыс','❌ Қате'],a:ok?'✅ Дұрыс':'❌ Қате',oh:NO}});
GAMES.invduel=DU('Жетпейтін санды тап',(lv)=>{const [w,a,b,st]=pairN(lv);const t=rnd(0,3);
 if(t===0)return{q:exq(a,'+',null,w,1),o:opt(b,st),a:b,oh:NOs};if(t===1)return{q:exq(null,'+',b,w,0),o:opt(a,st),a,oh:NOs};if(t===2)return{q:exq(w,'-',null,a,1),o:opt(b,st),a:b,oh:NOs};return{q:exq(w,'-',a,b),o:opt(b,st),a:b,oh:NOs}});
GAMES.family=TQ('👨‍👩‍👧 Мысалдар отбасы: қайсысы дұрыс?',(lv)=>{const [w,a,b,st]=pairN(lv);const ok=pick([`${w} − ${a} = ${b}`,`${w} − ${b} = ${a}`,`${b} + ${a} = ${w}`],1)[0];
 const wr=[`${a} − ${w} = ${b}`,`${w} + ${a} = ${b}`,`${a} + ${w} = ${b}`,`${b} − ${w} = ${a}`];return{q:BIG(`${a} + ${b} = ${w}`,80,'#1e88e5')+`<div style="font-size:30px;font-weight:900">Осыдан қандай мысал шығады?</div>`,o:[ok,...pick(wr,3)],a:ok,oh:NO}});

/* ===== 2. Есептер ===== */
const PR=[[ '🛩️','ұшақ','Ұшу алаңында {a} ұшақ тұрды. Тағы {b} ұшақ келіп қонды. Неше ұшақ болды?','+'],
 ['🚲','велосипед','Тұрақта {a} велосипед тұрды. Балалар {b} велосипедті алып кетті. Неше велосипед қалды?','-'],
 ['🍎','алма','Себетте {a} алма бар еді. Апам тағы {b} алма салды. Себетте неше алма болды?','+'],
 ['🐟','балық','Аквариумда {a} балық бар еді. {b} балықты басқа аквариумға салды. Неше балық қалды?','-'],
 ['📚','кітап','Сөреде {a} кітап тұрды. Тағы {b} кітап қойды. Сөреде неше кітап болды?','+'],
 ['🎈','шар','Балаларда {a} шар болды. {b} шар ұшып кетті. Неше шар қалды?','-'],
 ['🚌','адам','Автобуста {a} адам болды. Аялдамада {b} адам түсті. Автобуста неше адам қалды?','-'],
 ['🌷','гүл','Әлия {a} гүл, Сырым {b} гүл отырғызды. Екеуі неше гүл отырғызды?','+']];
const prob=(lv)=>{const p=PR[rnd(0,PR.length-1)];let a,b,r;const st=lv===1?1:10;if(p[3]==='+'){r=rnd(2,10)*st;a=rnd(1,r/st-1)*st;b=r-a}else{a=rnd(2,10)*st;b=rnd(1,a/st-1)*st;r=a-b}
 return{p,a,b,r,st,txt:p[2].replace('{a}',`<b>${a}</b>`).replace('{b}',`<b>${b}</b>`)}};
GAMES.problem=QZ('📖 Есепті оқы да, шығар',(lv)=>{const P=prob(lv);return{q:`<div style="font-size:90px;line-height:1">${P.p[0]}</div><div style="font-size:36px;font-weight:800;max-width:1150px;line-height:1.35">${P.txt}</div>`,o:opt(P.r,P.st),a:P.r,oh:NO}},{rounds:6});
GAMES.whichop=QZ('🧮 Есеп қай амалмен шығарылады?',(lv)=>{const P=prob(lv);const o=[`${P.a} + ${P.b}`,`${P.a} − ${P.b}`,`${P.b} − ${P.a}`].filter(x=>!(x.includes('−')&&+x.split(' − ')[0]<+x.split(' − ')[1]));
 const ans=P.p[3]==='+'?`${P.a} + ${P.b}`:`${P.a} − ${P.b}`;return{q:`<div style="font-size:36px;font-weight:800;max-width:1150px;line-height:1.35">${P.txt}</div>`,o:[...new Set([ans,...o,`${P.a} + ${P.b}`])],a:ans,oh:NO}},{rounds:6});
GAMES.shortnote=QZ('📝 Қысқаша жазу бойынша шығар',(lv)=>{const add=Math.random()<.5;const st=lv===1?1:10;let a,b,r;if(add){r=rnd(2,10)*st;a=rnd(1,r/st-1)*st;b=r-a}else{a=rnd(2,10)*st;b=rnd(1,a/st-1)*st;r=a-b}
 const inv=lv===3&&Math.random()<.5;const L=add?['Тұрды','Келді','Болды']:['Болды','Кетті','Қалды'];const v=add?[a,b,r]:[a,b,r];const hid=inv?1:2;
 return{q:`<div style="background:#fff;border:4px solid #d6e4f7;border-radius:24px;padding:20px 40px;font-size:44px;font-weight:900;line-height:1.5;text-align:left">${L.map((l,i)=>`${l} — ${i===hid?'<span style="color:#e53935">?</span>':v[i]}`).join('<br>')}</div>`,o:opt(v[hid],st),a:v[hid],oh:NO}},{rounds:6});
GAMES.probrace=RC('Есептерді шығар — алға жүр!',(lv)=>{const add=Math.random()<.5;const st=lv===1?1:10;let a,b,r;if(add){r=rnd(2,10)*st;a=rnd(1,r/st-1)*st;b=r-a}else{a=rnd(2,10)*st;b=rnd(1,a/st-1)*st;r=a-b}
 const e=pick(['🍎','🐟','🎈','🚗','⭐'],1)[0];return{q:`<div style="font-size:30px;font-weight:800;line-height:1.3">${add?`${e} ${a} болды, тағы ${b} келді.<br>Неше болды?`:`${e} ${a} болды, ${b} кетті.<br>Неше қалды?`}</div>`,o:opt(r,st),a:r,oh:NOs}});
GAMES.isproblem=TQ('❓ Қайсысы есеп? (есептің сұрағы болады)',(lv)=>{const P=prob(lv);const no=P.txt.replace(/\s[^.]*\?$/,'.');const st=P.txt.split('. ').slice(0,-1).join('. ')+'.';
 const fake=`${P.p[0]} ${P.p[1][0].toUpperCase()+P.p[1].slice(1)} — әдемі. Ол бізге ұнайды.`;return{q:'<div style="font-size:30px;font-weight:900">Шарты мен сұрағы бар мәтінді таңда</div>',o:[P.txt,st,fake],a:P.txt,oh:v=>`<span style="font-size:24px;font-weight:800;line-height:1.3;display:block;max-width:420px;text-align:left">${v}</span>`}},8);

/* ===== 3. Уақыт: жыл мезгілдері, айлар, апта күндері, минут ===== */
const SEAS=[['Қыс','❄️⛄🛷'],['Көктем','🌷🌱🐦'],['Жаз','☀️🏖️🍉'],['Күз','🍂🍁🌧️']];
const MON=['қаңтар','ақпан','наурыз','сәуір','мамыр','маусым','шілде','тамыз','қыркүйек','қазан','қараша','желтоқсан'];
const DAYS=['дүйсенбі','сейсенбі','сәрсенбі','бейсенбі','жұма','сенбі','жексенбі'];
const seasonOf=m=>m<2||m===11?'Қыс':m<5?'Көктем':m<8?'Жаз':'Күз';
GAMES.seasons=QZ('🍂 Жыл мезгілін тап',(lv)=>{if(lv===1){const s=SEAS[rnd(0,3)];return{q:`<div style="font-size:120px">${s[1]}</div>`,o:SEAS.map(x=>x[0]),a:s[0],oh:NO}}
 const m=rnd(0,11);if(lv===2)return{q:BIG(MON[m][0].toUpperCase()+MON[m].slice(1),90)+'<div class="mut" style="font-size:26px">Бұл ай қай жыл мезгілінде?</div>',o:SEAS.map(x=>x[0]),a:seasonOf(m),oh:NO};
 const s=rnd(0,3),ms=[[11,0,1],[2,3,4],[5,6,7],[8,9,10]][s];return{q:`<div style="font-size:40px;font-weight:900">${SEAS[s][0]} айлары: ${ms.map((x,i)=>i===1?'?':MON[x]).join(', ')}</div>`,o:pick(MON.filter(x=>x!==MON[ms[1]]),3).concat(MON[ms[1]]),a:MON[ms[1]],oh:NOs}});
GAMES.weekdays=QZ('📅 Апта күндері мен айлар',(lv)=>{const L=lv===3&&Math.random()<.5?MON:DAYS;const i=rnd(0,L.length-1);const prev=Math.random()<.5;
 const a=L[(i+(prev?-1:1)+L.length)%L.length];return{q:`<div style="font-size:42px;font-weight:900">${prev?`<b style="color:#e53935">${L[i]}</b> алдында қай ${L===DAYS?'күн':'ай'}?`:`<b style="color:#e53935">${L[i]}</b> кейін қай ${L===DAYS?'күн':'ай'}?`}</div>`,o:[...new Set([a,...pick(L.filter(x=>x!==a&&x!==L[i]),3)])],a,oh:NOs}});
GAMES.minutes=QZ('🕑 Сағат пен минут',(lv)=>{const h=rnd(1,12),m=L3(lv,pick([0,30],1)[0],pick([0,15,30,45],1)[0],rnd(0,11)*5);const o=[...new Set([tm(h,m),tm(h,(m+15)%60),tm(h%12+1,m),tm(h,(m+30)%60)])];
 return{q:clockSvg(h,m,320)+'<div class="mut" style="font-size:22px">1 сағат = 60 минут</div>',o,a:tm(h,m),oh:NO}});
GAMES.clockduel3=DU('Сағат нешені көрсетіп тұр?',(lv)=>{const h=rnd(1,12),m=L3(lv,pick([0,30],1)[0],pick([0,15,30,45],1)[0],rnd(0,11)*5);return{q:clockSvg(h,m,230),o:[...new Set([tm(h,m),tm(h%12+1,m),tm(h,(m+30)%60)])],a:tm(h,m),oh:NOs}});
GAMES.howlong=TQ('⏳ Неше сағат өтті?',(lv)=>{const a=rnd(1,8),d=rnd(1,L3(lv,3,4,5)),m=lv===3?pick([0,30],1)[0]:0;return{q:`<div style="display:flex;gap:40px;align-items:center">${clockSvg(a,m,230)}<div style="font-size:80px">➡</div>${clockSvg(a+d,m,230)}</div>`,o:near(d,1,10).map(v=>v+' сағат'),a:d+' сағат',oh:NO}});

/* ===== 4. Шамалар ===== */
const UN=[['🍉 Қарбыздың салмағы','кг'],['🥔 Картоптың салмағы','кг'],['🥛 Сүттің көлемі','л'],['🪣 Шелектегі су','л'],['✏️ Қарындаштың ұзындығы','см'],['📏 Сызғыштың ұзындығы','см'],
 ['🎬 Мультфильмнің ұзақтығы','минут'],['😴 Түнгі ұйқы','сағат'],['🧃 Шырынның көлемі','л'],['🍎 Алманың салмағы','кг']];
GAMES.units3=QZ('📐 Немен өлшейміз?',(lv)=>{const L=lv===1?UN.slice(0,6):UN;const [t,a]=pick(L,1)[0];const all=lv===1?['кг','л','см']:['кг','л','см','минут','сағат'];
 return{q:`<div style="font-size:46px;font-weight:900">${t}</div>`,o:[...new Set([a,...pick(all.filter(x=>x!==a),3)])],a,oh:NO}});
GAMES.cmpq=QZ('⚖️ Шамаларды салыстыр: >, <, =',(lv)=>{const P=L3(lv,[['1 дм','10 см','='],['1 дм','7 см','>'],['5 см','1 дм','<'],['3 кг','5 кг','<'],['8 л','6 л','>'],['10 см','1 дм','=']],
 [['1 сағат','60 минут','='],['1 сағат','30 минут','>'],['40 минут','1 сағат','<'],['1 дм','12 см','<'],['20 см','1 дм','>'],['60 минут','1 сағат','=']],
 [['1 дм 2 см','12 см','='],['1 дм 5 см','14 см','>'],['18 см','2 дм','<'],['1 сағат','70 минут','<'],['2 дм','20 см','='],['50 минут','1 сағат','<']]);const [a,b,r]=pick(P,1)[0];
 return{q:BIG(`${a} ${SL} ${b}`,72),o:['>','<','='],a:r,oh:optBig}});
GAMES.scale3=QZ('⚖️ Таразы: неше кг?',(lv)=>{const st=lv===1?1:10;const a=rnd(1,L3(lv,5,5,6))*st,b=rnd(1,L3(lv,4,4,4))*st;if(lv===3){const c=rnd(1,(a+b)/st-1)*st;return{q:scaleSvg('📦','📦',0,`${a} кг + ${b} кг`,`${c} кг + ? кг`),o:opt(a+b-c,st).map(v=>v+' кг'),a:(a+b-c)+' кг',oh:NO}}
 return{q:scaleSvg('🎃','🏋️',0,'? кг',`${a} кг + ${b} кг`),o:opt(a+b,st).map(v=>v+' кг'),a:(a+b)+' кг',oh:NO}});
GAMES.unitduel=DU('Немен өлшейміз?',(lv)=>{const [t,a]=pick(lv===1?UN.slice(0,6):UN,1)[0];const all=lv===1?['кг','л','см']:['кг','л','см','минут'];return{q:`<div style="font-size:34px;font-weight:900">${t}</div>`,o:[...new Set([a,...pick(all.filter(x=>x!==a),2)])],a,oh:NOs}});
GAMES.qprob=TQ('📦 Шамалармен есептер',(lv)=>{const st=lv===1?1:10;const T1=[['Бір қапта {a} кг ұн, екіншісінде {b} кг ұн бар. Екеуінде неше кг ұн бар?','кг','+'],['Бөшкеде {a} л су болды. {b} л суды гүлдерге құйды. Неше литр су қалды?','л','-'],
  ['Лента {a} см болды. Одан {b} см кесіп алды. Неше см лента қалды?','см','-'],['Әлия {a} минут оқыды, сосын {b} минут сурет салды. Барлығы неше минут?','минут','+']];const [tx,u,op]=pick(T1,1)[0];
 let a,b,r;if(op==='+'){r=rnd(2,L3(lv,10,9,10))*st;a=rnd(1,r/st-1)*st;b=r-a}else{a=rnd(2,10)*st;b=rnd(1,a/st-1)*st;r=a-b}return{q:`<div style="font-size:36px;font-weight:800;max-width:1100px;line-height:1.35">${tx.replace('{a}',a).replace('{b}',b)}</div>`,o:opt(r,st).map(v=>v+' '+u),a:r+' '+u,oh:NO}});

/* ===== 5. Өрнектер. Теңдік, теңсіздік ===== */
const LET=['a','b','c','x'];
GAMES.letters=QZ('🔤 Әріпті өрнектің мәнін тап',(lv)=>{const L=pick(LET,1)[0],st=lv===1?1:10;const op=lv===1?'+':pick(['+','-'],1)[0];let v,c,r;
 if(op==='+'){v=rnd(1,5)*st;c=rnd(1,5)*st;r=v+c}else{v=rnd(3,10)*st;c=rnd(1,v/st-1)*st;r=v-c}return{q:BIG(`${L} ${SG(op)} ${c}`,90)+`<div style="font-size:40px;font-weight:900">${L} = ${v} болса</div>`,o:opt(r,st),a:r,oh:NO}});
GAMES.cmpexp=QZ('⚖️ Өрнектерді салыстыр',(lv)=>{const st=lv===1?1:10;const e1=ex(10),e2=ex(10);const A=lv===3?`${e1.a*st} ${SG(e1.op)} ${e1.b*st}`:`${e1.a} ${SG(e1.op)} ${e1.b}`;const B=lv===1?String(e2.r):lv===3?`${e2.a*st} ${SG(e2.op)} ${e2.b*st}`:`${e2.a} ${SG(e2.op)} ${e2.b}`;
 return{q:BIG(`${A} ${SL} ${B}`,64),o:['>','<','='],a:cmp(e1.r,e2.r),oh:optBig}});
GAMES.truefalse=QZ('🟢 Дұрыс па, жоқ па?',(lv)=>{const e=ex(10);const sg=pick(['>','<','='],1)[0];const st=lv===3?10:1;let c=rnd(0,10);if(sg==='='&&Math.random()<.5)c=e.r;
 const ok=sg==='>'?e.r>c:sg==='<'?e.r<c:e.r===c;return{q:BIG(`${e.a*st} ${SG(e.op)} ${e.b*st} ${SG(sg)} ${c*st}`,76),o:['✅ Дұрыс','❌ Дұрыс емес'],a:ok?'✅ Дұрыс':'❌ Дұрыс емес',oh:NO}});
GAMES.cmpduel=DU('Салыстыр: >, <, =',(lv)=>{const st=lv===1?1:10;const e1=ex(10),e2=ex(10);return{q:BIG(`${e1.a*st}${SG(e1.op)}${e1.b*st} ◻ ${lv===1?e2.r:e2.a*st+SG(e2.op)+e2.b*st}`,46),o:['>','<','='],a:cmp(e1.r,e2.r),oh:optBig}});
GAMES.maxexp=TQ('🏔️ Қай өрнектің мәні ең үлкен?',(lv)=>{const st=lv===1?1:10;const es=[];const vs=new Set();let g=0;while(es.length<3&&g++<100){const e=ex(10);if(vs.has(e.r))continue;vs.add(e.r);es.push(e)}
 const s=es.map(e=>`${e.a*st} ${SG(e.op)} ${e.b*st}`);const mx=es.reduce((m,e,i)=>e.r>es[m].r?i:m,0);return{q:'<div style="font-size:30px;font-weight:900">Есептеп, ең үлкен мәнді өрнекті таңда</div>',o:s,a:s[mx],oh:NO}});

/* ===== 6. Теңдеу ===== */
const eqGen=(lv)=>{const st=lv===1?1:10;const t=rnd(0,lv===1?1:2);let x,c,r,q;
 if(t===0){x=rnd(1,8)*st;c=rnd(1,(10-x/st))*st;r=x+c;q=Math.random()<.5?`x + ${c} = ${r}`:`${c} + x = ${r}`}
 else if(t===1){x=rnd(2,10)*st;c=rnd(1,x/st-1)*st;r=x-c;q=`x − ${c} = ${r}`}else{const a=rnd(2,10)*st;x=rnd(1,a/st-1)*st;r=a-x;q=`${a} − x = ${r}`}return{q,x,st}};
GAMES.equation=QZ('❎ Теңдеуді шеш: x-ті тап',(lv)=>{const E=eqGen(lv);return{q:BIG(E.q,96),o:opt(E.x,E.st).map(v=>'x = '+v),a:'x = '+E.x,oh:NO}});
GAMES.eqscale=QZ('⚖️ Таразыдағы теңдеу: x неше?',(lv)=>{const st=lv===1?1:10;const x=rnd(1,6)*st,c=rnd(1,4)*st;return{q:scaleSvg('📦','📦',0,`x + ${c} кг`,`${x+c} кг`)+BIG(`x + ${c} = ${x+c}`,50),o:opt(x,st).map(v=>'x = '+v),a:'x = '+x,oh:NO}});
GAMES.eqword=QZ('📖 Есепке сәйкес теңдеуді таңда',(lv)=>{const st=lv===1?1:10;const x=rnd(1,6)*st,c=rnd(1,4)*st,r=x+c;const [e,w]=pick([['🍎','алма'],['🐟','балық'],['📚','кітап'],['🎈','шар']],1)[0];
 const txt=`Себетте бірнеше ${w} бар еді. Тағы ${c} ${w} салды. Сонда ${r} ${w} болды. Басында неше ${w} болған?`;const ok=`x + ${c} = ${r}`;
 return{q:`<div style="font-size:70px">${e}</div><div style="font-size:32px;font-weight:800;max-width:1100px;line-height:1.35">${txt}</div>`,o:[ok,`x − ${c} = ${r}`,`${r} + ${c} = x`],a:ok,oh:NO}},{rounds:6});
GAMES.eqrope=DU('Теңдеуді шеш',(lv)=>{const E=eqGen(lv);return{q:BIG(E.q,64),o:opt(E.x,E.st),a:E.x,oh:NOs}});
GAMES.million3=(box,T,lv)=>MILLION(box,T,[
 k=>{const E=eqGen(k<4?1:2);return{q:`${E.q}<br>x = ?`,o:opt(E.x,E.st),a:E.x}},
 k=>{const [w,a,b]=[50,20,30];return{q:`${a} + ${b} = ${w} болса, ${w} − ${a} = ?`,o:nearS(b,0,100,10),a:b}},
 k=>{const m=rnd(0,11);return{q:`${MON[m]} — қай жыл мезгілі?`,o:SEAS.map(x=>x[0]),a:seasonOf(m)}},
 k=>{const i=rnd(0,6);return{q:`${DAYS[i]} күнінен кейін қай күн?`,o:pick(DAYS.filter(x=>x!==DAYS[(i+1)%7]),3).concat(DAYS[(i+1)%7]),a:DAYS[(i+1)%7]}},
 k=>({q:'1 сағат неше минут?',o:[60,100,30,10],a:60}),
 k=>{const v=rnd(1,5),c=rnd(1,5);return{q:`a + ${c}, a = ${v} болса, мәні?`,o:near(v+c,0,10),a:v+c}},
 k=>{const e1=ex(10),e2=ex(10);return{q:`${e1.a} ${SG(e1.op)} ${e1.b} ◻ ${e2.a} ${SG(e2.op)} ${e2.b}`,o:['>','<','='],a:cmp(e1.r,e2.r),oh:SG}}]);
