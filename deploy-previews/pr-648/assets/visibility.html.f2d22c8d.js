import{_ as i,r as n,o as c,c as p,b as t,w as e,a as s,e as a,d}from"./app.fe8037e7.js";const r={},u=s("h2",{id:"usage",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#usage","aria-hidden":"true"},"#"),a(" Usage")],-1),f=a(),h=s("div",{class:"d-w100p"},[s("div",{class:"d-d-inline-block d-m8 d-p16 d-bgc-purple-300 d-bar4 d-ff-mono d-fs14 d-ta-center d-vi-visible"},".d-vi-visible"),a(),s("div",{class:"d-d-inline-block d-m8 d-p16 d-bgc-purple-300 d-bar4 d-ff-mono d-fs14 d-ta-center d-vi-visible-sr"},".d-vi-visible-sr"),a(),s("div",{class:"d-d-inline-block d-m8 d-p16 d-bgc-purple-300 d-bar4 d-ff-mono d-fs14 d-ta-center d-vi-hidden"},".d-vi-hidden")],-1),v=d(` <div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-vi-visible<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-vi-visible-sr<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-vi-hidden<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="accessibility" tabindex="-1"><a class="header-anchor" href="#accessibility" aria-hidden="true">#</a> Accessibility</h2> <p>Bear in mind using a visibility value of <code>hidden</code> on an element will remove it from the accessibility tree. This will cause the element and all its descendant elements to no longer be announced by screen reading technology.</p> <h2 id="classes" tabindex="-1"><a class="header-anchor" href="#classes" aria-hidden="true">#</a> Classes</h2> `,8),k=s("tbody",null,[s("tr",null,[s("th",{scope:"row",class:"d-ff-mono d-fc-purple d-fw-normal d-fs12"},".d-vi-visible"),a(),s("td",{class:"d-ff-mono d-fc-orange d-fs12"},"visibility: visible !important;")]),a(),s("tr",null,[s("th",{scope:"row",class:"d-ff-mono d-fc-purple d-fw-normal d-fs12"},".d-vi-visible-sr"),a(),s("td",{class:"d-ff-mono d-fc-orange d-fs12"},`border: 0;
        clip: rect(1px,1px,1px,1px);
        clip-path: inset(50%);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
        word-wrap: normal;`)]),a(),s("tr",null,[s("th",{scope:"row",class:"d-ff-mono d-fc-purple d-fw-normal d-fs12"},".d-vi-hidden"),a(),s("td",{class:"d-ff-mono d-fc-orange d-fs12"},"visibility: hidden !important;")])],-1);function b(g,m){const o=n("code-well-header"),l=n("utility-class-table");return c(),p("div",null,[u,f,t(o,{bgclass:"d-bgc-purple-100"},{default:e(()=>[h]),_:1}),v,t(l,null,{content:e(()=>[k]),_:1})])}var w=i(r,[["render",b],["__file","visibility.html.vue"]]);export{w as default};
