import{_ as e,r as o,o as p,c,b as d,w as l,e as n,a as s,d as a}from"./app.6bf27d57.js";const i={},r=n(`<h2 id="postcss" tabindex="-1"><a class="header-anchor" href="#postcss" aria-hidden="true">#</a> PostCSS</h2> <p>To create the responsive variations of classes we use <a href="https://www.npmjs.com/package/postcss">postcss</a> and our custom plugin
<a href="https://www.npmjs.com/package/@dialpad/postcss-responsive-variations">@dialpad/postcss-responsive-variations</a>.
This plugin takes the breakpoints and the classes you need to have responsive variations as arguments.</p> <h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2> `,6),u=s("div",{class:"d-fl-center d-w100p d-m8 d-p16 d-bgc-purple-300 d-bar4 d-fs20 d-fw-bold d-ta-center"},"This is visible on all screens",-1),h=a(),f=s("div",{class:"d-fl-center d-w100p d-m8 d-p16 d-bgc-purple-300 d-bar4 d-fs20 d-fw-bold d-ta-center d-d-none xl:d-d-block"},"This is visible on extra large screens",-1),k=a(),g=s("div",{class:"d-fl-center d-w100p d-m8 d-p16 d-bgc-purple-300 d-bar4 d-fs20 d-fw-bold d-ta-center d-d-none lg:d-d-block"},"This is visible on large screens",-1),m=a(),b=s("div",{class:"d-fl-center d-w100p d-m8 d-p16 d-bgc-purple-300 d-bar4 d-fs20 d-fw-bold d-ta-center d-d-none md:d-d-block"},"This is visible on medium screens",-1),w=a(),v=s("div",{class:"d-fl-center d-w100p d-m8 d-p16 d-bgc-purple-300 d-bar4 d-fs20 d-fw-bold d-ta-center d-d-none sm:d-d-block"},"This is visible on small screens",-1),_=n(` <div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-d-none xl:d-d-block<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-d-none lg:d-d-block<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-d-none md:d-d-block<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-d-none sm:d-d-block<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="classes" tabindex="-1"><a class="header-anchor" href="#classes" aria-hidden="true">#</a> Classes</h2> <p>To help keep prefixes concise, we use abbreviations. This syntax is used consistently across all responsive classes. As the viewport size grows, you can change an elements properties. For example, you can set an element to display normally, but be hidden at smaller sizes: <code>.d-d-block .sm:d-d-none</code>.</p> <table class="d-table dialtone-doc-table"><thead><tr><th scope="col" class="d-w25p">Class Prefix</th> <th scope="col" class="d-w25p">Media Query</th> <th scope="col">Description</th></tr></thead> <tbody><tr><th scope="row" class="d-ff-mono d-fc-purple d-fw-normal d-fs12">.xl:{class}</th> <td class="d-ff-mono d-fc-orange d-fs12">max-width: 1264px</td> <td class="d-ff-mono d-fc-orange d-fs12">The class is applied on extra large browser widths and below.</td></tr> <tr><th scope="row" class="d-ff-mono d-fc-purple d-fw-normal d-fs12">.lg:{class}</th> <td class="d-ff-mono d-fc-orange d-fs12">max-width: 980px</td> <td class="d-ff-mono d-fc-orange d-fs12">The class is applied on large browser widths and below.</td></tr> <tr><th scope="row" class="d-ff-mono d-fc-purple d-fw-normal d-fs12">.md:{class}</th> <td class="d-ff-mono d-fc-orange d-fs12">max-width: 640px</td> <td class="d-ff-mono d-fc-orange d-fs12">The class is applied on medium browser widths and below.</td></tr> <tr><th scope="row" class="d-ff-mono d-fc-purple d-fw-normal d-fs12">.sm:{class}</th> <td class="d-ff-mono d-fc-orange d-fs12">max-width: 480px</td> <td class="d-ff-mono d-fc-orange d-fs12">The class is applied on small browser widths and below.</td></tr></tbody></table> <p><strong>Note:</strong> These breakpoints may change.</p>`,9);function x(T,q){const t=o("code-well-header");return p(),c("div",null,[r,d(t,{bgclass:"d-bgc-purple-100"},{default:l(()=>[u,h,f,k,g,m,b,w,v]),_:1}),_])}var C=e(i,[["render",x],["__file","breakpoints.html.vue"]]);export{C as default};
