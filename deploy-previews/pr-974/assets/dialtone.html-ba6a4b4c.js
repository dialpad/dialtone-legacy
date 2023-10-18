import{D as _,M as C}from"./app-5a8113e2.js";import{R as w}from"./utilities-3473487f.js";import{_ as b,k as S,v as c,x as h,A as m,G as t,E as R,D as e,F as g,y as s,s as k,z as n,K as V}from"./framework-2f6ab852.js";const j=["href"],N={class:"d-docsite--header-3"},I={class:"d-docsite--unordered-list"},A={__name:"DialtoneChangelog",props:{project:{type:String,default:"Dialtone",validator(d){return Object.keys(_).includes(d)}}},setup(d){const u=d,p=S(()=>_[u.project].json_file),i=o=>p.value.versions[o].version,a=()=>_[u.project].url_handler,v=o=>`https://github.com/dialpad/${a()}/releases/tag/v${i(o)}`,y=o=>{const r=Object.create(w);return r.note=o,r.project_url_handler=a(),r.format()};return(o,r)=>(c(),h(g,null,m(5,(ne,l)=>t("div",{key:l,class:"dialtone-release-notes"},[t("a",{href:v(l),class:"d-link"},[t("h3",N,"v"+R(i(l)),1)],8,j),e(),t("ul",I,[(c(!0),h(g,null,m(p.value.versions[l].parsed._,(x,D)=>(c(),h("li",{key:D,class:"d-docsite--list-element"},[s(C,{markdown:y(x)},null,8,["markdown"])]))),128))])])),64))}},f=b(A,[["__file","DialtoneChangelog.vue"]]),G=t("h2",{id:"release-notes",tabindex:"-1",class:"d-docsite--header-2"},[e("Release notes "),t("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#release-notes","aria-hidden":"true"},"#")],-1),U={class:"d-d-grid d-gg16 d-g-cols2 md:d-g-cols1"},B=t("h3",{class:"d-docsite--header-3"},"Dialtone",-1),F=t("a",{class:"d-d-inline-flex d-pt12",href:"https://github.com/dialpad/dialtone/"},[t("img",{alt:"Dialtone CSS version number",src:"https://img.shields.io/github/package-json/v/dialpad/dialtone?color=D3BCFF&label=CSS"})],-1),O=t("h3",{class:"d-docsite--header-3"},"Dialtone-vue",-1),T=t("a",{class:"d-d-inline-flex d-pt12",href:"https://github.com/dialpad/dialtone-vue"},[t("img",{alt:"Dialtone Vue version number",src:"https://img.shields.io/github/package-json/v/dialpad/dialtone-vue/vue3?color=D3BCFF&label=Vue"})],-1),q=t("h2",{id:"components",tabindex:"-1",class:"d-docsite--header-2"},[e("Components "),t("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#components","aria-hidden":"true"},"#")],-1),$=t("p",{class:"d-docsite--paragraph"},`Components are reusable building blocks that support a specific interaction or UI need. These components can be reused across Dialpad products and projects
ensuring UI consistency and cohesion while helping teams deliver high-quality features faster.`,-1),L=t("p",{class:"d-docsite--paragraph"},"Dialtone provides two options to use the components: CSS and Vue.",-1),E=t("h3",{id:"vue-components-recommended",tabindex:"-1",class:"d-docsite--header-3"},[e("Vue components (recommended) "),t("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#vue-components-recommended","aria-hidden":"true"},"#")],-1),M=t("p",{class:"d-docsite--paragraph"},[e("Use "),t("a",{href:"https://vue.dialpad.design/",class:"d-docsite--link d-link",target:"_blank",rel:"noopener noreferrer"},"Vue components"),e(" in the case your project supports Vue since these components are built conforming to "),t("a",{href:"https://www.w3.org/WAI/standards-guidelines/wcag/glance/",class:"d-docsite--link d-link",target:"_blank",rel:"noopener noreferrer"},"WCAG AA Accessibility Guidelines"),e(`
and with usability and performance in mind.`)],-1),H=t("h3",{id:"css-components",tabindex:"-1",class:"d-docsite--header-3"},[e("CSS components "),t("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#css-components","aria-hidden":"true"},"#")],-1),P={class:"d-docsite--paragraph"},W={class:"d-docsite--paragraph"},z=t("h3",{id:"previous-version",tabindex:"-1",class:"d-docsite--header-3"},[e("Previous Version "),t("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#previous-version","aria-hidden":"true"},"#")],-1),J=t("p",{class:"d-docsite--paragraph"},[t("a",{href:"https://dialpad.design/version6/",class:"d-docsite--link d-link",target:"_blank",rel:"noopener noreferrer"},"Dialtone 6"),e(" remains viewable, though is no longer being maintained. "),t("a",{href:"#contact-us",class:"d-docsite--link d-link"},"Reach out"),e(" to the Dialtone team if you have any questions.")],-1),K=t("h2",{id:"intake",tabindex:"-1",class:"d-docsite--header-2"},[e("Intake "),t("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#intake","aria-hidden":"true"},"#")],-1),Q=t("h3",{id:"contributions",tabindex:"-1",class:"d-docsite--header-3"},[e("Contributions "),t("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#contributions","aria-hidden":"true"},"#")],-1),X={class:"d-docsite--paragraph"},Y=t("h3",{id:"request-a-feature",tabindex:"-1",class:"d-docsite--header-3"},[e("Request a feature "),t("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#request-a-feature","aria-hidden":"true"},"#")],-1),Z=t("p",{class:"d-docsite--paragraph"},[e(`If your design isn't supported by any existing component, or the component you want to use isn't flexible enough to use in your design,
please request a feature by `),t("a",{href:"https://forms.monday.com/forms/8a9a6ff69d7e9f95caee029c2806e2c1?r=use1",class:"d-docsite--link d-link",target:"_blank",rel:"noopener noreferrer"},"filling out this form"),e(".")],-1),ee=t("h3",{id:"report-a-bug",tabindex:"-1",class:"d-docsite--header-3"},[e("Report a bug "),t("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#report-a-bug","aria-hidden":"true"},"#")],-1),te=t("p",{class:"d-docsite--paragraph"},[e("Please refer to "),t("a",{href:"https://github.com/dialpad/dialtone/blob/staging/.github/CONTRIBUTING.md#bug-report",class:"d-docsite--link d-link",target:"_blank",rel:"noopener noreferrer"},"CONTRIBUTING.md"),e(`
for reporting any issue.`)],-1),se=t("h2",{id:"contact-us",tabindex:"-1",class:"d-docsite--header-2"},[e("Contact Us "),t("a",{class:"header-anchor d-link d-docsite--link d-link",href:"#contact-us","aria-hidden":"true"},"#")],-1),ae=V('<ul class="d-docsite--unordered-list"><li class="d-docsite--list-element"><a href="https://dialpad.slack.com/messages/dialtone/" class="d-docsite--link d-link" target="_blank" rel="noopener noreferrer">#dialtone</a> Slack channel</li> <li class="d-docsite--list-element"><a href="mailto:dialtone@dialpad.com" class="d-docsite--link d-link">dialtone@dialpad.com</a></li></ul>',1),oe={__name:"dialtone.html",setup(d){return(u,p)=>{const i=k("dt-stack"),a=k("RouterLink");return c(),h("div",null,[G,e(),t("div",U,[t("div",null,[s(i,{class:"d-ai-center",direction:"row",gap:"400"},{default:n(()=>[B,e(),F]),_:1}),e(),s(f)]),e(),t("div",null,[s(i,{class:"d-ai-center",direction:"row",gap:"400"},{default:n(()=>[O,e(),T]),_:1}),e(),s(f,{project:"DialtoneVue"})])]),e(),q,e(),$,e(),L,e(),E,e(),M,e(),H,e(),t("p",P,[e("If Vue isn't supported in your application, you can use the "),s(a,{to:"/components/avatar.html",class:"d-docsite--link d-link"},{default:n(()=>[e("CSS components")]),_:1}),e(` in your project, but you'll be responsible
for writing the correct markup, managing DOM elements and events, and making it `),s(a,{to:"/getting-started/accessibility/fundamentals.html",class:"d-docsite--link d-link"},{default:n(()=>[e("accessible for all users")]),_:1}),e(".")]),e(),t("p",W,[e("See more about "),s(a,{to:"/getting-started/usage.md/#components",class:"d-docsite--link d-link"},{default:n(()=>[e("components usage")]),_:1}),e(".")]),e(),z,e(),J,e(),K,e(),Q,e(),t("p",X,[e("Read about "),s(a,{to:"/about/contributing.html",class:"d-docsite--link d-link"},{default:n(()=>[e("how to contribute to Dialtone")]),_:1}),e(".")]),e(),Y,e(),Z,e(),ee,e(),te,e(),se,e(),ae])}}},le=b(oe,[["__file","dialtone.html.vue"]]);export{le as default};
