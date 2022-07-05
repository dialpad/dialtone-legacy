import{_ as h,r as k,o,c as p,b as e,w as d,a as s,e as n,d as r,F as l,f as i,t}from"./app.48e7d7f0.js";const f={},_=s("h2",{id:"adding-a-transition",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#adding-a-transition","aria-hidden":"true"},"#"),n(" Adding a transition")],-1),b=n(),m=s("p",null,[n("Use "),s("code",null,"d-t"),n(" to add a transition to an element.")],-1),v=n(),w=s("div",{class:"d-fl-center d-p24 d-bar8 d-bgc-purple-300 h:d-bgc-yellow-300 h:d-bs-lg d-fs18 d-fw-bold d-fc-white h:d-fc-dark d-t d-c-pointer"},"Hover on me",-1),q=r(` <div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgc-purple-300 h:d-bgc-yellow-300 h:d-bs-lg d-fc-white h:d-fc-dark d-t<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="changing-transition-duration" tabindex="-1"><a class="header-anchor" href="#changing-transition-duration" aria-hidden="true">#</a> Changing transition duration</h2> <p>Use <code>d-td{n}</code> change an element&#39;s <code>transition-delay</code> from it&#39;s default <code>50ms</code> length.</p> `,6),y=s("div",{class:"d-fl-center d-p24 d-bar8 d-bgc-pink-400 h:d-bgc-yellow-300 h:d-bs-lg d-fs18 d-fw-bold d-fc-white h:d-fc-dark d-t d-td0 d-c-pointer"},"0ms",-1),x=n(),C=s("div",{class:"d-fl-center d-p24 d-bar8 d-bgc-pink-400 h:d-bgc-yellow-300 h:d-bs-lg d-fs18 d-fw-bold d-fc-white h:d-fc-dark d-t d-c-pointer"},"50ms",-1),E=n(),B=s("div",{class:"d-fl-center d-p24 d-bar8 d-bgc-pink-400 h:d-bgc-yellow-300 h:d-bs-lg d-fs18 d-fw-bold d-fc-white h:d-fc-dark d-t d-td100 d-c-pointer"},"100ms",-1),N=n(),O=s("div",{class:"d-fl-center d-p24 d-bar8 d-bgc-pink-400 h:d-bgc-yellow-300 h:d-bs-lg d-fs18 d-fw-bold d-fc-white h:d-fc-dark d-t d-td150 d-c-pointer"},"150ms",-1),U=n(),V=s("div",{class:"d-fl-center d-p24 d-bar8 d-bgc-pink-400 h:d-bgc-yellow-300 h:d-bs-lg d-fs18 d-fw-bold d-fc-white h:d-fc-dark d-t d-td200 d-c-pointer"},"200ms",-1),S=r(` <div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-t d-td0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-t<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-t d-td100<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-t d-td150<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-t d-td200<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="changing-transition-easing" tabindex="-1"><a class="header-anchor" href="#changing-transition-easing" aria-hidden="true">#</a> Changing transition easing</h2> <p>Use <code>d-ttf-{n}</code> change an element&#39;s <code>transition-timing-function</code> (aka easing) from it&#39;s default Quad Ease In, Ease Out value.</p> `,6),A=s("div",{class:"d-fl-center d-p24 d-bar8 d-bgc-green-300 h:d-bgc-purple-100 h:d-bs-lg d-fs18 d-fw-bold d-t d-td100 d-c-pointer"},"Ease In, Ease Out",-1),F=n(),I=s("div",{class:"d-fl-center d-p24 d-bar8 d-bgc-green-300 h:d-bgc-purple-100 h:d-bs-lg d-fs18 d-fw-bold d-t d-td100 d-ttf-out d-c-pointer"},"Ease Out",-1),T=r(` <div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-t d-td100<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-t d-td100 d-ttf-out<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="changing-transition-property" tabindex="-1"><a class="header-anchor" href="#changing-transition-property" aria-hidden="true">#</a> Changing transition property</h2> <p>Use <code>d-tp-{n}</code> change an what items within an element are transitioned.</p> `,6),D=s("div",{class:"d-fl-center d-p24 d-bar8 d-bgc-yellow-400 h:d-bgc-purple-100 h:d-bs-lg d-fs18 d-fw-bold d-fc-dark h:d-fc-red-400 d-t d-td100 d-c-pointer"},"All",-1),H=n(),L=s("div",{class:"d-fl-center d-p24 d-bar8 d-bgc-yellow-400 d-fs18 d-fw-bold d-fc-dark d-t d-td100 d-tp-o d-c-pointer h:d-o50"},"Opacity",-1),Q=n(),j=s("div",{class:"d-fl-center d-p24 d-bar8 d-bgc-yellow-400 d-fs18 d-fw-bold d-fc-dark d-t d-td100 d-tp-bs d-c-pointer d-bs-sm h:d-bs-lg"},"Box Shadow",-1),z=n(),G=s("div",{class:"d-fl-center d-p24 d-bar8 d-bgc-yellow-400 h:d-bgc-purple-100 d-fs18 d-fw-bold d-fc-dark d-t d-td100 d-tp-bgc d-c-pointer"},"Background",-1),J=n(),K=s("div",{class:"d-fl-center d-p24 d-bar8 d-bgc-yellow-400 d-fs18 d-fw-bold d-fc-dark d-t d-td100 d-tp-transform d-c-pointer"},"Transform",-1),M=n(),P=s("div",{class:"d-fl-center d-p24 d-bar8 d-bgc-yellow-400 h:d-bgc-purple-100 d-fs18 d-fw-bold d-fc-dark h:d-fc-red-400 d-ba h:d-bc-yellow-500 d-t d-td100 d-tp-colors d-c-pointer"},"Colors",-1),R=r(` <div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-t<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-t d-tp-o<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-t d-tp-bs<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-t d-tp-bgc<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-t d-tp-transform<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-t d-tp-colors<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="classes" tabindex="-1"><a class="header-anchor" href="#classes" aria-hidden="true">#</a> Classes</h2> `,4),W={class:"d-h464 d-of-y-scroll d-bb d-bc-black-200"},X=s("tbody",null,[s("tr",null,[s("th",{scope:"row",class:"d-ff-mono d-fc-purple d-fw-normal d-fs12"},".d-t"),n(),s("td",{class:"d-ff-mono d-fc-orange-500 d-fs12"},[n(`
            transition-duration: var(--td25);`),s("br"),n(`
            transition-property: all;`),s("br"),n(`
            transition-timing-function: var(--ttf-in-out);`),s("br"),n(`
            transition-delay: 0s;`)])])],-1),Y=n(),Z={scope:"row",class:"d-ff-mono d-fc-purple d-fw-normal d-fs12"},$=n(),ss={class:"d-ff-mono d-fc-orange-500 d-fs12"},ns={scope:"row",class:"d-ff-mono d-fc-purple d-fw-normal d-fs12"},as=n(),ts={class:"d-ff-mono d-fc-orange-500 d-fs12"},os={scope:"row",class:"d-ff-mono d-fc-purple d-fw-normal d-fs12"},ps=n(),cs={class:"d-ff-mono d-fc-orange-500 d-fs12"},es=n(`
            transition-property:
              `),ds={key:0},ls={key:1},is={key:2},us={key:3},rs={key:4},ks=n(`
            !important;
          `),gs={scope:"row",class:"d-ff-mono d-fc-purple d-fw-normal d-fs12"},hs=n(),fs={class:"d-ff-mono d-fc-orange-500 d-fs12"};function _s(bs,ms){const u=k("code-well-header"),g=k("utility-class-table");return o(),p("div",null,[_,b,m,v,e(u,{class:"d-fl-center d-p24 d-bgc-purple-100 d-bgo50 d-w100p d-hmn102",custom:""},{default:d(()=>[w]),_:1}),q,e(u,{class:"d-fl-col3 d-flg8 d-p24 d-bgc-pink-100 d-bgo50 d-w100p d-hmn102 d-of-auto",custom:""},{default:d(()=>[y,x,C,E,B,N,O,U,V]),_:1}),S,e(u,{class:"d-fl-col2 d-flg8 d-p24 d-bgc-green-100 d-bgo50 d-w100p d-hmn102",custom:""},{default:d(()=>[A,F,I]),_:1}),T,e(u,{class:"d-fl-col3 d-flg8 d-p24 d-bgc-yellow-100 d-bgo50 d-w100p d-hmn102 d-of-auto",custom:""},{default:d(()=>[D,H,L,Q,j,z,G,J,K,M,P]),_:1}),R,s("div",W,[e(g,null,{content:d(()=>[X,Y,(o(),p(l,null,i(["td","ttf","tp","t-delay"],c=>s("tbody",null,[c==="td"?(o(),p(l,{key:0},i([0,50,100,150,200],a=>s("tr",null,[s("th",Z,".d-"+t(c)+t(a),1),$,s("td",ss,"transition-duration: var(--td"+t(a)+") !important;",1)])),64)):c==="ttf"?(o(),p(l,{key:1},i(["in-out","out"],a=>s("tr",null,[s("th",ns,".d-"+t(c)+"-"+t(a),1),as,s("td",ts,"transition-timing-function: var(--ttf-"+t(a)+") !important;",1)])),64)):c==="tp"?(o(),p(l,{key:2},i(["all","o","bs","bgc","transform","colors"],a=>s("tr",null,[s("th",os,".d-"+t(c)+"-"+t(a),1),ps,s("td",cs,[es,a==="o"?(o(),p("span",ds,"opacity")):a==="bs"?(o(),p("span",ls,"box-shadow")):a==="bgc"?(o(),p("span",is,"background-color")):a==="colors"?(o(),p("span",us,"background-color, border-color, color, fill, stroke")):(o(),p("span",rs,t(a),1)),ks])])),64)):(o(),p(l,{key:3},i([25,50,100,150,200],a=>s("tr",null,[s("th",gs,".d-"+t(c)+t(a),1),hs,s("td",fs,"transition-delay: var(--td"+t(a)+") !important;",1)])),64))])),64))]),_:1})])])}var ws=h(f,[["render",_s],["__file","transition.html.vue"]]);export{ws as default};
