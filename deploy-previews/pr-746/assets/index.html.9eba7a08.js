import{_ as l,r as c,o as i,c as u,a,d as s,w as p,b as n,e}from"./app.5992dc88.js";const d={},r=n("h2",{id:"introduction",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#introduction","aria-hidden":"true"},"#"),a(" Introduction")],-1),k=n("p",null,"Utilities \u2013 also known as \u201Ctrumps,\u201D \u201Chelper classes,\u201D or \u201Calterations\u201D \u2013 are high-specificity selectors for making very targeted alterations to existing elements or components.",-1),g=n("p",null,[a("Each utility is a small, "),n("a",{href:"https://css-tricks.com/lets-define-exactly-atomic-css/",target:"_blank"},"atomic style"),a(" declaration that, when chained together, should mitigate most situations in which custom CSS must be written. Just write these classes right in your mark-up and you're all set!")],-1),h=n("p",null,"Most utilities come with responsive options, enabling alterations at targeted screen size ranges. For example, \u201Csmall padding on smaller screens, larger padding on bigger screens.\u201D",-1),v=n("p",null,"While an atomic CSS approach comes with many advantages, we recognize it also offers a notable disadvantage: reducing the CSS cascade. This is especially true for repeated UI elements, which can end up creating redundant mark-up. For these instances, Dialtone offers components.",-1),m=n("h2",{id:"example",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#example","aria-hidden":"true"},"#"),a(" Example")],-1),_=n("h3",null,"Border top",-1),b=n("p",null,[n("code",null,"d-bt"),a(" applies a border ("),n("code",null,"b"),a(") to the top ("),n("code",null,"t"),a(") side. 1px is the default width, and the color is inherited from the foreground color ("),n("code",null,"currentColor"),a(").")],-1),x=n("div",{class:"d-bt"},"Box",-1),f=e(`<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bt<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3>Border top width</h3>`,2),y=n("p",null,[n("code",null,"d-btw4"),a(" applies a 4px ("),n("code",null,"4"),a(") width ("),n("code",null,"w"),a(") to the top ("),n("code",null,"t"),a(").")],-1),q=n("div",{class:"d-bt d-btw4"},"Box",-1),B=e(`<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bt d-btw4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3>Border color</h3>`,2),w=n("code",null,"d-bc-purple-400",-1),C=n("code",null,"b",-1),S=n("code",null,"c",-1),V={href:"/design/colors/#purple",target:"_blank",rel:"noopener noreferrer"},I=n("div",{class:"d-bt d-btw4 d-bc-purple-400"},"Box",-1),A=e(`<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bt d-btw4 d-bc-purple-400<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="tutorial" tabindex="-1"><a class="header-anchor" href="#tutorial" aria-hidden="true">#</a> Tutorial</h2>`,2),z={href:"https://codepen.io/pen?template=dyKvvZB",target:"_blank",rel:"noopener noreferrer"},E=n("h3",null,"1. Begin with an unstyled container",-1),L=n("div",null,"Box",-1),N=e(`<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>Box<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3>2. Apply a dark background color</h3>`,2),F=n("code",null,"d-bgc-black-900",-1),M={href:"/utilities/backgrounds/color/",target:"_blank",rel:"noopener noreferrer"},T=n("div",{class:"d-bgc-black-900"},"Box",-1),D=e(`<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-black-900<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3>3. Apply color to the foreground text</h3>`,2),K=n("code",null,"d-fc-primary-inverted",-1),R={href:"/utilities/typography/color/",target:"_blank",rel:"noopener noreferrer"},U=n("div",{class:"d-bgc-black-600 d-fc-primary-inverted"},"Box",-1),W=e(`<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-black-600 d-fc-primary-inverted<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3>4. Apply some padding</h3>`,2),Y=n("code",null,"d-px16",-1),J=n("code",null,"d-py8",-1),P={href:"/utilities/spacing/padding/",target:"_blank",rel:"noopener noreferrer"},X=n("div",{class:"d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8"},"Box",-1),Z=e(`<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3>5. List a bunch of boxes</h3>`,2),j=n("p",null,"Let's wrap a repeating set of boxes in a new container.",-1),G=n("div",null,[n("div",{class:"d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8"},"Box 1"),a(),n("div",{class:"d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8"},"Box the 2nd"),a(),n("div",{class:"d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8"},"Box third"),a(),n("div",{class:"d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8"},"Box IV")],-1),H=e(`<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box the 2nd<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box third<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box IV<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3>6. Render them horizontally</h3>`,2),O=n("p",null,[a("Convert it to a "),n("code",null,"flex"),a(" container by adding "),n("code",null,'class="d-d-flex"'),a(".")],-1),Q=n("div",{class:"d-d-flex"},[n("div",{class:"d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8"},"Box 1"),a(),n("div",{class:"d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8"},"Box the 2nd"),a(),n("div",{class:"d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8"},"Box third"),a(),n("div",{class:"d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8"},"Box IV")],-1),$=e(`<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-d-flex<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box the 2nd<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box third<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box IV<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3>7. Add borders to segment each.</h3>`,2),aa=n("code",null,"d-divide-x",-1),na={href:"/utilities/borders/divide-width.html",target:"_blank",rel:"noopener noreferrer"},sa=n("div",{class:"d-d-flex d-divide-x"},[n("div",{class:"d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8"},"Box 1"),a(),n("div",{class:"d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8"},"Box the 2nd"),a(),n("div",{class:"d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8"},"Box third"),a(),n("div",{class:"d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8"},"Box IV")],-1),ta=e(`<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-d-flex d-divide-x<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box the 2nd<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box third<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box IV<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3>8. And change the border color</h3>`,2),pa=n("code",null,"d-divide-x",-1),ea=n("code",null,"currentColor",-1),oa=n("code",null,"d-divide-black-400",-1),ca={href:"/utilities/borders/divide-color.html",target:"_blank",rel:"noopener noreferrer"},la=n("div",{class:"d-d-flex d-divide-x d-divide-black-400"},[n("div",{class:"d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8"},"Box 1"),a(),n("div",{class:"d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8"},"Box the 2nd"),a(),n("div",{class:"d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8"},"Box third"),a(),n("div",{class:"d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8"},"Box IV")],-1),ia=e(`<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-d-flex d-divide-x d-divide-black-400<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box the 2nd<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box third<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box IV<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3>Keep exploring!</h3>`,2),ua={href:"https://codepen.io/pen?template=XWYMMRY",target:"_blank",rel:"noopener noreferrer"};function da(ra,ka){const t=c("code-well-header"),o=c("ExternalLinkIcon");return i(),u("div",null,[r,a(),k,a(),g,a(),h,a(),v,a(),m,a(),_,a(),b,a(),s(t,null,{default:p(()=>[x]),_:1}),a(),f,a(),y,a(),s(t,null,{default:p(()=>[q]),_:1}),a(),B,a(),n("p",null,[w,a(" applies a border ("),C,a(") color ("),S,a(") of "),n("a",V,[a("Purple 400"),s(o)]),a(".")]),a(),s(t,null,{default:p(()=>[I]),_:1}),a(),A,a(),n("p",null,[a("A basic example styling a container by combining Dialtone's CSS utilities. Follow each step with this "),n("a",z,[a("Codepen template."),s(o)])]),a(),E,a(),s(t,null,{default:p(()=>[L]),_:1}),a(),N,a(),n("p",null,[a("Add "),F,a(" from the list of "),n("a",M,[a("background color utility classes"),s(o)]),a(".")]),a(),s(t,null,{default:p(()=>[T]),_:1}),a(),D,a(),n("p",null,[a("Since this is primary content on a dark background, let's use "),K,a(" from the "),n("a",R,[a("font color utilities"),s(o)]),a(".")]),a(),s(t,null,{default:p(()=>[U]),_:1}),a(),W,a(),n("p",null,[a("Let's use "),Y,a(" for horizontal padding (right and left), and "),J,a(" for vertical padding (top and bottom), from the list of "),n("a",P,[a("padding utility classes"),s(o)]),a(".")]),a(),s(t,null,{default:p(()=>[X]),_:1}),a(),Z,a(),j,a(),s(t,null,{default:p(()=>[G]),_:1}),a(),H,a(),O,a(),s(t,null,{default:p(()=>[Q]),_:1}),a(),$,a(),n("p",null,[a("Add a border to each box by applying "),aa,a(" (horizontal borders) to the surrounding container from the list of "),n("a",na,[a("divide width classes"),s(o)]),a(".")]),a(),s(t,null,{default:p(()=>[sa]),_:1}),a(),ta,a(),n("p",null,[a("Since the border color of "),pa,a(" inherits the color of the parent's foreground (implicitly "),ea,a("), let's soften it with "),oa,a(", from the list of "),n("a",ca,[a("divide color classes"),s(o)]),a(".")]),a(),s(t,null,{default:p(()=>[la]),_:1}),a(),ia,a(),n("p",null,[a("View the final result in this "),n("a",ua,[a("Codepen template"),s(o)]),a(". Continue to explore using the variety of CSS utilities listed here.")])])}var ha=l(d,[["render",da],["__file","index.html.vue"]]);export{ha as default};
