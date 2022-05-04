import{_ as u,o as r,a as b,b as t,t as p,n as v,F as h,r as c,d as e,w as i,e as d,c as f}from"./app.935ad005.js";const m={name:"example-toggle",data(){return{isChecked:this.checked}},props:{label:{type:String,default:""},checked:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},methods:{toggleState(){this.isChecked=!this.isChecked}}},w={class:"d-toggle-copy d-mr6"},x=["textContent"],k={class:"d-toggle-button"},y=["aria-checked","disabled"],D=t("span",{class:"d-toggle__inner"},null,-1),T=[D];function C(_,s,a,n,o,g){return r(),b(h,null,[t("div",w,[t("label",{class:"d-toggle-label",for:"Dialtone-Toggle1",textContent:p(a.label)},null,8,x)]),t("div",k,[t("button",{class:v(["d-toggle",{"d-toggle--checked":o.isChecked}]),"aria-checked":o.isChecked,disabled:a.disabled,type:"button",role:"switch",id:"Dialtone-Toggle1",onClick:s[0]||(s[0]=(...q)=>g.toggleState&&g.toggleState(...q))},T,10,y)])],64)}var l=u(m,[["render",C],["__file","ExampleToggle.vue"]]);const S=t("h2",{id:"classes",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#classes","aria-hidden":"true"},"#"),d(" Classes")],-1),j=t("h2",{id:"examples",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#examples","aria-hidden":"true"},"#"),d(" Examples")],-1),N=t("h3",{id:"base-styles",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#base-styles","aria-hidden":"true"},"#"),d(" Base Styles")],-1),B={class:"d-stack8"},U={class:"d-toggle-group d-d-flex d-ai-center"},A={class:"d-toggle-group d-d-flex d-ai-center"},$={class:"d-toggle-group d-d-flex d-ai-center"},E={class:"d-toggle-group d-d-flex d-ai-center"},M=t("div",{class:"language-html ext-html"},[t("pre",{class:"language-html"},[t("code",null,`<fieldset class="d-stack8">
  <div class="d-toggle-group d-d-flex d-ai-center">
    <div class="d-toggle-copy d-mr6">
      <label class="d-toggle-label" for="Dialtone-Toggle1">Unchecked Toggle</label>
    </div>
    <div class="d-toggle-button">
      <button class="d-toggle" type="button" role="switch" id="Dialtone-Toggle1" >
        <span class="d-toggle__inner" />
      </button>
    </div>
  </div>
  <div class="d-toggle-group d-d-flex d-ai-center">
    <div class="d-toggle-copy d-mr6">
      <label class="d-toggle-label" for="Dialtone-Toggle2">Checked Toggle</label>
    </div>
    <div class="d-toggle-button">
      <button class="d-toggle d-toggle--checked" type="button" role="switch" id="Dialtone-Toggle2" >
        <span class="d-toggle__inner" />
      </button>
    </div>
  </div>
  <div class="d-toggle-group d-d-flex d-ai-center">
    <div class="d-toggle-copy d-mr6">
      <label class="d-toggle-label" for="Dialtone-Toggle3">Unchecked Disabled</label>
    </div>
    <div class="d-toggle-button">
      <button class="d-toggle" type="button" role="switch" disabled id="Dialtone-Toggle3" >
        <span class="d-toggle__inner" />
      </button>
    </div>
  </div>
  <div class="d-toggle-group d-d-flex d-ai-center">
    <div class="d-toggle-copy d-mr6">
      <label class="d-toggle-label" for="Dialtone-Toggle4">Checked Disabled</label>
    </div>
    <div class="d-toggle-button">
      <button class="d-toggle d-toggle--checked" type="button" role="switch" disabled id="Dialtone-Toggle4" >
        <span class="d-toggle__inner" />
      </button>
    </div>
  </div>
</fieldset>
`)])],-1),V=t("h3",{id:"stacked-group",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#stacked-group","aria-hidden":"true"},"#"),d(" Stacked Group")],-1),F={class:"d-stack8 d-w50p"},W=t("legend",{class:"d-label d-fs20"},"DND Settings",-1),G={class:"d-toggle-wrapper d-d-flex d-fd-column"},Z=t("div",{class:"row d-d-flex d-ai-center d-jc-space-between d-mb12"},[t("h3",null,"Status"),t("h3",{class:"d-mr4"},"DND")],-1),z={class:"row d-d-flex d-ai-center d-jc-space-between d-mb6"},H={class:"row d-d-flex d-ai-center d-jc-space-between d-mb6"},I={class:"row d-d-flex d-ai-center d-jc-space-between d-mb6"},K={class:"row d-d-flex d-ai-center d-jc-space-between d-mb6"},L=f(`<div class="language-html ext-html"><pre class="language-html"><code>&lt;fieldset class=&quot;d-stack8 d-w50p&quot;&gt;
  &lt;legend class=&quot;d-label d-fs20&quot;&gt;DND Settings&lt;/legend&gt;
  &lt;div class=&quot;d-toggle-wrapper d-d-flex d-fd-column&quot;&gt;
    &lt;div class=&quot;row d-d-flex d-ai-center d-jc-space-between d-mb12&quot;&gt;
      &lt;h3&gt;Status&lt;/h3&gt;
      &lt;h3 class=&quot;d-mr4&quot;&gt;DND&lt;/h3&gt;
    &lt;/div&gt;
    &lt;div class=&quot;row d-d-flex d-ai-center d-jc-space-between d-mb6&quot;&gt;
      &lt;div class=&quot;d-toggle-copy d-mr6&quot;&gt;
        &lt;label class=&quot;d-toggle-label&quot; for=&quot;Dialtone-Toggle5&quot;&gt;Acorn Tech&lt;/label&gt;
      &lt;/div&gt;
      &lt;div class=&quot;d-toggle-button&quot;&gt;
        &lt;button class=&quot;d-toggle&quot; type=&quot;button&quot; role=&quot;switch&quot; id=&quot;Dialtone-Toggle5&quot; &gt;
          &lt;span class=&quot;d-toggle__inner&quot; /&gt;
        &lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;row d-d-flex d-ai-center d-jc-space-between d-mb6&quot;&gt;
      &lt;div class=&quot;d-toggle-copy d-mr6&quot;&gt;
        &lt;label class=&quot;d-toggle-label&quot; for=&quot;Dialtone-Toggle5&quot;&gt;California Zoo&lt;/label&gt;
      &lt;/div&gt;
      &lt;div class=&quot;d-toggle-button&quot;&gt;
        &lt;button class=&quot;d-toggle&quot; type=&quot;button&quot; role=&quot;switch&quot; id=&quot;Dialtone-Toggle5&quot; &gt;
          &lt;span class=&quot;d-toggle__inner&quot; /&gt;
        &lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;row d-d-flex d-ai-center d-jc-space-between d-mb6&quot;&gt;
      &lt;div class=&quot;d-toggle-copy d-mr6&quot;&gt;
        &lt;label class=&quot;d-toggle-label&quot; for=&quot;Dialtone-Toggle5&quot;&gt;Montana Centre&lt;/label&gt;
      &lt;/div&gt;
      &lt;div class=&quot;d-toggle-button&quot;&gt;
        &lt;button class=&quot;d-toggle&quot; type=&quot;button&quot; role=&quot;switch&quot; id=&quot;Dialtone-Toggle5&quot; &gt;
          &lt;span class=&quot;d-toggle__inner&quot; /&gt;
        &lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;row d-d-flex d-ai-center d-jc-space-between d-mb6&quot;&gt;
      &lt;div class=&quot;d-toggle-copy d-mr6&quot;&gt;
        &lt;label class=&quot;d-toggle-label&quot; for=&quot;Dialtone-Toggle5&quot;&gt;Wilson Centre&lt;/label&gt;
      &lt;/div&gt;
      &lt;div class=&quot;d-toggle-button&quot;&gt;
        &lt;button class=&quot;d-toggle&quot; type=&quot;button&quot; role=&quot;switch&quot; id=&quot;Dialtone-Toggle5&quot; &gt;
          &lt;span class=&quot;d-toggle__inner&quot; /&gt;
        &lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/fieldset&gt;
</code></pre></div><h2 id="accessibility" tabindex="-1"><a class="header-anchor" href="#accessibility" aria-hidden="true">#</a> Accessibility</h2><p>The best accessibility is semantic HTML. Most screen readers understand how to parse buttons if they\u2019re correctly formatted. When it comes to toggles, there are a few things to keep in mind:</p><ul><li>All toggle buttons should have an <code>id</code> attribute.</li><li>Associate toggle labels with their buttons using the <code>for</code> attribute. This correlates with the toggle&#39;s <code>id</code>.</li><li>If you have a group of related toggles, use a <code>fieldset</code> to group them and a <code>legend</code> to title the group. For further information, please visit Gov.UK\u2019s article, <a class="d-link" href="https://accessibility.blog.gov.uk/2016/07/22/using-the-fieldset-and-legend-elements/">Using the fieldset and legend elements</a>.</li></ul>`,4),J={setup(_){return(s,a)=>{const n=c("component-class-table"),o=c("code-well-header");return r(),b(h,null,[S,e(n,{"component-name":"toggle"}),j,N,e(o,null,{default:i(()=>[t("fieldset",B,[t("div",U,[e(l,{label:"Unchecked Toggle"})]),t("div",A,[e(l,{label:"Checked Toggle",checked:""})]),t("div",$,[e(l,{label:"Unchecked Disabled",disabled:""})]),t("div",E,[e(l,{label:"Checked Disabled",checked:"",disabled:""})])])]),_:1}),M,V,e(o,null,{default:i(()=>[t("fieldset",F,[W,t("div",G,[Z,t("div",z,[e(l,{label:"Acorn Test"})]),t("div",H,[e(l,{label:"California Zoo"})]),t("div",I,[e(l,{label:"Montana Centre"})]),t("div",K,[e(l,{label:"Wilson Centre"})])])])]),_:1}),L],64)}}};var P=u(J,[["__file","toggle.html.vue"]]);export{P as default};
