/* NeuroUstaz · сабақтарға ортақ құралдар (тапсырма үлгілері мен ойындар) */
const near=(a,lo=1,hi=10,n=4)=>{const s=new Set([a]);let g=0;while(s.size<n&&g++<200){const v=a+rnd(-3,3);if(v>=lo&&v<=hi)s.add(v)}for(let v=lo;s.size<n&&v<=hi;v++)s.add(v);return shuffle([...s])};
const SG=v=>({'>':'&gt;','<':'&lt;','=':'=','≠':'≠','+':'+','-':'−'}[v]||v);
const cmp=(a,b)=>a>b?'>':a<b?'<':'=';
const grp=(e,n,fs=44,w=300)=>`<div class="grp" style="width:${w}px;min-height:${fs*1.6+24}px;font-size:${fs}px">${e.repeat(n)}</div>`;
const EM=['🍎','⭐','🐟','🌸','🚗','🐤','🍓','⚽','🦋','🧁','🍐','🐞','🍄','🎈','🐝','🍋','🌼','🐸','🥕','🍒'];
const big=(t,c='#3b7dd8',fs=90)=>`<span style="font-size:${fs}px;font-weight:900;color:${c}">${t}</span>`;
const em=(e,fs=64)=>`<span style="font-size:${fs}px;line-height:1">${e}</span>`;
function prog(host,n){const st=el('div','prog');for(let i=0;i<n;i++)st.append(el('i'));host.append(st);st.set=k=>[...st.children].forEach((x,j)=>x.className=j<k?'d':j===k?'c':'');return st}
function col(b,gap=16,just='space-around'){b.style.flexDirection='column';b.style.alignItems='center';b.style.justifyContent=just;b.style.gap=gap+'px'}
function cellBtn(h,css=''){const c=el('button','',h);c.style.cssText='background:#fff;border:4px solid var(--line);border-radius:22px;display:grid;place-items:center;box-shadow:0 5px 0 var(--line);padding:8px;'+css;return c}

