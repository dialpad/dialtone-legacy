import{_ as w,r as _,o as e,c,a as l,e as f,w as r,b as d,F as o,g as t,t as n,n as p}from"./app.5e51e3f0.js";const y=d("h2",{id:"creating-flex-columns",tabindex:"-1"},[d("a",{class:"header-anchor",href:"#creating-flex-columns","aria-hidden":"true"},"#"),l(" Creating flex columns")],-1),C=d("p",null,[l("Use "),d("code",null,"d-fl-col{n}"),l(" to create uniformly sized children within an element.")],-1),k={class:"d-d-flex d-fd-column d-p8 d-bar8 d-bgc-purple-100"},B={class:"d-fl-center d-p16 d-bar4 d-bgc-purple-300 d-fs-200 d-fw-bold"},F=d("div",{class:"language-html","data-ext":"html"},[d("pre",{class:"language-html"},[d("code",null,`<div class="d-fl-col1">...</div>
<div class="d-fl-col2">...</div>
<div class="d-fl-col3">...</div>
<div class="d-fl-col4">...</div>
<div class="d-fl-col5">...</div>
<div class="d-fl-col6">...</div>
<div class="d-fl-col7">...</div>
<div class="d-fl-col8">...</div>
<div class="d-fl-col9">...</div>
<div class="d-fl-col10">...</div>
<div class="d-fl-col11">...</div>
<div class="d-fl-col12">...</div>
`)])],-1),j=d("h2",{id:"flex-column-gaps",tabindex:"-1"},[d("a",{class:"header-anchor",href:"#flex-column-gaps","aria-hidden":"true"},"#"),l(" Flex column gaps")],-1),z=d("p",null,[l("Use "),d("code",null,"d-flg{n}"),l(" to create uniform gaps between flex columns within an element.")],-1),N={class:"d-d-flex d-fd-column d-p8 d-bar8 d-bgc-purple-100"},U=d("div",{class:"d-fl-center d-p16 d-bar4 d-bgc-purple-300 d-fs-200 d-fw-bold"},"1",-1),V=d("div",{class:"d-fl-center d-p16 d-bar4 d-bgc-purple-300 d-fs-200 d-fw-bold"},"2",-1),L=d("div",{class:"d-fl-center d-p16 d-bar4 d-bgc-purple-300 d-fs-200 d-fw-bold"},"3",-1),$=d("div",{class:"language-html","data-ext":"html"},[d("pre",{class:"language-html"},[d("code",null,`<div class="d-fl-col3 d-flg0">...</div>
<div class="d-fl-col3 d-flg1">...</div>
<div class="d-fl-col3 d-flg2">...</div>
<div class="d-fl-col3 d-flg4">...</div>
<div class="d-fl-col3 d-flg6">...</div>
<div class="d-fl-col3 d-flg8">...</div>
<div class="d-fl-col3 d-flg12">...</div>
<div class="d-fl-col3 d-flg16">...</div>
<div class="d-fl-col3 d-flg24">...</div>
<div class="d-fl-col3 d-flg32">...</div>
<div class="d-fl-col3 d-flg48">...</div>
<div class="d-fl-col3 d-flg64">...</div>
`)])],-1),D=d("h2",{id:"centering-objects",tabindex:"-1"},[d("a",{class:"header-anchor",href:"#centering-objects","aria-hidden":"true"},"#"),l(" Centering objects")],-1),E=d("p",null,[l("By default flexed items align to "),d("code",null,"flex-start"),l(" both horizontally and vertically (effectively top, left). Use "),d("code",null,"d-fl-center"),l(" to center-center child items within an element.")],-1),G=d("div",{class:"d-fl-center d-w48 d-h48 d-m8 d-p16 d-bgc-green-200 d-bar4 d-fs-300 d-fw-bold"},"1",-1),M=d("div",{class:"d-fl-center d-w64 d-h64 d-m8 d-p16 d-bgc-green-200 d-bar4 d-fs-300 d-fw-bold"},"2",-1),S=d("div",{class:"d-fl-center d-w48 d-h48 d-m8 d-p16 d-bgc-green-200 d-bar4 d-fs-300 d-fw-bold"},"3",-1),T=d("div",{class:"language-html","data-ext":"html"},[d("pre",{class:"language-html"},[d("code",null,`<div class="d-fl-center">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
`)])],-1),q=d("h2",{id:"classes",tabindex:"-1"},[d("a",{class:"header-anchor",href:"#classes","aria-hidden":"true"},"#"),l(" Classes")],-1),A={class:"d-h464 d-of-y-scroll d-bb d-bc-black-200"},H={scope:"row",class:"d-ff-mono d-fc-purple-400 d-fw-normal d-fs-100"},I={class:"d-ff-mono d-fs-100 d-ws-pre"},J={scope:"row",class:"d-ff-mono d-fc-purple-400 d-fw-normal d-fs-100"},K={class:"d-ff-mono d-fs-100 d-ws-pre"},O={__name:"columns-layouts.html",setup(P){const u=[1,2,3,4,5,6,7,8,9,10,11,12],v=[0,1,2,4,6,8,12,16,24,32,48,64],g=a=>Math.round(100/a),m=a=>{const i=a/10;return i!==0?i+"rem":i};return(a,i)=>{const h=_("code-well-header"),b=_("utility-class-table");return e(),c("div",null,[y,l(),C,l(),f(h,{class:"d-d-flex d-fd-column d-p16 d-bgc-purple-100 d-bgo50 d-w100p d-hmx464 d-of-y-scroll d-stack8",custom:""},{default:r(()=>[(e(),c(o,null,t(u,(s,Q)=>d("div",k,[d("code",null,".d-fl-col"+n(s),1),l(),d("div",{class:p(["d-flg8 d-of-auto",`d-fl-col${s}`])},[(e(!0),c(o,null,t(u.slice(0,s),x=>(e(),c("div",B,n(x),1))),256))],2)])),64))]),_:1}),l(),F,j,l(),z,l(),f(h,{class:"d-d-flex d-fd-column d-p16 d-bgc-purple-100 d-bgo50 d-w100p d-hmx464 d-of-y-scroll d-stack8",custom:""},{default:r(()=>[(e(),c(o,null,t(v,s=>d("div",N,[d("code",null,".d-flg"+n(s),1),l(),d("div",{class:p(["d-fl-col3 d-of-auto",`d-flg${s}`])},[U,l(),V,l(),L],2)])),64))]),_:1}),l(),$,D,l(),E,l(),f(h,{class:"d-fl-center d-p24 d-bgc-green-100 d-bgo50 d-w100p d-hmn216",custom:""},{default:r(()=>[G,l(),M,l(),S]),_:1}),l(),T,q,l(),d("div",A,[f(b,null,{content:r(()=>[d("tbody",null,[(e(),c(o,null,t(u,s=>d("tr",null,[d("th",H,".d-fl-col"+n(s),1),l(),d("td",I,"> *{ flex-basis: calc("+n(g(s))+"% - (var(--fl-gap)* 2)); }",1)])),64))]),l(),d("tbody",null,[(e(),c(o,null,t(v,s=>d("tr",null,[d("th",J,".d-flg"+n(s),1),l(),d("td",K,"> * { --fl-gap: "+n(m(s))+" !important; }",1)])),64))])]),_:1})])])}}},W=w(O,[["__file","columns-layouts.html.vue"]]);export{W as default};
