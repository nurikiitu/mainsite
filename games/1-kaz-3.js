/* neuroUstaz · 1-сынып · Сауат ашу (Әліппе 2021) · 3-тоқсан: 66–96-сабақтар (П, Ү, Ө, Г, И, Я, Ю, Х, Һ, Щ, В, Э, Ё, Ц, Ф, Ч, Ъ, Ь) */
const AG=upto('г'),AJ=upto('ю'),AV=upto('в'),AZ=new Set(ORDER);
const PG=pool(AG),PJ=pool(AJ),PV=pool(AV),PX=pool(AZ),PXS=pool(AZ,{sound:true});
const S3=[{t:'Мысық сүт ішті.',e:'🐱🥛'},{t:'Бала доп ойнады.',e:'👦⚽'},{t:'Айгүл кітап оқыды.',e:'👧📖'},{t:'Күн жылы.',e:'☀️'},{t:'Құс ұшты.',e:'🐦'},{t:'Ит үреді.',e:'🐶'},
 {t:'Біз мектепке барамыз.',e:'🏫'},{t:'Қоян сәбіз жеді.',e:'🐰🥕'},{t:'Үйрек көлде жүзеді.',e:'🦆'},{t:'Пілдің құлағы үлкен.',e:'🐘'},{t:'Велосипед жылдам жүреді.',e:'🚲'},{t:'Аю бал жейді.',e:'🐻🍯'},{t:'Көбелек гүлге қонды.',e:'🦋🌸'},{t:'Түлкі түнде аң аулайды.',e:'🦊'}];
const R3=[{t:'Айгүл * оқыды.',e:'📖',a:'кітап'},{t:'Бала * ойнады.',e:'⚽',a:'доп'},{t:'Мысық * ішті.',e:'🥛',a:'сүт'},{t:'Қоян * жеді.',e:'🥕',a:'сәбіз'},{t:'Аспанда * жарқырайды.',e:'☀️',a:'күн'},
 {t:'Мен * барамын.',e:'🏫',a:'мектепке'},{t:'Бақта * өседі.',e:'🌸',a:'гүл'},{t:'Үйрек * жүзеді.',e:'💧',a:'суда'},{t:'Әлия * жіберді.',e:'✉️',a:'хат'},{t:'Біз * бардық.',e:'🎪',a:'циркке'}];
const sylF=lv=>sylList(lv===1?AG:AZ),wrdF=lv=>pool(AZ,{maxLen:L3(lv,4,6,12)}).map(x=>x.w);
GAMES.k3find=SA.findLetter(AG,['п','ү','ө','г']);GAMES.k3miss=SA.missLetter(PG,['п','ү','ө','г'],AG);GAMES.k3pos=SA.soundPos(pool(AG,{sound:true}),['п','ү','ө','г']);GAMES.k3first=SA.firstDuel(PG,AG);GAMES.k3flash=SA.flashLetter(AG,['п','ү','ө','г']);
GAMES.k3catch=SA.catchLetter(AJ,['и','я','ю']);GAMES.k3bw=SA.buildWord(PJ);GAMES.k3rsyl=SA.readSyl(PJ);GAMES.k3vc=SA.vowelCons(AJ);GAMES.k3has=SA.hasSound(PJ,['и','я','ю']);
GAMES.k3find2=SA.findLetter(AV,['х','һ','щ','в']);GAMES.k3miss2=SA.missLetter(PV,['х','һ','щ','в'],AV);GAMES.k3pw=SA.picWord(PV);GAMES.k3wd=SA.wordDuel(PV);GAMES.k3flash2=SA.flashLetter(AV,['х','һ','щ','в']);
GAMES.k3find3=SA.findLetter(AZ,['э','ё','ц','ф','ч']);GAMES.k3miss3=SA.missLetter(PX,['э','ё','ц','ф','ч','ъ','ь'],AZ);GAMES.k3bw2=SA.buildWord(pool(AZ,{focus:'эёцфчъь'}).concat(pool(AZ,{maxLen:5})));GAMES.k3first2=SA.firstDuel(PX,AZ);GAMES.k3mil=SA.million(PX,AZ,S3);
GAMES.k3scheme=SA.scheme(PXS);GAMES.k3syls=SA.sylSplit(PX);GAMES.k3sb=SA.sentBuild(S3);GAMES.k3sc=DU('Сөйлемде неше сөз?',lv=>{const s=pk1(S3);const n=s.t.replace(/[.,!?]/g,'').split(' ').length;return{q:PIC(s.e,70)+W(s.t,36),o:[2,3,4,5],a:n}});GAMES.k3long=SA.longShort(PX);
GAMES.k3min=SA.minute(sylF,'буын');GAMES.k3minw=SA.minute(wrdF,'сөз');GAMES.k3reb=SA.rebusSent(R3);GAMES.k3rope=SA.ropeWord(PX);GAMES.k3rid=SA.riddle;
