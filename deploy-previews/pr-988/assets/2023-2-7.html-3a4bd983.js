import{p as s,B as e}from"./BlogPost-5c64dbfa.js";import{_ as o,v as c,x as p,I as l,D as t,y as u,z as i,H as k,G as a}from"./framework-a6876821.js";import"./app-4c9832b1.js";const r=a("p",{class:"d-docsite--paragraph"},[t("We would like to report a small breaking change to avatar in Dialtone v7.16.0. This will only affect HTML/CSS implementations of the avatar. Any usage of the "),a("code",null,"DtAvatar"),t(" Vue component will not be broken by this change.")],-1),d=a("p",{class:"d-docsite--paragraph"},"If you previously had an HTML/CSS avatar showing initials structured like this:",-1),g=a("div",{class:"language-html","data-ext":"html"},[a("pre",{class:"language-html"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),t("div")]),t(),a("span",{class:"token attr-name"},"class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),t("d-avatar d-avatar--md"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),t(`
  DP
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),t("div")]),a("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),h=a("p",{class:"d-docsite--paragraph"},[t("It now needs to have an additional wrapper div with class "),a("code",null,"d-avatar__canvas"),t(" and an additional span with class "),a("code",null,"d-avatar__initials"),t(" wrapping the initials.")],-1),v=a("div",{class:"language-html","data-ext":"html"},[a("pre",{class:"language-html"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),t("div")]),t(),a("span",{class:"token attr-name"},"class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),t("d-avatar d-avatar--md"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),t(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),t("div")]),t(),a("span",{class:"token attr-name"},"class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),t("d-avatar__canvas"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),t(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),t("span")]),t(),a("span",{class:"token attr-name"},"class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),t("d-avatar__initials"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),t("DP"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),t("span")]),a("span",{class:"token punctuation"},">")]),t(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),t("div")]),a("span",{class:"token punctuation"},">")]),t(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),t("div")]),a("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),m=a("p",{class:"d-docsite--paragraph"},"If you previously had an HTML/CSS avatar with an icon in it like so:",-1),_=a("div",{class:"language-html","data-ext":"html"},[a("pre",{class:"language-html"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),t("div")]),t(),a("span",{class:"token attr-name"},"class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),t("d-avatar d-avatar--md"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),t(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),t("dt-icon")]),t(),a("span",{class:"token attr-name"},"name"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),t("video"),a("span",{class:"token punctuation"},'"')]),t(),a("span",{class:"token attr-name"},"size"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),t("300"),a("span",{class:"token punctuation"},'"')]),t(),a("span",{class:"token punctuation"},"/>")]),t(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),t("div")]),a("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),f=a("p",{class:"d-docsite--paragraph"},[t("It now needs to have an additional wrapper div with class "),a("code",null,"d-avatar__canvas"),t(" and an additional span with class "),a("code",null,"d-avatar__icon"),t(" wrapping the icon.")],-1),w=a("div",{class:"language-html","data-ext":"html"},[a("pre",{class:"language-html"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),t("div")]),t(),a("span",{class:"token attr-name"},"class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),t("d-avatar d-avatar--md"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),t(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),t("div")]),t(),a("span",{class:"token attr-name"},"class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),t("d-avatar__canvas"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),t(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),t("span")]),t(),a("span",{class:"token attr-name"},"class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),t("d-avatar__icon"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),t(`
        `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),t("dt-icon")]),t(),a("span",{class:"token attr-name"},"name"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),t("video"),a("span",{class:"token punctuation"},'"')]),t(),a("span",{class:"token attr-name"},"size"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),t("300"),a("span",{class:"token punctuation"},'"')]),t(),a("span",{class:"token punctuation"},"/>")]),t(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),t("span")]),a("span",{class:"token punctuation"},">")]),t(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),t("div")]),a("span",{class:"token punctuation"},">")]),t(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),t("div")]),a("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),y=a("p",{class:"d-docsite--paragraph"},[t("Ideally just upgrade any elements affected by this to the "),a("a",{href:"https://vue.dialpad.design/?path=/story/components-avatar--default",class:"d-docsite--link d-link",target:"_blank",rel:"noopener noreferrer"},"avatar vue component"),t(". If that is not possible then modify the HTML to reflect the above structure. Thanks!")],-1),q={__name:"2023-2-7.html",setup(b){return(n,x)=>(c(),p("div",null,[l(" Note the date must be in this format YYYY-M-D and wrapped in single quotes "),t(),u(e,{author:n.$frontmatter.author,posted:k(s)(n.$frontmatter.posted,"y-M-d",new Date),heading:n.$frontmatter.heading},{default:i(()=>[r,t(),d,t(),g,h,t(),v,m,t(),_,f,t(),w,y]),_:1},8,["author","posted","heading"])]))}},M=o(q,[["__file","2023-2-7.html.vue"]]);export{M as default};
