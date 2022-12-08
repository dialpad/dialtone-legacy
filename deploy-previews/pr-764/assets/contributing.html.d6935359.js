import{_ as t,o as n,c as i,a as e,b as s,d as a}from"./app.ab3aa649.js";const o={},d=s("h2",{id:"component-contribution",tabindex:"-1",class:"d-docsite--header-2 d-my24"},[e("Component contribution "),s("a",{class:"header-anchor d-link d-td-none d-docsite--link d-link",href:"#component-contribution","aria-hidden":"true"},"#")],-1),l=s("h3",{id:"design",tabindex:"-1",class:"d-docsite--header-3 d-my24"},[e("Design "),s("a",{class:"header-anchor d-link d-td-none d-docsite--link d-link",href:"#design","aria-hidden":"true"},"#")],-1),c=s("p",{class:"d-docsite--paragraph d-mb8 d-lh-400 d-wmx75ch"},"TBD",-1),r=s("h3",{id:"code",tabindex:"-1",class:"d-docsite--header-3 d-my24"},[e("Code "),s("a",{class:"header-anchor d-link d-td-none d-docsite--link d-link",href:"#code","aria-hidden":"true"},"#")],-1),h=s("p",{class:"d-docsite--paragraph d-mb8 d-lh-400 d-wmx75ch"},[e(`To make changes in our Design System please first read the
`),s("a",{href:"https://github.com/dialpad/dialtone/blob/staging/.github/CONTRIBUTING.md#contributing",class:"d-docsite--link d-link",target:"_blank",rel:"noopener noreferrer"},"CONTRIBUTING.md"),e(`
in our Dialtone repository.`)],-1),p=s("h2",{id:"adding-icons-and-illustrations",tabindex:"-1",class:"d-docsite--header-2 d-my24"},[e("Adding icons and illustrations "),s("a",{class:"header-anchor d-link d-td-none d-docsite--link d-link",href:"#adding-icons-and-illustrations","aria-hidden":"true"},"#")],-1),u=s("p",{class:"d-docsite--paragraph d-mb8 d-lh-400 d-wmx75ch"},[e(`Most icons in Dialtone are pulled from
`),s("a",{href:"https://material.io/resources/icons/?style=baseline",class:"d-docsite--link d-link",target:"_blank",rel:"noopener noreferrer"},"Google's Material Icon Library"),e(`.
Before introducing a new icon into Dialtone, ask the following questions:`)],-1),m=s("ol",{class:"d-docsite--ordered-list d-mb16"},[s("li",{class:"d-docsite--list-element d-my8"},[s("strong",null,"Is the use of this icon consistent with how it or similar icons are used in Dialtone?"),e(`
For a consistent, harmonious user experience, icons `),s("strong",null,"need"),e(` to be used consistently across Dialpad’s products.
An icon that represents one type of content or action in one area, must also be used similarly in another area.`)]),e(),s("li",{class:"d-docsite--list-element d-my8"},[s("strong",null,"Can I use another icon already in Dialtone to achieve the same purpose?"),e(`
Every icon introduced is yet another thing that our users must parse and learn. Whenever possible,
consider using a pre-existing icon that captures the essence of what you are trying to communicate
and clarify further with a label.`)])],-1),g=s("p",{class:"d-docsite--paragraph d-mb8 d-lh-400 d-wmx75ch"},"If you need to add an icon into Dialtone, here’s how you would go about doing that.",-1),b=a(`<ol class="d-docsite--ordered-list d-mb16"><li class="d-docsite--list-element d-my8"><p class="d-docsite--paragraph d-mb8 d-lh-400 d-wmx75ch"><strong>Has the Senior Designer or Design Team approved the use of this new icon in your designs?</strong>
If not, the designer should seek that out in a Design Review or 1:1 with their Senior Designer.</p></li> <li class="d-docsite--list-element d-my8"><p class="d-docsite--paragraph d-mb8 d-lh-400 d-wmx75ch">Once approved, the designer needs to add the icon to the Dialtone Icon Figma library file.
Instructions for how to properly add an icon into the library file are provided in that file.</p></li> <li class="d-docsite--list-element d-my8"><p class="d-docsite--paragraph d-mb8 d-lh-400 d-wmx75ch">Once added and exported from Figma, create a new branch in Dialtone with the word &quot;icon&quot; in the name.</p></li> <li class="d-docsite--list-element d-my8"><p class="d-docsite--paragraph d-mb8 d-lh-400 d-wmx75ch">Place the exported SVG file(s) in the appropriate folders:</p> <ul class="d-docsite--unordered-list d-mb16"><li class="d-docsite--list-element d-my8">For system icons: <code>./lib/build/svg/system/</code></li> <li class="d-docsite--list-element d-my8">For brand icons: <code>./lib/build/svg/brand/</code></li> <li class="d-docsite--list-element d-my8">For patterns: <code>./lib/build/svg/patterns/</code></li> <li class="d-docsite--list-element d-my8">For spot illustrations: <code>./lib/build/svg/spot/</code></li></ul></li> <li class="d-docsite--list-element d-my8"><p class="d-docsite--paragraph d-mb8 d-lh-400 d-wmx75ch"><strong>Add icon or pattern information to the correct data file.</strong> System, Brand, and Pattern SVGs all have
their own icon data file.</p> <ul class="d-docsite--unordered-list d-mb16"><li class="d-docsite--list-element d-my8">System icons: <code>./docs/_data/svg-system.json</code></li> <li class="d-docsite--list-element d-my8">For brand icons: <code>./docs/_data/svg-brand.json</code></li> <li class="d-docsite--list-element d-my8">For patterns: <code>./docs/_data/svg-patterns.json</code></li> <li class="d-docsite--list-element d-my8">For spot illustrations: <code>./docs/_data/svg-spot.json</code></li></ul> <p class="d-docsite--paragraph d-mb8 d-lh-400 d-wmx75ch">The data is pulled from the data files in the ordered it&#39;s entered, so you must place it in alphabetical order
in the data file. Here is an example of information you must provide is:</p> <div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">{</span>
  <span class="token key atrule">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Icon Name&quot;</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;file&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;actual-file-name&quot;</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;vue&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;[Icon|Pattern]Name&quot;</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;desc&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Description about the icon and where it&#39;s used.&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><ul class="d-docsite--unordered-list d-mb16"><li class="d-docsite--list-element d-my8"><strong>Name:</strong> This is the name that will appear on the Dialtone website.</li> <li class="d-docsite--list-element d-my8"><strong>File:</strong> This needs to be the exact name of the file minus the .svg file type.</li> <li class="d-docsite--list-element d-my8"><strong>Vue:</strong> This is what the compiled name will be. This is generated by Dialtone, using the above file name.
It adds the word Icon or Pattern depending on the SVG type. The file name is PascalCased next to it. For example,
a “label” file would be IconLabel. An “international-calling-alt” file would be IconInternationalCallingAlt.</li> <li class="d-docsite--list-element d-my8"><strong>Desc:</strong> This is a description about the icon and where it is used.</li></ul></li> <li class="d-docsite--list-element d-my8"><p class="d-docsite--paragraph d-mb8 d-lh-400 d-wmx75ch">Verify your changes have been updated on the website by running <code>npm run start</code> and navigating to <code>localhost:4000</code>.
If you would like to verify your final output svg file run <code>npm run build</code> and look in the <code>./lib/dist/svg</code> folder</p></li> <li class="d-docsite--list-element d-my8"><p class="d-docsite--paragraph d-mb8 d-lh-400 d-wmx75ch">Commit and push your branch to Dialtone.</p></li> <li class="d-docsite--list-element d-my8"><p class="d-docsite--paragraph d-mb8 d-lh-400 d-wmx75ch">Open a pull request.</p></li> <li class="d-docsite--list-element d-my8"><p class="d-docsite--paragraph d-mb8 d-lh-400 d-wmx75ch">Once approved it can be merged into staging and will go out in the next dialtone release.</p></li></ol>`,1);function y(f,k){return n(),i("div",null,[d,e(),l,e(),c,e(),r,e(),h,e(),p,e(),u,e(),m,e(),g,e(),b])}const _=t(o,[["render",y],["__file","contributing.html.vue"]]);export{_ as default};
