/* eslint-disable max-lines */
/* eslint-disable max-len */

// TODO: Move this constants to the _data directory
const constants = require('./constants.json');
const { fixed: WIDTH_HEIGHTS } = require('../docs/_data/width-height.json');
const dialtoneTokens = require('../node_modules/@dialpad/dialtone-tokens/dist/tokens.json');
const tinycolor = require('tinycolor2');
const cssVariables = [];
// This constant determines the order in which classes are going to be added to the root CSS
const generatedRules = {
  fontColor: [],
  borderColor: [],
  backgroundColor: [],
  dividerColor: [],
  backgroundGradientFromColor: [],
  backgroundGradientToColor: [],
  fontOpacity: [],
  borderOpacity: [],
  dividerOpacity: [],
  backgroundOpacity: [],
  backgroundGradientFromOpacity: [],
  backgroundGradientToOpacity: [],
  flexColumn: [],
  flexColumnEveryChild: [],
  flexColumnNthChild: [],
  flexDirectionColumn: [],
  borderAllRadius: [],
  borderTopRadius: [],
  borderRightRadius: [],
  borderBottomRadius: [],
  borderLeftRadius: [],
  gridColumns: [],
  gridColumnStart: [],
  gridColumnEnd: [],
  gridColumnSpan: [],
  gridRows: [],
  gridRowStart: [],
  gridRowEnd: [],
  gridRowSpan: [],
  gridGap: [],
  gridColumnGap: [],
  gridRowGap: [],
  positionAll: [],
  positionHorizontal: [],
  positionVertical: [],
  positionTop: [],
  positionRight: [],
  positionBottom: [],
  positionLeft: [],
  fixedHeight: [],
  maxHeight: [],
  minHeight: [],
  fixedWidth: [],
  minWidth: [],
  maxWidth: [],
  marginAll: [],
  marginHorizontal: [],
  marginVertical: [],
  marginTop: [],
  marginRight: [],
  marginBottom: [],
  marginLeft: [],
  paddingAll: [],
  paddingHorizontal: [],
  paddingVertical: [],
  paddingTop: [],
  paddingRight: [],
  paddingBottom: [],
  paddingLeft: [],
};

/**
 * Takes the COLORS constant and returns a flat array containing
 * all the posible color-stop combinations
 * @returns {[Object]}
 */
function _extractColors () {
  const colorsRegex = /dtColor(Neutral)?(White|Black|Purple|Blue|Magenta|Gold|Green|Red|Tan)(\d{3})?/;
  return Object.keys(dialtoneTokens)
    .filter(key => colorsRegex.test(key))
    .reduce((colors, color) => {
      const colorName = color
        .replace(colorsRegex, (_, m1, m2, m3) => {
          return [m2, m3].filter(el => !!el).join('-');
        })
        .toLowerCase();
      const hexValue = dialtoneTokens[color];
      colors.push({ colorName, hexValue });
      return colors;
    }, []);
}

/**
 * Pass a selector to this function to generate hover / focus selectors
 * of it prefixed with h:, f: and fv:
 * @param {String} selector
 * @returns String
 */
