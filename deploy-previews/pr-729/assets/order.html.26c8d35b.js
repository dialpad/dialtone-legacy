import{_ as i,o as n,c as t,b as o,w as p,a as s,d as a,e as u,r as c,F as _,f as k,t as l}from"./app.b8f8a7b6.js";const h={},f=s("h2",{id:"example",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example","aria-hidden":"true"},"#"),a(" Example")],-1),g=a(),m=s("p",null,[a("By default, items are ordered by their position in the DOM. To re-order an element, use "),s("code",null,"d-order{#}"),a(".")],-1),b=a(),v=s("div",{class:"d-d-flex d-ai-center d-jc-space-between d-p8 d-w100p d-hmn102 d-bar8 d-bgc-purple-100"},[s("div",{class:"d-fl-center d-m8 d-p16 d-w64 d-h64 d-o50 d-bgc-purple-300 d-bar4 d-fs-300 d-fw-bold"},"1"),a(),s("div",{class:"d-fl-center d-m8 d-p16 d-w64 d-h64 d-o50 d-bgc-purple-300 d-bar4 d-fs-300 d-fw-bold"},"2"),a(),s("div",{class:"d-fl-center d-m8 d-p16 d-w64 d-h64 d-order-first d-bgc-purple-300 d-bar4 d-fs-300 d-fw-bold"},"3")],-1),w=u(` <div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-d-flex d-ai-center d-jc-space-between<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-order-first<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="classes" tabindex="-1"><a class="header-anchor" href="#classes" aria-hidden="true">#</a> Classes</h2> `,4),x={scope:"row",class:"d-ff-mono d-fc-purple-400 d-fw-normal d-fs-100"},y=a(),q={class:"d-ff-mono d-fs-100"},B=a(`
          order:
          `),N={key:0},V={key:1},C={key:2},j=a(`
          !important;
        `);function D(E,F){const d=c("code-well-header"),r=c("utility-class-table");return n(),t("div",null,[f,g,m,b,o(d,{class:"d-fl-center d-fd-column d-p24 d-bgc-purple-100 d-bgo50 d-w100p d-hmn102",custom:""},{default:p(()=>[v]),_:1}),w,o(r,null,{content:p(()=>[s("tbody",null,[(n(),t(_,null,k([1,2,3,4,5,6,7,8,9,10,11,12,"-first","-last"],e=>s("tr",null,[s("th",x,".d-order"+l(e),1),y,s("td",q,[B,e==="-first"?(n(),t("span",N,"-9999")):e==="-last"?(n(),t("span",V,"9999")):(n(),t("span",C,l(e),1)),j])])),64))])]),_:1})])}var T=i(h,[["render",D],["__file","order.html.vue"]]);export{T as default};
