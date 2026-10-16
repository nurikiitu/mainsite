/* neuroUstaz · 1-сынып · Математика · 1-тоқсан · 30 ойын
   Әр ойын: GAMES[id]=(box,T,lv)=>{...}; lv = 1 (жеңіл), 2 (орташа), 3 (қиын) */
const L3=(lv,a,b,c)=>[a,b,c][lv-1];
const BIG=(t,fs=96,c='#1a2a5a')=>`<span style="font-size:${fs}px;font-weight:900;color:${c};line-height:1">${t}</span>`;
const FRUIT=['🍎','🍐','🍊','🍋','🍓','🍒','🥕','🍌'];
const SHAPES=['circle','square','triangle','rect'];
const SHN={circle:'дөңгелек',square:'шаршы',triangle:'үшбұрыш',rect:'тіктөртбұрыш'};
const SHC=['#ef5350','#42a5f5','#fdd835','#66bb6a','#ab47bc','#ff9800'];
const SHCN={'#ef5350':'қызыл','#42a5f5':'көк','#fdd835':'сары','#66bb6a':'жасыл','#ab47bc':'күлгін','#ff9800':'қызғылт сары'};
const optBig=v=>`<span style="font-size:54px;padding:0 18px">${SG(v)}</span>`;
function rot(h,deg){return `<div style="transform:rotate(${deg}deg);display:grid;place-items:center">${h}</div>`}
/* бос шашыранды орындар (қабаттаспайды) */
function spots(n,cols=5,rows=3){return pick([...Array(cols*rows).keys()],n).map(i=>({x:(i%cols+.5)/cols*100+rnd(-4,4),y:(Math.floor(i/cols)+.5)/rows*100+rnd(-6,6)}))}
function scatter(e,n,w=640,h=330,fs=64){const P=spots(n,n>10?6:5,3);return `<div style="position:relative;width:${w}px;height:${h}px;background:#f3f8ff;border:4px solid #d6e4f7;border-radius:26px">${P.map(p=>`<span style="position:absolute;left:${p.x}%;top:${p.y}%;transform:translate(-50%,-50%);font-size:${fs}px;line-height:1">${e}</span>`).join('')}</div>`}

/* ===== Бүкіл сынып: екі топ кезекпен жауап береді ===== */
function TEAMQ(box,{rounds=10,gen,title}){const start=()=>{const W=gwrap(box);W.style.justifyContent='flex-start';W.style.gap='14px';
 const tm=el('div','teams',`<div class="team t0">🔴 1-топ<b>0</b></div><div class="team t1">🔵 2-топ<b>0</b></div>`);const hd=el('div','qline',title);hd.style.fontSize='30px';
 const st=prog(W,rounds);const qb=el('div','');qb.style.cssText='flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;width:100%;min-height:0';
 const ob=el('div','');ob.style.cssText='display:flex;gap:16px;flex-wrap:wrap;justify-content:center';W.append(tm,hd,qb,ob);W.insertBefore(st,hd);
 const sc=[0,0];let k=0,turn=0,cur;const TS=tm.querySelectorAll('.team');
 const paint=()=>TS.forEach((t,i)=>{t.classList.toggle('on',i===turn);t.querySelector('b').textContent=sc[i]});
 const show=()=>{st.set(k);paint();cur=gen(k);qb.innerHTML='';if(typeof cur.q==='function')cur.q(qb);else qb.innerHTML=cur.q;ob.innerHTML='';
  shuffle(cur.o).forEach(v=>{const b=typeof v==='number'&&!cur.oh?ncard(v):el('button','opt',cur.oh?cur.oh(v):v);b.dataset.v=v;if(cur.oh){b.style.height='auto';b.style.minHeight='84px';b.style.padding='8px 18px'}
   b.onclick=()=>{if(ob.dataset.l)return;ob.dataset.l=1;if(String(v)===String(cur.a)){T.ok(b);sc[turn]++}else{T.bad(b);[...ob.children].forEach(x=>{if(x.dataset.v===String(cur.a))x.classList.add('hint')})}
    paint();T.later(()=>{delete ob.dataset.l;k++;turn^=1;if(k<rounds)show();else{const w=sc[0]===sc[1]?'Тең түсті! 🤝':(sc[0]>sc[1]?'🔴 1-топ жеңді!':'🔵 2-топ жеңді!');T.end(box,{em:'🏆',title:w,text:`🔴 ${sc[0]} : ${sc[1]} 🔵`,again:start})}},1300)};ob.append(b)})};
 T.reveal=()=>[...ob.children].forEach(x=>{if(x.dataset.v===String(cur.a))x.classList.add('hint')});show()};start()}

/* ===== 2 оқушы: көлік жарысы ===== */
function raceDuel(box,def){const alive=T.alive();const GOAL=6;let over=false;const sc=[0,0];box.innerHTML='';const d=el('div','duel');box.append(d);
 d.append(el('div','',`<div class="qline" style="font-size:22px;color:var(--mut);margin-top:6px">🏎️ ${def.title}</div>`));
 const tr=el('div','');tr.style.cssText='margin:6px 20px 0;border-radius:22px;background:#5d6b7c;padding:10px 70px 10px 20px;position:relative;flex:none';
 const lanes=[0,1].map(i=>{const l=el('div','');l.style.cssText=`height:58px;position:relative;border-bottom:${i?0:4}px dashed #fff8`;l.innerHTML=`<span style="position:absolute;left:0;top:50%;transform:translate(0,-50%) scaleX(-1);font-size:48px;transition:left .45s">${i?'🚙':'🏎️'}</span>`;tr.append(l);return l.firstChild});
 tr.insertAdjacentHTML('beforeend','<span style="position:absolute;right:14px;top:50%;transform:translateY(-50%);font-size:52px">🏁</span>');d.append(tr);
 const sides=el('div','dsides');d.append(sides);
 const S=[0,1].map(i=>{const s=el('div','ds s'+i,`<div class="h">${i?'🔵 2-оқушы':'🔴 1-оқушы'} · <b class="sc">0</b> / ${GOAL}</div><div class="q"></div><div class="os"></div>`);sides.append(s);return s});
 const draw=()=>S.forEach((s,i)=>{s.querySelector('.sc').textContent=sc[i];lanes[i].style.left=`calc(${sc[i]/GOAL*100}% - ${sc[i]/GOAL*50}px)`});
 const ask=i=>{if(!alive()||over)return;const s=S[i];let t,g=0;do{t=def.gen()}while(s._l===t.q&&g++<6);s._l=t.q;s.querySelector('.q').innerHTML=t.q;const os=s.querySelector('.os');os.innerHTML='';
  shuffle(t.o).forEach(v=>{const b=typeof v==='number'&&!t.oh?ncard(v,'sm'):el('button','opt',t.oh?t.oh(v):v);if(t.oh){b.style.height='auto';b.style.padding='8px'}
   b.onclick=()=>{if(over||s.classList.contains('lock'))return;
    if(String(v)===String(t.a)){T.ok(b);sc[i]++;draw();if(sc[i]>=GOAL){over=true;S[i].classList.add('win');return T.later(()=>T.end(box,{em:'🏁',title:(i?'🔵 2-оқушы':'🔴 1-оқушы')+' бірінші келді!',text:`🔴 ${sc[0]} : ${sc[1]} 🔵`,again:()=>raceDuel(box,def)}),600)}setTimeout(()=>ask(i),400)}
    else{T.bad(b);s.classList.add('lock');setTimeout(()=>{s.classList.remove('lock');ask(i)},1300)}};os.append(b)})};
 draw();ask(0);ask(1)}

