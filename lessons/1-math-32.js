/* 1-сынып · Математика · 32-сабақ · Шамаларды өлшеу (оқулық 68–69-бет) */
(function(){
const E=(e,s=70)=>`<span style="font-size:${s}px;line-height:1">${e}</span>`;
const tag=(e,n,s=64)=>`<div style="display:flex;flex-direction:column;align-items:center">${E(e,s)}<b style="font-size:26px">${n} кг</b></div>`;
const ball=(n,c='#5c7cdb')=>`<svg width="112" height="112" viewBox="0 0 84 84"><circle cx="40" cy="40" r="34" fill="${c}"/><path d="M14 30 Q40 48 66 26 M12 46 Q40 64 68 44 M24 14 Q34 40 22 68" stroke="#ffffff55" stroke-width="3" fill="none"/><path d="M60 66 Q76 80 82 70" stroke="${c}" stroke-width="3" fill="none"/><text x="40" y="51" text-anchor="middle" font-size="32" font-weight="900" fill="#fff" font-family="Nunito">${n}</text></svg>`;
const basket=n=>`<svg width="230" height="203" viewBox="0 0 170 150"><path d="M30 64 Q85 -20 140 64" fill="none" stroke="#b9783a" stroke-width="10"/><path d="M14 64 H156 L140 144 H30Z" fill="#e2a65a"/>${[0,1,2,3].map(i=>`<line x1="20" y1="${80+i*16}" x2="150" y2="${80+i*16}" stroke="#b97a2e" stroke-width="3" opacity=".6"/>`).join('')}<rect x="10" y="58" width="150" height="12" rx="6" fill="#c98a3c"/><circle cx="85" cy="112" r="22" fill="#fff"/><text x="85" y="122" text-anchor="middle" font-size="28" font-weight="900" fill="#333" font-family="Nunito">${n}</text></svg>`;
const aquaLvl=(f,W=380,H=240)=>`<div style="position:relative;width:${W}px;height:${H}px;border:5px solid #546e7a;border-top-width:3px;border-radius:6px;background:linear-gradient(to top,#4fc3f7 ${f*100}%,#e1f5fe ${f*100}%);display:flex;align-items:flex-end;justify-content:space-around;font-size:56px;padding-bottom:4px">🐠🌿🐟
 <span style="position:absolute;right:-78px;top:-12px;font-size:26px;font-weight:900;color:#1565c0">— 9 л</span><span style="position:absolute;right:-78px;top:${(1-f)*H-14}px;font-size:26px;font-weight:900;color:#1565c0">— 7 л</span></div>`;
const plast=(cm,c)=>`<div style="width:${cm*42}px;height:30px;border-radius:15px;background:${c};box-shadow:inset 0 -6px 0 #0002"></div>`;

LESSON({
goal:'Пысықтау: шамаларды (см, дм, кг, л) қосасың және азайтасың.',
introExtra(w){w.append(el('div','',`<div style="display:flex;gap:40px;font-size:30px;font-weight:900;text-align:center">${[['📏','см, дм','ұзындық'],['⚖️','кг','масса'],['🪣','л','сыйымдылық']].map(([e,u,n])=>`<div class="goal" style="padding:12px 24px"><div style="font-size:60px">${e}</div>${u}<div style="font-size:20px;color:#6b7590">${n}</div></div>`).join('')}</div>`))},
book:[
{num:1,label:'МАТЕМАТИКА КҮНДЕЛІКТІ ӨМІРДЕ',k:'life',title:'Сырым көрсетілген мөлшерге дейін тағы қанша литр су құю керек? Әлия ұзындығы 10 см ермексазды қандай бөліктерден алды?',build(b,T){
 const L=el('div','');L.style.cssText='display:flex;flex-direction:column;gap:26px;align-items:flex-start;flex:none';b.append(L);
 L.append(el('div','',`<div style="display:flex;align-items:flex-end;gap:10px">${kid(0,'#29b6f6','#3e2723',0,1,1.6)}<div style="font-size:34px;font-weight:900;margin-bottom:200px">? л 🫗</div>${aquaLvl(7/9)}</div>`));
 L.append(el('div','',`<div style="display:flex;align-items:center;gap:20px">${kid(1,'#ec407a','#212121',0,0,1.5)}<div style="display:flex;flex-direction:column;gap:14px"><div style="display:flex;gap:16px;align-items:center">${plast(6,'#9575cd')}<b style="font-size:26px">6 см</b></div><div style="display:flex;gap:16px;align-items:center">${plast(4,'#4db6ac')}<b style="font-size:26px">? см</b></div><div style="display:flex;gap:16px;align-items:center">${plast(10,'#ffb74d')}<b style="font-size:26px">10 см</b></div></div></div>`));
 const side=el('div','side');b.append(side);
 K.fill(side,T,{fs:52,rows:[[7,'л','+',null,'л','=',9,'л'],[6,'см','+',null,'см','=',10,'см']],ans:[[2],[4]]})}},
{num:2,label:'МАТЕМАТИКА КҮНДЕЛІКТІ ӨМІРДЕ',k:'life',title:'Заттарды массаларының кему ретіне қарай ата.',build(b,T){
 const I=[['🥔',8],['🍅',7],['🥒',6],['🍉',5],['🍠',4],['🍒',2],['🧺',1]];
 K.order(b,T,{title:'Ең ауырынан бастап ретімен бас (кему реті)',items:I.map(([e,n])=>({h:tag(e,n,66)}))})}},
{num:3,label:'ЖҰПТЫҚ ЖҰМЫС',k:'pair',title:'Бір себетті таңдап ал. Себеттегі сан шығу үшін, оған үш жіп орамын сал.',build(b,T){
 col(b,10);const C=['#5c7cdb','#7e57c2','#26a69a','#ef5350','#ffa726','#66bb6a','#ab47bc','#29b6f6','#ec407a'];
 const top=el('div','');top.style.cssText='display:flex;gap:14px;flex-wrap:wrap;justify-content:center';b.append(top);
 const msg=el('div','qline','1) Себетті бас  2) Үш жіп орамын бас');msg.style.fontSize='28px';b.append(msg);
 const row=el('div','');row.style.cssText='display:flex;gap:50px';b.append(row);let cur=null,pick=[],left=3;
 const balls=[1,2,3,4,5,6,7,8,9].map(n=>{const c=el('button','',ball(n,C[n-1]));c.dataset.n=n;c.style.borderRadius='50%';c.onclick=()=>{if(!cur){T.bad(c);msg.textContent='Алдымен себетті таңда 👇';return}
  if(pick.includes(c))return;pick.push(c);c.style.outline='5px solid #ffc531';beep('tap');cur.querySelector('.inb').insertAdjacentHTML('beforeend',`<span style="font-size:24px;font-weight:900;background:#fff;border-radius:8px;padding:0 6px">${n}</span>`);
  if(pick.length===3){const s=pick.reduce((a,x)=>a+ +x.dataset.n,0),w=+cur.dataset.n;const ps=pick;pick=[];
   if(s===w){T.ok(cur);cur.dataset.ok=1;cur.style.borderColor='#22b07d';cur.querySelector('.inb').insertAdjacentHTML('beforeend',`<b style="font-size:24px;color:#22b07d"> = ${w} ✓</b>`);ps.forEach(x=>x.style.outline='');cur=null;msg.textContent=--left?'Жарайсың! Келесі себетті таңда':'Барлық себет толды!';if(!left)T.done()}
   else{T.bad(cur);msg.textContent=`${ps.map(x=>x.dataset.n).join(' + ')} = ${s}, ал керегі ${w}. Қайтадан!`;ps.forEach(x=>x.style.outline='');T.later(()=>{if(cur)cur.querySelector('.inb').innerHTML=''},900)}}};top.append(c);return c});
 [8,9,10].forEach(n=>{const k=el('button','',`${basket(n)}<div class="inb" style="min-height:34px;display:flex;gap:4px;justify-content:center;align-items:center"></div>`);k.dataset.n=n;k.style.cssText='border:4px dashed #e0c49a;border-radius:24px;padding:6px 10px;background:#fffaf2';
  k.onclick=()=>{if(k.dataset.ok)return;row.querySelectorAll('button').forEach(x=>{if(!x.dataset.ok)x.style.borderColor='#e0c49a'});cur=k;pick.forEach(x=>x.style.outline='');pick=[];k.querySelector('.inb').innerHTML='';k.style.borderColor='#ffc531';beep('tap');msg.textContent=`${n} шығатын үш жіп орамын таңда`};row.append(k)});
 T.reveal=()=>toast('Мысалы: 8 = 1 + 2 + 5 · 9 = 2 + 3 + 4 · 10 = 1 + 2 + 7','#3b7dd8')}},
{num:4,label:'СЕН ЗЕРТТЕУШІСІҢ',k:'res',title:'Тез есепте.',build(b,T){K.chain(b,T,{chains:[[1,[1,1,2,-1,-1,2,-2]]]})}}
],
extra:[
{title:'Шамалармен есептер шығар.',build(b,T){col(b,10,'center');T.series(b,[
 {q:'<div style="font-size:90px">🪣</div><div class="qline">Шелекте 3 л су бар еді. Тағы 4 л құйды. Шелекте неше литр су болды?</div>',o:[5,6,7,8],a:7},
 {q:'<div style="font-size:90px">🎀</div><div class="qline">Таспаның ұзындығы 9 см. Одан 5 см қиып алды. Неше см қалды?</div>',o:[3,4,5,6],a:4},
 {q:'<div style="font-size:90px">🥔</div><div class="qline">Қапта 6 кг картоп бар. Тағы 2 кг салды. Барлығы неше кг?</div>',o:[7,8,9,4],a:8},
 {q:'<div style="font-size:90px">🧃</div><div class="qline">Құмырада 8 л шырын бар еді. 3 л ішті. Неше литр қалды?</div>',o:[4,5,6,11],a:5}])}},
{title:'Қай өлшем бірлігімен өлшейді? Затты дұрыс топқа сал.',build(b,T){
 const I=[['✏️ қарындаштың ұзындығы','см'],['🎀 таспаның ұзындығы','см'],['📏 кітаптың ені','см'],['🍉 қарбыздың массасы','кг'],['🥔 картоптың массасы','кг'],['🍎 алманың массасы','кг'],['🪣 шелектегі су','л'],['🫖 шәйнектегі су','л'],['🐠 аквариумдағы су','л']];
 K.bins(b,T,{title:'Затты бас, сосын өлшем бірлігін бас',items:I.map(([h,bin])=>({h:`<b style="font-size:22px;padding:0 8px">${h}</b>`,bin})),bins:[{id:'см',h:'📏 см',c:'#e3f2fd'},{id:'кг',h:'⚖️ кг',c:'#fff3e0'},{id:'л',h:'🪣 л',c:'#e0f7fa'}]})}},
{title:'Салыстыр: > < = белгісін қой.',build(b,T){K.fill(b,T,{fs:48,rows:[[3,'кг','+',4,'кг','s',8,'кг'],[10,'л','-',2,'л','s',8,'л'],[1,'дм','s',9,'см'],[5,'см','+',5,'см','s',1,'дм'],[6,'л','-',4,'л','s',3,'л']],ans:[['<'],['='],['>'],['='],['<']]})}}
],
duel:{title:'Шамаларды есепте',gen(){const U=['см','кг','л','дм'][rnd(0,3)];if(Math.random()<.5){const a=rnd(1,8),c=rnd(1,10-a);return{q:`<div class="qline" style="font-size:48px">${a} ${U} + ${c} ${U}</div>`,o:near(a+c,1,10).map(v=>v+' '+U),a:(a+c)+' '+U,oh:v=>`<b style="font-size:28px;padding:4px 8px">${v}</b>`}}
 const a=rnd(3,10),c=rnd(1,a-1);return{q:`<div class="qline" style="font-size:48px">${a} ${U} − ${c} ${U}</div>`,o:near(a-c,1,10).map(v=>v+' '+U),a:(a-c)+' '+U,oh:v=>`<b style="font-size:28px;padding:4px 8px">${v}</b>`}}},
games:[
 GM.quiz({icon:'📐',title:'📐 Немен өлшейміз: см, кг әлде л?',gen:()=>{const I=[['✏️','Қарындаштың ұзындығы','см'],['🍉','Қарбыздың массасы','кг'],['🪣','Шелектегі су','л'],['🐍','Жыланның ұзындығы','см'],['🥔','Картоптың массасы','кг'],['🫖','Шәйнектегі су','л'],['🧱','Кірпіштің массасы','кг'],['🛁','Ваннадағы су','л'],['🎀','Таспаның ұзындығы','см'],['🍼','Бөтелкедегі сүт','л']];const [e,t,u]=I[rnd(0,I.length-1)];
  return{q:`<div style="font-size:120px">${e}</div><div class="qline">${t}</div>`,o:['см','кг','л'],a:u,oh:v=>`<b style="font-size:40px;padding:6px 20px">${v}</b>`}}}),
 GM.memory({title:'🧩 Мысал мен жауабын жұпта',pairs:()=>shuffle([['7 л + 2 л','9 л'],['6 см + 4 см','1 дм'],['8 кг − 3 кг','5 кг'],['3 л + 3 л','6 л'],['9 см − 2 см','7 см'],['4 кг − 2 кг','2 кг']]).slice(0,5).map(([a,c])=>[`<b style="font-size:28px">${a}</b>`,`<b style="font-size:38px;color:#1e63d6">${c}</b>`])})]
});
})();
