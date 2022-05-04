import{_ as u,r as a,o as b,a as m,b as e,g as c,i as d,d as n,t as I,n as l,e as o,w as h,F as C,c as B}from"./app.935ad005.js";const N={name:"example-notice",props:{important:{type:Boolean,default:!1},kind:{type:String,required:!0},role:{type:String,default:"status"}},computed:{noticeClass(){return"d-notice--"+this.kind},shouldBeInverted(){return this.important&&!["warning","success"].includes(this.kind)}}},S={class:"d-stack12 d-w60p"},A=["role"],E={class:"d-notice__icon"},V={class:"d-notice__content"},F={class:"d-notice__title"},M={class:"d-tt-capitalize"},O=o(" title (optional)"),j={class:"d-notice__message"},q=o(" Message body with "),z={class:"d-notice__actions"},D={class:"d-btn__icon"};function U(p,f,s,_,r,i){const v=a("icon-lightbulb"),g=a("icon-error"),k=a("icon-info"),w=a("icon-check-circle"),x=a("icon-warning"),y=a("icon-close");return b(),m("div",S,[e("aside",{class:l(["d-notice",[i.noticeClass,{"d-notice--important":s.important}]]),role:s.role,"aria-hidden":"false"},[e("div",E,[c(n(v,null,null,512),[[d,s.kind==="base"]]),c(n(g,null,null,512),[[d,s.kind==="error"]]),c(n(k,null,null,512),[[d,s.kind==="info"]]),c(n(w,null,null,512),[[d,s.kind==="success"]]),c(n(x,null,null,512),[[d,s.kind==="warning"]])]),e("div",V,[e("h2",F,[e("span",M,I(s.kind),1),O]),e("p",j,[q,e("a",{href:"#",class:l(["d-link",i.shouldBeInverted?"d-link--inverted":"d-link--muted"])}," a link. ",2)])]),e("div",z,[e("button",{type:"button",class:l(["d-btn d-btn--sm d-btn--outlined",i.shouldBeInverted?"d-btn--inverted":"d-btn--muted"])}," Action ",2),e("button",{type:"button",class:l(["d-btn d-btn--sm d-btn--circle",i.shouldBeInverted?"d-btn--inverted":"d-btn--muted"]),"aria-label":"Close"},[e("span",D,[n(y)])],2)])],10,A)])}var t=u(N,[["render",U],["__file","ExampleNotice.vue"]]);const $=B('<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2><p>A notice delivers informational and assistive messages that inform the user about product or account statuses and related actions. It can suggest an action or dismissed by the user, though neither are required. For time-based notifications, see <a href="/components/toasts/" class="d-link">toasts</a>.</p><h2 id="classes" tabindex="-1"><a class="header-anchor" href="#classes" aria-hidden="true">#</a> Classes</h2>',3),T=e("h2",{id:"examples",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#examples","aria-hidden":"true"},"#"),o(" Examples")],-1),G=e("h3",{id:"base-styles",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#base-styles","aria-hidden":"true"},"#"),o(" Base Styles")],-1),H=e("p",null,"Used in most scenarios when the message should be noticeable but not dominate.",-1),J=e("div",{class:"language-html ext-html"},[e("pre",{class:"language-html"},[e("code",null,`<aside class="d-notice d-notice--base" role="status" aria-hidden="false">
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

<aside class="d-notice d-notice--error" role="status" aria-hidden="false">\u2026</aside>
<aside class="d-notice d-notice--info" role="status" aria-hidden="false">\u2026</aside>
<aside class="d-notice d-notice--success" role="status" aria-hidden="false">\u2026</aside>
<aside class="d-notice d-notice--warning" role="status" aria-hidden="false">\u2026</aside>
`)])],-1),K=e("h3",{id:"important",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#important","aria-hidden":"true"},"#"),o(" Important")],-1),L=e("p",null,"Used occasionally in scenarios when the message needs to dominate.",-1),P=e("div",{class:"language-html ext-html"},[e("pre",{class:"language-html"},[e("code",null,`<aside class="d-notice d-notice--base d-notice--important" role="alert" aria-hidden="false">
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

<aside class="d-notice d-notice--error d-notice--important" role="alert" aria-hidden="false">\u2026</aside>
<aside class="d-notice d-notice--info d-notice--important" role="alert" aria-hidden="false">\u2026</aside>
<aside class="d-notice d-notice--success d-notice--important" role="alert" aria-hidden="false">\u2026</aside>
<aside class="d-notice d-notice--warning d-notice--important" role="alert" aria-hidden="false">\u2026</aside>
`)])],-1),Q=e("h2",{id:"accessibility",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#accessibility","aria-hidden":"true"},"#"),o(" Accessibility")],-1),R={setup(p){return(f,s)=>{const _=a("component-class-table"),r=a("code-well-header"),i=a("component-accessible-table");return b(),m(C,null,[$,n(_,{"component-name":"notice"}),T,G,H,n(r,{bgclass:"d-bgc-white"},{default:h(()=>[n(t,{kind:"base",role:"status"}),n(t,{kind:"error",role:"status"}),n(t,{kind:"info",role:"status"}),n(t,{kind:"success",role:"status"}),n(t,{kind:"warning",role:"status"})]),_:1}),J,K,L,n(r,null,{default:h(()=>[n(t,{kind:"base",role:"status",important:""}),n(t,{kind:"error",role:"status",important:""}),n(t,{kind:"info",role:"status",important:""}),n(t,{kind:"success",role:"status",important:""}),n(t,{kind:"warning",role:"status",important:""})]),_:1}),P,Q,n(i,{"component-name":"notice"})],64)}}};var X=u(R,[["__file","notice.html.vue"]]);export{X as default};
