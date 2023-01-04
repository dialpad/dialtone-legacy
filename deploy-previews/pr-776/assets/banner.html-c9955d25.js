import{_ as b,s as c,v as h,x as m,y as n,C as a,Q as u,a3 as I,a4 as _,S as d,G as o,E as k,F as C,a5 as E,a6 as S,B as T,M as V}from"./framework-bc192251.js";const N={name:"ExampleBanner",data(){return{kind:"base",showBanner:!1,pinned:!1,important:!1}},computed:{bannerClass(){return"d-banner--"+this.kind},bannerTitle(){return this.kind+"-banner-title"},bannerDesc(){return this.kind+"-banner-desc"},shouldBeInverted(){return this.important&&!["warning","success"].includes(this.kind)}},methods:{toggleExample(){this.showBanner=!this.showBanner}}},l=i=>(E("data-v-2483a916"),i=i(),S(),i),D={class:"dialtone-example","data-example":"yes","data-code":"yes"},M={class:"dialtone-example__example"},U={class:"lg:d-fd-column lg:d-ai-stretch lg:d-stack8 lg:d-flow0 d-d-flex d-ai-flex-end d-p16 d-bgc-black-100 d-ba d-bc-transparent d-flow16 d-mb8 d-bar4"},A={class:"d-fl-grow1"},j=l(()=>n("div",{class:"d-label d-fs-200"},[n("label",{for:"style-select"},"Style")],-1)),F={class:"d-select d-select--sm"},L=l(()=>n("option",{id:"style-select-base",name:"style-select",value:"base",selected:""},`
                  Base
                `,-1)),O=l(()=>n("option",{id:"style-select-error",name:"style-select",value:"error"},`
                  Error
                `,-1)),R=l(()=>n("option",{id:"style-select-info",name:"style-select",value:"info"},`
                  Informational
                `,-1)),z=l(()=>n("option",{id:"style-select-success",name:"style-select",value:"success"},`
                  Success
                `,-1)),G=l(()=>n("option",{id:"style-select-warning",name:"style-select",value:"warning"},`
                  Warning
                `,-1)),P={class:"d-checkbox-group"},Q={class:"d-checkbox__input"},W=l(()=>n("span",{class:"d-checkbox__copy d-checkbox__label d-mb4"},`
              Important?
            `,-1)),H={class:"d-checkbox-group"},J={class:"d-checkbox__input"},K=l(()=>n("span",{class:"d-checkbox__copy d-checkbox__label d-mb4"},`
              Pinned?
            `,-1)),X=["aria-hidden"],Y=["aria-labelledby","aria-describedby"],Z={class:"d-notice__icon"},$={class:"d-notice__content"},nn=l(()=>n("h2",{class:"d-notice__title"},`
          Optional title
        `,-1)),an={class:"d-notice__message"},sn={class:"d-notice__actions"},tn={class:"d-btn__icon"};function en(i,e,q,r,s,t){const v=c("icon-lightbulb"),f=c("icon-error"),x=c("icon-info"),y=c("icon-check-circle"),w=c("icon-warning"),B=c("icon-close");return h(),m(C,null,[n("div",D,[n("div",M,[n("div",U,[n("div",A,[n("div",null,[j,a(),n("div",F,[u(n("select",{id:"style-select","onUpdate:modelValue":e[0]||(e[0]=p=>s.kind=p),class:"d-select__input"},[L,a(),O,a(),R,a(),z,a(),G],512),[[I,s.kind]])])])]),a(),n("label",null,[n("div",P,[n("div",Q,[u(n("input",{"onUpdate:modelValue":e[1]||(e[1]=p=>s.important=p),type:"checkbox",class:"d-checkbox"},null,512),[[_,s.important]])]),a(),W])]),a(),n("label",null,[n("div",H,[n("div",J,[u(n("input",{"onUpdate:modelValue":e[2]||(e[2]=p=>s.pinned=p),type:"checkbox",class:"d-checkbox"},null,512),[[_,s.pinned]])]),a(),K])]),a(),n("button",{class:"d-btn d-btn--outlined d-btn--sm",onClick:e[3]||(e[3]=(...p)=>t.toggleExample&&t.toggleExample(...p))},`
          Toggle example
        `)])])]),a(),n("aside",{class:k(["d-banner d-banner--transform d-mt0",[t.bannerClass,{"d-banner--pinned":s.pinned,"d-banner--important":s.important}]]),role:"alert","aria-hidden":!s.showBanner},[n("div",{class:"d-banner__dialog",role:"alertdialog","aria-labelledby":t.bannerTitle,"aria-describedby":t.bannerDesc},[n("div",Z,[u(o(v,null,null,512),[[d,s.kind==="base"]]),a(),u(o(f,null,null,512),[[d,s.kind==="error"]]),a(),u(o(x,null,null,512),[[d,s.kind==="info"]]),a(),u(o(y,null,null,512),[[d,s.kind==="success"]]),a(),u(o(w,null,null,512),[[d,s.kind==="warning"]])]),a(),n("div",$,[nn,a(),n("p",an,[a(`
          Message body with
          `),n("a",{href:"#",class:k(["d-link",t.shouldBeInverted?"d-link--inverted":"d-link--muted"])},`
            a link.
          `,2)])]),a(),n("div",sn,[n("button",{type:"button",class:k(["d-btn d-btn--sm d-btn--outlined",t.shouldBeInverted?"d-btn--inverted":"d-btn--muted"])},`
          Action
        `,2),a(),n("button",{type:"button",class:k(["d-btn d-btn--sm d-btn--circle",t.shouldBeInverted?"d-btn--inverted":"d-btn--muted"]),"aria-label":"Close",onClick:e[4]||(e[4]=(...p)=>t.toggleExample&&t.toggleExample(...p))},[n("span",tn,[o(B)])],2)])],8,Y)],10,X)],64)}const g=b(N,[["render",en],["__scopeId","data-v-2483a916"],["__file","ExampleBanner.vue"]]),on=n("h2",{id:"usage",tabindex:"-1",class:"d-docsite--header-2"},[a("Usage "),n("a",{class:"header-anchor d-link d-td-none d-docsite--link d-link",href:"#usage","aria-hidden":"true"},"#")],-1),pn=n("p",{class:"d-docsite--paragraph"},[a("System banners are used for "),n("strong",null,"system"),a(" messaging. They are full-width notices placed in one of two locations:")],-1),cn=n("ol",{class:"d-docsite--ordered-list"},[n("li",{class:"d-docsite--list-element"},[n("strong",null,"Above everything else:"),a(" If the banner is related to the entire app (e.g. the user lost internet service), place the banner first. "),n("em",null,"These should not be dismissable until the issue is resolved."),a(" To pin the banner to the top of the app, add the "),n("code",null,".d-notice--pinned"),a(" class.")]),a(),n("li",{class:"d-docsite--list-element"},[n("strong",null,"Below the top bar:"),a(" This is the default location for system banners. Use these when it affects only a particular area of the product (e.g. when the user is in Do Not Disturb mode).")])],-1),ln={class:"d-docsite--paragraph"},un=n("code",null,".d-banner",-1),dn=n("h2",{id:"variants-and-examples",tabindex:"-1",class:"d-docsite--header-2"},[a("Variants and examples "),n("a",{class:"header-anchor d-link d-td-none d-docsite--link d-link",href:"#variants-and-examples","aria-hidden":"true"},"#")],-1),kn=V(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aside</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-banner<span class="token punctuation">&quot;</span></span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>alert<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
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
</code></pre></div><h2 id="classes" tabindex="-1" class="d-docsite--header-2">Classes <a class="header-anchor d-link d-td-none d-docsite--link d-link" href="#classes" aria-hidden="true">#</a></h2>`,2),rn=n("h2",{id:"accessibility",tabindex:"-1",class:"d-docsite--header-2"},[a("Accessibility "),n("a",{class:"header-anchor d-link d-td-none d-docsite--link d-link",href:"#accessibility","aria-hidden":"true"},"#")],-1),_n={__name:"banner.html",setup(i){return(e,q)=>{const r=c("RouterLink"),s=c("component-class-table"),t=c("component-accessible-table");return h(),m("div",null,[o(g),on,a(),pn,a(),cn,a(),n("p",ln,[a("Banners are a type of notice and so you can use the following "),o(r,{to:"/components/notice.html",class:"d-docsite--link d-link"},{default:T(()=>[a("Notice")]),_:1}),a(" styles in conjunction with "),un,a(".")]),a(),dn,a(),o(g),kn,a(),o(s,{"component-name":"banner"}),rn,a(),o(t,{"component-name":"banner"})])}}},bn=b(_n,[["__file","banner.html.vue"]]);export{bn as default};
