import{_ as i,r as l,o as c,c as o,e as s,w as d,a,f as m,b as e}from"./app.5e51e3f0.js";const u={},b=e("nav",{class:"d-breadcrumbs","aria-label":"breadcrumb"},[e("ol",null,[e("li",{class:"d-breadcrumbs__item"},[e("a",{href:"#",class:"d-link d-link--muted"},"Root")]),a(),e("li",{class:"d-breadcrumbs__item"},[e("a",{href:"#",class:"d-link d-link--muted"},"Section")]),a(),e("li",{class:"d-breadcrumbs__item"},[e("a",{href:"#",class:"d-link d-link--muted"},"Section")]),a(),e("li",{class:"d-breadcrumbs__item"},[e("a",{href:"#",class:"d-link d-link--muted"},"Section")]),a(),e("li",{class:"d-breadcrumbs__item d-breadcrumbs__item--selected"},[e("a",{href:"#",class:"d-link d-link--muted","aria-current":"location"},"Current Page")])])],-1),_=e("h2",{id:"usage",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#usage","aria-hidden":"true"},"#"),a(" Usage")],-1),h=e("p",null,"Breadcrumbs show users where they are within a site’s hierarchy. Breadcrumbs help orient the user and allow for navigation to previous page levels. It can be appropriate to use a breadcrumb when:",-1),p=e("ul",null,[e("li",null,"The user is many levels of navigation deep"),a(),e("li",null,"The current page does not have its own navigation"),a(),e("li",null,"The user needs to quickly go back to the previous parent page")],-1),k=e("p",null,"Breadcrumbs should be the first page element—placed directly above the page’s title. All pages that appear in the breadcrumb should link to their respective page. The page the user is on should always be the last page listed and not linked.",-1),f=e("h3",null,"When not to use",-1),v=e("p",null,"Breadcrumbs are always treated as secondary and should not entirely replace the primary navigation. They shouldn’t be used for products that have single level navigation because they create unnecessary clutter.",-1),g=e("h2",{id:"variants-and-examples",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#variants-and-examples","aria-hidden":"true"},"#"),a(" Variants and examples")],-1),y=e("nav",{class:"d-breadcrumbs","aria-label":"breadcrumb"},[e("ol",null,[e("li",{class:"d-breadcrumbs__item"},[e("a",{href:"#",class:"d-link d-link--muted"},"Root")]),a(),e("li",{class:"d-breadcrumbs__item"},[e("a",{href:"#",class:"d-link d-link--muted"},"Section")]),a(),e("li",{class:"d-breadcrumbs__item"},[e("a",{href:"#",class:"d-link d-link--muted"},"Section")]),a(),e("li",{class:"d-breadcrumbs__item"},[e("a",{href:"#",class:"d-link d-link--muted"},"Section")]),a(),e("li",{class:"d-breadcrumbs__item d-breadcrumbs__item--selected"},[e("a",{href:"#",class:"d-link d-link--muted","aria-current":"location"},"Current Page")])])],-1),x=e("nav",{class:"d-breadcrumbs d-breadcrumbs--inverted d-bgc-black-700 d-border-radius--md d-py16 d-px12 d-mxn12","aria-label":"breadcrumb"},[e("ol",null,[e("li",{class:"d-breadcrumbs__item"},[e("a",{href:"#",class:"d-link d-link--inverted"},"Root")]),a(),e("li",{class:"d-breadcrumbs__item"},[e("a",{href:"#",class:"d-link d-link--inverted"},"Section")]),a(),e("li",{class:"d-breadcrumbs__item"},[e("a",{href:"#",class:"d-link d-link--inverted"},"Section")]),a(),e("li",{class:"d-breadcrumbs__item"},[e("a",{href:"#",class:"d-link d-link--inverted"},"Section")]),a(),e("li",{class:"d-breadcrumbs__item d-breadcrumbs__item--selected"},[e("a",{href:"#",class:"d-link d-link--inverted","aria-current":"location"},"Current Page")])])],-1),w=e("div",{class:"language-html","data-ext":"html"},[e("pre",{class:"language-html"},[e("code",null,`<nav class="d-breadcrumbs" aria-label="breadcrumb">
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
`)])],-1),S=e("h2",{id:"classes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#classes","aria-hidden":"true"},"#"),a(" Classes")],-1),B=e("h2",{id:"accessibility",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#accessibility","aria-hidden":"true"},"#"),a(" Accessibility")],-1),C=e("p",null,"HTML doesn't provide dedicated semantic elements for breadcrumbs, so we need to add a few ARIA attributes to make them accessible.",-1);function T(R,V){const n=l("code-well-header"),r=l("component-class-table"),t=l("component-accessible-table");return c(),o("div",null,[s(n,null,{default:d(()=>[b]),_:1}),a(),m(' <component-combinator component-name="DtBreadcrumbs" /> '),a(),_,a(),h,a(),p,a(),k,a(),f,a(),v,a(),g,a(),s(n,null,{default:d(()=>[y,a(),x]),_:1}),a(),w,S,a(),s(r,{"component-name":"breadcrumbs"}),B,a(),C,a(),s(t,{"component-name":"breadcrumbs"})])}const N=i(u,[["render",T],["__file","breadcrumbs.html.vue"]]);export{N as default};
