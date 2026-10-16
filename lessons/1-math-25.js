/* 1-сынып · Математика · 25-сабақ · Фигуралар. Сәуле. Кесінді (оқулық 54–55-бет) */
(function(){
const ray=`<svg width="300" height="80" viewBox="0 0 300 80"><circle cx="20" cy="40" r="8" fill="#1e2a44"/><path d="M20 40 H285" stroke="#1e63d6" stroke-width="6"/><path d="M270 30 L290 40 L270 50" stroke="#1e63d6" stroke-width="6" fill="none"/></svg>`;
const seg=`<svg width="300" height="80" viewBox="0 0 300 80"><circle cx="30" cy="40" r="8" fill="#1e2a44"/><circle cx="270" cy="40" r="8" fill="#1e2a44"/><path d="M30 40 H270" stroke="#e53935" stroke-width="6"/></svg>`;
const lin=`<svg width="300" height="80" viewBox="0 0 300 80"><path d="M5 40 H295" stroke="#43a047" stroke-width="6"/><path d="M20 30 L4 40 L20 50 M280 30 L296 40 L280 50" stroke="#43a047" stroke-width="6" fill="none"/></svg>`;
const S=(t,c,s=70)=>SHP(t,c,s);
const tri=(a,c,t)=>`<div style="position:relative;width:150px;height:130px;border-radius:50%;border:4px solid #a5d6a7;background:#fff"><b style="position:absolute;left:18px;top:18px;width:46px;height:46px;border-radius:50%;background:#fb8c00;color:#fff;display:grid;place-items:center;font-size:24px">${a}</b><b style="position:absolute;right:18px;top:18px;width:46px;height:46px;border-radius:50%;background:#1e88e5;color:#fff;display:grid;place-items:center;font-size:24px">${c}</b><b style="position:absolute;left:52px;bottom:12px;width:46px;height:46px;border-radius:50%;background:#e53935;color:#fff;display:grid;place-items:center;font-size:24px">${t}</b></div>`;
LESSON({
goal:'Геометриялық фигуралармен танысасың: сәуле мен кесінді.',
introExtra(w){w.append(el('div','',`<div style="display:flex;gap:30px;align-items:center;text-align:center;font-size:26px;font-weight:900">${[[lin,'Түзу'],[ray,'Сәуле'],[seg,'Кесінді']].map(([s,t])=>`<div>${s}<div>${t}</div></div>`).join('')}</div>`))},
book:[
{rem:{title:'Сәуле мен кесінді',build(b,T){b.style.flexDirection='column';b.style.gap='16px';b.style.justifyContent='center';
 const row=(h,t,svg)=>`<div style="display:flex;align-items:center;gap:30px;background:#fff6ea;border:3px solid #f5cfa6;border-radius:20px;padding:14px 24px"><div style="font-size:28px;line-height:1.35;flex:1"><b style="color:#d9792b">${h}</b> – ${t}</div>${svg}</div>`;
 b.insertAdjacentHTML('beforeend',row('Сәуле','түзудің бір нүктесінен басталып, осы нүктенің бір жағында жататын және осы нүктені де қамтитын бөлігі.',ray)+row('Кесінді','түзудің екі нүктесінің аралығында жататын және осы екі нүктені де қамтитын бөлігі.',seg))}},
 num:1,title:'Тапсырманы орында. Қағаз бетіне нүкте қой. Сәуле жүргіз. Екі нүкте қой. Түзу сызық арқылы қос.',build(b,T){
 const L=el('div','');L.style.cssText='display:flex;flex-direction:column;gap:20px;align-items:center;justify-content:center;flex:none;width:520px';b.append(L);
 L.append(el('div','goal','<span>✏️ ТАҚТАДА</span>1) Нүкте қой да, сәуле жүргіз.<br>2) Екі нүкте қой да, оларды кесіндімен қос.'));const pb=el('button','btn','✏️ Қаламды алу');pb.onclick=()=>T.pen();L.append(pb);
 const R=el('div','side');b.append(R);T.series(R,shuffle([{q:ray,a:'Сәуле'},{q:seg,a:'Кесінді'},{q:lin,a:'Түзу'},{q:ray.replace('M20 40 H285','M20 40 H285').replace('cx="20"','cx="20"').replace('<svg','<svg style="transform:scaleX(-1)"'),a:'Сәуле'},{q:seg.replace('M30 40 H270','M30 40 H200').replace('cx="270"','cx="200"'),a:'Кесінді'}]).map(x=>({...x,q:x.q+'<div class="qline">Бұл не?</div>',o:['Түзу','Сәуле','Кесінді']})),{optHtml:v=>`<span style="font-size:32px">${v}</span>`})}},
{num:2,label:'ЖҰПТЫҚ ЖҰМЫС',k:'pair',title:'Қай фигуралар тең? Қандай түсті фигуралар тең?',build(b,T){
 const top=[S('square','#1e63d6'),S('triangle','#fb8c00'),S('square','#43a047'),S('circle','#43a047'),S('triangle','#1e63d6'),S('circle','#29b6f6')];
 const sg='<svg width="80" height="60" viewBox="0 0 80 60"><path d="M8 12 L72 48" stroke="#43a047" stroke-width="5"/><circle cx="8" cy="12" r="5" fill="#43a047"/><circle cx="72" cy="48" r="5" fill="#43a047"/></svg>';
 const bot=[S('circle','#ec407a'),sg,S('triangle','#f8bbd0'),sg,S('triangle','#ec407a'),sg,S('circle','#fde047'),sg];
 const P=el('div','');P.style.cssText='display:flex;flex-direction:column;gap:10px;flex:none';P.innerHTML=`<div class="grp" style="width:760px;gap:22px">${top.join('')}</div><div class="grp" style="width:760px;gap:12px">${bot.join('')}</div>`;b.append(P);
 const R=el('div','side');b.append(R);T.series(R,[{q:'<div class="qline">1-жолда неше шаршы бар?</div>',o:[1,2,3],a:2},{q:'<div class="qline">1-жолда шаршы, үшбұрыш, дөңгелек саны тең бе?</div>',o:['Иә, тең','Жоқ'],a:'Иә, тең'},{q:'<div class="qline">1-жолда неше жасыл фигура бар?</div>',o:[1,2,3],a:2},
  {q:'<div class="qline">2-жолда неше кесінді бар?</div>',o:[2,3,4,5],a:4},{q:'<div class="qline">2-жолда үшбұрыш пен дөңгелек саны тең бе?</div>',o:['Иә, тең','Жоқ'],a:'Иә, тең'}],{optHtml:v=>`<span style="font-size:30px">${v}</span>`})}},
{num:3,label:'СЕН ЗЕРТТЕУШІСІҢ',k:'res',title:'Әр қатардағы фигуралар қандай белгісі бойынша жинақталған?',build(b,T){
 const R=[[S('circle','#e53935',60),S('square','#1e63d6',60),S('circle','#43a047',60),S('triangle','#fdd835',60)],[S('triangle','#43a047',90),S('triangle','#1e63d6',90),S('triangle','#e53935',90),S('triangle','#43a047',90)],
  [S('triangle','#1e63d6',90),S('square','#1e63d6',90),S('square','#1e63d6',90),S('square','#1e63d6',90)],[S('square','#1e63d6',90),S('square','#43a047',50),S('square','#e53935',90),S('square','#fdd835',90)]];
 const P=el('div','');P.style.cssText='display:flex;flex-direction:column;gap:6px;flex:none';R.forEach((r,i)=>P.insertAdjacentHTML('beforeend',`<div style="display:flex;align-items:center;gap:10px"><b style="font-size:28px;width:40px">${i+1}.</b><div class="grp" style="width:520px;height:110px;gap:30px;align-items:center">${r.join('')}</div></div>`));b.append(P);
 const side=el('div','side');b.append(side);
 T.series(side,[{q:'<div class="qline">1-қатар: қандай белгі ортақ?</div>',a:'Өлшемі'},{q:'<div class="qline">2-қатар: қандай белгі ортақ?</div>',a:'Пішіні'},{q:'<div class="qline">3-қатар: қандай белгі ортақ?</div>',a:'Түсі'},{q:'<div class="qline">4-қатар: қандай белгі ортақ?</div>',a:'Пішіні'}].map(x=>({...x,o:['Пішіні','Түсі','Өлшемі']})),{optHtml:v=>`<span style="font-size:30px">${v}</span>`,end:()=>{T.done();side.append(el('div','goal','<span>ЕНДІ ӨЗІҢ</span>Тақтаға бір белгі бойынша 4 фигура сал ✏️'))}})}},
{num:4,title:'Қосуға екі мысал және азайтуға екі мысал құрастыр және жаз.',build(b,T){
 K.fillGroups(b,T,{fs:38,gap:30,vals:[0,1,2,3,4,5,6,7,8,9,10],groups:[[5,2,7],[4,2,6],[1,3,4]].map(([a,c,t])=>({pic:tri(a,c,t),rows:[[a,'+',c,'=',null],[c,'+',a,'=',null],[t,'-',a,'=',null],[t,'-',c,'=',null]],ans:[[t],[t],[c],[a]]}))})}}
],
extra:[
{title:'Неше кесінді? Санап көр.',build(b,T){col(b,10,'center');const F=[['<svg width="260" height="200" viewBox="0 0 260 200"><path d="M20 180 L130 20 L240 180Z" fill="none" stroke="#1e63d6" stroke-width="6"/></svg>',3],['<svg width="260" height="200" viewBox="0 0 260 200"><rect x="30" y="30" width="200" height="140" fill="none" stroke="#1e63d6" stroke-width="6"/></svg>',4],
 ['<svg width="260" height="200" viewBox="0 0 260 200"><rect x="30" y="30" width="200" height="140" fill="none" stroke="#1e63d6" stroke-width="6"/><path d="M30 30 L230 170" stroke="#1e63d6" stroke-width="6"/></svg>',5],['<svg width="260" height="200" viewBox="0 0 260 200"><path d="M20 100 L80 30 L140 100 L200 30 L250 100" fill="none" stroke="#1e63d6" stroke-width="6"/></svg>',4]];
 T.series(b,F.map(([s,n])=>({q:s+'<div class="qline">Неше кесіндіден тұрады?</div>',o:near(n,1,8),a:n})))}},
{title:'Сәулелерді ғана тап.',build(b,T){const tiles=[{h:ray,ok:1},{h:ray.replace('<svg','<svg style="transform:rotate(30deg)"'),ok:1},{h:ray.replace('<svg','<svg style="transform:scaleX(-1)"'),ok:1},{h:seg,ok:0},{h:lin,ok:0},{h:seg.replace('<svg','<svg style="transform:rotate(-20deg)"'),ok:0}];
 K.pickAll(b,T,{tiles:tiles.map(t=>({...t,h:t.h.replace('width="300" height="80"','width="240" height="64"')})),cols:3,size:250,title:'Бір жағынан басталып, екінші жағы шексіз созылатын сызықтар'})}},
{title:'Ортақ белгіні тап: артық фигураны бас.',build(b,T){col(b,10,'center');const Q=[[[S('triangle','#e53935',90),S('triangle','#1e63d6',90),S('circle','#43a047',90),S('triangle','#fdd835',90)],2],[[S('square','#e53935',90),S('circle','#e53935',90),S('triangle','#e53935',90),S('square','#1e63d6',90)],3],[[S('circle','#43a047',100),S('square','#43a047',100),S('triangle','#43a047',40),S('circle','#e53935',100)],2]];
 T.series(b,Q.map(([fs,k])=>({q:'<div class="qline">Қай фигура артық?</div>',o:fs.map((_,i)=>i),a:k,optHtml:i=>fs[i]})))}}
],
duel:{title:'Түзу, сәуле әлде кесінді?',gen(){const k=rnd(0,2);return{q:[lin,ray,seg][k],o:['Түзу','Сәуле','Кесінді'],a:['Түзу','Сәуле','Кесінді'][k],oh:v=>`<span style="font-size:28px;padding:6px 10px">${v}</span>`}}},
games:[GM.catcher({icon:'🎯',title:'🎯 Тек КЕСІНДІНІ аула!',good:()=>seg.replace('width="300" height="80"','width="180" height="48"'),bad:()=>[ray,lin][rnd(0,1)].replace('width="300" height="80"','width="180" height="48"')}),
 GM.quiz({icon:'🔷',title:'🔷 Белгісін тап: пішіні, түсі ме, өлшемі ме?',gen:()=>{const k=rnd(0,2);const C=['#e53935','#1e63d6','#43a047','#fdd835'],Tt=['circle','square','triangle'];let fs;
  if(k===0){const t=Tt[rnd(0,2)];fs=shuffle(C).slice(0,3).map(c=>S(t,c,90))}else if(k===1){const c=C[rnd(0,3)];fs=shuffle(Tt).map(t=>S(t,c,90))}else{fs=Tt.map((t,i)=>S(t,C[i],70))}
  return{q:`<div style="display:flex;gap:30px;align-items:center">${fs.join('')}</div><div class="qline">Бұл фигуралардың ортақ белгісі қандай?</div>`,o:['Пішіні','Түсі','Өлшемі'],a:['Пішіні','Түсі','Өлшемі'][k],oh:v=>`<span style="font-size:30px">${v}</span>`}}})]
});
})();
