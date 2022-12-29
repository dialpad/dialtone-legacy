import{_ as m,s as u,v as h,x as v,y as e,C as n,Q as o,a3 as k,a4 as p,S as r,G as c,E as b,F as x,a5 as g,a6 as y}from"./framework-bc192251.js";const f={name:"ExampleBanner",data(){return{kind:"base",showBanner:!1,pinned:!1,important:!1}},computed:{bannerClass(){return"d-banner--"+this.kind},bannerTitle(){return this.kind+"-banner-title"},bannerDesc(){return this.kind+"-banner-desc"},shouldBeInverted(){return this.important&&!["warning"].includes(this.kind)}},methods:{toggleExample(){this.showBanner=!this.showBanner}}},a=_=>(g("data-v-afd56d58"),_=_(),y(),_),B={class:"dialtone-example","data-example":"yes","data-code":"yes"},w={class:"dialtone-example__example"},E={class:"lg:d-fd-column lg:d-ai-stretch lg:d-stack8 lg:d-flow0 d-d-flex d-ai-flex-end d-p16 d-bgc-black-100 d-ba d-bc-transparent d-flow16 d-mb8 d-bar4"},I={class:"d-fl-grow1"},C=a(()=>e("div",{class:"d-label d-fs-200"},[e("label",{for:"style-select"},"Style")],-1)),S={class:"d-select d-select--sm"},z=a(()=>e("option",{id:"style-select-base",name:"style-select",value:"base",selected:""},`
                  Base
                `,-1)),V=a(()=>e("option",{id:"style-select-error",name:"style-select",value:"error"},`
                  Error
                `,-1)),T=a(()=>e("option",{id:"style-select-info",name:"style-select",value:"info"},`
                  Informational
                `,-1)),D=a(()=>e("option",{id:"style-select-success",name:"style-select",value:"success"},`
                  Success
                `,-1)),M=a(()=>e("option",{id:"style-select-warning",name:"style-select",value:"warning"},`
                  Warning
                `,-1)),N={class:"d-checkbox-group"},U={class:"d-checkbox__input"},F=a(()=>e("span",{class:"d-checkbox__copy d-checkbox__label d-mb4"},`
              Important?
            `,-1)),A={class:"d-checkbox-group"},G={class:"d-checkbox__input"},O=a(()=>e("span",{class:"d-checkbox__copy d-checkbox__label d-mb4"},`
              Pinned?
            `,-1)),P=["aria-hidden"],Q=["aria-labelledby","aria-describedby"],W={class:"d-notice__icon"},j={class:"d-notice__content"},q=a(()=>e("h2",{class:"d-notice__title"},`
          Optional title
        `,-1)),H={class:"d-notice__message"},J={class:"d-notice__actions"},K={class:"d-btn__icon"};function L(_,t,R,X,s,l){const i=u("dt-icon");return h(),v(x,null,[e("div",B,[e("div",w,[e("div",E,[e("div",I,[e("div",null,[C,n(),e("div",S,[o(e("select",{id:"style-select","onUpdate:modelValue":t[0]||(t[0]=d=>s.kind=d),class:"d-select__input"},[z,n(),V,n(),T,n(),D,n(),M],512),[[k,s.kind]])])])]),n(),e("label",null,[e("div",N,[e("div",U,[o(e("input",{"onUpdate:modelValue":t[1]||(t[1]=d=>s.important=d),type:"checkbox",class:"d-checkbox"},null,512),[[p,s.important]])]),n(),F])]),n(),e("label",null,[e("div",A,[e("div",G,[o(e("input",{"onUpdate:modelValue":t[2]||(t[2]=d=>s.pinned=d),type:"checkbox",class:"d-checkbox"},null,512),[[p,s.pinned]])]),n(),O])]),n(),e("button",{class:"d-btn d-btn--outlined d-btn--sm",onClick:t[3]||(t[3]=(...d)=>l.toggleExample&&l.toggleExample(...d))},`
          Toggle example
        `)])])]),n(),e("aside",{class:b(["d-banner d-banner--transform d-mt0",[l.bannerClass,{"d-banner--pinned":s.pinned,"d-banner--important":s.important}]]),role:"alert","aria-hidden":!s.showBanner},[e("div",{class:"d-banner__dialog",role:"alertdialog","aria-labelledby":l.bannerTitle,"aria-describedby":l.bannerDesc},[e("div",W,[o(c(i,{name:"bell",size:"400"},null,512),[[r,s.kind==="base"]]),n(),o(c(i,{name:"alert-circle",size:"400"},null,512),[[r,s.kind==="error"]]),n(),o(c(i,{name:"info",size:"400"},null,512),[[r,s.kind==="info"]]),n(),o(c(i,{name:"check-circle",size:"400"},null,512),[[r,s.kind==="success"]]),n(),o(c(i,{name:"alert-triangle",size:"400"},null,512),[[r,s.kind==="warning"]])]),n(),e("div",j,[q,n(),e("p",H,[n(`
          Message body with
          `),e("a",{href:"#",class:b(["d-link",l.shouldBeInverted?"d-link--inverted":"d-link--muted"])},`
            a link.
          `,2)])]),n(),e("div",J,[e("button",{type:"button",class:b(["d-btn d-btn--sm d-btn--outlined",l.shouldBeInverted?"d-btn--inverted":"d-btn--muted"])},`
          Action
        `,2),n(),e("button",{type:"button",class:b(["d-btn d-btn--sm d-btn--circle",l.shouldBeInverted?"d-btn--inverted":"d-btn--muted"]),"aria-label":"Close",onClick:t[4]||(t[4]=(...d)=>l.toggleExample&&l.toggleExample(...d))},[e("span",K,[c(i,{name:"close",size:"200"})])],2)])],8,Q)],10,P)],64)}const Z=m(f,[["render",L],["__scopeId","data-v-afd56d58"],["__file","ExampleBanner.vue"]]);export{Z as E};
