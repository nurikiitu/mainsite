/* neuroUstaz · Викторинаның 20 ойын түрі: сұрақтар сол күйі, жауап беру — ойын */
(()=>{const s=document.createElement('style');s.textContent=`
.sk-tag{background:#fff3;color:inherit;border-radius:999px;padding:4px 14px;font-weight:900;font-size:20px;white-space:nowrap;background:#ffffffcc;color:#1a2a5a;box-shadow:0 3px 0 #0001}
.sk-scene{box-shadow:inset 0 0 0 4px #ffffff55,0 6px 0 #0001}
.sk-o{background:#fff;border:4px solid #dfe3ec;border-radius:22px;min-height:92px;min-width:150px;padding:8px 22px;box-shadow:0 6px 0 #0002;font-weight:900;color:#1a2a5a;display:grid;place-items:center;transition:transform .2s;cursor:pointer;line-height:1.15}
.sk-o:hover{transform:translateY(-4px)}
.sk-asyk{background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 132' preserveAspectRatio='none'%3E%3Cpath d='M30 18C60 2 78 30 100 30S140 2 170 18C197 32 197 100 170 114C140 130 122 102 100 102S60 130 30 114C3 100 3 32 30 18Z' fill='%23fff3d6' stroke='%238d5a2b' stroke-width='6'/%3E%3Cellipse cx='55' cy='42' rx='18' ry='9' fill='%23ffffffaa'/%3E%3C/svg%3E") center/100% 100% no-repeat;border:0;border-radius:0;box-shadow:none;filter:drop-shadow(0 6px 0 #0003);min-width:200px;min-height:132px;padding:10px 34px;color:#4e342e}
.sk-plank{background:repeating-linear-gradient(90deg,#d7a86e 0 26px,#c99657 26px 30px);border:4px solid #8d5a2b;color:#3e2410;border-radius:14px}
.sk-plate{background:radial-gradient(circle,#fff 55%,#e3f2fd 56%,#fff 70%);border:5px solid #90caf9;border-radius:50%;min-width:150px;min-height:150px;padding:10px}
.sk-bottle{background:linear-gradient(#e1bee7,#ba68c8);border:4px solid #7b1fa2;border-radius:22px 22px 40px 40px;color:#fff;position:relative;margin-top:22px;text-shadow:0 2px 0 #4a148c}
.sk-bottle:before{content:'';position:absolute;top:-24px;left:50%;width:34px;height:22px;transform:translateX(-50%);background:#8d6e63;border-radius:6px 6px 0 0}
.sk-planet{border-radius:50%;min-width:160px;min-height:160px;padding:12px;border:4px solid #ffffff88;color:#fff;text-shadow:0 2px 3px #0008;box-shadow:inset -18px -18px 0 #0003,0 6px 0 #0003}
.sk-apple{background:radial-gradient(circle at 35% 30%,#ff8a80,#e53935 60%,#b71c1c);border:4px solid #8e0000;color:#fff;border-radius:50% 50% 46% 46%;min-width:150px;min-height:140px;position:relative;text-shadow:0 2px 0 #7f0000}
.sk-apple:before{content:'🍃';position:absolute;top:-26px;left:50%;font-size:30px}
.sk-crate{background:repeating-linear-gradient(0deg,#e0b071 0 22px,#c8924f 22px 26px);border:5px solid #7a4b1f;color:#3e2410;border-radius:8px}
.sk-card{background:linear-gradient(#fffde7,#fff59d);border:4px solid #f9a825;border-radius:16px;transform:rotate(-2deg)}
.sk-card:nth-child(even){transform:rotate(2deg)}
.sk-gem{background:linear-gradient(135deg,#80deea,#00acc1);border:4px solid #00838f;color:#fff;border-radius:18px;clip-path:polygon(12% 0,88% 0,100% 50%,88% 100%,12% 100%,0 50%);padding:8px 40px;text-shadow:0 2px 0 #006064}
.sk-wire{border-radius:999px;color:#fff;text-shadow:0 2px 0 #0006;border:4px solid #0003}
.sk-cloud{background:#fff;border:none;border-radius:60px;box-shadow:0 8px 0 #90caf9}
.sk-bolt{background:linear-gradient(#cfd8dc,#90a4ae);border:4px solid #546e7a;border-radius:50% 50% 18px 18px}
.sk-flower{background:radial-gradient(circle,#fff59d 30%,#f48fb1 31%,#f48fb1 64%,#fff 65%);border:none;border-radius:50%;min-width:160px;min-height:160px;padding:14px}
.sk-wood{background:linear-gradient(#a1887f,#6d4c41);color:#fff;border:4px solid #4e342e;text-shadow:0 2px 0 #3e2723}
@keyframes skbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
@keyframes skfloat{0%,100%{transform:translate(0,0)}50%{transform:translate(18px,-6px)}}
@keyframes skbelt{from{background-position:0 0}to{background-position:80px 0}}
@keyframes skshake{0%,100%{transform:translateX(0)}25%{transform:translateX(-8px)}75%{transform:translateX(8px)}}
@keyframes skswing{0%,100%{transform:rotate(calc(var(--a) * -1))}50%{transform:rotate(var(--a))}}
@keyframes skstars{from{background-position:0 0}to{background-position:0 400px}}
@keyframes skspin{to{transform:rotate(360deg)}}
@keyframes skwob{0%,100%{transform:rotate(0)}25%{transform:rotate(-6deg)}75%{transform:rotate(6deg)}}
@keyframes skpuff{0%{transform:translateY(0) scale(.6);opacity:.9}100%{transform:translateY(-70px) scale(1.4);opacity:0}}
@keyframes skdance{0%,100%{transform:rotate(-8deg) translateY(0)}50%{transform:rotate(8deg) translateY(-12px)}}
`;document.head.append(s)})();
const SKA=(e,f,ms=600,o={})=>{try{return e.animate(f,{duration:ms,fill:'forwards',easing:'ease-in-out',...o})}catch(_){}};
const SKC=(e,p)=>{const a=e.getBoundingClientRect(),b=p.getBoundingClientRect(),z=(b.width/p.offsetWidth)||1;return{x:(a.left+a.width/2-b.left)/z,y:(a.top+a.height/2-b.top)/z}};
const ASYK=(w,c)=>`<svg width="${w}" height="${w*.66|0}" viewBox="0 0 200 132" style="display:inline-block;vertical-align:middle;filter:drop-shadow(0 3px 0 #0003)"><path d="M30 18C60 2 78 30 100 30S140 2 170 18C197 32 197 100 170 114C140 130 122 102 100 102S60 130 30 114C3 100 3 32 30 18Z" fill="${c}" stroke="#8d5a2b" stroke-width="7"/><path d="M62 66C62 50 80 44 100 44S138 50 138 66 120 88 100 88 62 82 62 66Z" fill="#0000001f"/><ellipse cx="58" cy="46" rx="16" ry="9" fill="#ffffff88"/></svg>`;
const SKE=(t,css)=>{const d=el('div','',t);d.style.cssText='position:absolute;'+css;return d};
const SKO=cls=>h=>el('button','opt sk-o '+cls,h);
const SKFX=(sc,txt,x,y)=>{const d=SKE(txt,`left:${x}px;top:${y}px;font-size:34px;font-weight:900;color:#fff;text-shadow:0 2px 4px #0008;pointer-events:none;z-index:9`);sc.append(d);SKA(d,[{transform:'translateY(0)',opacity:1},{transform:'translateY(-50px)',opacity:0}],1100);setTimeout(()=>d.remove(),1200)};

