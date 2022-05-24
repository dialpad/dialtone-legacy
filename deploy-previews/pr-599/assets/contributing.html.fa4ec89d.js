import{_ as i,r as s,o as r,c as l,a as t,b as o,F as c,d as a,e}from"./app.a4abc0a7.js";const d={},p=a('<h2 id="component-contribution" tabindex="-1"><a class="header-anchor" href="#component-contribution" aria-hidden="true">#</a> Component contribution</h2><h3 id="design" tabindex="-1"><a class="header-anchor" href="#design" aria-hidden="true">#</a> Design</h3><p>TBD</p><h3 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h3>',4),h=e("To make changes in our Design System please first read the "),u={href:"https://github.com/dialpad/dialtone/blob/staging/.github/CONTRIBUTING.md#contributing",target:"_blank",rel:"noopener noreferrer"},g=e("CONTRIBUTING.md"),m=e(" in our Dialtone repository."),b=t("h2",{id:"adding-icons-and-illustrations",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#adding-icons-and-illustrations","aria-hidden":"true"},"#"),e(" Adding icons and illustrations")],-1),f=e("Most icons in Dialtone are pulled from "),y={href:"https://material.io/resources/icons/?style=baseline",target:"_blank",rel:"noopener noreferrer"},_=e("Google's Material Icon Library"),w=e(". Before introducing a new icon into Dialtone, ask the following questions:"),k=a(`<ol><li><strong>Is the use of this icon consistent with how it or similar icons are used in Dialtone?</strong><br> For a consistent, harmonious user experience, icons <strong>need</strong> to be used consistently across Dialpad\u2019s products. An icon that represents one type of content or action in one area, must also be used similarly in another area.</li><li><strong>Can I use another icon already in Dialtone to achieve the same purpose?</strong><br> Every icon introduced is yet another thing that our users must parse and learn. Whenever possible, consider using a pre-existing icon that captures the essence of what you are trying to communicate and clarify further with a label.</li></ol><p>If you need to add an icon into Dialtone, here\u2019s how you would go about doing that.</p><ol><li><p><strong>Has the Senior Designer or Design Team approved the use of this new icon in your designs?</strong><br> If not, the designer should seek that out in a Design Review or 1:1 with their Senior Designer.</p></li><li><p>Once approved, the designer needs to add the icon to the Dialtone Icon Figma library file. Instructions for how to properly add an icon into the library file are provided in that file.</p></li><li><p>Once added and exported from Figma, create a new branch in Dialtone with the word &quot;icon&quot; in the name.</p></li><li><p>Place the exported SVG file(s) in the appropriate folders:</p><ul><li>For system icons: <code>./lib/build/svg/system/</code></li><li>For brand icons: <code>./lib/build/svg/brand/</code></li><li>For patterns: <code>./lib/build/svg/patterns/</code></li><li>For spot illustrations: <code>./lib/build/svg/spot/</code></li></ul></li><li><p><strong>Add icon or pattern information to the correct data file.</strong> System, Brand, and Pattern SVGs all have their own icon data file.</p><ul><li>System icons: <code>./docs/_data/svg-system.json</code></li><li>For brand icons: <code>./docs/_data/svg-brand.json</code></li><li>For patterns: <code>./docs/_data/svg-patterns.json</code></li><li>For spot illustrations: <code>./docs/_data/svg-spot.json</code></li></ul><p>The data is pulled from the data files in the ordered it&#39;s entered, so you must place it in alphabetical order in the data file. Here is an example of information you must provide is:</p><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token punctuation">{</span>
  <span class="token key atrule">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Icon Name&quot;</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;file&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;actual-file-name&quot;</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;vue&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;[Icon|Pattern]Name&quot;</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;desc&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Description about the icon and where it&#39;s used.&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li><strong>Name:</strong> This is the name that will appear on the Dialtone website.</li><li><strong>File:</strong> This needs to be the exact name of the file minus the .svg file type.</li><li><strong>Vue:</strong> This is what the compiled name will be. This is generated by Dialtone, using the above file name. It adds the word Icon or Pattern depending on the SVG type. The file name is PascalCased next to it. For example, a \u201Clabel\u201D file would be IconLabel. An \u201Cinternational-calling-alt\u201D file would be IconInternationalCallingAlt.</li><li><strong>Desc:</strong> This is a description about the icon and where it is used.</li></ul></li><li><p>Verify your changes have been updated on the website by running <code>npm run start</code> and navigating to <code>localhost:4000</code>. If you would like to verify your final output svg file run <code>npm run build</code> and look in the <code>./lib/dist/svg</code> folder</p></li><li><p>Commit and push your branch to Dialtone.</p></li><li><p>Open a pull request.</p></li><li><p>Once approved it can be merged into staging and will go out in the next dialtone release.</p></li></ol><p><strong>A note on theming</strong></p><p>Spot Illustrations allow for theming, meaning the primary color of the illustration will change when the theme changes. If your spot illustration svg contains a fill or a stroke with the dialtone primary color <code>#6C3DFF</code> then it will automatically change when the theme&#39;s primary color changes.</p><p>You may often wish to derive lighter or darker colors based on the primary color when making a spot illustration. In these instances it is recommended to set opacity while still using the primary color as the base color so these colors will also change with the theme.</p>`,6);function v(I,D){const n=s("ExternalLinkIcon");return r(),l(c,null,[p,t("p",null,[h,t("a",u,[g,o(n)]),m]),b,t("p",null,[f,t("a",y,[_,o(n)]),w]),k],64)}var x=i(d,[["render",v],["__file","contributing.html.vue"]]);export{x as default};
