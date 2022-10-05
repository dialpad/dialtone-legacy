import{_ as a,o as e,c as s,e as n}from"./app.dd324e32.js";const t={},o=n(`<h2 id="adding-dialtone-to-your-project" tabindex="-1"><a class="header-anchor" href="#adding-dialtone-to-your-project" aria-hidden="true">#</a> Adding Dialtone To Your Project</h2> <p>To take advantage of Dialtone&#39;s customizations, classes, and variables in your project, you will want to install Dialtone via <a href="https://www.npmjs.com/" target="_blank">npm</a>.</p> <div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> @dialpad/dialtone
</code></pre></div><p>Add the following line in your Less file:</p> <div class="language-less ext-less"><pre class="language-less"><code><span class="token variable">@import</span> <span class="token string">&quot;your/path/to/dialtone.less&quot;</span><span class="token punctuation">;</span>
</code></pre></div><p>If you only need access to Dialtone&#39;s variables and customizations to build a file and don&#39;t need the whole library exported, use this line instead in your Less file:</p> <div class="language-less ext-less"><pre class="language-less"><code><span class="token variable">@import</span> <span class="token punctuation">(</span>reference<span class="token punctuation">)</span> <span class="token string">&quot;your/path/to/dialtone.less&quot;</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="theming" tabindex="-1"><a class="header-anchor" href="#theming" aria-hidden="true">#</a> Theming</h2> <p>To customize your Dialtone installation, create a new Less file in the <code>/lib/build/less/themes/</code> folder. By default this will compile during build, which can be added as an additional CSS file in your page <code>head</code>.</p> <div class="language-less ext-less"><pre class="language-less"><code><span class="token variable">@import</span> <span class="token string">&quot;your/path/to/dialtone.less&quot;</span><span class="token punctuation">;</span>
</code></pre></div><p>If you only need access to Dialtone&#39;s variables and customizations to build a file and don&#39;t need the whole library exported, use this line instead in your Less file:</p> <div class="language-less ext-less"><pre class="language-less"><code><span class="token variable">@import</span> <span class="token punctuation">(</span>reference<span class="token punctuation">)</span> <span class="token string">&quot;your/path/to/dialtone.less&quot;</span><span class="token punctuation">;</span>
</code></pre></div>`,19),l=[o];function i(c,p){return e(),s("div",null,l)}var r=a(t,[["render",i],["__file","installation.html.vue"]]);export{r as default};
