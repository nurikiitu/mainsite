/* neuroUstaz · Жаңа анимациялы ойындар: Айдаһар, Балық аулау, Асхана, Садақ ату, Ара, Жол жарысы, Бақша, Ойыншық автомат */
(()=>{const s=document.createElement('style');s.textContent=`
@keyframes fbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}
@keyframes fsway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}
@keyframes fwing{0%,100%{transform:scaleY(1)}50%{transform:scaleY(.82)}}
@keyframes fcloud{from{transform:translateX(-200px)}to{transform:translateX(1700px)}}
@keyframes fspin{to{transform:rotate(360deg)}}
@keyframes fdash{to{stroke-dashoffset:-120}}
@keyframes fbub{from{transform:translateY(0);opacity:.8}to{transform:translateY(-560px);opacity:0}}
@keyframes fpulse{0%,100%{transform:scale(1)}50%{transform:scale(1.08)}}
.fl{background:#fff;color:#1a2a5a;font-weight:900;border-radius:16px;padding:2px 14px;box-shadow:0 5px 0 #0003;white-space:nowrap;text-shadow:none;display:inline-block}
.fsc{position:relative;flex:1;min-height:0;width:100%;border-radius:28px;overflow:hidden;box-shadow:inset 0 0 0 4px #ffffff55,0 8px 0 #0002}
.fa{position:absolute}
.fbtn{width:96px;height:96px;border-radius:50%;border:6px solid #fff;font-size:42px;font-weight:900;display:grid;place-items:center;box-shadow:0 7px 0 #0003;cursor:pointer}
.fpop{position:absolute;font-weight:900;font-size:34px;color:#fff;background:#43a047;padding:6px 18px;border-radius:16px;box-shadow:0 6px 0 #2e7d32;pointer-events:none;white-space:nowrap}
`;document.head.append(s)})();
const FUN={};
const FE=(h,css,cls='fa')=>{const d=el('div',cls,h);if(css)d.style.cssText+=css;return d};
const FPOP=(host,txt,x,y,bad)=>{const p=FE(txt,`left:${x}px;top:${y}px;${bad?'background:#e53935;box-shadow:0 6px 0 #b71c1c':''}`,'fpop');host.append(p);p.animate([{transform:'translateY(0) scale(.5)',opacity:0},{transform:'translateY(-20px) scale(1.1)',opacity:1,offset:.3},{transform:'translateY(-90px) scale(1)',opacity:0}],{duration:1300,easing:'ease-out'}).onfinish=()=>p.remove()};
/* ортақ цикл: прогресс, сұрақ, раундтар, тарих (NRG) */
function FLOOP(box,T,lv,o){const n=o.n||8;const G=NRG(o.gen,lv);let k=0;const t0=Date.now();box.innerHTML='';
 const W=el('div','');W.style.cssText='position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;gap:8px;padding:10px 22px 14px;';box.append(W);
 const st=prog(W,n);const hd=el('div','qline','');hd.style.fontSize='32px';W.append(hd);const sc=el('div','fsc');if(o.bg)sc.style.background=o.bg;W.append(sc);
 const ob=el('div','');ob.style.cssText='display:flex;gap:20px;justify-content:center;flex-wrap:wrap;min-height:'+(o.noOpts?0:110)+'px';if(!o.noOpts)W.append(ob);
 const C={W,sc,hd,ob,lv,n,k:0,T,alive:T.alive()};C.reshow=()=>o.show(C,C.t);
 C.answer=(v,e)=>{if(C.lock||!C.t)return;C.lock=true;if(String(v)===String(C.t.a)){T.ok(e);k++;C.k=k;o.good(C,e,v,()=>next())}else{T.bad(e);o.bad(C,e,v,()=>{C.lock=false})}};
 C.tiles=(fs=50)=>{ob.innerHTML='';shuffle(C.t.o).forEach(v=>{const b=el('button','tile'+(String(v).length>4?' wide':''),C.t.oh?C.t.oh(v):String(v));b.style.fontSize=(String(v).length>6?32:fs)+'px';b.dataset.v=v;b.onclick=()=>C.answer(v,b);ob.append(b)})};
 T.reveal=()=>{if(!C.t)return;if(o.reveal)return o.reveal(C);[...W.querySelectorAll('[data-v]')].forEach(x=>{if(x.dataset.v===String(C.t&&C.t.a))x.classList.add('hint')})};
 const next=()=>{if(!C.alive())return;if(k>=n){C.t=null;o.end&&o.end(C);const s=Math.round((Date.now()-t0)/1000);T.later(()=>T.end(box,{em:o.em||'🏆',title:o.win||'Жарайсың!',text:`Уақыт: ${s} сек · ${T.errTxt(ERR)}`,again:()=>FLOOP(box,T,lv,o)}),o.endDelay||1400);return}
  st.set(k);C.t=G(k);hd.innerHTML=C.t.q;C.lock=false;o.show(C,C.t)};
 o.init(C);next();return C}
const FRAF=(C,fn)=>{let last=performance.now();const loop=now=>{if(!C.alive()||!C.sc.isConnected)return;const dt=Math.min(50,now-last)/1000;last=now;fn(dt,now/1000);requestAnimationFrame(loop)};requestAnimationFrame(loop)};

