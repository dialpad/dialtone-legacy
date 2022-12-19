import{_ as g,s as p,v as l,x as c,G as a,B as o,C as s,y as t,M as i,F as _,z as b,D as u,E as v}from"./framework-bc192251.js";const f={data(){return{directions:["top-left","top-center","top-right","right-top","right-center","right-bottom","bottom-left","bottom-center","bottom-right","left-top","left-center","left-bottom"]}},methods:{capitalizeDirection(d){return d.split("-").join(" ")}}},w=t("button",{class:"d-btn d-btn--outlined d-tooltip--hover",type:"button"},[t("div",{class:"d-tooltip d-tooltip__arrow--bottom-center d-ps-absolute"},[t("span",null,"This is a simple tooltip. The tooltip can be positioned in multiple areas too!")]),s(),t("span",null,"Hover over me to see a tooltip")],-1),x=t("h2",{id:"variants-and-examples",tabindex:"-1",class:"d-docsite--header-2 d-my24"},[s("Variants and examples "),t("a",{class:"header-anchor d-link d-td-none d-docsite--link d-link",href:"#variants-and-examples","aria-hidden":"true"},"#")],-1),y=t("h3",{id:"base-styles",tabindex:"-1",class:"d-docsite--header-3 d-my24"},[s("Base Styles "),t("a",{class:"header-anchor d-link d-td-none d-docsite--link d-link",href:"#base-styles","aria-hidden":"true"},"#")],-1),T=t("button",{class:"d-btn d-btn--outlined d-tooltip--hover",type:"button"},[t("div",{class:"d-tooltip d-tooltip__arrow--bottom-center d-ps-absolute"},[t("span",null,"This is a simple tooltip. The tooltip can be positioned in multiple areas too!")]),s(),t("span",null,"Hover over me to see a tooltip")],-1),q=i(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-btn d-btn--outlined d-tooltip--hover<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-tooltip d-tooltip__arrow--bottom-center d-ps-absolute<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>This is a simple tooltip. The tooltip can be positioned in multiple areas too!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>Hover over me to see a tooltip<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,1),B=t("div",{class:"d-tooltip d-tooltip__arrow--bottom-center d-tooltip--show"},[t("span",null,"This is a simple tooltip. The tooltip can be positioned in multiple areas too!")],-1),C=i(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-tooltip d-tooltip__arrow--bottom-center d-tooltip--show<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>This is a simple tooltip. The tooltip can be positioned in multiple areas too!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,1),D=t("div",{class:"d-tooltip d-tooltip__arrow--bottom-center d-tooltip--inverted d-tooltip--show"},[t("span",null,"This is a simple tooltip. The tooltip can be positioned in multiple areas too!")],-1),N=i(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-tooltip d-tooltip__arrow--bottom-center d-tooltip--inverted d-tooltip--show<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>This is a simple tooltip. The tooltip can be positioned in multiple areas too!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="arrow-directions" tabindex="-1" class="d-docsite--header-3 d-my24">Arrow Directions <a class="header-anchor d-link d-td-none d-docsite--link d-link" href="#arrow-directions" aria-hidden="true">#</a></h3>`,2),V=t("p",{class:"d-docsite--paragraph d-mb8 d-lh-400 d-wmx75ch"},"No arrow direction is assigned by default. You must select a direction. Twelve directions are offered: three on each face of the tooltip.",-1),z={class:"d-w40p d-p12"},A={class:"d-ff-mono d-fs-100 d-mb4"},H=t("h2",{id:"classes",tabindex:"-1",class:"d-docsite--header-2 d-my24"},[s("Classes "),t("a",{class:"header-anchor d-link d-td-none d-docsite--link d-link",href:"#classes","aria-hidden":"true"},"#")],-1),S=t("h2",{id:"accessibility",tabindex:"-1",class:"d-docsite--header-2 d-my24"},[s("Accessibility "),t("a",{class:"header-anchor d-link d-td-none d-docsite--link d-link",href:"#accessibility","aria-hidden":"true"},"#")],-1);function E(d,F,$,j,r,k){const n=p("code-well-header"),h=p("component-class-table"),m=p("component-accessible-table");return l(),c("div",null,[a(n,{bgclass:"d-bgc-black-100",class:"d-hmn264"},{default:o(()=>[w]),_:1}),s(),x,s(),y,s(),a(n,{bgclass:"d-bgc-black-100",class:"d-hmn264"},{default:o(()=>[T]),_:1}),s(),q,a(n,null,{default:o(()=>[B]),_:1}),s(),C,a(n,{bgclass:"d-bgc-black-800"},{default:o(()=>[D]),_:1}),s(),N,s(),V,s(),a(n,null,{default:o(()=>[(l(!0),c(_,null,b(r.directions,e=>(l(),c("div",z,[t("div",{class:v(["d-tooltip d-tooltip--show","d-tooltip__arrow--"+e])},[t("span",A,".d-tooltip__arrow--"+u(e),1),s(),t("div",null,[t("span",null,"Arrow appears "+u(k.capitalizeDirection(e))+".",1)])],2)]))),256))]),_:1}),s(),H,s(),a(h,{"component-name":"tooltip"}),S,s(),a(m,{"component-name":"tooltip"})])}const L=g(f,[["render",E],["__file","tooltip.html.vue"]]);export{L as default};
