import{lists as h}from"./type.15c689f9.js";import{_ as p,r as c,a as t,d,w as o,F as a,b as l,e,c as m,o as s,f as _,t as r,u as f}from"./app.935ad005.js";const g=l("h2",{id:"classes",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#classes","aria-hidden":"true"},"#"),e(" Classes")],-1),y=l("tr",null,[l("th",{scope:"row",class:"d-ff-mono d-fc-purple d-fw-normal d-fs12"},".d-ls-reset"),l("td",{class:"d-ff-mono d-fc-orange d-fs12"},[e(" margin: 0;"),l("br"),e(" padding: 0;"),l("br"),e(" list-style: none !important; ")])],-1),b=l("tr",null,[l("th",{scope:"row",class:"d-ff-mono d-fc-purple d-fw-normal d-fs12"},".d-ls-none"),l("td",{class:"d-ff-mono d-fc-orange d-fs12"},"list-style: none !important;")],-1),w={scope:"row",class:"d-ff-mono d-fc-purple d-fw-normal d-fs12"},x={class:"d-ff-mono d-fc-orange d-fs12"},A={key:0},v={key:1},k=m('<h2 id="resetting-a-list" tabindex="-1"><a class="header-anchor" href="#resetting-a-list" aria-hidden="true">#</a> Resetting a list</h2><p>Use <code>d-ls-reset</code> to reset the margin, padding, and list-style-type of a list. Reseting a list applies to the parent <code>ol</code> or <code>ul</code>, any child <code>li</code> elements, and any child <code>ol</code> or <code>ul</code> elements.</p>',2),C=l("ul",{class:"d-ls-reset d-fc-purple d-fs18"},[l("li",null,"An unordered list item"),l("li",null,[l("ol",null,[l("li",null,"An ordered list item"),l("li",null,"An ordered list item")])]),l("li",null,"An unordered list item")],-1),N=l("div",{class:"language-html ext-html"},[l("pre",{class:"language-html"},[l("code",null,`<ul class="d-ls-reset">
  <li>...</li>
  <li>
    <ol>
      <li>...</li>
      <li>...</li>
    </ol>
  </li>
  <li>...</li>
</ul>
`)])],-1),V=l("h2",{id:"changing-the-list-style-type",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#changing-the-list-style-type","aria-hidden":"true"},"#"),e(" Changing the list style type")],-1),B=l("p",null,[e("Use "),l("code",null,"d-ls-{disc|decimal}"),e(" to change an unordered list's bullet styling.")],-1),j=l("ul",{class:"d-lst-disc d-fs18 d-fc-green"},[l("li",null,"An unordered list item"),l("li",null,[l("ul",{class:"d-lst-circle"},[l("li",{class:"d-pl4"},"An unordered list item"),l("li",{class:"d-pl4"},"An unordered list item")])]),l("li",null,[l("ul",null,[l("li",{class:"d-pl4 d-lst-content",style:{"--ls-content":"'\u2705'"}},"An unordered list item"),l("li",{class:"d-pl4 d-lst-content",style:{"--ls-content":"'\u274C'"}},"An unordered list item")])])],-1),F=l("div",{class:"language-html ext-html"},[l("pre",{class:"language-html"},[l("code",null,`<ul class="d-lst-disc">
  <li>...</li>
  <li>
    <ul class="d-lst-circle">
      <li>...</li>
      <li>...</li>
    </ul>
  </li>
  <li>
    <ul>
      <li class="d-lst-content" style="--ls-content: '\u2705'">...</li>
      <li class="d-lst-content" style="--ls-content: '\u274C'">...</li>
    </ul>
  </li>
</ul>
`)])],-1),R={setup(S){return(U,D)=>{const u=c("utility-class-table"),i=c("code-well-header");return s(),t(a,null,[g,d(u,null,{content:o(()=>[l("tbody",null,[y,b,(s(!0),t(a,null,_(f(h),n=>(s(),t("tr",null,[l("th",w,".d-lst-"+r(n),1),l("td",x,[n==="content"?(s(),t("span",A,"list-style-type: var(--ls-content) !important;")):(s(),t("span",v,"list-style-type: "+r(n)+" !important;",1))])]))),256))])]),_:1}),k,d(i,{class:"d-d-flex d-jc-center d-fd-column d-p24 d-bgc-purple-100 d-w100p d-hmn102",custom:""},{default:o(()=>[C]),_:1}),N,V,B,d(i,{class:"d-d-flex d-jc-center d-fd-column d-p24 d-bgc-green-100 d-w100p d-hmn102",custom:""},{default:o(()=>[j]),_:1}),F],64)}}};var T=p(R,[["__file","lists.html.vue"]]);export{T as default};
