/* neuroUstaz · Сауат ашу (Әліппе, Жұмабаева т.б., Атамұра 2021) — ортақ сөздік пен ойын үлгілері */
const popIn=e=>{try{e.animate([{transform:"scale(.6)"},{transform:"scale(1.12)"},{transform:"scale(1)"}],{duration:260})}catch(_){}};
const VOW='аәеоөұүыіиэ',BACKV='аоұы',FRONTV='әеөүі';
const isV=(w,i)=>w[i]==='у'?(i===0||!VOW.includes(w[i-1])):VOW.includes(w[i]);
/* әліппедегі әріп реті */
const ORDER='а р л у н с о т қ ы з м е д ш ұ б й к і ң ғ ж ә п ү ө г и я ю х һ щ в э ё ц ф ч ъ ь'.split(' ');
const upto=L=>new Set(ORDER.slice(0,ORDER.indexOf(L)+1));
/* сөздік: сөз, сурет */
const DICT=`ара🐝 ару👸 ана👩 нан🍞 нар🐪 арна🌊 тау⛰️ су💧 ат🐴 от🔥 ту🚩 тас🪨 қар❄️ қала🏙️ қол✋ сақал🧔 торт🎂 тон🧥 арқан🪢 аққу🦢 лақ🐐 тақта🟩 оқу📖 нота🎵 салат🥗 қант🍬
мысық🐱 балық🐟 ешкі🐐 бақа🐸 қалам✏️ есік🚪 кеме⛵ ұшақ✈️ қазан🍲 қасық🥄 айна🪞 алма🍎 шар🎈 шана🛷 жылан🐍 жұлдыз⭐ ай🌙 бала👦 қыз👧 ағаш🌳 тышқан🐭 арыстан🦁 қарбыз🍉 қауын🍈 сәбіз🥕 жаңбыр🌧️ бұлт☁️ теңіз🌊 мұз🧊 қаз🪿 ет🥩 шай🍵 бал🍯 домбыра🪕 айран🥛 сағат⏰ қайық🚣 ғарыш🚀 орман🌲 жол🛣️ сызғыш📏 себет🧺 қасқыр🐺 әже👵 ата👴 әке👨 мұрын👃 құлақ👂 тіс🦷 шам💡 сабын🧼 қайшы✂️ орындық🪑 терезе🪟 жаңғақ🥜 саңырауқұлақ🍄 шабдалы🍑 банан🍌 қызанақ🍅 тауық🐔 қораз🐓 қой🐑 жылқы🐎 бұғы🦌 жолбарыс🐯 маймыл🐒 тасбақа🐢 құмырсқа🐜 сәлем👋 дәрі💊 ыдыс🍽️ зебра🦓 машина🚗 кілт🔑 кітапхана🏛️ ән🎶 ағаш🌳 керует🛏️ ақша💵 кәмпит🍭 жеміс🍏 қант🍬 бесік👶 бөрік👒
күн☀️ үй🏠 гүл🌸 түлкі🦊 түйе🐫 сиыр🐄 ит🐶 аю🐻 қоян🐰 піл🐘 доп⚽ кітап📖 дәптер📒 мектеп🏫 алмұрт🍐 көз👁️ үйрек🦆 үкі🦉 көбелек🦋 өрмекші🕷️ жүзім🍇 лимон🍋 пияз🧅 шие🍒 жапырақ🍃 бүркіт🦅 қоңыз🪲 велосипед🚲 вагон🚃 хат✉️ айдаһар🐉 щетка🪥 цирк🎪 фото📷 футбол⚽ фонтан⛲ чемодан🧳 экран📺 эскимо🍦 шофёр🚕 альбом📔 пальто🧥 компьютер💻 подъезд🏢 аяқ🦶 ою🌀 ағаш🌳 көйлек👗 етік👢 гүлдер💐 өрік🍑 бүлдірген🍓 сүт🥛 жүрек❤️ шахмат♟️ хайуанат🐾 тарих📜 вертолет🚁 автобус🚌 трамвай🚋 троллейбус🚎 кофе☕ шоколад🍫  почта📮 поезд🚆`;
const WORDS=[];{const seen=new Set();for(const t of DICT.split(/\s+/).filter(Boolean)){const m=t.match(/^([а-яәіңғүұқөһё]+)(.+)$/);if(!m||seen.has(m[1]))continue;seen.add(m[1]);WORDS.push({w:m[1],e:m[2]})}}
/* буынға бөлу */
function syl(w){const n=[];for(let i=0;i<w.length;i++)if(isV(w,i)||'яюё'.includes(w[i]))n.push(i);if(n.length<2)return[w];const cut=[];
 for(let j=0;j<n.length-1;j++){const a=n[j],b=n[j+1],c=b-a-1;cut.push(c===0?a+1:c===1?a+1:a+2)}let r=[],p=0;cut.forEach(c=>{r.push(w.slice(p,c));p=c});r.push(w.slice(p));return r}
const tricky=/[иуяюёщцъь]/;
/* allowed: Set әріптер. focus: міндетті әріптер */
function pool(allowed,{focus,maxLen=99,minLen=1,sound=false}={}){return WORDS.filter(x=>[...x.w].every(c=>allowed.has(c))&&x.w.length<=maxLen&&x.w.length>=minLen&&(!focus||[...focus].some(f=>x.w.includes(f)))&&(!sound||!tricky.test(x.w)))}
const UP1=s=>s[0].toUpperCase()+s.slice(1);
const W=(w,fs=96,c='inherit')=>`<span style="font-size:${fs}px;font-weight:900;color:${c};letter-spacing:2px;line-height:1.1">${w}</span>`;
const PIC=(e,fs=130)=>`<div style="font-size:${fs}px;line-height:1">${e}</div>`;
const LET=l=>`<span style="font-size:60px;padding:0 14px">${l.toUpperCase()}${l}</span>`;
const WO=v=>`<span style="font-size:44px;padding:0 12px">${v}</span>`;
const EO=v=>`<span style="font-size:70px">${v}</span>`;
const pk1=a=>a[rnd(0,a.length-1)];
const others=(arr,a,n)=>pick(arr.filter(x=>x!==a),n);
/* дыбыстық сызба (кітаптағыдай: қызыл — дауысты, көк — дауыссыз, буын сызығы) */
function schemeHTML(w,show=true,box=56){const s=syl(w);let h='';s.forEach((p,pi)=>{[...p].forEach((c,i)=>{const gi=s.slice(0,pi).join('').length+i;const v=isV(w,gi);
 h+=`<span style="display:inline-grid;place-items:center;width:${box}px;height:${box}px;border:3px solid #1a2a5a;${pi&&!i?'border-left:6px solid #1a2a5a;':''}background:#fff">${show?`<i style="width:${box*.42}px;height:${box*.42}px;border-radius:50%;background:${v?'#e53935':'#1e63d6'};display:block"></i>`:''}</span>`})});return `<span style="display:inline-flex">${h}</span>`}

/* ============ ОЙЫН ҮЛГІЛЕРІ ============ */
const SA={};
const SYLO=(n,m)=>{const s=[n];for(let d=1;s.length<m;d++){if(n+d<=6)s.push(n+d);if(s.length<m&&n-d>=1)s.push(n-d)}return s.sort((a,b)=>a-b)};
/* 1. Сөйлемде неше сөз? */
SA.sentCount=(S)=>QZ('📝 Сөйлемде неше сөз бар?',(lv)=>{const s=pk1(S);const n=s.t.replace(/[–.,!?]/g,'').trim().split(/\s+/).length;
 return{q:(s.e?PIC(s.e,100):'')+W(s.t,lv===3?58:64)+`<div style="display:flex;gap:10px;margin-top:10px">${'<span style="width:110px;height:14px;border-bottom:6px solid #90a4ae"></span>'.repeat(lv===1?n:0)}</div>`,o:near(n,1,7),a:n}});
