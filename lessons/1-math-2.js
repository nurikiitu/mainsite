/* 1-сынып · Математика · 2-сабақ · Заттар тобын салыстыру (оқулық 8–9-бет) */
(function(){
const SG=v=>({'>':'&gt;','<':'&lt;','=':'=','≠':'≠'}[v]||v);
const cmp=(a,b)=>a>b?'>':a<b?'<':'=';
/* үлкен себет: заттар ішінде жатады */
function basket(n,e){const cap=[4,3,2],pos=[];let left=n;cap.forEach((c,row)=>{const k=Math.min(c,left);left-=k;for(let i=0;i<k;i++)pos.push([210+(i-(k-1)/2)*76+rnd(-3,3),178-row*60,rnd(-12,12)])});
 const items=pos.map(([x,y,r])=>`<span style="position:absolute;left:${x}px;top:${y}px;transform:translate(-50%,-50%) rotate(${r}deg);font-size:60px;line-height:1">${e}</span>`).join('');
 const weave=[...Array(6)].map((_,i)=>`<path d="M${40+i*0} ${222+i*22} H${380-i*0}" stroke="#b97a2e" stroke-width="3" opacity=".55"/>`).join('')+[...Array(11)].map((_,i)=>`<path d="M${52+i*31} 214 L${80+i*26} 350" stroke="#b97a2e" stroke-width="3" opacity=".45"/>`).join('');
 return `<div style="position:relative;width:420px;height:370px">
 <svg width="420" height="370" style="position:absolute;inset:0"><path d="M70 205 Q210 -40 350 205" fill="none" stroke="#c98a3c" stroke-width="16" stroke-linecap="round"/><path d="M70 205 Q210 -40 350 205" fill="none" stroke="#e7b06a" stroke-width="6" stroke-linecap="round"/><ellipse cx="210" cy="212" rx="175" ry="30" fill="#7a4b1c"/></svg>
 ${items}
 <svg width="420" height="370" style="position:absolute;inset:0"><path d="M30 212 Q210 250 390 212 L355 350 Q210 372 65 350 Z" fill="#e2a65a"/>${weave}<path d="M30 212 Q210 250 390 212" fill="none" stroke="#c98a3c" stroke-width="14" stroke-linecap="round"/><path d="M65 350 Q210 372 355 350" fill="none" stroke="#b97a2e" stroke-width="8" stroke-linecap="round"/></svg></div>`}
const grp=(e,n,fs=44,w=300)=>`<div class="grp" style="width:${w}px;min-height:${fs*2+30}px;font-size:${fs}px">${e.repeat(n)}</div>`;

LESSON({
goal:'Заттар тобын салыстыруды үйренесің.',
introExtra(w){w.append(el('div','',`<div style="display:flex;gap:26px;font-size:40px;font-weight:900">
 <div class="goal" style="padding:10px 26px"><b>=</b> тең</div><div class="goal" style="padding:10px 26px"><b>&lt;</b> кем</div><div class="goal" style="padding:10px 26px"><b>&gt;</b> артық</div><div class="goal" style="padding:10px 26px"><b>≠</b> тең емес</div></div>`))},
book:[
/* 1 */
{num:1,title:'Суретте қай заттар артық, қайсысы кем? Қай заттардың саны тең?',build(b,T){
 const items=[
  {e:'🍎',x:12,y:58,s:52},{e:'🍎',x:18,y:62,s:52},{e:'🍎',x:15,y:70,s:52},{e:'🍎',x:21,y:72,s:52},{e:'🍎',x:9,y:68,s:52},
  {e:'🍐',x:34,y:60,s:52},{e:'🍐',x:39,y:64,s:52},{e:'🍐',x:36,y:72,s:52},
  {e:'🥐',x:54,y:60,s:50},{e:'🥐',x:59,y:66,s:50},{e:'🥐',x:53,y:72,s:50},{e:'🥐',x:60,y:76,s:50},
  {e:'☕',x:72,y:58,s:48},{e:'☕',x:78,y:60,s:48},{e:'☕',x:74,y:70,s:48},{e:'☕',x:80,y:72,s:48},
  {e:'🫖',x:89,y:60,s:62},{e:'🫖',x:92,y:76,s:62},
  {e:'🍽️',x:14,y:90,s:46},{e:'🍽️',x:30,y:90,s:46},{e:'🍽️',x:46,y:90,s:46},{e:'🍽️',x:62,y:90,s:46},{e:'🍽️',x:78,y:90,s:46},
  {e:kid(1,'#8e5bd6','#3e2723',0,0,1.25),x:50,y:30},{e:kid(1,'#ef5350','#4e342e',0,1,.95),x:24,y:33},{e:kid(1,'#fdd835','#212121',0,0,.95),x:77,y:33},{e:'🪴',x:7,y:22,s:60},{e:'🪟',x:35,y:16,s:70}];
 const s=T.scene(b,{w:900,h:540,bg:'linear-gradient(#e8f4ea 0 48%,#f7e3a8 48%)',items});
 const side=el('div','side');b.append(side);
 side.append(el('div','mut','💡 Заттарды басып санауға болады'));
 const opt=v=>v;
 T.series(side,[
  {q:'<div class="qline">🍎 Алма мен 🍐 алмұрт:<br>қайсысы көп?</div>',o:['🍎 Алма көп','🍐 Алмұрт көп','Тең'],a:'🍎 Алма көп'},
  {q:'<div class="qline">🥐 Тоқаш пен ☕ кесе:<br>қайсысы көп?</div>',o:['🥐 Тоқаш көп','☕ Кесе көп','Тең'],a:'Тең'},
  {q:'<div class="qline">🫖 Шәйнек кеседен<br>көп пе, кем бе?</div>',o:['Көп','Кем','Тең'],a:'Кем'},
  {q:'<div class="qline">🍽️ Тәрелке мен 🍎 алманың<br>саны тең бе?</div>',o:['Иә, тең','Жоқ, тең емес'],a:'Иә, тең'},
  {q:'<div class="qline">🍐 Алмұрт тоқаштан<br>көп пе, кем бе?</div>',o:['Көп','Кем','Тең'],a:'Кем'}],
  {optHtml:opt,onEach:()=>s.resetCount()})}},
/* ЕСІҢДЕ САҚТА + 2 */
{rem:{title:'Салыстыру белгілері: = < > ≠',build(b,T){b.style.flexDirection='column';b.style.gap='12px';b.style.justifyContent='center';
  const R=[[4,4,'=','тең'],[4,5,'<','кем'],[5,4,'>','артық'],[1,2,'≠','тең емес']];
  R.forEach(([c,p,sg,w])=>{const r=el('button','');r.style.cssText='display:flex;align-items:center;gap:30px;background:#fff6ea;border:3px solid #f5cfa6;border-radius:20px;padding:6px 26px;width:100%';
   const pics=el('div','',[...Array(Math.max(c,p))].map((_,i)=>`<div style="width:78px;display:flex;flex-direction:column;align-items:center"><div style="font-size:46px;height:54px;line-height:54px">${i<c?'☕':''}</div><div style="width:70px;height:18px;border-radius:50%;${i<p?'background:#bfe3f7;border:3px solid #7fbfe0':''}"></div></div>`).join(''));pics.style.cssText='width:620px;display:flex;gap:8px';
   const eq=el('div','',`<span style="font-size:52px;font-weight:900">${c} <span class="sg" style="color:#d9792b;visibility:hidden">${SG(sg)}</span> ${p}</span>`);eq.style.width='300px';
   const wd=el('div','',`<span class="sg" style="visibility:hidden;font-size:40px;font-weight:900;color:#d9792b">${SG(sg)} &nbsp;${w}</span>`);
   r.append(pics,eq,wd);r.onclick=()=>{r.querySelectorAll('.sg').forEach(x=>x.style.visibility='visible');beep('tap')};b.append(r)});
  b.append(el('div','mut','👆 Жолды бассаң, белгі шығады. Кесе мен табақшаны жұппен сызып көр ✏️'));
  T.reveal=()=>b.querySelectorAll('.sg').forEach(x=>x.style.visibility='visible')}},
 num:2,label:'ЖҰПТЫҚ ЖҰМЫС',k:'pair',title:'Заттардың санын салыстыр.',build(b,T){
 b.style.flexDirection='column';b.style.justifyContent='space-around';
 const R=[['🍎',5,'🍏',3],['🍋',7,'🍐',7],['🍇',5,'🫐',8]];let left=3;const rows=[];
 R.forEach(([e1,n1,e2,n2])=>{const r=el('div','');r.style.cssText='display:flex;align-items:center;justify-content:center;gap:26px';
  const L=el('div','grp',e1.repeat(n1));L.style.cssText+=';width:420px;font-size:48px;border-color:#f6b7c8';const Rr=el('div','grp',e2.repeat(n2));Rr.style.cssText+=';width:420px;font-size:48px;border-color:#f6cf9c';
  const sl=[el('button','slot',''),el('button','slot',''),el('button','slot','')];sl[1].style.borderColor='#b9a4f5';
  const want=[n1,cmp(n1,n2),n2];sl.forEach((x,i)=>{x.dataset.w=want[i];x.onclick=()=>{if(r.dataset.ok)return;T.picker(x,i===1?['>','<','=']:[1,2,3,4,5,6,7,8,9,10],i===1?SG:null,v=>{x.innerHTML=i===1?SG(v):v;x.dataset.v=v;x.classList.add('f');chk()})}});
  const chk=()=>{if(sl.some(x=>!x.dataset.v))return;let ok=true;sl.forEach(x=>{if(x.dataset.v!==String(x.dataset.w)){ok=false;T.bad(x);x.dataset.v='';x.innerHTML='';x.classList.remove('f')}});
   if(ok){r.dataset.ok=1;sl.forEach(x=>x.classList.add('ok'));beep('ok');if(--left===0)T.done()}};
  const mid=el('div','');mid.style.cssText='display:flex;gap:10px';mid.append(...sl);r.append(L,mid,Rr);b.append(r);rows.push([r,sl])});
 T.reveal=()=>rows.forEach(([r,sl])=>{if(r.dataset.ok)return;sl.forEach((x,i)=>{x.innerHTML=i===1?SG(x.dataset.w):x.dataset.w;x.style.color='#e0a000'})})}},
/* 3 */
{num:3,label:'МАТЕМАТИКА КҮНДЕЛІКТІ ӨМІРДЕ',k:'life',title:'Отбасы мүшелерін ата. Отбасының әрбір мүшесі реті бойынша нешінші отыр? Санауды сол жақтан баста.',build(b,T){
 b.style.flexDirection='column';b.style.alignItems='center';b.style.gap='10px';
 const F=[['👨','Әке'],['👩','Ана'],['👧','Қызы'],['👵','Әже'],['👴','Ата'],['👦','Ұлы'],['🧒','Кенже ұлы']];
 const tb=el('div','');tb.style.cssText='display:flex;gap:18px;padding:10px 30px 0;background:linear-gradient(transparent 62%,#9ccc65 62%,#8bc34a);border-radius:20px';
 F.forEach(([e,n],i)=>{const p=el('button','',`<div style="font-size:96px;line-height:1">${e}</div><div style="font-size:22px;font-weight:900;background:#fff;border-radius:10px;padding:2px 8px;margin-top:4px">${n}</div>`);
  p.style.cssText='position:relative;display:flex;flex-direction:column;align-items:center';p.onclick=()=>{if(p.querySelector('.bdg'))return;p.append(el('span','bdg',ORDS[i+1]));beep('tap')};tb.append(p)});
 b.append(el('div','mut','Сол жақтан санаймыз → (адамды бассаң, реті шығады)'),tb);
 const box=el('div','');box.style.cssText='flex:1;display:flex;flex-direction:column;align-items:center;gap:10px;width:100%';b.append(box);
 const o7=[1,2,3,4,5,6,7];const oh=v=>`${ORDS[v]}`;
 T.series(box,[
  {q:'<div class="qline">👵 Әже нешінші отыр?</div>',o:o7,a:4,optHtml:oh},
  {q:'<div class="qline">👴 Ата нешінші отыр?</div>',o:o7,a:5,optHtml:oh},
  {q:'<div class="qline">👩 Ана нешінші?</div>',o:o7,a:2,optHtml:oh},
  {q:'<div class="qline">🧒 Кенже ұлы нешінші?</div>',o:o7,a:7,optHtml:oh},
  {q:'<div class="qline">Ересектер көп пе, әлде балалар көп пе?</div>',o:['Ересектер көп','Балалар көп','Тең'],a:'Ересектер көп',optHtml:v=>v}],
  {end:()=>{T.done();box.innerHTML='<div class="goal" style="margin-top:20px"><span>ӨЗІҢ ТУРАЛЫ</span>Ересектер – 4, балалар – 3. 4 &gt; 3<br>Ал <b>сенің</b> отбасыңда ересектер көп пе, әлде балалар көп пе?</div>'}})}}
],
extra:[
{title:'Екі топты теңестір: оң жаққа неше зат қосу керек?',build(b,T){
 b.style.flexDirection='column';b.style.alignItems='center';b.style.justifyContent='space-around';
 const st=el('div','prog');const row=el('div','');row.style.cssText='display:flex;gap:40px;align-items:center';const q=el('div','qline');const ob=el('div','ncards');b.append(st,row,q,ob);
 const E=['🍎','🌸','🐟','⭐'];const R=[0,1,2].map(i=>{const a=rnd(4,9),d=rnd(1,Math.min(4,a-1));return{e:E[i],a,c:a-d,d}});R.forEach(()=>st.append(el('i')));let k=0;
 const show=()=>{[...st.children].forEach((x,j)=>x.className=j<k?'d':j===k?'c':'');const r=R[k];row.innerHTML=grp(r.e,r.a,52,460)+'<div style="font-size:70px;font-weight:900;color:#6a4fe0">≠</div>'+grp(r.e,r.c,52,460);
  q.textContent=`Тең болу үшін оң жаққа неше ${r.e} қосу керек?`;ob.innerHTML='';[1,2,3,4].forEach(n=>{const c=ncard(n);c.onclick=()=>{if(c.dataset.l)return;if(n===r.d){T.ok(c);[...ob.children].forEach(x=>x.dataset.l=1);
   row.lastChild.insertAdjacentHTML('beforeend',`<span style="filter:drop-shadow(0 0 6px #22b07d)">${r.e.repeat(n)}</span>`);row.children[1].textContent='=';
   T.later(()=>{k++;k<R.length?show():([...st.children].forEach(x=>x.className='d'),T.done())},1400)}else T.bad(c)};ob.append(c)})};
 T.reveal=()=>{[...ob.children].forEach(c=>{if(+c.dataset.v===R[k]?.d)c.classList.add('hint')})};show()}},
{title:'Үш себетті салыстыр: қайсысында ең көп, қайсысында ең аз?',build(b,T){
 b.style.flexDirection='column';b.style.alignItems='center';b.style.justifyContent='space-around';
 const st=el('div','prog');const q=el('div','qline');const row=el('div','');row.style.cssText='display:flex;gap:30px';b.append(st,q,row);
 const R=[0,1,2,3].map(i=>({mx:i%2===0,n:pick([3,4,5,6,7,8,9],3),e:['🍓','🥕','🍊','🍪'][i]}));R.forEach(()=>st.append(el('i')));let k=0;
 const show=()=>{[...st.children].forEach((x,j)=>x.className=j<k?'d':j===k?'c':'');const r=R[k];q.innerHTML=r.mx?'Қай себетте <span style="color:#22b07d">ЕҢ КӨП</span>?':'Қай себетте <span style="color:#ef5350">ЕҢ АЗ</span>?';row.innerHTML='';
  const want=r.mx?Math.max(...r.n):Math.min(...r.n);
  r.n.forEach(n=>{const c=el('button','',basket(n,r.e));
   c.style.cssText='background:transparent;border-radius:30px;padding:6px 10px';c.dataset.n=n;c.onclick=()=>{if(c.dataset.l)return;
    if(n===want){T.ok(c);[...row.children].forEach(x=>{x.dataset.l=1;x.insertAdjacentHTML('beforeend',`<div style="font-size:46px;font-weight:900;margin-top:-6px">${x.dataset.n}</div>`)});T.later(()=>{k++;k<R.length?show():([...st.children].forEach(x=>x.className='d'),T.done())},1800)}else T.bad(c)};row.append(c)})};
 T.reveal=()=>{const r=R[k];if(!r)return;const want=r.mx?Math.max(...r.n):Math.min(...r.n);[...row.children].forEach(c=>{if(+c.dataset.n===want)c.classList.add('hint')})};show()}},
{title:'Дұрыс па, қате ме? Нүктелерді санап, тексер.',build(b,T){
 b.style.flexDirection='column';b.style.alignItems='center';
 const R=[];const S=['>','<','=','≠'];for(let i=0;i<6;i++){const a=rnd(1,9);let c=rnd(1,9);if(i===2)c=a;const s=S[rnd(0,3)];const tr=s==='>'?a>c:s==='<'?a<c:s==='='?a===c:a!==c;R.push({a,c,s,tr})}
 T.series(b,R.map(r=>({q:`<div style="display:flex;align-items:center;gap:36px">${dots(r.a,170)}<span style="font-size:110px;font-weight:900;color:#6a4fe0">${SG(r.s)}</span>${dots(r.c,170)}</div><div class="qline" style="font-size:54px">${r.a} ${SG(r.s)} ${r.c}</div>`,
  o:['✅ Дұрыс','❌ Қате'],a:r.tr?'✅ Дұрыс':'❌ Қате'})),{optHtml:v=>v})}}
],
duel:{title:'Белгіні тап: > < =',gen(){const E=['🍎','⭐','🐟','🌸','🚗','🐤','🍓','⚽'];const e=E[rnd(0,7)];const a=rnd(1,8);let c=rnd(1,8);if(Math.random()<.2)c=a;
 return{q:`<div style="display:flex;align-items:center;gap:14px">${grp(e,a,38,190)}<div class="slot" style="width:66px;height:66px">?</div>${grp(e,c,38,190)}</div>`,o:['>','<','='],a:cmp(a,c),oh:v=>`<span style="font-size:54px;padding:4px 18px">${SG(v)}</span>`}}},
games:[
{icon:'🐊',build(box,T){
 function start(){box.innerHTML='';const W=el('div','');W.style.cssText='position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:space-around;padding:20px;background:linear-gradient(#e0f7fa,#fff 60%)';box.append(W);
  const st=el('div','prog');const hd=el('div','qline','🐊 Қомағай қолтырауын әрқашан КӨБІН жейді! Аузын қай жаққа ашады?');hd.style.fontSize='30px';
  const row=el('div','');row.style.cssText='display:flex;align-items:center;gap:40px';const ob=el('div','');ob.style.cssText='display:flex;gap:24px';W.append(st,hd,row,ob);
  const R=[...Array(10)].map((_,i)=>{const a=rnd(1,10);let c=rnd(1,10);if(i%4===3)c=a;return{a,c}});R.forEach(()=>st.append(el('i')));let k=0,err=0;
  const show=()=>{[...st.children].forEach((x,j)=>x.className=j<k?'d':j===k?'c':'');const r=R[k];
   row.innerHTML=`<div style="text-align:center">${dots(r.a,200)}<div style="font-size:90px;font-weight:900">${r.a}</div></div><div id="croc" style="width:200px;text-align:center;font-size:120px">❔</div><div style="text-align:center">${dots(r.c,200)}<div style="font-size:90px;font-weight:900">${r.c}</div></div>`};
  const lab={'>':'🐊 &gt;','<':'&lt; 🐊','=':'='};
  ['>','<','='].forEach(s=>{const o=el('button','opt',`<span style="font-size:60px">${lab[s]}</span>`);o.style.height='120px';o.style.minWidth='220px';o.dataset.v=s;
   o.onclick=()=>{const r=R[k];if(!r||o.dataset.l)return;if(cmp(r.a,r.c)===s){T.ok(o);row.querySelector('#croc').innerHTML=`<span style="font-size:130px;font-weight:900;color:#22b07d">${SG(s)}</span>`;[...ob.children].forEach(x=>x.dataset.l=1);
     T.later(()=>{[...ob.children].forEach(x=>delete x.dataset.l);k++;k<R.length?show():T.end(box,{em:'🐊',title:'Қолтырауын тойды!',text:T.errTxt(err),again:start})},900)}else{err++;T.bad(o)}};ob.append(o)});
  T.reveal=()=>{const r=R[k];r&&[...ob.children].forEach(o=>{if(o.dataset.v===cmp(r.a,r.c))o.classList.add('hint')})};show()}
 start()}},
{icon:'⚡',build(box,T){
 function start(){box.innerHTML='';const W=el('div','');W.style.cssText='position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:space-around;padding:20px';box.append(W);
  const st=el('div','prog');const hd=el('div','qline','⚡ Жылдам бол! Қай табақта КӨП? Соны бас!');const tm=el('div','big','⏱ 0');const row=el('div','');row.style.cssText='display:flex;gap:60px';W.append(st,hd,tm,row);
  const E=['🍒','🍬','🍪','🥟','🍓','🫐','🍇','🥕','🍭','🍩'];const R=[...Array(10)].map((_,i)=>{const d=i<4?rnd(2,3):1;const a=rnd(3,10-d);return Math.random()<.5?[a+d,a]:[a,a+d]});
  R.forEach(()=>st.append(el('i')));let k=0,err=0,t0=Date.now();const alive=T.alive();const tick=()=>{if(!alive()||!W.isConnected)return;tm.textContent='⏱ '+Math.floor((Date.now()-t0)/1000)+' сек';setTimeout(tick,500)};tick();
  const show=()=>{[...st.children].forEach((x,j)=>x.className=j<k?'d':j===k?'c':'');row.innerHTML='';const e=E[k%E.length];
   R[k].forEach(n=>{const c=el('button','');c.style.cssText='width:520px;height:380px;border-radius:50%;background:radial-gradient(#fff 55%,#e3e8f2 56%,#fff 70%);border:4px solid #d6dbe6;position:relative';c.dataset.n=n;
    for(let i=0;i<n;i++){const a=Math.random()*Math.PI*2,rr=40+Math.random()*120;c.insertAdjacentHTML('beforeend',`<span style="position:absolute;left:${260+Math.cos(a)*rr*1.3}px;top:${190+Math.sin(a)*rr*.9}px;transform:translate(-50%,-50%);font-size:52px">${e}</span>`)}
    c.onclick=()=>{if(c.dataset.l)return;if(n===Math.max(...R[k])){T.ok(c);[...row.children].forEach(x=>x.dataset.l=1);T.later(()=>{k++;if(k<R.length)show();else{const s=Math.floor((Date.now()-t0)/1000);T.end(box,{em:'⚡',title:'Керемет!',text:`Уақыт: ${s} сек · ${T.errTxt(err)}`,again:start})}},700)}else{err++;T.bad(c)}};row.append(c)})};
  T.reveal=()=>{[...row.children].forEach(c=>{if(+c.dataset.n===Math.max(...R[k]))c.classList.add('hint')})};show()}
 start()}}
]});
})();
