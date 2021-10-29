module.exports = {
  "extends": [
    "stylelint-config-standard",
    "stylelint-config-rational-order",
  ],
  "customSyntax": "postcss-less",
  "rules": {
    "at-rule-no-unknown": [
      true,
      {
        "ignoreAtRules": ["/^ff-/"]
      }
    ],
    "property-no-unknown": null,

    "no-descending-specificity": null, // turn off for now, descending cases could be fixed on the last refactoring
    "function-calc-no-unspaced-operator": null, // otherwise it will be an error during build
    'alpha-value-notation': 'number',
    'max-empty-lines': 3,
    'max-line-length': 150,

    // override stylelint-config-standard rules
    'color-function-notation': null,
    'custom-media-pattern': null,
    'custom-property-pattern': null,
    'media-feature-name-no-vendor-prefix': null,
    'property-no-vendor-prefix': null,
    'selector-class-pattern': null,
    'selector-no-vendor-prefix': null,
    'value-keyword-case': null,
    'value-no-vendor-prefix': null,
    indentation: null,
    'length-zero-no-unit': true,

  }
};