/* 2. Сөйлем құра */
SA.sentBuild=(S)=>(box,T,lv)=>ROUNDS(box,6,(b,k,hd)=>{const s=pkU(S.filter(x=>{const n=x.t.split(' ').length;return lv===1?n<=3:lv===2?n<=4:n>=3}).concat(S).slice(0,99));
 const end=(s.t.match(/[.!?]$/)||['.'])[0];const ws=s.t.replace(/[.!?]$/,'').split(' ');hd.innerHTML='🧱 Сөздерді ретімен қойып, сөйлем құра';b.style.flexDirection='column';b.style.alignItems='center';b.style.justifyContent='space-around';
 if(s.e&&lv<3)b.append(el('div','',PIC(s.e,90)));const line=el('div','sline'),sl=ws.map(()=>{const x=el('div','wslot drop');line.append(x);return x});line.append(el('b','dot',end));b.append(line);
 let f=0;const mark=()=>sl.forEach((x,i)=>x.classList.toggle('next',i===f));mark();const fill=(i,w,t)=>{beep('tap');sl[i].textContent=w;sl[i].className='wslot filled';popIn(sl[i]);t.classList.add('used');while(f<ws.length&&sl[f].classList.contains('filled'))f++;mark();if(f>=ws.length)T.done()};
 let ord=shuffle(ws.slice());for(let g=0;g<20&&ord.join(' ')===ws.join(' ');g++)ord=shuffle(ws.slice());const tiles=el('div','tiles');
 ord.forEach(w=>{const t=el('button','tile wide',w);t.onclick=()=>{if(t.classList.contains('used'))return;w===ws[f]?fill(f,w,t):T.bad(t)};tiles.append(t)});b.append(tiles);
 T.reveal=()=>{const t=[...tiles.children].find(x=>!x.classList.contains('used')&&x.textContent===ws[f]);t&&t.classList.add('hint')}},{title:''});
/* 3. Суретке сәйкес сөйлем */
SA.sentPic=(S)=>QZ('🖼️ Суретке сәйкес сөйлемді тап',(lv)=>{const P=S.filter(x=>x.e);const s=pk1(P);return{q:PIC(s.e,150),o:[s.t,...others(P.map(x=>x.t),s.t,lv===1?1:2)],a:s.t,oh:WO}},{rounds:8});
/* 4. Неше буын? */
SA.sylCount=(P)=>QZ('👏 Сөзде неше буын бар? Шапалақтап сана',(lv)=>{const L=P.filter(x=>{const n=syl(x.w).length;return lv===1?n<=2:lv===2?n<=3:n>=2});const x=pk1(L.length?L:P);const n=syl(x.w).length;
 return{q:PIC(x.e,120)+W(lv===3?'':x.w,80),o:[1,2,3,4].slice(0,lv===1?3:4),a:n}});
/* 5. Буынға бөл */
SA.sylSplit=(P)=>QZ('✂️ Сөзді буынға дұрыс бөл',(lv)=>{const L=P.filter(x=>syl(x.w).length>=2&&(lv===1?x.w.length<=4:lv===2?x.w.length<=6:x.w.length>=5));const x=pk1(L.length?L:P.filter(x=>syl(x.w).length>=2));const s=syl(x.w),a=s.join('-');
 const wr=new Set();for(let i=1;i<x.w.length;i++){const c=x.w.slice(0,i)+'-'+x.w.slice(i);if(c!==a&&s.length===2)wr.add(c)}if(s.length>2){for(let t=0;t<10;t++){const z=s.slice();const j=rnd(0,z.length-2);if(z[j].length>1){z[j+1]=z[j].slice(-1)+z[j+1];z[j]=z[j].slice(0,-1)}else if(z[j+1].length>1){z[j]+=z[j+1][0];z[j+1]=z[j+1].slice(1)}const c=z.join('-');if(c!==a)wr.add(c)}}
 return{q:PIC(x.e,110)+W(x.w,80),o:[a,...pick([...wr],2)],a,oh:WO}});
/* 6. Буыннан сөз құра */
SA.sylBuild=(P)=>(box,T,lv)=>ROUNDS(box,6,(b,k,hd)=>{const L=P.filter(x=>{const n=syl(x.w).length;return lv===1?n===2:lv===2?n>=2&&n<=3:n>=3});const x=pkU(L.length?L:P.filter(x=>syl(x.w).length>=2));const s=syl(x.w);
 hd.innerHTML='🧩 Буындарды қосып, сөз құра';b.style.flexDirection='column';b.style.alignItems='center';b.style.justifyContent='space-around';if(lv<3)b.append(el('div','',PIC(x.e,100)));
 const line=el('div','sline'),sl=s.map(()=>{const z=el('div','wslot drop');line.append(z);return z});b.append(line);let f=0;const mark=()=>sl.forEach((z,i)=>z.classList.toggle('next',i===f));mark();
 const extra=lv===1?[]:pick([...new Set(P.flatMap(w=>syl(w.w)))].filter(y=>!s.includes(y)),lv===2?1:2);const tiles=el('div','tiles');
 shuffle([...s,...extra]).forEach(y=>{const t=el('button','tile wide',y);t.onclick=()=>{if(t.classList.contains('used'))return;if(y===s[f]){beep('tap');sl[f].textContent=y;sl[f].className='wslot filled';t.classList.add('used');f++;mark();if(f>=s.length){b.append(el('div','',PIC(x.e,70)));T.done()}}else T.bad(t)};tiles.append(t)});b.append(tiles);
 T.reveal=()=>{const t=[...tiles.children].find(z=>!z.classList.contains('used')&&z.textContent===s[f]);t&&t.classList.add('hint')}},{title:''});
/* 7. Буын жарысы (2 оқушы) */
SA.sylDuel=(P)=>DU('Неше буын?',(lv)=>{const x=pk1(P);return{q:PIC(x.e,90)+W(x.w,52),o:SYLO(syl(x.w).length,lv===1?3:4),a:syl(x.w).length}});
/* 8. Ұзын сөз, қысқа сөз (сынып) */
SA.longShort=(P)=>TQ('📏 Қай сөзде буын көп?',(lv)=>{let a,b2,g=0;do{[a,b2]=pick(P,2)}while(syl(a.w).length===syl(b2.w).length&&g++<50);const big=syl(a.w).length>syl(b2.w).length?a:b2;
 return{q:`<div style="font-size:30px;font-weight:900">Ұзын сөзді тап (буыны көп)</div>`,o:[a.w,b2.w],a:big.w,oh:v=>{const x=P.find(y=>y.w===v);return `<span style="font-size:60px">${x.e}</span><span style="font-size:40px;padding:0 10px">${lv===3?'':v}</span>`}}});
