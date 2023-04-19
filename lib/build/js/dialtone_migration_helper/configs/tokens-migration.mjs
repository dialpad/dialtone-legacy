export default {
  description:
    'Updates dialtone 7 variables to dialtone 8 design tokens.\n' +
    '- Replaces var(--{color}-{stop}) with var(--dt-color-{color}-{stop})\n\t' +
    'eg. var(--black-200) with var(--dt-color-black-200)',
  patterns: ['**/*.{css,less,scss,sass,styl,html,vue}'],
  expressions: [
    {
      from: /var\(--(white|black|purple|orange|magenta|gold|green|red|blue|tan)(-[1-9]00)?\)/gi,
      to: 'var(--dt-color-$1$2)',
    },
  ],
};
