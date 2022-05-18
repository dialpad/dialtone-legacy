import{_,r as o,o as g,c as m,a as s,g as l,v as E,h as C,n as u,i,b as t,F as h,p as I,j as B,e as d,d as v}from"./app.17f787ba.js";const S={name:"example-toast",data(){return{kind:"base",showToast:!1,important:!1}},computed:{toastClass(){return"d-toast--"+this.kind},shouldBeInverted(){return this.important&&!["warning","success"].includes(this.kind)}},methods:{toggleExample(){this.showToast=!this.showToast}}},r=c=>(I("data-v-46e914de"),c=c(),B(),c),V={class:"dialtone-example","data-example":"yes","data-code":"yes"},A={class:"dialtone-example__example"},M={class:"lg:d-fd-column lg:d-ai-stretch lg:d-stack8 lg:d-flow0 d-d-flex d-ai-flex-end d-p16 d-bgc-ash d-ba d-bc-black-100 d-flow16 d-mb8 d-bar4"},N={class:"d-fl-grow1"},F=r(()=>s("div",{class:"d-label d-fs-14"},[s("label",{for:"style-select"},"Style")],-1)),U={class:"d-select d-select--sm"},j=v('<option name="style-select" id="style-select-base" value="base" selected data-v-46e914de>Base</option><option name="style-select" id="style-select-error" value="error" data-v-46e914de>Error</option><option name="style-select" id="style-select-info" value="info" data-v-46e914de>Informational</option><option name="style-select" id="style-select-success" value="success" data-v-46e914de>Success</option><option name="style-select" id="style-select-warning" value="warning" data-v-46e914de>Warning</option>',5),z=[j],D={class:"d-input-group d-d-flex d-ai-center d-fl0 d-flow6"},W=r(()=>s("label",{for:"style-select-important",class:"d-label d-fs14 d-lh2"},"Important?",-1)),G={class:"d-toast-wrapper"},H=["aria-hidden"],J={class:"d-toast__dialog"},K={class:"d-notice__icon"},L={class:"d-notice__content"},O=r(()=>s("h2",{class:"d-notice__title"},"Title",-1)),P={class:"d-notice__message"},Q=d(" Message body with "),R={class:"d-notice__actions"},X={class:"d-btn__icon"};function Y(c,n,b,k,a,e){const q=o("icon-lightbulb"),f=o("icon-info"),x=o("icon-error"),y=o("icon-warning"),w=o("icon-check-circle"),T=o("icon-close");return g(),m(h,null,[s("div",V,[s("div",A,[s("div",M,[s("div",N,[s("div",null,[F,s("div",U,[l(s("select",{id:"style-select",class:"d-select__input","onUpdate:modelValue":n[0]||(n[0]=p=>a.kind=p)},z,512),[[E,a.kind]])])])]),s("div",D,[l(s("input",{type:"checkbox",id:"style-select-important",class:"d-checkbox d-mt1","onUpdate:modelValue":n[1]||(n[1]=p=>a.important=p)},null,512),[[C,a.important]]),W]),s("button",{class:"d-btn d-btn--outlined d-btn--sm",role:"button",onClick:n[2]||(n[2]=(...p)=>e.toggleExample&&e.toggleExample(...p))},"Toggle example")])])]),s("aside",G,[s("div",{class:u(["d-toast",[e.toastClass,{"d-toast--important":a.important}]]),role:"status","aria-hidden":!a.showToast},[s("div",J,[s("div",K,[l(t(q,null,null,512),[[i,a.kind==="base"]]),l(t(f,null,null,512),[[i,a.kind==="info"]]),l(t(x,null,null,512),[[i,a.kind==="error"]]),l(t(y,null,null,512),[[i,a.kind==="warning"]]),l(t(w,null,null,512),[[i,a.kind==="success"]])]),s("div",L,[O,s("p",P,[Q,s("a",{href:"#",class:u(["d-link",e.shouldBeInverted?"d-link--inverted":"d-link--muted"])}," a link. ",2)])]),s("div",R,[s("button",{type:"button",class:u(["d-btn d-btn--sm d-btn--outlined",e.shouldBeInverted?"d-btn--inverted":"d-btn--muted"])}," Action ",2),s("button",{type:"button",class:u(["d-btn d-btn--sm d-btn--circle",e.shouldBeInverted?"d-btn--inverted":"d-btn--muted"]),"aria-label":"Close",onClick:n[3]||(n[3]=(...p)=>e.toggleExample&&e.toggleExample(...p))},[s("span",X,[t(T)])],2)])])],10,H)])],64)}var Z=_(S,[["render",Y],["__scopeId","data-v-46e914de"],["__file","ExampleToast.vue"]]);const $=s("h2",{id:"classes",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#classes","aria-hidden":"true"},"#"),d(" Classes")],-1),ss=s("h2",{id:"examples",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#examples","aria-hidden":"true"},"#"),d(" Examples")],-1),as=v(`<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aside</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-toast-wrapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
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
</code></pre></div><h2 id="accessibility" tabindex="-1"><a class="header-anchor" href="#accessibility" aria-hidden="true">#</a> Accessibility</h2><p>Avoid using toast for critical information since toast disappears automatically and make sure to provide enough time to read the message and act consequently. For best accessible user experience, the amount of time a toast displays for should be user configurable.</p><p>Using <code>role=&quot;alert&quot;</code>, it sets <code>aria-live=&quot;assertive&quot;</code> which means it will immediately interrupt anything currently being read by the screen reader, so use it for things that require immediate attention such as:</p><ul><li>An invalid value was entered into a form field</li><li>The user&#39;s login session is about to expire</li><li>The connection to the server was lost, local changes will not be saved</li></ul><p>Meanwhile <code>role=&quot;status&quot;</code> implies <code>aria-live=&quot;polite&quot;</code> which means the toast will be read out after what&#39;s currently being has finished.</p>`,6),ns={setup(c){return(n,b)=>{const k=o("component-class-table"),a=o("component-accessible-table");return g(),m(h,null,[$,t(k,{"component-name":"toast"}),ss,t(Z),as,t(a,{"component-name":"toast"})],64)}}};var es=_(ns,[["__file","toast.html.vue"]]);export{es as default};
