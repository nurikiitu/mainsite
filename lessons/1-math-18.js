/* 1-сынып · Математика · 18-сабақ · 9 саны және цифры (оқулық 40–41-бет) */
(function(){
const ci=c=>`<span style="display:inline-block;width:30px;height:30px;border-radius:50%;background:${c}"></span>`;
LESSON({
goal:'9 саны және цифрымен танысасың.',
introExtra(w,T){K.introNum(w,T,9,'🔵')},
book:[
{num:1,title:'Суретте қай заттар тоғыз-тоғыздан бейнеленген?',build(b,T){
 const items=[...[0,1,2,3,4,5,6,7,8].map(i=>({e:['🔴','🔵'][i%2],x:52+Math.cos(Math.PI*(1-i/8))*20,y:24-Math.sin(Math.PI*i/8)*14,s:30,t:'dot'})),
  ...[0,1,2,3,4,5,6,7,8].map(i=>({e:'🪣',x:4+i*4.2,y:30,s:26,t:'cup'})),...[0,1,2,3,4,5,6,7,8].map(i=>({e:'🎨',x:30+(i%3)*22+rnd(-2,2),y:i<3?60:i<6?76:90,s:36,t:'pal'})),
  {e:'🕘',x:30,y:10,s:56,t:'cl'},{e:'🖼️',x:10,y:10,s:56,t:'pic'},{e:kid(1,'#1e2a8a','#3e2723',0,1,1),x:62,y:44,t:'te'}];
 const deco='<div style="position:absolute;left:36%;top:4%;width:42%;height:34%;background:#fff;border:8px solid #2e7d32;border-radius:6px"></div><div style="position:absolute;left:1%;top:36%;width:38%;height:30%;background:#e3c9a0;border-radius:6px"></div>';
 K.findTypes(b,T,{bg:'linear-gradient(#b2dfdb 0 48%,#eceff1 48%)',items,deco,good:['dot','cup','pal'],q:'Қай заттар тоғыз-тоғыздан? Соларды бас!',msgBad:t=>({cl:'Сағат – біреу',pic:'Сурет – біреу',te:'Мұғалім – біреу'}[t]),
  after:side=>T.series(side,[
   {q:'<div style="font-size:70px">📄📄</div><div class="qline" style="font-size:28px">Сырым екі түрлі түсті парақты ортасынан екі рет бүктеді. Әр парақтан 4 дөңгелек қиып алды. Неше дөңгелек шықты?</div>',o:[6,7,8,9],a:8},
   {q:`<div>${ci('#e53935').repeat(8)}</div><div class="qline" style="font-size:30px">9 дөңгелек болу үшін неше дөңгелек жетпейді?</div>`,o:[1,2,3],a:1}])})}},
{num:2,label:'ӨЗІНДІК ЖҰМЫС',k:'self',title:'Сандардың қосындысы мен айырмасын құрастыр.',build(b,T){
 K.fillGroups(b,T,{fs:38,gap:22,vals:[0,1,2,3,4,5,6,7,8,9],groups:[[8,1],[7,2],[6,3],[5,4]].map(([a,c])=>({pic:`<div>${ci('#e53935').repeat(a)}${ci('#29b6f6').repeat(c)}</div>`.replace(/30px/g,'20px'),rows:[[a,'+',null,'=',9],[null,'+',a,'=',9],[9,'-',a,'=',null],[9,'-',c,'=',null]],ans:[[c],[c],[c],[a]]}))})}},
{num:3,label:'ЖҰПТЫҚ ЖҰМЫС',k:'pair',title:'Заттарды сана. Олардың санын салыстыр және жаз.',build(b,T){col(b,14,'center');
 b.append(el('div','',`<div style="display:flex;gap:26px">${[['🥤',6],['🖌️',9],['✂️',5]].map(([e,n])=>`<div class="grp" style="width:300px;font-size:52px">${e.repeat(n)}</div>`).join('')}</div>`));
 const r=el('div','');b.append(r);K.fill(r,T,{fs:52,vals:[0,1,2,3,4,5,6,7,8,9],rows:[[null,'>',null],[null,'<',null],[null,'>',null]],ans:[[9,6],[5,6],[6,5]],pics:['🖌️ – 🥤','✂️ – 🥤','🥤 – ✂️'].map(x=>`<div style="width:160px;font-size:40px">${x}</div>`)})}},
{num:4,label:'СЕН ЗЕРТТЕУШІСІҢ',k:'res',title:'Бос орындарға тиісті сандарды ата. Өзің 10-нан 1-ге дейінгі сандар қатарын құрастыр.',build(b,T){K.seq(b,T,{rounds:[{q:'10-нан 1-ге дейін',seq:[10,9,8,7,6,5,4,3,2,1],miss:[2,3,6,7],from:0,to:10},{q:'Енді өзің: 10-нан 1-ге дейін толық құрастыр',seq:[10,9,8,7,6,5,4,3,2,1],miss:[0,1,2,3,4,5,6,7,8,9],from:1,to:10}]})}}
],
extra:[
{title:'9 санының үйін толтыр.',build(b,T){b.style.justifyContent='center';const h=el('div','');K.house(h,T,{n:9,pairs:[1,2,3,4,5,6,7,8].map((a,i)=>[a,9-a,i%2])});b.append(h)}},
{title:'Мәтінді есептер.',build(b,T){col(b,10,'center');T.series(b,[
 {q:'<div style="font-size:70px">🖍️</div><div class="qline">Қорапта 9 бор бар еді. Мұғалім 3 борды алды. Неше бор қалды?</div>',o:[5,6,7],a:6},
 {q:'<div style="font-size:70px">✂️</div><div class="qline">Сыныпта 5 қайшы бар. Тағы 4 қайшы әкелді. Неше қайшы болды?</div>',o:[8,9,10],a:9},
 {q:'<div style="font-size:70px">🎨</div><div class="qline">9 оқушыға 9 бояу керек. 7 бояу бар. Неше бояу жетпейді?</div>',o:[1,2,3],a:2},
 {q:'<div style="font-size:70px">📄</div><div class="qline">Бір парақты екі рет бүктесе, неше қабат болады?</div>',o:[2,3,4],a:4}])}},
{title:'Тізбек: есепте.',build(b,T){K.chain(b,T,{chains:[[9,[-2,-3,4,1,-6]],[1,[2,3,3,-5,6]]]})}}
],
duel:{title:'9-ға дейін санау: кім жылдам?',gen:DG.digit(9)},
games:[GM.balloons({from:1,to:9}),GM.train({max:9,len:6})]
});
})();