function _hoverFocusSelectors (selector) {
  if (/\.(h|f|fv)\\/.test(selector)) { return null; }
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
 *  - Gradient Colors
 * @param {Rule} Rule
 * @param {Source} clonedSource
 * @param {Declaration} declaration
 */
function colorUtilities (Rule, clonedSource, declaration) {
  const dialtoneColors = _extractColors();
  dialtoneColors.forEach(({ colorName: color }) => {
    const hslaColor = `hsla(var(--${color}-h) var(--${color}-s) var(--${color}-l)`;
    generatedRules.fontColor.push(new Rule({
      source: clonedSource,
      selector: _hoverFocusSelectors(`.d-fc-${color}`),
      nodes: [
        declaration.clone({ prop: '--fco', value: '100%' }),
        declaration.clone({ prop: 'color', value: `${hslaColor} / var(--fco)) !important` }),
      ],
    }));
    generatedRules.borderColor.push(new Rule({
      source: clonedSource,
      selector: _hoverFocusSelectors(`.d-bc-${color}`),
      nodes: [
        declaration.clone({ prop: '--bco', value: '100%' }),
        declaration.clone({ prop: 'border-color', value: `${hslaColor} / var(--bco)) !important` }),
      ],
    }));
    generatedRules.backgroundColor.push(new Rule({
      source: clonedSource,
      selector: _hoverFocusSelectors(`.d-bgc-${color}`),
      nodes: [
        declaration.clone({ prop: '--bgo', value: '100%' }),
        declaration.clone({ prop: 'background-color', value: `${hslaColor} / var(--bgo)) !important` }),
      ],
    }));
    generatedRules.dividerColor.push(new Rule({
      source: clonedSource,
      selector: `.d-divide-${color} > * + *`,
      nodes: [
        declaration.clone({ prop: '--dco', value: '100%' }),
        declaration.clone({ prop: 'border-color', value: `${hslaColor} / var(--dco)) !important` }),
      ],
    }));
    generatedRules.backgroundGradientFromColor.push(new Rule({
      source: clonedSource,
      selector: _hoverFocusSelectors(`.d-bgg-from-${color}`),
      nodes: [
        declaration.clone({ prop: '--bgg-from-opacity', value: '100%' }),
        declaration.clone({ prop: '--bgg-from', value: `${hslaColor} / var(--bgg-from-opacity))` }),
        declaration.clone({ prop: '--bgg-to', value: `${hslaColor} / 0%)` }),
      ],
    }));
    generatedRules.backgroundGradientToColor.push(new Rule({
      source: clonedSource,
      selector: _hoverFocusSelectors(`.d-bgg-to-${color}`),
      nodes: [
        declaration.clone({ prop: '--bgg-to-opacity', value: '100%' }),
        declaration.clone({ prop: '--bgg-to', value: `${hslaColor} / var(--bgg-from-opacity)) !important` }),
      ],
    }));
  });
}

/**
 * Generate opacity utility classes required.
 *  - Font Opacity
 *  - Border Opacity
 *  - Divider Opacity
 *  - Background Opacity
 *  - Background Gradient Opacity Starting Stop
 *  - Background Gradient Opacity Ending Stop
 * @param {Rule} Rule
 * @param {Source} clonedSource
 * @param {Declaration} declaration
 */
function opacityUtilities (Rule, clonedSource, declaration) {
  constants.OPACITIES.forEach(opacity => {
    generatedRules.fontOpacity.push(new Rule({
      source: clonedSource,
      selector: _hoverFocusSelectors(`.d-fco-${opacity}`),
      nodes: [
        declaration.clone({ prop: '--fco', value: `${opacity}% !important` }),
      ],
    }));
    generatedRules.borderOpacity.push(new Rule({
      source: clonedSource,
      selector: _hoverFocusSelectors(`.d-bco-${opacity}`),
      nodes: [
        declaration.clone({ prop: '--bco', value: `${opacity}% !important` }),
      ],
    }));
    generatedRules.dividerOpacity.push(new Rule({
      source: clonedSource,
      selector: `.d-dco-${opacity}`,
      nodes: [
        declaration.clone({ prop: '--dco', value: `${opacity}% !important` }),
      ],
    }));
    generatedRules.backgroundOpacity.push(new Rule({
      source: clonedSource,
      selector: _hoverFocusSelectors(`.d-bgo${opacity}`),
      nodes: [
        declaration.clone({ prop: '--bgo', value: `${opacity}% !important` }),
      ],
    }));
    generatedRules.backgroundGradientFromOpacity.push(new Rule({
      source: clonedSource,
      selector: _hoverFocusSelectors(`.d-bgg-from-o${opacity}`),
      nodes: [
        declaration.clone({ prop: '--bgg-from-opacity', value: `${opacity}% !important` }),
      ],
    }));
    generatedRules.backgroundGradientToOpacity.push(new Rule({
      source: clonedSource,
      selector: _hoverFocusSelectors(`.d-bgg-to-o${opacity}`),
      nodes: [
        declaration.clone({ prop: '--bgg-to-opacity', value: `${opacity}% !important` }),
      ],
    }));
  });
}

/**
 * Generate flex column utility classes.
 * @param {Rule} Rule
 * @param {Source} clonedSource
 * @param {Declaration} declaration
 */
function flexColumnsUtilities (Rule, clonedSource, declaration) {
  for (let i = 1; i <= constants.FLEX_COLUMNS; i++) {
    generatedRules.flexColumn.push(new Rule({
      source: clonedSource,
      selector: `.d-fl-col${i}`,
      nodes: [
        declaration.clone({ prop: 'display', value: 'flex' }),
      ],
    }));
    generatedRules.flexColumnEveryChild.push(new Rule({
      source: clonedSource,
      selector: `.d-fl-col${i} > *`,
      nodes: [
        declaration.clone({ prop: '--fl-gap', value: 0 }),
        declaration.clone({ prop: '--fl-basis', value: `calc(100% / ${i})` }),
        declaration.clone({ prop: 'display', value: 'inline-flex' }),
        declaration.clone({ prop: 'margin', value: 'var(--fl-gap)' }),
        declaration.clone({ prop: 'flex', value: '1 calc(var(--fl-basis) - (var(--fl-gap) * 2))' }),
      ],
    }));
    generatedRules.flexColumnNthChild.push(new Rule({
      source: clonedSource,
      selector: `.d-fl-col${i} > *:nth-child(-n + ${i})`,
      nodes: [
        declaration.clone({ prop: 'margin-top', value: 0 }),
      ],
    }));
    generatedRules.flexDirectionColumn.push(new Rule({
      source: clonedSource,
      selector: `.d-fl-col${i}.d-fd-column > *`,
      nodes: [
        declaration.clone({ prop: 'margin', value: 'var(--fl-gap) 0' }),
      ],
    }));
  }
}

/**
 * Generate border utility classes.
 * @param {Rule} Rule
 * @param {Source} clonedSource
 * @param {Declaration} declaration
 */
function borderUtilities (Rule, clonedSource, declaration) {
  constants.BORDER_RADIUS_SIZES.forEach(size => {
    generatedRules.borderAllRadius.push(new Rule({
      source: clonedSource,
      selector: `.d-bar${size}`,
      nodes: [
        declaration.clone({ prop: 'border-radius', value: `var(--su${size}) !important` }),
      ],
    }));
    generatedRules.borderTopRadius.push(new Rule({
      source: clonedSource,
      selector: `.d-btr${size}`,
      nodes: [
        declaration.clone({ prop: 'border-top-left-radius', value: `var(--su${size}) !important` }),
        declaration.clone({ prop: 'border-top-right-radius', value: `var(--su${size}) !important` }),
      ],
    }));
    generatedRules.borderRightRadius.push(new Rule({
      source: clonedSource,
      selector: `.d-brr${size}`,
      nodes: [
        declaration.clone({ prop: 'border-top-right-radius', value: `var(--su${size}) !important` }),
        declaration.clone({ prop: 'border-bottom-right-radius', value: `var(--su${size}) !important` }),
      ],
    }));
    generatedRules.borderBottomRadius.push(new Rule({
      source: clonedSource,
      selector: `.d-bbr${size}`,
      nodes: [
        declaration.clone({ prop: 'border-bottom-left-radius', value: `var(--su${size}) !important` }),
        declaration.clone({ prop: 'border-bottom-right-radius', value: `var(--su${size}) !important` }),
      ],
    }));
    generatedRules.borderLeftRadius.push(new Rule({
      source: clonedSource,
      selector: `.d-blr${size}`,
      nodes: [
        declaration.clone({ prop: 'border-top-left-radius', value: `var(--su${size}) !important` }),
        declaration.clone({ prop: 'border-bottom-left-radius', value: `var(--su${size}) !important` }),
      ],
    }));
  });
}

/**
 * Generate Grid column and row utility classes.
 * @param {Rule} Rule
 * @param {Source} clonedSource
 * @param {Declaration} declaration
 */
function gridUtilities (Rule, clonedSource, declaration) {
  for (let i = 1; i <= constants.FLEX_COLUMNS; i++) {
    generatedRules.gridColumns.push(new Rule({
      source: clonedSource,
      selector: `.d-g-cols${i}`,
      nodes: [
        declaration.clone({ prop: 'grid-template-columns', value: `[full-start] repeat(${i}, [col-start] var(--col-width, minmax(0,1fr)) [col-end]) [full-end] !important` }),
      ],
    }));
    generatedRules.gridColumnStart.push(new Rule({
      source: clonedSource,
      selector: `.d-gcs${i}`,
      nodes: [
        declaration.clone({ prop: 'grid-column-start', value: `${i} !important` }),
      ],
    }));
    generatedRules.gridColumnEnd.push(new Rule({
      source: clonedSource,
      selector: `.d-gce${i}`,
      nodes: [
        declaration.clone({ prop: 'grid-column-end', value: `${i} !important` }),
      ],
    }));
    generatedRules.gridColumnSpan.push(new Rule({
      source: clonedSource,
      selector: `.d-gc${i}`,
      nodes: [
        declaration.clone({ prop: 'grid-column', value: `span ${i} / span ${i} !important` }),
      ],
    }));
    generatedRules.gridRows.push(new Rule({
      source: clonedSource,
      selector: `.d-g-rows${i}`,
      nodes: [
        declaration.clone({ prop: 'grid-template-rows', value: `[full-start] repeat(${i}, [col-start] minmax(0,1fr) [col-end]) [full-end] !important` }),
      ],
    }));
    generatedRules.gridRowStart.push(new Rule({
      source: clonedSource,
      selector: `.d-grs${i}`,
      nodes: [
        declaration.clone({ prop: 'grid-row-start', value: `${i} !important` }),
      ],
    }));
    generatedRules.gridRowEnd.push(new Rule({
      source: clonedSource,
      selector: `.d-gre${i}`,
      nodes: [
        declaration.clone({ prop: 'grid-row-end', value: `${i} !important` }),
      ],
    }));
    generatedRules.gridRowSpan.push(new Rule({
      source: clonedSource,
      selector: `.d-gr${i}`,
      nodes: [
        declaration.clone({ prop: 'grid-row', value: `span ${i} / span ${i} !important` }),
      ],
    }));
  }
}

/**
 * Generate Grid gap utility classes.
 * @param {Rule} Rule
 * @param {Source} clonedSource
 * @param {Declaration} declaration
 */
function gapUtilities (Rule, clonedSource, declaration) {
  constants.GAP_SIZES.forEach(size => {
    generatedRules.gridGap.push(new Rule({
      source: clonedSource,
      selector: `.d-gg${size}`,
      nodes: [
        declaration.clone({ prop: 'grid-gap', value: `${size}px !important` }),
      ],
    }));
    generatedRules.gridRowGap.push(new Rule({
      source: clonedSource,
      selector: `.d-grg${size}`,
      nodes: [
        declaration.clone({ prop: 'grid-row-gap', value: `${size}px !important` }),
      ],
    }));
    generatedRules.gridColumnGap.push(new Rule({
      source: clonedSource,
      selector: `.d-gcg${size}`,
      nodes: [
        declaration.clone({ prop: 'grid-column-gap', value: `${size}px !important` }),
      ],
    }));
  });
}

/**
 * Generate Layout utility classes.
 * @param {Rule} Rule
 * @param {Source} clonedSource
 * @param {Declaration} declaration
 */
function layoutUtilities (Rule, clonedSource, declaration) {
  constants.LAYOUT_SIZES.forEach(size => {
    size = Number(size).toString().replace('-', 'n');
    generatedRules.positionTop.push(new Rule({
      source: clonedSource,
      selector: `.d-t${size}`,
      nodes: [
        declaration.clone({ prop: 'top', value: `var(--su${size}) !important` }),
      ],
    }));
    generatedRules.positionRight.push(new Rule({
      source: clonedSource,
      selector: `.d-r${size}`,
      nodes: [
        declaration.clone({ prop: 'right', value: `var(--su${size}) !important` }),
      ],
    }));
    generatedRules.positionBottom.push(new Rule({
      source: clonedSource,
      selector: `.d-b${size}`,
      nodes: [
        declaration.clone({ prop: 'bottom', value: `var(--su${size}) !important` }),
      ],
    }));
    generatedRules.positionLeft.push(new Rule({
      source: clonedSource,
      selector: `.d-l${size}`,
      nodes: [
        declaration.clone({ prop: 'left', value: `var(--su${size}) !important` }),
      ],
    }));
    generatedRules.positionVertical.push(new Rule({
      source: clonedSource,
      selector: `.d-y${size}`,
      nodes: [
        declaration.clone({ prop: 'top', value: `var(--su${size}) !important` }),
        declaration.clone({ prop: 'bottom', value: `var(--su${size}) !important` }),
      ],
    }));
    generatedRules.positionHorizontal.push(new Rule({
      source: clonedSource,
      selector: `.d-x${size}`,
      nodes: [
        declaration.clone({ prop: 'right', value: `var(--su${size}) !important` }),
        declaration.clone({ prop: 'left', value: `var(--su${size}) !important` }),
      ],
    }));
    generatedRules.positionAll.push(new Rule({
      source: clonedSource,
      selector: `.d-all${size}`,
      nodes: [
        declaration.clone({ prop: 'top', value: `var(--su${size}) !important` }),
        declaration.clone({ prop: 'right', value: `var(--su${size}) !important` }),
        declaration.clone({ prop: 'bottom', value: `var(--su${size}) !important` }),
        declaration.clone({ prop: 'left', value: `var(--su${size}) !important` }),
      ],
    }));
  });
}

/**
 * Generate Sizing utility classes.
 * @param {Rule} Rule
 * @param {Source} clonedSource
 * @param {Declaration} declaration
 */
function sizingUtilities (Rule, clonedSource, declaration) {
  WIDTH_HEIGHTS.forEach(size => {
    generatedRules.fixedHeight.push(new Rule({
      source: clonedSource,
      selector: `.d-h${size}`,
      nodes: [
        declaration.clone({ prop: 'height', value: `${size}px !important` }),
      ],
    }));
    generatedRules.minHeight.push(new Rule({
      source: clonedSource,
      selector: `.d-hmn${size}`,
      nodes: [
        declaration.clone({ prop: 'min-height', value: `${size}px !important` }),
      ],
    }));
    generatedRules.maxHeight.push(new Rule({
      source: clonedSource,
      selector: `.d-hmx${size}`,
      nodes: [
        declaration.clone({ prop: 'max-height', value: `${size}px !important` }),
      ],
    }));
    generatedRules.fixedWidth.push(new Rule({
      source: clonedSource,
      selector: `.d-w${size}`,
      nodes: [
        declaration.clone({ prop: 'width', value: `${size}px !important` }),
      ],
    }));
    generatedRules.minWidth.push(new Rule({
      source: clonedSource,
      selector: `.d-wmn${size}`,
      nodes: [
        declaration.clone({ prop: 'min-width', value: `${size}px !important` }),
      ],
    }));
    generatedRules.maxWidth.push(new Rule({
      source: clonedSource,
      selector: `.d-wmx${size}`,
      nodes: [
        declaration.clone({ prop: 'max-width', value: `${size}px !important` }),
      ],
    }));
  });
}

/**
 * Generate Magin utility classes.
 * @param {Rule} Rule
 * @param {Source} clonedSource
 * @param {Declaration} declaration
 */
function marginUtilities (Rule, clonedSource, declaration) {
  constants.MARGIN_SIZES.forEach(size => {
    size = Number(size).toString().replace('-', 'n');
    generatedRules.marginTop.push(new Rule({
      source: clonedSource,
      selector: `.d-mt${size}`,
      nodes: [
        declaration.clone({ prop: 'margin-top', value: `var(--su${size}) !important` }),
      ],
    }));
    generatedRules.marginRight.push(new Rule({
      source: clonedSource,
      selector: `.d-mr${size}`,
      nodes: [
        declaration.clone({ prop: 'margin-right', value: `var(--su${size}) !important` }),
      ],
    }));
    generatedRules.marginBottom.push(new Rule({
      source: clonedSource,
      selector: `.d-mb${size}`,
      nodes: [
        declaration.clone({ prop: 'margin-bottom', value: `var(--su${size}) !important` }),
      ],
    }));
    generatedRules.marginLeft.push(new Rule({
      source: clonedSource,
      selector: `.d-ml${size}`,
      nodes: [
        declaration.clone({ prop: 'margin-left', value: `var(--su${size}) !important` }),
      ],
    }));
    generatedRules.marginHorizontal.push(new Rule({
      source: clonedSource,
      selector: `.d-mx${size}`,
      nodes: [
        declaration.clone({ prop: 'margin-left', value: `var(--su${size}) !important` }),
        declaration.clone({ prop: 'margin-right', value: `var(--su${size}) !important` }),
      ],
    }));
    generatedRules.marginVertical.push(new Rule({
      source: clonedSource,
      selector: `.d-my${size}`,
      nodes: [
        declaration.clone({ prop: 'margin-top', value: `var(--su${size}) !important` }),
        declaration.clone({ prop: 'margin-bottom', value: `var(--su${size}) !important` }),
      ],
    }));
    generatedRules.marginAll.push(new Rule({
      source: clonedSource,
      selector: `.d-m${size}`,
      nodes: [
        declaration.clone({ prop: 'margin', value: `var(--su${size}) !important` }),
      ],
    }));
  });
}

/**
 * Generate Padding utility classes.
 * @param {Rule} Rule
 * @param {Source} clonedSource
 * @param {Declaration} declaration
 */
function paddingUtilities (Rule, clonedSource, declaration) {
  constants.PADDING_SIZES.forEach(size => {
    generatedRules.paddingTop.push(new Rule({
      source: clonedSource,
      selector: `.d-pt${size}`,
      nodes: [
        declaration.clone({ prop: 'padding-top', value: `var(--su${size}) !important` }),
      ],
    }));
    generatedRules.paddingRight.push(new Rule({
      source: clonedSource,
      selector: `.d-pr${size}`,
      nodes: [
        declaration.clone({ prop: 'padding-right', value: `var(--su${size}) !important` }),
      ],
    }));
    generatedRules.paddingBottom.push(new Rule({
      source: clonedSource,
      selector: `.d-pb${size}`,
      nodes: [
        declaration.clone({ prop: 'padding-bottom', value: `var(--su${size}) !important` }),
      ],
    }));
    generatedRules.paddingLeft.push(new Rule({
      source: clonedSource,
      selector: `.d-pl${size}`,
      nodes: [
        declaration.clone({ prop: 'padding-left', value: `var(--su${size}) !important` }),
      ],
    }));
    generatedRules.paddingHorizontal.push(new Rule({
      source: clonedSource,
      selector: `.d-px${size}`,
      nodes: [
        declaration.clone({ prop: 'padding-left', value: `var(--su${size}) !important` }),
        declaration.clone({ prop: 'padding-right', value: `var(--su${size}) !important` }),
      ],
    }));
    generatedRules.paddingVertical.push(new Rule({
      source: clonedSource,
      selector: `.d-py${size}`,
      nodes: [
        declaration.clone({ prop: 'padding-top', value: `var(--su${size}) !important` }),
        declaration.clone({ prop: 'padding-bottom', value: `var(--su${size}) !important` }),
      ],
    }));
    generatedRules.paddingAll.push(new Rule({
      source: clonedSource,
      selector: `.d-p${size}`,
      nodes: [
        declaration.clone({ prop: 'padding', value: `var(--su${size}) !important` }),
      ],
    }));
  });
}

/**
 * Generate HSL CSS Variables.
 * @param {Declaration} declaration
 */
function colorVariables (declaration) {
  const dialtoneColors = _extractColors();
  dialtoneColors.forEach(({ colorName, hexValue }) => {
    const color = tinycolor(hexValue);
    const { h: hue, s: saturation, l: lightness } = color.toHsl();
    const colorVar = `--${colorName}`;
    cssVariables.push([
      declaration.clone({ prop: `${colorVar}-h`, value: `${hue}` }),
      declaration.clone({ prop: `${colorVar}-s`, value: `${saturation * 100}%` }),
      declaration.clone({ prop: `${colorVar}-l`, value: `${lightness * 100}%` }),
      declaration.clone({ prop: `${colorVar}-hsl`, value: `var(${colorVar}-h) var(${colorVar}-s) var(${colorVar}-l)` }),
      declaration.clone({ prop: `${colorVar}`, value: `hsla(var(${colorVar}-h) var(${colorVar}-s) var(${colorVar}-l) / var(--alpha, 100%))` }),
    ]);
  });
}

/**
 *
 * @param {Rule} rule
 * @param {Source} clonedSource
 * @param {Declaration} declaration
 * @private
 */
function _generateUtilities (rule, clonedSource, declaration) {
  colorUtilities(rule, clonedSource, declaration);
  opacityUtilities(rule, clonedSource, declaration);
  flexColumnsUtilities(rule, clonedSource, declaration);
  borderUtilities(rule, clonedSource, declaration);
  gridUtilities(rule, clonedSource, declaration);
  gapUtilities(rule, clonedSource, declaration);
  layoutUtilities(rule, clonedSource, declaration);
  sizingUtilities(rule, clonedSource, declaration);
  marginUtilities(rule, clonedSource, declaration);
  paddingUtilities(rule, clonedSource, declaration);
}

/**
 *
 * @param {Declaration} declaration
 * @private
 */
function _generateVariables (declaration) {
  colorVariables(declaration);
}

/**
 * Generate :hover, :focus, :focus-within and :focus-visible selectors
 * and modifies the rule selector for provided utility classes.
 * @param {Rule} rule
 * @private
 */
function _generateHoverFocusVariations (rule) {
  const backgroundGradientRegex = /\.d-bgg-(none|unset)/;
  const fontColorRegex = /\.d-fc-(primary|secondary|tertiary|muted|placeholder|disabled|success|warning|error|critical|current|transparent|unset)(-(strong-inverted|inverted|strong))?/;
  const backgroundColorRegex = /\.d-bgc-(primary|secondary|moderate|strong|contrast|bold|success|warning|info|error|critical|danger|transparent|unset)(-(opaque|subtle-opaque|subtle|strong))?/;
  const borderColorRegex = /\.d-bc-(default|subtle|moderate|bold|focus|critical|success|warning|brand|accent)(-(inverted|subtle|strong|subtle-inverted|strong-inverted))?/;
  const boxShadowRegex = /\.d-bs-(sm|md|lg|xl|card|none|unset)/;
  const found = [
    backgroundGradientRegex,
    fontColorRegex,
    backgroundColorRegex,
    borderColorRegex,
    boxShadowRegex,
  ].some(regex => regex.test(rule.selector));
  if (!found) return;
  const selectors = rule.selectors.map(selector => _hoverFocusSelectors(selector));
  rule.selector = selectors.filter(selector => !!selector).join(', ');
}

/**
 * @type {import('postcss').PluginCreator}
 */
module.exports = (opts = {}) => {
  return {
    postcssPlugin: 'postcss-dialtone-generators',
    Once (root, { Rule }) {
      const lastRule = root.last;
      const clonedSource = lastRule.source;
      const declaration = lastRule.first;

      _generateUtilities(Rule, clonedSource, declaration);
      _generateVariables(declaration);
      _generateHoverFocusVariations(root);

      root.insertAfter(lastRule, new Rule({ selector: 'body', nodes: cssVariables, source: clonedSource }));
      root.insertAfter(lastRule, Object.values(generatedRules).flat());
    },
    Root (root) {
      root.walkRules((rule) => {
        _generateHoverFocusVariations(rule);
      });
    },
  };
};

module.exports.postcss = true;
