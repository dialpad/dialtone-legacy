export default {
  description:
    'Updates dialtone 7 variables to dialtone 8 design tokens.\n' +
    '- Replaces var(--bs-{kind}) with var(--dt-shadow-{kind})\n\t' +
    'eg. var(--bs-sm) with var(--dt-shadow-small)\n',
  patterns: ['**/*.{css,less,scss,sass,styl,html,vue,md}'],
  expressions: [
    // CSS variables
    { from: /var\(--bs-sm\)/gi, to: 'var(--dt-shadow-small)' },
    { from: /var\(--bs-md\)/gi, to: 'var(--dt-shadow-medium)' },
    { from: /var\(--bs-lg\)/gi, to: 'var(--dt-shadow-large)' },
    { from: /var\(--bs-xl\)/gi, to: 'var(--dt-shadow-extra-large)' },
    { from: /var\(--bs-card\)/gi, to: 'var(--dt-shadow-card)' },
    { from: /var\(--bs-focus-ring\)/gi, to: 'var(--dt-shadow-focus)' },
    { from: /var\(--bs-focus-ring-inset\)/gi, to: 'var(--dt-shadow-focus-inset)' },
  ],
};
