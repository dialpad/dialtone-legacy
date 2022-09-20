import{_ as b,o as m,c as q,a as n,g as c,v as E,h as g,i,b as o,n as d,F as C,d as a,r as l,p as S,j as T,e as k}from"./app.bba9b28a.js";const V={name:"ExampleBanner",data(){return{kind:"base",showBanner:!1,pinned:!1,important:!1}},computed:{bannerClass(){return"d-banner--"+this.kind},bannerTitle(){return this.kind+"-banner-title"},bannerDesc(){return this.kind+"-banner-desc"},shouldBeInverted(){return this.important&&!["warning","success"].includes(this.kind)}},methods:{toggleExample(){this.showBanner=!this.showBanner}}},r=u=>(S("data-v-3da2cd7c"),u=u(),T(),u),D={class:"dialtone-example","data-example":"yes","data-code":"yes"},N={class:"dialtone-example__example"},U={class:"lg:d-fd-column lg:d-ai-stretch lg:d-stack8 lg:d-flow0 d-d-flex d-ai-flex-end d-p16 d-bgc-ash d-ba d-bc-black-100 d-flow16 d-mb8 d-bar4"},A={class:"d-fl-grow1"},M=r(()=>n("div",{class:"d-label d-fs14"},[n("label",{for:"style-select"},"Style")],-1)),j=a(),F={class:"d-select d-select--sm"},O=k(`<option id="style-select-base" name="style-select" value="base" selected data-v-3da2cd7c>
                  Base
                </option> <option id="style-select-error" name="style-select" value="error" data-v-3da2cd7c>
                  Error
                </option> <option id="style-select-info" name="style-select" value="info" data-v-3da2cd7c>
                  Informational
                </option> <option id="style-select-success" name="style-select" value="success" data-v-3da2cd7c>
                  Success
                </option> <option id="style-select-warning" name="style-select" value="warning" data-v-3da2cd7c>
                  Warning
                </option>`,9),z=[O],P=a(),W={class:"d-checkbox-group"},G={class:"d-checkbox__input"},H=a(),J=r(()=>n("span",{class:"d-checkbox__copy d-checkbox__label d-mb6 d-fw-bold"},`
              Important?
            `,-1)),K=a(),L={class:"d-checkbox-group"},Q={class:"d-checkbox__input"},R=a(),X=r(()=>n("span",{class:"d-checkbox__copy d-checkbox__label d-mb6 d-fw-bold"},`
              Pinned?
            `,-1)),Y=a(),Z=a(),$=["aria-hidden"],nn=["aria-labelledby","aria-describedby"],an={class:"d-notice__icon"},sn=a(),tn=a(),en=a(),on=a(),pn=a(),cn={class:"d-notice__content"},ln=r(()=>n("h2",null,"Optional title",-1)),un=a(),dn={class:"d-notice__message"},rn=a(`
          Message body with
          `),kn=a(),_n={class:"d-notice__actions"},gn=a(),hn={class:"d-btn__icon"};function bn(u,t,v,_,s,e){const f=l("icon-lightbulb"),y=l("icon-error"),x=l("icon-info"),w=l("icon-check-circle"),B=l("icon-warning"),I=l("icon-close");return m(),q(C,null,[n("div",D,[n("div",N,[n("div",U,[n("div",A,[n("div",null,[M,j,n("div",F,[c(n("select",{id:"style-select","onUpdate:modelValue":t[0]||(t[0]=p=>s.kind=p),class:"d-select__input"},z,512),[[E,s.kind]])])])]),P,n("label",null,[n("div",W,[n("div",G,[c(n("input",{"onUpdate:modelValue":t[1]||(t[1]=p=>s.important=p),type:"checkbox",class:"d-checkbox"},null,512),[[g,s.important]])]),H,J])]),K,n("label",null,[n("div",L,[n("div",Q,[c(n("input",{"onUpdate:modelValue":t[2]||(t[2]=p=>s.pinned=p),type:"checkbox",class:"d-checkbox"},null,512),[[g,s.pinned]])]),R,X])]),Y,n("button",{class:"d-btn d-btn--outlined d-btn--sm",onClick:t[3]||(t[3]=(...p)=>e.toggleExample&&e.toggleExample(...p))},`
          Toggle example
        `)])])]),Z,n("aside",{class:d(["d-banner d-banner--transform d-mt0",[e.bannerClass,{"d-banner--pinned":s.pinned,"d-banner--important":s.important}]]),role:"alert","aria-hidden":!s.showBanner},[n("div",{class:"d-banner__dialog",role:"alertdialog","aria-labelledby":e.bannerTitle,"aria-describedby":e.bannerDesc},[n("div",an,[c(o(f,null,null,512),[[i,s.kind==="base"]]),sn,c(o(y,null,null,512),[[i,s.kind==="error"]]),tn,c(o(x,null,null,512),[[i,s.kind==="info"]]),en,c(o(w,null,null,512),[[i,s.kind==="success"]]),on,c(o(B,null,null,512),[[i,s.kind==="warning"]])]),pn,n("div",cn,[ln,un,n("p",dn,[rn,n("a",{href:"#",class:d(["d-link",e.shouldBeInverted?"d-link--inverted":"d-link--muted"])},`
            a link.
          `,2)])]),kn,n("div",_n,[n("button",{type:"button",class:d(["d-btn d-btn--sm d-btn--outlined",e.shouldBeInverted?"d-btn--inverted":"d-btn--muted"])},`
          Action
        `,2),gn,n("button",{type:"button",class:d(["d-btn d-btn--sm d-btn--circle",e.shouldBeInverted?"d-btn--inverted":"d-btn--muted"]),"aria-label":"Close",onClick:t[4]||(t[4]=(...p)=>e.toggleExample&&e.toggleExample(...p))},[n("span",hn,[o(I)])],2)])],8,nn)],10,$)],64)}var h=b(V,[["render",bn],["__scopeId","data-v-3da2cd7c"],["__file","ExampleBanner.vue"]]);const mn=k(' <h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2> <p>System banners are used for <strong>system</strong> messaging. They are full-width notices placed in one of two locations:</p> <ol><li><strong>Above everything else:</strong> If the banner is related to the entire app (e.g. the user lost internet service), place the banner first. <em>These should not be dismissable until the issue is resolved.</em> To pin the banner to the top of the app, add the <code>.d-notice--pinned</code> class.</li> <li><strong>Below the top bar:</strong> This is the default location for system banners. Use these when it affects only a particular area of the product (e.g. when the user is in Do Not Disturb mode).</li></ol> <p>Banners are a type of notice and so you can use the following <a href="components/notice/">notice styles</a> in conjunction with <code>.d-banner</code>.</p> <h2 id="variants-and-examples" tabindex="-1"><a class="header-anchor" href="#variants-and-examples" aria-hidden="true">#</a> Variants and Examples</h2> ',11),qn=k(` <div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aside</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-banner<span class="token punctuation">&quot;</span></span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>alert<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-banner__dialog<span class="token punctuation">&quot;</span></span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>alertdialog<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-labelledy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>info-alert-title<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-describedby</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>info-alert-desc<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-notice__icon<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>IconInfo</span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-notice__content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-notice__title<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>info-alert-title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Optional title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-notice__message<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>info-alert-desc<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Message body with <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>a link.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-notice__actions<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-btn d-btn--sm d-btn--outlined d-btn--muted<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Action<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-btn d-btn--sm d-btn--circle d-btn--muted js-example-notice-close<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Close<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-btn__icon<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>IconClose</span> <span class="token punctuation">/&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aside</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aside</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-banner d-banner--error<span class="token punctuation">&quot;</span></span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>alert<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u2026<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aside</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aside</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-banner d-banner--info<span class="token punctuation">&quot;</span></span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>alert<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u2026<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aside</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aside</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-banner d-banner--success<span class="token punctuation">&quot;</span></span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>alert<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u2026<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aside</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aside</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-banner d-banner--warning<span class="token punctuation">&quot;</span></span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>alert<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u2026<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aside</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="classes" tabindex="-1"><a class="header-anchor" href="#classes" aria-hidden="true">#</a> Classes</h2> `,4),vn=a(),fn=n("h2",{id:"accessibility",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#accessibility","aria-hidden":"true"},"#"),a(" Accessibility")],-1),yn=a(),xn={__name:"banner.html",setup(u){return(t,v)=>{const _=l("component-class-table"),s=l("component-accessible-table");return m(),q("div",null,[o(h),mn,o(h),qn,o(_,{"component-name":"banner"}),vn,fn,yn,o(s,{"component-name":"banner"})])}}};var Bn=b(xn,[["__file","banner.html.vue"]]);export{Bn as default};
