/* neuroUstaz · 1-сынып · Сауат ашу (Әліппе 2021) · 1-тоқсан: 1–32-сабақтар (әріпке дейінгі кезең; А, Р, Л, У, Н, С, О, Т, Қ) */
const A5=upto('н'),A9=upto('қ');
const P5=pool(A5),P9=pool(A9),PALL=pool(new Set(ORDER),{maxLen:7}),PS=pool(new Set(ORDER),{sound:true,maxLen:6});
/* әріпке дейінгі кезеңде мұғалім оқиды — сөйлемдер суретпен */
const S1=[{t:'Мен оқушымын.',e:'🧒🎒'},{t:'Мысық сүт ішті.',e:'🐱🥛'},{t:'Бала доп ойнады.',e:'👦⚽'},{t:'Құс ұшты.',e:'🐦'},{t:'Қар жауды.',e:'❄️'},{t:'Апам нан пісірді.',e:'👵🍞'},
 {t:'Балық суда жүзеді.',e:'🐟💧'},{t:'Ит үреді.',e:'🐶'},{t:'Күн жарқырайды.',e:'☀️'},{t:'Қыз гүл суарды.',e:'👧🌸'},{t:'Ата атқа мінді.',e:'👴🐴'},{t:'Біз мектепке барамыз.',e:'🏫'},{t:'Аққу көлде жүзеді.',e:'🦢'},{t:'Қоян сәбіз жеді.',e:'🐰🥕'}];
const R1=[{t:'Асан, * ал.',e:'🍞',a:'нан'},{t:'Арна, * ал.',e:'🎂',a:'торт'},{t:'Ана, * ал.',e:'🧥',a:'тон'},{t:'Ақ *.',e:'❄️',a:'қар'},{t:'Ақ *.',e:'🦢',a:'аққу'},{t:'Ару, * ал.',e:'🥗',a:'салат'},{t:'Қалқан, * ал.',e:'🪨',a:'тас'},{t:'Асан, * ал.',e:'🐐',a:'лақ'}];
const SYL1=lv=>sylList(lv===1?A5:A9);
const WRD1=lv=>pool(lv===1?A5:A9).map(x=>x.w).concat(lv===3?['ала','алар','арал','арала','сана','қана','санат','тақта']:['ал','ала']);
GAMES.k1count=SA.sentCount(S1);GAMES.k1build=SA.sentBuild(S1);GAMES.k1pic=SA.sentPic(S1);
GAMES.k1wduel=DU('Сөйлемде неше сөз?',lv=>{const s=pk1(S1);const n=s.t.replace(/[.,!?]/g,'').split(' ').length;return{q:PIC(s.e,70)+W(s.t,36),o:[1,2,3,4,5].slice(0,lv===1?4:5),a:n}});
GAMES.k1cont=TQ('➡️ Сөйлемге сәйкес суретті тап',lv=>{const s=pk1(S1);return{q:W(s.t,58),o:[s.e,...others(S1.map(x=>x.e),s.e,lv===1?2:3)],a:s.e,oh:EO}});
GAMES.k1sylc=SA.sylCount(PALL);GAMES.k1syls=SA.sylSplit(PALL);GAMES.k1sylb=SA.sylBuild(PALL);GAMES.k1syld=SA.sylDuel(PALL);GAMES.k1long=SA.longShort(PALL);
GAMES.k1scheme=SA.scheme(PS);GAMES.k1sndc=SA.soundCount(PS);GAMES.k1pos=SA.soundPos(PS,['а','р','л','н','с','о','т','қ','м','б']);
GAMES.k1vc=SA.vowelCons(new Set('аәеоөұүыірлнстқмбдш'));GAMES.k1has=SA.hasSound(PS,['а','р','л','н','с','т']);
GAMES.k1find=SA.findLetter(A5,['а','р','л','у','н']);GAMES.k1catch=SA.catchLetter(A5,['а','р','л','у','н']);GAMES.k1rsyl=SA.readSyl(P5.concat(pool(A9,{maxLen:4})));
GAMES.k1first=SA.firstDuel(P9,A9);GAMES.k1flash=SA.flashLetter(A9,['а','р','л','у','н']);
GAMES.k1miss=SA.missLetter(P9,['с','о','т','қ'],A9);GAMES.k1bw=SA.buildWord(P9);GAMES.k1pw=SA.picWord(P9);GAMES.k1wd=SA.wordDuel(P9);GAMES.k1mil=SA.million(P9,A9,null);
GAMES.k1min=SA.minute(SYL1,'буын');GAMES.k1minw=SA.minute(WRD1,'сөз');GAMES.k1reb=SA.rebusSent(R1);GAMES.k1rope=SA.ropeWord(P9);GAMES.k1rid=SA.riddle;