/* ===== мысал генераторлары ===== */
function addEx(lv){const max=L3(lv,5,10,10);const op=lv===1?'+':(Math.random()<.5?'+':'-');let a,b,r;if(op==='+'){r=rnd(1,max);a=rnd(0,r);b=r-a}else{a=rnd(1,max);b=rnd(0,a);r=a-b}
 if(lv===3&&Math.random()<.6){const hideA=Math.random()<.5;return{q:BIG(`${hideA?'?':a} ${SG(op)} ${hideA?b:'?'} = ${r}`,80),o:near(hideA?a:b,0,10),a:hideA?a:b}}
 return{q:BIG(`${a} ${SG(op)} ${b} = ?`,80),o:near(r,0,max),a:r}}

/* ===== ДИСПЛЕЙ КӨМЕКШІЛЕРІ ===== */
function domino(a,b,s=86){return `<div style="display:flex;align-items:center;background:#fff;border:4px solid #2b3a55;border-radius:16px;padding:4px;gap:4px">${dots(a,s).replace('class="dots"','class="dots" style="border:none"')}<div style="width:4px;align-self:stretch;background:#2b3a55;border-radius:2px"></div>${dots(b,s).replace('class="dots"','class="dots" style="border:none"')}</div>`}
function pencil(w,c){return `<svg width="${w+40}" height="54" viewBox="0 0 ${w+40} 54"><rect x="4" y="12" width="${w}" height="30" rx="6" fill="${c}"/><rect x="4" y="12" width="${w}" height="10" rx="5" fill="#ffffff55"/><path d="M${w+4} 12 L${w+36} 27 L${w+4} 42Z" fill="#f6c89f"/><path d="M${w+26} 22 L${w+36} 27 L${w+26} 32Z" fill="#333"/><rect x="4" y="12" width="14" height="30" rx="4" fill="#f48fb1"/></svg>`}
function rulerSvg(s,e,item){const cm=62,w=10*cm+60;let t=`<svg width="${w}" height="190" viewBox="0 0 ${w} 190">`;
 const x=i=>30+i*cm;t+=item==='rib'?`<rect x="${x(s)}" y="40" width="${(e-s)*cm}" height="30" rx="6" fill="#ec407a"/><rect x="${x(s)}" y="40" width="${(e-s)*cm}" height="10" rx="5" fill="#ffffff55"/>`
  :`<g transform="translate(${x(s)},28)"><rect x="0" y="12" width="${(e-s)*cm-26}" height="30" rx="6" fill="#42a5f5"/><path d="M${(e-s)*cm-26} 12 L${(e-s)*cm} 27 L${(e-s)*cm-26} 42Z" fill="#f6c89f"/><path d="M${(e-s)*cm-8} 23 L${(e-s)*cm} 27 L${(e-s)*cm-8} 31Z" fill="#333"/></g>`;
 t+=`<rect x="10" y="96" width="${w-20}" height="80" rx="10" fill="#ffe082" stroke="#e0a800" stroke-width="3"/>`;
 for(let i=0;i<=10;i++){t+=`<line x1="${x(i)}" y1="96" x2="${x(i)}" y2="126" stroke="#5d4300" stroke-width="3"/><text x="${x(i)}" y="160" text-anchor="middle" font-size="26" font-weight="900" font-family="Nunito" fill="#5d4300">${i}</text>`;if(i<10)t+=`<line x1="${x(i)+cm/2}" y1="96" x2="${x(i)+cm/2}" y2="112" stroke="#5d4300" stroke-width="2"/>`}
 t+=`<line x1="${x(s)}" y1="30" x2="${x(s)}" y2="100" stroke="#e53935" stroke-width="2" stroke-dasharray="5 5"/><line x1="${x(e)}" y1="30" x2="${x(e)}" y2="100" stroke="#e53935" stroke-width="2" stroke-dasharray="5 5"/>`;return t+'</svg>'}
function scaleSvg(l,r,tilt,ll='',rl=''){const a=tilt*12;return `<svg width="760" height="330" viewBox="0 0 760 330"><rect x="350" y="120" width="60" height="180" rx="8" fill="#8d6e63"/><rect x="250" y="292" width="260" height="22" rx="10" fill="#6d4c41"/>
 <g transform="rotate(${a} 380 120)"><rect x="90" y="112" width="580" height="16" rx="8" fill="#5d4037"/>
 <g transform="rotate(${-a} 140 120)"><line x1="140" y1="120" x2="140" y2="190" stroke="#555" stroke-width="3"/><path d="M60 190 H220 Q200 230 140 230 Q80 230 60 190Z" fill="#b0bec5"/><text x="140" y="180" text-anchor="middle" font-size="76">${l}</text><text x="140" y="262" text-anchor="middle" font-size="30" font-weight="900" font-family="Nunito" fill="#1a2a5a">${ll}</text></g>
 <g transform="rotate(${-a} 620 120)"><line x1="620" y1="120" x2="620" y2="190" stroke="#555" stroke-width="3"/><path d="M540 190 H700 Q680 230 620 230 Q560 230 540 190Z" fill="#b0bec5"/><text x="620" y="180" text-anchor="middle" font-size="76">${r}</text><text x="620" y="262" text-anchor="middle" font-size="30" font-weight="900" font-family="Nunito" fill="#1a2a5a">${rl}</text></g></g>
 <circle cx="380" cy="120" r="14" fill="#fdd835"/></svg>`}
function bucket(n,max=10,lab=''){const h=200,lv=Math.round(n/max*(h-20));return `<div style="text-align:center"><svg width="190" height="240" viewBox="0 0 190 240"><path d="M20 20 H170 L150 225 H40Z" fill="#eceff1" stroke="#90a4ae" stroke-width="6"/>
 <clipPath id="bk${n}${lab}"><path d="M23 23 H167 L147 222 H43Z"/></clipPath><rect x="0" y="${225-lv}" width="190" height="${lv}" fill="#42a5f5" clip-path="url(#bk${n}${lab})"/>${[...Array(max)].map((_,i)=>`<line x1="150" y1="${225-(i+1)*(h-20)/max}" x2="168" y2="${225-(i+1)*(h-20)/max}" stroke="#90a4ae" stroke-width="2"/>`).join('')}</svg><div style="font-size:30px;font-weight:900">${lab}</div></div>`}
function jars(n){return `<div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center;max-width:760px">${[...Array(n)].map(()=>`<div style="text-align:center"><div style="font-size:70px;line-height:1">🫙</div><div style="font-size:22px;font-weight:900;color:#1e88e5">1 л</div></div>`).join('')}</div>`}
/* сызықтар суреті */
function lineSvg(k){const W=620,H=200;const dot=(x,y,l)=>`<circle cx="${x}" cy="${y}" r="11" fill="#1a2a5a"/><text x="${x}" y="${y-22}" text-anchor="middle" font-size="34" font-weight="900" font-family="Nunito" fill="#e53935">${l}</text>`;
 const ar=(x,y,dir)=>`<path d="M${x} ${y} l${-26*dir} -14 M${x} ${y} l${-26*dir} 14" stroke="#1a2a5a" stroke-width="7" stroke-linecap="round" fill="none"/>`;let b='';
 if(k==='нүкте')b=dot(310,110,'А');
 if(k==='түзу')b=`<line x1="40" y1="110" x2="580" y2="110" stroke="#1a2a5a" stroke-width="7" stroke-linecap="round"/>`+ar(586,110,1)+ar(34,110,-1);
 if(k==='сәуле')b=`<line x1="90" y1="110" x2="580" y2="110" stroke="#1a2a5a" stroke-width="7" stroke-linecap="round"/>`+ar(586,110,1)+dot(90,110,'О');
 if(k==='кесінді')b=`<line x1="110" y1="110" x2="510" y2="110" stroke="#1a2a5a" stroke-width="7" stroke-linecap="round"/>`+dot(110,110,'А')+dot(510,110,'В');
 if(k==='қисық сызық')b=`<path d="M40 140 C140 20 220 200 320 100 S500 40 580 120" stroke="#1a2a5a" stroke-width="7" fill="none" stroke-linecap="round"/>`;
 return `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" style="background:#f3f8ff;border:4px solid #d6e4f7;border-radius:26px">${b}</svg>`}
