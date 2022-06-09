import{properties as e}from"./flex.0972db06.js";import{_ as k,r as f,o as l,c as p,a as s,F as c,f as i,u as o,b as r,w as h,d,e as n,t as a}from"./app.3013feb4.js";const g=d(`<h2 id="flex" tabindex="-1"><a class="header-anchor" href="#flex" aria-hidden="true">#</a> Flex</h2> <p>The <code>flex</code> property is a shorthand property for <code>flex-grow</code>, <code>flex-shrink</code>, and <code>flex-basis</code> properties. You can also
control the grow and shrink flex values separately with their own utility classes.</p> `,4),_={class:"d-table dialtone-doc-table"},v=s("thead",null,[s("tr",null,[s("th",{scope:"col",class:"d-w20p"},"Class"),n(),s("th",{scope:"col",class:"d-w30p"},"Output"),n(),s("th",{scope:"col"},"Description")])],-1),m=n(),x={scope:"row",class:"d-ff-mono d-fc-purple d-fw-normal d-fs12"},w=n(),b={class:"d-ff-mono d-fc-orange d-fs12"},q=n(),C=n(),T=s("tr",null,[s("th",{scope:"row",class:"d-ff-mono d-fc-purple d-fw-normal d-fs12"},".d-fl-unset"),n(),s("td",{class:"d-ff-mono d-fc-orange d-fs12"},"flex: unset;"),n(),s("td",null,"Resets the flex value to the initial value (0 1 auto).")],-1),y=n(),F=s("div",{class:"d-d-flex d-w100p d-bar8 d-bgc-pink-100"},[s("div",{class:"d-fl-none d-p16 d-fs14 d-lh-tight d-bgc-pink-100 d-ps-relative"},"Content cannot flex"),n(),s("div",{class:"d-fl1 d-p16 d-fs14 d-lh-tight d-bgc-pink-200 d-ps-relative"},"Text that will flex"),n(),s("div",{class:"d-fl-none d-p16 d-fs14 d-lh-tight d-bgc-pink-100 d-ps-relative"},"Content cannot flex")],-1),D=d(` <div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-d-flex<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-fl1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="flex-grow" tabindex="-1"><a class="header-anchor" href="#flex-grow" aria-hidden="true">#</a> Flex Grow</h2> <p>The <code>flex-grow</code> sets the flex container\u2019s grow factor relative to the parent&#39;s main size. The default value is 0.</p> `,6),N={class:"d-table dialtone-doc-table"},S=s("thead",null,[s("tr",null,[s("th",{scope:"col",class:"d-w20p"},"Class"),n(),s("th",{scope:"col",class:"d-w30p"},"Output"),n(),s("th",{scope:"col"},"Description")])],-1),V=n(),B={scope:"row",class:"d-ff-mono d-fc-purple d-fw-normal d-fs12"},L=n(),O={class:"d-ff-mono d-fc-orange d-fs12"},R=n(),z=n(),G=s("tr",null,[s("th",{scope:"row",class:"d-ff-mono d-fc-purple d-fw-normal d-fs12"},".d-fl-grow-unset"),n(),s("td",{class:"d-ff-mono d-fc-orange-600 d-fs12"},"flex-grow: unset !important;"),n(),s("td",null,"Resets the flex-grow value to the initial value (0).")],-1),E=n(),Y=s("div",{class:"d-d-flex d-w100p d-bar8 d-bgc-purple-100"},[s("div",{class:"d-fl-none d-p16 d-fs14 d-lh-tight d-bgc-purple-100"},"Content cannot flex"),n(),s("div",{class:"d-fl-grow1 d-p16 d-fs14 d-lh-tight d-bgc-purple-200"},"Text that will grow"),n(),s("div",{class:"d-fl-none d-p16 d-fs14 d-lh-tight d-bgc-purple-100"},"Content cannot flex")],-1),j=d(` <div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-d-flex<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-fl-grow1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="flex-shrink" tabindex="-1"><a class="header-anchor" href="#flex-shrink" aria-hidden="true">#</a> Flex Shrink</h2> <p>The <code>flex-shrink</code> sets the flex container\u2019s shrink factor relative to the parent&#39;s main size. The default value is 1.</p> `,6),A={class:"d-table dialtone-doc-table"},H=s("thead",null,[s("tr",null,[s("th",{scope:"col",class:"d-w20p"},"Class"),n(),s("th",{scope:"col",class:"d-w30p"},"Output"),n(),s("th",{scope:"col"},"Description")])],-1),I=n(),J={scope:"row",class:"d-ff-mono d-fc-purple d-fw-normal d-fs12"},K=n(),M={class:"d-ff-mono d-fc-orange d-fs12"},P=n(),Q=n(),U=s("tr",null,[s("th",{scope:"row",class:"d-ff-mono d-fc-purple d-fw-normal d-fs12"},".d-fl-shrink-unset"),n(),s("td",{class:"d-ff-mono d-fc-orange d-fs12"},"flex-shrink: unset !important;"),n(),s("td",null,"Resets the flex-shrink value to the initial value (1).")],-1),W=n(),X=s("div",{class:"d-d-flex d-w5 d-bar8 d-bgc-red-100"},[s("div",{class:"d-fl-none d-p16 d-fs14 d-lh-tight d-bgc-red-100"},"Longer text that cannot flex"),n(),s("div",{class:"d-fl-shrink1 d-p16 d-fs14 d-lh-tight d-bgc-red-200"},"Text that will shrink even if it causes text to wrap"),n(),s("div",{class:"d-fl-none d-p16 d-fs14 d-lh-tight d-bgc-red-100"},"Longer text that cannot flex")],-1),Z=d(` <div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-d-flex<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-fl-shrink1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,2),$={setup(ss){return(ns,as)=>{const u=f("code-well-header");return l(),p(c,null,[g,s("table",_,[v,m,s("tbody",null,[(l(!0),p(c,null,i(o(e)[0].values,t=>(l(),p("tr",null,[s("th",x,".d-fl"+a(t),1),w,s("td",b,"flex: "+a(t)+" auto !important;",1),q,s("td",null,a(o(e)[0].description)+" "+a(t)+".",1)]))),256)),C,T])]),y,r(u,{class:"d-fl-center d-fd-column d-p24 d-bgc-pink-100 d-bgo50 d-w100p d-hmn216 d-of-auto",custom:""},{default:h(()=>[F]),_:1}),D,s("table",N,[S,V,s("tbody",null,[(l(!0),p(c,null,i(o(e)[1].values,t=>(l(),p("tr",null,[s("th",B,".d-"+a(o(e)[1].class)+a(t),1),L,s("td",O,"flex-grow: "+a(t)+" !important;",1),R,s("td",null,a(o(e)[1].description)+" "+a(t)+".",1)]))),256)),z,G])]),E,r(u,{class:"d-fl-center d-fd-column d-p24 d-bgc-purple-100 d-bgo50 d-w100p d-hmn216 d-of-auto",custom:""},{default:h(()=>[Y]),_:1}),j,s("table",A,[H,I,s("tbody",null,[(l(!0),p(c,null,i(o(e)[2].values,t=>(l(),p("tr",null,[s("th",J,".d-"+a(o(e)[2].class)+a(t),1),K,s("td",M,"flex-shrink: "+a(t)+" !important;",1),P,s("td",null,a(o(e)[2].description)+" "+a(t)+".",1)]))),256)),Q,U])]),W,r(u,{class:"d-fl-center d-fd-column d-p24 d-bgc-red-100 d-bgo50 d-w100p d-hmn216 d-of-auto",custom:""},{default:h(()=>[X]),_:1}),Z],64)}}};var os=k($,[["__file","flex-grow-shrink.html.vue"]]);export{os as default};
