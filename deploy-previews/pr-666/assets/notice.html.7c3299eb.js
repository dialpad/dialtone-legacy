import{_ as g,r as p,o as _,c as q,a as s,g as c,i as l,b as a,t as I,n as i,d as n,w as r,e as m}from"./app.1c704d56.js";const $={name:"ExampleNotice",props:{important:{type:Boolean,default:!1},kind:{type:String,required:!0},role:{type:String,default:"status"}},computed:{noticeClass(){return"d-notice--"+this.kind},shouldBeInverted(){return this.important&&!["warning","success"].includes(this.kind)}}},C={class:"d-stack12 d-w60p"},B=["role"],E={class:"d-notice__icon"},N=n(),S=n(),A=n(),V=n(),M=n(),U={class:"d-notice__content"},j={class:"d-notice__title"},z={class:"d-tt-capitalize"},D=n(` title (optional)
        `),L=n(),O={class:"d-notice__message"},T=n(`
          Message body with
          `),F=n(),G={class:"d-notice__actions"},H=n(),J={class:"d-btn__icon"};function K(h,v,o,u,d,e){const k=p("icon-lightbulb"),b=p("icon-error"),f=p("icon-info"),w=p("icon-check-circle"),x=p("icon-warning"),y=p("icon-close");return _(),q("div",C,[s("aside",{class:i(["d-notice",[e.noticeClass,{"d-notice--important":o.important}]]),role:o.role,"aria-hidden":"false"},[s("div",E,[c(a(k,null,null,512),[[l,o.kind==="base"]]),N,c(a(b,null,null,512),[[l,o.kind==="error"]]),S,c(a(f,null,null,512),[[l,o.kind==="info"]]),A,c(a(w,null,null,512),[[l,o.kind==="success"]]),V,c(a(x,null,null,512),[[l,o.kind==="warning"]])]),M,s("div",U,[s("h2",j,[s("span",z,I(o.kind),1),D]),L,s("p",O,[T,s("a",{href:"#",class:i(["d-link",e.shouldBeInverted?"d-link--inverted":"d-link--muted"])},`
            a link.
          `,2)])]),F,s("div",G,[s("button",{type:"button",class:i(["d-btn d-btn--sm d-btn--outlined",e.shouldBeInverted?"d-btn--inverted":"d-btn--muted"])},`
          Action
        `,2),H,s("button",{type:"button",class:i(["d-btn d-btn--sm d-btn--circle",e.shouldBeInverted?"d-btn--inverted":"d-btn--muted"]),"aria-label":"Close"},[s("span",J,[a(y)])],2)])],10,B)])}var t=g($,[["render",K],["__file","ExampleNotice.vue"]]);const P=n(),Q=s("h2",{id:"usage",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#usage","aria-hidden":"true"},"#"),n(" Usage")],-1),R=n(),W=n("A notice delivers informational and assistive messages that inform the user about product or account statuses and related actions. It can suggest an action or dismissed by the user, though neither are required. For time-based notifications, see "),X={href:"/components/toasts/",target:"_blank",rel:"noopener noreferrer"},Y=n("Toasts"),Z=n("."),nn=n(),an=s("h2",{id:"variants-and-examples",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#variants-and-examples","aria-hidden":"true"},"#"),n(" Variants and Examples")],-1),sn=n(),tn=s("h3",null,"Base Styles",-1),pn=n(),on=s("p",null,"Used in most scenarios when the message should be noticeable but not dominate.",-1),en=n(),cn=n(),ln=n(),un=n(),kn=n(),rn=m(` <div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aside</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-notice d-notice--base<span class="token punctuation">&quot;</span></span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>status<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-notice__icon<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>IconInfo</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-notice__content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-notice__title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Optional title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-notice__message<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Message body with <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-link d-link--muted<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>a link.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-notice__actions<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-btn d-btn--sm d-btn--outlined d-btn--muted<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Action<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-btn d-btn--sm d-btn--circle d-btn--muted js-example-notice-close<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Close<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-btn__icon<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>IconClose</span> <span class="token punctuation">/&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aside</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aside</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-notice d-notice--error<span class="token punctuation">&quot;</span></span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>status<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u2026<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aside</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aside</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-notice d-notice--info<span class="token punctuation">&quot;</span></span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>status<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u2026<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aside</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aside</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-notice d-notice--success<span class="token punctuation">&quot;</span></span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>status<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u2026<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aside</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aside</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-notice d-notice--warning<span class="token punctuation">&quot;</span></span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>status<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u2026<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aside</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3>Important</h3> <p>Used occasionally in scenarios when the message needs to dominate.</p> `,6),dn=n(),gn=n(),_n=n(),qn=n(),mn=m(` <div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aside</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-notice d-notice--base d-notice--important<span class="token punctuation">&quot;</span></span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>alert<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-notice__icon<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>IconInfo</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-notice__content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-notice__title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Optional title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-notice__message<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Message body with <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-link d-link--inverted<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>a link.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-notice__actions<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-btn d-btn--sm d-btn--outlined d-btn--inverted<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Action<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-btn d-btn--sm d-btn--circle d-btn--inverted js-example-notice-close<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Close<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-btn__icon<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>IconClose</span> <span class="token punctuation">/&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aside</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aside</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-notice d-notice--error d-notice--important<span class="token punctuation">&quot;</span></span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>alert<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u2026<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aside</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aside</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-notice d-notice--info d-notice--important<span class="token punctuation">&quot;</span></span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>alert<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u2026<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aside</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aside</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-notice d-notice--success d-notice--important<span class="token punctuation">&quot;</span></span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>alert<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u2026<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aside</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aside</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-notice d-notice--warning d-notice--important<span class="token punctuation">&quot;</span></span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>alert<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u2026<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aside</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="classes" tabindex="-1"><a class="header-anchor" href="#classes" aria-hidden="true">#</a> Classes</h2> `,4),hn=n(),vn=s("h2",{id:"accessibility",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#accessibility","aria-hidden":"true"},"#"),n(" Accessibility")],-1),bn=n(),fn={__name:"notice.html",setup(h){return(v,o)=>{const u=p("code-well-header"),d=p("ExternalLinkIcon"),e=p("component-class-table"),k=p("component-accessible-table");return _(),q("div",null,[a(u,{bgclass:"d-bgc-white"},{default:r(()=>[a(t,{kind:"base",role:"status"})]),_:1}),P,Q,R,s("p",null,[W,s("a",X,[Y,a(d)]),Z]),nn,an,sn,tn,pn,on,en,a(u,{bgclass:"d-bgc-white"},{default:r(()=>[a(t,{kind:"base",role:"status"}),cn,a(t,{kind:"error",role:"status"}),ln,a(t,{kind:"info",role:"status"}),un,a(t,{kind:"success",role:"status"}),kn,a(t,{kind:"warning",role:"status"})]),_:1}),rn,a(u,null,{default:r(()=>[a(t,{kind:"base",role:"status",important:""}),dn,a(t,{kind:"error",role:"status",important:""}),gn,a(t,{kind:"info",role:"status",important:""}),_n,a(t,{kind:"success",role:"status",important:""}),qn,a(t,{kind:"warning",role:"status",important:""})]),_:1}),mn,a(e,{"component-name":"notice"}),hn,vn,bn,a(k,{"component-name":"notice"})])}}};var xn=g(fn,[["__file","notice.html.vue"]]);export{xn as default};
