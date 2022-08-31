import{_ as u,r as c,o as p,c as d,b as t,w as n,a as s,e as a,d as o,F as h,f as m,t as i}from"./app.dbe28b92.js";const _={},f=s("h2",{id:"truncate",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#truncate","aria-hidden":"true"},"#"),a(" Truncate")],-1),g=a(),k=s("p",null,[a("Use "),s("code",null,"d-truncate"),a(" to truncate an element's text.")],-1),b=a(),v=s("div",{class:"d-bgc-green-100 d-py8 d-px16 d-bar8 d-w332"},[s("p",{class:"d-fs18 d-truncate"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiisitaquequodpraesentiumexplicaboincidunt? Dolores beatae nam at sed dolorum ratione dolorem nisi velit dolor.")],-1),x=o(` <div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-truncate<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="ellipsis" tabindex="-1"><a class="header-anchor" href="#ellipsis" aria-hidden="true">#</a> Ellipsis</h2> <p>Use <code>d-to-ellipsis</code> to truncate an element&#39;s overflowing text with an ellipsis (<code>...</code>) if needed.</p> `,6),w=s("div",{class:"d-bgc-pink-200 d-py8 d-px16 d-bar8 d-w332"},[s("p",{class:"d-fs18 d-of-hidden d-to-ellipsis"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiisitaquequodpraesentiumexplicaboincidunt? Dolores beatae nam at sed dolorum ratione dolorem nisi velit dolor.")],-1),q=o(` <div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-of-hidden d-to-ellipsis<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="clip" tabindex="-1"><a class="header-anchor" href="#clip" aria-hidden="true">#</a> Clip</h2> <p>Use <code>d-to-clip</code> to clip an element&#39;s overflowing text if needed.</p> `,6),y=s("div",{class:"d-bgc-purple-200 d-py8 d-px16 d-bar8 d-w332"},[s("p",{class:"d-fs18 d-of-hidden d-to-clip"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiisitaquequodpraesentiumexplicaboincidunt? Dolores beatae nam at sed dolorum ratione dolorem nisi velit dolor.")],-1),B=o(` <div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-of-hidden d-to-clip<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="classes" tabindex="-1"><a class="header-anchor" href="#classes" aria-hidden="true">#</a> Classes</h2> `,4),C=s("tr",null,[s("th",{scope:"row",class:"d-ff-mono d-fc-purple d-fw-normal d-fs12"},".d-truncate"),a(),s("td",{class:"d-ff-mono d-fc-orange d-fs12"},[a(`
          overflow: hidden !important;`),s("br"),a(`
          text-overflow: ellipsis !important;`),s("br"),a(`
          white-space: nowrap !important;
        `)])],-1),D=a(),L={scope:"row",class:"d-ff-mono d-fc-purple d-fw-normal d-fs12"},N=a(),V={class:"d-ff-mono d-fc-orange d-fs12"};function U(E,F){const e=c("code-well-header"),r=c("utility-class-table");return p(),d("div",null,[f,g,k,b,t(e,{class:"d-fl-center d-p24 d-bgc-green-100 d-bgo50 d-w100p d-hmn102",custom:""},{default:n(()=>[v]),_:1}),x,t(e,{class:"d-fl-center d-p24 d-bgc-pink-100 d-bgo50 d-w100p d-hmn102",custom:""},{default:n(()=>[w]),_:1}),q,t(e,{class:"d-fl-center d-p24 d-bgc-purple-100 d-bgo50 d-w100p d-hmn102",custom:""},{default:n(()=>[y]),_:1}),B,t(r,null,{content:n(()=>[s("tbody",null,[C,D,(p(),d(h,null,m(["ellipsis","clip","unset"],l=>s("tr",null,[s("th",L,".d-to-"+i(l),1),N,s("td",V,"text-overflow: "+i(l)+" !important;",1)])),64))])]),_:1})])}var T=u(_,[["render",U],["__file","text-overflow.html.vue"]]);export{T as default};
