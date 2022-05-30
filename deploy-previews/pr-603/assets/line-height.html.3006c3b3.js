import{lineHeight as i}from"./type.95ef88bd.js";import{_ as m,r as k,o as n,c as t,a as s,F as l,f as r,u as h,b as e,w as c,e as a,d as g,t as p}from"./app.02516445.js";const v=s("h2",{id:"css-variables",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#css-variables","aria-hidden":"true"},"#"),a(" CSS Variables")],-1),_=a(),b={class:"d-h464 d-of-y-scroll d-bb d-bc-black-200"},q={class:"d-table"},w=s("thead",null,[s("tr",null,[s("th",{scope:"col",class:"d-w25p"},"Variable"),a(),s("th",{scope:"col"},"Output")])],-1),y=a(),x={scope:"row",class:"d-ff-mono d-fc-purple d-fw-normal d-fs12"},z=a(),T={class:"d-ff-mono d-fc-orange d-fs12"},j=a(),V=s("h2",{id:"classes",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#classes","aria-hidden":"true"},"#"),a(" Classes")],-1),C=a(),F={class:"d-h464 d-of-y-scroll d-bb d-bc-black-200"},S={scope:"row",class:"d-ff-mono d-fc-purple d-fw-normal d-fs12"},B=a(),N={class:"d-ff-mono d-fc-orange d-fs12"},H=a(),U=s("h2",{id:"relative-line-heights",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#relative-line-heights","aria-hidden":"true"},"#"),a(" Relative line-heights")],-1),D=a(),E=s("p",null,[a("Use "),s("code",null,"d-lh-{n}"),a(" to change an element's line-height relatively. This means no unit is set with the line-height. Instead the line-height value is a multiple of the font-size.")],-1),I=a(),L=s("div",{class:"d-d-grid d-gg16 d-ai-center",style:{"grid-template-columns":"10rem 1fr"}},[s("div",{class:"d-fs12 d-ff-mono d-fc-purple d-fco75"},".d-lh-tighter"),a(),s("div",null,[s("p",{class:"d-fs24 d-lh-tighter d-fc-orange d-bgc-purple-200 d-bgo25"},"The quick brown fox jumps over the lazy dog.")]),a(),s("div",{class:"d-fs12 d-ff-mono d-fc-purple d-fco75"},".d-lh-tight"),a(),s("div",null,[s("p",{class:"d-fs24 d-lh-tight d-fc-orange d-bgc-purple-200 d-bgo25"},"The quick brown fox jumps over the lazy dog.")]),a(),s("div",{class:"d-fs12 d-ff-mono d-fc-purple d-fco75"},".d-lh-normal"),a(),s("div",null,[s("p",{class:"d-fs24 d-lh-normal d-fc-orange d-bgc-purple-200 d-bgo25"},"The quick brown fox jumps over the lazy dog.")]),a(),s("div",{class:"d-fs12 d-ff-mono d-fc-purple d-fco75"},".d-lh-loose"),a(),s("div",null,[s("p",{class:"d-fs24 d-lh-loose d-fc-orange d-bgc-purple-200 d-bgo25"},"The quick brown fox jumps over the lazy dog.")]),a(),s("div",{class:"d-fs12 d-ff-mono d-fc-purple d-fco75"},".d-lh-looser"),a(),s("div",null,[s("p",{class:"d-fs24 d-lh-looser d-fc-orange d-bgc-purple-200 d-bgo25"},"The quick brown fox jumps over the lazy dog.")])],-1),O=g(` <div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-lh-tighter<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-lh-tight<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-lh-normal<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-lh-loose<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-lh-looser<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="fixed-line-heights" tabindex="-1"><a class="header-anchor" href="#fixed-line-heights" aria-hidden="true">#</a> Fixed line-heights</h2> <p>Use <code>d-lh{n}</code> to fix an element&#39;s line-height. This allows you to target a specific line-height based on the font-size. For example if a target 20px line-height is desired and the current font-size is 14px, apply <code>.d-lh6</code> to achieve this target (14px font-size + 6px = 20px target line-height).</p> `,6),R=s("div",{class:"d-d-grid d-gg16 d-ai-center",style:{"grid-template-columns":"10rem 1fr"}},[s("div",{class:"d-fs12 d-ff-mono d-fc-yellow-500"},".d-lh0"),a(),s("div",null,[s("p",{class:"d-fs24 d-lh0 d-fc-yellow-600 d-bgc-yellow-200 d-bgo50"},"The quick brown fox jumps over the lazy dog.")]),a(),s("div",{class:"d-fs12 d-ff-mono d-fc-yellow-500"},".d-lh1"),a(),s("div",null,[s("p",{class:"d-fs24 d-lh1 d-fc-yellow-600 d-bgc-yellow-200 d-bgo50"},"The quick brown fox jumps over the lazy dog.")]),a(),s("div",{class:"d-fs12 d-ff-mono d-fc-yellow-500"},".d-lh2"),a(),s("div",null,[s("p",{class:"d-fs24 d-lh2 d-fc-yellow-600 d-bgc-yellow-200 d-bgo50"},"The quick brown fox jumps over the lazy dog.")]),a(),s("div",{class:"d-fs12 d-ff-mono d-fc-yellow-500"},".d-lh4"),a(),s("div",null,[s("p",{class:"d-fs24 d-lh4 d-fc-yellow-600 d-bgc-yellow-200 d-bgo50"},"The quick brown fox jumps over the lazy dog.")]),a(),s("div",{class:"d-fs12 d-ff-mono d-fc-yellow-500"},".d-lh6"),a(),s("div",null,[s("p",{class:"d-fs24 d-lh6 d-fc-yellow-600 d-bgc-yellow-200 d-bgo50"},"The quick brown fox jumps over the lazy dog.")]),a(),s("div",{class:"d-fs12 d-ff-mono d-fc-yellow-500"},".d-lh8"),a(),s("div",null,[s("p",{class:"d-fs24 d-lh8 d-fc-yellow-600 d-bgc-yellow-200 d-bgo50"},"The quick brown fox jumps over the lazy dog.")]),a(),s("div",{class:"d-fs12 d-ff-mono d-fc-yellow-500"},".d-lh12"),a(),s("div",null,[s("p",{class:"d-fs24 d-lh12 d-fc-yellow-600 d-bgc-yellow-200 d-bgo50"},"The quick brown fox jumps over the lazy dog.")]),a(),s("div",{class:"d-fs12 d-ff-mono d-fc-yellow-500"},".d-lh16"),a(),s("div",null,[s("p",{class:"d-fs24 d-lh16 d-fc-yellow-600 d-bgc-yellow-200 d-bgo50"},"The quick brown fox jumps over the lazy dog.")]),a(),s("div",{class:"d-fs12 d-ff-mono d-fc-yellow-500"},".d-lh20"),a(),s("div",null,[s("p",{class:"d-fs24 d-lh20 d-fc-yellow-600 d-bgc-yellow-200 d-bgo50"},"The quick brown fox jumps over the lazy dog.")]),a(),s("div",{class:"d-fs12 d-ff-mono d-fc-yellow-500"},".d-lh24"),a(),s("div",null,[s("p",{class:"d-fs24 d-lh24 d-fc-yellow-600 d-bgc-yellow-200 d-bgo50"},"The quick brown fox jumps over the lazy dog.")])],-1),A=g(` <div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-lh0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-lh1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-lh2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-lh4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-lh6<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-lh8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-lh12<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-lh16<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-lh20<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-lh24<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,2),G={setup(J){return(K,M)=>{const f=k("utility-class-table"),u=k("code-well-header");return n(),t(l,null,[v,_,s("div",b,[s("table",q,[w,y,s("tbody",null,[(n(!0),t(l,null,r(h(i).slice(0,-1),({class:o,output:d})=>(n(),t("tr",null,[s("th",x,`
          var(--lh`+p(o)+`)
        `,1),z,s("td",T,p(d),1)]))),256))])])]),j,V,C,s("div",F,[e(f,null,{content:c(()=>[s("tbody",null,[(n(!0),t(l,null,r(h(i).slice(0,-1),({class:o,output:d})=>(n(),t("tr",null,[s("th",S,`
            .d-lh`+p(o),1),B,s("td",N,`
            line-height: var(--lh`+p(o)+`) !important;
          `,1)]))),256))])]),_:1})]),H,U,D,E,I,e(u,{class:"d-d-flex d-jc-center d-fd-column d-p24 d-bgc-purple-100 d-w100p d-hmn102",custom:""},{default:c(()=>[L]),_:1}),O,e(u,{class:"d-d-flex d-jc-center d-fd-column d-p24 d-bgc-yellow-100 d-w100p d-hmn102",custom:""},{default:c(()=>[R]),_:1}),A],64)}}};var W=m(G,[["__file","line-height.html.vue"]]);export{W as default};
