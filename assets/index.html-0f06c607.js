import{_ as d,s as l,v as c,x as r,C as e,G as t,B as n,y as s,M as a}from"./framework-bc192251.js";const p={},h=s("h2",{id:"adding-dialtone-to-your-project",tabindex:"-1",class:"d-docsite--header-2"},[e("Adding Dialtone to your project "),s("a",{class:"header-anchor d-link d-td-none d-docsite--link d-link",href:"#adding-dialtone-to-your-project","aria-hidden":"true"},"#")],-1),u=s("p",{class:"d-docsite--paragraph"},[e("To take advantage of Dialtone's customizations, classes, and variables in your project, you will want to install Dialtone via "),s("a",{href:"https://www.npmjs.com/",target:"_blank"},"npm"),e(".")],-1),g=a(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> @dialpad/dialtone
</code></pre></div><p class="d-docsite--paragraph">Add the following line in your Less file:</p>`,2),k=a(`<div class="language-less" data-ext="less"><pre class="language-less"><code><span class="token variable">@import</span> <span class="token string">&quot;your/path/to/dialtone.less&quot;</span><span class="token punctuation">;</span>
</code></pre></div><p class="d-docsite--paragraph">If you only need access to Dialtone&#39;s variables and customizations to build a file and don&#39;t need the whole library exported, use this line instead in your Less file:</p>`,2),m=a(`<div class="language-less" data-ext="less"><pre class="language-less"><code><span class="token variable">@import</span> <span class="token punctuation">(</span>reference<span class="token punctuation">)</span> <span class="token string">&quot;your/path/to/dialtone.less&quot;</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="theming" tabindex="-1" class="d-docsite--header-2">Theming <a class="header-anchor d-link d-td-none d-docsite--link d-link" href="#theming" aria-hidden="true">#</a></h2>`,2),f=s("p",{class:"d-docsite--paragraph"},[e("To customize your Dialtone installation, create a new Less file in the "),s("code",null,"/lib/build/less/themes/"),e(" folder. By default this will compile during build, which can be added as an additional CSS file in your page "),s("code",null,"head"),e(".")],-1),b=a(`<div class="language-less" data-ext="less"><pre class="language-less"><code><span class="token variable">@import</span> <span class="token string">&quot;your/path/to/dialtone.less&quot;</span><span class="token punctuation">;</span>
</code></pre></div><p class="d-docsite--paragraph">If you only need access to Dialtone&#39;s variables and customizations to build a file and don&#39;t need the whole library exported, use this line instead in your Less file:</p>`,2),_=a(`<div class="language-less" data-ext="less"><pre class="language-less"><code><span class="token variable">@import</span> <span class="token punctuation">(</span>reference<span class="token punctuation">)</span> <span class="token string">&quot;your/path/to/dialtone.less&quot;</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="usage" tabindex="-1" class="d-docsite--header-2">Usage <a class="header-anchor d-link d-td-none d-docsite--link d-link" href="#usage" aria-hidden="true">#</a></h2>`,2),y=s("p",{class:"d-docsite--paragraph"},"A general overview of Dialtone's utility classes, CSS components, and Vue components.",-1),v=s("h3",{id:"utility-first",tabindex:"-1",class:"d-docsite--header-3"},[e("Utility-first "),s("a",{class:"header-anchor d-link d-td-none d-docsite--link d-link",href:"#utility-first","aria-hidden":"true"},"#")],-1),w=s("p",{class:"d-docsite--paragraph"},[e("Dialtone's CSS library offers a framework of utility-first classes. Each class is a small, "),s("a",{href:"https://css-tricks.com/lets-define-exactly-atomic-css/",target:"_blank"},"atomic style"),e(" declaration that, when chained together, should mitigate most situations in which custom CSS must be written. Just write these classes right in your mark-up and you're all set!")],-1),x=s("div",{class:"d-p16 d-bgc-black-600 d-fc-white"},"Box",-1),D=a(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-p16 d-bgc-black-600 d-fc-white<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p class="d-docsite--paragraph">In the above example, we used:</p>`,2),S={class:"d-docsite--unordered-list"},B={class:"d-docsite--list-element"},C=s("code",null,".d-p16",-1),T={class:"d-docsite--list-element"},q=s("code",null,".d-bgc-black-600",-1),I={class:"d-docsite--list-element"},N=s("code",null,".d-fc-white",-1),j=s("p",{class:"d-docsite--paragraph"},"Though an atomic CSS approach comes with many advantages, we know it also offers a notable disadvantage: reducing the CSS cascade. This is especially true for repeated UI elements, which can end up creating redundant mark-up. For these instances, Dialtone offers components.",-1),V=s("h3",{id:"components",tabindex:"-1",class:"d-docsite--header-3"},[e("Components "),s("a",{class:"header-anchor d-link d-td-none d-docsite--link d-link",href:"#components","aria-hidden":"true"},"#")],-1),z=s("p",{class:"d-docsite--paragraph"},[e("There are two methods to implement Dialtone components: Vue (recommended) and CSS. Vue is the preferred method as it's more robust and readily accessible out-of-the-box. "),s("a",{href:"https://vue.dialpad.design/",target:"_blank"},"Get started with Vue components."),e(`
In the event Dialtone Vue doesn't suit your needs, Dialtone's CSS library offers the same set of components. These may require more work to implement and make accessible, but will work in a pinch.`)],-1),A=s("button",{class:"d-btn d-btn--primary"},"Primary Button",-1),P=a(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-btn d-btn--primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Primary Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="writing-css" tabindex="-1" class="d-docsite--header-3">Writing CSS <a class="header-anchor d-link d-td-none d-docsite--link d-link" href="#writing-css" aria-hidden="true">#</a></h3>`,2),L=s("p",{class:"d-docsite--paragraph"},[e("In the event you need to write CSS, use "),s("a",{href:"http://getbem.com/",target:"_blank"},"BEM (Block Element Modifier)"),e(". This is a simple, common naming convention that helps make our CSS easier to read and understand. If you aren't familiar with the approach, here's a "),s("a",{href:"http://getbem.com/introduction/",target:"_blank"},"quick synposis"),e(":")],-1),M=a('<ul class="d-docsite--unordered-list"><li class="d-docsite--list-element"><strong>Block:</strong> A parent entity that is meaningful on its own. For example: <code>.d-input</code></li> <li class="d-docsite--list-element"><strong>Element:</strong> A child that is meaningful only in relation to its parent. For example: <code>.d-input__label</code></li> <li class="d-docsite--list-element"><strong>Modifier:</strong> A modifying flag on a Block or Element that changes appearance or behavior. For example: <code>.d-input--lg</code></li></ul>',1),O=s("h3",{id:"backbone",tabindex:"-1",class:"d-docsite--header-3"},[e("Backbone "),s("a",{class:"header-anchor d-link d-td-none d-docsite--link d-link",href:"#backbone","aria-hidden":"true"},"#")],-1),E=s("p",{class:"d-docsite--paragraph"},"For internal Dialpad projects, using Dialtone in Backbone should be rare, since most front end changes are now being implemented using Vue. Regardless, if you find yourself needing to use Dialtone in Backbone, there are a few steps:",-1),F=a('<ol class="d-docsite--ordered-list"><li class="d-docsite--list-element">Create a <code>.less</code> file for your feature, if one does not yet exist.</li> <li class="d-docsite--list-element">Import this <code>.less</code> file into the relevant base less file e.g. <code>single.less</code>, <code>web.less</code> etc.</li> <li class="d-docsite--list-element">Import Dialtone into your <code>.less</code> file and compose your styles like shown in the example above.</li></ol>',1),G=s("h3",{id:"polyfills",tabindex:"-1",class:"d-docsite--header-3"},[e("Polyfills "),s("a",{class:"header-anchor d-link d-td-none d-docsite--link d-link",href:"#polyfills","aria-hidden":"true"},"#")],-1),R=s("p",{class:"d-docsite--paragraph"},[e("In order to make Dialtone work across our supported browsers you need to manually install "),s("strong",null,"focus-visible"),e(" polyfill and "),s("strong",null,"postcss-focus-visible"),e(" plugin.")],-1),U=a('<ol class="d-docsite--ordered-list"><li class="d-docsite--list-element">Focus-visible adds a listener to every element that should be keyboard-focused only and when the element is focused, it adds the .focus-visible class to it, follow the <a href="https://github.com/WICG/focus-visible#installation" class="d-docsite--link d-link" target="_blank" rel="noopener noreferrer">focus-visible</a> installation instructions.</li> <li class="d-docsite--list-element">Postcss focus-visible plugin adds a .focus-visible class for every :focus-visible class found in your css, follow the <a href="https://www.npmjs.com/package/postcss-focus-visible" class="d-docsite--link d-link" target="_blank" rel="noopener noreferrer">postcss-focus-visible</a> installation instructions.</li></ol>',1),W=s("h3",{id:"box-sizing",tabindex:"-1",class:"d-docsite--header-3"},[e("Box-sizing "),s("a",{class:"header-anchor d-link d-td-none d-docsite--link d-link",href:"#box-sizing","aria-hidden":"true"},"#")],-1),H=s("p",{class:"d-docsite--paragraph"},[e("All Dialtone components are implemented with "),s("code",null,"box-sizing: border-box;"),e(" applied. To understand why we prefer "),s("code",null,"border-box"),e(" over "),s("code",null,"content-box"),e(", please visit this "),s("a",{href:"https://stackoverflow.com/c/dialpad/questions/121",class:"d-docsite--link d-link",target:"_blank",rel:"noopener noreferrer"},"Stack Overflow Teams question"),e(".")],-1),Y=s("p",{class:"d-docsite--paragraph"},[e("In "),s("code",null,"Vue"),e(", we apply "),s("code",null,"border-box"),e(" globally at the "),s("code",null,"VueView"),e(" level, ensuring all child elements use this style. As such, Dialtone styles will work correctly in Vue with respect to element sizing.")],-1),J=s("p",{class:"d-docsite--paragraph"},[e("In "),s("code",null,"Backbone"),e(" we are not using "),s("code",null,"border-box"),e(" by default. Because Dialtone expects this, anytime we wish to use Dialtone styles in Backbone we must ensure to apply the "),s("code",null,"border-box"),e(" style to all affected elements.")],-1),K=s("h2",{id:"build-dialtone-locally",tabindex:"-1",class:"d-docsite--header-2"},[e("Build Dialtone Locally "),s("a",{class:"header-anchor d-link d-td-none d-docsite--link d-link",href:"#build-dialtone-locally","aria-hidden":"true"},"#")],-1),Q=s("p",{class:"d-docsite--paragraph"},[e("We're excited you want to install Dialtone locally as this most likely means you'll be contributing soon! Before you get to get started though,  "),s("strong",null,[e("please make sure you've read our "),s("a",{href:"https://github.com/dialpad/dialtone/blob/master/.github/CONTRIBUTING.md",class:"d-docsite--link d-link",target:"_blank",rel:"noopener noreferrer"},"contributing docs")]),e(".")],-1),X=s("h3",{id:"install-node-npm",tabindex:"-1",class:"d-docsite--header-3"},[e("Install Node & npm "),s("a",{class:"header-anchor d-link d-td-none d-docsite--link d-link",href:"#install-node-npm","aria-hidden":"true"},"#")],-1),Z=s("p",{class:"d-docsite--paragraph"},[e("To run Dialtone locally, you must have Node and NPM (Node Package Manager) installed. "),s("a",{href:"https://nodejs.org/en/",class:"d-docsite--link d-link",target:"_blank",rel:"noopener noreferrer"},"Click here to download Node"),e(". The recommended Node version is fine. NPM is included with Node. If you already have Node installed, you may move onto the next step.")],-1),$=s("p",{class:"d-docsite--paragraph"},"Once Node finishes installing, ensure it is installed properly by typing the following command in your Terminal window:",-1),ee=a(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">node</span> <span class="token parameter variable">-v</span>
</code></pre></div><p class="d-docsite--paragraph">You should see the following response:</p>`,2),se=s("div",{class:"language-bash","data-ext":"sh"},[s("pre",{class:"language-bash"},[s("code",null,`v16.x.x
`)])],-1),ae=s("h3",{id:"clone-project",tabindex:"-1",class:"d-docsite--header-3"},[e("Clone project "),s("a",{class:"header-anchor d-link d-td-none d-docsite--link d-link",href:"#clone-project","aria-hidden":"true"},"#")],-1),te=s("p",{class:"d-docsite--paragraph"},"Download the project:",-1),ne=a(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code>// SSH
<span class="token function">git</span> clone git@github.com:dialpad/dialtone.git

// HTTPS
<span class="token function">git</span> clone https://github.com/dialpad/dialtone.git
</code></pre></div><p class="d-docsite--paragraph">Then <code>cd</code> into the Dialtone directory:</p>`,2),oe=a(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> ./path/to/dialtone
</code></pre></div><h3 id="install-dependencies" tabindex="-1" class="d-docsite--header-3">Install dependencies <a class="header-anchor d-link d-td-none d-docsite--link d-link" href="#install-dependencies" aria-hidden="true">#</a></h3>`,2),ie=s("p",{class:"d-docsite--paragraph"},[e("Dialtone uses "),s("a",{href:"https://gulpjs.com/",class:"d-docsite--link d-link",target:"_blank",rel:"noopener noreferrer"},"Gulp"),e(" to automate its various workflows. Run the following command to install Gulp and all other project dependencies:")],-1),le=a(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code>    <span class="token function">npm</span> <span class="token function">install</span>
</code></pre></div><h3 id="building-dialtone" tabindex="-1" class="d-docsite--header-3">Building Dialtone <a class="header-anchor d-link d-td-none d-docsite--link d-link" href="#building-dialtone" aria-hidden="true">#</a></h3>`,2),de=s("p",{class:"d-docsite--paragraph"},"You're now ready to build Dialtone! To build and run the development server:",-1),ce=a(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code>    <span class="token function">npm</span> start
</code></pre></div><p class="d-docsite--paragraph">Once finished, visit <a href="http://localhost:4000/" class="d-docsite--link d-link" target="_blank" rel="noopener noreferrer">http://localhost:4000/</a>.</p>`,2);function re(pe,he){const i=l("code-well-header"),o=l("RouterLink");return c(),r("div",null,[h,e(),u,e(),g,e(),k,e(),m,e(),f,e(),b,e(),_,e(),y,e(),v,e(),w,e(),t(i,null,{default:n(()=>[x]),_:1}),e(),D,e(),s("ul",S,[s("li",B,[e("Our "),t(o,{to:"/utilities/spacing/padding/",class:"d-docsite--link d-link"},{default:n(()=>[e("padding utility class")]),_:1}),e(),C,e(" to add 16px of padding")]),e(),s("li",T,[e("Our "),t(o,{to:"/utilities/backgrounds/color/",class:"d-docsite--link d-link"},{default:n(()=>[e("background color utility class")]),_:1}),e(),q,e(" to add a purple background")]),e(),s("li",I,[e("Our "),t(o,{to:"/utilities/typography/color/",class:"d-docsite--link d-link"},{default:n(()=>[e("font color utility class")]),_:1}),e(),N,e(" to change the font color to white")])]),e(),j,e(),V,e(),z,e(),t(i,null,{default:n(()=>[A]),_:1}),e(),P,e(),L,e(),M,e(),O,e(),E,e(),F,e(),G,e(),R,e(),U,e(),W,e(),H,e(),Y,e(),J,e(),K,e(),Q,e(),X,e(),Z,e(),$,e(),ee,e(),se,ae,e(),te,e(),ne,e(),oe,e(),ie,e(),le,e(),de,e(),ce])}const ge=d(p,[["render",re],["__file","index.html.vue"]]);export{ge as default};
