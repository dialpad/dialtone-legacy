import{_ as v,s as K,o,c as r,b as e,u as U,m as D,q as G,a,t as u,n as E,f as C,p as T,k as W,l as z,x as k,r as x,e as t,w as b,h as J,v as P,F as y,y as $,z as q,d as Q}from"./app.afc70ed8.js";import{v7 as X}from"./icons-sizes.b2275b45.js";const Y={name:"BaseIcon",props:{fileName:{type:String,required:!0},desc:{type:String,default:null},hidden:{type:Boolean,default:!1},selected:{type:Boolean,default:!1},keywords:{type:Array,default:()=>[]}},emits:["select-icon"],computed:{selectedStatus(){return this.selected?"yes":"no"},cardFooterClass(){return"dialtone-icon-card__footer"},dynamicIconComponent(){return K[this.vueComponentName]},name(){return this.fileName.replaceAll("-"," ")},vueComponentName(){return this.fileName.split("-").map(l=>l[0].toUpperCase()+l.slice(1)).join("")}}},L=l=>(T("data-v-d234c5a5"),l=l(),W(),l),ee=["id"],ae=["data-selected"],te={class:"d-mb8"},oe={class:"dialtone-icon-card__subtitle d-tt-capitalize d-fc-tertiary"},se=["textContent"],ne={class:"dialtone-icon-card__content"},ie={class:"d-d-flex d-fd-column"},re={class:"d-fs-100 d-d-flex d-gg4"},le=L(()=>e("strong",null,"SVG:",-1)),ce={class:"code-example"},de={class:"d-fs-100 d-d-flex d-gg4"},ue=L(()=>e("strong",null,"Vue:",-1)),pe={class:"code-example"},me={key:0,class:"d-fs-100 d-d-flex d-gg4"},he=L(()=>e("strong",null,"Keywords:",-1)),ge=["title"],fe={class:"dialtone-icon-card__description"};function be(l,c,n,s,h,p){return n.hidden?C("v-if",!0):(o(),r("div",{key:0,id:n.fileName,class:"dialtone-icon-grid__item"},[e("aside",{"data-selected":p.selectedStatus,class:"dialtone-icon-card js-dialtone-icon-card"},[e("header",{class:"dialtone-icon-card__header js-dialtone-icon-card-copy-area",onKeydown:c[0]||(c[0]=U(w=>l.$emit("select-icon"),["space"])),onClick:c[1]||(c[1]=w=>l.$emit("select-icon"))},[e("div",te,[(o(),D(G(p.dynamicIconComponent),{class:"d-icon--size-600"}))]),a(),e("p",oe,u(p.name),1)],32),a(),e("footer",{class:E(p.cardFooterClass)},[e("span",{class:"d-tt-capitalize d-mt0 d-mb8 d-fw-semibold d-fs-200 d-lh-100",textContent:u(p.name)},null,8,se),a(),e("div",ne,[e("div",ie,[e("p",re,[le,a(),e("span",ce,u(`${n.fileName}.svg`),1)]),a(),e("p",de,[ue,a(),e("span",pe,u(`<dt-icon name="${n.fileName}" />`),1)]),a(),n.keywords.length?(o(),r("p",me,[he,a(),e("span",{title:n.keywords.join(", "),class:"d-truncate"},u(n.keywords.join(", ")),9,ge)])):C("v-if",!0)]),a(),e("p",fe,u(n.desc),1)])],2)],8,ae)],8,ee))}const ve=v(Y,[["render",be],["__scopeId","data-v-d234c5a5"],["__file","BaseV7Icon.vue"]]),B={alerts:{"alert-circle":[],"alert-triangle":[],bell:[],"bell-minus":[],"bell-off":[],"bell-plus":[],"bell-ring":[],"concierge-bell":[],flame:[],megaphone:[],"megaphone-off":[],newspaper:[],siren:[]},arrows:{"arrow-down":["direction"],"arrow-down-left":["direction"],"arrow-down-right":["direction"],"arrow-left":["direction"],"arrow-left-right":["bidirectional","direction","swap","switch","transaction","reorder","move"],"arrow-right":["direction"],"arrow-up":["direction"],"arrow-up-down":["bidirectional","direction","swap","switch","network","mobile data","internet","reorder","move"],"arrow-up-left":["direction"],"arrow-up-right":["direction"],"chevron-down":["arrow"],"chevron-first":["arrow","previous","music"],"chevron-last":["arrow","skip","next","music"],"chevron-left":["arrow"],"chevron-right":["arrow"],"chevron-up":["arrow"],"chevrons-down":["arrow"],"chevrons-down-up":["arrow","collapse","fold","vertical"],"chevrons-left":["arrow"],"chevrons-left-right":["arrow","expand","horizontal","unfold"],"chevrons-right":["arrow"],"chevrons-right-left":["arrow","collapse","fold","horizontal"],"chevrons-up":["arrow"],"chevrons-up-down":["arrow","expand","unfold","vertical"],"corner-down-left":["arrow","return"],"corner-down-right":["arrow"],"corner-left-down":["arrow"],"corner-left-up":["arrow"],"corner-right-down":["arrow"],"corner-right-up":["arrow"],"corner-up-left":["arrow"],"corner-up-right":["arrow"],redo:["undo","history"],repeat:["loop","arrows"],reply:["email"],"undo-2":["redo","history"]},brand:{"ai-notes":[],"dialpad-ai":["artificial","intelligence","voice"],"dp-phone":["call","dialpad"],"zoom-logo":["video","competitor"]},communication:{"call-abandoned":["phone","missed","escape"],contacts:["address","people","person"],dialer:["phone"],forward:["send","share","email"],mail:["email","message","letter","unread"],"mail-open":["email","message","letter","read"],mails:["emails","messages","letters","multiple","mailing list","newsletter","copy"],message:["chat","speech"],music:["quaver","eighth note","note"],notes:["clipboard","write"],"past-conversations":["previous","history"],phone:["call"],"phone-call":["ring"],"phone-forward":["call","forward"],"phone-hold":["phone","pause","call"],"phone-incoming":["call"],"phone-missed":["call"],"phone-off":["call","mute"],"phone-outgoing":["call"],"reply-all":["email"],send:["email","message","mail","paper airplane","paper aeroplane","submit"],thread:["conversation","chat","message","reply"],voicemail:["phone","cassette"],"voicemail-drop":[],webchat:["message","chat"]},controls:{barge:["interrupt","enter","join"],"blur-background":["video","camera","effects","lens"],"circle-slashed":["diameter","zero","Ø","null","nothing","maths"],delete:["backspace","remove"],download:["import","export"],expand:["scale","fullscreen"],eye:["view","watch"],"eye-off":["view","watch","hide","hidden"],"fast-forward":["music"],filter:["funnel","hopper"],food:["pizza","emoji"],gamepad:["controller","emoji","activity"],grid:["table"],"grip-horizontal":["grab","dots","handle"],"grip-vertical":["grab","dots","handle","move","drag"],heart:["like","love","emotion"],history:["time","redo","undo","rewind","timeline","version"],key:["password","login","authentication","secure"],layout:["window","webpage"],"layout-dashboard":["masonry","brick"],"layout-grid":["app","home","start"],"layout-template":["window","webpage","block","section"],listen:["ear","hear"],"living-thing":[],lock:["security","password","secure","admin"],"lock-filled":["security","password","secure","admin","locked"],maximize:["fullscreen","expand"],menu:["bars","navigation","hamburger","options"],minimize:["exit fullscreen","close","shrink"],"minimize-alt":["window"],"multi-line-dept":["selection","line","department","fork"],object:[],option:["key","mac","button"],park:["call"],pause:[],"pause-circle":["music","audio","stop"],"phone-hang-up":["end","call","leave"],pin:["save","map","lock","fix"],"pin-off":["unpin","unsave","unlock","remove","unfix"],play:["music","start"],"play-circle":["music","start"],plus:["add","new","maths"],"plus-circle":["add","new","maths"],record:["circle"],"record-filled":["circle"],refresh:["reload"],rewind:["music"],search:["find","magnifier","magnifying glass"],share:["network","connections"],sheet:["spreadsheets","table","excel"],shortcuts:["arrow"],shuffle:["music"],sidebar:["menu"],"sidebar-close":["menu"],"sidebar-open":["menu"],"skip-back":["arrow","previous","music"],"skip-back-ten":["rewind","back","jump"],"skip-forward":["arrow","skip","next","music"],"skip-forward-ten":["fast","forward","jump"],sliders:["settings","controls"],"sliders-horizontal":["settings","filters","controls"],"sort-asc":["filter"],"sort-desc":["filter"],"stop-circle":["media","music"],"stop-filled":["square","pause"],table:["sheet","grid","spreadsheet"],takeover:["phone","call"],transfer:["phone","arrows","call"],"transfer-webchat":["discussion","message"],trash:["garbage","delete","remove","bin"],unlock:["security"],"unlock-filled":["security"],"x-circle":["cancel","close","delete","remove","times","clear","maths"],"zoom-in":["magnifying glass","plus"],"zoom-out":["magnifying glass","plus"]},data:{activity:["pulse","health","action","motion"],"axis-3d":["gizmo","coordinates"],"bar-chart":["statistics","diagram","graph"],"bar-chart-2":["statistics","diagram","graph"],"bar-chart-3":["statistics","diagram","graph"],"bar-chart-4":["statistics","diagram","graph"],"bar-chart-horizontal":["statistics","diagram","graph"],binary:["code","digits","computer","zero","one"],equal:["calculate","maths"],"line-chart":["statistics","diagram","graph"],"pie-chart":["statistics","diagram"],"trending-down":["statistics"],"trending-up":["statistics"]},devices:{airplay:["stream","cast","mirroring"],battery:["power","electricity"],"battery-charging":["power","electricity"],"battery-full":["power","electricity"],"battery-low":["power","electricity"],"battery-medium":["power","electricity"],bluetooth:["wireless"],"bluetooth-connected":["paired"],"bluetooth-off":["lost"],"bluetooth-searching":["pairing"],calculator:["count","calculating machine"],camera:["photo","webcam","video"],"camera-off":["photo","webcam","video"],"camera-tracking":["focus","lens","video"],cast:["chromecast","airplay"],"download-cloud":["import"],"file-audio":["music","audio","sound","headphones"],film:["movie","video"],focus:["camera","lens","photo"],headphones:["music","audio","sound"],"laptop-2":["computer"],"lightning-bolt":["power","energy","electricity","electric"],mic:["record","sound","listen","radio","podcast","microphone"],"mic-off":["record","sound","mute","microphone"],monitor:["tv","screen","display"],"monitor-off":["share"],"monitor-speaker":["devices","connect","cast"],mouse:["device","scroll","click"],plug:["power"],"print-fax":["printer","office","device"],printer:["fax","office","device"],"screen-share-off":["desktop","disconnect"],"share-screen":["screenshare"],smartphone:["phone","cellphone","device"],"smartphone-charging":["phone","cellphone","device","power"],speaker:["audio","music"],usb:["universal","serial","bus","controller","connector","interface"],video:["camera","movie","film"],"video-off":["camera","movie","film"],volume:["music","sound","mute"],"volume-1":["music","sound"],"volume-2":["music","sound"],"volume-x":["music","sound","mute"],webcam:["camera","security"],wifi:["connection","signal","wireless"],"wifi-off":["disabled"],"zap-off":["flash","camera","lightning"]},editing:{asterisk:["reference"],"at-sign":["mention","at","email","message"],baseline:["text","format","color"],bold:["text","strong","format"],edit:["pencil","change"],"edit-2":["pencil","change"],eraser:["pencil","drawing","undo","delete","clear"],image:["picture","photo"],indent:["text","tab"],inspect:["element","mouse","click","cursor","pointer","box"],italic:["oblique","text","format"],keyboard:["layout","spell","settings","mouse"],"link-2":["chain","url"],"link-2-off":["unchain","chain"],"list-bullet":["options"],"list-checks":["todo","done"],paperclip:["attachment","file"],quote:["quotation"],scissors:["cut"],strikethrough:["cross out","delete","remove","format"],"text-cursor":["select"],type:["text","font","typography"],underline:["text","format"],"unlink-2":["url","unchain","unchain"]},general:{accessibility:["disability","disabled","dda","wheelchair"],album:["photo","book"],archive:["index","box"],"archive-restore":["archive","unarchive","restore","index","box"],book:["read","dictionary","booklet","magazine","library"],"book-open":["read","library"],bookmark:["read","clip","marker","tag"],"bookmark-minus":["delete","remove"],"bookmark-plus":["add"],box:["cube","package"],"box-select":["selection","square","rectangular","marquee","tool"],boxes:["cubes","packages","parts","group","units","collection","cluster"],check:["done"],"check-circle":["done"],close:["cancel","close","delete","remove","times","clear","maths"],code:["source","programming","html","xml"],copy:["clone","duplicate"],copyright:["licence"],"credit-card":["bank","purchase","payment","cc"],dissatisfied:[],flag:["report"],"flag-off":["unflag"],"form-input":["2fa","authenticate","login","field","text"],gauge:["dashboard"],hash:["hashtag","number","pound"],"hash-bold":["number","pound","hashtag","number"],"help-circle":["question mark"],inbox:["email"],info:["help"],"isolated-queries":["list","alert","query","queries"],keypad:["number","dialpad","keypad"],library:["book","music","album"],"log-in":["sign in","arrow","enter","auth"],"log-out":["sign out","arrow","exit","auth"],"more-horizontal":["ellipsis","menu","options"],"more-vertical":["ellipsis","menu","options"],network:["tree"],neutral:["bored","meh","average","face"],"not-enough-queries":["list","plus","query","queries"],package:["box","container"],"party-popper":["emoji","congratulations","celebration","party"],power:["on","off","device"],puzzle:["component","module","part","piece"],queries:["list","question mark","query","queries"],satisfied:["happy","pleased","smile","great","good"],scroll:["paper","log","scripture","document","parchment"],settings:["cog","edit","gear","preferences"],shield:["security","secure"],"shield-alert":["security","secure","virus","admin","safety"],"shield-check":["security","secure","done","save"],"shield-close":["security","secure","wrong","unsave","virus"],"shield-off":["security","secure","security","insecure"],"somewhat-dissatisfied":["face"],"somewhat-satisfied":["smile","happy","pleased","good","face"],sparkle:["stars","magic","help"],star:["bookmark","favorite","like","review","rating"],"star-filled":["bookmark","favorite","like","review","rating"],tag:["label","badge","ticket","mark"],tags:["labels","badges","tickets","marks","copy","multiple"],"text-cursor-input":["select"],"thumbs-down":["dislike","bad","emotion"],"thumbs-up":["like","good","emotion"],tools:["wrench"],"too-many-queries":["list","minus","query","queries"],triangle:["delta","shape"],"very-dissatisfied":["sad","frown","unhappy","bad","poor","face"],"very-satisfied":["happy","smile","face","great","pleased","good"]},os:{clipboard:["copy","paste"],"clipboard-check":["copied","pasted"],"clipboard-copy":["copy","paste"],"clipboard-edit":["edit","paste","signature"],"clipboard-list":["copy","paste","tasks"],"clipboard-signature":["paste","signature"],"clipboard-type":["paste","format","text"],"clipboard-x":["copy","paste","discard","remove"],"cloud-off":["disconnect"],command:["keyboard","cmd","terminal","prompt"],cpu:["processor","technology","computer","chip"],"external-link":["outbound"],file:["document"],files:["multiple","copy","documents"],fingerprint:["2fa","authentication","biometric","identity","security"],folder:["directory"],"folder-tree":["directory","tree","browser"],folders:["multiple","copy","directories"],"hard-drive":["computer","server","memory","data","ssd","disk","hard disk"],import:["save"],languages:["translate"],"life-buoy":["help","rescue","ship","life ring","support"],"qr-code":["barcode"],save:["floppy disk"],scan:["qr-code"],"scan-face":["face","biometric","authentication","2fa"],"share-2":["network","connections"],"signal-best":["connection","wireless","gsm","phone","2g","3g","4g","5g"],"signal-high":["connection","wireless","gsm","phone","2g","3g","4g","5g"],"signal-low":["connection","wireless","gsm","phone","2g","3g","4g","5g"],"signal-medium":["connection","wireless","gsm","phone","2g","3g","4g","5g"],"signal-zero":["connection","wireless","gsm","phone","2g","3g","4g","5g","lost"],slash:["cancel","ban","no","stop","forbidden","prohibited","error"],"toy-brick":["lego","block","addon","plugin","integration"],upload:["file"],"upload-cloud":["file"]},people:{user:["person","account","contact"],"user-check":["followed","subscribed","done"],"user-minus":["delete","remove","unfollow","unsubscribe"],"user-plus":["new","add","create","follow","subscribe"],"user-remove":["delete","remove","unfollow","unsubscribe","unavailable"],users:["group","people"]},places:{briefcase:["work","bag","baggage","folder"],building:["organisation","organization"],"building-2":["business","company","enterprise","skyscraper","organisation","organization"],factory:["building","business","energy","industry","manufacture","sector"],"globe-2":["world","browser","language","translate"],home:["house","living"],map:["location","navigation","travel"],"map-pin":["location","navigation","travel","marker"]},time:{"alarm-check":["done"],"alarm-clock-off":["morning","turn-off"],"alarm-minus":["remove"],"alarm-plus":["add"],calendar:["date","time","event","birthdate","birthday"],"calendar-check":["date","time","event","confirm","subscribe"],"calendar-check-2":["date","time","event","confirm","subscribe"],"calendar-clock":["date","time","event","clock"],"calendar-days":["date","time","event"],"calendar-heart":["date","time","event","heart","favourite","subscribe"],"calendar-minus":["date","time","event","delete","remove"],"calendar-off":["date","time","event","delete","remove"],"calendar-plus":["date","time","event","add","subscribe","create","new"],"calendar-range":["date","time","event","range","period"],"calendar-search":["date","time","search","events"],"calendar-x":["date","time","event","remove","busy"],clock:["time","watch","alarm"],"clock-1":["time","watch","alarm"],"clock-10":["time","watch","alarm"],"clock-11":["time","watch","alarm"],"clock-12":["time","watch","alarm"],"clock-2":["time","watch","alarm"],"clock-3":["time","watch","alarm"],"clock-4":["time","watch","alarm"],"clock-5":["time","watch","alarm"],"clock-6":["time","watch","alarm"],"clock-7":["time","watch","alarm"],"clock-8":["time","watch","alarm"],"clock-9":["time","watch","alarm"],hourglass:["timer","time","sandglass"],infinity:["unlimited","forever","loop","maths"],loading:[],timer:["time","timer","stopwatch"],"timer-off":["time","timer","stopwatch"],"timer-reset":["time","timer","stopwatch"]},weather:{cloud:["weather"],"cloud-cog":["computing","ai","cluster","network"],"cloud-drizzle":["weather","shower"],"cloud-fog":["weather","mist"],"cloud-hail":["weather","rainfall"],"cloud-lightning":["weather","bolt"],"cloud-moon":["weather","night"],"cloud-moon-rain":["weather","partly","night","rainfall"],"cloud-rain":["weather","rainfall"],"cloud-rain-wind":["weather","rainfall"],"cloud-snow":["weather","blizzard"],"cloud-sun":["weather","partly"],"cloud-sun-rain":["weather","partly","rainfall"],cloudy:["clouds"],haze:["mist","fog"],moon:["dark","night"],snowflake:["cold","weather","freeze","snow","winter"],sun:["brightness","weather","light","summer"],"sun-dim":["brightness","dim","low","brightness low"],"sun-medium":["brightness","medium"],sunrise:["weather","time","morning","day"],sunset:["weather","time","evening","night"],thermometer:["temperature","celsius","fahrenheit","weather"],"thermometer-snowflake":["temperature","celsius","fahrenheit","weather","cold","freeze","freezing"],"thermometer-sun":["temperature","celsius","fahrenheit","weather","warm","hot"],umbrella:["rain","weather"],wind:["weather","air","blow"]}},we={},_e={"aria-hidden":"true",focusable:"false","data-name":"Search",class:"d-icon d-icon--search",viewBox:"0 0 12 12"},ke=e("path",{fill:"currentColor","fill-rule":"evenodd",d:"M5.5 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM1 5.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Z","clip-rule":"evenodd"},null,-1),ye=e("path",{fill:"currentColor","fill-rule":"evenodd",d:"M7.972 7.972a.5.5 0 0 1 .707 0l2.175 2.174a.5.5 0 1 1-.707.708L7.972 8.679a.5.5 0 0 1 0-.707Z","clip-rule":"evenodd"},null,-1),xe=[ke,ye];function ze(l,c){return o(),r("svg",_e,xe)}const $e=v(we,[["render",ze],["__file","Search.vue"]]),qe={},Ce={"aria-hidden":"true",focusable:"false","data-name":"Close",class:"d-icon d-icon--close",viewBox:"0 0 12 12"},Ie=e("path",{fill:"currentColor","fill-rule":"evenodd",d:"M2.646 2.646a.5.5 0 0 1 .708 0L6 5.293l2.646-2.647a.5.5 0 1 1 .708.708L6.707 6l2.647 2.646a.5.5 0 1 1-.708.708L6 6.707 3.354 9.354a.5.5 0 1 1-.708-.708L5.293 6 2.646 3.354a.5.5 0 0 1 0-.708Z","clip-rule":"evenodd"},null,-1),Se=[Ie];function Ne(l,c){return o(),r("svg",Ce,Se)}const Ve=v(qe,[["render",Ne],["__file","Close.vue"]]),je={class:"d-d-grid d-gg16 d-g-cols6 d-mt8 d-mb16"},Be={class:"d-gc4"},Le={class:"d-gc2 d-select"},Ae=e("label",{class:"d-vi-visible-sr",for:"Dialtone--SelectCategory"},`
        Categories
      `,-1),Me=e("option",{value:"all",selected:""},`
          All categories
        `,-1),De=["value","disabled"],Ee=["textContent"],Ze={class:"d-gl-docsite-icons"},Oe={key:0,class:"d-d-flex d-fl-center"},He={__name:"IconCatalog",setup(l){const c=z(null),n=z("all"),s=z(null),h=z(null),p=k(()=>Object.keys(B)),w=(d,g)=>{const f={},V=new RegExp(g,"i");for(const i in d)for(const m in d[i])V.test(m)&&(f[i]===void 0&&(f[i]={}),f[i][m]=d[i][m]);return f},I=()=>{s.value=null,_(),h.value.focus()},_=()=>{n.value="all"},S=k(()=>{var d;return((d=s.value)==null?void 0:d.length)>1}),Z=k(()=>Object.keys(A.value).length>0),N=k(()=>S.value?(_(),w(B,s.value)):B),A=k(()=>n.value==="all"?N.value:Object.assign({},{[n.value]:N.value[n.value]})),O=d=>Object.keys(N.value).includes(d),H=d=>{c.value=d!==c.value?d:null};return(d,g)=>{const f=x("dt-button"),V=x("dt-input");return o(),r(y,null,[e("div",je,[e("div",Be,[t(V,{id:"search-input",ref_key:"searchRef",ref:h,modelValue:s.value,"onUpdate:modelValue":g[0]||(g[0]=i=>s.value=i),"aria-label":"Search icon",placeholder:"Search for an icon by name",class:"d-input d-input-icon--left d-input-icon--right",type:"text"},{leftIcon:b(()=>[t($e)]),rightIcon:b(()=>[t(f,{kind:"muted",importance:"clear",circle:"","aria-label":"Clear filters",onClick:I},{icon:b(()=>[t(Ve)]),_:1})]),_:1},8,["modelValue"])]),a(),e("div",Le,[Ae,a(),J(e("select",{id:"Dialtone--SelectCategory","onUpdate:modelValue":g[1]||(g[1]=i=>n.value=i),class:"d-select__input d-tt-capitalize"},[Me,a(),(o(!0),r(y,null,$(q(p),i=>(o(),r("option",{key:i,value:i,disabled:!O(i)},u(i),9,De))),128))],512),[[P,n.value]])])]),a(),(o(!0),r(y,null,$(q(A),(i,m)=>(o(),r("div",{key:m,class:"d-mb16"},[e("span",{class:"d-headline-medium d-tt-capitalize",textContent:u(m)},null,8,Ee),a(),e("div",Ze,[(o(!0),r(y,null,$(i,(R,F,j)=>(o(),D(ve,{key:`${m}-${j}`,"file-name":F,keywords:R,selected:c.value===`${m}-${j}`,onSelectIcon:ma=>H(`${m}-${j}`)},null,8,["file-name","keywords","selected","onSelectIcon"]))),128))])]))),128)),a(),q(Z)?C("v-if",!0):(o(),r("div",Oe,`
    No results found for "`+u(s.value)+`"
  `,1))],64)}}},Re=v(He,[["__file","IconCatalog.vue"]]),Fe={},Ke={"aria-hidden":"true",focusable:"false","data-name":"Inbox",class:"d-icon d-icon--inbox",viewBox:"0 0 12 12"},Ue=e("path",{fill:"currentColor","fill-rule":"evenodd",d:"M3.62 1.5h4.76a1.5 1.5 0 0 1 1.342.832l1.725 3.444A.5.5 0 0 1 11.5 6v3a1.5 1.5 0 0 1-1.5 1.5H2A1.5 1.5 0 0 1 .5 9V6a.5.5 0 0 1 .053-.224l1.724-3.443A1.503 1.503 0 0 1 3.62 1.5Zm0 1a.5.5 0 0 0-.447.277v.002L1.81 5.5H4a.5.5 0 0 1 .416.223L5.268 7h1.464l.852-1.277A.5.5 0 0 1 8 5.5h2.19L8.829 2.779v-.002A.5.5 0 0 0 8.38 2.5m2.12 4H8.268l-.852 1.277A.5.5 0 0 1 7 8H5a.5.5 0 0 1-.416-.223L3.732 6.5H1.5V9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V6.5Z","clip-rule":"evenodd"},null,-1),Ge=[Ue];function Te(l,c){return o(),r("svg",Ke,Ge)}const M=v(Fe,[["render",Te],["__file","Inbox.vue"]]),We={class:"d-d-flex d-gg8 d-ai-center"},Je={class:"d-notice d-notice--info d-mt24 d-wmx100p",role:"status","aria-hidden":"false"},Pe={class:"d-notice__icon"},Qe={class:"d-notice__content d-stack4"},Xe={class:"d-notice__message"},Ye=e("strong",null,"Looking for the previous icon set?",-1),ea=e("h2",{id:"icon-catalog",tabindex:"-1",class:"d-docsite--header-2 d-my24"},[a("Icon catalog "),e("a",{class:"header-anchor d-link d-td-none d-docsite--link d-link",href:"#icon-catalog","aria-hidden":"true"},"#")],-1),aa=e("h2",{id:"variants-and-examples",tabindex:"-1",class:"d-docsite--header-2 d-my24"},[a("Variants and examples "),e("a",{class:"header-anchor d-link d-td-none d-docsite--link d-link",href:"#variants-and-examples","aria-hidden":"true"},"#")],-1),ta=e("h3",{id:"base-styles",tabindex:"-1",class:"d-docsite--header-3 d-my24"},[a("Base Styles "),e("a",{class:"header-anchor d-link d-td-none d-docsite--link d-link",href:"#base-styles","aria-hidden":"true"},"#")],-1),oa=Q(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span>
  <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">focusable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">data-name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[ICON_NAME]<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>
    d-icon
    d-icon--size-[SIZE]
    d-icon--[ICON_NAME]
  <span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">viewBox</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0 0 12 12<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">&gt;</span></span>
  ...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="sizes" tabindex="-1" class="d-docsite--header-2 d-my24">Sizes <a class="header-anchor d-link d-td-none d-docsite--link d-link" href="#sizes" aria-hidden="true">#</a></h2>`,2),sa={class:"d-table dialtone-doc-table"},na=e("thead",null,[e("tr",null,[e("th",{scope:"col"},"Size"),a(),e("th",{scope:"col"},"Width and height"),a(),e("th",{scope:"col",class:"d-w35p"},"Class"),a(),e("th",{scope:"col",class:"d-ta-center"},"Example"),a(),e("th",{scope:"col"},[e("span",{class:"d-vi-visible-sr"},"Exception")])])],-1),ia={scope:"row"},ra={class:"d-ff-mono d-fs-100"},la={class:"d-ff-mono d-fs-100"},ca={class:"d-ta-center"},da={class:"d-ta-right"},ua={key:0,class:"d-badge d-badge--warning"},pa={__name:"icon.html",setup(l){return(c,n)=>{const s=x("dt-icon"),h=x("code-well-header"),p=x("router-link");return o(),r("div",null,[t(h,null,{default:b(()=>[e("div",We,[t(s,{name:"lightning-bolt",size:"100"}),a(),t(s,{name:"lightning-bolt",size:"200"}),a(),t(s,{name:"lightning-bolt",size:"300"}),a(),t(s,{name:"lightning-bolt",size:"400"}),a(),t(s,{name:"lightning-bolt",size:"500"}),a(),t(s,{name:"lightning-bolt",size:"600"}),a(),t(s,{name:"lightning-bolt",size:"700"}),a(),t(s,{name:"lightning-bolt",size:"800"})])]),_:1}),a(),e("aside",Je,[e("div",Pe,[t(s,{name:"info"})]),a(),e("div",Qe,[e("p",Xe,[Ye,a(),t(p,{class:"d-link",to:"/design/icons/"},{default:b(()=>[a("Documentation for the deprecated icon set")]),_:1}),a(` will remain available until this new icon is more fully adopted.
    `)])])]),a(),ea,a(),t(Re),aa,a(),ta,a(),t(h,null,{default:b(()=>[t(M)]),_:1}),a(),oa,a(),e("table",sa,[na,a(),e("tbody",null,[(o(!0),r(y,null,$(q(X),({size:w,width_height:I,className:_,deviceOnly:S})=>(o(),r("tr",null,[e("th",ia,u(w),1),a(),e("td",ra,u(I),1),a(),e("td",la,"."+u(_),1),a(),e("td",ca,[t(M,{class:E(_)},null,8,["class"])]),a(),e("td",da,[S?(o(),r("span",ua,"Device only")):C("v-if",!0)])]))),256))])])])}}},fa=v(pa,[["__file","icon.html.vue"]]);export{fa as default};
