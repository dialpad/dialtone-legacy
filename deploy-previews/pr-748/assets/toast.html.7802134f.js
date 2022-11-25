import{_ as p,r as a,o as b,c as v,b as e,a as t,i as d,v as C,j as E,n as u,k as _,e as n,F as I,p as B,l as S,f as V}from"./app.5e51e3f0.js";const A={name:"ExampleToast",data(){return{kind:"base",showToast:!1,important:!1}},computed:{toastClass(){return"d-toast--"+this.kind},shouldBeInverted(){return this.important&&!["warning","success"].includes(this.kind)}},methods:{toggleExample(){this.showToast=!this.showToast}}},i=r=>(B("data-v-b9f4b51d"),r=r(),S(),r),M={class:"dialtone-example","data-example":"yes","data-code":"yes"},N={class:"dialtone-example__example"},F={class:"lg:d-fd-column lg:d-ai-stretch lg:d-stack8 lg:d-flow0 d-d-flex d-ai-flex-end d-p16 d-bgc-black-100 d-ba d-bc-transparent d-flow16 d-mb8 d-bar4"},U={class:"d-fl-grow1"},q=i(()=>e("div",{class:"d-label d-fs-14"},[e("label",{for:"style-select"},"Style")],-1)),D={class:"d-select d-select--sm"},j=i(()=>e("option",{id:"style-select-base",name:"style-select",value:"base",selected:""},`
                  Base
                `,-1)),z=i(()=>e("option",{id:"style-select-error",name:"style-select",value:"error"},`
                  Error
                `,-1)),W=i(()=>e("option",{id:"style-select-info",name:"style-select",value:"info"},`
                  Informational
                `,-1)),G=i(()=>e("option",{id:"style-select-success",name:"style-select",value:"success"},`
                  Success
                `,-1)),H=i(()=>e("option",{id:"style-select-warning",name:"style-select",value:"warning"},`
                  Warning
                `,-1)),J={class:"d-checkbox-group"},K={class:"d-checkbox__input"},L=i(()=>e("span",{class:"d-checkbox__copy d-checkbox__label d-mb6 d-fw-bold"},`
              Important?
            `,-1)),O={class:"d-toast-wrapper"},P=["aria-hidden"],Q={class:"d-toast__dialog"},R={class:"d-notice__icon"},X={class:"d-notice__content"},Y=i(()=>e("h2",{class:"d-notice__title"},`
            Title
          `,-1)),Z={class:"d-notice__message"},$={class:"d-notice__actions"},ee={class:"d-btn__icon"};function te(r,o,g,h,s,l){const f=a("icon-lightbulb"),x=a("icon-info"),y=a("icon-error"),k=a("icon-warning"),w=a("icon-check-circle"),T=a("icon-close");return b(),v(I,null,[e("div",M,[e("div",N,[e("div",F,[e("div",U,[e("div",null,[q,t(),e("div",D,[d(e("select",{id:"style-select","onUpdate:modelValue":o[0]||(o[0]=c=>s.kind=c),class:"d-select__input"},[j,t(),z,t(),W,t(),G,t(),H],512),[[C,s.kind]])])])]),t(),e("label",null,[e("div",J,[e("div",K,[d(e("input",{"onUpdate:modelValue":o[1]||(o[1]=c=>s.important=c),type:"checkbox",class:"d-checkbox"},null,512),[[E,s.important]])]),t(),L])]),t(),e("button",{class:"d-btn d-btn--outlined d-btn--sm",onClick:o[2]||(o[2]=(...c)=>l.toggleExample&&l.toggleExample(...c))},`
          Toggle example
        `)])])]),t(),e("aside",O,[e("div",{class:u(["d-toast",[l.toastClass,{"d-toast--important":s.important}]]),role:"status","aria-hidden":!s.showToast},[e("div",Q,[e("div",R,[d(n(f,null,null,512),[[_,s.kind==="base"]]),t(),d(n(x,null,null,512),[[_,s.kind==="info"]]),t(),d(n(y,null,null,512),[[_,s.kind==="error"]]),t(),d(n(k,null,null,512),[[_,s.kind==="warning"]]),t(),d(n(w,null,null,512),[[_,s.kind==="success"]])]),t(),e("div",X,[Y,t(),e("p",Z,[t(`
            Message body with
            `),e("a",{href:"#",class:u(["d-link",l.shouldBeInverted?"d-link--inverted":"d-link--muted"])},`
              a link.
            `,2)])]),t(),e("div",$,[e("button",{type:"button",class:u(["d-btn d-btn--sm d-btn--outlined",l.shouldBeInverted?"d-btn--inverted":"d-btn--muted"])},`
            Action
          `,2),t(),e("button",{type:"button",class:u(["d-btn d-btn--sm d-btn--circle",l.shouldBeInverted?"d-btn--inverted":"d-btn--muted"]),"aria-label":"Close",onClick:o[3]||(o[3]=(...c)=>l.toggleExample&&l.toggleExample(...c))},[e("span",ee,[n(T)])],2)])])],10,P)])],64)}const m=p(A,[["render",te],["__scopeId","data-v-b9f4b51d"],["__file","ExampleToast.vue"]]),se=e("h2",{id:"variants-and-examples",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#variants-and-examples","aria-hidden":"true"},"#"),t(" Variants and examples")],-1),ne=e("div",{class:"language-html","data-ext":"html"},[e("pre",{class:"language-html"},[e("code",null,`<aside class="d-toast-wrapper">
  <div class="d-toast" role="status" aria-hidden="true">
    <div class="d-toast__dialog">
      <div class="d-notice__icon">...</div>
      <div class="d-notice__content">
        <h2 class="d-notice__title">...</h2>
        <p class="d-notice__message">...</p>
      </div>
      <div class="d-notice__actions">
        <button type="button" class="d-btn d-btn--sm d-btn--circle d-btn--muted" aria-label="Close">
          <span class="d-btn__icon"><icon-close /></span>
        </button>
      </div>
    </div>
  </div>
</aside>
`)])],-1),oe=e("h2",{id:"classes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#classes","aria-hidden":"true"},"#"),t(" Classes")],-1),le=e("h2",{id:"accessibility",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#accessibility","aria-hidden":"true"},"#"),t(" Accessibility")],-1),ae=e("p",null,`Avoid using toast for critical information since toast disappears automatically and make sure
to provide enough time to read the message and act consequently. For best accessible user experience, the amount of
time a toast displays for should be user configurable.`,-1),ie=e("p",null,[t("Using "),e("code",null,'role="alert"'),t(", it sets "),e("code",null,'aria-live="assertive"'),t(` which
means it will immediately interrupt anything currently being read by the screen reader, so use it for things
that require immediate attention such as:`)],-1),ce=e("ul",null,[e("li",null,"An invalid value was entered into a form field"),t(),e("li",null,"The user's login session is about to expire"),t(),e("li",null,"The connection to the server was lost, local changes will not be saved")],-1),de=e("p",null,[t("Meanwhile "),e("code",null,'role="status"'),t(" implies "),e("code",null,'aria-live="polite"'),t(` which
means the toast will be read out after what's currently being has finished.`)],-1),re={__name:"toast.html",setup(r){return(o,g)=>{const h=a("component-class-table"),s=a("component-accessible-table");return b(),v("div",null,[n(m),V(' <component-combinator component-name="DtToast" /> '),t(),se,t(),n(m),ne,oe,t(),n(h,{"component-name":"toast"}),le,t(),ae,t(),ie,t(),ce,t(),de,t(),n(s,{"component-name":"toast"})])}}},ue=p(re,[["__file","toast.html.vue"]]);export{ue as default};