/* 9. Дыбыстық сызба */
SA.scheme=(P)=>(box,T,lv)=>ROUNDS(box,6,(b,k,hd)=>{const L=P.filter(x=>lv===1?x.w.length<=3:lv===2?x.w.length<=5:x.w.length>=4);const x=pkU(L.length?L:P);const w=x.w;
 hd.innerHTML=`🔴🔵 «${w}» сөзінің дыбыстық сызбасын жаса`;b.style.flexDirection='column';b.style.alignItems='center';b.style.justifyContent='space-around';
 b.append(el('div','',PIC(x.e,90)));const row=el('div','');row.style.cssText='display:flex;gap:10px';const cs=[...w].map((c,i)=>{const d=el('button','','<i></i>');d.style.cssText='width:88px;height:88px;border:4px solid #1a2a5a;border-radius:14px;background:#fff;display:grid;place-items:center;font-size:36px;font-weight:900';
  d.dataset.need=isV(w,i)?'r':'b';if(lv===1)d.innerHTML=`<span style="color:#90a4ae">${c}</span>`;row.append(d);return d});b.append(row);
 let sel='r';const pal=el('div','');pal.style.cssText='display:flex;gap:20px';const btn={};[['r','#e53935','дауысты'],['b','#1e63d6','дауыссыз']].forEach(([k2,c,t])=>{const z=el('button','',`<span style="display:inline-block;width:56px;height:56px;border-radius:50%;background:${c};vertical-align:middle"></span> <b style="font-size:24px">${t}</b>`);z.style.cssText='padding:8px 18px;border-radius:20px;border:4px solid transparent;background:#f3f6fb';z.onclick=()=>{sel=k2;Object.values(btn).forEach(q=>q.style.borderColor='transparent');z.style.borderColor='#fdd835'};btn[k2]=z;pal.append(z)});btn.r.style.borderColor='#fdd835';b.append(pal);
 let left=w.length;cs.forEach(d=>d.onclick=()=>{if(d.dataset.ok)return;if(sel===d.dataset.need){d.dataset.ok=1;d.innerHTML=`<i style="width:40px;height:40px;border-radius:50%;background:${sel==='r'?'#e53935':'#1e63d6'};display:block"></i>`;beep('tap');if(--left===0){b.append(el('div','',W(w,50)));T.done()}}else T.bad(d)});
 T.reveal=()=>cs.forEach(d=>{if(!d.dataset.ok)d.style.borderColor=d.dataset.need==='r'?'#e53935':'#1e63d6'})},{title:''});
/* 10. Дауысты ма, дауыссыз ба? */
SA.vowelCons=(A)=>DU('Дауысты ма, дауыссыз ба?',(lv)=>{const l=pk1([...A].filter(c=>!'ъь'.includes(c)));const v=VOW.includes(l);return{q:W(l.toUpperCase()+l,110),o:['🔴 дауысты','🔵 дауыссыз'],a:v?'🔴 дауысты':'🔵 дауыссыз',oh:NOs}});
/* 11. Дыбыс қай жерде? */
SA.soundPos=(P,F)=>QZ(lv=>'📍 Дыбыс сөздің қай жерінде тұр?',(lv)=>{const L=P.filter(x=>F.some(f=>x.w.includes(f)));const x=pk1(L.length?L:P);const f=F.find(z=>x.w.includes(z))||x.w[0];const i=x.w.indexOf(f);
 const pos=i===0?'басында':i===x.w.length-1?'соңында':'ортасында';return{q:PIC(x.e,110)+(lv===3?'':W(x.w,64))+`<div style="font-size:40px;font-weight:900;margin-top:8px">«${f}» дыбысы қайда?</div>`,o:['басында','ортасында','соңында'],a:pos,oh:WO}});
/* 12. Неше дыбыс? */
SA.soundCount=(P)=>QZ('🔢 Сөзде неше дыбыс бар?',(lv)=>{const L=P.filter(x=>!tricky.test(x.w)&&(lv===1?x.w.length<=3:lv===2?x.w.length<=5:x.w.length>=4));const x=pk1(L.length?L:P.filter(x=>!tricky.test(x.w)));
 return{q:PIC(x.e,120)+(lv===3?'':W(x.w,70))+(lv===1?schemeHTML(x.w,false,50):''),o:near(x.w.length,1,10),a:x.w.length}});
/* 13. Сөзде осы дыбыс бар ма? (сынып) */
SA.hasSound=(P,F)=>TQ('👂 Сөзде осы дыбыс бар ма?',(lv)=>{const f=pk1(F);const x=pk1(P);const h=x.w.includes(f);return{q:PIC(x.e,110)+(lv===3?'':W(x.w,60))+`<div style="font-size:40px;font-weight:900">«${f.toUpperCase()}» дыбысы бар ма?</div>`,o:['✅ Иә, бар','❌ Жоқ'],a:h?'✅ Иә, бар':'❌ Жоқ',oh:WO}});
/* 14. Әріпті тап */
SA.findLetter=(A,F)=>(box,T,lv)=>ROUNDS(box,4,(b,k)=>{const f=F[k%F.length];const oth=[...A].filter(c=>c!==f&&!'ъь'.includes(c));const tiles=[];const g=rnd(3,5);
 for(let i=0;i<L3(lv,12,15,18);i++){const ok=i<g;const c=ok?f:pk1(oth);const up=lv===1?true:Math.random()<.5;tiles.push({h:`<span style="font-size:${rnd(56,76)}px;font-weight:900;color:${SHC[rnd(0,5)]};${lv===3?`transform:rotate(${rnd(-20,20)}deg);display:inline-block`:''}">${up?c.toUpperCase():c}</span>`,ok})}
 K.pickAll(b,T,{tiles,cols:L3(lv,6,5,6),size:L3(lv,150,130,120),title:`Барлық <b style="color:#e53935;font-size:50px">${f.toUpperCase()}${f}</b> әрпін тап`})},{title:'🔍 Әріпті тап'});
/* 15. Әріп ұста */
SA.catchLetter=(A,F)=>(box,T,lv)=>{const f=pk1(F);const oth=[...A].filter(c=>c!==f&&!'ъь'.includes(c));const N=c=>`<span style="font-size:110px;font-weight:900;color:${SHC[rnd(0,5)]}">${Math.random()<.5?c.toUpperCase():c}</span>`;
 GM.catcher({icon:'🧲',sec:L3(lv,30,30,25),title:`🧲 Тек <b style="color:#e53935">${f.toUpperCase()}${f}</b> әрпін бас!`,good:()=>N(f),bad:()=>N(pk1(oth))}).build(box,T)};
/* 16. Жоғалған буын (буынды оқы) */
SA.readSyl=(P)=>QZ('📖 Сөзге жетпейтін буынды тап',(lv)=>{const L=P.filter(x=>syl(x.w).length>=2);const x=pk1(L.length?L:P);const s=syl(x.w);const i=lv===1?0:rnd(0,s.length-1);const a=s[i];
 const q=s.map((y,j)=>j===i?`<span class="slot" style="display:inline-grid;width:${a.length*50+30}px;height:90px;vertical-align:middle;font-size:40px">?</span>`:y).join(' – ');
 return{q:PIC(x.e,110)+W(q,74),o:(()=>{const S2=[...new Set(P.flatMap(w=>syl(w.w)))].filter(y=>y!==a);const same=S2.filter(y=>y.length===a.length);return[a,...pick(same.length>=3?same:S2,3)].slice(0,lv===1?3:4)})(),a,oh:WO}});