function segFig(n){const R=110,cx=160,cy=130;if(n===1)return `<svg width="320" height="260"><line x1="40" y1="130" x2="280" y2="130" stroke="#1a2a5a" stroke-width="7"/><circle cx="40" cy="130" r="9"/><circle cx="280" cy="130" r="9"/></svg>`;
 if(n===2)return `<svg width="320" height="260"><polyline points="40,200 160,50 280,200" fill="none" stroke="#1a2a5a" stroke-width="7"/>${[[40,200],[160,50],[280,200]].map(p=>`<circle cx="${p[0]}" cy="${p[1]}" r="9"/>`).join('')}</svg>`;
 const pts=[...Array(n)].map((_,i)=>[cx+R*Math.cos(-Math.PI/2+i*2*Math.PI/n),cy+R*Math.sin(-Math.PI/2+i*2*Math.PI/n)]);
 return `<svg width="320" height="260"><polygon points="${pts.map(p=>p.join(',')).join(' ')}" fill="#e3f2fd" stroke="#1a2a5a" stroke-width="7"/>${pts.map(p=>`<circle cx="${p[0]}" cy="${p[1]}" r="9"/>`).join('')}</svg>`}
/* фигуралардан суреттер: [svg, қолданылған фигуралар, {фигура: саны}] */
const PICS=[
 [`<svg width="300" height="300" viewBox="0 0 300 300"><path d="M150 30 L270 130 H30Z" fill="#ef5350"/><rect x="60" y="130" width="180" height="150" fill="#ffca28"/><rect x="125" y="190" width="50" height="90" fill="#8d6e63"/></svg>`,['triangle','square','rect'],{triangle:1}],
 [`<svg width="300" height="300" viewBox="0 0 300 300"><path d="M150 20 L200 90 H100Z" fill="#ef5350"/><rect x="100" y="90" width="100" height="150" fill="#90caf9"/><circle cx="150" cy="140" r="26" fill="#fff"/><path d="M100 200 L60 260 H100Z M200 200 L240 260 H200Z" fill="#ef5350"/></svg>`,['triangle','rect','circle'],{triangle:3}],
 [`<svg width="300" height="300" viewBox="0 0 300 300"><path d="M150 20 L230 120 H70Z M150 70 L250 190 H50Z" fill="#43a047"/><rect x="130" y="190" width="40" height="90" fill="#8d6e63"/></svg>`,['triangle','rect'],{triangle:2}],
 [`<svg width="300" height="300" viewBox="0 0 300 300"><rect x="40" y="110" width="220" height="90" rx="6" fill="#42a5f5"/><rect x="90" y="60" width="120" height="60" fill="#90caf9"/><circle cx="90" cy="215" r="34" fill="#37474f"/><circle cx="210" cy="215" r="34" fill="#37474f"/></svg>`,['rect','circle'],{circle:2}],
 [`<svg width="300" height="300" viewBox="0 0 300 300"><rect x="90" y="30" width="120" height="100" fill="#b0bec5"/><circle cx="125" cy="75" r="14" fill="#1e88e5"/><circle cx="175" cy="75" r="14" fill="#1e88e5"/><rect x="70" y="140" width="160" height="120" fill="#78909c"/><path d="M150 0 L165 30 H135Z" fill="#ef5350"/></svg>`,['square','circle','rect','triangle'],{circle:2}],
 [`<svg width="300" height="300" viewBox="0 0 300 300"><circle cx="150" cy="150" r="70" fill="#fdd835"/>${[...Array(8)].map((_,i)=>{const a=i*Math.PI/4,x=150+110*Math.cos(a),y=150+110*Math.sin(a);return `<path d="M${x} ${y} L${150+80*Math.cos(a-.25)} ${150+80*Math.sin(a-.25)} L${150+80*Math.cos(a+.25)} ${150+80*Math.sin(a+.25)}Z" fill="#ff9800"/>`}).join('')}</svg>`,['circle','triangle'],{triangle:8}]];

/* ================== ОЙЫНДАР ================== */

/* 1. Шарларды жар */
GAMES.balloons=(box,T,lv)=>GM.balloons({from:lv===3?0:1,to:L3(lv,5,10,10)}).build(box,T);

/* 2. Себетке жина */
GAMES.basket=(box,T,lv)=>ROUNDS(box,6,(b,k,hd)=>{
 const f1=FRUIT[rnd(0,FRUIT.length-1)],f2=FRUIT.filter(x=>x!==f1)[rnd(0,FRUIT.length-2)];
 const need=lv===3?{[f1]:rnd(1,5),[f2]:rnd(1,4)}:{[f1]:rnd(L3(lv,1,3,0),L3(lv,5,10,0))};
 hd.innerHTML='🧺 Себетке салу керек: '+Object.entries(need).map(([e,n])=>`<b style="color:#e53935">${n}</b> ${e}`).join(' және ');
 b.style.alignItems='center';const tree=el('div','');tree.style.cssText='flex:1;height:100%;background:linear-gradient(#e8f5e9,#c8e6c9);border-radius:28px;display:flex;flex-wrap:wrap;align-content:center;justify-content:center;gap:10px;padding:20px;border:4px solid #a5d6a7';
 const bsk=el('div','');bsk.style.cssText='width:520px;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px';
 const inb=el('div','');inb.style.cssText='width:480px;min-height:230px;background:#fff8e1;border:6px solid #d7a35a;border-radius:24px 24px 90px 90px;display:flex;flex-wrap:wrap;align-content:flex-end;justify-content:center;gap:4px;padding:14px';
 const chk=el('button','btn','✅ Тексеру');bsk.append(el('div','',`<div style="font-size:90px;line-height:1">🧺</div>`),inb,chk);b.append(tree,bsk);
 const items=[];Object.entries(need).forEach(([e,n])=>{for(let i=0;i<n+rnd(2,4);i++)items.push(e)});
 if(lv===3)for(let i=0;i<2;i++)items.push(FRUIT.filter(x=>!(x in need))[i]);
 shuffle(items).forEach(e=>{const f=el('button','',e);f.style.cssText='font-size:62px;line-height:1;padding:4px;transition:transform .15s';f.dataset.e=e;
  f.onclick=()=>{beep('tap');(f.parentNode===tree?inb:tree).append(f);f.style.fontSize=f.parentNode===inb?'50px':'62px'};tree.append(f)});
 chk.onclick=()=>{const got={};inb.querySelectorAll('button').forEach(x=>got[x.dataset.e]=(got[x.dataset.e]||0)+1);
  const ok=Object.keys(got).every(e=>e in need)&&Object.entries(need).every(([e,n])=>got[e]===n);
  if(ok){T.ok(chk);chk.disabled=true;T.done()}else{T.bad(chk);toast('Себетті қайта санап шық 🙂','#e53935')}};
 T.reveal=()=>toast('Керек: '+Object.entries(need).map(([e,n])=>n+' '+e).join(', '),'#c28a00')});

