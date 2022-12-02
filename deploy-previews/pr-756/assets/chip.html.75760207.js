import{_ as r,m as g,r as h,o,c as i,q as v,w as c,b as n,f as p,a as t,e as a,n as _,t as f,s as x}from"./app.c69bfef1.js";const C={class:"d-chip"},y={key:0,class:"d-avatar"},w=["src"],B={key:1,class:"d-chip__icon"},z={__name:"ExampleChip",props:{label:{type:String,default:""},hideCloseBtn:{type:Boolean,default:!1},withIcon:{type:Boolean,default:!1},withAvatar:{type:Boolean,default:!1},interactive:{type:Boolean,default:!0},truncate:{type:Boolean,default:!1},size:{type:String,default:null}},setup(s){const u=g(null);return(b,l)=>{const d=h("icon-phone"),m=h("icon-close");return o(),i("span",C,[(o(),v(x(s.interactive?"button":"span"),{type:s.interactive?"button":void 0,class:_(["d-chip__label",{"d-w102":s.truncate,[`d-chip__label--${s.size}`]:s.size}])},{default:c(()=>[s.withAvatar?(o(),i("span",y,[n("img",{class:"d-avatar__image",src:b.$withBase("/assets/images/person.png"),alt:"Person avatar image"},null,8,w)])):p("v-if",!0),t(),s.withIcon?(o(),i("span",B,[a(d)])):p("v-if",!0),t(),n("span",{class:_({"d-truncate":s.truncate})},f(s.label),3)]),_:1},8,["type","class"])),t(),s.hideCloseBtn?p("v-if",!0):(o(),i("button",{key:0,"aria-label":"close",class:_(["d-chip__close",{[`d-chip__close--${s.size}`]:s.size}])},[n("span",{ref_key:"closeBtn",ref:u,class:"d-btn__icon"},[a(m)],512)],2))])}}},e=r(z,[["__file","ExampleChip.vue"]]),k=n("h2",{id:"variants-and-examples",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#variants-and-examples","aria-hidden":"true"},"#"),t(" Variants and examples")],-1),$=n("h3",null,"Base",-1),N=n("p",null,"The base chip should be the go-to chip for most of your needs.",-1),T=n("div",{class:"language-html","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,`<span class="d-chip">
  <button class="d-chip__label" type="button">
    <span class="d-chip__text">Chip</span>
  </button>
  <button class="d-chip__close" type="button" aria-label="close">
    <span class="d-btn__icon">
      <svg>...</svg>
    </span>
  </button>
</span>
`)])],-1),V=n("h3",null,"Without close button",-1),E=n("div",{class:"language-html","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,`<span class="d-chip">
  <button class="d-chip__label" type="button">
    <span class="d-chip__text">Chip</span>
  </button>
</span>
`)])],-1),S=n("h3",null,"With icon",-1),W=n("div",{class:"language-html","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,`<span class="d-chip">
  <button class="d-chip__label" type="button">
    <span class="d-chip__icon">
      <svg>...</svg>
    </span>
    <span class="d-chip__text">Chip</span>
  </button>
</span>
`)])],-1),A=n("h3",null,"With icon and close button",-1),D=n("div",{class:"language-html","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,`<span class="d-chip">
  <button class="d-chip__label" type="button">
    <span class="d-chip__icon">
      <svg>...</svg>
    </span>
    <span class="d-chip__text">Chip</span>
  </button>
  <button class="d-chip__close" type="button" aria-label="close">
    <span class="d-btn__icon">
      <svg>...</svg>
    </span>
  </button>
</span>
`)])],-1),I=n("h3",null,"With Avatar and close button",-1),q=n("div",{class:"language-html","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,`<span class="d-chip">
  <button class="d-chip__label" type="button">
    <span class="d-avatar">...</span>
    <span class="d-chip__text">Chip</span>
  </button>
  <button class="d-chip__close" type="button" aria-label="close">
    <span class="d-btn__icon">
      <svg>...</svg>
    </span>
  </button>
</span>
`)])],-1),P=n("h3",null,"Non Interactive",-1),j=n("p",null,`To make Chip non-interactive, change the d-chip element from a button to a span. Note
the close button can still be interactive even if the chip is non-interactive.`,-1),F=n("div",{class:"language-html","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,`<span class="d-chip">
  <span class="d-chip__label">
    <span class="d-chip__text">Chip</span>
  </span>
  <button class="d-chip__close" type="button" aria-label="close">
    <span class="d-btn__icon">
      <svg>...</svg>
    </span>
  </button>
</span>
`)])],-1),G=n("h3",null,"Truncated",-1),H=n("p",null,[t("To truncate text, add "),n("code",null,".d-truncate"),t(" to the content element, and set the width of the "),n("code",null,".d-chip"),t(" element.")],-1),J=n("div",{class:"language-html","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,`<span class="d-chip">
  <button class="d-chip__label d-w102" type="button">
    <span class="d-chip__text d-truncate">Chip loooooong name</span>
  </button>
  <button class="d-chip__close" type="button" aria-label="close">
    <span class="d-btn__icon">
      <svg>...</svg>
    </span>
  </button>
</span>
`)])],-1),K=n("h3",null,"Sizes",-1),L=n("div",{class:"language-html","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,`<span class="d-chip">
  <button class="d-chip__label d-chip__label--xs" type="button">
    <span class="d-chip__icon">
      <svg>...</svg>
    </span>
    <span class="d-chip__text">Chip</span>
  </button>
  <button class="d-chip__close d-chip__close--xs" type="button" aria-label="close">
    <span class="d-btn__icon">
      <svg>...</svg>
    </span>
  </button>
</span>
<span class="d-chip">
  <button class="d-chip__label d-chip__label--sm" type="button">
    <span class="d-avatar">...</span>
    <span class="d-chip__text">Chip</span>
  </button>
  <button class="d-chip__close d-chip__close--sm" type="button" aria-label="close">
    <span class="d-btn__icon">
      <svg>...</svg>
    </span>
  </button>
</span>
<span class="d-chip">
  <button class="d-chip__label" type="button">
    <span class="d-chip__icon">
      <svg>...</svg>
    </span>
    <span class="d-chip__text">Chip</span>
  </button>
  <button class="d-chip__close" type="button" aria-label="close">
    <span class="d-btn__icon">
      <svg>...</svg>
    </span>
  </button>
</span>
`)])],-1),M=n("h2",{id:"classes",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#classes","aria-hidden":"true"},"#"),t(" Classes")],-1),O={__name:"chip.html",setup(s){return(u,b)=>{const l=h("code-well-header"),d=h("component-class-table");return o(),i("div",null,[a(l,null,{default:c(()=>[a(e,{label:"Chip","with-avatar":""})]),_:1}),t(),p(' <component-combinator component-name="DtChip" /> '),t(),k,t(),$,t(),N,t(),a(l,null,{default:c(()=>[a(e,{label:"Chip"})]),_:1}),t(),T,V,t(),a(l,null,{default:c(()=>[a(e,{label:"Chip","hide-close-btn":""})]),_:1}),t(),E,S,t(),a(l,null,{default:c(()=>[a(e,{label:"Chip","with-icon":"","hide-close-btn":""})]),_:1}),t(),W,A,t(),a(l,null,{default:c(()=>[a(e,{label:"Chip","with-icon":""})]),_:1}),t(),D,I,t(),a(l,null,{default:c(()=>[a(e,{label:"Chip","with-avatar":""})]),_:1}),t(),q,P,t(),j,t(),a(l,null,{default:c(()=>[a(e,{label:"Chip",interactive:!1})]),_:1}),t(),F,G,t(),H,t(),a(l,null,{default:c(()=>[a(e,{label:"Chip loooooong name",truncate:""})]),_:1}),t(),J,K,t(),a(l,null,{default:c(()=>[a(e,{label:"Chip","with-icon":"",size:"xs"}),t(),a(e,{label:"Chip","with-avatar":"",size:"sm"}),t(),a(e,{label:"Chip","with-icon":""})]),_:1}),t(),L,M,t(),a(d,{"component-name":"chip"})])}}},R=r(O,[["__file","chip.html.vue"]]);export{R as default};
