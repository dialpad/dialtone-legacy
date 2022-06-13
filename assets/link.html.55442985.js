import{M as l}from"./Markdown.055eb963.js";import{_ as k,r as e,o as r,c as _,b as n,w as t,a,e as s,d as c}from"./app.3bead9da.js";const h=a("a",{href:"#",class:"d-link"},"Base link",-1),g=s(),m=a("h2",{id:"usage",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#usage","aria-hidden":"true"},"#"),s(" Usage")],-1),b=s(),f=a("code",null,"button",-1),v=s(" and link ("),q=a("code",null,"<a>",-1),x=s(") HTML elements each describe a specific intent. Understanding the distinction is important: if it goes somewhere, use a Link. If an action occurs, use a "),y=s("Button"),w=s("."),B=s(),U={class:"dialtone-usage"},N={class:"dialtone-usage__item dialtone-usage__item--do"},V={class:"dialtone-usage__hd dialtone-usage__hd--do"},C=s(" Use for"),L=s(),M={class:"dialtone-usage__bd"},A=s(`
- Navigating between destinations.
`),E=s(),T={class:"dialtone-usage__item dialtone-usage__item--dont"},D={class:"dialtone-usage__hd dialtone-usage__hd--dont"},I=s(" Don't use for"),R=s(),S={class:"dialtone-usage__bd"},F=s(`
- Actions, instead use a [Button](button.html)
`),H=c(' <h3 id="best-practices" tabindex="-1"><a class="header-anchor" href="#best-practices" aria-hidden="true">#</a> Best practices</h3> <ul><li>Use useful, actionable, and descriptive text clearly conveying the hyperlink\u2019s destination. For example, a generic label like &quot;click here&quot; doesn\u2019t convey its target content.</li> <li>Too many links can be overwhelming. Be selective about the number of links in a context.</li> <li>Clearly identify links that target an external source.</li></ul> <h2 id="accessibility" tabindex="-1"><a class="header-anchor" href="#accessibility" aria-hidden="true">#</a> Accessibility</h2> <ul><li>Allow keyboard navigation. Users must be able to navigate between links, i.e. keypress of tab, and activate it by pressing \u2018Enter\u2019.</li> <li>Users must be able to identify links without relying on color alone.</li> <li>Users must be able to activate hover and focus states with both a mouse and a keyboard.</li></ul> <h2 id="variants-and-examples" tabindex="-1"><a class="header-anchor" href="#variants-and-examples" aria-hidden="true">#</a> Variants and Examples</h2> ',11),W=a("a",{href:"#",class:"d-link"},"Base link",-1),j=s(),z=a("a",{href:"#",class:"d-link d-link--danger"},"Danger link",-1),G=s(),J=a("a",{href:"#",class:"d-link d-link--muted"},"Muted link",-1),K=s(),O=a("a",{href:"#",class:"d-link d-link--success"},"Success link",-1),P=s(),Q=a("a",{href:"#",class:"d-link d-link--warning"},"Warning link",-1),X=c(` <div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-link<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-link d-link--danger<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-link d-link--muted<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-link d-link--success<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-link d-link--warning<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,2),Y=a("a",{href:"#",class:"d-link d-link--inverted"},"Inverted base link",-1),Z=c(` <div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-link d-link--inverted<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="classes" tabindex="-1"><a class="header-anchor" href="#classes" aria-hidden="true">#</a> Classes</h2> `,4),$={__name:"link.html",setup(aa){return(sa,na)=>{const o=e("code-well-header"),p=e("RouterLink"),i=e("icon-checkmark"),u=e("icon-close"),d=e("component-class-table");return r(),_("div",null,[n(o,null,{default:t(()=>[h]),_:1}),g,m,b,a("p",null,[f,v,q,x,n(p,{to:"/components/button.html"},{default:t(()=>[y]),_:1}),w]),B,a("div",U,[a("div",N,[a("h3",V,[n(i),C]),L,a("div",M,[n(l,null,{default:t(()=>[A]),_:1})])]),E,a("div",T,[a("h3",D,[n(u),I]),R,a("div",S,[n(l,null,{default:t(()=>[F]),_:1})])])]),H,n(o,null,{default:t(()=>[W,j,z,G,J,K,O,P,Q]),_:1}),X,n(o,{bgclass:"d-bgc-black-800"},{default:t(()=>[Y]),_:1}),Z,n(d,{"component-name":"link"})])}}};var oa=k($,[["__file","link.html.vue"]]);export{oa as default};
