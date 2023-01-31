import{_ as m,s as k,v as g,x as h,y as s,C as a,M as p,a2 as b,a3 as q,E as r,N as d,G as e,F as x,a4 as f,a5 as y,H as w,K as T}from"./framework-9a6e9d64.js";const C={name:"ExampleToast",data(){return{kind:"base",showToast:!1,important:!1}},computed:{toastClass(){return"d-toast--"+this.kind},shouldBeInverted(){return this.important&&!["warning"].includes(this.kind)}},methods:{toggleExample(){this.showToast=!this.showToast}}},c=u=>(f("data-v-302c1d4c"),u=u(),y(),u),E={class:"dialtone-example","data-example":"yes","data-code":"yes"},I={class:"dialtone-example__example"},B={class:"lg:d-fd-column lg:d-ai-stretch lg:d-stack8 lg:d-flow0 d-d-flex d-ai-flex-end d-p16 d-bgc-secondary d-ba d-bc-transparent d-flow16 d-mb8 d-bar4"},S={class:"d-fl-grow1"},V=c(()=>s("div",{class:"d-label d-fs-14"},[s("label",{for:"style-select"},"Style")],-1)),z={class:"d-select d-select--sm"},N=c(()=>s("option",{id:"style-select-base",name:"style-select",value:"base",selected:""},`
                  Base
                `,-1)),M=c(()=>s("option",{id:"style-select-error",name:"style-select",value:"error"},`
                  Error
                `,-1)),A=c(()=>s("option",{id:"style-select-info",name:"style-select",value:"info"},`
                  Informational
                `,-1)),F=c(()=>s("option",{id:"style-select-success",name:"style-select",value:"success"},`
                  Success
                `,-1)),U=c(()=>s("option",{id:"style-select-warning",name:"style-select",value:"warning"},`
                  Warning
                `,-1)),D={class:"d-checkbox-group"},G={class:"d-checkbox__input"},H=c(()=>s("span",{class:"d-checkbox__copy d-checkbox__label d-mb4"},`
              Important?
            `,-1)),K={class:"d-toast-wrapper"},W=["aria-hidden"],j={class:"d-toast__dialog"},J={class:"d-notice__icon"},L={class:"d-notice__content"},O=c(()=>s("h2",{class:"d-notice__title"},`
            Title
          `,-1)),P={class:"d-notice__message"},Q={class:"d-notice__actions"},R={class:"d-btn__icon"};function X(u,t,v,_,n,o){const i=k("dt-icon");return g(),h(x,null,[s("div",E,[s("div",I,[s("div",B,[s("div",S,[s("div",null,[V,a(),s("div",z,[p(s("select",{id:"style-select","onUpdate:modelValue":t[0]||(t[0]=l=>n.kind=l),class:"d-select__input"},[N,a(),M,a(),A,a(),F,a(),U],512),[[b,n.kind]])])])]),a(),s("label",null,[s("div",D,[s("div",G,[p(s("input",{"onUpdate:modelValue":t[1]||(t[1]=l=>n.important=l),type:"checkbox",class:"d-checkbox"},null,512),[[q,n.important]])]),a(),H])]),a(),s("button",{class:"d-btn d-btn--outlined d-btn--sm",onClick:t[2]||(t[2]=(...l)=>o.toggleExample&&o.toggleExample(...l))},`
          Toggle example
        `)])])]),a(),s("aside",K,[s("div",{class:r(["d-toast",[o.toastClass,{"d-toast--important":n.important}]]),role:"status","aria-hidden":!n.showToast},[s("div",j,[s("div",J,[p(e(i,{name:"bell",size:"400"},null,512),[[d,n.kind==="base"]]),a(),p(e(i,{name:"alert-circle",size:"400"},null,512),[[d,n.kind==="error"]]),a(),p(e(i,{name:"info",size:"400"},null,512),[[d,n.kind==="info"]]),a(),p(e(i,{name:"check-circle",size:"400"},null,512),[[d,n.kind==="success"]]),a(),p(e(i,{name:"alert-triangle",size:"400"},null,512),[[d,n.kind==="warning"]])]),a(),s("div",L,[O,a(),s("p",P,[a(`
            Message body with
            `),s("a",{href:"#",class:r(["d-link",o.shouldBeInverted?"d-link--inverted":"d-link--muted"])},`
              a link.
            `,2)])]),a(),s("div",Q,[s("button",{type:"button",class:r(["d-btn d-btn--sm d-btn--outlined",o.shouldBeInverted?"d-btn--inverted":"d-btn--muted"])},`
            Action
          `,2),a(),s("button",{type:"button",class:r(["d-btn d-btn--sm d-btn--circle",o.shouldBeInverted?"d-btn--inverted":"d-btn--muted"]),"aria-label":"Close",onClick:t[3]||(t[3]=(...l)=>o.toggleExample&&o.toggleExample(...l))},[s("span",R,[e(i,{name:"close",size:"200"})])],2)])])],10,W)])],64)}const Y=m(C,[["render",X],["__scopeId","data-v-302c1d4c"],["__file","ExampleToast.vue"]]),Z=s("h2",{id:"variants-and-examples",tabindex:"-1",class:"d-docsite--header-2"},[a("Variants and examples "),s("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#variants-and-examples","aria-hidden":"true"},"#")],-1),$=T(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aside</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-toast-wrapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-toast<span class="token punctuation">&quot;</span></span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>status<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-toast__dialog<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-notice__icon<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-notice__content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-notice__title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-notice__message<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-notice__actions<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-btn d-btn--sm d-btn--circle d-btn--muted<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Close<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-btn__icon<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>icon-close</span> <span class="token punctuation">/&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aside</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="classes" tabindex="-1" class="d-docsite--header-2">Classes <a class="header-anchor d-link d-docsite--link d-link" href="#classes" aria-hidden="true">#</a></h2>`,2),ss=s("h2",{id:"accessibility",tabindex:"-1",class:"d-docsite--header-2"},[a("Accessibility "),s("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#accessibility","aria-hidden":"true"},"#")],-1),as=s("p",{class:"d-docsite--paragraph"},`Avoid using toast for critical information since toast disappears automatically and make sure
to provide enough time to read the message and act consequently. For best accessible user experience, the amount of
time a toast displays for should be user configurable.`,-1),ns=s("p",{class:"d-docsite--paragraph"},[a("Using "),s("code",null,'role="alert"'),a(", it sets "),s("code",null,'aria-live="assertive"'),a(` which
means it will immediately interrupt anything currently being read by the screen reader, so use it for things
that require immediate attention such as:`)],-1),ts=s("ul",{class:"d-docsite--unordered-list"},[s("li",{class:"d-docsite--list-element"},"An invalid value was entered into a form field"),a(),s("li",{class:"d-docsite--list-element"},"The user's login session is about to expire"),a(),s("li",{class:"d-docsite--list-element"},"The connection to the server was lost, local changes will not be saved")],-1),es=s("p",{class:"d-docsite--paragraph"},[a("Meanwhile "),s("code",null,'role="status"'),a(" implies "),s("code",null,'aria-live="polite"'),a(` which
means the toast will be read out after what's currently being has finished.`)],-1),os={__name:"toast.html",setup(u){return(t,v)=>{const _=k("component-class-table"),n=k("component-accessible-table");return g(),h("div",null,[w(' <component-combinator component-name="DtToast" /> '),a(),Z,a(),e(Y),$,a(),e(_,{"component-name":"toast"}),ss,a(),as,a(),ns,a(),ts,a(),es,a(),e(n,{"component-name":"toast"})])}}},ls=m(os,[["__file","toast.html.vue"]]);export{ls as default};
