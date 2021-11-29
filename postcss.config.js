//  ================================================================================
//  @@  RESPONSIVE CLASSES GENERATION
//  ================================================================================
//  -- BREAK POINTS
const breakpoints = [
  { prefix: 'sm\\:', mediaQuery: '(max-width: 480px)' },
  { prefix: 'md\\:', mediaQuery: '(max-width: 640px)' },
  { prefix: 'lg\\:', mediaQuery: '(max-width: 980px)' },
  { prefix: 'xl\\:', mediaQuery: '(max-width: 1264px)' },
];
//  -- CLASSES
const classes = [
  /\.d-d-*/,
  /\.d-mt*/,
  /\.d-g-cols*/
];

module.exports = {
    plugins: [
        //  Allows you to use Sass-like features in CSS
        require('precss'),
        //  Allows you to use future CSS features today
        require('postcss-preset-env')({
            stage: 3,
        }),
        require('postcss-responsive-variations')({breakpoints, classes}),
        //  Re-order the CSS declaration
        require('postcss-sorting')({
            "properties-order": [
                "content",
                "counter-increment",
                "counter-reset",
                "list-style",
                "list-style-image",
                "list-style-position",
                "list-style-type",
                "quotes",
                "display",
                "overflow",
                "visibility",
                "clip",
                "position",
                "z-index",
                "top",
                "right",
                "bottom",
                "left",
                "clear",
                "float",
                "flex",
                "flex-basis",
                "flex-direction",
                "flex-flow",
                "flex-grow",
                "flex-shrink",
                "flex-wrap",
                "align-content",
                "align-items",
                "align-self",
                "justify-content",
                "order",
                "grid",
                "grid-area",
                "grid-auto-columns",
                "grid-auto-flow",
                "grid-auto-rows",
                "grid-column",
                "grid-column-end",
                "grid-column-gap",
                "grid-column-start",
                "grid-gap",
                "grid-row",
                "grid-row",
                "grid-row-end",
                "grid-row-gap",
                "grid-row-start",
                "grid-template",
                "grid-template-areas",
                "grid-template-columns",
                "grid-template-rows",
                "box-sizing",
                "width",
                "max-width",
                "min-width",
                "height",
                "max-height",
                "min-height",
                "margin",
                "margin-top",
                "margin-right",
                "margin-bottom",
                "margin-left",
                "padding",
                "padding-top",
                "padding-right",
                "padding-bottom",
                "padding-left",
                "border-radius",
                "border-top-left-radius",
                "border-top-right-radius",
                "border-bottom-right-radius",
                "border-bottom-left-radius",
                "border",
                "border-collapse",
                "border-color",
                "border-radius",
                "border-spacing",
                "border-style",
                "border-width",
                "border-top",
                "border-top-color",
                "border-top-style",
                "border-top-width",
                "border-right",
                "border-right-color",
                "border-right-style",
                "border-right-width",
                "border-bottom",
                "border-bottom-color",
                "border-bottom-style",
                "border-bottom-width",
                "border-left",
                "border-left-color",
                "border-left-style",
                "border-left-width",
                "background",
                "background-attachment",
                "background-clip",
                "background-color",
                "background-image",
                "background-origin",
                "background-position",
                "background-repeat",
                "background-size",
                "box-shadow",
                "object-fit",
                "opacity",
                "outline",
                "outline-color",
                "outline-offset",
                "outline-style",
                "outline-width",
                "color",
                "font",
                "font-family",
                "font-size",
                "font-size-adjust",
                "font-stretch",
                "font-style",
                "font-variant",
                "font-weight",
                "hanging-punctuation",
                "letter-spacing",
                "line-height",
                "text-align",
                "text-decoration",
                "text-indent",
                "text-justify",
                "text-overflow",
                "text-shadow",
                "text-stroke",
                "text-transform",
                "vertical-align",
                "white-space",
                "word-break",
                "word-spacing",
                "animation",
                "animation-delay",
                "animation-direction",
                "animation-duration",
                "animation-iteration-count",
                "animation-fill-mode",
                "animation-name",
                "animation-play-state",
                "animation-timing-function",
                "backface-visibility",
                "perspective",
                "perspective-origin",
                "transform",
                "transform-origin",
                "transform-style",
                "transition",
                "transition-delay",
                "transition-duration",
                "transition-property",
                "transition-timing-function",
                "will-change",
                "appearance",
                "cursor",
                "pointer-events",
                "user-select",
            ]
        }),
    ],
};
