import{_ as p,s as u,v as h,x as b,y as e,C as s,Q as a,a3 as v,a4 as g,E as m,S as _,G as i,F as x,a5 as k,a6 as y}from"./framework-bc192251.js";const f={name:"ExampleToast",data(){return{kind:"base",showToast:!1,important:!1}},computed:{toastClass(){return"d-toast--"+this.kind},shouldBeInverted(){return this.important&&!["warning"].includes(this.kind)}},methods:{toggleExample(){this.showToast=!this.showToast}}},l=r=>(k("data-v-9cbc6277"),r=r(),y(),r),w={class:"dialtone-example","data-example":"yes","data-code":"yes"},E={class:"dialtone-example__example"},T={class:"lg:d-fd-column lg:d-ai-stretch lg:d-stack8 lg:d-flow0 d-d-flex d-ai-flex-end d-p16 d-bgc-secondary d-ba d-bc-transparent d-flow16 d-mb8 d-bar4"},I={class:"d-fl-grow1"},C=l(()=>e("div",{class:"d-label d-fs-14"},[e("label",{for:"style-select"},"Style")],-1)),B={class:"d-select d-select--sm"},S=l(()=>e("option",{id:"style-select-base",name:"style-select",value:"base",selected:""},`
                  Base
                `,-1)),z=l(()=>e("option",{id:"style-select-error",name:"style-select",value:"error"},`
                  Error
                `,-1)),V=l(()=>e("option",{id:"style-select-info",name:"style-select",value:"info"},`
                  Informational
                `,-1)),M=l(()=>e("option",{id:"style-select-success",name:"style-select",value:"success"},`
                  Success
                `,-1)),N=l(()=>e("option",{id:"style-select-warning",name:"style-select",value:"warning"},`
                  Warning
                `,-1)),F={class:"d-checkbox-group"},U={class:"d-checkbox__input"},A=l(()=>e("span",{class:"d-checkbox__copy d-checkbox__label d-mb4"},`
              Important?
            `,-1)),D={class:"d-toast-wrapper"},G=["aria-hidden"],Q={class:"d-toast__dialog"},W={class:"d-notice__icon"},j={class:"d-notice__content"},q=l(()=>e("h2",{class:"d-notice__title"},`
            Title
          `,-1)),H={class:"d-notice__message"},J={class:"d-notice__actions"},K={class:"d-btn__icon"};function L(r,n,O,P,t,o){const c=u("dt-icon");return h(),b(x,null,[e("div",w,[e("div",E,[e("div",T,[e("div",I,[e("div",null,[C,s(),e("div",B,[a(e("select",{id:"style-select","onUpdate:modelValue":n[0]||(n[0]=d=>t.kind=d),class:"d-select__input"},[S,s(),z,s(),V,s(),M,s(),N],512),[[v,t.kind]])])])]),s(),e("label",null,[e("div",F,[e("div",U,[a(e("input",{"onUpdate:modelValue":n[1]||(n[1]=d=>t.important=d),type:"checkbox",class:"d-checkbox"},null,512),[[g,t.important]])]),s(),A])]),s(),e("button",{class:"d-btn d-btn--outlined d-btn--sm",onClick:n[2]||(n[2]=(...d)=>o.toggleExample&&o.toggleExample(...d))},`
          Toggle example
        `)])])]),s(),e("aside",D,[e("div",{class:m(["d-toast",[o.toastClass,{"d-toast--important":t.important}]]),role:"status","aria-hidden":!t.showToast},[e("div",Q,[e("div",W,[a(i(c,{name:"bell",size:"400"},null,512),[[_,t.kind==="base"]]),s(),a(i(c,{name:"alert-circle",size:"400"},null,512),[[_,t.kind==="error"]]),s(),a(i(c,{name:"info",size:"400"},null,512),[[_,t.kind==="info"]]),s(),a(i(c,{name:"check-circle",size:"400"},null,512),[[_,t.kind==="success"]]),s(),a(i(c,{name:"alert-triangle",size:"400"},null,512),[[_,t.kind==="warning"]])]),s(),e("div",j,[q,s(),e("p",H,[s(`
            Message body with
            `),e("a",{href:"#",class:m(["d-link",o.shouldBeInverted?"d-link--inverted":"d-link--muted"])},`
              a link.
            `,2)])]),s(),e("div",J,[e("button",{type:"button",class:m(["d-btn d-btn--sm d-btn--outlined",o.shouldBeInverted?"d-btn--inverted":"d-btn--muted"])},`
            Action
          `,2),s(),e("button",{type:"button",class:m(["d-btn d-btn--sm d-btn--circle",o.shouldBeInverted?"d-btn--inverted":"d-btn--muted"]),"aria-label":"Close",onClick:n[3]||(n[3]=(...d)=>o.toggleExample&&o.toggleExample(...d))},[e("span",K,[i(c,{name:"close",size:"200"})])],2)])])],10,G)])],64)}const X=p(f,[["render",L],["__scopeId","data-v-9cbc6277"],["__file","ExampleToast.vue"]]);export{X as E};
