/* 1-сынып · Математика · 9-сабақ · 5 саны және цифры. 5 санының құрамы (оқулық 22–23-бет) */
(function(){
const xe=(e,fs=44)=>`<span style="position:relative;display:inline-block;font-size:${fs}px"><span style="opacity:.45">${e}</span><b style="position:absolute;left:44%;top:-14%;width:7px;height:128%;background:#222;transform:rotate(-45deg);border-radius:3px"></b></span>`;
const ee=(e,n,fs=44,c='')=>`<span style="font-size:${fs}px;white-space:nowrap;${c}">${e.repeat(n)}</span>`;
const exp=(t,j,st)=>`<div style="display:flex;align-items:center;gap:14px"><span style="font-size:44px;font-weight:900;white-space:nowrap">${t}</span><div style="width:300px;height:110px;overflow:hidden"><div style="transform:scale(.62);transform-origin:0 0">${nline(5,j,st,440)}</div></div></div>`;
LESSON({
goal:'5 саны және цифрымен танысасың.',
introExtra(w,T){K.introNum(w,T,5,'✏️')},
book:[
{num:1,title:'Әр суретке сәйкес сандардың қосындысын немесе айырмасын таңда.',build(b,T){
 K.match(b,T,{title:'Суретті бас, сосын оның өрнегін бас',cw:400,cw2:460,ch:118,gap:12,side:true,
  L:[{h:'<div style="display:flex">'+ee('✏️',3)+ee('🖍️',2)+'</div>',k:'a'},{h:`<div style="display:flex;flex-wrap:nowrap;transform:scale(.8)">${ICO.eraser.repeat(4)}<span style="filter:hue-rotate(110deg)">${ICO.eraser}</span></div>`,k:'b'},{h:'<div style="display:flex">'+ee('🖊️',4)+xe('🖊️')+'</div>',k:'c'},{h:'<div style="display:flex">'+ee('🖍️',3)+xe('🖍️')+xe('🖍️')+'</div>',k:'d'}],
  R:[{h:exp('2 + 3',[3],2),k:'a'},{h:exp('1 + 4',[4],1),k:'b'},{h:exp('5 − 1',[-1],5),k:'c'},{h:exp('5 − 2',[-2],5),k:'d'}]})}},
{rem:{title:'5 санының құрамы',build(b,T){col(b,20,'center');b.append(el('div','',`<div style="display:flex;gap:80px;align-items:center">${houseView(5,[[1,4],[2,3],[3,2],[4,1]])}<div style="font-size:50px;font-weight:900;line-height:1.45">5 = 1 + 4<br>5 = 2 + 3<br>5 = 3 + 2<br>5 = 4 + 1</div></div>`))}},
 num:2,title:'5 санының құрамын айт. Есепте.',build(b,T){
 K.fill(b,T,{fs:48,vals:[0,1,2,3,4,5],rows:[[1,'+',4,'=',null],[5,'-',4,'=',null],[5,'-',1,'=',null],[3,'+',2,'=',null],[5,'-',2,'=',null],[5,'-',3,'=',null]],ans:[[5],[1],[4],[5],[3],[2]],
  pics:[bar(4,1,38),bar(4,1,38),bar(4,1,38),bar(2,3,38),bar(2,3,38),bar(2,3,38)].map(x=>`<div style="width:260px;display:flex;justify-content:flex-end">${x}</div>`)})}},
{num:3,label:'ЖҰПТЫҚ ЖҰМЫС',k:'pair',title:'Балалардың қалай есептегенін айт.',build(b,T){col(b,10,'center');T.series(b,[
 {q:`<div>${nline(5,[1,2],2)}</div><div class="qline" style="font-size:46px">2 + 3 = 2 + 1 + 2 = ?</div>`,o:[3,4,5],a:5},
 {q:`<div>${nline(5,[-1,-2],5)}</div><div class="qline" style="font-size:46px">5 − 3 = 5 − 1 − 2 = ?</div>`,o:[1,2,3],a:2},
 {q:`<div>${nline(5,[2,2],1)}</div><div class="qline" style="font-size:46px">1 + 4 = 1 + 2 + 2 = ?</div>`,o:[3,4,5],a:5},
 {q:`<div>${nline(5,[-2,-2],5)}</div><div class="qline" style="font-size:46px">5 − 4 = 5 − 2 − 2 = ?</div>`,o:[0,1,2],a:1},
 {q:`<div>${nline(5,[1,1,1],2)}</div><div class="qline" style="font-size:46px">2 + 1 + 1 + 1 = ?</div>`,o:[3,4,5],a:5}])}},
{num:4,label:'ӨЗІНДІК ЖҰМЫС',k:'self',title:'Есепте.',build(b,T){K.notebook(b,T,{vals:[0,1,2,3,4,5],rows:[[4,'+',1,'=',null],[5,'-',1,'=',null],[3,'+',2,'=',null],[5,'-',3,'=',null]],ans:[[5],[4],[5],[2]]})}},
{num:5,label:'ТОПТЫҚ ЖҰМЫС',k:'pair',title:'Жапырақтарға 1-ден 5-ке дейінгі сандарды жаз. Достарыңмен бірге сан жазылған бір жапырақтан ал. Қатарға реті бойынша тұрыңдар.',build(b,T){
 const leaf=n=>`<div style="position:relative;width:130px;height:130px"><span style="font-size:120px;line-height:1;position:absolute;inset:0">🍁</span><b style="position:absolute;inset:0;display:grid;place-items:center;font-size:52px;color:#5d2e00;padding-top:6px">${n}</b></div>`;
 K.order(b,T,{title:'Жапырақтарды 1-ден 5-ке дейін ретімен бас',items:[1,2,3,4,5].map(n=>({h:leaf(n)}))})}}
],
extra:[
{title:'5 санының үйін толтыр.',build(b,T){b.style.justifyContent='center';const h=el('div','');K.house(h,T,{n:5,pairs:[[0,5,1],[1,4,0],[2,3,1],[3,2,0],[4,1,1],[5,0,0]]});b.append(h)}},
{title:'Кері ретпен: 5-тен 0-ге дейін санаймыз.',build(b,T){K.seq(b,T,{rounds:[{q:'5-тен 0-ге дейін кері сана',seq:[5,4,3,2,1,0],miss:[1,3],from:0,to:5},{q:'0-ден 5-ке дейін тура сана',seq:[0,1,2,3,4,5],miss:[2,4,5],from:0,to:5},{q:'5-тен 0-ге дейін кері сана',seq:[5,4,3,2,1,0],miss:[0,2,5],from:0,to:5}]})}},
{title:'Мәтінді есептер.',build(b,T){col(b,10,'center');T.series(b,[
 {q:'<div style="font-size:80px">🐥🐥🐥 ➕ 🐥🐥</div><div class="qline">Аулада 3 балапан жүр еді. Тағы 2 балапан келді. Неше балапан болды?</div>',o:[3,4,5],a:5},
 {q:'<div style="font-size:80px">🍪🍪🍪🍪🍪</div><div class="qline">Табақта 5 печенье бар. Дана 2 печенье жеді. Неше печенье қалды?</div>',o:[2,3,4],a:3},
 {q:'<div style="font-size:80px">✋</div><div class="qline">Бір қолда 5 саусақ. 4 саусақты бүктік. Неше саусақ қалды?</div>',o:[0,1,2],a:1},
 {q:'<div style="font-size:80px">🚌</div><div class="qline">Автобуста 1 жолаушы отырды. Аялдамада 4 адам мінді. Неше жолаушы болды?</div>',o:[3,4,5],a:5}])}}
],
duel:{title:'5-ке дейін жылдам есептейік!',gen:DG.add(5)},
games:[
 GM.houses({nums:[4,5]}),
 GM.memory({title:'🧩 Өрнек пен оның жауабын жұпта',pairs:()=>[[['5 − 5','4 − 4'],0],[['5 − 4','3 − 2'],1],[['3 − 1','1 + 1'],2],[['5 − 2','2 + 1'],3],[['1 + 3','5 − 1'],4],[['2 + 3','4 + 1'],5]].map(([xs,v])=>[`<span style="font-size:44px;font-weight:900">${xs[rnd(0,1)]}</span>`,`<span style="font-size:80px;font-weight:900;color:#3b7dd8">${v}</span>`])})
]});
})();
