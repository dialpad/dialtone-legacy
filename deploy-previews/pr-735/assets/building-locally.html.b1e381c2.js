import{_ as s,r as l,o as i,c as d,b as e,a as n,d as o,e as t}from"./app.8e5c4f12.js";const c={},r={href:"https://github.com/dialpad/dialtone/blob/master/.github/CONTRIBUTING.md",target:"_blank",rel:"noopener noreferrer"},h=e("h2",{id:"install-node-npm",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#install-node-npm","aria-hidden":"true"},"#"),n(" Install Node & npm")],-1),u={href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"},p=e("p",null,"Once Node finishes installing, ensure it is installed properly by typing the following command in your Terminal window:",-1),g=e("div",{class:"language-bash ext-sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"node"),n(),e("span",{class:"token parameter variable"},"-v"),n(`
`)])])],-1),_=e("p",null,"You should see the following response:",-1),b=e("div",{class:"language-bash ext-sh"},[e("pre",{class:"language-bash"},[e("code",null,`v14.16.1
`)])],-1),m=e("h2",{id:"clone-project",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#clone-project","aria-hidden":"true"},"#"),n(" Clone project")],-1),f=e("p",null,"Download the project:",-1),v=e("div",{class:"language-bash ext-sh"},[e("pre",{class:"language-bash"},[e("code",null,[n(`// SSH
`),e("span",{class:"token function"},"git"),n(` clone git@github.com:dialpad/dialtone.git

// HTTPS
`),e("span",{class:"token function"},"git"),n(` clone https://github.com/dialpad/dialtone.git
`)])])],-1),k=e("p",null,[n("Then "),e("code",null,"cd"),n(" into the Dialtone directory:")],-1),y=t(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> ./path/to/dialtone
</code></pre></div><h2 id="install-dependencies" tabindex="-1"><a class="header-anchor" href="#install-dependencies" aria-hidden="true">#</a> Install dependencies</h2>`,2),x={href:"https://gulpjs.com/",target:"_blank",rel:"noopener noreferrer"},N=t(`<div class="language-bash ext-sh"><pre class="language-bash"><code>    <span class="token function">npm</span> <span class="token function">install</span>
</code></pre></div><h2 id="building-dialtone" tabindex="-1"><a class="header-anchor" href="#building-dialtone" aria-hidden="true">#</a> Building Dialtone</h2>`,2),w=e("p",null,"You're now ready to build Dialtone! To build and run the development server:",-1),T=e("div",{class:"language-bash ext-sh"},[e("pre",{class:"language-bash"},[e("code",null,[n("    "),e("span",{class:"token function"},"npm"),n(` start
`)])])],-1),j=e("p",null,[n("Once finished, visit "),e("code",null,"http://localhost:4000/"),n(".")],-1);function D(I,B){const a=l("ExternalLinkIcon");return i(),d("div",null,[e("p",null,[n("We're excited you want to install Dialtone locally as this most likely means you'll be contributing soon! Before you get to get started though,  "),e("strong",null,[n("please make sure you've read our "),e("a",r,[n("contributing docs"),o(a)])]),n(".")]),n(),h,n(),e("p",null,[n("To run Dialtone locally, you must have Node and NPM (Node Packet Manager) installed. "),e("a",u,[n("Click here to download Node"),o(a)]),n(". The recommended Node version is fine. NPM is included with Node. If you already have Node installed, you may move onto the next step.")]),n(),p,n(),g,_,n(),b,m,n(),f,n(),v,k,n(),y,n(),e("p",null,[n("Dialtone uses "),e("a",x,[n("Gulp"),o(a)]),n(" to automate its various workflows. Run the following command to install Gulp and all other project dependencies:")]),n(),N,n(),w,n(),T,j])}var P=s(c,[["render",D],["__file","building-locally.html.vue"]]);export{P as default};
