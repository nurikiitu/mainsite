/* neuroUstaz · 1-сынып · Математика · 4-тоқсан · 30 ойын (101–132 сабақтар). Көмекшілер: games/common.js */
const SL=`<span class="slot" style="display:inline-grid;width:80px;height:80px;vertical-align:middle">?</span>`;
const exq=(a,op,b,r,hide=3)=>BIG([hide===0?SL:a,SG(op),hide===1?SL:b,'=',hide===3?SL:r].join(' '),84);
const o20=v=>near(v,0,20);

/* ===== 1. 11-ден 20-ға дейінгі сандар ===== */
GAMES.count20=QZ('🔢 Неше? 11-ден 20-ға дейін санайық',(lv)=>{const n=rnd(11,20),o=n-10;
 if(lv===1)return{q:`<div style="display:flex;gap:20px">${tenFrame(10,0,50)}${tenFrame(o,0,50)}</div>`,o:o20(n),a:n,oh:NO};
 if(lv===2)return{q:bundles(1,o,150),o:o20(n),a:n,oh:NO};const e=EM[rnd(0,EM.length-1)];return{q:scatter(e,n,900,360,48),o:o20(n),a:n,oh:NO}});
GAMES.comp20=QZ('🏠 11–20 сандарының құрамы',(lv)=>{const n=rnd(11,20),o=n-10;if(lv===1)return{q:BIG(`${n} = 10 + ${SL}`,90),o:near(o,0,10),a:o};
 if(lv===2)return{q:BIG(`1 ондық ${o} бірлік = ${SL}`,64),o:o20(n),a:n,oh:NO};const a=rnd(1,n-10),b=n-a;return{q:BIG(`${n} = ${a} + ${SL}`,90),o:o20(b),a:b,oh:NO}});
GAMES.by2=QZ('👟 2-ден топтап сана',(lv)=>{const rev=lv===3&&Math.random()<.5;const s=rev?pick([20,18,16,14],1)[0]:pick([0,2,4,6,8,10],1)[0];const seq=[...Array(5)].map((_,i)=>rev?s-2*i:s+2*i);const m=lv===1?4:rnd(1,4);
 return{q:BIG(seq.map((v,i)=>i===m?'?':v).join(', '),84)+(lv===1?'<div style="font-size:60px">👟👟 👟👟 👟👟</div>':''),o:[...new Set(nearS(seq[m],0,20,2).concat(seq[m]+1))].slice(0,4),a:seq[m],oh:NO}});
GAMES.cmp20=DU('Салыстыр: >, <, =',(lv)=>{const a=rnd(L3(lv,11,10,0),20);let b=rnd(L3(lv,11,10,0),20);if(Math.random()<.2)b=a;
 if(lv===3){const e=ex(20);return{q:BIG(`${e.a}${SG(e.op)}${e.b} ◻ ${b}`,54),o:['>','<','='],a:cmp(e.r,b),oh:optBig}}return{q:BIG(`${a} ◻ ${b}`,84),o:['>','<','='],a:cmp(a,b),oh:optBig}});
GAMES.nbr20=TQ('🏘️ Көрші сандар (11–20)',(lv)=>{const n=rnd(11,19);const t=lv===1?1:rnd(0,lv===3?2:1);if(t===2){const r=`${n-1} және ${n+1}`;const o=new Set([r]);while(o.size<4){const a=rnd(9,18);o.add(`${a} және ${a+2}`)}return{q:BIG(`? , ${n} , ?`,90),o:[...o],a:r,oh:NO}}
 const a=t?n+1:n-1;return{q:BIG(t?`${n} , ?`:`? , ${n}`,100)+`<div class="mut" style="font-size:26px">${t?'Кейінгі сан':'Алдындағы сан'}</div>`,o:o20(a),a,oh:NO}});

