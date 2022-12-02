import{_ as m,r as d,o as f,c as g,b as e,a as n,i as c,v as C,j as u,k as _,e as a,n as b,F as E,p as S,l as T,w as V}from"./app.c69bfef1.js";const D={name:"ExampleBanner",data(){return{kind:"base",showBanner:!1,pinned:!1,important:!1}},computed:{bannerClass(){return"d-banner--"+this.kind},bannerTitle(){return this.kind+"-banner-title"},bannerDesc(){return this.kind+"-banner-desc"},shouldBeInverted(){return this.important&&!["warning","success"].includes(this.kind)}},methods:{toggleExample(){this.showBanner=!this.showBanner}}},i=r=>(S("data-v-1ecd9d1b"),r=r(),T(),r),N={class:"dialtone-example","data-example":"yes","data-code":"yes"},U={class:"dialtone-example__example"},A={class:"lg:d-fd-column lg:d-ai-stretch lg:d-stack8 lg:d-flow0 d-d-flex d-ai-flex-end d-p16 d-bgc-black-100 d-ba d-bc-transparent d-flow16 d-mb8 d-bar4"},M={class:"d-fl-grow1"},j=i(()=>e("div",{class:"d-label d-fs-200"},[e("label",{for:"style-select"},"Style")],-1)),F={class:"d-select d-select--sm"},L=i(()=>e("option",{id:"style-select-base",name:"style-select",value:"base",selected:""},`
                  Base
                `,-1)),O=i(()=>e("option",{id:"style-select-error",name:"style-select",value:"error"},`
                  Error
                `,-1)),R=i(()=>e("option",{id:"style-select-info",name:"style-select",value:"info"},`
                  Informational
                `,-1)),z=i(()=>e("option",{id:"style-select-success",name:"style-select",value:"success"},`
                  Success
                `,-1)),P=i(()=>e("option",{id:"style-select-warning",name:"style-select",value:"warning"},`
                  Warning
                `,-1)),W={class:"d-checkbox-group"},q={class:"d-checkbox__input"},G=i(()=>e("span",{class:"d-checkbox__copy d-checkbox__label d-mb6 d-fw-bold"},`
              Important?
            `,-1)),H={class:"d-checkbox-group"},J={class:"d-checkbox__input"},K=i(()=>e("span",{class:"d-checkbox__copy d-checkbox__label d-mb6 d-fw-bold"},`
              Pinned?
            `,-1)),Q=["aria-hidden"],X=["aria-labelledby","aria-describedby"],Y={class:"d-notice__icon"},Z={class:"d-notice__content"},$=i(()=>e("h2",null,"Optional title",-1)),ee={class:"d-notice__message"},ne={class:"d-notice__actions"},se={class:"d-btn__icon"};function te(r,l,v,h,s,t){const x=d("icon-lightbulb"),y=d("icon-error"),k=d("icon-info"),w=d("icon-check-circle"),B=d("icon-warning"),I=d("icon-close");return f(),g(E,null,[e("div",N,[e("div",U,[e("div",A,[e("div",M,[e("div",null,[j,n(),e("div",F,[c(e("select",{id:"style-select","onUpdate:modelValue":l[0]||(l[0]=o=>s.kind=o),class:"d-select__input"},[L,n(),O,n(),R,n(),z,n(),P],512),[[C,s.kind]])])])]),n(),e("label",null,[e("div",W,[e("div",q,[c(e("input",{"onUpdate:modelValue":l[1]||(l[1]=o=>s.important=o),type:"checkbox",class:"d-checkbox"},null,512),[[u,s.important]])]),n(),G])]),n(),e("label",null,[e("div",H,[e("div",J,[c(e("input",{"onUpdate:modelValue":l[2]||(l[2]=o=>s.pinned=o),type:"checkbox",class:"d-checkbox"},null,512),[[u,s.pinned]])]),n(),K])]),n(),e("button",{class:"d-btn d-btn--outlined d-btn--sm",onClick:l[3]||(l[3]=(...o)=>t.toggleExample&&t.toggleExample(...o))},`
          Toggle example
        `)])])]),n(),e("aside",{class:b(["d-banner d-banner--transform d-mt0",[t.bannerClass,{"d-banner--pinned":s.pinned,"d-banner--important":s.important}]]),role:"alert","aria-hidden":!s.showBanner},[e("div",{class:"d-banner__dialog",role:"alertdialog","aria-labelledby":t.bannerTitle,"aria-describedby":t.bannerDesc},[e("div",Y,[c(a(x,null,null,512),[[_,s.kind==="base"]]),n(),c(a(y,null,null,512),[[_,s.kind==="error"]]),n(),c(a(k,null,null,512),[[_,s.kind==="info"]]),n(),c(a(w,null,null,512),[[_,s.kind==="success"]]),n(),c(a(B,null,null,512),[[_,s.kind==="warning"]])]),n(),e("div",Z,[$,n(),e("p",ee,[n(`
          Message body with
          `),e("a",{href:"#",class:b(["d-link",t.shouldBeInverted?"d-link--inverted":"d-link--muted"])},`
            a link.
          `,2)])]),n(),e("div",ne,[e("button",{type:"button",class:b(["d-btn d-btn--sm d-btn--outlined",t.shouldBeInverted?"d-btn--inverted":"d-btn--muted"])},`
          Action
        `,2),n(),e("button",{type:"button",class:b(["d-btn d-btn--sm d-btn--circle",t.shouldBeInverted?"d-btn--inverted":"d-btn--muted"]),"aria-label":"Close",onClick:l[4]||(l[4]=(...o)=>t.toggleExample&&t.toggleExample(...o))},[e("span",se,[a(I)])],2)])],8,X)],10,Q)],64)}const p=m(D,[["render",te],["__scopeId","data-v-1ecd9d1b"],["__file","ExampleBanner.vue"]]),le=e("h2",{id:"usage",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#usage","aria-hidden":"true"},"#"),n(" Usage")],-1),ae=e("p",null,[n("System banners are used for "),e("strong",null,"system"),n(" messaging. They are full-width notices placed in one of two locations:")],-1),oe=e("ol",null,[e("li",null,[e("strong",null,"Above everything else:"),n(" If the banner is related to the entire app (e.g. the user lost internet service), place the banner first. "),e("em",null,"These should not be dismissable until the issue is resolved."),n(" To pin the banner to the top of the app, add the "),e("code",null,".d-notice--pinned"),n(" class.")]),n(),e("li",null,[e("strong",null,"Below the top bar:"),n(" This is the default location for system banners. Use these when it affects only a particular area of the product (e.g. when the user is in Do Not Disturb mode).")])],-1),de=e("code",null,".d-banner",-1),ie=e("h2",{id:"variants-and-examples",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#variants-and-examples","aria-hidden":"true"},"#"),n(" Variants and examples")],-1),ce=e("div",{class:"language-html","data-ext":"html"},[e("pre",{class:"language-html"},[e("code",null,`<aside class="d-banner" role="alert" aria-hidden="false">
  <div class="d-banner__dialog" role="alertdialog" aria-labelledy="info-alert-title" aria-describedby="info-alert-desc">
    <div class="d-notice__icon">
      <IconInfo />
    </div>
    <div class="d-notice__content">
      <h2 class="d-notice__title" id="info-alert-title">Optional title</h2>
      <p class="d-notice__message" id="info-alert-desc">Message body with <a href="#">a link.</a></p>
    </div>
    <div class="d-notice__actions">
      <button type="button" class="d-btn d-btn--sm d-btn--outlined d-btn--muted">Action</button>
      <button type="button" class="d-btn d-btn--sm d-btn--circle d-btn--muted js-example-notice-close" aria-label="Close">
        <span class="d-btn__icon"><IconClose /></span>
      </button>
    </div>
</aside>

<aside class="d-banner d-banner--error" role="alert" aria-hidden="false">…</aside>
<aside class="d-banner d-banner--info" role="alert" aria-hidden="false">…</aside>
<aside class="d-banner d-banner--success" role="alert" aria-hidden="false">…</aside>
<aside class="d-banner d-banner--warning" role="alert" aria-hidden="false">…</aside>
`)])],-1),re=e("h2",{id:"classes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#classes","aria-hidden":"true"},"#"),n(" Classes")],-1),_e=e("h2",{id:"accessibility",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#accessibility","aria-hidden":"true"},"#"),n(" Accessibility")],-1),be={__name:"banner.html",setup(r){return(l,v)=>{const h=d("RouterLink"),s=d("component-class-table"),t=d("component-accessible-table");return f(),g("div",null,[a(p),le,n(),ae,n(),oe,n(),e("p",null,[n("Banners are a type of notice and so you can use the following "),a(h,{to:"/components/notice.html"},{default:V(()=>[n("Notice")]),_:1}),n(" styles in conjunction with "),de,n(".")]),n(),ie,n(),a(p),ce,re,n(),a(s,{"component-name":"banner"}),_e,n(),a(t,{"component-name":"banner"})])}}},ue=m(be,[["__file","banner.html.vue"]]);export{ue as default};
