/* neuroUstaz · ойындарға ортақ көмекшілер */
const L3=(lv,a,b,c)=>[a,b,c][lv-1];
const BIG=(t,fs=96,c='inherit')=>`<span style="font-size:${fs}px;font-weight:900;color:${c};line-height:1">${t}</span>`;
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
function TEAMQ(box,{rounds=10,gen,title}){const start=()=>{const SEEN=new Set();const W=gwrap(box);W.style.justifyContent='flex-start';W.style.gap='14px';
 const tm=el('div','teams',`<div class="team t0">🔴 1-топ<b>0</b></div><div class="team t1">🔵 2-топ<b>0</b></div>`);const hd=el('div','qline',title);hd.style.fontSize='30px';
 const st=prog(W,rounds);const qb=el('div','');qb.style.cssText='flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;width:100%;min-height:0';
 const ob=el('div','');ob.style.cssText='display:flex;gap:16px;flex-wrap:wrap;justify-content:center';W.append(tm,hd,qb,ob);W.insertBefore(st,hd);
 const sc=[0,0];let k=0,turn=0,cur;const TS=tm.querySelectorAll('.team');
 const paint=()=>TS.forEach((t,i)=>{t.classList.toggle('on',i===turn);t.querySelector('b').textContent=sc[i]});
 const show=()=>{st.set(k);paint();{let g=0;do{cur=gen(k)}while(SEEN.has(QK(cur))&&g++<40);SEEN.add(QK(cur))}qb.innerHTML='';if(typeof cur.q==='function')cur.q(qb);else qb.innerHTML=cur.q;ob.innerHTML='';
  shuffle(cur.o).forEach(v=>{const b=typeof v==='number'&&!cur.oh?ncard(v):el('button','opt',cur.oh?cur.oh(v):v);b.dataset.v=v;if(cur.oh){b.style.height='auto';b.style.minHeight='84px';b.style.padding='8px 18px'}
   b.onclick=()=>{if(ob.dataset.l)return;ob.dataset.l=1;if(String(v)===String(cur.a)){T.ok(b);sc[turn]++}else{T.bad(b);[...ob.children].forEach(x=>{if(x.dataset.v===String(cur.a))x.classList.add('hint')})}
    paint();T.later(()=>{delete ob.dataset.l;k++;turn^=1;if(k<rounds)show();else{const w=sc[0]===sc[1]?'Тең түсті! 🤝':(sc[0]>sc[1]?'🔴 1-топ жеңді!':'🔵 2-топ жеңді!');T.end(box,{em:'🏆',title:w,text:`🔴 ${sc[0]} : ${sc[1]} 🔵`,again:start})}},1300)};ob.append(b)})};
 T.reveal=()=>[...ob.children].forEach(x=>{if(x.dataset.v===String(cur.a))x.classList.add('hint')});show()};start()}

