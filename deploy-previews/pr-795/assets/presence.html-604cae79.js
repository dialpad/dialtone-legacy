import{E as t}from"./ExamplePresence-434c58f3.js";import{_ as i,s as p,v as d,x as u,G as a,B as c,C as s,y as n,M as l}from"./framework-c9271261.js";const r=n("h2",{id:"usage",tabindex:"-1",class:"d-docsite--header-2"},[s("Usage "),n("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#usage","aria-hidden":"true"},"#")],-1),k=n("h3",{id:"best-practices",tabindex:"-1",class:"d-docsite--header-3"},[s("Best practices "),n("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#best-practices","aria-hidden":"true"},"#")],-1),h=l(`<ul class="d-docsite--unordered-list"><li class="d-docsite--list-element">Presence should be used to visually indicate the current status of a user.</li> <li class="d-docsite--list-element">The following set of CSS classes can be set to set their status:
<ul class="d-docsite--unordered-list"><li class="d-docsite--list-element"><code>d-presence__inner--active</code></li> <li class="d-docsite--list-element"><code>d-presence__inner--busy</code></li> <li class="d-docsite--list-element"><code>d-presence__inner--away</code></li> <li class="d-docsite--list-element"><code>d-presence__inner--offline</code></li></ul></li></ul>`,1),_=n("h2",{id:"variants-and-examples",tabindex:"-1",class:"d-docsite--header-2"},[s("Variants and examples "),n("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#variants-and-examples","aria-hidden":"true"},"#")],-1),g=n("h3",{id:"active",tabindex:"-1",class:"d-docsite--header-3"},[s("Active "),n("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#active","aria-hidden":"true"},"#")],-1),m=l(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-presence<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-presence__inner d-presence__inner--active<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="busy" tabindex="-1" class="d-docsite--header-3">Busy <a class="header-anchor d-link d-docsite--link d-link" href="#busy" aria-hidden="true">#</a></h3>`,2),v=l(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-presence<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-presence__inner d-presence__inner--busy<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="away" tabindex="-1" class="d-docsite--header-3">Away <a class="header-anchor d-link d-docsite--link d-link" href="#away" aria-hidden="true">#</a></h3>`,2),f=l(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-presence<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-presence__inner d-presence__inner--away<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="offline" tabindex="-1" class="d-docsite--header-3">Offline <a class="header-anchor d-link d-docsite--link d-link" href="#offline" aria-hidden="true">#</a></h3>`,2),q=l(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-presence<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-presence__inner d-presence__inner--offline<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="classes" tabindex="-1" class="d-docsite--header-2">Classes <a class="header-anchor d-link d-docsite--link d-link" href="#classes" aria-hidden="true">#</a></h2>`,2),b=n("h2",{id:"accessibility",tabindex:"-1",class:"d-docsite--header-2"},[s("Accessibility "),n("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#accessibility","aria-hidden":"true"},"#")],-1),x=n("p",{class:"d-docsite--paragraph"},"You may wish to announce any live changes to this component via the screen reader since this is only a visual indicator.",-1),y={__name:"presence.html",setup(w){return(B,C)=>{const e=p("code-well-header"),o=p("component-class-table");return d(),u("div",null,[a(e,null,{default:c(()=>[a(t,{presence:"active"})]),_:1}),s(),r,s(),k,s(),h,s(),_,s(),g,s(),a(e,null,{default:c(()=>[a(t,{presence:"active"})]),_:1}),s(),m,s(),a(e,null,{default:c(()=>[a(t,{presence:"busy"})]),_:1}),s(),v,s(),a(e,null,{default:c(()=>[a(t,{presence:"away"})]),_:1}),s(),f,s(),a(e,null,{default:c(()=>[a(t,{presence:"offline"})]),_:1}),s(),q,s(),a(o,{"component-name":"presence"}),b,s(),x])}}},A=i(y,[["__file","presence.html.vue"]]);export{A as default};
