import{_ as m,r as l,o as _,c as h,a as n,g as o,v as E,h as g,i as u,b as e,n as i,F as q,p as S,j as T,e as v,d as k}from"./app.58f14a12.js";const V={name:"example-banner",data(){return{kind:"base",showBanner:!1,pinned:!1,important:!1}},computed:{bannerClass(){return"d-banner--"+this.kind},bannerTitle(){return this.kind+"-banner-title"},bannerDesc(){return this.kind+"-banner-desc"},shouldBeInverted(){return this.important&&!["warning","success"].includes(this.kind)}},methods:{toggleExample(){this.showBanner=!this.showBanner}}},r=c=>(S("data-v-6c5fbfd4"),c=c(),T(),c),D={class:"dialtone-example","data-example":"yes","data-code":"yes"},N={class:"dialtone-example__example"},U={class:"lg:d-fd-column lg:d-ai-stretch lg:d-stack8 lg:d-flow0 d-d-flex d-ai-flex-end d-p16 d-bgc-ash d-ba d-bc-black-100 d-flow16 d-mb8 d-bar4"},A={class:"d-fl-grow1"},M=r(()=>n("div",{class:"d-label d-fs14"},[n("label",{for:"style-select"},"Style")],-1)),j={class:"d-select d-select--sm"},F=k('<option name="style-select" id="style-select-base" value="base" selected data-v-6c5fbfd4>Base</option><option name="style-select" id="style-select-error" value="error" data-v-6c5fbfd4>Error</option><option name="style-select" id="style-select-info" value="info" data-v-6c5fbfd4>Informational</option><option name="style-select" id="style-select-success" value="success" data-v-6c5fbfd4>Success</option><option name="style-select" id="style-select-warning" value="warning" data-v-6c5fbfd4>Warning</option>',5),O=[F],z={class:"d-input-group d-d-flex d-ai-center d-fl0 d-flow6"},P=r(()=>n("label",{for:"style-select-important",class:"d-label d-fs14 d-lh2"},"Important?",-1)),W={class:"d-input-group d-d-flex d-ai-center d-fl0 d-flow6"},G=r(()=>n("label",{for:"style-select-pinned",class:"d-label d-fs14 d-lh2"},"Pinned?",-1)),H=["aria-hidden"],J=["aria-labelledy","aria-describedby"],K={class:"d-notice__icon"},L={class:"d-notice__content"},Q=r(()=>n("h2",null,"Optional title",-1)),R={class:"d-notice__message"},X=v(" Message body with "),Y={class:"d-notice__actions"},Z={class:"d-btn__icon"};function $(c,s,f,d,a,t){const y=l("icon-lightbulb"),x=l("icon-error"),w=l("icon-info"),B=l("icon-check-circle"),I=l("icon-warning"),C=l("icon-close");return _(),h(q,null,[n("div",D,[n("div",N,[n("div",U,[n("div",A,[n("div",null,[M,n("div",j,[o(n("select",{id:"style-select",class:"d-select__input","onUpdate:modelValue":s[0]||(s[0]=p=>a.kind=p)},O,512),[[E,a.kind]])])])]),n("div",z,[o(n("input",{type:"checkbox",id:"style-select-important",class:"d-checkbox d-mt1","onUpdate:modelValue":s[1]||(s[1]=p=>a.important=p)},null,512),[[g,a.important]]),P]),n("div",W,[o(n("input",{type:"checkbox",id:"style-select-pinned",class:"d-checkbox d-mt1","onUpdate:modelValue":s[2]||(s[2]=p=>a.pinned=p)},null,512),[[g,a.pinned]]),G]),n("button",{class:"d-btn d-btn--outlined d-btn--sm",role:"button",onClick:s[3]||(s[3]=(...p)=>t.toggleExample&&t.toggleExample(...p))}," Toggle example ")])])]),n("aside",{class:i(["d-banner d-banner--transform d-mt0",[t.bannerClass,{"d-banner--pinned":a.pinned,"d-banner--important":a.important}]]),role:"alert","aria-hidden":!a.showBanner},[n("div",{class:"d-banner__dialog",role:"alertdialog","aria-labelledy":t.bannerTitle,"aria-describedby":t.bannerDesc},[n("div",K,[o(e(y,null,null,512),[[u,a.kind==="base"]]),o(e(x,null,null,512),[[u,a.kind==="error"]]),o(e(w,null,null,512),[[u,a.kind==="info"]]),o(e(B,null,null,512),[[u,a.kind==="success"]]),o(e(I,null,null,512),[[u,a.kind==="warning"]])]),n("div",L,[Q,n("p",R,[X,n("a",{href:"#",class:i(["d-link",t.shouldBeInverted?"d-link--inverted":"d-link--muted"])}," a link. ",2)])]),n("div",Y,[n("button",{type:"button",class:i(["d-btn d-btn--sm d-btn--outlined",t.shouldBeInverted?"d-btn--inverted":"d-btn--muted"])}," Action ",2),n("button",{type:"button",class:i(["d-btn d-btn--sm d-btn--circle",t.shouldBeInverted?"d-btn--inverted":"d-btn--muted"]),"aria-label":"Close",onClick:s[4]||(s[4]=(...p)=>t.toggleExample&&t.toggleExample(...p))},[n("span",Z,[e(C)])],2)])],8,J)],10,H)],64)}var b=m(V,[["render",$],["__scopeId","data-v-6c5fbfd4"],["__file","ExampleBanner.vue"]]);const nn=k('<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><p>System banners are used for <strong>system</strong> messaging. They are full-width notices placed in one of two locations:</p><ol><li><strong>Above everything else:</strong> If the banner is related to the entire app (e.g. the user lost internet service), place the banner first. <em>These should not be dismissable until the issue is resolved.</em> To pin the banner to the top of the app, add the <code>.d-notice--pinned</code> class.</li><li><strong>Below the top bar:</strong> This is the default location for system banners. Use these when it affects only a particular area of the product (e.g. when the user is in Do Not Disturb mode).</li></ol><p>Banners are a type of notice and so you can use the following <a class="d-link" href="components/notice/">notice styles</a> in conjunction with <code>.d-banner</code>.</p><h2 id="variants-and-examples" tabindex="-1"><a class="header-anchor" href="#variants-and-examples" aria-hidden="true">#</a> Variants and Examples</h2>',5),an=k(`<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aside</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-banner<span class="token punctuation">&quot;</span></span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>alert<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-banner__dialog<span class="token punctuation">&quot;</span></span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>alertdialog<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-labelledy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>info-alert-title<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-describedby</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>info-alert-desc<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-notice__icon<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>IconInfo</span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-notice__content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-notice__title<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>info-alert-title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Optional title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-notice__message<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>info-alert-desc<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Message body with <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>a link.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-notice__actions<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-btn d-btn--sm d-btn--outlined d-btn--muted<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Action<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-btn d-btn--sm d-btn--circle d-btn--muted js-example-notice-close<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Close<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-btn__icon<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>IconClose</span> <span class="token punctuation">/&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aside</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aside</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-banner d-banner--error<span class="token punctuation">&quot;</span></span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>alert<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u2026<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aside</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aside</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-banner d-banner--info<span class="token punctuation">&quot;</span></span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>alert<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u2026<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aside</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aside</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-banner d-banner--success<span class="token punctuation">&quot;</span></span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>alert<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u2026<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aside</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aside</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-banner d-banner--warning<span class="token punctuation">&quot;</span></span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>alert<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u2026<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aside</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="classes" tabindex="-1"><a class="header-anchor" href="#classes" aria-hidden="true">#</a> Classes</h2>`,2),sn=n("h2",{id:"accessibility",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#accessibility","aria-hidden":"true"},"#"),v(" Accessibility")],-1),tn={setup(c){return(s,f)=>{const d=l("component-class-table"),a=l("component-accessible-table");return _(),h(q,null,[e(b),nn,e(b),an,e(d,{"component-name":"banner"}),sn,e(a,{"component-name":"banner"})],64)}}};var pn=m(tn,[["__file","banner.html.vue"]]);export{pn as default};
