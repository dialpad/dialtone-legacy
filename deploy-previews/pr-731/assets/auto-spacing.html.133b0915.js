import{_ as i,r as u,o as t,c as p,a as s,d as c,w as o,b as a,F as r,f as g,u as k,e as d,t as e}from"./app.0c8bf3f7.js";import{values as h}from"./spacing.0849bac4.js";const f=a("h2",{id:"adding-space-vertically",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#adding-space-vertically","aria-hidden":"true"},"#"),s(" Adding space vertically")],-1),_=a("div",{class:"d-fl-center d-fd-column d-bgc-red-100 d-stack16 d-bar8"},[a("div",{class:"d-w128 d-p16 d-bar8 d-bgc-purple-300 d-fs-300 d-fw-bold d-ta-center"},"1"),s(),a("div",{class:"d-w128 d-p16 d-bar8 d-bgc-purple-300 d-fs-300 d-fw-bold d-ta-center"},"2"),s(),a("div",{class:"d-w128 d-p16 d-bar8 d-bgc-purple-300 d-fs-300 d-fw-bold d-ta-center"},"3")],-1),v=d(`<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-stack16<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="adding-space-horizontally" tabindex="-1"><a class="header-anchor" href="#adding-space-horizontally" aria-hidden="true">#</a> Adding space horizontally</h2>`,2),b=a("div",{class:"d-fl-center d-bgc-red-100 d-flow24 d-bar8 d-fs-300 d-fw-bold d-ta-center"},[a("div",{class:"lg:d-w96 d-w128 d-p16 d-bar8 d-bgc-purple-300"},"1"),s(),a("div",{class:"lg:d-w96 d-w128 d-p16 d-bar8 d-bgc-purple-300"},"2"),s(),a("div",{class:"lg:d-w96 d-w128 d-p16 d-bar8 d-bgc-purple-300"},"3")],-1),m=d(`<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-flow24<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="classes" tabindex="-1"><a class="header-anchor" href="#classes" aria-hidden="true">#</a> Classes</h2>`,2),w=a("p",null,[s("The Stack and Flow layouts work by using the adjacent sibling combinator ("),a("code",null,"+"),s(") to apply a top or left margin to sibling elements. This means it will only work when there are more than two sibling items. To allow for differing nesting spacing values, these margins are scoped to apply "),a("strong",null,"only"),s(" to direct children of the parent (e.g. "),a("code",null,".d-stack[#] > * + *"),s(").")],-1),y={class:"d-table dialtone-doc-table"},x=a("thead",null,[a("tr",null,[a("th",{scope:"col",class:"d-w25p"},"Value"),s(),a("th",{scope:"col"},"Vertical Class"),s(),a("th",{scope:"col"},"Horizontal Class")])],-1),q={scope:"row"},V={class:"d-ff-mono d-fc-purple-400 d-fs-100"},C={class:"d-ff-mono d-fc-purple-400 d-fs-100"},z={__name:"auto-spacing.html",setup(N){return(S,T)=>{const l=u("code-well-header");return t(),p("div",null,[f,s(),c(l,{class:"d-fl-center d-p24 d-bgc-purple-100 d-w100p d-hmn216",custom:""},{default:o(()=>[_]),_:1}),s(),v,s(),c(l,{class:"d-fl-center d-p24 d-bgc-purple-100 d-w100p d-hmn216",custom:""},{default:o(()=>[b]),_:1}),s(),m,s(),w,s(),a("table",y,[x,s(),a("tbody",null,[(t(!0),p(r,null,g(k(h),({value:n})=>(t(),p("tr",null,[a("th",q,e(n)+"px",1),s(),a("td",V,".d-stack"+e(n),1),s(),a("td",C,".d-flow"+e(n),1)]))),256))])])])}}};var A=i(z,[["__file","auto-spacing.html.vue"]]);export{A as default};
