import{_ as n,o as i,c as d,a as t,d as l,w as s,b as e,e as a}from"./app.bbc31e25.js";import{D as o}from"./DialtoneUsage.51da6e66.js";const r=e("p",null,[t("Times are represented as "),e("strong",null,"HH:MM:SS AM/PM"),t(".")],-1),c=e("ul",null,[e("li",null,"We use a 12-hour clock."),t(),e("li",null,"Always use a space before AM and PM."),t(),e("li",null,"Include seconds only when appropriate and useful to customers")],-1),h=e("ul",null,[e("li",null,"12:45 AM"),t(),e("li",null,"12:45:30 PM")],-1),u=e("ul",null,[e("li",null,"12:45AM"),t(),e("li",null,"12:45:30PM"),t(),e("li",null,"12:45 am"),t(),e("li",null,"12:45:30 pm")],-1),m=e("h2",{id:"time-ranges",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#time-ranges","aria-hidden":"true"},"#"),t(" Time ranges")],-1),_=e("p",null,"Use an en dash (\u2013) with no surrounding spaces.",-1),p=e("ul",null,[e("li",null,"Always include AM or PM for the second time."),t(),e("li",null,"Only include AM or PM for the first time if it\u2019s different from the second one:")],-1),b=e("ul",null,[e("li",null,"5:00\u20136:00 PM"),t(),e("li",null,"11:30 AM\u20134:00 PM")],-1),f=e("ul",null,[e("li",null,"5:00 pm\u20136:00 PM")],-1),M=e("h2",{id:"time-zones",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#time-zones","aria-hidden":"true"},"#"),t(" Time zones")],-1),g=e("ul",null,[e("li",null,"Don\u2019t include an S (for Standard) or D (for Daylight)"),t(),e("li",null,"Do include a space between AM/PM and the time zone")],-1),y=e("ul",null,[e("li",null,"3:00 PM PT")],-1),w=e("ul",null,[e("li",null,"3:00 PM PST")],-1),S=e("h2",{id:"relative-timestamps",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#relative-timestamps","aria-hidden":"true"},"#"),t(" Relative Timestamps")],-1),P=e("p",null,"Relative timestamps may change based on context. When using relative timestamps, aim to include the definite time as additional information, like in a tool tip.",-1),x=a(`<ul><li>Spell out <strong>minutes</strong>, <strong>seconds</strong>, and <strong>hours</strong> whenever possible</li> <li>If necessary, abbreviate:
<ul><li>hours - hr</li> <li>minutes - min</li> <li>seconds - s</li></ul></li></ul>`,1),v=a(`<table class="d-table dialtone-doc-table d-body-base"><thead><tr><th class="d-w25p" scope="col">
        Format
      </th> <th scope="col">
        Structure
      </th> <th scope="col">
        Example
      </th></tr></thead> <tbody><tr><th scope="row">Less than a minute</th> <td></td> <td>Just now</td></tr> <tr><th scope="row">Less than 60 minutes</th> <td><code class="d-fs-100">[NN] minutes ago</code></td> <td>10 minutes ago</td></tr> <tr><th scope="row">Less than 24 hours</th> <td><code class="d-fs-100">[NN] hours ago</code></td> <td>5 hours ago</td></tr> <tr><th scope="row">Yesterday</th> <td>Yesterday</td></tr></tbody></table>`,1),D=e("h2",{id:"absolute-timestamps",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#absolute-timestamps","aria-hidden":"true"},"#"),t(" Absolute Timestamps")],-1),A=a(`<table class="d-table dialtone-doc-table d-body-base"><thead><tr><th class="d-w25p" scope="col">
        Format
      </th> <th scope="col">
        Structure
      </th> <th scope="col">
        Example
      </th></tr></thead> <tbody><tr><th scope="row">Less than a year </th> <td><code class="d-fs-100">[Day of week], [Mon (abbrev)] [Date]</code></td> <td><ul class="d-ls-reset"><li>Wednesday, September 1</li> <li>Wed, Sep 1</li> <li>Wednesday, Sep 1 at 10:45 AM</li></ul></td></tr> <tr><th scope="row">Greater than a year</th> <td><code class="d-fs-100">[Mon (abbrev)] [Date], [Year]</code></td> <td><ul class="d-ls-reset"><li>September 1, 2020</li> <li>Sep 1, 2020</li> <li>Sep 1, 2020 at 11:11 PM</li></ul></td></tr> <tr><th scope="row">Contexts that need more precision, use numerical values</th> <td><code class="d-fs-100">NNh NNm ago</code></td> <td><ul class="d-ls-reset"><li>1h 7m ago</li> <li>25h 34m ago</li></ul></td></tr></tbody></table>`,1),N=e("h2",{id:"duration",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#duration","aria-hidden":"true"},"#"),t(" Duration")],-1),T=e("p",null,[t("Durations are represented as "),e("strong",null,"DD:HH:MM:SS"),t(" (i.e. 1:04:05:30).")],-1),k={__name:"time.html",setup(W){return(z,H)=>(i(),d("div",null,[r,t(),c,t(),l(o,null,{do:s(()=>[h]),dont:s(()=>[u]),_:1}),t(),m,t(),_,t(),p,t(),l(o,null,{do:s(()=>[b]),dont:s(()=>[f]),_:1}),t(),M,t(),g,t(),l(o,null,{do:s(()=>[y]),dont:s(()=>[w]),_:1}),t(),S,t(),P,t(),x,t(),v,t(),D,t(),A,t(),N,t(),T]))}};var B=n(k,[["__file","time.html.vue"]]);export{B as default};
