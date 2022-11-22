import{_ as d,r as u,o as a,c as t,a as n,d as l,w as e,b as s,e as o,F as g,f as r,t as i,u as m}from"./app.a9842545.js";import{lists as h}from"./type.8770d77c.js";const _=s("h2",{id:"resetting-a-list",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#resetting-a-list","aria-hidden":"true"},"#"),n(" Resetting a list")],-1),f=o("<p>Use <code>d-ls-reset</code> to reset the margin, padding, and list-style-type of a list. Reseting a list applies to the parent <code>ol</code> or <code>ul</code>, any child <code>li</code> elements, and any child <code>ol</code> or <code>ul</code> elements.</p>",1),y=s("ul",{class:"d-ls-reset d-fc-purple-400 d-fs-200"},[s("li",null,"An unordered list item"),n(),s("li",null,[s("ol",null,[s("li",null,"An ordered list item"),n(),s("li",null,"An ordered list item")])]),n(),s("li",null,"An unordered list item")],-1),q=o(`<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-ls-reset<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="changing-the-list-style-type" tabindex="-1"><a class="header-anchor" href="#changing-the-list-style-type" aria-hidden="true">#</a> Changing the list style type</h2>`,2),v=s("p",null,[n("Use "),s("code",null,"d-ls-{disc|decimal}"),n(" to change an unordered list's bullet styling.")],-1),b=s("ul",{class:"d-lst-disc d-fs-200 d-fc-success"},[s("li",null,"An unordered list item"),n(),s("li",null,[s("ul",{class:"d-lst-circle"},[s("li",{class:"d-pl4"},"An unordered list item"),n(),s("li",{class:"d-pl4"},"An unordered list item")])]),n(),s("li",null,[s("ul",null,[s("li",{class:"d-pl4 d-lst-content",style:{"--ls-content":"'\u2705'"}},"An unordered list item"),n(),s("li",{class:"d-pl4 d-lst-content",style:{"--ls-content":"'\u274C'"}},"An unordered list item")])])],-1),w=o(`<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-lst-disc<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
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
</code></pre></div><h2 id="classes" tabindex="-1"><a class="header-anchor" href="#classes" aria-hidden="true">#</a> Classes</h2>`,2),x=s("tr",null,[s("th",{scope:"row",class:"d-ff-mono d-fc-purple-400 d-fw-normal d-fs-100"},".d-ls-reset"),n(),s("td",{class:"d-ff-mono d-fs-100"},[n(`
          margin: 0;`),s("br"),n(`
          padding: 0;`),s("br"),n(`
          list-style: none !important;
        `)])],-1),A=s("tr",null,[s("th",{scope:"row",class:"d-ff-mono d-fc-purple-400 d-fw-normal d-fs-100"},".d-ls-none"),n(),s("td",{class:"d-ff-mono d-fs-100"},"list-style: none !important;")],-1),C={scope:"row",class:"d-ff-mono d-fc-purple-400 d-fw-normal d-fs-100"},N={class:"d-ff-mono d-fs-100"},V={key:0},B={key:1},j={__name:"lists.html",setup(F){return(R,S)=>{const c=u("code-well-header"),k=u("utility-class-table");return a(),t("div",null,[_,n(),f,n(),l(c,{class:"d-d-flex d-jc-center d-fd-column d-p24 d-bgc-purple-100 d-w100p d-hmn102",custom:""},{default:e(()=>[y]),_:1}),n(),q,n(),v,n(),l(c,{class:"d-d-flex d-jc-center d-fd-column d-p24 d-bgc-green-100 d-w100p d-hmn102",custom:""},{default:e(()=>[b]),_:1}),n(),w,n(),l(k,null,{content:e(()=>[s("tbody",null,[x,n(),A,n(),(a(!0),t(g,null,r(m(h),p=>(a(),t("tr",null,[s("th",C,".d-lst-"+i(p),1),n(),s("td",N,[p==="content"?(a(),t("span",V,"list-style-type: var(--ls-content) !important;")):(a(),t("span",B,"list-style-type: "+i(p)+" !important;",1))])]))),256))])]),_:1})])}}};var E=d(j,[["__file","lists.html.vue"]]);export{E as default};