/* ===== Ортақ қозғалтқыш ===== */
function SKINQ(box,T,{title,gen,rounds=8,skin:S,sec}){
 const start=()=>{const SEEN=new Set();const W=gwrap(box,S.bg);W.style.justifyContent='flex-start';W.style.gap='8px';W.style.padding='10px 22px 14px';
  const pr=prog(W,rounds);const top=el('div','');top.style.cssText='display:flex;align-items:center;gap:16px;justify-content:center;width:100%';
  const tag=el('div','sk-tag',S.em+' '+S.n);const hd=el('div','qline',title);hd.style.fontSize='28px';const tm=el('div','mut','');tm.style.fontSize='20px';top.append(tag,hd,tm);W.append(top);
  const sc=el('div','sk-scene');sc.style.cssText=`position:relative;width:100%;max-width:1420px;height:${S.h||190}px;border-radius:24px;overflow:hidden;flex:none;background:${S.sbg||'#e3f2fd'}`;W.append(sc);
  const qb=el('div','');qb.style.cssText='flex:1;min-height:0;display:flex;flex-direction:column;gap:6px;align-items:center;justify-content:center;width:100%';
  const ob=el('div','');ob.style.cssText='display:flex;gap:20px;flex-wrap:wrap;justify-content:center;align-items:center;min-height:100px;width:100%;'+(S.obCss||'');W.append(qb,ob);
  const C={sc,W,ob,qb,rounds,T,box,k:0,err:0,sec};const alive=T.alive();C.alive=alive;S.init&&S.init(C);
  let k=0,err=0,t0=Date.now(),cur;
  const tick=()=>{if(!alive()||!W.isConnected)return;tm.textContent='⏱ '+Math.floor((Date.now()-t0)/1000)+' сек · ❌ '+err;S.tick&&S.tick(C);setTimeout(tick,500)};tick();
  const fin=()=>{const s=Math.floor((Date.now()-t0)/1000);const go=()=>T.end(box,{em:S.em,title:S.win||'Керемет!',text:(S.res?S.res(C)+' · ':'')+`Уақыт: ${s} сек · ${T.errTxt(err)}`,again:start});ob.innerHTML='';if(S.done){S.done(C);T.later(go,S.doneMs||1800)}else go()};
  const show=()=>{pr.set(k);{let g=0;do{cur=gen(k)}while(SEEN.has(QK(cur))&&g++<40);SEEN.add(QK(cur))}C.cur=cur;qb.innerHTML='';if(typeof cur.q==='function')cur.q(qb);else qb.innerHTML=cur.q;ob.innerHTML='';delete ob.dataset.l;
   const os=shuffle(cur.o.slice());S.before&&S.before(C,k);
   os.forEach((v,i)=>{const h=cur.oh?cur.oh(v):`<span style="font-size:${String(v).length>14?28:String(v).length>6?36:48}px;font-weight:900">${v}</span>`;const b=(S.opt||SKO(''))(h,i,os.length,C);b.dataset.v=v;
    b.onclick=()=>{if(ob.dataset.l||b.dataset.x)return;if(String(v)===String(cur.a)){ob.dataset.l=1;T.ok(b);k++;C.k=k;S.hit&&S.hit(b,C,k);T.later(()=>{if(k<rounds)show();else fin()},S.ms||1100)}
     else{err++;C.err=err;b.dataset.x=1;T.bad(b);b.style.opacity='.55';S.miss&&S.miss(b,C,err)}};ob.append(b)});S.after&&S.after(C,k)};
  T.reveal=()=>[...ob.children].forEach(x=>{if(x.dataset.v===String(cur.a))x.classList.add('hint')});show()};start()}

