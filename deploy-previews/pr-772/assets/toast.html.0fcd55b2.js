import{_ as m,r as c,o as h,c as g,b as s,a as n,h as i,v as T,i as C,n as r,j as d,e as t,F as E,p as I,k as B,f as S,d as V}from"./app.1a6f4305.js";const N={name:"ExampleToast",data(){return{kind:"base",showToast:!1,important:!1}},computed:{toastClass(){return"d-toast--"+this.kind},shouldBeInverted(){return this.important&&!["warning","success"].includes(this.kind)}},methods:{toggleExample(){this.showToast=!this.showToast}}},l=u=>(I("data-v-b9f4b51d"),u=u(),B(),u),A={class:"dialtone-example","data-example":"yes","data-code":"yes"},M={class:"dialtone-example__example"},F={class:"lg:d-fd-column lg:d-ai-stretch lg:d-stack8 lg:d-flow0 d-d-flex d-ai-flex-end d-p16 d-bgc-black-100 d-ba d-bc-transparent d-flow16 d-mb8 d-bar4"},U={class:"d-fl-grow1"},D=l(()=>s("div",{class:"d-label d-fs-14"},[s("label",{for:"style-select"},"Style")],-1)),j={class:"d-select d-select--sm"},z=l(()=>s("option",{id:"style-select-base",name:"style-select",value:"base",selected:""},`
                  Base
                `,-1)),W=l(()=>s("option",{id:"style-select-error",name:"style-select",value:"error"},`
                  Error
                `,-1)),G=l(()=>s("option",{id:"style-select-info",name:"style-select",value:"info"},`
                  Informational
                `,-1)),H=l(()=>s("option",{id:"style-select-success",name:"style-select",value:"success"},`
                  Success
                `,-1)),J=l(()=>s("option",{id:"style-select-warning",name:"style-select",value:"warning"},`
                  Warning
                `,-1)),K={class:"d-checkbox-group"},L={class:"d-checkbox__input"},O=l(()=>s("span",{class:"d-checkbox__copy d-checkbox__label d-mb6 d-fw-bold"},`
              Important?
            `,-1)),P={class:"d-toast-wrapper"},Q=["aria-hidden"],R={class:"d-toast__dialog"},X={class:"d-notice__icon"},Y={class:"d-notice__content"},Z=l(()=>s("h2",{class:"d-notice__title"},`
            Title
          `,-1)),$={class:"d-notice__message"},ss={class:"d-notice__actions"},ns={class:"d-btn__icon"};function as(u,e,b,k,a,o){const v=c("icon-lightbulb"),f=c("icon-info"),q=c("icon-error"),x=c("icon-warning"),y=c("icon-check-circle"),w=c("icon-close");return h(),g(E,null,[s("div",A,[s("div",M,[s("div",F,[s("div",U,[s("div",null,[D,n(),s("div",j,[i(s("select",{id:"style-select","onUpdate:modelValue":e[0]||(e[0]=p=>a.kind=p),class:"d-select__input"},[z,n(),W,n(),G,n(),H,n(),J],512),[[T,a.kind]])])])]),n(),s("label",null,[s("div",K,[s("div",L,[i(s("input",{"onUpdate:modelValue":e[1]||(e[1]=p=>a.important=p),type:"checkbox",class:"d-checkbox"},null,512),[[C,a.important]])]),n(),O])]),n(),s("button",{class:"d-btn d-btn--outlined d-btn--sm",onClick:e[2]||(e[2]=(...p)=>o.toggleExample&&o.toggleExample(...p))},`
          Toggle example
        `)])])]),n(),s("aside",P,[s("div",{class:r(["d-toast",[o.toastClass,{"d-toast--important":a.important}]]),role:"status","aria-hidden":!a.showToast},[s("div",R,[s("div",X,[i(t(v,null,null,512),[[d,a.kind==="base"]]),n(),i(t(f,null,null,512),[[d,a.kind==="info"]]),n(),i(t(q,null,null,512),[[d,a.kind==="error"]]),n(),i(t(x,null,null,512),[[d,a.kind==="warning"]]),n(),i(t(y,null,null,512),[[d,a.kind==="success"]])]),n(),s("div",Y,[Z,n(),s("p",$,[n(`
            Message body with
            `),s("a",{href:"#",class:r(["d-link",o.shouldBeInverted?"d-link--inverted":"d-link--muted"])},`
              a link.
            `,2)])]),n(),s("div",ss,[s("button",{type:"button",class:r(["d-btn d-btn--sm d-btn--outlined",o.shouldBeInverted?"d-btn--inverted":"d-btn--muted"])},`
            Action
          `,2),n(),s("button",{type:"button",class:r(["d-btn d-btn--sm d-btn--circle",o.shouldBeInverted?"d-btn--inverted":"d-btn--muted"]),"aria-label":"Close",onClick:e[3]||(e[3]=(...p)=>o.toggleExample&&o.toggleExample(...p))},[s("span",ns,[t(w)])],2)])])],10,Q)])],64)}const _=m(N,[["render",as],["__scopeId","data-v-b9f4b51d"],["__file","ExampleToast.vue"]]),ts=s("h2",{id:"variants-and-examples",tabindex:"-1",class:"d-docsite--header-2 d-my24"},[n("Variants and examples "),s("a",{class:"header-anchor d-link d-td-none d-docsite--link d-link",href:"#variants-and-examples","aria-hidden":"true"},"#")],-1),es=V(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aside</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-toast-wrapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
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
</code></pre></div><h2 id="classes" tabindex="-1" class="d-docsite--header-2 d-my24">Classes <a class="header-anchor d-link d-td-none d-docsite--link d-link" href="#classes" aria-hidden="true">#</a></h2>`,2),os=s("h2",{id:"accessibility",tabindex:"-1",class:"d-docsite--header-2 d-my24"},[n("Accessibility "),s("a",{class:"header-anchor d-link d-td-none d-docsite--link d-link",href:"#accessibility","aria-hidden":"true"},"#")],-1),cs=s("p",{class:"d-docsite--paragraph d-mb8 d-lh-400 d-wmx75ch"},`Avoid using toast for critical information since toast disappears automatically and make sure
to provide enough time to read the message and act consequently. For best accessible user experience, the amount of
time a toast displays for should be user configurable.`,-1),ls=s("p",{class:"d-docsite--paragraph d-mb8 d-lh-400 d-wmx75ch"},[n("Using "),s("code",null,'role="alert"'),n(", it sets "),s("code",null,'aria-live="assertive"'),n(` which
means it will immediately interrupt anything currently being read by the screen reader, so use it for things
that require immediate attention such as:`)],-1),ps=s("ul",{class:"d-docsite--unordered-list d-mb16"},[s("li",{class:"d-docsite--list-element d-my8"},"An invalid value was entered into a form field"),n(),s("li",{class:"d-docsite--list-element d-my8"},"The user's login session is about to expire"),n(),s("li",{class:"d-docsite--list-element d-my8"},"The connection to the server was lost, local changes will not be saved")],-1),is=s("p",{class:"d-docsite--paragraph d-mb8 d-lh-400 d-wmx75ch"},[n("Meanwhile "),s("code",null,'role="status"'),n(" implies "),s("code",null,'aria-live="polite"'),n(` which
means the toast will be read out after what's currently being has finished.`)],-1),us={__name:"toast.html",setup(u){return(e,b)=>{const k=c("component-class-table"),a=c("component-accessible-table");return h(),g("div",null,[t(_),S(' <component-combinator component-name="DtToast" /> '),n(),ts,n(),t(_),es,n(),t(k,{"component-name":"toast"}),os,n(),cs,n(),ls,n(),ps,n(),is,n(),t(a,{"component-name":"toast"})])}}},rs=m(us,[["__file","toast.html.vue"]]);export{rs as default};
