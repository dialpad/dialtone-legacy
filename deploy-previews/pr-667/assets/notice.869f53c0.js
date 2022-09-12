const e=[{class:"d-notice",applies:"N/A",description:"Base parent notice class. This defaults to the system notice style."},{class:"d-notice--error",applies:".d-notice",description:"Applies error visual style."},{class:"d-notice--info",applies:".d-notice",description:"Applies info visual style."},{class:"d-notice--success",applies:".d-notice",description:"Applies success visual style."},{class:"d-notice--warning",applies:".d-notice",description:"Applies warning visual style."},{class:"d-notice--important",applies:".d-notice",description:"Adds the higher importance style by emboldening the background color. These should only be used for pressing information that needs to be noticed by the user."},{class:"d-notice__icon",applies:"N/A",description:"Contains the notice icon."},{class:"d-notice__content",applies:"N/A",description:"Contains the notice content."},{class:"d-notice__title",applies:"N/A",description:"Contains the notice title."},{class:"d-notice__message",applies:"N/A",description:"Contains the notice message."},{class:"d-notice__actions",applies:"N/A",description:"Contains the notice actions."}],i=[{item:'role="status"',applies:'<span class="code-example--inline">.d-notice</span>',description:'Defines a live region with advisory information for the user, but not important enough to warrant an alert (<a href="https://www.w3.org/TR/wai-aria-1.1/#status">Source</a>)'},{item:'role="alert"',applies:'<span class="code-example--inline">.d-notice--important</span>',description:'A form of live region which contains important, usually time-sensitive, information. Elements with an alert role have an implicit <span class="code-example--inline">aria-live</span> value of <span class="code-example--inline">assertive</span> and implicit <span class="code-example--inline">aria-atomic</span> value of <span class="code-example--inline">true</span>. (<a href="https://www.w3.org/TR/wai-aria-1.1/#alert">Source</a>)'},{item:'aria-hidden="[true | false]"',applies:'<span class="code-example--inline">.d-notice</span>',description:'Informs assistive technologies, such as screen readers, if they should ignore the element. This should not be confused with the HTML <span class="code-example--inline">hidden</span> attribute which tells the browser to not display an element. (<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-hidden">Source</a>)'},{item:'aria-labelledby="[id]"',applies:'<span class="code-example--inline">.d-notice</span>',description:'Only used if a title is present, it provides assistive technologies with a title for the dialog. (<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute">Source</a>)'},{item:'aria-label="[title]"',applies:'<span class="code-example--inline">.d-notice</span>',description:'If <span class="code-example--inline">aria-labelledby</span> is not used (because no title is present) and <span class="code-example--inline">role="alert"</span> is in use, this <strong>must be used</strong> to provides assistive technologies with a title for the dialog. (<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute">Source</a>)'},{item:'aria-describedby="[id]"',applies:'<span class="code-example--inline">.d-notice</span>',description:`Provides assistive technologies with the alert's descriptive copy (<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby">Source</a>)`}];var s={classes:e,accessible:i};export{i as accessible,e as classes,s as default};
