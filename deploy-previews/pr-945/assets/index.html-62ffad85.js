import{_ as m,s as _,v as o,x as d,y as s,G as l,C as e,F as u,z as f,B as b,D as p,E as i}from"./framework-ee0084ea.js";const x={class:"d-d-flex d-flow16"},v={class:"d-d-flex d-flow4"},g=s("span",{class:"d-label d-label--sm"},"Ready",-1),C={class:"d-d-flex d-flow4"},S=s("span",{class:"d-label d-label--sm"},"In progress",-1),w={class:"d-d-flex d-flow4"},y=s("span",{class:"d-label d-label--sm"},"Planned",-1),k={class:"d-d-flex d-flow4"},$=s("span",{class:"d-label d-label--sm"},"N/A",-1),z={class:"d-table"},N=s("thead",null,[s("tr",null,[s("th",{scope:"col"},`
          Component
        `),e(),s("th",{scope:"col"},`
          CSS
        `),e(),s("th",{scope:"col"},`
          Vue
        `),e(),s("th",{scope:"col"},`
          Figma
        `)])],-1),A={scope:"row"},I=["aria-label"],V=["aria-label"],B=["aria-label"],F={__name:"ComponentHealthStatusTable",props:{componentsStatus:{type:Array,default:()=>[]}},setup(r){const n={Ready:"check-circle","In progress":"tools",Planned:"box-select","N/A":"box"},c={Ready:"d-fc-success","In progress":"d-fc-warning",Planned:"d-fc-error","N/A":"d-fc-muted"};return(H,P)=>{const t=_("dt-icon"),h=_("router-link");return o(),d(u,null,[s("div",x,[s("div",v,[l(t,{class:"d-fc-success",name:"check-circle",size:"300"}),e(),g]),e(),s("div",C,[l(t,{class:"d-fc-warning",name:"tools",size:"300"}),e(),S]),e(),s("div",w,[l(t,{class:"d-fc-error",name:"box-select",size:"300"}),e(),y]),e(),s("div",k,[l(t,{class:"d-fc-muted",name:"box",size:"300"}),e(),$])]),e(),s("table",z,[N,e(),s("tbody",null,[(o(!0),d(u,null,f(r.componentsStatus,a=>(o(),d("tr",{key:a.name},[s("th",A,[l(h,{class:"d-link",to:a.url},{default:b(()=>[e(p(a.name),1)]),_:2},1032,["to"])]),e(),s("td",{tabindex:"0","aria-label":`${a.name} CSS ${a.css}`},[l(t,{class:i(c[a.css]),name:n[a.css]},null,8,["class","name"])],8,I),e(),s("td",{tabindex:"0","aria-label":`${a.name} VUE ${a.vue}`},[l(t,{class:i(c[a.vue]),name:n[a.vue]},null,8,["class","name"])],8,V),e(),s("td",{tabindex:"0","aria-label":`${a.name} FIGMA ${a.figma}`},[l(t,{class:i(c[a.figma]),name:n[a.figma]},null,8,["class","name"])],8,B)]))),128))])])],64)}}},T=m(F,[["__file","ComponentHealthStatusTable.vue"]]),E={__name:"index.html",setup(r){return(n,c)=>(o(),d("div",null,[l(T,{"components-status":n.$page.componentsStatus},null,8,["components-status"])]))}},D=m(E,[["__file","index.html.vue"]]);export{D as default};
