import{_ as u,s as d,v as c,x as i,D as s,y as t,z as n,G as a,F as h,A as m,E as p,K as o}from"./framework-2f6ab852.js";const g={},k=a("h2",{id:"truncate",tabindex:"-1",class:"d-docsite--header-2"},[s("Truncate "),a("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#truncate","aria-hidden":"true"},"#")],-1),_=a("p",{class:"d-docsite--paragraph"},[s("Use "),a("code",null,"d-truncate"),s(" to truncate an element's text.")],-1),f=a("div",{class:"d-bgc-green-100 d-py8 d-px16 d-bar8 d-w332"},[a("p",{class:"d-fs-200 d-truncate"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiisitaquequodpraesentiumexplicaboincidunt? Dolores beatae nam at sed dolorum ratione dolorem nisi velit dolor.")],-1),b=o(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-truncate<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="ellipsis" tabindex="-1" class="d-docsite--header-2">Ellipsis <a class="header-anchor d-link d-docsite--link d-link" href="#ellipsis" aria-hidden="true">#</a></h2>`,2),v=a("p",{class:"d-docsite--paragraph"},[s("Use "),a("code",null,"d-to-ellipsis"),s(" to truncate an element's overflowing text with an ellipsis ("),a("code",null,"..."),s(") if needed.")],-1),x=a("div",{class:"d-bgc-magenta-100 d-py8 d-px16 d-bar8 d-w332"},[a("p",{class:"d-fs-200 d-of-hidden d-to-ellipsis"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiisitaquequodpraesentiumexplicaboincidunt? Dolores beatae nam at sed dolorum ratione dolorem nisi velit dolor.")],-1),w=o(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-of-hidden d-to-ellipsis<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="clip" tabindex="-1" class="d-docsite--header-2">Clip <a class="header-anchor d-link d-docsite--link d-link" href="#clip" aria-hidden="true">#</a></h2>`,2),q=a("p",{class:"d-docsite--paragraph"},[s("Use "),a("code",null,"d-to-clip"),s(" to clip an element's overflowing text if needed.")],-1),y=a("div",{class:"d-bgc-purple-200 d-py8 d-px16 d-bar8 d-w332"},[a("p",{class:"d-fs-200 d-of-hidden d-to-clip"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiisitaquequodpraesentiumexplicaboincidunt? Dolores beatae nam at sed dolorum ratione dolorem nisi velit dolor.")],-1),B=o(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-of-hidden d-to-clip<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="classes" tabindex="-1" class="d-docsite--header-2">Classes <a class="header-anchor d-link d-docsite--link d-link" href="#classes" aria-hidden="true">#</a></h2>`,2),D=a("tr",null,[a("th",{scope:"row",class:"d-ff-mono d-fc-purple-400 d-fw-normal d-fs-100"},".d-truncate"),s(),a("td",{class:"d-ff-mono d-fs-100"},[s(`
          overflow: hidden !important;`),a("br"),s(`
          text-overflow: ellipsis !important;`),a("br"),s(`
          white-space: nowrap !important;
        `)])],-1),C={scope:"row",class:"d-ff-mono d-fc-purple-400 d-fw-normal d-fs-100"},L={class:"d-ff-mono d-fs-100"};function N(V,E){const e=d("code-well-header"),r=d("utility-class-table");return c(),i("div",null,[k,s(),_,s(),t(e,{class:"d-fl-center d-p24 d-bgc-green-100 d-bgo50 d-w100p d-hmn102",custom:""},{default:n(()=>[f]),_:1}),s(),b,s(),v,s(),t(e,{class:"d-fl-center d-p24 d-bgc-magenta-100 d-bgo50 d-w100p d-hmn102",custom:""},{default:n(()=>[x]),_:1}),s(),w,s(),q,s(),t(e,{class:"d-fl-center d-p24 d-bgc-purple-100 d-bgo50 d-w100p d-hmn102",custom:""},{default:n(()=>[y]),_:1}),s(),B,s(),t(r,null,{content:n(()=>[a("tbody",null,[D,s(),(c(),i(h,null,m(["ellipsis","clip","unset"],l=>a("tr",null,[a("th",C,".d-to-"+p(l),1),s(),a("td",L,"text-overflow: "+p(l)+" !important;",1)])),64))])]),_:1})])}const F=u(g,[["render",N],["__file","text-overflow.html.vue"]]);export{F as default};
