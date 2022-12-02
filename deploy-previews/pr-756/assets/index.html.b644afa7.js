import{_ as d,r as l,o as i,c,a as e,e as n,w as o,b as s,d as a}from"./app.e5c4ca5e.js";const r={},p=s("h2",{id:"adding-dialtone-to-your-project",tabindex:"-1",class:"d-docsite--header d-pt72"},[e("Adding Dialtone to your project "),s("a",{class:"header-anchor d-link d-td-none",href:"#adding-dialtone-to-your-project","aria-hidden":"true"},"#")],-1),h=s("p",{class:"d-docsite--paragraph d-my16 d-lh-400 d-w75ch"},[e("To take advantage of Dialtone's customizations, classes, and variables in your project, you will want to install Dialtone via "),s("a",{href:"https://www.npmjs.com/",target:"_blank"},"npm"),e(".")],-1),u=a(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> @dialpad/dialtone
</code></pre></div><p class="d-docsite--paragraph d-my16 d-lh-400 d-w75ch">Add the following line in your Less file:</p>`,2),g=a(`<div class="language-less" data-ext="less"><pre class="language-less"><code><span class="token variable">@import</span> <span class="token string">&quot;your/path/to/dialtone.less&quot;</span><span class="token punctuation">;</span>
</code></pre></div><p class="d-docsite--paragraph d-my16 d-lh-400 d-w75ch">If you only need access to Dialtone&#39;s variables and customizations to build a file and don&#39;t need the whole library exported, use this line instead in your Less file:</p>`,2),m=a(`<div class="language-less" data-ext="less"><pre class="language-less"><code><span class="token variable">@import</span> <span class="token punctuation">(</span>reference<span class="token punctuation">)</span> <span class="token string">&quot;your/path/to/dialtone.less&quot;</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="theming" tabindex="-1" class="d-docsite--header d-pt72">Theming <a class="header-anchor d-link d-td-none" href="#theming" aria-hidden="true">#</a></h2>`,2),b=s("p",{class:"d-docsite--paragraph d-my16 d-lh-400 d-w75ch"},[e("To customize your Dialtone installation, create a new Less file in the "),s("code",null,"/lib/build/less/themes/"),e(" folder. By default this will compile during build, which can be added as an additional CSS file in your page "),s("code",null,"head"),e(".")],-1),f=a(`<div class="language-less" data-ext="less"><pre class="language-less"><code><span class="token variable">@import</span> <span class="token string">&quot;your/path/to/dialtone.less&quot;</span><span class="token punctuation">;</span>
</code></pre></div><p class="d-docsite--paragraph d-my16 d-lh-400 d-w75ch">If you only need access to Dialtone&#39;s variables and customizations to build a file and don&#39;t need the whole library exported, use this line instead in your Less file:</p>`,2),y=a(`<div class="language-less" data-ext="less"><pre class="language-less"><code><span class="token variable">@import</span> <span class="token punctuation">(</span>reference<span class="token punctuation">)</span> <span class="token string">&quot;your/path/to/dialtone.less&quot;</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="usage" tabindex="-1" class="d-docsite--header d-pt72">Usage <a class="header-anchor d-link d-td-none" href="#usage" aria-hidden="true">#</a></h2>`,2),_=s("p",{class:"d-docsite--paragraph d-my16 d-lh-400 d-w75ch"},"A general overview of Dialtone's utility classes, CSS components, and Vue components.",-1),k=s("h3",{id:"utility-first",tabindex:"-1",class:"d-docsite--subheader d-pt72 d-mt24"},[e("Utility-first "),s("a",{class:"header-anchor d-link d-td-none",href:"#utility-first","aria-hidden":"true"},"#")],-1),w=s("p",{class:"d-docsite--paragraph d-my16 d-lh-400 d-w75ch"},[e("Dialtone's CSS library offers a framework of utility-first classes. Each class is a small, "),s("a",{href:"https://css-tricks.com/lets-define-exactly-atomic-css/",target:"_blank"},"atomic style"),e(" declaration that, when chained together, should mitigate most situations in which custom CSS must be written. Just write these classes right in your mark-up and you're all set!")],-1),v=s("div",{class:"d-p16 d-bgc-black-600 d-fc-white"},"Box",-1),x=a(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-p16 d-bgc-black-600 d-fc-white<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p class="d-docsite--paragraph d-my16 d-lh-400 d-w75ch">In the above example, we used:</p>`,2),D=a('<ul class="d-docsite--unordered-list"><li class="d-docsite--list-element d-mt8">Our <a href="/utilities/spacing/padding/" target="_blank" rel="noopener noreferrer">padding utility class</a> <code>.d-p16</code> to add 16px of padding</li> <li class="d-docsite--list-element d-mt8">Our <a href="/utilities/backgrounds/color/" target="_blank" rel="noopener noreferrer">background color utility class</a> <code>.d-bgc-black-600</code> to add a purple background</li> <li class="d-docsite--list-element d-mt8">Our <a href="/utilities/typography/color/" target="_blank" rel="noopener noreferrer">font color utility class</a> <code>.d-fc-white</code> to change the font color to white</li></ul>',1),S=s("p",{class:"d-docsite--paragraph d-my16 d-lh-400 d-w75ch"},"Though an atomic CSS approach comes with many advantages, we know it also offers a notable disadvantage: reducing the CSS cascade. This is especially true for repeated UI elements, which can end up creating redundant mark-up. For these instances, Dialtone offers components.",-1),B=s("h3",{id:"components",tabindex:"-1",class:"d-docsite--subheader d-pt72 d-mt24"},[e("Components "),s("a",{class:"header-anchor d-link d-td-none",href:"#components","aria-hidden":"true"},"#")],-1),T=s("p",{class:"d-docsite--paragraph d-my16 d-lh-400 d-w75ch"},[e("There are two methods to implement Dialtone components: Vue (recommended) and CSS. Vue is the preferred method as it's more robust and readily accessible out-of-the-box. "),s("a",{href:"https://vue.dialpad.design/",target:"_blank"},"Get started with Vue components."),e(`
In the event Dialtone Vue doesn't suit your needs, Dialtone's CSS library offers the same set of components. These may require more work to implement and make accessible, but will work in a pinch.`)],-1),C=s("button",{class:"d-btn d-btn--primary"},"Primary Button",-1),q=a(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-btn d-btn--primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Primary Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="writing-css" tabindex="-1" class="d-docsite--subheader d-pt72 d-mt24">Writing CSS <a class="header-anchor d-link d-td-none" href="#writing-css" aria-hidden="true">#</a></h3>`,2),I=s("p",{class:"d-docsite--paragraph d-my16 d-lh-400 d-w75ch"},[e("In the event you need to write CSS, use "),s("a",{href:"http://getbem.com/",target:"_blank"},"BEM (Block Element Modifier)"),e(". This is a simple, common naming convention that helps make our CSS easier to read and understand. If you aren't familiar with the approach, here's a "),s("a",{href:"http://getbem.com/introduction/",target:"_blank"},"quick synposis"),e(":")],-1),N=a('<ul class="d-docsite--unordered-list"><li class="d-docsite--list-element d-mt8"><strong>Block:</strong> A parent entity that is meaningful on its own. For example: <code>.d-input</code></li> <li class="d-docsite--list-element d-mt8"><strong>Element:</strong> A child that is meaningful only in relation to its parent. For example: <code>.d-input__label</code></li> <li class="d-docsite--list-element d-mt8"><strong>Modifier:</strong> A modifying flag on a Block or Element that changes appearance or behavior. For example: <code>.d-input--lg</code></li></ul>',1),j=s("h3",{id:"backbone",tabindex:"-1",class:"d-docsite--subheader d-pt72 d-mt24"},[e("Backbone "),s("a",{class:"header-anchor d-link d-td-none",href:"#backbone","aria-hidden":"true"},"#")],-1),V=s("p",{class:"d-docsite--paragraph d-my16 d-lh-400 d-w75ch"},"For internal Dialpad projects, using Dialtone in Backbone should be rare, since most front end changes are now being implemented using Vue. Regardless, if you find yourself needing to use Dialtone in Backbone, there are a few steps:",-1),z=a('<ol><li class="d-docsite--list-element d-mt8">Create a <code>.less</code> file for your feature, if one does not yet exist.</li> <li class="d-docsite--list-element d-mt8">Import this <code>.less</code> file into the relevant base less file e.g. <code>single.less</code>, <code>web.less</code> etc.</li> <li class="d-docsite--list-element d-mt8">Import Dialtone into your <code>.less</code> file and compose your styles like shown in the example above.</li></ol>',1),A=s("h3",{id:"polyfills",tabindex:"-1",class:"d-docsite--subheader d-pt72 d-mt24"},[e("Polyfills "),s("a",{class:"header-anchor d-link d-td-none",href:"#polyfills","aria-hidden":"true"},"#")],-1),P=s("p",{class:"d-docsite--paragraph d-my16 d-lh-400 d-w75ch"},[e("In order to make Dialtone work across our supported browsers you need to manually install "),s("strong",null,"focus-visible"),e(" polyfill and "),s("strong",null,"postcss-focus-visible"),e(" plugin.")],-1),O=s("ol",null,[s("li",{class:"d-docsite--list-element d-mt8"},[e("Focus-visible adds a listener to every element that should be keyboard-focused only and when the element is focused, it adds the .focus-visible class to it, follow the "),s("a",{href:"https://github.com/WICG/focus-visible#installation",target:"_blank",rel:"noopener noreferrer"},"focus-visible"),e(" installation instructions.")]),e(),s("li",{class:"d-docsite--list-element d-mt8"},[e("Postcss focus-visible plugin adds a .focus-visible class for every :focus-visible class found in your css, follow the "),s("a",{href:"https://www.npmjs.com/package/postcss-focus-visible",target:"_blank",rel:"noopener noreferrer"},"postcss-focus-visible"),e(" installation instructions.")])],-1),E=s("h3",{id:"box-sizing",tabindex:"-1",class:"d-docsite--subheader d-pt72 d-mt24"},[e("Box-sizing "),s("a",{class:"header-anchor d-link d-td-none",href:"#box-sizing","aria-hidden":"true"},"#")],-1),F=s("p",{class:"d-docsite--paragraph d-my16 d-lh-400 d-w75ch"},[e("All Dialtone components are implemented with "),s("code",null,"box-sizing: border-box;"),e(" applied. To understand why we prefer "),s("code",null,"border-box"),e(" over "),s("code",null,"content-box"),e(", please visit this "),s("a",{href:"https://stackoverflow.com/c/dialpad/questions/121",target:"_blank",rel:"noopener noreferrer"},"Stack Overflow Teams question"),e(".")],-1),M=s("p",{class:"d-docsite--paragraph d-my16 d-lh-400 d-w75ch"},[e("In "),s("code",null,"Vue"),e(", we apply "),s("code",null,"border-box"),e(" globally at the "),s("code",null,"VueView"),e(" level, ensuring all child elements use this style. As such, Dialtone styles will work correctly in Vue with respect to element sizing.")],-1),G=s("p",{class:"d-docsite--paragraph d-my16 d-lh-400 d-w75ch"},[e("In "),s("code",null,"Backbone"),e(" we are not using "),s("code",null,"border-box"),e(" by default. Because Dialtone expects this, anytime we wish to use Dialtone styles in Backbone we must ensure to apply the "),s("code",null,"border-box"),e(" style to all affected elements.")],-1),L=s("h2",{id:"build-dialtone-locally",tabindex:"-1",class:"d-docsite--header d-pt72"},[e("Build Dialtone Locally "),s("a",{class:"header-anchor d-link d-td-none",href:"#build-dialtone-locally","aria-hidden":"true"},"#")],-1),U=s("p",{class:"d-docsite--paragraph d-my16 d-lh-400 d-w75ch"},[e("We're excited you want to install Dialtone locally as this most likely means you'll be contributing soon! Before you get to get started though,  "),s("strong",null,[e("please make sure you've read our "),s("a",{href:"https://github.com/dialpad/dialtone/blob/master/.github/CONTRIBUTING.md",target:"_blank",rel:"noopener noreferrer"},"contributing docs")]),e(".")],-1),R=s("h3",{id:"install-node-npm",tabindex:"-1",class:"d-docsite--subheader d-pt72 d-mt24"},[e("Install Node & npm "),s("a",{class:"header-anchor d-link d-td-none",href:"#install-node-npm","aria-hidden":"true"},"#")],-1),W=s("p",{class:"d-docsite--paragraph d-my16 d-lh-400 d-w75ch"},[e("To run Dialtone locally, you must have Node and NPM (Node Package Manager) installed. "),s("a",{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"},"Click here to download Node"),e(". The recommended Node version is fine. NPM is included with Node. If you already have Node installed, you may move onto the next step.")],-1),H=s("p",{class:"d-docsite--paragraph d-my16 d-lh-400 d-w75ch"},"Once Node finishes installing, ensure it is installed properly by typing the following command in your Terminal window:",-1),Y=a(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">node</span> <span class="token parameter variable">-v</span>
</code></pre></div><p class="d-docsite--paragraph d-my16 d-lh-400 d-w75ch">You should see the following response:</p>`,2),J=s("div",{class:"language-bash","data-ext":"sh"},[s("pre",{class:"language-bash"},[s("code",null,`v16.x.x
`)])],-1),K=s("h3",{id:"clone-project",tabindex:"-1",class:"d-docsite--subheader d-pt72 d-mt24"},[e("Clone project "),s("a",{class:"header-anchor d-link d-td-none",href:"#clone-project","aria-hidden":"true"},"#")],-1),Q=s("p",{class:"d-docsite--paragraph d-my16 d-lh-400 d-w75ch"},"Download the project:",-1),X=a(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code>// SSH
<span class="token function">git</span> clone git@github.com:dialpad/dialtone.git

// HTTPS
<span class="token function">git</span> clone https://github.com/dialpad/dialtone.git
</code></pre></div><p class="d-docsite--paragraph d-my16 d-lh-400 d-w75ch">Then <code>cd</code> into the Dialtone directory:</p>`,2),Z=a(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> ./path/to/dialtone
</code></pre></div><h3 id="install-dependencies" tabindex="-1" class="d-docsite--subheader d-pt72 d-mt24">Install dependencies <a class="header-anchor d-link d-td-none" href="#install-dependencies" aria-hidden="true">#</a></h3>`,2),$=s("p",{class:"d-docsite--paragraph d-my16 d-lh-400 d-w75ch"},[e("Dialtone uses "),s("a",{href:"https://gulpjs.com/",target:"_blank",rel:"noopener noreferrer"},"Gulp"),e(" to automate its various workflows. Run the following command to install Gulp and all other project dependencies:")],-1),ee=a(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code>    <span class="token function">npm</span> <span class="token function">install</span>
</code></pre></div><h3 id="building-dialtone" tabindex="-1" class="d-docsite--subheader d-pt72 d-mt24">Building Dialtone <a class="header-anchor d-link d-td-none" href="#building-dialtone" aria-hidden="true">#</a></h3>`,2),se=s("p",{class:"d-docsite--paragraph d-my16 d-lh-400 d-w75ch"},"You're now ready to build Dialtone! To build and run the development server:",-1),ae=a(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code>    <span class="token function">npm</span> start
</code></pre></div><p class="d-docsite--paragraph d-my16 d-lh-400 d-w75ch">Once finished, visit <a href="http://localhost:4000/" target="_blank" rel="noopener noreferrer">http://localhost:4000/</a>.</p>`,2);function te(ne,oe){const t=l("code-well-header");return i(),c("div",null,[p,e(),h,e(),u,e(),g,e(),m,e(),b,e(),f,e(),y,e(),_,e(),k,e(),w,e(),n(t,null,{default:o(()=>[v]),_:1}),e(),x,e(),D,e(),S,e(),B,e(),T,e(),n(t,null,{default:o(()=>[C]),_:1}),e(),q,e(),I,e(),N,e(),j,e(),V,e(),z,e(),A,e(),P,e(),O,e(),E,e(),F,e(),M,e(),G,e(),L,e(),U,e(),R,e(),W,e(),H,e(),Y,e(),J,K,e(),Q,e(),X,e(),Z,e(),$,e(),ee,e(),se,e(),ae])}const le=d(r,[["render",te],["__file","index.html.vue"]]);export{le as default};
