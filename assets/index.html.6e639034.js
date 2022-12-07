import{_ as l,r as c,o as d,c as i,a,e as n,w as t,b as s,d as p}from"./app.34cc2af4.js";const u={},r=s("h2",{id:"introduction",tabindex:"-1",class:"d-docsite--header-2 d-my24"},[a("Introduction "),s("a",{class:"header-anchor d-link d-td-none d-docsite--link d-link",href:"#introduction","aria-hidden":"true"},"#")],-1),k=s("p",{class:"d-docsite--paragraph d-mb8 d-lh-400 d-wmx75ch"},"Utilities – also known as “trumps,” “helper classes,” or “alterations” – are high-specificity selectors for making very targeted alterations to existing elements or components.",-1),h=s("p",{class:"d-docsite--paragraph d-mb8 d-lh-400 d-wmx75ch"},[a("Each utility is a small, "),s("a",{href:"https://css-tricks.com/lets-define-exactly-atomic-css/",target:"_blank"},"atomic style"),a(" declaration that, when chained together, should mitigate most situations in which custom CSS must be written. Just write these classes right in your mark-up and you're all set!")],-1),g=s("p",{class:"d-docsite--paragraph d-mb8 d-lh-400 d-wmx75ch"},"Most utilities come with responsive options, enabling alterations at targeted screen size ranges. For example, “small padding on smaller screens, larger padding on bigger screens.”",-1),m=s("p",{class:"d-docsite--paragraph d-mb8 d-lh-400 d-wmx75ch"},"While an atomic CSS approach comes with many advantages, we recognize it also offers a notable disadvantage: reducing the CSS cascade. This is especially true for repeated UI elements, which can end up creating redundant mark-up. For these instances, Dialtone offers components.",-1),v=s("h2",{id:"example",tabindex:"-1",class:"d-docsite--header-2 d-my24"},[a("Example "),s("a",{class:"header-anchor d-link d-td-none d-docsite--link d-link",href:"#example","aria-hidden":"true"},"#")],-1),b=s("h3",{id:"border-top",tabindex:"-1",class:"d-docsite--header-3 d-my24"},[a("Border top "),s("a",{class:"header-anchor d-link d-td-none d-docsite--link d-link",href:"#border-top","aria-hidden":"true"},"#")],-1),x=s("p",{class:"d-docsite--paragraph d-mb8 d-lh-400 d-wmx75ch"},[s("code",null,"d-bt"),a(" applies a border ("),s("code",null,"b"),a(") to the top ("),s("code",null,"t"),a(") side. 1px is the default width, and the color is inherited from the foreground color ("),s("code",null,"currentColor"),a(").")],-1),_=s("div",{class:"d-bt"},"Box",-1),f=p(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bt<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="border-top-width" tabindex="-1" class="d-docsite--header-3 d-my24">Border top width <a class="header-anchor d-link d-td-none d-docsite--link d-link" href="#border-top-width" aria-hidden="true">#</a></h3>`,2),y=s("p",{class:"d-docsite--paragraph d-mb8 d-lh-400 d-wmx75ch"},[s("code",null,"d-btw4"),a(" applies a 4px ("),s("code",null,"4"),a(") width ("),s("code",null,"w"),a(") to the top ("),s("code",null,"t"),a(").")],-1),q=s("div",{class:"d-bt d-btw4"},"Box",-1),B=p(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bt d-btw4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="border-color" tabindex="-1" class="d-docsite--header-3 d-my24">Border color <a class="header-anchor d-link d-td-none d-docsite--link d-link" href="#border-color" aria-hidden="true">#</a></h3>`,2),w={class:"d-docsite--paragraph d-mb8 d-lh-400 d-wmx75ch"},C=s("code",null,"d-bc-purple-400",-1),S=s("code",null,"b",-1),V=s("code",null,"c",-1),I=s("div",{class:"d-bt d-btw4 d-bc-purple-400"},"Box",-1),A=p(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bt d-btw4 d-bc-purple-400<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="tutorial" tabindex="-1" class="d-docsite--header-2 d-my24">Tutorial <a class="header-anchor d-link d-td-none d-docsite--link d-link" href="#tutorial" aria-hidden="true">#</a></h2>`,2),z=s("p",{class:"d-docsite--paragraph d-mb8 d-lh-400 d-wmx75ch"},[a("A basic example styling a container by combining Dialtone's CSS utilities. Follow each step with this "),s("a",{href:"https://codepen.io/pen?template=dyKvvZB",class:"d-docsite--link d-link",target:"_blank",rel:"noopener noreferrer"},"Codepen template.")],-1),L=s("h3",{id:"_1-begin-with-an-unstyled-container",tabindex:"-1",class:"d-docsite--header-3 d-my24"},[a("1. Begin with an unstyled container "),s("a",{class:"header-anchor d-link d-td-none d-docsite--link d-link",href:"#_1-begin-with-an-unstyled-container","aria-hidden":"true"},"#")],-1),N=s("div",null,"Box",-1),R=p(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>Box<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="_2-apply-a-dark-background-color" tabindex="-1" class="d-docsite--header-3 d-my24">2. Apply a dark background color <a class="header-anchor d-link d-td-none d-docsite--link d-link" href="#_2-apply-a-dark-background-color" aria-hidden="true">#</a></h3>`,2),E={class:"d-docsite--paragraph d-mb8 d-lh-400 d-wmx75ch"},F=s("code",null,"d-bgc-black-900",-1),M=s("div",{class:"d-bgc-black-900"},"Box",-1),T=p(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-black-900<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="_3-apply-color-to-the-foreground-text" tabindex="-1" class="d-docsite--header-3 d-my24">3. Apply color to the foreground text <a class="header-anchor d-link d-td-none d-docsite--link d-link" href="#_3-apply-color-to-the-foreground-text" aria-hidden="true">#</a></h3>`,2),D={class:"d-docsite--paragraph d-mb8 d-lh-400 d-wmx75ch"},K=s("code",null,"d-fc-primary-inverted",-1),U=s("div",{class:"d-bgc-black-600 d-fc-primary-inverted"},"Box",-1),W=p(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-black-600 d-fc-primary-inverted<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="_4-apply-some-padding" tabindex="-1" class="d-docsite--header-3 d-my24">4. Apply some padding <a class="header-anchor d-link d-td-none d-docsite--link d-link" href="#_4-apply-some-padding" aria-hidden="true">#</a></h3>`,2),Y={class:"d-docsite--paragraph d-mb8 d-lh-400 d-wmx75ch"},J=s("code",null,"d-px16",-1),P=s("code",null,"d-py8",-1),X=s("div",{class:"d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8"},"Box",-1),Z=p(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="_5-list-a-bunch-of-boxes" tabindex="-1" class="d-docsite--header-3 d-my24">5. List a bunch of boxes <a class="header-anchor d-link d-td-none d-docsite--link d-link" href="#_5-list-a-bunch-of-boxes" aria-hidden="true">#</a></h3>`,2),j=s("p",{class:"d-docsite--paragraph d-mb8 d-lh-400 d-wmx75ch"},"Let's wrap a repeating set of boxes in a new container.",-1),G=s("div",null,[s("div",{class:"d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8"},"Box 1"),a(),s("div",{class:"d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8"},"Box the 2nd"),a(),s("div",{class:"d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8"},"Box third"),a(),s("div",{class:"d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8"},"Box IV")],-1),H=p(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box the 2nd<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box third<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box IV<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="_6-render-them-horizontally" tabindex="-1" class="d-docsite--header-3 d-my24">6. Render them horizontally <a class="header-anchor d-link d-td-none d-docsite--link d-link" href="#_6-render-them-horizontally" aria-hidden="true">#</a></h3>`,2),O=s("p",{class:"d-docsite--paragraph d-mb8 d-lh-400 d-wmx75ch"},[a("Convert it to a "),s("code",null,"flex"),a(" container by adding "),s("code",null,'class="d-d-flex"'),a(".")],-1),Q=s("div",{class:"d-d-flex"},[s("div",{class:"d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8"},"Box 1"),a(),s("div",{class:"d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8"},"Box the 2nd"),a(),s("div",{class:"d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8"},"Box third"),a(),s("div",{class:"d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8"},"Box IV")],-1),$=p(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-d-flex<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box the 2nd<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box third<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box IV<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="_7-add-borders-to-segment-each" tabindex="-1" class="d-docsite--header-3 d-my24">7. Add borders to segment each. <a class="header-anchor d-link d-td-none d-docsite--link d-link" href="#_7-add-borders-to-segment-each" aria-hidden="true">#</a></h3>`,2),aa={class:"d-docsite--paragraph d-mb8 d-lh-400 d-wmx75ch"},sa=s("code",null,"d-divide-x",-1),na=s("div",{class:"d-d-flex d-divide-x"},[s("div",{class:"d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8"},"Box 1"),a(),s("div",{class:"d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8"},"Box the 2nd"),a(),s("div",{class:"d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8"},"Box third"),a(),s("div",{class:"d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8"},"Box IV")],-1),ta=p(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-d-flex d-divide-x<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box the 2nd<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box third<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box IV<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="_8-and-change-the-border-color" tabindex="-1" class="d-docsite--header-3 d-my24">8. And change the border color <a class="header-anchor d-link d-td-none d-docsite--link d-link" href="#_8-and-change-the-border-color" aria-hidden="true">#</a></h3>`,2),ea={class:"d-docsite--paragraph d-mb8 d-lh-400 d-wmx75ch"},pa=s("code",null,"d-divide-x",-1),oa=s("code",null,"currentColor",-1),ca=s("code",null,"d-divide-black-400",-1),la=s("div",{class:"d-d-flex d-divide-x d-divide-black-400"},[s("div",{class:"d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8"},"Box 1"),a(),s("div",{class:"d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8"},"Box the 2nd"),a(),s("div",{class:"d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8"},"Box third"),a(),s("div",{class:"d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8"},"Box IV")],-1),da=p(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-d-flex d-divide-x d-divide-black-400<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box the 2nd<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box third<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Box IV<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="keep-exploring" tabindex="-1" class="d-docsite--header-3 d-my24">Keep exploring! <a class="header-anchor d-link d-td-none d-docsite--link d-link" href="#keep-exploring" aria-hidden="true">#</a></h3>`,2),ia=s("p",{class:"d-docsite--paragraph d-mb8 d-lh-400 d-wmx75ch"},[a("View the final result in this "),s("a",{href:"https://codepen.io/pen?template=XWYMMRY",class:"d-docsite--link d-link",target:"_blank",rel:"noopener noreferrer"},"Codepen template"),a(". Continue to explore using the variety of CSS utilities listed here.")],-1);function ua(ra,ka){const e=c("code-well-header"),o=c("RouterLink");return d(),i("div",null,[r,a(),k,a(),h,a(),g,a(),m,a(),v,a(),b,a(),x,a(),n(e,null,{default:t(()=>[_]),_:1}),a(),f,a(),y,a(),n(e,null,{default:t(()=>[q]),_:1}),a(),B,a(),s("p",w,[C,a(" applies a border ("),S,a(") color ("),V,a(") of "),n(o,{to:"/design/colors/#purple",class:"d-docsite--link d-link"},{default:t(()=>[a("Purple 400")]),_:1}),a(".")]),a(),n(e,null,{default:t(()=>[I]),_:1}),a(),A,a(),z,a(),L,a(),n(e,null,{default:t(()=>[N]),_:1}),a(),R,a(),s("p",E,[a("Add "),F,a(" from the list of "),n(o,{to:"/utilities/backgrounds/color/",class:"d-docsite--link d-link"},{default:t(()=>[a("background color utility classes")]),_:1}),a(".")]),a(),n(e,null,{default:t(()=>[M]),_:1}),a(),T,a(),s("p",D,[a("Since this is primary content on a dark background, let's use "),K,a(" from the "),n(o,{to:"/utilities/typography/color/",class:"d-docsite--link d-link"},{default:t(()=>[a("font color utilities")]),_:1}),a(".")]),a(),n(e,null,{default:t(()=>[U]),_:1}),a(),W,a(),s("p",Y,[a("Let's use "),J,a(" for horizontal padding (right and left), and "),P,a(" for vertical padding (top and bottom), from the list of "),n(o,{to:"/utilities/spacing/padding/",class:"d-docsite--link d-link"},{default:t(()=>[a("padding utility classes")]),_:1}),a(".")]),a(),n(e,null,{default:t(()=>[X]),_:1}),a(),Z,a(),j,a(),n(e,null,{default:t(()=>[G]),_:1}),a(),H,a(),O,a(),n(e,null,{default:t(()=>[Q]),_:1}),a(),$,a(),s("p",aa,[a("Add a border to each box by applying "),sa,a(" (horizontal borders) to the surrounding container from the list of "),n(o,{to:"/utilities/borders/divide-width.html",class:"d-docsite--link d-link"},{default:t(()=>[a("divide width classes")]),_:1}),a(".")]),a(),n(e,null,{default:t(()=>[na]),_:1}),a(),ta,a(),s("p",ea,[a("Since the border color of "),pa,a(" inherits the color of the parent's foreground (implicitly "),oa,a("), let's soften it with "),ca,a(", from the list of "),n(o,{to:"/utilities/borders/divide-color.html",class:"d-docsite--link d-link"},{default:t(()=>[a("divide color classes")]),_:1}),a(".")]),a(),n(e,null,{default:t(()=>[la]),_:1}),a(),da,a(),ia])}const ga=l(u,[["render",ua],["__file","index.html.vue"]]);export{ga as default};
