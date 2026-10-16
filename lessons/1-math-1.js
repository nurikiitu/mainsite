/* 1-сынып · Математика · 1-сабақ · Заттарды санау (оқулық 6–7-бет) */
(function(){
const NUMOPT=[1,2,3,4,5,6,7,8,9,10];
function near(a,lo=1,hi=10){const s=new Set([a]);while(s.size<4){const v=a+rnd(-3,3);if(v>=lo&&v<=hi)s.add(v)}return shuffle([...s])}

LESSON({
goal:'10-ға дейін санауды үйренесің.',
introExtra(w,T){const r=el('div','ncards');for(let i=1;i<=10;i++)r.append(ncard(i));w.append(r);
  const b=el('button','btn alt','▶ Бірге санайық: 1 → 10');b.onclick=()=>{[...r.children].forEach((c,i)=>T.later(()=>{c.classList.remove('ok');void c.offsetWidth;c.classList.add('ok');beep('tap')},i*550))};w.append(b)},
book:[
/* 1 */
{num:1,title:'Суреттегі заттарды сана. «Неше» сөзін пайдаланып, сурет бойынша сұрақтар құрастыр.',build(b,T){
 const flags=['#e53935','#fb8c00','#fdd835','#43a047','#1e88e5','#8e24aa','#e53935','#fb8c00','#43a047','#1e88e5'];
 const items=[
  ...flags.map((c,i)=>({e:`<div style="width:46px;height:52px;background:${c};clip-path:polygon(0 0,100% 0,50% 100%)"></div>`,x:8+i*9.4,y:9+Math.abs(i-4.5)*0.9,t:'flag'})),
  {e:'🌳',x:5,y:40,s:120,t:'tree'},{e:'🌳',x:95,y:38,s:120,t:'tree'},
  {e:'🎈',x:15,y:26,s:58},{e:'🎈',x:22,y:20,s:58},{e:'🎈',x:79,y:23,s:58},{e:'🎈',x:86,y:18,s:58},{e:'🎈',x:84,y:32,s:58},
  {e:'🎂',x:50,y:47,s:110},
  {e:kid(1,'#ec407a','#5d3a1a','#7e57c2',1),x:13,y:64},{e:kid(0,'#42a5f5','#3e2723',0,0),x:22,y:66},{e:kid(1,'#ffb300','#212121','#26a69a',0),x:30,y:64},
  {e:kid(0,'#66bb6a','#6d4c41','#ef5350',0),x:70,y:64},{e:kid(1,'#ab47bc','#4e342e',0,1),x:78,y:63},{e:kid(0,'#ff7043','#3e2723','#42a5f5',1),x:86,y:61},
  {e:'🎁',x:9,y:90,s:52},{e:'🎁',x:17,y:91,s:52},{e:'🎁',x:25,y:90,s:46},
  {e:'🧺',x:90,y:91,s:72},{e:'🍎',x:86,y:83,s:30},{e:'🍎',x:90,y:81,s:30},{e:'🍏',x:94,y:83,s:30},{e:'🍎',x:90,y:86,s:26}];
 const s=T.scene(b,{w:900,h:540,bg:'linear-gradient(#bfe6ff 0 48%,#8fd16a 48%)',items});
 s.insertAdjacentHTML('afterbegin',`<svg style="position:absolute;left:29%;top:52%;width:42%;height:34%;z-index:0" viewBox="0 0 380 180" preserveAspectRatio="none">
  <rect x="40" y="40" width="14" height="130" rx="5" fill="#8d5a2b"/><rect x="326" y="40" width="14" height="130" rx="5" fill="#8d5a2b"/><rect x="95" y="40" width="10" height="110" rx="4" fill="#6d4420"/><rect x="275" y="40" width="10" height="110" rx="4" fill="#6d4420"/>
  <path d="M20 10 H360 L372 48 H8 Z" fill="#fff"/><path d="M8 48 H372 L366 74 Q190 88 14 74Z" fill="#f8bbd0"/>${[...Array(9)].map((_,i)=>`<circle cx="${30+i*40}" cy="62" r="6" fill="#fff"/>`).join('')}
  <path d="M20 10 H360 L372 48 H8 Z" fill="none" stroke="#f48fb1" stroke-width="3"/></svg>`);
 const side=el('div','side');b.append(side);
 side.append(el('div','mut','💡 Заттарды басып санауға болады'));
 const rs=el('button','btn alt','↺ Белгілерді өшіру');rs.style.height='48px';rs.style.fontSize='18px';rs.onclick=()=>s.resetCount();side.append(rs);
 T.series(side,[
  {q:'<div class="qline">Неше бала бар?</div>',o:near(6),a:6},
  {q:'<div class="qline">Неше шар бар?</div>',o:near(5),a:5},
  {q:'<div class="qline">Неше сыйлық бар?</div>',o:near(3),a:3},
  {q:'<div class="qline">Себетте неше алма бар?</div>',o:near(4),a:4},
  {q:'<div class="qline">Неше жалауша бар?</div>',o:near(10),a:10},
  {q:'<div class="qline">Неше ағаш бар?</div>',o:near(2),a:2},
  {q:'<div class="qline">Неше торт бар?</div>',o:near(1),a:1}],
  {onEach:()=>s.resetCount(),end:()=>{T.done();side.append(el('div','goal','<span>ЕНДІ ӨЗІҢ</span>«Неше…?» деп өз сұрағыңды құрастыр!'))}})}},
/* 2 */
{num:2,title:'Нүктелер мен саусақтар қандай сандарды көрсетіп тұр? Осы сандардың жазылуын карточкалардан көрсет. Сандарды тура және кері ретпен ата.',build(b,T){
 b.style.flexDirection='column';b.style.alignItems='center';
 const grid=el('div','');grid.style.cssText='display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:14px;width:100%';b.append(grid);
 let sel=null,left=10;const cells=[];
 for(let n=1;n<=10;n++){const c=el('button','',`<div style="display:flex;align-items:center;gap:14px">${dots(n,80)}<div class="slot" style="width:66px;height:66px;font-size:38px"></div></div><div style="display:flex;justify-content:center;height:74px">${hand(n,74)}</div>`);
  c.style.cssText='min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;background:#fff8ef;border:3px solid #f1d7b5;border-radius:18px;padding:10px 6px';c.dataset.n=n;
  c.onclick=()=>{if(c.dataset.ok)return;cells.forEach(x=>x.style.outline='');sel=c;c.style.outline='5px solid #ffc531';beep('tap')};grid.append(c);cells.push(c)}
 const info=el('div','mut','Алдымен карточканы бас, сосын санды таңда 👇');info.style.fontSize='22px';b.append(info);
 const fill=(c)=>{const sl=c.querySelector('.slot');sl.textContent=c.dataset.n;sl.classList.add('f');c.dataset.ok=1;c.style.outline=''};
 T.cards(b,{onPick:(v,btn)=>{if(!sel){T.bad(btn);info.textContent='Алдымен жоғарыдан карточканы таңда ☝️';return}
  if(+sel.dataset.n===v){T.ok(btn);fill(sel);sel=null;if(--left===0)fin()}else T.bad(btn)}});
 const fin=()=>{T.done();info.innerHTML='';const r=el('div','');r.style.cssText='display:flex;gap:14px';
  const a=el('button','btn','▶ Тура ретпен: 1 → 10'),z=el('button','btn alt','◀ Кері ретпен: 10 → 1');
  const run=rev=>{const o=rev?[...cells].reverse():cells;o.forEach((c,i)=>T.later(()=>{c.classList.remove('ok');void c.offsetWidth;c.classList.add('ok');beep('tap')},i*600))};
  a.onclick=()=>run(0);z.onclick=()=>run(1);r.append(a,z);info.append(r)};
 T.reveal=()=>{cells.forEach(c=>{if(!c.dataset.ok){fill(c);left--}});if(left<=0)fin()}}},
/* 3 */
{rem:{title:'Цифр мен сан',build(b,T){b.style.flexDirection='column';b.style.alignItems='center';b.style.justifyContent='center';b.style.gap='26px';
  b.append(el('div','',`<div style="font-size:40px;font-weight:900;text-align:center;line-height:1.5"><span style="color:#d9792b">Цифр</span> – санды жазуға арналған таңба.<br><span style="color:#3b7dd8">Сан</span> – санаудың немесе өлшеудің нәтижесі.</div>`));
  const r=el('div','');r.style.cssText='display:flex;gap:60px;align-items:center';
  const a=el('div','',`<div class="mut" style="font-size:24px;text-align:center;margin-bottom:10px">Цифрлар</div>`);const ac=el('div','ncards');for(let i=0;i<=9;i++)ac.append(el('div','nc sm',i));a.append(ac);ac.style.maxWidth='420px';
  const z=el('div','',`<div class="mut" style="font-size:24px;text-align:center;margin-bottom:10px">Сан: санадық та білдік</div><div style="font-size:60px">🍎🍎🍎🍎🍎 = <b style="color:#3b7dd8">5</b></div>`);
  r.append(a,z);b.append(r)}},
 num:3,label:'ЖҰПТЫҚ ЖҰМЫС',k:'pair',title:'Бір затты жасыр. Ол реті бойынша нешінші тұрғанын досыңа айт.',build(b,T){
 b.style.flexDirection='column';b.style.alignItems='center';b.style.gap='14px';
 const SH=[['а)',['🧸','🤖','🚗','🐔']],['ә)',['⚽','✈️','🐼','🐶']]];
 const shelf=el('div','');shelf.style.cssText='display:flex;align-items:flex-end;gap:40px;padding:0 40px 10px;border-bottom:16px solid #c58b4e;border-radius:6px;min-width:820px;justify-content:center;height:190px;position:relative';
 const lab=el('div','big');lab.style.cssText='position:absolute;left:-30px;top:50%;transform:translateY(-50%)';
 const arrow=el('div','mut','Сол жақтан санаймыз → ');arrow.style.fontSize='22px';
 const q=el('div','qline');const ob=el('div','ncards');const st=el('div','prog');
 b.append(st,arrow,shelf,q,ob);
 const rounds=[0,0,1,1].map(sh=>({sh,h:0}));rounds.forEach(r=>{r.h=rnd(0,3)});if(rounds[0].h===rounds[1].h)rounds[1].h=(rounds[0].h+2)%4;if(rounds[2].h===rounds[3].h)rounds[3].h=(rounds[2].h+1)%4;
 rounds.forEach(()=>st.append(el('i')));let k=0;
 const show=()=>{[...st.children].forEach((x,j)=>x.className=j<k?'d':j===k?'c':'');const R=rounds[k],[L,toys]=SH[R.sh];shelf.innerHTML='';lab.textContent=L;shelf.append(lab);
  toys.forEach((t,i)=>{const c=el('div','',i===R.h?'<div style="width:130px;height:130px;border-radius:18px;background:repeating-linear-gradient(45deg,#c79a63 0 16px,#b78650 16px 32px);display:grid;place-items:center;font-size:70px;color:#fff;font-weight:900">?</div>':t);
   c.style.cssText='font-size:120px;line-height:1;text-align:center';c.dataset.t=t;shelf.append(c)});
  q.textContent='Досың бір ойыншықты жасырды. Ол нешінші тұр?';ob.innerHTML='';
  [1,2,3,4].forEach(n=>{const o=el('button','opt',`${ORDS[n]} <small style="font-size:20px;color:#6b7590">(${ORD[n]})</small>`);o.dataset.v=n;
   o.onclick=()=>{if(o.dataset.l)return;if(n===R.h+1){T.ok(o);[...ob.children].forEach(x=>x.dataset.l=1);const c=shelf.children[R.h+1];c.innerHTML=c.dataset.t;c.classList.add('ok');
     q.innerHTML=`Иә! ${ORD[n]} орында – ${c.dataset.t} тұр.`;T.later(()=>{k++;k<rounds.length?show():([...st.children].forEach(x=>x.className='d'),T.done())},1600)}else T.bad(o)};ob.append(o)})};
 T.reveal=()=>{[...ob.children].forEach(o=>{if(+o.dataset.v===rounds[k]?.h+1)o.classList.add('hint')})};show()}},
/* 4 */
{num:4,label:'ӨЗІНДІК ЖҰМЫС',k:'self',title:'Заттарды сана. Олардың санын карточкалардан көрсет.',build(b,T){
 b.style.flexDirection='column';b.style.alignItems='center';b.style.justifyContent='space-around';b.style.position='relative';
 const BOX=[['🎲'],['🎲','⚽','🏀','🧸'],['🎲','⚽','🧸'],['🎲','⚽','🏀','🚀','🧸'],['🎲','🧸']];
 const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');svg.style.cssText='position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:2';b.append(svg);
 const top=el('div','');top.style.cssText='display:flex;gap:34px';const bot=el('div','');bot.style.cssText='display:flex;gap:70px';const tp=el('div','mut','Қорапты бас, сосын оның санын бас 👇');tp.style.fontSize='24px';b.append(top,tp,bot);
 let sel=null,left=5;const bx=[],cd=[];
 BOX.forEach(it=>{const c=el('button','',it.map(e=>`<span>${e}</span>`).join(''));c.style.cssText='width:220px;height:220px;background:#f6e7c8;border-radius:22px;border:3px solid #e6cf9f;display:flex;flex-wrap:wrap;gap:6px 10px;align-content:center;justify-content:center;font-size:'+(it.length>4?50:58)+'px;padding:10px';
  c.dataset.n=it.length;c.onclick=()=>{if(c.dataset.ok)return;bx.forEach(x=>x.style.outline='');sel=c;c.style.outline='5px solid #ffc531';beep('tap')};top.append(c);bx.push(c)});
 [2,5,1,4,3].forEach(n=>{const c=ncard(n);c.style.width='130px';c.style.height='140px';c.style.fontSize='80px';c.onclick=()=>{if(c.dataset.ok)return;if(!sel){T.bad(c);return}
  if(+sel.dataset.n===n){T.ok(c);link(sel,c);sel=null;if(--left===0)T.done()}else T.bad(c)};bot.append(c);cd.push(c)});
 function link(a,c){a.dataset.ok=c.dataset.ok=1;a.style.outline='';a.style.borderColor='#22b07d';const R=b.getBoundingClientRect(),A=a.getBoundingClientRect(),C=c.getBoundingClientRect();
  const l=document.createElementNS('http://www.w3.org/2000/svg','line');l.setAttribute('x1',(A.left+A.width/2-R.left)/SCALE);l.setAttribute('y1',(A.bottom-R.top)/SCALE);
  l.setAttribute('x2',(C.left+C.width/2-R.left)/SCALE);l.setAttribute('y2',(C.top-R.top)/SCALE);l.setAttribute('stroke','#22b07d');l.setAttribute('stroke-width','7');l.setAttribute('stroke-linecap','round');svg.append(l)}
 T.reveal=()=>{bx.forEach(a=>{if(a.dataset.ok)return;const c=cd.find(x=>+x.dataset.v===+a.dataset.n);link(a,c);left--});if(left<=0)T.done()}}}
],
extra:[
{title:'Тек сұралған түсті шарларды сана.',build(b,T){
 const C={қызыл:'#e53935',көк:'#1e88e5',сары:'#fdd835',жасыл:'#43a047'};
 const mk=()=>{const cnt={қызыл:rnd(2,7),көк:rnd(2,6),сары:rnd(1,5),жасыл:rnd(1,4)};const all=[];Object.entries(cnt).forEach(([k,n])=>{for(let i=0;i<n;i++)all.push(k)});return{cnt,all:shuffle(all)}};
 const D=mk();const sc=el('div','scene');sc.style.cssText='width:820px;height:540px;background:linear-gradient(#e3f4ff,#ffffff);border:3px solid #d6e9f7';b.append(sc);
 const cols=6,rows=Math.ceil(D.all.length/cols),dy=Math.min(150,470/rows);D.all.forEach((k,i)=>{const x=75+(i%cols)*134+rnd(-22,22),y=60+Math.floor(i/cols)*dy+rnd(-12,12)+(rows<4?40:0);
  const e=el('div','it',`<svg width="62" height="96" viewBox="0 0 62 96"><ellipse cx="31" cy="34" rx="27" ry="32" fill="${C[k]}"/><ellipse cx="22" cy="22" rx="7" ry="10" fill="#fff6"/><path d="M31 66 l-5 6 h10z" fill="${C[k]}"/><path d="M31 72 q8 10 0 22" stroke="#888" fill="none" stroke-width="2"/></svg>`);
  e.style.left=x+'px';e.style.top=y+'px';e.onclick=()=>{if(e.querySelector('.bdg')){e.querySelector('.bdg').remove();return}e.append(el('span','bdg','✓'));beep('tap')};sc.append(e)});
 const side=el('div','side');b.append(side);
 const qs=shuffle(Object.keys(C)).slice(0,3).map(k=>({q:`<div class="qline">Неше <span style="color:${C[k]}">${k}</span> шар бар?</div>`,o:near(D.cnt[k]),a:D.cnt[k]}));
 qs.push({q:'<div class="qline">Барлығы неше шар?</div><div class="mut">(10-нан көп болса – 10-ға дейін ғана санаймыз 🙂)</div>',o:null,a:null});
 const tot=D.all.length;if(tot<=10){qs[3].o=near(tot);qs[3].a=tot}else qs.pop();
 T.series(side,qs,{onEach:()=>sc.querySelectorAll('.bdg').forEach(x=>x.remove())})}},
{title:'Қай сандар жоқ? Бос орынды бас, сосын санды таңда.',build(b,T){
 b.style.flexDirection='column';b.style.alignItems='center';b.style.justifyContent='space-around';
 const st=el('div','prog');const q=el('div','qline');const row=el('div','');row.style.cssText='display:flex;gap:10px';b.append(st,q,row);
 const R=[{rev:0,m:3},{rev:1,m:3},{rev:0,m:4}];R.forEach(()=>st.append(el('i')));let k=0,sel=null,left=0;
 const show=()=>{[...st.children].forEach((x,j)=>x.className=j<k?'d':j===k?'c':'');const r=R[k];q.textContent=r.rev?'10-нан 1-ге дейін кері санаймыз':'1-ден 10-ға дейін санаймыз';
  row.innerHTML='';const miss=pick([...Array(10).keys()],r.m);left=r.m;sel=null;
  for(let i=0;i<10;i++){const n=r.rev?10-i:i+1;if(miss.includes(i)){const s=el('button','slot','?');s.style.width=s.style.height='100px';s.dataset.n=n;
    s.onclick=()=>{if(s.dataset.ok)return;row.querySelectorAll('.slot').forEach(x=>x.classList.remove('sel'));s.classList.add('sel');sel=s};row.append(s)}
   else{const c=ncard(n);c.style.width='100px';c.style.height='100px';c.style.pointerEvents='none';row.append(c)}}
  sel=row.querySelector('.slot');sel.classList.add('sel')};
 T.cards(b,{onPick:(v,btn)=>{if(!sel)return;if(+sel.dataset.n===v){T.ok(btn);sel.textContent=v;sel.classList.add('f');sel.classList.remove('sel');sel.dataset.ok=1;
   sel=row.querySelector('.slot:not([data-ok])');sel&&sel.classList.add('sel');if(--left===0){k++;T.later(()=>k<R.length?show():([...st.children].forEach(x=>x.className='d'),T.done()),900)}}else T.bad(btn)}});
 T.reveal=()=>{row.querySelectorAll('.slot:not([data-ok])').forEach(s=>{s.textContent=s.dataset.n;s.style.color='#e0a000'})};show()}},
{title:'Санның көршілерін тап: алдында және артында қандай сан тұр?',build(b,T){
 b.style.flexDirection='column';b.style.alignItems='center';b.style.justifyContent='space-around';
 const st=el('div','prog');const row=el('div','');row.style.cssText='display:flex;gap:26px;align-items:center';const tip=el('div','mut','');tip.style.fontSize='24px';b.append(st,row,tip);
 const ns=pick([2,3,4,5,6,7,8,9],4);ns.forEach(()=>st.append(el('i')));let k=0,sel=null,left=0;
 const show=()=>{[...st.children].forEach((x,j)=>x.className=j<k?'d':j===k?'c':'');const n=ns[k];row.innerHTML='';left=2;
  const mk=v=>{const s=el('button','slot','?');s.style.width=s.style.height='140px';s.style.fontSize='80px';s.dataset.n=v;s.onclick=()=>{if(s.dataset.ok)return;row.querySelectorAll('.slot').forEach(x=>x.classList.remove('sel'));s.classList.add('sel');sel=s};return s};
  const c=ncard(n);c.style.cssText+='width:160px;height:170px;font-size:110px;pointer-events:none';row.append(mk(n-1),c,mk(n+1));sel=row.children[0];sel.classList.add('sel');
  tip.textContent=`${n} санының алдында қандай сан? Артында қандай сан?`};
 T.cards(b,{onPick:(v,btn)=>{if(!sel)return;if(+sel.dataset.n===v){T.ok(btn);sel.textContent=v;sel.classList.add('f');sel.classList.remove('sel');sel.dataset.ok=1;sel=row.querySelector('.slot:not([data-ok])');sel&&sel.classList.add('sel');
  if(--left===0){k++;T.later(()=>k<ns.length?show():([...st.children].forEach(x=>x.className='d'),T.done()),900)}}else T.bad(btn)}});
 T.reveal=()=>{row.querySelectorAll('.slot:not([data-ok])').forEach(s=>{s.textContent=s.dataset.n;s.style.color='#e0a000'})};show()}}
],
duel:{title:'Кім жылдам санайды?',gen(){const E=['🍎','⭐','🐟','🌸','🚗','🐤','🍓','⚽','🦋','🧁'];const e=E[rnd(0,E.length-1)],n=rnd(1,10);
 return{q:`<div class="grp" style="width:430px;font-size:54px">${e.repeat(n)}</div>`,o:near(n),a:n}}},
games:[
{icon:'🎈',build(box,T){const alive=T.alive();let rev=false;
 function start(){box.innerHTML='';const W=el('div','');W.style.cssText='position:absolute;inset:0;background:linear-gradient(#bfe6ff,#eaf7ff 70%,#9fd77c 70%);border-radius:0';box.append(W);
  const hd=el('div','qline');hd.style.cssText+=';position:absolute;top:14px;left:0;right:0;z-index:3';W.append(hd);let nxt=rev?10:1,err=0,t0=Date.now();
  const upd=()=>hd.innerHTML=`🎈 Шарларды ${rev?'кері ретпен (10 → 1)':'ретімен (1 → 10)'} жар! &nbsp; Келесі: <span style="color:#5b4bdb">${nxt}</span>`;upd();
  const C=['#e53935','#fb8c00','#fdd835','#43a047','#1e88e5','#8e24aa','#ec407a','#00acc1','#7cb342','#ff7043'];
  const pos=shuffle([...Array(10).keys()]);
  for(let n=1;n<=10;n++){const p=pos[n-1],x=110+(p%5)*300+rnd(-40,40),y=150+Math.floor(p/5)*260+rnd(-20,20);
   const e=el('button','',`<svg width="120" height="170" viewBox="0 0 62 90"><ellipse cx="31" cy="34" rx="28" ry="32" fill="${C[n-1]}"/><ellipse cx="21" cy="21" rx="7" ry="10" fill="#fff6"/><path d="M31 66 l-5 6 h10z" fill="${C[n-1]}"/><path d="M31 72 q8 8 0 18" stroke="#777" fill="none" stroke-width="2"/><text x="31" y="45" text-anchor="middle" font-size="30" font-weight="900" fill="#fff" font-family="Nunito">${n}</text></svg>`);
   e.style.cssText=`position:absolute;left:${x}px;top:${y}px;animation:fl ${2+Math.random()*1.5}s ease-in-out infinite alternate;transition:transform .25s,opacity .25s`;
   e.onclick=()=>{if(e.dataset.p)return;if(n===nxt){e.dataset.p=1;beep('ok');e.style.transform='scale(1.6)';e.style.opacity='0';nxt+=rev?-1:1;upd();
     if((rev&&nxt<1)||(!rev&&nxt>10)){const s=Math.round((Date.now()-t0)/1000);T.end(box,{em:'🎉',title:'Барлық шар жарылды!',text:`Уақыт: ${s} сек · ${T.errTxt(err)}`,again:()=>{rev=!rev;start()}});}}
    else{err++;T.bad(e)}};W.append(e)}
  if(!document.getElementById('flk')){const s=el('style');s.id='flk';s.textContent='@keyframes fl{to{margin-top:-22px}}';document.head.append(s)}
  T.reveal=()=>{[...W.querySelectorAll('button')].forEach(x=>{if(!x.dataset.p&&x.textContent.trim()===String(nxt))x.classList.add('hint')})}}
 start()}},
{icon:'🚂',build(box,T){
 function start(){box.innerHTML='';const W=el('div','');W.style.cssText='position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:space-around;padding:20px';box.append(W);
  const st=el('div','prog');const hd=el('div','qline','🚂 Сан пойызы: вагондарға жетпейтін санды қой');const tr=el('div','');tr.style.cssText='display:flex;align-items:flex-end;gap:8px;transition:transform 1.2s ease-in;padding-bottom:22px';
  const rail=el('div','');rail.style.cssText='width:1300px;height:12px;background:repeating-linear-gradient(90deg,#8d6e63 0 30px,#6d4c41 30px 40px);border-radius:4px';
  const tw=el('div','');tw.style.cssText='display:flex;flex-direction:column;align-items:center;overflow:hidden;width:1400px';tw.append(tr,rail);
  const ob=el('div','ncards');W.append(st,hd,tw,ob);
  const R=[...Array(6)].map((_,i)=>{const rev=i>=3,len=6;const s=rev?rnd(len,10):rnd(1,10-len+1);const seq=[...Array(len)].map((_,j)=>rev?s-j:s+j);return{seq,miss:pick([1,2,3,4,5],i<2?1:2)}});
  R.forEach(()=>st.append(el('i')));let k=0,err=0,sel=null,left=0;
  const show=()=>{[...st.children].forEach((x,j)=>x.className=j<k?'d':j===k?'c':'');tr.style.transform='';tr.innerHTML='<span style="font-size:120px;line-height:1">🚂</span>';const r=R[k];left=r.miss.length;
   r.seq.forEach((n,j)=>{const w=el('div','');w.style.cssText='width:150px;height:120px;border-radius:14px 14px 6px 6px;background:'+(r.miss.includes(j)?'#dfe3ec':NCOL[n])+';display:grid;place-items:center;position:relative;box-shadow:inset 0 -10px 0 #0002';
    w.innerHTML='<span style="position:absolute;bottom:-18px;left:20px;font-size:30px">⚫</span><span style="position:absolute;bottom:-18px;right:20px;font-size:30px">⚫</span>';
    if(r.miss.includes(j)){const s=el('div','slot','?');s.dataset.n=n;s.style.background='#fff';w.append(s);s.onclick=()=>{tr.querySelectorAll('.slot').forEach(x=>x.classList.remove('sel'));s.classList.add('sel');sel=s}}
    else w.insertAdjacentHTML('beforeend',`<b style="font-size:64px">${n}</b>`);tr.append(w)});
   sel=tr.querySelector('.slot');sel.classList.add('sel')};
  ob.innerHTML='';for(let i=1;i<=10;i++){const c=ncard(i,'sm');c.onclick=()=>{if(!sel)return;if(+sel.dataset.n===i){T.ok(c);sel.textContent=i;sel.classList.add('f');sel.classList.remove('sel');sel.dataset.ok=1;
    sel=tr.querySelector('.slot:not([data-ok])');sel&&sel.classList.add('sel');if(--left===0){tr.style.transform='translateX(-1600px)';k++;T.later(()=>{if(k<R.length)show();else T.end(box,{em:'🚂',title:'Пойыз жетті!',text:T.errTxt(err),again:start})},1300)}}else{err++;T.bad(c)}};ob.append(c)}
  T.reveal=()=>{tr.querySelectorAll('.slot:not([data-ok])').forEach(s=>{s.textContent=s.dataset.n;s.style.color='#e0a000'})};show()}
 start()}}
]});
})();