/* 17. Алғашқы әріп (2 оқушы) */
SA.firstDuel=(P,A)=>DU('Сөз қай әріптен басталады?',(lv)=>{const x=pk1(P);const f=x.w[0];return{q:PIC(x.e,100)+(lv===1?W('_'+x.w.slice(1),48):''),o:[f,...others([...A].filter(c=>!'ъь'.includes(c)),f,lv===1?2:3)],a:f,oh:v=>`<span style="font-size:46px;padding:0 10px">${v.toUpperCase()}</span>`}});
/* 18. Жылдам көз: әріп (сынып) */
SA.flashLetter=(A,F)=>TQ('👀 Мұқият қара! Қай әріп болды?',(lv)=>{const f=Math.random()<.6?pk1(F):pk1([...A]);const ms=L3(lv,2500,1500,900);
 return{q:qb=>{qb.innerHTML=W(f.toUpperCase()+f,180);const a=T.alive();setTimeout(()=>{if(!a()||!qb.isConnected)return;qb.innerHTML='<div style="font-size:150px">❓</div>'},ms)},o:[f,...others([...A].filter(c=>!'ъь'.includes(c)),f,3)],a:f,oh:LET}},Math.min(10,new Set([...A].filter(c=>!'ъь'.includes(c))).size));
/* 19. Жоғалған әріп */
SA.missLetter=(P,F,A)=>QZ('🔍 Сөзге жетпейтін әріпті тап',(lv)=>{const L=P.filter(x=>F.some(f=>x.w.includes(f)));const x=pk1(L.length?L:P);const ids=[...x.w].map((c,i)=>i).filter(i=>F.includes(x.w[i]));const i=ids.length?pk1(ids):rnd(0,x.w.length-1);const a=x.w[i];
 const q=[...x.w].map((c,j)=>j===i?'<span class="slot" style="display:inline-grid;width:80px;height:96px;vertical-align:middle;font-size:50px">?</span>':c).join('');
 return{q:(lv<3?PIC(x.e,110):'')+W(q,90),o:[a,...others([...A].filter(c=>!'ъь'.includes(c)),a,lv===1?2:3)],a,oh:v=>`<span style="font-size:52px;padding:0 14px">${v}</span>`}});
/* 20. Сөз құрастыр (әріптен) */
SA.buildWord=(P)=>(box,T,lv)=>ROUNDS(box,6,(b,k,hd)=>{const L=P.filter(x=>lv===1?x.w.length<=3:lv===2?x.w.length<=5:x.w.length>=4);const x=pkU(L.length?L:P);const w=[...x.w];
 hd.innerHTML='🔤 Суретке қарап, сөзді құра';b.style.flexDirection='column';b.style.alignItems='center';b.style.justifyContent='space-around';b.append(el('div','',PIC(x.e,110)));
 const row=el('div','');row.style.cssText='display:flex;gap:8px';const sl=w.map(()=>{const z=el('div','');z.style.cssText='width:90px;height:100px;border-radius:16px;border:4px dashed #90a4ae;display:grid;place-items:center;font-size:56px;font-weight:900';row.append(z);return z});b.append(row);
 let f=0;const mark=()=>sl.forEach((z,i)=>z.style.boxShadow=i===f?'0 0 0 6px #fdd83599':'');mark();const dec=lv===1?[]:pick('абдежзйклмнопрстшқғ'.split('').filter(c=>!w.includes(c)),lv===2?2:3);
 const tiles=el('div','tiles');shuffle([...w,...dec]).forEach(c=>{const t=el('button','tile',c);t.onclick=()=>{if(t.classList.contains('used'))return;if(c===w[f]){beep('tap');sl[f].textContent=c;sl[f].style.border='4px solid #43a047';t.classList.add('used');f++;mark();if(f>=w.length)T.done()}else T.bad(t)};tiles.append(t)});b.append(tiles);
 T.reveal=()=>{const t=[...tiles.children].find(z=>!z.classList.contains('used')&&z.textContent===w[f]);t&&t.classList.add('hint')}},{title:''});
/* 21. Сурет пен сөз */
SA.picWord=(P)=>QZ('🖼️ Суретке сәйкес сөзді тап',(lv)=>{const x=pk1(P);const sim=P.filter(y=>y.w!==x.w&&(lv<3||y.w[0]===x.w[0]||y.w.length===x.w.length));const o=[x.w,...pick(sim.length>=3?sim:P.filter(y=>y.w!==x.w),3).map(y=>y.w)];
 return{q:PIC(x.e,170),o:o.slice(0,lv===1?3:4),a:x.w,oh:WO}});
/* 22. Сөзді оқы, суретті тап (2 оқушы) */
SA.wordDuel=(P)=>RC('Сөзді оқы да, суретін тап!',(lv)=>{const x=pk1(P);return{q:W(x.w,lv===3?54:64),o:[x.e,...pick([...new Set(P.map(y=>y.e))].filter(e=>e!==x.e),lv===1?2:3)],a:x.e,oh:EO}});
/* 23. Арқан тартыс: сурет → сөз */
SA.ropeWord=(P)=>DU('Суретке сәйкес сөзді оқы',(lv)=>{const x=pk1(P);return{q:PIC(x.e,110),o:[x.w,...pick(P.filter(y=>y.w!==x.w),lv===1?1:2).map(y=>y.w)],a:x.w,oh:NOs}});
/* 24. Миллионер */
SA.million=(P,A,S)=>(box,T,lv)=>MILLION(box,T,[
 k=>{const x=pk1(P);return{q:`${x.e} — бұл не?`,o:[x.w,...pick(P.filter(y=>y.w!==x.w),3).map(y=>y.w)],a:x.w}},
 k=>{const x=pk1(P);return{q:`«${x.w}» сөзінде неше буын бар?`,o:SYLO(syl(x.w).length,4),a:syl(x.w).length}},
 k=>{const x=pk1(P);return{q:`«${x.w}» сөзі қай әріптен басталады?`,o:[x.w[0],...others([...A],x.w[0],3)],a:x.w[0]}},
 k=>{const l=pk1([...A].filter(c=>!'ъь'.includes(c)));return{q:`«${l.toUpperCase()}» — дауысты ма, дауыссыз ба?`,o:['дауысты','дауыссыз'],a:VOW.includes(l)?'дауысты':'дауыссыз'}},
 k=>{if(!S||!S.length){const x=pk1(P);return{q:`«${x.w}» сөзінде неше әріп бар?`,o:near(x.w.length,1,10),a:x.w.length}}const s=pk1(S);const n=s.t.replace(/[–.,!?]/g,'').trim().split(/\s+/).length;return{q:`«${s.t}» — неше сөз?`,o:near(n,1,7),a:n}}]);
