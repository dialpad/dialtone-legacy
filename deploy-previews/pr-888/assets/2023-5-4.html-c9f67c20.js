import{B as t,p as o}from"./BlogPost-1dfbf972.js";import{_ as n,v as i,x as r,I as c,C as s,G as l,B as d,H as p,y as e}from"./framework-8b169d2a.js";import"./app-79dfd1a0.js";const u="/deploy-previews/pr-888/assets/storybook-7-code-764808a2.png",h="/deploy-previews/pr-888/assets/storybook-7-docs-bfd1dac8.png",k=e("p",{class:"d-docsite--paragraph"},"Hey everyone, it's been a while! I'd like to bring to your attention some recent updates to Dialtone Vue's infrastructure. This will mostly only affect developers contributing to Dialtone, however there is one small breaking change consumers of Dialtone Vue will need to make after this update if you are using Vue 2.",-1),g=e("p",{class:"d-docsite--paragraph"},"The Dialtone developers will make this update in Dialpad, but if you maintain an app separate from Dialpad you'll have to make this update yourself.",-1),m=e("h2",{id:"breaking-change",tabindex:"-1",class:"d-docsite--header-2"},[s("Breaking change "),e("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#breaking-change","aria-hidden":"true"},"#")],-1),_=e("p",{class:"d-docsite--paragraph"},"Similar to what we have already done with our Vue 3 package, our Dialtone Vue CSS file is now separate from our javascript bundle. You will need to globally include it in your entry point like so:",-1),f=e("div",{class:"language-javascript","data-ext":"js"},[e("pre",{class:"language-javascript"},[e("code",null,[e("span",{class:"token keyword"},"import"),s(),e("span",{class:"token string"},"'@dialpad/dialtone-vue/css'"),e("span",{class:"token punctuation"},";"),s(`
`)])])],-1),y=e("p",{class:"d-docsite--paragraph"},"or within another css file which is loaded at your entry point:",-1),b=e("div",{class:"language-css","data-ext":"css"},[e("pre",{class:"language-css"},[e("code",null,[e("span",{class:"token atrule"},[e("span",{class:"token rule"},"@import"),s(),e("span",{class:"token string"},"'node_modules/@dialpad/dialtone-vue/dist/style.css'"),e("span",{class:"token punctuation"},";")]),s(`
`)])])],-1),v=e("h2",{id:"vite",tabindex:"-1",class:"d-docsite--header-2"},[s("Vite "),e("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#vite","aria-hidden":"true"},"#")],-1),w=e("p",{class:"d-docsite--paragraph"},[s("Dialtone Vue has upgraded from Vue CLI with webpack to "),e("a",{href:"https://vitejs.dev/",class:"d-docsite--link d-link",target:"_blank",rel:"noopener noreferrer"},"Vite"),s(". This gives us a number of benefits mostly performance related:")],-1),x=e("ul",{class:"d-docsite--unordered-list"},[e("li",{class:"d-docsite--list-element"},"Extremely fast local development and hot module replacement"),s(),e("li",{class:"d-docsite--list-element"},"Native ES Modules output build (No more babel transpilation!)"),s(),e("li",{class:"d-docsite--list-element"},"Simpler config")],-1),j=e("p",{class:"d-docsite--paragraph"},[s("You run the local server exactly the same way as before via "),e("code",null,"npm start"),s(". One important change to note is that all Vue files imported in code now must have the "),e("code",null,".vue"),s(" extension included.")],-1),V=e("p",{class:"d-docsite--paragraph"},"You can read more about why we chose vite:",-1),S=e("p",{class:"d-docsite--paragraph"},[e("a",{href:"https://vitejs.dev/guide/why.html",class:"d-docsite--link d-link",target:"_blank",rel:"noopener noreferrer"},"Why Vite?")],-1),D=e("h2",{id:"storybook-7-0",tabindex:"-1",class:"d-docsite--header-2"},[s("Storybook 7.0 "),e("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#storybook-7-0","aria-hidden":"true"},"#")],-1),B=e("p",{class:"d-docsite--paragraph"},`7.0 is Storybook's largest update ever. It has full support for Vite, is easier to develop for, and fixes numerous issues with older version of storybook. My personal favourite is that "view code" examples which had very limited support in the past, now work perfectly for Vue components.`,-1),I=e("p",{class:"d-docsite--paragraph"},[e("img",{src:u,alt:"Storybook 7 docs",class:"d-docsite--image d-wmx100p"})],-1),M=e("p",{class:"d-docsite--paragraph"},"For the most part Dialtone Vue's Storybook should be similar to before. One thing you may notice is that documentation pages have been moved from a tab on the story page to a story entry under the component dropdown in the sidebar.",-1),C=e("p",{class:"d-docsite--paragraph"},[e("img",{src:h,alt:"Storybook 7 docs",class:"d-docsite--image d-wmx100p"})],-1),Y=e("p",{class:"d-docsite--paragraph"},[s("MDX files and stories.js files have also had their syntax changed which I will not go into in great detail, but you can see all the changes in the "),e("a",{href:"https://storybook.js.org/docs/vue/migration-guide",class:"d-docsite--link d-link",target:"_blank",rel:"noopener noreferrer"},"Storybook 7 migration guide"),s(".")],-1),J=e("p",{class:"d-docsite--paragraph"},[s("This will also allow us to do some cool stuff in the future, such as "),e("a",{href:"https://storybook.js.org/docs/react/essentials/interactions",class:"d-docsite--link d-link",target:"_blank",rel:"noopener noreferrer"},"interaction tests"),s(".")],-1),N=e("h2",{id:"jest",tabindex:"-1",class:"d-docsite--header-2"},[s("Jest "),e("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#jest","aria-hidden":"true"},"#")],-1),T=e("p",{class:"d-docsite--paragraph"},[s("We have migrated from Mocha to "),e("a",{href:"https://jestjs.io/",class:"d-docsite--link d-link",target:"_blank",rel:"noopener noreferrer"},"Jest"),s(" to modernize our testing infrastructure. We were having many problems with Mocha and it is becoming quite dated. We no longer have to include separate libraries for assertions and mocking (chai, sinon) as Jest is an all-in-one framework.")],-1),E=e("p",{class:"d-docsite--paragraph"},'Syntax between Mocha and Jest is quite similar, the main place you will notice a difference is when making assertions. Jest has more of a "chained" style syntax:',-1),q=e("p",{class:"d-docsite--paragraph"},"mocha (chai):",-1),W=e("div",{class:"language-javascript","data-ext":"js"},[e("pre",{class:"language-javascript"},[e("code",null,[s("assert"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"isTrue"),e("span",{class:"token punctuation"},"("),s("button"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"classes"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"includes"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},"'d-btn--danger'"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),s(`
`)])])],-1),$=e("p",{class:"d-docsite--paragraph"},"jest:",-1),F=e("div",{class:"language-javascript","data-ext":"js"},[e("pre",{class:"language-javascript"},[e("code",null,[e("span",{class:"token function"},"expect"),e("span",{class:"token punctuation"},"("),s("button"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"classes"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"includes"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},"'d-btn--danger'"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"toBe"),e("span",{class:"token punctuation"},"("),e("span",{class:"token boolean"},"true"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),s(`
`)])])],-1),H=e("p",{class:"d-docsite--paragraph"},[s("see more details on "),e("a",{href:"https://jestjs.io/docs/expect",class:"d-docsite--link d-link",target:"_blank",rel:"noopener noreferrer"},"expect syntax")],-1),O=e("h2",{id:"module-mode",tabindex:"-1",class:"d-docsite--header-2"},[s("Module mode "),e("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#module-mode","aria-hidden":"true"},"#")],-1),P=e("p",{class:"d-docsite--paragraph"},[s("Dialtone Vue now runs in native ES modules mode, meaning that by default files with extension "),e("code",null,".js"),s(" must be written with ES module import syntax:")],-1),z=e("div",{class:"language-javascript","data-ext":"js"},[e("pre",{class:"language-javascript"},[e("code",null,[e("span",{class:"token keyword"},"import"),s(" x "),e("span",{class:"token keyword"},"from"),s(),e("span",{class:"token string"},"'dialtone-vue'"),s(`
`)])])],-1),G=e("p",{class:"d-docsite--paragraph"},"If for some reason you need a file in CommonJS syntax:",-1),L=e("div",{class:"language-javascript","data-ext":"js"},[e("pre",{class:"language-javascript"},[e("code",null,[e("span",{class:"token keyword"},"const"),s(" x "),e("span",{class:"token operator"},"="),s(),e("span",{class:"token function"},"require"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},"'dialtone-vue'"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},"."),s("x"),e("span",{class:"token punctuation"},";"),s(`
`)])])],-1),X=e("p",{class:"d-docsite--paragraph"},[s("it must have extension "),e("code",null,".cjs"),s(" instead of "),e("code",null,".js"),s(". You will see some config files in Dialtone Vue that have this extension.")],-1),A=e("h2",{id:"currently-open-branches",tabindex:"-1",class:"d-docsite--header-2"},[s("Currently open branches "),e("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#currently-open-branches","aria-hidden":"true"},"#")],-1),K=e("p",{class:"d-docsite--paragraph"},"If you have any currently open branches you are working on in Dialtone Vue, it's likely you will get many conflicts when merging staging into your branch. I (Brad Paugh) can help you out with fixing these. Just send me a message on Slack or Dialpad.",-1),Q=e("p",{class:"d-docsite--paragraph"},[s("Finally with such a large change it is likely you may see some bugs in our Storybook, please "),e("a",{href:"https://dialpad.atlassian.net/secure/CreateIssue.jspa?issuetype=10878&pid=12428",class:"d-docsite--link d-link",target:"_blank",rel:"noopener noreferrer"},"report these"),s(" if you see them.")],-1),R={__name:"2023-5-4.html",setup(U){return(a,Z)=>(i(),r("div",null,[c(" Note the date must be in this format YYYY-M-D and wrapped in single quotes "),s(),l(t,{author:a.$frontmatter.author,posted:p(o)(a.$frontmatter.posted,"y-M-d",new Date),heading:a.$frontmatter.heading},{default:d(()=>[k,s(),g,s(),m,s(),_,s(),f,y,s(),b,v,s(),w,s(),x,s(),j,s(),V,s(),S,s(),D,s(),B,s(),I,s(),M,s(),C,s(),Y,s(),J,s(),N,s(),T,s(),E,s(),q,s(),W,$,s(),F,H,s(),O,s(),P,s(),z,G,s(),L,X,s(),A,s(),K,s(),Q]),_:1},8,["author","posted","heading"])]))}},te=n(R,[["__file","2023-5-4.html.vue"]]);export{te as default};
