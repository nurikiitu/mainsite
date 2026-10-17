/* neuroUstaz · Жаратылыстану (1-сынып, Қаратабанов т.б., Алматыкітап 2023) — ортақ құралдар */
const JP=(e,fs=120)=>`<div style="font-size:${fs}px;line-height:1.05">${e}</div>`;
const JT=(t,fs=40)=>`<div style="font-size:${fs}px;font-weight:900;line-height:1.25;text-align:center;max-width:1100px">${t}</div>`;
const JO=v=>`<span style="font-size:34px;font-weight:900;padding:4px 10px">${v}</span>`;
const JPK=a=>a[rnd(0,a.length-1)];
const JN=lv=>lv===1?2:lv===2?3:4; /* жауап нұсқаларының саны */
const JLV=(arr,lv)=>{const f=arr.filter(x=>(x.d||1)<=lv);return f.length?f:arr};
const JPOP=e=>{try{e.animate([{transform:'scale(.6)'},{transform:'scale(1.12)'},{transform:'scale(1)'}],{duration:260})}catch(_){}};

/* банк сұрақтары: {q, a, o:[қате нұсқалар], e?, d?} → QZ/DU/TQ/RC үшін генератор */
const JQ=(B,{opts}={})=>(lv)=>{const x=JPK(JLV(B,lv));const wrong=shuffle(x.o||opts.filter(v=>v!==x.a)).slice(0,JN(lv)-1);
  return{q:(x.e?JP(x.e,lv===3?90:120):'')+JT(x.q,x.e?36:40),o:shuffle([x.a,...wrong]),a:x.a,oh:JO}};
/* сұрыптау: заттар [эмодзи, атауы, топ, деңгей] → «Қай топқа жатады?» */
const JS=(q,cats,items)=>(lv)=>{const x=JPK(JLV(items.map(i=>({e:i[0],t:i[1],c:i[2],d:i[3]||1})),lv));
  const n=Math.min(cats.length,Math.max(2,JN(lv)+(cats.length>3?0:1)));const o=shuffle([x.c,...pick(cats.filter(c=>c!==x.c),n-1)]);
  return{q:JP(x.e,130)+JT(x.t,44)+`<div style="font-size:26px;font-weight:800;color:#6b7590">${q}</div>`,o,a:x.c,oh:JO}};
/* жұп тап */
const JMEM=(title,pairs)=>(box,T,lv)=>GM.memory({title,pairs:()=>pick(pairs,lv===1?4:lv===2?6:8).map(([a,b])=>[`<div style="font-size:64px;line-height:1">${a}</div>`,`<div style="font-size:26px;font-weight:900;text-align:center">${b}</div>`])}).build(box,T);
/* ұстап ал */
const JCATCH=(title,good,bad)=>(box,T,lv)=>GM.catcher({icon:'🧲',sec:L3(lv,30,30,25),title,good:()=>{const g=JPK(good);return`<div style="text-align:center;line-height:1.1"><div style="font-size:88px">${g[0]}</div><div style="font-size:20px;font-weight:900">${lv===3?'':g[1]}</div></div>`},
  bad:()=>{const g=JPK(bad);return`<div style="text-align:center;line-height:1.1"><div style="font-size:88px">${g[0]}</div><div style="font-size:20px;font-weight:900">${lv===3?'':g[1]}</div></div>`}}).build(box,T);
/* ретімен қой: тізбектер [[эмодзи, атауы], ...] */
const JORD=(title,seqs)=>(box,T,lv)=>ROUNDS(box,5,(b,k,hd)=>{const S=JPK(seqs);const n=Math.min(S.length,L3(lv,3,4,5));
  let idx=[...S.keys()];if(n<S.length){idx=pick(idx,n).sort((a,c)=>a-c)}const seq=idx.map(i=>S[i]);
  hd.innerHTML=title;b.style.flexDirection='column';b.style.alignItems='center';b.style.justifyContent='space-around';
  const line=el('div','sline'),sl=seq.map((_,i)=>{const x=el('div','wslot',`<span style="opacity:.35">${i+1}</span>`);x.style.minWidth='170px';x.style.height='150px';line.append(x);return x});b.append(line);
  let f=0;const mark=()=>sl.forEach((x,i)=>x.classList.toggle('next',i===f));mark();
  const tiles=el('div','tiles');let ord=shuffle(seq.map((_,i)=>i));for(let g=0;g<20&&ord.every((v,i)=>v===i);g++)ord=shuffle(ord);
  ord.forEach(i=>{const [e,t]=seq[i];const tb=el('button','tile',`<div style="text-align:center;line-height:1.05"><div style="font-size:64px">${e}</div><div style="font-size:20px;font-weight:900">${t}</div></div>`);tb.style.height='150px';tb.style.minWidth='170px';
    tb.onclick=()=>{if(i!==f)return T.bad(tb);beep('tap');sl[f].innerHTML=tb.innerHTML;sl[f].className='wslot filled';sl[f].style.minWidth='170px';sl[f].style.height='150px';JPOP(sl[f]);tb.classList.add('used');f++;mark();if(f>=seq.length)T.done()};tiles.append(tb)});
  b.append(tiles);T.reveal=()=>{const t=[...tiles.children].find((x,j)=>ord[j]===f&&!x.classList.contains('used'));t&&t.classList.add('hint')}},{title});

