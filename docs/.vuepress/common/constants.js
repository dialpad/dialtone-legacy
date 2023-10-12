import dialtoneChangelog from '@projectRoot/CHANGELOG.json';
import dialtoneVueChangelog from '@projectRoot/node_modules/@dialpad/dialtone-vue/CHANGELOG.json';

export const DIALTONE_CHANGELOGS = {
  Dialtone: {
    json_file: dialtoneChangelog,
    url_handler: 'dialtone',
  },
  DialtoneVue: {
    json_file: dialtoneVueChangelog,
    url_handler: 'dialtone-vue',
  },
};

export const SHADOW_VARIABLES = [
  'Small',
  'Medium',
  'Large',
  'ExtraLarge',
  'Card',
  'Focus',
  'FocusInset',
].join('|');

export const TYPOGRAPHY_VARIABLES = [
  'Body',
  'BodyCompact',
  'Headline',
  'HeadlineEyebrow',
  'HeadlineSoft',
  'HeadlineCompact',
  'HeadlineCompactSoft',
  'Label',
  'LabelPlain',
  'LabelCompact',
  'LabelCompactPlain',
  'Helper',
  'Code',
].join('|');

export const TYPOGRAPHY_SIZES = [
  'Small',
  'Base',
  'Medium',
  'Large',
  'ExtraLarge',
  'ExtraExtraLarge',
].join('|');

export default {
  DIALTONE_CHANGELOGS,
};
