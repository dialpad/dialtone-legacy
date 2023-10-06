import{_,s as c,v as u,x as i,y as n,z as p,G as s,D as a,I as q,F as k,A as r,K as o}from"./framework-ed6939a0.js";const f={class:"d-d-flex d-ai-center d-flow16"},x=s("h2",{id:"usage",tabindex:"-1",class:"d-docsite--header-2"},[a("Usage "),s("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#usage","aria-hidden":"true"},"#")],-1),b={class:"d-table dialtone-doc-table d-mb16"},z=s("colgroup",null,[s("col",{class:"d-w64"}),a(),s("col"),a(),s("col"),a(),s("col")],-1),w=s("thead",null,[s("tr",null,[s("th",{colspan:"2"},"Type"),a(),s("th",null,"Usage")])],-1),y=s("th",{class:"d-ta-left"},[s("a",{class:"d-link",href:"#icon"},"Icon")],-1),A=s("td",null,"When no username can be associated with the Avatar.",-1),P=s("th",{class:"d-ta-left"},[s("a",{class:"d-link",href:"#initials"},"Initials")],-1),I=s("td",null,"When the user's name is known.",-1),W=s("th",{class:"d-ta-left"},[s("a",{class:"d-link",href:"#image"},"Image")],-1),V=s("td",null,"When a custom image has been uploaded.",-1),$=s("th",{class:"d-ta-left"},[s("a",{class:"d-link",href:"#group"},"Group")],-1),C=s("td",null,"When reflecting more than 2 participants.",-1),D=s("h2",{id:"variants-and-examples",tabindex:"-1",class:"d-docsite--header-2"},[a("Variants and examples "),s("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#variants-and-examples","aria-hidden":"true"},"#")],-1),N=s("h3",{id:"icon",tabindex:"-1",class:"d-docsite--header-3"},[a("Icon "),s("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#icon","aria-hidden":"true"},"#")],-1),G=o(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-avatar d-avatar--{$size}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-avatar__canvas<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-avatar__icon<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="initials" tabindex="-1" class="d-docsite--header-3">Initials <a class="header-anchor d-link d-docsite--link d-link" href="#initials" aria-hidden="true">#</a></h3>`,2),B=o(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-avatar d-avatar--{$size} d-avatar--{$color}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-avatar__canvas<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-avatar__initials<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>DP<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="image" tabindex="-1" class="d-docsite--header-3">Image <a class="header-anchor d-link d-docsite--link d-link" href="#image" aria-hidden="true">#</a></h3>`,2),F=o(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-avatar d-avatar--{$size}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-avatar__canvas<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-avatar__image<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/path/to/image<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="sizes" tabindex="-1" class="d-docsite--header-3">Sizes <a class="header-anchor d-link d-docsite--link d-link" href="#sizes" aria-hidden="true">#</a></h3>`,2),E={class:"d-d-inline-flex d-ai-center d-flow8"},S=o(`<div class="language-html" data-ext="html"><pre class="language-html"><code>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-avatar d-avatar--xs<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        ...
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-avatar d-avatar--sm<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        ...
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-avatar d-avatar--md<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        ...
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-avatar d-avatar--lg<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        ...
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-avatar d-avatar--xl<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        ...
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="group" tabindex="-1" class="d-docsite--header-3">Group <a class="header-anchor d-link d-docsite--link d-link" href="#group" aria-hidden="true">#</a></h3>`,2),T={class:"d-d-inline-flex d-ai-center d-flow8"},U=o(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-avatar d-avatar--group<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-avatar__canvas<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-avatar__image<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/assets/images/person.png<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-avatar__count<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-avatar__count-number<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>12<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-avatar d-avatar--group<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-avatar__canvas<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-avatar__image<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/assets/images/person.png<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-avatar__count<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-avatar__count-number<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="presence" tabindex="-1" class="d-docsite--header-3">Presence <a class="header-anchor d-link d-docsite--link d-link" href="#presence" aria-hidden="true">#</a></h3>`,2),H=s("p",{class:"d-docsite--paragraph"},[a("Positions the "),s("a",{href:"/components/presence.html",class:"d-docsite--link d-link",target:"_blank",rel:"noopener noreferrer"},"Presence"),a(" component at each size.")],-1),J={class:"d-d-inline-flex d-ai-center d-flow8"},K={class:"d-d-inline-flex d-ai-center d-flow8"},L=o(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-avatar d-avatar--{$size)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-avatar__canvas<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        ...
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-avatar__presence<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-presence<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-presence__inner d-presence__inner--{$status}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="vue-api" tabindex="-1" class="d-docsite--header-2">Vue API <a class="header-anchor d-link d-docsite--link d-link" href="#vue-api" aria-hidden="true">#</a></h2>`,2),R=s("h2",{id:"classes",tabindex:"-1",class:"d-docsite--header-2"},[a("Classes "),s("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#classes","aria-hidden":"true"},"#")],-1),j=s("h2",{id:"accessibility",tabindex:"-1",class:"d-docsite--header-2"},[a("Accessibility "),s("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#accessibility","aria-hidden":"true"},"#")],-1),M=s("p",{class:"d-docsite--paragraph"},"Initial avatars' background and font color combinations have been paired to ensure minimum contrast is met.",-1),O=s("p",{class:"d-docsite--paragraph"},`When it comes to voiceover, avatars accompanying a label should generally be considered decorative,
is not focusable, nor is it read out. An example is a user's avatar next to their name.`,-1),Q=s("p",{class:"d-docsite--paragraph"},[a(`Avatars unaccompanied by labels, especially those representing functionality or navigation, should be focusable and
read out in voiceover. Please refer
to `),s("a",{href:"https://www.w3.org/WAI/tutorials/images/decorative",class:"d-docsite--link d-link",target:"_blank",rel:"noopener noreferrer"},"WCAG"),a(` references for
your specific usage.`)],-1),X={__name:"avatar.html",setup(Y){const d=["100","200","300","400","500","600","700","800","900","1000","1100","1200","1300","1400","1500","1600","1700","1800"],g=["xs","sm","md","lg","xl"];return(Z,aa)=>{const t=c("dt-avatar"),e=c("code-well-header"),v=c("dt-stack"),m=c("component-vue-api"),h=c("component-class-table");return u(),i("div",null,[n(e,null,{default:p(()=>[s("div",f,[n(t,{size:"lg","icon-name":"user","icon-size":"500"}),a(),n(t,{size:"lg","full-name":"dp",color:"1000",presence:"busy"}),a(),n(t,{size:"lg","image-src":"/assets/images/person.png","image-alt":"avatar user",presence:"active"})])]),_:1}),a(),q(' <component-combinator component-name="DtAvatar" /> '),a(),x,a(),s("table",b,[z,a(),w,a(),s("tbody",null,[s("tr",null,[s("td",null,[n(t,{"icon-name":"user","icon-size":"400"})]),a(),y,a(),A]),a(),s("tr",null,[s("td",null,[n(t,{"full-name":"DP",color:"1600"})]),a(),P,a(),I]),a(),s("tr",null,[s("td",null,[n(t,{"image-alt":"user avatar","image-src":"/assets/images/person.png"})]),a(),W,a(),V]),a(),s("tr",null,[s("td",null,[n(t,{"image-src":"/assets/images/person.png","image-alt":"person avatar",group:"3"})]),a(),$,a(),C])])]),a(),D,a(),N,a(),n(e,null,{default:p(()=>[n(t,{"icon-name":"user","icon-size":"300"})]),_:1}),a(),G,a(),n(e,null,{default:p(()=>[n(v,{direction:"row",gap:"500",class:"d-wmx50p d-fw-wrap"},{default:p(()=>[(u(),i(k,null,r(d,l=>n(t,{color:l,"full-name":"DP"},null,8,["color"])),64))]),_:1})]),_:1}),a(),B,a(),n(e,null,{default:p(()=>[n(t,{"image-src":"/assets/images/person.png","image-alt":"avatar user"})]),_:1}),a(),F,a(),n(e,null,{default:p(()=>[s("div",E,[(u(),i(k,null,r(g,l=>n(t,{size:l,"icon-name":"user"},null,8,["size"])),64))])]),_:1}),a(),S,a(),n(e,null,{default:p(()=>[s("div",T,[n(t,{group:"11","image-src":"/assets/images/person.png","image-alt":"Person Avatar"}),a(),n(t,{group:"3","image-src":"/assets/images/person.png","image-alt":"Person Avatar"})])]),_:1}),a(),U,a(),H,a(),n(e,null,{default:p(()=>[s("div",J,[n(t,{size:"xs",presence:"active","image-src":"/assets/images/person.png","image-alt":"Person Avatar"}),a(),n(t,{size:"sm",presence:"away","image-src":"/assets/images/person.png","image-alt":"Person Avatar"}),a(),n(t,{size:"md",presence:"busy","image-src":"/assets/images/person.png","image-alt":"Person Avatar"}),a(),n(t,{size:"lg",presence:"offline","image-src":"/assets/images/person.png","image-alt":"Person Avatar"}),a(),n(t,{size:"xl","image-src":"/assets/images/person.png","image-alt":"Person Avatar"})]),a(),s("div",K,[n(t,{size:"xs",presence:"active",color:"1200"}),a(),n(t,{size:"sm",presence:"away",color:"500","full-name":"W"}),a(),n(t,{size:"md",presence:"busy",color:"800","full-name":"FR"}),a(),n(t,{size:"lg",presence:"offline",color:"1200","full-name":"JH"}),a(),n(t,{size:"xl",color:"1500","full-name":"AE"})])]),_:1}),a(),L,a(),n(m,{"component-name":"avatar"}),R,a(),n(h,{"component-name":"avatar"}),j,a(),M,a(),O,a(),Q])}}},na=_(X,[["__file","avatar.html.vue"]]);export{na as default};
