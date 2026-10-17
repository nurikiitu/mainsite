/* neuroUstaz · 2-сынып · Математика (Оспанов т.б., Атамұра 2022, 1-бөлім) · 2-тоқсан · 30 ойын (37–64-сабақтар). Көмекшілер: games/common.js */
const Q2S=`<span class="slot" style="display:inline-grid;width:96px;height:84px;vertical-align:middle">?</span>`;
const Q2N=(v,lo=0,hi=100,n=4)=>{const s=new Set([v]);const c=[v+1,v-1,v+10,v-10,v+2,v-2,v+9,v-9,v+11,v-11];shuffle(c).forEach(x=>{if(s.size<n&&x>=lo&&x<=hi)s.add(x)});let g=0;while(s.size<n&&g++<200){const x=v+rnd(-15,15);if(x>=lo&&x<=hi)s.add(x)}return shuffle([...s])};
const Q2E=(t,fs=84)=>BIG(t,fs);
const AS=lv=>{const op=Math.random()<.5?'+':'-';let a,b;if(op==='+'){do{a=rnd(11,89);b=rnd(11,99-a)}while(lv>1?(a%10+b%10<10):(a%10+b%10>=10));return{a,b,op,r:a+b}}
  do{a=rnd(21,99);b=rnd(11,a-1)}while(lv>1?(a%10>=b%10):(a%10<b%10));return{a,b,op,r:a-b}};
/* бағанмен жазу */
const COL=(a,b,op,r)=>{const c=x=>String(x).padStart(2,' ').split('').map(d=>`<span style="display:inline-block;width:64px;text-align:center">${d===' '?'&nbsp;':d}</span>`).join('');
  return `<div style="display:inline-block;font-size:78px;font-weight:900;font-family:monospace;line-height:1.05;text-align:right;background:#fff;border:4px solid #d6e4f7;border-radius:20px;padding:10px 30px;color:#1a2a5a">
  <div><span style="display:inline-block;width:56px;color:#e53935">${op==='+'?'+':'−'}</span>${c(a)}</div><div><span style="display:inline-block;width:56px"></span>${c(b)}</div><div style="border-top:6px solid #1a2a5a;margin-top:4px">${r==null?'<span class="slot" style="display:inline-grid;width:140px;height:76px;font-size:50px">?</span>':`<span style="display:inline-block;width:56px"></span>${c(r)}`}</div></div>`};
const ROM=n=>{const R=[[10,'X'],[9,'IX'],[5,'V'],[4,'IV'],[1,'I']];let s='';for(const [v,t] of R)while(n>=v){s+=t;n-=v}return s};
const ROMN=n=>{const R=[[20,'XX'],[19,'XIX'],[10,'X'],[9,'IX'],[5,'V'],[4,'IV'],[1,'I']];let s='',m=n;while(m>0){for(const [v,t] of R)if(m>=v){s+=t;m-=v;break}}return s};
const fmtT=(h,m)=>h+':'+String(m).padStart(2,'0');

/* ===== 1. Жазбаша қосу және азайту (37–39) ===== */
GAMES.m2col=QZ('✍️ Бағанмен қосу, азайту',lv=>{const e=AS(lv===1?1:2);return{q:COL(e.a,e.b,e.op),o:Q2N(e.r,0,100),a:e.r,oh:NO}});
GAMES.m2colm=QZ('🔍 Жетпейтін цифрды тап',lv=>{const e=AS(lv===1?1:2);const rs=String(e.r).padStart(2,'0');const i=lv===3?rnd(0,1):1;const d=+rs[i];
  const shown=rs.split('').map((x,j)=>j===i?'?':x).join('');return{q:`<div style="display:flex;gap:30px;align-items:center">${COL(e.a,e.b,e.op,shown)}</div><div class="mut" style="font-size:24px">Жауаптағы «?» орнында қай цифр тұр?</div>`,o:near(d,0,9),a:d,oh:NO}});
GAMES.m2carry=QZ('🔼 Разрядтан аттау бар ма?',lv=>{const op=Math.random()<.5?'+':'-';let a,b;if(op==='+'){a=rnd(11,79);b=rnd(11,99-a)}else{a=rnd(30,99);b=rnd(11,a-1)}const yes=op==='+'?(a%10+b%10>=10):(a%10<b%10);
  return{q:Q2E(`${a} ${SG(op)} ${b}`,96)+`<div class="mut" style="font-size:26px">${op==='+'?'Бірліктерді қосқанда 10-нан асып кете ме?':'Бірліктерден азайтуға жете ме, ондықтан алу керек пе?'}</div>`,o:['Иә, аттаймыз','Жоқ, аттамаймыз'],a:yes?'Иә, аттаймыз':'Жоқ, аттамаймыз',oh:NOs}});
