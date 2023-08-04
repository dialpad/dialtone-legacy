import{_ as m,s as k,v as b,x as q,y as n,C as a,M as u,a2 as f,a3 as g,N as d,G as e,E as r,F as x,a4 as y,a5 as w,B,K as I}from"./framework-d5b0d6bb.js";const C={name:"ExampleBanner",data(){return{kind:"base",showBanner:!1,pinned:!1,important:!1}},computed:{bannerClass(){return"d-banner--"+this.kind},bannerTitle(){return this.kind+"-banner-title"},bannerDesc(){return this.kind+"-banner-desc"},shouldBeInverted(){return this.important&&!["warning"].includes(this.kind)}},methods:{toggleExample(){this.showBanner=!this.showBanner}}},c=i=>(y("data-v-276254ac"),i=i(),w(),i),E={class:"dialtone-example","data-example":"yes","data-code":"yes"},S={class:"dialtone-example__example"},V={class:"lg:d-fd-column lg:d-ai-stretch lg:d-stack8 lg:d-flow0 d-d-flex d-ai-flex-end d-p16 d-bgc-secondary d-ba d-bc-transparent d-flow16 d-mb8 d-bar4"},T={class:"d-fl-grow1"},z=c(()=>n("div",{class:"d-label d-fs-200"},[n("label",{for:"style-select"},"Style")],-1)),N={class:"d-select d-select--sm"},A=c(()=>n("option",{id:"style-select-base",name:"style-select",value:"base",selected:""},`
                  Base
                `,-1)),D=c(()=>n("option",{id:"style-select-error",name:"style-select",value:"error"},`
                  Error
                `,-1)),M=c(()=>n("option",{id:"style-select-info",name:"style-select",value:"info"},`
                  Informational
                `,-1)),U=c(()=>n("option",{id:"style-select-success",name:"style-select",value:"success"},`
                  Success
                `,-1)),j=c(()=>n("option",{id:"style-select-warning",name:"style-select",value:"warning"},`
                  Warning
                `,-1)),F={class:"d-checkbox-group"},L={class:"d-checkbox__input"},O=c(()=>n("span",{class:"d-checkbox__copy d-checkbox__label d-mb4"},`
              Important?
            `,-1)),P={class:"d-checkbox-group"},R={class:"d-checkbox__input"},G=c(()=>n("span",{class:"d-checkbox__copy d-checkbox__label d-mb4"},`
              Pinned?
            `,-1)),K=["aria-hidden"],W=["aria-labelledby","aria-describedby"],H={class:"d-notice__icon"},J={class:"d-notice__content"},Q=c(()=>n("h2",{class:"d-notice__title"},`
          Optional title
        `,-1)),X={class:"d-notice__message"},Y={class:"d-notice__actions"},Z={class:"d-btn__icon"};function $(i,p,v,_,s,t){const l=k("dt-icon");return b(),q(x,null,[n("div",E,[n("div",S,[n("div",V,[n("div",T,[n("div",null,[z,a(),n("div",N,[u(n("select",{id:"style-select","onUpdate:modelValue":p[0]||(p[0]=o=>s.kind=o),class:"d-select__input"},[A,a(),D,a(),M,a(),U,a(),j],512),[[f,s.kind]])])])]),a(),n("label",null,[n("div",F,[n("div",L,[u(n("input",{"onUpdate:modelValue":p[1]||(p[1]=o=>s.important=o),type:"checkbox",class:"d-checkbox"},null,512),[[g,s.important]])]),a(),O])]),a(),n("label",null,[n("div",P,[n("div",R,[u(n("input",{"onUpdate:modelValue":p[2]||(p[2]=o=>s.pinned=o),type:"checkbox",class:"d-checkbox"},null,512),[[g,s.pinned]])]),a(),G])]),a(),n("button",{class:"d-btn d-btn--outlined d-btn--sm",onClick:p[3]||(p[3]=(...o)=>t.toggleExample&&t.toggleExample(...o))},`
          Toggle example
        `)])])]),a(),n("aside",{class:r(["d-banner d-banner--transform d-mt0",[t.bannerClass,{"d-banner--pinned":s.pinned,"d-banner--important":s.important}]]),role:"alert","aria-hidden":!s.showBanner},[n("div",{class:"d-banner__dialog",role:"alertdialog","aria-labelledby":t.bannerTitle,"aria-describedby":t.bannerDesc},[n("div",H,[u(e(l,{name:"bell",size:"400"},null,512),[[d,s.kind==="base"]]),a(),u(e(l,{name:"alert-circle",size:"400"},null,512),[[d,s.kind==="error"]]),a(),u(e(l,{name:"info",size:"400"},null,512),[[d,s.kind==="info"]]),a(),u(e(l,{name:"check-circle",size:"400"},null,512),[[d,s.kind==="success"]]),a(),u(e(l,{name:"alert-triangle",size:"400"},null,512),[[d,s.kind==="warning"]])]),a(),n("div",J,[Q,a(),n("p",X,[a(`
          Message body with
          `),n("a",{href:"#",class:r(["d-link",t.shouldBeInverted?"d-link--inverted":"d-link--muted"])},`
            a link.
          `,2)])]),a(),n("div",Y,[n("button",{type:"button",class:r(["d-btn d-btn--sm d-btn--outlined",t.shouldBeInverted?"d-btn--inverted":"d-btn--muted"])},`
          Action
        `,2),a(),n("button",{type:"button",class:r(["d-btn d-btn--sm d-btn--circle",t.shouldBeInverted?"d-btn--inverted":"d-btn--muted"]),"aria-label":"Close",onClick:p[4]||(p[4]=(...o)=>t.toggleExample&&t.toggleExample(...o))},[n("span",Z,[e(l,{name:"close",size:"200"})])],2)])],8,W)],10,K)],64)}const h=m(C,[["render",$],["__scopeId","data-v-276254ac"],["__file","ExampleBanner.vue"]]),nn=n("h2",{id:"usage",tabindex:"-1",class:"d-docsite--header-2"},[a("Usage "),n("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#usage","aria-hidden":"true"},"#")],-1),an=n("p",{class:"d-docsite--paragraph"},[a("System banners are used for "),n("strong",null,"system"),a(" messaging. They are full-width notices placed in one of two locations:")],-1),sn=n("ol",{class:"d-docsite--ordered-list"},[n("li",{class:"d-docsite--list-element"},[n("strong",null,"Above everything else:"),a(" If the banner is related to the entire app (e.g. the user lost internet service), place the banner first. "),n("em",null,"These should not be dismissable until the issue is resolved."),a(" To pin the banner to the top of the app, add the "),n("code",null,".d-notice--pinned"),a(" class.")]),a(),n("li",{class:"d-docsite--list-element"},[n("strong",null,"Below the top bar:"),a(" This is the default location for system banners. Use these when it affects only a particular area of the product (e.g. when the user is in Do Not Disturb mode).")])],-1),tn={class:"d-docsite--paragraph"},en=n("code",null,".d-banner",-1),pn=n("h2",{id:"variants-and-examples",tabindex:"-1",class:"d-docsite--header-2"},[a("Variants and examples "),n("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#variants-and-examples","aria-hidden":"true"},"#")],-1),on=I(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aside</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-banner<span class="token punctuation">&quot;</span></span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>alert<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
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
</code></pre></div><h2 id="vue-api" tabindex="-1" class="d-docsite--header-2">Vue API <a class="header-anchor d-link d-docsite--link d-link" href="#vue-api" aria-hidden="true">#</a></h2>`,2),cn=n("h2",{id:"classes",tabindex:"-1",class:"d-docsite--header-2"},[a("Classes "),n("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#classes","aria-hidden":"true"},"#")],-1),ln=n("h2",{id:"accessibility",tabindex:"-1",class:"d-docsite--header-2"},[a("Accessibility "),n("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#accessibility","aria-hidden":"true"},"#")],-1),un={__name:"banner.html",setup(i){return(p,v)=>{const _=k("RouterLink"),s=k("component-vue-api"),t=k("component-class-table"),l=k("component-accessible-table");return b(),q("div",null,[e(h),nn,a(),an,a(),sn,a(),n("p",tn,[a("Banners are a type of notice and so you can use the following "),e(_,{to:"/components/notice.html",class:"d-docsite--link d-link"},{default:B(()=>[a("Notice")]),_:1}),a(" styles in conjunction with "),en,a(".")]),a(),pn,a(),e(h),on,a(),e(s,{"component-name":"banner"}),cn,a(),e(t,{"component-name":"banner"}),ln,a(),e(l,{"component-name":"banner"})])}}},kn=m(un,[["__file","banner.html.vue"]]);export{kn as default};