/* 3. Жұп тап */
GAMES.memory=(box,T,lv)=>GM.memory({title:'🃏 Жұбын тап! Цифр мен саны бірдейін аш',pairs:()=>{
 const nums=pick([...Array(L3(lv,5,10,10))].map((_,i)=>i+1),L3(lv,5,6,6));const e=EM[rnd(0,EM.length-1)];
 return nums.map(n=>{const g=`<div style="display:flex;flex-wrap:wrap;gap:2px;justify-content:center;max-width:150px;font-size:${n>6?24:30}px;line-height:1.1">${e.repeat(n)}</div>`;
  if(lv===1)return[BIG(n,90),g];if(lv===2)return[BIG(n,90),dots(n,120)];return[dots(n,120),`<div style="transform:scale(.8);display:flex">${hand(n,110)}</div>`]})}}).build(box,T);

/* 4. Қай жақта көп? */
GAMES.more=(box,T,lv)=>duel(box,{title:'Қай жақта көп? Белгіні таңда: >, <, =',gen:()=>{const max=L3(lv,5,10,10),a=rnd(1,max);let c=rnd(1,max);if(Math.random()<.25)c=a;
 if(lv===3)return{q:BIG(`${a} <span class="slot" style="display:inline-grid;width:80px;height:80px;vertical-align:middle">?</span> ${c}`,90),o:['>','<','='],a:cmp(a,c),oh:optBig};
 const e=EM[rnd(0,EM.length-1)];return{q:`<div style="display:flex;align-items:center;gap:12px">${grp(e,a,40,240)}<div class="slot" style="width:60px;height:60px">?</div>${grp(e,c,40,240)}</div>`,o:['>','<','='],a:cmp(a,c),oh:optBig}}});

/* 5. Жылдам көз */
GAMES.flash=(box,T,lv)=>TEAMQ(box,{rounds:10,title:'👀 Мұқият қара! Неше зат болды?',gen:()=>{const n=rnd(L3(lv,1,3,5),L3(lv,5,8,10)),e=EM[rnd(0,EM.length-1)],ms=L3(lv,3000,2000,1200);
 return{q:qb=>{qb.innerHTML=scatter(e,n,700,340,64);const a=T.alive();setTimeout(()=>{if(!a()||!qb.isConnected)return;qb.innerHTML=`<div style="width:700px;height:340px;background:#e3f2fd;border:4px solid #d6e4f7;border-radius:26px;display:grid;place-items:center;font-size:150px">❓</div>`},ms)},o:near(n,1,10),a:n}}});

/* 6. Сан пойызы */
GAMES.train=(box,T,lv)=>GM.train({max:L3(lv,5,10,10),len:L3(lv,4,5,7)}).build(box,T);

/* 7. Жоғалған сан */
GAMES.missing=(box,T,lv)=>ROUNDS(box,6,(b,k)=>{const max=L3(lv,5,10,10),len=L3(lv,4,5,6),rev=lv>1&&k%2===1;const s=rev?rnd(len-1,max):rnd(0,max-len+1);
 const seq=[...Array(len)].map((_,j)=>rev?s-j:s+j);const mc=L3(lv,1,rnd(1,2),rnd(2,3));const miss=pick([...Array(len).keys()].filter(i=>lv===3||(i>0&&i<len-1)||len<4),mc);
 K.seq(b,T,{rounds:[{seq,miss,from:0,to:max,q:rev?'Кері санау: бос орынды толтыр ⬅':'Бос орынды толтыр ➡'}]})},{title:'🔍 Жоғалған санды тап'});

/* 8. Цифрды сыз */
GAMES.trace=(box,T,lv)=>ROUNDS(box,5,(b,k,hd)=>{const d=lv===1?rnd(1,5):rnd(0,9);hd.innerHTML=`✍️ <b style="color:#e53935">${d}</b> цифрын нүкте бойымен саусағыңмен сыз`;
 b.style.justifyContent='center';b.style.alignItems='center';const W=460,H=600;const wrap=el('div','');wrap.style.cssText=`position:relative;width:${W}px;height:${H}px;background:#fff;border:5px solid #d6e4f7;border-radius:30px;overflow:hidden`;
 const cv=document.createElement('canvas');cv.width=W;cv.height=H;cv.style.cssText='position:absolute;inset:0;touch-action:none;cursor:crosshair';wrap.append(cv);
 const side=el('div','');side.style.cssText='display:flex;flex-direction:column;gap:18px;align-items:center;margin-left:40px';const bar=el('div','');bar.style.cssText='width:300px;height:34px;background:#eef3fb;border-radius:17px;overflow:hidden';
 const fill=el('div','');fill.style.cssText='height:100%;width:0;background:#43a047;transition:width .2s';bar.append(fill);const clr=el('button','btn alt','🧽 Өшіру');side.append(el('div','big','Дайындық'),bar,clr);b.append(wrap,side);
 const x=cv.getContext('2d');const font=`900 ${L3(lv,560,520,480)}px Nunito, Arial`;const M=document.createElement('canvas');M.width=W;M.height=H;const mx=M.getContext('2d');
 let pts=[],hit=new Set(),done=false;
 const paint=()=>{x.clearRect(0,0,W,H);x.font=font;x.textAlign='center';x.textBaseline='middle';x.fillStyle='#eef3fb';x.fillText(d,W/2,H/2+20);x.setLineDash(lv===3?[4,18]:[6,14]);x.lineWidth=6;x.strokeStyle='#90a4ae';x.strokeText(d,W/2,H/2+20);x.setLineDash([])};
 const prep=()=>{mx.font=font;mx.textAlign='center';mx.textBaseline='middle';mx.fillStyle='#000';mx.fillText(d,W/2,H/2+20);const D=mx.getImageData(0,0,W,H).data;pts=[];for(let yy=0;yy<H;yy+=12)for(let xx=0;xx<W;xx+=12)if(D[(yy*W+xx)*4+3]>128)pts.push([xx,yy]);paint()};
 (document.fonts?document.fonts.ready:Promise.resolve()).then(prep);
 let dn=false,lp=null;const P=e=>{const r=cv.getBoundingClientRect();return[(e.clientX-r.left)*W/r.width,(e.clientY-r.top)*H/r.height]};
 cv.onpointerdown=e=>{dn=true;lp=P(e);cv.setPointerCapture(e.pointerId)};cv.onpointerup=cv.onpointercancel=()=>dn=false;
 cv.onpointermove=e=>{if(!dn||done)return;const p=P(e);x.strokeStyle='#1e88e5';x.lineWidth=34;x.lineCap=x.lineJoin='round';x.beginPath();x.moveTo(lp[0],lp[1]);x.lineTo(p[0],p[1]);x.stroke();
  pts.forEach((q,i)=>{if(!hit.has(i)){const dx=q[0]-p[0],dy=q[1]-p[1];if(dx*dx+dy*dy<30*30)hit.add(i)}});lp=p;const c=pts.length?hit.size/pts.length:0;fill.style.width=Math.min(100,c/.8*100)+'%';
  if(c>=.8&&!done){done=true;T.ok(wrap);T.done('Керемет жаздың! ✍️')}};
 clr.onclick=()=>{hit=new Set();fill.style.width='0';paint()};T.reveal=()=>toast('Цифрдың үстімен жүргіз 🙂','#c28a00')},{title:''});

