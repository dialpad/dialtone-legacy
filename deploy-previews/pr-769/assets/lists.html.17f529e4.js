import{lists as k}from"./type.367445ea.js";import{_ as r,r as u,o as a,c as t,a as n,e as l,w as e,b as s,d as o,F as g,y as h,t as i,z as m}from"./app.6ebdbad1.js";const _=s("h2",{id:"resetting-a-list",tabindex:"-1",class:"d-docsite--header-2 d-my24"},[n("Resetting a list "),s("a",{class:"header-anchor d-link d-td-none d-docsite--link d-link",href:"#resetting-a-list","aria-hidden":"true"},"#")],-1),f=o('<p class="d-docsite--paragraph d-mb8 d-lh-400 d-wmx75ch">Use <code>d-ls-reset</code> to reset the margin, padding, and list-style-type of a list. Reseting a list applies to the parent <code>ol</code> or <code>ul</code>, any child <code>li</code> elements, and any child <code>ol</code> or <code>ul</code> elements.</p>',1),y=s("ul",{class:"d-ls-reset d-fc-purple-400 d-fs-200"},[s("li",null,"An unordered list item"),n(),s("li",null,[s("ol",null,[s("li",null,"An ordered list item"),n(),s("li",null,"An ordered list item")])]),n(),s("li",null,"An unordered list item")],-1),q=o(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-ls-reset<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="changing-the-list-style-type" tabindex="-1" class="d-docsite--header-2 d-my24">Changing the list style type <a class="header-anchor d-link d-td-none d-docsite--link d-link" href="#changing-the-list-style-type" aria-hidden="true">#</a></h2>`,2),v=s("p",{class:"d-docsite--paragraph d-mb8 d-lh-400 d-wmx75ch"},[n("Use "),s("code",null,"d-ls-{disc|decimal}"),n(" to change an unordered list's bullet styling.")],-1),b=s("ul",{class:"d-lst-disc d-fs-200 d-fc-success"},[s("li",null,"An unordered list item"),n(),s("li",null,[s("ul",{class:"d-lst-circle"},[s("li",{class:"d-pl4"},"An unordered list item"),n(),s("li",{class:"d-pl4"},"An unordered list item")])]),n(),s("li",null,[s("ul",null,[s("li",{class:"d-pl4 d-lst-content",style:{"--ls-content":"'✅'"}},"An unordered list item"),n(),s("li",{class:"d-pl4 d-lst-content",style:{"--ls-content":"'❌'"}},"An unordered list item")])])],-1),w=o(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-lst-disc<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-lst-circle<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-lst-content<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">--ls-content</span><span class="token punctuation">:</span> <span class="token string">&#39;✅&#39;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-lst-content<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">--ls-content</span><span class="token punctuation">:</span> <span class="token string">&#39;❌&#39;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="classes" tabindex="-1" class="d-docsite--header-2 d-my24">Classes <a class="header-anchor d-link d-td-none d-docsite--link d-link" href="#classes" aria-hidden="true">#</a></h2>`,2),x=s("tr",null,[s("th",{scope:"row",class:"d-ff-mono d-fc-purple-400 d-fw-normal d-fs-100"},".d-ls-reset"),n(),s("td",{class:"d-ff-mono d-fs-100"},[n(`
          margin: 0;`),s("br"),n(`
          padding: 0;`),s("br"),n(`
          list-style: none !important;
        `)])],-1),A=s("tr",null,[s("th",{scope:"row",class:"d-ff-mono d-fc-purple-400 d-fw-normal d-fs-100"},".d-ls-none"),n(),s("td",{class:"d-ff-mono d-fs-100"},"list-style: none !important;")],-1),C={scope:"row",class:"d-ff-mono d-fc-purple-400 d-fw-normal d-fs-100"},N={class:"d-ff-mono d-fs-100"},V={key:0},B={key:1},j={__name:"lists.html",setup(F){return(R,S)=>{const c=u("code-well-header"),d=u("utility-class-table");return a(),t("div",null,[_,n(),f,n(),l(c,{class:"d-d-flex d-jc-center d-fd-column d-p24 d-bgc-purple-100 d-w100p d-hmn102",custom:""},{default:e(()=>[y]),_:1}),n(),q,n(),v,n(),l(c,{class:"d-d-flex d-jc-center d-fd-column d-p24 d-bgc-green-100 d-w100p d-hmn102",custom:""},{default:e(()=>[b]),_:1}),n(),w,n(),l(d,null,{content:e(()=>[s("tbody",null,[x,n(),A,n(),(a(!0),t(g,null,h(m(k),p=>(a(),t("tr",null,[s("th",C,".d-lst-"+i(p),1),n(),s("td",N,[p==="content"?(a(),t("span",V,"list-style-type: var(--ls-content) !important;")):(a(),t("span",B,"list-style-type: "+i(p)+" !important;",1))])]))),256))])]),_:1})])}}},D=r(j,[["__file","lists.html.vue"]]);export{D as default};
