import{examples as h}from"./table.5a0ea7ba.js";import{_ as b,r as _,a as s,d as a,w as i,F as c,b as t,e as l,o,f as r,t as n,u as p}from"./app.935ad005.js";const f=t("h2",{id:"classes",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#classes","aria-hidden":"true"},"#"),l(" Classes")],-1),y=t("h2",{id:"examples",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#examples","aria-hidden":"true"},"#"),l(" Examples")],-1),m=t("h3",{id:"base-style",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#base-style","aria-hidden":"true"},"#"),l(" Base Style")],-1),g={class:"d-table d-d-unset"},w=t("caption",{class:"d-table__caption"},"Office List",-1),x=t("thead",null,[t("tr",null,[t("th",{scope:"col"},"Office"),t("th",{scope:"col"},"Country"),t("th",{scope:"col",width:"10%"},"Employees"),t("th",{scope:"col"},"Contact")])],-1),v={scope:"row"},C=t("div",{class:"language-html ext-html"},[t("pre",{class:"language-html"},[t("code",null,`<table class="d-table">
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
`)])],-1),O=t("h3",{id:"inverted-style",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#inverted-style","aria-hidden":"true"},"#"),l(" Inverted Style")],-1),k=t("p",null,"Used when you want to display a data table on a darker background.",-1),E={class:"d-table d-d-unset d-table--inverted"},L=t("caption",{class:"d-table__caption"},"Office List",-1),z=t("thead",null,[t("tr",null,[t("th",{scope:"col"},"Office"),t("th",{scope:"col"},"Country"),t("th",{scope:"col",width:"10%"},"Employees"),t("th",{scope:"col"},"Contact")])],-1),B={scope:"row"},S=t("div",{class:"language-html ext-html"},[t("pre",{class:"language-html"},[t("code",null,`<table class="d-table d-table--inverted">
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
`)])],-1),N=t("h3",{id:"striped",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#striped","aria-hidden":"true"},"#"),l(" Striped")],-1),V={class:"d-table d-d-unset d-table--striped"},A=t("caption",{class:"d-table__caption"},"Office List",-1),F=t("thead",null,[t("tr",null,[t("th",{scope:"col"},"Office"),t("th",{scope:"col"},"Country"),t("th",{scope:"col",width:"10%"},"Employees"),t("th",{scope:"col"},"Contact")])],-1),U={scope:"row"},D=t("div",{class:"language-html ext-html"},[t("pre",{class:"language-html"},[t("code",null,`<table class="d-table d-table--striped">
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
`)])],-1),I={class:"d-table d-d-unset d-table--inverted d-table--striped"},T=t("caption",{class:"d-table__caption"},"Office List",-1),W=t("thead",null,[t("tr",null,[t("th",{scope:"col"},"Office"),t("th",{scope:"col"},"Country"),t("th",{scope:"col",width:"10%"},"Employees"),t("th",{scope:"col"},"Contact")])],-1),j={scope:"row"},q=t("div",{class:"language-html ext-html"},[t("pre",{class:"language-html"},[t("code",null,`<table class="d-table d-table--inverted d-table--striped">
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
`)])],-1),G=t("h2",{id:"accessibility",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#accessibility","aria-hidden":"true"},"#"),l(" Accessibility")],-1),H=t("p",null,[l("Use the "),t("code",null,"caption"),l(" element to describe a table in the same way you would use a heading. A caption helps users find, navigate and understand tables.")],-1),J=t("p",null,[l("We provide "),t("code",null,".d-table__caption"),l(" for a basic caption style, but you can also use utility classes to apply custom styles as needed.")],-1),K={setup(M){return(P,Q)=>{const u=_("component-class-table"),d=_("code-well-header");return o(),s(c,null,[f,a(u,{"component-name":"table"}),y,m,a(d,{bgclass:"d-bgc-white"},{default:i(()=>[t("table",g,[w,x,t("tbody",null,[(o(!0),s(c,null,r(p(h),e=>(o(),s("tr",null,[t("th",v,n(e.office),1),t("td",null,n(e.country),1),t("td",null,n(e.size),1),t("td",null,n(e.contact),1)]))),256))])])]),_:1}),C,O,k,a(d,{bgclass:"d-bgc-black-800"},{default:i(()=>[t("table",E,[L,z,t("tbody",null,[(o(!0),s(c,null,r(p(h),e=>(o(),s("tr",null,[t("th",B,n(e.office),1),t("td",null,n(e.country),1),t("td",null,n(e.size),1),t("td",null,n(e.contact),1)]))),256))])])]),_:1}),S,N,a(d,{bgclass:"d-bgc-white"},{default:i(()=>[t("table",V,[A,F,t("tbody",null,[(o(!0),s(c,null,r(p(h),e=>(o(),s("tr",null,[t("th",U,n(e.office),1),t("td",null,n(e.country),1),t("td",null,n(e.size),1),t("td",null,n(e.contact),1)]))),256))])])]),_:1}),D,a(d,{bgclass:"d-bgc-black-800"},{default:i(()=>[t("table",I,[T,W,t("tbody",null,[(o(!0),s(c,null,r(p(h),e=>(o(),s("tr",null,[t("th",j,n(e.office),1),t("td",null,n(e.country),1),t("td",null,n(e.size),1),t("td",null,n(e.contact),1)]))),256))])])]),_:1}),q,G,H,J],64)}}};var Y=b(K,[["__file","table.html.vue"]]);export{Y as default};