/* 25. 1 минутта оқы (буындар немесе сөздер) */
SA.minute=(listFn,what)=>(box,T,lv)=>{const start=()=>{const W2=gwrap(box);W2.style.justifyContent='flex-start';W2.style.gap='14px';
 const top=el('div','');top.style.cssText='display:flex;gap:20px;align-items:center';const tm=el('div','big','⏱ 60');const cnt=el('div','big','✅ 0');const go=el('button','btn','▶ Бастау');const stop=el('button','btn alt','⏹ Оқып болдым');stop.style.display='none';top.append(tm,cnt,go,stop);
 const g=el('div','');g.style.cssText=`display:grid;grid-template-columns:repeat(${L3(lv,6,6,5)},1fr);gap:12px;width:100%;flex:1;align-content:start;filter:blur(8px);transition:filter .3s`;
 const items=shuffle(listFn(lv)).slice(0,L3(lv,24,30,25));items.forEach(t=>{const c=el('button','',t);c.style.cssText=`background:#fff;border:4px solid #e3e8f2;border-radius:18px;font-size:${L3(lv,46,40,34)}px;font-weight:900;padding:10px 4px;color:#1a2a5a`;c.onclick=()=>{if(!run)return;c.dataset.ok=c.dataset.ok?'':'1';c.style.background=c.dataset.ok?'#43a047':'#fff';c.style.color=c.dataset.ok?'#fff':'#1a2a5a';n=g.querySelectorAll('[data-ok="1"]').length;cnt.textContent='✅ '+n};g.append(c)});
 W2.append(el('div','qline',`⏱ 1 минутта ${what} оқы. Оқығаныңды бас — жасыл болады`),top,g);let run=false,left=60,n=0;const alive=T.alive();
 const fin=()=>{run=false;T.end(box,{em:'📖',title:`${n} ${what} оқылды!`,text:'Жарайсың! Қайта оқып, нәтижеңді жақсарт',again:start})};
 go.onclick=()=>{run=true;go.style.display='none';stop.style.display='';g.style.filter='none';const tick=()=>{if(!alive()||!run||!W2.isConnected)return;left--;tm.textContent='⏱ '+left;if(left<=0)return fin();setTimeout(tick,1000)};setTimeout(tick,1000)};stop.onclick=()=>{if(run)fin()}};start()};
/* буындар тізімі (рұқсат етілген әріптерден) */
function sylList(A){const V=[...A].filter(c=>VOW.includes(c)&&c!=='и'&&c!=='э'),C=[...A].filter(c=>!VOW.includes(c)&&!'ъьщцёюяһ'.includes(c)&&c!=='у');const out=new Set();
 C.forEach(c=>V.forEach(v=>{if(('қғ'.includes(c)&&FRONTV.includes(v))||('кг'.includes(c)&&BACKV.includes(v)))return;out.add(c+v);out.add(v+c)}));return [...out]}
/* 26. Суретті сөйлем: суреттің орнына сөз */
SA.rebusSent=(R)=>QZ('🧩 Суреттің орнына сөзді қой',(lv)=>{const r=pk1(R);return{q:W(r.t.replace('*',`<span style="font-size:90px">${r.e}</span>`),64),o:[r.a,...others(R.map(x=>x.a),r.a,lv===1?1:2)],a:r.a,oh:WO}},{rounds:8});
/* 27. Жұмбақ */
const RIDDLES=[['Ақ көрпе жерді жапты. Бұл не?','❄️'],['Түнде шығады, күндіз жоғалады, аспанда жымыңдайды.','⭐'],['Ұзын құлақ, қысқа құйрық, секіріп жүреді.','🐰'],['Мияулап сүт ішеді, тышқан аулайды.','🐱'],
 ['Ызыңдап ұшады, гүлден бал жинайды.','🐝'],['Аспаннан тамшылап жауады, жерді суарады.','🌧️'],['Түнде жарық береді, үйде ілулі тұрады.','💡'],['Өзі ыстық, өзі жарық, аспанда тұрады.','☀️'],
 ['Суда жүзеді, қанаты жоқ, қабыршағы бар.','🐟'],['Баласы — лақ, сақалы бар.','🐐'],['Жапалақ емес, түнде көреді, «үһү» дейді.','🦉'],['Үсті — ағаш, асты — ағаш, ортасында — тілі бар. Ішінде әні бар.','🪕']];
SA.riddle=(box,T,lv)=>TEAMQ(box,{rounds:10,title:'🤔 Жұмбақты шеш!',gen:k=>{const [q,a]=RIDDLES[(k*7+rnd(0,11))%RIDDLES.length];return{q:`<div style="font-size:38px;font-weight:800;max-width:1100px;line-height:1.35">${q}</div>`,o:[a,...others(RIDDLES.map(x=>x[1]),a,3)],a,oh:EO}}});

