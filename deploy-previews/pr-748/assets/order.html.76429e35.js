import{_,r as l,o as s,c as t,a as d,e as n,w as o,b as e,F as p,g as h,t as r}from"./app.5e51e3f0.js";const f={},u=e("h2",{id:"example",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#example","aria-hidden":"true"},"#"),d(" Example")],-1),m=e("p",null,[d("By default, items are ordered by their position in the DOM. To re-order an element, use "),e("code",null,"d-order{#}"),d(".")],-1),b=e("div",{class:"d-d-flex d-ai-center d-jc-space-between d-p8 d-w100p d-hmn102 d-bar8 d-bgc-purple-100"},[e("div",{class:"d-fl-center d-m8 d-p16 d-w64 d-h64 d-o50 d-bgc-purple-300 d-bar4 d-fs-300 d-fw-bold"},"1"),d(),e("div",{class:"d-fl-center d-m8 d-p16 d-w64 d-h64 d-o50 d-bgc-purple-300 d-bar4 d-fs-300 d-fw-bold"},"2"),d(),e("div",{class:"d-fl-center d-m8 d-p16 d-w64 d-h64 d-order-first d-bgc-purple-300 d-bar4 d-fs-300 d-fw-bold"},"3")],-1),v=e("div",{class:"language-html","data-ext":"html"},[e("pre",{class:"language-html"},[e("code",null,`<div class="d-d-flex d-ai-center d-jc-space-between">
  <div>1</div>
  <div>2</div>
  <div class="d-order-first">3</div>
</div>
`)])],-1),w=e("h2",{id:"classes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#classes","aria-hidden":"true"},"#"),d(" Classes")],-1),g={scope:"row",class:"d-ff-mono d-fc-purple-400 d-fw-normal d-fs-100"},x={class:"d-ff-mono d-fs-100"},y={key:0},k={key:1},B={key:2};function C(N,V){const c=l("code-well-header"),i=l("utility-class-table");return s(),t("div",null,[u,d(),m,d(),n(c,{class:"d-fl-center d-fd-column d-p24 d-bgc-purple-100 d-bgo50 d-w100p d-hmn102",custom:""},{default:o(()=>[b]),_:1}),d(),v,w,d(),n(i,null,{content:o(()=>[e("tbody",null,[(s(),t(p,null,h([1,2,3,4,5,6,7,8,9,10,11,12,"-first","-last"],a=>e("tr",null,[e("th",g,".d-order"+r(a),1),d(),e("td",x,[d(`
          order:
          `),a==="-first"?(s(),t("span",y,"-9999")):a==="-last"?(s(),t("span",k,"9999")):(s(),t("span",B,r(a),1)),d(`
          !important;
        `)])])),64))])]),_:1})])}const D=_(f,[["render",C],["__file","order.html.vue"]]);export{D as default};