/* ===== 2. 20 көлемінде қосу және азайту ===== */
const ex20=(lv)=>{if(lv===1){const t=rnd(11,19),o=t-10;const op=Math.random()<.5?'+':'-';if(op==='+'){const b=rnd(0,9-o);return{a:t,b,op,r:t+b}}const b=rnd(0,o);return{a:t,b,op,r:t-b}}
 const op=Math.random()<.5?'+':'-';if(op==='+'){const a=rnd(2,9),b=rnd(11-a,9);return{a,b,op,r:a+b}}const a=rnd(11,18),b=rnd(a-9,9);return{a,b,op,r:a-b}};
GAMES.add20=QZ('➕ 20 көлемінде қосу және азайту',(lv)=>{const e=ex20(lv);if(lv===3&&Math.random()<.5){const h=rnd(0,1);return{q:exq(e.a,e.op,e.b,e.r,h),o:o20(h?e.b:e.a),a:h?e.b:e.a,oh:NO}}
 const help=lv===2&&e.op==='+'?`<div style="display:flex;gap:16px">${tenFrame(e.a,0,44)}${tenFrame(e.b,0,44)}</div><div class="mut" style="font-size:22px">Алдымен 10-ды толтыр</div>`:'';return{q:help+exq(e.a,e.op,e.b,e.r),o:o20(e.r),a:e.r,oh:NO}});
GAMES.frog20=QZ('🐸 Бақа 0–20 сан сызығымен секіреді',(lv)=>{let s,j,g=0;do{s=rnd(0,20);j=rnd(1,L3(lv,4,6,9))*(lv>1&&Math.random()<.5?-1:1)}while((s+j<0||s+j>20)&&g++<100);
 const st=1000/20.6,x=30+s*st;const sv=nline(20,[],0,1000).replace('</svg>',`<text x="${x}" y="88" text-anchor="middle" font-size="56">🐸</text></svg>`);
 return{q:`<div style="font-size:40px;font-weight:900">Бақа <b>${s}</b>-ден <span style="color:${j>0?'#e53935':'#1e63d6'}">${j>0?'+'+j:'−'+(-j)}</span> секірді</div>${sv}`,o:o20(s+j),a:s+j,oh:NO}});
GAMES.pick20=(box,T,lv)=>ROUNDS(box,4,(b,k)=>{const t=rnd(L3(lv,12,11,11),L3(lv,16,18,20));const tiles=[],seen=new Set();let g=0;
 while(tiles.length<12&&g++<600){const ok=tiles.filter(x=>x.ok).length<4&&Math.random()<.4;const v=ok?t:rnd(10,20);if(!ok&&v===t)continue;let e;
  if(Math.random()<.5){const a=rnd(Math.max(0,v-9),Math.min(v,10));e=`${a} + ${v-a}`}else{const a=rnd(v,20);if(a-v>10)continue;e=`${a} − ${a-v}`}if(seen.has(e))continue;seen.add(e);tiles.push({h:`<span style="font-size:40px;font-weight:900">${e}</span>`,ok:v===t})}
 if(!tiles.some(x=>x.ok))tiles[0]={h:`<span style="font-size:40px;font-weight:900">10 + ${t-10}</span>`,ok:true};
 K.pickAll(b,T,{tiles,cols:4,size:230,title:`Жауабы <b style="color:#e53935;font-size:46px">${t}</b> болатын мысалдардың бәрін тап`});b.querySelectorAll('button').forEach(x=>x.style.height='130px')},{title:'🎯 Мысалдарды тап'});
