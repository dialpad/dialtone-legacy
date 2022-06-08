import{_ as e,r as o,o as p,c,b as d,w as l,F as i,d as n,a as s,e as a}from"./app.9b20db47.js";const r={},u=n(`<h2 id="postcss" tabindex="-1"><a class="header-anchor" href="#postcss" aria-hidden="true">#</a> PostCSS</h2> <p>To create the responsive variations of classes we use <a href="https://www.npmjs.com/package/postcss">postcss</a> and our custom plugin
<a href="https://www.npmjs.com/package/@dialpad/postcss-responsive-variations">@dialpad/postcss-responsive-variations</a>.
This plugin takes the breakpoints and the classes you need to have responsive variations as arguments.</p> <h2 id="classes" tabindex="-1"><a class="header-anchor" href="#classes" aria-hidden="true">#</a> Classes</h2> <p>To help keep prefixes concise, we use abbreviations. This syntax is used consistently across all responsive classes. As the viewport size grows, you can change an elements properties. For example, you can set an element to display normally, but be hidden at smaller sizes: <code>.d-d-block .sm:d-d-none</code>.</p> <table class="d-table"><thead><tr><th scope="col" class="d-w25p">Class Prefix</th> <th scope="col" class="d-w25p">Media Query</th> <th scope="col">Description</th></tr></thead> <tbody><tr><th scope="row" class="d-ff-mono d-fc-purple d-fw-normal d-fs12">.xl:{class}</th> <td class="d-ff-mono d-fc-orange d-fs12">max-width: 1264px</td> <td class="d-ff-mono d-fc-orange d-fs12">The class is applied on extra large browser widths and below.</td></tr> <tr><th scope="row" class="d-ff-mono d-fc-purple d-fw-normal d-fs12">.lg:{class}</th> <td class="d-ff-mono d-fc-orange d-fs12">max-width: 980px</td> <td class="d-ff-mono d-fc-orange d-fs12">The class is applied on large browser widths and below.</td></tr> <tr><th scope="row" class="d-ff-mono d-fc-purple d-fw-normal d-fs12">.md:{class}</th> <td class="d-ff-mono d-fc-orange d-fs12">max-width: 640px</td> <td class="d-ff-mono d-fc-orange d-fs12">The class is applied on medium browser widths and below.</td></tr> <tr><th scope="row" class="d-ff-mono d-fc-purple d-fw-normal d-fs12">.sm:{class}</th> <td class="d-ff-mono d-fc-orange d-fs12">max-width: 480px</td> <td class="d-ff-mono d-fc-orange d-fs12">The class is applied on small browser widths and below.</td></tr></tbody></table> <p><strong>Note:</strong> These breakpoints may change.</p> <h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2> `,14),h=s("div",{class:"d-fl-center d-w100p d-m8 d-p16 d-bgc-purple-300 d-bar4 d-fs20 d-fw-bold d-ta-center"},"This is visible on all screens",-1),f=a(),k=s("div",{class:"d-fl-center d-w100p d-m8 d-p16 d-bgc-purple-300 d-bar4 d-fs20 d-fw-bold d-ta-center d-d-none xl:d-d-block"},"This is visible on extra large screens",-1),g=a(),m=s("div",{class:"d-fl-center d-w100p d-m8 d-p16 d-bgc-purple-300 d-bar4 d-fs20 d-fw-bold d-ta-center d-d-none lg:d-d-block"},"This is visible on large screens",-1),b=a(),w=s("div",{class:"d-fl-center d-w100p d-m8 d-p16 d-bgc-purple-300 d-bar4 d-fs20 d-fw-bold d-ta-center d-d-none md:d-d-block"},"This is visible on medium screens",-1),v=a(),_=s("div",{class:"d-fl-center d-w100p d-m8 d-p16 d-bgc-purple-300 d-bar4 d-fs20 d-fw-bold d-ta-center d-d-none sm:d-d-block"},"This is visible on small screens",-1),x=n(` <div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-d-none xl:d-d-block<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-d-none lg:d-d-block<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-d-none md:d-d-block<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-d-none sm:d-d-block<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,2);function T(q,y){const t=o("code-well-header");return p(),c(i,null,[u,d(t,{bgclass:"d-bgc-purple-100"},{default:l(()=>[h,f,k,g,m,b,w,v,_]),_:1}),x],64)}var N=e(r,[["render",T],["__file","breakpoints.html.vue"]]);export{N as default};
