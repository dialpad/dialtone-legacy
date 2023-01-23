import{_ as e,s as o,v as d,x as c,C as s,G as p,B as l,y as a,K as n}from"./framework-4a991d5d.js";const i={},r=a("h2",{id:"postcss",tabindex:"-1",class:"d-docsite--header-2"},[s("PostCSS "),a("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#postcss","aria-hidden":"true"},"#")],-1),u=a("p",{class:"d-docsite--paragraph"},[s("To create the responsive variations of classes we use "),a("a",{href:"https://www.npmjs.com/package/postcss"},"postcss"),s(` and our custom plugin
`),a("a",{href:"https://www.npmjs.com/package/@dialpad/postcss-responsive-variations"},"@dialpad/postcss-responsive-variations"),s(`.
This plugin takes the breakpoints and the classes you need to have responsive variations as arguments.`)],-1),h=a("h2",{id:"usage",tabindex:"-1",class:"d-docsite--header-2"},[s("Usage "),a("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#usage","aria-hidden":"true"},"#")],-1),k=a("div",{class:"d-fl-center d-w100p d-m8 d-p16 d-bgc-purple-300 d-bar4 d-fs-300 d-fw-bold d-ta-center"},"This is visible on all screens",-1),f=a("div",{class:"d-fl-center d-w100p d-m8 d-p16 d-bgc-purple-300 d-bar4 d-fs-300 d-fw-bold d-ta-center d-d-none xl:d-d-block"},"This is visible on extra large screens",-1),m=a("div",{class:"d-fl-center d-w100p d-m8 d-p16 d-bgc-purple-300 d-bar4 d-fs-300 d-fw-bold d-ta-center d-d-none lg:d-d-block"},"This is visible on large screens",-1),g=a("div",{class:"d-fl-center d-w100p d-m8 d-p16 d-bgc-purple-300 d-bar4 d-fs-300 d-fw-bold d-ta-center d-d-none md:d-d-block"},"This is visible on medium screens",-1),b=a("div",{class:"d-fl-center d-w100p d-m8 d-p16 d-bgc-purple-300 d-bar4 d-fs-300 d-fw-bold d-ta-center d-d-none sm:d-d-block"},"This is visible on small screens",-1),w=n(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-d-none xl:d-d-block<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-d-none lg:d-d-block<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-d-none md:d-d-block<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-d-none sm:d-d-block<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="classes" tabindex="-1" class="d-docsite--header-2">Classes <a class="header-anchor d-link d-docsite--link d-link" href="#classes" aria-hidden="true">#</a></h2>`,2),v=a("p",{class:"d-docsite--paragraph"},[s("To help keep prefixes concise, we use abbreviations. This syntax is used consistently across all responsive classes. As the viewport size grows, you can change an elements properties. For example, you can set an element to display normally, but be hidden at smaller sizes: "),a("code",null,".d-d-block .sm:d-d-none"),s(".")],-1),_=n('<table class="d-table dialtone-doc-table"><thead><tr><th scope="col" class="d-w25p">Class Prefix</th> <th scope="col" class="d-w25p">Media Query</th> <th scope="col">Description</th></tr></thead> <tbody><tr><th scope="row" class="d-ff-mono d-fc-purple-400 d-fw-normal d-fs-100">.xl:{class}</th> <td class="d-ff-mono d-fs-100">max-width: 1264px</td> <td class="d-ff-mono d-fs-100">The class is applied on extra large browser widths and below.</td></tr> <tr><th scope="row" class="d-ff-mono d-fc-purple-400 d-fw-normal d-fs-100">.lg:{class}</th> <td class="d-ff-mono d-fs-100">max-width: 980px</td> <td class="d-ff-mono d-fs-100">The class is applied on large browser widths and below.</td></tr> <tr><th scope="row" class="d-ff-mono d-fc-purple-400 d-fw-normal d-fs-100">.md:{class}</th> <td class="d-ff-mono d-fs-100">max-width: 640px</td> <td class="d-ff-mono d-fs-100">The class is applied on medium browser widths and below.</td></tr> <tr><th scope="row" class="d-ff-mono d-fc-purple-400 d-fw-normal d-fs-100">.sm:{class}</th> <td class="d-ff-mono d-fs-100">max-width: 480px</td> <td class="d-ff-mono d-fs-100">The class is applied on small browser widths and below.</td></tr></tbody></table>',1),x=a("p",{class:"d-docsite--paragraph"},[a("strong",null,"Note:"),s(" These breakpoints may change.")],-1);function T(q,y){const t=o("code-well-header");return d(),c("div",null,[r,s(),u,s(),h,s(),p(t,{bgclass:"d-bgc-purple-100"},{default:l(()=>[k,s(),f,s(),m,s(),g,s(),b]),_:1}),s(),w,s(),v,s(),_,s(),x])}const N=e(i,[["render",T],["__file","breakpoints.html.vue"]]);export{N as default};