const K={
/* сұрақтар тізбегі (жай орауыш) */
series(b,T,items,o={}){col(b,14,'center');T.series(b,items,o)},
/* екі жақты сәйкестендіру: сол жақты бас, сосын оң жақты */
match(b,T,{L,R,title,cw=200,ch=150,gap=26,side=false,cw2}){col(b,10);b.style.position='relative';if(title)b.append(el('div','mut',title));
 const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');svg.style.cssText='position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:2';b.append(svg);
 const top=el('div','');top.style.cssText=`display:flex;gap:${gap}px;flex-wrap:wrap;justify-content:center`;const bot=el('div','');bot.style.cssText=top.style.cssText;
 if(side){top.style.flexDirection=bot.style.flexDirection='column';const wr=el('div','');wr.style.cssText='display:flex;gap:220px;align-items:center';wr.append(top,bot);b.append(wr)}else b.append(top,bot);
 let sel=null,left=L.length;const A=[],B=[];
 L.forEach(it=>{const c=cellBtn(it.h,`width:${cw}px;height:${ch}px`);c.dataset.k=it.k;c.onclick=()=>{if(c.dataset.ok)return;A.forEach(x=>x.style.outline='');sel=c;c.style.outline='5px solid #ffc531';beep('tap')};top.append(c);A.push(c)});
 shuffle(R).forEach(it=>{const c=cellBtn(it.h,`width:${cw2||cw}px;height:${ch}px`);c.dataset.k=it.k;c.onclick=()=>{if(c.dataset.ok)return;if(!sel){T.bad(c);return}
  if(sel.dataset.k===c.dataset.k){T.ok(c);link(sel,c);sel=null;if(--left===0)T.done()}else T.bad(c)};bot.append(c);B.push(c)});
 function link(a,c){a.dataset.ok=c.dataset.ok=1;a.style.outline='';a.style.borderColor=c.style.borderColor='#22b07d';const Rr=b.getBoundingClientRect(),P=a.getBoundingClientRect(),Q=c.getBoundingClientRect();
  const l=document.createElementNS('http://www.w3.org/2000/svg','line');if(side){l.setAttribute('x1',(P.right-Rr.left)/SCALE);l.setAttribute('y1',(P.top+P.height/2-Rr.top)/SCALE);l.setAttribute('x2',(Q.left-Rr.left)/SCALE);l.setAttribute('y2',(Q.top+Q.height/2-Rr.top)/SCALE)}
  else{l.setAttribute('x1',(P.left+P.width/2-Rr.left)/SCALE);l.setAttribute('y1',(P.bottom-Rr.top)/SCALE);l.setAttribute('x2',(Q.left+Q.width/2-Rr.left)/SCALE);l.setAttribute('y2',(Q.top-Rr.top)/SCALE)}
  l.setAttribute('stroke','#22b07d');l.setAttribute('stroke-width','7');l.setAttribute('stroke-linecap','round');svg.append(l)}
 T.reveal=()=>{A.forEach(a=>{if(a.dataset.ok)return;const c=B.find(x=>!x.dataset.ok&&x.dataset.k===a.dataset.k);if(c){link(a,c);left--}});if(left<=0)T.done()}},
/* топтарға бөлу: затты бас, сосын қорапты бас */
bins(b,T,{items,bins,title}){col(b,14);if(title)b.append(el('div','mut',title));
 const pool=el('div','');pool.style.cssText='display:flex;gap:14px;flex-wrap:wrap;justify-content:center;min-height:120px;max-width:1350px';b.append(pool);
 const row=el('div','');row.style.cssText='display:flex;gap:26px;justify-content:center';b.append(row);let sel=null,left=items.length;const Bs=[];
 bins.forEach(bn=>{const c=el('button','',`<div style="font-size:26px;font-weight:900;margin-bottom:6px">${bn.h}</div><div class="bin-in" style="display:flex;flex-wrap:wrap;gap:6px;justify-content:center;min-height:90px"></div>`);
  c.style.cssText=`flex:1;min-width:300px;max-width:${Math.floor(1300/bins.length)}px;background:${bn.c||'#f6f7fb'};border:4px dashed #c9cfdc;border-radius:24px;padding:12px`;c.dataset.id=bn.id;
  c.onclick=()=>{if(!sel){T.bad(c);return}if(sel.dataset.bin===bn.id){T.ok(c);sel.style.outline='';sel.onclick=null;sel.style.transform='scale(.8)';c.querySelector('.bin-in').append(sel);sel=null;if(--left===0)T.done()}else{T.bad(sel)}};row.append(c);Bs.push(c)});
 shuffle(items).forEach(it=>{const c=cellBtn(it.h,'min-width:110px;height:110px');c.dataset.bin=it.bin;c.onclick=()=>{pool.querySelectorAll('button').forEach(x=>x.style.outline='');sel=c;c.style.outline='5px solid #ffc531';beep('tap')};pool.append(c)});
 T.reveal=()=>{pool.querySelectorAll('button').forEach(x=>x.classList.add('hint'));toast('Әр затты өз тобына сал 🙂','#c28a00')}},
/* дұрыстарының бәрін тап */
pickAll(b,T,{tiles,cols=6,size=180,title}){col(b,16);if(title)b.append(el('div','qline',title));
 const g=el('div','');g.style.cssText=`display:grid;grid-template-columns:repeat(${cols},${size}px);gap:16px`;b.append(g);const need=tiles.filter(t=>t.ok).length;const pr=el('div','big',`0 / ${need}`);b.append(pr);let n=0;
 shuffle(tiles).forEach(t=>{const c=cellBtn(t.h,`width:${size}px;height:${size}px`);c.dataset.v=t.ok?1:0;c.onclick=()=>{if(c.dataset.ok)return;if(t.ok){c.dataset.ok=1;c.style.background='#e6f8ef';c.style.borderColor='#22b07d';T.ok(c);pr.textContent=++n+' / '+need;if(n===need)T.done()}else T.bad(c)};g.append(c)});
 T.reveal=()=>g.querySelectorAll('[data-v="1"]:not([data-ok])').forEach(c=>c.classList.add('hint'))},
/* теңдеулер мен бос ұяшықтар: rows = [[2,'+',null,'=',3],...]; null орнына сан, 's' белгісі */
fill(b,T,{rows,ans,vals=[0,1,2,3,4,5,6,7,8,9,10],signs=['>','<','='],pics,title,fs=64}){col(b,14,'center');if(title)b.append(el('div','mut',title));let left=0;const all=[];
 rows.forEach((r,ri)=>{const line=el('div','');line.style.cssText='display:flex;align-items:center;gap:14px;justify-content:center';if(pics&&pics[ri])line.insertAdjacentHTML('beforeend',pics[ri]);
  const sl=[];r.forEach((t,j)=>{if(t===null||t==='s'){const s=el('button','slot','');s.style.cssText+=`;width:${fs*1.3}px;height:${fs*1.3}px;font-size:${fs*.8}px`;const want=ans[ri][sl.length];s.dataset.w=want;
    s.onclick=()=>{if(s.dataset.ok)return;T.picker(s,t==='s'?signs:vals,t==='s'?SG:null,v=>{if(String(v)===String(want)){s.innerHTML=t==='s'?SG(v):v;s.classList.add('f');s.dataset.ok=1;T.ok(s);if(--left===0)T.done()}else T.bad(s)})};sl.push(s);line.append(s);left++;all.push([s,t])}
   else line.insertAdjacentHTML('beforeend',`<span style="font-size:${fs}px;font-weight:900;min-width:${fs*.6}px;text-align:center">${SG(t)}</span>`)});b.append(line)});
 T.reveal=()=>all.forEach(([s,t])=>{if(!s.dataset.ok){s.innerHTML=t==='s'?SG(s.dataset.w):s.dataset.w;s.style.color='#e0a000'}})},
/* сан үйі (құрамы): n шатырда, қатарларда a | b, бір ұяшық бос */
house(b,T,{n,pairs}){col(b,10,'center');let left=0;const all=[];
 const h=el('div','');h.style.cssText='display:flex;flex-direction:column;align-items:center';
 h.append(el('div','',`<svg width="380" height="${pairs.length>6?80:110}" viewBox="0 0 380 110" preserveAspectRatio="none"><path d="M10 105 L190 8 L370 105Z" fill="#ef7f6f" stroke="#c9584a" stroke-width="5"/><text x="190" y="90" text-anchor="middle" font-size="64" font-weight="900" fill="#fff" font-family="Nunito">${n}</text></svg>`));
 const body=el('div','');body.style.cssText='background:#fff7e6;border:5px solid #e6b86a;border-top:none;width:340px;padding:8px 0';h.append(body);
 const CH=pairs.length>6?54:66;pairs.forEach(([a,c,hide])=>{const r=el('div','');r.style.cssText='display:flex;justify-content:center;gap:0;border-bottom:3px solid #f0d6a3';
  [a,c].forEach((v,i)=>{const cell=el('div','');cell.style.cssText='width:160px;height:'+CH+'px;display:grid;place-items:center;font-size:46px;font-weight:900'+(i?';border-left:3px solid #f0d6a3':'');
   if(hide===i){const s=el('button','slot','');s.style.cssText+=';width:'+(CH-10)+'px;height:'+(CH-10)+'px;font-size:34px';s.dataset.w=v;s.onclick=()=>{if(s.dataset.ok)return;T.picker(s,[...Array(n+1).keys()],null,x=>{if(x===v){s.textContent=x;s.classList.add('f');s.dataset.ok=1;T.ok(s);if(--left===0)T.done()}else T.bad(s)})};cell.append(s);left++;all.push(s)}else cell.textContent=v;r.append(cell)});body.append(r)});
 b.append(h);T.reveal=()=>all.forEach(s=>{if(!s.dataset.ok){s.textContent=s.dataset.w;s.style.color='#e0a000'}})},
/* бірнеше сан үйі бір қатарда (ортақ санауыш) */
houseRow(b,T,list){b.style.justifyContent='center';b.style.alignItems='flex-end';b.style.gap='34px';let left=0;const all=[];const cols=['#ef7f6f','#5aa9e6','#f39c4a','#b99aa0','#86c47a','#b28bff'];
 list.forEach(({n,pairs},hi)=>{const h=el('div','');h.style.cssText='display:flex;flex-direction:column;align-items:center';const W=Math.max(170,60*2+40);
  h.append(el('div','',`<svg width="${W+20}" height="80" viewBox="0 0 ${W+20} 80"><path d="M4 76 L${(W+20)/2} 6 L${W+16} 76Z" fill="${cols[hi%6]}" stroke="#0003" stroke-width="4"/><circle cx="${(W+20)/2}" cy="52" r="20" fill="#fde047"/><text x="${(W+20)/2}" y="64" text-anchor="middle" font-size="32" font-weight="900" font-family="Nunito">${n}</text></svg>`));
  const body=el('div','');body.style.cssText=`background:${cols[hi%6]}33;border:4px solid ${cols[hi%6]};border-top:none;width:${W}px;padding:6px 0`;h.append(body);
  pairs.forEach(([a,c,hide])=>{const r=el('div','');r.style.cssText='display:flex;justify-content:center;gap:10px;margin:6px 0';[a,c].forEach((v,i)=>{const cell=el('div','');cell.style.cssText='width:66px;height:62px;background:#fff;border-radius:10px;display:grid;place-items:center;font-size:40px;font-weight:900';
   if(hide===i){const s=el('button','slot','');s.style.cssText+=';width:58px;height:54px;font-size:34px';s.dataset.w=v;left++;all.push(s);s.onclick=()=>{if(s.dataset.ok)return;T.picker(s,[...Array(n+1).keys()],null,x=>{if(x===v){s.textContent=x;s.classList.add('f');s.dataset.ok=1;T.ok(s);if(--left===0)T.done()}else T.bad(s)})};cell.append(s)}else cell.textContent=v;r.append(cell)});body.append(r)});b.append(h)});
 T.reveal=()=>all.forEach(s=>{if(!s.dataset.ok){s.textContent=s.dataset.w;s.style.color='#e0a000'}})},
/* реттік тізбек: бос орындарды толтыр */
seq(b,T,{rounds,title}){col(b,14);const st=prog(b,rounds.length);const q=el('div','qline');const row=el('div','');row.style.cssText='display:flex;gap:10px;flex-wrap:wrap;justify-content:center';b.append(q,row);let k=0,sel=null,left=0;
 const cards=el('div','ncards');b.append(cards);
 const show=()=>{st.set(k);const r=rounds[k];q.innerHTML=r.q||title||'';row.innerHTML='';left=0;sel=null;
  r.seq.forEach((n,i)=>{if(r.miss.includes(i)){const s=el('button','slot','?');s.style.width=s.style.height='96px';s.dataset.n=n;left++;s.onclick=()=>{if(s.dataset.ok)return;row.querySelectorAll('.slot').forEach(x=>x.classList.remove('sel'));s.classList.add('sel');sel=s};row.append(s)}
   else{const c=ncard(n);c.style.cssText+=';width:96px;height:96px;pointer-events:none';row.append(c)}});sel=row.querySelector('.slot');sel&&sel.classList.add('sel');
  cards.innerHTML='';for(let i=r.from??0;i<=(r.to??10);i++){const c=ncard(i,'sm');if(i===0)c.style.setProperty('--c','#e3e7ef');c.onclick=()=>{if(!sel)return;if(+sel.dataset.n===i){T.ok(c);sel.textContent=i;sel.classList.add('f');sel.classList.remove('sel');sel.dataset.ok=1;sel=row.querySelector('.slot:not([data-ok])');sel&&sel.classList.add('sel');if(--left===0){k++;T.later(()=>k<rounds.length?show():(st.set(rounds.length),T.done()),900)}}else T.bad(c)};cards.append(c)}};
 T.reveal=()=>row.querySelectorAll('.slot:not([data-ok])').forEach(s=>{s.textContent=s.dataset.n;s.style.color='#e0a000'});show()},
/* ретімен бас (өсу немесе кему) */
order(b,T,{items,title}){col(b,18,'center');if(title)b.append(el('div','qline',title));const row=el('div','');row.style.cssText='display:flex;gap:20px;flex-wrap:wrap;justify-content:center';b.append(row);
 const out=el('div','');out.style.cssText='display:flex;gap:12px;min-height:130px';b.append(out);let k=0;
 shuffle(items.map((it,i)=>({...it,i}))).forEach(it=>{const c=cellBtn(it.h,'min-width:150px;height:150px');c.dataset.i=it.i;c.onclick=()=>{if(c.dataset.ok)return;if(it.i===k){T.ok(c);c.dataset.ok=1;out.append(c);k++;if(k===items.length)T.done()}else T.bad(c)};row.append(c)});
 T.reveal=()=>{const c=row.querySelector(`[data-i="${k}"]`);c&&c.classList.add('hint')}}
};