/* ===== 2 оқушы: көлік жарысы ===== */
function raceDuel(box,def){const alive=T.alive();const GOAL=6;let over=false;const sc=[0,0];box.innerHTML='';const d=el('div','duel');box.append(d);
 d.append(el('div','dhead',`🏎️ ${def.title}`));
 const tr=el('div','');tr.style.cssText='margin:8px 20px 0;border-radius:22px;background:#455a64;border:3px solid #ffffff40;padding:8px 70px 8px 20px;position:relative;flex:none';
 const lanes=[0,1].map(i=>{const l=el('div','');l.style.cssText=`height:54px;position:relative;border-bottom:${i?0:4}px dashed #fff8`;l.innerHTML=`<span style="position:absolute;left:0;top:50%;transform:translate(0,-50%) scaleX(-1);font-size:46px;transition:left .45s">${i?'🚙':'🏎️'}</span>`;tr.append(l);return l.firstChild});
 tr.insertAdjacentHTML('beforeend','<span style="position:absolute;right:14px;top:50%;transform:translateY(-50%);font-size:52px">🏁</span>');d.append(tr);
 const S=dSides(d,GOAL);
 const draw=()=>S.forEach((s,i)=>{S.dots(i,sc[i]);lanes[i].style.left=`calc(${sc[i]/GOAL*100}% - ${sc[i]/GOAL*50}px)`});
 const ask=i=>{if(!alive()||over)return;dAsk(S[i],def,()=>{sc[i]++;draw();if(sc[i]>=GOAL){over=true;S.stop();S[i].classList.add('win');return T.later(()=>T.end(box,{em:'🏁',title:DNAME(i)+' бірінші келді!',text:`🔴 ${sc[0]} : ${sc[1]} 🟢`,again:()=>raceDuel(box,def)}),600)}setTimeout(()=>ask(i),400)},()=>ask(i))};
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
function lineSvg(k,vr=0){const W=620,H=200;const dot=(x,y,l)=>`<circle cx="${x}" cy="${y}" r="11" fill="#1a2a5a"/><text x="${x}" y="${y-22}" text-anchor="middle" font-size="34" font-weight="900" font-family="Nunito" fill="#e53935">${l}</text>`;
 const ar=(x,y,dir)=>`<path d="M${x} ${y} l${-26*dir} -14 M${x} ${y} l${-26*dir} 14" stroke="#1a2a5a" stroke-width="7" stroke-linecap="round" fill="none"/>`;let b='';
 if(k==='нүкте')b=dot([310,180,450][vr],[110,120,100][vr],'АВС'[vr]);
 if(k==='түзу')b=`<line x1="40" y1="110" x2="580" y2="110" stroke="#1a2a5a" stroke-width="7" stroke-linecap="round"/>`+ar(586,110,1)+ar(34,110,-1);
 if(k==='сәуле')b=`<line x1="90" y1="110" x2="580" y2="110" stroke="#1a2a5a" stroke-width="7" stroke-linecap="round"/>`+ar(586,110,1)+dot(90,110,'О');
 if(k==='кесінді')b=`<line x1="110" y1="110" x2="510" y2="110" stroke="#1a2a5a" stroke-width="7" stroke-linecap="round"/>`+dot(110,110,'А')+dot(510,110,'В');
 if(k==='қисық сызық')b=`<path d="M40 140 C140 20 220 200 320 100 S500 40 580 120" stroke="#1a2a5a" stroke-width="7" fill="none" stroke-linecap="round"/>`;
 if(k!=='нүкте'&&vr)b=`<g transform="rotate(${vr===1?-14:12} 310 110) scale(.92) translate(25 9)">${b}</g>`;return `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" style="background:#f3f8ff;border:4px solid #d6e4f7;border-radius:26px">${b}</svg>`}
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


/* ===== 2–4-тоқсандарға арналған қосымша көмекшілер ===== */
const NO=v=>`<span style="font-size:44px;padding:0 10px">${v}</span>`;
const NOs=v=>`<span style="font-size:32px;padding:0 6px">${v}</span>`;
/* жуық нұсқалар: қадаммен */
function nearS(a,lo,hi,step=1,n=4){const s=new Set([a]);let g=0;while(s.size<n&&g++<300){const v=a+step*rnd(-3,3);if(v>=lo&&v<=hi)s.add(v)}for(let v=lo;s.size<n&&v<=hi;v+=step)s.add(v);return shuffle([...s])}
/* қысқа құрастырушылар */
/* Қайталанбайтын генератор: деңгейдегі тапсырмалар біткенде көрші деңгейден алады */
/* Тапсырмалар қоры: соңғы ойындарда шыққан тапсырмалар осы құрылғыда сақталады (бір ойынға шамамен 3 ойындық қор) — келесі ойында алдымен жаңалары беріледі */
const HKEY=lv=>{try{return 'nr:'+G+'/'+SB+'/'+Q+'/'+ID+'/'+lv}catch(e){return null}};
const HH=s=>{let h=0;for(let i=0;i<s.length;i++)h=(h*31+s.charCodeAt(i))|0;return h.toString(36)};
const HLOAD=k=>{try{return k?JSON.parse(localStorage.getItem(k)||'[]'):[]}catch(e){return[]}};
const HSAVE=(k,a)=>{try{k&&localStorage.setItem(k,JSON.stringify(a.slice(-48)))}catch(e){}};
function NRG(gen,lv){const S=new Set();const hk=HKEY(lv);let H=HLOAD(hk);const HS=new Set(H);const ord=[lv,lv+1,lv-1,lv+2,lv-2].filter(x=>x>=1&&x<=3);
 const take=c=>{const q=QK(c);S.add(q);const h=HH(q);if(!HS.has(h)){HS.add(h);H.push(h);HSAVE(hk,H)}return c};
 return(...a)=>{let c;for(const L of ord.slice(0,2)){for(let g=0;g<30;g++){c=gen(L,...a);if(!S.has(QK(c))&&!HS.has(HH(QK(c))))return take(c)}}
  for(const L of ord){for(let g=0;g<30;g++){c=gen(L,...a);if(!S.has(QK(c)))return take(c)}}S.clear();return take(c)}}
const QZ=(title,gen,{rounds=8,icon='⭐'}={})=>{const f=(box,T,lv)=>{const G=NRG(gen,lv);const tt=typeof title==='function'?title(lv):title;const sk=typeof SKINS!=='undefined'?(SKP!=null?SKP:f._skin):null;
 if(sk!=null&&SKINS[sk])return SKINQ(box,T,{title:tt,gen:k=>G(k),rounds,skin:SKINS[sk]});return GM.quiz({icon,title:tt,rounds,gen:k=>G(k)}).build(box,T)};f._qz=1;return f};
const DU=(title,gen)=>(box,T,lv)=>{const G=NRG(gen,lv);return duel(box,{title:typeof title==='function'?title(lv):title,gen:()=>G()})};
const RC=(title,gen)=>(box,T,lv)=>{const G=NRG(gen,lv);return raceDuel(box,{title:typeof title==='function'?title(lv):title,gen:()=>G()})};
const TQ=(title,gen,rounds=10)=>(box,T,lv)=>{const G=NRG(gen,lv);return TEAMQ(box,{rounds,title:typeof title==='function'?title(lv):title,gen:k=>G(k)})};
/* сүйреп апару (тақтада да, тінтуірмен де): басса — _tap, сүйресе — drop(target) */
function DRAG(it,targets,drop){it.style.touchAction='none';it.style.cursor='grab';it.onclick=null;it.addEventListener('pointerdown',ev=>{ev.preventDefault();const sx=ev.clientX,sy=ev.clientY;let moved=false,gh=null;const R=it.getBoundingClientRect();
 const mv=e=>{const dx=e.clientX-sx,dy=e.clientY-sy;if(!moved&&Math.hypot(dx,dy)>8){moved=true;gh=it.cloneNode(true);gh.style.cssText+=`;position:fixed;left:${R.left}px;top:${R.top}px;width:${R.width}px;height:${R.height}px;margin:0;pointer-events:none;z-index:9999;opacity:.9;transform:scale(1.15)`;document.body.append(gh);it.style.opacity='.3'}if(moved){gh.style.left=(R.left+dx)+'px';gh.style.top=(R.top+dy)+'px'}};
 const up=e=>{removeEventListener('pointermove',mv);removeEventListener('pointerup',up);removeEventListener('pointercancel',up);if(!moved){it._tap&&it._tap();return}gh.remove();it.style.opacity='';const t=(typeof targets==='function'?targets():targets).find(t=>{const r=t.getBoundingClientRect();return e.clientX>=r.left&&e.clientX<=r.right&&e.clientY>=r.top&&e.clientY<=r.bottom});if(t){beep('tap');drop(t)}};
 addEventListener('pointermove',mv);addEventListener('pointerup',up);addEventListener('pointercancel',up)})}
/* ондық тақта: n боялған, x сызылған */
function tenFrame(n,x=0,s=56){let h='';for(let i=0;i<10;i++){const on=i<n,cr=on&&i>=n-x;h+=`<div style="width:${s}px;height:${s}px;border:3px solid #90a4ae;display:grid;place-items:center;background:#fff">${on?`<div style="width:${s*.7}px;height:${s*.7}px;border-radius:50%;background:${cr?'#cfd8dc':'#e53935'};position:relative">${cr?`<span style="position:absolute;inset:0;display:grid;place-items:center;font-size:${s*.7}px;color:#1a2a5a;line-height:1">✕</span>`:''}</div>`:''}</div>`}
 return `<div style="display:grid;grid-template-columns:repeat(5,${s}px);border:4px solid #546e7a;border-radius:8px;overflow:hidden;background:#fff">${h}</div>`}
/* таяқ баулары: t ондық, o бірлік */
function bundles(t,o=0,h=150){const st=(x,c)=>`<rect x="${x}" y="6" width="9" height="${h-12}" rx="4" fill="${c}"/>`;let out='';
 for(let i=0;i<t;i++){let g='';for(let j=0;j<10;j++)g+=st(4+j*10,['#ff9800','#fb8c00','#ffa726'][j%3]);out+=`<svg width="110" height="${h}" viewBox="0 0 110 ${h}">${g}<rect x="0" y="${h/2-12}" width="110" height="24" rx="8" fill="#e53935"/></svg>`}
 for(let i=0;i<o;i++)out+=`<svg width="16" height="${h}" viewBox="0 0 16 ${h}">${st(3,'#ffb74d')}</svg>`;
 return `<div style="display:flex;gap:8px;align-items:flex-end;flex-wrap:wrap;justify-content:center;max-width:1100px">${out}</div>`}
/* сағат */
function clockSvg(h,m=0,s=300){const a=(h%12+m/60)*30,b=m*6,R=s/2;let t='';for(let i=1;i<=12;i++){const q=i*Math.PI/6;t+=`<text x="${R+R*.72*Math.sin(q)}" y="${R-R*.72*Math.cos(q)+R*.09}" text-anchor="middle" font-size="${R*.24}" font-weight="900" font-family="Nunito" fill="#1a2a5a">${i}</text>`}
 for(let i=0;i<60;i++){const q=i*Math.PI/30,l=i%5?R*.04:R*.08;t+=`<line x1="${R+(R*.95)*Math.sin(q)}" y1="${R-(R*.95)*Math.cos(q)}" x2="${R+(R*.95-l)*Math.sin(q)}" y2="${R-(R*.95-l)*Math.cos(q)}" stroke="#1a2a5a" stroke-width="${i%5?2:4}"/>`}
 return `<svg width="${s}" height="${s}" viewBox="0 0 ${s} ${s}"><circle cx="${R}" cy="${R}" r="${R-4}" fill="#fff" stroke="#1e88e5" stroke-width="8"/>${t}
 <line x1="${R}" y1="${R}" x2="${R+R*.48*Math.sin(a*Math.PI/180)}" y2="${R-R*.48*Math.cos(a*Math.PI/180)}" stroke="#e53935" stroke-width="12" stroke-linecap="round"/>
 <line x1="${R}" y1="${R}" x2="${R+R*.74*Math.sin(b*Math.PI/180)}" y2="${R-R*.74*Math.cos(b*Math.PI/180)}" stroke="#1a2a5a" stroke-width="7" stroke-linecap="round"/><circle cx="${R}" cy="${R}" r="10" fill="#1a2a5a"/></svg>`}
const tm=(h,m=0)=>`${h}:${String(m).padStart(2,'0')}`;
/* теңге монеталары */
const COINC={1:'#d7ccc8',2:'#d7ccc8',5:'#ffe082',10:'#ffe082',20:'#e0e0e0',50:'#e0e0e0',100:'#ffd54f',200:'#ffca28'};
function coin(v,s=86){return `<svg width="${s}" height="${s}" viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="${COINC[v]||'#eee'}" stroke="#8d6e63" stroke-width="5"/><circle cx="50" cy="50" r="36" fill="none" stroke="#8d6e6366" stroke-width="3"/><text x="50" y="${v>=100?60:64}" text-anchor="middle" font-size="${v>=100?34:40}" font-weight="900" font-family="Nunito" fill="#4e342e">${v}</text><text x="50" y="82" text-anchor="middle" font-size="13" font-weight="900" font-family="Nunito" fill="#4e342e">теңге</text></svg>`}
const coins=list=>`<div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center;max-width:900px">${list.map(v=>coin(v)).join('')}</div>`;
/* пиктограмма және диаграмма */
function pictoSvg(rows){return `<div style="background:#fff;border:4px solid #d6e4f7;border-radius:22px;padding:12px 20px;display:flex;flex-direction:column;gap:8px">${rows.map(([e,n,lab])=>`<div style="display:flex;align-items:center;gap:12px">${lab?`<div style="width:120px;font-size:24px;font-weight:900;text-align:right">${lab}</div>`:''}<div style="display:flex;gap:6px;font-size:44px;line-height:1;min-height:50px;border-left:4px solid #90a4ae;padding-left:10px">${e.repeat(n)}</div></div>`).join('')}</div>`}
function barsSvg(rows,max=10){const W=110,H=300;return `<svg width="${rows.length*W+80}" height="${H+90}" viewBox="0 0 ${rows.length*W+80} ${H+90}">${[...Array(max+1)].map((_,i)=>`<line x1="60" y1="${H-i*H/max+10}" x2="${rows.length*W+70}" y2="${H-i*H/max+10}" stroke="#e3e8f2" stroke-width="2"/><text x="48" y="${H-i*H/max+18}" text-anchor="end" font-size="20" font-weight="800" font-family="Nunito" fill="#5f7387">${i}</text>`).join('')}
 ${rows.map(([e,n,c],i)=>`<rect x="${80+i*W}" y="${H-n*H/max+10}" width="${W-40}" height="${n*H/max}" rx="8" fill="${c||SHC[i%SHC.length]}"/><text x="${80+i*W+(W-40)/2}" y="${H+60}" text-anchor="middle" font-size="46">${e}</text>`).join('')}<line x1="60" y1="${H+10}" x2="${rows.length*W+70}" y2="${H+10}" stroke="#1a2a5a" stroke-width="4"/></svg>`}
/* бөлік–бүтін сызбасы (жоғарыда бүтін, астында екі бөлік) */
function partWhole(w,a,b){const c=v=>v==null?`<div class="slot" style="width:110px;height:90px;font-size:48px;display:grid">?</div>`:`<div style="width:110px;height:90px;border-radius:18px;background:#fff;border:4px solid #90caf9;display:grid;place-items:center;font-size:44px;font-weight:900">${v}</div>`;
 return `<div style="display:flex;flex-direction:column;align-items:center"><div style="border-radius:50%;padding:6px">${c(w).replace('border-radius:18px','border-radius:50%')}</div><svg width="300" height="50"><line x1="150" y1="0" x2="70" y2="50" stroke="#90a4ae" stroke-width="5"/><line x1="150" y1="0" x2="230" y2="50" stroke="#90a4ae" stroke-width="5"/></svg><div style="display:flex;gap:60px">${c(a)}${c(b)}</div></div>`}
/* миллионер (жалпы) */
function MILLION(box,T,GEN){const PR=['100','200','500','1 000','5 000','10 000','50 000','100 000','500 000','1 000 000'];
 const start=()=>{const W=gwrap(box,'linear-gradient(160deg,#1a237e,#3949ab)');W.style.flexDirection='row';W.style.gap='26px';W.style.color='#fff';
  const lad=el('div','');lad.style.cssText='width:250px;display:flex;flex-direction:column-reverse;gap:6px';PR.forEach((p,i)=>lad.append(el('div','',`<span style="opacity:.6">${i+1}</span> ${p}`)));
  [...lad.children].forEach(x=>x.style.cssText='font-size:22px;font-weight:900;padding:6px 14px;border-radius:12px;background:#ffffff14');
  const main=el('div','');main.style.cssText='flex:1;display:flex;flex-direction:column;align-items:center;justify-content:space-around;height:100%';
  const life=el('div','');life.style.cssText='display:flex;gap:14px';const qb=el('div','');qb.style.cssText='background:#fff;color:#1a2a5a;border-radius:30px;padding:24px 40px;font-size:40px;font-weight:900;text-align:center;min-width:700px;box-shadow:0 8px 0 #0004';
  const ob=el('div','');ob.style.cssText='display:grid;grid-template-columns:1fr 1fr;gap:16px;width:760px';main.append(life,qb,ob);W.append(main,lad);
  let k=0,cur,used={};const SEEN=new Set();[['h','➗ 50/50'],['c','👥 Сыныптан сұрау'],['t','👩‍🏫 Мұғалім']].forEach(([id,t])=>{const b=el('button','',t);b.style.cssText='background:#fdd835;color:#1a2a5a;font-weight:900;font-size:20px;padding:12px 18px;border-radius:999px;box-shadow:0 5px 0 #c7a500';
   b.onclick=()=>{if(used[id])return;used[id]=1;b.style.opacity=.35;const bs=[...ob.children];
    if(id==='h')shuffle(bs.filter(x=>x.dataset.v!==String(cur.a))).slice(0,Math.max(0,bs.length-2)).forEach(x=>x.style.visibility='hidden');
    if(id==='c'){let rest=100;const ok=bs.find(x=>x.dataset.v===String(cur.a));const p0=rnd(45,70);ok.dataset.p=p0;rest-=p0;const wr=bs.filter(x=>x!==ok);wr.forEach((x,i)=>{const p=i===wr.length-1?rest:rnd(0,rest);x.dataset.p=p;rest-=p});bs.forEach(x=>x.insertAdjacentHTML('beforeend',`<small style="display:block;font-size:18px;color:#5c6bc0">${x.dataset.p}%</small>`))}
    if(id==='t')bs.forEach(x=>{if(x.dataset.v===String(cur.a))x.classList.add('hint')})};life.append(b)});
  const show=()=>{[...lad.children].forEach((x,i)=>{x.style.background=i===k?'#fdd835':i<k?'#43a04788':'#ffffff14';x.style.color=i===k?'#1a2a5a':'#fff'});
   let g=0;do{cur=GEN[rnd(0,GEN.length-1)](k)}while((!cur.o.map(String).includes(String(cur.a))||SEEN.has(QK(cur)))&&g++<40);SEEN.add(QK(cur));qb.innerHTML=cur.q;ob.innerHTML='';
   shuffle(cur.o).slice(0,4).forEach((v,i)=>{const b=el('button','opt',`<span style="color:#5c6bc0">${'ABCD'[i]}:</span>&nbsp;${cur.oh?cur.oh(v):v}`);b.dataset.v=v;b.style.cssText+='height:auto;min-height:84px;justify-content:flex-start;padding:10px 22px;color:#1a2a5a';
    b.onclick=()=>{if(ob.dataset.l)return;ob.dataset.l=1;if(String(v)===String(cur.a)){T.ok(b);T.later(()=>{delete ob.dataset.l;k++;if(k<PR.length)show();else T.end(box,{em:'💰',title:'МИЛЛИОНЕР! 🎉',text:'Барлық 10 сұраққа дұрыс жауап бердіңдер!',again:start})},900)}
     else{T.bad(b);[...ob.children].forEach(x=>{if(x.dataset.v===String(cur.a))x.classList.add('hint')});T.later(()=>T.end(box,{em:'💡',title:k?`Ұтыс: ${PR[k-1]} ұпай`:'Тағы байқап көрейік!',text:`${k} сұраққа дұрыс жауап берілді`,again:start}),1400)}};ob.append(b)})};
  T.reveal=()=>[...ob.children].forEach(x=>{if(x.dataset.v===String(cur.a))x.classList.add('hint')});show()};start()}
/* мысал: a op b (шектерімен) */
function ex(max,ops='+-',minA=0){const op=ops[rnd(0,ops.length-1)];let a,b,r;if(op==='+'){r=rnd(Math.max(1,minA),max);a=rnd(0,r);b=r-a}else{a=rnd(Math.max(1,minA),max);b=rnd(0,a);r=a-b}return{a,b,op,r}}
const exT=(max=100,ops='+-')=>{const e=ex(max/10,ops);return{a:e.a*10,b:e.b*10,op:e.op,r:e.r*10}};
