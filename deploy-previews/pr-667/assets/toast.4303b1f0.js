const e=[{class:"d-toast",applies:"N/A",description:"Default toast style"},{class:"d-toast__dialog",applies:"N/A",description:"Contains the toast content."},{class:"d-toast--error",applies:".d-toast",description:"Applies error visual style."},{class:"d-toast--info",applies:".d-toast",description:"Applies info visual style."},{class:"d-toast--success",applies:".d-toast",description:"Applies success visual style."},{class:"d-toast--warning",applies:".d-toast",description:"Applies warning visual style."},{class:"d-toast--important",applies:".d-toast",description:"Adds the higher importance style by emboldening the background color. These should only be used for pressing information that needs to be noticed by the user."}],s=[{item:'role="alert"',applies:".d-toast",description:'Provides the user with important, and usually time-sensitive information, often telling the user an element has been updated (<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Alert_Role">Source</a>)'},{item:'role="status"',applies:".d-toast",description:`When using multiple toasts simultaneously, use the role="status" which does not clear the screen reader's speech queue. (<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/status_role">Source</a>)`},{item:'aria-hidden="[true|false]"',applies:".d-toast",description:'Informs assistive technologies, such as screen readers, if they should ignore the element. This should not be confused with the HTML <span class="code-example--inline">hidden</span> attribute which tells the browser to not display an element. (<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-hidden">Source</a>)'}];var t={classes:e,accessible:s};export{s as accessible,e as classes,t as default};
