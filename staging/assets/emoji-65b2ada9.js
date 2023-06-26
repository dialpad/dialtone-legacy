import{g as B,y as Q,d as D,_ as W,v as X,a6 as f,w as Y}from"./emoji_text_wrapper-ec9bfaf1-b54edaf8.js";import{Q as Je,x as Ge,a7 as Ke,a8 as Qe,a9 as We,aa as Xe,ab as Ye,ac as Ze,ad as el,ae as ll,af as tl,ag as al,ah as ol,ai as il,aj as sl,ak as nl,al as rl,am as cl,an as ul,ao as dl,ap as ml,aq as bl,ar as pl}from"./emoji_text_wrapper-ec9bfaf1-b54edaf8.js";import{r as g,k as I,x as d,y as v,G as L,N as j,t as Z,w as $,v as r,B as U,F as V,z as R,O as ee,A as le,a7 as te,a6 as ae,o as oe,aj as ie,D as q,L as x,M,H as z,ak as se,E as ne,C as P}from"./framework-ecbb713b.js";const re={class:"d-emoji-picker__search d-emoji-picker__alignment"},ce={class:"d-emoji-picker__search-button"},ue={__name:"emoji_search",props:{searchPlaceholderLabel:{type:String,required:!0},modelValue:{type:String,default:""}},emits:["update:modelValue"],setup(e){return(p,t)=>(r(),d("div",re,[L(W,{placeholder:e.searchPlaceholderLabel,"model-value":e.modelValue,"onUpdate:modelValue":t[1]||(t[1]=o=>p.$emit("update:modelValue",o))},ee({leftIcon:U(()=>[L(D,{name:"search"})]),_:2},[e.modelValue.length>0?{name:"rightIcon",fn:U(()=>[v("button",ce,[L(D,{name:"close",onClick:t[0]||(t[0]=o=>p.$emit("update:modelValue",""))})])]),key:"0"}:void 0]),1032,["placeholder","model-value"])]))}},de=B(ue,[["__scopeId","data-v-20dd73b1"]]),me={class:"d-emoji-picker__tabset"},be={__name:"emoji_tabset",props:{showRecentlyUsedTab:{type:Boolean,default:!1},scrollIntoTab:{type:Number,required:!0},isScrolling:{type:Boolean,default:!1},emojiFilter:{type:String,default:""},tabsetLabels:{type:Array,required:!0}},emits:["selected-tabset"],setup(e,{emit:p}){const t=e,o=[{label:"Recently used",icon:"clock"},{label:"Smiley’s and people",icon:"satisfied"},{label:"Nature",icon:"living-thing"},{label:"Food",icon:"food"},{label:"Activity",icon:"object"},{label:"Travel",icon:"transportation"},{label:"Objects",icon:"lightbulb"},{label:"Symbols",icon:"heart"},{label:"Flags",icon:"flag"}],m=I(()=>(t.showRecentlyUsedTab?o:o.slice(1)).map((n,y)=>({...n,label:t.tabsetLabels[y],id:(y+1).toString(),panelId:(y+1).toString()}))),c=I(()=>t.emojiFilter.length>0),k=g("1"),{isScrolling:u}=Z(t);$(()=>t.scrollIntoTab,()=>{!u.value&&!c.value&&(k.value=(t.scrollIntoTab+1).toString())}),$(c,()=>{c.value&&(k.value=null)});function _(n){u.value||(k.value=n),p("selected-tabset",n)}return(n,y)=>(r(),d("div",me,[L(Q,{"tab-list-class":"d-emoji-picker__tabset-list",selected:k.value},{tabs:U(()=>[(r(!0),d(V,null,R(j(m),T=>(r(),le(X,{id:T.id,key:T.id,"panel-id":T.panelId,label:T.label,"aria-controls":"d-emoji-picker-list",onClickCapture:te(A=>_(T.id),["stop"])},{default:U(()=>[L(D,{size:"400",name:T.icon},null,8,["name"])]),_:2},1032,["id","panel-id","label","onClickCapture"]))),128))]),_:1},8,["selected"])]))}},N="https://static.dialpadcdn.com/joypixels/png/unicode/32/",pe={class:"d-emoji-picker__selector"},ve={key:0,class:"d-emoji-picker__search-label d-emoji-picker__alignment"},ge={key:0},je={class:"d-emoji-picker__tab"},ke=["aria-label","onClick","onFocusin","onMouseover"],he=["alt","aria-label","title","src"],fe={key:2,class:"d-emoji-picker__alignment"},_e={class:"d-emoji-picker__tab"},ye=["aria-label","onClick","onFocusin","onMouseover"],Te=["alt","aria-label","title","src"],Se={__name:"emoji_selector",props:{emojiFilter:{type:String,default:""},skinTone:{type:String,required:!0},tabsetLabels:{type:Array,required:!0},selectedTabset:{type:Object,required:!0},searchResultsLabel:{type:String,required:!0},searchNoResultsLabel:{type:String,required:!0},recentlyUsedEmojis:{type:Array,default:()=>[]}},emits:["highlighted-emoji","selected-emoji","scroll-into-tab","is-scrolling"],setup(e,{emit:p}){const t=e,o=g(null),m=g(null),c=g(null),k=["Recently used","People","Nature","Food","Activity","Travel","Objects","Symbols","Flags"],u=I(()=>t.recentlyUsedEmojis.length?t.tabsetLabels.map(l=>({label:l,ref:g(null)})):t.tabsetLabels.slice(1).map(l=>({label:l,ref:g(null)}))),_=g(u.value[0].label),n=I(()=>t.recentlyUsedEmojis.length?k:k.slice(1)),y=g([]),T=I(()=>[...f[`People${t.skinTone}`],...f.Nature,...f.Food,...f[`Activity${t.skinTone}`],...f.Travel,...f[`Objects${t.skinTone}`],...f.Symbols,...f.Flags]),A=C(()=>{h()});$(T,()=>{h()},{immediate:!0}),$(()=>t.recentlyUsedEmojis,()=>{f["Recently used"]=t.recentlyUsedEmojis},{immediate:!0}),$(()=>t.emojiFilter,()=>{G(),A()}),$(()=>t.selectedTabset,l=>{J(l.tabId)},{deep:!0});function h(){const l=t.emojiFilter.toLowerCase();y.value=T.value.filter(i=>{const a=i.name.toLowerCase().includes(l),s=i.keywords.some(b=>b.toLowerCase().includes(l));return a||s})}function C(l,i=300){let a;return(...s)=>{clearTimeout(a),a=setTimeout(()=>l(...s),i)}}function w(l){return`${N+l}.png`}function H(l){l.target.parentNode.style.display="none"}function J(l){const i=u.value[l-1].ref.value[0];ae(()=>{const a=m.value,s=l==="1"?0:i.offsetTop-20;let b=!0,S=a.scrollTop;p("is-scrolling",!0),a.addEventListener("scroll",()=>{if(b){const E=a.scrollTop;(S<E&&E>=s||S>E&&E<=s)&&(b=!1,p("is-scrolling",!1)),S=E}}),a.scrollTop=s})}function G(){const l=m.value;l.scrollTop=0}function K(){c.value=new IntersectionObserver(l=>{l.forEach(i=>{var a,s,b,S,E;const{target:O}=i,F=parseInt(O.dataset.index);i.isIntersecting&&O.offsetTop<=o.value.offsetTop+50?(_.value=((a=u.value[F-1])==null?void 0:a.label)??((s=u.value[0])==null?void 0:s.label),p("scroll-into-tab",F-1)):i.boundingClientRect.bottom<=((b=o.value)==null?void 0:b.getBoundingClientRect().bottom)?(p("scroll-into-tab",F),_.value=(S=u.value[F])==null?void 0:S.label):F===1&&(p("scroll-into-tab",F),_.value=(E=u.value[0])==null?void 0:E.label)})}),c.value.observe(o.value),Array.from(m.value.children).forEach((l,i)=>{c.value.observe(l),l.dataset.index=i})}return oe(()=>{K()}),ie(()=>{c.value.disconnect()}),(l,i)=>(r(),d("div",pe,[v("div",{id:"d-emoji-picker-list",ref_key:"listRef",ref:m,class:"d-emoji-picker__list"},[e.emojiFilter?(r(),d("p",ve,q(y.value.length>0?e.searchResultsLabel:e.searchNoResultsLabel),1)):(r(),d("div",{key:1,ref_key:"tabCategoryRef",ref:o,class:"d-emoji-picker__category d-emoji-picker__alignment"},[v("p",null,q(_.value),1)],512)),(r(!0),d(V,null,R(j(u),(a,s)=>x((r(),d("div",{key:s,ref_for:!0,ref:a.ref,class:"d-emoji-picker__alignment"},[s?(r(),d("p",ge,q(a.label),1)):z("",!0),v("div",je,[(r(!0),d(V,null,R(j(f)[j(n)[s]+e.skinTone]?j(f)[j(n)[s]+e.skinTone]:j(f)[j(n)[s]],b=>(r(),d("button",{key:b.shortname,type:"button","aria-label":b.name,onClick:S=>l.$emit("selected-emoji",b),onFocusin:S=>l.$emit("highlighted-emoji",b),onFocusout:i[0]||(i[0]=S=>l.$emit("highlighted-emoji",null)),onMouseover:S=>l.$emit("highlighted-emoji",b),onMouseleave:i[1]||(i[1]=S=>l.$emit("highlighted-emoji",null))},[v("img",{class:"d-icon d-icon--size-500",alt:b.name,"aria-label":b.name,title:b.name,src:w(b.unicode_character),onError:H},null,40,he)],40,ke))),128))])])),[[M,!e.emojiFilter]])),128)),e.emojiFilter?(r(),d("div",fe,[v("div",_e,[(r(!0),d(V,null,R(y.value,a=>(r(),d("button",{key:a.shortname,type:"button","aria-label":a.name,onClick:s=>l.$emit("selected-emoji",a),onFocusin:s=>l.$emit("highlighted-emoji",a),onFocusout:i[2]||(i[2]=s=>l.$emit("highlighted-emoji",null)),onMouseover:s=>l.$emit("highlighted-emoji",a),onMouseleave:i[3]||(i[3]=s=>l.$emit("highlighted-emoji",null))},[v("img",{class:"d-icon d-icon--size-500",alt:a.name,"aria-label":a.name,title:a.name,src:`${j(N)+a.unicode_character}.png`},null,8,Te)],40,ye))),128))])])):z("",!0)],512)]))}},Le=B(Se,[["__scopeId","data-v-183240d8"]]),Ce={class:"d-emoji-picker__skin-list"},Ee=["onClick"],we=["alt","aria-label","title","src"],Fe={class:"d-emoji-picker__skin-selected"},$e=["alt","aria-label","title","src"],Ie={__name:"emoji_skin_selector",props:{skinTone:{type:String,required:!0},isHovering:{type:Boolean,default:!1},skinSelectorButtonTooltipLabel:{type:String,required:!0}},emits:["skin-tone"],setup(e,{emit:p}){const t=e,o=[{name:":wave_tone1:",unicode_output:"1f44b-1f3fb",skinTone:"Light",skinCode:"_tone1"},{name:":wave_tone2:",unicode_output:"1f44b-1f3fc",skinTone:"MediumLight",skinCode:"_tone2"},{name:":wave_tone3:",unicode_output:"1f44b-1f3fd",skinTone:"Medium",skinCode:"_tone3"},{name:":wave_tone4:",unicode_output:"1f44b-1f3fe",skinTone:"MediumDark",skinCode:"_tone4"},{name:":wave_tone5:",unicode_output:"1f44b-1f3ff",skinTone:"Dark",skinCode:"_tone5"},{name:":wave:",unicode_output:"1f44b",skinTone:"Default",skinCode:""}],m=g(o.find(u=>u.skinTone===t.skinTone)),c=g(!1);se(()=>t.isHovering&&(c.value=!1));function k(u){m.value=u,c.value=!1,p("skin-tone",u.skinTone)}return(u,_)=>(r(),d("div",null,[x(v("div",Ce,[(r(),d(V,null,R(o,n=>v("button",{key:n.name,class:ne({selected:m.value.skinCode===n.skinCode}),onClick:y=>k(n)},[v("img",{class:"d-icon d-icon--size-500",alt:n.name,"aria-label":n.name,title:n.name,src:`${j(N)+n.unicode_output}.png`},null,8,we)],10,Ee)),64))],512),[[M,c.value]]),x(v("div",Fe,[L(Y,{placement:"top-end"},{anchor:U(()=>[v("button",{onClick:_[0]||(_[0]=n=>c.value=!0)},[v("img",{class:"d-icon d-icon--size-500",alt:m.value.name,"aria-label":m.value.name,title:m.value.name,src:`${j(N)+m.value.unicode_output}.png`},null,8,$e)])]),default:U(()=>[P(q(e.skinSelectorButtonTooltipLabel)+" ",1)]),_:1})],512),[[M,!c.value]])]))}},Ue=B(Ie,[["__scopeId","data-v-5c3fd4f6"]]),Ve={class:"d-emoji-picker__data"},Re=["alt","aria-label","title","src"],qe={__name:"emoji_description",props:{emoji:{type:Object,default:null}},setup(e){return(p,t)=>{var o;return r(),d("div",Ve,[e.emoji?(r(),d("img",{key:0,class:"d-icon d-icon--size-500",alt:e.emoji.name,"aria-label":e.emoji.name,title:e.emoji.name,src:`${j(N)+e.emoji.unicode_character}.png`},null,8,Re)):z("",!0),P(" "+q((o=e.emoji)==null?void 0:o.name),1)])}}},Ne=B(qe,[["__scopeId","data-v-48c61881"]]),Ae={class:"d-emoji-picker"},Be={class:"d-emoji-picker--header"},De={class:"d-emoji-picker--body"},xe={class:"d-emoji-picker--footer"},Oe={__name:"emoji_picker",props:{recentlyUsedEmojis:{type:Array,default:()=>[]},searchPlaceholderLabel:{type:String,required:!0},searchResultsLabel:{type:String,required:!0},searchNoResultsLabel:{type:String,required:!0},tabSetLabels:{type:Array,required:!0},skinTone:{type:String,default:"Default"},skinSelectorButtonTooltipLabel:{type:String,required:!0}},emits:["selected-emoji","skin-tone"],setup(e,{emit:p}){const t=e,o=g(""),m=g(null),c=g({}),k=g(0),u=g(!1),_=I(()=>t.recentlyUsedEmojis.length>0);function n(h){o.value="",c.value=h,c.value={...c.value,tabId:h}}function y(h){k.value=h}function T(h){u.value=h}function A(h){m.value=h}return(h,C)=>(r(),d("div",Ae,[v("div",Be,[L(be,{"emoji-filter":o.value,"show-recently-used-tab":j(_),"scroll-into-tab":k.value,"tabset-labels":e.tabSetLabels,"is-scrolling":u.value,onSelectedTabset:n},null,8,["emoji-filter","show-recently-used-tab","scroll-into-tab","tabset-labels","is-scrolling"])]),v("div",De,[L(de,{modelValue:o.value,"onUpdate:modelValue":C[0]||(C[0]=w=>o.value=w),"search-placeholder-label":e.searchPlaceholderLabel},null,8,["modelValue","search-placeholder-label"]),L(Le,{"emoji-filter":o.value,"skin-tone":e.skinTone,"tabset-labels":e.tabSetLabels,"search-results-label":e.searchResultsLabel,"search-no-results-label":e.searchNoResultsLabel,"recently-used-emojis":e.recentlyUsedEmojis,"selected-tabset":c.value,onScrollIntoTab:y,onIsScrolling:T,onHighlightedEmoji:A,onSelectedEmoji:C[1]||(C[1]=w=>p("selected-emoji",w))},null,8,["emoji-filter","skin-tone","tabset-labels","search-results-label","search-no-results-label","recently-used-emojis","selected-tabset"])]),v("div",xe,[L(Ne,{emoji:m.value},null,8,["emoji"]),L(Ue,{"is-hovering":!!m.value,"skin-selector-button-tooltip-label":e.skinSelectorButtonTooltipLabel,"skin-tone":e.skinTone,onSkinTone:C[2]||(C[2]=w=>p("skin-tone",w))},null,8,["is-hovering","skin-selector-button-tooltip-label","skin-tone"])])]))}};export{Je as DtEmoji,Oe as DtEmojiPicker,Ge as DtEmojiTextWrapper,Ke as codeToEmojiData,Qe as customEmojiAssetUrl,We as defaultEmojiAssetUrl,Xe as emojiFileExtensionLarge,Ye as emojiFileExtensionSmall,Ze as emojiImageUrlLarge,el as emojiImageUrlSmall,ll as emojiJson,tl as emojiVersion,al as filterValidShortCodes,ol as findEmojis,il as findShortCodes,sl as getEmojiData,nl as setCustomEmojiJson,rl as setCustomEmojiUrl,cl as setEmojiAssetUrlLarge,ul as setEmojiAssetUrlSmall,dl as shortcodeToEmojiData,ml as stringToUnicode,bl as unicodeToString,pl as validateCustomEmojiJson};