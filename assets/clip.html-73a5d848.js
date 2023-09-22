import{_ as r,s as o,v as p,x as d,C as a,G as n,B as t,y as s,F as g,z as b,D as l,K as i}from"./framework-291274b0.js";const k={},h=s("h2",{id:"usage",tabindex:"-1",class:"d-docsite--header-2"},[a("Usage "),s("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#usage","aria-hidden":"true"},"#")],-1),_=s("p",{class:"d-docsite--paragraph"},[a("Use "),s("code",null,"d-bgc-{name}"),a(" to control which box an element's background is clipped by.")],-1),f=s("div",{class:"d-bgc-border-box d-fl-center d-p16 d-bgc-purple-300 d-ba d-baw4 d-bas-dashed d-bar8 d-bc-purple-200 d-fs-200 d-fw-bold"},"border-box",-1),m=s("div",{class:"d-bgc-padding-box d-fl-center d-p16 d-bgc-purple-300 d-ba d-baw4 d-bas-dashed d-bar8 d-bc-purple-200 d-fs-200 d-fw-bold"},"padding-box",-1),x=s("div",{class:"d-bgc-content-box d-fl-center d-p16 d-bgc-purple-300 d-ba d-baw4 d-bas-dashed d-bar8 d-bc-purple-200 d-fs-200 d-fw-bold"},"content-box",-1),v=i(`<div class="language-html" data-ext="html"><pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-border-box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-padding-box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-content-box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="clipping-text" tabindex="-1" class="d-docsite--header-2">Clipping text <a class="header-anchor d-link d-docsite--link d-link" href="#clipping-text" aria-hidden="true">#</a></h2>`,2),w=s("p",{class:"d-docsite--paragraph"},[a("Use "),s("code",null,"d-bgc-text"),a(" to clip the background color(s) within the foreground text.")],-1),q=s("div",{class:"d-bgc-text d-w100p d-fl-center d-p16 d-bc-black-100 d-ba d-baw4 d-bas-dashed d-bar8 d-bgg-to-r d-bgg-from-purple-500 d-bgg-to-magenta-200 d-fs-500 d-fw-bold"},"Magic stuff happens.",-1),y=i(`<div class="language-html" data-ext="html"><pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-text d-bgg-to-r d-bgg-from-purple-500 d-bgg-to-magenta-200<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="classes" tabindex="-1" class="d-docsite--header-2">Classes <a class="header-anchor d-link d-docsite--link d-link" href="#classes" aria-hidden="true">#</a></h2>`,2),C={scope:"row",class:"d-ff-mono d-fc-purple-400 d-fw-normal d-fs-100"},B={class:"d-ff-mono d-fs-100"};function N(V,U){const e=o("code-well-header"),u=o("utility-class-table");return p(),d("div",null,[h,a(),_,a(),n(e,{class:"d-fl-col3 d-jc-center d-p24 d-bgc-purple-100 d-bgo50 d-flow16",custom:""},{default:t(()=>[f,a(),m,a(),x]),_:1}),a(),v,a(),w,a(),n(e,{class:"d-jc-center d-p24 d-bgc-black-200 d-flow16",custom:""},{default:t(()=>[q]),_:1}),a(),y,a(),n(u,null,{content:t(()=>[s("tbody",null,[(p(),d(g,null,b(["unset","border-box","padding-box","content-box","text"],c=>s("tr",null,[s("th",C,".d-bgc-"+l(c),1),a(),s("td",B,"background-clip: "+l(c)+" !important;",1)])),64))])]),_:1})])}const D=r(k,[["render",N],["__file","clip.html.vue"]]);export{D as default};