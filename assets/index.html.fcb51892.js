import{_ as p,r as u,o as s,q as f,w as n,d as i,h as v,u as h,c as l,F as w,f as k,b as y}from"./app.57456386.js";import{r as B,t as _,B as P,f as b,p as c}from"./BlogPost.d2d08582.js";function D(t,o){B(2,arguments);var r=_(t),a=_(o),e=r.getTime()-a.getTime();return e>0?-1:e<0?1:e}const M={__name:"BlogPostPreview",props:{posted:{type:Date,required:!0},heading:{type:String,required:!0},author:{type:String,required:!0}},setup(t){return(o,r)=>{const a=u("dt-card"),e=u("dt-link"),d=u("router-link");return s(),f(d,{to:`/about/whats_new/posts/${h(b)(t.posted,"y-M-d")}`,custom:""},{default:n(({navigate:m})=>[i(e,{class:"d-td-none d-fc-unset d-d-block",href:"`/about/whats_new/posts/${format(posted, 'y-M-d')}`",onClick:g=>{m(g)}},{default:n(()=>[i(a,{class:"d-mt72 h:d-bgc-black-200"},{content:n(()=>[i(P,{author:t.author,heading:t.heading,posted:t.posted,"is-preview":!0},{default:n(()=>[v(o.$slots,"default")]),_:3},8,["author","heading","posted"])]),_:3})]),_:2},1032,["onClick"])]),_:3},8,["to"])}}};var x=p(M,[["__file","BlogPostPreview.vue"]]);const q=["innerHTML"],$={__name:"index.html",setup(t){const o=function(r,a){const e=c(r.posted,"y-M-d",new Date),d=c(a.posted,"y-M-d",new Date);return D(e,d)};return(r,a)=>(s(),l("div",null,[(s(!0),l(w,null,k(r.$page.blogPosts.sort(o),e=>(s(),f(x,{key:e.posted,author:e.author,heading:e.heading,posted:h(c)(e.posted,"y-M-d",new Date)},{default:n(()=>[y("span",{innerHTML:e.firstParagraph},null,8,q)]),_:2},1032,["author","heading","posted"]))),128))]))}};var T=p($,[["__file","index.html.vue"]]);export{T as default};
