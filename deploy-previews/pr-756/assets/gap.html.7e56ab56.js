import{gap as h}from"./grid.f6561906.js";import{values as _}from"./spacing.d5e814a5.js";import{_ as v,r as g,o as s,c as n,a as e,e as t,w as o,b as d,F as p,g as f,u,t as a,f as m}from"./app.c69bfef1.js";const w=d("h2",{id:"adding-universal-row-and-column-gaps",tabindex:"-1"},[d("a",{class:"header-anchor",href:"#adding-universal-row-and-column-gaps","aria-hidden":"true"},"#"),e(" Adding universal row and column gaps")],-1),y=d("p",null,[e("Use "),d("code",null,"d-gg{#}"),e(" to universally change the row and column gap space in grid layouts.")],-1),k=d("div",{class:"d-d-grid d-gg16 d-g-cols2 d-p16 d-w100p d-hmn216 d-bar8 d-bgc-purple-100"},[d("div",{class:"d-fl-center d-p16 d-bgc-purple-300 d-bar4 d-fs-300 d-fw-bold"},"1"),e(),d("div",{class:"d-fl-center d-p16 d-bgc-purple-300 d-bar4 d-fs-300 d-fw-bold"},"2"),e(),d("div",{class:"d-fl-center d-p16 d-bgc-purple-300 d-bar4 d-fs-300 d-fw-bold"},"3"),e(),d("div",{class:"d-fl-center d-p16 d-bgc-purple-300 d-bar4 d-fs-300 d-fw-bold"},"4")],-1),x=d("div",{class:"language-html","data-ext":"html"},[d("pre",{class:"language-html"},[d("code",null,`<div class="d-d-grid d-gg16 d-g-cols2">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
</div>
`)])],-1),C=d("h2",{id:"independently-changing-row-and-column-gaps",tabindex:"-1"},[d("a",{class:"header-anchor",href:"#independently-changing-row-and-column-gaps","aria-hidden":"true"},"#"),e(" Independently changing row and column gaps")],-1),N=d("p",null,[e("Use "),d("code",null,"d-gcg{#}"),e(" or "),d("code",null,"d-grg{#}"),e(" to independently change the row and column gap space in grid layouts.")],-1),V=d("div",{class:"d-d-grid d-gcg24 d-grg8 d-g-cols3 d-p16 d-w100p d-hmn216 d-bar8 d-bgc-green-100"},[d("div",{class:"d-fl-center d-p16 d-bgc-green-200 d-bar4 d-fs-300 d-fw-bold"},"1"),e(),d("div",{class:"d-fl-center d-p16 d-bgc-green-200 d-bar4 d-fs-300 d-fw-bold"},"2"),e(),d("div",{class:"d-fl-center d-p16 d-bgc-green-200 d-bar4 d-fs-300 d-fw-bold"},"3"),e(),d("div",{class:"d-fl-center d-p16 d-bgc-green-200 d-bar4 d-fs-300 d-fw-bold"},"4"),e(),d("div",{class:"d-fl-center d-p16 d-bgc-green-200 d-bar4 d-fs-300 d-fw-bold"},"5"),e(),d("div",{class:"d-fl-center d-p16 d-bgc-green-200 d-bar4 d-fs-300 d-fw-bold"},"6"),e(),d("div",{class:"d-fl-center d-p16 d-bgc-green-200 d-bar4 d-fs-300 d-fw-bold"},"7"),e(),d("div",{class:"d-fl-center d-p16 d-bgc-green-200 d-bar4 d-fs-300 d-fw-bold"},"8"),e(),d("div",{class:"d-fl-center d-p16 d-bgc-green-200 d-bar4 d-fs-300 d-fw-bold"},"9")],-1),B=d("div",{class:"language-html","data-ext":"html"},[d("pre",{class:"language-html"},[d("code",null,`<div class="d-d-grid d-gcg24 d-grg8 d-g-cols3">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
  <div>9</div>
</div>
`)])],-1),F=d("h2",{id:"classes",tabindex:"-1"},[d("a",{class:"header-anchor",href:"#classes","aria-hidden":"true"},"#"),e(" Classes")],-1),U={class:"d-h464 d-of-y-scroll d-bb d-bc-black-200"},A={scope:"row",class:"d-ff-mono d-fc-purple-400 d-fw-normal d-fs-100"},D={key:0},E={key:1},I={key:2},L={class:"d-ff-mono d-fs-100"},S={key:0},T={key:1},j={__name:"gap.html",setup(q){return(z,G)=>{const r=g("code-well-header"),b=g("utility-class-table");return s(),n("div",null,[w,e(),y,e(),t(r,{class:"d-fl-center d-fd-column d-p24 d-bgc-purple-100 d-bgo50 d-w100p d-hmn216",custom:""},{default:o(()=>[k]),_:1}),e(),x,C,e(),N,e(),t(r,{class:"d-fl-center d-fd-column d-p24 d-bgc-green-100 d-bgo50 d-w100p d-hmn216",custom:""},{default:o(()=>[V]),_:1}),e(),B,F,e(),d("div",U,[t(b,null,{content:o(()=>[(s(!0),n(p,null,f(u(h),({direction:l})=>(s(),n("tbody",null,[(s(!0),n(p,null,f(u(_),({output:i,value:c})=>(s(),n("tr",null,[d("th",A,[l==="both"?(s(),n("span",D,".d-gg"+a(c),1)):l==="column"?(s(),n("span",E,".d-gcg"+a(c),1)):l==="row"?(s(),n("span",I,".d-grg"+a(c),1)):m("v-if",!0)]),e(),d("td",L,[l!=="both"?(s(),n("span",S,"grid-"+a(l)+"-gap: "+a(i),1)):(s(),n("span",T,"grid-gap: "+a(i),1))])]))),256))]))),256))]),_:1})])])}}},M=v(j,[["__file","gap.html.vue"]]);export{M as default};
