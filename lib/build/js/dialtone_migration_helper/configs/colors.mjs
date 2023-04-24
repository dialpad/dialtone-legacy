export default {
  description:
    'Updates dialtone 7 variables to dialtone 8 design tokens.\n' +
    '- Replaces var(--{color}-{stop}) with var(--dt-color-{color}-{stop})\n\t' +
    'eg. var(--black-200) with var(--dt-color-black-200)',
  patterns: ['**/*.{css,less,scss,sass,styl,html,vue}'],
  expressions: [
    // ------------------------------------------------------------ //
    //                            Colors                            //
    // ------------------------------------------------------------ //
    // LESS variables
    {
      from: /@(black|purple|orange|magenta|gold|green|red|blue|tan)(-[1-9]00)/gi,
      to: '@dt-color-$1$2',
    },
    // Neutral LESS variables
    {
      from: /@(white|black)/gi,
      to: '@dt-color-neutral-$1',
    },
    // CSS variables
    {
      from: /var\(--(black|purple|orange|magenta|gold|green|red|blue|tan)(-[1-9]00)(-(h|s|l|hsl))?\)/gi,
      to: 'var(--dt-color-$1$2$3)',
    },
    // Neutral CSS variables
    {
      from: /var\(--(white|black)\)/gi,
      to: 'var(--dt-color-neutral-$1)',
    },
    // Background colors
    {
      // eslint-disable-next-line max-len
      from: /var\(--bgc-(primary|secondary|moderate|bold|strong|contrast|critical|success|warning|info)(-(subtle|opaque|subtle-opaque|strong))?\)/gi,
      to: 'var(--dt-color-surface-$1$2)',
    },
    // Border colors
    {
      // eslint-disable-next-line max-len
      from: /var\(--bc-(default|subtle|moderate|bold|focus|critical|success|warning|brand|ai|accent)(-(inverted|subtle|strong|subtle-inverted|strong-inverted))?\)/gi,
      to: 'var(--dt-color-border-$1$2)',
    },
  ],
};