GAMES.rope20=DU('20 көлемінде қосу және азайту',(lv)=>{const e=ex20(lv);return{q:exq(e.a,e.op,e.b,e.r),o:o20(e.r),a:e.r,oh:NOs}});
GAMES.million4=(box,T,lv)=>MILLION(box,T,[
 k=>{const e=ex20(k<4?1:2);return{q:`${e.a} ${SG(e.op)} ${e.b} = ?`,o:o20(e.r),a:e.r}},
 k=>{const n=rnd(11,20);return{q:`${n} санында неше бірлік бар (ондықтан басқа)?`,o:near(n-10,0,10),a:n-10}},
 k=>{const l=pick([[10,5],[10,5,2],[5,2,1],[10,10]],1)[0];const s=l.reduce((a,b)=>a+b,0);return{q:`Барлығы неше теңге?<div style="margin-top:8px;transform:scale(.8)">${coins(l)}</div>`,o:o20(s).map(v=>v+' тг'),a:s+' тг'}},
 k=>{const p=rnd(11,19);return{q:`Тауар ${p} тг. 20 тг бердің. Қанша қайтарады?`,o:near(20-p,0,10).map(v=>v+' тг'),a:(20-p)+' тг'}},
 k=>{const t=pick(['үшбұрыштың','шаршының','тіктөртбұрыштың'],1)[0];const n={'үшбұрыштың':3,'шаршының':4,'тіктөртбұрыштың':4}[t];return{q:`${t[0].toUpperCase()+t.slice(1)} неше бұрышы бар?`,o:[3,4,5,6],a:n}},
 k=>{const a=rnd(11,20),b=rnd(11,20);return{q:`${a} ◻ ${b}`,o:['>','<','='],a:cmp(a,b),oh:SG}}]);

/* ===== 3. Ақша: монеталар, баға, қайтарым ===== */
const CV=[1,2,5,10,20];
GAMES.coinsum=QZ('🪙 Барлығы неше теңге?',(lv)=>{let l,s;do{const n=rnd(2,L3(lv,3,4,5));l=[...Array(n)].map(()=>pick(lv===1?[1,2,5]:CV.slice(0,4),1)[0]).sort((a,b)=>b-a);s=l.reduce((a,b)=>a+b,0)}while(s>20);
 return{q:coins(l),o:o20(s).map(v=>v+' тг'),a:s+' тг',oh:NO}});
GAMES.pay=(box,T,lv)=>ROUNDS(box,5,(b,k,hd)=>{const IT=['🍦','🧃','🍪','🍌','✏️','🎈','🧸','🍫'];const e=IT[rnd(0,IT.length-1)];const p=rnd(L3(lv,3,8,12),L3(lv,10,15,20));hd.innerHTML=`🛒 ${e} бағасы <b style="color:#e53935;font-size:46px">${p} тг</b>. Дәл сонша монета сал`;
 b.style.flexDirection='column';b.style.alignItems='center';b.style.justifyContent='space-around';const purse=el('div','');purse.style.cssText='min-width:700px;min-height:150px;background:#fff8e1;border:6px dashed #d7a35a;border-radius:30px;display:flex;flex-wrap:wrap;gap:6px;justify-content:center;align-items:center;padding:10px';
 const sum=el('div','big','Әмиянда: 0 тг');const row=el('div','');row.style.cssText='display:flex;gap:16px';const chk=el('button','btn','✅ Төлеу');b.append(sum,purse,row,chk);let s=0;
 const upd=()=>{s=[...purse.children].reduce((a,c)=>a+ +c.dataset.v,0);sum.textContent=lv===3?'Әмиянды өзің сана':'Әмиянда: '+s+' тг'};
 (lv===1?[1,2,5]:CV).forEach(v=>{const c=el('button','',coin(v,110));c.onclick=()=>{const x=el('button','',coin(v,80));x.dataset.v=v;x.onclick=()=>{x.remove();upd()};purse.append(x);beep('tap');upd()};row.append(c)});
 chk.onclick=()=>{if(s===p){T.ok(chk);chk.disabled=true;T.done()}else{T.bad(chk);toast(s>p?'Көп салдың':'Аз салдың','#e53935')}};T.reveal=()=>toast('Мысалы: '+(()=>{let r=p,o=[];for(const v of [20,10,5,2,1])while(r>=v){o.push(v);r-=v}return o.join(' + ')})()+' тг','#c28a00')},{title:''});
