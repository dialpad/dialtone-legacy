import{examples as d}from"./table.6d69b4f3.js";import{_ as b,r as p,o as n,c as s,e as c,w as h,a as e,b as t,F as i,g as r,t as o,u as _}from"./app.c69bfef1.js";const f={class:"d-table dialtone-doc-table"},y=t("caption",{class:"d-table__caption"},"Office List",-1),m=t("thead",null,[t("tr",null,[t("th",{scope:"col"},"Office"),e(),t("th",{scope:"col"},"Country"),e(),t("th",{scope:"col",width:"10%"},"Employees"),e(),t("th",{scope:"col"},"Contact")])],-1),g={scope:"row"},w=t("h2",{id:"variants-and-examples",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#variants-and-examples","aria-hidden":"true"},"#"),e(" Variants and examples")],-1),v=t("h3",null,"Base Style",-1),x={class:"d-table dialtone-doc-table"},C=t("caption",{class:"d-table__caption"},"Office List",-1),O=t("thead",null,[t("tr",null,[t("th",{scope:"col"},"Office"),e(),t("th",{scope:"col"},"Country"),e(),t("th",{scope:"col",width:"10%"},"Employees"),e(),t("th",{scope:"col"},"Contact")])],-1),k={scope:"row"},E=t("div",{class:"language-html","data-ext":"html"},[t("pre",{class:"language-html"},[t("code",null,`<table class="d-table">
  <caption class="d-table__caption">...</caption>
  <thead>
    <tr>
      <th scope="col">...</th>
      <th scope="col">...</th>
      <th scope="col">...</th>
      <th scope="col">...</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
  </tbody>
</table>
`)])],-1),L=t("h3",null,"Inverted Style",-1),z=t("p",null,"Used when you want to display a data table on a darker background.",-1),B={class:"d-table dialtone-doc-table d-table--inverted"},S=t("caption",{class:"d-table__caption"},"Office List",-1),V=t("thead",null,[t("tr",null,[t("th",{scope:"col"},"Office"),e(),t("th",{scope:"col"},"Country"),e(),t("th",{scope:"col",width:"10%"},"Employees"),e(),t("th",{scope:"col"},"Contact")])],-1),N={scope:"row"},A=t("div",{class:"language-html","data-ext":"html"},[t("pre",{class:"language-html"},[t("code",null,`<table class="d-table d-table--inverted">
  <caption class="d-table__caption">...</caption>
  <thead>
    <tr>
      <th scope="col">...</th>
      <th scope="col">...</th>
      <th scope="col">...</th>
      <th scope="col">...</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
  </tbody>
</table>
`)])],-1),F=t("h3",null,"Striped",-1),U={class:"d-table dialtone-doc-table d-table--striped"},D=t("caption",{class:"d-table__caption"},"Office List",-1),I=t("thead",null,[t("tr",null,[t("th",{scope:"col"},"Office"),e(),t("th",{scope:"col"},"Country"),e(),t("th",{scope:"col",width:"10%"},"Employees"),e(),t("th",{scope:"col"},"Contact")])],-1),T={scope:"row"},W=t("div",{class:"language-html","data-ext":"html"},[t("pre",{class:"language-html"},[t("code",null,`<table class="d-table d-table--striped">
  <caption class="d-table__caption">...</caption>
  <thead>
    <tr>
      <th scope="col">...</th>
      <th scope="col">...</th>
      <th scope="col">...</th>
      <th scope="col">...</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
  </tbody>
</table>
`)])],-1),j={class:"d-table dialtone-doc-table d-table--inverted d-table--striped"},q=t("caption",{class:"d-table__caption"},"Office List",-1),G=t("thead",null,[t("tr",null,[t("th",{scope:"col"},"Office"),e(),t("th",{scope:"col"},"Country"),e(),t("th",{scope:"col",width:"10%"},"Employees"),e(),t("th",{scope:"col"},"Contact")])],-1),H={scope:"row"},J=t("div",{class:"language-html","data-ext":"html"},[t("pre",{class:"language-html"},[t("code",null,`<table class="d-table d-table--inverted d-table--striped">
  <caption class="d-table__caption">...</caption>
  <thead>
    <tr>
      <th scope="col">...</th>
      <th scope="col">...</th>
      <th scope="col">...</th>
      <th scope="col">...</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
  </tbody>
</table>
`)])],-1),K=t("h2",{id:"classes",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#classes","aria-hidden":"true"},"#"),e(" Classes")],-1),M=t("h2",{id:"accessibility",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#accessibility","aria-hidden":"true"},"#"),e(" Accessibility")],-1),P=t("p",null,[e("Use the "),t("code",null,"caption"),e(" element to describe a table in the same way you would use a heading. A caption helps users find, navigate and understand tables.")],-1),Q=t("p",null,[e("We provide "),t("code",null,".d-table__caption"),e(" for a basic caption style, but you can also use utility classes to apply custom styles as needed.")],-1),R={__name:"table.html",setup(X){return(Y,Z)=>{const a=p("code-well-header"),u=p("component-class-table");return n(),s("div",null,[c(a,{bgclass:"d-bgc-white"},{default:h(()=>[t("table",f,[y,e(),m,e(),t("tbody",null,[(n(!0),s(i,null,r(_(d),l=>(n(),s("tr",null,[t("th",g,o(l.office),1),e(),t("td",null,o(l.country),1),e(),t("td",null,o(l.size),1),e(),t("td",null,o(l.contact),1)]))),256))])])]),_:1}),e(),w,e(),v,e(),c(a,{bgclass:"d-bgc-white"},{default:h(()=>[t("table",x,[C,e(),O,e(),t("tbody",null,[(n(!0),s(i,null,r(_(d),l=>(n(),s("tr",null,[t("th",k,o(l.office),1),e(),t("td",null,o(l.country),1),e(),t("td",null,o(l.size),1),e(),t("td",null,o(l.contact),1)]))),256))])])]),_:1}),e(),E,L,e(),z,e(),c(a,{bgclass:"d-bgc-black-800"},{default:h(()=>[t("table",B,[S,e(),V,e(),t("tbody",null,[(n(!0),s(i,null,r(_(d),l=>(n(),s("tr",null,[t("th",N,o(l.office),1),e(),t("td",null,o(l.country),1),e(),t("td",null,o(l.size),1),e(),t("td",null,o(l.contact),1)]))),256))])])]),_:1}),e(),A,F,e(),c(a,{bgclass:"d-bgc-white"},{default:h(()=>[t("table",U,[D,e(),I,e(),t("tbody",null,[(n(!0),s(i,null,r(_(d),l=>(n(),s("tr",null,[t("th",T,o(l.office),1),e(),t("td",null,o(l.country),1),e(),t("td",null,o(l.size),1),e(),t("td",null,o(l.contact),1)]))),256))])])]),_:1}),e(),W,c(a,{bgclass:"d-bgc-black-800"},{default:h(()=>[t("table",j,[q,e(),G,e(),t("tbody",null,[(n(!0),s(i,null,r(_(d),l=>(n(),s("tr",null,[t("th",H,o(l.office),1),e(),t("td",null,o(l.country),1),e(),t("td",null,o(l.size),1),e(),t("td",null,o(l.contact),1)]))),256))])])]),_:1}),e(),J,K,e(),c(u,{"component-name":"table"}),M,e(),P,e(),Q])}}},et=b(R,[["__file","table.html.vue"]]);export{et as default};