GAMES.m2cold=DU('Бағанмен есепте',lv=>{const e=AS(lv===1?1:2);return{q:Q2E(`${e.a} ${SG(e.op)} ${e.b}`,60),o:Q2N(e.r,0,100,L3(lv,3,4,4)),a:e.r}});
GAMES.m2colt=TQ('✍️ Тақтада бағанмен шығар',lv=>{const e=AS(2);return{q:COL(e.a,e.b,e.op),o:Q2N(e.r,0,100),a:e.r,oh:NO}});

/* ===== 2. Жүздік, сандар тізбегі, тиімді тәсілдер (40–42) ===== */
GAMES.m2hund=QZ('💯 Жүздік: 1 жүз = 10 ондық',lv=>{const T=[()=>({q:'1 жүздік = ? ондық',o:[10,100,1,20],a:10}),()=>({q:'10 ондық = ?',o:[100,10,1000,20],a:100}),()=>{const n=rnd(1,9)*10;return{q:`${n} + ? = 100`,o:near(100-n,0,100).map(x=>x),a:100-n}},
   ()=>{const n=rnd(1,9)*10;return{q:`100 − ${n} = ?`,o:Q2N(100-n,0,100),a:100-n}},()=>{const n=rnd(51,99);return{q:`${n} + ? = 100`,o:Q2N(100-n,0,100),a:100-n}},()=>{const a=rnd(1,9)*10,b=rnd(1,(100-a)/10)*10;return{q:`${a} + ${b} = ?`,o:Q2N(a+b,0,100),a:a+b}}];
  const t=T[rnd(0,lv===1?1:lv===2?3:5)]();return{q:Q2E(t.q.replace('?',Q2S),86),o:t.o,a:t.a,oh:NO}});
GAMES.m2seq=QZ('🔢 Сандар тізбегі',lv=>{const st=L3(lv,[2,5,10][rnd(0,2)],[3,4,5,10][rnd(0,3)],[6,7,8,9,11][rnd(0,4)])*(lv===3&&Math.random()<.4?-1:1);let s=st>0?rnd(0,30):rnd(60,99);const seq=[0,1,2,3,4].map(i=>s+st*i);if(seq.some(x=>x<0||x>100))return{q:Q2E('10, 20, 30, ?, 50',80),o:[40,35,45,60],a:40,oh:NO};
  const i=rnd(2,4);return{q:Q2E(seq.map((x,j)=>j===i?'?':x).join(', '),76)+`<div class="mut" style="font-size:24px">Заңдылықты тап</div>`,o:Q2N(seq[i],0,100),a:seq[i],oh:NO}});
GAMES.m2rule=QZ('🧩 Тізбектің ережесі қандай?',lv=>{const st=[2,3,5,10][rnd(0,lv===1?1:3)],dn=lv>1&&Math.random()<.5,s=dn?rnd(60,90):rnd(1,30);const seq=[0,1,2,3].map(i=>dn?s-st*i:s+st*i);const a=(dn?'−':'+')+' '+st;
  const o=[...new Set([a,(dn?'+':'−')+' '+st,(dn?'−':'+')+' '+(st+1),(dn?'−':'+')+' '+(st===2?3:st-1)])];return{q:Q2E(seq.join(', ')+', …',76)+`<div class="mut" style="font-size:24px">Әр сан қалай өзгереді?</div>`,o,a,oh:optBig}});
GAMES.m2smart=DU('Ыңғайлы тәсілмен қос',lv=>{let a,b,c;do{a=rnd(11,49);c=10-a%10+rnd(0,2)*10;b=rnd(2,L3(lv,9,20,30))}while(a+b+c>100);return{q:Q2E(`${a} + ${b} + ${c}`,56),o:Q2N(a+b+c,0,100,L3(lv,3,4,4)),a:a+b+c}});
GAMES.m2hun=(box,T,lv)=>GM.memory({title:'💯 100-ге дейін толықтыр: жұбын тап!',pairs:()=>{const s=new Set(),P=[];let g=0;while(P.length<L3(lv,4,6,8)&&g++<300){const a=lv===1?rnd(1,9)*10:rnd(11,89);if(s.has(a)||s.has(100-a)||a===50)continue;s.add(a);P.push([`<div style="font-size:52px;font-weight:900">${a}</div>`,`<div style="font-size:52px;font-weight:900;color:#e53935">${100-a}</div>`])}return P}}).build(box,T);

