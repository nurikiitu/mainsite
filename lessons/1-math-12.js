/* 1-сынып · Математика · 12-сабақ · 6 саны және цифры (оқулық 28–29-бет) */
(function(){
const kb=(n,g,s=.55)=>[...Array(n)].map((_,i)=>kid(g,g?['#ec407a','#ab47bc','#ef5350','#f06292'][i%4]:['#1e88e5','#3949ab','#00897b'][i%3],'#3e2723',g?'#fdd835':0,0,s)).join('');
LESSON({
goal:'6 саны және цифрымен танысасың.',
introExtra(w,T){K.introNum(w,T,6,'🎈')},
book:[
{num:1,title:'Сурет бойынша «неше» сөзін пайдаланып, сұрақтар құрастыр. Өнерпаздардың санын салыстыр.',build(b,T){
 const C=['#fdd835','#e53935','#43a047','#1e88e5','#ab47bc','#29b6f6'];
 const items=[...C.map((c,i)=>({e:`<svg width="60" height="80" viewBox="0 0 62 90"><ellipse cx="31" cy="34" rx="27" ry="32" fill="${c}"/><path d="M31 66 l-5 6 h10z" fill="${c}"/></svg>`,x:10+i*16,y:12})),
  ...[0,1,2,3,4,5].map(i=>({e:kid(i%2,i%2?'#ec407a':'#1e88e5','#3e2723',i%2?'#e53935':0,0,.62),x:12+i*15,y:44})),
  ...[0,1,2,3,4,5].map(i=>({e:kid(i===3?1:0,i===3?'#29b6f6':'#43a047','#3e2723',0,1,.62),x:12+i*15,y:80}))];
 const s=T.scene(b,{w:900,h:540,bg:'linear-gradient(#8e2453 0 30%,#c2185b 30% 56%,#e0c9a6 56%)',items});
 s.insertAdjacentHTML('afterbegin','<div style="position:absolute;left:0;right:0;top:24%;height:6%;background:repeating-linear-gradient(90deg,#fdd835 0 20px,#f9a825 20px 40px);opacity:.7"></div>');
 const side=el('div','side');b.append(side);side.append(el('div','mut','💡 Басып санауға болады'));
 T.series(side,[{q:'<div class="qline">Неше шар бар?</div>',o:[4,5,6,7],a:6},{q:'<div class="qline">Неше бала күй тартып отыр?</div>',o:[4,5,6,7],a:6},{q:'<div class="qline">Неше бала билеп жүр?</div>',o:[4,5,6,7],a:6},
  {q:'<div class="qline">Күйшілер мен бишілердің санын салыстыр: 6 ? 6</div>',o:['>','<','='],a:'=',optHtml:v=>`<span style="font-size:54px">${SG(v)}</span>`}],{onEach:()=>s.resetCount()})}},
{num:2,label:'ЖҰПТЫҚ ЖҰМЫС',k:'pair',title:'Мысалдар құрастыр. Есепте.',build(b,T){
 K.fill(b,T,{fs:48,vals:[0,1,2,3,4,5,6],rows:[[null,'+',null,'=',null],[null,'+',null,'=',null],[null,'+',null,'=',null],[null,'+',null,'=',null]],ans:[[1,4,5],[1,2,3],[2,2,4],[3,3,6]],
  pics:[[1,4],[1,2],[2,2],[3,3]].map(([a,c])=>`<div style="width:520px;display:flex;justify-content:flex-end;align-items:flex-end;height:96px;overflow:hidden">${kb(a,0)}<span style="width:14px"></span>${kb(c,1)}</div>`),title:'Ұлдар + қыздар = барлығы'})}},
{num:3,label:'МАТЕМАТИКА КҮНДЕЛІКТІ ӨМІРДЕ',k:'life',title:'Әр сөреде 6 заттан болу үшін, тағы неше заттан қосу керек?',build(b,T){
 const S=[['домбыра','🪕',1],['асатаяқ','🔔',5],['дабыл','🥁',3],['тұяқтас','🌰',4],['баян','🪗',1],['сыбызғы','🎋',2]];
 const g=el('div','');g.style.cssText='display:grid;grid-template-columns:repeat(3,1fr);gap:16px;width:100%';b.style.flexDirection='column';b.append(g);let left=6;const ss=[];
 S.forEach(([nm,e,n])=>{const c=el('div','',`<div style="height:84px;display:flex;align-items:flex-end;justify-content:center;font-size:${n>3?44:54}px;border-bottom:10px solid #8d6e63;padding:0 6px">${e.repeat(n)}</div><div style="display:flex;align-items:center;justify-content:space-between;margin-top:8px"><b style="font-size:24px">${nm}</b><span style="font-size:36px;font-weight:900">${n} + </span></div>`);
  c.style.cssText='background:#fff8ef;border:3px solid #f1d7b5;border-radius:18px;padding:10px 14px';const s=el('button','slot','');s.style.cssText+=';width:64px;height:64px;font-size:38px';s.dataset.w=6-n;
  c.lastChild.append(s);c.lastChild.insertAdjacentHTML('beforeend','<span style="font-size:36px;font-weight:900">= 6</span>');ss.push(s);
  s.onclick=()=>{if(s.dataset.ok)return;T.picker(s,[0,1,2,3,4,5,6],null,v=>{if(v===6-n){s.textContent=v;s.classList.add('f');s.dataset.ok=1;T.ok(s);c.firstChild.insertAdjacentHTML('beforeend',`<span style="opacity:.55">${e.repeat(v)}</span>`);if(--left===0)T.done()}else T.bad(s)})};g.append(c)});
 T.reveal=()=>ss.forEach(s=>{if(!s.dataset.ok){s.textContent=s.dataset.w;s.style.color='#e0a000'}})}},
{num:4,title:'Сандарды салыстыр.',build(b,T){col(b,10,'center');const tmp=el('div','');tmp.style.cssText='display:grid;grid-template-columns:1fr 1fr;gap:10px 140px';
 K.fill(tmp,T,{fs:56,signs:['>','<','='],rows:[[5,'s',6],[2,'s',4],[4,'s',6],[3,'s',5],[6,'s',5],[5,'s',2]],ans:[['<'],['<'],['<'],['<'],['>'],['>']]});tmp.style.flexDirection='';tmp.style.display='grid';tmp.style.gap='16px 180px';b.append(tmp);b.append(el('div','',nline(6,[],0)))}}
],
extra:[
{title:'6 санының құрамы: сан үйін толтыр.',build(b,T){b.style.justifyContent='center';const h=el('div','');K.house(h,T,{n:6,pairs:[[1,5,1],[2,4,0],[3,3,1],[4,2,0],[5,1,1]]});b.append(h)}},
{title:'Дәл АЛТЫ заты бар карточкаларды тап.',build(b,T){const E=shuffle(EM);const tiles=[];for(let i=0;i<5;i++)tiles.push({h:`<div style="font-size:36px;line-height:1.15;max-width:130px">${E[i].repeat(6)}</div>`,ok:1});tiles.push({h:dots(6,130),ok:1},{h:`<div style="display:flex">${hand(6,110)}</div>`,ok:1});
 [5,7,4,5,7].forEach((n,i)=>tiles.push({h:`<div style="font-size:34px;line-height:1.15;max-width:130px">${E[6+i].repeat(n)}</div>`,ok:0}));K.pickAll(b,T,{tiles,cols:6,size:180,title:'Тек АЛТЫ заты бар карточкаларды бас'})}},
{title:'Мәтінді есептер.',build(b,T){col(b,10,'center');T.series(b,[
 {q:'<div style="font-size:80px">🐞🐞🐞🐞 ➕ 🐞🐞</div><div class="qline">Жапырақта 4 қоңыз отырды. Тағы 2 қоңыз ұшып келді. Неше қоңыз болды?</div>',o:[4,5,6],a:6},
 {q:'<div style="font-size:80px">🎈🎈🎈🎈🎈🎈</div><div class="qline">6 шардың 3-еуі жарылды. Неше шар қалды?</div>',o:[2,3,4],a:3},
 {q:'<div style="font-size:80px">🧦</div><div class="qline">3 жұп шұлықта барлығы неше шұлық бар?</div>',o:[3,5,6],a:6},
 {q:'<div style="font-size:80px">🍐</div><div class="qline">Апамда 6 алмұрт бар еді. Маған 1 алмұрт берді. Апамда неше алмұрт қалды?</div>',o:[4,5,6],a:5}])}}
],
duel:{title:'6-ға дейін санау: кім жылдам?',gen:DG.digit(6)},
games:[GM.balloons({from:0,to:6}),GM.croc({max:6})]
});
})();
