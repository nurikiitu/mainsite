/* neuroUstaz · 1-сынып · Математика · 2-тоқсан · 30 ойын (33–64 сабақтар). Көмекшілер: games/common.js */
const SL=`<span class="slot" style="display:inline-grid;width:80px;height:80px;vertical-align:middle">?</span>`;
const exq=(a,op,b,r,hide=3)=>BIG([hide===0?SL:a,SG(op),hide===1?SL:b,'=',hide===3?SL:r].join(' '),84);

/* ===== 1. Қосудың қасиеті, 2 және 3 ===== */
GAMES.swap=QZ('🔄 Қосылғыштардың орнын ауыстыр',(lv)=>{const max=L3(lv,5,10,10);let a=rnd(0,max),b=rnd(0,max-a);if(a===b)b=Math.max(0,b-1);
 if(lv===3){const c=rnd(0,a+b);return{q:BIG(`${a} + ${b} = ${c} + ${SL}`,84),o:near(a+b-c,0,10),a:a+b-c}}
 return{q:BIG(`${a} + ${b} = ${b} + ${SL}`,84),o:near(a,0,10),a}});
GAMES.jump23=QZ('🐸 Бақа 2 немесе 3 секіреді',(lv)=>{const J=lv===1?[2]:lv===2?[2,-2,3]:[2,3,-2,-3];const j=J[rnd(0,J.length-1)];let s;do{s=rnd(0,10)}while(s+j<0||s+j>10);
 const st=900/10.6,x=30+s*st;let sv=nline(10,[],0,900).replace('</svg>',`<text x="${x}" y="88" text-anchor="middle" font-size="64">🐸</text></svg>`);
 return{q:`<div style="font-size:40px;font-weight:900">Бақа <b>${s}</b>-ден <span style="color:${j>0?'#e53935':'#1e63d6'}">${j>0?'+'+j:'−'+(-j)}</span> секірді. Қай санға келді?</div>${sv}`,o:near(s+j,0,10),a:s+j}});
GAMES.domsum=QZ('🎲 Доминодағы нүктелерді қос',(lv)=>{const mx=L3(lv,3,5,6);let a,b;do{a=rnd(0,mx);b=rnd(0,mx)}while(a+b>10||a+b===0);
 return{q:`<div style="transform:scale(1.6);margin:40px">${domino(a,b,90)}</div>`,o:near(a+b,0,10),a:a+b}});
GAMES.race23=RC('2 және 3 санын қосу, азайту',(lv)=>{const n=lv===1?2:lv===2?rnd(2,3):rnd(2,3);const op=lv===1?'+':(Math.random()<.5?'+':'-');let a=op==='+'?rnd(0,10-n):rnd(n,10);const r=op==='+'?a+n:a-n;
 if(lv===3&&Math.random()<.5)return{q:exq(a,op,n,r,0),o:near(a,0,10),a};return{q:exq(a,op,n,r),o:near(r,0,10),a:r}});
GAMES.equal=TQ('🟰 Қай мысалдың жауабы тең?',(lv)=>{const t=rnd(L3(lv,3,5,6),L3(lv,5,10,10));const mk=v=>{if(Math.random()<.5){const a=rnd(0,v);return`${a} + ${v-a}`}const a=rnd(v,10);return`${a} − ${a-v}`};
 const ok=mk(t);const wr=new Set();let g=0;while(wr.size<3&&g++<100){let v=rnd(0,10);if(v===t)continue;const s=mk(v);if(s!==ok)wr.add(s)}
 return{q:`<div style="font-size:40px;font-weight:900">Жауабы <span style="background:#fdd835;border-radius:14px;padding:0 16px">${t}</span> болатын мысалды тап</div>`,o:[ok,...wr],a:ok,oh:NO}});

