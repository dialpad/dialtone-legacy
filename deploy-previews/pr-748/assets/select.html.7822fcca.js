import{D as d}from"./DialtoneUsage.b170463a.js";import{_ as c,r as n,o as p,c as u,e as t,w as s,a as l,f as v,b as e,d as r}from"./app.5e51e3f0.js";const h=e("div",{class:"d-w100p"},[e("div",{class:"d-label"},[e("label",{for:"Dialtone--SelectExample1"},"Label")]),l(),e("div",{class:"d-select"},[e("select",{class:"d-select__input",id:"Dialtone--SelectExample1"},[e("option",{value:"",selected:""},"Please select one"),l(),e("option",{value:"option1"},"Option 1"),l(),e("option",{value:"option2"},"Option 2"),l(),e("option",{value:"option3"},"Option 3")])])],-1),_=e("h2",{id:"usage",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#usage","aria-hidden":"true"},"#"),l(" Usage")],-1),m=e("ul",null,[e("li",null,"Use sparingly — only when a user needs to choose from about seven to 15 possible options, and you have limited space to display the options.")],-1),b=e("li",null,"For site navigation.",-1),f=e("li",null,[l("Avoid using the "),e("code",null,"multiple"),l(" attribute. Users often don’t understand how to select multiple items from the select element (e.g. by holding down a modifier key).")],-1),g=e("code",null,"select",-1),x=e("h3",null,"Best practices",-1),O=e("li",null,"Selects should be considered the “UI of last resort,” as users often find them confusing and difficult to use. Consider testing thoroughly with members of your target audience.",-1),S=e("li",null,"Avoid making options in one dropdown menu change based on the input to another. Users often don’t understand how selecting an item in one impacts another.",-1),D=e("li",null,"When most users will (or should) pick a particular option, make it the default selection.",-1),w=e("h2",{id:"variants-and-examples",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#variants-and-examples","aria-hidden":"true"},"#"),l(" Variants and examples")],-1),y=e("h3",null,"Base Styles",-1),E=e("p",null,"A select is normally paired with a label, but there are times when it can be used without a label. Don't rely on the placeholder text as a label.",-1),k=e("div",{class:"d-stack24 d-w100p"},[e("div",null,[e("div",{class:"d-label"},[e("label",{for:"Dialtone--SelectExample1"},"Label")]),l(),e("div",{class:"d-select"},[e("select",{class:"d-select__input",id:"Dialtone--SelectExample1"},[e("option",{value:"",selected:""},"Please select one"),l(),e("option",{value:"option1"},"Option 1"),l(),e("option",{value:"option2"},"Option 2"),l(),e("option",{value:"option3"},"Option 3")])])]),l(),e("div",null,[e("div",{class:"d-label"},[e("label",{for:"Dialtone--SelectExample2"},"Label")]),l(),e("div",{class:"d-select d-select--disabled"},[e("select",{class:"d-select__input",id:"Dialtone--SelectExample2",disabled:""},[e("option",{value:"",selected:""},"Please select one"),l(),e("option",{value:"option1"},"Option 1"),l(),e("option",{value:"option2"},"Option 2"),l(),e("option",{value:"option3"},"Option 3")])])])],-1),L=e("div",{class:"language-html","data-ext":"html"},[e("pre",{class:"language-html"},[e("code",null,`<div>
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
`)])],-1),P=e("h3",null,"With Description Text",-1),A=e("div",{class:"d-w100p"},[e("div",{class:"d-label"},[e("label",{for:"Dialtone--SelectExample3"},"Label")]),l(),e("div",{class:"d-description"},[e("span",null,"Optional description text")]),l(),e("div",{class:"d-select"},[e("select",{class:"d-select__input",id:"Dialtone--SelectExample3"},[e("option",{value:"",selected:""},"Please select one"),l(),e("option",{value:"option1"},"Option 1"),l(),e("option",{value:"option2"},"Option 2"),l(),e("option",{value:"option3"},"Option 3")])])],-1),U=e("div",{class:"language-html","data-ext":"html"},[e("pre",{class:"language-html"},[e("code",null,`<div class="d-label">...</div>
<div class="d-description">...</div>
<div class="d-select">
  <select class="d-select__input" id="Dialtone--SelectExample3">...</select>
</div>
`)])],-1),C=e("h3",null,"With Validation States",-1),I=e("p",null,"Provides feedback to the user based on their interaction, or lack thereof, with a select.",-1),V=e("div",{class:"d-stack24 d-w100p"},[e("div",null,[e("div",{class:"d-label"},[e("label",{for:"Dialtone--SelectExample4"},"Label")]),l(),e("div",{class:"d-select"},[e("select",{class:"d-select__input d-select__input--error",id:"Dialtone--SelectExample4"},[e("option",{value:"",selected:""},"Please select one"),l(),e("option",{value:"option1"},"Option 1"),l(),e("option",{value:"option2"},"Option 2"),l(),e("option",{value:"option3"},"Option 3")])]),l(),e("div",{class:"d-validation-message d-validation-message--error"},[e("span",null,"Error validation message")])]),l(),e("div",null,[e("div",{class:"d-label"},[e("label",{for:"Dialtone--SelectExample5"},"Label")]),l(),e("div",{class:"d-select"},[e("select",{class:"d-select__input d-select__input--success",id:"Dialtone--SelectExample5"},[e("option",{value:"",selected:""},"Please select one"),l(),e("option",{value:"option1"},"Option 1"),l(),e("option",{value:"option2"},"Option 2"),l(),e("option",{value:"option3"},"Option 3")])]),l(),e("div",{class:"d-validation-message d-validation-message--success"},[e("span",null,"Success validation message")])]),l(),e("div",null,[e("div",{class:"d-label"},[e("label",{for:"Dialtone--SelectExample6"},"Label")]),l(),e("div",{class:"d-select"},[e("select",{class:"d-select__input d-select__input--warning",id:"Dialtone--SelectExample6"},[e("option",{value:"",selected:""},"Please select one"),l(),e("option",{value:"option1"},"Option 1"),l(),e("option",{value:"option2"},"Option 2"),l(),e("option",{value:"option3"},"Option 3")])]),l(),e("div",{class:"d-validation-message d-validation-message--warning"},[e("span",null,"Warning validation message")])])],-1),B=e("div",{class:"language-html","data-ext":"html"},[e("pre",{class:"language-html"},[e("code",null,`<div>
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
`)])],-1),N=e("h3",null,"Sizes",-1),W=e("p",null,"We offer different sizes for instances in which the interface requires a smaller or larger select. In general, though, use the base (medium) size select as much as possible, especially in forms.",-1),z=e("div",{class:"d-stack24 d-w100p"},[e("div",null,[e("div",{class:"d-label d-label--xs"},[e("label",{for:"Dialtone--SelectExample7"},"Label")]),l(),e("div",{class:"d-select d-select--xs"},[e("select",{class:"d-select__input",id:"Dialtone--SelectExample7"},[e("option",{value:"",selected:""},"Please select one"),l(),e("option",{value:"option1"},"Option 1"),l(),e("option",{value:"option2"},"Option 2"),l(),e("option",{value:"option3"},"Option 3")])])]),l(),e("div",null,[e("div",{class:"d-label d-label--sm"},[e("label",{for:"Dialtone--SelectExample8"},"Label")]),l(),e("div",{class:"d-select d-select--sm"},[e("select",{class:"d-select__input",id:"Dialtone--SelectExample8"},[e("option",{value:"",selected:""},"Please select one"),l(),e("option",{value:"option1"},"Option 1"),l(),e("option",{value:"option2"},"Option 2"),l(),e("option",{value:"option3"},"Option 3")])])]),l(),e("div",null,[e("div",{class:"d-label"},[e("label",{for:"Dialtone--SelectExample9"},"Label")]),l(),e("div",{class:"d-select"},[e("select",{class:"d-select__input",id:"Dialtone--SelectExample9"},[e("option",{value:"",selected:""},"Please select one"),l(),e("option",{value:"option1"},"Option 1"),l(),e("option",{value:"option2"},"Option 2"),l(),e("option",{value:"option3"},"Option 3")])])]),l(),e("div",null,[e("div",{class:"d-label d-label--lg"},[e("label",{for:"Dialtone--SelectExample10"},"Label")]),l(),e("div",{class:"d-select d-select--lg"},[e("select",{class:"d-select__input",id:"Dialtone--SelectExample10"},[e("option",{value:"",selected:""},"Please select one"),l(),e("option",{value:"option1"},"Option 1"),l(),e("option",{value:"option2"},"Option 2"),l(),e("option",{value:"option3"},"Option 3")])])]),l(),e("div",null,[e("div",{class:"d-label d-label--xl"},[e("label",{for:"Dialtone--SelectExample11"},"Label")]),l(),e("div",{class:"d-select d-select--xl"},[e("select",{class:"d-select__input",id:"Dialtone--SelectExample11"},[e("option",{value:"",selected:""},"Please select one"),l(),e("option",{value:"option1"},"Option 1"),l(),e("option",{value:"option2"},"Option 2"),l(),e("option",{value:"option3"},"Option 3")])])])],-1),F=e("div",{class:"language-html","data-ext":"html"},[e("pre",{class:"language-html"},[e("code",null,`<div>
  <div class="d-label d-label--xs">...</div>
  <div class="d-select d-select--xs">
    <select class="d-select__input">...</select>
  </div>
</div>
<div>
  <div class="d-label d-label--sm">...</div>
  <div class="d-select d-select--sm">
    <select class="d-select__input">...</select>
  </div>
</div>
<div>
  <div class="d-label">...</div>
  <div class="d-select">
    <select class="d-select__input">...</select>
  </div>
</div>
<div>
  <div class="d-label d-label--lg">...</div>
  <div class="d-select d-select--lg">
    <select class="d-select__input">...</select>
  </div>
</div>
<div>
  <div class="d-label d-label--xl">...</div>
  <div class="d-select d-select--xl">
    <select class="d-select__input">...</select>
  </div>
</div>
`)])],-1),q=e("h2",{id:"classes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#classes","aria-hidden":"true"},"#"),l(" Classes")],-1),R=e("h2",{id:"accessibility",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#accessibility","aria-hidden":"true"},"#"),l(" Accessibility")],-1),M=r("<ul><li>Make sure the <code>label</code> <code>for</code> attribute match the select <code>id</code>.</li> <li>Avoiding removing <code>labels</code>. Labelled selects are user-friendly.</li> <li>Avoid relying on placeholder text as a substitute for a label.</li> <li>Avoid customizing the placeholder text.</li> <li>If the select is a required field, use the <code>aria-required</code> property and use the validation message for input errors.</li> <li>Select with validation errors should have <code>aria-describedby</code> with the <code>id</code> of the validation message.</li></ul>",1),T={__name:"select.html",setup(j){return(G,H)=>{const i=n("code-well-header"),o=n("RouterLink"),a=n("component-class-table");return p(),u("div",null,[t(i,null,{default:s(()=>[h]),_:1}),l(),v(' <component-combinator component-name="DtSelectMenu" /> '),l(),_,l(),t(d,null,{do:s(()=>[m]),dont:s(()=>[e("ul",null,[b,l(),e("li",null,[l("If the list of options is very short. Use "),t(o,{to:"/components/radio.html"},{default:s(()=>[l("Radio")]),_:1}),l(" instead.")]),l(),e("li",null,[l("If the list of options is very long. Let users type the same information into an "),t(o,{to:"/components/input.html"},{default:s(()=>[l("Input")]),_:1}),l(" that suggests possible options instead (aka Combobox).")]),l(),f,l(),e("li",null,[l("For selecting an action that takes immediate effect. A "),g,l(" is for selecting a choice that is only confirmed by a separate submit action (much like a "),t(o,{to:"/components/checkbox.html"},{default:s(()=>[l("Checkbox")]),_:1}),l("). For immediate actions consider the "),t(o,{to:"/components/dropdown.html"},{default:s(()=>[l("Dropdown")]),_:1}),l(" component.")])])]),_:1}),l(),x,l(),e("ul",null,[O,l(),S,l(),D,l(),e("li",null,[l("Avoid auto-submission. Be wary of UI implications of automatically submitting upon selection or applying its value. Users may often change their choices multiple times, particularly if interacting with a form solely with keyboard. Auto-submission is also less accessible. For auto-submission consider the "),t(o,{to:"/components/dropdown.html"},{default:s(()=>[l("Dropdown")]),_:1}),l(" component.")])]),l(),w,l(),y,l(),E,l(),t(i,null,{default:s(()=>[k]),_:1}),l(),L,P,l(),t(i,null,{default:s(()=>[A]),_:1}),l(),U,C,l(),I,l(),t(i,null,{default:s(()=>[V]),_:1}),l(),B,N,l(),W,l(),t(i,null,{default:s(()=>[z]),_:1}),l(),F,q,l(),t(a,{"component-name":"select"}),R,l(),M])}}},Q=c(T,[["__file","select.html.vue"]]);export{Q as default};
