import{_ as a,v as n,x as o,C as e,y as s,J as t}from"./framework-c7d7d111.js";const i={},l=s("h2",{id:"component-contribution",tabindex:"-1",class:"d-docsite--header-2"},[e("Component contribution "),s("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#component-contribution","aria-hidden":"true"},"#")],-1),d=s("h3",{id:"design",tabindex:"-1",class:"d-docsite--header-3"},[e("Design "),s("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#design","aria-hidden":"true"},"#")],-1),c=s("p",{class:"d-docsite--paragraph"},"TBD",-1),r=s("h3",{id:"code",tabindex:"-1",class:"d-docsite--header-3"},[e("Code "),s("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#code","aria-hidden":"true"},"#")],-1),p=s("p",{class:"d-docsite--paragraph"},[e(`To make changes in our Design System please first read the
`),s("a",{href:"https://github.com/dialpad/dialtone/blob/staging/.github/CONTRIBUTING.md#contributing",class:"d-docsite--link d-link",target:"_blank",rel:"noopener noreferrer"},"CONTRIBUTING.md"),e(`
in our Dialtone repository.`)],-1),u=s("h2",{id:"adding-icons-and-illustrations",tabindex:"-1",class:"d-docsite--header-2"},[e("Adding icons and illustrations "),s("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#adding-icons-and-illustrations","aria-hidden":"true"},"#")],-1),h=s("p",{class:"d-docsite--paragraph"},"If you need to add an icon into Dialtone, here’s how you would go about doing that.",-1),g=s("h3",{id:"for-system-icons",tabindex:"-1",class:"d-docsite--header-3"},[e("For system icons "),s("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#for-system-icons","aria-hidden":"true"},"#")],-1),m=t(`<ol class="d-docsite--ordered-list"><li class="d-docsite--list-element"><p class="d-docsite--paragraph">Create a new branch in <a href="https://github.com/dialpad/dialtone-icons" title="Dialtone Icons" class="d-docsite--link d-link" target="_blank" rel="noopener noreferrer">dialtone-icons</a> repo starting with &quot;feat/&quot; in the name.</p></li> <li class="d-docsite--list-element"><p class="d-docsite--paragraph">Place the exported SVG file(s) in the appropriate folder category inside <code>./src/svg/</code></p></li> <li class="d-docsite--list-element"><p class="d-docsite--paragraph">If you need to add keywords related to the icon.</p> <ul class="d-docsite--unordered-list"><li class="d-docsite--list-element">Add the icon name to <code>./src/icons.json</code> into the correct category.</li> <li class="d-docsite--list-element">Add the keywords array as the value. e.g.</li></ul> <div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
   <span class="token property">&quot;arrows&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
     <span class="token property">&quot;arrow-left&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;arrow&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;left&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;direction&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
     ...
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></li> <li class="d-docsite--list-element"><p class="d-docsite--paragraph">Commit and push your branch to <a href="https://github.com/dialpad/dialtone-icons" title="Dialtone Icons" class="d-docsite--link d-link" target="_blank" rel="noopener noreferrer">dialtone-icons</a>.</p></li> <li class="d-docsite--list-element"><p class="d-docsite--paragraph">Open a pull request.</p></li> <li class="d-docsite--list-element"><p class="d-docsite--paragraph">Once approved it can be merged into main and will go out in the next dialtone-icons release.</p></li></ol>`,1),k=s("h3",{id:"for-brand-icons-and-spot-illustrations",tabindex:"-1",class:"d-docsite--header-3"},[e("For brand icons and spot illustrations "),s("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#for-brand-icons-and-spot-illustrations","aria-hidden":"true"},"#")],-1),b=t(`<ol class="d-docsite--ordered-list"><li class="d-docsite--list-element"><p class="d-docsite--paragraph">Create a new branch in [dialtone] repo starting with &quot;brand-icon/&quot; or &quot;spot-illustration/&quot; in the name.</p></li> <li class="d-docsite--list-element"><p class="d-docsite--paragraph">Place the exported SVG file(s) in the appropriate folders:</p> <ul class="d-docsite--unordered-list"><li class="d-docsite--list-element">For brand icons: <code>./lib/build/svg/brand/</code></li> <li class="d-docsite--list-element">For spot illustrations: <code>./lib/build/svg/spot/</code></li></ul></li> <li class="d-docsite--list-element"><p class="d-docsite--paragraph"><strong>Add icon or pattern information to the correct data file.</strong> Brand SVGs and Spot illustrations have
their own data file.</p> <ul class="d-docsite--unordered-list"><li class="d-docsite--list-element">For brand icons: <code>./docs/_data/svg-brand.json</code></li> <li class="d-docsite--list-element">For spot illustrations: <code>./docs/_data/svg-spot.json</code></li></ul> <p class="d-docsite--paragraph">The data is pulled from the data files in the ordered it&#39;s entered, so you must place it in alphabetical order
in the data file. Here is an example of information you must provide is:</p> <div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">{</span>
  <span class="token key atrule">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Icon Name&quot;</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;file&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;actual-file-name&quot;</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;vue&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;[Icon|Pattern]Name&quot;</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;desc&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Description about the icon and where it&#39;s used.&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><ul class="d-docsite--unordered-list"><li class="d-docsite--list-element"><strong>Name:</strong> This is the name that will appear on the Dialtone website.</li> <li class="d-docsite--list-element"><strong>File:</strong> This needs to be the exact name of the file minus the .svg file type.</li> <li class="d-docsite--list-element"><strong>Vue:</strong> This is what the compiled name will be. This is generated by Dialtone, using the above file name.
It adds the word Icon or Pattern depending on the SVG type. The file name is PascalCased next to it. For example,
a “label” file would be IconLabel. An “international-calling-alt” file would be IconInternationalCallingAlt.</li> <li class="d-docsite--list-element"><strong>Desc:</strong> This is a description about the icon and where it is used.</li></ul></li> <li class="d-docsite--list-element"><p class="d-docsite--paragraph">Verify your changes have been updated on the website by running <code>npm run start</code> and navigating to <code>localhost:4000</code>.
If you would like to verify your final output svg file run <code>npm run build</code> and look in the <code>./lib/dist/svg</code> folder</p></li> <li class="d-docsite--list-element"><p class="d-docsite--paragraph">Commit and push your branch to Dialtone.</p></li> <li class="d-docsite--list-element"><p class="d-docsite--paragraph">Open a pull request.</p></li> <li class="d-docsite--list-element"><p class="d-docsite--paragraph">Once approved it can be merged into staging and will go out in the next dialtone release.</p></li></ol>`,1);function f(_,y){return n(),o("div",null,[l,e(),d,e(),c,e(),r,e(),p,e(),u,e(),h,e(),g,e(),m,e(),k,e(),b])}const v=a(i,[["render",f],["__file","contributing.html.vue"]]);export{v as default};
