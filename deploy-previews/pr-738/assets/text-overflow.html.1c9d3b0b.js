import{_ as u,r as c,o as p,c as d,a as s,d as t,w as n,b as a,e as o,F as m,f as h,t as i}from"./app.85528164.js";const f={},g=a("h2",{id:"truncate",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#truncate","aria-hidden":"true"},"#"),s(" Truncate")],-1),_=a("p",null,[s("Use "),a("code",null,"d-truncate"),s(" to truncate an element's text.")],-1),k=a("div",{class:"d-bgc-green-100 d-py8 d-px16 d-bar8 d-w332"},[a("p",{class:"d-fs-200 d-truncate"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiisitaquequodpraesentiumexplicaboincidunt? Dolores beatae nam at sed dolorum ratione dolorem nisi velit dolor.")],-1),b=o(`<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-truncate<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="ellipsis" tabindex="-1"><a class="header-anchor" href="#ellipsis" aria-hidden="true">#</a> Ellipsis</h2>`,2),v=a("p",null,[s("Use "),a("code",null,"d-to-ellipsis"),s(" to truncate an element's overflowing text with an ellipsis ("),a("code",null,"..."),s(") if needed.")],-1),x=a("div",{class:"d-bgc-magenta-100 d-py8 d-px16 d-bar8 d-w332"},[a("p",{class:"d-fs-200 d-of-hidden d-to-ellipsis"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiisitaquequodpraesentiumexplicaboincidunt? Dolores beatae nam at sed dolorum ratione dolorem nisi velit dolor.")],-1),w=o(`<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-of-hidden d-to-ellipsis<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="clip" tabindex="-1"><a class="header-anchor" href="#clip" aria-hidden="true">#</a> Clip</h2>`,2),q=a("p",null,[s("Use "),a("code",null,"d-to-clip"),s(" to clip an element's overflowing text if needed.")],-1),y=a("div",{class:"d-bgc-purple-200 d-py8 d-px16 d-bar8 d-w332"},[a("p",{class:"d-fs-200 d-of-hidden d-to-clip"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiisitaquequodpraesentiumexplicaboincidunt? Dolores beatae nam at sed dolorum ratione dolorem nisi velit dolor.")],-1),B=o(`<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-of-hidden d-to-clip<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="classes" tabindex="-1"><a class="header-anchor" href="#classes" aria-hidden="true">#</a> Classes</h2>`,2),C=a("tr",null,[a("th",{scope:"row",class:"d-ff-mono d-fc-purple-400 d-fw-normal d-fs-100"},".d-truncate"),s(),a("td",{class:"d-ff-mono d-fs-100"},[s(`
          overflow: hidden !important;`),a("br"),s(`
          text-overflow: ellipsis !important;`),a("br"),s(`
          white-space: nowrap !important;
        `)])],-1),D={scope:"row",class:"d-ff-mono d-fc-purple-400 d-fw-normal d-fs-100"},L={class:"d-ff-mono d-fs-100"};function N(V,U){const e=c("code-well-header"),r=c("utility-class-table");return p(),d("div",null,[g,s(),_,s(),t(e,{class:"d-fl-center d-p24 d-bgc-green-100 d-bgo50 d-w100p d-hmn102",custom:""},{default:n(()=>[k]),_:1}),s(),b,s(),v,s(),t(e,{class:"d-fl-center d-p24 d-bgc-magenta-100 d-bgo50 d-w100p d-hmn102",custom:""},{default:n(()=>[x]),_:1}),s(),w,s(),q,s(),t(e,{class:"d-fl-center d-p24 d-bgc-purple-100 d-bgo50 d-w100p d-hmn102",custom:""},{default:n(()=>[y]),_:1}),s(),B,s(),t(r,null,{content:n(()=>[a("tbody",null,[C,s(),(p(),d(m,null,h(["ellipsis","clip","unset"],l=>a("tr",null,[a("th",D,".d-to-"+i(l),1),s(),a("td",L,"text-overflow: "+i(l)+" !important;",1)])),64))])]),_:1})])}var F=u(f,[["render",N],["__file","text-overflow.html.vue"]]);export{F as default};