/* ===== 3. Құрама есептер (44–48) ===== */
const CP=[()=>{const a=rnd(10,30),b=rnd(5,20),c=rnd(5,a+b-5);return{q:`Себетте ${a} алма болды. Тағы ${b} алма салды. Сосын ${c} алманы алып шықты. Себетте неше алма қалды?`,a:a+b-c,s:`${a} + ${b} − ${c}`}},
 ()=>{const a=rnd(10,40),b=rnd(3,15);return{q:`Бірінші сөреде ${a} кітап, екіншісінде одан ${b} кітап артық. Екі сөреде барлығы неше кітап?`,a:a+a+b,s:`${a} + (${a} + ${b})`}},
 ()=>{const a=rnd(20,45),b=rnd(3,15);return{q:`Асанда ${a} марка, Бекте одан ${b} марка кем. Екеуінде барлығы неше марка?`,a:a+a-b,s:`${a} + (${a} − ${b})`}},
 ()=>{const a=rnd(30,60),b=rnd(5,20),c=rnd(5,20);return{q:`Автобуста ${a} жолаушы болды. Бірінші аялдамада ${b} адам түсті, екіншісінде ${c} адам түсті. Неше жолаушы қалды?`,a:a-b-c,s:`${a} − ${b} − ${c}`}},
 ()=>{const a=rnd(20,40),b=rnd(10,30),c=rnd(10,a+b-10);return{q:`Бақшадан ${a} кг қияр және ${b} кг қызанақ жинады. ${c} кг-ын сатты. Неше кг көкөніс қалды?`,a:a+b-c,s:`${a} + ${b} − ${c}`}}];
GAMES.m2comp=QZ('📝 Құрама есеп',lv=>{const p=CP[rnd(0,lv===1?1:4)]();return{q:`<div style="font-size:36px;font-weight:800;max-width:1150px;line-height:1.35">${p.q}</div>`,o:Q2N(p.a,0,100),a:p.a,oh:NO}});
GAMES.m2expr=QZ('🔣 Есептің өрнегін тап',lv=>{const p=CP[rnd(0,4)]();const w=new Set([p.s]);const nums=p.s.match(/\d+/g);w.add(`${nums[0]} + ${nums[1]}`);w.add(p.s.includes('−')?p.s.replace(/−/g,'+'):p.s.replace(/\+/,'−'));if(nums[2])w.add(`${nums[1]} + ${nums[2]}`);
  return{q:`<div style="font-size:32px;font-weight:800;max-width:1150px;line-height:1.35">${p.q}</div><div class="mut" style="font-size:24px">Қай өрнекпен шығарылады?</div>`,o:[...w].slice(0,L3(lv,2,3,4)),a:p.s,oh:NOs}});
GAMES.m2steps=QZ('🪜 Екі қадамды есеп',lv=>{const a=rnd(10,30),b=rnd(3,12);const st=rnd(0,1);return st?{q:`<div style="font-size:34px;font-weight:800;max-width:1100px">Бірінші қорапта ${a} қарындаш, екіншісінде одан ${b} артық.<br><b>1-қадам:</b> екінші қорапта неше қарындаш?</div>`,o:Q2N(a+b,0,100),a:a+b,oh:NO}
  :{q:`<div style="font-size:34px;font-weight:800;max-width:1100px">Бірінші қорапта ${a} қарындаш, екіншісінде ${a+b}.<br><b>2-қадам:</b> екі қорапта барлығы неше қарындаш?</div>`,o:Q2N(a+a+b,0,100),a:a+a+b,oh:NO}});
GAMES.m2compd=DU('Құрама есеп жарысы',lv=>{const p=CP[rnd(0,4)]();return{q:`<div style="font-size:21px;font-weight:800;line-height:1.3">${p.q}</div>`,o:Q2N(p.a,0,100,L3(lv,3,4,4)),a:p.a}});
GAMES.m2compt=TQ('📝 Топпен есеп шығарамыз',lv=>{const p=CP[rnd(0,4)]();return{q:`<div style="font-size:34px;font-weight:800;max-width:1150px;line-height:1.35">${p.q}</div>`,o:Q2N(p.a,0,100),a:p.a,oh:NO}});

