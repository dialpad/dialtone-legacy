import{_ as c,o as r,c as d,b as s,w as i,a as t,d as e,e as n,r as l}from"./app.7411295d.js";const h={},p=t("h2",{id:"utility-first",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#utility-first","aria-hidden":"true"},"#"),e(" Utility-first")],-1),u=e(),_=t("p",null,[e("Dialtone's CSS library offers a framework of utility-first classes. Each class is a small, "),t("a",{href:"https://css-tricks.com/lets-define-exactly-atomic-css/",target:"_blank"},"atomic style"),e(" declaration that, when chained together, should mitigate most situations in which custom CSS must be written. Just write these classes right in your mark-up and you're all set!")],-1),f=e(),m=t("div",{class:"d-p16 d-bgc-black-600 d-fc-white"},"Box",-1),g=n(` <div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-p16 d-bgc-black-600 d-fc-white<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>In the above example, we used:</p> `,4),b=e("Our "),k={href:"/utilities/spacing/padding/",target:"_blank",rel:"noopener noreferrer"},y=e("padding utility class"),w=e(),v=t("code",null,".d-p16",-1),x=e(" to add 16px of padding"),S=e(),B=e("Our "),C={href:"/utilities/backgrounds/color/",target:"_blank",rel:"noopener noreferrer"},D=e("background color utility class"),I=e(),V=t("code",null,".d-bgc-black-600",-1),q=e(" to add a purple background"),E=e(),T=e("Our "),F={href:"/utilities/typography/color/",target:"_blank",rel:"noopener noreferrer"},z=e("font color utility class"),A=e(),N=t("code",null,".d-fc-white",-1),O=e(" to change the font color to white"),P=e(),M=t("p",null,"Though an atomic CSS approach comes with many advantages, we know it also offers a notable disadvantage: reducing the CSS cascade. This is especially true for repeated UI elements, which can end up creating redundant mark-up. For these instances, Dialtone offers components.",-1),j=e(),G=t("h2",{id:"components",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#components","aria-hidden":"true"},"#"),e(" Components")],-1),L=e(),U=t("p",null,[e("There are two methods to implement Dialtone components: Vue (recommended) and CSS. Vue is the preferred method as it's more robust and readily accessible out-of-the-box. "),t("a",{href:"https://vue.dialpad.design/",target:"_blank"},"Get started with Vue components."),e(`
In the event Dialtone Vue doesn't suit your needs, Dialtone's CSS library offers the same set of components. These may require more work to implement and make accessible, but will work in a pinch.`)],-1),W=e(),J=t("button",{class:"d-btn d-btn--primary"},"Primary Button",-1),R=n(` <div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-btn d-btn--primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Primary Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="writing-css" tabindex="-1"><a class="header-anchor" href="#writing-css" aria-hidden="true">#</a> Writing CSS</h2> <p>In the event you need to write CSS, use <a href="http://getbem.com/" target="_blank">BEM (Block Element Modifier)</a>. This is a simple, common naming convention that helps make our CSS easier to read and understand. If you aren&#39;t familiar with the approach, here&#39;s a <a href="http://getbem.com/introduction/" target="_blank">quick synposis</a>:</p> <ul><li><strong>Block:</strong> A parent entity that is meaningful on its own. For example: <code>.d-input</code></li> <li><strong>Element:</strong> A child that is meaningful only in relation to its parent. For example: <code>.d-input__label</code></li> <li><strong>Modifier:</strong> A modifying flag on a Block or Element that changes appearance or behavior. For example: <code>.d-input--lg</code></li></ul> <h2 id="backbone" tabindex="-1"><a class="header-anchor" href="#backbone" aria-hidden="true">#</a> Backbone</h2> <p>For internal Dialpad projects, using Dialtone in Backbone should be rare, since most front end changes are now being implemented using Vue. Regardless, if you find yourself needing to use Dialtone in Backbone, there are a few steps:</p> <ol><li>Create a <code>.less</code> file for your feature, if one does not yet exist.</li> <li>Import this <code>.less</code> file into the relevant base less file e.g. <code>single.less</code>, <code>web.less</code> etc.</li> <li>Import Dialtone into your <code>.less</code> file and compose your styles like shown in the example above.</li></ol> <h2 id="polyfills" tabindex="-1"><a class="header-anchor" href="#polyfills" aria-hidden="true">#</a> Polyfills</h2> <p>In order to make Dialtone work across our supported browsers you need to manually install <strong>focus-visible</strong> polyfill and <strong>postcss-focus-visible</strong> plugin.</p> `,18),H=e("Focus-visible adds a listener to every element that should be keyboard-focused only and when the element is focused, it adds the .focus-visible class to it, follow the "),K={href:"https://github.com/WICG/focus-visible#installation",target:"_blank",rel:"noopener noreferrer"},Q=e("focus-visible"),X=e(" installation instructions."),Y=e(),Z=e("Postcss focus-visible plugin adds a .focus-visible class for every :focus-visible class found in your css, follow the "),$={href:"https://www.npmjs.com/package/postcss-focus-visible",target:"_blank",rel:"noopener noreferrer"},ee=e("postcss-focus-visible"),te=e(" installation instructions."),se=e(),oe=t("h2",{id:"box-sizing",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#box-sizing","aria-hidden":"true"},"#"),e(" Box-sizing")],-1),ne=e(),ae=e("All Dialtone components are implemented with "),ie=t("code",null,"box-sizing: border-box;",-1),le=e(" applied. To understand why we prefer "),ce=t("code",null,"border-box",-1),re=e(" over "),de=t("code",null,"content-box",-1),he=e(", please visit this "),pe={href:"https://stackoverflow.com/c/dialpad/questions/121",target:"_blank",rel:"noopener noreferrer"},ue=e("Stack Overflow Teams question"),_e=e("."),fe=n(" <p>In <code>Vue</code>, we apply <code>border-box</code> globally at the <code>VueView</code> level, ensuring all child elements use this style. As such, Dialtone styles will work correctly in Vue with respect to element sizing.</p> <p>In <code>Backbone</code> we are not using <code>border-box</code> by default. Because Dialtone expects this, anytime we wish to use Dialtone styles in Backbone we must ensure to apply the <code>border-box</code> style to all affected elements.</p> ",5);function me(ge,be){const a=l("code-well-header"),o=l("ExternalLinkIcon");return r(),d("div",null,[p,u,_,f,s(a,null,{default:i(()=>[m]),_:1}),g,t("ul",null,[t("li",null,[b,t("a",k,[y,s(o)]),w,v,x]),S,t("li",null,[B,t("a",C,[D,s(o)]),I,V,q]),E,t("li",null,[T,t("a",F,[z,s(o)]),A,N,O])]),P,M,j,G,L,U,W,s(a,null,{default:i(()=>[J]),_:1}),R,t("ol",null,[t("li",null,[H,t("a",K,[Q,s(o)]),X]),Y,t("li",null,[Z,t("a",$,[ee,s(o)]),te])]),se,oe,ne,t("p",null,[ae,ie,le,ce,re,de,he,t("a",pe,[ue,s(o)]),_e]),fe])}var ye=c(h,[["render",me],["__file","usage.html.vue"]]);export{ye as default};
