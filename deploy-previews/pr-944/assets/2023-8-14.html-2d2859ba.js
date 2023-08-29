import{p as t,B as o}from"./BlogPost-5075dcae.js";import{_ as n,v as i,x as l,I as r,C as a,G as d,B as c,H as p,y as e}from"./framework-ad20bcb4.js";import"./app-8660dd59.js";const u=e("p",{class:"d-docsite--paragraph"},`Hey everyone, I'd like communicate some recent updates to Dialtone's infrastructure.
There is one small breaking change that consumers of Dialtone Vue will need to make after this update.`,-1),h=e("p",{class:"d-docsite--paragraph"},"The Dialtone developers will make this update in Dialpad, but if you maintain an app separate from Dialpad you'll have to make this update yourself.",-1),m=e("h2",{id:"breaking-change",tabindex:"-1",class:"d-docsite--header-2"},[a("Breaking change "),e("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#breaking-change","aria-hidden":"true"},"#")],-1),g=e("p",{class:"d-docsite--paragraph"},"Dialtone Vue's CSS file is now bundled into Dialtone's CSS file, so you no longer need to import Dialtone Vue's CSS file into your code, please remove any of the following lines:",-1),_=e("div",{class:"language-javascript","data-ext":"js"},[e("pre",{class:"language-javascript"},[e("code",null,[e("span",{class:"token keyword"},"import"),a(),e("span",{class:"token string"},"'@dialpad/dialtone-vue/css'"),e("span",{class:"token punctuation"},";"),a(`
`)])])],-1),f=e("p",{class:"d-docsite--paragraph"},"or within another css file:",-1),k=e("div",{class:"language-css","data-ext":"css"},[e("pre",{class:"language-css"},[e("code",null,[e("span",{class:"token atrule"},[e("span",{class:"token rule"},"@import"),a(),e("span",{class:"token string"},"'node_modules/@dialpad/dialtone-vue/dist/style.css'"),e("span",{class:"token punctuation"},";")]),a(`
`)])])],-1),v={__name:"2023-8-14.html",setup(y){return(s,D)=>(i(),l("div",null,[r(" Note the date must be in this format YYYY-M-D and wrapped in single quotes "),a(),d(o,{author:s.$frontmatter.author,posted:p(t)(s.$frontmatter.posted,"y-M-d",new Date),heading:s.$frontmatter.heading},{default:c(()=>[u,a(),h,a(),m,a(),g,a(),_,f,a(),k]),_:1},8,["author","posted","heading"])]))}},V=n(v,[["__file","2023-8-14.html.vue"]]);export{V as default};
