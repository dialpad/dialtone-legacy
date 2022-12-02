import s from"./IconSend.328ede71.js";import c from"./IconLock.df736cb7.js";import{D as r}from"./DialtoneUsage.a7d23ee4.js";import{_ as u,r as d,o as x,c as h,e as l,w as t,a,f as m,b as e,d as o}from"./app.c69bfef1.js";const b=e("div",{class:"d-w100p"},[e("label",{class:"d-label",for:"Dialtone--InputExample1a"},"Label"),a(),e("input",{class:"d-input",id:"Dialtone--InputExample1a",type:"text",placeholder:"Placeholder"})],-1),_=e("h2",{id:"usage",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#usage","aria-hidden":"true"},"#"),a(" Usage")],-1),v=e("p",null,[a("This component combines both the "),e("code",null,"input"),a(" and "),e("code",null,"textarea"),a(" elements as options within a single component. Its default presentation includes a paired text "),e("code",null,"label"),a(".")],-1),f=e("ul",null,[e("li",null,"If you can’t reasonably predict a user’s answer to a prompt and there might be wide variability in users’ answers."),a(),e("li",null,"When using another type of input will make answering more difficult. For example, birthdays and other known dates are easier to type in than they are to select from a calendar picker."),a(),e("li",null,"When users want to be able to paste in a response.")],-1),g=e("h3",null,"Best practices",-1),I=o('<ul><li>The length of the text input provides a hint to users as to how much text to enter.</li> <li>Only show error validation messages or stylings after a user has interacted with a particular field.</li> <li>Do not use placeholder text (i.e. <code>placeholder</code> attribute) in place of an accessible <code>label</code>.</li> <li>Consider the type of content a user may enter to aid mobile device entry; mobile devices typically surface a keyboard UI attuned to the type. For example, type=&quot;tel&quot; will surface a <a href="http://html5doctor.com/html5-forms-input-types/#input-tel" target="_blank" rel="noopener noreferrer">phone keyboard</a>.</li></ul>',1),E=e("h2",{id:"variants-and-examples",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#variants-and-examples","aria-hidden":"true"},"#"),a(" Variants and examples")],-1),D=e("h3",null,"Base Styles",-1),y=e("p",null,"An input is normally paired with a label, but there are times when it can be used without a label.  Placeholder text should primarily be used as a content prompt and only provided when needed.",-1),L=e("div",{class:"d-stack24 d-w100p"},[e("div",null,[e("label",{class:"d-label",for:"Dialtone--InputExample1a"},"Label"),a(),e("input",{class:"d-input",id:"Dialtone--InputExample1a",type:"text",placeholder:"Placeholder"})]),a(),e("div",null,[e("label",{class:"d-label",for:"Dialtone--InputExample1b"},"Label"),a(),e("input",{class:"d-input",id:"Dialtone--InputExample1b",type:"text",placeholder:"Placeholder",disabled:""})])],-1),w=e("div",{class:"language-html","data-ext":"html"},[e("pre",{class:"language-html"},[e("code",null,`<div>
  <label class="d-label" for="Dialtone--InputExample1a">...</label>
  <input class="d-input" id="Dialtone--InputExample1a" type="text" placeholder="..." />
</div>
<div>
  <label class="d-label" for="Dialtone--InputExample1b">...</label>
  <input class="d-input" id="Dialtone--InputExample1b" type="text" placeholder="..." disabled />
</div>
`)])],-1),T=e("div",{class:"d-stack24 d-w100p"},[e("div",null,[e("label",{class:"d-label",for:"Dialtone--TextareaExample1a"},"Label"),a(),e("textarea",{class:"d-textarea",id:"Dialtone--TextareaExample1a",type:"text",placeholder:"Placeholder"})]),a(),e("div",null,[e("label",{class:"d-label",for:"Dialtone--TextareaExample1b"},"Label"),a(),e("textarea",{class:"d-textarea",id:"Dialtone--TextareaExample1b",type:"text",placeholder:"Placeholder",disabled:""})])],-1),P=e("div",{class:"language-html","data-ext":"html"},[e("pre",{class:"language-html"},[e("code",null,`<div>
  <label class="d-label" for="Dialtone--TextareaExample1a">...</label>
  <textarea class="d-textarea" id="Dialtone--TextareaExample1a" type="text" placeholder="..."></textarea>
</div>
<div>
  <label class="d-label" for="Dialtone--TextareaExample1b">...</label>
  <textarea class="d-textarea" id="Dialtone--TextareaExample1b" type="text" placeholder="..." disabled></textarea>
</div>
`)])],-1),k=e("h3",null,"With Description Text",-1),S=e("div",{class:"d-w100p"},[e("div",null,[e("label",{class:"d-label",for:"Dialtone--InputExample2"},"Label"),a(),e("span",{class:"d-description"},"Helpful description text.")]),a(),e("input",{class:"d-input",id:"Dialtone--InputExample2",type:"text",placeholder:"Placeholder"})],-1),B=e("div",{class:"language-html","data-ext":"html"},[e("pre",{class:"language-html"},[e("code",null,`<label class="d-label" for="Dialtone--InputExample2">...</label>
<span class="d-description">...</span>
<input class="d-input" id="Dialtone--InputExample2" type="text" placeholder="..." />
`)])],-1),V=e("div",{class:"d-w100p"},[e("div",null,[e("label",{class:"d-label",for:"Dialtone--TextareaExample2"},"Label"),a(),e("span",{class:"d-description"},"Helpful description text.")]),a(),e("textarea",{class:"d-textarea",id:"Dialtone--TextareaExample2",type:"text",placeholder:"Placeholder"})],-1),W=e("div",{class:"language-html","data-ext":"html"},[e("pre",{class:"language-html"},[e("code",null,`<label class="d-label" for="Dialtone--TextareaExample">...</label>
<span class="d-description">...</span>
<textarea class="d-textarea" id="Dialtone--TextareaExample" type="text" placeholder="..."></textarea>
`)])],-1),C=e("h3",null,"With Validation States",-1),R=e("p",null,"Provides feedback to the user based on their interaction, or lack thereof, with an input.",-1),z=e("div",{class:"d-stack24 d-w100p"},[e("div",null,[e("label",{class:"d-label",for:"Dialtone--InputExample3"},"Label"),a(),e("input",{class:"d-input d-input--error",id:"Dialtone--InputExample3",type:"email",placeholder:"",value:"Value"}),a(),e("span",{class:"d-validation-message d-validation-message--error"},"Error validation message")]),a(),e("div",null,[e("label",{class:"d-label",for:"Dialtone--InputExample4"},"Label"),a(),e("input",{class:"d-input d-input--success",id:"Dialtone--InputExample4",type:"email",placeholder:"",value:"Value"}),a(),e("span",{class:"d-validation-message d-validation-message--success"},"Success validation message")]),a(),e("div",null,[e("label",{class:"d-label",for:"Dialtone--InputExample5"},"Label"),a(),e("input",{class:"d-input d-input--warning",id:"Dialtone--InputExample5",type:"email",placeholder:"",value:"Value"}),a(),e("span",{class:"d-validation-message d-validation-message--warning"},"Warning validation message")])],-1),q=e("div",{class:"language-html","data-ext":"html"},[e("pre",{class:"language-html"},[e("code",null,`<div>
  <label class="d-label" for="Dialtone--InputExample3">...</label>
  <input class="d-input d-input--error" id="Dialtone--InputExample3" type="email" placeholder="..." value="..." />
  <span class="d-validation-message d-validation-message--error">...</span>
</div>
<div>
  <label class="d-label" for="Dialtone--InputExample4">...</label>
  <input class="d-input d-input--success" id="Dialtone--InputExample4" type="email" placeholder="..." value="..." />
  <span class="d-validation-message d-validation-message--success">...</span>
</div>
<div>
  <label class="d-label" for="Dialtone--InputExample5">...</label>
  <input class="d-input d-input--warning" id="Dialtone--InputExample5" type="email" placeholder="..." value="..." />
  <span class="d-validation-message d-validation-message--warning">...</span>
</div>
`)])],-1),N=e("div",{class:"d-stack24 d-w100p"},[e("div",null,[e("label",{class:"d-label",for:"Dialtone--TextareaExample3"},"Label"),a(),e("textarea",{class:"d-textarea d-textarea--error",id:"Dialtone--TextareaExample3",type:"email",placeholder:"",value:"Value"}),a(),e("span",{class:"d-validation-message d-validation-message--error"},"Error validation message")]),a(),e("div",null,[e("label",{class:"d-label",for:"Dialtone--TextareaExample4"},"Label"),a(),e("textarea",{class:"d-textarea d-textarea--success",id:"Dialtone--TextareaExample4",type:"email",placeholder:"",value:"Value"}),a(),e("span",{class:"d-validation-message d-validation-message--success"},"Success validation message")]),a(),e("div",null,[e("label",{class:"d-label",for:"Dialtone--TextareaExample5"},"Label"),a(),e("textarea",{class:"d-textarea d-textarea--warning",id:"Dialtone--TextareaExample5",type:"email",placeholder:"",value:"Value"}),a(),e("span",{class:"d-validation-message d-validation-message--warning"},"Warning validation message")])],-1),A=e("div",{class:"language-html","data-ext":"html"},[e("pre",{class:"language-html"},[e("code",null,`<div>
  <label class="d-label" for="Dialtone--TextareaExample3">...</label>
  <textarea class="d-textarea d-textarea--error" id="Dialtone--TextareaExample3" type="email" placeholder="..." value="..."></textarea>
  <span class="d-validation-message d-validation-message--error">...</span>
</div>
<div>
  <label class="d-label" for="Dialtone--TextareaExample4">...</label>
  <textarea class="d-textarea d-textarea--success" id="Dialtone--TextareaExample4" type="email" placeholder="..." value="..."></textarea>
  <span class="d-validation-message d-validation-message--success">...</span>
</div>
<div>
  <label class="d-label" for="Dialtone--TextareaExample5">...</label>
  <textarea class="d-textarea d-textarea--warning" id="Dialtone--TextareaExample5" type="email" placeholder="..." value="..."></textarea>
  <span class="d-validation-message d-validation-message--warning">...</span>
</div>
`)])],-1),U=e("h3",null,"With Icons",-1),F={class:"d-stack24 d-w100p"},H={class:"d-w100p"},M=e("div",null,[e("label",{class:"d-label",for:"Dialtone--InputExample--IconLeft"},"Label")],-1),O={class:"d-input__wrapper"},Y={class:"d-input-icon d-input-icon--left"},j=e("input",{class:"d-input d-input-icon--left",id:"Dialtone--InputExample--IconLeft",type:"text",placeholder:"Placeholder"},null,-1),G={class:"d-w100p"},J=e("div",null,[e("label",{class:"d-label",for:"Dialtone--InputExample--IconRight"},"Label")],-1),K={class:"d-input__wrapper"},Q=e("input",{class:"d-input d-input-icon--right",id:"Dialtone--InputExample--IconRight",type:"text",placeholder:"Placeholder"},null,-1),X={class:"d-input-icon d-input-icon--right"},Z=e("div",{class:"language-html","data-ext":"html"},[e("pre",{class:"language-html"},[e("code",null,`<div>
  <label class="d-label" for="Dialtone--InputExample--IconLeft">...</label>
  <div class="d-input__wrapper">
    <span class="d-input-icon d-input-icon--left">...</span>
    <input class="d-input d-input-icon--left" id="Dialtone--InputExample--IconLeft" type="text" placeholder="..." />
  </div>
</div>
<div>
  <label class="d-label" for="Dialtone--InputExample--IconRight">...</label>
  <div class="d-input__wrapper">
    <input class="d-input d-input-icon--right" id="Dialtone--InputExample--IconRight" type="text" placeholder="..." />
     <span class="d-input-icon d-input-icon--right">...</span>
  </div>
</div>
`)])],-1),$={class:"d-stack24 d-w100p"},ee={class:"d-w100p"},ae=e("div",null,[e("label",{class:"d-label",for:"Dialtone--InputExample--IconLeft"},"Label")],-1),le={class:"d-input__wrapper"},te={class:"d-input-icon d-input-icon--left"},ne=e("textarea",{class:"d-textarea d-input-icon--left",id:"Dialtone--InputExample--IconLeft",type:"text",placeholder:"Placeholder"},null,-1),se=e("div",{class:"language-html","data-ext":"html"},[e("pre",{class:"language-html"},[e("code",null,`<div>
  <label class="d-label" for="Dialtone--InputExample--IconLeft">...</label>
  <div class="d-input__wrapper">
    <span class="d-input-icon d-input-icon--left">...</span>
    <textarea class="d-textarea d-input-icon--left" id="Dialtone--InputExample--IconLeft" type="text" placeholder="..."></textarea>
  </div>
</div>
`)])],-1),ie=e("h3",null,"Input Sizes",-1),de=e("p",null,"We offer different sizes for instances in which the interface requires a smaller or larger input. In general, though, use the base (medium) size input as much as possible, especially in forms.",-1),oe=e("div",{class:"d-stack24 d-w100p"},[e("div",null,[e("label",{class:"d-label",for:"Dialtone--InputExample--ExtraSmall"},"Label"),a(),e("input",{class:"d-input d-input--xs",id:"Dialtone--InputExample--ExtraSmall",type:"text",placeholder:"Placeholder"})]),a(),e("div",null,[e("label",{class:"d-label",for:"Dialtone--InputExample--Small"},"Label"),a(),e("input",{class:"d-input d-input--sm",id:"Dialtone--InputExample--Small",type:"text",placeholder:"Placeholder"})]),a(),e("div",null,[e("label",{class:"d-label",for:"Dialtone--InputExample--Base"},"Label"),a(),e("input",{class:"d-input",id:"Dialtone--InputExample--Base",type:"text",placeholder:"Placeholder"})]),a(),e("div",null,[e("label",{class:"d-label",for:"Dialtone--InputExample--Large"},"Label"),a(),e("input",{class:"d-input d-input--lg",id:"Dialtone--InputExample--Large",type:"text",placeholder:"Placeholder"})]),a(),e("div",null,[e("label",{class:"d-label",for:"Dialtone--InputExample--ExtraLarge"},"Label"),a(),e("input",{class:"d-input d-input--xl",id:"Dialtone--InputExample--ExtraLarge",type:"text",placeholder:"Placeholder"})])],-1),pe=e("div",{class:"language-html","data-ext":"html"},[e("pre",{class:"language-html"},[e("code",null,`<div>
  <label class="d-label" for="Dialtone--InputExample--ExtraSmall">...</label>
  <input class="d-input d-input--xs" id="Dialtone--InputExample--ExtraSmall" type="text" placeholder="..." />
</div>
<div>
  <label class="d-label" for="Dialtone--InputExample--Small">...</label>
  <input class="d-input d-input--sm" id="Dialtone--InputExample--Small" type="text" placeholder="..." />
</div>
<div>
  <label class="d-label" for="Dialtone--InputExample--Base">...</label>
  <input class="d-input" id="Dialtone--InputExample--Base" type="text" placeholder="..." />
</div>
<div>
  <label class="d-label" for="Dialtone--InputExample--Large">...</label>
  <input class="d-input d-input--lg" id="Dialtone--InputExample--Large" type="text" placeholder="..." />
</div>
<div>
  <label class="d-label" for="Dialtone--InputExample--ExtraLarge">...</label>
  <input class="d-input d-input--xl" id="Dialtone--InputExample--ExtraLarge" type="text" placeholder="..." />
</div>
`)])],-1),ce=e("div",{class:"d-stack24 d-w100p"},[e("div",null,[e("label",{class:"d-label",for:"Dialtone--InputExample--ExtraSmall"},"Label"),a(),e("textarea",{class:"d-textarea d-textarea--xs",id:"Dialtone--InputExample--ExtraSmall",type:"text",placeholder:"Placeholder"})]),a(),e("div",null,[e("label",{class:"d-label",for:"Dialtone--InputExample--Small"},"Label"),a(),e("textarea",{class:"d-textarea d-textarea--sm",id:"Dialtone--InputExample--ExtraSmall",type:"text",placeholder:"Placeholder"})]),a(),e("div",null,[e("label",{class:"d-label",for:"Dialtone--InputExample--Base"},"Label"),a(),e("textarea",{class:"d-textarea",id:"Dialtone--InputExample--Base",type:"text",placeholder:"Placeholder"})]),a(),e("div",null,[e("label",{class:"d-label",for:"Dialtone--InputExample--Large"},"Label"),a(),e("textarea",{class:"d-textarea d-textarea--lg",id:"Dialtone--InputExample--Large",type:"text",placeholder:"Placeholder"})]),a(),e("div",null,[e("label",{class:"d-label",for:"Dialtone--InputExample--ExtraLarge"},"Label"),a(),e("textarea",{class:"d-textarea d-textarea--xl",id:"Dialtone--InputExample--ExtraLarge",type:"text",placeholder:"Placeholder"})])],-1),re=e("div",{class:"language-html","data-ext":"html"},[e("pre",{class:"language-html"},[e("code",null,`<div>
  <label class="d-label" for="Dialtone--InputExample--ExtraSmall">...</label>
  <textarea class="d-textarea d-textarea--xs" id="Dialtone--InputExample--ExtraSmall" type="text" placeholder="..."></textarea>
</div>
<div>
  <label class="d-label" for="Dialtone--InputExample--Small">...</label>
  <textarea class="d-textarea d-textarea--sm" id="Dialtone--InputExample--Small" type="text" placeholder="..."></textarea>
</div>
<div>
  <label class="d-label" for="Dialtone--InputExample--Base">...</label>
  <textarea class="d-textarea" id="Dialtone--InputExample--Base" type="text" placeholder="..."></textarea>
</div>
<div>
  <label class="d-label" for="Dialtone--InputExample--Large">...</label>
  <textarea class="d-textarea d-textarea--lg" id="Dialtone--InputExample--Large" type="text" placeholder="..."></textarea>
</div>
<div>
  <label class="d-label" for="Dialtone--InputExample--ExtraLarge">...</label>
  <textarea class="d-textarea d-textarea--xl" id="Dialtone--InputExample--ExtraLarge" type="text" placeholder="..."></textarea>
</div>
`)])],-1),ue=e("h3",null,"Icon Sizes",-1),xe=e("p",null,"You may use different icon sizes in different sized inputs",-1),he={class:"d-stack24 d-w100p"},me={class:"d-w100p"},be=e("div",null,[e("label",{class:"d-label",for:"Dialtone--InputExample--IconLeft"},"Input:sm Icon:lg")],-1),_e={class:"d-input__wrapper"},ve={class:"d-input-icon d-input-icon--left d-input--sm d-input-icon--lg"},fe=e("input",{class:"d-input d-input-icon--left d-input--sm",id:"Dialtone--InputExample--IconLeft-sm-lg",type:"text",placeholder:"Placeholder"},null,-1),ge={class:"d-w100p"},Ie=e("div",null,[e("label",{class:"d-label",for:"Dialtone--InputExample--IconLeft"},"Input:md(default), Icon:xl")],-1),Ee={class:"d-input__wrapper"},De={class:"d-input-icon d-input-icon--left d-input-icon--xl"},ye=e("input",{class:"d-input d-input-icon--left",id:"Dialtone--InputExample--IconLeft-md-xl",type:"text",placeholder:"Placeholder"},null,-1),Le={class:"d-w100p"},we=e("div",null,[e("label",{class:"d-label",for:"Dialtone--InputExample--IconLeft"},"Input:xl Icon:md(default)")],-1),Te={class:"d-input__wrapper"},Pe={class:"d-input-icon d-input-icon--left d-input--xl"},ke=e("input",{class:"d-input d-input-icon--left d-input--xl",id:"Dialtone--InputExample--IconLeft-xl-md",type:"text",placeholder:"Placeholder"},null,-1),Se={class:"d-w100p"},Be=e("div",null,[e("label",{class:"d-label",for:"Dialtone--InputExample--IconLeft"},"Textarea:lg Icon:md(default)")],-1),Ve={class:"d-input__wrapper"},We={class:"d-input-icon d-input-icon--left d-input--lg"},Ce=e("textarea",{class:"d-textarea d-input-icon--left d-textarea--lg",id:"Dialtone--TextareaExample--IconLeft-lg-md",type:"text",placeholder:"Placeholder"},null,-1),Re=e("div",{class:"language-html","data-ext":"html"},[e("pre",{class:"language-html"},[e("code",null,`<label class="d-label" for="Dialtone--InputExample--IconLeft">Input:sm Icon:lg</label>
<div class="d-input__wrapper">
  <!-- note you must put the d-input--sm class on the icon element as well as the input -->
  <span class="d-input-icon d-input-icon--left d-input--sm d-input-icon--lg"><icon-send /></span>
  <input class="d-input d-input-icon--left d-input--sm" id="Dialtone--InputExample--IconLeft-sm-lg" type="text" placeholder="Placeholder" />
</div>
<label class="d-label" for="Dialtone--InputExample--IconLeft">Input:md(default), Icon:xl</label>
<div class="d-input__wrapper">
  <span class="d-input-icon d-input-icon--left d-input-icon--xl"><icon-send /></span>
  <input class="d-input d-input-icon--left" id="Dialtone--InputExample--IconLeft-md-xl" type="text" placeholder="Placeholder" />
</div>
<label class="d-label" for="Dialtone--InputExample--IconLeft">Input:xl Icon:md(default)</label>
<div class="d-input__wrapper">
  <span class="d-input-icon d-input-icon--left d-input--xl"><icon-send /></span>
  <input class="d-input d-input-icon--left d-input--xl" id="Dialtone--InputExample--IconLeft-xl-md" type="text" placeholder="Placeholder" />
</div>
<label class="d-label" for="Dialtone--InputExample--IconLeft">Textarea:lg Icon:md(default)</label>
<div class="d-input__wrapper">
  <span class="d-input-icon d-input-icon--left d-input--lg"><icon-send /></span>
  <textarea class="d-textarea d-input-icon--left d-textarea--lg" id="Dialtone--TextareaExample--IconLeft-lg-md" type="text" placeholder="Placeholder"></textarea>
</div>
`)])],-1),ze=e("h2",{id:"classes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#classes","aria-hidden":"true"},"#"),a(" Classes")],-1),qe=e("h2",{id:"accessibility",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#accessibility","aria-hidden":"true"},"#"),a(" Accessibility")],-1),Ne=o("<ul><li>Make sure the <code>label</code> <code>for</code> attribute match the input <code>id</code>.</li> <li>Avoiding removing <code>labels</code>. Labelled inputs are user-friendly.</li> <li>Avoid relying on placeholder text as a substitute for a <code>label</code>.</li> <li>If the input is a required field, use the <code>aria-required</code> property and use the validation message for input errors.</li> <li>Input with validation errors should have <code>aria-describedby</code> with the <code>id</code> of the validation message.</li> <li>Placeholder text should not include critical information. Use description text for any information that helps the user successfully interact with the input.</li></ul>",1),Ae={__name:"input.html",setup(Ue){return(Fe,He)=>{const n=d("code-well-header"),i=d("RouterLink"),p=d("component-class-table");return x(),h("div",null,[l(n,null,{default:t(()=>[b]),_:1}),a(),m(' <component-combinator component-name="DtInput" /> '),a(),_,a(),v,a(),l(r,null,{do:t(()=>[f]),dont:t(()=>[e("ul",null,[e("li",null,[a("When users are choosing from a specific set of options. Consider "),l(i,{to:"/components/select.html"},{default:t(()=>[a("Select")]),_:1}),a(", "),l(i,{to:"/components/radio.html"},{default:t(()=>[a("Radio")]),_:1}),a(", or "),l(i,{to:"/components/checkbox.html"},{default:t(()=>[a("Checkbox")]),_:1}),a(".")])])]),_:1}),a(),g,a(),I,a(),E,a(),D,a(),y,a(),l(n,null,{default:t(()=>[L]),_:1}),a(),w,l(n,null,{default:t(()=>[T]),_:1}),a(),P,k,a(),l(n,null,{default:t(()=>[S]),_:1}),a(),B,l(n,null,{default:t(()=>[V]),_:1}),a(),W,C,a(),R,a(),l(n,null,{default:t(()=>[z]),_:1}),a(),q,l(n,null,{default:t(()=>[N]),_:1}),a(),A,U,a(),l(n,null,{default:t(()=>[e("div",F,[e("div",H,[M,a(),e("div",O,[e("span",Y,[l(s)]),a(),j])]),a(),e("div",G,[J,a(),e("div",K,[Q,a(),e("span",X,[l(c)])])])])]),_:1}),a(),Z,l(n,null,{default:t(()=>[e("div",$,[e("div",ee,[ae,a(),e("div",le,[e("span",te,[l(s)]),a(),ne])])])]),_:1}),a(),se,ie,a(),de,a(),l(n,null,{default:t(()=>[oe]),_:1}),a(),pe,l(n,null,{default:t(()=>[ce]),_:1}),a(),re,ue,a(),xe,a(),l(n,null,{default:t(()=>[e("div",he,[e("div",me,[be,a(),e("div",_e,[e("span",ve,[l(s)]),a(),fe])]),a(),e("div",ge,[Ie,a(),e("div",Ee,[e("span",De,[l(s)]),a(),ye])]),a(),e("div",Le,[we,a(),e("div",Te,[e("span",Pe,[l(s)]),a(),ke])]),a(),e("div",Se,[Be,a(),e("div",Ve,[e("span",We,[l(s)]),a(),Ce])])])]),_:1}),a(),Re,ze,a(),l(p,{"component-name":"input"}),qe,a(),Ne])}}},Ge=u(Ae,[["__file","input.html.vue"]]);export{Ge as default};
