import{_ as x,bs as F,r as m,o as p,c as f,b as e,a as t,n as u,t as g,F as y,f as h,br as v,e as s,x as w,w as c,d as k}from"./app.5e51e3f0.js";import{D as C}from"./DialtoneUsage.b170463a.js";const M=':not(:disabled):not([aria-disabled="true"])',D=`${M}:not([tabindex="-1"])`,S="button,[href],input,select,textarea,details,[tabindex]",B={methods:{async focusFirstElement(o){await this.$nextTick();const a=this._getFocusableElements(o,!0),r=this._getFirstFocusElement(a);r==null||r.focus({preventScroll:!0})},_getFirstFocusElement(o){if(!o.length)return;let a=o[0];return a.matches('[type="radio"]:not(:checked)')&&(a=o.find(r=>r.checked&&r.name===a.name)||a),a},_getFocusableElements(o=this.$el,a=!1){return[...o.querySelectorAll(S)].filter(i=>{const l=window.getComputedStyle(i);return l.getPropertyValue("display")!=="none"&&l.getPropertyValue("visibility")!=="hidden"&&i.matches(a?M:D)})},focusTrappedTabPress(o,a){if(!(o.key==="Tab"))return;const i=this._getFocusableElements(a);if(!i.length){o.preventDefault();return}const l=this._getFirstFocusElement(i),n=i[i.length-1];o.shiftKey?document.activeElement===l&&(n.focus(),o.preventDefault()):document.activeElement===n&&(l.focus(),o.preventDefault())}}},E=["full-screen","danger","fixed","base"],T={name:"ExampleModal",components:{IconClose:F},mixins:[B],props:{kind:{type:String,default:"base",validator:o=>E.includes(o)}},data(){return{showModal:!1,showModalBanner:!1,animateIn:!1,animateOut:!1,modalDescription:`Sed at orci quis nunc finibus gravida eget vitae est. Praesent
          ac laoreet mi. Cras porttitor mauris ex. Integer convallis tellus a ex egestas, id laoreet elit mollis. Mauris
          ut elementum velit. Nam vel consectetur turpis. Aenean consequat purus non nunc tincidunt rutrum. In semper
          pretium dui vel tempus. Proin et mi id mi egestas iaculis. Sed lacinia libero non molestie consequat. Sed
          efficitur purus eget lacus viverra volutpat. Nam luctus ac eros eu iaculis. Fusce non condimentum lorem.`}},computed:{isFullScreen(){return this.kind==="full-screen"},isDanger(){return this.kind==="danger"},isFixed(){return this.kind==="fixed"}},methods:{openModal(){this.animateOut=!1,this.animateIn=!0,this.showModal=!0,document.body.classList.add("d-of-hidden"),this.focusFirstElement(this.$refs.modal)},openModalBanner(){this.showModalBanner=!0},closeModal(){this.animateIn=!1,this.animateOut=!0,this.showModal=!1,this.showModalBanner=!1,document.body.classList.remove("d-of-hidden")},trapFocus(o){this.showModal&&this.focusTrappedTabPress(o,this.$refs.modal)}}},A=["aria-hidden"],I=e("h2",{class:"d-modal__header"},`
        Example title
      `,-1),q={class:"d-modal__content"},L={id:"modal-description"},N={class:"d-mt16"},O={class:"d-modal__footer"},P={class:"d-btn__icon"};function U(o,a,r,i,l,n){const _=m("icon-close");return p(),f(y,null,[e("button",{class:"d-btn d-btn--primary d-btn--sm",type:"button",onClick:a[0]||(a[0]=(...d)=>n.openModal&&n.openModal(...d))},`
    Launch modal
  `),t(),e("aside",{id:"modal-base",ref:"modal",class:u(["d-modal d-mn1",{"d-modal--full":n.isFullScreen,"d-modal--danger":n.isDanger,"d-modal--animate-in":l.animateIn,"d-modal--animate-out":l.animateOut}]),tabindex:"-1",role:"dialog","aria-labelledby":"modal-title","aria-describedby":"modal-description","aria-hidden":!l.showModal,onClick:a[4]||(a[4]=v((...d)=>n.closeModal&&n.closeModal(...d),["self"])),onKeydown:[a[5]||(a[5]=w((...d)=>n.trapFocus&&n.trapFocus(...d),["tab"])),a[6]||(a[6]=w((...d)=>n.closeModal&&n.closeModal(...d),["esc"]))]},[e("div",{class:u(["d-modal__banner",{"d-d-none":!l.showModalBanner}])},`
      This example banner sits at the top of the modal.
    `,2),t(),e("div",{class:u(["d-modal__dialog",{"d-modal__dialog--animate-in":l.animateIn,"d-modal__dialog--animate-out":l.animateOut,"d-modal__dialog--scrollable d-hmx764":n.isFixed}]),role:"document"},[I,t(),e("div",q,[e("p",L,[t(g(l.modalDescription)+" ",1),n.isFixed?(p(),f(y,{key:0},[t(g(l.modalDescription.repeat(3)),1)],64)):h("v-if",!0)]),t(),e("p",N,[e("a",{href:"#",class:"d-link",onClick:a[1]||(a[1]=v((...d)=>n.openModalBanner&&n.openModalBanner(...d),["prevent"]))},"Show me a modal banner")])]),t(),e("footer",O,[e("button",{class:u(["d-btn d-btn--primary",{"d-btn--danger":n.isDanger}]),type:"button"},`
          Save changes
        `,2),t(),e("button",{class:u(["d-btn",{"d-btn--muted":n.isDanger}]),type:"button",onClick:a[2]||(a[2]=(...d)=>n.closeModal&&n.closeModal(...d))},`
          Cancel
        `,2)]),t(),e("button",{class:"d-modal__close d-btn d-btn--circle d-btn--lg","aria-label":"Close",onClick:a[3]||(a[3]=(...d)=>n.closeModal&&n.closeModal(...d))},[e("span",P,[s(_)])])],2)],42,A)],64)}const b=x(T,[["render",U],["__file","ExampleModal.vue"]]),V={class:"d-d-grid d-gg16 d-g-cols4 d-w100p d-fs-200"},K={class:"d-m0 d-stack4 d-w100p"},R=["src"],W=e("figcaption",null,[e("a",{href:"#base-style"},"Base Style")],-1),z={class:"d-m0 d-stack4 d-w100p"},X=["src"],j=e("figcaption",null,[e("a",{href:"#fixed-header-and-footer"},"Fixed header and footer")],-1),G={class:"d-m0 d-stack4 d-w100p"},H=["src"],J=e("figcaption",null,[e("a",{href:"#danger"},"Danger")],-1),Q={class:"d-m0 d-stack4 d-w100p"},Y=["src"],Z=e("figcaption",null,[e("a",{href:"#full-screen"},"Full Screen")],-1),$=e("h2",{id:"usage",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#usage","aria-hidden":"true"},"#"),t(" Usage")],-1),ee=e("p",null,"Modals disable underlying content and are used to present a short-term task the user needs to perform without losing the context of the underlying page. Users won't be able to interact with the page until they close the modal.",-1),te=e("p",null,"Although highly versatile, this doesn't mean modal dialogs are fit for all purposes. Modals are purposefully disruptive and should be used thoughtfully and sparingly, specifically in moments where focus is required or an action must be taken.",-1),ae=e("ul",null,[e("li",null,"To complete a simple task or decision that requires their full attention outside the main workflow."),t(),e("li",null,"Confirming a destructive action that is about to happen."),t(),e("li",null,"Ask for a user’s consent for an action.")],-1),ne=e("li",null,"When its content or features can be part of the page without complicating the page’s intent.",-1),oe=e("li",null,"When the content or message requires interaction with other parts of the application or screen.",-1),le=e("li",null,"Form-related error, success, or warning messages. Keep feedback in context to forms.",-1),se=e("li",null,"Revealing more information (instead: place content inline)",-1),ie=e("li",null,"Displaying complex forms or large amounts of information (instead: place content inline)",-1),de=e("h3",null,"Best practices",-1),re=k("<ul><li>Ideally, users trigger the modal, not the system, and should not be a surprise. Its appearance should reflect user intent to invoke it.  Uninvited modals may surprise the user and result in a quick dismissal of the window.</li> <li>Treat modals as a last resort. Consider whether there’s another component or UI that might be  less disruptive for the user.</li> <li>Limit the number of interactions in a modal. Remove anything that does not support the task.</li> <li>Avoid multiple steps that require navigation within the modal dialog.</li> <li>Avoid complex decision-making that requires additional sources of information unavailable in the modal.</li> <li>Use clear header and action labels. Label links and buttons with a verb that avoids ambiguity and clearly indicates what happens when it’s selected. The primary action’s label should complement the modal title.</li> <li>Avoid lengthy contents that require scrolling.</li> <li>Only one modal can be present at a time.</li></ul>",1),ce=e("h2",{id:"accessibility",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#accessibility","aria-hidden":"true"},"#"),t(" Accessibility")],-1),ue=k('<ul><li>Opened modals “trap focus,” meaning keyboard navigation controls are constrained to elements within the modal. Tabbing to the modal&#39;s last focusable element, and then pressing tab again would loop the focus back to the first element on the page. Focus doesn&#39;t return to the underlying page until the user explicitly dismisses the modal, in which case it would return to the place it was before the dialog opened.</li> <li>To ensure maximum compatibility, all <code>a</code> tags must have an <code>href</code>attribute. Also, any elements which you don&#39;t want to be focusable (but might be focusable by default) must have their <code>tabindex</code> set to <code>-1</code>.</li> <li>Focus should always begin on the first actionable element within the dialog. This could be an OK button, or the first field in the form. An X button in the top right corner should be last in the tab order even though it may be visually above the other elements.</li> <li>Check out the &quot;Focus management&quot; section of the following <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role#focus_management" target="_blank" rel="noopener noreferrer">MDN Dialog document</a> if you&#39;d like to know more.</li> <li>Use <code>aria-labelledby</code> on its root element to associate a title to the modal to announce its to accessible technology. The value of aria-labelledby is to the <code>id</code> value of its heading element (e.g. <code>h2</code>).</li> <li>Dismissing Modal returns focus to the originating element that spawned the modal’s display.</li></ul>',1),me=e("h2",{id:"variants-and-examples",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#variants-and-examples","aria-hidden":"true"},"#"),t(" Variants and examples")],-1),he=e("h3",null,"Base Style",-1),be=e("div",{class:"language-html","data-ext":"html"},[e("pre",{class:"language-html"},[e("code",null,`<aside class="d-modal" id="modal-base" tabindex="-1" role="dialog" aria-labelledby="modal-title" aria-describedby="modal-description" aria-hidden="true">
  <div class="d-modal__dialog" role="document">
    <h2 class="d-modal__header" id="modal-title">…</h2>
    <p class="d-modal__content" id="modal-description">…</p>
    <footer class="d-modal__footer">
      <button class="d-btn" type="button">…</button>
      <button class="d-btn d-btn--primary" type="button">…</button>
    </footer>
    <button href="#" class="d-modal__close d-btn d-btn--circle d-btn--lg" aria-label="Close"><IconClose /></button>
  </div>
</aside>
`)])],-1),_e=e("h3",null,"Fixed header and footer",-1),pe=e("div",{class:"language-html","data-ext":"html"},[e("pre",{class:"language-html"},[e("code",null,`<aside class="d-modal" id="modal-base" tabindex="-1" role="dialog" aria-labelledby="modal-title" aria-describedby="modal-description" aria-hidden="true">
  <div class="d-modal__dialog d-modal__dialog--scrollable" role="document">
    <h2 class="d-modal__header" id="modal-title">…</h2>
    <p class="d-modal__content" id="modal-description">…</p>
    <footer class="d-modal__footer">
      <button class="d-btn" type="button">…</button>
      <button class="d-btn d-btn--primary" type="button">…</button>
    </footer>
    <button href="#" class="d-modal__close d-btn d-btn--circle d-btn--lg" aria-label="Close"><IconClose /></button>
  </div>
</aside>
`)])],-1),fe=e("h3",null,"Danger",-1),ge=e("div",{class:"language-html","data-ext":"html"},[e("pre",{class:"language-html"},[e("code",null,`<aside class="d-modal d-modal--danger" id="modal-base" tabindex="-1" role="dialog" aria-labelledby="modal-title" aria-describedby="modal-description" aria-hidden="true">
  <div class="d-modal__dialog" role="document">
    <h2 class="d-modal__header" id="modal-title">…</h2>
    <p class="d-modal__content" id="modal-description">…</p>
    <footer class="d-modal__footer">
      <button class="d-btn" type="button">…</button>
      <button class="d-btn d-btn--danger d-btn--primary" type="button">…</button>
    </footer>
    <button href="#" class="d-modal__close d-btn d-btn--circle d-btn--lg" aria-label="Close"><IconClose \\></button>
  </div>
</aside>
`)])],-1),ye=e("h3",null,"Full Screen",-1),ve=e("div",{class:"language-html","data-ext":"html"},[e("pre",{class:"language-html"},[e("code",null,`<aside class="d-modal d-modal--full" id="modal-base" tabindex="-1" role="dialog" aria-labelledby="modal-title" aria-describedby="modal-description" aria-hidden="true">
  <div class="d-modal__dialog" role="document">
    <h2 class="d-modal__header" id="modal-title">…</h2>
    <p class="d-modal__content" id="modal-description">…</p>
    <footer class="d-modal__footer">
      <button class="d-btn" type="button">…</button>
      <button class="d-btn d-btn--primary" type="button">…</button>
    </footer>
    <button href="#" class="d-modal__close d-btn d-btn--circle d-btn--lg" aria-label="Close"><IconClose \\></button>
  </div>
</aside>
`)])],-1),we=e("h2",{id:"classes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#classes","aria-hidden":"true"},"#"),t(" Classes")],-1),xe=e("p",null,"At minimum, modals contain a title and one button. They could also contain body text, brand illustrations, product wireframes, or multiple buttons.",-1),ke={__name:"modal.html",setup(o){return(a,r)=>{const i=m("code-well-header"),l=m("RouterLink"),n=m("component-accessible-table"),_=m("component-class-table");return p(),f("div",null,[s(i,null,{default:c(()=>[e("div",V,[e("figure",K,[e("img",{class:"d-bar4",alt:"Modal screen: Base",src:a.$withBase("/assets/images/screen-modal--base.png")},null,8,R),t(),W,t(),h(' <example-modal kind="base" /> ')]),t(),e("figure",z,[e("img",{class:"d-bar4",alt:"Modal screen: Fixed header and footer",src:a.$withBase("/assets/images/screen-modal--fixed-header-and-footer.png")},null,8,X),t(),j,t(),h(' <example-modal kind="fixed" /> ')]),t(),e("figure",G,[e("img",{class:"d-bar4",alt:"Modal screen: Danger",src:a.$withBase("/assets/images/screen-modal--danger.png")},null,8,H),t(),J,t(),h(' <example-modal kind="danger" /> ')]),t(),e("figure",Q,[e("img",{class:"d-bar4",alt:"Modal screen: Full Screen",src:a.$withBase("/assets/images/screen-modal--fullscreen.png")},null,8,Y),t(),Z,t(),h(' <example-modal kind="full-screen" /> ')])])]),_:1}),t(),$,t(),ee,t(),te,t(),s(C,null,{do:c(()=>[ae]),dont:c(()=>[e("ul",null,[ne,t(),oe,t(),le,t(),e("li",null,[t("Confirming an action took place (instead: use a "),s(l,{to:"/components/toast.html"},{default:c(()=>[t("Toast")]),_:1}),t(").")]),t(),se,t(),ie,t(),e("li",null,[t("Displaying content unrelated to current task (instead: place content inline as a "),s(l,{to:"/components/link.html"},{default:c(()=>[t("Link")]),_:1}),t(" or "),s(l,{to:"/components/banner.html"},{default:c(()=>[t("Banner")]),_:1}),t(").")])])]),_:1}),t(),de,t(),re,t(),ce,t(),ue,t(),s(n,{"component-name":"modal"}),me,t(),he,t(),s(i,null,{default:c(()=>[s(b,{kind:"base"})]),_:1}),t(),be,_e,t(),s(i,null,{default:c(()=>[s(b,{kind:"fixed"})]),_:1}),t(),pe,fe,t(),s(i,null,{default:c(()=>[s(b,{kind:"danger"})]),_:1}),t(),ge,ye,t(),s(i,null,{default:c(()=>[s(b,{kind:"full-screen"})]),_:1}),t(),ve,we,t(),xe,t(),s(_,{"component-name":"modal"})])}}},Ce=x(ke,[["__file","modal.html.vue"]]);export{Ce as default};