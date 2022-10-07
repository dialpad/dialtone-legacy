import{D as s}from"./DialtoneUsage.79e849fe.js";import{_ as l,o as i,c as o,b as n,w as d,a as e,d as t,e as a}from"./app.aab126a4.js";const r=e("p",null,[t("Times are represented as "),e("strong",null,"HH:MM:SS AM/PM"),t(".")],-1),u=t(),h=e("ul",null,[e("li",null,"We use a 12-hour clock."),t(),e("li",null,"Always use a space before AM and PM."),t(),e("li",null,"Include seconds only when appropriate and useful to customers")],-1),c=t(),m=e("ul",null,[e("li",null,"12:45 AM"),t(),e("li",null,"12:45:30 PM")],-1),_=e("ul",null,[e("li",null,"12:45AM"),t(),e("li",null,"12:45:30PM"),t(),e("li",null,"12:45 am"),t(),e("li",null,"12:45:30 pm")],-1),p=a(' <h2 id="time-ranges" tabindex="-1"><a class="header-anchor" href="#time-ranges" aria-hidden="true">#</a> Time ranges</h2> <p>Use an en dash (\u2013) with no spaces. Mac: <kbd title="option dash">\u2325 + -</kbd>; Windows: <kbd title="control dash">\u2303 + -</kbd>.</p> <ul><li>Always include AM or PM for the second time.</li> <li>Only include AM or PM for the first time if it\u2019s different from the second one:</li></ul> ',7),M=e("ul",null,[e("li",null,"5:00\u20136:00 PM"),t(),e("li",null,"11:30 AM\u20134:00 PM")],-1),f=e("ul",null,[e("li",null,"5:00 pm\u20136:00 PM")],-1),b=t(),g=e("h2",{id:"time-zones",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#time-zones","aria-hidden":"true"},"#"),t(" Time zones")],-1),P=t(),S=e("ul",null,[e("li",null,"Don\u2019t include an S (for Standard) or D (for Daylight)"),t(),e("li",null,"Do include a space between AM/PM and the time zone")],-1),y=t(),v=e("ul",null,[e("li",null,"3:00 PM PT")],-1),D=e("ul",null,[e("li",null,"3:00 PM PST")],-1),x=a(` <h2 id="relative-timestamps" tabindex="-1"><a class="header-anchor" href="#relative-timestamps" aria-hidden="true">#</a> Relative Timestamps</h2> <p>Relative timestamps may change based on context. When using relative timestamps, aim to include the definite time as additional information, like in a tool tip.</p> <ul><li>Spell out <strong>minutes</strong>, <strong>seconds</strong>, and <strong>hours</strong> whenever possible</li> <li>If necessary, abbreviate:
<ul><li>hours - hr</li> <li>minutes - min</li> <li>seconds - s</li></ul></li></ul> <dl class="dialtone-definition"><dt>Less than a minute</dt> <dd>Just now</dd> <dt>Less than 60 minutes <code>NN minutes ago</code></dt> <dd>10 minutes ago</dd> <dt>Less than 24 hours <code>NN hours ago</code></dt> <dd>5 hours ago</dd> <dt>Yesterday</dt> <dd>Yesterday</dd></dl> <h2 id="absolute-timestamps" tabindex="-1"><a class="header-anchor" href="#absolute-timestamps" aria-hidden="true">#</a> Absolute Timestamps</h2> <dl class="dialtone-definition"><dt>Less than a year <code>[Day of week], [Mon (abbrev)] [Date]</code></dt> <dd>Wednesday, September 1</dd> <dd>Wed, Sep 1</dd> <dd>Wednesday, Sep 1 at 10:45 AM</dd> <dt>Greater than a year <code>[Mon (abbrev)] [Date], [Year]</code></dt> <dd>September 1, 2020</dd> <dd>Sep 1, 2020</dd> <dd>Sep 1, 2020 at 11:11 PM</dd> <dt>Contexts that need more precision, use numerical values: <code>NNh NNm ago</code></dt> <dd>1h 7m ago</dd> <dd>25h 34m ago</dd></dl> <h2 id="duration" tabindex="-1"><a class="header-anchor" href="#duration" aria-hidden="true">#</a> Duration</h2> <p>Durations are represented as <strong>DD:HH:MM:SS</strong> (i.e. 1:04:05:30).</p>`,16),A={__name:"time.html",setup(N){return(w,k)=>(i(),o("div",null,[r,u,h,c,n(s,null,{do:d(()=>[m]),dont:d(()=>[_]),_:1}),p,n(s,null,{do:d(()=>[M]),dont:d(()=>[f]),_:1}),b,g,P,S,y,n(s,null,{do:d(()=>[v]),dont:d(()=>[D]),_:1}),x]))}};var z=l(A,[["__file","time.html.vue"]]);export{z as default};
