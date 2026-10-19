/* neuroUstaz · 2–4-сынып Қазақ тілі: ортақ ойын құралдары */
const KT=(t,fs=44)=>`<div style="font-size:${fs}px;font-weight:900;line-height:1.3;text-align:center;max-width:1150px">${t}</div>`;
const KH=t=>`<div style="font-size:26px;font-weight:800;color:var(--mut);margin-top:8px">${t}</div>`;
const KB=v=>`<span style="font-size:${String(v).length>14?28:36}px;font-weight:900;padding:4px 12px">${v}</span>`;
const KPK=a=>a[rnd(0,a.length-1)];
const KLV=(a,lv)=>{const f=a.filter(x=>(x.d||1)<=lv);return f.length>=3?f:a};
const KN=lv=>lv===1?2:lv===2?3:4;
/* сөздегі әріпті бояу */
const HL=(w,part,c='#e53935')=>{const i=w.indexOf(part);return i<0?w:w.slice(0,i)+`<span style="color:${c};text-decoration:underline">${part}</span>`+w.slice(i+part.length)};
/* банк сұрақтары: {q,a,o:[қате],e?,d?} */
const KQ=B=>lv=>{const x=KPK(KLV(B,lv));const n=KN(lv)+1;return{q:(x.e?PIC(x.e,lv===3?80:100):'')+KT(x.q,x.q.length>70?32:x.q.length>40?38:44),o:shuffle([x.a,...shuffle(x.o).slice(0,n-1)]),a:x.a,oh:KB}};
/* топқа жатқызу: [сөз, топ, деңгей?, эмодзи?] */
const KS=(q,cats,items,{fs=72,show}={})=>lv=>{const x=KPK(KLV(items.map(i=>({w:i[0],c:i[1],d:i[2]||1,e:i[3]})),lv));
  const o=cats.length>2&&lv===1?shuffle([x.c,KPK(cats.filter(c=>c!==x.c))]):cats;
  return{q:(x.e?PIC(x.e,90):'')+W(show?show(x.w):x.w,x.w.length>80?30:x.w.length>50?34:x.w.length>24?42:x.w.length>12?54:fs)+KH(q),o,a:x.c,oh:KB}};
/* сұрыптау себеттері */
const KBINS=(title,bins,items,{n=6,rounds=4}={})=>(box,T,lv)=>ROUNDS(box,rounds,(b,k,hd)=>{hd.innerHTML=title;
  const L=KLV(items.map(i=>({w:i[0],c:i[1],d:i[2]||1})),lv);const cnt=Math.min(L.length,lv===1?n-2:lv===2?n:n+2);const sel=[];
  for(const bn of bins){let p=L.filter(x=>x.c===bn.id&&!RSEEN.has('B'+x.w));if(!p.length)p=L.filter(x=>x.c===bn.id);if(p.length)sel.push(KPK(p))}
  for(const pool of [L.filter(x=>!RSEEN.has('B'+x.w)),L]){const r=shuffle(pool.filter(x=>!sel.includes(x)));while(sel.length<cnt&&r.length)sel.push(r.pop())}
  sel.forEach(x=>RSEEN.add('B'+x.w));
  K.bins(b,T,{items:sel.map(x=>({h:`<span style="font-size:${x.w.length>9?22:30}px;font-weight:900;padding:0 8px;line-height:1.15">${x.w}</span>`,bin:x.c})),bins,title:''})},{title:''});
/* сызықпен жұптастыр */
const KMATCH=(title,pairs,{rounds=4}={})=>(box,T,lv)=>ROUNDS(box,rounds,(b,k,hd)=>{hd.innerHTML=title;const n=L3(lv,3,4,5);
  const av=pairs.filter(p=>!RSEEN.has('M'+p[0]));const sel=pick(av.length>=n?av:pairs,n);sel.forEach(p=>RSEEN.add('M'+p[0]));
  const H=s=>`<span style="font-size:${s.length>14?22:s.length>9?26:32}px;font-weight:900;line-height:1.2;text-align:center">${s}</span>`;
  K.match(b,T,{L:sel.map((p,i)=>({h:H(p[0]),k:String(i)})),R:sel.map((p,i)=>({h:H(p[1]),k:String(i)})),cw:230,ch:110,gap:22,title:''})},{title:''});
