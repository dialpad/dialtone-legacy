import{_ as r,r as l,o as c,c as d,a as e,d as s,w as i,b as t,e as o}from"./app.56727463.js";const u={},p=t("h2",{id:"utility-first",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#utility-first","aria-hidden":"true"},"#"),e(" Utility-first")],-1),h=t("p",null,[e("Dialtone's CSS library offers a framework of utility-first classes. Each class is a small, "),t("a",{href:"https://css-tricks.com/lets-define-exactly-atomic-css/",target:"_blank"},"atomic style"),e(" declaration that, when chained together, should mitigate most situations in which custom CSS must be written. Just write these classes right in your mark-up and you're all set!")],-1),f=t("div",{class:"d-p16 d-bgc-black-600 d-fc-white"},"Box",-1),m=o(`<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-p16 d-bgc-black-600 d-fc-white<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>In the above example, we used:</p>`,2),_={href:"/utilities/spacing/padding/",target:"_blank",rel:"noopener noreferrer"},g=t("code",null,".d-p16",-1),b={href:"/utilities/backgrounds/color/",target:"_blank",rel:"noopener noreferrer"},k=t("code",null,".d-bgc-black-600",-1),y={href:"/utilities/typography/color/",target:"_blank",rel:"noopener noreferrer"},w=t("code",null,".d-fc-white",-1),v=t("p",null,"Though an atomic CSS approach comes with many advantages, we know it also offers a notable disadvantage: reducing the CSS cascade. This is especially true for repeated UI elements, which can end up creating redundant mark-up. For these instances, Dialtone offers components.",-1),x=t("h2",{id:"components",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#components","aria-hidden":"true"},"#"),e(" Components")],-1),S=t("p",null,[e("There are two methods to implement Dialtone components: Vue (recommended) and CSS. Vue is the preferred method as it's more robust and readily accessible out-of-the-box. "),t("a",{href:"https://vue.dialpad.design/",target:"_blank"},"Get started with Vue components."),e(`
In the event Dialtone Vue doesn't suit your needs, Dialtone's CSS library offers the same set of components. These may require more work to implement and make accessible, but will work in a pinch.`)],-1),B=t("button",{class:"d-btn d-btn--primary"},"Primary Button",-1),C=o(`<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-btn d-btn--primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Primary Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="writing-css" tabindex="-1"><a class="header-anchor" href="#writing-css" aria-hidden="true">#</a> Writing CSS</h2>`,2),D=t("p",null,[e("In the event you need to write CSS, use "),t("a",{href:"http://getbem.com/",target:"_blank"},"BEM (Block Element Modifier)"),e(". This is a simple, common naming convention that helps make our CSS easier to read and understand. If you aren't familiar with the approach, here's a "),t("a",{href:"http://getbem.com/introduction/",target:"_blank"},"quick synposis"),e(":")],-1),I=o("<ul><li><strong>Block:</strong> A parent entity that is meaningful on its own. For example: <code>.d-input</code></li> <li><strong>Element:</strong> A child that is meaningful only in relation to its parent. For example: <code>.d-input__label</code></li> <li><strong>Modifier:</strong> A modifying flag on a Block or Element that changes appearance or behavior. For example: <code>.d-input--lg</code></li></ul>",1),V=t("h2",{id:"backbone",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#backbone","aria-hidden":"true"},"#"),e(" Backbone")],-1),q=t("p",null,"For internal Dialpad projects, using Dialtone in Backbone should be rare, since most front end changes are now being implemented using Vue. Regardless, if you find yourself needing to use Dialtone in Backbone, there are a few steps:",-1),E=o("<ol><li>Create a <code>.less</code> file for your feature, if one does not yet exist.</li> <li>Import this <code>.less</code> file into the relevant base less file e.g. <code>single.less</code>, <code>web.less</code> etc.</li> <li>Import Dialtone into your <code>.less</code> file and compose your styles like shown in the example above.</li></ol>",1),T=t("h2",{id:"polyfills",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#polyfills","aria-hidden":"true"},"#"),e(" Polyfills")],-1),F=t("p",null,[e("In order to make Dialtone work across our supported browsers you need to manually install "),t("strong",null,"focus-visible"),e(" polyfill and "),t("strong",null,"postcss-focus-visible"),e(" plugin.")],-1),z={href:"https://github.com/WICG/focus-visible#installation",target:"_blank",rel:"noopener noreferrer"},A={href:"https://www.npmjs.com/package/postcss-focus-visible",target:"_blank",rel:"noopener noreferrer"},N=t("h2",{id:"box-sizing",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#box-sizing","aria-hidden":"true"},"#"),e(" Box-sizing")],-1),O=t("code",null,"box-sizing: border-box;",-1),P=t("code",null,"border-box",-1),M=t("code",null,"content-box",-1),j={href:"https://stackoverflow.com/c/dialpad/questions/121",target:"_blank",rel:"noopener noreferrer"},G=t("p",null,[e("In "),t("code",null,"Vue"),e(", we apply "),t("code",null,"border-box"),e(" globally at the "),t("code",null,"VueView"),e(" level, ensuring all child elements use this style. As such, Dialtone styles will work correctly in Vue with respect to element sizing.")],-1),L=t("p",null,[e("In "),t("code",null,"Backbone"),e(" we are not using "),t("code",null,"border-box"),e(" by default. Because Dialtone expects this, anytime we wish to use Dialtone styles in Backbone we must ensure to apply the "),t("code",null,"border-box"),e(" style to all affected elements.")],-1);function U(W,J){const a=l("code-well-header"),n=l("ExternalLinkIcon");return c(),d("div",null,[p,e(),h,e(),s(a,null,{default:i(()=>[f]),_:1}),e(),m,e(),t("ul",null,[t("li",null,[e("Our "),t("a",_,[e("padding utility class"),s(n)]),e(),g,e(" to add 16px of padding")]),e(),t("li",null,[e("Our "),t("a",b,[e("background color utility class"),s(n)]),e(),k,e(" to add a purple background")]),e(),t("li",null,[e("Our "),t("a",y,[e("font color utility class"),s(n)]),e(),w,e(" to change the font color to white")])]),e(),v,e(),x,e(),S,e(),s(a,null,{default:i(()=>[B]),_:1}),e(),C,e(),D,e(),I,e(),V,e(),q,e(),E,e(),T,e(),F,e(),t("ol",null,[t("li",null,[e("Focus-visible adds a listener to every element that should be keyboard-focused only and when the element is focused, it adds the .focus-visible class to it, follow the "),t("a",z,[e("focus-visible"),s(n)]),e(" installation instructions.")]),e(),t("li",null,[e("Postcss focus-visible plugin adds a .focus-visible class for every :focus-visible class found in your css, follow the "),t("a",A,[e("postcss-focus-visible"),s(n)]),e(" installation instructions.")])]),e(),N,e(),t("p",null,[e("All Dialtone components are implemented with "),O,e(" applied. To understand why we prefer "),P,e(" over "),M,e(", please visit this "),t("a",j,[e("Stack Overflow Teams question"),s(n)]),e(".")]),e(),G,e(),L,e()])}var H=r(u,[["render",U],["__file","usage.html.vue"]]);export{H as default};
