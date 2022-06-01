import{_ as c,r as i,o as r,c as d,b as s,w as l,a as t,F as p,e,d as o}from"./app.db970c53.js";const u={},h=t("h2",{id:"utility-first",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#utility-first","aria-hidden":"true"},"#"),e(" Utility-First")],-1),m=e(),f=t("p",null,[e("Dialtone's CSS library offers a framework of utility-first classes. Each class is a small, "),t("a",{href:"https://css-tricks.com/lets-define-exactly-atomic-css/",class:"d-link",target:"_blank"},"atomic style"),e(" declaration that, when chained together, should mitigate most situations in which custom CSS must be written. Just write these classes right in your mark-up and you're all set!")],-1),g=e(),_=t("div",{class:"d-p16 d-bgc-black-600 d-fc-white"},"Box",-1),b=o(` <div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-p16 d-bgc-black-600 d-fc-white<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>In the above example, we used:</p> <ul><li>Our <a href="http://dialpad.design/utilities/spacing/padding/" class="d-link">padding utility class</a> <code>.d-p16</code> to add 16px of padding</li> <li>Our <a href="http://dialpad.design/utilities/backgrounds/color/" class="d-link">background color utility class</a> <code>.d-bgc-black-600</code> to add a purple background</li> <li>Our <a href="http://dialpad.design/utilities/typography/color/" class="d-link">font color utility class</a> <code>.d-fc-white</code> to change the font color to white</li></ul> <p>Though an atomic CSS approach comes with many advantages, we know it also offers a notable disadvantage: reducing the CSS cascade. This is especially true for repeated UI elements, which can end up creating redundant mark-up. For these instances, Dialtone offers components.</p> <h2 id="components" tabindex="-1"><a class="header-anchor" href="#components" aria-hidden="true">#</a> Components</h2> <p>There are two methods to implement Dialtone components: Vue (recommended) and CSS. Vue is the preferred method as it&#39;s more robust and readily accessible out-of-the-box. <a href="https://vue.dialpad.design/" class="d-link" target="_blank">Get started with Vue components.</a>
In the event Dialtone Vue doesn&#39;t suit your needs, Dialtone&#39;s CSS library offers the same set of components. These may require more work to implement and make accessible, but will work in a pinch.</p> `,12),k=t("button",{class:"d-btn d-btn--primary"},"Primary Button",-1),y=o(` <div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-btn d-btn--primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Primary Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="writing-css" tabindex="-1"><a class="header-anchor" href="#writing-css" aria-hidden="true">#</a> Writing CSS</h2> <p>In the event you need to write CSS, use <a href="http://getbem.com/" class="d-link" target="_blank">BEM (Block Element Modifier)</a>. This is a simple, common naming convention that helps make our CSS easier to read and understand. If you aren&#39;t familiar with the approach, here&#39;s a <a href="http://getbem.com/introduction/" class="d-link" target="_blank">quick synposis</a>:</p> <ul><li><strong>Block:</strong> A parent entity that is meaningful on its own. For example: <code>.d-input</code></li> <li><strong>Element:</strong> A child that is meaningful only in relation to its parent. For example: <code>.d-input__label</code></li> <li><strong>Modifier:</strong> A modifying flag on a Block or Element that changes appearance or behavior. For example: <code>.d-input--lg</code></li></ul> <h2 id="backbone" tabindex="-1"><a class="header-anchor" href="#backbone" aria-hidden="true">#</a> Backbone</h2> <p>For internal Dialpad projects, using Dialtone in Backbone should be rare, since most front end changes are now being implemented using Vue. Regardless, if you find yourself needing to use Dialtone in Backbone, there are a few steps:</p> <ol><li>Create a <code>.less</code> file for your feature, if one does not yet exist.</li> <li>Import this <code>.less</code> file into the relevant base less file e.g. <code>single.less</code>, <code>web.less</code> etc.</li> <li>Import Dialtone into your <code>.less</code> file and compose your styles like shown in the example above.</li></ol> <h2 id="polyfills" tabindex="-1"><a class="header-anchor" href="#polyfills" aria-hidden="true">#</a> Polyfills</h2> <p>In order to make Dialtone work across our supported browsers you need to manually install <strong>focus-visible</strong> polyfill and <strong>postcss-focus-visible</strong> plugin.</p> `,18),w=e("Focus-visible adds a listener to every element that should be keyboard-focused only and when the element is focused, it adds the .focus-visible class to it, follow the "),v={href:"https://github.com/WICG/focus-visible#installation",target:"_blank",rel:"noopener noreferrer"},x=e("focus-visible"),S=e(" installation instructions."),B=e(),C=e("Postcss focus-visible plugin adds a .focus-visible class for every :focus-visible class found in your css, follow the "),D={href:"https://www.npmjs.com/package/postcss-focus-visible",target:"_blank",rel:"noopener noreferrer"},I=e("postcss-focus-visible"),V=e(" installation instructions."),q=e(),F=t("h2",{id:"box-sizing",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#box-sizing","aria-hidden":"true"},"#"),e(" Box-Sizing")],-1),E=e(),T=e("All Dialtone components are implemented with "),z=t("code",null,"box-sizing: border-box;",-1),A=e(" applied. To understand why we prefer "),N=t("code",null,"border-box",-1),O=e(" over "),P=t("code",null,"content-box",-1),M=e(", please visit this "),j={href:"https://stackoverflow.com/c/dialpad/questions/121",target:"_blank",rel:"noopener noreferrer"},G=e("Stack Overflow Teams question"),L=e("."),U=o(" <p>In <code>Vue</code>, we apply <code>border-box</code> globally at the <code>VueView</code> level, ensuring all child elements use this style. As such, Dialtone styles will work correctly in Vue with respect to element sizing.</p> <p>In <code>Backbone</code> we are not using <code>border-box</code> by default. Because Dialtone expects this, anytime we wish to use Dialtone styles in Backbone we must ensure to apply the <code>border-box</code> style to all affected elements.</p> ",5);function W(J,R){const n=i("code-well-header"),a=i("ExternalLinkIcon");return r(),d(p,null,[h,m,f,g,s(n,null,{default:l(()=>[_]),_:1}),b,s(n,null,{default:l(()=>[k]),_:1}),y,t("ol",null,[t("li",null,[w,t("a",v,[x,s(a)]),S]),B,t("li",null,[C,t("a",D,[I,s(a)]),V])]),q,F,E,t("p",null,[T,z,A,N,O,P,M,t("a",j,[G,s(a)]),L]),U],64)}var K=c(u,[["render",W],["__file","usage.html.vue"]]);export{K as default};
