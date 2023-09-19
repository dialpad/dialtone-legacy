import{_ as u,v as r,x as k,y as n,E as g,s as l,G as s,B as c,C as a,K as o}from"./framework-09315036.js";const m={name:"ExamplePresence",props:{presence:{type:String,required:!0}}},v={class:"dt-leftbar-row dt-leftbar-row__primary"},f={class:"d-presence"};function b(h,_,e,t,i,d){return r(),k("div",v,[n("div",f,[n("div",{class:g(["d-presence__inner",{"d-presence__inner--active":e.presence==="active","d-presence__inner--away":e.presence==="away","d-presence__inner--busy":e.presence==="busy","d-presence__inner--offline":e.presence==="offline"}])},null,2)])])}const p=u(m,[["render",b],["__file","ExamplePresence.vue"]]),y=n("h2",{id:"variants-and-examples",tabindex:"-1",class:"d-docsite--header-2"},[a("Variants and examples "),n("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#variants-and-examples","aria-hidden":"true"},"#")],-1),q=n("h3",{id:"active",tabindex:"-1",class:"d-docsite--header-3"},[a("Active "),n("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#active","aria-hidden":"true"},"#")],-1),x=o(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-presence<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-presence__inner d-presence__inner--active<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="busy" tabindex="-1" class="d-docsite--header-3">Busy <a class="header-anchor d-link d-docsite--link d-link" href="#busy" aria-hidden="true">#</a></h3>`,2),w=o(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-presence<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-presence__inner d-presence__inner--busy<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="away" tabindex="-1" class="d-docsite--header-3">Away <a class="header-anchor d-link d-docsite--link d-link" href="#away" aria-hidden="true">#</a></h3>`,2),V=o(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-presence<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-presence__inner d-presence__inner--away<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="offline" tabindex="-1" class="d-docsite--header-3">Offline <a class="header-anchor d-link d-docsite--link d-link" href="#offline" aria-hidden="true">#</a></h3>`,2),B=o(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-presence<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-presence__inner d-presence__inner--offline<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="vue-api" tabindex="-1" class="d-docsite--header-2">Vue API <a class="header-anchor d-link d-docsite--link d-link" href="#vue-api" aria-hidden="true">#</a></h2>`,2),C=n("h2",{id:"classes",tabindex:"-1",class:"d-docsite--header-2"},[a("Classes "),n("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#classes","aria-hidden":"true"},"#")],-1),E=n("h2",{id:"accessibility",tabindex:"-1",class:"d-docsite--header-2"},[a("Accessibility "),n("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#accessibility","aria-hidden":"true"},"#")],-1),A=n("p",{class:"d-docsite--paragraph"},"You may wish to announce any live changes to this component via the screen reader since this is only a visual indicator.",-1),N={__name:"presence.html",setup(h){return(_,e)=>{const t=l("code-well-header"),i=l("component-vue-api"),d=l("component-class-table");return r(),k("div",null,[s(t,{bgclass:"d-bgc-primary"},{default:c(()=>[s(p,{presence:"active"})]),_:1}),a(),y,a(),q,a(),s(t,{bgclass:"d-bgc-primary"},{default:c(()=>[s(p,{presence:"active"})]),_:1}),a(),x,a(),s(t,{bgclass:"d-bgc-primary"},{default:c(()=>[s(p,{presence:"busy"})]),_:1}),a(),w,a(),s(t,{bgclass:"d-bgc-primary"},{default:c(()=>[s(p,{presence:"away"})]),_:1}),a(),V,a(),s(t,{bgclass:"d-bgc-primary"},{default:c(()=>[s(p,{presence:"offline"})]),_:1}),a(),B,a(),s(i,{"component-name":"presence"}),C,a(),s(d,{"component-name":"presence"}),E,a(),A])}}},$=u(N,[["__file","presence.html.vue"]]);export{$ as default};
