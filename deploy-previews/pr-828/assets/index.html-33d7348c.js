import{r as b,t as l,B as w,f as k,p as i}from"./BlogPost-f0fee29b.js";import{_,s as u,v as s,A as f,B as n,G as c,L as v,I as h,x as p,F as y,z as B,y as P}from"./framework-8a6d41ce.js";function D(t,o){b(2,arguments);var r=l(t),a=l(o),e=r.getTime()-a.getTime();return e>0?-1:e<0?1:e}const x={__name:"BlogPostPreview",props:{posted:{type:Date,required:!0},heading:{type:String,required:!0},author:{type:String,required:!0}},setup(t){return(o,r)=>{const a=u("dt-card"),e=u("dt-link"),d=u("router-link");return s(),f(d,{to:`/about/whats-new/posts/${h(k)(t.posted,"y-M-d")}`,custom:""},{default:n(({navigate:m})=>[c(e,{class:"d-fc-unset d-d-block d-bar8",href:"`/about/whats-new/posts/${format(posted, 'y-M-d')}`",onClick:g=>{m(g)}},{default:n(()=>[c(a,{class:"d-mt16 d-bgc-primary d-bs-none h:d-bs-sm d-ba d-bar8 d-bbw1 d-bc-black-300"},{content:n(()=>[c(w,{author:t.author,heading:t.heading,posted:t.posted,"is-preview":!0},{default:n(()=>[v(o.$slots,"default")]),_:3},8,["author","heading","posted"])]),_:3})]),_:2},1032,["onClick"])]),_:3},8,["to"])}}},M=_(x,[["__file","BlogPostPreview.vue"]]),L=["innerHTML"],$={__name:"index.html",setup(t){const o=function(r,a){const e=i(r.posted,"y-M-d",new Date),d=i(a.posted,"y-M-d",new Date);return D(e,d)};return(r,a)=>(s(),p("div",null,[(s(!0),p(y,null,B(r.$page.blogPosts.sort(o),e=>(s(),f(M,{key:e.posted,author:e.author,heading:e.heading,posted:h(i)(e.posted,"y-M-d",new Date)},{default:n(()=>[P("span",{innerHTML:e.firstParagraph},null,8,L)]),_:2},1032,["author","heading","posted"]))),128))]))}},T=_($,[["__file","index.html.vue"]]);export{T as default};
