import{_ as r,o as h,c as u,b as e,t as f,a as t,n as m,F as v,r as g,e as l,w as n,f as x,d as b}from"./app.5e51e3f0.js";import{D as w}from"./DialtoneUsage.b170463a.js";const T={name:"ExampleToggle",props:{id:{type:String,default:"Dialtone-Toggle"},label:{type:String,default:""},checked:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},indeterminate:{type:Boolean,default:!1},size:{type:String,default:null}},data(){return{isChecked:this.checked,isIndeterminate:this.indeterminate}},computed:{toggleClasses(){return[{"d-toggle--checked":this.isChecked,"d-toggle--indeterminate":this.isIndeterminate,[`d-toggle--${this.size}`]:this.size}]},toggleRole(){return this.isIndeterminate?"checkbox":"switch"},toggleAriaChecked(){return this.isIndeterminate?"mixed":this.isChecked}},methods:{toggleState(){this.isIndeterminate=null,this.isChecked=!this.isChecked}}},k={class:"d-toggle-copy"},D=["for","textContent"],y={class:"d-toggle-button"},C=["id","aria-checked","disabled","role"],S=e("span",{class:"d-toggle__inner"},null,-1),z=[S];function A(_,c,a,i,s,d){return h(),u(v,null,[e("div",k,[e("label",{class:"d-toggle-label",for:a.id,textContent:f(a.label)},null,8,D)]),t(),e("div",y,[e("button",{id:a.id,class:m(["d-toggle",d.toggleClasses]),"aria-checked":d.toggleAriaChecked,disabled:a.disabled,type:"button",role:d.toggleRole,onClick:c[0]||(c[0]=(...p)=>d.toggleState&&d.toggleState(...p))},z,10,C)])],64)}const o=r(T,[["render",A],["__file","ExampleToggle.vue"]]),j={class:"d-toggle-group d-d-flex d-ai-center"},I=e("h2",{id:"usage",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#usage","aria-hidden":"true"},"#"),t(" Usage")],-1),N=e("ul",null,[e("li",null,"When its action has an instantaneous effect.")],-1),U=e("li",null,"When its action does not have an immediate effect on the application.",-1),B=e("h3",null,"Best practices",-1),q=b(`<ul><li>A Toggle component should be used as a control within an application and provide a way to toggle between two states like a household light switch.</li> <li>An <code>indeterminate</code> Toggle convey a &quot;mixed&quot; state that neither qualifies as toggled or not toggled. An example use case is when a Toggle acts as a &quot;parent&quot; of a collection of child Toggle components:
<ul><li>Toggled: all children are toggled.</li> <li>Not toggled: all children are not toggled.</li> <li><code>indeterminate</code>: children are a mix of toggled and not toggled.</li></ul></li></ul>`,1),V=e("h2",{id:"variants-and-examples",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#variants-and-examples","aria-hidden":"true"},"#"),t(" Variants and examples")],-1),W=e("h3",null,"Base Styles",-1),R={class:"d-stack8"},E={class:"d-toggle-group d-d-flex d-ai-center"},F={class:"d-toggle-group d-d-flex d-ai-center"},L={class:"d-toggle-group d-d-flex d-ai-center"},M={class:"d-toggle-group d-d-flex d-ai-center"},$={class:"d-toggle-group d-d-flex d-ai-center"},G=e("div",{class:"language-html","data-ext":"html"},[e("pre",{class:"language-html"},[e("code",null,`<fieldset class="d-stack8">
  <div class="d-toggle-group d-d-flex d-ai-center">
    <div class="d-toggle-copy">
      <label class="d-toggle-label" for="Dialtone-Toggle1">Unchecked Toggle</label>
    </div>
    <div class="d-toggle-button">
      <button class="d-toggle" type="button" role="switch" id="Dialtone-Toggle1" >
        <span class="d-toggle__inner" />
      </button>
    </div>
  </div>
  <div class="d-toggle-group d-d-flex d-ai-center">
    <div class="d-toggle-copy">
      <label class="d-toggle-label" for="Dialtone-Toggle2">Checked Toggle</label>
    </div>
    <div class="d-toggle-button">
      <button class="d-toggle d-toggle--checked" type="button" role="switch" id="Dialtone-Toggle2" >
        <span class="d-toggle__inner" />
      </button>
    </div>
  </div>
  <div class="d-toggle-group d-d-flex d-ai-center">
    <div class="d-toggle-copy">
      <label class="d-toggle-label" for="Dialtone-Toggle3">Unchecked Disabled</label>
    </div>
    <div class="d-toggle-button">
      <button class="d-toggle" type="button" role="switch" disabled id="Dialtone-Toggle3" >
        <span class="d-toggle__inner" />
      </button>
    </div>
  </div>
  <div class="d-toggle-group d-d-flex d-ai-center">
    <div class="d-toggle-copy">
      <label class="d-toggle-label" for="Dialtone-Toggle4">Checked Disabled</label>
    </div>
    <div class="d-toggle-button">
      <button class="d-toggle d-toggle--checked" type="button" role="switch" disabled id="Dialtone-Toggle4" >
        <span class="d-toggle__inner" />
      </button>
    </div>
  </div>
  <div class="d-toggle-group d-d-flex d-ai-center">
    <div class="d-toggle-copy">
      <label class="d-toggle-label" for="Dialtone-Toggle5">Indeterminate Toggle</label>
    </div>
    <div class="d-toggle-button">
      <button class="d-toggle d-toggle--indeterminate" type="button" role="checkbox" aria-checked="mixed" id="Dialtone-Toggle5">
        <span class="d-toggle__inner" />
      </button>
    </div>
  </div>
</fieldset>
`)])],-1),Z=e("h3",null,"Sizes",-1),H={class:"d-stack8"},K={class:"d-toggle-group d-d-flex d-ai-center"},P={class:"d-toggle-group d-d-flex d-ai-center"},J=e("div",{class:"language-html","data-ext":"html"},[e("pre",{class:"language-html"},[e("code",null,`<fieldset class="d-stack8">
  <div class="d-toggle-group d-d-flex d-ai-center">
    <div class="d-toggle-copy">
      <label class="d-toggle-label" for="Dialtone-Toggle6">Small size</label>
    </div>
    <div class="d-toggle-button">
      <button class="d-toggle d-toggle--small" type="button" role="switch" id="Dialtone-Toggle6" >
        <span class="d-toggle__inner" />
      </button>
    </div>
  </div>
  <div class="d-toggle-group d-d-flex d-ai-center">
    <div class="d-toggle-copy">
      <label class="d-toggle-label" for="Dialtone-Toggle7">Default size</label>
    </div>
    <div class="d-toggle-button">
      <button class="d-toggle" type="button" role="switch" id="Dialtone-Toggle7" >
        <span class="d-toggle__inner" />
      </button>
    </div>
  </div>
</fieldset>
`)])],-1),O=e("h3",null,"Stacked Group",-1),Q={class:"d-stack8 d-w50p"},X=e("legend",{class:"d-label d-fs-300"},"DND Settings",-1),Y={class:"d-toggle-wrapper d-d-flex d-fd-column"},ee=e("div",{class:"row d-d-flex d-ai-center d-jc-space-between d-mb12"},[e("h3",null,"Status"),t(),e("h3",{class:"d-mr4"},"DND")],-1),te={class:"row d-d-flex d-ai-center d-jc-space-between d-mb6"},le={class:"row d-d-flex d-ai-center d-jc-space-between d-mb6"},oe={class:"row d-d-flex d-ai-center d-jc-space-between d-mb6"},ne={class:"row d-d-flex d-ai-center d-jc-space-between d-mb6"},de=e("div",{class:"language-html","data-ext":"html"},[e("pre",{class:"language-html"},[e("code",null,`<fieldset class="d-stack8 d-w50p">
  <legend class="d-label d-fs-300">DND Settings</legend>
  <div class="d-toggle-wrapper d-d-flex d-fd-column">
    <div class="row d-d-flex d-ai-center d-jc-space-between d-mb12">
      <h3>Status</h3>
      <h3 class="d-mr4">DND</h3>
    </div>
    <div class="row d-d-flex d-ai-center d-jc-space-between d-mb6">
      <div class="d-toggle-copy">
        <label class="d-toggle-label" for="Dialtone-Toggle8">Acorn Tech</label>
      </div>
      <div class="d-toggle-button">
        <button class="d-toggle" type="button" role="switch" id="Dialtone-Toggle8" >
          <span class="d-toggle__inner" />
        </button>
      </div>
    </div>
    <div class="row d-d-flex d-ai-center d-jc-space-between d-mb6">
      <div class="d-toggle-copy">
        <label class="d-toggle-label" for="Dialtone-Toggle9">California Zoo</label>
      </div>
      <div class="d-toggle-button">
        <button class="d-toggle" type="button" role="switch" id="Dialtone-Toggle9" >
          <span class="d-toggle__inner" />
        </button>
      </div>
    </div>
    <div class="row d-d-flex d-ai-center d-jc-space-between d-mb6">
      <div class="d-toggle-copy">
        <label class="d-toggle-label" for="Dialtone-Toggle10">Montana Centre</label>
      </div>
      <div class="d-toggle-button">
        <button class="d-toggle" type="button" role="switch" id="Dialtone-Toggle10" >
          <span class="d-toggle__inner" />
        </button>
      </div>
    </div>
    <div class="row d-d-flex d-ai-center d-jc-space-between d-mb6">
      <div class="d-toggle-copy">
        <label class="d-toggle-label" for="Dialtone-Toggle11">Wilson Centre</label>
      </div>
      <div class="d-toggle-button">
        <button class="d-toggle" type="button" role="switch" id="Dialtone-Toggle11" >
          <span class="d-toggle__inner" />
        </button>
      </div>
    </div>
  </div>
</fieldset>
`)])],-1),se=e("h2",{id:"classes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#classes","aria-hidden":"true"},"#"),t(" Classes")],-1),ae=e("h2",{id:"accessibility",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#accessibility","aria-hidden":"true"},"#"),t(" Accessibility")],-1),ie=e("p",null,"The best accessibility is semantic HTML. Most screen readers understand how to parse buttons if they’re correctly formatted. When it comes to toggles, there are a few things to keep in mind:",-1),ce=b('<ul><li>All toggle buttons should have an <code>id</code> attribute.</li> <li>Associate toggle labels with their buttons using the <code>for</code> attribute. This correlates with the toggle&#39;s <code>id</code>.</li> <li>If you have a group of related toggles, use a <code>fieldset</code> to group them and a <code>legend</code> to title the group. For further information, please visit Gov.UK’s article, <a href="https://accessibility.blog.gov.uk/2016/07/22/using-the-fieldset-and-legend-elements" target="_blank" rel="noopener noreferrer">&quot;Using the fieldset and legend elements&quot;</a>.</li></ul>',1),ge={__name:"toggle.html",setup(_){return(c,a)=>{const i=g("code-well-header"),s=g("RouterLink"),d=g("component-class-table");return h(),u("div",null,[l(i,null,{default:n(()=>[e("div",j,[l(o,{label:"Label",id:"Dialtone-Toggle-Preview"})])]),_:1}),t(),x(' <component-combinator component-name="DtToggle" /> '),t(),I,t(),e("p",null,[t("The Toggle component acts as a way to allow the User to switch between two mutually exclusive options. While it technically mirrors a "),l(s,{to:"/components/checkbox.html"},{default:n(()=>[t("Checkbox")]),_:1}),t(" state, its effect on the system is immediate—much like a light switch immediately turns on or off the lights. In contrast, the checked state of a "),l(s,{to:"/components/checkbox.html"},{default:n(()=>[t("Checkbox")]),_:1}),t(" won't be applied until a separate action to confirm the selection is taken.")]),t(),l(w,null,{do:n(()=>[N]),dont:n(()=>[e("ul",null,[U,t(),e("li",null,[t("Selecting between 2 options. Instead, utilize a "),l(s,{to:"/components/checkbox.html"},{default:n(()=>[t("Checkbox")]),_:1}),t(".")]),t(),e("li",null,[t("As an alternative to a "),l(s,{to:"/components/checkbox.html"},{default:n(()=>[t("Checkbox")]),_:1}),t(" or "),l(s,{to:"/components/radio.html"},{default:n(()=>[t("Radio")]),_:1}),t(" within a Form.")])])]),_:1}),t(),B,t(),q,t(),V,t(),W,t(),l(i,null,{default:n(()=>[e("fieldset",R,[e("div",E,[l(o,{label:"Unchecked Toggle",id:"Dialtone-Toggle1"})]),t(),e("div",F,[l(o,{label:"Checked Toggle",checked:"",id:"Dialtone-Toggle2"})]),t(),e("div",L,[l(o,{label:"Unchecked Disabled",disabled:"",id:"Dialtone-Toggle3"})]),t(),e("div",M,[l(o,{label:"Checked Disabled",checked:"",disabled:"",id:"Dialtone-Toggle4"})]),t(),e("div",$,[l(o,{label:"Indeterminate Toggle",indeterminate:"",id:"Dialtone-Toggle5"})])])]),_:1}),t(),G,Z,t(),l(i,null,{default:n(()=>[e("fieldset",H,[e("div",K,[l(o,{label:"Small size",size:"small",id:"Dialtone-Toggle6"})]),t(),e("div",P,[l(o,{label:"Default size",id:"Dialtone-Toggle7"})])])]),_:1}),t(),J,O,t(),l(i,null,{default:n(()=>[e("fieldset",Q,[X,t(),e("div",Y,[ee,t(),e("div",te,[l(o,{label:"Acorn Test",id:"Dialtone-Toggle8"})]),t(),e("div",le,[l(o,{label:"California Zoo",id:"Dialtone-Toggle9"})]),t(),e("div",oe,[l(o,{label:"Montana Centre",id:"Dialtone-Toggle10"})]),t(),e("div",ne,[l(o,{label:"Wilson Centre",id:"Dialtone-Toggle11"})])])])]),_:1}),t(),de,se,t(),l(d,{"component-name":"toggle"}),ae,t(),ie,t(),ce])}}},ue=r(ge,[["__file","toggle.html.vue"]]);export{ue as default};
