const e=[{class:"d-tooltip",applies:"N/A",description:"Applies tooltip's base styles."},{class:"d-tooltip--show",applies:"d-tooltip",description:"Shows the tooltip."},{class:"d-tooltip--hide",applies:"d-tooltip",description:"Hides the tooltip."},{class:"d-tooltip--hover",applies:"d-btn",description:"Allows the tooltip to become visible on hover or focus-visible; applies to the element triggering the tooltip. This is a CSS-only solution and not recommended."},{class:"d-tooltip--inverted",applies:"d-tooltip",description:"Inverts styles to work on dark backgrounds."},{class:"d-tooltip__arrow--{$direction}",applies:"d-tooltip",description:"Defines which side of the tooltip its arrow appears. This is required as no arrow is assigned by default. Examples below."}],i=[{item:'role="tooltip"',applies:"d-tooltip",description:'Ensures more reliable voiceover support. (<a class="d-link" href="https://www.w3.org/TR/wai-aria-1.1/#tooltip">Source</a>)'},{item:'aria-describedby="#id"',applies:"d-btn",description:`Reads out the tooltip content as a supplementary description for its trigger when the trigger is focused. The aria-describedby value should be the trigger's CSS ID.  (<a class="d-link" href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby">Source</a>)`}];var t={classes:e,accessible:i};export{i as accessible,e as classes,t as default};