/* ===== 20 түр ===== */
const SKINS=[
/* 1. Бәйге */
{n:'Бәйге',em:'🐎',win:'Сенің атың бірінші келді!',sbg:'linear-gradient(#a5d6a7,#66bb6a)',opt:SKO('sk-plank'),
 init(C){const sc=C.sc;C.pos=[0,0,0,0];C.H=[];for(let i=0;i<4;i++){const ln=SKE('',`left:0;right:0;top:${8+i*45}px;height:40px;border-bottom:3px dashed #ffffff88`);sc.append(ln);
  const h=SKE(`<span style="display:inline-block;transform:scaleX(-1)">🏇</span><b style="font-size:16px;margin-left:4px;color:${i?'#fff':'#ffeb3b'}">${i?'':'СЕН'}</b>`,`left:3%;top:${4+i*45}px;font-size:40px;transition:left .8s ease`);sc.append(h);C.H.push(h)}
  sc.append(SKE('🏁',`right:2%;top:30px;font-size:70px`));C.H[0].style.filter='drop-shadow(0 0 6px #ffeb3b)'},
 draw(C){C.H.forEach((h,i)=>h.style.left=(3+C.pos[i]*82)+'%')},
 before(C,k){if(k>0)for(let i=1;i<4;i++)C.pos[i]=Math.min(.93,C.pos[i]+(.55+Math.random()*.4)/C.rounds);SKINS[0].draw(C)},
 hit(b,C,k){C.pos[0]=k/C.rounds;SKINS[0].draw(C)},miss(b,C){SKA(C.H[0],[{transform:'translateY(0)'},{transform:'translateY(-14px)'},{transform:'translateY(0)'}],400)},
 done(C){C.pos[0]=1;SKINS[0].draw(C);SKFX(C.sc,'🏆 1-орын!',600,60)}},
/* 2. Асық ату */
{n:'Асық ату',em:'🎯',win:'Асықтың бәрін ұттың!',sbg:'linear-gradient(#ffe9c4,#f3c98b 62%,#c99a5b 62%)',opt:SKO('sk-asyk'),
 init(C){const R=C.rounds;C.row=[];const w=Math.min(64,900/R);
  C.sc.append(SKE('',`left:16%;right:6%;top:112px;border-top:5px dashed #8d5a2b88`));C.sc.append(SKE('Кон',`right:2%;top:84px;font-size:20px;font-weight:900;color:#6d4c41`));
  for(let i=0;i<R;i++){const x=SKE(ASYK(w,'#fff8e7'),`left:calc(${28+i*(62/R)}% );top:${86}px;transition:transform .5s,opacity .5s`);C.sc.append(x);C.row.push(x)}
  C.saqa=SKE(ASYK(74,'#e53935'),`left:3%;top:96px;transition:transform .35s ease-in`);C.sc.append(C.saqa);C.sc.append(SKE('Саққа',`left:3%;top:150px;font-size:18px;font-weight:900;color:#b71c1c`));
  C.bag=SKE('',`left:20px;top:12px;display:flex;gap:4px;align-items:center;font-size:24px;font-weight:900;color:#6d4c41`);C.sc.append(C.bag)},
 before(C){C.bag.innerHTML='Ұтқаның: '+(C.k?ASYK(34,'#fff8e7').repeat(C.k):'—')},
 hit(b,C,k){const t=C.row[k-1];if(!t)return;const sr=C.saqa.getBoundingClientRect(),tr=t.getBoundingClientRect(),sc=C.sc.getBoundingClientRect().width/C.sc.offsetWidth||1;
  C.saqa.style.transform=`translate(${(tr.left-sr.left)/sc-20}px,${(tr.top-sr.top)/sc}px) rotate(360deg)`;
  setTimeout(()=>{t.style.transform='translate(-120px,-140px) rotate(-420deg) scale(.6)';t.style.opacity='0';C.saqa.style.transition='none';C.saqa.style.transform='';void C.saqa.offsetWidth;C.saqa.style.transition='transform .35s ease-in';C.bag.innerHTML='Ұтқаның: '+ASYK(34,'#fff8e7').repeat(k)},360)}},
/* 3. Киіз үй тік */
{n:'Киіз үй тік',em:'🏕️',win:'Киіз үй тігілді!',sbg:'linear-gradient(#bbdefb,#e3f2fd 70%,#a5d6a7 70%)',opt:SKO('sk-wood'),
 P:['Кереге','Есік','Уық','Шаңырақ','Туырлық','Үзік','Ою-өрнек','Түтін'],
 init(C){const s=`<svg viewBox="0 0 300 180" style="position:absolute;left:50%;top:4px;height:182px;transform:translateX(-50%)">
  <g id="p0"><rect x="60" y="95" width="180" height="75" fill="none" stroke="#8d6e63" stroke-width="3"/>${[...Array(12)].map((_,i)=>`<line x1="${60+i*16}" y1="95" x2="${76+i*16}" y2="170" stroke="#8d6e63" stroke-width="2"/><line x1="${76+i*16}" y1="95" x2="${60+i*16}" y2="170" stroke="#8d6e63" stroke-width="2"/>`).join('')}</g>
  <g id="p2">${[...Array(13)].map((_,i)=>`<line x1="${60+i*15}" y1="95" x2="${132+i*3}" y2="42" stroke="#a1887f" stroke-width="3"/>`).join('')}</g>
  <rect id="p4" x="58" y="95" width="184" height="76" fill="#f3ead6" stroke="#bfa880" stroke-width="2"/>
  <path id="p5" d="M58 96 Q150 18 242 96 Z" fill="#ede0c4" stroke="#bfa880" stroke-width="2"/>
  <g id="p6"><rect x="58" y="96" width="184" height="10" fill="#c62828"/>${[...Array(12)].map((_,i)=>`<path d="M${64+i*15} 101 l5 -4 l5 4 l-5 4z" fill="#ffeb3b"/>`).join('')}</g>
  <g id="p1"><rect x="135" y="118" width="30" height="52" fill="#c62828" stroke="#7f0000" stroke-width="2"/><path d="M140 130 h20 M140 145 h20 M150 122 v44" stroke="#ffeb3b" stroke-width="2"/></g>
  <g id="p3"><circle cx="150" cy="40" r="16" fill="#fff8e1" stroke="#6d4c41" stroke-width="4"/><path d="M134 40 h32 M150 24 v32 M139 29 l22 22 M161 29 l-22 22" stroke="#6d4c41" stroke-width="2"/></g>
  <g id="p7"><circle cx="150" cy="16" r="8" fill="#cfd8dc" style="animation:skpuff 2s infinite"/><circle cx="158" cy="10" r="6" fill="#eceff1" style="animation:skpuff 2s .7s infinite"/></g></svg>`;
  C.sc.insertAdjacentHTML('beforeend',s);C.lab=SKE('',`left:24px;top:20px;font-size:28px;font-weight:900;color:#1a2a5a`);C.sc.append(C.lab);SKINS[2].draw(C,0)},
 draw(C,k){const n=Math.ceil(k*8/C.rounds);for(let i=0;i<8;i++){const p=C.sc.querySelector('#p'+i);p.style.transition='opacity .6s';p.style.opacity=i<n?1:.07}C.lab.textContent=n?'✅ '+SKINS[2].P[n-1]:'Киіз үйді бірге тігейік!'},
 hit(b,C,k){SKINS[2].draw(C,k)}},
/* 4. Бүркітші */
{n:'Бүркітші',em:'🦅',win:'Бүркітің керемет аңшы!',sbg:'linear-gradient(#81d4fa,#e1f5fe 72%,#d7ccc8 72%)',opt:SKO('sk-cloud'),
 init(C){C.e=SKE('🦅',`left:10%;top:10px;font-size:64px;animation:skfloat 3s infinite;z-index:3`);C.sc.append(C.e,SKE('🧑‍🌾',`left:2%;bottom:6px;font-size:58px`));C.bag=SKE('',`right:20px;bottom:10px;font-size:40px`);C.sc.append(C.bag)},
 hit(b,C){const f=SKE('🦊',`left:${30+Math.random()*40}%;bottom:8px;font-size:48px`);C.sc.append(f);const x=f.offsetLeft-C.e.offsetLeft;
  SKA(C.e,[{transform:'translate(0,0)'},{transform:`translate(${x}px,95px)`},{transform:'translate(0,0)'}],1000);setTimeout(()=>{f.remove();C.bag.textContent='🦊'.repeat(C.k)},550)}},
/* 5. Көкпар */
{n:'Көкпар',em:'🐐',win:'Серкені қазанға салдың!',sbg:'linear-gradient(#c5e1a5,#9ccc65)',opt:SKO('sk-plank'),
 init(C){C.sc.append(SKE('🥅',`left:1%;top:55px;font-size:70px;opacity:.6`),SKE('🎯<br><b style="font-size:16px">Тайқазан</b>',`right:1%;top:40px;font-size:66px;text-align:center;line-height:1`));
  C.g=SKE('<span style="display:inline-block;transform:scaleX(-1)">🏇</span>🐐🏇',`left:44%;top:60px;font-size:58px;transition:left .9s ease;white-space:nowrap`);C.sc.append(C.g);C.p=0},
 hit(b,C,k){C.p=k/C.rounds;C.g.style.left=(44+C.p*42)+'%'},miss(b,C){C.p=Math.max(-.3,C.p-.5/C.rounds);C.g.style.left=(44+C.p*42)+'%'}},
/* 6. Алтыбақан */
{n:'Алтыбақан',em:'🎠',win:'Алтыбақан аспанға жетті!',sbg:'linear-gradient(#1a237e,#5c6bc0 70%,#7cb342 70%)',opt:SKO('sk-card'),
 init(C){C.sc.insertAdjacentHTML('beforeend',`<svg viewBox="0 0 300 190" style="position:absolute;left:50%;top:0;height:190px;transform:translateX(-50%)"><path d="M60 188 L150 16 L240 188 M95 122 L205 122" stroke="#8d6e63" stroke-width="9" fill="none" stroke-linecap="round"/><circle cx="150" cy="16" r="9" fill="#6d4c41"/></svg>`);
  C.sw=SKE(`<svg viewBox="0 0 150 150" width="150" height="150" style="display:block;overflow:visible"><path d="M75 0 L22 128 M75 0 L128 128" stroke="#ffe0b2" stroke-width="4" fill="none"/><rect x="10" y="126" width="130" height="12" rx="6" fill="#a1887f" stroke="#5d4037" stroke-width="3"/><text x="75" y="126" text-anchor="middle" font-size="40">👧👦</text></svg>`,`left:calc(50% - 75px);top:16px;width:150px;height:150px;transform-origin:50% 0;--a:6deg;animation:skswing 2.4s ease-in-out infinite`);C.sc.append(C.sw);
  C.sc.append(SKE('🌙',`right:8%;top:14px;font-size:44px`));
  const R=C.rounds;let tk='';for(let i=R;i>=0;i--)tk+=`<div style="flex:1;border-top:2px solid #ffffffaa;font-size:13px;line-height:1;padding-left:4px;color:#fff">${i%2===0||R<=8?i+' м':''}</div>`;
  C.rl=SKE(`<div style="position:absolute;left:0;bottom:0;width:14px;height:0;background:linear-gradient(#ffeb3b,#ff9800);border-radius:7px;transition:height .7s"></div><div style="position:absolute;left:16px;top:0;bottom:0;display:flex;flex-direction:column">${tk}</div>`,`left:24px;top:24px;height:150px;width:60px;border-left:14px solid #ffffff33;border-radius:7px 0 0 7px`);
  C.fl=C.rl.firstChild;C.sc.append(C.rl);
  C.m=SKE('',`left:96px;top:14px;font-size:26px;font-weight:900;color:#fff;text-shadow:0 2px 0 #0006;line-height:1.2`);C.sc.append(C.m);C.show=k=>{C.m.innerHTML=`⬆️ ${k} м<br><span style="font-size:17px;opacity:.85">Мақсат: ${C.rounds} м</span>`;C.fl.style.height=(k/C.rounds*100)+'%';C.fl.style.left='-14px'};C.show(0)},
 hit(b,C,k){C.sw.style.setProperty('--a',(6+k*40/C.rounds)+'deg');C.show(k)}},
/* 7. Құбыжықты тамақтандыр */
{n:'Құбыжықты тамақтандыр',em:'👾',win:'Құбыжық тойды!',sbg:'linear-gradient(#f3e5f5,#e1bee7)',opt:SKO('sk-plate'),
 init(C){C.m=SKE(`<svg viewBox="0 0 120 120" width="170" height="170"><ellipse cx="60" cy="68" rx="52" ry="48" fill="#66bb6a"/><circle cx="40" cy="48" r="13" fill="#fff"/><circle cx="80" cy="48" r="13" fill="#fff"/><circle cx="42" cy="50" r="6" fill="#222"/><circle cx="78" cy="50" r="6" fill="#222"/><path id="mo" d="M32 82 Q60 108 88 82 Z" fill="#7b1fa2"/><path d="M22 26 l10 14 M98 26 l-10 14" stroke="#388e3c" stroke-width="6" stroke-linecap="round"/></svg>`,`left:50%;top:6px;transform:translateX(-50%);transition:transform .3s`);
  C.say=SKE('Мен ашпын! 😋',`left:calc(50% + 110px);top:30px;background:#fff;border-radius:18px;padding:8px 16px;font-size:26px;font-weight:900;color:#6a1b9a`);C.sc.append(C.m,C.say);C.sz=1},
 hit(b,C){const r=SKC(b,C.sc);const f=SKE(b.innerHTML,`left:${r.x-60}px;top:${Math.min(r.y,600)}px;z-index:9;font-size:20px;pointer-events:none`);
  C.sz=Math.min(1.35,C.sz+.04);C.say.textContent=KPKS(['Ням-ням! 😋','Дәмді екен! 😍','Тағы бер! 🤤','Мм, керемет! 🥳']);SKA(b,[{transform:'scale(1)',opacity:1},{transform:'scale(.2) translateY(-600px)',opacity:0}],500);
  SKA(C.m,[{transform:`translateX(-50%) scale(${C.sz})`},{transform:`translateX(-50%) scale(${C.sz+.15})`},{transform:`translateX(-50%) scale(${C.sz})`}],500)},
 miss(b,C){C.say.textContent='Түу! Бұл дәмсіз! 🤢';SKA(C.m,[{transform:'translateX(-50%)'},{transform:'translateX(-46%)'},{transform:'translateX(-54%)'},{transform:'translateX(-50%)'}],400)}},
/* 8. Сиқырлы қазан */
{n:'Сиқырлы қазан',em:'🧪',win:'Сиқырлы сусын дайын!',sbg:'linear-gradient(#311b92,#4527a0)',opt:SKO('sk-bottle'),COL:['#4fc3f7','#81c784','#fff176','#ffb74d','#f06292','#ba68c8','#4db6ac','#e57373','#aed581','#ffd54f'],
 init(C){C.sc.insertAdjacentHTML('beforeend',`<svg viewBox="0 0 220 180" style="position:absolute;left:50%;top:6px;height:180px;transform:translateX(-50%)"><path d="M30 70 Q30 170 110 170 Q190 170 190 70 Z" fill="#37474f"/><ellipse id="lq" cx="110" cy="72" rx="80" ry="16" fill="#4fc3f7" style="transition:fill .6s"/><rect x="20" y="62" width="180" height="12" rx="6" fill="#263238"/><path d="M60 170 l-10 10 M160 170 l10 10" stroke="#263238" stroke-width="8"/></svg>`);
  C.b=SKE('',`left:calc(50% - 80px);top:10px;width:160px;height:70px`);C.sc.append(C.b);C.l=C.sc.querySelector('#lq');C.ing=SKE('',`left:24px;top:16px;font-size:34px;max-width:400px`);C.sc.append(C.ing)},
 tick(C){if(Math.random()<.6){const d=SKE('🫧',`left:${Math.random()*130}px;top:50px;font-size:${18+Math.random()*16}px;animation:skpuff 1.4s forwards`);C.b.append(d);setTimeout(()=>d.remove(),1500)}},
 hit(b,C,k){const I=['🍄','🌿','⭐','💎','🌸','🪶','🍯','🔮','🌙','🍀'];const i=I[(k-1)%I.length];const d=SKE(i,`left:calc(50% - 20px);top:-50px;font-size:46px;z-index:5`);C.sc.append(d);SKA(d,[{transform:'translateY(0)'},{transform:'translateY(110px)',opacity:0}],600);setTimeout(()=>d.remove(),650);
  C.l.style.fill=SKINS[7].COL[k%10];C.ing.textContent+=i},
 done(C){SKFX(C.sc,'✨🌈 Сиқыр! 🌈✨',560,40)}},
/* 9. Айдаһар жұмыртқасы */
{n:'Айдаһар жұмыртқасы',em:'🐉',win:'Айдаһар дүниеге келді!',sbg:'linear-gradient(#ffe0b2,#ffcc80)',opt:SKO('sk-gem'),
 init(C){C.eg=SKE(`<svg viewBox="0 0 120 150" width="130" height="165"><ellipse cx="60" cy="80" rx="50" ry="64" fill="#a5d6a7" stroke="#2e7d32" stroke-width="4"/><circle cx="40" cy="60" r="8" fill="#66bb6a"/><circle cx="80" cy="95" r="10" fill="#66bb6a"/><circle cx="55" cy="115" r="6" fill="#66bb6a"/><g id="cr" stroke="#1b5e20" stroke-width="4" fill="none" stroke-linecap="round"></g></svg>`,`left:50%;top:8px;transform:translateX(-50%)`);
  C.sc.append(SKE('🪹',`left:calc(50% - 70px);top:110px;font-size:90px;opacity:.9`),C.eg);C.cr=C.eg.querySelector('#cr')},
 hit(b,C,k){const L=['M60 18 l-8 14 l10 8','M20 70 l14 4 l-4 12 l12 6','M100 60 l-12 8 l6 10','M40 130 l8 -12 l10 6 l8 -10','M80 30 l6 16 l-10 8','M95 110 l-14 -6 l-4 14','M30 100 l16 -6 l6 10','M70 70 l10 10 l-8 10'];C.cr.innerHTML=L.slice(0,Math.ceil(k*8/C.rounds)).map(d=>`<path d="${d}"/>`).join('');
  C.eg.style.animation='skwob .4s 2'},
 done(C){C.eg.innerHTML='<div style="font-size:120px;line-height:1">🐉</div>';SKA(C.eg,[{transform:'translateX(-50%) scale(.2)'},{transform:'translateX(-50%) scale(1.15)'},{transform:'translateX(-50%) scale(1)'}],800)}},
/* 10. Детектив */
{n:'Детектив',em:'🕵️',win:'Жұмбақ шешілді!',sbg:'linear-gradient(#37474f,#263238)',opt:SKO('sk-card'),CL:['🐾','🧤','🎩','🔑','🍒','🧶','🔦','📜','🥾','🪶'],
 init(C){C.sc.append(SKE('🕵️',`left:20px;top:40px;font-size:90px`),SKE('Кім шиені жеп кетті? Іздерді жина!',`left:140px;top:14px;font-size:24px;font-weight:900;color:#ffeb3b`));
  C.sl=[...Array(C.rounds)].map((_,i)=>{const d=SKE('❓',`left:${140+i*Math.min(110,1200/C.rounds)}px;top:70px;width:90px;height:90px;border-radius:18px;background:#455a64;display:grid;place-items:center;font-size:52px;border:3px dashed #90a4ae`);C.sc.append(d);return d})},
 hit(b,C,k){const d=C.sl[k-1];d.textContent=SKINS[9].CL[(k-1)%10];d.style.background='#fff8e1';d.style.border='3px solid #ffca28';SKA(d,[{transform:'scale(.5)'},{transform:'scale(1.15)'},{transform:'scale(1)'}],400)},
 done(C){const d=SKE('🦝 Шиені ракун жеген екен!',`left:50%;top:50%;transform:translate(-50%,-50%);background:#fff;border-radius:24px;padding:20px 30px;font-size:40px;font-weight:900;color:#1a2a5a;z-index:9`);C.sc.append(d)}},
/* 11. Ғарыш кемесі */
{n:'Ғарыш кемесі',em:'🛸',win:'Кеме Айға жетті!',sbg:'#0d1b4c radial-gradient(circle,#ffffff 1px,transparent 2px) 0 0/40px 40px',opt:(h,i)=>{const b=SKO('sk-planet')(h);b.style.background=['radial-gradient(circle at 30% 30%,#ffb74d,#e65100)','radial-gradient(circle at 30% 30%,#81d4fa,#0277bd)','radial-gradient(circle at 30% 30%,#ce93d8,#6a1b9a)','radial-gradient(circle at 30% 30%,#a5d6a7,#2e7d32)'][i%4];return b},
 init(C){C.sc.style.animation='skstars 6s linear infinite';C.s=SKE('🚀',`left:50%;bottom:6px;font-size:64px;transform:translateX(-50%) rotate(-45deg);transition:left .5s`);C.sc.append(C.s,SKE('🌍',`left:16px;bottom:8px;font-size:50px`),SKE('🌙',`right:16px;top:8px;font-size:56px`));
  C.bar=SKE('',`left:80px;right:90px;top:20px;height:12px;border-radius:9px;background:#ffffff33`);C.f=SKE('',`left:0;top:0;bottom:0;width:0;border-radius:9px;background:linear-gradient(90deg,#ffeb3b,#ff9800);transition:width .6s`);C.bar.append(C.f);C.sc.append(C.bar);
  C.met=SKE('☄️',`right:-60px;top:70px;font-size:44px`);C.sc.append(C.met)},
 hit(b,C,k){const r=SKC(b,C.sc);C.s.style.left=r.x+'px';C.f.style.width=(k*100/C.rounds)+'%';setTimeout(()=>SKA(C.s,[{transform:'translateX(-50%) rotate(-45deg) translateY(0)'},{transform:'translateX(-50%) rotate(-45deg) translate(40px,-40px)'},{transform:'translateX(-50%) rotate(-45deg) translateY(0)'}],600),500)},
 miss(b,C){SKA(C.met,[{transform:'translate(0,0)'},{transform:'translate(-1500px,40px)'}],1200,{fill:'none'});SKA(C.s,[{transform:'translateX(-50%) rotate(-45deg)'},{transform:'translateX(-55%) rotate(-30deg)'},{transform:'translateX(-50%) rotate(-45deg)'}],400)}},
/* 12. Жанартау */
{n:'Жанартау',em:'🌋',win:'Жанартау тынышталды!',sbg:'linear-gradient(#ffccbc,#ffe0b2 70%,#8d6e63 70%)',opt:SKO('sk-cloud'),
 init(C){C.v=SKE(`<svg viewBox="0 0 240 150" width="260" height="165"><path d="M10 150 L95 30 L145 30 L230 150 Z" fill="#6d4c41"/><path id="lv" d="M95 30 L145 30 L135 60 L120 50 L105 64 Z" fill="#ff7043"/></svg>`,`left:50%;bottom:0;transform:translateX(-50%)`);C.sc.append(C.v);
  C.h=0;C.hm=SKE('',`left:20px;top:16px;font-size:26px;font-weight:900;color:#4e342e`);C.pl=SKE('',`left:20px;bottom:6px;font-size:36px`);C.sc.append(C.hm,C.pl);SKINS[11].draw(C)},
 draw(C){C.hm.textContent='🌡️ Қызу: '+'🔥'.repeat(C.h)+'·'.repeat(3-C.h);C.v.querySelector('#lv').style.fill=['#ffab91','#ff7043','#f4511e','#d84315'][C.h]},
 tick(C){if(C.h>0&&Math.random()<.5){const d=SKE('💨',`left:calc(50% - 20px);top:0;font-size:36px;animation:skpuff 1.5s forwards`);C.sc.append(d);setTimeout(()=>d.remove(),1500)}},
 hit(b,C){C.h=Math.max(0,C.h-1);SKINS[11].draw(C);C.pl.textContent='🌱'.repeat(C.k);SKFX(C.sc,'💧 Салқындады',640,20)},
 miss(b,C){C.h++;if(C.h>=3){C.h=0;for(let i=0;i<10;i++){const d=SKE('🔥',`left:calc(50% - 20px);top:20px;font-size:34px`);C.sc.append(d);SKA(d,[{transform:'translate(0,0)'},{transform:`translate(${(Math.random()-.5)*500}px,${-30+Math.random()*120}px)`,opacity:0}],1000);setTimeout(()=>d.remove(),1100)}C.v.style.animation='skshake .2s 5'}SKINS[11].draw(C)}},
/* 13. Жылан */
{n:'Жылан',em:'🐍',win:'Жылан ұп-ұзын болды!',sbg:'linear-gradient(#aed581,#9ccc65)',opt:SKO('sk-apple'),
 init(C){C.sn=SKE('',`left:30px;top:60px;display:flex;gap:2px;align-items:center;transition:left 1s`);C.sc.append(C.sn);SKINS[12].draw(C)},
 draw(C){const n=2+C.k;C.sn.innerHTML=[...Array(n)].map((_,i)=>`<div style="width:${i===n-1?54:44}px;height:${i===n-1?54:44}px;border-radius:50%;background:${i%2?'#43a047':'#66bb6a'};border:3px solid #1b5e20;display:grid;place-items:center;font-size:26px;animation:skbob 1s ${i*.1}s infinite">${i===n-1?'👀':''}</div>`).join('')},
 hit(b,C){SKINS[12].draw(C);SKFX(C.sc,'+1 🍎',140+C.k*48,30)}},
/* 14. Динозаврдан қаш */
{n:'Динозаврдан қаш',em:'🦖',win:'Үйге аман жеттің!',sbg:'linear-gradient(#b3e5fc,#e1f5fe 70%,#c5a880 70%)',opt:SKO('sk-bolt'),
 init(C){C.sc.append(SKE('🏠',`right:2%;bottom:40px;font-size:80px`),SKE('☁️',`left:30%;top:10px;font-size:50px;animation:skfloat 6s infinite`));
  C.kid=SKE('<span style="display:inline-block;transform:scaleX(-1)">🏃</span>',`left:16%;bottom:44px;font-size:58px;transition:left .7s`);C.dn=SKE('<span style="display:inline-block;transform:scaleX(-1)">🦖</span>',`left:2%;bottom:40px;font-size:72px;transition:left .9s`);C.sc.append(C.kid,C.dn);C.x=16;C.d=2},
 hit(b,C,k){C.x=16+k*66/C.rounds;C.kid.style.left=C.x+'%';C.d=Math.min(C.x-14,C.d+66/C.rounds*.75);C.dn.style.left=C.d+'%';SKA(C.kid,[{transform:'translateY(0)'},{transform:'translateY(-50px)'},{transform:'translateY(0)'}],500)},
 miss(b,C){C.d=Math.min(C.x-5,C.d+5);C.dn.style.left=C.d+'%'}},
/* 15. Конвейер */
{n:'Конвейер',em:'🏭',win:'Барлық қорап жиналды!',sbg:'linear-gradient(#cfd8dc,#b0bec5)',opt:SKO('sk-crate'),
 obCss:'background:repeating-linear-gradient(90deg,#455a64 0 40px,#37474f 40px 80px);border-radius:20px;padding:18px 10px 26px;animation:skbelt 1.2s linear infinite;box-shadow:inset 0 -8px 0 #263238',
 init(C){C.sc.append(SKE('🤖',`left:40px;top:40px;font-size:90px`),SKE('Дұрыс жүкті таңда — қорапқа салайын!',`left:160px;top:20px;font-size:26px;font-weight:900;color:#263238`));C.bx=SKE('',`left:160px;top:76px;font-size:56px;letter-spacing:4px`);C.sc.append(C.bx)},
 after(C){[...C.ob.children].forEach((b,i)=>b.style.animation=`skfloat ${2.4+i*.3}s ease-in-out infinite`)},
 hit(b,C){SKA(b,[{transform:'translateY(0) scale(1)',opacity:1},{transform:'translateY(-300px) scale(.3)',opacity:0}],600);C.bx.textContent='📦'.repeat(C.k)}},
/* 16. Жылан мен саты */
{n:'Жылан мен саты',em:'🪜',win:'Мәреге жеттің!',sbg:'#fff8e1',h:196,opt:SKO('sk-card'),
 init(C){C.cells=[];for(let i=0;i<20;i++){const r=i<10?1:0,c=i<10?i:19-i;const d=SKE(`<b>${i+1}</b>`,`left:${30+c*136}px;top:${8+r*92}px;width:130px;height:86px;border-radius:14px;background:${['#ffcdd2','#c8e6c9','#bbdefb','#fff9c4'][(i+r)%4]};font-size:20px;color:#5d4037;padding:4px 8px`);C.sc.append(d);C.cells.push(d)}
  [[3,'🪜'],[8,'🐍'],[12,'🪜'],[16,'🐍']].forEach(([i,e])=>C.cells[i].insertAdjacentHTML('beforeend',`<span style="position:absolute;right:8px;bottom:4px;font-size:38px;opacity:.7">${e}</span>`));C.cells[19].insertAdjacentHTML('beforeend','<span style="position:absolute;right:8px;bottom:4px;font-size:44px">🏆</span>');
  C.tk=SKE('🔴',`font-size:46px;transition:left .6s,top .6s;z-index:5`);C.sc.append(C.tk);C.p=0;SKINS[15].draw(C)},
 draw(C){const d=C.cells[C.p];C.tk.style.left=(d.offsetLeft+40)+'px';C.tk.style.top=(d.offsetTop+22)+'px'},
 hit(b,C,k){C.p=k>=C.rounds?19:Math.min(18,Math.round(k*19/C.rounds));SKINS[15].draw(C)},miss(b,C){SKA(C.tk,[{transform:'rotate(0)'},{transform:'rotate(-30deg)'},{transform:'rotate(30deg)'},{transform:'rotate(0)'}],400)}},
/* 17. Сәттілік дөңгелегі */
{n:'Сәттілік дөңгелегі',em:'🎡',win:'Ұпайды жинап алдың!',sbg:'linear-gradient(#fce4ec,#f8bbd0)',opt:SKO('sk-card'),V:[10,20,50,100,'×2',20,30,50],
 init(C){const V=SKINS[16].V,cl=['#ef5350','#ffa726','#ffee58','#66bb6a','#42a5f5','#ab47bc','#26c6da','#ec407a'];
  C.wh=SKE(`<svg viewBox="-100 -100 200 200" width="176" height="176">${V.map((v,i)=>{const a=i*45*Math.PI/180,b=(i+1)*45*Math.PI/180;return`<path d="M0 0 L${95*Math.sin(a)} ${-95*Math.cos(a)} A95 95 0 0 1 ${95*Math.sin(b)} ${-95*Math.cos(b)} Z" fill="${cl[i]}" stroke="#fff" stroke-width="3"/><text x="${60*Math.sin(a+.39)}" y="${-60*Math.cos(a+.39)+7}" text-anchor="middle" font-size="20" font-weight="900" fill="#1a2a5a">${v}</text>`}).join('')}<circle r="14" fill="#fff"/></svg>`,`left:80px;top:7px;transition:transform 1.4s cubic-bezier(.2,.8,.2,1)`);
  C.sc.append(C.wh,SKE('▼',`left:155px;top:-6px;font-size:34px;color:#1a2a5a;z-index:3`));C.sco=SKE('0',`right:80px;top:30px;font-size:90px;font-weight:900;color:#ad1457`);C.inf=SKE('',`left:320px;top:60px;font-size:34px;font-weight:900;color:#1a2a5a`);C.sc.append(C.sco,C.inf);C.pts=0;C.rot=0},
 before(C){const i=rnd(0,7);C.cv=SKINS[16].V[i];C.rot+=720+(360-i*45-22.5)-(C.rot%360);C.wh.style.transform=`rotate(${C.rot}deg)`;C.inf.textContent='';setTimeout(()=>C.inf.textContent='Бұл сұрақ: '+C.cv+(typeof C.cv==='number'?' ұпай':' — ұпайыңды екі есе'),1400)},
 hit(b,C){C.pts=typeof C.cv==='number'?C.pts+C.cv:Math.max(10,C.pts*2);C.sco.textContent=C.pts;SKA(C.sco,[{transform:'scale(1)'},{transform:'scale(1.3)'},{transform:'scale(1)'}],400)},res:C=>'Ұпай: '+C.pts},
/* 18. Бомбаны залалсыздандыр */
{n:'Бомба',em:'💣',win:'Бомба залалсызданды!',sbg:'linear-gradient(#263238,#37474f)',opt:(h,i)=>{const b=SKO('sk-wire')(h);b.style.background=['#e53935','#1e88e5','#43a047','#fdd835'][i%4];return b},
 init(C){C.sc.append(SKE('💣',`left:60px;top:30px;font-size:110px`));C.tm=SKE('',`left:210px;top:40px;font-family:monospace;font-size:72px;font-weight:900;color:#ff1744;background:#000;padding:4px 18px;border-radius:12px;box-shadow:0 0 18px #ff1744`);
  C.wr=SKE('',`left:480px;top:50px;display:flex;gap:14px`);C.wr.innerHTML=[...Array(C.rounds)].map((_,i)=>`<div style="width:22px;height:96px;border-radius:10px;background:${['#e53935','#1e88e5','#43a047','#fdd835','#ab47bc','#ff7043'][i%6]}"></div>`).join('');C.sc.append(C.tm,C.wr);C.t=C.sec||40},
 before(C){C.t=C.sec||40},tick(C){if(!C.cur||C.ob.dataset.l)return;C.t-=.5;if(C.t<=0){C.t=C.sec||40;SKFX(C.sc,'💥 Бум! Тағы байқа!',160,60);C.sc.style.animation='skshake .2s 4';setTimeout(()=>C.sc.style.animation='',900)}C.tm.textContent='00:'+String(Math.ceil(C.t)).padStart(2,'0')},
 hit(b,C,k){const w=C.wr.children[k-1];if(w){w.style.background='linear-gradient(#777 0 40%,transparent 40% 55%,#777 55%)';w.style.opacity=.5}C.t=C.sec||40}},
/* 19. Аралдағы қазына */
{n:'Аралдағы қазына',em:'🏝️',win:'Қазына табылды!',sbg:'linear-gradient(#4fc3f7,#0288d1)',opt:SKO('sk-gem'),
 init(C){const n=C.rounds+1;C.pt=[...Array(n)].map((_,i)=>({x:60+i*(1260/(n-1)),y:i%2?40:110}));C.pt.forEach((p,i)=>C.sc.append(SKE(i===n-1?'🧰':'🏝️',`left:${p.x-30}px;top:${p.y}px;font-size:${i===n-1?60:52}px`)));
  C.bt=SKE('⛵',`left:${C.pt[0].x-20}px;top:${C.pt[0].y-6}px;font-size:48px;transition:left .9s ease,top .9s ease;z-index:4`);C.sc.append(C.bt);C.sc.append(SKE('〰️ 〰️ 〰️',`left:30%;top:150px;font-size:30px;opacity:.5;animation:skfloat 4s infinite`))},
 hit(b,C,k){const p=C.pt[k];C.bt.style.left=(p.x-20)+'px';C.bt.style.top=(p.y-6)+'px'},
 done(C){const p=C.pt[C.pt.length-1];C.sc.append(SKE('💰✨',`left:${p.x-60}px;top:${p.y-50}px;font-size:56px`))}},
/* 20. Роботты жөнде */
{n:'Роботты жөнде',em:'🤖',win:'Робот тірілді!',sbg:'linear-gradient(#e0f7fa,#b2ebf2)',opt:SKO('sk-bolt'),PT:['Аяқтары','Денесі','Қолдары','Басы','Көздері','Антеннасы','Жүрегі','Шамдары'],
 init(C){C.r=SKE(`<svg viewBox="0 0 120 170" width="130" height="182"><g id="r0"><rect x="35" y="125" width="16" height="38" rx="5" fill="#78909c"/><rect x="69" y="125" width="16" height="38" rx="5" fill="#78909c"/></g><rect id="r1" x="25" y="72" width="70" height="58" rx="10" fill="#90a4ae"/>
  <g id="r2"><rect x="6" y="78" width="16" height="42" rx="6" fill="#78909c"/><rect x="98" y="78" width="16" height="42" rx="6" fill="#78909c"/></g><rect id="r3" x="32" y="28" width="56" height="44" rx="10" fill="#b0bec5"/><g id="r4"><circle cx="48" cy="48" r="7" fill="#29b6f6"/><circle cx="72" cy="48" r="7" fill="#29b6f6"/></g>
  <g id="r5"><line x1="60" y1="28" x2="60" y2="10" stroke="#607d8b" stroke-width="4"/><circle cx="60" cy="8" r="6" fill="#ff5252"/></g><path id="r6" d="M60 112 l-10 -10 a6 6 0 0 1 10 -6 a6 6 0 0 1 10 6 z" fill="#e53935"/><g id="r7"><circle cx="40" cy="84" r="4" fill="#ffeb3b"/><circle cx="52" cy="84" r="4" fill="#76ff03"/><circle cx="64" cy="84" r="4" fill="#ff4081"/></g></svg>`,`left:50%;top:2px;transform:translateX(-50%)`);
  C.lab=SKE('',`left:24px;top:20px;font-size:28px;font-weight:900;color:#006064`);C.sc.append(C.r,C.lab);SKINS[19].draw(C,0)},
 draw(C,k){const n=Math.ceil(k*8/C.rounds);for(let i=0;i<8;i++){const p=C.r.querySelector('#r'+i);p.style.transition='opacity .5s';p.style.opacity=i<n?1:.08}C.lab.textContent=n?'🔧 '+SKINS[19].PT[n-1]+' орнатылды':'Роботты бөлшектен құрастыр!'},
 hit(b,C,k){SKINS[19].draw(C,k)},done(C){C.r.style.animation='skdance .5s infinite';C.sc.append(SKE('🎶',`left:calc(50% + 90px);top:30px;font-size:50px;animation:skbob 1s infinite`))}}
];
const SKP=(()=>{const v=new URLSearchParams(location.search).get('skin');return v==null||v===''?null:+v})();
const KPKS=a=>a[rnd(0,a.length-1)];
/* Ойындарға түрді кезекпен бөлу: әр беттегі викториналар SKINS бойынша айналып шығады */
function SKASSIGN(seed){let i=seed%SKINS.length;for(const id in GAMES){const f=GAMES[id];if(f&&f._qz){f._skin=i%SKINS.length;i++}}}
