import{_ as g,r as c,o as t,c as p,b as l,w as u,a as s,d as n,e as _,F as k,f as i,n as b,B as m,t as o}from"./app.6bf27d57.js";const v=s("h2",{id:"usage",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#usage","aria-hidden":"true"},"#"),n(" Usage")],-1),h=n(),f=s("p",null,[n("Use "),s("code",null,"d-bgs-{n}"),n(" to control the size of element's background image.")],-1),q=n(),y={class:"d-d-flex d-fd-column d-ai-center d-stack4"},z=n(),w=_(` <div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgr-none d-bgs-contain<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>...<span class="token punctuation">)</span></span><span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgr-none d-bgs-cover<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>...<span class="token punctuation">)</span></span><span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgr-none d-bgs-var<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">--bgg-size</span><span class="token punctuation">:</span> 65% 65%<span class="token punctuation">;</span> <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>...<span class="token punctuation">)</span></span><span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgr-none d-bgs-auto d-bgp-center<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>...<span class="token punctuation">)</span></span><span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgr-none d-bgs-unset<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>...<span class="token punctuation">)</span></span><span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="classes" tabindex="-1"><a class="header-anchor" href="#classes" aria-hidden="true">#</a> Classes</h2> `,4),x={scope:"row",class:"d-ff-mono d-fc-purple d-fw-normal d-fs12"},A=n(),C={class:"d-ff-mono d-fc-orange d-fs12"},V=n(`
          background-size:
            `),B={key:0},N={key:1},E={__name:"size.html",setup(S){const e=["contain","cover","var","auto","unset"];return(U,j)=>{const r=c("code-well-header"),d=c("utility-class-table");return t(),p("div",null,[v,h,f,q,l(r,{class:"d-fl-col4 d-fw-wrap d-flg12 d-p12 d-bgc-orange-100 d-bgo50",custom:""},{default:u(()=>[(t(),p(k,null,i(e,a=>s("div",y,[s("div",{class:b(["d-fl-center d-w128 d-h128 d-bgc-orange-300 d-bar8 d-bc-purple-200 d-of-hidden d-bgr-none",[{"d-bgp-center":a==="auto"},`d-bgs-${a}`]]),style:m([{"background-image":"url('https://4.bp.blogspot.com/-EVbXg5iW6qY/ULcKZEC-bnI/AAAAAAAACCI/kZDtjeKwQlo/s1600/puffin1.jpg')"},a==="var"?"--bgg-size: 65% 65%;":""])},null,6),z,s("code",null,".d-bgs-"+o(a),1)])),64))]),_:1}),w,l(d,null,{content:u(()=>[s("tbody",null,[(t(),p(k,null,i(e,a=>s("tr",null,[s("th",x,".d-bgp-"+o(a),1),A,s("td",C,[V,a==="var"?(t(),p("span",B," var(--bgg-size, 100% 100%); ")):(t(),p("span",N,o(a)+" !important; ",1))])])),64))])]),_:1})])}}};var F=g(E,[["__file","size.html.vue"]]);export{F as default};
