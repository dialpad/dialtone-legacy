export default {
  description:
    'Updates dialtone 7 variables to dialtone 8 design tokens.\n' +
    '- Replaces var(--{size}-{stop}) with var(--dt-size-{stop})\n\t' +
    'eg. var(--size-200) with var(--dt-size-200)',
  patterns: ['**/*.{css,less,scss,sass,styl,html,vue}'],
  expressions: [
    // ------------------------------------------------------------ //
    //                        Size and Space                        //
    // ------------------------------------------------------------ //
    {
      from: /var\(--(size|space)(-[0-9]+)\)/gi,
      to: 'var(--dt-$1$2)',
    },
  ],
};
