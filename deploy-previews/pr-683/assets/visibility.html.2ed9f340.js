import{_ as i,o as c,c as p,b as n,w as t,a as s,d as a,e as d,r as e}from"./app.560f024b.js";const r={},u=s("h2",{id:"usage",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#usage","aria-hidden":"true"},"#"),a(" Usage")],-1),h=a(),v=s("div",{class:"d-w100p"},[s("div",{class:"d-d-inline-block d-m8 d-p16 d-bgc-purple-300 d-bar4 d-ff-mono d-fs-200 d-ta-center d-vi-visible"},".d-vi-visible"),a(),s("div",{class:"d-d-inline-block d-m8 d-p16 d-bgc-purple-300 d-bar4 d-ff-mono d-fs-200 d-ta-center d-vi-visible-sr"},".d-vi-visible-sr"),a(),s("div",{class:"d-d-inline-block d-m8 d-p16 d-bgc-purple-300 d-bar4 d-ff-mono d-fs-200 d-ta-center d-vi-hidden"},".d-vi-hidden")],-1),f=d(` <div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-vi-visible<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-vi-visible-sr<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-vi-hidden<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="accessibility" tabindex="-1"><a class="header-anchor" href="#accessibility" aria-hidden="true">#</a> Accessibility</h2> <p>Bear in mind using a visibility value of <code>hidden</code> on an element will remove it from the accessibility tree. This will cause the element and all its descendant elements to no longer be announced by screen reading technology.</p> <h2 id="classes" tabindex="-1"><a class="header-anchor" href="#classes" aria-hidden="true">#</a> Classes</h2> `,8),k=s("tbody",null,[s("tr",null,[s("th",{scope:"row",class:"d-ff-mono d-fc-purple-400 d-fw-normal d-fs-100"},".d-vi-visible"),a(),s("td",{class:"d-ff-mono d-fs-100"},"visibility: visible !important;")]),a(),s("tr",null,[s("th",{scope:"row",class:"d-ff-mono d-fc-purple-400 d-fw-normal d-fs-100"},".d-vi-visible-sr"),a(),s("td",{class:"d-ff-mono d-fs-100"},`border: 0;
        clip: rect(1px,1px,1px,1px);
        clip-path: inset(50%);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
        word-wrap: normal;`)]),a(),s("tr",null,[s("th",{scope:"row",class:"d-ff-mono d-fc-purple-400 d-fw-normal d-fs-100"},".d-vi-hidden"),a(),s("td",{class:"d-ff-mono d-fs-100"},"visibility: hidden !important;")])],-1);function b(m,g){const l=e("code-well-header"),o=e("utility-class-table");return c(),p("div",null,[u,h,n(l,{bgclass:"d-bgc-purple-100"},{default:t(()=>[v]),_:1}),f,n(o,null,{content:t(()=>[k]),_:1})])}var w=i(r,[["render",b],["__file","visibility.html.vue"]]);export{w as default};
