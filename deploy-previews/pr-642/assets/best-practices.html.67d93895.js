import{_ as o,r as i,o as l,c as r,a as e,b as s,e as t,d as n}from"./app.a270d735.js";const c={},h=e("h2",{id:"color-contrast-ratio",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#color-contrast-ratio","aria-hidden":"true"},"#"),t(" Color contrast ratio")],-1),p=t(),u=t("Dialpad strives to maintain  "),d=e("strong",null,"WCAG 2.1 AA",-1),g=t(" compliance in our digital products, including color contrast. "),m={href:"https://www.w3.org/TR/WCAG21/#contrast-minimum",target:"_blank",rel:"noopener noreferrer"},f=t("WCAG guidelines"),b=t(" require a minimum of 4:51 ratio for all content in regular-weight fonts."),k=n(' <p>For easy reference, our color references are displayed alongside a contrast rating. Note that these are calculated using either a white or black background, and contrast between type and background should always be verified when using different background colors.</p> <p>To check color contrast combination, try one of these tools:</p> <ul><li>Colorable</li> <li>WebAim</li> <li>Figma plugin: Stark</li></ul> <h2 id="semantics" tabindex="-1"><a class="header-anchor" href="#semantics" aria-hidden="true">#</a> Semantics</h2> <p>One of the simplest things we can do to make more accessible sites is to build with semantic HTML. Creating semantic HTML, or \u201Csemantic markup\u201D is the practice of using the appropriate HTML element to convey information about the meaning and context of each element. For example, for a paragraph or bulleted list, you would use <code>p</code>  or <code>ul</code> tags, respectively. In places where there is no HTML element which has a matching semantic meaning for what you are creating, you will want to employ the use of an inline <code>span</code>, or division element <code>div</code>.</p> <p>Semantic markup also maintains the separation between the semantics and the visual presentation. For example, it\u2019s common to choose which heading element to use based on its style, but that would be incorrect. The proper way would be <a href="#headings">choosing the semantic heading level</a> and then applying CSS to style it, thus not using your mark-up as a means to style.</p> <p>Inversely, there may be times when you want a <code>button</code>, <code>select</code>, etc. element, but also want it to have just slightly different behavior or non-native styling. In these cases, we generally choose to use a <code>div</code> or less semantic implementation. Be so careful when you decide to do this. We forget how much native functionality is built in a <code>button</code>, <code>link</code>, <code>select</code>, etc. and re-creating that exact implementation so a screen reader user or keyboard-only user can still interact with the element appropriately can be complex and time consuming.</p> ',15),w=t("As an example, to recreate a "),v=e("code",null,"button",-1),y=t(" with a "),_=e("code",null,"div",-1),x=t(", you would need to add in multiple ARIA attributes, manage focus, and then also add additional JavaScript to allow you to click it, or use the spacebar and enter key to activate it. You can learn more by watching "),T={href:"https://www.youtube.com/watch?v=CZGqnp06DnI",target:"_blank",rel:"noopener noreferrer"},S=t("\u201CJust Use a Button,\u201D"),A=t(" as explained by Rob Dodson from the Google Chrome Team."),I=n(` <h3 id="structural-semantics-and-landmarks" tabindex="-1"><a class="header-anchor" href="#structural-semantics-and-landmarks" aria-hidden="true">#</a> Structural semantics and landmarks</h3> <p>The following HTML elements should be used to identify common elements of our products.</p> <div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span><span class="token punctuation">&gt;</span></span>, <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aside</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h4 id="source" tabindex="-1"><a class="header-anchor" href="#source" aria-hidden="true">#</a> Source</h4> `,8),L={href:"https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML#good_semantics",target:"_blank",rel:"noopener noreferrer"},C=t("MDN - Developer Guides - Good Semantics"),F=t(),H={href:"https://www.w3.org/TR/wai-aria-practices/examples/landmarks/HTML5.html",target:"_blank",rel:"noopener noreferrer"},W=t("W3C - HTML Sectioning Elements: ARIA Landmarks Example"),B=n(` <h2 id="headings" tabindex="-1"><a class="header-anchor" href="#headings" aria-hidden="true">#</a> Headings</h2> <p>There are two easy rules that only apply to heading elements that we should adhere to for the best accessibility practices:</p> <p>The first: use one <code>h1</code> per page. The <code>h1</code> is typically the page title and use of more than one <code>h1</code> can confuse browsers and assistive technology.</p> <p>The second: when employing multiple heading levels, do not skip heading levels in a section. For example, if you\u2019re writing an article, you could do:</p> <div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>But you should never do:</p> <div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span><span class="token punctuation">&gt;</span></span> // This is problematic since you skipped the <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span> in the same section
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>Headings taken out of context, such as accumulated together in a list for a screen reader, should logically represent the page content for users who choose this option as a way to browse.</p> <h2 id="lists" tabindex="-1"><a class="header-anchor" href="#lists" aria-hidden="true">#</a> Lists</h2> <p>Do not underestimate the power of list elements. When there are more than two or three similar items next to one another on the page, consider putting them in either an order list <code>ol</code> or unordered list <code>ul</code> for screen readers.</p> <p>By using a list element, a screen reader user knows how many items they can expect to go through, and where they are in the list. A screen reader will announce, \u201C1 of 3 list items,\u201D which is helpful context that allows a user to orient themselves and have a better expectation of what will come next.</p> <h2 id="tab-order" tabindex="-1"><a class="header-anchor" href="#tab-order" aria-hidden="true">#</a> Tab order</h2> <p>Like the name suggests, tab order is the order in which elements receive focus when a user is navigating with a keyboard. The tab order should match the visual order, so users are able to logically navigate through content. This is important. The default keyboard navigation order must be logical and intuitive, which generally means that it follows the page\u2019s visual flow: left to right, top to bottom -- header first, then main navigation, then page navigation (if applicable), and finally the footer.</p> <p>Ideally, the visual tab flow will match the flow of the code. There are cases when something must be coded in an illogical order. In these cases, we can use <code>tabindex</code> to override the default order. By applying a <code>tabindex</code> value to each element in the flow, we can control the element order.</p> <p>For example:</p> <div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>\u201D#\u201D</span> <span class="token attr-name">tabindex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>\u201D2\u201D</span><span class="token punctuation">&gt;</span></span>First Element<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>\u201D#\u201D</span> <span class="token attr-name">tabindex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>\u201D1\u201D</span><span class="token punctuation">&gt;</span></span>Second Element<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>Because \u201CSecond Element\u201D has a lower tabindex, keyboard users will focus it before \u201CFirst Element.\u201D</p> <p>Though it sounds convenient, <code>tabindex</code> should be used only in cases where there is no other option.</p> <p>By default, users can only navigate to links, buttons, and form controls with a keyboard. These natively-accessible elements should be used whenever possible, although there are times when HTML falls short and custom \u201Cwidgets\u201D are necessary. Complex menus, sliders, dialogs, tab panels, etc. must all be built to support keyboard accessibility.</p> <p><code>Tabindex=\u201D0\u201D</code> can be used to add non-interactive elements into the tab flow. This is useful when coding custom elements that are not natively focused.</p> <h2 id="visible-focus" tabindex="-1"><a class="header-anchor" href="#visible-focus" aria-hidden="true">#</a> Visible focus</h2> <p>It is often difficult for keyboard users to tell where they are on the page. We must take care to ensure that it is easy to tell which item on the page currently has keyboard focus. All browsers by default display a visible outline around the element that currently has focus. Some browsers (i.e. Chrome and Safari) show an easy-to-see blue outline as their visible focus. However, other browsers show a thin, dotted line, which can be very difficult to see.</p> <p>Dialtone provides visible focus on all components. However, we cannot anticipate the various contexts in which each component will be inserted. Be sure to remember that focus indication can occur on different colored backgrounds and a minimum contrast ratio of 3:1 is required.</p> <h2 id="skip-navigation-links" tabindex="-1"><a class="header-anchor" href="#skip-navigation-links" aria-hidden="true">#</a> Skip navigation links</h2> <p>A site or product\u2019s main content is not usually the first thing on the page. Keyboard users generally must navigate a long list of navigation links, dropdowns, logos, search inputs, and other elements before ever arriving at the main content. This is particularly difficult for users with some forms of motor disabilities. Without some sort of system, for bypassing the long list of links at the top, some users are at a huge disadvantage. Consider users with no arm movement, who use computers by tapping their heads on a switch or that use a stick in their mouth to press keyboard keys. Requiring users to perform any action perhaps 100s of times before reaching the main content is simply unacceptable.</p> <p>The \u201Cskip navigation\u201D idea was invented to give keyboard users the same capability as sighted mouse users to go directly to the main content. The idea is simple: provide a link at the top of the page which jumps the users down to an anchor or target at the beginning of the main content.</p> <p>Often developers hide the skip navigation link so it is available for screen reader users only. Ensure that the link is visible, or becomes visible when the keyboard user tabs to it.</p> <h3 id="source-1" tabindex="-1"><a class="header-anchor" href="#source-1" aria-hidden="true">#</a> Source</h3> `,54),q={href:"https://webaim.org/techniques/skipnav/",target:"_blank",rel:"noopener noreferrer"},E=t("WebAim - \u201CSkip Navigation Links\u201D"),M=n(' <h2 id="form-best-practices" tabindex="-1"><a class="header-anchor" href="#form-best-practices" aria-hidden="true">#</a> Form best practices</h2> <p>Forms can be difficult, high-friction points for sighted and able users, which means if not done correctly, they can be simply unusable for users reliant on keyboard navigation or assistive technology. Users should be able to fill in forms, press buttons, use range sliders, select options, and operate controls with ease. Forms that use JavaScript to manipulate form data, set focus, change form elements, or submit forms can often create interactions that only work with a mouse. Ensure your forms can be understood and operated with the keyboard alone.</p> <p>Labeling is also important. Input labels describe the function of a form control (i.e. checkbox, radio button, etc.) and generally appear adjacent to it. While sighted users make the connection visually, users reliant on a screen reader or other assistive technology may not. The <code>label</code> element programmatically associates a text label to its form control, creating a connection that doesn\u2019t rely on vision.</p> <p>Groups of form controls, such as checkboxes and radio buttons, sometimes require a higher-level label. This information can be associated with the group of form controls using <code>fieldset</code> and <code>legend</code>. The <code>fieldset</code> defines the group and the <code>legend</code> contains the description. Screen readers announce the <code>legend</code> when users navigate into the group.</p> <p>List-based inputs, such as <code>select</code>, comboboxes, or custom dropdown menus can be tricky for keyboard navigation. Users should be able to navigate through the options using their arrows, not their tab key.</p> <h3 id="source-2" tabindex="-1"><a class="header-anchor" href="#source-2" aria-hidden="true">#</a> Source</h3> ',13),G={href:"https://webaim.org/techniques/forms/controls",target:"_blank",rel:"noopener noreferrer"},D=t("WebAim - \u201CCreating Accessible Forms.\u201D"),R=n(' <h2 id="focus-vs-focus-visible" tabindex="-1"><a class="header-anchor" href="#focus-vs-focus-visible" aria-hidden="true">#</a> Focus vs Focus-visible</h2> <p>User agents can choose their own heuristics for when to match :focus-visible; however, the following (non-normative) suggestions can be used as a starting point:</p> <ul><li>If a user has expressed a preference (such as via a system preference or a browser setting) to always see a visible focus indicator, the user agent should honor this by having :focus-visible always match on the active element, regardless of any other factors. (Another option may be for the user agent to show its own focus indicator regardless of author styles.)</li> <li>Any element which supports keyboard input (such as an input element, or any other element which may trigger a virtual keyboard to be shown on focus if a physical keyboard is not present) should always match :focus-visible when focused.</li> <li>If the user interacts with the page via the keyboard, the currently focused element should match :focus-visible (i.e. keyboard usage may change whether this pseudo-class matches even if it doesn\u2019t affect :focus).</li> <li>If the user interacts with the page via a pointing device, such that the focus is moved to a new element which does not support user input, the newly focused element should not match :focus-visible.</li> <li>If the active element matches :focus-visible, and a script causes focus to move elsewhere, the newly focused element should match :focus-visible.</li> <li>Conversely, if the active element does not match :focus-visible, and a script causes focus to move elsewhere, the newly focused element should not match :focus-visible.</li></ul> <p>User agents should also use :focus-visible to specify the default focus style, so that authors using :focus-visible will not also need to disable the default :focus style.</p> <p>In general, a rule of thumb is that: if an element is going to need the keyboard (ex. inputs) that element should use <strong>focus</strong>, otherwise, it should use <strong>focus-visible</strong>. Here is a list of elements that use focus vs focus-visible:</p> <h3 id="focus" tabindex="-1"><a class="header-anchor" href="#focus" aria-hidden="true">#</a> Focus</h3> <ul><li>Input</li> <li>Select menu</li></ul> <h3 id="focus-visible" tabindex="-1"><a class="header-anchor" href="#focus-visible" aria-hidden="true">#</a> Focus visible</h3> <ul><li>Button</li> <li>Link</li> <li>Checkbox</li> <li>Radio</li> <li>Dropdown menu</li> <li>List item</li> <li>Tab</li></ul> <h4 id="source-3" tabindex="-1"><a class="header-anchor" href="#source-3" aria-hidden="true">#</a> Source</h4> ',21),U={href:"https://www.w3.org/TR/selectors-4/#the-focus-visible-pseudo",target:"_blank",rel:"noopener noreferrer"},N=t("The Focus-Indicated Pseudo-class: :focus-visible."),V=t(),j={href:"https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html",target:"_blank",rel:"noopener noreferrer"},J=t("Understanding Success Criterion 2.4.7: Focus Visible.");function O(P,z){const a=i("ExternalLinkIcon");return l(),r("div",null,[h,p,e("p",null,[u,d,g,e("a",m,[f,s(a)]),b]),k,e("p",null,[w,v,y,_,x,e("a",T,[S,s(a)]),A]),I,e("ul",null,[e("li",null,[e("a",L,[C,s(a)])]),F,e("li",null,[e("a",H,[W,s(a)])])]),B,e("ul",null,[e("li",null,[e("a",q,[E,s(a)])])]),M,e("ul",null,[e("li",null,[e("a",G,[D,s(a)])])]),R,e("ul",null,[e("li",null,[e("a",U,[N,s(a)])]),V,e("li",null,[e("a",j,[J,s(a)])])])])}var Y=o(c,[["render",O],["__file","best-practices.html.vue"]]);export{Y as default};
