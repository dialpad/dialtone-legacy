import{_ as t,r as l,a as n,d as i,w as e,F as r,b as a,e as d,c,o as p}from"./app.935ad005.js";const u={},_=a("h2",{id:"classes",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#classes","aria-hidden":"true"},"#"),d(" Classes")],-1),v=a("h2",{id:"examples",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#examples","aria-hidden":"true"},"#"),d(" Examples")],-1),m=a("h3",{id:"base-styles",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#base-styles","aria-hidden":"true"},"#"),d(" Base Styles")],-1),b=a("fieldset",{class:"d-stack8"},[a("div",{class:"d-radio-group"},[a("div",{class:"d-radio__input"},[a("input",{class:"d-radio",type:"radio",name:"Dialtone-RadioGroup1",id:"Dialtone-RadioExample1"})]),a("div",{class:"d-radio__copy"},[a("label",{class:"d-radio__label",for:"Dialtone-RadioExample1"},"Radio label")])]),a("div",{class:"d-radio-group"},[a("div",{class:"d-radio__input"},[a("input",{class:"d-radio",type:"radio",name:"Dialtone-RadioGroup1",id:"Dialtone-RadioExample2",checked:""})]),a("div",{class:"d-radio__copy"},[a("label",{class:"d-radio__label",for:"Dialtone-RadioExample2"},"Radio label")])]),a("div",{class:"d-radio-group d-radio-group--disabled"},[a("div",{class:"d-radio__input"},[a("input",{class:"d-radio",type:"radio",name:"Dialtone-RadioGroup1",id:"Dialtone-RadioExample3",disabled:""})]),a("div",{class:"d-radio__copy"},[a("label",{class:"d-radio__label",for:"Dialtone-RadioExample3"},"Radio label that's been disabled")])]),a("div",{class:"d-radio-group d-radio-group--disabled"},[a("div",{class:"d-radio__input"},[a("input",{class:"d-radio",type:"radio",name:"Dialtone-RadioGroup1",id:"Dialtone-RadioExample4",disabled:"",checked:""})]),a("div",{class:"d-radio__copy"},[a("label",{class:"d-radio__label",for:"Dialtone-RadioExample4"},"Radio label that's been disabled")])]),a("div",{class:"d-radio-group d-radio-group--disabled"},[a("div",{class:"d-radio__input"},[a("input",{class:"d-radio d-radio--disabled",type:"radio",name:"Dialtone-RadioGroup1",id:"Dialtone-RadioExample5"})]),a("div",{class:"d-radio__copy"},[a("label",{class:"d-radio__label",for:"Dialtone-RadioExample5"},"Radio label that's been disabled (but without the `disabled` attribute)")])])],-1),g=a("div",{class:"language-html ext-html"},[a("pre",{class:"language-html"},[a("code",null,`<fieldset class="d-stack8">
  <div class="d-radio-group">
    <div class="d-radio__input">
      <input class="d-radio" type="radio" name="Dialtone-RadioGroup1" id="Dialtone-RadioExample1" />
    </div>
    <div class="d-radio__copy">
      <label class="d-radio__label" for="Dialtone-RadioExample1">Radio label</label>
    </div>
  </div>
  <div class="d-radio-group">
    <div class="d-radio__input">
      <input class="d-radio" type="radio" name="Dialtone-RadioGroup1" id="Dialtone-RadioExample2" checked />
    </div>
    <div class="d-radio__copy">
      <label class="d-radio__label" for="Dialtone-RadioExample2">Radio label</label>
    </div>
  </div>
  <div class="d-radio-group d-radio-group--disabled">
    <div class="d-radio__input">
      <input class="d-radio" type="radio" name="Dialtone-RadioGroup1" id="Dialtone-RadioExample3" disabled />
    </div>
    <div class="d-radio__copy">
      <label class="d-radio__label" for="Dialtone-RadioExample3">Radio label that's been disabled</label>
    </div>
  </div>
  <div class="d-radio-group d-radio-group--disabled">
    <div class="d-radio__input">
      <input class="d-radio" type="radio" name="Dialtone-RadioGroup1" id="Dialtone-RadioExample4" disabled checked />
    </div>
    <div class="d-radio__copy">
      <label class="d-radio__label" for="Dialtone-RadioExample4">Radio label that's been disabled</label>
    </div>
  </div>
  <div class="d-radio-group d-radio-group--disabled">
    <div class="d-radio__input">
      <input class="d-radio d-radio--disabled" type="radio" name="Dialtone-RadioGroup1" id="Dialtone-RadioExample5" />
    </div>
    <div class="d-radio__copy">
      <label class="d-radio__label" for="Dialtone-RadioExample5">Radio label that's been disabled (but without the \`disabled\` attribute)</label>
    </div>
  </div>
</fieldset>
`)])],-1),h=a("h3",{id:"stacked-group",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#stacked-group","aria-hidden":"true"},"#"),d(" Stacked Group")],-1),R=a("fieldset",{class:"d-stack8"},[a("legend",{class:"d-label"},"Advanced missed call routing"),a("div",{class:"d-radio-group"},[a("div",{class:"d-radio__input"},[a("input",{class:"d-radio",type:"radio",name:"Dialtone-RadioGroup2",id:"Dialtone-RadioGroupAExample1"})]),a("div",{class:"d-radio__copy"},[a("label",{class:"d-radio__label",for:"Dialtone-RadioGroupAExample1",checked:""},"To voicemail")])]),a("div",{class:"d-radio-group"},[a("div",{class:"d-radio__input"},[a("input",{class:"d-radio",type:"radio",name:"Dialtone-RadioGroup2",id:"Dialtone-RadioGroupAExample2"})]),a("div",{class:"d-radio__copy"},[a("label",{class:"d-radio__label",for:"Dialtone-RadioGroupAExample2"},"To a message (no voicemail)")])]),a("div",{class:"d-radio-group"},[a("div",{class:"d-radio__input"},[a("input",{class:"d-radio",type:"radio",name:"Dialtone-RadioGroup2",id:"Dialtone-RadioGroupAExample3"})]),a("div",{class:"d-radio__copy"},[a("label",{class:"d-radio__label",for:"Dialtone-RadioGroupAExample3"},"To a team member or room phone")])])],-1),y=a("div",{class:"language-html ext-html"},[a("pre",{class:"language-html"},[a("code",null,`<fieldset class="d-stack8">
  <legend class="d-label">Advanced missed call routing</legend>
  <div class="d-radio-group">
    <div class="d-radio__input">
      <input class="d-radio" type="radio" name="Dialtone-RadioGroup2" id="Dialtone-RadioGroupAExample1" />
    </div>
    <div class="d-radio__copy">
      <label class="d-radio__label" for="Dialtone-RadioGroupAExample1" checked>To voicemail</label>
    </div>
  </div>
  <div class="d-radio-group">
    <div class="d-radio__input">
      <input class="d-radio" type="radio" name="Dialtone-RadioGroup2" id="Dialtone-RadioGroupAExample2" />
    </div>
    <div class="d-radio__copy">
      <label class="d-radio__label" for="Dialtone-RadioGroupAExample2">To a message (no voicemail)</label>
    </div>
  </div>
  <div class="d-radio-group">
    <div class="d-radio__input">
      <input class="d-radio" type="radio" name="Dialtone-RadioGroup2" id="Dialtone-RadioGroupAExample3" />
    </div>
    <div class="d-radio__copy">
      <label class="d-radio__label" for="Dialtone-RadioGroupAExample3">To a team member or room phone</label>
    </div>
  </div>
</fieldset>
`)])],-1),D=a("h3",{id:"with-description-text",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#with-description-text","aria-hidden":"true"},"#"),d(" With Description Text")],-1),x=a("fieldset",{class:"d-stack8"},[a("legend",{class:"d-label"},"Advanced missed call routing"),a("div",{class:"d-radio-group"},[a("div",{class:"d-radio__input"},[a("input",{class:"d-radio",type:"radio",name:"Dialtone-RadioGroup3",id:"Dialtone-RadioGroupBExample1"})]),a("div",{class:"d-radio__copy"},[a("label",{class:"d-radio__label",for:"Dialtone-RadioGroupBExample1",checked:""},"To voicemail"),a("div",{class:"d-description"},"So they can hear your voice")])]),a("div",{class:"d-radio-group"},[a("div",{class:"d-radio__input"},[a("input",{class:"d-radio",type:"radio",name:"Dialtone-RadioGroup3",id:"Dialtone-RadioGroupBExample2"})]),a("div",{class:"d-radio__copy"},[a("label",{class:"d-radio__label",for:"Dialtone-RadioGroupBExample2"},"To a message (no voicemail)"),a("div",{class:"d-description"},"Because they probably don't need to leave a message anyway.")])]),a("div",{class:"d-radio-group"},[a("div",{class:"d-radio__input"},[a("input",{class:"d-radio",type:"radio",name:"Dialtone-RadioGroup3",id:"Dialtone-RadioGroupBExample3"})]),a("div",{class:"d-radio__copy"},[a("label",{class:"d-radio__label",for:"Dialtone-RadioGroupBExample3"},"To a team member or room phone"),a("div",{class:"d-description"},"Because someone else might be able to talk to them.")])])],-1),f=a("div",{class:"language-html ext-html"},[a("pre",{class:"language-html"},[a("code",null,`<fieldset class="d-stack8">
  <legend class="d-label">Advanced missed call routing</legend>
  <div class="d-radio-group">
    <div class="d-radio__input">
      <input class="d-radio" type="radio" name="Dialtone-RadioGroup3" id="Dialtone-RadioGroupBExample1" />
    </div>
    <div class="d-radio__copy">
      <label class="d-radio__label" for="Dialtone-RadioGroupBExample1" checked>To voicemail</label>
      <div class="d-description">So they can hear your voice</div>
    </div>
  </div>
  <div class="d-radio-group">
    <div class="d-radio__input">
      <input class="d-radio" type="radio" name="Dialtone-RadioGroup3" id="Dialtone-RadioGroupBExample2" />
    </div>
    <div class="d-radio__copy">
      <label class="d-radio__label" for="Dialtone-RadioGroupBExample2">To a message (no voicemail)</label>
      <div class="d-description">Because they probably don't need to leave a message anyway.</div>
    </div>
  </div>
  <div class="d-radio-group">
    <div class="d-radio__input">
      <input class="d-radio" type="radio" name="Dialtone-RadioGroup3" id="Dialtone-RadioGroupBExample3" />
    </div>
    <div class="d-radio__copy">
      <label class="d-radio__label" for="Dialtone-RadioGroupBExample3">To a team member or room phone</label>
      <div class="d-description">Because someone else might be able to talk to them.</div>
    </div>
  </div>
</fieldset>
`)])],-1),q=a("h3",{id:"with-validation-states",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#with-validation-states","aria-hidden":"true"},"#"),d(" With Validation States")],-1),G=a("fieldset",{class:"d-stack8"},[a("legend",{class:"d-label"},"Advanced missed call routing"),a("div",{class:"d-radio-group"},[a("div",{class:"d-radio__input"},[a("input",{class:"d-radio d-radio--warning",type:"radio",name:"Dialtone-RadioGroup4",id:"Dialtone-RadioGroupCExample1"})]),a("div",{class:"d-radio__copy"},[a("label",{class:"d-radio__label",for:"Dialtone-RadioGroupCExample1"},"To voicemail"),a("div",{class:"d-validation-message d-validation-message--warning"},"So they can hear your voice")])]),a("div",{class:"d-radio-group"},[a("div",{class:"d-radio__input"},[a("input",{class:"d-radio d-radio--error",type:"radio",name:"Dialtone-RadioGroup4",id:"Dialtone-RadioGroupCExample2"})]),a("div",{class:"d-radio__copy"},[a("label",{class:"d-radio__label",for:"Dialtone-RadioGroupCExample2"},"To a message (no voicemail)"),a("div",{class:"d-validation-message d-validation-message--error"},"Because they probably don't need to leave a message anyway.")])]),a("div",{class:"d-radio-group"},[a("div",{class:"d-radio__input"},[a("input",{class:"d-radio d-radio--success",type:"radio",name:"Dialtone-RadioGroup4",id:"Dialtone-RadioGroupCExample3"})]),a("div",{class:"d-radio__copy"},[a("label",{class:"d-radio__label",for:"Dialtone-RadioGroupCExample3"},"To a team member or room phone"),a("div",{class:"d-validation-message d-validation-message--success"},"Because someone else might be able to talk to them.")])])],-1),E=c(`<div class="language-html ext-html"><pre class="language-html"><code>&lt;fieldset class=&quot;d-stack8&quot;&gt;
  &lt;legend class=&quot;d-label&quot;&gt;Advanced missed call routing&lt;/legend&gt;
  &lt;div class=&quot;d-radio-group&quot;&gt;
    &lt;div class=&quot;d-radio__input&quot;&gt;
      &lt;input class=&quot;d-radio d-radio--warning&quot; type=&quot;radio&quot; name=&quot;Dialtone-RadioGroup4&quot; id=&quot;Dialtone-RadioGroupCExample1&quot; /&gt;
    &lt;/div&gt;
    &lt;div class=&quot;d-radio__copy&quot;&gt;
      &lt;label class=&quot;d-radio__label&quot; for=&quot;Dialtone-RadioGroupCExample1&quot;&gt;To voicemail&lt;/label&gt;
      &lt;div class=&quot;d-validation-message d-validation-message--warning&quot;&gt;So they can hear your voice&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;d-radio-group&quot;&gt;
    &lt;div class=&quot;d-radio__input&quot;&gt;
      &lt;input class=&quot;d-radio d-radio--error&quot; type=&quot;radio&quot; name=&quot;Dialtone-RadioGroup4&quot; id=&quot;Dialtone-RadioGroupCExample2&quot; /&gt;
    &lt;/div&gt;
    &lt;div class=&quot;d-radio__copy&quot;&gt;
      &lt;label class=&quot;d-radio__label&quot; for=&quot;Dialtone-RadioGroupCExample2&quot;&gt;To a message (no voicemail)&lt;/label&gt;
      &lt;div class=&quot;d-validation-message d-validation-message--error&quot;&gt;Because they probably don&#39;t need to leave a message anyway.&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;d-radio-group&quot;&gt;
    &lt;div class=&quot;d-radio__input&quot;&gt;
      &lt;input class=&quot;d-radio d-radio--success&quot; type=&quot;radio&quot; name=&quot;Dialtone-RadioGroup4&quot; id=&quot;Dialtone-RadioGroupCExample3&quot; /&gt;
    &lt;/div&gt;
    &lt;div class=&quot;d-radio__copy&quot;&gt;
      &lt;label class=&quot;d-radio__label&quot; for=&quot;Dialtone-RadioGroupCExample3&quot;&gt;To a team member or room phone&lt;/label&gt;
      &lt;div class=&quot;d-validation-message d-validation-message--success&quot;&gt;Because someone else might be able to talk to them.&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/fieldset&gt;
</code></pre></div><h2 id="accessibility" tabindex="-1"><a class="header-anchor" href="#accessibility" aria-hidden="true">#</a> Accessibility</h2><p>The best accessibility is semantic HTML. Most screen readers understand how to parse inputs if they\u2019re correctly formatted. When it comes to radio input, there are a few things to keep in mind:</p><ul><li>All inputs should have an <code>id</code> attribute.</li><li>Associate radio labels with their inputs using the <code>for</code> attribute. This correlates with the radio&#39;s <code>id</code>.</li><li>If you have a group of related radios, use a <code>fieldset</code> to group them and a <code>legend</code> to title the group. For further information, please visit Gov.UK\u2019s article, <a href="https://accessibility.blog.gov.uk/2016/07/22/using-the-fieldset-and-legend-elements/">&quot;Using the fieldset and legend elements&quot;</a>.</li><li>If the input is a required field, use the <code>aria-required</code> property and use the validation message for input errors.</li><li>Input with validation errors should have <code>aria-describedby</code> with the <code>id</code> of the validation message.</li></ul>`,4);function k(w,B){const s=l("component-class-table"),o=l("code-well-header");return p(),n(r,null,[_,i(s,{"component-name":"radio"}),v,m,i(o,null,{default:e(()=>[b]),_:1}),g,h,i(o,null,{default:e(()=>[R]),_:1}),y,D,i(o,null,{default:e(()=>[x]),_:1}),f,q,i(o,null,{default:e(()=>[G]),_:1}),E],64)}var A=t(u,[["render",k],["__file","radio.html.vue"]]);export{A as default};
