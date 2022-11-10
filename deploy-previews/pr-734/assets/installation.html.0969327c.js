import{_ as n,o as t,c as o,a as e,b as s,e as a}from"./app.56727463.js";const l={},i=s("h2",{id:"adding-dialtone-to-your-project",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#adding-dialtone-to-your-project","aria-hidden":"true"},"#"),e(" Adding Dialtone to your project")],-1),c=s("p",null,[e("To take advantage of Dialtone's customizations, classes, and variables in your project, you will want to install Dialtone via "),s("a",{href:"https://www.npmjs.com/",target:"_blank"},"npm"),e(".")],-1),d=s("div",{class:"language-bash ext-sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"npm"),e(),s("span",{class:"token function"},"install"),e(` @dialpad/dialtone
`)])])],-1),p=s("p",null,"Add the following line in your Less file:",-1),r=a(`<div class="language-less ext-less"><pre class="language-less"><code><span class="token variable">@import</span> <span class="token string">&quot;your/path/to/dialtone.less&quot;</span><span class="token punctuation">;</span>
</code></pre></div><p>If you only need access to Dialtone&#39;s variables and customizations to build a file and don&#39;t need the whole library exported, use this line instead in your Less file:</p>`,2),u=a(`<div class="language-less ext-less"><pre class="language-less"><code><span class="token variable">@import</span> <span class="token punctuation">(</span>reference<span class="token punctuation">)</span> <span class="token string">&quot;your/path/to/dialtone.less&quot;</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="theming" tabindex="-1"><a class="header-anchor" href="#theming" aria-hidden="true">#</a> Theming</h2>`,2),h=s("p",null,[e("To customize your Dialtone installation, create a new Less file in the "),s("code",null,"/lib/build/less/themes/"),e(" folder. By default this will compile during build, which can be added as an additional CSS file in your page "),s("code",null,"head"),e(".")],-1),g=a(`<div class="language-less ext-less"><pre class="language-less"><code><span class="token variable">@import</span> <span class="token string">&quot;your/path/to/dialtone.less&quot;</span><span class="token punctuation">;</span>
</code></pre></div><p>If you only need access to Dialtone&#39;s variables and customizations to build a file and don&#39;t need the whole library exported, use this line instead in your Less file:</p>`,2),_=a(`<div class="language-less ext-less"><pre class="language-less"><code><span class="token variable">@import</span> <span class="token punctuation">(</span>reference<span class="token punctuation">)</span> <span class="token string">&quot;your/path/to/dialtone.less&quot;</span><span class="token punctuation">;</span>
</code></pre></div>`,1);function f(m,k){return t(),o("div",null,[i,e(),c,e(),d,p,e(),r,e(),u,e(),h,e(),g,e(),_])}var v=n(l,[["render",f],["__file","installation.html.vue"]]);export{v as default};
