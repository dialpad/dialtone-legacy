import{_,r as t,o as e,c as o,b as n,w as p,a,d as s,e as u,F as h,f as m,n as b,u as q}from"./app.e4891e6f.js";import{classes as v}from"./badge.bcaa7f9c.js";import{M as l}from"./Markdown.d9297b42.js";import"./_commonjsHelpers.2cf1d77b.js";const f=a("div",null,[a("span",{class:"d-badge d-mr8 d-mb8 d-badge--black-700"},"Badge")],-1),x=s(),w=s(),y=a("h2",{id:"usage",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#usage","aria-hidden":"true"},"#"),s(" Usage")],-1),B=s(),V={class:"dialtone-usage"},C={class:"dialtone-usage__item dialtone-usage__item--do"},F={class:"dialtone-usage__hd dialtone-usage__hd--do"},N=s(" Use for"),A=s(),T={class:"dialtone-usage__bd"},D=s(`
- To flag and draw awareness to a specific element or feature of focus. For example, something is unique about that separates it from other like content.
- As a notification system with minimal footprint.
`),E=s(),M={class:"dialtone-usage__item dialtone-usage__item--dont"},S={class:"dialtone-usage__hd dialtone-usage__hd--dont"},U=s(" Don't use for"),z=s(),L={class:"dialtone-usage__bd"},W=s(`
- To indicate that interaction by the user is required.
`),j=u(' <h3>Best practices</h3> <ul><li>While the color variant used should not be the sole indicator of information, choose color patterns that users can quickly scan and identify its intention.</li> <li>Avoid long values, favoring a brief scannable word.</li></ul> <h2 id="accessibility" tabindex="-1"><a class="header-anchor" href="#accessibility" aria-hidden="true">#</a> Accessibility</h2> <ul><li>Since a Badge may often reflect a value within an implied label, ensure a label is announced. For example, via <code>aria-label</code> or <code>aria-labeledby</code>.</li></ul> <h2 id="variants-and-examples" tabindex="-1"><a class="header-anchor" href="#variants-and-examples" aria-hidden="true">#</a> Variants and Examples</h2> ',11),G=u(` <div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-badge<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-badge d-badge--black-700<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-badge d-badge--green-400<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-badge d-badge--orange-400<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-badge d-badge--pink-300<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-badge d-badge--pink-500<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-badge d-badge--pink-600<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-badge d-badge--pink-700<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-badge d-badge--purple-100<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-badge d-badge--purple-300<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-badge d-badge--purple-500<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-badge d-badge--purple-700<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-badge d-badge--red-500<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-badge d-badge--white<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-badge d-badge--yellow-300<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="classes" tabindex="-1"><a class="header-anchor" href="#classes" aria-hidden="true">#</a> Classes</h2> `,4),H={__name:"badge.html",setup(I){return(J,K)=>{const c=t("code-well-header"),i=t("component-combinator"),k=t("icon-checkmark"),d=t("icon-close"),g=t("component-class-table");return e(),o("div",null,[n(c,null,{default:p(()=>[f]),_:1}),x,n(i,{"component-name":"DtBadge"}),w,y,B,a("div",V,[a("div",C,[a("h3",F,[n(k),N]),A,a("div",T,[n(l,null,{default:p(()=>[D]),_:1})])]),E,a("div",M,[a("h3",S,[n(d),U]),z,a("div",L,[n(l,null,{default:p(()=>[W]),_:1})])])]),j,n(c,null,{default:p(()=>[a("div",null,[(e(!0),o(h,null,m(q(v),r=>(e(),o("span",{class:b(["d-badge d-mr8 d-mb8",r.class])},"Badge",2))),256))])]),_:1}),G,n(g,{"component-name":"badge"})])}}};var X=_(H,[["__file","badge.html.vue"]]);export{X as default};
