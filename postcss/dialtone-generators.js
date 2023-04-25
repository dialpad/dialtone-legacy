/* eslint-disable max-lines */
/* eslint-disable max-len */

// TODO: Move this constants to the _data directory
const constants = require('./constants.json');
const { fixed: WIDTH_HEIGHTS } = require('../docs/_data/width-height.json');

/**
 * Takes the COLORS constant and returns a flat array containing
 * all the posible color-stop combinations
 * @returns Array
 */
function _processColors () {
  return constants.COLORS.reduce((acc, color) => {
    if (!color.stops) {
      acc.push(`${color.name}`);
      return acc;
    }

    const stops = color.stops.map(stop => `${color.name}-${stop}`);
    return acc.concat(stops);
  }, []);
}

/**
 * Pass a selector to this function to generate hover / focus selectors
 * of it prefixed with h:, f: and fv:
 * @param {String} selector
 * @returns String
 */
function _hoverFocusSelectors (selector) {
  const hoverSelector = selector.replace('.', '.h\\:').concat(':hover');
  const focusSelector = selector.replace('.', '.f\\:').concat(':focus');
  const focusWithinSelector = selector.replace('.', '.f\\:').concat(':focus-within');
  const focusVisibleSelector = selector.replace('.', '.fv\\:').concat(':focus-visible');
  return `${selector}, ${hoverSelector}, ${focusSelector}, ${focusWithinSelector}, ${focusVisibleSelector}`;
}

/**
 * Generate color utility classes.
 *  - Font Color
 *  - Border Color
 *  - Background Color
 *  - Divider Color
 *  - Grandient Colors
 * @param {Rule, Declaration} postcss
 */
function generateColorUtilities ({ Rule, Declaration }) {
  const processedColors = _processColors();
  const rules = [];
  processedColors.forEach(color => {
    const hslaColor = `hsla(var(--${color}-h) var(--${color}-s) var(--${color}-l)`;
    const fontColorRule = new Rule({
      selector: _hoverFocusSelectors(`.d-fc-${color}`),
      nodes: [
        new Declaration({ prop: '--fco', value: '100%' }),
        new Declaration({ prop: 'color', value: `${hslaColor} / var(--fco)) !important` }),
      ],
    });
    const borderColorRule = new Rule({
      selector: _hoverFocusSelectors(`.d-bc-${color}`),
      nodes: [
        new Declaration({ prop: '--bco', value: '100%' }),
        new Declaration({ prop: 'border-color', value: `${hslaColor} / var(--bco)) !important` }),
      ],
    });
    const backgroundColorRule = new Rule({
      selector: _hoverFocusSelectors(`.d-bgc-${color}`),
      nodes: [
        new Declaration({ prop: '--bgo', value: '100%' }),
        new Declaration({ prop: 'background-color', value: `${hslaColor} / var(--bgo)) !important` }),
      ],
    });
    const dividerColor = new Rule({
      selector: `.d-divide-${color} > * + *`,
      nodes: [
        new Declaration({ prop: '--dco', value: '100%' }),
        new Declaration({ prop: 'border-color', value: `${hslaColor} / var(--dco)) !important` }),
      ],
    });
    const backgroundGradientFromColorRule = new Rule({
      selector: _hoverFocusSelectors(`.d-bgg-from-${color}`),
      nodes: [
        new Declaration({ prop: '--bgg-from-opacity', value: '100%' }),
        new Declaration({ prop: '--bgg-from', value: `${hslaColor} / var(--bgg-from-opacity))` }),
        new Declaration({ prop: '--bgg-to', value: `${hslaColor} / 0%)` }),
      ],
    });
    const backgroundGradientToColorRule = new Rule({
      selector: _hoverFocusSelectors(`.d-bgg-to-${color}`),
      nodes: [
        new Declaration({ prop: '--bgg-to-opacity', value: '100%' }),
        new Declaration({ prop: '--bgg-to', value: `${hslaColor} / var(--bgg-from-opacity)) !important` }),
      ],
    });
    rules.push(
      fontColorRule,
      borderColorRule,
      backgroundColorRule,
      dividerColor,
      backgroundGradientFromColorRule,
      backgroundGradientToColorRule,
    );
  });
  return rules;
}

