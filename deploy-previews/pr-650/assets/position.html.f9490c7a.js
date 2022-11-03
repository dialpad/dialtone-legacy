import{_ as u,r as t,o as p,c as e,b as o,w as c,a,d as s,e as r,F as k,f as g,t as l}from"./app.bcf11791.js";const f={},b=a("h2",{id:"examples",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#examples","aria-hidden":"true"},"#"),s(" Examples")],-1),m=s(),h=a("div",{class:"d-ps-relative"},[s(`
    Relative Parent
    `),a("div",{class:"d-ps-static d-bgc-purple-100 d-mt24 d-p24 d-h464 d-bar8"},[s(`
      Static Parent
      `),a("div",{class:"d-ps-absolute d-t0 d-r12 d-fl-center d-h128 d-w128 d-p8 d-bar8 d-bgc-purple-300 d-ff-mono d-fs12"},[s(".d-ps-absolute"),a("br"),s(".d-t0"),a("br"),s(".d-r12")]),s(),a("div",{class:"d-ps-absolute d-b0 d-rn12 d-fl-center d-h128 d-w128 d-p8 d-bar8 d-bgc-purple-300 d-ff-mono d-fs12"},[s(".d-ps-absolute"),a("br"),s(".d-b0"),a("br"),s(".d-rn12")]),s(),a("div",{class:"d-ps-sticky d-t0 d-fl-center d-h128 d-w128 d-p8 d-bar8 d-bgc-purple-300 d-ff-mono d-fs12"},[s(".d-ps-sticky"),a("br"),s(".d-t0")]),s(),a("div",{class:"d-ps-relative d-t32 d-l64 d-fl-center d-h128 d-w128 d-p8 d-bar8 d-bgc-purple-300 d-ff-mono d-fs12"},[s(".d-ps-relative"),a("br"),s(".d-t32"),a("br"),s(".d-l64")]),s(),a("div",{class:"d-ps-fixed d-t50p d-l50p d-fl-center d-h128 d-w128 d-p8 d-bar8 d-bgc-purple-300 d-ff-mono d-fs12"},[s(".d-ps-fixed"),a("br"),s(".d-t50p"),a("br"),s(".d-l50p")])])],-1),v=r(` <div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-ps-static<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u2026<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-ps-relative<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u2026<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-ps-absolute<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u2026<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-ps-fixed<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u2026<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-ps-sticky<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u2026<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="classes" tabindex="-1"><a class="header-anchor" href="#classes" aria-hidden="true">#</a> Classes</h2> <p>Set an element\u2019s position by using the position classes listed in the table below. Starting in v5.8.0, Dialtone began providing immutable type classes, meaning they include an <span class="code-example--inline">!important</span> to override CSS specificity.</p> `,6),_={scope:"row",class:"d-ff-mono d-fc-purple d-fw-normal d-fs12"},x=s(),q={class:"d-ff-mono d-fc-orange d-fs12"};function w(y,S){const d=t("code-well-header"),i=t("utility-class-table");return p(),e("div",null,[b,m,o(d,{class:"d-p24 d-bgc-purple-100 d-bgo50 d-w100p d-hmn216 d-of-y-auto",custom:""},{default:c(()=>[h]),_:1}),v,o(i,null,{content:c(()=>[a("tbody",null,[(p(),e(k,null,g(["static","relative","absolute","fixed","sticky","unset"],n=>a("tr",null,[a("th",_,".d-ps-"+l(n),1),x,a("td",q,"position: "+l(n)+" !important;",1)])),64))])]),_:1})])}var N=u(f,[["render",w],["__file","position.html.vue"]]);export{N as default};