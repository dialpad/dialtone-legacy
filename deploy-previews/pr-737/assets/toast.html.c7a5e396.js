import{_ as g,r as l,o as m,c as h,b as s,a as n,i,v as T,j as E,n as r,k as d,d as t,F as C,p as I,l as B,e as S}from"./app.9b3f5902.js";const V={name:"ExampleToast",data(){return{kind:"base",showToast:!1,important:!1}},computed:{toastClass(){return"d-toast--"+this.kind},shouldBeInverted(){return this.important&&!["warning","success"].includes(this.kind)}},methods:{toggleExample(){this.showToast=!this.showToast}}},p=u=>(I("data-v-27b70ef8"),u=u(),B(),u),A={class:"dialtone-example","data-example":"yes","data-code":"yes"},M={class:"dialtone-example__example"},N={class:"lg:d-fd-column lg:d-ai-stretch lg:d-stack8 lg:d-flow0 d-d-flex d-ai-flex-end d-p16 d-bgc-black-100 d-ba d-bc-transparent d-flow16 d-mb8 d-bar4"},F={class:"d-fl-grow1"},U=p(()=>s("div",{class:"d-label d-fs-14"},[s("label",{for:"style-select"},"Style")],-1)),j={class:"d-select d-select--sm"},z=p(()=>s("option",{id:"style-select-base",name:"style-select",value:"base",selected:""},`
                  Base
                `,-1)),D=p(()=>s("option",{id:"style-select-error",name:"style-select",value:"error"},`
                  Error
                `,-1)),W=p(()=>s("option",{id:"style-select-info",name:"style-select",value:"info"},`
                  Informational
                `,-1)),G=p(()=>s("option",{id:"style-select-success",name:"style-select",value:"success"},`
                  Success
                `,-1)),H=p(()=>s("option",{id:"style-select-warning",name:"style-select",value:"warning"},`
                  Warning
                `,-1)),J={class:"d-checkbox-group"},K={class:"d-checkbox__input"},L=p(()=>s("span",{class:"d-checkbox__copy d-checkbox__label d-mb6 d-fw-bold"},`
              Important?
            `,-1)),O={class:"d-toast-wrapper"},P=["aria-hidden"],Q={class:"d-toast__dialog"},R={class:"d-notice__icon"},X={class:"d-notice__content"},Y=p(()=>s("h2",{class:"d-notice__title"},`
            Title
          `,-1)),Z={class:"d-notice__message"},$={class:"d-notice__actions"},ss={class:"d-btn__icon"};function ns(u,e,b,k,a,o){const v=l("icon-lightbulb"),q=l("icon-info"),f=l("icon-error"),x=l("icon-warning"),y=l("icon-check-circle"),w=l("icon-close");return m(),h(C,null,[s("div",A,[s("div",M,[s("div",N,[s("div",F,[s("div",null,[U,n(),s("div",j,[i(s("select",{id:"style-select","onUpdate:modelValue":e[0]||(e[0]=c=>a.kind=c),class:"d-select__input"},[z,n(),D,n(),W,n(),G,n(),H],512),[[T,a.kind]])])])]),n(),s("label",null,[s("div",J,[s("div",K,[i(s("input",{"onUpdate:modelValue":e[1]||(e[1]=c=>a.important=c),type:"checkbox",class:"d-checkbox"},null,512),[[E,a.important]])]),n(),L])]),n(),s("button",{class:"d-btn d-btn--outlined d-btn--sm",onClick:e[2]||(e[2]=(...c)=>o.toggleExample&&o.toggleExample(...c))},`
          Toggle example
        `)])])]),n(),s("aside",O,[s("div",{class:r(["d-toast",[o.toastClass,{"d-toast--important":a.important}]]),role:"status","aria-hidden":!a.showToast},[s("div",Q,[s("div",R,[i(t(v,null,null,512),[[d,a.kind==="base"]]),n(),i(t(q,null,null,512),[[d,a.kind==="info"]]),n(),i(t(f,null,null,512),[[d,a.kind==="error"]]),n(),i(t(x,null,null,512),[[d,a.kind==="warning"]]),n(),i(t(y,null,null,512),[[d,a.kind==="success"]])]),n(),s("div",X,[Y,n(),s("p",Z,[n(`
            Message body with
            `),s("a",{href:"#",class:r(["d-link",o.shouldBeInverted?"d-link--inverted":"d-link--muted"])},`
              a link.
            `,2)])]),n(),s("div",$,[s("button",{type:"button",class:r(["d-btn d-btn--sm d-btn--outlined",o.shouldBeInverted?"d-btn--inverted":"d-btn--muted"])},`
            Action
          `,2),n(),s("button",{type:"button",class:r(["d-btn d-btn--sm d-btn--circle",o.shouldBeInverted?"d-btn--inverted":"d-btn--muted"]),"aria-label":"Close",onClick:e[3]||(e[3]=(...c)=>o.toggleExample&&o.toggleExample(...c))},[s("span",ss,[t(w)])],2)])])],10,P)])],64)}var _=g(V,[["render",ns],["__scopeId","data-v-27b70ef8"],["__file","ExampleToast.vue"]]);const as=s("h2",{id:"variants-and-examples",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#variants-and-examples","aria-hidden":"true"},"#"),n(" Variants and examples")],-1),ts=S(`<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aside</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-toast-wrapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
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
</code></pre></div><h2 id="classes" tabindex="-1"><a class="header-anchor" href="#classes" aria-hidden="true">#</a> Classes</h2>`,2),es=s("h2",{id:"accessibility",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#accessibility","aria-hidden":"true"},"#"),n(" Accessibility")],-1),os=s("p",null,`Avoid using toast for critical information since toast disappears automatically and make sure
to provide enough time to read the message and act consequently. For best accessible user experience, the amount of
time a toast displays for should be user configurable.`,-1),ls=s("p",null,[n("Using "),s("code",null,'role="alert"'),n(", it sets "),s("code",null,'aria-live="assertive"'),n(` which
means it will immediately interrupt anything currently being read by the screen reader, so use it for things
that require immediate attention such as:`)],-1),ps=s("ul",null,[s("li",null,"An invalid value was entered into a form field"),n(),s("li",null,"The user's login session is about to expire"),n(),s("li",null,"The connection to the server was lost, local changes will not be saved")],-1),cs=s("p",null,[n("Meanwhile "),s("code",null,'role="status"'),n(" implies "),s("code",null,'aria-live="polite"'),n(` which
means the toast will be read out after what's currently being has finished.`)],-1),is={__name:"toast.html",setup(u){return(e,b)=>{const k=l("component-class-table"),a=l("component-accessible-table");return m(),h("div",null,[t(_),n(),as,n(),t(_),n(),ts,n(),t(k,{"component-name":"toast"}),n(),es,n(),os,n(),ls,n(),ps,n(),cs,n(),t(a,{"component-name":"toast"})])}}};var ds=g(is,[["__file","toast.html.vue"]]);export{ds as default};
