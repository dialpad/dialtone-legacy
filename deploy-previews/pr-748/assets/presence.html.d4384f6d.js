import{E as l}from"./ExamplePresence.96fd12ef.js";import{_ as d,r as c,o,c as r,e as n,w as t,a as s,b as e,d as _}from"./app.5e51e3f0.js";const h=e("h2",{id:"usage",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#usage","aria-hidden":"true"},"#"),s(" Usage")],-1),u=e("h3",null,"Best practices",-1),p=_(`<ul><li>Presence should be used to visually indicate the current status of a user.</li> <li>The following set of CSS classes can be set to set their status:
<ul><li><code>d-presence__inner--active</code></li> <li><code>d-presence__inner--busy</code></li> <li><code>d-presence__inner--away</code></li> <li><code>d-presence__inner--offline</code></li></ul></li></ul>`,1),m=e("h2",{id:"variants-and-examples",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#variants-and-examples","aria-hidden":"true"},"#"),s(" Variants and examples")],-1),v=e("h3",null,"Active",-1),f=e("div",{class:"language-html","data-ext":"html"},[e("pre",{class:"language-html"},[e("code",null,`<div class="d-presence">
  <div
    class="d-presence__inner d-presence__inner--active"
  />
</div>
`)])],-1),g=e("h3",null,"Busy",-1),x=e("div",{class:"language-html","data-ext":"html"},[e("pre",{class:"language-html"},[e("code",null,`<div class="d-presence">
  <div class="d-presence__inner d-presence__inner--busy" />
</div>
`)])],-1),b=e("h3",null,"Away",-1),y=e("div",{class:"language-html","data-ext":"html"},[e("pre",{class:"language-html"},[e("code",null,`<div class="d-presence">
  <div class="d-presence__inner d-presence__inner--away" />
</div>
`)])],-1),w=e("h3",null,"Offline",-1),B=e("div",{class:"language-html","data-ext":"html"},[e("pre",{class:"language-html"},[e("code",null,`<div class="d-presence">
  <div class="d-presence__inner d-presence__inner--offline" />
</div>
`)])],-1),V=e("h2",{id:"classes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#classes","aria-hidden":"true"},"#"),s(" Classes")],-1),C=e("h2",{id:"accessibility",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#accessibility","aria-hidden":"true"},"#"),s(" Accessibility")],-1),N=e("p",null,"You may wish to announce any live changes to this component via the screen reader since this is only a visual indicator.",-1),A={__name:"presence.html",setup(E){return(S,k)=>{const a=c("code-well-header"),i=c("component-class-table");return o(),r("div",null,[n(a,null,{default:t(()=>[n(l,{presence:"active"})]),_:1}),s(),h,s(),u,s(),p,s(),m,s(),v,s(),n(a,null,{default:t(()=>[n(l,{presence:"active"})]),_:1}),s(),f,g,s(),n(a,null,{default:t(()=>[n(l,{presence:"busy"})]),_:1}),s(),x,b,s(),n(a,null,{default:t(()=>[n(l,{presence:"away"})]),_:1}),s(),y,w,s(),n(a,null,{default:t(()=>[n(l,{presence:"offline"})]),_:1}),s(),B,V,s(),n(i,{"component-name":"presence"}),C,s(),N])}}},O=d(A,[["__file","presence.html.vue"]]);export{O as default};
