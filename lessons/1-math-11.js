/* 1-сынып · Математика · 11-сабақ · 0 саны және цифры. 0-ді қосу және азайту (оқулық 26–27-бет) */
(function(){
const KC=['#e53935','#1e88e5','#fdd835','#43a047','#8e24aa'];
const bench=n=>`<div style="position:relative;width:280px;height:150px"><div style="position:absolute;left:0;right:0;bottom:22px;height:20px;background:#a1887f;border-radius:6px"></div><div style="position:absolute;left:0;right:0;bottom:56px;height:14px;background:#8d6e63;border-radius:6px"></div>
 <div style="position:absolute;left:20px;bottom:0;width:10px;height:30px;background:#5d4037"></div><div style="position:absolute;right:20px;bottom:0;width:10px;height:30px;background:#5d4037"></div>
 <div style="position:absolute;left:0;right:0;bottom:30px;display:flex;justify-content:center">${[...Array(n)].map((_,i)=>kid(i%2,KC[i],'#3e2723',0,0,.6)).join('')}</div></div>`;
LESSON({
goal:'0 саны және цифрымен танысасың.',
introExtra(w,T){const r=el('div','');r.style.cssText='display:flex;gap:40px;align-items:center';r.append(el('div','',digitSVG(0)));
 r.append(el('div','',`<div style="display:flex;gap:26px;align-items:center;font-size:70px">🍎 ➖ 🍎 = <span style="display:inline-block;width:110px;height:80px;border:4px dashed #b9c1d3;border-radius:50%"></span> <b style="color:#3b7dd8;font-size:90px">0</b></div><div class="mut" style="font-size:26px;margin-top:6px">нөл – ештеңе жоқ, бос</div>`));
 w.append(r);w.append(el('div','',nline(5,[-1,-1,-1,-1,-1],5)));const b=el('button','btn alt','✍️ Тақтаға 0 цифрын жазып көр');b.onclick=()=>T.pen();w.append(b)},
book:[
{num:1,title:'Суреттен не байқадың? Түсіндір.',build(b,T){col(b,16,'center');
 const bus=el('div','');bus.style.cssText='position:relative;width:900px;height:260px;background:#fdd835;border-radius:40px 60px 20px 20px;border:6px solid #f9a825;box-shadow:inset 0 -30px 0 #f9a825';
 bus.insertAdjacentHTML('beforeend','<div style="position:absolute;left:30px;right:150px;top:24px;height:110px;background:#bbdefb;border-radius:14px;border:5px solid #455a64"></div><div style="position:absolute;right:40px;top:24px;width:90px;height:200px;background:#90a4ae;border:5px solid #455a64;border-radius:8px"></div><div style="position:absolute;left:110px;bottom:-40px;width:80px;height:80px;border-radius:50%;background:#37474f;border:12px solid #9e9e9e"></div><div style="position:absolute;right:170px;bottom:-40px;width:80px;height:80px;border-radius:50%;background:#37474f;border:12px solid #9e9e9e"></div>');
 const inside=el('div','');inside.style.cssText='position:absolute;left:40px;top:8px;display:flex;gap:30px';bus.append(inside);
 const out=el('div','');out.style.cssText='display:flex;gap:10px;min-height:130px;align-items:flex-end';
 const K5=[...Array(5)].map((_,i)=>{const k=el('div','',kid(i%2,KC[i],'#3e2723',0,0,.75));k.style.cssText='height:120px;overflow:hidden';inside.append(k);return k});
 const row=el('div','');row.style.cssText='display:flex;gap:18px';b.append(bus,out,row);let n=5,left=5;const ss=[];
 [5,4,3,2,1].forEach(a=>{const c=el('div','',`<span style="font-size:40px;font-weight:900">${a} − 1 =</span>`);c.style.cssText='display:flex;align-items:center;gap:6px;background:#fff;border:3px solid #c9def6;border-radius:18px;padding:6px 12px';
  const s=el('button','slot','');s.style.cssText+=';width:60px;height:60px;font-size:36px';s.dataset.w=a-1;c.append(s);ss.push(s);
  s.onclick=()=>{if(s.dataset.ok)return;if(+s.dataset.w!==n-1){T.bad(s);toast('Ретімен: алдымен '+n+' − 1','#c28a00');return}T.picker(s,[0,1,2,3,4,5],null,v=>{if(v===a-1){s.textContent=v;s.classList.add('f');s.dataset.ok=1;T.ok(s);const k=K5[n-1];k.style.height='auto';k.style.overflow='';out.append(k);n--;if(--left===0){T.done('Автобус бос қалды: 0 ✓');row.after(el('div','goal','<span>БАЙҚАДЫҢ БА?</span>1 − 1 = 0. Автобуста ешкім қалмады – нөл'))}}else T.bad(s)})};row.append(c)});
 T.reveal=()=>ss.forEach(s=>{if(!s.dataset.ok){s.textContent=s.dataset.w;s.style.color='#e0a000'}})}},
{num:2,label:'ЖҰПТЫҚ ЖҰМЫС',k:'pair',title:'Суреттен не байқадың? Есепте.',build(b,T){
 K.fill(b,T,{fs:58,vals:[0,1,2,3,4,5],rows:[[4,'+',0,'=',null],[4,'-',0,'=',null],[4,'-',4,'=',null]],ans:[[4],[4],[0]],pics:[bench(4),bench(4),`<div style="display:flex">${bench(0)}</div>`].map(x=>`<div style="margin-right:20px">${x}</div>`)});
 b.append(el('div','goal','<span>ЕСІҢДЕ САҚТА</span>Санға 0-ді қоссақ та, азайтсақ та, сан өзгермейді. Санды өзінен азайтсақ – 0'))}},
{num:3,label:'ӨЗІНДІК ЖҰМЫС',k:'self',title:'Ауызша есепте және жаз.',build(b,T){
 const P=[[3,'+',2],[4,'+',1],[5,'-',3],[3,'+',1],[0,'+',1],[4,'-',0],[2,'+',0],[5,'-',1],[5,'-',2],[3,'-',3],[5,'-',0],[4,'-',2],[4,'-',4],[0,'+',2],[4,'-',3],[4,'+',0]];
 K.notebook(b,T,{cols:4,fs:42,vals:[0,1,2,3,4,5],rows:P.map(([a,o,c])=>[a,o,c,'=',null]),ans:P.map(([a,o,c])=>[o==='+'?a+c:a-c])})}},
{num:4,label:'МАТЕМАТИКА КҮНДЕЛІКТІ ӨМІРДЕ',k:'life',title:'Есепті шығар. Бес қарындашты үш стақанға бөліп салды. Егер стақандардың біреуінде 1 қарындаш болса, онда қалған екі стақанда неше қарындаштан болуы мүмкін?',build(b,T){col(b,12,'center');
 const cups=el('div','');cups.style.cssText='display:flex;gap:50px;align-items:flex-end';const C=['#81d4fa','#f48fb1','#bdbdbd'].map((c,i)=>{const x=el('div','');x.style.cssText=`width:250px;height:210px;background:${c};border-radius:12px 12px 40px 40px;display:flex;align-items:flex-start;justify-content:center;gap:2px;padding-top:10px;font-size:52px;box-shadow:inset 0 -14px 0 #0002`;cups.append(x);return x});
 C[0].innerHTML='<span>✏️</span>';const eq=el('div','qline','');eq.style.fontSize='54px';const btn=el('button','btn','✔ Жазып қой');const found=el('div','');found.style.cssText='display:flex;gap:12px;flex-wrap:wrap;justify-content:center;min-height:64px';
 b.append(el('div','mut','Қарындашты бассаң, ол көрші стақанға ауысады (бірінші стақанда әрқашан 1 қарындаш)'),cups,eq,btn,found);
 const P=[...Array(4)].map((_,i)=>{const p=el('button','','✏️');p.style.fontSize='52px';p.dataset.s=i<2?1:2;p.onclick=()=>{p.dataset.s=p.dataset.s==='1'?2:1;beep('tap');draw()};return p});
 const got=new Set();const draw=()=>{P.forEach(p=>C[+p.dataset.s].append(p));const a=P.filter(p=>p.dataset.s==='1').length;eq.textContent=`1 + ${a} + ${4-a} = 5`};draw();
 const add=a=>{if(got.has(a))return false;got.add(a);found.append(el('div','goal',`1 + ${a} + ${4-a}`));return true};
 btn.onclick=()=>{const a=P.filter(p=>p.dataset.s==='1').length;if(add(a)){T.ok(btn);if(got.size===5)T.done('Барлық 5 тәсіл табылды! ✓')}else{T.bad(btn);toast('Бұл тәсіл бұрын жазылған 🙂','#c28a00')}};
 T.reveal=()=>{[0,1,2,3,4].forEach(add);T.done()}}}
],
extra:[
{title:'0-ді қосу мен азайту: ережені қолдан.',build(b,T){K.fill(b,T,{fs:58,vals:[0,1,2,3,4,5],rows:[[5,'+',0,'=',null],[0,'+',3,'=',null],[2,'-',null,'=',2],[null,'-',5,'=',0],[null,'+',0,'=',1],[0,'+',0,'=',null]],ans:[[5],[3],[0],[5],[1],[0]]})}},
{title:'Қай қорапта ештеңе жоқ? 0-ді тап.',build(b,T){const tiles=[{h:'<div style="width:120px;height:90px;border:4px dashed #b9c1d3;border-radius:14px"></div>',ok:1},{h:big(0,'#3b7dd8',100),ok:1},{h:'<span style="font-size:56px;font-weight:900">нөл</span>',ok:1},{h:'<span style="font-size:50px;font-weight:900">3 − 3</span>',ok:1},{h:'<span style="font-size:50px;font-weight:900">1 − 1</span>',ok:1},{h:dots(0,130),ok:1},
 {h:big(6,'#8a8fa3',100),ok:0},{h:dots(1,130),ok:0},{h:'<span style="font-size:56px;font-weight:900">бір</span>',ok:0},{h:'<span style="font-size:50px;font-weight:900">3 + 0</span>',ok:0},{h:em('🍎',80),ok:0},{h:'<span style="font-size:50px;font-weight:900">4 − 0</span>',ok:0}];K.pickAll(b,T,{tiles,cols:6,size:180,title:'0-ді білдіретін карточкаларды бас'})}},
{title:'Тізбекті жалғастыр.',build(b,T){K.seq(b,T,{rounds:[{q:'5-тен 0-ге дейін кері сана',seq:[5,4,3,2,1,0],miss:[2,5],from:0,to:5},{q:'0-ден 5-ке дейін',seq:[0,1,2,3,4,5],miss:[0,3],from:0,to:5},{q:'Әр сан 1-ге кемиді',seq:[4,3,2,1,0],miss:[1,4],from:0,to:5}]})}}
],
duel:{title:'0-мен есептер!',gen(){const k=rnd(0,3),a=rnd(0,5);const E=[[`${a} + 0`,a],[`${a} − 0`,a],[`${a} − ${a}`,0],[`0 + ${a}`,a]][k];return{q:`<div style="font-size:90px;font-weight:900">${E[0]} = ?</div>`,o:near(E[1],0,5),a:E[1]}}},
games:[GM.train({max:5,len:6}),GM.catcher({title:'🎯 Тек «0»-ді аула! (немесе мәні 0 өрнекті)',good:()=>[big(0,'#3b7dd8',110),'<span style="font-size:56px;font-weight:900">нөл</span>','<span style="font-size:48px;font-weight:900">2 − 2</span>','<span style="font-size:48px;font-weight:900">5 − 5</span>'][rnd(0,3)],bad:()=>[big(1,'#8a8fa3',110),big(4,'#8a8fa3',110),'<span style="font-size:48px;font-weight:900;color:#8a8fa3">2 − 0</span>','<span style="font-size:48px;font-weight:900;color:#8a8fa3">3 + 0</span>',dots(2,140)][rnd(0,4)]})]
});
})();
