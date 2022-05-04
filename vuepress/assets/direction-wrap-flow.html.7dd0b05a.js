import{wrap as w,flow as u,direction as _}from"./flex.0972db06.js";import{_ as b,r as v,a as l,b as d,F as r,f as i,u as f,d as p,w as h,e as t,c as g,o as s,t as e}from"./app.935ad005.js";const m=d("h2",{id:"flex-direction",tabindex:"-1"},[d("a",{class:"header-anchor",href:"#flex-direction","aria-hidden":"true"},"#"),t(" Flex Direction")],-1),x=d("p",null,[t("The "),d("code",null,"flex-direction"),t(" property declares a flex container\u2019s main axis direction. The default value is row.")],-1),y={class:"d-table"},k=d("thead",null,[d("tr",null,[d("th",{scope:"col",class:"d-w20p"},"Class"),d("th",{scope:"col",class:"d-w30p"},"Output"),d("th",{scope:"col"},"Description")])],-1),F={scope:"row",class:"d-ff-mono d-fc-purple d-fw-normal d-fs12"},T={class:"d-ff-mono d-fc-orange d-fs12"},C=d("div",{class:"d-d-flex d-fd-row-reverse d-w100p d-bar8 d-bgc-purple-100"},[d("div",{class:"d-fl-center d-m8 d-p16 d-w64 d-h64 d-bgc-purple-500 d-bar4 d-fs24 d-fc-white d-fw-bold"},"1"),d("div",{class:"d-fl-center d-m8 d-p16 d-w64 d-h64 d-bgc-purple-500 d-bar4 d-fs24 d-fc-white d-fw-bold"},"2"),d("div",{class:"d-fl-center d-m8 d-p16 d-w64 d-h64 d-bgc-purple-500 d-bar4 d-fs24 d-fc-white d-fw-bold"},"3")],-1),D=d("div",{class:"d-d-flex d-fd-row d-w100p d-mt16 d-bar8 d-bgc-purple-100"},[d("div",{class:"d-fl-center d-m8 d-p16 d-w64 d-h64 d-bgc-purple-500 d-bar4 d-fs24 d-fc-white d-fw-bold"},"1"),d("div",{class:"d-fl-center d-m8 d-p16 d-w64 d-h64 d-bgc-purple-500 d-bar4 d-fs24 d-fc-white d-fw-bold"},"2"),d("div",{class:"d-fl-center d-m8 d-p16 d-w64 d-h64 d-bgc-purple-500 d-bar4 d-fs24 d-fc-white d-fw-bold"},"3")],-1),B=d("div",{class:"language-html ext-html"},[d("pre",{class:"language-html"},[d("code",null,`<div class="d-d-flex d-fd-row-reverse">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
<div class="d-d-flex d-fd-row">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
`)])],-1),N=d("h2",{id:"flex-wrap",tabindex:"-1"},[d("a",{class:"header-anchor",href:"#flex-wrap","aria-hidden":"true"},"#"),t(" Flex Wrap")],-1),V=d("p",null,[t("The "),d("code",null,"flex-wrap"),t(" property declares a flex container\u2019s wrapping status. The default value is nowrap.")],-1),q={class:"d-table"},O=d("thead",null,[d("tr",null,[d("th",{scope:"col",class:"d-w20p"},"Class"),d("th",{scope:"col",class:"d-w30p"},"Output"),d("th",{scope:"col"},"Description")])],-1),S={scope:"row",class:"d-ff-mono d-fc-purple d-fw-normal d-fs12"},W={class:"d-ff-mono d-fc-orange d-fs12"},E=d("div",{class:"d-d-flex d-fw-wrap d-w100p d-bar8 d-bgc-pink-100"},[d("div",{class:"d-fl-center d-m8 d-p16 d-w25p d-h64 d-bgc-pink-400 d-bar4 d-fs24 d-fw-bold"},"1"),d("div",{class:"d-fl-center d-m8 d-p16 d-w50p d-h64 d-bgc-pink-400 d-bar4 d-fs24 d-fw-bold"},"2"),d("div",{class:"d-fl-center d-m8 d-p16 d-w75p d-h64 d-bgc-pink-400 d-bar4 d-fs24 d-fw-bold"},"3")],-1),L=g(`<div class="language-html ext-html"><pre class="language-html"><code>&lt;div class=&quot;d-d-flex d-fw-wrap&quot;&gt;
  &lt;div&gt;1&lt;/div&gt;
  &lt;div&gt;2&lt;/div&gt;
  &lt;div&gt;3&lt;/div&gt;
&lt;/div&gt;
</code></pre></div><h2 id="flex-flow" tabindex="-1"><a class="header-anchor" href="#flex-flow" aria-hidden="true">#</a> Flex Flow</h2><p>The <code>flex-flow</code> property is a shorthand property that sets allows you to quickly set the above <code>flex-direction</code> and <code>flex-wrap</code> properties. By default all flex containers are set to <code>row</code> and <code>nowrap</code>.</p>`,3),j={class:"d-table"},z=d("thead",null,[d("tr",null,[d("th",{scope:"col",class:"d-w20p"},"Class"),d("th",{scope:"col",class:"d-w30p"},"Output"),d("th",{scope:"col"},"Description")])],-1),A={scope:"row",class:"d-ff-mono d-fc-purple d-fw-normal d-fs12"},G={class:"d-ff-mono d-fc-orange d-fs12"},H=d("div",{class:"d-d-flex d-ff-row-reverse-wrap d-w100p d-bar8 d-bgc-orange-100"},[d("div",{class:"d-fl-center d-m8 d-p16 d-w25p d-h64 d-bgc-orange-400 d-bar4 d-fs24 d-fw-bold"},"1"),d("div",{class:"d-fl-center d-m8 d-p16 d-w50p d-h64 d-bgc-orange-400 d-bar4 d-fs24 d-fw-bold"},"2"),d("div",{class:"d-fl-center d-m8 d-p16 d-w75p d-h64 d-bgc-orange-400 d-bar4 d-fs24 d-fw-bold"},"3")],-1),I=d("div",{class:"language-html ext-html"},[d("pre",{class:"language-html"},[d("code",null,`<div class="d-d-flex d-ff-row-reverse-wrap">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
`)])],-1),J={setup(K){return(M,P)=>{const n=v("code-well-header");return s(),l(r,null,[m,x,d("table",y,[k,d("tbody",null,[(s(!0),l(r,null,i(f(_),({class:o,output:c,description:a})=>(s(),l("tr",null,[d("th",F,".d-"+e(o),1),d("td",T,e(c),1),d("td",null,e(a),1)]))),256))])]),p(n,{class:"d-fl-center d-fd-column d-p24 d-bgc-purple-100 d-bgo50 d-w100p d-hmn216"},{default:h(()=>[C,D]),_:1}),B,N,V,d("table",q,[O,d("tbody",null,[(s(!0),l(r,null,i(f(w),({class:o,output:c,description:a})=>(s(),l("tr",null,[d("th",S,".d-"+e(o),1),d("td",W,e(c),1),d("td",null,e(a),1)]))),256))])]),p(n,{class:"d-fl-center d-fd-column d-p24 d-bgc-pink-100 d-bgo50 d-w100p d-hmn216"},{default:h(()=>[E]),_:1}),L,d("table",j,[z,d("tbody",null,[(s(!0),l(r,null,i(f(u),({class:o,output:c,description:a})=>(s(),l("tr",null,[d("th",A,".d-"+e(o),1),d("td",G,e(c),1),d("td",null,e(a),1)]))),256))])]),p(n,{class:"d-fl-center d-fd-column d-p24 d-bgc-orange-100 d-bgo50 d-w100p d-hmn216"},{default:h(()=>[H]),_:1}),I],64)}}};var U=b(J,[["__file","direction-wrap-flow.html.vue"]]);export{U as default};
