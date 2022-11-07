import{_,o as k,c as d,y as q,q as h,a as n,n as v,g as b,F as f,d as a,b as s,w as t,e as m,r as g}from"./app.b8f8a7b6.js";import{D as x}from"./DialtoneUsage.835a7d86.js";const y={name:"ExamplePopover",props:{modal:{type:Boolean,default:!1},header:{type:Boolean,default:!1},footer:{type:Boolean,default:!1}},data(){return{shown:!1}},mounted(){window.addEventListener("keyup",p=>{p.key==="Escape"&&this.closeModal()})},beforeUnmount(){window.removeEventListener("keyup",p=>{p.key==="Escape"&&this.closeModal()})},methods:{closeModal(){document.body.classList.remove("d-of-hidden"),this.shown=!1},openModal(){this.modal&&document.body.classList.add("d-of-hidden"),this.shown=!0},togglePopover(){this.shown?this.closeModal():this.openModal()}}},w=["aria-hidden"],C=a(),M={class:"d-popover d-fl-center d-fd-column d-p24 d-w100p d-of-auto"},L=["aria-expanded"],A=a(),B=["aria-modal","aria-hidden"],P={key:0,class:"d-popover__header d-px16"},T=n("div",{class:"d-w100p"},`
          This is the header
        `,-1),E=[T],I=a(),z={class:"d-popover__content d-p16"},D=a(`
          This is content rendered within the popover.`),N=n("br",null,null,-1),S=a(),V=n("button",{class:"d-btn d-btn--primary"},`
          Button
        `,-1),F=a(),$={key:1,class:"d-popover__footer d-px16"},R=n("div",{class:"d-w100p"},`
          This is the footer
        `,-1),U=[R];function W(p,c,u,e,o,l){return k(),d(f,null,[u.modal?(k(),d("div",{key:0,class:"d-modal--transparent","aria-hidden":!o.shown,onClick:c[0]||(c[0]=q((...i)=>l.closeModal&&l.closeModal(...i),["self"]))},null,8,w)):h("",!0),C,n("div",M,[n("button",{id:"anchor1",class:"d-btn d-btn--primary","aria-expanded":!o.shown,"aria-controls":"dialog1","aria-haspopup":"dialog",onClick:c[1]||(c[1]=(...i)=>l.togglePopover&&l.togglePopover(...i))},`
      Click Me
    `,8,L),A,n("div",{id:"dialog1",class:v(["d-popover__dialog d-popover__dialog--modal d-ps-relative d-t4 d-w264 d-hmx164",o.shown?"d-vi-visible":"d-vi-hidden"]),role:"dialog","aria-modal":u.modal,"aria-hidden":o.shown,"aria-labelledby":"anchor1"},[u.header?(k(),d("div",P,E)):h("",!0),I,n("div",z,[b(p.$slots,"content",{},()=>[D,N]),S,V]),F,u.footer?(k(),d("div",$,U)):h("",!0)],10,B)])],64)}var r=_(y,[["render",W],["__file","ExamplePopover.vue"]]);const Y=a(),j=n("h2",{id:"usage",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#usage","aria-hidden":"true"},"#"),a(" Usage")],-1),H=a(),G=a(`A Popover contains a dialog that will appear above other content when activated. It will always appear in a location relative to the anchor.
If you are looking for a dialog that does not display relative to the anchor, see `),J=a("Modal"),K=a(`.
Some common examples of popover usage: dropdown list, emoji picker dialog, add comment dialog.
A popover can be modal or non-modal. Below are some guidelines on when to use a modal vs non-modal popover.`),O=m(" <p>Your popover should be modal when:</p> <ul><li>It contains scrollable content.</li> <li>It contains components that hold user input state (input, checkbox).</li></ul> <p>Your popover should be non-modal when:</p> <ul><li>It is not scrollable.</li> <li>It contains only components that do not hold state (link, button).</li></ul> ",9),Q=n("ul",null,[n("li",null,"Smaller sized dialogs that trigger on user activation of an anchor element."),a(),n("li",null,"Dialogs that should be positioned relative to the anchor."),a(),n("li",null,"Dialogs that contain interactive components.")],-1),X=a("Content that is displayed on hover. Instead, use a "),Z=a("Tooltip"),aa=a("."),na=a(),sa=n("li",null,"Dialogs that should be positioned in the center of the screen.",-1),ta=a(),oa=n("li",null,"Dialogs that are very large.",-1),pa=a(),ea=n("li",null,"Alerts.",-1),la=a(),ca=n("h3",null,"Best practices",-1),ua=a(),ia=a("Popovers should be fairly small. If you are looking for more of a full size dialog solution see "),ra=a("Modal"),ka=a(),da=n("li",null,"Trigger using an anchor element, such as a button.",-1),ma=a(),ga=n("li",null,"Render the dialog at the body element.",-1),ha=a(),_a=n("li",null,"Focus the first interactive element within the dialog after it is opened.",-1),qa=a(),va=n("li",null,"Close the dialog when ESC is pressed.",-1),ba=a(),fa=n("li",null,"Close non-modal dialogs if they are scrolled out of visibility.",-1),xa=a(),ya=n("li",null,"Set the z-index of the dialog to var(--zi-modal-element) if modal, var(--zi-popover) if not.",-1),wa=a(),Ca=n("h2",{id:"variants-and-examples",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#variants-and-examples","aria-hidden":"true"},"#"),a(" Variants and examples")],-1),Ma=a(),La=n("h3",null,"Popover - Modal",-1),Aa=a(),Ba=m(` <div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-modal--transparent<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-popover<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>anchor1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-btn d-btn--primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-expanded</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-controls</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dialog1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-haspopup</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dialog<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Click Me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dialog1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-popover__dialog d-popover__dialog--modal d-ps-relative d-t4 d-w264<span class="token punctuation">&quot;</span></span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dialog<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-modal</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-labelledby</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>anchor1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-popover__content d-p16<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      This is content rendered within the popover.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-btn d-btn--primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3>Popover - Non Modal</h3> `,4),Pa=m(` <div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-popover<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>anchor2<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-btn d-btn--primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-expanded</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-controls</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dialog2<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-haspopup</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dialog<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Click Me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dialog2<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-popover__dialog d-ps-relative d-t4 d-w264<span class="token punctuation">&quot;</span></span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dialog<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-modal</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-labelledby</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>anchor2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-popover__content d-p16<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      This is content rendered within the popover.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-btn d-btn--primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3>With Header - Modal</h3> `,4),Ta=a(`
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur delectus distinctio id iure labore, maiores mollitia reprehenderit sunt tempore veritatis. Aliquam delectus earum ex, expedita ipsam nobis obcaecati quibusdam repudiandae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur delectus distinctio id iure labore, maiores mollitia reprehenderit sunt tempore veritatis. Aliquam delectus earum ex, expedita ipsam nobis obcaecati quibusdam repudiandae.`),Ea=n("br",null,null,-1),Ia=m(` <div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-modal--transparent<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-popover<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>anchor3<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-btn d-btn--primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-expanded</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-controls</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dialog3<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-haspopup</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dialog<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Click Me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dialog3<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-popover__dialog d-popover__dialog--modal d-ps-relative d-t4 d-w264 d-hmx164<span class="token punctuation">&quot;</span></span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dialog<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-modal</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-labelledby</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>anchor3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-popover__header d-px16<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-w100p<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        This is the header
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-popover__content d-p16<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur delectus distinctio id iure labore, maiores mollitia reprehenderit sunt tempore veritatis. Aliquam delectus earum ex, expedita ipsam nobis obcaecati quibusdam repudiandae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur delectus distinctio id iure labore, maiores mollitia reprehenderit sunt tempore veritatis. Aliquam delectus earum ex, expedita ipsam nobis obcaecati quibusdam repudiandae.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-btn d-btn--primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3>With Footer - Modal</h3> `,4),za=a(`
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur delectus distinctio id iure labore, maiores mollitia reprehenderit sunt tempore veritatis. Aliquam delectus earum ex, expedita ipsam nobis obcaecati quibusdam repudiandae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur delectus distinctio id iure labore, maiores mollitia reprehenderit sunt tempore veritatis. Aliquam delectus earum ex, expedita ipsam nobis obcaecati quibusdam repudiandae.`),Da=n("br",null,null,-1),Na=m(` <div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-modal--transparent<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-popover<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>anchor4<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-btn d-btn--primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-expanded</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-controls</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dialog4<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-haspopup</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dialog<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Click Me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dialog4<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-popover__dialog d-popover__dialog--modal d-ps-relative d-t4 d-w264 d-hmx164<span class="token punctuation">&quot;</span></span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dialog<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-modal</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-labelledby</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>anchor4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-popover__content d-p16<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur delectus distinctio id iure labore, maiores mollitia reprehenderit sunt tempore veritatis. Aliquam delectus earum ex, expedita ipsam nobis obcaecati quibusdam repudiandae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur delectus distinctio id iure labore, maiores mollitia reprehenderit sunt tempore veritatis. Aliquam delectus earum ex, expedita ipsam nobis obcaecati quibusdam repudiandae.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-btn d-btn--primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-popover__footer d-px16<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-w100p<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        This is the footer
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="classes" tabindex="-1"><a class="header-anchor" href="#classes" aria-hidden="true">#</a> Classes</h2> <p>Popover must contain an anchor and content element. d-modal--transparent can be used as a sibling before the popover container if you wish to make the popover modal.</p> `,6),Sa=a(),Va=n("h2",{id:"accessibility",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#accessibility","aria-hidden":"true"},"#"),a(" Accessibility")],-1),Fa=a(),$a=n("p",null,[a('If your popover is modal, please see the accessibility section of this page regarding "focus trapping": '),n("a",{href:"components/modal/#accessibility"},"Modal Accessibility"),a(". The same rules will apply here if your popover is modal.")],-1),Ra=a(),Ua={__name:"popover.html",setup(p){return(c,u)=>{const e=g("code-well-header"),o=g("RouterLink"),l=g("component-class-table"),i=g("component-accessible-table");return k(),d("div",null,[s(e,null,{default:t(()=>[s(r,{modal:""})]),_:1}),Y,j,H,n("p",null,[G,s(o,{to:"/components/modal.html"},{default:t(()=>[J]),_:1}),K]),O,s(x,null,{do:t(()=>[Q]),dont:t(()=>[n("ul",null,[n("li",null,[X,s(o,{to:"/components/tooltip.html"},{default:t(()=>[Z]),_:1}),aa]),na,sa,ta,oa,pa,ea])]),_:1}),la,ca,ua,n("ul",null,[n("li",null,[ia,s(o,{to:"/components/modal.html"},{default:t(()=>[ra]),_:1})]),ka,da,ma,ga,ha,_a,qa,va,ba,fa,xa,ya]),wa,Ca,Ma,La,Aa,s(e,null,{default:t(()=>[s(r,{modal:""})]),_:1}),Ba,s(e,null,{default:t(()=>[s(r)]),_:1}),Pa,s(e,null,{default:t(()=>[s(r,{modal:"",header:""},{content:t(()=>[Ta,Ea]),_:1})]),_:1}),Ia,s(e,null,{default:t(()=>[s(r,{modal:"",footer:""},{content:t(()=>[za,Da]),_:1})]),_:1}),Na,s(l,{"component-name":"popover"}),Sa,Va,Fa,$a,Ra,s(i,{"component-name":"popover"})])}}};var ja=_(Ua,[["__file","popover.html.vue"]]);export{ja as default};
