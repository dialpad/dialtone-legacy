import{values as i}from"./spacing.0849bac4.js";import{_ as u,o as t,c as e,b as c,w as l,a,F as r,f as g,u as k,d as s,e as d,r as h,t as p}from"./app.1300ff30.js";const _=a("h2",{id:"adding-space-vertically",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#adding-space-vertically","aria-hidden":"true"},"#"),s(" Adding space vertically")],-1),f=s(),v=a("div",{class:"d-fl-center d-fd-column d-bgc-red-200 d-stack16 d-bar8"},[a("div",{class:"d-w128 d-p16 d-bar8 d-bgc-purple-300 d-fs24 d-fw-bold d-ta-center"},"1"),s(),a("div",{class:"d-w128 d-p16 d-bar8 d-bgc-purple-300 d-fs24 d-fw-bold d-ta-center"},"2"),s(),a("div",{class:"d-w128 d-p16 d-bar8 d-bgc-purple-300 d-fs24 d-fw-bold d-ta-center"},"3")],-1),b=d(` <div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-stack16<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="adding-space-horizontally" tabindex="-1"><a class="header-anchor" href="#adding-space-horizontally" aria-hidden="true">#</a> Adding space horizontally</h2> `,4),m=a("div",{class:"d-fl-center d-bgc-red-200 d-flow24 d-bar8 d-fs24 d-fw-bold d-ta-center"},[a("div",{class:"lg:d-w96 d-w128 d-p16 d-bar8 d-bgc-purple-300"},"1"),s(),a("div",{class:"lg:d-w96 d-w128 d-p16 d-bar8 d-bgc-purple-300"},"2"),s(),a("div",{class:"lg:d-w96 d-w128 d-p16 d-bar8 d-bgc-purple-300"},"3")],-1),w=d(` <div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-flow24<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="classes" tabindex="-1"><a class="header-anchor" href="#classes" aria-hidden="true">#</a> Classes</h2> <p>The Stack and Flow layouts work by using the adjacent sibling combinator (<code>+</code>) to apply a top or left margin to sibling elements. This means it will only work when there are more than two sibling items. To allow for differing nesting spacing values, these margins are scoped to apply <strong>only</strong> to direct children of the parent (e.g. <code>.d-stack[#] &gt; * + *</code>).</p> `,6),y={class:"d-table dialtone-doc-table"},x=a("thead",null,[a("tr",null,[a("th",{scope:"col",class:"d-w25p"},"Value"),s(),a("th",{scope:"col"},"Vertical Class"),s(),a("th",{scope:"col"},"Horizontal Class")])],-1),q=s(),V={scope:"row"},C=s(),z={class:"d-ff-mono d-fc-purple d-fs12"},N=s(),S={class:"d-ff-mono d-fc-purple d-fs12"},T={__name:"auto-spacing.html",setup(B){return(F,A)=>{const o=h("code-well-header");return t(),e("div",null,[_,f,c(o,{class:"d-fl-center d-p24 d-bgc-purple-100 d-w100p d-hmn216",custom:""},{default:l(()=>[v]),_:1}),b,c(o,{class:"d-fl-center d-p24 d-bgc-purple-100 d-w100p d-hmn216",custom:""},{default:l(()=>[m]),_:1}),w,a("table",y,[x,q,a("tbody",null,[(t(!0),e(r,null,g(k(i),({value:n})=>(t(),e("tr",null,[a("th",V,p(n)+"px",1),C,a("td",z,".d-stack"+p(n),1),N,a("td",S,".d-flow"+p(n),1)]))),256))])])])}}};var E=u(T,[["__file","auto-spacing.html.vue"]]);export{E as default};
