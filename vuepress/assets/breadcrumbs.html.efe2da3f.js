import{_ as d,r as a,a as i,d as s,w as c,F as o,c as b,b as e,e as r,o as m}from"./app.935ad005.js";const u={},h=b('<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2><p>Breadcrumbs show users where they are within a site\u2019s hierarchy. Breadcrumbs help orient the user and allow for navigation to previous page levels. It can be appropriate to use a breadcrumb when:</p><ul><li>The user is many levels of navigation deep</li><li>The current page does not have its own navigation</li><li>The user needs to quickly go back to the previous parent page</li></ul><p>Breadcrumbs should be the first page element\u2014placed directly above the page\u2019s title. All pages that appear in the breadcrumb should link to their respective page. The page the user is on should always be the last page listed and not linked.</p><h3 id="when-not-to-use" tabindex="-1"><a class="header-anchor" href="#when-not-to-use" aria-hidden="true">#</a> When not to use</h3><p>Breadcrumbs are always treated as secondary and should not entirely replace the primary navigation. They shouldn\u2019t be used for products that have single level navigation because they create unnecessary clutter.</p><h2 id="classes" tabindex="-1"><a class="header-anchor" href="#classes" aria-hidden="true">#</a> Classes</h2>',7),_=e("h2",{id:"examples",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#examples","aria-hidden":"true"},"#"),r(" Examples")],-1),p=e("nav",{class:"d-breadcrumbs","aria-label":"breadcrumb"},[e("ol",null,[e("li",{class:"d-breadcrumbs__item"},[e("a",{href:"#",class:"d-link d-link--muted"},"Root")]),e("li",{class:"d-breadcrumbs__item"},[e("a",{href:"#",class:"d-link d-link--muted"},"Section")]),e("li",{class:"d-breadcrumbs__item"},[e("a",{href:"#",class:"d-link d-link--muted"},"Section")]),e("li",{class:"d-breadcrumbs__item"},[e("a",{href:"#",class:"d-link d-link--muted"},"Section")]),e("li",{class:"d-breadcrumbs__item d-breadcrumbs__item--selected"},[e("a",{href:"#",class:"d-link d-link--muted","aria-current":"location"},"Current Page")])])],-1),k=e("nav",{class:"d-breadcrumbs d-breadcrumbs--inverted d-bgc-black-700 d-border-radius--md d-py16 d-px12 d-mxn12","aria-label":"breadcrumb"},[e("ol",null,[e("li",{class:"d-breadcrumbs__item"},[e("a",{href:"#",class:"d-link d-link--inverted"},"Root")]),e("li",{class:"d-breadcrumbs__item"},[e("a",{href:"#",class:"d-link d-link--inverted"},"Section")]),e("li",{class:"d-breadcrumbs__item"},[e("a",{href:"#",class:"d-link d-link--inverted"},"Section")]),e("li",{class:"d-breadcrumbs__item"},[e("a",{href:"#",class:"d-link d-link--inverted"},"Section")]),e("li",{class:"d-breadcrumbs__item d-breadcrumbs__item--selected"},[e("a",{href:"#",class:"d-link d-link--inverted","aria-current":"location"},"Current Page")])])],-1),v=e("div",{class:"language-html ext-html"},[e("pre",{class:"language-html"},[e("code",null,`<nav class="d-breadcrumbs" aria-label="breadcrumb">
  <ol>
    <li class="d-breadcrumbs__item">
      <a href="#" class="d-link d-link--muted">Root</a>
    </li>
    <li class="d-breadcrumbs__item">
      <a href="#" class="d-link d-link--muted">Section</a>
    </li>
    <li class="d-breadcrumbs__item">
      <a href="#" class="d-link d-link--muted">Section</a>
    </li>
    <li class="d-breadcrumbs__item">
      <a href="#" class="d-link d-link--muted">Section</a>
    </li>
    <li class="d-breadcrumbs__item d-breadcrumbs__item--selected">
      <a href="#" class="d-link d-link--muted" aria-current="location">Current Page</a>
    </li>
  </ol>
</nav>
<nav class="d-breadcrumbs d-breadcrumbs--inverted" aria-label="breadcrumb">
  <ol>
    <li class="d-breadcrumbs__item">
      <a href="#" class="d-link d-link--inverted">Root</a>
    </li>
      ...
  </ol>
</nav>
`)])],-1),f=e("h2",{id:"accessibility",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#accessibility","aria-hidden":"true"},"#"),r(" Accessibility")],-1),g=e("p",null,"HTML doesn't provide dedicated semantic elements for breadcrumbs, so we need to add a few ARIA attributes to make them accessible.",-1);function w(y,x){const l=a("component-class-table"),n=a("code-well-header"),t=a("component-accessible-table");return m(),i(o,null,[h,s(l,{"component-name":"breadcrumbs"}),_,s(n,null,{default:c(()=>[p,k]),_:1}),v,f,g,s(t,{"component-name":"breadcrumbs"})],64)}var B=d(u,[["render",w],["__file","breadcrumbs.html.vue"]]);export{B as default};
