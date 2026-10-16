/* 1-сынып · Математика · 29-сабақ · Дециметр (оқулық 62–63-бет) */
(function(){
const U=40;
const rulerH=(cm=10,u=U,unit='')=>`<svg width="${cm*u+24}" height="50"><rect width="${cm*u+24}" height="50" rx="5" fill="#ffe082" stroke="#e0a800" stroke-width="2"/>${[...Array(cm+1)].map((_,i)=>`<line x1="${12+i*u}" y1="0" x2="${12+i*u}" y2="18" stroke="#5d4037" stroke-width="2"/><text x="${12+i*u}" y="40" font-size="17" font-weight="800" text-anchor="middle" fill="#5d4037" font-family="Nunito">${i}${unit}</text>`).join('')}</svg>`;
const blk=(w,c,h=30)=>`<div style="width:${w}px;height:${h}px;background:${c};border-radius:5px"></div>`;
const SC=['#fb8c00','#81c784','#f06292','#d4e157','#e57373','#4fc3f7','#90a4ae'];
LESSON({
goal:'Ұзындықтың өлшем бірлігі – <b>дециметрмен</b> танысасың.',
introExtra(w){w.append(el('div','',`<div style="display:flex;gap:30px;align-items:center"><div style="display:flex">${blk(U,'#fdd835',40).repeat(10)}</div><b style="font-size:40px">10 см = 1 дм</b></div>`))},
book:[
{num:1,title:'Суретке қара. Сырым әкелген фотосуреттердің ұзындығы мен ені нешеге тең?',build(b,T){const U=56;
 const photo=`<div style="position:relative;width:${10*U+90}px;height:${7*U+70}px">
  <div style="position:absolute;left:62px;top:0;width:${10*U}px;height:${7*U}px;background:linear-gradient(#bbdefb 55%,#a5d6a7 55%);border:4px solid #fff;box-shadow:0 4px 12px #0003;display:flex;align-items:flex-end;justify-content:center;gap:4px;line-height:1;white-space:nowrap;overflow:hidden;padding-bottom:6px">${kid(0,'#8d6e63','#bdbdbd',0,0,1.05)}${kid(1,'#ab47bc','#e0e0e0',0,0,1)}${kid(1,'#ec407a','#3e2723',0,0,1.05)}${kid(0,'#42a5f5','#212121',0,0,1.12)}${kid(0,'#66bb6a','#4e342e',0,1,.72)}${kid(1,'#ffb300','#5d4037',0,0,.62)}</div>
  <div style="position:absolute;left:50px;top:${7*U+6}px">${rulerH(10,U)}</div>
  <div style="position:absolute;left:-${7*U/2-24}px;top:${7*U/2-24}px;transform:rotate(90deg)">${rulerH(7,U)}</div></div>`;
 b.append(el('div','',photo));const side=el('div','side');b.append(side);
 T.series(side,[{q:'<div class="qline">Фотосуреттің ұзындығы неше см?</div>',o:[7,8,9,10],a:10},{q:'<div class="qline">Ені неше см?</div>',o:[5,6,7,8],a:7},{q:'<div class="qline">10 см = ? дм</div>',o:[1,2,10],a:1}],
  {end:()=>{T.done();side.append(el('div','goal','<span>ЕСІҢДЕ САҚТА!</span><b>10 см = 1 дм</b><br>Дециметр (дм) – ұзындықтың өлшем бірлігі.'))}})}},
{num:2,label:'МАТЕМАТИКА КҮНДЕЛІКТІ ӨМІРДЕ',k:'life',title:'Сыныптан және үйден ұзындығы 1 дм, 9 см, 10 см, 8 см болатын заттарды тап. Оларды салыстыр.',build(b,T){
 const P=[['1 дм','9 см','>'],['10 см','1 дм','='],['8 см','1 дм','<'],['9 см','8 см','>'],['1 дм','8 см','>']];
 K.fill(b,T,{fs:50,title:'Ұзындықтарды салыстыр: > < = белгісін қой',rows:P.map(([a,c])=>[a,'s',c]),ans:P.map(p=>[p[2]])});
 b.append(el('div','goal','<span>ІЗДЕ</span>Сыныптан ұзындығы 1 дм (10 см) болатын зат тап: қарындаш? өшіргіш? кітап? Сызғышпен өлшеп көр 📏'))}},
{num:3,label:'ЖҰПТЫҚ ЖҰМЫС',k:'pair',title:'Екеуінің ұзындығын қосқанда 1 дециметрді құрайтын екі жолақ таңдап ал. Үлгі бойынша қосу мен азайтуға мысалдар құрастыр.',build(b,T){
 const L=[2,3,4,5,6,7,8];b.style.alignItems='center';const box=el('div','');box.style.cssText='display:flex;flex-direction:column;gap:12px';b.append(box);
 const side=el('div','side');b.append(side);const hh=el('div','qline','Қосындысы 10 см болатын 2 жолақты бас<br><span style="font-size:24px;color:#6b7590">(3 жұп бар)</span>');hh.style.fontSize='30px';side.append(hh);const eq=el('div','');eq.style.cssText='font-size:34px;font-weight:900;line-height:1.5;text-align:center';side.append(eq);
 let sel=null,left=3;const st=[];
 L.forEach((n,i)=>{const s=el('button','',`<div style="display:flex;align-items:center;gap:14px">${blk(n*U*1.7,SC[i],44)}<b style="font-size:24px;color:#6b7590">${n} см</b></div>`);s.style.cssText='padding:4px;border-radius:10px;text-align:left';s.dataset.n=n;
  s.onclick=()=>{if(s.dataset.ok)return;if(!sel){sel=s;s.style.outline='5px solid #ffc531';beep('tap');return}if(sel===s){s.style.outline='';sel=null;return}
   const a=+sel.dataset.n,c=n;if(a+c===10){[sel,s].forEach(x=>{x.dataset.ok=1;x.style.outline='4px solid #22b07d';x.style.opacity='.55'});T.ok(s);const x=Math.min(a,c),y=Math.max(a,c);
    eq.insertAdjacentHTML('beforeend',`<div style="margin-bottom:10px">${x} см + ${y} см = 10 см<br>${y} см + ${x} см = 10 см<br>10 см − ${y} см = ${x} см<br>10 см − ${x} см = ${y} см</div>`);sel=null;if(--left===0)T.done()}
   else{T.bad(s);sel.style.outline='';sel=null}};box.append(s);st.push(s)});
 T.reveal=()=>{const p=[[2,8],[3,7],[4,6]].find(([a,c])=>!box.querySelector(`[data-n="${a}"][data-ok]`));if(p)p.forEach(n=>box.querySelector(`[data-n="${n}"]`).classList.add('hint'))}}},
{num:4,title:'Есепте.',build(b,T){K.fill(b,T,{fs:58,rows:[[4,'см','+',3,'см','=',null,'см'],[10,'см','-',5,'см','=',null,'см'],[1,'дм','+',5,'дм','=',null,'дм'],[9,'дм','-',3,'дм','=',null,'дм']],ans:[[7],[5],[6],[6]]})}}
],
extra:[
{title:'Сантиметрге немесе дециметрге айналдыр.',build(b,T){K.fill(b,T,{fs:52,vals:[...Array(21).keys()],rows:[[1,'дм','=',null,'см'],[10,'см','=',null,'дм'],[1,'дм',3,'см','=',null,'см'],[1,'дм',7,'см','=',null,'см'],[20,'см','=',null,'дм']],ans:[[10],[1],[13],[17],[2]]})}},
{title:'Салыстыр: дециметр мен сантиметр.',build(b,T){const P=[['1 дм','12 см','<'],['1 дм','10 см','='],['7 см','1 дм','<'],['2 дм','15 см','>'],['1 дм 5 см','15 см','=']];K.fill(b,T,{fs:48,rows:P.map(([a,c])=>[a,'s',c]),ans:P.map(p=>[p[2]])})}},
{title:'Жолақ неше дециметр? Дециметрлік сызғышпен өлше.',build(b,T){col(b,10,'center');T.series(b,shuffle([1,2,3,4,5]).map(n=>({q:`<div style="display:flex;flex-direction:column;gap:2px">${blk(n*110,SC[n],34)}${rulerH(6,110,' дм')}</div><div class="qline">Жолақтың ұзындығы неше дм? Неше см?</div>`,o:[`${n} дм = ${n*10} см`,`${n} дм = ${n} см`,`${n+1} дм = ${(n+1)*10} см`],a:`${n} дм = ${n*10} см`,optHtml:v=>v})))}}
],
duel:{title:'Есепте: см және дм',gen(){const u=Math.random()<.5?'см':'дм';if(Math.random()<.5){const a=rnd(1,8),c=rnd(1,10-a);return{q:`<div class="qline" style="font-size:50px">${a} ${u} + ${c} ${u}</div>`,o:near(a+c,1,10).map(v=>v+' '+u),a:(a+c)+' '+u,oh:v=>`<b style="font-size:30px;padding:4px 8px">${v}</b>`}}
 const a=rnd(3,10),c=rnd(1,a-1);return{q:`<div class="qline" style="font-size:50px">${a} ${u} − ${c} ${u}</div>`,o:near(a-c,1,10).map(v=>v+' '+u),a:(a-c)+' '+u,oh:v=>`<b style="font-size:30px;padding:4px 8px">${v}</b>`}}},
games:[
 GM.memory({title:'🧩 Мысал мен жауабын жұпта',pairs:()=>[['2 см + 8 см','1 дм'],['4 дм + 3 дм','7 дм'],['9 см − 4 см','5 см'],['6 дм − 2 дм','4 дм'],['3 см + 3 см','6 см']].map(([a,c])=>[`<b style="font-size:26px">${a}</b>`,`<b style="font-size:34px;color:#1e63d6">${c}</b>`])}),
 GM.quiz({icon:'🔟',title:'🔟 1 дециметрге толықтыр!',gen:()=>{const a=rnd(1,9);return{q:`<div style="display:flex">${blk(a*60,'#ec407a',44)}<div style="width:${(10-a)*60}px;height:44px;border:3px dashed #9aa3b8;border-radius:5px"></div></div><div class="qline" style="font-size:52px">${a} см + ? см = 1 дм</div>`,o:near(10-a,1,9),a:10-a}}})]
});
})();
