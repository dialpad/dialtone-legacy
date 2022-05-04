import{_ as n,r as a,a as d,d as t,w as i,F as c,b as e,e as l,c as p,o as v}from"./app.935ad005.js";const u={},r=e("h2",{id:"classes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#classes","aria-hidden":"true"},"#"),l(" Classes")],-1),_=e("h2",{id:"examples",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#examples","aria-hidden":"true"},"#"),l(" Examples")],-1),h=e("h3",{id:"base-styles",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#base-styles","aria-hidden":"true"},"#"),l(" Base Styles")],-1),b=e("p",null,"A select is normally paired with a label, but there are times when it can be used without a label. Don't rely on the placeholder text as a label.",-1),g=e("div",{class:"d-stack24 d-w100p"},[e("div",null,[e("div",{class:"d-label"},[e("label",{for:"Dialtone--SelectExample1"},"Label")]),e("div",{class:"d-select"},[e("select",{class:"d-select__input",id:"Dialtone--SelectExample1"},[e("option",{value:"",selected:""},"Please select one"),e("option",{value:"option1"},"Option 1"),e("option",{value:"option2"},"Option 2"),e("option",{value:"option3"},"Option 3")])])]),e("div",null,[e("div",{class:"d-label"},[e("label",{for:"Dialtone--SelectExample2"},"Label")]),e("div",{class:"d-select d-select--disabled"},[e("select",{class:"d-select__input",id:"Dialtone--SelectExample2",disabled:""},[e("option",{value:"",selected:""},"Please select one"),e("option",{value:"option1"},"Option 1"),e("option",{value:"option2"},"Option 2"),e("option",{value:"option3"},"Option 3")])])])],-1),m=e("div",{class:"language-html ext-html"},[e("pre",{class:"language-html"},[e("code",null,`<div>
  <div class="d-label">
    <label for="Dialtone--SelectExample1">...</label>
  </div>
  <div class="d-select">
    <select class="d-select__input" id="Dialtone--SelectExample1">
      <option value="" selected>...</option>
      <option value="...">...</option>
      <option value="...">...</option>
      <option value="...">...</option>
    </select>
  </div>
</div>
<div>
  <div class="d-label">
    <label for="Dialtone--SelectExample2">...</label>
  </div>
  <div class="d-select d-select--disabled">
    <select class="d-select__input" id="Dialtone--SelectExample2" disabled>
      <option value="" selected>...</option>
      <option value="...">...</option>
      <option value="...">...</option>
      <option value="...">...</option>
    </select>
  </div>
</div>
`)])],-1),x=e("h3",{id:"with-description-text",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#with-description-text","aria-hidden":"true"},"#"),l(" With Description Text")],-1),f=e("div",{class:"d-w100p"},[e("div",{class:"d-label"},[e("label",{for:"Dialtone--SelectExample3"},"Label")]),e("div",{class:"d-description"},[e("span",null,"Optional description text")]),e("div",{class:"d-select"},[e("select",{class:"d-select__input",id:"Dialtone--SelectExample3"},[e("option",{value:"",selected:""},"Please select one"),e("option",{value:"option1"},"Option 1"),e("option",{value:"option2"},"Option 2"),e("option",{value:"option3"},"Option 3")])])],-1),O=e("div",{class:"language-html ext-html"},[e("pre",{class:"language-html"},[e("code",null,`<div class="d-label">...</div>
<div class="d-description">...</div>
<div class="d-select">
  <select class="d-select__input" id="Dialtone--SelectExample3">...</select>
</div>
`)])],-1),q=e("h3",{id:"with-validation-states",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#with-validation-states","aria-hidden":"true"},"#"),l(" With Validation States")],-1),S=e("p",null,"Provides feedback to the user based on their interaction, or lack thereof, with a select.",-1),E=e("div",{class:"d-stack24 d-w100p"},[e("div",null,[e("div",{class:"d-label"},[e("label",{for:"Dialtone--SelectExample4"},"Label")]),e("div",{class:"d-select"},[e("select",{class:"d-select__input d-select__input--error",id:"Dialtone--SelectExample4"},[e("option",{value:"",selected:""},"Please select one"),e("option",{value:"option1"},"Option 1"),e("option",{value:"option2"},"Option 2"),e("option",{value:"option3"},"Option 3")])]),e("div",{class:"d-validation-message d-validation-message--error"},[e("span",null,"Error validation message")])]),e("div",null,[e("div",{class:"d-label"},[e("label",{for:"Dialtone--SelectExample5"},"Label")]),e("div",{class:"d-select"},[e("select",{class:"d-select__input d-select__input--success",id:"Dialtone--SelectExample5"},[e("option",{value:"",selected:""},"Please select one"),e("option",{value:"option1"},"Option 1"),e("option",{value:"option2"},"Option 2"),e("option",{value:"option3"},"Option 3")])]),e("div",{class:"d-validation-message d-validation-message--success"},[e("span",null,"Success validation message")])]),e("div",null,[e("div",{class:"d-label"},[e("label",{for:"Dialtone--SelectExample6"},"Label")]),e("div",{class:"d-select"},[e("select",{class:"d-select__input d-select__input--warning",id:"Dialtone--SelectExample6"},[e("option",{value:"",selected:""},"Please select one"),e("option",{value:"option1"},"Option 1"),e("option",{value:"option2"},"Option 2"),e("option",{value:"option3"},"Option 3")])]),e("div",{class:"d-validation-message d-validation-message--warning"},[e("span",null,"Warning validation message")])])],-1),D=e("div",{class:"language-html ext-html"},[e("pre",{class:"language-html"},[e("code",null,`<div>
  <div class="d-label">...</div>
  <div class="d-select">
    <select class="d-select__input d-select__input--error">...</select>
  </div>
  <div class="d-validation-message d-validation-message--error">...</div>
</div>
<div>
  <div class="d-label">...</div>
  <div class="d-select">
    <select class="d-select__input d-select__input--success">...</select>
  </div>
  <div class="d-validation-message d-validation-message--success">...</div>
</div>
<div>
  <div class="d-label">...</div>
  <div class="d-select">
    <select class="d-select__input d-select__input--warning">...</select>
  </div>
  <div class="d-validation-message d-validation-message--warning">...</div>
</div>
`)])],-1),w=e("h3",{id:"sizes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#sizes","aria-hidden":"true"},"#"),l(" Sizes")],-1),y=e("p",null,"We offer different sizes for instances in which the interface requires a smaller or larger select. In general, though, use the base (medium) size select as much as possible, especially in forms.",-1),L=e("div",{class:"d-stack24 d-w100p"},[e("div",null,[e("div",{class:"d-label d-label--xs"},[e("label",{for:"Dialtone--SelectExample7"},"Label")]),e("div",{class:"d-select d-select--xs"},[e("select",{class:"d-select__input",id:"Dialtone--SelectExample7"},[e("option",{value:"",selected:""},"Please select one"),e("option",{value:"option1"},"Option 1"),e("option",{value:"option2"},"Option 2"),e("option",{value:"option3"},"Option 3")])])]),e("div",null,[e("div",{class:"d-label d-label--sm"},[e("label",{for:"Dialtone--SelectExample8"},"Label")]),e("div",{class:"d-select d-select--sm"},[e("select",{class:"d-select__input",id:"Dialtone--SelectExample8"},[e("option",{value:"",selected:""},"Please select one"),e("option",{value:"option1"},"Option 1"),e("option",{value:"option2"},"Option 2"),e("option",{value:"option3"},"Option 3")])])]),e("div",null,[e("div",{class:"d-label"},[e("label",{for:"Dialtone--SelectExample9"},"Label")]),e("div",{class:"d-select"},[e("select",{class:"d-select__input",id:"Dialtone--SelectExample9"},[e("option",{value:"",selected:""},"Please select one"),e("option",{value:"option1"},"Option 1"),e("option",{value:"option2"},"Option 2"),e("option",{value:"option3"},"Option 3")])])]),e("div",null,[e("div",{class:"d-label d-label--lg"},[e("label",{for:"Dialtone--SelectExample10"},"Label")]),e("div",{class:"d-select d-select--lg"},[e("select",{class:"d-select__input",id:"Dialtone--SelectExample10"},[e("option",{value:"",selected:""},"Please select one"),e("option",{value:"option1"},"Option 1"),e("option",{value:"option2"},"Option 2"),e("option",{value:"option3"},"Option 3")])])]),e("div",null,[e("div",{class:"d-label d-label--xl"},[e("label",{for:"Dialtone--SelectExample11"},"Label")]),e("div",{class:"d-select d-select--xl"},[e("select",{class:"d-select__input",id:"Dialtone--SelectExample11"},[e("option",{value:"",selected:""},"Please select one"),e("option",{value:"option1"},"Option 1"),e("option",{value:"option2"},"Option 2"),e("option",{value:"option3"},"Option 3")])])])],-1),P=p(`<div class="language-html ext-html"><pre class="language-html"><code>&lt;div&gt;
  &lt;div class=&quot;d-label d-label--xs&quot;&gt;...&lt;/div&gt;
  &lt;div class=&quot;d-select d-select--xs&quot;&gt;
    &lt;select class=&quot;d-select__input&quot;&gt;...&lt;/select&gt;
  &lt;/div&gt;
&lt;/div&gt;
&lt;div&gt;
  &lt;div class=&quot;d-label d-label--sm&quot;&gt;...&lt;/div&gt;
  &lt;div class=&quot;d-select d-select--sm&quot;&gt;
    &lt;select class=&quot;d-select__input&quot;&gt;...&lt;/select&gt;
  &lt;/div&gt;
&lt;/div&gt;
&lt;div&gt;
  &lt;div class=&quot;d-label&quot;&gt;...&lt;/div&gt;
  &lt;div class=&quot;d-select&quot;&gt;
    &lt;select class=&quot;d-select__input&quot;&gt;...&lt;/select&gt;
  &lt;/div&gt;
&lt;/div&gt;
&lt;div&gt;
  &lt;div class=&quot;d-label d-label--lg&quot;&gt;...&lt;/div&gt;
  &lt;div class=&quot;d-select d-select--lg&quot;&gt;
    &lt;select class=&quot;d-select__input&quot;&gt;...&lt;/select&gt;
  &lt;/div&gt;
&lt;/div&gt;
&lt;div&gt;
  &lt;div class=&quot;d-label d-label--xl&quot;&gt;...&lt;/div&gt;
  &lt;div class=&quot;d-select d-select--xl&quot;&gt;
    &lt;select class=&quot;d-select__input&quot;&gt;...&lt;/select&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre></div><h2 id="accessibility" tabindex="-1"><a class="header-anchor" href="#accessibility" aria-hidden="true">#</a> Accessibility</h2><ul><li>Make sure the <code>label</code> <code>for</code> attribute match the select <code>id</code>.</li><li>Avoiding removing <code>labels</code>. Labelled selects are user-friendly.</li><li>Avoid relying on placeholder text as a substitute for a label.</li><li>Avoid customizing the placeholder text.</li><li>If the select is a required field, use the <code>aria-required</code> property and use the validation message for input errors.</li><li>Select with validation errors should have <code>aria-describedby</code> with the <code>id</code> of the validation message.</li></ul>`,3);function k(z,A){const o=a("component-class-table"),s=a("code-well-header");return v(),d(c,null,[r,t(o,{"component-name":"select"}),_,h,b,t(s,null,{default:i(()=>[g]),_:1}),m,x,t(s,null,{default:i(()=>[f]),_:1}),O,q,S,t(s,null,{default:i(()=>[E]),_:1}),D,w,y,t(s,null,{default:i(()=>[L]),_:1}),P],64)}var B=n(u,[["render",k],["__file","select.html.vue"]]);export{B as default};
