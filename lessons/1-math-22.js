/* 1-сынып · Математика · 22-сабақ · 10 көлеміндегі сандарды қосу және азайту (оқулық 48–49-бет) */
(function(){
const leaf=(n,c)=>`<span style="position:relative;display:inline-block;width:100px;height:100px"><span style="position:absolute;inset:0;font-size:90px;line-height:1;filter:hue-rotate(${c}deg)">🍁</span><b style="position:absolute;inset:0;display:grid;place-items:center;font-size:36px;color:#fff;text-shadow:0 0 4px #000">${n}</b></span>`;
LESSON({
goal:'Қосу және азайтуды орындайсың. (Пысықтау)',
introExtra(w){w.append(el('div','',`<div style="display:flex;gap:40px">${nline(10,[3,2],0,620)}${nline(10,[-4,-1],9,620)}</div>`))},
book:[
{num:1,title:'Балаларға сурет бойынша сандардың қосындысы мен айырмасын құрастыруға көмектес.',build(b,T){
 K.fillGroups(b,T,{fs:50,gap:60,vals:[0,1,2,3,4,5,6,7,8,9,10],groups:[
  {pic:`<div style="font-size:50px;line-height:1.1">🍁🍁🍁<br><span style="filter:hue-rotate(40deg)">🍁🍁🍁🍁🍁</span></div>`,rows:[[3,'+',null,'=',null],[5,'+',null,'=',null],[8,'-',3,'=',null],[8,'-',null,'=',3]],ans:[[5,8],[3,8],[5],[5]]},
  {pic:`<div style="font-size:50px;line-height:1.1">🌺🌺🌺🌺<br>🌺🌺🌻🌻</div>`,rows:[[6,'+',null,'=',null],[2,'+',null,'=',null],[8,'-',6,'=',null],[8,'-',null,'=',6]],ans:[[2,8],[6,8],[2],[2]]}]})}},
{num:2,label:'СЕН ЗЕРТТЕУШІСІҢ',k:'res',title:'Есепте.',build(b,T){col(b,40,'center');
 const ch=(start,ops,ans,cs)=>{const r=el('div','');r.style.cssText='display:flex;align-items:center;gap:4px';r.insertAdjacentHTML('beforeend',leaf(start,cs[0]));
  ops.forEach(([o,n],i)=>r.insertAdjacentHTML('beforeend',`<b style="font-size:40px">${o}</b>${leaf(n,cs[(i+1)%cs.length])}`));r.insertAdjacentHTML('beforeend','<b style="font-size:40px">=</b>');
  const s=el('button','slot','');s.style.cssText+=';width:80px;height:80px;font-size:42px';s.dataset.w=ans;r.append(s);b.append(r);return s};
 const ss=[ch(1,[['+',3],['+',5],['−',6],['+',3],['+',4]],10,[80,0,40]),ch(10,[['−',8],['+',6],['−',4],['−',4],['+',9]],9,[80,0,40])];let left=2;
 ss.forEach(s=>s.onclick=()=>{if(s.dataset.ok)return;T.picker(s,[0,1,2,3,4,5,6,7,8,9,10],null,v=>{if(String(v)===s.dataset.w){s.textContent=v;s.classList.add('f');s.dataset.ok=1;T.ok(s);if(--left===0)T.done()}else T.bad(s)})});
 b.append(el('div','mut','💡 Сол жақтан бастап, ретімен есепте. Аралық жауапты тақтаға жазуға болады ✏️'));
 T.reveal=()=>ss.forEach(s=>{if(!s.dataset.ok){s.textContent=s.dataset.w;s.style.color='#e0a000'}})}},
{num:3,label:'ӨЗІНДІК ЖҰМЫС',k:'self',title:'Сандардың құрамын есіңе түсір.',build(b,T){
 const g=el('div','');g.style.cssText='display:grid;grid-template-columns:repeat(3,1fr);gap:20px 80px';b.style.justifyContent='center';b.style.alignItems='center';b.append(g);let left=6;const all=[];
 [8,9,10,7,6,5].forEach(n=>{const c=el('div','',`<div style="text-align:center;font-size:52px;font-weight:900;color:#d81b60">${n}</div><svg width="200" height="40" viewBox="0 0 200 40"><path d="M100 2 L40 38 M100 2 L160 38" stroke="#333" stroke-width="4"/></svg>`);
  const r=el('div','');r.style.cssText='display:flex;gap:40px;justify-content:center';const a=el('button','slot',''),z=el('button','slot','');[a,z].forEach((x,i)=>{x.style.cssText+=`;width:80px;height:80px;font-size:42px;background:${i?'#fff59d':'#c5e1a5'}`;r.append(x)});c.append(r);g.append(c);all.push([a,z,n]);
  const chk=()=>{if(a.dataset.v==null||z.dataset.v==null)return;if(+a.dataset.v+ +z.dataset.v===n){a.dataset.ok=z.dataset.ok=1;T.ok(a);T.ok(z);if(--left===0)T.done()}else{T.bad(a);T.bad(z);delete a.dataset.v;delete z.dataset.v;a.textContent=z.textContent='';a.classList.remove('f');z.classList.remove('f')}};
  [a,z].forEach(x=>x.onclick=()=>{if(x.dataset.ok)return;T.picker(x,[...Array(n+1).keys()],null,v=>{x.textContent=v;x.dataset.v=v;x.classList.add('f');chk()})})});
 b.append(el('div','mut','Кез келген дұрыс жұпты жазуға болады'));
 T.reveal=()=>all.forEach(([a,z,n])=>{if(a.dataset.ok)return;const k=rnd(1,n-1);a.textContent=k;z.textContent=n-k;a.style.color=z.style.color='#e0a000'})}},
{num:4,label:'ЖҰПТЫҚ ЖҰМЫС',k:'pair',title:'Екінші қосылғышты алу үшін текшені лақтыр. Мысалдар құрастыр және есепте!',build(b,T){col(b,18,'center');
 const D=['','⚀','⚁','⚂','⚃','⚄','⚅'];const t=el('div','');t.style.cssText='display:grid;grid-template-columns:330px repeat(4,150px);border:3px solid #c9cfdc;border-radius:14px;overflow:hidden;background:#fff';b.append(t);
 const cell=(h,bg='#fff')=>{const c=el('div','',h);c.style.cssText=`height:110px;display:grid;place-items:center;font-size:30px;font-weight:900;border:1px solid #e3e8f2;background:${bg}`;t.append(c);return c};
 cell('Бірінші қосылғыш','#f6f7fb');const F=[1,2,3,4];F.forEach(n=>cell(`<span style="font-size:52px;background:#fde047;border-radius:10px;padding:0 18px">${n}</span>`));
 cell('Екінші қосылғыш','#f6f7fb');const sec=F.map(()=>cell(''));cell('Қосындының мәні','#f6f7fb');const sum=F.map(()=>cell(''));let left=4;
 F.forEach((n,i)=>{const btn=el('button','btn alt','🎲');btn.style.cssText+=';height:70px;font-size:40px';sec[i].append(btn);btn.onclick=()=>{let k=0;const it=setInterval(()=>{btn.textContent=D[rnd(1,6)];beep('tap');if(++k>8){clearInterval(it);const v=rnd(1,6);sec[i].innerHTML=`<span style="font-size:70px;line-height:1">${D[v]}</span><span style="font-size:36px">${v}</span>`;
   const s=el('button','slot','');s.style.cssText+=';width:76px;height:76px;font-size:40px';s.dataset.w=n+v;sum[i].append(s);s.onclick=()=>{if(s.dataset.ok)return;T.picker(s,[0,1,2,3,4,5,6,7,8,9,10],null,x=>{if(x===n+v){s.textContent=x;s.classList.add('f');s.dataset.ok=1;T.ok(s);if(--left===0)T.done()}else T.bad(s)})}}},90)}});
 b.append(el('div','mut','Әр бағанда 🎲 бас – текше лақтырылады, сосын қосындыны тап'));
 T.reveal=()=>sum.forEach(c=>{const s=c.querySelector('.slot');if(s&&!s.dataset.ok){s.textContent=s.dataset.w;s.style.color='#e0a000'}})}}
],
extra:[
{title:'Дұрыс белгіні қой: + немесе −',build(b,T){K.fill(b,T,{fs:56,signs:['+','-'],vals:[],rows:[[4,'s',5,'=',9],[10,'s',3,'=',7],[6,'s',2,'s',1,'=',9],[8,'s',4,'s',2,'=',2],[5,'s',5,'s',3,'=',7]],ans:[['+'],['-'],['+','+'],['-','-'],['+','-']]})}},
{title:'Қай есептің жауабы үлкен? Салыстыр.',build(b,T){K.fill(b,T,{fs:54,rows:[[4,'+',5,'s',10,'-',2],[7,'-',3,'s',2,'+',2],[9,'-',6,'s',1,'+',3],[3,'+',3,'s',10,'-',5]],ans:[['>'],['='],['<'],['>']],title:'Екі жақты да есептеп, белгіні қой'})}},
{title:'Мәтінді есептер.',build(b,T){col(b,10,'center');T.series(b,[
 {q:'<div style="font-size:70px">🍁🍂</div><div class="qline">Ағаштан 6 жапырақ түсті, сосын тағы 3 жапырақ түсті. Жерде неше жапырақ жатыр?</div>',o:[8,9,10],a:9},
 {q:'<div style="font-size:70px">🐿️</div><div class="qline">Тиында 10 жаңғақ болды. 4-еуін жеді. Неше жаңғақ қалды?</div>',o:[5,6,7],a:6},
 {q:'<div style="font-size:70px">🍄</div><div class="qline">Асан 5 саңырауқұлақ, Әлия 2-еуі кем терді. Әлия неше саңырауқұлақ терді?</div>',o:[2,3,7],a:3},
 {q:'<div style="font-size:70px">🌰</div><div class="qline">Себетте 7 жаңғақ бар. 10 болуы үшін тағы нешеуін салу керек?</div>',o:[2,3,4],a:3}])}}
],
duel:{title:'10 көлемінде: қосу мен азайту',gen:DG.add(10)},
games:[GM.quiz({icon:'🧮',title:'🧮 Жылдам есепші: 10-ға дейін',gen:()=>DG.add(10)()}),GM.croc({max:10})]
});
})();