/* ===== 1–3 сынып сайттарынан қосылған қазақ тілі ойындары ===== */
const RTX0=[
{t:'Қыс',b:'Қыс келді. Далаға ақ қар жауды. Балалар шана алып, тауға шықты. Асан мен Айгүл шанамен сырғанады. Олар қардан аққала жасады. Аққаланың мұрны – сәбіз, көзі – көмір. Балалар қатты қуанды. Кешке олар үйге қайтты. Анасы оларға ыстық шай берді.'},
{t:'Мысық',b:'Біздің үйде мысық бар. Оның аты – Мими. Мимидің жүні ақ, көзі көк. Ол сүт ішкенді жақсы көреді. Мими доппен ойнайды. Түнде ол тышқан аулайды. Мен мысығымды жақсы көремін. Оны күнде тамақтандырамын.'},
{t:'Бақша',b:'Атамның бақшасы бар. Бақшада алма, алмұрт, өрік өседі. Жазда біз атама көмектесеміз. Ағаштарға су құямыз. Күзде алма піседі. Біз алманы теріп, себетке саламыз. Апам алмадан тәтті тосап жасайды. Біз тосапты шаймен ішеміз.'},
{t:'Мектеп',b:'Мен мектепке барамын. Менің мектебім үлкен әрі әдемі. Сыныбымызда жиырма бес оқушы бар. Мұғаліміміз – Сәуле апай. Ол бізге оқуды, жазуды үйретеді. Үзілісте біз доп ойнаймыз. Мен мектебімді жақсы көремін.'}];;
const RTX1=[
{t:'Менің отбасым',b:'Менің атым Әли. Мен жеті жастамын. Біздің отбасымыз үлкен. Менің әкем, анам, атам, апам, әпкем және кішкентай інім бар. Әкем – жүргізуші. Ол күнде таңертең жұмысқа ерте кетеді. Анам – мұғалім. Ол мектепте балаларды оқытады. Кешке анам дәмді тамақ пісіреді. Мен анама көмектесемін. Дастарқанға нан мен шай қоямын. Атам мен апам бізбен бірге тұрады. Атам маған ертегі айтады. Апам бауырсақ пісіреді. Оның бауырсағы өте дәмді. Әпкем Айгерім бесінші сыныпта оқиды. Ол маған сабақ дайындауға көмектеседі. Інім Нұрлан әлі кішкентай. Ол ойыншықпен ойнағанды жақсы көреді. Мен інімді ренжітпеймін. Демалыс күндері біз бәріміз бірге саябаққа барамыз. Онда әткеншек тебеміз, балмұздақ жейміз. Кешке үйге қайтып, бірге шай ішеміз. Мен отбасымды қатты жақсы көремін. Жазда біз ауылға барып, туыстарымызды көреміз. Ауылда нағашы атам мен нағашы апам тұрады. Олар бізді көргенде қатты қуанады. Мен нағашы атамның атына мінемін. Қыста біз үйде отырып, бірге ойын ойнаймыз. Анам маған: «Отбасың – сенің қорғаның», – дейді. Отбасы – менің бақытым.'},
{t:'Ақтөс',b:'Біздің үйде кішкентай күшік бар. Оның аты – Ақтөс. Ақтөстің жүні қара, ал төсі аппақ. Сондықтан оны Ақтөс деп атадық. Күшікті маған туған күніме атам сыйлады. Мен оған өте қуандым. Ақтөс таңертең ерте оянады. Ол менің бөлмеме келіп, мені оятады. Мен оған тамақ беремін. Ақтөс сүт пен ет жегенді жақсы көреді. Түстен кейін біз аулада ойнаймыз. Мен допты лақтырамын, ал Ақтөс оны жүгіріп әкеледі. Ол өте жылдам жүгіреді. Кейде Ақтөс мысықты қуып кетеді. Бірақ мысық ағашқа шығып кетеді. Ақтөс төменде тұрып үреді. Кешке күшігім шаршайды. Ол өз орнына жатып ұйықтайды. Түнде Ақтөс үйімізді күзетеді. Бөтен адам келсе, ол қатты үреді. Ақтөс – менің ең жақсы досым. Мен оған қамқор боламын. Оны жуындырып, таза ұстаймын. Ақтөс те мені жақсы көреді. Мен мектептен келгенде, ол есіктің алдында күтіп тұрады. Мені көргенде құйрығын бұлғап, айнала секіреді. Қыста біз екеуміз қарда ойнаймыз. Ақтөс қарды жегенді ұнатады. Анам: «Күшік – үйдің күзетшісі», – дейді. Мен Ақтөсімді ешқашан ренжітпеймін.'},
{t:'Мектеп',b:'Мен биыл бірінші сыныпқа бардым. Біздің мектеп үлкен әрі әдемі. Мектептің алдында гүлдер өседі. Бірінші қыркүйекте анам мені мектепке апарды. Мен жаңа киім кидім, қолыма гүл ұстадым. Сол күні біз мұғаліммен таныстық. Біздің мұғаліміміздің аты – Әсем апай. Ол өте мейірімді. Әсем апай бізге әріп пен санды үйретеді. Біз оқуды, жазуды үйреніп жатырмыз. Сабақта мен қолымды көтеріп жауап беремін. Дұрыс жауап берсем, апай мені мақтайды. Біздің сыныпта жиырма бала оқиды. Менің жаңа достарым көп. Үзілісте біз бірге ойнаймыз. Кейде асханаға барып, тамақ ішеміз. Мектепте кітапхана да бар. Онда кітап көп. Мен кітапханадан ертегі кітабын алдым. Сабақтан кейін үйге келіп, үй тапсырмасын орындаймын. Мен мектепті жақсы көремін. Мен жақсы оқып, көп білім алғым келеді. Бізде дене шынықтыру сабағы да бар. Онда біз жүгіреміз, секіреміз, доп ойнаймыз. Музыка сабағында ән саламыз. Еңбек сабағында қағаздан әдемі гүл жасаймыз. Мен өскенде дәрігер болғым келеді. Ол үшін қазір жақсы оқуым керек.'},
{t:'Көктем',b:'Қыс өтіп, көктем келді. Күн жылынып, аспан ашық болды. Күн көзі жарқырап тұр. Қар ери бастады. Көшеде кішкентай бұлақтар ағады. Балалар суға қағаз қайық жүргізеді. Ағаштар бүршік жарды. Көп ұзамай жап-жасыл жапырақтар шықты. Жерден көк шөп көктеді. Алғашқы гүлдер ашылды. Олардың түсі сары, қызыл, көк. Жылы жақтан құстар ұшып келді. Қарлығаштар ұя салды. Құстар таңертеңнен әндетеді. Ара мен көбелектер гүлден гүлге қонады. Көктемде ауылда жұмыс көп. Адамдар жерді жыртып, егін егеді. Бақшаға көкөніс отырғызады. Мен атама бақшада көмектестім. Біз сәбіз бен қияр ектік. Көктемде Наурыз мерекесі болады. Біз наурыз көже ішеміз. Барлығы бір-бірін құттықтайды. Мен көктемді өте жақсы көремін. Көктемде күн ұзарады, түн қысқарады. Балалар далада ұзақ ойнайды. Біз велосипед тебеміз, доп ойнаймыз. Кейде жаңбыр жауып, аспанда кемпірқосақ шығады. Ол өте әдемі болады. Кемпірқосақта жеті түс бар. Мен оны суретке саламын. Көктем – жаңару мезгілі.'},
{t:'Алма ағашы',b:'Атамның үлкен бағы бар. Бақта көп ағаш өседі. Ең әдемі ағаш – алма ағашы. Оны атам көп жыл бұрын отырғызған. Көктемде алма ағашы гүлдейді. Оның гүлдері аппақ әрі хош иісті. Гүлдерге аралар ұшып келеді. Жазда ағашта кішкентай жасыл алмалар пайда болады. Атам ағашқа күнде су құяды. Мен де атама көмектесемін. Шелекпен су тасимын. Күзде алмалар піседі. Олар үлкен, қызыл әрі тәтті болады. Біз бүкіл отбасымызбен алма тереміз. Әкем баспалдақпен жоғары шығады. Мен төменде тұрып, себетті ұстаймын. Апам алмадан тосап жасайды. Анам алмадан бәліш пісіреді. Біз алманы көршілерімізге де береміз. Атам маған: «Ағашты күтсең, ол саған жеміс береді», – деді. Мен де өскенде бақ отырғызамын. Қыста ағаш демалады. Оның бұтақтарына қар жиналады. Атам ағашты суықтан қорғау үшін түбін орап қояды. Құстар бұтаққа қонып, дән іздейді. Мен құстарға жем саламын. Көктем келгенде, ағаш қайтадан гүлдейді. Мен алма ағашын өте жақсы көремін.'},
{t:'Жаз',b:'Жаз келді. Мектепте сабақ бітті. Ұзақ демалыс басталды. Біз отбасымызбен ауылға бардық. Ауылда атам мен әжем тұрады. Олар бізді қуанып қарсы алды. Ауылдың ауасы таза. Айнала жап-жасыл. Ауылдың шетінде үлкен өзен ағады. Мен күнде досым Ерланмен өзенге барамын. Біз суға шомыламыз, жағада ойнаймыз. Атам маған балық аулауды үйретті. Мен бірінші рет үлкен балық ұстадым. Әжем ол балықты қуырып берді. Ауылда мал көп. Әжем сиыр сауады. Мен бұзауға шөп беремін. Кейде атаммен бірге атқа мінемін. Ат өте ақылды жануар. Кешке барлығымыз далада отырып шай ішеміз. Аспанда жұлдыздар жарқырайды. Атам маған жұлдыздар туралы әңгіме айтады. Жаз өте тез өтіп кетті. Мен ауылды сағынамын. Үйге қайтарда әжем бізге құрт пен ірімшік салып берді. Атам мені құшақтап, маңдайымнан сүйді. Мен оларға: «Сау болыңыздар! Мен сіздерді сағынамын!» – дедім. Қалаға келген соң, мен досыма ауыл туралы айтып бердім. Келесі жазда тағы барамын.'},
{t:'Қоян',b:'Орманда кішкентай ақ қоян тұрады. Оның құлағы ұзын, құйрығы қысқа. Қоянның аяқтары мықты. Ол өте жылдам жүгіреді және алысқа секіреді. Жазда қоянның жүні сұр болады. Ал қыста оның жүні аппақ болады. Сондықтан қыста оны қардан көру қиын. Бұл қоянды қасқыр мен түлкіден қорғайды. Қоян шөп, жапырақ жейді. Ол сәбіз бен қырыққабатты өте жақсы көреді. Қыста ағаштың қабығын кеміреді. Қоян өте сақ жануар. Ол кішкене дыбысты да естиді. Қауіп төнсе, бірден қашып кетеді. Бір күні қоян орманда серуендеп жүрді. Кенет бұтаның артынан түлкі шықты. Қоян қорқып кетті. Бірақ ол тез жүгіріп, інге кіріп кетті. Түлкі оны ұстай алмады. Қоян інінде тыныш отырды. Кешке ол балаларына оралды. Олар бірге ұйықтады. Қоянның балалары кішкентай әрі әлсіз. Анасы оларды сүтімен асырайды. Балалары тез өседі. Бір айдан кейін олар өздері шөп жей бастайды. Анасы оларға жылдам жүгіруді үйретеді. Көп ұзамай кішкентай қояндар да қасқыр мен түлкіден қашып құтыла алады.'},
{t:'Досым',b:'Менің досым – Арман. Біз бір үйде тұрамыз. Арман екеуміз бір сыныпта оқимыз. Біз бір партада отырамыз. Арман өте ақылды әрі мейірімді бала. Ол математиканы жақсы біледі. Кейде маған есеп шығаруға көмектеседі. Мен оған сурет салуды үйретемін. Бір күні мен қаламымды үйде ұмытып кеттім. Арман маған өз қаламын берді. Мен оған рахмет айттым. Сабақтан кейін біз бірге үйге қайтамыз. Жолда әңгімелесеміз. Демалыс күндері біз аулада доп ойнаймыз. Қыста шана тебеміз, аққала жасаймыз. Бірде Арман ауырып қалды. Ол мектепке келмеді. Мен оның үйіне бардым. Оған сабақты түсіндіріп бердім. Арман қатты қуанды. Достар бір-біріне көмектесуі керек. Біз ешқашан ұрыспаймыз. Егер ренжісек, тез татуласамыз. Мен Арманмен дос болғаныма қуаныштымын. Мен досымның туған күніне сыйлық дайындадым. Оған өзім салған суретті сыйладым. Суретте біз екеуміз доп ойнап жүрміз. Арман сыйлыққа қатты қуанды. Ол суретті бөлмесінің қабырғасына ілді. Атам маған: «Жүз сомың болғанша, жүз досың болсын», – деді. Нағыз дос – үлкен байлық.'},
{t:'Нан',b:'Нан – ең қымбат ас. Біз нанды күнде жейміз. Бірақ нан дастарқанға оңайлықпен келмейді. Көктемде диқан жерді жыртады. Содан кейін егін егеді. Жаңбыр жауып, күн жылытады. Егін өсіп, жайқалып тұрады. Күзде бидай піседі. Диқан бидайды орып, жинайды. Бидайды диірменге апарады. Диірменде бидайдан ұн жасайды. Ұнды наубайханаға жеткізеді. Наубайшы ұннан қамыр илейді. Қамырдан нан пісіреді. Таңертең дүкенге жып-жылы нан келеді. Анам дүкеннен нан сатып алады. Біздің үйде апам да нан пісіреді. Оның таба наны өте дәмді. Апам маған: «Нанды қоқысқа тастама, нанды баспа», – дейді. Себебі нанға көп адамның еңбегі сіңген. Мен нанды құрметтеймін. Нанды ысырап етпеймін. Дастарқаннан нанның қиқымын да жинап аламын. Нанды бір қолмен үзбейді, екі қолмен сындырады. Нанды төңкеріп қоймайды. Қонақ келсе, алдымен нан ұсынады. Біздің халық нанды киелі ас деп санайды. Атам нан туралы көп мақал біледі. Ол маған: «Нан – дастарқан көркі», – дейді. Мен бұл сөзді есіме сақтадым. Нан – береке.'},
{t:'Күз',b:'Жаз өтіп, күз келді. Ауа салқындады. Күн бұрынғыдай қатты қыздырмайды. Аспанды сұр бұлт жапты. Жиі жаңбыр жауады. Ағаштардың жапырақтары сарғайды. Кейбір жапырақтар қызарып кетті. Жел соққанда жапырақтар жерге түседі. Жер сары кілем жайғандай әдемі болды. Мен жапырақтарды жинап, гүлшоқ жасадым. Құстар жылы жаққа ұша бастады. Тырналар аспанда тізіліп ұшады. Аю қысқы ұйқыға дайындалады. Тиін жаңғақ жинап, ағаш қуысына тығады. Күзде бақта жеміс-жидек піседі. Алма, алмұрт, жүзім жинаймыз. Бақшадан картоп пен сәбіз аламыз. Күз – молшылық мезгілі. Біз күзде жылы киімдерімізді киеміз. Қолшатыр алып жүреміз. Күзде мектепте оқу басталады. Біз жаңа білім аламыз. Күз маған өте ұнайды. Күздің түстері әдемі. Күзде біз сыныппен саябаққа бардық. Мұғалім бізге ағаштардың атын айтып берді. Біз емен, қайың, терек ағаштарын көрдік. Әр балаға бір жапырақтан жинап алдық. Сыныпқа келіп, жапырақтардан сурет жасадық. Мұғалім біздің жұмысымызды мақтады. Мен күзді жақсы көремін.'}];;

