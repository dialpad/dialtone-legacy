var Site = require('./site.js');

module.exports = {
  sections: [
    {
      title: "About",
      url: `about/dialtone/`,
      subsections: [
        {
          title: "About",
          url: `${Site.baseurl}about/dialtone/`,
          publish: "yes",
          pages: [
            {
              title: "About Dialtone",
              url: `${Site.baseurl}about/dialtone/`,
              publish: "yes",
            },
            {
              title: "Contributing",
              url: `${Site.baseurl}about/contributing/`,
              publish: "yes",
            },
          ],
        },
      ],
    },
    {
      title: "Getting Started",
      url: `getting-started/installation/`,
      subsections: [
        {
          title: "Getting Started",
          url: `${Site.baseurl}getting-started/installation/`,
          publish: "yes",
          pages: [
            {
              title: "Installation",
              url: `${Site.baseurl}getting-started/installation/`,
              publish: "yes",
            },
            {
              title: "Using Dialtone",
              url: `${Site.baseurl}getting-started/usage/`,
              publish: "yes",
            },
            {
              title: "Building Dialtone Locally",
              url: `${Site.baseurl}getting-started/building-locally/`,
              publish: "yes",
            },
          ],
        },
        {
          title: "Accessibility",
          url: `${Site.baseurl}getting-started/accessibility/fundamentals/`,
          publish: "yes",
          pages: [
            {
              title: "Fundamentals",
              url: `${Site.baseurl}getting-started/accessibility/fundamentals/`,
              publish: "yes",
            },
            {
              title: "Best Practices",
              url: `${Site.baseurl}getting-started/accessibility/best-practices/`,
              publish: "yes",
            },
            {
              title: "Tooling",
              url: `${Site.baseurl}getting-started/accessibility/tooling/`,
              publish: "yes",
            },
          ],
        },
      ],
    },
    {
      title: "Design",
      url: `design/colors/color-palette`,
      subsections: [
        {
          title: "Colors",
          url: `${Site.baseurl}design/colors/`,
          publish: "yes",
          pages: [
            {
              title: "Color Palette",
              url: `${Site.baseurl}design/colors/color-palette/`,
            },
          ],
        },
        {
          title: "Icons",
          url: `${Site.baseurl}design/icons/`,
          publish: "yes",
          pages: [
            {
              title: "Brand Icons",
              url: `${Site.baseurl}design/icons/brand/`,
            },
            {
              title: "System Icons",
              url: `${Site.baseurl}design/icons/system/`,
            },
            {
              title: "Weather Icons",
              url: `${Site.baseurl}design/icons/weather/`,
            },
            {
              title: "Sizes",
              url: `${Site.baseurl}design/icons/sizes/`,
            },
            {
              title: "Adding Icons",
              url: `${Site.baseurl}design/icons/adding/`,
            },
          ],
        },
        {
          title: "Illustrations",
          url: `${Site.baseurl}design/illustrations/`,
          publish: "yes",
          pages: [
            {
              title: "Patterns",
              url: `${Site.baseurl}design/illustrations/patterns/`,
            },
            {
              title: "Spot Illustrations",
              url: `${Site.baseurl}design/illustrations/spot/`,
            },
          ],
        },
        {
          title: "Spacing",
          url: `${Site.baseurl}design/spacing/`,
          publish: "yes",
          pages: [
            {
              title: "Spacing System",
              url: `${Site.baseurl}design/spacing/spacing-system/`,
            },
          ],
        },
      ],
    },
    {
      title: "Utilities",
      url: `utilities/backgrounds/attachment`,
      subsections: [
        {
          title: "Backgrounds",
          url: `${Site.baseurl}utilities/backgrounds/`,
          publish: "yes",
          pages: [
            {
              title: "Background Attachment",
              url: `${Site.baseurl}utilities/backgrounds/attachment/`,
            },
            {
              title: "Background Clip",
              url: `${Site.baseurl}utilities/backgrounds/clip/`,
            },
            {
              title: "Background Color",
              url: `${Site.baseurl}utilities/backgrounds/color/`,
            },
            {
              title: "Background Position",
              url: `${Site.baseurl}utilities/backgrounds/position/`,
            },
            {
              title: "Background Repeat",
              url: `${Site.baseurl}utilities/backgrounds/repeat/`,
            },
            {
              title: "Background Size",
              url: `${Site.baseurl}utilities/backgrounds/size/`,
            },
            {
              title: "Gradients",
              url: `${Site.baseurl}utilities/backgrounds/gradients/`,
            },
            {
              title: "Patterns",
              url: `${Site.baseurl}utilities/backgrounds/patterns/`,
            },
          ],
        },
        {
          title: "Borders",
          url: `${Site.baseurl}utilities/borders/`,
          publish: "yes",
          pages: [
            {
              title: "Border Color",
              url: `${Site.baseurl}utilities/borders/color/`,
            },
            {
              title: "Border Direction",
              url: `${Site.baseurl}utilities/borders/direction/`,
            },
            {
              title: "Border Radius",
              url: `${Site.baseurl}utilities/borders/radius/`,
            },
            {
              title: "Border Style",
              url: `${Site.baseurl}utilities/borders/style/`,
            },
            {
              title: "Border Width",
              url: `${Site.baseurl}utilities/borders/width/`,
            },
            {
              title: "Divide Color",
              url: `${Site.baseurl}utilities/borders/divide-color/`,
            },
            {
              title: "Divide Width",
              url: `${Site.baseurl}utilities/borders/divide-width/`,
            },
          ],
        },
        {
          title: "Effects & Transitions",
          url: `${Site.baseurl}utilities/effects/`,
          publish: "yes",
          pages: [
            {
              title: "Box Shadow",
              url: `${Site.baseurl}utilities/effects/box-shadow/`,
            },
            {
              title: "Opacity",
              url: `${Site.baseurl}utilities/effects/opacity/`,
            },
            {
              title: "Transition",
              url: `${Site.baseurl}utilities/effects/transition/`,
            },
          ],
        },
        {
          title: "Flex",
          url: `${Site.baseurl}utilities/flex/`,
          publish: "yes",
          pages: [
            {
              title: "Align Content",
              url: `${Site.baseurl}utilities/flex/align-content/`,
            },
            {
              title: "Align Items",
              url: `${Site.baseurl}utilities/flex/align-items/`,
            },
            {
              title: "Align Self",
              url: `${Site.baseurl}utilities/flex/align-self/`,
            },
            {
              title: "Columns & Layouts",
              url: `${Site.baseurl}utilities/flex/columns-layouts/`,
            },
            {
              title: "Direction, Wrap, & Flow",
              url: `${Site.baseurl}utilities/flex/direction-wrap-flow/`,
            },
            {
              title: "Flex, Grow, & Shrink",
              url: `${Site.baseurl}utilities/flex/flex-grow-shrink/`,
            },
            {
              title: "Justify Content",
              url: `${Site.baseurl}utilities/flex/justify/`,
            },
            {
              title: "Order",
              url: `${Site.baseurl}utilities/flex/order/`,
            },
          ],
        },
        {
          title: "Grid",
          url: `${Site.baseurl}utilities/grid/`,
          publish: "yes",
          pages: [
            {
              title: "Columns",
              url: `${Site.baseurl}utilities/grid/column-start-end-span/`,
            },
            {
              title: "Gap",
              url: `${Site.baseurl}utilities/grid/gap/`,
            },
            {
              title: "Justify Items",
              url: `${Site.baseurl}utilities/grid/justify-items/`,
            },
            {
              title: "Justify Self",
              url: `${Site.baseurl}utilities/grid/justify-self/`,
            },
            {
              title: "Layouts",
              url: `${Site.baseurl}utilities/grid/layouts/`,
            },
            {
              title: "Place Content",
              url: `${Site.baseurl}utilities/grid/place-content/`,
            },
            {
              title: "Place Items",
              url: `${Site.baseurl}utilities/grid/place-items/`,
            },
            {
              title: "Place Self",
              url: `${Site.baseurl}utilities/grid/place-self/`,
            },
            {
              title: "Rows",
              url: `${Site.baseurl}utilities/grid/row-start-end-span/`,
            },
          ],
        },
        {
          title: "Interactivity",
          url: `${Site.baseurl}utilities/interactivity/`,
          publish: "yes",
          pages: [
            {
              title: "Cursor",
              url: `${Site.baseurl}utilities/interactivity/cursor/`,
            },
            {
              title: "Outline",
              url: `${Site.baseurl}utilities/interactivity/outline/`,
            },
            {
              title: "Pointer Events",
              url: `${Site.baseurl}utilities/interactivity/pointer-events/`,
            },
          ],
        },
        {
          title: "Layout",
          url: `${Site.baseurl}utilities/layout/`,
          publish: "yes",
          pages: [
            {
              title: "Box Sizing",
              url: `${Site.baseurl}utilities/layout/box-sizing/`,
            },
            {
              title: "Coordinates",
              url: `${Site.baseurl}utilities/layout/coordinates/`,
            },
            {
              title: "Display",
              url: `${Site.baseurl}utilities/layout/display/`,
            },
            {
              title: "Overflow",
              url: `${Site.baseurl}utilities/layout/overflow/`,
            },
            {
              title: "Position",
              url: `${Site.baseurl}utilities/layout/position/`,
            },
            {
              title: "Visibility",
              url: `${Site.baseurl}utilities/layout/visibility/`,
            },
            {
              title: "Z-Index",
              url: `${Site.baseurl}utilities/layout/z-index/`,
            },
          ],
        },
        {
          title: "Responsive",
          url: `${Site.baseurl}utilities/responsive/`,
          publish: "yes",
          pages: [
            {
              title: "Breakpoints",
              url: `${Site.baseurl}utilities/responsive/breakpoints/`,
            },
          ],
        },
        {
          title: "Sizing",
          url: `${Site.baseurl}utilities/sizing/`,
          publish: "yes",
          pages: [
            {
              title: "Height",
              url: `${Site.baseurl}utilities/sizing/height/`,
            },
            {
              title: "Max-Height",
              url: `${Site.baseurl}utilities/sizing/max-height/`,
            },
            {
              title: "Min-Height",
              url: `${Site.baseurl}utilities/sizing/min-height/`,
            },
            {
              title: "Width",
              url: `${Site.baseurl}utilities/sizing/width/`,
            },
            {
              title: "Max-Width",
              url: `${Site.baseurl}utilities/sizing/max-width/`,
            },
            {
              title: "Min-Width",
              url: `${Site.baseurl}utilities/sizing/min-width/`,
            },
          ],
        },
        {
          title: "Spacing",
          url: `${Site.baseurl}utilities/spacing/`,
          publish: "yes",
          pages: [
            {
              title: "Auto Spacing",
              url: `${Site.baseurl}utilities/spacing/auto-spacing/`,
            },
            {
              title: "Margin",
              url: `${Site.baseurl}utilities/spacing/margin/`,
            },
            {
              title: "Padding",
              url: `${Site.baseurl}utilities/spacing/padding/`,
            },
          ],
        },
        {
          title: "SVG",
          url: `${Site.baseurl}utilities/svg/`,
          publish: "yes",
          pages: [
            {
              title: "Size",
              url: `${Site.baseurl}utilities/svg/size/`,
            },
          ],
        },
        {
          title: "Typography",
          url: `${Site.baseurl}utilities/typography/`,
          publish: "yes",
          pages: [
            {
              title: "Color",
              url: `${Site.baseurl}utilities/typography/color/`,
            },
            {
              title: "Font Family",
              url: `${Site.baseurl}utilities/typography/font-family/`,
            },
            {
              title: "Font Size",
              url: `${Site.baseurl}utilities/typography/font-size/`,
            },
            {
              title: "Font Style",
              url: `${Site.baseurl}utilities/typography/font-style/`,
            },
            {
              title: "Font Weight",
              url: `${Site.baseurl}utilities/typography/font-weight/`,
            },
            {
              title: "Line Height",
              url: `${Site.baseurl}utilities/typography/line-height/`,
            },
            {
              title: "Lists",
              url: `${Site.baseurl}utilities/typography/lists/`,
            },
            {
              title: "Text Align",
              url: `${Site.baseurl}utilities/typography/text-align/`,
            },
            {
              title: "Text Decoration",
              url: `${Site.baseurl}utilities/typography/text-decoration/`,
            },
            {
              title: "Text Opacity",
              url: `${Site.baseurl}utilities/typography/text-opacity/`,
            },
            {
              title: "Text Overflow",
              url: `${Site.baseurl}utilities/typography/text-overflow/`,
            },
            {
              title: "Text Transform",
              url: `${Site.baseurl}utilities/typography/text-transform/`,
            },
            {
              title: "Vertical Align",
              url: `${Site.baseurl}utilities/typography/vertical-align/`,
            },
            {
              title: "Whitespace",
              url: `${Site.baseurl}utilities/typography/whitespace/`,
            },
            {
              title: "Word Break",
              url: `${Site.baseurl}utilities/typography/word-break/`,
            },
          ],
        },
      ],
    },
    {
      title: "Components",
      url: `components/avatar`,
      pages: [
        {
          title: "Avatar",
          url: `${Site.baseurl}components/avatar/`,
          publish: "yes",
        },
        {
          title: "Badge",
          url: `${Site.baseurl}components/badge/`,
          publish: "yes",
        },
        {
          title: "Banner",
          url: `${Site.baseurl}components/banner/`,
          publish: "yes",
        },
        {
          title: "Breadcrumbs",
          url: `${Site.baseurl}components/breadcrumbs/`,
          publish: "yes",
        },
        {
          title: "Button",
          url: `${Site.baseurl}components/button/`,
          publish: "yes",
        },
        {
          title: "Checkbox",
          url: `${Site.baseurl}components/checkbox/`,
          publish: "yes",
        },
        {
          title: "Input",
          url: `${Site.baseurl}components/input/`,
          publish: "yes",
        },
        {
          title: "Link",
          url: `${Site.baseurl}components/link/`,
          publish: "yes",
        },
        {
          title: "Modal",
          url: `${Site.baseurl}components/modal/`,
          publish: "yes",
        },
        {
          title: "Notice",
          url: `${Site.baseurl}components/notice/`,
          publish: "yes",
        },
        {
          title: "Popover",
          url: `${Site.baseurl}components/popover/`,
          publish: "yes",
        },
        {
          title: "Radio",
          url: `${Site.baseurl}components/radio/`,
          publish: "yes",
        },
        {
          title: "Select",
          url: `${Site.baseurl}components/select/`,
          publish: "yes",
        },
        {
          title: "Skeleton",
          url: `${Site.baseurl}components/skeleton/`,
        },
        {
          title: "Table",
          url: `${Site.baseurl}components/table/`,
          publish: "yes",
        },
        {
          title: "Tabs",
          url: `${Site.baseurl}components/tabs/`,
          publish: "yes",
        },
        {
          title: "Toast",
          url: `${Site.baseurl}components/toast/`,
          publish: "yes",
        },
        {
          title: "Toggle",
          url: `${Site.baseurl}components/toggle/`,
          publish: "yes",
        },
        {
          title: "Tooltip",
          url: `${Site.baseurl}components/tooltip/`,
          publish: "yes",
        },
      ],
    },
  ],
};
