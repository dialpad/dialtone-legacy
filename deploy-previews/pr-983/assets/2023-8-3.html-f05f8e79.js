import{p as n,B as o}from"./BlogPost-26e00c69.js";import{_ as i,v as s,x as d,I as l,D as a,y as r,z as c,H as h,G as e}from"./framework-2f6ab852.js";import"./app-05af9b35.js";const p=e("p",{class:"d-docsite--paragraph"},[a("As many of you already know, Dialtone 8 has been available on a separate branch for a while now and is being used in our primary applications. The migration to Dialtone 8 has been completed on Dialpad Meetings and is currently in progress for Dialpad. As of today we are promoting Dialtone 8 to the main branch. This means you no longer have to use the @next tag for Dialtone and Dialtone Vue and can update to the main branch in your applications. No further updates will be made to Dialtone 7 except for maybe emergency bug fixes. Dialtone 8 documentation will now exist on "),e("a",{href:"https://dialpad.design",class:"d-docsite--link d-link",target:"_blank",rel:"noopener noreferrer"},"https://dialpad.design"),a(". You may still see the documentation site for Dialtone 7 at "),e("a",{href:"https://dialpad.design/legacy",class:"d-docsite--link d-link",target:"_blank",rel:"noopener noreferrer"},"https://dialpad.design/legacy")],-1),u=e("h2",{id:"what-s-new-in-dialtone-8",tabindex:"-1",class:"d-docsite--header-2"},[a("What's new in Dialtone 8? "),e("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#what-s-new-in-dialtone-8","aria-hidden":"true"},"#")],-1),g=e("p",{class:"d-docsite--paragraph"},[a("The core feature of Dialtone 8 is the adoption of "),e("a",{href:"https://specifyapp.com/blog/introduction-to-design-tokens",class:"d-docsite--link d-link",target:"_blank",rel:"noopener noreferrer"},"Design Tokens"),a(". Design Tokens are independently stored and output values of the design system that offer a number of benefits:")],-1),m=e("ul",{class:"d-docsite--unordered-list"},[e("li",{class:"d-docsite--list-element"},[e("p",{class:"d-docsite--paragraph"},"Synchronized Naming: If a designer uses a design token in their figma design to set a color, the developer could use the design token of the same name in the code to use that same color.")]),a(),e("li",{class:"d-docsite--list-element"},[e("p",{class:"d-docsite--paragraph"},"Theming: Since our design tokens come with a new semantic color system, this allows us to theme applications any way we want, such as dark mode which is being released this week. This will perhaps even allow for user created themes in the future.")]),a(),e("li",{class:"d-docsite--list-element"},[e("p",{class:"d-docsite--paragraph"},"Multi-platform Support: Enables us to use the same design language on all our platforms. Dialpad, Dialpad Meetings, Web, Android, iOS, any other existing or future platforms.")]),a(),e("li",{class:"d-docsite--list-element"},[e("p",{class:"d-docsite--paragraph"},"Design is controlled by Designers: Designers can now make changes to tokens directly in figma, their changes there can be released to the dialtone-tokens repo and will affect the design language of all of our apps using design tokens.")]),a(),e("li",{class:"d-docsite--list-element"},[e("p",{class:"d-docsite--paragraph"},"Documentation: Every single available core design system value is documented and easy to find in our tokens documentation.")])],-1),f=e("h2",{id:"how-do-i-migrate",tabindex:"-1",class:"d-docsite--header-2"},[a("How do I migrate? "),e("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#how-do-i-migrate","aria-hidden":"true"},"#")],-1),_=e("p",{class:"d-docsite--paragraph"},[a("Pretty much every single variable name in Dialtone has changed due to the new tokens, so this will require a migration in consuming applications. The Dialpad Meetings migration has been completed and the Dialpad migration is underway. If you maintain a project separate from that we have a script that can assist you greatly in migrating. Please follow the "),e("a",{href:"https://github.com/dialpad/dialtone/blob/staging/migration_guide/Dialtone_8.md",class:"d-docsite--link d-link",target:"_blank",rel:"noopener noreferrer"},"Dialtone 8 migration guide"),a(" in order to migrate.")],-1),y=e("h2",{id:"how-do-i-upgrade-to-the-main-branch-release",tabindex:"-1",class:"d-docsite--header-2"},[a("How do I upgrade to the main branch release? "),e("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#how-do-i-upgrade-to-the-main-branch-release","aria-hidden":"true"},"#")],-1),w=e("h3",{id:"dialtone",tabindex:"-1",class:"d-docsite--header-3"},[a("Dialtone "),e("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#dialtone","aria-hidden":"true"},"#")],-1),k=e("p",{class:"d-docsite--paragraph"},"If you were running a dialtone-next installation alongside dialtone for migration purposes, uninstall the dialtone-next branch, if not, ignore this step:",-1),b=e("div",{class:"language-cmd","data-ext":"cmd"},[e("pre",{class:"language-cmd"},[e("code",null,`npm uninstall @dialpad/dialtone-next
`)])],-1),v=e("p",{class:"d-docsite--paragraph"},"now install the latest version of the main branch:",-1),D=e("div",{class:"language-cmd","data-ext":"cmd"},[e("pre",{class:"language-cmd"},[e("code",null,`npm install @dialpad/dialtone@latest
`)])],-1),x=e("p",{class:"d-docsite--paragraph"},'If you have not yet fully completed the migration to dialtone 8, you may still need dialtone 7 until your migration is complete. If this is the case you can install dialtone 7 alongside dialtone 8 named as "dialtone-legacy" in the same way we did with dialtone-next before:',-1),V=e("div",{class:"language-cmd","data-ext":"cmd"},[e("pre",{class:"language-cmd"},[e("code",null,`npm install @dialpad/dialtone-legacy@npm:@dialpad/dialtone@legacy
`)])],-1),T=e("p",{class:"d-docsite--paragraph"},"You will have to update any old dialtone imports to reference dialtone-legacy and any dialtone-next imports to reference regular dialtone.",-1),I=e("div",{class:"language-cmd","data-ext":"cmd"},[e("pre",{class:"language-cmd"},[e("code",null,`@import "./node_modules/@dialpad/dialtone/lib/dist/css/dialtone.css";
`)])],-1),N=e("p",{class:"d-docsite--paragraph"},"Note that we no longer output less files as part of our package. Dialtone 8 is purely CSS and should be used as such.",-1),M=e("h3",{id:"dialtone-vue",tabindex:"-1",class:"d-docsite--header-3"},[a("Dialtone Vue "),e("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#dialtone-vue","aria-hidden":"true"},"#")],-1),Y=e("p",{class:"d-docsite--paragraph"},[a("You may have been using the "),e("code",null,"next"),a(" or "),e("code",null,"next-vue3"),a(" branch which was the version of Dialtone Vue that implements Dialtone 8. If so you can simply update this to the latest version now:")],-1),S=e("div",{class:"language-cmd","data-ext":"cmd"},[e("pre",{class:"language-cmd"},[e("code",null,`// Vue 2
npm install @dialpad/dialtone-vue@latest

// Vue 3
npm install @dialpad/dialtone-vue@vue3
`)])],-1),B=e("p",{class:"d-docsite--paragraph"},"Dialtone Vue will not be incrementing a major version with this release. If you would like to use the most recent version of Dialtone Vue compatible with Dialtone 7 please use:",-1),q=e("div",{class:"language-cmd","data-ext":"cmd"},[e("pre",{class:"language-cmd"},[e("code",null,`// Vue 2
npm install @dialpad/dialtone-vue@legacy

// Vue 3
npm install @dialpad/dialtone-vue@legacy-vue3
`)])],-1),A=e("h2",{id:"next-steps",tabindex:"-1",class:"d-docsite--header-2"},[a("Next steps "),e("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#next-steps","aria-hidden":"true"},"#")],-1),E=e("p",{class:"d-docsite--paragraph"},[a("Dialtone 8's documentation is not yet fully complete, and we will be working over the next couple of months to get it to where it needs to be. However, please check out the new "),e("a",{href:"/tokens/",class:"d-docsite--link d-link",target:"_blank",rel:"noopener noreferrer"},"Dialtone tokens documentation page"),a(", which documents all available Dialtone tokens.")],-1),H=e("p",{class:"d-docsite--paragraph"},"We will be developing tooling over the next quarter to promote Dialtone adoption in consuming applications. This will likely come in the form of linter rules and diagnostic health scripts. The goal is to get our applications using Dialtone correctly, and as much as possible.",-1),j=e("p",{class:"d-docsite--paragraph"},"Thanks for everyone's support in this migration and I hope everyone enjoys the implementation of our biggest feature request, DARK MODE! 🌔",-1),C={__name:"2023-8-3.html",setup(P){return(t,W)=>(s(),d("div",null,[l(" Note the date must be in this format YYYY-M-D and wrapped in single quotes "),a(),r(o,{author:t.$frontmatter.author,posted:h(n)(t.$frontmatter.posted,"y-M-d",new Date),heading:t.$frontmatter.heading},{default:c(()=>[p,a(),u,a(),g,a(),m,a(),f,a(),_,a(),y,a(),w,a(),k,a(),b,v,a(),D,x,a(),V,T,a(),I,N,a(),M,a(),Y,a(),S,B,a(),q,A,a(),E,a(),H,a(),j]),_:1},8,["author","posted","heading"])]))}},G=i(C,[["__file","2023-8-3.html.vue"]]);export{G as default};