/* ===== 2. 4…9 санын қосу, азайту. 10-нан азайту ===== */
GAMES.table=(box,T,lv)=>ROUNDS(box,4,(b,k,hd)=>{const ns=L3(lv,[4,5],[6,7],[8,9]);const n=ns[k%2];hd.innerHTML=`📋 <b style="color:#e53935">${n}</b> санын қосу және азайту кестесі`;
 const rows=[],ans=[];const used=new Set();for(let i=0;i<4;i++){let a,op,g=0;do{op=i%2?'-':'+';a=op==='+'?rnd(0,10-n):rnd(n,10)}while(used.has(op+a)&&g++<40);used.add(op+a);
  const r=op==='+'?a+n:a-n;if(lv===3&&i>=2){rows.push([a,op,null,'=',r]);ans.push([n])}else{rows.push([a,op,n,'=',null]);ans.push([r])}}
 K.fill(b,T,{rows,ans,fs:64})},{title:''});
GAMES.from10=QZ('🔟 10-нан азайт',(lv)=>{const x=rnd(1,lv===1?5:9);if(lv===3&&Math.random()<.5)return{q:`${tenFrame(10,x)}<div style="margin-top:14px">${BIG(`10 − ${SL} = ${10-x}`,80)}</div>`,o:near(x,0,10),a:x};
 return{q:`${tenFrame(10,x)}<div style="margin-top:14px">${BIG(`10 − ${x} = ${SL}`,80)}</div>`,o:near(10-x,0,10),a:10-x}});
GAMES.maze=(box,T,lv)=>ROUNDS(box,4,(b,k)=>{const t=uq(()=>rnd(L3(lv,4,5,6),L3(lv,6,9,10)));const tiles=[];const seen=new Set();let g=0;
 while(tiles.length<12&&g++<500){const ok=tiles.filter(x=>x.ok).length<4&&(Math.random()<.4);const v=ok?t:rnd(0,10);if(!ok&&v===t)continue;const e=Math.random()<.5?(()=>{const a=rnd(0,v);return`${a} + ${v-a}`})():(()=>{const a=rnd(v,10);return`${a} − ${a-v}`})();
  if(seen.has(e))continue;seen.add(e);tiles.push({h:`<span style="font-size:40px;font-weight:900">${e}</span>`,ok:v===t})}
 if(!tiles.some(x=>x.ok))tiles[0]={h:`<span style="font-size:40px;font-weight:900">${t} + 0</span>`,ok:true};
 K.pickAll(b,T,{tiles,cols:4,size:230,title:`Жауабы <b style="color:#e53935;font-size:46px">${t}</b> болатын мысалдардың бәрін тап`});b.querySelectorAll('button').forEach(x=>x.style.height='130px')},{title:'🧭 Мысал лабиринті'});
GAMES.rope2=DU('Қосу және азайту: 10 көлемінде',(lv)=>{const e=ex(10,lv===1?'+':'+-',lv===1?3:4);if(lv===3&&Math.random()<.5){const h=rnd(0,1);return{q:exq(e.a,e.op,e.b,e.r,h),o:near(h?e.b:e.a,0,10),a:h?e.b:e.a}}return{q:exq(e.a,e.op,e.b,e.r),o:near(e.r,0,10),a:e.r}});
GAMES.million2=(box,T,lv)=>MILLION(box,T,[
 k=>{const e=ex(10);return{q:`${e.a} ${SG(e.op)} ${e.b} = ?`,o:near(e.r,0,10),a:e.r}},
 k=>{const t=rnd(1,9)*10;return{q:`${t} — неше ондық?`,o:near(t/10,1,10),a:t/10}},
 k=>{const x=rnd(1,9);return{q:`10 − ${x} = ?`,o:near(10-x,0,10),a:10-x}},
 k=>{const n=pick([2,4,6,8,10],1)[0];return{q:`${n} санының жартысы неше?`,o:near(n/2,1,10),a:n/2}},
 k=>{const h=rnd(1,12);return{q:`Сағат нешені көрсетіп тұр?<div style="margin-top:8px">${clockSvg(h,0,200)}</div>`,o:nearS(h,1,12,1).map(v=>v+':00'),a:h+':00'}},
 k=>{const a=rnd(1,4)*10,b=rnd(1,5)*10;return{q:`${a} + ${b} = ?`,o:nearS(a+b,10,100,10),a:a+b}}]);

