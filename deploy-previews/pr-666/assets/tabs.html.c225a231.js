import{_ as y,o as i,c as k,a as l,F as v,f as _,n as m,t as f,y as b,m as w,d as p,x,b as n,w as g,e as q,r as h}from"./app.1c704d56.js";const T={name:"ExampleTabs",props:{size:{type:String,default:""},borderless:{type:Boolean,default:!1},inverted:{type:Boolean,default:!1},hideContent:{type:Boolean,default:!1}},data(){return{focusId:null,selected:0,tabNames:["First","Second","Third"],tabs:[]}},mounted(){this.tabs=this.getTabChildren()},methods:{getTabChildren(){return Array.from(this.$refs.tabs.children).map(a=>({context:a}))},focusTab(c){this.focusId=c,this.tabs[c].context.focus()},selectTab(c){this.selected=c},tabLeft(){this.focusId!==0&&this.focusTab(this.focusId-1)},tabRight(){this.focusId!==this.tabs.length-1&&this.focusTab(this.focusId+1)},onHomeButton(){this.focusTab(0)},onEndButton(){this.focusTab(this.tabs.length-1)}}},B={class:"d-d-flex d-fd-column d-w100p d-stack16"},C=["id","aria-selected","aria-controls","tabindex","onClick"],E=p(),I={key:0},N=["id","aria-labelledby","hidden"];function S(c,a,r,d,e,t){return i(),k("div",B,[l("div",{ref:"tabs",class:m(["d-tablist",{"d-tablist--sm":r.size==="small","d-tablist--no-border":r.borderless,"d-tablist--inverted":r.inverted}]),role:"tablist","aria-label":"Label Example Group",tabindex:"0",onKeydown:[a[0]||(a[0]=b((...s)=>t.tabLeft&&t.tabLeft(...s),["left"])),a[1]||(a[1]=b((...s)=>t.tabRight&&t.tabRight(...s),["right"])),a[2]||(a[2]=b(s=>t.selectTab(e.focusId),["enter"])),a[3]||(a[3]=b(s=>t.selectTab(e.focusId),["space"])),a[4]||(a[4]=b(x((...s)=>t.onHomeButton&&t.onHomeButton(...s),["prevent"]),["home"])),a[5]||(a[5]=b(x((...s)=>t.onEndButton&&t.onEndButton(...s),["prevent"]),["end"]))]},[(i(!0),k(v,null,_(e.tabNames,(s,o)=>(i(),k("button",{id:`base-tab-${o}`,key:s,class:m(["d-tab",{"d-tab--selected":e.selected===o}]),role:"tab","aria-selected":e.selected===o,"aria-controls":`base-panel-${o}`,tabindex:e.selected===o?0:-1,onClick:W=>t.selectTab(o)},f(s)+` tab
      `,11,C))),128))],34),E,r.hideContent?w("",!0):(i(),k("div",I,[(i(!0),k(v,null,_(e.tabNames,(s,o)=>(i(),k("div",{id:`base-panel-${o}`,key:s,role:"tabpanel",tabindex:"0","aria-labelledby":`base-tab-${o}`,hidden:e.selected!==o},[l("p",{class:m({"d-fc-white":r.inverted})},f(s)+` tab content panel
        `,3)],8,N))),128))]))])}var u=y(T,[["render",S],["__file","ExampleTabs.vue"]]);const j=p(),z=l("h2",{id:"variants-and-examples",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#variants-and-examples","aria-hidden":"true"},"#"),p(" Variants and Examples")],-1),A=p(),L=l("h3",null,"Base Styles",-1),V=p(),F=q(` <div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-tablist js-tablist<span class="token punctuation">&quot;</span></span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tablist<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Label Example Group<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
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
</code></pre></div><h3>Sizes</h3> `,4),R=p(),H=q(` <div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-tablist<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u2026<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-tablist d-tablist--sm<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u2026<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3>Border</h3> <p>Add a <code>d-tablist--no-border</code> to remove the bottom border of any tablist. Handy for small tablists and tablists serving as subtabs to a larger menu.</p> `,6),G=p(),K=q(` <div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-tablist d-tablist--no-border<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u2026<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-tablist d-tablist--sm d-tablist--no-border<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u2026<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3>Inverted</h3> <p>Add <code>d-tablist--inverted</code> when you want to display tabs on a darker background.</p> `,6),D=q(` <div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-tablist d-tablist--inverted<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u2026<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="classes" tabindex="-1"><a class="header-anchor" href="#classes" aria-hidden="true">#</a> Classes</h2> `,4),M=p(),J=l("h2",{id:"accessibility",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#accessibility","aria-hidden":"true"},"#"),p(" Accessibility")],-1),O=p(),P=l("p",null,[p("To create accessible tabs, be sure to implement the "),l("a",{href:"https://www.w3.org/TR/wai-aria-practices-1.1/examples/tabs/tabs-2/tabs.html",target:"_blank"},"proper keyboard navigation"),p(" and utilize the following ARIA roles to properly declare element roles, content relationships, and current status:")],-1),Q=p(),U={__name:"tabs.html",setup(c){return(a,r)=>{const d=h("code-well-header"),e=h("component-class-table"),t=h("component-accessible-table");return i(),k("div",null,[n(d,{bgclass:"d-bgc-white"},{default:g(()=>[n(u)]),_:1}),j,z,A,L,V,n(d,{bgclass:"d-bgc-white"},{default:g(()=>[n(u)]),_:1}),F,n(d,{bgclass:"d-bgc-white"},{default:g(()=>[n(u,{"hide-content":""}),R,n(u,{"hide-content":"",size:"small"})]),_:1}),H,n(d,{bgclass:"d-bgc-white"},{default:g(()=>[n(u,{"hide-content":"",borderless:""}),G,n(u,{"hide-content":"",size:"small",borderless:""})]),_:1}),K,n(d,{bgclass:"d-bgc-black-800"},{default:g(()=>[n(u,{inverted:""})]),_:1}),D,n(e,{"component-name":"tabs"}),M,J,O,P,Q,n(t,{"component-name":"tabs"})])}}};var Y=y(U,[["__file","tabs.html.vue"]]);export{Y as default};
