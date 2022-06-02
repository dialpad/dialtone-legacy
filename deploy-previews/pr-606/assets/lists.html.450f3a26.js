import{lists as g}from"./type.95ef88bd.js";import{_ as r,r as u,o as a,c as t,b as l,w as e,F as i,a as s,e as n,d as o,f as h,t as k,u as m}from"./app.604f0392.js";const _=s("h2",{id:"classes",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#classes","aria-hidden":"true"},"#"),n(" Classes")],-1),f=n(),y=s("tr",null,[s("th",{scope:"row",class:"d-ff-mono d-fc-purple d-fw-normal d-fs12"},".d-ls-reset"),n(),s("td",{class:"d-ff-mono d-fc-orange d-fs12"},[n(`
          margin: 0;`),s("br"),n(`
          padding: 0;`),s("br"),n(`
          list-style: none !important;
        `)])],-1),q=n(),v=s("tr",null,[s("th",{scope:"row",class:"d-ff-mono d-fc-purple d-fw-normal d-fs12"},".d-ls-none"),n(),s("td",{class:"d-ff-mono d-fc-orange d-fs12"},"list-style: none !important;")],-1),b=n(),w={scope:"row",class:"d-ff-mono d-fc-purple d-fw-normal d-fs12"},x=n(),A={class:"d-ff-mono d-fc-orange d-fs12"},C={key:0},N={key:1},V=o(' <h2 id="resetting-a-list" tabindex="-1"><a class="header-anchor" href="#resetting-a-list" aria-hidden="true">#</a> Resetting a list</h2> <p>Use <code>d-ls-reset</code> to reset the margin, padding, and list-style-type of a list. Reseting a list applies to the parent <code>ol</code> or <code>ul</code>, any child <code>li</code> elements, and any child <code>ol</code> or <code>ul</code> elements.</p> ',5),B=s("ul",{class:"d-ls-reset d-fc-purple d-fs18"},[s("li",null,"An unordered list item"),n(),s("li",null,[s("ol",null,[s("li",null,"An ordered list item"),n(),s("li",null,"An ordered list item")])]),n(),s("li",null,"An unordered list item")],-1),j=o(` <div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-ls-reset<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="changing-the-list-style-type" tabindex="-1"><a class="header-anchor" href="#changing-the-list-style-type" aria-hidden="true">#</a> Changing the list style type</h2> <p>Use <code>d-ls-{disc|decimal}</code> to change an unordered list&#39;s bullet styling.</p> `,6),F=s("ul",{class:"d-lst-disc d-fs18 d-fc-green"},[s("li",null,"An unordered list item"),n(),s("li",null,[s("ul",{class:"d-lst-circle"},[s("li",{class:"d-pl4"},"An unordered list item"),n(),s("li",{class:"d-pl4"},"An unordered list item")])]),n(),s("li",null,[s("ul",null,[s("li",{class:"d-pl4 d-lst-content",style:{"--ls-content":"'\u2705'"}},"An unordered list item"),n(),s("li",{class:"d-pl4 d-lst-content",style:{"--ls-content":"'\u274C'"}},"An unordered list item")])])],-1),R=o(` <div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-lst-disc<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-lst-circle<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-lst-content<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">--ls-content</span><span class="token punctuation">:</span> <span class="token string">&#39;\u2705&#39;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-lst-content<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">--ls-content</span><span class="token punctuation">:</span> <span class="token string">&#39;\u274C&#39;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,2),S={setup(U){return(D,E)=>{const d=u("utility-class-table"),c=u("code-well-header");return a(),t(i,null,[_,f,l(d,null,{content:e(()=>[s("tbody",null,[y,q,v,b,(a(!0),t(i,null,h(m(g),p=>(a(),t("tr",null,[s("th",w,".d-lst-"+k(p),1),x,s("td",A,[p==="content"?(a(),t("span",C,"list-style-type: var(--ls-content) !important;")):(a(),t("span",N,"list-style-type: "+k(p)+" !important;",1))])]))),256))])]),_:1}),V,l(c,{class:"d-d-flex d-jc-center d-fd-column d-p24 d-bgc-purple-100 d-w100p d-hmn102",custom:""},{default:e(()=>[B]),_:1}),j,l(c,{class:"d-d-flex d-jc-center d-fd-column d-p24 d-bgc-green-100 d-w100p d-hmn102",custom:""},{default:e(()=>[F]),_:1}),R],64)}}};var z=r(S,[["__file","lists.html.vue"]]);export{z as default};