/* ====== ОЙЫНДАР ====== */
function gwrap(box,bg){box.innerHTML='';const W=el('div','');W.style.cssText='position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:space-around;padding:18px;'+(bg?'background:'+bg:'');box.append(W);return W}
const GM={
/* жалпы викторина: 10 айналым, уақыт пен қате */
quiz({icon,title,gen,rounds=10,bg,em:emj='🏆',win='Керемет!'}){return{icon,build(box,T){const start=()=>{const W=gwrap(box,bg);const st=prog(W,rounds);const hd=el('div','qline',title);hd.style.fontSize='32px';const tm=el('div','mut','');tm.style.fontSize='24px';
 const qb=el('div','');qb.style.cssText='flex:1;display:flex;flex-direction:column;gap:12px;align-items:center;justify-content:center;width:100%';const ob=el('div','');ob.style.cssText='display:flex;gap:16px;flex-wrap:wrap;justify-content:center';W.append(st,hd,tm,qb,ob);
 let k=0,err=0,t0=Date.now(),cur;const alive=T.alive();const tick=()=>{if(!alive()||!W.isConnected)return;tm.textContent='⏱ '+Math.floor((Date.now()-t0)/1000)+' сек · ❌ '+err;setTimeout(tick,500)};tick();
 const show=()=>{st.set(k);cur=gen(k);qb.innerHTML=cur.q;ob.innerHTML='';shuffle(cur.o).forEach(v=>{const b=typeof v==='number'&&!cur.oh?ncard(v):el('button','opt',cur.oh?cur.oh(v):v);b.dataset.v=v;if(cur.oh){b.style.height='auto';b.style.minHeight='84px';b.style.padding='8px 18px'}
  b.onclick=()=>{if(b.dataset.l)return;if(String(v)===String(cur.a)){T.ok(b);[...ob.children].forEach(x=>x.dataset.l=1);T.later(()=>{k++;if(k<rounds)show();else{const s=Math.floor((Date.now()-t0)/1000);T.end(box,{em:emj,title:win,text:`Уақыт: ${s} сек · ${T.errTxt(err)}`,again:start})}},650)}else{err++;T.bad(b)}};ob.append(b)})};
 T.reveal=()=>[...ob.children].forEach(x=>{if(x.dataset.v===String(cur.a))x.classList.add('hint')});show()};start()}}},
/* шарларды ретімен жару */
balloons({from=1,to=10,title}){return{icon:'🎈',build(box,T){let rev=false;const start=()=>{const W=gwrap(box,'linear-gradient(#bfe6ff,#eaf7ff 70%,#9fd77c 70%)');W.style.justifyContent='flex-start';
 const hd=el('div','qline');W.append(hd);const area=el('div','');area.style.cssText='position:relative;flex:1;width:100%';W.append(area);let nxt=rev?to:from,err=0,t0=Date.now();
 const upd=()=>hd.innerHTML=`🎈 ${title||'Шарларды'} ${rev?`кері ретпен (${to} → ${from})`:`ретімен (${from} → ${to})`} жар! &nbsp; Келесі: <span style="color:#5b4bdb">${nxt}</span>`;upd();
 const C=['#e53935','#fb8c00','#fdd835','#43a047','#1e88e5','#8e24aa','#ec407a','#00acc1','#7cb342','#ff7043','#5c6bc0'];const N=to-from+1,cols=Math.ceil(N/2),pos=shuffle([...Array(N).keys()]);
 if(!document.getElementById('flk')){const s=el('style');s.id='flk';s.textContent='@keyframes fl{to{margin-top:-22px}}';document.head.append(s)}
 for(let n=from;n<=to;n++){const p=pos[n-from],x=60+(p%cols)*(1300/cols)+rnd(-30,30),y=30+Math.floor(p/cols)*260+rnd(-20,20);
  const e=el('button','',`<svg width="120" height="170" viewBox="0 0 62 90"><ellipse cx="31" cy="34" rx="28" ry="32" fill="${C[(n-from)%C.length]}"/><ellipse cx="21" cy="21" rx="7" ry="10" fill="#fff6"/><path d="M31 66 l-5 6 h10z" fill="${C[(n-from)%C.length]}"/><path d="M31 72 q8 8 0 18" stroke="#777" fill="none" stroke-width="2"/><text x="31" y="45" text-anchor="middle" font-size="30" font-weight="900" fill="#fff" font-family="Nunito">${n}</text></svg>`);
  e.dataset.n=n;e.style.cssText=`position:absolute;left:${x}px;top:${y}px;animation:fl ${2+Math.random()*1.5}s ease-in-out infinite alternate;transition:transform .25s,opacity .25s`;
  e.onclick=()=>{if(e.dataset.p)return;if(n===nxt){e.dataset.p=1;beep('ok');e.style.transform='scale(1.6)';e.style.opacity='0';nxt+=rev?-1:1;upd();if((rev&&nxt<from)||(!rev&&nxt>to)){const s=Math.round((Date.now()-t0)/1000);T.end(box,{em:'🎉',title:'Барлық шар жарылды!',text:`Уақыт: ${s} сек · ${T.errTxt(err)}`,again:()=>{rev=!rev;start()}})}}else{err++;T.bad(e)}};area.append(e)}
 T.reveal=()=>area.querySelectorAll('button').forEach(x=>{if(!x.dataset.p&&+x.dataset.n===nxt)x.classList.add('hint')})};start()}}},
/* жұбын тап (жад ойыны) */
memory({pairs,title='🧩 Жұбын тап!'}){return{icon:'🧩',build(box,T){const start=()=>{const W=gwrap(box);const hd=el('div','qline',title);const inf=el('div','big','');const g=el('div','');const P=pairs();const cols=P.length>5?6:5;
 g.style.cssText=`display:grid;grid-template-columns:repeat(${cols},${P.length>5?175:200}px);gap:18px`;W.append(hd,inf,g);
 const cards=shuffle(P.flatMap((p,i)=>[{i,h:p[0]},{i,h:p[1]}]));let open=[],got=0,err=0,busy=false;const upd=()=>inf.textContent=`Жұп: ${got} / ${P.length} · Қате: ${err}`;upd();
 const back='linear-gradient(135deg,#7a6cf0,#a58bff)';
 cards.forEach(cd=>{const c=el('button','');c.style.cssText=`height:${P.length>5?160:190}px;border-radius:24px;background:${back};display:grid;place-items:center;font-size:70px;color:#fff`;c.innerHTML='❓';
  c.onclick=()=>{if(busy||c.dataset.o)return;c.dataset.o=1;c.style.background='#fff';c.style.border='4px solid #dfe3ec';c.innerHTML=cd.h;beep('tap');open.push([c,cd]);
   if(open.length===2){const [[a,x],[z,y]]=open;open=[];if(x.i===y.i){got++;T.ok(a);T.ok(z);upd();if(got===P.length)T.later(()=>T.end(box,{em:'🧩',title:'Барлық жұп табылды!',text:T.errTxt(err),again:start}),700)}
    else{err++;busy=true;upd();setTimeout(()=>{[a,z].forEach(q=>{delete q.dataset.o;q.style.background=back;q.style.border='';q.innerHTML='❓'});busy=false},1000)}}};g.append(c)})};start()}}},
/* аула: дұрысын ғана бас, 30 секунд */
catcher({icon='🎯',title,good,bad,sec=30}){return{icon,build(box,T){const start=()=>{const W=gwrap(box);const hd=el('div','qline',title);const inf=el('div','big','');const g=el('div','');g.style.cssText='display:grid;grid-template-columns:repeat(4,200px);grid-template-rows:repeat(2,200px);gap:24px';W.append(hd,inf,g);
 const cells=[...Array(8)].map(()=>{const c=el('button','');c.style.cssText='border-radius:28px;background:#eef1f8;border:4px solid #dfe3ec;display:grid;place-items:center';g.append(c);return c});
 let sc=0,err=0,left=sec;const alive=T.alive();const upd=()=>inf.textContent=`⏱ ${left} · ✅ ${sc} · ❌ ${err}`;upd();
 const pop=()=>{if(!alive()||!W.isConnected||left<=0)return;const free=cells.filter(c=>!c.dataset.on);if(free.length){const c=free[rnd(0,free.length-1)],ok=Math.random()<.45;c.dataset.on=ok?'1':'0';c.innerHTML=ok?good():bad();c.style.background='#fff';const my=Math.random();c.dataset.k=my;setTimeout(()=>{if(c.dataset.k==my){c.innerHTML='';delete c.dataset.on;c.style.background='#eef1f8'}},1600)}setTimeout(pop,650)};
 cells.forEach(c=>c.onclick=()=>{if(!c.dataset.on||left<=0)return;if(c.dataset.on==='1'){sc++;T.ok(c)}else{err++;T.bad(c)}c.innerHTML='';delete c.dataset.on;c.dataset.k='';c.style.background='#eef1f8';upd()});
 const tick=()=>{if(!alive()||!W.isConnected)return;left--;upd();if(left<=0)return T.end(box,{em:'🎯',title:`${sc} рет дұрыс аладың!`,text:T.errTxt(err),again:start});setTimeout(tick,1000)};setTimeout(tick,1000);pop()};start()}}},
/* сан пойызы */
train({max=10,len=6}){return{icon:'🚂',build(box,T){const start=()=>{const W=gwrap(box);const st=prog(W,6);W.append(el('div','qline','🚂 Сан пойызы: вагондарға жетпейтін санды қой'));
 const tr=el('div','');tr.style.cssText='display:flex;align-items:flex-end;gap:8px;transition:transform 1.2s ease-in;padding-bottom:22px';const rail=el('div','');rail.style.cssText='width:1300px;height:12px;background:repeating-linear-gradient(90deg,#8d6e63 0 30px,#6d4c41 30px 40px);border-radius:4px';
 const tw=el('div','');tw.style.cssText='display:flex;flex-direction:column;align-items:center;overflow:hidden;width:1400px';tw.append(tr,rail);const ob=el('div','ncards');W.append(tw,ob);
 const L=Math.min(len,max);const R=[...Array(6)].map((_,i)=>{const rev=i>=3;const s=rev?rnd(L-1,max):rnd(0,max-L+1);return{seq:[...Array(L)].map((_,j)=>rev?s-j:s+j),miss:pick([...Array(L-1).keys()].map(x=>x+1),i<2?1:2)}});
 let k=0,err=0,sel=null,left=0;
 const show=()=>{st.set(k);tr.style.transform='';tr.innerHTML='<span style="font-size:120px;line-height:1">🚂</span>';const r=R[k];left=r.miss.length;
  r.seq.forEach((n,j)=>{const w=el('div','');const m=r.miss.includes(j);w.style.cssText=`width:150px;height:120px;border-radius:14px 14px 6px 6px;background:${m?'#dfe3ec':(NCOL[n]||'#e3e7ef')};display:grid;place-items:center;position:relative;box-shadow:inset 0 -10px 0 #0002`;
   w.innerHTML='<span style="position:absolute;bottom:-18px;left:20px;font-size:30px">⚫</span><span style="position:absolute;bottom:-18px;right:20px;font-size:30px">⚫</span>';
   if(m){const s=el('div','slot','?');s.dataset.n=n;s.style.background='#fff';w.append(s);s.onclick=()=>{tr.querySelectorAll('.slot').forEach(x=>x.classList.remove('sel'));s.classList.add('sel');sel=s}}else w.insertAdjacentHTML('beforeend',`<b style="font-size:64px">${n}</b>`);tr.append(w)});
  sel=tr.querySelector('.slot');sel.classList.add('sel')};
 for(let i=0;i<=max;i++){const c=ncard(i,'sm');if(!i)c.style.setProperty('--c','#e3e7ef');c.onclick=()=>{if(!sel)return;if(+sel.dataset.n===i){T.ok(c);sel.textContent=i;sel.classList.add('f');sel.classList.remove('sel');sel.dataset.ok=1;sel=tr.querySelector('.slot:not([data-ok])');sel&&sel.classList.add('sel');
   if(--left===0){tr.style.transform='translateX(-1600px)';k++;T.later(()=>{if(k<R.length)show();else T.end(box,{em:'🚂',title:'Пойыз жетті!',text:T.errTxt(err),again:start})},1300)}}else{err++;T.bad(c)}};ob.append(c)}
 T.reveal=()=>tr.querySelectorAll('.slot:not([data-ok])').forEach(s=>{s.textContent=s.dataset.n;s.style.color='#e0a000'});show()};start()}}},
/* қолтырауын: > < = */
croc({max=10}){return GM.quiz({icon:'🐊',title:'🐊 Қомағай қолтырауын көбін жейді! Белгіні таңда',bg:'linear-gradient(#e0f7fa,#fff 60%)',em:'🐊',win:'Қолтырауын тойды!',gen:i=>{const a=rnd(0,max);let c=rnd(0,max);if(i%4===3)c=a;
 return{q:`<div style="display:flex;align-items:center;gap:50px"><div style="text-align:center">${a?dots(Math.min(a,10),190):'<div style="width:190px;height:190px"></div>'}<div style="font-size:90px;font-weight:900">${a}</div></div><div style="font-size:120px">❔</div><div style="text-align:center">${c?dots(Math.min(c,10),190):'<div style="width:190px;height:190px"></div>'}<div style="font-size:90px;font-weight:900">${c}</div></div></div>`,
  o:['>','<','='],a:cmp(a,c),oh:v=>`<span style="font-size:60px;padding:6px 26px">${{'>':'🐊 &gt;','<':'&lt; 🐊','=':'='}[v]}</span>`}}})},
/* сан үйін толтыр жарысы */
houses({nums}){return{icon:'🏠',build(box,T){const start=()=>{const W=gwrap(box);const st=prog(W,6);W.append(el('div','qline','🏠 Сан үйлеріне жетпейтін санды қой!'));const row=el('div','');row.style.cssText='display:flex;gap:40px';W.append(row);
 let k=0,err=0;const R=[...Array(6)].map(()=>{const n=nums[rnd(0,nums.length-1)],a=rnd(0,n);return{n,a,c:n-a,h:rnd(0,1)}});const ob=el('div','ncards');W.append(ob);
 const show=()=>{st.set(k);const r=R[k];row.innerHTML=`<div style="display:flex;flex-direction:column;align-items:center"><svg width="420" height="130" viewBox="0 0 380 110"><path d="M10 105 L190 8 L370 105Z" fill="#7e9cf0" stroke="#5a77cc" stroke-width="5"/><text x="190" y="90" text-anchor="middle" font-size="64" font-weight="900" fill="#fff" font-family="Nunito">${r.n}</text></svg>
  <div style="display:flex;background:#eef3ff;border:5px solid #9fb3ea;border-top:none;width:380px"><div style="flex:1;height:150px;display:grid;place-items:center;font-size:90px;font-weight:900">${r.h===0?'?':r.a}</div><div style="flex:1;height:150px;display:grid;place-items:center;font-size:90px;font-weight:900;border-left:4px solid #9fb3ea">${r.h===1?'?':r.c}</div></div></div>`;
  ob.innerHTML='';const want=r.h===0?r.a:r.c;for(let i=0;i<=r.n;i++){const c=ncard(i);if(!i)c.style.setProperty('--c','#e3e7ef');c.dataset.v=i;c.onclick=()=>{if(c.dataset.l)return;if(i===want){T.ok(c);[...ob.children].forEach(x=>x.dataset.l=1);T.later(()=>{k++;k<6?show():T.end(box,{em:'🏠',title:'Барлық үй толды!',text:T.errTxt(err),again:start})},700)}else{err++;T.bad(c)}};ob.append(c)}};
 T.reveal=()=>{const r=R[k];const w=r.h===0?r.a:r.c;[...ob.children].forEach(c=>{if(+c.dataset.v===w)c.classList.add('hint')})};show()};start()}}}
};
/* ====== ЖАРЫС генераторлары ====== */
const DG={
 count:(max=10)=>()=>{const e=EM[rnd(0,EM.length-1)],n=rnd(1,max);return{q:`<div class="grp" style="width:430px;font-size:52px">${e.repeat(n)}</div>`,o:near(n,1,max),a:n}},
 digit:(max=10)=>()=>{const n=rnd(1,max);const k=rnd(0,2);const q=k===0?dots(n,180):k===1?`<div style="display:flex">${hand(n,150)}</div>`:`<div class="grp" style="width:430px;font-size:52px">${EM[rnd(0,19)].repeat(n)}</div>`;return{q,o:near(n,1,max),a:n}},
 compare:(max=10)=>()=>{const e=EM[rnd(0,EM.length-1)],a=rnd(1,max);let c=rnd(1,max);if(Math.random()<.2)c=a;return{q:`<div style="display:flex;align-items:center;gap:14px">${grp(e,a,34,190)}<div class="slot" style="width:66px;height:66px">?</div>${grp(e,c,34,190)}</div>`,o:['>','<','='],a:cmp(a,c),oh:v=>`<span style="font-size:54px;padding:4px 18px">${SG(v)}</span>`}},
 compose:(nums)=>()=>{const n=nums[rnd(0,nums.length-1)],a=rnd(0,n);return{q:`<div style="font-size:84px;font-weight:900">${n} = ${a} + <span class="slot" style="display:inline-grid;width:90px;height:90px;vertical-align:middle">?</span></div>`,o:near(n-a,0,n),a:n-a}},
 add:(max=10,minus=true)=>()=>{const op=minus&&Math.random()<.5?'-':'+';let a,c,r;if(op==='+'){r=rnd(1,max);a=rnd(0,r);c=r-a}else{a=rnd(1,max);c=rnd(0,a);r=a-c}return{q:`<div style="font-size:90px;font-weight:900">${a} ${SG(op)} ${c} = ?</div>`,o:near(r,0,max),a:r}},
 neighbors:(max=10)=>()=>{const n=rnd(1,max-1),b=Math.random()<.5;return{q:`<div style="font-size:84px;font-weight:900">${b?'? , '+n:n+' , ?'}</div><div class="mut" style="font-size:26px">${b?'Алдындағы сан':'Келесі сан'}</div>`,o:near(b?n-1:n+1,0,max),a:b?n-1:n+1}}
};