/* ===== 4. Рим цифрлары (50) ===== */
GAMES.m2rom=QZ('🏛️ Рим цифрлары',(lv,k)=>{const n=rnd(1,L3(lv,10,15,20));if(k%2)return{q:Q2E(ROMN(n),120)+`<div class="mut" style="font-size:24px">Бұл қай сан?</div>`,o:near(n,1,20),a:n,oh:NO};
  const o=[...new Set([n,n+1,n-1,n+5].filter(x=>x>=1&&x<=20))].slice(0,4).map(ROMN);return{q:Q2E(n,120)+`<div class="mut" style="font-size:24px">Рим цифрымен қалай жазылады?</div>`,o,a:ROMN(n),oh:optBig}});
GAMES.m2romd=RC('Рим цифрын оқы',lv=>{const n=rnd(1,L3(lv,10,15,20));return{q:Q2E(ROMN(n),70),o:near(n,1,20,L3(lv,3,4,4)),a:n}});
GAMES.m2romc=TQ('🏛️ Рим сандарын салыстыр',lv=>{const a=rnd(1,L3(lv,10,15,20));let b=rnd(1,L3(lv,10,15,20));if(Math.random()<.15)b=a;return{q:Q2E(`${ROMN(a)} ◻ ${ROMN(b)}`,96),o:['>','<','='],a:cmp(a,b),oh:optBig}});
GAMES.m2romp=(box,T,lv)=>GM.memory({title:'🏛️ Рим цифры мен санды жұпта!',pairs:()=>pick([...Array(L3(lv,10,15,20))].map((_,i)=>i+1),L3(lv,4,6,8)).map(n=>[`<div style="font-size:52px;font-weight:900;font-family:serif">${ROMN(n)}</div>`,`<div style="font-size:52px;font-weight:900;color:#1e63d6">${n}</div>`])}).build(box,T);

/* ===== 5. Уақыт, сағат, шамаларды түрлендіру (51–54) ===== */
GAMES.m2clock=QZ('🕐 Сағат нешені көрсетіп тұр?',lv=>{const h=rnd(1,12),m=lv===1?[0,30][rnd(0,1)]:lv===2?[0,15,30,45][rnd(0,3)]:rnd(0,11)*5;const a=fmtT(h,m);const o=new Set([a]);[fmtT(h%12+1,m),fmtT(h,(m+30)%60),fmtT(m/5||12,h*5%60),fmtT(h===1?12:h-1,m)].forEach(v=>o.size<4&&o.add(v));
  return{q:clockSvg(h,m,300),o:[...o],a,oh:optBig}});
GAMES.m2time=QZ('⏰ Уақыттың өлшем бірліктері',lv=>{const T=[{q:'1 сағат = ? минут',o:['60 минут','100 минут','10 минут','30 минут'],a:'60 минут'},{q:'1 тәулік = ? сағат',o:['24 сағат','12 сағат','60 сағат','10 сағат'],a:'24 сағат'},{q:'1 апта = ? тәулік',o:['7 тәулік','5 тәулік','10 тәулік','30 тәулік'],a:'7 тәулік'},
   {q:'1 минут = ? секунд',o:['60 секунд','100 секунд','10 секунд','30 секунд'],a:'60 секунд'},{q:'Жарты сағат = ? минут',o:['30 минут','50 минут','15 минут','60 минут'],a:'30 минут'},{q:'1 жыл = ? ай',o:['12 ай','10 ай','7 ай','24 ай'],a:'12 ай'},
   {q:'2 сағат = ? минут',o:['120 минут','100 минут','60 минут','20 минут'],a:'120 минут'},{q:'Ширек сағат = ? минут',o:['15 минут','25 минут','30 минут','45 минут'],a:'15 минут'}];
  const t=T[rnd(0,lv===1?2:lv===2?5:7)];return{q:Q2E(t.q.replace('?',Q2S),74),o:t.o,a:t.a,oh:NOs}});
