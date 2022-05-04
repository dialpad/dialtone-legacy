import{_ as w,r as _,a as e,b as d,d as f,w as r,F as o,e as s,o as c,f as t,t as n,n as p}from"./app.935ad005.js";const y=d("h2",{id:"classes",tabindex:"-1"},[d("a",{class:"header-anchor",href:"#classes","aria-hidden":"true"},"#"),s(" Classes")],-1),C={class:"d-h464 d-of-y-scroll d-bb d-bc-black-200"},k={scope:"row",class:"d-ff-mono d-fc-purple d-fw-normal d-fs12"},B={class:"d-ff-mono d-fc-orange d-fs12 d-ws-pre"},F={scope:"row",class:"d-ff-mono d-fc-purple d-fw-normal d-fs12"},j={class:"d-ff-mono d-fc-orange d-fs12 d-ws-pre"},z=d("h2",{id:"creating-flex-columns",tabindex:"-1"},[d("a",{class:"header-anchor",href:"#creating-flex-columns","aria-hidden":"true"},"#"),s(" Creating flex columns")],-1),N=d("p",null,[s("Use "),d("code",null,"d-fl-col{n}"),s(" to create uniformly sized children within an element.")],-1),U={class:"d-d-flex d-fd-column d-p8 d-bar8 d-bgc-purple-100"},V={class:"d-fl-center d-p16 d-bar4 d-bgc-purple-300 d-fs18 d-fw-bold"},G=d("div",{class:"language-html ext-html"},[d("pre",{class:"language-html"},[d("code",null,`<div class="d-fl-col1">...</div>
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
`)])],-1),L=d("h2",{id:"flex-column-gaps",tabindex:"-1"},[d("a",{class:"header-anchor",href:"#flex-column-gaps","aria-hidden":"true"},"#"),s(" Flex Column Gaps")],-1),$=d("p",null,[s("Use "),d("code",null,"d-flg{n}"),s(" to create uniform gaps between flex columns within an element.")],-1),D={class:"d-d-flex d-fd-column d-p8 d-bar8 d-bgc-purple-100"},E=d("div",{class:"d-fl-center d-p16 d-bar4 d-bgc-purple-300 d-fs18 d-fw-bold"},"1",-1),M=d("div",{class:"d-fl-center d-p16 d-bar4 d-bgc-purple-300 d-fs18 d-fw-bold"},"2",-1),S=d("div",{class:"d-fl-center d-p16 d-bar4 d-bgc-purple-300 d-fs18 d-fw-bold"},"3",-1),T=[E,M,S],q=d("div",{class:"language-html ext-html"},[d("pre",{class:"language-html"},[d("code",null,`<div class="d-fl-col3 d-flg0">...</div>
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
`)])],-1),A=d("h2",{id:"centering-objects",tabindex:"-1"},[d("a",{class:"header-anchor",href:"#centering-objects","aria-hidden":"true"},"#"),s(" Centering objects")],-1),H=d("p",null,[s("By default flexed items align to "),d("code",null,"flex-start"),s(" both horizontally and vertically (effectively top, left). Use "),d("code",null,"d-fl-center"),s(" to center-center child items within an element.")],-1),I=d("div",{class:"d-fl-center d-w48 d-h48 d-m8 d-p16 d-bgc-green-300 d-bar4 d-fs24 d-fw-bold"},"1",-1),J=d("div",{class:"d-fl-center d-w64 d-h64 d-m8 d-p16 d-bgc-green-300 d-bar4 d-fs24 d-fw-bold"},"2",-1),K=d("div",{class:"d-fl-center d-w48 d-h48 d-m8 d-p16 d-bgc-green-300 d-bar4 d-fs24 d-fw-bold"},"3",-1),O=d("div",{class:"language-html ext-html"},[d("pre",{class:"language-html"},[d("code",null,`<div class="d-fl-center">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
`)])],-1),P={setup(Q){const u=[1,2,3,4,5,6,7,8,9,10,11,12],v=[0,1,2,4,6,8,12,16,24,32,48,64],g=a=>Math.round(100/a),m=a=>{const i=a/10;return i!==0?i+"rem":i};return(a,i)=>{const b=_("utility-class-table"),h=_("code-well-header");return c(),e(o,null,[y,d("div",C,[f(b,null,{content:r(()=>[d("tbody",null,[(c(),e(o,null,t(u,l=>d("tr",null,[d("th",k,".d-fl-col"+n(l),1),d("td",B,"> * { flex-basis: calc("+n(g(l))+"% - (var(--fl-gap) * 2)); }",1)])),64))]),d("tbody",null,[(c(),e(o,null,t(v,l=>d("tr",null,[d("th",F,".d-flg"+n(l),1),d("td",j,"> * { --fl-gap: "+n(m(l))+" !important; }",1)])),64))])]),_:1})]),z,N,f(h,{class:"d-d-flex d-fd-column d-p16 d-bgc-purple-100 d-bgo50 d-w100p d-hmx464 d-of-y-scroll d-stack8",custom:""},{default:r(()=>[(c(),e(o,null,t(u,(l,R)=>d("div",U,[d("code",null,".d-fl-col"+n(l),1),d("div",{class:p(["d-flg8 d-of-auto",`d-fl-col${l}`])},[(c(!0),e(o,null,t(u.slice(0,l),x=>(c(),e("div",V,n(x),1))),256))],2)])),64))]),_:1}),G,L,$,f(h,{class:"d-d-flex d-fd-column d-p16 d-bgc-purple-100 d-bgo50 d-w100p d-hmx464 d-of-y-scroll d-stack8",custom:""},{default:r(()=>[(c(),e(o,null,t(v,l=>d("div",D,[d("code",null,".d-flg"+n(l),1),d("div",{class:p(["d-fl-col3 d-of-auto",`d-flg${l}`])},T,2)])),64))]),_:1}),q,A,H,f(h,{class:"d-fl-center d-p24 d-bgc-green-100 d-bgo50 d-w100p d-hmn216",custom:""},{default:r(()=>[I,J,K]),_:1}),O],64)}}};var X=w(P,[["__file","columns-layouts.html.vue"]]);export{X as default};
