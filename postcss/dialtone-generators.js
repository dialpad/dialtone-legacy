/* eslint-disable max-len */
const constants = require('./constants.json');

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
      selector: _hoverFocusSelectors(`.d-bgo-${opacity}`),
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
 */
function generateFlexColumnsUtilities ({ Rule, Declaration }) {
  const rules = [];
  for (let i = 1; i <= constants.FLEX_COLUMNS; i++) {
    const flexColumnRule = new Rule({
      selector: `.d-fl-col-${i}`,
      nodes: [
        new Declaration({ prop: 'display', value: 'flex' }),
      ],
    });
    const flexColumnEveryChildRule = new Rule({
      selector: `.d-fl-col-${i} > *`,
      nodes: [
        new Declaration({ prop: '--fl-gap', value: 0 }),
        new Declaration({ prop: '--fl-basis', value: `calc(100% / ${i})` }),
        new Declaration({ prop: 'display', value: 'inline-flex' }),
        new Declaration({ prop: 'margin', value: 'var(--fl-gap)' }),
        new Declaration({ prop: 'flex', value: '1 calc(var(--fl-basis) - (var(--fl-gap) * 2))' }),
      ],
    });
    const flexColumnNthChildRule = new Rule({
      selector: `.d-fl-col-${i} > *:nth-child(-n + ${i})`,
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
 * @type {import('postcss').PluginCreator}
 */
module.exports = (opts = {}) => {
  return {
    postcssPlugin: 'postcss-dialtone-generators',
    Once (root, postcss) {
      const colorUtilities = generateColorUtilities(postcss);
      const opacityUtilities = generateOpacityUtilities(postcss);
      const flexColumnUtilities = generateFlexColumnsUtilities(postcss);
      root.append(
        colorUtilities,
        opacityUtilities,
        flexColumnUtilities,
      );
    },
  };
};

module.exports.postcss = true;