/* 9. Сан ұста */
GAMES.catch=(box,T,lv)=>{const d=rnd(1,9);const N=(n,c)=>`<span style="font-size:110px;font-weight:900;color:${c||NCOL[n]||'#1a2a5a'};-webkit-text-stroke:2px #1a2a5a">${n}</span>`;
 const cfg=L3(lv,{title:`🧲 Тек <b style="color:#e53935">${d}</b> цифрын бас!`,good:()=>N(d),bad:()=>{let v;do{v=rnd(0,9)}while(v===d);return N(v)}},
  {title:'🧲 5-тен <b style="color:#e53935">үлкен</b> сандарды бас!',good:()=>N(rnd(6,10)),bad:()=>N(rnd(0,5))},
  {title:'🧲 3-тен үлкен, 7-ден <b style="color:#e53935">кіші</b> сандарды бас!',good:()=>N(rnd(4,6)),bad:()=>N(pick([0,1,2,3,7,8,9,10],1)[0])});
 GM.catcher({icon:'🧲',sec:L3(lv,30,30,25),...cfg}).build(box,T)};

/* 10. Көрші сандар */
GAMES.nbr=(box,T,lv)=>duel(box,{title:'Көрші сандарды тап',gen:()=>{const max=L3(lv,5,10,10),n=rnd(1,max-1);
 if(lv===3){const r=`${n-1} және ${n+1}`;const o=new Set([r]);while(o.size<4){const a=rnd(0,max-2);o.add(`${a} және ${a+2}`)}return{q:BIG(`? , ${n} , ?`,84)+'<div class="mut" style="font-size:24px">Екі көршісі</div>',o:[...o],a:r,oh:v=>`<span style="font-size:32px;padding:0 8px">${v}</span>`}}
 const bef=Math.random()<.5;return{q:BIG(bef?`? , ${n}`:`${n} , ?`,90)+`<div class="mut" style="font-size:24px">${bef?'Алдындағы сан':'Кейінгі сан'}</div>`,o:near(bef?n-1:n+1,0,max),a:bef?n-1:n+1}}});

/* 11. Үйшіктер */
GAMES.houses=(box,T,lv)=>ROUNDS(box,5,(b,k)=>{const n=lv===1?rnd(2,5):lv===2?rnd(6,8):rnd(9,10);const rows=[...Array(n-1)].map((_,i)=>[i+1,n-i-1]);
 const hideN=L3(lv,Math.min(2,rows.length),3,rows.length);const hi=pick([...rows.keys()],hideN);K.house(b,T,{n,pairs:rows.map((r,i)=>hi.includes(i)?[r[0],r[1],rnd(0,1)]:[r[0],r[1]])})},{title:'🏠 Сан үйінің терезелерін толтыр'});

/* 12. Екіге бөл */
GAMES.split=(box,T,lv)=>ROUNDS(box,6,(b,k,hd)=>{const n=lv===1?rnd(3,5):lv===2?rnd(6,8):rnd(8,10),a=rnd(1,n-1),c=n-a;
 hd.innerHTML=`🍎 <b>${n}</b> алманы бөл: <span style="color:#e53935">сол себетте ${a}</span>, қалғаны — оң себетте`;
 b.style.flexDirection='column';b.style.alignItems='center';b.style.justifyContent='space-around';
 const mid=el('div','');mid.style.cssText='display:flex;gap:10px;min-height:90px;flex-wrap:wrap;justify-content:center';
 const row=el('div','');row.style.cssText='display:flex;gap:60px';const bk=['🔴 Сол себет','🔵 Оң себет'].map(t=>{const w=el('div','');w.style.cssText='width:440px;min-height:230px;background:#fff8e1;border:6px solid #d7a35a;border-radius:24px 24px 90px 90px;display:flex;flex-direction:column;align-items:center;padding:10px';
  w.innerHTML=`<div style="font-size:24px;font-weight:900">${t}</div><div class="in" style="display:flex;flex-wrap:wrap;gap:4px;justify-content:center;flex:1;align-content:center"></div>`;row.append(w);return w.querySelector('.in')});
 const eq=el('div','big','');const chk=el('button','btn','✅ Тексеру');b.append(mid,row,eq,chk);
 for(let i=0;i<n;i++){const f=el('button','','🍎');f.style.cssText='font-size:64px;line-height:1';f.onclick=()=>{beep('tap');const p=f.parentNode;(p===mid?bk[0]:p===bk[0]?bk[1]:mid).append(f)};mid.append(f)}
 chk.onclick=()=>{const L=bk[0].children.length,R=bk[1].children.length;if(L===a&&R===c&&!mid.children.length){T.ok(chk);chk.disabled=true;eq.innerHTML=`${n} = <span style="color:#e53935">${a}</span> + <span style="color:#1e88e5">${c}</span>`;T.done()}else{T.bad(chk);toast(mid.children.length?'Барлық алманы себетке сал':'Сол себетте '+a+' алма болуы керек','#e53935')}};
 T.reveal=()=>toast(`Сол жақта ${a}, оң жақта ${c}`,'#c28a00')},{title:''});

/* 13. Домино */
GAMES.domino=(box,T,lv)=>ROUNDS(box,5,(b,k)=>{const n=lv===1?rnd(2,6):lv===2?rnd(5,10):rnd(6,10),mx=lv===3?6:5,cnt=lv===3?8:6;const tiles=[],seen=new Set();
 const good=[];for(let a=0;a<=Math.min(mx,n);a++){const c=n-a;if(c>=0&&c<=mx&&a<=c)good.push([a,c])}const gs=pick(good,Math.min(good.length,lv===1?1:2));
 gs.forEach(([a,c])=>{seen.add(a+'/'+c);tiles.push({h:Math.random()<.5?domino(a,c,80):domino(c,a,80),ok:true})});
 let g=0;while(tiles.length<cnt&&g++<300){const a=rnd(0,mx),c=rnd(0,mx);if(a+c===n||seen.has(Math.min(a,c)+'/'+Math.max(a,c)))continue;seen.add(Math.min(a,c)+'/'+Math.max(a,c));tiles.push({h:domino(a,c,80),ok:false})}
 K.pickAll(b,T,{tiles,cols:lv===3?4:3,size:220,title:`Нүктелерінің қосындысы <b style="color:#e53935;font-size:44px">${n}</b> болатын доминоны тап`})},{title:'🁣 Домино'});

/* 14. 10-ға жеткіз */
GAMES.to10=(box,T,lv)=>duel(box,{title:lv===1?'5-ке дейін неше жетпейді?':'10-ға дейін неше жетпейді?',gen:()=>{const N=lv===1?5:10,a=rnd(0,N-1),m=N-a;
 const q=lv===3&&Math.random()<.5?`? + ${a} = ${N}`:`${a} + ? = ${N}`;return{q:BIG(q,84),o:near(m,0,N),a:m}}});

/* 15. Сиқырлы қапшық */
GAMES.bag=(box,T,lv)=>TEAMQ(box,{rounds:10,title:'🎒 Қапшықта неше зат жасырынды?',gen:()=>{const n=rnd(L3(lv,2,5,7),L3(lv,5,8,10)),a=rnd(0,n-1),e=EM[rnd(0,EM.length-1)];
 return{q:`<div style="display:flex;align-items:center;gap:40px"><div style="text-align:center"><div style="font-size:150px;line-height:1">🎒</div><div class="big">❓</div></div><div style="font-size:70px;font-weight:900">+</div>${a?grp(e,a,50,330):`<div class="grp" style="width:330px;min-height:104px;font-size:30px;font-weight:900">бос</div>`}</div><div style="font-size:44px;font-weight:900;background:#fff3cd;border-radius:20px;padding:8px 28px">Барлығы: ${n} ${e}</div>`,o:near(n-a,0,10),a:n-a}}});

