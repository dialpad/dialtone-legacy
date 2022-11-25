import{_ as m,r as a,o as b,c as p,b as n,i as c,k as d,e as t,a as e,t as C,n as r,w as _,f as I}from"./app.5e51e3f0.js";const B={name:"ExampleNotice",props:{important:{type:Boolean,default:!1},kind:{type:String,required:!0},role:{type:String,default:"status"}},computed:{noticeClass(){return"d-notice--"+this.kind},shouldBeInverted(){return this.important&&!["warning","success"].includes(this.kind)}}},N={class:"d-stack12 d-w60p"},A=["role"],S={class:"d-notice__icon"},V={class:"d-notice__content"},E={class:"d-notice__title"},D={class:"d-tt-capitalize"},M={class:"d-notice__message"},U={class:"d-notice__actions"},j={class:"d-btn__icon"};function q(f,g,i,l,h,o){const u=a("icon-lightbulb"),k=a("icon-error"),v=a("icon-info"),w=a("icon-check-circle"),x=a("icon-warning"),y=a("icon-close");return b(),p("div",N,[n("aside",{class:r(["d-notice",[o.noticeClass,{"d-notice--important":i.important}]]),role:i.role,"aria-hidden":"false"},[n("div",S,[c(t(u,null,null,512),[[d,i.kind==="base"]]),e(),c(t(k,null,null,512),[[d,i.kind==="error"]]),e(),c(t(v,null,null,512),[[d,i.kind==="info"]]),e(),c(t(w,null,null,512),[[d,i.kind==="success"]]),e(),c(t(x,null,null,512),[[d,i.kind==="warning"]])]),e(),n("div",V,[n("h2",E,[n("span",D,C(i.kind),1),e(` title (optional)
        `)]),e(),n("p",M,[e(`
          Message body with
          `),n("a",{href:"#",class:r(["d-link",o.shouldBeInverted?"d-link--inverted":"d-link--muted"])},`
            a link.
          `,2)])]),e(),n("div",U,[n("button",{type:"button",class:r(["d-btn d-btn--sm d-btn--outlined",o.shouldBeInverted?"d-btn--inverted":"d-btn--muted"])},`
          Action
        `,2),e(),n("button",{type:"button",class:r(["d-btn d-btn--sm d-btn--circle",o.shouldBeInverted?"d-btn--inverted":"d-btn--muted"]),"aria-label":"Close"},[n("span",j,[t(y)])],2)])],10,A)])}const s=m(B,[["render",q],["__file","ExampleNotice.vue"]]),z=n("h2",{id:"usage",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#usage","aria-hidden":"true"},"#"),e(" Usage")],-1),L=n("h2",{id:"variants-and-examples",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#variants-and-examples","aria-hidden":"true"},"#"),e(" Variants and examples")],-1),O=n("h3",null,"Base Styles",-1),R=n("p",null,"Used in most scenarios when the message should be noticeable but not dominate.",-1),T=n("div",{class:"language-html","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,`<aside class="d-notice d-notice--base" role="status" aria-hidden="false">
  <div class="d-notice__icon">
    <IconInfo />
  </div>
  <div class="d-notice__content">
    <h2 class="d-notice__title">Optional title</h2>
    <p class="d-notice__message">Message body with <a href="#" class="d-link d-link--muted">a link.</a></p>
  </div>
  <div class="d-notice__actions">
    <button type="button" class="d-btn d-btn--sm d-btn--outlined d-btn--muted">Action</button>
    <button type="button" class="d-btn d-btn--sm d-btn--circle d-btn--muted js-example-notice-close" aria-label="Close">
      <span class="d-btn__icon"><IconClose /></span>
    </button>
  </div>
</aside>

<aside class="d-notice d-notice--error" role="status" aria-hidden="false">…</aside>
<aside class="d-notice d-notice--info" role="status" aria-hidden="false">…</aside>
<aside class="d-notice d-notice--success" role="status" aria-hidden="false">…</aside>
<aside class="d-notice d-notice--warning" role="status" aria-hidden="false">…</aside>
`)])],-1),$=n("h3",null,"Important",-1),F=n("p",null,"Used occasionally in scenarios when the message needs to dominate.",-1),G=n("div",{class:"language-html","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,`<aside class="d-notice d-notice--base d-notice--important" role="alert" aria-hidden="false">
  <div class="d-notice__icon">
    <IconInfo />
  </div>
  <div class="d-notice__content">
    <h2 class="d-notice__title">Optional title</h2>
    <p class="d-notice__message">Message body with <a href="#" class="d-link d-link--inverted">a link.</a></p>
  </div>
  <div class="d-notice__actions">
    <button type="button" class="d-btn d-btn--sm d-btn--outlined d-btn--inverted">Action</button>
    <button type="button" class="d-btn d-btn--sm d-btn--circle d-btn--inverted js-example-notice-close" aria-label="Close">
      <span class="d-btn__icon"><IconClose /></span>
    </button>
  </div>
</aside>

<aside class="d-notice d-notice--error d-notice--important" role="alert" aria-hidden="false">…</aside>
<aside class="d-notice d-notice--info d-notice--important" role="alert" aria-hidden="false">…</aside>
<aside class="d-notice d-notice--success d-notice--important" role="alert" aria-hidden="false">…</aside>
<aside class="d-notice d-notice--warning d-notice--important" role="alert" aria-hidden="false">…</aside>
`)])],-1),H=n("h2",{id:"classes",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#classes","aria-hidden":"true"},"#"),e(" Classes")],-1),J=n("h2",{id:"accessibility",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#accessibility","aria-hidden":"true"},"#"),e(" Accessibility")],-1),K={__name:"notice.html",setup(f){return(g,i)=>{const l=a("code-well-header"),h=a("RouterLink"),o=a("component-class-table"),u=a("component-accessible-table");return b(),p("div",null,[t(l,{bgclass:"d-bgc-white"},{default:_(()=>[t(s,{kind:"base",role:"status"})]),_:1}),e(),I(' <component-combinator component-name="DtNotice" /> '),e(),z,e(),n("p",null,[e("A notice delivers informational and assistive messages that inform the user about product or account statuses and related actions. It can suggest an action or dismissed by the user, though neither are required. For time-based notifications, see "),t(h,{to:"/components/toast.html"},{default:_(()=>[e("Toast")]),_:1}),e(".")]),e(),L,e(),O,e(),R,e(),t(l,{bgclass:"d-bgc-white"},{default:_(()=>[t(s,{kind:"base",role:"status"}),e(),t(s,{kind:"error",role:"status"}),e(),t(s,{kind:"info",role:"status"}),e(),t(s,{kind:"success",role:"status"}),e(),t(s,{kind:"warning",role:"status"})]),_:1}),e(),T,$,e(),F,e(),t(l,null,{default:_(()=>[t(s,{kind:"base",role:"status",important:""}),e(),t(s,{kind:"error",role:"status",important:""}),e(),t(s,{kind:"info",role:"status",important:""}),e(),t(s,{kind:"success",role:"status",important:""}),e(),t(s,{kind:"warning",role:"status",important:""})]),_:1}),e(),G,H,e(),t(o,{"component-name":"notice"}),J,e(),t(u,{"component-name":"notice"})])}}},Q=m(K,[["__file","notice.html.vue"]]);export{Q as default};