/* көріністен белгілі топтарды тап (мысалы, «екі-екіден» тұрғандарын) */
K.findTypes=function(b,T,{w=900,h=540,bg,items,deco='',good,q,msgBad,after}){
 const s=T.scene(b,{w,h,bg,items,count:false});if(deco)s.insertAdjacentHTML('afterbegin',deco);
 const side=el('div','side');b.append(side);const qq=el('div','qline',q);qq.style.fontSize='32px';const pr=el('div','big',`0 / ${good.length}`);const msg=el('div','mut','');msg.style.cssText='font-size:24px;text-align:center';side.append(qq,pr,msg);
 const found=new Set();
 s.els.forEach(e=>e.onclick=()=>{const t=e.dataset.t;if(good.includes(t)){if(found.has(t))return;found.add(t);s.els.filter(x=>x.dataset.t===t).forEach(x=>{x.append(el('span','bdg','✓'));T.ok(x)});pr.textContent=found.size+' / '+good.length;msg.textContent='';
   if(found.size===good.length){if(after){T.later(()=>{side.innerHTML='';after(side,s)},1200);toast('Барлығын таптың! ✓')}else T.done()}}else{T.bad(e);msg.textContent=msgBad?msgBad(t):'Бұл емес 🙂'}});
 T.reveal=()=>s.els.forEach(e=>{if(good.includes(e.dataset.t))e.classList.add('hint')});return s};