/* 16. Қосу ма, азайту ма? */
GAMES.sign=(box,T,lv)=>GM.quiz({icon:'❓',title:'❓ Қай белгі керек: + немесе −?',rounds:10,gen:()=>{const max=L3(lv,5,10,10);
 if(lv===3){let a,b,c,s1,s2,r,g=0;do{a=rnd(1,max);b=rnd(0,max);c=rnd(0,max);s1=pick(['+','-'],1)[0];s2=pick(['+','-'],1)[0];const m=s1==='+'?a+b:a-b;r=s2==='+'?m+c:m-c;
   const alt=['+ +','+ -','- +','- -'].filter(x=>{const[p,q]=x.split(' ');const mm=p==='+'?a+b:a-b;const rr=q==='+'?mm+c:mm-c;const okk=(p==='+'?a+b:a-b)>=0&&rr>=0&&mm<=10;return rr===r&&okk});
   if((s1==='+'?a+b:a-b)>=0&&(s1==='+'?a+b:a-b)<=10&&r>=0&&r<=10&&alt.length===1)break}while(g++<300);
  return{q:BIG(`${a} <span class="slot" style="display:inline-grid;width:70px;height:70px;vertical-align:middle">?</span> ${b} <span class="slot" style="display:inline-grid;width:70px;height:70px;vertical-align:middle">?</span> ${c} = ${r}`,80),o:['+ +','+ -','- +','- -'],a:s1+' '+s2,oh:v=>`<span style="font-size:46px;padding:0 10px">${v.split(' ').map(SG).join(' ')}</span>`}}
 let a,b,op,r;do{op=Math.random()<.5?'+':'-';a=rnd(1,max);b=rnd(1,max);r=op==='+'?a+b:a-b}while(r<0||r>max||(op==='+'?a-b:a+b)===r);
 return{q:BIG(`${a} <span class="slot" style="display:inline-grid;width:80px;height:80px;vertical-align:middle">?</span> ${b} = ${r}`,96),o:['+','-'],a:op,oh:optBig}}}).build(box,T);

/* 17. Сан сызығы */
GAMES.frog=(box,T,lv)=>GM.quiz({icon:'🐸',title:'🐸 Бақа қай санға секіріп келді?',rounds:8,gen:()=>{const max=L3(lv,5,10,10);let s,j1,j2=0,r,g=0;
 do{s=rnd(0,max);j1=rnd(1,3)*(lv>1&&Math.random()<.5?-1:1);if(lv===3)j2=rnd(1,3)*(Math.random()<.5?-1:1);r=s+j1+j2}while((r<0||r>max||s+j1<0||s+j1>max)&&g++<200);
 const st=900/(max+.6),x=30+s*st;let sv=nline(max,[],0,900);sv=sv.replace('</svg>',`<text x="${x}" y="88" text-anchor="middle" font-size="64">🐸</text></svg>`);
 const J=v=>`<span style="color:${v>0?'#e53935':'#1e63d6'}">${v>0?'+'+v:'−'+(-v)}</span>`;
 return{q:`<div style="font-size:40px;font-weight:900;margin-bottom:6px">Бақа <b>${s}</b>-ден ${J(j1)}${lv===3?' , сосын '+J(j2):''} секірді</div>${sv}`,o:near(r,0,max),a:r}}}).build(box,T);

/* 18. Арқан тартыс */
GAMES.rope=(box,T,lv)=>duel(box,{title:lv===1?'Қосу: 5 көлемінде':'Қосу және азайту: 10 көлемінде',gen:()=>addEx(lv)});

/* 19. Мысал жарысы */
GAMES.race=(box,T,lv)=>raceDuel(box,{title:'Мысалды шеш — көлігің алға жүреді!',gen:()=>{if(lv<3)return addEx(lv);let a,b,c,r;do{a=rnd(1,5);b=rnd(0,5);c=rnd(0,5);r=a+b+c}while(r>10);
 return Math.random()<.5?{q:BIG(`${a} + ${b} + ${c} = ?`,72),o:near(r,0,10),a:r}:addEx(3)}});

/* 20. Миллионер */
GAMES.million=(box,T,lv)=>{const PR=['100','200','500','1 000','5 000','10 000','50 000','100 000','500 000','1 000 000'];
 const GEN=[k=>{const n=rnd(1,L3(lv,5,7,10)),e=EM[rnd(0,EM.length-1)];return{q:`Неше ${e}?<div style="margin-top:10px">${grp(e,n,44,420)}</div>`,o:near(n,1,10),a:n}},
  k=>{const n=rnd(1,9);return{q:`<b>${n}</b> санынан кейін қай сан келеді?`,o:near(n+1,0,10),a:n+1}},
  k=>{const n=rnd(L3(lv,3,5,7),L3(lv,5,9,10)),a=rnd(1,n-1);return{q:`${n} = ${a} + ?`,o:near(n-a,0,10),a:n-a}},
  k=>addEx(lv),
  k=>{const t=pick(SHAPES,1)[0];return{q:`Мұнда қай фигура?<div style="margin-top:10px">${SHP(t,null,130)}</div>`,o:SHAPES.map(s=>SHN[s]),a:SHN[t]}},
  k=>{const a=rnd(0,10),b=rnd(0,10);return{q:`${a} ◻ ${b}`,o:['>','<','='],a:cmp(a,b),oh:optBig}},
  k=>{const w=pick([['🍉 Қарбыз','кг'],['🥛 Сүт','л'],['✏️ Қарындаш','см'],['🥔 Картоп','кг'],['🧃 Шырын','л']],1)[0];return{q:`${w[0]} — немен өлшейміз?`,o:['кг','л','см'],a:w[1]}}];
 const start=()=>{const W=gwrap(box,'linear-gradient(160deg,#1a237e,#3949ab)');W.style.flexDirection='row';W.style.gap='26px';W.style.color='#fff';
  const lad=el('div','');lad.style.cssText='width:250px;display:flex;flex-direction:column-reverse;gap:6px';PR.forEach((p,i)=>lad.append(el('div','',`<span style="opacity:.6">${i+1}</span> ${p}`)));
  [...lad.children].forEach(x=>x.style.cssText='font-size:22px;font-weight:900;padding:6px 14px;border-radius:12px;background:#ffffff14');
  const main=el('div','');main.style.cssText='flex:1;display:flex;flex-direction:column;align-items:center;justify-content:space-around;height:100%';
  const life=el('div','');life.style.cssText='display:flex;gap:14px';const qb=el('div','');qb.style.cssText='background:#fff;color:#1a2a5a;border-radius:30px;padding:24px 40px;font-size:40px;font-weight:900;text-align:center;min-width:700px;box-shadow:0 8px 0 #0004';
  const ob=el('div','');ob.style.cssText='display:grid;grid-template-columns:1fr 1fr;gap:16px;width:760px';main.append(life,qb,ob);W.append(main,lad);
  let k=0,cur,used={};const L=[['h','➗ 50/50'],['c','👥 Сыныптан сұрау'],['t','👩‍🏫 Мұғалім']];
  L.forEach(([id,t])=>{const b=el('button','',t);b.style.cssText='background:#fdd835;color:#1a2a5a;font-weight:900;font-size:20px;padding:12px 18px;border-radius:999px;box-shadow:0 5px 0 #c7a500';
   b.onclick=()=>{if(used[id])return;used[id]=1;b.style.opacity=.35;const bs=[...ob.children];
    if(id==='h')shuffle(bs.filter(x=>x.dataset.v!==String(cur.a))).slice(0,Math.max(0,bs.length-2)).forEach(x=>x.style.visibility='hidden');
    if(id==='c'){let rest=100;bs.forEach(x=>{const ok=x.dataset.v===String(cur.a);const p=ok?rnd(45,70):0;x.dataset.p=p;rest-=p});const wr=bs.filter(x=>x.dataset.v!==String(cur.a));wr.forEach((x,i)=>{const p=i===wr.length-1?rest:rnd(0,rest);x.dataset.p=p;rest-=p});
     bs.forEach(x=>x.insertAdjacentHTML('beforeend',`<small style="display:block;font-size:18px;color:#5c6bc0">${x.dataset.p}%</small>`))}
    if(id==='t')bs.forEach(x=>{if(x.dataset.v===String(cur.a))x.classList.add('hint')})};life.append(b)});
  const show=()=>{[...lad.children].forEach((x,i)=>{x.style.background=i===k?'#fdd835':i<k?'#43a04788':'#ffffff14';x.style.color=i===k?'#1a2a5a':'#fff'});
   cur=GEN[k<3?k%3:rnd(0,GEN.length-1)](k);qb.innerHTML=cur.q;ob.innerHTML='';
   shuffle(cur.o).slice(0,4).concat([]).forEach((v,i)=>{const b=el('button','opt',`<span style="color:#5c6bc0">${'ABCD'[i]}:</span>&nbsp;${cur.oh?cur.oh(v):v}`);b.dataset.v=v;b.style.cssText+='height:auto;min-height:84px;justify-content:flex-start;padding:10px 22px;color:#1a2a5a';
    b.onclick=()=>{if(ob.dataset.l)return;ob.dataset.l=1;if(String(v)===String(cur.a)){T.ok(b);T.later(()=>{delete ob.dataset.l;k++;if(k<PR.length)show();else T.end(box,{em:'💰',title:'МИЛЛИОНЕР! 🎉',text:'Барлық 10 сұраққа дұрыс жауап бердіңдер!',again:start})},900)}
     else{T.bad(b);[...ob.children].forEach(x=>{if(x.dataset.v===String(cur.a))x.classList.add('hint')});T.later(()=>T.end(box,{em:'💡',title:k?`Ұтыс: ${PR[k-1]} ұпай`:'Тағы байқап көрейік!',text:`${k} сұраққа дұрыс жауап берілді`,again:start}),1400)}};ob.append(b)});
   if(!cur.o.includes(cur.a)&&!cur.o.map(String).includes(String(cur.a)))show()};
  T.reveal=()=>[...ob.children].forEach(x=>{if(x.dataset.v===String(cur.a))x.classList.add('hint')});show()};start()};

