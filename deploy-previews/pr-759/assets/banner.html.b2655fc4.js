import{_ as b,r as c,o as h,c as m,b as n,a,i as u,v as I,j as _,k as d,e as o,n as r,F as C,p as E,l as S,w as T,d as V}from"./app.8f96d93b.js";const N={name:"ExampleBanner",data(){return{kind:"base",showBanner:!1,pinned:!1,important:!1}},computed:{bannerClass(){return"d-banner--"+this.kind},bannerTitle(){return this.kind+"-banner-title"},bannerDesc(){return this.kind+"-banner-desc"},shouldBeInverted(){return this.important&&!["warning","success"].includes(this.kind)}},methods:{toggleExample(){this.showBanner=!this.showBanner}}},l=i=>(E("data-v-1ecd9d1b"),i=i(),S(),i),D={class:"dialtone-example","data-example":"yes","data-code":"yes"},U={class:"dialtone-example__example"},A={class:"lg:d-fd-column lg:d-ai-stretch lg:d-stack8 lg:d-flow0 d-d-flex d-ai-flex-end d-p16 d-bgc-black-100 d-ba d-bc-transparent d-flow16 d-mb8 d-bar4"},M={class:"d-fl-grow1"},j=l(()=>n("div",{class:"d-label d-fs-200"},[n("label",{for:"style-select"},"Style")],-1)),F={class:"d-select d-select--sm"},L=l(()=>n("option",{id:"style-select-base",name:"style-select",value:"base",selected:""},`
                  Base
                `,-1)),O=l(()=>n("option",{id:"style-select-error",name:"style-select",value:"error"},`
                  Error
                `,-1)),R=l(()=>n("option",{id:"style-select-info",name:"style-select",value:"info"},`
                  Informational
                `,-1)),z=l(()=>n("option",{id:"style-select-success",name:"style-select",value:"success"},`
                  Success
                `,-1)),P=l(()=>n("option",{id:"style-select-warning",name:"style-select",value:"warning"},`
                  Warning
                `,-1)),W={class:"d-checkbox-group"},G={class:"d-checkbox__input"},H=l(()=>n("span",{class:"d-checkbox__copy d-checkbox__label d-mb6 d-fw-bold"},`
              Important?
            `,-1)),J={class:"d-checkbox-group"},K={class:"d-checkbox__input"},Q=l(()=>n("span",{class:"d-checkbox__copy d-checkbox__label d-mb6 d-fw-bold"},`
              Pinned?
            `,-1)),X=["aria-hidden"],Y=["aria-labelledby","aria-describedby"],Z={class:"d-notice__icon"},$={class:"d-notice__content"},nn=l(()=>n("h2",null,"Optional title",-1)),an={class:"d-notice__message"},sn={class:"d-notice__actions"},tn={class:"d-btn__icon"};function en(i,e,q,k,s,t){const v=c("icon-lightbulb"),f=c("icon-error"),x=c("icon-info"),y=c("icon-check-circle"),w=c("icon-warning"),B=c("icon-close");return h(),m(C,null,[n("div",D,[n("div",U,[n("div",A,[n("div",M,[n("div",null,[j,a(),n("div",F,[u(n("select",{id:"style-select","onUpdate:modelValue":e[0]||(e[0]=p=>s.kind=p),class:"d-select__input"},[L,a(),O,a(),R,a(),z,a(),P],512),[[I,s.kind]])])])]),a(),n("label",null,[n("div",W,[n("div",G,[u(n("input",{"onUpdate:modelValue":e[1]||(e[1]=p=>s.important=p),type:"checkbox",class:"d-checkbox"},null,512),[[_,s.important]])]),a(),H])]),a(),n("label",null,[n("div",J,[n("div",K,[u(n("input",{"onUpdate:modelValue":e[2]||(e[2]=p=>s.pinned=p),type:"checkbox",class:"d-checkbox"},null,512),[[_,s.pinned]])]),a(),Q])]),a(),n("button",{class:"d-btn d-btn--outlined d-btn--sm",onClick:e[3]||(e[3]=(...p)=>t.toggleExample&&t.toggleExample(...p))},`
          Toggle example
        `)])])]),a(),n("aside",{class:r(["d-banner d-banner--transform d-mt0",[t.bannerClass,{"d-banner--pinned":s.pinned,"d-banner--important":s.important}]]),role:"alert","aria-hidden":!s.showBanner},[n("div",{class:"d-banner__dialog",role:"alertdialog","aria-labelledby":t.bannerTitle,"aria-describedby":t.bannerDesc},[n("div",Z,[u(o(v,null,null,512),[[d,s.kind==="base"]]),a(),u(o(f,null,null,512),[[d,s.kind==="error"]]),a(),u(o(x,null,null,512),[[d,s.kind==="info"]]),a(),u(o(y,null,null,512),[[d,s.kind==="success"]]),a(),u(o(w,null,null,512),[[d,s.kind==="warning"]])]),a(),n("div",$,[nn,a(),n("p",an,[a(`
          Message body with
          `),n("a",{href:"#",class:r(["d-link",t.shouldBeInverted?"d-link--inverted":"d-link--muted"])},`
            a link.
          `,2)])]),a(),n("div",sn,[n("button",{type:"button",class:r(["d-btn d-btn--sm d-btn--outlined",t.shouldBeInverted?"d-btn--inverted":"d-btn--muted"])},`
          Action
        `,2),a(),n("button",{type:"button",class:r(["d-btn d-btn--sm d-btn--circle",t.shouldBeInverted?"d-btn--inverted":"d-btn--muted"]),"aria-label":"Close",onClick:e[4]||(e[4]=(...p)=>t.toggleExample&&t.toggleExample(...p))},[n("span",tn,[o(B)])],2)])],8,Y)],10,X)],64)}const g=b(N,[["render",en],["__scopeId","data-v-1ecd9d1b"],["__file","ExampleBanner.vue"]]),on=n("h2",{id:"usage",tabindex:"-1",class:"d-docsite--header d-pt72"},[a("Usage "),n("a",{class:"header-anchor d-link d-td-none",href:"#usage","aria-hidden":"true"},"#")],-1),pn=n("p",{class:"d-docsite--paragraph d-my16 d-lh-400 d-wmx75ch"},[a("System banners are used for "),n("strong",null,"system"),a(" messaging. They are full-width notices placed in one of two locations:")],-1),cn=n("ol",null,[n("li",{class:"d-docsite--list-element d-mt8"},[n("strong",null,"Above everything else:"),a(" If the banner is related to the entire app (e.g. the user lost internet service), place the banner first. "),n("em",null,"These should not be dismissable until the issue is resolved."),a(" To pin the banner to the top of the app, add the "),n("code",null,".d-notice--pinned"),a(" class.")]),a(),n("li",{class:"d-docsite--list-element d-mt8"},[n("strong",null,"Below the top bar:"),a(" This is the default location for system banners. Use these when it affects only a particular area of the product (e.g. when the user is in Do Not Disturb mode).")])],-1),ln={class:"d-docsite--paragraph d-my16 d-lh-400 d-wmx75ch"},un=n("code",null,".d-banner",-1),dn=n("h2",{id:"variants-and-examples",tabindex:"-1",class:"d-docsite--header d-pt72"},[a("Variants and examples "),n("a",{class:"header-anchor d-link d-td-none",href:"#variants-and-examples","aria-hidden":"true"},"#")],-1),rn=V(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aside</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-banner<span class="token punctuation">&quot;</span></span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>alert<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
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
</code></pre></div><h2 id="classes" tabindex="-1" class="d-docsite--header d-pt72">Classes <a class="header-anchor d-link d-td-none" href="#classes" aria-hidden="true">#</a></h2>`,2),kn=n("h2",{id:"accessibility",tabindex:"-1",class:"d-docsite--header d-pt72"},[a("Accessibility "),n("a",{class:"header-anchor d-link d-td-none",href:"#accessibility","aria-hidden":"true"},"#")],-1),_n={__name:"banner.html",setup(i){return(e,q)=>{const k=c("RouterLink"),s=c("component-class-table"),t=c("component-accessible-table");return h(),m("div",null,[o(g),on,a(),pn,a(),cn,a(),n("p",ln,[a("Banners are a type of notice and so you can use the following "),o(k,{to:"/components/notice.html"},{default:T(()=>[a("Notice")]),_:1}),a(" styles in conjunction with "),un,a(".")]),a(),dn,a(),o(g),rn,a(),o(s,{"component-name":"banner"}),kn,a(),o(t,{"component-name":"banner"})])}}},bn=b(_n,[["__file","banner.html.vue"]]);export{bn as default};
