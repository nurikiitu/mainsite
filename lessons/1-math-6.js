/* 1-сынып · Математика · 6-сабақ · Қосу және азайту (оқулық 16–17-бет) */
(function(){
const KC=['#e53935','#1e88e5','#fdd835','#43a047','#8e24aa','#fb8c00'];
const kids=(n,g=0,s=.9,off=0)=>[...Array(n)].map((_,i)=>kid((i+g)%2,KC[(i+off)%6],'#3e2723',0,0,s)).join('');
const scene=(a,mv,op)=>`<div style="display:flex;align-items:flex-end;gap:16px;background:linear-gradient(#e3f2fd 0 60%,#cfd8dc 60%);border-radius:22px;padding:14px 26px">
 <div style="display:flex">${kids(a,0,1.35)}</div><div style="font-size:90px;font-weight:900;color:${op==='+'?'#22b07d':'#ef5350'};align-self:center">${op==='+'?'⬅':'➡'}</div><div style="display:flex;opacity:${op==='+'?1:.35}">${kids(mv,1,1.35,3)}</div></div>`;
const ex=v=>`<span style="font-size:46px;font-weight:900">${v.replace('-','−')}</span>`;
LESSON({
goal:'Қосу және азайту амалдарын білетін боласың.',
introExtra(w){w.append(el('div','',`<div style="display:flex;gap:30px;font-size:56px;font-weight:900"><div class="goal" style="padding:10px 30px">➕ қосу: көбейеді</div><div class="goal" style="padding:10px 30px">➖ азайту: азаяды</div></div>`))},
book:[
{num:1,title:'Суреттерге қара. Не байқадың? Мұның қалай жазылғанына қара. Жазуларды оқы.',build(b,T){col(b,10,'center');T.series(b,[
 {q:`${scene(2,1,'+')}<div class="qline">Екі бала тұр еді, тағы бір бала келді. Қалай жазамыз?</div>`,o:['2 + 1 = 3','2 − 1 = 1','3 − 1 = 2'],a:'2 + 1 = 3',optHtml:ex},
 {q:`${scene(2,1,'-')}<div class="qline">Үш қыз тұр еді, біреуі кетті. Қалай жазамыз?</div>`,o:['3 − 1 = 2','2 + 1 = 3','3 − 2 = 1'],a:'3 − 1 = 2',optHtml:ex},
 {q:`<div class="qline" style="font-size:60px"><span style="color:#43a047">2</span> + <span style="color:#1e88e5">1</span> = <span style="color:#43a047">3</span></div><div class="qline">Бұл жазуды қалай оқимыз?</div>`,o:['Екіге бірді қосқанда үш болады','Үштен бірді азайтқанда екі болады'],a:'Екіге бірді қосқанда үш болады',optHtml:v=>`<span style="font-size:28px">${v}</span>`},
 {q:`<div class="qline" style="font-size:60px"><span style="color:#e53935">3</span> − <span style="color:#1e88e5">1</span> = <span style="color:#e53935">2</span></div><div class="qline">Бұл жазуды қалай оқимыз?</div>`,o:['Үштен бірді азайтқанда екі қалады','Екіге бірді қосқанда үш болады'],a:'Үштен бірді азайтқанда екі қалады',optHtml:v=>`<span style="font-size:28px">${v}</span>`}])}},
{num:2,label:'ЖҰПТЫҚ ЖҰМЫС',k:'pair',title:'Суреттер мен оларға берілген жазуларға қара. Оларды оқы.',build(b,T){col(b,10,'center');T.series(b,[
 {q:`${scene(1,2,'+')}<div class="qline">Бір адам тұр, оған екі адам жақындап келеді. Жазуы қайсы?</div>`,o:['1 + 2 = 3','3 − 2 = 1','2 + 1 = 3'],a:'1 + 2 = 3',optHtml:ex},
 {q:`${scene(1,2,'-')}<div class="qline">Үш адам еді, екеуі кетіп барады. Жазуы қайсы?</div>`,o:['3 − 2 = 1','3 − 1 = 2','1 + 2 = 3'],a:'3 − 2 = 1',optHtml:ex},
 {q:`<div class="qline" style="font-size:60px">1 + 2 = 3</div><div class="qline">Досыңа оқы: «Бірге екіні қосқанда...»</div>`,o:[1,2,3],a:3},
 {q:`<div class="qline" style="font-size:60px">3 − 2 = 1</div><div class="qline">Досыңа оқы: «Үштен екіні азайтқанда...»</div>`,o:[1,2,3],a:1}])}},
{rem:{title:'Қосу мен азайтудың компоненттері',build(b,T){col(b,18,'center');
 const ball=c=>`<span style="display:inline-block;width:44px;height:44px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#fff8,${c} 60%);margin:0 3px"></span>`;
 const row=(top,eq,parts,label)=>`<div style="background:#fff6ea;border:3px solid #f5cfa6;border-radius:22px;padding:14px 30px;text-align:center;width:1200px">
  <div style="font-size:36px;font-weight:900">${top}</div><div style="font-size:50px;font-weight:900;margin:6px 0">${eq}</div>
  <div style="display:flex;gap:14px;justify-content:center;align-items:center;font-size:26px;font-weight:900">${parts}</div><div class="mut" style="font-size:22px;margin-top:6px">${label}</div></div>`;
 const box=(t,c)=>`<span style="background:${c};border-radius:12px;padding:8px 18px">${t}</span>`;
 b.insertAdjacentHTML('beforeend',row(`${ball('#e53935')}${ball('#e53935')} + ${ball('#1e88e5')} = ${ball('#e53935')}${ball('#e53935')}${ball('#1e88e5')}`,'<span style="color:#e53935">2</span> + <span style="color:#1e88e5">1</span> = <span style="color:#22b07d">3</span>',
  `${box('қосылғыш','#ffd9d4')} + ${box('қосылғыш','#d6e8ff')} = ${box('қосындының мәні','#d5f3df')}`,'2 + 1 – қосынды'));
 b.insertAdjacentHTML('beforeend',row(`${ball('#e53935')}${ball('#e53935')}${ball('#1e88e5')} − ${ball('#1e88e5')} = ${ball('#e53935')}${ball('#e53935')}`,'<span style="color:#22b07d">3</span> − <span style="color:#1e88e5">1</span> = <span style="color:#e53935">2</span>',
  `${box('азайғыш','#d5f3df')} − ${box('азайтқыш','#d6e8ff')} = ${box('айырманың мәні','#ffd9d4')}`,'3 − 1 – айырма'))}},
 num:3,label:'СЕН ЗЕРТТЕУШІСІҢ',k:'res',title:'Қосынды мен айырманың мәндерін тап. Карточкалардың түсіне назар аудар. Түсіндір.',build(b,T){
 b.style.justifyContent='center';b.style.alignItems='center';b.style.gap='50px';let left=0;const all=[];
 const mkS=(w)=>{const s=el('button','slot','');s.style.cssText+=';width:64px;height:64px;font-size:38px';s.dataset.w=w;left++;all.push(s);s.onclick=()=>{if(s.dataset.ok)return;T.picker(s,[0,1,2,3,4],null,v=>{if(v===w){s.textContent=v;s.classList.add('f');s.dataset.ok=1;T.ok(s);if(--left===0)T.done()}else T.bad(s)})};return s};
 const tbl=(rows,cols)=>{const t=el('div','');t.style.cssText='display:grid;grid-template-columns:330px 90px 90px;border:3px solid #c9cfdc;border-radius:12px;overflow:hidden;background:#fff';
  rows.forEach(([lab,c,vals])=>{t.append(el('div','',`<div style="background:${c};padding:12px 16px;font-size:28px;font-weight:900;height:84px;display:flex;align-items:center">${lab}</div>`));
   vals.forEach(v=>{const cell=el('div','');cell.style.cssText=`background:${c};height:84px;display:grid;place-items:center;font-size:40px;font-weight:900;border-left:3px solid #c9cfdc`;if(v===null)cell.append(mkS(rows._w.shift()));else cell.textContent=v;t.append(cell)})});return t};
 const A=[['Қосылғыш','#ffd9d4',[2,1]],['Қосылғыш','#d6e8ff',[1,2]],['Қосындының мәні','#d5f3df',[null,null]]];A._w=[3,3];
 const S=[['Азайғыш','#d5f3df',[3,3]],['Азайтқыш','#d6e8ff',[1,2]],['Айырманың мәні','#ffd9d4',[null,null]]];S._w=[2,1];
 const c1=el('div','');c1.style.cssText='display:flex;flex-direction:column;gap:20px;align-items:center';c1.append(tbl(A));
 const c2=el('div','');c2.style.cssText=c1.style.cssText;c2.append(tbl(S));
 const eq=(a,op,c,w)=>{const r=el('div','',`<span style="font-size:46px;font-weight:900">${a} ${op} ${c} = </span>`);r.style.cssText='display:flex;align-items:center;gap:8px';r.append(mkS(w));return r};
 c1.append(eq(2,'+',1,3),eq(1,'+',2,3));c2.append(eq(3,'−',1,2),eq(3,'−',2,1));b.append(c1,c2);
 T.reveal=()=>all.forEach(s=>{if(!s.dataset.ok){s.textContent=s.dataset.w;s.style.color='#e0a000'}})}},
{num:4,label:'ӨЗІНДІК ЖҰМЫС',k:'self',title:'Дәптерге қалай жазылатынына қара. Есепте.',build(b,T){
 const wrap=el('div','');wrap.style.cssText='flex:1;display:flex;align-items:center;justify-content:center;background:#fff linear-gradient(#9ec3ee 1.5px,transparent 1.5px) 0 0/48px 48px,linear-gradient(90deg,#9ec3ee 1.5px,transparent 1.5px) 0 0/48px 48px;background-color:#fff;border:3px solid #9ec3ee;border-radius:12px';
 b.append(wrap);const inner=el('div','');inner.style.cssText='display:grid;grid-template-columns:1fr 1fr;gap:30px 120px';wrap.append(inner);
 const tmp=el('div','');K.fill(tmp,T,{fs:64,vals:[0,1,2,3,4,5],rows:[[2,'+',1,'=',null],[3,'-',1,'=',null],[1,'+',2,'=',null],[3,'-',2,'=',null]],ans:[[3],[2],[3],[1]]});
 [...tmp.children].forEach(c=>{c.style.fontFamily="'Comic Sans MS','Nunito',cursive";inner.append(c)})}}
],
extra:[
{title:'Суретке қарап, өрнекті құрастыр.',build(b,T){K.fill(b,T,{fs:58,vals:[0,1,2,3],signs:['+','-'],rows:[[2,'s',1,'=',3],[3,'s',2,'=',1],[1,'s',1,'=',2],[3,'s',3,'=',0]],ans:[['+'],['-'],['+'],['-']],
 pics:['🐤🐤 ⬅ 🐤','🍎🍎🍎 ➡ 🍎🍎','🦋 ⬅ 🦋','🎈🎈🎈 ➡ 🎈🎈🎈'].map(x=>`<div style="width:400px;font-size:38px;white-space:nowrap">${x}</div>`),title:'Белгіні таңда: + немесе −'})}},
{title:'Қосынды ма, айырма ма? Дұрыс жауабын тап.',build(b,T){col(b,10,'center');T.series(b,shuffle([
 {q:'<div class="qline" style="font-size:64px">2 + 1</div><div class="qline">Бұл – қосынды ма, айырма ма?</div>',o:['Қосынды','Айырма'],a:'Қосынды'},
 {q:'<div class="qline" style="font-size:64px">3 − 2</div><div class="qline">Бұл – қосынды ма, айырма ма?</div>',o:['Қосынды','Айырма'],a:'Айырма'},
 {q:'<div class="qline" style="font-size:64px">3 − <u>1</u> = 2</div><div class="qline">Асты сызылған сан қалай аталады?</div>',o:['Азайғыш','Азайтқыш','Айырманың мәні'],a:'Азайтқыш'},
 {q:'<div class="qline" style="font-size:64px"><u>2</u> + 1 = 3</div><div class="qline">Асты сызылған сан қалай аталады?</div>',o:['Қосылғыш','Қосындының мәні','Азайғыш'],a:'Қосылғыш'},
 {q:'<div class="qline" style="font-size:64px">1 + 2 = <u>3</u></div><div class="qline">Асты сызылған сан қалай аталады?</div>',o:['Қосылғыш','Қосындының мәні','Айырманың мәні'],a:'Қосындының мәні'},
 {q:'<div class="qline" style="font-size:64px"><u>3</u> − 1 = 2</div><div class="qline">Асты сызылған сан қалай аталады?</div>',o:['Азайғыш','Азайтқыш','Қосылғыш'],a:'Азайғыш'}]),{optHtml:v=>`<span style="font-size:30px">${v}</span>`})}},
{title:'Мәтінді есептер: суретсіз шеш!',build(b,T){col(b,10,'center');T.series(b,[
 {q:'<div style="font-size:80px">🐰</div><div class="qline">Шалғында 2 қоян ойнап жүрді. Оларға тағы 1 қоян келді. Неше қоян болды?</div>',o:[1,2,3],a:3},
 {q:'<div style="font-size:80px">🐦</div><div class="qline">Бұтақта 3 торғай отырды. 2 торғай ұшып кетті. Неше торғай қалды?</div>',o:[0,1,2,3],a:1},
 {q:'<div style="font-size:80px">🍐</div><div class="qline">Табақта 1 алмұрт бар еді. Анам тағы 2 алмұрт салды. Неше алмұрт болды?</div>',o:[1,2,3],a:3},
 {q:'<div style="font-size:80px">🧸</div><div class="qline">Сөреде 3 ойыншық болды. 3-уін де алып кетті. Неше ойыншық қалды?</div>',o:[0,1,2,3],a:0}])}}
],
duel:{title:'Жылдам есепте: + және −',gen:DG.add(3)},
games:[
 GM.quiz({icon:'🧮',title:'🧮 Есепші бол: жауабын тап!',gen:()=>DG.add(3)()}),
 GM.memory({title:'🧩 Өрнек пен оның жауабын жұпта',pairs:()=>[[['3 − 3','2 − 2','1 − 1'],0],[['3 − 2','2 − 1','1 + 0'],1],[['1 + 1','3 − 1','2 + 0'],2],[['2 + 1','1 + 2','3 + 0'],3]].map(([xs,v])=>[`<span style="font-size:44px;font-weight:900">${xs[rnd(0,2)]}</span>`,`<span style="font-size:80px;font-weight:900;color:#3b7dd8">${v}</span>`])})
]});
})();