/* ===== 3. Ондықтар ===== */
GAMES.tens=QZ('🥢 Неше таяқ бар?',(lv)=>{const t=rnd(1,L3(lv,5,10,10));if(lv===3){const o=rnd(0,9);return{q:bundles(t>9?9:t,o,130),o:near((t>9?9:t)*10+o,10,99).map(v=>v),a:(t>9?9:t)*10+o,oh:NO}}
 return{q:bundles(t,0,150)+'<div class="mut" style="font-size:24px">Әр бауда 10 таяқ</div>',o:nearS(t*10,10,100,10),a:t*10,oh:NO}});
GAMES.tenstrain=QZ('🚃 Ондықтар пойызы: жетпейтін санды тап',(lv)=>{const len=5,rev=lv>1&&Math.random()<.5;const s=rev?rnd(5,10):rnd(L3(lv,1,0,0),5);const seq=[...Array(len)].map((_,j)=>(rev?s-j:s+j)*10);const m=rnd(1,len-2);
 const car=v=>`<div style="width:120px;height:90px;border-radius:14px 14px 6px 6px;background:${v==null?'#fff':'#90caf9'};border:4px ${v==null?'dashed #90a4ae':'solid #64b5f6'};display:grid;place-items:center;font-size:40px;font-weight:900">${v==null?'?':v}</div>`;
 return{q:`<div style="display:flex;gap:8px;align-items:center"><span style="font-size:90px">🚂</span>${seq.map((v,j)=>car(j===m?null:v)).join('')}</div>`,o:nearS(seq[m],0,100,10),a:seq[m],oh:NO}});
GAMES.tensadd=QZ('➕ Ондықтарды қос және азайт',(lv)=>{const e=exT(100,lv===1?'+':'+-');if(lv===3&&Math.random()<.5)return{q:exq(e.a,e.op,e.b,e.r,1),o:nearS(e.b,0,100,10),a:e.b,oh:NO};
 return{q:(lv===1?`<div style="display:flex;gap:30px;align-items:center">${bundles(e.a/10,0,110)}<b style="font-size:60px">+</b>${bundles(e.b/10,0,110)}</div>`:'')+exq(e.a,e.op,e.b,e.r),o:nearS(e.r,0,100,10),a:e.r,oh:NO}});
GAMES.tensrace=RC('Ондықтарды қосу және азайту',(lv)=>{const e=exT(L3(lv,50,100,100),lv===1?'+':'+-');if(lv===3&&Math.random()<.5)return{q:exq(e.a,e.op,e.b,e.r,0),o:nearS(e.a,0,100,10),a:e.a,oh:NOs};return{q:exq(e.a,e.op,e.b,e.r),o:nearS(e.r,0,100,10),a:e.r,oh:NOs}});
GAMES.tensflash=TQ('👀 Таяқтарды жылдам сана!',(lv)=>{const t=rnd(1,L3(lv,4,7,9)),o=lv===3?rnd(1,5):0,ms=L3(lv,3000,2200,2000),n=t*10+o;
 return{q:qb=>{qb.innerHTML=bundles(t,o,140);const a=T.alive();setTimeout(()=>{if(!a()||!qb.isConnected)return;qb.innerHTML='<div style="font-size:150px">❓</div>'},ms)},o:o?near(n,10,99):nearS(n,10,100,10),a:n,oh:NO}});

/* ===== 4. Тізбектер. Жартысы ===== */
const PAT=[['🔴','🔵'],['🍎','🍐'],['⭐','🌙'],['🔺','⬛','🟡'],['🐱','🐶','🐭']];
GAMES.pattern=QZ('🔁 Заңдылықты жалғастыр: келесісі қандай?',(lv)=>{if(lv===3&&Math.random()<.6){const st=rnd(1,3),s=rnd(0,4),seq=[...Array(5)].map((_,i)=>s+i*st);return{q:BIG(seq.join(', ')+', ?',72),o:near(s+5*st,0,20),a:s+5*st}}
 const base=pick(PAT.filter(p=>lv===1?p.length===2:true),1)[0];const unit=lv===1?base:(Math.random()<.5&&base.length===2?[base[0],base[0],base[1]]:base);const n=unit.length*2+rnd(0,unit.length-1);const seq=[...Array(n)].map((_,i)=>unit[i%unit.length]);
 return{q:`<div style="display:flex;gap:10px;font-size:70px;line-height:1">${seq.join('')}<span class="slot" style="width:90px;height:90px;font-size:50px">?</span></div>`,o:[...new Set([...base,...PAT.flat().slice(0,2)])].slice(0,4),a:unit[n%unit.length],oh:v=>`<span style="font-size:60px">${v}</span>`}});
