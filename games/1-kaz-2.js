/* neuroUstaz · 1-сынып · Сауат ашу (Әліппе 2021) · 2-тоқсан: 33–65-сабақтар (Ы, З, М, Е, Д, Ш, Ұ, Б, Й, К, І, Ң, Ғ, Ж, Ә) */
const AM=upto('м'),AU=upto('ұ'),AI=upto('і'),AE=upto('ә');
const PM=pool(AM),PU=pool(AU),PI=pool(AI),PE=pool(AE),PES=pool(AE,{sound:true});
const S2=[{t:'Балалар ойнады.',e:'👧👦'},{t:'Ана нан салды.',e:'👩🍞'},{t:'Бала шар алды.',e:'👦🎈'},{t:'Қар жауды.',e:'❄️'},{t:'Жаңбыр жауды.',e:'🌧️'},{t:'Ердос шай ішті.',e:'🧒🍵'},
 {t:'Дана қаламды алды.',e:'👧✏️'},{t:'Шана сырғанады.',e:'🛷'},{t:'Қыз ән салды.',e:'👧🎶'},{t:'Ата атқа мінді.',e:'👴🐴'},{t:'Бақа секірді.',e:'🐸'},{t:'Әже бауырсақ жасады.',e:'👵'},{t:'Мысық балық жеді.',e:'🐱🐟'},{t:'Аққу ұшып барады.',e:'🦢'}];
const R2=[{t:'Дана * алды.',e:'🎈',a:'шар'},{t:'Ата * мінді.',e:'🐴',a:'атқа'},{t:'Мұрат * ішті.',e:'🍵',a:'шай'},{t:'Қыз * жеді.',e:'🍎',a:'алма'},{t:'Ердос * тартты.',e:'🪕',a:'домбыра'},{t:'Сыныпта * бар.',e:'🟩',a:'тақта'},{t:'Аспанда * бар.',e:'🌙',a:'ай'},{t:'Әже * ішті.',e:'🥛',a:'айран'}];
const sylF=lv=>sylList(lv===1?AU:AE),wrdF=lv=>pool(lv===1?AU:AE,{maxLen:lv===3?9:5}).map(x=>x.w);
GAMES.k2find=SA.findLetter(AM,['ы','з','м']);GAMES.k2pos=SA.soundPos(pool(AM,{sound:true}),['ы','з','м']);GAMES.k2rsyl=SA.readSyl(PM);GAMES.k2first=SA.firstDuel(PM,AM);GAMES.k2has=SA.hasSound(pool(AM,{sound:true}),['ы','з','м']);
GAMES.k2catch=SA.catchLetter(AU,['е','д','ш','ұ']);GAMES.k2miss=SA.missLetter(PU,['е','д','ш','ұ'],AU);GAMES.k2scheme=SA.scheme(pool(AU,{sound:true}));GAMES.k2vc=SA.vowelCons(AU);GAMES.k2flash=SA.flashLetter(AU,['е','д','ш','ұ']);
GAMES.k2find2=SA.findLetter(AI,['б','й','к','і']);GAMES.k2bw=SA.buildWord(PI);GAMES.k2sylb=SA.sylBuild(PI);GAMES.k2wd=SA.wordDuel(PI);GAMES.k2has2=SA.hasSound(pool(AI,{sound:true}),['б','й','к','і']);
GAMES.k2miss2=SA.missLetter(PE,['ң','ғ','ж','ә'],AE);GAMES.k2pw=SA.picWord(PE);GAMES.k2sndc=SA.soundCount(PES);GAMES.k2first2=SA.firstDuel(PE,AE);GAMES.k2mil=SA.million(PE,AE,S2);
GAMES.k2syls=SA.sylSplit(PE);GAMES.k2sb=SA.sentBuild(S2);GAMES.k2sc=SA.sentCount(S2);GAMES.k2syld=SA.sylDuel(PE);GAMES.k2long=SA.longShort(PE);
GAMES.k2min=SA.minute(sylF,'буын');GAMES.k2minw=SA.minute(wrdF,'сөз');GAMES.k2sp=SA.sentPic(S2);GAMES.k2rope=SA.ropeWord(PE);GAMES.k2reb=SA.rebusSent(R2);
/* 1–3 сынып сайттарынан қосылған */
GAMES.trainw=SA.train(lv=>TRW['l'+lv]);
GAMES.k2rsyl._sec=15;