/**
 * Generate opacity utility classes required.
 *  - Font Opacity
 *  - Border Opacity
 *  - Divider Opacity
 *  - Background Opacity
 *  - Background Gradient Opacity Starting Stop
 *  - Background Gradient Opacity Ending Stop
 * @param {Rule, Declaration} postcss
 */
function generateOpacityUtilities ({ Rule, Declaration }) {
  const rules = [];
  constants.OPACITIES.forEach(opacity => {
    const fontOpacityRule = new Rule({
      selector: _hoverFocusSelectors(`.d-fco-${opacity}`),
      nodes: [
        new Declaration({ prop: '--fco', value: `${opacity}% !important` }),
      ],
    });
    const borderOpacityRule = new Rule({
      selector: _hoverFocusSelectors(`.d-bco-${opacity}`),
      nodes: [
        new Declaration({ prop: '--bco', value: `${opacity}% !important` }),
      ],
    });
    const dividerOpacityRule = new Rule({
      selector: `.d-dco-${opacity}`,
      nodes: [
        new Declaration({ prop: '--dco', value: `${opacity}% !important` }),
      ],
    });
    const backgroundOpacityRule = new Rule({
      selector: _hoverFocusSelectors(`.d-bgo${opacity}`),
      nodes: [
        new Declaration({ prop: '--bgo', value: `${opacity}% !important` }),
      ],
    });
    const backgroundGradientFromOpacityRule = new Rule({
      selector: _hoverFocusSelectors(`.d-bgg-from-o${opacity}`),
      nodes: [
        new Declaration({ prop: '--bgg-from-opacity', value: `${opacity}% !important` }),
      ],
    });
    const backgroundGradientToOpacityRule = new Rule({
      selector: _hoverFocusSelectors(`.d-bgg-to-o${opacity}`),
      nodes: [
        new Declaration({ prop: '--bgg-to-opacity', value: `${opacity}% !important` }),
      ],
    });
    rules.push(
      fontOpacityRule,
      borderOpacityRule,
      dividerOpacityRule,
      backgroundOpacityRule,
      backgroundGradientFromOpacityRule,
      backgroundGradientToOpacityRule,
    );
  });
  return rules;
}

/**
 * Generate flex column utility classes.
 * @param {Rule, Declaration} postcss
 */
function generateFlexColumnsUtilities ({ Rule, Declaration }) {
  const rules = [];
  for (let i = 1; i <= constants.FLEX_COLUMNS; i++) {
    const flexColumnRule = new Rule({
      selector: `.d-fl-col${i}`,
      nodes: [
        new Declaration({ prop: 'display', value: 'flex' }),
      ],
    });
    const flexColumnEveryChildRule = new Rule({
      selector: `.d-fl-col${i} > *`,
      nodes: [
        new Declaration({ prop: '--fl-gap', value: 0 }),
        new Declaration({ prop: '--fl-basis', value: `calc(100% / ${i})` }),
        new Declaration({ prop: 'display', value: 'inline-flex' }),
        new Declaration({ prop: 'margin', value: 'var(--fl-gap)' }),
        new Declaration({ prop: 'flex', value: '1 calc(var(--fl-basis) - (var(--fl-gap) * 2))' }),
      ],
    });
    const flexColumnNthChildRule = new Rule({
      selector: `.d-fl-col${i} > *:nth-child(-n + ${i})`,
      nodes: [
        new Declaration({ prop: 'margin-top', value: 0 }),
      ],
    });
    const flexDirectionColumnRule = new Rule({
      selector: `.d-fl-col${i}.d-fd-column > *`,
      nodes: [
        new Declaration({ prop: 'margin', value: 'var(--fl-gap) 0' }),
      ],
    });
    rules.push(
      flexColumnRule,
      flexColumnEveryChildRule,
      flexColumnNthChildRule,
      flexDirectionColumnRule,
    );
  }
  return rules;
}

