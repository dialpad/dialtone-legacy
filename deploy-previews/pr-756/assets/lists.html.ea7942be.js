import{lists as u}from"./type.367445ea.js";import{_ as h,r as c,o as s,c as t,a as e,e as d,w as o,b as l,d as p,F as _,g as m,t as a,u as f}from"./app.c69bfef1.js";const g=l("h2",{id:"resetting-a-list",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#resetting-a-list","aria-hidden":"true"},"#"),e(" Resetting a list")],-1),y=p("<p>Use <code>d-ls-reset</code> to reset the margin, padding, and list-style-type of a list. Reseting a list applies to the parent <code>ol</code> or <code>ul</code>, any child <code>li</code> elements, and any child <code>ol</code> or <code>ul</code> elements.</p>",1),b=l("ul",{class:"d-ls-reset d-fc-purple-400 d-fs-200"},[l("li",null,"An unordered list item"),e(),l("li",null,[l("ol",null,[l("li",null,"An ordered list item"),e(),l("li",null,"An ordered list item")])]),e(),l("li",null,"An unordered list item")],-1),w=l("div",{class:"language-html","data-ext":"html"},[l("pre",{class:"language-html"},[l("code",null,`<ul class="d-ls-reset">
  <li>...</li>
  <li>
    <ol>
      <li>...</li>
      <li>...</li>
    </ol>
  </li>
  <li>...</li>
</ul>
`)])],-1),x=l("h2",{id:"changing-the-list-style-type",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#changing-the-list-style-type","aria-hidden":"true"},"#"),e(" Changing the list style type")],-1),A=l("p",null,[e("Use "),l("code",null,"d-ls-{disc|decimal}"),e(" to change an unordered list's bullet styling.")],-1),v=l("ul",{class:"d-lst-disc d-fs-200 d-fc-success"},[l("li",null,"An unordered list item"),e(),l("li",null,[l("ul",{class:"d-lst-circle"},[l("li",{class:"d-pl4"},"An unordered list item"),e(),l("li",{class:"d-pl4"},"An unordered list item")])]),e(),l("li",null,[l("ul",null,[l("li",{class:"d-pl4 d-lst-content",style:{"--ls-content":"'✅'"}},"An unordered list item"),e(),l("li",{class:"d-pl4 d-lst-content",style:{"--ls-content":"'❌'"}},"An unordered list item")])])],-1),k=l("div",{class:"language-html","data-ext":"html"},[l("pre",{class:"language-html"},[l("code",null,`<ul class="d-lst-disc">
  <li>...</li>
  <li>
    <ul class="d-lst-circle">
      <li>...</li>
      <li>...</li>
    </ul>
  </li>
  <li>
    <ul>
      <li class="d-lst-content" style="--ls-content: '✅'">...</li>
      <li class="d-lst-content" style="--ls-content: '❌'">...</li>
    </ul>
  </li>
</ul>
`)])],-1),C=l("h2",{id:"classes",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#classes","aria-hidden":"true"},"#"),e(" Classes")],-1),N=l("tr",null,[l("th",{scope:"row",class:"d-ff-mono d-fc-purple-400 d-fw-normal d-fs-100"},".d-ls-reset"),e(),l("td",{class:"d-ff-mono d-fs-100"},[e(`
          margin: 0;`),l("br"),e(`
          padding: 0;`),l("br"),e(`
          list-style: none !important;
        `)])],-1),V=l("tr",null,[l("th",{scope:"row",class:"d-ff-mono d-fc-purple-400 d-fw-normal d-fs-100"},".d-ls-none"),e(),l("td",{class:"d-ff-mono d-fs-100"},"list-style: none !important;")],-1),B={scope:"row",class:"d-ff-mono d-fc-purple-400 d-fw-normal d-fs-100"},j={class:"d-ff-mono d-fs-100"},F={key:0},R={key:1},S={__name:"lists.html",setup(U){return(D,E)=>{const i=c("code-well-header"),r=c("utility-class-table");return s(),t("div",null,[g,e(),y,e(),d(i,{class:"d-d-flex d-jc-center d-fd-column d-p24 d-bgc-purple-100 d-w100p d-hmn102",custom:""},{default:o(()=>[b]),_:1}),e(),w,x,e(),A,e(),d(i,{class:"d-d-flex d-jc-center d-fd-column d-p24 d-bgc-green-100 d-w100p d-hmn102",custom:""},{default:o(()=>[v]),_:1}),e(),k,C,e(),d(r,null,{content:o(()=>[l("tbody",null,[N,e(),V,e(),(s(!0),t(_,null,m(f(u),n=>(s(),t("tr",null,[l("th",B,".d-lst-"+a(n),1),e(),l("td",j,[n==="content"?(s(),t("span",F,"list-style-type: var(--ls-content) !important;")):(s(),t("span",R,"list-style-type: "+a(n)+" !important;",1))])]))),256))])]),_:1})])}}},q=h(S,[["__file","lists.html.vue"]]);export{q as default};