/* ===== 1. Батыр мен айдаһар ===== */
FUN.dragon=(gen)=>(box,T,lv)=>FLOOP(box,T,lv,{gen,em:'🐉',win:'Айдаһар жеңілді! 🏆',bg:'linear-gradient(#311b92,#6a1b9a 58%,#2e7d32 58%,#1b5e20)',
 init(C){const s=C.sc;s.append(FE('','left:0;right:0;top:0;height:58%;background:radial-gradient(circle at 78% 30%,#ffeb3b44,transparent 40%),radial-gradient(circle,#fff 1px,transparent 2px) 0 0/60px 60px;opacity:.9'));
  s.append(FE('🌕','right:9%;top:16px;font-size:70px'),FE('🏔️','left:38%;top:18%;font-size:120px;opacity:.5'));
  C.hero=FE('<div style="transform:scaleX(-1)">🤺</div>','left:140px;bottom:40px;font-size:170px;line-height:1;animation:fbob 1.6s ease-in-out infinite');
  C.dr=FE('🐉','right:90px;bottom:30px;font-size:280px;line-height:1;animation:fbob 2.2s ease-in-out infinite;filter:drop-shadow(0 12px 0 #0004)');s.append(C.hero,C.dr);
  C.hp=C.n;C.lives=3;const hb=FE(`<div style="font-weight:900;font-size:24px;text-shadow:0 2px 0 #0006;text-align:right">🐉 Айдаһар · <span class="hpn">${C.hp}</span></div><div style="height:30px;border-radius:15px;background:#0006;border:3px solid #fff;overflow:hidden"><div class="hpb" style="width:100%;height:100%;margin-left:auto;background:linear-gradient(90deg,#ff1744,#ff9100);transition:width .5s"></div></div>`,'right:40px;top:20px;width:440px;color:#fff');
  const lf=FE('','left:40px;top:20px;color:#fff');s.append(hb,lf);C.drawL=()=>{lf.innerHTML=`<div style="font-weight:900;font-size:24px;text-shadow:0 2px 0 #0006">🧑 Батыр</div><div style="font-size:42px">${'❤️'.repeat(C.lives)}${'🤍'.repeat(3-C.lives)}</div>`};C.drawL();C.hb=hb;C.combo=0},
 show(C){C.tiles()},
 good(C,e,v,nx){C.combo++;C.hero.animate([{transform:'translateX(0)'},{transform:'translateX(520px) rotate(8deg)',offset:.45},{transform:'translateX(0)'}],{duration:650,easing:'ease-in-out'});
  T.later(()=>{const sl=FE(C.combo>=3?'⚡💥':'⚔️💥','right:260px;bottom:180px;font-size:110px;z-index:5');C.sc.append(sl);sl.animate([{transform:'scale(.2) rotate(-40deg)',opacity:0},{transform:'scale(1.3) rotate(10deg)',opacity:1},{transform:'scale(1)',opacity:0}],{duration:700}).onfinish=()=>sl.remove();
   C.dr.animate([{filter:'brightness(3) drop-shadow(0 0 30px red)',transform:'translateX(0)'},{transform:'translateX(40px)'},{transform:'translateX(-20px)'},{filter:'none',transform:'translateX(0)'}],{duration:500});
   C.hp--;C.hb.querySelector('.hpb').style.width=(C.hp/C.n*100)+'%';C.hb.querySelector('.hpn').textContent=C.hp;FPOP(C.sc,C.combo>=3?`🔥 Комбо ×${C.combo}!`:'−1 ❤️',1050,120);
   if(C.hp<=0){C.dr.style.animation='none';C.dr.animate([{transform:'rotate(0)',opacity:1},{transform:'rotate(80deg) translateY(120px)',opacity:0}],{duration:1100,fill:'forwards'});T.later(()=>C.sc.append(FE('💰👑💎','right:200px;bottom:60px;font-size:110px;animation:fpulse 1s infinite')),900)}},320);T.later(nx,1100)},
 bad(C,e,v,un){C.combo=0;const f=FE('🔥','right:330px;bottom:150px;font-size:100px;z-index:5');C.sc.append(f);f.animate([{transform:'translateX(0) scale(.6)'},{transform:'translateX(-860px) scale(1.4)'}],{duration:600,easing:'ease-in'}).onfinish=()=>{f.remove();
   C.hero.animate([{transform:'translateX(0)'},{transform:'translateX(-30px)'},{transform:'translateX(20px)'},{transform:'translateX(0)'}],{duration:400});C.lives--;if(C.lives<=0){C.lives=3;FPOP(C.sc,'💪 Тағы бір мүмкіндік!',200,150,true)}C.drawL()};T.later(un,900)}});

/* ===== 2. Балық аулау ===== */
FUN.fish=(gen)=>(box,T,lv)=>FLOOP(box,T,lv,{gen,em:'🎣',win:'Керемет балықшы! 🐟',bg:'linear-gradient(#81d4fa 0 16%,#0288d1 16%,#01579b)',
 init(C){const s=C.sc;s.append(FE('','left:0;right:0;top:15%;height:30px;background:repeating-radial-gradient(circle at 40px -10px,#fff 0 12px,transparent 13px 40px);opacity:.5'));
  for(let i=0;i<8;i++){const b=FE('🫧',`left:${rnd(20,1400)}px;bottom:-40px;font-size:${rnd(18,40)}px;animation:fbub ${rnd(5,9)}s ${rnd(0,5)}s linear infinite`);s.append(b)}
  s.append(FE('🌿🪸','left:20px;bottom:6px;font-size:60px'),FE('🪸🌿','right:20px;bottom:6px;font-size:60px'));
  C.boat=FE('🚣','left:690px;top:-6px;font-size:90px;animation:fbob 2.5s infinite');C.line=FE('','left:752px;top:70px;width:4px;height:40px;background:#fff');C.hook=FE('🪝','left:735px;top:100px;font-size:40px');s.append(C.boat,C.line,C.hook);
  C.cnt=0;C.bk=FE('🪣 0','right:24px;top:14px;font-size:28px','fa fl');s.append(C.bk);C.fish=[];
  FRAF(C,(dt)=>{const Wd=C.sc.clientWidth||1450;C.fish.forEach(f=>{if(f.caught)return;f.x+=f.v*f.dir*dt;if(f.x>Wd+40)f.x=-260;if(f.x<-280)f.x=Wd+20;f.ph+=dt*3;f.el.style.transform=`translate(${f.x}px,${f.y+Math.sin(f.ph)*10}px)`})})},
 show(C,t){C.fish.forEach(f=>f.el.remove());C.fish=[];const E=['🐟','🐠','🐡','🐟','🐠'];const os=shuffle(t.o);const lanes=shuffle([0,1,2,3,4]).slice(0,os.length).sort();
  os.forEach((v,i)=>{const dir=i%2?-1:1;const el2=FE(`<span style="font-size:96px;display:inline-block;${dir<0?'':'transform:scaleX(-1)'}">${E[i%5]}</span><span class="fl" style="font-size:38px;vertical-align:middle">${v}</span>`,'left:0;top:0;cursor:pointer;display:flex;align-items:center;gap:2px;flex-direction:'+(dir<0?'row':'row-reverse'));
   el2.dataset.v=v;const f={el:el2,v:L3(C.lv,70,100,140)+rnd(0,40),dir,x:rnd(0,1200),y:150+lanes[i]*(C.sc.clientHeight-230)/4.5,ph:rnd(0,6)};el2.onclick=()=>{C.cur=f;C.answer(v,el2.lastChild)};C.sc.append(el2);C.fish.push(f)})},
 good(C,e,v,nx){const f=C.cur;f.caught=true;const fy=f.y+20;C.line.animate([{height:'40px'},{height:(fy-60)+'px'}],{duration:300,fill:'forwards'});
  f.el.animate([{transform:f.el.style.transform},{transform:`translate(700px,${fy}px)`}],{duration:300,fill:'forwards'});
  T.later(()=>{C.line.animate([{height:(fy-60)+'px'},{height:'40px'}],{duration:500,fill:'forwards'});f.el.animate([{transform:`translate(700px,${fy}px)`},{transform:'translate(700px,20px) rotate(-30deg)'},{transform:'translate(1350px,-40px) scale(.3)',opacity:0}],{duration:900,fill:'forwards'});
   C.cnt++;T.later(()=>{C.bk.textContent='🪣 '+C.cnt;C.bk.animate([{transform:'scale(1.4)'},{transform:'scale(1)'}],{duration:400})},800);C.fish.forEach(o=>{if(o!==f)o.v*=4})},320);T.later(nx,1500)},
 bad(C,e,v,un){const f=C.cur;f.v*=5;f.el.animate([{filter:'none'},{filter:'hue-rotate(180deg)'},{filter:'none'}],{duration:500});FPOP(C.sc,'❌ Қашып кетті!',Math.max(20,Math.min(1200,f.x)),Math.max(10,f.y-40),true);T.later(()=>{f.v/=5},900);T.later(un,700)}});