/**
 * Generates Hover and Focus variations for necessary utility classes.
 * @param {PostCSS Root Node} root
 */
function generateHoverFocusVariations (root) {
  const backgroundGradientRegex = /\.d-bgg-(none|unset)/;
  const fontColorRegex = /\.d-fc-(primary|secondary|tertiary|muted|placeholder|disabled|success|warning|error|critical|current|transparent|unset)(-(strong-inverted|inverted|strong))?/;
  const backgroundColorRegex = /\.d-bgc-(primary|secondary|moderate|strong|contrast|bold|success|warning|info|error|critical|danger|transparent|unset)(-(opaque|subtle-opaque|subtle|strong))?/;
  const borderColorRegex = /\.d-bc-(default|subtle|moderate|bold|focus|critical|success|warning|brand|accent)(-(inverted|subtle|strong|subtle-inverted|strong-inverted))?/;
  const boxShadowRegex = /\.d-bs-(sm|md|lg|xl|card|none|unset)/;
  root.walkRules((rule) => {
    const found = [
      backgroundGradientRegex,
      fontColorRegex,
      backgroundColorRegex,
      borderColorRegex,
      boxShadowRegex,
    ].some(regex => regex.test(rule.selector));
    if (!found) return;
    rule.selector = _hoverFocusSelectors(rule.selector);
  });
}

/**
 * Generate border utility classes.
 * @param {postCSS Instance} {Rule, Declaration}
 */
function generateBorderUtilities ({ Rule, Declaration }) {
  const rules = [];
  constants.BORDER_RADIUS_SIZES.forEach(size => {
    const borderAllRadius = new Rule({
      selector: `.d-bar${size}`,
      nodes: [
        new Declaration({ prop: 'border-radius', value: `var(--su${size}) !important` }),
      ],
    });
    const borderTopRadius = new Rule({
      selector: `.d-btr${size}`,
      nodes: [
        new Declaration({ prop: 'border-top-left-radius', value: `var(--su${size}) !important` }),
        new Declaration({ prop: 'border-top-right-radius', value: `var(--su${size}) !important` }),
      ],
    });
    const borderRightRadius = new Rule({
      selector: `.d-brr${size}`,
      nodes: [
        new Declaration({ prop: 'border-top-right-radius', value: `var(--su${size}) !important` }),
        new Declaration({ prop: 'border-bottom-right-radius', value: `var(--su${size}) !important` }),
      ],
    });
    const borderBottomRadius = new Rule({
      selector: `.d-bbr${size}`,
      nodes: [
        new Declaration({ prop: 'border-bottom-left-radius', value: `var(--su${size}) !important` }),
        new Declaration({ prop: 'border-bottom-right-radius', value: `var(--su${size}) !important` }),
      ],
    });
    const borderLeftRadius = new Rule({
      selector: `.d-blr${size}`,
      nodes: [
        new Declaration({ prop: 'border-top-left-radius', value: `var(--su${size}) !important` }),
        new Declaration({ prop: 'border-bottom-left-radius', value: `var(--su${size}) !important` }),
      ],
    });
    rules.push(
      borderAllRadius,
      borderTopRadius,
      borderRightRadius,
      borderBottomRadius,
      borderLeftRadius,
    );
  });
  return rules;
}

/**
 * Generate Grid column and row utility classes.
 * @param {postCSS Instance} {Rule, Declaration}
 */
