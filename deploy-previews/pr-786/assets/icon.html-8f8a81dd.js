import{_ as I,v as i,x as l,y as e,K as Q,A as M,P as T,C as t,D as d,E as O,H as C,a5 as R,a6 as F,r as z,h as y,s as b,G as a,B as w,Q as W,a3 as J,F as x,z as q,I as $,M as X}from"./framework-bc192251.js";import{i as Y}from"./app-4c7c9c9a.js";import{v7 as ee}from"./icons-sizes-a0050712.js";const te={name:"BaseIcon",props:{fileName:{type:String,required:!0},desc:{type:String,default:null},hidden:{type:Boolean,default:!1},selected:{type:Boolean,default:!1},keywords:{type:Array,default:()=>[]}},emits:["select-icon"],computed:{selectedStatus(){return this.selected?"yes":"no"},cardFooterClass(){return"dialtone-icon-card__footer"},dynamicIconComponent(){return Y[this.vueComponentName]},name(){return this.fileName.replaceAll("-"," ")},vueComponentName(){return this.fileName.split("-").map(s=>s[0].toUpperCase()+s.slice(1)).join("")}}},L=s=>(R("data-v-d234c5a5"),s=s(),F(),s),ae=["id"],oe=["data-selected"],se={class:"d-mb8"},ne={class:"dialtone-icon-card__subtitle d-tt-capitalize d-fc-tertiary"},ie=["textContent"],re={class:"dialtone-icon-card__content"},le={class:"d-d-flex d-fd-column"},ce={class:"d-fs-100 d-d-flex d-gg4"},de=L(()=>e("strong",null,"SVG:",-1)),ue={class:"code-example"},pe={class:"d-fs-100 d-d-flex d-gg4"},me=L(()=>e("strong",null,"Vue:",-1)),he={class:"code-example"},ge={key:0,class:"d-fs-100 d-d-flex d-gg4"},fe=L(()=>e("strong",null,"Keywords:",-1)),be=["title"],we={class:"dialtone-icon-card__description"};function ve(s,u,n,o,g,p){return n.hidden?C("v-if",!0):(i(),l("div",{key:0,id:n.fileName,class:"dialtone-icon-grid__item"},[e("aside",{"data-selected":p.selectedStatus,class:"dialtone-icon-card js-dialtone-icon-card"},[e("header",{class:"dialtone-icon-card__header js-dialtone-icon-card-copy-area",onKeydown:u[0]||(u[0]=Q(v=>s.$emit("select-icon"),["space"])),onClick:u[1]||(u[1]=v=>s.$emit("select-icon"))},[e("div",se,[(i(),M(T(p.dynamicIconComponent),{class:"d-icon--size-600"}))]),t(),e("p",ne,d(p.name),1)],32),t(),e("footer",{class:O(p.cardFooterClass)},[e("span",{class:"d-tt-capitalize d-mt0 d-mb8 d-fw-semibold d-fs-200 d-lh-100",textContent:d(p.name)},null,8,ie),t(),e("div",re,[e("div",le,[e("p",ce,[de,t(),e("span",ue,d(`${n.fileName}.svg`),1)]),t(),e("p",pe,[me,t(),e("span",he,d(`<dt-icon name="${n.fileName}" />`),1)]),t(),n.keywords.length?(i(),l("p",ge,[fe,t(),e("span",{title:n.keywords.join(", "),class:"d-truncate"},d(n.keywords.join(", ")),9,be)])):C("v-if",!0)]),t(),e("p",we,d(n.desc),1)])],2)],8,oe)],8,ae))}const _e=I(te,[["render",ve],["__scopeId","data-v-d234c5a5"],["__file","BaseV7Icon.vue"]]),A={alerts:{"alert-circle":[],"alert-triangle":[],bell:[],"bell-minus":[],"bell-off":[],"bell-plus":[],"bell-ring":[],"concierge-bell":[],flame:[],megaphone:[],"megaphone-off":[],newspaper:[],siren:[]},arrows:{"arrow-down":["direction"],"arrow-down-left":["direction"],"arrow-down-right":["direction"],"arrow-left":["direction"],"arrow-left-right":["bidirectional","direction","swap","switch","transaction","reorder","move"],"arrow-right":["direction"],"arrow-up":["direction"],"arrow-up-down":["bidirectional","direction","swap","switch","network","mobile data","internet","reorder","move"],"arrow-up-left":["direction"],"arrow-up-right":["direction"],"chevron-down":["arrow"],"chevron-first":["arrow","previous","music"],"chevron-last":["arrow","skip","next","music"],"chevron-left":["arrow"],"chevron-right":["arrow"],"chevron-up":["arrow"],"chevrons-down":["arrow"],"chevrons-down-up":["arrow","collapse","fold","vertical"],"chevrons-left":["arrow"],"chevrons-left-right":["arrow","expand","horizontal","unfold"],"chevrons-right":["arrow"],"chevrons-right-left":["arrow","collapse","fold","horizontal"],"chevrons-up":["arrow"],"chevrons-up-down":["arrow","expand","unfold","vertical"],"corner-down-left":["arrow","return"],"corner-down-right":["arrow"],"corner-left-down":["arrow"],"corner-left-up":["arrow"],"corner-right-down":["arrow"],"corner-right-up":["arrow"],"corner-up-left":["arrow"],"corner-up-right":["arrow"],redo:["undo","history"],repeat:["loop","arrows"],reply:["email"],"undo-2":["redo","history"]},brand:{"ai-notes":[],"dialpad-ai":["artificial","intelligence","voice"],"dp-phone":["call","dialpad"],"zoom-logo":["video","competitor"]},communication:{"call-abandoned":["phone","missed","escape"],contacts:["address","people","person"],dialer:["phone"],forward:["send","share","email"],mail:["email","message","letter","unread"],"mail-open":["email","message","letter","read"],mails:["emails","messages","letters","multiple","mailing list","newsletter","copy"],message:["chat","speech"],music:["quaver","eighth note","note"],notes:["clipboard","write"],"past-conversations":["previous","history"],phone:["call"],"phone-call":["ring"],"phone-forward":["call","forward"],"phone-hold":["phone","pause","call"],"phone-incoming":["call"],"phone-missed":["call"],"phone-off":["call","mute"],"phone-outgoing":["call"],"reply-all":["email"],send:["email","message","mail","paper airplane","paper aeroplane","submit"],thread:["conversation","chat","message","reply"],voicemail:["phone","cassette"],"voicemail-drop":[],webchat:["message","chat"]},controls:{barge:["interrupt","enter","join"],"blur-background":["video","camera","effects","lens"],"circle-slashed":["diameter","zero","Ø","null","nothing","maths"],delete:["backspace","remove"],download:["import","export"],expand:["scale","fullscreen"],eye:["view","watch"],"eye-off":["view","watch","hide","hidden"],"fast-forward":["music"],filter:["funnel","hopper"],food:["pizza","emoji"],gamepad:["controller","emoji","activity"],grid:["table"],"grip-horizontal":["grab","dots","handle"],"grip-vertical":["grab","dots","handle","move","drag"],heart:["like","love","emotion"],history:["time","redo","undo","rewind","timeline","version"],key:["password","login","authentication","secure"],layout:["window","webpage"],"layout-dashboard":["masonry","brick"],"layout-grid":["app","home","start"],"layout-template":["window","webpage","block","section"],listen:["ear","hear"],"living-thing":[],lock:["security","password","secure","admin"],"lock-filled":["security","password","secure","admin","locked"],maximize:["fullscreen","expand"],menu:["bars","navigation","hamburger","options"],minimize:["exit fullscreen","close","shrink"],"minimize-alt":["window"],"multi-line-dept":["selection","line","department","fork"],object:[],option:["key","mac","button"],park:["call"],pause:[],"pause-circle":["music","audio","stop"],"phone-hang-up":["end","call","leave"],pin:["save","map","lock","fix"],"pin-off":["unpin","unsave","unlock","remove","unfix"],play:["music","start"],"play-circle":["music","start"],plus:["add","new","maths"],"plus-circle":["add","new","maths"],record:["circle"],"record-filled":["circle"],refresh:["reload"],rewind:["music"],search:["find","magnifier","magnifying glass"],share:["network","connections"],sheet:["spreadsheets","table","excel"],shortcuts:["arrow"],shuffle:["music"],sidebar:["menu"],"sidebar-close":["menu"],"sidebar-open":["menu"],"skip-back":["arrow","previous","music"],"skip-back-ten":["rewind","back","jump"],"skip-forward":["arrow","skip","next","music"],"skip-forward-ten":["fast","forward","jump"],sliders:["settings","controls"],"sliders-horizontal":["settings","filters","controls"],"sort-asc":["filter"],"sort-desc":["filter"],"stop-circle":["media","music"],"stop-filled":["square","pause"],table:["sheet","grid","spreadsheet"],takeover:["phone","call"],transfer:["phone","arrows","call"],"transfer-webchat":["discussion","message"],trash:["garbage","delete","remove","bin"],unlock:["security"],"unlock-filled":["security"],"x-circle":["cancel","close","delete","remove","times","clear","maths"],"zoom-in":["magnifying glass","plus"],"zoom-out":["magnifying glass","plus"]},data:{activity:["pulse","health","action","motion"],"axis-3d":["gizmo","coordinates"],"bar-chart":["statistics","diagram","graph"],"bar-chart-2":["statistics","diagram","graph"],"bar-chart-3":["statistics","diagram","graph"],"bar-chart-4":["statistics","diagram","graph"],"bar-chart-horizontal":["statistics","diagram","graph"],binary:["code","digits","computer","zero","one"],equal:["calculate","maths"],"line-chart":["statistics","diagram","graph"],"pie-chart":["statistics","diagram"],"trending-down":["statistics"],"trending-up":["statistics"]},devices:{airplay:["stream","cast","mirroring"],battery:["power","electricity"],"battery-charging":["power","electricity"],"battery-full":["power","electricity"],"battery-low":["power","electricity"],"battery-medium":["power","electricity"],bluetooth:["wireless"],"bluetooth-connected":["paired"],"bluetooth-off":["lost"],"bluetooth-searching":["pairing"],calculator:["count","calculating machine"],camera:["photo","webcam","video"],"camera-off":["photo","webcam","video"],"camera-tracking":["focus","lens","video"],cast:["chromecast","airplay"],"download-cloud":["import"],"file-audio":["music","audio","sound","headphones"],film:["movie","video"],focus:["camera","lens","photo"],hd:[],headphones:["music","audio","sound"],"laptop-2":["computer"],"lightning-bolt":["power","energy","electricity","electric"],mic:["record","sound","listen","radio","podcast","microphone"],"mic-off":["record","sound","mute","microphone"],monitor:["tv","screen","display"],"monitor-off":["share"],"monitor-speaker":["devices","connect","cast"],mouse:["device","scroll","click"],plug:["power"],"print-fax":["printer","office","device"],printer:["fax","office","device"],"screen-share-off":["desktop","disconnect"],"share-screen":["screenshare"],smartphone:["phone","cellphone","device"],"smartphone-charging":["phone","cellphone","device","power"],speaker:["audio","music"],"switch-to-cellular":[],"switch-to-hd":[],usb:["universal","serial","bus","controller","connector","interface"],video:["camera","movie","film"],"video-off":["camera","movie","film"],volume:["music","sound","mute"],"volume-1":["music","sound"],"volume-2":["music","sound"],"volume-x":["music","sound","mute"],webcam:["camera","security"],wifi:["connection","signal","wireless"],"wifi-off":["disabled"],"zap-off":["flash","camera","lightning"]},editing:{asterisk:["reference"],"at-sign":["mention","at","email","message"],baseline:["text","format","color"],bold:["text","strong","format"],branch:[],"call-merge":[],edit:["pencil","change"],"edit-2":["pencil","change"],eraser:["pencil","drawing","undo","delete","clear"],"expert-node":[],image:["picture","photo"],indent:["text","tab"],inspect:["element","mouse","click","cursor","pointer","box"],italic:["oblique","text","format"],keyboard:["layout","spell","settings","mouse"],"link-2":["chain","url"],"link-2-off":["unchain","chain"],"list-bullet":["options"],"list-checks":["todo","done"],paperclip:["attachment","file"],quote:["quotation"],scissors:["cut"],strikethrough:["cross out","delete","remove","format"],"text-cursor":["select"],type:["text","font","typography"],underline:["text","format"],"unlink-2":["url","unchain","unchain"]},general:{accessibility:["disability","disabled","dda","wheelchair"],album:["photo","book"],archive:["index","box"],"archive-restore":["archive","unarchive","restore","index","box"],book:["read","dictionary","booklet","magazine","library"],"book-open":["read","library"],bookmark:["read","clip","marker","tag"],"bookmark-minus":["delete","remove"],"bookmark-plus":["add"],box:["cube","package"],"box-select":["selection","square","rectangular","marquee","tool"],boxes:["cubes","packages","parts","group","units","collection","cluster"],check:["done"],"check-circle":["done"],close:["cancel","close","delete","remove","times","clear","maths"],code:["source","programming","html","xml"],copy:["clone","duplicate"],copyright:["licence"],"credit-card":["bank","purchase","payment","cc"],dissatisfied:[],flag:["report"],"flag-off":["unflag"],"form-input":["2fa","authenticate","login","field","text"],gauge:["dashboard"],hash:["hashtag","number","pound"],"hash-bold":["number","pound","hashtag","number"],"help-circle":["question mark"],inbox:["email"],info:["help"],"isolated-queries":["list","alert","query","queries"],keypad:["number","dialpad","keypad"],library:["book","music","album"],"log-in":["sign in","arrow","enter","auth"],"log-out":["sign out","arrow","exit","auth"],"more-horizontal":["ellipsis","menu","options"],"more-vertical":["ellipsis","menu","options"],network:["tree"],neutral:["bored","meh","average","face"],"not-enough-queries":["list","plus","query","queries"],package:["box","container"],"party-popper":["emoji","congratulations","celebration","party"],power:["on","off","device"],puzzle:["component","module","part","piece"],queries:["list","question mark","query","queries"],satisfied:["happy","pleased","smile","great","good"],scroll:["paper","log","scripture","document","parchment"],settings:["cog","edit","gear","preferences"],shield:["security","secure"],"shield-alert":["security","secure","virus","admin","safety"],"shield-check":["security","secure","done","save"],"shield-close":["security","secure","wrong","unsave","virus"],"shield-off":["security","secure","security","insecure"],"somewhat-dissatisfied":["face"],"somewhat-satisfied":["smile","happy","pleased","good","face"],sparkle:["stars","magic","help"],star:["bookmark","favorite","like","review","rating"],"star-filled":["bookmark","favorite","like","review","rating"],tag:["label","badge","ticket","mark"],tags:["labels","badges","tickets","marks","copy","multiple"],"text-cursor-input":["select"],"thumbs-down":["dislike","bad","emotion"],"thumbs-up":["like","good","emotion"],tools:["wrench"],"too-many-queries":["list","minus","query","queries"],triangle:["delta","shape"],"very-dissatisfied":["sad","frown","unhappy","bad","poor","face"],"very-satisfied":["happy","smile","face","great","pleased","good"]},os:{clipboard:["copy","paste"],"clipboard-check":["copied","pasted"],"clipboard-copy":["copy","paste"],"clipboard-edit":["edit","paste","signature"],"clipboard-list":["copy","paste","tasks"],"clipboard-signature":["paste","signature"],"clipboard-type":["paste","format","text"],"clipboard-x":["copy","paste","discard","remove"],"cloud-off":["disconnect"],command:["keyboard","cmd","terminal","prompt"],cpu:["processor","technology","computer","chip"],"external-link":["outbound"],file:["document"],files:["multiple","copy","documents"],fingerprint:["2fa","authentication","biometric","identity","security"],folder:["directory"],"folder-tree":["directory","tree","browser"],folders:["multiple","copy","directories"],"hard-drive":["computer","server","memory","data","ssd","disk","hard disk"],import:["save"],languages:["translate"],"life-buoy":["help","rescue","ship","life ring","support"],"qr-code":["barcode"],save:["floppy disk"],scan:["qr-code"],"scan-face":["face","biometric","authentication","2fa"],"share-2":["network","connections"],"signal-best":["connection","wireless","gsm","phone","2g","3g","4g","5g"],"signal-high":["connection","wireless","gsm","phone","2g","3g","4g","5g"],"signal-low":["connection","wireless","gsm","phone","2g","3g","4g","5g"],"signal-medium":["connection","wireless","gsm","phone","2g","3g","4g","5g"],"signal-zero":["connection","wireless","gsm","phone","2g","3g","4g","5g","lost"],slash:["cancel","ban","no","stop","forbidden","prohibited","error"],"toy-brick":["lego","block","addon","plugin","integration"],upload:["file"],"upload-cloud":["file"]},people:{user:["person","account","contact"],"user-check":["followed","subscribed","done"],"user-minus":["delete","remove","unfollow","unsubscribe"],"user-plus":["new","add","create","follow","subscribe"],"user-remove":["delete","remove","unfollow","unsubscribe","unavailable"],users:["group","people"]},places:{briefcase:["work","bag","baggage","folder"],building:["organisation","organization"],"building-2":["business","company","enterprise","skyscraper","organisation","organization"],factory:["building","business","energy","industry","manufacture","sector"],"globe-2":["world","browser","language","translate"],home:["house","living"],map:["location","navigation","travel"],"map-pin":["location","navigation","travel","marker"]},time:{"alarm-check":["done"],"alarm-clock-off":["morning","turn-off"],"alarm-minus":["remove"],"alarm-plus":["add"],calendar:["date","time","event","birthdate","birthday"],"calendar-check":["date","time","event","confirm","subscribe"],"calendar-check-2":["date","time","event","confirm","subscribe"],"calendar-clock":["date","time","event","clock"],"calendar-days":["date","time","event"],"calendar-heart":["date","time","event","heart","favourite","subscribe"],"calendar-minus":["date","time","event","delete","remove"],"calendar-off":["date","time","event","delete","remove"],"calendar-plus":["date","time","event","add","subscribe","create","new"],"calendar-range":["date","time","event","range","period"],"calendar-search":["date","time","search","events"],"calendar-x":["date","time","event","remove","busy"],clock:["time","watch","alarm"],"clock-1":["time","watch","alarm"],"clock-10":["time","watch","alarm"],"clock-11":["time","watch","alarm"],"clock-12":["time","watch","alarm"],"clock-2":["time","watch","alarm"],"clock-3":["time","watch","alarm"],"clock-4":["time","watch","alarm"],"clock-5":["time","watch","alarm"],"clock-6":["time","watch","alarm"],"clock-7":["time","watch","alarm"],"clock-8":["time","watch","alarm"],"clock-9":["time","watch","alarm"],hourglass:["timer","time","sandglass"],infinity:["unlimited","forever","loop","maths"],loading:[],timer:["time","timer","stopwatch"],"timer-off":["time","timer","stopwatch"],"timer-reset":["time","timer","stopwatch"]},weather:{cloud:["weather"],"cloud-cog":["computing","ai","cluster","network"],"cloud-drizzle":["weather","shower"],"cloud-fog":["weather","mist"],"cloud-hail":["weather","rainfall"],"cloud-lightning":["weather","bolt"],"cloud-moon":["weather","night"],"cloud-moon-rain":["weather","partly","night","rainfall"],"cloud-rain":["weather","rainfall"],"cloud-rain-wind":["weather","rainfall"],"cloud-snow":["weather","blizzard"],"cloud-sun":["weather","partly"],"cloud-sun-rain":["weather","partly","rainfall"],cloudy:["clouds"],haze:["mist","fog"],moon:["dark","night"],snowflake:["cold","weather","freeze","snow","winter"],sun:["brightness","weather","light","summer"],"sun-dim":["brightness","dim","low","brightness low"],"sun-medium":["brightness","medium"],sunrise:["weather","time","morning","day"],sunset:["weather","time","evening","night"],thermometer:["temperature","celsius","fahrenheit","weather"],"thermometer-snowflake":["temperature","celsius","fahrenheit","weather","cold","freeze","freezing"],"thermometer-sun":["temperature","celsius","fahrenheit","weather","warm","hot"],umbrella:["rain","weather"],wind:["weather","air","blow"]}};const D=s=>(R("data-v-6a2e4946"),s=s(),F(),s),ke={class:"d-d-grid d-gg16 d-g-cols6 d-mt8 d-mb16"},ye={class:"d-gc4"},xe={class:"d-gc2 d-select"},ze=D(()=>e("label",{class:"d-vi-visible-sr",for:"Dialtone--SelectCategory"},`
        Categories
      `,-1)),qe=D(()=>e("option",{value:"all",selected:""},`
          All categories
        `,-1)),$e=["value","disabled"],Ce=["textContent"],Ie={class:"d-gl-docsite-icons"},Se={key:0,class:"d-d-flex d-fl-center d-p16 d-gg4 d-fc-tertiary d-fs-300"},Ne=D(()=>e("span",null,"No results found for",-1)),Ve={class:"d-fw-semibold"},je={__name:"IconCatalog",setup(s){const u=z(null),n=z("all"),o=z(null),g=z(null),p=y(()=>Object.keys(A)),v=(c,f)=>{const m={},j=new RegExp(f,"i");for(const h in c)for(const r in c[h])j.test(r)&&(m[h]===void 0&&(m[h]={}),m[h][r]=c[h][r]);return m},S=()=>{o.value=null,_(),g.value.focus()},_=()=>{n.value="all"},N=y(()=>{var c;return((c=o.value)==null?void 0:c.length)>1}),K=y(()=>Object.keys(E.value).length>0),V=y(()=>N.value?(_(),v(A,o.value)):A),E=y(()=>n.value==="all"?V.value:Object.assign({},{[n.value]:V.value[n.value]})),U=c=>Object.keys(V.value).includes(c),Z=c=>{u.value=c!==u.value?c:null};return(c,f)=>{const m=b("dt-icon"),j=b("dt-button"),h=b("dt-input");return i(),l(x,null,[e("div",ke,[e("div",ye,[a(h,{id:"search-input",ref_key:"searchRef",ref:g,modelValue:o.value,"onUpdate:modelValue":f[0]||(f[0]=r=>o.value=r),"aria-label":"Search icon",placeholder:"Search for an icon",class:"d-input d-input-icon--left d-input-icon--right",type:"text",autocomplete:"off"},{leftIcon:w(()=>[a(m,{name:"search"})]),rightIcon:w(()=>[a(j,{kind:"muted",importance:"clear",circle:"",id:"search-input-button-close","aria-label":"Clear filters",onClick:S},{icon:w(()=>[a(m,{name:"close"})]),_:1})]),_:1},8,["modelValue"])]),t(),e("div",xe,[ze,t(),W(e("select",{id:"Dialtone--SelectCategory","onUpdate:modelValue":f[1]||(f[1]=r=>n.value=r),class:"d-select__input d-tt-capitalize"},[qe,t(),(i(!0),l(x,null,q($(p),r=>(i(),l("option",{key:r,value:r,disabled:!U(r)},d(r),9,$e))),128))],512),[[J,n.value]])])]),t(),(i(!0),l(x,null,q($(E),(r,k)=>(i(),l("div",{key:k,class:"d-mb16"},[e("span",{class:"d-headline-medium d-tt-capitalize",textContent:d(k)},null,8,Ce),t(),e("div",Ie,[(i(!0),l(x,null,q(r,(G,P,B)=>(i(),M(_e,{key:`${k}-${B}`,"file-name":P,keywords:G,selected:u.value===`${k}-${B}`,onSelectIcon:ot=>Z(`${k}-${B}`)},null,8,["file-name","keywords","selected","onSelectIcon"]))),128))])]))),128)),t(),$(K)?C("v-if",!0):(i(),l("div",Se,[Ne,t(),e("strong",Ve,`
      “`+d(o.value)+`”
    `,1)]))],64)}}},Be=I(je,[["__scopeId","data-v-6a2e4946"],["__file","IconCatalog.vue"]]),Ae={},Le={"aria-hidden":"true",focusable:"false","data-name":"Inbox",class:"d-icon d-icon--inbox",viewBox:"0 0 12 12"},De=e("path",{fill:"currentColor","fill-rule":"evenodd",d:"M3.62 1.5h4.76a1.5 1.5 0 0 1 1.342.832l1.725 3.444A.5.5 0 0 1 11.5 6v3a1.5 1.5 0 0 1-1.5 1.5H2A1.5 1.5 0 0 1 .5 9V6a.5.5 0 0 1 .053-.224l1.724-3.443A1.503 1.503 0 0 1 3.62 1.5Zm0 1a.5.5 0 0 0-.447.277v.002L1.81 5.5H4a.5.5 0 0 1 .416.223L5.268 7h1.464l.852-1.277A.5.5 0 0 1 8 5.5h2.19L8.829 2.779v-.002A.5.5 0 0 0 8.38 2.5m2.12 4H8.268l-.852 1.277A.5.5 0 0 1 7 8H5a.5.5 0 0 1-.416-.223L3.732 6.5H1.5V9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V6.5Z","clip-rule":"evenodd"},null,-1),Ee=[De];function He(s,u){return i(),l("svg",Le,Ee)}const H=I(Ae,[["render",He],["__file","Inbox.vue"]]),Me={class:"d-d-flex d-gg8 d-ai-center"},Oe={class:"d-notice d-notice--info d-mt24 d-wmx100p",role:"status","aria-hidden":"false"},Re={class:"d-notice__icon"},Fe={class:"d-notice__content d-stack4"},Ke=e("strong",null,"Looking for the previous icon set?",-1),Ue=e("h2",{id:"icon-catalog",tabindex:"-1",class:"d-docsite--header-2"},[t("Icon catalog "),e("a",{class:"header-anchor d-link d-td-none d-docsite--link d-link",href:"#icon-catalog","aria-hidden":"true"},"#")],-1),Ze=e("h2",{id:"variants-and-examples",tabindex:"-1",class:"d-docsite--header-2"},[t("Variants and examples "),e("a",{class:"header-anchor d-link d-td-none d-docsite--link d-link",href:"#variants-and-examples","aria-hidden":"true"},"#")],-1),Ge=e("h3",{id:"base-styles",tabindex:"-1",class:"d-docsite--header-3"},[t("Base Styles "),e("a",{class:"header-anchor d-link d-td-none d-docsite--link d-link",href:"#base-styles","aria-hidden":"true"},"#")],-1),Pe=X(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span>
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
</code></pre></div><h2 id="sizes" tabindex="-1" class="d-docsite--header-2">Sizes <a class="header-anchor d-link d-td-none d-docsite--link d-link" href="#sizes" aria-hidden="true">#</a></h2>`,2),Qe={class:"d-table dialtone-doc-table"},Te=e("thead",null,[e("tr",null,[e("th",{scope:"col"},"Size"),t(),e("th",{scope:"col"},"Width and height"),t(),e("th",{scope:"col",class:"d-w35p"},"Class"),t(),e("th",{scope:"col",class:"d-ta-center"},"Example"),t(),e("th",{scope:"col"},[e("span",{class:"d-vi-visible-sr"},"Exception")])])],-1),We={scope:"row"},Je={class:"d-ff-mono d-fs-100"},Xe={class:"d-ff-mono d-fs-100"},Ye={class:"d-ta-center"},et={class:"d-ta-right"},tt={key:0,class:"d-badge d-badge--warning"},at={__name:"icon.html",setup(s){return(u,n)=>{const o=b("dt-icon"),g=b("code-well-header"),p=b("router-link");return i(),l("div",null,[a(g,null,{default:w(()=>[e("div",Me,[a(o,{name:"lightning-bolt",size:"100"}),t(),a(o,{name:"lightning-bolt",size:"200"}),t(),a(o,{name:"lightning-bolt",size:"300"}),t(),a(o,{name:"lightning-bolt",size:"400"}),t(),a(o,{name:"lightning-bolt",size:"500"}),t(),a(o,{name:"lightning-bolt",size:"600"}),t(),a(o,{name:"lightning-bolt",size:"700"}),t(),a(o,{name:"lightning-bolt",size:"800"})])]),_:1}),t(),e("aside",Oe,[e("div",Re,[a(o,{name:"info"})]),t(),e("div",Fe,[e("p",null,[Ke,t(),a(p,{class:"d-link d-link--muted",to:"/design/icons/"},{default:w(()=>[t("Documentation for the deprecated icon set")]),_:1}),t(` will remain available until this new icon is more fully adopted.
    `)])])]),t(),Ue,t(),a(Be),Ze,t(),Ge,t(),a(g,null,{default:w(()=>[a(H)]),_:1}),t(),Pe,t(),e("table",Qe,[Te,t(),e("tbody",null,[(i(!0),l(x,null,q($(ee),({size:v,width_height:S,className:_,deviceOnly:N})=>(i(),l("tr",null,[e("th",We,d(v),1),t(),e("td",Je,d(S),1),t(),e("td",Xe,"."+d(_),1),t(),e("td",Ye,[a(H,{class:O(_)},null,8,["class"])]),t(),e("td",et,[N?(i(),l("span",tt,"Device only")):C("v-if",!0)])]))),256))])])])}}},rt=I(at,[["__file","icon.html.vue"]]);export{rt as default};
