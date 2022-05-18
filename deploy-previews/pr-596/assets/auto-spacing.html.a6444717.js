import{values as u}from"./spacing.0849bac4.js";import{_ as r,r as g,o as t,c as p,a,F as l,f as k,u as h,b as o,w as d,e as s,d as i,t as e}from"./app.e95f5ecf.js";const f=a("h2",{id:"classes",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#classes","aria-hidden":"true"},"#"),s(" Classes")],-1),_=a("p",null,[s("The Stack and Flow layouts work by using the adjacent sibling combinator ("),a("code",null,"+"),s(") to apply a top or left margin to sibling elements. This means it will only work when there are more than two sibling items. To allow for differing nesting spacing values, these margins are scoped to apply "),a("strong",null,"only"),s(" to direct children of the parent (e.g. "),a("code",null,".d-stack[#] > * + *"),s(").")],-1),v={class:"d-table"},b=a("thead",null,[a("tr",null,[a("th",{scope:"col",class:"d-w25p"},"Value"),a("th",{scope:"col"},"Vertical Class"),a("th",{scope:"col"},"Horizontal Class")])],-1),m={scope:"row"},w={class:"d-ff-mono d-fc-purple d-fs12"},y={class:"d-ff-mono d-fc-purple d-fs12"},x=a("h2",{id:"adding-space-vertically",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#adding-space-vertically","aria-hidden":"true"},"#"),s(" Adding space vertically")],-1),q=a("div",{class:"d-fl-center d-fd-column d-bgc-red-200 d-stack16 d-bar8"},[a("div",{class:"d-w128 d-p16 d-bar8 d-bgc-purple-300 d-fs24 d-fw-bold d-ta-center"},"1"),a("div",{class:"d-w128 d-p16 d-bar8 d-bgc-purple-300 d-fs24 d-fw-bold d-ta-center"},"2"),a("div",{class:"d-w128 d-p16 d-bar8 d-bgc-purple-300 d-fs24 d-fw-bold d-ta-center"},"3")],-1),V=i(`<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-stack16<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="adding-space-horizontally" tabindex="-1"><a class="header-anchor" href="#adding-space-horizontally" aria-hidden="true">#</a> Adding space horizontally</h2>`,2),C=a("div",{class:"d-fl-center d-bgc-red-200 d-flow24 d-bar8 d-fs24 d-fw-bold d-ta-center"},[a("div",{class:"lg:d-w96 d-w128 d-p16 d-bar8 d-bgc-purple-300"},"1"),a("div",{class:"lg:d-w96 d-w128 d-p16 d-bar8 d-bgc-purple-300"},"2"),a("div",{class:"lg:d-w96 d-w128 d-p16 d-bar8 d-bgc-purple-300"},"3")],-1),z=i(`<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-flow24<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,1),N={setup(S){return(T,B)=>{const c=g("code-well-header");return t(),p(l,null,[f,_,a("table",v,[b,a("tbody",null,[(t(!0),p(l,null,k(h(u),({value:n})=>(t(),p("tr",null,[a("th",m,e(n)+"px",1),a("td",w,".d-stack"+e(n),1),a("td",y,".d-flow"+e(n),1)]))),256))])]),x,o(c,{class:"d-fl-center d-p24 d-bgc-purple-100 d-w100p d-hmn216",custom:""},{default:d(()=>[q]),_:1}),V,o(c,{class:"d-fl-center d-p24 d-bgc-purple-100 d-w100p d-hmn216",custom:""},{default:d(()=>[C]),_:1}),z],64)}}};var j=r(N,[["__file","auto-spacing.html.vue"]]);export{j as default};