GAMES.half=QZ('🍰 Жартысын тап',(lv)=>{const n=pick([2,4,6,8,10],1)[0],e=EM[rnd(0,EM.length-1)];
 if(lv===3&&Math.random()<.5)return{q:BIG(`${SL} санының жартысы — ${n/2}`,72),o:near(n,1,10),a:n};
 return{q:`<div style="display:flex;gap:30px;align-items:center"><div class="grp" style="font-size:54px;width:${lv===1?520:420}px">${e.repeat(n)}</div></div>`+BIG(`${n} санының жартысы — ${SL}`,64),o:near(n/2,1,10),a:n/2}});
GAMES.seqerr=QZ('🕵️ Тізбектегі қате санды тап',(lv)=>{const st=L3(lv,1,rnd(1,2),rnd(2,3)),s=rnd(0,st===1?4:2),len=6;const seq=[...Array(len)].map((_,i)=>s+i*st);const w=rnd(1,len-1);const bad=seq[w]+(Math.random()<.5?1:-1)*(st===1?2:1);seq[w]=bad;
 return{q:BIG(seq.join(', '),76),o:[...new Set(seq)].slice(0,6),a:bad,oh:NO}});
GAMES.seqduel=DU('Тізбекті жалғастыр',(lv)=>{const st=L3(lv,1,2,rnd(2,3))*(lv>1&&Math.random()<.3?-1:1);const s=st>0?rnd(0,4):rnd(12,20);const seq=[...Array(4)].map((_,i)=>s+i*st);const a=s+4*st;return{q:BIG(seq.join(', ')+', ?',58),o:near(a,0,20),a,oh:NOs}});
GAMES.odd2=TQ('🚫 Қайсысы артық?',(lv)=>{const t=rnd(4,10);const mk=v=>{const a=rnd(0,v);return`${a} + ${v-a}`};const set=new Set();let g=0;while(set.size<3&&g++<80)set.add(mk(t));let o;do{o=mk(rnd(2,10))}while(set.has(o)||eval(o)===t);
 return{q:`<div style="font-size:34px;font-weight:900">Үш мысалдың жауабы бірдей, біреуі басқа. Артығын тап!</div>`,o:[...set,o],a:o,oh:NO}});

/* ===== 5. Басқатырғыштар мен ребустар ===== */
const RB=['🍎','🍌','🍓','⭐','🐟','🌸','🧁','🍋'];
GAMES.rebus=QZ('🧩 Ребус: суреттің орнында қандай сан?',(lv)=>{const [x,y,z]=pick(RB,3);
 if(lv===1){const v=rnd(1,5);return{q:BIG(`${x} + ${x} = ${v*2}`,84)+BIG(`${x} = ?`,70),o:near(v,0,10),a:v}}
 if(lv===2){const a=rnd(1,5),b=rnd(1,5);return{q:BIG(`${x} = ${a}`,64)+BIG(`${x} + ${y} = ${a+b}`,76)+BIG(`${y} = ?`,64),o:near(b,0,10),a:b}}
 const a=rnd(1,3),b=rnd(1,3),c=rnd(1,3);return{q:BIG(`${x} + ${x} = ${2*a}`,58)+BIG(`${x} + ${y} = ${a+b}`,58)+BIG(`${y} + ${z} = ${b+c}`,58)+BIG(`${z} = ?`,54),o:near(c,0,10),a:c}});
function triFig(k){const W=420,H=330,A=[210,20],L=[20,310],R=[400,310];let s=`<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}"><polygon points="${A} ${L} ${R}" fill="#e3f2fd" stroke="#1a2a5a" stroke-width="6" stroke-linejoin="round"/>`;
 for(let i=1;i<=k;i++){const x=L[0]+(R[0]-L[0])*i/(k+1);s+=`<line x1="${A[0]}" y1="${A[1]}" x2="${x}" y2="${R[1]}" stroke="#1a2a5a" stroke-width="5"/>`}return s+'</svg>'}