GAMES.m2after=QZ('⏩ Неше сағаттан кейін?',lv=>{const h=rnd(1,10),m=lv===1?0:[0,30][rnd(0,1)],d=rnd(1,L3(lv,2,3,4));const r=fmtT((h+d-1)%12+1,m);const o=new Set([r]);[fmtT((h+d)%12+1,m),fmtT(h,m),fmtT((h+d-2+12)%12+1,m)].forEach(v=>o.add(v));
  return{q:`<div style="display:flex;align-items:center;gap:30px">${clockSvg(h,m,240)}<div style="font-size:44px;font-weight:900">+ ${d} сағ = ?</div></div>`,o:[...o].slice(0,4),a:r,oh:optBig}});
GAMES.m2conv=QZ('🔄 Шамаларды түрлендір және салыстыр',lv=>{const T=[()=>{const n=rnd(2,9);return{q:`${n} дм ◻ ${n*10} см`,o:['>','<','='],a:'='}},()=>{const n=rnd(2,9),c=n*10+rnd(-9,9);return{q:`${n} дм ◻ ${c} см`,o:['>','<','='],a:cmp(n*10,c)}},
   ()=>{const h=rnd(1,2),m=h*60+rnd(-20,20);return{q:`${h} сағ ◻ ${m} мин`,o:['>','<','='],a:cmp(h*60,m)}},()=>{const c=rnd(1,3),k=c*100+rnd(-50,50);return{q:`${c} ц ◻ ${k} кг`,o:['>','<','='],a:cmp(c*100,k)}},
   ()=>{const m=rnd(1,5),d=m*10+rnd(-5,5);return{q:`${m} м ◻ ${d} дм`,o:['>','<','='],a:cmp(m*10,d)}}];const t=T[rnd(0,lv===1?1:4)]();return{q:Q2E(t.q,84),o:t.o,a:t.a,oh:optBig}});
GAMES.m2qadd=DU('Шамаларды қос, азайт',lv=>{const T=[()=>{const a=rnd(10,50),b=rnd(5,40);return{q:`${a} см + ${b} см`,a:a+b,u:'см'}},()=>{const a=rnd(30,90),b=rnd(5,25);return{q:`${a} кг − ${b} кг`,a:a-b,u:'кг'}},
   ()=>{const a=rnd(10,40),b=rnd(10,40);return{q:`${a} мин + ${b} мин`,a:a+b,u:'мин'}},()=>{const a=rnd(40,90),b=rnd(10,30);return{q:`${a} л − ${b} л`,a:a-b,u:'л'}}];const t=T[rnd(0,3)]();return{q:Q2E(t.q,56),o:Q2N(t.a,0,100,L3(lv,3,4,4)).map(x=>x+' '+t.u),a:t.a+' '+t.u}});

/* ===== 6. Жиындар, ∈ ∉, бірігу, қиылысу, ақиқат/жалған, комбинация (56–61) ===== */
const SETS=[['Жемістер',['🍎','🍐','🍌','🍇','🍊','🍒'],['🥕','🥒','🍅','🥔','🌽']],['Жануарлар',['🐶','🐱','🐴','🐮','🐑','🐰'],['🌳','🌷','🍄','🌵']],['Көліктер',['🚗','🚌','🚲','🚂','✈️','🚢'],['🏠','📚','⚽','🎈']],
  ['Жұп сандар',['2','4','6','8','10','12','14'],['1','3','5','7','9','11']],['Тақ сандар',['1','3','5','7','9','11'],['2','4','6','8','10','12']],['Екі таңбалы сандар',['10','25','47','63','88','99'],['3','7','5','9','100']]];
GAMES.m2in=QZ('∈ Жиынға тиісті ме?',lv=>{const [nm,yes,no]=SETS[rnd(0,lv===1?2:5)];const inn=Math.random()<.5;const x=inn?pick(yes,1)[0]:pick(no,1)[0];
  return{q:`<div style="font-size:30px;font-weight:900">A — ${nm.toLowerCase()} жиыны</div><div style="font-size:76px;margin:8px">${x}</div><div class="mut" style="font-size:24px">${x} ◻ A</div>`,o:['∈','∉'],a:inn?'∈':'∉',oh:optBig}});
