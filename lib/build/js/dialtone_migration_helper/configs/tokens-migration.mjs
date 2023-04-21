export default {
  description:
    'Updates dialtone 7 variables to dialtone 8 design tokens.\n' +
    '- Replaces var(--{color}-{stop}) with var(--dt-color-{color}-{stop})\n\t' +
    'eg. var(--black-200) with var(--dt-color-black-200)',
  patterns: ['**/*.{css,less,scss,sass,styl,html,vue}'],
  expressions: [
    // LESS colors
    {
      from: /@(black|purple|orange|magenta|gold|green|red|blue|tan)(-[1-9]00)/gi,
      to: '@dt-color-$1$2',
    },
    // Neutral LESS colors
    {
      from: /@(white|black)/gi,
      to: '@dt-color-neutral-$1$2',
    },
    // CSS colors
    {
      from: /var\(--(black|purple|orange|magenta|gold|green|red|blue|tan)(-[1-9]00)(-(h|s|l|hsl))?\)/gi,
      to: 'var(--dt-color-$1$2$3)',
    },
    // Neutral CSS colors
    {
      from: /var\(--(white|black)\)/gi,
      to: 'var(--dt-color-neutral-$1)',
    },
    // Size and Space variables
    {
      from: /var\(--(size|space)(-[0-9]+)\)/gi,
      to: 'var(--dt-$1$2)',
    },
    // Font sizes
    {
      from: /var\(--fs(-[0-9]+)\)/gi,
      to: 'var(--dt-font-size-$1)',
    },
    // Line heights
    {
      from: /var\(--lh(-[0-9]+)\)/gi,
      to: 'var(--dt-font-line-height-$1)',
    },
    // Font colors
    {
      // eslint-disable-next-line max-len
      from: /var\(--fc-(primary|secondary|tertiary|muted|placeholder|disabled|critical|success|warning)(-(strong|inverted|strong-inverted))?\)/gi,
      to: 'var(--dt-color-foreground-$1$2)',
    },
    // Background colors
    {
      from: /var\(--bgc-(secondary)\)/gi,
      to: 'var(--dt-color-surface-$1)',
    },
  ],
};