/* жұп тап (жады) */
const KMEM=(title,pairs)=>(box,T,lv)=>GM.memory({title,pairs:()=>pick(pairs,lv===1?4:lv===2?6:8).map(([a,b])=>[`<div style="font-size:${a.length>8?26:36}px;font-weight:900;text-align:center;line-height:1.15">${a}</div>`,`<div style="font-size:${b.length>8?26:36}px;font-weight:900;text-align:center;line-height:1.15;color:#1e88e5">${b}</div>`])}).build(box,T);
/* ұстап ал */
const KCH=w=>`<div style="font-size:${w.length>10?24:w.length>6?30:40}px;font-weight:900;text-align:center;line-height:1.15;padding:6px">${w}</div>`;
const KCATCH=(title,good,bad)=>(box,T,lv)=>GM.catcher({icon:'🧲',sec:L3(lv,35,30,25),title,good:()=>KCH(KPK(good)),bad:()=>KCH(KPK(bad))}).build(box,T);
/* қатені тап: [дұрыс сөйлем, қате сөз, дұрыс сөз] */
const KERR=(title,items,rounds=5)=>(box,T,lv)=>ROUNDS(box,rounds,(b,k,hd)=>{const x=pkU(items);hd.innerHTML=title;
  b.style.flexDirection='column';b.style.alignItems='center';b.style.justifyContent='center';b.style.gap='40px';
  const clean=s=>s.replace(/[.,!?—«»:]/g,'');const ws=x[0].split(' ').map(w=>clean(w)===x[2]?w.replace(x[2],x[1]):w);
  const row=el('div','');row.style.cssText='display:flex;flex-wrap:wrap;gap:14px;justify-content:center;max-width:1300px';
  const fix=el('div','');fix.style.cssText='font-size:40px;font-weight:900;color:#2e7d32;min-height:56px';
  ws.forEach(w=>{const t=el('button','tile wide',w);t.style.fontSize='44px';t.style.height='auto';t.style.padding='12px 22px';
    t.onclick=()=>{if(row.dataset.done)return;if(clean(w)===x[1]){row.dataset.done=1;T.ok(t);t.textContent=w.replace(x[1],x[2]);t.style.background='#e6f8ef';fix.innerHTML=`✓ ${x[1]} → <u>${x[2]}</u>`;T.later(()=>T.done(),1400)}else T.bad(t)};row.append(t)});
  b.append(row,fix);T.reveal=()=>[...row.children].forEach(t=>{if(clean(t.textContent)===x[1])t.classList.add('hint')})},{title:''});
/* ретімен қой (сөйлемдер, мәтін бөліктері) */
const KORD=(title,seqs,rounds=4)=>(box,T,lv)=>ROUNDS(box,rounds,(b,k,hd)=>{const S=pkU(seqs);hd.innerHTML=title;
  K.order(b,T,{items:S.map(s=>({h:`<div style="font-size:${s.length>40?22:26}px;font-weight:800;line-height:1.3;max-width:300px;padding:6px">${s}</div>`})),title:''})},{title:''});

/* ===== Сан есім генераторлары ===== */
const NU=['','бір','екі','үш','төрт','бес','алты','жеті','сегіз','тоғыз'],NTn=['','он','жиырма','отыз','қырық','елу','алпыс','жетпіс','сексен','тоқсан'];
const KNW=n=>n===0?'нөл':n>=1000?'мың'+(n>1000?' '+KNW(n-1000):''):n>=100?(n>=200?NU[Math.floor(n/100)]+' ':'')+'жүз'+(n%100?' '+KNW(n%100):''):[NTn[Math.floor(n/10)],NU[n%10]].filter(Boolean).join(' ');
const ORDW={бір:'бірінші',екі:'екінші',үш:'үшінші',төрт:'төртінші',бес:'бесінші',алты:'алтыншы',жеті:'жетінші',сегіз:'сегізінші',тоғыз:'тоғызыншы',он:'оныншы',жиырма:'жиырмасыншы',отыз:'отызыншы',қырық:'қырқыншы',елу:'елуінші',алпыс:'алпысыншы',жетпіс:'жетпісінші',сексен:'сексенінші',тоқсан:'тоқсаныншы',жүз:'жүзінші',мың:'мыңыншы'};
const KORDN=n=>{const w=KNW(n).split(' ');w[w.length-1]=ORDW[w[w.length-1]];return w.join(' ')};
/* ===== Көптік жалғау ===== */
const KV='аәеиоөұүыіэюя',KFRONT='әеөүіэ';
const PLS=w=>{const c=w[w.length-1];const vs=[...w].filter(x=>'аәеоөұүыіэи'.includes(x));const fr=(KFRONT+'и').includes(vs[vs.length-1]||'а');
  const base=KV.includes(c)||'руй'.includes(c)?'л':'лмнңзж'.includes(c)?'д':'т';return base+(fr?'ер':'ар')};
const PL=w=>w+PLS(w);