/* фигуралар */
const SHP=(t,c,s=80)=>{const C=c||{circle:'#29b6f6',square:'#ec407a',triangle:'#fdd835',rect:'#66bb6a'}[t];
 if(t==='circle')return `<svg width="${s}" height="${s}" viewBox="0 0 100 100"><circle cx="50" cy="50" r="44" fill="${C}"/></svg>`;
 if(t==='square')return `<svg width="${s}" height="${s}" viewBox="0 0 100 100"><rect x="8" y="8" width="84" height="84" fill="${C}"/></svg>`;
 if(t==='triangle')return `<svg width="${s}" height="${s}" viewBox="0 0 100 100"><path d="M50 8 L94 90 H6Z" fill="${C}"/></svg>`;
 if(t==='rect')return `<svg width="${s*1.4}" height="${s}" viewBox="0 0 140 100"><rect x="6" y="18" width="128" height="64" fill="${C}"/></svg>`;
 if(t==='flag')return `<svg width="${s}" height="${s}" viewBox="0 0 100 100"><rect x="18" y="8" width="6" height="88" fill="#555"/><path d="M24 10 H88 L74 30 L88 50 H24Z" fill="${C}"/></svg>`;return ''};
/* латын шаршысы: әр жол мен бағанда әр фигура бір рет */
K.latin=function(b,T,{grids,opts}){col(b,14,'center');const row=el('div','');row.style.cssText='display:flex;gap:60px';b.append(row);let left=0;const all=[];
 grids.forEach(g=>{const t=el('div','');t.style.cssText='display:grid;grid-template-columns:repeat(3,130px);gap:0;border:4px solid #e3c9f0;border-radius:18px;overflow:hidden;background:#fff';
  g.forEach(r=>r.forEach(c=>{const cell=el('div','');cell.style.cssText='height:130px;display:grid;place-items:center;border:2px solid #f0e2f7';
   if(c[0]==='?'){const s=el('button','slot','?');s.style.cssText+=';width:100px;height:100px';s.dataset.w=c.slice(1);left++;all.push(s);
    s.onclick=()=>{if(s.dataset.ok)return;T.picker(s,opts.map(o=>o.k),k=>opts.find(o=>o.k===k).h,k=>{if(k===s.dataset.w){s.innerHTML=opts.find(o=>o.k===k).h;s.classList.add('f');s.dataset.ok=1;T.ok(s);if(--left===0)T.done()}else T.bad(s)})};cell.append(s)}
   else cell.innerHTML=opts.find(o=>o.k===c).h;t.append(cell)}));row.append(t)});
 T.reveal=()=>all.forEach(s=>{if(!s.dataset.ok){s.innerHTML=opts.find(o=>o.k===s.dataset.w).h;s.style.opacity='.6'}})};
