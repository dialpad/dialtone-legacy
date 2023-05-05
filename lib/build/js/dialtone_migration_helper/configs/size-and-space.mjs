export default {
  description:
    'Updates dialtone 7 variables to dialtone 8 design tokens.\n' +
    '- Replaces var(--{size}-{stop}) with var(--dt-size-{stop})\n\t' +
    'eg. var(--size-200) with var(--dt-size-200)\n' +
  '- Replaces var(--su{stop}) with var(--dt-size-{stop})\n\t' +
    'eg. var(--su0) with var(--dt-size-0)\n' +
  '- Replaces var(--sun{stop}) with var(--dt-size-{stop}-negative)\n\t' +
    'eg. var(--sun1) with var(--dt-size-100-negative)\n',
  patterns: ['**/*.{css,less,scss,sass,styl,html,vue,md}'],
  expressions: [
    // ------------------------------------------------------------ //
    //                        Size and Space                        //
    // ------------------------------------------------------------ //
    {
      from: /var\(--(size|space)(-[0-9]+)(-negative)?\)/gi,
      to: 'var(--dt-$1$2$3)',
    },
    // Icon variables
    { from: /@icon12/g, to: 'var(--dt-icon-size-100)' },
    { from: /@icon14/g, to: 'var(--dt-icon-size-200)' },
    { from: /@icon16/g, to: 'var(--dt-size-500)' },
    { from: /@icon18/g, to: 'var(--dt-icon-size-300)' },
    { from: /@icon20/g, to: 'var(--dt-icon-size-400)' },
    { from: /@icon24/g, to: 'var(--dt-icon-size-500)' },
    { from: /@icon32/g, to: 'var(--dt-icon-size-600)' },
    { from: /@icon48/g, to: 'var(--dt-size-650)' },
    { from: /@icon64/g, to: 'var(--dt-size-700)' },
    // Positive spacing variables
    { from: /var\(--su0\)/g, to: 'var(--dt-size-0)' },
    { from: /var\(--su1\)/g, to: 'var(--dt-size-100)' },
    { from: /var\(--su2\)/g, to: 'var(--dt-size-200)' },
    { from: /var\(--su4\)/g, to: 'var(--dt-size-300)' },
    { from: /var\(--su6\)/g, to: 'var(--dt-size-350)' },
    { from: /var\(--su8\)/g, to: 'var(--dt-size-400)' },
    { from: /var\(--su12\)/g, to: 'var(--dt-size-450)' },
    { from: /var\(--su16\)/g, to: 'var(--dt-size-500)' },
    { from: /var\(--su24\)/g, to: 'var(--dt-size-550)' },
    { from: /var\(--su32\)/g, to: 'var(--dt-size-600)' },
    { from: /var\(--su48\)/g, to: 'var(--dt-size-650)' },
    { from: /var\(--su64\)/g, to: 'var(--dt-size-700)' },
    { from: /var\(--su72\)/g, to: 'var(--dt-size-720)' },
    { from: /var\(--su84\)/g, to: 'var(--dt-size-730)' },
    { from: /var\(--su96\)/g, to: 'var(--dt-size-750)' },
    { from: /var\(--su102\)/g, to: 'var(--dt-size-760)' },
    { from: /var\(--su114\)/g, to: 'var(--dt-size-775)' },
    { from: /var\(--su128\)/g, to: 'var(--dt-size-800)' },
    // Negative spacing variables
    { from: /var\(--sun1\)/g, to: 'var(--dt-size-100-negative)' },
    { from: /var\(--sun2\)/g, to: 'var(--dt-size-200-negative)' },
    { from: /var\(--sun4\)/g, to: 'var(--dt-size-300-negative)' },
    { from: /var\(--sun6\)/g, to: 'var(--dt-size-350-negative)' },
    { from: /var\(--sun8\)/g, to: 'var(--dt-size-400-negative)' },
    { from: /var\(--sun12\)/g, to: 'var(--dt-size-450-negative)' },
    { from: /var\(--sun16\)/g, to: 'var(--dt-size-500-negative)' },
    { from: /var\(--sun24\)/g, to: 'var(--dt-size-550-negative)' },
    { from: /var\(--sun32\)/g, to: 'var(--dt-size-600-negative)' },
    { from: /var\(--sun48\)/g, to: 'var(--dt-size-650-negative)' },
    { from: /var\(--sun64\)/g, to: 'var(--dt-size-700-negative)' },
    { from: /var\(--sun72\)/g, to: 'var(--dt-size-720-negative)' },
    { from: /var\(--sun84\)/g, to: 'var(--dt-size-730-negative)' },
    { from: /var\(--sun96\)/g, to: 'var(--dt-size-750-negative)' },
    { from: /var\(--sun102\)/g, to: 'var(--dt-size-760-negative)' },
    { from: /var\(--sun114\)/g, to: 'var(--dt-size-775-negative)' },
    { from: /var\(--sun128\)/g, to: 'var(--dt-size-800-negative)' },
  ],
};
