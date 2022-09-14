const e=[{class:"d-modal",applies:"N/A",description:"Parent modal container."},{class:"d-modal__dialog",applies:"Child of .d-modal",description:"Base dialog container for modal content."},{class:"d-modal__header",applies:"Child of .d-modal__dialog",description:"Adds proper styling for the modal's header."},{class:"d-modal__content",applies:"Child of .d-modal__dialog",description:"Adds proper styling for the modal's content area."},{class:"d-modal__footer",applies:"Child of .d-modal__dialog",description:"Adds proper styling for the modal's footer."},{class:"d-modal__close",applies:"Child of .d-modal__dialog",description:"Adds proper styling for the modal's dismiss button."},{class:"d-modal__dialog--scrollable",applies:".d-modal__dialog",description:"Adds vertical scroll to the modal content keeping fixed the header and footer."},{class:"d-modal--full",applies:".d-modal",description:"Makes .d-modal__dialog take up as much of the screen as possible."},{class:"d-modal--danger",applies:".d-modal",description:"Adds styling for destructive actions."},{class:"d-modal--animate-in",applies:".d-modal",description:"Adds transition styles for modal appearance."},{class:"d-modal--animate-out",applies:".d-modal",description:"Adds transition styles for modal exit."},{class:"d-modal__dialog--animate-in",applies:".d-modal__dialog",description:"Adds transition styles for modal dialog appearance."},{class:"d-modal__dialog--animate-out",applies:".d-modal__dialog",description:"Adds transition styles for modal dialog exit."}],s=[{item:"aria-describedby=[id]",applies:".d-modal",description:`Provide the modal's copy ID here. Assistive technologies, such as screen readers, use this to associate text with a widget, elements groups, headings, definitions, etc. (<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute">Source</a>)`},{item:"aria-hidden=[true|false]",applies:".d-modal",description:'Informs assistive technologies, such as screen readers, if they should ignore the element. This should not be confused with the HTML hidden attribute which tells the browser to not display an element. (<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-hidden">Source</a>)'},{item:"aria-label=[text]",applies:".d-modal__close",description:'Labels the close element for assistive technologies. (<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute">Source</a>)'},{item:"aria-labelledby=[id]",applies:".d-modal",description:`Supply the modal's title ID here. Assistive technologies, such as screen readers, use this attribute to catalog the document objects correctly. (<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute">Source</a>)`},{item:'role="dialog"',applies:".d-modal",description:'Identifies the modal as a dialog element for assistive technologies (<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role">Source</a>)'},{item:'role="document"',applies:".d-modal__dialog",description:'Helps assistive technologies to switch their reading mode from the larger document to a focused dialog window (<a href="https://www.w3.org/TR/wai-aria-1.1/#document">Source</a>)'}];var a={classes:e,accessible:s};export{s as accessible,e as classes,a as default};
