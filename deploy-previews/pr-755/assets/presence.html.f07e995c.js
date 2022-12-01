import{E as e}from"./ExamplePresence.1684c14d.js";import{_ as d,r as o,o as i,c as u,e as s,w as c,a,b as n,d as p}from"./app.22279e87.js";const r=n("h2",{id:"usage",tabindex:"-1",class:"d-docsite--header d-pt72"},[a("Usage "),n("a",{class:"header-anchor d-link d-td-none",href:"#usage","aria-hidden":"true"},"#")],-1),h=n("h3",{id:"best-practices",tabindex:"-1",class:"d-docsite--subheader d-pt72 d-mt24"},[a("Best practices "),n("a",{class:"header-anchor d-link d-td-none",href:"#best-practices","aria-hidden":"true"},"#")],-1),k=p(`<ul class="d-docsite--unordered-list"><li class="d-docsite--list-element d-mt8">Presence should be used to visually indicate the current status of a user.</li> <li class="d-docsite--list-element d-mt8">The following set of CSS classes can be set to set their status:
<ul class="d-docsite--unordered-list"><li class="d-docsite--list-element d-mt8"><code>d-presence__inner--active</code></li> <li class="d-docsite--list-element d-mt8"><code>d-presence__inner--busy</code></li> <li class="d-docsite--list-element d-mt8"><code>d-presence__inner--away</code></li> <li class="d-docsite--list-element d-mt8"><code>d-presence__inner--offline</code></li></ul></li></ul>`,1),_=n("h2",{id:"variants-and-examples",tabindex:"-1",class:"d-docsite--header d-pt72"},[a("Variants and examples "),n("a",{class:"header-anchor d-link d-td-none",href:"#variants-and-examples","aria-hidden":"true"},"#")],-1),m=n("h3",{id:"active",tabindex:"-1",class:"d-docsite--subheader d-pt72 d-mt24"},[a("Active "),n("a",{class:"header-anchor d-link d-td-none",href:"#active","aria-hidden":"true"},"#")],-1),g=p(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-presence<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-presence__inner d-presence__inner--active<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="busy" tabindex="-1" class="d-docsite--subheader d-pt72 d-mt24">Busy <a class="header-anchor d-link d-td-none" href="#busy" aria-hidden="true">#</a></h3>`,2),v=p(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-presence<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-presence__inner d-presence__inner--busy<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="away" tabindex="-1" class="d-docsite--subheader d-pt72 d-mt24">Away <a class="header-anchor d-link d-td-none" href="#away" aria-hidden="true">#</a></h3>`,2),f=p(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-presence<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-presence__inner d-presence__inner--away<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="offline" tabindex="-1" class="d-docsite--subheader d-pt72 d-mt24">Offline <a class="header-anchor d-link d-td-none" href="#offline" aria-hidden="true">#</a></h3>`,2),b=p(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-presence<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-presence__inner d-presence__inner--offline<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="classes" tabindex="-1" class="d-docsite--header d-pt72">Classes <a class="header-anchor d-link d-td-none" href="#classes" aria-hidden="true">#</a></h2>`,2),q=n("h2",{id:"accessibility",tabindex:"-1",class:"d-docsite--header d-pt72"},[a("Accessibility "),n("a",{class:"header-anchor d-link d-td-none",href:"#accessibility","aria-hidden":"true"},"#")],-1),x=n("p",{class:"d-docsite--paragraph d-my16 d-lh-400"},"You may wish to announce any live changes to this component via the screen reader since this is only a visual indicator.",-1),y={__name:"presence.html",setup(w){return(B,V)=>{const t=o("code-well-header"),l=o("component-class-table");return i(),u("div",null,[s(t,null,{default:c(()=>[s(e,{presence:"active"})]),_:1}),a(),r,a(),h,a(),k,a(),_,a(),m,a(),s(t,null,{default:c(()=>[s(e,{presence:"active"})]),_:1}),a(),g,a(),s(t,null,{default:c(()=>[s(e,{presence:"busy"})]),_:1}),a(),v,a(),s(t,null,{default:c(()=>[s(e,{presence:"away"})]),_:1}),a(),f,a(),s(t,null,{default:c(()=>[s(e,{presence:"offline"})]),_:1}),a(),b,a(),s(l,{"component-name":"presence"}),q,a(),x])}}},A=d(y,[["__file","presence.html.vue"]]);export{A as default};
