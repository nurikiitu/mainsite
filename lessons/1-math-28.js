/* 1-сынып · Математика · 28-сабақ · Ұзындықты өлшеу. Сантиметр (оқулық 60–61-бет) */
(function(){
const U=60;
const ruler=(cm=10,u=U)=>`<svg width="${cm*u+24}" height="62" viewBox="0 0 ${cm*u+24} 62"><rect x="0" y="0" width="${cm*u+24}" height="62" rx="6" fill="#ffe082" stroke="#e0a800" stroke-width="2"/>
 ${[...Array(cm*2+1)].map((_,i)=>{const x=12+i*u/2,full=i%2===0;return `<line x1="${x}" y1="0" x2="${x}" y2="${full?24:14}" stroke="#5d4037" stroke-width="2"/>`+(full?`<text x="${x}" y="48" font-size="20" font-weight="800" text-anchor="middle" fill="#5d4037" font-family="Nunito">${i/2}</text>`:'')}).join('')}</svg>`;
const seg=(cm,c,u=U)=>`<svg width="${cm*u+24}" height="26"><line x1="12" y1="13" x2="${12+cm*u}" y2="13" stroke="${c}" stroke-width="7" stroke-linecap="round"/><line x1="12" y1="2" x2="12" y2="24" stroke="${c}" stroke-width="4"/><line x1="${12+cm*u}" y1="2" x2="${12+cm*u}" y2="24" stroke="${c}" stroke-width="4"/></svg>`;
const onRuler=(cm,c,u=U,rc=10)=>`<div style="display:flex;flex-direction:column;align-items:flex-start;gap:2px">${seg(cm,c,u)}${ruler(rc,u)}</div>`;
const pencil=(cm,u=U)=>`<svg width="${cm*u+24}" height="34"><path d="M12 17 L40 5 H${12+cm*u-14} V29 H40 Z" fill="#f2b84b" stroke="#a66a00" stroke-width="2"/><path d="M12 17 L24 12 V22Z" fill="#333"/><rect x="${12+cm*u-14}" y="5" width="14" height="24" fill="#ef9a9a"/></svg>`;
const blk=(w,c,h=34)=>`<div style="width:${w}px;height:${h}px;background:${c};border-radius:6px;border:2px solid #0003"></div>`;

LESSON({
goal:'Ұзындықтың өлшем бірлігі – <b>сантиметрмен</b> танысасың.',
introExtra(w){w.append(el('div','',`<div style="display:flex;gap:30px;align-items:center;font-size:28px;font-weight:900">${blk(U,'#fdd835')} – бұл 1 сантиметр (см)</div>`),el('div','',ruler(10)))},
book:[
{num:1,title:'Әлия заттарды қалай салыстырды? Өзіңнің қаламсауытыңдағы заттарды ұзындығы бойынша салыстыр.',build(b,T){
 const pic=el('div','',`<div style="display:flex;flex-direction:column;gap:22px;align-items:flex-start">
  <div style="display:flex;gap:30px;align-items:center"><div style="display:flex;flex-direction:column;gap:6px">${pencil(6)}${pencil(6)}</div><span class="mut" style="font-size:22px">қарындаштар</span></div>
  <div style="display:flex;gap:30px;align-items:center"><div style="display:flex;flex-direction:column;gap:6px">${blk(130,'#ef9a9a',40)}${blk(130,'#90caf9',40)}</div><span class="mut" style="font-size:22px">өшіргіштер</span></div>
  <div style="display:flex;flex-direction:column;gap:6px">${blk(330,'#fff176',38)}${blk(520,'#ff8a65',38)}</div><span class="mut" style="font-size:22px">сары және қызғылт сызғыштар</span></div>`);b.append(pic);
 const side=el('div','side');b.append(side);
 T.series(side,[{q:'<div class="qline">Екі қарындаштың ұзындығы қандай?</div>',o:['Бірдей','Әртүрлі'],a:'Бірдей'},
  {q:'<div class="qline">Қай сызғыш ұзын?</div>',o:['Сары','Қызғылт'],a:'Қызғылт'},
  {q:'<div class="qline">Әлия қалай салыстырды?</div>',o:['Қатар қойып','Көзбен шамалап'],a:'Қатар қойып'}],
  {end:()=>{T.done();side.append(el('div','goal','<span>ӨЗІҢ</span>Қаламсауытыңнан 2 зат алып, қатар қойып салыстыр: қайсысы ұзын? ✏️'))}})}},
{num:2,title:'Сынып ішінен кез келген затты таңда. Өлшем ретінде алынған затты пайдаланып, олардың ұзындығын өлше.',build(b,T){
 const er=blk(110,'linear-gradient(90deg,#ef9a9a 50%,#64b5f6 50%)',40),sh=blk(82,'#1e63d6',40);
 b.append(el('div','',`<div style="display:flex;flex-direction:column;gap:34px">
  <div><div style="display:flex;gap:0">${er.repeat(3)}</div>${pencil(330/U)}</div>
  <div><div style="display:flex;gap:0">${sh.repeat(4)}</div>${pencil(328/U)}</div></div>`));
 const side=el('div','side');b.append(side);
 T.series(side,[{q:'<div class="qline">Қарындаштың ұзындығы неше өшіргішке тең?</div>',o:[2,3,4,5],a:3},
  {q:'<div class="qline">Неше ұштағышқа тең?</div>',o:[2,3,4,5],a:4},
  {q:'<div class="qline">Неге жауаптар әртүрлі шықты?</div>',o:['Өлшемдердің ұзындығы әртүрлі','Қарындаш өзгерді'],a:'Өлшемдердің ұзындығы әртүрлі'}],
  {end:()=>{T.done();side.append(el('div','goal','<span>ЕСІҢДЕ САҚТА!</span><b>Ұзындық</b> – бұл шама. Оны өлшеуге болады.'))}})}},
{rem:{title:'Сантиметр',build(b,T){col(b,22,'center');
  b.append(el('div','',`<div style="display:flex;gap:20px;align-items:center;font-size:34px;font-weight:900">${blk(U,'#fdd835')} – бұл 1 сантиметр (см) болатын өлшем</div>`));
  b.append(el('div','',ruler(12)));
  b.append(el('div','',`<div style="display:flex;gap:40px">${[2,4,5].map((n,i)=>`<div style="display:flex">${blk(U,['#29b6f6','#66bb6a','#5c6bc0'][i],28).repeat(n)}</div>`).join('')}</div>`));
  b.append(el('div','',`<div style="font-size:36px;font-weight:900;text-align:center"><span style="color:#d9792b">Сантиметр (см)</span> – ұзындықтың өлшем бірлігі.<br><span style="font-size:28px;color:#6b7590">Өлшеуге арналған сызғыштар мен таспалар: 📏 📐 🧵</span></div>`))}},
 num:3,title:'Суретке қара. Мысалдар құрастыр.',build(b,T){
 b.append(el('div','',`<div style="display:flex;flex-direction:column;align-items:center;gap:4px"><div style="display:flex;gap:0;font-size:28px;font-weight:900"><span style="width:${5*U}px;text-align:center">5 см</span><span style="width:${2*U}px;text-align:center">2 см</span></div>
  <div style="display:flex">${blk(5*U,'#e53935',40)}${blk(2*U,'#66bb6a',40)}</div><svg width="${7*U}" height="34"><path d="M4 4 Q4 24 ${7*U/2} 24 Q${7*U-4} 24 ${7*U-4} 4" fill="none" stroke="#333" stroke-width="3"/></svg><b style="font-size:28px">? см</b></div>`));
 K.fill(b,T,{fs:52,rows:[[5,'см','+',2,'см','=',null,'см'],[2,'см','+',null,'см','=',null,'см'],[null,'см','-',2,'см','=',null,'см'],[null,'см','-',5,'см','=',null,'см']],ans:[[7],[5,7],[7,5],[7,2]]})}},
{num:4,label:'ЖҰПТЫҚ ЖҰМЫС',k:'pair',title:'Кесінділердің ұзындығын сызғышпен өлше. Қара түсті кесіндіге қарағанда қай кесінді ұзын?',build(b,T){
 col(b,10,'center');const S=[[3,'#1e88e5','көк'],[3,'#ec407a','қызғылт'],[8,'#43a047','жасыл'],[6,'#222','қара'],[2,'#e0a800','сары']];
 T.series(b,[...S.map(([n,c,w])=>({q:onRuler(n,c,U,10)+`<div class="qline"><span style="color:${c}">${w}</span> кесіндінің ұзындығы неше см?</div>`,o:near(n,1,10),a:n})),
  {q:`<div style="display:flex;flex-direction:column;gap:8px">${S.map(([n,c,w])=>`<div style="display:flex;align-items:center;gap:12px">${seg(n,c,50)}<b style="font-size:24px">${n} см</b></div>`).join('')}</div><div class="qline">Қара кесіндіден қай кесінді ұзын?</div>`,o:['көк','қызғылт','жасыл','сары'],a:'жасыл',optHtml:v=>v}])}}
],
extra:[
{title:'Заттың ұзындығын сызғышпен өлше.',build(b,T){col(b,10,'center');T.series(b,shuffle([4,7,5,9,6]).map(n=>({q:`<div style="display:flex;flex-direction:column;gap:2px">${pencil(n)}${ruler(10)}</div><div class="qline">Қарындаштың ұзындығы неше см?</div>`,o:near(n,1,10),a:n})))}},
{title:'Ұзындықтарды қос немесе азайт.',build(b,T){col(b,10,'center');const R=[];for(let i=0;i<6;i++){const p=i%2===0;let a=rnd(2,7),c=rnd(1,p?10-a:a-1);if(c<1)c=1;R.push({a,c,p,r:p?a+c:a-c})}
 T.series(b,R.map(r=>({q:`<div style="display:flex">${blk(r.a*50,'#e53935',36)}${r.p?blk(r.c*50,'#66bb6a',36):''}</div><div class="qline" style="font-size:56px">${r.a} см ${r.p?'+':'−'} ${r.c} см = ? см</div>`,o:near(r.r,0,10),a:r.r})))}},
{title:'Салыстыр: > < = белгісін қой.',build(b,T){const P=[[6,4],[3,8],[5,5],[9,7],[2,6]];K.fill(b,T,{fs:52,rows:P.map(([a,c])=>[a,'см','s',c,'см']),ans:P.map(([a,c])=>[cmp(a,c)]),pics:P.map(([a,c])=>`<div style="display:flex;flex-direction:column;gap:4px;width:300px">${blk(a*30,'#1e88e5',14)}${blk(c*30,'#e53935',14)}</div>`)})}}
],
duel:{title:'Неше сантиметр?',gen(){const n=rnd(1,9);const C=['#e53935','#1e88e5','#43a047','#8e24aa'];return{q:onRuler(n,C[rnd(0,3)],38,10),o:near(n,1,10),a:n}}},
games:[
 GM.quiz({icon:'📏',title:'📏 Сызғыш шебері: ұзындығын тап!',gen:()=>{const n=rnd(1,10);return{q:onRuler(n,['#e53935','#1e88e5','#43a047','#fb8c00'][rnd(0,3)],60,10)+'<div class="qline">Неше см?</div>',o:near(n,1,10),a:n}}}),
 GM.quiz({icon:'🧵',title:'🧵 Таспаны қос: барлығы неше см?',gen:()=>{const a=rnd(1,6),c=rnd(1,10-a);return{q:`<div style="display:flex">${blk(a*60,'#ec407a',40)}${blk(c*60,'#29b6f6',40)}</div><div class="qline" style="font-size:52px">${a} см + ${c} см = ?</div>`,o:near(a+c,1,10),a:a+c}}})]
});
})();
