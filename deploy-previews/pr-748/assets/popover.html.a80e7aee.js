import{_ as v,o as p,c as h,br as b,f as _,a as o,b as e,n as g,h as f,F as x,r as m,e as t,w as a}from"./app.5e51e3f0.js";import{D as y}from"./DialtoneUsage.b170463a.js";const w={name:"ExamplePopover",props:{modal:{type:Boolean,default:!1},header:{type:Boolean,default:!1},footer:{type:Boolean,default:!1}},data(){return{shown:!1}},mounted(){window.addEventListener("keyup",n=>{n.key==="Escape"&&this.closeModal()})},beforeUnmount(){window.removeEventListener("keyup",n=>{n.key==="Escape"&&this.closeModal()})},methods:{closeModal(){document.body.classList.remove("d-of-hidden"),this.shown=!1},openModal(){this.modal&&document.body.classList.add("d-of-hidden"),this.shown=!0},togglePopover(){this.shown?this.closeModal():this.openModal()}}},k=["aria-hidden"],q={class:"d-popover d-fl-center d-fd-column d-p24 d-w100p d-of-auto"},C=["aria-expanded"],M=["aria-modal","aria-hidden"],L={key:0,class:"d-popover__header d-px16"},A=e("div",{class:"d-w100p"},`
          This is the header
        `,-1),B=[A],P={class:"d-popover__content d-p16"},T=e("br",null,null,-1),E=e("button",{class:"d-btn d-btn--primary"},`
          Button
        `,-1),I={key:1,class:"d-popover__footer d-px16"},$=e("div",{class:"d-w100p"},`
          This is the footer
        `,-1),z=[$];function D(n,d,r,l,i,s){return p(),h(x,null,[r.modal?(p(),h("div",{key:0,class:"d-modal--transparent","aria-hidden":!i.shown,onClick:d[0]||(d[0]=b((...c)=>s.closeModal&&s.closeModal(...c),["self"]))},null,8,k)):_("v-if",!0),o(),e("div",q,[e("button",{id:"anchor1",class:"d-btn d-btn--primary","aria-expanded":!i.shown,"aria-controls":"dialog1","aria-haspopup":"dialog",onClick:d[1]||(d[1]=(...c)=>s.togglePopover&&s.togglePopover(...c))},`
      Click Me
    `,8,C),o(),e("div",{id:"dialog1",class:g(["d-popover__dialog d-popover__dialog--modal d-ps-relative d-t4 d-w264 d-hmx164",i.shown?"d-vi-visible":"d-vi-hidden"]),role:"dialog","aria-modal":r.modal,"aria-hidden":i.shown,"aria-labelledby":"anchor1"},[r.header?(p(),h("div",L,B)):_("v-if",!0),o(),e("div",P,[f(n.$slots,"content",{},()=>[o(`
          This is content rendered within the popover.`),T]),o(),E]),o(),r.footer?(p(),h("div",I,z)):_("v-if",!0)],10,M)])],64)}const u=v(w,[["render",D],["__file","ExamplePopover.vue"]]),N=e("h2",{id:"usage",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#usage","aria-hidden":"true"},"#"),o(" Usage")],-1),S=e("p",null,"Your popover should be modal when:",-1),V=e("ul",null,[e("li",null,"It contains scrollable content."),o(),e("li",null,"It contains components that hold user input state (input, checkbox).")],-1),F=e("p",null,"Your popover should be non-modal when:",-1),R=e("ul",null,[e("li",null,"It is not scrollable."),o(),e("li",null,"It contains only components that do not hold state (link, button).")],-1),U=e("ul",null,[e("li",null,"Smaller sized dialogs that trigger on user activation of an anchor element."),o(),e("li",null,"Dialogs that should be positioned relative to the anchor."),o(),e("li",null,"Dialogs that contain interactive components.")],-1),W=e("li",null,"Dialogs that should be positioned in the center of the screen.",-1),Y=e("li",null,"Dialogs that are very large.",-1),j=e("li",null,"Alerts.",-1),H=e("h3",null,"Best practices",-1),G=e("li",null,"Trigger using an anchor element, such as a button.",-1),J=e("li",null,"Render the dialog at the body element.",-1),K=e("li",null,"Focus the first interactive element within the dialog after it is opened.",-1),O=e("li",null,"Close the dialog when ESC is pressed.",-1),Q=e("li",null,"Close non-modal dialogs if they are scrolled out of visibility.",-1),X=e("li",null,"Set the z-index of the dialog to var(--zi-modal-element) if modal, var(--zi-popover) if not.",-1),Z=e("h2",{id:"variants-and-examples",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#variants-and-examples","aria-hidden":"true"},"#"),o(" Variants and examples")],-1),ee=e("h3",null,"Popover - Modal",-1),oe=e("div",{class:"language-html","data-ext":"html"},[e("pre",{class:"language-html"},[e("code",null,`<div class="d-modal--transparent"></div>
<div class="d-popover">
  <button id="anchor1" class="d-btn d-btn--primary" aria-expanded="false" aria-controls="dialog1" aria-haspopup="dialog">Click Me</button>
  <div id="dialog1" class="d-popover__dialog d-popover__dialog--modal d-ps-relative d-t4 d-w264" role="dialog" aria-modal="true" aria-hidden="true" aria-labelledby="anchor1">
    <div class="d-popover__content d-p16">
      This is content rendered within the popover.<br>
      <button class="d-btn d-btn--primary">Button</button>
    </div>
  </div>
</div>
`)])],-1),te=e("h3",null,"Popover - Non Modal",-1),ae=e("div",{class:"language-html","data-ext":"html"},[e("pre",{class:"language-html"},[e("code",null,`<div class="d-popover">
  <button id="anchor2" class="d-btn d-btn--primary" aria-expanded="false" aria-controls="dialog2" aria-haspopup="dialog">Click Me</button>
  <div id="dialog2" class="d-popover__dialog d-ps-relative d-t4 d-w264" role="dialog" aria-modal="false" aria-hidden="true" aria-labelledby="anchor2">
    <div class="d-popover__content d-p16">
      This is content rendered within the popover.<br>
      <button class="d-btn d-btn--primary">Button</button>
    </div>
  </div>
</div>
`)])],-1),ie=e("h3",null,"With Header - Modal",-1),ne=e("br",null,null,-1),le=e("div",{class:"language-html","data-ext":"html"},[e("pre",{class:"language-html"},[e("code",null,`<div class="d-modal--transparent"></div>
<div class="d-popover">
  <button id="anchor3" class="d-btn d-btn--primary" aria-expanded="false" aria-controls="dialog3" aria-haspopup="dialog">Click Me</button>
  <div id="dialog3" class="d-popover__dialog d-popover__dialog--modal d-ps-relative d-t4 d-w264 d-hmx164" role="dialog" aria-modal="true" aria-hidden="true" aria-labelledby="anchor3">
    <div class="d-popover__header d-px16">
      <div class="d-w100p">
        This is the header
      </div>
    </div>
    <div class="d-popover__content d-p16">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur delectus distinctio id iure labore, maiores mollitia reprehenderit sunt tempore veritatis. Aliquam delectus earum ex, expedita ipsam nobis obcaecati quibusdam repudiandae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur delectus distinctio id iure labore, maiores mollitia reprehenderit sunt tempore veritatis. Aliquam delectus earum ex, expedita ipsam nobis obcaecati quibusdam repudiandae.<br>
      <button class="d-btn d-btn--primary">Button</button>
    </div>
  </div>
</div>
`)])],-1),se=e("h3",null,"With Footer - Modal",-1),de=e("br",null,null,-1),re=e("div",{class:"language-html","data-ext":"html"},[e("pre",{class:"language-html"},[e("code",null,`<div class="d-modal--transparent"></div>
<div class="d-popover">
  <button id="anchor4" class="d-btn d-btn--primary" aria-expanded="false" aria-controls="dialog4" aria-haspopup="dialog">Click Me</button>
  <div id="dialog4" class="d-popover__dialog d-popover__dialog--modal d-ps-relative d-t4 d-w264 d-hmx164" role="dialog" aria-modal="true" aria-hidden="true" aria-labelledby="anchor4">
    <div class="d-popover__content d-p16">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur delectus distinctio id iure labore, maiores mollitia reprehenderit sunt tempore veritatis. Aliquam delectus earum ex, expedita ipsam nobis obcaecati quibusdam repudiandae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur delectus distinctio id iure labore, maiores mollitia reprehenderit sunt tempore veritatis. Aliquam delectus earum ex, expedita ipsam nobis obcaecati quibusdam repudiandae.<br>
      <button class="d-btn d-btn--primary">Button</button>
    </div>
    <div class="d-popover__footer d-px16">
      <div class="d-w100p">
        This is the footer
      </div>
    </div>
  </div>
</div>
`)])],-1),ce=e("h2",{id:"classes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#classes","aria-hidden":"true"},"#"),o(" Classes")],-1),ue=e("p",null,"Popover must contain an anchor and content element. d-modal--transparent can be used as a sibling before the popover container if you wish to make the popover modal.",-1),pe=e("h2",{id:"accessibility",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#accessibility","aria-hidden":"true"},"#"),o(" Accessibility")],-1),he=e("p",null,[o('If your popover is modal, please see the accessibility section of this page regarding "focus trapping": '),e("a",{href:"components/modal/#accessibility"},"Modal Accessibility"),o(". The same rules will apply here if your popover is modal.")],-1),me={__name:"popover.html",setup(n){return(d,r)=>{const l=m("code-well-header"),i=m("RouterLink"),s=m("component-class-table"),c=m("component-accessible-table");return p(),h("div",null,[t(l,null,{default:a(()=>[t(u,{modal:""})]),_:1}),o(),N,o(),e("p",null,[o(`A Popover contains a dialog that will appear above other content when activated. It will always appear in a location relative to the anchor.
If you are looking for a dialog that does not display relative to the anchor, see `),t(i,{to:"/components/modal.html"},{default:a(()=>[o("Modal")]),_:1}),o(`.
Some common examples of popover usage: dropdown list, emoji picker dialog, add comment dialog.
A popover can be modal or non-modal. Below are some guidelines on when to use a modal vs non-modal popover.`)]),o(),S,o(),V,o(),F,o(),R,o(),t(y,null,{do:a(()=>[U]),dont:a(()=>[e("ul",null,[e("li",null,[o("Content that is displayed on hover. Instead, use a "),t(i,{to:"/components/tooltip.html"},{default:a(()=>[o("Tooltip")]),_:1}),o(".")]),o(),W,o(),Y,o(),j])]),_:1}),o(),H,o(),e("ul",null,[e("li",null,[o("Popovers should be fairly small. If you are looking for more of a full size dialog solution see "),t(i,{to:"/components/modal.html"},{default:a(()=>[o("Modal")]),_:1})]),o(),G,o(),J,o(),K,o(),O,o(),Q,o(),X]),o(),Z,o(),ee,o(),t(l,null,{default:a(()=>[t(u,{modal:""})]),_:1}),o(),oe,te,o(),t(l,null,{default:a(()=>[t(u)]),_:1}),o(),ae,ie,o(),t(l,null,{default:a(()=>[t(u,{modal:"",header:""},{content:a(()=>[o(`
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur delectus distinctio id iure labore, maiores mollitia reprehenderit sunt tempore veritatis. Aliquam delectus earum ex, expedita ipsam nobis obcaecati quibusdam repudiandae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur delectus distinctio id iure labore, maiores mollitia reprehenderit sunt tempore veritatis. Aliquam delectus earum ex, expedita ipsam nobis obcaecati quibusdam repudiandae.`),ne]),_:1})]),_:1}),o(),le,se,o(),t(l,null,{default:a(()=>[t(u,{modal:"",footer:""},{content:a(()=>[o(`
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur delectus distinctio id iure labore, maiores mollitia reprehenderit sunt tempore veritatis. Aliquam delectus earum ex, expedita ipsam nobis obcaecati quibusdam repudiandae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur delectus distinctio id iure labore, maiores mollitia reprehenderit sunt tempore veritatis. Aliquam delectus earum ex, expedita ipsam nobis obcaecati quibusdam repudiandae.`),de]),_:1})]),_:1}),o(),re,ce,o(),ue,o(),t(s,{"component-name":"popover"}),pe,o(),he,o(),t(c,{"component-name":"popover"})])}}},be=v(me,[["__file","popover.html.vue"]]);export{be as default};
