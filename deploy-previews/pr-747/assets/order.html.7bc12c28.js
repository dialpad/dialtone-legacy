import{_ as u,r as o,o as n,c as t,a as s,d as p,w as c,b as a,e as i,F as k,f as _,t as l}from"./app.37dabe81.js";const f={},h=a("h2",{id:"example",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#example","aria-hidden":"true"},"#"),s(" Example")],-1),g=a("p",null,[s("By default, items are ordered by their position in the DOM. To re-order an element, use "),a("code",null,"d-order{#}"),s(".")],-1),m=a("div",{class:"d-d-flex d-ai-center d-jc-space-between d-p8 d-w100p d-hmn102 d-bar8 d-bgc-purple-100"},[a("div",{class:"d-fl-center d-m8 d-p16 d-w64 d-h64 d-o50 d-bgc-purple-300 d-bar4 d-fs-300 d-fw-bold"},"1"),s(),a("div",{class:"d-fl-center d-m8 d-p16 d-w64 d-h64 d-o50 d-bgc-purple-300 d-bar4 d-fs-300 d-fw-bold"},"2"),s(),a("div",{class:"d-fl-center d-m8 d-p16 d-w64 d-h64 d-order-first d-bgc-purple-300 d-bar4 d-fs-300 d-fw-bold"},"3")],-1),b=i(`<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-d-flex d-ai-center d-jc-space-between<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-order-first<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="classes" tabindex="-1"><a class="header-anchor" href="#classes" aria-hidden="true">#</a> Classes</h2>`,2),v={scope:"row",class:"d-ff-mono d-fc-purple-400 d-fw-normal d-fs-100"},w={class:"d-ff-mono d-fs-100"},x={key:0},y={key:1},q={key:2};function B(N,V){const d=o("code-well-header"),r=o("utility-class-table");return n(),t("div",null,[h,s(),g,s(),p(d,{class:"d-fl-center d-fd-column d-p24 d-bgc-purple-100 d-bgo50 d-w100p d-hmn102",custom:""},{default:c(()=>[m]),_:1}),s(),b,s(),p(r,null,{content:c(()=>[a("tbody",null,[(n(),t(k,null,_([1,2,3,4,5,6,7,8,9,10,11,12,"-first","-last"],e=>a("tr",null,[a("th",v,".d-order"+l(e),1),s(),a("td",w,[s(`
          order:
          `),e==="-first"?(n(),t("span",x,"-9999")):e==="-last"?(n(),t("span",y,"9999")):(n(),t("span",q,l(e),1)),s(`
          !important;
        `)])])),64))])]),_:1})])}var j=u(f,[["render",B],["__file","order.html.vue"]]);export{j as default};
