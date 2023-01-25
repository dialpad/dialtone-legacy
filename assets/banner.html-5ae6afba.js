import{_ as h,s as r,v as m,x as q,y as n,C as a,M as c,a0 as f,a1 as _,N as d,G as p,E as k,F as y,a2 as x,a3 as w,B,K as I}from"./framework-4a991d5d.js";const C={name:"ExampleBanner",data(){return{kind:"base",showBanner:!1,pinned:!1,important:!1}},computed:{bannerClass(){return"d-banner--"+this.kind},bannerTitle(){return this.kind+"-banner-title"},bannerDesc(){return this.kind+"-banner-desc"},shouldBeInverted(){return this.important&&!["warning"].includes(this.kind)}},methods:{toggleExample(){this.showBanner=!this.showBanner}}},l=i=>(x("data-v-276254ac"),i=i(),w(),i),E={class:"dialtone-example","data-example":"yes","data-code":"yes"},S={class:"dialtone-example__example"},T={class:"lg:d-fd-column lg:d-ai-stretch lg:d-stack8 lg:d-flow0 d-d-flex d-ai-flex-end d-p16 d-bgc-secondary d-ba d-bc-transparent d-flow16 d-mb8 d-bar4"},V={class:"d-fl-grow1"},z=l(()=>n("div",{class:"d-label d-fs-200"},[n("label",{for:"style-select"},"Style")],-1)),N={class:"d-select d-select--sm"},D=l(()=>n("option",{id:"style-select-base",name:"style-select",value:"base",selected:""},`
                  Base
                `,-1)),M=l(()=>n("option",{id:"style-select-error",name:"style-select",value:"error"},`
                  Error
                `,-1)),U=l(()=>n("option",{id:"style-select-info",name:"style-select",value:"info"},`
                  Informational
                `,-1)),A=l(()=>n("option",{id:"style-select-success",name:"style-select",value:"success"},`
                  Success
                `,-1)),j=l(()=>n("option",{id:"style-select-warning",name:"style-select",value:"warning"},`
                  Warning
                `,-1)),F={class:"d-checkbox-group"},L={class:"d-checkbox__input"},O=l(()=>n("span",{class:"d-checkbox__copy d-checkbox__label d-mb4"},`
              Important?
            `,-1)),R={class:"d-checkbox-group"},G={class:"d-checkbox__input"},K=l(()=>n("span",{class:"d-checkbox__copy d-checkbox__label d-mb4"},`
              Pinned?
            `,-1)),P=["aria-hidden"],W=["aria-labelledby","aria-describedby"],H={class:"d-notice__icon"},J={class:"d-notice__content"},Q=l(()=>n("h2",{class:"d-notice__title"},`
          Optional title
        `,-1)),X={class:"d-notice__message"},Y={class:"d-notice__actions"},Z={class:"d-btn__icon"};function $(i,e,v,g,s,t){const u=r("dt-icon");return m(),q(y,null,[n("div",E,[n("div",S,[n("div",T,[n("div",V,[n("div",null,[z,a(),n("div",N,[c(n("select",{id:"style-select","onUpdate:modelValue":e[0]||(e[0]=o=>s.kind=o),class:"d-select__input"},[D,a(),M,a(),U,a(),A,a(),j],512),[[f,s.kind]])])])]),a(),n("label",null,[n("div",F,[n("div",L,[c(n("input",{"onUpdate:modelValue":e[1]||(e[1]=o=>s.important=o),type:"checkbox",class:"d-checkbox"},null,512),[[_,s.important]])]),a(),O])]),a(),n("label",null,[n("div",R,[n("div",G,[c(n("input",{"onUpdate:modelValue":e[2]||(e[2]=o=>s.pinned=o),type:"checkbox",class:"d-checkbox"},null,512),[[_,s.pinned]])]),a(),K])]),a(),n("button",{class:"d-btn d-btn--outlined d-btn--sm",onClick:e[3]||(e[3]=(...o)=>t.toggleExample&&t.toggleExample(...o))},`
          Toggle example
        `)])])]),a(),n("aside",{class:k(["d-banner d-banner--transform d-mt0",[t.bannerClass,{"d-banner--pinned":s.pinned,"d-banner--important":s.important}]]),role:"alert","aria-hidden":!s.showBanner},[n("div",{class:"d-banner__dialog",role:"alertdialog","aria-labelledby":t.bannerTitle,"aria-describedby":t.bannerDesc},[n("div",H,[c(p(u,{name:"bell",size:"400"},null,512),[[d,s.kind==="base"]]),a(),c(p(u,{name:"alert-circle",size:"400"},null,512),[[d,s.kind==="error"]]),a(),c(p(u,{name:"info",size:"400"},null,512),[[d,s.kind==="info"]]),a(),c(p(u,{name:"check-circle",size:"400"},null,512),[[d,s.kind==="success"]]),a(),c(p(u,{name:"alert-triangle",size:"400"},null,512),[[d,s.kind==="warning"]])]),a(),n("div",J,[Q,a(),n("p",X,[a(`
          Message body with
          `),n("a",{href:"#",class:k(["d-link",t.shouldBeInverted?"d-link--inverted":"d-link--muted"])},`
            a link.
          `,2)])]),a(),n("div",Y,[n("button",{type:"button",class:k(["d-btn d-btn--sm d-btn--outlined",t.shouldBeInverted?"d-btn--inverted":"d-btn--muted"])},`
          Action
        `,2),a(),n("button",{type:"button",class:k(["d-btn d-btn--sm d-btn--circle",t.shouldBeInverted?"d-btn--inverted":"d-btn--muted"]),"aria-label":"Close",onClick:e[4]||(e[4]=(...o)=>t.toggleExample&&t.toggleExample(...o))},[n("span",Z,[p(u,{name:"close",size:"200"})])],2)])],8,W)],10,P)],64)}const b=h(C,[["render",$],["__scopeId","data-v-276254ac"],["__file","ExampleBanner.vue"]]),nn=n("h2",{id:"usage",tabindex:"-1",class:"d-docsite--header-2"},[a("Usage "),n("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#usage","aria-hidden":"true"},"#")],-1),an=n("p",{class:"d-docsite--paragraph"},[a("System banners are used for "),n("strong",null,"system"),a(" messaging. They are full-width notices placed in one of two locations:")],-1),sn=n("ol",{class:"d-docsite--ordered-list"},[n("li",{class:"d-docsite--list-element"},[n("strong",null,"Above everything else:"),a(" If the banner is related to the entire app (e.g. the user lost internet service), place the banner first. "),n("em",null,"These should not be dismissable until the issue is resolved."),a(" To pin the banner to the top of the app, add the "),n("code",null,".d-notice--pinned"),a(" class.")]),a(),n("li",{class:"d-docsite--list-element"},[n("strong",null,"Below the top bar:"),a(" This is the default location for system banners. Use these when it affects only a particular area of the product (e.g. when the user is in Do Not Disturb mode).")])],-1),tn={class:"d-docsite--paragraph"},en=n("code",null,".d-banner",-1),pn=n("h2",{id:"variants-and-examples",tabindex:"-1",class:"d-docsite--header-2"},[a("Variants and examples "),n("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#variants-and-examples","aria-hidden":"true"},"#")],-1),on=I(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aside</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-banner<span class="token punctuation">&quot;</span></span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>alert<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
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
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aside</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aside</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-banner d-banner--error<span class="token punctuation">&quot;</span></span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>alert<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>…<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aside</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aside</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-banner d-banner--info<span class="token punctuation">&quot;</span></span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>alert<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>…<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aside</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aside</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-banner d-banner--success<span class="token punctuation">&quot;</span></span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>alert<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>…<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aside</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aside</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-banner d-banner--warning<span class="token punctuation">&quot;</span></span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>alert<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>…<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aside</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="classes" tabindex="-1" class="d-docsite--header-2">Classes <a class="header-anchor d-link d-docsite--link d-link" href="#classes" aria-hidden="true">#</a></h2>`,2),ln=n("h2",{id:"accessibility",tabindex:"-1",class:"d-docsite--header-2"},[a("Accessibility "),n("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#accessibility","aria-hidden":"true"},"#")],-1),cn={__name:"banner.html",setup(i){return(e,v)=>{const g=r("RouterLink"),s=r("component-class-table"),t=r("component-accessible-table");return m(),q("div",null,[p(b),nn,a(),an,a(),sn,a(),n("p",tn,[a("Banners are a type of notice and so you can use the following "),p(g,{to:"/components/notice.html",class:"d-docsite--link d-link"},{default:B(()=>[a("Notice")]),_:1}),a(" styles in conjunction with "),en,a(".")]),a(),pn,a(),p(b),on,a(),p(s,{"component-name":"banner"}),ln,a(),p(t,{"component-name":"banner"})])}}},dn=h(cn,[["__file","banner.html.vue"]]);export{dn as default};