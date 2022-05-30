import{_ as s,r as l,o as i,c as d,a as n,b as a,F as c,e,d as t}from"./app.02516445.js";const r={},h=e("We're excited you want to install Dialtone locally as this most likely means you'll be contributing soon! Before you get to get started though,  "),p=e("please make sure you've read our "),u={href:"https://github.com/dialpad/dialtone/blob/master/.github/CONTRIBUTING.md",target:"_blank",rel:"noopener noreferrer"},g=e("contributing docs"),_=e("."),b=e(),m=n("h2",{id:"install-node-npm",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#install-node-npm","aria-hidden":"true"},"#"),e(" Install Node & npm")],-1),f=e(),v=e("To run Dialtone locally, you must have Node and NPM (Node Packet Manager) installed. "),y={href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"},k=e("Click here to download Node"),x=e(". The recommended Node version is fine. NPM is included with Node. If you already have Node installed, you may move onto the next step."),N=t(` <p>Once Node finishes installing, ensure it is installed properly by typing the following command in your Terminal window:</p> <div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">node</span> -v
</code></pre></div><p>You should see the following response:</p> <div class="language-bash ext-sh"><pre class="language-bash"><code>v14.16.1
</code></pre></div><h2 id="clone-project" tabindex="-1"><a class="header-anchor" href="#clone-project" aria-hidden="true">#</a> Clone Project</h2> <p>Download the project:</p> <div class="language-bash ext-sh"><pre class="language-bash"><code>// SSH
<span class="token function">git</span> clone git@github.com:dialpad/dialtone.git

// HTTPS
<span class="token function">git</span> clone https://github.com/dialpad/dialtone.git
</code></pre></div><p>Then <code>cd</code> into the Dialtone directory:</p> <div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> ./path/to/dialtone
</code></pre></div><h2 id="install-dependencies" tabindex="-1"><a class="header-anchor" href="#install-dependencies" aria-hidden="true">#</a> Install Dependencies</h2> `,17),w=e("Dialtone uses "),T={href:"https://gulpjs.com/",target:"_blank",rel:"noopener noreferrer"},D=e("Gulp"),j=e(" to automate its various workflows. Run the following command to install Gulp and all other project dependencies:"),I=t(` <div class="language-bash ext-sh"><pre class="language-bash"><code>    <span class="token function">npm</span> <span class="token function">install</span>
</code></pre></div><h2 id="building-dialtone" tabindex="-1"><a class="header-anchor" href="#building-dialtone" aria-hidden="true">#</a> Building Dialtone</h2> <p>You&#39;re now ready to build Dialtone! To build and run the development server:</p> <div class="language-bash ext-sh"><pre class="language-bash"><code>    <span class="token function">npm</span> start
</code></pre></div><p>Once finished, visit <code>http://localhost:4000/</code>.</p>`,8);function B(P,C){const o=l("ExternalLinkIcon");return i(),d(c,null,[n("p",null,[h,n("strong",null,[p,n("a",u,[g,a(o)])]),_]),b,m,f,n("p",null,[v,n("a",y,[k,a(o)]),x]),N,n("p",null,[w,n("a",T,[D,a(o)]),j]),I],64)}var V=s(r,[["render",B],["__file","building-locally.html.vue"]]);export{V as default};
