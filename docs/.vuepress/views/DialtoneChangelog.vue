<template>
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
        <markdown-render :markdown="formatReleaseNotes(item)" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import changelogJson from '@root/CHANGELOG.json';
import MarkdownRender from '@baseComponents/MarkdownRender.vue';

const getVersion = (item) => changelogJson.versions[item].version;

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
