import{_ as m,r as p,o as l,c,b as a,w as n,F as r,a as t,e as o,d as i,f as b,t as d,n as v}from"./app.8049aa9f.js";const f={data(){return{directions:["top-left","top-center","top-right","right-top","right-center","right-bottom","bottom-left","bottom-center","bottom-right","left-top","left-center","left-bottom"]}},methods:{capitalizeDirection(u){return u.split("-").join(" ")}}},w=t("h2",{id:"classes",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#classes","aria-hidden":"true"},"#"),o(" Classes")],-1),x=t("h2",{id:"examples",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#examples","aria-hidden":"true"},"#"),o(" Examples")],-1),q=t("h3",{id:"base-styles",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#base-styles","aria-hidden":"true"},"#"),o(" Base Styles")],-1),T=t("button",{class:"d-btn d-btn--outlined d-tooltip--hover",type:"button"},[t("div",{class:"d-tooltip d-tooltip__arrow--bottom-center d-ps-absolute"},[t("span",null,"This is a simple tooltip. The tooltip can be positioned in multiple areas too!")]),t("span",null,"Hover over me to see a tooltip")],-1),y=i(`<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-btn d-btn--outlined d-tooltip--hover<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-tooltip d-tooltip__arrow--bottom-center d-ps-absolute<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>This is a simple tooltip. The tooltip can be positioned in multiple areas too!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>Hover over me to see a tooltip<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,1),N=t("div",{class:"d-tooltip d-tooltip__arrow--bottom-center d-tooltip--show"},[t("span",null,"This is a simple tooltip. The tooltip can be positioned in multiple areas too!")],-1),B=i(`<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-tooltip d-tooltip__arrow--bottom-center d-tooltip--show<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>This is a simple tooltip. The tooltip can be positioned in multiple areas too!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,1),C=t("div",{class:"d-tooltip d-tooltip__arrow--bottom-center d-tooltip--inverted d-tooltip--show"},[t("span",null,"This is a simple tooltip. The tooltip can be positioned in multiple areas too!")],-1),D=i(`<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-tooltip d-tooltip__arrow--bottom-center d-tooltip--inverted d-tooltip--show<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>This is a simple tooltip. The tooltip can be positioned in multiple areas too!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="arrow-directions" tabindex="-1"><a class="header-anchor" href="#arrow-directions" aria-hidden="true">#</a> Arrow Directions</h3><p>No arrow direction is assigned by default. You must select a direction. Twelve directions are offered: three on each face of the tooltip.</p>`,3),V={class:"d-w40p d-p12"},z={class:"d-ff-mono d-fs11 d-mb4"},A=t("h2",{id:"accessibility",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#accessibility","aria-hidden":"true"},"#"),o(" Accessibility")],-1);function S(u,E,F,H,k,h){const g=p("component-class-table"),s=p("code-well-header"),_=p("component-accessible-table");return l(),c(r,null,[w,a(g,{"component-name":"tooltip"}),x,q,a(s,{bgclass:"d-bgc-black-050",class:"d-hmn264"},{default:n(()=>[T]),_:1}),y,a(s,null,{default:n(()=>[N]),_:1}),B,a(s,{bgclass:"d-bgc-black-800"},{default:n(()=>[C]),_:1}),D,a(s,null,{default:n(()=>[(l(!0),c(r,null,b(k.directions,e=>(l(),c("div",V,[t("div",{class:v(["d-tooltip d-tooltip--show","d-tooltip__arrow--"+e])},[t("span",z,".d-tooltip__arrow--"+d(e),1),t("div",null,[t("span",null,"Arrow appears "+d(h.capitalizeDirection(e))+".",1)])],2)]))),256))]),_:1}),A,a(_,{"component-name":"tooltip"})],64)}var j=m(f,[["render",S],["__file","tooltip.html.vue"]]);export{j as default};