/* ===== 3. Апамның асханасы: алманы қазанға сүйреп сал ===== */
FUN.kitchen=(gen)=>(box,T,lv)=>FLOOP(box,T,lv,{gen,em:'🥧',win:'Бәліш дайын! Апа риза 😊',bg:'linear-gradient(#fff3e0 0 60%,#bcaaa4 60%)',noOpts:true,n:6,
 init(C){const s=C.sc;s.append(FE('','left:0;right:0;top:0;height:50px;background:repeating-linear-gradient(90deg,#ef9a9a 0 40px,#fff 40px 80px)'));
  C.bask=FE('<div style="position:absolute;left:150px;top:-26px;background:#4e342e;color:#fff;font-weight:900;font-size:24px;padding:2px 14px;border-radius:10px">🧺 Себет</div>','left:50px;top:250px;width:470px;height:250px;border-radius:0 0 130px 130px;background:linear-gradient(#a1887f,#6d4c41);border:6px solid #4e342e');
  C.pot=FE('<div class="pin" style="position:absolute;left:14px;right:14px;top:10px;display:flex;flex-wrap:wrap;gap:0;justify-content:center"></div>','left:840px;top:250px;width:380px;height:230px;border-radius:0 0 170px 170px;background:linear-gradient(#546e7a,#263238);border:6px solid #1c262b');
  s.append(C.bask,C.pot,FE('','left:826px;top:236px;width:408px;height:30px;border-radius:14px;background:#37474f'),FE('♨️','left:960px;top:150px;font-size:64px;opacity:.8;animation:fbob 2s infinite'));
  C.cntE=FE('0','left:1260px;top:300px;font-size:60px','fa fl');C.gm=FE('👵','right:40px;top:60px;font-size:150px;animation:fbob 2.4s infinite');C.say=FE('','right:30px;top:30px;font-size:22px;max-width:300px;white-space:normal','fa fl');
  C.chk=el('button','tile','✅ Тексер');C.chk.style.cssText='position:absolute;left:880px;bottom:14px;height:76px;font-size:34px;min-width:260px';C.chk.onclick=()=>C.answer(C.inPot,C.chk);
  C.hint=FE('👆 Алманы ұстап, қазанға апар (немесе басып қой)','left:40px;bottom:16px;color:#4e342e;font-weight:900;font-size:22px');s.append(C.cntE,C.gm,C.say,C.chk,C.hint)},
 show(C,t){C.sc.querySelectorAll('.apl').forEach(a=>a.remove());C.inPot=0;C.cntE.textContent='0';C.say.textContent='Балам, көмектесші! 🍎';
  const M=Math.min(24,t.a+rnd(2,5));const pin=C.pot.querySelector('.pin');
  const toPot=a=>{if(C.lock)return;const r0=a.getBoundingClientRect();a.dataset.in='1';pin.append(a);a.style.cssText='position:relative;font-size:46px;cursor:pointer;line-height:1';const r1=a.getBoundingClientRect();a.animate([{transform:`translate(${(r0.left-r1.left)/SCALE}px,${(r0.top-r1.top)/SCALE}px) scale(1.6)`},{transform:'translateY(-40px) scale(1.2)',offset:.7},{transform:'none'}],{duration:450,easing:'ease-out'});C.inPot++;upd()};
  const back=a=>{if(C.lock)return;a.dataset.in='';a.remove();place(a,a._i);C.inPot--;upd()};
  const upd=()=>{C.cntE.textContent=C.inPot;C.cntE.animate([{transform:'scale(1.3)'},{transform:'scale(1)'}],{duration:250})};
  const place=(a,i)=>{a.style.cssText=`position:absolute;left:${80+(i%7)*60}px;top:${270+Math.floor(i/7)*56}px;font-size:66px;cursor:grab;line-height:1;z-index:3;touch-action:none`;C.sc.append(a)};
  for(let i=0;i<M;i++){const a=FE('🍎','','apl');a._i=i;place(a,i);a._tap=()=>a.dataset.in?back(a):toPot(a);a.onclick=a._tap;if(typeof DRAG==='function')DRAG(a,()=>[C.pot],()=>{if(!a.dataset.in)toPot(a)})}},
 good(C,e,v,nx){C.say.textContent='Жарайсың, балам! 😍';C.gm.animate([{transform:'scale(1)'},{transform:'scale(1.15) rotate(6deg)'},{transform:'scale(1)'}],{duration:600});C.pot.animate([{transform:'translateY(0)'},{transform:'translateY(-12px)'},{transform:'translateY(0)'}],{duration:500});T.later(nx,1400)},
 bad(C,e,v,un){const d=C.t.a-C.inPot;C.say.textContent=d>0?`Тағы ${d} алма керек 🙂`:`${-d} алма артық, қайта ал 🙂`;C.gm.animate([{transform:'rotate(0)'},{transform:'rotate(-8deg)'},{transform:'rotate(8deg)'},{transform:'rotate(0)'}],{duration:500});T.later(un,500)},
 reveal(C){C.say.textContent=`Қазанда ${C.t.a} алма болу керек 😉`}});

