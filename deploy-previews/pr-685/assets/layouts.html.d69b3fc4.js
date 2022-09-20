import{_ as g,o as p,c as e,b as c,w as o,e as n,r as l,a,F as r,f as k,t as d,d as s}from"./app.1fe57ccb.js";const h={},f=n(`<h2 id="sidebar" tabindex="-1"><a class="header-anchor" href="#sidebar" aria-hidden="true">#</a> Sidebar</h2> <p>Use <code>.d-gl-sidebar</code> to create a simple 2-column layout with a sidebar and main content area.</p> <h3>CSS Variables</h3> <table class="d-table dialtone-doc-table"><thead><tr><th scope="col" class="d-w25p">CSS Var</th> <th scope="col">Output</th></tr></thead> <tbody><tr><th scope="row" class="d-ff-mono d-fc-purple-400 d-fw-normal d-fs-100">var(--sidebar-width)</th> <td class="d-ff-mono d-fs-100">minmax(20rem, 30rem);</td></tr> <tr><th scope="row" class="d-ff-mono d-fc-purple-400 d-fw-normal d-fs-100">var(--content-width)</th> <td class="d-ff-mono d-fs-100">minmax(32rem, 90ch);</td></tr></tbody></table> <h3>Example</h3> <aside class="d-bar8 d-of-hidden"><header class="d-fl-center d-fd-column d-p24 d-bgc-purple-100 d-bgo50 d-w100p d-hmn216"><div class="d-d-grid d-gl-sidebar d-gg16 d-p16 d-w100p d-hmn216 d-bar8 d-bgc-purple-100 d-of-auto" style="--sidebar-width:minmax(10rem, 20rem);"><div class="d-ga-sidebar d-fl-center d-p16 d-bgc-purple-300 d-bar4 d-fs-300 d-fw-bold">Sidebar</div> <div class="d-ga-content d-fl-center d-p16 d-bgc-purple-300 d-bar4 d-fs-300 d-fw-bold">Content</div></div></header></aside> <div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-d-grid d-gg16 d-gl-sidebar<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-ga-sidebar<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-ga-content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="header" tabindex="-1"><a class="header-anchor" href="#header" aria-hidden="true">#</a> Header</h2> <p>Use <code>.d-gl-header</code> to create a simple 2-row layout with a header area and main content area. Usually this is nested within a <code>.d-gl-sidebar</code> content area.</p> <h3>CSS Variables</h3> <table class="d-table dialtone-doc-table"><thead><tr><th scope="col" class="d-w25p">CSS Var</th> <th scope="col">Output</th></tr></thead> <tbody><tr><th scope="row" class="d-ff-mono d-fc-purple-400 d-fw-normal d-fs-100">var(--header-height)</th> <td class="d-ff-mono d-fs-100">minmax(6.4rem, min-content);</td></tr> <tr><th scope="row" class="d-ff-mono d-fc-purple-400 d-fw-normal d-fs-100">var(--content-height)</th> <td class="d-ff-mono d-fs-100">minmax(64rem, max-content);</td></tr></tbody></table> <h3>Example</h3> <aside class="d-bar8 d-of-hidden"><header class="d-fl-center d-fd-column d-p24 d-bgc-green-100 d-bgo50 d-w100p d-hmn216 d-of-auto"><div class="d-d-grid d-gl-sidebar d-gg16 d-p16 d-w100p d-hmn216 d-bar8 d-bgc-green-100" style="--sidebar-width:minmax(10rem, 20rem);"><div class="d-ga-sidebar d-fl-center d-p16 d-bgc-green-200 d-bar4 d-fs-300 d-fw-bold d-o50">Sidebar</div> <div class="d-ga-content d-d-grid d-gl-header d-gg16 d-p16 d-bgc-green-100 d-bar4 d-fs-300 d-fw-bold" style="--content-height:minmax(24rem, max-content);"><div class="d-ga-header d-fl-center d-p16 d-bgc-green-200 d-bar4 d-fs-300 d-fw-bold">Header</div> <div class="d-ga-content d-fl-center d-p16 d-bgc-green-200 d-bar4 d-fs-300 d-fw-bold">Content</div></div></div></header></aside> <div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-d-grid d-gg16 d-gl-sidebar<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-ga-sidebar<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-ga-content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-d-grid d-gg16 d-gl-header<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-ga-header<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-ga-content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="columns" tabindex="-1"><a class="header-anchor" href="#columns" aria-hidden="true">#</a> Columns</h2> <p>Use <code>.d-g-cols{n}</code> to create a multi-column layout.</p> <h3>Classes</h3> `,32),m={scope:"row",class:"d-ff-mono d-fc-purple-400 d-fw-normal d-fs-100"},b=s(),v={class:"d-ff-mono d-fs-100"},w=n(` <h3>Example</h3> <aside class="d-bar8 d-of-hidden"><header class="d-fl-center d-fd-column d-p24 d-bgc-magenta-100 d-bgo50 d-w100p d-hmn216"><div class="d-d-grid d-g-cols4 d-gg16 d-p16 d-w100p d-hmn216 d-bar8 d-bgc-magenta-100"><div class="d-fl-center d-p16 d-bgc-magenta-100 d-bar4 d-fs-300 d-fw-bold">1</div> <div class="d-fl-center d-p16 d-bgc-magenta-100 d-bar4 d-fs-300 d-fw-bold">2</div> <div class="d-fl-center d-p16 d-bgc-magenta-100 d-bar4 d-fs-300 d-fw-bold">3</div> <div class="d-fl-center d-p16 d-bgc-magenta-100 d-bar4 d-fs-300 d-fw-bold">4</div> <div class="d-fl-center d-p16 d-bgc-magenta-100 d-bar4 d-fs-300 d-fw-bold">5</div> <div class="d-fl-center d-p16 d-bgc-magenta-100 d-bar4 d-fs-300 d-fw-bold">6</div> <div class="d-fl-center d-p16 d-bgc-magenta-100 d-bar4 d-fs-300 d-fw-bold">7</div> <div class="d-fl-center d-p16 d-bgc-magenta-100 d-bar4 d-fs-300 d-fw-bold">8</div></div></header></aside> <div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-d-grid d-gg16 d-g-cols4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>7<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="nesting-grids" tabindex="-1"><a class="header-anchor" href="#nesting-grids" aria-hidden="true">#</a> Nesting Grids</h2> <p>Unlike some CSS, CSS grid does not cascade beyond the parent and its direct children (<code>parent-element &gt; *</code>). We can use this to our advantage by being able to nest grids within each other without cascade errors.</p> `,10),q=a("div",{class:"d-d-grid d-g-cols2 d-gg16 d-p16 d-w100p d-hmn216 d-bar8 d-bgc-gold-100"},[a("div",{class:"d-fl-center d-p16 d-bgc-gold-200 d-bar4 d-fs-300 d-fw-bold"},"1"),s(),a("div",{class:"d-d-grid d-g-cols2 d-gg16 d-p16 d-bgc-gold-100 d-bar4 d-fs-300 d-fw-bold"},[a("div",{class:"d-fl-center d-p16 d-bgc-gold-200 d-bar4 d-fs-300 d-fw-bold"},"3"),s(),a("div",{class:"d-fl-center d-p16 d-bgc-gold-200 d-bar4 d-fs-300 d-fw-bold"},"4")])],-1),_=n(` <div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-d-grid d-gg16 d-g-cols2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-d-grid d-gg16 d-g-cols2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,2);function x(y,S){const u=l("utility-class-table"),i=l("code-well-header");return p(),e("div",null,[f,c(u,null,{content:o(()=>[a("tbody",null,[(p(),e(r,null,k([1,2,3,4,5,6,7,8,9,10,11,12],t=>a("tr",null,[a("th",m,".d-g-cols"+d(t),1),b,a("td",v,"grid-template-columns: repeat("+d(t)+",  minmax(0, 1fr)) !important;",1)])),64))])]),_:1}),w,c(i,{class:"d-fl-center d-fd-column d-p24 d-bgc-gold-100 d-bgo50 d-w100p d-hmn216",custom:""},{default:o(()=>[q]),_:1}),_])}var V=g(h,[["render",x],["__file","layouts.html.vue"]]);export{V as default};