GAMES.change=QZ('💵 Қайтарым: неше теңге қайтарады?',(lv)=>{const g=lv===1?10:20;const p=rnd(lv===1?1:5,g-1);const e=pick(['🍦','🧃','🍪','🍌','✏️','🎈'],1)[0];
 return{q:`<div style="font-size:90px">${e}</div><div style="font-size:42px;font-weight:900">Бағасы: ${p} тг. Сен бердің: ${g} тг</div>`,o:near(g-p,0,19).map(v=>v+' тг'),a:(g-p)+' тг',oh:NO}});
GAMES.cheap=DU('Қайсысы арзан? Қайсысы қымбат?',(lv)=>{const [x,y]=pick(['🍦','🧃','🍪','🍌','✏️','🎈','🧸','🍫'],2);let a=rnd(2,20),b=rnd(2,20);while(b===a)b=rnd(2,20);const ch=Math.random()<.5;
 return{q:`<div style="font-size:30px;font-weight:900;color:${ch?'#43a047':'#e53935'}">${ch?'Қайсысы АРЗАН?':'Қайсысы ҚЫМБАТ?'}</div><div style="display:flex;gap:30px;font-size:70px">${x}<span style="font-size:30px;font-weight:900">${a} тг</span> ${y}<span style="font-size:30px;font-weight:900">${b} тг</span></div>`,o:[x,y],a:ch?(a<b?x:y):(a>b?x:y),oh:v=>`<span style="font-size:60px">${v}</span>`}});
GAMES.shop4=TQ('🛍️ Дүкендегі есептер',(lv)=>{const [x,y]=pick(['🍦','🧃','🍪','🍌','✏️','🎈'],2);const a=rnd(1,L3(lv,5,9,10)),b=rnd(1,L3(lv,5,9,10));const t=lv===1?0:rnd(0,2);
 if(t===2){const g=20,s=a+b;return{q:`<div style="font-size:36px;font-weight:800;line-height:1.4">${x} ${a} тг, ${y} ${b} тг.<br>Екеуін алып, 20 тг бердің. Қанша қайтарады?</div>`,o:o20(g-s).map(v=>v+' тг'),a:(g-s)+' тг',oh:NO}}
 if(t===1){const m=Math.max(a,b),n=Math.min(a,b);return{q:`<div style="font-size:36px;font-weight:800;line-height:1.4">${x} ${m} тг, ${y} ${n} тг.<br>${x} неше теңге қымбат?</div>`,o:near(m-n,0,10).map(v=>v+' тг'),a:(m-n)+' тг',oh:NO}}
 return{q:`<div style="font-size:36px;font-weight:800;line-height:1.4">${x} ${a} тг, ${y} ${b} тг.<br>Екеуі бірге неше теңге?</div>`,o:o20(a+b).map(v=>v+' тг'),a:(a+b)+' тг',oh:NO}});

/* ===== 4. Кестелер, пиктограммалар, диаграммалар ===== */
const FR=[['🍎','алма'],['🍐','алмұрт'],['🍌','банан'],['🍊','апельсин'],['🍓','құлпынай']];
const mkData=(n=3,max=6)=>{const f=pick(FR,n);let v;do{v=f.map(()=>rnd(1,max))}while(new Set(v).size<n);return f.map((x,i)=>[x[0],v[i],x[1]])};
GAMES.picto=QZ('📊 Пиктограмманы оқы',(lv)=>{const D=mkData(L3(lv,3,4,4),L3(lv,5,7,8));const i=rnd(0,D.length-1);
 if(lv===3&&Math.random()<.5){const j=(i+1)%D.length;const d=Math.abs(D[i][1]-D[j][1]);return{q:pictoSvg(D.map(r=>[r[0],r[1],''])) +`<div style="font-size:32px;font-weight:900">${D[i][0]} мен ${D[j][0]} айырмасы неше?</div>`,o:near(d,0,10),a:d}}
 return{q:pictoSvg(D.map(r=>[r[0],r[1],'']))+`<div style="font-size:34px;font-weight:900">Неше ${D[i][2]}? ${D[i][0]}</div>`,o:near(D[i][1],0,10),a:D[i][1]}});