/* ===== 4. Садақ ату ===== */
FUN.archery=(gen)=>(box,T,lv)=>FLOOP(box,T,lv,{gen,em:'🏹',win:'Мерген атансың! 🎯',bg:'linear-gradient(#4fc3f7,#b3e5fc 56%,#9ccc65 56%,#689f38)',noOpts:true,
 init(C){const s=C.sc;s.append(FE('☁️','left:0;top:20px;font-size:80px;animation:fcloud 30s linear infinite'),FE('☁️','left:0;top:70px;font-size:60px;opacity:.8;animation:fcloud 42s -15s linear infinite'));
  C.bow=FE('<div style="transform:scaleX(-1)">🏹</div>','left:40px;top:250px;font-size:190px;line-height:1;transform-origin:60% 50%;transition:transform .25s');s.append(C.bow);
  C.sco=0;C.sb=FE('🎯 0 ұпай · 💨 Жел →','left:24px;top:14px;font-size:24px','fa fl');s.append(C.sb);C.tg=[];
  FRAF(C,(dt,tm)=>C.tg.forEach(g=>{if(g.stop)return;g.y=g.y0+Math.sin(tm*g.sp+g.ph)*g.amp;g.el.style.top=g.y+'px'}))},
 show(C,t){C.tg.forEach(g=>g.el.remove());C.tg=[];const os=shuffle(t.o);const N=os.length;
  os.forEach((v,i)=>{const x=430+i*(1000/N);const g={x,y0:140+(i%2)*60,amp:L3(C.lv,30,60,90),sp:L3(C.lv,1,1.6,2.2),ph:rnd(0,6)};
   g.el=FE(`<div style="width:170px;height:170px;border-radius:50%;background:radial-gradient(circle,#fdd835 0 16%,#e53935 16% 34%,#1e88e5 34% 52%,#fff 52% 70%,#263238 70% 74%,#fff 74%);border:5px solid #263238;box-shadow:0 10px 0 #0003;position:relative;cursor:pointer"><div class="fl" style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);font-size:40px;border:4px solid #263238">${v}</div></div><div style="width:12px;height:150px;background:#8d6e63;margin:0 auto"></div>`,`left:${x}px;top:${g.y0}px`);
   g.el.dataset.v=v;g.el.onclick=()=>C.shoot(g,v);C.sc.append(g.el);C.tg.push(g)});
  C.shoot=(g,v)=>{if(C.lock)return;C.lock=true;const tx=g.x+85,ty=g.y+85,bx=200,by=330;const ang=Math.atan2(ty-by,tx-bx)*180/Math.PI;C.bow.style.transform=`rotate(${ang}deg)`;
   const ar=FE('<div style="width:130px;height:8px;background:#6d4c41;border-radius:4px;position:relative"><span style="position:absolute;right:-18px;top:-14px;font-size:30px">➤</span><span style="position:absolute;left:-26px;top:-18px;font-size:30px">🪶</span></div>',`left:${bx}px;top:${by}px;z-index:6`);C.sc.append(ar);
   const mx=(bx+tx)/2,my=Math.min(by,ty)-140;const pts=[];for(let i=0;i<=10;i++){const p=i/10,x=(1-p)*(1-p)*bx+2*(1-p)*p*mx+p*p*tx,y=(1-p)*(1-p)*by+2*(1-p)*p*my+p*p*ty;const dx=2*(1-p)*(mx-bx)+2*p*(tx-mx),dy=2*(1-p)*(my-by)+2*p*(ty-my);pts.push({transform:`translate(${x-bx-120}px,${y-by}px) rotate(${Math.atan2(dy,dx)*180/Math.PI}deg)`})}
   g.stop=true;ar.animate(pts,{duration:550,easing:'linear',fill:'forwards'}).onfinish=()=>{C.lock=false;C.cur=g;C.ar=ar;C.answer(v,g.el.firstChild)}};},
 good(C,e,v,nx){const g=C.cur;C.sco+=10;C.sb.textContent=`🎯 ${C.sco} ұпай · 💨 Жел →`;FPOP(C.sc,'🎯 Дәл тидің! +10',g.x-20,g.y-60);const b=FE('💥',`left:${g.x+40}px;top:${g.y+20}px;font-size:90px;z-index:7`);C.sc.append(b);b.animate([{transform:'scale(.3)',opacity:1},{transform:'scale(1.6)',opacity:0}],{duration:600}).onfinish=()=>b.remove();
  g.el.animate([{transform:'rotate(0)'},{transform:'rotate(-10deg)'},{transform:'rotate(6deg)'},{transform:'rotate(0)'}],{duration:500});T.later(()=>{C.ar&&C.ar.remove();C.bow.style.transform=''},1000);T.later(nx,1300)},
 bad(C,e,v,un){const g=C.cur;FPOP(C.sc,'❌ Қате нысана',g.x,g.y-60,true);const ar=C.ar;ar.animate([{opacity:1},{opacity:0}],{duration:600,fill:'forwards'}).onfinish=()=>ar.remove();g.el.animate([{transform:'translateX(0)'},{transform:'translateX(-14px)'},{transform:'translateX(14px)'},{transform:'translateX(0)'}],{duration:400});T.later(()=>{g.stop=false;C.bow.style.transform=''},500);un()}});

/* ===== 5. Ара мен гүлдер ===== */
FUN.bee=(gen)=>(box,T,lv)=>FLOOP(box,T,lv,{gen,em:'🍯',win:'Бал толды! 🐝',bg:'linear-gradient(#e1f5fe,#b3e5fc 58%,#aed581 58%,#7cb342)',noOpts:true,
 init(C){const s=C.sc;s.append(FE('☀️','left:40px;top:14px;font-size:80px;animation:fspin 20s linear infinite'),FE('☁️','left:0;top:30px;font-size:70px;animation:fcloud 36s linear infinite'));
  C.hive=FE('<div style="font-size:110px;line-height:1">🏠</div>','right:40px;top:30px');C.jar=FE('<div style="position:relative;width:110px;height:130px;border-radius:20px 20px 30px 30px;border:6px solid #fff;background:#ffffff55;overflow:hidden"><div class="hj" style="position:absolute;left:0;right:0;bottom:0;height:0;background:linear-gradient(#ffca28,#ff8f00);transition:height .6s"></div><div style="position:absolute;inset:0;display:grid;place-items:center;font-size:44px">🍯</div></div>','right:60px;top:170px');s.append(C.hive,C.jar);
  C.bee=FE('<div style="animation:fwing .15s infinite">🐝</div>','left:600px;top:60px;font-size:80px;z-index:6;line-height:1');s.append(C.bee);C.bx=600;C.by=60;C.fly=false;C.fl=[];
  FRAF(C,(dt,tm)=>{if(C.fly)return;C.bx=620+Math.sin(tm*.9)*380;C.by=50+Math.sin(tm*1.7)*30;C.bee.style.left=C.bx+'px';C.bee.style.top=C.by+'px';C.bee.firstChild.style.transform=`scaleX(${Math.cos(tm*.9)>0?-1:1})`})},
 show(C,t){C.fl.forEach(f=>f.remove());C.fl=[];const E=['🌸','🌻','🌷','🌼','🌺'];const os=shuffle(t.o);os.forEach((v,i)=>{const x=160+i*(1050/os.length);
  const f=FE(`<div style="animation:fsway ${2+i*.3}s ease-in-out infinite;transform-origin:50% 100%;text-align:center;cursor:pointer"><div style="font-size:110px;line-height:1">${E[i%5]}</div><div class="fl" style="font-size:36px;margin-top:-12px">${v}</div><div style="width:10px;height:140px;background:#43a047;margin:0 auto;border-radius:5px"></div></div>`,`left:${x}px;top:200px`);
  f.dataset.v=v;f._x=x;f.onclick=()=>{if(C.lock)return;C.lock=true;C.fly=true;C.cur=f;C.bee.animate([{left:C.bx+'px',top:C.by+'px'},{left:(x+15)+'px',top:'150px'}],{duration:600,easing:'ease-in-out',fill:'forwards'}).onfinish=()=>{C.bx=x+15;C.by=150;C.lock=false;C.answer(v,f.querySelector('.fl'))}};C.sc.append(f);C.fl.push(f)})},
 good(C,e,v,nx){const d=FE('✨💛✨',`left:${C.bx}px;top:${C.by+70}px;font-size:40px;z-index:5`);C.sc.append(d);d.animate([{opacity:1,transform:'translateY(0)'},{opacity:0,transform:'translateY(-60px)'}],{duration:800}).onfinish=()=>d.remove();
  T.later(()=>{const hx=C.sc.clientWidth-170;C.bee.animate([{left:C.bx+'px',top:C.by+'px'},{left:(C.bx+hx)/2+'px',top:'0px'},{left:hx+'px',top:'60px'}],{duration:900,easing:'ease-in-out',fill:'forwards'}).onfinish=()=>{C.jar.querySelector('.hj').style.height=(C.k/C.n*100)+'%';FPOP(C.sc,'🍯 +1',hx-60,120);T.later(()=>{C.bee.getAnimations().forEach(a=>a.cancel());C.fly=false},500)}},500);T.later(nx,2100)},
 bad(C,e,v,un){const f=C.cur;f.firstChild.animate([{transform:'rotate(0)'},{transform:'rotate(25deg)',filter:'grayscale(1)'},{transform:'rotate(0)'}],{duration:900});FPOP(C.sc,'🥀 Бұл гүл емес!',f._x-20,120,true);
  T.later(()=>{C.bee.getAnimations().forEach(a=>a.cancel());C.fly=false;un()},700)}});