/* 21. Фигураны тап */
GAMES.findshape=(box,T,lv)=>ROUNDS(box,4,(b,k)=>{const tg=SHAPES[(k+rnd(0,3))%(lv===1?3:4)];const types=lv===1?SHAPES.slice(0,3):SHAPES;
 const n=L3(lv,9,12,12),good=rnd(2,4);const tiles=[];for(let i=0;i<n;i++){const t=i<good?tg:pick(types.filter(x=>x!==tg),1)[0];const c=lv===1?{circle:'#29b6f6',square:'#ec407a',triangle:'#fdd835',rect:'#66bb6a'}[t]:SHC[rnd(0,SHC.length-1)];
  const s=lv===3?rnd(60,110):90;tiles.push({h:rot(SHP(t,c,s),lv>1?rnd(-30,30):0),ok:t===tg})}
 K.pickAll(b,T,{tiles,cols:L3(lv,6,6,6),size:L3(lv,170,150,150),title:`Барлық <b style="color:#e53935">${SHN[tg]}</b> фигурасын тап`})},{title:'🔺 Фигураны тап'});

/* 22. Сұрыпта */
GAMES.sortshape=(box,T,lv)=>ROUNDS(box,3,(b,k,hd)=>{const by=L3(lv,'shape',k%2?'color':'shape',['shape','color','size'][k]);const items=[];
 if(by==='shape'){const ts=pick(SHAPES,3);for(let i=0;i<9;i++){const t=ts[i%3];items.push({h:SHP(t,lv===1?null:SHC[rnd(0,5)],70),bin:t})}
  K.bins(b,T,{items,bins:ts.map(t=>({id:t,h:SHP(t,'#cfd8dc',40)+' '+SHN[t]})),title:''});hd.innerHTML='🗂️ Фигураларды <b style="color:#e53935">пішіні</b> бойынша сұрыпта'}
 if(by==='color'){const cs=pick(SHC.slice(0,4),3);for(let i=0;i<9;i++){const c=cs[i%3];items.push({h:SHP(pick(SHAPES.slice(0,3),1)[0],c,70),bin:c})}
  K.bins(b,T,{items,bins:cs.map(c=>({id:c,h:`<span style="display:inline-block;width:30px;height:30px;border-radius:50%;background:${c};vertical-align:middle"></span> ${SHCN[c]}`})),title:''});hd.innerHTML='🗂️ Фигураларды <b style="color:#e53935">түсі</b> бойынша сұрыпта'}
 if(by==='size'){for(let i=0;i<8;i++){const big=i%2===0;items.push({h:SHP(pick(SHAPES.slice(0,3),1)[0],SHC[rnd(0,5)],big?90:42),bin:big?'b':'s'})}
  K.bins(b,T,{items,bins:[{id:'b',h:'🐘 Үлкен'},{id:'s',h:'🐭 Кіші'}],title:''});hd.innerHTML='🗂️ Фигураларды <b style="color:#e53935">өлшемі</b> бойынша сұрыпта'}},{title:''});

/* 23. Нүкте, сызық, кесінді */
GAMES.lines=(box,T,lv)=>GM.quiz({icon:'📍',title:lv===3?'📍 Суретте неше кесінді бар?':'📍 Бұл не? Дұрыс атауын таңда',rounds:8,gen:()=>{
 if(lv===3){const n=pick([1,2,3,4,5,6],1)[0];return{q:segFig(n),o:near(n,1,6),a:n}}
 const K1=lv===1?['нүкте','түзу','қисық сызық']:['нүкте','түзу','қисық сызық','сәуле','кесінді'];const k=pick(K1,1)[0];
 return{q:lineSvg(k),o:K1,a:k,oh:v=>`<span style="font-size:30px;padding:0 6px">${v}</span>`}}}).build(box,T);

/* 24. Фигурадан сурет */
GAMES.build=(box,T,lv)=>ROUNDS(box,4,(b,k)=>{const pics=shuffle(PICS.filter(p=>lv===1?p[1].length<=2:lv===2?true:Object.keys(p[2]).length));const p=pics[k%pics.length];
 b.style.alignItems='center';b.style.justifyContent='center';const pic=el('div','',p[0]);pic.style.cssText='background:#f3f8ff;border:4px solid #d6e4f7;border-radius:30px;padding:20px';const side=el('div','side');b.append(pic,side);
 if(lv===3){const [sh,n]=Object.entries(p[2])[0];side.append(el('div','qline',`Суретте неше <b style="color:#e53935">${SHN[sh]}</b> бар?`));const ob=el('div','ncards');side.append(ob);
  near(n,1,10).forEach(v=>{const c=ncard(v);c.onclick=()=>{if(v===n){T.ok(c);T.done()}else T.bad(c)};ob.append(c)});T.reveal=()=>[...ob.children].forEach(c=>{if(+c.dataset.v===n)c.classList.add('hint')});return}
 K.pickAll(side,T,{tiles:SHAPES.map(t=>({h:SHP(t,null,80),ok:p[1].includes(t)})),cols:2,size:150,title:'Суретте қандай фигуралар бар? Бәрін тап'})},{title:'🧩 Фигурадан сурет'});

