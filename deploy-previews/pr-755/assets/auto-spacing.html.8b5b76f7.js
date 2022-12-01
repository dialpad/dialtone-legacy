import{values as i}from"./spacing.d5e814a5.js";import{_ as u,r,o as t,c as e,a as s,e as l,w as o,b as a,F as g,g as k,u as h,d,t as p}from"./app.22279e87.js";const _=a("h2",{id:"adding-space-vertically",tabindex:"-1",class:"d-docsite--header d-pt72"},[s("Adding space vertically "),a("a",{class:"header-anchor d-link d-td-none",href:"#adding-space-vertically","aria-hidden":"true"},"#")],-1),f=a("div",{class:"d-fl-center d-fd-column d-bgc-red-100 d-stack16 d-bar8"},[a("div",{class:"d-w128 d-p16 d-bar8 d-bgc-purple-300 d-fs-300 d-fw-bold d-ta-center"},"1"),s(),a("div",{class:"d-w128 d-p16 d-bar8 d-bgc-purple-300 d-fs-300 d-fw-bold d-ta-center"},"2"),s(),a("div",{class:"d-w128 d-p16 d-bar8 d-bgc-purple-300 d-fs-300 d-fw-bold d-ta-center"},"3")],-1),v=d(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-stack16<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="adding-space-horizontally" tabindex="-1" class="d-docsite--header d-pt72">Adding space horizontally <a class="header-anchor d-link d-td-none" href="#adding-space-horizontally" aria-hidden="true">#</a></h2>`,2),m=a("div",{class:"d-fl-center d-bgc-red-100 d-flow24 d-bar8 d-fs-300 d-fw-bold d-ta-center"},[a("div",{class:"lg:d-w96 d-w128 d-p16 d-bar8 d-bgc-purple-300"},"1"),s(),a("div",{class:"lg:d-w96 d-w128 d-p16 d-bar8 d-bgc-purple-300"},"2"),s(),a("div",{class:"lg:d-w96 d-w128 d-p16 d-bar8 d-bgc-purple-300"},"3")],-1),b=d(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-flow24<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="classes" tabindex="-1" class="d-docsite--header d-pt72">Classes <a class="header-anchor d-link d-td-none" href="#classes" aria-hidden="true">#</a></h2>`,2),w=a("p",{class:"d-docsite--paragraph d-my16 d-lh-400"},[s("The Stack and Flow layouts work by using the adjacent sibling combinator ("),a("code",null,"+"),s(") to apply a top or left margin to sibling elements. This means it will only work when there are more than two sibling items. To allow for differing nesting spacing values, these margins are scoped to apply "),a("strong",null,"only"),s(" to direct children of the parent (e.g. "),a("code",null,".d-stack[#] > * + *"),s(").")],-1),y={class:"d-table dialtone-doc-table"},x=a("thead",null,[a("tr",null,[a("th",{scope:"col",class:"d-w25p"},"Value"),s(),a("th",{scope:"col"},"Vertical Class"),s(),a("th",{scope:"col"},"Horizontal Class")])],-1),q={scope:"row"},V={class:"d-ff-mono d-fc-purple-400 d-fs-100"},C={class:"d-ff-mono d-fc-purple-400 d-fs-100"},z={__name:"auto-spacing.html",setup(N){return(S,T)=>{const c=r("code-well-header");return t(),e("div",null,[_,s(),l(c,{class:"d-fl-center d-p24 d-bgc-purple-100 d-w100p d-hmn216",custom:""},{default:o(()=>[f]),_:1}),s(),v,s(),l(c,{class:"d-fl-center d-p24 d-bgc-purple-100 d-w100p d-hmn216",custom:""},{default:o(()=>[m]),_:1}),s(),b,s(),w,s(),a("table",y,[x,s(),a("tbody",null,[(t(!0),e(g,null,k(h(i),({value:n})=>(t(),e("tr",null,[a("th",q,p(n)+"px",1),s(),a("td",V,".d-stack"+p(n),1),s(),a("td",C,".d-flow"+p(n),1)]))),256))])])])}}},A=u(z,[["__file","auto-spacing.html.vue"]]);export{A as default};