GAMES.bars=QZ('📈 Диаграмманы оқы',(lv)=>{const D=mkData(L3(lv,3,4,5),L3(lv,6,8,10));const most=Math.random()<.5;
 if(lv>1&&Math.random()<.5){const i=rnd(0,D.length-1);return{q:barsSvg(D.map(r=>[r[0],r[1]]))+`<div style="font-size:30px;font-weight:900">${D[i][0]} неше?</div>`,o:near(D[i][1],0,10),a:D[i][1]}}
 const t=D.reduce((m,r)=>most?(r[1]>m[1]?r:m):(r[1]<m[1]?r:m));return{q:barsSvg(D.map(r=>[r[0],r[1]]))+`<div style="font-size:30px;font-weight:900">Қайсысы ең ${most?'көп':'аз'}?</div>`,o:D.map(r=>r[0]),a:t[0],oh:v=>`<span style="font-size:56px">${v}</span>`}});
GAMES.tablegame=QZ('📋 Кестені оқы',(lv)=>{const names=pick(['Әлия','Сырым','Асан','Айгүл','Ерлан','Дана'],3);const F=pick(FR,lv===1?2:3);const v=names.map(()=>F.map(()=>rnd(0,L3(lv,5,7,9))));
 const r=rnd(0,2),c=rnd(0,F.length-1);const tb=`<table style="border-collapse:collapse;font-size:34px;font-weight:900;background:#fff">${'<tr><td style="border:3px solid #90a4ae;padding:8px 18px"></td>'+F.map(f=>`<td style="border:3px solid #90a4ae;padding:8px 18px;font-size:44px">${f[0]}</td>`).join('')+'</tr>'}${names.map((n,i)=>`<tr><td style="border:3px solid #90a4ae;padding:8px 18px">${n}</td>${v[i].map(x=>`<td style="border:3px solid #90a4ae;padding:8px 18px;text-align:center">${x}</td>`).join('')}</tr>`).join('')}</table>`;
 if(lv===3&&Math.random()<.5){const s=v[r].reduce((a,b)=>a+b,0);return{q:tb+`<div style="font-size:32px;font-weight:900;margin-top:10px">${names[r]} барлығы неше жеміс жеді?</div>`,o:o20(s),a:s,oh:NO}}
 return{q:tb+`<div style="font-size:32px;font-weight:900;margin-top:10px">${names[r]} неше ${F[c][1]} жеді? ${F[c][0]}</div>`,o:near(v[r][c],0,10),a:v[r][c]}});
GAMES.pictoduel=DU('Пиктограмма: қайсысы көп?',(lv)=>{const D=mkData(3,L3(lv,5,6,7));const t=D.reduce((m,r)=>r[1]>m[1]?r:m);return{q:`<div style="transform:scale(.75)">${pictoSvg(D.map(r=>[r[0],r[1],'']))}</div>`,o:D.map(r=>r[0]),a:t[0],oh:v=>`<span style="font-size:50px">${v}</span>`}});
GAMES.pictosum=TQ('📊 Пиктограмма: барлығы неше?',(lv)=>{const D=mkData(L3(lv,2,3,3),L3(lv,5,5,6));const s=D.reduce((a,r)=>a+r[1],0);return{q:pictoSvg(D.map(r=>[r[0],r[1],'']))+'<div style="font-size:32px;font-weight:900">Барлық жемісті қос</div>',o:o20(s),a:s,oh:NO}});

