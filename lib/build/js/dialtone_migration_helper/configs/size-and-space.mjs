export default {
  description:
    'Updates dialtone 7 variables to dialtone 8 design tokens.\n' +
    '- Replaces var(--{size}-{stop}) with var(--dt-size-{stop})\n\t' +
      'eg. var(--size-200) with var(--dt-size-200)\n' +
    '- Replaces @{size}{stop} with var(--dt-size-{stop})\n\t' +
      'eg. @size4 with var(--dt-size-300)\n' +
    '- Replaces @icon{size} with var(--dt-icon-size-{stop})\n\t' +
      'eg. @icon12 with var(--dt-icon-size-100)\n' +
    '- Replaces var(--su{stop}) with var(--dt-size-{stop})\n\t' +
      'eg. var(--su0) with var(--dt-size-0)\n' +
    '- Replaces @su{stop} with var(--dt-size-{stop})\n\t' +
      'eg. @su8 with var(--dt-size-400)\n' +
    '- Replaces var(--sun{stop}) with var(--dt-size-{stop}-negative)\n\t' +
      'eg. var(--sun1) with var(--dt-size-100-negative)\n' +
    '- Replaces var(--br{stop}) with var(--dt-size-radius-{stop})\n\t' +
      'eg. var(--br4) with var(--dt-size-radius-300)\n' +
    '- Replaces @br{stop} with var(--dt-size-radius-{stop})\n\t' +
      'eg. @br-pill with var(--dt-size-radius-pill)\n',
  patterns: ['**/*.{css,less,scss,sass,styl,html,vue,md}'],
  expressions: [
    // ------------------------------------------------------------ //
    //                        Size and Space                        //
    // ------------------------------------------------------------ //
    {
      from: /var\(--(size|space)(-[0-9]+)(-negative)?\)/gi,
      to: 'var(--dt-$1$2$3)',
    },

    // Size LESS variables
    { from: /@size0/g, to: 'var(--dt-size-0)' },
    { from: /@size1/g, to: 'var(--dt-size-100)' },
    { from: /@size2/g, to: 'var(--dt-size-200)' },
    { from: /@size4/g, to: 'var(--dt-size-300)' },
    { from: /@size6/g, to: 'var(--dt-size-350)' },
    { from: /@size8/g, to: 'var(--dt-size-400)' },
    { from: /@size12/g, to: 'var(--dt-size-450)' },
    { from: /@size16/g, to: 'var(--dt-size-500)' },
    { from: /@size20/g, to: 'var(--dt-size-525)' },
    { from: /@size24/g, to: 'var(--dt-size-550)' },
    { from: /@size32/g, to: 'var(--dt-size-600)' },
    { from: /@size42/g, to: 'var(--dt-size-625)' },
    { from: /@size48/g, to: 'var(--dt-size-650)' },
    { from: /@size64/g, to: 'var(--dt-size-700)' },
    { from: /@size72/g, to: 'var(--dt-size-720)' },
    { from: /@size84/g, to: 'var(--dt-size-730)' },
    { from: /@size96/g, to: 'var(--dt-size-750)' },
    { from: /@size102/g, to: 'var(--dt-size-760)' },
    { from: /@size114/g, to: 'var(--dt-size-775)' },
    { from: /@size128/g, to: 'var(--dt-size-800)' },
    { from: /@size164/g, to: 'var(--dt-size-825)' },
    { from: /@size216/g, to: 'var(--dt-size-875)' },
    { from: /@size264/g, to: 'var(--dt-size-905)' },
    { from: /@size332/g, to: 'var(--dt-size-925)' },
    { from: /@size464/g, to: 'var(--dt-size-975)' },
    { from: /@size512/g, to: 'var(--dt-size-1000)' },
    { from: /@size628/g, to: 'var(--dt-size-1020)' },
    { from: /@size764/g, to: 'var(--dt-size-1040)' },
    { from: /@size828/g, to: 'var(--dt-size-1060)' },
    { from: /@size912/g, to: 'var(--dt-size-1080)' },
    { from: /@size1024/g, to: 'var(--dt-size-1100)' },
    { from: /@size1140/g, to: 'var(--dt-size-1115)' },
    { from: /@size1268/g, to: 'var(--dt-size-1120)' },
    { from: /@size1340/g, to: 'var(--dt-size-1130)' },

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
    // Positive spacing
    { from: /@su0|var\(--su0\)/g, to: 'var(--dt-size-0)' },
    { from: /@su1|var\(--su1\)/g, to: 'var(--dt-size-100)' },
    { from: /@su2|var\(--su2\)/g, to: 'var(--dt-size-200)' },
    { from: /@su4|var\(--su4\)/g, to: 'var(--dt-size-300)' },
    { from: /@su6|var\(--su6\)/g, to: 'var(--dt-size-350)' },
    { from: /@su8|var\(--su8\)/g, to: 'var(--dt-size-400)' },
    { from: /@su12|var\(--su12\)/g, to: 'var(--dt-size-450)' },
    { from: /@su16|var\(--su16\)/g, to: 'var(--dt-size-500)' },
    { from: /@su24|var\(--su24\)/g, to: 'var(--dt-size-550)' },
    { from: /@su32|var\(--su32\)/g, to: 'var(--dt-size-600)' },
    { from: /@su48|var\(--su48\)/g, to: 'var(--dt-size-650)' },
    { from: /@su64|var\(--su64\)/g, to: 'var(--dt-size-700)' },
    { from: /@su72|var\(--su72\)/g, to: 'var(--dt-size-720)' },
    { from: /@su84|var\(--su84\)/g, to: 'var(--dt-size-730)' },
    { from: /@su96|var\(--su96\)/g, to: 'var(--dt-size-750)' },
    { from: /@su102|var\(--su102\)/g, to: 'var(--dt-size-760)' },
    { from: /@su114|var\(--su114\)/g, to: 'var(--dt-size-775)' },
    { from: /@su128|var\(--su128\)/g, to: 'var(--dt-size-800)' },
    // Negative spacing
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
    // Border radius
    { from: /@br-(pill|circle)|var\(--br-(pill|circle)\)/g, to: 'var(--dt-size-radius-$1)' },
    { from: /@br0|var\(--br0\)/g, to: 'var(--dt-size-radius-0)' },
    { from: /@br2|var\(--br2\)/g, to: 'var(--dt-size-radius-200)' },
    { from: /@br4|var\(--br4\)/g, to: 'var(--dt-size-radius-300)' },
    { from: /@br8|var\(--br8\)/g, to: 'var(--dt-size-radius-400)' },
    { from: /@br12|var\(--br12\)/g, to: 'var(--dt-size-450)' },
    { from: /@br16|var\(--br16\)/g, to: 'var(--dt-size-radius-500)' },
    { from: /@br24|var\(--br24\)/g, to: 'var(--dt-size-550)' },
    { from: /@br32|var\(--br32\)/g, to: 'var(--dt-size-radius-600)' },
  ],
};