/* 25. Артығын тап */
GAMES.odd=(box,T,lv)=>TEAMQ(box,{rounds:10,title:'🚫 Қай фигура артық?',gen:()=>{const by=L3(lv,'shape',pick(['shape','color'],1)[0],pick(['shape','color','size'],1)[0]);
 const t=pick(SHAPES.slice(0,3),2),c=pick(SHC.slice(0,4),2);let it=[];
 if(by==='shape')it=[0,0,0,1].map(i=>SHP(t[i],c[0],100));if(by==='color')it=[0,0,0,1].map(i=>SHP(t[0],c[i],100));if(by==='size')it=[0,0,0,1].map(i=>SHP(t[0],c[0],i?50:110));
 const ids=it.map((h,i)=>'f'+i);const H=Object.fromEntries(ids.map((id,i)=>[id,it[i]]));return{q:`<div class="mut" style="font-size:26px">Үшеуі ұқсас, біреуі басқаша</div>`,o:ids,a:'f3',oh:v=>`<div style="width:150px;height:130px;display:grid;place-items:center">${H[v]}</div>`}}});

/* 26. Ұзын, қысқа */
GAMES.length=(box,T,lv)=>ROUNDS(box,5,(b,k)=>{const n=L3(lv,3,4,5),desc=lv===3&&k%2===1;const ws=pick([120,200,280,360,440,520,600],n).sort((x,y)=>x-y);const cs=pick(SHC,n);
 let items=ws.map((w,i)=>({h:pencil(w,cs[i])}));if(desc)items=items.reverse();
 K.order(b,T,{items,title:desc?'Ұзыннан <b style="color:#e53935">қысқаға</b> қарай бас':'Қысқадан <b style="color:#e53935">ұзынға</b> қарай бас'});
 b.querySelectorAll('button').forEach(x=>{x.style.minWidth='auto';x.style.height='auto';x.style.padding='14px 18px'})},{title:'📐 Ұзын, қысқа'});

/* 27. Сызғышпен өлше */
GAMES.ruler=(box,T,lv)=>GM.quiz({icon:'📏',title:'📏 Заттың ұзындығы неше сантиметр?',rounds:8,gen:()=>{let s=0,e;if(lv===1)e=rnd(1,5);else if(lv===2)e=rnd(2,10);else{s=rnd(1,4);e=rnd(s+2,10)}
 return{q:rulerSvg(s,e,Math.random()<.5?'rib':'pen'),o:near(e-s,1,10).map(v=>v+' см'),a:(e-s)+' см',oh:v=>`<span style="font-size:40px;padding:0 10px">${v}</span>`}}}).build(box,T);

/* 28. Таразы */
GAMES.scale=(box,T,lv)=>GM.quiz({icon:'⚖️',title:lv===3?'⚖️ Таразы теңесті. Қарбыз неше кг?':'⚖️ Қайсысы ауыр?',rounds:8,gen:()=>{const IT=['🍉','🍎','🎃','🍍','🥔','🧸','📚','🍐','🍊','⚽'];
 if(lv===1){const [a,c]=pick(IT,2),t=Math.random()<.5?1:-1;return{q:scaleSvg(a,c,t),o:[a,c],a:t>0?c:a,oh:v=>`<span style="font-size:70px">${v}</span>`}}
 if(lv===2){const [a,c]=pick(IT,2);let x=rnd(1,10),y=rnd(1,10);while(y===x)y=rnd(1,10);const cd=(e,w)=>`<div style="background:#fff;border:4px solid #d6e4f7;border-radius:28px;padding:18px 40px;text-align:center"><div style="font-size:110px;line-height:1">${e}</div><div style="font-size:44px;font-weight:900;background:#fff3cd;border-radius:14px;margin-top:8px">${w} кг</div></div>`;return{q:`<div style="display:flex;gap:80px">${cd(a,x)}${cd(c,y)}</div><div class="mut" style="font-size:24px">Салмағына қара!</div>`,o:[a,c],a:x>y?a:c,oh:v=>`<span style="font-size:70px">${v}</span>`}}
 const x=rnd(1,5),y=rnd(1,10-x);return{q:scaleSvg('🍉','🏋️',0,'? кг',`${x} кг + ${y} кг`),o:near(x+y,1,10).map(v=>v+' кг'),a:(x+y)+' кг',oh:v=>`<span style="font-size:40px;padding:0 10px">${v}</span>`}}}).build(box,T);

/* 29. Литр құй */
GAMES.litre=(box,T,lv)=>GM.quiz({icon:'🪣',title:lv===3?'🪣 Қай ыдыста су көп?':'🪣 Шелекке неше литр су құйылды?',rounds:8,gen:()=>{
 if(lv===3){let a=rnd(1,9),c=rnd(1,9);while(c===a)c=rnd(1,9);return{q:`<div style="display:flex;gap:60px;align-items:flex-end">${bucket(a,10,'А')}${bucket(c,10,'Ә')}</div><div class="mut" style="font-size:24px">Әр сызық — 1 литр</div>`,o:['А','Ә'],a:a>c?'А':'Ә',oh:v=>`<span style="font-size:48px;padding:0 20px">${v} ыдыс</span>`}}
 const n=rnd(1,L3(lv,5,10,10));return{q:`<div style="display:flex;gap:40px;align-items:center">${jars(n)}<div style="font-size:70px">➡</div>${bucket(n,10)}</div>`,o:near(n,1,10).map(v=>v+' л'),a:n+' л',oh:v=>`<span style="font-size:40px;padding:0 10px">${v}</span>`}}}).build(box,T);

/* 30. Дүкен */
GAMES.shop=(box,T,lv)=>duel(box,{title:lv===3?'Салыстыр: 1 дм = 10 см':'Немен өлшейміз?',gen:()=>{
 if(lv===3){const pairs=[['1 дм','10 см','='],['1 дм','8 см','>'],['12 см','1 дм','>'],['1 дм','15 см','<'],['6 см','1 дм','<'],['10 см','1 дм','='],['1 дм','9 см','>'],['2 дм','10 см','>']];const [a,c,r]=pick(pairs,1)[0];
  return{q:BIG(`${a} ◻ ${c}`,64),o:['>','<','='],a:r,oh:optBig}}
 const W=[['🍉','Қарбыздың салмағы','кг'],['🥔','Картоптың салмағы','кг'],['🍎','Алманың салмағы','кг'],['🥛','Сүттің көлемі','л'],['🧃','Шырынның көлемі','л'],['🪣','Шелектегі су','л']];
 const C=[['✏️','Қарындаштың ұзындығы','см'],['📏','Лентаның ұзындығы','см'],['🐛','Құрттың ұзындығы','см']];const [e,t,a]=pick(lv===1?W:W.concat(C),1)[0];
 return{q:`<div style="font-size:90px;line-height:1">${e}</div><div style="font-size:28px;font-weight:900">${t}</div>`,o:lv===1?['кг','л']:['кг','л','см'],a,oh:v=>`<span style="font-size:40px;padding:0 14px">${v}</span>`}}});
