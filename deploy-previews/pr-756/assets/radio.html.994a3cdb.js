import{D as n}from"./DialtoneUsage.a7d23ee4.js";import{_ as r,r as s,o as c,c as p,e as i,w as o,a as e,f as u,b as a,d as _}from"./app.c69bfef1.js";const m=a("div",{class:"d-radio-group"},[a("div",{class:"d-radio__input"},[a("input",{class:"d-radio",type:"radio",name:"Dialtone-RadioGroup0",id:"Dialtone-RadioExample0"})]),e(),a("div",{class:"d-radio__copy"},[a("label",{class:"d-radio__label",for:"Dialtone-RadioExample0"},"Radio label")])],-1),v=a("h2",{id:"usage",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#usage","aria-hidden":"true"},"#"),e(" Usage")],-1),h=a("p",null,"Radio buttons are a common way to allow users to make a single selection from a list of options. Since only one radio button can be selected at a time (within the same group), each available choice must be its own item and label. Upon selection of a radio item in a group, the group cannot be easily reset to zero selections.",-1),b=a("li",null,"When users may only choose a single option out of a set of mutually exclusive choices.",-1),g=a("li",null,"If the number of available options can fit onto a mobile screen.",-1),y=a("h3",null,"Best practices",-1),f=a("ul",null,[a("li",null,[e("Users should be able to tap on or click either the text "),a("code",null,"label"),e(" or the radio element itself to select an option.")]),e(),a("li",null,"Options that are listed vertically are easier to read than those listed horizontally. Horizontal listings can make it difficult to tell which label pertains to which radio button."),e(),a("li",null,"Make sure selections are adequately spaced for touch screens."),e(),a("li",null,"Use caution if you decide to set a default value as they cannot be unchecked. Setting a default value can discourage users from making conscious decisions, seem pushy, or alienate users who don’t fit into your assumptions. If you are unsure, leave nothing selected by default.")],-1),R=a("h2",{id:"variants-and-examples",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#variants-and-examples","aria-hidden":"true"},"#"),e(" Variants and examples")],-1),D=a("h3",null,"Base Styles",-1),x=a("fieldset",{class:"d-stack8"},[a("div",{class:"d-radio-group"},[a("div",{class:"d-radio__input"},[a("input",{class:"d-radio",type:"radio",name:"Dialtone-RadioGroup1",id:"Dialtone-RadioExample1"})]),e(),a("div",{class:"d-radio__copy"},[a("label",{class:"d-radio__label",for:"Dialtone-RadioExample1"},"Radio label")])]),e(),a("div",{class:"d-radio-group"},[a("div",{class:"d-radio__input"},[a("input",{class:"d-radio",type:"radio",name:"Dialtone-RadioGroup1",id:"Dialtone-RadioExample2",checked:""})]),e(),a("div",{class:"d-radio__copy"},[a("label",{class:"d-radio__label",for:"Dialtone-RadioExample2"},"Radio label")])]),e(),a("div",{class:"d-radio-group d-radio-group--disabled"},[a("div",{class:"d-radio__input"},[a("input",{class:"d-radio",type:"radio",name:"Dialtone-RadioGroup1",id:"Dialtone-RadioExample3",disabled:""})]),e(),a("div",{class:"d-radio__copy"},[a("label",{class:"d-radio__label",for:"Dialtone-RadioExample3"},"Radio label that's been disabled")])]),e(),a("div",{class:"d-radio-group d-radio-group--disabled"},[a("div",{class:"d-radio__input"},[a("input",{class:"d-radio",type:"radio",name:"Dialtone-RadioGroup1",id:"Dialtone-RadioExample4",disabled:"",checked:""})]),e(),a("div",{class:"d-radio__copy"},[a("label",{class:"d-radio__label",for:"Dialtone-RadioExample4"},"Radio label that's been disabled")])]),e(),a("div",{class:"d-radio-group d-radio-group--disabled"},[a("div",{class:"d-radio__input"},[a("input",{class:"d-radio d-radio--disabled",type:"radio",name:"Dialtone-RadioGroup1",id:"Dialtone-RadioExample5"})]),e(),a("div",{class:"d-radio__copy"},[a("label",{class:"d-radio__label",for:"Dialtone-RadioExample5"},"Radio label that's been disabled (but without the `disabled` attribute)")])])],-1),G=a("div",{class:"language-html","data-ext":"html"},[a("pre",{class:"language-html"},[a("code",null,`<fieldset class="d-stack8">
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
`)])],-1),E=a("h3",null,"Stacked Group",-1),k=a("fieldset",{class:"d-stack8"},[a("legend",{class:"d-label"},"Advanced missed call routing"),e(),a("div",{class:"d-radio-group"},[a("div",{class:"d-radio__input"},[a("input",{class:"d-radio",type:"radio",name:"Dialtone-RadioGroup2",id:"Dialtone-RadioGroupAExample1"})]),e(),a("div",{class:"d-radio__copy"},[a("label",{class:"d-radio__label",for:"Dialtone-RadioGroupAExample1",checked:""},"To voicemail")])]),e(),a("div",{class:"d-radio-group"},[a("div",{class:"d-radio__input"},[a("input",{class:"d-radio",type:"radio",name:"Dialtone-RadioGroup2",id:"Dialtone-RadioGroupAExample2"})]),e(),a("div",{class:"d-radio__copy"},[a("label",{class:"d-radio__label",for:"Dialtone-RadioGroupAExample2"},"To a message (no voicemail)")])]),e(),a("div",{class:"d-radio-group"},[a("div",{class:"d-radio__input"},[a("input",{class:"d-radio",type:"radio",name:"Dialtone-RadioGroup2",id:"Dialtone-RadioGroupAExample3"})]),e(),a("div",{class:"d-radio__copy"},[a("label",{class:"d-radio__label",for:"Dialtone-RadioGroupAExample3"},"To a team member or room phone")])])],-1),w=a("div",{class:"language-html","data-ext":"html"},[a("pre",{class:"language-html"},[a("code",null,`<fieldset class="d-stack8">
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
`)])],-1),B=a("h3",null,"With Description Text",-1),T=a("fieldset",{class:"d-stack8"},[a("legend",{class:"d-label"},"Advanced missed call routing"),e(),a("div",{class:"d-radio-group"},[a("div",{class:"d-radio__input"},[a("input",{class:"d-radio",type:"radio",name:"Dialtone-RadioGroup3",id:"Dialtone-RadioGroupBExample1"})]),e(),a("div",{class:"d-radio__copy"},[a("label",{class:"d-radio__label",for:"Dialtone-RadioGroupBExample1",checked:""},"To voicemail"),e(),a("div",{class:"d-description"},"So they can hear your voice")])]),e(),a("div",{class:"d-radio-group"},[a("div",{class:"d-radio__input"},[a("input",{class:"d-radio",type:"radio",name:"Dialtone-RadioGroup3",id:"Dialtone-RadioGroupBExample2"})]),e(),a("div",{class:"d-radio__copy"},[a("label",{class:"d-radio__label",for:"Dialtone-RadioGroupBExample2"},"To a message (no voicemail)"),e(),a("div",{class:"d-description"},"Because they probably don't need to leave a message anyway.")])]),e(),a("div",{class:"d-radio-group"},[a("div",{class:"d-radio__input"},[a("input",{class:"d-radio",type:"radio",name:"Dialtone-RadioGroup3",id:"Dialtone-RadioGroupBExample3"})]),e(),a("div",{class:"d-radio__copy"},[a("label",{class:"d-radio__label",for:"Dialtone-RadioGroupBExample3"},"To a team member or room phone"),e(),a("div",{class:"d-description"},"Because someone else might be able to talk to them.")])])],-1),A=a("div",{class:"language-html","data-ext":"html"},[a("pre",{class:"language-html"},[a("code",null,`<fieldset class="d-stack8">
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
`)])],-1),C=a("h3",null,"With Validation States",-1),S=a("fieldset",{class:"d-stack8"},[a("legend",{class:"d-label"},"Advanced missed call routing"),e(),a("div",{class:"d-radio-group"},[a("div",{class:"d-radio__input"},[a("input",{class:"d-radio d-radio--warning",type:"radio",name:"Dialtone-RadioGroup4",id:"Dialtone-RadioGroupCExample1"})]),e(),a("div",{class:"d-radio__copy"},[a("label",{class:"d-radio__label",for:"Dialtone-RadioGroupCExample1"},"To voicemail"),e(),a("div",{class:"d-validation-message d-validation-message--warning"},"So they can hear your voice")])]),e(),a("div",{class:"d-radio-group"},[a("div",{class:"d-radio__input"},[a("input",{class:"d-radio d-radio--error",type:"radio",name:"Dialtone-RadioGroup4",id:"Dialtone-RadioGroupCExample2"})]),e(),a("div",{class:"d-radio__copy"},[a("label",{class:"d-radio__label",for:"Dialtone-RadioGroupCExample2"},"To a message (no voicemail)"),e(),a("div",{class:"d-validation-message d-validation-message--error"},"Because they probably don't need to leave a message anyway.")])]),e(),a("div",{class:"d-radio-group"},[a("div",{class:"d-radio__input"},[a("input",{class:"d-radio d-radio--success",type:"radio",name:"Dialtone-RadioGroup4",id:"Dialtone-RadioGroupCExample3"})]),e(),a("div",{class:"d-radio__copy"},[a("label",{class:"d-radio__label",for:"Dialtone-RadioGroupCExample3"},"To a team member or room phone"),e(),a("div",{class:"d-validation-message d-validation-message--success"},"Because someone else might be able to talk to them.")])])],-1),I=a("div",{class:"language-html","data-ext":"html"},[a("pre",{class:"language-html"},[a("code",null,`<fieldset class="d-stack8">
  <legend class="d-label">Advanced missed call routing</legend>
  <div class="d-radio-group">
    <div class="d-radio__input">
      <input class="d-radio d-radio--warning" type="radio" name="Dialtone-RadioGroup4" id="Dialtone-RadioGroupCExample1" />
    </div>
    <div class="d-radio__copy">
      <label class="d-radio__label" for="Dialtone-RadioGroupCExample1">To voicemail</label>
      <div class="d-validation-message d-validation-message--warning">So they can hear your voice</div>
    </div>
  </div>
  <div class="d-radio-group">
    <div class="d-radio__input">
      <input class="d-radio d-radio--error" type="radio" name="Dialtone-RadioGroup4" id="Dialtone-RadioGroupCExample2" />
    </div>
    <div class="d-radio__copy">
      <label class="d-radio__label" for="Dialtone-RadioGroupCExample2">To a message (no voicemail)</label>
      <div class="d-validation-message d-validation-message--error">Because they probably don't need to leave a message anyway.</div>
    </div>
  </div>
  <div class="d-radio-group">
    <div class="d-radio__input">
      <input class="d-radio d-radio--success" type="radio" name="Dialtone-RadioGroup4" id="Dialtone-RadioGroupCExample3" />
    </div>
    <div class="d-radio__copy">
      <label class="d-radio__label" for="Dialtone-RadioGroupCExample3">To a team member or room phone</label>
      <div class="d-validation-message d-validation-message--success">Because someone else might be able to talk to them.</div>
    </div>
  </div>
</fieldset>
`)])],-1),U=a("h2",{id:"classes",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#classes","aria-hidden":"true"},"#"),e(" Classes")],-1),V=a("h2",{id:"accessibility",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#accessibility","aria-hidden":"true"},"#"),e(" Accessibility")],-1),q=a("p",null,"The best accessibility is semantic HTML. Most screen readers understand how to parse inputs if they’re correctly formatted. When it comes to radio input, there are a few things to keep in mind:",-1),N=_('<ul><li>All inputs should have an <code>id</code> attribute.</li> <li>Associate radio labels with their inputs using the <code>for</code> attribute. This correlates with the radio&#39;s <code>id</code>.</li> <li>If you have a group of related radios, use a <code>fieldset</code> to group them and a <code>legend</code> to title the group. For further information, please visit Gov.UK’s article, <a href="https://accessibility.blog.gov.uk/2016/07/22/using-the-fieldset-and-legend-elements" target="_blank" rel="noopener noreferrer">&quot;Using the fieldset and legend elements&quot;</a>.</li> <li>If the input is a required field, use the <code>aria-required</code> property and use the validation message for input errors.</li> <li>Input with validation errors should have <code>aria-describedby</code> with the <code>id</code> of the validation message.</li> <li>Input with validation errors should have <code>aria-describedby</code> with the <code>id</code> of the validation message.</li></ul>',1),z={__name:"radio.html",setup(W){return(L,M)=>{const d=s("code-well-header"),l=s("RouterLink"),t=s("component-class-table");return c(),p("div",null,[i(d,null,{default:o(()=>[m]),_:1}),e(),u(' <component-combinator component-name="DtRadio" /> '),e(),v,e(),h,e(),i(n,null,{do:o(()=>[a("ul",null,[b,e(),g,e(),a("li",null,[e("In place of "),i(l,{to:"/components/select.html"},{default:o(()=>[e("Select")]),_:1}),e(" element if there are few enough options (e.g. =7) and the design can support it.")])])]),dont:o(()=>[a("ul",null,[a("li",null,[e("Consider "),i(l,{to:"/components/checkbox.html"},{default:o(()=>[e("Checkbox")]),_:1}),e(" if users may have the option to select more than one.")]),e(),a("li",null,[e("Consider a "),i(l,{to:"/components/select.html"},{default:o(()=>[e("Select")]),_:1}),e(" if you don’t have enough space to list out all available options.")]),e(),a("li",null,[e("If users should be able to select zero of the options; radio elements are not “uncheckable.” A "),i(l,{to:"/components/checkbox.html"},{default:o(()=>[e("Checkbox")]),_:1}),e(" may be warranted.")]),e(),a("li",null,[e("If there are too many options to display on a single view; consider a "),i(l,{to:"/components/select.html"},{default:o(()=>[e("Select")]),_:1}),e(" instead.")])])]),_:1}),e(),y,e(),f,e(),R,e(),D,e(),i(d,null,{default:o(()=>[x]),_:1}),e(),G,E,e(),i(d,null,{default:o(()=>[k]),_:1}),e(),w,B,e(),i(d,null,{default:o(()=>[T]),_:1}),e(),A,C,e(),i(d,null,{default:o(()=>[S]),_:1}),e(),I,U,e(),i(t,{"component-name":"radio"}),V,e(),q,e(),N])}}},K=r(z,[["__file","radio.html.vue"]]);export{K as default};
