import{_ as c,r as i,o as r,c as d,b as s,w as l,a as t,F as h,e,d as n}from"./app.604f0392.js";const p={},u=t("h2",{id:"utility-first",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#utility-first","aria-hidden":"true"},"#"),e(" Utility-First")],-1),_=e(),f=t("p",null,[e("Dialtone's CSS library offers a framework of utility-first classes. Each class is a small, "),t("a",{href:"https://css-tricks.com/lets-define-exactly-atomic-css/",target:"_blank"},"atomic style"),e(" declaration that, when chained together, should mitigate most situations in which custom CSS must be written. Just write these classes right in your mark-up and you're all set!")],-1),m=e(),g=t("div",{class:"d-p16 d-bgc-black-600 d-fc-white"},"Box",-1),b=n(` <div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-p16 d-bgc-black-600 d-fc-white<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>In the above example, we used:</p> `,4),k=e("Our "),y={href:"/utilities/spacing/padding/",target:"_blank",rel:"noopener noreferrer"},w=e("padding utility class"),v=e(),x=t("code",null,".d-p16",-1),S=e(" to add 16px of padding"),B=e(),C=e("Our "),D={href:"/utilities/backgrounds/color/",target:"_blank",rel:"noopener noreferrer"},I=e("background color utility class"),V=e(),q=t("code",null,".d-bgc-black-600",-1),F=e(" to add a purple background"),E=e(),T=e("Our "),z={href:"/utilities/typography/color/",target:"_blank",rel:"noopener noreferrer"},A=e("font color utility class"),N=e(),O=t("code",null,".d-fc-white",-1),P=e(" to change the font color to white"),M=e(),j=t("p",null,"Though an atomic CSS approach comes with many advantages, we know it also offers a notable disadvantage: reducing the CSS cascade. This is especially true for repeated UI elements, which can end up creating redundant mark-up. For these instances, Dialtone offers components.",-1),G=e(),L=t("h2",{id:"components",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#components","aria-hidden":"true"},"#"),e(" Components")],-1),U=e(),W=t("p",null,[e("There are two methods to implement Dialtone components: Vue (recommended) and CSS. Vue is the preferred method as it's more robust and readily accessible out-of-the-box. "),t("a",{href:"https://vue.dialpad.design/",target:"_blank"},"Get started with Vue components."),e(`
In the event Dialtone Vue doesn't suit your needs, Dialtone's CSS library offers the same set of components. These may require more work to implement and make accessible, but will work in a pinch.`)],-1),J=e(),R=t("button",{class:"d-btn d-btn--primary"},"Primary Button",-1),H=n(` <div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-btn d-btn--primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Primary Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="writing-css" tabindex="-1"><a class="header-anchor" href="#writing-css" aria-hidden="true">#</a> Writing CSS</h2> <p>In the event you need to write CSS, use <a href="http://getbem.com/" target="_blank">BEM (Block Element Modifier)</a>. This is a simple, common naming convention that helps make our CSS easier to read and understand. If you aren&#39;t familiar with the approach, here&#39;s a <a href="http://getbem.com/introduction/" target="_blank">quick synposis</a>:</p> <ul><li><strong>Block:</strong> A parent entity that is meaningful on its own. For example: <code>.d-input</code></li> <li><strong>Element:</strong> A child that is meaningful only in relation to its parent. For example: <code>.d-input__label</code></li> <li><strong>Modifier:</strong> A modifying flag on a Block or Element that changes appearance or behavior. For example: <code>.d-input--lg</code></li></ul> <h2 id="backbone" tabindex="-1"><a class="header-anchor" href="#backbone" aria-hidden="true">#</a> Backbone</h2> <p>For internal Dialpad projects, using Dialtone in Backbone should be rare, since most front end changes are now being implemented using Vue. Regardless, if you find yourself needing to use Dialtone in Backbone, there are a few steps:</p> <ol><li>Create a <code>.less</code> file for your feature, if one does not yet exist.</li> <li>Import this <code>.less</code> file into the relevant base less file e.g. <code>single.less</code>, <code>web.less</code> etc.</li> <li>Import Dialtone into your <code>.less</code> file and compose your styles like shown in the example above.</li></ol> <h2 id="polyfills" tabindex="-1"><a class="header-anchor" href="#polyfills" aria-hidden="true">#</a> Polyfills</h2> <p>In order to make Dialtone work across our supported browsers you need to manually install <strong>focus-visible</strong> polyfill and <strong>postcss-focus-visible</strong> plugin.</p> `,18),K=e("Focus-visible adds a listener to every element that should be keyboard-focused only and when the element is focused, it adds the .focus-visible class to it, follow the "),Q={href:"https://github.com/WICG/focus-visible#installation",target:"_blank",rel:"noopener noreferrer"},X=e("focus-visible"),Y=e(" installation instructions."),Z=e(),$=e("Postcss focus-visible plugin adds a .focus-visible class for every :focus-visible class found in your css, follow the "),ee={href:"https://www.npmjs.com/package/postcss-focus-visible",target:"_blank",rel:"noopener noreferrer"},te=e("postcss-focus-visible"),se=e(" installation instructions."),oe=e(),ne=t("h2",{id:"box-sizing",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#box-sizing","aria-hidden":"true"},"#"),e(" Box-Sizing")],-1),ae=e(),ie=e("All Dialtone components are implemented with "),le=t("code",null,"box-sizing: border-box;",-1),ce=e(" applied. To understand why we prefer "),re=t("code",null,"border-box",-1),de=e(" over "),he=t("code",null,"content-box",-1),pe=e(", please visit this "),ue={href:"https://stackoverflow.com/c/dialpad/questions/121",target:"_blank",rel:"noopener noreferrer"},_e=e("Stack Overflow Teams question"),fe=e("."),me=n(" <p>In <code>Vue</code>, we apply <code>border-box</code> globally at the <code>VueView</code> level, ensuring all child elements use this style. As such, Dialtone styles will work correctly in Vue with respect to element sizing.</p> <p>In <code>Backbone</code> we are not using <code>border-box</code> by default. Because Dialtone expects this, anytime we wish to use Dialtone styles in Backbone we must ensure to apply the <code>border-box</code> style to all affected elements.</p> ",5);function ge(be,ke){const a=i("code-well-header"),o=i("ExternalLinkIcon");return r(),d(h,null,[u,_,f,m,s(a,null,{default:l(()=>[g]),_:1}),b,t("ul",null,[t("li",null,[k,t("a",y,[w,s(o)]),v,x,S]),B,t("li",null,[C,t("a",D,[I,s(o)]),V,q,F]),E,t("li",null,[T,t("a",z,[A,s(o)]),N,O,P])]),M,j,G,L,U,W,J,s(a,null,{default:l(()=>[R]),_:1}),H,t("ol",null,[t("li",null,[K,t("a",Q,[X,s(o)]),Y]),Z,t("li",null,[$,t("a",ee,[te,s(o)]),se])]),oe,ne,ae,t("p",null,[ie,le,ce,re,de,he,pe,t("a",ue,[_e,s(o)]),fe]),me],64)}var we=c(p,[["render",ge],["__file","usage.html.vue"]]);export{we as default};
