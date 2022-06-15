import{_ as y,o as i,c as k,a as l,F as v,f as _,n as h,t as f,y as b,q as x,l as w,e as n,r as m,b as s,w as g,d as q}from"./app.2da01da2.js";const T={name:"example-tabs",data(){return{focusId:null,selected:0,tabNames:["First","Second","Third"],tabs:[]}},props:{size:{type:String,default:""},borderless:{type:Boolean,default:!1},inverted:{type:Boolean,default:!1},hideContent:{type:Boolean,default:!1}},mounted(){this.tabs=this.getTabChildren()},methods:{getTabChildren(){return Array.from(this.$refs.tabs.children).map(a=>({context:a}))},focusTab(c){this.focusId=c,this.tabs[c].context.focus()},selectTab(c){this.selected=c},tabLeft(){this.focusId!==0&&this.focusTab(this.focusId-1)},tabRight(){this.focusId!==this.tabs.length-1&&this.focusTab(this.focusId+1)},onHomeButton(){this.focusTab(0)},onEndButton(){this.focusTab(this.tabs.length-1)}}},B={class:"d-d-flex d-fd-column d-w100p d-stack16"},C=["aria-selected","aria-controls","id","tabindex","onClick"],z=n(),E={key:0},I=["id","aria-labelledby","hidden"];function N(c,a,r,d,p,t){return i(),k("div",B,[l("div",{class:h(["d-tablist",{"d-tablist--sm":r.size==="small","d-tablist--no-border":r.borderless,"d-tablist--inverted":r.inverted}]),role:"tablist",ref:"tabs","aria-label":"Label Example Group",onKeydown:[a[0]||(a[0]=b((...e)=>t.tabLeft&&t.tabLeft(...e),["left"])),a[1]||(a[1]=b((...e)=>t.tabRight&&t.tabRight(...e),["right"])),a[2]||(a[2]=b(e=>t.selectTab(p.focusId),["enter"])),a[3]||(a[3]=b(e=>t.selectTab(p.focusId),["space"])),a[4]||(a[4]=b(x((...e)=>t.onHomeButton&&t.onHomeButton(...e),["prevent"]),["home"])),a[5]||(a[5]=b(x((...e)=>t.onEndButton&&t.onEndButton(...e),["prevent"]),["end"]))]},[(i(!0),k(v,null,_(p.tabNames,(e,o)=>(i(),k("button",{class:h(["d-tab",{"d-tab--selected":p.selected===o}]),role:"tab","aria-selected":p.selected===o,"aria-controls":`base-panel-${o}`,id:`base-tab-${o}`,tabindex:p.selected===o?0:-1,onClick:W=>t.selectTab(o)},f(e)+` tab
      `,11,C))),256))],34),z,r.hideContent?w("",!0):(i(),k("div",E,[(i(!0),k(v,null,_(p.tabNames,(e,o)=>(i(),k("div",{id:`base-panel-${o}`,role:"tabpanel",tabindex:"0","aria-labelledby":`base-tab-${o}`,hidden:p.selected!==o},[l("p",{class:h({"d-fc-white":r.inverted})},f(e)+" tab content panel",3)],8,I))),256))]))])}var u=y(T,[["render",N],["__file","ExampleTabs.vue"]]);const S=n(),j=l("h2",{id:"variants-and-examples",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#variants-and-examples","aria-hidden":"true"},"#"),n(" Variants and Examples")],-1),A=n(),L=l("h3",{id:"base-styles",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#base-styles","aria-hidden":"true"},"#"),n(" Base Styles")],-1),V=n(),F=q(` <div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-tablist js-tablist<span class="token punctuation">&quot;</span></span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tablist<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Label Example Group<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
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
</code></pre></div><h3 id="sizes" tabindex="-1"><a class="header-anchor" href="#sizes" aria-hidden="true">#</a> Sizes</h3> `,4),R=n(),H=q(` <div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-tablist<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u2026<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-tablist d-tablist--sm<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u2026<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="border" tabindex="-1"><a class="header-anchor" href="#border" aria-hidden="true">#</a> Border</h3> <p>Add a <code>d-tablist--no-border</code> to remove the bottom border of any tablist. Handy for small tablists and tablists serving as subtabs to a larger menu.</p> `,6),G=n(),K=q(` <div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-tablist d-tablist--no-border<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u2026<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-tablist d-tablist--sm d-tablist--no-border<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u2026<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="inverted" tabindex="-1"><a class="header-anchor" href="#inverted" aria-hidden="true">#</a> Inverted</h3> <p>Add <code>d-tablist--inverted</code> when you want to display tabs on a darker background.</p> `,6),D=q(` <div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-tablist d-tablist--inverted<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u2026<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="classes" tabindex="-1"><a class="header-anchor" href="#classes" aria-hidden="true">#</a> Classes</h2> `,4),M=n(),J=l("h2",{id:"accessibility",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#accessibility","aria-hidden":"true"},"#"),n(" Accessibility")],-1),O=n(),P=l("p",null,[n("To create accessible tabs, be sure to implement the "),l("a",{href:"https://www.w3.org/TR/wai-aria-practices-1.1/examples/tabs/tabs-2/tabs.html",target:"_blank"},"proper keyboard navigation"),n(" and utilize the following ARIA roles to properly declare element roles, content relationships, and current status:")],-1),Q=n(),U={__name:"tabs.html",setup(c){return(a,r)=>{const d=m("code-well-header"),p=m("component-class-table"),t=m("component-accessible-table");return i(),k("div",null,[s(d,{bgclass:"d-bgc-white"},{default:g(()=>[s(u)]),_:1}),S,j,A,L,V,s(d,{bgclass:"d-bgc-white"},{default:g(()=>[s(u)]),_:1}),F,s(d,{bgclass:"d-bgc-white"},{default:g(()=>[s(u,{"hide-content":""}),R,s(u,{"hide-content":"",size:"small"})]),_:1}),H,s(d,{bgclass:"d-bgc-white"},{default:g(()=>[s(u,{"hide-content":"",borderless:""}),G,s(u,{"hide-content":"",size:"small",borderless:""})]),_:1}),K,s(d,{bgclass:"d-bgc-black-800"},{default:g(()=>[s(u,{inverted:""})]),_:1}),D,s(p,{"component-name":"tabs"}),M,J,O,P,Q,s(t,{"component-name":"tabs"})])}}};var Y=y(U,[["__file","tabs.html.vue"]]);export{Y as default};
