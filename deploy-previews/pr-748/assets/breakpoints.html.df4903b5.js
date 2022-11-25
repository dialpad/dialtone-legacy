import{_ as a,r as o,o as t,c as l,a as e,e as n,w as c,b as s,d as r}from"./app.5e51e3f0.js";const i={},p=s("h2",{id:"postcss",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#postcss","aria-hidden":"true"},"#"),e(" PostCSS")],-1),h=s("p",null,[e("To create the responsive variations of classes we use "),s("a",{href:"https://www.npmjs.com/package/postcss"},"postcss"),e(` and our custom plugin
`),s("a",{href:"https://www.npmjs.com/package/@dialpad/postcss-responsive-variations"},"@dialpad/postcss-responsive-variations"),e(`.
This plugin takes the breakpoints and the classes you need to have responsive variations as arguments.`)],-1),f=s("h2",{id:"usage",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#usage","aria-hidden":"true"},"#"),e(" Usage")],-1),m=s("div",{class:"d-fl-center d-w100p d-m8 d-p16 d-bgc-purple-300 d-bar4 d-fs-300 d-fw-bold d-ta-center"},"This is visible on all screens",-1),b=s("div",{class:"d-fl-center d-w100p d-m8 d-p16 d-bgc-purple-300 d-bar4 d-fs-300 d-fw-bold d-ta-center d-d-none xl:d-d-block"},"This is visible on extra large screens",-1),w=s("div",{class:"d-fl-center d-w100p d-m8 d-p16 d-bgc-purple-300 d-bar4 d-fs-300 d-fw-bold d-ta-center d-d-none lg:d-d-block"},"This is visible on large screens",-1),u=s("div",{class:"d-fl-center d-w100p d-m8 d-p16 d-bgc-purple-300 d-bar4 d-fs-300 d-fw-bold d-ta-center d-d-none md:d-d-block"},"This is visible on medium screens",-1),_=s("div",{class:"d-fl-center d-w100p d-m8 d-p16 d-bgc-purple-300 d-bar4 d-fs-300 d-fw-bold d-ta-center d-d-none sm:d-d-block"},"This is visible on small screens",-1),v=s("div",{class:"language-html","data-ext":"html"},[s("pre",{class:"language-html"},[s("code",null,`<div>...</div>
<div class="d-d-none xl:d-d-block">...</div>
<div class="d-d-none lg:d-d-block">...</div>
<div class="d-d-none md:d-d-block">...</div>
<div class="d-d-none sm:d-d-block">...</div>
`)])],-1),g=s("h2",{id:"classes",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#classes","aria-hidden":"true"},"#"),e(" Classes")],-1),x=s("p",null,[e("To help keep prefixes concise, we use abbreviations. This syntax is used consistently across all responsive classes. As the viewport size grows, you can change an elements properties. For example, you can set an element to display normally, but be hidden at smaller sizes: "),s("code",null,".d-d-block .sm:d-d-none"),e(".")],-1),k=r('<table class="d-table dialtone-doc-table"><thead><tr><th scope="col" class="d-w25p">Class Prefix</th> <th scope="col" class="d-w25p">Media Query</th> <th scope="col">Description</th></tr></thead> <tbody><tr><th scope="row" class="d-ff-mono d-fc-purple-400 d-fw-normal d-fs-100">.xl:{class}</th> <td class="d-ff-mono d-fs-100">max-width: 1264px</td> <td class="d-ff-mono d-fs-100">The class is applied on extra large browser widths and below.</td></tr> <tr><th scope="row" class="d-ff-mono d-fc-purple-400 d-fw-normal d-fs-100">.lg:{class}</th> <td class="d-ff-mono d-fs-100">max-width: 980px</td> <td class="d-ff-mono d-fs-100">The class is applied on large browser widths and below.</td></tr> <tr><th scope="row" class="d-ff-mono d-fc-purple-400 d-fw-normal d-fs-100">.md:{class}</th> <td class="d-ff-mono d-fs-100">max-width: 640px</td> <td class="d-ff-mono d-fs-100">The class is applied on medium browser widths and below.</td></tr> <tr><th scope="row" class="d-ff-mono d-fc-purple-400 d-fw-normal d-fs-100">.sm:{class}</th> <td class="d-ff-mono d-fs-100">max-width: 480px</td> <td class="d-ff-mono d-fs-100">The class is applied on small browser widths and below.</td></tr></tbody></table>',1),T=s("p",null,[s("strong",null,"Note:"),e(" These breakpoints may change.")],-1);function y(C,N){const d=o("code-well-header");return t(),l("div",null,[p,e(),h,e(),f,e(),n(d,{bgclass:"d-bgc-purple-100"},{default:c(()=>[m,e(),b,e(),w,e(),u,e(),_]),_:1}),e(),v,g,e(),x,e(),k,e(),T])}const B=a(i,[["render",y],["__file","breakpoints.html.vue"]]);export{B as default};
