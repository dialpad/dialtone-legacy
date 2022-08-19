import{_ as g,r as c,o as m,c as b,a as s,g as l,v as E,h as C,n as d,i as u,b as t,F as I,p as B,j as S,e as n,d as r}from"./app.e21d0621.js";const V={name:"ExampleToast",data(){return{kind:"base",showToast:!1,important:!1}},computed:{toastClass(){return"d-toast--"+this.kind},shouldBeInverted(){return this.important&&!["warning","success"].includes(this.kind)}},methods:{toggleExample(){this.showToast=!this.showToast}}},k=i=>(B("data-v-fb630748"),i=i(),S(),i),A={class:"dialtone-example","data-example":"yes","data-code":"yes"},M={class:"dialtone-example__example"},N={class:"lg:d-fd-column lg:d-ai-stretch lg:d-stack8 lg:d-flow0 d-d-flex d-ai-flex-end d-p16 d-bgc-ash d-ba d-bc-black-100 d-flow16 d-mb8 d-bar4"},F={class:"d-fl-grow1"},U=k(()=>s("div",{class:"d-label d-fs-14"},[s("label",{for:"style-select"},"Style")],-1)),j=n(),z={class:"d-select d-select--sm"},D=r(`<option id="style-select-base" name="style-select" value="base" selected data-v-fb630748>
                  Base
                </option> <option id="style-select-error" name="style-select" value="error" data-v-fb630748>
                  Error
                </option> <option id="style-select-info" name="style-select" value="info" data-v-fb630748>
                  Informational
                </option> <option id="style-select-success" name="style-select" value="success" data-v-fb630748>
                  Success
                </option> <option id="style-select-warning" name="style-select" value="warning" data-v-fb630748>
                  Warning
                </option>`,9),W=[D],G=n(),H={class:"d-checkbox-group"},J={class:"d-checkbox__input"},K=n(),L=k(()=>s("span",{class:"d-checkbox__copy d-checkbox__label d-mb6 d-fw-bold"},`
              Important?
            `,-1)),O=n(),P=n(),Q={class:"d-toast-wrapper"},R=["aria-hidden"],X={class:"d-toast__dialog"},Y={class:"d-notice__icon"},Z=n(),$=n(),ss=n(),ns=n(),as=n(),ts={class:"d-notice__content"},es=k(()=>s("h2",{class:"d-notice__title"},`
            Title
          `,-1)),os=n(),cs={class:"d-notice__message"},ps=n(`
            Message body with
            `),ls=n(),is={class:"d-notice__actions"},us=n(),ds={class:"d-btn__icon"};function rs(i,e,v,_,a,o){const q=c("icon-lightbulb"),f=c("icon-info"),x=c("icon-error"),y=c("icon-warning"),w=c("icon-check-circle"),T=c("icon-close");return m(),b(I,null,[s("div",A,[s("div",M,[s("div",N,[s("div",F,[s("div",null,[U,j,s("div",z,[l(s("select",{id:"style-select","onUpdate:modelValue":e[0]||(e[0]=p=>a.kind=p),class:"d-select__input"},W,512),[[E,a.kind]])])])]),G,s("label",null,[s("div",H,[s("div",J,[l(s("input",{"onUpdate:modelValue":e[1]||(e[1]=p=>a.important=p),type:"checkbox",class:"d-checkbox"},null,512),[[C,a.important]])]),K,L])]),O,s("button",{class:"d-btn d-btn--outlined d-btn--sm",onClick:e[2]||(e[2]=(...p)=>o.toggleExample&&o.toggleExample(...p))},`
          Toggle example
        `)])])]),P,s("aside",Q,[s("div",{class:d(["d-toast",[o.toastClass,{"d-toast--important":a.important}]]),role:"status","aria-hidden":!a.showToast},[s("div",X,[s("div",Y,[l(t(q,null,null,512),[[u,a.kind==="base"]]),Z,l(t(f,null,null,512),[[u,a.kind==="info"]]),$,l(t(x,null,null,512),[[u,a.kind==="error"]]),ss,l(t(y,null,null,512),[[u,a.kind==="warning"]]),ns,l(t(w,null,null,512),[[u,a.kind==="success"]])]),as,s("div",ts,[es,os,s("p",cs,[ps,s("a",{href:"#",class:d(["d-link",o.shouldBeInverted?"d-link--inverted":"d-link--muted"])},`
              a link.
            `,2)])]),ls,s("div",is,[s("button",{type:"button",class:d(["d-btn d-btn--sm d-btn--outlined",o.shouldBeInverted?"d-btn--inverted":"d-btn--muted"])},`
            Action
          `,2),us,s("button",{type:"button",class:d(["d-btn d-btn--sm d-btn--circle",o.shouldBeInverted?"d-btn--inverted":"d-btn--muted"]),"aria-label":"Close",onClick:e[3]||(e[3]=(...p)=>o.toggleExample&&o.toggleExample(...p))},[s("span",ds,[t(T)])],2)])])],10,R)])],64)}var h=g(V,[["render",rs],["__scopeId","data-v-fb630748"],["__file","ExampleToast.vue"]]);const ks=n(),_s=s("h2",{id:"variants-and-examples",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#variants-and-examples","aria-hidden":"true"},"#"),n(" Variants and Examples")],-1),hs=n(),gs=r(` <div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aside</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-toast-wrapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
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
</code></pre></div><h2 id="classes" tabindex="-1"><a class="header-anchor" href="#classes" aria-hidden="true">#</a> Classes</h2> `,4),ms=r(` <h2 id="accessibility" tabindex="-1"><a class="header-anchor" href="#accessibility" aria-hidden="true">#</a> Accessibility</h2> <p>Avoid using toast for critical information since toast disappears automatically and make sure
to provide enough time to read the message and act consequently. For best accessible user experience, the amount of
time a toast displays for should be user configurable.</p> <p>Using <code>role=&quot;alert&quot;</code>, it sets <code>aria-live=&quot;assertive&quot;</code> which
means it will immediately interrupt anything currently being read by the screen reader, so use it for things
that require immediate attention such as:</p> <ul><li>An invalid value was entered into a form field</li> <li>The user&#39;s login session is about to expire</li> <li>The connection to the server was lost, local changes will not be saved</li></ul> <p>Meanwhile <code>role=&quot;status&quot;</code> implies <code>aria-live=&quot;polite&quot;</code> which
means the toast will be read out after what&#39;s currently being has finished.</p> `,11),bs={__name:"toast.html",setup(i){return(e,v)=>{const _=c("component-class-table"),a=c("component-accessible-table");return m(),b("div",null,[t(h),ks,_s,hs,t(h),gs,t(_,{"component-name":"toast"}),ms,t(a,{"component-name":"toast"})])}}};var qs=g(bs,[["__file","toast.html.vue"]]);export{qs as default};