/* --- суреттер (SVG) --- */
function plantSVG(hl){const c=p=>p===hl?'#ff7043':null;const glow=p=>p===hl?'filter="url(#gl)"':'';
  return `<svg viewBox="0 0 300 330" style="width:270px;height:300px"><defs><filter id="gl"><feDropShadow dx="0" dy="0" stdDeviation="5" flood-color="#ffeb3b"/></filter></defs>
  <rect x="0" y="230" width="300" height="100" fill="#a1887f" rx="10"/>
  <g ${glow('тамыр')} stroke="${c('тамыр')||'#6d4c41'}" stroke-width="6" fill="none" stroke-linecap="round"><path d="M150 232 L150 290"/><path d="M150 250 Q125 270 110 300"/><path d="M150 255 Q178 275 190 305"/><path d="M150 275 Q140 295 130 318"/><path d="M150 280 Q165 300 168 320"/></g>
  <path ${glow('сабақ')} d="M150 232 Q146 160 150 95" stroke="${c('сабақ')||'#388e3c'}" stroke-width="10" fill="none"/>
  <g ${glow('жапырақ')} fill="${c('жапырақ')||'#66bb6a'}"><path d="M148 185 Q100 150 70 170 Q100 205 148 190Z"/><path d="M152 150 Q205 115 235 135 Q205 170 152 155Z"/></g>
  <g ${glow('гүл')}>${[0,60,120,180,240,300].map(a=>`<ellipse cx="150" cy="58" rx="16" ry="34" fill="${c('гүл')||'#f06292'}" transform="rotate(${a} 150 82)"/>`).join('')}<circle cx="150" cy="82" r="17" fill="#ffca28"/></g></svg>`}
function bodySVG(hl){const f=p=>p===hl?'#ff7043':'#90caf9';const sk=p=>p===hl?'#ff7043':'#ffcc80';const g=p=>p===hl?'filter="url(#bg)"':'';
  return `<svg viewBox="0 0 240 360" style="width:220px;height:330px"><defs><filter id="bg"><feDropShadow dx="0" dy="0" stdDeviation="5" flood-color="#ffeb3b"/></filter></defs>
  <circle ${g('бас')} cx="120" cy="52" r="38" fill="${sk('бас')}"/><circle cx="106" cy="48" r="4" fill="#333"/><circle cx="134" cy="48" r="4" fill="#333"/><path d="M106 66 Q120 76 134 66" stroke="#333" stroke-width="3" fill="none"/>
  <rect ${g('мойын')} x="108" y="88" width="24" height="18" fill="${sk('мойын')}"/>
  <rect ${g('кеуде')} x="78" y="104" width="84" height="56" rx="14" fill="${f('кеуде')}"/>
  <rect ${g('іш')} x="80" y="158" width="80" height="50" rx="10" fill="${f('іш')==='#90caf9'?'#64b5f6':f('іш')}"/>
  <g ${g('қол')}><rect x="46" y="108" width="28" height="100" rx="13" fill="${sk('қол')}"/><rect x="166" y="108" width="28" height="100" rx="13" fill="${sk('қол')}"/></g>
  <g ${g('аяқ')}><rect x="84" y="206" width="30" height="120" rx="13" fill="${f('аяқ')==='#90caf9'?'#5c6bc0':f('аяқ')}"/><rect x="126" y="206" width="30" height="120" rx="13" fill="${f('аяқ')==='#90caf9'?'#5c6bc0':f('аяқ')}"/>
   <ellipse cx="96" cy="334" rx="22" ry="10" fill="#5d4037"/><ellipse cx="144" cy="334" rx="22" ry="10" fill="#5d4037"/></g></svg>`}
function pathSVG(kind,e){const P={'түзу':'M30 90 L330 90','қисық':'M30 120 C100 10 180 170 250 60 S320 40 330 70','шеңбер':'M180 40 A60 60 0 1 1 179.9 40'};
  const end={'түзу':[330,90],'қисық':[330,70],'шеңбер':[180,40]}[kind];
  return `<svg viewBox="0 0 360 180" style="width:420px;height:210px"><path d="${P[kind]}" stroke="#7a6cf0" stroke-width="7" stroke-dasharray="14 10" fill="none" stroke-linecap="round"/><text x="${end[0]}" y="${end[1]+16}" font-size="46" text-anchor="middle">${e}</text></svg>`}