/* сан сәулесі (секірулер) */
function nline(max,jumps=[],start=0,w=900){const st=w/(max+.6),x=i=>30+i*st;let s=`<svg width="${w+40}" height="150" viewBox="0 0 ${w+40} 150"><line x1="20" y1="110" x2="${w+20}" y2="110" stroke="#1f2a44" stroke-width="4"/>`;
 for(let i=0;i<=max;i++)s+=`<line x1="${x(i)}" y1="98" x2="${x(i)}" y2="122" stroke="#1f2a44" stroke-width="4"/><text x="${x(i)}" y="146" text-anchor="middle" font-size="26" font-weight="900" font-family="Nunito">${i}</text>`;
 let p=start;jumps.forEach(j=>{const q=p+j;const mx=(x(p)+x(q))/2;s+=`<path d="M${x(p)} 96 Q${mx} ${40-Math.abs(j)*4} ${x(q)} 96" fill="none" stroke="${j>0?'#e53935':'#1e63d6'}" stroke-width="5" marker-end="url(#ah)"/><text x="${mx}" y="${50-Math.abs(j)*4}" text-anchor="middle" font-size="26" font-weight="900" fill="${j>0?'#e53935':'#1e63d6'}">${j>0?'+':'−'}${Math.abs(j)}</text>`;p=q});
 return s+`<defs><marker id="ah" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6" fill="none" stroke="#555" stroke-width="2"/></marker></defs></svg>`}