/* ===== 6. Жол жарысы: машина, жүретін жол, 3 қақпа ===== */
FUN.road=(gen)=>(box,T,lv)=>FLOOP(box,T,lv,{gen,em:'🏁',win:'Мәреге жеттің! 🚗',bg:'linear-gradient(#64b5f6,#bbdefb 30%,#8bc34a 30%,#689f38)',noOpts:true,
 init(C){const s=C.sc;const Wd=1456,Hh=560,vx=Wd/2,vy=Hh*.3;C.vx=vx;C.vy=vy;C.Hh=Hh;C.lx=[vx-380,vx,vx+380];
  s.insertAdjacentHTML('beforeend',`<svg class="fa" style="left:0;top:0" width="${Wd}" height="${Hh}" viewBox="0 0 ${Wd} ${Hh}"><polygon points="${vx-40},${vy} ${vx+40},${vy} ${Wd+120},${Hh} ${-120},${Hh}" fill="#616161"/>
   <line x1="${vx-40}" y1="${vy}" x2="${-120}" y2="${Hh}" stroke="#fff" stroke-width="10"/><line x1="${vx+40}" y1="${vy}" x2="${Wd+120}" y2="${Hh}" stroke="#fff" stroke-width="10"/>
   <line x1="${vx-13}" y1="${vy}" x2="${vx-190}" y2="${Hh}" stroke="#fdd835" stroke-width="9" stroke-dasharray="40 40" style="animation:fdash ${L3(C.lv,.9,.7,.5)}s linear infinite"/><line x1="${vx+13}" y1="${vy}" x2="${vx+190}" y2="${Hh}" stroke="#fdd835" stroke-width="9" stroke-dasharray="40 40" style="animation:fdash ${L3(C.lv,.9,.7,.5)}s linear infinite"/></svg>`);
  s.append(FE('⛰️⛰️🏔️⛰️','left:0;right:0;top:'+(vy-110)+'px;text-align:center;font-size:100px;opacity:.7'),FE('☁️','left:0;top:10px;font-size:70px;animation:fcloud 30s linear infinite'));
  const car=FE(`<div style="position:relative;width:230px;height:150px"><div style="position:absolute;left:30px;top:0;width:170px;height:70px;border-radius:40px 40px 6px 6px;background:#c62828"><div style="position:absolute;left:18px;right:18px;top:12px;bottom:6px;border-radius:30px 30px 4px 4px;background:linear-gradient(#90caf9,#e3f2fd)"></div></div>
   <div style="position:absolute;left:0;top:62px;width:230px;height:62px;border-radius:18px;background:linear-gradient(#ef5350,#c62828);box-shadow:0 6px 0 #0004"><div style="position:absolute;left:14px;top:16px;width:46px;height:22px;border-radius:8px;background:#ffeb3b;box-shadow:0 0 16px #ff1744"></div><div style="position:absolute;right:14px;top:16px;width:46px;height:22px;border-radius:8px;background:#ffeb3b;box-shadow:0 0 16px #ff1744"></div><div style="position:absolute;left:80px;top:18px;width:70px;height:24px;border-radius:6px;background:#fff;color:#1a2a5a;font:900 15px Nunito;display:grid;place-items:center">NEURO</div></div>
   <div style="position:absolute;left:14px;top:114px;width:50px;height:36px;border-radius:10px;background:#212121"></div><div style="position:absolute;right:14px;top:114px;width:50px;height:36px;border-radius:10px;background:#212121"></div></div>`,`left:${vx-115}px;top:${Hh-170}px;z-index:8;transition:left .3s cubic-bezier(.3,1.4,.5,1)`);
  C.car=car;C.lane=1;s.append(car);C.setLane=l=>{C.lane=Math.max(0,Math.min(2,l));car.style.left=(C.lx[C.lane]-115)+'px';car.animate([{transform:'rotate(0)'},{transform:`rotate(${l>C.lane?4:-4}deg)`},{transform:'rotate(0)'}],{duration:300})};
  const btn=(t,c,x,f)=>{const b=FE(t,`left:${x}px;bottom:14px;background:${c};z-index:9`,'fa fbtn');b.onclick=f;s.append(b)};btn('◀','#fdd835',40,()=>C.setLane(C.lane-1));btn('▶','#fdd835',Wd-140,()=>C.setLane(C.lane+1));
  C.kh=e=>{if(!C.sc.isConnected)return removeEventListener('keydown',C.kh);if(e.key==='ArrowLeft')C.setLane(C.lane-1);if(e.key==='ArrowRight')C.setLane(C.lane+1)};addEventListener('keydown',C.kh);
  C.coin=0;C.cb=FE('🪙 0','left:24px;top:14px;font-size:26px;z-index:9','fa fl');s.append(C.cb,FE('👈 👉 жолды ауыстыр','right:24px;top:14px;font-size:22px;z-index:9','fa fl'));
  C.trees=()=>{if(!C.alive()||!C.sc.isConnected)return;[-1,1].forEach(sd=>{const t=FE(['🌳','🌲','🌳','🏡'][rnd(0,3)],`left:${vx}px;top:${vy}px;font-size:110px;z-index:1;line-height:1`);s.append(t);t.animate([{transform:`translate(${sd*80-50}px,-100px) scale(.15)`},{transform:`translate(${sd*900-50}px,${Hh-vy}px) scale(1.6)`}],{duration:L3(C.lv,2200,1800,1400),easing:'cubic-bezier(.6,0,1,1)'}).onfinish=()=>t.remove()});T.later(C.trees,L3(C.lv,700,550,420))};C.trees()},
 show(C,t){C.sc.querySelectorAll('.gate').forEach(g=>g.remove());const os=shuffle(t.o).slice(0,3);C.os=os;const cols=['#e53935','#43a047','#1e88e5'];const dur=L3(C.lv,7000,5500,4200);
  os.forEach((v,i)=>{const g=FE(`<div style="width:300px;height:190px;border:16px solid ${cols[i]};border-bottom:0;border-radius:26px 26px 0 0;display:grid;place-items:center;cursor:pointer"><div class="fl" style="font-size:44px">${v}</div></div>`,`left:${C.vx-150}px;top:${C.vy-190}px;transform-origin:50% 100%;z-index:4`,'fa gate');
   g.dataset.v=v;g.onclick=()=>C.setLane(i);const kf=[];for(let j=0;j<=12;j++){const p=j/12,q=p*p;kf.push({transform:`translate(${(C.lx[i]-C.vx)*q}px,${(C.Hh-90-C.vy)*q}px) scale(${.12+q*.95})`})}
   const a=g.animate(kf,{duration:dur,easing:'linear',fill:'forwards'});if(i===0)a.onfinish=()=>{if(!C.alive())return;const lane=C.lane;C.gEl=C.sc.querySelectorAll('.gate')[lane];C.answer(C.os[lane],C.gEl&&C.gEl.firstChild)};C.sc.append(g)})},
 good(C,e,v,nx){C.coin+=5;C.cb.textContent='🪙 '+C.coin;FPOP(C.sc,'🚀 Дұрыс! +5 🪙',C.lx[C.lane]-120,C.Hh-300);C.car.animate([{transform:'translateY(0)'},{transform:'translateY(-30px)'},{transform:'translateY(0)'}],{duration:400});
  T.later(()=>C.sc.querySelectorAll('.gate').forEach(g=>g.animate([{opacity:1},{opacity:0}],{duration:300,fill:'forwards'})),300);T.later(nx,800)},
 bad(C,e,v,un){FPOP(C.sc,'🚧 Қате қақпа!',C.lx[C.lane]-110,C.Hh-300,true);C.car.animate([{transform:'rotate(0)'},{transform:'rotate(-8deg) translateX(-20px)'},{transform:'rotate(8deg) translateX(20px)'},{transform:'rotate(0)'}],{duration:500});
  T.later(()=>{C.sc.querySelectorAll('.gate').forEach(g=>g.remove());C.lock=false;C.reshow()},900)},
 reveal(C){if(!C.t)return;const i=C.os?C.os.findIndex(x=>String(x)===String(C.t.a)):-1;if(i>=0)C.setLane(i)}});

