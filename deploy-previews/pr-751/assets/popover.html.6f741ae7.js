import{_ as q,o as k,c as d,B as v,f as h,a,b as n,n as _,h as b,F as f,r as m,d as s,w as t,e as g}from"./app.9f3c399a.js";import{D as x}from"./DialtoneUsage.f38036f6.js";const y={name:"ExamplePopover",props:{modal:{type:Boolean,default:!1},header:{type:Boolean,default:!1},footer:{type:Boolean,default:!1}},data(){return{shown:!1}},mounted(){window.addEventListener("keyup",o=>{o.key==="Escape"&&this.closeModal()})},beforeUnmount(){window.removeEventListener("keyup",o=>{o.key==="Escape"&&this.closeModal()})},methods:{closeModal(){document.body.classList.remove("d-of-hidden"),this.shown=!1},openModal(){this.modal&&document.body.classList.add("d-of-hidden"),this.shown=!0},togglePopover(){this.shown?this.closeModal():this.openModal()}}},w=["aria-hidden"],C={class:"d-popover d-fl-center d-fd-column d-p24 d-w100p d-of-auto"},M=["aria-expanded"],B=["aria-modal","aria-hidden"],L={key:0,class:"d-popover__header d-px16"},A=n("div",{class:"d-w100p"},`
          This is the header
        `,-1),P=[A],T={class:"d-popover__content d-p16"},E=n("br",null,null,-1),I=n("button",{class:"d-btn d-btn--primary"},`
          Button
        `,-1),$={key:1,class:"d-popover__footer d-px16"},z=n("div",{class:"d-w100p"},`
          This is the footer
        `,-1),D=[z];function N(o,c,u,e,p,l){return k(),d(f,null,[u.modal?(k(),d("div",{key:0,class:"d-modal--transparent","aria-hidden":!p.shown,onClick:c[0]||(c[0]=v((...i)=>l.closeModal&&l.closeModal(...i),["self"]))},null,8,w)):h("",!0),a(),n("div",C,[n("button",{id:"anchor1",class:"d-btn d-btn--primary","aria-expanded":!p.shown,"aria-controls":"dialog1","aria-haspopup":"dialog",onClick:c[1]||(c[1]=(...i)=>l.togglePopover&&l.togglePopover(...i))},`
      Click Me
    `,8,M),a(),n("div",{id:"dialog1",class:_(["d-popover__dialog d-popover__dialog--modal d-ps-relative d-t4 d-w264 d-hmx164",p.shown?"d-vi-visible":"d-vi-hidden"]),role:"dialog","aria-modal":u.modal,"aria-hidden":p.shown,"aria-labelledby":"anchor1"},[u.header?(k(),d("div",L,P)):h("",!0),a(),n("div",T,[b(o.$slots,"content",{},()=>[a(`
          This is content rendered within the popover.`),E]),a(),I]),a(),u.footer?(k(),d("div",$,D)):h("",!0)],10,B)])],64)}var r=q(y,[["render",N],["__file","ExamplePopover.vue"]]);const S=n("h2",{id:"usage",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#usage","aria-hidden":"true"},"#"),a(" Usage")],-1),V=n("p",null,"Your popover should be modal when:",-1),F=n("ul",null,[n("li",null,"It contains scrollable content."),a(),n("li",null,"It contains components that hold user input state (input, checkbox).")],-1),R=n("p",null,"Your popover should be non-modal when:",-1),U=n("ul",null,[n("li",null,"It is not scrollable."),a(),n("li",null,"It contains only components that do not hold state (link, button).")],-1),W=n("ul",null,[n("li",null,"Smaller sized dialogs that trigger on user activation of an anchor element."),a(),n("li",null,"Dialogs that should be positioned relative to the anchor."),a(),n("li",null,"Dialogs that contain interactive components.")],-1),Y=n("li",null,"Dialogs that should be positioned in the center of the screen.",-1),j=n("li",null,"Dialogs that are very large.",-1),H=n("li",null,"Alerts.",-1),G=n("h3",null,"Best practices",-1),J=n("li",null,"Trigger using an anchor element, such as a button.",-1),K=n("li",null,"Render the dialog at the body element.",-1),O=n("li",null,"Focus the first interactive element within the dialog after it is opened.",-1),Q=n("li",null,"Close the dialog when ESC is pressed.",-1),X=n("li",null,"Close non-modal dialogs if they are scrolled out of visibility.",-1),Z=n("li",null,"Set the z-index of the dialog to var(--zi-modal-element) if modal, var(--zi-popover) if not.",-1),aa=n("h2",{id:"variants-and-examples",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#variants-and-examples","aria-hidden":"true"},"#"),a(" Variants and examples")],-1),na=n("h3",null,"Popover - Modal",-1),sa=g(`<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-modal--transparent<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-popover<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>anchor1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-btn d-btn--primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-expanded</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-controls</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dialog1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-haspopup</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dialog<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Click Me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dialog1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-popover__dialog d-popover__dialog--modal d-ps-relative d-t4 d-w264<span class="token punctuation">&quot;</span></span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dialog<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-modal</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-labelledby</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>anchor1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-popover__content d-p16<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      This is content rendered within the popover.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-btn d-btn--primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3>Popover - Non Modal</h3>`,2),ta=g(`<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-popover<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>anchor2<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-btn d-btn--primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-expanded</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-controls</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dialog2<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-haspopup</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dialog<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Click Me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dialog2<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-popover__dialog d-ps-relative d-t4 d-w264<span class="token punctuation">&quot;</span></span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dialog<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-modal</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-labelledby</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>anchor2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-popover__content d-p16<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      This is content rendered within the popover.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-btn d-btn--primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3>With Header - Modal</h3>`,2),pa=n("br",null,null,-1),oa=g(`<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-modal--transparent<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
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
</code></pre></div><h3>With Footer - Modal</h3>`,2),ea=n("br",null,null,-1),la=g(`<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-modal--transparent<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
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
</code></pre></div><h2 id="classes" tabindex="-1"><a class="header-anchor" href="#classes" aria-hidden="true">#</a> Classes</h2>`,2),ca=n("p",null,"Popover must contain an anchor and content element. d-modal--transparent can be used as a sibling before the popover container if you wish to make the popover modal.",-1),ua=n("h2",{id:"accessibility",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#accessibility","aria-hidden":"true"},"#"),a(" Accessibility")],-1),ia=n("p",null,[a('If your popover is modal, please see the accessibility section of this page regarding "focus trapping": '),n("a",{href:"components/modal/#accessibility"},"Modal Accessibility"),a(". The same rules will apply here if your popover is modal.")],-1),ra={__name:"popover.html",setup(o){return(c,u)=>{const e=m("code-well-header"),p=m("RouterLink"),l=m("component-class-table"),i=m("component-accessible-table");return k(),d("div",null,[s(e,null,{default:t(()=>[s(r,{modal:""})]),_:1}),a(),S,a(),n("p",null,[a(`A Popover contains a dialog that will appear above other content when activated. It will always appear in a location relative to the anchor.
If you are looking for a dialog that does not display relative to the anchor, see `),s(p,{to:"/components/modal.html"},{default:t(()=>[a("Modal")]),_:1}),a(`.
Some common examples of popover usage: dropdown list, emoji picker dialog, add comment dialog.
A popover can be modal or non-modal. Below are some guidelines on when to use a modal vs non-modal popover.`)]),a(),V,a(),F,a(),R,a(),U,a(),s(x,null,{do:t(()=>[W]),dont:t(()=>[n("ul",null,[n("li",null,[a("Content that is displayed on hover. Instead, use a "),s(p,{to:"/components/tooltip.html"},{default:t(()=>[a("Tooltip")]),_:1}),a(".")]),a(),Y,a(),j,a(),H])]),_:1}),a(),G,a(),n("ul",null,[n("li",null,[a("Popovers should be fairly small. If you are looking for more of a full size dialog solution see "),s(p,{to:"/components/modal.html"},{default:t(()=>[a("Modal")]),_:1})]),a(),J,a(),K,a(),O,a(),Q,a(),X,a(),Z]),a(),aa,a(),na,a(),s(e,null,{default:t(()=>[s(r,{modal:""})]),_:1}),a(),sa,a(),s(e,null,{default:t(()=>[s(r)]),_:1}),a(),ta,a(),s(e,null,{default:t(()=>[s(r,{modal:"",header:""},{content:t(()=>[a(`
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur delectus distinctio id iure labore, maiores mollitia reprehenderit sunt tempore veritatis. Aliquam delectus earum ex, expedita ipsam nobis obcaecati quibusdam repudiandae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur delectus distinctio id iure labore, maiores mollitia reprehenderit sunt tempore veritatis. Aliquam delectus earum ex, expedita ipsam nobis obcaecati quibusdam repudiandae.`),pa]),_:1})]),_:1}),a(),oa,a(),s(e,null,{default:t(()=>[s(r,{modal:"",footer:""},{content:t(()=>[a(`
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur delectus distinctio id iure labore, maiores mollitia reprehenderit sunt tempore veritatis. Aliquam delectus earum ex, expedita ipsam nobis obcaecati quibusdam repudiandae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur delectus distinctio id iure labore, maiores mollitia reprehenderit sunt tempore veritatis. Aliquam delectus earum ex, expedita ipsam nobis obcaecati quibusdam repudiandae.`),ea]),_:1})]),_:1}),a(),la,a(),ca,a(),s(l,{"component-name":"popover"}),a(),ua,a(),ia,a(),s(i,{"component-name":"popover"})])}}};var ma=q(ra,[["__file","popover.html.vue"]]);export{ma as default};
