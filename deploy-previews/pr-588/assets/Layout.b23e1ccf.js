var ce=Object.defineProperty,ue=Object.defineProperties;var he=Object.getOwnPropertyDescriptors;var X=Object.getOwnPropertySymbols;var pe=Object.prototype.hasOwnProperty,_e=Object.prototype.propertyIsEnumerable;var J=(s,t,e)=>t in s?ce(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,Q=(s,t)=>{for(var e in t||(t={}))pe.call(t,e)&&J(s,e,t[e]);if(X)for(var e of X(t))_e.call(t,e)&&J(s,e,t[e]);return s},Z=(s,t)=>ue(s,he(t));import{_ as x,r as D,o as l,c as h,a,t as B,b as g,w,F as T,d as ae,e as I,C as M,g as V,i as G,f as z,x as C,n as E,z as N,D as U,E as ne,G as $,u as n,H as ee,s as L,q as S,J as F,K as ve,L as me,M as fe,T as oe,N as be,O as ge,P as ie,Q as ke,R as q,S as le,B as H,U as $e,V as K,W as te,X as O,Y as R,Z as we,$ as ye,a0 as Le,a1 as Se,a2 as xe,y as Ce,a3 as Be,a4 as Ie}from"./app.a40a2822.js";import Pe from"./IconSearch.65e46dca.js";import Te from"./IconMenu.7d87d411.js";import De from"./IconArrowBackIos.9f3459c5.js";import Me from"./IconLaunch.691eedb7.js";const Ee={name:"HomePage",setup(){return{lede:"Documented styles, utility classes, and components to help you quickly design and build unified experiences across Dialpad and Dialpad Meetings.",headline:"Improve your UI's reception with Dialtone"}}},Ne={class:"hero d-mnt16 d-bgr-none"},Ae={class:"hero--inner-wrapper d-d-flex d-jc-space-between d-mx-auto d-wmx1340 d-pl16 d-pr16"},He={class:"hero--content d-d-flex d-fd-column d-jc-center"},ze={class:"d-headline42 d-lh6 d-mb12"},Re={class:"d-fs20 d-lh6 d-mb8"},Ue=ae('<div class="d-mb48"><a class="d-td-unset" href="https://github.com/dialpad/dialtone/"><img alt="Dialtone CSS version number" src="https://img.shields.io/github/package-json/v/dialpad/dialtone?color=A687FF&amp;label=CSS"></a><a class="d-td-unset" href="https://github.com/dialpad/dialtone-vue"><img id="dialtone-vue-badge" alt="Dialtone Vue version number" src="https://img.shields.io/badge/Vue-v0.0.0-A687FF"></a></div>',1),Ve=I("Get Started"),Ge=["src"],Oe={class:"links d-d-grid d-gg16 d-g-cols12 d-wmx1340 d-mx-auto"},je={class:"d-gc4 link d-px32 d-ta-center"},Fe=["src"],qe=a("h2",{class:"link--headline d-fs28 d-lh4 d-mb12"},"Design",-1),Ke=a("p",{class:"link--paragraph d-fs18 d-lh6 d-mb8"},"Foundational color, iconography, and spacing guidelines",-1),Ye=I("Browse design guidelines"),We={class:"d-gc4 link d-px32 d-ta-center"},Xe=["src"],Je=a("h2",{class:"link--headline d-fs28 d-lh4 d-mb12"},"Utilities",-1),Qe=a("p",{class:"link--paragraph d-fs18 d-lh6 d-mb8"},"Atomic CSS utility classes so you don't have to write custom CSS",-1),Ze=I("Browse utility classes"),et={class:"d-gc4 link d-px32 d-ta-center"},tt=["src"],st=a("h2",{class:"link--headline d-fs28 d-lh4 d-mb12"},"Components",-1),at=a("p",{class:"link--paragraph d-fs18 d-lh6 d-mb8"},"Presentational UI components offered in CSS and Vue",-1),nt={class:"d-d-inline-flex d-fd-column"},ot=I("Browse CSS components"),it=a("a",{class:"d-link link--link",href:"https://vue.dialpad.design/",target:"_blank"},"Browse Vue components",-1),lt=a("section",{class:"d-bgc-purple-500 d-py64 d-ta-center"},[a("p",{class:"d-fc-white d-fs24 d-fw-bold d-px48"},"Don't see something? Want to contribute?"),a("a",{class:"d-btn d-btn--inverted d-btn--primary d-mt16",href:"https://forms.monday.com/forms/8a9a6ff69d7e9f95caee029c2806e2c1?r=use1",target:"_blank"},"Make a request")],-1);function rt(s,t,e,r,o,c){const u=D("router-link");return l(),h(T,null,[a("section",Ne,[a("div",Ae,[a("div",He,[a("h1",ze,B(r.headline),1),a("p",Re,B(r.lede),1),Ue,g(u,{class:"d-btn d-btn--primary d-btn--lg",to:"/getting-started/installation.html"},{default:w(()=>[Ve]),_:1})]),a("img",{alt:"",class:"hero--image d-w50p d-as-flex-start",src:s.$withBase("/assets/images/home-hero.png")},null,8,Ge)])]),a("section",Oe,[a("div",je,[a("img",{alt:"",class:"link--image d-h96 d-mb24",src:s.$withBase("/assets/images/home-design.svg")},null,8,Fe),qe,Ke,g(u,{class:"d-link link--link",to:"/design/colors/color-palette"},{default:w(()=>[Ye]),_:1})]),a("div",We,[a("img",{alt:"",class:"link--image d-h96 d-mb24",src:s.$withBase("/assets/images/home-utilities.svg")},null,8,Xe),Je,Qe,g(u,{class:"d-link link--link",to:"/utilities/backgrounds/attachment"},{default:w(()=>[Ze]),_:1})]),a("div",et,[a("img",{alt:"",class:"link--image d-h96 d-mb24",src:s.$withBase("/assets/images/home-components.svg")},null,8,tt),st,at,a("div",nt,[g(u,{class:"d-link link--link",to:"/components/avatar"},{default:w(()=>[ot]),_:1}),it])])]),lt],64)}var dt=x(Ee,[["render",rt],["__file","Home.vue"]]);const ct={class:"d-ml-auto d-d-none lg:d-d-flex d-ai-center"},ut={props:{items:Array,activeLink:String},emits:["search"],setup(s,{emit:t}){const e=M(!1);M(void 0);function r(){t("search")}function o(){e.value=!e.value,document.body.classList.toggle("d-of-hidden",!!e.value)}return(c,u)=>{const p=D("icon-close"),i=D("router-link");return l(),h("div",ct,[V(a("span",{onClick:r,class:"js-mobile-header-search d-c-pointer d-mr16"},[g(Pe)],512),[[G,!e.value]]),V(a("span",{onClick:o,class:"js-mobile-header-menu d-c-pointer"},[g(Te)],512),[[G,!e.value]]),V(a("span",{onClick:o,class:"js-mobile-header-close d-c-pointer"},[g(p)],512),[[G,e.value]]),a("nav",{class:E(["mobile-header-drop-down-menu d-ps-fixed d-l0 d-w100p d-bgc-white d-of-auto d-fs24 d-d-flex d-fd-column d-ai-baseline d-py24 d-px16",{"d-o0 d-d-none":!e.value}])},[(l(!0),h(T,null,z(s.items,_=>(l(),C(i,{to:_.link,class:E(["d-link d-mb12",{"router-link-active":s.activeLink===_.text}]),onClick:o},{default:w(()=>[I(B(_.text),1)]),_:2},1032,["to","class"]))),256))],2)])}}};var ht=x(ut,[["__scopeId","data-v-f7f758e4"],["__file","MobileNavbar.vue"]]);const pt=["href","rel","target","aria-label"],_t=N({inheritAttrs:!1}),vt=N(Z(Q({},_t),{props:{item:{type:Object,required:!0}},setup(s){const t=s,e=U(),r=fe(),{item:o}=ne(t),c=$(()=>F(o.value.link)),u=$(()=>ve(o.value.link)||me(o.value.link)),p=$(()=>{if(!u.value){if(o.value.target)return o.value.target;if(c.value)return"_blank"}}),i=$(()=>p.value==="_blank"),_=$(()=>!c.value&&!u.value&&!i.value),y=$(()=>{if(!u.value){if(o.value.rel)return o.value.rel;if(i.value)return"noopener noreferrer"}}),k=$(()=>o.value.ariaLabel||o.value.text),d=$(()=>{const b=Object.keys(r.value.locales);return b.length?!b.some(v=>v===o.value.link):o.value.link!=="/"}),m=$(()=>d.value?e.path.startsWith(o.value.link):!1),f=$(()=>_.value?o.value.activeMatch?new RegExp(o.value.activeMatch).test(e.path):m.value:!1);return(b,v)=>{const P=D("RouterLink"),A=D("AutoLinkExternalIcon");return n(_)?(l(),C(P,ee({key:0,class:{"router-link-active":n(f)},to:n(o).link,"aria-label":n(k)},b.$attrs),{default:w(()=>[L(b.$slots,"before"),I(" "+B(n(o).text)+" ",1),L(b.$slots,"after")]),_:3},16,["class","to","aria-label"])):(l(),h("a",ee({key:1,class:"external-link",href:n(o).link,rel:n(y),target:n(p),"aria-label":n(k)},b.$attrs),[L(b.$slots,"before"),I(" "+B(n(o).text)+" ",1),n(i)?(l(),C(A,{key:0})):S("",!0),L(b.$slots,"after")],16,pt))}}}));var j=x(vt,[["__file","AutoLink.vue"]]);const mt=N({setup(s){const t=r=>{r.style.height=r.scrollHeight+"px"},e=r=>{r.style.height=""};return(r,o)=>(l(),C(oe,{name:"dropdown",onEnter:t,onAfterEnter:e,onBeforeLeave:t},{default:w(()=>[L(r.$slots,"default")]),_:3}))}});var ft=x(mt,[["__file","DropdownTransition.vue"]]);const se=s=>decodeURI(s).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),bt=(s,t)=>{if(t.hash===s)return!0;const e=se(t.path),r=se(s);return e===r},re=(s,t)=>s.link&&bt(s.link,t)?!0:s.children?s.children.some(e=>re(e,t)):!1,gt=s=>!F(s)||/github\.com/.test(s)?"GitHub":/bitbucket\.org/.test(s)?"Bitbucket":/gitlab\.com/.test(s)?"GitLab":/gitee\.com/.test(s)?"Gitee":null,kt={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},$t=({docsRepo:s,editLinkPattern:t})=>{if(t)return t;const e=gt(s);return e!==null?kt[e]:null},wt=({docsRepo:s,docsBranch:t,docsDir:e,filePathRelative:r,editLinkPattern:o})=>{if(!r)return null;const c=$t({docsRepo:s,editLinkPattern:o});return c?c.replace(/:repo/,F(s)?s:`https://github.com/${s}`).replace(/:branch/,t).replace(/:path/,be(`${ge(e)}/${r}`)):null},yt={class:"sidebar-item-children"},Lt=N({props:{item:{type:Object,required:!0},depth:{type:Number,required:!1,default:0}},setup(s){const t=s,{item:e,depth:r}=ne(t),o=U(),c=ie(),u=$(()=>re(e.value,o)),p=$(()=>({"sidebar-item":!0,"sidebar-heading":r.value===0,active:u.value,collapsible:e.value.collapsible})),i=M(!0),_=M(void 0);return e.value.collapsible&&(i.value=u.value,_.value=()=>{i.value=!i.value},c.afterEach(()=>{i.value=u.value})),(y,k)=>{var m;const d=D("SidebarItem",!0);return l(),h("li",null,[n(e).link?(l(),C(j,{key:0,class:E(n(p)),item:n(e)},null,8,["class","item"])):(l(),h("p",{key:1,tabindex:"0",class:E(n(p)),onClick:k[0]||(k[0]=(...f)=>_.value&&_.value(...f)),onKeydown:k[1]||(k[1]=ke((...f)=>_.value&&_.value(...f),["enter"]))},[I(B(n(e).text)+" ",1),n(e).collapsible?(l(),h("span",{key:0,class:E(["arrow",i.value?"down":"right"])},null,2)):S("",!0)],34)),(m=n(e).children)!=null&&m.length?(l(),C(ft,{key:2},{default:w(()=>[V(a("ul",yt,[(l(!0),h(T,null,z(n(e).children,f=>(l(),C(d,{key:`${n(r)}${f.text}${f.link}`,item:f,depth:n(r)+1},null,8,["item","depth"]))),128))],512),[[G,i.value]])]),_:1})):S("",!0)])}}});var St=x(Lt,[["__file","SidebarItem.vue"]]);const xt={key:0,class:"sidebar-items"},Ct=N({setup(s){const t=U(),e=q();return le(()=>t.hash,r=>{const o=document.querySelector(".sidebar");if(!o)return;const c=document.querySelector(`.sidebar a.sidebar-item[href="${t.path}${r}"]`);if(!c)return;const u=o.getBoundingClientRect().top,p=o.getBoundingClientRect().height,i=c.getBoundingClientRect().top,_=c.getBoundingClientRect().height;i<u?c.scrollIntoView(!0):i+_>u+p&&c.scrollIntoView(!1)}),(r,o)=>n(e).length?(l(),h("ul",xt,[(l(!0),h(T,null,z(n(e),c=>(l(),C(St,{key:c.link||c.text,item:c},null,8,["item"]))),128))])):S("",!0)}});var de=x(Ct,[["__file","SidebarItems.vue"]]);const Bt={class:"mobile-sidebar"},It={class:"d-ps-fixed d-w100p d-bgc-white d-h64 d-x0 lg:d-d-flex d-bb d-bc-black-100 d-ai-center d-jc-space-between d-t64 d-d-none"},Pt={id:"breadcrumbs",class:"d-breadcrumbs d-p12 d-of-hidden d-to-ellipsis d-ws-nowrap d-w628"},Tt={class:"d-breadcrumbs__item d-d-inline"},Dt={props:{currentPath:String},setup(s){const t=s,e=M(!1),r=$(()=>t.currentPath.replaceAll("-"," ").replace(".html","").split("/").filter(c=>c.trim()).map(c=>c[0].toUpperCase()+c.slice(1)));function o(){e.value=!e.value,document.body.classList.toggle("d-of-hidden",!!e.value)}return(c,u)=>(l(),h("div",Bt,[a("div",It,[a("ul",Pt,[(l(!0),h(T,null,z(n(r),p=>(l(),h("li",Tt,B(p),1))),256))]),a("span",{class:E([{"breadcrumb-arrow--top":e.value},"d-w24 d-h24 d-p12 d-mr12 breadcrumb-arrow d-c-pointer"]),onClick:o},[g(De)],2)]),a("div",{class:E([{"d-o0 d-d-none":!e.value},"mobile-header-drop-down-navigation d-ps-fixed d-l0 d-w100p d-bgc-white d-of-auto d-fs24 d-d-flex d-fd-column d-ai-baseline d-pt24 d-pr16"])},[g(de,{onClick:o})],2)]))}};var Mt=x(Dt,[["__file","MobileSidebar.vue"]]);const Et={class:"d-ps-sticky d-t0 d-x0 d-d-flex d-ai-center d-w100 d-pl8 d-pr12 d-h128 d-hmx64 d-bb d-bc-black-100 d-bgc-white d-zi-navigation"},Nt=["alt","src"],At={class:"d-ml64 d-flow8 lg:d-d-none",role:"navigation"},Ht={class:"d-ml-auto d-flow8 d-d-flex lg:d-d-none"},zt=ae('<div class="d-d-flex d-flow4"><a alt="GitHub repo" class="d-btn d-btn--muted d-tooltip--hover" href="https://github.com/dialpad/dialtone"><svg aria-hidden="true" class="d-svg d-svg--system d-svg--Github d-svg--size20" height="24" viewBox="0 0 18 18" width="24"><path d="M9 1a8 8 0 00-2.53 15.59c.4.07.55-.17.55-.38l-.01-1.49c-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.42 7.42 0 014 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48l-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 009 1z"></path></svg><div class="d-tooltip d-tooltip__arrow--top-center d-ps-absolute d-ws-nowrap"> GitHub Repo </div></a><a alt="Codepen Template" class="d-btn d-btn--muted d-tooltip--hover" href="https://codepen.io/pen/?template=BajJpwW"><svg aria-hidden="true" class="d-svg d-svg--system d-svg--Codepen d-svg--size20" height="24" viewBox="0 0 18 18" width="24"><path d="M12.67 8.17l-2.98-2v-3.2l5.38 3.6-2.4 1.6zM13.9 9l1.73-1.15v2.3L13.9 9zm-4.2 2.82l2.98-2 2.4 1.62-5.38 3.59v-3.2zm-4.36-2l2.98 2v3.2l-5.38-3.58 2.4-1.61zM4.1 9l-1.73 1.15v-2.3L4.1 9zm4.2-2.82l-2.98 2-2.4-1.62L8.3 2.97v3.2zm.7 4.45L6.57 9 9 7.37 11.43 9 9 10.63zm7.99-4.19l-.01-.05-.01-.04-.02-.05-.02-.03a.6.6 0 0 0-.02-.05l-.02-.03a.69.69 0 0 0-.15-.17L16.7 6h-.02L9.4 1.11a.69.69 0 0 0-.77 0L1.3 5.99h-.02c0 .02-.02.02-.03.03a.81.81 0 0 0-.12.13.69.69 0 0 0-.03.04l-.02.03-.02.05-.02.03-.02.05v.04L1 6.44v.03a.7.7 0 0 0-.01.1v4.87a.7.7 0 0 0 0 .09l.01.03.01.05.01.04.02.05.02.03a.51.51 0 0 0 .07.12.53.53 0 0 0 .08.1c.02 0 .03.02.04.03l.03.02h.02l7.3 4.88a.69.69 0 0 0 .77 0l7.31-4.87h.02c0-.02.02-.02.03-.03a.72.72 0 0 0 .04-.04l.02-.02a.62.62 0 0 0 .13-.19l.02-.03a.6.6 0 0 0 .02-.05v-.04l.02-.05v-.03a.7.7 0 0 0 .01-.1V6.57a.7.7 0 0 0 0-.09l-.01-.03z"></path></svg><div class="d-tooltip d-tooltip__arrow--top-center d-ps-absolute d-ws-nowrap"> Codepen Template </div></a></div>',1),Rt={setup(s){const t=H().value.navbar||[],e=H().value.logo,r=$e().value.title,o=M(void 0),c=M(void 0),u=U(),p=M(u.path);function i(){Promise.all([te(()=>import("./index.12780d58.js"),[]),te(()=>import("./style.eb2ede75.js"),[])]).then(([d])=>{d=d.default,d({indexName:"dialpad",apiKey:"6436ebddb959748daeec411eb388a99d",container:"#algolia-search-container",appId:"Y5HG9UX6KM",placeholder:"Search Dialtone"}),_()})}function _(){const d=c.value.children.item(0),m=document.createElement("span");m.className="d-btn__label",m.textContent="Search Dialtone";const f=document.createElement("span");f.className="d-btn__icon d-btn__icon--left",f.innerHTML=`<svg aria-hidden="true" aria-label="Search" class="d-svg d-svg--system d-svg__search" viewBox="0 0 24 24">
<path clip-rule="evenodd" d="M15.732 14.318h-.741l-.263-.253a6.095 6.095 0 001.389-5.009c-.441-2.607-2.619-4.69-5.246-5.009a6.103 6.103 0 00-6.823 6.82c.319 2.626 2.402 4.802 5.011 5.243a6.103 6.103 0 005.012-1.388l.253.262v.741l3.989 3.987a.992.992 0 001.398 0 .99.99 0 000-1.398l-3.979-3.996zm-5.631 0a4.217 4.217 0 01-4.223-4.22A4.216 4.216 0 0110.1 5.876a4.216 4.216 0 014.223 4.22 4.216 4.216 0 01-4.223 4.221z" fill-rule="evenodd" />
</svg>`,d.appendChild(m),d.appendChild(f)}function y(d){const m=d.toLowerCase().replace(" ","-");return p.value.search(m)!==-1?(o.value=d,!0):!1}function k(){c.value.children.item(0).click()}return K(()=>{i()}),le(()=>u.path,d=>{p.value=d}),(d,m)=>{const f=D("router-link");return l(),h("header",Et,[g(f,{class:"d-btn d-py0",title:"Go back to the homepage",to:"/"},{default:w(()=>[a("img",{alt:n(r),src:n(e)},null,8,Nt)]),_:1}),a("nav",At,[(l(!0),h(T,null,z(n(t),b=>(l(),C(f,{key:b.text,to:b.link,class:E(["d-link",{"router-link-active":y(b.text)}])},{default:w(()=>[I(B(b.text),1)]),_:2},1032,["to","class"]))),128))]),a("div",Ht,[zt,a("div",{id:"algolia-search-container",ref_key:"searchBtn",ref:c},null,512)]),g(ht,{"active-link":o.value,items:n(t),onSearch:k},null,8,["active-link","items"]),p.value!=="/"?(l(),C(Mt,{key:0,"current-path":p.value},null,8,["current-path"])):S("",!0)])}}};var Ut=x(Rt,[["__file","Navbar.vue"]]);const Vt={class:"page-meta"},Gt={key:0,class:"meta-item edit-link"},Ot={key:1,class:"meta-item last-updated"},jt={class:"meta-item-label"},Ft={class:"meta-item-info"},qt={key:2,class:"meta-item contributors"},Kt={class:"meta-item-label"},Yt={class:"meta-item-info"},Wt=["title"],Xt=I(", "),Jt=N({setup(s){const t=()=>{const i=H(),_=O(),y=R();return $(()=>{var A,Y,W;if(!((Y=(A=y.value.editLink)!=null?A:i.value.editLink)!=null?Y:!0))return null;const{repo:d,docsRepo:m=d,docsBranch:f="main",docsDir:b="",editLinkText:v}=i.value;if(!m)return null;const P=wt({docsRepo:m,docsBranch:f,docsDir:b,filePathRelative:_.value.filePathRelative,editLinkPattern:(W=y.value.editLinkPattern)!=null?W:i.value.editLinkPattern});return P?{text:v!=null?v:"Edit this page",link:P}:null})},e=()=>{const i=H(),_=O(),y=R();return $(()=>{var m,f,b,v;return!((f=(m=y.value.lastUpdated)!=null?m:i.value.lastUpdated)!=null?f:!0)||!((b=_.value.git)!=null&&b.updatedTime)?null:new Date((v=_.value.git)==null?void 0:v.updatedTime).toLocaleString()})},r=()=>{const i=H(),_=O(),y=R();return $(()=>{var d,m,f,b;return((m=(d=y.value.contributors)!=null?d:i.value.contributors)!=null?m:!0)&&(b=(f=_.value.git)==null?void 0:f.contributors)!=null?b:null})},o=H(),c=t(),u=e(),p=r();return(i,_)=>{const y=D("ClientOnly");return l(),h("footer",Vt,[n(c)?(l(),h("div",Gt,[g(j,{class:"meta-item-label",item:n(c)},null,8,["item"])])):S("",!0),n(u)?(l(),h("div",Ot,[a("span",jt,B(n(o).lastUpdatedText)+": ",1),g(y,null,{default:w(()=>[a("span",Ft,B(n(u)),1)]),_:1})])):S("",!0),n(p)&&n(p).length?(l(),h("div",qt,[a("span",Kt,B(n(o).contributorsText)+": ",1),a("span",Yt,[(l(!0),h(T,null,z(n(p),(k,d)=>(l(),h(T,{key:d},[a("span",{class:"contributor",title:`email: ${k.email}`},B(k.name),9,Wt),d!==n(p).length-1?(l(),h(T,{key:0},[Xt],64)):S("",!0)],64))),128))])])):S("",!0)])}}});var Qt=x(Jt,[["__file","PageMeta.vue"]]);const Zt={key:0,class:"page-nav"},es={class:"inner"},ts={key:0,class:"prev"},ss={key:1,class:"next"},as=N({setup(s){const t=i=>i===!1?null:we(i)?ye(i):Le(i)?i:!1,e=(i,_,y)=>{const k=i.findIndex(d=>d.link===_);if(k!==-1){const d=i[k+y];return d!=null&&d.link?d:null}for(const d of i)if(d.children){const m=e(d.children,_,y);if(m)return m}return null},r=R(),o=q(),c=U(),u=$(()=>{const i=t(r.value.prev);return i!==!1?i:e(o.value,c.path,-1)}),p=$(()=>{const i=t(r.value.next);return i!==!1?i:e(o.value,c.path,1)});return(i,_)=>n(u)||n(p)?(l(),h("nav",Zt,[a("p",es,[n(u)?(l(),h("span",ts,[g(j,{item:n(u)},null,8,["item"])])):S("",!0),n(p)?(l(),h("span",ss,[g(j,{item:n(p)},null,8,["item"])])):S("",!0)])])):S("",!0)}});var ns=x(as,[["__file","PageNav.vue"]]);const os={class:"page"},is={class:"theme-default-content"},ls=N({setup(s){return(t,e)=>{const r=D("Content");return l(),h("main",os,[L(t.$slots,"top"),a("div",is,[g(r)]),g(Qt),g(ns),L(t.$slots,"bottom")])}}});var rs=x(ls,[["__file","Page.vue"]]);const ds={setup(s){const t=Se({top:0});function e(){t.top=window.top.scrollY>50?6.4:11.2-window.top.scrollY/10}return K(()=>{window.addEventListener("scroll",e),e()}),xe(()=>{window.removeEventListener("scroll",e)}),(r,o)=>(l(),h("aside",{class:"sidebar",style:Ce(`top: ${n(t).top}rem !important`)},[g(de)],4))}};var cs=x(ds,[["__file","Sidebar.vue"]]);const us=N({setup(s){const t=O(),e=R(),r=H(),o=$(()=>e.value.navbar!==!1&&r.value.navbar!==!1),c=q(),u=M(!1),p=v=>{u.value=typeof v=="boolean"?v:!u.value},i={x:0,y:0},_=v=>{i.x=v.changedTouches[0].clientX,i.y=v.changedTouches[0].clientY},y=v=>{const P=v.changedTouches[0].clientX-i.x,A=v.changedTouches[0].clientY-i.y;Math.abs(P)>Math.abs(A)&&Math.abs(P)>40&&(P>0&&i.x<=80?p(!0):p(!1))},k=$(()=>[{"no-navbar":!o.value,"no-sidebar":!c.value.length,"sidebar-open":u.value},e.value.pageClass]);let d;K(()=>{d=ie().afterEach(()=>{p(!1)})}),Be(()=>{d()});const m=Ie(),f=m.resolve,b=m.pending;return(v,P)=>(l(),h("div",{class:E(["theme-container",n(k)]),onTouchstart:_,onTouchend:y},[L(v.$slots,"navbar",{},()=>[n(o)?(l(),C(Ut,{key:0,onToggleSidebar:p},{before:w(()=>[L(v.$slots,"navbar-before")]),after:w(()=>[L(v.$slots,"navbar-after")]),_:3})):S("",!0)]),a("div",{class:"sidebar-mask",onClick:P[0]||(P[0]=A=>p(!1))}),L(v.$slots,"sidebar",{},()=>[g(cs,null,{top:w(()=>[L(v.$slots,"sidebar-top")]),bottom:w(()=>[L(v.$slots,"sidebar-bottom")]),_:3})]),L(v.$slots,"page",{},()=>[n(e).home?(l(),C(dt,{key:0})):(l(),C(oe,{key:1,name:"fade-slide-y",mode:"out-in",onBeforeEnter:n(f),onBeforeLeave:n(b)},{default:w(()=>[(l(),C(rs,{key:n(t).path},{top:w(()=>[L(v.$slots,"page-top")]),bottom:w(()=>[L(v.$slots,"page-bottom")]),_:3}))]),_:3},8,["onBeforeEnter","onBeforeLeave"]))])],34))}});var hs=x(us,[["__file","Layout.vue"]]);const ps={name:"Banner"},_s={"aria-hidden":"false",class:"d-banner d-banner--info d-ps-relative lg:d-d-none",role:"alert"},vs={"aria-describedby":"info-alert-desc","aria-labelledy":"info-alert-title",class:"d-banner__dialog d-w-unset",role:"alertdialog"},ms={class:"d-notice__icon"},fs=a("div",{class:"d-notice__content"},[a("h1",{id:"info-alert-title",class:"d-notice__title"},"Dialtone 6.0 is here!"),a("p",{id:"info-alert-desc",class:"d-notice__message"},[I(" Looking for Dialtone 5 documentation? "),a("a",{class:"d-link",href:"//dialpad.design/version5",target:"_blank"},"Find it here.")])],-1);function bs(s,t,e,r,o,c){const u=D("icon-info");return l(),h("aside",_s,[a("div",vs,[a("div",ms,[g(u)]),fs])])}var gs=x(ps,[["render",bs],["__file","Banner.vue"]]);const ks={class:"theme-default-content d-stack2"},$s=["textContent"],ws=["href"],ys=I(" View Storybook "),Ls=["innerHTML"],Ss={setup(s){return(t,e)=>(l(),h(T,null,[g(gs),g(hs,null,{"page-top":w(()=>[a("header",ks,[t.$page.frontmatter.title?(l(),h("h1",{key:0,class:"d-headline42 d-lh6 d-mb4 d-pt16",textContent:B(t.$page.frontmatter.title)},null,8,$s)):S("",!0),t.$page.frontmatter.storybook_url?(l(),h("a",{key:1,class:"d-link d-fs14 d-mb24",href:t.$page.frontmatter.storybook_url,target:"_blank"},[ys,g(Me)],8,ws)):S("",!0),t.$page.frontmatter.desc?(l(),h("p",{key:2,class:"d-fs20 d-lh6",innerHTML:t.$page.frontmatter.desc},null,8,Ls)):S("",!0)])]),_:1})],64))}};var Ds=x(Ss,[["__file","Layout.vue"]]);export{Ds as default};
