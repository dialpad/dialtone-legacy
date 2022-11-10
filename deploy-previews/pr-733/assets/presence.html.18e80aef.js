import{_ as i,o as r,c as d,b as a,n as h,q as g,r as u,d as s,w as c,a as n,e as o}from"./app.6cbc86fd.js";const v={name:"ExamplePresence",props:{presence:{type:String,default:""}}},m={key:0,class:"d-presence"};function f(_,k,e,t,l,A){return e.presence?(r(),d("div",m,[a("div",{class:h(["d-presence__inner",{"d-presence__inner--active":e.presence==="active","d-presence__inner--away":e.presence==="away","d-presence__inner--busy":e.presence==="busy","d-presence__inner--offline":e.presence==="offline"}])},null,2)])):g("",!0)}var p=i(v,[["render",f],["__file","ExamplePresence.vue"]]);const q=a("h2",{id:"usage",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#usage","aria-hidden":"true"},"#"),n(" Usage")],-1),y=a("h3",null,"Best practices",-1),x=o(`<ul><li>Presence should be used to visually indicate the current status of a user.</li> <li>The following set of CSS classes can be set to set their status:
<ul><li><code>d-presence__inner--active</code></li> <li><code>d-presence__inner--busy</code></li> <li><code>d-presence__inner--away</code></li> <li><code>d-presence__inner--offline</code></li></ul></li></ul>`,1),b=a("h2",{id:"variants-and-examples",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#variants-and-examples","aria-hidden":"true"},"#"),n(" Variants and examples")],-1),w=a("h3",null,"Active",-1),C=o(`<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-presence<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-presence__inner d-presence__inner--active<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3>Busy</h3>`,2),V=o(`<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-presence<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-presence__inner d-presence__inner--busy<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3>Away</h3>`,2),B=o(`<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-presence<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-presence__inner d-presence__inner--away<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3>Offline</h3>`,2),N=o(`<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-presence<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-presence__inner d-presence__inner--offline<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="classes" tabindex="-1"><a class="header-anchor" href="#classes" aria-hidden="true">#</a> Classes</h2>`,2),E=a("h2",{id:"accessibility",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#accessibility","aria-hidden":"true"},"#"),n(" Accessibility")],-1),P=a("p",null,"You may wish to announce any live changes to this component via the screen reader since this is only a visual indicator.",-1),S={__name:"presence.html",setup(_){return(k,e)=>{const t=u("code-well-header"),l=u("component-class-table");return r(),d("div",null,[s(t,null,{default:c(()=>[s(p,{presence:"active"})]),_:1}),n(),q,n(),y,n(),x,n(),b,n(),w,n(),s(t,null,{default:c(()=>[s(p,{presence:"active"})]),_:1}),n(),C,n(),s(t,null,{default:c(()=>[s(p,{presence:"busy"})]),_:1}),n(),V,n(),s(t,null,{default:c(()=>[s(p,{presence:"away"})]),_:1}),n(),B,n(),s(t,null,{default:c(()=>[s(p,{presence:"offline"})]),_:1}),n(),N,n(),s(l,{"component-name":"presence"}),n(),E,n(),P])}}};var z=i(S,[["__file","presence.html.vue"]]);export{z as default};
