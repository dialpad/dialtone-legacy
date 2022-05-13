import{properties as t}from"./flex.0972db06.js";import{_ as f,r as g,o as l,c as o,a as s,F as c,f as u,u as e,b as i,w as r,e as p,d as k,t as n}from"./app.0c4a50dc.js";const h=s("h2",{id:"flex",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#flex","aria-hidden":"true"},"#"),p(" Flex")],-1),_=s("p",null,[p("The "),s("code",null,"flex"),p(" property is a shorthand property for "),s("code",null,"flex-grow"),p(", "),s("code",null,"flex-shrink"),p(", and "),s("code",null,"flex-basis"),p(" properties. You can also control the grow and shrink flex values separately with their own utility classes.")],-1),v={class:"d-table"},m=s("thead",null,[s("tr",null,[s("th",{scope:"col",class:"d-w20p"},"Class"),s("th",{scope:"col",class:"d-w30p"},"Output"),s("th",{scope:"col"},"Description")])],-1),x={scope:"row",class:"d-ff-mono d-fc-purple d-fw-normal d-fs12"},w={class:"d-ff-mono d-fc-orange d-fs12"},b=s("tr",null,[s("th",{scope:"row",class:"d-ff-mono d-fc-purple d-fw-normal d-fs12"},".d-fl-unset"),s("td",{class:"d-ff-mono d-fc-orange d-fs12"},"flex: unset;"),s("td",null,"Resets the flex value to the initial value (0 1 auto).")],-1),q=s("div",{class:"d-d-flex d-w100p d-bar8 d-bgc-pink-100"},[s("div",{class:"d-fl-none d-p16 d-fs14 d-lh-tight d-bgc-pink-100 d-ps-relative"},"Content cannot flex"),s("div",{class:"d-fl1 d-p16 d-fs14 d-lh-tight d-bgc-pink-200 d-ps-relative"},"Text that will flex"),s("div",{class:"d-fl-none d-p16 d-fs14 d-lh-tight d-bgc-pink-100 d-ps-relative"},"Content cannot flex")],-1),C=k(`<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-d-flex<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-fl1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="flex-grow" tabindex="-1"><a class="header-anchor" href="#flex-grow" aria-hidden="true">#</a> Flex Grow</h2><p>The <code>flex-grow</code> sets the flex container\u2019s grow factor relative to the parent&#39;s main size. The default value is 0.</p>`,3),T={class:"d-table"},y=s("thead",null,[s("tr",null,[s("th",{scope:"col",class:"d-w20p"},"Class"),s("th",{scope:"col",class:"d-w30p"},"Output"),s("th",{scope:"col"},"Description")])],-1),F={scope:"row",class:"d-ff-mono d-fc-purple d-fw-normal d-fs12"},D={class:"d-ff-mono d-fc-orange d-fs12"},N=s("tr",null,[s("th",{scope:"row",class:"d-ff-mono d-fc-purple d-fw-normal d-fs12"},".d-fl-grow-unset"),s("td",{class:"d-ff-mono d-fc-orange-600 d-fs12"},"flex-grow: unset !important;"),s("td",null,"Resets the flex-grow value to the initial value (0).")],-1),S=s("div",{class:"d-d-flex d-w100p d-bar8 d-bgc-purple-100"},[s("div",{class:"d-fl-none d-p16 d-fs14 d-lh-tight d-bgc-purple-100"},"Content cannot flex"),s("div",{class:"d-fl-grow1 d-p16 d-fs14 d-lh-tight d-bgc-purple-200"},"Text that will grow"),s("div",{class:"d-fl-none d-p16 d-fs14 d-lh-tight d-bgc-purple-100"},"Content cannot flex")],-1),V=k(`<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-d-flex<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-fl-grow1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="flex-shrink" tabindex="-1"><a class="header-anchor" href="#flex-shrink" aria-hidden="true">#</a> Flex Shrink</h2><p>The <code>flex-shrink</code> sets the flex container\u2019s shrink factor relative to the parent&#39;s main size. The default value is 1.</p>`,3),B={class:"d-table"},L=s("thead",null,[s("tr",null,[s("th",{scope:"col",class:"d-w20p"},"Class"),s("th",{scope:"col",class:"d-w30p"},"Output"),s("th",{scope:"col"},"Description")])],-1),O={scope:"row",class:"d-ff-mono d-fc-purple d-fw-normal d-fs12"},R={class:"d-ff-mono d-fc-orange d-fs12"},z=s("tr",null,[s("th",{scope:"row",class:"d-ff-mono d-fc-purple d-fw-normal d-fs12"},".d-fl-shrink-unset"),s("td",{class:"d-ff-mono d-fc-orange d-fs12"},"flex-shrink: unset !important;"),s("td",null,"Resets the flex-shrink value to the initial value (1).")],-1),G=s("div",{class:"d-d-flex d-w5 d-bar8 d-bgc-red-100"},[s("div",{class:"d-fl-none d-p16 d-fs14 d-lh-tight d-bgc-red-100"},"Longer text that cannot flex"),s("div",{class:"d-fl-shrink1 d-p16 d-fs14 d-lh-tight d-bgc-red-200"},"Text that will shrink even if it causes text to wrap"),s("div",{class:"d-fl-none d-p16 d-fs14 d-lh-tight d-bgc-red-100"},"Longer text that cannot flex")],-1),E=k(`<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-d-flex<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-fl-shrink1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,1),Y={setup(j){return(A,H)=>{const d=g("code-well-header");return l(),o(c,null,[h,_,s("table",v,[m,s("tbody",null,[(l(!0),o(c,null,u(e(t)[0].values,a=>(l(),o("tr",null,[s("th",x,".d-fl"+n(a),1),s("td",w,"flex: "+n(a)+" auto !important;",1),s("td",null,n(e(t)[0].description)+" "+n(a)+".",1)]))),256)),b])]),i(d,{class:"d-fl-center d-fd-column d-p24 d-bgc-pink-100 d-bgo50 d-w100p d-hmn216 d-of-auto",custom:""},{default:r(()=>[q]),_:1}),C,s("table",T,[y,s("tbody",null,[(l(!0),o(c,null,u(e(t)[1].values,a=>(l(),o("tr",null,[s("th",F,".d-"+n(e(t)[1].class)+n(a),1),s("td",D,"flex-grow: "+n(a)+" !important;",1),s("td",null,n(e(t)[1].description)+" "+n(a)+".",1)]))),256)),N])]),i(d,{class:"d-fl-center d-fd-column d-p24 d-bgc-purple-100 d-bgo50 d-w100p d-hmn216 d-of-auto",custom:""},{default:r(()=>[S]),_:1}),V,s("table",B,[L,s("tbody",null,[(l(!0),o(c,null,u(e(t)[2].values,a=>(l(),o("tr",null,[s("th",O,".d-"+n(e(t)[2].class)+n(a),1),s("td",R,"flex-shrink: "+n(a)+" !important;",1),s("td",null,n(e(t)[2].description)+" "+n(a)+".",1)]))),256)),z])]),i(d,{class:"d-fl-center d-fd-column d-p24 d-bgc-red-100 d-bgo50 d-w100p d-hmn216 d-of-auto",custom:""},{default:r(()=>[G]),_:1}),E],64)}}};var K=f(Y,[["__file","flex-grow-shrink.html.vue"]]);export{K as default};
