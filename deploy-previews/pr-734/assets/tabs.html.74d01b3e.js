import{_ as y,o as i,c as k,b as e,F as v,f,n as m,t as _,x as b,B as x,a,q as w,r as h,d as t,w as g,e as q}from"./app.56727463.js";const T={name:"ExampleTabs",props:{size:{type:String,default:""},borderless:{type:Boolean,default:!1},inverted:{type:Boolean,default:!1},hideContent:{type:Boolean,default:!1}},data(){return{focusId:null,selected:0,tabNames:["First","Second","Third"],tabs:[]}},mounted(){this.tabs=this.getTabChildren()},methods:{getTabChildren(){return Array.from(this.$refs.tabs.children).map(s=>({context:s}))},focusTab(c){this.focusId=c,this.tabs[c].context.focus()},selectTab(c){this.selected=c},tabLeft(){this.focusId!==0&&this.focusTab(this.focusId-1)},tabRight(){this.focusId!==this.tabs.length-1&&this.focusTab(this.focusId+1)},onHomeButton(){this.focusTab(0)},onEndButton(){this.focusTab(this.tabs.length-1)}}},B={class:"d-d-flex d-fd-column d-w100p d-stack16"},C=["id","aria-selected","aria-controls","tabindex","onClick"],E={key:0},I=["id","aria-labelledby","hidden"];function N(c,s,r,d,o,p){return i(),k("div",B,[e("div",{ref:"tabs",class:m(["d-tablist",{"d-tablist--sm":r.size==="small","d-tablist--no-border":r.borderless,"d-tablist--inverted":r.inverted}]),role:"tablist","aria-label":"Label Example Group",tabindex:"0",onKeydown:[s[0]||(s[0]=b((...n)=>p.tabLeft&&p.tabLeft(...n),["left"])),s[1]||(s[1]=b((...n)=>p.tabRight&&p.tabRight(...n),["right"])),s[2]||(s[2]=b(n=>p.selectTab(o.focusId),["enter"])),s[3]||(s[3]=b(n=>p.selectTab(o.focusId),["space"])),s[4]||(s[4]=b(x((...n)=>p.onHomeButton&&p.onHomeButton(...n),["prevent"]),["home"])),s[5]||(s[5]=b(x((...n)=>p.onEndButton&&p.onEndButton(...n),["prevent"]),["end"]))]},[(i(!0),k(v,null,f(o.tabNames,(n,l)=>(i(),k("button",{id:`base-tab-${l}`,key:n,class:m(["d-tab",{"d-tab--selected":o.selected===l}]),role:"tab","aria-selected":o.selected===l,"aria-controls":`base-panel-${l}`,tabindex:o.selected===l?0:-1,onClick:D=>p.selectTab(l)},_(n)+` tab
      `,11,C))),128))],34),a(),r.hideContent?w("",!0):(i(),k("div",E,[(i(!0),k(v,null,f(o.tabNames,(n,l)=>(i(),k("div",{id:`base-panel-${l}`,key:n,role:"tabpanel",tabindex:"0","aria-labelledby":`base-tab-${l}`,hidden:o.selected!==l},[e("p",{class:m({"d-fc-white":r.inverted})},_(n)+` tab content panel
        `,3)],8,I))),128))]))])}var u=y(T,[["render",N],["__file","ExampleTabs.vue"]]);const S=e("h2",{id:"variants-and-examples",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#variants-and-examples","aria-hidden":"true"},"#"),a(" Variants and examples")],-1),j=e("h3",null,"Base Styles",-1),z=q(`<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-tablist js-tablist<span class="token punctuation">&quot;</span></span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tablist<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Label Example Group<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
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
</code></pre></div><h3>Sizes</h3>`,2),A=q(`<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-tablist<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u2026<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-tablist d-tablist--sm<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u2026<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3>Border</h3>`,2),L=e("p",null,[a("Add a "),e("code",null,"d-tablist--no-border"),a(" to remove the bottom border of any tablist. Handy for small tablists and tablists serving as subtabs to a larger menu.")],-1),V=q(`<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-tablist d-tablist--no-border<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u2026<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-tablist d-tablist--sm d-tablist--no-border<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u2026<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3>Inverted</h3>`,2),F=e("p",null,[a("Add "),e("code",null,"d-tablist--inverted"),a(" when you want to display tabs on a darker background.")],-1),R=q(`<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-tablist d-tablist--inverted<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u2026<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="classes" tabindex="-1"><a class="header-anchor" href="#classes" aria-hidden="true">#</a> Classes</h2>`,2),H=e("h2",{id:"accessibility",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#accessibility","aria-hidden":"true"},"#"),a(" Accessibility")],-1),G=e("p",null,[a("To create accessible tabs, be sure to implement the "),e("a",{href:"https://www.w3.org/TR/wai-aria-practices-1.1/examples/tabs/tabs-2/tabs.html",target:"_blank"},"proper keyboard navigation"),a(" and utilize the following ARIA roles to properly declare element roles, content relationships, and current status:")],-1),K={__name:"tabs.html",setup(c){return(s,r)=>{const d=h("code-well-header"),o=h("component-class-table"),p=h("component-accessible-table");return i(),k("div",null,[t(d,{bgclass:"d-bgc-white"},{default:g(()=>[t(u)]),_:1}),a(),S,a(),j,a(),t(d,{bgclass:"d-bgc-white"},{default:g(()=>[t(u)]),_:1}),a(),z,a(),t(d,{bgclass:"d-bgc-white"},{default:g(()=>[t(u,{"hide-content":""}),a(),t(u,{"hide-content":"",size:"small"})]),_:1}),a(),A,a(),L,a(),t(d,{bgclass:"d-bgc-white"},{default:g(()=>[t(u,{"hide-content":"",borderless:""}),a(),t(u,{"hide-content":"",size:"small",borderless:""})]),_:1}),a(),V,a(),F,a(),t(d,{bgclass:"d-bgc-black-800"},{default:g(()=>[t(u,{inverted:""})]),_:1}),a(),R,a(),t(o,{"component-name":"tabs"}),a(),H,a(),G,a(),t(p,{"component-name":"tabs"})])}}};var J=y(K,[["__file","tabs.html.vue"]]);export{J as default};
