import{gradients as _}from"./backgrounds.fca96f27.js";import v from"./colors.8b2531ad.js";import{_ as w,r as k,o as e,c as p,b as c,w as d,a,F as r,e as s,d as u,f as i,t as n,l as f,u as h,n as q}from"./app.4cea19cb.js";const x=a("h2",{id:"directions",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#directions","aria-hidden":"true"},"#"),s(" Directions")],-1),y=a("p",null,"To create a background gradient, first declare the desired gradient and, if applicable, the direction. All classes with directions are linear gradients. Radial gradients start from the center and work out to the edge. Conic gradients progressively work around a circle.",-1),j={scope:"row",class:"d-ff-mono d-fc-purple d-fw-normal d-fs12"},C={class:"d-ff-mono d-fc-orange d-fs12"},U={key:0},F=s(" !important; "),V=a("h2",{id:"color-stops",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#color-stops","aria-hidden":"true"},"#"),s(" Color Stops")],-1),N=a("p",null,[s("The starting stop ("),a("code",null,"d-bgg-from-{color}"),s(") should be declared. Optionally an ending stop ("),a("code",null,"d-bgg-to-{color}"),s(") can also be declared.")],-1),S={class:"d-h464 d-of-y-scroll d-bb d-bc-black-200"},B={style:{display:"contents"}},T={scope:"row",class:"d-ff-mono d-fc-purple d-fw-normal d-fs12"},$={class:"d-d-flex d-jc-space-between d-ai-center"},D={class:"d-fl-grow1 d-ff-mono d-fc-orange d-fs12"},E={key:0},H=s(" --bgg-from-opacity: 100%;"),z=a("br",null,null,-1),A=a("br",null,null,-1),L={key:1},O=s(" --bgg-to-opacity: 100%;"),R=a("br",null,null,-1),Y=a("h2",{id:"starting-color",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#starting-color","aria-hidden":"true"},"#"),s(" Starting color")],-1),G=a("p",null,[s("Use "),a("code",null,"d-bgg-from-{color}"),s(" to declare the gradient starting color stop.")],-1),I=a("div",{class:"d-w100p d-h128 d-bar8 d-bgg-to-br d-bgg-from-purple-500"},null,-1),J=u(`<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgg-to-br d-bgg-from-purple-500<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="ending-color" tabindex="-1"><a class="header-anchor" href="#ending-color" aria-hidden="true">#</a> Ending color</h2><p>Use <code>d-bgg-to-{color}</code> to declare the gradient ending color stop.</p>`,3),K=a("div",{class:"d-w100p d-h128 d-bar8 d-bgg-to-br d-bgg-from-purple-500 d-bgg-to-pink-400"},null,-1),M=u(`<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgg-to-br d-bgg-from-purple-500 d-bgg-to-pink-400<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="changing-opacities" tabindex="-1"><a class="header-anchor" href="#changing-opacities" aria-hidden="true">#</a> Changing opacities</h2><p>Use <code>d-bgg-(from|to)-o{n}</code> to change the opacity values of each gradient color stop. You can also change the opacity values of each gradient color stop on <code>:hover</code>, <code>:focus</code>, <code>:focus-visible</code>, or in dark mode by using the respective <code>h:d-bgg-(from|to)-o{n}</code>, <code>f:d-bgg-(from|to)-o{n}</code>, <code>fv:d-bgg-(from|to)-o{n}</code>, <code>d:d-bgg-(from|to)-o{n}</code> prefixes.</p>`,3),P=a("div",{class:"d-d-flex d-jc-space-between d-ai-center d-p8 d-w100p d-h48 d-bar8 d-bgg-to-r d-bgg-from-purple-300 d-bgg-to-pink-300 d-bgg-to-o0 d-fs24 d-fw-bold d-fc-white"},[a("span",null,"100%"),a("span",null,"0%")],-1),Q=a("div",{class:"d-d-flex d-jc-space-between d-ai-center d-p8 d-w100p d-h48 d-bar8 d-bgg-to-r d-bgg-from-purple-300 d-bgg-from-o99 d-bgg-to-pink-300 d-bgg-to-o10 d-fs24 d-fw-bold d-fc-white"},[a("span",null,"99%"),a("span",null,"10%")],-1),W=a("div",{class:"d-d-flex d-jc-space-between d-ai-center d-p8 d-w100p d-h48 d-bar8 d-bgg-to-r d-bgg-from-purple-300 d-bgg-from-o95 d-bgg-to-pink-300 d-bgg-to-o25 d-fs24 d-fw-bold d-fc-white"},[a("span",null,"95%"),a("span",null,"25%")],-1),X=a("div",{class:"d-d-flex d-jc-space-between d-ai-center d-p8 d-w100p d-h48 d-bar8 d-bgg-to-r d-bgg-from-purple-300 d-bgg-from-o90 d-bgg-to-pink-300 d-bgg-to-o50 d-fs24 d-fw-bold d-fc-white"},[a("span",null,"90%"),a("span",null,"50%")],-1),Z=a("div",{class:"d-d-flex d-jc-space-between d-ai-center d-p8 d-w100p d-h48 d-bar8 d-bgg-to-r d-bgg-from-purple-300 d-bgg-from-o75 d-bgg-to-pink-300 d-bgg-to-o75 d-fs24 d-fw-bold d-fc-white"},[a("span",null,"75%"),a("span",null,"75%")],-1),aa=a("div",{class:"d-d-flex d-jc-space-between d-ai-center d-p8 d-w100p d-h48 d-bar8 d-bgg-to-r d-bgg-from-purple-300 d-bgg-from-o50 d-bgg-to-pink-300 d-bgg-to-o90 d-fs24 d-fw-bold d-fc-white"},[a("span",null,"50%"),a("span",null,"90%")],-1),na=a("div",{class:"d-d-flex d-jc-space-between d-ai-center d-p8 d-w100p d-h48 d-bar8 d-bgg-to-r d-bgg-from-purple-300 d-bgg-from-o25 d-bgg-to-pink-300 d-bgg-to-o95 d-fs24 d-fw-bold d-fc-white"},[a("span",null,"25%"),a("span",null,"95%")],-1),sa=a("div",{class:"d-d-flex d-jc-space-between d-ai-center d-p8 d-w100p d-h48 d-bar8 d-bgg-to-r d-bgg-from-purple-300 d-bgg-from-o10 d-bgg-to-pink-300 d-bgg-to-o99 d-fs24 d-fw-bold d-fc-white"},[a("span",null,"10%"),a("span",null,"99%")],-1),ta=a("div",{class:"d-d-flex d-jc-space-between d-ai-center d-p8 d-w100p d-h48 d-bar8 d-bgg-to-r d-bgg-from-purple-300 d-bgg-from-o0 d-bgg-to-pink-300 d-fs24 d-fw-bold d-fc-white"},[a("span",null,"0%"),a("span",null,"100%")],-1),oa=u(`<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgg-from-purple-300 d-bgg-to-pink-300 d-bgg-to-o0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgg-from-purple-300 d-bgg-from-o99 d-bgg-to-pink-300 d-bgg-to-o10<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgg-from-purple-300 d-bgg-from-o95 d-bgg-to-pink-300 d-bgg-to-o25<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgg-from-purple-300 d-bgg-from-o90 d-bgg-to-pink-300 d-bgg-to-o50<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgg-from-purple-300 d-bgg-from-o75 d-bgg-to-pink-300 d-bgg-to-o75<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgg-from-purple-300 d-bgg-from-o50 d-bgg-to-pink-300 d-bgg-to-o90<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgg-from-purple-300 d-bgg-from-o25 d-bgg-to-pink-300 d-bgg-to-o95<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgg-from-purple-300 d-bgg-from-o10 d-bgg-to-pink-300 d-bgg-to-o99<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgg-from-purple-300 d-bgg-from-o0 d-bgg-to-pink-300<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="hover" tabindex="-1"><a class="header-anchor" href="#hover" aria-hidden="true">#</a> Hover</h2><p>Use <code>h:d-bgg-{from|to}-{color}</code> to change an element&#39;s background gradient color spot when in an <code>:hover</code> state.</p>`,3),ea=a("button",{class:"d-p16 d-bar4 d-fs18 d-fc-white d-bgg-to-r d-bgg-from-purple-300 h:d-bgg-from-purple-300 d-bgg-to-pink-300 h:d-bgg-to-pink-500 d-baw0"},"Hover over me",-1),pa=u(`<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgg-from-purple-300 h:d-bgg-from-purple-300 d-bgg-to-pink-300 h:d-bgg-to-pink-500<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="focus" tabindex="-1"><a class="header-anchor" href="#focus" aria-hidden="true">#</a> Focus</h2><p>Use <code>f:d-bgg-{from|to}-{color}</code> to change an element&#39;s background gradient starting and ending stops in <code>:focus</code> and <code>:focus-within</code> states.</p>`,3),ca=a("button",{class:"d-p16 d-bar4 d-fs18 d-fc-white d-bgg-to-r d-bgg-from-purple-300 f:d-bgg-from-purple-300 d-bgg-to-pink-300 f:d-bgg-to-purple-500 d-baw0"},"Click on me",-1),da=u(`<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgg-from-purple-300 f:d-bgg-from-purple-300 d-bgg-to-pink-300 f:d-bgg-to-purple-500<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="focus-visible" tabindex="-1"><a class="header-anchor" href="#focus-visible" aria-hidden="true">#</a> Focus visible</h2><p>Use <code>fv:d-bgg-{from|to}-{color}</code> to change an element&#39;s background gradient starting and ending stops in <code>:focus-visible</code> state [only when focused by keyboard].</p>`,3),la=a("button",{class:"d-p16 d-bar4 d-fs18 d-fc-white d-bgg-to-r d-bgg-from-purple-300 fv:d-bgg-from-purple-300 d-bgg-to-pink-300 fv:d-bgg-to-purple-500 d-baw0"},"Focus on me",-1),ga=u(`<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-bgg-from-purple-300 fv:d-bgg-from-purple-300 d-bgg-to-pink-300 fv:d-bgg-to-purple-500<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,1),ua={setup(ra){return(ia,ba)=>{const b=k("utility-class-table"),g=k("code-well-header");return e(),p(r,null,[x,y,c(b,null,{content:d(()=>[a("tbody",null,[(e(!0),p(r,null,i(h(_),({className:l,output:t})=>(e(),p("tr",null,[a("th",j,".d-bgg-"+n(l),1),a("td",C,[s(" background-image: "+n(t)+" ",1),["unset","none"].includes(l)?f("",!0):(e(),p("span",U," var(--bgg-stops)) ")),F])]))),256))])]),_:1}),V,N,a("div",S,[c(b,null,{content:d(()=>[(e(),p(r,null,i(["from","to"],l=>a("div",B,[(e(!0),p(r,null,i(h(v),({color:t,stops:m})=>(e(),p("tbody",null,[(e(!0),p(r,null,i(m,({stop:o})=>(e(),p("tr",null,[a("th",T,".d-bgg-"+n(l)+"-"+n(t)+"-"+n(o),1),a("td",null,[a("div",$,[a("div",D,[l==="from"?(e(),p("span",E,[H,z,s(" --bgg-from: hsla(var(--"+n(t)+"-"+n(o)+"-h) var(--"+n(t)+"-"+n(o)+"-s) var(--"+n(t)+"-"+n(o)+"-l) / var(----bgg-from-opacity)) !important;",1),A,s(" --bgg-to: hsla(var(--"+n(t)+"-"+n(o)+"-h) var(--"+n(t)+"-"+n(o)+"-s) var(--"+n(t)+"-"+n(o)+"-l) / 0%) !important; ",1)])):l==="to"?(e(),p("span",L,[O,R,s(" --bgg-to: hsla(var(--"+n(t)+"-"+n(o)+"-h) var(--"+n(t)+"-"+n(o)+"-s) var(--"+n(t)+"-"+n(o)+"-l) / var(--bgg-to-opacity)) !important; ",1)])):f("",!0)]),a("div",{class:q(["d-fl-shrink0 d-m4 d-ml16 d-h32 d-w64 d-bar4 d-bgg-to-r d-bgg-from-black-100",[`d-bgg-${l}-${t}-${o}`]])},null,2)])])]))),256))]))),256))])),64))]),_:1})]),Y,G,c(g,{class:"d-d-flex d-jc-center d-fd-column d-p24 d-bgc-black-050 d-w100p d-hmn102",custom:""},{default:d(()=>[I]),_:1}),J,c(g,{class:"d-d-flex d-jc-center d-fd-column d-p24 d-bgc-black-050 d-w100p d-hmn102",custom:""},{default:d(()=>[K]),_:1}),M,c(g,{class:"d-d-flex d-jc-center d-fd-column d-p24 d-bgc-black-050 d-w100p d-hmn102 d-stack8",custom:""},{default:d(()=>[P,Q,W,X,Z,aa,na,sa,ta]),_:1}),oa,c(g,{class:"d-fl-center d-p24 d-bgc-black-050 d-w100p d-hmn102",custom:""},{default:d(()=>[ea]),_:1}),pa,c(g,{class:"d-fl-center d-p24 d-bgc-black-050 d-w100p d-hmn102",custom:""},{default:d(()=>[ca]),_:1}),da,c(g,{class:"d-fl-center d-p24 d-bgc-black-050 d-w100p d-hmn102",custom:""},{default:d(()=>[la]),_:1}),ga],64)}}};var ma=w(ua,[["__file","gradients.html.vue"]]);export{ma as default};
