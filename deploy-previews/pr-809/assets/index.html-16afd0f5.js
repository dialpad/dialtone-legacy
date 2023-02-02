import{_ as h,s as _,v as r,x as u,G as s,B as l,C as e,y as t,F as p,z as f,D as b,E as d}from"./framework-9a6e9d64.js";const x={class:"d-table"},k=t("thead",null,[t("tr",null,[t("th",{scope:"col"},`
          Component
        `),e(),t("th",{scope:"col"},`
          CSS
        `),e(),t("th",{scope:"col"},`
          Vue
        `),e(),t("th",{scope:"col"},`
          Figma
        `)])],-1),C={scope:"row"},g=["href"],S={__name:"ComponentHealthStatusTable",props:{componentsStatus:{type:Array,default:()=>[]}},setup(m){const c={DONE:"check-circle",WIP:"tools",NIY:"box-select"},o={DONE:"d-fc-success",WIP:"d-fc-warning",NIY:"d-fc-error"};return(y,z)=>{const a=_("dt-icon"),i=_("dt-button");return r(),u(p,null,[s(i,{importance:"clear",kind:"muted"},{icon:l(()=>[s(a,{class:"d-fc-success",name:"check-circle",size:"300"})]),default:l(()=>[e(`
    Available
  `)]),_:1}),e(),s(i,{importance:"clear",kind:"muted"},{icon:l(()=>[s(a,{class:"d-fc-warning",name:"tools",size:"300"})]),default:l(()=>[e(`
    Work in progress
  `)]),_:1}),e(),s(i,{importance:"clear",kind:"muted"},{icon:l(()=>[s(a,{class:"d-fc-error",name:"box-select",size:"300"})]),default:l(()=>[e(`
    Not implemented yet
  `)]),_:1}),e(),t("table",x,[k,e(),t("tbody",null,[(r(!0),u(p,null,f(m.componentsStatus,n=>(r(),u("tr",{key:n.name},[t("th",C,[t("a",{class:"d-link",href:n.url},b(n.name),9,g)]),e(),t("td",null,[s(a,{class:d(o[n.css]),name:c[n.css]},null,8,["class","name"])]),e(),t("td",null,[s(a,{class:d(o[n.vue]),name:c[n.vue]},null,8,["class","name"])]),e(),t("td",null,[s(a,{class:d(o[n.figma]),name:c[n.figma]},null,8,["class","name"])])]))),128))])])],64)}}},v=h(S,[["__file","ComponentHealthStatusTable.vue"]]),N={__name:"index.html",setup(m){return(c,o)=>(r(),u("div",null,[s(v,{"components-status":c.$page.componentsStatus},null,8,["components-status"])]))}},w=h(N,[["__file","index.html.vue"]]);export{w as default};