/* ===== 5. Жиын. Кесінді. Логикалық есептер ===== */
const SETS=[['Жемістер','🍎🍐🍌🍊🍓🍒'],['Көліктер','🚗🚌🚲🚂✈️🚀'],['Жануарлар','🐱🐶🐰🐻🦊🐸'],['Гүлдер','🌷🌸🌻🌹🌼🪷'],['Оқу құралдары','✏️📏📘📒✂️🖍️']];
GAMES.set=(box,T,lv)=>ROUNDS(box,4,(b,k)=>{const si=rnd(0,SETS.length-1);const [nm,em]=SETS[si];const own=[...em].filter(x=>x.trim()&&x!=='️');const ownE=Array.from(em.matchAll(/\p{Extended_Pictographic}️?/gu),m=>m[0]);
 const others=SETS.filter((_,i)=>i!==si).flatMap(s=>Array.from(s[1].matchAll(/\p{Extended_Pictographic}️?/gu),m=>m[0]));const good=pick(ownE,L3(lv,3,4,4)),bad=pick(others,L3(lv,5,6,8));
 K.pickAll(b,T,{tiles:[...good.map(e=>({h:`<span style="font-size:80px">${e}</span>`,ok:true})),...bad.map(e=>({h:`<span style="font-size:80px">${e}</span>`,ok:false}))],cols:6,size:160,title:`<b style="color:#e53935">«${nm}»</b> жиынының элементтерін тап`})},{title:'🧺 Жиын'});
GAMES.segment=QZ('📏 Кесіндінің ұзындығы',(lv)=>{let s=0,e;if(lv===1)e=rnd(2,6);else if(lv===2)e=rnd(2,10);else{s=rnd(1,4);e=rnd(s+2,10)}
 const cm=62,w=10*cm+60,x=i=>30+i*cm;let t=`<svg width="${w}" height="190" viewBox="0 0 ${w} 190"><line x1="${x(s)}" y1="55" x2="${x(e)}" y2="55" stroke="#1a2a5a" stroke-width="7"/><circle cx="${x(s)}" cy="55" r="10" fill="#e53935"/><circle cx="${x(e)}" cy="55" r="10" fill="#e53935"/><text x="${x(s)}" y="30" text-anchor="middle" font-size="30" font-weight="900" font-family="Nunito">А</text><text x="${x(e)}" y="30" text-anchor="middle" font-size="30" font-weight="900" font-family="Nunito">В</text><rect x="10" y="96" width="${w-20}" height="80" rx="10" fill="#ffe082" stroke="#e0a800" stroke-width="3"/>`;
 for(let i=0;i<=10;i++)t+=`<line x1="${x(i)}" y1="96" x2="${x(i)}" y2="126" stroke="#5d4300" stroke-width="3"/><text x="${x(i)}" y="160" text-anchor="middle" font-size="26" font-weight="900" font-family="Nunito" fill="#5d4300">${i}</text>`;
 return{q:t+'</svg><div style="font-size:30px;font-weight:900">АВ кесіндісінің ұзындығы неше см?</div>',o:near(e-s,1,10).map(v=>v+' см'),a:(e-s)+' см',oh:NO}});
const ABL=w=>{const v=[...w.toLowerCase()].reverse().find(c=>'аәеоөұүыіиэяюё'.includes(c))||'а';const f='әеөүіи'.includes(v)&&!'я'.includes(v);const l=w.slice(-1).toLowerCase();
 const suf='аәеоөұүыіиэяюё'.includes(l)?'да':'птқкшсфхцчщ'.includes(l)?'та':'мнң'.includes(l)?'на':'да';return w+(f?suf.replace('а','е')+'н':suf+'н')};
