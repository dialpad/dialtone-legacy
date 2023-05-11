import{_ as y,v as i,x as r,y as s,F as v,z as _,E as q,D as f,J as b,C as a,H as T,a7 as x,s as g,G as t,B as h,K as m}from"./framework-8a6d41ce.js";const w={name:"ExampleTabs",props:{size:{type:String,default:""},borderless:{type:Boolean,default:!1},inverted:{type:Boolean,default:!1},hideContent:{type:Boolean,default:!1}},data(){return{focusId:null,selected:0,tabNames:["First","Second","Third"],tabs:[]}},mounted(){this.tabs=this.getTabChildren()},methods:{getTabChildren(){return Array.from(this.$refs.tabs.children).map(e=>({context:e}))},focusTab(c){this.focusId=c,this.tabs[c].context.focus()},selectTab(c){this.selected=c},tabLeft(){this.focusId!==0&&this.focusTab(this.focusId-1)},tabRight(){this.focusId!==this.tabs.length-1&&this.focusTab(this.focusId+1)},onHomeButton(){this.focusTab(0)},onEndButton(){this.focusTab(this.tabs.length-1)}}},B={class:"d-d-flex d-fd-column d-w100p d-stack16"},C=["id","aria-selected","aria-controls","tabindex","onClick"],z={key:0},E=["id","aria-labelledby","hidden"];function I(c,e,k,d,o,p){return i(),r("div",B,[s("div",{ref:"tabs",class:q(["d-tablist",{"d-tablist--sm":k.size==="small","d-tablist--no-border":k.borderless,"d-tablist--inverted":k.inverted}]),role:"tablist","aria-label":"Label Example Group",tabindex:"0",onKeydown:[e[0]||(e[0]=b((...n)=>p.tabLeft&&p.tabLeft(...n),["left"])),e[1]||(e[1]=b((...n)=>p.tabRight&&p.tabRight(...n),["right"])),e[2]||(e[2]=b(n=>p.selectTab(o.focusId),["enter"])),e[3]||(e[3]=b(n=>p.selectTab(o.focusId),["space"])),e[4]||(e[4]=b(x((...n)=>p.onHomeButton&&p.onHomeButton(...n),["prevent"]),["home"])),e[5]||(e[5]=b(x((...n)=>p.onEndButton&&p.onEndButton(...n),["prevent"]),["end"]))]},[(i(!0),r(v,null,_(o.tabNames,(n,l)=>(i(),r("button",{id:`base-tab-${l}`,key:n,class:q(["d-tab",{"d-tab--selected":o.selected===l}]),role:"tab","aria-selected":o.selected===l,"aria-controls":`base-panel-${l}`,tabindex:o.selected===l?0:-1,onClick:O=>p.selectTab(l)},f(n)+` tab
      `,11,C))),128))],34),a(),k.hideContent?T("v-if",!0):(i(),r("div",z,[(i(!0),r(v,null,_(o.tabNames,(n,l)=>(i(),r("div",{id:`base-panel-${l}`,key:n,role:"tabpanel",tabindex:"0","aria-labelledby":`base-tab-${l}`,hidden:o.selected!==l},[s("p",{class:q({"d-fc-primary-inverted":k.inverted})},f(n)+` tab content panel
        `,3)],8,E))),128))]))])}const u=y(w,[["render",I],["__file","ExampleTabs.vue"]]),N=s("h2",{id:"variants-and-examples",tabindex:"-1",class:"d-docsite--header-2"},[a("Variants and examples "),s("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#variants-and-examples","aria-hidden":"true"},"#")],-1),S=s("h3",{id:"base-styles",tabindex:"-1",class:"d-docsite--header-3"},[a("Base Styles "),s("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#base-styles","aria-hidden":"true"},"#")],-1),j=m(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-tablist js-tablist<span class="token punctuation">&quot;</span></span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tablist<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Label Example Group<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-tab d-tab--selected js-tab<span class="token punctuation">&quot;</span></span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tab<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-selected</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-controls</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>panel-1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tab-1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">tabindex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>First tab<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-tab js-tab<span class="token punctuation">&quot;</span></span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tab<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-selected</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-controls</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>panel-2<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tab-2<span class="token punctuation">&quot;</span></span> <span class="token attr-name">tabindex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>-1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Second tab<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-tab js-tab<span class="token punctuation">&quot;</span></span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tab<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-selected</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-controls</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>panel-3<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tab-3<span class="token punctuation">&quot;</span></span> <span class="token attr-name">tabindex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>-1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Third tab<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>panel-1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>js-tab-panel<span class="token punctuation">&quot;</span></span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tabpanel<span class="token punctuation">&quot;</span></span> <span class="token attr-name">tabindex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-labelledby</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tab-1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>First tab content panel<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>panel-2<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>js-tab-panel<span class="token punctuation">&quot;</span></span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tabpanel<span class="token punctuation">&quot;</span></span> <span class="token attr-name">tabindex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-labelledby</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tab-2<span class="token punctuation">&quot;</span></span> <span class="token attr-name">hidden</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Second tab content panel<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>panel-3<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>js-tab-panel<span class="token punctuation">&quot;</span></span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tabpanel<span class="token punctuation">&quot;</span></span> <span class="token attr-name">tabindex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-labelledby</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tab-3<span class="token punctuation">&quot;</span></span> <span class="token attr-name">hidden</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Third tab content panel<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="sizes" tabindex="-1" class="d-docsite--header-3">Sizes <a class="header-anchor d-link d-docsite--link d-link" href="#sizes" aria-hidden="true">#</a></h3>`,2),A=m(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-tablist<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>…<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-tablist d-tablist--sm<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>…<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="borderless" tabindex="-1" class="d-docsite--header-3">Borderless <a class="header-anchor d-link d-docsite--link d-link" href="#borderless" aria-hidden="true">#</a></h3>`,2),V=s("p",{class:"d-docsite--paragraph"},[a("Add a "),s("code",null,"d-tablist--no-border"),a(" to remove the bottom border of any tablist. Handy for small tablists and tablists serving as subtabs to a larger menu.")],-1),L=m(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-tablist d-tablist--no-border<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>…<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-tablist d-tablist--sm d-tablist--no-border<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>…<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="inverted" tabindex="-1" class="d-docsite--header-3">Inverted <a class="header-anchor d-link d-docsite--link d-link" href="#inverted" aria-hidden="true">#</a></h3>`,2),F=s("p",{class:"d-docsite--paragraph"},[a("Add "),s("code",null,"d-tablist--inverted"),a(" when you want to display tabs on a darker background.")],-1),H=m(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-tablist d-tablist--inverted<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>…<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="vue-api" tabindex="-1" class="d-docsite--header-2">Vue API <a class="header-anchor d-link d-docsite--link d-link" href="#vue-api" aria-hidden="true">#</a></h2>`,2),R=s("h3",{id:"tab-group",tabindex:"-1",class:"d-docsite--header-3"},[a("Tab Group "),s("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#tab-group","aria-hidden":"true"},"#")],-1),G=s("h3",{id:"tab-panel",tabindex:"-1",class:"d-docsite--header-3"},[a("Tab Panel "),s("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#tab-panel","aria-hidden":"true"},"#")],-1),K=s("h3",{id:"tab",tabindex:"-1",class:"d-docsite--header-3"},[a("Tab "),s("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#tab","aria-hidden":"true"},"#")],-1),D=s("h2",{id:"classes",tabindex:"-1",class:"d-docsite--header-2"},[a("Classes "),s("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#classes","aria-hidden":"true"},"#")],-1),P=s("h2",{id:"accessibility",tabindex:"-1",class:"d-docsite--header-2"},[a("Accessibility "),s("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#accessibility","aria-hidden":"true"},"#")],-1),J=s("p",{class:"d-docsite--paragraph"},[a("To create accessible tabs, be sure to implement the "),s("a",{href:"https://www.w3.org/TR/wai-aria-practices-1.1/examples/tabs/tabs-2/tabs.html",target:"_blank"},"proper keyboard navigation"),a(" and utilize the following ARIA roles to properly declare element roles, content relationships, and current status:")],-1),M={__name:"tabs.html",setup(c){return(e,k)=>{const d=g("code-well-header"),o=g("component-vue-api"),p=g("component-class-table"),n=g("component-accessible-table");return i(),r("div",null,[t(d,{bgclass:"d-bgc-primary"},{default:h(()=>[t(u)]),_:1}),a(),N,a(),S,a(),t(d,{bgclass:"d-bgc-primary"},{default:h(()=>[t(u)]),_:1}),a(),j,a(),t(d,{bgclass:"d-bgc-primary"},{default:h(()=>[t(u,{"hide-content":""}),a(),t(u,{"hide-content":"",size:"small"})]),_:1}),a(),A,a(),V,a(),t(d,{bgclass:"d-bgc-primary"},{default:h(()=>[t(u,{"hide-content":"",borderless:""}),a(),t(u,{"hide-content":"",size:"small",borderless:""})]),_:1}),a(),L,a(),F,a(),t(d,{bgclass:"d-bgc-contrast"},{default:h(()=>[t(u,{inverted:""})]),_:1}),a(),H,a(),R,a(),t(o,{"component-name":"tabgroup"}),G,a(),t(o,{"component-name":"tabpanel"}),K,a(),t(o,{"component-name":"tab"}),D,a(),t(p,{"component-name":"tabs"}),P,a(),J,a(),t(n,{"component-name":"tabs"})])}}},U=y(M,[["__file","tabs.html.vue"]]);export{U as default};
