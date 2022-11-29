import{_ as f,r as y,o as n,c as t,a,d as b,w as m,b as s,F as l,g as e,u as c,e as w,t as p,f as _}from"./app.696c796c.js";import{coordinateDirections as k,coordinates as q}from"./spacing.0849bac4.js";const E=s("h2",{id:"positive-coordinates",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#positive-coordinates","aria-hidden":"true"},"#"),a(" Positive coordinates")],-1),N=s("h3",null,"Examples",-1),V=s("p",null,[a("Use the "),s("code",null,"top|right|bottom|left|x|y|all"),a(" utility classes to absolutely position elements within the nearest positioned element.")],-1),C=s("div",{class:"d-ps-relative xl:d-h48 xl:d-w48 d-h128 d-w128 d-bar8 d-bgc-purple-200"},[s("div",{class:"d-fl-center d-ps-absolute d-x0 d-t0 d-bgc-purple-300 d-bar4 d-h50p"},"1")],-1),B=s("div",{class:"d-ps-relative xl:d-h48 xl:d-w48 d-h128 d-w128 d-bar8 d-bgc-purple-200"},[s("div",{class:"d-fl-center d-ps-absolute d-y0 d-r0 d-bgc-purple-300 d-bar4 d-w50p"},"2")],-1),A=s("div",{class:"d-ps-relative xl:d-h48 xl:d-w48 d-h128 d-w128 d-bar8 d-bgc-purple-200"},[s("div",{class:"d-fl-center d-ps-absolute d-x0 d-b0 d-bgc-purple-300 d-bar4 d-h50p"},"3")],-1),D=s("div",{class:"d-ps-relative xl:d-h48 xl:d-w48 d-h128 d-w128 d-bar8 d-bgc-purple-200"},[s("div",{class:"d-fl-center d-ps-absolute d-y0 d-l0 d-bgc-purple-300 d-bar4 d-w50p"},"4")],-1),F=s("div",{class:"d-ps-relative xl:d-h48 xl:d-w48 d-h128 d-w128 d-bar8 d-bgc-purple-200"},[s("div",{class:"d-fl-center d-ps-absolute d-all0 d-bgc-purple-300 d-bar4"},"5")],-1),S=s("div",{class:"d-ps-relative xl:d-h48 xl:d-w48 d-h128 d-w128 d-bar8 d-bgc-purple-200"},[s("div",{class:"d-fl-center d-ps-absolute d-l0 d-t0 d-bgc-purple-300 d-bar4 d-w50p d-h50p"},"6")],-1),U=s("div",{class:"d-ps-relative xl:d-h48 xl:d-w48 d-h128 d-w128 d-bar8 d-bgc-purple-200"},[s("div",{class:"d-fl-center d-ps-absolute d-r0 d-t0 d-bgc-purple-300 d-bar4 d-w50p d-h50p"},"7")],-1),L=s("div",{class:"d-ps-relative xl:d-h48 xl:d-w48 d-h128 d-w128 d-bar8 d-bgc-purple-200"},[s("div",{class:"d-fl-center d-ps-absolute d-r0 d-b0 d-bgc-purple-300 d-bar4 d-w50p d-h50p"},"8")],-1),P=s("div",{class:"d-ps-relative xl:d-h48 xl:d-w48 d-h128 d-w128 d-bar8 d-bgc-purple-200"},[s("div",{class:"d-fl-center d-ps-absolute d-l0 d-b0 d-bgc-purple-300 d-bar4 d-w50p d-h50p"},"9")],-1),T=s("div",{class:"d-ps-relative xl:d-h48 xl:d-w48 d-h128 d-w128 d-bar8 d-bgc-purple-200"},[s("div",{class:"d-fl-center d-ps-absolute d-all8 d-bgc-purple-300 d-bar4"},"10")],-1),j=w(`<div class="language-html ext-html"><pre class="language-html"><code>    <span class="token comment">&lt;!-- Example 1 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-ps-relative d-h128 d-w128<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-ps-absolute d-x0 d-t0 d-h50p<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!-- Example 2 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-ps-relative d-h128 d-w128<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-ps-absolute d-y0 d-r0 d-w50p<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!-- Example 3 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-ps-relative d-h128 d-w128<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-ps-absolute d-x0 d-b0 d-h50p<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!-- Example 4 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-ps-relative d-h128 d-w128<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-ps-absolute d-y0 d-l0 d-w50p<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!-- Example 5 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-ps-relative d-h128 d-w128<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-ps-absolute d-all0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!-- Example 6 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-ps-relative d-h128 d-w128<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-ps-absolute d-t0 d-l0 d-w50p d-h50p<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!-- Example 7 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-ps-relative d-h128 d-w128<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-ps-absolute d-t0 d-r0 d-w50p d-h50p<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>7<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!-- Example 8 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-ps-relative d-h128 d-w128<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-ps-absolute d-b0 d-r0 d-w50p d-h50p<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!-- Example 9 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-ps-relative d-h128 d-w128<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-ps-absolute d-b0 d-l0 d-w50p d-h50p<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>9<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!-- Example 10 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-ps-relative d-h128 d-w128<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-ps-absolute d-all8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>10<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3>Classes</h3>`,2),z={class:"d-w100p d-of-auto"},G={class:"d-table dialtone-doc-table"},H=s("th",{scope:"col"},"Value",-1),I={scope:"col"},J={scope:"row"},K={style:{display:"contents"}},M={key:0,class:"d-o50 d-bgc-black-200 d-fc-black-400 d-fs-100 d-ta-center"},O=s("em",null,"N/A",-1),Q=[O],R={key:1,class:"d-ff-mono d-fc-purple-400 d-fs-100"},W={key:0},X={key:1},Y=s("h2",{id:"negative-coordinates",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#negative-coordinates","aria-hidden":"true"},"#"),a(" Negative coordinates")],-1),Z=s("h3",null,"Examples",-1),$=s("p",null,[a("Use the "),s("code",null,"top|right|bottom|left|x|y|all"),a(" utility classes to absolutely position elements within the nearest positioned element.")],-1),ss=s("div",{class:"d-ps-relative xl:d-h48 xl:d-w48 d-h128 d-w128 d-bar8 d-bgc-gold-100"},[s("div",{class:"d-fl-center d-ps-absolute d-xn2 d-tn2 d-bgc-gold-200 d-bar8 d-h50p"},"1")],-1),as=s("div",{class:"d-ps-relative xl:d-h48 xl:d-w48 d-h128 d-w128 d-bar8 d-bgc-gold-100"},[s("div",{class:"d-fl-center d-ps-absolute d-yn2 d-rn2 d-bgc-gold-200 d-bar8 d-w50p"},"2")],-1),ns=s("div",{class:"d-ps-relative xl:d-h48 xl:d-w48 d-h128 d-w128 d-bar8 d-bgc-gold-100"},[s("div",{class:"d-fl-center d-ps-absolute d-xn2 d-bn2 d-bgc-gold-200 d-bar8 d-h50p"},"3")],-1),ts=s("div",{class:"d-ps-relative xl:d-h48 xl:d-w48 d-h128 d-w128 d-bar8 d-bgc-gold-100"},[s("div",{class:"d-fl-center d-ps-absolute d-yn2 d-ln2 d-bgc-gold-200 d-bar8 d-w50p"},"4")],-1),ps=s("div",{class:"d-ps-relative xl:d-h48 xl:d-w48 d-h128 d-w128 d-bar8 d-bgc-gold-100"},[s("div",{class:"d-fl-center d-ps-absolute d-alln2 d-bgc-gold-200 d-bar8"},"5")],-1),os=s("div",{class:"d-ps-relative xl:d-h48 xl:d-w48 d-h128 d-w128 d-bar8 d-bgc-gold-100"},[s("div",{class:"d-fl-center d-ps-absolute d-ln4 d-tn4 d-bgc-gold-200 d-bar8 d-w50p d-h50p"},"6")],-1),ls=s("div",{class:"d-ps-relative xl:d-h48 xl:d-w48 d-h128 d-w128 d-bar8 d-bgc-gold-100"},[s("div",{class:"d-fl-center d-ps-absolute d-rn8 d-tn8 d-bgc-gold-200 d-bar8 d-w50p d-h50p"},"7")],-1),es=s("div",{class:"d-ps-relative xl:d-h48 xl:d-w48 d-h128 d-w128 d-bar8 d-bgc-gold-100"},[s("div",{class:"d-fl-center d-ps-absolute d-rn8 d-bn8 d-bgc-gold-200 d-bar8 d-w50p d-h50p"},"8")],-1),cs=s("div",{class:"d-ps-relative xl:d-h48 xl:d-w48 d-h128 d-w128 d-bar8 d-bgc-gold-100"},[s("div",{class:"d-fl-center d-ps-absolute d-ln4 d-bn4 d-bgc-gold-200 d-bar8 d-w50p d-h50p"},"9")],-1),us=w(`<div class="language-html ext-html"><pre class="language-html"><code><span class="token comment">&lt;!-- Example 1 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-ps-relative d-h128 d-w128<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-ps-absolute d-xn2 d-tn2 d-h50p<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- Example 2 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-ps-relative d-h128 d-w128<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-ps-absolute d-yn2 d-rn2 d-w50p<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- Example 3 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-ps-relative d-h128 d-w128<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-ps-absolute d-xn2 d-bn2 d-h50p<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- Example 4 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-ps-relative d-h128 d-w128<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-ps-absolute d-yn2 d-ln2 d-w50p<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- Example 5 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-ps-relative d-h128 d-w128<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-ps-absolute d-alln2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- Example 6 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-ps-relative d-h128 d-w128<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-ps-absolute d-tn4 d-ln4 d-w50p d-h50p<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- Example 7 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-ps-relative d-h128 d-w128<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-ps-absolute d-tn8 d-rn8 d-w50p d-h50p<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>7<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- Example 8 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-ps-relative d-h128 d-w128<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-ps-absolute d-bn8 d-rn8 d-w50p d-h50p<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- Example 9 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-ps-relative d-h128 d-w128<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-ps-absolute d-bn4 d-ln4 d-w50p d-h50p<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>9<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3>Classes</h3>`,2),ds={class:"d-w100p d-of-auto"},is={class:"d-table dialtone-doc-table"},ks=s("th",{scope:"col"},"Value",-1),rs={scope:"col"},gs={key:0,scope:"row"},vs={style:{display:"contents"}},hs={key:0,class:"d-o50 d-bgc-black-200 d-fc-black-400 d-fs-100 d-ta-center"},bs=s("em",null,"N/A",-1),ms=[bs],_s={key:1,class:"d-ff-mono d-fc-purple-400 d-fs-100"},qs={key:0},ws={key:1},xs={__name:"coordinates.html",setup(fs){return(ys,Es)=>{const v=y("code-well-header");return n(),t("div",null,[E,a(),N,a(),V,a(),b(v,{class:"d-p24 d-bgc-purple-100 d-bgo50 d-w100p d-hmn216 d-d-grid d-g-cols4 d-gg24 d-pi-center sm:d-fs-100 xl:d-fs-200 d-fs-300 d-fw-bold",custom:""},{default:m(()=>[C,a(),B,a(),A,a(),D,a(),F,a(),S,a(),U,a(),L,a(),P,a(),T]),_:1}),a(),j,a(),s("div",z,[s("table",G,[s("thead",null,[s("tr",null,[H,a(),(n(!0),t(l,null,e(c(k),({direction:o})=>(n(),t("th",I,p(o),1))),256))])]),a(),s("tbody",null,[(n(!0),t(l,null,e(c(q),({coordinate:o,suffix:u,combo:r,value:d})=>(n(),t("tr",null,[s("th",J,p(d),1),a(),(n(!0),t(l,null,e(c(k),({direction:h,prefix:g,percent:i})=>(n(),t("div",K,[i==="no"&&r==="no"?(n(),t("td",M,Q)):(n(),t("td",R,[u==="-calc"?(n(),t("span",W,".d-"+p(g)+p(o)+p(u),1)):(n(),t("span",X,".d-"+p(g)+p(o),1))]))]))),256))]))),256))])])]),a(),Y,a(),Z,a(),$,a(),b(v,{class:"d-p24 d-bgc-gold-100 d-bgo50 d-w100p d-hmn216 d-d-grid d-g-cols4 d-gg24 d-pi-center sm:d-fs-100 xl:d-fs-200 d-fs-300 d-fw-bold",custom:""},{default:m(()=>[ss,a(),as,a(),ns,a(),ts,a(),ps,a(),os,a(),ls,a(),es,a(),cs]),_:1}),a(),us,a(),s("div",ds,[s("table",is,[s("thead",null,[s("tr",null,[ks,a(),(n(!0),t(l,null,e(c(k),({direction:o})=>(n(),t("th",rs,p(o),1))),256))])]),a(),s("tbody",null,[(n(!0),t(l,null,e(c(q),({coordinate:o,suffix:u,combo:r,negative:d,value:h})=>(n(),t("tr",null,[d==="yes"?(n(),t("th",gs,p(h),1)):_("",!0),a(),d==="yes"?(n(!0),t(l,{key:1},e(c(k),({direction:g,prefix:i,percent:x})=>(n(),t("div",vs,[x==="no"&&r==="no"?(n(),t("td",hs,ms)):(n(),t("td",_s,[u==="-calc"?(n(),t("span",qs,".d-"+p(i)+"n"+p(o)+p(u),1)):(n(),t("span",ws,".d-"+p(i)+"n"+p(o),1))]))]))),256)):_("",!0)]))),256))])])])])}}};var Cs=f(xs,[["__file","coordinates.html.vue"]]);export{Cs as default};
