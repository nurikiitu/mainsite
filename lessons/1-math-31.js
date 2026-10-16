/* 1-сынып · Математика · 31-сабақ · Литр (оқулық 66–67-бет) */
(function(){
/* мөлдір ыдыс: w,h өлшемі, f – толу үлесі (0..1), marks – бөліктер саны */
const glass=(w,h,f,marks=0,c='#4fc3f7')=>{const wh=Math.round((h-14)*f);return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}"><rect x="4" y="${h-6-wh}" width="${w-8}" height="${wh}" rx="6" fill="${c}" opacity=".8"/>
 ${[...Array(marks)].map((_,i)=>`<line x1="4" y1="${h-6-(i+1)*(h-14)/marks}" x2="${w*.35}" y2="${h-6-(i+1)*(h-14)/marks}" stroke="#1565c0" stroke-width="2"/>`).join('')}
 <path d="M3 3 V${h-10} Q3 ${h-3} 12 ${h-3} H${w-12} Q${w-3} ${h-3} ${w-3} ${h-10} V3" fill="none" stroke="#78909c" stroke-width="4"/></svg>`};
const bucket=(s,f,lab='')=>{const w=Math.round(110*s),h=Math.round(100*s),wh=Math.round((h-18)*f);return `<div style="position:relative;display:inline-block"><svg width="${w}" height="${h+22}" viewBox="0 0 ${w} ${h+22}">
 <path d="M${w*.2} 26 Q${w/2} -12 ${w*.8} 26" fill="none" stroke="#607d8b" stroke-width="4"/>
 <clipPath id="bk${w}${h}${Math.round(f*100)}"><path d="M4 22 H${w-4} L${w*.86} ${h+18} H${w*.14}Z"/></clipPath>
 <rect x="0" y="${h+18-wh}" width="${w}" height="${wh}" fill="#4fc3f7" clip-path="url(#bk${w}${h}${Math.round(f*100)})"/>
 <path d="M4 22 H${w-4} L${w*.86} ${h+18} H${w*.14}Z" fill="none" stroke="#546e7a" stroke-width="4"/><ellipse cx="${w/2}" cy="22" rx="${w/2-4}" ry="7" fill="none" stroke="#546e7a" stroke-width="3"/></svg>
 ${lab?`<div style="position:absolute;left:0;right:0;bottom:-34px;text-align:center;font-size:26px;font-weight:900;color:#1565c0">${lab}</div>`:''}</div>`};
const cup=(s=1)=>`<div style="display:inline-flex;flex-direction:column;align-items:center">${glass(46*s,64*s,.9)}<b style="font-size:${16*s}px;color:#1565c0">1 л</b></div>`;
const aqua=(w,h,fish)=>`<div style="width:${w}px;height:${h}px;border:5px solid #546e7a;border-top-width:3px;background:linear-gradient(transparent 12%,#b3e5fc 12%,#4fc3f7);border-radius:6px;display:flex;align-items:flex-end;justify-content:space-around;font-size:${h*.3}px;padding-bottom:6px">${fish}</div>`;
const lab=(h,t)=>`<div style="display:flex;flex-direction:column;align-items:center;gap:4px">${h}<b style="font-size:28px">${t}</b></div>`;
const E=(e,s=70)=>`<span style="font-size:${s}px;line-height:1">${e}</span>`;

LESSON({
goal:'Сыйымдылықтың өлшем бірлігі – <b>литрмен</b> танысасың.',
introExtra(w){w.append(el('div','',`<div style="display:flex;gap:30px;align-items:flex-end">${cup(1.6)}<b style="font-size:34px">← бұл 1 литр (л)</b>${glass(90,170,.55,5)}</div>`))},
book:[
{num:1,title:'Сұйық заттардың мөлшерін қалай салыстыруға болады?',build(b,T){
 const items=[{e:kid(0,'#26a69a','#3e2723',0,1,1.6),x:12,y:58},{e:kid(1,'#66bb6a','#212121',0,1,1.75),x:88,y:54},
  {e:lab(glass(78,116,.9),'1 л'),x:26,y:72},{e:lab(glass(130,190,.7),'құмыра'),x:42,y:64},{e:lab(glass(78,220,.85),'бөтелке'),x:58,y:61},{e:lab('<div style="font-size:140px;line-height:1">🫙</div>','шырын'),x:73,y:68}];
 const s=T.scene(b,{w:860,h:520,bg:'linear-gradient(#f3efe6 0 70%,#c8a27a 70%)',items,count:false});
 const side=el('div','side');b.append(side);
 T.series(side,[{q:'<div class="qline">Ыдыстардағы сұйықты қалай салыстырамыз?</div>',o:['1 литрлік ыдыспен құйып өлшеп','Ыдыстың түсіне қарап'],a:'1 литрлік ыдыспен құйып өлшеп'},
  {q:`<div style="display:flex;gap:10px;align-items:flex-end">${glass(100,150,.7)}<span style="font-size:40px">=</span>${cup(1).repeat(3)}</div><div class="qline">Құмырада неше литр су бар?</div>`,o:[1,2,3,4],a:3},
  {q:`<div style="display:flex;gap:10px;align-items:flex-end">${glass(60,170,.85)}<span style="font-size:40px">=</span>${cup(1).repeat(2)}</div><div class="qline">Бөтелкеде неше литр су бар?</div>`,o:[1,2,3,4],a:2},
  {q:'<div class="qline">Қайсысында су көп: құмырада ма, бөтелкеде ме?</div>',o:['Құмырада','Бөтелкеде','Тең'],a:'Құмырада'}])}},
{num:2,label:'ТОПТЫҚ ЖҰМЫС',k:'pair',title:'Қай ыдыста су көп екенін анықтауға бола ма? Қалай тексеруге болады?',build(b,T){
 col(b,14,'center');const B=[[1,.55,3],[.7,.5,1],[.95,.45,2],[.75,.4,1],[1.2,.5,5],[1.05,.75,4]];
 b.append(el('div','mut','Сырттан қарап анықтау қиын! Шелекті бас – суын 1 литрлік ыдыспен өлшейміз 👇'));
 const row=el('div','');row.style.cssText='display:flex;gap:26px;align-items:flex-end;min-height:230px';b.append(row);let opened=0;
 B.forEach(([sz,f,l],i)=>{const c=el('button','',`<div style="font-size:22px;font-weight:900;color:#6b7590">${i+1}</div>${bucket(sz*1.15,f)}`);c.style.cssText='display:flex;flex-direction:column;align-items:center;padding:6px 6px 40px;position:relative';
  c.onclick=()=>{if(c.dataset.o)return;c.dataset.o=1;beep('tap');c.insertAdjacentHTML('beforeend',`<div style="position:absolute;bottom:2px;left:0;right:0;text-align:center;font-size:28px;font-weight:900;color:#1565c0">${l} л</div>`);if(++opened===B.length)q.style.opacity=1};row.append(c)});
 const q=el('div','');q.style.cssText='width:100%;display:flex;flex-direction:column;align-items:center;gap:10px;opacity:.35';b.append(q);
 T.series(q,[{q:'<div class="qline">Қай шелекте су ең көп?</div>',o:[1,2,3,4,5,6],a:5},{q:'<div class="qline">Қай шелектерде су ең аз?</div>',o:['2 мен 4','1 мен 3','5 пен 6'],a:'2 мен 4',optHtml:v=>v},{q:'<div class="qline">Үлкен шелекте әрқашан су көп бола ма?</div>',o:['Иә, әрқашан','Жоқ, өлшеп тексеру керек'],a:'Жоқ, өлшеп тексеру керек',optHtml:v=>v}]);
 const oldR=T.reveal;T.reveal=()=>{row.querySelectorAll('button:not([data-o])').forEach(x=>x.click());oldR&&oldR()}}},
{rem:{title:'Сыйымдылық. Литр',build(b,T){col(b,24,'center');
  b.append(el('div','',`<div style="font-size:40px;font-weight:900;text-align:center;line-height:1.5"><span style="color:#d9792b">Сыйымдылық</span> – бұл шама.<br><span style="color:#3b7dd8">Литр (л)</span> – сыйымдылықтың өлшем бірлігі.</div>`));
  b.append(el('div','',`<div style="display:flex;gap:30px;align-items:flex-end">${cup(1.6)}${cup(1.6)}${cup(1.6)}<span style="font-size:50px;font-weight:900">=</span>${bucket(1.3,.6,'3 л')}</div>`))}},
 num:3,label:'МАТЕМАТИКА КҮНДЕЛІКТІ ӨМІРДЕ',k:'life',title:'Сыйымдылықты салыстыр.',build(b,T){
 b.append(el('div','',`<div style="display:flex;flex-direction:column;gap:30px">
  <div style="display:flex;gap:30px;align-items:flex-end">${lab(glass(50,130,.85),'1 л')}${lab(glass(110,170,.85),'6 л')}${lab(aqua(280,170,'🐠🌿🐟'),'9 л')}</div>
  <div style="display:flex;gap:30px;align-items:flex-end">${lab(aqua(230,150,'🐟🌿'),'7 л')}${lab(E('🫖',120),'2 л')}${lab(E('🍲',130),'5 л')}</div></div>`));
 const side=el('div','side');b.append(side);
 K.fill(side,T,{fs:46,rows:[[1,'л','s',6,'л'],[9,'л','s',6,'л'],[7,'л','s',2,'л'],[2,'л','s',5,'л'],[5,'л','s',7,'л']],ans:[['<'],['>'],['>'],['<'],['<']]})}},
{num:4,label:'ЖҰПТЫҚ ЖҰМЫС',k:'pair',title:'Бірінші бағанға қосындыларды, екінші бағанға айырмаларды жаз. Олардың мәндерін тап.',build(b,T){
 const X=[['2 л + 6 л','+',8],['6 л + 4 л','+',10],['9 л − 5 л','-',4],['6 л − 6 л','-',0],['8 л − 3 л','-',5],['10 л − 5 л','-',5],['5 л + 2 л','+',7],['3 л + 6 л','+',9]];
 col(b,10);let phase=1;const host=el('div','');host.style.cssText='width:100%;flex:1;display:flex;flex-direction:column;gap:10px';b.append(host);
 const myDone=()=>{if(phase===1){phase=2;T.later(stage2,700)}else T.done()};const T2=new Proxy(T,{get:(o,k)=>k==='done'?myDone:o[k],set:(o,k,v)=>{o[k]=v;return true}});
 K.bins(host,T2,{title:'1) Мысалды бас, сосын бағанды бас',items:X.map(([h,s])=>({h:`<b style="font-size:30px;padding:0 10px">${h}</b>`,bin:s})),bins:[{id:'+',h:'Қосындылар (+)',c:'#fff3e0'},{id:'-',h:'Айырмалар (−)',c:'#e3f2fd'}]});
 function stage2(){host.innerHTML='';const S=X.filter(x=>x[1]==='+'),D=X.filter(x=>x[1]==='-');
  K.fill(host,T2,{fs:42,title:'2) Мәндерін тап',rows:[...S,...D].map(([h])=>[h.replace(' л','').replace(' л',''),'=',null,'л']),ans:[...S,...D].map(x=>[x[2]]),pics:[...S,...D].map(x=>`<b style="font-size:24px;width:150px;color:${x[1]==='+'?'#ef6c00':'#1e63d6'}">${x[1]==='+'?'Қосынды':'Айырма'}</b>`)})}}}
],
extra:[
{title:'Ыдыста неше литр су бар? 1 литрлік ыдыстарды сана.',build(b,T){col(b,10,'center');T.series(b,shuffle([2,3,4,5,6]).map(n=>({q:`<div style="display:flex;gap:14px;align-items:flex-end">${glass(120,200,.25+n*.1,0)}<span style="font-size:44px;font-weight:900">=</span>${cup(1.5).repeat(n)}</div><div class="qline">Ыдыста неше литр су бар?</div>`,o:near(n,1,8),a:n})))}},
{title:'Шелекті толтыр: тағы неше литр құю керек?',build(b,T){col(b,10,'center');const R=[[5,2],[6,4],[4,1],[8,5],[10,7]];
 T.series(b,R.map(([n,k])=>({q:`<div style="display:flex;gap:24px;align-items:flex-end">${bucket(1.6,k/n,'')}<div style="font-size:30px;font-weight:900;line-height:1.5">Шелекке ${n} л сыяды.<br>Ішінде ${k} л су бар.</div></div><div class="qline">Толтыру үшін тағы неше литр құю керек?</div>`,o:near(n-k,1,6),a:n-k})))}},
{title:'Есепте және салыстыр.',build(b,T){K.fill(b,T,{fs:50,rows:[[3,'л','+',4,'л','=',null,'л'],[10,'л','-',6,'л','=',null,'л'],[2,'л','+',3,'л','s',6,'л'],[9,'л','-',4,'л','s',5,'л'],[7,'л','-',2,'л','s',4,'л']],ans:[[7],[4],['<'],['='],['>']]})}}
],
duel:{title:'Қай ыдыста көп?',gen(){const a=rnd(1,10);let c=rnd(1,10);if(Math.random()<.2)c=a;const V=['🪣','🫖','🍲','🧴','🫙'];const [x,y]=shuffle(V);
 return{q:`<div style="display:flex;gap:40px;align-items:flex-end">${lab(E(x,64),a+' л')}${lab(E(y,64),c+' л')}</div>`,o:[x,y,'Тең'],a:a>c?x:a<c?y:'Тең',oh:v=>v==='Тең'?'<b style="font-size:30px;padding:4px 10px">Тең</b>':E(v,52)}}},
games:[
 GM.quiz({icon:'🪣',title:'🪣 Ыдыста неше литр?',gen:()=>{const n=rnd(1,10),H=320;return{q:`<div style="position:relative;width:240px;height:${H}px">${glass(150,H,n/10,10)}${[...Array(10)].map((_,i)=>`<span style="position:absolute;left:160px;top:${H-6-(i+1)*(H-14)/10-12}px;font-size:20px;font-weight:900;color:#1565c0">${i+1} л</span>`).join('')}</div>`,o:near(n,1,10),a:n}}}),
 GM.memory({title:'🧩 Мысал мен жауабын жұпта',pairs:()=>shuffle([['2 л + 6 л','8 л'],['9 л − 5 л','4 л'],['5 л + 2 л','7 л'],['10 л − 9 л','1 л'],['3 л + 3 л','6 л'],['7 л − 5 л','2 л']]).slice(0,5).map(([a,c])=>[`<b style="font-size:28px">${a}</b>`,`<b style="font-size:38px;color:#1e63d6">${c}</b>`])})]
});
})();