GAMES.tricount=QZ('🔺 Суретте неше үшбұрыш бар?',(lv)=>{const k=rnd(0,L3(lv,1,2,3));const n=(k+1)*(k+2)/2;return{q:triFig(k)+(lv===1?'<div class="mut" style="font-size:22px">Кіші үшбұрыштарды да, үлкенін де сана</div>':''),o:near(n,1,12),a:n}},{rounds:4});
GAMES.balance=QZ('⚖️ Таразыны теңестір',(lv)=>{const mx=L3(lv,5,8,10);const a=rnd(1,mx-1),b=rnd(1,mx-a),c=rnd(1,a+b-1),x=a+b-c;
 return{q:scaleSvg('📦','📦',0,`${a} кг + ${b} кг`,`${c} кг + ? кг`)+'<div class="mut" style="font-size:24px">Оң жаққа неше кг керек?</div>',o:near(x,0,10).map(v=>v+' кг'),a:x+' кг',oh:NO}});
GAMES.rebusduel=DU('Ребус: суреттің орнындағы сан',(lv)=>{const [x,y]=pick(RB,2);if(lv===1){const v=rnd(1,5);return{q:BIG(`${x}+${x}=${2*v}`,64)+BIG(`${x}=?`,56),o:near(v,0,10),a:v}}
 const a=rnd(1,5),b=rnd(1,5);return{q:BIG(`${x}=${a}`,50)+BIG(`${x}+${y}=${a+b}`,58)+BIG(`${y}=?`,50),o:near(b,0,10),a:b}});
const RID2=[['Ағашта 3 торғай отырды. Тағы 2 торғай ұшып келді. Ағашта неше торғай болды?',5],['Себетте 6 алма бар еді. 2 алманы жедік. Неше алма қалды?',4],
 ['Айгүлде 4 қарындаш, Асанда 3 қарындаш бар. Екеуінде неше қарындаш бар?',7],['Аулада 5 бала ойнап жүр еді. 1 бала үйге кетті. Неше бала қалды?',4],
 ['Көлде 2 үйрек жүзіп жүр. Тағы 4 үйрек келді. Барлығы неше үйрек?',6],['Тәрелкеде 8 бауырсақ болды. 3 бауырсақ жеді. Неше бауырсақ қалды?',5],
 ['Бір қолда 5 саусақ бар. Екі қолда неше саусақ бар?',10],['Үш ағайынды. Әрқайсысының бір апасы бар. Апасы бір. Барлығы неше бала?',4],
 ['Сағат 2-де сабақ бітті. 1 сағаттан кейін үйге келдім. Сағат неше болды?',3],['Шеңберде 9 бала тұрды. 4 бала отырды. Неше бала тұр?',5],
 ['Пойызда 7 вагон бар. Тағы 3 вагон тіркеді. Неше вагон болды?',10],['Құмырада 10 кәмпит болды. 6 кәмпит алынды. Неше кәмпит қалды?',4]];
GAMES.riddles2=TQ('🧠 Ойлан, тап!',(lv,k)=>{const [q,a]=RID2[(k*5+rnd(0,11))%RID2.length];return{q:`<div style="font-size:${lv===3?34:38}px;font-weight:800;max-width:1100px;line-height:1.35">${q}</div>`,o:near(a,0,10),a}});

/* ===== 6. Уақыт. Өлшеу ===== */
GAMES.clockread=QZ('🕐 Сағат нешені көрсетіп тұр?',(lv)=>{const h=rnd(1,12),m=lv===3&&Math.random()<.6?30:0;const o=[...new Set([tm(h,m),tm(h%12+1,m),tm(h,m?0:30),tm((h+10)%12+1,m)])];
 return{q:clockSvg(h,m,320),o:lv===1?nearS(h,1,12,1).map(v=>tm(v)):o,a:tm(h,m),oh:NO}});