/* 1 минутта оқы: мәтін — мәтінді таңда, 60 сек оқы, тоқтаған сөзді бас */
SA.readText=(lists)=>(box,T,lv)=>{const L=lists(lv);let cur=0;const start=()=>{const W2=gwrap(box);W2.style.justifyContent='flex-start';W2.style.gap='14px';
 W2.append(el('div','qline','⏱ 1 минутта мәтін оқы: мәтінді таңда да, «Бастау» бас'));
 const lst=el('div','');lst.style.cssText='display:flex;flex-wrap:wrap;gap:12px;justify-content:center;max-width:1300px';
 const draw=()=>{lst.innerHTML='';L.forEach((x,i)=>{const b=el('button','opt',`${i+1}. ${x.t}<small style="font-size:18px;color:#6b7590;margin-left:6px">${x.b.split(/\s+/).filter(w=>w!=='–').length} сөз</small>`);if(i===cur){b.style.borderColor='#fdd835';b.style.boxShadow='0 0 0 5px #fdd835'}b.onclick=()=>{cur=i;draw()};lst.append(b)})};draw();
 const go=el('button','btn','▶ Бастау');go.style.cssText+=';height:76px;font-size:30px;background:#43a047;box-shadow:0 6px 0 #2e7d32';W2.append(lst,go);
 go.onclick=()=>{const X=L[cur];W2.innerHTML='';const alive=T.alive();
  const top=el('div','');top.style.cssText='display:flex;gap:22px;align-items:center;width:100%;max-width:1300px';const bar=el('div','');bar.style.cssText='flex:1;height:26px;border-radius:14px;background:#ffffff4d;overflow:hidden';bar.innerHTML='<i style="display:block;height:100%;width:100%;background:#fdd835;transition:width 1s linear"></i>';
  const tm=el('div','big','60');tm.style.cssText+=';min-width:110px;text-align:center;background:#0003;border-radius:16px;padding:0 14px';const stop=el('button','btn','✅ Оқып болдым');stop.style.cssText+=';background:#e53935;box-shadow:0 5px 0 #b71c1c';top.append(bar,tm,stop);
  const card=el('div','');card.style.cssText='background:#fff;color:#1a2a5a;border-radius:28px;padding:20px 40px;font-size:40px;font-weight:800;line-height:1.5;max-width:1400px;width:100%;flex:1;min-height:0;overflow:hidden;box-shadow:0 8px 0 #0002';
  card.innerHTML=`<div style="text-align:center;color:#e53935;font-weight:900;margin-bottom:4px"></div><div class="rb2"></div>`;card.firstChild.textContent=X.t;const body=card.querySelector('.rb2');const ws=[];
  X.b.split(/(\s+)/).forEach(p=>{if(!p)return;if(/^\s+$/.test(p)){body.append(p);return}const sp=el('span','',p);if(p!=='–'&&p!=='-')ws.push(sp);body.append(sp)});
  W2.append(top,card);requestAnimationFrame(()=>{let fs=40;while(fs>18&&card.scrollHeight>card.clientHeight+2){fs-=2;card.style.fontSize=fs+'px'}});
  let left=60,run=true;const tick=()=>{if(!alive()||!run)return;left--;tm.textContent=left;bar.firstChild.style.width=(left/60*100)+'%';if(left<=0)return fin();setTimeout(tick,1000)};setTimeout(tick,1000);
  function fin(){if(!run)return;run=false;stop.style.display='none';tm.textContent='⏹';
   const ask=el('div','qline','👆 Қай сөзге дейін оқыдың? Соңғы оқыған сөзіңді бас');W2.insertBefore(ask,card);
   ws.forEach((sp,i)=>{sp.style.cursor='pointer';sp.style.borderRadius='8px';sp.onclick=()=>{ws.forEach((x,j)=>x.style.background=j<=i?'#c8e6c9':'');
    T.later(()=>T.end(box,{em:'📖',title:`${i+1} сөз оқыдың!`,text:`«${X.t}» · ${ws.length} сөздің ${i+1}-і оқылды`,again:start}),700)}})}
  stop.onclick=fin}};start()};
