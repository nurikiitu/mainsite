/* 1-сынып · Математика · 20-сабақ · 10 саны (оқулық 44–45-бет) */
(function(){
const xe=(e,fs=38)=>`<span style="position:relative;display:inline-block;font-size:${fs}px"><span style="opacity:.45">${e}</span><b style="position:absolute;left:44%;top:-14%;width:5px;height:128%;background:#222;transform:rotate(-45deg);border-radius:3px"></b></span>`;
const rep=(e,n,fs=38)=>`<span style="font-size:${fs}px">${e.repeat(n)}</span>`;
const tri=(a,c,t)=>`<div style="position:relative;width:150px;height:130px;border-radius:50%;border:4px solid #e57373;background:#fff"><b style="position:absolute;left:18px;top:18px;width:46px;height:46px;border-radius:50%;background:#fb8c00;color:#fff;display:grid;place-items:center;font-size:24px">${a}</b><b style="position:absolute;right:18px;top:18px;width:46px;height:46px;border-radius:50%;background:#1e88e5;color:#fff;display:grid;place-items:center;font-size:24px">${c}</b><b style="position:absolute;left:52px;bottom:12px;width:46px;height:46px;border-radius:50%;background:#e53935;color:#fff;display:grid;place-items:center;font-size:24px">${t}</b></div>`;
LESSON({
goal:'10 санымен танысасың.',
introExtra(w,T){K.introNum(w,T,10,'🎾')},
book:[
{num:1,title:'Заттарды сана. Олардың санын 10-ға дейін толықтыр.',build(b,T){
 const S=[['✂️',2],['🟩',7],['🎨',4],['📕',6],['🏓',5],['🎾',10],['🏸',4],['🧴',3],['📏',1]];
 const g=el('div','');g.style.cssText='display:grid;grid-template-columns:repeat(3,1fr);gap:14px;width:100%';b.style.flexDirection='column';b.append(g);let left=S.length;const ss=[];
 S.forEach(([e,n])=>{const c=el('div','',`<div style="height:96px;display:flex;flex-wrap:wrap;align-content:flex-end;justify-content:center;font-size:${n>6?30:38}px;border-bottom:10px solid #b58b5c;line-height:1.05">${e.repeat(n)}</div>`);
  c.style.cssText='background:#fff8ef;border:3px solid #f1d7b5;border-radius:16px;padding:8px 12px';const r=el('div','',`<span style="font-size:32px;font-weight:900">${n} + </span>`);r.style.cssText='display:flex;align-items:center;justify-content:center;gap:6px;margin-top:6px';
  const s=el('button','slot','');s.style.cssText+=';width:58px;height:58px;font-size:34px';s.dataset.w=10-n;ss.push(s);r.append(s);r.insertAdjacentHTML('beforeend','<span style="font-size:32px;font-weight:900">= 10</span>');c.append(r);
  s.onclick=()=>{if(s.dataset.ok)return;T.picker(s,[0,1,2,3,4,5,6,7,8,9,10],null,v=>{if(v===10-n){s.textContent=v;s.classList.add('f');s.dataset.ok=1;T.ok(s);if(--left===0)T.done()}else T.bad(s)})};g.append(c)});
 T.reveal=()=>ss.forEach(s=>{if(!s.dataset.ok){s.textContent=s.dataset.w;s.style.color='#e0a000'}})}},
{num:2,title:'Үлгі бойынша қосу мен азайтуға мысалдар құрастыр.',build(b,T){
 K.fillGroups(b,T,{fs:38,gap:24,vals:[0,1,2,3,4,5,6,7,8,9,10],groups:[[6,4,10],[8,1,9],[7,3,10],[2,8,10]].map(([a,c,t])=>({pic:tri(a,c,t),rows:[[a,'+',c,'=',null],[c,'+',a,'=',null],[t,'-',a,'=',null],[t,'-',c,'=',null]],ans:[[t],[t],[c],[a]]}))})}},
{num:3,label:'ЖҰПТЫҚ ЖҰМЫС',k:'pair',title:'Әр суретке сәйкес жазуды таңда. Оны есепте.',build(b,T){
 const ex=t=>`<span style="font-size:40px;font-weight:900">${t}</span>`;
 K.match(b,T,{title:'Суретті бас, сосын оның жазуын бас',cw:400,ch:120,gap:14,
  L:[{h:'<div style="display:flex;align-items:center">'+rep('🍎',6)+xe('🍋').repeat(4)+'</div>',k:'a'},{h:'<div style="display:flex;align-items:center">'+rep('🏓',5)+xe('🏓')+'</div>',k:'b'},{h:'<div style="display:flex;align-items:center">'+rep('🟥',5,34)+rep('🟩',3,34)+'</div>',k:'c'},{h:'<div style="display:flex;align-items:center">'+rep('🔴',5,34)+xe('🟡',34).repeat(2)+'</div>',k:'d'},{h:'<div style="display:flex;align-items:center">'+rep('🔵',7,32)+xe('🔵',32)+'</div>',k:'e'},{h:'<div style="display:flex;align-items:center">'+rep('🔴',3,34)+rep('🟢',3,34)+'</div>',k:'f'}],
  R:[{h:ex('10 − 4 = 6'),k:'a'},{h:ex('6 − 1 = 5'),k:'b'},{h:ex('5 + 3 = 8'),k:'c'},{h:ex('7 − 2 = 5'),k:'d'},{h:ex('8 − 1 = 7'),k:'e'},{h:ex('3 + 3 = 6'),k:'f'}]})}},
{num:4,label:'СЕН ЗЕРТТЕУШІСІҢ',k:'res',title:'Тізбек бойынша есепте.',build(b,T){K.chain(b,T,{chains:[[10,[-1,1,0,-3]]]})}}
],
extra:[
{title:'10 санының үйін толтыр.',build(b,T){b.style.justifyContent='center';const h=el('div','');K.house(h,T,{n:10,pairs:[1,2,3,4,5,6,7,8,9].map((a,i)=>[a,10-a,i%2])});b.append(h)}},
{title:'Қиын тізбектер.',build(b,T){K.chain(b,T,{chains:[[10,[-4,3,-6,7,-10]],[2,[5,-3,6,0,-2]],[9,[-9,10,-5,4]]]})}},
{title:'«Ондық достар»: қосындысы 10 болатын жұптарды тап.',build(b,T){
 K.match(b,T,{title:'Жоғарыдағы санды бас, сосын онымен бірге 10 болатын санды бас',cw:150,ch:130,gap:22,L:[1,3,4,6,8,9].map(n=>({h:big(n,'#3b7dd8',80),k:n})),R:[9,7,6,4,2,1].map((n)=>({h:big(n,'#e53935',80),k:10-n}))})}}
],
duel:{title:'10-ға дейін санау: кім жылдам?',gen:DG.count(10)},
games:[GM.balloons({from:1,to:10}),GM.memory({title:'🧩 Ондық достар: екеуі бірге 10',pairs:()=>[[1,9],[2,8],[3,7],[4,6],[5,5]].map(([a,c])=>[`<div style="text-align:center">${dots(a,110)}<div style="font-size:30px;font-weight:900">${a}</div></div>`,`<span style="font-size:80px;font-weight:900;color:#3b7dd8">${c}</span>`])})]
});
})();