const LOG=[()=>{const n=pick(['Әлия','Сырым','Асан','Дана','Ерлан','Айгүл'],3);return{q:`${n[0]} ${ABL(n[1])} ұзын. ${n[1]} ${ABL(n[2])} ұзын. Кім ең ұзын?`,o:n,a:n[0]}},
 ()=>{const n=pick(['Әлия','Сырым','Асан','Дана','Ерлан','Айгүл'],3);return{q:`${n[0]} ${ABL(n[1])} жас. ${n[1]} ${ABL(n[2])} жас. Кім ең үлкен?`,o:n,a:n[2]}},
 ()=>{const n=pick(['Әлия','Дана','Айгүл'],2);return{q:`${n[0]} мен ${n[1]}-да алма мен алмұрт бар. ${n[0]}-да алма жоқ. ${n[1]}-да не бар?`,o:['🍎 алма','🍐 алмұрт'],a:'🍎 алма'}},
 ()=>({q:'Қызыл, көк, жасыл үш шар бар. Қызыл шар көктен үлкен, жасыл шар ең кішкентай. Қай шар ең үлкен?',o:['🔴 қызыл','🔵 көк','🟢 жасыл'],a:'🔴 қызыл'}),
 ()=>({q:'Мысық үстел астында емес, орындықта да емес. Мысық не төсекте, не үстел астында, не орындықта. Мысық қайда?',o:['🛏️ төсекте','🪑 орындықта','⬇ үстел астында'],a:'🛏️ төсекте'}),
 ()=>{const a=rnd(2,4);return{q:`Бір қорапта ${a} шар бар. Неше түрлі ретпен қатарға қоюға болады? (А, Ә${a>2?', Б':''}${a>3?', В':''})`,o:a===2?[2,3,4,1]:a===3?[6,3,4,9]:[24,12,8,16],a:a===2?2:a===3?6:24}}];
GAMES.logic=QZ('🧠 Логикалық есеп',(lv)=>{const g=LOG[rnd(0,lv===3?LOG.length-1:LOG.length-2)]();return{q:`<div style="font-size:36px;font-weight:800;max-width:1150px;line-height:1.35">${g.q}</div>`,o:g.o,a:g.a,oh:NO}},{rounds:6});
GAMES.setduel=DU('Жиынға жатпайтынын тап',(lv)=>{const si=rnd(0,SETS.length-1);const E=s=>Array.from(s.matchAll(/\p{Extended_Pictographic}️?/gu),m=>m[0]);const g=pick(E(SETS[si][1]),3),b=pick(SETS.filter((_,i)=>i!==si).flatMap(s=>E(s[1])),1)[0];
 return{q:`<div style="font-size:30px;font-weight:900">«${SETS[si][0]}» жиынына қайсысы жатпайды?</div>`,o:[...g,b],a:b,oh:v=>`<span style="font-size:56px">${v}</span>`}});
GAMES.logicteam=TQ('🧠 Ойлан да тап (логика)',(lv)=>{const g=LOG[rnd(0,LOG.length-2)]();return{q:`<div style="font-size:34px;font-weight:800;max-width:1100px;line-height:1.35">${g.q}</div>`,o:g.o,a:g.a,oh:NO}});

/* ===== 6. Геометриялық фигуралар ===== */
const FIG={шеңбер:`<svg width="160" height="160"><circle cx="80" cy="80" r="66" fill="none" stroke="#1e88e5" stroke-width="8"/></svg>`,
 дөңгелек:`<svg width="160" height="160"><circle cx="80" cy="80" r="66" fill="#42a5f5"/></svg>`,
 үшбұрыш:`<svg width="160" height="160"><path d="M80 14 L150 146 H10Z" fill="#fdd835"/></svg>`,
 шаршы:`<svg width="160" height="160"><rect x="18" y="18" width="124" height="124" fill="#ec407a"/></svg>`,
 тіктөртбұрыш:`<svg width="200" height="160"><rect x="10" y="40" width="180" height="90" fill="#66bb6a"/></svg>`,
 сопақша:`<svg width="200" height="160"><ellipse cx="100" cy="80" rx="90" ry="55" fill="#ab47bc"/></svg>`,
 бесбұрыш:`<svg width="160" height="160"><path d="M80 10 L150 62 L124 146 H36 L10 62Z" fill="#ff9800"/></svg>`,
 алтыбұрыш:`<svg width="160" height="160"><path d="M44 16 H116 L152 80 L116 144 H44 L8 80Z" fill="#26a69a"/></svg>`};