/* дәптер торындағы есептер */
K.notebook=function(b,T,{rows,ans,cols=2,vals=[0,1,2,3,4,5,6,7,8,9,10],fs=64}){
 const wrap=el('div','');wrap.style.cssText='flex:1;display:flex;align-items:center;justify-content:center;background-color:#fff;background-image:linear-gradient(#9ec3ee 1.5px,transparent 1.5px),linear-gradient(90deg,#9ec3ee 1.5px,transparent 1.5px);background-size:48px 48px;border:3px solid #9ec3ee;border-radius:12px';
 b.append(wrap);const inner=el('div','');inner.style.cssText=`display:grid;grid-template-columns:repeat(${cols},auto);gap:30px 110px`;wrap.append(inner);
 const tmp=el('div','');K.fill(tmp,T,{fs,vals,rows,ans});[...tmp.children].forEach(c=>{c.style.fontFamily="'Comic Sans MS','Nunito',cursive";inner.append(c)})};
/* бор тақта */
K.chalk=function(b,T,{rows,ans,pics,vals=[0,1,2,3,4,5,6,7,8,9,10]}){
 const wrap=el('div','');wrap.style.cssText='flex:1;display:grid;grid-template-columns:1fr 1fr;background:#2e6b4a;border:14px solid #8d5a2b;border-radius:10px;padding:20px';b.append(wrap);
 rows.forEach((r,i)=>{const c=el('div','');c.style.cssText='display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;color:#fff;'+(i%2?'border-left:3px solid #ffffff55;':'')+(i>1?'border-top:3px solid #ffffff55;':'');
  c.insertAdjacentHTML('beforeend',`<div style="font-size:64px;filter:grayscale(.2)">${pics[i]}</div>`);const tmp=el('div','');K.fill(tmp,T,{fs:54,vals,rows:[r],ans:[ans[i]]});
  const line=tmp.firstChild;line.querySelectorAll('span').forEach(s=>s.style.color='#fff');line.style.fontFamily="'Comic Sans MS','Nunito',cursive";c.append(line);wrap.append(c)});
 /* бөлек fill шақыруы әр жолға жеке санауыш береді – жалпы санауыш */
 const slots=wrap.querySelectorAll('.slot');let left=slots.length;slots.forEach(s=>{s.onclick=()=>{T.picker(s,vals,null,v=>{if(String(v)===s.dataset.w){s.textContent=v;s.classList.add('f');s.dataset.ok=1;T.ok(s);if(--left===0)T.done()}else T.bad(s)})}});
 T.reveal=()=>slots.forEach(s=>{if(!s.dataset.ok){s.textContent=s.dataset.w;s.style.color='#ffd54f'}})};

/* асық (сурет) */
const ASYQ=(c='#7cc576',s=70)=>`<svg width="${s}" height="${s*.7}" viewBox="0 0 100 70"><path d="M12 30 Q8 8 30 12 Q50 2 70 12 Q92 8 88 30 Q96 52 74 58 Q50 70 26 58 Q4 52 12 30Z" fill="${c}" stroke="#0002" stroke-width="3"/><ellipse cx="50" cy="34" rx="16" ry="10" fill="#0001"/></svg>`;
/* сан үйі (дайын, көрсетуге) */
function houseView(n,pairs,c='#ef7f6f'){return `<div style="display:inline-flex;flex-direction:column;align-items:center"><svg width="220" height="80" viewBox="0 0 220 80"><path d="M6 76 L110 6 L214 76Z" fill="${c}" stroke="#0003" stroke-width="4"/><text x="110" y="66" text-anchor="middle" font-size="44" font-weight="900" fill="#fff" font-family="Nunito">${n}</text></svg>
 <div style="background:#fff7e6;border:4px solid #e6b86a;border-top:none;width:196px">${pairs.map(([a,b])=>`<div style="display:flex;border-bottom:2px solid #f0d6a3"><div style="flex:1;text-align:center;font-size:34px;font-weight:900">${a}</div><div style="flex:1;text-align:center;font-size:34px;font-weight:900;border-left:2px solid #f0d6a3">${b}</div></div>`).join('')}</div></div>`}
/* түсті жолақ (құрам) */
const bar=(a,b,u=50)=>{const c=x=>`<div style="width:${u}px;height:${u*.7}px;background:${x};border-right:2px solid #333"></div>`;return `<div style="display:flex;border:3px solid #333">${c('#1e88e5').repeat(a)}${c('#e53935').repeat(b)}</div>`};

/* цифр жазылуы */
const DIGP={0:'M50 20 C18 20 18 112 50 112 C82 112 82 20 50 20',4:'M62 18 L22 82 H82 M62 18 V112',5:'M74 20 H36 L32 60 Q52 50 68 62 Q82 78 70 98 Q54 116 26 102',
 6:'M72 24 Q44 12 34 46 Q26 88 44 108 Q70 118 76 88 Q76 64 52 64 Q34 66 30 84',7:'M24 20 H80 L42 112',8:'M50 62 Q24 52 32 30 Q42 14 60 22 Q76 34 64 52 Q50 62 40 74 Q28 92 44 108 Q64 116 72 96 Q76 78 50 62',
 9:'M72 50 Q68 20 46 24 Q28 30 30 48 Q36 66 62 56 Q72 50 72 50 Q72 92 50 110 Q36 114 28 104'};
const NW=['нөл','бір','екі','үш','төрт','бес','алты','жеті','сегіз','тоғыз','он'];
function digitSVG(n){const p=String(n).split('').map((d,i,a)=>{const dx=a.length>1?(i?40:-40):0;return `<path transform="translate(${dx} 0) scale(${a.length>1?.8:1}) translate(${a.length>1?12:0} 12)" d="${DIGP[d]||'M30 45 L62 18 L62 112'}" fill="none" stroke="#3b7dd8" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="400" stroke-dashoffset="400"><animate attributeName="stroke-dashoffset" from="400" to="0" dur="2s" begin="${0.3+i*2}s" fill="freeze"/></path>`}).join('');
 return `<svg width="150" height="190" viewBox="0 0 100 130" style="background:#fff;border:3px solid #c9def6;border-radius:18px"><line x1="0" y1="20" x2="100" y2="20" stroke="#c9def6" stroke-dasharray="4"/><line x1="0" y1="110" x2="100" y2="110" stroke="#c9def6" stroke-dasharray="4"/>${p}</svg>`}
