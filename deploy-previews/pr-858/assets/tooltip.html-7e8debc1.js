import{_ as g,s as n,v as c,x as l,G as a,B as i,C as s,y as t,F as b,z as v,K as r,E as f,D as d}from"./framework-8a6d41ce.js";const w={data(){return{directions:["top-left","top-center","top-right","right-top","right-center","right-bottom","bottom-left","bottom-center","bottom-right","left-top","left-center","left-bottom"]}},methods:{capitalizeDirection(p){return p.split("-").join(" ")}}},x=t("button",{class:"d-btn d-btn--outlined d-tooltip--hover",type:"button"},[t("div",{class:"d-tooltip d-tooltip__arrow--bottom-center d-ps-absolute"},[t("span",null,"Simple tooltip")]),s(),t("span",null,"Hover over me to see a tooltip")],-1),y=t("h2",{id:"variants-and-examples",tabindex:"-1",class:"d-docsite--header-2"},[s("Variants and examples "),t("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#variants-and-examples","aria-hidden":"true"},"#")],-1),q=t("h3",{id:"base-styles",tabindex:"-1",class:"d-docsite--header-3"},[s("Base Styles "),t("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#base-styles","aria-hidden":"true"},"#")],-1),T=t("div",{class:"d-tooltip d-tooltip__arrow--bottom-center d-tooltip--show"},[t("span",null,"Tooltip")],-1),V=r(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-tooltip d-tooltip__arrow--bottom-center d-tooltip--show<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>Tooltip<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,1),z=t("div",{class:"d-tooltip d-tooltip__arrow--bottom-center d-tooltip--inverted d-tooltip--show"},[t("span",null,"Tooltip")],-1),B=r(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-tooltip d-tooltip__arrow--bottom-center d-tooltip--inverted d-tooltip--show<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>Tooltip<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="arrow-directions" tabindex="-1" class="d-docsite--header-3">Arrow Directions <a class="header-anchor d-link d-docsite--link d-link" href="#arrow-directions" aria-hidden="true">#</a></h3>`,2),C=t("p",{class:"d-docsite--paragraph"},"No arrow direction is assigned by default. You must select a direction. Twelve directions are offered: three on each face of the tooltip.",-1),D={class:"d-d-grid d-gg16 d-g-cols3 sm:d-g-cols1 md:d-g-cols2"},N={class:"d-p32 d-bgc-secondary d-bar8"},S={class:"d-tt-capitalize d-mb4"},A={class:"d-code-small d-fc-black-400"},E=t("h2",{id:"vue-api",tabindex:"-1",class:"d-docsite--header-2"},[s("Vue API "),t("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#vue-api","aria-hidden":"true"},"#")],-1),F=t("h2",{id:"classes",tabindex:"-1",class:"d-docsite--header-2"},[s("Classes "),t("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#classes","aria-hidden":"true"},"#")],-1),$=t("h2",{id:"accessibility",tabindex:"-1",class:"d-docsite--header-2"},[s("Accessibility "),t("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#accessibility","aria-hidden":"true"},"#")],-1);function j(p,G,H,I,u,h){const o=n("code-well-header"),_=n("component-vue-api"),k=n("component-class-table"),m=n("component-accessible-table");return c(),l("div",null,[a(o,{class:"d-hmn164"},{default:i(()=>[x]),_:1}),s(),y,s(),q,s(),a(o,{class:"d-hmn164"},{default:i(()=>[T]),_:1}),s(),V,a(o,{bgclass:"d-bgc-contrast",class:"d-hmn164"},{default:i(()=>[z]),_:1}),s(),B,s(),C,s(),t("div",D,[(c(!0),l(b,null,v(u.directions,e=>(c(),l("div",N,[t("div",{class:f(["d-tooltip d-tooltip--show","d-tooltip__arrow--"+e])},[t("div",S,d(h.capitalizeDirection(e)),1),s(),t("div",A,".d-tooltip__arrow--"+d(e),1)],2)]))),256))]),s(),E,s(),a(_,{"component-name":"tooltip"}),F,s(),a(k,{"component-name":"tooltip"}),$,s(),a(m,{"component-name":"tooltip"})])}const L=g(w,[["render",j],["__file","tooltip.html.vue"]]);export{L as default};