function generateGridUtilities ({ Rule, Declaration }) {
  const rules = [];
  for (let i = 1; i <= constants.FLEX_COLUMNS; i++) {
    const columnsAll = new Rule({
      selector: `.d-g-cols${i}`,
      nodes: [
        new Declaration({ prop: 'grid-template-columns', value: `[full-start] repeat(${i}, [col-start] var(--col-width, minmax(0,1fr)) [col-end]) [full-end] !important` }),
      ],
    });
    const columnStart = new Rule({
      selector: `.d-gcs${i}`,
      nodes: [
        new Declaration({ prop: 'grid-column-start', value: `${i} !important` }),
      ],
    });
    const columnEnd = new Rule({
      selector: `.d-gce${i}`,
      nodes: [
        new Declaration({ prop: 'grid-column-end', value: `${i} !important` }),
      ],
    });
    const columnSpan = new Rule({
      selector: `.d-gc${i}`,
      nodes: [
        new Declaration({ prop: 'grid-column', value: `span ${i} / span ${i} !important` }),
      ],
    });
    const rowsAll = new Rule({
      selector: `.d-g-rows${i}`,
      nodes: [
        new Declaration({ prop: 'grid-template-rows', value: `[full-start] repeat(${i}, [col-start] minmax(0,1fr) [col-end]) [full-end] !important` }),
      ],
    });
    const rowStart = new Rule({
      selector: `.d-grs${i}`,
      nodes: [
        new Declaration({ prop: 'grid-row-start', value: `${i} !important` }),
      ],
    });
    const rowEnd = new Rule({
      selector: `.d-gre${i}`,
      nodes: [
        new Declaration({ prop: 'grid-row-end', value: `${i} !important` }),
      ],
    });
    const rowSpan = new Rule({
      selector: `.d-gr${i}`,
      nodes: [
        new Declaration({ prop: 'grid-row', value: `span ${i} / span ${i} !important` }),
      ],
    });
    rules.push(
      columnsAll,
      columnStart,
      columnEnd,
      columnSpan,
      rowsAll,
      rowStart,
      rowEnd,
      rowSpan,
    );
  }
  return rules;
}

/**
 * Generate Gap utility classes.
 * @param {postCSS Instance} {Rule, Declaration}
 */
function generateGapUtilities ({ Rule, Declaration }) {
  const rules = [];
  constants.GAP_SIZES.forEach(size => {
    const allGaps = new Rule({
      selector: `.d-gg${size}`,
      nodes: [
        new Declaration({ prop: 'grid-gap', value: `${size} !important` }),
      ],
    });
    const rowGaps = new Rule({
      selector: `.d-grg${size}`,
      nodes: [
        new Declaration({ prop: 'grid-row-gap', value: `${size} !important` }),
      ],
    });
    const columnGaps = new Rule({
      selector: `.d-gcg${size}`,
      nodes: [
        new Declaration({ prop: 'grid-column-gap', value: `${size} !important` }),
      ],
    });
    rules.push(
      allGaps,
      rowGaps,
      columnGaps,
    );
  });
  return rules;
}

/**
 * Generate Layout utility classes.
 * @param {postCSS Instance} {Rule, Declaration}
 */
function generateLayoutUtilities ({ Rule, Declaration }) {
  const rules = [];
  constants.LAYOUT_SIZES.forEach(size => {
    size = Number(size).toString().replace('-', 'n');
    const positionTop = new Rule({
      selector: `.d-t${size}`,
      nodes: [
        new Declaration({ prop: 'top', value: `var(--su${size}) !important` }),
      ],
    });
    const positionRight = new Rule({
      selector: `.d-r${size}`,
      nodes: [
        new Declaration({ prop: 'right', value: `var(--su${size}) !important` }),
      ],
    });
    const positionBottom = new Rule({
      selector: `.d-b${size}`,
      nodes: [
        new Declaration({ prop: 'bottom', value: `var(--su${size}) !important` }),
      ],
    });
    const positionLeft = new Rule({
      selector: `.d-l${size}`,
      nodes: [
        new Declaration({ prop: 'left', value: `var(--su${size}) !important` }),
      ],
    });
    const positionYAxis = new Rule({
      selector: `.d-y${size}`,
      nodes: [
        new Declaration({ prop: 'top', value: `var(--su${size}) !important` }),
        new Declaration({ prop: 'bottom', value: `var(--su${size}) !important` }),
      ],
    });
    const positionXAxis = new Rule({
      selector: `.d-y${size}`,
      nodes: [
        new Declaration({ prop: 'right', value: `var(--su${size}) !important` }),
        new Declaration({ prop: 'left', value: `var(--su${size}) !important` }),
      ],
    });
    const positionAll = new Rule({
      selector: `.d-all${size}`,
      nodes: [
        new Declaration({ prop: 'top', value: `var(--su${size}) !important` }),
        new Declaration({ prop: 'right', value: `var(--su${size}) !important` }),
        new Declaration({ prop: 'bottom', value: `var(--su${size}) !important` }),
        new Declaration({ prop: 'left', value: `var(--su${size}) !important` }),
      ],
    });
    rules.push(
      positionTop,
      positionRight,
      positionBottom,
      positionLeft,
      positionYAxis,
      positionXAxis,
      positionAll,
    );
  });
  return rules;
}

