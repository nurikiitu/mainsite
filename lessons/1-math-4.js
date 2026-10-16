/* 1-сынып · Математика · 4-сабақ · 2 саны және цифры. 2 санының құрамы (оқулық 12–13-бет) */
(function(){
const pen2=(cross)=>`<span style="font-size:80px">✏️</span><span style="font-size:80px;position:relative">✏️${cross?'<span style="position:absolute;left:0;top:0;font-size:80px;color:#e53935">╲</span>':''}</span>`;
LESSON({
goal:'2 саны және цифрымен танысасың.',
introExtra(w,T){const r=el('div','');r.style.cssText='display:flex;gap:40px;align-items:center';
 r.append(el('div','',`<svg width="150" height="190" viewBox="0 0 100 130" style="background:#fff;border:3px solid #c9def6;border-radius:18px"><line x1="0" y1="20" x2="100" y2="20" stroke="#c9def6" stroke-dasharray="4"/><line x1="0" y1="110" x2="100" y2="110" stroke="#c9def6" stroke-dasharray="4"/>
 <path d="M24 40 Q30 16 52 18 Q74 22 68 46 Q60 70 24 110 H78" fill="none" stroke="#3b7dd8" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="260" stroke-dashoffset="260"><animate attributeName="stroke-dashoffset" from="260" to="0" dur="1.8s" begin="0.3s;w2.end+1s" id="w2" fill="freeze"/></path></svg>`));
 r.append(el('div','',`<div style="display:flex;gap:26px;align-items:center;font-size:70px">🍎🍎 ${hand(2,90)} ${dots(2,90)} <b style="color:#3b7dd8">2</b></div><div class="mut" style="font-size:26px;margin-top:6px">екі алма · екі саусақ · екі нүкте · екі</div>`));
 w.append(r);const b=el('button','btn alt','✍️ Тақтаға 2 цифрын жазып көр');b.onclick=()=>T.pen();w.append(b)},
book:[
{num:1,title:'Суретке қара. Қай заттар екі-екіден екенін айт.',build(b,T){
 const items=[
  {e:'🪴',x:13,y:12,s:52,t:'fl'},{e:'🪴',x:21,y:12,s:52,t:'fl'},
  {e:'🍎',x:55,y:20,s:46,t:'ap'},{e:'🍎',x:63,y:20,s:46,t:'ap'},
  {e:'📗',x:12,y:44,s:44,t:'nb'},{e:'📗',x:19,y:45,s:44,t:'nb'},
  {e:kid(1,'#e53935','#212121',0,0,.8),x:30,y:76,t:'gi'},{e:kid(0,'#1e88e5','#3e2723',0,0,.8),x:41,y:76,t:'bo'},{e:kid(1,'#8e24aa','#4e342e',0,1,.8),x:62,y:76,t:'gi'},{e:kid(0,'#43a047','#212121',0,0,.8),x:73,y:76,t:'bo'},
  {e:kid(1,'#1e2a44','#3e2723',0,1,1.15),x:88,y:52,t:'te'},{e:'🕑',x:83,y:12,s:46,t:'cl'},{e:'📏',x:26,y:44,s:40,t:'ru'},{e:'🌍',x:6,y:44,s:40,t:'gl'}];
 const deco=`<div style="position:absolute;left:36%;top:6%;width:40%;height:34%;background:#2e6b4a;border:8px solid #8d5a2b;border-radius:6px"></div>
  <div style="position:absolute;left:3%;top:50%;width:28%;height:5%;background:#5aa9e6;border-radius:4px"></div>
  <div style="position:absolute;left:24%;top:82%;width:24%;height:6%;background:#d9a066;border-radius:6px"></div><div style="position:absolute;left:56%;top:82%;width:24%;height:6%;background:#d9a066;border-radius:6px"></div>`;
 K.findTypes(b,T,{bg:'linear-gradient(#fdf2d0 0 70%,#c9b28a 70%)',items,deco,good:['fl','ap','nb','gi','bo'],q:'Қай заттар екі-екіден? Соларды бас!',
  msgBad:t=>({te:'Мұғалім – біреу',cl:'Сағат – біреу',ru:'Сызғыш – біреу',gl:'Глобус – біреу'}[t]||'Бұл біреу ғана'),
  after:side=>T.series(side,[
   {q:`<div style="display:flex;align-items:center;gap:10px"><span style="font-size:80px">✏️</span><span style="font-size:60px;font-weight:900">+</span><span style="font-size:80px">✏️</span></div><div class="qline">Бір қарындаш ал. Тағы біреуін қос.<br>Неше болды?</div>`,o:[1,2,3],a:2},
   {q:`<div style="display:flex;align-items:center">${pen2(1)}</div><div class="qline">Екі қарындаштың біреуін алып қойдық.<br>Неше қалды?</div>`,o:[0,1,2],a:1},
   {q:`<div class="qline" style="font-size:60px">2 = 1 + <span class="slot" style="display:inline-grid;width:80px;height:80px;vertical-align:middle">?</span></div><div class="mut" style="font-size:24px">2 санының құрамы</div>`,o:[0,1,2],a:1}])})}},
{num:2,label:'ЖҰПТЫҚ ЖҰМЫС',k:'pair',title:'Суретте екі-екіден берілген заттар бар ма? Қалған суреттегі заттар екеуден болу үшін не істеу керек?',build(b,T){col(b,16,'center');
 const B=[['📕','📘',2,'кітап'],['✏️',null,1,'қарындаш'],['🎨','🎨',2,'бояу тақтасы'],['🖊️','🖊️',2,'қаламсап'],['📗',null,1,'дәптер']];
 const row=el('div','');row.style.cssText='display:flex;gap:22px;flex-wrap:wrap;justify-content:center';b.append(row);
 const msg=el('div','qline','1) Екеуден емес суреттерді бас – оларға тағы біреуін қосамыз ➕');msg.style.fontSize='28px';b.append(msg);let left=2;const cs=[];
 B.forEach(([a,c,n,nm])=>{const x=cellBtn(`<div style="font-size:84px;display:flex;gap:6px">${a}${c||''}</div><div style="font-size:20px;font-weight:800;color:#6b7590">${nm}</div>`,'width:250px;height:190px;border-color:#c9def6');x.dataset.n=n;
  x.onclick=()=>{if(x.dataset.ok)return;if(n===1){x.dataset.ok=1;T.ok(x);x.firstChild.insertAdjacentHTML('beforeend',`<span style="filter:drop-shadow(0 0 8px #22b07d)">${a}</span>`);x.style.borderColor='#22b07d';if(--left===0){msg.textContent='Енді бәрі екі-екіден! 2 = 1 + 1';T.done()}}else{T.bad(x);msg.textContent=`${nm} – екеу, оған қосудың керегі жоқ`}};row.append(x);cs.push(x)});
 T.reveal=()=>cs.forEach(x=>{if(x.dataset.n==='1'&&!x.dataset.ok)x.classList.add('hint')})}},
{num:3,label:'МАТЕМАТИКА КҮНДЕЛІКТІ ӨМІРДЕ',k:'life',title:'Суреттегі заттарды жұптастыр. Түсіндір.',build(b,T){
 K.match(b,T,{title:'Жоғарыдағы затты бас, сосын оның жұбын төменнен бас',cw:230,ch:170,
  L:[{h:em('🔑',100),k:'a'},{h:em('🌳',100),k:'b'},{h:em('🌧️',100),k:'c'},{h:em('🖌️',100),k:'d'}],
  R:[{h:em('🔒',100),k:'a'},{h:em('🍃',100),k:'b'},{h:em('☂️',100),k:'c'},{h:em('🎨',100),k:'d'}]})}}
],
extra:[
{title:'Екі-екіден тұрған топтардың бәрін тап.',build(b,T){const tiles=[];const E=shuffle(EM);for(let i=0;i<6;i++)tiles.push({h:`<div style="font-size:60px">${E[i].repeat(2)}</div>`,ok:1});
 [1,3,1,3,4,1].forEach((n,i)=>tiles.push({h:`<div style="font-size:${n>2?44:60}px;line-height:1.1">${E[6+i].repeat(n)}</div>`,ok:0}));K.pickAll(b,T,{tiles,cols:6,size:190,title:'Тек ЕКІ заты бар карточкаларды бас'})}},
{title:'2 санының құрамы: бос ұяшыққа санды қой.',build(b,T){K.fill(b,T,{fs:70,vals:[0,1,2],
 rows:[[2,'=',1,'+',null],[2,'=',null,'+',0],[2,'=',0,'+',null],[null,'=',1,'+',1]],ans:[[1],[2],[2],[2]],
 pics:[em('🍎🍎',60),em('🐤🐤',60),em('⭐⭐',60),em('🌸🌸',60)].map(x=>`<div style="width:160px">${x}</div>`)})}},
{title:'Есепті шеш: суретке қарап, санды тап.',build(b,T){col(b,14,'center');T.series(b,[
 {q:`<div style="font-size:90px">🐦 ➕ 🐦</div><div class="qline">Ағашта бір торғай отыр еді. Тағы біреуі ұшып келді. Неше торғай болды?</div>`,o:[1,2,3],a:2},
 {q:`<div style="font-size:90px">🍬🍬 ➖ 🍬</div><div class="qline">Асанда 2 кәмпит бар еді. Біреуін жеді. Неше кәмпит қалды?</div>`,o:[0,1,2],a:1},
 {q:`<div style="font-size:90px">🧤🧤</div><div class="qline">Бір жұп қолғапта неше қолғап бар?</div>`,o:[1,2,3],a:2},
 {q:`<div style="font-size:90px">🐈🐈</div><div class="qline">Екі мысықтың барлығы неше құлағы бар? (әр мысықта 2 құлақ)</div>`,o:[2,3,4],a:4},
 {q:`<div style="font-size:90px">🚲</div><div class="qline">Велосипедтің неше дөңгелегі бар?</div>`,o:[1,2,3],a:2}])}}
],
duel:{title:'1 ме, 2 ме? Жылдам сана!',gen(){const n=rnd(1,2),k=rnd(0,2),e=EM[rnd(0,19)];const q=k===0?dots(n,170):k===1?`<div style="display:flex">${hand(n,150)}</div>`:`<div style="font-size:90px">${e.repeat(n)}</div>`;return{q,o:[0,1,2,3],a:n}}},
games:[
 GM.memory({title:'🧩 Жұбын тап: заттар жұбымен',pairs:()=>[['🔑','🔒'],['🌧️','☂️'],['🧦','🧦'],['🖌️','🎨'],['👟','👟']].map(p=>[em(p[0],80),em(p[1],80)])}),
 GM.catcher({icon:'🎯',title:'🎯 Тек «2»-ні аула! Басқасын баспа.',good:()=>[big(2,'#3b7dd8',110),dots(2,140),hand(2,140),'<span style="font-size:60px;font-weight:900">екі</span>',em('🍎🍎',80)][rnd(0,4)],
  bad:()=>[big(1,'#8a8fa3',110),big(3,'#8a8fa3',110),big(5,'#8a8fa3',110),dots(1,140),dots(3,140),hand(1,140),'<span style="font-size:60px;font-weight:900">бір</span>',em('🍎🍎🍎',70)][rnd(0,7)]})
]});
})();
