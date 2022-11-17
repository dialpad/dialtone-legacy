import{_ as i,r as c,o as u,c as d,a,d as s,w as t,b as n,e}from"./app.6183f427.js";const r={},k=n("h2",{id:"introduction",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#introduction","aria-hidden":"true"},"#"),a(" Introduction")],-1),g=n("p",null,"Utilities \u2013 also known as \u201Ctrumps,\u201D \u201Chelper classes,\u201D or \u201Calterations\u201D \u2013 are high-specificity selectors for making very targeted alterations to existing elements or components.",-1),h=n("p",null,[a("Each utility is a small, "),n("a",{href:"https://css-tricks.com/lets-define-exactly-atomic-css/",target:"_blank"},"atomic style"),a(" declaration that, when chained together, should mitigate most situations in which custom CSS must be written. Just write these classes right in your mark-up and you're all set!")],-1),v=n("p",null,"Most utilities come with responsive options, enabling alterations at targeted screen size ranges. For example, \u201Csmall padding on smaller screens, larger padding on bigger screens.\u201D",-1),m=n("p",null,"While an atomic CSS approach comes with many advantages, we recognize it also offers a notable disadvantage: reducing the CSS cascade. This is especially true for repeated UI elements, which can end up creating redundant mark-up. For these instances, Dialtone offers components.",-1),_=n("h2",{id:"example",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#example","aria-hidden":"true"},"#"),a(" Example")],-1),x=n("h3",null,"Border top",-1),b=n("p",null,[n("code",null,"d-bt"),a(" applies a border ("),n("code",null,"b"),a(") to the top ("),n("code",null,"t"),a(") side. 1px is the default width, and the color is inherited from the foreground color ("),n("code",null,"currentColor"),a(").")],-1),f=n("div",{class:"d-bt"},"Box",-1),y=e(`<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bt<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3>Border top width</h3>`,2),q=n("p",null,[n("code",null,"d-btw4"),a(" applies a 4px ("),n("code",null,"4"),a(") width ("),n("code",null,"w"),a(") to the top ("),n("code",null,"t"),a(").")],-1),B=n("div",{class:"d-bt d-btw4"},"Box",-1),w=e(`<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bt d-btw4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3>Border color</h3>`,2),C=n("code",null,"d-bc-purple-400",-1),S=n("code",null,"b",-1),V=n("code",null,"c",-1),I=n("div",{class:"d-bt d-btw4 d-bc-purple-400"},"Box",-1),A=e(`<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bt d-btw4 d-bc-purple-400<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="tutorial" tabindex="-1"><a class="header-anchor" href="#tutorial" aria-hidden="true">#</a> Tutorial</h2>`,2),L={href:"https://codepen.io/pen?template=dyKvvZB",target:"_blank",rel:"noopener noreferrer"},z=n("h3",null,"1. Begin with an unstyled container",-1),E=n("div",null,"Box",-1),N=e(`<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>Box<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3>2. Apply a dark background color</h3>`,2),R=n("code",null,"d-bgc-black-900",-1),F=n("div",{class:"d-bgc-black-900"},"Box",-1),M=e(`<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-black-900<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3>3. Apply color to the foreground text</h3>`,2),T=n("code",null,"d-fc-primary-inverted",-1),D=n("div",{class:"d-bgc-black-600 d-fc-primary-inverted"},"Box",-1),K=e(`<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-black-600 d-fc-primary-inverted<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3>4. Apply some padding</h3>`,2),U=n("code",null,"d-px16",-1),W=n("code",null,"d-py8",-1),Y=n("div",{class:"d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8"},"Box",-1),J=e(`<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3>5. List a bunch of boxes</h3>`,2),P=n("p",null,"Let's wrap a repeating set of boxes in a new container.",-1),X=n("div",null,[n("div",{class:"d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8"},"Box 1"),a(),n("div",{class:"d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8"},"Box the 2nd"),a(),n("div",{class:"d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8"},"Box third"),a(),n("div",{class:"d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8"},"Box IV")],-1),Z=e(`<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box the 2nd<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box third<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box IV<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3>6. Render them horizontally</h3>`,2),j=n("p",null,[a("Convert it to a "),n("code",null,"flex"),a(" container by adding "),n("code",null,'class="d-d-flex"'),a(".")],-1),G=n("div",{class:"d-d-flex"},[n("div",{class:"d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8"},"Box 1"),a(),n("div",{class:"d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8"},"Box the 2nd"),a(),n("div",{class:"d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8"},"Box third"),a(),n("div",{class:"d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8"},"Box IV")],-1),H=e(`<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-d-flex<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box the 2nd<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box third<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box IV<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3>7. Add borders to segment each.</h3>`,2),O=n("code",null,"d-divide-x",-1),Q=n("div",{class:"d-d-flex d-divide-x"},[n("div",{class:"d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8"},"Box 1"),a(),n("div",{class:"d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8"},"Box the 2nd"),a(),n("div",{class:"d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8"},"Box third"),a(),n("div",{class:"d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8"},"Box IV")],-1),$=e(`<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-d-flex d-divide-x<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box the 2nd<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box third<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box IV<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3>8. And change the border color</h3>`,2),aa=n("code",null,"d-divide-x",-1),na=n("code",null,"currentColor",-1),sa=n("code",null,"d-divide-black-400",-1),ta=n("div",{class:"d-d-flex d-divide-x d-divide-black-400"},[n("div",{class:"d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8"},"Box 1"),a(),n("div",{class:"d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8"},"Box the 2nd"),a(),n("div",{class:"d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8"},"Box third"),a(),n("div",{class:"d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8"},"Box IV")],-1),pa=e(`<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-d-flex d-divide-x d-divide-black-400<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box the 2nd<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box third<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box IV<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3>Keep exploring!</h3>`,2),ea={href:"https://codepen.io/pen?template=XWYMMRY",target:"_blank",rel:"noopener noreferrer"};function oa(ca,la){const p=c("code-well-header"),o=c("RouterLink"),l=c("ExternalLinkIcon");return u(),d("div",null,[k,a(),g,a(),h,a(),v,a(),m,a(),_,a(),x,a(),b,a(),s(p,null,{default:t(()=>[f]),_:1}),a(),y,a(),q,a(),s(p,null,{default:t(()=>[B]),_:1}),a(),w,a(),n("p",null,[C,a(" applies a border ("),S,a(") color ("),V,a(") of "),s(o,{to:"/design/colors/#purple"},{default:t(()=>[a("Purple 400")]),_:1}),a(".")]),a(),s(p,null,{default:t(()=>[I]),_:1}),a(),A,a(),n("p",null,[a("A basic example styling a container by combining Dialtone's CSS utilities. Follow each step with this "),n("a",L,[a("Codepen template."),s(l)])]),a(),z,a(),s(p,null,{default:t(()=>[E]),_:1}),a(),N,a(),n("p",null,[a("Add "),R,a(" from the list of "),s(o,{to:"/utilities/backgrounds/color/"},{default:t(()=>[a("background color utility classes")]),_:1}),a(".")]),a(),s(p,null,{default:t(()=>[F]),_:1}),a(),M,a(),n("p",null,[a("Since this is primary content on a dark background, let's use "),T,a(" from the "),s(o,{to:"/utilities/typography/color/"},{default:t(()=>[a("font color utilities")]),_:1}),a(".")]),a(),s(p,null,{default:t(()=>[D]),_:1}),a(),K,a(),n("p",null,[a("Let's use "),U,a(" for horizontal padding (right and left), and "),W,a(" for vertical padding (top and bottom), from the list of "),s(o,{to:"/utilities/spacing/padding/"},{default:t(()=>[a("padding utility classes")]),_:1}),a(".")]),a(),s(p,null,{default:t(()=>[Y]),_:1}),a(),J,a(),P,a(),s(p,null,{default:t(()=>[X]),_:1}),a(),Z,a(),j,a(),s(p,null,{default:t(()=>[G]),_:1}),a(),H,a(),n("p",null,[a("Add a border to each box by applying "),O,a(" (horizontal borders) to the surrounding container from the list of "),s(o,{to:"/utilities/borders/divide-width.html"},{default:t(()=>[a("divide width classes")]),_:1}),a(".")]),a(),s(p,null,{default:t(()=>[Q]),_:1}),a(),$,a(),n("p",null,[a("Since the border color of "),aa,a(" inherits the color of the parent's foreground (implicitly "),na,a("), let's soften it with "),sa,a(", from the list of "),s(o,{to:"/utilities/borders/divide-color.html"},{default:t(()=>[a("divide color classes")]),_:1}),a(".")]),a(),s(p,null,{default:t(()=>[ta]),_:1}),a(),pa,a(),n("p",null,[a("View the final result in this "),n("a",ea,[a("Codepen template"),s(l)]),a(". Continue to explore using the variety of CSS utilities listed here.")])])}var ua=i(r,[["render",oa],["__file","index.html.vue"]]);export{ua as default};