/**
 * Generate Sizing utility classes.
 * @param {postCSS Instance} {Rule, Declaration}
 */
function generateSizingUtilities ({ Rule, Declaration }) {
  const rules = [];
  WIDTH_HEIGHTS.forEach(size => {
    const fixedHeight = new Rule({
      selector: `.d-h${size}`,
      nodes: [
        new Declaration({ prop: 'height', value: `${size}px !important` }),
      ],
    });
    const minHeight = new Rule({
      selector: `.d-hmn${size}`,
      nodes: [
        new Declaration({ prop: 'min-height', value: `${size}px !important` }),
      ],
    });
    const maxHeight = new Rule({
      selector: `.d-hmx${size}`,
      nodes: [
        new Declaration({ prop: 'max-height', value: `${size}px !important` }),
      ],
    });
    const fixedWidth = new Rule({
      selector: `.d-w${size}`,
      nodes: [
        new Declaration({ prop: 'width', value: `${size}px !important` }),
      ],
    });
    const minWidth = new Rule({
      selector: `.d-wmn${size}`,
      nodes: [
        new Declaration({ prop: 'min-width', value: `${size}px !important` }),
      ],
    });
    const maxWidth = new Rule({
      selector: `.d-wmx${size}`,
      nodes: [
        new Declaration({ prop: 'max-width', value: `${size}px !important` }),
      ],
    });

    rules.push(
      fixedHeight,
      minHeight,
      maxHeight,
      fixedWidth,
      minWidth,
      maxWidth,
    );
  });
  return rules;
}

/**
 * Generate Magin utility classes.
 * @param {postCSS Instance} {Rule, Declaration}
 */
function generateMarginUtilities ({ Rule, Declaration }) {
  const rules = [];
  constants.MARGIN_SIZES.forEach(size => {
    size = Number(size).toString().replace('-', 'n');
    const allMargin = new Rule({
      selector: `.d-m${size}`,
      nodes: [
        new Declaration({ prop: 'margin', value: `var(--su${size}) !important` }),
      ],
    });
    const topMargin = new Rule({
      selector: `.d-mt${size}`,
      nodes: [
        new Declaration({ prop: 'margin-top', value: `var(--su${size}) !important` }),
      ],
    });
    const rightMargin = new Rule({
      selector: `.d-mr${size}`,
      nodes: [
        new Declaration({ prop: 'margin-right', value: `var(--su${size}) !important` }),
      ],
    });
    const bottomMargin = new Rule({
      selector: `.d-mb${size}`,
      nodes: [
        new Declaration({ prop: 'margin-bottom', value: `var(--su${size}) !important` }),
      ],
    });
    const leftMargin = new Rule({
      selector: `.d-ml${size}`,
      nodes: [
        new Declaration({ prop: 'margin-left', value: `var(--su${size}) !important` }),
      ],
    });
    const horizontalMargin = new Rule({
      selector: `.d-mx${size}`,
      nodes: [
        new Declaration({ prop: 'margin-top', value: `var(--su${size}) !important` }),
        new Declaration({ prop: 'margin-bottom', value: `var(--su${size}) !important` }),
      ],
    });
    const verticalMargin = new Rule({
      selector: `.d-my${size}`,
      nodes: [
        new Declaration({ prop: 'margin-left', value: `var(--su${size}) !important` }),
        new Declaration({ prop: 'margin-right', value: `var(--su${size}) !important` }),
      ],
    });

    rules.push(
      allMargin,
      topMargin,
      rightMargin,
      bottomMargin,
      leftMargin,
      horizontalMargin,
      verticalMargin,
    );
  });
  return rules;
}