/* ===== 7. Бақша өсір ===== */
FUN.garden=(gen)=>(box,T,lv)=>FLOOP(box,T,lv,{gen,em:'🧺',win:'Мол өнім жинадың! 🍅🌻',bg:'linear-gradient(#b3e5fc,#e1f5fe 52%,#8d6e63 52%,#6d4c41)',
 init(C){const s=C.sc;s.append(FE('☀️','right:60px;top:14px;font-size:100px;animation:fspin 18s linear infinite'),FE('☁️','left:0;top:24px;font-size:80px;animation:fcloud 40s linear infinite'));
  const F=['🌻','🍅','🌷','🥕'];C.beds=[0,1,2,3].map(i=>{const b=FE(`<div class="pl" style="font-size:70px;line-height:1;transform-origin:50% 100%;transition:transform .5s">🌱</div><div style="width:200px;height:46px;border-radius:50%;background:#4e342e;margin-top:-10px"></div>`,`left:${130+i*300}px;top:170px;width:200px;text-align:center`);b._f=F[i];b._st=0;s.append(b);return b});
  C.can=FE('🚿','left:40px;top:40px;font-size:90px;z-index:5;transition:left .6s,top .6s');C.hv=FE('🧺 0','left:24px;bottom:14px;font-size:26px','fa fl');s.append(C.can,C.hv);C.crop=0},
 show(C){C.tiles(40)},
 good(C,e,v,nx){const i=(C.k-1)%4;const b=C.beds[i];C.can.style.left=(b.offsetLeft+60)+'px';C.can.style.top='20px';
  T.later(()=>{C.can.animate([{transform:'rotate(0)'},{transform:'rotate(-35deg)'},{transform:'rotate(-35deg)'},{transform:'rotate(0)'}],{duration:900});for(let j=0;j<6;j++){const d=FE('💧',`left:${b.offsetLeft+70+rnd(-20,40)}px;top:110px;font-size:30px`);C.sc.append(d);d.animate([{transform:'translateY(0)',opacity:1},{transform:'translateY(90px)',opacity:0}],{duration:600,delay:j*90}).onfinish=()=>d.remove()}},600);
  T.later(()=>{b._st++;const p=b.querySelector('.pl');const ST=['🌱','🌿',b._f];p.textContent=ST[Math.min(2,b._st)];const sz=[70,110,150][Math.min(2,b._st)];p.style.fontSize=sz+'px';p.animate([{transform:'scale(.4)'},{transform:'scale(1.25)'},{transform:'scale(1)'}],{duration:600,easing:'ease-out'});
   if(b._st===2){C.crop++;C.hv.textContent='🧺 '+C.crop;FPOP(C.sc,'🎉 Өсті!',b.offsetLeft+20,60)}},1300);T.later(nx,2100)},
 bad(C,e,v,un){const c=FE('🌧️🐛',`left:${rnd(200,900)}px;top:10px;font-size:70px;z-index:6`);C.sc.append(c);c.animate([{transform:'translateX(-200px)',opacity:0},{transform:'translateX(0)',opacity:1},{transform:'translateX(200px)',opacity:0}],{duration:1400}).onfinish=()=>c.remove();
  C.beds.forEach(b=>b.querySelector('.pl').animate([{transform:'rotate(0)'},{transform:'rotate(-14deg)'},{transform:'rotate(0)'}],{duration:700}));T.later(un,500)},
 end(C){C.beds.forEach((b,i)=>T.later(()=>{const p=b.querySelector('.pl');p.textContent=b._f;p.style.fontSize='150px';p.animate([{transform:'translateY(0)'},{transform:'translateY(-40px)'},{transform:'translateY(0)'}],{duration:500})},i*150))}});

