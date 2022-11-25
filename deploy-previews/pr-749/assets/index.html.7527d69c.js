import{_ as c,r as l,o as r,c as d,a as e,d as s,w as i,b as n,e as o}from"./app.8089710e.js";const u={},p=n("h2",{id:"adding-dialtone-to-your-project",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#adding-dialtone-to-your-project","aria-hidden":"true"},"#"),e(" Adding Dialtone to your project")],-1),h=n("p",null,[e("To take advantage of Dialtone's customizations, classes, and variables in your project, you will want to install Dialtone via "),n("a",{href:"https://www.npmjs.com/",target:"_blank"},"npm"),e(".")],-1),g=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),e(),n("span",{class:"token function"},"install"),e(` @dialpad/dialtone
`)])])],-1),_=n("p",null,"Add the following line in your Less file:",-1),m=o(`<div class="language-less ext-less"><pre class="language-less"><code><span class="token variable">@import</span> <span class="token string">&quot;your/path/to/dialtone.less&quot;</span><span class="token punctuation">;</span>
</code></pre></div><p>If you only need access to Dialtone&#39;s variables and customizations to build a file and don&#39;t need the whole library exported, use this line instead in your Less file:</p>`,2),f=o(`<div class="language-less ext-less"><pre class="language-less"><code><span class="token variable">@import</span> <span class="token punctuation">(</span>reference<span class="token punctuation">)</span> <span class="token string">&quot;your/path/to/dialtone.less&quot;</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="theming" tabindex="-1"><a class="header-anchor" href="#theming" aria-hidden="true">#</a> Theming</h2>`,2),b=n("p",null,[e("To customize your Dialtone installation, create a new Less file in the "),n("code",null,"/lib/build/less/themes/"),e(" folder. By default this will compile during build, which can be added as an additional CSS file in your page "),n("code",null,"head"),e(".")],-1),k=o(`<div class="language-less ext-less"><pre class="language-less"><code><span class="token variable">@import</span> <span class="token string">&quot;your/path/to/dialtone.less&quot;</span><span class="token punctuation">;</span>
</code></pre></div><p>If you only need access to Dialtone&#39;s variables and customizations to build a file and don&#39;t need the whole library exported, use this line instead in your Less file:</p>`,2),y=o(`<div class="language-less ext-less"><pre class="language-less"><code><span class="token variable">@import</span> <span class="token punctuation">(</span>reference<span class="token punctuation">)</span> <span class="token string">&quot;your/path/to/dialtone.less&quot;</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2>`,2),v=n("p",null,"A general overview of Dialtone's utility classes, CSS components, and Vue components.",-1),w=n("h3",null,"Utility-first",-1),x=n("p",null,[e("Dialtone's CSS library offers a framework of utility-first classes. Each class is a small, "),n("a",{href:"https://css-tricks.com/lets-define-exactly-atomic-css/",target:"_blank"},"atomic style"),e(" declaration that, when chained together, should mitigate most situations in which custom CSS must be written. Just write these classes right in your mark-up and you're all set!")],-1),D=n("div",{class:"d-p16 d-bgc-black-600 d-fc-white"},"Box",-1),S=o(`<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-p16 d-bgc-black-600 d-fc-white<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>In the above example, we used:</p>`,2),B={href:"/utilities/spacing/padding/",target:"_blank",rel:"noopener noreferrer"},I=n("code",null,".d-p16",-1),T={href:"/utilities/backgrounds/color/",target:"_blank",rel:"noopener noreferrer"},C=n("code",null,".d-bgc-black-600",-1),q={href:"/utilities/typography/color/",target:"_blank",rel:"noopener noreferrer"},N=n("code",null,".d-fc-white",-1),V=n("p",null,"Though an atomic CSS approach comes with many advantages, we know it also offers a notable disadvantage: reducing the CSS cascade. This is especially true for repeated UI elements, which can end up creating redundant mark-up. For these instances, Dialtone offers components.",-1),j=n("h3",null,"Components",-1),A=n("p",null,[e("There are two methods to implement Dialtone components: Vue (recommended) and CSS. Vue is the preferred method as it's more robust and readily accessible out-of-the-box. "),n("a",{href:"https://vue.dialpad.design/",target:"_blank"},"Get started with Vue components."),e(`
In the event Dialtone Vue doesn't suit your needs, Dialtone's CSS library offers the same set of components. These may require more work to implement and make accessible, but will work in a pinch.`)],-1),E=n("button",{class:"d-btn d-btn--primary"},"Primary Button",-1),P=o(`<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-btn d-btn--primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Primary Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3>Writing CSS</h3>`,2),z=n("p",null,[e("In the event you need to write CSS, use "),n("a",{href:"http://getbem.com/",target:"_blank"},"BEM (Block Element Modifier)"),e(". This is a simple, common naming convention that helps make our CSS easier to read and understand. If you aren't familiar with the approach, here's a "),n("a",{href:"http://getbem.com/introduction/",target:"_blank"},"quick synposis"),e(":")],-1),L=o("<ul><li><strong>Block:</strong> A parent entity that is meaningful on its own. For example: <code>.d-input</code></li> <li><strong>Element:</strong> A child that is meaningful only in relation to its parent. For example: <code>.d-input__label</code></li> <li><strong>Modifier:</strong> A modifying flag on a Block or Element that changes appearance or behavior. For example: <code>.d-input--lg</code></li></ul>",1),O=n("h3",null,"Backbone",-1),F=n("p",null,"For internal Dialpad projects, using Dialtone in Backbone should be rare, since most front end changes are now being implemented using Vue. Regardless, if you find yourself needing to use Dialtone in Backbone, there are a few steps:",-1),M=o("<ol><li>Create a <code>.less</code> file for your feature, if one does not yet exist.</li> <li>Import this <code>.less</code> file into the relevant base less file e.g. <code>single.less</code>, <code>web.less</code> etc.</li> <li>Import Dialtone into your <code>.less</code> file and compose your styles like shown in the example above.</li></ol>",1),G=n("h3",null,"Polyfills",-1),U=n("p",null,[e("In order to make Dialtone work across our supported browsers you need to manually install "),n("strong",null,"focus-visible"),e(" polyfill and "),n("strong",null,"postcss-focus-visible"),e(" plugin.")],-1),R={href:"https://github.com/WICG/focus-visible#installation",target:"_blank",rel:"noopener noreferrer"},W={href:"https://www.npmjs.com/package/postcss-focus-visible",target:"_blank",rel:"noopener noreferrer"},H=n("h3",null,"Box-sizing",-1),Y=n("code",null,"box-sizing: border-box;",-1),J=n("code",null,"border-box",-1),K=n("code",null,"content-box",-1),Q={href:"https://stackoverflow.com/c/dialpad/questions/121",target:"_blank",rel:"noopener noreferrer"},X=n("p",null,[e("In "),n("code",null,"Vue"),e(", we apply "),n("code",null,"border-box"),e(" globally at the "),n("code",null,"VueView"),e(" level, ensuring all child elements use this style. As such, Dialtone styles will work correctly in Vue with respect to element sizing.")],-1),Z=n("p",null,[e("In "),n("code",null,"Backbone"),e(" we are not using "),n("code",null,"border-box"),e(" by default. Because Dialtone expects this, anytime we wish to use Dialtone styles in Backbone we must ensure to apply the "),n("code",null,"border-box"),e(" style to all affected elements.")],-1),$=n("h2",{id:"build-dialtone-locally",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#build-dialtone-locally","aria-hidden":"true"},"#"),e(" Build Dialtone Locally")],-1),ee={href:"https://github.com/dialpad/dialtone/blob/master/.github/CONTRIBUTING.md",target:"_blank",rel:"noopener noreferrer"},ne=n("h3",null,"Install Node & npm",-1),se={href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"},te=n("p",null,"Once Node finishes installing, ensure it is installed properly by typing the following command in your Terminal window:",-1),oe=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"node"),e(),n("span",{class:"token parameter variable"},"-v"),e(`
`)])])],-1),ae=n("p",null,"You should see the following response:",-1),le=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,`v16.x.x
`)])],-1),ie=n("h3",null,"Clone project",-1),ce=n("p",null,"Download the project:",-1),re=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[e(`// SSH
`),n("span",{class:"token function"},"git"),e(` clone git@github.com:dialpad/dialtone.git

// HTTPS
`),n("span",{class:"token function"},"git"),e(` clone https://github.com/dialpad/dialtone.git
`)])])],-1),de=n("p",null,[e("Then "),n("code",null,"cd"),e(" into the Dialtone directory:")],-1),ue=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token builtin class-name"},"cd"),e(` ./path/to/dialtone
`)])])],-1),pe=n("h3",null,"Install dependencies",-1),he={href:"https://gulpjs.com/",target:"_blank",rel:"noopener noreferrer"},ge=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[e("    "),n("span",{class:"token function"},"npm"),e(),n("span",{class:"token function"},"install"),e(`
`)])])],-1),_e=n("h3",null,"Building Dialtone",-1),me=n("p",null,"You're now ready to build Dialtone! To build and run the development server:",-1),fe=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[e("    "),n("span",{class:"token function"},"npm"),e(` start
`)])])],-1),be={href:"http://localhost:4000/",target:"_blank",rel:"noopener noreferrer"};function ke(ye,ve){const a=l("code-well-header"),t=l("ExternalLinkIcon");return r(),d("div",null,[p,e(),h,e(),g,_,e(),m,e(),f,e(),b,e(),k,e(),y,e(),v,e(),w,e(),x,e(),s(a,null,{default:i(()=>[D]),_:1}),e(),S,e(),n("ul",null,[n("li",null,[e("Our "),n("a",B,[e("padding utility class"),s(t)]),e(),I,e(" to add 16px of padding")]),e(),n("li",null,[e("Our "),n("a",T,[e("background color utility class"),s(t)]),e(),C,e(" to add a purple background")]),e(),n("li",null,[e("Our "),n("a",q,[e("font color utility class"),s(t)]),e(),N,e(" to change the font color to white")])]),e(),V,e(),j,e(),A,e(),s(a,null,{default:i(()=>[E]),_:1}),e(),P,e(),z,e(),L,e(),O,e(),F,e(),M,e(),G,e(),U,e(),n("ol",null,[n("li",null,[e("Focus-visible adds a listener to every element that should be keyboard-focused only and when the element is focused, it adds the .focus-visible class to it, follow the "),n("a",R,[e("focus-visible"),s(t)]),e(" installation instructions.")]),e(),n("li",null,[e("Postcss focus-visible plugin adds a .focus-visible class for every :focus-visible class found in your css, follow the "),n("a",W,[e("postcss-focus-visible"),s(t)]),e(" installation instructions.")])]),e(),H,e(),n("p",null,[e("All Dialtone components are implemented with "),Y,e(" applied. To understand why we prefer "),J,e(" over "),K,e(", please visit this "),n("a",Q,[e("Stack Overflow Teams question"),s(t)]),e(".")]),e(),X,e(),Z,e(),$,e(),n("p",null,[e("We're excited you want to install Dialtone locally as this most likely means you'll be contributing soon! Before you get to get started though,  "),n("strong",null,[e("please make sure you've read our "),n("a",ee,[e("contributing docs"),s(t)])]),e(".")]),e(),ne,e(),n("p",null,[e("To run Dialtone locally, you must have Node and NPM (Node Package Manager) installed. "),n("a",se,[e("Click here to download Node"),s(t)]),e(". The recommended Node version is fine. NPM is included with Node. If you already have Node installed, you may move onto the next step.")]),e(),te,e(),oe,ae,e(),le,ie,e(),ce,e(),re,de,e(),ue,pe,e(),n("p",null,[e("Dialtone uses "),n("a",he,[e("Gulp"),s(t)]),e(" to automate its various workflows. Run the following command to install Gulp and all other project dependencies:")]),e(),ge,_e,e(),me,e(),fe,n("p",null,[e("Once finished, visit "),n("a",be,[e("http://localhost:4000/"),s(t)]),e(".")])])}var xe=c(u,[["render",ke],["__file","index.html.vue"]]);export{xe as default};