/**
 * Generate Padding utility classes.
 * @param {postCSS Instance} {Rule, Declaration}
 */
function generatePaddingUtilities ({ Rule, Declaration }) {
  const rules = [];
  constants.PADDING_SIZES.forEach(size => {
    const allPadding = new Rule({
      selector: `.d-p${size}`,
      nodes: [
        new Declaration({ prop: 'padding', value: `var(--su${size}) !important` }),
      ],
    });
    const topPadding = new Rule({
      selector: `.d-pt${size}`,
      nodes: [
        new Declaration({ prop: 'padding-top', value: `var(--su${size}) !important` }),
      ],
    });
    const rightPadding = new Rule({
      selector: `.d-pr${size}`,
      nodes: [
        new Declaration({ prop: 'padding-right', value: `var(--su${size}) !important` }),
      ],
    });
    const bottomPadding = new Rule({
      selector: `.d-pb${size}`,
      nodes: [
        new Declaration({ prop: 'padding-bottom', value: `var(--su${size}) !important` }),
      ],
    });
    const leftPadding = new Rule({
      selector: `.d-pl${size}`,
      nodes: [
        new Declaration({ prop: 'padding-left', value: `var(--su${size}) !important` }),
      ],
    });
    const horizontalPadding = new Rule({
      selector: `.d-px${size}`,
      nodes: [
        new Declaration({ prop: 'padding-top', value: `var(--su${size}) !important` }),
        new Declaration({ prop: 'padding-bottom', value: `var(--su${size}) !important` }),
      ],
    });
    const verticalPadding = new Rule({
      selector: `.d-py${size}`,
      nodes: [
        new Declaration({ prop: 'padding-left', value: `var(--su${size}) !important` }),
        new Declaration({ prop: 'padding-right', value: `var(--su${size}) !important` }),
      ],
    });

    rules.push(
      allPadding,
      topPadding,
      rightPadding,
      bottomPadding,
      leftPadding,
      horizontalPadding,
      verticalPadding,
    );
  });
  return rules;
}

/**
 * @type {import('postcss').PluginCreator}
 */
module.exports = (opts = {}) => {
  return {
    postcssPlugin: 'postcss-dialtone-generators',
    Once (root, postcss) {
      console.log('- Executing once -');
      const colorUtilities = generateColorUtilities(postcss);
      const opacityUtilities = generateOpacityUtilities(postcss);
      const flexColumnUtilities = generateFlexColumnsUtilities(postcss);
      const borderUtilities = generateBorderUtilities(postcss);
      const gridUtilities = generateGridUtilities(postcss);
      const gapUtilities = generateGapUtilities(postcss);
      const layoutUtilities = generateLayoutUtilities(postcss);
      const sizingUtilities = generateSizingUtilities(postcss);
      const marginUtilities = generateMarginUtilities(postcss);
      const paddingUtilities = generatePaddingUtilities(postcss);
      root.append(
        colorUtilities,
        opacityUtilities,
        flexColumnUtilities,
        borderUtilities,
        gridUtilities,
        gapUtilities,
        layoutUtilities,
        sizingUtilities,
        marginUtilities,
        paddingUtilities,
      );
      generateHoverFocusVariations(root, postcss);
    },
  };
};

module.exports.postcss = true;
