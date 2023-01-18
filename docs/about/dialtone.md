---
title: About Dialtone
desc: Dialtone is Dialpad's Design System that unites product teams around a common visual language.
---

## Release notes

<div class="d-flg12 d-fl-col2">
  <div class="d-fd-column">
    <h3 class="d-docsite--header-3">Dialtone</h3>
    <div
    v-for="(n, i) in 5"
    :key="i"
    class="d-docsite--paragraph"
  >
    <a :href="getGithubReleaseUrl(i)">
      <h3 class="d-docsite--header-3">v{{ getVersion(i) }}</h3>
    </a>
    <ul class="d-docsite--unordered-list">
      <li
        v-for="(item, index) in changelogJson.versions[i].parsed._"
        :key="index"
        class="d-docsite--list-element"
      >
        <span v-html="formatReleaseNotes(item)" />
      </li>
    </ul>
  </div>
  </div>
  <div class="d-fd-column">
    <h3 class="d-docsite--header-3">Dialtone-vue</h3>
    <dialtone-changelog project="DialtoneVue" />
  </div>
</div>

## Components

Components are reusable building blocks that support a specific interaction or UI need. These components can be reused across Dialpad products and projects
ensuring UI consistency and cohesion while helping teams deliver high-quality features faster.

Dialtone provides two options to use the components: CSS and Vue.

### Vue components (recommended)

Use [Vue components](https://vue.dialpad.design/) in the case your project supports Vue since these components are built conforming to [WCAG AA Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/glance/)
and with usability and performance in mind.

### CSS components

If Vue isn't supported in your application, you can use the [CSS components](../components/avatar.md) in your project, but you'll be responsible
for writing the correct markup, managing DOM elements and events, and making it [accessible for all users](../getting-started/accessibility/fundamentals.md).

See more about [components usage](../getting-started/usage.md/#components).

### Previous Version

[Dialtone 6](https://dialpad.design/version6/) remains viewable, though is no longer being maintained. [Reach out](#contact-us) to the Dialtone team if you have any questions.

## Intake

### Contributions

Read about [how to contribute to Dialtone](../about/contributing.md).

### Request a feature

If your design isn't supported by any existing component, or the component you want to use isn't flexible enough to use in your design,
please request a feature by [filling out this form](https://forms.monday.com/forms/8a9a6ff69d7e9f95caee029c2806e2c1?r=use1).

### Report a bug

Please refer to [CONTRIBUTING.md](https://github.com/dialpad/dialtone/blob/staging/.github/CONTRIBUTING.md#bug-report)
for reporting any issue.

## Contact Us

- [#dialtone](https://dialpad.slack.com/messages/dialtone/) Slack channel
- [dialtone@dialpad.com](mailto:dialtone@dialpad.com)

<script setup>
import { computed } from 'vue';
import dialtoneChangelog from '@projectRoot/CHANGELOG.json';
import dialtoneVueChangelog from '@projectRoot/node_modules/@dialpad/dialtone-vue/CHANGELOG.json';
import MarkdownRender from '@baseComponents/MarkdownRender.vue';
import DialtoneChangelog from '@views/DialtoneChangelog.vue';

const props = defineProps({
  project: {
    type: String,
    default: 'Dialtone',
    validator (value) {
      return ['Dialtone', 'DialtoneVue'].includes(value);
    },
  },
});

const changelogJson = computed(() => props.project === 'DialtoneVue' ? dialtoneVueChangelog : dialtoneChangelog);

const getVersion = (item) => changelogJson.value.versions[item].version;

const getGithubReleaseUrl = (item) => `https://github.com/dialpad/dialtone/releases/tag/v${getVersion(item)}`;

const formatReleaseNotes = (note) => {
  const noteWithoutExtraAsterisks = note.replace(/\*\*/g, '');
  const releaseNoteWithCommitLink = formatReleaseNotesWithCommitLink(noteWithoutExtraAsterisks);
  const releaseNoteWithPrLink = formatReleaseNotesWithPrLink(releaseNoteWithCommitLink);
  return releaseNoteWithPrLink;
};

const formatReleaseNotesWithCommitLink = (note) => {
  const noteWithLink = note.replace(/\(([^)]+)\)$/, (match, text) => {
    const link = `<a href="https://github.com/dialpad/dialtone/commit/${text}">${text}</a>`;
    return `(${link})`;
  });

  return noteWithLink;
};

const formatReleaseNotesWithPrLink = (note) => {
  const noteWithLink = note.replace(/(\([^)]+\))(?!.*\1)/, (match, text) => {
    const content = text.slice(1, -1);
    if (content[0] === '#') {
      const link = `<a href="https://github.com/dialpad/dialtone/pull/${content.slice(1)}">${text}</a>`;
      return `${link}`;
    }
    return text;
  });

  return noteWithLink;
};
</script>
