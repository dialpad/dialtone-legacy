import{_ as o,s as c,v as l,x as d,C as a,G as t,B as e,y as s,K as p}from"./framework-09315036.js";const i={},u=s("h2",{id:"introduction",tabindex:"-1",class:"d-docsite--header-2"},[a("Introduction "),s("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#introduction","aria-hidden":"true"},"#")],-1),r=s("p",{class:"d-docsite--paragraph"},"Utilities – also known as “trumps,” “helper classes,” or “alterations” – are high-specificity selectors for making very targeted alterations to existing elements or components.",-1),k=s("p",{class:"d-docsite--paragraph"},[a("Each utility is a small, "),s("a",{class:"d-link",href:"https://css-tricks.com/lets-define-exactly-atomic-css/",target:"_blank"},"atomic style"),a(" declaration that, when chained together, should mitigate most situations in which custom CSS must be written. Just write these classes right in your mark-up and you're all set!")],-1),g=s("p",{class:"d-docsite--paragraph"},"Most utilities come with responsive options, enabling alterations at targeted screen size ranges. For example, “small padding on smaller screens, larger padding on bigger screens.”",-1),h=s("p",{class:"d-docsite--paragraph"},"While an atomic CSS approach comes with many advantages, we recognize it also offers a notable disadvantage: reducing the CSS cascade. This is especially true for repeated UI elements, which can end up creating redundant mark-up. For these instances, Dialtone offers components.",-1),v=s("h2",{id:"example",tabindex:"-1",class:"d-docsite--header-2"},[a("Example "),s("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#example","aria-hidden":"true"},"#")],-1),b=s("h3",{id:"border-top",tabindex:"-1",class:"d-docsite--header-3"},[a("Border top "),s("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#border-top","aria-hidden":"true"},"#")],-1),m=s("p",{class:"d-docsite--paragraph"},[s("code",null,"d-bt"),a(" applies a border ("),s("code",null,"b"),a(") to the top ("),s("code",null,"t"),a(") side. 1px is the default width, and the color is inherited from the foreground color ("),s("code",null,"currentColor"),a(").")],-1),x=s("div",{class:"d-bt"},"Box",-1),_=p(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bt<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="border-top-width" tabindex="-1" class="d-docsite--header-3">Border top width <a class="header-anchor d-link d-docsite--link d-link" href="#border-top-width" aria-hidden="true">#</a></h3>`,2),f=s("p",{class:"d-docsite--paragraph"},[s("code",null,"d-btw4"),a(" applies a 4px ("),s("code",null,"4"),a(") width ("),s("code",null,"w"),a(") to the top ("),s("code",null,"t"),a(").")],-1),y=s("div",{class:"d-bt d-btw4"},"Box",-1),q=p(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bt d-btw4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="border-color" tabindex="-1" class="d-docsite--header-3">Border color <a class="header-anchor d-link d-docsite--link d-link" href="#border-color" aria-hidden="true">#</a></h3>`,2),B=s("p",{class:"d-docsite--paragraph"},[s("code",null,"d-bc-purple-400"),a(" applies a border ("),s("code",null,"b"),a(") color ("),s("code",null,"c"),a(") of "),s("a",{href:"/design/colors/#purple",class:"d-docsite--link d-link",target:"_blank",rel:"noopener noreferrer"},"Purple 400"),a(".")],-1),w=s("div",{class:"d-bt d-btw4 d-bc-purple-400"},"Box",-1),C=p(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bt d-btw4 d-bc-purple-400<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="tutorial" tabindex="-1" class="d-docsite--header-2">Tutorial <a class="header-anchor d-link d-docsite--link d-link" href="#tutorial" aria-hidden="true">#</a></h2>`,2),S=s("p",{class:"d-docsite--paragraph"},[a("A basic example styling a container by combining Dialtone's CSS utilities. Follow each step with this "),s("a",{href:"https://codepen.io/pen?template=dyKvvZB",class:"d-docsite--link d-link",target:"_blank",rel:"noopener noreferrer"},"Codepen template.")],-1),V=s("h3",{id:"_1-begin-with-an-unstyled-container",tabindex:"-1",class:"d-docsite--header-3"},[a("1. Begin with an unstyled container "),s("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#_1-begin-with-an-unstyled-container","aria-hidden":"true"},"#")],-1),I=s("div",null,"Box",-1),A=p(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>Box<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="_2-apply-a-dark-background-color" tabindex="-1" class="d-docsite--header-3">2. Apply a dark background color <a class="header-anchor d-link d-docsite--link d-link" href="#_2-apply-a-dark-background-color" aria-hidden="true">#</a></h3>`,2),z=s("p",{class:"d-docsite--paragraph"},[a("Add "),s("code",null,"d-bgc-black-900"),a(" from the list of "),s("a",{href:"/utilities/backgrounds/color/",class:"d-docsite--link d-link",target:"_blank",rel:"noopener noreferrer"},"background color utility classes"),a(".")],-1),N=s("div",{class:"d-bgc-black-900"},"Box",-1),E=p(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-black-900<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="_3-apply-color-to-the-foreground-text" tabindex="-1" class="d-docsite--header-3">3. Apply color to the foreground text <a class="header-anchor d-link d-docsite--link d-link" href="#_3-apply-color-to-the-foreground-text" aria-hidden="true">#</a></h3>`,2),F=s("p",{class:"d-docsite--paragraph"},[a("Since this is primary content on a dark background, let's use "),s("code",null,"d-fc-primary-inverted"),a(" from the "),s("a",{href:"/utilities/typography/color/",class:"d-docsite--link d-link",target:"_blank",rel:"noopener noreferrer"},"font color utilities"),a(".")],-1),K=s("div",{class:"d-bgc-black-600 d-fc-primary-inverted"},"Box",-1),L=p(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-black-600 d-fc-primary-inverted<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="_4-apply-some-padding" tabindex="-1" class="d-docsite--header-3">4. Apply some padding <a class="header-anchor d-link d-docsite--link d-link" href="#_4-apply-some-padding" aria-hidden="true">#</a></h3>`,2),M=s("p",{class:"d-docsite--paragraph"},[a("Let's use "),s("code",null,"d-px16"),a(" for horizontal padding (right and left), and "),s("code",null,"d-py8"),a(" for vertical padding (top and bottom), from the list of "),s("a",{href:"/utilities/spacing/padding/",class:"d-docsite--link d-link",target:"_blank",rel:"noopener noreferrer"},"padding utility classes"),a(".")],-1),T=s("div",{class:"d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8"},"Box",-1),D=p(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="_5-list-a-bunch-of-boxes" tabindex="-1" class="d-docsite--header-3">5. List a bunch of boxes <a class="header-anchor d-link d-docsite--link d-link" href="#_5-list-a-bunch-of-boxes" aria-hidden="true">#</a></h3>`,2),R=s("p",{class:"d-docsite--paragraph"},"Let's wrap a repeating set of boxes in a new container.",-1),U=s("div",null,[s("div",{class:"d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8"},"Box 1"),a(),s("div",{class:"d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8"},"Box the 2nd"),a(),s("div",{class:"d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8"},"Box third"),a(),s("div",{class:"d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8"},"Box IV")],-1),W=p(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box the 2nd<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box third<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box IV<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="_6-render-them-horizontally" tabindex="-1" class="d-docsite--header-3">6. Render them horizontally <a class="header-anchor d-link d-docsite--link d-link" href="#_6-render-them-horizontally" aria-hidden="true">#</a></h3>`,2),Y=s("p",{class:"d-docsite--paragraph"},[a("Convert it to a "),s("code",null,"flex"),a(" container by adding "),s("code",null,'class="d-d-flex"'),a(".")],-1),G=s("div",{class:"d-d-flex"},[s("div",{class:"d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8"},"Box 1"),a(),s("div",{class:"d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8"},"Box the 2nd"),a(),s("div",{class:"d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8"},"Box third"),a(),s("div",{class:"d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8"},"Box IV")],-1),J=p(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-d-flex<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box the 2nd<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box third<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box IV<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="_7-add-borders-to-segment-each" tabindex="-1" class="d-docsite--header-3">7. Add borders to segment each. <a class="header-anchor d-link d-docsite--link d-link" href="#_7-add-borders-to-segment-each" aria-hidden="true">#</a></h3>`,2),P=s("p",{class:"d-docsite--paragraph"},[a("Add a border to each box by applying "),s("code",null,"d-divide-x"),a(" (horizontal borders) to the surrounding container from the list of "),s("a",{href:"/utilities/borders/divide-width.html",class:"d-docsite--link d-link",target:"_blank",rel:"noopener noreferrer"},"divide width classes"),a(".")],-1),X=s("div",{class:"d-d-flex d-divide-x"},[s("div",{class:"d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8"},"Box 1"),a(),s("div",{class:"d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8"},"Box the 2nd"),a(),s("div",{class:"d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8"},"Box third"),a(),s("div",{class:"d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8"},"Box IV")],-1),Z=p(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-d-flex d-divide-x<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box the 2nd<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box third<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box IV<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="_8-and-change-the-border-color" tabindex="-1" class="d-docsite--header-3">8. And change the border color <a class="header-anchor d-link d-docsite--link d-link" href="#_8-and-change-the-border-color" aria-hidden="true">#</a></h3>`,2),j=s("p",{class:"d-docsite--paragraph"},[a("Since the border color of "),s("code",null,"d-divide-x"),a(" inherits the color of the parent's foreground (implicitly "),s("code",null,"currentColor"),a("), let's soften it with "),s("code",null,"d-divide-black-400"),a(", from the list of "),s("a",{href:"/utilities/borders/divide-color.html",class:"d-docsite--link d-link",target:"_blank",rel:"noopener noreferrer"},"divide color classes"),a(".")],-1),H=s("div",{class:"d-d-flex d-divide-x d-divide-black-400"},[s("div",{class:"d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8"},"Box 1"),a(),s("div",{class:"d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8"},"Box the 2nd"),a(),s("div",{class:"d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8"},"Box third"),a(),s("div",{class:"d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8"},"Box IV")],-1),O=p(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-d-flex d-divide-x d-divide-black-400<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box the 2nd<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box third<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box IV<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="keep-exploring" tabindex="-1" class="d-docsite--header-3">Keep exploring! <a class="header-anchor d-link d-docsite--link d-link" href="#keep-exploring" aria-hidden="true">#</a></h3>`,2),Q=s("p",{class:"d-docsite--paragraph"},[a("View the final result in this "),s("a",{href:"https://codepen.io/pen?template=XWYMMRY",class:"d-docsite--link d-link",target:"_blank",rel:"noopener noreferrer"},"Codepen template"),a(". Continue to explore using the variety of CSS utilities listed here.")],-1);function $(aa,sa){const n=c("code-well-header");return l(),d("div",null,[u,a(),r,a(),k,a(),g,a(),h,a(),v,a(),b,a(),m,a(),t(n,null,{default:e(()=>[x]),_:1}),a(),_,a(),f,a(),t(n,null,{default:e(()=>[y]),_:1}),a(),q,a(),B,a(),t(n,null,{default:e(()=>[w]),_:1}),a(),C,a(),S,a(),V,a(),t(n,null,{default:e(()=>[I]),_:1}),a(),A,a(),z,a(),t(n,null,{default:e(()=>[N]),_:1}),a(),E,a(),F,a(),t(n,null,{default:e(()=>[K]),_:1}),a(),L,a(),M,a(),t(n,null,{default:e(()=>[T]),_:1}),a(),D,a(),R,a(),t(n,null,{default:e(()=>[U]),_:1}),a(),W,a(),Y,a(),t(n,null,{default:e(()=>[G]),_:1}),a(),J,a(),P,a(),t(n,null,{default:e(()=>[X]),_:1}),a(),Z,a(),j,a(),t(n,null,{default:e(()=>[H]),_:1}),a(),O,a(),Q])}const ta=o(i,[["render",$],["__file","index.html.vue"]]);export{ta as default};
