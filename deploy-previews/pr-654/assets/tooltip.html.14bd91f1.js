import{_ as g,r as p,o as l,c,b as a,w as o,e as s,a as t,d as i,F as m,f as b,t as d,n as v}from"./app.7cae85d4.js";const f={data(){return{directions:["top-left","top-center","top-right","right-top","right-center","right-bottom","bottom-left","bottom-center","bottom-right","left-top","left-center","left-bottom"]}},methods:{capitalizeDirection(u){return u.split("-").join(" ")}}},w=t("button",{class:"d-btn d-btn--outlined d-tooltip--hover",type:"button"},[t("div",{class:"d-tooltip d-tooltip__arrow--bottom-center d-ps-absolute"},[t("span",null,"This is a simple tooltip. The tooltip can be positioned in multiple areas too!")]),s(),t("span",null,"Hover over me to see a tooltip")],-1),x=s(),T=t("h2",{id:"variants-and-examples",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#variants-and-examples","aria-hidden":"true"},"#"),s(" Variants and Examples")],-1),q=s(),y=t("h3",{id:"base-styles",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#base-styles","aria-hidden":"true"},"#"),s(" Base Styles")],-1),N=s(),V=t("button",{class:"d-btn d-btn--outlined d-tooltip--hover",type:"button"},[t("div",{class:"d-tooltip d-tooltip__arrow--bottom-center d-ps-absolute"},[t("span",null,"This is a simple tooltip. The tooltip can be positioned in multiple areas too!")]),s(),t("span",null,"Hover over me to see a tooltip")],-1),B=i(` <div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-btn d-btn--outlined d-tooltip--hover<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-tooltip d-tooltip__arrow--bottom-center d-ps-absolute<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>This is a simple tooltip. The tooltip can be positioned in multiple areas too!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>Hover over me to see a tooltip<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,2),C=t("div",{class:"d-tooltip d-tooltip__arrow--bottom-center d-tooltip--show"},[t("span",null,"This is a simple tooltip. The tooltip can be positioned in multiple areas too!")],-1),D=i(` <div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-tooltip d-tooltip__arrow--bottom-center d-tooltip--show<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>This is a simple tooltip. The tooltip can be positioned in multiple areas too!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,2),z=t("div",{class:"d-tooltip d-tooltip__arrow--bottom-center d-tooltip--inverted d-tooltip--show"},[t("span",null,"This is a simple tooltip. The tooltip can be positioned in multiple areas too!")],-1),A=i(` <div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-tooltip d-tooltip__arrow--bottom-center d-tooltip--inverted d-tooltip--show<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>This is a simple tooltip. The tooltip can be positioned in multiple areas too!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="arrow-directions" tabindex="-1"><a class="header-anchor" href="#arrow-directions" aria-hidden="true">#</a> Arrow Directions</h3> <p>No arrow direction is assigned by default. You must select a direction. Twelve directions are offered: three on each face of the tooltip.</p> `,6),H={class:"d-w40p d-p12"},S={class:"d-ff-mono d-fs11 d-mb4"},E=s(),F=s(),$=t("h2",{id:"classes",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#classes","aria-hidden":"true"},"#"),s(" Classes")],-1),j=s(),L=s(),Y=t("h2",{id:"accessibility",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#accessibility","aria-hidden":"true"},"#"),s(" Accessibility")],-1),G=s();function I(u,J,K,M,r,h){const n=p("code-well-header"),k=p("component-class-table"),_=p("component-accessible-table");return l(),c("div",null,[a(n,{bgclass:"d-bgc-black-200",class:"d-hmn264"},{default:o(()=>[w]),_:1}),x,T,q,y,N,a(n,{bgclass:"d-bgc-black-200",class:"d-hmn264"},{default:o(()=>[V]),_:1}),B,a(n,null,{default:o(()=>[C]),_:1}),D,a(n,{bgclass:"d-bgc-black-800"},{default:o(()=>[z]),_:1}),A,a(n,null,{default:o(()=>[(l(!0),c(m,null,b(r.directions,e=>(l(),c("div",H,[t("div",{class:v(["d-tooltip d-tooltip--show","d-tooltip__arrow--"+e])},[t("span",S,".d-tooltip__arrow--"+d(e),1),E,t("div",null,[t("span",null,"Arrow appears "+d(h.capitalizeDirection(e))+".",1)])],2)]))),256))]),_:1}),F,$,j,a(k,{"component-name":"tooltip"}),L,Y,G,a(_,{"component-name":"tooltip"})])}var P=g(f,[["render",I],["__file","tooltip.html.vue"]]);export{P as default};
