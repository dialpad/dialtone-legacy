/*
* Source: https://itnext.io/fixing-focus-for-safari-b5916fef1064
* Author: Nick Gard
* */
(function() {
    var capturedEvents = [];

    function captureEvent(e) {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      capturedEvents.unshift(e);
    }

    var captureOpts = {capture: true, once: true};

    /*
     * The only mousedown events we care about here are ones emanating from
     * (A) anchor links with href attribute,
     * (B) non-disabled buttons,
     * (C) non-disabled textarea,
     * (D) non-disabled inputs of type "button", "reset", "checkbox", "radio", "submit"
     * (E) non-interactive elements (button, a, input, textarea, select) that have a tabindex with a numeric value
     * (F) audio elements
     * (G) video elements with controls attribute
     */
    function isPolyfilledFocusEvent(e) {
      var el = e.target;
      var tag = el.tagName;
      return (
        (/^a$/i.test(tag) && el.href != null) || // (A)
        (/^(button|textarea)$/i.test(tag) && el.disabled !== true) || // (B) (C)
        (/^input$/i.test(tag) &&
          /^(button|reset|submit|radio|checkbox)$/i.test(el.type) &&
          !el.disabled) || // (D)
        (!/^(button|input|textarea|select|a)$/i.test(tag) &&
          !Number.isNaN(Number.parseFloat(el.tabIndex))) || // (E)
        /^audio$/i.test(tag) || // (F)
        (/^video$/i.test(tag) && el.controls === true) // (G)
      );
    }

    function handler(e) {
      if (isPolyfilledFocusEvent(e)) {
        // capture possible out-of-order mouse events
        document.addEventListener('mouseup', captureEvent, captureOpts);
        document.addEventListener('click', captureEvent, captureOpts);

        /*
         * enqueue the focus event _after_ the current batch of events, which
         * includes any blur events. The correct order of events is:
         *
         * [this element] MOUSEDOWN               <-- this event
         * [previously active element] BLUR
         * [previously active element] FOCUSOUT
         * [this element] FOCUS                   <-- forced event
         * [this element] FOCUSIN                 <-- forced event
         * [this element] MOUSEUP                 <-- possibly captured event (it may have fired _before_ the FOCUS event)
         * [this element] CLICK                   <-- possibly captured event (it may have fired _before_ the FOCUS event)
         */
        setTimeout(() => {
          // stop capturing possible out-of-order mouse events
          document.removeEventListener('mouseup', captureEvent, captureOpts);
          document.removeEventListener('click', captureEvent, captureOpts);

          // trigger focus event
          e.target.focus();

          // re-dispatch captured mouse events in order
          while (capturedEvents.length > 0) {
            var event = capturedEvents.pop();
            document.dispatchEvent(new MouseEvent(event.type, event));
          }
        }, 0);
      }
    }

    var userAgent = navigator.userAgent.toLowerCase();
    var chrome = /chrome/.test(userAgent) &&
      /Google/.test(navigator.vendor) &&
      parseInt(userAgent.match(/chrome\/(\d+)\./)[1], 10);
    var ios = /(ipod|iphone|ipad)/.test(userAgent);
    var isSafari = /safari/.test(userAgent) && !chrome && !ios;

    if (isSafari) {
      document.addEventListener('mousedown', handler, {capture: true});
    }
  }
)();