/* Сөз пойызы: вагондағы сөзді оқып үлгер */
SA.train=(lists)=>(box,T,lv)=>{const start=()=>{const W2=gwrap(box);W2.style.justifyContent='flex-start';W2.style.gap='16px';const alive=T.alive();
 const words=shuffle(lists(lv)).slice(0,10);let i=0,anim=null,paused=false;const dur=L3(lv,6500,5000,3800);
 const top=el('div','');top.style.cssText='display:flex;gap:20px;align-items:center';const cnt=el('div','big','');const pb=el('button','btn alt','⏸ Тоқтату');top.append(cnt,pb);
 W2.append(el('div','qline','🚂 Пойыз сөздерді алып келеді — сөзді дауыстап оқып үлгер!'),top);
 const sc=el('div','');sc.style.cssText='position:relative;width:100%;flex:1;min-height:0;border-radius:26px;overflow:hidden;background:linear-gradient(#bfe6ff,#eaf7ff 62%,#9ccc65 62%)';
 sc.innerHTML='<div style="position:absolute;right:6%;top:18px;font-size:70px">☀️</div><div style="position:absolute;left:12%;top:40px;font-size:60px;animation:skfloat 6s infinite">☁️</div><div style="position:absolute;left:52%;top:20px;font-size:50px;animation:skfloat 8s infinite">☁️</div><div style="position:absolute;left:0;right:0;bottom:46px;height:12px;background:repeating-linear-gradient(90deg,#6d4c41 0 18px,transparent 18px 34px),#8d6e63"></div>';W2.append(sc);
 pb.onclick=()=>{if(!anim)return;paused=!paused;paused?anim.pause():anim.play();pb.textContent=paused?'▶ Жалғастыру':'⏸ Тоқтату'};
 const next=()=>{if(!alive()||!sc.isConnected)return;if(i>=words.length)return T.end(box,{em:'🚂',title:`${words.length} сөз оқыдың!`,text:'Жарайсың! Жылдамырақ деңгейді байқап көр',again:start});
  cnt.textContent=`🚃 ${i+1} / ${words.length}`;
  const tr=el('div','');tr.style.cssText='position:absolute;bottom:58px;left:0;display:flex;align-items:flex-end;gap:6px;white-space:nowrap';
  tr.innerHTML=`<div style="background:#ef5350;border:5px solid #b71c1c;border-radius:16px;padding:14px 34px;font-size:78px;font-weight:900;color:#fff;text-shadow:0 4px 0 #0004;position:relative">${words[i]}<i style="position:absolute;left:18%;bottom:-26px;width:40px;height:40px;border-radius:50%;background:#37474f;border:6px solid #90a4ae"></i><i style="position:absolute;right:18%;bottom:-26px;width:40px;height:40px;border-radius:50%;background:#37474f;border:6px solid #90a4ae"></i></div><div style="font-size:150px;line-height:.8;transform:scaleX(-1)">🚂</div>`;
  sc.append(tr);const Wd=sc.clientWidth,w=tr.offsetWidth;anim=tr.animate([{transform:`translateX(${-w}px)`},{transform:`translateX(${Wd}px)`}],{duration:dur,easing:'linear'});
  anim.onfinish=()=>{tr.remove();i++;next()}};next()};start()};
const TRW={l1:['Ата','Ана','Апа','Аға','Әке','Ит','Ат','Ай','Үй','Ал','Сан','Тау','Алу','Қар','Тас','Нан','Бал','Көл','Гүл','Күн','Су','Сол','Қаз','Доп','Ет','Сүт','Шай','Тұз','Көз','Қол'],
 l2:['Арна','Аула','Таза','Сана','Салу','Азық','Қазы','Қозы','Мата','Бала','Қала','Дала','Кеме','Алма','Есік','Бақа','Ағаш','Қоян','Ешкі','Айна','Шана','Тары','Дана','Ұшақ'],
 l3:['Қасық','Мықты','Тамыз','Тамақ','Қамыс','Балық','Қалам','Кітап','Мысық','Сәбіз','Қауын','Сағат','Жылан','Тышқан','Жаңбыр','Қарбыз','Мектеп','Терезе','Орындық','Дәптер'],
 l4:['Кітапхана','Құмырсқа','Көбелек','Қарлығаш','Аққала','Велосипед','Жапырақ','Қарындаш','Сырғанақ','Шыршалар','Мұғалім','Дүкенші','Балмұздақ','Күнбағыс','Бүлдірген','Жолбарыс','Түйеқұс','Қырыққабат','Тасбақа','Шегіртке','Ұшқыштар','Сарымсақ']};
/* Жуан ба, жіңішке ме? */
const HSW={h:['ата','бала','қала','доп','қар','тау','ұшақ','балық','мысық','қоян','алма','жаңбыр','бұлт','қауын','шана','тышқан','сағат','торт','қаз','қасық','орындық','құлақ','арба','жылан'],
 s:['әке','кеме','ешкі','есік','гүл','күн','үй','өрік','сәбіз','терезе','жүзім','түлкі','көл','бөлме','дәптер','іні','сүт','терек','мектеп','күшік','көбелек','бүркіт','кілем','көйлек']};
SA.hardsoft=(box,T,lv)=>ROUNDS(box,3,(b,k,hd)=>{hd.innerHTML='🐘 Сөз <b style="color:#90caf9">жуан</b> ба, <b style="color:#f48fb1">жіңішке</b> ме? Себетке сал';const n=L3(lv,3,4,5);
 const items=[...pick(HSW.h,n).map(w=>({h:`<span style="font-size:40px;font-weight:900">${w}</span>`,bin:'h'})),...pick(HSW.s,n).map(w=>({h:`<span style="font-size:40px;font-weight:900">${w}</span>`,bin:'s'}))];
 K.bins(b,T,{items,bins:[{id:'h',h:'🐘 Жуан',c:'#e3f2fd'},{id:'s',h:'🐭 Жіңішке',c:'#fce4ec'}],title:''})});