GAMES.clockset=(box,T,lv)=>ROUNDS(box,5,(b,k,hd)=>{const [th,tmn]=uq(()=>[rnd(1,12),lv===3?pick([0,30],1)[0]:0]);let h=rnd(1,12),m=0;hd.innerHTML=`🕐 Сағатты <b style="color:#e53935;font-size:46px">${tm(th,tmn)}</b> етіп қой`;
 b.style.justifyContent='center';b.style.alignItems='center';const cw=el('div','');const side=el('div','side');b.append(cw,side);
 const draw=()=>cw.innerHTML=clockSvg(h,m,380);draw();const mkb=(t,f)=>{const x=el('button','btn alt',t);x.style.margin='6px';x.onclick=()=>{f();beep('tap');draw()};return x};
 const r1=el('div','');r1.append(el('div','big','Сағат тілі (қысқа, қызыл)'),mkb('◀',()=>h=h===1?12:h-1),mkb('▶',()=>h=h===12?1:h+1));side.append(r1);
 if(lv===3){const r2=el('div','');r2.append(el('div','big','Минут тілі (ұзын)'),mkb('00 / 30',()=>m=m?0:30));side.append(r2)}
 const chk=el('button','btn','✅ Тексеру');chk.style.marginTop='20px';side.append(chk);chk.onclick=()=>{if(h===th&&m===tmn){T.ok(chk);chk.disabled=true;T.done()}else T.bad(chk)};
 T.reveal=()=>{h=th;m=tmn;draw()}},{title:''});
function polyFig(sides){const n=sides.length;let pts;if(n===3)pts=[[210,30],[40,300],[380,300]];else if(n===4)pts=[[60,60],[380,60],[380,280],[60,280]];
 const P=pts.map(p=>p.join(',')).join(' ');let s=`<svg width="440" height="340" viewBox="0 0 440 340"><polygon points="${P}" fill="#fff3e0" stroke="#ef6c00" stroke-width="7" stroke-linejoin="round"/>`;
 pts.forEach((p,i)=>{const q=pts[(i+1)%n],mx=(p[0]+q[0])/2,my=(p[1]+q[1])/2,cx=pts.reduce((a,b)=>a+b[0],0)/n,cy=pts.reduce((a,b)=>a+b[1],0)/n;const dx=mx-cx,dy=my-cy,d=Math.hypot(dx,dy)||1;
  s+=`<text x="${mx+dx/d*(Math.abs(dx)>Math.abs(dy)?62:34)}" y="${my+dy/d*(Math.abs(dx)>Math.abs(dy)?62:34)+10}" text-anchor="middle" font-size="30" font-weight="900" font-family="Nunito" fill="#1a2a5a">${sides[i]} см</text>`});return s+'</svg>'}
GAMES.measure2=QZ('📏 Фигураның барлық қабырғаларының ұзындығы',(lv)=>{let sides;if(lv===1){let a,b,c;do{a=rnd(1,4);b=rnd(1,4);c=rnd(1,4)}while(a+b+c>10);sides=[a,b,c]}
 else if(lv===2){const a=rnd(1,3),b=rnd(1,2);sides=[a,b,a,b]}else{const a=rnd(2,5),b=rnd(1,4);sides=[a,b,a,b]}const s=sides.reduce((x,y)=>x+y,0);
 return{q:polyFig(sides)+'<div class="mut" style="font-size:24px">Барлық қабырғаларын қос</div>',o:near(s,3,20).map(v=>v+' см'),a:s+' см',oh:NO}});
GAMES.clockduel=DU('Сағат нешені көрсетіп тұр?',(lv)=>{const h=rnd(1,12),m=lv===3&&Math.random()<.5?30:0;return{q:clockSvg(h,m,230),o:[...new Set([tm(h,m),tm(h%12+1,m),tm((h+10)%12+1,m)])],a:tm(h,m),oh:NOs}});
GAMES.earlier=TQ('⏰ Қай сағат ерте? (таңертеңгі уақыт)',(lv)=>{let a=rnd(6,11),b=rnd(6,11);while(b===a)b=rnd(6,11);const ma=lv===3?pick([0,30],1)[0]:0,mb=lv===3?pick([0,30],1)[0]:0;
 return{q:`<div style="display:flex;gap:80px"><div style="text-align:center">${clockSvg(a,ma,240)}<div class="big">А</div></div><div style="text-align:center">${clockSvg(b,mb,240)}<div class="big">Ә</div></div></div>`,o:['А','Ә'],a:a*60+ma<b*60+mb?'А':'Ә',oh:v=>`<span style="font-size:48px;padding:0 24px">${v} сағат</span>`}});
