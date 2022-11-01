import{_ as h,o,c as p,b as e,w as d,a as s,d as a,e as r,r as g,F as l,f as i,t}from"./app.462be014.js";const f={},_=s("h2",{id:"adding-a-transition",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#adding-a-transition","aria-hidden":"true"},"#"),a(" Adding a transition")],-1),b=a(),m=s("p",null,[a("Use "),s("code",null,"d-t"),a(" to add a transition to an element.")],-1),v=a(),w=s("div",{class:"d-fl-center d-p24 d-bar8 d-bgc-purple-300 h:d-bgc-gold-200 h:d-bs-lg d-fs-200 d-fw-bold d-fc-white h:d-fc-primary d-t d-c-pointer"},"Hover on me",-1),q=r(` <div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-purple-300 h:d-bgc-gold-200 h:d-bs-lg d-fc-white h:d-fc-primary d-t<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="changing-transition-duration" tabindex="-1"><a class="header-anchor" href="#changing-transition-duration" aria-hidden="true">#</a> Changing transition duration</h2> <p>Use <code>d-td{n}</code> change an element&#39;s <code>transition-delay</code> from it&#39;s default <code>50ms</code> length.</p> `,6),y=s("div",{class:"d-fl-center d-p24 d-bar8 d-bgc-magenta-200 h:d-bgc-gold-200 h:d-bs-lg d-fs-200 d-fw-bold d-fc-white h:d-fc-primary d-t d-td0 d-c-pointer"},"0ms",-1),x=a(),C=s("div",{class:"d-fl-center d-p24 d-bar8 d-bgc-magenta-200 h:d-bgc-gold-200 h:d-bs-lg d-fs-200 d-fw-bold d-fc-white h:d-fc-primary d-t d-c-pointer"},"50ms",-1),E=a(),B=s("div",{class:"d-fl-center d-p24 d-bar8 d-bgc-magenta-200 h:d-bgc-gold-200 h:d-bs-lg d-fs-200 d-fw-bold d-fc-white h:d-fc-primary d-t d-td100 d-c-pointer"},"100ms",-1),N=a(),O=s("div",{class:"d-fl-center d-p24 d-bar8 d-bgc-magenta-200 h:d-bgc-gold-200 h:d-bs-lg d-fs-200 d-fw-bold d-fc-white h:d-fc-primary d-t d-td150 d-c-pointer"},"150ms",-1),U=a(),V=s("div",{class:"d-fl-center d-p24 d-bar8 d-bgc-magenta-200 h:d-bgc-gold-200 h:d-bs-lg d-fs-200 d-fw-bold d-fc-white h:d-fc-primary d-t d-td200 d-c-pointer"},"200ms",-1),A=r(` <div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-t d-td0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-t<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-t d-td100<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-t d-td150<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-t d-td200<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="changing-transition-easing" tabindex="-1"><a class="header-anchor" href="#changing-transition-easing" aria-hidden="true">#</a> Changing transition easing</h2> <p>Use <code>d-ttf-{n}</code> change an element&#39;s <code>transition-timing-function</code> (aka easing) from it&#39;s default Quad Ease In, Ease Out value.</p> `,6),F=s("div",{class:"d-fl-center d-p24 d-bar8 d-bgc-green-200 h:d-bgc-purple-100 h:d-bs-lg d-fs-200 d-fw-bold d-t d-td100 d-c-pointer"},"Ease In, Ease Out",-1),I=a(),S=s("div",{class:"d-fl-center d-p24 d-bar8 d-bgc-green-200 h:d-bgc-purple-100 h:d-bs-lg d-fs-200 d-fw-bold d-t d-td100 d-ttf-out d-c-pointer"},"Ease Out",-1),T=r(` <div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-t d-td100<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-t d-td100 d-ttf-out<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="changing-transition-property" tabindex="-1"><a class="header-anchor" href="#changing-transition-property" aria-hidden="true">#</a> Changing transition property</h2> <p>Use <code>d-tp-{n}</code> change an what items within an element are transitioned.</p> `,6),D=s("div",{class:"d-fl-center d-p24 d-bar8 d-bgc-gold-200 h:d-bgc-purple-100 h:d-bs-lg d-fs-200 d-fw-bold d-fc-primary h:d-fc-red-200 d-t d-td100 d-c-pointer"},"All",-1),H=a(),L=s("div",{class:"d-fl-center d-p24 d-bar8 d-bgc-gold-200 d-fs-200 d-fw-bold d-fc-primary d-t d-td100 d-tp-o d-c-pointer h:d-o50"},"Opacity",-1),Q=a(),j=s("div",{class:"d-fl-center d-p24 d-bar8 d-bgc-gold-200 d-fs-200 d-fw-bold d-fc-primary d-t d-td100 d-tp-bs d-c-pointer d-bs-sm h:d-bs-lg"},"Box shadow",-1),z=a(),G=s("div",{class:"d-fl-center d-p24 d-bar8 d-bgc-gold-200 h:d-bgc-purple-100 d-fs-200 d-fw-bold d-fc-primary d-t d-td100 d-tp-bgc d-c-pointer"},"Background",-1),J=a(),K=s("div",{class:"d-fl-center d-p24 d-bar8 d-bgc-gold-200 d-fs-200 d-fw-bold d-fc-primary d-t d-td100 d-tp-transform d-c-pointer"},"Transform",-1),M=a(),P=s("div",{class:"d-fl-center d-p24 d-bar8 d-bgc-gold-200 h:d-bgc-purple-100 d-fs-200 d-fw-bold d-fc-primary h:d-fc-red-200 d-ba h:d-bc-gold-300 d-t d-td100 d-tp-colors d-c-pointer"},"Colors",-1),R=r(` <div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-t<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-t d-tp-o<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-t d-tp-bs<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-t d-tp-bgc<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-t d-tp-transform<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-t d-tp-colors<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="classes" tabindex="-1"><a class="header-anchor" href="#classes" aria-hidden="true">#</a> Classes</h2> `,4),W={class:"d-h464 d-of-y-scroll d-bb d-bc-black-200"},X=s("tbody",null,[s("tr",null,[s("th",{scope:"row",class:"d-ff-mono d-fc-purple-400 d-fw-normal d-fs-100"},".d-t"),a(),s("td",{class:"d-ff-mono d-fs-100"},[a(`
            transition-duration: var(--td25);`),s("br"),a(`
            transition-property: all;`),s("br"),a(`
            transition-timing-function: var(--ttf-in-out);`),s("br"),a(`
            transition-delay: 0s;`)])])],-1),Y=a(),Z={scope:"row",class:"d-ff-mono d-fc-purple-400 d-fw-normal d-fs-100"},$=a(),ss={class:"d-ff-mono d-fs-100"},as={scope:"row",class:"d-ff-mono d-fc-purple-400 d-fw-normal d-fs-100"},ns=a(),ts={class:"d-ff-mono d-fs-100"},os={scope:"row",class:"d-ff-mono d-fc-purple-400 d-fw-normal d-fs-100"},ps=a(),cs={class:"d-ff-mono d-fs-100"},es=a(`
            transition-property:
              `),ds={key:0},ls={key:1},is={key:2},us={key:3},rs={key:4},gs=a(`
            !important;
          `),ks={scope:"row",class:"d-ff-mono d-fc-purple-400 d-fw-normal d-fs-100"},hs=a(),fs={class:"d-ff-mono d-fs-100"};function _s(bs,ms){const u=g("code-well-header"),k=g("utility-class-table");return o(),p("div",null,[_,b,m,v,e(u,{class:"d-fl-center d-p24 d-bgc-purple-100 d-bgo50 d-w100p d-hmn102",custom:""},{default:d(()=>[w]),_:1}),q,e(u,{class:"d-fl-col3 d-flg8 d-p24 d-bgc-magenta-100 d-bgo50 d-w100p d-hmn102 d-of-auto",custom:""},{default:d(()=>[y,x,C,E,B,N,O,U,V]),_:1}),A,e(u,{class:"d-fl-col2 d-flg8 d-p24 d-bgc-green-100 d-bgo50 d-w100p d-hmn102",custom:""},{default:d(()=>[F,I,S]),_:1}),T,e(u,{class:"d-fl-col3 d-flg8 d-p24 d-bgc-gold-100 d-bgo50 d-w100p d-hmn102 d-of-auto",custom:""},{default:d(()=>[D,H,L,Q,j,z,G,J,K,M,P]),_:1}),R,s("div",W,[e(k,null,{content:d(()=>[X,Y,(o(),p(l,null,i(["td","ttf","tp","t-delay"],c=>s("tbody",null,[c==="td"?(o(),p(l,{key:0},i([0,50,100,150,200],n=>s("tr",null,[s("th",Z,".d-"+t(c)+t(n),1),$,s("td",ss,"transition-duration: var(--td"+t(n)+") !important;",1)])),64)):c==="ttf"?(o(),p(l,{key:1},i(["in-out","out"],n=>s("tr",null,[s("th",as,".d-"+t(c)+"-"+t(n),1),ns,s("td",ts,"transition-timing-function: var(--ttf-"+t(n)+") !important;",1)])),64)):c==="tp"?(o(),p(l,{key:2},i(["all","o","bs","bgc","transform","colors"],n=>s("tr",null,[s("th",os,".d-"+t(c)+"-"+t(n),1),ps,s("td",cs,[es,n==="o"?(o(),p("span",ds,"opacity")):n==="bs"?(o(),p("span",ls,"box-shadow")):n==="bgc"?(o(),p("span",is,"background-color")):n==="colors"?(o(),p("span",us,"background-color, border-color, color, fill, stroke")):(o(),p("span",rs,t(n),1)),gs])])),64)):(o(),p(l,{key:3},i([25,50,100,150,200],n=>s("tr",null,[s("th",ks,".d-"+t(c)+t(n),1),hs,s("td",fs,"transition-delay: var(--td"+t(n)+") !important;",1)])),64))])),64))]),_:1})])])}var ws=h(f,[["render",_s],["__file","transition.html.vue"]]);export{ws as default};
