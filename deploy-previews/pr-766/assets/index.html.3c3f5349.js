import{r as w,t as l,B as k,f as v,p as i}from"./BlogPost.b8d891e9.js";import{_ as p,r as u,o as s,m as f,w as n,e as c,g as y,z as h,c as _,F as B,y as P,b}from"./app.9251e3cc.js";function D(t,o){w(2,arguments);var r=l(t),a=l(o),e=r.getTime()-a.getTime();return e>0?-1:e<0?1:e}const M={__name:"BlogPostPreview",props:{posted:{type:Date,required:!0},heading:{type:String,required:!0},author:{type:String,required:!0}},setup(t){return(o,r)=>{const a=u("dt-card"),e=u("dt-link"),d=u("router-link");return s(),f(d,{to:`/about/whats-new/posts/${h(v)(t.posted,"y-M-d")}`,custom:""},{default:n(({navigate:m})=>[c(e,{class:"d-td-none d-fc-unset d-d-block",href:"`/about/whats-new/posts/${format(posted, 'y-M-d')}`",onClick:g=>{m(g)}},{default:n(()=>[c(a,{class:"d-mt72 h:d-bgc-black-200"},{content:n(()=>[c(k,{author:t.author,heading:t.heading,posted:t.posted,"is-preview":!0},{default:n(()=>[y(o.$slots,"default")]),_:3},8,["author","heading","posted"])]),_:3})]),_:2},1032,["onClick"])]),_:3},8,["to"])}}},x=p(M,[["__file","BlogPostPreview.vue"]]),$=["innerHTML"],q={__name:"index.html",setup(t){const o=function(r,a){const e=i(r.posted,"y-M-d",new Date),d=i(a.posted,"y-M-d",new Date);return D(e,d)};return(r,a)=>(s(),_("div",null,[(s(!0),_(B,null,P(r.$page.blogPosts.sort(o),e=>(s(),f(x,{key:e.posted,author:e.author,heading:e.heading,posted:h(i)(e.posted,"y-M-d",new Date)},{default:n(()=>[b("span",{innerHTML:e.firstParagraph},null,8,$)]),_:2},1032,["author","heading","posted"]))),128))]))}},T=p(q,[["__file","index.html.vue"]]);export{T as default};