GAMES.m2odd=QZ('🧺 Жиынға жатпайтынын тап',lv=>{const [nm,yes,no]=SETS[rnd(0,lv===1?2:5)];const it=pick(yes,L3(lv,3,4,5)),bad=pick(no,1)[0];const all=shuffle([...it,bad]);return{q:`<div style="font-size:30px;font-weight:900">${nm} жиыны</div><div style="font-size:64px;letter-spacing:10px">{ ${all.join(', ')} }</div>`,o:all,a:bad,oh:v=>`<span style="font-size:52px;padding:4px 12px">${v}</span>`}});
GAMES.m2venn=QZ('⭕ Жиындардың бірігуі мен қиылысуы',lv=>{const U=shuffle([1,2,3,4,5,6,7,8,9]);const A=U.slice(0,4).sort((a,b)=>a-b),B=U.slice(2,7).sort((a,b)=>a-b);const I=A.filter(x=>B.includes(x)).sort((a,b)=>a-b),Un=[...new Set([...A,...B])].sort((a,b)=>a-b);
  const want=lv===1?'∩':Math.random()<.5?'∩':'∪';const f=s=>'{'+s.join(', ')+'}';const ans=want==='∩'?f(I):f(Un);const o=[...new Set([ans,f(I),f(Un),f(A),f(B)])].slice(0,L3(lv,3,4,4));
  return{q:`<div style="font-size:44px;font-weight:900">A = ${f(A)}<br>B = ${f(B)}</div><div style="font-size:40px;font-weight:900;color:#e53935;margin-top:6px">A ${want} B = ?</div><div class="mut" style="font-size:22px">${want==='∩'?'Қиылысу — екеуінде де бар элементтер':'Бірігу — екеуіндегі барлық элементтер'}</div>`,o,a:ans,oh:NOs}});
const TF=[['Кез келген екі таңбалы сан 9-дан үлкен.',1],['50 саны 49-дан кіші.',0],['1 сағат = 60 минут.',1],['1 дм = 100 см.',0],['10 ондық = 1 жүздік.',1],['XII — он екі.',1],['Аптада 5 күн бар.',0],['37 санында 3 ондық бар.',1],['45 + 5 = 55',0],['Барлық жемістер — көкөніс.',0],['100 − 1 = 99',1],['20 + 30 = 50',1],['V саны — бес.',1],['1 ц = 100 кг.',1],['Ең кіші екі таңбалы сан — 11.',0],['Ең үлкен екі таңбалы сан — 99.',1]];
GAMES.m2tf=DU('Ақиқат па, жалған ба?',lv=>{const [t,v]=TF[rnd(0,TF.length-1)];return{q:`<div style="font-size:26px;font-weight:800">${t}</div>`,o:['Ақиқат','Жалған'],a:v?'Ақиқат':'Жалған'}});
GAMES.m2comb=TQ('👕 Үш-үштен комбинациялар',lv=>{const T=[{q:'3 түрлі көйлек және 2 түрлі шалбар бар. Неше түрлі киінуге болады?',a:6},{q:'2 түрлі балмұздақ және 3 түрлі шырын бар. Біреуден таңдасақ, неше түрлі жұп шығады?',a:6},
   {q:'1, 2, 3 цифрларынан (қайталамай) неше екі таңбалы сан құруға болады?',a:6},{q:'Үш бала (Әлі, Бек, Сая) қатарға неше түрлі тұра алады?',a:6},{q:'2 түрлі нан және 2 түрлі ірімшік бар. Неше түрлі бутерброд жасауға болады?',a:4},{q:'3 түрлі гүл және 3 түрлі құмыра бар. Неше түрлі жұп шығады?',a:9}];
  const t=T[rnd(0,lv===1?1:5)];return{q:`<div style="font-size:36px;font-weight:800;max-width:1100px;line-height:1.35">${t.q}</div>`,o:near(t.a,2,12),a:t.a,oh:NO}});
GAMES.m2mil=(box,T,lv)=>MILLION(box,T,[k=>{const e=AS(k<4?1:2);return{q:`${e.a} ${SG(e.op)} ${e.b} = ?`,o:Q2N(e.r,0,100),a:e.r}},k=>{const n=rnd(1,20);return{q:`${ROMN(n)} — қай сан?`,o:near(n,1,20),a:n}},
  k=>{const [t,v]=TF[rnd(0,TF.length-1)];return{q:t,o:['Ақиқат','Жалған'],a:v?'Ақиқат':'Жалған'}},k=>{const p=CP[rnd(0,4)]();return{q:p.q,o:Q2N(p.a,0,100),a:p.a}},k=>({q:'1 сағат неше минут?',o:[60,100,30,24],a:60})]);