const CORN={үшбұрыш:3,шаршы:4,тіктөртбұрыш:4,бесбұрыш:5,алтыбұрыш:6,дөңгелек:0,шеңбер:0,сопақша:0};
GAMES.figname=QZ('🔷 Бұл қандай фигура?',(lv)=>{const L=L3(lv,['дөңгелек','үшбұрыш','шаршы','тіктөртбұрыш'],['дөңгелек','шеңбер','үшбұрыш','шаршы','тіктөртбұрыш','сопақша'],Object.keys(FIG));const f=pick(L,1)[0];
 return{q:`<div style="transform:scale(1.6);margin:30px">${FIG[f]}</div>`,o:[...new Set([f,...pick(L.filter(x=>x!==f),3)])],a:f,oh:NO}});
GAMES.corners=QZ('📐 Фигураның неше бұрышы бар?',(lv)=>{const L=L3(lv,['үшбұрыш','шаршы','тіктөртбұрыш'],['үшбұрыш','шаршы','тіктөртбұрыш','бесбұрыш','дөңгелек'],['үшбұрыш','шаршы','тіктөртбұрыш','бесбұрыш','алтыбұрыш','дөңгелек','сопақша']);const f=pick(L,1)[0];
 return{q:`<div style="transform:scale(1.6);margin:30px">${FIG[f]}</div>`,o:[0,3,4,5,6].filter(v=>lv===3||v!==6).slice(0,lv===1?3:5).concat(CORN[f]).filter((v,i,a)=>a.indexOf(v)===i),a:CORN[f]}});
GAMES.findfig=(box,T,lv)=>ROUNDS(box,4,(b,k)=>{const L=L3(lv,['дөңгелек','үшбұрыш','шаршы'],['дөңгелек','үшбұрыш','шаршы','тіктөртбұрыш','сопақша'],Object.keys(FIG));const tg=pick(L,1)[0];const tiles=[];const good=rnd(2,4);
 for(let i=0;i<12;i++){const f=i<good?tg:pick(L.filter(x=>x!==tg),1)[0];tiles.push({h:`<div style="transform:scale(.6) rotate(${lv>1?rnd(-25,25):0}deg)">${FIG[f]}</div>`,ok:f===tg})}
 K.pickAll(b,T,{tiles,cols:6,size:160,title:`Барлық <b style="color:#e53935">${tg}</b> фигурасын тап`})},{title:'🔍 Фигураларды тап'});
GAMES.cornduel=DU('Неше бұрышы бар?',(lv)=>{const L=['үшбұрыш','шаршы','тіктөртбұрыш','бесбұрыш'].concat(lv===3?['алтыбұрыш']:[]);const f=pick(L,1)[0];return{q:`<div style="transform:scale(1.1)">${FIG[f]}</div><div style="font-size:26px;font-weight:900">${lv===1?f:''}</div>`,o:[3,4,5,6].slice(0,lv===3?4:3),a:CORN[f]}});
GAMES.oddfig=TQ('🚫 Қай фигура артық?',(lv)=>{const G=L3(lv,[['үшбұрыш','үшбұрыш','үшбұрыш','дөңгелек'],['шаршы','шаршы','шаршы','үшбұрыш'],['дөңгелек','дөңгелек','дөңгелек','шаршы']],
 [['үшбұрыш','шаршы','бесбұрыш','дөңгелек'],['дөңгелек','сопақша','шеңбер','шаршы'],['шаршы','тіктөртбұрыш','бесбұрыш','сопақша']],
 [['үшбұрыш','шаршы','бесбұрыш','шеңбер'],['дөңгелек','сопақша','шеңбер','алтыбұрыш'],['шаршы','тіктөртбұрыш','алтыбұрыш','сопақша']]);const g=pick(G,1)[0];const ids=g.map((f,i)=>'f'+i);
 return{q:`<div style="font-size:30px;font-weight:900">${lv===1?'Үшеуі бірдей, біреуі басқа':'Біреуі басқаша: бұрышына қара'}</div>`,o:ids,a:'f3',oh:v=>`<div style="width:170px;height:130px;display:grid;place-items:center;transform:scale(.75)">${FIG[g[+v[1]]]}</div>`}});
