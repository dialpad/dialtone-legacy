export default {
  description:
    'Updates dialtone 7 variables to dialtone 8 design tokens.\n' +
    '- Replaces var(--{fs}-{stop}) with var(--dt-font-size-{stop})\n\t' +
    'eg. var(--fs-200) with var(--dt-font-size-200)\n' +
    '- Replaces var(--{fw}-{kind}) with var(--dt-font-weight-{kind})\n\t' +
    'eg. var(--fw-medium) with var(--dt-font-weight-medium)\n' +
    '- Replaces var(--{fc}-{kind}) with var(--dt-color-foreground-{kind})\n\t' +
    'eg. var(--fc-success-inverted) with var(--dt-color-foreground-success-inverted)\n' +
    '- Replaces var(--{lh}-{stop}) with var(--dt-font-line-height-{stop})\n\t' +
    'eg. var(--lh-200) with var(--dt-font-line-height-200)',
  patterns: ['**/*.{css,less,scss,sass,styl,html,vue}'],
  expressions: [
    // ------------------------------------------------------------ //
    //                            Fonts                             //
    // ------------------------------------------------------------ //
    // Size variables
    {
      from: /var\(--fs(-[0-9]+)\)/gi,
      to: 'var(--dt-font-size$1)',
    },
    // Weight variables
    {
      from: /var\(--fw-(normal|medium|bold)\)/gi,
      to: 'var(--dt-font-weight-$1)',
    },
    // Special weight case
    {
      from: /var\(--fw-semibold\)/gi,
      to: 'var(--dt-font-weight-semi-bold)',
    },
    // Color variables
    {
      // eslint-disable-next-line max-len
      from: /var\(--fc-(primary|secondary|tertiary|muted|placeholder|disabled|critical|success|warning)(-(strong|inverted|strong-inverted))?\)/gi,
      to: 'var(--dt-color-foreground-$1$2)',
    },
    // Line heights
    {
      from: /var\(--lh(-[0-9]+)\)/gi,
      to: 'var(--dt-font-line-height$1)',
    },
  ],
};