/* ===== 8. Ойыншық автомат ===== */
FUN.claw=(gen)=>(box,T,lv)=>FLOOP(box,T,lv,{gen,em:'🎁',win:'Жүлделердің бәрі сенікі! 🧸',noOpts:true,bg:'linear-gradient(160deg,#ec407a,#ad1457)',
 init(C){const s=C.sc;C.gl=FE('','left:260px;top:20px;width:940px;height:400px;border-radius:24px;background:linear-gradient(#e1f5fe,#b3e5fc);border:8px solid #880e4f;overflow:hidden');s.append(C.gl);
  C.gl.append(FE('','left:0;right:0;top:0;height:16px;background:#455a64'),FE('🎁','left:14px;bottom:0;width:120px;height:110px;background:#880e4f55;border-radius:14px 14px 0 0;font-size:60px;display:grid;place-items:center'));
  C.cx=470;C.claw=FE('<div class="cab" style="width:6px;height:60px;background:#455a64;margin:0 auto;transition:height .5s"></div><div style="font-size:70px;line-height:1;margin-top:-6px">🪝</div><div class="hold" style="position:absolute;left:50%;top:100%;transform:translateX(-50%)"></div>',`left:${C.cx}px;top:16px;width:80px;text-align:center;transition:left .5s;z-index:5`);C.gl.append(C.claw);
  C.pz=0;C.pb=FE('🎁 Жүлде: 0','left:280px;top:440px;font-size:28px','fa fl');s.append(C.pb);
  const btn=(t,c,x,f)=>{const b=FE(t,`left:${x}px;top:430px;background:${c};color:#fff`,'fa fbtn');b.onclick=f;s.append(b)};
  btn('◀','#fdd835',760,()=>C.mv(-1));btn('ІЛ','#43a047',880,()=>C.grab());btn('▶','#fdd835',1000,()=>C.mv(1));
  C.mv=d=>{if(C.lock||!C.toys)return;C.sel=Math.max(0,Math.min(C.toys.length-1,(C.sel??0)+d));C.cx=C.toys[C.sel]._x;C.claw.style.left=C.cx+'px'};
  C.grab=()=>{if(C.lock||!C.toys)return;const ty=C.toys[C.sel??0];if(Math.abs(ty._x-C.cx)>5){C.cx=ty._x;C.claw.style.left=C.cx+'px'}C.lock=true;T.later(()=>{C.claw.querySelector('.cab').style.height='190px';T.later(()=>{C.lock=false;C.cur=ty;C.answer(ty.dataset.v,ty.querySelector('.fl'))},560)},Math.abs(ty._x-C.cx)>5?520:60)};
  s.append(FE('🕹️ ◀ ▶ ілгішті жылжыт, «ІЛ» бас — немесе ойыншықты бас','left:1220px;top:40px;width:220px;font-size:20px;white-space:normal','fa fl'))},
 show(C,t){C.gl.querySelectorAll('.toy').forEach(x=>x.remove());const E=shuffle(['🧸','🐰','🦊','🐼','🐸','🐵','🦄']);const os=shuffle(t.o);C.toys=os.map((v,i)=>{const x=200+i*(660/os.length);
  const y=FE(`<div style="font-size:90px;line-height:1;animation:fbob ${1.6+i*.3}s infinite">${E[i]}</div><div class="fl" style="font-size:36px">${v}</div>`,`left:${x}px;top:250px;text-align:center;cursor:pointer`,'fa toy');y._x=x+10;y.dataset.v=v;y.onclick=()=>{C.sel=i;C.grab()};C.gl.append(y);return y});C.sel=0;C.cx=C.toys[0]._x;C.claw.style.left=C.cx+'px'},
 good(C,e,v,nx){const ty=C.cur;const h=C.claw.querySelector('.hold');ty.style.cssText='position:relative;text-align:center';h.append(ty);T.later(()=>{C.claw.querySelector('.cab').style.height='60px';T.later(()=>{C.claw.style.left='30px';T.later(()=>{ty.animate([{transform:'translateY(0)'},{transform:'translateY(260px) scale(.5)',opacity:0}],{duration:500,fill:'forwards'});C.pz++;C.pb.textContent='🎁 Жүлде: '+C.pz;FPOP(C.sc,'🎁 Жүлде!',300,300)},550)},500)},100);T.later(nx,2000)},
 bad(C,e,v,un){const ty=C.cur;C.claw.querySelector('.cab').style.height='120px';ty.animate([{transform:'translateY(0)'},{transform:'translateY(-70px)'},{transform:'translateY(0)'},{transform:'translateY(-14px)'},{transform:'translateY(0)'}],{duration:900});FPOP(C.sc,'❌ Түсіп қалды!',ty._x+200,180,true);T.later(()=>{C.claw.querySelector('.cab').style.height='60px';un()},700)}});

