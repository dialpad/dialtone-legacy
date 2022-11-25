import{D as d}from"./DialtoneUsage.b170463a.js";import{_ as t,r as i,o as h,c as b,e as l,w as a,a as c,f as p,b as e,d as k}from"./app.5e51e3f0.js";const r=e("div",{class:"d-checkbox-group"},[e("div",{class:"d-checkbox__input"},[e("input",{class:"d-checkbox",type:"checkbox",name:"Dialtone-CheckExample1",id:"Dialtone-CheckExample1"})]),c(),e("div",{class:"d-checkbox__copy"},[e("label",{class:"d-checkbox__label",for:"Dialtone-CheckExample1"},"Checkbox label")])],-1),x=e("h2",{id:"usage",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#usage","aria-hidden":"true"},"#"),c(" Usage")],-1),u=e("p",null,"Checkboxes are an easily understandable way to indicate that users can select one or more answers to a question or items from a list. They visibly show users what’s been selected and makes it easy for them to “uncheck” an option, which can be difficult with other selection methods on a form (such as radio buttons or select menus).",-1),_=e("ul",null,[e("li",null,"Selecting any number of choices from a set list."),c(),e("li",null,"Binary selections that convey opposite states, such as check=“on” and unchecked=“off”, paired with a label that conveys the choice."),c(),e("li",null,"When users need to see all the available options at a glance.")],-1),m=e("li",null,"If there are too many options to reasonably display in its context.",-1),v=e("h3",null,"Best practices",-1),g=e("li",null,[c("Users should be able to tap on or click on either the text "),e("code",null,"label"),c(" or the checkbox element itself to toggle an option, aiding accessibility.")],-1),C=e("li",null,"Options that are listed vertically are easier to read than those listed horizontally. Horizontal listings can make it difficult to tell which label pertains to which checkbox.",-1),y=e("li",null,'Negative language in labels can be counterintuitive. For example, use "I want to receive a promotional email" instead of "I don’t want to receive promotional email".',-1),f=e("li",null,"Make sure selections are adequately spaced for touch screens.",-1),E=e("li",null,"Multiple checkbox options should be organized in a meaningful way, like alphabetical or most-frequent to least-frequent. This helps users easily find the option they’re looking for.",-1),D=e("li",null,[e("code",null,"indeterminate"),c(` checkboxes convey a "mixed" state that neither qualifies as checked or unchecked. An example use case is when a checkbox acts as a "parent" of a collection of child checkboxes:
`),e("ul",null,[e("li",null,[e("code",null,"checked"),c(": all children are checked.")]),c(),e("li",null,[e("code",null,"unchecked"),c(": all children are not checked.")]),c(),e("li",null,[e("code",null,"indeterminate"),c(": children are a mix of checked and unchecked.")])])],-1),G=e("h2",{id:"variants-and-examples",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#variants-and-examples","aria-hidden":"true"},"#"),c(" Variants and examples")],-1),w=e("h3",null,"Base Styles",-1),B=e("fieldset",{class:"d-stack8"},[e("div",{class:"d-checkbox-group"},[e("div",{class:"d-checkbox__input"},[e("input",{class:"d-checkbox",type:"checkbox",name:"Dialtone-CheckExample1",id:"Dialtone-CheckExample1"})]),c(),e("div",{class:"d-checkbox__copy"},[e("label",{class:"d-checkbox__label",for:"Dialtone-CheckExample1"},"Checkbox label")])]),c(),e("div",{class:"d-checkbox-group"},[e("div",{class:"d-checkbox__input"},[e("input",{class:"d-checkbox",type:"checkbox",name:"Dialtone-CheckExample2",id:"Dialtone-CheckExample2",checked:""})]),c(),e("div",{class:"d-checkbox__copy"},[e("label",{class:"d-checkbox__label",for:"Dialtone-CheckExample2"},"Checkbox label")])]),c(),e("div",{class:"d-checkbox-group d-checkbox-group--disabled"},[e("div",{class:"d-checkbox__input"},[e("input",{class:"d-checkbox",type:"checkbox",name:"Dialtone-CheckExample3",id:"Dialtone-CheckExample3",disabled:""})]),c(),e("div",{class:"d-checkbox__copy"},[e("label",{class:"d-checkbox__label",for:"Dialtone-CheckExample3"},"Disabled checkbox label")])]),c(),e("div",{class:"d-checkbox-group d-checkbox-group--disabled"},[e("div",{class:"d-checkbox__input"},[e("input",{class:"d-checkbox",type:"checkbox",name:"Dialtone-CheckExample4",id:"Dialtone-CheckExample4",disabled:"",checked:""})]),c(),e("div",{class:"d-checkbox__copy"},[e("label",{class:"d-checkbox__label",for:"Dialtone-CheckExample4"},"Disabled checkbox label")])]),c(),e("div",{class:"d-checkbox-group d-checkbox-group--disabled"},[e("div",{class:"d-checkbox__input"},[e("input",{class:"d-checkbox d-checkbox--disabled",type:"checkbox",name:"Dialtone-CheckExample5",id:"Dialtone-CheckExample5"})]),c(),e("div",{class:"d-checkbox__copy"},[e("label",{class:"d-checkbox__label",for:"Dialtone-CheckExample5"},"Unchecked Checkbox that has disabled styling applied (but doesn't have `disabled` attribute)")])]),c(),e("div",{class:"d-checkbox-group d-checkbox-group--disabled"},[e("div",{class:"d-checkbox__input"},[e("input",{class:"d-checkbox d-checkbox--disabled",type:"checkbox",name:"Dialtone-CheckExample6",id:"Dialtone-CheckExample6",checked:""})]),c(),e("div",{class:"d-checkbox__copy"},[e("label",{class:"d-checkbox__label",for:"Dialtone-CheckExample6"},"Checked Checkbox that has disabled styling applied (but doesn't have `disabled` attribute)")])])],-1),A=e("div",{class:"language-html","data-ext":"html"},[e("pre",{class:"language-html"},[e("code",null,`<fieldset class="d-stack8">
  <div class="d-checkbox-group">
    <div class="d-checkbox__input">
      <input class="d-checkbox" type="checkbox" name="Dialtone-CheckExample1" id="Dialtone-CheckExample1" />
    </div>
    <div class="d-checkbox__copy">
      <label class="d-checkbox__label" for="Dialtone-CheckExample1">Checkbox label</label>
    </div>
  </div>
  <div class="d-checkbox-group">
    <div class="d-checkbox__input">
      <input class="d-checkbox" type="checkbox" name="Dialtone-CheckExample2" id="Dialtone-CheckExample2" checked />
    </div>
    <div class="d-checkbox__copy">
      <label class="d-checkbox__label" for="Dialtone-CheckExample2">Checkbox label</label>
    </div>
  </div>
  <div class="d-checkbox-group d-checkbox-group--disabled">
    <div class="d-checkbox__input">
      <input class="d-checkbox" type="checkbox" name="Dialtone-CheckExample3" id="Dialtone-CheckExample3" disabled />
    </div>
    <div class="d-checkbox__copy">
      <label class="d-checkbox__label" for="Dialtone-CheckExample3">Disabled checkbox label</label>
    </div>
  </div>
  <div class="d-checkbox-group d-checkbox-group--disabled">
    <div class="d-checkbox__input">
      <input class="d-checkbox" type="checkbox" name="Dialtone-CheckExample4" id="Dialtone-CheckExample4" disabled checked />
    </div>
    <div class="d-checkbox__copy">
      <label class="d-checkbox__label" for="Dialtone-CheckExample4">Disabled checkbox label</label>
    </div>
  </div>
  <div class="d-checkbox-group d-checkbox-group--disabled">
    <div class="d-checkbox__input">
      <input class="d-checkbox d-checkbox--disabled" type="checkbox" name="Dialtone-CheckExample5" id="Dialtone-CheckExample5" />
    </div>
    <div class="d-checkbox__copy">
      <label class="d-checkbox__label" for="Dialtone-CheckExample5">Unchecked Checkbox that has disabled styling applied (but doesn't have \`disabled\` attribute)</label>
    </div>
  </div>
  <div class="d-checkbox-group d-checkbox-group--disabled">
    <div class="d-checkbox__input">
      <input class="d-checkbox d-checkbox--disabled" type="checkbox" name="Dialtone-CheckExample6" id="Dialtone-CheckExample6" checked />
    </div>
    <div class="d-checkbox__copy">
      <label class="d-checkbox__label" for="Dialtone-CheckExample6">Checked Checkbox that has disabled styling applied (but doesn't have \`disabled\` attribute)</label>
    </div>
  </div>
</fieldset>
`)])],-1),I=e("h3",null,"Indeterminate",-1),S=e("fieldset",{class:"d-stack8"},[e("div",{class:"d-checkbox-group"},[e("div",{class:"d-checkbox__input"},[e("input",{class:"d-checkbox d-checkbox--indeterminate",type:"checkbox",name:"Checkbox-IndeterminateExample1",id:"Checkbox-IndeterminateExample1"})]),c(),e("div",{class:"d-checkbox__copy"},[e("label",{class:"d-checkbox__label",for:"Checkbox-IndeterminateExample1"},"Indeterminate checkbox using custom class")])]),c(),e("div",{class:"d-checkbox-group"},[e("div",{class:"d-checkbox__input"},[e("input",{class:"d-checkbox d-checkbox--indeterminate",type:"checkbox",name:"Checkbox-IndeterminateExample2",id:"Checkbox-IndeterminateExample2",disabled:""})]),c(),e("div",{class:"d-checkbox__copy"},[e("label",{class:"d-checkbox__label",for:"Checkbox-IndeterminateExample2"},"Indeterminate disabled checkbox")])])],-1),q=e("div",{class:"language-html","data-ext":"html"},[e("pre",{class:"language-html"},[e("code",null,`<fieldset class="d-stack8">
  <div class="d-checkbox-group">
    <div class="d-checkbox__input">
      <input class="d-checkbox d-checkbox--indeterminate" type="checkbox" name="Checkbox-IndeterminateExample1" id="Checkbox-IndeterminateExample1" />
    </div>
    <div class="d-checkbox__copy">
      <label class="d-checkbox__label" for="Checkbox-IndeterminateExample1">Indeterminate checkbox using custom class</label>
    </div>
  </div>
  <div class="d-checkbox-group">
    <div class="d-checkbox__input">
      <input class="d-checkbox d-checkbox--indeterminate" type="checkbox" name="Checkbox-IndeterminateExample2" id="Checkbox-IndeterminateExample2" disabled />
    </div>
    <div class="d-checkbox__copy">
      <label class="d-checkbox__label" for="Checkbox-IndeterminateExample2">Indeterminate disabled checkbox</label>
    </div>
  </div>
</fieldset>
`)])],-1),T=e("h3",null,"Stacked Group",-1),W=e("fieldset",{class:"d-stack8"},[e("legend",{class:"d-label"},"Call Blocking & Spam Protection"),c(),e("div",{class:"d-checkbox-group"},[e("div",{class:"d-checkbox__input"},[e("input",{class:"d-checkbox",type:"checkbox",name:"Dialtone-CheckGroupAExample1",id:"Dialtone-CheckGroupAExample1"})]),c(),e("div",{class:"d-checkbox__copy"},[e("label",{class:"d-checkbox__label",for:"Dialtone-CheckGroupAExample1"},"Anonymous callers")])]),c(),e("div",{class:"d-checkbox-group"},[e("div",{class:"d-checkbox__input"},[e("input",{class:"d-checkbox",type:"checkbox",name:"Dialtone-CheckGroupAExample2",id:"Dialtone-CheckGroupAExample2"})]),c(),e("div",{class:"d-checkbox__copy"},[e("label",{class:"d-checkbox__label",for:"Dialtone-CheckGroupAExample2"},"Block callers not already in contacts list")])]),c(),e("div",{class:"d-checkbox-group"},[e("div",{class:"d-checkbox__input"},[e("input",{class:"d-checkbox",type:"checkbox",name:"Dialtone-CheckGroupAExample3",id:"Dialtone-CheckGroupAExample3"})]),c(),e("div",{class:"d-checkbox__copy"},[e("label",{class:"d-checkbox__label",for:"Dialtone-CheckGroupAExample3"},"Block callers with a high spam score")])])],-1),U=e("div",{class:"language-html","data-ext":"html"},[e("pre",{class:"language-html"},[e("code",null,`<fieldset class="d-stack8">
  <legend class="d-label">Call Blocking & Spam Protection</legend>
  <div class="d-checkbox-group">
    <div class="d-checkbox__input">
      <input class="d-checkbox" type="checkbox" name="Dialtone-CheckGroupAExample1" id="Dialtone-CheckGroupAExample1" />
    </div>
    <div class="d-checkbox__copy">
      <label class="d-checkbox__label" for="Dialtone-CheckGroupAExample1">Anonymous callers</label>
    </div>
  </div>
  <div class="d-checkbox-group">
    <div class="d-checkbox__input">
      <input class="d-checkbox" type="checkbox" name="Dialtone-CheckGroupAExample2" id="Dialtone-CheckGroupAExample2" />
    </div>
    <div class="d-checkbox__copy">
      <label class="d-checkbox__label" for="Dialtone-CheckGroupAExample2">Block callers not already in contacts list</label>
    </div>
  </div>
  <div class="d-checkbox-group">
    <div class="d-checkbox__input">
      <input class="d-checkbox" type="checkbox" name="Dialtone-CheckGroupAExample3" id="Dialtone-CheckGroupAExample3" />
    </div>
    <div class="d-checkbox__copy">
      <label class="d-checkbox__label" for="Dialtone-CheckGroupAExample3">Block callers with a high spam score</label>
    </div>
  </div>
</fieldset>
`)])],-1),V=e("h3",null,"With Description Text",-1),F=e("fieldset",{class:"d-stack8"},[e("legend",{class:"d-label"},"Call Blocking & Spam Protection"),c(),e("div",{class:"d-checkbox-group"},[e("div",{class:"d-checkbox__input"},[e("input",{class:"d-checkbox",type:"checkbox",name:"Dialtone-CheckGroupBExample1",id:"Dialtone-CheckGroupBExample1"})]),c(),e("div",{class:"d-checkbox__copy"},[e("label",{class:"d-checkbox__label",for:"Dialtone-CheckGroupBExample1"},[c(`Anonymous callers
          `),e("div",{class:"d-description"},"Select how phone numbers you don't know should be handled.")])])]),c(),e("div",{class:"d-checkbox-group"},[e("div",{class:"d-checkbox__input"},[e("input",{class:"d-checkbox",type:"checkbox",name:"Dialtone-CheckGroupBExample2",id:"Dialtone-CheckGroupBExample2"})]),c(),e("div",{class:"d-checkbox__copy"},[e("label",{class:"d-checkbox__label",for:"Dialtone-CheckGroupBExample2"},[c(`Block callers not already in contacts list
          `),e("div",{class:"d-description"},"You get enough calls. Free up some of your time.")])])]),c(),e("div",{class:"d-checkbox-group"},[e("div",{class:"d-checkbox__input"},[e("input",{class:"d-checkbox",type:"checkbox",name:"Dialtone-CheckGroupBExample3",id:"Dialtone-CheckGroupBExample3"})]),c(),e("div",{class:"d-checkbox__copy"},[e("label",{class:"d-checkbox__label",for:"Dialtone-CheckGroupBExample3"},[c(`Block callers with a high spam score
          `),e("div",{class:"d-description"},"We'll only let the legitimate callers through to bother you.")])])])],-1),N=e("div",{class:"language-html","data-ext":"html"},[e("pre",{class:"language-html"},[e("code",null,`<fieldset class="d-stack8">
  <legend class="d-label">Call Blocking & Spam Protection</legend>
  <div class="d-checkbox-group">
    <div class="d-checkbox__input">
      <input class="d-checkbox" type="checkbox" name="Dialtone-CheckGroupBExample1" id="Dialtone-CheckGroupBExample1" />
    </div>
    <div class="d-checkbox__copy">
      <label class="d-checkbox__label" for="Dialtone-CheckGroupBExample1">Anonymous callers
        <div class="d-description">Select how phone numbers you don't know should be handled.</div>
      </label>
    </div>
  </div>
  <div class="d-checkbox-group">
    <div class="d-checkbox__input">
      <input class="d-checkbox" type="checkbox" name="Dialtone-CheckGroupBExample2" id="Dialtone-CheckGroupBExample2" />
    </div>
    <div class="d-checkbox__copy">
      <label class="d-checkbox__label" for="Dialtone-CheckGroupBExample2">Block callers not already in contacts list
        <div class="d-description">You get enough calls. Free up some of your time.</div>
      </label>
    </div>
  </div>
  <div class="d-checkbox-group">
    <div class="d-checkbox__input">
      <input class="d-checkbox" type="checkbox" name="Dialtone-CheckGroupBExample3" id="Dialtone-CheckGroupBExample3" />
    </div>
    <div class="d-checkbox__copy">
      <label class="d-checkbox__label" for="Dialtone-CheckGroupBExample3">Block callers with a high spam score
        <div class="d-description">We'll only let the legitimate callers through to bother you.</div>
      </label>
    </div>
  </div>
</fieldset>
`)])],-1),P=e("h3",null,"With Validation States",-1),M=e("fieldset",{class:"d-stack8"},[e("legend",{class:"d-label"},"Call Blocking & Spam Protection"),c(),e("div",{class:"d-checkbox-group"},[e("div",{class:"d-checkbox__input"},[e("input",{class:"d-checkbox d-checkbox--warning",type:"checkbox",name:"Dialtone-CheckGroupBExample1",id:"Dialtone-CheckGroupCExample1"})]),c(),e("div",{class:"d-checkbox__copy"},[e("label",{class:"d-checkbox__label",for:"Dialtone-CheckGroupCExample1"},[c(`Anonymous callers
          `),e("div",{class:"d-validation-message d-validation-message--warning"},"Select how phone numbers you don't know should be handled.")])])]),c(),e("div",{class:"d-checkbox-group"},[e("div",{class:"d-checkbox__input"},[e("input",{class:"d-checkbox d-checkbox--error",type:"checkbox",name:"Dialtone-CheckGroupCExample2",id:"Dialtone-CheckGroupCExample2"})]),c(),e("div",{class:"d-checkbox__copy"},[e("label",{class:"d-checkbox__label",for:"Dialtone-CheckGroupCExample2"},[c(`Block callers not already in contacts list
          `),e("div",{class:"d-validation-message d-validation-message--error"},"You get enough calls. Free up some of your time.")])])]),c(),e("div",{class:"d-checkbox-group"},[e("div",{class:"d-checkbox__input"},[e("input",{class:"d-checkbox d-checkbox--success",type:"checkbox",name:"Dialtone-CheckGroupCExample3",id:"Dialtone-CheckGroupCExample3"})]),c(),e("div",{class:"d-checkbox__copy"},[e("label",{class:"d-checkbox__label",for:"Dialtone-CheckGroupCExample3"},[c(`Block callers with a high spam score
          `),e("div",{class:"d-validation-message d-validation-message--success"},"We'll only let the legitimate callers through to bother you.")])])])],-1),R=e("div",{class:"language-html","data-ext":"html"},[e("pre",{class:"language-html"},[e("code",null,`<fieldset class="d-stack8">
  <legend class="d-label">Call Blocking & Spam Protection</legend>
  <div class="d-checkbox-group">
    <div class="d-checkbox__input">
      <input class="d-checkbox d-checkbox--warning" type="checkbox" name="Dialtone-CheckGroupBExample1" id="Dialtone-CheckGroupCExample1" />
    </div>
    <div class="d-checkbox__copy">
      <label class="d-checkbox__label" for="Dialtone-CheckGroupCExample1">Anonymous callers
        <div class="d-validation-message d-validation-message--warning">Select how phone numbers you don't know should be handled.</div>
      </label>
    </div>
  </div>
  <div class="d-checkbox-group">
    <div class="d-checkbox__input">
      <input class="d-checkbox d-checkbox--error" type="checkbox" name="Dialtone-CheckGroupCExample2" id="Dialtone-CheckGroupCExample2" />
    </div>
    <div class="d-checkbox__copy">
      <label class="d-checkbox__label" for="Dialtone-CheckGroupCExample2">Block callers not already in contacts list
        <div class="d-validation-message d-validation-message--error">You get enough calls. Free up some of your time.</div>
      </label>
    </div>
  </div>
  <div class="d-checkbox-group">
    <div class="d-checkbox__input">
      <input class="d-checkbox d-checkbox--success" type="checkbox" name="Dialtone-CheckGroupCExample3" id="Dialtone-CheckGroupCExample3" />
    </div>
    <div class="d-checkbox__copy">
      <label class="d-checkbox__label" for="Dialtone-CheckGroupCExample3">Block callers with a high spam score
        <div class="d-validation-message d-validation-message--success">We'll only let the legitimate callers through to bother you.</div>
      </label>
    </div>
  </div>
</fieldset>
`)])],-1),Y=e("h2",{id:"classes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#classes","aria-hidden":"true"},"#"),c(" Classes")],-1),z=e("h2",{id:"accessibility",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#accessibility","aria-hidden":"true"},"#"),c(" Accessibility")],-1),L=e("p",null,"The best accessibility is semantic HTML. Most screen readers understand how to parse inputs if they’re correctly formatted. When it comes to checkboxes, there are a few things to keep in mind:",-1),H=k('<ul><li>All inputs should have an <code>id</code> attribute.</li> <li>Associate checkbox labels with their inputs using the <code>for</code> attribute. This correlates with the checkbox&#39;s <code>id</code>.</li> <li>If you have a group of related checkboxes, use a <code>fieldset</code> to group them and a <code>legend</code> to title the group. For further information, please visit Gov.UK’s article, <a href="https://accessibility.blog.gov.uk/2016/07/22/using-the-fieldset-and-legend-elements" target="_blank" rel="noopener noreferrer">&quot;Using the fieldset and legend elements&quot;</a>.</li> <li>Input with description text should have <code>aria-describedby</code> with the <code>id</code> of the description text.</li> <li>If the input is a required field, use the <code>aria-required</code> property and use the validation message for input errors.</li> <li>Input with validation errors should have <code>aria-describedby</code> with the <code>id</code> of the validation message.</li></ul>',1),K={__name:"checkbox.html",setup(O){return(j,J)=>{const o=i("code-well-header"),s=i("RouterLink"),n=i("component-class-table");return h(),b("div",null,[l(o,null,{default:a(()=>[r]),_:1}),c(),p(' <component-combinator component-name="DtCheckbox" /> '),c(),x,c(),u,c(),l(d,null,{do:a(()=>[_]),dont:a(()=>[e("ul",null,[e("li",null,[c("If a user can only select one option from a list; consider using "),l(s,{to:"/components/radio.html"},{default:a(()=>[c("Radio")]),_:1}),c(" or "),l(s,{to:"/components/select.html"},{default:a(()=>[c("Select")]),_:1}),c(".")]),c(),m])]),_:1}),c(),v,c(),e("ul",null,[g,c(),C,c(),y,c(),e("li",null,[c("Make sure that the label makes both states — checked and unchecked — clear to the user. If that’s not possible, consider using a "),l(s,{to:"/components/radio.html"},{default:a(()=>[c("Radio")]),_:1}),c(" button with two individual options instead. Then both states can have their own clearly marked label.")]),c(),f,c(),E,c(),D]),c(),G,c(),w,c(),l(o,null,{default:a(()=>[B]),_:1}),c(),A,I,c(),l(o,null,{default:a(()=>[S]),_:1}),c(),q,T,c(),l(o,null,{default:a(()=>[W]),_:1}),c(),U,V,c(),l(o,null,{default:a(()=>[F]),_:1}),c(),N,P,c(),l(o,null,{default:a(()=>[M]),_:1}),c(),R,Y,c(),l(n,{"component-name":"checkbox"}),z,c(),L,c(),H])}}},Z=t(K,[["__file","checkbox.html.vue"]]);export{Z as default};
