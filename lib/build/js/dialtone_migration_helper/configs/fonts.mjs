export default {
  description:
    'Updates dialtone 7 variables to dialtone 8 design tokens.\n' +
    '- Replaces var(--fs-{stop}) with var(--dt-font-size-{stop})\n\t' +
    'eg. var(--fs-200) with var(--dt-font-size-200)\n' +
    '- Replaces var(--fw-{kind}) with var(--dt-font-weight-{kind})\n\t' +
    'eg. var(--fw-medium) with var(--dt-font-weight-medium)\n' +
    '- Replaces var(--lh-{stop}) with var(--dt-font-line-height-{stop})\n\t' +
    'eg. var(--lh-200) with var(--dt-font-line-height-200)\n' +
  '- Replaces var(--ff-{kind}) with var(--dt-font-family-{kind})\n\t' +
    'eg. var(--ff-mono) with var(--dt-font-family-mono)',
  patterns: ['**/*.{css,less,scss,sass,styl,html,vue,md,json}'],
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
    // Line heights
    {
      from: /var\(--lh(-[0-9]+)\)/gi,
      to: 'var(--dt-font-line-height$1)',
    },
    // Font family
    {
      from: /var\(--ff-(mono)\)/gi,
      to: 'var(--dt-font-family-$1)',
    },
  ],
};
