import{D as d}from"./DialtoneUsage.835a7d86.js";import{_ as l,o as r,c as i,b as s,w as a,e as o,a as e,d as t}from"./app.b8f8a7b6.js";const n=o(`<p>When deciding which format to use, consider how much information users need in the context of their journey.</p> <p>When written out, dates are represented in this order <strong>[Day of week], [Month] [Date], [Year]</strong>.</p> <ul><li>Don\u2019t use ordinal numbers (1st, 2nd, 3rd, 4th, etc.)</li> <li>Use commas to separate the day of the week, month and numerical day, and year.</li> <li>Include all 4 digits for the year</li></ul> <h2 id="formats-by-length" tabindex="-1"><a class="header-anchor" href="#formats-by-length" aria-hidden="true">#</a> Formats by length</h2> <table class="d-table dialtone-doc-table d-body-base"><thead><tr><th class="d-w25p" scope="col">
        Format
      </th> <th scope="col">
        Example
      </th></tr></thead> <tbody><tr><th scope="row">Long date</th> <td>Thursday, September 2, 2022</td></tr> <tr><th scope="row">Medium date</th> <td>September 2, 2022</td></tr> <tr><th scope="row">Short date</th> <td>Thu, Sep 2, 2022<br>Sep 2, 2022</td></tr> <tr><th scope="row">If you need to leave out the year</th> <td>September 2<br>Sep 2</td></tr></tbody></table> <h2 id="abbreviating-dates" tabindex="-1"><a class="header-anchor" href="#abbreviating-dates" aria-hidden="true">#</a> Abbreviating dates</h2> <p>If space isn\u2019t an issue, spell out the full day of the week and month. When space is constrained, abbreviate days of the week and months.</p> <table class="d-table dialtone-doc-table d-body-base"><thead><tr><th class="d-w25p" scope="col">
        Format
      </th> <th scope="col">
        Example
      </th></tr></thead> <tbody><tr><th scope="row">Days of the week</th> <td><ul class="d-ls-reset"><li>Monday - Mon</li> <li>Tuesday - Tue</li> <li>Wednesday - Wed</li> <li>Thursday - Thu</li> <li>Friday - Fri</li> <li>Saturday - Sat</li> <li>Sunday - Sun</li></ul></td></tr> <tr><th scope="row">Months</th> <td><ul class="d-ls-reset"><li>January - Jan</li> <li>February - Feb</li> <li>March - Mar</li> <li>April - Apr</li> <li>May</li> <li>June - Jun</li> <li>July - Jul</li> <li>August - Aug</li> <li>September - Sep</li> <li>October - Oct</li> <li>November - Nov</li> <li>December - Dec</li></ul></td></tr></tbody></table> <h2 id="date-and-time" tabindex="-1"><a class="header-anchor" href="#date-and-time" aria-hidden="true">#</a> Date and time</h2> <p>To represent a date and time, use <strong>[Day of week], [Month] [Date], [Year] at HH:MM:SS AM/PM</strong>:</p> <dl class="dialtone-definition"><dt>Examples</dt> <dd>Thursday, September 2, 2022 at 12:45 PM</dd> <dd>September 2 at 12:45 PM</dd> <dd>Sep 2 at 12:45 PM</dd></dl> <h2 id="numerical-dates" tabindex="-1"><a class="header-anchor" href="#numerical-dates" aria-hidden="true">#</a> Numerical Dates</h2> <p>Avoid writing dates numerically to avoid confusion. Different countries use different formats for this scenario, and we don\u2019t yet localize dates and times.</p> <p>For cases when dates are represented in a table or in extremely compact UIs, use <strong>MM/DD/YY</strong>.</p> <dl class="dialtone-definition"><dt>Examples</dt> <dd>09/02/22</dd></dl> <h2 id="usage-examples" tabindex="-1"><a class="header-anchor" href="#usage-examples" aria-hidden="true">#</a> Usage Examples</h2> `,32),h=e("ul",null,[e("li",null,"November 2"),t(),e("li",null,"November 2, 2022"),t(),e("li",null,"11/02/22")],-1),c=e("ul",null,[e("li",null,"November 2nd"),t(),e("li",null,"November 2 2022"),t(),e("li",null,"11022022")],-1),u={__name:"dates.html",setup(p){return(m,b)=>(r(),i("div",null,[n,s(d,null,{do:a(()=>[h]),dont:a(()=>[c]),_:1})]))}};var g=l(u,[["__file","dates.html.vue"]]);export{g as default};
