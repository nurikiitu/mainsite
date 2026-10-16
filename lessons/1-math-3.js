/* 1-сынып · Математика · 3-сабақ · 1 саны және цифры (оқулық 10–11-бет) */
(function(){
const SG=v=>({'>':'&gt;','<':'&lt;','=':'='}[v]||v);
function near(a,lo=1,hi=10){const s=new Set([a]);while(s.size<4){const v=a+rnd(-3,3);if(v>=lo&&v<=hi)s.add(v)}return shuffle([...s])}

LESSON({
goal:'1 саны және цифрымен танысасың.',
introExtra(w,T){
 const r=el('div','');r.style.cssText='display:flex;gap:40px;align-items:center';
 r.append(el('div','',`<svg width="150" height="190" viewBox="0 0 100 130" style="background:#fff;border:3px solid #c9def6;border-radius:18px">
  <line x1="0" y1="20" x2="100" y2="20" stroke="#c9def6" stroke-dasharray="4"/><line x1="0" y1="110" x2="100" y2="110" stroke="#c9def6" stroke-dasharray="4"/>
  <path d="M30 45 L62 18 L62 112" fill="none" stroke="#3b7dd8" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="170" stroke-dashoffset="170"><animate attributeName="stroke-dashoffset" from="170" to="0" dur="1.6s" begin="0.3s;w.end+1s" id="w" fill="freeze"/></path></svg>`));
 r.append(el('div','',`<div style="display:flex;gap:26px;align-items:center;font-size:70px">🍎 ${hand(1,90)} ${dots(1,90)} <b style="color:#3b7dd8">1</b></div><div class="mut" style="font-size:26px;margin-top:6px">бір алма · бір саусақ · бір нүкте · бір</div>`));
 w.append(r);const b=el('button','btn alt','✍️ Тақтаға 1 цифрын жазып көр');b.onclick=()=>T.pen();w.append(b)},
book:[
/* 1 */
{num:1,title:'Суретке қара. Қай заттар бір-бірден екенін айт. Суреттегі әртүрлі заттардың санын анықта.',build(b,T){
 const items=[
  {e:'🕑',x:46,y:14,s:70,t:'clock'},{e:'🖼️',x:78,y:16,s:70,t:'pic'},{e:'🖥️',x:62,y:38,s:84,t:'pc'},{e:'💡',x:32,y:34,s:52,t:'lamp'},
  {e:'🪑',x:52,y:62,s:84,t:'chair'},{e:'🛏️',x:84,y:56,s:110,t:'bed'},{e:'🌍',x:9,y:46,s:50,t:'globe'},{e:'🤖',x:17,y:46,s:50,t:'robot'},{e:'🏆',x:16,y:28,s:46,t:'cup'},
  {e:'🚂',x:72,y:86,s:70,t:'train'},
  {e:'🪴',x:40,y:34,s:48,t:'plant'},{e:'🪴',x:47,y:34,s:48,t:'plant'},
  {e:'⚽',x:7,y:80,s:54,t:'ball'},{e:'⚽',x:12,y:90,s:54,t:'ball'},
  {e:'🚗',x:32,y:84,s:58,t:'car'},{e:'🚙',x:42,y:90,s:58,t:'car'},
  {e:'📕',x:9,y:12,s:40,t:'book'},{e:'📗',x:14,y:12,s:40,t:'book'},{e:'📘',x:19,y:12,s:40,t:'book'}];
 const ONE=['clock','pic','pc','lamp','chair','bed','globe','robot','cup','train'];
 const NM={plant:'гүл',ball:'доп',car:'машина',book:'кітап'};const CNT={plant:2,ball:2,car:2,book:3};
 const s=T.scene(b,{w:900,h:540,bg:'linear-gradient(#fdf2d0 0 66%,#a8d5c2 66%)',items,count:false});
 s.insertAdjacentHTML('afterbegin','<div style="position:absolute;left:2%;top:4%;width:22%;height:60%;background:#5c9ad6;border-radius:8px;opacity:.35"></div><div style="position:absolute;left:30%;top:42%;width:44%;height:4%;background:#c58b4e;border-radius:4px"></div><div style="position:absolute;left:30%;top:4%;width:30%;height:30%;background:#cde9ff;border:8px solid #fff;border-radius:6px"></div>');
 const side=el('div','side');b.append(side);const q=el('div','qline','Қай заттар бір-бірден? Соларды бас!');const pr=el('div','big','0 / 10');const msg=el('div','mut','');msg.style.fontSize='24px';side.append(q,pr,msg);let found=new Set();
 const phase2=()=>{side.innerHTML='';T.series(side,[
   {q:'<div class="qline">Неше ⚽ доп бар?</div>',o:near(2),a:2},{q:'<div class="qline">Неше 🪴 гүл бар?</div>',o:near(2),a:2},{q:'<div class="qline">Неше кітап бар?</div>',o:near(3),a:3},
   {q:'<div class="qline">Неше машина бар?</div>',o:near(2),a:2},{q:'<div class="qline">Неше 🕑 сағат бар?</div>',o:near(1),a:1}])};
 s.els.forEach(e=>e.onclick=()=>{const t=e.dataset.t;if(ONE.includes(t)){if(found.has(t))return;found.add(t);e.append(el('span','bdg','1'));T.ok(e);pr.textContent=found.size+' / 10';msg.textContent='';
   if(found.size===10){T.done('Барлығын таптың! ✓');T.later(phase2,1500)}}else{T.bad(e);msg.textContent=`Бұл бір емес: ${CNT[t]} ${NM[t]} бар 🙂`}});
 T.reveal=()=>{s.els.forEach(e=>{if(ONE.includes(e.dataset.t))e.classList.add('hint')})}}},
/* 2 */
{num:2,label:'ЖҰПТЫҚ ЖҰМЫС',k:'pair',title:'Қай заттар бір-бірден бейнеленген? Сырымға оқу құралдарын жинауға көмектес.',build(b,T){
 const area=el('div','');area.style.cssText='position:relative;width:1050px;height:540px;background:#fbfcff;border-radius:22px;border:3px solid var(--line)';b.append(area);
 const I=[[ICO.album,'альбом',1,14,20],['<span style="font-size:90px">📏</span>','сызғыш',1,47,14],[ICO.eraser,'өшіргіш',1,44,42],['<span style="font-size:80px">✏️</span>','қарындаш',1,40,74],[ICO.pcase,'пенал',1,64,72],['<span style="font-size:90px">📘</span>','кітап',1,86,76],
  ['<span style="font-size:46px;letter-spacing:-6px">🧱🧱🧱<br>🧱🧱🧱</span>','құрастырғыш',0,84,22],[ICO.cube('Ә')+ICO.cube('А')+ICO.cube('Б'),'текшелер',0,14,72]];
 const bag=el('div','',`<div style="font-size:150px">🎒</div><div class="big" id="bc">0 / 6</div><div class="mut" style="font-size:20px;text-align:center">Сырымның<br>сөмкесі</div>`);bag.style.cssText='display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1';b.append(bag);
 const msg=el('div','mut','');msg.style.cssText='font-size:22px;text-align:center;min-height:60px';bag.append(msg);let n=0;
 I.forEach(([h,nm,one,x,y])=>{const e=el('button','it',h);e.style.left=x+'%';e.style.top=y+'%';e.dataset.one=one;
  e.onclick=()=>{if(e.dataset.in)return;if(one){e.dataset.in=1;T.ok(e);e.style.transition='all .6s';e.style.left='108%';e.style.top='40%';e.style.opacity='0';e.style.transform='translate(-50%,-50%) scale(.3)';n++;bag.querySelector('#bc').textContent=n+' / 6';msg.textContent=`${nm} – біреу ✓`;if(n===6)T.done('Сөмке дайын! ✓')}
   else{T.bad(e);msg.textContent=`${nm} – бір емес, олар көп!`}};area.append(e)});
 T.reveal=()=>area.querySelectorAll('[data-one="1"]:not([data-in])').forEach(e=>e.classList.add('hint'))}},
/* 3 */
{num:3,label:'МАТЕМАТИКА КҮНДЕЛІКТІ ӨМІРДЕ',k:'life',title:'Әр затты сана және олардың санын салыстыр.',build(b,T){
 const K=[['brush','<span style="font-size:56px">🖌️</span>',1],['eraser',ICO.eraser,4],['pencil','<span style="font-size:52px">✏️</span>',3],['sharp',ICO.sharp,2],['pen','<span style="font-size:52px">🖊️</span>',3],['pcase',ICO.pcase,1],['sc','<span style="font-size:56px">✂️</span>',2]];
 const HT=Object.fromEntries(K.map(k=>[k[0],k[1]])),CN=Object.fromEntries(K.map(k=>[k[0],k[2]]));
 const area=el('div','');area.style.cssText='position:relative;width:640px;height:540px;background:#fffdf5;border-radius:22px;border:3px solid #f4dc9c;flex:none';b.append(area);
 const list=[];K.forEach(k=>{for(let i=0;i<k[2];i++)list.push(k[0])});const cells=shuffle([...Array(20).keys()]);
 shuffle(list).forEach((t,i)=>{const c=cells[i],e=el('div','it',HT[t]);e.style.left=(12+(c%4)*25+rnd(-5,5))+'%';e.style.top=(12+Math.floor(c/4)*19+rnd(-4,4))+'%';e.style.cursor='default';area.append(e)});
 const right=el('div','');right.style.cssText='flex:1;display:flex;flex-direction:column;gap:12px;min-width:0';b.append(right);
 right.append(el('div','mut','1) Әр заттың санын жаз (ұяшықты бас)'));
 const tbl=el('div','');tbl.style.cssText='display:grid;grid-template-columns:repeat(4,1fr);gap:8px';right.append(tbl);let cl=7;const cslots=[];
 K.forEach(k=>{const c=el('div','',`<div style="height:62px;display:grid;place-items:center">${k[1]}</div>`);c.style.cssText='background:#fff;border:3px solid var(--line);border-radius:16px;padding:6px;display:flex;flex-direction:column;align-items:center;gap:4px';
  const s=el('button','slot','');s.style.width=s.style.height='60px';s.style.fontSize='34px';s.onclick=()=>{if(s.dataset.ok)return;T.picker(s,[1,2,3,4,5,6],null,v=>{if(v===k[2]){s.textContent=v;s.classList.add('f');s.dataset.ok=1;T.ok(s);if(--cl===0)step2()}else T.bad(s)})};
  c.append(s);tbl.append(c);cslots.push([s,k[2]])});
 const p2=el('div','');p2.style.cssText='display:flex;flex-direction:column;gap:10px;opacity:.35;pointer-events:none';right.append(el('div','mut','2) Екі затты таңдап, салыстыр'),p2);let cp=3;const crow=[];
 ['>','<','='].forEach(sg=>{const r=el('div','');r.style.cssText='display:flex;align-items:center;gap:14px;justify-content:center';const a=el('button','slot',''),z=el('button','slot','');[a,z].forEach(x=>{x.style.width='110px';x.style.height='74px'});
  const sgn=el('div','',`<span style="font-size:56px;font-weight:900;color:#c28a00">${SG(sg)}</span>`);const res=el('div','mut','');res.style.cssText='font-size:26px;width:140px';
  const chk=()=>{if(!a.dataset.v||!z.dataset.v||r.dataset.ok)return;const x=CN[a.dataset.v],y=CN[z.dataset.v];const ok=sg==='>'?x>y:sg==='<'?x<y:x===y&&a.dataset.v!==z.dataset.v;
   if(ok){r.dataset.ok=1;res.innerHTML=`${x} ${SG(sg)} ${y} ✓`;res.style.color='#22b07d';[a,z].forEach(T.ok);if(--cp===0)T.done()}else{T.bad(r);res.innerHTML=`${x} ${SG(sg)} ${y}?`;res.style.color='#ef5350';a.dataset.v=z.dataset.v='';a.innerHTML=z.innerHTML='';a.classList.remove('f');z.classList.remove('f')}};
  [a,z].forEach(x=>x.onclick=()=>{if(r.dataset.ok)return;T.picker(x,K.map(k=>k[0]),v=>`<span style="display:inline-block;transform:scale(.8)">${HT[v]}</span>`,v=>{x.innerHTML=`<span style="transform:scale(.75);display:inline-block">${HT[v]}</span>`;x.dataset.v=v;x.classList.add('f');chk()})});
  r.append(a,sgn,z,res);p2.append(r);crow.push(r)});
 function step2(){p2.style.opacity='1';p2.style.pointerEvents='auto';beep('win')}
 T.reveal=()=>{cslots.forEach(([s,v])=>{if(!s.dataset.ok){s.textContent=v;s.style.color='#e0a000'}});toast('Мысалы: өшіргіш 4 > қайшы 2 · кисть 1 < қарындаш 3 · қаламсап 3 = қарындаш 3','#c28a00')}}}
],
extra:[
{title:'1 санын білдіретін карточкалардың бәрін тап.',build(b,T){
 b.style.flexDirection='column';b.style.alignItems='center';b.style.justifyContent='space-around';
 const pos=[['<span style="font-size:90px;font-weight:900;color:#3b7dd8">1</span>'],[dots(1,110)],[hand(1,110)],['<span style="font-size:52px;font-weight:900">бір</span>'],['<span style="font-size:80px">🍎</span>'],['<span style="font-size:80px">⭐</span>']].map(x=>[x[0],1]);
 const neg=[['<span style="font-size:90px;font-weight:900;color:#3b7dd8">7</span>'],[dots(2,110)],[hand(2,110)],['<span style="font-size:52px;font-weight:900">екі</span>'],['<span style="font-size:64px">🍎🍎</span>'],['<span style="font-size:90px;font-weight:900;color:#3b7dd8">4</span>']].map(x=>[x[0],0]);
 const g=el('div','');g.style.cssText='display:grid;grid-template-columns:repeat(6,1fr);gap:18px';b.append(g);const pr=el('div','big','0 / 6');b.append(pr);let n=0;
 shuffle([...pos,...neg]).forEach(([h,v])=>{const c=el('button','',h);c.style.cssText='width:190px;height:190px;border-radius:24px;background:#fff;border:4px solid var(--line);display:grid;place-items:center;box-shadow:0 6px 0 var(--line)';c.dataset.v=v;
  c.onclick=()=>{if(c.dataset.ok)return;if(v){c.dataset.ok=1;c.style.background='#e6f8ef';c.style.borderColor='#22b07d';T.ok(c);pr.textContent=++n+' / 6';if(n===6)T.done()}else T.bad(c)};g.append(c)});
 T.reveal=()=>g.querySelectorAll('[data-v="1"]:not([data-ok])').forEach(c=>c.classList.add('hint'))}},
{title:'Қай топта БІР зат артық (немесе кем)?',build(b,T){
 b.style.flexDirection='column';b.style.alignItems='center';b.style.justifyContent='space-around';
 const st=el('div','prog');const q=el('div','qline');const row=el('div','');row.style.cssText='display:flex;gap:50px';b.append(st,q,row);
 const E=['🐥','🍄','🐞','🌼','🍓'];const R=[0,1,2,3,4].map(i=>{const a=rnd(2,8);return{e:E[i],n:shuffle([a,a+1]),more:i%2===0}});R.forEach(()=>st.append(el('i')));let k=0;
 const show=()=>{[...st.children].forEach((x,j)=>x.className=j<k?'d':j===k?'c':'');const r=R[k];q.innerHTML=r.more?'Қай топта бір зат <span style="color:#22b07d">АРТЫҚ</span>?':'Қай топта бір зат <span style="color:#ef5350">КЕМ</span>?';row.innerHTML='';
  const want=r.more?Math.max(...r.n):Math.min(...r.n);r.n.forEach(n=>{const c=el('button','grp',shuffle([...Array(n)].map(()=>r.e)).join(''));c.style.cssText+=';width:560px;height:330px;font-size:64px';c.dataset.n=n;
   c.onclick=()=>{if(c.dataset.l)return;if(n===want){T.ok(c);[...row.children].forEach(x=>{x.dataset.l=1;x.insertAdjacentHTML('beforeend',`<div style="width:100%;text-align:center;font-size:44px;font-weight:900">${x.dataset.n}</div>`)});T.later(()=>{k++;k<R.length?show():([...st.children].forEach(x=>x.className='d'),T.done())},1600)}else T.bad(c)};row.append(c)})};
 T.reveal=()=>{const r=R[k];if(!r)return;const w=r.more?Math.max(...r.n):Math.min(...r.n);[...row.children].forEach(c=>{if(+c.dataset.n===w)c.classList.add('hint')})};show()}},
{title:'Жұмбақ сұрақтар: дұрыс санды тап.',build(b,T){b.style.flexDirection='column';b.style.alignItems='center';
 T.series(b,shuffle([
  {q:'<div style="font-size:110px">👃</div><div class="qline">Адамның неше мұрны бар?</div>',a:1},
  {q:'<div style="font-size:110px">👀</div><div class="qline">Адамның неше көзі бар?</div>',a:2},
  {q:'<div style="font-size:110px">🐈</div><div class="qline">Мысықтың неше аяғы бар?</div>',a:4},
  {q:'<div style="font-size:110px">☀️</div><div class="qline">Аспанда неше Күн бар?</div>',a:1},
  {q:'<div style="font-size:110px">🖐️</div><div class="qline">Бір қолда неше саусақ бар?</div>',a:5},
  {q:'<div style="font-size:110px">🔺</div><div class="qline">Үшбұрыштың неше бұрышы бар?</div>',a:3},
  {q:'<div style="font-size:110px">📅</div><div class="qline">Аптада неше жексенбі бар?</div>',a:1}]).map(x=>({...x,o:[1,2,3,4,5]})))}}
],
duel:{title:'БІР зат қай карточкада?',gen(){const E=['🍎','⭐','🐟','🌸','🚗','🐤','🍓','⚽','🦋','🧁'];const s=shuffle(E).slice(0,4);const ns=[1,...pick([2,3,4,5],3)];
 const o=s.map((e,i)=>`${e}|${ns[i]}`);return{q:'<div class="qline" style="font-size:44px">Тек <b style="color:#3b7dd8">1</b> зат бар карточканы бас!</div>',o,a:o[0],oh:v=>{const [e,n]=v.split('|');return `<div style="width:170px;min-height:110px;display:flex;flex-wrap:wrap;gap:2px;justify-content:center;align-content:center;font-size:40px">${e.repeat(+n)}</div>`}}}},
games:[
{icon:'🎯',build(box,T){
 function start(){box.innerHTML='';const W=el('div','');W.style.cssText='position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:space-around;padding:16px';box.append(W);
  const hd=el('div','qline','🎯 Тек «1»-ді аула! Басқасын баспа.');const inf=el('div','big','');const g=el('div','');g.style.cssText='display:grid;grid-template-columns:repeat(4,200px);grid-template-rows:repeat(2,200px);gap:24px';W.append(hd,inf,g);
  const cells=[...Array(8)].map(()=>{const c=el('button','');c.style.cssText='border-radius:28px;background:#eef1f8;border:4px solid #dfe3ec;display:grid;place-items:center';g.append(c);return c});
  const ONE=['<span style="font-size:110px;font-weight:900;color:#3b7dd8">1</span>',dots(1,140),hand(1,140),'<span style="font-size:60px;font-weight:900">бір</span>','<span style="font-size:100px">🍎</span>'];
  const OTH=[...'2345789'].map(d=>`<span style="font-size:110px;font-weight:900;color:#8a8fa3">${d}</span>`).concat([dots(2,140),dots(3,140),hand(2,140),'<span style="font-size:60px;font-weight:900">екі</span>','<span style="font-size:70px">🍎🍎</span>']);
  let sc=0,err=0,left=30;const alive=T.alive();const upd=()=>inf.textContent=`⏱ ${left} · ✅ ${sc} · ❌ ${err}`;upd();
  const pop=()=>{if(!alive()||!W.isConnected||left<=0)return;const free=cells.filter(c=>!c.dataset.on);if(free.length){const c=free[rnd(0,free.length-1)],one=Math.random()<.45;c.dataset.on=one?'1':'0';c.innerHTML=one?ONE[rnd(0,ONE.length-1)]:OTH[rnd(0,OTH.length-1)];c.style.background='#fff';
    const my=Math.random();c.dataset.k=my;setTimeout(()=>{if(c.dataset.k==my){c.innerHTML='';delete c.dataset.on;c.style.background='#eef1f8'}},1500)}setTimeout(pop,650)};
  cells.forEach(c=>c.onclick=()=>{if(!c.dataset.on||left<=0)return;if(c.dataset.on==='1'){sc++;T.ok(c)}else{err++;T.bad(c)}c.innerHTML='';delete c.dataset.on;c.dataset.k='';c.style.background='#eef1f8';upd()});
  const tick=()=>{if(!alive()||!W.isConnected)return;left--;upd();if(left<=0)return T.end(box,{em:'🎯',title:`${sc} бірді ауладың!`,text:T.errTxt(err),again:start});setTimeout(tick,1000)};setTimeout(tick,1000);pop()}
 start()}},
{icon:'🧩',build(box,T){
 function start(){box.innerHTML='';const W=el('div','');W.style.cssText='position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:space-around;padding:16px';box.append(W);
  const hd=el('div','qline','🧩 Жұбын тап: санды оның нүктелерімен жұпта!');const inf=el('div','big','');const g=el('div','');g.style.cssText='display:grid;grid-template-columns:repeat(5,200px);gap:20px';W.append(hd,inf,g);
  const ns=[1,...pick([2,3,4,5,6,7,8,9],4)];const cards=shuffle(ns.flatMap(n=>[{n,h:`<span style="font-size:110px;font-weight:900;color:#3b7dd8">${n}</span>`},{n,h:dots(n,150)}]));
  let open=[],pairs=0,err=0,busy=false;const upd=()=>inf.textContent=`Жұп: ${pairs} / 5 · Қате: ${err}`;upd();
  cards.forEach(cd=>{const c=el('button','');c.style.cssText='height:200px;border-radius:24px;background:linear-gradient(135deg,#7a6cf0,#a58bff);display:grid;place-items:center;font-size:80px;color:#fff;transition:transform .2s';c.innerHTML='❓';
   c.onclick=()=>{if(busy||c.dataset.o)return;c.dataset.o=1;c.style.background='#fff';c.style.border='4px solid #dfe3ec';c.innerHTML=cd.h;beep('tap');open.push([c,cd]);
    if(open.length===2){const [[a,x],[z,y]]=open;open=[];if(x.n===y.n&&a!==z){pairs++;T.ok(a);T.ok(z);upd();if(pairs===5)T.later(()=>T.end(box,{em:'🧩',title:'Барлық жұп табылды!',text:T.errTxt(err),again:start}),700)}
     else{err++;busy=true;upd();setTimeout(()=>{[a,z].forEach(q=>{delete q.dataset.o;q.style.background='linear-gradient(135deg,#7a6cf0,#a58bff)';q.style.border='';q.innerHTML='❓'});busy=false},1000)}}};g.append(c)})}
 start()}}
]});
})();