/* ===== Мазмұн генераторлары ===== */
const FQ=(e,fs=46)=>`<span style="font-size:${fs}px">${e}</span>`;
const FM={
 add:(max)=>lv=>{const e=ex(L3(lv,Math.ceil(max/2),max,max),lv===1?'+':'+-');return{q:FQ(`${e.a} ${e.op==='-'?'−':'+'} ${e.b} = ?`),o:OPTN(e.r,4,0,max+10),a:e.r,key:e.a+e.op+e.b}},
 add100:lv=>{const op=lv===1?'+':(Math.random()<.5?'+':'-');let a,b,r;if(op==='+'){a=rnd(10,L3(lv,50,80,89));b=rnd(1,Math.min(L3(lv,9,19,40),99-a));r=a+b}else{a=rnd(20,99);b=rnd(1,Math.min(a-1,L3(lv,9,30,60)));r=a-b}return{q:FQ(`${a} ${op==='-'?'−':'+'} ${b} = ?`),o:OPTN(r,4,0,120),a:r,key:a+op+b}},
 mul:(lo,hi)=>lv=>{const a=rnd(lo,hi),b=rnd(2,L3(lv,5,9,10));return{q:FQ(`${a} · ${b} = ?`),o:[...new Set([a*b,a*(b+1),a*(b-1)||a+b,(a+1)*b,a*b+10].filter(x=>x>0))].slice(0,4),a:a*b,key:a+'x'+b}},
 div:lv=>{const d=rnd(2,9),q=rnd(2,L3(lv,5,9,9));return{q:FQ(`${d*q} : ${d} = ?`),o:OPTN(q,4,1,12),a:q,key:d*q+':'+d}},
 cmp:(max)=>lv=>{const a=rnd(1,max);let b=Math.random()<.2?a:rnd(1,max);if(lv>1&&Math.random()<.5)b=Math.max(1,Math.min(max,a+rnd(-L3(lv,3,9,9),L3(lv,3,9,9))));return{q:FQ(`${a} ☐ ${b} — белгісін тап`),o:['<','>','='],a:a<b?'<':a>b?'>':'=',key:a+'?'+b}},
 apples:(lv)=>{if(lv===1){const n=rnd(2,10);return{q:FQ(`🍎 Қазанға ${n} алма сал`,40),a:n,key:'n'+n}}if(lv===2){const a=rnd(1,6),b=rnd(1,10-a);return{q:FQ(`🍎 Рецепт: ${a} алма + ${b} алма`,40),a:a+b,key:a+'+'+b}}const a=rnd(6,10),b=rnd(1,a-1);return{q:FQ(`🍎 ${a} алма керек еді, ${b} алма бар. Тағы қаншасын саласың?`,34),a:a-b,key:a+'-'+b}},
 groups:(lv)=>{const a=rnd(2,L3(lv,3,4,5)),b=rnd(2,L3(lv,3,4,4));return{q:FQ(`🍎 ${a} табаққа ${b} алмадан — қазанға барлығын сал`,34),a:a*b,key:a+'x'+b}}
};
const FPOS={z:['кітап','бала','қала','мектеп','ағаш','гүл','алма','дәптер','мысық','үй','тау','өзен','дос','ана','қалам'],s:['әдемі','үлкен','кішкентай','қызыл','биік','тәтті','жылы','ақ','ұзын','жаңа','көк','ақылды','суық','жасыл','таза'],e:['жүгірді','оқыды','жазды','келді','ойнады','айтты','ұшты','жүзді','күлді','ішті','барды','көрді','салды','тұрды','отырды']};
const FPOSN={z:'зат есімді («кім? не?»)',s:'сын есімді («қандай?»)',e:'етістікті («не істеді?»)'};
const FK={
 pos:(n)=>lv=>{const c=pick(['z','s','e'],1)[0];const a=pick(FPOS[c],1)[0];const ot=Object.keys(FPOS).filter(x=>x!==c).flatMap(x=>FPOS[x]);return{q:FQ(`Тек ${FPOSN[c]} тап!`,36),o:[a,...pick(ot,n-1)],a,key:c+a}},
 hs:(lv)=>{const c=Math.random()<.5?'h':'s';const a=pick(HSW[c],1)[0];return{q:FQ(c==='h'?'🐘 <b style="color:#1e88e5">Жуан</b> сөзі бар балықты ұста!':'🐭 <b style="color:#e91e63">Жіңішке</b> сөзі бар балықты ұста!',36),o:[a,...pick(HSW[c==='h'?'s':'h'],L3(lv,2,3,4))],a,key:a}},
 syl:(words)=>lv=>{const L=words(lv);const w=pick(L,1)[0];const n=syl(w.toLowerCase()).length;return{q:FQ(`🏹 «${w}» сөзінде неше буын бар?`,38),o:[1,2,3,4],a:n,key:w}}
};
const FJ1=[{q:'Өсімдікке не керек?',a:'Су',o:['Су','Кәмпит','Ойыншық']},{q:'Өсімдікке тағы не керек?',a:'Күн сәулесі',o:['Күн сәулесі','Телефон','Доп']},{q:'Өсімдіктің жер астындағы бөлігі?',a:'Тамыр',o:['Тамыр','Гүл','Жапырақ']},
 {q:'Жеміс қай бөліктен пайда болады?',a:'Гүл',o:['Гүл','Тамыр','Сабақ']},{q:'Қайсысы — бұта?',a:'Итмұрын',o:['Итмұрын','Қарағай','Бидай']},{q:'Қайсысы — ағаш?',a:'Қайың',o:['Қайың','Таңқурай','Жалбыз']},
 {q:'Қайсысы — шөптесін өсімдік?',a:'Түймедақ',o:['Түймедақ','Терек','Шие']},{q:'Қайсысы — мәдени өсімдік?',a:'Қияр',o:['Қияр','Жусан','Қамыс']},{q:'Қайсысы — жабайы өсімдік?',a:'Жусан',o:['Жусан','Қызанақ','Алма']},
 {q:'Тамыр не істейді?',a:'Су сорады',o:['Су сорады','Ән салады','Ұшады']},{q:'Ағаштың жуан сабағы қалай аталады?',a:'Дің',o:['Дің','Тамыр','Гүл']},{q:'Өсімдік тірі ме?',a:'Иә, тірі',o:['Иә, тірі','Жоқ, жансыз']}];
const FJ2=FJ1.concat([{q:'Қай өсімдік шөлде өседі?',a:'Сексеуіл',o:['Сексеуіл','Қамыс','Тал']},{q:'Ылғалсүйгіш өсімдік?',a:'Қамыс',o:['Қамыс','Кактус','Сексеуіл']},{q:'Кактус қандай өсімдік?',a:'Құрғаққа төзімді',o:['Құрғаққа төзімді','Ылғалсүйгіш','Суда өседі']},
 {q:'Тұқым қайда болады?',a:'Жемісте',o:['Жемісте','Тамырда','Жапырақта']},{q:'Көктемде ағаштар не істейді?',a:'Бүршік жарады',o:['Бүршік жарады','Жапырағын тастайды','Ұйықтайды']},{q:'Күзде ағаштар не істейді?',a:'Жапырағын тастайды',o:['Жапырағын тастайды','Гүлдейді','Бүршік жарады']},
 {q:'Сабақтың қызметі?',a:'Су мен қоректі тасиды',o:['Су мен қоректі тасиды','Жеміс береді','Тұқым шашады']}]);
const FJQ=B=>lv=>{const x=B[rnd(0,B.length-1)];return{q:FQ('🌱 '+x.q,36),o:x.o.slice(0,L3(lv,2,3,4)),a:x.a,key:x.q}};

/* ===== Тоқсандарға тіркеу ===== */
const FREG={
 '1/math/1':{fkitch:FUN.kitchen(FM.apples),fclaw:FUN.claw(FM.cmp(10))},
 '1/math/2':{fdrag:FUN.dragon(FM.add(20)),fbee:FUN.bee(FM.add(20))},
 '1/kaz/1':{ffish:FUN.fish(FK.hs),farch:FUN.archery(FK.syl(lv=>(lv===1?TRW.l1:lv===2?TRW.l2:TRW.l3)))},
 '1/jar/1':{fgard:FUN.garden(FJQ(FJ1))},
 '2/math/1':{fclaw:FUN.claw(FM.cmp(100)),fbee:FUN.bee(FM.add100)},
 '2/math/3':{fdrag:FUN.dragon(FM.mul(2,5)),fkitch:FUN.kitchen(FM.groups)},
 '2/kaz/1':{farch:FUN.archery(FK.syl(lv=>(lv===1?TRW.l2:lv===2?TRW.l3:TRW.l4)))},
 '2/kaz/3':{froad:FUN.road(FK.pos(3)),ffish:FUN.fish(FK.pos(4))},
 '2/jar/1':{fgard:FUN.garden(FJQ(FJ2))},
 '3/math/1':{fdrag:FUN.dragon(FM.mul(6,9)),fclaw:FUN.claw(FM.cmp(1000))},
 '3/math/3':{fbee:FUN.bee(FM.div),ffish:FUN.fish(FM.div)},
 '3/kaz/4':{froad:FUN.road(FK.pos(3))}};
{const R=FREG[G+'/'+SB+'/'+Q];if(R)Object.assign(GAMES,R)}
