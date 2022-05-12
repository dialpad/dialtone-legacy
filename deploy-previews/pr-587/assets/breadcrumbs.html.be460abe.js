import{_ as c,r as s,o as l,c as u,b as n,w as i,F as r,d as t,a,e as k}from"./app.23b34828.js";const d={},m=t('<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2><p>Breadcrumbs show users where they are within a site\u2019s hierarchy. Breadcrumbs help orient the user and allow for navigation to previous page levels. It can be appropriate to use a breadcrumb when:</p><ul><li>The user is many levels of navigation deep</li><li>The current page does not have its own navigation</li><li>The user needs to quickly go back to the previous parent page</li></ul><p>Breadcrumbs should be the first page element\u2014placed directly above the page\u2019s title. All pages that appear in the breadcrumb should link to their respective page. The page the user is on should always be the last page listed and not linked.</p><h3 id="when-not-to-use" tabindex="-1"><a class="header-anchor" href="#when-not-to-use" aria-hidden="true">#</a> When not to use</h3><p>Breadcrumbs are always treated as secondary and should not entirely replace the primary navigation. They shouldn\u2019t be used for products that have single level navigation because they create unnecessary clutter.</p><h2 id="classes" tabindex="-1"><a class="header-anchor" href="#classes" aria-hidden="true">#</a> Classes</h2>',7),g=a("h2",{id:"examples",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#examples","aria-hidden":"true"},"#"),k(" Examples")],-1),b=a("nav",{class:"d-breadcrumbs","aria-label":"breadcrumb"},[a("ol",null,[a("li",{class:"d-breadcrumbs__item"},[a("a",{href:"#",class:"d-link d-link--muted"},"Root")]),a("li",{class:"d-breadcrumbs__item"},[a("a",{href:"#",class:"d-link d-link--muted"},"Section")]),a("li",{class:"d-breadcrumbs__item"},[a("a",{href:"#",class:"d-link d-link--muted"},"Section")]),a("li",{class:"d-breadcrumbs__item"},[a("a",{href:"#",class:"d-link d-link--muted"},"Section")]),a("li",{class:"d-breadcrumbs__item d-breadcrumbs__item--selected"},[a("a",{href:"#",class:"d-link d-link--muted","aria-current":"location"},"Current Page")])])],-1),h=a("nav",{class:"d-breadcrumbs d-breadcrumbs--inverted d-bgc-black-700 d-border-radius--md d-py16 d-px12 d-mxn12","aria-label":"breadcrumb"},[a("ol",null,[a("li",{class:"d-breadcrumbs__item"},[a("a",{href:"#",class:"d-link d-link--inverted"},"Root")]),a("li",{class:"d-breadcrumbs__item"},[a("a",{href:"#",class:"d-link d-link--inverted"},"Section")]),a("li",{class:"d-breadcrumbs__item"},[a("a",{href:"#",class:"d-link d-link--inverted"},"Section")]),a("li",{class:"d-breadcrumbs__item"},[a("a",{href:"#",class:"d-link d-link--inverted"},"Section")]),a("li",{class:"d-breadcrumbs__item d-breadcrumbs__item--selected"},[a("a",{href:"#",class:"d-link d-link--inverted","aria-current":"location"},"Current Page")])])],-1),_=t(`<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-breadcrumbs<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>breadcrumb<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-breadcrumbs__item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-link d-link--muted<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Root<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-breadcrumbs__item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-link d-link--muted<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Section<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-breadcrumbs__item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-link d-link--muted<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Section<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-breadcrumbs__item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-link d-link--muted<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Section<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-breadcrumbs__item d-breadcrumbs__item--selected<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-link d-link--muted<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-current</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>location<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Current Page<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nav</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-breadcrumbs d-breadcrumbs--inverted<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>breadcrumb<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-breadcrumbs__item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-link d-link--inverted<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Root<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
      ...
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nav</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="accessibility" tabindex="-1"><a class="header-anchor" href="#accessibility" aria-hidden="true">#</a> Accessibility</h2><p>HTML doesn&#39;t provide dedicated semantic elements for breadcrumbs, so we need to add a few ARIA attributes to make them accessible.</p>`,3);function q(v,f){const e=s("component-class-table"),p=s("code-well-header"),o=s("component-accessible-table");return l(),u(r,null,[m,n(e,{"component-name":"breadcrumbs"}),g,n(p,null,{default:i(()=>[b,h]),_:1}),_,n(o,{"component-name":"breadcrumbs"})],64)}var y=c(d,[["render",q],["__file","breadcrumbs.html.vue"]]);export{y as default};
