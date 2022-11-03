import{_ as i,o as r,c as d,a as p,n as h,q as g,b as n,w as e,e as c,d as o,r as u}from"./app.cbf3bbe7.js";const v={name:"ExamplePresence",props:{presence:{type:String,default:""}}},m={key:0,class:"d-presence"};function f(k,_,a,s,l,P){return a.presence?(r(),d("div",m,[p("div",{class:h(["d-presence__inner",{"d-presence__inner--active":a.presence==="active","d-presence__inner--away":a.presence==="away","d-presence__inner--busy":a.presence==="busy","d-presence__inner--offline":a.presence==="offline"}])},null,2)])):g("",!0)}var t=i(v,[["render",f],["__file","ExamplePresence.vue"]]);const q=c(` <h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2> <h3>Best practices</h3> <ul><li>Presence should be used to visually indicate the current status of a user.</li> <li>The following set of CSS classes can be set to set their status:
<ul><li><code>d-presence__inner--active</code></li> <li><code>d-presence__inner--busy</code></li> <li><code>d-presence__inner--away</code></li> <li><code>d-presence__inner--offline</code></li></ul></li></ul> <h2 id="variants-and-examples" tabindex="-1"><a class="header-anchor" href="#variants-and-examples" aria-hidden="true">#</a> Variants and examples</h2> <h3>Active</h3> `,11),y=c(` <div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-presence<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-presence__inner d-presence__inner--active<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3>Busy</h3> `,4),x=c(` <div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-presence<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-presence__inner d-presence__inner--busy<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3>Away</h3> `,4),b=c(` <div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-presence<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-presence__inner d-presence__inner--away<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3>Offline</h3> `,4),w=c(` <div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-presence<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-presence__inner d-presence__inner--offline<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="classes" tabindex="-1"><a class="header-anchor" href="#classes" aria-hidden="true">#</a> Classes</h2> `,4),C=o(),V=p("h2",{id:"accessibility",tabindex:"-1"},[p("a",{class:"header-anchor",href:"#accessibility","aria-hidden":"true"},"#"),o(" Accessibility")],-1),B=o(),N=p("p",null,"You may wish to announce any live changes to this component via the screen reader since this is only a visual indicator.",-1),E={__name:"presence.html",setup(k){return(_,a)=>{const s=u("code-well-header"),l=u("component-class-table");return r(),d("div",null,[n(s,null,{default:e(()=>[n(t,{presence:"active"})]),_:1}),q,n(s,null,{default:e(()=>[n(t,{presence:"active"})]),_:1}),y,n(s,null,{default:e(()=>[n(t,{presence:"busy"})]),_:1}),x,n(s,null,{default:e(()=>[n(t,{presence:"away"})]),_:1}),b,n(s,null,{default:e(()=>[n(t,{presence:"offline"})]),_:1}),w,n(l,{"component-name":"presence"}),C,V,B,N])}}};var A=i(E,[["__file","presence.html.vue"]]);export{A as default};