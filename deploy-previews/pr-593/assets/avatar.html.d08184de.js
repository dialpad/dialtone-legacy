import d from"./IconGroup.c0d5c9ef.js";import{colors as v}from"./avatar.3e3546b6.js";import{_ as k,r as l,o as p,c as o,b as s,w as t,F as i,a,e as c,d as e,f as h,n as g,u as m}from"./app.6adf8d07.js";var _="/deploy-previews/pr-593/assets/images/person.png";const f=a("h2",{id:"classes",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#classes","aria-hidden":"true"},"#"),c(" Classes")],-1),b=a("h2",{id:"examples",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#examples","aria-hidden":"true"},"#"),c(" Examples")],-1),x=a("h3",{id:"icons",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#icons","aria-hidden":"true"},"#"),c(" Icons")],-1),q={class:"d-avatar d-avatar--md d-avatar--icon d-avatar--purple-600"},w=e(`<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-avatar d-avatar--icon d-avatar--purple-600<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="images" tabindex="-1"><a class="header-anchor" href="#images" aria-hidden="true">#</a> Images</h3>`,2),y=a("div",{class:"d-avatar d-avatar--md d-avatar--icon d-avatar--purple-600"},[a("img",{src:_,alt:""})],-1),P=e(`<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-avatar d-avatar--{$size}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/path/to/image<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="initials" tabindex="-1"><a class="header-anchor" href="#initials" aria-hidden="true">#</a> Initials</h3>`,2),D={class:"d-w100p d-fl-col4 d-flg4 d-fw-wrap d-jc-space-between"},I={class:"d-d-fl d-fl-center d-mb8"},z=e(`<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-avatar d-avatar--initials d-avatar--{$color} ...<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>DP<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="sizes" tabindex="-1"><a class="header-anchor" href="#sizes" aria-hidden="true">#</a> Sizes</h3>`,2),A=a("div",{class:"d-d-inline-flex d-ai-center d-flow8"},[a("div",{class:"d-avatar d-avatar--sm d-avatar--purple-600 d-avatar--initials d-mb8"},"DP"),a("div",{class:"d-avatar d-avatar--md d-avatar--purple-600 d-avatar--initials d-mb8"},"DP"),a("div",{class:"d-avatar d-avatar--lg d-avatar--purple-600 d-avatar--initials d-mb8"},"DP")],-1),C=e(`<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-avatar d-avatar--sm ...<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>DP<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-avatar d-avatar--md ...<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>DP<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-avatar d-avatar--lg ...<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>DP<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="accessibility" tabindex="-1"><a class="header-anchor" href="#accessibility" aria-hidden="true">#</a> Accessibility</h2><p>Initial avatars&#39; background and font color combinations have been paired to ensure minimum contrast is met.</p><p>When it comes to voiceover, avatars accompanying a label should generally be considered decorative and shouldn&#39;t be focusable or read out. An example is a user&#39;s avatar next to their name.</p><p>Avatars unaccompanied by labels, especially those representing functionality or navigation, should be focusable and readout in voiceover. Please refer to <a class="d-link" href="https://www.w3.org/WAI/tutorials/images/decorative/" target="_blank">WCAG</a> references for your specific usage.</p>`,5),N={setup(V){return(B,W)=>{const r=l("component-class-table"),n=l("code-well-header");return p(),o(i,null,[f,s(r,{"component-name":"avatar"}),b,x,s(n,null,{default:t(()=>[a("div",q,[s(d)])]),_:1}),w,s(n,null,{default:t(()=>[y]),_:1}),P,s(n,null,{default:t(()=>[a("div",D,[(p(!0),o(i,null,h(m(v),u=>(p(),o("div",I,[a("div",{class:g(["d-avatar d-avatar--md d-avatar--initials",u])},"DP",2)]))),256))])]),_:1}),z,s(n,null,{default:t(()=>[A]),_:1}),C],64)}}};var S=k(N,[["__file","avatar.html.vue"]]);export{S as default};
