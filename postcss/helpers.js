const { REGEX_OPTIONS } = require('./constants');
const dialtoneTokensLight = require('../node_modules/@dialpad/dialtone-tokens/dist/tokens-light.json');
const dialtoneTokensDark = require('../node_modules/@dialpad/dialtone-tokens/dist/tokens-dark.json');

const colorsRegex = new RegExp(`dtColor(Neutral)?(${REGEX_OPTIONS.COLORS})([0-9]{3})?`);
const processColors = (result, color) => {
  const colorName = color[0]
    .replace(colorsRegex, (_, m1, m2, m3) => {
      return [m1, m2, m3].filter(el => !!el).join('-');
    })
    .toLowerCase();
  const hexValue = color[1];
  result.push({ colorName, hexValue });
  return result;
};

module.exports = {
  /**
  * Extract the light and dark colors from dialtone-tokens
  * based on REGEX_OPTIONS.COLORS
  *
  * @returns {Object}
  */
  extractColors () {
    const lightColors = Object.entries(dialtoneTokensLight)
      .filter(([key]) => colorsRegex.test(key))
      .reduce(processColors, []);
    const darkColors = Object.entries(dialtoneTokensDark)
      .filter(([key]) => colorsRegex.test(key))
      .reduce(processColors, []);
    return { light: lightColors, dark: darkColors };
  },

  /**
  * Pass a selector to this function to generate hover / focus selectors
  * of it prefixed with h:, f: and fv:
  * @param {String} selector
  * @returns String
  */
  appendHoverFocusSelectors (selector) {
    const prefixRegex = new RegExp(`\\.(${REGEX_OPTIONS.HOVER_FOCUS_PREFIXES})\\\\:`);
    if (prefixRegex.test(selector)) {
      return selector;
    }
    const hoverSelector = selector.replace('.', '.h\\:').concat(':hover');
    const focusSelector = selector.replace('.', '.f\\:').concat(':focus');
    const focusWithinSelector = selector.replace('.', '.f\\:').concat(':focus-within');
    const focusVisibleSelector = selector.replace('.', '.fv\\:').concat(':focus-visible');
    return `${selector}, ${hoverSelector}, ${focusSelector}, ${focusWithinSelector}, ${focusVisibleSelector}`;
  },

  /**
  * Extract the shadows from dialtone-tokens
  * based on REGEX_OPTIONS.SHADOWS.
  * Performs the name parsing e.g. FocusInset -> focus-inset and
  * returns an array containing the shadowName as key and
  * the max token index + 1 as value
  *
  * @returns {Object}
  */
  extractShadows () {
    const shadowsRegex = new RegExp(`dtShadow(${REGEX_OPTIONS.SHADOW_VARIABLES})([0-9])(\\w+)`);
    return Object.keys(dialtoneTokensLight)
      .filter(key => shadowsRegex.test(key))
      .reduce((shadows, shadow) => {
        const [name, index] = shadow
          .split(shadowsRegex)
          .filter(chunk => !!chunk);

        const shadowName = name
          .split(/(?=[A-Z])/)
          .join('-')
          .toLowerCase();

        shadows[shadowName] = Number.parseInt(index) + 1;
        return shadows;
      }, {});
  },
};