K.introNum=function(w,T,n,e='🍎'){const r=el('div','');r.style.cssText='display:flex;gap:36px;align-items:center';r.append(el('div','',digitSVG(n)));
 r.append(el('div','',`<div style="display:flex;gap:22px;align-items:center;font-size:${n>6?44:60}px;flex-wrap:wrap;max-width:1100px">${n?e.repeat(n):'🧺'} <span style="display:flex">${n?hand(n,84):''}</span> ${n?dots(n,84):''} <b style="color:#3b7dd8;font-size:80px">${n}</b></div><div class="mut" style="font-size:26px;margin-top:6px">${NW[n]}</div>`));
 w.append(r);w.append(el('div','',nline(Math.max(n,5),[...Array(n)].map(()=>1))));const b=el('button','btn alt',`✍️ Тақтаға ${n} цифрын жазып көр`);b.onclick=()=>T.pen();w.append(b)};

/* заттарды ыдыстарға бөлу: барлық тәсілдерді тап */
K.split=function(b,T,{n,fixed=0,e='✏️',cols=['#81d4fa','#f48fb1','#bdbdbd'],hint}){col(b,12,'center');const m=n-fixed;
 const cups=el('div','');cups.style.cssText='display:flex;gap:44px;align-items:flex-end';const C=cols.slice(fixed?0:1).map(c=>{const x=el('div','');x.style.cssText=`width:${fixed?240:330}px;height:200px;background:${c};border-radius:12px 12px 40px 40px;display:flex;flex-wrap:wrap;align-content:flex-start;justify-content:center;gap:2px;padding:10px;font-size:48px;box-shadow:inset 0 -14px 0 #0002`;cups.append(x);return x});
 if(fixed)C[0].innerHTML=`<span>${e.repeat(fixed)}</span>`;const A=fixed?1:0;
 const eq=el('div','qline','');eq.style.fontSize='52px';const btn=el('button','btn','✔ Жазып қой');const found=el('div','');found.style.cssText='display:flex;gap:12px;flex-wrap:wrap;justify-content:center;min-height:64px';
 b.append(el('div','mut',hint||'Затты бассаң, ол көрші ыдысқа ауысады'),cups,eq,btn,found);
 const P=[...Array(m)].map((_,i)=>{const p=el('button','',e);p.style.fontSize='48px';p.dataset.s=i<Math.ceil(m/2)?A:A+1;p.onclick=()=>{p.dataset.s=+p.dataset.s===A?A+1:A;beep('tap');draw()};return p});
 const got=new Set();const cnt=()=>P.filter(p=>+p.dataset.s===A).length;
 const lab=a=>(fixed?fixed+' + ':'')+a+' + '+(m-a);
 const draw=()=>{P.forEach(p=>C[+p.dataset.s].append(p));eq.textContent=lab(cnt())+' = '+n};draw();
 const add=a=>{if(got.has(a))return false;got.add(a);found.append(el('div','goal',lab(a)));return true};
 btn.onclick=()=>{if(add(cnt())){T.ok(btn);if(got.size===m+1)T.done(`Барлық ${m+1} тәсіл табылды! ✓`)}else{T.bad(btn);toast('Бұл тәсіл бұрын жазылған 🙂','#c28a00')}};
 T.reveal=()=>{for(let a=0;a<=m;a++)add(a);T.done()}};

/* бірнеше бағандағы есептер (ортақ санауыш) */
K.fillGroups=function(b,T,{groups,vals=[0,1,2,3,4,5,6,7,8,9,10],signs=['>','<','='],fs=46,gap=60}){b.style.justifyContent='center';b.style.alignItems='center';b.style.gap=gap+'px';
 groups.forEach(g=>{const c=el('div','');c.style.cssText='display:flex;flex-direction:column;align-items:center;gap:10px;background:#fbfcff;border:3px solid var(--line);border-radius:20px;padding:16px 20px';if(g.pic)c.insertAdjacentHTML('beforeend',g.pic);
  const tmp=el('div','');K.fill(tmp,T,{fs,vals,signs,rows:g.rows,ans:g.ans});[...tmp.children].forEach(x=>c.append(x));b.append(c)});
 const slots=b.querySelectorAll('.slot');let left=slots.length;
 slots.forEach(s=>{const isS=['>','<','=','+','-'].includes(s.dataset.w);s.onclick=()=>{if(s.dataset.ok)return;T.picker(s,isS?signs:vals,isS?SG:null,v=>{if(String(v)===s.dataset.w){s.innerHTML=isS?SG(v):v;s.classList.add('f');s.dataset.ok=1;T.ok(s);if(--left===0)T.done()}else T.bad(s)})}});
 T.reveal=()=>slots.forEach(s=>{if(!s.dataset.ok){s.innerHTML=SG(s.dataset.w);s.style.color='#e0a000'}})};

/* тізбек: сан → (+1) → ? → ... */
K.chain=function(b,T,{chains,vals=[0,1,2,3,4,5,6,7,8,9,10]}){col(b,40,'center');let left=0;const all=[];
 chains.forEach(([start,ops])=>{const r=el('div','');r.style.cssText='display:flex;align-items:center;gap:4px';let v=start;
  const circ=x=>{const c=el('div','');c.style.cssText='width:96px;height:96px;border-radius:50%;border:5px solid #43a047;display:grid;place-items:center;font-size:46px;font-weight:900;background:#fff';if(x!=null)c.textContent=x;return c};
  r.append(circ(start));ops.forEach((o,i)=>{v+=o;r.append(el('div','',`<div style="text-align:center;font-size:28px;font-weight:900;color:${o>=0?'#e53935':'#1e63d6'}">${o>=0?'+':'−'}${Math.abs(o)}</div><div style="font-size:34px;color:#888;margin-top:-10px">⟶</div>`));
   const c=circ();if(i===ops.length-1)c.style.borderColor='#e53935';const s=el('button','slot','');s.style.cssText+=';width:70px;height:70px;font-size:40px;border:none';s.dataset.w=v;c.append(s);left++;all.push(s);
   s.onclick=()=>{if(s.dataset.ok)return;T.picker(s,vals,null,x=>{if(String(x)===s.dataset.w){s.textContent=x;s.classList.add('f');s.dataset.ok=1;T.ok(s);if(--left===0)T.done()}else T.bad(s)})};r.append(c)});b.append(r)});
 T.reveal=()=>all.forEach(s=>{if(!s.dataset.ok){s.textContent=s.dataset.w;s.style.color='#e0a000'}})};
