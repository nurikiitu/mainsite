/* neuroUstaz · 1-сынып · Математика · 1-тоқсан · 30 ойын
   Әр ойын: GAMES[id]=(box,T,lv)=>{...}; lv = 1 (жеңіл), 2 (орташа), 3 (қиын). Көмекшілер: games/common.js */
/* ================== ОЙЫНДАР ================== */

/* 1. Шарларды жар */
GAMES.balloons=(box,T,lv)=>GM.balloons({from:lv===3?0:1,to:L3(lv,5,10,10)}).build(box,T);

/* 2. Себетке жина */
GAMES.basket=(box,T,lv)=>ROUNDS(box,6,(b,k,hd)=>{
 const [f1,f2,need]=uq(()=>{const f1=FRUIT[rnd(0,FRUIT.length-1)],f2=FRUIT.filter(x=>x!==f1)[rnd(0,FRUIT.length-2)];
 const need=lv===3?{[f1]:rnd(1,5),[f2]:rnd(1,4)}:{[f1]:rnd(L3(lv,1,3,0),L3(lv,5,10,0))};return[f1,f2,need]},v=>JSON.stringify(v[2]));
 hd.innerHTML='🧺 Себетке салу керек: '+Object.entries(need).map(([e,n])=>`<b style="color:#e53935">${n}</b> ${e}`).join(' және ');
 b.style.alignItems='center';const tree=el('div','');tree.style.cssText='flex:1;height:100%;background:linear-gradient(#e8f5e9,#c8e6c9);border-radius:28px;display:flex;flex-wrap:wrap;align-content:center;justify-content:center;gap:10px;padding:20px;border:4px solid #a5d6a7';
 const bsk=el('div','');bsk.style.cssText='width:520px;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px';
 const inb=el('div','');inb.style.cssText='width:480px;min-height:230px;background:#fff8e1;border:6px solid #d7a35a;border-radius:24px 24px 90px 90px;display:flex;flex-wrap:wrap;align-content:flex-end;justify-content:center;gap:4px;padding:14px';
 const chk=el('button','btn','✅ Тексеру');bsk.append(el('div','',`<div style="font-size:90px;line-height:1">🧺</div>`),inb,chk);b.append(tree,bsk);
 const items=[];Object.entries(need).forEach(([e,n])=>{for(let i=0;i<n+rnd(2,4);i++)items.push(e)});
 if(lv===3)for(let i=0;i<2;i++)items.push(FRUIT.filter(x=>!(x in need))[i]);
 shuffle(items).forEach(e=>{const f=el('button','',e);f.style.cssText='font-size:62px;line-height:1;padding:4px;transition:transform .15s';f.dataset.e=e;
  f._tap=()=>{beep('tap');(f.parentNode===tree?inb:tree).append(f);f.style.fontSize=f.parentNode===inb?'50px':'62px'};DRAG(f,()=>[inb.parentNode,tree],t=>{(t===tree?tree:inb).append(f);f.style.fontSize=f.parentNode===inb?'50px':'62px'});tree.append(f)});
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
GAMES.flash=(box,T,lv)=>TEAMQ(box,{rounds:10,title:'👀 Мұқият қара! Неше зат болды?',gen:()=>{const n=rnd(L3(lv,1,3,5),L3(lv,5,8,10)),e=EM[rnd(0,EM.length-1)],ms=L3(lv,3000,2000,1200),key=n+e;
 return{key,q:qb=>{qb.innerHTML=scatter(e,n,700,340,64);const a=T.alive();setTimeout(()=>{if(!a()||!qb.isConnected)return;qb.innerHTML=`<div style="width:700px;height:340px;background:#e3f2fd;border:4px solid #d6e4f7;border-radius:26px;display:grid;place-items:center;font-size:150px">❓</div>`},ms)},o:near(n,1,10),a:n}}});

/* 6. Сан пойызы */
GAMES.train=(box,T,lv)=>GM.train({max:L3(lv,5,10,10),len:L3(lv,4,5,7)}).build(box,T);

/* 7. Жоғалған сан */
GAMES.missing=(box,T,lv)=>ROUNDS(box,6,(b,k)=>{const max=L3(lv,5,10,10),rev=lv>1&&k%2===1;const [s,len]=uq(()=>{const len=lv===1?rnd(3,4):L3(lv,4,5,6);return[rev?rnd(len-1,max):rnd(0,max-len+1),len]},v=>rev+':'+v);
 const seq=[...Array(len)].map((_,j)=>rev?s-j:s+j);const mc=L3(lv,1,rnd(1,2),rnd(2,3));const miss=pick([...Array(len).keys()].filter(i=>lv===3||(i>0&&i<len-1)||len<4),mc);
 K.seq(b,T,{rounds:[{seq,miss,from:0,to:max,q:rev?'Кері санау: бос орынды толтыр ⬅':'Бос орынды толтыр ➡'}]})},{title:'🔍 Жоғалған санды тап'});

/* 8. Цифрды сыз */
GAMES.trace=(box,T,lv)=>ROUNDS(box,5,(b,k,hd)=>{const d=uq(()=>lv===1?rnd(1,5):rnd(0,9));hd.innerHTML=`✍️ <b style="color:#e53935">${d}</b> цифрын нүкте бойымен саусағыңмен сыз`;
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
GAMES.houses=(box,T,lv)=>ROUNDS(box,L3(lv,4,3,2),(b,k)=>{const n=uq(()=>lv===1?rnd(2,5):lv===2?rnd(6,8):rnd(9,10));const rows=[...Array(n-1)].map((_,i)=>[i+1,n-i-1]);
 const hideN=L3(lv,Math.min(2,rows.length),3,rows.length);const hi=pick([...rows.keys()],hideN);K.house(b,T,{n,pairs:rows.map((r,i)=>hi.includes(i)?[r[0],r[1],rnd(0,1)]:[r[0],r[1]])})},{title:'🏠 Сан үйінің терезелерін толтыр'});

/* 12. Екіге бөл */
GAMES.split=(box,T,lv)=>ROUNDS(box,6,(b,k,hd)=>{const [n,a]=uq(()=>{const n=lv===1?rnd(3,5):lv===2?rnd(6,8):rnd(8,10);return[n,rnd(1,n-1)]}),c=n-a;
 hd.innerHTML=`🍎 <b>${n}</b> алманы бөл: <span style="color:#e53935">сол себетте ${a}</span>, қалғаны — оң себетте`;
 b.style.flexDirection='column';b.style.alignItems='center';b.style.justifyContent='space-around';
 const mid=el('div','');mid.style.cssText='display:flex;gap:10px;min-height:90px;flex-wrap:wrap;justify-content:center';
 const row=el('div','');row.style.cssText='display:flex;gap:60px';const bk=['🔴 Сол себет','🔵 Оң себет'].map(t=>{const w=el('div','');w.style.cssText='width:440px;min-height:230px;background:#fff8e1;border:6px solid #d7a35a;border-radius:24px 24px 90px 90px;display:flex;flex-direction:column;align-items:center;padding:10px';
  w.innerHTML=`<div style="font-size:24px;font-weight:900">${t}</div><div class="in" style="display:flex;flex-wrap:wrap;gap:4px;justify-content:center;flex:1;align-content:center"></div>`;row.append(w);return w.querySelector('.in')});
 const eq=el('div','big','');const chk=el('button','btn','✅ Тексеру');b.append(mid,row,eq,chk);
 for(let i=0;i<n;i++){const f=el('button','','🍎');f.style.cssText='font-size:64px;line-height:1';f._tap=()=>{beep('tap');const p=f.parentNode;(p===mid?bk[0]:p===bk[0]?bk[1]:mid).append(f)};DRAG(f,()=>[bk[0].parentNode,bk[1].parentNode,mid],t=>(t===mid?mid:t.querySelector('.in')).append(f));mid.append(f)}
 chk.onclick=()=>{const L=bk[0].children.length,R=bk[1].children.length;if(L===a&&R===c&&!mid.children.length){T.ok(chk);chk.disabled=true;eq.innerHTML=`${n} = <span style="color:#e53935">${a}</span> + <span style="color:#1e88e5">${c}</span>`;T.done()}else{T.bad(chk);toast(mid.children.length?'Барлық алманы себетке сал':'Сол себетте '+a+' алма болуы керек','#e53935')}};
 T.reveal=()=>toast(`Сол жақта ${a}, оң жақта ${c}`,'#c28a00')},{title:''});

/* 13. Домино */
GAMES.domino=(box,T,lv)=>ROUNDS(box,5,(b,k)=>{const n=uq(()=>lv===1?rnd(2,6):lv===2?rnd(5,10):rnd(6,10)),mx=lv===3?6:5,cnt=lv===3?8:6;const tiles=[],seen=new Set();
 const good=[];for(let a=0;a<=Math.min(mx,n);a++){const c=n-a;if(c>=0&&c<=mx&&a<=c)good.push([a,c])}const gs=pick(good,Math.min(good.length,lv===1?1:2));
 gs.forEach(([a,c])=>{seen.add(a+'/'+c);tiles.push({h:Math.random()<.5?domino(a,c,80):domino(c,a,80),ok:true})});
 let g=0;while(tiles.length<cnt&&g++<300){const a=rnd(0,mx),c=rnd(0,mx);if(a+c===n||seen.has(Math.min(a,c)+'/'+Math.max(a,c)))continue;seen.add(Math.min(a,c)+'/'+Math.max(a,c));tiles.push({h:domino(a,c,80),ok:false})}
 K.pickAll(b,T,{tiles,cols:lv===3?4:3,size:220,title:`Нүктелерінің қосындысы <b style="color:#e53935;font-size:44px">${n}</b> болатын доминоны тап`})},{title:'🁣 Домино'});

/* 14. 10-ға жеткіз */
GAMES.to10=(box,T,lv)=>duel(box,{title:lv===1?'5-ке дейін неше жетпейді?':'10-ға дейін неше жетпейді?',gen:()=>{const N=lv===1?rnd(3,5):10,a=rnd(0,N-1),m=N-a;
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
   {const SN=show.S=show.S||new Set();let g=0;do{cur=GEN[k<3?k%3:rnd(0,GEN.length-1)](k)}while(SN.has(QK(cur))&&g++<40);SN.add(QK(cur))}qb.innerHTML=cur.q;ob.innerHTML='';
   shuffle(cur.o).slice(0,4).concat([]).forEach((v,i)=>{const b=el('button','opt',`<span style="color:#5c6bc0">${'ABCD'[i]}:</span>&nbsp;${cur.oh?cur.oh(v):v}`);b.dataset.v=v;b.style.cssText+='height:auto;min-height:84px;justify-content:flex-start;padding:10px 22px;color:#1a2a5a';
    b.onclick=()=>{if(ob.dataset.l)return;ob.dataset.l=1;if(String(v)===String(cur.a)){T.ok(b);T.later(()=>{delete ob.dataset.l;k++;if(k<PR.length)show();else T.end(box,{em:'💰',title:'МИЛЛИОНЕР! 🎉',text:'Барлық 10 сұраққа дұрыс жауап бердіңдер!',again:start})},900)}
     else{T.bad(b);[...ob.children].forEach(x=>{if(x.dataset.v===String(cur.a))x.classList.add('hint')});T.later(()=>T.end(box,{em:'💡',title:k?`Ұтыс: ${PR[k-1]} ұпай`:'Тағы байқап көрейік!',text:`${k} сұраққа дұрыс жауап берілді`,again:start}),1400)}};ob.append(b)});
   if(!cur.o.includes(cur.a)&&!cur.o.map(String).includes(String(cur.a)))show()};
  T.reveal=()=>[...ob.children].forEach(x=>{if(x.dataset.v===String(cur.a))x.classList.add('hint')});show()};start()};

/* 21. Фигураны тап */
GAMES.findshape=(box,T,lv)=>ROUNDS(box,4,(b,k)=>{const tg=uq(()=>SHAPES[(k+rnd(0,3))%(lv===1?3:4)]);const types=lv===1?SHAPES.slice(0,3):SHAPES;
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
GAMES.lines=(box,T,lv)=>GM.quiz({icon:'📍',title:lv===3?'📍 Кесінді, сәуле, түзу':'📍 Бұл не? Дұрыс атауын таңда',rounds:8,gen:()=>{
 if(lv===3&&Math.random()<.55){const n=pick([1,2,3,4,5,6],1)[0];return{q:segFig(n)+'<div style="font-size:30px;font-weight:900">Суретте неше кесінді бар?</div>',o:near(n,1,6),a:n}}const vr=rnd(0,2);
 const K1=lv===1?['нүкте','түзу','қисық сызық']:['нүкте','түзу','қисық сызық','сәуле','кесінді'];const k=pick(K1,1)[0];
 return{key:k+vr,q:lineSvg(k,vr),o:K1,a:k,oh:v=>`<span style="font-size:30px;padding:0 6px">${v}</span>`}}}).build(box,T);

/* 24. Фигурадан сурет */
GAMES.build=(box,T,lv)=>{const PL=PICS.filter(p=>lv===1?p[1].length<=2:lv===2?true:Object.keys(p[2]).length);return ROUNDS(box,Math.min(4,PL.length),(b,k)=>{const p=pkU(PL);
 b.style.alignItems='center';b.style.justifyContent='center';const pic=el('div','',p[0]);pic.style.cssText='background:#f3f8ff;border:4px solid #d6e4f7;border-radius:30px;padding:20px';const side=el('div','side');b.append(pic,side);
 if(lv===3){const [sh,n]=Object.entries(p[2])[0];side.append(el('div','qline',`Суретте неше <b style="color:#e53935">${SHN[sh]}</b> бар?`));const ob=el('div','ncards');side.append(ob);
  near(n,1,10).forEach(v=>{const c=ncard(v);c.onclick=()=>{if(v===n){T.ok(c);T.done()}else T.bad(c)};ob.append(c)});T.reveal=()=>[...ob.children].forEach(c=>{if(+c.dataset.v===n)c.classList.add('hint')});return}
 K.pickAll(side,T,{tiles:SHAPES.map(t=>({h:SHP(t,null,80),ok:p[1].includes(t)})),cols:2,size:150,title:'Суретте қандай фигуралар бар? Бәрін тап'})},{title:'🧩 Фигурадан сурет'})};

/* 25. Артығын тап */
GAMES.odd=(box,T,lv)=>TEAMQ(box,{rounds:10,title:'🚫 Қай фигура артық?',gen:()=>{const by=L3(lv,'shape',pick(['shape','color'],1)[0],pick(['shape','color','size'],1)[0]);
 const t=pick(SHAPES.slice(0,3),2),c=pick(SHC.slice(0,4),2);let it=[];
 if(by==='shape')it=[0,0,0,1].map(i=>SHP(t[i],c[0],100));if(by==='color')it=[0,0,0,1].map(i=>SHP(t[0],c[i],100));if(by==='size')it=[0,0,0,1].map(i=>SHP(t[0],c[0],i?50:110));
 const ids=it.map((h,i)=>'f'+i);const H=Object.fromEntries(ids.map((id,i)=>[id,it[i]]));return{key:by+t+c,q:`<div class="mut" style="font-size:26px">Үшеуі ұқсас, біреуі басқаша</div>`,o:ids,a:'f3',oh:v=>`<div style="width:150px;height:130px;display:grid;place-items:center">${H[v]}</div>`}}});

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
 const n=rnd(1,L3(lv,8,10,10));return{q:`<div style="display:flex;gap:40px;align-items:center">${jars(n)}<div style="font-size:70px">➡</div>${bucket(n,10)}</div>`,o:near(n,1,10).map(v=>v+' л'),a:n+' л',oh:v=>`<span style="font-size:40px;padding:0 10px">${v}</span>`}}}).build(box,T);

/* 30. Дүкен */
GAMES.shop=(box,T,lv)=>duel(box,{title:lv===3?'Салыстыр: 1 дм = 10 см':'Немен өлшейміз?',gen:()=>{
 if(lv===3){const pairs=[['1 дм','10 см','='],['1 дм','8 см','>'],['12 см','1 дм','>'],['1 дм','15 см','<'],['6 см','1 дм','<'],['10 см','1 дм','='],['1 дм','9 см','>'],['2 дм','10 см','>']];const [a,c,r]=pick(pairs,1)[0];
  return{q:BIG(`${a} ◻ ${c}`,64),o:['>','<','='],a:r,oh:optBig}}
 const W=[['🍉','Қарбыздың салмағы','кг'],['🥔','Картоптың салмағы','кг'],['🍎','Алманың салмағы','кг'],['🥛','Сүттің көлемі','л'],['🧃','Шырынның көлемі','л'],['🪣','Шелектегі су','л'],['🍞','Нанның салмағы','кг'],['🍚','Күріштің салмағы','кг'],['🍯','Балдың салмағы','кг'],['🫖','Шәйнектегі су','л'],['🛁','Ваннадағы су','л'],['🥤','Бөтелкедегі су','л']];
 const C=[['✏️','Қарындаштың ұзындығы','см'],['📏','Лентаның ұзындығы','см'],['🐛','Құрттың ұзындығы','см']];const [e,t,a]=pick(lv===1?W:W.concat(C),1)[0];
 return{q:`<div style="font-size:90px;line-height:1">${e}</div><div style="font-size:28px;font-weight:900">${t}</div>`,o:lv===1?['кг','л']:['кг','л','см'],a,oh:v=>`<span style="font-size:40px;padding:0 14px">${v}</span>`}}});
/* 1–3 сынып сайттарынан қосылған */
GAMES.ten10=TENHOW;
