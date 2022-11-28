import{_,r as p,o as l,c,d as a,w as o,a as s,b as t,e as i,F as m,g as b,t as d,n as v}from"./app.8f71e708.js";const f={data(){return{directions:["top-left","top-center","top-right","right-top","right-center","right-bottom","bottom-left","bottom-center","bottom-right","left-top","left-center","left-bottom"]}},methods:{capitalizeDirection(u){return u.split("-").join(" ")}}},w=t("button",{class:"d-btn d-btn--outlined d-tooltip--hover",type:"button"},[t("div",{class:"d-tooltip d-tooltip__arrow--bottom-center d-ps-absolute"},[t("span",null,"This is a simple tooltip. The tooltip can be positioned in multiple areas too!")]),s(),t("span",null,"Hover over me to see a tooltip")],-1),T=t("h2",{id:"variants-and-examples",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#variants-and-examples","aria-hidden":"true"},"#"),s(" Variants and examples")],-1),q=t("h3",null,"Base Styles",-1),x=t("button",{class:"d-btn d-btn--outlined d-tooltip--hover",type:"button"},[t("div",{class:"d-tooltip d-tooltip__arrow--bottom-center d-ps-absolute"},[t("span",null,"This is a simple tooltip. The tooltip can be positioned in multiple areas too!")]),s(),t("span",null,"Hover over me to see a tooltip")],-1),y=i(`<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-btn d-btn--outlined d-tooltip--hover<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-tooltip d-tooltip__arrow--bottom-center d-ps-absolute<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>This is a simple tooltip. The tooltip can be positioned in multiple areas too!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>Hover over me to see a tooltip<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,1),N=t("div",{class:"d-tooltip d-tooltip__arrow--bottom-center d-tooltip--show"},[t("span",null,"This is a simple tooltip. The tooltip can be positioned in multiple areas too!")],-1),V=i(`<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-tooltip d-tooltip__arrow--bottom-center d-tooltip--show<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>This is a simple tooltip. The tooltip can be positioned in multiple areas too!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,1),B=t("div",{class:"d-tooltip d-tooltip__arrow--bottom-center d-tooltip--inverted d-tooltip--show"},[t("span",null,"This is a simple tooltip. The tooltip can be positioned in multiple areas too!")],-1),C=i(`<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-tooltip d-tooltip__arrow--bottom-center d-tooltip--inverted d-tooltip--show<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>This is a simple tooltip. The tooltip can be positioned in multiple areas too!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3>Arrow Directions</h3>`,2),D=t("p",null,"No arrow direction is assigned by default. You must select a direction. Twelve directions are offered: three on each face of the tooltip.",-1),z={class:"d-w40p d-p12"},A={class:"d-ff-mono d-fs-100 d-mb4"},H=t("h2",{id:"classes",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#classes","aria-hidden":"true"},"#"),s(" Classes")],-1),S=t("h2",{id:"accessibility",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#accessibility","aria-hidden":"true"},"#"),s(" Accessibility")],-1);function F(u,$,j,E,r,k){const n=p("code-well-header"),h=p("component-class-table"),g=p("component-accessible-table");return l(),c("div",null,[a(n,{bgclass:"d-bgc-black-100",class:"d-hmn264"},{default:o(()=>[w]),_:1}),s(),T,s(),q,s(),a(n,{bgclass:"d-bgc-black-100",class:"d-hmn264"},{default:o(()=>[x]),_:1}),s(),y,a(n,null,{default:o(()=>[N]),_:1}),s(),V,a(n,{bgclass:"d-bgc-black-800"},{default:o(()=>[B]),_:1}),s(),C,s(),D,s(),a(n,null,{default:o(()=>[(l(!0),c(m,null,b(r.directions,e=>(l(),c("div",z,[t("div",{class:v(["d-tooltip d-tooltip--show","d-tooltip__arrow--"+e])},[t("span",A,".d-tooltip__arrow--"+d(e),1),s(),t("div",null,[t("span",null,"Arrow appears "+d(k.capitalizeDirection(e))+".",1)])],2)]))),256))]),_:1}),s(),H,s(),a(h,{"component-name":"tooltip"}),s(),S,s(),a(g,{"component-name":"tooltip"})])}var Y=_(f,[["render",F],["__file","tooltip.html.vue"]]);export{Y as default};
