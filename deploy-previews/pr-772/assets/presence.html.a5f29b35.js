import{E as t}from"./ExamplePresence.30d3d7fd.js";import{_ as d,r as o,o as i,c as u,e as s,w as c,a,b as n,d as l}from"./app.1a6f4305.js";const r=n("h2",{id:"usage",tabindex:"-1",class:"d-docsite--header-2 d-my24"},[a("Usage "),n("a",{class:"header-anchor d-link d-td-none d-docsite--link d-link",href:"#usage","aria-hidden":"true"},"#")],-1),k=n("h3",{id:"best-practices",tabindex:"-1",class:"d-docsite--header-3 d-my24"},[a("Best practices "),n("a",{class:"header-anchor d-link d-td-none d-docsite--link d-link",href:"#best-practices","aria-hidden":"true"},"#")],-1),h=l(`<ul class="d-docsite--unordered-list d-mb16"><li class="d-docsite--list-element d-my8">Presence should be used to visually indicate the current status of a user.</li> <li class="d-docsite--list-element d-my8">The following set of CSS classes can be set to set their status:
<ul class="d-docsite--unordered-list d-mb16"><li class="d-docsite--list-element d-my8"><code>d-presence__inner--active</code></li> <li class="d-docsite--list-element d-my8"><code>d-presence__inner--busy</code></li> <li class="d-docsite--list-element d-my8"><code>d-presence__inner--away</code></li> <li class="d-docsite--list-element d-my8"><code>d-presence__inner--offline</code></li></ul></li></ul>`,1),_=n("h2",{id:"variants-and-examples",tabindex:"-1",class:"d-docsite--header-2 d-my24"},[a("Variants and examples "),n("a",{class:"header-anchor d-link d-td-none d-docsite--link d-link",href:"#variants-and-examples","aria-hidden":"true"},"#")],-1),m=n("h3",{id:"active",tabindex:"-1",class:"d-docsite--header-3 d-my24"},[a("Active "),n("a",{class:"header-anchor d-link d-td-none d-docsite--link d-link",href:"#active","aria-hidden":"true"},"#")],-1),g=l(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-presence<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-presence__inner d-presence__inner--active<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="busy" tabindex="-1" class="d-docsite--header-3 d-my24">Busy <a class="header-anchor d-link d-td-none d-docsite--link d-link" href="#busy" aria-hidden="true">#</a></h3>`,2),v=l(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-presence<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-presence__inner d-presence__inner--busy<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="away" tabindex="-1" class="d-docsite--header-3 d-my24">Away <a class="header-anchor d-link d-td-none d-docsite--link d-link" href="#away" aria-hidden="true">#</a></h3>`,2),f=l(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-presence<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-presence__inner d-presence__inner--away<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="offline" tabindex="-1" class="d-docsite--header-3 d-my24">Offline <a class="header-anchor d-link d-td-none d-docsite--link d-link" href="#offline" aria-hidden="true">#</a></h3>`,2),y=l(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-presence<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-presence__inner d-presence__inner--offline<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="classes" tabindex="-1" class="d-docsite--header-2 d-my24">Classes <a class="header-anchor d-link d-td-none d-docsite--link d-link" href="#classes" aria-hidden="true">#</a></h2>`,2),b=n("h2",{id:"accessibility",tabindex:"-1",class:"d-docsite--header-2 d-my24"},[a("Accessibility "),n("a",{class:"header-anchor d-link d-td-none d-docsite--link d-link",href:"#accessibility","aria-hidden":"true"},"#")],-1),q=n("p",{class:"d-docsite--paragraph d-mb8 d-lh-400 d-wmx75ch"},"You may wish to announce any live changes to this component via the screen reader since this is only a visual indicator.",-1),x={__name:"presence.html",setup(w){return(B,V)=>{const e=o("code-well-header"),p=o("component-class-table");return i(),u("div",null,[s(e,null,{default:c(()=>[s(t,{presence:"active"})]),_:1}),a(),r,a(),k,a(),h,a(),_,a(),m,a(),s(e,null,{default:c(()=>[s(t,{presence:"active"})]),_:1}),a(),g,a(),s(e,null,{default:c(()=>[s(t,{presence:"busy"})]),_:1}),a(),v,a(),s(e,null,{default:c(()=>[s(t,{presence:"away"})]),_:1}),a(),f,a(),s(e,null,{default:c(()=>[s(t,{presence:"offline"})]),_:1}),a(),y,a(),s(p,{"component-name":"presence"}),b,a(),q])}}},A=d(x,[["__file","presence.html.vue"]]);export{A as default};
